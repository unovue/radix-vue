import { defineComponent, mergeProps, unref, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { y as mu } from "./index.faJ9MUPN.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "shadow-blackA7 w-full sm:w-[300px] overflow-hidden rounded-md shadow-[0_2px_10px]" }, _attrs))}>`);
      _push(ssrRenderComponent(unref(mu), { ratio: 16 / 9 }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img class="h-full w-full object-cover" src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&amp;dpr=2&amp;q=80" alt="Landscape photograph by Tobias Tullius"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                class: "h-full w-full object-cover",
                src: "https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80",
                alt: "Landscape photograph by Tobias Tullius"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../components/demo/AspectRatio/tailwind/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
