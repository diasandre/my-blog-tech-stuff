import React from 'react';
import { graphql } from 'gatsby';
import Header from '../components/Header';
import Content from '../components/Content';
import { IconContext } from 'react-icons';
import { mapData, groupData } from '../helpers/postsHelper';
import { Container } from '../style';

const Layout = ({ data }) => {
  const content = groupData(mapData(data));
  return (
    <IconContext.Provider value={{ className: 'icon' }}>
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
