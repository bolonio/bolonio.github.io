import styled from "styled-components"
import { typography, TypographyProps } from "styled-system"

type TextProps = TypographyProps

const Text = styled.span<TextProps>`
  ${typography}
`

export default Text
