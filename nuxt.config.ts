import { defineNuxtConfig } from 'nuxt/config';
import { resolve } from 'path';
import dotenv from 'dotenv';
import customRoutes from './src/config/routes'
dotenv.config();

export default defineNuxtConfig({
  // devtools: { enabled: true },
  head: {
    title: 'Recruited', // Change this to your website title
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/_nuxt/assets/images/favicon.ico' }
    ],
  },
  srcDir: 'src/',
  ssr: true,
  target: 'server',
  components: true,
  router: {
    base: '/',  // Base URL for your router, assuming your app is served from the root
    middleware: ['permissions','role', 'role-based-layout'],
  },
  generate: {
    fallback: true,  // Generates a 404.html for static hosting fallback
  },
  css: [
    '@/assets/css/main.css', // Ensure this is the first CSS file
    'element-plus/dist/index.css',
    // 'flowbite/dist/flowbite.css',
    '@/assets/css/custom.css',
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
          'autoprefixer': {},

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
    '~/plugins/router.plugin.ts',
    '~/plugins/services.js',
    '~/plugins/pinia.js',        
    '~/plugins/initUser.js',
    '~/plugins/element-plus.ts',
    '~/plugins/flowbite.client.ts',
    '~/plugins/notification.ts',
    '~/plugins/i18n.js',
    '~/plugins/nprogress.client.ts'
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
    // preset: 'node-server',
    output: {
      dir: process.env.NUXT_BUILD_PATH,  // Set the output directory to 'dist/'
    },
    prerender: {
      crawlLinks: false,  // Automatically discover and crawl links
      failOnError: true, // Stop on the first error, to make debugging easier
      routes: ['/',           // Home
        '/pricing',    // Pricing
        '/about',      // About
        '/register',   // Register        
        '/login',      // Login
        '/reset-password', // Reset password
        '/forgot-password', // Ignore forgot password route
      ],
      onError: (route, error) => {
        console.error(`Error prerendering route ${route}:`, error);
      },      
      ignore: [
        '/admin',         // Ignore all admin routes
        '/admin/**',      // Ignore all nested admin routes
        '/user',          // Ignore all user routes
        '/user/**',       // Ignore all nested user routes
        '/business',         // Ignore all admin routes
        '/business/**',      // Ignore all nested admin routes
        '/school',         // Ignore all admin routes
        '/school/**',      // Ignore all nested admin routes
        '/dashboard',     // Ignore dashboard route (likely user-specific)        
        '/google-auth',   // Ignore Google authentication route
        '/register-step-two/', // Ignore pending approval route
        '/time',          // Ignore time page (if it's dynamic)
        '/unauthorized',  // Ignore unauthorized access page
        '/verification-failed',  // Ignore unauthorized access page
      ]
    }
  },
  colorMode: {
    classSuffix: '',
    fallback: 'light',
    storageKey: 'color-mode',
    preference: 'light',
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
