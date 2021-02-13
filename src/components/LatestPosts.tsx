import { Link } from "gatsby"
import React, { FunctionComponent, Fragment } from "react"
import { PostItem } from "@components/postItem"
import styled from "styled-components"
import { FormattedMessage, useIntl } from "gatsby-plugin-intl"
import useAllBlogPosts from "@hooks/useAllBlogPosts"

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 2rem;
  @media screen and (max-width: 700px) {
    margin-bottom: 20px;
    flex-direction: column;
  }
`

const SectionHeaderLink = styled(Link)`
  font-size: 1.25rem;
  box-shadow: 0 2px 0 0 #0c1e29;
  color: inherit;
  :hover {
    box-shadow: 0 2px 0 0 #0c1e29;
  }
  :focus {
    box-shadow: none;
    outline: 3px solid #0c1e29;
    outline-offset: 0.5rem;
  }
  @media screen and (max-width: 700px) {
    margin-bottom: 40px;
  }
`

const Header = styled.h2`
  margin: 0;
  font-size: 3.5rem;
`

const PostsGrid = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;
`

const Post = styled.div`
  margin-right: 1rem;
`

export const LatestPosts: FunctionComponent = () => {
  const intl = useIntl()
  const posts = useAllBlogPosts()
  const filteredPosts = posts
    .filter(post => post.node.frontmatter.lang.includes(intl.locale))
    .slice(0, 3)

  return (
    <Fragment>
      <SectionHeader>
        <Header>
          <FormattedMessage id="Latest Posts" />
        </Header>
        <SectionHeaderLink to={`/${intl.locale}/blog`}>
          <FormattedMessage id="All blog posts" />
        </SectionHeaderLink>
      </SectionHeader>
      <PostsGrid>
        {filteredPosts.map((post, i) => (
          <Post key={i}>
            <PostItem post={post.node} mode="horizontal" />
          </Post>
        ))}
      </PostsGrid>
    </Fragment>
  )
}
