exports.createPages = async ({ actions, graphql, reporter }) => {
    const basePath = "/"
    actions.createPage({
        path: basePath,
        component: require.resolve("./src/templates/minimal-portfolio.js"),
    });
}