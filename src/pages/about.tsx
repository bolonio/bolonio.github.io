import { PageRendererProps } from "gatsby"
import React from "react"
import { Layout } from "../components/layout"
import { SEO } from "../components/seo"
import { Content } from "../components/content"
import styled from "styled-components"
import { Bio } from "../components/bio"

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

const About = (props: Props) => {
  return (
    <Layout location={props.location}>
      <SEO title="About me" />
      <Section>
        <SectionHeader>
          <Header>About me</Header>
        </SectionHeader>
      </Section>
      <Bio />
      <Section>
        <p>
          The easiest way to contact me is via{" "}
          <ContactLink href="mailto:bolonio85@gmail.com" rel="me">
            email
          </ContactLink>{" "}
          or via{" "}
          <ContactLink href="https://twitter.com/bolonio" rel="noopener me">
            twitter
          </ContactLink>
          .
        </p>
        <p>
          If you’d like me to speak at your conference, feel free to send me an{" "}
          <ContactLink href="mailto:bolonio85@gmail.com">email</ContactLink>,
          but please include: the dates and location of the conference, the type
          of conference (what is the topic of the conference, who is your
          audience, how many people will attend, how many tracks the conference
          will have), the type of the talk (keynote, workshop, panel, lightning
          talk), and if you can cover travel and accommodation costs.
        </p>
      </Section>
    </Layout>
  )
}

export default About
