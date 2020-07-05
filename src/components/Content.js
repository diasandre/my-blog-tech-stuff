import React from "react"
import "../styles.css"
import PostLink from "./PostLink"

const Content = ({ edges }) => {
  return (
    <div className="post">
      {edges.map(edge => {
        const { frontmatter } = edge.node
        return <PostLink frontmatter={frontmatter} />
      })}
    </div>)
}

export default Content