import React, { FunctionComponent } from "react"
import styled from "styled-components"
import { TalkType } from "@utils/types"
import { FormattedMessage, useIntl } from "gatsby-plugin-intl"
import { getFormattedDateMMMYYYY } from "@utils/date"
/*
import Box from "@components/core/Box"
import Text from "@components/core/Text"
import { getFlag } from "@utils/flags"

const FlagIcon = styled.img`
  margin: 0;
`
*/

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

export const Talk: FunctionComponent<TalkProps> = ({ talk }) => {
  const intl = useIntl()
  return (
    <TalkContainer>
      <TalkConference>
        <TalkLink href={talk.link} target="_blank">
          {talk.conference}
        </TalkLink>
      </TalkConference>
      <TalkGroup>
        <TalkItem>{talk.location}</TalkItem>
        <TalkItem>{getFormattedDateMMMYYYY(talk.date, intl.locale)}</TalkItem>
        <TalkItem>
          {talk.slides ? (
            <TalkLink href={talk.slides} target="_blank">
              <FormattedMessage id={"Slides"} />
            </TalkLink>
          ) : (
            <span>
              <FormattedMessage id={"Slides"} />
            </span>
          )}
        </TalkItem>
        <TalkItem>
          {talk.video ? (
            <TalkLink href={talk.video} target="_blank">
              Video
            </TalkLink>
          ) : (
            <span>Video</span>
          )}
        </TalkItem>
      </TalkGroup>
    </TalkContainer>

    /*
    <Box display="flex" flexDirection="column" marginBottom={4}>
      <Box display="flex" justifyContent="space-between">
        <Box display="flex" marginRight={2} alignItems="center">
          <Text fontWeight="bold" fontSize="3">
            {talk.conference}
          </Text>
          <Text>({getFormattedDateMMMYYYY(talk.date, intl.locale)})</Text>
        </Box>
      </Box>
      <Box display="flex">
        <Box display="flex" marginRight={2}>
          <Box marginRight={2} display="flex" alignItems="center">
            <FlagIcon width={"25px"} src={getFlag(talk.location)} alt="" />
          </Box>
          {talk.location}
        </Box>
      </Box>
    </Box>
    */
  )
}
