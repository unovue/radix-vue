import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"sidebar":true},"headers":[],"relativePath":"meta/CheckboxRoot.md","filePath":"meta/CheckboxRoot.md","lastUpdated":1706592413000}');
const _sfc_main = { name: "meta/CheckboxRoot.md" };
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
      "default": "'button'"
    },
    {
      "name": "asChild",
      "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\n<p>Read our <a href='https://www.radix-vue.com/guides/composition.html'>Composition</a> guide for more details.</p>\n",
      "type": "boolean",
      "required": false
    },
    {
      "name": "checked",
      "description": "<p>The controlled checked state of the checkbox. Can be binded with v-model.</p>\n",
      "type": "boolean | 'indeterminate'",
      "required": false
    },
    {
      "name": "defaultChecked",
      "description": "<p>The checked state of the checkbox when it is initially rendered. Use when you do not need to control its checked state.</p>\n",
      "type": "boolean",
      "required": false
    },
    {
      "name": "disabled",
      "description": "<p>When <code>true</code>, prevents the user from interacting with the checkbox</p>\n",
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
      "name": "name",
      "description": "<p>The name of the checkbox. Submitted with its owning form as part of a name/value pair.</p>\n",
      "type": "string",
      "required": false
    },
    {
      "name": "required",
      "description": "<p>When <code>true</code>, indicates that the user must check the checkbox before the owning form can be submitted.</p>\n",
      "type": "boolean",
      "required": false
    },
    {
      "name": "value",
      "description": "<p>The value given as data when submitted with a <code>name</code>.</p>\n",
      "type": "string",
      "required": false,
      "default": "'on'"
    }
  ] }, null, _parent));
  _push(ssrRenderComponent(_component_EmitsTable, { data: [
    {
      "name": "update:checked",
      "description": "<p>Event handler called when the checked state of the checkbox changes.</p>\n",
      "type": "[value: boolean]"
    }
  ] }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("meta/CheckboxRoot.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CheckboxRoot = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  CheckboxRoot as default
};
