import React from "react"
import { Link } from "gatsby"
import "../styles.css"
import { FaPlus } from "react-icons/fa"
import DateTag from "./DateTag"

const PostBlog = ({ post }) => {
  return (
    <div key={post.path} className="post">
      <Link to={post.path}>
        <span className="post-link">
          {post.title}
          <FaPlus className="external-icon" />
        </span>
      </Link>
      <DateTag value={post.dateFormatted} />
    </div>
  )
}

export default PostBlog
