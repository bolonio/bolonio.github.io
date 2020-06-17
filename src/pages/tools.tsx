import { PageRendererProps } from "gatsby"
import React, { FunctionComponent } from "react"
import { Page, PageParagraph } from "../templates/Page"
import { tools } from "../../content/tools/tools"

const Tools: FunctionComponent<PageRendererProps> = ({ location }) => {
  return (
    <Page title="Tools" location={location}>
      <PageParagraph>Tools intro text</PageParagraph>

      {tools.map(tool => (
        <a href={tool.link}>{tool.name}</a>
      ))}
    </Page>
  )
}

export default Tools
