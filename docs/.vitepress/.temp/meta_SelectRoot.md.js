import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"sidebar":true},"headers":[],"relativePath":"meta/SelectRoot.md","filePath":"meta/SelectRoot.md","lastUpdated":1706592413000}');
const _sfc_main = { name: "meta/SelectRoot.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_PropsTable = resolveComponent("PropsTable");
  const _component_EmitsTable = resolveComponent("EmitsTable");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_PropsTable, { data: [
    {
      "name": "autocomplete",
      "description": "<p>Native html input <code>autocomplete</code> attribute.</p>\n",
      "type": "string",
      "required": false
    },
    {
      "name": "defaultOpen",
      "description": "<p>The open state of the select when it is initially rendered. Use when you do not need to control its open state.</p>\n",
      "type": "boolean",
      "required": false
    },
    {
      "name": "defaultValue",
      "description": "<p>The value of the select when initially rendered. Use when you do not need to control the state of the Select</p>\n",
      "type": "string",
      "required": false,
      "default": "''"
    },
    {
      "name": "dir",
      "description": "<p>The reading direction of the combobox when applicable. <br> If omitted, inherits globally from <code>DirectionProvider</code> or assumes LTR (left-to-right) reading mode.</p>\n",
      "type": "'ltr' | 'rtl'",
      "required": false
    },
    {
      "name": "disabled",
      "description": "<p>When <code>true</code>, prevents the user from interacting with Select</p>\n",
      "type": "boolean",
      "required": false
    },
    {
      "name": "modelValue",
      "description": "<p>The controlled value of the Select. Can be bind as <code>v-model</code>.</p>\n",
      "type": "string",
      "required": false
    },
    {
      "name": "name",
      "description": "<p>The name of the Select. Submitted with its owning form as part of a name/value pair.</p>\n",
      "type": "string",
      "required": false
    },
    {
      "name": "open",
      "description": "<p>The controlled open state of the Select. Can be bind as <code>v-model:open</code>.</p>\n",
      "type": "boolean",
      "required": false
    },
    {
      "name": "required",
      "description": "<p>When <code>true</code>, indicates that the user must select a value before the owning form can be submitted.</p>\n",
      "type": "boolean",
      "required": false
    }
  ] }, null, _parent));
  _push(ssrRenderComponent(_component_EmitsTable, { data: [
    {
      "name": "update:modelValue",
      "description": "<p>Event handler called when the value changes.</p>\n",
      "type": "[value: string]"
    },
    {
      "name": "update:open",
      "description": "<p>Event handler called when the open state of the context menu changes.</p>\n",
      "type": "[value: boolean]"
    }
  ] }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("meta/SelectRoot.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const SelectRoot = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  SelectRoot as default
};
