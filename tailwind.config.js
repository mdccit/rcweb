/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/components/**/*.{js,vue,ts}",
    "./src/layouts/**/*.vue",
    "./src/pages/**/*.vue",
    "./src/plugins/**/*.{js,ts}",
    "./src/app.vue",
    "./src/error.vue",
  ],
  theme: {
    extend: {
      colors: {
        primaryblue: '#3D7FFF',
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
        lightPink: '#FFA9A9'
      },
    },
  },
  plugins: [],
}
