import { resolveComponent, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
const __pageData = JSON.parse(`{"title":"Primitive","description":"Compose Radix's functionality onto alternative element types or your own Vue components.","frontmatter":{"title":"Primitive","description":"Compose Radix's functionality onto alternative element types or your own Vue components.","sidebar":true},"headers":[],"relativePath":"utilities/primitive.md","filePath":"utilities/primitive.md","lastUpdated":1696070965000}`);
const _sfc_main = { name: "utilities/primitive.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Description = resolveComponent("Description");
  const _component_PropsTable = resolveComponent("PropsTable");
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="primitive" tabindex="-1">Primitive <a class="header-anchor" href="#primitive" aria-label="Permalink to &quot;Primitive&quot;">​</a></h1>`);
  _push(ssrRenderComponent(_component_Description, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Compose Radix&#39;s functionality onto alternative element types or your own Vue components. `);
      } else {
        return [
          createTextVNode(" Compose Radix's functionality onto alternative element types or your own Vue components. ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<p>When you are building a component, in some cases you might want to allow user to compose some functionalities onto the underlying element, or alternative element. This is where <code>Primitive</code> comes in handy as it expose this capability to the user.</p><h2 id="api-reference" tabindex="-1">API Reference <a class="header-anchor" href="#api-reference" aria-label="Permalink to &quot;API Reference&quot;">​</a></h2>`);
  _push(ssrRenderComponent(_component_PropsTable, { data: [
    {
      name: "as",
      required: false,
      type: "string | Component",
      default: "div",
      description: "The element or component the current element should render as."
    },
    {
      name: "asChild",
      required: false,
      type: "boolean",
      default: "false",
      description: 'Change the default rendered element for the one passed as a child, merging their props and behavior.<br><br>Read our <a href="/guides/composition">Composition</a> guide for more details.'
    }
  ] }, null, _parent));
  _push(`<h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><h3 id="changing-as-value" tabindex="-1">Changing <code>as</code> value <a class="header-anchor" href="#changing-as-value" aria-label="Permalink to &quot;Changing \`as\` value&quot;">​</a></h3><p>If you want to change the default element or component being render, you can set the default <code>as</code> when defining the props.</p><div title="vue" class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">script</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"> setup</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"> lang</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">ts</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}">import</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> {</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"> Primitive</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">,</span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"> type</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"> PrimitiveProps</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> }</span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"> from</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> &#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">radix-vue</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#C792EA" })}">const</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"> props </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">=</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"> withDefaults</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}">(</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}">defineProps</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&lt;</span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}">PrimitiveProps</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}">()</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">,</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#F07178" })}">  as</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> &#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">span</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">}</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}">)</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">script</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#676E95", "font-style": "italic" })}">  &lt;!-- Now this element will be rendered as \`span\` by default --&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">  &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">Primitive</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"> v-bind</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}">props</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#BABED8" })}">    ...</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">  &lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">Primitive</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span></code></pre></div><h3 id="render-aschild" tabindex="-1">Render <code>asChild</code> <a class="header-anchor" href="#render-aschild" aria-label="Permalink to &quot;Render \`asChild\`&quot;">​</a></h3><p>Change the default rendered element for the one passed as a child, merging their props and behavior.<br><br>Read our <a href="/guides/composition">Composition</a> guide for more details.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("utilities/primitive.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const primitive = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  primitive as default
};
