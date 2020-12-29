import { graphql, useStaticQuery } from "gatsby"
import { Post } from "@utils/types"

interface Props {
  allMarkdownRemark: {
    edges: {
      node: Post
    }[]
  }
}

const useAllBlogPosts = () => {
  const data = useStaticQuery<Props>(graphql`
    query {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            id
            excerpt
            fields {
              slug
              locale
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
              lang
            }
          }
        }
      }
    }
  `)

  return data.allMarkdownRemark.edges
}

export default useAllBlogPosts
