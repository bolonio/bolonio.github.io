import { PageRendererProps } from "gatsby"
import React from "react"
import { Layout } from "../components/layout"
import { SEO } from "../components/seo"
import { talks } from "../../content/talks/talks"
import { Talk } from "../components/talk"
import { Content } from "../components/content"
import { TalksType, TalkType } from "../utils/types"
import styled from "styled-components"
import { BlueContainer } from "../components/blueContainer"

type Props = PageRendererProps

const Section = styled(Content)`
  padding: 50px 0;
`

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`

const Header = styled.h2`
  margin: 0;
  margin-bottom: 50px;
  font-size: 3rem;
`

const YearHeader = styled.h2`
  margin: 0;
  margin-bottom: 30px;
`

const TalkContainer = styled.div`
  margin-bottom: 40px;
`

const TalkIntroText = styled.p`
  font-weight: 300;
  font-size: 1.75rem;
  margin: 0;
  @media screen and (max-width: 1000px) {
    font-size: 1.5rem;
  }
`

const Talks = (props: Props) => {
  return (
    <Layout location={props.location}>
      <SEO title="My talks" />
      <Section>
        <SectionHeader>
          <Header>Talks</Header>
        </SectionHeader>

        {talks.map((talk: TalksType, i) => (
          <React.Fragment>
            <YearHeader key={i}>{talk.year}</YearHeader>
            <TalkContainer>
              {talk.talks.map((talk: TalkType, i) => (
                <Talk talk={talk} />
              ))}
            </TalkContainer>
          </React.Fragment>
        ))}
      </Section>
    </Layout>
  )
}

export default Talks
