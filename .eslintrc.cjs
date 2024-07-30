// .eslintrc.cjs or .eslintrc.js
module.exports = {
  root: true,
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    sourceType: "module",
    ecmaVersion: 2020,
  },
  env: {
    node: true,
    browser: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:nuxt/recommended", // Add Nuxt plugin
  ],
  plugins: ["vue", "@typescript-eslint", "nuxt"],
  rules: {
    "no-trailing-spaces": ["warn"],
    "prefer-promise-reject-errors": "off",
    "vue/no-v-html": "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "vue/multi-word-component-names": "off",
    "no-undef": "off", // Disable no-undef for Nuxt3 globals
  },
  ignorePatterns: ["dist", "node_modules", "build", "coverage", "docs", "test"],
};
