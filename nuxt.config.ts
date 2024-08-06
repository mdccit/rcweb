import { defineNuxtConfig } from 'nuxt/config';
import { resolve } from 'path';

export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: 'src/',
  ssr: true,
  css: [
    '~/assets/main.css',
    'flowbite/dist/flowbite.css',
    'element-plus/dist/index.css',
    '@nuxtjs/tailwindcss',
    'flowbite/dist/flowbite.css',
  ],
  modules: [
    '@nuxtjs/tailwindcss',
  ],
  
  plugins: [
    '~/plugins/pinia.js',
    '~/plugins/initUser.js',
    '~/plugins/element-plus.ts'
  ],
  alias: {
    '@': resolve(__dirname, './src'),
    '~~': resolve(__dirname, './src'),
    '~': resolve(__dirname, './src'),
    '@components': resolve(__dirname, './src/components'),
    '@layouts': resolve(__dirname, './src/layouts'),
    '@pages': resolve(__dirname, './src/pages'),
    '@plugins': resolve(__dirname, './src/plugins'),
    '@static': resolve(__dirname, './src/static'),
    '@store': resolve(__dirname, './src/store'),
    '@assets': resolve(__dirname, './src/assets')
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/'],
    },
  },

  compatibilityDate: '2024-07-31',

  vite:{
    server: {
      hmr: {
        overlay: false,
      },
    },
  }
})
