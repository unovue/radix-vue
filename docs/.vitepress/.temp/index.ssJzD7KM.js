import { defineComponent, unref, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { r as ru, d as lu, f as iu, g as du, h as uu, p as pu, j as fu, m as cu, v as vu } from "./index.faJ9MUPN.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    function handleAction() {
      alert("clicked action button!");
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(ru), _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(lu), { class: "bg-white text-grass11 font-semibold hover:bg-white/90 shadow-sm inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] leading-none outline-none focus:shadow-[0_0_0_2px] focus:shadow-black transition-all" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Delete account `);
                } else {
                  return [
                    createTextVNode(" Delete account ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(iu), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(du), { class: "bg-blackA9 data-[state=open]:animate-overlayShow fixed inset-0 z-30" }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(uu), { class: "z-[100] text-[15px] data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(pu), { class: "text-mauve12 m-0 text-[17px] font-semibold" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Are you absolutely sure? `);
                            } else {
                              return [
                                createTextVNode(" Are you absolutely sure? ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(fu), { class: "text-mauve11 mt-4 mb-5 text-[15px] leading-normal" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` This action cannot be undone. This will permanently delete your account and remove your data from our servers. `);
                            } else {
                              return [
                                createTextVNode(" This action cannot be undone. This will permanently delete your account and remove your data from our servers. ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<div class="flex justify-end gap-[25px]"${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(cu), { class: "text-mauve11 bg-mauve4 hover:bg-mauve5 focus:shadow-mauve7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-semibold leading-none outline-none focus:shadow-[0_0_0_2px]" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Cancel `);
                            } else {
                              return [
                                createTextVNode(" Cancel ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(vu), {
                          class: "text-red11 bg-red4 hover:bg-red5 focus:shadow-red7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-semibold leading-none outline-none focus:shadow-[0_0_0_2px]",
                          onClick: handleAction
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Yes, delete account `);
                            } else {
                              return [
                                createTextVNode(" Yes, delete account ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode(unref(pu), { class: "text-mauve12 m-0 text-[17px] font-semibold" }, {
                            default: withCtx(() => [
                              createTextVNode(" Are you absolutely sure? ")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(fu), { class: "text-mauve11 mt-4 mb-5 text-[15px] leading-normal" }, {
                            default: withCtx(() => [
                              createTextVNode(" This action cannot be undone. This will permanently delete your account and remove your data from our servers. ")
                            ]),
                            _: 1
                          }),
                          createVNode("div", { class: "flex justify-end gap-[25px]" }, [
                            createVNode(unref(cu), { class: "text-mauve11 bg-mauve4 hover:bg-mauve5 focus:shadow-mauve7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-semibold leading-none outline-none focus:shadow-[0_0_0_2px]" }, {
                              default: withCtx(() => [
                                createTextVNode(" Cancel ")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(vu), {
                              class: "text-red11 bg-red4 hover:bg-red5 focus:shadow-red7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-semibold leading-none outline-none focus:shadow-[0_0_0_2px]",
                              onClick: handleAction
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Yes, delete account ")
                              ]),
                              _: 1
                            })
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(du), { class: "bg-blackA9 data-[state=open]:animate-overlayShow fixed inset-0 z-30" }),
                    createVNode(unref(uu), { class: "z-[100] text-[15px] data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none" }, {
                      default: withCtx(() => [
                        createVNode(unref(pu), { class: "text-mauve12 m-0 text-[17px] font-semibold" }, {
                          default: withCtx(() => [
                            createTextVNode(" Are you absolutely sure? ")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(fu), { class: "text-mauve11 mt-4 mb-5 text-[15px] leading-normal" }, {
                          default: withCtx(() => [
                            createTextVNode(" This action cannot be undone. This will permanently delete your account and remove your data from our servers. ")
                          ]),
                          _: 1
                        }),
                        createVNode("div", { class: "flex justify-end gap-[25px]" }, [
                          createVNode(unref(cu), { class: "text-mauve11 bg-mauve4 hover:bg-mauve5 focus:shadow-mauve7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-semibold leading-none outline-none focus:shadow-[0_0_0_2px]" }, {
                            default: withCtx(() => [
                              createTextVNode(" Cancel ")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(vu), {
                            class: "text-red11 bg-red4 hover:bg-red5 focus:shadow-red7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-semibold leading-none outline-none focus:shadow-[0_0_0_2px]",
                            onClick: handleAction
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Yes, delete account ")
                            ]),
                            _: 1
                          })
                        ])
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
              createVNode(unref(lu), { class: "bg-white text-grass11 font-semibold hover:bg-white/90 shadow-sm inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] leading-none outline-none focus:shadow-[0_0_0_2px] focus:shadow-black transition-all" }, {
                default: withCtx(() => [
                  createTextVNode(" Delete account ")
                ]),
                _: 1
              }),
              createVNode(unref(iu), null, {
                default: withCtx(() => [
                  createVNode(unref(du), { class: "bg-blackA9 data-[state=open]:animate-overlayShow fixed inset-0 z-30" }),
                  createVNode(unref(uu), { class: "z-[100] text-[15px] data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none" }, {
                    default: withCtx(() => [
                      createVNode(unref(pu), { class: "text-mauve12 m-0 text-[17px] font-semibold" }, {
                        default: withCtx(() => [
                          createTextVNode(" Are you absolutely sure? ")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(fu), { class: "text-mauve11 mt-4 mb-5 text-[15px] leading-normal" }, {
                        default: withCtx(() => [
                          createTextVNode(" This action cannot be undone. This will permanently delete your account and remove your data from our servers. ")
                        ]),
                        _: 1
                      }),
                      createVNode("div", { class: "flex justify-end gap-[25px]" }, [
                        createVNode(unref(cu), { class: "text-mauve11 bg-mauve4 hover:bg-mauve5 focus:shadow-mauve7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-semibold leading-none outline-none focus:shadow-[0_0_0_2px]" }, {
                          default: withCtx(() => [
                            createTextVNode(" Cancel ")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(vu), {
                          class: "text-red11 bg-red4 hover:bg-red5 focus:shadow-red7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-semibold leading-none outline-none focus:shadow-[0_0_0_2px]",
                          onClick: handleAction
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Yes, delete account ")
                          ]),
                          _: 1
                        })
                      ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../components/demo/AlertDialog/tailwind/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
