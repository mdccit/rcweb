import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: 'src/',
  ssr: true,

  css: [
    '@/assets/main.css',
    'flowbite/dist/flowbite.css',
  ],

  modules: [
    '@nuxtjs/tailwindcss',
  ],

  tailwindcss: {
    config: {
      content: [
        './src/**/*.{vue,js,ts,jsx,tsx}',
        'node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx,vue}'
      ],
      theme: {
        extend: {},
      },
      plugins: [
        require('flowbite/plugin')
      ],
    },
  },

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

  compatibilityDate: '2024-07-31',
})