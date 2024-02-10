import { defineComponent, unref, withCtx, mergeProps, createVNode, toDisplayString, renderSlot, useSSRContext, ref, createTextVNode } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderSlot } from "vue/server-renderer";
import { Icon } from "@iconify/vue";
import { aH as Nd, aI as Vd, aJ as Hd, aK as Fd, aL as Wd, aM as Ld, aN as Kd, aO as zd } from "./index.faJ9MUPN.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "NavigationMenuListItem",
  __ssrInlineRender: true,
  props: {
    title: String
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<li${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(unref(Nd), { "as-child": "" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<a${ssrRenderAttrs(mergeProps(_ctx.$attrs, { class: "focus:shadow-[0_0_0_2px] focus:shadow-green7 hover:bg-mauve3 block select-none rounded-[6px] p-3 text-[15px] leading-none no-underline outline-none transition-colors" }))}${_scopeId}><div class="text-green12 mb-[5px] font-medium leading-[1.2]"${_scopeId}>${ssrInterpolate(props.title)}</div><p class="text-mauve11 my-0 leading-[1.4]"${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            _push2(`</p></a>`);
          } else {
            return [
              createVNode("a", mergeProps(_ctx.$attrs, { class: "focus:shadow-[0_0_0_2px] focus:shadow-green7 hover:bg-mauve3 block select-none rounded-[6px] p-3 text-[15px] leading-none no-underline outline-none transition-colors" }), [
                createVNode("div", { class: "text-green12 mb-[5px] font-medium leading-[1.2]" }, toDisplayString(props.title), 1),
                createVNode("p", { class: "text-mauve11 my-0 leading-[1.4]" }, [
                  renderSlot(_ctx.$slots, "default")
                ])
              ], 16)
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`</li>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../components/demo/NavigationMenu/tailwind/NavigationMenuListItem.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const currentTrigger = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Vd), mergeProps({
        modelValue: currentTrigger.value,
        "onUpdate:modelValue": ($event) => currentTrigger.value = $event,
        class: "relative z-[1] flex w-full justify-center"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Hd), { class: "center shadow-blackA7 m-0 flex list-none rounded-[6px] bg-white p-1 shadow-[0_2px_10px]" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(Fd), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(Wd), { class: "text-grass11 hover:bg-green3 focus:shadow-green7 group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Learn `);
                              _push5(ssrRenderComponent(unref(Icon), {
                                icon: "radix-icons:caret-down",
                                class: "text-green10 relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180",
                                "aria-hidden": ""
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createTextVNode(" Learn "),
                                createVNode(unref(Icon), {
                                  icon: "radix-icons:caret-down",
                                  class: "text-green10 relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180",
                                  "aria-hidden": ""
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(Ld), { class: "data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight absolute top-0 left-0 w-full sm:w-auto" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<ul class="one m-0 grid list-none gap-x-[10px] p-[22px] sm:w-[500px] sm:grid-cols-[0.75fr_1fr]"${_scopeId4}><li class="row-span-3 grid"${_scopeId4}>`);
                              _push5(ssrRenderComponent(unref(Nd), { "as-child": "" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<a class="focus:shadow-green7 from-green9 to-teal9 flex h-full w-full select-none flex-col justify-end rounded-[6px] bg-gradient-to-b p-[25px] no-underline outline-none focus:shadow-[0_0_0_2px]" href="/"${_scopeId5}><img class="w-16" src="https://www.radix-vue.com/logo.svg"${_scopeId5}><div class="mt-4 mb-[7px] text-[18px] font-medium leading-[1.2] text-white"${_scopeId5}>Radix Primitives</div><p class="text-mauve4 text-[14px] leading-[1.3]"${_scopeId5}>Unstyled, accessible components for Vue.</p></a>`);
                                  } else {
                                    return [
                                      createVNode("a", {
                                        class: "focus:shadow-green7 from-green9 to-teal9 flex h-full w-full select-none flex-col justify-end rounded-[6px] bg-gradient-to-b p-[25px] no-underline outline-none focus:shadow-[0_0_0_2px]",
                                        href: "/"
                                      }, [
                                        createVNode("img", {
                                          class: "w-16",
                                          src: "https://www.radix-vue.com/logo.svg"
                                        }),
                                        createVNode("div", { class: "mt-4 mb-[7px] text-[18px] font-medium leading-[1.2] text-white" }, "Radix Primitives"),
                                        createVNode("p", { class: "text-mauve4 text-[14px] leading-[1.3]" }, "Unstyled, accessible components for Vue.")
                                      ])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`</li>`);
                              _push5(ssrRenderComponent(_sfc_main$1, {
                                href: "https://stitches.dev/",
                                title: "Stitches"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` CSS-in-JS with best-in-class developer experience. `);
                                  } else {
                                    return [
                                      createTextVNode(" CSS-in-JS with best-in-class developer experience. ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_sfc_main$1, {
                                href: "/colors",
                                title: "Colors"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Beautiful, thought-out palettes with auto dark mode. `);
                                  } else {
                                    return [
                                      createTextVNode(" Beautiful, thought-out palettes with auto dark mode. ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_sfc_main$1, {
                                href: "https://icons.radix-ui.com/",
                                title: "Icons"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` A crisp set of 15x15 icons, balanced and consistent. `);
                                  } else {
                                    return [
                                      createTextVNode(" A crisp set of 15x15 icons, balanced and consistent. ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`</ul>`);
                            } else {
                              return [
                                createVNode("ul", { class: "one m-0 grid list-none gap-x-[10px] p-[22px] sm:w-[500px] sm:grid-cols-[0.75fr_1fr]" }, [
                                  createVNode("li", { class: "row-span-3 grid" }, [
                                    createVNode(unref(Nd), { "as-child": "" }, {
                                      default: withCtx(() => [
                                        createVNode("a", {
                                          class: "focus:shadow-green7 from-green9 to-teal9 flex h-full w-full select-none flex-col justify-end rounded-[6px] bg-gradient-to-b p-[25px] no-underline outline-none focus:shadow-[0_0_0_2px]",
                                          href: "/"
                                        }, [
                                          createVNode("img", {
                                            class: "w-16",
                                            src: "https://www.radix-vue.com/logo.svg"
                                          }),
                                          createVNode("div", { class: "mt-4 mb-[7px] text-[18px] font-medium leading-[1.2] text-white" }, "Radix Primitives"),
                                          createVNode("p", { class: "text-mauve4 text-[14px] leading-[1.3]" }, "Unstyled, accessible components for Vue.")
                                        ])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  createVNode(_sfc_main$1, {
                                    href: "https://stitches.dev/",
                                    title: "Stitches"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" CSS-in-JS with best-in-class developer experience. ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_sfc_main$1, {
                                    href: "/colors",
                                    title: "Colors"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Beautiful, thought-out palettes with auto dark mode. ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_sfc_main$1, {
                                    href: "https://icons.radix-ui.com/",
                                    title: "Icons"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" A crisp set of 15x15 icons, balanced and consistent. ")
                                    ]),
                                    _: 1
                                  })
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(Wd), { class: "text-grass11 hover:bg-green3 focus:shadow-green7 group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]" }, {
                            default: withCtx(() => [
                              createTextVNode(" Learn "),
                              createVNode(unref(Icon), {
                                icon: "radix-icons:caret-down",
                                class: "text-green10 relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180",
                                "aria-hidden": ""
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(unref(Ld), { class: "data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight absolute top-0 left-0 w-full sm:w-auto" }, {
                            default: withCtx(() => [
                              createVNode("ul", { class: "one m-0 grid list-none gap-x-[10px] p-[22px] sm:w-[500px] sm:grid-cols-[0.75fr_1fr]" }, [
                                createVNode("li", { class: "row-span-3 grid" }, [
                                  createVNode(unref(Nd), { "as-child": "" }, {
                                    default: withCtx(() => [
                                      createVNode("a", {
                                        class: "focus:shadow-green7 from-green9 to-teal9 flex h-full w-full select-none flex-col justify-end rounded-[6px] bg-gradient-to-b p-[25px] no-underline outline-none focus:shadow-[0_0_0_2px]",
                                        href: "/"
                                      }, [
                                        createVNode("img", {
                                          class: "w-16",
                                          src: "https://www.radix-vue.com/logo.svg"
                                        }),
                                        createVNode("div", { class: "mt-4 mb-[7px] text-[18px] font-medium leading-[1.2] text-white" }, "Radix Primitives"),
                                        createVNode("p", { class: "text-mauve4 text-[14px] leading-[1.3]" }, "Unstyled, accessible components for Vue.")
                                      ])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                createVNode(_sfc_main$1, {
                                  href: "https://stitches.dev/",
                                  title: "Stitches"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" CSS-in-JS with best-in-class developer experience. ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_sfc_main$1, {
                                  href: "/colors",
                                  title: "Colors"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Beautiful, thought-out palettes with auto dark mode. ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_sfc_main$1, {
                                  href: "https://icons.radix-ui.com/",
                                  title: "Icons"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" A crisp set of 15x15 icons, balanced and consistent. ")
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
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(Fd), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(Wd), { class: "text-grass11 hover:bg-green3 focus:shadow-green7 group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Overview `);
                              _push5(ssrRenderComponent(unref(Icon), {
                                icon: "radix-icons:caret-down",
                                class: "text-green10 relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180",
                                "aria-hidden": ""
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createTextVNode(" Overview "),
                                createVNode(unref(Icon), {
                                  icon: "radix-icons:caret-down",
                                  class: "text-green10 relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180",
                                  "aria-hidden": ""
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(Ld), { class: "data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight absolute top-0 left-0 w-full sm:w-auto" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<ul class="m-0 grid list-none gap-x-[10px] p-[22px] sm:w-[600px] sm:grid-flow-col sm:grid-rows-3"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_sfc_main$1, {
                                title: "Introduction",
                                href: "/docs/primitives/overview/introduction"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Build high-quality, accessible design systems and web apps. `);
                                  } else {
                                    return [
                                      createTextVNode(" Build high-quality, accessible design systems and web apps. ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_sfc_main$1, {
                                title: "Getting started",
                                href: "/docs/primitives/overview/getting-started"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` A quick tutorial to get you up and running with Radix Primitives. `);
                                  } else {
                                    return [
                                      createTextVNode(" A quick tutorial to get you up and running with Radix Primitives. ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_sfc_main$1, {
                                title: "Styling",
                                href: "/docs/primitives/guides/styling"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Unstyled and compatible with any styling solution. `);
                                  } else {
                                    return [
                                      createTextVNode(" Unstyled and compatible with any styling solution. ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_sfc_main$1, {
                                title: "Animation",
                                href: "/docs/primitives/guides/animation"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Use CSS keyframes or any animation library of your choice. `);
                                  } else {
                                    return [
                                      createTextVNode(" Use CSS keyframes or any animation library of your choice. ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_sfc_main$1, {
                                title: "Accessibility",
                                href: "/docs/primitives/overview/accessibility"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Tested in a range of browsers and assistive technologies. `);
                                  } else {
                                    return [
                                      createTextVNode(" Tested in a range of browsers and assistive technologies. ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_sfc_main$1, {
                                title: "Releases",
                                href: "/docs/primitives/overview/releases"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Radix Primitives releases and their changelogs. `);
                                  } else {
                                    return [
                                      createTextVNode(" Radix Primitives releases and their changelogs. ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`</ul>`);
                            } else {
                              return [
                                createVNode("ul", { class: "m-0 grid list-none gap-x-[10px] p-[22px] sm:w-[600px] sm:grid-flow-col sm:grid-rows-3" }, [
                                  createVNode(_sfc_main$1, {
                                    title: "Introduction",
                                    href: "/docs/primitives/overview/introduction"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Build high-quality, accessible design systems and web apps. ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_sfc_main$1, {
                                    title: "Getting started",
                                    href: "/docs/primitives/overview/getting-started"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" A quick tutorial to get you up and running with Radix Primitives. ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_sfc_main$1, {
                                    title: "Styling",
                                    href: "/docs/primitives/guides/styling"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Unstyled and compatible with any styling solution. ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_sfc_main$1, {
                                    title: "Animation",
                                    href: "/docs/primitives/guides/animation"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Use CSS keyframes or any animation library of your choice. ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_sfc_main$1, {
                                    title: "Accessibility",
                                    href: "/docs/primitives/overview/accessibility"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Tested in a range of browsers and assistive technologies. ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_sfc_main$1, {
                                    title: "Releases",
                                    href: "/docs/primitives/overview/releases"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Radix Primitives releases and their changelogs. ")
                                    ]),
                                    _: 1
                                  })
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(Wd), { class: "text-grass11 hover:bg-green3 focus:shadow-green7 group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]" }, {
                            default: withCtx(() => [
                              createTextVNode(" Overview "),
                              createVNode(unref(Icon), {
                                icon: "radix-icons:caret-down",
                                class: "text-green10 relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180",
                                "aria-hidden": ""
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(unref(Ld), { class: "data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight absolute top-0 left-0 w-full sm:w-auto" }, {
                            default: withCtx(() => [
                              createVNode("ul", { class: "m-0 grid list-none gap-x-[10px] p-[22px] sm:w-[600px] sm:grid-flow-col sm:grid-rows-3" }, [
                                createVNode(_sfc_main$1, {
                                  title: "Introduction",
                                  href: "/docs/primitives/overview/introduction"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Build high-quality, accessible design systems and web apps. ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_sfc_main$1, {
                                  title: "Getting started",
                                  href: "/docs/primitives/overview/getting-started"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" A quick tutorial to get you up and running with Radix Primitives. ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_sfc_main$1, {
                                  title: "Styling",
                                  href: "/docs/primitives/guides/styling"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Unstyled and compatible with any styling solution. ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_sfc_main$1, {
                                  title: "Animation",
                                  href: "/docs/primitives/guides/animation"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Use CSS keyframes or any animation library of your choice. ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_sfc_main$1, {
                                  title: "Accessibility",
                                  href: "/docs/primitives/overview/accessibility"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Tested in a range of browsers and assistive technologies. ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_sfc_main$1, {
                                  title: "Releases",
                                  href: "/docs/primitives/overview/releases"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Radix Primitives releases and their changelogs. ")
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
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(Fd), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(Nd), {
                          class: "text-grass11 hover:bg-green3 focus:shadow-green7 block select-none rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none no-underline outline-none focus:shadow-[0_0_0_2px]",
                          href: "https://github.com/radix-vue"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Github `);
                            } else {
                              return [
                                createTextVNode(" Github ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(Nd), {
                            class: "text-grass11 hover:bg-green3 focus:shadow-green7 block select-none rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none no-underline outline-none focus:shadow-[0_0_0_2px]",
                            href: "https://github.com/radix-vue"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Github ")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(Kd), { class: "data-[state=hidden]:opacity-0 duration-200 data-[state=visible]:animate-fadeIn data-[state=hidden]:animate-fadeOut top-full z-[1] flex h-[10px] items-end justify-center overflow-hidden transition-[all,transform_250ms_ease]" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="relative top-[70%] h-[10px] w-[10px] rotate-[45deg] rounded-tl-[2px] bg-white"${_scopeId3}></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "relative top-[70%] h-[10px] w-[10px] rotate-[45deg] rounded-tl-[2px] bg-white" })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(Fd), null, {
                      default: withCtx(() => [
                        createVNode(unref(Wd), { class: "text-grass11 hover:bg-green3 focus:shadow-green7 group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]" }, {
                          default: withCtx(() => [
                            createTextVNode(" Learn "),
                            createVNode(unref(Icon), {
                              icon: "radix-icons:caret-down",
                              class: "text-green10 relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180",
                              "aria-hidden": ""
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(unref(Ld), { class: "data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight absolute top-0 left-0 w-full sm:w-auto" }, {
                          default: withCtx(() => [
                            createVNode("ul", { class: "one m-0 grid list-none gap-x-[10px] p-[22px] sm:w-[500px] sm:grid-cols-[0.75fr_1fr]" }, [
                              createVNode("li", { class: "row-span-3 grid" }, [
                                createVNode(unref(Nd), { "as-child": "" }, {
                                  default: withCtx(() => [
                                    createVNode("a", {
                                      class: "focus:shadow-green7 from-green9 to-teal9 flex h-full w-full select-none flex-col justify-end rounded-[6px] bg-gradient-to-b p-[25px] no-underline outline-none focus:shadow-[0_0_0_2px]",
                                      href: "/"
                                    }, [
                                      createVNode("img", {
                                        class: "w-16",
                                        src: "https://www.radix-vue.com/logo.svg"
                                      }),
                                      createVNode("div", { class: "mt-4 mb-[7px] text-[18px] font-medium leading-[1.2] text-white" }, "Radix Primitives"),
                                      createVNode("p", { class: "text-mauve4 text-[14px] leading-[1.3]" }, "Unstyled, accessible components for Vue.")
                                    ])
                                  ]),
                                  _: 1
                                })
                              ]),
                              createVNode(_sfc_main$1, {
                                href: "https://stitches.dev/",
                                title: "Stitches"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" CSS-in-JS with best-in-class developer experience. ")
                                ]),
                                _: 1
                              }),
                              createVNode(_sfc_main$1, {
                                href: "/colors",
                                title: "Colors"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Beautiful, thought-out palettes with auto dark mode. ")
                                ]),
                                _: 1
                              }),
                              createVNode(_sfc_main$1, {
                                href: "https://icons.radix-ui.com/",
                                title: "Icons"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" A crisp set of 15x15 icons, balanced and consistent. ")
                                ]),
                                _: 1
                              })
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(Fd), null, {
                      default: withCtx(() => [
                        createVNode(unref(Wd), { class: "text-grass11 hover:bg-green3 focus:shadow-green7 group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]" }, {
                          default: withCtx(() => [
                            createTextVNode(" Overview "),
                            createVNode(unref(Icon), {
                              icon: "radix-icons:caret-down",
                              class: "text-green10 relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180",
                              "aria-hidden": ""
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(unref(Ld), { class: "data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight absolute top-0 left-0 w-full sm:w-auto" }, {
                          default: withCtx(() => [
                            createVNode("ul", { class: "m-0 grid list-none gap-x-[10px] p-[22px] sm:w-[600px] sm:grid-flow-col sm:grid-rows-3" }, [
                              createVNode(_sfc_main$1, {
                                title: "Introduction",
                                href: "/docs/primitives/overview/introduction"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Build high-quality, accessible design systems and web apps. ")
                                ]),
                                _: 1
                              }),
                              createVNode(_sfc_main$1, {
                                title: "Getting started",
                                href: "/docs/primitives/overview/getting-started"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" A quick tutorial to get you up and running with Radix Primitives. ")
                                ]),
                                _: 1
                              }),
                              createVNode(_sfc_main$1, {
                                title: "Styling",
                                href: "/docs/primitives/guides/styling"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Unstyled and compatible with any styling solution. ")
                                ]),
                                _: 1
                              }),
                              createVNode(_sfc_main$1, {
                                title: "Animation",
                                href: "/docs/primitives/guides/animation"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Use CSS keyframes or any animation library of your choice. ")
                                ]),
                                _: 1
                              }),
                              createVNode(_sfc_main$1, {
                                title: "Accessibility",
                                href: "/docs/primitives/overview/accessibility"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Tested in a range of browsers and assistive technologies. ")
                                ]),
                                _: 1
                              }),
                              createVNode(_sfc_main$1, {
                                title: "Releases",
                                href: "/docs/primitives/overview/releases"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Radix Primitives releases and their changelogs. ")
                                ]),
                                _: 1
                              })
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(Fd), null, {
                      default: withCtx(() => [
                        createVNode(unref(Nd), {
                          class: "text-grass11 hover:bg-green3 focus:shadow-green7 block select-none rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none no-underline outline-none focus:shadow-[0_0_0_2px]",
                          href: "https://github.com/radix-vue"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Github ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(Kd), { class: "data-[state=hidden]:opacity-0 duration-200 data-[state=visible]:animate-fadeIn data-[state=hidden]:animate-fadeOut top-full z-[1] flex h-[10px] items-end justify-center overflow-hidden transition-[all,transform_250ms_ease]" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "relative top-[70%] h-[10px] w-[10px] rotate-[45deg] rounded-tl-[2px] bg-white" })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="perspective-[2000px] absolute top-full left-0 flex w-full justify-center"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(zd), { class: "data-[state=open]:animate-scaleIn data-[state=closed]:animate-scaleOut relative mt-[10px] h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-[10px] bg-white transition-[width,_height] duration-300 sm:w-[var(--radix-navigation-menu-viewport-width)]" }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode(unref(Hd), { class: "center shadow-blackA7 m-0 flex list-none rounded-[6px] bg-white p-1 shadow-[0_2px_10px]" }, {
                default: withCtx(() => [
                  createVNode(unref(Fd), null, {
                    default: withCtx(() => [
                      createVNode(unref(Wd), { class: "text-grass11 hover:bg-green3 focus:shadow-green7 group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]" }, {
                        default: withCtx(() => [
                          createTextVNode(" Learn "),
                          createVNode(unref(Icon), {
                            icon: "radix-icons:caret-down",
                            class: "text-green10 relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180",
                            "aria-hidden": ""
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(unref(Ld), { class: "data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight absolute top-0 left-0 w-full sm:w-auto" }, {
                        default: withCtx(() => [
                          createVNode("ul", { class: "one m-0 grid list-none gap-x-[10px] p-[22px] sm:w-[500px] sm:grid-cols-[0.75fr_1fr]" }, [
                            createVNode("li", { class: "row-span-3 grid" }, [
                              createVNode(unref(Nd), { "as-child": "" }, {
                                default: withCtx(() => [
                                  createVNode("a", {
                                    class: "focus:shadow-green7 from-green9 to-teal9 flex h-full w-full select-none flex-col justify-end rounded-[6px] bg-gradient-to-b p-[25px] no-underline outline-none focus:shadow-[0_0_0_2px]",
                                    href: "/"
                                  }, [
                                    createVNode("img", {
                                      class: "w-16",
                                      src: "https://www.radix-vue.com/logo.svg"
                                    }),
                                    createVNode("div", { class: "mt-4 mb-[7px] text-[18px] font-medium leading-[1.2] text-white" }, "Radix Primitives"),
                                    createVNode("p", { class: "text-mauve4 text-[14px] leading-[1.3]" }, "Unstyled, accessible components for Vue.")
                                  ])
                                ]),
                                _: 1
                              })
                            ]),
                            createVNode(_sfc_main$1, {
                              href: "https://stitches.dev/",
                              title: "Stitches"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" CSS-in-JS with best-in-class developer experience. ")
                              ]),
                              _: 1
                            }),
                            createVNode(_sfc_main$1, {
                              href: "/colors",
                              title: "Colors"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Beautiful, thought-out palettes with auto dark mode. ")
                              ]),
                              _: 1
                            }),
                            createVNode(_sfc_main$1, {
                              href: "https://icons.radix-ui.com/",
                              title: "Icons"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" A crisp set of 15x15 icons, balanced and consistent. ")
                              ]),
                              _: 1
                            })
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(unref(Fd), null, {
                    default: withCtx(() => [
                      createVNode(unref(Wd), { class: "text-grass11 hover:bg-green3 focus:shadow-green7 group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]" }, {
                        default: withCtx(() => [
                          createTextVNode(" Overview "),
                          createVNode(unref(Icon), {
                            icon: "radix-icons:caret-down",
                            class: "text-green10 relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180",
                            "aria-hidden": ""
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(unref(Ld), { class: "data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight absolute top-0 left-0 w-full sm:w-auto" }, {
                        default: withCtx(() => [
                          createVNode("ul", { class: "m-0 grid list-none gap-x-[10px] p-[22px] sm:w-[600px] sm:grid-flow-col sm:grid-rows-3" }, [
                            createVNode(_sfc_main$1, {
                              title: "Introduction",
                              href: "/docs/primitives/overview/introduction"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Build high-quality, accessible design systems and web apps. ")
                              ]),
                              _: 1
                            }),
                            createVNode(_sfc_main$1, {
                              title: "Getting started",
                              href: "/docs/primitives/overview/getting-started"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" A quick tutorial to get you up and running with Radix Primitives. ")
                              ]),
                              _: 1
                            }),
                            createVNode(_sfc_main$1, {
                              title: "Styling",
                              href: "/docs/primitives/guides/styling"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Unstyled and compatible with any styling solution. ")
                              ]),
                              _: 1
                            }),
                            createVNode(_sfc_main$1, {
                              title: "Animation",
                              href: "/docs/primitives/guides/animation"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Use CSS keyframes or any animation library of your choice. ")
                              ]),
                              _: 1
                            }),
                            createVNode(_sfc_main$1, {
                              title: "Accessibility",
                              href: "/docs/primitives/overview/accessibility"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Tested in a range of browsers and assistive technologies. ")
                              ]),
                              _: 1
                            }),
                            createVNode(_sfc_main$1, {
                              title: "Releases",
                              href: "/docs/primitives/overview/releases"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Radix Primitives releases and their changelogs. ")
                              ]),
                              _: 1
                            })
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(unref(Fd), null, {
                    default: withCtx(() => [
                      createVNode(unref(Nd), {
                        class: "text-grass11 hover:bg-green3 focus:shadow-green7 block select-none rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none no-underline outline-none focus:shadow-[0_0_0_2px]",
                        href: "https://github.com/radix-vue"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Github ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(unref(Kd), { class: "data-[state=hidden]:opacity-0 duration-200 data-[state=visible]:animate-fadeIn data-[state=hidden]:animate-fadeOut top-full z-[1] flex h-[10px] items-end justify-center overflow-hidden transition-[all,transform_250ms_ease]" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "relative top-[70%] h-[10px] w-[10px] rotate-[45deg] rounded-tl-[2px] bg-white" })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode("div", { class: "perspective-[2000px] absolute top-full left-0 flex w-full justify-center" }, [
                createVNode(unref(zd), { class: "data-[state=open]:animate-scaleIn data-[state=closed]:animate-scaleOut relative mt-[10px] h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-[10px] bg-white transition-[width,_height] duration-300 sm:w-[var(--radix-navigation-menu-viewport-width)]" })
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../components/demo/NavigationMenu/tailwind/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
