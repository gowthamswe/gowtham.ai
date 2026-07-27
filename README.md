# gowtham.ai

Personal site + blog. Built with [Astro](https://astro.build), styled with
Tailwind CSS v4, deployed as a static site to **Cloudflare Pages**.

## Develop

```sh
npm install
npm run dev        # http://localhost:4321
```

## Build

```sh
npm run build      # astro check, then static output → dist/
npm run check      # type-check only
npm run preview    # serve the built site locally
```

`npm run build` runs `astro check` first, so a type error fails the build and
blocks the deploy. Run `npm run check` on its own for a faster loop.

> **TypeScript is pinned to 6.x on purpose.** `astro check` needs the
> programmatic compiler API, which TypeScript 7's native compiler doesn't
> expose yet. Upgrading to 7 breaks the build with a confusing error — see
> <https://github.com/withastro/roadmap/discussions/1321>.

## Project layout

```
src/
  components/      reusable UI (Icon, BaseHead, SocialLinks, Comments, …)
  layouts/         BaseLayout (shell + <head>), BlogPost (article chrome)
  pages/
    index.astro    home (about, writing, projects, timeline)
    blog/          blog index + [...slug] post route
    rss.xml.js     RSS feed
  content/blog/    posts (Markdown / MDX, typed frontmatter)
  data/            timeline.ts, projects.ts
  consts.ts        site config, socials, giscus settings
scripts/
  make-og.mjs      regenerates public/og.png (run `npm run og`)
public/            static assets (resume.pdf, og.png, favicon, robots.txt)
```

## Writing a post

Add a Markdown file under `src/content/blog/`:

```md
---
title: 'Post title'
description: 'One-line summary for SEO and cards.'
pubDate: 2026-06-19
tags: ['kara', 'systems']
draft: false        # true hides it from the published list
comments: true      # false hides the comment section
---

Body in Markdown…
```

## Comments (giscus)

Comments use [giscus](https://giscus.app) (GitHub Discussions). To enable:

1. Make the repo public and turn on **Discussions**.
2. Generate config at <https://giscus.app> and paste the `repo`, `repoId`,
   `category`, and `categoryId` into `GISCUS` in `src/consts.ts`.

Until those are filled in, posts show a "Comments are coming soon" placeholder.

## OG image

`public/og.png` is generated from `scripts/make-og.mjs` and committed (CI build
images can't render SVG text reliably). After editing the design, run
`npm run og` and commit the new PNG.

## Deploy

Cloudflare Pages, connected to this repo:

- **Build command:** `npm run build`
- **Output directory:** `dist`
- Custom domain `gowtham.ai` via Cloudflare DNS.
