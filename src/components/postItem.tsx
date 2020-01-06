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
  :before  {
    content: "";
    left: 0;
    height: 100%;
    position: absolute;
    top: 0;
    width: 100%;
  }
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
  margin-top: 15px;
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

export const PostItem = (props: PostItemProps) => {
  console.debug(props)
  const frontmatter = props.post!.frontmatter!
  const fields = props.post!.fields!
  const slug = fields.slug!
  const date = getFormattedDate(frontmatter.date)

  const PostContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: ${props.mode === "horizontal" ? "row" : "column"};
    @media screen and (max-width: 700px) {
      flex-direction: column;
    }
    margin-bottom: 20px;
  `

  const PostContent = styled.div`
    display: flex;
    flex-direction: column;
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
      <PostImage src={props.post.frontmatter.image.publicURL} />
      <PostContent>
        <PostTitle>
          <PostLink to={slug}>{title}</PostLink>
        </PostTitle>
        <PostDate>{date}</PostDate>
        <PostDescription>{frontmatter.description}</PostDescription>
      </PostContent>
    </PostContainer>
  )
}
