import React from "react"
import styled from "styled-components"
import { getFormattedDate } from "@utils/date"
import { Link } from "gatsby"
import { useIntl } from "gatsby-plugin-intl"

interface PostTitleProps {
  title: string
  date: string
  tags: string[]
}

const StyledHeader = styled.header`
  margin-bottom: 2rem;
`

const StyledH1 = styled.h1`
  margin-bottom: 0.5rem;
  font-size: 3.5rem;
`

const StyledDate = styled.span`
  font-weight: 300;
  font-size: 1.5rem;
  line-height: 1.5;
  margin-bottom: 5px;
`

const PostTagsContainer = styled.span`
  display: flex;
  margin-bottom: 10px;
`

const PostTagLink = styled(Link)`
  font-size: 1rem;
  margin-right: 10px;
  line-height: 1.5;
  box-shadow: 0 1px 0 0 #0c1e29;

  :hover {
    box-shadow: 0 1px 0 0 #0c1e29;
  }
`

export const PostTitle = (props: PostTitleProps) => {
  const intl = useIntl()

  return (
    <StyledHeader>
      <StyledH1>{props.title}</StyledH1>
      <StyledDate>{getFormattedDate(props.date, intl.locale)}</StyledDate>
      <PostTagsContainer>
        {props.tags.map((tag, i) => (
          <PostTagLink
            key={i}
            to={`/${intl.locale}/blog/tag/${tag}`}
            aria-label={`See all posts with the tag ${tag}`}
          >
            #{tag}
          </PostTagLink>
        ))}
      </PostTagsContainer>
    </StyledHeader>
  )
}
