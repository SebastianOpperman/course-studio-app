[Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)

# React with WordPress Asssesment Task

DEMO: 

## Overview
This is an assesment task showcasing a Responsive UI built with React. Here I'm using [NEXT.js](https://nextjs.org/) with my mixture of PostCSS and CSS modules workflow. This workflows keeps the code clean and scalable while also maximizing performance.

For the data, I'm using a WordPress instance as a headless CMS. I've set up custom endpoints that this app consumes. You can find that repo [here]().

## Required Keys
The content endpoint url is set on the **WP_ENDPOINT_URL** variable.

## Instructions
- Run `npm install` to install dependancies.
- Run `npm run dev` to start a local dev server.
- Run `npm run build` to build the app for production.
- Run `npm start` to run the app in production.

## Structure

### Pages
There is only one page under the *pages* directory which is the home page. Each page manages the order of it's components and the fetching of data to feed to the components.

### Components
Each component is bundled with it's own *module.css* file. This helps style encapsulation via [CSS Modules](https://github.com/css-modules/css-modules). Components get's their data via props from the their pages.

### CSS & Public
The app's global CSS is under *css/global.css*. This sets up global settings like colors and typography which is shares among all components.

Images and media can be stores under the *public* directory, which can be accessed via `/example.jpg`.