import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"sidebar":true},"headers":[],"relativePath":"meta/NavigationMenuRoot.md","filePath":"meta/NavigationMenuRoot.md","lastUpdated":1706592413000}');
const _sfc_main = { name: "meta/NavigationMenuRoot.md" };
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
      "default": "'nav'"
    },
    {
      "name": "asChild",
      "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\n<p>Read our <a href='https://www.radix-vue.com/guides/composition.html'>Composition</a> guide for more details.</p>\n",
      "type": "boolean",
      "required": false
    },
    {
      "name": "defaultValue",
      "description": "<p>The value of the menu item that should be active when initially rendered.</p>\n<p>Use when you do not need to control the value state.</p>\n",
      "type": "string",
      "required": false
    },
    {
      "name": "delayDuration",
      "description": "<p>The duration from when the pointer enters the trigger until the tooltip gets opened.</p>\n",
      "type": "number",
      "required": false,
      "default": "200"
    },
    {
      "name": "dir",
      "description": "<p>The reading direction of the combobox when applicable.</p>\n<p>If omitted, inherits globally from <code>DirectionProvider</code> or assumes LTR (left-to-right) reading mode.</p>\n",
      "type": "'ltr' | 'rtl'",
      "required": false
    },
    {
      "name": "modelValue",
      "description": "<p>The controlled value of the menu item to activate. Can be used as <code>v-model</code>.</p>\n",
      "type": "string",
      "required": false
    },
    {
      "name": "orientation",
      "description": "<p>The orientation of the menu.</p>\n",
      "type": "'vertical' | 'horizontal'",
      "required": false,
      "default": "'horizontal'"
    },
    {
      "name": "skipDelayDuration",
      "description": "<p>How much time a user has to enter another trigger without incurring a delay again.</p>\n",
      "type": "number",
      "required": false,
      "default": "300"
    }
  ] }, null, _parent));
  _push(ssrRenderComponent(_component_EmitsTable, { data: [
    {
      "name": "update:modelValue",
      "description": "<p>Event handler called when the value changes.</p>\n",
      "type": "[value: string]"
    }
  ] }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("meta/NavigationMenuRoot.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const NavigationMenuRoot = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  NavigationMenuRoot as default
};
