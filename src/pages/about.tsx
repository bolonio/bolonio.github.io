import { PageRendererProps } from "gatsby"
import React, { FunctionComponent } from "react"
import useSiteMetadata from "../hooks/useSiteMetadata"
import { Page, PageParagraph, ContactLink } from "../templates/Page"
import styled from "styled-components"
// import aboutPicture from "../../static/images/adrianbolonio-large.jpg"

const BioParagraph = styled(PageParagraph)`
  font-size: 1.5rem;
  margin-bottom: 3rem;
`

const About: FunctionComponent<PageRendererProps> = ({ location }) => {
  const { bio } = useSiteMetadata()
  return (
    <Page title="About me" location={location}>
      <BioParagraph>{bio}</BioParagraph>

      <PageParagraph>
        The best way to contact me is either via my{" "}
        <ContactLink href="https://twitter.com/bolonio" rel="noopener me">
          Twitter
        </ContactLink>{" "}
        or you can{" "}
        <ContactLink href="mailto:adrian.bolonio@gmail.com" rel="me">
          send me an email.
        </ContactLink>
      </PageParagraph>

      <PageParagraph>
        If you’d like me to speak at your conference, feel free to{" "}
        <ContactLink
          href="mailto:adrian.bolonio@gmail.com?subject=We would you to speak at our conference"
          rel="me"
        >
          send me an email
        </ContactLink>
        , but please include the dates and location of the conference, the type
        of conference (the topic of the conference, the type of audience, the
        number of attendees, the number of tracks), the type of the talk
        (keynote, workshop, panel, lightning talk), and if you can cover travel
        and accommodation costs, and the accessibility details of the venue.
      </PageParagraph>
    </Page>
  )
}

export default About
