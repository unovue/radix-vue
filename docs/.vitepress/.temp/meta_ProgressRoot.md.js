import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"sidebar":true},"headers":[],"relativePath":"meta/ProgressRoot.md","filePath":"meta/ProgressRoot.md","lastUpdated":1706592413000}');
const _sfc_main = { name: "meta/ProgressRoot.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_PropsTable = resolveComponent("PropsTable");
  const _component_EmitsTable = resolveComponent("EmitsTable");
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
      "name": "getValueLabel",
      "description": "<p>A function to get the accessible label text representing the current value in a human-readable format.</p>\n<p>If not provided, the value label will be read as the numeric value as a percentage of the max value.</p>\n",
      "type": "((value: number, max: number) => string)",
      "required": false,
      "default": "`${Math.round((value / max) * DEFAULT_MAX)}%`"
    },
    {
      "name": "max",
      "description": "<p>The maximum progress value.</p>\n",
      "type": "number",
      "required": false,
      "default": "DEFAULT_MAX"
    },
    {
      "name": "modelValue",
      "description": "<p>The progress value. Can be bind as <code>v-model</code>.</p>\n",
      "type": "number | null",
      "required": false
    }
  ] }, null, _parent));
  _push(ssrRenderComponent(_component_EmitsTable, { data: [
    {
      "name": "update:max",
      "description": "<p>Event handler called when the max value changes</p>\n",
      "type": "[value: number]"
    },
    {
      "name": "update:modelValue",
      "description": "<p>Event handler called when the progres value changes</p>\n",
      "type": "[value: string[]]"
    }
  ] }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("meta/ProgressRoot.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ProgressRoot = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ProgressRoot as default
};
