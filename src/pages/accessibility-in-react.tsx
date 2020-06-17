import { PageRendererProps } from "gatsby"
import React, { FunctionComponent } from "react"
import { PostItem } from "../components/postItem"
import styled from "styled-components"
import { LayoutContent } from "../components/content"
import useA11yInReactBlogPosts from "../hooks/useA11yInReactBlogPosts"
import { Page, PageParagraph } from "../templates/Page"

const AccessibilityInReact: FunctionComponent<PageRendererProps> = ({
  location,
}) => {
  const posts = useA11yInReactBlogPosts()

  const PostsGrid = styled.div`
    display: flex;
    flex-direction: column;
  `

  return (
    <Page
      title="Accessibility in React"
      description="I write mainly about accessibility and frontend development"
      location={location}
    >
      <PageParagraph>
        Accessibility in React is a serie of articles to explain how to make
        your React applications accessible.
      </PageParagraph>

      <PostsGrid>
        {posts.map((item, i) => (
          <PostItem key={i} post={item.node} mode="horizontal" />
        ))}
      </PostsGrid>
      {/* <span>HERE IT COMES THE PAGINATION</span> */}
    </Page>
  )
}

export default AccessibilityInReact
