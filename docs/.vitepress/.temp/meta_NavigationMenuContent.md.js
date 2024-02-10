import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"sidebar":true},"headers":[],"relativePath":"meta/NavigationMenuContent.md","filePath":"meta/NavigationMenuContent.md","lastUpdated":1707194461000}');
const _sfc_main = { name: "meta/NavigationMenuContent.md" };
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
      "default": "'div'"
    },
    {
      "name": "asChild",
      "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\n<p>Read our <a href='https://www.radix-vue.com/guides/composition.html'>Composition</a> guide for more details.</p>\n",
      "type": "boolean",
      "required": false
    },
    {
      "name": "disableOutsidePointerEvents",
      "description": "<p>When <code>true</code>, hover/focus/click interactions will be disabled on elements outside\nthe <code>DismissableLayer</code>. Users will need to click twice on outside elements to\ninteract with them: once to close the <code>DismissableLayer</code>, and again to trigger the element.</p>\n",
      "type": "boolean",
      "required": false
    },
    {
      "name": "forceMount",
      "description": "<p>Used to force mounting when more control is needed. Useful when\ncontrolling animation with Vue animation libraries.</p>\n",
      "type": "boolean",
      "required": false
    }
  ] }, null, _parent));
  _push(ssrRenderComponent(_component_EmitsTable, { data: [
    {
      "name": "escapeKeyDown",
      "description": "<p>Event handler called when the escape key is down.\nCan be prevented.</p>\n",
      "type": "[event: KeyboardEvent]"
    },
    {
      "name": "focusOutside",
      "description": "<p>Event handler called when the focus moves outside of the <code>DismissableLayer</code>.\nCan be prevented.</p>\n",
      "type": "[event: FocusOutsideEvent]"
    },
    {
      "name": "interactOutside",
      "description": "<p>Event handler called when an interaction happens outside the <code>DismissableLayer</code>.\nSpecifically, when a <code>pointerdown</code> event happens outside or focus moves outside of it.\nCan be prevented.</p>\n",
      "type": "[event: PointerDownOutsideEvent | FocusOutsideEvent]"
    },
    {
      "name": "pointerDownOutside",
      "description": "<p>Event handler called when the a <code>pointerdown</code> event happens outside of the <code>DismissableLayer</code>.\nCan be prevented.</p>\n",
      "type": "[event: PointerDownOutsideEvent]"
    }
  ] }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("meta/NavigationMenuContent.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const NavigationMenuContent = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  NavigationMenuContent as default
};
