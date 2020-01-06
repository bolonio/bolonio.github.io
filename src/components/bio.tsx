import React from "react"
import styled from "styled-components"
import { Content } from "./content"
import useSiteMetadata from "../hooks/useSiteMetadata"
import { BlueContainer } from "./blueContainer"

export const Bio = () => {
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

  const { bio } = useSiteMetadata()

  return (
    <BlueContainer>
      <Content>
        <BioText>{bio}</BioText>
      </Content>
    </BlueContainer>
  )
}
