module.exports = {
  siteMetadata: {
    title: "andré dias da silva",
    description:
      "Hi, my name is André from Florianópolis, Brazil. I'm a fullstack developer, currently working at ",
    company: "Aurum Software",
    companyurl: "https://www.aurum.com.br/",
  },
  plugins: [
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
  ],
}
