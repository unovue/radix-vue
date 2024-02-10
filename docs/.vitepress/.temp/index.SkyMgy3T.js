import { defineComponent, unref, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { Icon } from "@iconify/vue";
import { aP as Ud, aQ as Xd, aR as Gd, aS as Qd, aT as Jd, aU as qd, aV as Zd, aW as Yd } from "./index.faJ9MUPN.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Ud), mergeProps({
        total: 100,
        "sibling-count": 1,
        "show-edges": "",
        "default-page": 2
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Xd), { class: "flex items-center gap-1 text-white" }, {
              default: withCtx(({ items }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(Gd), { class: "w-9 h-9 flex items-center justify-center disabled:opacity-50 focus-within:outline focus-within:outline-1 focus-within:outline-offset-1 rounded" }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(Icon), { icon: "radix-icons:double-arrow-left" }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(Icon), { icon: "radix-icons:double-arrow-left" })
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(Qd), { class: "w-9 h-9 flex items-center justify-center mr-4 disabled:opacity-50 focus-within:outline focus-within:outline-1 focus-within:outline-offset-1 rounded" }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(Icon), { icon: "radix-icons:chevron-left" }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(Icon), { icon: "radix-icons:chevron-left" })
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(`<!--[-->`);
                  ssrRenderList(items, (page, index) => {
                    _push3(`<!--[-->`);
                    if (page.type === "page") {
                      _push3(ssrRenderComponent(unref(Jd), {
                        key: index,
                        class: "w-9 h-9 border rounded data-[selected]:bg-white data-[selected]:text-blackA11 hover:bg-white/10 transition focus-within:outline focus-within:outline-1 focus-within:outline-offset-1",
                        value: page.value
                      }, {
                        default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`${ssrInterpolate(page.value)}`);
                          } else {
                            return [
                              createTextVNode(toDisplayString(page.value), 1)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    } else {
                      _push3(ssrRenderComponent(unref(qd), {
                        key: page.type,
                        index,
                        class: "w-9 h-9 flex items-center justify-center"
                      }, {
                        default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(` … `);
                          } else {
                            return [
                              createTextVNode(" … ")
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    }
                    _push3(`<!--]-->`);
                  });
                  _push3(`<!--]-->`);
                  _push3(ssrRenderComponent(unref(Zd), { class: "w-9 h-9 flex items-center justify-center ml-4 disabled:opacity-50 focus-within:outline focus-within:outline-1 focus-within:outline-offset-1 rounded" }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(Icon), { icon: "radix-icons:chevron-right" }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(Icon), { icon: "radix-icons:chevron-right" })
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(Yd), { class: "w-9 h-9 flex items-center justify-center disabled:opacity-50 focus-within:outline focus-within:outline-1 focus-within:outline-offset-1 rounded" }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(Icon), { icon: "radix-icons:double-arrow-right" }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(Icon), { icon: "radix-icons:double-arrow-right" })
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(Gd), { class: "w-9 h-9 flex items-center justify-center disabled:opacity-50 focus-within:outline focus-within:outline-1 focus-within:outline-offset-1 rounded" }, {
                      default: withCtx(() => [
                        createVNode(unref(Icon), { icon: "radix-icons:double-arrow-left" })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(Qd), { class: "w-9 h-9 flex items-center justify-center mr-4 disabled:opacity-50 focus-within:outline focus-within:outline-1 focus-within:outline-offset-1 rounded" }, {
                      default: withCtx(() => [
                        createVNode(unref(Icon), { icon: "radix-icons:chevron-left" })
                      ]),
                      _: 1
                    }),
                    (openBlock(true), createBlock(Fragment, null, renderList(items, (page, index) => {
                      return openBlock(), createBlock(Fragment, null, [
                        page.type === "page" ? (openBlock(), createBlock(unref(Jd), {
                          key: index,
                          class: "w-9 h-9 border rounded data-[selected]:bg-white data-[selected]:text-blackA11 hover:bg-white/10 transition focus-within:outline focus-within:outline-1 focus-within:outline-offset-1",
                          value: page.value
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(page.value), 1)
                          ]),
                          _: 2
                        }, 1032, ["value"])) : (openBlock(), createBlock(unref(qd), {
                          key: page.type,
                          index,
                          class: "w-9 h-9 flex items-center justify-center"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" … ")
                          ]),
                          _: 2
                        }, 1032, ["index"]))
                      ], 64);
                    }), 256)),
                    createVNode(unref(Zd), { class: "w-9 h-9 flex items-center justify-center ml-4 disabled:opacity-50 focus-within:outline focus-within:outline-1 focus-within:outline-offset-1 rounded" }, {
                      default: withCtx(() => [
                        createVNode(unref(Icon), { icon: "radix-icons:chevron-right" })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(Yd), { class: "w-9 h-9 flex items-center justify-center disabled:opacity-50 focus-within:outline focus-within:outline-1 focus-within:outline-offset-1 rounded" }, {
                      default: withCtx(() => [
                        createVNode(unref(Icon), { icon: "radix-icons:double-arrow-right" })
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
              createVNode(unref(Xd), { class: "flex items-center gap-1 text-white" }, {
                default: withCtx(({ items }) => [
                  createVNode(unref(Gd), { class: "w-9 h-9 flex items-center justify-center disabled:opacity-50 focus-within:outline focus-within:outline-1 focus-within:outline-offset-1 rounded" }, {
                    default: withCtx(() => [
                      createVNode(unref(Icon), { icon: "radix-icons:double-arrow-left" })
                    ]),
                    _: 1
                  }),
                  createVNode(unref(Qd), { class: "w-9 h-9 flex items-center justify-center mr-4 disabled:opacity-50 focus-within:outline focus-within:outline-1 focus-within:outline-offset-1 rounded" }, {
                    default: withCtx(() => [
                      createVNode(unref(Icon), { icon: "radix-icons:chevron-left" })
                    ]),
                    _: 1
                  }),
                  (openBlock(true), createBlock(Fragment, null, renderList(items, (page, index) => {
                    return openBlock(), createBlock(Fragment, null, [
                      page.type === "page" ? (openBlock(), createBlock(unref(Jd), {
                        key: index,
                        class: "w-9 h-9 border rounded data-[selected]:bg-white data-[selected]:text-blackA11 hover:bg-white/10 transition focus-within:outline focus-within:outline-1 focus-within:outline-offset-1",
                        value: page.value
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(page.value), 1)
                        ]),
                        _: 2
                      }, 1032, ["value"])) : (openBlock(), createBlock(unref(qd), {
                        key: page.type,
                        index,
                        class: "w-9 h-9 flex items-center justify-center"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" … ")
                        ]),
                        _: 2
                      }, 1032, ["index"]))
                    ], 64);
                  }), 256)),
                  createVNode(unref(Zd), { class: "w-9 h-9 flex items-center justify-center ml-4 disabled:opacity-50 focus-within:outline focus-within:outline-1 focus-within:outline-offset-1 rounded" }, {
                    default: withCtx(() => [
                      createVNode(unref(Icon), { icon: "radix-icons:chevron-right" })
                    ]),
                    _: 1
                  }),
                  createVNode(unref(Yd), { class: "w-9 h-9 flex items-center justify-center disabled:opacity-50 focus-within:outline focus-within:outline-1 focus-within:outline-offset-1 rounded" }, {
                    default: withCtx(() => [
                      createVNode(unref(Icon), { icon: "radix-icons:double-arrow-right" })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../components/demo/Pagination/tailwind/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
