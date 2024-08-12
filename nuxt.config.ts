import { defineNuxtConfig } from 'nuxt/config';
import { resolve } from 'path';
import dotenv from 'dotenv';
dotenv.config();

export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: 'src/',
  ssr: true,
  css: [
    '@/assets/css/tailwind.css', // Ensure this is the first CSS file
    'element-plus/dist/index.css',
    'flowbite/dist/flowbite.css',
    'element-plus/dist/index.css',
    '~/assets/main.css',
  ],
  modules: [
    '@nuxtjs/tailwindcss',
  ],
  tailwindcss: {
    configPath: '~/tailwind.config.ts',
    viewer: false,
  },
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  pinia: {
    autoImports: [
      'defineStore',
      'storeToRefs',
    ],
  },
  runtimeConfig: {
    public: {
      apiUrl: process.env.NUXT_PUBLIC_API_URL,
      accessKey: process.env.ACCESS_KEY,
      defaultLang: process.env.DEFAULT_LANG,
    },
  },
  plugins: [
    '~/plugins/runtimeConfig.js',
    '~/plugins/services.js',
    '~/plugins/pinia.js',
    '~/plugins/initUser.js',
    '~/plugins/element-plus.ts',
    // '~/plugins/flowbite-vue.js',
    '~/plugins/i18n.js'
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
      crawlLinks: false,
      routes: ['/'],
    },
  },
  buildModules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
  ],
  compatibilityDate: '2024-07-31',
  vite: {
    server: {
      hmr: {
        overlay: false,
      },
    },
  }
});
