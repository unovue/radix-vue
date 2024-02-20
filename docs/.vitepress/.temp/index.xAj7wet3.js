import { defineComponent, ref, onMounted, unref, mergeProps, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { b3 as uc, b4 as dc } from "./index.faJ9MUPN.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const progressValue = ref(10);
    onMounted(() => {
      const timer = setTimeout(() => progressValue.value = 66, 500);
      return () => clearTimeout(timer);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(uc), mergeProps({
        modelValue: progressValue.value,
        "onUpdate:modelValue": ($event) => progressValue.value = $event,
        class: "relative overflow-hidden bg-blackA9 rounded-full w-full sm:w-[300px] h-4 sm:h-5",
        style: { "transform": "translateZ(0)" }
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(dc), {
              class: "bg-white rounded-full w-full h-full transition-transform duration-[660ms] ease-[cubic-bezier(0.65, 0, 0.35, 1)]",
              style: `transform: translateX(-${100 - progressValue.value}%)`
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(dc), {
                class: "bg-white rounded-full w-full h-full transition-transform duration-[660ms] ease-[cubic-bezier(0.65, 0, 0.35, 1)]",
                style: `transform: translateX(-${100 - progressValue.value}%)`
              }, null, 8, ["style"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../components/demo/Progress/tailwind/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
