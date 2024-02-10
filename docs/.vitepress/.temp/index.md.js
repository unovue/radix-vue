import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
const __pageData = JSON.parse('{"title":"","titleTemplate":"Unstyled, accessible components for building high‑quality design systems and web apps in Vue","description":"","frontmatter":{"layout":"home","titleTemplate":"Unstyled, accessible components for building high‑quality design systems and web apps in Vue","hero":{"name":"Radix Vue","text":"Vue Port of Radix UI","tagline":"Unstyled, accessible components for building high‑quality design systems and web apps in Vue.","image":{"src":"/logo.svg","alt":"Radix-Vue"},"prelink":{"title":"🎉 JSDoc hint, Auto-generated docs!","link":"https://github.com/radix-vue/radix-vue/releases/tag/v1.4.0","target":"_blank"},"actions":[{"theme":"brand","text":"Get Started","link":"/overview/getting-started"},{"theme":"alt","text":"View on GitHub","link":"https://github.com/radix-vue/radix-vue"}]},"features":[{"icon":"<svg xmlns=\\"http://www.w3.org/2000/svg\\" width=\\"32\\" height=\\"32\\"><path fill=\\"#41b883\\" d=\\"M24.4 3.925H30l-14 24.15L2 3.925h10.71l3.29 5.6 3.22-5.6Z\\"/><path fill=\\"#41b883\\" d=\\"m2 3.925 14 24.15 14-24.15h-5.6L16 18.415 7.53 3.925Z\\"/><path fill=\\"#35495e\\" d=\\"M7.53 3.925 16 18.485l8.4-14.56h-5.18L16 9.525l-3.29-5.6Z\\"/></svg>","title":"Vue, Nuxt supported.","details":"Build for Vue framework, which compatible with any meta framework build on top of Vue."},{"icon":"🚀","title":"Save time. Ship faster.","details":"Building on top Radix components will save you time and money, so you can ship a better product faster."},{"icon":"⌨️","title":"Accessibility out of the box.","details":"WAI-ARIA compliant. Support Keyboard navigation & Focus management."},{"icon":"🧑🏻‍💻","title":"Developer Experience First.","details":"Unstyled, easily customizable and great for building design system and web apps."}],"sidebar":true},"headers":[],"relativePath":"index.md","filePath":"index.md","lastUpdated":1706868681000}');
const _sfc_main = { name: "index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
