import { PageRendererProps } from "gatsby"
import React from "react"
import { Layout } from "../components/layout"
import { SEO } from "../components/seo"
import { Content } from "../components/content"
import styled from "styled-components"
import { Bio } from "../components/bio"
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

const About = (props: Props) => {
  const { author } = useSiteMetadata()

  return (
    <Layout location={props.location}>
      <SEO title={`About me | ${author}`} canonical={props.location.href} />
      <Section>
        <SectionHeader>
          <Header>About me</Header>
        </SectionHeader>
      </Section>
      <Bio />
      <Section>
        <p>
          The best way to contact me is either via my{" "}
          <ContactLink href="https://twitter.com/bolonio" rel="noopener me">
            Twitter
          </ContactLink>{" "}
          or you can{" "}
          <ContactLink href="mailto:adrian.bolonio@gmail.com" rel="me">
            send me an email.
          </ContactLink>
        </p>
        <p>
          If you’d like me to speak at your conference, feel free to{" "}
          <ContactLink href="mailto:adrian.bolonio@gmail.com" rel="me">
            send me an email
          </ContactLink>
          , but please include the dates and location of the conference, the
          type of conference (the topic of the conference, the type of audience,
          the number of attendees, the number of tracks), the type of the talk
          (keynote, workshop, panel, lightning talk), and if you can cover
          travel and accommodation costs, and the accessibility details of the
          venue.
        </p>
      </Section>
    </Layout>
  )
}

export default About
