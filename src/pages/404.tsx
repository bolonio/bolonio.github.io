import { PageRendererProps } from "gatsby"
import React from "react"
import { Layout } from "../components/layout"
import { SEO } from "../components/seo"
import { Content } from "../components/content"
import styled from "styled-components"

type Props = PageRendererProps

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
  font-size: 3rem;
  margin-bottom: 50px;
`

const NotFoundPage = (props: Props) => {
  return (
    <Layout location={props.location}>
      <SEO title="Not found" />
      <Section>
        <SectionHeader>
          <Header>Not Found</Header>
        </SectionHeader>
        <p>Oh dear, this link isn’t working.</p>
      </Section>
    </Layout>
  )
}

export default NotFoundPage
