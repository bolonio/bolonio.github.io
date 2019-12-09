import React from "react"
import { Global } from "@emotion/core"
import { Main, Styled, Container, css } from "theme-ui"
import "typeface-ibm-plex-sans"
import SEO from "@lekoarts/gatsby-theme-minimal-blog/src/components/seo"
import Header from "@lekoarts/gatsby-theme-minimal-blog/src/components/header"
import Footer from "@lekoarts/gatsby-theme-minimal-blog/src/components/footer"
import CodeStyles from "@lekoarts/gatsby-theme-minimal-blog/src/styles/code"
import SkipNavLink from "@lekoarts/gatsby-theme-minimal-blog/src/components/skip-nav"

type LayoutProps = { children: React.ReactNode; className?: string }

const Layout = ({ children, className }: LayoutProps) => (
  <Styled.root data-testid="theme-root">
    <Global
      styles={css({
        "*": {
          boxSizing: `inherit`
        },
        body: {
          margin: 0,
          padding: 0,
          boxSizing: `border-box`,
          textRendering: `optimizeLegibility`
        },
        "::selection": {
          backgroundColor: `primary`,
          color: `white`
        },
        a: {
          transition: `all 0.3s ease-in-out`,
          color: `text`
        }
      })}
    />
    <SEO />
    <SkipNavLink>Skip to content</SkipNavLink>
    <div>
      <Header />
      <Container>
        <Main id="skip-nav" css={css({ ...CodeStyles })} className={className}>
          {children}
        </Main>
      </Container>
      <Footer />
    </div>
  </Styled.root>
)

export default Layout
