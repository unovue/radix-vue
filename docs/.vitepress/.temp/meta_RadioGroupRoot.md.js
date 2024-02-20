import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"sidebar":true},"headers":[],"relativePath":"meta/RadioGroupRoot.md","filePath":"meta/RadioGroupRoot.md","lastUpdated":1706592413000}');
const _sfc_main = { name: "meta/RadioGroupRoot.md" };
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
      "name": "defaultValue",
      "description": "<p>The value of the radio item that should be checked when initially rendered.</p>\n<p>Use when you do not need to control the state of the radio items.</p>\n",
      "type": "string",
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
      "description": "<p>When <code>true</code>, prevents the user from interacting with radio items.</p>\n",
      "type": "boolean",
      "required": false,
      "default": "false"
    },
    {
      "name": "loop",
      "description": "<p>When <code>true</code>, keyboard navigation will loop from last item to first, and vice versa.</p>\n",
      "type": "boolean",
      "required": false,
      "default": "true"
    },
    {
      "name": "modelValue",
      "description": "<p>The controlled value of the radio item to check. Can be binded as <code>v-model</code>.</p>\n",
      "type": "string",
      "required": false
    },
    {
      "name": "name",
      "description": "<p>The name of the group. Submitted with its owning form as part of a name/value pair.</p>\n",
      "type": "string",
      "required": false
    },
    {
      "name": "orientation",
      "description": "<p>The orientation of the component.</p>\n",
      "type": "'vertical' | 'horizontal'",
      "required": false
    },
    {
      "name": "required",
      "description": "<p>When <code>true</code>, indicates that the user must check a radio item before the owning form can be submitted.</p>\n",
      "type": "boolean",
      "required": false,
      "default": "false"
    }
  ] }, null, _parent));
  _push(ssrRenderComponent(_component_EmitsTable, { data: [
    {
      "name": "update:modelValue",
      "description": "<p>Event handler called when the radio group value changes</p>\n",
      "type": "[payload: string]"
    }
  ] }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("meta/RadioGroupRoot.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const RadioGroupRoot = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  RadioGroupRoot as default
};
