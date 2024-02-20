import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"sidebar":true},"headers":[],"relativePath":"meta/MenubarMenu.md","filePath":"meta/MenubarMenu.md","lastUpdated":1706592413000}');
const _sfc_main = { name: "meta/MenubarMenu.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_PropsTable = resolveComponent("PropsTable");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_PropsTable, { data: [
    {
      "name": "value",
      "description": "<p>A unique value that associates the item with an active value when the navigation menu is controlled.</p>\n<p>This prop is managed automatically when uncontrolled.</p>\n",
      "type": "string",
      "required": false
    }
  ] }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("meta/MenubarMenu.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const MenubarMenu = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  MenubarMenu as default
};
