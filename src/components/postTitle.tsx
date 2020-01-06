import React from "react"
import styled from "styled-components"
import { getFormattedDate } from "../utils/date"

interface PostTitleProps {
  title: string
  date: string
}

const StyledHeader = styled.header`
  margin-bottom: 4rem;
`

const StyledH1 = styled.h1`
  margin-bottom: 0.5rem;
`

const StyledDate = styled.span`
  font-weight: 300;
  font-size: 1.25rem;
  line-height: 1.5;
`

export const PostTitle = (props: PostTitleProps) => (
  <StyledHeader>
    <StyledH1>{props.title}</StyledH1>
    <StyledDate>{getFormattedDate(props.date)}</StyledDate>
  </StyledHeader>
)
