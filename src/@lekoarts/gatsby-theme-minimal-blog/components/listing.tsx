/** @jsx jsx */
import { jsx } from "theme-ui"
import BlogListItem from "@lekoarts/gatsby-theme-minimal-blog/src/components/blog-list-item"

type ListingProps = {
  posts: {
    slug: string
    title: string
    date: string
    tags?: {
      name: string
      slug: string
    }[]
  }[]
  className?: string
  showTags?: boolean
}

const Listing = ({ posts, className, showTags = true }: ListingProps) => (
  <section sx={{ mb: 4 }} className={className}>
    {posts.map(post => (
      <BlogListItem key={post.slug} post={post} showTags={showTags} />
    ))}
  </section>
)

export default Listing
