# Portfolio Website with Svelte and Headless CMS

Welcome to the repository for creating a portfolio website using Svelte and a Headless CMS! This project is a modern, lightweight, and highly customizable portfolio template designed to showcase my work and interest in Svelte.

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## Features

- Svelte Framework: Fast and efficient front-end development with reactive components.
- Headless CMS Integration: Seamless content management using your preferred CMS (e.g., Strapi, Contentful, Sanity, etc.).
- Responsive Design: Fully mobile-friendly and adaptable to various screen sizes.
- Dynamic Content: Fetch and display projects, blog posts, and other data dynamically from the CMS.
- SEO-Optimized: Built-in support for meta tags, Open Graph, and performance optimizations.

## Preview

## Creating a project

```bash
# create a new project in the current directory
npx sv create

# create a new project in my-app
npx sv create my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.

Happy Coding! 🎉
