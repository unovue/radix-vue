import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"sidebar":true},"headers":[],"relativePath":"meta/MenubarRoot.md","filePath":"meta/MenubarRoot.md","lastUpdated":1706592413000}');
const _sfc_main = { name: "meta/MenubarRoot.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_PropsTable = resolveComponent("PropsTable");
  const _component_EmitsTable = resolveComponent("EmitsTable");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_PropsTable, { data: [
    {
      "name": "defaultValue",
      "description": "<p>The value of the menu that should be open when initially rendered. Use when you do not need to control the value state.</p>\n",
      "type": "string",
      "required": false
    },
    {
      "name": "dir",
      "description": "<p>The reading direction of the combobox when applicable.</p>\n<p>If omitted, inherits globally from <code>DirectionProvider</code> or assumes LTR (left-to-right) reading mode.</p>\n",
      "type": "'ltr' | 'rtl'",
      "required": false
    },
    {
      "name": "loop",
      "description": "<p>When <code>true</code>, keyboard navigation will loop from last item to first, and vice versa.</p>\n",
      "type": "boolean",
      "required": false,
      "default": "false"
    },
    {
      "name": "modelValue",
      "description": "<p>The controlled value of the menu to open. Can be used as <code>v-model</code>.</p>\n",
      "type": "string",
      "required": false
    }
  ] }, null, _parent));
  _push(ssrRenderComponent(_component_EmitsTable, { data: [
    {
      "name": "update:modelValue",
      "description": "<p>Event handler called when the value changes.</p>\n",
      "type": "[value: boolean]"
    }
  ] }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("meta/MenubarRoot.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const MenubarRoot = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  MenubarRoot as default
};
