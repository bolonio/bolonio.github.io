import React, { FunctionComponent } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { LayoutContent } from "./content"
import useSiteMetadata from "../hooks/useSiteMetadata"

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
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
`

const StyledNav = styled.nav`
  display: flex;
  padding: 15px 0;
  justify-content: space-between;
  align-items: center;
`

const MenuLink = styled(Link)`
  font-weight: 300;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, Open Sans,
    sans-serif !important;
  margin-right: 25px;
  font-size: 1.25rem;
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
export const Header: FunctionComponent = () => {
  const { navigation } = useSiteMetadata()
  return (
    <HeaderContainer>
      <LayoutContent>
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
      </LayoutContent>
    </HeaderContainer>
  )
}
