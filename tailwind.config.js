/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')
module.exports = {
  darkMode: 'class',
  mode: "jit",
  content: ['./src/**/*.{js,jsx,ts,tsx}', './stories/*'],
  theme: {
    extend: {
      colors: {
        'primary': colors.blue,
        'accent': colors.lime
      }
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      // Add your custom styles here
      addVariant('loading', '&:loading')

    }),],
  safelist: [
    {
      pattern: /^(.*?)/,
    },
  ],
}
