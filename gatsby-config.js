module.exports = {
    siteMetadata: {
        title: `Andy Jobs`,
        description: `Site de petites annonces de job pour les Esat et entreprises adaptées`,
        author: `Créagency'M`,
    },
    plugins: [
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/content`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/logo.svg`, // This path is relative to the root of the site.
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [{
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 590,
                            showCaptions: true,
                        },
                    },
                    `gatsby-remark-external-links`,
                    `gatsby-remark-copy-linked-files`,
                ],
            },
        },
        `gatsby-plugin-offline`,
        `gatsby-plugin-react-svg`,
        `gatsby-plugin-catch-links`,
    ],
};