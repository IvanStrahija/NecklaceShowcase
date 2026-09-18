// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://kvizazist.github.io',
  base: '/necklace/',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
});
