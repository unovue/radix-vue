const tailwind_config = "const { blackA, green, grass } = require('@radix-ui/colors')\n\n/** @type {import('tailwindcss').Config} */\nmodule.exports = {\n  content: ['./**/*.vue'],\n  theme: {\n    extend: {\n      colors: {\n        ...blackA,\n        ...green,\n        ...grass,\n      },\n    },\n  },\n  plugins: [],\n}\n";
export {
  tailwind_config as default
};
