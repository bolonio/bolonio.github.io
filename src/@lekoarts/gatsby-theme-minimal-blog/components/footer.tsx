/** @jsx jsx */
import { jsx, Styled, Container } from "theme-ui"
import { Flex } from "@theme-ui/components"
import useSiteMetadata from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-site-metadata"

const Footer = () => {
  const { siteTitle } = useSiteMetadata()

  return (
    <Flex
      as="footer"
      sx={{
        variant: `dividers.top`,
        justifyContent: `space-between`,
        mt: [4],
        mb: [2],
        color: `secondary`,
        a: {
          variant: `links.secondary`
        },
        flexDirection: [`column`, `column`, `row`]
      }}
    >
      <Container sx={{ py: [3, 3] }}>
        <div>
          &copy; {new Date().getFullYear()} by {siteTitle}
        </div>
      </Container>
    </Flex>
  )
}

export default Footer
