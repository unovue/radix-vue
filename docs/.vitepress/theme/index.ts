// https://vitepress.dev/guide/custom-theme
import { h } from "vue";
import Theme from "vitepress/theme";
import HomePage from "../components/HomePage.vue";
import HomePageDemo from "../components/HomePageDemo.vue";
import "./style.css";
import "./tailwind.postcss";
import "radix-vue/index.css";

const regex = /\/(\w+)\.vue/;
// @ts-ignore
const baseModules = import.meta.glob("../../components/*.vue", { eager: true });
// @ts-ignore
const tableModules = import.meta.glob("../../components/tables/*.vue", { eager: true });

export default {
  extends: Theme,
  Layout: () => {
    return h(Theme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      "home-features-after": () => h("div", [h(HomePageDemo), h(HomePage)]),
    });
  },
  enhanceApp({ app, router, siteData }) {
    for (const path in baseModules) {
      app.component(path.match(regex)?.[1], baseModules[path]?.default);
    }
    for (const path in tableModules) {
      app.component(path.match(regex)?.[1], tableModules[path]?.default);
    }
  },
};
