// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // TODO: replace with the live domain before go-live
  site: 'https://multitec.mv',
  vite: {
    plugins: [tailwindcss()],
  },
});
