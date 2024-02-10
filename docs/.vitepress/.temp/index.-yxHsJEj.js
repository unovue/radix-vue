import { defineComponent, ref, unref, mergeProps, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { Icon } from "@iconify/vue";
import { at as Cd, au as wd, av as _d, aw as $d, ax as xd, ay as Pd, az as Sd, aA as Rd, aB as kd, aC as Md, aD as Td, aE as Dd, aF as Id, aG as Ad } from "./index.faJ9MUPN.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const currentMenu = ref("");
    const checkboxOne = ref(false);
    const checkboxTwo = ref(false);
    const person = ref("pedro");
    function handleClick() {
      alert("hello!");
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Cd), mergeProps({
        modelValue: currentMenu.value,
        "onUpdate:modelValue": ($event) => currentMenu.value = $event,
        class: "flex bg-white p-[3px] rounded-md shadow-[0_2px_10px] shadow-blackA7"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(wd), { value: "file" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_d), { class: "py-2 px-3 outline-none select-none font-semibold leading-none rounded text-grass11 text-[13px] flex items-center justify-between gap-[2px] data-[highlighted]:bg-green4 data-[state=open]:bg-green4" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` File `);
                      } else {
                        return [
                          createTextVNode(" File ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref($d), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(xd), {
                          class: "min-w-[220px] outline-none bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] [animation-duration:_400ms] [animation-timing-function:_cubic-bezier(0.16,_1,_0.3,_1)] will-change-[transform,opacity]",
                          align: "start",
                          "side-offset": 5,
                          "align-offset": -3
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(Pd), { class: "group text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` New Tab <div class="ml-auto pl-5 text-mauve9 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8"${_scopeId5}> ⌘ T </div>`);
                                  } else {
                                    return [
                                      createTextVNode(" New Tab "),
                                      createVNode("div", { class: "ml-auto pl-5 text-mauve9 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8" }, " ⌘ T ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(Pd), { class: "group text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` New Window <div class="ml-auto pl-5 text-mauve9 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8"${_scopeId5}> ⌘ N </div>`);
                                  } else {
                                    return [
                                      createTextVNode(" New Window "),
                                      createVNode("div", { class: "ml-auto pl-5 text-mauve9 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8" }, " ⌘ N ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(Pd), {
                                class: "text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none",
                                disabled: ""
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` New Incognito Window `);
                                  } else {
                                    return [
                                      createTextVNode(" New Incognito Window ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(Sd), { class: "h-[1px] bg-green6 m-[5px]" }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(Rd), null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(unref(kd), { class: "group text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` Share <div class="ml-auto pl-5 text-mauve9 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8"${_scopeId6}>`);
                                          _push7(ssrRenderComponent(unref(Icon), { icon: "radix-icons:chevron-right" }, null, _parent7, _scopeId6));
                                          _push7(`</div>`);
                                        } else {
                                          return [
                                            createTextVNode(" Share "),
                                            createVNode("div", { class: "ml-auto pl-5 text-mauve9 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8" }, [
                                              createVNode(unref(Icon), { icon: "radix-icons:chevron-right" })
                                            ])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(unref($d), null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(unref(Md), {
                                            class: "min-w-[220px] outline-none bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] [animation-duration:_400ms] [animation-timing-function:_cubic-bezier(0.16,_1,_0.3,_1)] will-change-[transform,opacity]",
                                            "align-offset": -5
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(unref(Pd), { class: "text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none" }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(` Email Link `);
                                                    } else {
                                                      return [
                                                        createTextVNode(" Email Link ")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(unref(Pd), { class: "text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none" }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(` Messages `);
                                                    } else {
                                                      return [
                                                        createTextVNode(" Messages ")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(unref(Pd), { class: "text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none" }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(` Notes `);
                                                    } else {
                                                      return [
                                                        createTextVNode(" Notes ")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(unref(Pd), { class: "text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" Email Link ")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(unref(Pd), { class: "text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" Messages ")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(unref(Pd), { class: "text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" Notes ")
                                                    ]),
                                                    _: 1
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(unref(Md), {
                                              class: "min-w-[220px] outline-none bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] [animation-duration:_400ms] [animation-timing-function:_cubic-bezier(0.16,_1,_0.3,_1)] will-change-[transform,opacity]",
                                              "align-offset": -5
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(unref(Pd), { class: "text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" Email Link ")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(unref(Pd), { class: "text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" Messages ")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(unref(Pd), { class: "text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" Notes ")
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
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(unref(kd), { class: "group text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Share "),
                                          createVNode("div", { class: "ml-auto pl-5 text-mauve9 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8" }, [
                                            createVNode(unref(Icon), { icon: "radix-icons:chevron-right" })
                                          ])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(unref($d), null, {
                                        default: withCtx(() => [
                                          createVNode(unref(Md), {
                                            class: "min-w-[220px] outline-none bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] [animation-duration:_400ms] [animation-timing-function:_cubic-bezier(0.16,_1,_0.3,_1)] will-change-[transform,opacity]",
                                            "align-offset": -5
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(unref(Pd), { class: "text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none" }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" Email Link ")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(unref(Pd), { class: "text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none" }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" Messages ")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(unref(Pd), { class: "text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none" }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" Notes ")
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
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(Sd), { class: "h-[1px] bg-green6 m-[5px]" }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(Pd), { class: "group text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Print… <div class="ml-auto pl-5 text-mauve9 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8"${_scopeId5}> ⌘ P </div>`);
                                  } else {
                                    return [
                                      createTextVNode(" Print… "),
                                      createVNode("div", { class: "ml-auto pl-5 text-mauve9 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8" }, " ⌘ P ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(Pd), { class: "group text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" New Tab "),
                                    createVNode("div", { class: "ml-auto pl-5 text-mauve9 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8" }, " ⌘ T ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(Pd), { class: "group text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" New Window "),
                                    createVNode("div", { class: "ml-auto pl-5 text-mauve9 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8" }, " ⌘ N ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(Pd), {
                                  class: "text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none",
                                  disabled: ""
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" New Incognito Window ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(Sd), { class: "h-[1px] bg-green6 m-[5px]" }),
                                createVNode(unref(Rd), null, {
                                  default: withCtx(() => [
                                    createVNode(unref(kd), { class: "group text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none" }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Share "),
                                        createVNode("div", { class: "ml-auto pl-5 text-mauve9 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8" }, [
                                          createVNode(unref(Icon), { icon: "radix-icons:chevron-right" })
                                        ])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(unref($d), null, {
                                      default: withCtx(() => [
                                        createVNode(unref(Md), {
                                          class: "min-w-[220px] outline-none bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] [animation-duration:_400ms] [animation-timing-function:_cubic-bezier(0.16,_1,_0.3,_1)] will-change-[transform,opacity]",
                                          "align-offset": -5
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(unref(Pd), { class: "text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none" }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Email Link ")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(unref(Pd), { class: "text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none" }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Messages ")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(unref(Pd), { class: "text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none" }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Notes ")
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
                                }),
                                createVNode(unref(Sd), { class: "h-[1px] bg-green6 m-[5px]" }),
                                createVNode(unref(Pd), { class: "group text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Print… "),
                                    createVNode("div", { class: "ml-auto pl-5 text-mauve9 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8" }, " ⌘ P ")
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
                          createVNode(unref(xd), {
                            class: "min-w-[220px] outline-none bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] [animation-duration:_400ms] [animation-timing-function:_cubic-bezier(0.16,_1,_0.3,_1)] will-change-[transform,opacity]",
                            align: "start",
                            "side-offset": 5,
                            "align-offset": -3
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(Pd), { class: "group text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none" }, {
                                default: withCtx(() => [
                                  createTextVNode(" New Tab "),
                                  createVNode("div", { class: "ml-auto pl-5 text-mauve9 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8" }, " ⌘ T ")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(Pd), { class: "group text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none" }, {
                                default: withCtx(() => [
                                  createTextVNode(" New Window "),
                                  createVNode("div", { class: "ml-auto pl-5 text-mauve9 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8" }, " ⌘ N ")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(Pd), {
                                class: "text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none",
                                disabled: ""
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" New Incognito Window ")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(Sd), { class: "h-[1px] bg-green6 m-[5px]" }),
                              createVNode(unref(Rd), null, {
                                default: withCtx(() => [
                                  createVNode(unref(kd), { class: "group text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none" }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Share "),
                                      createVNode("div", { class: "ml-auto pl-5 text-mauve9 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8" }, [
                                        createVNode(unref(Icon), { icon: "radix-icons:chevron-right" })
                                      ])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(unref($d), null, {
                                    default: withCtx(() => [
                                      createVNode(unref(Md), {
                                        class: "min-w-[220px] outline-none bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] [animation-duration:_400ms] [animation-timing-function:_cubic-bezier(0.16,_1,_0.3,_1)] will-change-[transform,opacity]",
                                        "align-offset": -5
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(unref(Pd), { class: "text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none" }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Email Link ")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(unref(Pd), { class: "text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none" }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Messages ")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(unref(Pd), { class: "text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none" }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Notes ")
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
                              }),
                              createVNode(unref(Sd), { class: "h-[1px] bg-green6 m-[5px]" }),
                              createVNode(unref(Pd), { class: "group text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none" }, {
                                default: withCtx(() => [
                                  createTextVNode(" Print… "),
                                  createVNode("div", { class: "ml-auto pl-5 text-mauve9 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8" }, " ⌘ P ")
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
                    createVNode(unref(_d), { class: "py-2 px-3 outline-none select-none font-semibold leading-none rounded text-grass11 text-[13px] flex items-center justify-between gap-[2px] data-[highlighted]:bg-green4 data-[state=open]:bg-green4" }, {
                      default: withCtx(() => [
                        createTextVNode(" File ")
                      ]),
                      _: 1
                    }),
                    createVNode(unref($d), null, {
                      default: withCtx(() => [
                        createVNode(unref(xd), {
                          class: "min-w-[220px] outline-none bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] [animation-duration:_400ms] [animation-timing-function:_cubic-bezier(0.16,_1,_0.3,_1)] will-change-[transform,opacity]",
                          align: "start",
                          "side-offset": 5,
                          "align-offset": -3
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(Pd), { class: "group text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none" }, {
                              default: withCtx(() => [
                                createTextVNode(" New Tab "),
                                createVNode("div", { class: "ml-auto pl-5 text-mauve9 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8" }, " ⌘ T ")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(Pd), { class: "group text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none" }, {
                              default: withCtx(() => [
                                createTextVNode(" New Window "),
                                createVNode("div", { class: "ml-auto pl-5 text-mauve9 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8" }, " ⌘ N ")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(Pd), {
                              class: "text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none",
                              disabled: ""
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" New Incognito Window ")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(Sd), { class: "h-[1px] bg-green6 m-[5px]" }),
                            createVNode(unref(Rd), null, {
                              default: withCtx(() => [
                                createVNode(unref(kd), { class: "group text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Share "),
                                    createVNode("div", { class: "ml-auto pl-5 text-mauve9 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8" }, [
                                      createVNode(unref(Icon), { icon: "radix-icons:chevron-right" })
                                    ])
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref($d), null, {
                                  default: withCtx(() => [
                                    createVNode(unref(Md), {
                                      class: "min-w-[220px] outline-none bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] [animation-duration:_400ms] [animation-timing-function:_cubic-bezier(0.16,_1,_0.3,_1)] will-change-[transform,opacity]",
                                      "align-offset": -5
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(unref(Pd), { class: "text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none" }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Email Link ")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(unref(Pd), { class: "text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none" }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Messages ")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(unref(Pd), { class: "text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none" }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Notes ")
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
                            }),
                            createVNode(unref(Sd), { class: "h-[1px] bg-green6 m-[5px]" }),
                            createVNode(unref(Pd), { class: "group text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none" }, {
                              default: withCtx(() => [
                                createTextVNode(" Print… "),
                                createVNode("div", { class: "ml-auto pl-5 text-mauve9 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8" }, " ⌘ P ")
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
            _push2(ssrRenderComponent(unref(wd), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_d), { class: "py-2 px-3 outline-none select-none font-semibold leading-none rounded text-grass11 text-[13px] flex items-center justify-between gap-[2px] data-[highlighted]:bg-green4 data-[state=open]:bg-green4" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Edit `);
                      } else {
                        return [
                          createTextVNode(" Edit ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref($d), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(xd), {
                          class: "min-w-[220px] outline-none bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] [animation-duration:_400ms] [animation-timing-function:_cubic-bezier(0.16,_1,_0.3,_1)] will-change-[transform,opacity]",
                          align: "start",
                          "side-offset": 5,
                          "align-offset": -3
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(Pd), { class: "group text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Undo <div class="ml-auto pl-5 text-mauve9 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8"${_scopeId5}> ⌘ Z </div>`);
                                  } else {
                                    return [
                                      createTextVNode(" Undo "),
                                      createVNode("div", { class: "ml-auto pl-5 text-mauve9 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8" }, " ⌘ Z ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(Pd), { class: "group text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Redo <div class="ml-auto pl-5 text-mauve9 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8"${_scopeId5}> ⇧ ⌘ Z </div>`);
                                  } else {
                                    return [
                                      createTextVNode(" Redo "),
                                      createVNode("div", { class: "ml-auto pl-5 text-mauve9 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8" }, " ⇧ ⌘ Z ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(Sd), { class: "h-[1px] bg-green6 m-[5px]" }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(Rd), null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(unref(kd), { class: "group text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` Find <div class="ml-auto pl-5 text-mauve9 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8"${_scopeId6}>`);
                                          _push7(ssrRenderComponent(unref(Icon), { icon: "radix-icons:chevron-right" }, null, _parent7, _scopeId6));
                                          _push7(`</div>`);
                                        } else {
                                          return [
                                            createTextVNode(" Find "),
                                            createVNode("div", { class: "ml-auto pl-5 text-mauve9 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8" }, [
                                              createVNode(unref(Icon), { icon: "radix-icons:chevron-right" })
                                            ])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(unref($d), null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(unref(Md), {
                                            class: "min-w-[220px] outline-none bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] [animation-duration:_400ms] [animation-timing-function:_cubic-bezier(0.16,_1,_0.3,_1)] will-change-[transform,opacity]",
                                            "align-offset": -5
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(unref(Pd), { class: "group text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none" }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(` Search the web… `);
                                                    } else {
                                                      return [
                                                        createTextVNode(" Search the web… ")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(unref(Sd), { class: "h-[1px] bg-green6 m-[5px]" }, null, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(unref(Pd), { class: "text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none" }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(` Find… `);
                                                    } else {
                                                      return [
                                                        createTextVNode(" Find… ")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(unref(Pd), { class: "text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none" }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(` Find Next `);
                                                    } else {
                                                      return [
                                                        createTextVNode(" Find Next ")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(unref(Pd), { class: "text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none" }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(` Find Previous `);
                                                    } else {
                                                      return [
                                                        createTextVNode(" Find Previous ")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(unref(Pd), { class: "group text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" Search the web… ")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(unref(Sd), { class: "h-[1px] bg-green6 m-[5px]" }),
                                                  createVNode(unref(Pd), { class: "text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" Find… ")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(unref(Pd), { class: "text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" Find Next ")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(unref(Pd), { class: "text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" Find Previous ")
                                                    ]),
                                                    _: 1
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(unref(Md), {
                                              class: "min-w-[220px] outline-none bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] [animation-duration:_400ms] [animation-timing-function:_cubic-bezier(0.16,_1,_0.3,_1)] will-change-[transform,opacity]",
                                              "align-offset": -5
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(unref(Pd), { class: "group text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" Search the web… ")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(unref(Sd), { class: "h-[1px] bg-green6 m-[5px]" }),
                                                createVNode(unref(Pd), { class: "text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" Find… ")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(unref(Pd), { class: "text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" Find Next ")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(unref(Pd), { class: "text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" Find Previous ")
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
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(unref(kd), { class: "group text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Find "),
                                          createVNode("div", { class: "ml-auto pl-5 text-mauve9 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8" }, [
                                            createVNode(unref(Icon), { icon: "radix-icons:chevron-right" })
                                          ])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(unref($d), null, {
                                        default: withCtx(() => [
                                          createVNode(unref(Md), {
                                            class: "min-w-[220px] outline-none bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] [animation-duration:_400ms] [animation-timing-function:_cubic-bezier(0.16,_1,_0.3,_1)] will-change-[transform,opacity]",
                                            "align-offset": -5
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(unref(Pd), { class: "group text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none" }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" Search the web… ")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(unref(Sd), { class: "h-[1px] bg-green6 m-[5px]" }),
                                              createVNode(unref(Pd), { class: "text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none" }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" Find… ")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(unref(Pd), { class: "text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none" }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" Find Next ")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(unref(Pd), { class: "text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none" }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" Find Previous ")
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
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(Sd), { class: "h-[1px] bg-green6 m-[5px]" }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(Pd), { class: "text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Cut `);
                                  } else {
                                    return [
                                      createTextVNode(" Cut ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(Pd), { class: "text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Copy `);
                                  } else {
                                    return [
                                      createTextVNode(" Copy ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(Pd), { class: "text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Paste `);
                                  } else {
                                    return [
                                      createTextVNode(" Paste ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(Pd), { class: "group text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Undo "),
                                    createVNode("div", { class: "ml-auto pl-5 text-mauve9 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8" }, " ⌘ Z ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(Pd), { class: "group text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Redo "),
                                    createVNode("div", { class: "ml-auto pl-5 text-mauve9 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8" }, " ⇧ ⌘ Z ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(Sd), { class: "h-[1px] bg-green6 m-[5px]" }),
                                createVNode(unref(Rd), null, {
                                  default: withCtx(() => [
                                    createVNode(unref(kd), { class: "group text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none" }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Find "),
                                        createVNode("div", { class: "ml-auto pl-5 text-mauve9 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8" }, [
                                          createVNode(unref(Icon), { icon: "radix-icons:chevron-right" })
                                        ])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(unref($d), null, {
                                      default: withCtx(() => [
                                        createVNode(unref(Md), {
                                          class: "min-w-[220px] outline-none bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] [animation-duration:_400ms] [animation-timing-function:_cubic-bezier(0.16,_1,_0.3,_1)] will-change-[transform,opacity]",
                                          "align-offset": -5
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(unref(Pd), { class: "group text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none" }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Search the web… ")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(unref(Sd), { class: "h-[1px] bg-green6 m-[5px]" }),
                                            createVNode(unref(Pd), { class: "text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none" }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Find… ")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(unref(Pd), { class: "text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none" }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Find Next ")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(unref(Pd), { class: "text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none" }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Find Previous ")
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
                                }),
                                createVNode(unref(Sd), { class: "h-[1px] bg-green6 m-[5px]" }),
                                createVNode(unref(Pd), { class: "text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Cut ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(Pd), { class: "text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Copy ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(Pd), { class: "text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Paste ")
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
                          createVNode(unref(xd), {
                            class: "min-w-[220px] outline-none bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] [animation-duration:_400ms] [animation-timing-function:_cubic-bezier(0.16,_1,_0.3,_1)] will-change-[transform,opacity]",
                            align: "start",
                            "side-offset": 5,
                            "align-offset": -3
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(Pd), { class: "group text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none" }, {
                                default: withCtx(() => [
                                  createTextVNode(" Undo "),
                                  createVNode("div", { class: "ml-auto pl-5 text-mauve9 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8" }, " ⌘ Z ")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(Pd), { class: "group text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none" }, {
                                default: withCtx(() => [
                                  createTextVNode(" Redo "),
                                  createVNode("div", { class: "ml-auto pl-5 text-mauve9 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8" }, " ⇧ ⌘ Z ")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(Sd), { class: "h-[1px] bg-green6 m-[5px]" }),
                              createVNode(unref(Rd), null, {
                                default: withCtx(() => [
                                  createVNode(unref(kd), { class: "group text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none" }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Find "),
                                      createVNode("div", { class: "ml-auto pl-5 text-mauve9 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8" }, [
                                        createVNode(unref(Icon), { icon: "radix-icons:chevron-right" })
                                      ])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(unref($d), null, {
                                    default: withCtx(() => [
                                      createVNode(unref(Md), {
                                        class: "min-w-[220px] outline-none bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] [animation-duration:_400ms] [animation-timing-function:_cubic-bezier(0.16,_1,_0.3,_1)] will-change-[transform,opacity]",
                                        "align-offset": -5
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(unref(Pd), { class: "group text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none" }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Search the web… ")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(unref(Sd), { class: "h-[1px] bg-green6 m-[5px]" }),
                                          createVNode(unref(Pd), { class: "text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none" }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Find… ")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(unref(Pd), { class: "text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none" }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Find Next ")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(unref(Pd), { class: "text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none" }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Find Previous ")
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
                              }),
                              createVNode(unref(Sd), { class: "h-[1px] bg-green6 m-[5px]" }),
                              createVNode(unref(Pd), { class: "text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none" }, {
                                default: withCtx(() => [
                                  createTextVNode(" Cut ")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(Pd), { class: "text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none" }, {
                                default: withCtx(() => [
                                  createTextVNode(" Copy ")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(Pd), { class: "text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none" }, {
                                default: withCtx(() => [
                                  createTextVNode(" Paste ")
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
                    createVNode(unref(_d), { class: "py-2 px-3 outline-none select-none font-semibold leading-none rounded text-grass11 text-[13px] flex items-center justify-between gap-[2px] data-[highlighted]:bg-green4 data-[state=open]:bg-green4" }, {
                      default: withCtx(() => [
                        createTextVNode(" Edit ")
                      ]),
                      _: 1
                    }),
                    createVNode(unref($d), null, {
                      default: withCtx(() => [
                        createVNode(unref(xd), {
                          class: "min-w-[220px] outline-none bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] [animation-duration:_400ms] [animation-timing-function:_cubic-bezier(0.16,_1,_0.3,_1)] will-change-[transform,opacity]",
                          align: "start",
                          "side-offset": 5,
                          "align-offset": -3
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(Pd), { class: "group text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none" }, {
                              default: withCtx(() => [
                                createTextVNode(" Undo "),
                                createVNode("div", { class: "ml-auto pl-5 text-mauve9 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8" }, " ⌘ Z ")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(Pd), { class: "group text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none" }, {
                              default: withCtx(() => [
                                createTextVNode(" Redo "),
                                createVNode("div", { class: "ml-auto pl-5 text-mauve9 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8" }, " ⇧ ⌘ Z ")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(Sd), { class: "h-[1px] bg-green6 m-[5px]" }),
                            createVNode(unref(Rd), null, {
                              default: withCtx(() => [
                                createVNode(unref(kd), { class: "group text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Find "),
                                    createVNode("div", { class: "ml-auto pl-5 text-mauve9 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8" }, [
                                      createVNode(unref(Icon), { icon: "radix-icons:chevron-right" })
                                    ])
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref($d), null, {
                                  default: withCtx(() => [
                                    createVNode(unref(Md), {
                                      class: "min-w-[220px] outline-none bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] [animation-duration:_400ms] [animation-timing-function:_cubic-bezier(0.16,_1,_0.3,_1)] will-change-[transform,opacity]",
                                      "align-offset": -5
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(unref(Pd), { class: "group text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none" }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Search the web… ")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(unref(Sd), { class: "h-[1px] bg-green6 m-[5px]" }),
                                        createVNode(unref(Pd), { class: "text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none" }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Find… ")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(unref(Pd), { class: "text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none" }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Find Next ")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(unref(Pd), { class: "text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none" }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Find Previous ")
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
                            }),
                            createVNode(unref(Sd), { class: "h-[1px] bg-green6 m-[5px]" }),
                            createVNode(unref(Pd), { class: "text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none" }, {
                              default: withCtx(() => [
                                createTextVNode(" Cut ")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(Pd), { class: "text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none" }, {
                              default: withCtx(() => [
                                createTextVNode(" Copy ")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(Pd), { class: "text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none" }, {
                              default: withCtx(() => [
                                createTextVNode(" Paste ")
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
            _push2(ssrRenderComponent(unref(wd), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_d), { class: "py-2 px-3 outline-none select-none font-semibold leading-none rounded text-grass11 text-[13px] flex items-center justify-between gap-[2px] data-[highlighted]:bg-green4 data-[state=open]:bg-green4" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` View `);
                      } else {
                        return [
                          createTextVNode(" View ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref($d), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(xd), {
                          class: "min-w-[220px] outline-none bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] [animation-duration:_400ms] [animation-timing-function:_cubic-bezier(0.16,_1,_0.3,_1)] will-change-[transform,opacity]",
                          align: "start",
                          "side-offset": 5,
                          "align-offset": -14
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(Td), {
                                modelValue: checkboxOne.value,
                                "onUpdate:modelValue": ($event) => checkboxOne.value = $event,
                                class: "group text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[20px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(unref(Dd), { class: "absolute left-0 w-[20px] inline-flex items-center justify-center" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(unref(Icon), { icon: "radix-icons:check" }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(unref(Icon), { icon: "radix-icons:check" })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(` Show Bookmarks <div class="ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8"${_scopeId5}> ⌘+B </div>`);
                                  } else {
                                    return [
                                      createVNode(unref(Dd), { class: "absolute left-0 w-[20px] inline-flex items-center justify-center" }, {
                                        default: withCtx(() => [
                                          createVNode(unref(Icon), { icon: "radix-icons:check" })
                                        ]),
                                        _: 1
                                      }),
                                      createTextVNode(" Show Bookmarks "),
                                      createVNode("div", { class: "ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8" }, " ⌘+B ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(Td), {
                                modelValue: checkboxTwo.value,
                                "onUpdate:modelValue": ($event) => checkboxTwo.value = $event,
                                class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[20px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(unref(Dd), { class: "absolute left-0 w-[20px] inline-flex items-center justify-center" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(unref(Icon), { icon: "radix-icons:check" }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(unref(Icon), { icon: "radix-icons:check" })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(` Show Full URLs `);
                                  } else {
                                    return [
                                      createVNode(unref(Dd), { class: "absolute left-0 w-[20px] inline-flex items-center justify-center" }, {
                                        default: withCtx(() => [
                                          createVNode(unref(Icon), { icon: "radix-icons:check" })
                                        ]),
                                        _: 1
                                      }),
                                      createTextVNode(" Show Full URLs ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(Sd), { class: "h-[1px] bg-green6 m-[5px]" }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(Pd), { class: "group text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none pl-5 outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Reload <div class="ml-auto pl-5 text-mauve9 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8"${_scopeId5}> ⌘ R </div>`);
                                  } else {
                                    return [
                                      createTextVNode(" Reload "),
                                      createVNode("div", { class: "ml-auto pl-5 text-mauve9 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8" }, " ⌘ R ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(Pd), {
                                class: "group text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none pl-5 outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none",
                                disabled: ""
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Force Reload <div class="ml-auto pl-5 text-mauve9 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8"${_scopeId5}> ⇧ ⌘ R </div>`);
                                  } else {
                                    return [
                                      createTextVNode(" Force Reload "),
                                      createVNode("div", { class: "ml-auto pl-5 text-mauve9 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8" }, " ⇧ ⌘ R ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(Sd), { class: "h-[1px] bg-green6 m-[5px]" }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(Pd), { class: "text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none pl-5 outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Toggle Fullscreen `);
                                  } else {
                                    return [
                                      createTextVNode(" Toggle Fullscreen ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(Sd), { class: "h-[1px] bg-green6 m-[5px]" }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(Pd), { class: "text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none pl-5 outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Hide Sidebar `);
                                  } else {
                                    return [
                                      createTextVNode(" Hide Sidebar ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(Td), {
                                  modelValue: checkboxOne.value,
                                  "onUpdate:modelValue": ($event) => checkboxOne.value = $event,
                                  class: "group text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[20px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(Dd), { class: "absolute left-0 w-[20px] inline-flex items-center justify-center" }, {
                                      default: withCtx(() => [
                                        createVNode(unref(Icon), { icon: "radix-icons:check" })
                                      ]),
                                      _: 1
                                    }),
                                    createTextVNode(" Show Bookmarks "),
                                    createVNode("div", { class: "ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8" }, " ⌘+B ")
                                  ]),
                                  _: 1
                                }, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(unref(Td), {
                                  modelValue: checkboxTwo.value,
                                  "onUpdate:modelValue": ($event) => checkboxTwo.value = $event,
                                  class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[20px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(Dd), { class: "absolute left-0 w-[20px] inline-flex items-center justify-center" }, {
                                      default: withCtx(() => [
                                        createVNode(unref(Icon), { icon: "radix-icons:check" })
                                      ]),
                                      _: 1
                                    }),
                                    createTextVNode(" Show Full URLs ")
                                  ]),
                                  _: 1
                                }, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(unref(Sd), { class: "h-[1px] bg-green6 m-[5px]" }),
                                createVNode(unref(Pd), { class: "group text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none pl-5 outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Reload "),
                                    createVNode("div", { class: "ml-auto pl-5 text-mauve9 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8" }, " ⌘ R ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(Pd), {
                                  class: "group text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none pl-5 outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none",
                                  disabled: ""
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Force Reload "),
                                    createVNode("div", { class: "ml-auto pl-5 text-mauve9 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8" }, " ⇧ ⌘ R ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(Sd), { class: "h-[1px] bg-green6 m-[5px]" }),
                                createVNode(unref(Pd), { class: "text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none pl-5 outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Toggle Fullscreen ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(Sd), { class: "h-[1px] bg-green6 m-[5px]" }),
                                createVNode(unref(Pd), { class: "text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none pl-5 outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Hide Sidebar ")
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
                          createVNode(unref(xd), {
                            class: "min-w-[220px] outline-none bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] [animation-duration:_400ms] [animation-timing-function:_cubic-bezier(0.16,_1,_0.3,_1)] will-change-[transform,opacity]",
                            align: "start",
                            "side-offset": 5,
                            "align-offset": -14
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(Td), {
                                modelValue: checkboxOne.value,
                                "onUpdate:modelValue": ($event) => checkboxOne.value = $event,
                                class: "group text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[20px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1"
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(Dd), { class: "absolute left-0 w-[20px] inline-flex items-center justify-center" }, {
                                    default: withCtx(() => [
                                      createVNode(unref(Icon), { icon: "radix-icons:check" })
                                    ]),
                                    _: 1
                                  }),
                                  createTextVNode(" Show Bookmarks "),
                                  createVNode("div", { class: "ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8" }, " ⌘+B ")
                                ]),
                                _: 1
                              }, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode(unref(Td), {
                                modelValue: checkboxTwo.value,
                                "onUpdate:modelValue": ($event) => checkboxTwo.value = $event,
                                class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[20px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1"
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(Dd), { class: "absolute left-0 w-[20px] inline-flex items-center justify-center" }, {
                                    default: withCtx(() => [
                                      createVNode(unref(Icon), { icon: "radix-icons:check" })
                                    ]),
                                    _: 1
                                  }),
                                  createTextVNode(" Show Full URLs ")
                                ]),
                                _: 1
                              }, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode(unref(Sd), { class: "h-[1px] bg-green6 m-[5px]" }),
                              createVNode(unref(Pd), { class: "group text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none pl-5 outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none" }, {
                                default: withCtx(() => [
                                  createTextVNode(" Reload "),
                                  createVNode("div", { class: "ml-auto pl-5 text-mauve9 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8" }, " ⌘ R ")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(Pd), {
                                class: "group text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none pl-5 outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none",
                                disabled: ""
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Force Reload "),
                                  createVNode("div", { class: "ml-auto pl-5 text-mauve9 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8" }, " ⇧ ⌘ R ")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(Sd), { class: "h-[1px] bg-green6 m-[5px]" }),
                              createVNode(unref(Pd), { class: "text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none pl-5 outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none" }, {
                                default: withCtx(() => [
                                  createTextVNode(" Toggle Fullscreen ")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(Sd), { class: "h-[1px] bg-green6 m-[5px]" }),
                              createVNode(unref(Pd), { class: "text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none pl-5 outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none" }, {
                                default: withCtx(() => [
                                  createTextVNode(" Hide Sidebar ")
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
                    createVNode(unref(_d), { class: "py-2 px-3 outline-none select-none font-semibold leading-none rounded text-grass11 text-[13px] flex items-center justify-between gap-[2px] data-[highlighted]:bg-green4 data-[state=open]:bg-green4" }, {
                      default: withCtx(() => [
                        createTextVNode(" View ")
                      ]),
                      _: 1
                    }),
                    createVNode(unref($d), null, {
                      default: withCtx(() => [
                        createVNode(unref(xd), {
                          class: "min-w-[220px] outline-none bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] [animation-duration:_400ms] [animation-timing-function:_cubic-bezier(0.16,_1,_0.3,_1)] will-change-[transform,opacity]",
                          align: "start",
                          "side-offset": 5,
                          "align-offset": -14
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(Td), {
                              modelValue: checkboxOne.value,
                              "onUpdate:modelValue": ($event) => checkboxOne.value = $event,
                              class: "group text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[20px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1"
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(Dd), { class: "absolute left-0 w-[20px] inline-flex items-center justify-center" }, {
                                  default: withCtx(() => [
                                    createVNode(unref(Icon), { icon: "radix-icons:check" })
                                  ]),
                                  _: 1
                                }),
                                createTextVNode(" Show Bookmarks "),
                                createVNode("div", { class: "ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8" }, " ⌘+B ")
                              ]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(unref(Td), {
                              modelValue: checkboxTwo.value,
                              "onUpdate:modelValue": ($event) => checkboxTwo.value = $event,
                              class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[20px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1"
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(Dd), { class: "absolute left-0 w-[20px] inline-flex items-center justify-center" }, {
                                  default: withCtx(() => [
                                    createVNode(unref(Icon), { icon: "radix-icons:check" })
                                  ]),
                                  _: 1
                                }),
                                createTextVNode(" Show Full URLs ")
                              ]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(unref(Sd), { class: "h-[1px] bg-green6 m-[5px]" }),
                            createVNode(unref(Pd), { class: "group text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none pl-5 outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none" }, {
                              default: withCtx(() => [
                                createTextVNode(" Reload "),
                                createVNode("div", { class: "ml-auto pl-5 text-mauve9 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8" }, " ⌘ R ")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(Pd), {
                              class: "group text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none pl-5 outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none",
                              disabled: ""
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Force Reload "),
                                createVNode("div", { class: "ml-auto pl-5 text-mauve9 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8" }, " ⇧ ⌘ R ")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(Sd), { class: "h-[1px] bg-green6 m-[5px]" }),
                            createVNode(unref(Pd), { class: "text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none pl-5 outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none" }, {
                              default: withCtx(() => [
                                createTextVNode(" Toggle Fullscreen ")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(Sd), { class: "h-[1px] bg-green6 m-[5px]" }),
                            createVNode(unref(Pd), { class: "text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none pl-5 outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none" }, {
                              default: withCtx(() => [
                                createTextVNode(" Hide Sidebar ")
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
            _push2(ssrRenderComponent(unref(wd), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_d), { class: "py-2 px-3 outline-none select-none font-semibold leading-none rounded text-grass11 text-[13px] flex items-center justify-between gap-[2px] data-[highlighted]:bg-green4 data-[state=open]:bg-green4" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Profiles `);
                      } else {
                        return [
                          createTextVNode(" Profiles ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref($d), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(xd), {
                          class: "min-w-[220px] outline-none bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] [animation-duration:_400ms] [animation-timing-function:_cubic-bezier(0.16,_1,_0.3,_1)] will-change-[transform,opacity]",
                          align: "start",
                          "side-offset": 5,
                          "align-offset": -14
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(Id), {
                                modelValue: person.value,
                                "onUpdate:modelValue": ($event) => person.value = $event
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(unref(Ad), {
                                      class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[20px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1",
                                      value: "pedro"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(unref(Dd), { class: "absolute left-0 w-[20px] inline-flex items-center justify-center" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(unref(Icon), { icon: "radix-icons:dot-filled" }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(unref(Icon), { icon: "radix-icons:dot-filled" })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(` Pedro Duarte `);
                                        } else {
                                          return [
                                            createVNode(unref(Dd), { class: "absolute left-0 w-[20px] inline-flex items-center justify-center" }, {
                                              default: withCtx(() => [
                                                createVNode(unref(Icon), { icon: "radix-icons:dot-filled" })
                                              ]),
                                              _: 1
                                            }),
                                            createTextVNode(" Pedro Duarte ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(unref(Ad), {
                                      class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[20px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1",
                                      value: "colm"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(unref(Dd), { class: "absolute left-0 w-[20px] inline-flex items-center justify-center" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(unref(Icon), { icon: "radix-icons:dot-filled" }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(unref(Icon), { icon: "radix-icons:dot-filled" })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(` Colm Tuite `);
                                        } else {
                                          return [
                                            createVNode(unref(Dd), { class: "absolute left-0 w-[20px] inline-flex items-center justify-center" }, {
                                              default: withCtx(() => [
                                                createVNode(unref(Icon), { icon: "radix-icons:dot-filled" })
                                              ]),
                                              _: 1
                                            }),
                                            createTextVNode(" Colm Tuite ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(unref(Ad), {
                                        class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[20px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1",
                                        value: "pedro"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(unref(Dd), { class: "absolute left-0 w-[20px] inline-flex items-center justify-center" }, {
                                            default: withCtx(() => [
                                              createVNode(unref(Icon), { icon: "radix-icons:dot-filled" })
                                            ]),
                                            _: 1
                                          }),
                                          createTextVNode(" Pedro Duarte ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(unref(Ad), {
                                        class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[20px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1",
                                        value: "colm"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(unref(Dd), { class: "absolute left-0 w-[20px] inline-flex items-center justify-center" }, {
                                            default: withCtx(() => [
                                              createVNode(unref(Icon), { icon: "radix-icons:dot-filled" })
                                            ]),
                                            _: 1
                                          }),
                                          createTextVNode(" Colm Tuite ")
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(Sd), { class: "h-[1px] bg-green6 m-[5px]" }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(Pd), {
                                class: "text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none pl-5 outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none",
                                onClick: handleClick
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Edit… `);
                                  } else {
                                    return [
                                      createTextVNode(" Edit… ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(Sd), { class: "h-[1px] bg-green6 m-[5px]" }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(Pd), { class: "text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none pl-5 outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Add Profile… `);
                                  } else {
                                    return [
                                      createTextVNode(" Add Profile… ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(Id), {
                                  modelValue: person.value,
                                  "onUpdate:modelValue": ($event) => person.value = $event
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(Ad), {
                                      class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[20px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1",
                                      value: "pedro"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(unref(Dd), { class: "absolute left-0 w-[20px] inline-flex items-center justify-center" }, {
                                          default: withCtx(() => [
                                            createVNode(unref(Icon), { icon: "radix-icons:dot-filled" })
                                          ]),
                                          _: 1
                                        }),
                                        createTextVNode(" Pedro Duarte ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(unref(Ad), {
                                      class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[20px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1",
                                      value: "colm"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(unref(Dd), { class: "absolute left-0 w-[20px] inline-flex items-center justify-center" }, {
                                          default: withCtx(() => [
                                            createVNode(unref(Icon), { icon: "radix-icons:dot-filled" })
                                          ]),
                                          _: 1
                                        }),
                                        createTextVNode(" Colm Tuite ")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(unref(Sd), { class: "h-[1px] bg-green6 m-[5px]" }),
                                createVNode(unref(Pd), {
                                  class: "text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none pl-5 outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none",
                                  onClick: handleClick
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Edit… ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(Sd), { class: "h-[1px] bg-green6 m-[5px]" }),
                                createVNode(unref(Pd), { class: "text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none pl-5 outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Add Profile… ")
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
                          createVNode(unref(xd), {
                            class: "min-w-[220px] outline-none bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] [animation-duration:_400ms] [animation-timing-function:_cubic-bezier(0.16,_1,_0.3,_1)] will-change-[transform,opacity]",
                            align: "start",
                            "side-offset": 5,
                            "align-offset": -14
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(Id), {
                                modelValue: person.value,
                                "onUpdate:modelValue": ($event) => person.value = $event
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(Ad), {
                                    class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[20px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1",
                                    value: "pedro"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(Dd), { class: "absolute left-0 w-[20px] inline-flex items-center justify-center" }, {
                                        default: withCtx(() => [
                                          createVNode(unref(Icon), { icon: "radix-icons:dot-filled" })
                                        ]),
                                        _: 1
                                      }),
                                      createTextVNode(" Pedro Duarte ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(unref(Ad), {
                                    class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[20px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1",
                                    value: "colm"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(Dd), { class: "absolute left-0 w-[20px] inline-flex items-center justify-center" }, {
                                        default: withCtx(() => [
                                          createVNode(unref(Icon), { icon: "radix-icons:dot-filled" })
                                        ]),
                                        _: 1
                                      }),
                                      createTextVNode(" Colm Tuite ")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode(unref(Sd), { class: "h-[1px] bg-green6 m-[5px]" }),
                              createVNode(unref(Pd), {
                                class: "text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none pl-5 outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none",
                                onClick: handleClick
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Edit… ")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(Sd), { class: "h-[1px] bg-green6 m-[5px]" }),
                              createVNode(unref(Pd), { class: "text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none pl-5 outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none" }, {
                                default: withCtx(() => [
                                  createTextVNode(" Add Profile… ")
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
                    createVNode(unref(_d), { class: "py-2 px-3 outline-none select-none font-semibold leading-none rounded text-grass11 text-[13px] flex items-center justify-between gap-[2px] data-[highlighted]:bg-green4 data-[state=open]:bg-green4" }, {
                      default: withCtx(() => [
                        createTextVNode(" Profiles ")
                      ]),
                      _: 1
                    }),
                    createVNode(unref($d), null, {
                      default: withCtx(() => [
                        createVNode(unref(xd), {
                          class: "min-w-[220px] outline-none bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] [animation-duration:_400ms] [animation-timing-function:_cubic-bezier(0.16,_1,_0.3,_1)] will-change-[transform,opacity]",
                          align: "start",
                          "side-offset": 5,
                          "align-offset": -14
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(Id), {
                              modelValue: person.value,
                              "onUpdate:modelValue": ($event) => person.value = $event
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(Ad), {
                                  class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[20px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1",
                                  value: "pedro"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(Dd), { class: "absolute left-0 w-[20px] inline-flex items-center justify-center" }, {
                                      default: withCtx(() => [
                                        createVNode(unref(Icon), { icon: "radix-icons:dot-filled" })
                                      ]),
                                      _: 1
                                    }),
                                    createTextVNode(" Pedro Duarte ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(Ad), {
                                  class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[20px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1",
                                  value: "colm"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(Dd), { class: "absolute left-0 w-[20px] inline-flex items-center justify-center" }, {
                                      default: withCtx(() => [
                                        createVNode(unref(Icon), { icon: "radix-icons:dot-filled" })
                                      ]),
                                      _: 1
                                    }),
                                    createTextVNode(" Colm Tuite ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(unref(Sd), { class: "h-[1px] bg-green6 m-[5px]" }),
                            createVNode(unref(Pd), {
                              class: "text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none pl-5 outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none",
                              onClick: handleClick
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Edit… ")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(Sd), { class: "h-[1px] bg-green6 m-[5px]" }),
                            createVNode(unref(Pd), { class: "text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none pl-5 outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none" }, {
                              default: withCtx(() => [
                                createTextVNode(" Add Profile… ")
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
          } else {
            return [
              createVNode(unref(wd), { value: "file" }, {
                default: withCtx(() => [
                  createVNode(unref(_d), { class: "py-2 px-3 outline-none select-none font-semibold leading-none rounded text-grass11 text-[13px] flex items-center justify-between gap-[2px] data-[highlighted]:bg-green4 data-[state=open]:bg-green4" }, {
                    default: withCtx(() => [
                      createTextVNode(" File ")
                    ]),
                    _: 1
                  }),
                  createVNode(unref($d), null, {
                    default: withCtx(() => [
                      createVNode(unref(xd), {
                        class: "min-w-[220px] outline-none bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] [animation-duration:_400ms] [animation-timing-function:_cubic-bezier(0.16,_1,_0.3,_1)] will-change-[transform,opacity]",
                        align: "start",
                        "side-offset": 5,
                        "align-offset": -3
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(Pd), { class: "group text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none" }, {
                            default: withCtx(() => [
                              createTextVNode(" New Tab "),
                              createVNode("div", { class: "ml-auto pl-5 text-mauve9 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8" }, " ⌘ T ")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(Pd), { class: "group text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none" }, {
                            default: withCtx(() => [
                              createTextVNode(" New Window "),
                              createVNode("div", { class: "ml-auto pl-5 text-mauve9 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8" }, " ⌘ N ")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(Pd), {
                            class: "text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none",
                            disabled: ""
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" New Incognito Window ")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(Sd), { class: "h-[1px] bg-green6 m-[5px]" }),
                          createVNode(unref(Rd), null, {
                            default: withCtx(() => [
                              createVNode(unref(kd), { class: "group text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none" }, {
                                default: withCtx(() => [
                                  createTextVNode(" Share "),
                                  createVNode("div", { class: "ml-auto pl-5 text-mauve9 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8" }, [
                                    createVNode(unref(Icon), { icon: "radix-icons:chevron-right" })
                                  ])
                                ]),
                                _: 1
                              }),
                              createVNode(unref($d), null, {
                                default: withCtx(() => [
                                  createVNode(unref(Md), {
                                    class: "min-w-[220px] outline-none bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] [animation-duration:_400ms] [animation-timing-function:_cubic-bezier(0.16,_1,_0.3,_1)] will-change-[transform,opacity]",
                                    "align-offset": -5
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(Pd), { class: "text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Email Link ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(unref(Pd), { class: "text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Messages ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(unref(Pd), { class: "text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Notes ")
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
                          }),
                          createVNode(unref(Sd), { class: "h-[1px] bg-green6 m-[5px]" }),
                          createVNode(unref(Pd), { class: "group text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none" }, {
                            default: withCtx(() => [
                              createTextVNode(" Print… "),
                              createVNode("div", { class: "ml-auto pl-5 text-mauve9 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8" }, " ⌘ P ")
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
              }),
              createVNode(unref(wd), null, {
                default: withCtx(() => [
                  createVNode(unref(_d), { class: "py-2 px-3 outline-none select-none font-semibold leading-none rounded text-grass11 text-[13px] flex items-center justify-between gap-[2px] data-[highlighted]:bg-green4 data-[state=open]:bg-green4" }, {
                    default: withCtx(() => [
                      createTextVNode(" Edit ")
                    ]),
                    _: 1
                  }),
                  createVNode(unref($d), null, {
                    default: withCtx(() => [
                      createVNode(unref(xd), {
                        class: "min-w-[220px] outline-none bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] [animation-duration:_400ms] [animation-timing-function:_cubic-bezier(0.16,_1,_0.3,_1)] will-change-[transform,opacity]",
                        align: "start",
                        "side-offset": 5,
                        "align-offset": -3
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(Pd), { class: "group text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none" }, {
                            default: withCtx(() => [
                              createTextVNode(" Undo "),
                              createVNode("div", { class: "ml-auto pl-5 text-mauve9 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8" }, " ⌘ Z ")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(Pd), { class: "group text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none" }, {
                            default: withCtx(() => [
                              createTextVNode(" Redo "),
                              createVNode("div", { class: "ml-auto pl-5 text-mauve9 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8" }, " ⇧ ⌘ Z ")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(Sd), { class: "h-[1px] bg-green6 m-[5px]" }),
                          createVNode(unref(Rd), null, {
                            default: withCtx(() => [
                              createVNode(unref(kd), { class: "group text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none" }, {
                                default: withCtx(() => [
                                  createTextVNode(" Find "),
                                  createVNode("div", { class: "ml-auto pl-5 text-mauve9 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8" }, [
                                    createVNode(unref(Icon), { icon: "radix-icons:chevron-right" })
                                  ])
                                ]),
                                _: 1
                              }),
                              createVNode(unref($d), null, {
                                default: withCtx(() => [
                                  createVNode(unref(Md), {
                                    class: "min-w-[220px] outline-none bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] [animation-duration:_400ms] [animation-timing-function:_cubic-bezier(0.16,_1,_0.3,_1)] will-change-[transform,opacity]",
                                    "align-offset": -5
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(Pd), { class: "group text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Search the web… ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(unref(Sd), { class: "h-[1px] bg-green6 m-[5px]" }),
                                      createVNode(unref(Pd), { class: "text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Find… ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(unref(Pd), { class: "text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Find Next ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(unref(Pd), { class: "text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Find Previous ")
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
                          }),
                          createVNode(unref(Sd), { class: "h-[1px] bg-green6 m-[5px]" }),
                          createVNode(unref(Pd), { class: "text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none" }, {
                            default: withCtx(() => [
                              createTextVNode(" Cut ")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(Pd), { class: "text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none" }, {
                            default: withCtx(() => [
                              createTextVNode(" Copy ")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(Pd), { class: "text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none" }, {
                            default: withCtx(() => [
                              createTextVNode(" Paste ")
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
              }),
              createVNode(unref(wd), null, {
                default: withCtx(() => [
                  createVNode(unref(_d), { class: "py-2 px-3 outline-none select-none font-semibold leading-none rounded text-grass11 text-[13px] flex items-center justify-between gap-[2px] data-[highlighted]:bg-green4 data-[state=open]:bg-green4" }, {
                    default: withCtx(() => [
                      createTextVNode(" View ")
                    ]),
                    _: 1
                  }),
                  createVNode(unref($d), null, {
                    default: withCtx(() => [
                      createVNode(unref(xd), {
                        class: "min-w-[220px] outline-none bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] [animation-duration:_400ms] [animation-timing-function:_cubic-bezier(0.16,_1,_0.3,_1)] will-change-[transform,opacity]",
                        align: "start",
                        "side-offset": 5,
                        "align-offset": -14
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(Td), {
                            modelValue: checkboxOne.value,
                            "onUpdate:modelValue": ($event) => checkboxOne.value = $event,
                            class: "group text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[20px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1"
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(Dd), { class: "absolute left-0 w-[20px] inline-flex items-center justify-center" }, {
                                default: withCtx(() => [
                                  createVNode(unref(Icon), { icon: "radix-icons:check" })
                                ]),
                                _: 1
                              }),
                              createTextVNode(" Show Bookmarks "),
                              createVNode("div", { class: "ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8" }, " ⌘+B ")
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(unref(Td), {
                            modelValue: checkboxTwo.value,
                            "onUpdate:modelValue": ($event) => checkboxTwo.value = $event,
                            class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[20px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1"
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(Dd), { class: "absolute left-0 w-[20px] inline-flex items-center justify-center" }, {
                                default: withCtx(() => [
                                  createVNode(unref(Icon), { icon: "radix-icons:check" })
                                ]),
                                _: 1
                              }),
                              createTextVNode(" Show Full URLs ")
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(unref(Sd), { class: "h-[1px] bg-green6 m-[5px]" }),
                          createVNode(unref(Pd), { class: "group text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none pl-5 outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none" }, {
                            default: withCtx(() => [
                              createTextVNode(" Reload "),
                              createVNode("div", { class: "ml-auto pl-5 text-mauve9 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8" }, " ⌘ R ")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(Pd), {
                            class: "group text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none pl-5 outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none",
                            disabled: ""
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Force Reload "),
                              createVNode("div", { class: "ml-auto pl-5 text-mauve9 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8" }, " ⇧ ⌘ R ")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(Sd), { class: "h-[1px] bg-green6 m-[5px]" }),
                          createVNode(unref(Pd), { class: "text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none pl-5 outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none" }, {
                            default: withCtx(() => [
                              createTextVNode(" Toggle Fullscreen ")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(Sd), { class: "h-[1px] bg-green6 m-[5px]" }),
                          createVNode(unref(Pd), { class: "text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none pl-5 outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none" }, {
                            default: withCtx(() => [
                              createTextVNode(" Hide Sidebar ")
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
              }),
              createVNode(unref(wd), null, {
                default: withCtx(() => [
                  createVNode(unref(_d), { class: "py-2 px-3 outline-none select-none font-semibold leading-none rounded text-grass11 text-[13px] flex items-center justify-between gap-[2px] data-[highlighted]:bg-green4 data-[state=open]:bg-green4" }, {
                    default: withCtx(() => [
                      createTextVNode(" Profiles ")
                    ]),
                    _: 1
                  }),
                  createVNode(unref($d), null, {
                    default: withCtx(() => [
                      createVNode(unref(xd), {
                        class: "min-w-[220px] outline-none bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] [animation-duration:_400ms] [animation-timing-function:_cubic-bezier(0.16,_1,_0.3,_1)] will-change-[transform,opacity]",
                        align: "start",
                        "side-offset": 5,
                        "align-offset": -14
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(Id), {
                            modelValue: person.value,
                            "onUpdate:modelValue": ($event) => person.value = $event
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(Ad), {
                                class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[20px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1",
                                value: "pedro"
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(Dd), { class: "absolute left-0 w-[20px] inline-flex items-center justify-center" }, {
                                    default: withCtx(() => [
                                      createVNode(unref(Icon), { icon: "radix-icons:dot-filled" })
                                    ]),
                                    _: 1
                                  }),
                                  createTextVNode(" Pedro Duarte ")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(Ad), {
                                class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[20px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1",
                                value: "colm"
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(Dd), { class: "absolute left-0 w-[20px] inline-flex items-center justify-center" }, {
                                    default: withCtx(() => [
                                      createVNode(unref(Icon), { icon: "radix-icons:dot-filled" })
                                    ]),
                                    _: 1
                                  }),
                                  createTextVNode(" Colm Tuite ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(unref(Sd), { class: "h-[1px] bg-green6 m-[5px]" }),
                          createVNode(unref(Pd), {
                            class: "text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none pl-5 outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none",
                            onClick: handleClick
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Edit… ")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(Sd), { class: "h-[1px] bg-green6 m-[5px]" }),
                          createVNode(unref(Pd), { class: "text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none pl-5 outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none" }, {
                            default: withCtx(() => [
                              createTextVNode(" Add Profile… ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../components/demo/Menubar/tailwind/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
