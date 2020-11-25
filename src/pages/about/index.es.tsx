import { PageRendererProps } from "gatsby"
import React, { FunctionComponent } from "react"
import useSiteMetadata from "@hooks/useSiteMetadata"
import { ContactLink } from "@layouts/PageLayout"
import { Paragraph } from "@components/Paragraph"
import styled from "styled-components"
import { PageLayoutContent } from "@components/content"
import { PageHeading } from "@components/headings/headings"
import { Layout } from "@layouts/Layout"
import introImage from "@images/about.jpg"

const BioParagraph = styled(Paragraph)`
  font-size: 1.5rem;
  margin-bottom: 3rem;
`

const IntroImage = styled.img`
  margin-bottom: 0;
`

const About: FunctionComponent<PageRendererProps> = ({ location }) => {
  const { bio } = useSiteMetadata()
  return (
    <Layout title="Acerca de mi" location={location}>
      <IntroImage src={introImage} alt="" />
      <PageLayoutContent>
        <PageHeading>Acerca de mi</PageHeading>
        <BioParagraph>{bio}</BioParagraph>

        <Paragraph>
          The best way to contact me is either via my{" "}
          <ContactLink href="https://twitter.com/bolonio" rel="noopener me">
            Twitter
          </ContactLink>{" "}
          or you can{" "}
          <ContactLink href="mailto:adrian.bolonio@gmail.com" rel="me">
            send me an email.
          </ContactLink>
        </Paragraph>

        <Paragraph>
          If you’d like me to speak at your conference, feel free to{" "}
          <ContactLink
            href="mailto:adrian.bolonio@gmail.com?subject=We would you to speak at our conference"
            rel="me"
          >
            send me an email
          </ContactLink>
          , but please include the dates and location of the conference, the
          type of conference (the topic of the conference, the type of audience,
          the number of attendees, the number of tracks), the type of the talk
          (keynote, workshop, panel, lightning talk), and if you can cover
          travel and accommodation costs, and the accessibility details of the
          venue.
        </Paragraph>
      </PageLayoutContent>
    </Layout>
  )
}

export default About
