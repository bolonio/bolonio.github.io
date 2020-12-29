import { PageRendererProps } from "gatsby"
import React, { FunctionComponent } from "react"
import { ContactLink } from "@layouts/PageLayout"
import { Paragraph } from "@components/Paragraph"
import styled from "styled-components"
import { PageLayoutContent } from "@components/content"
import { PageHeading } from "@components/headings/headings"
import { Layout } from "@layouts/Layout"
import introImage from "@images/about.jpg"
import { FormattedMessage, useIntl } from "gatsby-plugin-intl"

const BioParagraph = styled(Paragraph)`
  font-size: 1.5rem;
  margin-bottom: 3rem;
`

const About: FunctionComponent<PageRendererProps> = ({ location }) => {
  const intl = useIntl()
  return (
    <Layout title={intl.formatMessage({ id: "About" })} location={location}>
      <img
        src={introImage}
        alt={intl.formatMessage({ id: "PictureOfMeAlt" })}
      />
      <PageLayoutContent>
        <PageHeading>
          <FormattedMessage id={"About"} />
        </PageHeading>
        <BioParagraph>
          <FormattedMessage id={"FullBio"} />
        </BioParagraph>

        <Paragraph>
          <FormattedMessage
            id={"ContactMe"}
            values={{
              twitterLink: (
                <ContactLink
                  href="https://twitter.com/bolonio"
                  rel="noopener me"
                >
                  Twitter
                </ContactLink>
              ),
              emailLink: (
                <ContactLink href="mailto:adrian.bolonio@gmail.com" rel="me">
                  email
                </ContactLink>
              ),
            }}
          />
        </Paragraph>

        <Paragraph>
          <FormattedMessage
            id={"SpeakerInvitation"}
            values={{
              emailLink: (
                <ContactLink
                  href="mailto:adrian.bolonio@gmail.com?subject=We would you to speak at our conference"
                  rel="me"
                >
                  email
                </ContactLink>
              ),
            }}
          />
        </Paragraph>
      </PageLayoutContent>
    </Layout>
  )
}

export default About
