import { PageRendererProps } from "gatsby"
import React, { FunctionComponent } from "react"
import { Paragraph } from "@components/Paragraph"
import styled from "styled-components"
import { PageLayoutContent } from "@components/content"
import { PageHeading } from "@components/headings/headings"
import { Layout } from "@layouts/Layout"
import introImage from "@images/intro3.jpg"
import { JobItem } from "@components/cv/jobItem"
import { EducationItem } from "@components/cv/educationItem"
import { cv } from "@content/cv/cv"
import { EducationItemType, JobItemType, LanguageItemType } from "@utils/cv"
import Box from "@components/core/Box"
import { LanguageItem } from "@components/cv/languageItem"
import { FormattedMessage, useIntl } from "gatsby-plugin-intl"
import { ContactCV } from "@components/cv/ContactCV"

const BioParagraph = styled(Paragraph)`
  font-size: 1.5rem;
  margin-bottom: 3rem;
`

const CVHeading = styled.h2`
  font-size: 2.5rem;
`

const About: FunctionComponent<PageRendererProps> = ({ location }) => {
  const intl = useIntl()
  return (
    <Layout title="CV" location={location}>
      <img
        src={introImage}
        alt={intl.formatMessage({ id: "PictureOfMeAlt" })}
      />
      <PageLayoutContent>
        <PageHeading>Adrián Bolonio</PageHeading>
        <BioParagraph>
          <FormattedMessage id={"FullBio"} />
        </BioParagraph>

        <Box display="flex" flexDirection={["column", "column", "row"]}>
          <Box flex="1 1 33%" marginRight={4}>
            <CVHeading>
              <FormattedMessage id={"Contact"} />
            </CVHeading>
            <hr />
            <ContactCV />
            <CVHeading>
              <FormattedMessage id={"Languages"} />
            </CVHeading>
            <hr />
            {cv.languages.map((language: LanguageItemType, i: number) => (
              <LanguageItem key={i} language={language} />
            ))}
          </Box>
          <Box display="flex" flex="1 1 100%" flexDirection="column">
            <Box>
              <CVHeading>
                <FormattedMessage id={"Job Experience"} />
              </CVHeading>
              <hr />
              {cv.jobs.map((job: JobItemType, i: number) => (
                <JobItem key={i} job={job} />
              ))}
            </Box>

            {/* 
            <Box>
              <CVHeading>
                <FormattedMessage id={"Projects & Publications"} />
              </CVHeading>
              <hr />
              <span>project</span>
            </Box>
            */}

            <Box>
              <CVHeading>
                <FormattedMessage id={"Education"} />
              </CVHeading>
              <hr />
              {cv.education.map((education: EducationItemType, i: number) => (
                <EducationItem key={i} education={education} />
              ))}
            </Box>
          </Box>
        </Box>
      </PageLayoutContent>
    </Layout>
  )
}

export default About
