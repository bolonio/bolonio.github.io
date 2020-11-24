import styled from "styled-components"

export const Content = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 1140px;
  @media screen and (max-width: 1180px) {
    margin-left: 20px;
    margin-right: 20px;
  }
`

export const LayoutContent = styled.div`
  max-width: 90rem;
  width: 70%;
  margin: 0px auto;

  @media screen and (max-width: 1180px) {
    width: 90%;
  }
`

export const PageLayoutContent = styled(LayoutContent)`
  padding-top: 2rem;
  padding-bottom: 2rem;
  @media screen and (max-width: 1180px) {
    padding-top: 0px;
  }
`
