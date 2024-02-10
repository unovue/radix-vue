import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"sidebar":true},"headers":[],"relativePath":"meta/ContextMenuContent.md","filePath":"meta/ContextMenuContent.md","lastUpdated":1707212589000}');
const _sfc_main = { name: "meta/ContextMenuContent.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_PropsTable = resolveComponent("PropsTable");
  const _component_EmitsTable = resolveComponent("EmitsTable");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_PropsTable, { data: [
    {
      "name": "alignOffset",
      "description": "<p>An offset in pixels from the <code>start</code> or <code>end</code> alignment options.</p>\n",
      "type": "number",
      "required": false,
      "default": "0"
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
      "name": "avoidCollisions",
      "description": "<p>When <code>true</code>, overrides the side andalign preferences\nto prevent collisions with boundary edges.</p>\n",
      "type": "boolean",
      "required": false,
      "default": "true"
    },
    {
      "name": "collisionBoundary",
      "description": "<p>The element used as the collision boundary. By default\nthis is the viewport, though you can provide additional\nelement(s) to be included in this check.</p>\n",
      "type": "Element | (Element | null)[] | null",
      "required": false,
      "default": "[]"
    },
    {
      "name": "collisionPadding",
      "description": "<p>The distance in pixels from the boundary edges where collision\ndetection should occur. Accepts a number (same for all sides),\nor a partial padding object, for example: { top: 20, left: 20 }.</p>\n",
      "type": "number | Partial<Record<'top' | 'right' | 'bottom' | 'left', number>>",
      "required": false,
      "default": "0"
    },
    {
      "name": "forceMount",
      "description": "<p>Used to force mounting when more control is needed. Useful when\ncontrolling animation with Vue animation libraries.</p>\n",
      "type": "boolean",
      "required": false
    },
    {
      "name": "hideWhenDetached",
      "description": "<p>Whether to hide the content when the trigger becomes fully occluded.</p>\n",
      "type": "boolean",
      "required": false,
      "default": "false"
    },
    {
      "name": "loop",
      "description": "<p>When <code>true</code>, keyboard navigation will loop from last item to first, and vice versa.</p>\n",
      "type": "boolean",
      "required": false
    },
    {
      "name": "prioritizePosition",
      "description": "<p>Force content to be position within the viewport.</p>\n<p>Might overlap the reference element, which may not be desired.</p>\n",
      "type": "boolean",
      "required": false
    },
    {
      "name": "sticky",
      "description": '<p>The sticky behavior on the align axis. <code>partial</code> will keep the\ncontent in the boundary as long as the trigger is at least partially\nin the boundary whilst "always" will keep the content in the boundary\nregardless.</p>\n',
      "type": "'partial' | 'always'",
      "required": false,
      "default": "'partial'"
    }
  ] }, null, _parent));
  _push(ssrRenderComponent(_component_EmitsTable, { data: [
    {
      "name": "closeAutoFocus",
      "description": "<p>Event handler called when auto-focusing on close.\nCan be prevented.</p>\n",
      "type": "[event: Event]"
    },
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("meta/ContextMenuContent.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ContextMenuContent = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ContextMenuContent as default
};
