import { graphql, useStaticQuery } from "gatsby"
import { Post } from "../utils/types"

interface Props {
  allMdx: {
    edges: {
      node: Post
    }[]
  }
}

const useAllBlogPosts = () => {
  const data = useStaticQuery<Props>(graphql`
    query {
      allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            id
            excerpt
            fields {
              slug
            }
            body
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              title
              description
              image {
                id
                name
                publicURL
              }
              tags
              imageAlt
            }
          }
        }
      }
    }
  `)

  return data.allMdx.edges
}

export default useAllBlogPosts
