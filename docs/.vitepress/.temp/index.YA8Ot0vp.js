import { defineComponent, ref, unref, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { Icon } from "@iconify/vue";
import { bc, bd as Cc, be as Ac, bf as wc, bg as _c, bh as Oc, bi as Dc, bj as Sc, bk as Bc, bl as Ec, bm as Pc, bn as Tc, bo as xc, bp as Ic } from "./index.faJ9MUPN.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const fruit = ref();
    const options = ["Apple", "Banana", "Blueberry", "Grapes", "Pineapple"];
    const vegetables = ["Aubergine", "Broccoli", "Carrot", "Courgette", "Leek"];
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(bc), mergeProps({
        modelValue: fruit.value,
        "onUpdate:modelValue": ($event) => fruit.value = $event
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Cc), {
              class: "inline-flex min-w-[160px] items-center justify-between rounded px-[15px] text-[13px] leading-none h-[35px] gap-[5px] bg-white text-grass11 shadow-[0_2px_10px] shadow-black/10 hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-black data-[placeholder]:text-green9 outline-none",
              "aria-label": "Customise options"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(Ac), { placeholder: "Select a fruit..." }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(Icon), {
                    icon: "radix-icons:chevron-down",
                    class: "h-3.5 w-3.5"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(Ac), { placeholder: "Select a fruit..." }),
                    createVNode(unref(Icon), {
                      icon: "radix-icons:chevron-down",
                      class: "h-3.5 w-3.5"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(wc), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_c), {
                    class: "min-w-[160px] bg-white rounded shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade z-[100]",
                    "side-offset": 5
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(Oc), { class: "flex items-center justify-center h-[25px] bg-white text-violet11 cursor-default" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(Icon), { icon: "radix-icons:chevron-up" }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(Icon), { icon: "radix-icons:chevron-up" })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(Dc), { class: "p-[5px]" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(Sc), { class: "px-[25px] text-xs leading-[25px] text-mauve11" }, {
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
                              _push5(ssrRenderComponent(unref(Bc), null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<!--[-->`);
                                    ssrRenderList(options, (option, index) => {
                                      _push6(ssrRenderComponent(unref(Ec), {
                                        key: index,
                                        class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1",
                                        value: option
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
                                                  _push8(`${ssrInterpolate(option)}`);
                                                } else {
                                                  return [
                                                    createTextVNode(toDisplayString(option), 1)
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
                                                  createTextVNode(toDisplayString(option), 1)
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
                                      (openBlock(), createBlock(Fragment, null, renderList(options, (option, index) => {
                                        return createVNode(unref(Ec), {
                                          key: index,
                                          class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1",
                                          value: option
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
                                                createTextVNode(toDisplayString(option), 1)
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
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(xc), { class: "h-[1px] bg-green6 m-[5px]" }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(Sc), { class: "px-[25px] text-xs leading-[25px] text-mauve11" }, {
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
                              _push5(ssrRenderComponent(unref(Bc), null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<!--[-->`);
                                    ssrRenderList(vegetables, (option, index) => {
                                      _push6(ssrRenderComponent(unref(Ec), {
                                        key: index,
                                        class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1",
                                        value: option,
                                        disabled: option === "Courgette"
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
                                                  _push8(`${ssrInterpolate(option)}`);
                                                } else {
                                                  return [
                                                    createTextVNode(toDisplayString(option), 1)
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
                                                  createTextVNode(toDisplayString(option), 1)
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
                                      (openBlock(), createBlock(Fragment, null, renderList(vegetables, (option, index) => {
                                        return createVNode(unref(Ec), {
                                          key: index,
                                          class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1",
                                          value: option,
                                          disabled: option === "Courgette"
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
                                                createTextVNode(toDisplayString(option), 1)
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          _: 2
                                        }, 1032, ["value", "disabled"]);
                                      }), 64))
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(Sc), { class: "px-[25px] text-xs leading-[25px] text-mauve11" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Fruits ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(Bc), null, {
                                  default: withCtx(() => [
                                    (openBlock(), createBlock(Fragment, null, renderList(options, (option, index) => {
                                      return createVNode(unref(Ec), {
                                        key: index,
                                        class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1",
                                        value: option
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
                                              createTextVNode(toDisplayString(option), 1)
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ]),
                                        _: 2
                                      }, 1032, ["value"]);
                                    }), 64))
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(xc), { class: "h-[1px] bg-green6 m-[5px]" }),
                                createVNode(unref(Sc), { class: "px-[25px] text-xs leading-[25px] text-mauve11" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Vegetables ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(Bc), null, {
                                  default: withCtx(() => [
                                    (openBlock(), createBlock(Fragment, null, renderList(vegetables, (option, index) => {
                                      return createVNode(unref(Ec), {
                                        key: index,
                                        class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1",
                                        value: option,
                                        disabled: option === "Courgette"
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
                                              createTextVNode(toDisplayString(option), 1)
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ]),
                                        _: 2
                                      }, 1032, ["value", "disabled"]);
                                    }), 64))
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(Ic), { class: "flex items-center justify-center h-[25px] bg-white text-violet11 cursor-default" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(Icon), { icon: "radix-icons:chevron-down" }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(Icon), { icon: "radix-icons:chevron-down" })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(Oc), { class: "flex items-center justify-center h-[25px] bg-white text-violet11 cursor-default" }, {
                            default: withCtx(() => [
                              createVNode(unref(Icon), { icon: "radix-icons:chevron-up" })
                            ]),
                            _: 1
                          }),
                          createVNode(unref(Dc), { class: "p-[5px]" }, {
                            default: withCtx(() => [
                              createVNode(unref(Sc), { class: "px-[25px] text-xs leading-[25px] text-mauve11" }, {
                                default: withCtx(() => [
                                  createTextVNode(" Fruits ")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(Bc), null, {
                                default: withCtx(() => [
                                  (openBlock(), createBlock(Fragment, null, renderList(options, (option, index) => {
                                    return createVNode(unref(Ec), {
                                      key: index,
                                      class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1",
                                      value: option
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
                                            createTextVNode(toDisplayString(option), 1)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1032, ["value"]);
                                  }), 64))
                                ]),
                                _: 1
                              }),
                              createVNode(unref(xc), { class: "h-[1px] bg-green6 m-[5px]" }),
                              createVNode(unref(Sc), { class: "px-[25px] text-xs leading-[25px] text-mauve11" }, {
                                default: withCtx(() => [
                                  createTextVNode(" Vegetables ")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(Bc), null, {
                                default: withCtx(() => [
                                  (openBlock(), createBlock(Fragment, null, renderList(vegetables, (option, index) => {
                                    return createVNode(unref(Ec), {
                                      key: index,
                                      class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1",
                                      value: option,
                                      disabled: option === "Courgette"
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
                                            createTextVNode(toDisplayString(option), 1)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1032, ["value", "disabled"]);
                                  }), 64))
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(unref(Ic), { class: "flex items-center justify-center h-[25px] bg-white text-violet11 cursor-default" }, {
                            default: withCtx(() => [
                              createVNode(unref(Icon), { icon: "radix-icons:chevron-down" })
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
                    createVNode(unref(_c), {
                      class: "min-w-[160px] bg-white rounded shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade z-[100]",
                      "side-offset": 5
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(Oc), { class: "flex items-center justify-center h-[25px] bg-white text-violet11 cursor-default" }, {
                          default: withCtx(() => [
                            createVNode(unref(Icon), { icon: "radix-icons:chevron-up" })
                          ]),
                          _: 1
                        }),
                        createVNode(unref(Dc), { class: "p-[5px]" }, {
                          default: withCtx(() => [
                            createVNode(unref(Sc), { class: "px-[25px] text-xs leading-[25px] text-mauve11" }, {
                              default: withCtx(() => [
                                createTextVNode(" Fruits ")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(Bc), null, {
                              default: withCtx(() => [
                                (openBlock(), createBlock(Fragment, null, renderList(options, (option, index) => {
                                  return createVNode(unref(Ec), {
                                    key: index,
                                    class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1",
                                    value: option
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
                                          createTextVNode(toDisplayString(option), 1)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1032, ["value"]);
                                }), 64))
                              ]),
                              _: 1
                            }),
                            createVNode(unref(xc), { class: "h-[1px] bg-green6 m-[5px]" }),
                            createVNode(unref(Sc), { class: "px-[25px] text-xs leading-[25px] text-mauve11" }, {
                              default: withCtx(() => [
                                createTextVNode(" Vegetables ")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(Bc), null, {
                              default: withCtx(() => [
                                (openBlock(), createBlock(Fragment, null, renderList(vegetables, (option, index) => {
                                  return createVNode(unref(Ec), {
                                    key: index,
                                    class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1",
                                    value: option,
                                    disabled: option === "Courgette"
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
                                          createTextVNode(toDisplayString(option), 1)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1032, ["value", "disabled"]);
                                }), 64))
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(unref(Ic), { class: "flex items-center justify-center h-[25px] bg-white text-violet11 cursor-default" }, {
                          default: withCtx(() => [
                            createVNode(unref(Icon), { icon: "radix-icons:chevron-down" })
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
              createVNode(unref(Cc), {
                class: "inline-flex min-w-[160px] items-center justify-between rounded px-[15px] text-[13px] leading-none h-[35px] gap-[5px] bg-white text-grass11 shadow-[0_2px_10px] shadow-black/10 hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-black data-[placeholder]:text-green9 outline-none",
                "aria-label": "Customise options"
              }, {
                default: withCtx(() => [
                  createVNode(unref(Ac), { placeholder: "Select a fruit..." }),
                  createVNode(unref(Icon), {
                    icon: "radix-icons:chevron-down",
                    class: "h-3.5 w-3.5"
                  })
                ]),
                _: 1
              }),
              createVNode(unref(wc), null, {
                default: withCtx(() => [
                  createVNode(unref(_c), {
                    class: "min-w-[160px] bg-white rounded shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade z-[100]",
                    "side-offset": 5
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(Oc), { class: "flex items-center justify-center h-[25px] bg-white text-violet11 cursor-default" }, {
                        default: withCtx(() => [
                          createVNode(unref(Icon), { icon: "radix-icons:chevron-up" })
                        ]),
                        _: 1
                      }),
                      createVNode(unref(Dc), { class: "p-[5px]" }, {
                        default: withCtx(() => [
                          createVNode(unref(Sc), { class: "px-[25px] text-xs leading-[25px] text-mauve11" }, {
                            default: withCtx(() => [
                              createTextVNode(" Fruits ")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(Bc), null, {
                            default: withCtx(() => [
                              (openBlock(), createBlock(Fragment, null, renderList(options, (option, index) => {
                                return createVNode(unref(Ec), {
                                  key: index,
                                  class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1",
                                  value: option
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
                                        createTextVNode(toDisplayString(option), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1032, ["value"]);
                              }), 64))
                            ]),
                            _: 1
                          }),
                          createVNode(unref(xc), { class: "h-[1px] bg-green6 m-[5px]" }),
                          createVNode(unref(Sc), { class: "px-[25px] text-xs leading-[25px] text-mauve11" }, {
                            default: withCtx(() => [
                              createTextVNode(" Vegetables ")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(Bc), null, {
                            default: withCtx(() => [
                              (openBlock(), createBlock(Fragment, null, renderList(vegetables, (option, index) => {
                                return createVNode(unref(Ec), {
                                  key: index,
                                  class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1",
                                  value: option,
                                  disabled: option === "Courgette"
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
                                        createTextVNode(toDisplayString(option), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1032, ["value", "disabled"]);
                              }), 64))
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(unref(Ic), { class: "flex items-center justify-center h-[25px] bg-white text-violet11 cursor-default" }, {
                        default: withCtx(() => [
                          createVNode(unref(Icon), { icon: "radix-icons:chevron-down" })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../components/demo/Select/tailwind/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
