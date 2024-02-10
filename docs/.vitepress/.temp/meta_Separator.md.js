import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"sidebar":true},"headers":[],"relativePath":"meta/Separator.md","filePath":"meta/Separator.md","lastUpdated":1706592413000}');
const _sfc_main = { name: "meta/Separator.md" };
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
      "name": "decorative",
      "description": "<p>Whether or not the component is purely decorative. <br>When <code>true</code>, accessibility-related attributes\nare updated so that that the rendered element is removed from the accessibility tree.</p>\n",
      "type": "boolean",
      "required": false
    },
    {
      "name": "orientation",
      "description": "<p>Orientation of the component.</p>\n<p>Either <code>vertical</code> or <code>horizontal</code>. Defaults to <code>horizontal</code>.</p>\n",
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("meta/Separator.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Separator = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  Separator as default
};
