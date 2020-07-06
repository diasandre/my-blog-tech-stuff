module.exports = {
  siteMetadata: {
    title: 'andré dias da silva',
    description: "Hi, my name is André Dias, i'm a fullstack developer, currently working at ",
    company: "Aurum Software",
    companyurl: "https://www.aurum.com.br/"
  },
  plugins: [
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`
      }
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Roboto Mono`,
            variants: [`400`, `700`]
          },
          {
            family: `Roboto`,
            subsets: [`latin`]
          },
        ],
      },
    }
  ]
}