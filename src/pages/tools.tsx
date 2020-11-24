import { PageRendererProps } from "gatsby"
import React, { FunctionComponent } from "react"
import { tools } from "@content/tools/tools"
import { PageLayoutContent } from "@components/content"
import { PageHeading } from "@components/headings/headings"
import { Paragraph } from "@components/Paragraph"
import { Layout } from "@layouts/Layout"

const Tools: FunctionComponent<PageRendererProps> = ({ location }) => {
  return (
    <Layout title="Tools" location={location}>
      <PageLayoutContent>
        <PageHeading>Tools</PageHeading>
        <Paragraph>Tools intro text</Paragraph>
        {tools.map(tool => (
          <a href={tool.link}>{tool.name}</a>
        ))}
      </PageLayoutContent>
    </Layout>
  )
}

export default Tools
