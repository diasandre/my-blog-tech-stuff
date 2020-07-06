import React from "react"
// import { Link } from "gatsby"
import "../styles.css"
import { FaExternalLinkSquareAlt } from "react-icons/fa"
import Tag from "./Tag"

const PostLink = ({ post }) => {
  const goToUrl = () => window.open(post.externalurl, "_blank")
  return (
    <div className="post">
      <span key={post.path} className="post-link" onClick={goToUrl}>
        {post.title}
        <FaExternalLinkSquareAlt className="external-icon" />
      </span>
      <Tag value={post.dateFormatted} />
    </div>
  )
}

export default PostLink
