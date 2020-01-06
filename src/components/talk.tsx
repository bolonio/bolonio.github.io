import React from "react"
import styled from "styled-components"
import { TalkType } from "../utils/types"

interface TalkProps {
  talk: TalkType
}

const TalkContainer = styled.div`
  display: flex;
  @media screen and (max-width: 700px) {
    align-items: flex-start;
    flex-direction: column;
  }
  align-items: center;
  justify-content: space-between;
  font-weight: 300;
  line-height: 1.5;
  font-size: 1.25rem;
  padding: 15px 0;
  border-bottom: 1px solid rgba(63, 50, 122, 0.1);
`
const TalkConference = styled.span`
  font-weight: 400;
  @media screen and (max-width: 700px) {
    margin-bottom: 10px;
  }
`
const TalkItem = styled.span`
  font-size: 1.25rem;
  margin-left: 25px;
  @media screen and (max-width: 700px) {
    margin-left: 0;
    margin-right: 25px;
    margin-bottom: 10px;
  }
`

const TalkLink = styled.a`
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
`

const TalkGroup = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 700px) {
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;
  }
`

export const Talk = (props: TalkProps) => (
  <TalkContainer>
    <TalkConference>
      <TalkLink href={props.talk.link} target="_blank">
        {props.talk.conference}
      </TalkLink>
    </TalkConference>
    <TalkGroup>
      <TalkItem>{props.talk.location}</TalkItem>
      <TalkItem>{props.talk.date}</TalkItem>
      <TalkItem>
        {props.talk.slides ? (
          <TalkLink href={props.talk.slides} target="_blank">
            Slides
          </TalkLink>
        ) : (
          <span>Slides</span>
        )}
      </TalkItem>
      <TalkItem>
        {props.talk.video ? (
          <TalkLink href={props.talk.video} target="_blank">
            Video
          </TalkLink>
        ) : (
          <span>Video</span>
        )}
      </TalkItem>
    </TalkGroup>
  </TalkContainer>
)
