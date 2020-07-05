import React from "react"
import { graphql } from 'gatsby'
import Header from '../components/Header'
import Content from "../components/Content"

const Layout = ({ data }) => {
  const { edges } = data.allMarkdownRemark
  return (
    <div className="content">
      <Header />
      <Content edges={edges} />
    </div>
  )
}

export const query = graphql`
  query HomepageQuery {
    allMarkdownRemark(
      sort: {order: DESC, fields: [frontmatter___date]}
    ) {
      edges {
        node {
          frontmatter {
            title
            path
            date
          }
        }
      }
    } 
  }
`

export default Layout 