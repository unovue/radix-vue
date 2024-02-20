import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"sidebar":true},"headers":[],"relativePath":"meta/ComboboxRoot.md","filePath":"meta/ComboboxRoot.md","lastUpdated":1706867366000}');
const _sfc_main = { name: "meta/ComboboxRoot.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_PropsTable = resolveComponent("PropsTable");
  const _component_EmitsTable = resolveComponent("EmitsTable");
  const _component_SlotsTable = resolveComponent("SlotsTable");
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
      "name": "defaultOpen",
      "description": "<p>The open state of the combobox when it is initially rendered. <br> Use when you do not need to control its open state.</p>\n",
      "type": "boolean",
      "required": false
    },
    {
      "name": "defaultValue",
      "description": "<p>The value of the combobox when initially rendered. Use when you do not need to control the state of the Combobox</p>\n",
      "type": "AcceptableValue",
      "required": false
    },
    {
      "name": "dir",
      "description": "<p>The reading direction of the combobox when applicable. <br> If omitted, inherits globally from <code>DirectionProvider</code> or assumes LTR (left-to-right) reading mode.</p>\n",
      "type": "'ltr' | 'rtl'",
      "required": false
    },
    {
      "name": "disabled",
      "description": "<p>When <code>true</code>, prevents the user from interacting with Combobox</p>\n",
      "type": "boolean",
      "required": false
    },
    {
      "name": "displayValue",
      "description": "<p>The display value of input for selected item. Does not work with <code>multiple</code>.</p>\n",
      "type": "((val: AcceptableValue) => string)",
      "required": false
    },
    {
      "name": "filterFunction",
      "description": "<p>The custom filter function for filtering <code>ComboboxItem</code>.</p>\n",
      "type": "((val: string[] | number[] | false[] | true[] | object[], term: string) => string[] | number[] | false[] | true[] | object[])",
      "required": false
    },
    {
      "name": "modelValue",
      "description": "<p>The controlled value of the Combobox. Can be binded-with with <code>v-model</code>.</p>\n",
      "type": "AcceptableValue",
      "required": false
    },
    {
      "name": "multiple",
      "description": "<p>Whether multiple options can be selected or not.</p>\n",
      "type": "boolean",
      "required": false
    },
    {
      "name": "name",
      "description": "<p>The name of the Combobox. Submitted with its owning form as part of a name/value pair.</p>\n",
      "type": "string",
      "required": false
    },
    {
      "name": "open",
      "description": "<p>The controlled open state of the Combobox. Can be binded-with with <code>v-model:open</code>.</p>\n",
      "type": "boolean",
      "required": false
    },
    {
      "name": "searchTerm",
      "description": "<p>The controlled search term of the Combobox. Can be binded-with with v-model:searchTerm.</p>\n",
      "type": "string",
      "required": false
    }
  ] }, null, _parent));
  _push(ssrRenderComponent(_component_EmitsTable, { data: [
    {
      "name": "update:modelValue",
      "description": "<p>Event handler called when the value changes.</p>\n",
      "type": "[value: AcceptableValue]"
    },
    {
      "name": "update:open",
      "description": "<p>Event handler called when the open state of the combobox changes.</p>\n",
      "type": "[value: boolean]"
    },
    {
      "name": "update:searchTerm",
      "description": "<p>Event handler called when the searchTerm of the combobox changes.</p>\n",
      "type": "[value: string]"
    }
  ] }, null, _parent));
  _push(ssrRenderComponent(_component_SlotsTable, { data: [
    {
      "name": "open",
      "description": "Current open state",
      "type": "boolean"
    },
    {
      "name": "modelValue",
      "description": "Current active value",
      "type": "string | number | false | true | object"
    }
  ] }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("meta/ComboboxRoot.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ComboboxRoot = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ComboboxRoot as default
};
