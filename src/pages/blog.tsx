import { PageRendererProps } from "gatsby"
import React, { FunctionComponent } from "react"
import { PostItem } from "../components/postItem"
import styled from "styled-components"
import useAllBlogPosts from "../hooks/useAllBlogPosts"
import { Page } from "../templates/Page"

const Blog: FunctionComponent<PageRendererProps> = ({ location }) => {
  const posts = useAllBlogPosts()

  const PostsGrid = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 3rem;
  `

  return (
    <Page title="Blog" location={location}>
      <PostsGrid>
        {posts.map((item, i) => (
          <PostItem key={i} post={item.node} mode="horizontal" />
        ))}
      </PostsGrid>
    </Page>
  )
}

export default Blog
