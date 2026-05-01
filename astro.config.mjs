// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import svelte from '@astrojs/svelte';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://she3bo.com',
  integrations: [
    sitemap(),
    svelte(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    // Optimize manga PNG assets aggressively
    domains: [],
    remotePatterns: [],
  },
  build: {
    inlineStylesheets: 'auto',
  },
  // Astro 6 prefetch for instant nav feel
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
});
