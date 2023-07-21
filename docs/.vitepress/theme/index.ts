// https://vitepress.dev/guide/custom-theme
import { h } from "vue";
import Theme from "vitepress/theme";
import HomePage from "../components/HomePage.vue";
import "./style.css";
import "./tailwind.postcss";

export default {
  extends: Theme,
  Layout: () => {
    return h(Theme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      "home-features-after": () => h(HomePage),
    });
  },
  enhanceApp({ app, router, siteData }) {
    // ...
  },
};
