import React from "react"
import { StaticQuery, graphql } from 'gatsby'
import { AiOutlineTwitter } from "react-icons/ai"
import "../styles.css"

const TitleAndDescription = ({ data: { site: { siteMetadata } } }) => {
  const { title, description } = siteMetadata
  return (
    <>
      <div className="title">
        <h2>{title}</h2>
        <AiOutlineTwitter className="twitter" />
      </div>
      <p className="description">
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