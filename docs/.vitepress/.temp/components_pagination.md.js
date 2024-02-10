import { useSSRContext, resolveComponent, withCtx, createTextVNode, createVNode } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./index.SkyMgy3T.js";
import "@iconify/vue";
import "./index.faJ9MUPN.js";
const __pageData = JSON.parse('{"title":"Pagination","description":"Displays data in paged format and provides navigation between pages.","frontmatter":{"title":"Pagination","description":"Displays data in paged format and provides navigation between pages.","name":"pagination","sidebar":true},"headers":[],"relativePath":"components/pagination.md","filePath":"components/pagination.md","lastUpdated":1706592413000}');
const __default__ = { name: "components/pagination.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Description = resolveComponent("Description");
      const _component_ComponentPreview = resolveComponent("ComponentPreview");
      const _component_Highlights = resolveComponent("Highlights");
      const _component_PropsTable = resolveComponent("PropsTable");
      const _component_EmitsTable = resolveComponent("EmitsTable");
      const _component_SlotsTable = resolveComponent("SlotsTable");
      const _component_DataAttributesTable = resolveComponent("DataAttributesTable");
      const _component_KeyboardTable = resolveComponent("KeyboardTable");
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="pagination" tabindex="-1">Pagination <a class="header-anchor" href="#pagination" aria-label="Permalink to &quot;Pagination&quot;">​</a></h1>`);
      _push(ssrRenderComponent(_component_Description, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Displays data in paged format and provides navigation between pages. `);
          } else {
            return [
              createTextVNode(" Displays data in paged format and provides navigation between pages. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_ComponentPreview, {
        name: "Pagination",
        files: "%7B%22css%22%3A%5B%22css%2Findex.vue%22%2C%22css%2Fstyles.css%22%5D%2C%22tailwind%22%3A%5B%22tailwind%2Findex.vue%22%2C%22tailwind%2Ftailwind.config.js%22%5D%7D"
      }, {
        css: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div title="index.vue" class="language-vue"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>vue</span><pre class="shiki material-theme-palenight vp-code"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>script</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}> setup</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}> lang</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>ts</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId}>import</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> {</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}> Icon</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> }</span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId}> from</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> &#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>@iconify/vue</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId}>import</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> {</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}> PaginationEllipsis</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>,</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}> PaginationFirst</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>,</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}> PaginationLast</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>,</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}> PaginationList</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>,</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}> PaginationListItem</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>,</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}> PaginationNext</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>,</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}> PaginationPrev</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>,</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}> PaginationRoot</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> }</span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId}> from</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> &#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>radix-vue</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId}>import</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> &#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>./styles.css</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>script</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>  &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>PaginationRoot</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> :</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>total</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>100</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> :</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>sibling-count</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>1</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}> show-edges</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> :</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>default-page</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>2</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>    &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>PaginationList</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}> v-slot</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>{</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}> items</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> }</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}> class</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>PaginationList</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>      &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>PaginationFirst</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}> class</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>Button</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>        &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>Icon</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}> icon</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>radix-icons:double-arrow-left</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> /&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>      &lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>PaginationFirst</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>      &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>PaginationPrev</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> :</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>style</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>{</span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}"${_scopeId}> marginRight</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}> 16</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> }</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}> class</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>Button</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>        &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>Icon</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}> icon</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>radix-icons:chevron-left</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> /&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>      &lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>PaginationPrev</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>      &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>template</span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId}> v-for</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}>(page</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>,</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}> index) </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>in</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}> items</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>        &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>PaginationListItem</span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId}> v-if</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}>page</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}>type</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> === </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>page</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> :</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>key</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}>index</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}> class</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>Button</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> :</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>value</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}>page</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}>value</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>          {{</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}> page</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}>value </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>}}</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>        &lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>PaginationListItem</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>        &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>PaginationEllipsis</span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId}> v-else</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> :</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>key</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}>page</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}>type</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> :</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>index</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}>index</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}> class</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>PaginationEllipsis</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}>          &amp;#8230;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>        &lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>PaginationEllipsis</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>      &lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>      &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>PaginationNext</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> :</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>style</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>{</span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}"${_scopeId}> marginLeft</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}> 16</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> }</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}> class</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>Button</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>        &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>Icon</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}> icon</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>radix-icons:chevron-right</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> /&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>      &lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>PaginationNext</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>      &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>PaginationLast</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}> class</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>Button</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>        &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>Icon</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}> icon</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>radix-icons:double-arrow-right</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> /&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>      &lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>PaginationLast</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>    &lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>PaginationList</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>  &lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>PaginationRoot</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span></span></code></pre></div><div title="styles.css" class="language-css"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>css</span><pre class="shiki material-theme-palenight vp-code"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId}>@import</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> &#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>@radix-ui/colors/black-alpha.css</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId}>@import</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> &#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>@radix-ui/colors/mauve.css</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId}>@import</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> &#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>@radix-ui/colors/grass.css</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#676E95", "font-style": "italic" })}"${_scopeId}>/* reset */</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}"${_scopeId}>button</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId}>  all</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}> unset</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>}</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}"${_scopeId}>Button</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>{</span></span>
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
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}"${_scopeId}>Button</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>disabled</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId}>  opacity</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}> .5</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>}</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}"${_scopeId}>Button</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>hover</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>{</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId}>  background-color</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}> rgb</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>255</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}> 255</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}> 255</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}> / </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>0.1</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>}</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}"${_scopeId}>Button</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>[</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>data-selected</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>]{</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}> </span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId}>  background-color</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}> rgb</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>255</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}> 255</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}> 255</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>);</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId}>  color</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}> var</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}>--black-a11</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>}</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}"${_scopeId}>PaginationEllipsis</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>{</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId}>  display</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}> flex</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId}>  height</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}> 2.25rem</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId}>  width</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}> 2.25rem</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId}>  align-items</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}> center</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId}>  justify-content</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}> center</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>}</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}"${_scopeId}>PaginationList</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>{</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId}>  display</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}> flex</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId}>  align-items</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}> center</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId}>  gap</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}> 0.25rem</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>;</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}> </span></span>
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
                      createVNode("span", { style: { "color": "#89DDFF" } }, " {"),
                      createVNode("span", { style: { "color": "#BABED8" } }, " PaginationEllipsis"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                      createVNode("span", { style: { "color": "#BABED8" } }, " PaginationFirst"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                      createVNode("span", { style: { "color": "#BABED8" } }, " PaginationLast"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                      createVNode("span", { style: { "color": "#BABED8" } }, " PaginationList"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                      createVNode("span", { style: { "color": "#BABED8" } }, " PaginationListItem"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                      createVNode("span", { style: { "color": "#BABED8" } }, " PaginationNext"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                      createVNode("span", { style: { "color": "#BABED8" } }, " PaginationPrev"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                      createVNode("span", { style: { "color": "#BABED8" } }, " PaginationRoot"),
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
                      createVNode("span", { style: { "color": "#F07178" } }, "PaginationRoot"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " :"),
                      createVNode("span", { style: { "color": "#C792EA" } }, "total"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#F78C6C" } }, "100"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " :"),
                      createVNode("span", { style: { "color": "#C792EA" } }, "sibling-count"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#F78C6C" } }, "1"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C792EA" } }, " show-edges"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " :"),
                      createVNode("span", { style: { "color": "#C792EA" } }, "default-page"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#F78C6C" } }, "2"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "    <"),
                      createVNode("span", { style: { "color": "#F07178" } }, "PaginationList"),
                      createVNode("span", { style: { "color": "#C792EA" } }, " v-slot"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "{"),
                      createVNode("span", { style: { "color": "#BABED8" } }, " items"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " }"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C792EA" } }, " class"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "PaginationList"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "      <"),
                      createVNode("span", { style: { "color": "#F07178" } }, "PaginationFirst"),
                      createVNode("span", { style: { "color": "#C792EA" } }, " class"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "Button"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "        <"),
                      createVNode("span", { style: { "color": "#F07178" } }, "Icon"),
                      createVNode("span", { style: { "color": "#C792EA" } }, " icon"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "radix-icons:double-arrow-left"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " />")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "      </"),
                      createVNode("span", { style: { "color": "#F07178" } }, "PaginationFirst"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "      <"),
                      createVNode("span", { style: { "color": "#F07178" } }, "PaginationPrev"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " :"),
                      createVNode("span", { style: { "color": "#C792EA" } }, "style"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "{"),
                      createVNode("span", { style: { "color": "#FFCB6B" } }, " marginRight"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#F78C6C" } }, " 16"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " }"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C792EA" } }, " class"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "Button"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "        <"),
                      createVNode("span", { style: { "color": "#F07178" } }, "Icon"),
                      createVNode("span", { style: { "color": "#C792EA" } }, " icon"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "radix-icons:chevron-left"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " />")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "      </"),
                      createVNode("span", { style: { "color": "#F07178" } }, "PaginationPrev"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "      <"),
                      createVNode("span", { style: { "color": "#F07178" } }, "template"),
                      createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, " v-for"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#BABED8" } }, "(page"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                      createVNode("span", { style: { "color": "#BABED8" } }, " index) "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "in"),
                      createVNode("span", { style: { "color": "#BABED8" } }, " items"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "        <"),
                      createVNode("span", { style: { "color": "#F07178" } }, "PaginationListItem"),
                      createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, " v-if"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#BABED8" } }, "page"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                      createVNode("span", { style: { "color": "#BABED8" } }, "type"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " === "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "page"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, `'"`),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " :"),
                      createVNode("span", { style: { "color": "#C792EA" } }, "key"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#BABED8" } }, "index"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C792EA" } }, " class"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "Button"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " :"),
                      createVNode("span", { style: { "color": "#C792EA" } }, "value"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#BABED8" } }, "page"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                      createVNode("span", { style: { "color": "#BABED8" } }, "value"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "          {{"),
                      createVNode("span", { style: { "color": "#BABED8" } }, " page"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                      createVNode("span", { style: { "color": "#BABED8" } }, "value "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "}}")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "        </"),
                      createVNode("span", { style: { "color": "#F07178" } }, "PaginationListItem"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "        <"),
                      createVNode("span", { style: { "color": "#F07178" } }, "PaginationEllipsis"),
                      createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, " v-else"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " :"),
                      createVNode("span", { style: { "color": "#C792EA" } }, "key"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#BABED8" } }, "page"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                      createVNode("span", { style: { "color": "#BABED8" } }, "type"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " :"),
                      createVNode("span", { style: { "color": "#C792EA" } }, "index"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#BABED8" } }, "index"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C792EA" } }, " class"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "PaginationEllipsis"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#BABED8" } }, "          &#8230;")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "        </"),
                      createVNode("span", { style: { "color": "#F07178" } }, "PaginationEllipsis"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "      </"),
                      createVNode("span", { style: { "color": "#F07178" } }, "template"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "      <"),
                      createVNode("span", { style: { "color": "#F07178" } }, "PaginationNext"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " :"),
                      createVNode("span", { style: { "color": "#C792EA" } }, "style"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "{"),
                      createVNode("span", { style: { "color": "#FFCB6B" } }, " marginLeft"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#F78C6C" } }, " 16"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " }"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C792EA" } }, " class"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "Button"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "        <"),
                      createVNode("span", { style: { "color": "#F07178" } }, "Icon"),
                      createVNode("span", { style: { "color": "#C792EA" } }, " icon"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "radix-icons:chevron-right"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " />")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "      </"),
                      createVNode("span", { style: { "color": "#F07178" } }, "PaginationNext"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "      <"),
                      createVNode("span", { style: { "color": "#F07178" } }, "PaginationLast"),
                      createVNode("span", { style: { "color": "#C792EA" } }, " class"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "Button"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "        <"),
                      createVNode("span", { style: { "color": "#F07178" } }, "Icon"),
                      createVNode("span", { style: { "color": "#C792EA" } }, " icon"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "radix-icons:double-arrow-right"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " />")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "      </"),
                      createVNode("span", { style: { "color": "#F07178" } }, "PaginationLast"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "    </"),
                      createVNode("span", { style: { "color": "#F07178" } }, "PaginationList"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "  </"),
                      createVNode("span", { style: { "color": "#F07178" } }, "PaginationRoot"),
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
                      createVNode("span", { style: { "color": "#FFCB6B" } }, "Button"),
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
                      createVNode("span", { style: { "color": "#FFCB6B" } }, "Button"),
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
                      createVNode("span", { style: { "color": "#FFCB6B" } }, "Button"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#C792EA" } }, "hover"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#B2CCD6" } }, "  background-color"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#82AAFF" } }, " rgb"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "("),
                      createVNode("span", { style: { "color": "#F78C6C" } }, "255"),
                      createVNode("span", { style: { "color": "#F78C6C" } }, " 255"),
                      createVNode("span", { style: { "color": "#F78C6C" } }, " 255"),
                      createVNode("span", { style: { "color": "#BABED8" } }, " / "),
                      createVNode("span", { style: { "color": "#F78C6C" } }, "0.1"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ")")
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
                      createVNode("span", { style: { "color": "#FFCB6B" } }, "Button"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "["),
                      createVNode("span", { style: { "color": "#C792EA" } }, "data-selected"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "]{"),
                      createVNode("span", { style: { "color": "#BABED8" } }, " ")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#B2CCD6" } }, "  background-color"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#82AAFF" } }, " rgb"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "("),
                      createVNode("span", { style: { "color": "#F78C6C" } }, "255"),
                      createVNode("span", { style: { "color": "#F78C6C" } }, " 255"),
                      createVNode("span", { style: { "color": "#F78C6C" } }, " 255"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ");")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#B2CCD6" } }, "  color"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#82AAFF" } }, " var"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "("),
                      createVNode("span", { style: { "color": "#BABED8" } }, "--black-a11"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ")")
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
                      createVNode("span", { style: { "color": "#FFCB6B" } }, "PaginationEllipsis"),
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
                      createVNode("span", { style: { "color": "#B2CCD6" } }, "  align-items"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#BABED8" } }, " center"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#B2CCD6" } }, "  justify-content"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#BABED8" } }, " center")
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
                      createVNode("span", { style: { "color": "#FFCB6B" } }, "PaginationList"),
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
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId}>import</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> {</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}> Icon</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> }</span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId}> from</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> &#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>@iconify/vue</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId}>import</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> {</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}> PaginationEllipsis</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>,</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}> PaginationFirst</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>,</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}> PaginationLast</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>,</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}> PaginationList</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>,</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}> PaginationListItem</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>,</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}> PaginationNext</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>,</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}> PaginationPrev</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>,</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}> PaginationRoot</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> }</span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId}> from</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> &#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>radix-vue</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>script</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>  &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>PaginationRoot</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> :</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>total</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>100</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> :</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>sibling-count</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>1</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}> show-edges</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> :</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>default-page</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>2</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>    &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>PaginationList</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}> v-slot</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>{</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}> items</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> }</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}> class</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>flex items-center gap-1 text-white</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>      &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>PaginationFirst</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}> class</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>w-9 h-9  flex items-center justify-center  disabled:opacity-50  focus-within:outline focus-within:outline-1 focus-within:outline-offset-1 rounded</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>        &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>Icon</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}> icon</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>radix-icons:double-arrow-left</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> /&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>      &lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>PaginationFirst</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>      &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>PaginationPrev</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}> class</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>w-9 h-9  flex items-center justify-center mr-4  disabled:opacity-50  focus-within:outline focus-within:outline-1 focus-within:outline-offset-1 rounded</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>        &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>Icon</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}> icon</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>radix-icons:chevron-left</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> /&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>      &lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>PaginationPrev</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>      &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>template</span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId}> v-for</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}>(page</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>,</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}> index) </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>in</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}> items</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>        &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>PaginationListItem</span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId}> v-if</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}>page</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}>type</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> === </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>page</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> :</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>key</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}>index</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}> class</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>w-9 h-9 border rounded  data-[selected]:bg-white data-[selected]:text-blackA11 hover:bg-white/10 transition focus-within:outline focus-within:outline-1 focus-within:outline-offset-1</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> :</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>value</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}>page</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}>value</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>          {{</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}> page</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}>value </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>}}</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>        &lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>PaginationListItem</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>        &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>PaginationEllipsis</span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId}> v-else</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> :</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>key</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}>page</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}>type</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> :</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>index</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}>index</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}> class</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>w-9 h-9 flex items-center justify-center</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}>          &amp;#8230;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>        &lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>PaginationEllipsis</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>      &lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>      &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>PaginationNext</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}> class</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>w-9 h-9  flex items-center justify-center  ml-4 disabled:opacity-50  focus-within:outline focus-within:outline-1 focus-within:outline-offset-1 rounded</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>        &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>Icon</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}> icon</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>radix-icons:chevron-right</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> /&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>      &lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>PaginationNext</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>      &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>PaginationLast</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}> class</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>w-9 h-9  flex items-center justify-center disabled:opacity-50  focus-within:outline focus-within:outline-1 focus-within:outline-offset-1 rounded</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>        &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>Icon</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}> icon</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>radix-icons:double-arrow-right</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> /&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>      &lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>PaginationLast</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>    &lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>PaginationList</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>  &lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>PaginationRoot</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span></span></code></pre></div><div title="tailwind.config.js" class="language-js"${_scopeId}><button title="Copy Code" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>js</span><pre class="shiki material-theme-palenight vp-code"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>const</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> {</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}> blackA</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>,</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}> grass </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>}</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> =</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}> require</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>@radix-ui/colors</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}>)</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#676E95", "font-style": "italic" })}"${_scopeId}>/** </span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId}>@</span><span style="${ssrRenderStyle({ "color": "#C792EA", "font-style": "italic" })}"${_scopeId}>type</span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId}> {</span><span style="${ssrRenderStyle({ "color": "#FFCB6B", "font-style": "italic" })}"${_scopeId}>import(&#39;tailwindcss&#39;).Config</span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId}>}</span><span style="${ssrRenderStyle({ "color": "#676E95", "font-style": "italic" })}"${_scopeId}> */</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>module.exports</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> =</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>  content</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}> [</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>./**/*.vue</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}>]</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>  theme</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>    extend</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>      colors</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> {</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>        ...</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId}>blackA</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>,</span></span>
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
                      createVNode("span", { style: { "color": "#89DDFF" } }, " {"),
                      createVNode("span", { style: { "color": "#BABED8" } }, " PaginationEllipsis"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                      createVNode("span", { style: { "color": "#BABED8" } }, " PaginationFirst"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                      createVNode("span", { style: { "color": "#BABED8" } }, " PaginationLast"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                      createVNode("span", { style: { "color": "#BABED8" } }, " PaginationList"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                      createVNode("span", { style: { "color": "#BABED8" } }, " PaginationListItem"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                      createVNode("span", { style: { "color": "#BABED8" } }, " PaginationNext"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                      createVNode("span", { style: { "color": "#BABED8" } }, " PaginationPrev"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                      createVNode("span", { style: { "color": "#BABED8" } }, " PaginationRoot"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " }"),
                      createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, " from"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " '"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "radix-vue"),
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
                      createVNode("span", { style: { "color": "#F07178" } }, "PaginationRoot"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " :"),
                      createVNode("span", { style: { "color": "#C792EA" } }, "total"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#F78C6C" } }, "100"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " :"),
                      createVNode("span", { style: { "color": "#C792EA" } }, "sibling-count"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#F78C6C" } }, "1"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C792EA" } }, " show-edges"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " :"),
                      createVNode("span", { style: { "color": "#C792EA" } }, "default-page"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#F78C6C" } }, "2"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "    <"),
                      createVNode("span", { style: { "color": "#F07178" } }, "PaginationList"),
                      createVNode("span", { style: { "color": "#C792EA" } }, " v-slot"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "{"),
                      createVNode("span", { style: { "color": "#BABED8" } }, " items"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " }"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C792EA" } }, " class"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "flex items-center gap-1 text-white"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "      <"),
                      createVNode("span", { style: { "color": "#F07178" } }, "PaginationFirst"),
                      createVNode("span", { style: { "color": "#C792EA" } }, " class"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "w-9 h-9  flex items-center justify-center  disabled:opacity-50  focus-within:outline focus-within:outline-1 focus-within:outline-offset-1 rounded"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "        <"),
                      createVNode("span", { style: { "color": "#F07178" } }, "Icon"),
                      createVNode("span", { style: { "color": "#C792EA" } }, " icon"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "radix-icons:double-arrow-left"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " />")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "      </"),
                      createVNode("span", { style: { "color": "#F07178" } }, "PaginationFirst"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "      <"),
                      createVNode("span", { style: { "color": "#F07178" } }, "PaginationPrev"),
                      createVNode("span", { style: { "color": "#C792EA" } }, " class"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "w-9 h-9  flex items-center justify-center mr-4  disabled:opacity-50  focus-within:outline focus-within:outline-1 focus-within:outline-offset-1 rounded"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "        <"),
                      createVNode("span", { style: { "color": "#F07178" } }, "Icon"),
                      createVNode("span", { style: { "color": "#C792EA" } }, " icon"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "radix-icons:chevron-left"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " />")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "      </"),
                      createVNode("span", { style: { "color": "#F07178" } }, "PaginationPrev"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "      <"),
                      createVNode("span", { style: { "color": "#F07178" } }, "template"),
                      createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, " v-for"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#BABED8" } }, "(page"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                      createVNode("span", { style: { "color": "#BABED8" } }, " index) "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "in"),
                      createVNode("span", { style: { "color": "#BABED8" } }, " items"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "        <"),
                      createVNode("span", { style: { "color": "#F07178" } }, "PaginationListItem"),
                      createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, " v-if"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#BABED8" } }, "page"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                      createVNode("span", { style: { "color": "#BABED8" } }, "type"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " === "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "page"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, `'"`),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " :"),
                      createVNode("span", { style: { "color": "#C792EA" } }, "key"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#BABED8" } }, "index"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C792EA" } }, " class"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "w-9 h-9 border rounded  data-[selected]:bg-white data-[selected]:text-blackA11 hover:bg-white/10 transition focus-within:outline focus-within:outline-1 focus-within:outline-offset-1"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " :"),
                      createVNode("span", { style: { "color": "#C792EA" } }, "value"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#BABED8" } }, "page"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                      createVNode("span", { style: { "color": "#BABED8" } }, "value"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "          {{"),
                      createVNode("span", { style: { "color": "#BABED8" } }, " page"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                      createVNode("span", { style: { "color": "#BABED8" } }, "value "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "}}")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "        </"),
                      createVNode("span", { style: { "color": "#F07178" } }, "PaginationListItem"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "        <"),
                      createVNode("span", { style: { "color": "#F07178" } }, "PaginationEllipsis"),
                      createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, " v-else"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " :"),
                      createVNode("span", { style: { "color": "#C792EA" } }, "key"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#BABED8" } }, "page"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                      createVNode("span", { style: { "color": "#BABED8" } }, "type"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " :"),
                      createVNode("span", { style: { "color": "#C792EA" } }, "index"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#BABED8" } }, "index"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C792EA" } }, " class"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "w-9 h-9 flex items-center justify-center"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#BABED8" } }, "          &#8230;")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "        </"),
                      createVNode("span", { style: { "color": "#F07178" } }, "PaginationEllipsis"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "      </"),
                      createVNode("span", { style: { "color": "#F07178" } }, "template"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "      <"),
                      createVNode("span", { style: { "color": "#F07178" } }, "PaginationNext"),
                      createVNode("span", { style: { "color": "#C792EA" } }, " class"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "w-9 h-9  flex items-center justify-center  ml-4 disabled:opacity-50  focus-within:outline focus-within:outline-1 focus-within:outline-offset-1 rounded"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "        <"),
                      createVNode("span", { style: { "color": "#F07178" } }, "Icon"),
                      createVNode("span", { style: { "color": "#C792EA" } }, " icon"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "radix-icons:chevron-right"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " />")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "      </"),
                      createVNode("span", { style: { "color": "#F07178" } }, "PaginationNext"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "      <"),
                      createVNode("span", { style: { "color": "#F07178" } }, "PaginationLast"),
                      createVNode("span", { style: { "color": "#C792EA" } }, " class"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "w-9 h-9  flex items-center justify-center disabled:opacity-50  focus-within:outline focus-within:outline-1 focus-within:outline-offset-1 rounded"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "        <"),
                      createVNode("span", { style: { "color": "#F07178" } }, "Icon"),
                      createVNode("span", { style: { "color": "#C792EA" } }, " icon"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "radix-icons:double-arrow-right"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, " />")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "      </"),
                      createVNode("span", { style: { "color": "#F07178" } }, "PaginationLast"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "    </"),
                      createVNode("span", { style: { "color": "#F07178" } }, "PaginationList"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "  </"),
                      createVNode("span", { style: { "color": "#F07178" } }, "PaginationRoot"),
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
        "Enable quick access to first, or last page",
        "Enable to show edges constantly, or not"
      ] }, null, _parent));
      _push(`<h2 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-label="Permalink to &quot;Installation&quot;">​</a></h2><p>Install the component from your command line.</p><div title="bash" class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}">npm</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"> install radix-vue</span></span></code></pre></div><h3 id="anatomy" tabindex="-1">Anatomy <a class="header-anchor" href="#anatomy" aria-label="Permalink to &quot;Anatomy&quot;">​</a></h3><p>Import all parts and piece them together.</p><div title="vue" class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">script</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"> setup</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}">import</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> {</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"> PaginationEllipsis</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">,</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"> PaginationFirst</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">,</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"> PaginationLast</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">,</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"> PaginationList</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">,</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"> PaginationListItem</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">,</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"> PaginationNext</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">,</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"> PaginationPrev</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">,</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"> PaginationRoot</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> }</span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"> from</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> &#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">radix-vue</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">script</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">  &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">PaginationRoot</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">    &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">PaginationList</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"> v-slot</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">{</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"> items</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> }</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">      &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">PaginationFirst</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> /&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">      &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">PaginationPrev</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> /&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">      &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">template</span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"> v-for</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}">(page</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">,</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"> index) </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">in</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"> items</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">        &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">PaginationListItem</span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"> v-if</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}">page</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">.</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}">type</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> === </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">page</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&#39;&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> :</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}">key</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}">index</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> /&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">        &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">PaginationEllipsis</span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"> v-else</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> :</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}">key</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}">page</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">.</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}">type</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> :</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}">index</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}">index</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#BABED8" })}">          &amp;#8230;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">        &lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">PaginationEllipsis</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">      &lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">      &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">PaginationNext</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> /&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">      &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">PaginationLast</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> /&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">    &lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">PaginationList</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">  &lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">PaginationRoot</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span></code></pre></div><h2 id="api-reference" tabindex="-1">API Reference <a class="header-anchor" href="#api-reference" aria-label="Permalink to &quot;API Reference&quot;">​</a></h2><h3 id="root" tabindex="-1">Root <a class="header-anchor" href="#root" aria-label="Permalink to &quot;Root&quot;">​</a></h3><p>Contains all of the paginations parts.</p>`);
      _push(ssrRenderComponent(_component_PropsTable, { data: [
        {
          "name": "as",
          "description": "<p>The element or component this component should render as. Can be overwrite by <code>asChild</code></p>\n",
          "type": "AsTag | Component",
          "required": false,
          "default": "'nav'"
        },
        {
          "name": "asChild",
          "description": "<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\n<p>Read our <a href='https://www.radix-vue.com/guides/composition.html'>Composition</a> guide for more details.</p>\n",
          "type": "boolean",
          "required": false
        },
        {
          "name": "defaultPage",
          "description": "<p>The value of the page that should be active when initially rendered.</p>\n<p>Use when you do not need to control the value state.</p>\n",
          "type": "number",
          "required": false,
          "default": "1"
        },
        {
          "name": "disabled",
          "description": "<p>When <code>true</code>, prevents the user from interacting with item</p>\n",
          "type": "boolean",
          "required": false
        },
        {
          "name": "itemsPerPage",
          "description": "<p>Number of items per page</p>\n",
          "type": "number",
          "required": false,
          "default": "10"
        },
        {
          "name": "page",
          "description": "<p>The controlled value of the current page. Can be binded as <code>v-model:page</code>.</p>\n",
          "type": "number",
          "required": false
        },
        {
          "name": "showEdges",
          "description": "<p>When <code>true</code>, always show first page, last page, and ellipsis</p>\n",
          "type": "boolean",
          "required": false,
          "default": "false"
        },
        {
          "name": "siblingCount",
          "description": "<p>Number of sibling should be shown around the current page</p>\n",
          "type": "number",
          "required": false,
          "default": "2"
        },
        {
          "name": "total",
          "description": "<p>Number of items in your list</p>\n",
          "type": "number",
          "required": false,
          "default": "0"
        }
      ] }, null, _parent));
      _push(ssrRenderComponent(_component_EmitsTable, { data: [
        {
          "name": "update:page",
          "description": "<p>Event handler called when the page value changes</p>\n",
          "type": "[value: number]"
        }
      ] }, null, _parent));
      _push(ssrRenderComponent(_component_SlotsTable, { data: [
        {
          "name": "page",
          "description": "Current page state",
          "type": "number"
        },
        {
          "name": "pageCount",
          "description": "Number of pages",
          "type": "number"
        }
      ] }, null, _parent));
      _push(`<h3 id="list" tabindex="-1">List <a class="header-anchor" href="#list" aria-label="Permalink to &quot;List&quot;">​</a></h3><p>Used to show the list of pages. It also makes pagination accessible to assistive technologies.</p>`);
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
        }
      ] }, null, _parent));
      _push(ssrRenderComponent(_component_SlotsTable, { data: [
        {
          "name": "items",
          "description": "Pages item",
          "type": "{ type: 'ellipsis'; } | { type: 'page'; value: number; }"
        }
      ] }, null, _parent));
      _push(`<h3 id="item" tabindex="-1">Item <a class="header-anchor" href="#item" aria-label="Permalink to &quot;Item&quot;">​</a></h3><p>Used to render the button that changes the current page.</p>`);
      _push(ssrRenderComponent(_component_DataAttributesTable, { data: [
        {
          attribute: "[data-selected]",
          values: ["true", ""]
        },
        {
          attribute: "[data-type]",
          values: ["page"]
        }
      ] }, null, _parent));
      _push(`<h3 id="ellipsis" tabindex="-1">Ellipsis <a class="header-anchor" href="#ellipsis" aria-label="Permalink to &quot;Ellipsis&quot;">​</a></h3><p>Placeholder element when the list is long, and only a small amount of <code>siblingCount</code> was set and <code>showEdges</code> was set to <code>true</code>.</p>`);
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
        }
      ] }, null, _parent));
      _push(ssrRenderComponent(_component_DataAttributesTable, { data: [
        {
          attribute: "[data-type]",
          values: ["ellipsis"]
        }
      ] }, null, _parent));
      _push(`<h3 id="first" tabindex="-1">First <a class="header-anchor" href="#first" aria-label="Permalink to &quot;First&quot;">​</a></h3><p>Triggers that set the page value to 1</p>`);
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
      _push(`<h3 id="prev" tabindex="-1">Prev <a class="header-anchor" href="#prev" aria-label="Permalink to &quot;Prev&quot;">​</a></h3><p>Triggers that set the page value to the previous page</p>`);
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
      _push(`<h3 id="next" tabindex="-1">Next <a class="header-anchor" href="#next" aria-label="Permalink to &quot;Next&quot;">​</a></h3><p>Triggers that set the page value to the next page</p>`);
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
      _push(`<h3 id="last" tabindex="-1">Last <a class="header-anchor" href="#last" aria-label="Permalink to &quot;Last&quot;">​</a></h3><p>Triggers that set the page value to the last page</p>`);
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
      _push(`<h2 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;Examples&quot;">​</a></h2><h3 id="with-ellipsis" tabindex="-1">With ellipsis <a class="header-anchor" href="#with-ellipsis" aria-label="Permalink to &quot;With ellipsis&quot;">​</a></h3><p>You can add <code>PaginationEllipsis</code> as a visual cue for more previous and after items.</p><div title="vue" class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">script</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"> setup</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"> lang</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">ts</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}">import</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> {</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"> PaginationEllipsis</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">,</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"> PaginationList</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">,</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"> PaginationListItem</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">,</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"> PaginationRoot</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> }</span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"> from</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> &#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">radix-vue</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">script</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">  &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">PaginationRoot</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">    &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">PaginationList</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"> v-slot</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">{</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"> items</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> }</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">      &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">template</span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"> v-for</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}">(page</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">,</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"> index) </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">in</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"> items</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">        &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">PaginationListItem</span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"> v-if</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}">page</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">.</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}">type</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> === </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">page</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&#39;&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> :</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}">key</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}">index</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> /&gt;</span></span>
<span class="line highlighted"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">        &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">PaginationEllipsis</span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"> v-else</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> :</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}">key</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}">page</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">.</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}">type</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> :</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}">index</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}">index</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line highlighted"><span style="${ssrRenderStyle({ "color": "#BABED8" })}">          &amp;#8230;</span></span>
<span class="line highlighted"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">        &lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">PaginationEllipsis</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">      &lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">    &lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">PaginationList</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">  &lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">PaginationRoot</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span></code></pre></div><h3 id="with-first-last-button" tabindex="-1">With first/last button <a class="header-anchor" href="#with-first-last-button" aria-label="Permalink to &quot;With first/last button&quot;">​</a></h3><p>You can add <code>PaginationFirst</code> to allow user to navigate to first page, or <code>PaginationLast</code> to navigate to last page.</p><div title="vue" class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">script</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"> setup</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"> lang</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">ts</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}">import</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> {</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"> PaginationFirst</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">,</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"> PaginationLast</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">,</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"> PaginationList</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">,</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"> PaginationListItem</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">,</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"> PaginationRoot</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> }</span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"> from</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> &#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">radix-vue</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">script</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">  &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">PaginationRoot</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">    &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">PaginationList</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line highlighted"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">      &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">PaginationFirst</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> /&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#BABED8" })}">      ...</span></span>
<span class="line highlighted"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">      &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">PaginationLast</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> /&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">    &lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">PaginationList</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">  &lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">PaginationRoot</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span></code></pre></div><h3 id="control-page-programmatically" tabindex="-1">Control page programmatically <a class="header-anchor" href="#control-page-programmatically" aria-label="Permalink to &quot;Control page programmatically&quot;">​</a></h3><p>You can control the current page by passing it a reactive value.</p><div title="vue" class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">script</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"> setup</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"> lang</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">ts</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}">import</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> {</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"> PaginationRoot</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> }</span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"> from</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> &#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">radix-vue</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}">import</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> {</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"> Select</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> }</span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"> from</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> &#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">./custom-select</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}">import</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> {</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"> ref</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> }</span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"> from</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> &#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">vue</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&#39;</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="${ssrRenderStyle({ "color": "#C792EA" })}">const</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"> currentPage </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">=</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"> ref</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}">(</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}">1</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}">)</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">script</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line highlighted"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">  &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">Select</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"> v-model</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}">currentPage</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> /&gt;</span></span>
<span class="line highlighted"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">  &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">PaginationRoot</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"> v-model</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}">page</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}">currentPage</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#BABED8" })}">    ...</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">  &lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">PaginationRoot</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span></code></pre></div><h2 id="keyboard-interactions" tabindex="-1">Keyboard Interactions <a class="header-anchor" href="#keyboard-interactions" aria-label="Permalink to &quot;Keyboard Interactions&quot;">​</a></h2>`);
      _push(ssrRenderComponent(_component_KeyboardTable, { data: [
        {
          keys: ["Tab"],
          description: "Moves focus to the next focusable element."
        },
        {
          keys: ["Space"],
          description: `
        <span>
          When focus is on a any trigger, trigger selected page or arrow navigation
        </span>`
        },
        {
          keys: ["Enter"],
          description: `
        <span>
          When focus is on a any trigger, trigger selected page or arrow navigation
        </span>`
        }
      ] }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pagination.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
