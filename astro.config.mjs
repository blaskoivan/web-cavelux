// @ts-check

import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.cavelux.com.ar',

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [react(), preact(), sitemap()]
});