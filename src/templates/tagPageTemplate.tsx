import React, { FunctionComponent } from "react"
import { graphql, PageProps } from "gatsby"
import styled from "styled-components"
import { Post } from "../utils/types"
import { PostItem } from "../components/postItem"
import { Page } from "./Page"

interface TagPageTemplateProps extends PageProps {
  data: {
    allMdx: {
      edges: {
        node: Post
      }[]
    }
  }
}

const TagPageTemplate: FunctionComponent<TagPageTemplateProps> = ({
  location,
  data,
  pageContext,
}) => {
  const posts = data.allMdx.edges
  const { tag } = pageContext

  const PostsGrid = styled.div`
    display: flex;
    flex-direction: column;
  `

  return (
    <Page title={`Tag: ${tag} (${posts.length} posts)`} location={location}>
      <PostsGrid>
        {posts.map((item, i) => (
          <PostItem key={i} post={item.node} mode="horizontal" />
        ))}
      </PostsGrid>
      {/* <span>HERE IT COMES THE PAGINATION</span> */}
    </Page>
  )
}

export default TagPageTemplate

export const pageQuery = graphql`
  query($tag: String) {
    allMdx(
      filter: { frontmatter: { tags: { in: [$tag] } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
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
`
