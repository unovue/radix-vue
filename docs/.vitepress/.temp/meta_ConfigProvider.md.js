import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"sidebar":true},"headers":[],"relativePath":"meta/ConfigProvider.md","filePath":"meta/ConfigProvider.md","lastUpdated":1706592413000}');
const _sfc_main = { name: "meta/ConfigProvider.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_PropsTable = resolveComponent("PropsTable");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_PropsTable, { data: [
    {
      "name": "dir",
      "description": "<p>The global reading direction of your application. This will be inherited by all primitives.</p>\n",
      "type": "'ltr' | 'rtl'",
      "required": false,
      "default": "'ltr'"
    },
    {
      "name": "scrollBody",
      "description": "<p>The global scroll body behavior of your application. This will be inherited by the related primitives.</p>\n",
      "type": "boolean | ScrollBodyOption",
      "required": false,
      "default": "true"
    }
  ] }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("meta/ConfigProvider.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ConfigProvider = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ConfigProvider as default
};
