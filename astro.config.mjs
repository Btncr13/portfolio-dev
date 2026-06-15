import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://Btncr13.github.io',
  base: '/cbdev',
  vite: {
    plugins: [tailwindcss()],
  },
});
