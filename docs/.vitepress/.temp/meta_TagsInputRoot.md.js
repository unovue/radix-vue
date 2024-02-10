import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"sidebar":true},"headers":[],"relativePath":"meta/TagsInputRoot.md","filePath":"meta/TagsInputRoot.md","lastUpdated":1706867366000}');
const _sfc_main = { name: "meta/TagsInputRoot.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_PropsTable = resolveComponent("PropsTable");
  const _component_EmitsTable = resolveComponent("EmitsTable");
  const _component_SlotsTable = resolveComponent("SlotsTable");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_PropsTable, { data: [
    {
      "name": "addOnPaste",
      "description": "<p>When <code>true</code>, allow adding tags on paste. Work in conjunction with delimiter prop.</p>\n",
      "type": "boolean",
      "required": false
    },
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
      "description": "<p>The value of the tags that should be added. Use when you do not need to control the state of the tags input</p>\n",
      "type": "string[]",
      "required": false,
      "default": "[]"
    },
    {
      "name": "delimiter",
      "description": "<p>The character to trigger the addition of a new tag. Also used to split tags for <code>@paste</code> event</p>\n",
      "type": "string",
      "required": false,
      "default": "','"
    },
    {
      "name": "dir",
      "description": "<p>The reading direction of the combobox when applicable. <br> If omitted, inherits globally from <code>DirectionProvider</code> or assumes LTR (left-to-right) reading mode.</p>\n",
      "type": "'ltr' | 'rtl'",
      "required": false
    },
    {
      "name": "disabled",
      "description": "<p>When <code>true</code>, prevents the user from interacting with the tags input.</p>\n",
      "type": "boolean",
      "required": false
    },
    {
      "name": "duplicate",
      "description": "<p>When <code>true</code>, allow duplicated tags.</p>\n",
      "type": "boolean",
      "required": false
    },
    {
      "name": "id",
      "description": "",
      "type": "string",
      "required": false
    },
    {
      "name": "max",
      "description": "<p>Maximum number of tags.</p>\n",
      "type": "number",
      "required": false,
      "default": "0"
    },
    {
      "name": "modelValue",
      "description": "<p>The controlled value of the tags input. Can be bind as <code>v-model</code>.</p>\n",
      "type": "string[]",
      "required": false
    },
    {
      "name": "name",
      "description": "<p>The name of the tags input submitted with its owning form as part of a name/value pair.</p>\n",
      "type": "string",
      "required": false
    },
    {
      "name": "required",
      "description": "<p>When <code>true</code>, indicates that the user must add the tags input before the owning form can be submitted.</p>\n",
      "type": "boolean",
      "required": false
    }
  ] }, null, _parent));
  _push(ssrRenderComponent(_component_EmitsTable, { data: [
    {
      "name": "invalid",
      "description": "<p>Event handler called when the value is invalid</p>\n",
      "type": "[payload: string]"
    },
    {
      "name": "update:modelValue",
      "description": "<p>Event handler called when the value changes</p>\n",
      "type": "[payload: string[]]"
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("meta/TagsInputRoot.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TagsInputRoot = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  TagsInputRoot as default
};
