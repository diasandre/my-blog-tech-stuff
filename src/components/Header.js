import React from "react"
import { StaticQuery, graphql } from "gatsby"
import HeaderSocial from "./HeaderSocial"
import "../styles.css"

const Header = ({
  data: {
    site: { siteMetadata },
  },
}) => {
  const { title, description, company, companyurl } = siteMetadata;
  const goToCompanyUrl = () => window.open(companyurl, "_blank")
  return (
    <>
      <div className="title">
        <h2>{title}</h2>
        <HeaderSocial />
      </div>
      <p className="description">
        {description}
        <span className="company" onClick={goToCompanyUrl}>{company}</span>
      </p>
    </>
  )
}

const HeaderQuery = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              title
              description
              company
              companyurl
            }
          }
        }
      `}
      render={data => <Header data={data} />}
    />
  )
}

export default HeaderQuery
