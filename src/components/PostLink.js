import React from "react"
// import { Link } from "gatsby"
import "../styles.css"
import { FaExternalLinkSquareAlt } from "react-icons/fa"
import DateTag from "./DateTag"

const PostLink = ({ post }) => {
  const goToUrl = () => window.open(post.externalurl, "_blank")
  return (
    <div key={post.path} className="post">
      <span className="post-link" onClick={goToUrl}>
        {post.title}
        <FaExternalLinkSquareAlt className="external-icon" />
      </span>
      <DateTag value={post.dateFormatted} />
    </div>
  )
}

export default PostLink
