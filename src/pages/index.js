import React from "react"
import { graphql } from "gatsby"
import Header from "../components/Header"
import Content from "../components/Content"
import { IconContext } from "react-icons"
import { mapData, groupData } from "../helpers/postsHelper"

const Layout = ({ data }) => {
  const content = groupData(mapData(data))
  return (
    <IconContext.Provider value={{ className: "icon" }}>
      <div className="content">
        <Header />
        <Content content={content} />
      </div>
    </IconContext.Provider>
  )
}

export const query = graphql`
  query HomepageQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          frontmatter {
            title
            path
            externalurl
            date
            type
          }
        }
      }
    }
  }
`

export default Layout
