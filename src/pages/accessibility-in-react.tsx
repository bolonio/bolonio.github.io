import { PageRendererProps } from "gatsby"
import React, { FunctionComponent } from "react"
import { PostItem } from "@components/postItem"
import styled from "styled-components"
import { PageLayoutContent } from "@components/content"
import useA11yInReactBlogPosts from "@hooks/useA11yInReactBlogPosts"
import { Layout } from "@layouts/Layout"
import { PageHeading } from "@components/headings/headings"
import { Paragraph } from "@components/Paragraph"

const AccessibilityInReact: FunctionComponent<PageRendererProps> = ({
  location,
}) => {
  const posts = useA11yInReactBlogPosts()

  const PostsGrid = styled.div`
    display: flex;
    flex-direction: column;
  `

  return (
    <Layout
      title="Accessibility in React"
      description="I write mainly about accessibility and frontend development"
      location={location}
    >
      <PageLayoutContent>
        <PageHeading>Accessibility in React</PageHeading>
        <Paragraph>
          Accessibility in React is a serie of articles to explain how to make
          your React applications accessible.
        </Paragraph>

        <PostsGrid>
          {posts.map((item, i) => (
            <PostItem key={i} post={item.node} mode="horizontal" />
          ))}
        </PostsGrid>
        {/* <span>HERE IT COMES THE PAGINATION</span> */}
      </PageLayoutContent>
    </Layout>
  )
}

export default AccessibilityInReact
