import React, { FunctionComponent } from "react"
import styled from "styled-components"
import { LayoutContent } from "@components/content"
import InstagramIcon from "@images/instagram.svg"
import TwitterIcon from "@images/twitter.svg"
import GithubIcon from "@images/github.svg"
import LinkedinIcon from "@images/linkedin.svg"
import EmailIcon from "@images/email.svg"
import { Link } from "gatsby"
import useSiteMetadata from "@hooks/useSiteMetadata"
import Logo from "@images/logo_white.svg"
import { FormattedMessage, useIntl } from "gatsby-plugin-intl"
import Box from "@components/core/Box"

const FooterIcon = styled.img`
  fill: #ffffff;
  margin: 0;
  width: 25px;
  @media screen and (max-width: 700px) {
    width: 30px;
  }
`

const FooterLink = styled(Link)`
  color: #ffffff;
  margin-right: 20px;
  box-shadow: none;
  font-family: Mulish, -apple-system, BlinkMacSystemFont, Open Sans, sans-serif !important;

  :hover {
    box-shadow: 0 2px 0 0 #ffffff;
  }
  :focus {
    box-shadow: none;
    outline: 3px solid #ffffff;
    outline-offset: 0.5rem;
  }
  @media screen and (max-width: 700px) {
    margin-left: 0px;
  }
`

const FooterAnchorLink = styled.a`
  color: #ffffff;
  margin-right: 20px;
  box-shadow: none;
  :hover {
    box-shadow: 0 2px 0 0 #ffffff;
  }
  :focus {
    box-shadow: none;
    outline: 3px solid #ffffff;
    outline-offset: 0.5rem;
  }
  @media screen and (max-width: 700px) {
    margin-left: 0px;
  }
`

const FooterIconLink = styled.a`
  margin-left: 20px;
  display: flex;
  text-decoration: none;
  box-shadow: none;
  width: 25px;
  :hover,
  :focus {
    box-shadow: none;
    outline: 3px solid #ffffff;
    outline-offset: 0.5rem;
  }
`

const LogoImage = styled.img`
  fill: #ffffff;
  margin: 0;
  width: 100px;
  margin-right: 2rem;
  @media screen and (max-width: 700px) {
    width: 75px;
  }
`
export const Footer: FunctionComponent = () => {
  const { social, email, footer } = useSiteMetadata()
  const intl = useIntl()
  return (
    <Box background="#23333d" padding="15px 0">
      <LayoutContent>
        <Box
          display="flex"
          justifyContent={["space-between", "flex-start"]}
          alignItems={["center", "flex-start"]}
          flexDirection={["column", "row"]}
        >
          <Box
            display="flex"
            width="100%"
            alignItems="center"
            marginBottom={[2, 0]}
          >
            <LogoImage src={Logo} alt="Logo" />
            {footer.map(item => (
              <FooterLink key={item.slug} to={`/${intl.locale}/${item.slug}`}>
                <FormattedMessage id={item.title} />
              </FooterLink>
            ))}
            <FooterAnchorLink href="/rss.xml">RSS</FooterAnchorLink>
          </Box>

          <Box
            display="flex"
            justifyContent={["space-between", "flex-end"]}
            alignItems="center"
            width="100%"
            height="50px"
          >
            <FooterIconLink
              href={social.twitter}
              target="_blank"
              rel="noopener"
              aria-label={intl.formatMessage(
                { id: "ContactMeVia" },
                { contact: "Twitter" }
              )}
            >
              <FooterIcon src={TwitterIcon} alt="Twitter logo" />
            </FooterIconLink>
            <FooterIconLink
              href={social.instagram}
              target="_blank"
              rel="noopener"
              aria-label={intl.formatMessage(
                { id: "ContactMeVia" },
                { contact: "Instagram" }
              )}
            >
              <FooterIcon src={InstagramIcon} alt="Instagram logo" />
            </FooterIconLink>
            <FooterIconLink
              href={social.github}
              target="_blank"
              rel="noopener"
              aria-label={intl.formatMessage(
                { id: "ContactMeVia" },
                { contact: "Github" }
              )}
            >
              <FooterIcon src={GithubIcon} alt="GitHub logo" />
            </FooterIconLink>
            <FooterIconLink
              href={social.linkedin}
              target="_blank"
              rel="noopener"
              aria-label={intl.formatMessage(
                { id: "ContactMeVia" },
                { contact: "Linkedin" }
              )}
            >
              <FooterIcon src={LinkedinIcon} alt="Linkedin logo" />
            </FooterIconLink>
            <FooterIconLink
              href={`mailto:${email}`}
              target="_blank"
              aria-label={intl.formatMessage({ id: "SendMeAnEmail" })}
            >
              <FooterIcon src={EmailIcon} alt="Email logo" />
            </FooterIconLink>
          </Box>
        </Box>
      </LayoutContent>
    </Box>
  )
}
