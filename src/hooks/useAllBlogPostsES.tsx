import { graphql, useStaticQuery } from "gatsby"
import { Post } from "@utils/types"

interface Props {
  allMarkdownRemark: {
    edges: {
      node: Post
    }[]
  }
}

const useAllBlogPostsES = () => {
  const data = useStaticQuery<Props>(graphql`
    query {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { fields: { langKey: { regex: "/(es|any)/" } } }
      ) {
        edges {
          node {
            id
            excerpt
            fields {
              slug
              langKey
            }
            html
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              title
              description
              image {
                childImageSharp {
                  resize(width: 1200) {
                    src
                    height
                    width
                  }
                }
              }
              tags
              imageAlt
            }
          }
        }
      }
    }
  `)

  return data.allMarkdownRemark.edges
}

export default useAllBlogPostsES