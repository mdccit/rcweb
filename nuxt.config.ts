import { defineNuxtConfig } from 'nuxt/config';
import { resolve } from 'path';

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
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  plugins: [
    '~/plugins/pinia.js',
    '~/plugins/initUser.js',
  ],

  build: {
    rollupOptions: {
      external: [],
    },
    extend(config, { isDev, isClient }) {
      // Extend webpack config if necessary
    },
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

  compatibilityDate: '2024-07-31',
})
