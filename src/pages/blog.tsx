import { PageRendererProps } from "gatsby"
import React from "react"
import { Layout } from "../components/layout"
import { SEO } from "../components/seo"
import { PostItem } from "../components/postItem"
import styled from "styled-components"
import { Content } from "../components/content"
import useAllBlogPosts from "../hooks/useAllBlogPosts"

type Props = PageRendererProps

const BlogIndex = (props: Props) => {
  const posts = useAllBlogPosts()

  const Section = styled(Content)`
    padding: 50px 0;
  `

  const SectionHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  `

  const Header = styled.h2`
    margin: 0;
    margin-bottom: 50px;
    font-size: 3rem;
  `

  const PostsGrid = styled.div`
    display: flex;
    flex-direction: column;
  `

  return (
    <Layout location={props.location}>
      <SEO title="Home" />
      <Section>
        <SectionHeader>
          <Header>Blog</Header>
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

export default BlogIndex
