import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"sidebar":true},"headers":[],"relativePath":"meta/HoverCardRoot.md","filePath":"meta/HoverCardRoot.md","lastUpdated":1706592413000}');
const _sfc_main = { name: "meta/HoverCardRoot.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_PropsTable = resolveComponent("PropsTable");
  const _component_EmitsTable = resolveComponent("EmitsTable");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_PropsTable, { data: [
    {
      "name": "closeDelay",
      "description": "<p>The duration from when the mouse leaves the trigger or content until the hover card closes.</p>\n",
      "type": "number",
      "required": false,
      "default": "300"
    },
    {
      "name": "defaultOpen",
      "description": "<p>The open state of the hover card when it is initially rendered. Use when you do not need to control its open state.</p>\n",
      "type": "false",
      "required": false,
      "default": "false"
    },
    {
      "name": "open",
      "description": "<p>The controlled open state of the hover card. Can be binded as <code>v-model:open</code>.</p>\n",
      "type": "boolean",
      "required": false
    },
    {
      "name": "openDelay",
      "description": "<p>The duration from when the mouse enters the trigger until the hover card opens.</p>\n",
      "type": "number",
      "required": false,
      "default": "700"
    }
  ] }, null, _parent));
  _push(ssrRenderComponent(_component_EmitsTable, { data: [
    {
      "name": "update:open",
      "description": "<p>Event handler called when the open state of the hover card changes.</p>\n",
      "type": "[value: boolean]"
    }
  ] }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("meta/HoverCardRoot.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const HoverCardRoot = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  HoverCardRoot as default
};
