const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const _ = require("lodash")
const locales = require(`./src/data/i18n`)

// Use a little helper function to remove trailing slashes from paths
removeTrailingSlash = path => (path === `/` ? path : path.replace(/\/$/, ``))

localizedSlug = ({ isDefault, locale, slug }) =>
  isDefault ? `/${slug}` : `/${locale}/${slug}`

// From lodash:
// https://github.com/lodash/lodash/blob/750067f42d3aa5f927604ece2c6df0ff2b2e9d72/findKey.js
findKey = (object, predicate) => {
  let result
  if (object == null) {
    return result
  }
  Object.keys(object).some(key => {
    const value = object[key]
    if (predicate(value, key, object)) {
      result = key
      return true
    }
    return false
  })
  return result
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const BlogPostLayout = path.resolve(`./src/layouts/BlogPostLayout.tsx`)
  const TagPageLayout = path.resolve("./src/layouts/TagPageLayout.tsx")

  const result = await graphql(
    `
      {
        postsGroup: allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fileAbsolutePath
              parent {
                ... on File {
                  relativePath
                  dir
                  base
                }
              }
              fields {
                locale
                isDefault
              }
              frontmatter {
                title
                tags
                lang
              }
            }
          }
        }
        tagsGroup: allMarkdownRemark(limit: 2000) {
          group(field: frontmatter___tags) {
            fieldValue
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create blog posts pages.
  const posts = result.data.postsGroup.edges
  posts.forEach(post => {
    // const locale = language !== "en" ? `/${language}` : ""
    // const previous = index === posts.length - 1 ? null : posts[index + 1].node
    // const next = index === 0 ? null : posts[index - 1].node

    // relativeDirectory is the name of the folder
    const slug = post.node.fileAbsolutePath // TODO: get name of the folder of the files
    const title = post.node.frontmatter.title
    // Use the fields created in exports.onCreateNode
    const locale = post.node.fields.locale
    const isDefault = post.node.fields.isDefault
    console.debug(
      "Creating post...",
      localizedSlug({ isDefault, locale, slug })
    )
    createPage({
      path: localizedSlug({ isDefault, locale, slug }),
      component: BlogPostLayout,
      context: {
        // slug: post.node.fields.slug,
        locale,
        title,
      },
    })
  })

  // Create tag pages.
  const tags = result.data.tagsGroup.group
  tags.forEach(tag => {
    createPage({
      path: `/blog/tag/${_.kebabCase(tag.fieldValue)}`,
      component: TagPageLayout,
      context: {
        tag: tag.fieldValue,
      },
    })
  })
}

// As you don't want to manually add the correct language to the frontmatter of each file
// a new node is created automatically with the filename
// It's necessary to do that -- otherwise you couldn't filter by language
exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  // Check for "md" type so that other files (e.g. images) are exluded
  if (node.internal.type === `MarkdownRemark`) {
    // Use path.basename
    // https://nodejs.org/api/path.html#path_path_basename_path_ext
    const name = path.basename(node.fileAbsolutePath, `.md`)

    // Check if post.name is "index" -- because that's the file for default language
    // (In this case "en")
    const isDefault = name === `index`

    // Find the key that has "default: true" set (in this case it returns "en")
    const defaultKey = findKey(locales, o => o.default === true)

    // Files are defined with "name-with-dashes.lang.md"
    // name returns "name-with-dashes.lang"
    // So grab the lang from that string
    // If it's the default language, pass the locale for that
    const lang = isDefault ? defaultKey : name.split(`.`)[1]

    createNodeField({ node, name: `locale`, value: lang })
    createNodeField({ node, name: `isDefault`, value: isDefault })
  }
}

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions

  // First delete the incoming page that was automatically created by Gatsby
  // So everything in src/pages/
  deletePage(page)

  // Grab the keys ('en' & 'es') of locales and map over them
  Object.keys(locales).map(lang => {
    // Use the values defined in "locales" to construct the path
    const localizedPath = locales[lang].default
      ? page.path
      : `${locales[lang].path}${page.path}`

    return createPage({
      // Pass on everything from the original page
      ...page,
      // Since page.path returns with a trailing slash (e.g. "/de/")
      // We want to remove that
      path: removeTrailingSlash(localizedPath),
      // Pass in the locale as context to every page
      // This context also gets passed to the src/components/layout file
      // This should ensure that the locale is available on every page
      context: {
        ...page.context,
        locale: lang,
        dateFormat: locales[lang].dateFormat,
      },
    })
  })
}
