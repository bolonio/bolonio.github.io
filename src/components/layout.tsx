import { PageRendererProps } from "gatsby"
import React, { ReactNode } from "react"
import { Header } from "./header"
import { Footer } from "./footer"
import styled from "styled-components"
import { SkipToContent } from "../components/skipToContent"

interface Props extends PageRendererProps {
  children: ReactNode
}

const Main = styled.main`
  min-height: calc(100vh - 130px);
`

export const Layout = (props: Props) => {
  const { children } = props
  return (
    <div>
      <SkipToContent />
      <Header />
      <Main id="content">{children}</Main>
      <Footer />
    </div>
  )
}
