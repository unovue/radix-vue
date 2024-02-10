import { defineComponent, unref, mergeProps, withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { e as eu, t as tu, n as nu, c as au, o as ou } from "./index.faJ9MUPN.js";
import { Icon } from "@iconify/vue";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const accordionItems = [
      {
        value: "item-1",
        title: "Is it accessible?",
        content: "Yes. It adheres to the WAI-ARIA design pattern."
      },
      {
        value: "item-2",
        title: "Is it unstyled?",
        content: "Yes. It's unstyled by default, giving you freedom over the look and feel."
      },
      {
        value: "item-3",
        title: "Can it be animated?",
        content: "Yes! You can use the transition prop to configure the animation."
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(eu), mergeProps({
        class: "bg-mauve6 w-[300px] rounded-md shadow-[0_2px_10px] shadow-black/5",
        "default-value": "item-1",
        type: "single",
        collapsible: true
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(accordionItems, (item) => {
              _push2(ssrRenderComponent(unref(tu), {
                class: "focus-within:shadow-mauve12 mt-px overflow-hidden first:mt-0 first:rounded-t last:rounded-b focus-within:relative focus-within:z-10 focus-within:shadow-[0_0_0_2px]",
                value: item.value
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(nu), { class: "flex" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(au), { class: "text-grass11 shadow-mauve6 hover:bg-mauve2 flex h-[45px] flex-1 cursor-default items-center justify-between bg-white px-5 text-[15px] leading-none shadow-[0_1px_0] outline-none group" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<span${_scopeId4}>${ssrInterpolate(item.title)}</span>`);
                                _push5(ssrRenderComponent(unref(Icon), {
                                  icon: "radix-icons:chevron-down",
                                  class: "text-green10 ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180",
                                  "aria-hidden": ""
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode("span", null, toDisplayString(item.title), 1),
                                  createVNode(unref(Icon), {
                                    icon: "radix-icons:chevron-down",
                                    class: "text-green10 ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180",
                                    "aria-hidden": ""
                                  })
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(unref(au), { class: "text-grass11 shadow-mauve6 hover:bg-mauve2 flex h-[45px] flex-1 cursor-default items-center justify-between bg-white px-5 text-[15px] leading-none shadow-[0_1px_0] outline-none group" }, {
                              default: withCtx(() => [
                                createVNode("span", null, toDisplayString(item.title), 1),
                                createVNode(unref(Icon), {
                                  icon: "radix-icons:chevron-down",
                                  class: "text-green10 ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180",
                                  "aria-hidden": ""
                                })
                              ]),
                              _: 2
                            }, 1024)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(unref(ou), { class: "text-mauve11 bg-mauve2 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden text-[15px]" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="px-5 py-4"${_scopeId3}>${ssrInterpolate(item.content)}</div>`);
                        } else {
                          return [
                            createVNode("div", { class: "px-5 py-4" }, toDisplayString(item.content), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(nu), { class: "flex" }, {
                        default: withCtx(() => [
                          createVNode(unref(au), { class: "text-grass11 shadow-mauve6 hover:bg-mauve2 flex h-[45px] flex-1 cursor-default items-center justify-between bg-white px-5 text-[15px] leading-none shadow-[0_1px_0] outline-none group" }, {
                            default: withCtx(() => [
                              createVNode("span", null, toDisplayString(item.title), 1),
                              createVNode(unref(Icon), {
                                icon: "radix-icons:chevron-down",
                                class: "text-green10 ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180",
                                "aria-hidden": ""
                              })
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(unref(ou), { class: "text-mauve11 bg-mauve2 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden text-[15px]" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "px-5 py-4" }, toDisplayString(item.content), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(), createBlock(Fragment, null, renderList(accordionItems, (item) => {
                return createVNode(unref(tu), {
                  key: item.value,
                  class: "focus-within:shadow-mauve12 mt-px overflow-hidden first:mt-0 first:rounded-t last:rounded-b focus-within:relative focus-within:z-10 focus-within:shadow-[0_0_0_2px]",
                  value: item.value
                }, {
                  default: withCtx(() => [
                    createVNode(unref(nu), { class: "flex" }, {
                      default: withCtx(() => [
                        createVNode(unref(au), { class: "text-grass11 shadow-mauve6 hover:bg-mauve2 flex h-[45px] flex-1 cursor-default items-center justify-between bg-white px-5 text-[15px] leading-none shadow-[0_1px_0] outline-none group" }, {
                          default: withCtx(() => [
                            createVNode("span", null, toDisplayString(item.title), 1),
                            createVNode(unref(Icon), {
                              icon: "radix-icons:chevron-down",
                              class: "text-green10 ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180",
                              "aria-hidden": ""
                            })
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(unref(ou), { class: "text-mauve11 bg-mauve2 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden text-[15px]" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "px-5 py-4" }, toDisplayString(item.content), 1)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1032, ["value"]);
              }), 64))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../components/demo/Accordion/tailwind/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
