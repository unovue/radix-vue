import { defineComponent, mergeProps, unref, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { z as hu, A as gu, C as yu } from "./index.faJ9MUPN.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex gap-5" }, _attrs))}>`);
      _push(ssrRenderComponent(unref(hu), { class: "bg-blackA3 inline-flex h-[45px] w-[45px] select-none items-center justify-center overflow-hidden rounded-full align-middle" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(gu), {
              class: "h-full w-full rounded-[inherit] object-cover",
              src: "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80",
              alt: "Colm Tuite"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(yu), {
              class: "text-grass11 leading-1 flex h-full w-full items-center justify-center bg-white text-[15px] font-medium",
              "delay-ms": 600
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` CT `);
                } else {
                  return [
                    createTextVNode(" CT ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(gu), {
                class: "h-full w-full rounded-[inherit] object-cover",
                src: "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80",
                alt: "Colm Tuite"
              }),
              createVNode(unref(yu), {
                class: "text-grass11 leading-1 flex h-full w-full items-center justify-center bg-white text-[15px] font-medium",
                "delay-ms": 600
              }, {
                default: withCtx(() => [
                  createTextVNode(" CT ")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(hu), { class: "bg-blackA3 inline-flex h-[45px] w-[45px] select-none items-center justify-center overflow-hidden rounded-full align-middle" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(gu), {
              class: "h-full w-full rounded-[inherit] object-cover",
              src: "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80",
              alt: "Pedro Duarte"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(yu), {
              class: "text-grass11 leading-1 flex h-full w-full items-center justify-center bg-white text-[15px] font-medium",
              "delay-ms": 600
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` JD `);
                } else {
                  return [
                    createTextVNode(" JD ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(gu), {
                class: "h-full w-full rounded-[inherit] object-cover",
                src: "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80",
                alt: "Pedro Duarte"
              }),
              createVNode(unref(yu), {
                class: "text-grass11 leading-1 flex h-full w-full items-center justify-center bg-white text-[15px] font-medium",
                "delay-ms": 600
              }, {
                default: withCtx(() => [
                  createTextVNode(" JD ")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(hu), { class: "bg-blackA3 inline-flex h-[45px] w-[45px] select-none items-center justify-center overflow-hidden rounded-full align-middle" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(yu), { class: "text-grass11 leading-1 flex h-full w-full items-center justify-center bg-white text-[15px] font-medium" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` PD `);
                } else {
                  return [
                    createTextVNode(" PD ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(yu), { class: "text-grass11 leading-1 flex h-full w-full items-center justify-center bg-white text-[15px] font-medium" }, {
                default: withCtx(() => [
                  createTextVNode(" PD ")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../components/demo/Avatar/tailwind/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
