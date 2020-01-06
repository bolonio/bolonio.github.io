import { graphql, useStaticQuery } from "gatsby"
import { Post } from "../utils/types"

interface Props {
  allMdx: {
    edges: {
      node: Post
    }[]
  }
}

// allMdx(sort: { fields: [frontmatter___date], order: DESC }, limit: 10) {

/*
query MyQuery {
  allMdx(filter: {fileAbsolutePath: {regex: "/content/articles/"}}) {
    edges {
      node {
        fileAbsolutePath
      }
    }
  }
}
*/

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
            }
          }
        }
      }
    }
  `)

  return data.allMdx.edges
}

export default useAllBlogPosts
