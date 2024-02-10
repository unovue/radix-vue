import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"sidebar":true},"headers":[],"relativePath":"meta/ToastProvider.md","filePath":"meta/ToastProvider.md","lastUpdated":1706592413000}');
const _sfc_main = { name: "meta/ToastProvider.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_PropsTable = resolveComponent("PropsTable");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_PropsTable, { data: [
    {
      "name": "duration",
      "description": "<p>Time in milliseconds that each toast should remain visible for.</p>\n",
      "type": "number",
      "required": false,
      "default": "5000"
    },
    {
      "name": "label",
      "description": "<p>An author-localized label for each toast. Used to help screen reader users\nassociate the interruption with a toast.</p>\n",
      "type": "string",
      "required": false,
      "default": "'Notification'"
    },
    {
      "name": "swipeDirection",
      "description": "<p>Direction of pointer swipe that should close the toast.</p>\n",
      "type": "'right' | 'left' | 'up' | 'down'",
      "required": false,
      "default": "'right'"
    },
    {
      "name": "swipeThreshold",
      "description": "<p>Distance in pixels that the swipe must pass before a close is triggered.</p>\n",
      "type": "number",
      "required": false,
      "default": "50"
    }
  ] }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("meta/ToastProvider.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ToastProvider = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ToastProvider as default
};
