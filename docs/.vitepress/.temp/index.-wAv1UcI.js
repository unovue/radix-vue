import { defineComponent, unref, mergeProps, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { b8 as vc, b9 as mc, ba as hc, bb as gc } from "./index.faJ9MUPN.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const tags = Array.from({ length: 50 }).map((_, i, a) => `v1.2.0-beta.${a.length - i}`);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(vc), mergeProps({
        class: "w-[200px] h-[225px] rounded overflow-hidden shadow-[0_2px_10px] shadow-blackA7 bg-white",
        style: { "--scrollbar-size": "10px" }
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(mc), { class: "w-full h-full rounded" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="py-[15px] px-5"${_scopeId2}><div class="text-grass11 text-[15px] leading-[18px] font-semibold"${_scopeId2}> Tags </div><!--[-->`);
                  ssrRenderList(unref(tags), (tag) => {
                    _push3(`<div class="text-mauve12 text-[13px] leading-[18px] mt-2.5 pt-2.5 border-t border-t-mauve6"${_scopeId2}>${ssrInterpolate(tag)}</div>`);
                  });
                  _push3(`<!--]--></div>`);
                } else {
                  return [
                    createVNode("div", { class: "py-[15px] px-5" }, [
                      createVNode("div", { class: "text-grass11 text-[15px] leading-[18px] font-semibold" }, " Tags "),
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(tags), (tag) => {
                        return openBlock(), createBlock("div", {
                          key: tag,
                          class: "text-mauve12 text-[13px] leading-[18px] mt-2.5 pt-2.5 border-t border-t-mauve6"
                        }, toDisplayString(tag), 1);
                      }), 128))
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(hc), {
              class: "flex select-none touch-none p-0.5 bg-blackA6 transition-colors duration-[160ms] ease-out hover:bg-blackA8 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5",
              orientation: "vertical"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(gc), { class: "flex-1 bg-mauve10 rounded-[10px] relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(gc), { class: "flex-1 bg-mauve10 rounded-[10px] relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(hc), {
              class: "flex select-none touch-none p-0.5 bg-blackA6 transition-colors duration-[160ms] ease-out hover:bg-blackA8 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5",
              orientation: "horizontal"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(gc), { class: "flex-1 bg-mauve10 rounded-[10px] relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(gc), { class: "flex-1 bg-mauve10 rounded-[10px] relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(mc), { class: "w-full h-full rounded" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "py-[15px] px-5" }, [
                    createVNode("div", { class: "text-grass11 text-[15px] leading-[18px] font-semibold" }, " Tags "),
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(tags), (tag) => {
                      return openBlock(), createBlock("div", {
                        key: tag,
                        class: "text-mauve12 text-[13px] leading-[18px] mt-2.5 pt-2.5 border-t border-t-mauve6"
                      }, toDisplayString(tag), 1);
                    }), 128))
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(hc), {
                class: "flex select-none touch-none p-0.5 bg-blackA6 transition-colors duration-[160ms] ease-out hover:bg-blackA8 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5",
                orientation: "vertical"
              }, {
                default: withCtx(() => [
                  createVNode(unref(gc), { class: "flex-1 bg-mauve10 rounded-[10px] relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]" })
                ]),
                _: 1
              }),
              createVNode(unref(hc), {
                class: "flex select-none touch-none p-0.5 bg-blackA6 transition-colors duration-[160ms] ease-out hover:bg-blackA8 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5",
                orientation: "horizontal"
              }, {
                default: withCtx(() => [
                  createVNode(unref(gc), { class: "flex-1 bg-mauve10 rounded-[10px] relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]" })
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../components/demo/ScrollArea/tailwind/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
