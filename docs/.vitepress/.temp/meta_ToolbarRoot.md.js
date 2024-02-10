import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"sidebar":true},"headers":[],"relativePath":"meta/ToolbarRoot.md","filePath":"meta/ToolbarRoot.md","lastUpdated":1706592413000}');
const _sfc_main = { name: "meta/ToolbarRoot.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_PropsTable = resolveComponent("PropsTable");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_PropsTable, { data: [
    {
      "name": "as",
      "description": "<p>The element or component this component should render as. Can be overwrite by <code>asChild</code></p>\n",
      "type": "AsTag | Component",
      "required": false,
      "default": "'div'"
    },
    {
      "name": "asChild",
      "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\n<p>Read our <a href='https://www.radix-vue.com/guides/composition.html'>Composition</a> guide for more details.</p>\n",
      "type": "boolean",
      "required": false
    },
    {
      "name": "dir",
      "description": "<p>The reading direction of the combobox when applicable. <br> If omitted, inherits globally from <code>DirectionProvider</code> or assumes LTR (left-to-right) reading mode.</p>\n",
      "type": "'ltr' | 'rtl'",
      "required": false
    },
    {
      "name": "loop",
      "description": "<p>When <code>true</code>, keyboard navigation will loop from last tab to first, and vice versa.</p>\n",
      "type": "boolean",
      "required": false
    },
    {
      "name": "orientation",
      "description": "<p>The orientation of the toolbar</p>\n",
      "type": "'vertical' | 'horizontal'",
      "required": false,
      "default": "'horizontal'"
    }
  ] }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("meta/ToolbarRoot.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ToolbarRoot = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ToolbarRoot as default
};
