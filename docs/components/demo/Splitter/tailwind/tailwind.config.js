const { green } = require('@radix-ui/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.vue'],
  theme: {
    extend: {
      colors: { 
        ...green, 
      },
    },
  },
  plugins: [],
}
