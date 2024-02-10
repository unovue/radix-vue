import { defineComponent, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { bq as Mc } from "./index.faJ9MUPN.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full max-w-[300px] mx-[15px]" }, _attrs))}><div class="text-white text-[15px] leading-5 font-semibold"> Radix Primitives </div><div class="text-white text-[15px] leading-5"> An open-source UI component library. </div>`);
      _push(ssrRenderComponent(unref(Mc), { class: "bg-[#d7cff9] data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px my-[15px]" }, null, _parent));
      _push(`<div class="flex h-5 items-center"><div class="text-white text-[15px] leading-5"> Blog </div>`);
      _push(ssrRenderComponent(unref(Mc), {
        class: "bg-[#d7cff9] data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px mx-[15px]",
        decorative: "",
        orientation: "vertical"
      }, null, _parent));
      _push(`<div class="text-white text-[15px] leading-5"> Docs </div>`);
      _push(ssrRenderComponent(unref(Mc), {
        class: "bg-[#d7cff9] data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px mx-[15px]",
        decorative: "",
        orientation: "vertical"
      }, null, _parent));
      _push(`<div class="text-white text-[15px] leading-5"> Source </div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../components/demo/Separator/tailwind/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
