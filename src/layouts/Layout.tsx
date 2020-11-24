import { PageRendererProps } from "gatsby"
import React, { ReactNode, Fragment, FunctionComponent } from "react"
import { Header } from "@components/Header"
import { Footer } from "@components/Footer"
import styled from "styled-components"
import { SkipToContent } from "@components/skipToContent"
import { SEO } from "@components/seo"
import useSiteMetadata from "@hooks/useSiteMetadata"

interface LayoutProps extends PageRendererProps {
  title?: string
  description?: string
  children: ReactNode
}

const Main = styled.main`
  min-height: calc(100vh - 168px);
`

export const Layout: FunctionComponent<LayoutProps> = ({
  title,
  description,
  children,
  location,
}) => {
  const { author } = useSiteMetadata()
  return (
    <Fragment>
      <SEO
        title={title ? `${title} | ${author}` : undefined}
        description={description}
        canonical={location.href}
      />
      <SkipToContent />
      <Header />
      <Main id="content">{children}</Main>
      <Footer />
    </Fragment>
  )
}
