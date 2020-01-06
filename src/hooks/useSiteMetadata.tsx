import { graphql, useStaticQuery } from "gatsby"
import { SiteMetadata } from "../utils/types"

interface Props {
  site: {
    siteMetadata: SiteMetadata
  }
}

const useSiteMetadata = () => {
  const data = useStaticQuery<Props>(graphql`
    query {
      site {
        siteMetadata {
          title
          author
          description
          bio
          social {
            twitter
            github
            linkedin
            instagram
          }
          navigation {
            title
            slug
          }
        }
      }
    }
  `)

  return data.site.siteMetadata
}

export default useSiteMetadata
