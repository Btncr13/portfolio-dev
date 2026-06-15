import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://Btncr13.github.io',
  base: '/cbdev', // <-- ¡Súper importante! Cambia esto por el nombre real de tu repo
  vite: {
    plugins: [tailwindcss()],
  },
});
