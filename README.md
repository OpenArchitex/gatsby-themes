<p align="center">
  <a href="https://www.openarchitex.dev">
    <img alt="OpenArchitex" src="https://raw.githubusercontent.com/OpenArchitex/gatsby-themes/master/examples/minimal-portfolio/src/images/favicon.svg?token=AC64D7KEIIJ325SNWP5NXZS7BB3I2" width="80" />
  </a>
</p>
<h1 align="center">
  Gatsby Themes by OpenArchitex
</h1>

This repository contains all the Gatsby themes by OpenArchitex community. Please feel free
to give them a try. If you have any suggestions for improvement do not hesitate to  open an issue or PR.

## Repo Details

This repository mimics the structure of [gatsby-starter-theme-workplace](https://github.com/gatsbyjs/gatsby-starter-theme-workspace) 
and use [yarn workspaces](https://classic.yarnpkg.com/en/docs/workspaces/) for development. To
quickly start any theme in development mode you can use,

`yarn workspace @openarchitex/gatsby-theme-<theme-name> develop`

where `<theme-name>` should be replaced by the relevant theme. For example in the case of 
the Minimal Portfolio theme it will be,

`yarn workspace @openarchitex/gatsby-theme-minimal-portfolio develop`

We use [MDX](https://www.gatsbyjs.org/packages/gatsby-plugin-mdx/) along with
[Theme UI](https://www.gatsbyjs.org/docs/theme-ui/). 