import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"sidebar":true},"headers":[],"relativePath":"meta/PinInputRoot.md","filePath":"meta/PinInputRoot.md","lastUpdated":1706867366000}');
const _sfc_main = { name: "meta/PinInputRoot.md" };
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
      "name": "defaultValue",
      "description": "<p>The default value of the pin inputs when it is initially rendered. Use when you do not need to control its checked state.</p>\n",
      "type": "string[]",
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
      "description": "<p>When <code>true</code>, prevents the user from interacting with the pin input</p>\n",
      "type": "boolean",
      "required": false
    },
    {
      "name": "id",
      "description": "<p>Id of the element</p>\n",
      "type": "string",
      "required": false
    },
    {
      "name": "mask",
      "description": "<p>When <code>true</code>, pin inputs will be treated as password.</p>\n",
      "type": "boolean",
      "required": false
    },
    {
      "name": "modelValue",
      "description": "<p>The controlled checked state of the pin input. Can be binded as <code>v-model</code>.</p>\n",
      "type": "string[]",
      "required": false
    },
    {
      "name": "name",
      "description": "<p>The name of the pin input. Submitted with its owning form as part of a name/value pair.</p>\n",
      "type": "string",
      "required": false
    },
    {
      "name": "otp",
      "description": "<p>When <code>true</code>, mobile devices will autodetect the OTP from messages or clipboard, and enable the autocomplete field.</p>\n",
      "type": "boolean",
      "required": false
    },
    {
      "name": "placeholder",
      "description": "<p>The placeholder character to use for empty pin-inputs.</p>\n",
      "type": "string",
      "required": false,
      "default": "''"
    },
    {
      "name": "required",
      "description": "<p>When <code>true</code>, indicates that the user must check the pin input before the owning form can be submitted.</p>\n",
      "type": "boolean",
      "required": false
    },
    {
      "name": "type",
      "description": "<p>Input type for the inputs.</p>\n",
      "type": "'number' | 'text'",
      "required": false,
      "default": "'text'"
    }
  ] }, null, _parent));
  _push(ssrRenderComponent(_component_EmitsTable, { data: [
    {
      "name": "complete",
      "description": "",
      "type": "[value: string[]]"
    },
    {
      "name": "update:modelValue",
      "description": "<p>Event handler called when the value changes.</p>\n",
      "type": "[value: string[]]"
    }
  ] }, null, _parent));
  _push(ssrRenderComponent(_component_SlotsTable, { data: [
    {
      "name": "modelValue",
      "description": "Current input values",
      "type": "string[]"
    }
  ] }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("meta/PinInputRoot.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const PinInputRoot = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  PinInputRoot as default
};
