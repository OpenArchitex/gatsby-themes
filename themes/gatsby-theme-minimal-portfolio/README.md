# Minimal Portfolio

## Description

A simple portfolio with `About Us`, `Projects` and `Contact Us` sections created using
[Theme UI](https://theme-ui.com) and [MDX](https://mdxjs.com/)

### Learning Resources

Please refer to [Gatsby themes](https://www.gatsbyjs.org/docs/themes/) for more information 
about themes and how to use them. Also the [shadowing section](https://www.gatsbyjs.org/docs/themes/shadowing/)
explains how you can override the sections of the theme and customize it. 

## How to install

You can install the theme simply by executing the following command within your Gatsby project.

```shell script
npm i @openarchitex/gatsby-theme-minimal-portfolio
```

## When do I use this theme?

If you'd want to set up a simple portfolio web page this is a great theme to use. 
It has three sections `About Us`, `Projects` and `Contact Us`. 

## Examples of usage

#### Example Usage

```js
// gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: `@openarchitex/gatsby-theme-minimal-portfolio`,
      options: {},
    },
  ],
};
```

You can use [theme shadowing](https://www.gatsbyjs.org/docs/themes/shadowing/) to override the sections in the theme. 
All the files relevant to the theme should go under `@opanarchitex/gatsby-theme-minimal-portfolio`. 
For example `banner.mdx` and `logo.svg` is overridden in the [example site](https://github.com/OpenArchitex/gatsby-themes/tree/main/examples/minimal-portfolio). 

## How to develop locally

From the root of the theme folder (i.e: `gatsby-theme-minimal-portfolio`) you can run the theme in development mode using,

```shell
yarn gatsby develop
```

The structure of the repo is as follows: 

- `src/components`: This contains all components

- `src/templates`: This is the entry point to all the other components

- `src/sections`: The mdx documents that is used by the theme

- `src/images`: All images used by the theme

- `gatsby-plugin-theme-ui`: The styles related to [Theme UI](https://theme-ui.com/home)

## How to contribute

If you have any suggestions for improvement do not hesitate to  open an [issue](https://github.com/OpenArchitex/gatsby-themes/issues/new/choose) 
or [pull request](https://github.com/OpenArchitex/gatsby-themes/pulls). 

---

`We are grateful for JetBrains for generously providing Open Source licenses to help us with our development effort.`

[![JetBrains Logo](https://raw.githubusercontent.com/OpenArchitex/CommonAssets/main/images/jetbrains-logo.svg)](https://www.jetbrains.com/?from=CherishCakes)