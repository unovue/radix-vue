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
  toRefs,
  unref,
  useSlots,
  vShow,
  watch,
  watchEffect,
  withCtx,
  withDirectives,
  withModifiers
} from "./chunk-OX6HOUGK.js";

// node_modules/.pnpm/radix-vue@0.1.1_vue@3.3.4/node_modules/radix-vue/dist/index.js
var De = (a, t) => {
  const e = a.__vccOpts || a;
  for (const [o, l] of t)
    e[o] = l;
  return e;
};
var va = {};
function ha(a, t) {
  var e, o, l;
  return openBlock(), createBlock(resolveDynamicComponent(
    // @ts-ignore we can ignore this as we have validated the existence of 1 child in Primitive.vue
    (l = (o = (e = a.$slots).default) == null ? void 0 : o.call(e)[0].children) == null ? void 0 : l[0]
  ), normalizeProps(guardReactiveProps(a.$attrs)), null, 16);
}
var _a = De(va, [["render", ha]]);
var ya = Object.defineProperty;
var ga = Object.defineProperties;
var ba = Object.getOwnPropertyDescriptors;
var jt = Object.getOwnPropertySymbols;
var wa = Object.prototype.hasOwnProperty;
var Ea = Object.prototype.propertyIsEnumerable;
var eo = (a, t, e) => t in a ? ya(a, t, { enumerable: true, configurable: true, writable: true, value: e }) : a[t] = e;
var Ca = (a, t) => {
  for (var e in t || (t = {}))
    wa.call(t, e) && eo(a, e, t[e]);
  if (jt)
    for (var e of jt(t))
      Ea.call(t, e) && eo(a, e, t[e]);
  return a;
};
var xa = (a, t) => ga(a, ba(t));
function $a(a, t) {
  var e;
  const o = shallowRef();
  return watchEffect(() => {
    o.value = a();
  }, xa(Ca({}, t), {
    flush: (e = t == null ? void 0 : t.flush) != null ? e : "sync"
  })), readonly(o);
}
function Sa(a, t) {
  let e, o, l;
  const n = ref(true), r = () => {
    n.value = true, l();
  };
  watch(a, r, { flush: "sync" });
  const s = typeof t == "function" ? t : t.get, i = typeof t == "function" ? void 0 : t.set, d = customRef((p, c) => (o = p, l = c, {
    get() {
      return n.value && (e = s(), n.value = false), o(), e;
    },
    set(f) {
      i == null || i(f);
    }
  }));
  return Object.isExtensible(d) && (d.trigger = r), d;
}
function wo(a) {
  return getCurrentScope() ? (onScopeDispose(a), true) : false;
}
function ka(a) {
  let t = false, e;
  const o = effectScope(true);
  return (...l) => (t || (e = o.run(() => a(...l)), t = true), e);
}
function it(a) {
  return typeof a == "function" ? a() : unref(a);
}
var Eo = typeof window < "u";
var Aa = (a) => typeof a < "u";
var st = () => {
};
var Ta = Pa();
function Pa() {
  var a;
  return Eo && ((a = window == null ? void 0 : window.navigator) == null ? void 0 : a.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
}
function Ba(a, t) {
  function e(...o) {
    return new Promise((l, n) => {
      Promise.resolve(a(() => t.apply(this, o), { fn: t, thisArg: this, args: o })).then(l).catch(n);
    });
  }
  return e;
}
function Oa(a, t = {}) {
  let e, o, l = st;
  const n = (s) => {
    clearTimeout(s), l(), l = st;
  };
  return (s) => {
    const i = it(a), d = it(t.maxWait);
    return e && n(e), i <= 0 || d !== void 0 && d <= 0 ? (o && (n(o), o = null), Promise.resolve(s())) : new Promise((p, c) => {
      l = t.rejectOnCancel ? c : p, d && !o && (o = setTimeout(() => {
        e && n(e), o = null, p(s());
      }, d)), e = setTimeout(() => {
        o && n(o), o = null, p(s());
      }, i);
    });
  };
}
function Co(a, t = 200, e = {}) {
  return Ba(
    Oa(t, e),
    a
  );
}
function Ma(a, t, e = {}) {
  var o, l;
  const {
    flush: n = "sync",
    deep: r = false,
    immediate: s = true,
    direction: i = "both",
    transform: d = {}
  } = e;
  let p, c;
  const f = (o = d.ltr) != null ? o : (v) => v, m = (l = d.rtl) != null ? l : (v) => v;
  return (i === "both" || i === "ltr") && (p = watch(
    a,
    (v) => t.value = f(v),
    { flush: n, deep: r, immediate: s }
  )), (i === "both" || i === "rtl") && (c = watch(
    t,
    (v) => a.value = m(v),
    { flush: n, deep: r, immediate: s }
  )), () => {
    p == null || p(), c == null || c();
  };
}
function Da(a, t, e) {
  const o = watch(a, (...l) => (nextTick(() => o()), t(...l)), e);
}
function de(a) {
  var t;
  const e = it(a);
  return (t = e == null ? void 0 : e.$el) != null ? t : e;
}
var vt = Eo ? window : void 0;
function Ue(...a) {
  let t, e, o, l;
  if (typeof a[0] == "string" || Array.isArray(a[0]) ? ([e, o, l] = a, t = vt) : [t, e, o, l] = a, !t)
    return st;
  Array.isArray(e) || (e = [e]), Array.isArray(o) || (o = [o]);
  const n = [], r = () => {
    n.forEach((p) => p()), n.length = 0;
  }, s = (p, c, f, m) => (p.addEventListener(c, f, m), () => p.removeEventListener(c, f, m)), i = watch(
    () => [de(t), it(l)],
    ([p, c]) => {
      r(), p && n.push(
        ...e.flatMap((f) => o.map((m) => s(p, f, m, c)))
      );
    },
    { immediate: true, flush: "post" }
  ), d = () => {
    i(), r();
  };
  return wo(d), d;
}
var to = false;
function xe(a, t, e = {}) {
  const { window: o = vt, ignore: l = [], capture: n = true, detectIframe: r = false } = e;
  if (!o)
    return;
  Ta && !to && (to = true, Array.from(o.document.body.children).forEach((f) => f.addEventListener("click", st)));
  let s = true;
  const i = (f) => l.some((m) => {
    if (typeof m == "string")
      return Array.from(o.document.querySelectorAll(m)).some((v) => v === f.target || f.composedPath().includes(v));
    {
      const v = de(m);
      return v && (f.target === v || f.composedPath().includes(v));
    }
  }), p = [
    Ue(o, "click", (f) => {
      const m = de(a);
      if (!(!m || m === f.target || f.composedPath().includes(m))) {
        if (f.detail === 0 && (s = !i(f)), !s) {
          s = true;
          return;
        }
        t(f);
      }
    }, { passive: true, capture: n }),
    Ue(o, "pointerdown", (f) => {
      const m = de(a);
      m && (s = !f.composedPath().includes(m) && !i(f));
    }, { passive: true }),
    r && Ue(o, "blur", (f) => {
      setTimeout(() => {
        var m;
        const v = de(a);
        ((m = o.document.activeElement) == null ? void 0 : m.tagName) === "IFRAME" && !(v != null && v.contains(o.document.activeElement)) && t(f);
      }, 0);
    })
  ].filter(Boolean);
  return () => p.forEach((f) => f());
}
function Mt(a = {}) {
  var t;
  const { window: e = vt } = a, o = (t = a.document) != null ? t : e == null ? void 0 : e.document, l = Sa(
    () => null,
    () => o == null ? void 0 : o.activeElement
  );
  return e && (Ue(e, "blur", (n) => {
    n.relatedTarget === null && l.trigger();
  }, true), Ue(e, "focus", l.trigger, true)), l;
}
function Ra() {
  const a = ref(false);
  return getCurrentInstance() && onMounted(() => {
    a.value = true;
  }), a;
}
function Na(a) {
  const t = Ra();
  return computed(() => (t.value, !!a()));
}
function La(a) {
  return JSON.parse(JSON.stringify(a));
}
var oo = Object.getOwnPropertySymbols;
var Ia = Object.prototype.hasOwnProperty;
var Ka = Object.prototype.propertyIsEnumerable;
var Ha = (a, t) => {
  var e = {};
  for (var o in a)
    Ia.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && oo)
    for (var o of oo(a))
      t.indexOf(o) < 0 && Ka.call(a, o) && (e[o] = a[o]);
  return e;
};
function ut(a, t, e = {}) {
  const o = e, { window: l = vt } = o, n = Ha(o, ["window"]);
  let r;
  const s = Na(() => l && "ResizeObserver" in l), i = () => {
    r && (r.disconnect(), r = void 0);
  }, d = computed(
    () => Array.isArray(a) ? a.map((f) => de(f)) : [de(a)]
  ), p = watch(
    d,
    (f) => {
      if (i(), s.value && l) {
        r = new ResizeObserver(t);
        for (const m of f)
          m && r.observe(m, n);
      }
    },
    { immediate: true, flush: "post", deep: true }
  ), c = () => {
    i(), p();
  };
  return wo(c), {
    isSupported: s,
    stop: c
  };
}
function I(a, t, e, o = {}) {
  var l, n, r;
  const {
    clone: s = false,
    passive: i = false,
    eventName: d,
    deep: p = false,
    defaultValue: c,
    shouldEmit: f
  } = o, m = getCurrentInstance(), v = e || (m == null ? void 0 : m.emit) || ((l = m == null ? void 0 : m.$emit) == null ? void 0 : l.bind(m)) || ((r = (n = m == null ? void 0 : m.proxy) == null ? void 0 : n.$emit) == null ? void 0 : r.bind(m == null ? void 0 : m.proxy));
  let g = d;
  t || (t = "modelValue"), g = g || `update:${t.toString()}`;
  const E = (A) => s ? typeof s == "function" ? s(A) : La(A) : A, x = () => Aa(a[t]) ? E(a[t]) : c, S = (A) => {
    f ? f(A) && v(g, A) : v(g, A);
  };
  if (i) {
    const A = x(), O = ref(A);
    return watch(
      () => a[t],
      (D) => O.value = E(D)
    ), watch(
      O,
      (D) => {
        (D !== a[t] || p) && S(D);
      },
      { deep: p }
    ), O;
  } else
    return computed({
      get() {
        return x();
      },
      set(A) {
        S(A);
      }
    });
}
function ne(a, t, e, o = {}) {
  const {
    arrowKeyOptions: l = "both",
    attributeName: n = "data-radix-vue-collection-item",
    itemsArray: r = [],
    loop: s = true,
    dir: i = "ltr",
    preventScroll: d = true
  } = o, [p, c, f, m] = [
    a.key === "ArrowRight",
    a.key === "ArrowLeft",
    a.key === "ArrowUp",
    a.key === "ArrowDown"
  ], v = f || m, g = p || c;
  if (!v && !g || l === "vertical" && g || l === "horizontal" && v)
    return null;
  const E = e ? Array.from(e.querySelectorAll(`[${n}]`)) : r;
  return E.length ? (d && a.preventDefault(), xo(E, t, {
    goForward: v ? m : i === "ltr" ? p : c,
    loop: s
  })) : null;
}
function xo(a, t, { goForward: e, loop: o }, l = a.length) {
  if (--l === 0)
    return null;
  const n = a.indexOf(t), r = e ? n + 1 : n - 1;
  if (!o && (r < 0 || r >= a.length))
    return null;
  const s = (r + a.length) % a.length, i = a[s];
  return i ? i.hasAttribute("disabled") && i.getAttribute("disabled") !== "false" ? xo(
    a,
    i,
    { goForward: e, loop: o },
    l
  ) : i : null;
}
async function $o(a, t, e = 500) {
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
var So = (a, t = 300) => {
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
function ko(a, t) {
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
var za = "data-radix-vue-collection-item";
var ao = Symbol();
var $e = () => {
  const a = (l) => {
    provide(ao, {
      collectionRef: l
    });
  }, t = inject(ao);
  return { createCollection: a, setCollection: (l) => {
    t && (t.collectionRef = l);
  }, getItems: (l) => {
    const n = l ?? de(t == null ? void 0 : t.collectionRef);
    return n ? Array.from(
      n.querySelectorAll(
        `[${za}]:not([data-disabled])`
      )
    ) : [];
  } };
};
var Ya = (a) => {
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
          const p = s.borderBoxSize, c = Array.isArray(p) ? p[0] : p;
          i = c.inlineSize, d = c.blockSize;
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
var Wa = ka(() => ({ count: ref(0) }));
var ye = (a) => {
  const { count: t } = Wa();
  return a || t.value++, a || `radix-${t.value}`;
};
function Dt(a) {
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
function Ao(a) {
  return a ? a.flatMap((t) => t.type === Fragment ? Ao(t.children) : [t]) : [];
}
var Ua = [
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
var Z = Ua.reduce((a, t) => {
  const e = defineComponent({
    props: {
      asChild: Boolean
    },
    setup(o, { slots: l, attrs: n }) {
      var s, i;
      if (!!o.asChild) {
        const d = Ao((s = l.default) == null ? void 0 : s.call(l)), p = getCurrentInstance();
        if (d.length > 1) {
          const f = (i = p == null ? void 0 : p.parent) != null && i.type.__name ? `<${p.parent.type.__name} />` : "component";
          throw new Error(
            [
              `Detected an invalid children for \`${f}\` with \`asChild\` prop.`,
              "",
              "Note: All components accepting `asChild` expect only one direct child of valid VNode type.",
              "You can apply a few solutions:",
              [
                "Provide a single child element so that we can forward the props onto that element.",
                "Ensure the first child is an actual element instead of a raw text node or comment node."
              ].map((m) => `  - ${m}`).join(`
`)
            ].join(`
`)
          );
        }
        return typeof d[0].type == "string" ? () => h(d[0]) : () => h(_a, () => {
          var f;
          return (f = l.default) == null ? void 0 : f.call(l);
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
var B = () => {
  const a = ref(), t = computed(() => de(a));
  return {
    primitiveElement: a,
    currentElement: t
  };
};
var qa = Z.a;
var X = Z.button;
var M = Z.div;
Z.form;
var To = Z.h2;
var Ga = Z.h3;
var Xa = Z.img;
Z.input;
var je = Z.label;
Z.li;
Z.nav;
Z.ol;
var Po = Z.p;
var ee = Z.span;
var Ja = Z.svg;
Z.ul;
var Rt = Symbol();
var Za = defineComponent({
  __name: "CollapsibleRoot",
  props: {
    asChild: { type: Boolean, default: false },
    defaultOpen: { type: Boolean, default: false },
    open: { type: Boolean, default: void 0 },
    disabled: { type: Boolean }
  },
  emits: ["update:open"],
  setup(a, { emit: t }) {
    const e = a, o = I(e, "open", t, {
      defaultValue: e.defaultOpen,
      passive: true
    }), l = I(e, "disabled");
    return provide(Rt, {
      contentId: ye(),
      disabled: l,
      open: o,
      onOpenToggle: () => {
        o.value = !o.value;
      }
    }), (n, r) => (openBlock(), createBlock(unref(M), {
      asChild: e.asChild,
      "data-state": e.open ? "open" : "closed",
      "data-disabled": e.disabled ? "" : void 0
    }, {
      default: withCtx(() => [
        renderSlot(n.$slots, "default", { open: unref(o) })
      ]),
      _: 3
    }, 8, ["asChild", "data-state", "data-disabled"]));
  }
});
var Qa = defineComponent({
  __name: "CollapsibleTrigger",
  props: {
    asChild: { type: Boolean, default: false }
  },
  setup(a) {
    const t = a, e = inject(
      Rt
    );
    return (o, l) => {
      var n, r, s, i, d, p, c, f;
      return openBlock(), createBlock(unref(X), {
        type: "button",
        asChild: t.asChild,
        "aria-controls": (n = unref(e)) == null ? void 0 : n.contentId,
        "aria-expanded": ((r = unref(e)) == null ? void 0 : r.open.value) || false,
        "data-state": (s = unref(e)) != null && s.open.value ? "open" : "closed",
        "data-disabled": (d = (i = unref(e)) == null ? void 0 : i.disabled) != null && d.value ? "" : void 0,
        disabled: (c = (p = unref(e)) == null ? void 0 : p.disabled) == null ? void 0 : c.value,
        onClick: (f = unref(e)) == null ? void 0 : f.onOpenToggle
      }, {
        default: withCtx(() => [
          renderSlot(o.$slots, "default")
        ]),
        _: 3
      }, 8, ["asChild", "aria-controls", "aria-expanded", "data-state", "data-disabled", "disabled", "onClick"]);
    };
  }
});
function Fa(a, t) {
  const e = ref({}), o = ref(a.value), l = ref("none"), n = a.value ? "mounted" : "unmounted", { state: r, dispatch: s } = ko(n, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  if (watchEffect(async () => {
    const d = e.value, p = o.value, c = p !== a.value;
    if (await nextTick(), c) {
      const f = l.value, m = xt(t);
      a.value ? s("MOUNT") : m === "none" || (d == null ? void 0 : d.display) === "none" ? s("UNMOUNT") : s(p && f !== m ? "ANIMATION_OUT" : "UNMOUNT"), o.value = a.value;
    }
  }), t) {
    const d = (c) => {
      const m = xt(t).includes(
        c.animationName
      );
      c.target === t && m && s("ANIMATION_END");
    }, p = (c) => {
      c.target === t && (l.value = xt(t));
    };
    t.addEventListener("animationstart", p), t.addEventListener("animationcancel", d), t.addEventListener("animationend", d);
  } else
    s("ANIMATION_END");
  const i = computed(
    () => ["mounted", "unmountSuspended"].includes(r.value)
  );
  return e.value = getComputedStyle(t), {
    isPresent: i
  };
}
function xt(a) {
  return a && getComputedStyle(a).animationName || "none";
}
var Va = defineComponent({
  __name: "Presence",
  props: {
    present: { type: Boolean }
  },
  setup(a, { expose: t }) {
    const e = a, { present: o } = toRefs(e), l = useSlots();
    let n = ref(false);
    const r = {
      created(i) {
        const { isPresent: d } = Fa(o, i);
        Ma(n, d, { direction: "rtl" });
      }
    }, s = () => {
      var i, d;
      return (
        // @ts-ignore
        withDirectives((d = (i = l.default) == null ? void 0 : i.call(l)) == null ? void 0 : d[0], [
          [r],
          [vShow, n.value]
        ])
      );
    };
    return t({
      present: n
    }), (i, d) => (openBlock(), createBlock(s));
  }
});
var ja = defineComponent({
  inheritAttrs: false,
  __name: "CollapsibleContent",
  props: {
    asChild: { type: Boolean, default: false }
  },
  setup(a) {
    const t = a, e = inject(
      Rt
    ), o = ref(), { primitiveElement: l, currentElement: n } = B(), r = ref(0), s = ref(0), i = computed(() => e == null ? void 0 : e.open.value), d = ref(i.value), p = ref();
    return watch(
      () => {
        var c;
        return [i.value, (c = o.value) == null ? void 0 : c.present];
      },
      async () => {
        await nextTick();
        const c = n.value;
        if (!c)
          return;
        p.value = p.value || {
          transitionDuration: c.style.transitionDuration,
          animationName: c.style.animationName
        }, c.style.transitionDuration = "0s", c.style.animationName = "none";
        const f = c.getBoundingClientRect();
        s.value = f.height, r.value = f.width, d.value || (c.style.transitionDuration = p.value.transitionDuration, c.style.animationName = p.value.animationName);
      },
      {
        immediate: true
      }
    ), requestAnimationFrame(() => {
      d.value = false;
    }), (c, f) => (openBlock(), createBlock(unref(Va), {
      ref_key: "presentRef",
      ref: o,
      present: unref(e).open.value
    }, {
      default: withCtx(() => {
        var m, v, g, E, x;
        return [
          createVNode(unref(M), mergeProps({
            ref_key: "primitiveElement",
            ref: l
          }, c.$attrs, {
            asChild: t.asChild,
            "data-state": (m = unref(e)) != null && m.open.value ? "open" : "closed",
            "data-disabled": (g = (v = unref(e)) == null ? void 0 : v.disabled) != null && g.value ? "true" : void 0,
            id: (E = unref(e)) == null ? void 0 : E.contentId,
            hidden: !((x = unref(e)) != null && x.open),
            style: {
              ["--radix-collapsible-content-height"]: `${s.value}px`,
              ["--radix-collapsible-content-width"]: `${r.value}px`
            }
          }), {
            default: withCtx(() => [
              renderSlot(c.$slots, "default")
            ]),
            _: 3
          }, 16, ["asChild", "data-state", "data-disabled", "id", "hidden", "style"])
        ];
      }),
      _: 3
    }, 8, ["present"]));
  }
});
var Nt = Symbol();
var Lt = Symbol();
var et = Symbol();
var Bo = defineComponent({
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
var en = [
  "Home",
  "End",
  "ArrowDown",
  "ArrowUp",
  "ArrowLeft",
  "ArrowRight"
];
var cl = defineComponent({
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
      Nt
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
      if (!en.includes(i.key))
        return;
      const d = (e == null ? void 0 : e.direction) === "ltr", p = i.target, c = r().filter(
        // (item) => !item.ref.current?.disabled
        // (item) => !item.disabled
        (O) => O
      ), f = c.findIndex(
        // (item) => item.ref.current === target
        (O) => O === p
      ), m = c.length;
      if (f === -1)
        return;
      i.preventDefault();
      let v = f;
      const g = 0, E = m - 1, x = () => {
        v = f + 1, v > E && (v = g);
      }, S = () => {
        v = f - 1, v < g && (v = E);
      };
      switch (i.key) {
        case "Home":
          v = g;
          break;
        case "End":
          v = E;
          break;
        case "ArrowRight":
          (e == null ? void 0 : e.orientation) === "horizontal" && (d ? x() : S());
          break;
        case "ArrowDown":
          (e == null ? void 0 : e.orientation) === "vertical" && x();
          break;
        case "ArrowLeft":
          (e == null ? void 0 : e.orientation) === "horizontal" && (d ? S() : x());
          break;
        case "ArrowUp":
          (e == null ? void 0 : e.orientation) === "vertical" && S();
          break;
      }
      const A = v % m;
      c[A].focus();
    };
    return (i, d) => {
      var p;
      return openBlock(), createBlock(unref(Za), {
        "data-orientation": (p = unref(e)) == null ? void 0 : p.orientation,
        "data-state": l.value ? "open" : "closed",
        disabled: n.value,
        open: l.value,
        "onUpdate:open": d[0] || (d[0] = (c) => l.value = c),
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
var pl = defineComponent({
  __name: "AccordionContent",
  setup(a) {
    const t = inject(
      et
    ), e = inject(
      ht
    );
    return (o, l) => {
      var n, r;
      return openBlock(), createBlock(unref(ja), {
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
var fl = defineComponent({
  __name: "AccordionHeader",
  setup(a) {
    const t = inject(
      et
    ), e = inject(
      ht
    );
    return (o, l) => {
      var n, r, s;
      return openBlock(), createBlock(unref(Ga), {
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
var tn = defineComponent({
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
    const e = a, o = I(e, "modelValue", t, {
      defaultValue: e.defaultValue,
      passive: true
    });
    return provide(Nt, {
      modelValue: o,
      onItemOpen: (r) => {
        o.value = [...o.value, r];
      },
      onItemClose: (r) => {
        o.value = [...o.value].filter(
          (s) => s !== r
        );
      }
    }), provide(Lt, {
      collapsible: false
    }), (r, s) => (openBlock(), createBlock(Bo, normalizeProps(guardReactiveProps(e)), {
      default: withCtx(() => [
        renderSlot(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var on = defineComponent({
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
    const e = a, o = I(e, "modelValue", t, {
      defaultValue: e.defaultValue ?? "",
      passive: true
    });
    return provide(Nt, {
      modelValue: o,
      onItemOpen: (l) => {
        o.value = l;
      },
      onItemClose: (l) => {
        e.collapsible && (o.value = "");
      }
    }), provide(Lt, {
      collapsible: e.collapsible
    }), (l, n) => (openBlock(), createBlock(Bo, normalizeProps(guardReactiveProps(e)), {
      default: withCtx(() => [
        renderSlot(l.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var ml = defineComponent({
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
    return (o, l) => e.type === "multiple" ? (openBlock(), createBlock(tn, mergeProps({ key: 0 }, e, {
      "onUpdate:modelValue": l[0] || (l[0] = (n) => t("update:modelValue", n))
    }), {
      default: withCtx(() => [
        renderSlot(o.$slots, "default")
      ]),
      _: 3
    }, 16)) : (openBlock(), createBlock(on, mergeProps({ key: 1 }, e, {
      "onUpdate:modelValue": l[1] || (l[1] = (n) => t("update:modelValue", n))
    }), {
      default: withCtx(() => [
        renderSlot(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var vl = defineComponent({
  __name: "AccordionTrigger",
  setup(a) {
    const t = inject(
      et
    ), e = inject(
      ht
    ), o = inject(Lt);
    return (l, n) => {
      var r, s, i, d;
      return openBlock(), createBlock(unref(Qa), {
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
var an = ["id", "checked", "name", "disabled", "required", "data-state"];
var Oo = Symbol();
var hl = defineComponent({
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
    provide(Oo, {
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
        }), null, 16, an),
        renderSlot(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["asChild", "value", "aria-checked", "data-state", "data-disabled"]));
  }
});
var _l = defineComponent({
  __name: "CheckboxIndicator",
  props: {
    asChild: { type: Boolean, default: false },
    forceMount: { type: Boolean }
  },
  setup(a) {
    const t = a, e = inject(Oo);
    return (o, l) => {
      var n;
      return (n = unref(e)) != null && n.modelValue.value ? (openBlock(), createBlock(unref(ee), {
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
var nn = ["id", "checked", "name", "disabled", "required", "data-state", "data-disabled"];
var Mo = Symbol();
var yl = defineComponent({
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
    const e = a, o = I(e, "open", t, {
      defaultValue: e.defaultOpen,
      passive: true
      // set passive to true so that if no props.modelValue was passed, it will still update
    }), l = () => {
      o.value = !o.value;
    };
    provide(Mo, {
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
        }), null, 16, nn),
        renderSlot(r.$slots, "default")
      ]),
      _: 3
    }, 8, ["value", "aria-checked", "data-state", "data-disabled"]));
  }
});
var gl = defineComponent({
  __name: "SwitchThumb",
  setup(a) {
    const t = inject(Mo);
    return (e, o) => {
      var l, n, r, s;
      return openBlock(), createBlock(unref(ee), {
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
var bl = defineComponent({
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
var wl = defineComponent({
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
var ln = ["id", "checked", "name", "disabled", "data-state", "data-disabled"];
var El = defineComponent({
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
    const e = a, o = I(e, "pressed", t, {
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
        }), null, 16, ln),
        renderSlot(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["value", "aria-checked", "data-state", "data-disabled"]));
  }
});
var Do = Symbol();
var Cl = defineComponent({
  __name: "ToggleGroupRoot",
  props: {
    asChild: { type: Boolean },
    type: { default: "single" },
    value: {},
    defaultValue: {},
    disabled: { type: Boolean, default: false },
    rovingFocus: { type: Boolean, default: true },
    orientation: { default: "horizontal" },
    dir: { default: "ltr" },
    loop: { type: Boolean, default: false },
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(a, { emit: t }) {
    const e = a, { primitiveElement: o, currentElement: l } = B(), n = ref(), r = ref(), s = Mt(), i = ref([]), d = I(e, "modelValue", t, {
      defaultValue: e.defaultValue,
      passive: true
    });
    provide(Do, {
      type: e.type,
      modelValue: d,
      changeModelValue: p,
      parentElement: l,
      activeValue: n,
      currentFocusedElement: r,
      dir: e.dir,
      orientation: e.orientation,
      loop: e.loop,
      itemsArray: i,
      rovingFocus: e.rovingFocus,
      rootDisabled: e.disabled
    });
    function p(c) {
      if (e.type === "single")
        d.value = c;
      else {
        let f = e.modelValue;
        if (f.includes(c)) {
          let m = f.findIndex((v) => v === c);
          f.splice(m, 1);
        } else
          f.push(c);
        d.value = f;
      }
    }
    return watch(
      s,
      () => {
        if (s.value === l.value && !e.disabled) {
          if (!i.value.length)
            return;
          if (r.value)
            r.value.focus();
          else {
            let c = i.value.filter(
              (f) => !f.hasAttribute("disabled") && !f.hasAttribute("data-disabled")
            );
            c[0].focus(), r.value = c[0];
          }
        }
      },
      { immediate: true }
    ), (c, f) => (openBlock(), createBlock(unref(M), {
      "as-child": e.asChild,
      ref_key: "primitiveElement",
      ref: o,
      role: "group",
      dir: e.dir,
      tabindex: "0",
      "aria-label": "Text alignment",
      "data-orientation": e.orientation
    }, {
      default: withCtx(() => [
        renderSlot(c.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "dir", "data-orientation"]));
  }
});
var xl = defineComponent({
  __name: "ToggleGroupItem",
  props: {
    asChild: { type: Boolean, default: false },
    value: {},
    disabled: { type: Boolean }
  },
  setup(a) {
    const t = a, e = inject(
      Do
    ), { primitiveElement: o, currentElement: l } = B();
    onMounted(() => {
      var c;
      (c = e == null ? void 0 : e.itemsArray.value) == null || c.push(l.value);
    });
    const n = computed(() => {
      var c, f, m;
      return (e == null ? void 0 : e.type) === "multiple" ? (f = (c = e == null ? void 0 : e.modelValue) == null ? void 0 : c.value) != null && f.includes(t.value) ? "on" : "off" : ((m = e == null ? void 0 : e.modelValue) == null ? void 0 : m.value) === t.value ? "on" : "off";
    }), r = computed(() => {
      var c, f, m;
      return (e == null ? void 0 : e.type) === "multiple" ? (f = (c = e == null ? void 0 : e.modelValue) == null ? void 0 : c.value) == null ? void 0 : f.includes(t.value) : ((m = e == null ? void 0 : e.modelValue) == null ? void 0 : m.value) === t.value;
    });
    function s(c) {
      if (!(e != null && e.rovingFocus) || e != null && e.rootDisabled)
        return;
      (c.key === "ArrowLeft" || c.key === "ArrowRight" || c.key === "ArrowUp" || c.key === "ArrowDown") && c.preventDefault();
      const f = ne(
        c,
        l.value,
        e == null ? void 0 : e.parentElement.value,
        { loop: e == null ? void 0 : e.loop }
      );
      f && (f.focus(), e.currentFocusedElement.value = f);
    }
    const i = computed(() => {
      var c, f, m;
      return (c = e == null ? void 0 : e.currentFocusedElement) != null && c.value ? ((m = e == null ? void 0 : e.currentFocusedElement) == null ? void 0 : m.value) === l.value ? "0" : "-1" : ((f = e == null ? void 0 : e.modelValue) == null ? void 0 : f.value) === t.value ? "0" : "-1";
    }), d = computed(() => (e == null ? void 0 : e.type) === "multiple" ? "checkbox" : "radio");
    function p() {
      e != null && e.rootDisabled || (e == null || e.changeModelValue(t.value), e.currentFocusedElement.value = l.value);
    }
    return (c, f) => {
      var m, v;
      return openBlock(), createBlock(unref(X), {
        "as-child": t.asChild,
        ref_key: "primitiveElement",
        ref: o,
        type: "button",
        role: d.value,
        "data-state": n.value,
        disabled: t.disabled || ((m = unref(e)) == null ? void 0 : m.rootDisabled),
        "data-disabled": t.disabled ? "" : void 0,
        "aria-checked": r.value,
        "data-orientation": (v = unref(e)) == null ? void 0 : v.orientation,
        onClick: p,
        onKeydown: s,
        "data-radix-vue-collection-item": "",
        tabindex: i.value
      }, {
        default: withCtx(() => [
          renderSlot(c.$slots, "default")
        ]),
        _: 3
      }, 8, ["as-child", "role", "data-state", "disabled", "data-disabled", "aria-checked", "data-orientation", "tabindex"]);
    };
  }
});
var $l = defineComponent({
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
var Sl = defineComponent({
  __name: "TabsRoot",
  props: {
    asChild: { type: Boolean, default: false },
    defaultValue: {},
    orientation: { default: "horizontal" },
    dir: { default: "ltr" },
    activationMode: { default: "automatic" },
    modelValue: {},
    onValueChange: {}
  },
  emits: ["update:modelValue"],
  setup(a, { emit: t }) {
    const e = a, o = ref(), l = ref(), n = I(e, "modelValue", t, {
      defaultValue: e.defaultValue,
      passive: true
    });
    return provide(_t, {
      modelValue: n,
      changeModelValue: (r) => {
        n.value = r, r && e.onValueChange && e.onValueChange(r);
      },
      currentFocusedElement: l,
      parentElement: o,
      orientation: e.orientation,
      dir: e.dir,
      loop: true,
      activationMode: e.activationMode
    }), (r, s) => (openBlock(), createBlock(unref(M), {
      asChild: r.asChild,
      dir: e.dir,
      "data-orientation": e.orientation
    }, {
      default: withCtx(() => [
        renderSlot(r.$slots, "default")
      ]),
      _: 3
    }, 8, ["asChild", "dir", "data-orientation"]));
  }
});
var kl = defineComponent({
  __name: "TabsList",
  props: {
    asChild: { type: Boolean, default: false },
    loop: { type: Boolean, default: true }
  },
  setup(a) {
    const t = a, e = inject(_t), { primitiveElement: o, currentElement: l } = B();
    return onMounted(() => {
      e.parentElement.value = l.value, e.loop = t.loop;
    }), (n, r) => {
      var s, i;
      return openBlock(), createBlock(unref(M), {
        asChild: n.asChild,
        role: "tablist",
        ref_key: "primitiveElement",
        ref: o,
        "aria-orientation": (s = unref(e)) == null ? void 0 : s.orientation,
        tabindex: "0",
        "data-orientation": (i = unref(e)) == null ? void 0 : i.orientation,
        style: { outline: "none" }
      }, {
        default: withCtx(() => [
          renderSlot(n.$slots, "default")
        ]),
        _: 3
      }, 8, ["asChild", "aria-orientation", "data-orientation"]);
    };
  }
});
var Al = defineComponent({
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
        asChild: l.asChild,
        role: "tabpanel",
        "data-state": o.value,
        "data-orientation": (i = unref(e)) == null ? void 0 : i.orientation,
        tabindex: "0"
      }, {
        default: withCtx(() => [
          renderSlot(l.$slots, "default")
        ]),
        _: 3
      }, 8, ["asChild", "data-state", "data-orientation"])) : createCommentVNode("", true);
    };
  }
});
var Tl = defineComponent({
  __name: "TabsTrigger",
  props: {
    value: {},
    disabled: { type: Boolean, default: false },
    asChild: { type: Boolean, default: false }
  },
  setup(a) {
    const t = a, e = inject(_t), { primitiveElement: o, currentElement: l } = B();
    function n(i) {
      e == null || e.changeModelValue(i);
    }
    function r(i) {
      const d = ne(
        i,
        l.value,
        e == null ? void 0 : e.parentElement.value,
        {
          arrowKeyOptions: e == null ? void 0 : e.orientation,
          loop: e == null ? void 0 : e.loop
        }
      );
      d && (d.focus(), e.currentFocusedElement.value = d, (e == null ? void 0 : e.activationMode) === "automatic" && n(d == null ? void 0 : d.getAttribute("data-radix-vue-tab-value")));
    }
    const s = computed(() => {
      var i, d, p;
      return (i = e == null ? void 0 : e.currentFocusedElement) != null && i.value ? ((p = e == null ? void 0 : e.currentFocusedElement) == null ? void 0 : p.value) === l.value ? "0" : "-1" : ((d = e == null ? void 0 : e.modelValue) == null ? void 0 : d.value) === t.value ? "0" : "-1";
    });
    return (i, d) => {
      var p, c, f, m, v;
      return openBlock(), createBlock(unref(X), {
        ref_key: "primitiveElement",
        ref: o,
        type: "button",
        asChild: t.asChild,
        role: "tab",
        "aria-selected": ((c = (p = unref(e)) == null ? void 0 : p.modelValue) == null ? void 0 : c.value) === t.value ? "true" : "false",
        "data-state": ((m = (f = unref(e)) == null ? void 0 : f.modelValue) == null ? void 0 : m.value) === t.value ? "active" : "inactive",
        disabled: t.disabled,
        "data-disabled": t.disabled ? "" : void 0,
        tabindex: s.value,
        "data-orientation": (v = unref(e)) == null ? void 0 : v.orientation,
        "data-radix-vue-collection-item": "",
        "data-radix-vue-tab-value": t.value,
        onClick: d[0] || (d[0] = (g) => n(t.value)),
        onKeydown: r
      }, {
        default: withCtx(() => [
          renderSlot(i.$slots, "default")
        ]),
        _: 3
      }, 8, ["asChild", "aria-selected", "data-state", "disabled", "data-disabled", "tabindex", "data-orientation", "data-radix-vue-tab-value"]);
    };
  }
});
var rn = ["value", "aria-valuenow", "name"];
var It = Symbol();
var Pl = defineComponent({
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
    provide(It, {
      modelValue: toRef(() => e.modelValue),
      changeModelValue: (m) => {
        t("update:modelValue", m);
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
    function s(m) {
      t("update:modelValue", f(m, e.step));
    }
    let i;
    function d(m) {
      n.value && n.value.focus(), m.preventDefault(), l.value && (i = l.value.getBoundingClientRect(), m.clientX - 10 - r.value > i.left && m.clientX - 10 - r.value < i.left + i.width && s(
        Math.round(
          (m.clientX - 10 - r.value - i.left) / i.width * 100
        )
      ), document.addEventListener("pointermove", p), document.addEventListener("pointerup", c));
    }
    const p = (m) => {
      n.value && n.value.focus(), m.clientX - 10 - r.value > i.left && m.clientX - 10 - r.value < i.left + i.width && s(
        (m.clientX - 10 - r.value - i.left) / i.width * 100
      ), m.clientX - 10 - r.value <= i.left && s(e.min), m.clientX - 10 - r.value >= i.left + i.width && s(e.max);
    }, c = (m) => {
      document.removeEventListener("pointermove", p), document.removeEventListener("pointerup", c);
    };
    function f(m, v) {
      const g = Math.floor(m / v);
      return m % v <= v / 2 ? g * v : (g + 1) * v;
    }
    return (m, v) => (openBlock(), createBlock(unref(ee), {
      ref_key: "primitiveElement",
      ref: o,
      onPointerdown: d
    }, {
      default: withCtx(() => [
        renderSlot(m.$slots, "default"),
        createBaseVNode("input", {
          style: { display: "none" },
          value: e.modelValue,
          "aria-valuenow": e.modelValue,
          name: e.name
        }, null, 8, rn)
      ]),
      _: 3
    }, 512));
  }
});
var Bl = defineComponent({
  __name: "SliderThumb",
  props: {
    asChild: { type: Boolean, default: false },
    class: {}
  },
  setup(a) {
    const t = a, e = inject(It), { primitiveElement: o, currentElement: l } = B();
    onMounted(() => {
      e != null && e.thumbElement && (e.thumbElement.value = l.value);
    });
    let n = 2;
    function r(s) {
      var p;
      if (!e)
        return;
      (s.keyCode === 32 || s.key === "Enter") && s.preventDefault();
      const i = Number(e == null ? void 0 : e.step), d = Number((p = e.modelValue) == null ? void 0 : p.value);
      (s.key === "ArrowUp" || s.key === "ArrowRight") && (s.shiftKey ? (s.preventDefault(), d + n >= (e == null ? void 0 : e.max) ? e == null || e.changeModelValue(e == null ? void 0 : e.max) : d + n <= (e == null ? void 0 : e.min) ? e == null || e.changeModelValue(e == null ? void 0 : e.min) : e == null || e.changeModelValue(d + n)) : (s.preventDefault(), d + i >= (e == null ? void 0 : e.max) ? e == null || e.changeModelValue(e == null ? void 0 : e.max) : d + i <= (e == null ? void 0 : e.min) ? e == null || e.changeModelValue(e == null ? void 0 : e.min) : e == null || e.changeModelValue(d + i))), (s.key === "ArrowDown" || s.key === "ArrowLeft") && (s.shiftKey ? (s.preventDefault(), d - n >= (e == null ? void 0 : e.max) ? e == null || e.changeModelValue(e == null ? void 0 : e.max) : d - n <= (e == null ? void 0 : e.min) ? e == null || e.changeModelValue(e == null ? void 0 : e.min) : e == null || e.changeModelValue(d - n)) : (s.preventDefault(), d - i >= (e == null ? void 0 : e.max) ? e == null || e.changeModelValue(e == null ? void 0 : e.max) : d - i <= (e == null ? void 0 : e.min) ? e == null || e.changeModelValue(e == null ? void 0 : e.min) : e == null || e.changeModelValue(d - i)));
    }
    return (s, i) => {
      var d, p, c, f, m, v, g, E, x;
      return openBlock(), createElementBlock("span", {
        style: normalizeStyle(`transform: translateX(-50%); position: absolute; left: calc(${(p = (d = unref(e)) == null ? void 0 : d.modelValue) == null ? void 0 : p.value}%)`)
      }, [
        createVNode(unref(ee), {
          class: normalizeClass(t.class),
          ref_key: "primitiveElement",
          ref: o,
          role: "slider",
          tabindex: "0",
          "data-disabled": (c = unref(e)) == null ? void 0 : c.disabled,
          "data-orientation": (f = unref(e)) == null ? void 0 : f.orientation,
          "aria-valuenow": (v = (m = unref(e)) == null ? void 0 : m.modelValue) == null ? void 0 : v.value,
          "aria-valuemin": (g = unref(e)) == null ? void 0 : g.min,
          "aria-valuemax": (E = unref(e)) == null ? void 0 : E.max,
          "aria-orientation": (x = unref(e)) == null ? void 0 : x.orientation,
          onKeydown: r
        }, null, 8, ["class", "data-disabled", "data-orientation", "aria-valuenow", "aria-valuemin", "aria-valuemax", "aria-orientation"])
      ], 4);
    };
  }
});
var Ol = defineComponent({
  __name: "SliderTrack",
  props: {
    asChild: { type: Boolean }
  },
  setup(a) {
    return (t, e) => (openBlock(), createBlock(unref(ee), { asChild: t.asChild }, {
      default: withCtx(() => [
        renderSlot(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["asChild"]));
  }
});
var Ml = defineComponent({
  __name: "SliderRange",
  setup(a) {
    const t = inject(It);
    return (e, o) => {
      var l, n, r, s, i;
      return openBlock(), createBlock(unref(ee), {
        "data-disabled": (l = unref(t)) == null ? void 0 : l.disabled,
        "data-orientation": (n = unref(t)) == null ? void 0 : n.orientation,
        style: normalizeStyle(`left: 0%; right: ${(((r = unref(t)) == null ? void 0 : r.max) ?? 100) - (((i = (s = unref(t)) == null ? void 0 : s.modelValue) == null ? void 0 : i.value) ?? 0)}%`)
      }, null, 8, ["data-disabled", "data-orientation", "style"]);
    };
  }
});
var Ro = "RadioGroup";
var No = Symbol();
var Dl = defineComponent({
  __name: "RadioGroupRoot",
  props: {
    asChild: { type: Boolean, default: false },
    modelValue: {},
    onValueChange: {},
    defaultValue: {},
    value: {},
    disabled: { type: Boolean, default: false },
    name: {},
    required: { type: Boolean, default: false },
    orientation: { default: void 0 },
    dir: { default: "ltr" },
    loop: { type: Boolean, default: true }
  },
  emits: ["update:modelValue"],
  setup(a, { emit: t }) {
    const e = a, { primitiveElement: o, currentElement: l } = B(), n = I(e, "modelValue", t, {
      defaultValue: e.defaultValue,
      passive: true
    });
    return provide(Ro, {
      modelValue: n,
      changeModelValue: (r) => {
        n.value = r, r && e.onValueChange && e.onValueChange(r);
      },
      parentElement: l,
      currentFocusedElement: ref(),
      disabled: ref(e.disabled),
      loop: ref(e.loop),
      orientation: ref(e.orientation),
      name: e.name,
      required: ref(e.required)
    }), (r, s) => (openBlock(), createBlock(unref(M), {
      asChild: e.asChild,
      ref_key: "primitiveElement",
      ref: o,
      role: "radiogroup",
      "data-disabled": e.disabled ? "" : void 0,
      required: e.required,
      "aria-required": e.required,
      dir: e.dir,
      name: e.name
    }, {
      default: withCtx(() => [
        renderSlot(r.$slots, "default")
      ]),
      _: 3
    }, 8, ["asChild", "data-disabled", "required", "aria-required", "dir", "name"]));
  }
});
var sn = ["value", "required", "disabled", "checked"];
var Rl = defineComponent({
  __name: "RadioGroupItem",
  props: {
    asChild: { type: Boolean, default: false },
    value: {},
    disabled: { type: Boolean, default: false },
    required: { type: Boolean }
  },
  setup(a) {
    const t = a, e = inject(Ro), o = computed(() => (e == null ? void 0 : e.disabled.value) || t.disabled), l = computed(() => (e == null ? void 0 : e.required.value) || t.required), n = computed(() => {
      var c;
      return ((c = e == null ? void 0 : e.modelValue) == null ? void 0 : c.value) === t.value;
    });
    provide(No, readonly({ disabled: o, checked: n }));
    function r(c) {
      o.value || e == null || e.changeModelValue(c);
    }
    const { primitiveElement: s, currentElement: i } = B();
    function d(c) {
      if (o.value)
        return;
      const f = ne(
        c,
        i.value,
        e == null ? void 0 : e.parentElement.value,
        {
          arrowKeyOptions: e == null ? void 0 : e.orientation.value,
          loop: e == null ? void 0 : e.loop.value
        }
      );
      f && (r(f == null ? void 0 : f.getAttribute("value")), e.currentFocusedElement.value = f, f.focus());
    }
    const p = computed(() => {
      var c, f;
      return (c = e == null ? void 0 : e.currentFocusedElement) != null && c.value ? ((f = e == null ? void 0 : e.currentFocusedElement) == null ? void 0 : f.value) === i.value ? "0" : "-1" : n.value ? "0" : "-1";
    });
    return (c, f) => {
      var m;
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(unref(X), mergeProps({
          type: "button",
          ref_key: "primitiveElement",
          ref: s,
          role: "radio",
          "data-radix-vue-collection-item": ""
        }, c.$attrs, {
          asChild: t.asChild,
          disabled: o.value ? true : void 0,
          "data-state": n.value ? "checked" : "unchecked",
          "data-disabled": o.value ? "" : void 0,
          tabindex: p.value,
          value: t.value,
          name: (m = unref(e)) == null ? void 0 : m.name,
          onClick: f[0] || (f[0] = (v) => r(t.value)),
          onKeydown: d
        }), {
          default: withCtx(() => [
            renderSlot(c.$slots, "default")
          ]),
          _: 3
        }, 16, ["asChild", "disabled", "data-state", "data-disabled", "tabindex", "value", "name"]),
        createBaseVNode("input", {
          type: "radio",
          "aria-hidden": "true",
          tabindex: "-1",
          value: t.value,
          required: l.value,
          disabled: o.value,
          style: { transform: "translateX(-100%)", position: "absolute", "pointer-events": "none", opacity: "0", margin: "0px", width: "25px", height: "25px" },
          checked: n.value
        }, null, 8, sn)
      ], 64);
    };
  }
});
var Nl = defineComponent({
  __name: "RadioGroupIndicator",
  props: {
    asChild: { type: Boolean, default: false }
  },
  setup(a) {
    const t = inject(No);
    return (e, o) => {
      var l, n, r;
      return (l = unref(t)) != null && l.checked ? (openBlock(), createBlock(unref(ee), {
        key: 0,
        asChild: e.asChild,
        "data-state": (n = unref(t)) != null && n.checked ? "checked" : "unchecked",
        "data-disabled": (r = unref(t)) != null && r.disabled ? "" : void 0
      }, {
        default: withCtx(() => [
          renderSlot(e.$slots, "default")
        ]),
        _: 3
      }, 8, ["asChild", "data-state", "data-disabled"])) : createCommentVNode("", true);
    };
  }
});
var Lo = Symbol();
var Ll = defineComponent({
  __name: "ProgressRoot",
  props: {
    asChild: { type: Boolean },
    value: {},
    modelValue: {},
    max: {}
  },
  setup(a) {
    const t = a;
    return provide(Lo, {
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
var Il = defineComponent({
  __name: "ProgressIndicator",
  setup(a) {
    const t = inject(Lo);
    return (e, o) => {
      var l, n, r, s, i, d, p;
      return openBlock(), createBlock(unref(M), {
        "data-state": ((l = unref(t)) == null ? void 0 : l.modelValue) === ((n = unref(t)) == null ? void 0 : n.max) ? "complete" : "loading",
        "data-value": (r = unref(t)) == null ? void 0 : r.modelValue,
        "data-max": (s = unref(t)) == null ? void 0 : s.max,
        style: normalizeStyle(`left: 0%; right: ${(((i = unref(t)) == null ? void 0 : i.max) ?? 100) - (((p = (d = unref(t)) == null ? void 0 : d.modelValue) == null ? void 0 : p.value) ?? 0)}%`)
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
var Kl = defineComponent({
  __name: "DialogRoot",
  props: {
    open: { type: Boolean, default: void 0 },
    defaultOpen: { type: Boolean, default: false },
    modal: { type: Boolean, default: true }
  },
  emits: ["update:modelValue"],
  setup(a, { emit: t }) {
    const e = a, o = ref(), l = I(e, "open", t, {
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
var Hl = defineComponent({
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
var un = {};
function dn(a, t) {
  return openBlock(), createBlock(Teleport, { to: "body" }, [
    renderSlot(a.$slots, "default")
  ]);
}
var zl = De(un, [["render", dn]]);
var Yl = defineComponent({
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
      l.value && (e != null && e.open.value ? (Dt(l.value), document.querySelector("body").style.pointerEvents = "none", window.addEventListener("wheel", r, { passive: false }), window.addEventListener("keydown", s)) : (document.querySelector("body").style.pointerEvents = "", window.removeEventListener("wheel", r), window.removeEventListener("keydown", s), e != null && e.triggerButton.value && (e == null || e.triggerButton.value.focus())));
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
      var p, c;
      return (p = unref(e)) != null && p.open.value ? (openBlock(), createBlock(unref(M), {
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
          renderSlot(i.$slots, "default")
        ]),
        _: 3
      }, 8, ["asChild", "data-state"])) : createCommentVNode("", true);
    };
  }
});
var Wl = defineComponent({
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
var Ul = defineComponent({
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
var ql = defineComponent({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean, default: false }
  },
  setup(a) {
    const t = a;
    return (e, o) => (openBlock(), createBlock(unref(To), {
      asChild: t.asChild
    }, {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["asChild"]));
  }
});
var Gl = defineComponent({
  __name: "DialogDescription",
  setup(a) {
    return (t, e) => (openBlock(), createBlock(unref(Po), null, {
      default: withCtx(() => [
        renderSlot(t.$slots, "default")
      ]),
      _: 3
    }));
  }
});
var Ye = Symbol();
var Xl = defineComponent({
  __name: "AlertDialogRoot",
  props: {
    open: { type: Boolean, default: void 0 },
    defaultOpen: { type: Boolean, default: false }
  },
  emits: ["update:open"],
  setup(a, { emit: t }) {
    const e = a, o = I(e, "open", t, {
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
var Jl = defineComponent({
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
var cn = {};
function pn(a, t) {
  return openBlock(), createBlock(Teleport, { to: "body" }, [
    renderSlot(a.$slots, "default")
  ]);
}
var Zl = De(cn, [["render", pn]]);
var Ql = defineComponent({
  __name: "AlertDialogContent",
  props: {
    asChild: { type: Boolean, default: false },
    forceMount: { type: Boolean }
  },
  setup(a) {
    const t = a, e = inject(Ye), { primitiveElement: o, currentElement: l } = B();
    watchEffect(() => {
      l.value && (e != null && e.open.value ? (Dt(l.value), document.querySelector("body").style.pointerEvents = "none", window.addEventListener("wheel", n, { passive: false }), window.addEventListener("keydown", r)) : (document.querySelector("body").style.pointerEvents = "", window.removeEventListener("wheel", n), window.removeEventListener("keydown", r), e != null && e.triggerButton.value && (e == null || e.triggerButton.value.focus())));
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
      var d, p;
      return (d = unref(e)) != null && d.open.value ? (openBlock(), createBlock(unref(M), {
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
          renderSlot(s.$slots, "default")
        ]),
        _: 3
      }, 8, ["asChild", "data-state"])) : createCommentVNode("", true);
    };
  }
});
var Fl = defineComponent({
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
var Vl = defineComponent({
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
var jl = defineComponent({
  __name: "AlertDialogTitle",
  props: {
    asChild: { type: Boolean, default: false }
  },
  setup(a) {
    const t = a;
    return (e, o) => (openBlock(), createBlock(unref(To), {
      asChild: t.asChild
    }, {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["asChild"]));
  }
});
var er = defineComponent({
  __name: "AlertDialogDescription",
  props: {
    asChild: { type: Boolean, default: false }
  },
  setup(a) {
    const t = a;
    return (e, o) => (openBlock(), createBlock(unref(Po), {
      asChild: t.asChild
    }, {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["asChild"]));
  }
});
var fn = ["aria-expanded", "data-state"];
var tr = defineComponent({
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
      ], 8, fn);
    };
  }
});
var yt = Symbol();
var or = defineComponent({
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
var ar = defineComponent({
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
var nr = defineComponent({
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
      return openBlock(), createBlock(unref(qa), {
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
var Io = Symbol();
var lr = defineComponent({
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
    return provide(Io, {
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
var rr = defineComponent({
  __name: "ToolbarToggleItem",
  props: {
    asChild: { type: Boolean, default: false },
    value: {},
    disabled: { type: Boolean }
  },
  setup(a) {
    const t = a, e = inject(
      Io
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
        onClick: i[0] || (i[0] = (p) => unref(e).changeModelValue(t.value)),
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
var ir = defineComponent({
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
var Kt = Symbol();
var sr = defineComponent({
  __name: "AvatarRoot",
  props: {
    asChild: { type: Boolean, default: false }
  },
  setup(a) {
    const t = a, e = ref("loading");
    return provide(Kt, {
      imageLoadingStatus: e
    }), (o, l) => (openBlock(), createBlock(unref(ee), {
      asChild: t.asChild
    }, {
      default: withCtx(() => [
        renderSlot(o.$slots, "default")
      ]),
      _: 3
    }, 8, ["asChild"]));
  }
});
var ur = defineComponent({
  __name: "AvatarImage",
  props: {
    asChild: { type: Boolean, default: false },
    onLoadingStatusChange: {}
  },
  setup(a) {
    const t = inject(Kt);
    return onMounted(() => {
      t.imageLoadingStatus.value = "loaded";
    }), (e, o) => (openBlock(), createBlock(unref(Xa), { asChild: e.asChild }, null, 8, ["asChild"]));
  }
});
var dr = defineComponent({
  __name: "AvatarFallback",
  props: {
    asChild: { type: Boolean, default: false },
    delayMs: { default: 0 }
  },
  setup(a) {
    const t = a, e = inject(Kt);
    let o = ref(), l;
    return t.delayMs ? (l && clearTimeout(l), l = setTimeout(() => {
      o.value = true;
    }, t.delayMs)) : o.value = true, (n, r) => {
      var s;
      return unref(o) && ((s = unref(e)) == null ? void 0 : s.imageLoadingStatus.value) !== "loaded" ? (openBlock(), createBlock(unref(ee), {
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
var Ht = Symbol();
var se = defineComponent({
  __name: "PopperRoot",
  setup(a) {
    const t = ref();
    return provide(Ht, {
      anchor: t,
      onAnchorChange: (e) => {
        t.value = e;
      }
    }), (e, o) => renderSlot(e.$slots, "default");
  }
});
var pe = defineComponent({
  __name: "PopperAnchor",
  props: {
    asChild: { type: Boolean },
    element: {}
  },
  setup(a) {
    const t = a, { primitiveElement: e, currentElement: o } = B(), l = inject(Ht);
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
var mn = (a) => ({
  name: "transformOrigin",
  options: a,
  fn(t) {
    var E, x, S;
    const { placement: e, rects: o, middlewareData: l } = t, r = ((E = l.arrow) == null ? void 0 : E.centerOffset) !== 0, s = r ? 0 : a.arrowWidth, i = r ? 0 : a.arrowHeight, [d, p] = St(e), c = { start: "0%", center: "50%", end: "100%" }[p], f = (((x = l.arrow) == null ? void 0 : x.x) ?? 0) + s / 2, m = (((S = l.arrow) == null ? void 0 : S.y) ?? 0) + i / 2;
    let v = "", g = "";
    return d === "bottom" ? (v = r ? c : `${f}px`, g = `${-i}px`) : d === "top" ? (v = r ? c : `${f}px`, g = `${o.floating.height + i}px`) : d === "right" ? (v = `${-i}px`, g = r ? c : `${m}px`) : d === "left" && (v = `${o.floating.width + i}px`, g = r ? c : `${m}px`), { data: { x: v, y: g } };
  }
});
function St(a) {
  const [t, e = "center"] = a.split("-");
  return [t, e];
}
function We(a) {
  return a.split("-")[1];
}
function zt(a) {
  return a === "y" ? "height" : "width";
}
function me(a) {
  return a.split("-")[0];
}
function Re(a) {
  return ["top", "bottom"].includes(me(a)) ? "x" : "y";
}
function no(a, t, e) {
  let { reference: o, floating: l } = a;
  const n = o.x + o.width / 2 - l.width / 2, r = o.y + o.height / 2 - l.height / 2, s = Re(t), i = zt(s), d = o[i] / 2 - l[i] / 2, p = s === "x";
  let c;
  switch (me(t)) {
    case "top":
      c = { x: n, y: o.y - l.height };
      break;
    case "bottom":
      c = { x: n, y: o.y + o.height };
      break;
    case "right":
      c = { x: o.x + o.width, y: r };
      break;
    case "left":
      c = { x: o.x - l.width, y: r };
      break;
    default:
      c = { x: o.x, y: o.y };
  }
  switch (We(t)) {
    case "start":
      c[s] -= d * (e && p ? -1 : 1);
      break;
    case "end":
      c[s] += d * (e && p ? -1 : 1);
  }
  return c;
}
var vn = async (a, t, e) => {
  const { placement: o = "bottom", strategy: l = "absolute", middleware: n = [], platform: r } = e, s = n.filter(Boolean), i = await (r.isRTL == null ? void 0 : r.isRTL(t));
  let d = await r.getElementRects({ reference: a, floating: t, strategy: l }), { x: p, y: c } = no(d, o, i), f = o, m = {}, v = 0;
  for (let g = 0; g < s.length; g++) {
    const { name: E, fn: x } = s[g], { x: S, y: A, data: O, reset: D } = await x({ x: p, y: c, initialPlacement: o, placement: f, strategy: l, middlewareData: m, rects: d, platform: r, elements: { reference: a, floating: t } });
    p = S ?? p, c = A ?? c, m = { ...m, [E]: { ...m[E], ...O } }, D && v <= 50 && (v++, typeof D == "object" && (D.placement && (f = D.placement), D.rects && (d = D.rects === true ? await r.getElementRects({ reference: a, floating: t, strategy: l }) : D.rects), { x: p, y: c } = no(d, f, i)), g = -1);
  }
  return { x: p, y: c, placement: f, strategy: l, middlewareData: m };
};
function ge(a, t) {
  return typeof a == "function" ? a(t) : a;
}
function Ko(a) {
  return typeof a != "number" ? function(t) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...t };
  }(a) : { top: a, right: a, bottom: a, left: a };
}
function dt(a) {
  return { ...a, top: a.y, left: a.x, right: a.x + a.width, bottom: a.y + a.height };
}
async function qe(a, t) {
  var e;
  t === void 0 && (t = {});
  const { x: o, y: l, platform: n, rects: r, elements: s, strategy: i } = a, { boundary: d = "clippingAncestors", rootBoundary: p = "viewport", elementContext: c = "floating", altBoundary: f = false, padding: m = 0 } = ge(t, a), v = Ko(m), g = s[f ? c === "floating" ? "reference" : "floating" : c], E = dt(await n.getClippingRect({ element: (e = await (n.isElement == null ? void 0 : n.isElement(g))) == null || e ? g : g.contextElement || await (n.getDocumentElement == null ? void 0 : n.getDocumentElement(s.floating)), boundary: d, rootBoundary: p, strategy: i })), x = c === "floating" ? { ...r.floating, x: o, y: l } : r.reference, S = await (n.getOffsetParent == null ? void 0 : n.getOffsetParent(s.floating)), A = await (n.isElement == null ? void 0 : n.isElement(S)) && await (n.getScale == null ? void 0 : n.getScale(S)) || { x: 1, y: 1 }, O = dt(n.convertOffsetParentRelativeRectToViewportRelativeRect ? await n.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: x, offsetParent: S, strategy: i }) : x);
  return { top: (E.top - O.top + v.top) / A.y, bottom: (O.bottom - E.bottom + v.bottom) / A.y, left: (E.left - O.left + v.left) / A.x, right: (O.right - E.right + v.right) / A.x };
}
var Ge = Math.min;
var Pe = Math.max;
function kt(a, t, e) {
  return Pe(a, Ge(t, e));
}
var hn = (a) => ({ name: "arrow", options: a, async fn(t) {
  const { x: e, y: o, placement: l, rects: n, platform: r, elements: s } = t, { element: i, padding: d = 0 } = ge(a, t) || {};
  if (i == null)
    return {};
  const p = Ko(d), c = { x: e, y: o }, f = Re(l), m = zt(f), v = await r.getDimensions(i), g = f === "y", E = g ? "top" : "left", x = g ? "bottom" : "right", S = g ? "clientHeight" : "clientWidth", A = n.reference[m] + n.reference[f] - c[f] - n.floating[m], O = c[f] - n.reference[f], D = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(i));
  let N = D ? D[S] : 0;
  N && await (r.isElement == null ? void 0 : r.isElement(D)) || (N = s.floating[S] || n.floating[m]);
  const T = A / 2 - O / 2, q = N / 2 - v[m] / 2 - 1, U = Ge(p[E], q), F = Ge(p[x], q), K = U, J = N - v[m] - F, z = N / 2 - v[m] / 2 + T, V = kt(K, z, J), j = We(l) != null && z != V && n.reference[m] / 2 - (z < K ? U : F) - v[m] / 2 < 0 ? z < K ? K - z : J - z : 0;
  return { [f]: c[f] - j, data: { [f]: V, centerOffset: z - V + j } };
} });
var Ho = ["top", "right", "bottom", "left"];
Ho.reduce((a, t) => a.concat(t, t + "-start", t + "-end"), []);
var _n = { left: "right", right: "left", bottom: "top", top: "bottom" };
function ct(a) {
  return a.replace(/left|right|bottom|top/g, (t) => _n[t]);
}
function yn(a, t, e) {
  e === void 0 && (e = false);
  const o = We(a), l = Re(a), n = zt(l);
  let r = l === "x" ? o === (e ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return t.reference[n] > t.floating[n] && (r = ct(r)), { main: r, cross: ct(r) };
}
var gn = { start: "end", end: "start" };
function $t(a) {
  return a.replace(/start|end/g, (t) => gn[t]);
}
var bn = function(a) {
  return a === void 0 && (a = {}), { name: "flip", options: a, async fn(t) {
    var e;
    const { placement: o, middlewareData: l, rects: n, initialPlacement: r, platform: s, elements: i } = t, { mainAxis: d = true, crossAxis: p = true, fallbackPlacements: c, fallbackStrategy: f = "bestFit", fallbackAxisSideDirection: m = "none", flipAlignment: v = true, ...g } = ge(a, t), E = me(o), x = me(r) === r, S = await (s.isRTL == null ? void 0 : s.isRTL(i.floating)), A = c || (x || !v ? [ct(r)] : function(K) {
      const J = ct(K);
      return [$t(K), J, $t(J)];
    }(r));
    c || m === "none" || A.push(...function(K, J, z, V) {
      const j = We(K);
      let Q = function(Ae, Te, na) {
        const Ft = ["left", "right"], Vt = ["right", "left"], la = ["top", "bottom"], ra = ["bottom", "top"];
        switch (Ae) {
          case "top":
          case "bottom":
            return na ? Te ? Vt : Ft : Te ? Ft : Vt;
          case "left":
          case "right":
            return Te ? la : ra;
          default:
            return [];
        }
      }(me(K), z === "start", V);
      return j && (Q = Q.map((Ae) => Ae + "-" + j), J && (Q = Q.concat(Q.map($t)))), Q;
    }(r, v, m, S));
    const O = [r, ...A], D = await qe(t, g), N = [];
    let T = ((e = l.flip) == null ? void 0 : e.overflows) || [];
    if (d && N.push(D[E]), p) {
      const { main: K, cross: J } = yn(o, n, S);
      N.push(D[K], D[J]);
    }
    if (T = [...T, { placement: o, overflows: N }], !N.every((K) => K <= 0)) {
      var q, U;
      const K = (((q = l.flip) == null ? void 0 : q.index) || 0) + 1, J = O[K];
      if (J)
        return { data: { index: K, overflows: T }, reset: { placement: J } };
      let z = (U = T.filter((V) => V.overflows[0] <= 0).sort((V, j) => V.overflows[1] - j.overflows[1])[0]) == null ? void 0 : U.placement;
      if (!z)
        switch (f) {
          case "bestFit": {
            var F;
            const V = (F = T.map((j) => [j.placement, j.overflows.filter((Q) => Q > 0).reduce((Q, Ae) => Q + Ae, 0)]).sort((j, Q) => j[1] - Q[1])[0]) == null ? void 0 : F[0];
            V && (z = V);
            break;
          }
          case "initialPlacement":
            z = r;
        }
      if (o !== z)
        return { reset: { placement: z } };
    }
    return {};
  } };
};
function lo(a, t) {
  return { top: a.top - t.height, right: a.right - t.width, bottom: a.bottom - t.height, left: a.left - t.width };
}
function ro(a) {
  return Ho.some((t) => a[t] >= 0);
}
var wn = function(a) {
  return a === void 0 && (a = {}), { name: "hide", options: a, async fn(t) {
    const { rects: e } = t, { strategy: o = "referenceHidden", ...l } = ge(a, t);
    switch (o) {
      case "referenceHidden": {
        const n = lo(await qe(t, { ...l, elementContext: "reference" }), e.reference);
        return { data: { referenceHiddenOffsets: n, referenceHidden: ro(n) } };
      }
      case "escaped": {
        const n = lo(await qe(t, { ...l, altBoundary: true }), e.floating);
        return { data: { escapedOffsets: n, escaped: ro(n) } };
      }
      default:
        return {};
    }
  } };
};
var En = function(a) {
  return a === void 0 && (a = 0), { name: "offset", options: a, async fn(t) {
    const { x: e, y: o } = t, l = await async function(n, r) {
      const { placement: s, platform: i, elements: d } = n, p = await (i.isRTL == null ? void 0 : i.isRTL(d.floating)), c = me(s), f = We(s), m = Re(s) === "x", v = ["left", "top"].includes(c) ? -1 : 1, g = p && m ? -1 : 1, E = ge(r, n);
      let { mainAxis: x, crossAxis: S, alignmentAxis: A } = typeof E == "number" ? { mainAxis: E, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...E };
      return f && typeof A == "number" && (S = f === "end" ? -1 * A : A), m ? { x: S * g, y: x * v } : { x: x * v, y: S * g };
    }(t, a);
    return { x: e + l.x, y: o + l.y, data: l };
  } };
};
function zo(a) {
  return a === "x" ? "y" : "x";
}
var Cn = function(a) {
  return a === void 0 && (a = {}), { name: "shift", options: a, async fn(t) {
    const { x: e, y: o, placement: l } = t, { mainAxis: n = true, crossAxis: r = false, limiter: s = { fn: (E) => {
      let { x, y: S } = E;
      return { x, y: S };
    } }, ...i } = ge(a, t), d = { x: e, y: o }, p = await qe(t, i), c = Re(me(l)), f = zo(c);
    let m = d[c], v = d[f];
    if (n) {
      const E = c === "y" ? "bottom" : "right";
      m = kt(m + p[c === "y" ? "top" : "left"], m, m - p[E]);
    }
    if (r) {
      const E = f === "y" ? "bottom" : "right";
      v = kt(v + p[f === "y" ? "top" : "left"], v, v - p[E]);
    }
    const g = s.fn({ ...t, [c]: m, [f]: v });
    return { ...g, data: { x: g.x - e, y: g.y - o } };
  } };
};
var xn = function(a) {
  return a === void 0 && (a = {}), { options: a, fn(t) {
    const { x: e, y: o, placement: l, rects: n, middlewareData: r } = t, { offset: s = 0, mainAxis: i = true, crossAxis: d = true } = ge(a, t), p = { x: e, y: o }, c = Re(l), f = zo(c);
    let m = p[c], v = p[f];
    const g = ge(s, t), E = typeof g == "number" ? { mainAxis: g, crossAxis: 0 } : { mainAxis: 0, crossAxis: 0, ...g };
    if (i) {
      const A = c === "y" ? "height" : "width", O = n.reference[c] - n.floating[A] + E.mainAxis, D = n.reference[c] + n.reference[A] - E.mainAxis;
      m < O ? m = O : m > D && (m = D);
    }
    if (d) {
      var x, S;
      const A = c === "y" ? "width" : "height", O = ["top", "left"].includes(me(l)), D = n.reference[f] - n.floating[A] + (O && ((x = r.offset) == null ? void 0 : x[f]) || 0) + (O ? 0 : E.crossAxis), N = n.reference[f] + n.reference[A] + (O ? 0 : ((S = r.offset) == null ? void 0 : S[f]) || 0) - (O ? E.crossAxis : 0);
      v < D ? v = D : v > N && (v = N);
    }
    return { [c]: m, [f]: v };
  } };
};
var $n = function(a) {
  return a === void 0 && (a = {}), { name: "size", options: a, async fn(t) {
    const { placement: e, rects: o, platform: l, elements: n } = t, { apply: r = () => {
    }, ...s } = ge(a, t), i = await qe(t, s), d = me(e), p = We(e), c = Re(e) === "x", { width: f, height: m } = o.floating;
    let v, g;
    d === "top" || d === "bottom" ? (v = d, g = p === (await (l.isRTL == null ? void 0 : l.isRTL(n.floating)) ? "start" : "end") ? "left" : "right") : (g = d, v = p === "end" ? "top" : "bottom");
    const E = m - i[v], x = f - i[g], S = !t.middlewareData.shift;
    let A = E, O = x;
    if (c) {
      const N = f - i.left - i.right;
      O = p || S ? Ge(x, N) : N;
    } else {
      const N = m - i.top - i.bottom;
      A = p || S ? Ge(E, N) : N;
    }
    if (S && !p) {
      const N = Pe(i.left, 0), T = Pe(i.right, 0), q = Pe(i.top, 0), U = Pe(i.bottom, 0);
      c ? O = f - 2 * (N !== 0 || T !== 0 ? N + T : Pe(i.left, i.right)) : A = m - 2 * (q !== 0 || U !== 0 ? q + U : Pe(i.top, i.bottom));
    }
    await r({ ...t, availableWidth: O, availableHeight: A });
    const D = await l.getDimensions(n.floating);
    return f !== D.width || m !== D.height ? { reset: { rects: true } } : {};
  } };
};
function oe(a) {
  var t;
  return ((t = a.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function le(a) {
  return oe(a).getComputedStyle(a);
}
function Yo(a) {
  return a instanceof oe(a).Node;
}
function Ce(a) {
  return Yo(a) ? (a.nodeName || "").toLowerCase() : "#document";
}
function re(a) {
  return a instanceof oe(a).HTMLElement;
}
function ve(a) {
  return a instanceof oe(a).Element;
}
function io(a) {
  return typeof ShadowRoot < "u" && (a instanceof oe(a).ShadowRoot || a instanceof ShadowRoot);
}
function Xe(a) {
  const { overflow: t, overflowX: e, overflowY: o, display: l } = le(a);
  return /auto|scroll|overlay|hidden|clip/.test(t + o + e) && !["inline", "contents"].includes(l);
}
function Sn(a) {
  return ["table", "td", "th"].includes(Ce(a));
}
function At(a) {
  const t = Yt(), e = le(a);
  return e.transform !== "none" || e.perspective !== "none" || !t && !!e.backdropFilter && e.backdropFilter !== "none" || !t && !!e.filter && e.filter !== "none" || ["transform", "perspective", "filter"].some((o) => (e.willChange || "").includes(o)) || ["paint", "layout", "strict", "content"].some((o) => (e.contain || "").includes(o));
}
function Yt() {
  return !(typeof CSS > "u" || !CSS.supports) && CSS.supports("-webkit-backdrop-filter", "none");
}
function gt(a) {
  return ["html", "body", "#document"].includes(Ce(a));
}
var Tt = Math.min;
var Ie = Math.max;
var pt = Math.round;
var lt = Math.floor;
var Be = (a) => ({ x: a, y: a });
function Wo(a) {
  const t = le(a);
  let e = parseFloat(t.width) || 0, o = parseFloat(t.height) || 0;
  const l = re(a), n = l ? a.offsetWidth : e, r = l ? a.offsetHeight : o, s = pt(e) !== n || pt(o) !== r;
  return s && (e = n, o = r), { width: e, height: o, $: s };
}
function Wt(a) {
  return ve(a) ? a : a.contextElement;
}
function Ke(a) {
  const t = Wt(a);
  if (!re(t))
    return Be(1);
  const e = t.getBoundingClientRect(), { width: o, height: l, $: n } = Wo(t);
  let r = (n ? pt(e.width) : e.width) / o, s = (n ? pt(e.height) : e.height) / l;
  return r && Number.isFinite(r) || (r = 1), s && Number.isFinite(s) || (s = 1), { x: r, y: s };
}
var so = Be(0);
function Uo(a, t, e) {
  var o, l;
  if (t === void 0 && (t = true), !Yt())
    return so;
  const n = a ? oe(a) : window;
  return !e || t && e !== n ? so : { x: ((o = n.visualViewport) == null ? void 0 : o.offsetLeft) || 0, y: ((l = n.visualViewport) == null ? void 0 : l.offsetTop) || 0 };
}
function Oe(a, t, e, o) {
  t === void 0 && (t = false), e === void 0 && (e = false);
  const l = a.getBoundingClientRect(), n = Wt(a);
  let r = Be(1);
  t && (o ? ve(o) && (r = Ke(o)) : r = Ke(a));
  const s = Uo(n, e, o);
  let i = (l.left + s.x) / r.x, d = (l.top + s.y) / r.y, p = l.width / r.x, c = l.height / r.y;
  if (n) {
    const f = oe(n), m = o && ve(o) ? oe(o) : o;
    let v = f.frameElement;
    for (; v && o && m !== f; ) {
      const g = Ke(v), E = v.getBoundingClientRect(), x = getComputedStyle(v), S = E.left + (v.clientLeft + parseFloat(x.paddingLeft)) * g.x, A = E.top + (v.clientTop + parseFloat(x.paddingTop)) * g.y;
      i *= g.x, d *= g.y, p *= g.x, c *= g.y, i += S, d += A, v = oe(v).frameElement;
    }
  }
  return dt({ width: p, height: c, x: i, y: d });
}
function he(a) {
  return ((Yo(a) ? a.ownerDocument : a.document) || window.document).documentElement;
}
function bt(a) {
  return ve(a) ? { scrollLeft: a.scrollLeft, scrollTop: a.scrollTop } : { scrollLeft: a.pageXOffset, scrollTop: a.pageYOffset };
}
function qo(a) {
  return Oe(he(a)).left + bt(a).scrollLeft;
}
function He(a) {
  if (Ce(a) === "html")
    return a;
  const t = a.assignedSlot || a.parentNode || io(a) && a.host || he(a);
  return io(t) ? t.host : t;
}
function Go(a) {
  const t = He(a);
  return gt(t) ? a.ownerDocument ? a.ownerDocument.body : a.body : re(t) && Xe(t) ? t : Go(t);
}
function ft(a, t) {
  var e;
  t === void 0 && (t = []);
  const o = Go(a), l = o === ((e = a.ownerDocument) == null ? void 0 : e.body), n = oe(o);
  return l ? t.concat(n, n.visualViewport || [], Xe(o) ? o : []) : t.concat(o, ft(o));
}
function uo(a, t, e) {
  let o;
  if (t === "viewport")
    o = function(l, n) {
      const r = oe(l), s = he(l), i = r.visualViewport;
      let d = s.clientWidth, p = s.clientHeight, c = 0, f = 0;
      if (i) {
        d = i.width, p = i.height;
        const m = Yt();
        (!m || m && n === "fixed") && (c = i.offsetLeft, f = i.offsetTop);
      }
      return { width: d, height: p, x: c, y: f };
    }(a, e);
  else if (t === "document")
    o = function(l) {
      const n = he(l), r = bt(l), s = l.ownerDocument.body, i = Ie(n.scrollWidth, n.clientWidth, s.scrollWidth, s.clientWidth), d = Ie(n.scrollHeight, n.clientHeight, s.scrollHeight, s.clientHeight);
      let p = -r.scrollLeft + qo(l);
      const c = -r.scrollTop;
      return le(s).direction === "rtl" && (p += Ie(n.clientWidth, s.clientWidth) - i), { width: i, height: d, x: p, y: c };
    }(he(a));
  else if (ve(t))
    o = function(l, n) {
      const r = Oe(l, true, n === "fixed"), s = r.top + l.clientTop, i = r.left + l.clientLeft, d = re(l) ? Ke(l) : Be(1);
      return { width: l.clientWidth * d.x, height: l.clientHeight * d.y, x: i * d.x, y: s * d.y };
    }(t, e);
  else {
    const l = Uo(a);
    o = { ...t, x: t.x - l.x, y: t.y - l.y };
  }
  return dt(o);
}
function Xo(a, t) {
  const e = He(a);
  return !(e === t || !ve(e) || gt(e)) && (le(e).position === "fixed" || Xo(e, t));
}
function co(a, t) {
  return re(a) && le(a).position !== "fixed" ? t ? t(a) : a.offsetParent : null;
}
function po(a, t) {
  const e = oe(a);
  if (!re(a))
    return e;
  let o = co(a, t);
  for (; o && Sn(o) && le(o).position === "static"; )
    o = co(o, t);
  return o && (Ce(o) === "html" || Ce(o) === "body" && le(o).position === "static" && !At(o)) ? e : o || function(l) {
    let n = He(l);
    for (; re(n) && !gt(n); ) {
      if (At(n))
        return n;
      n = He(n);
    }
    return null;
  }(a) || e;
}
function kn(a, t, e) {
  const o = re(t), l = he(t), n = e === "fixed", r = Oe(a, true, n, t);
  let s = { scrollLeft: 0, scrollTop: 0 };
  const i = Be(0);
  if (o || !o && !n)
    if ((Ce(t) !== "body" || Xe(l)) && (s = bt(t)), re(t)) {
      const d = Oe(t, true, n, t);
      i.x = d.x + t.clientLeft, i.y = d.y + t.clientTop;
    } else
      l && (i.x = qo(l));
  return { x: r.left + s.scrollLeft - i.x, y: r.top + s.scrollTop - i.y, width: r.width, height: r.height };
}
var An = { getClippingRect: function(a) {
  let { element: t, boundary: e, rootBoundary: o, strategy: l } = a;
  const n = e === "clippingAncestors" ? function(d, p) {
    const c = p.get(d);
    if (c)
      return c;
    let f = ft(d).filter((E) => ve(E) && Ce(E) !== "body"), m = null;
    const v = le(d).position === "fixed";
    let g = v ? He(d) : d;
    for (; ve(g) && !gt(g); ) {
      const E = le(g), x = At(g);
      x || E.position !== "fixed" || (m = null), (v ? !x && !m : !x && E.position === "static" && m && ["absolute", "fixed"].includes(m.position) || Xe(g) && !x && Xo(d, g)) ? f = f.filter((S) => S !== g) : m = E, g = He(g);
    }
    return p.set(d, f), f;
  }(t, this._c) : [].concat(e), r = [...n, o], s = r[0], i = r.reduce((d, p) => {
    const c = uo(t, p, l);
    return d.top = Ie(c.top, d.top), d.right = Tt(c.right, d.right), d.bottom = Tt(c.bottom, d.bottom), d.left = Ie(c.left, d.left), d;
  }, uo(t, s, l));
  return { width: i.right - i.left, height: i.bottom - i.top, x: i.left, y: i.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(a) {
  let { rect: t, offsetParent: e, strategy: o } = a;
  const l = re(e), n = he(e);
  if (e === n)
    return t;
  let r = { scrollLeft: 0, scrollTop: 0 }, s = Be(1);
  const i = Be(0);
  if ((l || !l && o !== "fixed") && ((Ce(e) !== "body" || Xe(n)) && (r = bt(e)), re(e))) {
    const d = Oe(e);
    s = Ke(e), i.x = d.x + e.clientLeft, i.y = d.y + e.clientTop;
  }
  return { width: t.width * s.x, height: t.height * s.y, x: t.x * s.x - r.scrollLeft * s.x + i.x, y: t.y * s.y - r.scrollTop * s.y + i.y };
}, isElement: ve, getDimensions: function(a) {
  return Wo(a);
}, getOffsetParent: po, getDocumentElement: he, getScale: Ke, async getElementRects(a) {
  let { reference: t, floating: e, strategy: o } = a;
  const l = this.getOffsetParent || po, n = this.getDimensions;
  return { reference: kn(t, await l(e), o), floating: { x: 0, y: 0, ...await n(e) } };
}, getClientRects: (a) => Array.from(a.getClientRects()), isRTL: (a) => le(a).direction === "rtl" };
function Tn(a, t, e, o) {
  o === void 0 && (o = {});
  const { ancestorScroll: l = true, ancestorResize: n = true, elementResize: r = true, layoutShift: s = typeof IntersectionObserver == "function", animationFrame: i = false } = o, d = Wt(a), p = l || n ? [...d ? ft(d) : [], ...ft(t)] : [];
  p.forEach((g) => {
    l && g.addEventListener("scroll", e, { passive: true }), n && g.addEventListener("resize", e);
  });
  const c = d && s ? function(g, E) {
    let x, S = null;
    const A = he(g);
    function O() {
      clearTimeout(x), S && S.disconnect(), S = null;
    }
    return function D(N, T) {
      N === void 0 && (N = false), T === void 0 && (T = 1), O();
      const { left: q, top: U, width: F, height: K } = g.getBoundingClientRect();
      if (N || E(), !F || !K)
        return;
      const J = lt(U), z = lt(A.clientWidth - (q + F)), V = lt(A.clientHeight - (U + K)), j = lt(q);
      let Q = true;
      S = new IntersectionObserver((Ae) => {
        const Te = Ae[0].intersectionRatio;
        if (Te !== T) {
          if (!Q)
            return D();
          Te ? D(false, Te) : x = setTimeout(() => {
            D(false, 1e-7);
          }, 100);
        }
        Q = false;
      }, { rootMargin: -J + "px " + -z + "px " + -V + "px " + -j + "px", threshold: Ie(0, Tt(1, T)) || 1 }), S.observe(g);
    }(true), O;
  }(d, e) : null;
  let f, m = null;
  r && (m = new ResizeObserver(e), d && !i && m.observe(d), m.observe(t));
  let v = i ? Oe(a) : null;
  return i && function g() {
    const E = Oe(a);
    !v || E.x === v.x && E.y === v.y && E.width === v.width && E.height === v.height || e(), v = E, f = requestAnimationFrame(g);
  }(), e(), () => {
    p.forEach((g) => {
      l && g.removeEventListener("scroll", e), n && g.removeEventListener("resize", e);
    }), c && c(), m && m.disconnect(), m = null, i && cancelAnimationFrame(f);
  };
}
var Pn = (a, t, e) => {
  const o = /* @__PURE__ */ new Map(), l = { platform: An, ...e }, n = { ...l.platform, _c: o };
  return vn(a, t, { ...l, platform: n });
};
function Pt(a) {
  var t;
  return (t = a == null ? void 0 : a.$el) != null ? t : a;
}
function Bn(a) {
  return {
    name: "arrow",
    options: a,
    fn(t) {
      const e = Pt(unref(a.element));
      return e == null ? {} : hn({
        element: e,
        padding: a.padding
      }).fn(t);
    }
  };
}
function Jo(a) {
  return typeof window > "u" ? 1 : (a.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function fo(a, t) {
  const e = Jo(a);
  return Math.round(t * e) / e;
}
function On(a, t, e) {
  e === void 0 && (e = {});
  const o = e.whileElementsMounted, l = computed(() => {
    var T;
    return (T = unref(e.open)) != null ? T : true;
  }), n = computed(() => unref(e.middleware)), r = computed(() => {
    var T;
    return (T = unref(e.placement)) != null ? T : "bottom";
  }), s = computed(() => {
    var T;
    return (T = unref(e.strategy)) != null ? T : "absolute";
  }), i = computed(() => {
    var T;
    return (T = unref(e.transform)) != null ? T : true;
  }), d = computed(() => Pt(a.value)), p = computed(() => Pt(t.value)), c = ref(0), f = ref(0), m = ref(s.value), v = ref(r.value), g = shallowRef({}), E = ref(false), x = computed(() => {
    const T = {
      position: m.value,
      left: "0",
      top: "0"
    };
    if (!p.value)
      return T;
    const q = fo(p.value, c.value), U = fo(p.value, f.value);
    return i.value ? {
      ...T,
      transform: "translate(" + q + "px, " + U + "px)",
      ...Jo(p.value) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: m.value,
      left: q + "px",
      top: U + "px"
    };
  });
  let S;
  function A() {
    d.value == null || p.value == null || Pn(d.value, p.value, {
      middleware: n.value,
      placement: r.value,
      strategy: s.value
    }).then((T) => {
      c.value = T.x, f.value = T.y, m.value = T.strategy, v.value = T.placement, g.value = T.middlewareData, E.value = true;
    });
  }
  function O() {
    typeof S == "function" && (S(), S = void 0);
  }
  function D() {
    if (O(), o === void 0) {
      A();
      return;
    }
    if (d.value != null && p.value != null) {
      S = o(d.value, p.value, A);
      return;
    }
  }
  function N() {
    l.value || (E.value = false);
  }
  return watch([n, r, s], A, {
    flush: "sync"
  }), watch([d, p], D, {
    flush: "sync"
  }), watch(l, N, {
    flush: "sync"
  }), getCurrentScope() && onScopeDispose(O), {
    x: shallowReadonly(c),
    y: shallowReadonly(f),
    strategy: shallowReadonly(m),
    placement: shallowReadonly(v),
    middlewareData: shallowReadonly(g),
    isPositioned: shallowReadonly(E),
    floatingStyles: x,
    update: A
  };
}
var Zo = Symbol();
var Mn = {
  inheritAttrs: false
};
var fe = defineComponent({
  ...Mn,
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
    const t = a, e = inject(Ht), o = ref(), l = ref(), n = ref(), { width: r, height: s } = Ya(n), i = computed(
      () => t.side + (t.align !== "center" ? "-" + t.align : "")
    ), d = computed(() => typeof t.collisionPadding == "number" ? t.collisionPadding : { top: 0, right: 0, bottom: 0, left: 0, ...t.collisionPadding }), p = computed(() => Array.isArray(t.collisionBoundary) ? t.collisionBoundary : [t.collisionBoundary]), c = computed(() => ({
      padding: d.value,
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: p.value.length > 0
    })), f = $a(() => [
      En({
        mainAxis: t.sideOffset + s.value,
        alignmentAxis: t.alignOffset
      }),
      t.avoidCollisions && Cn({
        mainAxis: true,
        crossAxis: !!t.prioritizePosition,
        limiter: t.sticky === "partial" ? xn() : void 0,
        ...c.value
      }),
      !t.prioritizePosition && t.avoidCollisions && bn({
        ...c.value
      }),
      $n({
        ...c,
        apply: ({ elements: T, rects: q, availableWidth: U, availableHeight: F }) => {
          const { width: K, height: J } = q.reference, z = T.floating.style;
          Object.assign(T.floating.style, {
            maxWidth: `${U}px`,
            maxHeight: `${F}px`
          }), z.setProperty(
            "--radix-popper-available-width",
            `${U}px`
          ), z.setProperty(
            "--radix-popper-available-height",
            `${F}px`
          ), z.setProperty(
            "--radix-popper-anchor-width",
            `${K}px`
          ), z.setProperty(
            "--radix-popper-anchor-height",
            `${J}px`
          );
        }
      }),
      n.value && Bn({ element: n.value, padding: t.arrowPadding }),
      mn({
        arrowWidth: r.value,
        arrowHeight: s.value
      }),
      t.hideWhenDetached && wn({ strategy: "referenceHidden", ...c.value })
    ]), { floatingStyles: m, placement: v, isPositioned: g, middlewareData: E } = On(
      e.anchor,
      o,
      {
        strategy: "fixed",
        placement: i,
        whileElementsMounted: (...T) => Tn(...T, {
          animationFrame: t.updatePositionStrategy === "always"
        }),
        middleware: f
      }
    ), x = computed(
      () => St(v.value)[0]
    ), S = computed(
      () => St(v.value)[1]
    );
    watchEffect(() => {
      var T;
      g.value && ((T = t.onPlaced) == null || T.call(t));
    });
    const A = computed(
      () => {
        var T;
        return ((T = E.value.arrow) == null ? void 0 : T.centerOffset) !== 0;
      }
    ), O = ref("");
    watchEffect(() => {
      l.value && (O.value = window.getComputedStyle(l.value).zIndex);
    });
    const D = computed(() => {
      var T;
      return ((T = E.value.arrow) == null ? void 0 : T.x) ?? 0;
    }), N = computed(() => {
      var T;
      return ((T = E.value.arrow) == null ? void 0 : T.y) ?? 0;
    });
    return provide(Zo, {
      placedSide: x,
      onArrowChange: (T) => {
        n.value = T;
      },
      arrowX: D,
      arrowY: N,
      shouldHideArrow: A
    }), (T, q) => {
      var U, F, K;
      return openBlock(), createElementBlock("div", {
        ref_key: "floatingRef",
        ref: o,
        "data-radix-popper-content-wrapper": "",
        style: normalizeStyle({
          ...unref(m),
          transform: unref(g) ? unref(m).transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: O.value,
          ["--radix-popper-transform-origin"]: [
            (U = unref(E).transformOrigin) == null ? void 0 : U.x,
            (F = unref(E).transformOrigin) == null ? void 0 : F.y
          ].join(" ")
        })
      }, [
        createVNode(unref(M), mergeProps(T.$attrs, {
          "as-child": t.asChild,
          "data-side": x.value,
          "data-align": S.value,
          style: {
            // if the PopperContent hasn't been placed yet (not all measurements done)
            // we prevent animations so that users's animation don't kick in too early referring wrong sides
            animation: unref(g) ? void 0 : "none",
            // hide the content if using the hide middleware and should be hidden
            opacity: (K = unref(E).hide) != null && K.referenceHidden ? 0 : void 0
          }
        }), {
          default: withCtx(() => [
            renderSlot(T.$slots, "default")
          ]),
          _: 3
        }, 16, ["as-child", "data-side", "data-align", "style"])
      ], 4);
    };
  }
});
var Dn = createBaseVNode("polygon", { points: "0,0 30,0 15,10" }, null, -1);
var Rn = defineComponent({
  __name: "Arrow",
  props: {
    width: { default: 10 },
    height: { default: 5 }
  },
  setup(a) {
    const t = a, { primitiveElement: e } = B();
    return (o, l) => (openBlock(), createBlock(unref(Ja), mergeProps({
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
          Dn
        ])
      ]),
      _: 3
    }, 16, ["width", "height"]));
  }
});
var Nn = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
};
var Ln = {
  inheritAttrs: false
};
var Ne = defineComponent({
  ...Ln,
  __name: "PopperArrow",
  props: {
    width: {},
    height: {}
  },
  setup(a) {
    const t = inject(Zo), e = computed(
      () => t != null && t.placedSide ? Nn[t == null ? void 0 : t.placedSide.value] : ""
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
        createVNode(Rn, mergeProps(o.$attrs, { style: {
          display: "block"
        } }), null, 16)
      ], 4);
    };
  }
});
var Ut = Symbol();
var cr = defineComponent({
  __name: "TooltipRoot",
  props: {
    defaultOpen: { type: Boolean, default: false },
    open: { type: Boolean, default: void 0 },
    delayDuration: { default: 700 },
    disableHoverableContent: { type: Boolean }
  },
  emits: ["update:open"],
  setup(a, { emit: t }) {
    const e = a, o = I(e, "open", t, {
      defaultValue: e.defaultOpen,
      passive: true
    });
    return provide(Ut, {
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
var pr = defineComponent({
  __name: "TooltipTrigger",
  setup(a) {
    const t = inject(Ut), { primitiveElement: e, currentElement: o } = B();
    async function l(r) {
      await $o(r, o.value) && (t == null || t.showTooltip());
    }
    const n = computed(() => t != null && t.open.value ? "closed" : "instant-open");
    return (r, s) => (openBlock(), createBlock(unref(pe), { asChild: "" }, {
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
var qt = defineComponent({
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
var fr = defineComponent({
  __name: "TooltipPortal",
  props: {
    to: { default: "body" }
  },
  setup(a) {
    const t = a;
    return (e, o) => (openBlock(), createBlock(qt, {
      to: t.to
    }, {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["to"]));
  }
});
var mr = defineComponent({
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
    const t = a, e = inject(Ut);
    return (o, l) => {
      var n;
      return (n = unref(e)) != null && n.open.value ? (openBlock(), createBlock(unref(fe), normalizeProps(mergeProps({ key: 0 }, t)), {
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
var vr = defineComponent({
  __name: "TooltipArrow",
  setup(a) {
    return (t, e) => (openBlock(), createBlock(unref(Ne)));
  }
});
var Gt = Symbol();
var hr = defineComponent({
  __name: "HoverCardRoot",
  props: {
    open: { type: Boolean, default: void 0 },
    defaultOpen: { type: Boolean, default: false },
    openDelay: { default: 700 },
    closeDelay: { default: 300 }
  },
  emits: ["update:open"],
  setup(a, { emit: t }) {
    const e = a, o = I(e, "open", t, {
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
var _r = defineComponent({
  __name: "HoverCardTrigger",
  setup(a) {
    const t = inject(Gt), { primitiveElement: e, currentElement: o } = B();
    async function l(r) {
      await $o(
        r,
        o.value,
        t == null ? void 0 : t.openDelay
      ) && (t == null || t.showTooltip());
    }
    async function n(r) {
      t.isHover = false, await So(r, t == null ? void 0 : t.closeDelay) && !(t != null && t.isHover) && (t == null || t.hideTooltip());
    }
    return (r, s) => (openBlock(), createBlock(unref(pe), { asChild: "" }, {
      default: withCtx(() => {
        var i, d;
        return [
          createVNode(unref(X), {
            type: "button",
            ref_key: "primitiveElement",
            ref: e,
            "aria-expanded": ((i = unref(t)) == null ? void 0 : i.open.value) || false,
            "data-state": (d = unref(t)) != null && d.open.value ? "open" : "closed",
            onMouseover: s[0] || (s[0] = (p) => unref(t).isHover = true),
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
var yr = defineComponent({
  __name: "HoverCardPortal",
  props: {
    to: { default: "body" }
  },
  setup(a) {
    const t = a;
    return (e, o) => (openBlock(), createBlock(qt, {
      to: t.to
    }, {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["to"]));
  }
});
var gr = defineComponent({
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
      e.isHover = false, await So(l, e == null ? void 0 : e.closeDelay) && !(e != null && e.isHover) && (e == null || e.hideTooltip());
    }
    return (l, n) => {
      var r, s;
      return (r = unref(e)) != null && r.open.value ? (openBlock(), createBlock(unref(fe), mergeProps({ key: 0 }, t, {
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
var br = defineComponent({
  __name: "HoverCardArrow",
  setup(a) {
    return (t, e) => (openBlock(), createBlock(unref(Ne)));
  }
});
var wt = Symbol();
var wr = defineComponent({
  __name: "PopoverRoot",
  props: {
    defaultOpen: { type: Boolean, default: false },
    open: { type: Boolean, default: void 0 },
    modal: { type: Boolean, default: false }
  },
  emits: ["update:open"],
  setup(a, { emit: t }) {
    const e = a, o = I(e, "open", t, {
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
var Er = defineComponent({
  __name: "PopoverTrigger",
  setup(a) {
    const t = inject(wt), { primitiveElement: e, currentElement: o } = B();
    onMounted(() => {
      t.triggerElement.value = o.value;
    });
    function l() {
      t != null && t.open.value ? t == null || t.hidePopover() : t == null || t.showPopover();
    }
    return (n, r) => (openBlock(), createBlock(unref(pe), { asChild: "" }, {
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
var Cr = defineComponent({
  __name: "PopoverPortal",
  props: {
    to: { default: "body" }
  },
  setup(a) {
    const t = a;
    return (e, o) => (openBlock(), createBlock(qt, {
      to: t.to
    }, {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["to"]));
  }
});
function In(a, t) {
  if (t) {
    const e = t.getBoundingClientRect();
    return !(a.clientX > e.left && a.clientX < e.right && a.clientY > e.top && a.clientY < e.bottom);
  }
}
var xr = defineComponent({
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
      l.value && (e != null && e.open.value ? (Dt(l.value), window.addEventListener("mousedown", n), window.addEventListener("keydown", r)) : e != null && e.triggerElement.value && (e == null || e.triggerElement.value.focus(), s()));
    });
    function n(i) {
      var p;
      if ((p = e == null ? void 0 : e.triggerElement.value) != null && p.contains(i.target))
        return;
      In(i, l.value) && (e == null || e.hidePopover(), i.preventDefault(), i.stopPropagation());
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
      var p;
      return (p = unref(e)) != null && p.open.value ? (openBlock(), createBlock(unref(fe), mergeProps({
        key: 0,
        ref_key: "primitiveElement",
        ref: o
      }, t), {
        default: withCtx(() => {
          var c, f;
          return [
            (c = unref(e)) != null && c.open.value ? (openBlock(), createBlock(unref(M), {
              key: 0,
              "data-state": (f = unref(e)) != null && f.open.value ? "open" : "closed",
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
var $r = defineComponent({
  __name: "PopoverArrow",
  setup(a) {
    return (t, e) => (openBlock(), createBlock(unref(Ne)));
  }
});
var Sr = defineComponent({
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
var kr = defineComponent({
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
    const e = a, o = I(e, "modelValue", t, {
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
var Ar = defineComponent({
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
    return (r, s) => (openBlock(), createBlock(unref(pe), { asChild: "" }, {
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
var Kn = {};
function Hn(a, t) {
  return openBlock(), createBlock(Teleport, { to: "body" }, [
    renderSlot(a.$slots, "default")
  ]);
}
var Tr = De(Kn, [["render", Hn]]);
var Pr = defineComponent({
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
      var p;
      return (p = unref(e)) != null && p.modelValue.value ? (openBlock(), createBlock(unref(fe), normalizeProps(mergeProps({ key: 0 }, t)), {
        default: withCtx(() => {
          var c;
          return [
            createVNode(unref(M), {
              ref_key: "primitiveElement",
              ref: o,
              "data-state": (c = unref(e)) != null && c.modelValue.value ? "open" : "closed",
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
var Br = defineComponent({
  __name: "DropdownMenuArrow",
  setup(a) {
    return (t, e) => (openBlock(), createBlock(unref(Ne)));
  }
});
var te = defineComponent({
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
    function r(c) {
      var m, v, g, E;
      if (c.key === "Escape")
        return i(), t("escape-keydown", c);
      if (c.keyCode === 32 || c.key === "Enter") {
        c.target.click();
        return;
      }
      if (c.key === "ArrowLeft") {
        const x = (m = e.subProvider) == null ? void 0 : m.triggerElement.value;
        if (x)
          return (v = e.rootProvider) == null || v.changeSelected(x), (g = e.subProvider) == null ? void 0 : g.hideTooltip();
      }
      if (c.key === "ArrowRight" || c.key === "ArrowLeft")
        return t("horizontal-keydown", c);
      const f = ne(
        c,
        n.value,
        void 0,
        {
          arrowKeyOptions: "vertical",
          itemsArray: o()
        }
      );
      f && ((E = e.rootProvider) == null || E.changeSelected(f));
    }
    function s() {
      var c;
      e.disabled || (c = e.rootProvider) == null || c.changeSelected(n.value);
    }
    function i() {
      document.querySelector("body").style.pointerEvents = "", setTimeout(() => {
        var c, f;
        (f = (c = e.rootProvider) == null ? void 0 : c.triggerElement.value) == null || f.focus();
      }, 0);
    }
    function d() {
      t("handle-click");
    }
    function p() {
      t("mouseover");
    }
    return (c, f) => {
      var m, v, g;
      return openBlock(), createBlock(unref(M), {
        role: e.role,
        ref_key: "primitiveElement",
        ref: l,
        onKeydown: withModifiers(r, ["prevent"]),
        "data-state": e.dataState,
        "data-radix-vue-collection-item": "",
        onMouseenter: s,
        onMouseover: p,
        onClick: d,
        "data-highlighted": ((m = c.rootProvider) == null ? void 0 : m.selectedElement.value) === unref(n) ? "" : null,
        "aria-disabled": e.disabled ? true : void 0,
        "data-disabled": e.disabled ? "" : void 0,
        "data-orientation": (v = c.rootProvider) == null ? void 0 : v.orientation,
        tabindex: ((g = c.rootProvider) == null ? void 0 : g.selectedElement.value) === unref(n) ? "0" : "-1"
      }, {
        default: withCtx(() => [
          renderSlot(c.$slots, "default")
        ]),
        _: 3
      }, 8, ["role", "onKeydown", "data-state", "data-highlighted", "aria-disabled", "data-disabled", "data-orientation", "tabindex"]);
    };
  }
});
var Je = Symbol();
var Or = defineComponent({
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
    const e = a, o = I(e, "modelValue", t, {
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
      triggerId: ye(),
      contentId: ye(),
      parentContext: n
    }), (r, s) => (openBlock(), createBlock(unref(se), null, {
      default: withCtx(() => [
        renderSlot(r.$slots, "default")
      ]),
      _: 3
    }));
  }
});
var Mr = defineComponent({
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
      return openBlock(), createBlock(te, {
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
var zn = Symbol();
var Dr = defineComponent({
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
    return provide(zn, {
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
var Rr = defineComponent({
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
var Yn = ["id", "checked", "name", "disabled"];
var Nr = defineComponent({
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
    ), l = I(e, "modelValue", t, {
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
      var p;
      return openBlock(), createBlock(te, {
        ref: "currentElement",
        disabled: e.disabled,
        rootProvider: unref(o),
        orientation: (p = unref(o)) == null ? void 0 : p.orientation,
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
          }), null, 16, Yn),
          renderSlot(i.$slots, "default")
        ]),
        _: 3
      }, 8, ["disabled", "rootProvider", "orientation", "data-state", "aria-checked"]);
    };
  }
});
var Lr = defineComponent({
  __name: "DropdownMenuItemIndicator",
  setup(a) {
    const t = inject(Xt);
    return (e, o) => {
      var l;
      return (l = unref(t)) != null && l.modelValue.value ? (openBlock(), createBlock(unref(ee), {
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
var Ir = defineComponent({
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
var Qo = "RadioGroup";
var Kr = defineComponent({
  __name: "DropdownMenuRadioGroup",
  props: {
    asChild: { type: Boolean },
    value: {},
    defaultValue: {},
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(a, { emit: t }) {
    const e = a, { primitiveElement: o, currentElement: l } = B(), n = I(e, "modelValue", t, {
      passive: true
    });
    return provide(Qo, {
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
var Hr = defineComponent({
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
      Qo
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
      var p;
      return openBlock(), createBlock(te, {
        disabled: t.disabled,
        rootProvider: unref(e),
        orientation: (p = unref(e)) == null ? void 0 : p.orientation,
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
var zr = defineComponent({
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
        var p;
        if (!(o != null && o.modelValue.value))
          return;
        const d = Array.from(
          ((p = i == null ? void 0 : i.closest('[role="tooltip"]')) == null ? void 0 : p.querySelectorAll(
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
      var p;
      return (p = unref(o)) != null && p.modelValue.value ? (openBlock(), createBlock(unref(fe), normalizeProps(mergeProps({ key: 0 }, t)), {
        default: withCtx(() => {
          var c;
          return [
            createVNode(unref(M), {
              ref_key: "primitiveElement",
              ref: l,
              "data-state": (c = unref(o)) != null && c.modelValue.value ? "open" : "closed",
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
var Yr = defineComponent({
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
      var c;
      e == null || e.showTooltip(), await nextTick();
      const p = (c = e == null ? void 0 : e.itemsArray) == null ? void 0 : c[0];
      t.selectedElement.value = p, p == null || p.focus();
    }
    function r() {
      e != null && e.modelValue.value || n();
    }
    async function s(p) {
      p.key === "ArrowRight" && n();
    }
    const i = computed(() => e != null && e.modelValue.value ? "open" : "closed");
    function d() {
      return e == null ? void 0 : e.showTooltip();
    }
    return (p, c) => (openBlock(), createBlock(unref(pe), { asChild: "" }, {
      default: withCtx(() => {
        var f, m, v, g, E;
        return [
          createVNode(te, {
            ref_key: "primitiveElement",
            ref: o,
            id: (f = unref(e)) == null ? void 0 : f.triggerId,
            rootProvider: unref(t),
            subProvider: (m = unref(e)) == null ? void 0 : m.parentContext,
            "aria-expanded": (v = unref(e)) == null ? void 0 : v.modelValue.value,
            "aria-controls": (g = unref(e)) == null ? void 0 : g.contentId,
            "data-state": i.value,
            "data-orientation": (E = unref(t)) == null ? void 0 : E.orientation,
            "aria-haspopup": "menu",
            onHandleClick: r,
            onMouseover: d,
            onHorizontalKeydown: s
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
var ke = Symbol();
var Wr = defineComponent({
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
    const e = a, o = I(e, "modelValue", t, {
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
var Ur = defineComponent({
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
    }), (l, n) => (openBlock(), createBlock(unref(pe), {
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
var Wn = {};
function Un(a, t) {
  return openBlock(), createBlock(Teleport, { to: "body" }, [
    renderSlot(a.$slots, "default")
  ]);
}
var qr = De(Wn, [["render", Un]]);
var Gr = defineComponent({
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
    xe(l, (p) => {
      p.target.closest('[role="menuitem"]') || e == null || e.hideTooltip();
    });
    function i() {
      e == null || e.hideTooltip(), window.removeEventListener("scroll", i);
    }
    async function d(p) {
      var c, f, m;
      if (p.preventDefault(), p.key === "ArrowDown" || p.key === "Enter" || p.keyCode === 32)
        e == null || e.changeSelected((c = e.itemsArray) == null ? void 0 : c[0]), (f = e == null ? void 0 : e.selectedElement.value) == null || f.focus();
      else if (p.key === "ArrowUp") {
        const v = (m = e == null ? void 0 : e.itemsArray) == null ? void 0 : m[(e == null ? void 0 : e.itemsArray.length) - 1];
        e == null || e.changeSelected(v), v == null || v.focus();
      }
      window.removeEventListener("keydown", d);
    }
    return (p, c) => {
      var f;
      return (f = unref(e)) != null && f.modelValue.value ? (openBlock(), createBlock(unref(fe), mergeProps({ key: 0 }, t, { "prioritize-position": "" }), {
        default: withCtx(() => {
          var m;
          return [
            createVNode(unref(M), {
              ref_key: "primitiveElement",
              ref: o,
              "data-state": (m = unref(e)) != null && m.modelValue.value ? "open" : "closed",
              "data-side": t.side,
              "data-align": t.align,
              role: "tooltip",
              asChild: t.asChild,
              style: { "pointer-events": "auto" }
            }, {
              default: withCtx(() => [
                renderSlot(p.$slots, "default")
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
var Xr = defineComponent({
  __name: "ContextMenuArrow",
  setup(a) {
    return (t, e) => (openBlock(), createBlock(unref(Ne)));
  }
});
var Ze = Symbol();
var Jr = defineComponent({
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
    const e = a, o = I(e, "modelValue", t, {
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
      triggerId: ye(),
      contentId: ye(),
      parentContext: n
    }), (r, s) => (openBlock(), createBlock(unref(se), null, {
      default: withCtx(() => [
        renderSlot(r.$slots, "default")
      ]),
      _: 3
    }));
  }
});
var Zr = defineComponent({
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
      return openBlock(), createBlock(te, {
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
var qn = Symbol();
var Qr = defineComponent({
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
    return provide(qn, {
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
var Fr = defineComponent({
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
var Jt = Symbol();
var Gn = ["id", "checked", "name", "disabled"];
var Vr = defineComponent({
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
    ), l = I(e, "modelValue", t, {
      passive: true
    }), n = computed(() => l.value ? "checked" : "unchecked");
    function r() {
      l.value = !l.value;
    }
    function s() {
      o == null || o.hideTooltip();
    }
    return provide(Jt, {
      modelValue: l
    }), (i, d) => {
      var p;
      return openBlock(), createBlock(te, {
        ref: "currentElement",
        disabled: e.disabled,
        rootProvider: unref(o),
        orientation: (p = unref(o)) == null ? void 0 : p.orientation,
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
          }), null, 16, Gn),
          renderSlot(i.$slots, "default")
        ]),
        _: 3
      }, 8, ["disabled", "rootProvider", "orientation", "data-state", "aria-checked"]);
    };
  }
});
var jr = defineComponent({
  __name: "ContextMenuItemIndicator",
  setup(a) {
    const t = inject(Jt);
    return (e, o) => {
      var l;
      return (l = unref(t)) != null && l.modelValue.value ? (openBlock(), createBlock(unref(ee), {
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
var ei = defineComponent({
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
var Fo = "RadioGroup";
var ti = defineComponent({
  __name: "ContextMenuRadioGroup",
  props: {
    asChild: { type: Boolean },
    value: {},
    defaultValue: {},
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(a, { emit: t }) {
    const e = a, { primitiveElement: o, currentElement: l } = B(), n = I(e, "modelValue", t, {
      passive: true
    });
    return provide(Fo, {
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
var oi = defineComponent({
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
      Fo
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
    return provide(Jt, {
      modelValue: s
    }), (i, d) => {
      var p;
      return openBlock(), createBlock(te, {
        disabled: t.disabled,
        rootProvider: unref(e),
        orientation: (p = unref(e)) == null ? void 0 : p.orientation,
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
var ai = defineComponent({
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
        var p;
        if (!(o != null && o.modelValue.value))
          return;
        const d = Array.from(
          ((p = i == null ? void 0 : i.closest('[role="tooltip"]')) == null ? void 0 : p.querySelectorAll(
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
      var p;
      return (p = unref(o)) != null && p.modelValue.value ? (openBlock(), createBlock(unref(fe), normalizeProps(mergeProps({ key: 0 }, t)), {
        default: withCtx(() => {
          var c;
          return [
            createVNode(unref(M), {
              ref_key: "primitiveElement",
              ref: l,
              "data-state": (c = unref(o)) != null && c.modelValue.value ? "open" : "closed",
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
var ni = defineComponent({
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
      var c;
      e == null || e.showTooltip(), await nextTick();
      const p = (c = e == null ? void 0 : e.itemsArray) == null ? void 0 : c[0];
      t.selectedElement.value = p, p == null || p.focus();
    }
    function r() {
      e != null && e.modelValue.value || n();
    }
    async function s(p) {
      p.key === "ArrowRight" && n();
    }
    const i = computed(() => e != null && e.modelValue.value ? "open" : "closed");
    function d() {
      return e == null ? void 0 : e.showTooltip();
    }
    return (p, c) => (openBlock(), createBlock(unref(pe), { asChild: "" }, {
      default: withCtx(() => {
        var f, m, v, g, E;
        return [
          createVNode(te, {
            ref_key: "primitiveElement",
            ref: o,
            id: (f = unref(e)) == null ? void 0 : f.triggerId,
            rootProvider: unref(t),
            subProvider: (m = unref(e)) == null ? void 0 : m.parentContext,
            "aria-expanded": (v = unref(e)) == null ? void 0 : v.modelValue.value,
            "aria-controls": (g = unref(e)) == null ? void 0 : g.contentId,
            "data-state": i.value,
            "data-orientation": (E = unref(t)) == null ? void 0 : E.orientation,
            "aria-haspopup": "menu",
            onHandleClick: r,
            onMouseover: d,
            onHorizontalKeydown: s
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
var ot = Symbol();
var li = defineComponent({
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
    const e = a, o = I(e, "modelValue", t, {
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
          let p = d.findIndex((c) => c === i);
          d.splice(p, 1);
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
var ri = defineComponent({
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
    return (r, s) => (openBlock(), createBlock(unref(pe), { asChild: "" }, {
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
var Xn = {};
function Jn(a, t) {
  return openBlock(), createBlock(Teleport, { to: "body" }, [
    renderSlot(a.$slots, "default")
  ]);
}
var ii = De(Xn, [["render", Jn]]);
var si = defineComponent({
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
      var p, c;
      return (p = unref(e)) != null && p.isOpen.value ? (openBlock(), createBlock(unref(fe), mergeProps({ key: 0 }, t, {
        "prioritize-position": "",
        role: "listbox",
        "data-state": (c = unref(e)) != null && c.isOpen.value ? "open" : "closed",
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
var ui = defineComponent({
  __name: "SelectArrow",
  setup(a) {
    return (t, e) => (openBlock(), createBlock(unref(Ne)));
  }
});
var di = defineComponent({
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
var Vo = Symbol();
var ci = defineComponent({
  __name: "SelectItemIndicator",
  setup(a) {
    const t = inject(ot), e = inject(Vo), o = computed(() => {
      var l;
      return t != null && t.multiple ? (l = t == null ? void 0 : t.modelValue.value) == null ? void 0 : l.includes(
        e.value
      ) : (t == null ? void 0 : t.modelValue.value) === (e == null ? void 0 : e.value);
    });
    return (l, n) => o.value ? (openBlock(), createBlock(unref(ee), {
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
var pi = defineComponent({
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
var fi = defineComponent({
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
var mi = defineComponent({
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
    return provide(Vo, {
      value: t.value
    }), (l, n) => {
      var r, s, i;
      return openBlock(), createBlock(te, {
        disabled: t.disabled,
        rootProvider: unref(e),
        orientation: (r = unref(e)) == null ? void 0 : r.orientation,
        "data-radix-vue-radio-value": t.value,
        onHandleClick: o,
        onEscapeKeydown: n[0] || (n[0] = (d) => {
          var p;
          return (p = unref(e)) == null ? void 0 : p.hideTooltip();
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
var Ee = Symbol();
var Zn = {
  inheritAttrs: false
};
var vi = defineComponent({
  ...Zn,
  __name: "MenubarRoot",
  props: {
    modelValue: {},
    defaultValue: {},
    orientation: { default: "horizontal" },
    dir: {}
  },
  emits: ["update:modelValue", "update:open"],
  setup(a, { emit: t }) {
    const e = a, o = I(e, "modelValue", t, {
      passive: true,
      defaultValue: e.defaultValue
    }), l = ref(), n = ref(), r = [], s = ref(), i = Mt();
    return provide(Ee, {
      selectedElement: l,
      changeSelected: (d) => {
        var p;
        l.value = d, (p = l.value) == null || p.focus();
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
    ), (d, p) => (openBlock(), createBlock(unref(se), null, {
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
var hi = defineComponent({
  __name: "MenubarMenu",
  props: {
    value: {}
  },
  setup(a) {
    const e = a.value ?? ye(), o = inject(Ee), l = ref(), n = computed(() => (o == null ? void 0 : o.modelValue.value) === e), r = inject(mt);
    return provide(mt, {
      value: e,
      isOpen: n,
      triggerElement: l,
      itemsArray: [],
      triggerId: e,
      contentId: ye(),
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
var Qn = {
  inheritAttrs: false
};
var _i = defineComponent({
  ...Qn,
  __name: "MenubarTrigger",
  props: {
    asChild: { type: Boolean },
    disabled: { type: Boolean },
    textValue: {}
  },
  setup(a) {
    const t = a, e = inject(Ee), o = inject(
      mt
    ), { primitiveElement: l, currentElement: n } = B(), r = Mt();
    onMounted(() => {
      o.triggerElement.value = n.value, e.triggerItemsArray.push(n.value);
    });
    async function s() {
      var g;
      e == null || e.changeValue(o == null ? void 0 : o.value), await nextTick();
      const v = (g = o == null ? void 0 : o.itemsArray) == null ? void 0 : g[0];
      e.selectedElement.value = v, v == null || v.focus();
    }
    function i(v) {
      if (v.key === "Escape")
        return p();
      if (v.keyCode === 32 || v.key === "Enter") {
        v.target.click();
        return;
      }
      if (v.key === "ArrowDown")
        return s();
      const g = ne(
        v,
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
    function p() {
      e == null || e.changeValue(void 0), document.querySelector("body").style.pointerEvents = "", setTimeout(() => {
        var v;
        (v = e == null ? void 0 : e.triggerElement.value) == null || v.focus();
      }, 0);
    }
    function c() {
      s();
    }
    const f = computed(() => o != null && o.isOpen.value ? "open" : "closed"), m = computed(() => r.value === n.value || (e == null ? void 0 : e.triggerElement.value) === n.value && (e == null ? void 0 : e.selectedElement.value));
    return watchEffect(() => {
      (e == null ? void 0 : e.selectedElement.value) === n.value && (e.triggerElement.value = n.value);
    }), watch(
      r,
      () => {
        r.value === n.value ? (e.selectedElement.value = n.value, e.triggerElement.value = n.value) : !(o != null && o.isOpen.value) && e.selectedElement.value === n.value && (e.selectedElement.value = void 0);
      },
      { immediate: true }
    ), (v, g) => (openBlock(), createBlock(unref(pe), { asChild: "" }, {
      default: withCtx(() => {
        var E, x, S, A, O;
        return [
          createVNode(unref(X), mergeProps({
            role: "menuitem",
            ref_key: "primitiveElement",
            ref: l,
            id: (E = unref(o)) == null ? void 0 : E.triggerId,
            "aria-expanded": (x = unref(o)) == null ? void 0 : x.isOpen.value,
            "aria-controls": (S = unref(o)) == null ? void 0 : S.contentId,
            "data-state": f.value,
            "data-orientation": (A = unref(e)) == null ? void 0 : A.orientation,
            "aria-haspopup": "menu",
            onKeydown: withModifiers(i, ["prevent"]),
            "data-radix-vue-collection-item": "",
            onMouseenter: d,
            onClick: c,
            "data-highlighted": m.value ? "" : null,
            "aria-disabled": t.disabled ? true : void 0,
            "data-disabled": t.disabled ? "" : void 0,
            tabindex: ((O = unref(e)) == null ? void 0 : O.triggerElement.value) === unref(n) ? "0" : "-1"
          }, v.$attrs), {
            default: withCtx(() => [
              renderSlot(v.$slots, "default")
            ]),
            _: 3
          }, 16, ["id", "aria-expanded", "aria-controls", "data-state", "data-orientation", "onKeydown", "data-highlighted", "aria-disabled", "data-disabled", "tabindex"])
        ];
      }),
      _: 3
    }));
  }
});
var Fn = {};
function Vn(a, t) {
  return openBlock(), createBlock(Teleport, { to: "body" }, [
    renderSlot(a.$slots, "default")
  ]);
}
var yi = De(Fn, [["render", Vn]]);
var gi = defineComponent({
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
    const t = a, e = inject(Ee), o = inject(
      mt
    ), { primitiveElement: l, currentElement: n } = B(), { createCollection: r } = $e();
    r(n), watchEffect(() => {
      n.value && o != null && o.isOpen.value && s();
    }), watch(
      () => e == null ? void 0 : e.selectedElement.value,
      (d) => {
        var c;
        if (!(o != null && o.isOpen.value))
          return;
        const p = Array.from(
          ((c = d == null ? void 0 : d.closest('[role="tooltip"]')) == null ? void 0 : c.querySelectorAll(
            "[data-radix-vue-collection-item]:not([data-disabled])"
          )) ?? []
        );
        p != null && p.length && p.includes(
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
    return (d, p) => {
      var c;
      return (c = unref(o)) != null && c.isOpen.value ? (openBlock(), createBlock(unref(fe), normalizeProps(mergeProps({ key: 0 }, t)), {
        default: withCtx(() => {
          var f, m;
          return [
            createVNode(unref(M), {
              ref_key: "primitiveElement",
              ref: l,
              "data-state": i.value,
              "data-side": t.side,
              "data-align": t.align,
              "aria-labelledby": (f = unref(o)) == null ? void 0 : f.triggerId,
              "data-orientation": (m = unref(o)) == null ? void 0 : m.orientation,
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
var bi = defineComponent({
  __name: "MenubarArrow",
  setup(a) {
    return (t, e) => (openBlock(), createBlock(unref(Ne)));
  }
});
var Qe = Symbol();
var wi = defineComponent({
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
    const e = a, o = I(e, "modelValue", t, {
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
      triggerId: ye(),
      contentId: ye(),
      parentContext: n
    }), (r, s) => (openBlock(), createBlock(unref(se), null, {
      default: withCtx(() => [
        renderSlot(r.$slots, "default")
      ]),
      _: 3
    }));
  }
});
var Ei = defineComponent({
  __name: "MenubarItem",
  props: {
    asChild: { type: Boolean },
    value: {},
    disabled: { type: Boolean },
    textValue: {}
  },
  setup(a) {
    const t = a, e = inject(Ee), o = inject(
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
      return openBlock(), createBlock(te, {
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
var jn = Symbol();
var Ci = defineComponent({
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
    return provide(jn, {
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
var xi = defineComponent({
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
var Zt = Symbol();
var el = ["id", "checked", "name", "disabled"];
var $i = defineComponent({
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
    const e = a, o = inject(Ee), l = I(e, "modelValue", t, {
      passive: true
    }), n = computed(() => l.value ? "checked" : "unchecked");
    function r() {
      l.value = !l.value;
    }
    provide(Zt, {
      modelValue: l
    });
    function s(d) {
      const p = ne(
        d,
        o == null ? void 0 : o.triggerElement.value,
        void 0,
        {
          arrowKeyOptions: "horizontal",
          itemsArray: o == null ? void 0 : o.triggerItemsArray
        }
      );
      p && (o == null || o.changeSelected(p), o == null || o.changeValue(p.id));
    }
    function i(d) {
      o.changeValue(void 0), o.changeSelected(
        o.triggerElement.value
      );
    }
    return (d, p) => {
      var c;
      return openBlock(), createBlock(te, {
        ref: "currentElement",
        disabled: e.disabled,
        rootProvider: unref(o),
        orientation: (c = unref(o)) == null ? void 0 : c.orientation,
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
          }), null, 16, el),
          renderSlot(d.$slots, "default")
        ]),
        _: 3
      }, 8, ["disabled", "rootProvider", "orientation", "data-state", "aria-checked"]);
    };
  }
});
var Si = defineComponent({
  __name: "MenubarItemIndicator",
  setup(a) {
    const t = inject(Zt);
    return (e, o) => {
      var l;
      return (l = unref(t)) != null && l.modelValue.value ? (openBlock(), createBlock(unref(ee), {
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
var ki = defineComponent({
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
var jo = "RadioGroup";
var Ai = defineComponent({
  __name: "MenubarRadioGroup",
  props: {
    asChild: { type: Boolean },
    value: {},
    defaultValue: {},
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(a, { emit: t }) {
    const e = a, { primitiveElement: o, currentElement: l } = B(), n = I(e, "modelValue", t, {
      passive: true
    });
    return provide(jo, {
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
var Ti = defineComponent({
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
    const t = a, e = inject(Ee), o = inject(
      jo
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
    provide(Zt, {
      modelValue: r
    });
    function s(d) {
      const p = ne(
        d,
        e == null ? void 0 : e.triggerElement.value,
        void 0,
        {
          arrowKeyOptions: "horizontal",
          itemsArray: e == null ? void 0 : e.triggerItemsArray
        }
      );
      p && (e == null || e.changeSelected(p), e == null || e.changeValue(p.id));
    }
    function i(d) {
      e.changeValue(void 0), e.changeSelected(
        e.triggerElement.value
      );
    }
    return (d, p) => {
      var c;
      return openBlock(), createBlock(te, {
        disabled: t.disabled,
        rootProvider: unref(e),
        orientation: (c = unref(e)) == null ? void 0 : c.orientation,
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
var Pi = defineComponent({
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
    const t = a, e = inject(Ee), o = inject(Qe), { primitiveElement: l, currentElement: n } = B(), { createCollection: r } = $e();
    r(n), watchEffect(() => {
      n.value && o != null && o.modelValue.value && s();
    }), watch(
      () => e == null ? void 0 : e.selectedElement.value,
      (i) => {
        var p;
        if (!(o != null && o.modelValue.value))
          return;
        const d = Array.from(
          ((p = i == null ? void 0 : i.closest('[role="tooltip"]')) == null ? void 0 : p.querySelectorAll(
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
      var p;
      return (p = unref(o)) != null && p.modelValue.value ? (openBlock(), createBlock(unref(fe), normalizeProps(mergeProps({ key: 0 }, t)), {
        default: withCtx(() => {
          var c;
          return [
            createVNode(unref(M), {
              ref_key: "primitiveElement",
              ref: l,
              "data-state": (c = unref(o)) != null && c.modelValue.value ? "open" : "closed",
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
var Bi = defineComponent({
  __name: "MenubarSubTrigger",
  setup(a) {
    const t = inject(Ee), e = inject(Qe), { primitiveElement: o, currentElement: l } = B();
    onMounted(() => {
      e.triggerElement.value = l.value;
    });
    async function n() {
      var f;
      e == null || e.showTooltip(), await nextTick();
      const c = (f = e == null ? void 0 : e.itemsArray) == null ? void 0 : f[0];
      t.selectedElement.value = c, c == null || c.focus();
    }
    function r() {
      e != null && e.modelValue.value || n();
    }
    async function s(c) {
      if (c.key === "ArrowRight")
        n();
      else {
        const f = ne(
          c,
          t == null ? void 0 : t.triggerElement.value,
          void 0,
          {
            arrowKeyOptions: "horizontal",
            itemsArray: t == null ? void 0 : t.triggerItemsArray
          }
        );
        f && (t == null || t.changeSelected(f), f.focus(), t != null && t.modelValue.value && (t == null || t.changeValue(f.id)));
      }
    }
    const i = computed(() => e != null && e.modelValue.value ? "open" : "closed");
    function d() {
      return e == null ? void 0 : e.showTooltip();
    }
    function p(c) {
      t.changeValue(void 0), t.changeSelected(
        t.triggerElement.value
      );
    }
    return (c, f) => (openBlock(), createBlock(unref(pe), { asChild: "" }, {
      default: withCtx(() => {
        var m, v, g, E, x;
        return [
          createVNode(te, {
            ref_key: "primitiveElement",
            ref: o,
            id: (m = unref(e)) == null ? void 0 : m.triggerId,
            rootProvider: unref(t),
            subProvider: (v = unref(e)) == null ? void 0 : v.parentContext,
            "aria-expanded": (g = unref(e)) == null ? void 0 : g.modelValue.value,
            "aria-controls": (E = unref(e)) == null ? void 0 : E.contentId,
            "data-state": i.value,
            "data-orientation": (x = unref(t)) == null ? void 0 : x.orientation,
            "aria-haspopup": "menu",
            onHandleClick: r,
            onMouseover: d,
            onHorizontalKeydown: s,
            onEscapeKeydown: p
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
var ue = "ScrollArea";
var Oi = defineComponent({
  __name: "ScrollAreaRoot",
  props: {
    type: { default: "hover" },
    dir: { default: "ltr" },
    scrollHideDelay: { default: 600 }
  },
  setup(a) {
    const t = a, e = ref(0), o = ref(0), l = ref(), n = ref(), r = ref(), s = ref(), i = ref(false), d = ref(false), p = ref(), c = (x) => {
      l.value = x;
    }, f = (x) => {
      n.value = x;
    }, m = (x) => {
      r.value = x;
    }, v = (x) => {
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
      scrollArea: p,
      viewport: l,
      onViewportChange: c,
      content: n,
      onContentChange: f,
      scrollbarX: r,
      scrollbarXEnabled: i,
      scrollbarY: s,
      scrollbarYEnabled: d,
      onScrollbarXChange: m,
      onScrollbarYChange: v,
      onScrollbarXEnabledChange: g,
      onScrollbarYEnabledChange: E
    }), (x, S) => (openBlock(), createElementBlock("div", {
      ref_key: "scrollArea",
      ref: p,
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
var Mi = defineComponent({
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
function tl(a, [t, e]) {
  return Math.min(e, Math.max(t, a));
}
function ea(a, t) {
  return (e) => {
    if (a[0] === a[1] || t[0] === t[1])
      return t[0];
    const o = (t[1] - t[0]) / (a[1] - a[0]);
    return t[0] + o * (e - a[0]);
  };
}
function Et(a) {
  const t = ta(a.viewport, a.content), e = a.scrollbar.paddingStart + a.scrollbar.paddingEnd, o = (a.scrollbar.size - e) * t;
  return Math.max(o, 18);
}
function ta(a, t) {
  const e = a / t;
  return isNaN(e) ? 0 : e;
}
var ol = (a, t = () => {
}) => {
  let e = { left: a.scrollLeft, top: a.scrollTop }, o = 0;
  return function l() {
    const n = { left: a.scrollLeft, top: a.scrollTop }, r = e.left !== n.left, s = e.top !== n.top;
    (r || s) && t(), e = n, o = window.requestAnimationFrame(l);
  }(), () => window.cancelAnimationFrame(o);
};
function mo(a, t, e = "ltr") {
  const o = Et(t), l = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, n = t.scrollbar.size - l, r = t.content - t.viewport, s = n - o, i = e === "ltr" ? [0, r] : [r * -1, 0], d = tl(
    a,
    i
  );
  return ea([0, r], [0, s])(d);
}
function rt(a) {
  return a ? parseInt(a, 10) : 0;
}
function al(a, t, e, o = "ltr") {
  const l = Et(e), n = l / 2, r = t || n, s = l - r, i = e.scrollbar.paddingStart + r, d = e.scrollbar.size - e.scrollbar.paddingEnd - s, p = e.content - e.viewport, c = o === "ltr" ? [0, p] : [p * -1, 0];
  return ea(
    [i, d],
    c
  )(a);
}
function vo(a, t) {
  return a > 0 && a < t;
}
var oa = defineComponent({
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
        const S = g.clientX - ((E = s.value) == null ? void 0 : E.left), A = g.clientY - ((x = s.value) == null ? void 0 : x.top);
        t("onDragScroll", { x: S, y: A });
      }
    }
    const d = (g) => {
      g.button === 0 && (g.target.setPointerCapture(g.pointerId), s.value = r.value.getBoundingClientRect(), n.value = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", o != null && o.viewport && (o.viewport.value.style.scrollBehavior = "auto"), i(g));
    }, p = (g) => {
      i(g);
    }, c = (g) => {
      const E = g.target;
      E.hasPointerCapture(g.pointerId) && E.releasePointerCapture(g.pointerId), document.body.style.webkitUserSelect = n.value, o != null && o.viewport && (o.viewport.value.style.scrollBehavior = ""), s.value = void 0;
    }, f = (g) => {
      var A;
      if (!l)
        return;
      const E = g.target, x = (A = r.value) == null ? void 0 : A.contains(E), S = l.sizes.value.content - l.sizes.value.viewport;
      x && l.handleWheelScroll(g, S);
    };
    onMounted(() => {
      document.addEventListener("wheel", f, { passive: false });
    }), onUnmounted(() => {
      document.removeEventListener("wheel", f);
    });
    const m = () => {
      var g, E, x, S, A, O;
      r.value && (e.isHorizontal ? l == null || l.handleSizeChange({
        content: ((g = o == null ? void 0 : o.viewport.value) == null ? void 0 : g.scrollWidth) ?? 0,
        viewport: ((E = o == null ? void 0 : o.viewport.value) == null ? void 0 : E.offsetWidth) ?? 0,
        scrollbar: {
          size: ((x = r.value) == null ? void 0 : x.clientWidth) ?? 0,
          paddingStart: rt(getComputedStyle(r.value).paddingLeft),
          paddingEnd: rt(getComputedStyle(r.value).paddingRight)
        }
      }) : l == null || l.handleSizeChange({
        content: ((S = o == null ? void 0 : o.viewport.value) == null ? void 0 : S.scrollHeight) ?? 0,
        viewport: ((A = o == null ? void 0 : o.viewport.value) == null ? void 0 : A.offsetHeight) ?? 0,
        scrollbar: {
          size: ((O = r.value) == null ? void 0 : O.clientHeight) ?? 0,
          paddingStart: rt(getComputedStyle(r.value).paddingLeft),
          paddingEnd: rt(getComputedStyle(r.value).paddingRight)
        }
      }));
    };
    ut(r, m), ut(o == null ? void 0 : o.content, m);
    const v = computed(() => {
      var g, E, x, S;
      return e.isHorizontal ? ((g = o == null ? void 0 : o.viewport.value) == null ? void 0 : g.scrollWidth) !== ((E = o == null ? void 0 : o.viewport.value) == null ? void 0 : E.offsetWidth) : ((x = o == null ? void 0 : o.viewport.value) == null ? void 0 : x.scrollHeight) !== ((S = o == null ? void 0 : o.viewport.value) == null ? void 0 : S.offsetHeight);
    });
    return (g, E) => v.value ? (openBlock(), createElementBlock("div", {
      key: 0,
      ref_key: "scrollbar",
      ref: r,
      style: { position: "absolute" },
      onPointerdown: d,
      onPointermove: p,
      onPointerup: c
    }, [
      v.value ? renderSlot(g.$slots, "default", { key: 0 }) : createCommentVNode("", true)
    ], 544)) : createCommentVNode("", true);
  }
});
var nl = defineComponent({
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
      return openBlock(), createBlock(oa, {
        "is-horizontal": true,
        "data-orientation": "horizontal",
        ref_key: "primitiveElement",
        ref: o,
        onOnDragScroll: s[0] || (s[0] = (p) => {
          var c;
          return (c = unref(e)) == null ? void 0 : c.onDragScroll(p.x);
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
var ll = defineComponent({
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
      return openBlock(), createBlock(oa, {
        "is-horizontal": false,
        "data-orientation": "vertical",
        ref_key: "primitiveElement",
        ref: o,
        onOnDragScroll: s[0] || (s[0] = (p) => {
          var c;
          return (c = unref(e)) == null ? void 0 : c.onDragScroll(p.y);
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
var Qt = defineComponent({
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
      const E = ta(o.value.viewport, o.value.content);
      return E > 0 && E < 1;
    }), n = ref(), r = ref(0), s = (E, x) => {
      if (f.value) {
        const S = t.viewport.value.scrollLeft + E.deltaY;
        t.viewport.value.scrollLeft = S, vo(S, x) && E.preventDefault();
      } else {
        const S = t.viewport.value.scrollTop + E.deltaY;
        t.viewport.value.scrollTop = S, vo(S, x) && E.preventDefault();
      }
    }, i = (E, x) => {
      f.value ? r.value = x.x : r.value = x.y;
    }, d = (E) => {
      r.value = 0;
    }, p = (E) => {
      o.value = E;
    };
    function c(E, x) {
      return al(
        E,
        r.value,
        o.value,
        x
      );
    }
    const f = computed(
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
        handleSizeChange: p,
        onThumbPositionChange: () => {
          if (f.value) {
            if (t != null && t.viewport.value && n.value) {
              const E = t == null ? void 0 : t.viewport.value.scrollLeft, x = mo(
                E,
                o.value,
                t == null ? void 0 : t.dir
              );
              n.value.style.transform = `translate3d(${x}px, 0, 0)`;
            }
          } else if (t != null && t.viewport.value && n.value) {
            const E = t == null ? void 0 : t.viewport.value.scrollTop, x = mo(E, o.value);
            n.value.style.transform = `translate3d(0, ${x}px, 0)`;
          }
        },
        onThumbChange: (E) => {
          n.value = E;
        },
        onDragScroll: (E) => {
          f.value ? t.viewport.value.scrollLeft = c(
            E,
            t.dir
          ) : t.viewport.value.scrollTop = c(E);
        }
      }
    ), (E, x) => f.value ? (openBlock(), createBlock(nl, { key: 0 }, {
      default: withCtx(() => [
        renderSlot(E.$slots, "default")
      ]),
      _: 3
    })) : (openBlock(), createBlock(ll, { key: 1 }, {
      default: withCtx(() => [
        renderSlot(E.$slots, "default")
      ]),
      _: 3
    }));
  }
});
var aa = defineComponent({
  __name: "ScrollAreaScrollbarAuto",
  setup(a) {
    const t = inject(
      ue
    ), e = inject(
      nt
    ), o = computed(() => e == null ? void 0 : e.visible.value), l = Co(() => {
      if (t != null && t.viewport.value) {
        const n = (t == null ? void 0 : t.viewport.value.offsetWidth) < (t == null ? void 0 : t.viewport.value.scrollWidth), r = (t == null ? void 0 : t.viewport.value.offsetHeight) < (t == null ? void 0 : t.viewport.value.scrollHeight);
        e != null && e.isHorizontal.value ? e.visible.value = n : e.visible.value = r;
      }
    }, 10);
    return ut(t == null ? void 0 : t.viewport, l), ut(t == null ? void 0 : t.content, l), (n, r) => o.value ? (openBlock(), createBlock(Qt, mergeProps({ key: 0 }, n.$attrs, {
      "data-state": o.value ? "visible" : "hidden"
    }), {
      default: withCtx(() => [
        renderSlot(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-state"])) : createCommentVNode("", true);
  }
});
var rl = {
  inheritAttrs: false
};
var il = defineComponent({
  ...rl,
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
      return openBlock(), createBlock(aa, mergeProps(r.$attrs, {
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
var sl = defineComponent({
  __name: "ScrollAreaScrollbarScroll",
  setup(a) {
    const t = inject(
      ue
    ), e = inject(
      nt
    ), { state: o, dispatch: l } = ko("hidden", {
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
    const n = Co(() => l("SCROLL_END"), 100);
    return watchEffect(() => {
      const r = t == null ? void 0 : t.viewport.value, s = e != null && e.isHorizontal.value ? "scrollLeft" : "scrollTop";
      if (r) {
        let i = r[s];
        const d = () => {
          const p = r[s];
          i !== p && (l("SCROLL"), n()), i = p;
        };
        r.addEventListener("scroll", d);
      }
    }), (r, s) => unref(o) !== "hidden" ? (openBlock(), createBlock(Qt, normalizeProps(mergeProps({ key: 0 }, r.$attrs)), {
      default: withCtx(() => [
        renderSlot(r.$slots, "default")
      ]),
      _: 3
    }, 16)) : createCommentVNode("", true);
  }
});
var nt = "ScrollAreaScrollbar";
var ul = {
  inheritAttrs: false
};
var Di = defineComponent({
  ...ul,
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
      var s, i, d, p;
      return ((s = unref(e)) == null ? void 0 : s.type) === "hover" ? (openBlock(), createBlock(il, mergeProps({ key: 0 }, n.$attrs, { forceMount: n.forceMount }), {
        default: withCtx(() => [
          renderSlot(n.$slots, "default")
        ]),
        _: 3
      }, 16, ["forceMount"])) : ((i = unref(e)) == null ? void 0 : i.type) === "scroll" ? (openBlock(), createBlock(sl, mergeProps({ key: 1 }, n.$attrs, { forceMount: n.forceMount }), {
        default: withCtx(() => [
          renderSlot(n.$slots, "default")
        ]),
        _: 3
      }, 16, ["forceMount"])) : ((d = unref(e)) == null ? void 0 : d.type) === "auto" ? (openBlock(), createBlock(aa, mergeProps({ key: 2 }, n.$attrs, { forceMount: n.forceMount }), {
        default: withCtx(() => [
          renderSlot(n.$slots, "default")
        ]),
        _: 3
      }, 16, ["forceMount"])) : ((p = unref(e)) == null ? void 0 : p.type) === "always" ? (openBlock(), createBlock(Qt, mergeProps({ key: 3 }, n.$attrs, { forceMount: n.forceMount }), {
        default: withCtx(() => [
          renderSlot(n.$slots, "default")
        ]),
        _: 3
      }, 16, ["forceMount"])) : createCommentVNode("", true);
    };
  }
});
var Ri = defineComponent({
  __name: "ScrollAreaThumb",
  setup(a) {
    const t = inject(
      ue
    ), e = inject(
      at
    ), o = (c) => {
      const m = c.target.getBoundingClientRect(), v = c.clientX - m.left, g = c.clientY - m.top;
      e == null || e.handleThumbDown(c, { x: v, y: g });
    }, l = (c) => {
      e == null || e.handleThumbUp(c);
    }, { primitiveElement: n, currentElement: r } = B(), s = ref(), i = computed(() => t == null ? void 0 : t.viewport.value), d = () => {
      if (!s.value) {
        const c = ol(
          i.value,
          e == null ? void 0 : e.onThumbPositionChange
        );
        s.value = c, e == null || e.onThumbPositionChange();
      }
    }, p = computed(() => e == null ? void 0 : e.sizes.value);
    return Da(p, () => {
      e == null || e.onThumbChange(r.value), i.value && (e == null || e.onThumbPositionChange(), i.value.addEventListener("scroll", d));
    }), onUnmounted(() => {
      var c;
      i.value.removeEventListener("scroll", d), (c = t == null ? void 0 : t.viewport.value) == null || c.removeEventListener(
        "scroll",
        d
      );
    }), (c, f) => {
      var m;
      return openBlock(), createBlock(unref(M), {
        ref_key: "primitiveElement",
        ref: n,
        "data-state": (m = unref(e)) != null && m.hasThumb ? "visible" : "hidden",
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
  Lt as ACCORDION_COLLAPSIBLE_INJECTION_KEY,
  et as ACCORDION_IMPL_INJECTION_KEY,
  ht as ACCORDION_ITEM_INJECTION_KEY,
  en as ACCORDION_KEYS,
  Nt as ACCORDION_VALUE_INJECTION_KEY,
  pl as AccordionContent,
  fl as AccordionHeader,
  Bo as AccordionImpl,
  tn as AccordionImplMultiple,
  on as AccordionImplSingle,
  cl as AccordionItem,
  ml as AccordionRoot,
  vl as AccordionTrigger,
  tr as AlertDialogAction,
  Vl as AlertDialogCancel,
  Ql as AlertDialogContent,
  er as AlertDialogDescription,
  Fl as AlertDialogOverlay,
  Zl as AlertDialogPortal,
  Xl as AlertDialogRoot,
  jl as AlertDialogTitle,
  Jl as AlertDialogTrigger,
  $l as AspectRatio,
  dr as AvatarFallback,
  ur as AvatarImage,
  sr as AvatarRoot,
  Rt as COLLAPSIBLE_INJECTION_KEY,
  _l as CheckboxIndicator,
  hl as CheckboxRoot,
  ja as CollapsibleContent,
  Za as CollapsibleRoot,
  Qa as CollapsibleTrigger,
  Xr as ContextMenuArrow,
  Vr as ContextMenuCheckboxItem,
  Gr as ContextMenuContent,
  Qr as ContextMenuGroup,
  Zr as ContextMenuItem,
  jr as ContextMenuItemIndicator,
  ei as ContextMenuLabel,
  qr as ContextMenuPortal,
  ti as ContextMenuRadioGroup,
  oi as ContextMenuRadioItem,
  Wr as ContextMenuRoot,
  Fr as ContextMenuSeparator,
  Jr as ContextMenuSub,
  ai as ContextMenuSubContent,
  ni as ContextMenuSubTrigger,
  Ur as ContextMenuTrigger,
  Ul as DialogClose,
  Yl as DialogContent,
  Gl as DialogDescription,
  Wl as DialogOverlay,
  zl as DialogPortal,
  Kl as DialogRoot,
  ql as DialogTitle,
  Hl as DialogTrigger,
  Br as DropdownMenuArrow,
  Nr as DropdownMenuCheckboxItem,
  Pr as DropdownMenuContent,
  Dr as DropdownMenuGroup,
  Mr as DropdownMenuItem,
  Lr as DropdownMenuItemIndicator,
  Ir as DropdownMenuLabel,
  Tr as DropdownMenuPortal,
  Kr as DropdownMenuRadioGroup,
  Hr as DropdownMenuRadioItem,
  kr as DropdownMenuRoot,
  Rr as DropdownMenuSeparator,
  Or as DropdownMenuSub,
  zr as DropdownMenuSubContent,
  Yr as DropdownMenuSubTrigger,
  Ar as DropdownMenuTrigger,
  br as HoverCardArrow,
  gr as HoverCardContent,
  yr as HoverCardPortal,
  hr as HoverCardRoot,
  _r as HoverCardTrigger,
  wl as Label,
  bi as MenubarArrow,
  $i as MenubarCheckboxItem,
  gi as MenubarContent,
  Ci as MenubarGroup,
  Ei as MenubarItem,
  Si as MenubarItemIndicator,
  ki as MenubarLabel,
  hi as MenubarMenu,
  yi as MenubarPortal,
  Ai as MenubarRadioGroup,
  Ti as MenubarRadioItem,
  vi as MenubarRoot,
  xi as MenubarSeparator,
  wi as MenubarSub,
  Pi as MenubarSubContent,
  Bi as MenubarSubTrigger,
  _i as MenubarTrigger,
  $r as PopoverArrow,
  Sr as PopoverClose,
  xr as PopoverContent,
  Cr as PopoverPortal,
  wr as PopoverRoot,
  Er as PopoverTrigger,
  Il as ProgressIndicator,
  Ll as ProgressRoot,
  Nl as RadioGroupIndicator,
  Rl as RadioGroupItem,
  Dl as RadioGroupRoot,
  Oi as ScrollAreaRoot,
  Di as ScrollAreaScrollbar,
  Ri as ScrollAreaThumb,
  Mi as ScrollAreaViewport,
  ui as SelectArrow,
  si as SelectContent,
  fi as SelectGroup,
  mi as SelectItem,
  ci as SelectItemIndicator,
  pi as SelectLabel,
  ii as SelectPortal,
  li as SelectRoot,
  di as SelectSeparator,
  ri as SelectTrigger,
  bl as Separator,
  Ml as SliderRange,
  Pl as SliderRoot,
  Bl as SliderThumb,
  Ol as SliderTrack,
  yl as SwitchRoot,
  gl as SwitchThumb,
  Al as TabsContent,
  kl as TabsList,
  Sl as TabsRoot,
  Tl as TabsTrigger,
  El as Toggle,
  xl as ToggleGroupItem,
  Cl as ToggleGroupRoot,
  ar as ToolbarButton,
  nr as ToolbarLink,
  or as ToolbarRoot,
  ir as ToolbarSeparator,
  lr as ToolbarToggleGroup,
  rr as ToolbarToggleItem,
  vr as TooltipArrow,
  mr as TooltipContent,
  fr as TooltipPortal,
  cr as TooltipRoot,
  pr as TooltipTrigger
};
//# sourceMappingURL=radix-vue.js.map
