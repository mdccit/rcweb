// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: "src/",
  ssr: true,
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/eslint-module", "@nuxt/eslint"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  plugins: ["~/plugins/pinia.js", "~/plugins/router.js"],
  build: {
    rollupOptions: {
      external: [],
    },
    extend(config, { isDev, isClient }) {
      // Extend webpack config if necessary
    },
  },

  compatibilityDate: "2024-07-30",
});
