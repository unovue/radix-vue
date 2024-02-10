import { defineComponent, unref, withCtx, renderSlot, createTextVNode, toDisplayString, createVNode, useSSRContext, ref, onMounted, mergeProps, useSlots, computed, watch, openBlock, createBlock, Fragment, renderList, resolveDynamicComponent } from "vue";
import { ssrRenderComponent, ssrRenderSlot, ssrInterpolate, ssrRenderAttrs, ssrRenderAttr, ssrRenderClass, ssrRenderList, ssrRenderVNode } from "vue/server-renderer";
import { getParameters } from "codesandbox/lib/api/define.js";
import sdk from "@stackblitz/sdk";
import { bR as dp, bS as cp, bT as pp, bU as mp, bV as fp, bW as vp, bx as Hc, by as jc, bA as zc, bB as Wc } from "./index.faJ9MUPN.js";
import { Icon } from "@iconify/vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
const __variableDynamicImportRuntimeHelper = (glob, path) => {
  const v = glob[path];
  if (v) {
    return typeof v === "function" ? v() : Promise.resolve(v);
  }
  return new Promise((_, reject) => {
    (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(reject.bind(null, new Error("Unknown variable dynamic import: " + path)));
  });
};
const version = "1.4.2";
function makeCodeSandboxParams(componentName, sources) {
  let files = {};
  files = constructFiles(componentName, sources);
  return getParameters({ files, template: "node" });
}
function makeStackblitzParams(componentName, sources) {
  const files = {};
  Object.entries(constructFiles(componentName, sources)).filter(([_, v]) => Boolean(v)).forEach(([k, v]) => {
    if (typeof v !== "string" && "content" in v)
      files[`${k}`] = typeof v.content === "object" ? JSON.stringify(v.content, null, 2) : v.content;
  });
  return sdk.openProject({
    title: `${componentName} - Radix Vue`,
    files,
    template: "node"
  }, {
    newWindow: true,
    openFile: ["src/App.vue"]
  });
}
const viteConfig = {
  "vite.config.js": {
    content: `import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
})`,
    isBinary: false
  },
  "index.html": {
    content: `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Vite + Vue + TS</title>
      </head>
      <body>
        <div id="app"></div>
        <script type="module" src="/src/main.ts"><\/script>
      </body>
    </html>
    `,
    isBinary: false
  }
};
function constructFiles(componentName, sources) {
  const dependencies = {
    "vue": "latest",
    "radix-vue": version,
    "@radix-ui/colors": "latest",
    "@iconify/vue": "latest"
  };
  const devDependencies = {
    "vite": "latest",
    "@vitejs/plugin-vue": "latest",
    "vue-tsc": "latest",
    "tailwindcss": "latest",
    "postcss": "latest",
    "autoprefixer": "latest"
  };
  const componentFiles = Object.keys(sources).filter((key) => key.endsWith(".vue") && key !== "index.vue");
  const components = {};
  componentFiles.forEach((i) => {
    components[`src/${i}`] = {
      isBinary: false,
      content: sources[i]
    };
  });
  const files = {
    "package.json": {
      content: {
        name: `radix-vue-${componentName.toLowerCase().replace(/ /g, "-")}`,
        scripts: { start: "vite" },
        dependencies,
        devDependencies
      },
      isBinary: false
    },
    ...viteConfig,
    "tailwind.config.js": sources["tailwind.config.js"] && {
      content: sources["tailwind.config.js"],
      isBinary: false
    },
    "postcss.config.js": sources["tailwind.config.js"] && {
      content: `module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  }
}`,
      isBinary: false
    },
    "src/main.ts": {
      content: `import { createApp } from 'vue';
import App from './App.vue';
import './global.css';

createApp(App).mount('#app')`,
      isBinary: false
    },
    "src/App.vue": {
      isBinary: false,
      content: sources["index.vue"]
    },
    "src/styles.css": sources["styles.css"] && {
      isBinary: false,
      content: sources["styles.css"]
    },
    ...components,
    "src/global.css": {
      content: `@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  font-family: system-ui;
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(to bottom right, hsl(173, 80.0%, 36.0%) 0%, hsl(151, 55.0%, 41.5%) 100%);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 120px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}`,
      isBinary: false
    }
  };
  return files;
}
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "Tooltip",
  __ssrInlineRender: true,
  props: {
    content: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(dp), _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(cp), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(pp), {
                    class: "text-white hover:text-grass11 focus:text-grass11 shadow-blackA7 focus:bg-green3 hover:bg-green3 inline-flex h-[35px] w-[35px] items-center justify-center rounded-full shadow-none outline-none focus:shadow-[0_0_0_2px] focus:shadow-black",
                    "as-child": ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push4, _parent4, _scopeId3);
                      } else {
                        return [
                          renderSlot(_ctx.$slots, "default")
                        ];
                      }
                    }),
                    _: 3
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(mp), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(fp), { class: "text-xs data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade text-grass11 select-none rounded-[4px] bg-white px-[15px] py-[10px] text-[15px] leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity]" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(_ctx.content)} `);
                              _push5(ssrRenderComponent(unref(vp), {
                                class: "fill-white",
                                size: "8"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createTextVNode(toDisplayString(_ctx.content) + " ", 1),
                                createVNode(unref(vp), {
                                  class: "fill-white",
                                  size: "8"
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(fp), { class: "text-xs data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade text-grass11 select-none rounded-[4px] bg-white px-[15px] py-[10px] text-[15px] leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity]" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.content) + " ", 1),
                              createVNode(unref(vp), {
                                class: "fill-white",
                                size: "8"
                              })
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(pp), {
                      class: "text-white hover:text-grass11 focus:text-grass11 shadow-blackA7 focus:bg-green3 hover:bg-green3 inline-flex h-[35px] w-[35px] items-center justify-center rounded-full shadow-none outline-none focus:shadow-[0_0_0_2px] focus:shadow-black",
                      "as-child": ""
                    }, {
                      default: withCtx(() => [
                        renderSlot(_ctx.$slots, "default")
                      ]),
                      _: 3
                    }),
                    createVNode(unref(mp), null, {
                      default: withCtx(() => [
                        createVNode(unref(fp), { class: "text-xs data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade text-grass11 select-none rounded-[4px] bg-white px-[15px] py-[10px] text-[15px] leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity]" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.content) + " ", 1),
                            createVNode(unref(vp), {
                              class: "fill-white",
                              size: "8"
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(cp), null, {
                default: withCtx(() => [
                  createVNode(unref(pp), {
                    class: "text-white hover:text-grass11 focus:text-grass11 shadow-blackA7 focus:bg-green3 hover:bg-green3 inline-flex h-[35px] w-[35px] items-center justify-center rounded-full shadow-none outline-none focus:shadow-[0_0_0_2px] focus:shadow-black",
                    "as-child": ""
                  }, {
                    default: withCtx(() => [
                      renderSlot(_ctx.$slots, "default")
                    ]),
                    _: 3
                  }),
                  createVNode(unref(mp), null, {
                    default: withCtx(() => [
                      createVNode(unref(fp), { class: "text-xs data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade text-grass11 select-none rounded-[4px] bg-white px-[15px] py-[10px] text-[15px] leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity]" }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.content) + " ", 1),
                          createVNode(unref(vp), {
                            class: "fill-white",
                            size: "8"
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 3
              })
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../components/Tooltip.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __vite_glob_0_10 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$4
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "CodeSandbox",
  __ssrInlineRender: true,
  props: {
    name: {},
    files: {}
  },
  setup(__props) {
    const props = __props;
    const sources = ref({});
    onMounted(() => {
      var _a;
      (_a = props.files) == null ? void 0 : _a.forEach((file) => {
        const [folder, fileName] = file.split("/");
        const extension = file.split(".").pop();
        __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "./demo/Accordion/css/index.vue": () => import("./index.s-Hh9oeE.js"), "./demo/Accordion/css/styles.css": () => import("./styles.8INwlYTw.js"), "./demo/Accordion/tailwind/index.vue": () => import("./index.zUnCLiup.js"), "./demo/Accordion/tailwind/tailwind.config.js": () => import("./tailwind.config.XfQuvv_A.js"), "./demo/AlertDialog/css/index.vue": () => import("./index.myrinMzR.js"), "./demo/AlertDialog/css/styles.css": () => import("./styles.d_pMUKkg.js"), "./demo/AlertDialog/tailwind/index.vue": () => import("./index.bj13JvTv.js"), "./demo/AlertDialog/tailwind/tailwind.config.js": () => import("./tailwind.config.TTk0cozF.js"), "./demo/AspectRatio/css/index.vue": () => import("./index.m_av8aEL.js"), "./demo/AspectRatio/css/styles.css": () => import("./styles.cYH4RqOt.js"), "./demo/AspectRatio/tailwind/index.vue": () => import("./index.5Tp-zMvz.js"), "./demo/AspectRatio/tailwind/tailwind.config.js": () => import("./tailwind.config.pe40Utv4.js"), "./demo/Avatar/css/index.vue": () => import("./index.c1V-kkLt.js"), "./demo/Avatar/css/styles.css": () => import("./styles.6fO4hRGp.js"), "./demo/Avatar/tailwind/index.vue": () => import("./index.fnSf7p0Y.js"), "./demo/Avatar/tailwind/tailwind.config.js": () => import("./tailwind.config.RcTkTqwk.js"), "./demo/Checkbox/css/index.vue": () => import("./index.g_wOoVdz.js"), "./demo/Checkbox/css/styles.css": () => import("./styles.0LlhAlvW.js"), "./demo/Checkbox/tailwind/index.vue": () => import("./index.o7SMdQZS.js"), "./demo/Checkbox/tailwind/tailwind.config.js": () => import("./tailwind.config.qOh3_Xos.js"), "./demo/Collapsible/css/index.vue": () => import("./index.MhbswMpW.js"), "./demo/Collapsible/css/styles.css": () => import("./styles.wtBj0pAr.js"), "./demo/Collapsible/tailwind/index.vue": () => import("./index.N5w8tImz.js"), "./demo/Collapsible/tailwind/tailwind.config.js": () => import("./tailwind.config.adCxt2nF.js"), "./demo/Combobox/css/index.vue": () => import("./index.c5TYf3fM.js"), "./demo/Combobox/css/styles.css": () => import("./styles.7kmovTuJ.js"), "./demo/Combobox/tailwind/index.vue": () => import("./index.41lPFD1_.js"), "./demo/Combobox/tailwind/tailwind.config.js": () => import("./tailwind.config.1MQxD9Hc.js"), "./demo/ContextMenu/css/index.vue": () => import("./index.dr0QBCLz.js"), "./demo/ContextMenu/css/styles.css": () => import("./styles.36A19J4g.js"), "./demo/ContextMenu/tailwind/index.vue": () => import("./index.EnkHsDXd.js"), "./demo/ContextMenu/tailwind/tailwind.config.js": () => import("./tailwind.config.h8Xdyrje.js"), "./demo/Dialog/css/index.vue": () => import("./index.H4HEaX8x.js"), "./demo/Dialog/css/styles.css": () => import("./styles.a2JT1EaL.js"), "./demo/Dialog/tailwind/index.vue": () => import("./index.sVOrdHgP.js"), "./demo/Dialog/tailwind/tailwind.config.js": () => import("./tailwind.config.RONTAi6P.js"), "./demo/DialogNested/tailwind/index.vue": () => import("./index.Qx2heJIM.js"), "./demo/DialogNested/tailwind/tailwind.config.js": () => import("./tailwind.config.bI3ftqgd.js"), "./demo/DialogToaster/tailwind/index.vue": () => import("./index.CiUYTaXz.js"), "./demo/DialogToaster/tailwind/tailwind.config.js": () => import("./tailwind.config.tOF5gdO1.js"), "./demo/DropdownMenu/css/index.vue": () => import("./index.dFAYUKd4.js"), "./demo/DropdownMenu/css/styles.css": () => import("./styles.MP4xEETY.js"), "./demo/DropdownMenu/tailwind/index.vue": () => import("./index.RQxod9Ui.js"), "./demo/DropdownMenu/tailwind/tailwind.config.js": () => import("./tailwind.config.8pkgNPDY.js"), "./demo/HoverCard/css/index.vue": () => import("./index.3r0NVjTk.js"), "./demo/HoverCard/css/styles.css": () => import("./styles.hld49HSe.js"), "./demo/HoverCard/tailwind/index.vue": () => import("./index.3foF6oVY.js"), "./demo/HoverCard/tailwind/tailwind.config.js": () => import("./tailwind.config.cCZuDUJ6.js"), "./demo/Label/css/index.vue": () => import("./index.mo2ff3o1.js"), "./demo/Label/css/styles.css": () => import("./styles.2IA5UPdp.js"), "./demo/Label/tailwind/index.vue": () => import("./index.3oWZ_XfR.js"), "./demo/Label/tailwind/tailwind.config.js": () => import("./tailwind.config.VThiuV3d.js"), "./demo/Menubar/css/index.vue": () => import("./index.Mv8nAelO.js"), "./demo/Menubar/css/styles.css": () => import("./styles.w6s-7ei8.js"), "./demo/Menubar/tailwind/index.vue": () => import("./index.j_sN42i4.js"), "./demo/Menubar/tailwind/tailwind.config.js": () => import("./tailwind.config.SWf1FdC3.js"), "./demo/NavigationMenu/css/NavigationMenuListItem.vue": () => import("./NavigationMenuListItem.EfMlHbN-.js"), "./demo/NavigationMenu/css/index.vue": () => import("./index.k8xhLIY-.js"), "./demo/NavigationMenu/css/styles.css": () => import("./styles.WPKg1J3Z.js"), "./demo/NavigationMenu/tailwind/NavigationMenuListItem.vue": () => import("./NavigationMenuListItem.588qpBN-.js"), "./demo/NavigationMenu/tailwind/index.vue": () => import("./index.nsVhqUko.js"), "./demo/NavigationMenu/tailwind/tailwind.config.js": () => import("./tailwind.config.vvoCFsiX.js"), "./demo/Pagination/css/index.vue": () => import("./index.2GAjyjDD.js"), "./demo/Pagination/css/styles.css": () => import("./styles.C9RqAGgC.js"), "./demo/Pagination/tailwind/index.vue": () => import("./index.adY50xha.js"), "./demo/Pagination/tailwind/tailwind.config.js": () => import("./tailwind.config.sZLKTvRR.js"), "./demo/PinInput/css/index.vue": () => import("./index.cIod08AK.js"), "./demo/PinInput/css/styles.css": () => import("./styles.sW-vIWXF.js"), "./demo/PinInput/tailwind/index.vue": () => import("./index.iyl6Aaw1.js"), "./demo/PinInput/tailwind/tailwind.config.js": () => import("./tailwind.config.-6npwLs7.js"), "./demo/Popover/css/index.vue": () => import("./index.sQ1CC0bl.js"), "./demo/Popover/css/styles.css": () => import("./styles.dPKFLiaf.js"), "./demo/Popover/tailwind/index.vue": () => import("./index.ZvAhQeh9.js"), "./demo/Popover/tailwind/tailwind.config.js": () => import("./tailwind.config.6xMde4MN.js"), "./demo/Progress/css/index.vue": () => import("./index.bLInsU8B.js"), "./demo/Progress/css/styles.css": () => import("./styles.fbHjuy4h.js"), "./demo/Progress/tailwind/index.vue": () => import("./index.TndJr_4G.js"), "./demo/Progress/tailwind/tailwind.config.js": () => import("./tailwind.config.O_byLp-A.js"), "./demo/RadioGroup/css/index.vue": () => import("./index.2UjDXlLf.js"), "./demo/RadioGroup/css/styles.css": () => import("./styles.bnEbEVpX.js"), "./demo/RadioGroup/tailwind/index.vue": () => import("./index.eYJ2SKb4.js"), "./demo/RadioGroup/tailwind/tailwind.config.js": () => import("./tailwind.config.datkePfu.js"), "./demo/ScrollArea/css/index.vue": () => import("./index.XdzW-1Uk.js"), "./demo/ScrollArea/css/styles.css": () => import("./styles.ne3H309r.js"), "./demo/ScrollArea/tailwind/index.vue": () => import("./index._wV7GETZ.js"), "./demo/ScrollArea/tailwind/tailwind.config.js": () => import("./tailwind.config.xyWq0OmZ.js"), "./demo/Select/css/index.vue": () => import("./index.yvgmD7OK.js"), "./demo/Select/css/styles.css": () => import("./styles.JD489OzG.js"), "./demo/Select/tailwind/index.vue": () => import("./index.f7cC20pG.js"), "./demo/Select/tailwind/tailwind.config.js": () => import("./tailwind.config.WvLRHT4I.js"), "./demo/Separator/css/index.vue": () => import("./index.Ijck1Pyz.js"), "./demo/Separator/css/styles.css": () => import("./styles.rP2DkJqv.js"), "./demo/Separator/tailwind/index.vue": () => import("./index.uk2XmBSV.js"), "./demo/Separator/tailwind/tailwind.config.js": () => import("./tailwind.config.5we9yJNP.js"), "./demo/Slider/css/index.vue": () => import("./index.Eok5dGqY.js"), "./demo/Slider/css/styles.css": () => import("./styles.KwPfzqIm.js"), "./demo/Slider/tailwind/index.vue": () => import("./index.8UveCupA.js"), "./demo/Slider/tailwind/tailwind.config.js": () => import("./tailwind.config.dNdBah1X.js"), "./demo/Switch/css/index.vue": () => import("./index.5qFKdqHl.js"), "./demo/Switch/css/styles.css": () => import("./styles._BILydqs.js"), "./demo/Switch/tailwind/index.vue": () => import("./index.60FoUk0a.js"), "./demo/Switch/tailwind/tailwind.config.js": () => import("./tailwind.config.e_akIKUQ.js"), "./demo/Tabs/css/index.vue": () => import("./index.k4V7Bji0.js"), "./demo/Tabs/css/styles.css": () => import("./styles.czZ9rpmu.js"), "./demo/Tabs/tailwind/index.vue": () => import("./index.EegLu37b.js"), "./demo/Tabs/tailwind/tailwind.config.js": () => import("./tailwind.config.2WRXUhgx.js"), "./demo/TagsInput/css/index.vue": () => import("./index.dIB8wtgD.js"), "./demo/TagsInput/css/styles.css": () => import("./styles.S_9HaCG_.js"), "./demo/TagsInput/tailwind/index.vue": () => import("./index.9U-T9xxI.js"), "./demo/TagsInput/tailwind/tailwind.config.js": () => import("./tailwind.config.JSbeE2_Y.js"), "./demo/TagsInputCombobox/css/index.vue": () => import("./index.mgmljBqt.js"), "./demo/TagsInputCombobox/css/styles.css": () => import("./styles.ycHQK3BH.js"), "./demo/TagsInputCombobox/tailwind/index.vue": () => import("./index.8uaoSEaB.js"), "./demo/TagsInputCombobox/tailwind/tailwind.config.js": () => import("./tailwind.config.oIAwmEaq.js"), "./demo/Toast/css/index.vue": () => import("./index.h5FAQWNd.js"), "./demo/Toast/css/styles.css": () => import("./styles.-gvnnMNi.js"), "./demo/Toast/tailwind/index.vue": () => import("./index.49inCpWZ.js"), "./demo/Toast/tailwind/tailwind.config.js": () => import("./tailwind.config.erGLIBGg.js"), "./demo/Toggle/css/index.vue": () => import("./index.5UxfSml-.js"), "./demo/Toggle/css/styles.css": () => import("./styles.cQUp5OJ0.js"), "./demo/Toggle/tailwind/index.vue": () => import("./index.Di5Lm3tl.js"), "./demo/Toggle/tailwind/tailwind.config.js": () => import("./tailwind.config.f16TraFH.js"), "./demo/ToggleGroup/css/index.vue": () => import("./index.9Y3xPGCX.js"), "./demo/ToggleGroup/css/styles.css": () => import("./styles.a-iP_6rf.js"), "./demo/ToggleGroup/tailwind/index.vue": () => import("./index.kpQxdjiE.js"), "./demo/ToggleGroup/tailwind/tailwind.config.js": () => import("./tailwind.config.GciixqWw.js"), "./demo/Toolbar/css/index.vue": () => import("./index.LEziXYsm.js"), "./demo/Toolbar/css/styles.css": () => import("./styles.HRDNsVl9.js"), "./demo/Toolbar/tailwind/index.vue": () => import("./index.kMLgnEHP.js"), "./demo/Toolbar/tailwind/tailwind.config.js": () => import("./tailwind.config.pVR9kjeh.js"), "./demo/Tooltip/css/index.vue": () => import("./index.PcpFZ_tQ.js"), "./demo/Tooltip/css/styles.css": () => import("./styles.-WDe1F_g.js"), "./demo/Tooltip/tailwind/index.vue": () => import("./index.6Ikmn5lW.js"), "./demo/Tooltip/tailwind/tailwind.config.js": () => import("./tailwind.config.u2Ei990H.js") }), `./demo/${props.name}/${folder}/${fileName.replace(`.${extension}`, "")}.${extension}`).then(
          (res) => sources.value[fileName] = res.default
        );
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<form${ssrRenderAttrs(mergeProps({
        action: "https://codesandbox.io/api/v1/sandboxes/define",
        method: "POST",
        target: "_blank"
      }, _attrs))}><input type="hidden" name="query" value="file=src/App.vue"><input type="hidden" name="environment" value="server"><input type="hidden" name="hidedevtools" value="1"><input type="hidden" name="parameters"${ssrRenderAttr("value", unref(makeCodeSandboxParams)(_ctx.name, sources.value))}>`);
      _push(ssrRenderComponent(_sfc_main$4, {
        content: `Open ${_ctx.name} in CodeSandbox`
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button type="submit"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Icon), { icon: "ph-codesandbox-logo" }, null, _parent2, _scopeId));
            _push2(`</button>`);
          } else {
            return [
              createVNode("button", { type: "submit" }, [
                createVNode(unref(Icon), { icon: "ph-codesandbox-logo" })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</form>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../components/CodeSandbox.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __vite_glob_0_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$3
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Stackblitz",
  __ssrInlineRender: true,
  props: {
    name: {},
    files: {}
  },
  setup(__props) {
    const props = __props;
    const sources = ref({});
    onMounted(() => {
      var _a;
      (_a = props.files) == null ? void 0 : _a.forEach((file) => {
        const [folder, fileName] = file.split("/");
        const extension = file.split(".").pop();
        __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "./demo/Accordion/css/index.vue": () => import("./index.s-Hh9oeE.js"), "./demo/Accordion/css/styles.css": () => import("./styles.8INwlYTw.js"), "./demo/Accordion/tailwind/index.vue": () => import("./index.zUnCLiup.js"), "./demo/Accordion/tailwind/tailwind.config.js": () => import("./tailwind.config.XfQuvv_A.js"), "./demo/AlertDialog/css/index.vue": () => import("./index.myrinMzR.js"), "./demo/AlertDialog/css/styles.css": () => import("./styles.d_pMUKkg.js"), "./demo/AlertDialog/tailwind/index.vue": () => import("./index.bj13JvTv.js"), "./demo/AlertDialog/tailwind/tailwind.config.js": () => import("./tailwind.config.TTk0cozF.js"), "./demo/AspectRatio/css/index.vue": () => import("./index.m_av8aEL.js"), "./demo/AspectRatio/css/styles.css": () => import("./styles.cYH4RqOt.js"), "./demo/AspectRatio/tailwind/index.vue": () => import("./index.5Tp-zMvz.js"), "./demo/AspectRatio/tailwind/tailwind.config.js": () => import("./tailwind.config.pe40Utv4.js"), "./demo/Avatar/css/index.vue": () => import("./index.c1V-kkLt.js"), "./demo/Avatar/css/styles.css": () => import("./styles.6fO4hRGp.js"), "./demo/Avatar/tailwind/index.vue": () => import("./index.fnSf7p0Y.js"), "./demo/Avatar/tailwind/tailwind.config.js": () => import("./tailwind.config.RcTkTqwk.js"), "./demo/Checkbox/css/index.vue": () => import("./index.g_wOoVdz.js"), "./demo/Checkbox/css/styles.css": () => import("./styles.0LlhAlvW.js"), "./demo/Checkbox/tailwind/index.vue": () => import("./index.o7SMdQZS.js"), "./demo/Checkbox/tailwind/tailwind.config.js": () => import("./tailwind.config.qOh3_Xos.js"), "./demo/Collapsible/css/index.vue": () => import("./index.MhbswMpW.js"), "./demo/Collapsible/css/styles.css": () => import("./styles.wtBj0pAr.js"), "./demo/Collapsible/tailwind/index.vue": () => import("./index.N5w8tImz.js"), "./demo/Collapsible/tailwind/tailwind.config.js": () => import("./tailwind.config.adCxt2nF.js"), "./demo/Combobox/css/index.vue": () => import("./index.c5TYf3fM.js"), "./demo/Combobox/css/styles.css": () => import("./styles.7kmovTuJ.js"), "./demo/Combobox/tailwind/index.vue": () => import("./index.41lPFD1_.js"), "./demo/Combobox/tailwind/tailwind.config.js": () => import("./tailwind.config.1MQxD9Hc.js"), "./demo/ContextMenu/css/index.vue": () => import("./index.dr0QBCLz.js"), "./demo/ContextMenu/css/styles.css": () => import("./styles.36A19J4g.js"), "./demo/ContextMenu/tailwind/index.vue": () => import("./index.EnkHsDXd.js"), "./demo/ContextMenu/tailwind/tailwind.config.js": () => import("./tailwind.config.h8Xdyrje.js"), "./demo/Dialog/css/index.vue": () => import("./index.H4HEaX8x.js"), "./demo/Dialog/css/styles.css": () => import("./styles.a2JT1EaL.js"), "./demo/Dialog/tailwind/index.vue": () => import("./index.sVOrdHgP.js"), "./demo/Dialog/tailwind/tailwind.config.js": () => import("./tailwind.config.RONTAi6P.js"), "./demo/DialogNested/tailwind/index.vue": () => import("./index.Qx2heJIM.js"), "./demo/DialogNested/tailwind/tailwind.config.js": () => import("./tailwind.config.bI3ftqgd.js"), "./demo/DialogToaster/tailwind/index.vue": () => import("./index.CiUYTaXz.js"), "./demo/DialogToaster/tailwind/tailwind.config.js": () => import("./tailwind.config.tOF5gdO1.js"), "./demo/DropdownMenu/css/index.vue": () => import("./index.dFAYUKd4.js"), "./demo/DropdownMenu/css/styles.css": () => import("./styles.MP4xEETY.js"), "./demo/DropdownMenu/tailwind/index.vue": () => import("./index.RQxod9Ui.js"), "./demo/DropdownMenu/tailwind/tailwind.config.js": () => import("./tailwind.config.8pkgNPDY.js"), "./demo/HoverCard/css/index.vue": () => import("./index.3r0NVjTk.js"), "./demo/HoverCard/css/styles.css": () => import("./styles.hld49HSe.js"), "./demo/HoverCard/tailwind/index.vue": () => import("./index.3foF6oVY.js"), "./demo/HoverCard/tailwind/tailwind.config.js": () => import("./tailwind.config.cCZuDUJ6.js"), "./demo/Label/css/index.vue": () => import("./index.mo2ff3o1.js"), "./demo/Label/css/styles.css": () => import("./styles.2IA5UPdp.js"), "./demo/Label/tailwind/index.vue": () => import("./index.3oWZ_XfR.js"), "./demo/Label/tailwind/tailwind.config.js": () => import("./tailwind.config.VThiuV3d.js"), "./demo/Menubar/css/index.vue": () => import("./index.Mv8nAelO.js"), "./demo/Menubar/css/styles.css": () => import("./styles.w6s-7ei8.js"), "./demo/Menubar/tailwind/index.vue": () => import("./index.j_sN42i4.js"), "./demo/Menubar/tailwind/tailwind.config.js": () => import("./tailwind.config.SWf1FdC3.js"), "./demo/NavigationMenu/css/NavigationMenuListItem.vue": () => import("./NavigationMenuListItem.EfMlHbN-.js"), "./demo/NavigationMenu/css/index.vue": () => import("./index.k8xhLIY-.js"), "./demo/NavigationMenu/css/styles.css": () => import("./styles.WPKg1J3Z.js"), "./demo/NavigationMenu/tailwind/NavigationMenuListItem.vue": () => import("./NavigationMenuListItem.588qpBN-.js"), "./demo/NavigationMenu/tailwind/index.vue": () => import("./index.nsVhqUko.js"), "./demo/NavigationMenu/tailwind/tailwind.config.js": () => import("./tailwind.config.vvoCFsiX.js"), "./demo/Pagination/css/index.vue": () => import("./index.2GAjyjDD.js"), "./demo/Pagination/css/styles.css": () => import("./styles.C9RqAGgC.js"), "./demo/Pagination/tailwind/index.vue": () => import("./index.adY50xha.js"), "./demo/Pagination/tailwind/tailwind.config.js": () => import("./tailwind.config.sZLKTvRR.js"), "./demo/PinInput/css/index.vue": () => import("./index.cIod08AK.js"), "./demo/PinInput/css/styles.css": () => import("./styles.sW-vIWXF.js"), "./demo/PinInput/tailwind/index.vue": () => import("./index.iyl6Aaw1.js"), "./demo/PinInput/tailwind/tailwind.config.js": () => import("./tailwind.config.-6npwLs7.js"), "./demo/Popover/css/index.vue": () => import("./index.sQ1CC0bl.js"), "./demo/Popover/css/styles.css": () => import("./styles.dPKFLiaf.js"), "./demo/Popover/tailwind/index.vue": () => import("./index.ZvAhQeh9.js"), "./demo/Popover/tailwind/tailwind.config.js": () => import("./tailwind.config.6xMde4MN.js"), "./demo/Progress/css/index.vue": () => import("./index.bLInsU8B.js"), "./demo/Progress/css/styles.css": () => import("./styles.fbHjuy4h.js"), "./demo/Progress/tailwind/index.vue": () => import("./index.TndJr_4G.js"), "./demo/Progress/tailwind/tailwind.config.js": () => import("./tailwind.config.O_byLp-A.js"), "./demo/RadioGroup/css/index.vue": () => import("./index.2UjDXlLf.js"), "./demo/RadioGroup/css/styles.css": () => import("./styles.bnEbEVpX.js"), "./demo/RadioGroup/tailwind/index.vue": () => import("./index.eYJ2SKb4.js"), "./demo/RadioGroup/tailwind/tailwind.config.js": () => import("./tailwind.config.datkePfu.js"), "./demo/ScrollArea/css/index.vue": () => import("./index.XdzW-1Uk.js"), "./demo/ScrollArea/css/styles.css": () => import("./styles.ne3H309r.js"), "./demo/ScrollArea/tailwind/index.vue": () => import("./index._wV7GETZ.js"), "./demo/ScrollArea/tailwind/tailwind.config.js": () => import("./tailwind.config.xyWq0OmZ.js"), "./demo/Select/css/index.vue": () => import("./index.yvgmD7OK.js"), "./demo/Select/css/styles.css": () => import("./styles.JD489OzG.js"), "./demo/Select/tailwind/index.vue": () => import("./index.f7cC20pG.js"), "./demo/Select/tailwind/tailwind.config.js": () => import("./tailwind.config.WvLRHT4I.js"), "./demo/Separator/css/index.vue": () => import("./index.Ijck1Pyz.js"), "./demo/Separator/css/styles.css": () => import("./styles.rP2DkJqv.js"), "./demo/Separator/tailwind/index.vue": () => import("./index.uk2XmBSV.js"), "./demo/Separator/tailwind/tailwind.config.js": () => import("./tailwind.config.5we9yJNP.js"), "./demo/Slider/css/index.vue": () => import("./index.Eok5dGqY.js"), "./demo/Slider/css/styles.css": () => import("./styles.KwPfzqIm.js"), "./demo/Slider/tailwind/index.vue": () => import("./index.8UveCupA.js"), "./demo/Slider/tailwind/tailwind.config.js": () => import("./tailwind.config.dNdBah1X.js"), "./demo/Switch/css/index.vue": () => import("./index.5qFKdqHl.js"), "./demo/Switch/css/styles.css": () => import("./styles._BILydqs.js"), "./demo/Switch/tailwind/index.vue": () => import("./index.60FoUk0a.js"), "./demo/Switch/tailwind/tailwind.config.js": () => import("./tailwind.config.e_akIKUQ.js"), "./demo/Tabs/css/index.vue": () => import("./index.k4V7Bji0.js"), "./demo/Tabs/css/styles.css": () => import("./styles.czZ9rpmu.js"), "./demo/Tabs/tailwind/index.vue": () => import("./index.EegLu37b.js"), "./demo/Tabs/tailwind/tailwind.config.js": () => import("./tailwind.config.2WRXUhgx.js"), "./demo/TagsInput/css/index.vue": () => import("./index.dIB8wtgD.js"), "./demo/TagsInput/css/styles.css": () => import("./styles.S_9HaCG_.js"), "./demo/TagsInput/tailwind/index.vue": () => import("./index.9U-T9xxI.js"), "./demo/TagsInput/tailwind/tailwind.config.js": () => import("./tailwind.config.JSbeE2_Y.js"), "./demo/TagsInputCombobox/css/index.vue": () => import("./index.mgmljBqt.js"), "./demo/TagsInputCombobox/css/styles.css": () => import("./styles.ycHQK3BH.js"), "./demo/TagsInputCombobox/tailwind/index.vue": () => import("./index.8uaoSEaB.js"), "./demo/TagsInputCombobox/tailwind/tailwind.config.js": () => import("./tailwind.config.oIAwmEaq.js"), "./demo/Toast/css/index.vue": () => import("./index.h5FAQWNd.js"), "./demo/Toast/css/styles.css": () => import("./styles.-gvnnMNi.js"), "./demo/Toast/tailwind/index.vue": () => import("./index.49inCpWZ.js"), "./demo/Toast/tailwind/tailwind.config.js": () => import("./tailwind.config.erGLIBGg.js"), "./demo/Toggle/css/index.vue": () => import("./index.5UxfSml-.js"), "./demo/Toggle/css/styles.css": () => import("./styles.cQUp5OJ0.js"), "./demo/Toggle/tailwind/index.vue": () => import("./index.Di5Lm3tl.js"), "./demo/Toggle/tailwind/tailwind.config.js": () => import("./tailwind.config.f16TraFH.js"), "./demo/ToggleGroup/css/index.vue": () => import("./index.9Y3xPGCX.js"), "./demo/ToggleGroup/css/styles.css": () => import("./styles.a-iP_6rf.js"), "./demo/ToggleGroup/tailwind/index.vue": () => import("./index.kpQxdjiE.js"), "./demo/ToggleGroup/tailwind/tailwind.config.js": () => import("./tailwind.config.GciixqWw.js"), "./demo/Toolbar/css/index.vue": () => import("./index.LEziXYsm.js"), "./demo/Toolbar/css/styles.css": () => import("./styles.HRDNsVl9.js"), "./demo/Toolbar/tailwind/index.vue": () => import("./index.kMLgnEHP.js"), "./demo/Toolbar/tailwind/tailwind.config.js": () => import("./tailwind.config.pVR9kjeh.js"), "./demo/Tooltip/css/index.vue": () => import("./index.PcpFZ_tQ.js"), "./demo/Tooltip/css/styles.css": () => import("./styles.-WDe1F_g.js"), "./demo/Tooltip/tailwind/index.vue": () => import("./index.6Ikmn5lW.js"), "./demo/Tooltip/tailwind/tailwind.config.js": () => import("./tailwind.config.u2Ei990H.js") }), `./demo/${props.name}/${folder}/${fileName.replace(`.${extension}`, "")}.${extension}`).then(
          (res) => sources.value[fileName] = res.default
        );
      });
    });
    function handleClick() {
      makeStackblitzParams(props.name, sources.value);
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_sfc_main$4, {
        content: `Open ${_ctx.name} in Stackblitz`
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Icon), { icon: "simple-icons:stackblitz" }, null, _parent2, _scopeId));
            _push2(`</button>`);
          } else {
            return [
              createVNode("button", { onClick: handleClick }, [
                createVNode(unref(Icon), { icon: "simple-icons:stackblitz" })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../components/Stackblitz.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __vite_glob_0_9 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$2
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "HeroContainer",
  __ssrInlineRender: true,
  props: {
    overflow: { type: Boolean },
    folder: { default: "" }
  },
  setup(__props) {
    const slots = useSlots();
    const files = computed(
      () => {
        var _a, _b, _c, _d;
        return ((_d = (_c = (_b = (_a = slots == null ? void 0 : slots.codeSlot) == null ? void 0 : _a.call(slots)) == null ? void 0 : _b[0].children) == null ? void 0 : _c.default) == null ? void 0 : _d.call(_c).map((i) => {
          var _a2;
          return (_a2 = i == null ? void 0 : i.props) == null ? void 0 : _a2.filename;
        })) ?? [];
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative text-[15px] text-black" }, _attrs))} data-v-a6fda3c9><div class="${ssrRenderClass([{ "overflow-x-auto": _ctx.overflow }, "vp-raw bg-gradient-to-br p-4 rounded-t-lg from-teal9 to-green9 w-full relative items-center justify-center flex"])}" data-v-a6fda3c9><div class="w-full max-w-[700px] flex items-center py-12 sm:py-[100px] custom-justify-center" data-v-a6fda3c9>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      if (_ctx.folder) {
        _push(ssrRenderComponent(_sfc_main$3, {
          class: "hidden sm:block absolute bottom-4 right-4",
          name: _ctx.folder,
          files: files.value
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (_ctx.folder) {
        _push(ssrRenderComponent(_sfc_main$2, {
          class: "hidden sm:block absolute bottom-4 right-12",
          name: _ctx.folder,
          files: files.value
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
      ssrRenderSlot(_ctx.$slots, "codeSlot", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../components/HeroContainer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const HeroContainer = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-a6fda3c9"]]);
const __vite_glob_0_7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: HeroContainer
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "HeroCodeGroup",
  __ssrInlineRender: true,
  setup(__props) {
    const slots = useSlots();
    const tabs = computed(
      () => {
        var _a;
        return ((_a = slots.default) == null ? void 0 : _a.call(slots).map((slot, index) => {
          var _a2, _b;
          return {
            label: ((_a2 = slot.props) == null ? void 0 : _a2.filename) || ((_b = slot.props) == null ? void 0 : _b.label) || `${index}`,
            component: slot
          };
        })) || [];
      }
    );
    const open = ref(false);
    const codeScrollWrapper = ref();
    const buttonRef = ref();
    const currentTab = ref("index.vue");
    watch(open, () => {
      if (!open.value) {
        codeScrollWrapper.value.scrollTo({
          top: 0
        });
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Hc), mergeProps({
        modelValue: currentTab.value,
        "onUpdate:modelValue": [($event) => currentTab.value = $event, ($event) => open.value = true],
        class: "bg-[var(--vp-code-block-bg)] border border-neutral-700/40 rounded-b-lg overflow-hidden"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="bg-[var(--vp-code-block-bg)] border-b-2 border-[#272727] flex pr-2" data-v-8107954d${_scopeId}><div class="flex justify-between items-center w-full text-[13px]" data-v-8107954d${_scopeId}>`);
            _push2(ssrRenderComponent(unref(jc), { class: "flex" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(tabs.value, (tab, index) => {
                    _push3(ssrRenderComponent(unref(zc), {
                      key: index,
                      value: tab.label,
                      tabindex: "-1",
                      class: "text-white/70 py-2.5 px-4 border-box data-[state=active]:shadow-[0_1px_0_#10b981] data-[state=active]:font-medium data-[state=active]:text-white"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(tab.label)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(tab.label), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(tabs.value, (tab, index) => {
                      return openBlock(), createBlock(unref(zc), {
                        key: index,
                        value: tab.label,
                        tabindex: "-1",
                        class: "text-white/70 py-2.5 px-4 border-box data-[state=active]:shadow-[0_1px_0_#10b981] data-[state=active]:font-medium data-[state=active]:text-white"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(tab.label), 1)
                        ]),
                        _: 2
                      }, 1032, ["value"]);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div data-v-8107954d${_scopeId}><select value="TailwindCSS" class="bg-transparent text-white/70" data-v-8107954d${_scopeId}><option value="TailwindCSS" data-v-8107954d${_scopeId}> Tailwind CSS </option></select></div></div></div><div class="${ssrRenderClass([`${open.value ? "overflow-scroll max-h-[80vh]" : "overflow-hidden max-h-[150px]"}`, "pb-10 block h-full"])}" data-v-8107954d${_scopeId}><!--[-->`);
            ssrRenderList(tabs.value, (tab) => {
              _push2(ssrRenderComponent(unref(Wc), {
                key: tab.label,
                value: tab.label,
                "as-child": ""
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="relative -mt-5 text-base" data-v-8107954d${_scopeId2}>`);
                    ssrRenderVNode(_push3, createVNode(resolveDynamicComponent(tab.component), { class: "border-0" }, null), _parent3, _scopeId2);
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "relative -mt-5 text-base" }, [
                        (openBlock(), createBlock(resolveDynamicComponent(tab.component), { class: "border-0" }))
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--><div class="bg-gradient-to-t from-[#161618FF] to-[#16161800] bottom-[1px] left-[1px] right-[1px] h-20 flex items-center justify-center absolute rounded-b-lg" data-v-8107954d${_scopeId}><button class="mt-4 bg-neutral-800 hover:bg-neutral-700 px-3 py-1 rounded border-neutral-700 border" data-v-8107954d${_scopeId}>${ssrInterpolate(open.value ? "Collapse code" : "Expand code")}</button></div></div>`);
          } else {
            return [
              createVNode("div", { class: "bg-[var(--vp-code-block-bg)] border-b-2 border-[#272727] flex pr-2" }, [
                createVNode("div", { class: "flex justify-between items-center w-full text-[13px]" }, [
                  createVNode(unref(jc), { class: "flex" }, {
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(tabs.value, (tab, index) => {
                        return openBlock(), createBlock(unref(zc), {
                          key: index,
                          value: tab.label,
                          tabindex: "-1",
                          class: "text-white/70 py-2.5 px-4 border-box data-[state=active]:shadow-[0_1px_0_#10b981] data-[state=active]:font-medium data-[state=active]:text-white"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(tab.label), 1)
                          ]),
                          _: 2
                        }, 1032, ["value"]);
                      }), 128))
                    ]),
                    _: 1
                  }),
                  createVNode("div", null, [
                    createVNode("select", {
                      value: "TailwindCSS",
                      class: "bg-transparent text-white/70"
                    }, [
                      createVNode("option", { value: "TailwindCSS" }, " Tailwind CSS ")
                    ])
                  ])
                ])
              ]),
              createVNode("div", {
                ref_key: "codeScrollWrapper",
                ref: codeScrollWrapper,
                class: ["pb-10 block h-full", `${open.value ? "overflow-scroll max-h-[80vh]" : "overflow-hidden max-h-[150px]"}`]
              }, [
                (openBlock(true), createBlock(Fragment, null, renderList(tabs.value, (tab) => {
                  return openBlock(), createBlock(unref(Wc), {
                    key: tab.label,
                    value: tab.label,
                    "as-child": ""
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "relative -mt-5 text-base" }, [
                        (openBlock(), createBlock(resolveDynamicComponent(tab.component), { class: "border-0" }))
                      ])
                    ]),
                    _: 2
                  }, 1032, ["value"]);
                }), 128)),
                createVNode("div", { class: "bg-gradient-to-t from-[#161618FF] to-[#16161800] bottom-[1px] left-[1px] right-[1px] h-20 flex items-center justify-center absolute rounded-b-lg" }, [
                  createVNode("button", {
                    ref_key: "buttonRef",
                    ref: buttonRef,
                    class: "mt-4 bg-neutral-800 hover:bg-neutral-700 px-3 py-1 rounded border-neutral-700 border",
                    onClick: ($event) => open.value = !open.value
                  }, toDisplayString(open.value ? "Collapse code" : "Expand code"), 9, ["onClick"])
                ])
              ], 2)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../components/HeroCodeGroup.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const HeroCodeGroup = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8107954d"]]);
const __vite_glob_0_6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: HeroCodeGroup
}, Symbol.toStringTag, { value: "Module" }));
export {
  HeroContainer as H,
  _sfc_main$3 as _,
  HeroCodeGroup as a,
  _sfc_main$2 as b,
  __vite_glob_0_2 as c,
  __vite_glob_0_6 as d,
  __vite_glob_0_7 as e,
  __vite_glob_0_9 as f,
  __vite_glob_0_10 as g
};
