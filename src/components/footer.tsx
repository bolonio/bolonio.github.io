import React from "react"
import styled from "styled-components"
import { Content } from "./content"
import InstagramIcon from "../images/instagram.svg"
import TwitterIcon from "../images/twitter1.svg"
import GithubIcon from "../images/github1.svg"
import LinkedinIcon from "../images/linkedin.svg"
import EmailIcon from "../images/email.svg"
import { Link } from "gatsby"
import useSiteMetadata from "../hooks/useSiteMetadata"

const StyledFooter = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 400;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, Open Sans,
    sans-serif !important;
  @media screen and (max-width: 700px) {
    flex-direction: column;
    margin-bottom: 20px;
  }
`

const FooterContainer = styled.footer`
  background-color: #23333d;
  padding: 15px 15px;
`

const FooterText = styled.span`
  color: #ffffff;
  display: flex;
  align-items: center;
  @media screen and (max-width: 700px) {
    margin-bottom: 20px;
    justify-content: space-between;
  }
`

const FooterIcon = styled.img`
  fill: #ffffff;
  margin: 0;
  width: 20px;
  @media screen and (max-width: 700px) {
    width: 30px;
  }
`

const FooterLink = styled(Link)`
  color: #ffffff;
  margin-left: 20px;
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
  :focus {
    box-shadow: none;
    outline: 3px solid #ffffff;
    outline-offset: 0.5rem;
  }
`

const FooterIconContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Footer = () => {
  const { social, email } = useSiteMetadata()
  return (
    <FooterContainer>
      <Content>
        <StyledFooter>
          <StyledFooter>
            <FooterText>Adrián Bolonio - {new Date().getFullYear()}</FooterText>
            <FooterLink to="/privacy">Privacy Policy</FooterLink>
          </StyledFooter>

          <FooterIconContainer>
            <FooterIconLink
              href={social.twitter}
              target="_blank"
              rel="noopener"
              aria-label="Go to my Twitter profile"
            >
              <FooterIcon src={TwitterIcon} alt="Twitter logo" />
            </FooterIconLink>
            <FooterIconLink
              href={social.instagram}
              target="_blank"
              rel="noopener"
              aria-label="Go to my Instagram profile"
            >
              <FooterIcon src={InstagramIcon} alt="Instagram logo" />
            </FooterIconLink>
            <FooterIconLink
              href={social.github}
              target="_blank"
              rel="noopener"
              aria-label="Go to my GitHub profile"
            >
              <FooterIcon src={GithubIcon} alt="GitHub logo" />
            </FooterIconLink>
            <FooterIconLink
              href={social.linkedin}
              target="_blank"
              rel="noopener"
              aria-label="Go to my Linkedin profile"
            >
              <FooterIcon src={LinkedinIcon} alt="Linkedin logo" />
            </FooterIconLink>
            <FooterIconLink
              href={`mailto:${email}`}
              target="_blank"
              aria-label="Send me an email"
            >
              <FooterIcon src={EmailIcon} alt="Email logo" />
            </FooterIconLink>
          </FooterIconContainer>
        </StyledFooter>
      </Content>
    </FooterContainer>
  )
}
