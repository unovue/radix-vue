import { defineConfig } from "vitepress";
import {
  contributing,
  discord,
  font,
  github,
  ogImage,
  ogUrl,
  releases,
  radixVueDescription,
  radixVueName,
} from "./meta";
import { teamMembers } from "./contributors";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: radixVueName,
  description: radixVueDescription,
  head: [
    ["meta", { name: "theme-color", content: "#729b1a" }],
    ["link", { rel: "icon", href: "/favicon.ico", sizes: "any" }],
    ["link", { rel: "icon", href: "/logo.svg", type: "image/svg+xml" }],
    [
      "meta",
      { name: "author", content: `${teamMembers.map((c) => c.name).join(", ")} and ${radixVueName} contributors` },
    ],
    [
      "meta",
      {
        name: "keywords",
        content:
          "vitest, vite, test, coverage, snapshot, react, vue, preact, svelte, solid, lit, ruby, cypress, puppeteer, jsdom, happy-dom, test-runner, jest, typescript, esm, tinypool, tinyspy, node",
      },
    ],
    ["meta", { property: "og:title", content: radixVueName }],
    ["meta", { property: "og:description", content: radixVueDescription }],
    ["meta", { property: "og:url", content: ogUrl }],
    ["meta", { property: "og:image", content: ogImage }],
    ["meta", { name: "twitter:title", content: radixVueName }],
    ["meta", { name: "twitter:description", content: radixVueDescription }],
    ["meta", { name: "twitter:image", content: ogImage }],
    ["meta", { name: "twitter:card", content: "summary_large_image" }],
    ["link", { rel: "preload", as: "style", onload: "this.onload=null;this.rel='stylesheet'", href: font }],
    ["noscript", {}, `<link rel="stylesheet" crossorigin="anonymous" href="${font}" />`],
    ["link", { rel: "mask-icon", href: "/logo.svg", color: "#ffffff" }],
    ["link", { rel: "apple-touch-icon", href: "/apple-touch-icon.png", sizes: "180x180" }],
  ],
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/" },
    ],

    sidebar: sidebar(),

    socialLinks: [
      { icon: "discord", link: discord },
      { icon: "github", link: github },
    ],

    search: {
      provider: "local",
    },
  },
  srcDir: "content",
  appearance: "dark",
});

function sidebar() {
  return [
    {
      text: "Overview",
      collapsed: false,
      items: [
        { text: "Introduction", link: "/overview/introduction" },
        { text: "Getting Started", link: "/overview/getting-started" },
        { text: "Accessibility", link: "/overview/accessibility" },
        { text: "Releases", link: "/overview/releases" },
      ],
    },
    {
      text: "Guides",
      collapsed: false,
      items: [
        { text: "Styling", link: "/guides/styling" },
        { text: "Animation", link: "/guides/animation" },
        { text: "Composition", link: "/guides/composition" },
        { text: "Server side rendering", link: "/guides/server-side-rendering" },
      ],
    },
    {
      text: "Components",
      collapsed: false,
      items: [
        { text: "Accordion", link: "/components/accordion" },
        { text: "Alert Dialog", link: "/components/alert-dialog" },
        { text: "Aspect Ratio", link: "/components/aspect-ratio" },
        { text: "Avatar", link: "/components/avatar" },
        { text: "Checkbox", link: "/components/checkbox" },
        { text: "Collapsible", link: "/components/collapsible" },
        { text: "Context Menu", link: "/components/context-menu" },
        { text: "Dialog", link: "/components/dialog" },
        { text: "Dropdown Menu", link: "/components/dropdown-menu" },
        { text: "Hover Card", link: "/components/hover-card" },
        { text: "Label", link: "/components/label" },
        { text: "Menubar", link: "/components/menubar" },
        { text: "Navigation Menu", link: "/components/navigation-menu" },
        { text: "Popover", link: "/components/popover" },
        { text: "Progress", link: "/components/progress" },
        { text: "Radio Group", link: "/components/radio-group" },
        { text: "Scroll Area", link: "/components/scroll-area" },
        { text: "Select", link: "/components/select" },
        { text: "Separator", link: "/components/separator" },
        { text: "Slider", link: "/components/slider" },
        { text: "Switch", link: "/components/switch" },
        { text: "Tabs", link: "/components/tabs" },
        { text: "Toggle", link: "/components/toggle" },
        { text: "Toggle Group", link: "/components/toggle-group" },
        { text: "Toolbar", link: "/components/toolbar" },
        { text: "Tooltip", link: "/components/tooltip" },
      ],
    },
    // {
    //   text: 'Migrations',
    //   collapsed: false,
    //   items: [
    //     {
    //       text: 'Migration from VuePress',
    //       link: '/guide/migration-from-vuepress'
    //     },
    //     {
    //       text: 'Migration from VitePress 0.x',
    //       link: '/guide/migration-from-vitepress-0'
    //     }
    //   ]
    // },
    {
      text: "Config & API Reference",
      link: "/reference/site-config",
    },
  ];
}

function sidebarReference() {
  return [
    {
      text: "Reference",
      items: [
        { text: "Site Config", link: "/reference/site-config" },
        { text: "Frontmatter Config", link: "/reference/frontmatter-config" },
        { text: "Runtime API", link: "/reference/runtime-api" },
        { text: "CLI", link: "/reference/cli" },
        {
          text: "Default Theme",
          items: [
            {
              text: "Overview",
              link: "/reference/default-theme-config",
            },
            {
              text: "Nav",
              link: "/reference/default-theme-nav",
            },
            {
              text: "Sidebar",
              link: "/reference/default-theme-sidebar",
            },
            {
              text: "Home Page",
              link: "/reference/default-theme-home-page",
            },
            {
              text: "Footer",
              link: "/reference/default-theme-footer",
            },
            {
              text: "Layout",
              link: "/reference/default-theme-layout",
            },
            {
              text: "Badge",
              link: "/reference/default-theme-badge",
            },
            {
              text: "Team Page",
              link: "/reference/default-theme-team-page",
            },
            {
              text: "Prev / Next Links",
              link: "/reference/default-theme-prev-next-links",
            },
            {
              text: "Edit Link",
              link: "/reference/default-theme-edit-link",
            },
            {
              text: "Last Updated Timestamp",
              link: "/reference/default-theme-last-updated",
            },
            {
              text: "Search",
              link: "/reference/default-theme-search",
            },
            {
              text: "Carbon Ads",
              link: "/reference/default-theme-carbon-ads",
            },
          ],
        },
      ],
    },
  ];
}
