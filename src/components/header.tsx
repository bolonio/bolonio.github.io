import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { Content } from "./content"
import useSiteMetadata from "../hooks/useSiteMetadata"

const HeaderLogo = styled.span`
  font-size: 1.5rem;
  font-weight: 300;
  color: #ffffff;
  @media screen and (max-width: 700px) {
    display: none;
  }
`

const StyledNav = styled.nav`
  display: flex;
  padding: 15px 0;
  justify-content: space-between;
  align-items: baseline;
`

const MenuLink = styled(Link)`
  font-weight: 300;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, Open Sans,
    sans-serif !important;
  margin-right: 25px;
  font-size: 1.25rem;
  text-decoration: none;
  box-shadow: none;
  color: #ffffff;

  :hover {
    box-shadow: 0 2px 0 0 #ffffff;
  }
  :focus {
    outline: 3px solid #ffffff;
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

const HeaderContainer = styled.header`
  background-color: #23333d;
`

export const Header = () => {
  const { navigation } = useSiteMetadata()
  return (
    <HeaderContainer>
      <Content>
        <StyledNav>
          <HeaderLogo>Adrián Bolonio</HeaderLogo>
          <Menu>
            {navigation.map(item => (
              <MenuLink key={item.slug} to={item.slug}>
                {item.title}
              </MenuLink>
            ))}
          </Menu>
        </StyledNav>
      </Content>
    </HeaderContainer>
  )
}
