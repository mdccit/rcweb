// nuxt.config.ts
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: 'src/',
  ssr: true,

  modules: [
    '@nuxtjs/tailwindcss',
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  plugins: [
    '~/plugins/pinia.js'
  ],

  build: {
    rollupOptions: {
      external: [],
    },
    extend(config, { isDev, isClient }) {
      // Extend webpack config if necessary
    },
  },
  css: [
    '@nuxtjs/tailwindcss',
    '@/assets/main.css',
    'flowbite/dist/flowbite.css',
  ],

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/'],
    },
  },

  compatibilityDate: '2024-07-30',
})