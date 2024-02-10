import { resolveComponent, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
const __pageData = JSON.parse('{"title":"Releases","description":"Discover the latest release of Radix Vue.","frontmatter":{"title":"Releases","description":"Discover the latest release of Radix Vue.","sidebar":true},"headers":[],"relativePath":"overview/releases.md","filePath":"overview/releases.md","lastUpdated":1696070965000}');
const _sfc_main = { name: "overview/releases.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Description = resolveComponent("Description");
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="releases" tabindex="-1">Releases <a class="header-anchor" href="#releases" aria-label="Permalink to &quot;Releases&quot;">​</a></h1>`);
  _push(ssrRenderComponent(_component_Description, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Discover the latest release of Radix Vue. `);
      } else {
        return [
          createTextVNode(" Discover the latest release of Radix Vue. ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<p><a href="https://github.com/radix-vue/radix-vue/releases" target="_blank" rel="noreferrer">Latest releases on github</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("overview/releases.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const releases = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  releases as default
};
