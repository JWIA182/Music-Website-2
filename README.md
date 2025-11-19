# Jakub Wiaderek – Mixing Engineer

A single-page marketing site for a mixing engineer built with React and Vite. The project ships with Tailwind via CDN and bundles cleanly for static hosting.

## Local development

1. Install dependencies: `npm install`
2. Start the dev server: `npm run dev`

The site will be available at http://localhost:3000.

## Build for production

```
npm run build
```

A static bundle is emitted to `dist/`. You can preview the production build locally with:

```
npm run preview
```

## Deploying to GitHub Pages

The Vite configuration sets `base: './'`, so the generated assets work out-of-the-box on GitHub Pages (both user/organization sites and project sites). To publish the latest build:

1. Build the project: `npm run build`
2. Commit the contents of `dist/` to the branch you use for GitHub Pages (commonly `gh-pages`). One option is to use `git subtree`:
   ```
   git add dist && git commit -m "Deploy"
   git subtree push --prefix dist origin gh-pages
   ```
   Alternatively, copy the `dist/` folder into a separate branch and push it manually.

Once the branch is pushed, enable Pages in the repository settings and point it to the `gh-pages` branch (or the branch/folder you published).

No API keys or Google Gemini dependencies are required for this project.
