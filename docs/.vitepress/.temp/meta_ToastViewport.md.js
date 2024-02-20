import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"sidebar":true},"headers":[],"relativePath":"meta/ToastViewport.md","filePath":"meta/ToastViewport.md","lastUpdated":1706592413000}');
const _sfc_main = { name: "meta/ToastViewport.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_PropsTable = resolveComponent("PropsTable");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_PropsTable, { data: [
    {
      "name": "as",
      "description": "<p>The element or component this component should render as. Can be overwrite by <code>asChild</code></p>\n",
      "type": "AsTag | Component",
      "required": false,
      "default": "'ol'"
    },
    {
      "name": "asChild",
      "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\n<p>Read our <a href='https://www.radix-vue.com/guides/composition.html'>Composition</a> guide for more details.</p>\n",
      "type": "boolean",
      "required": false
    },
    {
      "name": "hotkey",
      "description": "<p>The keys to use as the keyboard shortcut that will move focus to the toast viewport.</p>\n",
      "type": "string[]",
      "required": false,
      "default": "['F8']"
    },
    {
      "name": "label",
      "description": "<p>An author-localized label for the toast viewport to provide context for screen reader users\nwhen navigating page landmarks. The available <code>{hotkey}</code> placeholder will be replaced for you.</p>\n",
      "type": "string",
      "required": false,
      "default": "'Notifications ({hotkey})'"
    }
  ] }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("meta/ToastViewport.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ToastViewport = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ToastViewport as default
};
