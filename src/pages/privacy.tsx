import { PageRendererProps } from "gatsby"
import React, { FunctionComponent } from "react"
import { Page, PageParagraph, ContactLink } from "../templates/Page"

const Privacy: FunctionComponent<PageRendererProps> = ({ location }) => {
  return (
    <Page title="Privacy Policy" location={location}>
      <h2>Cookies</h2>
      <PageParagraph>
        I use cookies on my website. Cookies files are downloaded to a device
        when certain websites are accessed by users, allowing the website to
        identify that user on subsequent visits.
      </PageParagraph>
      <PageParagraph>
        The only cookies in use on my site are for Google Analytics. Google
        Analytics are tools employed by organisations to help them understand
        how visitors engage with their website, so improvements can be made.
        Google Analytics collects information anonymously, and reports overall
        trends, without disclosing information on individual visitors. By using
        my site you are consenting to saving and sending us this data. You can{" "}
        <ContactLink href="https://tools.google.com/dlpage/gaoptout">
          opt out of Google Analytics
        </ContactLink>{" "}
        – which will not affect how you visit my site.
      </PageParagraph>
      <PageParagraph>
        My website uses local storage strictly for system administration to
        provide you with the best possible experience – used in order to create
        reports relating to web traffic and user preferences. This includes:
        your IP address; details of which web browser or operating system was
        used; and information on how you use the site.
      </PageParagraph>
      <PageParagraph>
        All of my activity falls within the bounds of the{" "}
        <ContactLink href="https://www.google.com/analytics/terms/">
          Google Analytics Terms of Service
        </ContactLink>
      </PageParagraph>
    </Page>
  )
}

export default Privacy
