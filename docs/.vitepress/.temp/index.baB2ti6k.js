import { defineComponent, ref, unref, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { w as wu, $ as $u, _ as _u, x as xu, S as Su, D as Du, T as Tu, P as Pu, B as Bu, O as Ou, I as Iu, M as Au } from "./index.faJ9MUPN.js";
import { Icon } from "@iconify/vue";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const v = ref("");
    const options = ["Apple", "Banana", "Blueberry", "Grapes", "Pineapple"];
    const vegetables = ["Aubergine", "Broccoli", "Carrot", "Courgette", "Leek"];
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(wu), mergeProps({
        modelValue: v.value,
        "onUpdate:modelValue": ($event) => v.value = $event,
        class: "relative"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref($u), { class: "min-w-[160px] inline-flex items-center justify-between rounded px-[15px] text-[13px] leading-none h-[35px] gap-[5px] bg-white text-grass11 shadow-[0_2px_10px] shadow-black/10 hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-black data-[placeholder]:text-grass9 outline-none" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_u), {
                    class: "!bg-transparent outline-none text-grass11 h-full selection:bg-grass5 placeholder-mauve8",
                    placeholder: "Placeholder..."
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(xu), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(Icon), {
                          icon: "radix-icons:chevron-down",
                          class: "h-4 w-4 text-grass11"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(Icon), {
                            icon: "radix-icons:chevron-down",
                            class: "h-4 w-4 text-grass11"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_u), {
                      class: "!bg-transparent outline-none text-grass11 h-full selection:bg-grass5 placeholder-mauve8",
                      placeholder: "Placeholder..."
                    }),
                    createVNode(unref(xu), null, {
                      default: withCtx(() => [
                        createVNode(unref(Icon), {
                          icon: "radix-icons:chevron-down",
                          class: "h-4 w-4 text-grass11"
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Su), { class: "absolute z-10 w-full mt-2 min-w-[160px] bg-white overflow-hidden rounded shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(Du), { class: "p-[5px]" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(Tu), { class: "text-mauve8 text-xs font-medium text-center py-2" }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(Pu), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(Bu), { class: "px-[25px] text-xs leading-[25px] text-mauve11" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Fruits `);
                                  } else {
                                    return [
                                      createTextVNode(" Fruits ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`<!--[-->`);
                              ssrRenderList(options, (option, index) => {
                                _push5(ssrRenderComponent(unref(Ou), {
                                  key: index,
                                  class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-grass9 data-[highlighted]:text-grass1",
                                  value: option
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(unref(Iu), { class: "absolute left-0 w-[25px] inline-flex items-center justify-center" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(unref(Icon), { icon: "radix-icons:check" }, null, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(unref(Icon), { icon: "radix-icons:check" })
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(`<span${_scopeId5}>${ssrInterpolate(option)}</span>`);
                                    } else {
                                      return [
                                        createVNode(unref(Iu), { class: "absolute left-0 w-[25px] inline-flex items-center justify-center" }, {
                                          default: withCtx(() => [
                                            createVNode(unref(Icon), { icon: "radix-icons:check" })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode("span", null, toDisplayString(option), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              });
                              _push5(`<!--]-->`);
                              _push5(ssrRenderComponent(unref(Au), { class: "h-[1px] bg-grass6 m-[5px]" }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(Bu), { class: "px-[25px] text-xs leading-[25px] text-mauve11" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Fruits ")
                                  ]),
                                  _: 1
                                }),
                                (openBlock(), createBlock(Fragment, null, renderList(options, (option, index) => {
                                  return createVNode(unref(Ou), {
                                    key: index,
                                    class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-grass9 data-[highlighted]:text-grass1",
                                    value: option
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(Iu), { class: "absolute left-0 w-[25px] inline-flex items-center justify-center" }, {
                                        default: withCtx(() => [
                                          createVNode(unref(Icon), { icon: "radix-icons:check" })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode("span", null, toDisplayString(option), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["value"]);
                                }), 64)),
                                createVNode(unref(Au), { class: "h-[1px] bg-grass6 m-[5px]" })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(Pu), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(Bu), { class: "px-[25px] text-xs leading-[25px] text-mauve11" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Vegetables `);
                                  } else {
                                    return [
                                      createTextVNode(" Vegetables ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`<!--[-->`);
                              ssrRenderList(vegetables, (option, index) => {
                                _push5(ssrRenderComponent(unref(Ou), {
                                  key: index,
                                  class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-grass9 data-[highlighted]:text-grass1",
                                  value: option
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(unref(Iu), { class: "absolute left-0 w-[25px] inline-flex items-center justify-center" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(unref(Icon), { icon: "radix-icons:check" }, null, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(unref(Icon), { icon: "radix-icons:check" })
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(`<span${_scopeId5}>${ssrInterpolate(option)}</span>`);
                                    } else {
                                      return [
                                        createVNode(unref(Iu), { class: "absolute left-0 w-[25px] inline-flex items-center justify-center" }, {
                                          default: withCtx(() => [
                                            createVNode(unref(Icon), { icon: "radix-icons:check" })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode("span", null, toDisplayString(option), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              });
                              _push5(`<!--]-->`);
                            } else {
                              return [
                                createVNode(unref(Bu), { class: "px-[25px] text-xs leading-[25px] text-mauve11" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Vegetables ")
                                  ]),
                                  _: 1
                                }),
                                (openBlock(), createBlock(Fragment, null, renderList(vegetables, (option, index) => {
                                  return createVNode(unref(Ou), {
                                    key: index,
                                    class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-grass9 data-[highlighted]:text-grass1",
                                    value: option
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(Iu), { class: "absolute left-0 w-[25px] inline-flex items-center justify-center" }, {
                                        default: withCtx(() => [
                                          createVNode(unref(Icon), { icon: "radix-icons:check" })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode("span", null, toDisplayString(option), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["value"]);
                                }), 64))
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(Tu), { class: "text-mauve8 text-xs font-medium text-center py-2" }),
                          createVNode(unref(Pu), null, {
                            default: withCtx(() => [
                              createVNode(unref(Bu), { class: "px-[25px] text-xs leading-[25px] text-mauve11" }, {
                                default: withCtx(() => [
                                  createTextVNode(" Fruits ")
                                ]),
                                _: 1
                              }),
                              (openBlock(), createBlock(Fragment, null, renderList(options, (option, index) => {
                                return createVNode(unref(Ou), {
                                  key: index,
                                  class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-grass9 data-[highlighted]:text-grass1",
                                  value: option
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(Iu), { class: "absolute left-0 w-[25px] inline-flex items-center justify-center" }, {
                                      default: withCtx(() => [
                                        createVNode(unref(Icon), { icon: "radix-icons:check" })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode("span", null, toDisplayString(option), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["value"]);
                              }), 64)),
                              createVNode(unref(Au), { class: "h-[1px] bg-grass6 m-[5px]" })
                            ]),
                            _: 1
                          }),
                          createVNode(unref(Pu), null, {
                            default: withCtx(() => [
                              createVNode(unref(Bu), { class: "px-[25px] text-xs leading-[25px] text-mauve11" }, {
                                default: withCtx(() => [
                                  createTextVNode(" Vegetables ")
                                ]),
                                _: 1
                              }),
                              (openBlock(), createBlock(Fragment, null, renderList(vegetables, (option, index) => {
                                return createVNode(unref(Ou), {
                                  key: index,
                                  class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-grass9 data-[highlighted]:text-grass1",
                                  value: option
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(Iu), { class: "absolute left-0 w-[25px] inline-flex items-center justify-center" }, {
                                      default: withCtx(() => [
                                        createVNode(unref(Icon), { icon: "radix-icons:check" })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode("span", null, toDisplayString(option), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["value"]);
                              }), 64))
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
                    createVNode(unref(Du), { class: "p-[5px]" }, {
                      default: withCtx(() => [
                        createVNode(unref(Tu), { class: "text-mauve8 text-xs font-medium text-center py-2" }),
                        createVNode(unref(Pu), null, {
                          default: withCtx(() => [
                            createVNode(unref(Bu), { class: "px-[25px] text-xs leading-[25px] text-mauve11" }, {
                              default: withCtx(() => [
                                createTextVNode(" Fruits ")
                              ]),
                              _: 1
                            }),
                            (openBlock(), createBlock(Fragment, null, renderList(options, (option, index) => {
                              return createVNode(unref(Ou), {
                                key: index,
                                class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-grass9 data-[highlighted]:text-grass1",
                                value: option
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(Iu), { class: "absolute left-0 w-[25px] inline-flex items-center justify-center" }, {
                                    default: withCtx(() => [
                                      createVNode(unref(Icon), { icon: "radix-icons:check" })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode("span", null, toDisplayString(option), 1)
                                ]),
                                _: 2
                              }, 1032, ["value"]);
                            }), 64)),
                            createVNode(unref(Au), { class: "h-[1px] bg-grass6 m-[5px]" })
                          ]),
                          _: 1
                        }),
                        createVNode(unref(Pu), null, {
                          default: withCtx(() => [
                            createVNode(unref(Bu), { class: "px-[25px] text-xs leading-[25px] text-mauve11" }, {
                              default: withCtx(() => [
                                createTextVNode(" Vegetables ")
                              ]),
                              _: 1
                            }),
                            (openBlock(), createBlock(Fragment, null, renderList(vegetables, (option, index) => {
                              return createVNode(unref(Ou), {
                                key: index,
                                class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-grass9 data-[highlighted]:text-grass1",
                                value: option
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(Iu), { class: "absolute left-0 w-[25px] inline-flex items-center justify-center" }, {
                                    default: withCtx(() => [
                                      createVNode(unref(Icon), { icon: "radix-icons:check" })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode("span", null, toDisplayString(option), 1)
                                ]),
                                _: 2
                              }, 1032, ["value"]);
                            }), 64))
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
          } else {
            return [
              createVNode(unref($u), { class: "min-w-[160px] inline-flex items-center justify-between rounded px-[15px] text-[13px] leading-none h-[35px] gap-[5px] bg-white text-grass11 shadow-[0_2px_10px] shadow-black/10 hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-black data-[placeholder]:text-grass9 outline-none" }, {
                default: withCtx(() => [
                  createVNode(unref(_u), {
                    class: "!bg-transparent outline-none text-grass11 h-full selection:bg-grass5 placeholder-mauve8",
                    placeholder: "Placeholder..."
                  }),
                  createVNode(unref(xu), null, {
                    default: withCtx(() => [
                      createVNode(unref(Icon), {
                        icon: "radix-icons:chevron-down",
                        class: "h-4 w-4 text-grass11"
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(unref(Su), { class: "absolute z-10 w-full mt-2 min-w-[160px] bg-white overflow-hidden rounded shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade" }, {
                default: withCtx(() => [
                  createVNode(unref(Du), { class: "p-[5px]" }, {
                    default: withCtx(() => [
                      createVNode(unref(Tu), { class: "text-mauve8 text-xs font-medium text-center py-2" }),
                      createVNode(unref(Pu), null, {
                        default: withCtx(() => [
                          createVNode(unref(Bu), { class: "px-[25px] text-xs leading-[25px] text-mauve11" }, {
                            default: withCtx(() => [
                              createTextVNode(" Fruits ")
                            ]),
                            _: 1
                          }),
                          (openBlock(), createBlock(Fragment, null, renderList(options, (option, index) => {
                            return createVNode(unref(Ou), {
                              key: index,
                              class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-grass9 data-[highlighted]:text-grass1",
                              value: option
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(Iu), { class: "absolute left-0 w-[25px] inline-flex items-center justify-center" }, {
                                  default: withCtx(() => [
                                    createVNode(unref(Icon), { icon: "radix-icons:check" })
                                  ]),
                                  _: 1
                                }),
                                createVNode("span", null, toDisplayString(option), 1)
                              ]),
                              _: 2
                            }, 1032, ["value"]);
                          }), 64)),
                          createVNode(unref(Au), { class: "h-[1px] bg-grass6 m-[5px]" })
                        ]),
                        _: 1
                      }),
                      createVNode(unref(Pu), null, {
                        default: withCtx(() => [
                          createVNode(unref(Bu), { class: "px-[25px] text-xs leading-[25px] text-mauve11" }, {
                            default: withCtx(() => [
                              createTextVNode(" Vegetables ")
                            ]),
                            _: 1
                          }),
                          (openBlock(), createBlock(Fragment, null, renderList(vegetables, (option, index) => {
                            return createVNode(unref(Ou), {
                              key: index,
                              class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-grass9 data-[highlighted]:text-grass1",
                              value: option
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(Iu), { class: "absolute left-0 w-[25px] inline-flex items-center justify-center" }, {
                                  default: withCtx(() => [
                                    createVNode(unref(Icon), { icon: "radix-icons:check" })
                                  ]),
                                  _: 1
                                }),
                                createVNode("span", null, toDisplayString(option), 1)
                              ]),
                              _: 2
                            }, 1032, ["value"]);
                          }), 64))
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
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../components/demo/Combobox/tailwind/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
