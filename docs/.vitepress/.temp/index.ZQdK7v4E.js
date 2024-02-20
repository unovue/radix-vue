import { defineComponent, ref, unref, mergeProps, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { q as qc, Y as Yc, X as Xc, J as Jc, G as Gc } from "./index.faJ9MUPN.js";
import { Icon } from "@iconify/vue";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const modelValue = ref(["Apple", "Banana"]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(qc), mergeProps({
        modelValue: modelValue.value,
        "onUpdate:modelValue": ($event) => modelValue.value = $event,
        class: "flex gap-2 items-center border p-2 rounded-lg w-full max-w-[480px] flex-wrap border-blackA7 bg-white"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(modelValue.value, (item) => {
              _push2(ssrRenderComponent(unref(Yc), {
                key: item,
                value: item,
                class: "text-white flex shadow-md items-center justify-center gap-2 bg-green8 aria-[current=true]:bg-green9 rounded p-1"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(Xc), { class: "text-sm pl-1" }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(unref(Jc), { class: "p-0.5 rounded bg-transparent hover:bg-blackA4" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(Icon), { icon: "lucide:x" }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(unref(Icon), { icon: "lucide:x" })
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(Xc), { class: "text-sm pl-1" }),
                      createVNode(unref(Jc), { class: "p-0.5 rounded bg-transparent hover:bg-blackA4" }, {
                        default: withCtx(() => [
                          createVNode(unref(Icon), { icon: "lucide:x" })
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
            _push2(ssrRenderComponent(unref(Gc), {
              placeholder: "Fruits...",
              class: "text-sm focus:outline-none flex-1 rounded text-green9 bg-transparent placeholder:text-mauve9 px-1"
            }, null, _parent2, _scopeId));
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(modelValue.value, (item) => {
                return openBlock(), createBlock(unref(Yc), {
                  key: item,
                  value: item,
                  class: "text-white flex shadow-md items-center justify-center gap-2 bg-green8 aria-[current=true]:bg-green9 rounded p-1"
                }, {
                  default: withCtx(() => [
                    createVNode(unref(Xc), { class: "text-sm pl-1" }),
                    createVNode(unref(Jc), { class: "p-0.5 rounded bg-transparent hover:bg-blackA4" }, {
                      default: withCtx(() => [
                        createVNode(unref(Icon), { icon: "lucide:x" })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 2
                }, 1032, ["value"]);
              }), 128)),
              createVNode(unref(Gc), {
                placeholder: "Fruits...",
                class: "text-sm focus:outline-none flex-1 rounded text-green9 bg-transparent placeholder:text-mauve9 px-1"
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../components/demo/TagsInput/tailwind/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
