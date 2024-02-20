import { defineComponent, ref, unref, mergeProps, withCtx, openBlock, createBlock, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { H as Bs, K as Ss, L as Ds } from "./index.faJ9MUPN.js";
import { Icon } from "@iconify/vue";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const open = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Bs), mergeProps({
        open: open.value,
        "onUpdate:open": ($event) => open.value = $event,
        class: "w-[300px]"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div style="${ssrRenderStyle({ "display": "flex", "align-items": "center", "justify-content": "space-between" })}"${_scopeId}><span class="text-white text-[15px] leading-[25px]"${_scopeId}> @peduarte starred 3 repos </span>`);
            _push2(ssrRenderComponent(unref(Ss), { class: "cursor-default rounded-full h-[25px] w-[25px] inline-flex items-center justify-center text-grass11 shadow-[0_2px_10px] shadow-blackA7 outline-none data-[state=closed]:bg-white data-[state=open]:bg-green3 hover:bg-green3 focus:shadow-[0_0_0_2px] focus:shadow-black" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (open.value) {
                    _push3(ssrRenderComponent(unref(Icon), {
                      icon: "radix-icons:cross-2",
                      class: "h-3.5 w-3.5"
                    }, null, _parent3, _scopeId2));
                  } else {
                    _push3(ssrRenderComponent(unref(Icon), {
                      icon: "radix-icons:row-spacing",
                      class: "h-3.5 w-3.5"
                    }, null, _parent3, _scopeId2));
                  }
                } else {
                  return [
                    open.value ? (openBlock(), createBlock(unref(Icon), {
                      key: 0,
                      icon: "radix-icons:cross-2",
                      class: "h-3.5 w-3.5"
                    })) : (openBlock(), createBlock(unref(Icon), {
                      key: 1,
                      icon: "radix-icons:row-spacing",
                      class: "h-3.5 w-3.5"
                    }))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="bg-white rounded mt-[10px] p-[10px] shadow-[0_2px_10px] shadow-blackA7"${_scopeId}><span class="text-grass11 text-[15px] leading-[25px]"${_scopeId}>@radix-vue/radix-vue</span></div>`);
            _push2(ssrRenderComponent(unref(Ds), { class: "data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="bg-white rounded my-[10px] p-[10px] shadow-[0_2px_10px] shadow-blackA7"${_scopeId2}><span class="text-grass11 text-[15px] leading-[25px]"${_scopeId2}>@vuejs/core</span></div><div class="bg-white rounded my-[10px] p-[10px] shadow-[0_2px_10px] shadow-blackA7"${_scopeId2}><span class="text-grass11 text-[15px] leading-[25px]"${_scopeId2}>@radix-ui/primitives</span></div>`);
                } else {
                  return [
                    createVNode("div", { class: "bg-white rounded my-[10px] p-[10px] shadow-[0_2px_10px] shadow-blackA7" }, [
                      createVNode("span", { class: "text-grass11 text-[15px] leading-[25px]" }, "@vuejs/core")
                    ]),
                    createVNode("div", { class: "bg-white rounded my-[10px] p-[10px] shadow-[0_2px_10px] shadow-blackA7" }, [
                      createVNode("span", { class: "text-grass11 text-[15px] leading-[25px]" }, "@radix-ui/primitives")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { style: { "display": "flex", "align-items": "center", "justify-content": "space-between" } }, [
                createVNode("span", { class: "text-white text-[15px] leading-[25px]" }, " @peduarte starred 3 repos "),
                createVNode(unref(Ss), { class: "cursor-default rounded-full h-[25px] w-[25px] inline-flex items-center justify-center text-grass11 shadow-[0_2px_10px] shadow-blackA7 outline-none data-[state=closed]:bg-white data-[state=open]:bg-green3 hover:bg-green3 focus:shadow-[0_0_0_2px] focus:shadow-black" }, {
                  default: withCtx(() => [
                    open.value ? (openBlock(), createBlock(unref(Icon), {
                      key: 0,
                      icon: "radix-icons:cross-2",
                      class: "h-3.5 w-3.5"
                    })) : (openBlock(), createBlock(unref(Icon), {
                      key: 1,
                      icon: "radix-icons:row-spacing",
                      class: "h-3.5 w-3.5"
                    }))
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", { class: "bg-white rounded mt-[10px] p-[10px] shadow-[0_2px_10px] shadow-blackA7" }, [
                createVNode("span", { class: "text-grass11 text-[15px] leading-[25px]" }, "@radix-vue/radix-vue")
              ]),
              createVNode(unref(Ds), { class: "data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "bg-white rounded my-[10px] p-[10px] shadow-[0_2px_10px] shadow-blackA7" }, [
                    createVNode("span", { class: "text-grass11 text-[15px] leading-[25px]" }, "@vuejs/core")
                  ]),
                  createVNode("div", { class: "bg-white rounded my-[10px] p-[10px] shadow-[0_2px_10px] shadow-blackA7" }, [
                    createVNode("span", { class: "text-grass11 text-[15px] leading-[25px]" }, "@radix-ui/primitives")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../components/demo/Collapsible/tailwind/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
