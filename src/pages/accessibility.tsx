import { PageRendererProps } from "gatsby"
import React, { FunctionComponent } from "react"
import { Page, PageParagraph } from "../templates/Page"

const Accessibility: FunctionComponent<PageRendererProps> = ({ location }) => {
  return (
    <Page
      title="Accessibility statement"
      description="TODO Accessibility statement DESCRIPTION"
      location={location}
    >
      <PageParagraph>Accessibility statement text</PageParagraph>
    </Page>
  )
}

export default Accessibility
