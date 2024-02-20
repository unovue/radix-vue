import { defineComponent, unref, withCtx, createTextVNode, createVNode, useSSRContext, resolveComponent } from "vue";
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { H as HeroContainer, a as HeroCodeGroup } from "./HeroCodeGroup.ec57TU07.js";
import { aZ as oc, a_ as nc, a$ as ac, b0 as sc, b1 as lc, b2 as rc } from "./index.faJ9MUPN.js";
import "codesandbox/lib/api/define.js";
import "@stackblitz/sdk";
import "@iconify/vue";
import "./plugin-vue_export-helper.yVxbj29m.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(oc), _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(nc), { class: "PopoverTrigger" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` More info `);
                } else {
                  return [
                    createTextVNode(" More info ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(ac), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(sc), { class: "PopoverContent" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Some more info... `);
                        _push4(ssrRenderComponent(unref(lc), null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(rc), { class: "PopoverArrow" }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createTextVNode(" Some more info... "),
                          createVNode(unref(lc)),
                          createVNode(unref(rc), { class: "PopoverArrow" })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(sc), { class: "PopoverContent" }, {
                      default: withCtx(() => [
                        createTextVNode(" Some more info... "),
                        createVNode(unref(lc)),
                        createVNode(unref(rc), { class: "PopoverArrow" })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(nc), { class: "PopoverTrigger" }, {
                default: withCtx(() => [
                  createTextVNode(" More info ")
                ]),
                _: 1
              }),
              createVNode(unref(ac), null, {
                default: withCtx(() => [
                  createVNode(unref(sc), { class: "PopoverContent" }, {
                    default: withCtx(() => [
                      createTextVNode(" Some more info... "),
                      createVNode(unref(lc)),
                      createVNode(unref(rc), { class: "PopoverArrow" })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../components/demo/GettingStarted/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __pageData = JSON.parse('{"title":"Getting started","description":"A quick tutorial to get you up and running with Radix Primitives.","frontmatter":{"title":"Getting started","description":"A quick tutorial to get you up and running with Radix Primitives.","name":"popover","sidebar":true},"headers":[],"relativePath":"overview/getting-started.md","filePath":"overview/getting-started.md","lastUpdated":1696070965000}');
const __default__ = { name: "overview/getting-started.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Description = resolveComponent("Description");
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="getting-started" tabindex="-1">Getting started <a class="header-anchor" href="#getting-started" aria-label="Permalink to &quot;Getting started&quot;">​</a></h1>`);
      _push(ssrRenderComponent(_component_Description, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` A quick tutorial to get you up and running with Radix Primitives. `);
          } else {
            return [
              createTextVNode(" A quick tutorial to get you up and running with Radix Primitives. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h2 id="implementing-a-popover" tabindex="-1">Implementing a Popover <a class="header-anchor" href="#implementing-a-popover" aria-label="Permalink to &quot;Implementing a Popover&quot;">​</a></h2><p>In this quick tutorial, we will install and style the <a href="./../components/popover.html">Popover</a> component.</p><h3 id="_1-install-the-library" tabindex="-1">1. Install the library <a class="header-anchor" href="#_1-install-the-library" aria-label="Permalink to &quot;1. Install the library&quot;">​</a></h3><p>Install the component from your command line.</p><div title="bash" class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}">npm</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"> install radix-vue</span></span></code></pre></div><h3 id="_2-import-the-parts" tabindex="-1">2. Import the parts <a class="header-anchor" href="#_2-import-the-parts" aria-label="Permalink to &quot;2. Import the parts&quot;">​</a></h3><p>Import and structure the parts.</p><div title="vue" class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#676E95", "font-style": "italic" })}">&lt;!-- Popover.vue --&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">script</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"> setup</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"> lang</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">ts</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}">import</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> {</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"> PopoverArrow</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">,</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"> PopoverClose</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">,</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"> PopoverContent</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">,</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"> PopoverPortal</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">,</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"> PopoverRoot</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">,</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"> PopoverTrigger</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> }</span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"> from</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> &#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">radix-vue</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">script</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">  &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">PopoverRoot</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">    &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">PopoverTrigger</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}">More info</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">PopoverTrigger</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">    &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">PopoverPortal</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">      &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">PopoverContent</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#BABED8" })}">        Some more info...</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">        &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">PopoverClose</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> /&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">        &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">PopoverArrow</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> /&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">      &lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">PopoverContent</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">    &lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">PopoverPortal</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">  &lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">PopoverRoot</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span></code></pre></div><h3 id="_3-add-your-styles" tabindex="-1">3. Add your styles <a class="header-anchor" href="#_3-add-your-styles" aria-label="Permalink to &quot;3. Add your styles&quot;">​</a></h3><p>Add styles where desired.</p><div title="vue" class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">  &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">PopoverRoot</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">    &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">PopoverTrigger</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"> class</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">PopoverTrigger</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#BABED8" })}">      More info</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">    &lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">PopoverTrigger</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">    &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">PopoverPortal</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">      &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">PopoverContent</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"> class</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">PopoverContent</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#BABED8" })}">        Some more info...</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">        &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">PopoverClose</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> /&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">        &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">PopoverArrow</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"> class</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">PopoverArrow</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> /&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">      &lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">PopoverContent</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">    &lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">PopoverPortal</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">  &lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">PopoverRoot</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">style</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">.</span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}">PopoverTrigger</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}">  background-color</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"> white</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}">  border-radius</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"> 4px</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">}</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">.</span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}">PopoverContent</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}">  border-radius</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"> 4px</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}">  padding</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"> 20px</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}">  width</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"> 260px</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}">  background-color</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"> white</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">}</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">.</span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}">PopoverArrow</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}">  background-color</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"> white</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">}</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">style</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span></code></pre></div><h3 id="demo" tabindex="-1">Demo <a class="header-anchor" href="#demo" aria-label="Permalink to &quot;Demo&quot;">​</a></h3><p>Here&#39;s a complete demo.</p>`);
      _push(ssrRenderComponent(HeroContainer, null, {
        codeSlot: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(HeroCodeGroup, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div filename="index.vue"${_scopeId2}><div title="index.vue" class="language-vue"${_scopeId2}><button title="Copy Code" class="copy"${_scopeId2}></button><span class="lang"${_scopeId2}>vue</span><pre class="shiki material-theme-palenight vp-code"${_scopeId2}><code${_scopeId2}><span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>script</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}> setup</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}> lang</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>ts</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId2}>import</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> {</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId2}>  PopoverArrow</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId2}>  PopoverClose</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId2}>  PopoverContent</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId2}>  PopoverPortal</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId2}>  PopoverRoot</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId2}>  PopoverTrigger</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId2}> from</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> &#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>radix-vue</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId2}>import</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> &#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>./styles.css</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>script</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>  &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>PopoverRoot</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>    &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>PopoverTrigger</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}> class</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>PopoverTrigger</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId2}>      More info</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>    &lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>PopoverTrigger</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>    &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>PopoverPortal</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>      &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>PopoverContent</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}> class</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>PopoverContent</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId2}>        Some more info...</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>        &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>PopoverClose</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> /&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>        &lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>PopoverArrow</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}> class</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>PopoverArrow</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> /&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>      &lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>PopoverContent</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>    &lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>PopoverPortal</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>  &lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>PopoverRoot</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span></code></pre></div></div><div filename="styles.css"${_scopeId2}><div title="styles.css" class="language-css"${_scopeId2}><button title="Copy Code" class="copy"${_scopeId2}></button><span class="lang"${_scopeId2}>css</span><pre class="shiki material-theme-palenight vp-code"${_scopeId2}><code${_scopeId2}><span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId2}>@import</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> &quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>@radix-ui/colors/black-alpha.css</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId2}>@import</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> &quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>@radix-ui/colors/mauve.css</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}"${_scopeId2}>@import</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> &quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>@radix-ui/colors/violet.css</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>.</span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}"${_scopeId2}>PopoverTrigger</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> {</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId2}>  display</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId2}> inline-flex</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId2}>  align-items</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId2}> center</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId2}>  justify-content</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId2}> center</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId2}>  border-radius</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}> 4px</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId2}>  padding</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}> 0</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}> 15px</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId2}>  font-size</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}> 15px</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId2}>  line-height</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}> 1</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId2}>  font-weight</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}> 500</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId2}>  height</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}> 35px</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId2}>  background-color</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId2}> white </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>!important</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId2}>  color</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}> var</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>(</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId2}>--violet-11</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>);</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId2}>  box-shadow</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}> 0</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}> 2px</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}> 10px</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}> var</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>(</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId2}>--black-a7</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>);</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>.</span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}"${_scopeId2}>PopoverTrigger</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>hover</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> {</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId2}>  background-color</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}> var</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>(</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId2}>--mauve-3</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>);</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>.</span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}"${_scopeId2}>PopoverTrigger</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>focus</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> {</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId2}>  box-shadow</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}> 0</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}> 0</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}> 0</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}> 2px</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId2}> black</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span></span>
<span class="line"${_scopeId2}></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>.</span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}"${_scopeId2}>PopoverContent</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> {</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId2}>  border-radius</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}> 4px</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId2}>  padding</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}> 20px</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId2}>  width</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}> 260px</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId2}>  font-size</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}> 15px</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId2}>  line-height</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}> 1</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId2}>  color</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}> var</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>(</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId2}>--violet-11</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>);</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId2}>  background-color</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId2}> white</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId2}>  box-shadow</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}> hsl</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>(</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>206</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}> 22%</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}> 7%</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId2}> / </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>35%</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>)</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}> 0px</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}> 10px</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}> 38px</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}> -10px</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}> hsl</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>(</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>206</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}> 22%</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}> 7%</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId2}> / </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>20%</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>)</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}> 0px</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}> 10px</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}> 20px</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}> -15px</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>.</span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}"${_scopeId2}>PopoverContent</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>focus</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> {</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId2}>  outline</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId2}> none</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId2}>  box-shadow</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}> hsl</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>(</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>206</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}> 22%</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}> 7%</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId2}> / </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>35%</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>)</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}> 0px</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}> 10px</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}> 38px</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}> -10px</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}> hsl</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>(</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>206</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}> 22%</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}> 7%</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId2}> / </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>20%</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>)</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}> 0px</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}> 10px</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}> 20px</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}> -15px</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>    0</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}> 0</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}> 0</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}> 2px</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}> var</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>(</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId2}>--violet-7</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>);</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span></span>
<span class="line"${_scopeId2}></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>.</span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}"${_scopeId2}>PopoverArrow</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> {</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId2}>  fill</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#BABED8" })}"${_scopeId2}> white</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span></span></code></pre></div></div>`);
                } else {
                  return [
                    createVNode("div", { filename: "index.vue" }, [
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
                              createVNode("span", { style: { "color": "#89DDFF" } }, " {")
                            ]),
                            createTextVNode("\n"),
                            createVNode("span", { class: "line" }, [
                              createVNode("span", { style: { "color": "#BABED8" } }, "  PopoverArrow"),
                              createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                            ]),
                            createTextVNode("\n"),
                            createVNode("span", { class: "line" }, [
                              createVNode("span", { style: { "color": "#BABED8" } }, "  PopoverClose"),
                              createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                            ]),
                            createTextVNode("\n"),
                            createVNode("span", { class: "line" }, [
                              createVNode("span", { style: { "color": "#BABED8" } }, "  PopoverContent"),
                              createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                            ]),
                            createTextVNode("\n"),
                            createVNode("span", { class: "line" }, [
                              createVNode("span", { style: { "color": "#BABED8" } }, "  PopoverPortal"),
                              createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                            ]),
                            createTextVNode("\n"),
                            createVNode("span", { class: "line" }, [
                              createVNode("span", { style: { "color": "#BABED8" } }, "  PopoverRoot"),
                              createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                            ]),
                            createTextVNode("\n"),
                            createVNode("span", { class: "line" }, [
                              createVNode("span", { style: { "color": "#BABED8" } }, "  PopoverTrigger"),
                              createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                            ]),
                            createTextVNode("\n"),
                            createVNode("span", { class: "line" }, [
                              createVNode("span", { style: { "color": "#89DDFF" } }, "}"),
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
                              createVNode("span", { style: { "color": "#F07178" } }, "PopoverRoot"),
                              createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                            ]),
                            createTextVNode("\n"),
                            createVNode("span", { class: "line" }, [
                              createVNode("span", { style: { "color": "#89DDFF" } }, "    <"),
                              createVNode("span", { style: { "color": "#F07178" } }, "PopoverTrigger"),
                              createVNode("span", { style: { "color": "#C792EA" } }, " class"),
                              createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                              createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                              createVNode("span", { style: { "color": "#C3E88D" } }, "PopoverTrigger"),
                              createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                              createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                            ]),
                            createTextVNode("\n"),
                            createVNode("span", { class: "line" }, [
                              createVNode("span", { style: { "color": "#BABED8" } }, "      More info")
                            ]),
                            createTextVNode("\n"),
                            createVNode("span", { class: "line" }, [
                              createVNode("span", { style: { "color": "#89DDFF" } }, "    </"),
                              createVNode("span", { style: { "color": "#F07178" } }, "PopoverTrigger"),
                              createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                            ]),
                            createTextVNode("\n"),
                            createVNode("span", { class: "line" }, [
                              createVNode("span", { style: { "color": "#89DDFF" } }, "    <"),
                              createVNode("span", { style: { "color": "#F07178" } }, "PopoverPortal"),
                              createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                            ]),
                            createTextVNode("\n"),
                            createVNode("span", { class: "line" }, [
                              createVNode("span", { style: { "color": "#89DDFF" } }, "      <"),
                              createVNode("span", { style: { "color": "#F07178" } }, "PopoverContent"),
                              createVNode("span", { style: { "color": "#C792EA" } }, " class"),
                              createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                              createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                              createVNode("span", { style: { "color": "#C3E88D" } }, "PopoverContent"),
                              createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                              createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                            ]),
                            createTextVNode("\n"),
                            createVNode("span", { class: "line" }, [
                              createVNode("span", { style: { "color": "#BABED8" } }, "        Some more info...")
                            ]),
                            createTextVNode("\n"),
                            createVNode("span", { class: "line" }, [
                              createVNode("span", { style: { "color": "#89DDFF" } }, "        <"),
                              createVNode("span", { style: { "color": "#F07178" } }, "PopoverClose"),
                              createVNode("span", { style: { "color": "#89DDFF" } }, " />")
                            ]),
                            createTextVNode("\n"),
                            createVNode("span", { class: "line" }, [
                              createVNode("span", { style: { "color": "#89DDFF" } }, "        <"),
                              createVNode("span", { style: { "color": "#F07178" } }, "PopoverArrow"),
                              createVNode("span", { style: { "color": "#C792EA" } }, " class"),
                              createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                              createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                              createVNode("span", { style: { "color": "#C3E88D" } }, "PopoverArrow"),
                              createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                              createVNode("span", { style: { "color": "#89DDFF" } }, " />")
                            ]),
                            createTextVNode("\n"),
                            createVNode("span", { class: "line" }, [
                              createVNode("span", { style: { "color": "#89DDFF" } }, "      </"),
                              createVNode("span", { style: { "color": "#F07178" } }, "PopoverContent"),
                              createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                            ]),
                            createTextVNode("\n"),
                            createVNode("span", { class: "line" }, [
                              createVNode("span", { style: { "color": "#89DDFF" } }, "    </"),
                              createVNode("span", { style: { "color": "#F07178" } }, "PopoverPortal"),
                              createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                            ]),
                            createTextVNode("\n"),
                            createVNode("span", { class: "line" }, [
                              createVNode("span", { style: { "color": "#89DDFF" } }, "  </"),
                              createVNode("span", { style: { "color": "#F07178" } }, "PopoverRoot"),
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
                      ])
                    ]),
                    createVNode("div", { filename: "styles.css" }, [
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
                              createVNode("span", { style: { "color": "#89DDFF" } }, ' "'),
                              createVNode("span", { style: { "color": "#C3E88D" } }, "@radix-ui/colors/black-alpha.css"),
                              createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                              createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                            ]),
                            createTextVNode("\n"),
                            createVNode("span", { class: "line" }, [
                              createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, "@import"),
                              createVNode("span", { style: { "color": "#89DDFF" } }, ' "'),
                              createVNode("span", { style: { "color": "#C3E88D" } }, "@radix-ui/colors/mauve.css"),
                              createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                              createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                            ]),
                            createTextVNode("\n"),
                            createVNode("span", { class: "line" }, [
                              createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, "@import"),
                              createVNode("span", { style: { "color": "#89DDFF" } }, ' "'),
                              createVNode("span", { style: { "color": "#C3E88D" } }, "@radix-ui/colors/violet.css"),
                              createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                              createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                            ]),
                            createTextVNode("\n"),
                            createVNode("span", { class: "line" }),
                            createTextVNode("\n"),
                            createVNode("span", { class: "line" }, [
                              createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                              createVNode("span", { style: { "color": "#FFCB6B" } }, "PopoverTrigger"),
                              createVNode("span", { style: { "color": "#89DDFF" } }, " {")
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
                              createVNode("span", { style: { "color": "#B2CCD6" } }, "  border-radius"),
                              createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                              createVNode("span", { style: { "color": "#F78C6C" } }, " 4px"),
                              createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                            ]),
                            createTextVNode("\n"),
                            createVNode("span", { class: "line" }, [
                              createVNode("span", { style: { "color": "#B2CCD6" } }, "  padding"),
                              createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                              createVNode("span", { style: { "color": "#F78C6C" } }, " 0"),
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
                              createVNode("span", { style: { "color": "#B2CCD6" } }, "  font-weight"),
                              createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                              createVNode("span", { style: { "color": "#F78C6C" } }, " 500"),
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
                              createVNode("span", { style: { "color": "#B2CCD6" } }, "  background-color"),
                              createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                              createVNode("span", { style: { "color": "#BABED8" } }, " white "),
                              createVNode("span", { style: { "color": "#F78C6C" } }, "!important"),
                              createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                            ]),
                            createTextVNode("\n"),
                            createVNode("span", { class: "line" }, [
                              createVNode("span", { style: { "color": "#B2CCD6" } }, "  color"),
                              createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                              createVNode("span", { style: { "color": "#82AAFF" } }, " var"),
                              createVNode("span", { style: { "color": "#89DDFF" } }, "("),
                              createVNode("span", { style: { "color": "#BABED8" } }, "--violet-11"),
                              createVNode("span", { style: { "color": "#89DDFF" } }, ");")
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
                              createVNode("span", { style: { "color": "#FFCB6B" } }, "PopoverTrigger"),
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
                              createVNode("span", { style: { "color": "#BABED8" } }, "--mauve-3"),
                              createVNode("span", { style: { "color": "#89DDFF" } }, ");")
                            ]),
                            createTextVNode("\n"),
                            createVNode("span", { class: "line" }, [
                              createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                            ]),
                            createTextVNode("\n"),
                            createVNode("span", { class: "line" }, [
                              createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                              createVNode("span", { style: { "color": "#FFCB6B" } }, "PopoverTrigger"),
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
                              createVNode("span", { style: { "color": "#FFCB6B" } }, "PopoverContent"),
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
                              createVNode("span", { style: { "color": "#F78C6C" } }, " 20px"),
                              createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                            ]),
                            createTextVNode("\n"),
                            createVNode("span", { class: "line" }, [
                              createVNode("span", { style: { "color": "#B2CCD6" } }, "  width"),
                              createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                              createVNode("span", { style: { "color": "#F78C6C" } }, " 260px"),
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
                              createVNode("span", { style: { "color": "#BABED8" } }, "--violet-11"),
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
                              createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                            ]),
                            createTextVNode("\n"),
                            createVNode("span", { class: "line" }, [
                              createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                              createVNode("span", { style: { "color": "#FFCB6B" } }, "PopoverContent"),
                              createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                              createVNode("span", { style: { "color": "#C792EA" } }, "focus"),
                              createVNode("span", { style: { "color": "#89DDFF" } }, " {")
                            ]),
                            createTextVNode("\n"),
                            createVNode("span", { class: "line" }, [
                              createVNode("span", { style: { "color": "#B2CCD6" } }, "  outline"),
                              createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                              createVNode("span", { style: { "color": "#BABED8" } }, " none"),
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
                              createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                            ]),
                            createTextVNode("\n"),
                            createVNode("span", { class: "line" }, [
                              createVNode("span", { style: { "color": "#F78C6C" } }, "    0"),
                              createVNode("span", { style: { "color": "#F78C6C" } }, " 0"),
                              createVNode("span", { style: { "color": "#F78C6C" } }, " 0"),
                              createVNode("span", { style: { "color": "#F78C6C" } }, " 2px"),
                              createVNode("span", { style: { "color": "#82AAFF" } }, " var"),
                              createVNode("span", { style: { "color": "#89DDFF" } }, "("),
                              createVNode("span", { style: { "color": "#BABED8" } }, "--violet-7"),
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
                              createVNode("span", { style: { "color": "#FFCB6B" } }, "PopoverArrow"),
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
                            ])
                          ])
                        ])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(HeroCodeGroup, null, {
                default: withCtx(() => [
                  createVNode("div", { filename: "index.vue" }, [
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
                            createVNode("span", { style: { "color": "#89DDFF" } }, " {")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#BABED8" } }, "  PopoverArrow"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#BABED8" } }, "  PopoverClose"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#BABED8" } }, "  PopoverContent"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#BABED8" } }, "  PopoverPortal"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#BABED8" } }, "  PopoverRoot"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#BABED8" } }, "  PopoverTrigger"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#89DDFF" } }, "}"),
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
                            createVNode("span", { style: { "color": "#F07178" } }, "PopoverRoot"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#89DDFF" } }, "    <"),
                            createVNode("span", { style: { "color": "#F07178" } }, "PopoverTrigger"),
                            createVNode("span", { style: { "color": "#C792EA" } }, " class"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                            createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                            createVNode("span", { style: { "color": "#C3E88D" } }, "PopoverTrigger"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#BABED8" } }, "      More info")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#89DDFF" } }, "    </"),
                            createVNode("span", { style: { "color": "#F07178" } }, "PopoverTrigger"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#89DDFF" } }, "    <"),
                            createVNode("span", { style: { "color": "#F07178" } }, "PopoverPortal"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#89DDFF" } }, "      <"),
                            createVNode("span", { style: { "color": "#F07178" } }, "PopoverContent"),
                            createVNode("span", { style: { "color": "#C792EA" } }, " class"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                            createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                            createVNode("span", { style: { "color": "#C3E88D" } }, "PopoverContent"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#BABED8" } }, "        Some more info...")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#89DDFF" } }, "        <"),
                            createVNode("span", { style: { "color": "#F07178" } }, "PopoverClose"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, " />")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#89DDFF" } }, "        <"),
                            createVNode("span", { style: { "color": "#F07178" } }, "PopoverArrow"),
                            createVNode("span", { style: { "color": "#C792EA" } }, " class"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                            createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                            createVNode("span", { style: { "color": "#C3E88D" } }, "PopoverArrow"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                            createVNode("span", { style: { "color": "#89DDFF" } }, " />")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#89DDFF" } }, "      </"),
                            createVNode("span", { style: { "color": "#F07178" } }, "PopoverContent"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#89DDFF" } }, "    </"),
                            createVNode("span", { style: { "color": "#F07178" } }, "PopoverPortal"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#89DDFF" } }, "  </"),
                            createVNode("span", { style: { "color": "#F07178" } }, "PopoverRoot"),
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
                    ])
                  ]),
                  createVNode("div", { filename: "styles.css" }, [
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
                            createVNode("span", { style: { "color": "#89DDFF" } }, ' "'),
                            createVNode("span", { style: { "color": "#C3E88D" } }, "@radix-ui/colors/black-alpha.css"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, "@import"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ' "'),
                            createVNode("span", { style: { "color": "#C3E88D" } }, "@radix-ui/colors/mauve.css"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#89DDFF", "font-style": "italic" } }, "@import"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ' "'),
                            createVNode("span", { style: { "color": "#C3E88D" } }, "@radix-ui/colors/violet.css"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                            createVNode("span", { style: { "color": "#FFCB6B" } }, "PopoverTrigger"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, " {")
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
                            createVNode("span", { style: { "color": "#B2CCD6" } }, "  border-radius"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                            createVNode("span", { style: { "color": "#F78C6C" } }, " 4px"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#B2CCD6" } }, "  padding"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                            createVNode("span", { style: { "color": "#F78C6C" } }, " 0"),
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
                            createVNode("span", { style: { "color": "#B2CCD6" } }, "  font-weight"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                            createVNode("span", { style: { "color": "#F78C6C" } }, " 500"),
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
                            createVNode("span", { style: { "color": "#B2CCD6" } }, "  background-color"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                            createVNode("span", { style: { "color": "#BABED8" } }, " white "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "!important"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#B2CCD6" } }, "  color"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                            createVNode("span", { style: { "color": "#82AAFF" } }, " var"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "("),
                            createVNode("span", { style: { "color": "#BABED8" } }, "--violet-11"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ");")
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
                            createVNode("span", { style: { "color": "#FFCB6B" } }, "PopoverTrigger"),
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
                            createVNode("span", { style: { "color": "#BABED8" } }, "--mauve-3"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ");")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                            createVNode("span", { style: { "color": "#FFCB6B" } }, "PopoverTrigger"),
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
                            createVNode("span", { style: { "color": "#FFCB6B" } }, "PopoverContent"),
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
                            createVNode("span", { style: { "color": "#F78C6C" } }, " 20px"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#B2CCD6" } }, "  width"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                            createVNode("span", { style: { "color": "#F78C6C" } }, " 260px"),
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
                            createVNode("span", { style: { "color": "#BABED8" } }, "--violet-11"),
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
                            createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                            createVNode("span", { style: { "color": "#FFCB6B" } }, "PopoverContent"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                            createVNode("span", { style: { "color": "#C792EA" } }, "focus"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, " {")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#B2CCD6" } }, "  outline"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                            createVNode("span", { style: { "color": "#BABED8" } }, " none"),
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
                            createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#F78C6C" } }, "    0"),
                            createVNode("span", { style: { "color": "#F78C6C" } }, " 0"),
                            createVNode("span", { style: { "color": "#F78C6C" } }, " 0"),
                            createVNode("span", { style: { "color": "#F78C6C" } }, " 2px"),
                            createVNode("span", { style: { "color": "#82AAFF" } }, " var"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "("),
                            createVNode("span", { style: { "color": "#BABED8" } }, "--violet-7"),
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
                            createVNode("span", { style: { "color": "#FFCB6B" } }, "PopoverArrow"),
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
                          ])
                        ])
                      ])
                    ])
                  ])
                ]),
                _: 1
              })
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
      _push(`<h2 id="summary" tabindex="-1">Summary <a class="header-anchor" href="#summary" aria-label="Permalink to &quot;Summary&quot;">​</a></h2><p>The steps above outline briefly what&#39;s involved in using a Radix Primitive in your application.</p><p>These components are low-level enough to give you control over how you want to wrap them. You&#39;re free to introduce your own high-level API to better suit the needs of your team and product.</p><p>In a few simple steps, we&#39;ve implemented a fully accessible Popover component, without having to worry about many of its complexities.</p><ul><li>Adheres to <a href="https://www.w3.org/WAI/ARIA/apg/patterns/dialogmodal" target="_blank" rel="noreferrer">WAI-ARIA</a> design pattern.</li><li>Can be controlled or uncontrolled.</li><li>Customize side, alignment, offsets, collision handling.</li><li>Optionally render a pointing arrow.</li><li>Focus is fully managed and customizable.</li><li>Dismissing and layering behavior is highly customizable.</li></ul></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("overview/getting-started.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
