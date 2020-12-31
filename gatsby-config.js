module.exports = {
  siteMetadata: {
    title: 'andré dias da silva',
    description:
      "Hi, my name is André from Florianópolis, Brazil. I'm a fullstack developer, currently working at ",
    company: 'Dextra',
    companyurl: 'https://www.dextra.com.br/',
  },
  plugins: [
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/pages`,
      },
    },
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`
  ],
};
