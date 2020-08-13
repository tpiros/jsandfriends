/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});
module.exports = {
  siteMetadata: {
    title: `SummerShop`,
    description: `SummerShop - Your Favourite Online Store`,
    author: `Tamas Piros`,
    company: `Full Stack Training Ltd`,
    companyWebsite: `https://fullstacktraining.com`
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`
      }
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/layout`)
      }
    },
    {
      resolve: `gatsby-plugin-snipcart`,
      options: {
        apiKey: process.env.SNIPCART,
        js: `https://cdn.snipcart.com/themes/v3.0.19/default/snipcart.js`,
        styles: `https://cdn.snipcart.com/themes/v3.0.19/default/snipcart.css`,
        autopop: true
      }
    }
  ],
}
