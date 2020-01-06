import { PageRendererProps } from "gatsby"
import React from "react"
import { Layout } from "../components/layout"
import { SEO } from "../components/seo"
import { Content } from "../components/content"
import styled from "styled-components"
import { Bio } from "../components/bio"

type Props = PageRendererProps

const Section = styled(Content)`
  padding: 50px 0;
`

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`

const Header = styled.h2`
  margin: 0;
  margin-bottom: 50px;
  font-size: 3rem;
`

const Link = styled.a`
  font-size: 1.25rem;
  box-shadow: 0 2px 0 0 #0c1e29;
  color: inherit;
  :hover {
    box-shadow: 0 2px 0 0 #0c1e29;
  }
  :focus {
    box-shadow: none;
    outline: 3px solid #0c1e29;
    outline-offset: 0.5rem;
  }
`

const Privacy = (props: Props) => {
  return (
    <Layout location={props.location}>
      <SEO title="Privacy Policy" />
      <Section>
        <SectionHeader>
          <Header>Privacy Policy</Header>
        </SectionHeader>
        <h2>Cookies</h2>
        <p>
          I use cookies on my website. Cookies files are downloaded to a device
          when certain websites are accessed by users, allowing the website to
          identify that user on subsequent visits.
        </p>
        <p>
          The only cookies in use on my site are for Google Analytics. Google
          Analytics are tools employed by organisations to help them understand
          how visitors engage with their website, so improvements can be made.
          Google Analytics collects information anonymously, and reports overall
          trends, without disclosing information on individual visitors. By
          using my site you are consenting to saving and sending us this data.
          You can{" "}
          <Link href="https://tools.google.com/dlpage/gaoptout">
            opt out of Google Analytics
          </Link>{" "}
          – which will not affect how you visit my site.
        </p>
        <p>
          My website uses local storage strictly for system administration to
          provide you with the best possible experience – used in order to
          create reports relating to web traffic and user preferences. This
          includes: your IP address; details of which web browser or operating
          system was used; and information on how you use the site.
        </p>
        <p>
          All of my activity falls within the bounds of the{" "}
          <Link href="https://www.google.com/analytics/terms/">
            Google Analytics Terms of Service
          </Link>
        </p>
      </Section>
    </Layout>
  )
}

export default Privacy
