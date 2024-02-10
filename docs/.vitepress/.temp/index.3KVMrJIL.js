import { defineComponent, ref, unref, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { bI as ki, bJ as Vi } from "./index.faJ9MUPN.js";
import { Icon } from "@iconify/vue";
const toggleGroupItemClasses = "hover:bg-green3 text-mauve11 data-[state=on]:bg-green6 data-[state=on]:text-violet12 flex h-[35px] w-[35px] items-center justify-center bg-white text-base leading-4 first:rounded-l last:rounded-r focus:z-10 focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const toggleStateSingle = ref("left");
    const toggleStateMultiple = ref(["italic"]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(unref(ki), {
        modelValue: toggleStateSingle.value,
        "onUpdate:modelValue": ($event) => toggleStateSingle.value = $event,
        class: "flex"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Vi), {
              value: "left",
              "aria-label": "Toggle italic",
              class: toggleGroupItemClasses
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(Icon), {
                    icon: "radix-icons:text-align-left",
                    class: "w-[15px] h-[15px]"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(Icon), {
                      icon: "radix-icons:text-align-left",
                      class: "w-[15px] h-[15px]"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Vi), {
              value: "center",
              "aria-label": "Toggle italic",
              class: toggleGroupItemClasses
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(Icon), {
                    icon: "radix-icons:text-align-center",
                    class: "w-[15px] h-[15px]"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(Icon), {
                      icon: "radix-icons:text-align-center",
                      class: "w-[15px] h-[15px]"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Vi), {
              value: "right",
              "aria-label": "Toggle italic",
              class: toggleGroupItemClasses
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(Icon), {
                    icon: "radix-icons:text-align-right",
                    class: "w-[15px] h-[15px]"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(Icon), {
                      icon: "radix-icons:text-align-right",
                      class: "w-[15px] h-[15px]"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Vi), {
                value: "left",
                "aria-label": "Toggle italic",
                class: toggleGroupItemClasses
              }, {
                default: withCtx(() => [
                  createVNode(unref(Icon), {
                    icon: "radix-icons:text-align-left",
                    class: "w-[15px] h-[15px]"
                  })
                ]),
                _: 1
              }),
              createVNode(unref(Vi), {
                value: "center",
                "aria-label": "Toggle italic",
                class: toggleGroupItemClasses
              }, {
                default: withCtx(() => [
                  createVNode(unref(Icon), {
                    icon: "radix-icons:text-align-center",
                    class: "w-[15px] h-[15px]"
                  })
                ]),
                _: 1
              }),
              createVNode(unref(Vi), {
                value: "right",
                "aria-label": "Toggle italic",
                class: toggleGroupItemClasses
              }, {
                default: withCtx(() => [
                  createVNode(unref(Icon), {
                    icon: "radix-icons:text-align-right",
                    class: "w-[15px] h-[15px]"
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<br>`);
      _push(ssrRenderComponent(unref(ki), {
        modelValue: toggleStateMultiple.value,
        "onUpdate:modelValue": ($event) => toggleStateMultiple.value = $event,
        type: "multiple",
        class: "flex"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Vi), {
              value: "bold",
              "aria-label": "Toggle italic",
              class: toggleGroupItemClasses
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(Icon), {
                    icon: "radix-icons:font-bold",
                    class: "w-[15px] h-[15px]"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(Icon), {
                      icon: "radix-icons:font-bold",
                      class: "w-[15px] h-[15px]"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Vi), {
              value: "italic",
              "aria-label": "Toggle italic",
              class: toggleGroupItemClasses
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(Icon), {
                    icon: "radix-icons:font-italic",
                    class: "w-[15px] h-[15px]"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(Icon), {
                      icon: "radix-icons:font-italic",
                      class: "w-[15px] h-[15px]"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Vi), {
              value: "strikethrough",
              "aria-label": "Toggle italic",
              class: toggleGroupItemClasses
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(Icon), {
                    icon: "radix-icons:strikethrough",
                    class: "w-[15px] h-[15px]"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(Icon), {
                      icon: "radix-icons:strikethrough",
                      class: "w-[15px] h-[15px]"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Vi), {
                value: "bold",
                "aria-label": "Toggle italic",
                class: toggleGroupItemClasses
              }, {
                default: withCtx(() => [
                  createVNode(unref(Icon), {
                    icon: "radix-icons:font-bold",
                    class: "w-[15px] h-[15px]"
                  })
                ]),
                _: 1
              }),
              createVNode(unref(Vi), {
                value: "italic",
                "aria-label": "Toggle italic",
                class: toggleGroupItemClasses
              }, {
                default: withCtx(() => [
                  createVNode(unref(Icon), {
                    icon: "radix-icons:font-italic",
                    class: "w-[15px] h-[15px]"
                  })
                ]),
                _: 1
              }),
              createVNode(unref(Vi), {
                value: "strikethrough",
                "aria-label": "Toggle italic",
                class: toggleGroupItemClasses
              }, {
                default: withCtx(() => [
                  createVNode(unref(Icon), {
                    icon: "radix-icons:strikethrough",
                    class: "w-[15px] h-[15px]"
                  })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../components/demo/ToggleGroup/tailwind/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
