import { defineComponent, ref, unref, mergeProps, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { bL as sp, bM as lp, bN as ip, bO as up, bP as rp, bQ as Li } from "./index.faJ9MUPN.js";
import { Icon } from "@iconify/vue";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const toggleStateSingle = ref("center");
    const toggleStateMultiple = ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(sp), mergeProps({
        class: "flex p-[10px] w-full max-w-[610px] !min-w-max rounded-md bg-white shadow-[0_2px_10px] shadow-blackA7",
        "aria-label": "Formatting options"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(lp), {
              modelValue: toggleStateMultiple.value,
              "onUpdate:modelValue": ($event) => toggleStateMultiple.value = $event,
              type: "multiple",
              "aria-label": "Text formatting"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(ip), {
                    class: "flex-shrink-0 flex-grow-0 basis-auto text-mauve11 h-[25px] px-[5px] rounded inline-flex text-[13px] leading-none items-center justify-center bg-white ml-0.5 outline-none hover:bg-green3 hover:text-grass11 focus:relative focus:shadow-[0_0_0_2px] focus:shadow-green7 first:ml-0 data-[state=on]:bg-green5 data-[state=on]:text-grass11",
                    value: "bold",
                    "aria-label": "Bold"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(Icon), {
                          class: "w-[15px] h-[15px]",
                          icon: "radix-icons:font-bold"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(Icon), {
                            class: "w-[15px] h-[15px]",
                            icon: "radix-icons:font-bold"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(ip), {
                    class: "flex-shrink-0 flex-grow-0 basis-auto text-mauve11 h-[25px] px-[5px] rounded inline-flex text-[13px] leading-none items-center justify-center bg-white ml-0.5 outline-none hover:bg-green3 hover:text-grass11 focus:relative focus:shadow-[0_0_0_2px] focus:shadow-green7 first:ml-0 data-[state=on]:bg-green5 data-[state=on]:text-grass11",
                    value: "italic",
                    "aria-label": "Italic"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(Icon), {
                          class: "w-[15px] h-[15px]",
                          icon: "radix-icons:font-italic"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(Icon), {
                            class: "w-[15px] h-[15px]",
                            icon: "radix-icons:font-italic"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(ip), {
                    class: "flex-shrink-0 flex-grow-0 basis-auto text-mauve11 h-[25px] px-[5px] rounded inline-flex text-[13px] leading-none items-center justify-center bg-white ml-0.5 outline-none hover:bg-green3 hover:text-grass11 focus:relative focus:shadow-[0_0_0_2px] focus:shadow-green7 first:ml-0 data-[state=on]:bg-green5 data-[state=on]:text-grass11",
                    value: "strikethrough",
                    "aria-label": "Strike through"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(Icon), {
                          class: "w-[15px] h-[15px]",
                          icon: "radix-icons:strikethrough"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(Icon), {
                            class: "w-[15px] h-[15px]",
                            icon: "radix-icons:strikethrough"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(ip), {
                      class: "flex-shrink-0 flex-grow-0 basis-auto text-mauve11 h-[25px] px-[5px] rounded inline-flex text-[13px] leading-none items-center justify-center bg-white ml-0.5 outline-none hover:bg-green3 hover:text-grass11 focus:relative focus:shadow-[0_0_0_2px] focus:shadow-green7 first:ml-0 data-[state=on]:bg-green5 data-[state=on]:text-grass11",
                      value: "bold",
                      "aria-label": "Bold"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(Icon), {
                          class: "w-[15px] h-[15px]",
                          icon: "radix-icons:font-bold"
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(ip), {
                      class: "flex-shrink-0 flex-grow-0 basis-auto text-mauve11 h-[25px] px-[5px] rounded inline-flex text-[13px] leading-none items-center justify-center bg-white ml-0.5 outline-none hover:bg-green3 hover:text-grass11 focus:relative focus:shadow-[0_0_0_2px] focus:shadow-green7 first:ml-0 data-[state=on]:bg-green5 data-[state=on]:text-grass11",
                      value: "italic",
                      "aria-label": "Italic"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(Icon), {
                          class: "w-[15px] h-[15px]",
                          icon: "radix-icons:font-italic"
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(ip), {
                      class: "flex-shrink-0 flex-grow-0 basis-auto text-mauve11 h-[25px] px-[5px] rounded inline-flex text-[13px] leading-none items-center justify-center bg-white ml-0.5 outline-none hover:bg-green3 hover:text-grass11 focus:relative focus:shadow-[0_0_0_2px] focus:shadow-green7 first:ml-0 data-[state=on]:bg-green5 data-[state=on]:text-grass11",
                      value: "strikethrough",
                      "aria-label": "Strike through"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(Icon), {
                          class: "w-[15px] h-[15px]",
                          icon: "radix-icons:strikethrough"
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(up), { class: "w-[1px] bg-mauve6 mx-[10px]" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(lp), {
              modelValue: toggleStateSingle.value,
              "onUpdate:modelValue": ($event) => toggleStateSingle.value = $event,
              type: "single",
              "aria-label": "Text Alignment"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(ip), {
                    class: "flex-shrink-0 flex-grow-0 basis-auto text-mauve11 h-[25px] px-[5px] rounded inline-flex text-[13px] leading-none items-center justify-center bg-white ml-0.5 outline-none hover:bg-green3 hover:text-grass11 focus:relative focus:shadow-[0_0_0_2px] focus:shadow-green7 first:ml-0 data-[state=on]:bg-green5 data-[state=on]:text-grass11",
                    value: "left",
                    "aria-label": "Left Aligned"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(Icon), {
                          class: "w-[15px] h-[15px]",
                          icon: "radix-icons:text-align-left"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(Icon), {
                            class: "w-[15px] h-[15px]",
                            icon: "radix-icons:text-align-left"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(ip), {
                    class: "flex-shrink-0 flex-grow-0 basis-auto text-mauve11 h-[25px] px-[5px] rounded inline-flex text-[13px] leading-none items-center justify-center bg-white ml-0.5 outline-none hover:bg-green3 hover:text-grass11 focus:relative focus:shadow-[0_0_0_2px] focus:shadow-green7 first:ml-0 data-[state=on]:bg-green5 data-[state=on]:text-grass11",
                    value: "center",
                    "aria-label": "Center Aligned"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(Icon), {
                          class: "w-[15px] h-[15px]",
                          icon: "radix-icons:text-align-center"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(Icon), {
                            class: "w-[15px] h-[15px]",
                            icon: "radix-icons:text-align-center"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(ip), {
                    class: "flex-shrink-0 flex-grow-0 basis-auto text-mauve11 h-[25px] px-[5px] rounded inline-flex text-[13px] leading-none items-center justify-center bg-white ml-0.5 outline-none hover:bg-green3 hover:text-grass11 focus:relative focus:shadow-[0_0_0_2px] focus:shadow-green7 first:ml-0 data-[state=on]:bg-green5 data-[state=on]:text-grass11",
                    value: "right",
                    "aria-label": "Right Aligned"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(Icon), {
                          class: "w-[15px] h-[15px]",
                          icon: "radix-icons:text-align-right"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(Icon), {
                            class: "w-[15px] h-[15px]",
                            icon: "radix-icons:text-align-right"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(ip), {
                      class: "flex-shrink-0 flex-grow-0 basis-auto text-mauve11 h-[25px] px-[5px] rounded inline-flex text-[13px] leading-none items-center justify-center bg-white ml-0.5 outline-none hover:bg-green3 hover:text-grass11 focus:relative focus:shadow-[0_0_0_2px] focus:shadow-green7 first:ml-0 data-[state=on]:bg-green5 data-[state=on]:text-grass11",
                      value: "left",
                      "aria-label": "Left Aligned"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(Icon), {
                          class: "w-[15px] h-[15px]",
                          icon: "radix-icons:text-align-left"
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(ip), {
                      class: "flex-shrink-0 flex-grow-0 basis-auto text-mauve11 h-[25px] px-[5px] rounded inline-flex text-[13px] leading-none items-center justify-center bg-white ml-0.5 outline-none hover:bg-green3 hover:text-grass11 focus:relative focus:shadow-[0_0_0_2px] focus:shadow-green7 first:ml-0 data-[state=on]:bg-green5 data-[state=on]:text-grass11",
                      value: "center",
                      "aria-label": "Center Aligned"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(Icon), {
                          class: "w-[15px] h-[15px]",
                          icon: "radix-icons:text-align-center"
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(ip), {
                      class: "flex-shrink-0 flex-grow-0 basis-auto text-mauve11 h-[25px] px-[5px] rounded inline-flex text-[13px] leading-none items-center justify-center bg-white ml-0.5 outline-none hover:bg-green3 hover:text-grass11 focus:relative focus:shadow-[0_0_0_2px] focus:shadow-green7 first:ml-0 data-[state=on]:bg-green5 data-[state=on]:text-grass11",
                      value: "right",
                      "aria-label": "Right Aligned"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(Icon), {
                          class: "w-[15px] h-[15px]",
                          icon: "radix-icons:text-align-right"
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(up), { class: "w-[1px] bg-mauve6 mx-[10px]" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(rp), {
              class: "bg-transparent !font-normal !text-mauve11 inline-flex justify-center items-center hover:bg-transparent hover:cursor-pointer flex-shrink-0 flex-grow-0 basis-auto h-[25px] px-[5px] rounded text-[13px] leading-none bg-white ml-0.5 outline-none hover:bg-green3 hover:text-grass11 focus:relative focus:shadow-[0_0_0_2px] focus:shadow-green7 first:ml-0 data-[state=on]:bg-green5 data-[state=on]:text-grass11",
              href: "#",
              target: "_blank",
              style: { "margin-right": "10" }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Edited 2 hours ago `);
                } else {
                  return [
                    createTextVNode(" Edited 2 hours ago ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Li), {
              class: "px-[10px] text-white bg-green9 flex-shrink-0 flex-grow-0 basis-auto h-[25px] rounded inline-flex text-[13px] leading-none items-center justify-center outline-none hover:bg-green10 focus:relative focus:shadow-[0_0_0_2px] focus:shadow-green7",
              style: { "margin-left": "auto" }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Share `);
                } else {
                  return [
                    createTextVNode(" Share ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(lp), {
                modelValue: toggleStateMultiple.value,
                "onUpdate:modelValue": ($event) => toggleStateMultiple.value = $event,
                type: "multiple",
                "aria-label": "Text formatting"
              }, {
                default: withCtx(() => [
                  createVNode(unref(ip), {
                    class: "flex-shrink-0 flex-grow-0 basis-auto text-mauve11 h-[25px] px-[5px] rounded inline-flex text-[13px] leading-none items-center justify-center bg-white ml-0.5 outline-none hover:bg-green3 hover:text-grass11 focus:relative focus:shadow-[0_0_0_2px] focus:shadow-green7 first:ml-0 data-[state=on]:bg-green5 data-[state=on]:text-grass11",
                    value: "bold",
                    "aria-label": "Bold"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(Icon), {
                        class: "w-[15px] h-[15px]",
                        icon: "radix-icons:font-bold"
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(unref(ip), {
                    class: "flex-shrink-0 flex-grow-0 basis-auto text-mauve11 h-[25px] px-[5px] rounded inline-flex text-[13px] leading-none items-center justify-center bg-white ml-0.5 outline-none hover:bg-green3 hover:text-grass11 focus:relative focus:shadow-[0_0_0_2px] focus:shadow-green7 first:ml-0 data-[state=on]:bg-green5 data-[state=on]:text-grass11",
                    value: "italic",
                    "aria-label": "Italic"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(Icon), {
                        class: "w-[15px] h-[15px]",
                        icon: "radix-icons:font-italic"
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(unref(ip), {
                    class: "flex-shrink-0 flex-grow-0 basis-auto text-mauve11 h-[25px] px-[5px] rounded inline-flex text-[13px] leading-none items-center justify-center bg-white ml-0.5 outline-none hover:bg-green3 hover:text-grass11 focus:relative focus:shadow-[0_0_0_2px] focus:shadow-green7 first:ml-0 data-[state=on]:bg-green5 data-[state=on]:text-grass11",
                    value: "strikethrough",
                    "aria-label": "Strike through"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(Icon), {
                        class: "w-[15px] h-[15px]",
                        icon: "radix-icons:strikethrough"
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(unref(up), { class: "w-[1px] bg-mauve6 mx-[10px]" }),
              createVNode(unref(lp), {
                modelValue: toggleStateSingle.value,
                "onUpdate:modelValue": ($event) => toggleStateSingle.value = $event,
                type: "single",
                "aria-label": "Text Alignment"
              }, {
                default: withCtx(() => [
                  createVNode(unref(ip), {
                    class: "flex-shrink-0 flex-grow-0 basis-auto text-mauve11 h-[25px] px-[5px] rounded inline-flex text-[13px] leading-none items-center justify-center bg-white ml-0.5 outline-none hover:bg-green3 hover:text-grass11 focus:relative focus:shadow-[0_0_0_2px] focus:shadow-green7 first:ml-0 data-[state=on]:bg-green5 data-[state=on]:text-grass11",
                    value: "left",
                    "aria-label": "Left Aligned"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(Icon), {
                        class: "w-[15px] h-[15px]",
                        icon: "radix-icons:text-align-left"
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(unref(ip), {
                    class: "flex-shrink-0 flex-grow-0 basis-auto text-mauve11 h-[25px] px-[5px] rounded inline-flex text-[13px] leading-none items-center justify-center bg-white ml-0.5 outline-none hover:bg-green3 hover:text-grass11 focus:relative focus:shadow-[0_0_0_2px] focus:shadow-green7 first:ml-0 data-[state=on]:bg-green5 data-[state=on]:text-grass11",
                    value: "center",
                    "aria-label": "Center Aligned"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(Icon), {
                        class: "w-[15px] h-[15px]",
                        icon: "radix-icons:text-align-center"
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(unref(ip), {
                    class: "flex-shrink-0 flex-grow-0 basis-auto text-mauve11 h-[25px] px-[5px] rounded inline-flex text-[13px] leading-none items-center justify-center bg-white ml-0.5 outline-none hover:bg-green3 hover:text-grass11 focus:relative focus:shadow-[0_0_0_2px] focus:shadow-green7 first:ml-0 data-[state=on]:bg-green5 data-[state=on]:text-grass11",
                    value: "right",
                    "aria-label": "Right Aligned"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(Icon), {
                        class: "w-[15px] h-[15px]",
                        icon: "radix-icons:text-align-right"
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(unref(up), { class: "w-[1px] bg-mauve6 mx-[10px]" }),
              createVNode(unref(rp), {
                class: "bg-transparent !font-normal !text-mauve11 inline-flex justify-center items-center hover:bg-transparent hover:cursor-pointer flex-shrink-0 flex-grow-0 basis-auto h-[25px] px-[5px] rounded text-[13px] leading-none bg-white ml-0.5 outline-none hover:bg-green3 hover:text-grass11 focus:relative focus:shadow-[0_0_0_2px] focus:shadow-green7 first:ml-0 data-[state=on]:bg-green5 data-[state=on]:text-grass11",
                href: "#",
                target: "_blank",
                style: { "margin-right": "10" }
              }, {
                default: withCtx(() => [
                  createTextVNode(" Edited 2 hours ago ")
                ]),
                _: 1
              }),
              createVNode(unref(Li), {
                class: "px-[10px] text-white bg-green9 flex-shrink-0 flex-grow-0 basis-auto h-[25px] rounded inline-flex text-[13px] leading-none items-center justify-center outline-none hover:bg-green10 focus:relative focus:shadow-[0_0_0_2px] focus:shadow-green7",
                style: { "margin-left": "auto" }
              }, {
                default: withCtx(() => [
                  createTextVNode(" Share ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../components/demo/Toolbar/tailwind/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
