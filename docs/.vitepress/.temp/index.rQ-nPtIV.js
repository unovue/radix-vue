import { defineComponent, ref, mergeProps, unref, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { E as bu, F as Cu } from "./index.faJ9MUPN.js";
import { Icon } from "@iconify/vue";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const checkboxOne = ref(true);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col gap-2.5" }, _attrs))}><label class="flex flex-row gap-4 items-center [&amp;&gt;.checkbox]:hover:bg-neutral-100">`);
      _push(ssrRenderComponent(unref(bu), {
        checked: checkboxOne.value,
        "onUpdate:checked": ($event) => checkboxOne.value = $event,
        class: "shadow-blackA7 hover:bg-green3 flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-[4px] bg-white shadow-[0_2px_10px] outline-none focus-within:shadow-[0_0_0_2px_black]"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Cu), { class: "bg-white h-full w-full rounded flex items-center justify-center" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(Icon), {
                    icon: "radix-icons:check",
                    class: "h-3.5 w-3.5 text-grass11"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(Icon), {
                      icon: "radix-icons:check",
                      class: "h-3.5 w-3.5 text-grass11"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Cu), { class: "bg-white h-full w-full rounded flex items-center justify-center" }, {
                default: withCtx(() => [
                  createVNode(unref(Icon), {
                    icon: "radix-icons:check",
                    class: "h-3.5 w-3.5 text-grass11"
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<span class="select-none text-white">Accept terms and conditions.</span></label></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../components/demo/Checkbox/tailwind/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
