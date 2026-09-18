// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://IvanStrahija.github.io',
  base: '/NecklaceShowcase/',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
});
