import { EducationItemType } from "@utils/cv"
import React, { FunctionComponent } from "react"
import styled from "styled-components"
import Box from "@components/core/Box"
import Text from "@components/core/Text"
import { getFormattedDateYYYY } from "@utils/date"
import { getFlag } from "@utils/flags"
import { useIntl } from "gatsby-plugin-intl"

interface EducationItemProps {
  education: EducationItemType
}

const FlagIcon = styled.img`
  margin: 0;
`

export const EducationItem: FunctionComponent<EducationItemProps> = ({
  education,
}) => {
  const intl = useIntl()
  return (
    <Box display="flex" flexDirection="column" marginBottom={4}>
      <Box display="flex" justifyContent="space-between">
        <Box display="flex" marginRight={2}>
          <Text fontWeight="bold" fontSize="3">
            {education.degree}
          </Text>
        </Box>
        <Text>
          {getFormattedDateYYYY(education.startDate)} -{" "}
          {getFormattedDateYYYY(education.endDate)}
        </Text>
      </Box>
      <Box display="flex">
        <Box display="flex" marginRight={2}>
          <Box marginRight={2} display="flex" alignItems="center">
            <FlagIcon
              width={"25px"}
              src={getFlag(education.location.country.id)}
              alt={intl.formatMessage(
                { id: "Flag" },
                { country: education.location.country.name }
              )}
            />
          </Box>
          {education.school}
        </Box>
        <Box display="flex">
          ({education.location.city}, {education.location.country.name})
        </Box>
      </Box>
    </Box>
  )
}
