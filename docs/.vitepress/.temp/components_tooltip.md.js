import { useSSRContext, resolveComponent, withCtx, createTextVNode, createVNode } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./index.mteCbIyP.js";
import "./index.faJ9MUPN.js";
import "@iconify/vue";
const __pageData = JSON.parse('{"title":"Tooltip","description":"A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.","frontmatter":{"title":"Tooltip","description":"A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.","name":"tooltip","aria":"https://www.w3.org/WAI/ARIA/apg/patterns/tooltip","sidebar":true},"headers":[],"relativePath":"components/tooltip.md","filePath":"components/tooltip.md","lastUpdated":1706592413000}');
const __default__ = { name: "components/tooltip.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Description = resolveComponent("Description");
      const _component_ComponentPreview = resolveComponent("ComponentPreview");
      const _component_Highlights = resolveComponent("Highlights");
      const _component_PropsTable = resolveComponent("PropsTable");
      const _component_EmitsTable = resolveComponent("EmitsTable");
      const _component_DataAttributesTable = resolveComponent("DataAttributesTable");
      const _component_CssVariablesTable = resolveComponent("CssVariablesTable");
      const _component_KeyboardTable = resolveComponent("KeyboardTable");
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="tooltip" tabindex="-1">Tooltip <a class="header-anchor" href="#tooltip" aria-label="Permalink to &quot;Tooltip&quot;">​</a></h1>`);
      _push(ssrRenderComponent(_component_Description, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it. `);
          } else {
            return [
              createTextVNode(" A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_ComponentPreview, {
        name: "Tooltip",
        files: "%7B%22css%22%3A%5B%22css%2Findex.vue%22%2C%22css%2Fstyles.css%22%5D%2C%22tailwind%22%3A%5B%22tailwind%2Findex.vue%22%2C%22tailwind%2Ftailwind.config.js%22%5D%7D"
      }, {
        css: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div title="index.vue" class="language-vue"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>vue</span><pre class="shiki material-theme-palenight vp-code"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>script</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}> setup</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}> lang</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>ts</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId}>import</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> {</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}> TooltipArrow</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>,</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}> TooltipContent</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>,</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}> TooltipPortal</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>,</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}> TooltipProvider</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>,</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}> TooltipRoot</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>,</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}> TooltipTrigger</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> }</span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId}> from</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> &#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>radix-vue</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId}>import</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> {</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}> Icon</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> }</span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId}> from</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> &#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>@iconify/vue</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId}>import</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> &#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>./styles.css</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>script</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>  &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>TooltipProvider</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>    &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>TooltipRoot</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>      &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>TooltipTrigger</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>        class</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>IconButton</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>      &gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>        &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>Icon</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}> icon</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>radix-icons:plus</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> /&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>      &lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>TooltipTrigger</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>      &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>TooltipPortal</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>        &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>TooltipContent</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>          as-child</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>          class</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>TooltipContent</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>          :</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>side-offset</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>5</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>        &gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}>          Add to library</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>          &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>TooltipArrow</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}> class</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>TooltipArrow</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}> size</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>8</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> /&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>        &lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>TooltipContent</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>      &lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>TooltipPortal</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>    &lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>TooltipRoot</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>  &lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>TooltipProvider</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span></span></code></pre></div><div title="styles.css" class="language-css"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>css</span><pre class="shiki material-theme-palenight vp-code"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId}>@import</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> &#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>@radix-ui/colors/black-alpha.css</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId}>@import</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> &#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>@radix-ui/colors/grass.css</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#676E95", "font-style": "italic" })}"${_scopeId}>/* reset */</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}"${_scopeId}>button</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId}>  all</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}> unset</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>}</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}"${_scopeId}>TooltipContent</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId}>  border-radius</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}> 4px</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId}>  padding</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}> 10px</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}> 15px</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId}>  font-size</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}> 15px</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId}>  line-height</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}> 1</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId}>  color</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}> var</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}>--grass-11</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>);</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId}>  background-color</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}> white</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId}>  box-shadow</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}> hsl</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>206</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}> 22%</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}> 7%</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}> / </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>35%</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>)</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}> 0px</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}> 10px</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}> 38px</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}> -10px</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>,</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}> hsl</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>206</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}> 22%</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}> 7%</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}> / </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>20%</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>)</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}> 0px</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}> 10px</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}> 20px</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}> -15px</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId}>  user-select</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}> none</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId}>  animation-duration</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}> 400ms</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId}>  animation-timing-function</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}> cubic-bezier</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>0.16</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>,</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}> 1</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>,</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}> 0.3</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>,</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}> 1</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>);</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId}>  will-change</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}> transform</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>,</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}> opacity</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>}</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}"${_scopeId}>TooltipContent</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>[</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>data-state</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>delayed-open</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>][</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>data-side</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>top</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>]</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId}>  animation-name</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}> slideDownAndFade</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>}</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}"${_scopeId}>TooltipContent</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>[</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>data-state</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>delayed-open</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>][</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>data-side</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>right</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>]</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId}>  animation-name</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}> slideLeftAndFade</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>}</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}"${_scopeId}>TooltipContent</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>[</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>data-state</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>delayed-open</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>][</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>data-side</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>bottom</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>]</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId}>  animation-name</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}> slideUpAndFade</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>}</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}"${_scopeId}>TooltipContent</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>[</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>data-state</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>delayed-open</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>][</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>data-side</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>left</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>]</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId}>  animation-name</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}> slideRightAndFade</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>}</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}"${_scopeId}>TooltipArrow</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId}>  fill</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}> white</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>}</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}"${_scopeId}>IconButton</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId}>  font-family</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}> inherit</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId}>  border-radius</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}> 100%</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId}>  height</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}> 35px</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId}>  width</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}> 35px</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId}>  display</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}> inline-flex</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId}>  align-items</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}> center</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId}>  justify-content</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}> center</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId}>  color</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}> var</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}>--grass-11</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>);</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId}>  background-color</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}> white</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId}>  box-shadow</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}> 0</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}> 2px</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}> 10px</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}> var</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}>--black-a7</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>);</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>}</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}"${_scopeId}>IconButton</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>hover</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId}>  background-color</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}> var</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}>--grass-3</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>);</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>}</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}"${_scopeId}>IconButton</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>focus</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId}>  box-shadow</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}> 0</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}> 0</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}> 0</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}> 2px</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}> black</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>}</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId}>@keyframes</span><span style="${ssrRenderStyle({ "color": "#BABED8", "font-style": "italic" })}"${_scopeId}> slideUpAndFade</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}"${_scopeId}>  from</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId}>    opacity</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}> 0</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId}>    transform</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}> translateY</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>2px</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>);</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>  }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}"${_scopeId}>  to</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId}>    opacity</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}> 1</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId}>    transform</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}> translateY</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>0</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>);</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>  }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>}</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId}>@keyframes</span><span style="${ssrRenderStyle({ "color": "#BABED8", "font-style": "italic" })}"${_scopeId}> slideRightAndFade</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}"${_scopeId}>  from</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId}>    opacity</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}> 0</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId}>    transform</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}> translateX</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>-2px</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>);</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>  }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}"${_scopeId}>  to</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId}>    opacity</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}> 1</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId}>    transform</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}> translateX</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>0</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>);</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>  }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>}</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId}>@keyframes</span><span style="${ssrRenderStyle({ "color": "#BABED8", "font-style": "italic" })}"${_scopeId}> slideDownAndFade</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}"${_scopeId}>  from</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId}>    opacity</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}> 0</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId}>    transform</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}> translateY</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>-2px</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>);</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>  }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}"${_scopeId}>  to</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId}>    opacity</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}> 1</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId}>    transform</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}> translateY</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>0</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>);</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>  }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>}</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId}>@keyframes</span><span style="${ssrRenderStyle({ "color": "#BABED8", "font-style": "italic" })}"${_scopeId}> slideLeftAndFade</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}"${_scopeId}>  from</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId}>    opacity</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}> 0</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId}>    transform</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}> translateX</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>2px</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>);</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>  }</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}"${_scopeId}>  to</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId}>    opacity</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}> 1</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId}>    transform</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}> translateX</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>0</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>);</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>  }</span></span>
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
                      createVNode("span", { style: { "color": "#BABED8" } }, " TooltipArrow"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                      createVNode("span", { style: { "color": "#BABED8" } }, " TooltipContent"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                      createVNode("span", { style: { "color": "#BABED8" } }, " TooltipPortal"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                      createVNode("span", { style: { "color": "#BABED8" } }, " TooltipProvider"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                      createVNode("span", { style: { "color": "#BABED8" } }, " TooltipRoot"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                      createVNode("span", { style: { "color": "#BABED8" } }, " TooltipTrigger"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " }"),
                      createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, " from"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " '"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "radix-vue"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, "import"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " {"),
                      createVNode("span", { style: { "color": "#BABED8" } }, " Icon"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " }"),
                      createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, " from"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " '"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "@iconify/vue"),
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
                      createVNode("span", { style: { "color": "#F07178" } }, "TooltipProvider"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "    <"),
                      createVNode("span", { style: { "color": "#F07178" } }, "TooltipRoot"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "      <"),
                      createVNode("span", { style: { "color": "#F07178" } }, "TooltipTrigger")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#C792EA" } }, "        class"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "IconButton"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "      >")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "        <"),
                      createVNode("span", { style: { "color": "#F07178" } }, "Icon"),
                      createVNode("span", { style: { "color": "#C792EA" } }, " icon"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "radix-icons:plus"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " />")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "      </"),
                      createVNode("span", { style: { "color": "#F07178" } }, "TooltipTrigger"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "      <"),
                      createVNode("span", { style: { "color": "#F07178" } }, "TooltipPortal"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "        <"),
                      createVNode("span", { style: { "color": "#F07178" } }, "TooltipContent")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#C792EA" } }, "          as-child")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#C792EA" } }, "          class"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "TooltipContent"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "          :"),
                      createVNode("span", { style: { "color": "#C792EA" } }, "side-offset"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#F78C6C" } }, "5"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "        >")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#BABED8" } }, "          Add to library")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "          <"),
                      createVNode("span", { style: { "color": "#F07178" } }, "TooltipArrow"),
                      createVNode("span", { style: { "color": "#C792EA" } }, " class"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "TooltipArrow"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C792EA" } }, " size"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "8"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " />")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "        </"),
                      createVNode("span", { style: { "color": "#F07178" } }, "TooltipContent"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "      </"),
                      createVNode("span", { style: { "color": "#F07178" } }, "TooltipPortal"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "    </"),
                      createVNode("span", { style: { "color": "#F07178" } }, "TooltipRoot"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "  </"),
                      createVNode("span", { style: { "color": "#F07178" } }, "TooltipProvider"),
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
                      createVNode("span", { style: { "color": "#FFCB6B" } }, "button"),
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
                      createVNode("span", { style: { "color": "#FFCB6B" } }, "TooltipContent"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " {")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#B2CCD6" } }, "  border-radius"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#F78C6C" } }, " 4px"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#B2CCD6" } }, "  padding"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#F78C6C" } }, " 10px"),
                      createVNode("span", { style: { "color": "#F78C6C" } }, " 15px"),
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
                      createVNode("span", { style: { "color": "#B2CCD6" } }, "  color"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#82AAFF" } }, " var"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "("),
                      createVNode("span", { style: { "color": "#BABED8" } }, "--grass-11"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ");")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#B2CCD6" } }, "  background-color"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#BABED8" } }, " white"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#B2CCD6" } }, "  box-shadow"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#82AAFF" } }, " hsl"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "("),
                      createVNode("span", { style: { "color": "#F78C6C" } }, "206"),
                      createVNode("span", { style: { "color": "#F78C6C" } }, " 22%"),
                      createVNode("span", { style: { "color": "#F78C6C" } }, " 7%"),
                      createVNode("span", { style: { "color": "#BABED8" } }, " / "),
                      createVNode("span", { style: { "color": "#F78C6C" } }, "35%"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ")"),
                      createVNode("span", { style: { "color": "#F78C6C" } }, " 0px"),
                      createVNode("span", { style: { "color": "#F78C6C" } }, " 10px"),
                      createVNode("span", { style: { "color": "#F78C6C" } }, " 38px"),
                      createVNode("span", { style: { "color": "#F78C6C" } }, " -10px"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                      createVNode("span", { style: { "color": "#82AAFF" } }, " hsl"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "("),
                      createVNode("span", { style: { "color": "#F78C6C" } }, "206"),
                      createVNode("span", { style: { "color": "#F78C6C" } }, " 22%"),
                      createVNode("span", { style: { "color": "#F78C6C" } }, " 7%"),
                      createVNode("span", { style: { "color": "#BABED8" } }, " / "),
                      createVNode("span", { style: { "color": "#F78C6C" } }, "20%"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ")"),
                      createVNode("span", { style: { "color": "#F78C6C" } }, " 0px"),
                      createVNode("span", { style: { "color": "#F78C6C" } }, " 10px"),
                      createVNode("span", { style: { "color": "#F78C6C" } }, " 20px"),
                      createVNode("span", { style: { "color": "#F78C6C" } }, " -15px"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#B2CCD6" } }, "  user-select"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#BABED8" } }, " none"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#B2CCD6" } }, "  animation-duration"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#F78C6C" } }, " 400ms"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#B2CCD6" } }, "  animation-timing-function"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#82AAFF" } }, " cubic-bezier"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "("),
                      createVNode("span", { style: { "color": "#F78C6C" } }, "0.16"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                      createVNode("span", { style: { "color": "#F78C6C" } }, " 1"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                      createVNode("span", { style: { "color": "#F78C6C" } }, " 0.3"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                      createVNode("span", { style: { "color": "#F78C6C" } }, " 1"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ");")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#B2CCD6" } }, "  will-change"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#BABED8" } }, " transform"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                      createVNode("span", { style: { "color": "#BABED8" } }, " opacity"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                      createVNode("span", { style: { "color": "#FFCB6B" } }, "TooltipContent"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "["),
                      createVNode("span", { style: { "color": "#C792EA" } }, "data-state"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "delayed-open"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "]["),
                      createVNode("span", { style: { "color": "#C792EA" } }, "data-side"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "top"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "]"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " {")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#B2CCD6" } }, "  animation-name"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#BABED8" } }, " slideDownAndFade"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                      createVNode("span", { style: { "color": "#FFCB6B" } }, "TooltipContent"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "["),
                      createVNode("span", { style: { "color": "#C792EA" } }, "data-state"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "delayed-open"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "]["),
                      createVNode("span", { style: { "color": "#C792EA" } }, "data-side"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "right"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "]"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " {")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#B2CCD6" } }, "  animation-name"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#BABED8" } }, " slideLeftAndFade"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                      createVNode("span", { style: { "color": "#FFCB6B" } }, "TooltipContent"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "["),
                      createVNode("span", { style: { "color": "#C792EA" } }, "data-state"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "delayed-open"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "]["),
                      createVNode("span", { style: { "color": "#C792EA" } }, "data-side"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "bottom"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "]"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " {")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#B2CCD6" } }, "  animation-name"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#BABED8" } }, " slideUpAndFade"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                      createVNode("span", { style: { "color": "#FFCB6B" } }, "TooltipContent"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "["),
                      createVNode("span", { style: { "color": "#C792EA" } }, "data-state"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "delayed-open"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "]["),
                      createVNode("span", { style: { "color": "#C792EA" } }, "data-side"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "left"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "]"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " {")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#B2CCD6" } }, "  animation-name"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#BABED8" } }, " slideRightAndFade"),
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
                      createVNode("span", { style: { "color": "#FFCB6B" } }, "TooltipArrow"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " {")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#B2CCD6" } }, "  fill"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#BABED8" } }, " white"),
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
                      createVNode("span", { style: { "color": "#FFCB6B" } }, "IconButton"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " {")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#B2CCD6" } }, "  font-family"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#BABED8" } }, " inherit"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#B2CCD6" } }, "  border-radius"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#F78C6C" } }, " 100%"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#B2CCD6" } }, "  height"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#F78C6C" } }, " 35px"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#B2CCD6" } }, "  width"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#F78C6C" } }, " 35px"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#B2CCD6" } }, "  display"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#BABED8" } }, " inline-flex"),
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
                      createVNode("span", { style: { "color": "#B2CCD6" } }, "  color"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#82AAFF" } }, " var"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "("),
                      createVNode("span", { style: { "color": "#BABED8" } }, "--grass-11"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ");")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#B2CCD6" } }, "  background-color"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#BABED8" } }, " white"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#B2CCD6" } }, "  box-shadow"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#F78C6C" } }, " 0"),
                      createVNode("span", { style: { "color": "#F78C6C" } }, " 2px"),
                      createVNode("span", { style: { "color": "#F78C6C" } }, " 10px"),
                      createVNode("span", { style: { "color": "#82AAFF" } }, " var"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "("),
                      createVNode("span", { style: { "color": "#BABED8" } }, "--black-a7"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ");")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                      createVNode("span", { style: { "color": "#FFCB6B" } }, "IconButton"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#C792EA" } }, "hover"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " {")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#B2CCD6" } }, "  background-color"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#82AAFF" } }, " var"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "("),
                      createVNode("span", { style: { "color": "#BABED8" } }, "--grass-3"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ");")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                      createVNode("span", { style: { "color": "#FFCB6B" } }, "IconButton"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#C792EA" } }, "focus"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " {")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#B2CCD6" } }, "  box-shadow"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#F78C6C" } }, " 0"),
                      createVNode("span", { style: { "color": "#F78C6C" } }, " 0"),
                      createVNode("span", { style: { "color": "#F78C6C" } }, " 0"),
                      createVNode("span", { style: { "color": "#F78C6C" } }, " 2px"),
                      createVNode("span", { style: { "color": "#BABED8" } }, " black"),
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
                      createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, "@keyframes"),
                      createVNode("span", { style: { "color": "#BABED8", "font-style": "italic" } }, " slideUpAndFade"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " {")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#FFCB6B" } }, "  from"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " {")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#B2CCD6" } }, "    opacity"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#F78C6C" } }, " 0"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#B2CCD6" } }, "    transform"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#82AAFF" } }, " translateY"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "("),
                      createVNode("span", { style: { "color": "#F78C6C" } }, "2px"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ");")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "  }")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#FFCB6B" } }, "  to"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " {")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#B2CCD6" } }, "    opacity"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#F78C6C" } }, " 1"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#B2CCD6" } }, "    transform"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#82AAFF" } }, " translateY"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "("),
                      createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ");")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "  }")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, "@keyframes"),
                      createVNode("span", { style: { "color": "#BABED8", "font-style": "italic" } }, " slideRightAndFade"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " {")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#FFCB6B" } }, "  from"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " {")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#B2CCD6" } }, "    opacity"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#F78C6C" } }, " 0"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#B2CCD6" } }, "    transform"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#82AAFF" } }, " translateX"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "("),
                      createVNode("span", { style: { "color": "#F78C6C" } }, "-2px"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ");")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "  }")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#FFCB6B" } }, "  to"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " {")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#B2CCD6" } }, "    opacity"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#F78C6C" } }, " 1"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#B2CCD6" } }, "    transform"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#82AAFF" } }, " translateX"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "("),
                      createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ");")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "  }")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, "@keyframes"),
                      createVNode("span", { style: { "color": "#BABED8", "font-style": "italic" } }, " slideDownAndFade"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " {")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#FFCB6B" } }, "  from"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " {")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#B2CCD6" } }, "    opacity"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#F78C6C" } }, " 0"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#B2CCD6" } }, "    transform"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#82AAFF" } }, " translateY"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "("),
                      createVNode("span", { style: { "color": "#F78C6C" } }, "-2px"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ");")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "  }")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#FFCB6B" } }, "  to"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " {")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#B2CCD6" } }, "    opacity"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#F78C6C" } }, " 1"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#B2CCD6" } }, "    transform"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#82AAFF" } }, " translateY"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "("),
                      createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ");")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "  }")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, "@keyframes"),
                      createVNode("span", { style: { "color": "#BABED8", "font-style": "italic" } }, " slideLeftAndFade"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " {")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#FFCB6B" } }, "  from"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " {")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#B2CCD6" } }, "    opacity"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#F78C6C" } }, " 0"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#B2CCD6" } }, "    transform"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#82AAFF" } }, " translateX"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "("),
                      createVNode("span", { style: { "color": "#F78C6C" } }, "2px"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ");")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "  }")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#FFCB6B" } }, "  to"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " {")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#B2CCD6" } }, "    opacity"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#F78C6C" } }, " 1"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#B2CCD6" } }, "    transform"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#82AAFF" } }, " translateX"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "("),
                      createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ");")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "  }")
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
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId}>import</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> {</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}> TooltipArrow</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>,</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}> TooltipContent</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>,</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}> TooltipPortal</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>,</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}> TooltipProvider</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>,</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}> TooltipRoot</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>,</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}> TooltipTrigger</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> }</span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId}> from</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> &#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>radix-vue</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId}>import</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> {</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}> Icon</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> }</span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId}> from</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> &#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>@iconify/vue</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>script</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>  &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>TooltipProvider</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>    &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>TooltipRoot</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>      &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>TooltipTrigger</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>        class</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>text-grass11 shadow-blackA7 hover:bg-green3 inline-flex h-[35px] w-[35px] items-center justify-center rounded-full bg-white shadow-[0_2px_10px] outline-none focus:shadow-[0_0_0_2px] focus:shadow-black</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>      &gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>        &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>Icon</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}> icon</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>radix-icons:plus</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> /&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>      &lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>TooltipTrigger</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>      &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>TooltipPortal</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>        &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>TooltipContent</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>          class</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade text-grass11 select-none rounded-[4px] bg-white px-[15px] py-[10px] text-[15px] leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity]</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>          :</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>side-offset</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>5</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>        &gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}>          Add to library</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>          &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>TooltipArrow</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}> class</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>fill-white</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}> size</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>8</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> /&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>        &lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>TooltipContent</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>      &lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>TooltipPortal</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>    &lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>TooltipRoot</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>  &lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>TooltipProvider</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span></span></code></pre></div><div title="tailwind.config.js" class="language-js"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>js</span><pre class="shiki material-theme-palenight vp-code"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>const</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> {</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}> blackA</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>,</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}> green</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>,</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}> grass </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>}</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> =</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}> require</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>@radix-ui/colors</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}>)</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#676E95", "font-style": "italic" })}"${_scopeId}>/** </span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId}>@</span><span style="${ssrRenderStyle({ "color": "#C792EA", "font-style": "italic" })}"${_scopeId}>type</span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId}> {</span><span style="${ssrRenderStyle({ "color": "#FFCB6B", "font-style": "italic" })}"${_scopeId}>import(&#39;tailwindcss&#39;).Config</span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId}>}</span><span style="${ssrRenderStyle({ "color": "#676E95", "font-style": "italic" })}"${_scopeId}> */</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>module.exports</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> =</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>  content</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}> [</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>./**/*.vue</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}>]</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>  theme</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>    extend</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>      colors</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>        ...</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}>blackA</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>        ...</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}>green</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>        ...</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}>grass</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>      },</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>      keyframes</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>        slideDownAndFade</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>          from</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> {</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}> opacity</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}> 0</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>,</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}> transform</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> &#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>translateY(-2px)</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> },</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>          to</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> {</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}> opacity</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}> 1</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>,</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}> transform</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> &#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>translateY(0)</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> },</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>        },</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>        slideLeftAndFade</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>          from</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> {</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}> opacity</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}> 0</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>,</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}> transform</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> &#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>translateX(2px)</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> },</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>          to</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> {</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}> opacity</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}> 1</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>,</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}> transform</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> &#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>translateX(0)</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> },</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>        },</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>        slideUpAndFade</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>          from</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> {</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}> opacity</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}> 0</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>,</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}> transform</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> &#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>translateY(2px)</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> },</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>          to</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> {</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}> opacity</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}> 1</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>,</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}> transform</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> &#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>translateY(0)</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> },</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>        },</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>        slideRightAndFade</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>          from</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> {</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}> opacity</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}> 0</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>,</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}> transform</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> &#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>translateX(-2px)</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> },</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>          to</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> {</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}> opacity</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}> 1</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>,</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}> transform</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> &#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>translateX(0)</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> },</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>        },</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>      },</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>      animation</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>        slideDownAndFade</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> &#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>        slideLeftAndFade</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> &#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>        slideUpAndFade</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> &#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>        slideRightAndFade</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> &#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>slideRightAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>,</span></span>
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
                      createVNode("span", { style: { "color": "#BABED8" } }, " TooltipArrow"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                      createVNode("span", { style: { "color": "#BABED8" } }, " TooltipContent"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                      createVNode("span", { style: { "color": "#BABED8" } }, " TooltipPortal"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                      createVNode("span", { style: { "color": "#BABED8" } }, " TooltipProvider"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                      createVNode("span", { style: { "color": "#BABED8" } }, " TooltipRoot"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                      createVNode("span", { style: { "color": "#BABED8" } }, " TooltipTrigger"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " }"),
                      createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, " from"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " '"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "radix-vue"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, "import"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " {"),
                      createVNode("span", { style: { "color": "#BABED8" } }, " Icon"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " }"),
                      createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, " from"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " '"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "@iconify/vue"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'")
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
                      createVNode("span", { style: { "color": "#F07178" } }, "TooltipProvider"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "    <"),
                      createVNode("span", { style: { "color": "#F07178" } }, "TooltipRoot"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "      <"),
                      createVNode("span", { style: { "color": "#F07178" } }, "TooltipTrigger")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#C792EA" } }, "        class"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "text-grass11 shadow-blackA7 hover:bg-green3 inline-flex h-[35px] w-[35px] items-center justify-center rounded-full bg-white shadow-[0_2px_10px] outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "      >")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "        <"),
                      createVNode("span", { style: { "color": "#F07178" } }, "Icon"),
                      createVNode("span", { style: { "color": "#C792EA" } }, " icon"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "radix-icons:plus"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " />")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "      </"),
                      createVNode("span", { style: { "color": "#F07178" } }, "TooltipTrigger"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "      <"),
                      createVNode("span", { style: { "color": "#F07178" } }, "TooltipPortal"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "        <"),
                      createVNode("span", { style: { "color": "#F07178" } }, "TooltipContent")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#C792EA" } }, "          class"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade text-grass11 select-none rounded-[4px] bg-white px-[15px] py-[10px] text-[15px] leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity]"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "          :"),
                      createVNode("span", { style: { "color": "#C792EA" } }, "side-offset"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#F78C6C" } }, "5"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "        >")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#BABED8" } }, "          Add to library")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "          <"),
                      createVNode("span", { style: { "color": "#F07178" } }, "TooltipArrow"),
                      createVNode("span", { style: { "color": "#C792EA" } }, " class"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "fill-white"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C792EA" } }, " size"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "8"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " />")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "        </"),
                      createVNode("span", { style: { "color": "#F07178" } }, "TooltipContent"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "      </"),
                      createVNode("span", { style: { "color": "#F07178" } }, "TooltipPortal"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "    </"),
                      createVNode("span", { style: { "color": "#F07178" } }, "TooltipRoot"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "  </"),
                      createVNode("span", { style: { "color": "#F07178" } }, "TooltipProvider"),
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
                      createVNode("span", { style: { "color": "#BABED8" } }, " blackA"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                      createVNode("span", { style: { "color": "#BABED8" } }, " green"),
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
                      createVNode("span", { style: { "color": "#BABED8" } }, "blackA"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "        ..."),
                      createVNode("span", { style: { "color": "#BABED8" } }, "green"),
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
                      createVNode("span", { style: { "color": "#F07178" } }, "      keyframes"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " {")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "        slideDownAndFade"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " {")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "          from"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " {"),
                      createVNode("span", { style: { "color": "#F07178" } }, " opacity"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#F78C6C" } }, " 0"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                      createVNode("span", { style: { "color": "#F07178" } }, " transform"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " '"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "translateY(-2px)"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " },")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "          to"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " {"),
                      createVNode("span", { style: { "color": "#F07178" } }, " opacity"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#F78C6C" } }, " 1"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                      createVNode("span", { style: { "color": "#F07178" } }, " transform"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " '"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "translateY(0)"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " },")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "        },")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "        slideLeftAndFade"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " {")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "          from"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " {"),
                      createVNode("span", { style: { "color": "#F07178" } }, " opacity"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#F78C6C" } }, " 0"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                      createVNode("span", { style: { "color": "#F07178" } }, " transform"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " '"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "translateX(2px)"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " },")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "          to"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " {"),
                      createVNode("span", { style: { "color": "#F07178" } }, " opacity"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#F78C6C" } }, " 1"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                      createVNode("span", { style: { "color": "#F07178" } }, " transform"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " '"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "translateX(0)"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " },")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "        },")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "        slideUpAndFade"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " {")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "          from"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " {"),
                      createVNode("span", { style: { "color": "#F07178" } }, " opacity"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#F78C6C" } }, " 0"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                      createVNode("span", { style: { "color": "#F07178" } }, " transform"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " '"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "translateY(2px)"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " },")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "          to"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " {"),
                      createVNode("span", { style: { "color": "#F07178" } }, " opacity"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#F78C6C" } }, " 1"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                      createVNode("span", { style: { "color": "#F07178" } }, " transform"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " '"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "translateY(0)"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " },")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "        },")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "        slideRightAndFade"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " {")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "          from"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " {"),
                      createVNode("span", { style: { "color": "#F07178" } }, " opacity"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#F78C6C" } }, " 0"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                      createVNode("span", { style: { "color": "#F07178" } }, " transform"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " '"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "translateX(-2px)"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " },")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "          to"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " {"),
                      createVNode("span", { style: { "color": "#F07178" } }, " opacity"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#F78C6C" } }, " 1"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                      createVNode("span", { style: { "color": "#F07178" } }, " transform"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " '"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "translateX(0)"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " },")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "        },")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "      },")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "      animation"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " {")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "        slideDownAndFade"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " '"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "        slideLeftAndFade"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " '"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "        slideUpAndFade"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " '"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "        slideRightAndFade"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " '"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "slideRightAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
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
        "Provider to control display delay globally.",
        "Opens when the trigger is focused or hovered.",
        "Closes when the trigger is activated or when pressing escape.",
        "Supports custom timings."
      ] }, null, _parent));
      _push(`<h2 id="anatomy" tabindex="-1">Anatomy <a class="header-anchor" href="#anatomy" aria-label="Permalink to &quot;Anatomy&quot;">​</a></h2><p>Import all parts and piece them together.</p><div title="vue" class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">script</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"> setup</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"> lang</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">ts</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}">import</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> {</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"> TooltipArrow</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">,</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"> TooltipContent</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">,</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"> TooltipProvider</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">,</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"> TooltipRoot</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">,</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"> TooltipTrigger</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> }</span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"> from</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> &#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">radix-vue</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">script</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">  &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">TooltipProvider</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">    &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">TooltipRoot</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">      &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">TooltipTrigger</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> /&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">      &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">Tooltip</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">        &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">TooltipContent</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">          &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">TooltipArrow</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> /&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">        &lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">TooltipContent</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">      &lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">Tooltip</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">    &lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">TooltipRoot</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">  &lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">TooltipProvider</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span></code></pre></div><h2 id="api-reference" tabindex="-1">API Reference <a class="header-anchor" href="#api-reference" aria-label="Permalink to &quot;API Reference&quot;">​</a></h2><h3 id="provider" tabindex="-1">Provider <a class="header-anchor" href="#provider" aria-label="Permalink to &quot;Provider&quot;">​</a></h3><p>Wraps your app to provide global functionality to your tooltips.</p>`);
      _push(ssrRenderComponent(_component_PropsTable, { data: [
        {
          "name": "delayDuration",
          "description": "<p>The duration from when the pointer enters the trigger until the tooltip gets opened.</p>\n",
          "type": "number",
          "required": false,
          "default": "700"
        },
        {
          "name": "disableClosingTrigger",
          "description": "<p>When <code>true</code>, clicking on trigger will not close the content.</p>\n",
          "type": "boolean",
          "required": false
        },
        {
          "name": "disableHoverableContent",
          "description": "<p>When <code>true</code>, trying to hover the content will result in the tooltip closing as the pointer leaves the trigger.</p>\n",
          "type": "boolean",
          "required": false,
          "default": "false"
        },
        {
          "name": "skipDelayDuration",
          "description": "<p>How much time a user has to enter another trigger without incurring a delay again.</p>\n",
          "type": "number",
          "required": false,
          "default": "300"
        }
      ] }, null, _parent));
      _push(`<h3 id="root" tabindex="-1">Root <a class="header-anchor" href="#root" aria-label="Permalink to &quot;Root&quot;">​</a></h3><p>Contains all the parts of a tooltip.</p>`);
      _push(ssrRenderComponent(_component_PropsTable, { data: [
        {
          "name": "defaultOpen",
          "description": "<p>The open state of the tooltip when it is initially rendered.\nUse when you do not need to control its open state.</p>\n",
          "type": "boolean",
          "required": false,
          "default": "false"
        },
        {
          "name": "delayDuration",
          "description": "<p>Override the duration given to the <code>Provider</code> to customise\nthe open delay for a specific tooltip.</p>\n",
          "type": "number",
          "required": false
        },
        {
          "name": "disableClosingTrigger",
          "description": "<p>When <code>true</code>, clicking on trigger will not close the content.</p>\n",
          "type": "boolean",
          "required": false
        },
        {
          "name": "disableHoverableContent",
          "description": "<p>Prevents Tooltip.Content from remaining open when hovering.\nDisabling this has accessibility consequences. Inherits\nfrom Tooltip.Provider.</p>\n",
          "type": "boolean",
          "required": false
        },
        {
          "name": "open",
          "description": "<p>The controlled open state of the tooltip.</p>\n",
          "type": "boolean",
          "required": false
        }
      ] }, null, _parent));
      _push(ssrRenderComponent(_component_EmitsTable, { data: [
        {
          "name": "update:open",
          "description": "<p>Event handler called when the open state of the tooltip changes.</p>\n",
          "type": "[value: boolean]"
        }
      ] }, null, _parent));
      _push(`<h3 id="trigger" tabindex="-1">Trigger <a class="header-anchor" href="#trigger" aria-label="Permalink to &quot;Trigger&quot;">​</a></h3><p>The button that toggles the tooltip. By default, the <code>TooltipContent</code> will position itself against the trigger.</p>`);
      _push(ssrRenderComponent(_component_PropsTable, { data: [
        {
          "name": "as",
          "description": "<p>The element or component this component should render as. Can be overwrite by <code>asChild</code></p>\n",
          "type": "AsTag | Component",
          "required": false,
          "default": "'button'"
        },
        {
          "name": "asChild",
          "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\n<p>Read our <a href='https://www.radix-vue.com/guides/composition.html'>Composition</a> guide for more details.</p>\n",
          "type": "boolean",
          "required": false
        }
      ] }, null, _parent));
      _push(ssrRenderComponent(_component_DataAttributesTable, { data: [
        {
          attribute: "[data-state]",
          values: ["closed", "delayed-open", "instant-open"]
        }
      ] }, null, _parent));
      _push(`<h3 id="portal" tabindex="-1">Portal <a class="header-anchor" href="#portal" aria-label="Permalink to &quot;Portal&quot;">​</a></h3><p>When used, portals the content part into the <code>body</code>.</p>`);
      _push(ssrRenderComponent(_component_PropsTable, { data: [
        {
          "name": "disabled",
          "description": "<p>Disable teleport and render the component inline</p>\n<p><a href='https://vuejs.org/guide/built-ins/teleport.html#disabling-teleport' target='_blank'>reference</a></p>\n",
          "type": "boolean",
          "required": false
        },
        {
          "name": "forceMount",
          "description": "<p>Used to force mounting when more control is needed. Useful when\ncontrolling animation with Vue animation libraries.</p>\n",
          "type": "boolean",
          "required": false
        },
        {
          "name": "to",
          "description": "<p>Vue native teleport component prop <code>:to</code></p>\n<p><a href='https://vuejs.org/guide/built-ins/teleport.html#basic-usage' target='_blank'>reference</a></p>\n",
          "type": "string | HTMLElement",
          "required": false
        }
      ] }, null, _parent));
      _push(`<h3 id="content" tabindex="-1">Content <a class="header-anchor" href="#content" aria-label="Permalink to &quot;Content&quot;">​</a></h3><p>The component that pops out when the tooltip is open.</p>`);
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
      _push(ssrRenderComponent(_component_DataAttributesTable, { data: [
        {
          attribute: "[data-state]",
          values: ["open", "closed"]
        },
        {
          attribute: "[data-side]",
          values: ["left", "right", "bottom", "top"]
        },
        {
          attribute: "[data-align]",
          values: ["start", "end", "center"]
        }
      ] }, null, _parent));
      _push(ssrRenderComponent(_component_CssVariablesTable, { data: [
        {
          cssVariable: "--radix-tooltip-content-transform-origin",
          description: " The <Code>transform-origin</Code> computed from the content and arrow positions/offsets"
        },
        {
          cssVariable: "--radix-tooltip-content-available-width",
          description: "The remaining width between the trigger and the boundary edge"
        },
        {
          cssVariable: "--radix-tooltip-content-available-height",
          description: "The remaining height between the trigger and the boundary edge"
        },
        {
          cssVariable: "--radix-tooltip-trigger-width",
          description: "The width of the trigger"
        },
        {
          cssVariable: "--radix-tooltip-trigger-height",
          description: "The height of the trigger"
        }
      ] }, null, _parent));
      _push(`<h3 id="arrow" tabindex="-1">Arrow <a class="header-anchor" href="#arrow" aria-label="Permalink to &quot;Arrow&quot;">​</a></h3><p>An optional arrow element to render alongside the tooltip. This can be used to help visually link the trigger with the <code>TooltipContent</code>. Must be rendered inside <code>TooltipContent</code>.</p>`);
      _push(ssrRenderComponent(_component_PropsTable, { data: [
        {
          "name": "as",
          "description": "<p>The element or component this component should render as. Can be overwrite by <code>asChild</code></p>\n",
          "type": "AsTag | Component",
          "required": false,
          "default": "'svg'"
        },
        {
          "name": "asChild",
          "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\n<p>Read our <a href='https://www.radix-vue.com/guides/composition.html'>Composition</a> guide for more details.</p>\n",
          "type": "boolean",
          "required": false
        },
        {
          "name": "height",
          "description": "<p>The height of the arrow in pixels.</p>\n",
          "type": "number",
          "required": false,
          "default": "5"
        },
        {
          "name": "width",
          "description": "<p>The width of the arrow in pixels.</p>\n",
          "type": "number",
          "required": false,
          "default": "10"
        }
      ] }, null, _parent));
      _push(`<h2 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;Examples&quot;">​</a></h2><h3 id="configure-globally" tabindex="-1">Configure globally <a class="header-anchor" href="#configure-globally" aria-label="Permalink to &quot;Configure globally&quot;">​</a></h3><p>Use the <code>Provider</code> to control <code>delayDuration</code> and <code>skipDelayDuration</code> globally.</p><div title="vue" class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">script</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"> setup</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}">import</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> {</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"> TooltipContent</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">,</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"> TooltipProvider</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">,</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"> TooltipRoot</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">,</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"> TooltipTrigger</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> }</span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"> from</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> &#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">radix-vue</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">script</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line highlighted"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">  &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">TooltipProvider</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> :</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}">delay-duration</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}">800</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> :</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}">skip-delay-duration</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}">500</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">    &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">TooltipRoot</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">      &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">TooltipTrigger</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}">…</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">TooltipTrigger</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">      &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">TooltipContent</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}">…</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">TooltipContent</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">    &lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">TooltipRoot</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">    &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">TooltipRoot</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">      &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">TooltipTrigger</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}">…</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">TooltipTrigger</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">      &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">TooltipContent</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}">…</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">TooltipContent</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">    &lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">TooltipRoot</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">  &lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">TooltipProvider</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span></code></pre></div><h3 id="show-instantly" tabindex="-1">Show instantly <a class="header-anchor" href="#show-instantly" aria-label="Permalink to &quot;Show instantly&quot;">​</a></h3><p>Use the <code>delayDuration</code> prop to control the time it takes for the tooltip to open.</p><div title="vue" class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">script</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"> setup</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}">import</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> {</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"> TooltipContent</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">,</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"> TooltipProvider</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">,</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"> TooltipRoot</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">,</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"> TooltipTrigger</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> }</span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"> from</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> &#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">radix-vue</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">script</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line highlighted"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">  &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">TooltipRoot</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> :</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}">delay-duration</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}">0</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">    &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">TooltipTrigger</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}">…</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">TooltipTrigger</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">    &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">TooltipContent</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}">…</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">TooltipContent</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">  &lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">TooltipRoot</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span></code></pre></div><h3 id="displaying-a-tooltip-from-a-disabled-button" tabindex="-1">Displaying a tooltip from a disabled button <a class="header-anchor" href="#displaying-a-tooltip-from-a-disabled-button" aria-label="Permalink to &quot;Displaying a tooltip from a disabled button&quot;">​</a></h3><p>Since disabled buttons don&#39;t fire events, you need to:</p><ul><li>Render the <code>Trigger</code> as <code>span</code>.</li><li>Ensure the <code>button</code> has no <code>pointerEvents</code>.</li></ul><div title="vue" class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">script</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"> setup</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}">import</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> {</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"> TooltipContent</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">,</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"> TooltipProvider</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">,</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"> TooltipRoot</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">,</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"> TooltipTrigger</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> }</span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"> from</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> &#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">radix-vue</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">script</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">  &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">TooltipRoot</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line highlighted"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">    &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">TooltipTrigger</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"> as-child</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line highlighted"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">      &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">span</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"> tabindex</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">0</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line highlighted"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">        &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">button</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"> disabled</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"> style</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">{ pointerEvents: &#39;none&#39; }</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}">…</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">button</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line highlighted"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">      &lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">span</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line highlighted"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">    &lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">TooltipTrigger</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">    &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">TooltipContent</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}">…</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">TooltipContent</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">  &lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">TooltipRoot</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span></code></pre></div><h3 id="constrain-the-content-size" tabindex="-1">Constrain the content size <a class="header-anchor" href="#constrain-the-content-size" aria-label="Permalink to &quot;Constrain the content size&quot;">​</a></h3><p>You may want to constrain the width of the content so that it matches the trigger width. You may also want to constrain its height to not exceed the viewport.</p><p>We expose several CSS custom properties such as <code>--radix-tooltip-trigger-width</code> and <code>--radix-tooltip-content-available-height</code> to support this. Use them to constrain the content dimensions.</p><div title="vue" class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#676E95", "font-style": "italic" })}"> &lt;!-- index.vue --&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">script</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"> setup</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}">import</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> {</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"> TooltipContent</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">,</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"> TooltipProvider</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">,</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"> TooltipRoot</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">,</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"> TooltipTrigger</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> }</span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"> from</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> &#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">radix-vue</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">script</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">  &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">TooltipRoot</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">    &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">TooltipTrigger</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}">…</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">TooltipTrigger</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">    &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">TooltipPortal</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line highlighted"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">      &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">TooltipContent</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"> class</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">TooltipContent</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> :</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}">side-offset</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}">5</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#BABED8" })}">        …</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">      &lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">TooltipContent</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">    &lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">TooltipPortal</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">  &lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">TooltipRoot</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span></code></pre></div><div title="css" class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#676E95", "font-style": "italic" })}">/* styles.css */</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">.</span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}">TooltipContent</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> {</span></span>
<span class="line highlighted"><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}">  width</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"> var</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">(</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}">--radix-tooltip-trigger-width</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">);</span></span>
<span class="line highlighted"><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}">  max-height</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"> var</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">(</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}">--radix-tooltip-content-available-height</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">);</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">}</span></span></code></pre></div><h3 id="origin-aware-animations" tabindex="-1">Origin-aware animations <a class="header-anchor" href="#origin-aware-animations" aria-label="Permalink to &quot;Origin-aware animations&quot;">​</a></h3><p>We expose a CSS custom property <code>--radix-tooltip-content-transform-origin</code>. Use it to animate the content from its computed origin based on <code>side</code>, <code>sideOffset</code>, <code>align</code>, <code>alignOffset</code> and any collisions.</p><div title="vue" class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#676E95", "font-style": "italic" })}"> &lt;!-- index.vue --&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">script</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"> setup</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}">import</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> {</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"> TooltipContent</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">,</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"> TooltipProvider</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">,</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"> TooltipRoot</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">,</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"> TooltipTrigger</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> }</span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"> from</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> &#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">radix-vue</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">script</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">  &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">TooltipRoot</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">    &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">TooltipTrigger</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}">…</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">TooltipTrigger</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line highlighted"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">    &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">TooltipContent</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"> class</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">TooltipContent</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#BABED8" })}">      …</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">    &lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">TooltipContent</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">  &lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">TooltipRoot</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span></code></pre></div><div title="css" class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#676E95", "font-style": "italic" })}">/* styles.css */</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">.</span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}">TooltipContent</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> {</span></span>
<span class="line highlighted"><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}">  transform-origin</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"> var</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">(</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}">--radix-tooltip-content-transform-origin</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">);</span></span>
<span class="line highlighted"><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}">  animation</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"> scaleIn </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}">0.5s</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"> ease-out</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">}</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}">@keyframes</span><span style="${ssrRenderStyle({ "color": "#BABED8", "font-style": "italic" })}"> scaleIn</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}">  from</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}">    opacity</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"> 0</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}">    transform</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"> scale</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">(</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}">0</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">);</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">  }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}">  to</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}">    opacity</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"> 1</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}">    transform</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"> scale</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">(</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}">1</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">);</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">  }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">}</span></span></code></pre></div><h3 id="collision-aware-animations" tabindex="-1">Collision-aware animations <a class="header-anchor" href="#collision-aware-animations" aria-label="Permalink to &quot;Collision-aware animations&quot;">​</a></h3><p>We expose <code>data-side</code> and <code>data-align</code> attributes. Their values will change at runtime to reflect collisions. Use them to create collision and direction-aware animations.</p><div title="vue" class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#676E95", "font-style": "italic" })}"> &lt;!-- index.vue --&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">script</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"> setup</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}">import</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> {</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"> TooltipContent</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">,</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"> TooltipProvider</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">,</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"> TooltipRoot</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">,</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"> TooltipTrigger</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> }</span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"> from</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> &#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">radix-vue</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">script</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">  &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">TooltipRoot</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">    &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">TooltipTrigger</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}">…</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">TooltipTrigger</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line highlighted"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">    &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">TooltipContent</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"> class</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">TooltipContent</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#BABED8" })}">      …</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">    &lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">TooltipContent</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">  &lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">TooltipRoot</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span></code></pre></div><div title="css" class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#676E95", "font-style": "italic" })}">/* styles.css */</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">.</span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}">TooltipContent</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}">  animation-duration</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"> 0.6s</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}">  animation-timing-function</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"> cubic-bezier</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">(</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}">0.16</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">,</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"> 1</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">,</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"> 0.3</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">,</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"> 1</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">);</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">}</span></span>
<span class="line highlighted"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">.</span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}">TooltipContent</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">[</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}">data-side</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">top</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">]</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}">  animation-name</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"> slideUp</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">}</span></span>
<span class="line highlighted"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">.</span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}">TooltipContent</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">[</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}">data-side</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">bottom</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">]</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}">  animation-name</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"> slideDown</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">}</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}">@keyframes</span><span style="${ssrRenderStyle({ "color": "#BABED8", "font-style": "italic" })}"> slideDown</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}">  from</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}">    opacity</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"> 0</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}">    transform</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"> translateY</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">(</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}">-10px</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">);</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">  }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}">  to</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}">    opacity</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"> 1</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}">    transform</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"> translateY</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">(</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}">0</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">);</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">  }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">}</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}">@keyframes</span><span style="${ssrRenderStyle({ "color": "#BABED8", "font-style": "italic" })}"> slideUp</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}">  from</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}">    opacity</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"> 0</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}">    transform</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"> translateY</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">(</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}">10px</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">);</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">  }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}">  to</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}">    opacity</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"> 1</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}">    transform</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"> translateY</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">(</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}">0</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">);</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">  }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">}</span></span></code></pre></div><h2 id="accessibility" tabindex="-1">Accessibility <a class="header-anchor" href="#accessibility" aria-label="Permalink to &quot;Accessibility&quot;">​</a></h2><h3 id="keyboard-interactions" tabindex="-1">Keyboard Interactions <a class="header-anchor" href="#keyboard-interactions" aria-label="Permalink to &quot;Keyboard Interactions&quot;">​</a></h3>`);
      _push(ssrRenderComponent(_component_KeyboardTable, { data: [
        {
          keys: ["Tab"],
          description: "Opens/closes the tooltip without delay."
        },
        {
          keys: ["Space"],
          description: "If open, closes the tooltip without delay."
        },
        {
          keys: ["Enter"],
          description: "If open, closes the tooltip without delay."
        },
        {
          keys: ["Escape"],
          description: "If open, closes the tooltip without delay."
        }
      ] }, null, _parent));
      _push(`<h2 id="custom-apis" tabindex="-1">Custom APIs <a class="header-anchor" href="#custom-apis" aria-label="Permalink to &quot;Custom APIs&quot;">​</a></h2><p>Create your own API by abstracting the primitive parts into your own component.</p><h3 id="abstract-parts-and-introduce-a-content-prop" tabindex="-1">Abstract parts and introduce a content prop <a class="header-anchor" href="#abstract-parts-and-introduce-a-content-prop" aria-label="Permalink to &quot;Abstract parts and introduce a content prop&quot;">​</a></h3><p>This example abstracts all of the <code>Tooltip</code> parts and introduces a new <code>content</code> prop.</p><h4 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h4><div title="vue" class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">script</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"> setup</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"> lang</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">ts</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}">import</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> {</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"> Tooltip</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> }</span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"> from</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> &#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">./your-tooltip</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">script</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">  &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">Tooltip</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"> content</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">Tooltip content</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">    &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">button</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}">Tooltip trigger</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">button</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">  &lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">Tooltip</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span></code></pre></div><h4 id="implementation" tabindex="-1">Implementation <a class="header-anchor" href="#implementation" aria-label="Permalink to &quot;Implementation&quot;">​</a></h4><p>Use the <a href="/guides/composition.html"><code>asChild</code> prop</a> to convert the trigger part into a slottable area. It will replace the trigger with the child that gets passed to it.</p><div title="vue" class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#676E95", "font-style": "italic" })}">&lt;!-- your-tooltip.vue  --&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">script</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"> setup</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"> lang</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">ts</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}">import</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> {</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"> TooltipArrow</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">,</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"> TooltipContent</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">,</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"> TooltipRoot</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">,</span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"> type</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"> TooltipRootEmits</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">,</span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"> type</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"> TooltipRootProps</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">,</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"> TooltipTrigger</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">,</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"> useForwardPropsEmits</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> }</span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"> from</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> &#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">radix-vue</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#C792EA" })}">const</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"> props </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">=</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"> defineProps</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&lt;</span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}">TooltipRootProps</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> &amp;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> {</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"> content</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">?:</span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}"> string</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> }&gt;</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}">()</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#C792EA" })}">const</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"> emits </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">=</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"> defineEmits</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&lt;</span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}">TooltipRootEmits</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}">()</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#C792EA" })}">const</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"> forward </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">=</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"> useForwardPropsEmits</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}">(props</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">,</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"> emits)</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">script</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">  &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">TooltipRoot</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"> v-bind</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}">forward</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line highlighted"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">    &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">TooltipTrigger</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"> as-child</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line highlighted"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">      &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">slot</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> /&gt;</span></span>
<span class="line highlighted"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">    &lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">TooltipTrigger</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">    &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">TooltipContent</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"> side</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">top</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"> align</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">center</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">      {{</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"> content </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">}}</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">      &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">TooltipArrow</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> :</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}">width</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}">11</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> :</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}">height</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}">5</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> /&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">    &lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">TooltipContent</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">  &lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">TooltipRoot</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span></code></pre></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/tooltip.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
