import { resolveComponent, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
const __pageData = JSON.parse('{"title":"Server side rendering","description":"Radix Primitives can be rendered on the server.","frontmatter":{"title":"Server side rendering","description":"Radix Primitives can be rendered on the server.","sidebar":true},"headers":[],"relativePath":"guides/server-side-rendering.md","filePath":"guides/server-side-rendering.md","lastUpdated":1696070965000}');
const _sfc_main = { name: "guides/server-side-rendering.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Description = resolveComponent("Description");
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="server-side-rendering" tabindex="-1">Server side rendering <a class="header-anchor" href="#server-side-rendering" aria-label="Permalink to &quot;Server side rendering&quot;">​</a></h1>`);
  _push(ssrRenderComponent(_component_Description, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Radix Primitives can be rendered on the server. `);
      } else {
        return [
          createTextVNode(" Radix Primitives can be rendered on the server. ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h2 id="overview" tabindex="-1">Overview <a class="header-anchor" href="#overview" aria-label="Permalink to &quot;Overview&quot;">​</a></h2><p>Server side rendering or <code>SSR</code>, is a technique used to render components to HTML on the server, as opposed to rendering them only on the client.</p><p>Static rendering is another similar approach. Instead it pre-renders pages to HTML at build time rather than on each request.</p><p>You should be able to use all of our primitives with both approaches, for example with <a href="https://nuxt.com/" target="_blank" rel="noreferrer">Nuxt.js</a>.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>Some components&#39; state might not rendered correctly in server-side, we are working on fixing it. If you encoutered any issue, feel free to open a ticket.</p></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("guides/server-side-rendering.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const serverSideRendering = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  serverSideRendering as default
};
