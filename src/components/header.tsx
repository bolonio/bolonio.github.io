import React, { FunctionComponent } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { LayoutContent } from "@components/content"
import useSiteMetadata from "@hooks/useSiteMetadata"
import Logo from "@images/logo.svg"

const HeaderLogo = styled.span`
  font-size: 1.5rem;
  font-weight: 300;
  color: #23333d;
  @media screen and (max-width: 700px) {
    display: none;
  }
`

const HeaderContainer = styled.header`
  background-color: #ffffff;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
`

const StyledNav = styled.nav`
  display: flex;
  padding: 15px 0;
  justify-content: space-between;
  align-items: center;
`

const MenuLink = styled(Link)`
  font-weight: 800;
  font-family: Mulish, -apple-system, BlinkMacSystemFont, Open Sans, sans-serif !important;
  letter-spacing: -1px;
  margin-right: 25px;
  font-size: 1.5rem;
  text-decoration: none;
  box-shadow: none;
  color: #23333d;

  :hover {
    box-shadow: 0 2px 0 0 #23333d;
  }
  :focus {
    outline: 3px solid #23333d;
    outline-offset: 0.5rem;
  }
`

const Menu = styled.div`
  @media screen and (max-width: 700px) {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
`

const LogoImage = styled.img`
  fill: #23333d;
  margin: 0;
  width: 100px;
  @media screen and (max-width: 700px) {
    width: 30px;
  }
`

export const Header: FunctionComponent = () => {
  const { navigation, languages } = useSiteMetadata()
  return (
    <HeaderContainer>
      <LayoutContent>
        <StyledNav>
          <LogoImage src={Logo} alt="Logo" />
          <Menu>
            {navigation.map(item => (
              <MenuLink key={item.slug} to={item.slug}>
                {item.title}
              </MenuLink>
            ))}
            {/* languages.map((lang, i) => (
              <MenuLink key={i} to={`/${lang}`}>
                {lang}
              </MenuLink>
            )) */}
          </Menu>
        </StyledNav>
      </LayoutContent>
    </HeaderContainer>
  )
}
