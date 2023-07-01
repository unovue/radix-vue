export default defineNuxtConfig({
  // https://github.com/nuxt-themes/docus
  extends: "@nuxt-themes/docus",

  modules: [
    // https://github.com/nuxt-modules/plausible
    "@nuxtjs/plausible",
    // https://github.com/nuxt/devtools
    "@nuxt/devtools",
    "@nuxtjs/tailwindcss",
  ],

  css: ["@/assets/css/main.css", "@/assets/css/tailwind.css"],
  colorMode: {
    preference: "dark",
  },
});
