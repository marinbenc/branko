module.exports = {
  pathPrefix: "/branko",
  siteMetadata: {
    title: `Branko`,
    author: `Marin Bencevic`,
    description: `englesko hrvatski IT riječnik otvorenog koda`,
    siteUrl: `https://branko.github.io/`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/`,
        name: `content`,
      },
    },
    `gatsby-transformer-json`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `@gatsby-contrib/gatsby-plugin-elasticlunr-search`,
      options: {
        fields: [`english`, `croatian`],
        resolvers: {
          WordsJson: {
            english: node => node.english,
            croatian: node => node.croatian
          },
        },
      },
    },
  ],
}
