export interface Post {
  id: string
  excerpt: string
  fields: PostFields
  body: string
  frontmatter: PostFrontmatter
}

export interface PostFields {
  slug: string
}

export interface PostFrontmatter {
  date: string
  title: string
  description: string
  image: PostImage
  imageAlt: string
  tags: string[]
}

export interface PostImage {
  childImageSharp: {
    resize: {
      src: string
      height: string
      width: string
    }
  }
}

export interface SiteMetadata {
  title: string
  author: string
  description: string
  bio: string
  social: Social
  siteUrl: string
  email: string
  language: string
  twitterUser: string
  image: string
  navigation: Navigation[]
}

interface Social {
  twitter: string
  github: string
  linkedin: string
  instagram: string
}

export interface Navigation {
  title: string
  slug: string
}

export interface TalksType {
  year: string
  talks: TalkType[]
}

export interface TalkType {
  title: string
  conference: string
  date: string
  location: string
  link: string
  video: string
  slides: string
}
