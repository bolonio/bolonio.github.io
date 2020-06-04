import { PageRendererProps } from "gatsby"
import React from "react"
import { Layout } from "../components/layout"
import { SEO } from "../components/seo"
import { PostItem } from "../components/postItem"
import styled from "styled-components"
import { Content } from "../components/content"
import useA11yInReactBlogPosts from "../hooks/useA11yInReactBlogPosts"
import useSiteMetadata from "../hooks/useSiteMetadata"
import { BlueContainer } from "../components/blueContainer"

type Props = PageRendererProps

const AccessibilityInReact = (props: Props) => {
  const posts = useA11yInReactBlogPosts()
  const { author } = useSiteMetadata()

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
          <Header>Accessibility in React</Header>
        </SectionHeader>
      </Section>
      <BlueContainer>
        <Content>
          <IntroText>
            Accessibility in React is a serie of articles to explain how to make
            your React applications accessible.
          </IntroText>
        </Content>
      </BlueContainer>
      <Section>
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

export default AccessibilityInReact
