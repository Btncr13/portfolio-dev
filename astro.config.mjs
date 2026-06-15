import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://Btncr13.github.io',
  base: '/nombre-de-tu-repositorio-nuevo', // <-- ¡Súper importante! Cambia esto por el nombre real de tu repo
  vite: {
    plugins: [tailwindcss()],
  },
});
