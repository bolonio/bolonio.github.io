import React from "react"
import styled from "styled-components"
import { Content } from "./content"
import instagram from "../images/instagram.svg"
import twitter from "../images/twitter1.svg"
import github from "../images/github1.svg"
import linkedin from "../images/linkedin.svg"
import email from "../images/email.svg"
import { Link } from "gatsby"

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
  return (
    <FooterContainer>
      <Content>
        <StyledFooter>
          <StyledFooter>
            <FooterText>Adrián Bolonio - {new Date().getFullYear()}</FooterText>
            <FooterLink to="/privacy">Privacy Policy</FooterLink>
          </StyledFooter>

          <FooterIconContainer>
            <FooterIconLink href="https://twitter.com/bolonio" target="_blank">
              <FooterIcon src={twitter} alt="Logo" />
            </FooterIconLink>
            <FooterIconLink href="http://instagram.com/bolonio" target="_blank">
              <FooterIcon src={instagram} alt="Logo" />
            </FooterIconLink>
            <FooterIconLink href="http://github.com/bolonio" target="_blank">
              <FooterIcon src={github} alt="Logo" />
            </FooterIconLink>
            <FooterIconLink
              href="https://www.linkedin.com/in/adrianbolonio/"
              target="_blank"
            >
              <FooterIcon src={linkedin} alt="Logo" />
            </FooterIconLink>
            <FooterIconLink href="mailto:bolonio85@gmail.com" target="_blank">
              <FooterIcon src={email} alt="Logo" />
            </FooterIconLink>
          </FooterIconContainer>
        </StyledFooter>
      </Content>
    </FooterContainer>
  )
}
