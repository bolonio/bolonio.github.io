import { PageRendererProps, Link } from "gatsby"
import React from "react"
import { Layout } from "../components/layout"
import { SEO } from "../components/seo"
import { Bio } from "../components/bio"
import { PostItem } from "../components/postItem"
import styled from "styled-components"
import { Content } from "../components/content"
import useLatestPosts from "../hooks/useLatestPosts"

type Props = PageRendererProps

const BlogIndex = (props: Props) => {
  const posts = useLatestPosts()

  const Section = styled(Content)`
    padding: 50px 0;
  `

  const SectionHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    @media screen and (max-width: 700px) {
      flex-direction: column;
    }
  `

  const SectionHeaderLink = styled(Link)`
    font-size: 1.25rem;
    box-shadow: 0 2px 0 0 #0c1e29;
    color: inherit;
    :hover {
      box-shadow: 0 2px 0 0 #0c1e29;
    }
    :focus {
      box-shadow: none;
      outline: 3px solid #0c1e29;
      outline-offset: 0.5rem;
    }
    @media screen and (max-width: 700px) {
      margin-bottom: 40px;
    }
  `

  const Header = styled.h2`
    margin: 0;
    margin-bottom: 50px;
    font-size: 2.5rem;
    @media screen and (max-width: 700px) {
      margin-bottom: 20px;
    }
  `

  const PostsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: minmax(270px, auto);
    grid-gap: 1em;
    @media screen and (max-width: 1000px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 700px) {
      grid-template-columns: repeat(1, 1fr);
    }
  `

  return (
    <Layout location={props.location}>
      <SEO title="Home" />
      <Bio />
      <Section>
        <SectionHeader>
          <Header>Latest Posts</Header>
          <SectionHeaderLink to="/blog">Read all posts</SectionHeaderLink>
        </SectionHeader>
        <PostsGrid>
          {posts.map((item, i) => (
            <PostItem key={i} post={item.node} />
          ))}
        </PostsGrid>
      </Section>
      {/* 
      <hr />
      <Section>
        <SectionHeader>
          <Header>Next Talks</Header>
          <SectionHeaderLink to="/talks">See all talks</SectionHeaderLink>
        </SectionHeader>
      </Section>
      */}
    </Layout>
  )
}

export default BlogIndex
