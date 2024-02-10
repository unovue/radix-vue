import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"sidebar":true},"headers":[],"relativePath":"meta/ToastRoot.md","filePath":"meta/ToastRoot.md","lastUpdated":1706592413000}');
const _sfc_main = { name: "meta/ToastRoot.md" };
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
      "default": "'li'"
    },
    {
      "name": "asChild",
      "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\n<p>Read our <a href='https://www.radix-vue.com/guides/composition.html'>Composition</a> guide for more details.</p>\n",
      "type": "boolean",
      "required": false
    },
    {
      "name": "defaultOpen",
      "description": "<p>The open state of the dialog when it is initially rendered. Use when you do not need to control its open state.</p>\n",
      "type": "boolean",
      "required": false,
      "default": "true"
    },
    {
      "name": "duration",
      "description": "<p>Time in milliseconds that toast should remain visible for. Overrides value\ngiven to <code>ToastProvider</code>.</p>\n",
      "type": "number",
      "required": false
    },
    {
      "name": "forceMount",
      "description": "<p>Used to force mounting when more control is needed. Useful when\ncontrolling animation with Vue animation libraries.</p>\n",
      "type": "boolean",
      "required": false
    },
    {
      "name": "open",
      "description": "<p>The controlled open state of the dialog. Can be bind as <code>v-model:open</code>.</p>\n",
      "type": "boolean",
      "required": false
    },
    {
      "name": "type",
      "description": "<p>Control the sensitivity of the toast for accessibility purposes.</p>\n<p>For toasts that are the result of a user action, choose <code>foreground</code>. Toasts generated from background tasks should use <code>background</code>.</p>\n",
      "type": "'foreground' | 'background'",
      "required": false,
      "default": "'foreground'"
    }
  ] }, null, _parent));
  _push(ssrRenderComponent(_component_EmitsTable, { data: [
    {
      "name": "escapeKeyDown",
      "description": "<p>Event handler called when the escape key is down. It can be prevented by calling <code>event.preventDefault</code>.</p>\n",
      "type": "[event: KeyboardEvent]"
    },
    {
      "name": "pause",
      "description": "<p>Event handler called when the dismiss timer is paused. This occurs when the pointer is moved over the viewport, the viewport is focused or when the window is blurred.</p>\n",
      "type": "[]"
    },
    {
      "name": "resume",
      "description": "<p>Event handler called when the dismiss timer is resumed. This occurs when the pointer is moved away from the viewport, the viewport is blurred or when the window is focused.</p>\n",
      "type": "[]"
    },
    {
      "name": "swipeCancel",
      "description": "",
      "type": "[event: SwipeEvent]"
    },
    {
      "name": "swipeEnd",
      "description": "<p>Event handler called at the end of a swipe interaction. It can be prevented by calling <code>event.preventDefault</code>.</p>\n",
      "type": "[event: SwipeEvent]"
    },
    {
      "name": "swipeMove",
      "description": "<p>Event handler called during a swipe interaction. It can be prevented by calling <code>event.preventDefault</code>.</p>\n",
      "type": "[event: SwipeEvent]"
    },
    {
      "name": "swipeStart",
      "description": "<p>Event handler called when starting a swipe interaction. It can be prevented by calling <code>event.preventDefault</code>.</p>\n",
      "type": "[event: SwipeEvent]"
    },
    {
      "name": "update:open",
      "description": "<p>Event handler called when the open state changes</p>\n",
      "type": "[value: boolean]"
    }
  ] }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("meta/ToastRoot.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ToastRoot = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ToastRoot as default
};
