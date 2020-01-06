/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import Helmet from "react-helmet"
import useSiteMetadata from "../hooks/useSiteMetadata"

interface Meta {
  name: string
  content: string
}

interface Props {
  title: string
  lang?: string
  meta?: Meta[]
  description?: string
}

export const SEO = (props: Props) => {
  const { title, description, author } = useSiteMetadata()
  const lang = props.lang || "en"
  const meta = props.meta || []
  const metaDescription = props.description || description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={props.title}
      titleTemplate={`%s | ${title}`}
      meta={[
        {
          content: metaDescription,
          name: `description`,
        },
        {
          content: props.title,
          property: `og:title`,
        },
        {
          content: metaDescription,
          property: `og:description`,
        },
        {
          content: `website`,
          property: `og:type`,
        },
        {
          content: `summary`,
          name: `twitter:card`,
        },
        {
          content: author,
          name: `twitter:creator`,
        },
        {
          content: props.title,
          name: `twitter:title`,
        },
        {
          content: metaDescription,
          name: `twitter:description`,
        },
      ].concat(meta)}
    />
  )
}
