/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `mit-it-web`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    "gatsby-plugin-styled-components", "gatsby-plugin-mantine",
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `poppins`,
          `sans-serif\:300,400,400i,700`
        ],
        display: 'swap'
      }
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/
        }
      }
    }
  ]
};