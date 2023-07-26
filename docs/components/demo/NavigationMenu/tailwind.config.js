const { blackA, green, grass } = require("@radix-ui/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.vue"],
  theme: {
    extend: {
      colors: {
        ...blackA,
        ...green,
        ...grass,
      },
    },
    keyframes: {
      enterFromRight: {
        from: { opacity: 0, transform: "translateX(200px)" },
        to: { opacity: 1, transform: "translateX(0)" },
      },
      enterFromLeft: {
        from: { opacity: 0, transform: "translateX(-200px)" },
        to: { opacity: 1, transform: "translateX(0)" },
      },
      exitToRight: {
        from: { opacity: 1, transform: "translateX(0)" },
        to: { opacity: 0, transform: "translateX(200px)" },
      },
      exitToLeft: {
        from: { opacity: 1, transform: "translateX(0)" },
        to: { opacity: 0, transform: "translateX(-200px)" },
      },
    },
    animation: {
      enterFromLeft: "enterFromLeft 250ms ease",
      enterFromRight: "enterFromRight 250ms ease",
      exitToLeft: "exitToLeft 250ms ease",
      exitToRight: "exitToRight 250ms ease",
    },
  },
  plugins: [],
};
