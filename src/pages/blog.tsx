import { PageRendererProps } from "gatsby"
import React, { FunctionComponent } from "react"
import { PostItem } from "@components/postItem"
import styled from "styled-components"
import useAllBlogPosts from "@hooks/useAllBlogPosts"
import { Layout } from "@layouts/Layout"
import { PageLayoutContent } from "@components/content"
import { PageHeading } from "@components/headings/headings"
import introImage from "@images/blog.jpg"

const Blog: FunctionComponent<PageRendererProps> = ({ location }) => {
  const posts = useAllBlogPosts()

  const PostsGrid = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 3rem;
  `

  return (
    <Layout title="Blog" location={location}>
      <img src={introImage} alt="" />
      <PageLayoutContent>
        <PageHeading>Blog</PageHeading>
        <PostsGrid>
          {posts.map((item, i) => (
            <PostItem key={i} post={item.node} mode="horizontal" />
          ))}
        </PostsGrid>
      </PageLayoutContent>
    </Layout>
  )
}

export default Blog
