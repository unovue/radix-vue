import { defineComponent, ref, unref, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { Icon } from "@iconify/vue";
import { N as ku, Q as Vu, R as Fu, U as Lu, W as Nu, Z as Yu, a0 as Ju, a1 as Xu, a2 as ju, a3 as Wu, a4 as zu, a5 as Uu, a6 as qu, a7 as Gu } from "./index.faJ9MUPN.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const checkboxOne = ref(false);
    const checkboxTwo = ref(false);
    const person = ref("pedro");
    function handleClick() {
      alert("hello!");
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(ku), _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Vu), {
              "as-child": "",
              class: "block border-2 border-white border-dashed text-white rounded text-[15px] select-none py-[45px] w-[300px] text-center"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}> Right click here. </span>`);
                } else {
                  return [
                    createVNode("span", null, " Right click here. ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Fu), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(Lu), {
                    class: "min-w-[220px] z-30 bg-white outline-none rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade",
                    "side-offset": 5
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(Nu), {
                          value: "New Tab",
                          class: "group text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1",
                          onClick: handleClick
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` New Tab <div class="ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8"${_scopeId4}> ⌘+T </div>`);
                            } else {
                              return [
                                createTextVNode(" New Tab "),
                                createVNode("div", { class: "ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8" }, " ⌘+T ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(Yu), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(Ju), {
                                value: "more toolsz",
                                class: "group w-full text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:bg-green9 data-[highlighted]:data-[state=open]:text-green1"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` More Tools <div class="ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8"${_scopeId5}>`);
                                    _push6(ssrRenderComponent(unref(Icon), { icon: "radix-icons:chevron-right" }, null, _parent6, _scopeId5));
                                    _push6(`</div>`);
                                  } else {
                                    return [
                                      createTextVNode(" More Tools "),
                                      createVNode("div", { class: "ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8" }, [
                                        createVNode(unref(Icon), { icon: "radix-icons:chevron-right" })
                                      ])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(Fu), null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(unref(Xu), {
                                      class: "min-w-[220px] z-30 outline-none bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade",
                                      "side-offset": 2,
                                      "align-offset": -5
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(unref(Nu), { class: "group text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(` Save Page As… <div class="ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8"${_scopeId7}> ⌘+S </div>`);
                                              } else {
                                                return [
                                                  createTextVNode(" Save Page As… "),
                                                  createVNode("div", { class: "ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8" }, " ⌘+S ")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(unref(Nu), { class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(` Create Shortcut… `);
                                              } else {
                                                return [
                                                  createTextVNode(" Create Shortcut… ")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(unref(Nu), { class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(` Name Window… `);
                                              } else {
                                                return [
                                                  createTextVNode(" Name Window… ")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(unref(ju), { class: "h-[1px] bg-green6 m-[5px]" }, null, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(unref(Nu), { class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(` Developer Tools `);
                                              } else {
                                                return [
                                                  createTextVNode(" Developer Tools ")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(unref(Nu), { class: "group text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Save Page As… "),
                                                createVNode("div", { class: "ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8" }, " ⌘+S ")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(unref(Nu), { class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Create Shortcut… ")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(unref(Nu), { class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Name Window… ")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(unref(ju), { class: "h-[1px] bg-green6 m-[5px]" }),
                                            createVNode(unref(Nu), { class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Developer Tools ")
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
                                      createVNode(unref(Xu), {
                                        class: "min-w-[220px] z-30 outline-none bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade",
                                        "side-offset": 2,
                                        "align-offset": -5
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(unref(Nu), { class: "group text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Save Page As… "),
                                              createVNode("div", { class: "ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8" }, " ⌘+S ")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(unref(Nu), { class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Create Shortcut… ")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(unref(Nu), { class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Name Window… ")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(unref(ju), { class: "h-[1px] bg-green6 m-[5px]" }),
                                          createVNode(unref(Nu), { class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Developer Tools ")
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
                            } else {
                              return [
                                createVNode(unref(Ju), {
                                  value: "more toolsz",
                                  class: "group w-full text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:bg-green9 data-[highlighted]:data-[state=open]:text-green1"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" More Tools "),
                                    createVNode("div", { class: "ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8" }, [
                                      createVNode(unref(Icon), { icon: "radix-icons:chevron-right" })
                                    ])
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(Fu), null, {
                                  default: withCtx(() => [
                                    createVNode(unref(Xu), {
                                      class: "min-w-[220px] z-30 outline-none bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade",
                                      "side-offset": 2,
                                      "align-offset": -5
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(unref(Nu), { class: "group text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Save Page As… "),
                                            createVNode("div", { class: "ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8" }, " ⌘+S ")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(unref(Nu), { class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Create Shortcut… ")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(unref(Nu), { class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Name Window… ")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(unref(ju), { class: "h-[1px] bg-green6 m-[5px]" }),
                                        createVNode(unref(Nu), { class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Developer Tools ")
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
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(Nu), {
                          value: "New Window",
                          class: "group text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` New Window <div class="ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8"${_scopeId4}> ⌘+N </div>`);
                            } else {
                              return [
                                createTextVNode(" New Window "),
                                createVNode("div", { class: "ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8" }, " ⌘+N ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(Nu), {
                          value: "New Private Window",
                          class: "group text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1",
                          disabled: ""
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` New Private Window <div class="ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8"${_scopeId4}> ⇧+⌘+N </div>`);
                            } else {
                              return [
                                createTextVNode(" New Private Window "),
                                createVNode("div", { class: "ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8" }, " ⇧+⌘+N ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(Yu), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(Ju), {
                                value: "more tools",
                                class: "group text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none w-full outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:bg-green9 data-[highlighted]:data-[state=open]:text-green1"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` More Tools <div class="ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8"${_scopeId5}>`);
                                    _push6(ssrRenderComponent(unref(Icon), { icon: "radix-icons:chevron-right" }, null, _parent6, _scopeId5));
                                    _push6(`</div>`);
                                  } else {
                                    return [
                                      createTextVNode(" More Tools "),
                                      createVNode("div", { class: "ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8" }, [
                                        createVNode(unref(Icon), { icon: "radix-icons:chevron-right" })
                                      ])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(Fu), null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(unref(Xu), {
                                      class: "min-w-[220px] z-30 outline-none bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade",
                                      "side-offset": 2,
                                      "align-offset": -5
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(unref(Nu), { class: "group text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(` Save Page As… <div class="ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8"${_scopeId7}> ⌘+S </div>`);
                                              } else {
                                                return [
                                                  createTextVNode(" Save Page As… "),
                                                  createVNode("div", { class: "ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8" }, " ⌘+S ")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(unref(Nu), { class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(` Create Shortcut… `);
                                              } else {
                                                return [
                                                  createTextVNode(" Create Shortcut… ")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(unref(Nu), { class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(` Name Window… `);
                                              } else {
                                                return [
                                                  createTextVNode(" Name Window… ")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(unref(ju), { class: "h-[1px] bg-green6 m-[5px]" }, null, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(unref(Nu), { class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(` Developer Tools `);
                                              } else {
                                                return [
                                                  createTextVNode(" Developer Tools ")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(unref(Yu), null, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(unref(Ju), {
                                                  value: "more toolsz",
                                                  class: "group w-full text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:bg-green9 data-[highlighted]:data-[state=open]:text-green1"
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(` More Tools <div class="ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8"${_scopeId8}>`);
                                                      _push9(ssrRenderComponent(unref(Icon), { icon: "radix-icons:chevron-right" }, null, _parent9, _scopeId8));
                                                      _push9(`</div>`);
                                                    } else {
                                                      return [
                                                        createTextVNode(" More Tools "),
                                                        createVNode("div", { class: "ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8" }, [
                                                          createVNode(unref(Icon), { icon: "radix-icons:chevron-right" })
                                                        ])
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(unref(Fu), null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(unref(Xu), {
                                                        class: "min-w-[220px] z-30 outline-none bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade",
                                                        "side-offset": 2,
                                                        "align-offset": -5
                                                      }, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(ssrRenderComponent(unref(Nu), { class: "group text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                                              default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                if (_push11) {
                                                                  _push11(` Save Page As… <div class="ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8"${_scopeId10}> ⌘+S </div>`);
                                                                } else {
                                                                  return [
                                                                    createTextVNode(" Save Page As… "),
                                                                    createVNode("div", { class: "ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8" }, " ⌘+S ")
                                                                  ];
                                                                }
                                                              }),
                                                              _: 1
                                                            }, _parent10, _scopeId9));
                                                            _push10(ssrRenderComponent(unref(Nu), { class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                                              default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                if (_push11) {
                                                                  _push11(` Create Shortcut… `);
                                                                } else {
                                                                  return [
                                                                    createTextVNode(" Create Shortcut… ")
                                                                  ];
                                                                }
                                                              }),
                                                              _: 1
                                                            }, _parent10, _scopeId9));
                                                            _push10(ssrRenderComponent(unref(Nu), { class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                                              default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                if (_push11) {
                                                                  _push11(` Name Window… `);
                                                                } else {
                                                                  return [
                                                                    createTextVNode(" Name Window… ")
                                                                  ];
                                                                }
                                                              }),
                                                              _: 1
                                                            }, _parent10, _scopeId9));
                                                            _push10(ssrRenderComponent(unref(ju), { class: "h-[1px] bg-green6 m-[5px]" }, null, _parent10, _scopeId9));
                                                            _push10(ssrRenderComponent(unref(Nu), { class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                                              default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                if (_push11) {
                                                                  _push11(` Developer Tools `);
                                                                } else {
                                                                  return [
                                                                    createTextVNode(" Developer Tools ")
                                                                  ];
                                                                }
                                                              }),
                                                              _: 1
                                                            }, _parent10, _scopeId9));
                                                            _push10(ssrRenderComponent(unref(Yu), null, {
                                                              default: withCtx((_10, _push11, _parent11, _scopeId10) => {
                                                                if (_push11) {
                                                                  _push11(ssrRenderComponent(unref(Ju), {
                                                                    value: "more toolsz",
                                                                    class: "group w-full text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:bg-green9 data-[highlighted]:data-[state=open]:text-green1"
                                                                  }, {
                                                                    default: withCtx((_11, _push12, _parent12, _scopeId11) => {
                                                                      if (_push12) {
                                                                        _push12(` More Tools <div class="ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8"${_scopeId11}>`);
                                                                        _push12(ssrRenderComponent(unref(Icon), { icon: "radix-icons:chevron-right" }, null, _parent12, _scopeId11));
                                                                        _push12(`</div>`);
                                                                      } else {
                                                                        return [
                                                                          createTextVNode(" More Tools "),
                                                                          createVNode("div", { class: "ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8" }, [
                                                                            createVNode(unref(Icon), { icon: "radix-icons:chevron-right" })
                                                                          ])
                                                                        ];
                                                                      }
                                                                    }),
                                                                    _: 1
                                                                  }, _parent11, _scopeId10));
                                                                  _push11(ssrRenderComponent(unref(Fu), null, {
                                                                    default: withCtx((_11, _push12, _parent12, _scopeId11) => {
                                                                      if (_push12) {
                                                                        _push12(ssrRenderComponent(unref(Xu), {
                                                                          class: "min-w-[220px] z-30 outline-none bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade",
                                                                          "side-offset": 2,
                                                                          "align-offset": -5
                                                                        }, {
                                                                          default: withCtx((_12, _push13, _parent13, _scopeId12) => {
                                                                            if (_push13) {
                                                                              _push13(ssrRenderComponent(unref(Nu), { class: "group text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                                                                default: withCtx((_13, _push14, _parent14, _scopeId13) => {
                                                                                  if (_push14) {
                                                                                    _push14(` Save Page As… <div class="ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8"${_scopeId13}> ⌘+S </div>`);
                                                                                  } else {
                                                                                    return [
                                                                                      createTextVNode(" Save Page As… "),
                                                                                      createVNode("div", { class: "ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8" }, " ⌘+S ")
                                                                                    ];
                                                                                  }
                                                                                }),
                                                                                _: 1
                                                                              }, _parent13, _scopeId12));
                                                                              _push13(ssrRenderComponent(unref(Nu), { class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                                                                default: withCtx((_13, _push14, _parent14, _scopeId13) => {
                                                                                  if (_push14) {
                                                                                    _push14(` Create Shortcut… `);
                                                                                  } else {
                                                                                    return [
                                                                                      createTextVNode(" Create Shortcut… ")
                                                                                    ];
                                                                                  }
                                                                                }),
                                                                                _: 1
                                                                              }, _parent13, _scopeId12));
                                                                              _push13(ssrRenderComponent(unref(Nu), { class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                                                                default: withCtx((_13, _push14, _parent14, _scopeId13) => {
                                                                                  if (_push14) {
                                                                                    _push14(` Name Window… `);
                                                                                  } else {
                                                                                    return [
                                                                                      createTextVNode(" Name Window… ")
                                                                                    ];
                                                                                  }
                                                                                }),
                                                                                _: 1
                                                                              }, _parent13, _scopeId12));
                                                                              _push13(ssrRenderComponent(unref(ju), { class: "h-[1px] bg-green6 m-[5px]" }, null, _parent13, _scopeId12));
                                                                              _push13(ssrRenderComponent(unref(Nu), { class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                                                                default: withCtx((_13, _push14, _parent14, _scopeId13) => {
                                                                                  if (_push14) {
                                                                                    _push14(` Developer Tools `);
                                                                                  } else {
                                                                                    return [
                                                                                      createTextVNode(" Developer Tools ")
                                                                                    ];
                                                                                  }
                                                                                }),
                                                                                _: 1
                                                                              }, _parent13, _scopeId12));
                                                                            } else {
                                                                              return [
                                                                                createVNode(unref(Nu), { class: "group text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                                                                  default: withCtx(() => [
                                                                                    createTextVNode(" Save Page As… "),
                                                                                    createVNode("div", { class: "ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8" }, " ⌘+S ")
                                                                                  ]),
                                                                                  _: 1
                                                                                }),
                                                                                createVNode(unref(Nu), { class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                                                                  default: withCtx(() => [
                                                                                    createTextVNode(" Create Shortcut… ")
                                                                                  ]),
                                                                                  _: 1
                                                                                }),
                                                                                createVNode(unref(Nu), { class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                                                                  default: withCtx(() => [
                                                                                    createTextVNode(" Name Window… ")
                                                                                  ]),
                                                                                  _: 1
                                                                                }),
                                                                                createVNode(unref(ju), { class: "h-[1px] bg-green6 m-[5px]" }),
                                                                                createVNode(unref(Nu), { class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                                                                  default: withCtx(() => [
                                                                                    createTextVNode(" Developer Tools ")
                                                                                  ]),
                                                                                  _: 1
                                                                                })
                                                                              ];
                                                                            }
                                                                          }),
                                                                          _: 1
                                                                        }, _parent12, _scopeId11));
                                                                      } else {
                                                                        return [
                                                                          createVNode(unref(Xu), {
                                                                            class: "min-w-[220px] z-30 outline-none bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade",
                                                                            "side-offset": 2,
                                                                            "align-offset": -5
                                                                          }, {
                                                                            default: withCtx(() => [
                                                                              createVNode(unref(Nu), { class: "group text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                                                                default: withCtx(() => [
                                                                                  createTextVNode(" Save Page As… "),
                                                                                  createVNode("div", { class: "ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8" }, " ⌘+S ")
                                                                                ]),
                                                                                _: 1
                                                                              }),
                                                                              createVNode(unref(Nu), { class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                                                                default: withCtx(() => [
                                                                                  createTextVNode(" Create Shortcut… ")
                                                                                ]),
                                                                                _: 1
                                                                              }),
                                                                              createVNode(unref(Nu), { class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                                                                default: withCtx(() => [
                                                                                  createTextVNode(" Name Window… ")
                                                                                ]),
                                                                                _: 1
                                                                              }),
                                                                              createVNode(unref(ju), { class: "h-[1px] bg-green6 m-[5px]" }),
                                                                              createVNode(unref(Nu), { class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                                                                default: withCtx(() => [
                                                                                  createTextVNode(" Developer Tools ")
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
                                                                  }, _parent11, _scopeId10));
                                                                } else {
                                                                  return [
                                                                    createVNode(unref(Ju), {
                                                                      value: "more toolsz",
                                                                      class: "group w-full text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:bg-green9 data-[highlighted]:data-[state=open]:text-green1"
                                                                    }, {
                                                                      default: withCtx(() => [
                                                                        createTextVNode(" More Tools "),
                                                                        createVNode("div", { class: "ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8" }, [
                                                                          createVNode(unref(Icon), { icon: "radix-icons:chevron-right" })
                                                                        ])
                                                                      ]),
                                                                      _: 1
                                                                    }),
                                                                    createVNode(unref(Fu), null, {
                                                                      default: withCtx(() => [
                                                                        createVNode(unref(Xu), {
                                                                          class: "min-w-[220px] z-30 outline-none bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade",
                                                                          "side-offset": 2,
                                                                          "align-offset": -5
                                                                        }, {
                                                                          default: withCtx(() => [
                                                                            createVNode(unref(Nu), { class: "group text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                                                              default: withCtx(() => [
                                                                                createTextVNode(" Save Page As… "),
                                                                                createVNode("div", { class: "ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8" }, " ⌘+S ")
                                                                              ]),
                                                                              _: 1
                                                                            }),
                                                                            createVNode(unref(Nu), { class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                                                              default: withCtx(() => [
                                                                                createTextVNode(" Create Shortcut… ")
                                                                              ]),
                                                                              _: 1
                                                                            }),
                                                                            createVNode(unref(Nu), { class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                                                              default: withCtx(() => [
                                                                                createTextVNode(" Name Window… ")
                                                                              ]),
                                                                              _: 1
                                                                            }),
                                                                            createVNode(unref(ju), { class: "h-[1px] bg-green6 m-[5px]" }),
                                                                            createVNode(unref(Nu), { class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                                                              default: withCtx(() => [
                                                                                createTextVNode(" Developer Tools ")
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
                                                            }, _parent10, _scopeId9));
                                                          } else {
                                                            return [
                                                              createVNode(unref(Nu), { class: "group text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                                                default: withCtx(() => [
                                                                  createTextVNode(" Save Page As… "),
                                                                  createVNode("div", { class: "ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8" }, " ⌘+S ")
                                                                ]),
                                                                _: 1
                                                              }),
                                                              createVNode(unref(Nu), { class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                                                default: withCtx(() => [
                                                                  createTextVNode(" Create Shortcut… ")
                                                                ]),
                                                                _: 1
                                                              }),
                                                              createVNode(unref(Nu), { class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                                                default: withCtx(() => [
                                                                  createTextVNode(" Name Window… ")
                                                                ]),
                                                                _: 1
                                                              }),
                                                              createVNode(unref(ju), { class: "h-[1px] bg-green6 m-[5px]" }),
                                                              createVNode(unref(Nu), { class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                                                default: withCtx(() => [
                                                                  createTextVNode(" Developer Tools ")
                                                                ]),
                                                                _: 1
                                                              }),
                                                              createVNode(unref(Yu), null, {
                                                                default: withCtx(() => [
                                                                  createVNode(unref(Ju), {
                                                                    value: "more toolsz",
                                                                    class: "group w-full text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:bg-green9 data-[highlighted]:data-[state=open]:text-green1"
                                                                  }, {
                                                                    default: withCtx(() => [
                                                                      createTextVNode(" More Tools "),
                                                                      createVNode("div", { class: "ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8" }, [
                                                                        createVNode(unref(Icon), { icon: "radix-icons:chevron-right" })
                                                                      ])
                                                                    ]),
                                                                    _: 1
                                                                  }),
                                                                  createVNode(unref(Fu), null, {
                                                                    default: withCtx(() => [
                                                                      createVNode(unref(Xu), {
                                                                        class: "min-w-[220px] z-30 outline-none bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade",
                                                                        "side-offset": 2,
                                                                        "align-offset": -5
                                                                      }, {
                                                                        default: withCtx(() => [
                                                                          createVNode(unref(Nu), { class: "group text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                                                            default: withCtx(() => [
                                                                              createTextVNode(" Save Page As… "),
                                                                              createVNode("div", { class: "ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8" }, " ⌘+S ")
                                                                            ]),
                                                                            _: 1
                                                                          }),
                                                                          createVNode(unref(Nu), { class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                                                            default: withCtx(() => [
                                                                              createTextVNode(" Create Shortcut… ")
                                                                            ]),
                                                                            _: 1
                                                                          }),
                                                                          createVNode(unref(Nu), { class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                                                            default: withCtx(() => [
                                                                              createTextVNode(" Name Window… ")
                                                                            ]),
                                                                            _: 1
                                                                          }),
                                                                          createVNode(unref(ju), { class: "h-[1px] bg-green6 m-[5px]" }),
                                                                          createVNode(unref(Nu), { class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                                                            default: withCtx(() => [
                                                                              createTextVNode(" Developer Tools ")
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
                                                      }, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(unref(Xu), {
                                                          class: "min-w-[220px] z-30 outline-none bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade",
                                                          "side-offset": 2,
                                                          "align-offset": -5
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode(unref(Nu), { class: "group text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                                              default: withCtx(() => [
                                                                createTextVNode(" Save Page As… "),
                                                                createVNode("div", { class: "ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8" }, " ⌘+S ")
                                                              ]),
                                                              _: 1
                                                            }),
                                                            createVNode(unref(Nu), { class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                                              default: withCtx(() => [
                                                                createTextVNode(" Create Shortcut… ")
                                                              ]),
                                                              _: 1
                                                            }),
                                                            createVNode(unref(Nu), { class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                                              default: withCtx(() => [
                                                                createTextVNode(" Name Window… ")
                                                              ]),
                                                              _: 1
                                                            }),
                                                            createVNode(unref(ju), { class: "h-[1px] bg-green6 m-[5px]" }),
                                                            createVNode(unref(Nu), { class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                                              default: withCtx(() => [
                                                                createTextVNode(" Developer Tools ")
                                                              ]),
                                                              _: 1
                                                            }),
                                                            createVNode(unref(Yu), null, {
                                                              default: withCtx(() => [
                                                                createVNode(unref(Ju), {
                                                                  value: "more toolsz",
                                                                  class: "group w-full text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:bg-green9 data-[highlighted]:data-[state=open]:text-green1"
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    createTextVNode(" More Tools "),
                                                                    createVNode("div", { class: "ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8" }, [
                                                                      createVNode(unref(Icon), { icon: "radix-icons:chevron-right" })
                                                                    ])
                                                                  ]),
                                                                  _: 1
                                                                }),
                                                                createVNode(unref(Fu), null, {
                                                                  default: withCtx(() => [
                                                                    createVNode(unref(Xu), {
                                                                      class: "min-w-[220px] z-30 outline-none bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade",
                                                                      "side-offset": 2,
                                                                      "align-offset": -5
                                                                    }, {
                                                                      default: withCtx(() => [
                                                                        createVNode(unref(Nu), { class: "group text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                                                          default: withCtx(() => [
                                                                            createTextVNode(" Save Page As… "),
                                                                            createVNode("div", { class: "ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8" }, " ⌘+S ")
                                                                          ]),
                                                                          _: 1
                                                                        }),
                                                                        createVNode(unref(Nu), { class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                                                          default: withCtx(() => [
                                                                            createTextVNode(" Create Shortcut… ")
                                                                          ]),
                                                                          _: 1
                                                                        }),
                                                                        createVNode(unref(Nu), { class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                                                          default: withCtx(() => [
                                                                            createTextVNode(" Name Window… ")
                                                                          ]),
                                                                          _: 1
                                                                        }),
                                                                        createVNode(unref(ju), { class: "h-[1px] bg-green6 m-[5px]" }),
                                                                        createVNode(unref(Nu), { class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                                                          default: withCtx(() => [
                                                                            createTextVNode(" Developer Tools ")
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
                                                          ]),
                                                          _: 1
                                                        })
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(unref(Ju), {
                                                    value: "more toolsz",
                                                    class: "group w-full text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:bg-green9 data-[highlighted]:data-[state=open]:text-green1"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" More Tools "),
                                                      createVNode("div", { class: "ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8" }, [
                                                        createVNode(unref(Icon), { icon: "radix-icons:chevron-right" })
                                                      ])
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(unref(Fu), null, {
                                                    default: withCtx(() => [
                                                      createVNode(unref(Xu), {
                                                        class: "min-w-[220px] z-30 outline-none bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade",
                                                        "side-offset": 2,
                                                        "align-offset": -5
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(unref(Nu), { class: "group text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                                            default: withCtx(() => [
                                                              createTextVNode(" Save Page As… "),
                                                              createVNode("div", { class: "ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8" }, " ⌘+S ")
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createVNode(unref(Nu), { class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                                            default: withCtx(() => [
                                                              createTextVNode(" Create Shortcut… ")
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createVNode(unref(Nu), { class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                                            default: withCtx(() => [
                                                              createTextVNode(" Name Window… ")
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createVNode(unref(ju), { class: "h-[1px] bg-green6 m-[5px]" }),
                                                          createVNode(unref(Nu), { class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                                            default: withCtx(() => [
                                                              createTextVNode(" Developer Tools ")
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createVNode(unref(Yu), null, {
                                                            default: withCtx(() => [
                                                              createVNode(unref(Ju), {
                                                                value: "more toolsz",
                                                                class: "group w-full text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:bg-green9 data-[highlighted]:data-[state=open]:text-green1"
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createTextVNode(" More Tools "),
                                                                  createVNode("div", { class: "ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8" }, [
                                                                    createVNode(unref(Icon), { icon: "radix-icons:chevron-right" })
                                                                  ])
                                                                ]),
                                                                _: 1
                                                              }),
                                                              createVNode(unref(Fu), null, {
                                                                default: withCtx(() => [
                                                                  createVNode(unref(Xu), {
                                                                    class: "min-w-[220px] z-30 outline-none bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade",
                                                                    "side-offset": 2,
                                                                    "align-offset": -5
                                                                  }, {
                                                                    default: withCtx(() => [
                                                                      createVNode(unref(Nu), { class: "group text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                                                        default: withCtx(() => [
                                                                          createTextVNode(" Save Page As… "),
                                                                          createVNode("div", { class: "ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8" }, " ⌘+S ")
                                                                        ]),
                                                                        _: 1
                                                                      }),
                                                                      createVNode(unref(Nu), { class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                                                        default: withCtx(() => [
                                                                          createTextVNode(" Create Shortcut… ")
                                                                        ]),
                                                                        _: 1
                                                                      }),
                                                                      createVNode(unref(Nu), { class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                                                        default: withCtx(() => [
                                                                          createTextVNode(" Name Window… ")
                                                                        ]),
                                                                        _: 1
                                                                      }),
                                                                      createVNode(unref(ju), { class: "h-[1px] bg-green6 m-[5px]" }),
                                                                      createVNode(unref(Nu), { class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                                                        default: withCtx(() => [
                                                                          createTextVNode(" Developer Tools ")
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
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(unref(Nu), { class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(` Developer Tools `);
                                              } else {
                                                return [
                                                  createTextVNode(" Developer Tools ")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(unref(Nu), { class: "group text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Save Page As… "),
                                                createVNode("div", { class: "ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8" }, " ⌘+S ")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(unref(Nu), { class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Create Shortcut… ")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(unref(Nu), { class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Name Window… ")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(unref(ju), { class: "h-[1px] bg-green6 m-[5px]" }),
                                            createVNode(unref(Nu), { class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Developer Tools ")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(unref(Yu), null, {
                                              default: withCtx(() => [
                                                createVNode(unref(Ju), {
                                                  value: "more toolsz",
                                                  class: "group w-full text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:bg-green9 data-[highlighted]:data-[state=open]:text-green1"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" More Tools "),
                                                    createVNode("div", { class: "ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8" }, [
                                                      createVNode(unref(Icon), { icon: "radix-icons:chevron-right" })
                                                    ])
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(unref(Fu), null, {
                                                  default: withCtx(() => [
                                                    createVNode(unref(Xu), {
                                                      class: "min-w-[220px] z-30 outline-none bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade",
                                                      "side-offset": 2,
                                                      "align-offset": -5
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(unref(Nu), { class: "group text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                                          default: withCtx(() => [
                                                            createTextVNode(" Save Page As… "),
                                                            createVNode("div", { class: "ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8" }, " ⌘+S ")
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(unref(Nu), { class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                                          default: withCtx(() => [
                                                            createTextVNode(" Create Shortcut… ")
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(unref(Nu), { class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                                          default: withCtx(() => [
                                                            createTextVNode(" Name Window… ")
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(unref(ju), { class: "h-[1px] bg-green6 m-[5px]" }),
                                                        createVNode(unref(Nu), { class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                                          default: withCtx(() => [
                                                            createTextVNode(" Developer Tools ")
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(unref(Yu), null, {
                                                          default: withCtx(() => [
                                                            createVNode(unref(Ju), {
                                                              value: "more toolsz",
                                                              class: "group w-full text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:bg-green9 data-[highlighted]:data-[state=open]:text-green1"
                                                            }, {
                                                              default: withCtx(() => [
                                                                createTextVNode(" More Tools "),
                                                                createVNode("div", { class: "ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8" }, [
                                                                  createVNode(unref(Icon), { icon: "radix-icons:chevron-right" })
                                                                ])
                                                              ]),
                                                              _: 1
                                                            }),
                                                            createVNode(unref(Fu), null, {
                                                              default: withCtx(() => [
                                                                createVNode(unref(Xu), {
                                                                  class: "min-w-[220px] z-30 outline-none bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade",
                                                                  "side-offset": 2,
                                                                  "align-offset": -5
                                                                }, {
                                                                  default: withCtx(() => [
                                                                    createVNode(unref(Nu), { class: "group text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                                                      default: withCtx(() => [
                                                                        createTextVNode(" Save Page As… "),
                                                                        createVNode("div", { class: "ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8" }, " ⌘+S ")
                                                                      ]),
                                                                      _: 1
                                                                    }),
                                                                    createVNode(unref(Nu), { class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                                                      default: withCtx(() => [
                                                                        createTextVNode(" Create Shortcut… ")
                                                                      ]),
                                                                      _: 1
                                                                    }),
                                                                    createVNode(unref(Nu), { class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                                                      default: withCtx(() => [
                                                                        createTextVNode(" Name Window… ")
                                                                      ]),
                                                                      _: 1
                                                                    }),
                                                                    createVNode(unref(ju), { class: "h-[1px] bg-green6 m-[5px]" }),
                                                                    createVNode(unref(Nu), { class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                                                      default: withCtx(() => [
                                                                        createTextVNode(" Developer Tools ")
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
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(unref(Nu), { class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Developer Tools ")
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
                                      createVNode(unref(Xu), {
                                        class: "min-w-[220px] z-30 outline-none bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade",
                                        "side-offset": 2,
                                        "align-offset": -5
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(unref(Nu), { class: "group text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Save Page As… "),
                                              createVNode("div", { class: "ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8" }, " ⌘+S ")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(unref(Nu), { class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Create Shortcut… ")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(unref(Nu), { class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Name Window… ")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(unref(ju), { class: "h-[1px] bg-green6 m-[5px]" }),
                                          createVNode(unref(Nu), { class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Developer Tools ")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(unref(Yu), null, {
                                            default: withCtx(() => [
                                              createVNode(unref(Ju), {
                                                value: "more toolsz",
                                                class: "group w-full text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:bg-green9 data-[highlighted]:data-[state=open]:text-green1"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" More Tools "),
                                                  createVNode("div", { class: "ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8" }, [
                                                    createVNode(unref(Icon), { icon: "radix-icons:chevron-right" })
                                                  ])
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(unref(Fu), null, {
                                                default: withCtx(() => [
                                                  createVNode(unref(Xu), {
                                                    class: "min-w-[220px] z-30 outline-none bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade",
                                                    "side-offset": 2,
                                                    "align-offset": -5
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(unref(Nu), { class: "group text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(" Save Page As… "),
                                                          createVNode("div", { class: "ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8" }, " ⌘+S ")
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(unref(Nu), { class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(" Create Shortcut… ")
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(unref(Nu), { class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(" Name Window… ")
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(unref(ju), { class: "h-[1px] bg-green6 m-[5px]" }),
                                                      createVNode(unref(Nu), { class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(" Developer Tools ")
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(unref(Yu), null, {
                                                        default: withCtx(() => [
                                                          createVNode(unref(Ju), {
                                                            value: "more toolsz",
                                                            class: "group w-full text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:bg-green9 data-[highlighted]:data-[state=open]:text-green1"
                                                          }, {
                                                            default: withCtx(() => [
                                                              createTextVNode(" More Tools "),
                                                              createVNode("div", { class: "ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8" }, [
                                                                createVNode(unref(Icon), { icon: "radix-icons:chevron-right" })
                                                              ])
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createVNode(unref(Fu), null, {
                                                            default: withCtx(() => [
                                                              createVNode(unref(Xu), {
                                                                class: "min-w-[220px] z-30 outline-none bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade",
                                                                "side-offset": 2,
                                                                "align-offset": -5
                                                              }, {
                                                                default: withCtx(() => [
                                                                  createVNode(unref(Nu), { class: "group text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                                                    default: withCtx(() => [
                                                                      createTextVNode(" Save Page As… "),
                                                                      createVNode("div", { class: "ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8" }, " ⌘+S ")
                                                                    ]),
                                                                    _: 1
                                                                  }),
                                                                  createVNode(unref(Nu), { class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                                                    default: withCtx(() => [
                                                                      createTextVNode(" Create Shortcut… ")
                                                                    ]),
                                                                    _: 1
                                                                  }),
                                                                  createVNode(unref(Nu), { class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                                                    default: withCtx(() => [
                                                                      createTextVNode(" Name Window… ")
                                                                    ]),
                                                                    _: 1
                                                                  }),
                                                                  createVNode(unref(ju), { class: "h-[1px] bg-green6 m-[5px]" }),
                                                                  createVNode(unref(Nu), { class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                                                    default: withCtx(() => [
                                                                      createTextVNode(" Developer Tools ")
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
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(unref(Nu), { class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Developer Tools ")
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
                            } else {
                              return [
                                createVNode(unref(Ju), {
                                  value: "more tools",
                                  class: "group text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none w-full outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:bg-green9 data-[highlighted]:data-[state=open]:text-green1"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" More Tools "),
                                    createVNode("div", { class: "ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8" }, [
                                      createVNode(unref(Icon), { icon: "radix-icons:chevron-right" })
                                    ])
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(Fu), null, {
                                  default: withCtx(() => [
                                    createVNode(unref(Xu), {
                                      class: "min-w-[220px] z-30 outline-none bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade",
                                      "side-offset": 2,
                                      "align-offset": -5
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(unref(Nu), { class: "group text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Save Page As… "),
                                            createVNode("div", { class: "ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8" }, " ⌘+S ")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(unref(Nu), { class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Create Shortcut… ")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(unref(Nu), { class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Name Window… ")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(unref(ju), { class: "h-[1px] bg-green6 m-[5px]" }),
                                        createVNode(unref(Nu), { class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Developer Tools ")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(unref(Yu), null, {
                                          default: withCtx(() => [
                                            createVNode(unref(Ju), {
                                              value: "more toolsz",
                                              class: "group w-full text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:bg-green9 data-[highlighted]:data-[state=open]:text-green1"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" More Tools "),
                                                createVNode("div", { class: "ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8" }, [
                                                  createVNode(unref(Icon), { icon: "radix-icons:chevron-right" })
                                                ])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(unref(Fu), null, {
                                              default: withCtx(() => [
                                                createVNode(unref(Xu), {
                                                  class: "min-w-[220px] z-30 outline-none bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade",
                                                  "side-offset": 2,
                                                  "align-offset": -5
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(unref(Nu), { class: "group text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(" Save Page As… "),
                                                        createVNode("div", { class: "ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8" }, " ⌘+S ")
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(unref(Nu), { class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(" Create Shortcut… ")
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(unref(Nu), { class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(" Name Window… ")
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(unref(ju), { class: "h-[1px] bg-green6 m-[5px]" }),
                                                    createVNode(unref(Nu), { class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(" Developer Tools ")
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(unref(Yu), null, {
                                                      default: withCtx(() => [
                                                        createVNode(unref(Ju), {
                                                          value: "more toolsz",
                                                          class: "group w-full text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:bg-green9 data-[highlighted]:data-[state=open]:text-green1"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createTextVNode(" More Tools "),
                                                            createVNode("div", { class: "ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8" }, [
                                                              createVNode(unref(Icon), { icon: "radix-icons:chevron-right" })
                                                            ])
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(unref(Fu), null, {
                                                          default: withCtx(() => [
                                                            createVNode(unref(Xu), {
                                                              class: "min-w-[220px] z-30 outline-none bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade",
                                                              "side-offset": 2,
                                                              "align-offset": -5
                                                            }, {
                                                              default: withCtx(() => [
                                                                createVNode(unref(Nu), { class: "group text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                                                  default: withCtx(() => [
                                                                    createTextVNode(" Save Page As… "),
                                                                    createVNode("div", { class: "ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8" }, " ⌘+S ")
                                                                  ]),
                                                                  _: 1
                                                                }),
                                                                createVNode(unref(Nu), { class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                                                  default: withCtx(() => [
                                                                    createTextVNode(" Create Shortcut… ")
                                                                  ]),
                                                                  _: 1
                                                                }),
                                                                createVNode(unref(Nu), { class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                                                  default: withCtx(() => [
                                                                    createTextVNode(" Name Window… ")
                                                                  ]),
                                                                  _: 1
                                                                }),
                                                                createVNode(unref(ju), { class: "h-[1px] bg-green6 m-[5px]" }),
                                                                createVNode(unref(Nu), { class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                                                  default: withCtx(() => [
                                                                    createTextVNode(" Developer Tools ")
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
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(unref(Nu), { class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Developer Tools ")
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
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(ju), { class: "h-[1px] bg-green6 m-[5px]" }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(Wu), {
                          modelValue: checkboxOne.value,
                          "onUpdate:modelValue": ($event) => checkboxOne.value = $event,
                          class: "group text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(zu), { class: "absolute left-0 w-[25px] inline-flex items-center justify-center" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(unref(Icon), { icon: "radix-icons:check" }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(unref(Icon), { icon: "radix-icons:check" })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(` Show Bookmarks <div class="ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8"${_scopeId4}> ⌘+B </div>`);
                            } else {
                              return [
                                createVNode(unref(zu), { class: "absolute left-0 w-[25px] inline-flex items-center justify-center" }, {
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
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(Wu), {
                          modelValue: checkboxTwo.value,
                          "onUpdate:modelValue": ($event) => checkboxTwo.value = $event,
                          class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(zu), { class: "absolute left-0 w-[25px] inline-flex items-center justify-center" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(unref(Icon), { icon: "radix-icons:check" }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(unref(Icon), { icon: "radix-icons:check" })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(` Show Full URLs `);
                            } else {
                              return [
                                createVNode(unref(zu), { class: "absolute left-0 w-[25px] inline-flex items-center justify-center" }, {
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
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(ju), { class: "h-[1px] bg-green6 m-[5px]" }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(Uu), { class: "pl-[25px] text-xs leading-[25px] text-mauve11" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` People `);
                            } else {
                              return [
                                createTextVNode(" People ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(qu), {
                          modelValue: person.value,
                          "onUpdate:modelValue": ($event) => person.value = $event
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(Gu), {
                                class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1",
                                value: "pedro"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(unref(zu), { class: "absolute left-0 w-[25px] inline-flex items-center justify-center" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(unref(Icon), { icon: "radix-icons:dot-filled" }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(unref(Icon), { icon: "radix-icons:dot-filled" })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(` Pedro Duarte `);
                                  } else {
                                    return [
                                      createVNode(unref(zu), { class: "absolute left-0 w-[25px] inline-flex items-center justify-center" }, {
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
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(Gu), {
                                class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1",
                                value: "colm"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(unref(zu), { class: "absolute left-0 w-[25px] inline-flex items-center justify-center" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(unref(Icon), { icon: "radix-icons:dot-filled" }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(unref(Icon), { icon: "radix-icons:dot-filled" })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(` Colm Tuite `);
                                  } else {
                                    return [
                                      createVNode(unref(zu), { class: "absolute left-0 w-[25px] inline-flex items-center justify-center" }, {
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
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(Gu), {
                                  class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1",
                                  value: "pedro"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(zu), { class: "absolute left-0 w-[25px] inline-flex items-center justify-center" }, {
                                      default: withCtx(() => [
                                        createVNode(unref(Icon), { icon: "radix-icons:dot-filled" })
                                      ]),
                                      _: 1
                                    }),
                                    createTextVNode(" Pedro Duarte ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(Gu), {
                                  class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1",
                                  value: "colm"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(zu), { class: "absolute left-0 w-[25px] inline-flex items-center justify-center" }, {
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(Nu), {
                            value: "New Tab",
                            class: "group text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1",
                            onClick: handleClick
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" New Tab "),
                              createVNode("div", { class: "ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8" }, " ⌘+T ")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(Yu), null, {
                            default: withCtx(() => [
                              createVNode(unref(Ju), {
                                value: "more toolsz",
                                class: "group w-full text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:bg-green9 data-[highlighted]:data-[state=open]:text-green1"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" More Tools "),
                                  createVNode("div", { class: "ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8" }, [
                                    createVNode(unref(Icon), { icon: "radix-icons:chevron-right" })
                                  ])
                                ]),
                                _: 1
                              }),
                              createVNode(unref(Fu), null, {
                                default: withCtx(() => [
                                  createVNode(unref(Xu), {
                                    class: "min-w-[220px] z-30 outline-none bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade",
                                    "side-offset": 2,
                                    "align-offset": -5
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(Nu), { class: "group text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Save Page As… "),
                                          createVNode("div", { class: "ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8" }, " ⌘+S ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(unref(Nu), { class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Create Shortcut… ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(unref(Nu), { class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Name Window… ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(unref(ju), { class: "h-[1px] bg-green6 m-[5px]" }),
                                      createVNode(unref(Nu), { class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Developer Tools ")
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
                          createVNode(unref(Nu), {
                            value: "New Window",
                            class: "group text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" New Window "),
                              createVNode("div", { class: "ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8" }, " ⌘+N ")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(Nu), {
                            value: "New Private Window",
                            class: "group text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1",
                            disabled: ""
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" New Private Window "),
                              createVNode("div", { class: "ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8" }, " ⇧+⌘+N ")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(Yu), null, {
                            default: withCtx(() => [
                              createVNode(unref(Ju), {
                                value: "more tools",
                                class: "group text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none w-full outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:bg-green9 data-[highlighted]:data-[state=open]:text-green1"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" More Tools "),
                                  createVNode("div", { class: "ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8" }, [
                                    createVNode(unref(Icon), { icon: "radix-icons:chevron-right" })
                                  ])
                                ]),
                                _: 1
                              }),
                              createVNode(unref(Fu), null, {
                                default: withCtx(() => [
                                  createVNode(unref(Xu), {
                                    class: "min-w-[220px] z-30 outline-none bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade",
                                    "side-offset": 2,
                                    "align-offset": -5
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(Nu), { class: "group text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Save Page As… "),
                                          createVNode("div", { class: "ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8" }, " ⌘+S ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(unref(Nu), { class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Create Shortcut… ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(unref(Nu), { class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Name Window… ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(unref(ju), { class: "h-[1px] bg-green6 m-[5px]" }),
                                      createVNode(unref(Nu), { class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Developer Tools ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(unref(Yu), null, {
                                        default: withCtx(() => [
                                          createVNode(unref(Ju), {
                                            value: "more toolsz",
                                            class: "group w-full text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:bg-green9 data-[highlighted]:data-[state=open]:text-green1"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" More Tools "),
                                              createVNode("div", { class: "ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8" }, [
                                                createVNode(unref(Icon), { icon: "radix-icons:chevron-right" })
                                              ])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(unref(Fu), null, {
                                            default: withCtx(() => [
                                              createVNode(unref(Xu), {
                                                class: "min-w-[220px] z-30 outline-none bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade",
                                                "side-offset": 2,
                                                "align-offset": -5
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(unref(Nu), { class: "group text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" Save Page As… "),
                                                      createVNode("div", { class: "ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8" }, " ⌘+S ")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(unref(Nu), { class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" Create Shortcut… ")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(unref(Nu), { class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" Name Window… ")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(unref(ju), { class: "h-[1px] bg-green6 m-[5px]" }),
                                                  createVNode(unref(Nu), { class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" Developer Tools ")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(unref(Yu), null, {
                                                    default: withCtx(() => [
                                                      createVNode(unref(Ju), {
                                                        value: "more toolsz",
                                                        class: "group w-full text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:bg-green9 data-[highlighted]:data-[state=open]:text-green1"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(" More Tools "),
                                                          createVNode("div", { class: "ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8" }, [
                                                            createVNode(unref(Icon), { icon: "radix-icons:chevron-right" })
                                                          ])
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(unref(Fu), null, {
                                                        default: withCtx(() => [
                                                          createVNode(unref(Xu), {
                                                            class: "min-w-[220px] z-30 outline-none bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade",
                                                            "side-offset": 2,
                                                            "align-offset": -5
                                                          }, {
                                                            default: withCtx(() => [
                                                              createVNode(unref(Nu), { class: "group text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                                                default: withCtx(() => [
                                                                  createTextVNode(" Save Page As… "),
                                                                  createVNode("div", { class: "ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8" }, " ⌘+S ")
                                                                ]),
                                                                _: 1
                                                              }),
                                                              createVNode(unref(Nu), { class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                                                default: withCtx(() => [
                                                                  createTextVNode(" Create Shortcut… ")
                                                                ]),
                                                                _: 1
                                                              }),
                                                              createVNode(unref(Nu), { class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                                                default: withCtx(() => [
                                                                  createTextVNode(" Name Window… ")
                                                                ]),
                                                                _: 1
                                                              }),
                                                              createVNode(unref(ju), { class: "h-[1px] bg-green6 m-[5px]" }),
                                                              createVNode(unref(Nu), { class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                                                default: withCtx(() => [
                                                                  createTextVNode(" Developer Tools ")
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
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(unref(Nu), { class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Developer Tools ")
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
                          createVNode(unref(ju), { class: "h-[1px] bg-green6 m-[5px]" }),
                          createVNode(unref(Wu), {
                            modelValue: checkboxOne.value,
                            "onUpdate:modelValue": ($event) => checkboxOne.value = $event,
                            class: "group text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1"
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(zu), { class: "absolute left-0 w-[25px] inline-flex items-center justify-center" }, {
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
                          createVNode(unref(Wu), {
                            modelValue: checkboxTwo.value,
                            "onUpdate:modelValue": ($event) => checkboxTwo.value = $event,
                            class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1"
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(zu), { class: "absolute left-0 w-[25px] inline-flex items-center justify-center" }, {
                                default: withCtx(() => [
                                  createVNode(unref(Icon), { icon: "radix-icons:check" })
                                ]),
                                _: 1
                              }),
                              createTextVNode(" Show Full URLs ")
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(unref(ju), { class: "h-[1px] bg-green6 m-[5px]" }),
                          createVNode(unref(Uu), { class: "pl-[25px] text-xs leading-[25px] text-mauve11" }, {
                            default: withCtx(() => [
                              createTextVNode(" People ")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(qu), {
                            modelValue: person.value,
                            "onUpdate:modelValue": ($event) => person.value = $event
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(Gu), {
                                class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1",
                                value: "pedro"
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(zu), { class: "absolute left-0 w-[25px] inline-flex items-center justify-center" }, {
                                    default: withCtx(() => [
                                      createVNode(unref(Icon), { icon: "radix-icons:dot-filled" })
                                    ]),
                                    _: 1
                                  }),
                                  createTextVNode(" Pedro Duarte ")
                                ]),
                                _: 1
                              }),
                              createVNode(unref(Gu), {
                                class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1",
                                value: "colm"
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(zu), { class: "absolute left-0 w-[25px] inline-flex items-center justify-center" }, {
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
                          }, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(Lu), {
                      class: "min-w-[220px] z-30 bg-white outline-none rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade",
                      "side-offset": 5
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(Nu), {
                          value: "New Tab",
                          class: "group text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1",
                          onClick: handleClick
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" New Tab "),
                            createVNode("div", { class: "ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8" }, " ⌘+T ")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(Yu), null, {
                          default: withCtx(() => [
                            createVNode(unref(Ju), {
                              value: "more toolsz",
                              class: "group w-full text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:bg-green9 data-[highlighted]:data-[state=open]:text-green1"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" More Tools "),
                                createVNode("div", { class: "ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8" }, [
                                  createVNode(unref(Icon), { icon: "radix-icons:chevron-right" })
                                ])
                              ]),
                              _: 1
                            }),
                            createVNode(unref(Fu), null, {
                              default: withCtx(() => [
                                createVNode(unref(Xu), {
                                  class: "min-w-[220px] z-30 outline-none bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade",
                                  "side-offset": 2,
                                  "align-offset": -5
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(Nu), { class: "group text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Save Page As… "),
                                        createVNode("div", { class: "ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8" }, " ⌘+S ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(unref(Nu), { class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Create Shortcut… ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(unref(Nu), { class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Name Window… ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(unref(ju), { class: "h-[1px] bg-green6 m-[5px]" }),
                                    createVNode(unref(Nu), { class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Developer Tools ")
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
                        createVNode(unref(Nu), {
                          value: "New Window",
                          class: "group text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" New Window "),
                            createVNode("div", { class: "ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8" }, " ⌘+N ")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(Nu), {
                          value: "New Private Window",
                          class: "group text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1",
                          disabled: ""
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" New Private Window "),
                            createVNode("div", { class: "ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8" }, " ⇧+⌘+N ")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(Yu), null, {
                          default: withCtx(() => [
                            createVNode(unref(Ju), {
                              value: "more tools",
                              class: "group text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none w-full outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:bg-green9 data-[highlighted]:data-[state=open]:text-green1"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" More Tools "),
                                createVNode("div", { class: "ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8" }, [
                                  createVNode(unref(Icon), { icon: "radix-icons:chevron-right" })
                                ])
                              ]),
                              _: 1
                            }),
                            createVNode(unref(Fu), null, {
                              default: withCtx(() => [
                                createVNode(unref(Xu), {
                                  class: "min-w-[220px] z-30 outline-none bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade",
                                  "side-offset": 2,
                                  "align-offset": -5
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(Nu), { class: "group text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Save Page As… "),
                                        createVNode("div", { class: "ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8" }, " ⌘+S ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(unref(Nu), { class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Create Shortcut… ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(unref(Nu), { class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Name Window… ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(unref(ju), { class: "h-[1px] bg-green6 m-[5px]" }),
                                    createVNode(unref(Nu), { class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Developer Tools ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(unref(Yu), null, {
                                      default: withCtx(() => [
                                        createVNode(unref(Ju), {
                                          value: "more toolsz",
                                          class: "group w-full text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:bg-green9 data-[highlighted]:data-[state=open]:text-green1"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" More Tools "),
                                            createVNode("div", { class: "ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8" }, [
                                              createVNode(unref(Icon), { icon: "radix-icons:chevron-right" })
                                            ])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(unref(Fu), null, {
                                          default: withCtx(() => [
                                            createVNode(unref(Xu), {
                                              class: "min-w-[220px] z-30 outline-none bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade",
                                              "side-offset": 2,
                                              "align-offset": -5
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(unref(Nu), { class: "group text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" Save Page As… "),
                                                    createVNode("div", { class: "ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8" }, " ⌘+S ")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(unref(Nu), { class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" Create Shortcut… ")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(unref(Nu), { class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" Name Window… ")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(unref(ju), { class: "h-[1px] bg-green6 m-[5px]" }),
                                                createVNode(unref(Nu), { class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" Developer Tools ")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(unref(Yu), null, {
                                                  default: withCtx(() => [
                                                    createVNode(unref(Ju), {
                                                      value: "more toolsz",
                                                      class: "group w-full text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:bg-green9 data-[highlighted]:data-[state=open]:text-green1"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(" More Tools "),
                                                        createVNode("div", { class: "ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8" }, [
                                                          createVNode(unref(Icon), { icon: "radix-icons:chevron-right" })
                                                        ])
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(unref(Fu), null, {
                                                      default: withCtx(() => [
                                                        createVNode(unref(Xu), {
                                                          class: "min-w-[220px] z-30 outline-none bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade",
                                                          "side-offset": 2,
                                                          "align-offset": -5
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode(unref(Nu), { class: "group text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                                              default: withCtx(() => [
                                                                createTextVNode(" Save Page As… "),
                                                                createVNode("div", { class: "ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8" }, " ⌘+S ")
                                                              ]),
                                                              _: 1
                                                            }),
                                                            createVNode(unref(Nu), { class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                                              default: withCtx(() => [
                                                                createTextVNode(" Create Shortcut… ")
                                                              ]),
                                                              _: 1
                                                            }),
                                                            createVNode(unref(Nu), { class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                                              default: withCtx(() => [
                                                                createTextVNode(" Name Window… ")
                                                              ]),
                                                              _: 1
                                                            }),
                                                            createVNode(unref(ju), { class: "h-[1px] bg-green6 m-[5px]" }),
                                                            createVNode(unref(Nu), { class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                                              default: withCtx(() => [
                                                                createTextVNode(" Developer Tools ")
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
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(unref(Nu), { class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Developer Tools ")
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
                        createVNode(unref(ju), { class: "h-[1px] bg-green6 m-[5px]" }),
                        createVNode(unref(Wu), {
                          modelValue: checkboxOne.value,
                          "onUpdate:modelValue": ($event) => checkboxOne.value = $event,
                          class: "group text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1"
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(zu), { class: "absolute left-0 w-[25px] inline-flex items-center justify-center" }, {
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
                        createVNode(unref(Wu), {
                          modelValue: checkboxTwo.value,
                          "onUpdate:modelValue": ($event) => checkboxTwo.value = $event,
                          class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1"
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(zu), { class: "absolute left-0 w-[25px] inline-flex items-center justify-center" }, {
                              default: withCtx(() => [
                                createVNode(unref(Icon), { icon: "radix-icons:check" })
                              ]),
                              _: 1
                            }),
                            createTextVNode(" Show Full URLs ")
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode(unref(ju), { class: "h-[1px] bg-green6 m-[5px]" }),
                        createVNode(unref(Uu), { class: "pl-[25px] text-xs leading-[25px] text-mauve11" }, {
                          default: withCtx(() => [
                            createTextVNode(" People ")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(qu), {
                          modelValue: person.value,
                          "onUpdate:modelValue": ($event) => person.value = $event
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(Gu), {
                              class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1",
                              value: "pedro"
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(zu), { class: "absolute left-0 w-[25px] inline-flex items-center justify-center" }, {
                                  default: withCtx(() => [
                                    createVNode(unref(Icon), { icon: "radix-icons:dot-filled" })
                                  ]),
                                  _: 1
                                }),
                                createTextVNode(" Pedro Duarte ")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(Gu), {
                              class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1",
                              value: "colm"
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(zu), { class: "absolute left-0 w-[25px] inline-flex items-center justify-center" }, {
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
                        }, 8, ["modelValue", "onUpdate:modelValue"])
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
              createVNode(unref(Vu), {
                "as-child": "",
                class: "block border-2 border-white border-dashed text-white rounded text-[15px] select-none py-[45px] w-[300px] text-center"
              }, {
                default: withCtx(() => [
                  createVNode("span", null, " Right click here. ")
                ]),
                _: 1
              }),
              createVNode(unref(Fu), null, {
                default: withCtx(() => [
                  createVNode(unref(Lu), {
                    class: "min-w-[220px] z-30 bg-white outline-none rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade",
                    "side-offset": 5
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(Nu), {
                        value: "New Tab",
                        class: "group text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1",
                        onClick: handleClick
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" New Tab "),
                          createVNode("div", { class: "ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8" }, " ⌘+T ")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(Yu), null, {
                        default: withCtx(() => [
                          createVNode(unref(Ju), {
                            value: "more toolsz",
                            class: "group w-full text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:bg-green9 data-[highlighted]:data-[state=open]:text-green1"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" More Tools "),
                              createVNode("div", { class: "ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8" }, [
                                createVNode(unref(Icon), { icon: "radix-icons:chevron-right" })
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode(unref(Fu), null, {
                            default: withCtx(() => [
                              createVNode(unref(Xu), {
                                class: "min-w-[220px] z-30 outline-none bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade",
                                "side-offset": 2,
                                "align-offset": -5
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(Nu), { class: "group text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Save Page As… "),
                                      createVNode("div", { class: "ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8" }, " ⌘+S ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(unref(Nu), { class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Create Shortcut… ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(unref(Nu), { class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Name Window… ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(unref(ju), { class: "h-[1px] bg-green6 m-[5px]" }),
                                  createVNode(unref(Nu), { class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Developer Tools ")
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
                      createVNode(unref(Nu), {
                        value: "New Window",
                        class: "group text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" New Window "),
                          createVNode("div", { class: "ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8" }, " ⌘+N ")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(Nu), {
                        value: "New Private Window",
                        class: "group text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1",
                        disabled: ""
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" New Private Window "),
                          createVNode("div", { class: "ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8" }, " ⇧+⌘+N ")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(Yu), null, {
                        default: withCtx(() => [
                          createVNode(unref(Ju), {
                            value: "more tools",
                            class: "group text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none w-full outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:bg-green9 data-[highlighted]:data-[state=open]:text-green1"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" More Tools "),
                              createVNode("div", { class: "ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8" }, [
                                createVNode(unref(Icon), { icon: "radix-icons:chevron-right" })
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode(unref(Fu), null, {
                            default: withCtx(() => [
                              createVNode(unref(Xu), {
                                class: "min-w-[220px] z-30 outline-none bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade",
                                "side-offset": 2,
                                "align-offset": -5
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(Nu), { class: "group text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Save Page As… "),
                                      createVNode("div", { class: "ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8" }, " ⌘+S ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(unref(Nu), { class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Create Shortcut… ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(unref(Nu), { class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Name Window… ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(unref(ju), { class: "h-[1px] bg-green6 m-[5px]" }),
                                  createVNode(unref(Nu), { class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Developer Tools ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(unref(Yu), null, {
                                    default: withCtx(() => [
                                      createVNode(unref(Ju), {
                                        value: "more toolsz",
                                        class: "group w-full text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:bg-green9 data-[highlighted]:data-[state=open]:text-green1"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" More Tools "),
                                          createVNode("div", { class: "ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8" }, [
                                            createVNode(unref(Icon), { icon: "radix-icons:chevron-right" })
                                          ])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(unref(Fu), null, {
                                        default: withCtx(() => [
                                          createVNode(unref(Xu), {
                                            class: "min-w-[220px] z-30 outline-none bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade",
                                            "side-offset": 2,
                                            "align-offset": -5
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(unref(Nu), { class: "group text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" Save Page As… "),
                                                  createVNode("div", { class: "ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8" }, " ⌘+S ")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(unref(Nu), { class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" Create Shortcut… ")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(unref(Nu), { class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" Name Window… ")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(unref(ju), { class: "h-[1px] bg-green6 m-[5px]" }),
                                              createVNode(unref(Nu), { class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" Developer Tools ")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(unref(Yu), null, {
                                                default: withCtx(() => [
                                                  createVNode(unref(Ju), {
                                                    value: "more toolsz",
                                                    class: "group w-full text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:bg-green9 data-[highlighted]:data-[state=open]:text-green1"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" More Tools "),
                                                      createVNode("div", { class: "ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8" }, [
                                                        createVNode(unref(Icon), { icon: "radix-icons:chevron-right" })
                                                      ])
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(unref(Fu), null, {
                                                    default: withCtx(() => [
                                                      createVNode(unref(Xu), {
                                                        class: "min-w-[220px] z-30 outline-none bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade",
                                                        "side-offset": 2,
                                                        "align-offset": -5
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(unref(Nu), { class: "group text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                                            default: withCtx(() => [
                                                              createTextVNode(" Save Page As… "),
                                                              createVNode("div", { class: "ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8" }, " ⌘+S ")
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createVNode(unref(Nu), { class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                                            default: withCtx(() => [
                                                              createTextVNode(" Create Shortcut… ")
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createVNode(unref(Nu), { class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                                            default: withCtx(() => [
                                                              createTextVNode(" Name Window… ")
                                                            ]),
                                                            _: 1
                                                          }),
                                                          createVNode(unref(ju), { class: "h-[1px] bg-green6 m-[5px]" }),
                                                          createVNode(unref(Nu), { class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                                            default: withCtx(() => [
                                                              createTextVNode(" Developer Tools ")
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
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(unref(Nu), { class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1" }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Developer Tools ")
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
                      createVNode(unref(ju), { class: "h-[1px] bg-green6 m-[5px]" }),
                      createVNode(unref(Wu), {
                        modelValue: checkboxOne.value,
                        "onUpdate:modelValue": ($event) => checkboxOne.value = $event,
                        class: "group text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(zu), { class: "absolute left-0 w-[25px] inline-flex items-center justify-center" }, {
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
                      createVNode(unref(Wu), {
                        modelValue: checkboxTwo.value,
                        "onUpdate:modelValue": ($event) => checkboxTwo.value = $event,
                        class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(zu), { class: "absolute left-0 w-[25px] inline-flex items-center justify-center" }, {
                            default: withCtx(() => [
                              createVNode(unref(Icon), { icon: "radix-icons:check" })
                            ]),
                            _: 1
                          }),
                          createTextVNode(" Show Full URLs ")
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(unref(ju), { class: "h-[1px] bg-green6 m-[5px]" }),
                      createVNode(unref(Uu), { class: "pl-[25px] text-xs leading-[25px] text-mauve11" }, {
                        default: withCtx(() => [
                          createTextVNode(" People ")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(qu), {
                        modelValue: person.value,
                        "onUpdate:modelValue": ($event) => person.value = $event
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(Gu), {
                            class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1",
                            value: "pedro"
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(zu), { class: "absolute left-0 w-[25px] inline-flex items-center justify-center" }, {
                                default: withCtx(() => [
                                  createVNode(unref(Icon), { icon: "radix-icons:dot-filled" })
                                ]),
                                _: 1
                              }),
                              createTextVNode(" Pedro Duarte ")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(Gu), {
                            class: "text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1",
                            value: "colm"
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(zu), { class: "absolute left-0 w-[25px] inline-flex items-center justify-center" }, {
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
                      }, 8, ["modelValue", "onUpdate:modelValue"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../components/demo/ContextMenu/tailwind/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
