import { defineNuxtConfig } from 'nuxt/config';
import { resolve } from 'path';
require('dotenv').config();

export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: 'src/',
  ssr: true,
  css: [
    '~/assets/main.css',
    'flowbite/dist/flowbite.css',
  ],
  modules: [
    '@nuxtjs/tailwindcss',
  ],
  tailwindcss: {
    configPath: '~/tailwind.config.js', // Specify the path to the Tailwind config file
    viewer: false,
    jit: true, 
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    public: {
      apiUrl: process.env.NUXT_PUBLIC_API_URL,
      accessKey: process.env.ACCESS_KEY,
      defaultLang: process.env.DEFAULT_LANG,
    }
  },
  plugins: [
    '~/plugins/pinia.js',
    '~/plugins/initUser.js',
    '~/plugins/runtimeConfig.js',
  ],

  build: {
   
  },
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
  buildModules: [
    '@nuxtjs/tailwindcss',
  ],

  compatibilityDate: '2024-07-31',
})
