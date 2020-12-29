import InstagramIcon from "@images/instagram_dark.svg"
import TwitterIcon from "@images/twitter_dark.svg"
import GithubIcon from "@images/github_dark.svg"
import LinkedinIcon from "@images/linkedin_dark.svg"
import EmailIcon from "@images/email_dark.svg"
import WebIcon from "@images/www_dark.svg"
import React, { FunctionComponent } from "react"
import Box from "@components/core/Box"
import Text from "@components/core/Text"
import styled from "styled-components"
import { ContactLink } from "@layouts/PageLayout"
import { useIntl } from "gatsby-plugin-intl"

const Icon = styled.img`
  fill: #ffffff;
  margin: 0;
  width: 25px;
  margin-right: 8px;
  @media screen and (max-width: 700px) {
    width: 30px;
  }
`

export const ContactCV: FunctionComponent = () => {
  const intl = useIntl()

  const contactMe = [
    {
      icon: WebIcon,
      name: "Web",
      title: "www.adrianbolonio.com",
      url: "https://www.adrianbolonio.com/",
    },
    {
      icon: EmailIcon,
      name: "Email",
      title: "Contact me",
      url: "mailto: adrian.bolonio@gmail.com",
    },
    {
      icon: TwitterIcon,
      name: "Twitter",
      title: "@bolonio",
      url: "https://twitter.com/bolonio",
      ariaLabel: intl.formatMessage(
        { id: "ContactMeVia" },
        { contact: "Twitter" }
      ),
    },
    {
      icon: GithubIcon,
      name: "Github",
      title: "@bolonio",
      url: "https://github.com/bolonio",
      ariaLabel: intl.formatMessage(
        { id: "ContactMeVia" },
        { contact: "Github" }
      ),
    },
    {
      icon: LinkedinIcon,
      name: "LinkedIn",
      title: "Adrián Bolonio",
      url: "https://www.linkedin.com/in/adrianbolonio/",
      ariaLabel: intl.formatMessage(
        { id: "ContactMeVia" },
        { contact: "LinkedIn" }
      ),
    },
    {
      icon: InstagramIcon,
      name: "Instagram",
      title: "@bolonio",
      url: "https://instagram.com/bolonio",
      ariaLabel: intl.formatMessage(
        { id: "ContactMeVia" },
        { contact: "Instagram" }
      ),
    },
  ]

  return (
    <Box marginBottom="2">
      {contactMe.map((contact, i: number) => (
        <Box key={i} display="flex" alignItems="center" marginBottom="3">
          <Icon
            aria-hidden="true"
            src={contact.icon}
            alt={`${contact.name} logo`}
          />
          <ContactLink
            href={contact.url}
            rel="noopener me"
            target="_blank"
            aria-label={contact.ariaLabel!}
          >
            <Text fontWeight="bold">
              {intl.formatMessage({ id: contact.title })}
            </Text>
          </ContactLink>
        </Box>
      ))}
    </Box>
  )
}
