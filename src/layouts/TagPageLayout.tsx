import React, { FunctionComponent } from "react"
import { graphql, PageProps } from "gatsby"
import styled from "styled-components"
import { Post } from "@utils/types"
import { PostItem } from "@components/postItem"
import { PageLayoutContent } from "@components/content"
import { PageHeading } from "@components/headings/headings"
import { Layout } from "@layouts/Layout"
import introImage from "@images/blog.jpg"

interface TagPageTemplateProps extends PageProps {
  data: {
    allMarkdownRemark: {
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
  const posts = data.allMarkdownRemark.edges
  const { tag } = pageContext

  const PostsGrid = styled.div`
    display: flex;
    flex-direction: column;
  `

  return (
    <Layout title={`Tag: ${tag} (${posts.length} posts)`} location={location}>
      <img src={introImage} alt="" />
      <PageLayoutContent>
        <PageHeading>{`Tag: ${tag} (${posts.length} ${
          posts.length > 1 ? "posts" : "post"
        })`}</PageHeading>
        <PostsGrid>
          {posts.map((item, i) => (
            <PostItem key={i} post={item.node} mode="horizontal" />
          ))}
        </PostsGrid>
        {/* <span>HERE IT COMES THE PAGINATION</span> */}
      </PageLayoutContent>
    </Layout>
  )
}

export default TagPageTemplate

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      filter: { frontmatter: { tags: { in: [$tag] } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
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
`
