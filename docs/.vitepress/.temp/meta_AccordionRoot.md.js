import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"sidebar":true},"headers":[],"relativePath":"meta/AccordionRoot.md","filePath":"meta/AccordionRoot.md","lastUpdated":1706867366000}');
const _sfc_main = { name: "meta/AccordionRoot.md" };
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
      "name": "collapsible",
      "description": '<p>When type is "single", allows closing content when clicking trigger for an open item.\nWhen type is "multiple", this prop has no effect.</p>\n',
      "type": "boolean",
      "required": false,
      "default": "false"
    },
    {
      "name": "defaultValue",
      "description": '<p>The default value of the item to expand when type is "single" or the default values of the items to expand when type is "multiple".\nUse when you do not need to control the state of the item(s).</p>\n',
      "type": "string | string[]",
      "required": false
    },
    {
      "name": "dir",
      "description": "<p>The reading direction of the accordion when applicable. If omitted, assumes LTR (left-to-right) reading mode.</p>\n",
      "type": "'ltr' | 'rtl'",
      "required": false
    },
    {
      "name": "disabled",
      "description": "<p>When <code>true</code>, prevents the user from interacting with the accordion and all its items</p>\n",
      "type": "boolean",
      "required": false,
      "default": "false"
    },
    {
      "name": "modelValue",
      "description": '<p>The controlled value of the item to expand when type is "single" or the controlled values of the items to expand when type is "multiple".</p>\n',
      "type": "string | string[]",
      "required": false
    },
    {
      "name": "orientation",
      "description": "<p>The orientation of the accordion.</p>\n",
      "type": "'vertical' | 'horizontal'",
      "required": false,
      "default": "'vertical'"
    },
    {
      "name": "type",
      "description": "<p>Determines whether one or multiple items can be opened at the same time.</p>\n",
      "type": "'single' | 'multiple'",
      "required": true
    }
  ] }, null, _parent));
  _push(ssrRenderComponent(_component_EmitsTable, { data: [
    {
      "name": "update:modelValue",
      "description": "<p>Event handler called when the expanded state of an item changes</p>\n",
      "type": "[value: string | string[]]"
    }
  ] }, null, _parent));
  _push(ssrRenderComponent(_component_SlotsTable, { data: [
    {
      "name": "modelValue",
      "description": "Current active value",
      "type": "string | string[] | undefined"
    }
  ] }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("meta/AccordionRoot.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const AccordionRoot = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  AccordionRoot as default
};
