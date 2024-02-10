import { defineComponent, unref, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { Icon } from "@iconify/vue";
import { aZ as oc, a_ as nc, a$ as ac, b0 as sc, b1 as lc, b2 as rc } from "./index.faJ9MUPN.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(oc), _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(nc), {
              class: "rounded-full w-[35px] h-[35px] inline-flex items-center justify-center text-grass11 bg-white shadow-[0_2px_10px] shadow-blackA7 hover:bg-green3 focus:shadow-[0_0_0_2px] focus:shadow-black cursor-default outline-none",
              "aria-label": "Update dimensions"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(Icon), { icon: "radix-icons:mixer-horizontal" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(Icon), { icon: "radix-icons:mixer-horizontal" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(ac), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(sc), {
                    side: "bottom",
                    "side-offset": 5,
                    class: "rounded p-5 w-[260px] bg-white shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2)] focus:shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2),0_0_0_2px_theme(colors.green7)] will-change-[transform,opacity] data-[state=open]:data-[side=top]:animate-slideDownAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="flex flex-col gap-2.5"${_scopeId3}><p class="text-mauve12 text-[15px] leading-[19px] font-semibold mb-2.5"${_scopeId3}> Dimensions </p><fieldset class="flex gap-5 items-center"${_scopeId3}><label class="text-[13px] text-grass11 w-[75px]" for="width"${_scopeId3}> Width </label><input id="width" class="w-full inline-flex items-center justify-center flex-1 rounded px-2.5 text-[13px] leading-none text-grass11 shadow-[0_0_0_1px] shadow-green7 h-[25px] focus:shadow-[0_0_0_2px] focus:shadow-green8 outline-none" defaultValue="100%"${_scopeId3}></fieldset><fieldset class="flex gap-5 items-center"${_scopeId3}><label class="text-[13px] text-grass11 w-[75px]" for="maxWidth"${_scopeId3}> Max. width </label><input id="maxWidth" class="w-full inline-flex items-center justify-center flex-1 rounded px-2.5 text-[13px] leading-none text-grass11 shadow-[0_0_0_1px] shadow-green7 h-[25px] focus:shadow-[0_0_0_2px] focus:shadow-green8 outline-none" defaultValue="300px"${_scopeId3}></fieldset><fieldset class="flex gap-5 items-center"${_scopeId3}><label class="text-[13px] text-grass11 w-[75px]" for="height"${_scopeId3}> Height </label><input id="height" class="w-full inline-flex items-center justify-center flex-1 rounded px-2.5 text-[13px] leading-none text-grass11 shadow-[0_0_0_1px] shadow-green7 h-[25px] focus:shadow-[0_0_0_2px] focus:shadow-green8 outline-none" defaultValue="25px"${_scopeId3}></fieldset><fieldset class="flex gap-5 items-center"${_scopeId3}><label class="text-[13px] text-grass11 w-[75px]" for="maxHeight"${_scopeId3}> Max. height </label><input id="maxHeight" class="w-full inline-flex items-center justify-center flex-1 rounded px-2.5 text-[13px] leading-none text-grass11 shadow-[0_0_0_1px] shadow-green7 h-[25px] focus:shadow-[0_0_0_2px] focus:shadow-green8 outline-none" defaultValue="none"${_scopeId3}></fieldset></div>`);
                        _push4(ssrRenderComponent(unref(lc), {
                          class: "rounded-full h-[25px] w-[25px] inline-flex items-center justify-center text-grass11 absolute top-[5px] right-[5px] hover:bg-green4 focus:shadow-[0_0_0_2px] focus:shadow-green7 outline-none cursor-default",
                          "aria-label": "Close"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(Icon), { icon: "radix-icons:cross-2" }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(Icon), { icon: "radix-icons:cross-2" })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(rc), { class: "fill-white" }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("div", { class: "flex flex-col gap-2.5" }, [
                            createVNode("p", { class: "text-mauve12 text-[15px] leading-[19px] font-semibold mb-2.5" }, " Dimensions "),
                            createVNode("fieldset", { class: "flex gap-5 items-center" }, [
                              createVNode("label", {
                                class: "text-[13px] text-grass11 w-[75px]",
                                for: "width"
                              }, " Width "),
                              createVNode("input", {
                                id: "width",
                                class: "w-full inline-flex items-center justify-center flex-1 rounded px-2.5 text-[13px] leading-none text-grass11 shadow-[0_0_0_1px] shadow-green7 h-[25px] focus:shadow-[0_0_0_2px] focus:shadow-green8 outline-none",
                                defaultValue: "100%"
                              })
                            ]),
                            createVNode("fieldset", { class: "flex gap-5 items-center" }, [
                              createVNode("label", {
                                class: "text-[13px] text-grass11 w-[75px]",
                                for: "maxWidth"
                              }, " Max. width "),
                              createVNode("input", {
                                id: "maxWidth",
                                class: "w-full inline-flex items-center justify-center flex-1 rounded px-2.5 text-[13px] leading-none text-grass11 shadow-[0_0_0_1px] shadow-green7 h-[25px] focus:shadow-[0_0_0_2px] focus:shadow-green8 outline-none",
                                defaultValue: "300px"
                              })
                            ]),
                            createVNode("fieldset", { class: "flex gap-5 items-center" }, [
                              createVNode("label", {
                                class: "text-[13px] text-grass11 w-[75px]",
                                for: "height"
                              }, " Height "),
                              createVNode("input", {
                                id: "height",
                                class: "w-full inline-flex items-center justify-center flex-1 rounded px-2.5 text-[13px] leading-none text-grass11 shadow-[0_0_0_1px] shadow-green7 h-[25px] focus:shadow-[0_0_0_2px] focus:shadow-green8 outline-none",
                                defaultValue: "25px"
                              })
                            ]),
                            createVNode("fieldset", { class: "flex gap-5 items-center" }, [
                              createVNode("label", {
                                class: "text-[13px] text-grass11 w-[75px]",
                                for: "maxHeight"
                              }, " Max. height "),
                              createVNode("input", {
                                id: "maxHeight",
                                class: "w-full inline-flex items-center justify-center flex-1 rounded px-2.5 text-[13px] leading-none text-grass11 shadow-[0_0_0_1px] shadow-green7 h-[25px] focus:shadow-[0_0_0_2px] focus:shadow-green8 outline-none",
                                defaultValue: "none"
                              })
                            ])
                          ]),
                          createVNode(unref(lc), {
                            class: "rounded-full h-[25px] w-[25px] inline-flex items-center justify-center text-grass11 absolute top-[5px] right-[5px] hover:bg-green4 focus:shadow-[0_0_0_2px] focus:shadow-green7 outline-none cursor-default",
                            "aria-label": "Close"
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(Icon), { icon: "radix-icons:cross-2" })
                            ]),
                            _: 1
                          }),
                          createVNode(unref(rc), { class: "fill-white" })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(sc), {
                      side: "bottom",
                      "side-offset": 5,
                      class: "rounded p-5 w-[260px] bg-white shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2)] focus:shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2),0_0_0_2px_theme(colors.green7)] will-change-[transform,opacity] data-[state=open]:data-[side=top]:animate-slideDownAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "flex flex-col gap-2.5" }, [
                          createVNode("p", { class: "text-mauve12 text-[15px] leading-[19px] font-semibold mb-2.5" }, " Dimensions "),
                          createVNode("fieldset", { class: "flex gap-5 items-center" }, [
                            createVNode("label", {
                              class: "text-[13px] text-grass11 w-[75px]",
                              for: "width"
                            }, " Width "),
                            createVNode("input", {
                              id: "width",
                              class: "w-full inline-flex items-center justify-center flex-1 rounded px-2.5 text-[13px] leading-none text-grass11 shadow-[0_0_0_1px] shadow-green7 h-[25px] focus:shadow-[0_0_0_2px] focus:shadow-green8 outline-none",
                              defaultValue: "100%"
                            })
                          ]),
                          createVNode("fieldset", { class: "flex gap-5 items-center" }, [
                            createVNode("label", {
                              class: "text-[13px] text-grass11 w-[75px]",
                              for: "maxWidth"
                            }, " Max. width "),
                            createVNode("input", {
                              id: "maxWidth",
                              class: "w-full inline-flex items-center justify-center flex-1 rounded px-2.5 text-[13px] leading-none text-grass11 shadow-[0_0_0_1px] shadow-green7 h-[25px] focus:shadow-[0_0_0_2px] focus:shadow-green8 outline-none",
                              defaultValue: "300px"
                            })
                          ]),
                          createVNode("fieldset", { class: "flex gap-5 items-center" }, [
                            createVNode("label", {
                              class: "text-[13px] text-grass11 w-[75px]",
                              for: "height"
                            }, " Height "),
                            createVNode("input", {
                              id: "height",
                              class: "w-full inline-flex items-center justify-center flex-1 rounded px-2.5 text-[13px] leading-none text-grass11 shadow-[0_0_0_1px] shadow-green7 h-[25px] focus:shadow-[0_0_0_2px] focus:shadow-green8 outline-none",
                              defaultValue: "25px"
                            })
                          ]),
                          createVNode("fieldset", { class: "flex gap-5 items-center" }, [
                            createVNode("label", {
                              class: "text-[13px] text-grass11 w-[75px]",
                              for: "maxHeight"
                            }, " Max. height "),
                            createVNode("input", {
                              id: "maxHeight",
                              class: "w-full inline-flex items-center justify-center flex-1 rounded px-2.5 text-[13px] leading-none text-grass11 shadow-[0_0_0_1px] shadow-green7 h-[25px] focus:shadow-[0_0_0_2px] focus:shadow-green8 outline-none",
                              defaultValue: "none"
                            })
                          ])
                        ]),
                        createVNode(unref(lc), {
                          class: "rounded-full h-[25px] w-[25px] inline-flex items-center justify-center text-grass11 absolute top-[5px] right-[5px] hover:bg-green4 focus:shadow-[0_0_0_2px] focus:shadow-green7 outline-none cursor-default",
                          "aria-label": "Close"
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(Icon), { icon: "radix-icons:cross-2" })
                          ]),
                          _: 1
                        }),
                        createVNode(unref(rc), { class: "fill-white" })
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
              createVNode(unref(nc), {
                class: "rounded-full w-[35px] h-[35px] inline-flex items-center justify-center text-grass11 bg-white shadow-[0_2px_10px] shadow-blackA7 hover:bg-green3 focus:shadow-[0_0_0_2px] focus:shadow-black cursor-default outline-none",
                "aria-label": "Update dimensions"
              }, {
                default: withCtx(() => [
                  createVNode(unref(Icon), { icon: "radix-icons:mixer-horizontal" })
                ]),
                _: 1
              }),
              createVNode(unref(ac), null, {
                default: withCtx(() => [
                  createVNode(unref(sc), {
                    side: "bottom",
                    "side-offset": 5,
                    class: "rounded p-5 w-[260px] bg-white shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2)] focus:shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2),0_0_0_2px_theme(colors.green7)] will-change-[transform,opacity] data-[state=open]:data-[side=top]:animate-slideDownAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "flex flex-col gap-2.5" }, [
                        createVNode("p", { class: "text-mauve12 text-[15px] leading-[19px] font-semibold mb-2.5" }, " Dimensions "),
                        createVNode("fieldset", { class: "flex gap-5 items-center" }, [
                          createVNode("label", {
                            class: "text-[13px] text-grass11 w-[75px]",
                            for: "width"
                          }, " Width "),
                          createVNode("input", {
                            id: "width",
                            class: "w-full inline-flex items-center justify-center flex-1 rounded px-2.5 text-[13px] leading-none text-grass11 shadow-[0_0_0_1px] shadow-green7 h-[25px] focus:shadow-[0_0_0_2px] focus:shadow-green8 outline-none",
                            defaultValue: "100%"
                          })
                        ]),
                        createVNode("fieldset", { class: "flex gap-5 items-center" }, [
                          createVNode("label", {
                            class: "text-[13px] text-grass11 w-[75px]",
                            for: "maxWidth"
                          }, " Max. width "),
                          createVNode("input", {
                            id: "maxWidth",
                            class: "w-full inline-flex items-center justify-center flex-1 rounded px-2.5 text-[13px] leading-none text-grass11 shadow-[0_0_0_1px] shadow-green7 h-[25px] focus:shadow-[0_0_0_2px] focus:shadow-green8 outline-none",
                            defaultValue: "300px"
                          })
                        ]),
                        createVNode("fieldset", { class: "flex gap-5 items-center" }, [
                          createVNode("label", {
                            class: "text-[13px] text-grass11 w-[75px]",
                            for: "height"
                          }, " Height "),
                          createVNode("input", {
                            id: "height",
                            class: "w-full inline-flex items-center justify-center flex-1 rounded px-2.5 text-[13px] leading-none text-grass11 shadow-[0_0_0_1px] shadow-green7 h-[25px] focus:shadow-[0_0_0_2px] focus:shadow-green8 outline-none",
                            defaultValue: "25px"
                          })
                        ]),
                        createVNode("fieldset", { class: "flex gap-5 items-center" }, [
                          createVNode("label", {
                            class: "text-[13px] text-grass11 w-[75px]",
                            for: "maxHeight"
                          }, " Max. height "),
                          createVNode("input", {
                            id: "maxHeight",
                            class: "w-full inline-flex items-center justify-center flex-1 rounded px-2.5 text-[13px] leading-none text-grass11 shadow-[0_0_0_1px] shadow-green7 h-[25px] focus:shadow-[0_0_0_2px] focus:shadow-green8 outline-none",
                            defaultValue: "none"
                          })
                        ])
                      ]),
                      createVNode(unref(lc), {
                        class: "rounded-full h-[25px] w-[25px] inline-flex items-center justify-center text-grass11 absolute top-[5px] right-[5px] hover:bg-green4 focus:shadow-[0_0_0_2px] focus:shadow-green7 outline-none cursor-default",
                        "aria-label": "Close"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(Icon), { icon: "radix-icons:cross-2" })
                        ]),
                        _: 1
                      }),
                      createVNode(unref(rc), { class: "fill-white" })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../components/demo/Popover/tailwind/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
