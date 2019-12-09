/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Link } from "gatsby"
import useSiteMetadata from "@lekoarts/gatsby-theme-minimal-blog/src//hooks/use-site-metadata"
import replaceSlashes from "@lekoarts/gatsby-theme-minimal-blog/src//utils/replaceSlashes"

type NavigationProps = {
  nav: {
    title: string
    slug: string
  }[]
}

const Navigation = ({ nav }: NavigationProps) => {
  const { basePath } = useSiteMetadata()

  return (
    <nav
      sx={{
        "a:not(:last-of-type)": { mr: 3 },
        fontSize: [1, 2, 2],
        ".active": { color: `heading` }
      }}
    >
      {nav.map(item => (
        <Styled.a
          key={item.slug}
          as={Link}
          activeClassName="active"
          to={replaceSlashes(`/${basePath}/${item.slug}`)}
        >
          {item.title}
        </Styled.a>
      ))}
    </nav>
  )
}

export default Navigation
