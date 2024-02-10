import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"sidebar":true},"headers":[],"relativePath":"meta/CollapsibleRoot.md","filePath":"meta/CollapsibleRoot.md","lastUpdated":1706867366000}');
const _sfc_main = { name: "meta/CollapsibleRoot.md" };
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
      "description": "<p>The open state of the collapsible when it is initially rendered. <br> Use when you do not need to control its open state.</p>\n",
      "type": "boolean",
      "required": false,
      "default": "false"
    },
    {
      "name": "disabled",
      "description": "<p>When <code>true</code>, prevents the user from interacting with the collapsible.</p>\n",
      "type": "boolean",
      "required": false
    },
    {
      "name": "open",
      "description": "<p>The controlled open state of the collapsible. Can be binded with <code>v-model</code>.</p>\n",
      "type": "boolean",
      "required": false
    }
  ] }, null, _parent));
  _push(ssrRenderComponent(_component_EmitsTable, { data: [
    {
      "name": "update:open",
      "description": "<p>Event handler called when the open state of the collapsible changes.</p>\n",
      "type": "[value: boolean]"
    }
  ] }, null, _parent));
  _push(ssrRenderComponent(_component_SlotsTable, { data: [
    {
      "name": "open",
      "description": "Current open state",
      "type": "boolean"
    }
  ] }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("meta/CollapsibleRoot.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CollapsibleRoot = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  CollapsibleRoot as default
};
