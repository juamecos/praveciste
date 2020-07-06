require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Uklidim.cz`,
    description: `Nejlepší úklidová společnost v Brně, naši klienti oceňují, jak pracujeme.`,
    author: `@JuanJoseMenaCost`,
    logo: "PraveCiste",
    menuLinks: [
      { name: "Úvod", link: "/" },
      { name: "Jednorázový úklid", link: "/jednorazovy" },
      { name: "Pravidelný úklid", link: "/pravidelny" },
      { name: "Kontakt", link: "/kontakt" },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-transition-link`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Open Sans", "Montserrat", "Source Sans Pro"],
        },
      },
    },

    {
      resolve: `gatsby-source-datocms`,
      options: {
        // You can find your read-only API token under the Settings > API tokens
        // section of your administrative area:
        apiToken: process.env.DATO_API_TOKEN,

        // If you are working on development/staging environment, you might want to
        // preview the latest version of records instead of the published one:
        previewMode: false,

        // Disable automatic reloading of content when some change occurs on DatoCMS:
        disableLiveReload: false,

        // Custom API base URL (most don't need this)
        // apiUrl: "https://site-api.datocms.com",

        // Setup locale fallbacks
        // In this example, if some field value is missing in Italian, fall back to English
        // localeFallbacks: {
        //     en: ['es'],
        // },
      },
    },

    `gatsby-plugin-sass`,

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `PraveCiste`,
        short_name: `PraveCiste`,
        start_url: `/`,
        background_color: `#1d428a`,
        theme_color: `#1d428a`,
        display: `standalone`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
