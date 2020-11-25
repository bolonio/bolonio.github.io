import { PageRendererProps } from "gatsby"
import React, { FunctionComponent } from "react"
import styled from "styled-components"
import useSiteMetadata from "@hooks/useSiteMetadata"
import { Paragraph } from "@components/Paragraph"
import { LatestPosts } from "@components/LatestPosts"
import introImage from "@images/intro.jpg"
import { Layout } from "@layouts/Layout"
import { PageLayoutContent } from "@components/content"

const Home: FunctionComponent<PageRendererProps> = ({ location }) => {
  const { bio, author } = useSiteMetadata()

  /*
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
  */

  const VisuallyHiddenHeader = styled.h1`
    border: 0;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    left: 0;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    top: 0;
    white-space: nowrap;
    width: 1px;
  `

  const BioParagraph = styled(Paragraph)`
    font-size: 1.5rem;
    margin-bottom: 3rem;
  `

  const Header = styled.h2`
    margin: 0;
    font-size: 3.5rem;
    margin-bottom: 1rem;
  `

  return (
    <Layout location={location}>
      <VisuallyHiddenHeader>{author}</VisuallyHiddenHeader>
      <img src={introImage} alt="" />
      <PageLayoutContent>
        <Header>Hello</Header>
        <BioParagraph>{bio}</BioParagraph>
        <LatestPosts />
      </PageLayoutContent>
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

export default Home
