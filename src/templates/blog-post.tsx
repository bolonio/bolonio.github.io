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
  @media screen and (max-width: 700px) {
    padding: 0;
  }
`

const BlogPostTemplate = (props: BlogPostTemplateProps) => {
  const post = props.data.mdx
  // const { previous, next } = props.pageContext
  return (
    <Layout location={props.location}>
      <Content>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <Article>
          <PostTitle
            title={post.frontmatter.title}
            date={post.frontmatter.date}
          />
          <MDXRenderer>{post.body}</MDXRenderer>
        </Article>
      </Content>
    </Layout>
  )
  // }
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
      }
    }
  }
`
