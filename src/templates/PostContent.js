import React from 'react';
import Header from '../components/Header';
import { graphql } from 'gatsby';
import { IconContext } from 'react-icons/lib';
import moment from 'moment';
import { Container } from '../style';
import Post from '../components/Post';

const Template = ({
  data: {
    markdownRemark: {
      html,
      frontmatter: { title, date, tags },
    },
  },
}) => {
  const dateFormatted = moment(date).format('DD/MM/YYYY');
  return (
    <IconContext.Provider value={{ className: 'icon' }}>
      <Container>
        <Header />
        <Post
          post={{
            title,
            dateFormatted,
            tags
          }}
        />
        <div
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </Container>
    </IconContext.Provider>
  );
};

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
`;

export default Template;
