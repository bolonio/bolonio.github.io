import { PageRendererProps } from "gatsby"
import React, { FunctionComponent } from "react"
import { PageLayoutContent } from "@components/content"
import { PageHeading } from "@components/headings/headings"
import { Layout } from "@layouts/Layout"
import { Paragraph } from "@components/Paragraph"
import { FormattedMessage, useIntl } from "gatsby-plugin-intl"
import { LatestPosts } from "@components/LatestPosts"

const NotFoundPage: FunctionComponent<PageRendererProps> = ({ location }) => {
  const intl = useIntl()
  return (
    <Layout title={intl.formatMessage({ id: "404Title" })} location={location}>
      <PageLayoutContent>
        <PageHeading>
          <FormattedMessage id={"404Title"} />
        </PageHeading>
        <Paragraph>
          <FormattedMessage id={"404Message"} />
        </Paragraph>
        <LatestPosts />
      </PageLayoutContent>
    </Layout>
  )
}

export default NotFoundPage
