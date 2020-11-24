import { PageRendererProps } from "gatsby"
import React, { FunctionComponent } from "react"
import { PageLayoutContent } from "@components/content"
import { PageHeading } from "@components/headings/headings"
import { Layout } from "@layouts/Layout"
import { Paragraph } from "@components/Paragraph"

const NotFoundPage: FunctionComponent<PageRendererProps> = ({ location }) => {
  return (
    <Layout title="Not found" location={location}>
      <PageLayoutContent>
        <PageHeading>Not found</PageHeading>
        <Paragraph>Oh dear, this link isn’t working.</Paragraph>
      </PageLayoutContent>
    </Layout>
  )
}

export default NotFoundPage
