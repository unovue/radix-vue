import { defineComponent, ref, unref, withCtx, createTextVNode, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { bC as Qc, bD as ep, bE as np, bF as ap, bG as tp, bH as op } from "./index.faJ9MUPN.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const open = ref(false);
    const eventDateRef = ref(/* @__PURE__ */ new Date());
    const timerRef = ref(0);
    function oneWeekAway() {
      const now = /* @__PURE__ */ new Date();
      const inOneWeek = now.setDate(now.getDate() + 7);
      return new Date(inOneWeek);
    }
    function prettyDate(date) {
      return new Intl.DateTimeFormat("en-US", { dateStyle: "full", timeStyle: "short" }).format(date);
    }
    function handleClick() {
      open.value = false;
      window.clearTimeout(timerRef.value);
      timerRef.value = window.setTimeout(() => {
        eventDateRef.value = oneWeekAway();
        open.value = true;
      }, 100);
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Qc), _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button class="inline-flex items-center justify-center rounded font-medium text-[15px] px-[15px] leading-[35px] h-[35px] bg-white text-grass11 shadow-[0_2px_10px] shadow-blackA7 outline-none hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-black"${_scopeId}> Add to calendar </button>`);
            _push2(ssrRenderComponent(unref(ep), {
              open: open.value,
              "onUpdate:open": ($event) => open.value = $event,
              class: "bg-white rounded-md shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] p-[15px] grid [grid-template-areas:_'title_action'_'description_action'] grid-cols-[auto_max-content] gap-x-[15px] items-center data-[state=open]:animate-slideIn data-[state=closed]:animate-hide data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:translate-x-0 data-[swipe=cancel]:transition-[transform_200ms_ease-out] data-[swipe=end]:animate-swipeOut"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(np), { class: "[grid-area:_title] mb-[5px] font-medium text-slate12 text-[15px]" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Scheduled: Catch up `);
                      } else {
                        return [
                          createTextVNode(" Scheduled: Catch up ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(ap), { "as-child": "" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<time class="[grid-area:_description] m-0 text-slate11 text-[13px] leading-[1.3]"${ssrRenderAttr("dateTime", eventDateRef.value.toISOString())}${_scopeId3}>${ssrInterpolate(prettyDate(eventDateRef.value))}</time>`);
                      } else {
                        return [
                          createVNode("time", {
                            class: "[grid-area:_description] m-0 text-slate11 text-[13px] leading-[1.3]",
                            dateTime: eventDateRef.value.toISOString()
                          }, toDisplayString(prettyDate(eventDateRef.value)), 9, ["dateTime"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(tp), {
                    class: "[grid-area:_action]",
                    "as-child": "",
                    "alt-text": "Goto schedule to undo"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<button class="inline-flex items-center justify-center rounded font-medium text-xs px-[10px] leading-[25px] h-[25px] bg-green2 text-green11 shadow-[inset_0_0_0_1px] shadow-green7 hover:shadow-[inset_0_0_0_1px] hover:shadow-green8 focus:shadow-[0_0_0_2px] focus:shadow-green8"${_scopeId3}> Undo </button>`);
                      } else {
                        return [
                          createVNode("button", { class: "inline-flex items-center justify-center rounded font-medium text-xs px-[10px] leading-[25px] h-[25px] bg-green2 text-green11 shadow-[inset_0_0_0_1px] shadow-green7 hover:shadow-[inset_0_0_0_1px] hover:shadow-green8 focus:shadow-[0_0_0_2px] focus:shadow-green8" }, " Undo ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(np), { class: "[grid-area:_title] mb-[5px] font-medium text-slate12 text-[15px]" }, {
                      default: withCtx(() => [
                        createTextVNode(" Scheduled: Catch up ")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(ap), { "as-child": "" }, {
                      default: withCtx(() => [
                        createVNode("time", {
                          class: "[grid-area:_description] m-0 text-slate11 text-[13px] leading-[1.3]",
                          dateTime: eventDateRef.value.toISOString()
                        }, toDisplayString(prettyDate(eventDateRef.value)), 9, ["dateTime"])
                      ]),
                      _: 1
                    }),
                    createVNode(unref(tp), {
                      class: "[grid-area:_action]",
                      "as-child": "",
                      "alt-text": "Goto schedule to undo"
                    }, {
                      default: withCtx(() => [
                        createVNode("button", { class: "inline-flex items-center justify-center rounded font-medium text-xs px-[10px] leading-[25px] h-[25px] bg-green2 text-green11 shadow-[inset_0_0_0_1px] shadow-green7 hover:shadow-[inset_0_0_0_1px] hover:shadow-green8 focus:shadow-[0_0_0_2px] focus:shadow-green8" }, " Undo ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(op), { class: "[--viewport-padding:_25px] fixed bottom-0 right-0 flex flex-col p-[var(--viewport-padding)] gap-[10px] w-[390px] max-w-[100vw] m-0 list-none z-[2147483647] outline-none" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("button", {
                class: "inline-flex items-center justify-center rounded font-medium text-[15px] px-[15px] leading-[35px] h-[35px] bg-white text-grass11 shadow-[0_2px_10px] shadow-blackA7 outline-none hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-black",
                onClick: handleClick
              }, " Add to calendar "),
              createVNode(unref(ep), {
                open: open.value,
                "onUpdate:open": ($event) => open.value = $event,
                class: "bg-white rounded-md shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] p-[15px] grid [grid-template-areas:_'title_action'_'description_action'] grid-cols-[auto_max-content] gap-x-[15px] items-center data-[state=open]:animate-slideIn data-[state=closed]:animate-hide data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:translate-x-0 data-[swipe=cancel]:transition-[transform_200ms_ease-out] data-[swipe=end]:animate-swipeOut"
              }, {
                default: withCtx(() => [
                  createVNode(unref(np), { class: "[grid-area:_title] mb-[5px] font-medium text-slate12 text-[15px]" }, {
                    default: withCtx(() => [
                      createTextVNode(" Scheduled: Catch up ")
                    ]),
                    _: 1
                  }),
                  createVNode(unref(ap), { "as-child": "" }, {
                    default: withCtx(() => [
                      createVNode("time", {
                        class: "[grid-area:_description] m-0 text-slate11 text-[13px] leading-[1.3]",
                        dateTime: eventDateRef.value.toISOString()
                      }, toDisplayString(prettyDate(eventDateRef.value)), 9, ["dateTime"])
                    ]),
                    _: 1
                  }),
                  createVNode(unref(tp), {
                    class: "[grid-area:_action]",
                    "as-child": "",
                    "alt-text": "Goto schedule to undo"
                  }, {
                    default: withCtx(() => [
                      createVNode("button", { class: "inline-flex items-center justify-center rounded font-medium text-xs px-[10px] leading-[25px] h-[25px] bg-green2 text-green11 shadow-[inset_0_0_0_1px] shadow-green7 hover:shadow-[inset_0_0_0_1px] hover:shadow-green8 focus:shadow-[0_0_0_2px] focus:shadow-green8" }, " Undo ")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["open", "onUpdate:open"]),
              createVNode(unref(op), { class: "[--viewport-padding:_25px] fixed bottom-0 right-0 flex flex-col p-[var(--viewport-padding)] gap-[10px] w-[390px] max-w-[100vw] m-0 list-none z-[2147483647] outline-none" })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../components/demo/Toast/tailwind/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
