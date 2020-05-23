module.exports = {
  siteMetadata: {
    title: `Adrián Bolonio | Frontend Web Developer & Web Accessibility (a11y) advocate`,
    author: `Adrián Bolonio`,
    bio: `Hi, my name is Adrián Bolonio. I’m an experienced Team Lead, Frontend Developer, and Web Accessibility (a11y) advocate. I'm from Spain, but since 2012 I've been living and working in Vienna (Austria). When I’m not at the office I enjoy a good read, working my way through any delicious recipe, and indulging my love for travelling to new places.`,
    description: `I’m an experienced Team Lead, Frontend Developer, and Web Accessibility (a11y) advocate.`,
    siteUrl: `https://www.adrianbolonio.com`,
    email: "bolonio85@gmail.com",
    language: "en",
    twitterUser: "@bolonio",
    image: "/images/adrianbolonio.jpg",
    social: {
      twitter: `https://www.twitter.com/bolonio`,
      github: `https://www.github.com/bolonio`,
      linkedin: `https://www.linkedin.com/in/adrianbolonio`,
      instagram: `https://www.instagram.com/bolonio`,
    },
    navigation: [
      {
        title: `Home`,
        slug: `/`,
      },
      {
        title: `Blog`,
        slug: `/blog`,
      },
      {
        title: `Talks`,
        slug: `/talks`,
      },
      {
        title: `About`,
        slug: `/about`,
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/talks`,
        name: `talks`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [".mdx", ".md"],
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-code-titles",
            /*
            options: {
              className: "your-custom-class-name",
            },
            */
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              linkImagesToOriginal: false,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              // Class prefix for <pre> tags containing syntax highlighting;
              // defaults to 'language-' (e.g. <pre class="language-js">).
              // If your site loads Prism into the browser at runtime,
              // (e.g. for use with libraries like react-live),
              // you may use this to prevent Prism from re-processing syntax.
              // This is an uncommon use-case though;
              // If you're unsure, it's best to use the default value.
              classPrefix: "language-",
              // This is used to allow setting a language for inline code
              // (i.e. single backticks) by creating a separator.
              // This separator is a string and will do no white-space
              // stripping.
              // A suggested value for English speakers is the non-ascii
              // character '›'.
              inlineCodeMarker: null,
              // This lets you set up language aliases.  For example,
              // setting this to '{ sh: "bash" }' will let you use
              // the language "sh" which will highlight using the
              // bash highlighter.
              aliases: {},
              // This toggles the display of line numbers globally alongside the code.
              // To use it, add the following line in gatsby-browser.js
              // right after importing the prism color scheme:
              //  require("prismjs/plugins/line-numbers/prism-line-numbers.css")
              // Defaults to false.
              // If you wish to only show line numbers on certain code blocks,
              // leave false and use the {numberLines: true} syntax below
              showLineNumbers: false,
              // If setting this to true, the parser won't handle and highlight inline
              // code used in markdown i.e. single backtick code like `this`.
              noInlineHighlight: false,
              // This adds a new language definition to Prism or extend an already
              // existing language definition. More details on this option can be
              // found under the header "Add new language definition or extend an
              // existing language" below.
              languageExtensions: [
                {
                  language: "superscript",
                  extend: "javascript",
                  definition: {
                    superscript_types: /(SuperType)/,
                  },
                  insertBefore: {
                    function: {
                      superscript_keywords: /(superif|superelse)/,
                    },
                  },
                },
              ],
              // Customize the prompt used in shell output
              // Values below are default
              prompt: {
                user: "root",
                host: "localhost",
                global: false,
              },
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-155221350-1`,
      },
    },
    `gatsby-plugin-feed-mdx`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Adrián Bolonio`,
        short_name: `Adrián Bolonio`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#f3f7f9`,
        display: `minimal-ui`,
        icon: `content/assets/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-typescript`,
    `gatsby-plugin-styled-components`,
  ],
}
