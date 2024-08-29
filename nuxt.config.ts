import { defineNuxtConfig } from 'nuxt/config';
import { resolve } from 'path';
import dotenv from 'dotenv';
dotenv.config();

export default defineNuxtConfig({
  // devtools: { enabled: true },
  srcDir: 'src/',
  ssr: true,
  css: [
    '@/assets/css/tailwind.css', // Ensure this is the first CSS file
    'element-plus/dist/index.css',
    'flowbite/dist/flowbite.css',
    '~/assets/main.css'
  ],
  modules: [
    '@vueuse/nuxt',
    '@nuxt/ui',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    // '@pinia/nuxt',
  ],
  tailwindcss: {
    configPath: '~/tailwind.config.ts',
    viewer: false,
  },
  build: {
    transpile: ['@headlessui/vue'],
    postcss: {
      postcssOptions: {
        plugins: {
          'postcss-nested': {},
          'postcss-import': {},
          'tailwindcss': {},
          'autoprefixer' : {},

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
    '~/plugins/flowbite.client.ts',
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
    output: {
      dir: 'dist'  // Set the output directory to 'dist/'
    },
    prerender: {
      routes: ['/'],
      onError: (route, error) => {
        console.error(`Error prerendering route ${route}:`, error);
      },
      crawlLinks: false,  // Automatically discover and crawl links
      ignore: [
        '/admin',         // Ignore all admin routes
        '/admin/**',      // Ignore all nested admin routes
        '/user',          // Ignore all user routes
        '/user/**',       // Ignore all nested user routes
        '/dashboard',     // Ignore dashboard route (likely user-specific)
        '/forgot-password', // Ignore forgot password route
        '/google-auth',   // Ignore Google authentication route
        '/login',         // Ignore login route
        '/pendingApproval', // Ignore pending approval route
        '/register',      // Ignore register route
        '/register2',     // Ignore second part of registration
        '/reset-password', // Ignore reset password route
        '/time',          // Ignore time page (if it's dynamic)
        '/unauthorized',  // Ignore unauthorized access page
        '/about',         // Prerender the About page
        '/pricing',       // Prerender the Pricing page
      ]
    }
  },
  colorMode: {
    classSuffix: '',
    fallback: 'light',
    storageKey: 'color-mode',
  },
  compatibilityDate: '2024-07-31',
vite: {
    optimizeDeps: {
      include: ['@popperjs/core'],
    },
    server: {
      hmr: {
        overlay: false,
      },
    },
  }
});
