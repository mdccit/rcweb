// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
    "node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBlue: '#0085FF', // Primary Blue color   
      },
      spacing: {
        '-19': '-19px',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
};
