import React from "react"
// import { Link } from "gatsby"
import "../styles.css"
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import moment from "moment";
import Tag from "./Tag";

const PostLink = ({ frontmatter }) => {
    const goToUrl = () => window.open(frontmatter.externalurl, "_blank")
    const dateFormatted = moment(frontmatter.date).format("DD/MM/YYYY")
    return (
        <div>
            <span
                key={frontmatter.path}
                className="post-link"
                onClick={goToUrl}
            >
                {frontmatter.title}
                <FaExternalLinkSquareAlt className="external-icon" /> 
            </span>
            <Tag value={dateFormatted}/>
        </div>)
}

export default PostLink