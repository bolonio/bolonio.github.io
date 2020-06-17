import { PageRendererProps } from "gatsby"
import React, { FunctionComponent, Fragment } from "react"
import { Page } from "../templates/Page"
import styled from "styled-components"
import { TalksType, TalkType } from "../utils/types"
import { talks } from "../../content/talks/talks"
import { Talk } from "../components/Talk"

const YearHeader = styled.h2`
  margin: 0;
  margin-bottom: 30px;
  font-size: 2.5rem;
`

const TalkContainer = styled.div`
  margin-bottom: 3rem;
`

const Talks: FunctionComponent<PageRendererProps> = ({ location }) => {
  return (
    <Page title="My Talks" location={location}>
      {/* 
      <PageParagraph>
        but please include the dates and location of the conference, the type of
        conference (the topic of the conference, the type of audience, the
        number of attendees, the number of tracks), the type of the talk
        (keynote, workshop, panel, lightning talk), and if you can cover travel
        and accommodation costs, and the accessibility details of the venue.
      </PageParagraph>
      */}
      {talks.map((talk: TalksType, i) => (
        <Fragment>
          <YearHeader key={i}>{talk.year}</YearHeader>
          <TalkContainer>
            {talk.talks.map((talk: TalkType, i) => (
              <Talk talk={talk} />
            ))}
          </TalkContainer>
        </Fragment>
      ))}
    </Page>
  )
}

export default Talks
