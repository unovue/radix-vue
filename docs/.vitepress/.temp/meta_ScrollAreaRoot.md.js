import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"sidebar":true},"headers":[],"relativePath":"meta/ScrollAreaRoot.md","filePath":"meta/ScrollAreaRoot.md","lastUpdated":1706867366000}');
const _sfc_main = { name: "meta/ScrollAreaRoot.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_PropsTable = resolveComponent("PropsTable");
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
      "name": "dir",
      "description": "<p>The reading direction of the combobox when applicable. <br> If omitted, inherits globally from <code>DirectionProvider</code> or assumes LTR (left-to-right) reading mode.</p>\n",
      "type": "'ltr' | 'rtl'",
      "required": false
    },
    {
      "name": "scrollHideDelay",
      "description": "<p>If type is set to either <code>scroll</code> or <code>hover</code>, this prop determines the length of time, in milliseconds, <br> before the scrollbars are hidden after the user stops interacting with scrollbars.</p>\n",
      "type": "number",
      "required": false,
      "default": "600"
    },
    {
      "name": "type",
      "description": "<p>Describes the nature of scrollbar visibility, similar to how the scrollbar preferences in MacOS control visibility of native scrollbars.</p>\n<p><code>auto</code> - means that scrollbars are visible when content is overflowing on the corresponding orientation. <br>\n<code>always</code> - means that scrollbars are always visible regardless of whether the content is overflowing.<br>\n<code>scroll</code> - means that scrollbars are visible when the user is scrolling along its corresponding orientation.<br>\n<code>hover</code> - when the user is scrolling along its corresponding orientation and when the user is hovering over the scroll area.</p>\n",
      "type": "'always' | 'hover' | 'auto' | 'scroll'",
      "required": false,
      "default": "'hover'"
    }
  ] }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("meta/ScrollAreaRoot.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ScrollAreaRoot = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ScrollAreaRoot as default
};
