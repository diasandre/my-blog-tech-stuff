import _ from "lodash"
import moment from "moment"

export const mapData = ({ allMarkdownRemark: { edges } }) => {
  return edges.map(({ node: { frontmatter } }) => {
    const momentDate = moment(frontmatter.date)
    return {
      ...frontmatter,
      dateFormatted: momentDate.format("DD/MM/YYYY"),
      date: momentDate,
    }
  })
}

export const groupData = data => {
  return _.groupBy(data, value => value.date.format("MMMM/YYYY"))
}
