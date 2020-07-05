import React from "react"
import { StaticQuery, graphql } from 'gatsby'
import "../styles.css"

const TitleAndDescription = ({ data: { site: { siteMetadata } } }) => {
  const { title, description } = siteMetadata
  return (
    <>
      <h2>{title}</h2>
      <p className="title-description">
        {description}
      </p>
    </>
  )
}

const Header = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              title
              description
            }
          }
        }
      `}
      render={data => <TitleAndDescription data={data} />}
    />
  )
}

export default Header