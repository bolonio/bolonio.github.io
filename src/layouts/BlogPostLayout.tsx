import React, { FunctionComponent } from "react"
import { graphql, PageRendererProps } from "gatsby"
import { Layout } from "@layouts/Layout"
import { SEO } from "@components/seo"
import styled from "styled-components"
import { PostTitle } from "@components/postTitle"
import { LayoutContent } from "@components/content"
import { PostFrontmatter } from "@utils/types"

interface BlogPostLayoutProps extends PageRendererProps {
  data: {
    markdownRemark: {
      id: string
      excerpt: string
      html: string
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
const BlogPostThanks: FunctionComponent = () => (
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

const BlogPostLayout: FunctionComponent<BlogPostLayoutProps> = ({
  location,
  data,
}) => {
  const post = data.markdownRemark
  return (
    <Layout location={location}>
      <LayoutContent>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
          image={post.frontmatter.image.childImageSharp.resize.src}
          imageAlt={post.frontmatter.imageAlt}
          canonical={location.href}
        />
        <Article>
          <PostTitle
            title={post.frontmatter.title}
            date={post.frontmatter.date}
            tags={post.frontmatter.tags}
          />
        </Article>
        <Article>
          <img
            alt={post.frontmatter.imageAlt}
            src={post.frontmatter.image.childImageSharp.resize.src}
          />
        </Article>
        <Article>
          <section dangerouslySetInnerHTML={{ __html: post.html }} />
          <BlogPostThanks />
          {/*  HERE COMES THE GO TO TOP BUTTON */}
        </Article>
        {/*  HERE COMES THE RELATED BLOGS POST */}
      </LayoutContent>
    </Layout>
  )
}

export default BlogPostLayout

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        image {
          childImageSharp {
            resize(width: 1200) {
              src
              height
              width
            }
          }
        }
        tags
        imageAlt
      }
    }
  }
`
