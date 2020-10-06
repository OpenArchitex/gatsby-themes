module.exports = {
    siteMetadata: {
        // You can overwrite the following values or add new values and query them
        // The following three values are used in the SEO component
        // Refer: https://github.com/OpenArchitex/gatsby-themes/blob/master/themes/gatsby-theme-academic-portfolio/gatsby-config.js
        title: "Academic Portfolio",
        description: "Portfolio theme tailored for profs, grad-students",
        author: "OpenArchitex"
    },
    plugins: [
        {
            resolve: `@openarchitex/gatsby-theme-academic-portfolio`,
            options: {}
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `@openarchitex/gatsby-theme-academic-portfolio`,
                short_name: `Academic Portfolio`,
                description: `Portfolio theme tailored for profs, grad-students`,
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
