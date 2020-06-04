import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { getFormattedDate } from "../utils/date"
import { Post } from "../utils/types"

interface PostItemProps {
  mode?: "horizontal" | "vertical"
  post: Post
}

const PostLink = styled(Link)`
  box-shadow: 0 2px 0 0 #0c1e29;
  color: inherit;

  :hover {
    box-shadow: 0 2px 0 0 #0c1e29;
  }
  :focus {
    outline: 3px solid #0c1e29;
    outline-offset: 0.5rem;
    box-shadow: none;
  }
`

const PostTitle = styled.h2`
  margin-top: 0px;
  margin-bottom: 10px;
  font-weight: 400;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, Open Sans,
    sans-serif !important;
  font-size: 1.75rem;
  @media screen and (max-width: 1000px) {
    font-size: 1.5rem;
  }
  @media screen and (max-width: 700px) {
    font-size: 2rem;
  }
`

const PostDate = styled.span`
  font-weight: 300;
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 5px;
`

const PostDescription = styled.span`
  font-weight: 300;
  font-size: 1.25rem;
  line-height: 1.5;
  @media screen and (max-width: 1000px) {
    font-size: 1rem;
  }
  @media screen and (max-width: 700px) {
    font-size: 1.25rem;
  }
`

const PostContent = styled.div`
  display: flex;
  flex-direction: column;
`

const PostTagsContainer = styled.span`
  display: flex;
  margin-bottom: 10px;
`

const PostTagLink = styled(PostLink)`
  font-size: 0.8rem;
  margin-right: 10px;
  line-height: 1.5;
  box-shadow: 0 1px 0 0 #0c1e29;

  :hover {
    box-shadow: 0 1px 0 0 #0c1e29;
  }
`

export const PostItem = (props: PostItemProps) => {
  const frontmatter = props.post!.frontmatter!
  const fields = props.post!.fields!
  const slug = fields.slug!
  const date = getFormattedDate(frontmatter.date)

  const PostContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: ${props.mode === "horizontal" ? "row" : "column"};
    align-items: flex-start;
    @media screen and (max-width: 700px) {
      flex-direction: column;
    }
    margin-bottom: 20px;
  `

  const PostImage = styled.img`
    margin-bottom: 0px;

    ${props.mode === "horizontal" ? "margin-right: 20px;" : ""};
    ${props.mode === "horizontal"
      ? `
    max-width: 370px;
    @media screen and (max-width: 1000px) {
      max-width: 300px;
    }
    @media screen and (max-width: 700px) {
      max-width: 100%;
    }`
      : ""};
  `

  const title = frontmatter.title || fields.slug
  return (
    <PostContainer>
      <PostImage
        alt={props.post.frontmatter.imageAlt}
        src={props.post.frontmatter.image.publicURL}
      />
      <PostContent>
        <PostTitle>
          <PostLink to={slug}>{title}</PostLink>
        </PostTitle>
        <PostDate>{date}</PostDate>
        <PostTagsContainer>
          {frontmatter.tags.map((tag, i) => (
            <PostTagLink
              key={i}
              to={`/blog/tag/${tag}`}
              aria-label={`See all posts with the tag ${tag}`}
            >
              #{tag}
            </PostTagLink>
          ))}
        </PostTagsContainer>
        <PostDescription>{props.post.excerpt}</PostDescription>
      </PostContent>
    </PostContainer>
  )
}
