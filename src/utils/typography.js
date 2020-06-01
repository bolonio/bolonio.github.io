import Typography from "typography"
import Wordpress2016 from "typography-theme-wordpress-2016"

Wordpress2016.overrideThemeStyles = () => {
  return {
    "*": {
      color: `#23333d`,
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
      boxShadow: `0 2px 0 0 #23333d`,
    },
    "article a:hover": {
      boxShadow: `0 2px 0 0 #23333d`,
    },
    "article a:focus": {
      boxShadow: `none`,
      outline: `3px solid #23333d`,
      outlineOffset: `.5rem`,
    },
    h1: {
      fontWeight: 600,
      lineHeight: 1,
      fontSize: `3rem`,
    },
    h2: {
      fontWeight: 600,
      lineHeight: 1.25,
      fontSize: `2rem`,
      // backgroundImage: `linear-gradient(180deg,transparent 70%,rgba(35, 51, 61, .5) 0);`,
    },
    h3: {
      fontWeight: 400,
      lineHeight: 1.25,
      fontSize: `1.75rem`,
    },
    h4: {
      fontWeight: 400,
      lineHeight: 1.25,
      fontSize: `1.5rem`,
      letterSpacing: `inherit`,
      textTransform: `inherit`,
    },
    h5: {
      fontWeight: 400,
      lineHeight: 1.25,
      fontSize: `1.5rem`,
    },
    p: {
      fontSize: `1.25rem`,
      fontWeight: 300,
      lineHeight: 1.5,
      // "-webkit-font-smoothing": "antialiased",
    },
    blockquote: {
      marginLeft: "0 !important",
      marginRight: "0 !important",
    },
    ".gatsby-highlight": {
      fontFamily: `Montserrat, sans-serif !important`,
      marginBottom: `2rem`,
      boxShadow: "0 20px 60px rgba(0,0,0,.3)",
    },
    'pre[class*="language-"]': {
      borderRadius: "4px",
      backgroundColor: "#282c34",
    },
    ".language-text": {
      padding: ".1em 0.5em !important",
    },
    ".token.parameter": {
      color: "#f8c555",
    },
    ".gatsby-code-title": {
      marginBottom: "-0.6rem",
      padding: "0.3em 0.5em",
      fontSize: "0.8rem",
      zIndex: "0",
      borderRadius: "0.3em",
      display: "inline-block",
      position: "relative",
      top: "15px",
      right: "-10px",
      backgroundColor: "#f8c555",
      color: "#23333d",
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
