// @ts-check
import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
  site: 'https://www.pixformance.com',
  // O site continua estático (dist/client, servido pelo nginx). Só as páginas do blog
  // (src/pages/blog, `prerender = false`) são renderizadas sob demanda pelo servidor
  // Node em dist/server, que o nginx chama pra /blog/*. Ver nginx.conf e Dockerfile.
  adapter: node({ mode: 'standalone' }),
  redirects: {
    '/de/brandstore': '/brandstore',
  },
  build: {
    // Inline all CSS into <style> tags — eliminates render-blocking stylesheet requests
    // and breaks the critical path chain: /lp → Icon.css → font.woff2
    inlineStylesheets: 'always',
  },
  integrations: [
    react(),
    sitemap({
      filter: (page) =>
        !page.includes('/datenschutz') &&
        !page.includes('/v1/impressum') &&
        !page.includes('/agb') &&
        !page.includes('/lp-physio') &&
        !page.includes('/lp-v2') &&
        !page.includes('/lp-360-konzept') &&
        !page.includes('/calculator') &&
        !page.includes('-danke') &&
        !page.includes('/year-end-offer') &&
        !page.includes('/newsletter/'),
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  },
});
