import React from "react"
import { Link } from "gatsby"
import "../styles.css"

const Content = ({ edges }) => {
  return (
    <>
      {edges.map(edge => {
        const { frontmatter } = edge.node
        return (
          <p
            key={frontmatter.path}
          >
            <Link to={frontmatter.path}>
              {frontmatter.title}
            </Link>
          </p>
        )
      })}
      <div>
        <Link to='/tags'>Browse by Tag</Link>
      </div>
    </>)
}

export default Content