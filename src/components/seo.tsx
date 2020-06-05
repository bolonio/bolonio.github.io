/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { Helmet } from "react-helmet"
import useSiteMetadata from "../hooks/useSiteMetadata"

interface SEOProps {
  title?: string
  canonical?: string
  description?: string
  image?: string
  imageAlt?: string
}

export const SEO = (props: SEOProps) => {
  const {
    siteUrl,
    title,
    description,
    author,
    language,
    twitterUser,
    image,
  } = useSiteMetadata()
  const lang = language || "es"
  const SEOTitle = props.title || title
  const SEODescription = props.description || description
  const SEOCanonical = props.canonical || siteUrl
  const SEOImage = props.image || `${siteUrl}${image}`
  const SEOImageAtl = props.imageAlt || "A picture of Adrián Bolonio"

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={SEOTitle}
      link={
        SEOCanonical
          ? [
              {
                rel: "canonical",
                href: SEOCanonical,
              },
            ]
          : []
      }
      meta={[
        {
          name: `description`,
          content: SEODescription,
        },
        {
          name: `author`,
          content: author,
        },
        {
          name: `viewport`,
          content: "width=device-width, initial-scale=1.0",
        },
        {
          name: `robots`,
          content: "index,follow",
        },
        {
          name: `googlebot`,
          content: "index,follow",
        },
        {
          name: `apple-mobile-web-app-title`,
          content: siteUrl,
        },
        {
          name: `application-name`,
          content: siteUrl,
        },
        {
          name: `theme-color`,
          content: "#23333d",
        },
        // Twitter
        {
          name: `twitter:card`,
          content: "summary_large_image",
        },
        {
          name: `twitter:site`,
          content: twitterUser,
        },
        {
          name: `twitter:creator`,
          content: twitterUser,
        },
        {
          name: `twitter:title`,
          content: SEOTitle,
        },
        {
          name: `twitter:description`,
          content: SEODescription,
        },
        {
          name: `twitter:image`,
          content: SEOImage,
        },
        // OpenGrapth
        {
          name: `og:type`,
          content: "website",
        },
        {
          name: `og:locale`,
          content: "en_US",
        },
        {
          name: `og:title`,
          content: SEOTitle,
        },
        {
          name: `og:url`,
          content: SEOCanonical,
        },
        {
          name: `og:image`,
          content: SEOImage,
        },
        {
          name: `og:image:alt`,
          content: SEOImageAtl,
        },
        {
          name: `og:description`,
          content: SEODescription,
        },
        {
          name: `og:site_name`,
          content: siteUrl,
        },
        {
          name: `DC.title`,
          content: SEOTitle,
        },
      ]}
    />
  )
}
