import { defineComponent, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { as as bd } from "./index.faJ9MUPN.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-wrap items-center gap-[15px] px-5" }, _attrs))}>`);
      _push(ssrRenderComponent(unref(bd), {
        class: "text-[15px] font-semibold leading-[35px] text-white",
        for: "firstName"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` First name `);
          } else {
            return [
              createTextVNode(" First name ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<input id="firstName" class="bg-blackA5 shadow-blackA9 inline-flex h-[35px] w-[200px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-white shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA9" type="text" value="Pedro Duarte"></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../components/demo/Label/tailwind/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
