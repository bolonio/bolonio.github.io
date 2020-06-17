import { PageRendererProps } from "gatsby"
import React, { ReactNode, FunctionComponent } from "react"
import { Layout } from "../components/layout"
import { SEO } from "../components/seo"
import { LayoutContent } from "../components/content"
import styled from "styled-components"
import useSiteMetadata from "../hooks/useSiteMetadata"

interface PageProps {
  title?: string
  description?: string
  children: ReactNode
}

export const ContactLink = styled.a`
  color: inherit;
  text-decoration: none;
  box-shadow: 0 2px 0 0 #0c1e29;
  :hover {
    box-shadow: 0 2px 0 0 #0c1e29;
  }
  :focus {
    box-shadow: none;
    outline: 3px solid #0c1e29;
    outline-offset: 0.5rem;
  }
`

const PageLayoutContent = styled(LayoutContent)`
  padding-top: 50px;
  @media screen and (max-width: 1180px) {
    padding-top: 0px;
  }
`

const PageHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 2.5rem;
`

const PageHeader = styled.h1`
  margin: 0;
  font-size: 3.5rem;
`

export const PageParagraph = styled.p`
  width: 75%;
  margin: 0;
  margin-bottom: 1rem;

  @media screen and (max-width: 1180px) {
    width: 100%;
  }
`
export const Page: FunctionComponent<PageProps & PageRendererProps> = ({
  title,
  description,
  children,
  location,
}) => {
  const { author } = useSiteMetadata()
  return (
    <Layout location={location}>
      <SEO
        title={title ? `${title} | ${author}` : undefined}
        description={description}
        canonical={location.href}
      />
      <PageLayoutContent>
        {title && (
          <PageHeaderContainer>
            <PageHeader>{title}</PageHeader>
          </PageHeaderContainer>
        )}
        {children}
      </PageLayoutContent>
    </Layout>
  )
}
