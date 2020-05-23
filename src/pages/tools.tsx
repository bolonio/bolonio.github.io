import { PageRendererProps } from "gatsby"
import React from "react"
import { Layout } from "../components/layout"
import { SEO } from "../components/seo"
import { Content } from "../components/content"
import styled from "styled-components"
import { tools } from "../../content/tools/tools"
import useSiteMetadata from "../hooks/useSiteMetadata"

type Props = PageRendererProps

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

const ContactLink = styled.a`
  color: inherit;
  text-decoration: none;
  box-shadow: 0 2px 0 0 #0c1e29;
  :hover {
    box-shadow: 0 2px 0 0 #0c1e29;
  }
  :focus {
    box-shadow: none;
    outline: 3px solid #0c1e29;
    outline-offset: 0.5rem;
  }
`

const YearHeader = styled.h2`
  margin: 0;
  margin-bottom: 30px;
`

const TalkContainer = styled.div`
  margin-bottom: 40px;
`

// TODO: Create this page
const Tools = (props: Props) => {
  const { author } = useSiteMetadata()
  return (
    <Layout location={props.location}>
      <SEO title={`Tools | ${author}`} canonical={props.location.href} />
      <Section>
        <SectionHeader>
          <Header>Tools</Header>
        </SectionHeader>
      </Section>
      <Section>
        <p>I would love to share the tools...</p>
        {tools.map((tool, i) => (
          <React.Fragment>
            <a href={tool.link}>{tool.name}</a>
          </React.Fragment>
        ))}
      </Section>
    </Layout>
  )
}

export default Tools
