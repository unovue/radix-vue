import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"sidebar":true},"headers":[],"relativePath":"meta/PaginationRoot.md","filePath":"meta/PaginationRoot.md","lastUpdated":1706868063000}');
const _sfc_main = { name: "meta/PaginationRoot.md" };
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
      "default": "'nav'"
    },
    {
      "name": "asChild",
      "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\n<p>Read our <a href='https://www.radix-vue.com/guides/composition.html'>Composition</a> guide for more details.</p>\n",
      "type": "boolean",
      "required": false
    },
    {
      "name": "defaultPage",
      "description": "<p>The value of the page that should be active when initially rendered.</p>\n<p>Use when you do not need to control the value state.</p>\n",
      "type": "number",
      "required": false,
      "default": "1"
    },
    {
      "name": "disabled",
      "description": "<p>When <code>true</code>, prevents the user from interacting with item</p>\n",
      "type": "boolean",
      "required": false
    },
    {
      "name": "itemsPerPage",
      "description": "<p>Number of items per page</p>\n",
      "type": "number",
      "required": false,
      "default": "10"
    },
    {
      "name": "page",
      "description": "<p>The controlled value of the current page. Can be binded as <code>v-model:page</code>.</p>\n",
      "type": "number",
      "required": false
    },
    {
      "name": "showEdges",
      "description": "<p>When <code>true</code>, always show first page, last page, and ellipsis</p>\n",
      "type": "boolean",
      "required": false,
      "default": "false"
    },
    {
      "name": "siblingCount",
      "description": "<p>Number of sibling should be shown around the current page</p>\n",
      "type": "number",
      "required": false,
      "default": "2"
    },
    {
      "name": "total",
      "description": "<p>Number of items in your list</p>\n",
      "type": "number",
      "required": false,
      "default": "0"
    }
  ] }, null, _parent));
  _push(ssrRenderComponent(_component_EmitsTable, { data: [
    {
      "name": "update:page",
      "description": "<p>Event handler called when the page value changes</p>\n",
      "type": "[value: number]"
    }
  ] }, null, _parent));
  _push(ssrRenderComponent(_component_SlotsTable, { data: [
    {
      "name": "page",
      "description": "Current page state",
      "type": "number"
    },
    {
      "name": "pageCount",
      "description": "Number of pages",
      "type": "number"
    }
  ] }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("meta/PaginationRoot.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const PaginationRoot = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  PaginationRoot as default
};
