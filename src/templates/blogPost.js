import React from "react"
import Header from "../components/Header"
import { graphql } from "gatsby"
import DateTag from "../components/DateTag"
import { IconContext } from "react-icons/lib"
import moment from "moment"
import { Container } from "../style"

const Template = ({
  data: {
    markdownRemark: {
      html,
      frontmatter: { title, date },
    },
  },
}) => {
  const dateFormatted = moment(date).format("DD/MM/YYYY")
  return (
    <IconContext.Provider value={{ className: "icon" }}>
      <Container>
        <Header />
        <h3>
          {title}
          <DateTag value={dateFormatted} />
        </h3>
        <div className="blog-content" dangerouslySetInnerHTML={{ __html: html }} />
      </Container>
    </IconContext.Provider>
  )
}

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      frontmatter {
        title
        date
      }
    }
  }
`

export default Template
