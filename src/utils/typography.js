import Typography from "typography"
import Wordpress2016 from "typography-theme-wordpress-2016"

Wordpress2016.overrideThemeStyles = () => {
  return {
    "*": {
      color: `#485a64`,
      fontFamily:
        "system-ui, -apple-system, BlinkMacSystemFont, Open Sans, sans-serif !important",
    },
    "article a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
    "article .gatsby-resp-image-wrapper": {
      maxWidth: "100% !important",
    },
    "article a": {
      color: "inherit",
      textDecoration: `none`,
      boxShadow: `0 2px 0 0 #0c1e29`,
    },
    "article a:hover": {
      boxShadow: `0 2px 0 0 #0c1e29`,
    },
    "article a:focus": {
      boxShadow: `none`,
      outline: `3px solid #0c1e29`,
      outlineOffset: `.5rem`,
    },
    h1: {
      color: `#0c1e29`,
      fontWeight: 600,
      lineHeight: 1,
      fontSize: `3rem`,
    },
    h2: {
      color: `#0c1e29`,
      fontWeight: 600,
      lineHeight: 1.25,
      fontSize: `2rem`,
      // backgroundImage: `linear-gradient(180deg,transparent 70%,rgba(35, 51, 61, .5) 0);`,
    },
    h3: {
      color: `#0c1e29`,
      fontWeight: 400,
      lineHeight: 1.25,
      fontSize: `1.75rem`,
    },
    h4: {
      color: `#0c1e29`,
      fontWeight: 400,
      lineHeight: 1.25,
      fontSize: `1.5rem`,
      letterSpacing: `inherit`,
      textTransform: `inherit`,
    },
    h5: {
      color: `#0c1e29`,
      fontWeight: 400,
      lineHeight: 1.25,
      fontSize: `1.5rem`,
    },
    p: {
      color: `#485a64`,
      fontSize: `1.25rem`,
      fontWeight: 300,
      lineHeight: 1.5,
      // "-webkit-font-smoothing": "antialiased",
    },
    blockquote: {
      marginLeft: 0,
      marginRight: 0,
    },
    ".gatsby-highlight": {
      fontFamily: `Montserrat, sans-serif !important`,
    },
    ".language-text": {
      padding: ".2em 0.5em !important",
    },
  }
}

delete Wordpress2016.googleFonts

const typography = new Typography(Wordpress2016)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
