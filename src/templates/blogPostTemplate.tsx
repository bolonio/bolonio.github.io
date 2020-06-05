import React from "react"
import { graphql, PageRendererProps } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Layout } from "../components/layout"
import { SEO } from "../components/seo"
import styled from "styled-components"
import { PostTitle } from "../components/postTitle"
import { Content } from "../components/content"
import { PostFrontmatter } from "../utils/types"

interface BlogPostTemplateProps extends PageRendererProps {
  data: {
    mdx: {
      id: string
      excerpt: string
      body: string
      frontmatter: PostFrontmatter
    }
  }
}

const Article = styled.article`
  padding: 0 1.5rem;
  width: 75%;
  margin-right: auto;
  margin-left: auto;
  @media screen and (max-width: 900px) {
    padding: 0;
    width: 100%;
  }
`

const ContactLink = styled.a`
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

const BlogPostThanks = () => (
  <p>
    Thank you for reading this article. If you have any question to ask, any
    recommendation to make, or any appreciation to give, please feel free to
    contact me. The best way to contact me is either via my{" "}
    <ContactLink href="https://twitter.com/bolonio" rel="noopener me">
      Twitter
    </ContactLink>{" "}
    or you can{" "}
    <ContactLink href="mailto:adrian.bolonio@gmail.com" rel="me">
      send me an email.
    </ContactLink>
  </p>
)

const BlogPostTemplate = (props: BlogPostTemplateProps) => {
  const post = props.data.mdx
  // const { previous, next } = props.pageContext
  return (
    <Layout location={props.location}>
      <Content>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
          image={post.frontmatter.image.publicURL}
          imageAlt={post.frontmatter.imageAlt}
          canonical={props.location.href}
        />
        <Article>
          <PostTitle
            title={post.frontmatter.title}
            date={post.frontmatter.date}
            tags={post.frontmatter.tags}
          />
        </Article>
        <img
          alt={post.frontmatter.imageAlt}
          src={post.frontmatter.image.publicURL}
        />
        <Article>
          <MDXRenderer>{post.body}</MDXRenderer>
          <BlogPostThanks />
          {/*  HERE COMES THE GO TO TOP BUTTON */}
        </Article>
        {/*  HERE COMES THE RELATED BLOGS POST */}
      </Content>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        image {
          id
          name
          publicURL
        }
        tags
        imageAlt
      }
    }
  }
`