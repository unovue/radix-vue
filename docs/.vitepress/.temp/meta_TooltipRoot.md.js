import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"sidebar":true},"headers":[],"relativePath":"meta/TooltipRoot.md","filePath":"meta/TooltipRoot.md","lastUpdated":1706592413000}');
const _sfc_main = { name: "meta/TooltipRoot.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_PropsTable = resolveComponent("PropsTable");
  const _component_EmitsTable = resolveComponent("EmitsTable");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_PropsTable, { data: [
    {
      "name": "defaultOpen",
      "description": "<p>The open state of the tooltip when it is initially rendered.\nUse when you do not need to control its open state.</p>\n",
      "type": "boolean",
      "required": false,
      "default": "false"
    },
    {
      "name": "delayDuration",
      "description": "<p>Override the duration given to the <code>Provider</code> to customise\nthe open delay for a specific tooltip.</p>\n",
      "type": "number",
      "required": false
    },
    {
      "name": "disableClosingTrigger",
      "description": "<p>When <code>true</code>, clicking on trigger will not close the content.</p>\n",
      "type": "boolean",
      "required": false
    },
    {
      "name": "disableHoverableContent",
      "description": "<p>Prevents Tooltip.Content from remaining open when hovering.\nDisabling this has accessibility consequences. Inherits\nfrom Tooltip.Provider.</p>\n",
      "type": "boolean",
      "required": false
    },
    {
      "name": "open",
      "description": "<p>The controlled open state of the tooltip.</p>\n",
      "type": "boolean",
      "required": false
    }
  ] }, null, _parent));
  _push(ssrRenderComponent(_component_EmitsTable, { data: [
    {
      "name": "update:open",
      "description": "<p>Event handler called when the open state of the tooltip changes.</p>\n",
      "type": "[value: boolean]"
    }
  ] }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("meta/TooltipRoot.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TooltipRoot = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  TooltipRoot as default
};
