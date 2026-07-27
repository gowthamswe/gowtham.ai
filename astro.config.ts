import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { SITE } from './src/consts';

// Tailwind v4 is wired through PostCSS (postcss.config.mjs) rather than the
// @tailwindcss/vite plugin, which is incompatible with Astro 6's rolldown Vite.
// https://astro.build
export default defineConfig({
  site: SITE.url,
  integrations: [mdx(), sitemap()],
  markdown: {
    shikiConfig: { theme: 'dark-plus' },
  },
});
