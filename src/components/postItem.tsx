import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { getFormattedDate } from "@utils/date"
import { Post } from "@utils/types"
import { useIntl } from "gatsby-plugin-intl"
import Text from "@components/core/Text"
import Box from "@components/core/Box"
// import { getFlag } from "@utils/flags"

interface PostItemProps {
  mode?: "horizontal" | "vertical"
  post: Post
}

const PostLink = styled(Link)`
  box-shadow: 0 2px 0 0 #0c1e29;
  color: inherit;

  :hover {
    box-shadow: 0 2px 0 0 #0c1e29;
  }
  :focus {
    outline: 3px solid #0c1e29;
    outline-offset: 0.5rem;
    box-shadow: none;
  }
`

const PostTitle = styled.h2`
  margin-top: 0px;
  margin-bottom: 10px;
  font-weight: 400;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, Open Sans,
    sans-serif !important;
  font-size: 1.75rem;
`

const PostTagLink = styled(PostLink)`
  font-size: 0.8rem;
  margin-right: 10px;
  line-height: 1.5;
  box-shadow: 0 1px 0 0 #0c1e29;

  :hover {
    box-shadow: 0 1px 0 0 #0c1e29;
  }
`

export const PostItem = (props: PostItemProps) => {
  const frontmatter = props.post!.frontmatter!
  const fields = props.post!.fields!
  const slug = fields.slug!
  const intl = useIntl()
  const date = getFormattedDate(frontmatter.date, intl.locale)

  const PostContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: ${props.mode === "horizontal" ? "row" : "column"};
    align-items: flex-start;
    @media screen and (max-width: 700px) {
      flex-direction: column;
    }
    margin-bottom: 20px;
  `

  const PostImage = styled.img`
    margin-bottom: 0px;

    ${props.mode === "horizontal"
      ? `
    max-width: 370px;
    @media screen and (max-width: 1000px) {
      max-width: 300px;
    }
    @media screen and (max-width: 700px) {
      max-width: 100%;
    }`
      : ""};
  `

  const FlagIcon = styled.img`
    margin: 0;
  `

  const title = frontmatter.title || fields.slug
  return (
    <PostContainer>
      <Box
        position="relative"
        display="flex"
        marginRight={[0, 3, 3]}
        marginBottom={[2, 0, 0]}
      >
        <PostImage
          alt={props.post.frontmatter.imageAlt}
          src={props.post.frontmatter.image.childImageSharp.resize.src}
        />
        {/*
        <Box position="absolute" bottom="0" right="10px">
          <FlagIcon
            width={"25px"}
            src={getFlag(props.post.frontmatter.lang)}
            alt=""
            aria-hidden="true"
          />
        </Box>
        */}
      </Box>

      <Box display="flex" flexDirection="column">
        <PostTitle>
          <PostLink to={`/${intl.locale}/${slug}`}>{title}</PostLink>
        </PostTitle>
        <Box marginBottom="1">
          <Text fontWeight="300" fontSize="1rem" lineHeight="1.5">
            {date}
          </Text>
        </Box>
        <Box display="flex" marginBottom="1" flexWrap="wrap">
          {frontmatter.tags.map((tag, i) => (
            <PostTagLink
              key={i}
              to={`/${intl.locale}/blog/tag/${tag}`}
              aria-label={`See all posts with the tag ${tag}`}
            >
              #{tag}
            </PostTagLink>
          ))}
        </Box>
        <Text fontWeight="300" fontSize="1.25rem" lineHeight="1.5">
          {props.post.excerpt}
        </Text>
      </Box>
    </PostContainer>
  )
}
