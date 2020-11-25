import { PageRendererProps } from "gatsby"
import React, { FunctionComponent, Fragment } from "react"
import styled from "styled-components"
import { TalksType, TalkType } from "@utils/types"
import { talks } from "@content/talks/talks"
import { Talk } from "@components/Talk"
import { Layout } from "@layouts/Layout"
import { PageLayoutContent } from "@components/content"
import { PageHeading } from "@components/headings/headings"
import introImage from "@images/talks.jpg"

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
    <Layout title="My Talks" location={location}>
      {/* 
      <Paragraph>
        but please include the dates and location of the conference, the type of
        conference (the topic of the conference, the type of audience, the
        number of attendees, the number of tracks), the type of the talk
        (keynote, workshop, panel, lightning talk), and if you can cover travel
        and accommodation costs, and the accessibility details of the venue.
      </Paragraph>
      */}
      <img src={introImage} alt="" />
      <PageLayoutContent>
        <PageHeading>Talks</PageHeading>
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
      </PageLayoutContent>
    </Layout>
  )
}

export default Talks
