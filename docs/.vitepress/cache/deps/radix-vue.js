import {
  Fragment,
  Teleport,
  computed,
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createVNode,
  customRef,
  defineComponent,
  effectScope,
  getCurrentInstance,
  getCurrentScope,
  guardReactiveProps,
  h,
  inject,
  mergeProps,
  nextTick,
  normalizeClass,
  normalizeProps,
  normalizeStyle,
  onMounted,
  onScopeDispose,
  onUnmounted,
  openBlock,
  provide,
  readonly,
  ref,
  renderSlot,
  resolveDynamicComponent,
  shallowReadonly,
  shallowRef,
  toRef,
  unref,
  watch,
  watchEffect,
  withCtx,
  withModifiers
} from "./chunk-OX6HOUGK.js";

// node_modules/.pnpm/radix-vue@0.0.1-rc-.8_vue@3.3.4/node_modules/radix-vue/dist/index.js
var De = (a, t) => {
  const e = a.__vccOpts || a;
  for (const [o, l] of t)
    e[o] = l;
  return e;
};
var ia = {};
function sa(a, t) {
  var e, o, l;
  return openBlock(), createBlock(resolveDynamicComponent(
    // @ts-ignore we can ignore this as we have validated the existence of 1 child in Primitive.vue
    (l = (o = (e = a.$slots).default) == null ? void 0 : o.call(e)[0].children) == null ? void 0 : l[0]
  ), normalizeProps(guardReactiveProps(a.$attrs)), null, 16);
}
var ua = De(ia, [["render", sa]]);
var da = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "span",
  "svg",
  "ul"
];
function yo(a) {
  return a ? a.flatMap((t) => t.type === Fragment ? yo(t.children) : [t]) : [];
}
var Z = da.reduce((a, t) => {
  const e = defineComponent({
    props: {
      asChild: Boolean
    },
    setup(o, { slots: l, attrs: n }) {
      var s, i;
      if (!!o.asChild) {
        const d = yo((s = l.default) == null ? void 0 : s.call(l)), c = getCurrentInstance();
        if (d.length > 1) {
          const m = (i = c == null ? void 0 : c.parent) != null && i.type.__name ? `<${c.parent.type.__name} />` : "component";
          throw new Error(
            [
              `Detected an invalid children for \`${m}\` with \`asChild\` prop.`,
              "",
              "Note: All components accepting `asChild` expect only one direct child of valid VNode type.",
              "You can apply a few solutions:",
              [
                "Provide a single child element so that we can forward the props onto that element.",
                "Ensure the first child is an actual element instead of a raw text node or comment node."
              ].map((f) => `  - ${f}`).join(`
`)
            ].join(`
`)
          );
        }
        return typeof d[0].type == "string" ? () => h(d[0]) : () => h(ua, () => {
          var m;
          return (m = l.default) == null ? void 0 : m.call(l);
        });
      } else
        return () => {
          var d;
          return h(t, (d = l.default) == null ? void 0 : d.call(l));
        };
    }
  });
  return { ...a, [t]: e };
}, {});
var ca = Object.defineProperty;
var pa = Object.defineProperties;
var fa = Object.getOwnPropertyDescriptors;
var Vt = Object.getOwnPropertySymbols;
var ma = Object.prototype.hasOwnProperty;
var va = Object.prototype.propertyIsEnumerable;
var jt = (a, t, e) => t in a ? ca(a, t, { enumerable: true, configurable: true, writable: true, value: e }) : a[t] = e;
var ha = (a, t) => {
  for (var e in t || (t = {}))
    ma.call(t, e) && jt(a, e, t[e]);
  if (Vt)
    for (var e of Vt(t))
      va.call(t, e) && jt(a, e, t[e]);
  return a;
};
var _a = (a, t) => pa(a, fa(t));
function ya(a, t) {
  var e;
  const o = shallowRef();
  return watchEffect(() => {
    o.value = a();
  }, _a(ha({}, t), {
    flush: (e = t == null ? void 0 : t.flush) != null ? e : "sync"
  })), readonly(o);
}
function ga(a, t) {
  let e, o, l;
  const n = ref(true), r = () => {
    n.value = true, l();
  };
  watch(a, r, { flush: "sync" });
  const s = typeof t == "function" ? t : t.get, i = typeof t == "function" ? void 0 : t.set, d = customRef((c, p) => (o = c, l = p, {
    get() {
      return n.value && (e = s(), n.value = false), o(), e;
    },
    set(m) {
      i == null || i(m);
    }
  }));
  return Object.isExtensible(d) && (d.trigger = r), d;
}
function go(a) {
  return getCurrentScope() ? (onScopeDispose(a), true) : false;
}
function ba(a) {
  let t = false, e;
  const o = effectScope(true);
  return (...l) => (t || (e = o.run(() => a(...l)), t = true), e);
}
function it(a) {
  return typeof a == "function" ? a() : unref(a);
}
var bo = typeof window < "u";
var wa = (a) => typeof a < "u";
var st = () => {
};
var Ea = Ca();
function Ca() {
  var a;
  return bo && ((a = window == null ? void 0 : window.navigator) == null ? void 0 : a.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
}
function xa(a, t) {
  function e(...o) {
    return new Promise((l, n) => {
      Promise.resolve(a(() => t.apply(this, o), { fn: t, thisArg: this, args: o })).then(l).catch(n);
    });
  }
  return e;
}
function $a(a, t = {}) {
  let e, o, l = st;
  const n = (s) => {
    clearTimeout(s), l(), l = st;
  };
  return (s) => {
    const i = it(a), d = it(t.maxWait);
    return e && n(e), i <= 0 || d !== void 0 && d <= 0 ? (o && (n(o), o = null), Promise.resolve(s())) : new Promise((c, p) => {
      l = t.rejectOnCancel ? p : c, d && !o && (o = setTimeout(() => {
        e && n(e), o = null, c(s());
      }, d)), e = setTimeout(() => {
        o && n(o), o = null, c(s());
      }, i);
    });
  };
}
function wo(a, t = 200, e = {}) {
  return xa(
    $a(t, e),
    a
  );
}
function Sa(a, t, e) {
  const o = watch(a, (...l) => (nextTick(() => o()), t(...l)), e);
}
function de(a) {
  var t;
  const e = it(a);
  return (t = e == null ? void 0 : e.$el) != null ? t : e;
}
var vt = bo ? window : void 0;
function Ue(...a) {
  let t, e, o, l;
  if (typeof a[0] == "string" || Array.isArray(a[0]) ? ([e, o, l] = a, t = vt) : [t, e, o, l] = a, !t)
    return st;
  Array.isArray(e) || (e = [e]), Array.isArray(o) || (o = [o]);
  const n = [], r = () => {
    n.forEach((c) => c()), n.length = 0;
  }, s = (c, p, m, f) => (c.addEventListener(p, m, f), () => c.removeEventListener(p, m, f)), i = watch(
    () => [de(t), it(l)],
    ([c, p]) => {
      r(), c && n.push(
        ...e.flatMap((m) => o.map((f) => s(c, m, f, p)))
      );
    },
    { immediate: true, flush: "post" }
  ), d = () => {
    i(), r();
  };
  return go(d), d;
}
var eo = false;
function xe(a, t, e = {}) {
  const { window: o = vt, ignore: l = [], capture: n = true, detectIframe: r = false } = e;
  if (!o)
    return;
  Ea && !eo && (eo = true, Array.from(o.document.body.children).forEach((m) => m.addEventListener("click", st)));
  let s = true;
  const i = (m) => l.some((f) => {
    if (typeof f == "string")
      return Array.from(o.document.querySelectorAll(f)).some((h2) => h2 === m.target || m.composedPath().includes(h2));
    {
      const h2 = de(f);
      return h2 && (m.target === h2 || m.composedPath().includes(h2));
    }
  }), c = [
    Ue(o, "click", (m) => {
      const f = de(a);
      if (!(!f || f === m.target || m.composedPath().includes(f))) {
        if (m.detail === 0 && (s = !i(m)), !s) {
          s = true;
          return;
        }
        t(m);
      }
    }, { passive: true, capture: n }),
    Ue(o, "pointerdown", (m) => {
      const f = de(a);
      f && (s = !m.composedPath().includes(f) && !i(m));
    }, { passive: true }),
    r && Ue(o, "blur", (m) => {
      setTimeout(() => {
        var f;
        const h2 = de(a);
        ((f = o.document.activeElement) == null ? void 0 : f.tagName) === "IFRAME" && !(h2 != null && h2.contains(o.document.activeElement)) && t(m);
      }, 0);
    })
  ].filter(Boolean);
  return () => c.forEach((m) => m());
}
function Eo(a = {}) {
  var t;
  const { window: e = vt } = a, o = (t = a.document) != null ? t : e == null ? void 0 : e.document, l = ga(
    () => null,
    () => o == null ? void 0 : o.activeElement
  );
  return e && (Ue(e, "blur", (n) => {
    n.relatedTarget === null && l.trigger();
  }, true), Ue(e, "focus", l.trigger, true)), l;
}
function ka() {
  const a = ref(false);
  return getCurrentInstance() && onMounted(() => {
    a.value = true;
  }), a;
}
function Aa(a) {
  const t = ka();
  return computed(() => (t.value, !!a()));
}
function Pa(a) {
  return JSON.parse(JSON.stringify(a));
}
var to = Object.getOwnPropertySymbols;
var Ta = Object.prototype.hasOwnProperty;
var Ba = Object.prototype.propertyIsEnumerable;
var Oa = (a, t) => {
  var e = {};
  for (var o in a)
    Ta.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && to)
    for (var o of to(a))
      t.indexOf(o) < 0 && Ba.call(a, o) && (e[o] = a[o]);
  return e;
};
function ut(a, t, e = {}) {
  const o = e, { window: l = vt } = o, n = Oa(o, ["window"]);
  let r;
  const s = Aa(() => l && "ResizeObserver" in l), i = () => {
    r && (r.disconnect(), r = void 0);
  }, d = computed(
    () => Array.isArray(a) ? a.map((m) => de(m)) : [de(a)]
  ), c = watch(
    d,
    (m) => {
      if (i(), s.value && l) {
        r = new ResizeObserver(t);
        for (const f of m)
          f && r.observe(f, n);
      }
    },
    { immediate: true, flush: "post", deep: true }
  ), p = () => {
    i(), c();
  };
  return go(p), {
    isSupported: s,
    stop: p
  };
}
function K(a, t, e, o = {}) {
  var l, n, r;
  const {
    clone: s = false,
    passive: i = false,
    eventName: d,
    deep: c = false,
    defaultValue: p,
    shouldEmit: m
  } = o, f = getCurrentInstance(), h2 = e || (f == null ? void 0 : f.emit) || ((l = f == null ? void 0 : f.$emit) == null ? void 0 : l.bind(f)) || ((r = (n = f == null ? void 0 : f.proxy) == null ? void 0 : n.$emit) == null ? void 0 : r.bind(f == null ? void 0 : f.proxy));
  let g = d;
  t || (t = "modelValue"), g = g || `update:${t.toString()}`;
  const E = (k) => s ? typeof s == "function" ? s(k) : Pa(k) : k, x = () => wa(a[t]) ? E(a[t]) : p, $ = (k) => {
    m ? m(k) && h2(g, k) : h2(g, k);
  };
  if (i) {
    const k = x(), O = ref(k);
    return watch(
      () => a[t],
      (D) => O.value = E(D)
    ), watch(
      O,
      (D) => {
        (D !== a[t] || c) && $(D);
      },
      { deep: c }
    ), O;
  } else
    return computed({
      get() {
        return x();
      },
      set(k) {
        $(k);
      }
    });
}
var B = () => {
  const a = ref(), t = computed(() => de(a));
  return {
    primitiveElement: a,
    currentElement: t
  };
};
var Ma = Z.a;
var X = Z.button;
var M = Z.div;
Z.form;
var Co = Z.h2;
var Da = Z.h3;
var Ra = Z.img;
Z.input;
var je = Z.label;
Z.li;
Z.nav;
Z.ol;
var xo = Z.p;
var te = Z.span;
var La = Z.svg;
Z.ul;
var Ot = Symbol();
var Na = defineComponent({
  __name: "CollapsibleRoot",
  props: {
    asChild: { type: Boolean, default: false },
    defaultOpen: { type: Boolean, default: false },
    open: { type: Boolean, default: void 0 },
    onOpenChange: {},
    disabled: { type: Boolean }
  },
  emits: ["update:open"],
  setup(a, { emit: t }) {
    const e = a, o = K(e, "open", t, {
      defaultValue: e.defaultOpen,
      passive: true
    }), l = K(e, "disabled");
    return provide(Ot, {
      contentId: "1",
      disabled: l,
      open: o,
      onOpenToggle: () => {
        o.value = !o.value;
      }
    }), (n, r) => (openBlock(), createBlock(unref(M), {
      "data-state": e.open ? "open" : "closed",
      "data-disabled": e.disabled ? "true" : void 0
    }, {
      default: withCtx(() => [
        renderSlot(n.$slots, "default", { open: unref(o) })
      ]),
      _: 3
    }, 8, ["data-state", "data-disabled"]));
  }
});
var Ia = defineComponent({
  __name: "CollapsibleTrigger",
  setup(a) {
    const t = inject(
      Ot
    );
    return (e, o) => {
      var l, n, r, s, i, d, c, p;
      return openBlock(), createBlock(unref(X), {
        type: "button",
        "aria-controls": (l = unref(t)) == null ? void 0 : l.contentId,
        "aria-expanded": ((n = unref(t)) == null ? void 0 : n.open.value) || false,
        "data-state": (r = unref(t)) != null && r.open.value ? "open" : "closed",
        "data-disabled": (i = (s = unref(t)) == null ? void 0 : s.disabled) != null && i.value ? "true" : void 0,
        disabled: (c = (d = unref(t)) == null ? void 0 : d.disabled) == null ? void 0 : c.value,
        onClick: (p = unref(t)) == null ? void 0 : p.onOpenToggle
      }, {
        default: withCtx(() => [
          renderSlot(e.$slots, "default")
        ]),
        _: 3
      }, 8, ["aria-controls", "aria-expanded", "data-state", "data-disabled", "disabled", "onClick"]);
    };
  }
});
var Ka = defineComponent({
  __name: "CollapsibleContent",
  setup(a) {
    const t = inject(
      Ot
    ), { primitiveElement: e, currentElement: o } = B(), l = ref(0), n = ref(0), r = ref(), s = ref(t == null ? void 0 : t.open.value), i = ref(false), d = ref(false);
    return watch(
      () => [t == null ? void 0 : t.open.value, o.value],
      async () => {
        t != null && t.open.value ? i.value = true : d.value || (i.value = false), await nextTick();
        const c = o.value;
        if (!c)
          return;
        r.value = r.value || {
          transitionDuration: c.style.transitionDuration,
          animationName: c.style.animationName
        }, c.style.transitionDuration = "0s", c.style.animationName = "none";
        const p = c.getBoundingClientRect();
        n.value = p.height, l.value = p.width, s.value || (c.style.transitionDuration = r.value.transitionDuration, c.style.animationName = r.value.animationName);
      },
      {
        immediate: true
      }
    ), onMounted(() => {
      var p;
      const c = getComputedStyle(o.value);
      (c == null ? void 0 : c.animationName) !== "none" && (d.value = true, (p = o.value) == null || p.addEventListener("animationend", () => {
        t != null && t.open.value || (i.value = false);
      })), requestAnimationFrame(() => {
        s.value = false;
      });
    }), (c, p) => {
      var m, f, h2, g;
      return openBlock(), createBlock(unref(M), {
        ref_key: "primitiveElement",
        ref: e,
        "data-state": (m = unref(t)) != null && m.open.value ? "open" : "closed",
        "data-disabled": (h2 = (f = unref(t)) == null ? void 0 : f.disabled) != null && h2.value ? "true" : void 0,
        id: (g = unref(t)) == null ? void 0 : g.contentId,
        hidden: !i.value,
        style: normalizeStyle({
          ["--radix-collapsible-content-height"]: `${n.value}px`,
          ["--radix-collapsible-content-width"]: `${l.value}px`
        })
      }, {
        default: withCtx(() => [
          i.value ? renderSlot(c.$slots, "default", { key: 0 }) : createCommentVNode("", true)
        ]),
        _: 3
      }, 8, ["data-state", "data-disabled", "id", "hidden", "style"]);
    };
  }
});
var Mt = Symbol();
var Dt = Symbol();
var et = Symbol();
var $o = defineComponent({
  __name: "AccordionImpl",
  props: {
    disabled: { type: Boolean },
    orientation: { default: "vertical" },
    dir: {}
  },
  setup(a) {
    const t = a, { primitiveElement: e, currentElement: o } = B();
    return provide(et, {
      disabled: t.disabled,
      direction: t.dir,
      orientation: t.orientation,
      parentElement: o
    }), (l, n) => (openBlock(), createBlock(unref(M), {
      ref_key: "primitiveElement",
      ref: e
    }, {
      default: withCtx(() => [
        renderSlot(l.$slots, "default")
      ]),
      _: 3
    }, 512));
  }
});
var ht = Symbol();
var Ha = [
  "Home",
  "End",
  "ArrowDown",
  "ArrowUp",
  "ArrowLeft",
  "ArrowRight"
];
var el = defineComponent({
  __name: "AccordionItem",
  props: {
    disabled: { type: Boolean },
    value: {},
    asChild: { type: Boolean }
  },
  setup(a) {
    const t = a, e = inject(
      et
    ), o = inject(
      Mt
    ), l = computed({
      get: () => t.value && (o == null ? void 0 : o.modelValue.value.includes(t.value)) || false,
      set: (i) => {
        i ? o == null || o.onItemOpen(t.value) : o == null || o.onItemClose(t.value);
      }
    }), n = computed(
      () => (e == null ? void 0 : e.disabled) || t.disabled
    );
    provide(ht, {
      open: l.value,
      disabled: n.value,
      triggerId: "1"
      // TODO
    });
    function r() {
      const i = e == null ? void 0 : e.parentElement.value;
      return i ? Array.from(
        i.querySelectorAll("[data-radix-vue-collection-item]")
      ) : [];
    }
    const s = (i) => {
      if (!Ha.includes(i.key))
        return;
      const d = (e == null ? void 0 : e.direction) === "ltr", c = i.target, p = r().filter(
        // (item) => !item.ref.current?.disabled
        // (item) => !item.disabled
        (O) => O
      ), m = p.findIndex(
        // (item) => item.ref.current === target
        (O) => O === c
      ), f = p.length;
      if (m === -1)
        return;
      i.preventDefault();
      let h2 = m;
      const g = 0, E = f - 1, x = () => {
        h2 = m + 1, h2 > E && (h2 = g);
      }, $ = () => {
        h2 = m - 1, h2 < g && (h2 = E);
      };
      switch (i.key) {
        case "Home":
          h2 = g;
          break;
        case "End":
          h2 = E;
          break;
        case "ArrowRight":
          (e == null ? void 0 : e.orientation) === "horizontal" && (d ? x() : $());
          break;
        case "ArrowDown":
          (e == null ? void 0 : e.orientation) === "vertical" && x();
          break;
        case "ArrowLeft":
          (e == null ? void 0 : e.orientation) === "horizontal" && (d ? $() : x());
          break;
        case "ArrowUp":
          (e == null ? void 0 : e.orientation) === "vertical" && $();
          break;
      }
      const k = h2 % f;
      p[k].focus();
    };
    return (i, d) => {
      var c;
      return openBlock(), createBlock(unref(Na), {
        "data-orientation": (c = unref(e)) == null ? void 0 : c.orientation,
        "data-state": l.value ? "open" : "closed",
        disabled: n.value,
        open: l.value,
        "onUpdate:open": d[0] || (d[0] = (p) => l.value = p),
        onKeydown: s
      }, {
        default: withCtx(() => [
          renderSlot(i.$slots, "default")
        ]),
        _: 3
      }, 8, ["data-orientation", "data-state", "disabled", "open"]);
    };
  }
});
var tl = defineComponent({
  __name: "AccordionContent",
  setup(a) {
    const t = inject(
      et
    ), e = inject(
      ht
    );
    return (o, l) => {
      var n, r;
      return openBlock(), createBlock(unref(Ka), {
        role: "region",
        "aria-labelledby": (n = unref(e)) == null ? void 0 : n.triggerId,
        "data-orientation": (r = unref(t)) == null ? void 0 : r.orientation,
        style: normalizeStyle({
          ["--radix-accordion-content-height"]: "var(--radix-collapsible-content-height)",
          ["--radix-accordion-content-width"]: "var(--radix-collapsible-content-width)"
        })
      }, {
        default: withCtx(() => [
          renderSlot(o.$slots, "default")
        ]),
        _: 3
      }, 8, ["aria-labelledby", "data-orientation", "style"]);
    };
  }
});
var ol = defineComponent({
  __name: "AccordionHeader",
  setup(a) {
    const t = inject(
      et
    ), e = inject(
      ht
    );
    return (o, l) => {
      var n, r, s;
      return openBlock(), createBlock(unref(Da), {
        "data-orientation": (n = unref(t)) == null ? void 0 : n.orientation,
        "data-state": (r = unref(e)) != null && r.open ? "open" : "closed",
        "data-disabled": (s = unref(e)) != null && s.disabled ? "" : void 0
      }, {
        default: withCtx(() => [
          renderSlot(o.$slots, "default")
        ]),
        _: 3
      }, 8, ["data-orientation", "data-state", "data-disabled"]);
    };
  }
});
var za = defineComponent({
  __name: "AccordionImplMultiple",
  props: {
    type: {},
    modelValue: {},
    defaultValue: { default: [] },
    onValueChange: {},
    disabled: { type: Boolean },
    orientation: {},
    dir: {}
  },
  emits: ["update:modelValue"],
  setup(a, { emit: t }) {
    const e = a, o = K(e, "modelValue", t, {
      defaultValue: e.defaultValue,
      passive: true
    });
    return provide(Mt, {
      modelValue: o,
      onItemOpen: (r) => {
        o.value = [...o.value, r];
      },
      onItemClose: (r) => {
        o.value = [...o.value].filter(
          (s) => s !== r
        );
      }
    }), provide(Dt, {
      collapsible: false
    }), (r, s) => (openBlock(), createBlock($o, normalizeProps(guardReactiveProps(e)), {
      default: withCtx(() => [
        renderSlot(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Ya = defineComponent({
  __name: "AccordionImplSingle",
  props: {
    type: {},
    modelValue: {},
    defaultValue: {},
    onValueChange: { type: Function, default: () => {
    } },
    collapsible: { type: Boolean, default: false },
    disabled: { type: Boolean },
    orientation: {},
    dir: {}
  },
  emits: ["update:modelValue"],
  setup(a, { emit: t }) {
    const e = a, o = K(e, "modelValue", t, {
      defaultValue: e.defaultValue ?? "",
      passive: true
    });
    return provide(Mt, {
      modelValue: o,
      onItemOpen: (l) => {
        o.value = l;
      },
      onItemClose: (l) => {
        e.collapsible && (o.value = "");
      }
    }), provide(Dt, {
      collapsible: e.collapsible
    }), (l, n) => (openBlock(), createBlock($o, normalizeProps(guardReactiveProps(e)), {
      default: withCtx(() => [
        renderSlot(l.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var al = defineComponent({
  __name: "AccordionRoot",
  props: {
    type: {},
    modelValue: {},
    defaultValue: {},
    onValueChange: { type: Function },
    collapsible: { type: Boolean },
    disabled: { type: Boolean },
    orientation: {},
    dir: {}
  },
  emits: ["update:modelValue"],
  setup(a, { emit: t }) {
    const e = a;
    return (o, l) => e.type === "multiple" ? (openBlock(), createBlock(za, mergeProps({ key: 0 }, e, {
      "onUpdate:modelValue": l[0] || (l[0] = (n) => t("update:modelValue", n))
    }), {
      default: withCtx(() => [
        renderSlot(o.$slots, "default")
      ]),
      _: 3
    }, 16)) : (openBlock(), createBlock(Ya, mergeProps({ key: 1 }, e, {
      "onUpdate:modelValue": l[1] || (l[1] = (n) => t("update:modelValue", n))
    }), {
      default: withCtx(() => [
        renderSlot(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var nl = defineComponent({
  __name: "AccordionTrigger",
  setup(a) {
    const t = inject(
      et
    ), e = inject(
      ht
    ), o = inject(Dt);
    return (l, n) => {
      var r, s, i, d;
      return openBlock(), createBlock(unref(Ia), {
        "data-radix-vue-collection-item": "",
        "aria-disabled": ((r = unref(e)) == null ? void 0 : r.open) && !((s = unref(o)) != null && s.collapsible) || void 0,
        "data-orientation": (i = unref(t)) == null ? void 0 : i.orientation,
        id: (d = unref(e)) == null ? void 0 : d.triggerId
      }, {
        default: withCtx(() => [
          renderSlot(l.$slots, "default")
        ]),
        _: 3
      }, 8, ["aria-disabled", "data-orientation", "id"]);
    };
  }
});
var Wa = ["id", "checked", "name", "disabled", "required", "data-state"];
var So = Symbol();
var ll = defineComponent({
  __name: "CheckboxRoot",
  props: {
    asChild: { type: Boolean, default: false },
    defaultChecked: { type: Boolean },
    checked: { type: Boolean },
    onCheckedChange: {},
    modelValue: { type: Boolean, default: false },
    disabled: { type: Boolean },
    required: { type: Boolean },
    name: {},
    value: { default: "on" },
    id: {}
  },
  emits: ["update:modelValue"],
  setup(a, { emit: t }) {
    const e = a;
    provide(So, {
      required: e.required,
      disabled: e.disabled,
      modelValue: toRef(() => e.modelValue)
    });
    function o() {
      return t("update:modelValue", !e.modelValue);
    }
    let l;
    return (n, r) => (openBlock(), createBlock(unref(M), {
      asChild: e.asChild,
      value: e.value,
      role: "checkbox",
      "aria-checked": e.modelValue,
      "data-state": unref(l),
      style: { position: "relative" },
      "data-disabled": e.disabled ? "" : void 0
    }, {
      default: withCtx(() => [
        createBaseVNode("input", mergeProps({
          type: "checkbox",
          id: e.id
        }, e.modelValue, {
          onChange: o,
          checked: e.modelValue,
          name: e.name,
          "aria-hidden": "true",
          disabled: e.disabled,
          required: e.required,
          "data-state": unref(l),
          style: { opacity: "0", position: "absolute", inset: "0" }
        }), null, 16, Wa),
        renderSlot(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["asChild", "value", "aria-checked", "data-state", "data-disabled"]));
  }
});
var rl = defineComponent({
  __name: "CheckboxIndicator",
  props: {
    asChild: { type: Boolean, default: false },
    forceMount: { type: Boolean }
  },
  setup(a) {
    const t = a, e = inject(So);
    return (o, l) => {
      var n;
      return (n = unref(e)) != null && n.modelValue.value ? (openBlock(), createBlock(unref(te), {
        key: 0,
        asChild: t.asChild,
        style: { "pointer-events": "none" },
        "data-disabled": unref(e).disabled ? "" : void 0,
        "data-state": unref(e).modelValue.value ? "checked" : "unchecked"
      }, {
        default: withCtx(() => [
          renderSlot(o.$slots, "default")
        ]),
        _: 3
      }, 8, ["asChild", "data-disabled", "data-state"])) : createCommentVNode("", true);
    };
  }
});
var Ua = ["id", "checked", "name", "disabled", "required", "data-state", "data-disabled"];
var ko = Symbol();
var il = defineComponent({
  __name: "SwitchRoot",
  props: {
    asChild: { type: Boolean, default: false },
    defaultChecked: { type: Boolean },
    checked: { type: Boolean },
    disabled: { type: Boolean, default: false },
    required: { type: Boolean },
    name: {},
    id: {},
    defaultOpen: { type: Boolean, default: false },
    open: { type: Boolean, default: void 0 }
  },
  emits: ["update:open"],
  setup(a, { emit: t }) {
    const e = a, o = K(e, "open", t, {
      defaultValue: e.defaultOpen,
      passive: true
      // set passive to true so that if no props.modelValue was passed, it will still update
    }), l = () => {
      o.value = !o.value;
    };
    provide(ko, {
      open: o,
      toggleOpen: l,
      disabled: e.disabled
    });
    function n(r) {
      r.key === "Enter" && l();
    }
    return (r, s) => (openBlock(), createBlock(unref(M), {
      value: unref(o),
      role: "checkbox",
      "aria-checked": unref(o),
      "data-state": unref(o) ? "checked" : "unchecked",
      "data-disabled": e.disabled ? "" : void 0,
      style: { position: "relative" }
    }, {
      default: withCtx(() => [
        createBaseVNode("input", mergeProps({
          type: "checkbox",
          id: e.id
        }, unref(o), {
          onChange: l,
          checked: unref(o),
          name: e.name,
          onKeydown: n,
          "aria-hidden": "true",
          disabled: e.disabled,
          required: e.required,
          "data-state": unref(o) ? "checked" : "unchecked",
          "data-disabled": e.disabled ? "" : void 0,
          style: { opacity: "0", position: "absolute", inset: "0" }
        }), null, 16, Ua),
        renderSlot(r.$slots, "default")
      ]),
      _: 3
    }, 8, ["value", "aria-checked", "data-state", "data-disabled"]));
  }
});
var sl = defineComponent({
  __name: "SwitchThumb",
  setup(a) {
    const t = inject(ko);
    return (e, o) => {
      var l, n, r, s;
      return openBlock(), createBlock(unref(te), {
        "data-state": (n = (l = unref(t)) == null ? void 0 : l.open) != null && n.value ? "checked" : "unchecked",
        "data-disabled": (r = unref(t)) != null && r.disabled ? "" : void 0,
        onClick: (s = unref(t)) == null ? void 0 : s.toggleOpen
      }, {
        default: withCtx(() => [
          renderSlot(e.$slots, "default")
        ]),
        _: 3
      }, 8, ["data-state", "data-disabled", "onClick"]);
    };
  }
});
var ze = defineComponent({
  __name: "BaseSeparator",
  props: {
    orientation: { default: "horizontal" },
    decorative: { type: Boolean }
  },
  setup(a) {
    const t = a;
    return (e, o) => (openBlock(), createBlock(unref(M), {
      "data-orientation": t.orientation,
      role: `${e.decorative ? "none" : "separator"}`
    }, null, 8, ["data-orientation", "role"]));
  }
});
var ul = defineComponent({
  __name: "Separator",
  props: {
    asChild: { type: Boolean, default: false },
    orientation: { default: "horizontal" },
    decorative: { type: Boolean }
  },
  setup(a) {
    const t = a;
    return (e, o) => (openBlock(), createBlock(ze, {
      orientation: t.orientation,
      decorative: t.decorative,
      "data-orientation": t.orientation
    }, null, 8, ["orientation", "decorative", "data-orientation"]));
  }
});
var dl = defineComponent({
  __name: "Label",
  props: {
    for: {
      type: String,
      required: false
    }
  },
  setup(a) {
    const t = a;
    return (e, o) => (openBlock(), createBlock(unref(je), {
      for: t.for
    }, {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["for"]));
  }
});
var Ga = ["id", "checked", "name", "disabled", "data-state", "data-disabled"];
var cl = defineComponent({
  __name: "Toggle",
  props: {
    asChild: { type: Boolean, default: false },
    defaultPressed: { type: Boolean, default: false },
    pressed: { type: Boolean, default: void 0 },
    disabled: { type: Boolean, default: false },
    name: {},
    id: {}
  },
  emits: ["update:pressed"],
  setup(a, { emit: t }) {
    const e = a, o = K(e, "pressed", t, {
      defaultValue: e.defaultPressed,
      passive: true
      // set passive to true so that if no props.pressed was passed, it will still update
    }), l = () => {
      o.value = !o.value;
    }, n = computed(() => o.value ? "on" : "off");
    function r(s) {
      s.key === "Enter" && l();
    }
    return (s, i) => (openBlock(), createBlock(unref(M), {
      value: unref(o),
      role: "checkbox",
      "aria-checked": unref(o),
      "data-state": n.value,
      "data-disabled": e.disabled,
      style: { position: "relative" }
    }, {
      default: withCtx(() => [
        createBaseVNode("input", mergeProps({
          type: "checkbox",
          id: e.id,
          onKeydown: r
        }, unref(o), {
          onChange: l,
          checked: unref(o),
          name: e.name,
          "aria-hidden": "true",
          disabled: e.disabled,
          "data-state": n.value,
          "data-disabled": e.disabled,
          style: { opacity: "0", position: "absolute", inset: "0" }
        }), null, 16, Ga),
        renderSlot(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["value", "aria-checked", "data-state", "data-disabled"]));
  }
});
var Ao = Symbol();
var pl = defineComponent({
  __name: "ToggleGroupRoot",
  props: {
    asChild: { type: Boolean },
    type: { default: "single" },
    value: {},
    defaultValue: {},
    disabled: { type: Boolean },
    rovingFocus: { type: Boolean },
    orientation: {},
    dir: {},
    loop: { type: Boolean },
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(a, { emit: t }) {
    const e = a, { primitiveElement: o, currentElement: l } = B(), n = ref();
    provide(Ao, {
      type: e.type,
      modelValue: toRef(() => e.modelValue),
      changeModelValue: r,
      parentElement: l,
      activeValue: n,
      orientation: e.orientation
    });
    function r(s) {
      if (e.type === "single")
        t("update:modelValue", s);
      else {
        let i = e.modelValue;
        if (i.includes(s)) {
          let d = i.findIndex((c) => c === s);
          i.splice(d, 1);
        } else
          i.push(s);
        t("update:modelValue", i);
      }
    }
    return (s, i) => (openBlock(), createBlock(unref(M), {
      ref_key: "primitiveElement",
      ref: o,
      role: "group",
      dir: e.dir,
      "aria-label": "Text alignment",
      "data-orientation": e.orientation
    }, {
      default: withCtx(() => [
        renderSlot(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["dir", "data-orientation"]));
  }
});
function ne(a, t, e, o = {}) {
  const l = "data-radix-vue-collection-item", n = (o == null ? void 0 : o.attributeName) ?? l;
  let r = [];
  if (!e && o.itemsArray && o.itemsArray.length ? r = o.itemsArray : e && (r = Array.from(
    e.querySelectorAll(`[${n}]`)
  )), r.length) {
    const s = r.indexOf(t);
    let i = null, d = ["ArrowRight", "ArrowDown"], c = ["ArrowLeft", "ArrowUp"];
    return (o == null ? void 0 : o.arrowKeyOptions) === "horizontal" ? (d = ["ArrowRight"], c = ["ArrowLeft"]) : (o == null ? void 0 : o.arrowKeyOptions) === "vertical" && (d = ["ArrowDown"], c = ["ArrowUp"]), d.includes(a.key) && (a.preventDefault(), r[s + 1] ? i = r[s + 1] : i = r[0]), c.includes(a.key) && (a.preventDefault(), r[s - 1] ? i = r[s - 1] : i = r[r.length - 1]), i;
  }
  return null;
}
async function Po(a, t, e = 500) {
  let o = true, l, n;
  const r = new Promise((d) => {
    n = d, l = setTimeout(() => {
      i(), d(o);
    }, e);
  });
  function s() {
    o = false, i(), clearTimeout(l), l = void 0, n(false);
  }
  function i() {
    t.removeEventListener("mouseleave", s);
  }
  return t.addEventListener("mouseleave", s), r;
}
var To = (a, t = 300) => {
  let e = true, o, l;
  const n = a.target, r = new Promise((d) => {
    l = d, o = setTimeout(() => {
      i(), d(e);
    }, t);
  });
  function s() {
    e = false, i(), clearTimeout(o), o = void 0, l(false);
  }
  function i() {
    n.removeEventListener("mouseenter", s);
  }
  return n.addEventListener("mouseenter", s), r;
};
function Xa(a, t) {
  const e = ref(a);
  function o(n) {
    return t[e.value][n] ?? e.value;
  }
  return {
    state: e,
    dispatch: (n) => {
      e.value = o(n);
    }
  };
}
var qa = "data-radix-vue-collection-item";
var oo = Symbol();
var $e = () => {
  const a = (l) => {
    provide(oo, {
      collectionRef: l
    });
  }, t = inject(oo);
  return { createCollection: a, setCollection: (l) => {
    t && (t.collectionRef = l);
  }, getItems: (l) => {
    const n = l ?? de(t == null ? void 0 : t.collectionRef);
    return n ? Array.from(
      n.querySelectorAll(
        `[${qa}]:not([data-disabled])`
      )
    ) : [];
  } };
};
var Ja = (a) => {
  const t = ref(), e = computed(() => {
    var l;
    return ((l = t.value) == null ? void 0 : l.width) ?? 0;
  }), o = computed(() => {
    var l;
    return ((l = t.value) == null ? void 0 : l.height) ?? 0;
  });
  return onMounted(() => {
    const l = de(a);
    if (l) {
      t.value = { width: l.offsetWidth, height: l.offsetHeight };
      const n = new ResizeObserver((r) => {
        if (!Array.isArray(r) || !r.length)
          return;
        const s = r[0];
        let i, d;
        if ("borderBoxSize" in s) {
          const c = s.borderBoxSize, p = Array.isArray(c) ? c[0] : c;
          i = p.inlineSize, d = p.blockSize;
        } else
          i = l.offsetWidth, d = l.offsetHeight;
        t.value = { width: i, height: d };
      });
      return n.observe(l, { box: "border-box" }), () => n.unobserve(l);
    } else
      t.value = void 0;
  }), {
    width: e,
    height: o
  };
};
var Za = ba(() => ({ count: ref(0) }));
var be = (a) => {
  const { count: t } = Za();
  return a || t.value++, a || `radix-${t.value}`;
};
function Rt(a) {
  if (a) {
    const t = [
      ...Array.from(
        a.querySelectorAll(
          'a[href], button, input, textarea, select, details,[tabindex]:not([tabindex="-1"])'
        )
      )
    ].filter(
      (n) => !n.hasAttribute("disabled") && !n.getAttribute("aria-hidden")
    ), e = t[0], o = t[t.length - 1], l = 9;
    return e && e.focus(), a.addEventListener("keydown", function(n) {
      (n.key === "Tab" || n.keyCode === l) && (n.shiftKey ? document.activeElement === e && (o.focus(), n.preventDefault()) : document.activeElement === o && (e.focus(), n.preventDefault()));
    }), e;
  }
}
var fl = defineComponent({
  __name: "ToggleGroupItem",
  props: {
    asChild: { type: Boolean, default: false },
    value: {},
    disabled: { type: Boolean }
  },
  setup(a) {
    const t = a, e = inject(
      Ao
    ), { primitiveElement: o, currentElement: l } = B(), n = computed(() => {
      var s, i, d;
      return (e == null ? void 0 : e.type) === "multiple" ? (i = (s = e == null ? void 0 : e.modelValue) == null ? void 0 : s.value) != null && i.includes(t.value) ? "on" : "off" : ((d = e == null ? void 0 : e.modelValue) == null ? void 0 : d.value) === t.value ? "on" : "off";
    });
    function r(s) {
      const i = ne(
        s,
        l.value,
        e == null ? void 0 : e.parentElement.value
      );
      i == null || i.focus();
    }
    return (s, i) => {
      var d;
      return openBlock(), createBlock(unref(X), {
        type: "button",
        "data-state": n.value,
        "data-disabled": t.disabled,
        "data-orientation": (d = unref(e)) == null ? void 0 : d.orientation,
        onClick: i[0] || (i[0] = (c) => {
          var p;
          return (p = unref(e)) == null ? void 0 : p.changeModelValue(t.value);
        }),
        ref_key: "primitiveElement",
        ref: o,
        onKeydown: r,
        "data-radix-vue-collection-item": ""
      }, {
        default: withCtx(() => [
          renderSlot(s.$slots, "default")
        ]),
        _: 3
      }, 8, ["data-state", "data-disabled", "data-orientation"]);
    };
  }
});
var ml = defineComponent({
  __name: "AspectRatio",
  props: {
    asChild: { type: Boolean },
    ratio: { default: 1 }
  },
  setup(a) {
    const t = a, e = computed(() => 1 / t.ratio * 100);
    return (o, l) => (openBlock(), createElementBlock("div", {
      style: normalizeStyle(`position: relative; width: 100%; padding-bottom: ${e.value}%`)
    }, [
      createVNode(unref(M), {
        asChild: o.asChild,
        style: { position: "absolute", inset: "0px" }
      }, {
        default: withCtx(() => [
          renderSlot(o.$slots, "default")
        ]),
        _: 3
      }, 8, ["asChild"])
    ], 4));
  }
});
var _t = Symbol();
var vl = defineComponent({
  __name: "TabsRoot",
  props: {
    asChild: { type: Boolean, default: false },
    defaultValue: {},
    orientation: { default: "horizontal" },
    dir: { default: "ltr" },
    activationMode: { default: "automatic" },
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(a, { emit: t }) {
    const e = a, o = ref(), l = K(e, "modelValue", t, {
      defaultValue: e.defaultValue,
      passive: true
    });
    return provide(_t, {
      modelValue: l,
      changeModelValue: (n) => {
        l.value = n;
      },
      parentElement: o,
      orientation: e.orientation,
      dir: e.dir
    }), (n, r) => (openBlock(), createBlock(unref(M), {
      dir: e.dir,
      "data-orientation": e.orientation
    }, {
      default: withCtx(() => [
        renderSlot(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["dir", "data-orientation"]));
  }
});
var hl = defineComponent({
  __name: "TabsList",
  props: {
    asChild: { type: Boolean, default: false },
    loop: { type: Boolean, default: true }
  },
  setup(a) {
    const t = inject(_t), { primitiveElement: e, currentElement: o } = B();
    return onMounted(() => {
      t.parentElement.value = o.value;
    }), (l, n) => {
      var r, s;
      return openBlock(), createBlock(unref(M), {
        asChild: l.asChild,
        role: "tablist",
        ref_key: "primitiveElement",
        ref: e,
        "aria-orientation": (r = unref(t)) == null ? void 0 : r.orientation,
        tabindex: "0",
        "data-orientation": (s = unref(t)) == null ? void 0 : s.orientation,
        style: { outline: "none" }
      }, {
        default: withCtx(() => [
          renderSlot(l.$slots, "default")
        ]),
        _: 3
      }, 8, ["asChild", "aria-orientation", "data-orientation"]);
    };
  }
});
var _l = defineComponent({
  __name: "TabsContent",
  props: {
    asChild: { type: Boolean, default: false },
    value: {},
    forceMount: { type: Boolean }
  },
  setup(a) {
    const t = a, e = inject(_t), o = computed(() => {
      var l;
      return ((l = e == null ? void 0 : e.modelValue) == null ? void 0 : l.value) === t.value ? "active" : "inactive";
    });
    return (l, n) => {
      var r, s, i;
      return ((s = (r = unref(e)) == null ? void 0 : r.modelValue) == null ? void 0 : s.value) === t.value ? (openBlock(), createBlock(unref(M), {
        key: 0,
        role: "tabpanel",
        "data-state": o.value,
        "data-orientation": (i = unref(e)) == null ? void 0 : i.orientation,
        tabindex: "0"
      }, {
        default: withCtx(() => [
          renderSlot(l.$slots, "default")
        ]),
        _: 3
      }, 8, ["data-state", "data-orientation"])) : createCommentVNode("", true);
    };
  }
});
var yl = defineComponent({
  __name: "TabsTrigger",
  props: {
    asChild: { type: Boolean, default: false },
    value: {},
    disabled: { type: Boolean, default: false }
  },
  setup(a) {
    const t = a, e = inject(_t), { primitiveElement: o, currentElement: l } = B();
    function n(s) {
      e == null || e.changeModelValue(s);
    }
    function r(s) {
      const i = ne(
        s,
        l.value,
        e == null ? void 0 : e.parentElement.value,
        { arrowKeyOptions: "horizontal" }
      );
      i && (i.focus(), n(i == null ? void 0 : i.getAttribute("data-radix-vue-tab-value")));
    }
    return (s, i) => {
      var d, c, p, m, f, h2, g;
      return openBlock(), createBlock(unref(X), {
        ref_key: "primitiveElement",
        ref: o,
        type: "button",
        role: "tab",
        "aria-selected": ((c = (d = unref(e)) == null ? void 0 : d.modelValue) == null ? void 0 : c.value) === t.value ? "true" : "false",
        "data-state": ((m = (p = unref(e)) == null ? void 0 : p.modelValue) == null ? void 0 : m.value) === t.value ? "active" : "inactive",
        "data-disabled": t.disabled,
        tabindex: ((h2 = (f = unref(e)) == null ? void 0 : f.modelValue) == null ? void 0 : h2.value) === t.value ? "0" : "-1",
        "data-orientation": (g = unref(e)) == null ? void 0 : g.orientation,
        "data-radix-vue-collection-item": "",
        "data-radix-vue-tab-value": t.value,
        onClick: i[0] || (i[0] = (E) => n(t.value)),
        onKeydown: r
      }, {
        default: withCtx(() => [
          renderSlot(s.$slots, "default")
        ]),
        _: 3
      }, 8, ["aria-selected", "data-state", "data-disabled", "tabindex", "data-orientation", "data-radix-vue-tab-value"]);
    };
  }
});
var Qa = ["value", "aria-valuenow", "name"];
var Lt = Symbol();
var gl = defineComponent({
  __name: "SliderRoot",
  props: {
    asChild: { type: Boolean, default: false },
    defaultValue: {},
    value: {},
    name: {},
    disabled: { type: Boolean, default: false },
    orientation: { default: "horizontal" },
    dir: {},
    modelValue: {},
    inverted: { type: Boolean, default: false },
    min: { default: 0 },
    max: { default: 100 },
    step: { default: 1 },
    extraStep: {},
    minStepsBetweenThumbs: { default: 0 }
  },
  emits: ["update:modelValue"],
  setup(a, { emit: t }) {
    const e = a, { primitiveElement: o, currentElement: l } = B(), n = ref(), r = computed(() => e.modelValue ? e.modelValue < 50 ? (e.modelValue - 50) / 50 * 10 : (e.modelValue - 50) / 50 * -10 : 0);
    provide(Lt, {
      modelValue: toRef(() => e.modelValue),
      changeModelValue: (f) => {
        t("update:modelValue", f);
      },
      rootSliderElement: l,
      orientation: e.orientation,
      dir: e.dir,
      thumbOffset: r,
      min: e.min,
      max: e.max,
      step: e.step,
      thumbElement: n,
      disabled: e.disabled
    });
    function s(f) {
      t("update:modelValue", m(f, e.step));
    }
    let i;
    function d(f) {
      n.value && n.value.focus(), f.preventDefault(), l.value && (i = l.value.getBoundingClientRect(), f.clientX - 10 - r.value > i.left && f.clientX - 10 - r.value < i.left + i.width && s(
        Math.round(
          (f.clientX - 10 - r.value - i.left) / i.width * 100
        )
      ), document.addEventListener("pointermove", c), document.addEventListener("pointerup", p));
    }
    const c = (f) => {
      n.value && n.value.focus(), f.clientX - 10 - r.value > i.left && f.clientX - 10 - r.value < i.left + i.width && s(
        (f.clientX - 10 - r.value - i.left) / i.width * 100
      ), f.clientX - 10 - r.value <= i.left && s(e.min), f.clientX - 10 - r.value >= i.left + i.width && s(e.max);
    }, p = (f) => {
      document.removeEventListener("pointermove", c), document.removeEventListener("pointerup", p);
    };
    function m(f, h2) {
      const g = Math.floor(f / h2);
      return f % h2 <= h2 / 2 ? g * h2 : (g + 1) * h2;
    }
    return (f, h2) => (openBlock(), createBlock(unref(te), {
      ref_key: "primitiveElement",
      ref: o,
      onPointerdown: d
    }, {
      default: withCtx(() => [
        renderSlot(f.$slots, "default"),
        createBaseVNode("input", {
          style: { display: "none" },
          value: e.modelValue,
          "aria-valuenow": e.modelValue,
          name: e.name
        }, null, 8, Qa)
      ]),
      _: 3
    }, 512));
  }
});
var bl = defineComponent({
  __name: "SliderThumb",
  props: {
    asChild: { type: Boolean, default: false },
    class: {}
  },
  setup(a) {
    const t = a, e = inject(Lt), { primitiveElement: o, currentElement: l } = B();
    onMounted(() => {
      e != null && e.thumbElement && (e.thumbElement.value = l.value);
    });
    let n = 2;
    function r(s) {
      var c;
      if (!e)
        return;
      (s.keyCode === 32 || s.key === "Enter") && s.preventDefault();
      const i = Number(e == null ? void 0 : e.step), d = Number((c = e.modelValue) == null ? void 0 : c.value);
      (s.key === "ArrowUp" || s.key === "ArrowRight") && (s.shiftKey ? (s.preventDefault(), d + n >= (e == null ? void 0 : e.max) ? e == null || e.changeModelValue(e == null ? void 0 : e.max) : d + n <= (e == null ? void 0 : e.min) ? e == null || e.changeModelValue(e == null ? void 0 : e.min) : e == null || e.changeModelValue(d + n)) : (s.preventDefault(), d + i >= (e == null ? void 0 : e.max) ? e == null || e.changeModelValue(e == null ? void 0 : e.max) : d + i <= (e == null ? void 0 : e.min) ? e == null || e.changeModelValue(e == null ? void 0 : e.min) : e == null || e.changeModelValue(d + i))), (s.key === "ArrowDown" || s.key === "ArrowLeft") && (s.shiftKey ? (s.preventDefault(), d - n >= (e == null ? void 0 : e.max) ? e == null || e.changeModelValue(e == null ? void 0 : e.max) : d - n <= (e == null ? void 0 : e.min) ? e == null || e.changeModelValue(e == null ? void 0 : e.min) : e == null || e.changeModelValue(d - n)) : (s.preventDefault(), d - i >= (e == null ? void 0 : e.max) ? e == null || e.changeModelValue(e == null ? void 0 : e.max) : d - i <= (e == null ? void 0 : e.min) ? e == null || e.changeModelValue(e == null ? void 0 : e.min) : e == null || e.changeModelValue(d - i)));
    }
    return (s, i) => {
      var d, c, p, m, f, h2, g, E, x;
      return openBlock(), createElementBlock("span", {
        style: normalizeStyle(`transform: translateX(-50%); position: absolute; left: calc(${(c = (d = unref(e)) == null ? void 0 : d.modelValue) == null ? void 0 : c.value}%)`)
      }, [
        createVNode(unref(te), {
          class: normalizeClass(t.class),
          ref_key: "primitiveElement",
          ref: o,
          role: "slider",
          tabindex: "0",
          "data-disabled": (p = unref(e)) == null ? void 0 : p.disabled,
          "data-orientation": (m = unref(e)) == null ? void 0 : m.orientation,
          "aria-valuenow": (h2 = (f = unref(e)) == null ? void 0 : f.modelValue) == null ? void 0 : h2.value,
          "aria-valuemin": (g = unref(e)) == null ? void 0 : g.min,
          "aria-valuemax": (E = unref(e)) == null ? void 0 : E.max,
          "aria-orientation": (x = unref(e)) == null ? void 0 : x.orientation,
          onKeydown: r
        }, null, 8, ["class", "data-disabled", "data-orientation", "aria-valuenow", "aria-valuemin", "aria-valuemax", "aria-orientation"])
      ], 4);
    };
  }
});
var wl = defineComponent({
  __name: "SliderTrack",
  props: {
    asChild: { type: Boolean }
  },
  setup(a) {
    return (t, e) => (openBlock(), createBlock(unref(te), { asChild: t.asChild }, {
      default: withCtx(() => [
        renderSlot(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["asChild"]));
  }
});
var El = defineComponent({
  __name: "SliderRange",
  setup(a) {
    const t = inject(Lt);
    return (e, o) => {
      var l, n, r, s, i;
      return openBlock(), createBlock(unref(te), {
        "data-disabled": (l = unref(t)) == null ? void 0 : l.disabled,
        "data-orientation": (n = unref(t)) == null ? void 0 : n.orientation,
        style: normalizeStyle(`left: 0%; right: ${(((r = unref(t)) == null ? void 0 : r.max) ?? 100) - (((i = (s = unref(t)) == null ? void 0 : s.modelValue) == null ? void 0 : i.value) ?? 0)}%`)
      }, null, 8, ["data-disabled", "data-orientation", "style"]);
    };
  }
});
var Nt = "RadioGroup";
var Cl = defineComponent({
  __name: "RadioGroupRoot",
  props: {
    asChild: { type: Boolean, default: false },
    defaultValue: {},
    value: {},
    disabled: { type: Boolean, default: false },
    name: {},
    required: { type: Boolean },
    orientation: { default: void 0 },
    dir: {},
    loop: { type: Boolean, default: true },
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(a, { emit: t }) {
    const e = a, { primitiveElement: o, currentElement: l } = B();
    return provide(Nt, {
      modelValue: toRef(() => e.modelValue),
      changeModelValue: (n) => {
        t("update:modelValue", n);
      },
      parentElement: l,
      disabled: e.disabled
    }), (n, r) => (openBlock(), createBlock(unref(M), {
      ref_key: "primitiveElement",
      ref: o,
      role: "radiogroup",
      "aria-label": "radiogroup",
      "data-disabled": e.disabled
    }, {
      default: withCtx(() => [
        renderSlot(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["data-disabled"]));
  }
});
var xl = defineComponent({
  __name: "RadioGroupItem",
  props: {
    asChild: { type: Boolean, default: false },
    value: {},
    disabled: { type: Boolean },
    required: { type: Boolean }
  },
  setup(a) {
    const t = a, e = inject(Nt);
    provide("radioItemValue", t.value);
    const o = computed(() => {
      var i;
      return ((i = e == null ? void 0 : e.modelValue) == null ? void 0 : i.value) === t.value ? "on" : "off";
    });
    function l(i) {
      e == null || e.changeModelValue(i);
    }
    const { primitiveElement: n, currentElement: r } = B();
    function s(i) {
      const d = ne(
        i,
        r.value,
        e == null ? void 0 : e.parentElement.value
      );
      d && (d.focus(), l(d == null ? void 0 : d.getAttribute("data-radix-vue-radio-value")));
    }
    return (i, d) => {
      var c, p;
      return openBlock(), createBlock(unref(X), {
        type: "button",
        "data-state": o.value,
        "data-disabled": t.disabled,
        onClick: d[0] || (d[0] = (m) => {
          var f;
          return (f = unref(e)) == null ? void 0 : f.changeModelValue(t.value);
        }),
        tabindex: `${((p = (c = unref(e)) == null ? void 0 : c.modelValue) == null ? void 0 : p.value) === t.value ? "0" : "-1"}`,
        ref_key: "primitiveElement",
        ref: n,
        onKeydown: s,
        "data-radix-vue-collection-item": "",
        "data-radix-vue-radio-value": t.value
      }, {
        default: withCtx(() => [
          renderSlot(i.$slots, "default")
        ]),
        _: 3
      }, 8, ["data-state", "data-disabled", "tabindex", "data-radix-vue-radio-value"]);
    };
  }
});
var $l = defineComponent({
  __name: "RadioGroupIndicator",
  setup(a) {
    const t = inject(Nt), e = inject("radioItemValue");
    return (o, l) => {
      var n, r, s, i, d;
      return ((r = (n = unref(t)) == null ? void 0 : n.modelValue) == null ? void 0 : r.value) === unref(e) ? (openBlock(), createBlock(unref(te), {
        key: 0,
        "data-state": ((i = (s = unref(t)) == null ? void 0 : s.modelValue) == null ? void 0 : i.value) === unref(e) ? "checked" : "unchecked",
        "data-disabled": (d = unref(t)) == null ? void 0 : d.disabled
      }, {
        default: withCtx(() => [
          renderSlot(o.$slots, "default")
        ]),
        _: 3
      }, 8, ["data-state", "data-disabled"])) : createCommentVNode("", true);
    };
  }
});
var Bo = Symbol();
var Sl = defineComponent({
  __name: "ProgressRoot",
  props: {
    asChild: { type: Boolean },
    value: {},
    modelValue: {},
    max: {}
  },
  setup(a) {
    const t = a;
    return provide(Bo, {
      modelValue: toRef(() => t.modelValue),
      max: t.max
    }), (e, o) => (openBlock(), createBlock(unref(M), {
      role: "progressbar",
      "data-state": t.modelValue === t.max ? "complete" : "loading",
      "data-value": t.modelValue,
      "data-max": t.max,
      "aria-valuenow": t.modelValue,
      "aria-valuemin": 0,
      "aria-valuemax": t.max
    }, {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["data-state", "data-value", "data-max", "aria-valuenow", "aria-valuemax"]));
  }
});
var kl = defineComponent({
  __name: "ProgressIndicator",
  setup(a) {
    const t = inject(Bo);
    return (e, o) => {
      var l, n, r, s, i, d, c;
      return openBlock(), createBlock(unref(M), {
        "data-state": ((l = unref(t)) == null ? void 0 : l.modelValue) === ((n = unref(t)) == null ? void 0 : n.max) ? "complete" : "loading",
        "data-value": (r = unref(t)) == null ? void 0 : r.modelValue,
        "data-max": (s = unref(t)) == null ? void 0 : s.max,
        style: normalizeStyle(`left: 0%; right: ${(((i = unref(t)) == null ? void 0 : i.max) ?? 100) - (((c = (d = unref(t)) == null ? void 0 : d.modelValue) == null ? void 0 : c.value) ?? 0)}%`)
      }, {
        default: withCtx(() => [
          renderSlot(e.$slots, "default")
        ]),
        _: 3
      }, 8, ["data-state", "data-value", "data-max", "style"]);
    };
  }
});
var tt = Symbol();
var Al = defineComponent({
  __name: "DialogRoot",
  props: {
    open: { type: Boolean, default: void 0 },
    defaultOpen: { type: Boolean, default: false },
    modal: { type: Boolean, default: true }
  },
  emits: ["update:modelValue"],
  setup(a, { emit: t }) {
    const e = a, o = ref(), l = K(e, "open", t, {
      defaultValue: e.defaultOpen,
      passive: true
    });
    return provide(tt, {
      open: l,
      openModal: () => {
        l.value = true;
      },
      closeModal: () => {
        l.value = false;
      },
      triggerButton: o
    }), (n, r) => renderSlot(n.$slots, "default");
  }
});
var Pl = defineComponent({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean, default: false }
  },
  setup(a) {
    const t = a, e = inject(tt), { primitiveElement: o, currentElement: l } = B();
    return onMounted(() => {
      e && (e.triggerButton = l);
    }), (n, r) => {
      var s, i, d;
      return openBlock(), createBlock(unref(X), {
        asChild: t.asChild,
        type: "button",
        ref_key: "primitiveElement",
        ref: o,
        "aria-expanded": ((s = unref(e)) == null ? void 0 : s.open.value) || false,
        "data-state": (i = unref(e)) != null && i.open.value ? "open" : "closed",
        onClick: (d = unref(e)) == null ? void 0 : d.openModal
      }, {
        default: withCtx(() => [
          renderSlot(n.$slots, "default")
        ]),
        _: 3
      }, 8, ["asChild", "aria-expanded", "data-state", "onClick"]);
    };
  }
});
var Fa = {};
function Va(a, t) {
  return openBlock(), createBlock(Teleport, { to: "body" }, [
    renderSlot(a.$slots, "default")
  ]);
}
var Tl = De(Fa, [["render", Va]]);
var Bl = defineComponent({
  __name: "DialogContent",
  props: {
    asChild: { type: Boolean, default: false },
    forceMount: { type: Boolean }
  },
  setup(a) {
    const t = a, e = inject(tt), { primitiveElement: o, currentElement: l } = B();
    xe(l, n);
    function n() {
      alert("click outside!");
    }
    watchEffect(() => {
      l.value && (e != null && e.open.value ? (Rt(l.value), document.querySelector("body").style.pointerEvents = "none", window.addEventListener("wheel", r, { passive: false }), window.addEventListener("keydown", s)) : (document.querySelector("body").style.pointerEvents = "", window.removeEventListener("wheel", r), window.removeEventListener("keydown", s), e != null && e.triggerButton.value && (e == null || e.triggerButton.value.focus())));
    });
    function r(i) {
      i.preventDefault();
    }
    function s(i) {
      if (i.key === "ArrowDown" || i.key === "ArrowUp") {
        const d = document.activeElement;
        d && ["input", "select", "textarea"].indexOf(d.tagName.toLowerCase()) === -1 && i.preventDefault();
      }
      i.key === "Escape" && (e == null || e.closeModal());
    }
    return (i, d) => {
      var c, p;
      return (c = unref(e)) != null && c.open.value ? (openBlock(), createBlock(unref(M), {
        key: 0,
        asChild: t.asChild,
        ref_key: "primitiveElement",
        ref: o,
        "data-state": (p = unref(e)) != null && p.open.value ? "open" : "closed",
        role: "dialog",
        tabindex: "-1",
        style: { "pointer-events": "auto" }
      }, {
        default: withCtx(() => [
          renderSlot(i.$slots, "default")
        ]),
        _: 3
      }, 8, ["asChild", "data-state"])) : createCommentVNode("", true);
    };
  }
});
var Ol = defineComponent({
  __name: "DialogOverlay",
  props: {
    asChild: { type: Boolean, default: false },
    forceMount: { type: Boolean }
  },
  setup(a) {
    const t = a, e = inject(tt);
    return (o, l) => {
      var n, r, s;
      return (n = unref(e)) != null && n.open.value ? (openBlock(), createBlock(unref(M), {
        key: 0,
        asChild: t.asChild,
        "data-state": (r = unref(e)) != null && r.open.value ? "open" : "closed",
        style: { "pointer-events": "auto" },
        "data-aria-hidden": "true",
        "aria-hidden": "true",
        onClick: (s = unref(e)) == null ? void 0 : s.closeModal
      }, {
        default: withCtx(() => [
          renderSlot(o.$slots, "default")
        ]),
        _: 3
      }, 8, ["asChild", "data-state", "onClick"])) : createCommentVNode("", true);
    };
  }
});
var Ml = defineComponent({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean, default: false }
  },
  setup(a) {
    const t = a, e = inject(tt);
    return (o, l) => {
      var n, r, s;
      return openBlock(), createBlock(unref(X), {
        type: "button",
        asChild: t.asChild,
        "aria-expanded": ((n = unref(e)) == null ? void 0 : n.open.value) || false,
        "data-state": (r = unref(e)) != null && r.open.value ? "open" : "closed",
        onClick: (s = unref(e)) == null ? void 0 : s.closeModal
      }, {
        default: withCtx(() => [
          renderSlot(o.$slots, "default")
        ]),
        _: 3
      }, 8, ["asChild", "aria-expanded", "data-state", "onClick"]);
    };
  }
});
var Dl = defineComponent({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean, default: false }
  },
  setup(a) {
    const t = a;
    return (e, o) => (openBlock(), createBlock(unref(Co), {
      asChild: t.asChild
    }, {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["asChild"]));
  }
});
var Rl = defineComponent({
  __name: "DialogDescription",
  setup(a) {
    return (t, e) => (openBlock(), createBlock(unref(xo), null, {
      default: withCtx(() => [
        renderSlot(t.$slots, "default")
      ]),
      _: 3
    }));
  }
});
var Ye = Symbol();
var Ll = defineComponent({
  __name: "AlertDialogRoot",
  props: {
    open: { type: Boolean, default: void 0 },
    defaultOpen: { type: Boolean, default: false }
  },
  emits: ["update:open"],
  setup(a, { emit: t }) {
    const e = a, o = K(e, "open", t, {
      defaultValue: e.defaultOpen,
      passive: true
    }), l = ref();
    return provide(Ye, {
      open: o,
      openModal: () => {
        o.value = true;
      },
      closeModal: () => {
        o.value = false;
      },
      triggerButton: l
    }), (n, r) => renderSlot(n.$slots, "default");
  }
});
var Nl = defineComponent({
  __name: "AlertDialogTrigger",
  props: {
    asChild: { type: Boolean, default: false }
  },
  setup(a) {
    const t = a, e = inject(Ye), { primitiveElement: o, currentElement: l } = B();
    return onMounted(() => {
      e && (e.triggerButton = l);
    }), (n, r) => {
      var s, i, d;
      return openBlock(), createBlock(unref(X), {
        asChild: t.asChild,
        type: "button",
        ref_key: "primitiveElement",
        ref: o,
        "aria-expanded": ((s = unref(e)) == null ? void 0 : s.open.value) || false,
        "data-state": (i = unref(e)) != null && i.open.value ? "open" : "closed",
        onClick: (d = unref(e)) == null ? void 0 : d.openModal
      }, {
        default: withCtx(() => [
          renderSlot(n.$slots, "default")
        ]),
        _: 3
      }, 8, ["asChild", "aria-expanded", "data-state", "onClick"]);
    };
  }
});
var ja = {};
function en(a, t) {
  return openBlock(), createBlock(Teleport, { to: "body" }, [
    renderSlot(a.$slots, "default")
  ]);
}
var Il = De(ja, [["render", en]]);
var Kl = defineComponent({
  __name: "AlertDialogContent",
  props: {
    asChild: { type: Boolean, default: false },
    forceMount: { type: Boolean }
  },
  setup(a) {
    const t = a, e = inject(Ye), { primitiveElement: o, currentElement: l } = B();
    watchEffect(() => {
      l.value && (e != null && e.open.value ? (Rt(l.value), document.querySelector("body").style.pointerEvents = "none", window.addEventListener("wheel", n, { passive: false }), window.addEventListener("keydown", r)) : (document.querySelector("body").style.pointerEvents = "", window.removeEventListener("wheel", n), window.removeEventListener("keydown", r), e != null && e.triggerButton.value && (e == null || e.triggerButton.value.focus())));
    });
    function n(s) {
      s.preventDefault();
    }
    function r(s) {
      if (s.key === "ArrowDown" || s.key === "ArrowUp") {
        const i = document.activeElement;
        i && ["input", "select", "textarea"].indexOf(i.tagName.toLowerCase()) === -1 && s.preventDefault();
      }
      s.key === "Escape" && (e == null || e.closeModal());
    }
    return (s, i) => {
      var d, c;
      return (d = unref(e)) != null && d.open.value ? (openBlock(), createBlock(unref(M), {
        key: 0,
        asChild: t.asChild,
        ref_key: "primitiveElement",
        ref: o,
        "data-state": (c = unref(e)) != null && c.open.value ? "open" : "closed",
        role: "dialog",
        tabindex: "-1",
        style: { "pointer-events": "auto" }
      }, {
        default: withCtx(() => [
          renderSlot(s.$slots, "default")
        ]),
        _: 3
      }, 8, ["asChild", "data-state"])) : createCommentVNode("", true);
    };
  }
});
var Hl = defineComponent({
  __name: "AlertDialogOverlay",
  props: {
    asChild: { type: Boolean, default: false },
    forceMount: { type: Boolean }
  },
  setup(a) {
    const t = a, e = inject(Ye);
    return (o, l) => {
      var n, r, s;
      return (n = unref(e)) != null && n.open.value ? (openBlock(), createBlock(unref(M), {
        key: 0,
        asChild: t.asChild,
        "data-state": (r = unref(e)) != null && r.open.value ? "open" : "closed",
        style: { "pointer-events": "auto" },
        "data-aria-hidden": "true",
        "aria-hidden": "true",
        onClick: (s = unref(e)) == null ? void 0 : s.closeModal
      }, {
        default: withCtx(() => [
          renderSlot(o.$slots, "default")
        ]),
        _: 3
      }, 8, ["asChild", "data-state", "onClick"])) : createCommentVNode("", true);
    };
  }
});
var zl = defineComponent({
  __name: "AlertDialogCancel",
  props: {
    asChild: { type: Boolean, default: false }
  },
  setup(a) {
    const t = a, e = inject(Ye);
    return (o, l) => {
      var n, r, s;
      return openBlock(), createBlock(unref(X), {
        asChild: t.asChild,
        type: "button",
        "aria-expanded": ((n = unref(e)) == null ? void 0 : n.open.value) || false,
        "data-state": (r = unref(e)) != null && r.open.value ? "open" : "closed",
        onClick: (s = unref(e)) == null ? void 0 : s.closeModal
      }, {
        default: withCtx(() => [
          renderSlot(o.$slots, "default")
        ]),
        _: 3
      }, 8, ["asChild", "aria-expanded", "data-state", "onClick"]);
    };
  }
});
var Yl = defineComponent({
  __name: "AlertDialogTitle",
  props: {
    asChild: { type: Boolean, default: false }
  },
  setup(a) {
    const t = a;
    return (e, o) => (openBlock(), createBlock(unref(Co), {
      asChild: t.asChild
    }, {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["asChild"]));
  }
});
var Wl = defineComponent({
  __name: "AlertDialogDescription",
  props: {
    asChild: { type: Boolean, default: false }
  },
  setup(a) {
    const t = a;
    return (e, o) => (openBlock(), createBlock(unref(xo), {
      asChild: t.asChild
    }, {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["asChild"]));
  }
});
var tn = ["aria-expanded", "data-state"];
var Ul = defineComponent({
  __name: "AlertDialogAction",
  setup(a) {
    const t = inject(Ye);
    return (e, o) => {
      var l, n;
      return openBlock(), createElementBlock("button", {
        type: "button",
        "aria-expanded": ((l = unref(t)) == null ? void 0 : l.open.value) || false,
        "data-state": (n = unref(t)) != null && n.open.value ? "open" : "closed",
        onClick: o[0] || (o[0] = //@ts-ignore
        (...r) => {
          var s, i;
          return ((s = unref(t)) == null ? void 0 : s.closeModal) && ((i = unref(t)) == null ? void 0 : i.closeModal(...r));
        })
      }, [
        renderSlot(e.$slots, "default")
      ], 8, tn);
    };
  }
});
var yt = Symbol();
var Gl = defineComponent({
  __name: "ToolbarRoot",
  props: {
    asChild: { type: Boolean, default: false },
    orientation: { default: "horizontal" },
    dir: { default: "ltr" },
    loop: { type: Boolean }
  },
  setup(a) {
    const t = a, { primitiveElement: e, currentElement: o } = B(), l = ref();
    return provide(yt, {
      parentElement: o,
      activeElement: l,
      orientation: t.orientation
    }), (n, r) => (openBlock(), createBlock(unref(M), {
      ref_key: "primitiveElement",
      ref: e,
      role: "toolbar",
      tabindex: "0",
      style: { outline: "none" },
      "aria-orientation": t.orientation,
      dir: t.dir,
      "data-orientation": t.orientation
    }, {
      default: withCtx(() => [
        renderSlot(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["aria-orientation", "dir", "data-orientation"]));
  }
});
var Xl = defineComponent({
  __name: "ToolbarButton",
  setup(a) {
    const t = inject(yt), { primitiveElement: e, currentElement: o } = B();
    function l(n) {
      const r = ne(
        n,
        o.value,
        t == null ? void 0 : t.parentElement.value
      );
      r == null || r.focus();
    }
    return (n, r) => {
      var s, i;
      return openBlock(), createBlock(unref(X), {
        ref_key: "primitiveElement",
        ref: e,
        "data-orientation": (s = unref(t)) == null ? void 0 : s.orientation,
        type: "button",
        tabindex: ((i = unref(t)) == null ? void 0 : i.activeElement.value) === unref(o) ? "0" : "-1",
        onKeydown: l,
        "data-radix-vue-collection-item": ""
      }, {
        default: withCtx(() => [
          renderSlot(n.$slots, "default")
        ]),
        _: 3
      }, 8, ["data-orientation", "tabindex"]);
    };
  }
});
var ql = defineComponent({
  __name: "ToolbarLink",
  setup(a) {
    const t = inject(yt), { primitiveElement: e, currentElement: o } = B();
    function l(n) {
      const r = ne(
        n,
        o.value,
        t == null ? void 0 : t.parentElement.value
      );
      r == null || r.focus();
    }
    return (n, r) => {
      var s;
      return openBlock(), createBlock(unref(Ma), {
        ref_key: "primitiveElement",
        ref: e,
        tabindex: ((s = unref(t)) == null ? void 0 : s.activeElement.value) === unref(o) ? "0" : "-1",
        onKeydown: l,
        "data-radix-vue-collection-item": ""
      }, {
        default: withCtx(() => [
          renderSlot(n.$slots, "default")
        ]),
        _: 3
      }, 8, ["tabindex"]);
    };
  }
});
var Oo = Symbol();
var Jl = defineComponent({
  __name: "ToolbarToggleGroup",
  props: {
    asChild: { type: Boolean },
    type: { default: "single" },
    value: {},
    defaultValue: {},
    disabled: { type: Boolean },
    rovingFocus: { type: Boolean },
    orientation: {},
    dir: {},
    loop: { type: Boolean },
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(a, { emit: t }) {
    const e = a, { primitiveElement: o, currentElement: l } = B();
    return provide(Oo, {
      type: e.type,
      modelValue: toRef(() => e.modelValue),
      changeModelValue: (n) => {
        if (e.type === "single")
          t("update:modelValue", n);
        else {
          if (!n)
            return;
          let r = e.modelValue;
          if (r.includes(n)) {
            let s = r.findIndex((i) => i === n);
            r.splice(s, 1);
          } else
            r.push(n);
          t("update:modelValue", r);
        }
      },
      orientation: e.orientation ? e.orientation : "horizontal",
      parentElement: l
    }), (n, r) => (openBlock(), createBlock(unref(M), {
      ref_key: "primitiveElement",
      ref: o,
      role: "group",
      dir: e.dir,
      "aria-label": "Text alignment"
    }, {
      default: withCtx(() => [
        renderSlot(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["dir"]));
  }
});
var Zl = defineComponent({
  __name: "ToolbarToggleItem",
  props: {
    asChild: { type: Boolean, default: false },
    value: {},
    disabled: { type: Boolean }
  },
  setup(a) {
    const t = a, e = inject(
      Oo
    ), o = inject(yt), l = computed(() => {
      var s, i, d;
      return (e == null ? void 0 : e.type) === "multiple" ? (i = (s = e == null ? void 0 : e.modelValue) == null ? void 0 : s.value) != null && i.includes(t.value) ? "on" : "off" : ((d = e == null ? void 0 : e.modelValue) == null ? void 0 : d.value) === t.value ? "on" : "off";
    }), n = ref();
    function r(s) {
      const i = ne(
        s,
        n.value,
        o == null ? void 0 : o.parentElement.value
      );
      i == null || i.focus();
    }
    return (s, i) => {
      var d;
      return openBlock(), createBlock(unref(X), {
        type: "button",
        "data-state": l.value,
        "data-disabled": t.disabled,
        "data-orientation": (d = unref(e)) == null ? void 0 : d.orientation,
        onClick: i[0] || (i[0] = (c) => unref(e).changeModelValue(t.value)),
        ref_key: "currentToggleElement",
        ref: n,
        onKeydown: r,
        "data-radix-vue-collection-item": ""
      }, {
        default: withCtx(() => [
          renderSlot(s.$slots, "default")
        ]),
        _: 3
      }, 8, ["data-state", "data-disabled", "data-orientation"]);
    };
  }
});
var Ql = defineComponent({
  __name: "ToolbarSeparator",
  props: {
    asChild: { type: Boolean, default: false }
  },
  setup(a) {
    const t = a;
    return (e, o) => (openBlock(), createBlock(ze, {
      asChild: t.asChild
    }, null, 8, ["asChild"]));
  }
});
var It = Symbol();
var Fl = defineComponent({
  __name: "AvatarRoot",
  props: {
    asChild: { type: Boolean, default: false }
  },
  setup(a) {
    const t = a, e = ref("loading");
    return provide(It, {
      imageLoadingStatus: e
    }), (o, l) => (openBlock(), createBlock(unref(te), {
      asChild: t.asChild
    }, {
      default: withCtx(() => [
        renderSlot(o.$slots, "default")
      ]),
      _: 3
    }, 8, ["asChild"]));
  }
});
var Vl = defineComponent({
  __name: "AvatarImage",
  props: {
    asChild: { type: Boolean, default: false },
    onLoadingStatusChange: {}
  },
  setup(a) {
    const t = inject(It);
    return onMounted(() => {
      t.imageLoadingStatus.value = "loaded";
    }), (e, o) => (openBlock(), createBlock(unref(Ra), { asChild: e.asChild }, null, 8, ["asChild"]));
  }
});
var jl = defineComponent({
  __name: "AvatarFallback",
  props: {
    asChild: { type: Boolean, default: false },
    delayMs: { default: 0 }
  },
  setup(a) {
    const t = a, e = inject(It);
    let o = ref(), l;
    return t.delayMs ? (l && clearTimeout(l), l = setTimeout(() => {
      o.value = true;
    }, t.delayMs)) : o.value = true, (n, r) => {
      var s;
      return unref(o) && ((s = unref(e)) == null ? void 0 : s.imageLoadingStatus.value) !== "loaded" ? (openBlock(), createBlock(unref(te), {
        key: 0,
        asChild: t.asChild
      }, {
        default: withCtx(() => [
          renderSlot(n.$slots, "default")
        ]),
        _: 3
      }, 8, ["asChild"])) : createCommentVNode("", true);
    };
  }
});
var Kt = Symbol();
var se = defineComponent({
  __name: "PopperRoot",
  setup(a) {
    const t = ref();
    return provide(Kt, {
      anchor: t,
      onAnchorChange: (e) => {
        t.value = e;
      }
    }), (e, o) => renderSlot(e.$slots, "default");
  }
});
var fe = defineComponent({
  __name: "PopperAnchor",
  props: {
    asChild: { type: Boolean },
    element: {}
  },
  setup(a) {
    const t = a, { primitiveElement: e, currentElement: o } = B(), l = inject(Kt);
    return watch(o, () => {
      l == null || l.onAnchorChange(t.element ?? o.value);
    }), (n, r) => (openBlock(), createBlock(unref(M), {
      "as-child": n.asChild,
      ref_key: "primitiveElement",
      ref: e
    }, {
      default: withCtx(() => [
        renderSlot(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child"]));
  }
});
var on = (a) => ({
  name: "transformOrigin",
  options: a,
  fn(t) {
    var E, x, $;
    const { placement: e, rects: o, middlewareData: l } = t, r = ((E = l.arrow) == null ? void 0 : E.centerOffset) !== 0, s = r ? 0 : a.arrowWidth, i = r ? 0 : a.arrowHeight, [d, c] = $t(e), p = { start: "0%", center: "50%", end: "100%" }[c], m = (((x = l.arrow) == null ? void 0 : x.x) ?? 0) + s / 2, f = ((($ = l.arrow) == null ? void 0 : $.y) ?? 0) + i / 2;
    let h2 = "", g = "";
    return d === "bottom" ? (h2 = r ? p : `${m}px`, g = `${-i}px`) : d === "top" ? (h2 = r ? p : `${m}px`, g = `${o.floating.height + i}px`) : d === "right" ? (h2 = `${-i}px`, g = r ? p : `${f}px`) : d === "left" && (h2 = `${o.floating.width + i}px`, g = r ? p : `${f}px`), { data: { x: h2, y: g } };
  }
});
function $t(a) {
  const [t, e = "center"] = a.split("-");
  return [t, e];
}
function We(a) {
  return a.split("-")[1];
}
function Ht(a) {
  return a === "y" ? "height" : "width";
}
function ve(a) {
  return a.split("-")[0];
}
function Re(a) {
  return ["top", "bottom"].includes(ve(a)) ? "x" : "y";
}
function ao(a, t, e) {
  let { reference: o, floating: l } = a;
  const n = o.x + o.width / 2 - l.width / 2, r = o.y + o.height / 2 - l.height / 2, s = Re(t), i = Ht(s), d = o[i] / 2 - l[i] / 2, c = s === "x";
  let p;
  switch (ve(t)) {
    case "top":
      p = { x: n, y: o.y - l.height };
      break;
    case "bottom":
      p = { x: n, y: o.y + o.height };
      break;
    case "right":
      p = { x: o.x + o.width, y: r };
      break;
    case "left":
      p = { x: o.x - l.width, y: r };
      break;
    default:
      p = { x: o.x, y: o.y };
  }
  switch (We(t)) {
    case "start":
      p[s] -= d * (e && c ? -1 : 1);
      break;
    case "end":
      p[s] += d * (e && c ? -1 : 1);
  }
  return p;
}
var an = async (a, t, e) => {
  const { placement: o = "bottom", strategy: l = "absolute", middleware: n = [], platform: r } = e, s = n.filter(Boolean), i = await (r.isRTL == null ? void 0 : r.isRTL(t));
  let d = await r.getElementRects({ reference: a, floating: t, strategy: l }), { x: c, y: p } = ao(d, o, i), m = o, f = {}, h2 = 0;
  for (let g = 0; g < s.length; g++) {
    const { name: E, fn: x } = s[g], { x: $, y: k, data: O, reset: D } = await x({ x: c, y: p, initialPlacement: o, placement: m, strategy: l, middlewareData: f, rects: d, platform: r, elements: { reference: a, floating: t } });
    c = $ ?? c, p = k ?? p, f = { ...f, [E]: { ...f[E], ...O } }, D && h2 <= 50 && (h2++, typeof D == "object" && (D.placement && (m = D.placement), D.rects && (d = D.rects === true ? await r.getElementRects({ reference: a, floating: t, strategy: l }) : D.rects), { x: c, y: p } = ao(d, m, i)), g = -1);
  }
  return { x: c, y: p, placement: m, strategy: l, middlewareData: f };
};
function ye(a, t) {
  return typeof a == "function" ? a(t) : a;
}
function Mo(a) {
  return typeof a != "number" ? function(t) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...t };
  }(a) : { top: a, right: a, bottom: a, left: a };
}
function dt(a) {
  return { ...a, top: a.y, left: a.x, right: a.x + a.width, bottom: a.y + a.height };
}
async function Ge(a, t) {
  var e;
  t === void 0 && (t = {});
  const { x: o, y: l, platform: n, rects: r, elements: s, strategy: i } = a, { boundary: d = "clippingAncestors", rootBoundary: c = "viewport", elementContext: p = "floating", altBoundary: m = false, padding: f = 0 } = ye(t, a), h2 = Mo(f), g = s[m ? p === "floating" ? "reference" : "floating" : p], E = dt(await n.getClippingRect({ element: (e = await (n.isElement == null ? void 0 : n.isElement(g))) == null || e ? g : g.contextElement || await (n.getDocumentElement == null ? void 0 : n.getDocumentElement(s.floating)), boundary: d, rootBoundary: c, strategy: i })), x = p === "floating" ? { ...r.floating, x: o, y: l } : r.reference, $ = await (n.getOffsetParent == null ? void 0 : n.getOffsetParent(s.floating)), k = await (n.isElement == null ? void 0 : n.isElement($)) && await (n.getScale == null ? void 0 : n.getScale($)) || { x: 1, y: 1 }, O = dt(n.convertOffsetParentRelativeRectToViewportRelativeRect ? await n.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: x, offsetParent: $, strategy: i }) : x);
  return { top: (E.top - O.top + h2.top) / k.y, bottom: (O.bottom - E.bottom + h2.bottom) / k.y, left: (E.left - O.left + h2.left) / k.x, right: (O.right - E.right + h2.right) / k.x };
}
var Xe = Math.min;
var Te = Math.max;
function St(a, t, e) {
  return Te(a, Xe(t, e));
}
var nn = (a) => ({ name: "arrow", options: a, async fn(t) {
  const { x: e, y: o, placement: l, rects: n, platform: r, elements: s } = t, { element: i, padding: d = 0 } = ye(a, t) || {};
  if (i == null)
    return {};
  const c = Mo(d), p = { x: e, y: o }, m = Re(l), f = Ht(m), h2 = await r.getDimensions(i), g = m === "y", E = g ? "top" : "left", x = g ? "bottom" : "right", $ = g ? "clientHeight" : "clientWidth", k = n.reference[f] + n.reference[m] - p[m] - n.floating[f], O = p[m] - n.reference[m], D = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(i));
  let R = D ? D[$] : 0;
  R && await (r.isElement == null ? void 0 : r.isElement(D)) || (R = s.floating[$] || n.floating[f]);
  const P = k / 2 - O / 2, U = R / 2 - h2[f] / 2 - 1, W = Xe(c[E], U), F = Xe(c[x], U), I = W, J = R - h2[f] - F, H = R / 2 - h2[f] / 2 + P, V = St(I, H, J), j = We(l) != null && H != V && n.reference[f] / 2 - (H < I ? W : F) - h2[f] / 2 < 0 ? H < I ? I - H : J - H : 0;
  return { [m]: p[m] - j, data: { [m]: V, centerOffset: H - V + j } };
} });
var Do = ["top", "right", "bottom", "left"];
Do.reduce((a, t) => a.concat(t, t + "-start", t + "-end"), []);
var ln = { left: "right", right: "left", bottom: "top", top: "bottom" };
function ct(a) {
  return a.replace(/left|right|bottom|top/g, (t) => ln[t]);
}
function rn(a, t, e) {
  e === void 0 && (e = false);
  const o = We(a), l = Re(a), n = Ht(l);
  let r = l === "x" ? o === (e ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return t.reference[n] > t.floating[n] && (r = ct(r)), { main: r, cross: ct(r) };
}
var sn = { start: "end", end: "start" };
function xt(a) {
  return a.replace(/start|end/g, (t) => sn[t]);
}
var un = function(a) {
  return a === void 0 && (a = {}), { name: "flip", options: a, async fn(t) {
    var e;
    const { placement: o, middlewareData: l, rects: n, initialPlacement: r, platform: s, elements: i } = t, { mainAxis: d = true, crossAxis: c = true, fallbackPlacements: p, fallbackStrategy: m = "bestFit", fallbackAxisSideDirection: f = "none", flipAlignment: h2 = true, ...g } = ye(a, t), E = ve(o), x = ve(r) === r, $ = await (s.isRTL == null ? void 0 : s.isRTL(i.floating)), k = p || (x || !h2 ? [ct(r)] : function(I) {
      const J = ct(I);
      return [xt(I), J, xt(J)];
    }(r));
    p || f === "none" || k.push(...function(I, J, H, V) {
      const j = We(I);
      let Q = function(Ae, Pe, Vo) {
        const Qt = ["left", "right"], Ft = ["right", "left"], jo = ["top", "bottom"], ea = ["bottom", "top"];
        switch (Ae) {
          case "top":
          case "bottom":
            return Vo ? Pe ? Ft : Qt : Pe ? Qt : Ft;
          case "left":
          case "right":
            return Pe ? jo : ea;
          default:
            return [];
        }
      }(ve(I), H === "start", V);
      return j && (Q = Q.map((Ae) => Ae + "-" + j), J && (Q = Q.concat(Q.map(xt)))), Q;
    }(r, h2, f, $));
    const O = [r, ...k], D = await Ge(t, g), R = [];
    let P = ((e = l.flip) == null ? void 0 : e.overflows) || [];
    if (d && R.push(D[E]), c) {
      const { main: I, cross: J } = rn(o, n, $);
      R.push(D[I], D[J]);
    }
    if (P = [...P, { placement: o, overflows: R }], !R.every((I) => I <= 0)) {
      var U, W;
      const I = (((U = l.flip) == null ? void 0 : U.index) || 0) + 1, J = O[I];
      if (J)
        return { data: { index: I, overflows: P }, reset: { placement: J } };
      let H = (W = P.filter((V) => V.overflows[0] <= 0).sort((V, j) => V.overflows[1] - j.overflows[1])[0]) == null ? void 0 : W.placement;
      if (!H)
        switch (m) {
          case "bestFit": {
            var F;
            const V = (F = P.map((j) => [j.placement, j.overflows.filter((Q) => Q > 0).reduce((Q, Ae) => Q + Ae, 0)]).sort((j, Q) => j[1] - Q[1])[0]) == null ? void 0 : F[0];
            V && (H = V);
            break;
          }
          case "initialPlacement":
            H = r;
        }
      if (o !== H)
        return { reset: { placement: H } };
    }
    return {};
  } };
};
function no(a, t) {
  return { top: a.top - t.height, right: a.right - t.width, bottom: a.bottom - t.height, left: a.left - t.width };
}
function lo(a) {
  return Do.some((t) => a[t] >= 0);
}
var dn = function(a) {
  return a === void 0 && (a = {}), { name: "hide", options: a, async fn(t) {
    const { rects: e } = t, { strategy: o = "referenceHidden", ...l } = ye(a, t);
    switch (o) {
      case "referenceHidden": {
        const n = no(await Ge(t, { ...l, elementContext: "reference" }), e.reference);
        return { data: { referenceHiddenOffsets: n, referenceHidden: lo(n) } };
      }
      case "escaped": {
        const n = no(await Ge(t, { ...l, altBoundary: true }), e.floating);
        return { data: { escapedOffsets: n, escaped: lo(n) } };
      }
      default:
        return {};
    }
  } };
};
var cn = function(a) {
  return a === void 0 && (a = 0), { name: "offset", options: a, async fn(t) {
    const { x: e, y: o } = t, l = await async function(n, r) {
      const { placement: s, platform: i, elements: d } = n, c = await (i.isRTL == null ? void 0 : i.isRTL(d.floating)), p = ve(s), m = We(s), f = Re(s) === "x", h2 = ["left", "top"].includes(p) ? -1 : 1, g = c && f ? -1 : 1, E = ye(r, n);
      let { mainAxis: x, crossAxis: $, alignmentAxis: k } = typeof E == "number" ? { mainAxis: E, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...E };
      return m && typeof k == "number" && ($ = m === "end" ? -1 * k : k), f ? { x: $ * g, y: x * h2 } : { x: x * h2, y: $ * g };
    }(t, a);
    return { x: e + l.x, y: o + l.y, data: l };
  } };
};
function Ro(a) {
  return a === "x" ? "y" : "x";
}
var pn = function(a) {
  return a === void 0 && (a = {}), { name: "shift", options: a, async fn(t) {
    const { x: e, y: o, placement: l } = t, { mainAxis: n = true, crossAxis: r = false, limiter: s = { fn: (E) => {
      let { x, y: $ } = E;
      return { x, y: $ };
    } }, ...i } = ye(a, t), d = { x: e, y: o }, c = await Ge(t, i), p = Re(ve(l)), m = Ro(p);
    let f = d[p], h2 = d[m];
    if (n) {
      const E = p === "y" ? "bottom" : "right";
      f = St(f + c[p === "y" ? "top" : "left"], f, f - c[E]);
    }
    if (r) {
      const E = m === "y" ? "bottom" : "right";
      h2 = St(h2 + c[m === "y" ? "top" : "left"], h2, h2 - c[E]);
    }
    const g = s.fn({ ...t, [p]: f, [m]: h2 });
    return { ...g, data: { x: g.x - e, y: g.y - o } };
  } };
};
var fn = function(a) {
  return a === void 0 && (a = {}), { options: a, fn(t) {
    const { x: e, y: o, placement: l, rects: n, middlewareData: r } = t, { offset: s = 0, mainAxis: i = true, crossAxis: d = true } = ye(a, t), c = { x: e, y: o }, p = Re(l), m = Ro(p);
    let f = c[p], h2 = c[m];
    const g = ye(s, t), E = typeof g == "number" ? { mainAxis: g, crossAxis: 0 } : { mainAxis: 0, crossAxis: 0, ...g };
    if (i) {
      const k = p === "y" ? "height" : "width", O = n.reference[p] - n.floating[k] + E.mainAxis, D = n.reference[p] + n.reference[k] - E.mainAxis;
      f < O ? f = O : f > D && (f = D);
    }
    if (d) {
      var x, $;
      const k = p === "y" ? "width" : "height", O = ["top", "left"].includes(ve(l)), D = n.reference[m] - n.floating[k] + (O && ((x = r.offset) == null ? void 0 : x[m]) || 0) + (O ? 0 : E.crossAxis), R = n.reference[m] + n.reference[k] + (O ? 0 : (($ = r.offset) == null ? void 0 : $[m]) || 0) - (O ? E.crossAxis : 0);
      h2 < D ? h2 = D : h2 > R && (h2 = R);
    }
    return { [p]: f, [m]: h2 };
  } };
};
var mn = function(a) {
  return a === void 0 && (a = {}), { name: "size", options: a, async fn(t) {
    const { placement: e, rects: o, platform: l, elements: n } = t, { apply: r = () => {
    }, ...s } = ye(a, t), i = await Ge(t, s), d = ve(e), c = We(e), p = Re(e) === "x", { width: m, height: f } = o.floating;
    let h2, g;
    d === "top" || d === "bottom" ? (h2 = d, g = c === (await (l.isRTL == null ? void 0 : l.isRTL(n.floating)) ? "start" : "end") ? "left" : "right") : (g = d, h2 = c === "end" ? "top" : "bottom");
    const E = f - i[h2], x = m - i[g], $ = !t.middlewareData.shift;
    let k = E, O = x;
    if (p) {
      const R = m - i.left - i.right;
      O = c || $ ? Xe(x, R) : R;
    } else {
      const R = f - i.top - i.bottom;
      k = c || $ ? Xe(E, R) : R;
    }
    if ($ && !c) {
      const R = Te(i.left, 0), P = Te(i.right, 0), U = Te(i.top, 0), W = Te(i.bottom, 0);
      p ? O = m - 2 * (R !== 0 || P !== 0 ? R + P : Te(i.left, i.right)) : k = f - 2 * (U !== 0 || W !== 0 ? U + W : Te(i.top, i.bottom));
    }
    await r({ ...t, availableWidth: O, availableHeight: k });
    const D = await l.getDimensions(n.floating);
    return m !== D.width || f !== D.height ? { reset: { rects: true } } : {};
  } };
};
function ae(a) {
  var t;
  return ((t = a.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function le(a) {
  return ae(a).getComputedStyle(a);
}
function Lo(a) {
  return a instanceof ae(a).Node;
}
function we(a) {
  return Lo(a) ? (a.nodeName || "").toLowerCase() : "#document";
}
function ie(a) {
  return a instanceof ae(a).HTMLElement;
}
function he(a) {
  return a instanceof ae(a).Element;
}
function ro(a) {
  return typeof ShadowRoot < "u" && (a instanceof ae(a).ShadowRoot || a instanceof ShadowRoot);
}
function qe(a) {
  const { overflow: t, overflowX: e, overflowY: o, display: l } = le(a);
  return /auto|scroll|overlay|hidden|clip/.test(t + o + e) && !["inline", "contents"].includes(l);
}
function vn(a) {
  return ["table", "td", "th"].includes(we(a));
}
function kt(a) {
  const t = zt(), e = le(a);
  return e.transform !== "none" || e.perspective !== "none" || !t && !!e.backdropFilter && e.backdropFilter !== "none" || !t && !!e.filter && e.filter !== "none" || ["transform", "perspective", "filter"].some((o) => (e.willChange || "").includes(o)) || ["paint", "layout", "strict", "content"].some((o) => (e.contain || "").includes(o));
}
function zt() {
  return !(typeof CSS > "u" || !CSS.supports) && CSS.supports("-webkit-backdrop-filter", "none");
}
function gt(a) {
  return ["html", "body", "#document"].includes(we(a));
}
var At = Math.min;
var Ie = Math.max;
var pt = Math.round;
var lt = Math.floor;
var Be = (a) => ({ x: a, y: a });
function No(a) {
  const t = le(a);
  let e = parseFloat(t.width) || 0, o = parseFloat(t.height) || 0;
  const l = ie(a), n = l ? a.offsetWidth : e, r = l ? a.offsetHeight : o, s = pt(e) !== n || pt(o) !== r;
  return s && (e = n, o = r), { width: e, height: o, $: s };
}
function Yt(a) {
  return he(a) ? a : a.contextElement;
}
function Ke(a) {
  const t = Yt(a);
  if (!ie(t))
    return Be(1);
  const e = t.getBoundingClientRect(), { width: o, height: l, $: n } = No(t);
  let r = (n ? pt(e.width) : e.width) / o, s = (n ? pt(e.height) : e.height) / l;
  return r && Number.isFinite(r) || (r = 1), s && Number.isFinite(s) || (s = 1), { x: r, y: s };
}
var io = Be(0);
function Io(a, t, e) {
  var o, l;
  if (t === void 0 && (t = true), !zt())
    return io;
  const n = a ? ae(a) : window;
  return !e || t && e !== n ? io : { x: ((o = n.visualViewport) == null ? void 0 : o.offsetLeft) || 0, y: ((l = n.visualViewport) == null ? void 0 : l.offsetTop) || 0 };
}
function Oe(a, t, e, o) {
  t === void 0 && (t = false), e === void 0 && (e = false);
  const l = a.getBoundingClientRect(), n = Yt(a);
  let r = Be(1);
  t && (o ? he(o) && (r = Ke(o)) : r = Ke(a));
  const s = Io(n, e, o);
  let i = (l.left + s.x) / r.x, d = (l.top + s.y) / r.y, c = l.width / r.x, p = l.height / r.y;
  if (n) {
    const m = ae(n), f = o && he(o) ? ae(o) : o;
    let h2 = m.frameElement;
    for (; h2 && o && f !== m; ) {
      const g = Ke(h2), E = h2.getBoundingClientRect(), x = getComputedStyle(h2), $ = E.left + (h2.clientLeft + parseFloat(x.paddingLeft)) * g.x, k = E.top + (h2.clientTop + parseFloat(x.paddingTop)) * g.y;
      i *= g.x, d *= g.y, c *= g.x, p *= g.y, i += $, d += k, h2 = ae(h2).frameElement;
    }
  }
  return dt({ width: c, height: p, x: i, y: d });
}
function _e(a) {
  return ((Lo(a) ? a.ownerDocument : a.document) || window.document).documentElement;
}
function bt(a) {
  return he(a) ? { scrollLeft: a.scrollLeft, scrollTop: a.scrollTop } : { scrollLeft: a.pageXOffset, scrollTop: a.pageYOffset };
}
function Ko(a) {
  return Oe(_e(a)).left + bt(a).scrollLeft;
}
function He(a) {
  if (we(a) === "html")
    return a;
  const t = a.assignedSlot || a.parentNode || ro(a) && a.host || _e(a);
  return ro(t) ? t.host : t;
}
function Ho(a) {
  const t = He(a);
  return gt(t) ? a.ownerDocument ? a.ownerDocument.body : a.body : ie(t) && qe(t) ? t : Ho(t);
}
function ft(a, t) {
  var e;
  t === void 0 && (t = []);
  const o = Ho(a), l = o === ((e = a.ownerDocument) == null ? void 0 : e.body), n = ae(o);
  return l ? t.concat(n, n.visualViewport || [], qe(o) ? o : []) : t.concat(o, ft(o));
}
function so(a, t, e) {
  let o;
  if (t === "viewport")
    o = function(l, n) {
      const r = ae(l), s = _e(l), i = r.visualViewport;
      let d = s.clientWidth, c = s.clientHeight, p = 0, m = 0;
      if (i) {
        d = i.width, c = i.height;
        const f = zt();
        (!f || f && n === "fixed") && (p = i.offsetLeft, m = i.offsetTop);
      }
      return { width: d, height: c, x: p, y: m };
    }(a, e);
  else if (t === "document")
    o = function(l) {
      const n = _e(l), r = bt(l), s = l.ownerDocument.body, i = Ie(n.scrollWidth, n.clientWidth, s.scrollWidth, s.clientWidth), d = Ie(n.scrollHeight, n.clientHeight, s.scrollHeight, s.clientHeight);
      let c = -r.scrollLeft + Ko(l);
      const p = -r.scrollTop;
      return le(s).direction === "rtl" && (c += Ie(n.clientWidth, s.clientWidth) - i), { width: i, height: d, x: c, y: p };
    }(_e(a));
  else if (he(t))
    o = function(l, n) {
      const r = Oe(l, true, n === "fixed"), s = r.top + l.clientTop, i = r.left + l.clientLeft, d = ie(l) ? Ke(l) : Be(1);
      return { width: l.clientWidth * d.x, height: l.clientHeight * d.y, x: i * d.x, y: s * d.y };
    }(t, e);
  else {
    const l = Io(a);
    o = { ...t, x: t.x - l.x, y: t.y - l.y };
  }
  return dt(o);
}
function zo(a, t) {
  const e = He(a);
  return !(e === t || !he(e) || gt(e)) && (le(e).position === "fixed" || zo(e, t));
}
function uo(a, t) {
  return ie(a) && le(a).position !== "fixed" ? t ? t(a) : a.offsetParent : null;
}
function co(a, t) {
  const e = ae(a);
  if (!ie(a))
    return e;
  let o = uo(a, t);
  for (; o && vn(o) && le(o).position === "static"; )
    o = uo(o, t);
  return o && (we(o) === "html" || we(o) === "body" && le(o).position === "static" && !kt(o)) ? e : o || function(l) {
    let n = He(l);
    for (; ie(n) && !gt(n); ) {
      if (kt(n))
        return n;
      n = He(n);
    }
    return null;
  }(a) || e;
}
function hn(a, t, e) {
  const o = ie(t), l = _e(t), n = e === "fixed", r = Oe(a, true, n, t);
  let s = { scrollLeft: 0, scrollTop: 0 };
  const i = Be(0);
  if (o || !o && !n)
    if ((we(t) !== "body" || qe(l)) && (s = bt(t)), ie(t)) {
      const d = Oe(t, true, n, t);
      i.x = d.x + t.clientLeft, i.y = d.y + t.clientTop;
    } else
      l && (i.x = Ko(l));
  return { x: r.left + s.scrollLeft - i.x, y: r.top + s.scrollTop - i.y, width: r.width, height: r.height };
}
var _n = { getClippingRect: function(a) {
  let { element: t, boundary: e, rootBoundary: o, strategy: l } = a;
  const n = e === "clippingAncestors" ? function(d, c) {
    const p = c.get(d);
    if (p)
      return p;
    let m = ft(d).filter((E) => he(E) && we(E) !== "body"), f = null;
    const h2 = le(d).position === "fixed";
    let g = h2 ? He(d) : d;
    for (; he(g) && !gt(g); ) {
      const E = le(g), x = kt(g);
      x || E.position !== "fixed" || (f = null), (h2 ? !x && !f : !x && E.position === "static" && f && ["absolute", "fixed"].includes(f.position) || qe(g) && !x && zo(d, g)) ? m = m.filter(($) => $ !== g) : f = E, g = He(g);
    }
    return c.set(d, m), m;
  }(t, this._c) : [].concat(e), r = [...n, o], s = r[0], i = r.reduce((d, c) => {
    const p = so(t, c, l);
    return d.top = Ie(p.top, d.top), d.right = At(p.right, d.right), d.bottom = At(p.bottom, d.bottom), d.left = Ie(p.left, d.left), d;
  }, so(t, s, l));
  return { width: i.right - i.left, height: i.bottom - i.top, x: i.left, y: i.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(a) {
  let { rect: t, offsetParent: e, strategy: o } = a;
  const l = ie(e), n = _e(e);
  if (e === n)
    return t;
  let r = { scrollLeft: 0, scrollTop: 0 }, s = Be(1);
  const i = Be(0);
  if ((l || !l && o !== "fixed") && ((we(e) !== "body" || qe(n)) && (r = bt(e)), ie(e))) {
    const d = Oe(e);
    s = Ke(e), i.x = d.x + e.clientLeft, i.y = d.y + e.clientTop;
  }
  return { width: t.width * s.x, height: t.height * s.y, x: t.x * s.x - r.scrollLeft * s.x + i.x, y: t.y * s.y - r.scrollTop * s.y + i.y };
}, isElement: he, getDimensions: function(a) {
  return No(a);
}, getOffsetParent: co, getDocumentElement: _e, getScale: Ke, async getElementRects(a) {
  let { reference: t, floating: e, strategy: o } = a;
  const l = this.getOffsetParent || co, n = this.getDimensions;
  return { reference: hn(t, await l(e), o), floating: { x: 0, y: 0, ...await n(e) } };
}, getClientRects: (a) => Array.from(a.getClientRects()), isRTL: (a) => le(a).direction === "rtl" };
function yn(a, t, e, o) {
  o === void 0 && (o = {});
  const { ancestorScroll: l = true, ancestorResize: n = true, elementResize: r = true, layoutShift: s = typeof IntersectionObserver == "function", animationFrame: i = false } = o, d = Yt(a), c = l || n ? [...d ? ft(d) : [], ...ft(t)] : [];
  c.forEach((g) => {
    l && g.addEventListener("scroll", e, { passive: true }), n && g.addEventListener("resize", e);
  });
  const p = d && s ? function(g, E) {
    let x, $ = null;
    const k = _e(g);
    function O() {
      clearTimeout(x), $ && $.disconnect(), $ = null;
    }
    return function D(R, P) {
      R === void 0 && (R = false), P === void 0 && (P = 1), O();
      const { left: U, top: W, width: F, height: I } = g.getBoundingClientRect();
      if (R || E(), !F || !I)
        return;
      const J = lt(W), H = lt(k.clientWidth - (U + F)), V = lt(k.clientHeight - (W + I)), j = lt(U);
      let Q = true;
      $ = new IntersectionObserver((Ae) => {
        const Pe = Ae[0].intersectionRatio;
        if (Pe !== P) {
          if (!Q)
            return D();
          Pe ? D(false, Pe) : x = setTimeout(() => {
            D(false, 1e-7);
          }, 100);
        }
        Q = false;
      }, { rootMargin: -J + "px " + -H + "px " + -V + "px " + -j + "px", threshold: Ie(0, At(1, P)) || 1 }), $.observe(g);
    }(true), O;
  }(d, e) : null;
  let m, f = null;
  r && (f = new ResizeObserver(e), d && !i && f.observe(d), f.observe(t));
  let h2 = i ? Oe(a) : null;
  return i && function g() {
    const E = Oe(a);
    !h2 || E.x === h2.x && E.y === h2.y && E.width === h2.width && E.height === h2.height || e(), h2 = E, m = requestAnimationFrame(g);
  }(), e(), () => {
    c.forEach((g) => {
      l && g.removeEventListener("scroll", e), n && g.removeEventListener("resize", e);
    }), p && p(), f && f.disconnect(), f = null, i && cancelAnimationFrame(m);
  };
}
var gn = (a, t, e) => {
  const o = /* @__PURE__ */ new Map(), l = { platform: _n, ...e }, n = { ...l.platform, _c: o };
  return an(a, t, { ...l, platform: n });
};
function Pt(a) {
  var t;
  return (t = a == null ? void 0 : a.$el) != null ? t : a;
}
function bn(a) {
  return {
    name: "arrow",
    options: a,
    fn(t) {
      const e = Pt(unref(a.element));
      return e == null ? {} : nn({
        element: e,
        padding: a.padding
      }).fn(t);
    }
  };
}
function Yo(a) {
  return typeof window > "u" ? 1 : (a.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function po(a, t) {
  const e = Yo(a);
  return Math.round(t * e) / e;
}
function wn(a, t, e) {
  e === void 0 && (e = {});
  const o = e.whileElementsMounted, l = computed(() => {
    var P;
    return (P = unref(e.open)) != null ? P : true;
  }), n = computed(() => unref(e.middleware)), r = computed(() => {
    var P;
    return (P = unref(e.placement)) != null ? P : "bottom";
  }), s = computed(() => {
    var P;
    return (P = unref(e.strategy)) != null ? P : "absolute";
  }), i = computed(() => {
    var P;
    return (P = unref(e.transform)) != null ? P : true;
  }), d = computed(() => Pt(a.value)), c = computed(() => Pt(t.value)), p = ref(0), m = ref(0), f = ref(s.value), h2 = ref(r.value), g = shallowRef({}), E = ref(false), x = computed(() => {
    const P = {
      position: f.value,
      left: "0",
      top: "0"
    };
    if (!c.value)
      return P;
    const U = po(c.value, p.value), W = po(c.value, m.value);
    return i.value ? {
      ...P,
      transform: "translate(" + U + "px, " + W + "px)",
      ...Yo(c.value) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: f.value,
      left: U + "px",
      top: W + "px"
    };
  });
  let $;
  function k() {
    d.value == null || c.value == null || gn(d.value, c.value, {
      middleware: n.value,
      placement: r.value,
      strategy: s.value
    }).then((P) => {
      p.value = P.x, m.value = P.y, f.value = P.strategy, h2.value = P.placement, g.value = P.middlewareData, E.value = true;
    });
  }
  function O() {
    typeof $ == "function" && ($(), $ = void 0);
  }
  function D() {
    if (O(), o === void 0) {
      k();
      return;
    }
    if (d.value != null && c.value != null) {
      $ = o(d.value, c.value, k);
      return;
    }
  }
  function R() {
    l.value || (E.value = false);
  }
  return watch([n, r, s], k, {
    flush: "sync"
  }), watch([d, c], D, {
    flush: "sync"
  }), watch(l, R, {
    flush: "sync"
  }), getCurrentScope() && onScopeDispose(O), {
    x: shallowReadonly(p),
    y: shallowReadonly(m),
    strategy: shallowReadonly(f),
    placement: shallowReadonly(h2),
    middlewareData: shallowReadonly(g),
    isPositioned: shallowReadonly(E),
    floatingStyles: x,
    update: k
  };
}
var Wo = Symbol();
var En = {
  inheritAttrs: false
};
var me = defineComponent({
  ...En,
  __name: "PopperContent",
  props: {
    asChild: { type: Boolean },
    side: { default: "bottom" },
    sideOffset: { default: 0 },
    align: { default: "center" },
    alignOffset: { default: 0 },
    arrowPadding: { default: 0 },
    avoidCollisions: { type: Boolean, default: true },
    collisionBoundary: { default: () => [] },
    collisionPadding: { default: 0 },
    sticky: { default: "partial" },
    hideWhenDetached: { type: Boolean, default: false },
    updatePositionStrategy: { default: "optimized" },
    onPlaced: {},
    prioritizePosition: { type: Boolean, default: false }
  },
  setup(a) {
    const t = a, e = inject(Kt), o = ref(), l = ref(), n = ref(), { width: r, height: s } = Ja(n), i = computed(
      () => t.side + (t.align !== "center" ? "-" + t.align : "")
    ), d = computed(() => typeof t.collisionPadding == "number" ? t.collisionPadding : { top: 0, right: 0, bottom: 0, left: 0, ...t.collisionPadding }), c = computed(() => Array.isArray(t.collisionBoundary) ? t.collisionBoundary : [t.collisionBoundary]), p = computed(() => ({
      padding: d.value,
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: c.value.length > 0
    })), m = ya(() => [
      cn({
        mainAxis: t.sideOffset + s.value,
        alignmentAxis: t.alignOffset
      }),
      t.avoidCollisions && pn({
        mainAxis: true,
        crossAxis: !!t.prioritizePosition,
        limiter: t.sticky === "partial" ? fn() : void 0,
        ...p.value
      }),
      !t.prioritizePosition && t.avoidCollisions && un({
        ...p.value
      }),
      mn({
        ...p,
        apply: ({ elements: P, rects: U, availableWidth: W, availableHeight: F }) => {
          const { width: I, height: J } = U.reference, H = P.floating.style;
          Object.assign(P.floating.style, {
            maxWidth: `${W}px`,
            maxHeight: `${F}px`
          }), H.setProperty(
            "--radix-popper-available-width",
            `${W}px`
          ), H.setProperty(
            "--radix-popper-available-height",
            `${F}px`
          ), H.setProperty(
            "--radix-popper-anchor-width",
            `${I}px`
          ), H.setProperty(
            "--radix-popper-anchor-height",
            `${J}px`
          );
        }
      }),
      n.value && bn({ element: n.value, padding: t.arrowPadding }),
      on({
        arrowWidth: r.value,
        arrowHeight: s.value
      }),
      t.hideWhenDetached && dn({ strategy: "referenceHidden", ...p.value })
    ]), { floatingStyles: f, placement: h2, isPositioned: g, middlewareData: E } = wn(
      e.anchor,
      o,
      {
        strategy: "fixed",
        placement: i,
        whileElementsMounted: (...P) => yn(...P, {
          animationFrame: t.updatePositionStrategy === "always"
        }),
        middleware: m
      }
    ), x = computed(
      () => $t(h2.value)[0]
    ), $ = computed(
      () => $t(h2.value)[1]
    );
    watchEffect(() => {
      var P;
      g.value && ((P = t.onPlaced) == null || P.call(t));
    });
    const k = computed(
      () => {
        var P;
        return ((P = E.value.arrow) == null ? void 0 : P.centerOffset) !== 0;
      }
    ), O = ref("");
    watchEffect(() => {
      l.value && (O.value = window.getComputedStyle(l.value).zIndex);
    });
    const D = computed(() => {
      var P;
      return ((P = E.value.arrow) == null ? void 0 : P.x) ?? 0;
    }), R = computed(() => {
      var P;
      return ((P = E.value.arrow) == null ? void 0 : P.y) ?? 0;
    });
    return provide(Wo, {
      placedSide: x,
      onArrowChange: (P) => {
        n.value = P;
      },
      arrowX: D,
      arrowY: R,
      shouldHideArrow: k
    }), (P, U) => {
      var W, F, I;
      return openBlock(), createElementBlock("div", {
        ref_key: "floatingRef",
        ref: o,
        "data-radix-popper-content-wrapper": "",
        style: normalizeStyle({
          ...unref(f),
          transform: unref(g) ? unref(f).transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: O.value,
          ["--radix-popper-transform-origin"]: [
            (W = unref(E).transformOrigin) == null ? void 0 : W.x,
            (F = unref(E).transformOrigin) == null ? void 0 : F.y
          ].join(" ")
        })
      }, [
        createVNode(unref(M), mergeProps(P.$attrs, {
          "as-child": t.asChild,
          "data-side": x.value,
          "data-align": $.value,
          style: {
            // if the PopperContent hasn't been placed yet (not all measurements done)
            // we prevent animations so that users's animation don't kick in too early referring wrong sides
            animation: unref(g) ? void 0 : "none",
            // hide the content if using the hide middleware and should be hidden
            opacity: (I = unref(E).hide) != null && I.referenceHidden ? 0 : void 0
          }
        }), {
          default: withCtx(() => [
            renderSlot(P.$slots, "default")
          ]),
          _: 3
        }, 16, ["as-child", "data-side", "data-align", "style"])
      ], 4);
    };
  }
});
var Cn = createBaseVNode("polygon", { points: "0,0 30,0 15,10" }, null, -1);
var xn = defineComponent({
  __name: "Arrow",
  props: {
    width: { default: 10 },
    height: { default: 5 }
  },
  setup(a) {
    const t = a, { primitiveElement: e } = B();
    return (o, l) => (openBlock(), createBlock(unref(La), mergeProps({
      ref_key: "primitiveElement",
      ref: e
    }, t, {
      width: o.width,
      height: o.height,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none"
    }), {
      default: withCtx(() => [
        renderSlot(o.$slots, "default", {}, () => [
          Cn
        ])
      ]),
      _: 3
    }, 16, ["width", "height"]));
  }
});
var $n = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
};
var Sn = {
  inheritAttrs: false
};
var Le = defineComponent({
  ...Sn,
  __name: "PopperArrow",
  props: {
    width: {},
    height: {}
  },
  setup(a) {
    const t = inject(Wo), e = computed(
      () => t != null && t.placedSide ? $n[t == null ? void 0 : t.placedSide.value] : ""
    );
    return (o, l) => {
      var n, r, s, i;
      return openBlock(), createElementBlock("span", {
        ref: (d) => {
          unref(t).onArrowChange(d);
        },
        style: normalizeStyle({
          position: "absolute",
          left: (n = unref(t).arrowX) != null && n.value ? `${(r = unref(t).arrowX) == null ? void 0 : r.value}px` : void 0,
          top: (s = unref(t).arrowY) != null && s.value ? `${(i = unref(t).arrowY) == null ? void 0 : i.value}px` : void 0,
          [e.value]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[unref(t).placedSide.value],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[unref(t).placedSide.value],
          visibility: unref(t).shouldHideArrow.value ? "hidden" : void 0
        })
      }, [
        createVNode(xn, mergeProps(o.$attrs, { style: {
          display: "block"
        } }), null, 16)
      ], 4);
    };
  }
});
var Wt = Symbol();
var er = defineComponent({
  __name: "TooltipRoot",
  props: {
    defaultOpen: { type: Boolean, default: false },
    open: { type: Boolean, default: void 0 },
    delayDuration: { default: 700 },
    disableHoverableContent: { type: Boolean }
  },
  emits: ["update:open"],
  setup(a, { emit: t }) {
    const e = a, o = K(e, "open", t, {
      defaultValue: e.defaultOpen,
      passive: true
    });
    return provide(Wt, {
      open: o,
      showTooltip: () => {
        o.value = true;
      },
      hideTooltip: () => {
        o.value = false;
      }
    }), (l, n) => (openBlock(), createBlock(unref(se), null, {
      default: withCtx(() => [
        renderSlot(l.$slots, "default")
      ]),
      _: 3
    }));
  }
});
var tr = defineComponent({
  __name: "TooltipTrigger",
  setup(a) {
    const t = inject(Wt), { primitiveElement: e, currentElement: o } = B();
    async function l(r) {
      await Po(r, o.value) && (t == null || t.showTooltip());
    }
    const n = computed(() => t != null && t.open.value ? "closed" : "instant-open");
    return (r, s) => (openBlock(), createBlock(unref(fe), { asChild: "" }, {
      default: withCtx(() => {
        var i, d;
        return [
          createVNode(unref(X), {
            type: "button",
            ref_key: "primitiveElement",
            ref: e,
            "data-state": n.value,
            "aria-expanded": ((i = unref(t)) == null ? void 0 : i.open.value) || false,
            onMouseenter: l,
            onMouseleave: (d = unref(t)) == null ? void 0 : d.hideTooltip,
            style: { cursor: "default" }
          }, {
            default: withCtx(() => [
              renderSlot(r.$slots, "default")
            ]),
            _: 3
          }, 8, ["data-state", "aria-expanded", "onMouseleave"])
        ];
      }),
      _: 3
    }));
  }
});
var Ut = defineComponent({
  __name: "BasePortal",
  props: {
    to: { default: "body" }
  },
  setup(a) {
    const t = a;
    return (e, o) => (openBlock(), createBlock(Teleport, {
      to: t.to
    }, [
      renderSlot(e.$slots, "default")
    ], 8, ["to"]));
  }
});
var or = defineComponent({
  __name: "TooltipPortal",
  props: {
    to: { default: "body" }
  },
  setup(a) {
    const t = a;
    return (e, o) => (openBlock(), createBlock(Ut, {
      to: t.to
    }, {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["to"]));
  }
});
var ar = defineComponent({
  __name: "TooltipContent",
  props: {
    asChild: { type: Boolean },
    forceMount: { type: Boolean },
    side: { default: "top" },
    sideOffset: {},
    align: { default: "center" },
    alignOffset: {},
    arrowPadding: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    onPlaced: {},
    prioritizePosition: { type: Boolean }
  },
  setup(a) {
    const t = a, e = inject(Wt);
    return (o, l) => {
      var n;
      return (n = unref(e)) != null && n.open.value ? (openBlock(), createBlock(unref(me), normalizeProps(mergeProps({ key: 0 }, t)), {
        default: withCtx(() => {
          var r;
          return [
            createVNode(unref(M), {
              ref: "primitiveElement",
              "data-state": (r = unref(e)) != null && r.open.value ? "delayed-open" : "closed",
              "data-side": "top",
              "data-align": "center",
              role: "tooltip",
              tabindex: "-1",
              asChild: t.asChild
            }, {
              default: withCtx(() => [
                renderSlot(o.$slots, "default")
              ]),
              _: 3
            }, 8, ["data-state", "asChild"])
          ];
        }),
        _: 3
      }, 16)) : createCommentVNode("", true);
    };
  }
});
var nr = defineComponent({
  __name: "TooltipArrow",
  setup(a) {
    return (t, e) => (openBlock(), createBlock(unref(Le)));
  }
});
var Gt = Symbol();
var lr = defineComponent({
  __name: "HoverCardRoot",
  props: {
    open: { type: Boolean, default: void 0 },
    defaultOpen: { type: Boolean, default: false },
    openDelay: { default: 700 },
    closeDelay: { default: 300 }
  },
  emits: ["update:open"],
  setup(a, { emit: t }) {
    const e = a, o = K(e, "open", t, {
      defaultValue: e.defaultOpen,
      passive: true
    });
    return provide(Gt, {
      open: o,
      showTooltip: () => {
        o.value = true;
      },
      hideTooltip: () => {
        o.value = false;
      },
      openDelay: e.openDelay,
      closeDelay: e.closeDelay,
      isHover: false
    }), (l, n) => (openBlock(), createBlock(unref(se), null, {
      default: withCtx(() => [
        renderSlot(l.$slots, "default")
      ]),
      _: 3
    }));
  }
});
var rr = defineComponent({
  __name: "HoverCardTrigger",
  setup(a) {
    const t = inject(Gt), { primitiveElement: e, currentElement: o } = B();
    async function l(r) {
      await Po(
        r,
        o.value,
        t == null ? void 0 : t.openDelay
      ) && (t == null || t.showTooltip());
    }
    async function n(r) {
      t.isHover = false, await To(r, t == null ? void 0 : t.closeDelay) && !(t != null && t.isHover) && (t == null || t.hideTooltip());
    }
    return (r, s) => (openBlock(), createBlock(unref(fe), { asChild: "" }, {
      default: withCtx(() => {
        var i, d;
        return [
          createVNode(unref(X), {
            type: "button",
            ref_key: "primitiveElement",
            ref: e,
            "aria-expanded": ((i = unref(t)) == null ? void 0 : i.open.value) || false,
            "data-state": (d = unref(t)) != null && d.open.value ? "open" : "closed",
            onMouseover: s[0] || (s[0] = (c) => unref(t).isHover = true),
            onMouseenter: l,
            onMouseleave: n,
            style: { cursor: "default" }
          }, {
            default: withCtx(() => [
              renderSlot(r.$slots, "default")
            ]),
            _: 3
          }, 8, ["aria-expanded", "data-state"])
        ];
      }),
      _: 3
    }));
  }
});
var ir = defineComponent({
  __name: "HoverCardPortal",
  props: {
    to: { default: "body" }
  },
  setup(a) {
    const t = a;
    return (e, o) => (openBlock(), createBlock(Ut, {
      to: t.to
    }, {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["to"]));
  }
});
var sr = defineComponent({
  __name: "HoverCardContent",
  props: {
    asChild: { type: Boolean },
    forceMount: { type: Boolean },
    side: { default: "bottom" },
    sideOffset: {},
    align: { default: "center" },
    alignOffset: {},
    arrowPadding: {},
    avoidCollisions: { type: Boolean, default: true },
    collisionBoundary: {},
    collisionPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    onPlaced: {},
    prioritizePosition: { type: Boolean }
  },
  setup(a) {
    const t = a, e = inject(Gt);
    async function o(l) {
      e.isHover = false, await To(l, e == null ? void 0 : e.closeDelay) && !(e != null && e.isHover) && (e == null || e.hideTooltip());
    }
    return (l, n) => {
      var r, s;
      return (r = unref(e)) != null && r.open.value ? (openBlock(), createBlock(unref(me), mergeProps({ key: 0 }, t, {
        onMouseover: n[0] || (n[0] = (i) => unref(e).isHover = true),
        onMouseleave: o,
        "data-state": (s = unref(e)) != null && s.open.value ? "delayed-open" : "closed",
        role: "tooltip",
        tabindex: "-1",
        "as-child": l.asChild
      }), {
        default: withCtx(() => [
          renderSlot(l.$slots, "default")
        ]),
        _: 3
      }, 16, ["data-state", "as-child"])) : createCommentVNode("", true);
    };
  }
});
var ur = defineComponent({
  __name: "HoverCardArrow",
  setup(a) {
    return (t, e) => (openBlock(), createBlock(unref(Le)));
  }
});
var wt = Symbol();
var dr = defineComponent({
  __name: "PopoverRoot",
  props: {
    defaultOpen: { type: Boolean, default: false },
    open: { type: Boolean, default: void 0 },
    modal: { type: Boolean, default: false }
  },
  emits: ["update:open"],
  setup(a, { emit: t }) {
    const e = a, o = K(e, "open", t, {
      defaultValue: e.defaultOpen,
      passive: true
    }), l = ref();
    return provide(wt, {
      open: o,
      showPopover: () => {
        o.value = true;
      },
      hidePopover: () => {
        o.value = false;
      },
      triggerElement: l
    }), (n, r) => (openBlock(), createBlock(unref(se), null, {
      default: withCtx(() => [
        renderSlot(n.$slots, "default")
      ]),
      _: 3
    }));
  }
});
var cr = defineComponent({
  __name: "PopoverTrigger",
  setup(a) {
    const t = inject(wt), { primitiveElement: e, currentElement: o } = B();
    onMounted(() => {
      t.triggerElement.value = o.value;
    });
    function l() {
      t != null && t.open.value ? t == null || t.hidePopover() : t == null || t.showPopover();
    }
    return (n, r) => (openBlock(), createBlock(unref(fe), { asChild: "" }, {
      default: withCtx(() => {
        var s, i;
        return [
          createVNode(unref(X), {
            type: "button",
            ref_key: "primitiveElement",
            ref: e,
            "aria-expanded": ((s = unref(t)) == null ? void 0 : s.open.value) || false,
            "data-state": (i = unref(t)) != null && i.open.value ? "open" : "closed",
            onClick: l
          }, {
            default: withCtx(() => [
              renderSlot(n.$slots, "default")
            ]),
            _: 3
          }, 8, ["aria-expanded", "data-state"])
        ];
      }),
      _: 3
    }));
  }
});
var pr = defineComponent({
  __name: "PopoverPortal",
  props: {
    to: { default: "body" }
  },
  setup(a) {
    const t = a;
    return (e, o) => (openBlock(), createBlock(Ut, {
      to: t.to
    }, {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["to"]));
  }
});
function kn(a, t) {
  if (t) {
    const e = t.getBoundingClientRect();
    return !(a.clientX > e.left && a.clientX < e.right && a.clientY > e.top && a.clientY < e.bottom);
  }
}
var fr = defineComponent({
  __name: "PopoverContent",
  props: {
    asChild: { type: Boolean },
    forceMount: { type: Boolean },
    side: { default: "bottom" },
    sideOffset: {},
    align: { default: "center" },
    alignOffset: {},
    arrowPadding: {},
    avoidCollisions: { type: Boolean, default: true },
    collisionBoundary: {},
    collisionPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    onPlaced: {},
    prioritizePosition: { type: Boolean }
  },
  setup(a) {
    const t = a, e = inject(wt), { primitiveElement: o, currentElement: l } = B();
    watchEffect(() => {
      l.value && (e != null && e.open.value ? (Rt(l.value), window.addEventListener("mousedown", n), window.addEventListener("keydown", r)) : e != null && e.triggerElement.value && (e == null || e.triggerElement.value.focus(), s()));
    });
    function n(i) {
      var c;
      if ((c = e == null ? void 0 : e.triggerElement.value) != null && c.contains(i.target))
        return;
      kn(i, l.value) && (e == null || e.hidePopover(), i.preventDefault(), i.stopPropagation());
    }
    function r(i) {
      i.key === "Escape" && (e == null || e.hidePopover());
    }
    function s() {
      window.removeEventListener("mousedown", n), window.removeEventListener("keydown", r);
    }
    return onUnmounted(() => {
      s();
    }), (i, d) => {
      var c;
      return (c = unref(e)) != null && c.open.value ? (openBlock(), createBlock(unref(me), mergeProps({
        key: 0,
        ref_key: "primitiveElement",
        ref: o
      }, t), {
        default: withCtx(() => {
          var p, m;
          return [
            (p = unref(e)) != null && p.open.value ? (openBlock(), createBlock(unref(M), {
              key: 0,
              "data-state": (m = unref(e)) != null && m.open.value ? "open" : "closed",
              "data-side": t.side,
              "data-align": t.align,
              role: "tooltip",
              asChild: t.asChild
            }, {
              default: withCtx(() => [
                renderSlot(i.$slots, "default")
              ]),
              _: 3
            }, 8, ["data-state", "data-side", "data-align", "asChild"])) : createCommentVNode("", true)
          ];
        }),
        _: 3
      }, 16)) : createCommentVNode("", true);
    };
  }
});
var mr = defineComponent({
  __name: "PopoverArrow",
  setup(a) {
    return (t, e) => (openBlock(), createBlock(unref(Le)));
  }
});
var vr = defineComponent({
  __name: "PopoverClose",
  setup(a) {
    const t = inject(wt);
    return (e, o) => {
      var l, n, r;
      return openBlock(), createBlock(unref(X), {
        type: "button",
        "aria-expanded": ((l = unref(t)) == null ? void 0 : l.open.value) || false,
        "data-state": (n = unref(t)) != null && n.open.value ? "open" : "closed",
        onClick: (r = unref(t)) == null ? void 0 : r.hidePopover
      }, {
        default: withCtx(() => [
          renderSlot(e.$slots, "default")
        ]),
        _: 3
      }, 8, ["aria-expanded", "data-state", "onClick"]);
    };
  }
});
var Se = Symbol();
var hr = defineComponent({
  __name: "DropdownMenuRoot",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modelValue: { type: Boolean },
    orientation: { default: "vertical" },
    dir: {}
  },
  emits: ["update:modelValue"],
  setup(a, { emit: t }) {
    const e = a, o = K(e, "modelValue", t, {
      passive: true
    }), l = ref(), n = ref();
    return provide(Se, {
      selectedElement: l,
      changeSelected: (r) => {
        l.value = r, l.value.focus();
      },
      modelValue: o,
      showTooltip: () => {
        o.value = true;
      },
      hideTooltip: () => {
        o.value = false;
      },
      triggerElement: n,
      itemsArray: [],
      orientation: e.orientation
    }), (r, s) => (openBlock(), createBlock(unref(se), null, {
      default: withCtx(() => [
        renderSlot(r.$slots, "default")
      ]),
      _: 3
    }));
  }
});
var _r = defineComponent({
  __name: "DropdownMenuTrigger",
  setup(a) {
    const t = inject(
      Se
    ), { primitiveElement: e, currentElement: o } = B();
    onMounted(() => {
      t.triggerElement.value = o.value;
    });
    function l() {
      t != null && t.modelValue.value ? t == null || t.hideTooltip() : t == null || t.showTooltip();
    }
    async function n(r) {
      var s;
      (r.key === "ArrowDown" || r.key === "Enter" || r.keyCode === 32) && (t == null || t.showTooltip(), await nextTick(), t == null || t.changeSelected((s = t.itemsArray) == null ? void 0 : s[0]));
    }
    return (r, s) => (openBlock(), createBlock(unref(fe), { asChild: "" }, {
      default: withCtx(() => {
        var i, d;
        return [
          createVNode(unref(X), {
            type: "button",
            ref_key: "primitiveElement",
            ref: e,
            "aria-expanded": ((i = unref(t)) == null ? void 0 : i.modelValue.value) || false,
            "data-state": (d = unref(t)) != null && d.modelValue.value ? "open" : "closed",
            "as-child": false,
            onClick: l,
            onKeydown: withModifiers(n, ["prevent"])
          }, {
            default: withCtx(() => [
              renderSlot(r.$slots, "default")
            ]),
            _: 3
          }, 8, ["aria-expanded", "data-state", "onKeydown"])
        ];
      }),
      _: 3
    }));
  }
});
var An = {};
function Pn(a, t) {
  return openBlock(), createBlock(Teleport, { to: "body" }, [
    renderSlot(a.$slots, "default")
  ]);
}
var yr = De(An, [["render", Pn]]);
var gr = defineComponent({
  __name: "DropdownMenuContent",
  props: {
    asChild: { type: Boolean },
    loop: { type: Boolean },
    side: { default: "bottom" },
    sideOffset: {},
    align: { default: "center" },
    alignOffset: {},
    arrowPadding: {},
    avoidCollisions: { type: Boolean, default: true },
    collisionBoundary: {},
    collisionPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    onPlaced: {},
    prioritizePosition: { type: Boolean }
  },
  setup(a) {
    const t = a, e = inject(Se), { primitiveElement: o, currentElement: l } = B(), { createCollection: n, getItems: r } = $e();
    n(l), watchEffect(() => {
      l.value && (e != null && e.modelValue.value ? (document.querySelector("body").style.pointerEvents = "none", e.itemsArray = r(l.value)) : e != null && e.triggerElement.value && s());
    });
    function s() {
      document.querySelector("body").style.pointerEvents = "", setTimeout(() => {
        var i;
        (i = e == null ? void 0 : e.triggerElement.value) == null || i.focus();
      }, 0);
    }
    return xe(l, (i) => {
      i.target.closest('[role="menuitem"]') || e == null || e.hideTooltip();
    }), (i, d) => {
      var c;
      return (c = unref(e)) != null && c.modelValue.value ? (openBlock(), createBlock(unref(me), normalizeProps(mergeProps({ key: 0 }, t)), {
        default: withCtx(() => {
          var p;
          return [
            createVNode(unref(M), {
              ref_key: "primitiveElement",
              ref: o,
              "data-state": (p = unref(e)) != null && p.modelValue.value ? "open" : "closed",
              "data-side": t.side,
              "data-align": t.align,
              role: "tooltip",
              asChild: t.asChild,
              style: { "pointer-events": "auto" }
            }, {
              default: withCtx(() => [
                renderSlot(i.$slots, "default")
              ]),
              _: 3
            }, 8, ["data-state", "data-side", "data-align", "asChild"])
          ];
        }),
        _: 3
      }, 16)) : createCommentVNode("", true);
    };
  }
});
var br = defineComponent({
  __name: "DropdownMenuArrow",
  setup(a) {
    return (t, e) => (openBlock(), createBlock(unref(Le)));
  }
});
var oe = defineComponent({
  __name: "BaseMenuItem",
  props: {
    disabled: { type: Boolean },
    rootProvider: {},
    subProvider: {},
    orientation: {},
    role: { default: "menuitem" },
    dataState: {}
  },
  emits: [
    "handle-click",
    "horizontal-keydown",
    "mouseover",
    "escape-keydown"
  ],
  setup(a, { emit: t }) {
    const e = a, { getItems: o } = $e(), { primitiveElement: l, currentElement: n } = B();
    function r(p) {
      var f, h2, g, E;
      if (p.key === "Escape")
        return i(), t("escape-keydown", p);
      if (p.keyCode === 32 || p.key === "Enter") {
        p.target.click();
        return;
      }
      if (p.key === "ArrowLeft") {
        const x = (f = e.subProvider) == null ? void 0 : f.triggerElement.value;
        if (x)
          return (h2 = e.rootProvider) == null || h2.changeSelected(x), (g = e.subProvider) == null ? void 0 : g.hideTooltip();
      }
      if (p.key === "ArrowRight" || p.key === "ArrowLeft")
        return t("horizontal-keydown", p);
      const m = ne(
        p,
        n.value,
        void 0,
        {
          arrowKeyOptions: "vertical",
          itemsArray: o()
        }
      );
      m && ((E = e.rootProvider) == null || E.changeSelected(m));
    }
    function s() {
      var p;
      e.disabled || (p = e.rootProvider) == null || p.changeSelected(n.value);
    }
    function i() {
      document.querySelector("body").style.pointerEvents = "", setTimeout(() => {
        var p, m;
        (m = (p = e.rootProvider) == null ? void 0 : p.triggerElement.value) == null || m.focus();
      }, 0);
    }
    function d() {
      t("handle-click");
    }
    function c() {
      t("mouseover");
    }
    return (p, m) => {
      var f, h2, g;
      return openBlock(), createBlock(unref(M), {
        role: e.role,
        ref_key: "primitiveElement",
        ref: l,
        onKeydown: withModifiers(r, ["prevent"]),
        "data-state": e.dataState,
        "data-radix-vue-collection-item": "",
        onMouseenter: s,
        onMouseover: c,
        onClick: d,
        "data-highlighted": ((f = p.rootProvider) == null ? void 0 : f.selectedElement.value) === unref(n) ? "" : null,
        "aria-disabled": e.disabled ? true : void 0,
        "data-disabled": e.disabled ? "" : void 0,
        "data-orientation": (h2 = p.rootProvider) == null ? void 0 : h2.orientation,
        tabindex: ((g = p.rootProvider) == null ? void 0 : g.selectedElement.value) === unref(n) ? "0" : "-1"
      }, {
        default: withCtx(() => [
          renderSlot(p.$slots, "default")
        ]),
        _: 3
      }, 8, ["role", "onKeydown", "data-state", "data-highlighted", "aria-disabled", "data-disabled", "data-orientation", "tabindex"]);
    };
  }
});
var Je = Symbol();
var wr = defineComponent({
  __name: "DropdownMenuSub",
  props: {
    modelValue: { type: Boolean },
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    delayDuration: { default: 700 },
    disableHoverableContent: { type: Boolean },
    orientation: { default: "vertical" }
  },
  emits: ["update:modelValue"],
  setup(a, { emit: t }) {
    const e = a, o = K(e, "modelValue", t, {
      passive: true
    }), l = ref(), n = inject(Je);
    return provide(Je, {
      modelValue: o,
      showTooltip: () => {
        o.value = true;
      },
      hideTooltip: () => {
        o.value = false;
      },
      triggerElement: l,
      itemsArray: [],
      orientation: e.orientation,
      triggerId: be(),
      contentId: be(),
      parentContext: n
    }), (r, s) => (openBlock(), createBlock(unref(se), null, {
      default: withCtx(() => [
        renderSlot(r.$slots, "default")
      ]),
      _: 3
    }));
  }
});
var Er = defineComponent({
  __name: "DropdownMenuItem",
  props: {
    asChild: { type: Boolean },
    value: {},
    disabled: { type: Boolean },
    textValue: {}
  },
  setup(a) {
    const t = a, e = inject(
      Se
    ), o = inject(
      Je
    );
    function l() {
      e != null && e.selectedElement.value && e.hideTooltip();
    }
    function n() {
      e == null || e.hideTooltip();
    }
    return (r, s) => {
      var i;
      return openBlock(), createBlock(oe, {
        disabled: t.disabled,
        rootProvider: unref(e),
        subProvider: unref(o),
        orientation: (i = unref(e)) == null ? void 0 : i.orientation,
        onHandleClick: l,
        onEscapeKeydown: n
      }, {
        default: withCtx(() => [
          renderSlot(r.$slots, "default")
        ]),
        _: 3
      }, 8, ["disabled", "rootProvider", "subProvider", "orientation"]);
    };
  }
});
var Tn = Symbol();
var Cr = defineComponent({
  __name: "DropdownMenuGroup",
  props: {
    type: { default: "single" },
    value: {},
    defaultValue: {},
    disabled: { type: Boolean },
    rovingFocus: { type: Boolean },
    orientation: {},
    dir: {},
    loop: { type: Boolean },
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(a, { emit: t }) {
    const e = a, { primitiveElement: o, currentElement: l } = B();
    return provide(Tn, {
      type: e.type,
      modelValue: toRef(() => e.modelValue),
      changeModelValue: (n) => {
        if (e.type === "single")
          t("update:modelValue", n);
        else {
          let r = e.modelValue;
          if (r.includes(n)) {
            let s = r.findIndex((i) => i === n);
            r.splice(s, 1);
          } else
            r.push(n);
          t("update:modelValue", r);
        }
      },
      parentElement: l
    }), (n, r) => (openBlock(), createBlock(unref(M), {
      ref_key: "primitiveElement",
      ref: o,
      role: "group",
      dir: e.dir,
      "aria-label": "Text alignment"
    }, {
      default: withCtx(() => [
        renderSlot(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["dir"]));
  }
});
var xr = defineComponent({
  __name: "DropdownMenuSeparator",
  props: {
    orientation: {},
    decorative: { type: Boolean },
    asChild: { type: Boolean }
  },
  setup(a) {
    const t = a;
    return (e, o) => (openBlock(), createBlock(ze, {
      orientation: t.orientation,
      decorative: t.decorative
    }, null, 8, ["orientation", "decorative"]));
  }
});
var Xt = Symbol();
var Bn = ["id", "checked", "name", "disabled"];
var $r = defineComponent({
  __name: "DropdownMenuCheckboxItem",
  props: {
    asChild: { type: Boolean },
    checked: { type: Boolean },
    modelValue: { type: Boolean },
    id: {},
    name: {},
    value: {},
    disabled: { type: Boolean },
    onSelect: {},
    textValue: {}
  },
  emits: ["update:modelValue"],
  setup(a, { emit: t }) {
    const e = a, o = inject(
      Se
    ), l = K(e, "modelValue", t, {
      passive: true
    }), n = computed(() => l.value ? "checked" : "unchecked");
    function r() {
      l.value = !l.value;
    }
    function s() {
      o == null || o.hideTooltip();
    }
    return provide(Xt, {
      modelValue: l
    }), (i, d) => {
      var c;
      return openBlock(), createBlock(oe, {
        ref: "currentElement",
        disabled: e.disabled,
        rootProvider: unref(o),
        orientation: (c = unref(o)) == null ? void 0 : c.orientation,
        onHandleClick: r,
        onEscapeKeydown: s,
        role: "menuitemcheckbox",
        "data-state": n.value,
        "aria-checked": !!e.modelValue
      }, {
        default: withCtx(() => [
          createBaseVNode("input", mergeProps({
            type: "checkbox",
            id: e.id
          }, e.modelValue, {
            checked: e.modelValue,
            name: e.name,
            "aria-hidden": "true",
            disabled: e.disabled,
            style: { opacity: "0", position: "absolute", inset: "0" }
          }), null, 16, Bn),
          renderSlot(i.$slots, "default")
        ]),
        _: 3
      }, 8, ["disabled", "rootProvider", "orientation", "data-state", "aria-checked"]);
    };
  }
});
var Sr = defineComponent({
  __name: "DropdownMenuItemIndicator",
  setup(a) {
    const t = inject(Xt);
    return (e, o) => {
      var l;
      return (l = unref(t)) != null && l.modelValue.value ? (openBlock(), createBlock(unref(te), {
        key: 0,
        style: { "pointer-events": "none" }
      }, {
        default: withCtx(() => [
          renderSlot(e.$slots, "default")
        ]),
        _: 3
      })) : createCommentVNode("", true);
    };
  }
});
var kr = defineComponent({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    for: {}
  },
  setup(a) {
    const t = a;
    return (e, o) => (openBlock(), createBlock(unref(je), {
      for: t.for
    }, {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["for"]));
  }
});
var Uo = "RadioGroup";
var Ar = defineComponent({
  __name: "DropdownMenuRadioGroup",
  props: {
    asChild: { type: Boolean },
    value: {},
    defaultValue: {},
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(a, { emit: t }) {
    const e = a, { primitiveElement: o, currentElement: l } = B(), n = K(e, "modelValue", t, {
      passive: true
    });
    return provide(Uo, {
      modelValue: n,
      changeModelValue: (r) => {
        n.value = r;
      },
      parentElement: l
    }), (r, s) => (openBlock(), createBlock(unref(M), {
      ref_key: "primitiveElement",
      ref: o,
      role: "radiogroup",
      "aria-label": "radiogroup"
    }, {
      default: withCtx(() => [
        renderSlot(r.$slots, "default")
      ]),
      _: 3
    }, 512));
  }
});
var Pr = defineComponent({
  __name: "DropdownMenuRadioItem",
  props: {
    asChild: { type: Boolean },
    value: {},
    disabled: { type: Boolean },
    id: {},
    name: {},
    onSelect: {},
    textValue: {}
  },
  setup(a) {
    const t = a, e = inject(
      Se
    ), o = inject(
      Uo
    ), l = computed(() => {
      var i;
      return ((i = o == null ? void 0 : o.modelValue) == null ? void 0 : i.value) === t.value ? "on" : "off";
    });
    function n() {
      if (e != null && e.selectedElement.value)
        return o == null ? void 0 : o.changeModelValue(t.value);
    }
    function r() {
      e == null || e.hideTooltip();
    }
    const s = computed(
      () => {
        var i;
        return ((i = o == null ? void 0 : o.modelValue) == null ? void 0 : i.value) === t.value;
      }
    );
    return provide(Xt, {
      modelValue: s
    }), (i, d) => {
      var c;
      return openBlock(), createBlock(oe, {
        disabled: t.disabled,
        rootProvider: unref(e),
        orientation: (c = unref(e)) == null ? void 0 : c.orientation,
        "data-radix-vue-radio-value": t.value,
        onHandleClick: n,
        onEscapeKeydown: r,
        onClick: n,
        role: "menuitemradio",
        "data-state": l.value
      }, {
        default: withCtx(() => [
          renderSlot(i.$slots, "default")
        ]),
        _: 3
      }, 8, ["disabled", "rootProvider", "orientation", "data-radix-vue-radio-value", "data-state"]);
    };
  }
});
var Tr = defineComponent({
  __name: "DropdownMenuSubContent",
  props: {
    asChild: { type: Boolean },
    loop: { type: Boolean },
    side: { default: "right" },
    sideOffset: {},
    align: { default: "start" },
    alignOffset: {},
    arrowPadding: {},
    avoidCollisions: { type: Boolean, default: true },
    collisionBoundary: {},
    collisionPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    onPlaced: {},
    prioritizePosition: { type: Boolean }
  },
  setup(a) {
    const t = a, e = inject(
      Se
    ), o = inject(
      Je
    ), { primitiveElement: l, currentElement: n } = B(), { createCollection: r } = $e();
    r(n), watchEffect(() => {
      n.value && o != null && o.modelValue.value && s();
    }), watch(
      () => e == null ? void 0 : e.selectedElement.value,
      (i) => {
        var c;
        if (!(o != null && o.modelValue.value))
          return;
        const d = Array.from(
          ((c = i == null ? void 0 : i.closest('[role="tooltip"]')) == null ? void 0 : c.querySelectorAll(
            "[data-radix-vue-collection-item]:not([data-disabled])"
          )) ?? []
        );
        d != null && d.length && d.includes(o.triggerElement.value) && (e == null ? void 0 : e.selectedElement.value) !== (o == null ? void 0 : o.triggerElement.value) && (o == null || o.hideTooltip());
      }
    );
    function s() {
      const i = Array.from(
        n.value.querySelectorAll(
          "[data-radix-vue-collection-item]:not([data-disabled])"
        )
      );
      return o.itemsArray = i, i;
    }
    return xe(n, (i) => {
      i.target.closest('[role="menuitem"]') || o == null || o.hideTooltip();
    }), (i, d) => {
      var c;
      return (c = unref(o)) != null && c.modelValue.value ? (openBlock(), createBlock(unref(me), normalizeProps(mergeProps({ key: 0 }, t)), {
        default: withCtx(() => {
          var p;
          return [
            createVNode(unref(M), {
              ref_key: "primitiveElement",
              ref: l,
              "data-state": (p = unref(o)) != null && p.modelValue.value ? "open" : "closed",
              "data-side": t.side,
              "data-align": t.align,
              "data-orientation": unref(o).orientation,
              "aria-labelledby": unref(o).triggerId,
              role: "tooltip",
              asChild: t.asChild,
              style: { "pointer-events": "auto" }
            }, {
              default: withCtx(() => [
                renderSlot(i.$slots, "default")
              ]),
              _: 3
            }, 8, ["data-state", "data-side", "data-align", "data-orientation", "aria-labelledby", "asChild"])
          ];
        }),
        _: 3
      }, 16)) : createCommentVNode("", true);
    };
  }
});
var Br = defineComponent({
  __name: "DropdownMenuSubTrigger",
  setup(a) {
    const t = inject(
      Se
    ), e = inject(
      Je
    ), { primitiveElement: o, currentElement: l } = B();
    onMounted(() => {
      e.triggerElement.value = l.value;
    });
    async function n() {
      var p;
      e == null || e.showTooltip(), await nextTick();
      const c = (p = e == null ? void 0 : e.itemsArray) == null ? void 0 : p[0];
      t.selectedElement.value = c, c == null || c.focus();
    }
    function r() {
      e != null && e.modelValue.value || n();
    }
    async function s(c) {
      c.key === "ArrowRight" && n();
    }
    const i = computed(() => e != null && e.modelValue.value ? "open" : "closed");
    function d() {
      return e == null ? void 0 : e.showTooltip();
    }
    return (c, p) => (openBlock(), createBlock(unref(fe), { asChild: "" }, {
      default: withCtx(() => {
        var m, f, h2, g, E;
        return [
          createVNode(oe, {
            ref_key: "primitiveElement",
            ref: o,
            id: (m = unref(e)) == null ? void 0 : m.triggerId,
            rootProvider: unref(t),
            subProvider: (f = unref(e)) == null ? void 0 : f.parentContext,
            "aria-expanded": (h2 = unref(e)) == null ? void 0 : h2.modelValue.value,
            "aria-controls": (g = unref(e)) == null ? void 0 : g.contentId,
            "data-state": i.value,
            "data-orientation": (E = unref(t)) == null ? void 0 : E.orientation,
            "aria-haspopup": "menu",
            onHandleClick: r,
            onMouseover: d,
            onHorizontalKeydown: s
          }, {
            default: withCtx(() => [
              renderSlot(c.$slots, "default")
            ]),
            _: 3
          }, 8, ["id", "rootProvider", "subProvider", "aria-expanded", "aria-controls", "data-state", "data-orientation"])
        ];
      }),
      _: 3
    }));
  }
});
var ke = Symbol();
var Or = defineComponent({
  __name: "ContextMenuRoot",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modelValue: { type: Boolean },
    orientation: { default: "vertical" },
    dir: {}
  },
  emits: ["update:modelValue"],
  setup(a, { emit: t }) {
    const e = a, o = K(e, "modelValue", t, {
      passive: true
    }), l = ref(), n = ref(), r = ref(0), s = ref(0);
    return provide(ke, {
      selectedElement: l,
      changeSelected: (i) => {
        l.value = i, l.value.focus();
      },
      modelValue: o,
      showTooltip: () => {
        o.value = true;
      },
      hideTooltip: () => {
        o.value = false;
      },
      triggerElement: n,
      itemsArray: [],
      orientation: e.orientation,
      clientX: r,
      clientY: s
    }), (i, d) => (openBlock(), createBlock(unref(se), null, {
      default: withCtx(() => [
        renderSlot(i.$slots, "default")
      ]),
      _: 3
    }));
  }
});
var Mr = defineComponent({
  __name: "ContextMenuTrigger",
  setup(a) {
    const t = inject(
      ke
    ), e = {
      getBoundingClientRect() {
        return {
          width: 0,
          height: 0,
          x: t == null ? void 0 : t.clientX.value,
          y: t == null ? void 0 : t.clientY.value,
          top: t == null ? void 0 : t.clientY.value,
          left: t == null ? void 0 : t.clientX.value,
          right: t == null ? void 0 : t.clientX.value,
          bottom: t == null ? void 0 : t.clientY.value
        };
      }
    };
    function o(l) {
      t != null && t.modelValue.value ? t == null || t.hideTooltip() : (t.clientX.value = l.clientX, t.clientY.value = l.clientY, t == null || t.showTooltip());
    }
    return onMounted(() => {
      t.triggerElement.value = e;
    }), (l, n) => (openBlock(), createBlock(unref(fe), {
      element: e,
      asChild: ""
    }, {
      default: withCtx(() => {
        var r, s;
        return [
          createVNode(unref(X), {
            type: "button",
            "aria-expanded": ((r = unref(t)) == null ? void 0 : r.modelValue.value) || false,
            "data-state": (s = unref(t)) != null && s.modelValue.value ? "open" : "closed",
            onContextmenu: withModifiers(o, ["prevent"])
          }, {
            default: withCtx(() => [
              renderSlot(l.$slots, "default")
            ]),
            _: 3
          }, 8, ["aria-expanded", "data-state", "onContextmenu"])
        ];
      }),
      _: 3
    }));
  }
});
var On = {};
function Mn(a, t) {
  return openBlock(), createBlock(Teleport, { to: "body" }, [
    renderSlot(a.$slots, "default")
  ]);
}
var Dr = De(On, [["render", Mn]]);
var Rr = defineComponent({
  __name: "ContextMenuContent",
  props: {
    asChild: { type: Boolean },
    loop: { type: Boolean },
    side: { default: "bottom" },
    sideOffset: {},
    align: { default: "start" },
    alignOffset: {},
    arrowPadding: {},
    avoidCollisions: { type: Boolean, default: true },
    collisionBoundary: {},
    collisionPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    onPlaced: {},
    prioritizePosition: { type: Boolean }
  },
  setup(a) {
    const t = a, e = inject(ke), { primitiveElement: o, currentElement: l } = B(), { createCollection: n, getItems: r } = $e();
    n(l), watchEffect(() => {
      l.value && (e != null && e.modelValue.value ? (e.itemsArray = r(l.value), window.addEventListener("keydown", d), window.addEventListener("scroll", i)) : s());
    }), watchEffect(() => {
      e != null && e.selectedElement.value && s();
    });
    function s() {
      window.removeEventListener("keydown", d), window.removeEventListener("scroll", i);
    }
    xe(l, (c) => {
      c.target.closest('[role="menuitem"]') || e == null || e.hideTooltip();
    });
    function i() {
      e == null || e.hideTooltip(), window.removeEventListener("scroll", i);
    }
    async function d(c) {
      var p, m, f;
      if (c.preventDefault(), c.key === "ArrowDown" || c.key === "Enter" || c.keyCode === 32)
        e == null || e.changeSelected((p = e.itemsArray) == null ? void 0 : p[0]), (m = e == null ? void 0 : e.selectedElement.value) == null || m.focus();
      else if (c.key === "ArrowUp") {
        const h2 = (f = e == null ? void 0 : e.itemsArray) == null ? void 0 : f[(e == null ? void 0 : e.itemsArray.length) - 1];
        e == null || e.changeSelected(h2), h2 == null || h2.focus();
      }
      window.removeEventListener("keydown", d);
    }
    return (c, p) => {
      var m;
      return (m = unref(e)) != null && m.modelValue.value ? (openBlock(), createBlock(unref(me), mergeProps({ key: 0 }, t, { "prioritize-position": "" }), {
        default: withCtx(() => {
          var f;
          return [
            createVNode(unref(M), {
              ref_key: "primitiveElement",
              ref: o,
              "data-state": (f = unref(e)) != null && f.modelValue.value ? "open" : "closed",
              "data-side": t.side,
              "data-align": t.align,
              role: "tooltip",
              asChild: t.asChild,
              style: { "pointer-events": "auto" }
            }, {
              default: withCtx(() => [
                renderSlot(c.$slots, "default")
              ]),
              _: 3
            }, 8, ["data-state", "data-side", "data-align", "asChild"])
          ];
        }),
        _: 3
      }, 16)) : createCommentVNode("", true);
    };
  }
});
var Lr = defineComponent({
  __name: "ContextMenuArrow",
  setup(a) {
    return (t, e) => (openBlock(), createBlock(unref(Le)));
  }
});
var Ze = Symbol();
var Nr = defineComponent({
  __name: "ContextMenuSub",
  props: {
    modelValue: { type: Boolean },
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    delayDuration: { default: 700 },
    disableHoverableContent: { type: Boolean },
    orientation: { default: "vertical" }
  },
  emits: ["update:modelValue"],
  setup(a, { emit: t }) {
    const e = a, o = K(e, "modelValue", t, {
      passive: true
    }), l = ref(), n = inject(Ze);
    return provide(Ze, {
      modelValue: o,
      showTooltip: () => {
        o.value = true;
      },
      hideTooltip: () => {
        o.value = false;
      },
      triggerElement: l,
      itemsArray: [],
      orientation: e.orientation,
      triggerId: be(),
      contentId: be(),
      parentContext: n
    }), (r, s) => (openBlock(), createBlock(unref(se), null, {
      default: withCtx(() => [
        renderSlot(r.$slots, "default")
      ]),
      _: 3
    }));
  }
});
var Ir = defineComponent({
  __name: "ContextMenuItem",
  props: {
    asChild: { type: Boolean },
    value: {},
    disabled: { type: Boolean },
    textValue: {}
  },
  setup(a) {
    const t = a, e = inject(
      ke
    ), o = inject(
      Ze
    );
    function l() {
      e != null && e.selectedElement.value && e.hideTooltip();
    }
    function n() {
      e == null || e.hideTooltip();
    }
    return (r, s) => {
      var i;
      return openBlock(), createBlock(oe, {
        disabled: t.disabled,
        rootProvider: unref(e),
        subProvider: unref(o),
        orientation: (i = unref(e)) == null ? void 0 : i.orientation,
        onHandleClick: l,
        onEscapeKeydown: n
      }, {
        default: withCtx(() => [
          renderSlot(r.$slots, "default")
        ]),
        _: 3
      }, 8, ["disabled", "rootProvider", "subProvider", "orientation"]);
    };
  }
});
var Dn = Symbol();
var Kr = defineComponent({
  __name: "ContextMenuGroup",
  props: {
    type: { default: "single" },
    value: {},
    defaultValue: {},
    disabled: { type: Boolean },
    rovingFocus: { type: Boolean },
    orientation: {},
    dir: {},
    loop: { type: Boolean },
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(a, { emit: t }) {
    const e = a, { primitiveElement: o, currentElement: l } = B();
    return provide(Dn, {
      type: e.type,
      modelValue: toRef(() => e.modelValue),
      changeModelValue: (n) => {
        if (e.type === "single")
          t("update:modelValue", n);
        else {
          let r = e.modelValue;
          if (r.includes(n)) {
            let s = r.findIndex((i) => i === n);
            r.splice(s, 1);
          } else
            r.push(n);
          t("update:modelValue", r);
        }
      },
      parentElement: l
    }), (n, r) => (openBlock(), createBlock(unref(M), {
      ref_key: "primitiveElement",
      ref: o,
      role: "group",
      dir: e.dir,
      "aria-label": "Text alignment"
    }, {
      default: withCtx(() => [
        renderSlot(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["dir"]));
  }
});
var Hr = defineComponent({
  __name: "ContextMenuSeparator",
  props: {
    orientation: {},
    decorative: { type: Boolean },
    asChild: { type: Boolean }
  },
  setup(a) {
    const t = a;
    return (e, o) => (openBlock(), createBlock(ze, {
      orientation: t.orientation,
      decorative: t.decorative
    }, null, 8, ["orientation", "decorative"]));
  }
});
var qt = Symbol();
var Rn = ["id", "checked", "name", "disabled"];
var zr = defineComponent({
  __name: "ContextMenuCheckboxItem",
  props: {
    asChild: { type: Boolean },
    checked: { type: Boolean },
    modelValue: { type: Boolean },
    id: {},
    name: {},
    value: {},
    disabled: { type: Boolean },
    onSelect: {},
    textValue: {}
  },
  emits: ["update:modelValue"],
  setup(a, { emit: t }) {
    const e = a, o = inject(
      ke
    ), l = K(e, "modelValue", t, {
      passive: true
    }), n = computed(() => l.value ? "checked" : "unchecked");
    function r() {
      l.value = !l.value;
    }
    function s() {
      o == null || o.hideTooltip();
    }
    return provide(qt, {
      modelValue: l
    }), (i, d) => {
      var c;
      return openBlock(), createBlock(oe, {
        ref: "currentElement",
        disabled: e.disabled,
        rootProvider: unref(o),
        orientation: (c = unref(o)) == null ? void 0 : c.orientation,
        onHandleClick: r,
        onEscapeKeydown: s,
        role: "menuitemcheckbox",
        "data-state": n.value,
        "aria-checked": !!e.modelValue
      }, {
        default: withCtx(() => [
          createBaseVNode("input", mergeProps({
            type: "checkbox",
            id: e.id
          }, e.modelValue, {
            checked: e.modelValue,
            name: e.name,
            "aria-hidden": "true",
            disabled: e.disabled,
            style: { opacity: "0", position: "absolute", inset: "0" }
          }), null, 16, Rn),
          renderSlot(i.$slots, "default")
        ]),
        _: 3
      }, 8, ["disabled", "rootProvider", "orientation", "data-state", "aria-checked"]);
    };
  }
});
var Yr = defineComponent({
  __name: "ContextMenuItemIndicator",
  setup(a) {
    const t = inject(qt);
    return (e, o) => {
      var l;
      return (l = unref(t)) != null && l.modelValue.value ? (openBlock(), createBlock(unref(te), {
        key: 0,
        style: { "pointer-events": "none" }
      }, {
        default: withCtx(() => [
          renderSlot(e.$slots, "default")
        ]),
        _: 3
      })) : createCommentVNode("", true);
    };
  }
});
var Wr = defineComponent({
  __name: "ContextMenuLabel",
  props: {
    asChild: { type: Boolean },
    for: {}
  },
  setup(a) {
    const t = a;
    return (e, o) => (openBlock(), createBlock(unref(je), {
      for: t.for
    }, {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["for"]));
  }
});
var Go = "RadioGroup";
var Ur = defineComponent({
  __name: "ContextMenuRadioGroup",
  props: {
    asChild: { type: Boolean },
    value: {},
    defaultValue: {},
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(a, { emit: t }) {
    const e = a, { primitiveElement: o, currentElement: l } = B(), n = K(e, "modelValue", t, {
      passive: true
    });
    return provide(Go, {
      modelValue: n,
      changeModelValue: (r) => {
        n.value = r;
      },
      parentElement: l
    }), (r, s) => (openBlock(), createBlock(unref(M), {
      ref_key: "primitiveElement",
      ref: o,
      role: "radiogroup",
      "aria-label": "radiogroup"
    }, {
      default: withCtx(() => [
        renderSlot(r.$slots, "default")
      ]),
      _: 3
    }, 512));
  }
});
var Gr = defineComponent({
  __name: "ContextMenuRadioItem",
  props: {
    asChild: { type: Boolean },
    value: {},
    disabled: { type: Boolean },
    id: {},
    name: {},
    onSelect: {},
    textValue: {}
  },
  setup(a) {
    const t = a, e = inject(
      ke
    ), o = inject(
      Go
    ), l = computed(() => {
      var i;
      return ((i = o == null ? void 0 : o.modelValue) == null ? void 0 : i.value) === t.value ? "on" : "off";
    });
    function n() {
      if (e != null && e.selectedElement.value)
        return o == null ? void 0 : o.changeModelValue(t.value);
    }
    function r() {
      e == null || e.hideTooltip();
    }
    const s = computed(
      () => {
        var i;
        return ((i = o == null ? void 0 : o.modelValue) == null ? void 0 : i.value) === t.value;
      }
    );
    return provide(qt, {
      modelValue: s
    }), (i, d) => {
      var c;
      return openBlock(), createBlock(oe, {
        disabled: t.disabled,
        rootProvider: unref(e),
        orientation: (c = unref(e)) == null ? void 0 : c.orientation,
        "data-radix-vue-radio-value": t.value,
        onHandleClick: n,
        onEscapeKeydown: r,
        onClick: n,
        role: "menuitemradio",
        "data-state": l.value
      }, {
        default: withCtx(() => [
          renderSlot(i.$slots, "default")
        ]),
        _: 3
      }, 8, ["disabled", "rootProvider", "orientation", "data-radix-vue-radio-value", "data-state"]);
    };
  }
});
var Xr = defineComponent({
  __name: "ContextMenuSubContent",
  props: {
    asChild: { type: Boolean },
    loop: { type: Boolean },
    side: { default: "right" },
    sideOffset: {},
    align: { default: "start" },
    alignOffset: {},
    arrowPadding: {},
    avoidCollisions: { type: Boolean, default: true },
    collisionBoundary: {},
    collisionPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    onPlaced: {},
    prioritizePosition: { type: Boolean }
  },
  setup(a) {
    const t = a, e = inject(
      ke
    ), o = inject(
      Ze
    ), { primitiveElement: l, currentElement: n } = B(), { createCollection: r } = $e();
    r(n), watchEffect(() => {
      n.value && o != null && o.modelValue.value && s();
    }), watch(
      () => e == null ? void 0 : e.selectedElement.value,
      (i) => {
        var c;
        if (!(o != null && o.modelValue.value))
          return;
        const d = Array.from(
          ((c = i == null ? void 0 : i.closest('[role="tooltip"]')) == null ? void 0 : c.querySelectorAll(
            "[data-radix-vue-collection-item]:not([data-disabled])"
          )) ?? []
        );
        d != null && d.length && d.includes(o.triggerElement.value) && (e == null ? void 0 : e.selectedElement.value) !== (o == null ? void 0 : o.triggerElement.value) && (o == null || o.hideTooltip());
      }
    );
    function s() {
      const i = Array.from(
        n.value.querySelectorAll(
          "[data-radix-vue-collection-item]:not([data-disabled])"
        )
      );
      return o.itemsArray = i, i;
    }
    return xe(n, (i) => {
      i.target.closest('[role="menuitem"]') || o == null || o.hideTooltip();
    }), (i, d) => {
      var c;
      return (c = unref(o)) != null && c.modelValue.value ? (openBlock(), createBlock(unref(me), normalizeProps(mergeProps({ key: 0 }, t)), {
        default: withCtx(() => {
          var p;
          return [
            createVNode(unref(M), {
              ref_key: "primitiveElement",
              ref: l,
              "data-state": (p = unref(o)) != null && p.modelValue.value ? "open" : "closed",
              "data-side": t.side,
              "data-align": t.align,
              "data-orientation": unref(o).orientation,
              "aria-labelledby": unref(o).triggerId,
              role: "tooltip",
              asChild: t.asChild,
              style: { "pointer-events": "auto" }
            }, {
              default: withCtx(() => [
                renderSlot(i.$slots, "default")
              ]),
              _: 3
            }, 8, ["data-state", "data-side", "data-align", "data-orientation", "aria-labelledby", "asChild"])
          ];
        }),
        _: 3
      }, 16)) : createCommentVNode("", true);
    };
  }
});
var qr = defineComponent({
  __name: "ContextMenuSubTrigger",
  setup(a) {
    const t = inject(
      ke
    ), e = inject(
      Ze
    ), { primitiveElement: o, currentElement: l } = B();
    onMounted(() => {
      e.triggerElement.value = l.value;
    });
    async function n() {
      var p;
      e == null || e.showTooltip(), await nextTick();
      const c = (p = e == null ? void 0 : e.itemsArray) == null ? void 0 : p[0];
      t.selectedElement.value = c, c == null || c.focus();
    }
    function r() {
      e != null && e.modelValue.value || n();
    }
    async function s(c) {
      c.key === "ArrowRight" && n();
    }
    const i = computed(() => e != null && e.modelValue.value ? "open" : "closed");
    function d() {
      return e == null ? void 0 : e.showTooltip();
    }
    return (c, p) => (openBlock(), createBlock(unref(fe), { asChild: "" }, {
      default: withCtx(() => {
        var m, f, h2, g, E;
        return [
          createVNode(oe, {
            ref_key: "primitiveElement",
            ref: o,
            id: (m = unref(e)) == null ? void 0 : m.triggerId,
            rootProvider: unref(t),
            subProvider: (f = unref(e)) == null ? void 0 : f.parentContext,
            "aria-expanded": (h2 = unref(e)) == null ? void 0 : h2.modelValue.value,
            "aria-controls": (g = unref(e)) == null ? void 0 : g.contentId,
            "data-state": i.value,
            "data-orientation": (E = unref(t)) == null ? void 0 : E.orientation,
            "aria-haspopup": "menu",
            onHandleClick: r,
            onMouseover: d,
            onHorizontalKeydown: s
          }, {
            default: withCtx(() => [
              renderSlot(c.$slots, "default")
            ]),
            _: 3
          }, 8, ["id", "rootProvider", "subProvider", "aria-expanded", "aria-controls", "data-state", "data-orientation"])
        ];
      }),
      _: 3
    }));
  }
});
var ot = Symbol();
var Jr = defineComponent({
  __name: "SelectRoot",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    defaultValue: { default: "" },
    modelValue: {},
    multiple: { type: Boolean },
    orientation: { default: "vertical" },
    dir: {}
  },
  emits: ["update:modelValue"],
  setup(a, { emit: t }) {
    const e = a, o = K(e, "modelValue", t, {
      defaultValue: e.defaultValue
    }), l = ref(), n = ref(), r = ref(false);
    provide(ot, {
      selectedElement: l,
      changeSelected: (i) => {
        l.value = i, l.value.focus();
      },
      modelValue: o,
      changeModelValue: s,
      isOpen: r,
      showTooltip: () => {
        r.value = true;
      },
      hideTooltip: () => {
        r.value = false;
      },
      triggerElement: n,
      itemsArray: [],
      orientation: e.orientation,
      multiple: e.multiple
    });
    function s(i) {
      if (e.multiple) {
        let d = [...o.value];
        if (d.includes(i)) {
          let c = d.findIndex((p) => p === i);
          d.splice(c, 1);
        } else
          d.push(i);
        o.value = d;
      } else
        o.value = i;
    }
    return (i, d) => (openBlock(), createBlock(unref(se), null, {
      default: withCtx(() => [
        renderSlot(i.$slots, "default")
      ]),
      _: 3
    }));
  }
});
var Zr = defineComponent({
  __name: "SelectTrigger",
  setup(a) {
    const t = inject(ot), { primitiveElement: e, currentElement: o } = B();
    onMounted(() => {
      t.triggerElement.value = o.value;
    });
    async function l() {
      var r, s;
      if (t == null || t.showTooltip(), await nextTick(), t != null && t.modelValue.value && !(t != null && t.multiple)) {
        const i = (r = t.itemsArray) == null ? void 0 : r.find((d) => d.getAttribute("data-radix-vue-radio-value") === (t == null ? void 0 : t.modelValue.value));
        t == null || t.changeSelected(i);
      } else
        t == null || t.changeSelected((s = t.itemsArray) == null ? void 0 : s[0]);
    }
    function n(r) {
      (r.key === "ArrowDown" || r.key === "ArrowUp" || r.key === "Enter" || r.keyCode === 32) && l();
    }
    return (r, s) => (openBlock(), createBlock(unref(fe), { asChild: "" }, {
      default: withCtx(() => {
        var i, d;
        return [
          createVNode(unref(X), {
            type: "button",
            ref_key: "primitiveElement",
            ref: e,
            "aria-expanded": ((i = unref(t)) == null ? void 0 : i.isOpen.value) || false,
            "data-state": (d = unref(t)) != null && d.isOpen.value ? "open" : "closed",
            "as-child": false,
            onClick: l,
            onKeydown: withModifiers(n, ["prevent"])
          }, {
            default: withCtx(() => [
              renderSlot(r.$slots, "default")
            ]),
            _: 3
          }, 8, ["aria-expanded", "data-state", "onKeydown"])
        ];
      }),
      _: 3
    }));
  }
});
var Ln = {};
function Nn(a, t) {
  return openBlock(), createBlock(Teleport, { to: "body" }, [
    renderSlot(a.$slots, "default")
  ]);
}
var Qr = De(Ln, [["render", Nn]]);
var Fr = defineComponent({
  __name: "SelectContent",
  props: {
    asChild: { type: Boolean },
    loop: { type: Boolean },
    side: { default: "bottom" },
    sideOffset: {},
    align: { default: "center" },
    alignOffset: {},
    arrowPadding: {},
    avoidCollisions: { type: Boolean, default: true },
    collisionBoundary: {},
    collisionPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    onPlaced: {},
    prioritizePosition: { type: Boolean }
  },
  setup(a) {
    const t = a, e = inject(ot), { primitiveElement: o, currentElement: l } = B(), { createCollection: n, getItems: r } = $e();
    n(l), watchEffect(() => {
      l.value && (e != null && e.isOpen.value ? (document.querySelector("body").style.pointerEvents = "none", e.itemsArray = r(l.value)) : e != null && e.triggerElement.value && s());
    });
    function s() {
      document.querySelector("body").style.pointerEvents = "", setTimeout(() => {
        var i;
        (i = e == null ? void 0 : e.triggerElement.value) == null || i.focus();
      }, 0);
    }
    return xe(l, (i) => {
      i.target.closest('[role="menuitem"]') || e == null || e.hideTooltip();
    }), (i, d) => {
      var c, p;
      return (c = unref(e)) != null && c.isOpen.value ? (openBlock(), createBlock(unref(me), mergeProps({ key: 0 }, t, {
        "prioritize-position": "",
        role: "listbox",
        "data-state": (p = unref(e)) != null && p.isOpen.value ? "open" : "closed",
        "data-side": t.side,
        "data-align": t.align
      }), {
        default: withCtx(() => [
          createVNode(unref(M), {
            ref_key: "primitiveElement",
            ref: o,
            asChild: t.asChild,
            role: "presentation",
            style: { "pointer-events": "auto" }
          }, {
            default: withCtx(() => [
              renderSlot(i.$slots, "default")
            ]),
            _: 3
          }, 8, ["asChild"])
        ]),
        _: 3
      }, 16, ["data-state", "data-side", "data-align"])) : createCommentVNode("", true);
    };
  }
});
var Vr = defineComponent({
  __name: "SelectArrow",
  setup(a) {
    return (t, e) => (openBlock(), createBlock(unref(Le)));
  }
});
var jr = defineComponent({
  __name: "SelectSeparator",
  props: {
    orientation: {},
    decorative: { type: Boolean },
    asChild: { type: Boolean }
  },
  setup(a) {
    const t = a;
    return (e, o) => (openBlock(), createBlock(ze, {
      orientation: t.orientation,
      decorative: t.decorative
    }, null, 8, ["orientation", "decorative"]));
  }
});
var Xo = Symbol();
var ei = defineComponent({
  __name: "SelectItemIndicator",
  setup(a) {
    const t = inject(ot), e = inject(Xo), o = computed(() => {
      var l;
      return t != null && t.multiple ? (l = t == null ? void 0 : t.modelValue.value) == null ? void 0 : l.includes(
        e.value
      ) : (t == null ? void 0 : t.modelValue.value) === (e == null ? void 0 : e.value);
    });
    return (l, n) => o.value ? (openBlock(), createBlock(unref(te), {
      key: 0,
      "aria-hidden": "true",
      style: { "pointer-events": "none" }
    }, {
      default: withCtx(() => [
        renderSlot(l.$slots, "default")
      ]),
      _: 3
    })) : createCommentVNode("", true);
  }
});
var ti = defineComponent({
  __name: "SelectLabel",
  props: {
    asChild: { type: Boolean },
    for: {}
  },
  setup(a) {
    const t = a;
    return (e, o) => (openBlock(), createBlock(unref(je), {
      for: t.for
    }, {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["for"]));
  }
});
var oi = defineComponent({
  __name: "SelectGroup",
  props: {
    asChild: { type: Boolean }
  },
  setup(a) {
    const t = a;
    return (e, o) => (openBlock(), createBlock(unref(M), {
      "as-child": t.asChild,
      ref: "primitiveElement",
      role: "group",
      "aria-label": "group"
    }, {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child"]));
  }
});
var ai = defineComponent({
  __name: "SelectItem",
  props: {
    asChild: { type: Boolean },
    value: {},
    disabled: { type: Boolean },
    id: {},
    name: {},
    onSelect: {},
    textValue: {}
  },
  setup(a) {
    const t = a, e = inject(ot);
    function o() {
      return e == null || e.changeModelValue(t.value), e == null ? void 0 : e.hideTooltip();
    }
    return provide(Xo, {
      value: t.value
    }), (l, n) => {
      var r, s, i;
      return openBlock(), createBlock(oe, {
        disabled: t.disabled,
        rootProvider: unref(e),
        orientation: (r = unref(e)) == null ? void 0 : r.orientation,
        "data-radix-vue-radio-value": t.value,
        onHandleClick: o,
        onEscapeKeydown: n[0] || (n[0] = (d) => {
          var c;
          return (c = unref(e)) == null ? void 0 : c.hideTooltip();
        }),
        role: "option",
        "data-state": ((i = (s = unref(e)) == null ? void 0 : s.modelValue) == null ? void 0 : i.value) === t.value ? "checked" : "unchecked"
      }, {
        default: withCtx(() => [
          renderSlot(l.$slots, "default")
        ]),
        _: 3
      }, 8, ["disabled", "rootProvider", "orientation", "data-radix-vue-radio-value", "data-state"]);
    };
  }
});
var ge = Symbol();
var In = {
  inheritAttrs: false
};
var ni = defineComponent({
  ...In,
  __name: "MenubarRoot",
  props: {
    modelValue: {},
    defaultValue: {},
    orientation: { default: "horizontal" },
    dir: {}
  },
  emits: ["update:modelValue", "update:open"],
  setup(a, { emit: t }) {
    const e = a, o = K(e, "modelValue", t, {
      passive: true,
      defaultValue: e.defaultValue
    }), l = ref(), n = ref(), r = [], s = ref(), i = Eo();
    return provide(ge, {
      selectedElement: l,
      changeSelected: (d) => {
        var c;
        l.value = d, (c = l.value) == null || c.focus();
      },
      modelValue: o,
      changeValue: (d) => {
        o.value = d;
      },
      triggerElement: n,
      triggerItemsArray: r,
      itemsArray: [],
      orientation: e.orientation
    }), watch(
      i,
      () => {
        i.value === s.value && (n.value ? n.value.focus() : r.length && r[0].focus());
      },
      { immediate: true }
    ), (d, c) => (openBlock(), createBlock(unref(se), null, {
      default: withCtx(() => [
        createBaseVNode("div", mergeProps({ role: "menubar" }, d.$attrs, {
          ref_key: "menubarContainerElement",
          ref: s,
          tabindex: "0"
        }), [
          renderSlot(d.$slots, "default")
        ], 16)
      ]),
      _: 3
    }));
  }
});
var mt = Symbol();
var li = defineComponent({
  __name: "MenubarMenu",
  props: {
    value: {}
  },
  setup(a) {
    const e = a.value ?? be(), o = inject(ge), l = ref(), n = computed(() => (o == null ? void 0 : o.modelValue.value) === e), r = inject(mt);
    return provide(mt, {
      value: e,
      isOpen: n,
      triggerElement: l,
      itemsArray: [],
      triggerId: e,
      contentId: be(),
      parentContext: r,
      orientation: "vertical"
    }), (s, i) => (openBlock(), createBlock(unref(se), null, {
      default: withCtx(() => [
        renderSlot(s.$slots, "default")
      ]),
      _: 3
    }));
  }
});
var Kn = {
  inheritAttrs: false
};
var ri = defineComponent({
  ...Kn,
  __name: "MenubarTrigger",
  props: {
    asChild: { type: Boolean },
    disabled: { type: Boolean },
    textValue: {}
  },
  setup(a) {
    const t = a, e = inject(ge), o = inject(
      mt
    ), { primitiveElement: l, currentElement: n } = B(), r = Eo();
    onMounted(() => {
      o.triggerElement.value = n.value, e.triggerItemsArray.push(n.value);
    });
    async function s() {
      var g;
      e == null || e.changeValue(o == null ? void 0 : o.value), await nextTick();
      const h2 = (g = o == null ? void 0 : o.itemsArray) == null ? void 0 : g[0];
      e.selectedElement.value = h2, h2 == null || h2.focus();
    }
    function i(h2) {
      if (h2.key === "Escape")
        return c();
      if (h2.keyCode === 32 || h2.key === "Enter") {
        h2.target.click();
        return;
      }
      if (h2.key === "ArrowDown")
        return s();
      const g = ne(
        h2,
        n.value,
        n.value.parentElement,
        {
          arrowKeyOptions: "horizontal"
        }
      );
      g && (e == null || e.changeSelected(g), g.focus(), e != null && e.modelValue.value && (e == null || e.changeValue(g.id)));
    }
    function d() {
      if (!t.disabled && (e != null && e.modelValue.value)) {
        e == null || e.changeSelected(n.value), e == null || e.changeValue(o == null ? void 0 : o.value);
        return;
      }
    }
    function c() {
      e == null || e.changeValue(void 0), document.querySelector("body").style.pointerEvents = "", setTimeout(() => {
        var h2;
        (h2 = e == null ? void 0 : e.triggerElement.value) == null || h2.focus();
      }, 0);
    }
    function p() {
      s();
    }
    const m = computed(() => o != null && o.isOpen.value ? "open" : "closed"), f = computed(() => r.value === n.value || (e == null ? void 0 : e.triggerElement.value) === n.value && (e == null ? void 0 : e.selectedElement.value));
    return watchEffect(() => {
      (e == null ? void 0 : e.selectedElement.value) === n.value && (e.triggerElement.value = n.value);
    }), watch(
      r,
      () => {
        r.value === n.value ? (e.selectedElement.value = n.value, e.triggerElement.value = n.value) : !(o != null && o.isOpen.value) && e.selectedElement.value === n.value && (e.selectedElement.value = void 0);
      },
      { immediate: true }
    ), (h2, g) => (openBlock(), createBlock(unref(fe), { asChild: "" }, {
      default: withCtx(() => {
        var E, x, $, k, O;
        return [
          createVNode(unref(X), mergeProps({
            role: "menuitem",
            ref_key: "primitiveElement",
            ref: l,
            id: (E = unref(o)) == null ? void 0 : E.triggerId,
            "aria-expanded": (x = unref(o)) == null ? void 0 : x.isOpen.value,
            "aria-controls": ($ = unref(o)) == null ? void 0 : $.contentId,
            "data-state": m.value,
            "data-orientation": (k = unref(e)) == null ? void 0 : k.orientation,
            "aria-haspopup": "menu",
            onKeydown: withModifiers(i, ["prevent"]),
            "data-radix-vue-collection-item": "",
            onMouseenter: d,
            onClick: p,
            "data-highlighted": f.value ? "" : null,
            "aria-disabled": t.disabled ? true : void 0,
            "data-disabled": t.disabled ? "" : void 0,
            tabindex: ((O = unref(e)) == null ? void 0 : O.triggerElement.value) === unref(n) ? "0" : "-1"
          }, h2.$attrs), {
            default: withCtx(() => [
              renderSlot(h2.$slots, "default")
            ]),
            _: 3
          }, 16, ["id", "aria-expanded", "aria-controls", "data-state", "data-orientation", "onKeydown", "data-highlighted", "aria-disabled", "data-disabled", "tabindex"])
        ];
      }),
      _: 3
    }));
  }
});
var Hn = {};
function zn(a, t) {
  return openBlock(), createBlock(Teleport, { to: "body" }, [
    renderSlot(a.$slots, "default")
  ]);
}
var ii = De(Hn, [["render", zn]]);
var si = defineComponent({
  __name: "MenubarContent",
  props: {
    asChild: { type: Boolean },
    loop: { type: Boolean },
    side: { default: "bottom" },
    sideOffset: {},
    align: { default: "start" },
    alignOffset: {},
    arrowPadding: {},
    avoidCollisions: { type: Boolean, default: true },
    collisionBoundary: {},
    collisionPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    onPlaced: {},
    prioritizePosition: { type: Boolean }
  },
  setup(a) {
    const t = a, e = inject(ge), o = inject(
      mt
    ), { primitiveElement: l, currentElement: n } = B(), { createCollection: r } = $e();
    r(n), watchEffect(() => {
      n.value && o != null && o.isOpen.value && s();
    }), watch(
      () => e == null ? void 0 : e.selectedElement.value,
      (d) => {
        var p;
        if (!(o != null && o.isOpen.value))
          return;
        const c = Array.from(
          ((p = d == null ? void 0 : d.closest('[role="tooltip"]')) == null ? void 0 : p.querySelectorAll(
            "[data-radix-vue-collection-item]:not([data-disabled])"
          )) ?? []
        );
        c != null && c.length && c.includes(
          o.triggerElement.value
        ) && (e == null ? void 0 : e.selectedElement.value) !== (o == null ? void 0 : o.triggerElement.value) && (e == null || e.changeValue(void 0));
      }
    );
    function s() {
      const d = Array.from(
        n.value.querySelectorAll(
          "[data-radix-vue-collection-item]:not([data-disabled])"
        )
      );
      return o.itemsArray = d, d;
    }
    xe(n, (d) => {
      d.target.closest('[role="menuitem"]') || (e == null || e.changeValue(void 0), e.selectedElement.value = void 0);
    });
    const i = computed(() => o != null && o.isOpen ? "open" : "false");
    return (d, c) => {
      var p;
      return (p = unref(o)) != null && p.isOpen.value ? (openBlock(), createBlock(unref(me), normalizeProps(mergeProps({ key: 0 }, t)), {
        default: withCtx(() => {
          var m, f;
          return [
            createVNode(unref(M), {
              ref_key: "primitiveElement",
              ref: l,
              "data-state": i.value,
              "data-side": t.side,
              "data-align": t.align,
              "aria-labelledby": (m = unref(o)) == null ? void 0 : m.triggerId,
              "data-orientation": (f = unref(o)) == null ? void 0 : f.orientation,
              role: "tooltip",
              asChild: t.asChild,
              style: { "pointer-events": "auto" }
            }, {
              default: withCtx(() => [
                renderSlot(d.$slots, "default")
              ]),
              _: 3
            }, 8, ["data-state", "data-side", "data-align", "aria-labelledby", "data-orientation", "asChild"])
          ];
        }),
        _: 3
      }, 16)) : createCommentVNode("", true);
    };
  }
});
var ui = defineComponent({
  __name: "MenubarArrow",
  setup(a) {
    return (t, e) => (openBlock(), createBlock(unref(Le)));
  }
});
var Qe = Symbol();
var di = defineComponent({
  __name: "MenubarSub",
  props: {
    modelValue: { type: Boolean },
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    delayDuration: { default: 700 },
    disableHoverableContent: { type: Boolean },
    orientation: { default: "vertical" }
  },
  emits: ["update:modelValue"],
  setup(a, { emit: t }) {
    const e = a, o = K(e, "modelValue", t, {
      passive: true
    }), l = ref(), n = inject(Qe);
    return provide(Qe, {
      modelValue: o,
      showTooltip: () => {
        o.value = true;
      },
      hideTooltip: () => {
        o.value = false;
      },
      triggerElement: l,
      itemsArray: [],
      orientation: e.orientation,
      triggerId: be(),
      contentId: be(),
      parentContext: n
    }), (r, s) => (openBlock(), createBlock(unref(se), null, {
      default: withCtx(() => [
        renderSlot(r.$slots, "default")
      ]),
      _: 3
    }));
  }
});
var ci = defineComponent({
  __name: "MenubarItem",
  props: {
    asChild: { type: Boolean },
    value: {},
    disabled: { type: Boolean },
    textValue: {}
  },
  setup(a) {
    const t = a, e = inject(ge), o = inject(
      Qe
    );
    function l() {
      e.changeValue(void 0), e.changeSelected(
        e.triggerElement.value
      );
    }
    function n(s) {
      const i = ne(
        s,
        e == null ? void 0 : e.triggerElement.value,
        void 0,
        {
          arrowKeyOptions: "horizontal",
          itemsArray: e == null ? void 0 : e.triggerItemsArray
        }
      );
      i && (e == null || e.changeSelected(i), e == null || e.changeValue(i.id));
    }
    function r(s) {
      e.changeValue(void 0), e.changeSelected(
        e.triggerElement.value
      );
    }
    return (s, i) => {
      var d;
      return openBlock(), createBlock(oe, {
        disabled: t.disabled,
        rootProvider: unref(e),
        subProvider: unref(o),
        orientation: (d = unref(e)) == null ? void 0 : d.orientation,
        onHandleClick: l,
        onHorizontalKeydown: n,
        onEscapeKeydown: r
      }, {
        default: withCtx(() => [
          renderSlot(s.$slots, "default")
        ]),
        _: 3
      }, 8, ["disabled", "rootProvider", "subProvider", "orientation"]);
    };
  }
});
var Yn = Symbol();
var pi = defineComponent({
  __name: "MenubarGroup",
  props: {
    type: { default: "single" },
    value: {},
    defaultValue: {},
    disabled: { type: Boolean },
    rovingFocus: { type: Boolean },
    orientation: {},
    dir: {},
    loop: { type: Boolean },
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(a, { emit: t }) {
    const e = a, { primitiveElement: o, currentElement: l } = B();
    return provide(Yn, {
      type: e.type,
      modelValue: toRef(() => e.modelValue),
      changeModelValue: (n) => {
        if (e.type === "single")
          t("update:modelValue", n);
        else {
          let r = e.modelValue;
          if (r.includes(n)) {
            let s = r.findIndex((i) => i === n);
            r.splice(s, 1);
          } else
            r.push(n);
          t("update:modelValue", r);
        }
      },
      parentElement: l
    }), (n, r) => (openBlock(), createBlock(unref(M), {
      ref_key: "primitiveElement",
      ref: o,
      role: "group",
      dir: e.dir,
      "aria-label": "Text alignment"
    }, {
      default: withCtx(() => [
        renderSlot(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["dir"]));
  }
});
var fi = defineComponent({
  __name: "MenubarSeparator",
  props: {
    orientation: {},
    decorative: { type: Boolean },
    asChild: { type: Boolean }
  },
  setup(a) {
    const t = a;
    return (e, o) => (openBlock(), createBlock(ze, {
      orientation: t.orientation,
      decorative: t.decorative
    }, null, 8, ["orientation", "decorative"]));
  }
});
var Jt = Symbol();
var Wn = ["id", "checked", "name", "disabled"];
var mi = defineComponent({
  __name: "MenubarCheckboxItem",
  props: {
    asChild: { type: Boolean },
    checked: { type: Boolean },
    modelValue: { type: Boolean },
    id: {},
    name: {},
    value: {},
    disabled: { type: Boolean },
    onSelect: {},
    textValue: {}
  },
  emits: ["update:modelValue"],
  setup(a, { emit: t }) {
    const e = a, o = inject(ge), l = K(e, "modelValue", t, {
      passive: true
    }), n = computed(() => l.value ? "checked" : "unchecked");
    function r() {
      l.value = !l.value;
    }
    provide(Jt, {
      modelValue: l
    });
    function s(d) {
      const c = ne(
        d,
        o == null ? void 0 : o.triggerElement.value,
        void 0,
        {
          arrowKeyOptions: "horizontal",
          itemsArray: o == null ? void 0 : o.triggerItemsArray
        }
      );
      c && (o == null || o.changeSelected(c), o == null || o.changeValue(c.id));
    }
    function i(d) {
      o.changeValue(void 0), o.changeSelected(
        o.triggerElement.value
      );
    }
    return (d, c) => {
      var p;
      return openBlock(), createBlock(oe, {
        ref: "currentElement",
        disabled: e.disabled,
        rootProvider: unref(o),
        orientation: (p = unref(o)) == null ? void 0 : p.orientation,
        onHandleClick: r,
        onHorizontalKeydown: s,
        onEscapeKeydown: i,
        role: "menuitemcheckbox",
        "data-state": n.value,
        "aria-checked": !!e.modelValue
      }, {
        default: withCtx(() => [
          createBaseVNode("input", mergeProps({
            type: "checkbox",
            id: e.id
          }, e.modelValue, {
            checked: e.modelValue,
            name: e.name,
            "aria-hidden": "true",
            disabled: e.disabled,
            style: { opacity: "0", position: "absolute", inset: "0" }
          }), null, 16, Wn),
          renderSlot(d.$slots, "default")
        ]),
        _: 3
      }, 8, ["disabled", "rootProvider", "orientation", "data-state", "aria-checked"]);
    };
  }
});
var vi = defineComponent({
  __name: "MenubarItemIndicator",
  setup(a) {
    const t = inject(Jt);
    return (e, o) => {
      var l;
      return (l = unref(t)) != null && l.modelValue.value ? (openBlock(), createBlock(unref(te), {
        key: 0,
        style: { "pointer-events": "none" }
      }, {
        default: withCtx(() => [
          renderSlot(e.$slots, "default")
        ]),
        _: 3
      })) : createCommentVNode("", true);
    };
  }
});
var hi = defineComponent({
  __name: "MenubarLabel",
  props: {
    asChild: { type: Boolean },
    for: {}
  },
  setup(a) {
    const t = a;
    return (e, o) => (openBlock(), createBlock(unref(je), {
      for: t.for
    }, {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["for"]));
  }
});
var qo = "RadioGroup";
var _i = defineComponent({
  __name: "MenubarRadioGroup",
  props: {
    asChild: { type: Boolean },
    value: {},
    defaultValue: {},
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(a, { emit: t }) {
    const e = a, { primitiveElement: o, currentElement: l } = B(), n = K(e, "modelValue", t, {
      passive: true
    });
    return provide(qo, {
      modelValue: n,
      changeModelValue: (r) => {
        n.value = r;
      },
      parentElement: l
    }), (r, s) => (openBlock(), createBlock(unref(M), {
      ref_key: "primitiveElement",
      ref: o,
      role: "radiogroup",
      "aria-label": "radiogroup"
    }, {
      default: withCtx(() => [
        renderSlot(r.$slots, "default")
      ]),
      _: 3
    }, 512));
  }
});
var yi = defineComponent({
  __name: "MenubarRadioItem",
  props: {
    asChild: { type: Boolean },
    value: {},
    disabled: { type: Boolean },
    id: {},
    name: {},
    onSelect: {},
    textValue: {}
  },
  setup(a) {
    const t = a, e = inject(ge), o = inject(
      qo
    ), l = computed(() => {
      var d;
      return ((d = o == null ? void 0 : o.modelValue) == null ? void 0 : d.value) === t.value ? "on" : "off";
    });
    function n() {
      if (e != null && e.selectedElement.value)
        return o == null ? void 0 : o.changeModelValue(t.value);
    }
    const r = computed(
      () => {
        var d;
        return ((d = o == null ? void 0 : o.modelValue) == null ? void 0 : d.value) === t.value;
      }
    );
    provide(Jt, {
      modelValue: r
    });
    function s(d) {
      const c = ne(
        d,
        e == null ? void 0 : e.triggerElement.value,
        void 0,
        {
          arrowKeyOptions: "horizontal",
          itemsArray: e == null ? void 0 : e.triggerItemsArray
        }
      );
      c && (e == null || e.changeSelected(c), e == null || e.changeValue(c.id));
    }
    function i(d) {
      e.changeValue(void 0), e.changeSelected(
        e.triggerElement.value
      );
    }
    return (d, c) => {
      var p;
      return openBlock(), createBlock(oe, {
        disabled: t.disabled,
        rootProvider: unref(e),
        orientation: (p = unref(e)) == null ? void 0 : p.orientation,
        "data-radix-vue-radio-value": t.value,
        onHandleClick: n,
        onHorizontalKeydown: s,
        onEscapeKeydown: i,
        role: "menuitemradio",
        "data-state": l.value
      }, {
        default: withCtx(() => [
          renderSlot(d.$slots, "default")
        ]),
        _: 3
      }, 8, ["disabled", "rootProvider", "orientation", "data-radix-vue-radio-value", "data-state"]);
    };
  }
});
var gi = defineComponent({
  __name: "MenubarSubContent",
  props: {
    asChild: { type: Boolean },
    loop: { type: Boolean },
    side: { default: "right" },
    sideOffset: {},
    align: { default: "start" },
    alignOffset: {},
    arrowPadding: {},
    avoidCollisions: { type: Boolean, default: true },
    collisionBoundary: {},
    collisionPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    onPlaced: {},
    prioritizePosition: { type: Boolean }
  },
  setup(a) {
    const t = a, e = inject(ge), o = inject(Qe), { primitiveElement: l, currentElement: n } = B(), { createCollection: r } = $e();
    r(n), watchEffect(() => {
      n.value && o != null && o.modelValue.value && s();
    }), watch(
      () => e == null ? void 0 : e.selectedElement.value,
      (i) => {
        var c;
        if (!(o != null && o.modelValue.value))
          return;
        const d = Array.from(
          ((c = i == null ? void 0 : i.closest('[role="tooltip"]')) == null ? void 0 : c.querySelectorAll(
            "[data-radix-vue-collection-item]:not([data-disabled])"
          )) ?? []
        );
        d != null && d.length && d.includes(o.triggerElement.value) && (e == null ? void 0 : e.selectedElement.value) !== (o == null ? void 0 : o.triggerElement.value) && (o == null || o.hideTooltip());
      }
    );
    function s() {
      const i = Array.from(
        n.value.querySelectorAll(
          "[data-radix-vue-collection-item]:not([data-disabled])"
        )
      );
      return o.itemsArray = i, i;
    }
    return xe(n, (i) => {
      i.target.closest('[role="menuitem"]') || o == null || o.hideTooltip();
    }), (i, d) => {
      var c;
      return (c = unref(o)) != null && c.modelValue.value ? (openBlock(), createBlock(unref(me), normalizeProps(mergeProps({ key: 0 }, t)), {
        default: withCtx(() => {
          var p;
          return [
            createVNode(unref(M), {
              ref_key: "primitiveElement",
              ref: l,
              "data-state": (p = unref(o)) != null && p.modelValue.value ? "open" : "closed",
              "data-side": t.side,
              "data-align": t.align,
              "data-orientation": unref(o).orientation,
              "aria-labelledby": unref(o).triggerId,
              role: "tooltip",
              asChild: t.asChild,
              style: { "pointer-events": "auto" }
            }, {
              default: withCtx(() => [
                renderSlot(i.$slots, "default")
              ]),
              _: 3
            }, 8, ["data-state", "data-side", "data-align", "data-orientation", "aria-labelledby", "asChild"])
          ];
        }),
        _: 3
      }, 16)) : createCommentVNode("", true);
    };
  }
});
var bi = defineComponent({
  __name: "MenubarSubTrigger",
  setup(a) {
    const t = inject(ge), e = inject(Qe), { primitiveElement: o, currentElement: l } = B();
    onMounted(() => {
      e.triggerElement.value = l.value;
    });
    async function n() {
      var m;
      e == null || e.showTooltip(), await nextTick();
      const p = (m = e == null ? void 0 : e.itemsArray) == null ? void 0 : m[0];
      t.selectedElement.value = p, p == null || p.focus();
    }
    function r() {
      e != null && e.modelValue.value || n();
    }
    async function s(p) {
      if (p.key === "ArrowRight")
        n();
      else {
        const m = ne(
          p,
          t == null ? void 0 : t.triggerElement.value,
          void 0,
          {
            arrowKeyOptions: "horizontal",
            itemsArray: t == null ? void 0 : t.triggerItemsArray
          }
        );
        m && (t == null || t.changeSelected(m), m.focus(), t != null && t.modelValue.value && (t == null || t.changeValue(m.id)));
      }
    }
    const i = computed(() => e != null && e.modelValue.value ? "open" : "closed");
    function d() {
      return e == null ? void 0 : e.showTooltip();
    }
    function c(p) {
      t.changeValue(void 0), t.changeSelected(
        t.triggerElement.value
      );
    }
    return (p, m) => (openBlock(), createBlock(unref(fe), { asChild: "" }, {
      default: withCtx(() => {
        var f, h2, g, E, x;
        return [
          createVNode(oe, {
            ref_key: "primitiveElement",
            ref: o,
            id: (f = unref(e)) == null ? void 0 : f.triggerId,
            rootProvider: unref(t),
            subProvider: (h2 = unref(e)) == null ? void 0 : h2.parentContext,
            "aria-expanded": (g = unref(e)) == null ? void 0 : g.modelValue.value,
            "aria-controls": (E = unref(e)) == null ? void 0 : E.contentId,
            "data-state": i.value,
            "data-orientation": (x = unref(t)) == null ? void 0 : x.orientation,
            "aria-haspopup": "menu",
            onHandleClick: r,
            onMouseover: d,
            onHorizontalKeydown: s,
            onEscapeKeydown: c
          }, {
            default: withCtx(() => [
              renderSlot(p.$slots, "default")
            ]),
            _: 3
          }, 8, ["id", "rootProvider", "subProvider", "aria-expanded", "aria-controls", "data-state", "data-orientation"])
        ];
      }),
      _: 3
    }));
  }
});
var ue = "ScrollArea";
var wi = defineComponent({
  __name: "ScrollAreaRoot",
  props: {
    type: { default: "hover" },
    dir: { default: "ltr" },
    scrollHideDelay: { default: 600 }
  },
  setup(a) {
    const t = a, e = ref(0), o = ref(0), l = ref(), n = ref(), r = ref(), s = ref(), i = ref(false), d = ref(false), c = ref(), p = (x) => {
      l.value = x;
    }, m = (x) => {
      n.value = x;
    }, f = (x) => {
      r.value = x;
    }, h2 = (x) => {
      s.value = x;
    }, g = (x) => {
      i.value = x;
    }, E = (x) => {
      d.value = x;
    };
    return provide(ue, {
      type: t.type,
      dir: t.dir,
      scrollHideDelay: t.scrollHideDelay,
      scrollArea: c,
      viewport: l,
      onViewportChange: p,
      content: n,
      onContentChange: m,
      scrollbarX: r,
      scrollbarXEnabled: i,
      scrollbarY: s,
      scrollbarYEnabled: d,
      onScrollbarXChange: f,
      onScrollbarYChange: h2,
      onScrollbarXEnabledChange: g,
      onScrollbarYEnabledChange: E
    }), (x, $) => (openBlock(), createElementBlock("div", {
      ref_key: "scrollArea",
      ref: c,
      style: normalizeStyle({
        position: "relative",
        // Pass corner sizes as CSS vars to reduce re-renders of context consumers
        ["--radix-scroll-area-corner-width"]: e.value + "px",
        ["--radix-scroll-area-corner-height"]: o.value + "px"
      })
    }, [
      renderSlot(x.$slots, "default")
    ], 4));
  }
});
var Ei = defineComponent({
  __name: "ScrollAreaViewport",
  setup(a) {
    const t = inject(
      ue
    ), e = ref(), o = ref();
    return onMounted(() => {
      t == null || t.onViewportChange(e.value), t == null || t.onContentChange(o.value);
    }), (l, n) => {
      var r, s;
      return openBlock(), createElementBlock("div", {
        ref_key: "viewportElement",
        ref: e,
        "data-radix-scroll-area-viewport": "",
        style: normalizeStyle({
          /**
           * We don't support `visible` because the intention is to have at least one scrollbar
           * if this component is used and `visible` will behave like `auto` in that case
           * https://developer.mozilla.org/en-US/docs/Web/CSS/overflowed#description
           *
           * We don't handle `auto` because the intention is for the native implementation
           * to be hidden if using this component. We just want to ensure the node is scrollable
           * so could have used either `scroll` or `auto` here. We picked `scroll` to prevent
           * the browser from having to work out whether to render native scrollbars or not,
           * we tell it to with the intention of hiding them in CSS.
           */
          overflowX: (r = unref(t)) != null && r.scrollbarXEnabled.value ? "scroll" : "hidden",
          overflowY: (s = unref(t)) != null && s.scrollbarYEnabled.value ? "scroll" : "hidden"
        })
      }, [
        createBaseVNode("div", {
          ref_key: "contentElement",
          ref: o,
          style: { minWidth: "100%", display: "table" }
        }, [
          renderSlot(l.$slots, "default")
        ], 512)
      ], 4);
    };
  }
});
function Un(a, [t, e]) {
  return Math.min(e, Math.max(t, a));
}
function Jo(a, t) {
  return (e) => {
    if (a[0] === a[1] || t[0] === t[1])
      return t[0];
    const o = (t[1] - t[0]) / (a[1] - a[0]);
    return t[0] + o * (e - a[0]);
  };
}
function Et(a) {
  const t = Zo(a.viewport, a.content), e = a.scrollbar.paddingStart + a.scrollbar.paddingEnd, o = (a.scrollbar.size - e) * t;
  return Math.max(o, 18);
}
function Zo(a, t) {
  const e = a / t;
  return isNaN(e) ? 0 : e;
}
var Gn = (a, t = () => {
}) => {
  let e = { left: a.scrollLeft, top: a.scrollTop }, o = 0;
  return function l() {
    const n = { left: a.scrollLeft, top: a.scrollTop }, r = e.left !== n.left, s = e.top !== n.top;
    (r || s) && t(), e = n, o = window.requestAnimationFrame(l);
  }(), () => window.cancelAnimationFrame(o);
};
function fo(a, t, e = "ltr") {
  const o = Et(t), l = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, n = t.scrollbar.size - l, r = t.content - t.viewport, s = n - o, i = e === "ltr" ? [0, r] : [r * -1, 0], d = Un(
    a,
    i
  );
  return Jo([0, r], [0, s])(d);
}
function rt(a) {
  return a ? parseInt(a, 10) : 0;
}
function Xn(a, t, e, o = "ltr") {
  const l = Et(e), n = l / 2, r = t || n, s = l - r, i = e.scrollbar.paddingStart + r, d = e.scrollbar.size - e.scrollbar.paddingEnd - s, c = e.content - e.viewport, p = o === "ltr" ? [0, c] : [c * -1, 0];
  return Jo(
    [i, d],
    p
  )(a);
}
function mo(a, t) {
  return a > 0 && a < t;
}
var Qo = defineComponent({
  __name: "ScrollAreaScrollbarImpl",
  props: {
    isHorizontal: { type: Boolean }
  },
  emits: ["onDragScroll", "onWheelScroll", "onThumbPointerDown"],
  setup(a, { emit: t }) {
    const e = a, o = inject(
      ue
    ), l = inject(
      at
    ), n = ref(""), r = ref(), s = ref();
    function i(g) {
      var E, x;
      if (s.value) {
        const $ = g.clientX - ((E = s.value) == null ? void 0 : E.left), k = g.clientY - ((x = s.value) == null ? void 0 : x.top);
        t("onDragScroll", { x: $, y: k });
      }
    }
    const d = (g) => {
      g.button === 0 && (g.target.setPointerCapture(g.pointerId), s.value = r.value.getBoundingClientRect(), n.value = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", o != null && o.viewport && (o.viewport.value.style.scrollBehavior = "auto"), i(g));
    }, c = (g) => {
      i(g);
    }, p = (g) => {
      const E = g.target;
      E.hasPointerCapture(g.pointerId) && E.releasePointerCapture(g.pointerId), document.body.style.webkitUserSelect = n.value, o != null && o.viewport && (o.viewport.value.style.scrollBehavior = ""), s.value = void 0;
    }, m = (g) => {
      var k;
      if (!l)
        return;
      const E = g.target, x = (k = r.value) == null ? void 0 : k.contains(E), $ = l.sizes.value.content - l.sizes.value.viewport;
      x && l.handleWheelScroll(g, $);
    };
    onMounted(() => {
      document.addEventListener("wheel", m, { passive: false });
    }), onUnmounted(() => {
      document.removeEventListener("wheel", m);
    });
    const f = () => {
      var g, E, x, $, k, O;
      r.value && (e.isHorizontal ? l == null || l.handleSizeChange({
        content: ((g = o == null ? void 0 : o.viewport.value) == null ? void 0 : g.scrollWidth) ?? 0,
        viewport: ((E = o == null ? void 0 : o.viewport.value) == null ? void 0 : E.offsetWidth) ?? 0,
        scrollbar: {
          size: ((x = r.value) == null ? void 0 : x.clientWidth) ?? 0,
          paddingStart: rt(getComputedStyle(r.value).paddingLeft),
          paddingEnd: rt(getComputedStyle(r.value).paddingRight)
        }
      }) : l == null || l.handleSizeChange({
        content: (($ = o == null ? void 0 : o.viewport.value) == null ? void 0 : $.scrollHeight) ?? 0,
        viewport: ((k = o == null ? void 0 : o.viewport.value) == null ? void 0 : k.offsetHeight) ?? 0,
        scrollbar: {
          size: ((O = r.value) == null ? void 0 : O.clientHeight) ?? 0,
          paddingStart: rt(getComputedStyle(r.value).paddingLeft),
          paddingEnd: rt(getComputedStyle(r.value).paddingRight)
        }
      }));
    };
    ut(r, f), ut(o == null ? void 0 : o.content, f);
    const h2 = computed(() => {
      var g, E, x, $;
      return e.isHorizontal ? ((g = o == null ? void 0 : o.viewport.value) == null ? void 0 : g.scrollWidth) !== ((E = o == null ? void 0 : o.viewport.value) == null ? void 0 : E.offsetWidth) : ((x = o == null ? void 0 : o.viewport.value) == null ? void 0 : x.scrollHeight) !== (($ = o == null ? void 0 : o.viewport.value) == null ? void 0 : $.offsetHeight);
    });
    return (g, E) => h2.value ? (openBlock(), createElementBlock("div", {
      key: 0,
      ref_key: "scrollbar",
      ref: r,
      style: { position: "absolute" },
      onPointerdown: d,
      onPointermove: c,
      onPointerup: p
    }, [
      h2.value ? renderSlot(g.$slots, "default", { key: 0 }) : createCommentVNode("", true)
    ], 544)) : createCommentVNode("", true);
  }
});
var qn = defineComponent({
  __name: "ScrollAreaScrollbarX",
  setup(a) {
    const t = inject(
      ue
    ), e = inject(
      at
    ), { primitiveElement: o, currentElement: l } = B();
    onMounted(() => {
      l.value && (t == null || t.onScrollbarYChange(l.value));
    });
    const n = computed(() => e == null ? void 0 : e.sizes.value);
    return (r, s) => {
      var i, d;
      return openBlock(), createBlock(Qo, {
        "is-horizontal": true,
        "data-orientation": "horizontal",
        ref_key: "primitiveElement",
        ref: o,
        onOnDragScroll: s[0] || (s[0] = (c) => {
          var p;
          return (p = unref(e)) == null ? void 0 : p.onDragScroll(c.x);
        }),
        style: normalizeStyle({
          bottom: 0,
          left: ((i = unref(t)) == null ? void 0 : i.dir) === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
          right: ((d = unref(t)) == null ? void 0 : d.dir) === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
          ["--radix-scroll-area-thumb-width"]: n.value ? unref(Et)(n.value) + "px" : void 0
        })
      }, {
        default: withCtx(() => [
          renderSlot(r.$slots, "default")
        ]),
        _: 3
      }, 8, ["style"]);
    };
  }
});
var Jn = defineComponent({
  __name: "ScrollAreaScrollbarY",
  setup(a) {
    const t = inject(
      ue
    ), e = inject(
      at
    ), { primitiveElement: o, currentElement: l } = B();
    onMounted(() => {
      l.value && (t == null || t.onScrollbarYChange(l.value));
    });
    const n = computed(() => e == null ? void 0 : e.sizes.value);
    return (r, s) => {
      var i, d;
      return openBlock(), createBlock(Qo, {
        "is-horizontal": false,
        "data-orientation": "vertical",
        ref_key: "primitiveElement",
        ref: o,
        onOnDragScroll: s[0] || (s[0] = (c) => {
          var p;
          return (p = unref(e)) == null ? void 0 : p.onDragScroll(c.y);
        }),
        style: normalizeStyle({
          top: 0,
          right: ((i = unref(t)) == null ? void 0 : i.dir) === "ltr" ? 0 : void 0,
          left: ((d = unref(t)) == null ? void 0 : d.dir) === "rtl" ? 0 : void 0,
          bottom: "var(--radix-scroll-area-corner-height)",
          ["--radix-scroll-area-thumb-height"]: n.value ? unref(Et)(n.value) + "px" : void 0
        })
      }, {
        default: withCtx(() => [
          renderSlot(r.$slots, "default")
        ]),
        _: 3
      }, 8, ["style"]);
    };
  }
});
var at = "ScrollAreaScrollbarVisible";
var Zt = defineComponent({
  __name: "ScrollAreaScrollbarVisible",
  setup(a) {
    const t = inject(
      ue
    ), e = inject(
      nt
    ), o = ref({
      content: 0,
      viewport: 0,
      scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
    }), l = computed(() => {
      const E = Zo(o.value.viewport, o.value.content);
      return E > 0 && E < 1;
    }), n = ref(), r = ref(0), s = (E, x) => {
      if (m.value) {
        const $ = t.viewport.value.scrollLeft + E.deltaY;
        t.viewport.value.scrollLeft = $, mo($, x) && E.preventDefault();
      } else {
        const $ = t.viewport.value.scrollTop + E.deltaY;
        t.viewport.value.scrollTop = $, mo($, x) && E.preventDefault();
      }
    }, i = (E, x) => {
      m.value ? r.value = x.x : r.value = x.y;
    }, d = (E) => {
      r.value = 0;
    }, c = (E) => {
      o.value = E;
    };
    function p(E, x) {
      return Xn(
        E,
        r.value,
        o.value,
        x
      );
    }
    const m = computed(
      () => e == null ? void 0 : e.isHorizontal.value
    );
    return provide(
      at,
      {
        sizes: o,
        hasThumb: l,
        handleWheelScroll: s,
        handleThumbDown: i,
        handleThumbUp: d,
        handleSizeChange: c,
        onThumbPositionChange: () => {
          if (m.value) {
            if (t != null && t.viewport.value && n.value) {
              const E = t == null ? void 0 : t.viewport.value.scrollLeft, x = fo(
                E,
                o.value,
                t == null ? void 0 : t.dir
              );
              n.value.style.transform = `translate3d(${x}px, 0, 0)`;
            }
          } else if (t != null && t.viewport.value && n.value) {
            const E = t == null ? void 0 : t.viewport.value.scrollTop, x = fo(E, o.value);
            n.value.style.transform = `translate3d(0, ${x}px, 0)`;
          }
        },
        onThumbChange: (E) => {
          n.value = E;
        },
        onDragScroll: (E) => {
          m.value ? t.viewport.value.scrollLeft = p(
            E,
            t.dir
          ) : t.viewport.value.scrollTop = p(E);
        }
      }
    ), (E, x) => m.value ? (openBlock(), createBlock(qn, { key: 0 }, {
      default: withCtx(() => [
        renderSlot(E.$slots, "default")
      ]),
      _: 3
    })) : (openBlock(), createBlock(Jn, { key: 1 }, {
      default: withCtx(() => [
        renderSlot(E.$slots, "default")
      ]),
      _: 3
    }));
  }
});
var Fo = defineComponent({
  __name: "ScrollAreaScrollbarAuto",
  setup(a) {
    const t = inject(
      ue
    ), e = inject(
      nt
    ), o = computed(() => e == null ? void 0 : e.visible.value), l = wo(() => {
      if (t != null && t.viewport.value) {
        const n = (t == null ? void 0 : t.viewport.value.offsetWidth) < (t == null ? void 0 : t.viewport.value.scrollWidth), r = (t == null ? void 0 : t.viewport.value.offsetHeight) < (t == null ? void 0 : t.viewport.value.scrollHeight);
        e != null && e.isHorizontal.value ? e.visible.value = n : e.visible.value = r;
      }
    }, 10);
    return ut(t == null ? void 0 : t.viewport, l), ut(t == null ? void 0 : t.content, l), (n, r) => o.value ? (openBlock(), createBlock(Zt, mergeProps({ key: 0 }, n.$attrs, {
      "data-state": o.value ? "visible" : "hidden"
    }), {
      default: withCtx(() => [
        renderSlot(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-state"])) : createCommentVNode("", true);
  }
});
var Zn = {
  inheritAttrs: false
};
var Qn = defineComponent({
  ...Zn,
  __name: "ScrollAreaScrollbarHover",
  setup(a) {
    const t = inject(ue), e = inject(
      nt
    );
    let o;
    const l = () => {
      window.clearTimeout(o), e.visible.value = true;
    }, n = () => {
      o = window.setTimeout(() => {
        e.visible.value = false;
      }, t == null ? void 0 : t.scrollHideDelay);
    };
    return onMounted(() => {
      const r = t == null ? void 0 : t.scrollArea.value;
      r && (r.addEventListener("pointerenter", l), r.addEventListener("pointerleave", n));
    }), onUnmounted(() => {
      const r = t == null ? void 0 : t.scrollArea.value;
      r && (window.clearTimeout(o), r.removeEventListener("pointerenter", l), r.removeEventListener("pointerleave", n));
    }), (r, s) => {
      var i;
      return openBlock(), createBlock(Fo, mergeProps(r.$attrs, {
        "data-state": (i = unref(e)) != null && i.visible.value ? "visible" : "hidden"
      }), {
        default: withCtx(() => [
          renderSlot(r.$slots, "default")
        ]),
        _: 3
      }, 16, ["data-state"]);
    };
  }
});
var Fn = defineComponent({
  __name: "ScrollAreaScrollbarScroll",
  setup(a) {
    const t = inject(
      ue
    ), e = inject(
      nt
    ), { state: o, dispatch: l } = Xa("hidden", {
      hidden: {
        SCROLL: "scrolling"
      },
      scrolling: {
        SCROLL_END: "idle",
        POINTER_ENTER: "interacting"
      },
      interacting: {
        SCROLL: "interacting",
        POINTER_LEAVE: "idle"
      },
      idle: {
        HIDE: "hidden",
        SCROLL: "scrolling",
        POINTER_ENTER: "interacting"
      }
    });
    watchEffect(() => {
      o.value === "idle" && window.setTimeout(
        () => l("HIDE"),
        t == null ? void 0 : t.scrollHideDelay
      );
    });
    const n = wo(() => l("SCROLL_END"), 100);
    return watchEffect(() => {
      const r = t == null ? void 0 : t.viewport.value, s = e != null && e.isHorizontal.value ? "scrollLeft" : "scrollTop";
      if (r) {
        let i = r[s];
        const d = () => {
          const c = r[s];
          i !== c && (l("SCROLL"), n()), i = c;
        };
        r.addEventListener("scroll", d);
      }
    }), (r, s) => unref(o) !== "hidden" ? (openBlock(), createBlock(Zt, normalizeProps(mergeProps({ key: 0 }, r.$attrs)), {
      default: withCtx(() => [
        renderSlot(r.$slots, "default")
      ]),
      _: 3
    }, 16)) : createCommentVNode("", true);
  }
});
var nt = "ScrollAreaScrollbar";
var Vn = {
  inheritAttrs: false
};
var Ci = defineComponent({
  ...Vn,
  __name: "ScrollAreaScrollbar",
  props: {
    orientation: { default: "vertical" },
    forceMount: { type: Boolean, default: void 0 }
  },
  setup(a) {
    const t = a, e = inject(ue), o = ref(false), l = computed(() => t.orientation === "horizontal");
    return watch(
      l,
      () => {
        l.value ? e == null || e.onScrollbarXEnabledChange(true) : e == null || e.onScrollbarYEnabledChange(true);
      },
      { immediate: true }
    ), onUnmounted(() => {
      e == null || e.onScrollbarXEnabledChange(false), e == null || e.onScrollbarYEnabledChange(false);
    }), provide(nt, {
      orientation: toRef(() => t.orientation),
      forceMount: toRef(() => t.forceMount),
      isHorizontal: l,
      visible: o
    }), (n, r) => {
      var s, i, d, c;
      return ((s = unref(e)) == null ? void 0 : s.type) === "hover" ? (openBlock(), createBlock(Qn, mergeProps({ key: 0 }, n.$attrs, { forceMount: n.forceMount }), {
        default: withCtx(() => [
          renderSlot(n.$slots, "default")
        ]),
        _: 3
      }, 16, ["forceMount"])) : ((i = unref(e)) == null ? void 0 : i.type) === "scroll" ? (openBlock(), createBlock(Fn, mergeProps({ key: 1 }, n.$attrs, { forceMount: n.forceMount }), {
        default: withCtx(() => [
          renderSlot(n.$slots, "default")
        ]),
        _: 3
      }, 16, ["forceMount"])) : ((d = unref(e)) == null ? void 0 : d.type) === "auto" ? (openBlock(), createBlock(Fo, mergeProps({ key: 2 }, n.$attrs, { forceMount: n.forceMount }), {
        default: withCtx(() => [
          renderSlot(n.$slots, "default")
        ]),
        _: 3
      }, 16, ["forceMount"])) : ((c = unref(e)) == null ? void 0 : c.type) === "always" ? (openBlock(), createBlock(Zt, mergeProps({ key: 3 }, n.$attrs, { forceMount: n.forceMount }), {
        default: withCtx(() => [
          renderSlot(n.$slots, "default")
        ]),
        _: 3
      }, 16, ["forceMount"])) : createCommentVNode("", true);
    };
  }
});
var xi = defineComponent({
  __name: "ScrollAreaThumb",
  setup(a) {
    const t = inject(
      ue
    ), e = inject(
      at
    ), o = (p) => {
      const f = p.target.getBoundingClientRect(), h2 = p.clientX - f.left, g = p.clientY - f.top;
      e == null || e.handleThumbDown(p, { x: h2, y: g });
    }, l = (p) => {
      e == null || e.handleThumbUp(p);
    }, { primitiveElement: n, currentElement: r } = B(), s = ref(), i = computed(() => t == null ? void 0 : t.viewport.value), d = () => {
      if (!s.value) {
        const p = Gn(
          i.value,
          e == null ? void 0 : e.onThumbPositionChange
        );
        s.value = p, e == null || e.onThumbPositionChange();
      }
    }, c = computed(() => e == null ? void 0 : e.sizes.value);
    return Sa(c, () => {
      e == null || e.onThumbChange(r.value), i.value && (e == null || e.onThumbPositionChange(), i.value.addEventListener("scroll", d));
    }), onUnmounted(() => {
      var p;
      i.value.removeEventListener("scroll", d), (p = t == null ? void 0 : t.viewport.value) == null || p.removeEventListener(
        "scroll",
        d
      );
    }), (p, m) => {
      var f;
      return openBlock(), createBlock(unref(M), {
        ref_key: "primitiveElement",
        ref: n,
        "data-state": (f = unref(e)) != null && f.hasThumb ? "visible" : "hidden",
        style: normalizeStyle({
          width: "var(--radix-scroll-area-thumb-width)",
          height: "var(--radix-scroll-area-thumb-height)"
        }),
        onPointerdown: o,
        onPointerup: l
      }, null, 8, ["data-state", "style"]);
    };
  }
});
export {
  Dt as ACCORDION_COLLAPSIBLE_INJECTION_KEY,
  et as ACCORDION_IMPL_INJECTION_KEY,
  ht as ACCORDION_ITEM_INJECTION_KEY,
  Ha as ACCORDION_KEYS,
  Mt as ACCORDION_VALUE_INJECTION_KEY,
  tl as AccordionContent,
  ol as AccordionHeader,
  $o as AccordionImpl,
  za as AccordionImplMultiple,
  Ya as AccordionImplSingle,
  el as AccordionItem,
  al as AccordionRoot,
  nl as AccordionTrigger,
  Ul as AlertDialogAction,
  zl as AlertDialogCancel,
  Kl as AlertDialogContent,
  Wl as AlertDialogDescription,
  Hl as AlertDialogOverlay,
  Il as AlertDialogPortal,
  Ll as AlertDialogRoot,
  Yl as AlertDialogTitle,
  Nl as AlertDialogTrigger,
  ml as AspectRatio,
  jl as AvatarFallback,
  Vl as AvatarImage,
  Fl as AvatarRoot,
  Ot as COLLAPSIBLE_INJECTION_KEY,
  rl as CheckboxIndicator,
  ll as CheckboxRoot,
  Ka as CollapsibleContent,
  Na as CollapsibleRoot,
  Ia as CollapsibleTrigger,
  Lr as ContextMenuArrow,
  zr as ContextMenuCheckboxItem,
  Rr as ContextMenuContent,
  Kr as ContextMenuGroup,
  Ir as ContextMenuItem,
  Yr as ContextMenuItemIndicator,
  Wr as ContextMenuLabel,
  Dr as ContextMenuPortal,
  Ur as ContextMenuRadioGroup,
  Gr as ContextMenuRadioItem,
  Or as ContextMenuRoot,
  Hr as ContextMenuSeparator,
  Nr as ContextMenuSub,
  Xr as ContextMenuSubContent,
  qr as ContextMenuSubTrigger,
  Mr as ContextMenuTrigger,
  Ml as DialogClose,
  Bl as DialogContent,
  Rl as DialogDescription,
  Ol as DialogOverlay,
  Tl as DialogPortal,
  Al as DialogRoot,
  Dl as DialogTitle,
  Pl as DialogTrigger,
  br as DropdownMenuArrow,
  $r as DropdownMenuCheckboxItem,
  gr as DropdownMenuContent,
  Cr as DropdownMenuGroup,
  Er as DropdownMenuItem,
  Sr as DropdownMenuItemIndicator,
  kr as DropdownMenuLabel,
  yr as DropdownMenuPortal,
  Ar as DropdownMenuRadioGroup,
  Pr as DropdownMenuRadioItem,
  hr as DropdownMenuRoot,
  xr as DropdownMenuSeparator,
  wr as DropdownMenuSub,
  Tr as DropdownMenuSubContent,
  Br as DropdownMenuSubTrigger,
  _r as DropdownMenuTrigger,
  ur as HoverCardArrow,
  sr as HoverCardContent,
  ir as HoverCardPortal,
  lr as HoverCardRoot,
  rr as HoverCardTrigger,
  dl as Label,
  ui as MenubarArrow,
  mi as MenubarCheckboxItem,
  si as MenubarContent,
  pi as MenubarGroup,
  ci as MenubarItem,
  vi as MenubarItemIndicator,
  hi as MenubarLabel,
  li as MenubarMenu,
  ii as MenubarPortal,
  _i as MenubarRadioGroup,
  yi as MenubarRadioItem,
  ni as MenubarRoot,
  fi as MenubarSeparator,
  di as MenubarSub,
  gi as MenubarSubContent,
  bi as MenubarSubTrigger,
  ri as MenubarTrigger,
  mr as PopoverArrow,
  vr as PopoverClose,
  fr as PopoverContent,
  pr as PopoverPortal,
  dr as PopoverRoot,
  cr as PopoverTrigger,
  kl as ProgressIndicator,
  Sl as ProgressRoot,
  $l as RadioGroupIndicator,
  xl as RadioGroupItem,
  Cl as RadioGroupRoot,
  wi as ScrollAreaRoot,
  Ci as ScrollAreaScrollbar,
  xi as ScrollAreaThumb,
  Ei as ScrollAreaViewport,
  Vr as SelectArrow,
  Fr as SelectContent,
  oi as SelectGroup,
  ai as SelectItem,
  ei as SelectItemIndicator,
  ti as SelectLabel,
  Qr as SelectPortal,
  Jr as SelectRoot,
  jr as SelectSeparator,
  Zr as SelectTrigger,
  ul as Separator,
  El as SliderRange,
  gl as SliderRoot,
  bl as SliderThumb,
  wl as SliderTrack,
  il as SwitchRoot,
  sl as SwitchThumb,
  _l as TabsContent,
  hl as TabsList,
  vl as TabsRoot,
  yl as TabsTrigger,
  cl as Toggle,
  fl as ToggleGroupItem,
  pl as ToggleGroupRoot,
  Xl as ToolbarButton,
  ql as ToolbarLink,
  Gl as ToolbarRoot,
  Ql as ToolbarSeparator,
  Jl as ToolbarToggleGroup,
  Zl as ToolbarToggleItem,
  nr as TooltipArrow,
  ar as TooltipContent,
  or as TooltipPortal,
  er as TooltipRoot,
  tr as TooltipTrigger
};
//# sourceMappingURL=radix-vue.js.map
