import { JobItemType } from "@utils/cv"
import React, { FunctionComponent } from "react"
import styled from "styled-components"
import Box from "@components/core/Box"
import Text from "@components/core/Text"
import { useIntl } from "gatsby-plugin-intl"
import { getFormattedDateMMMYYYY } from "@utils/date"
import { getFlag } from "@utils/flags"

interface JobItemProps {
  job: JobItemType
}

const FlagIcon = styled.img`
  margin: 0;
`

export const JobItem: FunctionComponent<JobItemProps> = ({ job }) => {
  const intl = useIntl()
  return (
    <Box display="flex" flexDirection="column" marginBottom={4}>
      <Box display="flex" justifyContent="space-between">
        <Box display="flex" marginRight={2}>
          <Text fontWeight="bold" fontSize="3">
            {job.title}
          </Text>
        </Box>
        <Text>
          {getFormattedDateMMMYYYY(job.startDate, intl.locale)} -{" "}
          {getFormattedDateMMMYYYY(job.endDate, intl.locale)}
        </Text>
      </Box>
      <Box display="flex">
        <Box display="flex" marginRight={2}>
          <Box marginRight={2} display="flex" alignItems="center">
            <FlagIcon
              width={"25px"}
              src={getFlag(job.location.country.id)}
              alt={intl.formatMessage(
                { id: "Flag" },
                { country: job.location.country.name }
              )}
            />
          </Box>
          {job.company}
        </Box>
        <Box display="flex">
          ({job.location.city}, {job.location.country.name})
        </Box>
      </Box>
      <Box>{job.description}</Box>
    </Box>
  )
}
