import { PageRendererProps } from "gatsby"
import React, { ReactNode, Fragment, FunctionComponent } from "react"
import { Header } from "./header"
import { Footer } from "./footer"
import styled from "styled-components"
import { SkipToContent } from "../components/skipToContent"

interface LayoutProps extends PageRendererProps {
  children: ReactNode
}

const Main = styled.main`
  min-height: calc(100vh - 178px);
`
export const Layout: FunctionComponent<LayoutProps> = ({ children }) => (
  <Fragment>
    <SkipToContent />
    <Header />
    <Main id="content">{children}</Main>
    <Footer />
  </Fragment>
)
