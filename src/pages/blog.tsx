import { PageRendererProps } from "gatsby"
import React, { FunctionComponent } from "react"
import { PostItem } from "@components/postItem"
import styled from "styled-components"
import useAllBlogPosts from "@hooks/useAllBlogPosts"
import { Layout } from "@layouts/Layout"
import { PageLayoutContent } from "@components/content"
import { PageHeading } from "@components/headings/headings"
import introImage from "@images/blog.jpg"
import { useIntl } from "gatsby-plugin-intl"

const PostsGrid = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;
`

const Blog: FunctionComponent<PageRendererProps> = ({ location }) => {
  const intl = useIntl()
  const posts = useAllBlogPosts()
  /*
  const filteredPosts = posts.filter(post =>
    post.node.frontmatter.lang.includes(intl.locale)
  )
  */

  return (
    <Layout title="Blog" location={location}>
      <img
        src={introImage}
        alt={intl.formatMessage({ id: "PictureOfMeAlt" })}
      />
      <PageLayoutContent>
        <PageHeading>Blog</PageHeading>
        <PostsGrid>
          {posts.map((post, i) => (
            <PostItem key={i} post={post.node} mode="horizontal" />
          ))}
        </PostsGrid>
      </PageLayoutContent>
    </Layout>
  )
}

export default Blog
