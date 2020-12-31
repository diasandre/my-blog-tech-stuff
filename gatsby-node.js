const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve('src/templates/PostContent.js');
    resolve(
      graphql(
        `
          query {
            allMarkdownRemark(
              sort: { order: ASC, fields: [frontmatter___date] }
            ) {
              edges {
                node {
                  frontmatter {
                    path
                    title
                  }
                }
              }
            }
          }
        `,
      ).then(
        ({
          data: {
            allMarkdownRemark: { edges: posts },
          },
        }) => {
          posts.forEach(
            (
              {
                node: {
                  frontmatter: { path },
                },
              },
              index,
            ) => {
              createPage({
                path,
                component: blogPostTemplate,
                context: {
                  pathSlug: path,
                  prev: index === 0 ? null : posts[index - 1].node,
                  next:
                    index === posts.length - 1 ? null : posts[index + 1].node,
                },
              });

              resolve();
            },
          );
        },
      ),
    );
  });
};
