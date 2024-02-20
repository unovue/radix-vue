import { defineComponent, unref, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { k as ks, V as Vs, s as su, l as lr, a as sr, i as ir, u as ur, b as Vn } from "./index.faJ9MUPN.js";
import { Icon } from "@iconify/vue";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(ks), _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Vs), { class: "text-grass11 font-semibold shadow-blackA7 hover:bg-mauve3 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-white px-[15px] leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Edit profile `);
                } else {
                  return [
                    createTextVNode(" Edit profile ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(su), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(lr), { class: "bg-blackA9 data-[state=open]:animate-overlayShow fixed inset-0 z-30" }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(sr), { class: "data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none z-[100]" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(ir), { class: "text-mauve12 m-0 text-[17px] font-semibold" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Edit profile `);
                            } else {
                              return [
                                createTextVNode(" Edit profile ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(ur), { class: "text-mauve11 mt-[10px] mb-5 text-[15px] leading-normal" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Make changes to your profile here. Click save when you&#39;re done. `);
                            } else {
                              return [
                                createTextVNode(" Make changes to your profile here. Click save when you're done. ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<fieldset class="mb-[15px] flex items-center gap-5"${_scopeId3}><label class="text-grass11 w-[90px] text-right text-[15px]" for="name"${_scopeId3}> Name </label><input id="name" class="text-grass11 shadow-green7 focus:shadow-green8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]" defaultValue="Pedro Duarte"${_scopeId3}></fieldset><fieldset class="mb-[15px] flex items-center gap-5"${_scopeId3}><label class="text-grass11 w-[90px] text-right text-[15px]" for="username"${_scopeId3}> Username </label><input id="username" class="text-grass11 shadow-green7 focus:shadow-green8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]" defaultValue="@peduarte"${_scopeId3}></fieldset><div class="mt-[25px] flex justify-end"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(Vn), { "as-child": "" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<button class="bg-green4 text-green11 hover:bg-green5 focus:shadow-green7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-semibold leading-none focus:shadow-[0_0_0_2px] focus:outline-none"${_scopeId4}> Save changes </button>`);
                            } else {
                              return [
                                createVNode("button", { class: "bg-green4 text-green11 hover:bg-green5 focus:shadow-green7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-semibold leading-none focus:shadow-[0_0_0_2px] focus:outline-none" }, " Save changes ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div>`);
                        _push4(ssrRenderComponent(unref(Vn), {
                          class: "text-grass11 hover:bg-green4 focus:shadow-green7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none",
                          "aria-label": "Close"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(Icon), { icon: "lucide:x" }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(Icon), { icon: "lucide:x" })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(ir), { class: "text-mauve12 m-0 text-[17px] font-semibold" }, {
                            default: withCtx(() => [
                              createTextVNode(" Edit profile ")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(ur), { class: "text-mauve11 mt-[10px] mb-5 text-[15px] leading-normal" }, {
                            default: withCtx(() => [
                              createTextVNode(" Make changes to your profile here. Click save when you're done. ")
                            ]),
                            _: 1
                          }),
                          createVNode("fieldset", { class: "mb-[15px] flex items-center gap-5" }, [
                            createVNode("label", {
                              class: "text-grass11 w-[90px] text-right text-[15px]",
                              for: "name"
                            }, " Name "),
                            createVNode("input", {
                              id: "name",
                              class: "text-grass11 shadow-green7 focus:shadow-green8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]",
                              defaultValue: "Pedro Duarte"
                            })
                          ]),
                          createVNode("fieldset", { class: "mb-[15px] flex items-center gap-5" }, [
                            createVNode("label", {
                              class: "text-grass11 w-[90px] text-right text-[15px]",
                              for: "username"
                            }, " Username "),
                            createVNode("input", {
                              id: "username",
                              class: "text-grass11 shadow-green7 focus:shadow-green8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]",
                              defaultValue: "@peduarte"
                            })
                          ]),
                          createVNode("div", { class: "mt-[25px] flex justify-end" }, [
                            createVNode(unref(Vn), { "as-child": "" }, {
                              default: withCtx(() => [
                                createVNode("button", { class: "bg-green4 text-green11 hover:bg-green5 focus:shadow-green7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-semibold leading-none focus:shadow-[0_0_0_2px] focus:outline-none" }, " Save changes ")
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode(unref(Vn), {
                            class: "text-grass11 hover:bg-green4 focus:shadow-green7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none",
                            "aria-label": "Close"
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(Icon), { icon: "lucide:x" })
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
                    createVNode(unref(lr), { class: "bg-blackA9 data-[state=open]:animate-overlayShow fixed inset-0 z-30" }),
                    createVNode(unref(sr), { class: "data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none z-[100]" }, {
                      default: withCtx(() => [
                        createVNode(unref(ir), { class: "text-mauve12 m-0 text-[17px] font-semibold" }, {
                          default: withCtx(() => [
                            createTextVNode(" Edit profile ")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(ur), { class: "text-mauve11 mt-[10px] mb-5 text-[15px] leading-normal" }, {
                          default: withCtx(() => [
                            createTextVNode(" Make changes to your profile here. Click save when you're done. ")
                          ]),
                          _: 1
                        }),
                        createVNode("fieldset", { class: "mb-[15px] flex items-center gap-5" }, [
                          createVNode("label", {
                            class: "text-grass11 w-[90px] text-right text-[15px]",
                            for: "name"
                          }, " Name "),
                          createVNode("input", {
                            id: "name",
                            class: "text-grass11 shadow-green7 focus:shadow-green8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]",
                            defaultValue: "Pedro Duarte"
                          })
                        ]),
                        createVNode("fieldset", { class: "mb-[15px] flex items-center gap-5" }, [
                          createVNode("label", {
                            class: "text-grass11 w-[90px] text-right text-[15px]",
                            for: "username"
                          }, " Username "),
                          createVNode("input", {
                            id: "username",
                            class: "text-grass11 shadow-green7 focus:shadow-green8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]",
                            defaultValue: "@peduarte"
                          })
                        ]),
                        createVNode("div", { class: "mt-[25px] flex justify-end" }, [
                          createVNode(unref(Vn), { "as-child": "" }, {
                            default: withCtx(() => [
                              createVNode("button", { class: "bg-green4 text-green11 hover:bg-green5 focus:shadow-green7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-semibold leading-none focus:shadow-[0_0_0_2px] focus:outline-none" }, " Save changes ")
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode(unref(Vn), {
                          class: "text-grass11 hover:bg-green4 focus:shadow-green7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none",
                          "aria-label": "Close"
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(Icon), { icon: "lucide:x" })
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
              createVNode(unref(Vs), { class: "text-grass11 font-semibold shadow-blackA7 hover:bg-mauve3 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-white px-[15px] leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none" }, {
                default: withCtx(() => [
                  createTextVNode(" Edit profile ")
                ]),
                _: 1
              }),
              createVNode(unref(su), null, {
                default: withCtx(() => [
                  createVNode(unref(lr), { class: "bg-blackA9 data-[state=open]:animate-overlayShow fixed inset-0 z-30" }),
                  createVNode(unref(sr), { class: "data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none z-[100]" }, {
                    default: withCtx(() => [
                      createVNode(unref(ir), { class: "text-mauve12 m-0 text-[17px] font-semibold" }, {
                        default: withCtx(() => [
                          createTextVNode(" Edit profile ")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(ur), { class: "text-mauve11 mt-[10px] mb-5 text-[15px] leading-normal" }, {
                        default: withCtx(() => [
                          createTextVNode(" Make changes to your profile here. Click save when you're done. ")
                        ]),
                        _: 1
                      }),
                      createVNode("fieldset", { class: "mb-[15px] flex items-center gap-5" }, [
                        createVNode("label", {
                          class: "text-grass11 w-[90px] text-right text-[15px]",
                          for: "name"
                        }, " Name "),
                        createVNode("input", {
                          id: "name",
                          class: "text-grass11 shadow-green7 focus:shadow-green8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]",
                          defaultValue: "Pedro Duarte"
                        })
                      ]),
                      createVNode("fieldset", { class: "mb-[15px] flex items-center gap-5" }, [
                        createVNode("label", {
                          class: "text-grass11 w-[90px] text-right text-[15px]",
                          for: "username"
                        }, " Username "),
                        createVNode("input", {
                          id: "username",
                          class: "text-grass11 shadow-green7 focus:shadow-green8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]",
                          defaultValue: "@peduarte"
                        })
                      ]),
                      createVNode("div", { class: "mt-[25px] flex justify-end" }, [
                        createVNode(unref(Vn), { "as-child": "" }, {
                          default: withCtx(() => [
                            createVNode("button", { class: "bg-green4 text-green11 hover:bg-green5 focus:shadow-green7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-semibold leading-none focus:shadow-[0_0_0_2px] focus:outline-none" }, " Save changes ")
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode(unref(Vn), {
                        class: "text-grass11 hover:bg-green4 focus:shadow-green7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none",
                        "aria-label": "Close"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(Icon), { icon: "lucide:x" })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../components/demo/Dialog/tailwind/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
