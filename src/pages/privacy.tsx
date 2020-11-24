import { PageRendererProps } from "gatsby"
import React, { FunctionComponent } from "react"
import { PageLayoutContent } from "@components/content"
import { PageHeading } from "@components/headings/headings"
import { Layout } from "@layouts/Layout"
import { ContactLink } from "@layouts/PageLayout"
import { Paragraph } from "@components/Paragraph"

const Privacy: FunctionComponent<PageRendererProps> = ({ location }) => {
  return (
    <Layout title="Privacy Policy" location={location}>
      <PageLayoutContent>
        <PageHeading>Privacy Policy</PageHeading>
        <h2>Cookies</h2>
        <Paragraph>
          I use cookies on my website. Cookies files are downloaded to a device
          when certain websites are accessed by users, allowing the website to
          identify that user on subsequent visits.
        </Paragraph>
        <Paragraph>
          The only cookies in use on my site are for Google Analytics. Google
          Analytics are tools employed by organisations to help them understand
          how visitors engage with their website, so improvements can be made.
          Google Analytics collects information anonymously, and reports overall
          trends, without disclosing information on individual visitors. By
          using my site you are consenting to saving and sending us this data.
          You can{" "}
          <ContactLink href="https://tools.google.com/dlpage/gaoptout">
            opt out of Google Analytics
          </ContactLink>{" "}
          – which will not affect how you visit my site.
        </Paragraph>
        <Paragraph>
          My website uses local storage strictly for system administration to
          provide you with the best possible experience – used in order to
          create reports relating to web traffic and user preferences. This
          includes: your IP address; details of which web browser or operating
          system was used; and information on how you use the site.
        </Paragraph>
        <Paragraph>
          All of my activity falls within the bounds of the{" "}
          <ContactLink href="https://www.google.com/analytics/terms/">
            Google Analytics Terms of Service
          </ContactLink>
        </Paragraph>
      </PageLayoutContent>
    </Layout>
  )
}

export default Privacy
