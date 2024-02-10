import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
const __pageData = JSON.parse('{"title":"","description":"Showcase your packages or projects made with Radix Vue","frontmatter":{"layout":"showcase","description":"Showcase your packages or projects made with Radix Vue","packages":[{"title":"...","description":"Component library built on top of Radix Vue","url":"https://github.com/radix-vue","image":"/new-ui.jpg"},{"title":"Shadcn Vue","description":"An unofficial, community-led Vue port of shadcn/ui.","url":"https://www.shadcn-vue.com/","image":"https://www.shadcn-vue.com/og.png"},{"title":"UI Thing","description":"Reusable Nuxt 3 components.","url":"https://ui-thing.behonbaker.com/getting-started/introduction","image":"https://ui-thing.behonbaker.com/cover.png"},{"title":"Float UI","description":"Float UI offers all the vital building blocks you need to transform your idea into a great-looking startup.","url":"https://floatui.com/","image":"https://ph-files.imgix.net/56069229-222e-4364-88c6-8c5d4aa0c3e5.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&fit=max&dpr=1"}],"projects":[{"title":"vue0","description":"Generate Component with simple text prompts. Vue version open source alternative for v0.","url":"https://www.vue0.dev/","image":"https://www.vue0.dev/og.png"},{"title":"chibisafe","description":"Blazing fast file uploader and awesome bunker written in node! 🚀","url":"https://chibisafe.moe/","image":"https://chibisafe.moe/meta.jpg"},{"title":"Crypto Map","description":"Explore the world and find places to spend your crypto.","url":"https://map.nimiq.com/","image":"https://mycbdmurjytbdahjljoh.supabase.co/storage/v1/object/public/og-image/og-image.jpg"}],"starters":null,"sidebar":false},"headers":[],"relativePath":"showcase.md","filePath":"showcase.md","lastUpdated":1704727165000}');
const _sfc_main = { name: "showcase.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("showcase.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const showcase = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  showcase as default
};
