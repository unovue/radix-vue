import { resolveComponent, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
const __pageData = JSON.parse(`{"title":"useForwardExpose","description":"Forward component's exposed value, props and $el.","frontmatter":{"title":"useForwardExpose","description":"Forward component's exposed value, props and $el.","sidebar":true},"headers":[],"relativePath":"utilities/use-forward-expose.md","filePath":"utilities/use-forward-expose.md","lastUpdated":1705845689000}`);
const _sfc_main = { name: "utilities/use-forward-expose.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Description = resolveComponent("Description");
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="useforwardexpose" tabindex="-1">useForwardExpose <a class="header-anchor" href="#useforwardexpose" aria-label="Permalink to &quot;useForwardExpose&quot;">​</a></h1>`);
  _push(ssrRenderComponent(_component_Description, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Forward component&#39;s exposed value, props and $el. `);
      } else {
        return [
          createTextVNode(" Forward component's exposed value, props and $el. ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<p>When building a component, if we have a non-single root node component, the template refs will not return the DOM element via <code>$el</code> (<a href="https://vuejs.org/api/component-instance.html#el" target="_blank" rel="noreferrer">read more</a>) , thus, we need to forward the <code>$el</code> in template ref for this component manually. Or in some case you want to target certain element as the expose element..</p><p>Futhermore, this composable extend the missing exposed <code>props</code> from the template refs.</p><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><div title="vue" class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">script</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"> setup</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"> lang</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">ts</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}">import</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> {</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"> useForwardExpose</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> }</span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"> from</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> &#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">radix-vue</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#C792EA" })}">const</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"> selectedElementId </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">=</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"> ref</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}">(</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}">1</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}">)</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#C792EA" })}">const</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> {</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"> forwardRef </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">}</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> =</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"> useForwardExpose</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}">()</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">script</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">  &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">span</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#676E95", "font-style": "italic" })}">    &lt;!-- We want to expose div as the template ref&#39;s element --&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">    &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">div</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> :</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}">ref</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}">forwardRef</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#BABED8" })}">      ...</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">    &lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">div</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">  &lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">span</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span></code></pre></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("utilities/use-forward-expose.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const useForwardExpose = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  useForwardExpose as default
};
