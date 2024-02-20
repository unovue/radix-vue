import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"sidebar":true},"headers":[],"relativePath":"meta/TooltipContent.md","filePath":"meta/TooltipContent.md","lastUpdated":1706592413000}');
const _sfc_main = { name: "meta/TooltipContent.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_PropsTable = resolveComponent("PropsTable");
  const _component_EmitsTable = resolveComponent("EmitsTable");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_PropsTable, { data: [
    {
      "name": "align",
      "description": "<p>The preferred alignment against the trigger.\nMay change when collisions occur.</p>\n",
      "type": "'start' | 'center' | 'end'",
      "required": false
    },
    {
      "name": "alignOffset",
      "description": "<p>An offset in pixels from the <code>start</code> or <code>end</code> alignment options.</p>\n",
      "type": "number",
      "required": false
    },
    {
      "name": "ariaLabel",
      "description": "<p>By default, screenreaders will announce the content inside\nthe component. If this is not descriptive enough, or you have\ncontent that cannot be announced, use aria-label as a more\ndescriptive label.</p>\n",
      "type": "string",
      "required": false
    },
    {
      "name": "arrowPadding",
      "description": "<p>The padding between the arrow and the edges of the content.\nIf your content has border-radius, this will prevent it from\noverflowing the corners.</p>\n",
      "type": "number",
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
      "name": "avoidCollisions",
      "description": "<p>When <code>true</code>, overrides the side andalign preferences\nto prevent collisions with boundary edges.</p>\n",
      "type": "boolean",
      "required": false
    },
    {
      "name": "collisionBoundary",
      "description": "<p>The element used as the collision boundary. By default\nthis is the viewport, though you can provide additional\nelement(s) to be included in this check.</p>\n",
      "type": "Element | (Element | null)[] | null",
      "required": false
    },
    {
      "name": "collisionPadding",
      "description": "<p>The distance in pixels from the boundary edges where collision\ndetection should occur. Accepts a number (same for all sides),\nor a partial padding object, for example: { top: 20, left: 20 }.</p>\n",
      "type": "number | Partial<Record<'top' | 'right' | 'bottom' | 'left', number>>",
      "required": false
    },
    {
      "name": "hideWhenDetached",
      "description": "<p>Whether to hide the content when the trigger becomes fully occluded.</p>\n",
      "type": "boolean",
      "required": false
    },
    {
      "name": "side",
      "description": "<p>The preferred side of the trigger to render against when open.\nWill be reversed when collisions occur and avoidCollisions\nis enabled.</p>\n",
      "type": "'top' | 'right' | 'bottom' | 'left'",
      "required": false,
      "default": "'top'"
    },
    {
      "name": "sideOffset",
      "description": "<p>The distance in pixels from the trigger.</p>\n",
      "type": "number",
      "required": false
    },
    {
      "name": "sticky",
      "description": '<p>The sticky behavior on the align axis. <code>partial</code> will keep the\ncontent in the boundary as long as the trigger is at least partially\nin the boundary whilst "always" will keep the content in the boundary\nregardless.</p>\n',
      "type": "'partial' | 'always'",
      "required": false
    }
  ] }, null, _parent));
  _push(ssrRenderComponent(_component_EmitsTable, { data: [
    {
      "name": "escapeKeyDown",
      "description": "<p>Event handler called when focus moves to the destructive action after opening. It can be prevented by calling <code>event.preventDefault</code></p>\n",
      "type": "[event: KeyboardEvent]"
    },
    {
      "name": "pointerDownOutside",
      "description": "<p>Event handler called when a pointer event occurs outside the bounds of the component. It can be prevented by calling <code>event.preventDefault</code>.</p>\n",
      "type": "[event: Event]"
    }
  ] }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("meta/TooltipContent.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TooltipContent = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  TooltipContent as default
};
