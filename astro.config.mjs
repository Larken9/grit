// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: '/grit/',
  vite: {
    plugins: [tailwindcss()]
  }
});