import React from "react"
import "../styles.css"
import PostLink from "./PostLink"

const Content = ({ content }) => {
  const values = Object.entries(content)
  return (
    <>
      <div className="posts">
        {values.map(value => {
          const [monthAndYear, posts] = value
          return (
            <>
              <span className="month-year">{monthAndYear}</span>
              {posts.map(post => (
                <PostLink post={post} />
              ))}
            </>
          )
        })}
      </div>
    </>
  )
}

export default Content
