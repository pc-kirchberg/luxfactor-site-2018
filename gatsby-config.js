module.exports = {
  siteMetadata: {
    title: 'LUXFACTOR 2018',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-70133844-11",
        head: true,
      },
    },
    {
      resolve: "gatsby-plugin-facebook-pixel",
      options: {
        pixelId: "164236357551695"
      }
    }
],
  pathPrefix: "/"
};
