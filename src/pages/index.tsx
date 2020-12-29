import { PageRendererProps } from "gatsby"
import React, { FunctionComponent } from "react"
import styled from "styled-components"
import useSiteMetadata from "@hooks/useSiteMetadata"
import { Paragraph } from "@components/Paragraph"
import { LatestPosts } from "@components/LatestPosts"
import introImage from "@images/intro.jpg"
import { Layout } from "@layouts/Layout"
import { PageLayoutContent } from "@components/content"
import { FormattedMessage, useIntl } from "gatsby-plugin-intl"

const Home: FunctionComponent<PageRendererProps> = ({ location }) => {
  const { author } = useSiteMetadata()
  const intl = useIntl()

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
      <img
        src={introImage}
        alt={intl.formatMessage({ id: "PictureOfMeAlt" })}
      />
      <PageLayoutContent>
        <Header>
          <FormattedMessage id={"Hello"} />
        </Header>
        <BioParagraph>
          <FormattedMessage id={"FullBio"} />
        </BioParagraph>
        <LatestPosts />
      </PageLayoutContent>
    </Layout>
  )
}

export default Home
