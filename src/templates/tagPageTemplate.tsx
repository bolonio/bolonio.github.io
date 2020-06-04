import React from "react"
import { graphql, PageProps } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Layout } from "../components/layout"
import { SEO } from "../components/seo"
import styled from "styled-components"
import { PostTitle } from "../components/postTitle"
import { Content } from "../components/content"
import { PostFrontmatter, Post } from "../utils/types"
import useSiteMetadata from "../hooks/useSiteMetadata"
import { PostItem } from "../components/postItem"

type Props = {
  data: {
    allMdx: {
      edges: {
        node: Post
      }[]
    }
  }
} & PageProps

const TagPageTemplate = (props: Props) => {
  const { author } = useSiteMetadata()
  const posts = props.data.allMdx.edges
  const { tag } = props.pageContext

  const Section = styled(Content)`
    padding: 50px 0;
  `

  const SectionHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  `

  const Header = styled.h1`
    margin: 0;
    margin-bottom: 50px;
    font-size: 3rem;
  `

  const PostsGrid = styled.div`
    display: flex;
    flex-direction: column;
  `

  const IntroText = styled.p`
    font-weight: 300;
    font-size: 1.75rem;
    margin: 0;
    @media screen and (max-width: 1000px) {
      font-size: 1.5rem;
    }
    @media screen and (max-width: 800px) {
      font-size: 1.25rem;
    }
  `

  return (
    <Layout location={props.location}>
      <SEO
        title={`Accessibility in React | ${author}`}
        description="I write mainly about accessibility and frontend development"
        canonical={props.location.href}
      />
      <Section>
        <SectionHeader>
          <Header>
            Tag: {tag} ({posts.length} posts)
          </Header>
        </SectionHeader>
        <PostsGrid>
          {posts.map((item, i) => (
            <PostItem key={i} post={item.node} mode="horizontal" />
          ))}
        </PostsGrid>
        {/* <span>HERE IT COMES THE PAGINATION</span> */}
      </Section>
    </Layout>
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
`
