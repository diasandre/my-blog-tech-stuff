import { Link } from 'gatsby';
import React from 'react';
import { Tag } from '../style';
import '../styles.css';

const buildTagsColors = (tags) =>
  tags.split(',').map((tag) => {
    var color = null;

    switch (tag) {
      case 'Kotlin':
        color = '#53dd6c';
        break;
      case 'Test':
        color = '#F5B700';
        break;
    }

    return {
      text: tag,
      color,
    };
  });

const Post = ({ post }) => {
  const hasTags = post.tags != null && post.tags.length > 0;
  const tags = hasTags ? buildTagsColors(post.tags) : [];

  return (
    <div key={post.path} className="post">
      <div className="post-title">
        <Link to={post.path}>
          <h3 className="post-link">{post.title}</h3>
        </Link>
        <div className="post-tags">
          {tags.map((tag) => (
            <Tag color={tag.color}>{tag.text}</Tag>
          ))}
        </div>
      </div>
      <div>
        <p>{post.dateFormatted}</p>
      </div>
    </div>
  );
};

export default Post;
