import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';

export default defineConfig({
  site: 'https://btncr13.github.io',
  base: '/portfolio-dev',
  integrations: [icon()],
  vite: {
    plugins: [tailwindcss()],
  },
});
