import { defineComponent, ref, unref, mergeProps, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { bK as Ai } from "./index.faJ9MUPN.js";
import { Icon } from "@iconify/vue";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const toggleState = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Ai), mergeProps({
        pressed: toggleState.value,
        "onUpdate:pressed": ($event) => toggleState.value = $event,
        "aria-label": "Toggle italic",
        class: "hover:bg-green3 text-mauve11 data-[state=on]:bg-green6 data-[state=on]:text-violet12 shadow-blackA7 flex h-[35px] w-[35px] items-center justify-center rounded bg-white text-base leading-4 shadow-[0_2px_10px] focus-within:shadow-[0_0_0_2px] focus-within:shadow-black"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Icon), {
              icon: "radix-icons:font-italic",
              class: "w-[15px] h-[15px]"
            }, null, _parent2, _scopeId));
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
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../components/demo/Toggle/tailwind/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
