module.exports = {
    siteMetadata: {
        title: 'Mitch Ryan | Kiwi Developer',
        siteUrl: process.env.URL || 'http://localhost:8000',
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-styled-components',
        'gatsby-plugin-typescript',
        // {
        //   resolve: `gatsby-plugin-favicon`,
        //   options: {
        //     logo: './src/images/favicon.png',
        //   },
        // },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: 'UA-98365354-1',
            },
        },
        {
            resolve: `gatsby-plugin-canonical-urls`,
            options: {
                siteUrl: process.env.URL || 'http://localhost:8000',
            },
        },
        'gatsby-plugin-netlify', // make sure to put last in the array
    ],
};
