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
        "./node_modules/flowbite/**/*.{js,ts}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Figtree', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        // primary: '#3D7FFF',
        primaryblue: '#3D7FFF',
        secondary:'#DFE4EE',
        black: '#000000',
        white: '#FFFFFF',
        azureblue: '#0284c7',
        steelBlue: '#0085FF', // Primary color
        lightSteelBlue: '#779BD8',
        steelBlueLight79: '#F1F6FF',
        veryPaleBlue: '#EFEFFD',
        snowBlue: '#FBFBFB',
        periwinkleBlue: '#6288C9',
        darkSlateBlue: '#465A7D', // Text color
        poloBlue: '#9EC7D4', // Border color
        culturedBlue: '#F6F6F6', // Form control background
        lightPale : '#C3E3FF',
        timberwolf: '#D9D9D9',
        graySnowDrift: '#F4F6F9', // Page background gray color
        lightGray: '#eeeeee',
        pigeonBlue: '#BBCDEE',
        ceil: '#8CA4CE', // Placeholder color
        limegreen: '#4AC220',
        lightred: '#F9697A',
        mintGreen: '#A4FFA2',
        orangeRed: '#FF0000',
        lightPink: '#FFA9A9',
        lighterGray: '#DFE4EE',
        teelGray:'#e2e5e7',
        darkAzureBlue: '#004a8f', // Primary blue button hover color // primary-500
        palePink: '#ffeeee',
        powderBlue: '#e5f3ff',
        brightSkyBlue: '#2999ff', // Primary blue button hover color // primary-400
        royalBlue: '#0068c7', // Primary blue button active color // primary-600
        lightAzure: '#52acff', // Primary blue button focus border color // primary-300
        lightPastalBlue: '#7ac0ff80', // Primary blue button focus color // primary-200
        tealGray:'#3b82f680'
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
      },      
      opacity: {
        '23': '0.23'
      },
      container: {
        center: true,
      },      
      strokeWidth: {
        '1.25': '1.25px',
        '1.5': '1.5px',
        '1.75': '1.75px',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    function ({ addComponents }) {
      addComponents({
        '.container-compressed': {
          marginRight: 'auto',
          marginLeft: 'auto',
          '@screen sm': {
            maxWidth: '100%',
          },
          '@screen md': {
            maxWidth: '100%',
          },
          '@screen lg': {
            maxWidth: '100%',
          },
          '@screen xl': {
            maxWidth: '1440px',
          },          
          '@screen 2xl': {
            maxWidth: '1440px',
          },
        },
        '.container-compact': {
          marginRight: 'auto',
          marginLeft: 'auto',
          '@screen sm': {
            maxWidth: '100%',
          },
          '@screen md': {
            maxWidth: '100%',
          },
          '@screen lg': {
            maxWidth: '100%',
          },
          '@screen xl': {
            maxWidth: '1496px',
          },          
          '@screen 2xl': {
            maxWidth: '1496px',
          },
        }
      })
    }
  ],
};


