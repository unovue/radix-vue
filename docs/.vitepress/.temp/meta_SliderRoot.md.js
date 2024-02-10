import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"sidebar":true},"headers":[],"relativePath":"meta/SliderRoot.md","filePath":"meta/SliderRoot.md","lastUpdated":1706867366000}');
const _sfc_main = { name: "meta/SliderRoot.md" };
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
      "description": "<p>The value of the slider when initially rendered. Use when you do not need to control the state of the slider.</p>\n",
      "type": "number[]",
      "required": false,
      "default": "[0]"
    },
    {
      "name": "dir",
      "description": "<p>The reading direction of the combobox when applicable. <br> If omitted, inherits globally from <code>DirectionProvider</code> or assumes LTR (left-to-right) reading mode.</p>\n",
      "type": "'ltr' | 'rtl'",
      "required": false
    },
    {
      "name": "disabled",
      "description": "<p>When <code>true</code>, prevents the user from interacting with the slider.</p>\n",
      "type": "boolean",
      "required": false,
      "default": "false"
    },
    {
      "name": "inverted",
      "description": "<p>Whether the slider is visually inverted.</p>\n",
      "type": "boolean",
      "required": false,
      "default": "false"
    },
    {
      "name": "max",
      "description": "<p>The maximum value for the range.</p>\n",
      "type": "number",
      "required": false,
      "default": "100"
    },
    {
      "name": "min",
      "description": "<p>The minimum value for the range.</p>\n",
      "type": "number",
      "required": false,
      "default": "0"
    },
    {
      "name": "minStepsBetweenThumbs",
      "description": "<p>The minimum permitted steps between multiple thumbs.</p>\n",
      "type": "number",
      "required": false,
      "default": "0"
    },
    {
      "name": "modelValue",
      "description": "<p>The controlled value of the slider. Can be bind as <code>v-model</code>.</p>\n",
      "type": "number[]",
      "required": false
    },
    {
      "name": "name",
      "description": "",
      "type": "string",
      "required": false
    },
    {
      "name": "orientation",
      "description": "<p>The orientation of the slider.</p>\n",
      "type": "'vertical' | 'horizontal'",
      "required": false,
      "default": "'horizontal'"
    },
    {
      "name": "step",
      "description": "<p>The stepping interval.</p>\n",
      "type": "number",
      "required": false,
      "default": "1"
    }
  ] }, null, _parent));
  _push(ssrRenderComponent(_component_EmitsTable, { data: [
    {
      "name": "update:modelValue",
      "description": "<p>Event handler called when the slider value changes</p>\n",
      "type": "[payload: number[]]"
    },
    {
      "name": "valueCommit",
      "description": "<p>Event handler called when the value changes at the end of an interaction.</p>\n<p>Useful when you only need to capture a final value e.g. to update a backend service.</p>\n",
      "type": "[payload: number[]]"
    }
  ] }, null, _parent));
  _push(ssrRenderComponent(_component_SlotsTable, { data: [
    {
      "name": "modelValue",
      "description": "Current slider values",
      "type": "number[]"
    }
  ] }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("meta/SliderRoot.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const SliderRoot = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  SliderRoot as default
};
