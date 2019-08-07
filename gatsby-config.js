module.exports = {
    siteMetadata: {
        title: 'Mitch Ryan | Kiwi Developer',
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
        'gatsby-plugin-netlify', // make sure to put last in the array
    ],
};
