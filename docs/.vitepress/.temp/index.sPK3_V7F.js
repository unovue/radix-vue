import { defineComponent, ref, unref, mergeProps, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { an as vd, ao as md, ap as hd, aq as gd, ar as yd } from "./index.faJ9MUPN.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const hoverState = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(vd), mergeProps({
        open: hoverState.value,
        "onUpdate:open": ($event) => hoverState.value = $event
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(md), {
              class: "inline-block cursor-pointer rounded-full shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] outline-none focus:shadow-[0_0_0_2px_white]",
              href: "https://twitter.com/radix_ui",
              target: "_blank",
              rel: "noreferrer noopener"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img class="block h-[45px] w-[45px] rounded-full" src="https://pbs.twimg.com/profile_images/1337055608613253126/r_eiMp2H_400x400.png" alt="Radix UI"${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      class: "block h-[45px] w-[45px] rounded-full",
                      src: "https://pbs.twimg.com/profile_images/1337055608613253126/r_eiMp2H_400x400.png",
                      alt: "Radix UI"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(hd), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(gd), {
                    class: "data-[side=bottom]:animate-slideUpAndFade data-[side=right]:animate-slideLeftAndFade data-[side=left]:animate-slideRightAndFade data-[side=top]:animate-slideDownAndFade w-[300px] rounded-md bg-white p-5 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] data-[state=open]:transition-all",
                    "side-offset": 5
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="flex flex-col gap-[7px]"${_scopeId3}><img class="block h-[60px] w-[60px] rounded-full" src="https://pbs.twimg.com/profile_images/1337055608613253126/r_eiMp2H_400x400.png" alt="Radix UI"${_scopeId3}><div class="flex flex-col gap-[15px]"${_scopeId3}><div${_scopeId3}><div class="text-mauve12 m-0 text-[15px] font-medium leading-[1.5]"${_scopeId3}> Radix </div><div class="text-mauve10 m-0 text-[15px] leading-[1.5]"${_scopeId3}> @radix_ui </div></div><div class="text-mauve12 m-0 text-[15px] leading-[1.5]"${_scopeId3}> Components, icons, colors, and templates for building high-quality, accessible UI. Free and open-source. </div><div class="flex gap-[15px]"${_scopeId3}><div class="flex gap-[5px]"${_scopeId3}><div class="text-mauve12 m-0 text-[15px] font-medium leading-[1.5]"${_scopeId3}> 0 </div><div class="text-mauve10 m-0 text-[15px] leading-[1.5]"${_scopeId3}> Following </div></div><div class="flex gap-[5px]"${_scopeId3}><div class="text-mauve12 m-0 text-[15px] font-medium leading-[1.5]"${_scopeId3}> 2,900 </div><div class="text-mauve10 m-0 text-[15px] leading-[1.5]"${_scopeId3}> Followers </div></div></div></div></div>`);
                        _push4(ssrRenderComponent(unref(yd), {
                          class: "fill-white",
                          size: "8"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("div", { class: "flex flex-col gap-[7px]" }, [
                            createVNode("img", {
                              class: "block h-[60px] w-[60px] rounded-full",
                              src: "https://pbs.twimg.com/profile_images/1337055608613253126/r_eiMp2H_400x400.png",
                              alt: "Radix UI"
                            }),
                            createVNode("div", { class: "flex flex-col gap-[15px]" }, [
                              createVNode("div", null, [
                                createVNode("div", { class: "text-mauve12 m-0 text-[15px] font-medium leading-[1.5]" }, " Radix "),
                                createVNode("div", { class: "text-mauve10 m-0 text-[15px] leading-[1.5]" }, " @radix_ui ")
                              ]),
                              createVNode("div", { class: "text-mauve12 m-0 text-[15px] leading-[1.5]" }, " Components, icons, colors, and templates for building high-quality, accessible UI. Free and open-source. "),
                              createVNode("div", { class: "flex gap-[15px]" }, [
                                createVNode("div", { class: "flex gap-[5px]" }, [
                                  createVNode("div", { class: "text-mauve12 m-0 text-[15px] font-medium leading-[1.5]" }, " 0 "),
                                  createVNode("div", { class: "text-mauve10 m-0 text-[15px] leading-[1.5]" }, " Following ")
                                ]),
                                createVNode("div", { class: "flex gap-[5px]" }, [
                                  createVNode("div", { class: "text-mauve12 m-0 text-[15px] font-medium leading-[1.5]" }, " 2,900 "),
                                  createVNode("div", { class: "text-mauve10 m-0 text-[15px] leading-[1.5]" }, " Followers ")
                                ])
                              ])
                            ])
                          ]),
                          createVNode(unref(yd), {
                            class: "fill-white",
                            size: "8"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(gd), {
                      class: "data-[side=bottom]:animate-slideUpAndFade data-[side=right]:animate-slideLeftAndFade data-[side=left]:animate-slideRightAndFade data-[side=top]:animate-slideDownAndFade w-[300px] rounded-md bg-white p-5 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] data-[state=open]:transition-all",
                      "side-offset": 5
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "flex flex-col gap-[7px]" }, [
                          createVNode("img", {
                            class: "block h-[60px] w-[60px] rounded-full",
                            src: "https://pbs.twimg.com/profile_images/1337055608613253126/r_eiMp2H_400x400.png",
                            alt: "Radix UI"
                          }),
                          createVNode("div", { class: "flex flex-col gap-[15px]" }, [
                            createVNode("div", null, [
                              createVNode("div", { class: "text-mauve12 m-0 text-[15px] font-medium leading-[1.5]" }, " Radix "),
                              createVNode("div", { class: "text-mauve10 m-0 text-[15px] leading-[1.5]" }, " @radix_ui ")
                            ]),
                            createVNode("div", { class: "text-mauve12 m-0 text-[15px] leading-[1.5]" }, " Components, icons, colors, and templates for building high-quality, accessible UI. Free and open-source. "),
                            createVNode("div", { class: "flex gap-[15px]" }, [
                              createVNode("div", { class: "flex gap-[5px]" }, [
                                createVNode("div", { class: "text-mauve12 m-0 text-[15px] font-medium leading-[1.5]" }, " 0 "),
                                createVNode("div", { class: "text-mauve10 m-0 text-[15px] leading-[1.5]" }, " Following ")
                              ]),
                              createVNode("div", { class: "flex gap-[5px]" }, [
                                createVNode("div", { class: "text-mauve12 m-0 text-[15px] font-medium leading-[1.5]" }, " 2,900 "),
                                createVNode("div", { class: "text-mauve10 m-0 text-[15px] leading-[1.5]" }, " Followers ")
                              ])
                            ])
                          ])
                        ]),
                        createVNode(unref(yd), {
                          class: "fill-white",
                          size: "8"
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
              createVNode(unref(md), {
                class: "inline-block cursor-pointer rounded-full shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] outline-none focus:shadow-[0_0_0_2px_white]",
                href: "https://twitter.com/radix_ui",
                target: "_blank",
                rel: "noreferrer noopener"
              }, {
                default: withCtx(() => [
                  createVNode("img", {
                    class: "block h-[45px] w-[45px] rounded-full",
                    src: "https://pbs.twimg.com/profile_images/1337055608613253126/r_eiMp2H_400x400.png",
                    alt: "Radix UI"
                  })
                ]),
                _: 1
              }),
              createVNode(unref(hd), null, {
                default: withCtx(() => [
                  createVNode(unref(gd), {
                    class: "data-[side=bottom]:animate-slideUpAndFade data-[side=right]:animate-slideLeftAndFade data-[side=left]:animate-slideRightAndFade data-[side=top]:animate-slideDownAndFade w-[300px] rounded-md bg-white p-5 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] data-[state=open]:transition-all",
                    "side-offset": 5
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "flex flex-col gap-[7px]" }, [
                        createVNode("img", {
                          class: "block h-[60px] w-[60px] rounded-full",
                          src: "https://pbs.twimg.com/profile_images/1337055608613253126/r_eiMp2H_400x400.png",
                          alt: "Radix UI"
                        }),
                        createVNode("div", { class: "flex flex-col gap-[15px]" }, [
                          createVNode("div", null, [
                            createVNode("div", { class: "text-mauve12 m-0 text-[15px] font-medium leading-[1.5]" }, " Radix "),
                            createVNode("div", { class: "text-mauve10 m-0 text-[15px] leading-[1.5]" }, " @radix_ui ")
                          ]),
                          createVNode("div", { class: "text-mauve12 m-0 text-[15px] leading-[1.5]" }, " Components, icons, colors, and templates for building high-quality, accessible UI. Free and open-source. "),
                          createVNode("div", { class: "flex gap-[15px]" }, [
                            createVNode("div", { class: "flex gap-[5px]" }, [
                              createVNode("div", { class: "text-mauve12 m-0 text-[15px] font-medium leading-[1.5]" }, " 0 "),
                              createVNode("div", { class: "text-mauve10 m-0 text-[15px] leading-[1.5]" }, " Following ")
                            ]),
                            createVNode("div", { class: "flex gap-[5px]" }, [
                              createVNode("div", { class: "text-mauve12 m-0 text-[15px] font-medium leading-[1.5]" }, " 2,900 "),
                              createVNode("div", { class: "text-mauve10 m-0 text-[15px] leading-[1.5]" }, " Followers ")
                            ])
                          ])
                        ])
                      ]),
                      createVNode(unref(yd), {
                        class: "fill-white",
                        size: "8"
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../components/demo/HoverCard/tailwind/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
