const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const _ = require("lodash")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const BlogPostLayout = path.resolve(`./src/layouts/BlogPostLayout.tsx`)
  const tagTemplate = path.resolve("./src/layouts/TagPageLayout.tsx")
  const result = await graphql(
    `
      {
        postsGroup: allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
                locale
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

  // Create blog posts pages
  const posts = result.data.postsGroup.edges
  posts.forEach(post => {
    const locale = post.node.fields.locale
    const slug = post.node.fields.slug
    const title = post.node.frontmatter.title
    const lang = post.node.frontmatter.lang
    // console.debug(">>> locale", locale)
    console.debug(">>> Creating post...", slug)
    createPage({
      path: slug,
      component: BlogPostLayout,
      context: {
        slug: slug,
        locale,
        title,
        lang,
      },
    })
  })

  // Create tag pages
  const tags = result.data.tagsGroup.group

  tags.forEach(tag => {
    createPage({
      path: `/blog/tag/${_.kebabCase(tag.fieldValue)}/`,
      component: tagTemplate,
      context: {
        tag: tag.fieldValue,
      },
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({ node, name: `locale`, value: "en" })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.onCreatePage = ({ page, actions }) => {
  console.debug(">>> Creating page...", page.path)
  /*
  const { createPage, deletePage } = actions
  // console.debug("onCreatePage lang", page)
  if (page.component.includes("BlogPostLayout")) {
    deletePage(page)
    if (page.context.lang === page.context.language) {
      console.debug(">>>> onCreatePage page", page.context.lang)
      const path = page.path.replace("/index.es", "")
      console.debug(">>>> onCreatePage path", path)
      const slug = page.context.slug.replace("/index.es", "")
      console.debug(">>>> onCreatePage slug", slug)
      // console.debug(">>>> onCreatePage page", page)
      const newPage = {
        ...page,
        path: path,
        context: {
          ...page.context,
          slug: slug,
          intl: {
            ...page.context.intl,
            originalPath: path,
          },
        },
      }
      console.debug(">>>> onCreatePage page", newPage)
      createPage(newPage)
      console.debug(
        ">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>"
      )
    }
  }
  */
}
