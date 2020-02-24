/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: 'Xavier Mod Web Portfolio',
    description: "Welcome to Xavier Mod's website. Front End Developer based in London ",
    author: 'Xavier Mod',
    image: '/profilePic.png',
    siteUrl: 'https://www.xaviermod.com'
  },
  plugins: [    
    {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/images/`,
    },
  },
  {
    resolve: `gatsby-source-contentful`,
    options: {
      spaceId: process.env.CONTENTFUL_ID,
      // Learn about environment variables: https://gatsby.dev/env-vars
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      environment: process.env.CONTENTFUL_ENVIRONMENT,
    },
  },
  {
    resolve: 'gatsby-plugin-robots-txt',
    options: {
      host: 'https://www.xaviermod.com',
      sitemap: 'https://www.xaviermod.com/sitemap.xml',
      policy: [{ userAgent: '*', allow: '/' }]
    }
  },
  `gatsby-plugin-styled-components`,
  `gatsby-plugin-react-helmet`,
  `gatsby-plugin-sharp`,
  `gatsby-transformer-sharp`,
  `gatsby-plugin-transition-link`,
  `gatsby-plugin-sitemap`,
  `gatsby-plugin-playground`],
}
