import React from "react"
import "../styles.css"
import PostLink from "./PostLink"
import PostBlog from "./PostBlog"

const POST_COMPONENTS = {
  LINK: PostLink,
  BLOG: PostBlog
}

const Content = ({ content }) => {
  const values = Object.entries(content)
  const getPostComponent = post => POST_COMPONENTS[post.type]
  return (
    <>
      {values.map(value => {
        const [monthAndYear, posts] = value
        return (
          <div key={monthAndYear} className="group-of-posts">
            <span className="month-year">{monthAndYear}</span>
            {posts.map(post => {
              const PostComponent = getPostComponent(post)
              return <PostComponent post={post} />
            })}
          </div>
        )
      })}
    </>
  )
}

export default Content
