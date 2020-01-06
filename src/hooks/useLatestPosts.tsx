import { graphql, useStaticQuery } from "gatsby"
import { Post } from "../utils/types"

interface Props {
  allMdx: {
    edges: {
      node: Post
    }[]
  }
}

const useLatestPosts = () => {
  const data = useStaticQuery<Props>(graphql`
    query {
      allMdx(sort: { fields: [frontmatter___date], order: DESC }, limit: 3) {
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
            }
          }
        }
      }
    }
  `)

  return data.allMdx.edges
}

export default useLatestPosts
