import { useSSRContext, resolveComponent, withCtx, createTextVNode, createVNode } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./index.PizxzUMs.js";
import "./index.faJ9MUPN.js";
const __pageData = JSON.parse('{"title":"Radio Group","description":"A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time.","frontmatter":{"title":"Radio Group","description":"A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time.","name":"radio-group","aria":"https://www.w3.org/WAI/ARIA/apg/patterns/radiobutton","sidebar":true},"headers":[],"relativePath":"components/radio-group.md","filePath":"components/radio-group.md","lastUpdated":1706592413000}');
const __default__ = { name: "components/radio-group.md" };
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
      const _component_KeyboardTable = resolveComponent("KeyboardTable");
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="radiogroup" tabindex="-1">RadioGroup <a class="header-anchor" href="#radiogroup" aria-label="Permalink to &quot;RadioGroup&quot;">​</a></h1>`);
      _push(ssrRenderComponent(_component_Description, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time. `);
          } else {
            return [
              createTextVNode(" A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_ComponentPreview, {
        name: "RadioGroup",
        files: "%7B%22css%22%3A%5B%22css%2Findex.vue%22%2C%22css%2Fstyles.css%22%5D%2C%22tailwind%22%3A%5B%22tailwind%2Findex.vue%22%2C%22tailwind%2Ftailwind.config.js%22%5D%7D"
      }, {
        css: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div title="index.vue" class="language-vue"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>vue</span><pre class="shiki material-theme-palenight vp-code"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>script</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}> setup</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}> lang</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>ts</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId}>import</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> {</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}> RadioGroupIndicator</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>,</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}> RadioGroupItem</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>,</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}> RadioGroupRoot</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> }</span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId}> from</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> &#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>radix-vue</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId}>import</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> {</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}> ref</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> }</span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId}> from</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> &#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>vue</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId}>import</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> &#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>./styles.css</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>const</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}> radioStateSingle </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}> ref</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>default</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}>)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>script</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>  &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>RadioGroupRoot</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>    v-model</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}>radioStateSingle</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}> class</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>RadioGroupRoot</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}> default-value</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>default</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>    aria-label</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>View density</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>  &gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>    &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>div</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> :</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>style</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>{</span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}"${_scopeId}> display</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> &#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>flex</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>,</span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}"${_scopeId}> alignItems</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> &#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>center</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> }</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>      &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>RadioGroupItem</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>        id</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>r1</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>        class</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>RadioGroupItem</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}> value</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>default</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>      &gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>        &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>RadioGroupIndicator</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>          class</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>RadioGroupIndicator</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>        /&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>      &lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>RadioGroupItem</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>      &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>label</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}> class</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>Label</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}> for</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>r1</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}>        Default</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>      &lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>label</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>    &lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>div</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>    &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>div</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> :</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>style</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>{</span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}"${_scopeId}> display</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> &#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>flex</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>,</span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}"${_scopeId}> alignItems</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> &#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>center</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> }</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>      &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>RadioGroupItem</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>        id</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>r2</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>        class</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>RadioGroupItem</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}> value</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>comfortable</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>      &gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>        &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>RadioGroupIndicator</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>          class</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>RadioGroupIndicator</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>        /&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>      &lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>RadioGroupItem</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>      &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>label</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}> class</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>Label</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}> for</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>r2</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}>        Comfortable</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>      &lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>label</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>    &lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>div</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>    &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>div</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> :</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>style</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>{</span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}"${_scopeId}> display</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> &#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>flex</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>,</span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}"${_scopeId}> alignItems</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> &#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>center</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> }</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>      &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>RadioGroupItem</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>        id</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>r3</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>        class</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>RadioGroupItem</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}> value</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>compact</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>      &gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>        &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>RadioGroupIndicator</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>          class</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>RadioGroupIndicator</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>        /&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>      &lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>RadioGroupItem</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>      &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>label</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}> class</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>Label</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}> for</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>r3</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}>        Compact</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>      &lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>label</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>    &lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>div</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>  &lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>RadioGroupRoot</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span></span></code></pre></div><div title="styles.css" class="language-css"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>css</span><pre class="shiki material-theme-palenight vp-code"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId}>@import</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> &#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>@radix-ui/colors/black-alpha.css</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId}>@import</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> &#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>@radix-ui/colors/grass.css</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#676E95", "font-style": "italic" })}"${_scopeId}>/* reset */</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}"${_scopeId}>button</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId}>  all</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}> unset</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>}</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}"${_scopeId}>RadioGroupRoot</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId}>  display</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}> flex</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId}>  flex-direction</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}> column</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId}>  gap</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}> 10px</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>}</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}"${_scopeId}>RadioGroupItem</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId}>  background-color</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}> white</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId}>  width</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}> 25px</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId}>  height</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}> 25px</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId}>  border-radius</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}> 100%</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId}>  box-shadow</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}> 0</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}> 2px</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}> 10px</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}> var</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}>--black-a7</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>);</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>}</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}"${_scopeId}>RadioGroupItem</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>hover</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId}>  background-color</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}> var</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}>--grass-3</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>);</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>}</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}"${_scopeId}>RadioGroupItem</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>focus</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId}>  box-shadow</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}> 0</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}> 0</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}> 0</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}> 2px</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}> black</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>}</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}"${_scopeId}>RadioGroupIndicator</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId}>  display</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}> flex</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId}>  align-items</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}> center</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId}>  justify-content</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}> center</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId}>  width</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}> 100%</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId}>  height</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}> 100%</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId}>  position</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}> relative</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>}</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}"${_scopeId}>RadioGroupIndicator</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>::</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>after</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId}>  content</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> &#39;&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId}>  display</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}> block</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId}>  width</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}> 11px</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId}>  height</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}> 11px</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId}>  border-radius</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}> 50%</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId}>  background-color</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}> var</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}>--grass-11</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>);</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>}</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}"${_scopeId}>Label</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId}>  color</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}> white</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId}>  font-size</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}> 15px</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId}>  line-height</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}> 1</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId}>  padding-left</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}> 15px</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>;</span></span>
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
                      createVNode("span", { style: { "color": "#BABED8" } }, " RadioGroupIndicator"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                      createVNode("span", { style: { "color": "#BABED8" } }, " RadioGroupItem"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                      createVNode("span", { style: { "color": "#BABED8" } }, " RadioGroupRoot"),
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
                      createVNode("span", { style: { "color": "#89DDFF" } }, " '"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "./styles.css"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                      createVNode("span", { style: { "color": "#BABED8" } }, " radioStateSingle "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#82AAFF" } }, " ref"),
                      createVNode("span", { style: { "color": "#BABED8" } }, "("),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "default"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#BABED8" } }, ")")
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
                      createVNode("span", { style: { "color": "#F07178" } }, "RadioGroupRoot")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#C792EA" } }, "    v-model"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#BABED8" } }, "radioStateSingle"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C792EA" } }, " class"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "RadioGroupRoot"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C792EA" } }, " default-value"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "default"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#C792EA" } }, "    aria-label"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "View density"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "  >")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "    <"),
                      createVNode("span", { style: { "color": "#F07178" } }, "div"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " :"),
                      createVNode("span", { style: { "color": "#C792EA" } }, "style"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "{"),
                      createVNode("span", { style: { "color": "#FFCB6B" } }, " display"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " '"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "flex"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                      createVNode("span", { style: { "color": "#FFCB6B" } }, " alignItems"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " '"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "center"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " }"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "      <"),
                      createVNode("span", { style: { "color": "#F07178" } }, "RadioGroupItem")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#C792EA" } }, "        id"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "r1"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#C792EA" } }, "        class"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "RadioGroupItem"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C792EA" } }, " value"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "default"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "      >")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "        <"),
                      createVNode("span", { style: { "color": "#F07178" } }, "RadioGroupIndicator")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#C792EA" } }, "          class"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "RadioGroupIndicator"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "        />")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "      </"),
                      createVNode("span", { style: { "color": "#F07178" } }, "RadioGroupItem"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "      <"),
                      createVNode("span", { style: { "color": "#F07178" } }, "label"),
                      createVNode("span", { style: { "color": "#C792EA" } }, " class"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "Label"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C792EA" } }, " for"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "r1"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#BABED8" } }, "        Default")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "      </"),
                      createVNode("span", { style: { "color": "#F07178" } }, "label"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "    </"),
                      createVNode("span", { style: { "color": "#F07178" } }, "div"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "    <"),
                      createVNode("span", { style: { "color": "#F07178" } }, "div"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " :"),
                      createVNode("span", { style: { "color": "#C792EA" } }, "style"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "{"),
                      createVNode("span", { style: { "color": "#FFCB6B" } }, " display"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " '"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "flex"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                      createVNode("span", { style: { "color": "#FFCB6B" } }, " alignItems"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " '"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "center"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " }"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "      <"),
                      createVNode("span", { style: { "color": "#F07178" } }, "RadioGroupItem")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#C792EA" } }, "        id"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "r2"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#C792EA" } }, "        class"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "RadioGroupItem"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C792EA" } }, " value"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "comfortable"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "      >")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "        <"),
                      createVNode("span", { style: { "color": "#F07178" } }, "RadioGroupIndicator")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#C792EA" } }, "          class"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "RadioGroupIndicator"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "        />")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "      </"),
                      createVNode("span", { style: { "color": "#F07178" } }, "RadioGroupItem"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "      <"),
                      createVNode("span", { style: { "color": "#F07178" } }, "label"),
                      createVNode("span", { style: { "color": "#C792EA" } }, " class"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "Label"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C792EA" } }, " for"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "r2"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#BABED8" } }, "        Comfortable")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "      </"),
                      createVNode("span", { style: { "color": "#F07178" } }, "label"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "    </"),
                      createVNode("span", { style: { "color": "#F07178" } }, "div"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "    <"),
                      createVNode("span", { style: { "color": "#F07178" } }, "div"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " :"),
                      createVNode("span", { style: { "color": "#C792EA" } }, "style"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "{"),
                      createVNode("span", { style: { "color": "#FFCB6B" } }, " display"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " '"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "flex"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                      createVNode("span", { style: { "color": "#FFCB6B" } }, " alignItems"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " '"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "center"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " }"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "      <"),
                      createVNode("span", { style: { "color": "#F07178" } }, "RadioGroupItem")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#C792EA" } }, "        id"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "r3"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#C792EA" } }, "        class"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "RadioGroupItem"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C792EA" } }, " value"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "compact"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "      >")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "        <"),
                      createVNode("span", { style: { "color": "#F07178" } }, "RadioGroupIndicator")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#C792EA" } }, "          class"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "RadioGroupIndicator"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "        />")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "      </"),
                      createVNode("span", { style: { "color": "#F07178" } }, "RadioGroupItem"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "      <"),
                      createVNode("span", { style: { "color": "#F07178" } }, "label"),
                      createVNode("span", { style: { "color": "#C792EA" } }, " class"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "Label"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C792EA" } }, " for"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "r3"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#BABED8" } }, "        Compact")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "      </"),
                      createVNode("span", { style: { "color": "#F07178" } }, "label"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "    </"),
                      createVNode("span", { style: { "color": "#F07178" } }, "div"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "  </"),
                      createVNode("span", { style: { "color": "#F07178" } }, "RadioGroupRoot"),
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
                      createVNode("span", { style: { "color": "#FFCB6B" } }, "RadioGroupRoot"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " {")
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
                      createVNode("span", { style: { "color": "#B2CCD6" } }, "  flex-direction"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#BABED8" } }, " column"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#B2CCD6" } }, "  gap"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#F78C6C" } }, " 10px"),
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
                      createVNode("span", { style: { "color": "#FFCB6B" } }, "RadioGroupItem"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " {")
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
                      createVNode("span", { style: { "color": "#B2CCD6" } }, "  width"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#F78C6C" } }, " 25px"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#B2CCD6" } }, "  height"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#F78C6C" } }, " 25px"),
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
                      createVNode("span", { style: { "color": "#FFCB6B" } }, "RadioGroupItem"),
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
                      createVNode("span", { style: { "color": "#FFCB6B" } }, "RadioGroupItem"),
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
                      createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                      createVNode("span", { style: { "color": "#FFCB6B" } }, "RadioGroupIndicator"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " {")
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
                      createVNode("span", { style: { "color": "#B2CCD6" } }, "  justify-content"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#BABED8" } }, " center"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#B2CCD6" } }, "  width"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#F78C6C" } }, " 100%"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#B2CCD6" } }, "  height"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#F78C6C" } }, " 100%"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#B2CCD6" } }, "  position"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#BABED8" } }, " relative"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                      createVNode("span", { style: { "color": "#FFCB6B" } }, "RadioGroupIndicator"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "::"),
                      createVNode("span", { style: { "color": "#C792EA" } }, "after"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " {")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#B2CCD6" } }, "  content"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " ''"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#B2CCD6" } }, "  display"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#BABED8" } }, " block"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#B2CCD6" } }, "  width"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#F78C6C" } }, " 11px"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#B2CCD6" } }, "  height"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#F78C6C" } }, " 11px"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#B2CCD6" } }, "  border-radius"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#F78C6C" } }, " 50%"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#B2CCD6" } }, "  background-color"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#82AAFF" } }, " var"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "("),
                      createVNode("span", { style: { "color": "#BABED8" } }, "--grass-11"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ");")
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
                      createVNode("span", { style: { "color": "#FFCB6B" } }, "Label"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " {")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#B2CCD6" } }, "  color"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#BABED8" } }, " white"),
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
                      createVNode("span", { style: { "color": "#B2CCD6" } }, "  padding-left"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#F78C6C" } }, " 15px"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ";")
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
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId}>import</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> {</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}> RadioGroupIndicator</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>,</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}> RadioGroupItem</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>,</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}> RadioGroupRoot</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> }</span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId}> from</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> &#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>radix-vue</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId}>import</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> {</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}> ref</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> }</span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId}> from</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> &#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>vue</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>const</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}> radioStateSingle </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}> ref</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>default</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}>)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>script</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>  &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>RadioGroupRoot</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>    v-model</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}>radioStateSingle</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}> class</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>flex flex-col gap-2.5</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}> default-value</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>default</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>    aria-label</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>View density</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>  &gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>    &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>div</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}> class</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>flex items-center</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>      &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>RadioGroupItem</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>        id</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>r1</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>        class</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>bg-white w-[25px] h-[25px] rounded-full shadow-[0_2px_10px] shadow-blackA7 hover:bg-green3 focus:shadow-[0_0_0_2px] focus:shadow-black outline-none cursor-default</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}> value</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>default</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>      &gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>        &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>RadioGroupIndicator</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>          class</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>flex items-center justify-center w-full h-full relative after:content-[&#39;&#39;] after:block after:w-[11px] after:h-[11px] after:rounded-[50%] after:bg-grass11</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>        /&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>      &lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>RadioGroupItem</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>      &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>label</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}> class</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>text-white text-[15px] leading-none pl-[15px]</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}> for</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>r1</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}>        Default</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>      &lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>label</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>    &lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>div</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>    &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>div</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}> class</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>flex items-center</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>      &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>RadioGroupItem</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>        id</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>r2</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>        class</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>bg-white w-[25px] h-[25px] rounded-full shadow-[0_2px_10px] shadow-blackA7 hover:bg-green3 focus:shadow-[0_0_0_2px] focus:shadow-black outline-none cursor-default</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}> value</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>comfortable</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>      &gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>        &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>RadioGroupIndicator</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>          class</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>flex items-center justify-center w-full h-full relative after:content-[&#39;&#39;] after:block after:w-[11px] after:h-[11px] after:rounded-[50%] after:bg-grass11</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>        /&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>      &lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>RadioGroupItem</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>      &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>label</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}> class</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>text-white text-[15px] leading-none pl-[15px]</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}> for</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>r2</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}>        Comfortable</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>      &lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>label</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>    &lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>div</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>    &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>div</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}> class</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>flex items-center</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>      &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>RadioGroupItem</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>        id</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>r3</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>        class</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>bg-white w-[25px] h-[25px] rounded-full shadow-[0_2px_10px] shadow-blackA7 hover:bg-green3 focus:shadow-[0_0_0_2px] focus:shadow-black outline-none cursor-default</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}> value</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>compact</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>      &gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>        &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>RadioGroupIndicator</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>          class</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>flex items-center justify-center w-full h-full relative after:content-[&#39;&#39;] after:block after:w-[11px] after:h-[11px] after:rounded-[50%] after:bg-grass11</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>        /&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>      &lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>RadioGroupItem</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>      &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>label</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}> class</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>text-white text-[15px] leading-none pl-[15px]</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}> for</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>r3</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}>        Compact</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>      &lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>label</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>    &lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>div</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>  &lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>RadioGroupRoot</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span></span>
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
                      createVNode("span", { style: { "color": "#BABED8" } }, " RadioGroupIndicator"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                      createVNode("span", { style: { "color": "#BABED8" } }, " RadioGroupItem"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                      createVNode("span", { style: { "color": "#BABED8" } }, " RadioGroupRoot"),
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
                      createVNode("span", { style: { "color": "#BABED8" } }, " ref"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " }"),
                      createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, " from"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " '"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "vue"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                      createVNode("span", { style: { "color": "#BABED8" } }, " radioStateSingle "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#82AAFF" } }, " ref"),
                      createVNode("span", { style: { "color": "#BABED8" } }, "("),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "default"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#BABED8" } }, ")")
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
                      createVNode("span", { style: { "color": "#F07178" } }, "RadioGroupRoot")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#C792EA" } }, "    v-model"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#BABED8" } }, "radioStateSingle"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C792EA" } }, " class"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "flex flex-col gap-2.5"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C792EA" } }, " default-value"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "default"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#C792EA" } }, "    aria-label"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "View density"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "  >")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "    <"),
                      createVNode("span", { style: { "color": "#F07178" } }, "div"),
                      createVNode("span", { style: { "color": "#C792EA" } }, " class"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "flex items-center"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "      <"),
                      createVNode("span", { style: { "color": "#F07178" } }, "RadioGroupItem")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#C792EA" } }, "        id"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "r1"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#C792EA" } }, "        class"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "bg-white w-[25px] h-[25px] rounded-full shadow-[0_2px_10px] shadow-blackA7 hover:bg-green3 focus:shadow-[0_0_0_2px] focus:shadow-black outline-none cursor-default"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C792EA" } }, " value"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "default"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "      >")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "        <"),
                      createVNode("span", { style: { "color": "#F07178" } }, "RadioGroupIndicator")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#C792EA" } }, "          class"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[11px] after:h-[11px] after:rounded-[50%] after:bg-grass11"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "        />")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "      </"),
                      createVNode("span", { style: { "color": "#F07178" } }, "RadioGroupItem"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "      <"),
                      createVNode("span", { style: { "color": "#F07178" } }, "label"),
                      createVNode("span", { style: { "color": "#C792EA" } }, " class"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "text-white text-[15px] leading-none pl-[15px]"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C792EA" } }, " for"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "r1"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#BABED8" } }, "        Default")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "      </"),
                      createVNode("span", { style: { "color": "#F07178" } }, "label"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "    </"),
                      createVNode("span", { style: { "color": "#F07178" } }, "div"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "    <"),
                      createVNode("span", { style: { "color": "#F07178" } }, "div"),
                      createVNode("span", { style: { "color": "#C792EA" } }, " class"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "flex items-center"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "      <"),
                      createVNode("span", { style: { "color": "#F07178" } }, "RadioGroupItem")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#C792EA" } }, "        id"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "r2"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#C792EA" } }, "        class"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "bg-white w-[25px] h-[25px] rounded-full shadow-[0_2px_10px] shadow-blackA7 hover:bg-green3 focus:shadow-[0_0_0_2px] focus:shadow-black outline-none cursor-default"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C792EA" } }, " value"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "comfortable"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "      >")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "        <"),
                      createVNode("span", { style: { "color": "#F07178" } }, "RadioGroupIndicator")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#C792EA" } }, "          class"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[11px] after:h-[11px] after:rounded-[50%] after:bg-grass11"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "        />")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "      </"),
                      createVNode("span", { style: { "color": "#F07178" } }, "RadioGroupItem"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "      <"),
                      createVNode("span", { style: { "color": "#F07178" } }, "label"),
                      createVNode("span", { style: { "color": "#C792EA" } }, " class"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "text-white text-[15px] leading-none pl-[15px]"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C792EA" } }, " for"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "r2"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#BABED8" } }, "        Comfortable")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "      </"),
                      createVNode("span", { style: { "color": "#F07178" } }, "label"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "    </"),
                      createVNode("span", { style: { "color": "#F07178" } }, "div"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "    <"),
                      createVNode("span", { style: { "color": "#F07178" } }, "div"),
                      createVNode("span", { style: { "color": "#C792EA" } }, " class"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "flex items-center"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "      <"),
                      createVNode("span", { style: { "color": "#F07178" } }, "RadioGroupItem")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#C792EA" } }, "        id"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "r3"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#C792EA" } }, "        class"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "bg-white w-[25px] h-[25px] rounded-full shadow-[0_2px_10px] shadow-blackA7 hover:bg-green3 focus:shadow-[0_0_0_2px] focus:shadow-black outline-none cursor-default"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C792EA" } }, " value"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "compact"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "      >")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "        <"),
                      createVNode("span", { style: { "color": "#F07178" } }, "RadioGroupIndicator")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#C792EA" } }, "          class"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[11px] after:h-[11px] after:rounded-[50%] after:bg-grass11"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "        />")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "      </"),
                      createVNode("span", { style: { "color": "#F07178" } }, "RadioGroupItem"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "      <"),
                      createVNode("span", { style: { "color": "#F07178" } }, "label"),
                      createVNode("span", { style: { "color": "#C792EA" } }, " class"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "text-white text-[15px] leading-none pl-[15px]"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C792EA" } }, " for"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "r3"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#BABED8" } }, "        Compact")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "      </"),
                      createVNode("span", { style: { "color": "#F07178" } }, "label"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "    </"),
                      createVNode("span", { style: { "color": "#F07178" } }, "div"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "  </"),
                      createVNode("span", { style: { "color": "#F07178" } }, "RadioGroupRoot"),
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
        "Supports horizontal/vertical orientation.",
        "Can be controlled or uncontrolled."
      ] }, null, _parent));
      _push(`<h2 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-label="Permalink to &quot;Installation&quot;">​</a></h2><p>Install the component from your command line.</p><div title="bash" class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}">npm</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"> install radix-vue</span></span></code></pre></div><h2 id="anatomy" tabindex="-1">Anatomy <a class="header-anchor" href="#anatomy" aria-label="Permalink to &quot;Anatomy&quot;">​</a></h2><p>Import all parts and piece them together.</p><div title="vue" class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">script</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"> setup</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}">import</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> {</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"> RadioGroupIndicator</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">,</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"> RadioGroupItem</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">,</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"> RadioGroupRoot</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> }</span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"> from</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> &#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">radix-vue</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">script</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">  &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">RadioGroupRoot</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">    &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">RadioGroupItem</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">      &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">RadioGroupIndicator</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> /&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">    &lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">RadioGroupItem</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">  &lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">RadioGroupRoot</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span></code></pre></div><h2 id="api-reference" tabindex="-1">API Reference <a class="header-anchor" href="#api-reference" aria-label="Permalink to &quot;API Reference&quot;">​</a></h2><h3 id="root" tabindex="-1">Root <a class="header-anchor" href="#root" aria-label="Permalink to &quot;Root&quot;">​</a></h3><p>Contains all the parts of a radio group.</p>`);
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
          "description": "<p>The value of the radio item that should be checked when initially rendered.</p>\n<p>Use when you do not need to control the state of the radio items.</p>\n",
          "type": "string",
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
          "description": "<p>When <code>true</code>, prevents the user from interacting with radio items.</p>\n",
          "type": "boolean",
          "required": false,
          "default": "false"
        },
        {
          "name": "loop",
          "description": "<p>When <code>true</code>, keyboard navigation will loop from last item to first, and vice versa.</p>\n",
          "type": "boolean",
          "required": false,
          "default": "true"
        },
        {
          "name": "modelValue",
          "description": "<p>The controlled value of the radio item to check. Can be binded as <code>v-model</code>.</p>\n",
          "type": "string",
          "required": false
        },
        {
          "name": "name",
          "description": "<p>The name of the group. Submitted with its owning form as part of a name/value pair.</p>\n",
          "type": "string",
          "required": false
        },
        {
          "name": "orientation",
          "description": "<p>The orientation of the component.</p>\n",
          "type": "'vertical' | 'horizontal'",
          "required": false
        },
        {
          "name": "required",
          "description": "<p>When <code>true</code>, indicates that the user must check a radio item before the owning form can be submitted.</p>\n",
          "type": "boolean",
          "required": false,
          "default": "false"
        }
      ] }, null, _parent));
      _push(ssrRenderComponent(_component_EmitsTable, { data: [
        {
          "name": "update:modelValue",
          "description": "<p>Event handler called when the radio group value changes</p>\n",
          "type": "[payload: string]"
        }
      ] }, null, _parent));
      _push(ssrRenderComponent(_component_DataAttributesTable, { data: [
        {
          attribute: "[data-disabled]",
          values: "Present when disabled"
        }
      ] }, null, _parent));
      _push(`<h3 id="item" tabindex="-1">Item <a class="header-anchor" href="#item" aria-label="Permalink to &quot;Item&quot;">​</a></h3><p>An item in the group that can be checked. An <code>input</code> will also render when used within a <code>form</code> to ensure events propagate correctly.</p>`);
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
        },
        {
          "name": "disabled",
          "description": "<p>When <code>true</code>, prevents the user from interacting with the radio item.</p>\n",
          "type": "boolean",
          "required": false,
          "default": "false"
        },
        {
          "name": "id",
          "description": "",
          "type": "string",
          "required": false
        },
        {
          "name": "name",
          "description": "",
          "type": "string",
          "required": false
        },
        {
          "name": "required",
          "description": "<p>When <code>true</code>, indicates that the user must check the radio item before the owning form can be submitted.</p>\n",
          "type": "boolean",
          "required": false
        },
        {
          "name": "value",
          "description": "<p>The value given as data when submitted with a <code>name</code>.</p>\n",
          "type": "string",
          "required": false
        }
      ] }, null, _parent));
      _push(ssrRenderComponent(_component_DataAttributesTable, { data: [
        {
          attribute: "[data-state]",
          values: ["checked", "unchecked"]
        },
        {
          attribute: "[data-disabled]",
          values: "Present when disabled"
        }
      ] }, null, _parent));
      _push(`<h3 id="indicator" tabindex="-1">Indicator <a class="header-anchor" href="#indicator" aria-label="Permalink to &quot;Indicator&quot;">​</a></h3><p>Renders when the radio item is in a checked state. You can style this element directly, or you can use it as a wrapper to put an icon into, or both.</p>`);
      _push(ssrRenderComponent(_component_PropsTable, { data: [
        {
          "name": "as",
          "description": "<p>The element or component this component should render as. Can be overwrite by <code>asChild</code></p>\n",
          "type": "AsTag | Component",
          "required": false,
          "default": "'span'"
        },
        {
          "name": "asChild",
          "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\n<p>Read our <a href='https://www.radix-vue.com/guides/composition.html'>Composition</a> guide for more details.</p>\n",
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
      _push(ssrRenderComponent(_component_DataAttributesTable, { data: [
        {
          attribute: "[data-state]",
          values: ["checked", "unchecked"]
        },
        {
          attribute: "[data-disabled]",
          values: "Present when disabled"
        }
      ] }, null, _parent));
      _push(`<h2 id="accessibility" tabindex="-1">Accessibility <a class="header-anchor" href="#accessibility" aria-label="Permalink to &quot;Accessibility&quot;">​</a></h2><p>Adheres to the <a href="https://www.w3.org/WAI/ARIA/apg/patterns/radiobutton" target="_blank" rel="noreferrer">Radio Group WAI-ARIA design pattern</a> and uses <a href="https://www.w3.org/TR/wai-aria-practices-1.2/examples/radio/radio.html" target="_blank" rel="noreferrer">roving tabindex</a> to manage focus movement among radio items.</p><h3 id="keyboard-interactions" tabindex="-1">Keyboard Interactions <a class="header-anchor" href="#keyboard-interactions" aria-label="Permalink to &quot;Keyboard Interactions&quot;">​</a></h3>`);
      _push(ssrRenderComponent(_component_KeyboardTable, { data: [
        {
          keys: ["Tab"],
          description: "Moves focus to either the checked radio item or the first radio item in the group."
        },
        {
          keys: ["Space"],
          description: "When focus is on an unchecked radio item, checks it."
        },
        {
          keys: ["ArrowDown"],
          description: "Moves focus and checks the next radio item in the group."
        },
        {
          keys: ["ArrowRight"],
          description: "Moves focus and checks the next radio item in the group."
        },
        {
          keys: ["ArrowUp"],
          description: "Moves focus to the previous radio item in the group."
        },
        {
          keys: ["ArrowLeft"],
          description: "Moves focus to the previous radio item in the group."
        }
      ] }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/radio-group.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
