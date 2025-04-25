// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Set base to your repo name for GitHub Pages
  base: '/',
  vite: {
    plugins: [tailwindcss()]
  }
});