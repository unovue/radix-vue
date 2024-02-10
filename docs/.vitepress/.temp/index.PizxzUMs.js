import { defineComponent, ref, unref, mergeProps, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { b5 as cc, b6 as pc, b7 as fc } from "./index.faJ9MUPN.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const radioStateSingle = ref("default");
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(cc), mergeProps({
        modelValue: radioStateSingle.value,
        "onUpdate:modelValue": ($event) => radioStateSingle.value = $event,
        class: "flex flex-col gap-2.5",
        "default-value": "default",
        "aria-label": "View density"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(pc), {
              id: "r1",
              class: "bg-white w-[25px] h-[25px] rounded-full shadow-[0_2px_10px] shadow-blackA7 hover:bg-green3 focus:shadow-[0_0_0_2px] focus:shadow-black outline-none cursor-default",
              value: "default"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(fc), { class: "flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[11px] after:h-[11px] after:rounded-[50%] after:bg-grass11" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(fc), { class: "flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[11px] after:h-[11px] after:rounded-[50%] after:bg-grass11" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<label class="text-white text-[15px] leading-none pl-[15px]" for="r1"${_scopeId}> Default </label></div><div class="flex items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(pc), {
              id: "r2",
              class: "bg-white w-[25px] h-[25px] rounded-full shadow-[0_2px_10px] shadow-blackA7 hover:bg-green3 focus:shadow-[0_0_0_2px] focus:shadow-black outline-none cursor-default",
              value: "comfortable"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(fc), { class: "flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[11px] after:h-[11px] after:rounded-[50%] after:bg-grass11" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(fc), { class: "flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[11px] after:h-[11px] after:rounded-[50%] after:bg-grass11" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<label class="text-white text-[15px] leading-none pl-[15px]" for="r2"${_scopeId}> Comfortable </label></div><div class="flex items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(pc), {
              id: "r3",
              class: "bg-white w-[25px] h-[25px] rounded-full shadow-[0_2px_10px] shadow-blackA7 hover:bg-green3 focus:shadow-[0_0_0_2px] focus:shadow-black outline-none cursor-default",
              value: "compact"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(fc), { class: "flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[11px] after:h-[11px] after:rounded-[50%] after:bg-grass11" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(fc), { class: "flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[11px] after:h-[11px] after:rounded-[50%] after:bg-grass11" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<label class="text-white text-[15px] leading-none pl-[15px]" for="r3"${_scopeId}> Compact </label></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center" }, [
                createVNode(unref(pc), {
                  id: "r1",
                  class: "bg-white w-[25px] h-[25px] rounded-full shadow-[0_2px_10px] shadow-blackA7 hover:bg-green3 focus:shadow-[0_0_0_2px] focus:shadow-black outline-none cursor-default",
                  value: "default"
                }, {
                  default: withCtx(() => [
                    createVNode(unref(fc), { class: "flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[11px] after:h-[11px] after:rounded-[50%] after:bg-grass11" })
                  ]),
                  _: 1
                }),
                createVNode("label", {
                  class: "text-white text-[15px] leading-none pl-[15px]",
                  for: "r1"
                }, " Default ")
              ]),
              createVNode("div", { class: "flex items-center" }, [
                createVNode(unref(pc), {
                  id: "r2",
                  class: "bg-white w-[25px] h-[25px] rounded-full shadow-[0_2px_10px] shadow-blackA7 hover:bg-green3 focus:shadow-[0_0_0_2px] focus:shadow-black outline-none cursor-default",
                  value: "comfortable"
                }, {
                  default: withCtx(() => [
                    createVNode(unref(fc), { class: "flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[11px] after:h-[11px] after:rounded-[50%] after:bg-grass11" })
                  ]),
                  _: 1
                }),
                createVNode("label", {
                  class: "text-white text-[15px] leading-none pl-[15px]",
                  for: "r2"
                }, " Comfortable ")
              ]),
              createVNode("div", { class: "flex items-center" }, [
                createVNode(unref(pc), {
                  id: "r3",
                  class: "bg-white w-[25px] h-[25px] rounded-full shadow-[0_2px_10px] shadow-blackA7 hover:bg-green3 focus:shadow-[0_0_0_2px] focus:shadow-black outline-none cursor-default",
                  value: "compact"
                }, {
                  default: withCtx(() => [
                    createVNode(unref(fc), { class: "flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[11px] after:h-[11px] after:rounded-[50%] after:bg-grass11" })
                  ]),
                  _: 1
                }),
                createVNode("label", {
                  class: "text-white text-[15px] leading-none pl-[15px]",
                  for: "r3"
                }, " Compact ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../components/demo/RadioGroup/tailwind/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
