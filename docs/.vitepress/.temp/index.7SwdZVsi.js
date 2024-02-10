import { defineComponent, unref, mergeProps, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { bx as Hc, by as jc, bz as Uc, bA as zc, bB as Wc } from "./index.faJ9MUPN.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Hc), mergeProps({
        class: "flex flex-col w-full sm:w-[300px] shadow-[0_2px_10px] shadow-blackA4",
        "default-value": "tab1"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(jc), {
              class: "relative shrink-0 flex border-b border-mauve6",
              "aria-label": "Manage your account"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(Uc), { class: "absolute px-8 left-0 h-[2px] bottom-0 w-[--radix-tabs-indicator-size] translate-x-[--radix-tabs-indicator-position] rounded-full transition-[width,transform] duration-300" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="bg-grass8 w-full h-full"${_scopeId3}></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "bg-grass8 w-full h-full" })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(zc), {
                    class: "bg-white px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-mauve11 select-none rounded-tl-md hover:text-grass11 data-[state=active]:text-grass11 outline-none cursor-default",
                    value: "tab1"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Account `);
                      } else {
                        return [
                          createTextVNode(" Account ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(zc), {
                    class: "bg-white px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-mauve11 select-none rounded-tr-md hover:text-grass11 data-[state=active]:text-grass11 outline-none cursor-default",
                    value: "tab2"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Password `);
                      } else {
                        return [
                          createTextVNode(" Password ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(Uc), { class: "absolute px-8 left-0 h-[2px] bottom-0 w-[--radix-tabs-indicator-size] translate-x-[--radix-tabs-indicator-position] rounded-full transition-[width,transform] duration-300" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "bg-grass8 w-full h-full" })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(zc), {
                      class: "bg-white px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-mauve11 select-none rounded-tl-md hover:text-grass11 data-[state=active]:text-grass11 outline-none cursor-default",
                      value: "tab1"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Account ")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(zc), {
                      class: "bg-white px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-mauve11 select-none rounded-tr-md hover:text-grass11 data-[state=active]:text-grass11 outline-none cursor-default",
                      value: "tab2"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Password ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Wc), {
              class: "grow p-5 bg-white rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black",
              value: "tab1"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p class="mb-5 !mt-0 text-mauve11 text-[15px] !leading-normal"${_scopeId2}> Make changes to your account here. Click save when you&#39;re done. </p><fieldset class="mb-[15px] w-full flex flex-col justify-start"${_scopeId2}><label class="text-[13px] leading-none mb-2.5 text-green12 block" for="name"${_scopeId2}> Name </label><input id="name" class="grow shrink-0 rounded px-2.5 text-[15px] leading-none text-grass11 shadow-[0_0_0_1px] shadow-green7 h-[35px] focus:shadow-[0_0_0_2px] focus:shadow-green8 outline-none" value="Pedro Duarte"${_scopeId2}></fieldset><fieldset class="mb-[15px] w-full flex flex-col justify-start"${_scopeId2}><label class="text-[13px] leading-none mb-2.5 text-green12 block" for="username"${_scopeId2}> Username </label><input id="username" class="grow shrink-0 rounded px-2.5 text-[15px] leading-none text-grass11 shadow-[0_0_0_1px] shadow-green7 h-[35px] focus:shadow-[0_0_0_2px] focus:shadow-green8 outline-none" value="@peduarte"${_scopeId2}></fieldset><div class="flex justify-end mt-5"${_scopeId2}><button class="inline-flex items-center justify-center rounded px-[15px] text-[15px] leading-none font-medium h-[35px] bg-green4 text-green11 hover:bg-green5 focus:shadow-[0_0_0_2px] focus:shadow-green7 outline-none cursor-default"${_scopeId2}> Save changes </button></div>`);
                } else {
                  return [
                    createVNode("p", { class: "mb-5 !mt-0 text-mauve11 text-[15px] !leading-normal" }, " Make changes to your account here. Click save when you're done. "),
                    createVNode("fieldset", { class: "mb-[15px] w-full flex flex-col justify-start" }, [
                      createVNode("label", {
                        class: "text-[13px] leading-none mb-2.5 text-green12 block",
                        for: "name"
                      }, " Name "),
                      createVNode("input", {
                        id: "name",
                        class: "grow shrink-0 rounded px-2.5 text-[15px] leading-none text-grass11 shadow-[0_0_0_1px] shadow-green7 h-[35px] focus:shadow-[0_0_0_2px] focus:shadow-green8 outline-none",
                        value: "Pedro Duarte"
                      })
                    ]),
                    createVNode("fieldset", { class: "mb-[15px] w-full flex flex-col justify-start" }, [
                      createVNode("label", {
                        class: "text-[13px] leading-none mb-2.5 text-green12 block",
                        for: "username"
                      }, " Username "),
                      createVNode("input", {
                        id: "username",
                        class: "grow shrink-0 rounded px-2.5 text-[15px] leading-none text-grass11 shadow-[0_0_0_1px] shadow-green7 h-[35px] focus:shadow-[0_0_0_2px] focus:shadow-green8 outline-none",
                        value: "@peduarte"
                      })
                    ]),
                    createVNode("div", { class: "flex justify-end mt-5" }, [
                      createVNode("button", { class: "inline-flex items-center justify-center rounded px-[15px] text-[15px] leading-none font-medium h-[35px] bg-green4 text-green11 hover:bg-green5 focus:shadow-[0_0_0_2px] focus:shadow-green7 outline-none cursor-default" }, " Save changes ")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Wc), {
              class: "grow p-5 bg-white rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black",
              value: "tab2"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p class="mb-5 !mt-0 text-mauve11 text-[15px] !leading-normal"${_scopeId2}> Change your password here. After saving, you&#39;ll be logged out. </p><fieldset class="mb-[15px] w-full flex flex-col justify-start"${_scopeId2}><label class="text-[13px] leading-none mb-2.5 text-green12 block" for="currentPassword"${_scopeId2}> Current password </label><input id="currentPassword" class="grow shrink-0 rounded px-2.5 text-[15px] leading-none text-grass11 shadow-[0_0_0_1px] shadow-green7 h-[35px] focus:shadow-[0_0_0_2px] focus:shadow-green8 outline-none" type="password"${_scopeId2}></fieldset><fieldset class="mb-[15px] w-full flex flex-col justify-start"${_scopeId2}><label class="text-[13px] leading-none mb-2.5 text-green12 block" for="newPassword"${_scopeId2}> New password </label><input id="newPassword" class="grow shrink-0 rounded px-2.5 text-[15px] leading-none text-grass11 shadow-[0_0_0_1px] shadow-green7 h-[35px] focus:shadow-[0_0_0_2px] focus:shadow-green8 outline-none" type="password"${_scopeId2}></fieldset><fieldset class="mb-[15px] w-full flex flex-col justify-start"${_scopeId2}><label class="text-[13px] leading-none mb-2.5 text-green12 block" for="confirmPassword"${_scopeId2}> Confirm password </label><input id="confirmPassword" class="grow shrink-0 rounded px-2.5 text-[15px] leading-none text-grass11 shadow-[0_0_0_1px] shadow-green7 h-[35px] focus:shadow-[0_0_0_2px] focus:shadow-green8 outline-none" type="password"${_scopeId2}></fieldset><div class="flex justify-end mt-5"${_scopeId2}><button class="inline-flex items-center justify-center rounded px-[15px] text-[15px] leading-none font-medium h-[35px] bg-green4 text-green11 hover:bg-green5 focus:shadow-[0_0_0_2px] focus:shadow-green7 outline-none cursor-default"${_scopeId2}> Change password </button></div>`);
                } else {
                  return [
                    createVNode("p", { class: "mb-5 !mt-0 text-mauve11 text-[15px] !leading-normal" }, " Change your password here. After saving, you'll be logged out. "),
                    createVNode("fieldset", { class: "mb-[15px] w-full flex flex-col justify-start" }, [
                      createVNode("label", {
                        class: "text-[13px] leading-none mb-2.5 text-green12 block",
                        for: "currentPassword"
                      }, " Current password "),
                      createVNode("input", {
                        id: "currentPassword",
                        class: "grow shrink-0 rounded px-2.5 text-[15px] leading-none text-grass11 shadow-[0_0_0_1px] shadow-green7 h-[35px] focus:shadow-[0_0_0_2px] focus:shadow-green8 outline-none",
                        type: "password"
                      })
                    ]),
                    createVNode("fieldset", { class: "mb-[15px] w-full flex flex-col justify-start" }, [
                      createVNode("label", {
                        class: "text-[13px] leading-none mb-2.5 text-green12 block",
                        for: "newPassword"
                      }, " New password "),
                      createVNode("input", {
                        id: "newPassword",
                        class: "grow shrink-0 rounded px-2.5 text-[15px] leading-none text-grass11 shadow-[0_0_0_1px] shadow-green7 h-[35px] focus:shadow-[0_0_0_2px] focus:shadow-green8 outline-none",
                        type: "password"
                      })
                    ]),
                    createVNode("fieldset", { class: "mb-[15px] w-full flex flex-col justify-start" }, [
                      createVNode("label", {
                        class: "text-[13px] leading-none mb-2.5 text-green12 block",
                        for: "confirmPassword"
                      }, " Confirm password "),
                      createVNode("input", {
                        id: "confirmPassword",
                        class: "grow shrink-0 rounded px-2.5 text-[15px] leading-none text-grass11 shadow-[0_0_0_1px] shadow-green7 h-[35px] focus:shadow-[0_0_0_2px] focus:shadow-green8 outline-none",
                        type: "password"
                      })
                    ]),
                    createVNode("div", { class: "flex justify-end mt-5" }, [
                      createVNode("button", { class: "inline-flex items-center justify-center rounded px-[15px] text-[15px] leading-none font-medium h-[35px] bg-green4 text-green11 hover:bg-green5 focus:shadow-[0_0_0_2px] focus:shadow-green7 outline-none cursor-default" }, " Change password ")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(jc), {
                class: "relative shrink-0 flex border-b border-mauve6",
                "aria-label": "Manage your account"
              }, {
                default: withCtx(() => [
                  createVNode(unref(Uc), { class: "absolute px-8 left-0 h-[2px] bottom-0 w-[--radix-tabs-indicator-size] translate-x-[--radix-tabs-indicator-position] rounded-full transition-[width,transform] duration-300" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "bg-grass8 w-full h-full" })
                    ]),
                    _: 1
                  }),
                  createVNode(unref(zc), {
                    class: "bg-white px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-mauve11 select-none rounded-tl-md hover:text-grass11 data-[state=active]:text-grass11 outline-none cursor-default",
                    value: "tab1"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Account ")
                    ]),
                    _: 1
                  }),
                  createVNode(unref(zc), {
                    class: "bg-white px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-mauve11 select-none rounded-tr-md hover:text-grass11 data-[state=active]:text-grass11 outline-none cursor-default",
                    value: "tab2"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Password ")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(unref(Wc), {
                class: "grow p-5 bg-white rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black",
                value: "tab1"
              }, {
                default: withCtx(() => [
                  createVNode("p", { class: "mb-5 !mt-0 text-mauve11 text-[15px] !leading-normal" }, " Make changes to your account here. Click save when you're done. "),
                  createVNode("fieldset", { class: "mb-[15px] w-full flex flex-col justify-start" }, [
                    createVNode("label", {
                      class: "text-[13px] leading-none mb-2.5 text-green12 block",
                      for: "name"
                    }, " Name "),
                    createVNode("input", {
                      id: "name",
                      class: "grow shrink-0 rounded px-2.5 text-[15px] leading-none text-grass11 shadow-[0_0_0_1px] shadow-green7 h-[35px] focus:shadow-[0_0_0_2px] focus:shadow-green8 outline-none",
                      value: "Pedro Duarte"
                    })
                  ]),
                  createVNode("fieldset", { class: "mb-[15px] w-full flex flex-col justify-start" }, [
                    createVNode("label", {
                      class: "text-[13px] leading-none mb-2.5 text-green12 block",
                      for: "username"
                    }, " Username "),
                    createVNode("input", {
                      id: "username",
                      class: "grow shrink-0 rounded px-2.5 text-[15px] leading-none text-grass11 shadow-[0_0_0_1px] shadow-green7 h-[35px] focus:shadow-[0_0_0_2px] focus:shadow-green8 outline-none",
                      value: "@peduarte"
                    })
                  ]),
                  createVNode("div", { class: "flex justify-end mt-5" }, [
                    createVNode("button", { class: "inline-flex items-center justify-center rounded px-[15px] text-[15px] leading-none font-medium h-[35px] bg-green4 text-green11 hover:bg-green5 focus:shadow-[0_0_0_2px] focus:shadow-green7 outline-none cursor-default" }, " Save changes ")
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(Wc), {
                class: "grow p-5 bg-white rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black",
                value: "tab2"
              }, {
                default: withCtx(() => [
                  createVNode("p", { class: "mb-5 !mt-0 text-mauve11 text-[15px] !leading-normal" }, " Change your password here. After saving, you'll be logged out. "),
                  createVNode("fieldset", { class: "mb-[15px] w-full flex flex-col justify-start" }, [
                    createVNode("label", {
                      class: "text-[13px] leading-none mb-2.5 text-green12 block",
                      for: "currentPassword"
                    }, " Current password "),
                    createVNode("input", {
                      id: "currentPassword",
                      class: "grow shrink-0 rounded px-2.5 text-[15px] leading-none text-grass11 shadow-[0_0_0_1px] shadow-green7 h-[35px] focus:shadow-[0_0_0_2px] focus:shadow-green8 outline-none",
                      type: "password"
                    })
                  ]),
                  createVNode("fieldset", { class: "mb-[15px] w-full flex flex-col justify-start" }, [
                    createVNode("label", {
                      class: "text-[13px] leading-none mb-2.5 text-green12 block",
                      for: "newPassword"
                    }, " New password "),
                    createVNode("input", {
                      id: "newPassword",
                      class: "grow shrink-0 rounded px-2.5 text-[15px] leading-none text-grass11 shadow-[0_0_0_1px] shadow-green7 h-[35px] focus:shadow-[0_0_0_2px] focus:shadow-green8 outline-none",
                      type: "password"
                    })
                  ]),
                  createVNode("fieldset", { class: "mb-[15px] w-full flex flex-col justify-start" }, [
                    createVNode("label", {
                      class: "text-[13px] leading-none mb-2.5 text-green12 block",
                      for: "confirmPassword"
                    }, " Confirm password "),
                    createVNode("input", {
                      id: "confirmPassword",
                      class: "grow shrink-0 rounded px-2.5 text-[15px] leading-none text-grass11 shadow-[0_0_0_1px] shadow-green7 h-[35px] focus:shadow-[0_0_0_2px] focus:shadow-green8 outline-none",
                      type: "password"
                    })
                  ]),
                  createVNode("div", { class: "flex justify-end mt-5" }, [
                    createVNode("button", { class: "inline-flex items-center justify-center rounded px-[15px] text-[15px] leading-none font-medium h-[35px] bg-green4 text-green11 hover:bg-green5 focus:shadow-[0_0_0_2px] focus:shadow-green7 outline-none cursor-default" }, " Change password ")
                  ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../components/demo/Tabs/tailwind/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
