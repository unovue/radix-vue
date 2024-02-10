import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"sidebar":true},"headers":[],"relativePath":"meta/TooltipPortal.md","filePath":"meta/TooltipPortal.md","lastUpdated":1706592413000}');
const _sfc_main = { name: "meta/TooltipPortal.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_PropsTable = resolveComponent("PropsTable");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_PropsTable, { data: [
    {
      "name": "disabled",
      "description": "<p>Disable teleport and render the component inline</p>\n<p><a href='https://vuejs.org/guide/built-ins/teleport.html#disabling-teleport' target='_blank'>reference</a></p>\n",
      "type": "boolean",
      "required": false
    },
    {
      "name": "forceMount",
      "description": "<p>Used to force mounting when more control is needed. Useful when\ncontrolling animation with Vue animation libraries.</p>\n",
      "type": "boolean",
      "required": false
    },
    {
      "name": "to",
      "description": "<p>Vue native teleport component prop <code>:to</code></p>\n<p><a href='https://vuejs.org/guide/built-ins/teleport.html#basic-usage' target='_blank'>reference</a></p>\n",
      "type": "string | HTMLElement",
      "required": false
    }
  ] }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("meta/TooltipPortal.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TooltipPortal = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  TooltipPortal as default
};
