import React from "react"
import { Link } from "gatsby"
import "../styles.css"

const Post = ({ post }) => {
  return (
    <div key={post.path} className="post">
      <Link to={post.path}>
        <h3 className="post-link">
          {post.title}
        </h3>
        <p>{post.dateFormatted}</p>
      </Link>
    </div>
  )
}

export default Post;
