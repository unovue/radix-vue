import { defineComponent, ref, unref, mergeProps, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { br as kc, bs as Fc, bt as Lc, bu as Vc } from "./index.faJ9MUPN.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const sliderValue = ref([50]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(kc), mergeProps({
        modelValue: sliderValue.value,
        "onUpdate:modelValue": ($event) => sliderValue.value = $event,
        class: "relative flex items-center select-none touch-none w-[200px] h-5",
        max: 100,
        step: 1
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Fc), { class: "bg-blackA10 relative grow rounded-full h-[3px]" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(Lc), { class: "absolute bg-white rounded-full h-full" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(Lc), { class: "absolute bg-white rounded-full h-full" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Vc), {
              class: "block w-5 h-5 bg-white shadow-[0_2px_10px] shadow-blackA7 rounded-[10px] hover:bg-violet3 focus:outline-none focus:shadow-[0_0_0_5px] focus:shadow-blackA8",
              "aria-label": "Volume"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Fc), { class: "bg-blackA10 relative grow rounded-full h-[3px]" }, {
                default: withCtx(() => [
                  createVNode(unref(Lc), { class: "absolute bg-white rounded-full h-full" })
                ]),
                _: 1
              }),
              createVNode(unref(Vc), {
                class: "block w-5 h-5 bg-white shadow-[0_2px_10px] shadow-blackA7 rounded-[10px] hover:bg-violet3 focus:outline-none focus:shadow-[0_0_0_5px] focus:shadow-blackA8",
                "aria-label": "Volume"
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../components/demo/Slider/tailwind/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
