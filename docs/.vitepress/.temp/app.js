import { useSSRContext, mergeProps, defineComponent, unref, withCtx, createVNode, resolveComponent, renderSlot, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, shallowRef, inject, computed, ref, onUnmounted, reactive, markRaw, readonly, nextTick, h, onMounted, watch, watchEffect, watchPostEffect, onUpdated, resolveDynamicComponent, createCommentVNode, defineAsyncComponent, provide, toHandlers, withKeys, useSlots, isRef, capitalize, createSSRApp } from "vue";
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderAttr, ssrInterpolate, ssrRenderComponent, ssrRenderClass, ssrRenderList, ssrRenderVNode, renderToString } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
import { _ as _sfc_main$2f, b as _sfc_main$2g, c as __vite_glob_0_2, d as __vite_glob_0_6, e as __vite_glob_0_7, f as __vite_glob_0_9, g as __vite_glob_0_10 } from "./HeroCodeGroup.ec57TU07.js";
import { Icon } from "@iconify/vue";
import { _ as _sfc_main$1M } from "./index.0Y0dHuZY.js";
import { _ as _sfc_main$1N } from "./index.ssJzD7KM.js";
import { _ as _sfc_main$1O } from "./index.qt3zUPQo.js";
import { _ as _sfc_main$1P } from "./index.lL3S7tgu.js";
import { _ as _sfc_main$1Q } from "./index.rQ-nPtIV.js";
import { _ as _sfc_main$1R } from "./index.Jln7eolS.js";
import { _ as _sfc_main$1S } from "./index.baB2ti6k.js";
import { _ as _sfc_main$1T } from "./index.nYYZtszG.js";
import { _ as _sfc_main$1U } from "./index.gcJMds_m.js";
import { _ as _sfc_main$1V } from "./index.xv26BsCr.js";
import { _ as _sfc_main$1W } from "./index.sPK3_V7F.js";
import { _ as _sfc_main$1X } from "./index.XHDnbhzh.js";
import { _ as _sfc_main$1Y } from "./index.-yxHsJEj.js";
import { _ as _sfc_main$1Z } from "./index.oq195dYj.js";
import { _ as _sfc_main$1_ } from "./index.SkyMgy3T.js";
import { _ as _sfc_main$1$ } from "./index.QSnAocj3.js";
import { _ as _sfc_main$20 } from "./index.vkG0bUDg.js";
import { _ as _sfc_main$21 } from "./index.xAj7wet3.js";
import { _ as _sfc_main$22 } from "./index.PizxzUMs.js";
import { _ as _sfc_main$23 } from "./index.-wAv1UcI.js";
import { _ as _sfc_main$24 } from "./index.YA8Ot0vp.js";
import { _ as _sfc_main$25 } from "./index.WjsV5DJ5.js";
import { _ as _sfc_main$26 } from "./index.xt90WszU.js";
import { _ as _sfc_main$27 } from "./index.isrVVGwd.js";
import { _ as _sfc_main$28 } from "./index.7SwdZVsi.js";
import { _ as _sfc_main$29 } from "./index.ZQdK7v4E.js";
import { _ as _sfc_main$2a } from "./index.LXkbS4pL.js";
import { _ as _sfc_main$2b } from "./index.PfQkVDQx.js";
import { _ as _sfc_main$2c } from "./index.3KVMrJIL.js";
import { _ as _sfc_main$2d } from "./index.0fshOh8W.js";
import { _ as _sfc_main$2e } from "./index.mteCbIyP.js";
import { useDark, useMediaQuery, onClickOutside, onKeyStroke, useWindowScroll, useScrollLock, useVModel, useStorage } from "@vueuse/core";
import { y as mu, bx as Hc, by as jc, bA as zc, bc, bd as Cc, be as Ac, bf as wc, bg as _c, bi as Dc, bl as Ec, bm as Pc, bn as Tc, bB as Wc } from "./index.faJ9MUPN.js";
import "codesandbox/lib/api/define.js";
import "@stackblitz/sdk";
const _sfc_main$1L = {};
function _sfc_ssrRender$l(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "inline-flex items-center rounded-full border px-2.5 py-0.5 mt-2 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-green8 text-white hover:bg-green8/80" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$1L = _sfc_main$1L.setup;
_sfc_main$1L.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../components/Badge.vue");
  return _sfc_setup$1L ? _sfc_setup$1L(props, ctx) : void 0;
};
const Badge = /* @__PURE__ */ _export_sfc(_sfc_main$1L, [["ssrRender", _sfc_ssrRender$l]]);
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Badge
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$1K = {};
function _sfc_ssrRender$k(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-neutral-800 border border-neutral-700 rounded-xl" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$1K = _sfc_main$1K.setup;
_sfc_main$1K.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../components/CodeBlock.vue");
  return _sfc_setup$1K ? _sfc_setup$1K(props, ctx) : void 0;
};
const CodeBlock = /* @__PURE__ */ _export_sfc(_sfc_main$1K, [["ssrRender", _sfc_ssrRender$k]]);
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: CodeBlock
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$1J = /* @__PURE__ */ defineComponent({
  __name: "DemoContainer",
  __ssrInlineRender: true,
  props: {
    title: {},
    overflow: { type: Boolean }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["w-full", { "overflow-x-auto": _ctx.overflow }]
      }, _attrs))}><a class="capitalize md:text-lg font-semibold mb-2 ml-2 inline-flex items-center group"${ssrRenderAttr("href", `/components/${(_a = _ctx.title) == null ? void 0 : _a.replace(" ", "-")}.html`)}>${ssrInterpolate(_ctx.title)} `);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "ic-round-arrow-forward",
        class: "ml-2 group-focus:ml-3 group-hover:ml-3 transition-[margin]"
      }, null, _parent));
      _push(`</a><div class="${ssrRenderClass([{ "overflow-x-auto": _ctx.overflow }, "custom-justify-center p-4 md:p-10 min-h-[256px] lg:h-[400px] bg-gradient-to-br rounded-xl from-teal9 to-green9 w-full relative items-center flex"])}">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$1J = _sfc_main$1J.setup;
_sfc_main$1J.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../components/DemoContainer.vue");
  return _sfc_setup$1J ? _sfc_setup$1J(props, ctx) : void 0;
};
const __vite_glob_0_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$1J
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$1I = /* @__PURE__ */ defineComponent({
  __name: "Demos",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_sfc_main$1J, { title: "accordion" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$1M, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$1M)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$1J, { title: "alert dialog" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$1N, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$1N)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$1J, { title: "aspect ratio" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$1O, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$1O)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$1J, { title: "avatar" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$1P, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$1P)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$1J, { title: "checkbox" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$1Q, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$1Q)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$1J, { title: "collapsible" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$1R, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$1R)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$1J, { title: "combobox" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$1S, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$1S)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$1J, { title: "context menu" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$1T, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$1T)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$1J, { title: "dialog" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$1U, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$1U)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$1J, { title: "dropdown menu" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$1V, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$1V)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$1J, { title: "hover card" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$1W, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$1W)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$1J, { title: "label" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$1X, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$1X)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$1J, { title: "menubar" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$1Y, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$1Y)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$1J, { title: "navigation menu" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$1Z, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$1Z)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$1J, {
        title: "pagination",
        overflow: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$1_, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$1_)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$1J, { title: "pin input" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$1$, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$1$)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$1J, { title: "popover" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$20, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$20)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$1J, { title: "progress" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$21, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$21)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$1J, { title: "radio group" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$22, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$22)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$1J, { title: "scroll area" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$23, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$23)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$1J, { title: "select" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$24, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$24)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$1J, { title: "separator" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$25, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$25)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$1J, { title: "slider" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$26, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$26)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$1J, { title: "switch" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$27, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$27)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$1J, { title: "tabs" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$28, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$28)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$1J, { title: "tags input" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$29, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$29)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$1J, { title: "toast" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$2a, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$2a)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$1J, { title: "toggle" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$2b, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$2b)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$1J, { title: "toggle group" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$2c, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$2c)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$1J, {
        title: "toolbar",
        overflow: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$2d, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$2d)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$1J, { title: "tooltip" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$2e, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$2e)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1I = _sfc_main$1I.setup;
_sfc_main$1I.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../components/Demos.vue");
  return _sfc_setup$1I ? _sfc_setup$1I(props, ctx) : void 0;
};
const __vite_glob_0_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$1I
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$1H = {};
function _sfc_ssrRender$j(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "mb-10 mt-0.5 md:mt-3 text-lg md:text-xl" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$1H = _sfc_main$1H.setup;
_sfc_main$1H.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../components/Description.vue");
  return _sfc_setup$1H ? _sfc_setup$1H(props, ctx) : void 0;
};
const Description = /* @__PURE__ */ _export_sfc(_sfc_main$1H, [["ssrRender", _sfc_ssrRender$j]]);
const __vite_glob_0_5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Description
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$1G = /* @__PURE__ */ defineComponent({
  __name: "Highlights",
  __ssrInlineRender: true,
  props: {
    features: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<ul${ssrRenderAttrs(mergeProps({ class: "flex flex-col gap-1 no-ml" }, _attrs))}><!--[-->`);
      ssrRenderList(props.features, (feature, index) => {
        _push(`<li class="flex items-center gap-4"><span class="icon-bg rounded-full h-6 aspect-square !w-6 flex-none flex items-center justify-center">`);
        _push(ssrRenderComponent(unref(Icon), {
          icon: "radix-icons:check",
          class: "h-4 w-4 !text-[#4CC38A]"
        }, null, _parent));
        _push(`</span><span>${feature}</span></li>`);
      });
      _push(`<!--]--></ul>`);
    };
  }
});
const _sfc_setup$1G = _sfc_main$1G.setup;
_sfc_main$1G.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../components/Highlights.vue");
  return _sfc_setup$1G ? _sfc_setup$1G(props, ctx) : void 0;
};
const __vite_glob_0_8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$1G
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$1F = /* @__PURE__ */ defineComponent({
  __name: "ProseA",
  __ssrInlineRender: true,
  props: {
    href: {
      type: String,
      default: ""
    },
    target: {
      type: String,
      default: void 0,
      required: false
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = resolveComponent("NuxtLink");
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        to: __props.href,
        target: __props.target,
        class: "text-sky-500 hover:underline underline-offset-3"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$1F = _sfc_main$1F.setup;
_sfc_main$1F.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../components/prose/ProseA.vue");
  return _sfc_setup$1F ? _sfc_setup$1F(props, ctx) : void 0;
};
const _sfc_main$1E = /* @__PURE__ */ defineComponent({
  __name: "ProseH1",
  __ssrInlineRender: true,
  props: {
    id: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = resolveComponent("NuxtLink");
      _push(`<h1${ssrRenderAttrs(mergeProps({
        id: _ctx.id,
        class: "scroll-mt-[205px] lg:scroll-mt-[156px] font-bold mb-2 !text-4xl mt-12 tracking-tight"
      }, _attrs))}>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        href: `#${_ctx.id}`,
        class: "group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="-ml-6 pr-2 py-2 inline-flex opacity-0 group-hover:opacity-100 transition-opacity absolute h-10"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Icon), {
              icon: "heroicons:hashtag-20-solid",
              class: "w-5 h-5 text-green-400 my-auto"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              createVNode("div", { class: "-ml-6 pr-2 py-2 inline-flex opacity-0 group-hover:opacity-100 transition-opacity absolute h-10" }, [
                createVNode(unref(Icon), {
                  icon: "heroicons:hashtag-20-solid",
                  class: "w-5 h-5 text-green-400 my-auto"
                })
              ]),
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`</h1>`);
    };
  }
});
const _sfc_setup$1E = _sfc_main$1E.setup;
_sfc_main$1E.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../components/prose/ProseH1.vue");
  return _sfc_setup$1E ? _sfc_setup$1E(props, ctx) : void 0;
};
const _sfc_main$1D = /* @__PURE__ */ defineComponent({
  __name: "ProseH2",
  __ssrInlineRender: true,
  props: {
    id: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = resolveComponent("NuxtLink");
      _push(`<h2${ssrRenderAttrs(mergeProps({
        id: _ctx.id,
        class: "scroll-mt-[180px] lg:scroll-mt-[141px] font-semibold mb-2.5 text-3xl mt-12"
      }, _attrs))}>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        href: `#${_ctx.id}`,
        class: "group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="-ml-6 pr-2 py-2 inline-flex opacity-0 group-hover:opacity-100 transition-opacity absolute my-auto"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Icon), {
              icon: "heroicons:hashtag-20-solid",
              class: "w-5 h-5 text-green-400"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              createVNode("div", { class: "-ml-6 pr-2 py-2 inline-flex opacity-0 group-hover:opacity-100 transition-opacity absolute my-auto" }, [
                createVNode(unref(Icon), {
                  icon: "heroicons:hashtag-20-solid",
                  class: "w-5 h-5 text-green-400"
                })
              ]),
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`</h2>`);
    };
  }
});
const _sfc_setup$1D = _sfc_main$1D.setup;
_sfc_main$1D.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../components/prose/ProseH2.vue");
  return _sfc_setup$1D ? _sfc_setup$1D(props, ctx) : void 0;
};
const _sfc_main$1C = /* @__PURE__ */ defineComponent({
  __name: "ProseH3",
  __ssrInlineRender: true,
  props: {
    id: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = resolveComponent("NuxtLink");
      _push(`<h3${ssrRenderAttrs(mergeProps({
        id: _ctx.id,
        class: "scroll-mt-[175px] lg:scroll-mt-[126px] font-semibold mb-1 text-xl mt-11"
      }, _attrs))}>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        href: `#${_ctx.id}`,
        class: "group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="-ml-6 pr-2 inline-flex opacity-0 group-hover:opacity-100 transition-opacity absolute h-7"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Icon), {
              icon: "heroicons:hashtag-20-solid",
              class: "w-4 h-4 text-green-400 my-auto"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              createVNode("div", { class: "-ml-6 pr-2 inline-flex opacity-0 group-hover:opacity-100 transition-opacity absolute h-7" }, [
                createVNode(unref(Icon), {
                  icon: "heroicons:hashtag-20-solid",
                  class: "w-4 h-4 text-green-400 my-auto"
                })
              ]),
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`</h3>`);
    };
  }
});
const _sfc_setup$1C = _sfc_main$1C.setup;
_sfc_main$1C.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../components/prose/ProseH3.vue");
  return _sfc_setup$1C ? _sfc_setup$1C(props, ctx) : void 0;
};
const _sfc_main$1B = {};
const _sfc_setup$1B = _sfc_main$1B.setup;
_sfc_main$1B.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../components/prose/ProseP.vue");
  return _sfc_setup$1B ? _sfc_setup$1B(props, ctx) : void 0;
};
const _sfc_main$1A = {};
function _sfc_ssrRender$i(_ctx, _push, _parent, _attrs) {
  _push(`<th${ssrRenderAttrs(mergeProps({ class: "h-10 pb-1 [&:not(:first-child)]:pl-4 text-left" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</th>`);
}
const _sfc_setup$1A = _sfc_main$1A.setup;
_sfc_main$1A.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../components/prose/ProseTh.vue");
  return _sfc_setup$1A ? _sfc_setup$1A(props, ctx) : void 0;
};
const ProseTh = /* @__PURE__ */ _export_sfc(_sfc_main$1A, [["ssrRender", _sfc_ssrRender$i]]);
const _sfc_main$1z = {};
function _sfc_ssrRender$h(_ctx, _push, _parent, _attrs) {
  _push(`<td${ssrRenderAttrs(mergeProps({ class: "h-12 pb-1 [&:not(:first-child)]:pl-4 text-left" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</td>`);
}
const _sfc_setup$1z = _sfc_main$1z.setup;
_sfc_main$1z.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../components/prose/ProseTd.vue");
  return _sfc_setup$1z ? _sfc_setup$1z(props, ctx) : void 0;
};
const ProseTd = /* @__PURE__ */ _export_sfc(_sfc_main$1z, [["ssrRender", _sfc_ssrRender$h]]);
const _sfc_main$1y = {};
function _sfc_ssrRender$g(_ctx, _push, _parent, _attrs) {
  _push(`<tr${ssrRenderAttrs(mergeProps({ class: "rounded-md overflow-hidden dark:!bg-[var(--vp-code-block-bg)]" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</tr>`);
}
const _sfc_setup$1y = _sfc_main$1y.setup;
_sfc_main$1y.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../components/prose/ProseTr.vue");
  return _sfc_setup$1y ? _sfc_setup$1y(props, ctx) : void 0;
};
const ProseTr = /* @__PURE__ */ _export_sfc(_sfc_main$1y, [["ssrRender", _sfc_ssrRender$g]]);
const _sfc_main$1x = /* @__PURE__ */ defineComponent({
  __name: "ProseCodeInline",
  __ssrInlineRender: true,
  props: {
    variant: { default: "primary" }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<code${ssrRenderAttrs(mergeProps({
        class: ["py-0.5 px-1 rounded-none inline", `${props.variant === "primary" ? "dark:!bg-[#0F291E] dark:!text-[#4CC38A]" : "dark:!bg-neutral-600/30 dark:!text-neutral-400"}`]
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</code>`);
    };
  }
});
const _sfc_setup$1x = _sfc_main$1x.setup;
_sfc_main$1x.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../components/prose/ProseCodeInline.vue");
  return _sfc_setup$1x ? _sfc_setup$1x(props, ctx) : void 0;
};
const _sfc_main$1w = {};
function _sfc_ssrRender$f(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "-mx-6 md:mx-0 overflow-x-auto mb-12 mt-5 relative" }, _attrs))}><table class="w-full !table border-b border-[var(--vp-c-divider)] border-x my-0">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</table></div>`);
}
const _sfc_setup$1w = _sfc_main$1w.setup;
_sfc_main$1w.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../components/prose/ProseTable.vue");
  return _sfc_setup$1w ? _sfc_setup$1w(props, ctx) : void 0;
};
const ProseTable = /* @__PURE__ */ _export_sfc(_sfc_main$1w, [["ssrRender", _sfc_ssrRender$f]]);
const _sfc_main$1v = {};
function _sfc_ssrRender$e(_ctx, _push, _parent, _attrs) {
  _push(`<thead${ssrRenderAttrs(_attrs)}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</thead>`);
}
const _sfc_setup$1v = _sfc_main$1v.setup;
_sfc_main$1v.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../components/prose/ProseThead.vue");
  return _sfc_setup$1v ? _sfc_setup$1v(props, ctx) : void 0;
};
const ProseThead = /* @__PURE__ */ _export_sfc(_sfc_main$1v, [["ssrRender", _sfc_ssrRender$e]]);
const _sfc_main$1u = {};
function _sfc_ssrRender$d(_ctx, _push, _parent, _attrs) {
  _push(`<tbody${ssrRenderAttrs(_attrs)}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</tbody>`);
}
const _sfc_setup$1u = _sfc_main$1u.setup;
_sfc_main$1u.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../components/prose/ProseTbody.vue");
  return _sfc_setup$1u ? _sfc_setup$1u(props, ctx) : void 0;
};
const ProseTbody = /* @__PURE__ */ _export_sfc(_sfc_main$1u, [["ssrRender", _sfc_ssrRender$d]]);
const _sfc_main$1t = /* @__PURE__ */ defineComponent({
  __name: "CssVariablesTable",
  __ssrInlineRender: true,
  props: {
    data: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(ProseTable), _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(ProseThead), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(ProseTr), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(ProseTh), { class: "w-[45%]" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<span${_scopeId4}>CSS Variable</span>`);
                            } else {
                              return [
                                createVNode("span", null, "CSS Variable")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(ProseTh), { class: "w-[55%]" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<span${_scopeId4}>Description</span>`);
                            } else {
                              return [
                                createVNode("span", null, "Description")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(ProseTh), { class: "w-[45%]" }, {
                            default: withCtx(() => [
                              createVNode("span", null, "CSS Variable")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(ProseTh), { class: "w-[55%]" }, {
                            default: withCtx(() => [
                              createVNode("span", null, "Description")
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
                    createVNode(unref(ProseTr), null, {
                      default: withCtx(() => [
                        createVNode(unref(ProseTh), { class: "w-[45%]" }, {
                          default: withCtx(() => [
                            createVNode("span", null, "CSS Variable")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(ProseTh), { class: "w-[55%]" }, {
                          default: withCtx(() => [
                            createVNode("span", null, "Description")
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
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(ProseTbody), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(props.data, (prop, index) => {
                    _push3(ssrRenderComponent(unref(ProseTr), {
                      key: `${prop.cssVariable}-${index}`
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(ProseTd), null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(unref(_sfc_main$1x), { class: "!whitespace-normal py-1" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`${ssrInterpolate(prop.cssVariable)}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(prop.cssVariable), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(unref(_sfc_main$1x), { class: "!whitespace-normal py-1" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(prop.cssVariable), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(unref(ProseTd), { class: "" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="flex items-center gap-1"${_scopeId4}><span size="2" class="leading-5"${_scopeId4}>${prop.description}</span></div>`);
                              } else {
                                return [
                                  createVNode("div", { class: "flex items-center gap-1" }, [
                                    createVNode("span", {
                                      size: "2",
                                      class: "leading-5",
                                      innerHTML: prop.description
                                    }, null, 8, ["innerHTML"])
                                  ])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(unref(ProseTd), null, {
                              default: withCtx(() => [
                                createVNode(unref(_sfc_main$1x), { class: "!whitespace-normal py-1" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(prop.cssVariable), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(unref(ProseTd), { class: "" }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "flex items-center gap-1" }, [
                                  createVNode("span", {
                                    size: "2",
                                    class: "leading-5",
                                    innerHTML: prop.description
                                  }, null, 8, ["innerHTML"])
                                ])
                              ]),
                              _: 2
                            }, 1024)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(props.data, (prop, index) => {
                      return openBlock(), createBlock(unref(ProseTr), {
                        key: `${prop.cssVariable}-${index}`
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(ProseTd), null, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$1x), { class: "!whitespace-normal py-1" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(prop.cssVariable), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(unref(ProseTd), { class: "" }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "flex items-center gap-1" }, [
                                createVNode("span", {
                                  size: "2",
                                  class: "leading-5",
                                  innerHTML: prop.description
                                }, null, 8, ["innerHTML"])
                              ])
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(ProseThead), null, {
                default: withCtx(() => [
                  createVNode(unref(ProseTr), null, {
                    default: withCtx(() => [
                      createVNode(unref(ProseTh), { class: "w-[45%]" }, {
                        default: withCtx(() => [
                          createVNode("span", null, "CSS Variable")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(ProseTh), { class: "w-[55%]" }, {
                        default: withCtx(() => [
                          createVNode("span", null, "Description")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(unref(ProseTbody), null, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(props.data, (prop, index) => {
                    return openBlock(), createBlock(unref(ProseTr), {
                      key: `${prop.cssVariable}-${index}`
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(ProseTd), null, {
                          default: withCtx(() => [
                            createVNode(unref(_sfc_main$1x), { class: "!whitespace-normal py-1" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(prop.cssVariable), 1)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(unref(ProseTd), { class: "" }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "flex items-center gap-1" }, [
                              createVNode("span", {
                                size: "2",
                                class: "leading-5",
                                innerHTML: prop.description
                              }, null, 8, ["innerHTML"])
                            ])
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024);
                  }), 128))
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
const _sfc_setup$1t = _sfc_main$1t.setup;
_sfc_main$1t.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../components/tables/CssVariablesTable.vue");
  return _sfc_setup$1t ? _sfc_setup$1t(props, ctx) : void 0;
};
const __vite_glob_1_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$1t
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$1s = /* @__PURE__ */ defineComponent({
  __name: "DataAttributesTable",
  __ssrInlineRender: true,
  props: {
    data: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(ProseTable), _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="absolute top-0 right-2 w-8 h-8 rounded-full border flex items-center justify-center text-[var(--vp-c-text-2)] bg-[var(--vp-button-alt-bg)] border-[var(--vp-c-gray-soft)]"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Icon), { icon: "ph:tag-light" }, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(unref(ProseThead), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(ProseTr), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(ProseTh), { class: "w-[45%]" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<span${_scopeId4}>Data Attribute</span>`);
                            } else {
                              return [
                                createVNode("span", null, "Data Attribute")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(ProseTh), { class: "w-[55%]" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<span${_scopeId4}>Value</span>`);
                            } else {
                              return [
                                createVNode("span", null, "Value")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(ProseTh), { class: "w-[45%]" }, {
                            default: withCtx(() => [
                              createVNode("span", null, "Data Attribute")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(ProseTh), { class: "w-[55%]" }, {
                            default: withCtx(() => [
                              createVNode("span", null, "Value")
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
                    createVNode(unref(ProseTr), null, {
                      default: withCtx(() => [
                        createVNode(unref(ProseTh), { class: "w-[45%]" }, {
                          default: withCtx(() => [
                            createVNode("span", null, "Data Attribute")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(ProseTh), { class: "w-[55%]" }, {
                          default: withCtx(() => [
                            createVNode("span", null, "Value")
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
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(ProseTbody), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(props.data, (prop, index) => {
                    _push3(ssrRenderComponent(unref(ProseTr), {
                      key: `${prop.attribute}-${index}`
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(ProseTd), null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(unref(_sfc_main$1x), { class: "!text-[13px]" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`${ssrInterpolate(prop.attribute)}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(prop.attribute), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(unref(_sfc_main$1x), { class: "!text-[13px]" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(prop.attribute), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(unref(ProseTd), { class: "" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                if (Array.isArray(prop.values)) {
                                  _push5(ssrRenderComponent(unref(_sfc_main$1x), { variant: "secondary" }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(`<!--[-->`);
                                        ssrRenderList(prop.values, (value, propIndex) => {
                                          _push6(`<span${_scopeId5}>${ssrInterpolate(propIndex + 1 !== prop.values.length ? `"${value}" | ` : `"${value}"`)}</span>`);
                                        });
                                        _push6(`<!--]-->`);
                                      } else {
                                        return [
                                          (openBlock(true), createBlock(Fragment, null, renderList(prop.values, (value, propIndex) => {
                                            return openBlock(), createBlock("span", { key: value }, toDisplayString(propIndex + 1 !== prop.values.length ? `"${value}" | ` : `"${value}"`), 1);
                                          }), 128))
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                } else {
                                  _push5(`<span${_scopeId4}>${ssrInterpolate(prop.values)}</span>`);
                                }
                              } else {
                                return [
                                  Array.isArray(prop.values) ? (openBlock(), createBlock(unref(_sfc_main$1x), {
                                    key: 0,
                                    variant: "secondary"
                                  }, {
                                    default: withCtx(() => [
                                      (openBlock(true), createBlock(Fragment, null, renderList(prop.values, (value, propIndex) => {
                                        return openBlock(), createBlock("span", { key: value }, toDisplayString(propIndex + 1 !== prop.values.length ? `"${value}" | ` : `"${value}"`), 1);
                                      }), 128))
                                    ]),
                                    _: 2
                                  }, 1024)) : (openBlock(), createBlock("span", { key: 1 }, toDisplayString(prop.values), 1))
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(unref(ProseTd), null, {
                              default: withCtx(() => [
                                createVNode(unref(_sfc_main$1x), { class: "!text-[13px]" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(prop.attribute), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(unref(ProseTd), { class: "" }, {
                              default: withCtx(() => [
                                Array.isArray(prop.values) ? (openBlock(), createBlock(unref(_sfc_main$1x), {
                                  key: 0,
                                  variant: "secondary"
                                }, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(prop.values, (value, propIndex) => {
                                      return openBlock(), createBlock("span", { key: value }, toDisplayString(propIndex + 1 !== prop.values.length ? `"${value}" | ` : `"${value}"`), 1);
                                    }), 128))
                                  ]),
                                  _: 2
                                }, 1024)) : (openBlock(), createBlock("span", { key: 1 }, toDisplayString(prop.values), 1))
                              ]),
                              _: 2
                            }, 1024)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(props.data, (prop, index) => {
                      return openBlock(), createBlock(unref(ProseTr), {
                        key: `${prop.attribute}-${index}`
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(ProseTd), null, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$1x), { class: "!text-[13px]" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(prop.attribute), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(unref(ProseTd), { class: "" }, {
                            default: withCtx(() => [
                              Array.isArray(prop.values) ? (openBlock(), createBlock(unref(_sfc_main$1x), {
                                key: 0,
                                variant: "secondary"
                              }, {
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList(prop.values, (value, propIndex) => {
                                    return openBlock(), createBlock("span", { key: value }, toDisplayString(propIndex + 1 !== prop.values.length ? `"${value}" | ` : `"${value}"`), 1);
                                  }), 128))
                                ]),
                                _: 2
                              }, 1024)) : (openBlock(), createBlock("span", { key: 1 }, toDisplayString(prop.values), 1))
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "absolute top-0 right-2 w-8 h-8 rounded-full border flex items-center justify-center text-[var(--vp-c-text-2)] bg-[var(--vp-button-alt-bg)] border-[var(--vp-c-gray-soft)]" }, [
                createVNode(unref(Icon), { icon: "ph:tag-light" })
              ]),
              createVNode(unref(ProseThead), null, {
                default: withCtx(() => [
                  createVNode(unref(ProseTr), null, {
                    default: withCtx(() => [
                      createVNode(unref(ProseTh), { class: "w-[45%]" }, {
                        default: withCtx(() => [
                          createVNode("span", null, "Data Attribute")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(ProseTh), { class: "w-[55%]" }, {
                        default: withCtx(() => [
                          createVNode("span", null, "Value")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(unref(ProseTbody), null, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(props.data, (prop, index) => {
                    return openBlock(), createBlock(unref(ProseTr), {
                      key: `${prop.attribute}-${index}`
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(ProseTd), null, {
                          default: withCtx(() => [
                            createVNode(unref(_sfc_main$1x), { class: "!text-[13px]" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(prop.attribute), 1)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(unref(ProseTd), { class: "" }, {
                          default: withCtx(() => [
                            Array.isArray(prop.values) ? (openBlock(), createBlock(unref(_sfc_main$1x), {
                              key: 0,
                              variant: "secondary"
                            }, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(prop.values, (value, propIndex) => {
                                  return openBlock(), createBlock("span", { key: value }, toDisplayString(propIndex + 1 !== prop.values.length ? `"${value}" | ` : `"${value}"`), 1);
                                }), 128))
                              ]),
                              _: 2
                            }, 1024)) : (openBlock(), createBlock("span", { key: 1 }, toDisplayString(prop.values), 1))
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024);
                  }), 128))
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
const _sfc_setup$1s = _sfc_main$1s.setup;
_sfc_main$1s.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../components/tables/DataAttributesTable.vue");
  return _sfc_setup$1s ? _sfc_setup$1s(props, ctx) : void 0;
};
const __vite_glob_1_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$1s
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$1r = /* @__PURE__ */ defineComponent({
  __name: "EmitsTable",
  __ssrInlineRender: true,
  props: {
    data: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(ProseTable), _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="absolute top-0 right-2 w-8 h-8 rounded-full border flex items-center justify-center text-[var(--vp-c-text-2)] bg-[var(--vp-button-alt-bg)] border-[var(--vp-c-gray-soft)]"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Icon), { icon: "ph:at-light" }, null, _parent2, _scopeId));
            _push2(`</div><thead class=""${_scopeId}>`);
            _push2(ssrRenderComponent(unref(ProseTr), { class: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(ProseTh), { class: "w-1/3" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span${_scopeId3}>Emit</span>`);
                      } else {
                        return [
                          createVNode("span", null, "Emit")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(ProseTh), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span${_scopeId3}>Payload</span>`);
                      } else {
                        return [
                          createVNode("span", null, "Payload")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(ProseTh), { class: "w-1/3" }, {
                      default: withCtx(() => [
                        createVNode("span", null, "Emit")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(ProseTh), null, {
                      default: withCtx(() => [
                        createVNode("span", null, "Payload")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</thead><tbody${_scopeId}><!--[-->`);
            ssrRenderList(props.data, (prop, index) => {
              _push2(ssrRenderComponent(unref(ProseTr), {
                key: `${prop.name}-${index}`
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(ProseTd), null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="flex h-full items-start gap-1"${_scopeId3}>`);
                          _push4(ssrRenderComponent(unref(_sfc_main$1x), { class: "!text-[13px]" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(prop.name)}${ssrInterpolate(prop.required ? "*" : null)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(prop.name) + toDisplayString(prop.required ? "*" : null), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(`</div>`);
                        } else {
                          return [
                            createVNode("div", { class: "flex h-full items-start gap-1" }, [
                              createVNode(unref(_sfc_main$1x), { class: "!text-[13px]" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(prop.name) + toDisplayString(prop.required ? "*" : null), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(unref(ProseTd), null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(_sfc_main$1x), { variant: "secondary" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(prop.type)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(prop.type), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(`<div class="vp-raw [&amp;_a]:underline flex flex-col gap-2 mt-2 text-sm dark:text-neutral-300"${_scopeId3}>${prop.description}</div>`);
                        } else {
                          return [
                            createVNode(unref(_sfc_main$1x), { variant: "secondary" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(prop.type), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode("div", {
                              class: "vp-raw [&_a]:underline flex flex-col gap-2 mt-2 text-sm dark:text-neutral-300",
                              innerHTML: prop.description
                            }, null, 8, ["innerHTML"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(ProseTd), null, {
                        default: withCtx(() => [
                          createVNode("div", { class: "flex h-full items-start gap-1" }, [
                            createVNode(unref(_sfc_main$1x), { class: "!text-[13px]" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(prop.name) + toDisplayString(prop.required ? "*" : null), 1)
                              ]),
                              _: 2
                            }, 1024)
                          ])
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(unref(ProseTd), null, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$1x), { variant: "secondary" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(prop.type), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode("div", {
                            class: "vp-raw [&_a]:underline flex flex-col gap-2 mt-2 text-sm dark:text-neutral-300",
                            innerHTML: prop.description
                          }, null, 8, ["innerHTML"])
                        ]),
                        _: 2
                      }, 1024)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--></tbody>`);
          } else {
            return [
              createVNode("div", { class: "absolute top-0 right-2 w-8 h-8 rounded-full border flex items-center justify-center text-[var(--vp-c-text-2)] bg-[var(--vp-button-alt-bg)] border-[var(--vp-c-gray-soft)]" }, [
                createVNode(unref(Icon), { icon: "ph:at-light" })
              ]),
              createVNode("thead", { class: "" }, [
                createVNode(unref(ProseTr), { class: "" }, {
                  default: withCtx(() => [
                    createVNode(unref(ProseTh), { class: "w-1/3" }, {
                      default: withCtx(() => [
                        createVNode("span", null, "Emit")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(ProseTh), null, {
                      default: withCtx(() => [
                        createVNode("span", null, "Payload")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              createVNode("tbody", null, [
                (openBlock(true), createBlock(Fragment, null, renderList(props.data, (prop, index) => {
                  return openBlock(), createBlock(unref(ProseTr), {
                    key: `${prop.name}-${index}`
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(ProseTd), null, {
                        default: withCtx(() => [
                          createVNode("div", { class: "flex h-full items-start gap-1" }, [
                            createVNode(unref(_sfc_main$1x), { class: "!text-[13px]" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(prop.name) + toDisplayString(prop.required ? "*" : null), 1)
                              ]),
                              _: 2
                            }, 1024)
                          ])
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(unref(ProseTd), null, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$1x), { variant: "secondary" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(prop.type), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode("div", {
                            class: "vp-raw [&_a]:underline flex flex-col gap-2 mt-2 text-sm dark:text-neutral-300",
                            innerHTML: prop.description
                          }, null, 8, ["innerHTML"])
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024);
                }), 128))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$1r = _sfc_main$1r.setup;
_sfc_main$1r.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../components/tables/EmitsTable.vue");
  return _sfc_setup$1r ? _sfc_setup$1r(props, ctx) : void 0;
};
const __vite_glob_1_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$1r
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$1q = /* @__PURE__ */ defineComponent({
  __name: "KeyboardTable",
  __ssrInlineRender: true,
  props: {
    data: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(ProseTable), _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(ProseThead), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(ProseTr), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(ProseTh), { class: "" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<span${_scopeId4}>Key</span>`);
                            } else {
                              return [
                                createVNode("span", null, "Key")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(ProseTh), { class: "" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<span${_scopeId4}>Description</span>`);
                            } else {
                              return [
                                createVNode("span", null, "Description")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(ProseTh), { class: "" }, {
                            default: withCtx(() => [
                              createVNode("span", null, "Key")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(ProseTh), { class: "" }, {
                            default: withCtx(() => [
                              createVNode("span", null, "Description")
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
                    createVNode(unref(ProseTr), null, {
                      default: withCtx(() => [
                        createVNode(unref(ProseTh), { class: "" }, {
                          default: withCtx(() => [
                            createVNode("span", null, "Key")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(ProseTh), { class: "" }, {
                          default: withCtx(() => [
                            createVNode("span", null, "Description")
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
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(ProseTbody), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(props.data, (prop, index) => {
                    _push3(ssrRenderComponent(unref(ProseTr), {
                      key: `${prop}-${index}`
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(ProseTd), null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="flex items-center gap-1"${_scopeId4}><!--[-->`);
                                ssrRenderList(prop.keys, (key, propIndex) => {
                                  _push5(`<kbd class="font-sans rounded-md border bg-gray-100 dark:bg-neutral-900 dark:border-neutral-700 border-b-2 px-1.5 py-[1px]"${_scopeId4}>${ssrInterpolate(key)}</kbd>`);
                                });
                                _push5(`<!--]--></div>`);
                              } else {
                                return [
                                  createVNode("div", { class: "flex items-center gap-1" }, [
                                    (openBlock(true), createBlock(Fragment, null, renderList(prop.keys, (key, propIndex) => {
                                      return openBlock(), createBlock("kbd", {
                                        key: `${key}-${propIndex}`,
                                        class: "font-sans rounded-md border bg-gray-100 dark:bg-neutral-900 dark:border-neutral-700 border-b-2 px-1.5 py-[1px]"
                                      }, toDisplayString(key), 1);
                                    }), 128))
                                  ])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(unref(ProseTd), { class: "" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="flex items-center gap-1"${_scopeId4}><span${_scopeId4}>${prop.description}</span></div>`);
                              } else {
                                return [
                                  createVNode("div", { class: "flex items-center gap-1" }, [
                                    createVNode("span", {
                                      innerHTML: prop.description
                                    }, null, 8, ["innerHTML"])
                                  ])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(unref(ProseTd), null, {
                              default: withCtx(() => [
                                createVNode("div", { class: "flex items-center gap-1" }, [
                                  (openBlock(true), createBlock(Fragment, null, renderList(prop.keys, (key, propIndex) => {
                                    return openBlock(), createBlock("kbd", {
                                      key: `${key}-${propIndex}`,
                                      class: "font-sans rounded-md border bg-gray-100 dark:bg-neutral-900 dark:border-neutral-700 border-b-2 px-1.5 py-[1px]"
                                    }, toDisplayString(key), 1);
                                  }), 128))
                                ])
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(unref(ProseTd), { class: "" }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "flex items-center gap-1" }, [
                                  createVNode("span", {
                                    innerHTML: prop.description
                                  }, null, 8, ["innerHTML"])
                                ])
                              ]),
                              _: 2
                            }, 1024)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(props.data, (prop, index) => {
                      return openBlock(), createBlock(unref(ProseTr), {
                        key: `${prop}-${index}`
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(ProseTd), null, {
                            default: withCtx(() => [
                              createVNode("div", { class: "flex items-center gap-1" }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(prop.keys, (key, propIndex) => {
                                  return openBlock(), createBlock("kbd", {
                                    key: `${key}-${propIndex}`,
                                    class: "font-sans rounded-md border bg-gray-100 dark:bg-neutral-900 dark:border-neutral-700 border-b-2 px-1.5 py-[1px]"
                                  }, toDisplayString(key), 1);
                                }), 128))
                              ])
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(unref(ProseTd), { class: "" }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "flex items-center gap-1" }, [
                                createVNode("span", {
                                  innerHTML: prop.description
                                }, null, 8, ["innerHTML"])
                              ])
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(ProseThead), null, {
                default: withCtx(() => [
                  createVNode(unref(ProseTr), null, {
                    default: withCtx(() => [
                      createVNode(unref(ProseTh), { class: "" }, {
                        default: withCtx(() => [
                          createVNode("span", null, "Key")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(ProseTh), { class: "" }, {
                        default: withCtx(() => [
                          createVNode("span", null, "Description")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(unref(ProseTbody), null, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(props.data, (prop, index) => {
                    return openBlock(), createBlock(unref(ProseTr), {
                      key: `${prop}-${index}`
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(ProseTd), null, {
                          default: withCtx(() => [
                            createVNode("div", { class: "flex items-center gap-1" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(prop.keys, (key, propIndex) => {
                                return openBlock(), createBlock("kbd", {
                                  key: `${key}-${propIndex}`,
                                  class: "font-sans rounded-md border bg-gray-100 dark:bg-neutral-900 dark:border-neutral-700 border-b-2 px-1.5 py-[1px]"
                                }, toDisplayString(key), 1);
                              }), 128))
                            ])
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(unref(ProseTd), { class: "" }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "flex items-center gap-1" }, [
                              createVNode("span", {
                                innerHTML: prop.description
                              }, null, 8, ["innerHTML"])
                            ])
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024);
                  }), 128))
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
const _sfc_setup$1q = _sfc_main$1q.setup;
_sfc_main$1q.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../components/tables/KeyboardTable.vue");
  return _sfc_setup$1q ? _sfc_setup$1q(props, ctx) : void 0;
};
const __vite_glob_1_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$1q
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$1p = /* @__PURE__ */ defineComponent({
  __name: "PropsTable",
  __ssrInlineRender: true,
  props: {
    data: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(ProseTable), _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="absolute top-0 right-2 w-8 h-8 rounded-full border flex items-center justify-center text-[var(--vp-c-text-2)] bg-[var(--vp-button-alt-bg)] border-[var(--vp-c-gray-soft)]"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Icon), { icon: "ph:sliders-light" }, null, _parent2, _scopeId));
            _push2(`</div><thead class=""${_scopeId}>`);
            _push2(ssrRenderComponent(unref(ProseTr), { class: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(ProseTh), { class: "w-1/6" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span${_scopeId3}>Prop</span>`);
                      } else {
                        return [
                          createVNode("span", null, "Prop")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(ProseTh), { class: "w-1/6" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span${_scopeId3}>Default</span>`);
                      } else {
                        return [
                          createVNode("span", null, "Default")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(ProseTh), { class: "w-2/3" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span${_scopeId3}>Type</span>`);
                      } else {
                        return [
                          createVNode("span", null, "Type")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(ProseTh), { class: "w-1/6" }, {
                      default: withCtx(() => [
                        createVNode("span", null, "Prop")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(ProseTh), { class: "w-1/6" }, {
                      default: withCtx(() => [
                        createVNode("span", null, "Default")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(ProseTh), { class: "w-2/3" }, {
                      default: withCtx(() => [
                        createVNode("span", null, "Type")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</thead><tbody${_scopeId}><!--[-->`);
            ssrRenderList(props.data, (prop, index) => {
              _push2(ssrRenderComponent(unref(ProseTr), {
                key: `${prop.name}-${index}`
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(ProseTd), null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="flex h-full items-start gap-1"${_scopeId3}>`);
                          _push4(ssrRenderComponent(unref(_sfc_main$1x), { class: "!text-[13px]" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(prop.name)}${ssrInterpolate(prop.required ? "*" : null)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(prop.name) + toDisplayString(prop.required ? "*" : null), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(`</div>`);
                        } else {
                          return [
                            createVNode("div", { class: "flex h-full items-start gap-1" }, [
                              createVNode(unref(_sfc_main$1x), { class: "!text-[13px]" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(prop.name) + toDisplayString(prop.required ? "*" : null), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(unref(ProseTd), null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          if (prop.default) {
                            _push4(`<div class="flex h-full items-start gap-1"${_scopeId3}>`);
                            _push4(ssrRenderComponent(unref(_sfc_main$1x), { variant: "secondary" }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(prop.default)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(prop.default), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(`</div>`);
                          } else {
                            _push4(`<div as="{AccessibleIcon}" label="No default value"${_scopeId3}>`);
                            _push4(ssrRenderComponent(unref(Icon), { icon: "radix-icons:divider-horizontal" }, null, _parent4, _scopeId3));
                            _push4(`</div>`);
                          }
                        } else {
                          return [
                            prop.default ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "flex h-full items-start gap-1"
                            }, [
                              createVNode(unref(_sfc_main$1x), { variant: "secondary" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(prop.default), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ])) : (openBlock(), createBlock("div", {
                              key: 1,
                              as: "{AccessibleIcon}",
                              label: "No default value"
                            }, [
                              createVNode(unref(Icon), { icon: "radix-icons:divider-horizontal" })
                            ]))
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(unref(ProseTd), null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="flex items-center gap-1"${_scopeId3}><div${_scopeId3}>`);
                          _push4(ssrRenderComponent(unref(_sfc_main$1x), { variant: "secondary" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(prop.typeSimple ? prop.typeSimple : prop.type)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(prop.typeSimple ? prop.typeSimple : prop.type), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(`<div class="vp-raw [&amp;_a]:underline flex flex-col gap-2 mt-2 text-sm dark:text-neutral-300"${_scopeId3}>${prop.description}</div></div></div>`);
                        } else {
                          return [
                            createVNode("div", { class: "flex items-center gap-1" }, [
                              createVNode("div", null, [
                                createVNode(unref(_sfc_main$1x), { variant: "secondary" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(prop.typeSimple ? prop.typeSimple : prop.type), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode("div", {
                                  class: "vp-raw [&_a]:underline flex flex-col gap-2 mt-2 text-sm dark:text-neutral-300",
                                  innerHTML: prop.description
                                }, null, 8, ["innerHTML"])
                              ])
                            ])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(ProseTd), null, {
                        default: withCtx(() => [
                          createVNode("div", { class: "flex h-full items-start gap-1" }, [
                            createVNode(unref(_sfc_main$1x), { class: "!text-[13px]" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(prop.name) + toDisplayString(prop.required ? "*" : null), 1)
                              ]),
                              _: 2
                            }, 1024)
                          ])
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(unref(ProseTd), null, {
                        default: withCtx(() => [
                          prop.default ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "flex h-full items-start gap-1"
                          }, [
                            createVNode(unref(_sfc_main$1x), { variant: "secondary" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(prop.default), 1)
                              ]),
                              _: 2
                            }, 1024)
                          ])) : (openBlock(), createBlock("div", {
                            key: 1,
                            as: "{AccessibleIcon}",
                            label: "No default value"
                          }, [
                            createVNode(unref(Icon), { icon: "radix-icons:divider-horizontal" })
                          ]))
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(unref(ProseTd), null, {
                        default: withCtx(() => [
                          createVNode("div", { class: "flex items-center gap-1" }, [
                            createVNode("div", null, [
                              createVNode(unref(_sfc_main$1x), { variant: "secondary" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(prop.typeSimple ? prop.typeSimple : prop.type), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode("div", {
                                class: "vp-raw [&_a]:underline flex flex-col gap-2 mt-2 text-sm dark:text-neutral-300",
                                innerHTML: prop.description
                              }, null, 8, ["innerHTML"])
                            ])
                          ])
                        ]),
                        _: 2
                      }, 1024)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--></tbody>`);
          } else {
            return [
              createVNode("div", { class: "absolute top-0 right-2 w-8 h-8 rounded-full border flex items-center justify-center text-[var(--vp-c-text-2)] bg-[var(--vp-button-alt-bg)] border-[var(--vp-c-gray-soft)]" }, [
                createVNode(unref(Icon), { icon: "ph:sliders-light" })
              ]),
              createVNode("thead", { class: "" }, [
                createVNode(unref(ProseTr), { class: "" }, {
                  default: withCtx(() => [
                    createVNode(unref(ProseTh), { class: "w-1/6" }, {
                      default: withCtx(() => [
                        createVNode("span", null, "Prop")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(ProseTh), { class: "w-1/6" }, {
                      default: withCtx(() => [
                        createVNode("span", null, "Default")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(ProseTh), { class: "w-2/3" }, {
                      default: withCtx(() => [
                        createVNode("span", null, "Type")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              createVNode("tbody", null, [
                (openBlock(true), createBlock(Fragment, null, renderList(props.data, (prop, index) => {
                  return openBlock(), createBlock(unref(ProseTr), {
                    key: `${prop.name}-${index}`
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(ProseTd), null, {
                        default: withCtx(() => [
                          createVNode("div", { class: "flex h-full items-start gap-1" }, [
                            createVNode(unref(_sfc_main$1x), { class: "!text-[13px]" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(prop.name) + toDisplayString(prop.required ? "*" : null), 1)
                              ]),
                              _: 2
                            }, 1024)
                          ])
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(unref(ProseTd), null, {
                        default: withCtx(() => [
                          prop.default ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "flex h-full items-start gap-1"
                          }, [
                            createVNode(unref(_sfc_main$1x), { variant: "secondary" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(prop.default), 1)
                              ]),
                              _: 2
                            }, 1024)
                          ])) : (openBlock(), createBlock("div", {
                            key: 1,
                            as: "{AccessibleIcon}",
                            label: "No default value"
                          }, [
                            createVNode(unref(Icon), { icon: "radix-icons:divider-horizontal" })
                          ]))
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(unref(ProseTd), null, {
                        default: withCtx(() => [
                          createVNode("div", { class: "flex items-center gap-1" }, [
                            createVNode("div", null, [
                              createVNode(unref(_sfc_main$1x), { variant: "secondary" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(prop.typeSimple ? prop.typeSimple : prop.type), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode("div", {
                                class: "vp-raw [&_a]:underline flex flex-col gap-2 mt-2 text-sm dark:text-neutral-300",
                                innerHTML: prop.description
                              }, null, 8, ["innerHTML"])
                            ])
                          ])
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024);
                }), 128))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$1p = _sfc_main$1p.setup;
_sfc_main$1p.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../components/tables/PropsTable.vue");
  return _sfc_setup$1p ? _sfc_setup$1p(props, ctx) : void 0;
};
const __vite_glob_1_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$1p
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$1o = /* @__PURE__ */ defineComponent({
  __name: "SlotsTable",
  __ssrInlineRender: true,
  props: {
    data: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(ProseTable), _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="absolute top-0 right-2 w-8 h-8 rounded-full border flex items-center justify-center text-[var(--vp-c-text-2)] bg-[var(--vp-button-alt-bg)] border-[var(--vp-c-gray-soft)]"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Icon), { icon: "ph:square-logo-light" }, null, _parent2, _scopeId));
            _push2(`</div><thead class=""${_scopeId}>`);
            _push2(ssrRenderComponent(unref(ProseTr), { class: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(ProseTh), { class: "w-1/3" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span${_scopeId3}>Slots (default)</span>`);
                      } else {
                        return [
                          createVNode("span", null, "Slots (default)")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(ProseTh), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span${_scopeId3}>Payload</span>`);
                      } else {
                        return [
                          createVNode("span", null, "Payload")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(ProseTh), { class: "w-1/3" }, {
                      default: withCtx(() => [
                        createVNode("span", null, "Slots (default)")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(ProseTh), null, {
                      default: withCtx(() => [
                        createVNode("span", null, "Payload")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</thead><tbody${_scopeId}><!--[-->`);
            ssrRenderList(props.data, (prop, index) => {
              _push2(ssrRenderComponent(unref(ProseTr), {
                key: `${prop.name}-${index}`
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(ProseTd), null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="flex h-full items-start gap-1"${_scopeId3}>`);
                          _push4(ssrRenderComponent(unref(_sfc_main$1x), { class: "!text-[13px]" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(prop.name)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(prop.name), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(`</div>`);
                        } else {
                          return [
                            createVNode("div", { class: "flex h-full items-start gap-1" }, [
                              createVNode(unref(_sfc_main$1x), { class: "!text-[13px]" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(prop.name), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(unref(ProseTd), null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(_sfc_main$1x), { variant: "secondary" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(prop.type)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(prop.type), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(`<div class="vp-raw [&amp;_a]:underline flex flex-col gap-2 mt-2 text-sm dark:text-neutral-300"${_scopeId3}>${prop.description}</div>`);
                        } else {
                          return [
                            createVNode(unref(_sfc_main$1x), { variant: "secondary" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(prop.type), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode("div", {
                              class: "vp-raw [&_a]:underline flex flex-col gap-2 mt-2 text-sm dark:text-neutral-300",
                              innerHTML: prop.description
                            }, null, 8, ["innerHTML"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(ProseTd), null, {
                        default: withCtx(() => [
                          createVNode("div", { class: "flex h-full items-start gap-1" }, [
                            createVNode(unref(_sfc_main$1x), { class: "!text-[13px]" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(prop.name), 1)
                              ]),
                              _: 2
                            }, 1024)
                          ])
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(unref(ProseTd), null, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$1x), { variant: "secondary" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(prop.type), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode("div", {
                            class: "vp-raw [&_a]:underline flex flex-col gap-2 mt-2 text-sm dark:text-neutral-300",
                            innerHTML: prop.description
                          }, null, 8, ["innerHTML"])
                        ]),
                        _: 2
                      }, 1024)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--></tbody>`);
          } else {
            return [
              createVNode("div", { class: "absolute top-0 right-2 w-8 h-8 rounded-full border flex items-center justify-center text-[var(--vp-c-text-2)] bg-[var(--vp-button-alt-bg)] border-[var(--vp-c-gray-soft)]" }, [
                createVNode(unref(Icon), { icon: "ph:square-logo-light" })
              ]),
              createVNode("thead", { class: "" }, [
                createVNode(unref(ProseTr), { class: "" }, {
                  default: withCtx(() => [
                    createVNode(unref(ProseTh), { class: "w-1/3" }, {
                      default: withCtx(() => [
                        createVNode("span", null, "Slots (default)")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(ProseTh), null, {
                      default: withCtx(() => [
                        createVNode("span", null, "Payload")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              createVNode("tbody", null, [
                (openBlock(true), createBlock(Fragment, null, renderList(props.data, (prop, index) => {
                  return openBlock(), createBlock(unref(ProseTr), {
                    key: `${prop.name}-${index}`
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(ProseTd), null, {
                        default: withCtx(() => [
                          createVNode("div", { class: "flex h-full items-start gap-1" }, [
                            createVNode(unref(_sfc_main$1x), { class: "!text-[13px]" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(prop.name), 1)
                              ]),
                              _: 2
                            }, 1024)
                          ])
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(unref(ProseTd), null, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$1x), { variant: "secondary" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(prop.type), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode("div", {
                            class: "vp-raw [&_a]:underline flex flex-col gap-2 mt-2 text-sm dark:text-neutral-300",
                            innerHTML: prop.description
                          }, null, 8, ["innerHTML"])
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024);
                }), 128))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$1o = _sfc_main$1o.setup;
_sfc_main$1o.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../components/tables/SlotsTable.vue");
  return _sfc_setup$1o ? _sfc_setup$1o(props, ctx) : void 0;
};
const __vite_glob_1_5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$1o
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$1n = /* @__PURE__ */ defineComponent({
  __name: "VPBadge",
  __ssrInlineRender: true,
  props: {
    text: {},
    type: { default: "tip" }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<span${ssrRenderAttrs(mergeProps({
        class: ["VPBadge", _ctx.type]
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, () => {
        _push(`${ssrInterpolate(_ctx.text)}`);
      }, _push, _parent);
      _push(`</span>`);
    };
  }
});
const _sfc_setup$1n = _sfc_main$1n.setup;
_sfc_main$1n.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../node_modules/.pnpm/vitepress@1.0.0-rc.40_patch_hash=vch4e6zq55wljc7ph3vsefnawq_@algolia+client-search@4.22.1_@ty_cpywouop5vln4rtagwwqvxuyge/node_modules/vitepress/dist/client/theme-default/components/VPBadge.vue");
  return _sfc_setup$1n ? _sfc_setup$1n(props, ctx) : void 0;
};
function deserializeFunctions(r) {
  return Array.isArray(r) ? r.map(deserializeFunctions) : typeof r == "object" && r !== null ? Object.keys(r).reduce((t, n) => (t[n] = deserializeFunctions(r[n]), t), {}) : typeof r == "string" && r.startsWith("_vp-fn_") ? new Function(`return ${r.slice(7)}`)() : r;
}
const siteData = deserializeFunctions(JSON.parse('{"lang":"en-US","dir":"ltr","title":"Radix Vue","description":"Unstyled, accessible components for building high‑quality design systems and web apps in Vue","base":"/","head":[],"router":{"prefetchLinks":true},"appearance":"dark","themeConfig":{"nav":[{"text":"Docs","link":"/overview/getting-started.html"},{"text":"Showcase","link":"/showcase"},{"text":"v1.4.2","items":[{"text":"Release Notes ","link":"https://github.com/radix-vue/radix-vue/releases"}]}],"outline":{"level":[2,3]},"logo":"/logo.svg","sidebar":[{"text":"Overview","collapsed":false,"items":[{"text":"Introduction","link":"/overview/introduction"},{"text":"Getting Started","link":"/overview/getting-started"},{"text":"Installation","link":"/overview/installation"},{"text":"Accessibility","link":"/overview/accessibility"},{"text":"Releases","link":"/overview/releases"}]},{"text":"Guides","collapsed":false,"items":[{"text":"Styling","link":"/guides/styling"},{"text":"Animation/Transition","link":"/guides/animation"},{"text":"Composition","link":"/guides/composition"},{"text":"Server side rendering","link":"/guides/server-side-rendering"},{"text":"Namespaced","link":"/guides/namespaced-components"}]},{"text":"Components","collapsed":false,"items":[{"text":"Accordion","link":"/components/accordion"},{"text":"Alert Dialog","link":"/components/alert-dialog"},{"text":"Aspect Ratio","link":"/components/aspect-ratio"},{"text":"Avatar","link":"/components/avatar"},{"text":"Checkbox","link":"/components/checkbox"},{"text":"Collapsible","link":"/components/collapsible"},{"text":"Combobox","link":"/components/combobox"},{"text":"Context Menu","link":"/components/context-menu"},{"text":"Dialog","link":"/components/dialog"},{"text":"Dropdown Menu","link":"/components/dropdown-menu"},{"text":"Hover Card","link":"/components/hover-card"},{"text":"Label","link":"/components/label"},{"text":"Menubar","link":"/components/menubar"},{"text":"Navigation Menu","link":"/components/navigation-menu"},{"text":"Pagination","link":"/components/pagination"},{"text":"Pin Input","link":"/components/pin-input"},{"text":"Popover","link":"/components/popover"},{"text":"Progress","link":"/components/progress"},{"text":"Radio Group","link":"/components/radio-group"},{"text":"Scroll Area","link":"/components/scroll-area"},{"text":"Select","link":"/components/select"},{"text":"Separator","link":"/components/separator"},{"text":"Slider","link":"/components/slider"},{"text":"Switch","link":"/components/switch"},{"text":"Tabs","link":"/components/tabs"},{"text":"Tags Input","link":"/components/tags-input"},{"text":"Toast","link":"/components/toast"},{"text":"Toggle","link":"/components/toggle"},{"text":"Toggle Group","link":"/components/toggle-group"},{"text":"Toolbar","link":"/components/toolbar"},{"text":"Tooltip","link":"/components/tooltip"}]},{"text":"Utilities","collapsed":false,"items":[{"text":"Config Provider","link":"/utilities/config-provider"},{"text":"Visually Hidden","link":"/utilities/visually-hidden"},{"text":"Primitive","link":"/utilities/primitive"},{"text":"Slot","link":"/utilities/slot"},{"text":"useId","link":"/utilities/use-id"},{"text":"useEmitAsProps","link":"/utilities/use-emit-as-props"},{"text":"useForwardExpose","link":"/utilities/use-forward-expose"},{"text":"useForwardProps","link":"/utilities/use-forward-props"},{"text":"useForwardPropsEmits","link":"/utilities/use-forward-props-emits"}]}],"socialLinks":[{"icon":"discord","link":"https://chat.radix-vue.com"},{"icon":"github","link":"https://github.com/radix-vue/radix-vue"}],"search":{"provider":"local"},"editLink":{"pattern":"https://github.com/radix-vue/radix-vue/edit/main/docs/content/:path"}},"locales":{},"scrollOffset":134,"cleanUrls":false}'));
var define_import_meta_env_default = { BASE_URL: "/", MODE: "production", DEV: false, PROD: true, SSR: true };
const EXTERNAL_URL_RE = /^(?:[a-z]+:|\/\/)/i;
const APPEARANCE_KEY = "vitepress-theme-appearance";
const HASH_RE = /#.*$/;
const EXT_RE = /(index)?\.(md|html)$/;
const inBrowser = typeof document !== "undefined";
const notFoundPageData = {
  relativePath: "",
  filePath: "",
  title: "404",
  description: "Not Found",
  headers: [],
  frontmatter: { sidebar: false, layout: "page" },
  lastUpdated: 0,
  isNotFound: true
};
function isActive(currentPath, matchPath, asRegex = false) {
  if (matchPath === void 0) {
    return false;
  }
  currentPath = normalize(`/${currentPath}`);
  if (asRegex) {
    return new RegExp(matchPath).test(currentPath);
  }
  if (normalize(matchPath) !== currentPath) {
    return false;
  }
  const hashMatch = matchPath.match(HASH_RE);
  if (hashMatch) {
    return (inBrowser ? location.hash : "") === hashMatch[0];
  }
  return true;
}
function normalize(path) {
  return decodeURI(path).replace(HASH_RE, "").replace(EXT_RE, "");
}
function isExternal(path) {
  return EXTERNAL_URL_RE.test(path);
}
function resolveSiteDataByRoute(siteData2, relativePath) {
  var _a, _b, _c2, _d, _e, _f, _g;
  const localeIndex = Object.keys(siteData2.locales).find((key) => key !== "root" && !isExternal(key) && isActive(relativePath, `/${key}/`, true)) || "root";
  return Object.assign({}, siteData2, {
    localeIndex,
    lang: ((_a = siteData2.locales[localeIndex]) == null ? void 0 : _a.lang) ?? siteData2.lang,
    dir: ((_b = siteData2.locales[localeIndex]) == null ? void 0 : _b.dir) ?? siteData2.dir,
    title: ((_c2 = siteData2.locales[localeIndex]) == null ? void 0 : _c2.title) ?? siteData2.title,
    titleTemplate: ((_d = siteData2.locales[localeIndex]) == null ? void 0 : _d.titleTemplate) ?? siteData2.titleTemplate,
    description: ((_e = siteData2.locales[localeIndex]) == null ? void 0 : _e.description) ?? siteData2.description,
    head: mergeHead(siteData2.head, ((_f = siteData2.locales[localeIndex]) == null ? void 0 : _f.head) ?? []),
    themeConfig: {
      ...siteData2.themeConfig,
      ...(_g = siteData2.locales[localeIndex]) == null ? void 0 : _g.themeConfig
    }
  });
}
function createTitle(siteData2, pageData) {
  const title = pageData.title || siteData2.title;
  const template = pageData.titleTemplate ?? siteData2.titleTemplate;
  if (typeof template === "string" && template.includes(":title")) {
    return template.replace(/:title/g, title);
  }
  const templateString = createTitleTemplate(siteData2.title, template);
  if (title === templateString.slice(3)) {
    return title;
  }
  return `${title}${templateString}`;
}
function createTitleTemplate(siteTitle, template) {
  if (template === false) {
    return "";
  }
  if (template === true || template === void 0) {
    return ` | ${siteTitle}`;
  }
  if (siteTitle === template) {
    return "";
  }
  return ` | ${template}`;
}
function hasTag(head, tag) {
  const [tagType, tagAttrs] = tag;
  if (tagType !== "meta")
    return false;
  const keyAttr = Object.entries(tagAttrs)[0];
  if (keyAttr == null)
    return false;
  return head.some(([type, attrs]) => type === tagType && attrs[keyAttr[0]] === keyAttr[1]);
}
function mergeHead(prev, curr) {
  return [...prev.filter((tagAttrs) => !hasTag(curr, tagAttrs)), ...curr];
}
const INVALID_CHAR_REGEX = /[\u0000-\u001F"#$&*+,:;<=>?[\]^`{|}\u007F]/g;
const DRIVE_LETTER_REGEX = /^[a-z]:/i;
function sanitizeFileName(name) {
  const match = DRIVE_LETTER_REGEX.exec(name);
  const driveLetter = match ? match[0] : "";
  return driveLetter + name.slice(driveLetter.length).replace(INVALID_CHAR_REGEX, "_").replace(/(^|\/)_+(?=[^/]*$)/, "$1");
}
const extraExts = typeof process === "object" && process.env.VITE_EXTRA_EXTENSIONS || (define_import_meta_env_default == null ? void 0 : define_import_meta_env_default.VITE_EXTRA_EXTENSIONS) || "";
const KNOWN_EXTENSIONS = new Set(("3g2,3gp,aac,ai,apng,au,avif,bin,bmp,cer,class,conf,crl,css,csv,dll,doc,eps,epub,exe,gif,gz,ics,ief,jar,jpe,jpeg,jpg,js,json,jsonld,m4a,man,mid,midi,mjs,mov,mp2,mp3,mp4,mpe,mpeg,mpg,mpp,oga,ogg,ogv,ogx,opus,otf,p10,p7c,p7m,p7s,pdf,png,ps,qt,roff,rtf,rtx,ser,svg,t,tif,tiff,tr,ts,tsv,ttf,txt,vtt,wav,weba,webm,webp,woff,woff2,xhtml,xml,yaml,yml,zip" + (extraExts && typeof extraExts === "string" ? "," + extraExts : "")).split(","));
function treatAsHtml(filename) {
  const ext = filename.split(".").pop();
  return ext == null || !KNOWN_EXTENSIONS.has(ext.toLowerCase());
}
function escapeRegExp(str) {
  return str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
const dataSymbol = Symbol();
const siteDataRef = shallowRef(siteData);
function initData(route) {
  const site = computed(() => resolveSiteDataByRoute(siteDataRef.value, route.data.relativePath));
  const appearance = site.value.appearance;
  const isDark = appearance === "force-dark" ? ref(true) : appearance ? useDark({
    storageKey: APPEARANCE_KEY,
    initialValue: () => typeof appearance === "string" ? appearance : "auto",
    ...typeof appearance === "object" ? appearance : {}
  }) : ref(false);
  return {
    site,
    theme: computed(() => site.value.themeConfig),
    page: computed(() => route.data),
    frontmatter: computed(() => route.data.frontmatter),
    params: computed(() => route.data.params),
    lang: computed(() => site.value.lang),
    dir: computed(() => route.data.frontmatter.dir || site.value.dir),
    localeIndex: computed(() => site.value.localeIndex || "root"),
    title: computed(() => createTitle(site.value, route.data)),
    description: computed(() => route.data.description || site.value.description),
    isDark
  };
}
function useData$1() {
  const data = inject(dataSymbol);
  if (!data) {
    throw new Error("vitepress data not properly injected in app");
  }
  return data;
}
function joinPath(base, path) {
  return `${base}${path}`.replace(/\/+/g, "/");
}
function withBase(path) {
  return EXTERNAL_URL_RE.test(path) || !path.startsWith("/") ? path : joinPath(siteDataRef.value.base, path);
}
function pathToFile(path) {
  let pagePath = path.replace(/\.html$/, "");
  pagePath = decodeURIComponent(pagePath);
  pagePath = pagePath.replace(/\/$/, "/index");
  {
    if (inBrowser) {
      const base = "/";
      pagePath = sanitizeFileName(pagePath.slice(base.length).replace(/\//g, "_") || "index") + ".md";
      let pageHash = __VP_HASH_MAP__[pagePath.toLowerCase()];
      if (!pageHash) {
        pagePath = pagePath.endsWith("_index.md") ? pagePath.slice(0, -9) + ".md" : pagePath.slice(0, -3) + "_index.md";
        pageHash = __VP_HASH_MAP__[pagePath.toLowerCase()];
      }
      if (!pageHash)
        return null;
      pagePath = `${base}${"assets"}/${pagePath}.${pageHash}.js`;
    } else {
      pagePath = `./${sanitizeFileName(pagePath.slice(1).replace(/\//g, "_"))}.md.js`;
    }
  }
  return pagePath;
}
let contentUpdatedCallbacks = [];
function onContentUpdated(fn) {
  contentUpdatedCallbacks.push(fn);
  onUnmounted(() => {
    contentUpdatedCallbacks = contentUpdatedCallbacks.filter((f) => f !== fn);
  });
}
function getScrollOffset() {
  let scrollOffset = siteDataRef.value.scrollOffset;
  let offset = 0;
  let padding = 24;
  if (typeof scrollOffset === "object" && "padding" in scrollOffset) {
    padding = scrollOffset.padding;
    scrollOffset = scrollOffset.selector;
  }
  if (typeof scrollOffset === "number") {
    offset = scrollOffset;
  } else if (typeof scrollOffset === "string") {
    offset = tryOffsetSelector(scrollOffset, padding);
  } else if (Array.isArray(scrollOffset)) {
    for (const selector of scrollOffset) {
      const res = tryOffsetSelector(selector, padding);
      if (res) {
        offset = res;
        break;
      }
    }
  }
  return offset;
}
function tryOffsetSelector(selector, padding) {
  const el = document.querySelector(selector);
  if (!el)
    return 0;
  const bot = el.getBoundingClientRect().bottom;
  if (bot < 0)
    return 0;
  return bot + padding;
}
const RouterSymbol = Symbol();
const fakeHost = "http://a.com";
const getDefaultRoute = () => ({
  path: "/",
  component: null,
  data: notFoundPageData
});
function createRouter(loadPageModule, fallbackComponent) {
  const route = reactive(getDefaultRoute());
  const router = {
    route,
    go
  };
  async function go(href = inBrowser ? location.href : "/") {
    var _a, _b;
    href = normalizeHref(href);
    if (await ((_a = router.onBeforeRouteChange) == null ? void 0 : _a.call(router, href)) === false)
      return;
    updateHistory(href);
    await loadPage(href);
    await ((_b = router.onAfterRouteChanged) == null ? void 0 : _b.call(router, href));
  }
  let latestPendingPath = null;
  async function loadPage(href, scrollPosition = 0, isRetry = false) {
    var _a;
    if (await ((_a = router.onBeforePageLoad) == null ? void 0 : _a.call(router, href)) === false)
      return;
    const targetLoc = new URL(href, fakeHost);
    const pendingPath = latestPendingPath = targetLoc.pathname;
    try {
      let page = await loadPageModule(pendingPath);
      if (!page) {
        throw new Error(`Page not found: ${pendingPath}`);
      }
      if (latestPendingPath === pendingPath) {
        latestPendingPath = null;
        const { default: comp, __pageData } = page;
        if (!comp) {
          throw new Error(`Invalid route component: ${comp}`);
        }
        route.path = inBrowser ? pendingPath : withBase(pendingPath);
        route.component = markRaw(comp);
        route.data = true ? markRaw(__pageData) : readonly(__pageData);
        if (inBrowser) {
          nextTick(() => {
            let actualPathname = siteDataRef.value.base + __pageData.relativePath.replace(/(?:(^|\/)index)?\.md$/, "$1");
            if (!siteDataRef.value.cleanUrls && !actualPathname.endsWith("/")) {
              actualPathname += ".html";
            }
            if (actualPathname !== targetLoc.pathname) {
              targetLoc.pathname = actualPathname;
              href = actualPathname + targetLoc.search + targetLoc.hash;
              history.replaceState(null, "", href);
            }
            if (targetLoc.hash && !scrollPosition) {
              let target = null;
              try {
                target = document.getElementById(decodeURIComponent(targetLoc.hash).slice(1));
              } catch (e) {
                console.warn(e);
              }
              if (target) {
                scrollTo(target, targetLoc.hash);
                return;
              }
            }
            window.scrollTo(0, scrollPosition);
          });
        }
      }
    } catch (err) {
      if (!/fetch|Page not found/.test(err.message) && !/^\/404(\.html|\/)?$/.test(href)) {
        console.error(err);
      }
      if (!isRetry) {
        try {
          const res = await fetch(siteDataRef.value.base + "hashmap.json");
          window.__VP_HASH_MAP__ = await res.json();
          await loadPage(href, scrollPosition, true);
          return;
        } catch (e) {
        }
      }
      if (latestPendingPath === pendingPath) {
        latestPendingPath = null;
        route.path = inBrowser ? pendingPath : withBase(pendingPath);
        route.component = fallbackComponent ? markRaw(fallbackComponent) : null;
        route.data = notFoundPageData;
      }
    }
  }
  if (inBrowser) {
    window.addEventListener("click", (e) => {
      const button = e.target.closest("button");
      if (button)
        return;
      const link2 = e.target.closest("a");
      if (link2 && !link2.closest(".vp-raw") && (link2 instanceof SVGElement || !link2.download)) {
        const { target } = link2;
        const { href, origin, pathname, hash, search } = new URL(link2.href instanceof SVGAnimatedString ? link2.href.animVal : link2.href, link2.baseURI);
        const currentUrl = window.location;
        if (!e.ctrlKey && !e.shiftKey && !e.altKey && !e.metaKey && !target && origin === currentUrl.origin && treatAsHtml(pathname)) {
          e.preventDefault();
          if (pathname === currentUrl.pathname && search === currentUrl.search) {
            if (hash !== currentUrl.hash) {
              history.pushState(null, "", hash);
              window.dispatchEvent(new Event("hashchange"));
            }
            if (hash) {
              scrollTo(link2, hash, link2.classList.contains("header-anchor"));
            } else {
              updateHistory(href);
              window.scrollTo(0, 0);
            }
          } else {
            go(href);
          }
        }
      }
    }, { capture: true });
    window.addEventListener("popstate", async (e) => {
      var _a;
      await loadPage(normalizeHref(location.href), e.state && e.state.scrollPosition || 0);
      (_a = router.onAfterRouteChanged) == null ? void 0 : _a.call(router, location.href);
    });
    window.addEventListener("hashchange", (e) => {
      e.preventDefault();
    });
  }
  return router;
}
function useRouter() {
  const router = inject(RouterSymbol);
  if (!router) {
    throw new Error("useRouter() is called without provider.");
  }
  return router;
}
function useRoute() {
  return useRouter().route;
}
function scrollTo(el, hash, smooth = false) {
  let target = null;
  try {
    target = el.classList.contains("header-anchor") ? el : document.getElementById(decodeURIComponent(hash).slice(1));
  } catch (e) {
    console.warn(e);
  }
  if (target) {
    let scrollToTarget = function() {
      if (!smooth || Math.abs(targetTop - window.scrollY) > window.innerHeight)
        window.scrollTo(0, targetTop);
      else
        window.scrollTo({ left: 0, top: targetTop, behavior: "smooth" });
    };
    const targetPadding = parseInt(window.getComputedStyle(target).paddingTop, 10);
    const targetTop = window.scrollY + target.getBoundingClientRect().top - getScrollOffset() + targetPadding;
    requestAnimationFrame(scrollToTarget);
  }
}
function updateHistory(href) {
  if (inBrowser && normalizeHref(href) !== normalizeHref(location.href)) {
    history.replaceState({ scrollPosition: window.scrollY }, document.title);
    history.pushState(null, "", href);
  }
}
function normalizeHref(href) {
  const url = new URL(href, fakeHost);
  url.pathname = url.pathname.replace(/(^|\/)index(\.html)?$/, "$1");
  if (siteDataRef.value.cleanUrls)
    url.pathname = url.pathname.replace(/\.html$/, "");
  else if (!url.pathname.endsWith("/") && !url.pathname.endsWith(".html"))
    url.pathname += ".html";
  return url.pathname + url.search + url.hash;
}
const runCbs = () => contentUpdatedCallbacks.forEach((fn) => fn());
const Content = defineComponent({
  name: "VitePressContent",
  props: {
    as: { type: [Object, String], default: "div" }
  },
  setup(props) {
    const route = useRoute();
    const { site } = useData$1();
    return () => h(props.as, site.value.contentProps ?? { style: { position: "relative" } }, [
      route.component ? h(route.component, {
        onVnodeMounted: runCbs,
        onVnodeUpdated: runCbs,
        onVnodeUnmounted: runCbs
      }) : "404 Page Not Found"
    ]);
  }
});
const _sfc_main$1m = /* @__PURE__ */ defineComponent({
  __name: "VPBackdrop",
  __ssrInlineRender: true,
  props: {
    show: { type: Boolean }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      if (_ctx.show) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPBackdrop" }, _attrs))} data-v-26c69d0c></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$1m = _sfc_main$1m.setup;
_sfc_main$1m.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../node_modules/.pnpm/vitepress@1.0.0-rc.40_patch_hash=vch4e6zq55wljc7ph3vsefnawq_@algolia+client-search@4.22.1_@ty_cpywouop5vln4rtagwwqvxuyge/node_modules/vitepress/dist/client/theme-default/components/VPBackdrop.vue");
  return _sfc_setup$1m ? _sfc_setup$1m(props, ctx) : void 0;
};
const VPBackdrop = /* @__PURE__ */ _export_sfc(_sfc_main$1m, [["__scopeId", "data-v-26c69d0c"]]);
const useData = useData$1;
function throttleAndDebounce(fn, delay) {
  let timeoutId;
  let called = false;
  return () => {
    if (timeoutId)
      clearTimeout(timeoutId);
    if (!called) {
      fn();
      (called = true) && setTimeout(() => called = false, delay);
    } else
      timeoutId = setTimeout(fn, delay);
  };
}
function ensureStartingSlash(path) {
  return /^\//.test(path) ? path : `/${path}`;
}
function normalizeLink$1(url) {
  const { pathname, search, hash, protocol } = new URL(url, "http://a.com");
  if (isExternal(url) || url.startsWith("#") || !protocol.startsWith("http") || !treatAsHtml(pathname))
    return url;
  const { site } = useData();
  const normalizedPath = pathname.endsWith("/") || pathname.endsWith(".html") ? url : url.replace(/(?:(^\.+)\/)?.*$/, `$1${pathname.replace(/(\.md)?$/, site.value.cleanUrls ? "" : ".html")}${search}${hash}`);
  return withBase(normalizedPath);
}
const hashRef = ref(inBrowser ? location.hash : "");
if (inBrowser) {
  window.addEventListener("hashchange", () => {
    hashRef.value = location.hash;
  });
}
function useLangs({ removeCurrent = true, correspondingLink = false } = {}) {
  const { site, localeIndex, page, theme: theme2 } = useData();
  const currentLang = computed(() => {
    var _a, _b;
    return {
      label: (_a = site.value.locales[localeIndex.value]) == null ? void 0 : _a.label,
      link: ((_b = site.value.locales[localeIndex.value]) == null ? void 0 : _b.link) || (localeIndex.value === "root" ? "/" : `/${localeIndex.value}/`)
    };
  });
  const localeLinks = computed(() => Object.entries(site.value.locales).flatMap(([key, value]) => removeCurrent && currentLang.value.label === value.label ? [] : {
    text: value.label,
    link: normalizeLink(value.link || (key === "root" ? "/" : `/${key}/`), theme2.value.i18nRouting !== false && correspondingLink, page.value.relativePath.slice(currentLang.value.link.length - 1), !site.value.cleanUrls) + hashRef.value
  }));
  return { localeLinks, currentLang };
}
function normalizeLink(link2, addPath, path, addExt) {
  return addPath ? link2.replace(/\/$/, "") + ensureStartingSlash(path.replace(/(^|\/)index\.md$/, "$1").replace(/\.md$/, addExt ? ".html" : "")) : link2;
}
const _sfc_main$1l = /* @__PURE__ */ defineComponent({
  __name: "NotFound",
  __ssrInlineRender: true,
  setup(__props) {
    const { site, theme: theme2 } = useData();
    const { localeLinks } = useLangs({ removeCurrent: false });
    const root = ref("/");
    onMounted(() => {
      var _a;
      const path = window.location.pathname.replace(site.value.base, "").replace(/(^.*?\/).*$/, "/$1");
      if (localeLinks.value.length) {
        root.value = ((_a = localeLinks.value.find(({ link: link2 }) => link2.startsWith(path))) == null ? void 0 : _a.link) || localeLinks.value[0].link;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c2, _d, _e;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "NotFound" }, _attrs))} data-v-92d0cc47><p class="code" data-v-92d0cc47>${ssrInterpolate(((_a = unref(theme2).notFound) == null ? void 0 : _a.code) ?? "404")}</p><h1 class="title" data-v-92d0cc47>${ssrInterpolate(((_b = unref(theme2).notFound) == null ? void 0 : _b.title) ?? "PAGE NOT FOUND")}</h1><div class="divider" data-v-92d0cc47></div><blockquote class="quote" data-v-92d0cc47>${ssrInterpolate(((_c2 = unref(theme2).notFound) == null ? void 0 : _c2.quote) ?? "But if you don't change your direction, and if you keep looking, you may end up where you are heading.")}</blockquote><div class="action" data-v-92d0cc47><a class="link"${ssrRenderAttr("href", unref(withBase)(root.value))}${ssrRenderAttr("aria-label", ((_d = unref(theme2).notFound) == null ? void 0 : _d.linkLabel) ?? "go to home")} data-v-92d0cc47>${ssrInterpolate(((_e = unref(theme2).notFound) == null ? void 0 : _e.linkText) ?? "Take me home")}</a></div></div>`);
    };
  }
});
const _sfc_setup$1l = _sfc_main$1l.setup;
_sfc_main$1l.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../node_modules/.pnpm/vitepress@1.0.0-rc.40_patch_hash=vch4e6zq55wljc7ph3vsefnawq_@algolia+client-search@4.22.1_@ty_cpywouop5vln4rtagwwqvxuyge/node_modules/vitepress/dist/client/theme-default/NotFound.vue");
  return _sfc_setup$1l ? _sfc_setup$1l(props, ctx) : void 0;
};
const NotFound = /* @__PURE__ */ _export_sfc(_sfc_main$1l, [["__scopeId", "data-v-92d0cc47"]]);
function getSidebar(_sidebar, path) {
  if (Array.isArray(_sidebar))
    return addBase(_sidebar);
  if (_sidebar == null)
    return [];
  path = ensureStartingSlash(path);
  const dir = Object.keys(_sidebar).sort((a, b) => {
    return b.split("/").length - a.split("/").length;
  }).find((dir2) => {
    return path.startsWith(ensureStartingSlash(dir2));
  });
  const sidebar = dir ? _sidebar[dir] : [];
  return Array.isArray(sidebar) ? addBase(sidebar) : addBase(sidebar.items, sidebar.base);
}
function getSidebarGroups(sidebar) {
  const groups = [];
  let lastGroupIndex = 0;
  for (const index in sidebar) {
    const item = sidebar[index];
    if (item.items) {
      lastGroupIndex = groups.push(item);
      continue;
    }
    if (!groups[lastGroupIndex]) {
      groups.push({ items: [] });
    }
    groups[lastGroupIndex].items.push(item);
  }
  return groups;
}
function getFlatSideBarLinks(sidebar) {
  const links = [];
  function recursivelyExtractLinks(items) {
    for (const item of items) {
      if (item.text && item.link) {
        links.push({
          text: item.text,
          link: item.link,
          docFooterText: item.docFooterText
        });
      }
      if (item.items) {
        recursivelyExtractLinks(item.items);
      }
    }
  }
  recursivelyExtractLinks(sidebar);
  return links;
}
function hasActiveLink(path, items) {
  if (Array.isArray(items)) {
    return items.some((item) => hasActiveLink(path, item));
  }
  return isActive(path, items.link) ? true : items.items ? hasActiveLink(path, items.items) : false;
}
function addBase(items, _base) {
  return [...items].map((_item) => {
    const item = { ..._item };
    const base = item.base || _base;
    if (base && item.link)
      item.link = base + item.link;
    if (item.items)
      item.items = addBase(item.items, base);
    return item;
  });
}
function useSidebar() {
  const { frontmatter, page, theme: theme2 } = useData();
  const is960 = useMediaQuery("(min-width: 960px)");
  const isOpen = ref(false);
  const _sidebar = computed(() => {
    const sidebarConfig = theme2.value.sidebar;
    const relativePath = page.value.relativePath;
    return sidebarConfig ? getSidebar(sidebarConfig, relativePath) : [];
  });
  const sidebar = ref(_sidebar.value);
  watch(_sidebar, (next, prev) => {
    if (JSON.stringify(next) !== JSON.stringify(prev))
      sidebar.value = _sidebar.value;
  });
  const hasSidebar = computed(() => {
    return frontmatter.value.sidebar !== false && sidebar.value.length > 0 && frontmatter.value.layout !== "home";
  });
  const leftAside = computed(() => {
    if (hasAside)
      return frontmatter.value.aside == null ? theme2.value.aside === "left" : frontmatter.value.aside === "left";
    return false;
  });
  const hasAside = computed(() => {
    if (frontmatter.value.layout === "home")
      return false;
    if (frontmatter.value.aside != null)
      return !!frontmatter.value.aside;
    return theme2.value.aside !== false;
  });
  const isSidebarEnabled = computed(() => hasSidebar.value && is960.value);
  const sidebarGroups = computed(() => {
    return hasSidebar.value ? getSidebarGroups(sidebar.value) : [];
  });
  function open() {
    isOpen.value = true;
  }
  function close() {
    isOpen.value = false;
  }
  function toggle() {
    isOpen.value ? close() : open();
  }
  return {
    isOpen,
    sidebar,
    sidebarGroups,
    hasSidebar,
    hasAside,
    leftAside,
    isSidebarEnabled,
    open,
    close,
    toggle
  };
}
function useCloseSidebarOnEscape(isOpen, close) {
  let triggerElement;
  watchEffect(() => {
    triggerElement = isOpen.value ? document.activeElement : void 0;
  });
  onMounted(() => {
    window.addEventListener("keyup", onEscape);
  });
  onUnmounted(() => {
    window.removeEventListener("keyup", onEscape);
  });
  function onEscape(e) {
    if (e.key === "Escape" && isOpen.value) {
      close();
      triggerElement == null ? void 0 : triggerElement.focus();
    }
  }
}
function useSidebarControl(item) {
  const { page } = useData();
  const collapsed = ref(false);
  const collapsible = computed(() => {
    return item.value.collapsed != null;
  });
  const isLink = computed(() => {
    return !!item.value.link;
  });
  const isActiveLink = ref(false);
  const updateIsActiveLink = () => {
    isActiveLink.value = isActive(page.value.relativePath, item.value.link);
  };
  watch([page, item, hashRef], updateIsActiveLink);
  onMounted(updateIsActiveLink);
  const hasActiveLink$1 = computed(() => {
    if (isActiveLink.value) {
      return true;
    }
    return item.value.items ? hasActiveLink(page.value.relativePath, item.value.items) : false;
  });
  const hasChildren = computed(() => {
    return !!(item.value.items && item.value.items.length);
  });
  watchEffect(() => {
    collapsed.value = !!(collapsible.value && item.value.collapsed);
  });
  watchPostEffect(() => {
    (isActiveLink.value || hasActiveLink$1.value) && (collapsed.value = false);
  });
  function toggle() {
    if (collapsible.value) {
      collapsed.value = !collapsed.value;
    }
  }
  return {
    collapsed,
    collapsible,
    isLink,
    isActiveLink,
    hasActiveLink: hasActiveLink$1,
    hasChildren,
    toggle
  };
}
function useAside() {
  const { hasSidebar } = useSidebar();
  const is960 = useMediaQuery("(min-width: 960px)");
  const is1280 = useMediaQuery("(min-width: 1280px)");
  const isAsideEnabled = computed(() => {
    if (!is1280.value && !is960.value) {
      return false;
    }
    return hasSidebar.value ? is1280.value : is960.value;
  });
  return {
    isAsideEnabled
  };
}
const resolvedHeaders = [];
function resolveTitle(theme2) {
  return typeof theme2.outline === "object" && !Array.isArray(theme2.outline) && theme2.outline.label || theme2.outlineTitle || "On this page";
}
function getHeaders(range) {
  const headers = [
    ...document.querySelectorAll(".VPDoc :where(h1,h2,h3,h4,h5,h6)")
  ].filter((el) => el.id && el.hasChildNodes()).map((el) => {
    const level = Number(el.tagName[1]);
    return {
      element: el,
      title: serializeHeader(el),
      link: "#" + el.id,
      level
    };
  });
  return resolveHeaders(headers, range);
}
function serializeHeader(h2) {
  let ret = "";
  for (const node of h2.childNodes) {
    if (node.nodeType === 1) {
      if (node.classList.contains("VPBadge") || node.classList.contains("header-anchor") || node.classList.contains("ignore-header")) {
        continue;
      }
      ret += node.textContent;
    } else if (node.nodeType === 3) {
      ret += node.textContent;
    }
  }
  return ret.trim();
}
function resolveHeaders(headers, range) {
  if (range === false) {
    return [];
  }
  const levelsRange = (typeof range === "object" && !Array.isArray(range) ? range.level : range) || 2;
  const [high, low] = typeof levelsRange === "number" ? [levelsRange, levelsRange] : levelsRange === "deep" ? [2, 6] : levelsRange;
  headers = headers.filter((h2) => h2.level >= high && h2.level <= low);
  resolvedHeaders.length = 0;
  for (const { element, link: link2 } of headers) {
    resolvedHeaders.push({ element, link: link2 });
  }
  const ret = [];
  outer:
    for (let i = 0; i < headers.length; i++) {
      const cur = headers[i];
      if (i === 0) {
        ret.push(cur);
      } else {
        for (let j = i - 1; j >= 0; j--) {
          const prev = headers[j];
          if (prev.level < cur.level) {
            (prev.children || (prev.children = [])).push(cur);
            continue outer;
          }
        }
        ret.push(cur);
      }
    }
  return ret;
}
function useActiveAnchor(container, marker) {
  const { isAsideEnabled } = useAside();
  const onScroll = throttleAndDebounce(setActiveLink, 100);
  let prevActiveLink = null;
  onMounted(() => {
    requestAnimationFrame(setActiveLink);
    window.addEventListener("scroll", onScroll);
  });
  onUpdated(() => {
    activateLink(location.hash);
  });
  onUnmounted(() => {
    window.removeEventListener("scroll", onScroll);
  });
  function setActiveLink() {
    if (!isAsideEnabled.value) {
      return;
    }
    const scrollY = window.scrollY;
    const innerHeight = window.innerHeight;
    const offsetHeight = document.body.offsetHeight;
    const isBottom = Math.abs(scrollY + innerHeight - offsetHeight) < 1;
    const headers = resolvedHeaders.map(({ element, link: link2 }) => ({
      link: link2,
      top: getAbsoluteTop(element)
    })).filter(({ top }) => !Number.isNaN(top)).sort((a, b) => a.top - b.top);
    if (!headers.length) {
      activateLink(null);
      return;
    }
    if (scrollY < 1) {
      activateLink(null);
      return;
    }
    if (isBottom) {
      activateLink(headers[headers.length - 1].link);
      return;
    }
    let activeLink = null;
    for (const { link: link2, top } of headers) {
      if (top > scrollY + getScrollOffset() + 4) {
        break;
      }
      activeLink = link2;
    }
    activateLink(activeLink);
  }
  function activateLink(hash) {
    if (prevActiveLink) {
      prevActiveLink.classList.remove("active");
    }
    if (hash == null) {
      prevActiveLink = null;
    } else {
      prevActiveLink = container.value.querySelector(`a[href="${decodeURIComponent(hash)}"]`);
    }
    const activeLink = prevActiveLink;
    if (activeLink) {
      activeLink.classList.add("active");
      marker.value.style.top = activeLink.offsetTop + 39 + "px";
      marker.value.style.opacity = "1";
    } else {
      marker.value.style.top = "33px";
      marker.value.style.opacity = "0";
    }
  }
}
function getAbsoluteTop(element) {
  let offsetTop = 0;
  while (element !== document.body) {
    if (element === null) {
      return NaN;
    }
    offsetTop += element.offsetTop;
    element = element.offsetParent;
  }
  return offsetTop;
}
const _sfc_main$1k = /* @__PURE__ */ defineComponent({
  __name: "VPDocOutlineItem",
  __ssrInlineRender: true,
  props: {
    headers: {},
    root: { type: Boolean }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VPDocOutlineItem = resolveComponent("VPDocOutlineItem", true);
      _push(`<ul${ssrRenderAttrs(mergeProps({
        class: ["VPDocOutlineItem", _ctx.root ? "root" : "nested"]
      }, _attrs))} data-v-a55fb3d8><!--[-->`);
      ssrRenderList(_ctx.headers, ({ children, link: link2, title }) => {
        _push(`<li data-v-a55fb3d8><a class="outline-link"${ssrRenderAttr("href", link2)}${ssrRenderAttr("title", title)} data-v-a55fb3d8>${ssrInterpolate(title)}</a>`);
        if (children == null ? void 0 : children.length) {
          _push(ssrRenderComponent(_component_VPDocOutlineItem, { headers: children }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</li>`);
      });
      _push(`<!--]--></ul>`);
    };
  }
});
const _sfc_setup$1k = _sfc_main$1k.setup;
_sfc_main$1k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../node_modules/.pnpm/vitepress@1.0.0-rc.40_patch_hash=vch4e6zq55wljc7ph3vsefnawq_@algolia+client-search@4.22.1_@ty_cpywouop5vln4rtagwwqvxuyge/node_modules/vitepress/dist/client/theme-default/components/VPDocOutlineItem.vue");
  return _sfc_setup$1k ? _sfc_setup$1k(props, ctx) : void 0;
};
const VPDocOutlineItem = /* @__PURE__ */ _export_sfc(_sfc_main$1k, [["__scopeId", "data-v-a55fb3d8"]]);
const _sfc_main$1j = /* @__PURE__ */ defineComponent({
  __name: "VPDocAsideOutline",
  __ssrInlineRender: true,
  setup(__props) {
    const { frontmatter, theme: theme2 } = useData();
    const headers = shallowRef([]);
    onContentUpdated(() => {
      headers.value = getHeaders(frontmatter.value.outline ?? theme2.value.outline);
    });
    const container = ref();
    const marker = ref();
    useActiveAnchor(container, marker);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["VPDocAsideOutline", { "has-outline": headers.value.length > 0 }],
        ref_key: "container",
        ref: container,
        role: "navigation"
      }, _attrs))} data-v-e959d2cb><div class="content" data-v-e959d2cb><div class="outline-marker" data-v-e959d2cb></div><div class="outline-title" role="heading" aria-level="2" data-v-e959d2cb>${ssrInterpolate(unref(resolveTitle)(unref(theme2)))}</div><nav aria-labelledby="doc-outline-aria-label" data-v-e959d2cb><span class="visually-hidden" id="doc-outline-aria-label" data-v-e959d2cb> Table of Contents for current page </span>`);
      _push(ssrRenderComponent(VPDocOutlineItem, {
        headers: headers.value,
        root: true
      }, null, _parent));
      _push(`</nav></div></div>`);
    };
  }
});
const _sfc_setup$1j = _sfc_main$1j.setup;
_sfc_main$1j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../node_modules/.pnpm/vitepress@1.0.0-rc.40_patch_hash=vch4e6zq55wljc7ph3vsefnawq_@algolia+client-search@4.22.1_@ty_cpywouop5vln4rtagwwqvxuyge/node_modules/vitepress/dist/client/theme-default/components/VPDocAsideOutline.vue");
  return _sfc_setup$1j ? _sfc_setup$1j(props, ctx) : void 0;
};
const VPDocAsideOutline = /* @__PURE__ */ _export_sfc(_sfc_main$1j, [["__scopeId", "data-v-e959d2cb"]]);
const _sfc_main$1i = /* @__PURE__ */ defineComponent({
  __name: "VPDocAsideCarbonAds",
  __ssrInlineRender: true,
  props: {
    carbonAds: {}
  },
  setup(__props) {
    const VPCarbonAds = () => null;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPDocAsideCarbonAds" }, _attrs))}>`);
      _push(ssrRenderComponent(unref(VPCarbonAds), { "carbon-ads": _ctx.carbonAds }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1i = _sfc_main$1i.setup;
_sfc_main$1i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../node_modules/.pnpm/vitepress@1.0.0-rc.40_patch_hash=vch4e6zq55wljc7ph3vsefnawq_@algolia+client-search@4.22.1_@ty_cpywouop5vln4rtagwwqvxuyge/node_modules/vitepress/dist/client/theme-default/components/VPDocAsideCarbonAds.vue");
  return _sfc_setup$1i ? _sfc_setup$1i(props, ctx) : void 0;
};
const _sfc_main$1h = /* @__PURE__ */ defineComponent({
  __name: "VPDocAside",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme: theme2 } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPDocAside" }, _attrs))} data-v-6ac584e9>`);
      ssrRenderSlot(_ctx.$slots, "aside-top", {}, null, _push, _parent);
      ssrRenderSlot(_ctx.$slots, "aside-outline-before", {}, null, _push, _parent);
      _push(ssrRenderComponent(VPDocAsideOutline, null, null, _parent));
      ssrRenderSlot(_ctx.$slots, "aside-outline-after", {}, null, _push, _parent);
      _push(`<div class="spacer" data-v-6ac584e9></div>`);
      ssrRenderSlot(_ctx.$slots, "aside-ads-before", {}, null, _push, _parent);
      if (unref(theme2).carbonAds) {
        _push(ssrRenderComponent(_sfc_main$1i, {
          "carbon-ads": unref(theme2).carbonAds
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "aside-ads-after", {}, null, _push, _parent);
      ssrRenderSlot(_ctx.$slots, "aside-bottom", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1h = _sfc_main$1h.setup;
_sfc_main$1h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../node_modules/.pnpm/vitepress@1.0.0-rc.40_patch_hash=vch4e6zq55wljc7ph3vsefnawq_@algolia+client-search@4.22.1_@ty_cpywouop5vln4rtagwwqvxuyge/node_modules/vitepress/dist/client/theme-default/components/VPDocAside.vue");
  return _sfc_setup$1h ? _sfc_setup$1h(props, ctx) : void 0;
};
const VPDocAside = /* @__PURE__ */ _export_sfc(_sfc_main$1h, [["__scopeId", "data-v-6ac584e9"]]);
function useEditLink() {
  const { theme: theme2, page } = useData();
  return computed(() => {
    const { text = "Edit this page", pattern = "" } = theme2.value.editLink || {};
    let url;
    if (typeof pattern === "function") {
      url = pattern(page.value);
    } else {
      url = pattern.replace(/:path/g, page.value.filePath);
    }
    return { url, text };
  });
}
function usePrevNext() {
  const { page, theme: theme2, frontmatter } = useData();
  return computed(() => {
    var _a, _b, _c2, _d, _e, _f, _g, _h;
    const sidebar = getSidebar(theme2.value.sidebar, page.value.relativePath);
    const candidates = getFlatSideBarLinks(sidebar);
    const index = candidates.findIndex((link2) => {
      return isActive(page.value.relativePath, link2.link);
    });
    const hidePrev = ((_a = theme2.value.docFooter) == null ? void 0 : _a.prev) === false && !frontmatter.value.prev || frontmatter.value.prev === false;
    const hideNext = ((_b = theme2.value.docFooter) == null ? void 0 : _b.next) === false && !frontmatter.value.next || frontmatter.value.next === false;
    return {
      prev: hidePrev ? void 0 : {
        text: (typeof frontmatter.value.prev === "string" ? frontmatter.value.prev : typeof frontmatter.value.prev === "object" ? frontmatter.value.prev.text : void 0) ?? ((_c2 = candidates[index - 1]) == null ? void 0 : _c2.docFooterText) ?? ((_d = candidates[index - 1]) == null ? void 0 : _d.text),
        link: (typeof frontmatter.value.prev === "object" ? frontmatter.value.prev.link : void 0) ?? ((_e = candidates[index - 1]) == null ? void 0 : _e.link)
      },
      next: hideNext ? void 0 : {
        text: (typeof frontmatter.value.next === "string" ? frontmatter.value.next : typeof frontmatter.value.next === "object" ? frontmatter.value.next.text : void 0) ?? ((_f = candidates[index + 1]) == null ? void 0 : _f.docFooterText) ?? ((_g = candidates[index + 1]) == null ? void 0 : _g.text),
        link: (typeof frontmatter.value.next === "object" ? frontmatter.value.next.link : void 0) ?? ((_h = candidates[index + 1]) == null ? void 0 : _h.link)
      }
    };
  });
}
const _sfc_main$1g = {};
function _sfc_ssrRender$c(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, _attrs))}><path d="M18,23H4c-1.7,0-3-1.3-3-3V6c0-1.7,1.3-3,3-3h7c0.6,0,1,0.4,1,1s-0.4,1-1,1H4C3.4,5,3,5.4,3,6v14c0,0.6,0.4,1,1,1h14c0.6,0,1-0.4,1-1v-7c0-0.6,0.4-1,1-1s1,0.4,1,1v7C21,21.7,19.7,23,18,23z"></path><path d="M8,17c-0.3,0-0.5-0.1-0.7-0.3C7,16.5,6.9,16.1,7,15.8l1-4c0-0.2,0.1-0.3,0.3-0.5l9.5-9.5c1.2-1.2,3.2-1.2,4.4,0c1.2,1.2,1.2,3.2,0,4.4l-9.5,9.5c-0.1,0.1-0.3,0.2-0.5,0.3l-4,1C8.2,17,8.1,17,8,17zM9.9,12.5l-0.5,2.1l2.1-0.5l9.3-9.3c0.4-0.4,0.4-1.1,0-1.6c-0.4-0.4-1.2-0.4-1.6,0l0,0L9.9,12.5z M18.5,2.5L18.5,2.5L18.5,2.5z"></path></svg>`);
}
const _sfc_setup$1g = _sfc_main$1g.setup;
_sfc_main$1g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../node_modules/.pnpm/vitepress@1.0.0-rc.40_patch_hash=vch4e6zq55wljc7ph3vsefnawq_@algolia+client-search@4.22.1_@ty_cpywouop5vln4rtagwwqvxuyge/node_modules/vitepress/dist/client/theme-default/components/icons/VPIconEdit.vue");
  return _sfc_setup$1g ? _sfc_setup$1g(props, ctx) : void 0;
};
const VPIconEdit = /* @__PURE__ */ _export_sfc(_sfc_main$1g, [["ssrRender", _sfc_ssrRender$c]]);
const _sfc_main$1f = /* @__PURE__ */ defineComponent({
  __name: "VPLink",
  __ssrInlineRender: true,
  props: {
    tag: {},
    href: {},
    noIcon: { type: Boolean },
    target: {},
    rel: {}
  },
  setup(__props) {
    const props = __props;
    const tag = computed(() => props.tag ?? (props.href ? "a" : "span"));
    const isExternal2 = computed(() => props.href && EXTERNAL_URL_RE.test(props.href));
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(tag.value), mergeProps({
        class: ["VPLink", {
          link: _ctx.href,
          "vp-external-link-icon": isExternal2.value,
          "no-icon": _ctx.noIcon
        }],
        href: _ctx.href ? unref(normalizeLink$1)(_ctx.href) : void 0,
        target: _ctx.target ?? (isExternal2.value ? "_blank" : void 0),
        rel: _ctx.rel ?? (isExternal2.value ? "noreferrer" : void 0)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }), _parent);
    };
  }
});
const _sfc_setup$1f = _sfc_main$1f.setup;
_sfc_main$1f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../node_modules/.pnpm/vitepress@1.0.0-rc.40_patch_hash=vch4e6zq55wljc7ph3vsefnawq_@algolia+client-search@4.22.1_@ty_cpywouop5vln4rtagwwqvxuyge/node_modules/vitepress/dist/client/theme-default/components/VPLink.vue");
  return _sfc_setup$1f ? _sfc_setup$1f(props, ctx) : void 0;
};
const _sfc_main$1e = /* @__PURE__ */ defineComponent({
  __name: "VPDocFooterLastUpdated",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme: theme2, page, frontmatter, lang } = useData();
    const date = computed(
      () => new Date(frontmatter.value.lastUpdated ?? page.value.lastUpdated)
    );
    const isoDatetime = computed(() => date.value.toISOString());
    const datetime = ref("");
    onMounted(() => {
      watchEffect(() => {
        var _a, _b, _c2;
        datetime.value = new Intl.DateTimeFormat(
          ((_b = (_a = theme2.value.lastUpdated) == null ? void 0 : _a.formatOptions) == null ? void 0 : _b.forceLocale) ? lang.value : void 0,
          ((_c2 = theme2.value.lastUpdated) == null ? void 0 : _c2.formatOptions) ?? {
            dateStyle: "short",
            timeStyle: "short"
          }
        ).format(date.value);
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<p${ssrRenderAttrs(mergeProps({ class: "VPLastUpdated" }, _attrs))} data-v-cb19eb34>${ssrInterpolate(((_a = unref(theme2).lastUpdated) == null ? void 0 : _a.text) || unref(theme2).lastUpdatedText || "Last updated")}: <time${ssrRenderAttr("datetime", isoDatetime.value)} data-v-cb19eb34>${ssrInterpolate(datetime.value)}</time></p>`);
    };
  }
});
const _sfc_setup$1e = _sfc_main$1e.setup;
_sfc_main$1e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../node_modules/.pnpm/vitepress@1.0.0-rc.40_patch_hash=vch4e6zq55wljc7ph3vsefnawq_@algolia+client-search@4.22.1_@ty_cpywouop5vln4rtagwwqvxuyge/node_modules/vitepress/dist/client/theme-default/components/VPDocFooterLastUpdated.vue");
  return _sfc_setup$1e ? _sfc_setup$1e(props, ctx) : void 0;
};
const VPDocFooterLastUpdated = /* @__PURE__ */ _export_sfc(_sfc_main$1e, [["__scopeId", "data-v-cb19eb34"]]);
const _sfc_main$1d = /* @__PURE__ */ defineComponent({
  __name: "VPDocFooter",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme: theme2, page, frontmatter } = useData();
    const editLink = useEditLink();
    const control = usePrevNext();
    const hasEditLink = computed(() => {
      return theme2.value.editLink && frontmatter.value.editLink !== false;
    });
    const hasLastUpdated = computed(() => {
      return page.value.lastUpdated && frontmatter.value.lastUpdated !== false;
    });
    const showFooter = computed(() => {
      return hasEditLink.value || hasLastUpdated.value || control.value.prev || control.value.next;
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c2, _d;
      if (showFooter.value) {
        _push(`<footer${ssrRenderAttrs(mergeProps({ class: "VPDocFooter" }, _attrs))} data-v-efb37fe3>`);
        ssrRenderSlot(_ctx.$slots, "doc-footer-before", {}, null, _push, _parent);
        if (hasEditLink.value || hasLastUpdated.value) {
          _push(`<div class="edit-info" data-v-efb37fe3>`);
          if (hasEditLink.value) {
            _push(`<div class="edit-link" data-v-efb37fe3>`);
            _push(ssrRenderComponent(_sfc_main$1f, {
              class: "edit-link-button",
              href: unref(editLink).url,
              "no-icon": true
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(ssrRenderComponent(VPIconEdit, {
                    class: "edit-link-icon",
                    "aria-label": "edit icon"
                  }, null, _parent2, _scopeId));
                  _push2(` ${ssrInterpolate(unref(editLink).text)}`);
                } else {
                  return [
                    createVNode(VPIconEdit, {
                      class: "edit-link-icon",
                      "aria-label": "edit icon"
                    }),
                    createTextVNode(" " + toDisplayString(unref(editLink).text), 1)
                  ];
                }
              }),
              _: 1
            }, _parent));
            _push(`</div>`);
          } else {
            _push(`<!---->`);
          }
          if (hasLastUpdated.value) {
            _push(`<div class="last-updated" data-v-efb37fe3>`);
            _push(ssrRenderComponent(VPDocFooterLastUpdated, null, null, _parent));
            _push(`</div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        if (((_a = unref(control).prev) == null ? void 0 : _a.link) || ((_b = unref(control).next) == null ? void 0 : _b.link)) {
          _push(`<nav class="prev-next" data-v-efb37fe3><div class="pager" data-v-efb37fe3>`);
          if ((_c2 = unref(control).prev) == null ? void 0 : _c2.link) {
            _push(ssrRenderComponent(_sfc_main$1f, {
              class: "pager-link prev",
              href: unref(control).prev.link
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                var _a2, _b2;
                if (_push2) {
                  _push2(`<span class="desc" data-v-efb37fe3${_scopeId}>${((_a2 = unref(theme2).docFooter) == null ? void 0 : _a2.prev) || "Previous page"}</span><span class="title" data-v-efb37fe3${_scopeId}>${unref(control).prev.text}</span>`);
                } else {
                  return [
                    createVNode("span", {
                      class: "desc",
                      innerHTML: ((_b2 = unref(theme2).docFooter) == null ? void 0 : _b2.prev) || "Previous page"
                    }, null, 8, ["innerHTML"]),
                    createVNode("span", {
                      class: "title",
                      innerHTML: unref(control).prev.text
                    }, null, 8, ["innerHTML"])
                  ];
                }
              }),
              _: 1
            }, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`</div><div class="pager" data-v-efb37fe3>`);
          if ((_d = unref(control).next) == null ? void 0 : _d.link) {
            _push(ssrRenderComponent(_sfc_main$1f, {
              class: "pager-link next",
              href: unref(control).next.link
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                var _a2, _b2;
                if (_push2) {
                  _push2(`<span class="desc" data-v-efb37fe3${_scopeId}>${((_a2 = unref(theme2).docFooter) == null ? void 0 : _a2.next) || "Next page"}</span><span class="title" data-v-efb37fe3${_scopeId}>${unref(control).next.text}</span>`);
                } else {
                  return [
                    createVNode("span", {
                      class: "desc",
                      innerHTML: ((_b2 = unref(theme2).docFooter) == null ? void 0 : _b2.next) || "Next page"
                    }, null, 8, ["innerHTML"]),
                    createVNode("span", {
                      class: "title",
                      innerHTML: unref(control).next.text
                    }, null, 8, ["innerHTML"])
                  ];
                }
              }),
              _: 1
            }, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`</div></nav>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</footer>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$1d = _sfc_main$1d.setup;
_sfc_main$1d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../node_modules/.pnpm/vitepress@1.0.0-rc.40_patch_hash=vch4e6zq55wljc7ph3vsefnawq_@algolia+client-search@4.22.1_@ty_cpywouop5vln4rtagwwqvxuyge/node_modules/vitepress/dist/client/theme-default/components/VPDocFooter.vue");
  return _sfc_setup$1d ? _sfc_setup$1d(props, ctx) : void 0;
};
const VPDocFooter = /* @__PURE__ */ _export_sfc(_sfc_main$1d, [["__scopeId", "data-v-efb37fe3"]]);
const _sfc_main$1c = /* @__PURE__ */ defineComponent({
  __name: "VPDoc",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme: theme2 } = useData();
    const route = useRoute();
    const { hasSidebar, hasAside, leftAside } = useSidebar();
    const pageName = computed(
      () => route.path.replace(/[./]+/g, "_").replace(/_html$/, "")
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Content = resolveComponent("Content");
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["VPDoc", { "has-sidebar": unref(hasSidebar), "has-aside": unref(hasAside) }]
      }, _attrs))} data-v-15b7e8ed>`);
      ssrRenderSlot(_ctx.$slots, "doc-top", {}, null, _push, _parent);
      _push(`<div class="container" data-v-15b7e8ed>`);
      if (unref(hasAside)) {
        _push(`<div class="${ssrRenderClass([{ "left-aside": unref(leftAside) }, "aside"])}" data-v-15b7e8ed><div class="aside-curtain" data-v-15b7e8ed></div><div class="aside-container" data-v-15b7e8ed><div class="aside-content" data-v-15b7e8ed>`);
        _push(ssrRenderComponent(VPDocAside, null, {
          "aside-top": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-top", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-top", {}, void 0, true)
              ];
            }
          }),
          "aside-bottom": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-bottom", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-bottom", {}, void 0, true)
              ];
            }
          }),
          "aside-outline-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-outline-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-outline-before", {}, void 0, true)
              ];
            }
          }),
          "aside-outline-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-outline-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-outline-after", {}, void 0, true)
              ];
            }
          }),
          "aside-ads-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-ads-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-ads-before", {}, void 0, true)
              ];
            }
          }),
          "aside-ads-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-ads-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-ads-after", {}, void 0, true)
              ];
            }
          }),
          _: 3
        }, _parent));
        _push(`</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="content" data-v-15b7e8ed><div class="content-container" data-v-15b7e8ed>`);
      ssrRenderSlot(_ctx.$slots, "doc-before", {}, null, _push, _parent);
      _push(`<main class="main" data-v-15b7e8ed>`);
      _push(ssrRenderComponent(_component_Content, {
        class: ["vp-doc", [
          pageName.value,
          unref(theme2).externalLinkIcon && "external-link-icon-enabled"
        ]]
      }, null, _parent));
      _push(`</main>`);
      _push(ssrRenderComponent(VPDocFooter, null, {
        "doc-footer-before": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "doc-footer-before", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "doc-footer-before", {}, void 0, true)
            ];
          }
        }),
        _: 3
      }, _parent));
      ssrRenderSlot(_ctx.$slots, "doc-after", {}, null, _push, _parent);
      _push(`</div></div></div>`);
      ssrRenderSlot(_ctx.$slots, "doc-bottom", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1c = _sfc_main$1c.setup;
_sfc_main$1c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../node_modules/.pnpm/vitepress@1.0.0-rc.40_patch_hash=vch4e6zq55wljc7ph3vsefnawq_@algolia+client-search@4.22.1_@ty_cpywouop5vln4rtagwwqvxuyge/node_modules/vitepress/dist/client/theme-default/components/VPDoc.vue");
  return _sfc_setup$1c ? _sfc_setup$1c(props, ctx) : void 0;
};
const VPDoc = /* @__PURE__ */ _export_sfc(_sfc_main$1c, [["__scopeId", "data-v-15b7e8ed"]]);
const _sfc_main$1b = /* @__PURE__ */ defineComponent({
  __name: "VPButton",
  __ssrInlineRender: true,
  props: {
    tag: {},
    size: { default: "medium" },
    theme: { default: "brand" },
    text: {},
    href: {}
  },
  setup(__props) {
    const props = __props;
    const isExternal2 = computed(
      () => props.href && EXTERNAL_URL_RE.test(props.href)
    );
    const component = computed(() => {
      return props.tag || props.href ? "a" : "button";
    });
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(component.value), mergeProps({
        class: ["VPButton", [_ctx.size, _ctx.theme]],
        href: _ctx.href ? unref(normalizeLink$1)(_ctx.href) : void 0,
        target: isExternal2.value ? "_blank" : void 0,
        rel: isExternal2.value ? "noreferrer" : void 0
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.text)}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.text), 1)
            ];
          }
        }),
        _: 1
      }), _parent);
    };
  }
});
const _sfc_setup$1b = _sfc_main$1b.setup;
_sfc_main$1b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../node_modules/.pnpm/vitepress@1.0.0-rc.40_patch_hash=vch4e6zq55wljc7ph3vsefnawq_@algolia+client-search@4.22.1_@ty_cpywouop5vln4rtagwwqvxuyge/node_modules/vitepress/dist/client/theme-default/components/VPButton.vue");
  return _sfc_setup$1b ? _sfc_setup$1b(props, ctx) : void 0;
};
const VPButton = /* @__PURE__ */ _export_sfc(_sfc_main$1b, [["__scopeId", "data-v-9b961dce"]]);
const _sfc_main$1a = /* @__PURE__ */ defineComponent({
  ...{ inheritAttrs: false },
  __name: "VPImage",
  __ssrInlineRender: true,
  props: {
    image: {},
    alt: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VPImage = resolveComponent("VPImage", true);
      if (_ctx.image) {
        _push(`<!--[-->`);
        if (typeof _ctx.image === "string" || "src" in _ctx.image) {
          _push(`<img${ssrRenderAttrs(mergeProps({ class: "VPImage" }, typeof _ctx.image === "string" ? _ctx.$attrs : { ..._ctx.image, ..._ctx.$attrs }, {
            src: unref(withBase)(typeof _ctx.image === "string" ? _ctx.image : _ctx.image.src),
            alt: _ctx.alt ?? (typeof _ctx.image === "string" ? "" : _ctx.image.alt || "")
          }))} data-v-0cf99e4e>`);
        } else {
          _push(`<!--[-->`);
          _push(ssrRenderComponent(_component_VPImage, mergeProps({
            class: "dark",
            image: _ctx.image.dark,
            alt: _ctx.image.alt
          }, _ctx.$attrs), null, _parent));
          _push(ssrRenderComponent(_component_VPImage, mergeProps({
            class: "light",
            image: _ctx.image.light,
            alt: _ctx.image.alt
          }, _ctx.$attrs), null, _parent));
          _push(`<!--]-->`);
        }
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$1a = _sfc_main$1a.setup;
_sfc_main$1a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../node_modules/.pnpm/vitepress@1.0.0-rc.40_patch_hash=vch4e6zq55wljc7ph3vsefnawq_@algolia+client-search@4.22.1_@ty_cpywouop5vln4rtagwwqvxuyge/node_modules/vitepress/dist/client/theme-default/components/VPImage.vue");
  return _sfc_setup$1a ? _sfc_setup$1a(props, ctx) : void 0;
};
const VPImage = /* @__PURE__ */ _export_sfc(_sfc_main$1a, [["__scopeId", "data-v-0cf99e4e"]]);
const _sfc_main$19 = /* @__PURE__ */ defineComponent({
  __name: "VPHero",
  __ssrInlineRender: true,
  props: {
    name: {},
    text: {},
    tagline: {},
    image: {},
    actions: {}
  },
  setup(__props) {
    const heroImageSlotExists = inject("hero-image-slot-exists");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["VPHero", { "has-image": _ctx.image || unref(heroImageSlotExists) }]
      }, _attrs))} data-v-abf9a877><div class="container" data-v-abf9a877><div class="main" data-v-abf9a877>`);
      ssrRenderSlot(_ctx.$slots, "home-hero-prelink", {}, null, _push, _parent);
      ssrRenderSlot(_ctx.$slots, "home-hero-info", {}, () => {
        if (_ctx.name) {
          _push(`<h1 class="name" data-v-abf9a877><span class="clip" data-v-abf9a877>${_ctx.name}</span></h1>`);
        } else {
          _push(`<!---->`);
        }
        if (_ctx.text) {
          _push(`<p class="text" data-v-abf9a877>${_ctx.text}</p>`);
        } else {
          _push(`<!---->`);
        }
        if (_ctx.tagline) {
          _push(`<p class="tagline" data-v-abf9a877>${_ctx.tagline}</p>`);
        } else {
          _push(`<!---->`);
        }
      }, _push, _parent);
      if (_ctx.actions) {
        _push(`<div class="actions" data-v-abf9a877><!--[-->`);
        ssrRenderList(_ctx.actions, (action) => {
          _push(`<div class="action" data-v-abf9a877>`);
          _push(ssrRenderComponent(VPButton, {
            tag: "a",
            size: "medium",
            theme: action.theme,
            text: action.text,
            href: action.link
          }, null, _parent));
          _push(`</div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (_ctx.image || unref(heroImageSlotExists)) {
        _push(`<div class="image" data-v-abf9a877><div class="image-container" data-v-abf9a877><div class="image-bg" data-v-abf9a877></div>`);
        ssrRenderSlot(_ctx.$slots, "home-hero-image", {}, () => {
          if (_ctx.image) {
            _push(ssrRenderComponent(VPImage, {
              class: "image-src",
              image: _ctx.image
            }, null, _parent));
          } else {
            _push(`<!---->`);
          }
        }, _push, _parent);
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$19 = _sfc_main$19.setup;
_sfc_main$19.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../node_modules/.pnpm/vitepress@1.0.0-rc.40_patch_hash=vch4e6zq55wljc7ph3vsefnawq_@algolia+client-search@4.22.1_@ty_cpywouop5vln4rtagwwqvxuyge/node_modules/vitepress/dist/client/theme-default/components/VPHero.vue");
  return _sfc_setup$19 ? _sfc_setup$19(props, ctx) : void 0;
};
const VPHero = /* @__PURE__ */ _export_sfc(_sfc_main$19, [["__scopeId", "data-v-abf9a877"]]);
const _sfc_main$18 = /* @__PURE__ */ defineComponent({
  __name: "VPHomeHero",
  __ssrInlineRender: true,
  setup(__props) {
    const { frontmatter: fm } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(fm).hero) {
        _push(ssrRenderComponent(VPHero, mergeProps({
          class: "VPHomeHero",
          name: unref(fm).hero.name,
          text: unref(fm).hero.text,
          tagline: unref(fm).hero.tagline,
          image: unref(fm).hero.image,
          actions: unref(fm).hero.actions
        }, _attrs), {
          "home-hero-prelink": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-prelink", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-hero-prelink")
              ];
            }
          }),
          "home-hero-info": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-info", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-hero-info")
              ];
            }
          }),
          "home-hero-image": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-image", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-hero-image")
              ];
            }
          }),
          _: 3
        }, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$18 = _sfc_main$18.setup;
_sfc_main$18.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../node_modules/.pnpm/vitepress@1.0.0-rc.40_patch_hash=vch4e6zq55wljc7ph3vsefnawq_@algolia+client-search@4.22.1_@ty_cpywouop5vln4rtagwwqvxuyge/node_modules/vitepress/dist/client/theme-default/components/VPHomeHero.vue");
  return _sfc_setup$18 ? _sfc_setup$18(props, ctx) : void 0;
};
const _sfc_main$17 = {};
function _sfc_ssrRender$b(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, _attrs))}><path d="M19.9,12.4c0.1-0.2,0.1-0.5,0-0.8c-0.1-0.1-0.1-0.2-0.2-0.3l-7-7c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l5.3,5.3H5c-0.6,0-1,0.4-1,1s0.4,1,1,1h11.6l-5.3,5.3c-0.4,0.4-0.4,1,0,1.4c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l7-7C19.8,12.6,19.9,12.5,19.9,12.4z"></path></svg>`);
}
const _sfc_setup$17 = _sfc_main$17.setup;
_sfc_main$17.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../node_modules/.pnpm/vitepress@1.0.0-rc.40_patch_hash=vch4e6zq55wljc7ph3vsefnawq_@algolia+client-search@4.22.1_@ty_cpywouop5vln4rtagwwqvxuyge/node_modules/vitepress/dist/client/theme-default/components/icons/VPIconArrowRight.vue");
  return _sfc_setup$17 ? _sfc_setup$17(props, ctx) : void 0;
};
const VPIconArrowRight = /* @__PURE__ */ _export_sfc(_sfc_main$17, [["ssrRender", _sfc_ssrRender$b]]);
const _sfc_main$16 = /* @__PURE__ */ defineComponent({
  __name: "VPFeature",
  __ssrInlineRender: true,
  props: {
    icon: {},
    title: {},
    details: {},
    link: {},
    linkText: {},
    rel: {},
    target: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1f, mergeProps({
        class: "VPFeature",
        href: _ctx.link,
        rel: _ctx.rel,
        target: _ctx.target,
        "no-icon": true,
        tag: _ctx.link ? "a" : "div"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<article class="box" data-v-3c201eeb${_scopeId}>`);
            if (typeof _ctx.icon === "object" && _ctx.icon.wrap) {
              _push2(`<div class="icon" data-v-3c201eeb${_scopeId}>`);
              _push2(ssrRenderComponent(VPImage, {
                image: _ctx.icon,
                alt: _ctx.icon.alt,
                height: _ctx.icon.height || 48,
                width: _ctx.icon.width || 48
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else if (typeof _ctx.icon === "object") {
              _push2(ssrRenderComponent(VPImage, {
                image: _ctx.icon,
                alt: _ctx.icon.alt,
                height: _ctx.icon.height || 48,
                width: _ctx.icon.width || 48
              }, null, _parent2, _scopeId));
            } else if (_ctx.icon) {
              _push2(`<div class="icon" data-v-3c201eeb${_scopeId}>${_ctx.icon}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<h2 class="title" data-v-3c201eeb${_scopeId}>${_ctx.title}</h2>`);
            if (_ctx.details) {
              _push2(`<p class="details" data-v-3c201eeb${_scopeId}>${_ctx.details}</p>`);
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.linkText) {
              _push2(`<div class="link-text" data-v-3c201eeb${_scopeId}><p class="link-text-value" data-v-3c201eeb${_scopeId}>${ssrInterpolate(_ctx.linkText)} `);
              _push2(ssrRenderComponent(VPIconArrowRight, { class: "link-text-icon" }, null, _parent2, _scopeId));
              _push2(`</p></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</article>`);
          } else {
            return [
              createVNode("article", { class: "box" }, [
                typeof _ctx.icon === "object" && _ctx.icon.wrap ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "icon"
                }, [
                  createVNode(VPImage, {
                    image: _ctx.icon,
                    alt: _ctx.icon.alt,
                    height: _ctx.icon.height || 48,
                    width: _ctx.icon.width || 48
                  }, null, 8, ["image", "alt", "height", "width"])
                ])) : typeof _ctx.icon === "object" ? (openBlock(), createBlock(VPImage, {
                  key: 1,
                  image: _ctx.icon,
                  alt: _ctx.icon.alt,
                  height: _ctx.icon.height || 48,
                  width: _ctx.icon.width || 48
                }, null, 8, ["image", "alt", "height", "width"])) : _ctx.icon ? (openBlock(), createBlock("div", {
                  key: 2,
                  class: "icon",
                  innerHTML: _ctx.icon
                }, null, 8, ["innerHTML"])) : createCommentVNode("", true),
                createVNode("h2", {
                  class: "title",
                  innerHTML: _ctx.title
                }, null, 8, ["innerHTML"]),
                _ctx.details ? (openBlock(), createBlock("p", {
                  key: 3,
                  class: "details",
                  innerHTML: _ctx.details
                }, null, 8, ["innerHTML"])) : createCommentVNode("", true),
                _ctx.linkText ? (openBlock(), createBlock("div", {
                  key: 4,
                  class: "link-text"
                }, [
                  createVNode("p", { class: "link-text-value" }, [
                    createTextVNode(toDisplayString(_ctx.linkText) + " ", 1),
                    createVNode(VPIconArrowRight, { class: "link-text-icon" })
                  ])
                ])) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$16 = _sfc_main$16.setup;
_sfc_main$16.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../node_modules/.pnpm/vitepress@1.0.0-rc.40_patch_hash=vch4e6zq55wljc7ph3vsefnawq_@algolia+client-search@4.22.1_@ty_cpywouop5vln4rtagwwqvxuyge/node_modules/vitepress/dist/client/theme-default/components/VPFeature.vue");
  return _sfc_setup$16 ? _sfc_setup$16(props, ctx) : void 0;
};
const VPFeature = /* @__PURE__ */ _export_sfc(_sfc_main$16, [["__scopeId", "data-v-3c201eeb"]]);
const _sfc_main$15 = /* @__PURE__ */ defineComponent({
  __name: "VPFeatures",
  __ssrInlineRender: true,
  props: {
    features: {}
  },
  setup(__props) {
    const props = __props;
    const grid = computed(() => {
      const length = props.features.length;
      if (!length) {
        return;
      } else if (length === 2) {
        return "grid-2";
      } else if (length === 3) {
        return "grid-3";
      } else if (length % 3 === 0) {
        return "grid-6";
      } else if (length > 3) {
        return "grid-4";
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (_ctx.features) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPFeatures" }, _attrs))} data-v-2000a7cc><div class="container" data-v-2000a7cc><div class="items" data-v-2000a7cc><!--[-->`);
        ssrRenderList(_ctx.features, (feature) => {
          _push(`<div class="${ssrRenderClass([[grid.value], "item"])}" data-v-2000a7cc>`);
          _push(ssrRenderComponent(VPFeature, {
            icon: feature.icon,
            title: feature.title,
            details: feature.details,
            link: feature.link,
            "link-text": feature.linkText,
            rel: feature.rel,
            target: feature.target
          }, null, _parent));
          _push(`</div>`);
        });
        _push(`<!--]--></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$15 = _sfc_main$15.setup;
_sfc_main$15.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../node_modules/.pnpm/vitepress@1.0.0-rc.40_patch_hash=vch4e6zq55wljc7ph3vsefnawq_@algolia+client-search@4.22.1_@ty_cpywouop5vln4rtagwwqvxuyge/node_modules/vitepress/dist/client/theme-default/components/VPFeatures.vue");
  return _sfc_setup$15 ? _sfc_setup$15(props, ctx) : void 0;
};
const VPFeatures = /* @__PURE__ */ _export_sfc(_sfc_main$15, [["__scopeId", "data-v-2000a7cc"]]);
const _sfc_main$14 = /* @__PURE__ */ defineComponent({
  __name: "VPHomeFeatures",
  __ssrInlineRender: true,
  setup(__props) {
    const { frontmatter: fm } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(fm).features) {
        _push(ssrRenderComponent(VPFeatures, mergeProps({
          class: "VPHomeFeatures",
          features: unref(fm).features
        }, _attrs), null, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$14 = _sfc_main$14.setup;
_sfc_main$14.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../node_modules/.pnpm/vitepress@1.0.0-rc.40_patch_hash=vch4e6zq55wljc7ph3vsefnawq_@algolia+client-search@4.22.1_@ty_cpywouop5vln4rtagwwqvxuyge/node_modules/vitepress/dist/client/theme-default/components/VPHomeFeatures.vue");
  return _sfc_setup$14 ? _sfc_setup$14(props, ctx) : void 0;
};
const _sfc_main$13 = /* @__PURE__ */ defineComponent({
  __name: "VPHome",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Content = resolveComponent("Content");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPHome" }, _attrs))} data-v-4ea5b8d4>`);
      ssrRenderSlot(_ctx.$slots, "home-hero-before", {}, null, _push, _parent);
      _push(ssrRenderComponent(_sfc_main$18, null, {
        "home-hero-prelink": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "home-hero-prelink", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "home-hero-prelink", {}, void 0, true)
            ];
          }
        }),
        "home-hero-info": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "home-hero-info", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "home-hero-info", {}, void 0, true)
            ];
          }
        }),
        "home-hero-image": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "home-hero-image", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "home-hero-image", {}, void 0, true)
            ];
          }
        }),
        _: 3
      }, _parent));
      ssrRenderSlot(_ctx.$slots, "home-hero-after", {}, null, _push, _parent);
      ssrRenderSlot(_ctx.$slots, "home-features-before", {}, null, _push, _parent);
      _push(ssrRenderComponent(_sfc_main$14, null, null, _parent));
      ssrRenderSlot(_ctx.$slots, "home-features-after", {}, null, _push, _parent);
      _push(ssrRenderComponent(_component_Content, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$13 = _sfc_main$13.setup;
_sfc_main$13.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../node_modules/.pnpm/vitepress@1.0.0-rc.40_patch_hash=vch4e6zq55wljc7ph3vsefnawq_@algolia+client-search@4.22.1_@ty_cpywouop5vln4rtagwwqvxuyge/node_modules/vitepress/dist/client/theme-default/components/VPHome.vue");
  return _sfc_setup$13 ? _sfc_setup$13(props, ctx) : void 0;
};
const VPHome = /* @__PURE__ */ _export_sfc(_sfc_main$13, [["__scopeId", "data-v-4ea5b8d4"]]);
const _sfc_main$12 = {};
function _sfc_ssrRender$a(_ctx, _push, _parent, _attrs) {
  const _component_Content = resolveComponent("Content");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPPage" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "page-top", {}, null, _push, _parent);
  _push(ssrRenderComponent(_component_Content, null, null, _parent));
  ssrRenderSlot(_ctx.$slots, "page-bottom", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$12 = _sfc_main$12.setup;
_sfc_main$12.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../node_modules/.pnpm/vitepress@1.0.0-rc.40_patch_hash=vch4e6zq55wljc7ph3vsefnawq_@algolia+client-search@4.22.1_@ty_cpywouop5vln4rtagwwqvxuyge/node_modules/vitepress/dist/client/theme-default/components/VPPage.vue");
  return _sfc_setup$12 ? _sfc_setup$12(props, ctx) : void 0;
};
const VPPage = /* @__PURE__ */ _export_sfc(_sfc_main$12, [["ssrRender", _sfc_ssrRender$a]]);
const _sfc_main$11 = /* @__PURE__ */ defineComponent({
  __name: "VPContent",
  __ssrInlineRender: true,
  setup(__props) {
    const { page, frontmatter } = useData();
    const { hasSidebar } = useSidebar();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["VPContent", {
          "has-sidebar": unref(hasSidebar),
          "is-home": unref(frontmatter).layout === "home"
        }],
        id: "VPContent"
      }, _attrs))} data-v-4de572b2>`);
      if (unref(page).isNotFound) {
        ssrRenderSlot(_ctx.$slots, "not-found", {}, () => {
          _push(ssrRenderComponent(NotFound, null, null, _parent));
        }, _push, _parent);
      } else if (unref(frontmatter).layout === "page") {
        _push(ssrRenderComponent(VPPage, null, {
          "page-top": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "page-top", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "page-top", {}, void 0, true)
              ];
            }
          }),
          "page-bottom": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "page-bottom", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "page-bottom", {}, void 0, true)
              ];
            }
          }),
          _: 3
        }, _parent));
      } else if (unref(frontmatter).layout === "home") {
        _push(ssrRenderComponent(VPHome, null, {
          "home-hero-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-hero-before", {}, void 0, true)
              ];
            }
          }),
          "home-hero-prelink": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-prelink", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-hero-prelink", {}, void 0, true)
              ];
            }
          }),
          "home-hero-info": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-info", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-hero-info", {}, void 0, true)
              ];
            }
          }),
          "home-hero-image": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-image", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-hero-image", {}, void 0, true)
              ];
            }
          }),
          "home-hero-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-hero-after", {}, void 0, true)
              ];
            }
          }),
          "home-features-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-features-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-features-before", {}, void 0, true)
              ];
            }
          }),
          "home-features-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-features-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-features-after", {}, void 0, true)
              ];
            }
          }),
          _: 3
        }, _parent));
      } else if (unref(frontmatter).layout && unref(frontmatter).layout !== "doc") {
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(frontmatter).layout), null, null), _parent);
      } else {
        _push(ssrRenderComponent(VPDoc, null, {
          "doc-top": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "doc-top", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "doc-top", {}, void 0, true)
              ];
            }
          }),
          "doc-bottom": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "doc-bottom", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "doc-bottom", {}, void 0, true)
              ];
            }
          }),
          "doc-footer-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "doc-footer-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "doc-footer-before", {}, void 0, true)
              ];
            }
          }),
          "doc-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "doc-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "doc-before", {}, void 0, true)
              ];
            }
          }),
          "doc-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "doc-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "doc-after", {}, void 0, true)
              ];
            }
          }),
          "aside-top": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-top", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-top", {}, void 0, true)
              ];
            }
          }),
          "aside-outline-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-outline-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-outline-before", {}, void 0, true)
              ];
            }
          }),
          "aside-outline-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-outline-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-outline-after", {}, void 0, true)
              ];
            }
          }),
          "aside-ads-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-ads-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-ads-before", {}, void 0, true)
              ];
            }
          }),
          "aside-ads-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-ads-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-ads-after", {}, void 0, true)
              ];
            }
          }),
          "aside-bottom": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-bottom", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-bottom", {}, void 0, true)
              ];
            }
          }),
          _: 3
        }, _parent));
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$11 = _sfc_main$11.setup;
_sfc_main$11.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../node_modules/.pnpm/vitepress@1.0.0-rc.40_patch_hash=vch4e6zq55wljc7ph3vsefnawq_@algolia+client-search@4.22.1_@ty_cpywouop5vln4rtagwwqvxuyge/node_modules/vitepress/dist/client/theme-default/components/VPContent.vue");
  return _sfc_setup$11 ? _sfc_setup$11(props, ctx) : void 0;
};
const VPContent = /* @__PURE__ */ _export_sfc(_sfc_main$11, [["__scopeId", "data-v-4de572b2"]]);
const _sfc_main$10 = /* @__PURE__ */ defineComponent({
  __name: "VPFooter",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme: theme2, frontmatter } = useData();
    const { hasSidebar } = useSidebar();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(theme2).footer && unref(frontmatter).footer !== false) {
        _push(`<footer${ssrRenderAttrs(mergeProps({
          class: ["VPFooter", { "has-sidebar": unref(hasSidebar) }]
        }, _attrs))} data-v-32cde795><div class="container" data-v-32cde795>`);
        if (unref(theme2).footer.message) {
          _push(`<p class="message" data-v-32cde795>${unref(theme2).footer.message}</p>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(theme2).footer.copyright) {
          _push(`<p class="copyright" data-v-32cde795>${unref(theme2).footer.copyright}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></footer>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$10 = _sfc_main$10.setup;
_sfc_main$10.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../node_modules/.pnpm/vitepress@1.0.0-rc.40_patch_hash=vch4e6zq55wljc7ph3vsefnawq_@algolia+client-search@4.22.1_@ty_cpywouop5vln4rtagwwqvxuyge/node_modules/vitepress/dist/client/theme-default/components/VPFooter.vue");
  return _sfc_setup$10 ? _sfc_setup$10(props, ctx) : void 0;
};
const VPFooter = /* @__PURE__ */ _export_sfc(_sfc_main$10, [["__scopeId", "data-v-32cde795"]]);
function useLocalNav() {
  const { theme: theme2, frontmatter } = useData();
  const headers = shallowRef([]);
  const hasLocalNav = computed(() => {
    return headers.value.length > 0;
  });
  onContentUpdated(() => {
    headers.value = getHeaders(frontmatter.value.outline ?? theme2.value.outline);
  });
  return {
    headers,
    hasLocalNav
  };
}
const _sfc_main$$ = {};
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24"
  }, _attrs))}><path d="M9,19c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l5.3-5.3L8.3,6.7c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l6,6c0.4,0.4,0.4,1,0,1.4l-6,6C9.5,18.9,9.3,19,9,19z"></path></svg>`);
}
const _sfc_setup$$ = _sfc_main$$.setup;
_sfc_main$$.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../node_modules/.pnpm/vitepress@1.0.0-rc.40_patch_hash=vch4e6zq55wljc7ph3vsefnawq_@algolia+client-search@4.22.1_@ty_cpywouop5vln4rtagwwqvxuyge/node_modules/vitepress/dist/client/theme-default/components/icons/VPIconChevronRight.vue");
  return _sfc_setup$$ ? _sfc_setup$$(props, ctx) : void 0;
};
const VPIconChevronRight = /* @__PURE__ */ _export_sfc(_sfc_main$$, [["ssrRender", _sfc_ssrRender$9]]);
const _sfc_main$_ = /* @__PURE__ */ defineComponent({
  __name: "VPLocalNavOutlineDropdown",
  __ssrInlineRender: true,
  props: {
    headers: {},
    navHeight: {}
  },
  setup(__props) {
    const { theme: theme2 } = useData();
    const open = ref(false);
    const vh = ref(0);
    const main = ref();
    ref();
    onClickOutside(main, () => {
      open.value = false;
    });
    onKeyStroke("Escape", () => {
      open.value = false;
    });
    onContentUpdated(() => {
      open.value = false;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "VPLocalNavOutlineDropdown",
        style: { "--vp-vh": vh.value + "px" },
        ref_key: "main",
        ref: main
      }, _attrs))} data-v-9b90c7ec>`);
      if (_ctx.headers.length > 0) {
        _push(`<button class="${ssrRenderClass({ open: open.value })}" data-v-9b90c7ec>${ssrInterpolate(unref(resolveTitle)(unref(theme2)))} `);
        _push(ssrRenderComponent(VPIconChevronRight, { class: "icon" }, null, _parent));
        _push(`</button>`);
      } else {
        _push(`<button data-v-9b90c7ec>${ssrInterpolate(unref(theme2).returnToTopLabel || "Return to top")}</button>`);
      }
      if (open.value) {
        _push(`<div class="items" data-v-9b90c7ec><div class="header" data-v-9b90c7ec><a class="top-link" href="#" data-v-9b90c7ec>${ssrInterpolate(unref(theme2).returnToTopLabel || "Return to top")}</a></div><div class="outline" data-v-9b90c7ec>`);
        _push(ssrRenderComponent(VPDocOutlineItem, { headers: _ctx.headers }, null, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$_ = _sfc_main$_.setup;
_sfc_main$_.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../node_modules/.pnpm/vitepress@1.0.0-rc.40_patch_hash=vch4e6zq55wljc7ph3vsefnawq_@algolia+client-search@4.22.1_@ty_cpywouop5vln4rtagwwqvxuyge/node_modules/vitepress/dist/client/theme-default/components/VPLocalNavOutlineDropdown.vue");
  return _sfc_setup$_ ? _sfc_setup$_(props, ctx) : void 0;
};
const VPLocalNavOutlineDropdown = /* @__PURE__ */ _export_sfc(_sfc_main$_, [["__scopeId", "data-v-9b90c7ec"]]);
const _sfc_main$Z = {};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24"
  }, _attrs))}><path d="M17,11H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h14c0.6,0,1,0.4,1,1S17.6,11,17,11z"></path><path d="M21,7H3C2.4,7,2,6.6,2,6s0.4-1,1-1h18c0.6,0,1,0.4,1,1S21.6,7,21,7z"></path><path d="M21,15H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h18c0.6,0,1,0.4,1,1S21.6,15,21,15z"></path><path d="M17,19H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h14c0.6,0,1,0.4,1,1S17.6,19,17,19z"></path></svg>`);
}
const _sfc_setup$Z = _sfc_main$Z.setup;
_sfc_main$Z.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../node_modules/.pnpm/vitepress@1.0.0-rc.40_patch_hash=vch4e6zq55wljc7ph3vsefnawq_@algolia+client-search@4.22.1_@ty_cpywouop5vln4rtagwwqvxuyge/node_modules/vitepress/dist/client/theme-default/components/icons/VPIconAlignLeft.vue");
  return _sfc_setup$Z ? _sfc_setup$Z(props, ctx) : void 0;
};
const VPIconAlignLeft = /* @__PURE__ */ _export_sfc(_sfc_main$Z, [["ssrRender", _sfc_ssrRender$8]]);
const _sfc_main$Y = /* @__PURE__ */ defineComponent({
  __name: "VPLocalNav",
  __ssrInlineRender: true,
  props: {
    open: { type: Boolean }
  },
  emits: ["open-menu"],
  setup(__props) {
    const { theme: theme2, frontmatter } = useData();
    const { hasSidebar } = useSidebar();
    const { headers } = useLocalNav();
    const { y } = useWindowScroll();
    const navHeight = ref(0);
    onMounted(() => {
      navHeight.value = parseInt(
        getComputedStyle(document.documentElement).getPropertyValue(
          "--vp-nav-height"
        )
      );
    });
    onContentUpdated(() => {
      headers.value = getHeaders(frontmatter.value.outline ?? theme2.value.outline);
    });
    const empty = computed(() => {
      return headers.value.length === 0;
    });
    const emptyAndNoSidebar = computed(() => {
      return empty.value && !hasSidebar.value;
    });
    const classes = computed(() => {
      return {
        VPLocalNav: true,
        "has-sidebar": hasSidebar.value,
        empty: empty.value,
        fixed: emptyAndNoSidebar.value
      };
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(frontmatter).layout !== "home" && (!emptyAndNoSidebar.value || unref(y) >= navHeight.value)) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: classes.value }, _attrs))} data-v-34ba0bf9><div class="container" data-v-34ba0bf9>`);
        if (unref(hasSidebar)) {
          _push(`<button class="menu"${ssrRenderAttr("aria-expanded", _ctx.open)} aria-controls="VPSidebarNav" data-v-34ba0bf9>`);
          _push(ssrRenderComponent(VPIconAlignLeft, { class: "menu-icon" }, null, _parent));
          _push(`<span class="menu-text" data-v-34ba0bf9>${ssrInterpolate(unref(theme2).sidebarMenuLabel || "Menu")}</span></button>`);
        } else {
          _push(`<!---->`);
        }
        _push(ssrRenderComponent(VPLocalNavOutlineDropdown, {
          headers: unref(headers),
          navHeight: navHeight.value
        }, null, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$Y = _sfc_main$Y.setup;
_sfc_main$Y.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../node_modules/.pnpm/vitepress@1.0.0-rc.40_patch_hash=vch4e6zq55wljc7ph3vsefnawq_@algolia+client-search@4.22.1_@ty_cpywouop5vln4rtagwwqvxuyge/node_modules/vitepress/dist/client/theme-default/components/VPLocalNav.vue");
  return _sfc_setup$Y ? _sfc_setup$Y(props, ctx) : void 0;
};
const VPLocalNav = /* @__PURE__ */ _export_sfc(_sfc_main$Y, [["__scopeId", "data-v-34ba0bf9"]]);
function useNav() {
  const isScreenOpen = ref(false);
  function openScreen() {
    isScreenOpen.value = true;
    window.addEventListener("resize", closeScreenOnTabletWindow);
  }
  function closeScreen() {
    isScreenOpen.value = false;
    window.removeEventListener("resize", closeScreenOnTabletWindow);
  }
  function toggleScreen() {
    isScreenOpen.value ? closeScreen() : openScreen();
  }
  function closeScreenOnTabletWindow() {
    window.outerWidth >= 768 && closeScreen();
  }
  const route = useRoute();
  watch(() => route.path, closeScreen);
  return {
    isScreenOpen,
    openScreen,
    closeScreen,
    toggleScreen
  };
}
const _sfc_main$X = {};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs) {
  _push(`<button${ssrRenderAttrs(mergeProps({
    class: "VPSwitch",
    type: "button",
    role: "switch"
  }, _attrs))} data-v-b1c9c609><span class="check" data-v-b1c9c609>`);
  if (_ctx.$slots.default) {
    _push(`<span class="icon" data-v-b1c9c609>`);
    ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
    _push(`</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</span></button>`);
}
const _sfc_setup$X = _sfc_main$X.setup;
_sfc_main$X.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../node_modules/.pnpm/vitepress@1.0.0-rc.40_patch_hash=vch4e6zq55wljc7ph3vsefnawq_@algolia+client-search@4.22.1_@ty_cpywouop5vln4rtagwwqvxuyge/node_modules/vitepress/dist/client/theme-default/components/VPSwitch.vue");
  return _sfc_setup$X ? _sfc_setup$X(props, ctx) : void 0;
};
const VPSwitch = /* @__PURE__ */ _export_sfc(_sfc_main$X, [["ssrRender", _sfc_ssrRender$7], ["__scopeId", "data-v-b1c9c609"]]);
const _sfc_main$W = {};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24"
  }, _attrs))}><path d="M12.1,22c-0.3,0-0.6,0-0.9,0c-5.5-0.5-9.5-5.4-9-10.9c0.4-4.8,4.2-8.6,9-9c0.4,0,0.8,0.2,1,0.5c0.2,0.3,0.2,0.8-0.1,1.1c-2,2.7-1.4,6.4,1.3,8.4c2.1,1.6,5,1.6,7.1,0c0.3-0.2,0.7-0.3,1.1-0.1c0.3,0.2,0.5,0.6,0.5,1c-0.2,2.7-1.5,5.1-3.6,6.8C16.6,21.2,14.4,22,12.1,22zM9.3,4.4c-2.9,1-5,3.6-5.2,6.8c-0.4,4.4,2.8,8.3,7.2,8.7c2.1,0.2,4.2-0.4,5.8-1.8c1.1-0.9,1.9-2.1,2.4-3.4c-2.5,0.9-5.3,0.5-7.5-1.1C9.2,11.4,8.1,7.7,9.3,4.4z"></path></svg>`);
}
const _sfc_setup$W = _sfc_main$W.setup;
_sfc_main$W.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../node_modules/.pnpm/vitepress@1.0.0-rc.40_patch_hash=vch4e6zq55wljc7ph3vsefnawq_@algolia+client-search@4.22.1_@ty_cpywouop5vln4rtagwwqvxuyge/node_modules/vitepress/dist/client/theme-default/components/icons/VPIconMoon.vue");
  return _sfc_setup$W ? _sfc_setup$W(props, ctx) : void 0;
};
const VPIconMoon = /* @__PURE__ */ _export_sfc(_sfc_main$W, [["ssrRender", _sfc_ssrRender$6]]);
const _sfc_main$V = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24"
  }, _attrs))}><path d="M12,18c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S15.3,18,12,18zM12,8c-2.2,0-4,1.8-4,4c0,2.2,1.8,4,4,4c2.2,0,4-1.8,4-4C16,9.8,14.2,8,12,8z"></path><path d="M12,4c-0.6,0-1-0.4-1-1V1c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,3.6,12.6,4,12,4z"></path><path d="M12,24c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,23.6,12.6,24,12,24z"></path><path d="M5.6,6.6c-0.3,0-0.5-0.1-0.7-0.3L3.5,4.9c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C6.2,6.5,5.9,6.6,5.6,6.6z"></path><path d="M19.8,20.8c-0.3,0-0.5-0.1-0.7-0.3l-1.4-1.4c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C20.3,20.7,20,20.8,19.8,20.8z"></path><path d="M3,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S3.6,13,3,13z"></path><path d="M23,13h-2c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S23.6,13,23,13z"></path><path d="M4.2,20.8c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C4.7,20.7,4.5,20.8,4.2,20.8z"></path><path d="M18.4,6.6c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C18.9,6.5,18.6,6.6,18.4,6.6z"></path></svg>`);
}
const _sfc_setup$V = _sfc_main$V.setup;
_sfc_main$V.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../node_modules/.pnpm/vitepress@1.0.0-rc.40_patch_hash=vch4e6zq55wljc7ph3vsefnawq_@algolia+client-search@4.22.1_@ty_cpywouop5vln4rtagwwqvxuyge/node_modules/vitepress/dist/client/theme-default/components/icons/VPIconSun.vue");
  return _sfc_setup$V ? _sfc_setup$V(props, ctx) : void 0;
};
const VPIconSun = /* @__PURE__ */ _export_sfc(_sfc_main$V, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$U = /* @__PURE__ */ defineComponent({
  __name: "VPSwitchAppearance",
  __ssrInlineRender: true,
  setup(__props) {
    const { isDark, theme: theme2 } = useData();
    const toggleAppearance = inject("toggle-appearance", () => {
      isDark.value = !isDark.value;
    });
    const switchTitle = computed(() => {
      return isDark.value ? theme2.value.lightModeSwitchTitle || "Switch to light theme" : theme2.value.darkModeSwitchTitle || "Switch to dark theme";
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VPSwitch, mergeProps({
        title: switchTitle.value,
        class: "VPSwitchAppearance",
        "aria-checked": unref(isDark),
        onClick: unref(toggleAppearance)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VPIconSun, { class: "sun" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VPIconMoon, { class: "moon" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(VPIconSun, { class: "sun" }),
              createVNode(VPIconMoon, { class: "moon" })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$U = _sfc_main$U.setup;
_sfc_main$U.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../node_modules/.pnpm/vitepress@1.0.0-rc.40_patch_hash=vch4e6zq55wljc7ph3vsefnawq_@algolia+client-search@4.22.1_@ty_cpywouop5vln4rtagwwqvxuyge/node_modules/vitepress/dist/client/theme-default/components/VPSwitchAppearance.vue");
  return _sfc_setup$U ? _sfc_setup$U(props, ctx) : void 0;
};
const VPSwitchAppearance = /* @__PURE__ */ _export_sfc(_sfc_main$U, [["__scopeId", "data-v-79ddccf8"]]);
const _sfc_main$T = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarAppearance",
  __ssrInlineRender: true,
  setup(__props) {
    const { site } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(site).appearance && unref(site).appearance !== "force-dark") {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPNavBarAppearance" }, _attrs))} data-v-a89300a9>`);
        _push(ssrRenderComponent(VPSwitchAppearance, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$T = _sfc_main$T.setup;
_sfc_main$T.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../node_modules/.pnpm/vitepress@1.0.0-rc.40_patch_hash=vch4e6zq55wljc7ph3vsefnawq_@algolia+client-search@4.22.1_@ty_cpywouop5vln4rtagwwqvxuyge/node_modules/vitepress/dist/client/theme-default/components/VPNavBarAppearance.vue");
  return _sfc_setup$T ? _sfc_setup$T(props, ctx) : void 0;
};
const VPNavBarAppearance = /* @__PURE__ */ _export_sfc(_sfc_main$T, [["__scopeId", "data-v-a89300a9"]]);
const focusedElement = ref();
let active = false;
let listeners = 0;
function useFlyout(options) {
  const focus = ref(false);
  if (inBrowser) {
    !active && activateFocusTracking();
    listeners++;
    const unwatch = watch(focusedElement, (el) => {
      var _a, _b, _c2;
      if (el === options.el.value || ((_a = options.el.value) == null ? void 0 : _a.contains(el))) {
        focus.value = true;
        (_b = options.onFocus) == null ? void 0 : _b.call(options);
      } else {
        focus.value = false;
        (_c2 = options.onBlur) == null ? void 0 : _c2.call(options);
      }
    });
    onUnmounted(() => {
      unwatch();
      listeners--;
      if (!listeners) {
        deactivateFocusTracking();
      }
    });
  }
  return readonly(focus);
}
function activateFocusTracking() {
  document.addEventListener("focusin", handleFocusIn);
  active = true;
  focusedElement.value = document.activeElement;
}
function deactivateFocusTracking() {
  document.removeEventListener("focusin", handleFocusIn);
}
function handleFocusIn() {
  focusedElement.value = document.activeElement;
}
const _sfc_main$S = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24"
  }, _attrs))}><path d="M12,16c-0.3,0-0.5-0.1-0.7-0.3l-6-6c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l5.3,5.3l5.3-5.3c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-6,6C12.5,15.9,12.3,16,12,16z"></path></svg>`);
}
const _sfc_setup$S = _sfc_main$S.setup;
_sfc_main$S.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../node_modules/.pnpm/vitepress@1.0.0-rc.40_patch_hash=vch4e6zq55wljc7ph3vsefnawq_@algolia+client-search@4.22.1_@ty_cpywouop5vln4rtagwwqvxuyge/node_modules/vitepress/dist/client/theme-default/components/icons/VPIconChevronDown.vue");
  return _sfc_setup$S ? _sfc_setup$S(props, ctx) : void 0;
};
const VPIconChevronDown = /* @__PURE__ */ _export_sfc(_sfc_main$S, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$R = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24"
  }, _attrs))}><circle cx="12" cy="12" r="2"></circle><circle cx="19" cy="12" r="2"></circle><circle cx="5" cy="12" r="2"></circle></svg>`);
}
const _sfc_setup$R = _sfc_main$R.setup;
_sfc_main$R.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../node_modules/.pnpm/vitepress@1.0.0-rc.40_patch_hash=vch4e6zq55wljc7ph3vsefnawq_@algolia+client-search@4.22.1_@ty_cpywouop5vln4rtagwwqvxuyge/node_modules/vitepress/dist/client/theme-default/components/icons/VPIconMoreHorizontal.vue");
  return _sfc_setup$R ? _sfc_setup$R(props, ctx) : void 0;
};
const VPIconMoreHorizontal = /* @__PURE__ */ _export_sfc(_sfc_main$R, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$Q = /* @__PURE__ */ defineComponent({
  __name: "VPMenuLink",
  __ssrInlineRender: true,
  props: {
    item: {}
  },
  setup(__props) {
    const { page } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPMenuLink" }, _attrs))} data-v-25730adc>`);
      _push(ssrRenderComponent(_sfc_main$1f, {
        class: { active: unref(isActive)(unref(page).relativePath, _ctx.item.activeMatch || _ctx.item.link, !!_ctx.item.activeMatch) },
        href: _ctx.item.link,
        target: _ctx.item.target,
        rel: _ctx.item.rel
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.item.text)}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.item.text), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$Q = _sfc_main$Q.setup;
_sfc_main$Q.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../node_modules/.pnpm/vitepress@1.0.0-rc.40_patch_hash=vch4e6zq55wljc7ph3vsefnawq_@algolia+client-search@4.22.1_@ty_cpywouop5vln4rtagwwqvxuyge/node_modules/vitepress/dist/client/theme-default/components/VPMenuLink.vue");
  return _sfc_setup$Q ? _sfc_setup$Q(props, ctx) : void 0;
};
const VPMenuLink = /* @__PURE__ */ _export_sfc(_sfc_main$Q, [["__scopeId", "data-v-25730adc"]]);
const _sfc_main$P = /* @__PURE__ */ defineComponent({
  __name: "VPMenuGroup",
  __ssrInlineRender: true,
  props: {
    text: {},
    items: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPMenuGroup" }, _attrs))} data-v-ec10e0cc>`);
      if (_ctx.text) {
        _push(`<p class="title" data-v-ec10e0cc>${ssrInterpolate(_ctx.text)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList(_ctx.items, (item) => {
        _push(`<!--[-->`);
        if ("link" in item) {
          _push(ssrRenderComponent(VPMenuLink, { item }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$P = _sfc_main$P.setup;
_sfc_main$P.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../node_modules/.pnpm/vitepress@1.0.0-rc.40_patch_hash=vch4e6zq55wljc7ph3vsefnawq_@algolia+client-search@4.22.1_@ty_cpywouop5vln4rtagwwqvxuyge/node_modules/vitepress/dist/client/theme-default/components/VPMenuGroup.vue");
  return _sfc_setup$P ? _sfc_setup$P(props, ctx) : void 0;
};
const VPMenuGroup = /* @__PURE__ */ _export_sfc(_sfc_main$P, [["__scopeId", "data-v-ec10e0cc"]]);
const _sfc_main$O = /* @__PURE__ */ defineComponent({
  __name: "VPMenu",
  __ssrInlineRender: true,
  props: {
    items: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPMenu" }, _attrs))} data-v-9693d96d>`);
      if (_ctx.items) {
        _push(`<div class="items" data-v-9693d96d><!--[-->`);
        ssrRenderList(_ctx.items, (item) => {
          _push(`<!--[-->`);
          if ("link" in item) {
            _push(ssrRenderComponent(VPMenuLink, { item }, null, _parent));
          } else {
            _push(ssrRenderComponent(VPMenuGroup, {
              text: item.text,
              items: item.items
            }, null, _parent));
          }
          _push(`<!--]-->`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$O = _sfc_main$O.setup;
_sfc_main$O.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../node_modules/.pnpm/vitepress@1.0.0-rc.40_patch_hash=vch4e6zq55wljc7ph3vsefnawq_@algolia+client-search@4.22.1_@ty_cpywouop5vln4rtagwwqvxuyge/node_modules/vitepress/dist/client/theme-default/components/VPMenu.vue");
  return _sfc_setup$O ? _sfc_setup$O(props, ctx) : void 0;
};
const VPMenu = /* @__PURE__ */ _export_sfc(_sfc_main$O, [["__scopeId", "data-v-9693d96d"]]);
const _sfc_main$N = /* @__PURE__ */ defineComponent({
  __name: "VPFlyout",
  __ssrInlineRender: true,
  props: {
    icon: {},
    button: {},
    label: {},
    items: {}
  },
  setup(__props) {
    const open = ref(false);
    const el = ref();
    useFlyout({ el, onBlur });
    function onBlur() {
      open.value = false;
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "VPFlyout",
        ref_key: "el",
        ref: el
      }, _attrs))} data-v-d594882f><button type="button" class="button" aria-haspopup="true"${ssrRenderAttr("aria-expanded", open.value)}${ssrRenderAttr("aria-label", _ctx.label)} data-v-d594882f>`);
      if (_ctx.button || _ctx.icon) {
        _push(`<span class="text" data-v-d594882f>`);
        if (_ctx.icon) {
          ssrRenderVNode(_push, createVNode(resolveDynamicComponent(_ctx.icon), { class: "option-icon" }, null), _parent);
        } else {
          _push(`<!---->`);
        }
        if (_ctx.button) {
          _push(`<span data-v-d594882f>${_ctx.button}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(ssrRenderComponent(VPIconChevronDown, { class: "text-icon" }, null, _parent));
        _push(`</span>`);
      } else {
        _push(ssrRenderComponent(VPIconMoreHorizontal, { class: "icon" }, null, _parent));
      }
      _push(`</button><div class="menu" data-v-d594882f>`);
      _push(ssrRenderComponent(VPMenu, { items: _ctx.items }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", {}, void 0, true)
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$N = _sfc_main$N.setup;
_sfc_main$N.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../node_modules/.pnpm/vitepress@1.0.0-rc.40_patch_hash=vch4e6zq55wljc7ph3vsefnawq_@algolia+client-search@4.22.1_@ty_cpywouop5vln4rtagwwqvxuyge/node_modules/vitepress/dist/client/theme-default/components/VPFlyout.vue");
  return _sfc_setup$N ? _sfc_setup$N(props, ctx) : void 0;
};
const VPFlyout = /* @__PURE__ */ _export_sfc(_sfc_main$N, [["__scopeId", "data-v-d594882f"]]);
const icons = {
  discord: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Discord</title><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/></svg>',
  facebook: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Facebook</title><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>',
  github: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>',
  instagram: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>',
  linkedin: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',
  mastodon: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Mastodon</title><path d="M23.268 5.313c-.35-2.578-2.617-4.61-5.304-5.004C17.51.242 15.792 0 11.813 0h-.03c-3.98 0-4.835.242-5.288.309C3.882.692 1.496 2.518.917 5.127.64 6.412.61 7.837.661 9.143c.074 1.874.088 3.745.26 5.611.118 1.24.325 2.47.62 3.68.55 2.237 2.777 4.098 4.96 4.857 2.336.792 4.849.923 7.256.38.265-.061.527-.132.786-.213.585-.184 1.27-.39 1.774-.753a.057.057 0 0 0 .023-.043v-1.809a.052.052 0 0 0-.02-.041.053.053 0 0 0-.046-.01 20.282 20.282 0 0 1-4.709.545c-2.73 0-3.463-1.284-3.674-1.818a5.593 5.593 0 0 1-.319-1.433.053.053 0 0 1 .066-.054c1.517.363 3.072.546 4.632.546.376 0 .75 0 1.125-.01 1.57-.044 3.224-.124 4.768-.422.038-.008.077-.015.11-.024 2.435-.464 4.753-1.92 4.989-5.604.008-.145.03-1.52.03-1.67.002-.512.167-3.63-.024-5.545zm-3.748 9.195h-2.561V8.29c0-1.309-.55-1.976-1.67-1.976-1.23 0-1.846.79-1.846 2.35v3.403h-2.546V8.663c0-1.56-.617-2.35-1.848-2.35-1.112 0-1.668.668-1.67 1.977v6.218H4.822V8.102c0-1.31.337-2.35 1.011-3.12.696-.77 1.608-1.164 2.74-1.164 1.311 0 2.302.5 2.962 1.498l.638 1.06.638-1.06c.66-.999 1.65-1.498 2.96-1.498 1.13 0 2.043.395 2.74 1.164.675.77 1.012 1.81 1.012 3.12z"/></svg>',
  npm: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>npm</title><path d="M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0zM5.13 5.323l13.837.019-.009 13.836h-3.464l.01-10.382h-3.456L12.04 19.17H5.113z"/></svg>',
  slack: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Slack</title><path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/></svg>',
  twitter: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Twitter</title><path d="M21.543 7.104c.015.211.015.423.015.636 0 6.507-4.954 14.01-14.01 14.01v-.003A13.94 13.94 0 0 1 0 19.539a9.88 9.88 0 0 0 7.287-2.041 4.93 4.93 0 0 1-4.6-3.42 4.916 4.916 0 0 0 2.223-.084A4.926 4.926 0 0 1 .96 9.167v-.062a4.887 4.887 0 0 0 2.235.616A4.928 4.928 0 0 1 1.67 3.148 13.98 13.98 0 0 0 11.82 8.292a4.929 4.929 0 0 1 8.39-4.49 9.868 9.868 0 0 0 3.128-1.196 4.941 4.941 0 0 1-2.165 2.724A9.828 9.828 0 0 0 24 4.555a10.019 10.019 0 0 1-2.457 2.549z"/></svg>',
  x: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>X</title><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>',
  youtube: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>YouTube</title><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>'
};
const _sfc_main$M = /* @__PURE__ */ defineComponent({
  __name: "VPSocialLink",
  __ssrInlineRender: true,
  props: {
    icon: {},
    link: {},
    ariaLabel: {}
  },
  setup(__props) {
    const props = __props;
    const svg = computed(() => {
      if (typeof props.icon === "object")
        return props.icon.svg;
      return icons[props.icon];
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<a${ssrRenderAttrs(mergeProps({
        class: "VPSocialLink no-icon",
        href: _ctx.link,
        "aria-label": _ctx.ariaLabel ?? (typeof _ctx.icon === "string" ? _ctx.icon : ""),
        target: "_blank",
        rel: "noopener"
      }, _attrs))} data-v-e775c3f2>${svg.value}</a>`);
    };
  }
});
const _sfc_setup$M = _sfc_main$M.setup;
_sfc_main$M.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../node_modules/.pnpm/vitepress@1.0.0-rc.40_patch_hash=vch4e6zq55wljc7ph3vsefnawq_@algolia+client-search@4.22.1_@ty_cpywouop5vln4rtagwwqvxuyge/node_modules/vitepress/dist/client/theme-default/components/VPSocialLink.vue");
  return _sfc_setup$M ? _sfc_setup$M(props, ctx) : void 0;
};
const VPSocialLink = /* @__PURE__ */ _export_sfc(_sfc_main$M, [["__scopeId", "data-v-e775c3f2"]]);
const _sfc_main$L = /* @__PURE__ */ defineComponent({
  __name: "VPSocialLinks",
  __ssrInlineRender: true,
  props: {
    links: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPSocialLinks" }, _attrs))} data-v-8d3be21b><!--[-->`);
      ssrRenderList(_ctx.links, ({ link: link2, icon, ariaLabel }) => {
        _push(ssrRenderComponent(VPSocialLink, {
          key: link2,
          icon,
          link: link2,
          ariaLabel
        }, null, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$L = _sfc_main$L.setup;
_sfc_main$L.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../node_modules/.pnpm/vitepress@1.0.0-rc.40_patch_hash=vch4e6zq55wljc7ph3vsefnawq_@algolia+client-search@4.22.1_@ty_cpywouop5vln4rtagwwqvxuyge/node_modules/vitepress/dist/client/theme-default/components/VPSocialLinks.vue");
  return _sfc_setup$L ? _sfc_setup$L(props, ctx) : void 0;
};
const VPSocialLinks = /* @__PURE__ */ _export_sfc(_sfc_main$L, [["__scopeId", "data-v-8d3be21b"]]);
const _sfc_main$K = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarExtra",
  __ssrInlineRender: true,
  setup(__props) {
    const { site, theme: theme2 } = useData();
    const { localeLinks, currentLang } = useLangs({ correspondingLink: true });
    const hasExtraContent = computed(
      () => localeLinks.value.length && currentLang.value.label || site.value.appearance || theme2.value.socialLinks
    );
    return (_ctx, _push, _parent, _attrs) => {
      if (hasExtraContent.value) {
        _push(ssrRenderComponent(VPFlyout, mergeProps({
          class: "VPNavBarExtra",
          label: "extra navigation"
        }, _attrs), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (unref(localeLinks).length && unref(currentLang).label) {
                _push2(`<div class="group translations" data-v-300fc082${_scopeId}><p class="trans-title" data-v-300fc082${_scopeId}>${ssrInterpolate(unref(currentLang).label)}</p><!--[-->`);
                ssrRenderList(unref(localeLinks), (locale) => {
                  _push2(ssrRenderComponent(VPMenuLink, { item: locale }, null, _parent2, _scopeId));
                });
                _push2(`<!--]--></div>`);
              } else {
                _push2(`<!---->`);
              }
              if (unref(site).appearance && unref(site).appearance !== "force-dark") {
                _push2(`<div class="group" data-v-300fc082${_scopeId}><div class="item appearance" data-v-300fc082${_scopeId}><p class="label" data-v-300fc082${_scopeId}>${ssrInterpolate(unref(theme2).darkModeSwitchLabel || "Appearance")}</p><div class="appearance-action" data-v-300fc082${_scopeId}>`);
                _push2(ssrRenderComponent(VPSwitchAppearance, null, null, _parent2, _scopeId));
                _push2(`</div></div></div>`);
              } else {
                _push2(`<!---->`);
              }
              if (unref(theme2).socialLinks) {
                _push2(`<div class="group" data-v-300fc082${_scopeId}><div class="item social-links" data-v-300fc082${_scopeId}>`);
                _push2(ssrRenderComponent(VPSocialLinks, {
                  class: "social-links-list",
                  links: unref(theme2).socialLinks
                }, null, _parent2, _scopeId));
                _push2(`</div></div>`);
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                unref(localeLinks).length && unref(currentLang).label ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "group translations"
                }, [
                  createVNode("p", { class: "trans-title" }, toDisplayString(unref(currentLang).label), 1),
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(localeLinks), (locale) => {
                    return openBlock(), createBlock(VPMenuLink, {
                      key: locale.link,
                      item: locale
                    }, null, 8, ["item"]);
                  }), 128))
                ])) : createCommentVNode("", true),
                unref(site).appearance && unref(site).appearance !== "force-dark" ? (openBlock(), createBlock("div", {
                  key: 1,
                  class: "group"
                }, [
                  createVNode("div", { class: "item appearance" }, [
                    createVNode("p", { class: "label" }, toDisplayString(unref(theme2).darkModeSwitchLabel || "Appearance"), 1),
                    createVNode("div", { class: "appearance-action" }, [
                      createVNode(VPSwitchAppearance)
                    ])
                  ])
                ])) : createCommentVNode("", true),
                unref(theme2).socialLinks ? (openBlock(), createBlock("div", {
                  key: 2,
                  class: "group"
                }, [
                  createVNode("div", { class: "item social-links" }, [
                    createVNode(VPSocialLinks, {
                      class: "social-links-list",
                      links: unref(theme2).socialLinks
                    }, null, 8, ["links"])
                  ])
                ])) : createCommentVNode("", true)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$K = _sfc_main$K.setup;
_sfc_main$K.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../node_modules/.pnpm/vitepress@1.0.0-rc.40_patch_hash=vch4e6zq55wljc7ph3vsefnawq_@algolia+client-search@4.22.1_@ty_cpywouop5vln4rtagwwqvxuyge/node_modules/vitepress/dist/client/theme-default/components/VPNavBarExtra.vue");
  return _sfc_setup$K ? _sfc_setup$K(props, ctx) : void 0;
};
const VPNavBarExtra = /* @__PURE__ */ _export_sfc(_sfc_main$K, [["__scopeId", "data-v-300fc082"]]);
const _sfc_main$J = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarHamburger",
  __ssrInlineRender: true,
  props: {
    active: { type: Boolean }
  },
  emits: ["click"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        type: "button",
        class: ["VPNavBarHamburger", { active: _ctx.active }],
        "aria-label": "mobile navigation",
        "aria-expanded": _ctx.active,
        "aria-controls": "VPNavScreen"
      }, _attrs))} data-v-98d9ef54><span class="container" data-v-98d9ef54><span class="top" data-v-98d9ef54></span><span class="middle" data-v-98d9ef54></span><span class="bottom" data-v-98d9ef54></span></span></button>`);
    };
  }
});
const _sfc_setup$J = _sfc_main$J.setup;
_sfc_main$J.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../node_modules/.pnpm/vitepress@1.0.0-rc.40_patch_hash=vch4e6zq55wljc7ph3vsefnawq_@algolia+client-search@4.22.1_@ty_cpywouop5vln4rtagwwqvxuyge/node_modules/vitepress/dist/client/theme-default/components/VPNavBarHamburger.vue");
  return _sfc_setup$J ? _sfc_setup$J(props, ctx) : void 0;
};
const VPNavBarHamburger = /* @__PURE__ */ _export_sfc(_sfc_main$J, [["__scopeId", "data-v-98d9ef54"]]);
const _sfc_main$I = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarMenuLink",
  __ssrInlineRender: true,
  props: {
    item: {}
  },
  setup(__props) {
    const { page } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1f, mergeProps({
        class: {
          VPNavBarMenuLink: true,
          active: unref(isActive)(
            unref(page).relativePath,
            _ctx.item.activeMatch || _ctx.item.link,
            !!_ctx.item.activeMatch
          )
        },
        href: _ctx.item.link,
        target: _ctx.item.target,
        rel: _ctx.item.rel,
        tabindex: "0"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span data-v-4842b773${_scopeId}>${_ctx.item.text}</span>`);
          } else {
            return [
              createVNode("span", {
                innerHTML: _ctx.item.text
              }, null, 8, ["innerHTML"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$I = _sfc_main$I.setup;
_sfc_main$I.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../node_modules/.pnpm/vitepress@1.0.0-rc.40_patch_hash=vch4e6zq55wljc7ph3vsefnawq_@algolia+client-search@4.22.1_@ty_cpywouop5vln4rtagwwqvxuyge/node_modules/vitepress/dist/client/theme-default/components/VPNavBarMenuLink.vue");
  return _sfc_setup$I ? _sfc_setup$I(props, ctx) : void 0;
};
const VPNavBarMenuLink = /* @__PURE__ */ _export_sfc(_sfc_main$I, [["__scopeId", "data-v-4842b773"]]);
const _sfc_main$H = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarMenuGroup",
  __ssrInlineRender: true,
  props: {
    item: {}
  },
  setup(__props) {
    const props = __props;
    const { page } = useData();
    const isChildActive = (navItem) => {
      if ("link" in navItem) {
        return isActive(
          page.value.relativePath,
          navItem.link,
          !!props.item.activeMatch
        );
      } else {
        return navItem.items.some(isChildActive);
      }
    };
    const childrenActive = computed(() => isChildActive(props.item));
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VPFlyout, mergeProps({
        class: {
          VPNavBarMenuGroup: true,
          active: unref(isActive)(
            unref(page).relativePath,
            _ctx.item.activeMatch,
            !!_ctx.item.activeMatch
          ) || childrenActive.value
        },
        button: _ctx.item.text,
        items: _ctx.item.items
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup$H = _sfc_main$H.setup;
_sfc_main$H.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../node_modules/.pnpm/vitepress@1.0.0-rc.40_patch_hash=vch4e6zq55wljc7ph3vsefnawq_@algolia+client-search@4.22.1_@ty_cpywouop5vln4rtagwwqvxuyge/node_modules/vitepress/dist/client/theme-default/components/VPNavBarMenuGroup.vue");
  return _sfc_setup$H ? _sfc_setup$H(props, ctx) : void 0;
};
const _sfc_main$G = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarMenu",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme: theme2 } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(theme2).nav) {
        _push(`<nav${ssrRenderAttrs(mergeProps({
          "aria-labelledby": "main-nav-aria-label",
          class: "VPNavBarMenu"
        }, _attrs))} data-v-159747c9><span id="main-nav-aria-label" class="visually-hidden" data-v-159747c9>Main Navigation</span><!--[-->`);
        ssrRenderList(unref(theme2).nav, (item) => {
          _push(`<!--[-->`);
          if ("link" in item) {
            _push(ssrRenderComponent(VPNavBarMenuLink, { item }, null, _parent));
          } else {
            _push(ssrRenderComponent(_sfc_main$H, { item }, null, _parent));
          }
          _push(`<!--]-->`);
        });
        _push(`<!--]--></nav>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$G = _sfc_main$G.setup;
_sfc_main$G.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../node_modules/.pnpm/vitepress@1.0.0-rc.40_patch_hash=vch4e6zq55wljc7ph3vsefnawq_@algolia+client-search@4.22.1_@ty_cpywouop5vln4rtagwwqvxuyge/node_modules/vitepress/dist/client/theme-default/components/VPNavBarMenu.vue");
  return _sfc_setup$G ? _sfc_setup$G(props, ctx) : void 0;
};
const VPNavBarMenu = /* @__PURE__ */ _export_sfc(_sfc_main$G, [["__scopeId", "data-v-159747c9"]]);
function createSearchTranslate(defaultTranslations) {
  const { localeIndex, theme: theme2 } = useData();
  function translate(key) {
    var _a, _b, _c2;
    const keyPath = key.split(".");
    const themeObject = (_a = theme2.value.search) == null ? void 0 : _a.options;
    const isObject = themeObject && typeof themeObject === "object";
    const locales = isObject && ((_c2 = (_b = themeObject.locales) == null ? void 0 : _b[localeIndex.value]) == null ? void 0 : _c2.translations) || null;
    const translations = isObject && themeObject.translations || null;
    let localeResult = locales;
    let translationResult = translations;
    let defaultResult = defaultTranslations;
    const lastKey = keyPath.pop();
    for (const k of keyPath) {
      let fallbackResult = null;
      const foundInFallback = defaultResult == null ? void 0 : defaultResult[k];
      if (foundInFallback) {
        fallbackResult = defaultResult = foundInFallback;
      }
      const foundInTranslation = translationResult == null ? void 0 : translationResult[k];
      if (foundInTranslation) {
        fallbackResult = translationResult = foundInTranslation;
      }
      const foundInLocale = localeResult == null ? void 0 : localeResult[k];
      if (foundInLocale) {
        fallbackResult = localeResult = foundInLocale;
      }
      if (!foundInFallback) {
        defaultResult = fallbackResult;
      }
      if (!foundInTranslation) {
        translationResult = fallbackResult;
      }
      if (!foundInLocale) {
        localeResult = fallbackResult;
      }
    }
    return (localeResult == null ? void 0 : localeResult[lastKey]) ?? (translationResult == null ? void 0 : translationResult[lastKey]) ?? (defaultResult == null ? void 0 : defaultResult[lastKey]) ?? "";
  }
  return translate;
}
const _sfc_main$F = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarSearchButton",
  __ssrInlineRender: true,
  setup(__props) {
    const defaultTranslations = {
      button: {
        buttonText: "Search",
        buttonAriaLabel: "Search"
      }
    };
    const $t = createSearchTranslate(defaultTranslations);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        type: "button",
        class: "DocSearch DocSearch-Button",
        "aria-label": unref($t)("button.buttonAriaLabel")
      }, _attrs))}><span class="DocSearch-Button-Container"><svg class="DocSearch-Search-Icon" width="20" height="20" viewBox="0 0 20 20" aria-label="search icon"><path d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg><span class="DocSearch-Button-Placeholder">${ssrInterpolate(unref($t)("button.buttonText"))}</span></span><span class="DocSearch-Button-Keys"><kbd class="DocSearch-Button-Key"></kbd><kbd class="DocSearch-Button-Key">K</kbd></span></button>`);
    };
  }
});
const _sfc_setup$F = _sfc_main$F.setup;
_sfc_main$F.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../node_modules/.pnpm/vitepress@1.0.0-rc.40_patch_hash=vch4e6zq55wljc7ph3vsefnawq_@algolia+client-search@4.22.1_@ty_cpywouop5vln4rtagwwqvxuyge/node_modules/vitepress/dist/client/theme-default/components/VPNavBarSearchButton.vue");
  return _sfc_setup$F ? _sfc_setup$F(props, ctx) : void 0;
};
const _sfc_main$E = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarSearch",
  __ssrInlineRender: true,
  setup(__props) {
    const VPLocalSearchBox = defineAsyncComponent(() => import("./VPLocalSearchBox.2Mtw9zRs.js"));
    const VPAlgoliaSearchBox = () => null;
    const { theme: theme2 } = useData();
    const loaded = ref(false);
    const actuallyLoaded = ref(false);
    onMounted(() => {
      {
        return;
      }
    });
    function load() {
      if (!loaded.value) {
        loaded.value = true;
        setTimeout(poll, 16);
      }
    }
    function poll() {
      const e = new Event("keydown");
      e.key = "k";
      e.metaKey = true;
      window.dispatchEvent(e);
      setTimeout(() => {
        if (!document.querySelector(".DocSearch-Modal")) {
          poll();
        }
      }, 16);
    }
    function isEditingContent(event) {
      const element = event.target;
      const tagName = element.tagName;
      return element.isContentEditable || tagName === "INPUT" || tagName === "SELECT" || tagName === "TEXTAREA";
    }
    const showSearch = ref(false);
    {
      onKeyStroke("k", (event) => {
        if (event.ctrlKey || event.metaKey) {
          event.preventDefault();
          showSearch.value = true;
        }
      });
      onKeyStroke("/", (event) => {
        if (!isEditingContent(event)) {
          event.preventDefault();
          showSearch.value = true;
        }
      });
    }
    const provider = "local";
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPNavBarSearch" }, _attrs))}>`);
      if (unref(provider) === "local") {
        _push(`<!--[-->`);
        if (showSearch.value) {
          _push(ssrRenderComponent(unref(VPLocalSearchBox), {
            onClose: ($event) => showSearch.value = false
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<div id="local-search">`);
        _push(ssrRenderComponent(_sfc_main$F, {
          onClick: ($event) => showSearch.value = true
        }, null, _parent));
        _push(`</div><!--]-->`);
      } else if (unref(provider) === "algolia") {
        _push(`<!--[-->`);
        if (loaded.value) {
          _push(ssrRenderComponent(unref(VPAlgoliaSearchBox), {
            algolia: ((_a = unref(theme2).search) == null ? void 0 : _a.options) ?? unref(theme2).algolia,
            onVnodeBeforeMount: ($event) => actuallyLoaded.value = true
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (!actuallyLoaded.value) {
          _push(`<div id="docsearch">`);
          _push(ssrRenderComponent(_sfc_main$F, { onClick: load }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$E = _sfc_main$E.setup;
_sfc_main$E.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../node_modules/.pnpm/vitepress@1.0.0-rc.40_patch_hash=vch4e6zq55wljc7ph3vsefnawq_@algolia+client-search@4.22.1_@ty_cpywouop5vln4rtagwwqvxuyge/node_modules/vitepress/dist/client/theme-default/components/VPNavBarSearch.vue");
  return _sfc_setup$E ? _sfc_setup$E(props, ctx) : void 0;
};
const _sfc_main$D = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarSocialLinks",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme: theme2 } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(theme2).socialLinks) {
        _push(ssrRenderComponent(VPSocialLinks, mergeProps({
          class: "VPNavBarSocialLinks",
          links: unref(theme2).socialLinks
        }, _attrs), null, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$D = _sfc_main$D.setup;
_sfc_main$D.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../node_modules/.pnpm/vitepress@1.0.0-rc.40_patch_hash=vch4e6zq55wljc7ph3vsefnawq_@algolia+client-search@4.22.1_@ty_cpywouop5vln4rtagwwqvxuyge/node_modules/vitepress/dist/client/theme-default/components/VPNavBarSocialLinks.vue");
  return _sfc_setup$D ? _sfc_setup$D(props, ctx) : void 0;
};
const VPNavBarSocialLinks = /* @__PURE__ */ _export_sfc(_sfc_main$D, [["__scopeId", "data-v-974ba469"]]);
const _sfc_main$C = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarTitle",
  __ssrInlineRender: true,
  setup(__props) {
    const { site, theme: theme2 } = useData();
    const { hasSidebar } = useSidebar();
    const { currentLang } = useLangs();
    const link2 = computed(
      () => {
        var _a;
        return typeof theme2.value.logoLink === "string" ? theme2.value.logoLink : (_a = theme2.value.logoLink) == null ? void 0 : _a.link;
      }
    );
    const rel = computed(
      () => {
        var _a;
        return typeof theme2.value.logoLink === "string" ? void 0 : (_a = theme2.value.logoLink) == null ? void 0 : _a.rel;
      }
    );
    const target = computed(
      () => {
        var _a;
        return typeof theme2.value.logoLink === "string" ? void 0 : (_a = theme2.value.logoLink) == null ? void 0 : _a.target;
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["VPNavBarTitle", { "has-sidebar": unref(hasSidebar) }]
      }, _attrs))} data-v-09eb013b><a class="title"${ssrRenderAttr("href", link2.value ?? unref(normalizeLink$1)(unref(currentLang).link))}${ssrRenderAttr("rel", rel.value)}${ssrRenderAttr("target", target.value)} data-v-09eb013b>`);
      ssrRenderSlot(_ctx.$slots, "nav-bar-title-before", {}, null, _push, _parent);
      if (unref(theme2).logo) {
        _push(ssrRenderComponent(VPImage, {
          class: "logo",
          image: unref(theme2).logo
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(theme2).siteTitle) {
        _push(`<!--[-->${ssrInterpolate(unref(theme2).siteTitle)}<!--]-->`);
      } else if (unref(theme2).siteTitle === void 0) {
        _push(`<!--[-->${ssrInterpolate(unref(site).title)}<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "nav-bar-title-after", {}, null, _push, _parent);
      _push(`</a></div>`);
    };
  }
});
const _sfc_setup$C = _sfc_main$C.setup;
_sfc_main$C.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../node_modules/.pnpm/vitepress@1.0.0-rc.40_patch_hash=vch4e6zq55wljc7ph3vsefnawq_@algolia+client-search@4.22.1_@ty_cpywouop5vln4rtagwwqvxuyge/node_modules/vitepress/dist/client/theme-default/components/VPNavBarTitle.vue");
  return _sfc_setup$C ? _sfc_setup$C(props, ctx) : void 0;
};
const VPNavBarTitle = /* @__PURE__ */ _export_sfc(_sfc_main$C, [["__scopeId", "data-v-09eb013b"]]);
const _sfc_main$B = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24"
  }, _attrs))}><path d="M0 0h24v24H0z" fill="none"></path><path d=" M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z " class="css-c4d79v"></path></svg>`);
}
const _sfc_setup$B = _sfc_main$B.setup;
_sfc_main$B.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../node_modules/.pnpm/vitepress@1.0.0-rc.40_patch_hash=vch4e6zq55wljc7ph3vsefnawq_@algolia+client-search@4.22.1_@ty_cpywouop5vln4rtagwwqvxuyge/node_modules/vitepress/dist/client/theme-default/components/icons/VPIconLanguages.vue");
  return _sfc_setup$B ? _sfc_setup$B(props, ctx) : void 0;
};
const VPIconLanguages = /* @__PURE__ */ _export_sfc(_sfc_main$B, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$A = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarTranslations",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme: theme2 } = useData();
    const { localeLinks, currentLang } = useLangs({ correspondingLink: true });
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(localeLinks).length && unref(currentLang).label) {
        _push(ssrRenderComponent(VPFlyout, mergeProps({
          class: "VPNavBarTranslations",
          icon: VPIconLanguages,
          label: unref(theme2).langMenuLabel || "Change language"
        }, _attrs), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="items" data-v-09a10b60${_scopeId}><p class="title" data-v-09a10b60${_scopeId}>${ssrInterpolate(unref(currentLang).label)}</p><!--[-->`);
              ssrRenderList(unref(localeLinks), (locale) => {
                _push2(ssrRenderComponent(VPMenuLink, { item: locale }, null, _parent2, _scopeId));
              });
              _push2(`<!--]--></div>`);
            } else {
              return [
                createVNode("div", { class: "items" }, [
                  createVNode("p", { class: "title" }, toDisplayString(unref(currentLang).label), 1),
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(localeLinks), (locale) => {
                    return openBlock(), createBlock(VPMenuLink, {
                      key: locale.link,
                      item: locale
                    }, null, 8, ["item"]);
                  }), 128))
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$A = _sfc_main$A.setup;
_sfc_main$A.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../node_modules/.pnpm/vitepress@1.0.0-rc.40_patch_hash=vch4e6zq55wljc7ph3vsefnawq_@algolia+client-search@4.22.1_@ty_cpywouop5vln4rtagwwqvxuyge/node_modules/vitepress/dist/client/theme-default/components/VPNavBarTranslations.vue");
  return _sfc_setup$A ? _sfc_setup$A(props, ctx) : void 0;
};
const VPNavBarTranslations = /* @__PURE__ */ _export_sfc(_sfc_main$A, [["__scopeId", "data-v-09a10b60"]]);
const _sfc_main$z = /* @__PURE__ */ defineComponent({
  __name: "VPNavBar",
  __ssrInlineRender: true,
  props: {
    isScreenOpen: { type: Boolean }
  },
  emits: ["toggle-screen"],
  setup(__props) {
    const { y } = useWindowScroll();
    const { hasSidebar } = useSidebar();
    const { hasLocalNav } = useLocalNav();
    const { frontmatter } = useData();
    const classes = ref({});
    watchPostEffect(() => {
      classes.value = {
        "has-sidebar": hasSidebar.value,
        "has-local-nav": hasLocalNav.value,
        top: frontmatter.value.layout === "home" && y.value === 0
      };
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["VPNavBar", classes.value]
      }, _attrs))} data-v-47e661f1><div class="wrapper" data-v-47e661f1><div class="container" data-v-47e661f1><div class="title" data-v-47e661f1>`);
      _push(ssrRenderComponent(VPNavBarTitle, null, {
        "nav-bar-title-before": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "nav-bar-title-before", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "nav-bar-title-before", {}, void 0, true)
            ];
          }
        }),
        "nav-bar-title-after": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "nav-bar-title-after", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "nav-bar-title-after", {}, void 0, true)
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`</div><div class="content" data-v-47e661f1><div class="content-body" data-v-47e661f1>`);
      ssrRenderSlot(_ctx.$slots, "nav-bar-content-before", {}, null, _push, _parent);
      _push(ssrRenderComponent(_sfc_main$E, { class: "search" }, null, _parent));
      _push(ssrRenderComponent(VPNavBarMenu, { class: "menu" }, null, _parent));
      _push(ssrRenderComponent(VPNavBarTranslations, { class: "translations" }, null, _parent));
      _push(ssrRenderComponent(VPNavBarAppearance, { class: "appearance" }, null, _parent));
      _push(ssrRenderComponent(VPNavBarSocialLinks, { class: "social-links" }, null, _parent));
      _push(ssrRenderComponent(VPNavBarExtra, { class: "extra" }, null, _parent));
      ssrRenderSlot(_ctx.$slots, "nav-bar-content-after", {}, null, _push, _parent);
      _push(ssrRenderComponent(VPNavBarHamburger, {
        class: "hamburger",
        active: _ctx.isScreenOpen,
        onClick: ($event) => _ctx.$emit("toggle-screen")
      }, null, _parent));
      _push(`</div></div></div></div><div class="divider" data-v-47e661f1><div class="divider-line" data-v-47e661f1></div></div></div>`);
    };
  }
});
const _sfc_setup$z = _sfc_main$z.setup;
_sfc_main$z.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../node_modules/.pnpm/vitepress@1.0.0-rc.40_patch_hash=vch4e6zq55wljc7ph3vsefnawq_@algolia+client-search@4.22.1_@ty_cpywouop5vln4rtagwwqvxuyge/node_modules/vitepress/dist/client/theme-default/components/VPNavBar.vue");
  return _sfc_setup$z ? _sfc_setup$z(props, ctx) : void 0;
};
const VPNavBar = /* @__PURE__ */ _export_sfc(_sfc_main$z, [["__scopeId", "data-v-47e661f1"]]);
const _sfc_main$y = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenAppearance",
  __ssrInlineRender: true,
  setup(__props) {
    const { site, theme: theme2 } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(site).appearance && unref(site).appearance !== "force-dark") {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPNavScreenAppearance" }, _attrs))} data-v-da1e90d4><p class="text" data-v-da1e90d4>${ssrInterpolate(unref(theme2).darkModeSwitchLabel || "Appearance")}</p>`);
        _push(ssrRenderComponent(VPSwitchAppearance, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$y = _sfc_main$y.setup;
_sfc_main$y.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../node_modules/.pnpm/vitepress@1.0.0-rc.40_patch_hash=vch4e6zq55wljc7ph3vsefnawq_@algolia+client-search@4.22.1_@ty_cpywouop5vln4rtagwwqvxuyge/node_modules/vitepress/dist/client/theme-default/components/VPNavScreenAppearance.vue");
  return _sfc_setup$y ? _sfc_setup$y(props, ctx) : void 0;
};
const VPNavScreenAppearance = /* @__PURE__ */ _export_sfc(_sfc_main$y, [["__scopeId", "data-v-da1e90d4"]]);
const _sfc_main$x = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenMenuLink",
  __ssrInlineRender: true,
  props: {
    item: {}
  },
  setup(__props) {
    const closeScreen = inject("close-screen");
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1f, mergeProps({
        class: "VPNavScreenMenuLink",
        href: _ctx.item.link,
        target: _ctx.item.target,
        rel: _ctx.item.rel,
        onClick: unref(closeScreen)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.item.text)}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.item.text), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$x = _sfc_main$x.setup;
_sfc_main$x.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../node_modules/.pnpm/vitepress@1.0.0-rc.40_patch_hash=vch4e6zq55wljc7ph3vsefnawq_@algolia+client-search@4.22.1_@ty_cpywouop5vln4rtagwwqvxuyge/node_modules/vitepress/dist/client/theme-default/components/VPNavScreenMenuLink.vue");
  return _sfc_setup$x ? _sfc_setup$x(props, ctx) : void 0;
};
const VPNavScreenMenuLink = /* @__PURE__ */ _export_sfc(_sfc_main$x, [["__scopeId", "data-v-6b8d67e8"]]);
const _sfc_main$w = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24"
  }, _attrs))}><path d="M18.9,10.9h-6v-6c0-0.6-0.4-1-1-1s-1,0.4-1,1v6h-6c-0.6,0-1,0.4-1,1s0.4,1,1,1h6v6c0,0.6,0.4,1,1,1s1-0.4,1-1v-6h6c0.6,0,1-0.4,1-1S19.5,10.9,18.9,10.9z"></path></svg>`);
}
const _sfc_setup$w = _sfc_main$w.setup;
_sfc_main$w.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../node_modules/.pnpm/vitepress@1.0.0-rc.40_patch_hash=vch4e6zq55wljc7ph3vsefnawq_@algolia+client-search@4.22.1_@ty_cpywouop5vln4rtagwwqvxuyge/node_modules/vitepress/dist/client/theme-default/components/icons/VPIconPlus.vue");
  return _sfc_setup$w ? _sfc_setup$w(props, ctx) : void 0;
};
const VPIconPlus = /* @__PURE__ */ _export_sfc(_sfc_main$w, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$v = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenMenuGroupLink",
  __ssrInlineRender: true,
  props: {
    item: {}
  },
  setup(__props) {
    const closeScreen = inject("close-screen");
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1f, mergeProps({
        class: "VPNavScreenMenuGroupLink",
        href: _ctx.item.link,
        target: _ctx.item.target,
        rel: _ctx.item.rel,
        onClick: unref(closeScreen)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.item.text)}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.item.text), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$v = _sfc_main$v.setup;
_sfc_main$v.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../node_modules/.pnpm/vitepress@1.0.0-rc.40_patch_hash=vch4e6zq55wljc7ph3vsefnawq_@algolia+client-search@4.22.1_@ty_cpywouop5vln4rtagwwqvxuyge/node_modules/vitepress/dist/client/theme-default/components/VPNavScreenMenuGroupLink.vue");
  return _sfc_setup$v ? _sfc_setup$v(props, ctx) : void 0;
};
const VPNavScreenMenuGroupLink = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["__scopeId", "data-v-f55cd657"]]);
const _sfc_main$u = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenMenuGroupSection",
  __ssrInlineRender: true,
  props: {
    text: {},
    items: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPNavScreenMenuGroupSection" }, _attrs))} data-v-1bb0380b>`);
      if (_ctx.text) {
        _push(`<p class="title" data-v-1bb0380b>${ssrInterpolate(_ctx.text)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList(_ctx.items, (item) => {
        _push(ssrRenderComponent(VPNavScreenMenuGroupLink, {
          key: item.text,
          item
        }, null, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$u = _sfc_main$u.setup;
_sfc_main$u.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../node_modules/.pnpm/vitepress@1.0.0-rc.40_patch_hash=vch4e6zq55wljc7ph3vsefnawq_@algolia+client-search@4.22.1_@ty_cpywouop5vln4rtagwwqvxuyge/node_modules/vitepress/dist/client/theme-default/components/VPNavScreenMenuGroupSection.vue");
  return _sfc_setup$u ? _sfc_setup$u(props, ctx) : void 0;
};
const VPNavScreenMenuGroupSection = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["__scopeId", "data-v-1bb0380b"]]);
const _sfc_main$t = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenMenuGroup",
  __ssrInlineRender: true,
  props: {
    text: {},
    items: {}
  },
  setup(__props) {
    const props = __props;
    const isOpen = ref(false);
    const groupId = computed(
      () => `NavScreenGroup-${props.text.replace(" ", "-").toLowerCase()}`
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["VPNavScreenMenuGroup", { open: isOpen.value }]
      }, _attrs))} data-v-d95f3187><button class="button"${ssrRenderAttr("aria-controls", groupId.value)}${ssrRenderAttr("aria-expanded", isOpen.value)} data-v-d95f3187><span class="button-text" data-v-d95f3187>${_ctx.text}</span>`);
      _push(ssrRenderComponent(VPIconPlus, { class: "button-icon" }, null, _parent));
      _push(`</button><div${ssrRenderAttr("id", groupId.value)} class="items" data-v-d95f3187><!--[-->`);
      ssrRenderList(_ctx.items, (item) => {
        _push(`<!--[-->`);
        if ("link" in item) {
          _push(`<div class="item" data-v-d95f3187>`);
          _push(ssrRenderComponent(VPNavScreenMenuGroupLink, { item }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<div class="group" data-v-d95f3187>`);
          _push(ssrRenderComponent(VPNavScreenMenuGroupSection, {
            text: item.text,
            items: item.items
          }, null, _parent));
          _push(`</div>`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup$t = _sfc_main$t.setup;
_sfc_main$t.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../node_modules/.pnpm/vitepress@1.0.0-rc.40_patch_hash=vch4e6zq55wljc7ph3vsefnawq_@algolia+client-search@4.22.1_@ty_cpywouop5vln4rtagwwqvxuyge/node_modules/vitepress/dist/client/theme-default/components/VPNavScreenMenuGroup.vue");
  return _sfc_setup$t ? _sfc_setup$t(props, ctx) : void 0;
};
const VPNavScreenMenuGroup = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["__scopeId", "data-v-d95f3187"]]);
const _sfc_main$s = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenMenu",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme: theme2 } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(theme2).nav) {
        _push(`<nav${ssrRenderAttrs(mergeProps({ class: "VPNavScreenMenu" }, _attrs))}><!--[-->`);
        ssrRenderList(unref(theme2).nav, (item) => {
          _push(`<!--[-->`);
          if ("link" in item) {
            _push(ssrRenderComponent(VPNavScreenMenuLink, { item }, null, _parent));
          } else {
            _push(ssrRenderComponent(VPNavScreenMenuGroup, {
              text: item.text || "",
              items: item.items
            }, null, _parent));
          }
          _push(`<!--]-->`);
        });
        _push(`<!--]--></nav>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$s = _sfc_main$s.setup;
_sfc_main$s.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../node_modules/.pnpm/vitepress@1.0.0-rc.40_patch_hash=vch4e6zq55wljc7ph3vsefnawq_@algolia+client-search@4.22.1_@ty_cpywouop5vln4rtagwwqvxuyge/node_modules/vitepress/dist/client/theme-default/components/VPNavScreenMenu.vue");
  return _sfc_setup$s ? _sfc_setup$s(props, ctx) : void 0;
};
const _sfc_main$r = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenSocialLinks",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme: theme2 } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(theme2).socialLinks) {
        _push(ssrRenderComponent(VPSocialLinks, mergeProps({
          class: "VPNavScreenSocialLinks",
          links: unref(theme2).socialLinks
        }, _attrs), null, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$r = _sfc_main$r.setup;
_sfc_main$r.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../node_modules/.pnpm/vitepress@1.0.0-rc.40_patch_hash=vch4e6zq55wljc7ph3vsefnawq_@algolia+client-search@4.22.1_@ty_cpywouop5vln4rtagwwqvxuyge/node_modules/vitepress/dist/client/theme-default/components/VPNavScreenSocialLinks.vue");
  return _sfc_setup$r ? _sfc_setup$r(props, ctx) : void 0;
};
const _sfc_main$q = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenTranslations",
  __ssrInlineRender: true,
  setup(__props) {
    const { localeLinks, currentLang } = useLangs({ correspondingLink: true });
    const isOpen = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(localeLinks).length && unref(currentLang).label) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: ["VPNavScreenTranslations", { open: isOpen.value }]
        }, _attrs))} data-v-8fc020bf><button class="title" data-v-8fc020bf>`);
        _push(ssrRenderComponent(VPIconLanguages, { class: "icon lang" }, null, _parent));
        _push(` ${ssrInterpolate(unref(currentLang).label)} `);
        _push(ssrRenderComponent(VPIconChevronDown, { class: "icon chevron" }, null, _parent));
        _push(`</button><ul class="list" data-v-8fc020bf><!--[-->`);
        ssrRenderList(unref(localeLinks), (locale) => {
          _push(`<li class="item" data-v-8fc020bf>`);
          _push(ssrRenderComponent(_sfc_main$1f, {
            class: "link",
            href: locale.link
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(locale.text)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(locale.text), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</li>`);
        });
        _push(`<!--]--></ul></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$q = _sfc_main$q.setup;
_sfc_main$q.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../node_modules/.pnpm/vitepress@1.0.0-rc.40_patch_hash=vch4e6zq55wljc7ph3vsefnawq_@algolia+client-search@4.22.1_@ty_cpywouop5vln4rtagwwqvxuyge/node_modules/vitepress/dist/client/theme-default/components/VPNavScreenTranslations.vue");
  return _sfc_setup$q ? _sfc_setup$q(props, ctx) : void 0;
};
const VPNavScreenTranslations = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["__scopeId", "data-v-8fc020bf"]]);
const _sfc_main$p = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreen",
  __ssrInlineRender: true,
  props: {
    open: { type: Boolean }
  },
  setup(__props) {
    const screen = ref(null);
    useScrollLock(inBrowser ? document.body : null);
    return (_ctx, _push, _parent, _attrs) => {
      if (_ctx.open) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: "VPNavScreen",
          ref_key: "screen",
          ref: screen,
          id: "VPNavScreen"
        }, _attrs))} data-v-39c31019><div class="container" data-v-39c31019>`);
        ssrRenderSlot(_ctx.$slots, "nav-screen-content-before", {}, null, _push, _parent);
        _push(ssrRenderComponent(_sfc_main$s, { class: "menu" }, null, _parent));
        _push(ssrRenderComponent(VPNavScreenTranslations, { class: "translations" }, null, _parent));
        _push(ssrRenderComponent(VPNavScreenAppearance, { class: "appearance" }, null, _parent));
        _push(ssrRenderComponent(_sfc_main$r, { class: "social-links" }, null, _parent));
        ssrRenderSlot(_ctx.$slots, "nav-screen-content-after", {}, null, _push, _parent);
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$p = _sfc_main$p.setup;
_sfc_main$p.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../node_modules/.pnpm/vitepress@1.0.0-rc.40_patch_hash=vch4e6zq55wljc7ph3vsefnawq_@algolia+client-search@4.22.1_@ty_cpywouop5vln4rtagwwqvxuyge/node_modules/vitepress/dist/client/theme-default/components/VPNavScreen.vue");
  return _sfc_setup$p ? _sfc_setup$p(props, ctx) : void 0;
};
const VPNavScreen = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["__scopeId", "data-v-39c31019"]]);
const _sfc_main$o = /* @__PURE__ */ defineComponent({
  __name: "VPNav",
  __ssrInlineRender: true,
  setup(__props) {
    const { isScreenOpen, closeScreen, toggleScreen } = useNav();
    const { frontmatter } = useData();
    const hasNavbar = computed(() => {
      return frontmatter.value.navbar !== false;
    });
    provide("close-screen", closeScreen);
    watchEffect(() => {
      if (inBrowser) {
        document.documentElement.classList.toggle("hide-nav", !hasNavbar.value);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (hasNavbar.value) {
        _push(`<header${ssrRenderAttrs(mergeProps({ class: "VPNav" }, _attrs))} data-v-e44cb7f2>`);
        _push(ssrRenderComponent(VPNavBar, {
          "is-screen-open": unref(isScreenOpen),
          onToggleScreen: unref(toggleScreen)
        }, {
          "nav-bar-title-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "nav-bar-title-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "nav-bar-title-before", {}, void 0, true)
              ];
            }
          }),
          "nav-bar-title-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "nav-bar-title-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "nav-bar-title-after", {}, void 0, true)
              ];
            }
          }),
          "nav-bar-content-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "nav-bar-content-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "nav-bar-content-before", {}, void 0, true)
              ];
            }
          }),
          "nav-bar-content-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "nav-bar-content-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "nav-bar-content-after", {}, void 0, true)
              ];
            }
          }),
          _: 3
        }, _parent));
        _push(ssrRenderComponent(VPNavScreen, { open: unref(isScreenOpen) }, {
          "nav-screen-content-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "nav-screen-content-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "nav-screen-content-before", {}, void 0, true)
              ];
            }
          }),
          "nav-screen-content-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "nav-screen-content-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "nav-screen-content-after", {}, void 0, true)
              ];
            }
          }),
          _: 3
        }, _parent));
        _push(`</header>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$o = _sfc_main$o.setup;
_sfc_main$o.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../node_modules/.pnpm/vitepress@1.0.0-rc.40_patch_hash=vch4e6zq55wljc7ph3vsefnawq_@algolia+client-search@4.22.1_@ty_cpywouop5vln4rtagwwqvxuyge/node_modules/vitepress/dist/client/theme-default/components/VPNav.vue");
  return _sfc_setup$o ? _sfc_setup$o(props, ctx) : void 0;
};
const VPNav = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["__scopeId", "data-v-e44cb7f2"]]);
const _sfc_main$n = /* @__PURE__ */ defineComponent({
  __name: "VPSidebarItem",
  __ssrInlineRender: true,
  props: {
    item: {},
    depth: {}
  },
  setup(__props) {
    const props = __props;
    const {
      collapsed,
      collapsible,
      isLink,
      isActiveLink,
      hasActiveLink: hasActiveLink2,
      hasChildren,
      toggle
    } = useSidebarControl(computed(() => props.item));
    const sectionTag = computed(() => hasChildren.value ? "section" : `div`);
    const linkTag = computed(() => isLink.value ? "a" : "div");
    const textTag = computed(() => {
      return !hasChildren.value ? "p" : props.depth + 2 === 7 ? "p" : `h${props.depth + 2}`;
    });
    const itemRole = computed(() => isLink.value ? void 0 : "button");
    const classes = computed(() => [
      [`level-${props.depth}`],
      { collapsible: collapsible.value },
      { collapsed: collapsed.value },
      { "is-link": isLink.value },
      { "is-active": isActiveLink.value },
      { "has-active": hasActiveLink2.value }
    ]);
    function onItemInteraction(e) {
      if ("key" in e && e.key !== "Enter") {
        return;
      }
      !props.item.link && toggle();
    }
    function onCaretClick() {
      props.item.link && toggle();
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VPSidebarItem = resolveComponent("VPSidebarItem", true);
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(sectionTag.value), mergeProps({
        class: ["VPSidebarItem", classes.value]
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (_ctx.item.text) {
              _push2(`<div class="item"${ssrRenderAttr("role", itemRole.value)}${ssrRenderAttr("tabindex", _ctx.item.items && 0)} data-v-b30b1d52${_scopeId}><div class="indicator" data-v-b30b1d52${_scopeId}></div>`);
              if (_ctx.item.link) {
                _push2(ssrRenderComponent(_sfc_main$1f, {
                  tag: linkTag.value,
                  class: "link",
                  href: _ctx.item.link,
                  rel: _ctx.item.rel,
                  target: _ctx.item.target
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      ssrRenderVNode(_push3, createVNode(resolveDynamicComponent(textTag.value), { class: "text" }, null), _parent3, _scopeId2);
                    } else {
                      return [
                        (openBlock(), createBlock(resolveDynamicComponent(textTag.value), {
                          class: "text",
                          innerHTML: _ctx.item.text
                        }, null, 8, ["innerHTML"]))
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(textTag.value), { class: "text" }, null), _parent2, _scopeId);
              }
              if (_ctx.item.collapsed != null) {
                _push2(`<div class="caret" role="button" aria-label="toggle section" tabindex="0" data-v-b30b1d52${_scopeId}>`);
                _push2(ssrRenderComponent(VPIconChevronRight, { class: "caret-icon" }, null, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.item.items && _ctx.item.items.length) {
              _push2(`<div class="items" data-v-b30b1d52${_scopeId}>`);
              if (_ctx.depth < 5) {
                _push2(`<!--[-->`);
                ssrRenderList(_ctx.item.items, (i) => {
                  _push2(ssrRenderComponent(_component_VPSidebarItem, {
                    key: i.text,
                    item: i,
                    depth: _ctx.depth + 1
                  }, null, _parent2, _scopeId));
                });
                _push2(`<!--]-->`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              _ctx.item.text ? (openBlock(), createBlock("div", mergeProps({
                key: 0,
                class: "item",
                role: itemRole.value
              }, toHandlers(
                _ctx.item.items ? { click: onItemInteraction, keydown: onItemInteraction } : {},
                true
              ), {
                tabindex: _ctx.item.items && 0
              }), [
                createVNode("div", { class: "indicator" }),
                _ctx.item.link ? (openBlock(), createBlock(_sfc_main$1f, {
                  key: 0,
                  tag: linkTag.value,
                  class: "link",
                  href: _ctx.item.link,
                  rel: _ctx.item.rel,
                  target: _ctx.item.target
                }, {
                  default: withCtx(() => [
                    (openBlock(), createBlock(resolveDynamicComponent(textTag.value), {
                      class: "text",
                      innerHTML: _ctx.item.text
                    }, null, 8, ["innerHTML"]))
                  ]),
                  _: 1
                }, 8, ["tag", "href", "rel", "target"])) : (openBlock(), createBlock(resolveDynamicComponent(textTag.value), {
                  key: 1,
                  class: "text",
                  innerHTML: _ctx.item.text
                }, null, 8, ["innerHTML"])),
                _ctx.item.collapsed != null ? (openBlock(), createBlock("div", {
                  key: 2,
                  class: "caret",
                  role: "button",
                  "aria-label": "toggle section",
                  onClick: onCaretClick,
                  onKeydown: withKeys(onCaretClick, ["enter"]),
                  tabindex: "0"
                }, [
                  createVNode(VPIconChevronRight, { class: "caret-icon" })
                ], 32)) : createCommentVNode("", true)
              ], 16, ["role", "tabindex"])) : createCommentVNode("", true),
              _ctx.item.items && _ctx.item.items.length ? (openBlock(), createBlock("div", {
                key: 1,
                class: "items"
              }, [
                _ctx.depth < 5 ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(_ctx.item.items, (i) => {
                  return openBlock(), createBlock(_component_VPSidebarItem, {
                    key: i.text,
                    item: i,
                    depth: _ctx.depth + 1
                  }, null, 8, ["item", "depth"]);
                }), 128)) : createCommentVNode("", true)
              ])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }), _parent);
    };
  }
});
const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../node_modules/.pnpm/vitepress@1.0.0-rc.40_patch_hash=vch4e6zq55wljc7ph3vsefnawq_@algolia+client-search@4.22.1_@ty_cpywouop5vln4rtagwwqvxuyge/node_modules/vitepress/dist/client/theme-default/components/VPSidebarItem.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};
const VPSidebarItem = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["__scopeId", "data-v-b30b1d52"]]);
const _sfc_main$m = /* @__PURE__ */ defineComponent({
  __name: "VPSidebar",
  __ssrInlineRender: true,
  props: {
    open: { type: Boolean }
  },
  setup(__props) {
    const { sidebarGroups, hasSidebar } = useSidebar();
    const props = __props;
    const navEl = ref(null);
    const isLocked = useScrollLock(inBrowser ? document.body : null);
    watch(
      [props, navEl],
      () => {
        var _a;
        if (props.open) {
          isLocked.value = true;
          (_a = navEl.value) == null ? void 0 : _a.focus();
        } else
          isLocked.value = false;
      },
      { immediate: true, flush: "post" }
    );
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(hasSidebar)) {
        _push(`<aside${ssrRenderAttrs(mergeProps({
          class: ["VPSidebar", { open: _ctx.open }],
          ref_key: "navEl",
          ref: navEl
        }, _attrs))} data-v-7bd6217c><div class="curtain" data-v-7bd6217c></div><nav class="nav" id="VPSidebarNav" aria-labelledby="sidebar-aria-label" tabindex="-1" data-v-7bd6217c><span class="visually-hidden" id="sidebar-aria-label" data-v-7bd6217c> Sidebar Navigation </span>`);
        ssrRenderSlot(_ctx.$slots, "sidebar-nav-before", {}, null, _push, _parent);
        _push(`<!--[-->`);
        ssrRenderList(unref(sidebarGroups), (item) => {
          _push(`<div class="group" data-v-7bd6217c>`);
          _push(ssrRenderComponent(VPSidebarItem, {
            item,
            depth: 0
          }, null, _parent));
          _push(`</div>`);
        });
        _push(`<!--]-->`);
        ssrRenderSlot(_ctx.$slots, "sidebar-nav-after", {}, null, _push, _parent);
        _push(`</nav></aside>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../node_modules/.pnpm/vitepress@1.0.0-rc.40_patch_hash=vch4e6zq55wljc7ph3vsefnawq_@algolia+client-search@4.22.1_@ty_cpywouop5vln4rtagwwqvxuyge/node_modules/vitepress/dist/client/theme-default/components/VPSidebar.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
const VPSidebar = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["__scopeId", "data-v-7bd6217c"]]);
const _sfc_main$l = /* @__PURE__ */ defineComponent({
  __name: "VPSkipLink",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const backToTop = ref();
    watch(() => route.path, () => backToTop.value.focus());
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><span tabindex="-1" data-v-fa3f2cc3></span><a href="#VPContent" class="VPSkipLink visually-hidden" data-v-fa3f2cc3> Skip to content </a><!--]-->`);
    };
  }
});
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../node_modules/.pnpm/vitepress@1.0.0-rc.40_patch_hash=vch4e6zq55wljc7ph3vsefnawq_@algolia+client-search@4.22.1_@ty_cpywouop5vln4rtagwwqvxuyge/node_modules/vitepress/dist/client/theme-default/components/VPSkipLink.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
const VPSkipLink = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["__scopeId", "data-v-fa3f2cc3"]]);
const _sfc_main$k = /* @__PURE__ */ defineComponent({
  __name: "Layout",
  __ssrInlineRender: true,
  setup(__props) {
    const {
      isOpen: isSidebarOpen,
      open: openSidebar,
      close: closeSidebar
    } = useSidebar();
    const route = useRoute();
    watch(() => route.path, closeSidebar);
    useCloseSidebarOnEscape(isSidebarOpen, closeSidebar);
    const { frontmatter } = useData();
    const slots = useSlots();
    const heroImageSlotExists = computed(() => !!slots["home-hero-image"]);
    provide("hero-image-slot-exists", heroImageSlotExists);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Content = resolveComponent("Content");
      if (unref(frontmatter).layout !== false) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: ["Layout", unref(frontmatter).pageClass]
        }, _attrs))} data-v-2ee7668e>`);
        ssrRenderSlot(_ctx.$slots, "layout-top", {}, null, _push, _parent);
        _push(ssrRenderComponent(VPSkipLink, null, null, _parent));
        _push(ssrRenderComponent(VPBackdrop, {
          class: "backdrop",
          show: unref(isSidebarOpen),
          onClick: unref(closeSidebar)
        }, null, _parent));
        _push(ssrRenderComponent(VPNav, null, {
          "nav-bar-title-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "nav-bar-title-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "nav-bar-title-before", {}, void 0, true)
              ];
            }
          }),
          "nav-bar-title-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "nav-bar-title-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "nav-bar-title-after", {}, void 0, true)
              ];
            }
          }),
          "nav-bar-content-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "nav-bar-content-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "nav-bar-content-before", {}, void 0, true)
              ];
            }
          }),
          "nav-bar-content-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "nav-bar-content-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "nav-bar-content-after", {}, void 0, true)
              ];
            }
          }),
          "nav-screen-content-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "nav-screen-content-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "nav-screen-content-before", {}, void 0, true)
              ];
            }
          }),
          "nav-screen-content-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "nav-screen-content-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "nav-screen-content-after", {}, void 0, true)
              ];
            }
          }),
          _: 3
        }, _parent));
        _push(ssrRenderComponent(VPLocalNav, {
          open: unref(isSidebarOpen),
          onOpenMenu: unref(openSidebar)
        }, null, _parent));
        _push(ssrRenderComponent(VPSidebar, { open: unref(isSidebarOpen) }, {
          "sidebar-nav-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "sidebar-nav-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "sidebar-nav-before", {}, void 0, true)
              ];
            }
          }),
          "sidebar-nav-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "sidebar-nav-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "sidebar-nav-after", {}, void 0, true)
              ];
            }
          }),
          _: 3
        }, _parent));
        _push(ssrRenderComponent(VPContent, null, {
          "page-top": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "page-top", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "page-top", {}, void 0, true)
              ];
            }
          }),
          "page-bottom": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "page-bottom", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "page-bottom", {}, void 0, true)
              ];
            }
          }),
          "not-found": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "not-found", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "not-found", {}, void 0, true)
              ];
            }
          }),
          "home-hero-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-hero-before", {}, void 0, true)
              ];
            }
          }),
          "home-hero-prelink": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-prelink", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-hero-prelink", {}, void 0, true)
              ];
            }
          }),
          "home-hero-info": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-info", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-hero-info", {}, void 0, true)
              ];
            }
          }),
          "home-hero-image": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-image", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-hero-image", {}, void 0, true)
              ];
            }
          }),
          "home-hero-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-hero-after", {}, void 0, true)
              ];
            }
          }),
          "home-features-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-features-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-features-before", {}, void 0, true)
              ];
            }
          }),
          "home-features-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-features-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-features-after", {}, void 0, true)
              ];
            }
          }),
          "doc-footer-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "doc-footer-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "doc-footer-before", {}, void 0, true)
              ];
            }
          }),
          "doc-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "doc-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "doc-before", {}, void 0, true)
              ];
            }
          }),
          "doc-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "doc-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "doc-after", {}, void 0, true)
              ];
            }
          }),
          "doc-top": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "doc-top", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "doc-top", {}, void 0, true)
              ];
            }
          }),
          "doc-bottom": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "doc-bottom", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "doc-bottom", {}, void 0, true)
              ];
            }
          }),
          "aside-top": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-top", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-top", {}, void 0, true)
              ];
            }
          }),
          "aside-bottom": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-bottom", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-bottom", {}, void 0, true)
              ];
            }
          }),
          "aside-outline-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-outline-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-outline-before", {}, void 0, true)
              ];
            }
          }),
          "aside-outline-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-outline-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-outline-after", {}, void 0, true)
              ];
            }
          }),
          "aside-ads-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-ads-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-ads-before", {}, void 0, true)
              ];
            }
          }),
          "aside-ads-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-ads-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-ads-after", {}, void 0, true)
              ];
            }
          }),
          _: 3
        }, _parent));
        _push(ssrRenderComponent(VPFooter, null, null, _parent));
        ssrRenderSlot(_ctx.$slots, "layout-bottom", {}, null, _push, _parent);
        _push(`</div>`);
      } else {
        _push(ssrRenderComponent(_component_Content, _attrs, null, _parent));
      }
    };
  }
});
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../node_modules/.pnpm/vitepress@1.0.0-rc.40_patch_hash=vch4e6zq55wljc7ph3vsefnawq_@algolia+client-search@4.22.1_@ty_cpywouop5vln4rtagwwqvxuyge/node_modules/vitepress/dist/client/theme-default/Layout.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
const Layout = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["__scopeId", "data-v-2ee7668e"]]);
const _sfc_main$j = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, _attrs))}><path d="M12,22.2c-0.3,0-0.5-0.1-0.7-0.3l-8.8-8.8c-2.5-2.5-2.5-6.7,0-9.2c2.5-2.5,6.7-2.5,9.2,0L12,4.3l0.4-0.4c0,0,0,0,0,0C13.6,2.7,15.2,2,16.9,2c0,0,0,0,0,0c1.7,0,3.4,0.7,4.6,1.9l0,0c1.2,1.2,1.9,2.9,1.9,4.6c0,1.7-0.7,3.4-1.9,4.6l-8.8,8.8C12.5,22.1,12.3,22.2,12,22.2zM7,4C5.9,4,4.7,4.4,3.9,5.3c-1.8,1.8-1.8,4.6,0,6.4l8.1,8.1l8.1-8.1c0.9-0.9,1.3-2,1.3-3.2c0-1.2-0.5-2.3-1.3-3.2l0,0C19.3,4.5,18.2,4,17,4c0,0,0,0,0,0c-1.2,0-2.3,0.5-3.2,1.3c0,0,0,0,0,0l-1.1,1.1c-0.4,0.4-1,0.4-1.4,0l-1.1-1.1C9.4,4.4,8.2,4,7,4z"></path></svg>`);
}
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../node_modules/.pnpm/vitepress@1.0.0-rc.40_patch_hash=vch4e6zq55wljc7ph3vsefnawq_@algolia+client-search@4.22.1_@ty_cpywouop5vln4rtagwwqvxuyge/node_modules/vitepress/dist/client/theme-default/components/icons/VPIconHeart.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const VPIconHeart = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["ssrRender", _sfc_ssrRender]]);
const GridSettings = {
  xmini: [[0, 2]],
  mini: [],
  small: [
    [920, 6],
    [768, 5],
    [640, 4],
    [480, 3],
    [0, 2]
  ],
  medium: [
    [960, 5],
    [832, 4],
    [640, 3],
    [480, 2]
  ],
  big: [
    [832, 3],
    [640, 2]
  ]
};
function useSponsorsGrid({ el, size = "medium" }) {
  const onResize = throttleAndDebounce(manage, 100);
  onMounted(() => {
    manage();
    window.addEventListener("resize", onResize);
  });
  onUnmounted(() => {
    window.removeEventListener("resize", onResize);
  });
  function manage() {
    adjustSlots(el.value, size);
  }
}
function adjustSlots(el, size) {
  const tsize = el.children.length;
  const asize = el.querySelectorAll(".vp-sponsor-grid-item:not(.empty)").length;
  const grid = setGrid(el, size, asize);
  manageSlots(el, grid, tsize, asize);
}
function setGrid(el, size, items) {
  const settings = GridSettings[size];
  const screen = window.innerWidth;
  let grid = 1;
  settings.some(([breakpoint, value]) => {
    if (screen >= breakpoint) {
      grid = items < value ? items : value;
      return true;
    }
  });
  setGridData(el, grid);
  return grid;
}
function setGridData(el, value) {
  el.dataset.vpGrid = String(value);
}
function manageSlots(el, grid, tsize, asize) {
  const diff = tsize - asize;
  const rem = asize % grid;
  const drem = rem === 0 ? rem : grid - rem;
  neutralizeSlots(el, drem - diff);
}
function neutralizeSlots(el, count) {
  if (count === 0) {
    return;
  }
  count > 0 ? addSlots(el, count) : removeSlots(el, count * -1);
}
function addSlots(el, count) {
  for (let i = 0; i < count; i++) {
    const slot = document.createElement("div");
    slot.classList.add("vp-sponsor-grid-item", "empty");
    el.append(slot);
  }
}
function removeSlots(el, count) {
  for (let i = 0; i < count; i++) {
    el.removeChild(el.lastElementChild);
  }
}
const _sfc_main$i = /* @__PURE__ */ defineComponent({
  __name: "VPSponsorsGrid",
  __ssrInlineRender: true,
  props: {
    size: { default: "medium" },
    data: {}
  },
  setup(__props) {
    const props = __props;
    const el = ref(null);
    useSponsorsGrid({ el, size: props.size });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["VPSponsorsGrid vp-sponsor-grid", [_ctx.size]],
        ref_key: "el",
        ref: el
      }, _attrs))}><!--[-->`);
      ssrRenderList(_ctx.data, (sponsor) => {
        _push(`<div class="vp-sponsor-grid-item"><a class="vp-sponsor-grid-link"${ssrRenderAttr("href", sponsor.url)} target="_blank" rel="sponsored noopener"><article class="vp-sponsor-grid-box"><h4 class="visually-hidden">${ssrInterpolate(sponsor.name)}</h4><img class="vp-sponsor-grid-image"${ssrRenderAttr("src", sponsor.img)}${ssrRenderAttr("alt", sponsor.name)}></article></a></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../node_modules/.pnpm/vitepress@1.0.0-rc.40_patch_hash=vch4e6zq55wljc7ph3vsefnawq_@algolia+client-search@4.22.1_@ty_cpywouop5vln4rtagwwqvxuyge/node_modules/vitepress/dist/client/theme-default/components/VPSponsorsGrid.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const _sfc_main$h = /* @__PURE__ */ defineComponent({
  __name: "VPSponsors",
  __ssrInlineRender: true,
  props: {
    mode: { default: "normal" },
    tier: {},
    size: {},
    data: {}
  },
  setup(__props) {
    const props = __props;
    const sponsors = computed(() => {
      const isSponsors = props.data.some((s) => {
        return "items" in s;
      });
      if (isSponsors) {
        return props.data;
      }
      return [
        { tier: props.tier, size: props.size, items: props.data }
      ];
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["VPSponsors vp-sponsor", [_ctx.mode]]
      }, _attrs))}><!--[-->`);
      ssrRenderList(sponsors.value, (sponsor, index) => {
        _push(`<section class="vp-sponsor-section">`);
        if (sponsor.tier) {
          _push(`<h3 class="vp-sponsor-tier">${ssrInterpolate(sponsor.tier)}</h3>`);
        } else {
          _push(`<!---->`);
        }
        _push(ssrRenderComponent(_sfc_main$i, {
          size: sponsor.size,
          data: sponsor.items
        }, null, _parent));
        _push(`</section>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../node_modules/.pnpm/vitepress@1.0.0-rc.40_patch_hash=vch4e6zq55wljc7ph3vsefnawq_@algolia+client-search@4.22.1_@ty_cpywouop5vln4rtagwwqvxuyge/node_modules/vitepress/dist/client/theme-default/components/VPSponsors.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  __name: "VPHomeSponsors",
  __ssrInlineRender: true,
  props: {
    message: {},
    actionText: { default: "Become a sponsor" },
    actionLink: {},
    data: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "VPHomeSponsors" }, _attrs))} data-v-880b51a5><div class="container" data-v-880b51a5><div class="header" data-v-880b51a5><div class="love" data-v-880b51a5>`);
      _push(ssrRenderComponent(VPIconHeart, { class: "icon" }, null, _parent));
      _push(`</div>`);
      if (_ctx.message) {
        _push(`<h2 class="message" data-v-880b51a5>${ssrInterpolate(_ctx.message)}</h2>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="sponsors" data-v-880b51a5>`);
      _push(ssrRenderComponent(_sfc_main$h, { data: _ctx.data }, null, _parent));
      _push(`</div>`);
      if (_ctx.actionLink) {
        _push(`<div class="action" data-v-880b51a5>`);
        _push(ssrRenderComponent(VPButton, {
          theme: "sponsor",
          text: _ctx.actionText,
          href: _ctx.actionLink
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></section>`);
    };
  }
});
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../node_modules/.pnpm/vitepress@1.0.0-rc.40_patch_hash=vch4e6zq55wljc7ph3vsefnawq_@algolia+client-search@4.22.1_@ty_cpywouop5vln4rtagwwqvxuyge/node_modules/vitepress/dist/client/theme-default/components/VPHomeSponsors.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "VPDocAsideSponsors",
  __ssrInlineRender: true,
  props: {
    tier: {},
    size: {},
    data: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPDocAsideSponsors" }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$h, {
        mode: "aside",
        tier: _ctx.tier,
        size: _ctx.size,
        data: _ctx.data
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../node_modules/.pnpm/vitepress@1.0.0-rc.40_patch_hash=vch4e6zq55wljc7ph3vsefnawq_@algolia+client-search@4.22.1_@ty_cpywouop5vln4rtagwwqvxuyge/node_modules/vitepress/dist/client/theme-default/components/VPDocAsideSponsors.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const _sfc_main$e = {};
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../node_modules/.pnpm/vitepress@1.0.0-rc.40_patch_hash=vch4e6zq55wljc7ph3vsefnawq_@algolia+client-search@4.22.1_@ty_cpywouop5vln4rtagwwqvxuyge/node_modules/vitepress/dist/client/theme-default/components/VPTeamPage.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const _sfc_main$d = {};
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../node_modules/.pnpm/vitepress@1.0.0-rc.40_patch_hash=vch4e6zq55wljc7ph3vsefnawq_@algolia+client-search@4.22.1_@ty_cpywouop5vln4rtagwwqvxuyge/node_modules/vitepress/dist/client/theme-default/components/VPTeamPageTitle.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const _sfc_main$c = {};
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../node_modules/.pnpm/vitepress@1.0.0-rc.40_patch_hash=vch4e6zq55wljc7ph3vsefnawq_@algolia+client-search@4.22.1_@ty_cpywouop5vln4rtagwwqvxuyge/node_modules/vitepress/dist/client/theme-default/components/VPTeamPageSection.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "VPTeamMembersItem",
  __ssrInlineRender: true,
  props: {
    size: { default: "medium" },
    member: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<article${ssrRenderAttrs(mergeProps({
        class: ["VPTeamMembersItem", [_ctx.size]]
      }, _attrs))} data-v-9cecede0><div class="profile" data-v-9cecede0><figure class="avatar" data-v-9cecede0><img class="avatar-img"${ssrRenderAttr("src", _ctx.member.avatar)}${ssrRenderAttr("alt", _ctx.member.name)} data-v-9cecede0></figure><div class="data" data-v-9cecede0><h1 class="name" data-v-9cecede0>${ssrInterpolate(_ctx.member.name)}</h1>`);
      if (_ctx.member.title || _ctx.member.org) {
        _push(`<p class="affiliation" data-v-9cecede0>`);
        if (_ctx.member.title) {
          _push(`<span class="title" data-v-9cecede0>${ssrInterpolate(_ctx.member.title)}</span>`);
        } else {
          _push(`<!---->`);
        }
        if (_ctx.member.title && _ctx.member.org) {
          _push(`<span class="at" data-v-9cecede0> @ </span>`);
        } else {
          _push(`<!---->`);
        }
        if (_ctx.member.org) {
          _push(ssrRenderComponent(_sfc_main$1f, {
            class: ["org", { link: _ctx.member.orgLink }],
            href: _ctx.member.orgLink,
            "no-icon": ""
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(_ctx.member.org)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(_ctx.member.org), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</p>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.member.desc) {
        _push(`<p class="desc" data-v-9cecede0>${_ctx.member.desc}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.member.links) {
        _push(`<div class="links" data-v-9cecede0>`);
        _push(ssrRenderComponent(VPSocialLinks, {
          links: _ctx.member.links
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
      if (_ctx.member.sponsor) {
        _push(`<div class="sp" data-v-9cecede0>`);
        _push(ssrRenderComponent(_sfc_main$1f, {
          class: "sp-link",
          href: _ctx.member.sponsor,
          "no-icon": ""
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(VPIconHeart, { class: "sp-icon" }, null, _parent2, _scopeId));
              _push2(` ${ssrInterpolate(_ctx.member.actionText || "Sponsor")}`);
            } else {
              return [
                createVNode(VPIconHeart, { class: "sp-icon" }),
                createTextVNode(" " + toDisplayString(_ctx.member.actionText || "Sponsor"), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</article>`);
    };
  }
});
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../node_modules/.pnpm/vitepress@1.0.0-rc.40_patch_hash=vch4e6zq55wljc7ph3vsefnawq_@algolia+client-search@4.22.1_@ty_cpywouop5vln4rtagwwqvxuyge/node_modules/vitepress/dist/client/theme-default/components/VPTeamMembersItem.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const VPTeamMembersItem = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__scopeId", "data-v-9cecede0"]]);
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "VPTeamMembers",
  __ssrInlineRender: true,
  props: {
    size: { default: "medium" },
    members: {}
  },
  setup(__props) {
    const props = __props;
    const classes = computed(() => [props.size, `count-${props.members.length}`]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["VPTeamMembers", classes.value]
      }, _attrs))} data-v-b379fe1b><div class="container" data-v-b379fe1b><!--[-->`);
      ssrRenderList(_ctx.members, (member) => {
        _push(`<div class="item" data-v-b379fe1b>`);
        _push(ssrRenderComponent(VPTeamMembersItem, {
          size: _ctx.size,
          member
        }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../node_modules/.pnpm/vitepress@1.0.0-rc.40_patch_hash=vch4e6zq55wljc7ph3vsefnawq_@algolia+client-search@4.22.1_@ty_cpywouop5vln4rtagwwqvxuyge/node_modules/vitepress/dist/client/theme-default/components/VPTeamMembers.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const VPTeamMembers = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-b379fe1b"]]);
const theme = {
  Layout,
  enhanceApp: ({ app }) => {
    app.component("Badge", _sfc_main$1n);
  }
};
const contributorNames = [
  "zernonia",
  "khairulhaaziq",
  "MellKam",
  "mujahidfa",
  "onmax",
  "Scrum",
  "BayBreezy",
  "kdnk",
  "mukundshah",
  "sadeghbarati",
  "npldevfr",
  "uyloal",
  "teleskop150750",
  "DamianGlowala",
  "enkot",
  "madebyfabian",
  "libondev",
  "misbahansori",
  "YunYouJun",
  "maltoze",
  "lennartzellmer",
  "hoonweiting",
  "owlnai",
  "tristandubbeld",
  "sdq-sts",
  "runyasak",
  "rsoltanzadeh",
  "Scalamando",
  "oaleynik",
  "steakscience",
  "messenjer",
  "94726",
  "pkrinesh",
  "kn0wn",
  "Jordan-Ellis",
  "lepture",
  "glennlaysonjr",
  "edtorba",
  "DennisSmuda",
  "D-Lite",
  "CapitaineToinon",
  "sanscheese",
  "andreww2012",
  "aboubakrbm"
];
const contributorsAvatars = {};
function getAvatarUrl(name) {
  return `https://github.com/${name}.png`;
}
const contributors = contributorNames.reduce((acc, name) => {
  contributorsAvatars[name] = getAvatarUrl(name);
  acc.push({ name, avatar: contributorsAvatars[name] });
  return acc;
}, []);
function createLinks(tm) {
  tm.links = [{ icon: "github", link: `https://github.com/${tm.github}` }];
  if (tm.mastodon)
    tm.links.push({ icon: "mastodon", link: tm.mastodon });
  if (tm.discord)
    tm.links.push({ icon: "discord", link: tm.discord });
  if (tm.youtube)
    tm.links.push({ icon: "youtube", link: `https://www.youtube.com/@${tm.youtube}` });
  if (tm.twitter)
    tm.links.push({ icon: "twitter", link: `https://twitter.com/${tm.twitter}` });
  return tm;
}
const plainTeamMembers = [
  {
    avatar: contributorsAvatars.zernonia,
    name: "Zernonia",
    github: "zernonia",
    twitter: "zernonia",
    desc: "Core team member of Radix Vue",
    sponsor: "https://github.com/sponsors/zernonia"
  },
  {
    avatar: contributorsAvatars.khairulhaaziq,
    name: "Khairul Haaziq",
    github: "khairulhaaziq",
    twitter: "khairulhaaziq",
    desc: "Core team member of Radix Vue"
  },
  {
    avatar: contributorsAvatars.mujahidfa,
    name: "Mujahid Anuar",
    github: "mujahidfa",
    twitter: "mujahid_fa",
    desc: "Core team member of Radix Vue"
  },
  {
    avatar: contributorsAvatars.onmax,
    name: "Max",
    github: "onmax",
    twitter: "iam_mad_max",
    desc: "Core team member of Radix Vue"
  }
];
const teamMembers = plainTeamMembers.map((tm) => createLinks(tm));
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "Contributors",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-wrap gap-2 justify-center" }, _attrs))}><!--[-->`);
      ssrRenderList(unref(contributors), ({ name, avatar }) => {
        _push(`<a${ssrRenderAttr("href", `https://github.com/${name}`)} class="m-0" rel="noopener noreferrer"${ssrRenderAttr("aria-label", `${name} on GitHub`)}><img loading="lazy"${ssrRenderAttr("src", avatar)} width="50" height="50" class="rounded-full h-12 w-12"${ssrRenderAttr("alt", `${name}'s avatar`)}></a>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../.vitepress/components/Contributors.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "HomePage",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "content px-6 sm:px-[48px] lg:px-[64px]" }, _attrs))}><div class="mx-auto w-full container max-w-[1152px]"><main class="w-full"><div class="vp-doc flex flex-col items-center mt-10"><h2 id="meet-the-team" class="opacity-50 font-medium pt-10 pb-2"> Meet The Team </h2><div class="w-full">`);
      _push(ssrRenderComponent(unref(VPTeamMembers), {
        size: "small",
        members: unref(teamMembers)
      }, null, _parent));
      _push(`</div><h2 id="the-team" class="op50 font-medium pt-5 pb-2"> Contributors </h2><p class="text-lg max-w-200 text-center leading-7">`);
      _push(ssrRenderComponent(_sfc_main$9, null, null, _parent));
      _push(`<br><a href="https://chat.radix-vue.com" rel="noopener noreferrer">Join the community</a> and get involved! </p></div></main></div></div>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../.vitepress/components/HomePage.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "HomePageDemo",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-12 md:mt-24 content px-6 sm:px-[48px] lg:px-[64px]" }, _attrs))}><div class="mx-auto w-full container max-w-[1152px]">`);
      _push(ssrRenderComponent(_sfc_main$1I, { class: "grid w-auto lg:grid-cols-2 gap-6 md:gap-12 lg:gap-6" }, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../.vitepress/components/HomePageDemo.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "Annoucement",
  __ssrInlineRender: true,
  setup(__props) {
    const { frontmatter: fm } = useData$1();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(fm).hero.prelink) {
        _push(`<a${ssrRenderAttrs(mergeProps({
          href: unref(fm).hero.prelink.link,
          target: unref(fm).hero.prelink.target,
          class: "inline-flex items-center rounded-lg bg-[var(--vp-c-default-soft)] px-4 py-1 text-sm font-semibold mb-3"
        }, _attrs))}>${ssrInterpolate(unref(fm).hero.prelink.title)}</a>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../.vitepress/components/Annoucement.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "EmbedIframe",
  __ssrInlineRender: true,
  props: {
    src: {}
  },
  setup(__props) {
    const isMounted = ref(false);
    onMounted(() => {
      isMounted.value = true;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(mu), _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<iframe${ssrRenderAttrs(mergeProps({
              src: _ctx.src,
              class: "w-full h-full"
            }, _ctx.$attrs))}${_scopeId}></iframe>`);
          } else {
            return [
              createVNode("iframe", mergeProps({
                src: _ctx.src,
                class: "w-full h-full"
              }, _ctx.$attrs), null, 16, ["src"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../.vitepress/components/EmbedIframe.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "NewHeroContainer",
  __ssrInlineRender: true,
  props: {
    overflow: { type: Boolean },
    folder: { default: "" },
    files: { default: () => [] },
    cssFramework: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative text-[15px] text-black" }, _attrs))} data-v-3884a922><div class="${ssrRenderClass([{ "overflow-x-auto": _ctx.overflow }, "vp-raw bg-gradient-to-br p-4 rounded-t-lg from-teal9 to-green9 w-full relative items-center justify-center flex"])}" data-v-3884a922><div class="w-full max-w-[700px] flex items-center py-12 sm:py-[100px] custom-justify-center" data-v-3884a922>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      if (_ctx.folder) {
        _push(ssrRenderComponent(_sfc_main$2f, {
          key: _ctx.cssFramework,
          class: "hidden sm:block absolute bottom-4 right-4",
          name: _ctx.folder,
          files: _ctx.files
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (_ctx.folder) {
        _push(ssrRenderComponent(_sfc_main$2g, {
          key: _ctx.cssFramework,
          class: "hidden sm:block absolute bottom-4 right-12",
          name: _ctx.folder,
          files: _ctx.files
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
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../.vitepress/components/NewHeroContainer.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const HeroContainer = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-3884a922"]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "NewHeroCodeGroup",
  __ssrInlineRender: true,
  props: {
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const cssFramework = useVModel(props, "modelValue", emits);
    const slots = useSlots();
    const slotsFramework = computed(() => {
      var _a;
      return ((_a = slots.default) == null ? void 0 : _a.call(slots).map((slot) => {
        var _a2, _b, _c2;
        return (_c2 = (_b = (_a2 = slot.props) == null ? void 0 : _a2.key) == null ? void 0 : _b.toString()) == null ? void 0 : _c2.replace("_", "");
      })) ?? [];
    });
    const cssFrameworkOptions = computed(() => [
      { label: "TailwindCSS", value: "tailwind" },
      { label: "CSS", value: "css" },
      { label: "Pinceau", value: "pinceau" }
    ].filter((i) => slotsFramework.value.includes(i.value)));
    const tabs = computed(
      () => {
        var _a;
        const currentFramework = (_a = slots.default) == null ? void 0 : _a.call(slots).find((slot) => {
          var _a2, _b;
          return (_b = (_a2 = slot.props) == null ? void 0 : _a2.key) == null ? void 0 : _b.toString().includes(cssFramework.value);
        });
        const childSlots = (currentFramework == null ? void 0 : currentFramework.children).sort((a, b) => {
          var _a2, _b, _c2;
          return (_c2 = (_a2 = a == null ? void 0 : a.props) == null ? void 0 : _a2.title) == null ? void 0 : _c2.localeCompare((_b = b == null ? void 0 : b.props) == null ? void 0 : _b.title);
        });
        return (childSlots == null ? void 0 : childSlots.map((slot, index) => {
          var _a2;
          return {
            label: ((_a2 = slot.props) == null ? void 0 : _a2.title) || `${index}`,
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
            _push2(`<div class="bg-[var(--vp-code-block-bg)] border-b-2 border-[#272727] flex pr-2" data-v-8ea91e56${_scopeId}><div class="flex justify-between items-center w-full text-[13px]" data-v-8ea91e56${_scopeId}>`);
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
            _push2(`<div data-v-8ea91e56${_scopeId}>`);
            _push2(ssrRenderComponent(unref(bc), {
              modelValue: unref(cssFramework),
              "onUpdate:modelValue": [($event) => isRef(cssFramework) ? cssFramework.value = $event : null, ($event) => currentTab.value = "index.vue"]
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(Cc), { class: "flex items-center justify-between bg-stone-800 rounded-sm w-[115px] text-xs py-1 pl-2 pr-1" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(Ac), null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(Icon), {
                          icon: "radix-icons:chevron-down",
                          class: "h-3.5 w-3.5"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(Ac)),
                          createVNode(unref(Icon), {
                            icon: "radix-icons:chevron-down",
                            class: "h-3.5 w-3.5"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(wc), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_c), { class: "border border-stone-700 min-w-[115px] bg-stone-800 rounded shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade z-[100]" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(Dc), { class: "p-[5px]" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<!--[-->`);
                                    ssrRenderList(cssFrameworkOptions.value, (framework) => {
                                      _push6(ssrRenderComponent(unref(Ec), {
                                        key: framework.label,
                                        class: "text-xs leading-none text-grass11 rounded-[3px] flex items-center h-[25px] pl-[25px] relative select-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1",
                                        value: framework.value
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(unref(Pc), { class: "absolute left-0 w-[25px] inline-flex items-center justify-center" }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(unref(Icon), { icon: "radix-icons:check" }, null, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    createVNode(unref(Icon), { icon: "radix-icons:check" })
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                            _push7(ssrRenderComponent(unref(Tc), null, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`${ssrInterpolate(capitalize(framework.label ?? ""))}`);
                                                } else {
                                                  return [
                                                    createTextVNode(toDisplayString(capitalize(framework.label ?? "")), 1)
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(unref(Pc), { class: "absolute left-0 w-[25px] inline-flex items-center justify-center" }, {
                                                default: withCtx(() => [
                                                  createVNode(unref(Icon), { icon: "radix-icons:check" })
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(unref(Tc), null, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(capitalize(framework.label ?? "")), 1)
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    });
                                    _push6(`<!--]-->`);
                                  } else {
                                    return [
                                      (openBlock(true), createBlock(Fragment, null, renderList(cssFrameworkOptions.value, (framework) => {
                                        return openBlock(), createBlock(unref(Ec), {
                                          key: framework.label,
                                          class: "text-xs leading-none text-grass11 rounded-[3px] flex items-center h-[25px] pl-[25px] relative select-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1",
                                          value: framework.value
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(unref(Pc), { class: "absolute left-0 w-[25px] inline-flex items-center justify-center" }, {
                                              default: withCtx(() => [
                                                createVNode(unref(Icon), { icon: "radix-icons:check" })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(unref(Tc), null, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(capitalize(framework.label ?? "")), 1)
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          _: 2
                                        }, 1032, ["value"]);
                                      }), 128))
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(Dc), { class: "p-[5px]" }, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(cssFrameworkOptions.value, (framework) => {
                                      return openBlock(), createBlock(unref(Ec), {
                                        key: framework.label,
                                        class: "text-xs leading-none text-grass11 rounded-[3px] flex items-center h-[25px] pl-[25px] relative select-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1",
                                        value: framework.value
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(unref(Pc), { class: "absolute left-0 w-[25px] inline-flex items-center justify-center" }, {
                                            default: withCtx(() => [
                                              createVNode(unref(Icon), { icon: "radix-icons:check" })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(unref(Tc), null, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(capitalize(framework.label ?? "")), 1)
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ]),
                                        _: 2
                                      }, 1032, ["value"]);
                                    }), 128))
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_c), { class: "border border-stone-700 min-w-[115px] bg-stone-800 rounded shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade z-[100]" }, {
                            default: withCtx(() => [
                              createVNode(unref(Dc), { class: "p-[5px]" }, {
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList(cssFrameworkOptions.value, (framework) => {
                                    return openBlock(), createBlock(unref(Ec), {
                                      key: framework.label,
                                      class: "text-xs leading-none text-grass11 rounded-[3px] flex items-center h-[25px] pl-[25px] relative select-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1",
                                      value: framework.value
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(unref(Pc), { class: "absolute left-0 w-[25px] inline-flex items-center justify-center" }, {
                                          default: withCtx(() => [
                                            createVNode(unref(Icon), { icon: "radix-icons:check" })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(unref(Tc), null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(capitalize(framework.label ?? "")), 1)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1032, ["value"]);
                                  }), 128))
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(Cc), { class: "flex items-center justify-between bg-stone-800 rounded-sm w-[115px] text-xs py-1 pl-2 pr-1" }, {
                      default: withCtx(() => [
                        createVNode(unref(Ac)),
                        createVNode(unref(Icon), {
                          icon: "radix-icons:chevron-down",
                          class: "h-3.5 w-3.5"
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(wc), null, {
                      default: withCtx(() => [
                        createVNode(unref(_c), { class: "border border-stone-700 min-w-[115px] bg-stone-800 rounded shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade z-[100]" }, {
                          default: withCtx(() => [
                            createVNode(unref(Dc), { class: "p-[5px]" }, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(cssFrameworkOptions.value, (framework) => {
                                  return openBlock(), createBlock(unref(Ec), {
                                    key: framework.label,
                                    class: "text-xs leading-none text-grass11 rounded-[3px] flex items-center h-[25px] pl-[25px] relative select-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1",
                                    value: framework.value
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(Pc), { class: "absolute left-0 w-[25px] inline-flex items-center justify-center" }, {
                                        default: withCtx(() => [
                                          createVNode(unref(Icon), { icon: "radix-icons:check" })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(unref(Tc), null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(capitalize(framework.label ?? "")), 1)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1032, ["value"]);
                                }), 128))
                              ]),
                              _: 1
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
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div><div class="${ssrRenderClass([`${open.value ? "overflow-scroll h-full min-h-[150px] max-h-[80vh]" : "overflow-hidden h-[150px]"}`, "pb-10 block"])}" data-v-8ea91e56${_scopeId}><!--[-->`);
            ssrRenderList(tabs.value, (tab) => {
              _push2(ssrRenderComponent(unref(Wc), {
                key: tab.label,
                value: tab.label,
                "as-child": ""
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="relative -mt-5 text-base" data-v-8ea91e56${_scopeId2}>`);
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
            _push2(`<!--]--><div class="bg-gradient-to-t from-[#161618FF] to-[#16161800] bottom-[1px] left-[1px] right-[1px] h-20 flex items-center justify-center absolute rounded-b-lg" data-v-8ea91e56${_scopeId}><button class="mt-4 bg-neutral-800 hover:bg-neutral-700 px-3 py-1 rounded border-neutral-700 border" data-v-8ea91e56${_scopeId}>${ssrInterpolate(open.value ? "Collapse code" : "Expand code")}</button></div></div>`);
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
                    createVNode(unref(bc), {
                      modelValue: unref(cssFramework),
                      "onUpdate:modelValue": [($event) => isRef(cssFramework) ? cssFramework.value = $event : null, ($event) => currentTab.value = "index.vue"]
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(Cc), { class: "flex items-center justify-between bg-stone-800 rounded-sm w-[115px] text-xs py-1 pl-2 pr-1" }, {
                          default: withCtx(() => [
                            createVNode(unref(Ac)),
                            createVNode(unref(Icon), {
                              icon: "radix-icons:chevron-down",
                              class: "h-3.5 w-3.5"
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(unref(wc), null, {
                          default: withCtx(() => [
                            createVNode(unref(_c), { class: "border border-stone-700 min-w-[115px] bg-stone-800 rounded shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade z-[100]" }, {
                              default: withCtx(() => [
                                createVNode(unref(Dc), { class: "p-[5px]" }, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(cssFrameworkOptions.value, (framework) => {
                                      return openBlock(), createBlock(unref(Ec), {
                                        key: framework.label,
                                        class: "text-xs leading-none text-grass11 rounded-[3px] flex items-center h-[25px] pl-[25px] relative select-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1",
                                        value: framework.value
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(unref(Pc), { class: "absolute left-0 w-[25px] inline-flex items-center justify-center" }, {
                                            default: withCtx(() => [
                                              createVNode(unref(Icon), { icon: "radix-icons:check" })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(unref(Tc), null, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(capitalize(framework.label ?? "")), 1)
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ]),
                                        _: 2
                                      }, 1032, ["value"]);
                                    }), 128))
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"])
                  ])
                ])
              ]),
              (openBlock(), createBlock("div", {
                ref_key: "codeScrollWrapper",
                ref: codeScrollWrapper,
                key: unref(cssFramework),
                class: ["pb-10 block", `${open.value ? "overflow-scroll h-full min-h-[150px] max-h-[80vh]" : "overflow-hidden h-[150px]"}`]
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
              ], 2))
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../.vitepress/components/NewHeroCodeGroup.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const HeroCodeGroup = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-8ea91e56"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ComponentPreview",
  __ssrInlineRender: true,
  props: {
    name: {},
    files: {}
  },
  setup(__props) {
    const props = __props;
    const cssFramework = useStorage("cssFramework", "tailwind");
    const parsedFiles = computed(() => JSON.parse(decodeURIComponent(props.files ?? ""))[cssFramework.value]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(HeroContainer, mergeProps({
        folder: _ctx.name,
        files: parsedFiles.value,
        "css-framework": unref(cssFramework)
      }, _attrs), {
        codeSlot: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(HeroCodeGroup, {
              modelValue: unref(cssFramework),
              "onUpdate:modelValue": ($event) => isRef(cssFramework) ? cssFramework.value = $event : null
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "tailwind", {}, null, _push3, _parent3, _scopeId2);
                  ssrRenderSlot(_ctx.$slots, "css", {}, null, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    renderSlot(_ctx.$slots, "tailwind"),
                    renderSlot(_ctx.$slots, "css")
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(HeroCodeGroup, {
                modelValue: unref(cssFramework),
                "onUpdate:modelValue": ($event) => isRef(cssFramework) ? cssFramework.value = $event : null
              }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "tailwind"),
                  renderSlot(_ctx.$slots, "css")
                ]),
                _: 3
              }, 8, ["modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../.vitepress/components/ComponentPreview.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "CardLink",
  __ssrInlineRender: true,
  props: {
    title: {},
    description: {},
    url: {},
    image: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><a class="flex flex-col bg-[var(--vp-c-bg-soft)] hover:bg-[var(--vp-c-bg-alt)] transition duration-300 rounded-xl p-4" target="_blank"${ssrRenderAttr("href", _ctx.url)}><h5 class="font-bold">${ssrInterpolate(_ctx.title)}</h5><p class="my-1 text-sm text-[var(--vp-c-text-2)]">${ssrInterpolate(_ctx.description)}</p>`);
      if (_ctx.image) {
        _push(ssrRenderComponent(unref(mu), {
          ratio: 16 / 9,
          class: "rounded-md mt-2 overflow-hidden"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img class="w-full h-full object-cover"${ssrRenderAttr("src", _ctx.image)}${ssrRenderAttr("alt", _ctx.title)}${_scopeId}>`);
            } else {
              return [
                createVNode("img", {
                  class: "w-full h-full object-cover",
                  src: _ctx.image,
                  alt: _ctx.title
                }, null, 8, ["src", "alt"])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</a></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../.vitepress/components/CardLink.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "showcase",
  __ssrInlineRender: true,
  setup(__props) {
    const { frontmatter } = useData$1();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "content px-6 sm:px-[48px] lg:px-[64px] py-6 sm:py-12" }, _attrs))}><div class="mx-auto w-full container max-w-[1152px]"><div class="my-16 md:my-26 flex flex-col items-center text-center"><h1 class="text-5xl md:text-6xl lg:text-7xl font-bold animate-text bg-gradient-to-r from-green-200 via-green-300 to-blue-400 bg-clip-text text-transparent"> Showcase </h1><h2 class="mt-2 md:mt-6 md:text-2xl font-medium text-[var(--vp-c-text-2)] max-w-[480px]">${ssrInterpolate(unref(frontmatter).description)}</h2>`);
      _push(ssrRenderComponent(unref(VPButton), {
        text: "Add Showcase",
        class: "mt-6",
        target: "_blank",
        href: "https://github.com/radix-vue/radix-vue/blob/main/docs/content/showcase.md"
      }, null, _parent));
      _push(`</div><div class="flex flex-col gap-8 md:gap-12"><div><h3 class="md:text-lg font-semibold ml-2 inline-flex items-center group"> Packages </h3><div class="mt-4 grid md:grid-cols-2 lg:grid-cols-3 gap-4"><!--[-->`);
      ssrRenderList(unref(frontmatter).packages, (item) => {
        _push(ssrRenderComponent(_sfc_main$1, mergeProps({
          key: item.title
        }, item), null, _parent));
      });
      _push(`<!--]--></div></div><div><h3 class="md:text-lg font-semibold ml-2 inline-flex items-center group"> Projects </h3><div class="mt-4 grid md:grid-cols-2 lg:grid-cols-3 gap-4"><!--[-->`);
      ssrRenderList(unref(frontmatter).projects, (item) => {
        _push(ssrRenderComponent(_sfc_main$1, mergeProps({
          key: item.title
        }, item), null, _parent));
      });
      _push(`<!--]--></div></div>`);
      if (unref(frontmatter).starters && unref(frontmatter).starters.length) {
        _push(`<div><h3 class="md:text-lg font-semibold ml-2 inline-flex items-center group"> Starters </h3><div class="mt-4 grid md:grid-cols-2 lg:grid-cols-3 gap-4"><!--[-->`);
        ssrRenderList(unref(frontmatter).starters, (item) => {
          _push(ssrRenderComponent(_sfc_main$1, mergeProps({
            key: item.title
          }, item), null, _parent));
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../.vitepress/layouts/showcase.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const regex = /\/(\w+)\.vue/;
const baseModules = /* @__PURE__ */ Object.assign({ "../../components/Badge.vue": __vite_glob_0_0, "../../components/CodeBlock.vue": __vite_glob_0_1, "../../components/CodeSandbox.vue": __vite_glob_0_2, "../../components/DemoContainer.vue": __vite_glob_0_3, "../../components/Demos.vue": __vite_glob_0_4, "../../components/Description.vue": __vite_glob_0_5, "../../components/HeroCodeGroup.vue": __vite_glob_0_6, "../../components/HeroContainer.vue": __vite_glob_0_7, "../../components/Highlights.vue": __vite_glob_0_8, "../../components/Stackblitz.vue": __vite_glob_0_9, "../../components/Tooltip.vue": __vite_glob_0_10 });
const tableModules = /* @__PURE__ */ Object.assign({ "../../components/tables/CssVariablesTable.vue": __vite_glob_1_0, "../../components/tables/DataAttributesTable.vue": __vite_glob_1_1, "../../components/tables/EmitsTable.vue": __vite_glob_1_2, "../../components/tables/KeyboardTable.vue": __vite_glob_1_3, "../../components/tables/PropsTable.vue": __vite_glob_1_4, "../../components/tables/SlotsTable.vue": __vite_glob_1_5 });
const RawTheme = {
  extends: theme,
  Layout: () => {
    return h(theme.Layout, null, {
      "home-hero-prelink": () => h(_sfc_main$6),
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      "home-features-after": () => h("div", [h(_sfc_main$7), h(_sfc_main$8)])
    });
  },
  enhanceApp({ app, router, siteData: siteData2 }) {
    var _a, _b, _c2, _d;
    for (const path in baseModules)
      app.component(((_a = path.match(regex)) == null ? void 0 : _a[1]) ?? "", (_b = baseModules[path]) == null ? void 0 : _b.default);
    for (const path in tableModules)
      app.component(((_c2 = path.match(regex)) == null ? void 0 : _c2[1]) ?? "", (_d = tableModules[path]) == null ? void 0 : _d.default);
    app.component("Showcase", _sfc_main);
    app.component("EmbedIframe", _sfc_main$5);
    app.component("ComponentPreview", _sfc_main$2);
  }
};
const ClientOnly = defineComponent({
  setup(_, { slots }) {
    const show = ref(false);
    onMounted(() => {
      show.value = true;
    });
    return () => show.value && slots.default ? slots.default() : null;
  }
});
function useCodeGroups() {
  if (inBrowser) {
    window.addEventListener("click", (e) => {
      var _a;
      const el = e.target;
      if (el.matches(".vp-code-group input")) {
        const group = (_a = el.parentElement) == null ? void 0 : _a.parentElement;
        if (!group)
          return;
        const i = Array.from(group.querySelectorAll("input")).indexOf(el);
        if (i < 0)
          return;
        const blocks = group.querySelector(".blocks");
        if (!blocks)
          return;
        const current = Array.from(blocks.children).find((child) => child.classList.contains("active"));
        if (!current)
          return;
        const next = blocks.children[i];
        if (!next || current === next)
          return;
        current.classList.remove("active");
        next.classList.add("active");
        const label = group == null ? void 0 : group.querySelector(`label[for="${el.id}"]`);
        label == null ? void 0 : label.scrollIntoView({ block: "nearest" });
      }
    });
  }
}
function useCopyCode() {
  if (inBrowser) {
    const timeoutIdMap = /* @__PURE__ */ new WeakMap();
    window.addEventListener("click", (e) => {
      var _a;
      const el = e.target;
      if (el.matches('div[class*="language-"] > button.copy')) {
        const parent = el.parentElement;
        const sibling = (_a = el.nextElementSibling) == null ? void 0 : _a.nextElementSibling;
        if (!parent || !sibling) {
          return;
        }
        const isShell = /language-(shellscript|shell|bash|sh|zsh)/.test(parent.className);
        const ignoredNodes = [".vp-copy-ignore", ".diff.remove"];
        const clone = sibling.cloneNode(true);
        clone.querySelectorAll(ignoredNodes.join(",")).forEach((node) => node.remove());
        let text = clone.textContent || "";
        if (isShell) {
          text = text.replace(/^ *(\$|>) /gm, "").trim();
        }
        copyToClipboard(text).then(() => {
          el.classList.add("copied");
          clearTimeout(timeoutIdMap.get(el));
          const timeoutId = setTimeout(() => {
            el.classList.remove("copied");
            el.blur();
            timeoutIdMap.delete(el);
          }, 2e3);
          timeoutIdMap.set(el, timeoutId);
        });
      }
    });
  }
}
async function copyToClipboard(text) {
  try {
    return navigator.clipboard.writeText(text);
  } catch {
    const element = document.createElement("textarea");
    const previouslyFocusedElement = document.activeElement;
    element.value = text;
    element.setAttribute("readonly", "");
    element.style.contain = "strict";
    element.style.position = "absolute";
    element.style.left = "-9999px";
    element.style.fontSize = "12pt";
    const selection = document.getSelection();
    const originalRange = selection ? selection.rangeCount > 0 && selection.getRangeAt(0) : null;
    document.body.appendChild(element);
    element.select();
    element.selectionStart = 0;
    element.selectionEnd = text.length;
    document.execCommand("copy");
    document.body.removeChild(element);
    if (originalRange) {
      selection.removeAllRanges();
      selection.addRange(originalRange);
    }
    if (previouslyFocusedElement) {
      previouslyFocusedElement.focus();
    }
  }
}
function useUpdateHead(route, siteDataByRouteRef) {
  let isFirstUpdate = true;
  let managedHeadElements = [];
  const updateHeadTags = (newTags) => {
    if (isFirstUpdate) {
      isFirstUpdate = false;
      newTags.forEach((tag) => {
        const headEl = createHeadElement(tag);
        for (const el of document.head.children) {
          if (el.isEqualNode(headEl)) {
            managedHeadElements.push(el);
            return;
          }
        }
      });
      return;
    }
    const newElements = newTags.map(createHeadElement);
    managedHeadElements.forEach((oldEl, oldIndex) => {
      const matchedIndex = newElements.findIndex((newEl) => newEl == null ? void 0 : newEl.isEqualNode(oldEl ?? null));
      if (matchedIndex !== -1) {
        delete newElements[matchedIndex];
      } else {
        oldEl == null ? void 0 : oldEl.remove();
        delete managedHeadElements[oldIndex];
      }
    });
    newElements.forEach((el) => el && document.head.appendChild(el));
    managedHeadElements = [...managedHeadElements, ...newElements].filter(Boolean);
  };
  watchEffect(() => {
    const pageData = route.data;
    const siteData2 = siteDataByRouteRef.value;
    const pageDescription = pageData && pageData.description;
    const frontmatterHead = pageData && pageData.frontmatter.head || [];
    const title = createTitle(siteData2, pageData);
    if (title !== document.title) {
      document.title = title;
    }
    const description = pageDescription || siteData2.description;
    let metaDescriptionElement = document.querySelector(`meta[name=description]`);
    if (metaDescriptionElement) {
      if (metaDescriptionElement.getAttribute("content") !== description) {
        metaDescriptionElement.setAttribute("content", description);
      }
    } else {
      createHeadElement(["meta", { name: "description", content: description }]);
    }
    updateHeadTags(mergeHead(siteData2.head, filterOutHeadDescription(frontmatterHead)));
  });
}
function createHeadElement([tag, attrs, innerHTML]) {
  const el = document.createElement(tag);
  for (const key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
  if (innerHTML) {
    el.innerHTML = innerHTML;
  }
  if (tag === "script" && !attrs.async) {
    el.async = false;
  }
  return el;
}
function isMetaDescription(headConfig) {
  return headConfig[0] === "meta" && headConfig[1] && headConfig[1].name === "description";
}
function filterOutHeadDescription(head) {
  return head.filter((h2) => !isMetaDescription(h2));
}
const hasFetched = /* @__PURE__ */ new Set();
const createLink = () => document.createElement("link");
const viaDOM = (url) => {
  const link2 = createLink();
  link2.rel = `prefetch`;
  link2.href = url;
  document.head.appendChild(link2);
};
const viaXHR = (url) => {
  const req = new XMLHttpRequest();
  req.open("GET", url, req.withCredentials = true);
  req.send();
};
let link;
const doFetch = inBrowser && (link = createLink()) && link.relList && link.relList.supports && link.relList.supports("prefetch") ? viaDOM : viaXHR;
function usePrefetch() {
  if (!inBrowser) {
    return;
  }
  if (!window.IntersectionObserver) {
    return;
  }
  let conn;
  if ((conn = navigator.connection) && (conn.saveData || /2g/.test(conn.effectiveType))) {
    return;
  }
  const rIC = window.requestIdleCallback || setTimeout;
  let observer = null;
  const observeLinks = () => {
    if (observer) {
      observer.disconnect();
    }
    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const link2 = entry.target;
          observer.unobserve(link2);
          const { pathname } = link2;
          if (!hasFetched.has(pathname)) {
            hasFetched.add(pathname);
            const pageChunkPath = pathToFile(pathname);
            if (pageChunkPath)
              doFetch(pageChunkPath);
          }
        }
      });
    });
    rIC(() => {
      document.querySelectorAll("#app a").forEach((link2) => {
        const { hostname, pathname } = new URL(link2.href instanceof SVGAnimatedString ? link2.href.animVal : link2.href, link2.baseURI);
        const extMatch = pathname.match(/\.\w+$/);
        if (extMatch && extMatch[0] !== ".html") {
          return;
        }
        if (
          // only prefetch same tab navigation, since a new tab will load
          // the lean js chunk instead.
          link2.target !== "_blank" && // only prefetch inbound links
          hostname === location.hostname
        ) {
          if (pathname !== location.pathname) {
            observer.observe(link2);
          } else {
            hasFetched.add(pathname);
          }
        }
      });
    });
  };
  onMounted(observeLinks);
  const route = useRoute();
  watch(() => route.path, observeLinks);
  onUnmounted(() => {
    observer && observer.disconnect();
  });
}
function resolveThemeExtends(theme2) {
  if (theme2.extends) {
    const base = resolveThemeExtends(theme2.extends);
    return {
      ...base,
      ...theme2,
      async enhanceApp(ctx) {
        if (base.enhanceApp)
          await base.enhanceApp(ctx);
        if (theme2.enhanceApp)
          await theme2.enhanceApp(ctx);
      }
    };
  }
  return theme2;
}
const Theme = resolveThemeExtends(RawTheme);
const VitePressApp = defineComponent({
  name: "VitePressApp",
  setup() {
    const { site, lang, dir } = useData$1();
    onMounted(() => {
      watchEffect(() => {
        document.documentElement.lang = lang.value;
        document.documentElement.dir = dir.value;
      });
    });
    if (site.value.router.prefetchLinks) {
      usePrefetch();
    }
    useCopyCode();
    useCodeGroups();
    if (Theme.setup)
      Theme.setup();
    return () => h(Theme.Layout);
  }
});
async function createApp() {
  const router = newRouter();
  const app = newApp();
  app.provide(RouterSymbol, router);
  const data = initData(router.route);
  app.provide(dataSymbol, data);
  app.component("Content", Content);
  app.component("ClientOnly", ClientOnly);
  Object.defineProperties(app.config.globalProperties, {
    $frontmatter: {
      get() {
        return data.frontmatter.value;
      }
    },
    $params: {
      get() {
        return data.page.value.params;
      }
    }
  });
  if (Theme.enhanceApp) {
    await Theme.enhanceApp({
      app,
      router,
      siteData: siteDataRef
    });
  }
  return { app, router, data };
}
function newApp() {
  return createSSRApp(VitePressApp);
}
function newRouter() {
  let isInitialPageLoad = inBrowser;
  let initialPath;
  return createRouter((path) => {
    let pageFilePath = pathToFile(path);
    let pageModule = null;
    if (pageFilePath) {
      if (isInitialPageLoad) {
        initialPath = pageFilePath;
      }
      if (isInitialPageLoad || initialPath === pageFilePath) {
        pageFilePath = pageFilePath.replace(/\.js$/, ".lean.js");
      }
      if (true) {
        pageModule = import(
          /*@vite-ignore*/
          pageFilePath + "?t=" + Date.now()
        );
      }
    }
    if (inBrowser) {
      isInitialPageLoad = false;
    }
    return pageModule;
  }, Theme.NotFound);
}
if (inBrowser) {
  createApp().then(({ app, router, data }) => {
    router.go().then(() => {
      useUpdateHead(router.route, data.site);
      app.mount("#app");
    });
  });
}
async function render(path) {
  const { app, router } = await createApp();
  await router.go(path);
  const ctx = { content: "" };
  ctx.content = await renderToString(app, ctx);
  return ctx;
}
export {
  useRouter as a,
  createSearchTranslate as c,
  dataSymbol as d,
  escapeRegExp as e,
  inBrowser as i,
  pathToFile as p,
  render,
  useData as u
};
