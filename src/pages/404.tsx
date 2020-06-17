import { PageRendererProps } from "gatsby"
import React, { FunctionComponent } from "react"
import { Page, PageParagraph } from "../templates/Page"

const NotFoundPage: FunctionComponent<PageRendererProps> = ({ location }) => {
  return (
    <Page title="Not found" location={location}>
      <PageParagraph>Oh dear, this link isn’t working.</PageParagraph>
    </Page>
  )
}

export default NotFoundPage
