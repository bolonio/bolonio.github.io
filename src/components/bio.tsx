import React, { FunctionComponent } from "react"
import styled from "styled-components"
import { LayoutContent } from "@components/content"
import useSiteMetadata from "@hooks/useSiteMetadata"
import { BlueContainer } from "@components/blueContainer"

const BioText = styled.p`
  font-weight: 300;
  font-size: 1.75rem;
  margin: 0;
  @media screen and (max-width: 1000px) {
    font-size: 1.5rem;
  }
  @media screen and (max-width: 800px) {
    font-size: 1.25rem;
  }
`

export const Bio: FunctionComponent = () => {
  const { bio } = useSiteMetadata()

  return (
    <BlueContainer>
      <LayoutContent>
        <BioText>{bio}</BioText>
      </LayoutContent>
    </BlueContainer>
  )
}
