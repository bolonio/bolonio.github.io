import { LanguageItemType } from "@utils/cv"
import React, { FunctionComponent } from "react"
import Box from "@components/core/Box"
import Text from "@components/core/Text"
import styled from "styled-components"
import { FormattedMessage, useIntl } from "gatsby-plugin-intl"
import { getFlag } from "@utils/flags"

interface LanguageItemProps {
  language: LanguageItemType
}

const FlagIcon = styled.img`
  margin: 0;
  margin-right: 8px;
`

export const LanguageItem: FunctionComponent<LanguageItemProps> = ({
  language,
}) => {
  const intl = useIntl()
  return (
    <Box marginBottom="2">
      <Box display="flex" alignItems="center">
        <FlagIcon
          width={"25px"}
          src={getFlag(language.id)}
          alt={intl.formatMessage(
            { id: "Flag" },
            { country: language.country }
          )}
        />
        <Text fontWeight="bold">
          <FormattedMessage id={language.name} />
        </Text>
      </Box>
      <Box>
        <Text>
          <FormattedMessage id={language.level} />
        </Text>
      </Box>
    </Box>
  )
}
