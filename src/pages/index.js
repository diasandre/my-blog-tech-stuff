import React from 'react';
import { graphql } from 'gatsby';
import Header from '../components/Header';
import Content from '../components/Content';
import { IconContext } from 'react-icons';
import { mapData } from '../helpers/postsHelper';
import { Container } from '../style';
import { Helmet } from 'react-helmet';

const Layout = ({ data }) => {
  const content = mapData(data);
  return (
    <IconContext.Provider value={{ className: 'icon' }}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>tech blog</title>
      </Helmet>
      <Container>
        <Header />
        <Content content={content} />
      </Container>
    </IconContext.Provider>
  );
};

export const query = graphql`
  query HomepageQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          frontmatter {
            title
            path
            externalurl
            date
            type
          }
        }
      }
    }
  }
`;

export default Layout;
