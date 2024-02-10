import { useSSRContext, resolveComponent, withCtx, createTextVNode, createVNode } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./index.QSnAocj3.js";
import "./index.faJ9MUPN.js";
const __pageData = JSON.parse('{"title":"Pin Input","description":"A sequence of one-character alphanumeric inputs.","frontmatter":{"title":"Pin Input","description":"A sequence of one-character alphanumeric inputs.","name":"pin-input","sidebar":true},"headers":[],"relativePath":"components/pin-input.md","filePath":"components/pin-input.md","lastUpdated":1706592413000}');
const __default__ = { name: "components/pin-input.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Badge = resolveComponent("Badge");
      const _component_Description = resolveComponent("Description");
      const _component_ComponentPreview = resolveComponent("ComponentPreview");
      const _component_Highlights = resolveComponent("Highlights");
      const _component_PropsTable = resolveComponent("PropsTable");
      const _component_EmitsTable = resolveComponent("EmitsTable");
      const _component_SlotsTable = resolveComponent("SlotsTable");
      const _component_DataAttributesTable = resolveComponent("DataAttributesTable");
      const _component_KeyboardTable = resolveComponent("KeyboardTable");
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="pin-input" tabindex="-1">Pin Input <a class="header-anchor" href="#pin-input" aria-label="Permalink to &quot;Pin Input&quot;">​</a></h1>`);
      _push(ssrRenderComponent(_component_Badge, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Alpha`);
          } else {
            return [
              createTextVNode("Alpha")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Description, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` A sequence of one-character alphanumeric inputs. `);
          } else {
            return [
              createTextVNode(" A sequence of one-character alphanumeric inputs. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_ComponentPreview, {
        name: "PinInput",
        files: "%7B%22css%22%3A%5B%22css%2Findex.vue%22%2C%22css%2Fstyles.css%22%5D%2C%22tailwind%22%3A%5B%22tailwind%2Findex.vue%22%2C%22tailwind%2Ftailwind.config.js%22%5D%7D"
      }, {
        css: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div title="index.vue" class="language-vue"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>vue</span><pre class="shiki material-theme-palenight vp-code"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>script</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}> setup</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}> lang</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>ts</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId}>import</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> {</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}> ref</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> }</span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId}> from</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> &#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>vue</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId}>import</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> {</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}> Label</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>,</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}> PinInputInput</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>,</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}> PinInputRoot</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> }</span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId}> from</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> &#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>radix-vue</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId}>import</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> &#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>./styles.css</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>const</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}> value </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}> ref</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&lt;</span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}"${_scopeId}>string</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}>[]</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}>([])</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>const</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}> handleComplete </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> (</span><span style="${ssrRenderStyle({ "color": "#BABED8", "font-style": "italic" })}"${_scopeId}>e</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}"${_scopeId}> string</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}>[]</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>)</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}> =&gt;</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}> alert</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}>(e</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}>join</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;&#39;</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}>))</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>script</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>  &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>div</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>    &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>Label</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}> for</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>pin-input</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}> class</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>Text</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}>Pin Input</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>Label</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>    &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>PinInputRoot</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>      id</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>pin-input</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>      v-model</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}>value</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>      class</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>PinInputRoot</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>      @</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>complete</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}>handleComplete</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>    &gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>      &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>PinInputInput</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId}>        v-for</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}>id</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}>index</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>) in </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>5</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>        :</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>key</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}>id</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>        :</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>index</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}>index</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>        placeholder</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>○</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>        class</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>PinInputInput</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>      /&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>    &lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>PinInputRoot</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>  &lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>div</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span></span></code></pre></div><div title="styles.css" class="language-css"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>css</span><pre class="shiki material-theme-palenight vp-code"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId}>@import</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> &#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>@radix-ui/colors/black-alpha.css</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId}>@import</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> &#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>@radix-ui/colors/mauve.css</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId}>@import</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> &#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>@radix-ui/colors/grass.css</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#676E95", "font-style": "italic" })}"${_scopeId}>/* reset */</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}"${_scopeId}>input</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId}>  all</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}> unset</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>}</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}"${_scopeId}>Text</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId}>  color</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}> white</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>}</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}"${_scopeId}>PinInputInput</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>{</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId}>  text-align</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}> center</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId}>  font-size</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}> 15px</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId}>  line-height</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}> 1</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId}>  align-items</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}> center</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId}>  justify-content</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}> center</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId}>  height</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}> 2.25rem</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId}>  width</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}> 2.25rem</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId}>  border-radius</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}> 0.25rem</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>;</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}> </span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId}>  transition</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}> all </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>150ms</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}> cubic-bezier</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>0.4</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>,</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}> 0</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>,</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}> 0.2</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>,</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}> 1</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>);</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId}>  cursor</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}> pointer</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>}</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}"${_scopeId}>PinInputInput</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>disabled</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId}>  opacity</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}> .5</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>}</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}"${_scopeId}>PinInputRoot</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>{</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId}>  display</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}> flex</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId}>  align-items</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}> center</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId}>  gap</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}> 0.25rem</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>;</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}> </span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId}>  margin-top</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}> 0.25rem</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId}>  color</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}> rgb</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>255</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}> 255</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}> 255</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>}</span></span></code></pre></div>`);
          } else {
            return [
              createVNode("div", {
                title: "index.vue",
                class: "language-vue"
              }, [
                createVNode("button", {
                  title: "Copy Code",
                  class: "copy"
                }),
                createVNode("span", { class: "lang" }, "vue"),
                createVNode("pre", { class: "shiki material-theme-palenight vp-code" }, [
                  createVNode("code", null, [
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "script"),
                      createVNode("span", { style: { "color": "#C792EA" } }, " setup"),
                      createVNode("span", { style: { "color": "#C792EA" } }, " lang"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "ts"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, "import"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " {"),
                      createVNode("span", { style: { "color": "#BABED8" } }, " ref"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " }"),
                      createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, " from"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " '"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "vue"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, "import"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " {"),
                      createVNode("span", { style: { "color": "#BABED8" } }, " Label"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                      createVNode("span", { style: { "color": "#BABED8" } }, " PinInputInput"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                      createVNode("span", { style: { "color": "#BABED8" } }, " PinInputRoot"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " }"),
                      createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, " from"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " '"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "radix-vue"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, "import"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " '"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "./styles.css"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                      createVNode("span", { style: { "color": "#BABED8" } }, " value "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#82AAFF" } }, " ref"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#FFCB6B" } }, "string"),
                      createVNode("span", { style: { "color": "#BABED8" } }, "[]"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                      createVNode("span", { style: { "color": "#BABED8" } }, "([])")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                      createVNode("span", { style: { "color": "#BABED8" } }, " handleComplete "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " ("),
                      createVNode("span", { style: { "color": "#BABED8", "font-style": "italic" } }, "e"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#FFCB6B" } }, " string"),
                      createVNode("span", { style: { "color": "#BABED8" } }, "[]"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ")"),
                      createVNode("span", { style: { "color": "#C792EA" } }, " =>"),
                      createVNode("span", { style: { "color": "#82AAFF" } }, " alert"),
                      createVNode("span", { style: { "color": "#BABED8" } }, "(e"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                      createVNode("span", { style: { "color": "#82AAFF" } }, "join"),
                      createVNode("span", { style: { "color": "#BABED8" } }, "("),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "''"),
                      createVNode("span", { style: { "color": "#BABED8" } }, "))")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "script"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "template"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "  <"),
                      createVNode("span", { style: { "color": "#F07178" } }, "div"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "    <"),
                      createVNode("span", { style: { "color": "#F07178" } }, "Label"),
                      createVNode("span", { style: { "color": "#C792EA" } }, " for"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "pin-input"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C792EA" } }, " class"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "Text"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                      createVNode("span", { style: { "color": "#BABED8" } }, "Pin Input"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "Label"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "    <"),
                      createVNode("span", { style: { "color": "#F07178" } }, "PinInputRoot")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#C792EA" } }, "      id"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "pin-input"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#C792EA" } }, "      v-model"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#BABED8" } }, "value"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#C792EA" } }, "      class"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "PinInputRoot"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "      @"),
                      createVNode("span", { style: { "color": "#C792EA" } }, "complete"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#BABED8" } }, "handleComplete"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "    >")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "      <"),
                      createVNode("span", { style: { "color": "#F07178" } }, "PinInputInput")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, "        v-for"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "("),
                      createVNode("span", { style: { "color": "#BABED8" } }, "id"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ", "),
                      createVNode("span", { style: { "color": "#BABED8" } }, "index"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ") in "),
                      createVNode("span", { style: { "color": "#F78C6C" } }, "5"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "        :"),
                      createVNode("span", { style: { "color": "#C792EA" } }, "key"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#BABED8" } }, "id"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "        :"),
                      createVNode("span", { style: { "color": "#C792EA" } }, "index"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#BABED8" } }, "index"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#C792EA" } }, "        placeholder"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "○"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#C792EA" } }, "        class"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "PinInputInput"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "      />")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "    </"),
                      createVNode("span", { style: { "color": "#F07178" } }, "PinInputRoot"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "  </"),
                      createVNode("span", { style: { "color": "#F07178" } }, "div"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "template"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ])
                  ])
                ])
              ]),
              createVNode("div", {
                title: "styles.css",
                class: "language-css"
              }, [
                createVNode("button", {
                  title: "Copy Code",
                  class: "copy"
                }),
                createVNode("span", { class: "lang" }, "css"),
                createVNode("pre", { class: "shiki material-theme-palenight vp-code" }, [
                  createVNode("code", null, [
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, "@import"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " '"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "@radix-ui/colors/black-alpha.css"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, "@import"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " '"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "@radix-ui/colors/mauve.css"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, "@import"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " '"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "@radix-ui/colors/grass.css"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#676E95", "font-style": "italic" } }, "/* reset */")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#FFCB6B" } }, "input"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " {")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#B2CCD6" } }, "  all"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#BABED8" } }, " unset"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                      createVNode("span", { style: { "color": "#FFCB6B" } }, "Text"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " {")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#B2CCD6" } }, "  color"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#BABED8" } }, " white")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                      createVNode("span", { style: { "color": "#FFCB6B" } }, "PinInputInput"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#B2CCD6" } }, "  text-align"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#BABED8" } }, " center"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#B2CCD6" } }, "  font-size"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#F78C6C" } }, " 15px"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#B2CCD6" } }, "  line-height"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#F78C6C" } }, " 1"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#B2CCD6" } }, "  align-items"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#BABED8" } }, " center"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#B2CCD6" } }, "  justify-content"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#BABED8" } }, " center"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#B2CCD6" } }, "  height"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#F78C6C" } }, " 2.25rem"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#B2CCD6" } }, "  width"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#F78C6C" } }, " 2.25rem"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#B2CCD6" } }, "  border-radius"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#F78C6C" } }, " 0.25rem"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ";"),
                      createVNode("span", { style: { "color": "#BABED8" } }, " ")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#B2CCD6" } }, "  transition"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#BABED8" } }, " all "),
                      createVNode("span", { style: { "color": "#F78C6C" } }, "150ms"),
                      createVNode("span", { style: { "color": "#82AAFF" } }, " cubic-bezier"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "("),
                      createVNode("span", { style: { "color": "#F78C6C" } }, "0.4"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                      createVNode("span", { style: { "color": "#F78C6C" } }, " 0"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                      createVNode("span", { style: { "color": "#F78C6C" } }, " 0.2"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                      createVNode("span", { style: { "color": "#F78C6C" } }, " 1"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ");")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#B2CCD6" } }, "  cursor"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#BABED8" } }, " pointer"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                      createVNode("span", { style: { "color": "#FFCB6B" } }, "PinInputInput"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#C792EA" } }, "disabled"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " {")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#B2CCD6" } }, "  opacity"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#F78C6C" } }, " .5")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                      createVNode("span", { style: { "color": "#FFCB6B" } }, "PinInputRoot"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#B2CCD6" } }, "  display"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#BABED8" } }, " flex"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#B2CCD6" } }, "  align-items"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#BABED8" } }, " center"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#B2CCD6" } }, "  gap"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#F78C6C" } }, " 0.25rem"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ";"),
                      createVNode("span", { style: { "color": "#BABED8" } }, " ")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#B2CCD6" } }, "  margin-top"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#F78C6C" } }, " 0.25rem"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#B2CCD6" } }, "  color"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#82AAFF" } }, " rgb"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "("),
                      createVNode("span", { style: { "color": "#F78C6C" } }, "255"),
                      createVNode("span", { style: { "color": "#F78C6C" } }, " 255"),
                      createVNode("span", { style: { "color": "#F78C6C" } }, " 255"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ")")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        tailwind: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div title="index.vue" class="language-vue"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>vue</span><pre class="shiki material-theme-palenight vp-code"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>script</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}> setup</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}> lang</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>ts</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId}>import</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> {</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}> ref</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> }</span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId}> from</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> &#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>vue</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId}>import</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> {</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}> Label</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>,</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}> PinInputInput</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>,</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}> PinInputRoot</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> }</span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId}> from</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> &#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>radix-vue</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>const</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}> value </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}> ref</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&lt;</span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}"${_scopeId}>string</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}>[]</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}>([])</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>const</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}> handleComplete </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> (</span><span style="${ssrRenderStyle({ "color": "#BABED8", "font-style": "italic" })}"${_scopeId}>e</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}"${_scopeId}> string</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}>[]</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>)</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}> =&gt;</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}> alert</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}>(e</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}>join</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;&#39;</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}>))</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>script</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>  &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>div</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>    &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>Label</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}> for</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>pin-input</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}> class</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>text-white</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}>Pin Input</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>Label</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>    &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>PinInputRoot</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>      id</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>pin-input</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>      v-model</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}>value</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>      placeholder</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>○</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>      class</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>flex gap-2 items-center mt-1</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>      @</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>complete</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}>handleComplete</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>    &gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>      &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>PinInputInput</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId}>        v-for</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}>id</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>, </span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}>index</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>) in </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>5</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>        :</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>key</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}>id</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>        :</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>index</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}>index</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>        class</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>w-10 h-10 bg-white rounded text-center shadow-lg text-green10 placeholder:text-mauve8 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-white</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>      /&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>    &lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>PinInputRoot</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>  &lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>div</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span></span></code></pre></div><div title="tailwind.config.js" class="language-js"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>js</span><pre class="shiki material-theme-palenight vp-code"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>const</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> {</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}> mauve</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>,</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}> grass </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>}</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> =</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}> require</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>@radix-ui/colors</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}>)</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#676E95", "font-style": "italic" })}"${_scopeId}>/** </span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId}>@</span><span style="${ssrRenderStyle({ "color": "#C792EA", "font-style": "italic" })}"${_scopeId}>type</span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId}> {</span><span style="${ssrRenderStyle({ "color": "#FFCB6B", "font-style": "italic" })}"${_scopeId}>import(&#39;tailwindcss&#39;).Config</span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId}>}</span><span style="${ssrRenderStyle({ "color": "#676E95", "font-style": "italic" })}"${_scopeId}> */</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>module.exports</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> =</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>  content</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}> [</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>./**/*.vue</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}>]</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>  theme</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>    extend</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>      colors</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>        ...</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}>mauve</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>        ...</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}>grass</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>      },</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>    },</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>  },</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>  plugins</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}> []</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>}</span></span></code></pre></div>`);
          } else {
            return [
              createVNode("div", {
                title: "index.vue",
                class: "language-vue"
              }, [
                createVNode("button", {
                  title: "Copy Code",
                  class: "copy"
                }),
                createVNode("span", { class: "lang" }, "vue"),
                createVNode("pre", { class: "shiki material-theme-palenight vp-code" }, [
                  createVNode("code", null, [
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "script"),
                      createVNode("span", { style: { "color": "#C792EA" } }, " setup"),
                      createVNode("span", { style: { "color": "#C792EA" } }, " lang"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "ts"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, "import"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " {"),
                      createVNode("span", { style: { "color": "#BABED8" } }, " ref"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " }"),
                      createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, " from"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " '"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "vue"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, "import"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " {"),
                      createVNode("span", { style: { "color": "#BABED8" } }, " Label"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                      createVNode("span", { style: { "color": "#BABED8" } }, " PinInputInput"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                      createVNode("span", { style: { "color": "#BABED8" } }, " PinInputRoot"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " }"),
                      createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, " from"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " '"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "radix-vue"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                      createVNode("span", { style: { "color": "#BABED8" } }, " value "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#82AAFF" } }, " ref"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#FFCB6B" } }, "string"),
                      createVNode("span", { style: { "color": "#BABED8" } }, "[]"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                      createVNode("span", { style: { "color": "#BABED8" } }, "([])")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                      createVNode("span", { style: { "color": "#BABED8" } }, " handleComplete "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " ("),
                      createVNode("span", { style: { "color": "#BABED8", "font-style": "italic" } }, "e"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#FFCB6B" } }, " string"),
                      createVNode("span", { style: { "color": "#BABED8" } }, "[]"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ")"),
                      createVNode("span", { style: { "color": "#C792EA" } }, " =>"),
                      createVNode("span", { style: { "color": "#82AAFF" } }, " alert"),
                      createVNode("span", { style: { "color": "#BABED8" } }, "(e"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                      createVNode("span", { style: { "color": "#82AAFF" } }, "join"),
                      createVNode("span", { style: { "color": "#BABED8" } }, "("),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "''"),
                      createVNode("span", { style: { "color": "#BABED8" } }, "))")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "script"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                      createVNode("span", { style: { "color": "#F07178" } }, "template"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "  <"),
                      createVNode("span", { style: { "color": "#F07178" } }, "div"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "    <"),
                      createVNode("span", { style: { "color": "#F07178" } }, "Label"),
                      createVNode("span", { style: { "color": "#C792EA" } }, " for"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "pin-input"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C792EA" } }, " class"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "text-white"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                      createVNode("span", { style: { "color": "#BABED8" } }, "Pin Input"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "Label"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "    <"),
                      createVNode("span", { style: { "color": "#F07178" } }, "PinInputRoot")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#C792EA" } }, "      id"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "pin-input"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#C792EA" } }, "      v-model"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#BABED8" } }, "value"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#C792EA" } }, "      placeholder"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "○"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#C792EA" } }, "      class"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "flex gap-2 items-center mt-1"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "      @"),
                      createVNode("span", { style: { "color": "#C792EA" } }, "complete"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#BABED8" } }, "handleComplete"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "    >")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "      <"),
                      createVNode("span", { style: { "color": "#F07178" } }, "PinInputInput")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, "        v-for"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "("),
                      createVNode("span", { style: { "color": "#BABED8" } }, "id"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ", "),
                      createVNode("span", { style: { "color": "#BABED8" } }, "index"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ") in "),
                      createVNode("span", { style: { "color": "#F78C6C" } }, "5"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "        :"),
                      createVNode("span", { style: { "color": "#C792EA" } }, "key"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#BABED8" } }, "id"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "        :"),
                      createVNode("span", { style: { "color": "#C792EA" } }, "index"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#BABED8" } }, "index"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#C792EA" } }, "        class"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "w-10 h-10 bg-white rounded text-center shadow-lg text-green10 placeholder:text-mauve8 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-white"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "      />")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "    </"),
                      createVNode("span", { style: { "color": "#F07178" } }, "PinInputRoot"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "  </"),
                      createVNode("span", { style: { "color": "#F07178" } }, "div"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                      createVNode("span", { style: { "color": "#F07178" } }, "template"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ])
                  ])
                ])
              ]),
              createVNode("div", {
                title: "tailwind.config.js",
                class: "language-js"
              }, [
                createVNode("button", {
                  title: "Copy Code",
                  class: "copy"
                }),
                createVNode("span", { class: "lang" }, "js"),
                createVNode("pre", { class: "shiki material-theme-palenight vp-code" }, [
                  createVNode("code", null, [
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " {"),
                      createVNode("span", { style: { "color": "#BABED8" } }, " mauve"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                      createVNode("span", { style: { "color": "#BABED8" } }, " grass "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "}"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " ="),
                      createVNode("span", { style: { "color": "#82AAFF" } }, " require"),
                      createVNode("span", { style: { "color": "#BABED8" } }, "("),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "@radix-ui/colors"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#BABED8" } }, ")")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#676E95", "font-style": "italic" } }, "/** "),
                      createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, "@"),
                      createVNode("span", { style: { "color": "#C792EA", "font-style": "italic" } }, "type"),
                      createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, " {"),
                      createVNode("span", { style: { "color": "#FFCB6B", "font-style": "italic" } }, "import('tailwindcss').Config"),
                      createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, "}"),
                      createVNode("span", { style: { "color": "#676E95", "font-style": "italic" } }, " */")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "module.exports"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " ="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " {")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "  content"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#BABED8" } }, " ["),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "./**/*.vue"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#BABED8" } }, "]"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "  theme"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " {")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "    extend"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " {")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "      colors"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " {")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "        ..."),
                      createVNode("span", { style: { "color": "#BABED8" } }, "mauve"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "        ..."),
                      createVNode("span", { style: { "color": "#BABED8" } }, "grass"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "      },")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "    },")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "  },")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "  plugins"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#BABED8" } }, " []"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$1, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h2 id="features" tabindex="-1">Features <a class="header-anchor" href="#features" aria-label="Permalink to &quot;Features&quot;">​</a></h2>`);
      _push(ssrRenderComponent(_component_Highlights, { features: [
        "Full keyboard navigation.",
        "Can be controlled or uncontrolled.",
        "Supports pasting from clipboard",
        "Emit event when inputs were filled."
      ] }, null, _parent));
      _push(`<h2 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-label="Permalink to &quot;Installation&quot;">​</a></h2><p>Install the component from your command line.</p><div title="bash" class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}">npm</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"> install radix-vue</span></span></code></pre></div><h2 id="anatomy" tabindex="-1">Anatomy <a class="header-anchor" href="#anatomy" aria-label="Permalink to &quot;Anatomy&quot;">​</a></h2><p>Import all parts and piece them together.</p><div title="vue" class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">script</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"> setup</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}">import</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> {</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"> PinInputInput</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">,</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"> PinInputRoot</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> }</span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"> from</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> &#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">radix-vue</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">script</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">  &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">PinInputRoot</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">    &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">PinInputInput</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> /&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">  &lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">PinInputRoot</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span></code></pre></div><h2 id="api-reference" tabindex="-1">API Reference <a class="header-anchor" href="#api-reference" aria-label="Permalink to &quot;API Reference&quot;">​</a></h2><h3 id="root" tabindex="-1">Root <a class="header-anchor" href="#root" aria-label="Permalink to &quot;Root&quot;">​</a></h3><p>Contains all the parts of a checkbox. An <code>input</code> will also render when used within a <code>form</code> to ensure events propagate correctly.</p>`);
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
          "description": "<p>The default value of the pin inputs when it is initially rendered. Use when you do not need to control its checked state.</p>\n",
          "type": "string[]",
          "required": false
        },
        {
          "name": "dir",
          "description": "<p>The reading direction of the combobox when applicable. <br> If omitted, inherits globally from <code>DirectionProvider</code> or assumes LTR (left-to-right) reading mode.</p>\n",
          "type": "'ltr' | 'rtl'",
          "required": false
        },
        {
          "name": "disabled",
          "description": "<p>When <code>true</code>, prevents the user from interacting with the pin input</p>\n",
          "type": "boolean",
          "required": false
        },
        {
          "name": "id",
          "description": "<p>Id of the element</p>\n",
          "type": "string",
          "required": false
        },
        {
          "name": "mask",
          "description": "<p>When <code>true</code>, pin inputs will be treated as password.</p>\n",
          "type": "boolean",
          "required": false
        },
        {
          "name": "modelValue",
          "description": "<p>The controlled checked state of the pin input. Can be binded as <code>v-model</code>.</p>\n",
          "type": "string[]",
          "required": false
        },
        {
          "name": "name",
          "description": "<p>The name of the pin input. Submitted with its owning form as part of a name/value pair.</p>\n",
          "type": "string",
          "required": false
        },
        {
          "name": "otp",
          "description": "<p>When <code>true</code>, mobile devices will autodetect the OTP from messages or clipboard, and enable the autocomplete field.</p>\n",
          "type": "boolean",
          "required": false
        },
        {
          "name": "placeholder",
          "description": "<p>The placeholder character to use for empty pin-inputs.</p>\n",
          "type": "string",
          "required": false,
          "default": "''"
        },
        {
          "name": "required",
          "description": "<p>When <code>true</code>, indicates that the user must check the pin input before the owning form can be submitted.</p>\n",
          "type": "boolean",
          "required": false
        },
        {
          "name": "type",
          "description": "<p>Input type for the inputs.</p>\n",
          "type": "'number' | 'text'",
          "required": false,
          "default": "'text'"
        }
      ] }, null, _parent));
      _push(ssrRenderComponent(_component_EmitsTable, { data: [
        {
          "name": "complete",
          "description": "",
          "type": "[value: string[]]"
        },
        {
          "name": "update:modelValue",
          "description": "<p>Event handler called when the value changes.</p>\n",
          "type": "[value: string[]]"
        }
      ] }, null, _parent));
      _push(ssrRenderComponent(_component_SlotsTable, { data: [
        {
          "name": "modelValue",
          "description": "Current input values",
          "type": "string[]"
        }
      ] }, null, _parent));
      _push(ssrRenderComponent(_component_DataAttributesTable, { data: [
        {
          attribute: "[data-complete]",
          values: "Present when completed"
        },
        {
          attribute: "[data-disabled]",
          values: "Present when disabled"
        }
      ] }, null, _parent));
      _push(`<h3 id="input" tabindex="-1">Input <a class="header-anchor" href="#input" aria-label="Permalink to &quot;Input&quot;">​</a></h3><p>Input field for Pin Input. You can add as many input as you like.</p>`);
      _push(ssrRenderComponent(_component_PropsTable, { data: [
        {
          "name": "as",
          "description": "<p>The element or component this component should render as. Can be overwrite by <code>asChild</code></p>\n",
          "type": "AsTag | Component",
          "required": false,
          "default": "'input'"
        },
        {
          "name": "asChild",
          "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\n<p>Read our <a href='https://www.radix-vue.com/guides/composition.html'>Composition</a> guide for more details.</p>\n",
          "type": "boolean",
          "required": false
        },
        {
          "name": "disabled",
          "description": "<p>When <code>true</code>, prevents the user from interacting with the pin input</p>\n",
          "type": "boolean",
          "required": false
        },
        {
          "name": "index",
          "description": "<p>Position of the value this input binds to.</p>\n",
          "type": "number",
          "required": true
        }
      ] }, null, _parent));
      _push(ssrRenderComponent(_component_DataAttributesTable, { data: [
        {
          attribute: "[data-complete]",
          values: "Present when completed"
        },
        {
          attribute: "[data-disabled]",
          values: "Present when disabled"
        }
      ] }, null, _parent));
      _push(`<h2 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;Examples&quot;">​</a></h2><h3 id="otp-mode" tabindex="-1">OTP mode <a class="header-anchor" href="#otp-mode" aria-label="Permalink to &quot;OTP mode&quot;">​</a></h3><p>You can set the pin input to <code>otp</code> mode by setting otp to <code>true</code>.</p><div title="vue" class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">script</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"> setup</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"> lang</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">ts</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"> </span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}">import</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> {</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"> Label</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">,</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"> PinInputInput</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">,</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"> PinInputRoot</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> }</span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"> from</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> &#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">radix-vue</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&#39;</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"> </span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">script</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line highlighted"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">  &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">PinInputRoot</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"> v-model</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}">value</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"> otp</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#BABED8" })}">    …</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">  &lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">PinInputRoot</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span></code></pre></div><h3 id="numeric-mode" tabindex="-1">Numeric mode <a class="header-anchor" href="#numeric-mode" aria-label="Permalink to &quot;Numeric mode&quot;">​</a></h3><p>You can set the pin input to only accept <code>number</code> type by setting type to <code>number</code>.</p><div title="vue" class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">script</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"> setup</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"> lang</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">ts</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"> </span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}">import</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> {</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"> Label</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">,</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"> PinInputInput</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">,</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"> PinInputRoot</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> }</span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"> from</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> &#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">radix-vue</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&#39;</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"> </span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">script</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line highlighted"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">  &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">PinInputRoot</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"> v-model</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}">value</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"> type</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">number</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#BABED8" })}">    …</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">  &lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">PinInputRoot</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span></code></pre></div><h2 id="accessibility" tabindex="-1">Accessibility <a class="header-anchor" href="#accessibility" aria-label="Permalink to &quot;Accessibility&quot;">​</a></h2><h3 id="keyboard-interactions" tabindex="-1">Keyboard Interactions <a class="header-anchor" href="#keyboard-interactions" aria-label="Permalink to &quot;Keyboard Interactions&quot;">​</a></h3>`);
      _push(ssrRenderComponent(_component_KeyboardTable, { data: [
        {
          keys: ["ArrowLeft"],
          description: "Focus on previous input."
        },
        {
          keys: ["ArrowRight"],
          description: "Focus on next input."
        },
        {
          keys: ["Home"],
          description: "Focus on the first input."
        },
        {
          keys: ["End"],
          description: "Focus on the last input."
        },
        {
          keys: ["Backspace"],
          description: "Deletes the value of the current input. If the input is empty, moves to the previous input and deletes that value as well."
        },
        {
          keys: ["Delete"],
          description: "Deletes the value of the current input."
        },
        {
          keys: ["Ctrl + V"],
          description: `	
Pastes the contents of the clipboard into the pin input. If the number of characters in the clipboard equals exceeds the number of inputs, the contents are pasted from the first input. Otherwise, the contents are pasted from the current input onwards.`
        }
      ] }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pin-input.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
