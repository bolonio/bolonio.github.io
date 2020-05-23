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
  const SEOTitle = props.title || title
  const SEODescription = props.description || description
  const SEOCanonical = props.canonical || siteUrl
  console.debug(`${siteUrl}${image}`)
  const SEOImage = props.image || `${siteUrl}${image}`
  const SEOImageAtl = props.imageAlt || "A picture of Adrián Bolonio"

  return (
    <Helmet>
      <html lang={language || "en"} />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{SEOTitle}</title>
      <meta name="robots" content="index,follow" />
      <meta name="googlebot" content="index,follow" />
      <meta name="description" content={SEODescription} />
      <link rel="canonical" href={SEOCanonical} />
      <meta name="author" content={author}></meta>

      <meta name="apple-mobile-web-app-title" content={siteUrl} />
      <meta name="application-name" content={siteUrl} />
      <meta name="theme-color" content="#23333d" />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content={twitterUser} />
      <meta name="twitter:creator" content={twitterUser} />
      <meta name="twitter:description" content={SEODescription} />

      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:title" content={SEOTitle} />
      <meta property="og:url" content={SEOCanonical} />
      <meta property="og:image" content={SEOImage} />
      <meta property="og:image:alt" content={SEOImageAtl} />
      <meta property="og:description" content={SEODescription} />
      <meta property="og:site_name" content={siteUrl} />

      <meta property="DC.title" content={SEOTitle} />
    </Helmet>
  )
}
