module.exports = {
    siteMetadata: {
        // You can overwrite the following values or add new values and query them
        // The following three values are used in the SEO component
        // Refer: https://github.com/OpenArchitex/gatsby-themes/blob/main/themes/gatsby-theme-minimal-portfolio/gatsby-config.js
        title: "Minimal Portfolio",
        description: "Minimal portfolio with About, Projects and Contact sections",
        author: "OpenArchitex"
    },
    plugins: [
        {
            resolve: `@openarchitex/gatsby-theme-minimal-portfolio`,
            options: {}
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `@openarchitex/gatsby-theme-minimal-portfolio`,
                short_name: `Minimal Portfolio`,
                description: `Minimal portfolio with About, Projects and Contact sections`,
                start_url: `/`,
                background_color: `#f7f0eb`,
                theme_color: `#a2466c`,
                display: `standalone`,
                icon: `src/images/favicon.png`,
            },
        },
        `gatsby-plugin-offline`,
    ],
}
