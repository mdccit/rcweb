/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: 'class',
  content: [
        "./src/components/**/*.{js,vue,ts}",
        "./src/layouts/**/*.vue",
        "./src/pages/**/*.vue",
        "./src/plugins/**/*.{js,ts}",
        "./app.vue",
        "./nuxt.config.{js,ts}",
        './app.vue',
        './assets/**/*.{css,scss}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter var"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primaryblue: '#3D7FFF',
        secondary:'#DFE4EE',
        blue: '#3D7FFF',
        black: '#000000',
        white: '#FFFFFF',
        azureblue: '#0284c7',
        steelBlue: '#0085FF', // primary color
        lightSteelBlue: '#779BD8',
        steelBlueLight79: '#F1F6FF', // primary color
        veryPaleBlue: '#EFEFFD',
        snowBlue: '#FBFBFB',
        periwinkleBlue: '#6288C9',
        darkSlateBlue: '#465A7D',
        poloBlue: '#9EC7D4',
        culturedBlue: '#F6F6F6',
        lightPale : '#C3E3FF',
        timberwolf: '#D9D9D9',
        graySnowDrift: '#F4F6F9',
        lightGray: '#eeeeee',
        pigeonBlue: '#BBCDEE',
        ceil: '#8CA4CE', // secondary color
        limegreen: '#4AC220',
        lightred: '#F9697A',
        amber: '#FFA800',
        green: '#1BCB17',
        mintGreen: '#A4FFA2',
        red: '#E60000',
        orangeRed: '#FF0000',
        lightPink: '#FFA9A9',
        lighterGray: '#DFE4EE',
      },
      testred: {
        lightest: '#efdfa4',
        lighter: '#f1cb8a',
        light: '#f5b575',
        DEFAULT: '#f89f68',
        dark: '#fb8762',
        darker: '#f86e61',
        darkest: '#f15764'
      },
      nut: {
        50: '#EFFDF5',
        100: '#D9FBE8',
        200: '#B3F5D1',
        300: '#75EDAE',
        400: '#00DC82',
        500: '#00C16A',
        600: '#00A155',
        700: '#007F45',
        800: '#016538',
        900: '#0A5331',
        950: '#052e16'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};


