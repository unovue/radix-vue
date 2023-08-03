import {
  Fragment,
  Teleport,
  capitalize,
  cloneVNode,
  computed,
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createTextVNode,
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
  normalizeProps,
  normalizeStyle,
  onMounted,
  onScopeDispose,
  onUnmounted,
  openBlock,
  provide,
  readonly,
  ref,
  renderList,
  renderSlot,
  resolveDynamicComponent,
  shallowReadonly,
  shallowRef,
  toDisplayString,
  toRef,
  toRefs,
  toValue,
  unref,
  useAttrs,
  useSlots,
  watch,
  watchEffect,
  withCtx,
  withDirectives,
  withKeys,
  withModifiers
} from "./chunk-OX6HOUGK.js";
import "./chunk-76J2PTFD.js";

// ../node_modules/.pnpm/radix-vue@0.1.17_vue@3.3.4/node_modules/radix-vue/dist/index.js
var Ja = Object.defineProperty;
var Za = Object.defineProperties;
var Qa = Object.getOwnPropertyDescriptors;
var Eo = Object.getOwnPropertySymbols;
var Va = Object.prototype.hasOwnProperty;
var ja = Object.prototype.propertyIsEnumerable;
var Co = (a, o, e) => o in a ? Ja(a, o, { enumerable: true, configurable: true, writable: true, value: e }) : a[o] = e;
var en = (a, o) => {
  for (var e in o || (o = {}))
    Va.call(o, e) && Co(a, e, o[e]);
  if (Eo)
    for (var e of Eo(o))
      ja.call(o, e) && Co(a, e, o[e]);
  return a;
};
var tn = (a, o) => Za(a, Qa(o));
function on(a, o) {
  var e;
  const t = shallowRef();
  return watchEffect(() => {
    t.value = a();
  }, tn(en({}, o), {
    flush: (e = o == null ? void 0 : o.flush) != null ? e : "sync"
  })), readonly(t);
}
function Uo(a, o) {
  let e, t, l;
  const n = ref(true), i = () => {
    n.value = true, l();
  };
  watch(a, i, { flush: "sync" });
  const r = typeof o == "function" ? o : o.get, s = typeof o == "function" ? void 0 : o.set, d = customRef((c, p) => (t = c, l = p, {
    get() {
      return n.value && (e = r(), n.value = false), t(), e;
    },
    set(f) {
      s == null || s(f);
    }
  }));
  return Object.isExtensible(d) && (d.trigger = i), d;
}
function Bt(a) {
  return getCurrentScope() ? (onScopeDispose(a), true) : false;
}
function an(a) {
  let o = false, e;
  const t = effectScope(true);
  return (...l) => (o || (e = t.run(() => a(...l)), o = true), e);
}
function ke(a) {
  return typeof a == "function" ? a() : unref(a);
}
var qo = typeof window < "u";
var nn = (a) => typeof a < "u";
var Ue = () => {
};
var Ft = ln();
function ln() {
  var a;
  return qo && ((a = window == null ? void 0 : window.navigator) == null ? void 0 : a.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
}
function rn(a, o) {
  function e(...t) {
    return new Promise((l, n) => {
      Promise.resolve(a(() => o.apply(this, t), { fn: o, thisArg: this, args: t })).then(l).catch(n);
    });
  }
  return e;
}
function sn(a, o = {}) {
  let e, t, l = Ue;
  const n = (r) => {
    clearTimeout(r), l(), l = Ue;
  };
  return (r) => {
    const s = ke(a), d = ke(o.maxWait);
    return e && n(e), s <= 0 || d !== void 0 && d <= 0 ? (t && (n(t), t = null), Promise.resolve(r())) : new Promise((c, p) => {
      l = o.rejectOnCancel ? p : c, d && !t && (t = setTimeout(() => {
        e && n(e), t = null, c(r());
      }, d)), e = setTimeout(() => {
        t && n(t), t = null, c(r());
      }, s);
    });
  };
}
function un(...a) {
  if (a.length !== 1)
    return toRef(...a);
  const o = a[0];
  return typeof o == "function" ? readonly(customRef(() => ({ get: o, set: Ue }))) : ref(o);
}
function dn(a, o = 1e4) {
  return customRef((e, t) => {
    let l = a, n;
    const i = () => setTimeout(() => {
      l = a, t();
    }, ke(o));
    return Bt(() => {
      clearTimeout(n);
    }), {
      get() {
        return e(), l;
      },
      set(r) {
        l = r, t(), clearTimeout(n), n = i();
      }
    };
  });
}
function Qt(a, o = 200, e = {}) {
  return rn(
    sn(o, e),
    a
  );
}
function cn(a, o, e) {
  const t = watch(a, (...l) => (nextTick(() => t()), o(...l)), e);
}
function de(a) {
  var o;
  const e = ke(a);
  return (o = e == null ? void 0 : e.$el) != null ? o : e;
}
var st = qo ? window : void 0;
function ge(...a) {
  let o, e, t, l;
  if (typeof a[0] == "string" || Array.isArray(a[0]) ? ([e, t, l] = a, o = st) : [o, e, t, l] = a, !o)
    return Ue;
  Array.isArray(e) || (e = [e]), Array.isArray(t) || (t = [t]);
  const n = [], i = () => {
    n.forEach((c) => c()), n.length = 0;
  }, r = (c, p, f, m) => (c.addEventListener(p, f, m), () => c.removeEventListener(p, f, m)), s = watch(
    () => [de(o), ke(l)],
    ([c, p]) => {
      i(), c && n.push(
        ...e.flatMap((f) => t.map((m) => r(c, f, m, p)))
      );
    },
    { immediate: true, flush: "post" }
  ), d = () => {
    s(), i();
  };
  return Bt(d), d;
}
var $o = false;
function Se(a, o, e = {}) {
  const { window: t = st, ignore: l = [], capture: n = true, detectIframe: i = false } = e;
  if (!t)
    return;
  Ft && !$o && ($o = true, Array.from(t.document.body.children).forEach((f) => f.addEventListener("click", Ue)), t.document.documentElement.addEventListener("click", Ue));
  let r = true;
  const s = (f) => l.some((m) => {
    if (typeof m == "string")
      return Array.from(t.document.querySelectorAll(m)).some((v) => v === f.target || f.composedPath().includes(v));
    {
      const v = de(m);
      return v && (f.target === v || f.composedPath().includes(v));
    }
  }), c = [
    ge(t, "click", (f) => {
      const m = de(a);
      if (!(!m || m === f.target || f.composedPath().includes(m))) {
        if (f.detail === 0 && (r = !s(f)), !r) {
          r = true;
          return;
        }
        o(f);
      }
    }, { passive: true, capture: n }),
    ge(t, "pointerdown", (f) => {
      const m = de(a);
      m && (r = !f.composedPath().includes(m) && !s(f));
    }, { passive: true }),
    i && ge(t, "blur", (f) => {
      setTimeout(() => {
        var m;
        const v = de(a);
        ((m = t.document.activeElement) == null ? void 0 : m.tagName) === "IFRAME" && !(v != null && v.contains(t.document.activeElement)) && o(f);
      }, 0);
    })
  ].filter(Boolean);
  return () => c.forEach((f) => f());
}
function pn(a) {
  return typeof a == "function" ? a : typeof a == "string" ? (o) => o.key === a : Array.isArray(a) ? (o) => a.includes(o.key) : () => true;
}
function fn(...a) {
  let o, e, t = {};
  a.length === 3 ? (o = a[0], e = a[1], t = a[2]) : a.length === 2 ? typeof a[1] == "object" ? (o = true, e = a[0], t = a[1]) : (o = a[0], e = a[1]) : (o = true, e = a[0]);
  const {
    target: l = st,
    eventName: n = "keydown",
    passive: i = false,
    dedupe: r = false
  } = t, s = pn(o);
  return ge(l, n, (c) => {
    c.repeat && ke(r) || s(c) && e(c);
  }, i);
}
function Vt(a = {}) {
  var o;
  const {
    window: e = st,
    deep: t = true
  } = a, l = (o = a.document) != null ? o : e == null ? void 0 : e.document, n = () => {
    var r;
    let s = l == null ? void 0 : l.activeElement;
    if (t)
      for (; s != null && s.shadowRoot; )
        s = (r = s == null ? void 0 : s.shadowRoot) == null ? void 0 : r.activeElement;
    return s;
  }, i = Uo(
    () => null,
    () => n()
  );
  return e && (ge(e, "blur", (r) => {
    r.relatedTarget === null && i.trigger();
  }, true), ge(e, "focus", i.trigger, true)), i;
}
function mn() {
  const a = ref(false);
  return getCurrentInstance() && onMounted(() => {
    a.value = true;
  }), a;
}
function vn(a) {
  const o = mn();
  return computed(() => (o.value, !!a()));
}
function hn(a) {
  return JSON.parse(JSON.stringify(a));
}
var So = Object.getOwnPropertySymbols;
var yn = Object.prototype.hasOwnProperty;
var gn = Object.prototype.propertyIsEnumerable;
var _n = (a, o) => {
  var e = {};
  for (var t in a)
    yn.call(a, t) && o.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && So)
    for (var t of So(a))
      o.indexOf(t) < 0 && gn.call(a, t) && (e[t] = a[t]);
  return e;
};
function Ee(a, o, e = {}) {
  const t = e, { window: l = st } = t, n = _n(t, ["window"]);
  let i;
  const r = vn(() => l && "ResizeObserver" in l), s = () => {
    i && (i.disconnect(), i = void 0);
  }, d = computed(
    () => Array.isArray(a) ? a.map((f) => de(f)) : [de(a)]
  ), c = watch(
    d,
    (f) => {
      if (s(), r.value && l) {
        i = new ResizeObserver(o);
        for (const m of f)
          m && i.observe(m, n);
      }
    },
    { immediate: true, flush: "post", deep: true }
  ), p = () => {
    s(), c();
  };
  return Bt(p), {
    isSupported: r,
    stop: p
  };
}
function Xo(a) {
  const o = window.getComputedStyle(a);
  if (o.overflowX === "scroll" || o.overflowY === "scroll" || o.overflowX === "auto" && a.clientWidth < a.scrollWidth || o.overflowY === "auto" && a.clientHeight < a.scrollHeight)
    return true;
  {
    const e = a.parentNode;
    return !e || e.tagName === "BODY" ? false : Xo(e);
  }
}
function bn(a) {
  const o = a || window.event, e = o.target;
  return Xo(e) ? false : o.touches.length > 1 ? true : (o.preventDefault && o.preventDefault(), false);
}
function Go(a, o = false) {
  const e = ref(o);
  let t = null, l;
  watch(un(a), (r) => {
    if (r) {
      const s = r;
      l = s.style.overflow, e.value && (s.style.overflow = "hidden");
    }
  }, {
    immediate: true
  });
  const n = () => {
    const r = ke(a);
    !r || e.value || (Ft && (t = ge(
      r,
      "touchmove",
      (s) => {
        bn(s);
      },
      { passive: false }
    )), r.style.overflow = "hidden", e.value = true);
  }, i = () => {
    const r = ke(a);
    !r || !e.value || (Ft && (t == null || t()), r.style.overflow = l, e.value = false);
  };
  return Bt(i), computed({
    get() {
      return e.value;
    },
    set(r) {
      r ? n() : i();
    }
  });
}
function H(a, o, e, t = {}) {
  var l, n, i;
  const {
    clone: r = false,
    passive: s = false,
    eventName: d,
    deep: c = false,
    defaultValue: p,
    shouldEmit: f
  } = t, m = getCurrentInstance(), v = e || (m == null ? void 0 : m.emit) || ((l = m == null ? void 0 : m.$emit) == null ? void 0 : l.bind(m)) || ((i = (n = m == null ? void 0 : m.proxy) == null ? void 0 : n.$emit) == null ? void 0 : i.bind(m == null ? void 0 : m.proxy));
  let y = d;
  o || (o = "modelValue"), y = y || `update:${o.toString()}`;
  const h2 = (k) => r ? typeof r == "function" ? r(k) : hn(k) : k, E = () => nn(a[o]) ? h2(a[o]) : p, $ = (k) => {
    f ? f(k) && v(y, k) : v(y, k);
  };
  if (s) {
    const k = E(), O = ref(k);
    return watch(
      () => a[o],
      (x) => O.value = h2(x)
    ), watch(
      O,
      (x) => {
        (x !== a[o] || c) && $(x);
      },
      { deep: c }
    ), O;
  } else
    return computed({
      get() {
        return E();
      },
      set(k) {
        $(k);
      }
    });
}
function te(a, o, e, t = {}) {
  if (!o)
    return null;
  const {
    arrowKeyOptions: l = "both",
    attributeName: n = "data-radix-vue-collection-item",
    itemsArray: i = [],
    loop: r = true,
    dir: s = "ltr",
    preventScroll: d = true,
    focus: c = false
  } = t, [p, f, m, v, y, h2] = [
    a.key === "ArrowRight",
    a.key === "ArrowLeft",
    a.key === "ArrowUp",
    a.key === "ArrowDown",
    a.key === "Home",
    a.key === "End"
  ], E = m || v, $ = p || f;
  if (!y && !h2 && (!E && !$ || l === "vertical" && $ || l === "horizontal" && E))
    return null;
  const k = e ? Array.from(e.querySelectorAll(`[${n}]`)) : i;
  if (!k.length)
    return null;
  d && a.preventDefault();
  let O = null;
  return $ || E ? O = Jo(k, o, {
    goForward: E ? v : s === "ltr" ? p : f,
    loop: r
  }) : y ? O = k.at(0) || null : h2 && (O = k.at(-1) || null), c && (O == null || O.focus()), O;
}
function Jo(a, o, { goForward: e, loop: t }, l = a.length) {
  if (--l === 0)
    return null;
  const n = a.indexOf(o), i = e ? n + 1 : n - 1;
  if (!t && (i < 0 || i >= a.length))
    return null;
  const r = (i + a.length) % a.length, s = a[r];
  return s ? s.hasAttribute("disabled") && s.getAttribute("disabled") !== "false" ? Jo(
    a,
    s,
    { goForward: e, loop: t },
    l
  ) : s : null;
}
async function wn(a, o, e = 500) {
  let t = true, l, n;
  const i = new Promise((d) => {
    n = d, l = setTimeout(() => {
      s(), d(t);
    }, e);
  });
  function r() {
    t = false, s(), clearTimeout(l), l = void 0, n(false);
  }
  function s() {
    o.removeEventListener("mouseleave", r);
  }
  return o.addEventListener("mouseleave", r), i;
}
function En(a, o = {}) {
  const { delayEnter: e = 0, delayLeave: t = 0, disabled: l = false } = o;
  let n;
  function i(r) {
    if (n && (clearTimeout(n), n = void 0), toValue(l))
      return;
    const s = r ? e : t, d = r ? o.onHoverEnter : o.onHoverLeave;
    n = setTimeout(() => d == null ? void 0 : d(), s);
  }
  ge(a, "mouseenter", () => i(true), { passive: true }), ge(a, "mouseleave", () => i(false), { passive: true });
}
var Zo = (a, o = 300) => {
  let e = true, t, l;
  const n = a.target, i = new Promise((d) => {
    l = d, t = setTimeout(() => {
      s(), d(e);
    }, o);
  });
  function r() {
    e = false, s(), clearTimeout(t), t = void 0, l(false);
  }
  function s() {
    n.removeEventListener("mouseenter", r);
  }
  return n.addEventListener("mouseenter", r), i;
};
function Qo(a, o) {
  const e = ref(a);
  function t(n) {
    return o[e.value][n] ?? e.value;
  }
  return {
    state: e,
    dispatch: (n) => {
      e.value = t(n);
    }
  };
}
var Cn = "data-radix-vue-collection-item";
var Ao = Symbol();
var ie = () => {
  const a = (l) => {
    provide(Ao, {
      collectionRef: l
    });
  }, o = inject(Ao);
  return { createCollection: a, setCollection: (l) => {
    o && (o.collectionRef = l);
  }, getItems: (l) => {
    const n = l ?? de(o == null ? void 0 : o.collectionRef);
    return n ? Array.from(
      n.querySelectorAll(
        `[${Cn}]:not([data-disabled])`
      )
    ) : [];
  } };
};
var $n = (a) => {
  const o = ref(), e = computed(() => {
    var l;
    return ((l = o.value) == null ? void 0 : l.width) ?? 0;
  }), t = computed(() => {
    var l;
    return ((l = o.value) == null ? void 0 : l.height) ?? 0;
  });
  return onMounted(() => {
    const l = de(a);
    if (l) {
      o.value = { width: l.offsetWidth, height: l.offsetHeight };
      const n = new ResizeObserver((i) => {
        if (!Array.isArray(i) || !i.length)
          return;
        const r = i[0];
        let s, d;
        if ("borderBoxSize" in r) {
          const c = r.borderBoxSize, p = Array.isArray(c) ? c[0] : c;
          s = p.inlineSize, d = p.blockSize;
        } else
          s = l.offsetWidth, d = l.offsetHeight;
        o.value = { width: s, height: d };
      });
      return n.observe(l, { box: "border-box" }), () => n.unobserve(l);
    } else
      o.value = void 0;
  }), {
    width: e,
    height: t
  };
};
var Sn = an(() => ({ count: ref(0) }));
var Q = (a) => {
  const { count: o } = Sn();
  return a || o.value++, a || `radix-${o.value}`;
};
function jt(a) {
  if (a) {
    const o = [
      ...Array.from(
        a.querySelectorAll(
          'a[href], button, input, textarea, select, details,[tabindex]:not([tabindex="-1"])'
        )
      )
    ].filter(
      (n) => !n.hasAttribute("disabled") && !n.getAttribute("aria-hidden")
    ), e = o[0], t = o[o.length - 1], l = 9;
    return e && e.focus(), a.addEventListener("keydown", function(n) {
      (n.key === "Tab" || n.keyCode === l) && (n.shiftKey ? document.activeElement === e && (t.focus(), n.preventDefault()) : document.activeElement === t && (e.focus(), n.preventDefault()));
    }), e;
  }
}
function eo(a) {
  return a ? a.flatMap((o) => o.type === Fragment ? eo(o.children) : [o]) : [];
}
function An(a) {
  return a && (typeof a.type == "string" || typeof a.type == "object" || typeof a.type == "function");
}
var kn = [
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
var ko = (a) => {
  var e;
  const o = (e = a == null ? void 0 : a.parent) != null && e.type.name ? `<${a.parent.type.name} />` : "component";
  throw new Error(
    [
      `Detected an invalid children for \`${o}\` with \`asChild\` prop.`,
      "",
      "Note: All components accepting `asChild` expect only one direct child of valid VNode type.",
      "You can apply a few solutions:",
      [
        "Provide a single child element so that we can forward the props onto that element.",
        "Ensure the first child is an actual element instead of a raw text node or comment node."
      ].map((t) => `  - ${t}`).join(`
`)
    ].join(`
`)
  );
};
var Pn = (a) => defineComponent({
  inheritAttrs: false,
  props: {
    asChild: {
      type: Boolean,
      default: false
    }
  },
  name: `Primitive${capitalize(a)}`,
  setup(o, { attrs: e, slots: t }) {
    const l = getCurrentInstance();
    return o.asChild ? () => {
      var i, r, s, d;
      let n = (i = t.default) == null ? void 0 : i.call(t);
      if (n = eo(n || []), Object.keys(e).length > 0) {
        const [c, ...p] = n;
        (!An(c) || p.length > 0) && ko(l), (r = c.props) == null || delete r.ref;
        const f = mergeProps(e, c.props ?? {});
        e.class && ((s = c.props) != null && s.class) && ((d = c.props) == null || delete d.class);
        const m = cloneVNode(c, f);
        for (const v in f)
          v.startsWith("on") && (m.props || (m.props = {}), m.props[v] = f[v]);
        return m;
      } else if (Array.isArray(n) && n.length > 1)
        ko(l);
      else
        return Array.isArray(n) && n.length === 1 ? n[0] : null;
    } : () => h(
      a,
      { ...e },
      { default: () => t.default && t.default() }
    );
  }
});
var V = kn.reduce((a, o) => {
  const e = Pn(o);
  return { ...a, [o]: e };
}, {});
var B = () => {
  const a = ref(), o = computed(() => de(a));
  return {
    primitiveElement: a,
    currentElement: o
  };
};
var Vo = V.a;
var G = V.button;
var R = V.div;
V.form;
var jo = V.h2;
var On = V.h3;
var Tn = V.img;
V.input;
var ut = V.label;
var Bn = V.li;
var xn = V.nav;
V.ol;
var ea = V.p;
var ne = V.span;
var Dn = V.svg;
var Mn = V.ul;
var to = Symbol();
var Rn = defineComponent({
  __name: "CollapsibleRoot",
  props: {
    defaultOpen: { type: Boolean, default: false },
    open: { type: Boolean, default: void 0 },
    disabled: { type: Boolean },
    asChild: { type: Boolean }
  },
  emits: ["update:open"],
  setup(a, { emit: o }) {
    const e = a, t = H(e, "open", o, {
      defaultValue: e.defaultOpen,
      passive: true
    }), l = H(e, "disabled");
    return provide(to, {
      contentId: Q(),
      disabled: l,
      open: t,
      onOpenToggle: () => {
        t.value = !t.value;
      }
    }), (n, i) => (openBlock(), createBlock(unref(R), {
      "as-child": e.asChild,
      "data-state": e.open ? "open" : "closed",
      "data-disabled": e.disabled ? "" : void 0
    }, {
      default: withCtx(() => [
        renderSlot(n.$slots, "default", { open: unref(t) })
      ]),
      _: 3
    }, 8, ["as-child", "data-state", "data-disabled"]));
  }
});
var In = defineComponent({
  __name: "CollapsibleTrigger",
  props: {
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(
      to
    );
    return (t, l) => {
      var n, i, r, s, d, c, p, f;
      return openBlock(), createBlock(unref(G), {
        type: "button",
        "as-child": o.asChild,
        "aria-controls": (n = unref(e)) == null ? void 0 : n.contentId,
        "aria-expanded": ((i = unref(e)) == null ? void 0 : i.open.value) || false,
        "data-state": (r = unref(e)) != null && r.open.value ? "open" : "closed",
        "data-disabled": (d = (s = unref(e)) == null ? void 0 : s.disabled) != null && d.value ? "" : void 0,
        disabled: (p = (c = unref(e)) == null ? void 0 : c.disabled) == null ? void 0 : p.value,
        onClick: (f = unref(e)) == null ? void 0 : f.onOpenToggle
      }, {
        default: withCtx(() => [
          renderSlot(t.$slots, "default")
        ]),
        _: 3
      }, 8, ["as-child", "aria-controls", "aria-expanded", "data-state", "data-disabled", "disabled", "onClick"]);
    };
  }
});
function Ln(a, o) {
  const e = ref({}), t = ref("none"), l = a.value ? "mounted" : "unmounted", { state: n, dispatch: i } = Qo(l, {
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
  watch(
    a,
    async (f, m) => {
      var y;
      const v = m !== f;
      if (await nextTick(), v) {
        const h2 = t.value, E = ht(o.value);
        f ? i("MOUNT") : E === "none" || ((y = e.value) == null ? void 0 : y.display) === "none" ? i("UNMOUNT") : i(m && h2 !== E ? "ANIMATION_OUT" : "UNMOUNT");
      }
    },
    { immediate: true }
  );
  const r = (f) => {
    const v = ht(o.value).includes(
      f.animationName
    );
    f.target === o.value && v && i("ANIMATION_END");
  }, s = (f) => {
    f.target === o.value && (t.value = ht(o.value));
  }, d = watch(
    o,
    (f, m) => {
      f ? (e.value = getComputedStyle(f), f.addEventListener("animationstart", s), f.addEventListener("animationcancel", r), f.addEventListener("animationend", r)) : (i("ANIMATION_END"), m == null || m.removeEventListener("animationstart", s), m == null || m.removeEventListener("animationcancel", r), m == null || m.removeEventListener("animationend", r));
    },
    { immediate: true }
  ), c = watch(n, () => {
    const f = ht(o.value);
    t.value = n.value === "mounted" ? f : "none";
  });
  return onUnmounted(() => {
    d(), c();
  }), {
    isPresent: computed(
      () => ["mounted", "unmountSuspended"].includes(n.value)
    )
  };
}
function ht(a) {
  return a && getComputedStyle(a).animationName || "none";
}
var Qe = defineComponent({
  __name: "Presence",
  props: {
    present: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(a, { expose: o }) {
    var f;
    const e = a, { present: t, forceMount: l } = toRefs(e), n = useSlots(), i = ref(), { isPresent: r } = Ln(t, i), s = {
      created(m) {
        i.value = m;
      }
    };
    let d = (f = n.default) == null ? void 0 : f.call(n);
    d = eo(d || []);
    const c = getCurrentInstance(), p = () => {
      var m, v, y;
      if (d && (d == null ? void 0 : d.length) > 1) {
        const h2 = (m = c == null ? void 0 : c.parent) != null && m.type.name ? `<${c.parent.type.name} />` : "component";
        throw new Error(
          [
            `Detected an invalid children for \`${h2}\` for  \`Presence\` component.`,
            "",
            "Note: Presence works similarly to `v-if` directly, but it waits for animation/transition to finished before unmounting. So it expect only one direct child of valid VNode type.",
            "You can apply a few solutions:",
            [
              "Provide a single child element so that `presence` directive attach correctly.rv",
              "Ensure the first child is an actual element instead of a raw text node or comment node."
            ].map((E) => `  - ${E}`).join(`
`)
          ].join(`
`)
        );
      }
      return l.value || t.value || r.value ? withDirectives((y = (v = n.default) == null ? void 0 : v.call(n)) == null ? void 0 : y[0], [[s]]) : null;
    };
    return o({
      present: r
    }), (m, v) => (openBlock(), createBlock(p));
  }
});
var Nn = defineComponent({
  inheritAttrs: false,
  __name: "CollapsibleContent",
  props: {
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(
      to
    ), t = ref(), { primitiveElement: l, currentElement: n } = B(), i = ref(0), r = ref(0), s = computed(() => e == null ? void 0 : e.open.value), d = ref(s.value), c = ref();
    return watch(
      () => {
        var p;
        return [s.value, (p = t.value) == null ? void 0 : p.present];
      },
      async () => {
        await nextTick();
        const p = n.value;
        if (!p)
          return;
        c.value = c.value || {
          transitionDuration: p.style.transitionDuration,
          animationName: p.style.animationName
        }, p.style.transitionDuration = "0s", p.style.animationName = "none";
        const f = p.getBoundingClientRect();
        r.value = f.height, i.value = f.width, d.value || (p.style.transitionDuration = c.value.transitionDuration, p.style.animationName = c.value.animationName);
      },
      {
        immediate: true
      }
    ), onMounted(() => {
      requestAnimationFrame(() => {
        d.value = false;
      });
    }), (p, f) => (openBlock(), createBlock(unref(Qe), {
      ref_key: "presentRef",
      ref: t,
      "force-mount": true,
      present: unref(e).open.value
    }, {
      default: withCtx(() => {
        var m, v, y, h2, E;
        return [
          createVNode(unref(R), mergeProps({
            ref_key: "primitiveElement",
            ref: l
          }, p.$attrs, {
            "as-child": o.asChild,
            "data-state": (m = unref(e)) != null && m.open.value ? "open" : "closed",
            "data-disabled": (y = (v = unref(e)) == null ? void 0 : v.disabled) != null && y.value ? "true" : void 0,
            id: (h2 = unref(e)) == null ? void 0 : h2.contentId,
            hidden: !((E = t.value) != null && E.present),
            style: {
              ["--radix-collapsible-content-height"]: `${r.value}px`,
              ["--radix-collapsible-content-width"]: `${i.value}px`
            }
          }), {
            default: withCtx(() => {
              var $;
              return [
                ($ = t.value) != null && $.present ? renderSlot(p.$slots, "default", { key: 0 }) : createCommentVNode("", true)
              ];
            }),
            _: 3
          }, 16, ["as-child", "data-state", "data-disabled", "id", "hidden", "style"])
        ];
      }),
      _: 3
    }, 8, ["present"]));
  }
});
function Kn(a, o) {
  if (a === "single") {
    if (Array.isArray(o)) {
      console.error(`Invalid prop \`value\` of value \`${o}\` supplied to \`AccordionRoot\`, which type is \`single\`. The \`value\` prop must be:
  - a string
  - \`undefined\`

If you want to use multiple values, use the \`AccordionRoot\` with type \`multiple\`.

Defaulting to \`undefined\`.`);
      return;
    }
  } else if (a === "multiple" && (typeof o == "string" || typeof o > "u"))
    return console.error(`Invalid prop \`value\` of value \`${o}\` supplied to \`AccordionRoot\`, which type is \`multiple\`. The \`value\` prop must be:
- an array of strings
- empty array (\`[]\`)

If you want to use just one value, use the \`AccordionRoot\` with type \`single\`.

Defaulting to empty array (\`[]\`).`), [];
  return o;
}
function Hn({ type: a, defaultValue: o }) {
  if (a === "multiple")
    return Array.isArray(o) ? o : o === void 0 ? [] : (console.error(
      `Invalid prop \`defaultValue\` of value \`${o}\` supplied to \`AccordionRoot\`, which type is \`multiple\`. The \`defaultValue\` prop must be:
  - an array of strings
  - empty array (\`[]\`)

If you want to use just one value, use the \`AccordionRoot\` with type \`single\`.

Defaulting to empty array (\`[]\`).`
    ), []);
  if (a === "single") {
    if (typeof o == "string")
      return o;
    if (o === void 0)
      return;
    console.error(
      `Invalid prop \`defaultValue\` of value \`${o}\` supplied to \`AccordionRoot\`, which type is \`single\`. The \`defaultValue\` prop must be:
  - a string
  - \`undefined\`

Defaulting to \`undefined\`.`
    );
    return;
  }
}
function Fn(a, o) {
  const e = H(a, "modelValue", o, {
    defaultValue: Hn(a),
    passive: true
  });
  watch(
    () => [a.type, a.modelValue],
    () => {
      const l = Kn(a.type, e.value);
      e.value !== l && (e.value = l);
    },
    { immediate: true }
  );
  function t(l) {
    if (a.type === "single")
      e.value = l === e.value ? void 0 : l;
    else {
      const n = e.value || [];
      if (n.includes(l)) {
        const i = n.findIndex((r) => r === l);
        n.splice(i, 1);
      } else
        n.push(l);
      e.value = n;
    }
  }
  return {
    modelValue: e,
    changeModelValue: t
  };
}
var dt = Symbol();
var ar = defineComponent({
  __name: "AccordionRoot",
  props: {
    asChild: { type: Boolean, default: false },
    type: {},
    modelValue: {},
    defaultValue: {},
    collapsible: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    dir: { default: "ltr" },
    orientation: { default: "vertical" }
  },
  emits: ["update:modelValue"],
  setup(a, { emit: o }) {
    const e = a, { modelValue: t, changeModelValue: l } = Fn(e, o), { primitiveElement: n, currentElement: i } = B();
    return provide(dt, {
      disabled: e.disabled,
      direction: e.dir,
      orientation: e.orientation,
      parentElement: i,
      isSingle: computed(() => e.type === "single"),
      collapsible: e.collapsible,
      modelValue: t,
      changeModelValue: l
    }), (r, s) => (openBlock(), createBlock(unref(R), {
      ref_key: "primitiveElement",
      ref: n,
      "as-child": e.asChild
    }, {
      default: withCtx(() => [
        renderSlot(r.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child"]));
  }
});
var xt = Symbol();
var nr = defineComponent({
  __name: "AccordionItem",
  props: {
    disabled: { type: Boolean },
    value: {},
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(dt), t = computed(
      () => e != null && e.isSingle.value ? o.value === e.modelValue.value : Array.isArray(e == null ? void 0 : e.modelValue.value) && !!(e != null && e.modelValue.value.includes(o.value))
    ), l = computed(() => (e == null ? void 0 : e.disabled) || o.disabled || !!(e != null && e.isSingle.value) && t.value && !(e != null && e.collapsible)), n = computed(() => l.value ? "" : void 0), i = computed(
      () => t.value ? "open" : "closed"
      /* Closed */
    );
    watch(i, () => {
      console.log("run");
    });
    const { primitiveElement: r, currentElement: s } = B();
    provide(xt, {
      open: t,
      dataState: i,
      disabled: l,
      dataDisabled: n,
      triggerId: Q(),
      primitiveElement: r,
      currentElement: s,
      value: computed(() => o.value)
    });
    function d(c) {
      te(
        c,
        s.value,
        e == null ? void 0 : e.parentElement.value,
        {
          arrowKeyOptions: e == null ? void 0 : e.orientation,
          dir: e == null ? void 0 : e.direction,
          focus: true
        }
      );
    }
    return (c, p) => {
      var f;
      return openBlock(), createBlock(unref(Rn), {
        "data-orientation": (f = unref(e)) == null ? void 0 : f.orientation,
        "data-disabled": n.value,
        "data-state": i.value,
        disabled: l.value,
        open: t.value,
        onKeydown: withKeys(d, ["up", "down", "left", "right", "home", "end"]),
        "as-child": o.asChild
      }, {
        default: withCtx(() => [
          renderSlot(c.$slots, "default", { open: t.value })
        ]),
        _: 3
      }, 8, ["data-orientation", "data-disabled", "data-state", "disabled", "open", "onKeydown", "as-child"]);
    };
  }
});
var lr = defineComponent({
  __name: "AccordionContent",
  props: {
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(dt), t = inject(xt);
    return (l, n) => {
      var i, r, s, d, c, p, f;
      return openBlock(), createBlock(unref(Nn), {
        role: "region",
        id: (i = unref(t)) == null ? void 0 : i.triggerId,
        open: (r = unref(t)) == null ? void 0 : r.open.value,
        hidden: !((s = unref(t)) != null && s.open.value),
        "as-child": o.asChild,
        "aria-labelledby": (d = unref(t)) == null ? void 0 : d.triggerId,
        "data-state": (c = unref(t)) == null ? void 0 : c.dataState.value,
        "data-disabled": (p = unref(t)) == null ? void 0 : p.dataDisabled.value,
        "data-orientation": (f = unref(e)) == null ? void 0 : f.orientation,
        style: normalizeStyle(`
      --radix-accordion-content-width: var(--radix-collapsible-content-width);
      --radix-accordion-content-height: var(--radix-collapsible-content-height);
    `)
      }, {
        default: withCtx(() => [
          renderSlot(l.$slots, "default")
        ]),
        _: 3
      }, 8, ["id", "open", "hidden", "as-child", "aria-labelledby", "data-state", "data-disabled", "data-orientation", "style"]);
    };
  }
});
var rr = defineComponent({
  __name: "AccordionHeader",
  props: {
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(dt), t = inject(xt);
    return (l, n) => {
      var i, r, s;
      return openBlock(), createBlock(unref(On), {
        "as-child": o.asChild,
        "data-orientation": (i = unref(e)) == null ? void 0 : i.orientation,
        "data-state": (r = unref(t)) == null ? void 0 : r.dataState.value,
        "data-disabled": (s = unref(t)) == null ? void 0 : s.dataDisabled.value
      }, {
        default: withCtx(() => [
          renderSlot(l.$slots, "default")
        ]),
        _: 3
      }, 8, ["as-child", "data-orientation", "data-state", "data-disabled"]);
    };
  }
});
var ir = defineComponent({
  __name: "AccordionTrigger",
  props: {
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(dt), t = inject(xt);
    function l() {
      t != null && t.disabled.value || t && (e == null || e.changeModelValue(t.value.value));
    }
    return (n, i) => {
      var r, s, d, c, p, f, m, v, y, h2;
      return openBlock(), createBlock(unref(In), {
        ref: (r = unref(t)) == null ? void 0 : r.primitiveElement,
        "data-radix-vue-collection-item": "",
        "as-child": o.asChild,
        "aria-controls": (s = unref(t)) == null ? void 0 : s.triggerId,
        "aria-disabled": ((d = unref(t)) == null ? void 0 : d.disabled.value) || void 0,
        "aria-expanded": ((c = unref(t)) == null ? void 0 : c.open.value) || false,
        "data-disabled": (p = unref(t)) == null ? void 0 : p.dataDisabled.value,
        "data-orientation": (f = unref(e)) == null ? void 0 : f.orientation,
        "data-state": (m = unref(t)) == null ? void 0 : m.dataState.value,
        disabled: (y = (v = unref(t)) == null ? void 0 : v.disabled) == null ? void 0 : y.value,
        onClick: l,
        id: (h2 = unref(t)) == null ? void 0 : h2.triggerId
      }, {
        default: withCtx(() => [
          renderSlot(n.$slots, "default")
        ]),
        _: 3
      }, 8, ["as-child", "aria-controls", "aria-disabled", "aria-expanded", "data-disabled", "data-orientation", "data-state", "disabled", "id"]);
    };
  }
});
var zn = ["id", "checked", "name", "disabled", "required", "data-state"];
var ta = Symbol();
var sr = defineComponent({
  __name: "CheckboxRoot",
  props: {
    defaultChecked: { type: Boolean },
    checked: { type: Boolean },
    onCheckedChange: {},
    modelValue: { type: Boolean, default: false },
    disabled: { type: Boolean },
    required: { type: Boolean },
    name: {},
    value: { default: "on" },
    id: {},
    asChild: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(a, { emit: o }) {
    const e = a;
    provide(ta, {
      required: e.required,
      disabled: e.disabled,
      modelValue: toRef(() => e.modelValue)
    });
    function t() {
      return o("update:modelValue", !e.modelValue);
    }
    let l;
    return (n, i) => (openBlock(), createBlock(unref(R), {
      "as-child": e.asChild,
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
          onChange: t,
          checked: e.modelValue,
          name: e.name,
          "aria-hidden": "true",
          disabled: e.disabled,
          required: e.required,
          "data-state": unref(l),
          style: { opacity: "0", position: "absolute", inset: "0" }
        }), null, 16, zn),
        renderSlot(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "value", "aria-checked", "data-state", "data-disabled"]));
  }
});
var ur = defineComponent({
  __name: "CheckboxIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(ta);
    return (t, l) => {
      var n;
      return (n = unref(e)) != null && n.modelValue.value ? (openBlock(), createBlock(unref(ne), {
        key: 0,
        style: { "pointer-events": "none" },
        "as-child": o.asChild,
        "data-disabled": unref(e).disabled ? "" : void 0,
        "data-state": unref(e).modelValue.value ? "checked" : "unchecked"
      }, {
        default: withCtx(() => [
          renderSlot(t.$slots, "default")
        ]),
        _: 3
      }, 8, ["as-child", "data-disabled", "data-state"])) : createCommentVNode("", true);
    };
  }
});
var Wn = ["id", "name", "disabled", "required", "data-state", "data-disabled"];
var oa = Symbol();
var dr = defineComponent({
  __name: "SwitchRoot",
  props: {
    defaultChecked: { type: Boolean },
    checked: { type: Boolean },
    disabled: { type: Boolean, default: false },
    required: { type: Boolean },
    name: {},
    id: {},
    defaultOpen: { type: Boolean, default: false },
    open: { type: Boolean, default: void 0 },
    asChild: { type: Boolean, default: false }
  },
  emits: ["update:open"],
  setup(a, { emit: o }) {
    const e = a, t = H(e, "open", o, {
      defaultValue: e.defaultOpen,
      passive: true
      // set passive to true so that if no props.modelValue was passed, it will still update
    }), l = () => {
      t.value = !t.value;
    };
    provide(oa, {
      open: t,
      toggleOpen: l,
      disabled: e.disabled
    });
    function n(i) {
      i.key === "Enter" && l();
    }
    return (i, r) => (openBlock(), createBlock(unref(R), {
      value: unref(t),
      role: "switch",
      "aria-checked": unref(t),
      "data-state": unref(t) ? "checked" : "unchecked",
      "data-disabled": e.disabled ? "" : void 0,
      "as-child": e.asChild,
      style: { position: "relative" }
    }, {
      default: withCtx(() => [
        renderSlot(i.$slots, "default"),
        createBaseVNode("input", mergeProps({
          type: "checkbox",
          id: e.id
        }, unref(t), {
          name: e.name,
          onClick: l,
          onKeydown: n,
          "aria-hidden": "true",
          disabled: e.disabled,
          required: e.required,
          "data-state": unref(t) ? "checked" : "unchecked",
          "data-disabled": e.disabled ? "" : void 0,
          style: { opacity: "0", position: "absolute", inset: "0" }
        }), null, 16, Wn)
      ]),
      _: 3
    }, 8, ["value", "aria-checked", "data-state", "data-disabled", "as-child"]));
  }
});
var cr = defineComponent({
  __name: "SwitchThumb",
  props: {
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = inject(oa);
    return (e, t) => {
      var l, n, i;
      return openBlock(), createBlock(unref(ne), {
        "data-state": (n = (l = unref(o)) == null ? void 0 : l.open) != null && n.value ? "checked" : "unchecked",
        "data-disabled": (i = unref(o)) != null && i.disabled ? "" : void 0,
        "as-child": e.asChild
      }, {
        default: withCtx(() => [
          renderSlot(e.$slots, "default")
        ]),
        _: 3
      }, 8, ["data-state", "data-disabled", "as-child"]);
    };
  }
});
var Xe = defineComponent({
  __name: "BaseSeparator",
  props: {
    orientation: { default: "horizontal" },
    decorative: { type: Boolean },
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a;
    return (e, t) => (openBlock(), createBlock(unref(R), mergeProps(o, {
      role: `${e.decorative ? "none" : "separator"}`
    }), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16, ["role"]));
  }
});
var pr = defineComponent({
  __name: "Separator",
  props: {
    orientation: { default: "horizontal" },
    decorative: { type: Boolean },
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a;
    return (e, t) => (openBlock(), createBlock(Xe, mergeProps(o, {
      "data-orientation": o.orientation
    }), null, 16, ["data-orientation"]));
  }
});
var fr = defineComponent({
  __name: "Label",
  props: {
    for: {},
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a;
    return (e, t) => (openBlock(), createBlock(unref(ut), normalizeProps(guardReactiveProps(o)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var mr = defineComponent({
  __name: "ToggleRoot",
  props: {
    defaultValue: { type: Boolean },
    pressed: { type: Boolean, default: void 0 },
    disabled: { type: Boolean, default: false },
    asChild: { type: Boolean }
  },
  emits: ["update:pressed"],
  setup(a, { emit: o }) {
    const e = a, t = H(e, "pressed", o, {
      defaultValue: e.defaultValue,
      passive: true
    }), l = () => {
      t.value = !t.value;
    }, n = computed(() => t.value ? "on" : "off"), i = (r) => {
      r.key === "Enter" && l();
    };
    return (r, s) => (openBlock(), createBlock(unref(G), mergeProps({
      "as-child": e.asChild,
      value: unref(t)
    }, unref(t), {
      role: "checkbox",
      "aria-checked": unref(t),
      "data-state": n.value,
      "data-disabled": e.disabled,
      disabled: e.disabled,
      onClick: l,
      onKeydown: i,
      style: { position: "relative" }
    }), {
      default: withCtx(() => [
        renderSlot(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["as-child", "value", "aria-checked", "data-state", "data-disabled", "disabled"]));
  }
});
var aa = Symbol();
var vr = defineComponent({
  __name: "ToggleGroupRoot",
  props: {
    type: { default: "single" },
    value: {},
    defaultValue: {},
    disabled: { type: Boolean, default: false },
    rovingFocus: { type: Boolean, default: true },
    orientation: { default: "horizontal" },
    dir: { default: "ltr" },
    loop: { type: Boolean, default: false },
    modelValue: {},
    asChild: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(a, { emit: o }) {
    const e = a, { primitiveElement: t, currentElement: l } = B(), n = ref(), i = ref(), r = Vt(), s = ref([]), d = H(e, "modelValue", o, {
      defaultValue: e.defaultValue,
      passive: true
    });
    provide(aa, {
      type: e.type,
      modelValue: d,
      changeModelValue: c,
      parentElement: l,
      activeValue: n,
      currentFocusedElement: i,
      dir: e.dir,
      orientation: e.orientation,
      loop: e.loop,
      itemsArray: s,
      rovingFocus: e.rovingFocus,
      rootDisabled: e.disabled
    });
    function c(p) {
      if (e.type === "single")
        d.value = p;
      else {
        let f = e.modelValue;
        if (f.includes(p)) {
          let m = f.findIndex((v) => v === p);
          f.splice(m, 1);
        } else
          f.push(p);
        d.value = f;
      }
    }
    return watch(
      r,
      () => {
        if (r.value === l.value && !e.disabled) {
          if (!s.value.length)
            return;
          if (i.value)
            i.value.focus();
          else {
            let p = s.value.filter(
              (f) => !f.hasAttribute("disabled") && !f.hasAttribute("data-disabled")
            );
            p[0].focus(), i.value = p[0];
          }
        }
      },
      { immediate: true }
    ), (p, f) => (openBlock(), createBlock(unref(R), {
      "as-child": e.asChild,
      ref_key: "primitiveElement",
      ref: t,
      role: "group",
      dir: e.dir,
      tabindex: "0",
      "aria-label": "Text alignment",
      "data-orientation": e.orientation
    }, {
      default: withCtx(() => [
        renderSlot(p.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "dir", "data-orientation"]));
  }
});
var hr = defineComponent({
  __name: "ToggleGroupItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(
      aa
    ), { primitiveElement: t, currentElement: l } = B();
    onMounted(() => {
      var p;
      (p = e == null ? void 0 : e.itemsArray.value) == null || p.push(l.value);
    });
    const n = computed(() => {
      var p, f, m;
      return (e == null ? void 0 : e.type) === "multiple" ? (f = (p = e == null ? void 0 : e.modelValue) == null ? void 0 : p.value) != null && f.includes(o.value) ? "on" : "off" : ((m = e == null ? void 0 : e.modelValue) == null ? void 0 : m.value) === o.value ? "on" : "off";
    }), i = computed(() => {
      var p, f, m;
      return (e == null ? void 0 : e.type) === "multiple" ? (f = (p = e == null ? void 0 : e.modelValue) == null ? void 0 : p.value) == null ? void 0 : f.includes(o.value) : ((m = e == null ? void 0 : e.modelValue) == null ? void 0 : m.value) === o.value;
    });
    function r(p) {
      if (!(e != null && e.rovingFocus) || e != null && e.rootDisabled)
        return;
      (p.key === "ArrowLeft" || p.key === "ArrowRight" || p.key === "ArrowUp" || p.key === "ArrowDown") && p.preventDefault();
      const f = te(
        p,
        l.value,
        e == null ? void 0 : e.parentElement.value,
        { loop: e == null ? void 0 : e.loop }
      );
      f && (f.focus(), e.currentFocusedElement.value = f);
    }
    const s = computed(() => {
      var p, f, m;
      return (p = e == null ? void 0 : e.currentFocusedElement) != null && p.value ? ((m = e == null ? void 0 : e.currentFocusedElement) == null ? void 0 : m.value) === l.value ? "0" : "-1" : ((f = e == null ? void 0 : e.modelValue) == null ? void 0 : f.value) === o.value ? "0" : "-1";
    }), d = computed(() => (e == null ? void 0 : e.type) === "multiple" ? "checkbox" : "radio");
    function c() {
      e != null && e.rootDisabled || (e == null || e.changeModelValue(o.value), e.currentFocusedElement.value = l.value);
    }
    return (p, f) => {
      var m, v;
      return openBlock(), createBlock(unref(G), {
        "as-child": o.asChild,
        ref_key: "primitiveElement",
        ref: t,
        type: "button",
        role: d.value,
        "data-state": n.value,
        disabled: o.disabled || ((m = unref(e)) == null ? void 0 : m.rootDisabled),
        "data-disabled": o.disabled ? "" : void 0,
        "aria-checked": i.value,
        "data-orientation": (v = unref(e)) == null ? void 0 : v.orientation,
        onClick: c,
        onKeydown: r,
        "data-radix-vue-collection-item": "",
        tabindex: s.value
      }, {
        default: withCtx(() => [
          renderSlot(p.$slots, "default")
        ]),
        _: 3
      }, 8, ["as-child", "role", "data-state", "disabled", "data-disabled", "aria-checked", "data-orientation", "tabindex"]);
    };
  }
});
var yr = defineComponent({
  __name: "AspectRatio",
  props: {
    ratio: { default: 1 },
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = computed(() => 1 / o.ratio * 100);
    return (t, l) => (openBlock(), createElementBlock("div", {
      style: normalizeStyle(`position: relative; width: 100%; padding-bottom: ${e.value}%`)
    }, [
      createVNode(unref(R), {
        "as-child": t.asChild,
        style: { position: "absolute", inset: "0px" }
      }, {
        default: withCtx(() => [
          renderSlot(t.$slots, "default")
        ]),
        _: 3
      }, 8, ["as-child"])
    ], 4));
  }
});
var Dt = Symbol();
var gr = defineComponent({
  __name: "TabsRoot",
  props: {
    defaultValue: {},
    orientation: { default: "horizontal" },
    dir: { default: "ltr" },
    activationMode: { default: "automatic" },
    modelValue: {},
    onValueChange: {},
    asChild: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(a, { emit: o }) {
    const e = a, t = ref(), l = ref(), n = H(e, "modelValue", o, {
      defaultValue: e.defaultValue,
      passive: true
    });
    return provide(Dt, {
      modelValue: n,
      changeModelValue: (i) => {
        n.value = i, i && e.onValueChange && e.onValueChange(i);
      },
      currentFocusedElement: l,
      parentElement: t,
      orientation: e.orientation,
      dir: e.dir,
      loop: true,
      activationMode: e.activationMode
    }), (i, r) => (openBlock(), createBlock(unref(R), {
      dir: e.dir,
      "data-orientation": e.orientation,
      "as-child": e.asChild
    }, {
      default: withCtx(() => [
        renderSlot(i.$slots, "default")
      ]),
      _: 3
    }, 8, ["dir", "data-orientation", "as-child"]));
  }
});
var _r = defineComponent({
  __name: "TabsList",
  props: {
    loop: { type: Boolean, default: true },
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(Dt), { primitiveElement: t, currentElement: l } = B();
    return onMounted(() => {
      e.parentElement.value = l.value, e.loop = o.loop;
    }), (n, i) => {
      var r, s;
      return openBlock(), createBlock(unref(R), {
        role: "tablist",
        ref_key: "primitiveElement",
        ref: t,
        "as-child": o.asChild,
        "aria-orientation": (r = unref(e)) == null ? void 0 : r.orientation,
        tabindex: "0",
        "data-orientation": (s = unref(e)) == null ? void 0 : s.orientation,
        style: { outline: "none" }
      }, {
        default: withCtx(() => [
          renderSlot(n.$slots, "default")
        ]),
        _: 3
      }, 8, ["as-child", "aria-orientation", "data-orientation"]);
    };
  }
});
var br = defineComponent({
  __name: "TabsContent",
  props: {
    value: {},
    forceMount: { type: Boolean },
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(Dt), t = computed(() => {
      var l;
      return ((l = e == null ? void 0 : e.modelValue) == null ? void 0 : l.value) === o.value ? "active" : "inactive";
    });
    return (l, n) => {
      var i, r, s;
      return ((r = (i = unref(e)) == null ? void 0 : i.modelValue) == null ? void 0 : r.value) === o.value ? (openBlock(), createBlock(unref(R), {
        key: 0,
        "as-child": o.asChild,
        role: "tabpanel",
        "data-state": t.value,
        "data-orientation": (s = unref(e)) == null ? void 0 : s.orientation,
        tabindex: "0"
      }, {
        default: withCtx(() => [
          renderSlot(l.$slots, "default")
        ]),
        _: 3
      }, 8, ["as-child", "data-state", "data-orientation"])) : createCommentVNode("", true);
    };
  }
});
var wr = defineComponent({
  __name: "TabsTrigger",
  props: {
    value: {},
    disabled: { type: Boolean, default: false },
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(Dt), { primitiveElement: t, currentElement: l } = B();
    function n(s) {
      e == null || e.changeModelValue(s);
    }
    function i(s) {
      const d = te(
        s,
        l.value,
        e == null ? void 0 : e.parentElement.value,
        {
          arrowKeyOptions: e == null ? void 0 : e.orientation,
          loop: e == null ? void 0 : e.loop,
          focus: true
        }
      );
      d && (e.currentFocusedElement.value = d, (e == null ? void 0 : e.activationMode) === "automatic" && n(d == null ? void 0 : d.getAttribute("data-radix-vue-tab-value")));
    }
    const r = computed(() => {
      var s, d, c;
      return (s = e == null ? void 0 : e.currentFocusedElement) != null && s.value ? ((c = e == null ? void 0 : e.currentFocusedElement) == null ? void 0 : c.value) === l.value ? "0" : "-1" : ((d = e == null ? void 0 : e.modelValue) == null ? void 0 : d.value) === o.value ? "0" : "-1";
    });
    return (s, d) => {
      var c, p, f, m, v;
      return openBlock(), createBlock(unref(G), {
        ref_key: "primitiveElement",
        ref: t,
        type: "button",
        "as-child": o.asChild,
        role: "tab",
        "aria-selected": ((p = (c = unref(e)) == null ? void 0 : c.modelValue) == null ? void 0 : p.value) === o.value ? "true" : "false",
        "data-state": ((m = (f = unref(e)) == null ? void 0 : f.modelValue) == null ? void 0 : m.value) === o.value ? "active" : "inactive",
        disabled: o.disabled,
        "data-disabled": o.disabled ? "" : void 0,
        tabindex: r.value,
        "data-orientation": (v = unref(e)) == null ? void 0 : v.orientation,
        "data-radix-vue-collection-item": "",
        "data-radix-vue-tab-value": o.value,
        onClick: d[0] || (d[0] = (y) => n(o.value)),
        onKeydown: withKeys(i, ["up", "down", "left", "right", "home", "end"])
      }, {
        default: withCtx(() => [
          renderSlot(s.$slots, "default")
        ]),
        _: 3
      }, 8, ["as-child", "aria-selected", "data-state", "disabled", "data-disabled", "tabindex", "data-orientation", "data-radix-vue-tab-value", "onKeydown"]);
    };
  }
});
var Yn = ["value", "aria-valuenow", "name"];
var oo = Symbol();
var Er = defineComponent({
  __name: "SliderRoot",
  props: {
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
    minStepsBetweenThumbs: { default: 0 },
    asChild: { type: Boolean, default: false }
  },
  emits: ["update:modelValue"],
  setup(a, { emit: o }) {
    const e = a, { primitiveElement: t, currentElement: l } = B(), n = ref(), i = computed(() => e.modelValue ? e.modelValue < 50 ? (e.modelValue - 50) / 50 * 10 : (e.modelValue - 50) / 50 * -10 : 0);
    provide(oo, {
      modelValue: toRef(() => e.modelValue),
      changeModelValue: (m) => {
        o("update:modelValue", m);
      },
      rootSliderElement: l,
      orientation: e.orientation,
      dir: e.dir,
      thumbOffset: i,
      min: e.min,
      max: e.max,
      step: e.step,
      thumbElement: n,
      disabled: e.disabled
    });
    function r(m) {
      o("update:modelValue", f(m, e.step));
    }
    let s;
    function d(m) {
      n.value && n.value.focus(), m.preventDefault(), l.value && (s = l.value.getBoundingClientRect(), m.clientX - 10 - i.value > s.left && m.clientX - 10 - i.value < s.left + s.width && r(
        Math.round(
          (m.clientX - 10 - i.value - s.left) / s.width * 100
        )
      ), document.addEventListener("pointermove", c), document.addEventListener("pointerup", p));
    }
    const c = (m) => {
      n.value && n.value.focus(), m.clientX - 10 - i.value > s.left && m.clientX - 10 - i.value < s.left + s.width && r(
        (m.clientX - 10 - i.value - s.left) / s.width * 100
      ), m.clientX - 10 - i.value <= s.left && r(e.min), m.clientX - 10 - i.value >= s.left + s.width && r(e.max);
    }, p = (m) => {
      document.removeEventListener("pointermove", c), document.removeEventListener("pointerup", p);
    };
    function f(m, v) {
      const y = Math.floor(m / v);
      return m % v <= v / 2 ? y * v : (y + 1) * v;
    }
    return (m, v) => (openBlock(), createBlock(unref(ne), {
      ref_key: "primitiveElement",
      ref: t,
      "as-child": e.asChild,
      onPointerdown: d
    }, {
      default: withCtx(() => [
        renderSlot(m.$slots, "default"),
        createBaseVNode("input", {
          style: { display: "none" },
          value: e.modelValue,
          "aria-valuenow": e.modelValue,
          name: e.name
        }, null, 8, Yn)
      ]),
      _: 3
    }, 8, ["as-child"]));
  }
});
var Cr = defineComponent({
  __name: "SliderThumb",
  props: {
    asChild: { type: Boolean, default: false }
  },
  setup(a) {
    const o = a, e = inject(oo), { primitiveElement: t, currentElement: l } = B();
    onMounted(() => {
      e != null && e.thumbElement && (e.thumbElement.value = l.value);
    });
    let n = 2;
    function i(r) {
      var c;
      if (!e)
        return;
      (r.keyCode === 32 || r.key === "Enter") && r.preventDefault();
      const s = Number(e == null ? void 0 : e.step), d = Number((c = e.modelValue) == null ? void 0 : c.value);
      (r.key === "ArrowUp" || r.key === "ArrowRight") && (r.shiftKey ? (r.preventDefault(), d + n >= (e == null ? void 0 : e.max) ? e == null || e.changeModelValue(e == null ? void 0 : e.max) : d + n <= (e == null ? void 0 : e.min) ? e == null || e.changeModelValue(e == null ? void 0 : e.min) : e == null || e.changeModelValue(d + n)) : (r.preventDefault(), d + s >= (e == null ? void 0 : e.max) ? e == null || e.changeModelValue(e == null ? void 0 : e.max) : d + s <= (e == null ? void 0 : e.min) ? e == null || e.changeModelValue(e == null ? void 0 : e.min) : e == null || e.changeModelValue(d + s))), (r.key === "ArrowDown" || r.key === "ArrowLeft") && (r.shiftKey ? (r.preventDefault(), d - n >= (e == null ? void 0 : e.max) ? e == null || e.changeModelValue(e == null ? void 0 : e.max) : d - n <= (e == null ? void 0 : e.min) ? e == null || e.changeModelValue(e == null ? void 0 : e.min) : e == null || e.changeModelValue(d - n)) : (r.preventDefault(), d - s >= (e == null ? void 0 : e.max) ? e == null || e.changeModelValue(e == null ? void 0 : e.max) : d - s <= (e == null ? void 0 : e.min) ? e == null || e.changeModelValue(e == null ? void 0 : e.min) : e == null || e.changeModelValue(d - s)));
    }
    return (r, s) => {
      var d, c, p, f, m, v, y, h2, E;
      return openBlock(), createElementBlock("span", {
        style: normalizeStyle(`transform: translateX(-50%); position: absolute; left: calc(${(c = (d = unref(e)) == null ? void 0 : d.modelValue) == null ? void 0 : c.value}%)`)
      }, [
        createVNode(unref(ne), mergeProps(r.$attrs, {
          ref_key: "primitiveElement",
          ref: t,
          role: "slider",
          tabindex: "0",
          "data-disabled": (p = unref(e)) == null ? void 0 : p.disabled,
          "data-orientation": (f = unref(e)) == null ? void 0 : f.orientation,
          "aria-valuenow": (v = (m = unref(e)) == null ? void 0 : m.modelValue) == null ? void 0 : v.value,
          "aria-valuemin": (y = unref(e)) == null ? void 0 : y.min,
          "aria-valuemax": (h2 = unref(e)) == null ? void 0 : h2.max,
          "aria-orientation": (E = unref(e)) == null ? void 0 : E.orientation,
          "as-child": o.asChild,
          onKeydown: i
        }), null, 16, ["data-disabled", "data-orientation", "aria-valuenow", "aria-valuemin", "aria-valuemax", "aria-orientation", "as-child"])
      ], 4);
    };
  }
});
var $r = defineComponent({
  __name: "SliderTrack",
  props: {
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a;
    return (e, t) => (openBlock(), createBlock(unref(ne), {
      "as-child": o.asChild
    }, {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child"]));
  }
});
var Sr = defineComponent({
  __name: "SliderRange",
  props: {
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(oo);
    return (t, l) => {
      var n, i, r, s, d;
      return openBlock(), createBlock(unref(ne), {
        "data-disabled": (n = unref(e)) == null ? void 0 : n.disabled,
        "data-orientation": (i = unref(e)) == null ? void 0 : i.orientation,
        "as-child": o.asChild,
        style: normalizeStyle(`left: 0%; right: ${(((r = unref(e)) == null ? void 0 : r.max) ?? 100) - (((d = (s = unref(e)) == null ? void 0 : s.modelValue) == null ? void 0 : d.value) ?? 0)}%`)
      }, null, 8, ["data-disabled", "data-orientation", "as-child", "style"]);
    };
  }
});
var na = "RadioGroup";
var la = Symbol();
var Ar = defineComponent({
  __name: "RadioGroupRoot",
  props: {
    modelValue: {},
    onValueChange: {},
    defaultValue: {},
    value: {},
    disabled: { type: Boolean, default: false },
    name: {},
    required: { type: Boolean, default: false },
    orientation: { default: void 0 },
    dir: { default: "ltr" },
    loop: { type: Boolean, default: true },
    asChild: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(a, { emit: o }) {
    const e = a, { primitiveElement: t, currentElement: l } = B(), n = H(e, "modelValue", o, {
      defaultValue: e.defaultValue,
      passive: true
    });
    return provide(na, {
      modelValue: n,
      changeModelValue: (i) => {
        n.value = i, i && e.onValueChange && e.onValueChange(i);
      },
      parentElement: l,
      currentFocusedElement: ref(),
      disabled: ref(e.disabled),
      loop: ref(e.loop),
      orientation: ref(e.orientation),
      name: e.name,
      required: ref(e.required)
    }), (i, r) => (openBlock(), createBlock(unref(R), {
      ref_key: "primitiveElement",
      ref: t,
      role: "radiogroup",
      "data-disabled": e.disabled ? "" : void 0,
      "as-child": e.asChild,
      required: e.required,
      "aria-required": e.required,
      dir: e.dir,
      name: e.name
    }, {
      default: withCtx(() => [
        renderSlot(i.$slots, "default")
      ]),
      _: 3
    }, 8, ["data-disabled", "as-child", "required", "aria-required", "dir", "name"]));
  }
});
var Un = ["value", "required", "disabled", "checked"];
var kr = defineComponent({
  __name: "RadioGroupItem",
  props: {
    value: {},
    disabled: { type: Boolean, default: false },
    required: { type: Boolean },
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(na), t = computed(() => (e == null ? void 0 : e.disabled.value) || o.disabled), l = computed(() => (e == null ? void 0 : e.required.value) || o.required), n = computed(() => {
      var p;
      return ((p = e == null ? void 0 : e.modelValue) == null ? void 0 : p.value) === o.value;
    });
    provide(la, readonly({ disabled: t, checked: n }));
    function i(p) {
      t.value || e == null || e.changeModelValue(p);
    }
    const { primitiveElement: r, currentElement: s } = B();
    function d(p) {
      if (t.value)
        return;
      const f = te(
        p,
        s.value,
        e == null ? void 0 : e.parentElement.value,
        {
          arrowKeyOptions: e == null ? void 0 : e.orientation.value,
          loop: e == null ? void 0 : e.loop.value
        }
      );
      f && (i(f == null ? void 0 : f.getAttribute("value")), e.currentFocusedElement.value = f, f.focus());
    }
    const c = computed(() => {
      var p, f;
      return (p = e == null ? void 0 : e.currentFocusedElement) != null && p.value ? ((f = e == null ? void 0 : e.currentFocusedElement) == null ? void 0 : f.value) === s.value ? "0" : "-1" : n.value ? "0" : "-1";
    });
    return (p, f) => {
      var m;
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(unref(G), mergeProps({
          type: "button",
          ref_key: "primitiveElement",
          ref: r,
          role: "radio",
          "data-radix-vue-collection-item": ""
        }, p.$attrs, {
          "as-child": o.asChild,
          disabled: t.value ? true : void 0,
          "data-state": n.value ? "checked" : "unchecked",
          "data-disabled": t.value ? "" : void 0,
          tabindex: c.value,
          value: o.value,
          name: (m = unref(e)) == null ? void 0 : m.name,
          onClick: f[0] || (f[0] = (v) => i(o.value)),
          onKeydown: d
        }), {
          default: withCtx(() => [
            renderSlot(p.$slots, "default")
          ]),
          _: 3
        }, 16, ["as-child", "disabled", "data-state", "data-disabled", "tabindex", "value", "name"]),
        createBaseVNode("input", {
          type: "radio",
          "aria-hidden": "true",
          tabindex: "-1",
          value: o.value,
          required: l.value,
          disabled: t.value,
          style: { transform: "translateX(-100%)", position: "absolute", "pointer-events": "none", opacity: "0", margin: "0px", width: "25px", height: "25px" },
          checked: n.value
        }, null, 8, Un)
      ], 64);
    };
  }
});
var Pr = defineComponent({
  __name: "RadioGroupIndicator",
  props: {
    asChild: { type: Boolean, default: false }
  },
  setup(a) {
    const o = inject(la);
    return (e, t) => {
      var l, n, i;
      return (l = unref(o)) != null && l.checked ? (openBlock(), createBlock(unref(ne), {
        key: 0,
        "data-state": (n = unref(o)) != null && n.checked ? "checked" : "unchecked",
        "data-disabled": (i = unref(o)) != null && i.disabled ? "" : void 0,
        "as-child": e.asChild
      }, {
        default: withCtx(() => [
          renderSlot(e.$slots, "default")
        ]),
        _: 3
      }, 8, ["data-state", "data-disabled", "as-child"])) : createCommentVNode("", true);
    };
  }
});
var ra = Symbol();
var ao = (a) => typeof a == "number";
function qn(a, o) {
  return a === null || ao(a) && !isNaN(a) && a <= o && a >= 0 ? a : (console.error(`Invalid prop \`value\` of value \`${a}\` supplied to \`ProgressRoot\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${Ve} if no \`max\` prop is set)
  - \`null\` if the progress is indeterminate.

Defaulting to \`null\`.`), null);
}
var Ve = 100;
function Xn(a) {
  return ao(a) && !isNaN(a) && a > 0 ? a : (console.error(
    `Invalid prop \`max\` of value \`${a}\` supplied to \`ProgressRoot\`. Only numbers greater than 0 are valid max values. Defaulting to \`${Ve}\`.`
  ), Ve);
}
var Or = defineComponent({
  __name: "ProgressRoot",
  props: {
    modelValue: {},
    max: { default: Ve },
    getValueLabel: { type: Function, default: (a, o) => `${Math.round(a / o * Ve)}%` },
    asChild: { type: Boolean }
  },
  emits: ["update:modelValue", "update:max"],
  setup(a, { emit: o }) {
    const e = a, t = H(e, "modelValue", o, {
      passive: true
    }), l = H(e, "max", o, {
      passive: true
    });
    watch(
      () => t.value,
      async (i) => {
        const r = qn(i, e.max);
        r !== i && (await nextTick(), t.value = r);
      },
      { immediate: true }
    ), watch(
      () => e.max,
      (i) => {
        const r = Xn(e.max);
        r !== i && (l.value = r);
      },
      { immediate: true }
    );
    const n = computed(() => t.value ? t.value === l.value ? "complete" : "loading" : "indeterminate");
    return provide(ra, {
      modelValue: t,
      max: l,
      progressState: n
    }), (i, r) => (openBlock(), createBlock(unref(R), {
      asChild: e.asChild,
      "aria-valuemax": unref(l),
      "aria-valuemin": 0,
      "aria-valuenow": ao(unref(t)) ? unref(t) : void 0,
      "aria-valuetext": i.getValueLabel(unref(t), unref(l)),
      role: "progressbar",
      "data-state": n.value,
      "data-value": unref(t) ?? void 0,
      "data-max": unref(l)
    }, {
      default: withCtx(() => [
        renderSlot(i.$slots, "default")
      ]),
      _: 3
    }, 8, ["asChild", "aria-valuemax", "aria-valuenow", "aria-valuetext", "data-state", "data-value", "data-max"]));
  }
});
var Tr = defineComponent({
  __name: "ProgressIndicator",
  props: {
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(ra);
    return (t, l) => {
      var n, i, r, s;
      return openBlock(), createBlock(unref(R), mergeProps(o, {
        "data-state": (n = unref(e)) == null ? void 0 : n.progressState.value,
        "data-value": ((r = (i = unref(e)) == null ? void 0 : i.modelValue) == null ? void 0 : r.value) ?? void 0,
        "data-max": (s = unref(e)) == null ? void 0 : s.max.value
      }), {
        default: withCtx(() => [
          renderSlot(t.$slots, "default")
        ]),
        _: 3
      }, 16, ["data-state", "data-value", "data-max"]);
    };
  }
});
var ct = Symbol();
var Br = defineComponent({
  __name: "DialogRoot",
  props: {
    open: { type: Boolean, default: void 0 },
    defaultOpen: { type: Boolean, default: false },
    modal: { type: Boolean, default: true }
  },
  emits: ["update:open"],
  setup(a, { emit: o }) {
    const e = a, t = H(e, "open", o, {
      defaultValue: e.defaultOpen,
      passive: true
    }), l = Go(document.querySelector("body"), t.value);
    return watchEffect(() => {
      l.value = t.value;
    }), provide(ct, {
      open: t,
      modal: e.modal,
      openModal: () => {
        t.value = true;
      },
      closeModal: () => {
        t.value = false;
      },
      triggerButton: ref()
    }), (n, i) => renderSlot(n.$slots, "default");
  }
});
var xr = defineComponent({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(ct), { primitiveElement: t, currentElement: l } = B();
    function n() {
      console.error(
        "Injected value not found, DialogTrigger possibly not wrapped with DialogRoot. Component may not be working properly."
      );
    }
    return onMounted(() => {
      e ? e.triggerButton.value = l.value : n();
    }), (i, r) => {
      var s, d, c;
      return openBlock(), createBlock(unref(G), mergeProps(o, {
        type: "button",
        ref_key: "primitiveElement",
        ref: t,
        "aria-expanded": ((s = unref(e)) == null ? void 0 : s.open.value) || false,
        "data-state": (d = unref(e)) != null && d.open.value ? "open" : "closed",
        onClick: (c = unref(e)) == null ? void 0 : c.openModal
      }), {
        default: withCtx(() => [
          renderSlot(i.$slots, "default")
        ]),
        _: 3
      }, 16, ["aria-expanded", "data-state", "onClick"]);
    };
  }
});
var pt = defineComponent({
  __name: "BasePortal",
  props: {
    container: { default: "body" }
  },
  setup(a) {
    const o = a;
    return (e, t) => (openBlock(), createBlock(Teleport, {
      to: o.container
    }, [
      renderSlot(e.$slots, "default")
    ], 8, ["to"]));
  }
});
var Gn = createBaseVNode("polygon", { points: "0,0 30,0 15,10" }, null, -1);
var Jn = defineComponent({
  __name: "Arrow",
  props: {
    width: { default: 10 },
    height: { default: 5 }
  },
  setup(a) {
    const o = a, { primitiveElement: e } = B();
    return (t, l) => (openBlock(), createBlock(unref(Dn), mergeProps({
      ref_key: "primitiveElement",
      ref: e
    }, o, {
      width: t.width,
      height: t.height,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none"
    }), {
      default: withCtx(() => [
        renderSlot(t.$slots, "default", {}, () => [
          Gn
        ])
      ]),
      _: 3
    }, 16, ["width", "height"]));
  }
});
var se = defineComponent({
  __name: "BaseMenuItem",
  props: {
    disabled: { type: Boolean },
    rootProvider: {},
    subProvider: {},
    orientation: {},
    role: { default: "menuitem" },
    dataState: {},
    asChild: { type: Boolean }
  },
  emits: [
    "handle-click",
    "horizontal-keydown",
    "mouseover",
    "escape-keydown"
  ],
  setup(a, { emit: o }) {
    const e = a, { getItems: t } = ie(), { primitiveElement: l, currentElement: n } = B();
    function i(p) {
      var m, v, y, h2;
      if (p.key === "Escape")
        return s(), o("escape-keydown", p);
      if (p.keyCode === 32 || p.key === "Enter") {
        p.target.click();
        return;
      }
      if (p.key === "ArrowLeft") {
        const E = (m = e.subProvider) == null ? void 0 : m.triggerElement.value;
        if (E)
          return (v = e.rootProvider) == null || v.changeSelected(E), (y = e.subProvider) == null ? void 0 : y.hideTooltip();
      }
      if (p.key === "ArrowRight" || p.key === "ArrowLeft")
        return o("horizontal-keydown", p);
      const f = te(
        p,
        n.value,
        void 0,
        {
          arrowKeyOptions: "vertical",
          itemsArray: t()
        }
      );
      f && ((h2 = e.rootProvider) == null || h2.changeSelected(f));
    }
    function r() {
      var p;
      e.disabled || (p = e.rootProvider) == null || p.changeSelected(n.value);
    }
    function s() {
      document.querySelector("body").style.pointerEvents = "", setTimeout(() => {
        var p, f;
        (f = (p = e.rootProvider) == null ? void 0 : p.triggerElement.value) == null || f.focus();
      }, 0);
    }
    function d() {
      o("handle-click");
    }
    function c() {
      o("mouseover");
    }
    return (p, f) => {
      var m, v, y;
      return openBlock(), createBlock(unref(R), {
        role: e.role,
        ref_key: "primitiveElement",
        ref: l,
        onKeydown: withModifiers(i, ["prevent"]),
        "data-state": e.dataState,
        "data-radix-vue-collection-item": "",
        onMouseenter: r,
        onMouseover: c,
        onClick: d,
        "data-highlighted": ((m = p.rootProvider) == null ? void 0 : m.selectedElement.value) === unref(n) ? "" : null,
        "aria-disabled": e.disabled ? true : void 0,
        "data-disabled": e.disabled ? "" : void 0,
        "data-orientation": (v = p.rootProvider) == null ? void 0 : v.orientation,
        tabindex: ((y = p.rootProvider) == null ? void 0 : y.selectedElement.value) === unref(n) ? "0" : "-1"
      }, {
        default: withCtx(() => [
          renderSlot(p.$slots, "default")
        ]),
        _: 3
      }, 8, ["role", "onKeydown", "data-state", "data-highlighted", "aria-disabled", "data-disabled", "data-orientation", "tabindex"]);
    };
  }
});
var Dr = defineComponent({
  __name: "DialogPortal",
  props: {
    container: {}
  },
  setup(a) {
    const o = a;
    return (e, t) => (openBlock(), createBlock(unref(pt), normalizeProps(guardReactiveProps(o)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function ia(a) {
  return getCurrentScope() ? (onScopeDispose(a), true) : false;
}
function wt(a) {
  return typeof a == "function" ? a() : unref(a);
}
var sa = typeof window < "u";
var no = () => {
};
var zt = Zn();
function Zn() {
  var a;
  return sa && ((a = window == null ? void 0 : window.navigator) == null ? void 0 : a.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
}
var Po = {
  mounted: "mounted",
  updated: "updated",
  unmounted: "unmounted"
};
function Qn(...a) {
  if (a.length !== 1)
    return toRef(...a);
  const o = a[0];
  return typeof o == "function" ? readonly(customRef(() => ({ get: o, set: no }))) : ref(o);
}
function Je(a) {
  var o;
  const e = wt(a);
  return (o = e == null ? void 0 : e.$el) != null ? o : e;
}
var ua = sa ? window : void 0;
function _t(...a) {
  let o, e, t, l;
  if (typeof a[0] == "string" || Array.isArray(a[0]) ? ([e, t, l] = a, o = ua) : [o, e, t, l] = a, !o)
    return no;
  Array.isArray(e) || (e = [e]), Array.isArray(t) || (t = [t]);
  const n = [], i = () => {
    n.forEach((c) => c()), n.length = 0;
  }, r = (c, p, f, m) => (c.addEventListener(p, f, m), () => c.removeEventListener(p, f, m)), s = watch(
    () => [Je(o), wt(l)],
    ([c, p]) => {
      i(), c && n.push(
        ...e.flatMap((f) => t.map((m) => r(c, f, m, p)))
      );
    },
    { immediate: true, flush: "post" }
  ), d = () => {
    s(), i();
  };
  return ia(d), d;
}
var Oo = false;
function To(a, o, e = {}) {
  const { window: t = ua, ignore: l = [], capture: n = true, detectIframe: i = false } = e;
  if (!t)
    return;
  zt && !Oo && (Oo = true, Array.from(t.document.body.children).forEach((f) => f.addEventListener("click", no)));
  let r = true;
  const s = (f) => l.some((m) => {
    if (typeof m == "string")
      return Array.from(t.document.querySelectorAll(m)).some((v) => v === f.target || f.composedPath().includes(v));
    {
      const v = Je(m);
      return v && (f.target === v || f.composedPath().includes(v));
    }
  }), c = [
    _t(t, "click", (f) => {
      const m = Je(a);
      if (!(!m || m === f.target || f.composedPath().includes(m))) {
        if (f.detail === 0 && (r = !s(f)), !r) {
          r = true;
          return;
        }
        o(f);
      }
    }, { passive: true, capture: n }),
    _t(t, "pointerdown", (f) => {
      const m = Je(a);
      m && (r = !f.composedPath().includes(m) && !s(f));
    }, { passive: true }),
    i && _t(t, "blur", (f) => {
      setTimeout(() => {
        var m;
        const v = Je(a);
        ((m = t.document.activeElement) == null ? void 0 : m.tagName) === "IFRAME" && !(v != null && v.contains(t.document.activeElement)) && o(f);
      }, 0);
    })
  ].filter(Boolean);
  return () => c.forEach((f) => f());
}
var Vn = {
  [Po.mounted](a, o) {
    const e = !o.modifiers.bubble;
    if (typeof o.value == "function")
      a.__onClickOutside_stop = To(a, o.value, { capture: e });
    else {
      const [t, l] = o.value;
      a.__onClickOutside_stop = To(a, t, Object.assign({ capture: e }, l));
    }
  },
  [Po.unmounted](a) {
    a.__onClickOutside_stop();
  }
};
function da(a) {
  const o = window.getComputedStyle(a);
  if (o.overflowX === "scroll" || o.overflowY === "scroll" || o.overflowX === "auto" && a.clientWidth < a.scrollWidth || o.overflowY === "auto" && a.clientHeight < a.scrollHeight)
    return true;
  {
    const e = a.parentNode;
    return !e || e.tagName === "BODY" ? false : da(e);
  }
}
function jn(a) {
  const o = a || window.event, e = o.target;
  return da(e) ? false : o.touches.length > 1 ? true : (o.preventDefault && o.preventDefault(), false);
}
function el(a, o = false) {
  const e = ref(o);
  let t = null, l;
  watch(Qn(a), (r) => {
    if (r) {
      const s = r;
      l = s.style.overflow, e.value && (s.style.overflow = "hidden");
    }
  }, {
    immediate: true
  });
  const n = () => {
    const r = wt(a);
    !r || e.value || (zt && (t = _t(
      r,
      "touchmove",
      (s) => {
        jn(s);
      },
      { passive: false }
    )), r.style.overflow = "hidden", e.value = true);
  }, i = () => {
    const r = wt(a);
    !r || !e.value || (zt && (t == null || t()), r.style.overflow = l, e.value = false);
  };
  return ia(i), computed({
    get() {
      return e.value;
    },
    set(r) {
      r ? n() : i();
    }
  });
}
function tl() {
  let a = false;
  const o = ref(false);
  return (e, t) => {
    if (o.value = t.value, a)
      return;
    a = true;
    const l = el(e, t.value);
    watch(o, (n) => l.value = n);
  };
}
tl();
var Mr = defineComponent({
  __name: "DialogContent",
  props: {
    isOpenAutoFocus: { type: Boolean, default: true },
    isCloseAutoFocus: { type: Boolean, default: void 0 },
    isEscapeKeyDownDefault: { type: Boolean, default: true },
    isPointerDownOutsideDefault: { type: Boolean, default: true },
    isDisableInteractOutside: { type: Boolean, default: void 0 },
    asChild: { type: Boolean }
  },
  emits: ["open", "close", "escapeKeyDown", "pointerDownOutside"],
  setup(a, { emit: o }) {
    const e = a, t = inject(ct), { primitiveElement: l, currentElement: n } = B(), i = () => e.isDisableInteractOutside || t.modal && e.isDisableInteractOutside === void 0, r = () => e.isCloseAutoFocus || t.modal && e.isCloseAutoFocus === void 0;
    watchEffect(() => {
      var m;
      n.value && (t != null && t.open.value ? (e.isOpenAutoFocus && jt(n.value), i() && d(), t != null && t.modal && window.addEventListener("keydown", s), window.addEventListener("keydown", f), o("open")) : (c(), window.removeEventListener("keydown", s), window.removeEventListener("keydown", f), r() && ((m = t == null ? void 0 : t.triggerButton.value) == null || m.focus()), o("close")));
    });
    function s(m) {
      if (m.key === "ArrowDown" || m.key === "ArrowUp") {
        const v = document.activeElement;
        v && ["input", "select", "textarea"].indexOf(v.tagName.toLowerCase()) === -1 && m.preventDefault();
      }
    }
    function d() {
      document.querySelector("body").style.pointerEvents = "none";
    }
    function c() {
      document.querySelector("body").style.pointerEvents = "";
    }
    function p() {
      e.isPointerDownOutsideDefault && (t == null || t.closeModal()), o("pointerDownOutside");
    }
    function f(m) {
      var v;
      m.key === "Escape" && (e.isEscapeKeyDownDefault && (m.preventDefault(), t == null || t.closeModal(), r() && ((v = t == null ? void 0 : t.triggerButton.value) == null || v.focus())), o("escapeKeyDown"));
    }
    return (m, v) => {
      var y, h2;
      return (y = unref(t)) != null && y.open.value ? withDirectives((openBlock(), createBlock(unref(R), {
        key: 0,
        "as-child": e.asChild,
        ref_key: "primitiveElement",
        ref: l,
        "data-state": (h2 = unref(t)) != null && h2.open.value ? "open" : "closed",
        role: "dialog",
        tabindex: "-1",
        style: { "pointer-events": "auto" }
      }, {
        default: withCtx(() => [
          renderSlot(m.$slots, "default")
        ]),
        _: 3
      }, 8, ["as-child", "data-state"])), [
        [unref(Vn), p]
      ]) : createCommentVNode("", true);
    };
  }
});
var Rr = defineComponent({
  __name: "DialogOverlay",
  props: {
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(ct);
    return (t, l) => {
      var n, i;
      return (n = unref(e)) != null && n.open.value ? (openBlock(), createBlock(unref(R), mergeProps({ key: 0 }, o, {
        "data-state": (i = unref(e)) != null && i.open.value ? "open" : "closed",
        style: { "pointer-events": "auto" },
        "data-aria-hidden": "true",
        "aria-hidden": "true"
      }), {
        default: withCtx(() => [
          renderSlot(t.$slots, "default")
        ]),
        _: 3
      }, 16, ["data-state"])) : createCommentVNode("", true);
    };
  }
});
var Ir = defineComponent({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(ct);
    function t() {
      e == null || e.closeModal();
    }
    return (l, n) => (openBlock(), createBlock(unref(G), mergeProps(o, {
      type: "button",
      "aria-label": "Close",
      onClick: t
    }), {
      default: withCtx(() => [
        renderSlot(l.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Lr = defineComponent({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a;
    return (e, t) => (openBlock(), createBlock(unref(jo), normalizeProps(guardReactiveProps(o)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Nr = defineComponent({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a;
    return (e, t) => (openBlock(), createBlock(unref(ea), normalizeProps(guardReactiveProps(o)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Te = Symbol();
var Kr = defineComponent({
  __name: "AlertDialogRoot",
  props: {
    open: { type: Boolean, default: void 0 },
    defaultOpen: { type: Boolean, default: false }
  },
  emits: ["update:open"],
  setup(a, { emit: o }) {
    const e = a, t = H(e, "open", o, {
      defaultValue: e.defaultOpen,
      passive: true
    }), l = Go(document.querySelector("body"), t.value);
    return watchEffect(() => {
      l.value = t.value;
    }), provide(Te, {
      contentId: Q(),
      titleId: Q(),
      descriptionId: Q(),
      open: t,
      openModal: () => {
        t.value = true;
      },
      closeModal: () => {
        t.value = false;
      },
      triggerButton: ref()
    }), (n, i) => renderSlot(n.$slots, "default");
  }
});
var Hr = defineComponent({
  __name: "AlertDialogTrigger",
  props: {
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(Te), { primitiveElement: t, currentElement: l } = B();
    return onMounted(() => {
      e ? e.triggerButton.value = l.value : console.error(
        "Injected value not found, AlertDialogTrigger possibly not wrapped with AlertDialogRoot. Component may not be working properly."
      );
    }), (n, i) => {
      var r, s, d, c;
      return openBlock(), createBlock(unref(G), mergeProps(o, {
        type: "button",
        ref_key: "primitiveElement",
        ref: t,
        "aria-haspopup": "dialog",
        "aria-controls": (r = unref(e)) == null ? void 0 : r.contentId,
        "aria-expanded": ((s = unref(e)) == null ? void 0 : s.open.value) || false,
        "data-state": (d = unref(e)) != null && d.open.value ? "open" : "closed",
        onClick: (c = unref(e)) == null ? void 0 : c.openModal
      }), {
        default: withCtx(() => [
          renderSlot(n.$slots, "default")
        ]),
        _: 3
      }, 16, ["aria-controls", "aria-expanded", "data-state", "onClick"]);
    };
  }
});
var Fr = defineComponent({
  __name: "AlertDialogPortal",
  props: {
    container: {}
  },
  setup(a) {
    const o = a;
    return (e, t) => (openBlock(), createBlock(pt, normalizeProps(guardReactiveProps(o)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var zr = defineComponent({
  __name: "AlertDialogContent",
  props: {
    isOpenAutoFocus: { type: Boolean, default: true },
    isCloseAutoFocus: { type: Boolean, default: void 0 },
    isEscapeKeyDownDefault: { type: Boolean, default: true },
    asChild: { type: Boolean }
  },
  emits: ["open", "close", "escapeKeyDown"],
  setup(a, { emit: o }) {
    const e = a, t = inject(Te), { primitiveElement: l, currentElement: n } = B();
    watchEffect((r) => {
      r(() => {
        var s;
        e.isCloseAutoFocus && ((s = t == null ? void 0 : t.triggerButton.value) == null || s.focus()), window.removeEventListener("keydown", i), o("close");
      }), n.value && t != null && t.open.value && (e.isOpenAutoFocus && jt(n.value), window.addEventListener("keydown", i), o("open"));
    });
    const i = (r) => {
      var s;
      if (r.key === "Escape")
        return e.isEscapeKeyDownDefault && (r.preventDefault(), t == null || t.closeModal(), e.isCloseAutoFocus && ((s = t == null ? void 0 : t.triggerButton.value) == null || s.focus())), o("escapeKeyDown");
      if (r.key === "ArrowDown" || r.key === "ArrowUp") {
        const d = document.activeElement;
        d && ["input", "select", "textarea"].indexOf(d.tagName.toLowerCase()) === -1 && r.preventDefault();
      }
    };
    return (r, s) => {
      var d, c, p, f, m;
      return (d = unref(t)) != null && d.open.value ? (openBlock(), createBlock(unref(R), {
        key: 0,
        ref_key: "primitiveElement",
        ref: l,
        id: (c = unref(t)) == null ? void 0 : c.contentId,
        "aria-labelledby": (p = unref(t)) == null ? void 0 : p.titleId,
        "aria-describedby": (f = unref(t)) == null ? void 0 : f.descriptionId,
        "data-state": (m = unref(t)) != null && m.open.value ? "open" : "closed",
        role: "alertdialog",
        tabindex: "-1",
        style: { "pointer-events": "auto" }
      }, {
        default: withCtx(() => [
          renderSlot(r.$slots, "default")
        ]),
        _: 3
      }, 8, ["id", "aria-labelledby", "aria-describedby", "data-state"])) : createCommentVNode("", true);
    };
  }
});
var Wr = defineComponent({
  __name: "AlertDialogOverlay",
  props: {
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(Te);
    return (t, l) => {
      var n, i;
      return (n = unref(e)) != null && n.open.value ? (openBlock(), createBlock(unref(R), mergeProps({ key: 0 }, o, {
        "as-child": o.asChild,
        "data-state": (i = unref(e)) != null && i.open.value ? "open" : "closed",
        style: { "pointer-events": "auto" },
        "data-aria-hidden": "true",
        "aria-hidden": "true"
      }), {
        default: withCtx(() => [
          renderSlot(t.$slots, "default")
        ]),
        _: 3
      }, 16, ["as-child", "data-state"])) : createCommentVNode("", true);
    };
  }
});
var Yr = defineComponent({
  __name: "AlertDialogCancel",
  props: {
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(Te);
    return (t, l) => (openBlock(), createBlock(unref(G), mergeProps(o, {
      type: "button",
      onClick: l[0] || (l[0] = (n) => {
        var i;
        return (i = unref(e)) == null ? void 0 : i.closeModal();
      })
    }), {
      default: withCtx(() => [
        renderSlot(t.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Ur = defineComponent({
  __name: "AlertDialogTitle",
  props: {
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(Te);
    return (t, l) => {
      var n;
      return openBlock(), createBlock(unref(jo), mergeProps(o, {
        id: (n = unref(e)) == null ? void 0 : n.titleId
      }), {
        default: withCtx(() => [
          renderSlot(t.$slots, "default")
        ]),
        _: 3
      }, 16, ["id"]);
    };
  }
});
var qr = defineComponent({
  __name: "AlertDialogDescription",
  props: {
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(Te);
    return (t, l) => {
      var n;
      return openBlock(), createBlock(unref(ea), mergeProps(o, {
        id: (n = unref(e)) == null ? void 0 : n.descriptionId
      }), {
        default: withCtx(() => [
          renderSlot(t.$slots, "default")
        ]),
        _: 3
      }, 16, ["id"]);
    };
  }
});
var Xr = defineComponent({
  __name: "AlertDialogAction",
  props: {
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(Te);
    return (t, l) => (openBlock(), createBlock(unref(G), mergeProps(o, {
      type: "button",
      onClick: l[0] || (l[0] = (n) => {
        var i;
        return (i = unref(e)) == null ? void 0 : i.closeModal();
      })
    }), {
      default: withCtx(() => [
        renderSlot(t.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Mt = Symbol();
var Gr = defineComponent({
  __name: "ToolbarRoot",
  props: {
    orientation: { default: "horizontal" },
    dir: { default: "ltr" },
    loop: { type: Boolean },
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, { primitiveElement: e, currentElement: t } = B(), l = ref();
    return provide(Mt, {
      parentElement: t,
      activeElement: l,
      orientation: o.orientation
    }), (n, i) => (openBlock(), createBlock(unref(R), {
      ref_key: "primitiveElement",
      ref: e,
      role: "toolbar",
      tabindex: "0",
      style: { outline: "none" },
      "aria-orientation": o.orientation,
      dir: o.dir,
      "data-orientation": o.orientation,
      "as-child": o.asChild
    }, {
      default: withCtx(() => [
        renderSlot(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["aria-orientation", "dir", "data-orientation", "as-child"]));
  }
});
var Jr = defineComponent({
  __name: "ToolbarButton",
  props: {
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(Mt), { primitiveElement: t, currentElement: l } = B();
    function n(i) {
      const r = te(
        i,
        l.value,
        e == null ? void 0 : e.parentElement.value
      );
      r == null || r.focus();
    }
    return (i, r) => {
      var s, d;
      return openBlock(), createBlock(unref(G), {
        ref_key: "primitiveElement",
        ref: t,
        "data-orientation": (s = unref(e)) == null ? void 0 : s.orientation,
        "as-child": o.asChild,
        type: "button",
        tabindex: ((d = unref(e)) == null ? void 0 : d.activeElement.value) === unref(l) ? "0" : "-1",
        onKeydown: n,
        "data-radix-vue-collection-item": ""
      }, {
        default: withCtx(() => [
          renderSlot(i.$slots, "default")
        ]),
        _: 3
      }, 8, ["data-orientation", "as-child", "tabindex"]);
    };
  }
});
var Zr = defineComponent({
  __name: "ToolbarLink",
  props: {
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(Mt), { primitiveElement: t, currentElement: l } = B();
    function n(i) {
      const r = te(
        i,
        l.value,
        e == null ? void 0 : e.parentElement.value
      );
      r == null || r.focus();
    }
    return (i, r) => {
      var s;
      return openBlock(), createBlock(unref(Vo), {
        ref_key: "primitiveElement",
        ref: t,
        tabindex: ((s = unref(e)) == null ? void 0 : s.activeElement.value) === unref(l) ? "0" : "-1",
        "as-child": o.asChild,
        onKeydown: n,
        "data-radix-vue-collection-item": ""
      }, {
        default: withCtx(() => [
          renderSlot(i.$slots, "default")
        ]),
        _: 3
      }, 8, ["tabindex", "as-child"]);
    };
  }
});
var ca = Symbol();
var Qr = defineComponent({
  __name: "ToolbarToggleGroup",
  props: {
    type: { default: "single" },
    value: {},
    defaultValue: {},
    disabled: { type: Boolean },
    rovingFocus: { type: Boolean },
    orientation: {},
    dir: {},
    loop: { type: Boolean },
    modelValue: {},
    asChild: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(a, { emit: o }) {
    const e = a, { primitiveElement: t, currentElement: l } = B();
    return provide(ca, {
      type: e.type,
      modelValue: toRef(() => e.modelValue),
      changeModelValue: (n) => {
        if (e.type === "single")
          o("update:modelValue", n);
        else {
          if (!n)
            return;
          let i = e.modelValue;
          if (i.includes(n)) {
            let r = i.findIndex((s) => s === n);
            i.splice(r, 1);
          } else
            i.push(n);
          o("update:modelValue", i);
        }
      },
      orientation: e.orientation ? e.orientation : "horizontal",
      parentElement: l
    }), (n, i) => (openBlock(), createBlock(unref(R), {
      ref_key: "primitiveElement",
      ref: t,
      role: "group",
      dir: e.dir,
      "as-child": e.asChild,
      "aria-label": "Text alignment"
    }, {
      default: withCtx(() => [
        renderSlot(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["dir", "as-child"]));
  }
});
var Vr = defineComponent({
  __name: "ToolbarToggleItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(
      ca
    ), t = inject(Mt), l = computed(() => {
      var r, s, d;
      return (e == null ? void 0 : e.type) === "multiple" ? (s = (r = e == null ? void 0 : e.modelValue) == null ? void 0 : r.value) != null && s.includes(o.value) ? "on" : "off" : ((d = e == null ? void 0 : e.modelValue) == null ? void 0 : d.value) === o.value ? "on" : "off";
    }), n = ref();
    function i(r) {
      const s = te(
        r,
        n.value,
        t == null ? void 0 : t.parentElement.value
      );
      s == null || s.focus();
    }
    return (r, s) => {
      var d;
      return openBlock(), createBlock(unref(G), {
        type: "button",
        "data-state": l.value,
        "data-disabled": o.disabled,
        "data-orientation": (d = unref(e)) == null ? void 0 : d.orientation,
        "as-child": o.asChild,
        onClick: s[0] || (s[0] = (c) => unref(e).changeModelValue(o.value)),
        ref_key: "currentToggleElement",
        ref: n,
        onKeydown: i,
        "data-radix-vue-collection-item": ""
      }, {
        default: withCtx(() => [
          renderSlot(r.$slots, "default")
        ]),
        _: 3
      }, 8, ["data-state", "data-disabled", "data-orientation", "as-child"]);
    };
  }
});
var jr = defineComponent({
  __name: "ToolbarSeparator",
  props: {
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a;
    return (e, t) => (openBlock(), createBlock(Xe, {
      "as-child": o.asChild
    }, null, 8, ["as-child"]));
  }
});
var lo = Symbol();
var ei = defineComponent({
  __name: "AvatarRoot",
  props: {
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = ref("loading");
    return provide(lo, {
      imageLoadingStatus: e
    }), (t, l) => (openBlock(), createBlock(unref(ne), {
      "as-child": o.asChild
    }, {
      default: withCtx(() => [
        renderSlot(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child"]));
  }
});
function ol(a) {
  const o = ref("idle"), e = ref(false);
  return onMounted(() => {
    if (!a) {
      o.value = "error";
      return;
    }
    e.value = true;
    const t = new window.Image(), l = (n) => () => {
      e.value && (o.value = n);
    };
    o.value = "loading", t.onload = l("loaded"), t.onerror = l("error"), t.src = a;
  }), onUnmounted(() => {
    e.value = false;
  }), o;
}
var ti = defineComponent({
  __name: "AvatarImage",
  props: {
    onLoadingStatusChange: {},
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(lo), t = useAttrs().src, l = ol(t);
    return watch(
      l,
      (n) => {
        n !== "idle" && (e.imageLoadingStatus.value = n);
      },
      { immediate: true }
    ), (n, i) => unref(l) === "loaded" ? (openBlock(), createBlock(unref(Tn), {
      key: 0,
      "as-child": o.asChild
    }, {
      default: withCtx(() => [
        renderSlot(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child"])) : createCommentVNode("", true);
  }
});
var oi = defineComponent({
  __name: "AvatarFallback",
  props: {
    delayMs: { default: 0 },
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(lo);
    let t = ref(false), l;
    return o.delayMs ? l = setTimeout(() => {
      t.value = true, clearTimeout(l);
    }, o.delayMs) : t.value = true, (n, i) => {
      var r;
      return unref(t) && ((r = unref(e)) == null ? void 0 : r.imageLoadingStatus.value) !== "loaded" ? (openBlock(), createBlock(unref(ne), {
        key: 0,
        "as-child": o.asChild
      }, {
        default: withCtx(() => [
          renderSlot(n.$slots, "default")
        ]),
        _: 3
      }, 8, ["as-child"])) : createCommentVNode("", true);
    };
  }
});
var ro = Symbol();
var me = defineComponent({
  __name: "PopperRoot",
  setup(a) {
    const o = ref();
    return provide(ro, {
      anchor: o,
      onAnchorChange: (e) => {
        o.value = e;
      }
    }), (e, t) => renderSlot(e.$slots, "default");
  }
});
var he = defineComponent({
  __name: "PopperAnchor",
  props: {
    element: {},
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, { primitiveElement: e, currentElement: t } = B(), l = inject(ro);
    return watch(t, () => {
      l == null || l.onAnchorChange(o.element ?? t.value);
    }), (n, i) => (openBlock(), createBlock(unref(R), {
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
var al = (a) => ({
  name: "transformOrigin",
  options: a,
  fn(o) {
    var h2, E, $;
    const { placement: e, rects: t, middlewareData: l } = o, i = ((h2 = l.arrow) == null ? void 0 : h2.centerOffset) !== 0, r = i ? 0 : a.arrowWidth, s = i ? 0 : a.arrowHeight, [d, c] = Wt(e), p = { start: "0%", center: "50%", end: "100%" }[c], f = (((E = l.arrow) == null ? void 0 : E.x) ?? 0) + r / 2, m = ((($ = l.arrow) == null ? void 0 : $.y) ?? 0) + s / 2;
    let v = "", y = "";
    return d === "bottom" ? (v = i ? p : `${f}px`, y = `${-s}px`) : d === "top" ? (v = i ? p : `${f}px`, y = `${t.floating.height + s}px`) : d === "right" ? (v = `${-s}px`, y = i ? p : `${m}px`) : d === "left" && (v = `${t.floating.width + s}px`, y = i ? p : `${m}px`), { data: { x: v, y } };
  }
});
function Wt(a) {
  const [o, e = "center"] = a.split("-");
  return [o, e];
}
function Ge(a) {
  return a.split("-")[1];
}
function io(a) {
  return a === "y" ? "height" : "width";
}
function _e(a) {
  return a.split("-")[0];
}
function He(a) {
  return ["top", "bottom"].includes(_e(a)) ? "x" : "y";
}
function Bo(a, o, e) {
  let { reference: t, floating: l } = a;
  const n = t.x + t.width / 2 - l.width / 2, i = t.y + t.height / 2 - l.height / 2, r = He(o), s = io(r), d = t[s] / 2 - l[s] / 2, c = r === "x";
  let p;
  switch (_e(o)) {
    case "top":
      p = { x: n, y: t.y - l.height };
      break;
    case "bottom":
      p = { x: n, y: t.y + t.height };
      break;
    case "right":
      p = { x: t.x + t.width, y: i };
      break;
    case "left":
      p = { x: t.x - l.width, y: i };
      break;
    default:
      p = { x: t.x, y: t.y };
  }
  switch (Ge(o)) {
    case "start":
      p[r] -= d * (e && c ? -1 : 1);
      break;
    case "end":
      p[r] += d * (e && c ? -1 : 1);
  }
  return p;
}
var nl = async (a, o, e) => {
  const { placement: t = "bottom", strategy: l = "absolute", middleware: n = [], platform: i } = e, r = n.filter(Boolean), s = await (i.isRTL == null ? void 0 : i.isRTL(o));
  let d = await i.getElementRects({ reference: a, floating: o, strategy: l }), { x: c, y: p } = Bo(d, t, s), f = t, m = {}, v = 0;
  for (let y = 0; y < r.length; y++) {
    const { name: h2, fn: E } = r[y], { x: $, y: k, data: O, reset: x } = await E({ x: c, y: p, initialPlacement: t, placement: f, strategy: l, middlewareData: m, rects: d, platform: i, elements: { reference: a, floating: o } });
    c = $ ?? c, p = k ?? p, m = { ...m, [h2]: { ...m[h2], ...O } }, x && v <= 50 && (v++, typeof x == "object" && (x.placement && (f = x.placement), x.rects && (d = x.rects === true ? await i.getElementRects({ reference: a, floating: o, strategy: l }) : x.rects), { x: c, y: p } = Bo(d, f, s)), y = -1);
  }
  return { x: c, y: p, placement: f, strategy: l, middlewareData: m };
};
function Ce(a, o) {
  return typeof a == "function" ? a(o) : a;
}
function pa(a) {
  return typeof a != "number" ? function(o) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...o };
  }(a) : { top: a, right: a, bottom: a, left: a };
}
function Et(a) {
  return { ...a, top: a.y, left: a.x, right: a.x + a.width, bottom: a.y + a.height };
}
async function je(a, o) {
  var e;
  o === void 0 && (o = {});
  const { x: t, y: l, platform: n, rects: i, elements: r, strategy: s } = a, { boundary: d = "clippingAncestors", rootBoundary: c = "viewport", elementContext: p = "floating", altBoundary: f = false, padding: m = 0 } = Ce(o, a), v = pa(m), y = r[f ? p === "floating" ? "reference" : "floating" : p], h2 = Et(await n.getClippingRect({ element: (e = await (n.isElement == null ? void 0 : n.isElement(y))) == null || e ? y : y.contextElement || await (n.getDocumentElement == null ? void 0 : n.getDocumentElement(r.floating)), boundary: d, rootBoundary: c, strategy: s })), E = p === "floating" ? { ...i.floating, x: t, y: l } : i.reference, $ = await (n.getOffsetParent == null ? void 0 : n.getOffsetParent(r.floating)), k = await (n.isElement == null ? void 0 : n.isElement($)) && await (n.getScale == null ? void 0 : n.getScale($)) || { x: 1, y: 1 }, O = Et(n.convertOffsetParentRelativeRectToViewportRelativeRect ? await n.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: E, offsetParent: $, strategy: s }) : E);
  return { top: (h2.top - O.top + v.top) / k.y, bottom: (O.bottom - h2.bottom + v.bottom) / k.y, left: (h2.left - O.left + v.left) / k.x, right: (O.right - h2.right + v.right) / k.x };
}
var et = Math.min;
var Ie = Math.max;
function Yt(a, o, e) {
  return Ie(a, et(o, e));
}
var ll = (a) => ({ name: "arrow", options: a, async fn(o) {
  const { x: e, y: t, placement: l, rects: n, platform: i, elements: r } = o, { element: s, padding: d = 0 } = Ce(a, o) || {};
  if (s == null)
    return {};
  const c = pa(d), p = { x: e, y: t }, f = He(l), m = io(f), v = await i.getDimensions(s), y = f === "y", h2 = y ? "top" : "left", E = y ? "bottom" : "right", $ = y ? "clientHeight" : "clientWidth", k = n.reference[m] + n.reference[f] - p[f] - n.floating[m], O = p[f] - n.reference[f], x = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(s));
  let I = x ? x[$] : 0;
  I && await (i.isElement == null ? void 0 : i.isElement(x)) || (I = r.floating[$] || n.floating[m]);
  const T = k / 2 - O / 2, W = I / 2 - v[m] / 2 - 1, X = et(c[h2], W), J = et(c[E], W), F = X, Z = I - v[m] - J, q = I / 2 - v[m] / 2 + T, oe = Yt(F, q, Z), ae = Ge(l) != null && q != oe && n.reference[m] / 2 - (q < F ? X : J) - v[m] / 2 < 0 ? q < F ? F - q : Z - q : 0;
  return { [f]: p[f] - ae, data: { [f]: oe, centerOffset: q - oe + ae } };
} });
var fa = ["top", "right", "bottom", "left"];
fa.reduce((a, o) => a.concat(o, o + "-start", o + "-end"), []);
var rl = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Ct(a) {
  return a.replace(/left|right|bottom|top/g, (o) => rl[o]);
}
function il(a, o, e) {
  e === void 0 && (e = false);
  const t = Ge(a), l = He(a), n = io(l);
  let i = l === "x" ? t === (e ? "end" : "start") ? "right" : "left" : t === "start" ? "bottom" : "top";
  return o.reference[n] > o.floating[n] && (i = Ct(i)), { main: i, cross: Ct(i) };
}
var sl = { start: "end", end: "start" };
function Ht(a) {
  return a.replace(/start|end/g, (o) => sl[o]);
}
var ul = function(a) {
  return a === void 0 && (a = {}), { name: "flip", options: a, async fn(o) {
    var e;
    const { placement: t, middlewareData: l, rects: n, initialPlacement: i, platform: r, elements: s } = o, { mainAxis: d = true, crossAxis: c = true, fallbackPlacements: p, fallbackStrategy: f = "bestFit", fallbackAxisSideDirection: m = "none", flipAlignment: v = true, ...y } = Ce(a, o), h2 = _e(t), E = _e(i) === i, $ = await (r.isRTL == null ? void 0 : r.isRTL(s.floating)), k = p || (E || !v ? [Ct(i)] : function(F) {
      const Z = Ct(F);
      return [Ht(F), Z, Ht(Z)];
    }(i));
    p || m === "none" || k.push(...function(F, Z, q, oe) {
      const ae = Ge(F);
      let j = function(Me, Re, Ia) {
        const bo = ["left", "right"], wo = ["right", "left"], La = ["top", "bottom"], Na = ["bottom", "top"];
        switch (Me) {
          case "top":
          case "bottom":
            return Ia ? Re ? wo : bo : Re ? bo : wo;
          case "left":
          case "right":
            return Re ? La : Na;
          default:
            return [];
        }
      }(_e(F), q === "start", oe);
      return ae && (j = j.map((Me) => Me + "-" + ae), Z && (j = j.concat(j.map(Ht)))), j;
    }(i, v, m, $));
    const O = [i, ...k], x = await je(o, y), I = [];
    let T = ((e = l.flip) == null ? void 0 : e.overflows) || [];
    if (d && I.push(x[h2]), c) {
      const { main: F, cross: Z } = il(t, n, $);
      I.push(x[F], x[Z]);
    }
    if (T = [...T, { placement: t, overflows: I }], !I.every((F) => F <= 0)) {
      var W, X;
      const F = (((W = l.flip) == null ? void 0 : W.index) || 0) + 1, Z = O[F];
      if (Z)
        return { data: { index: F, overflows: T }, reset: { placement: Z } };
      let q = (X = T.filter((oe) => oe.overflows[0] <= 0).sort((oe, ae) => oe.overflows[1] - ae.overflows[1])[0]) == null ? void 0 : X.placement;
      if (!q)
        switch (f) {
          case "bestFit": {
            var J;
            const oe = (J = T.map((ae) => [ae.placement, ae.overflows.filter((j) => j > 0).reduce((j, Me) => j + Me, 0)]).sort((ae, j) => ae[1] - j[1])[0]) == null ? void 0 : J[0];
            oe && (q = oe);
            break;
          }
          case "initialPlacement":
            q = i;
        }
      if (t !== q)
        return { reset: { placement: q } };
    }
    return {};
  } };
};
function xo(a, o) {
  return { top: a.top - o.height, right: a.right - o.width, bottom: a.bottom - o.height, left: a.left - o.width };
}
function Do(a) {
  return fa.some((o) => a[o] >= 0);
}
var dl = function(a) {
  return a === void 0 && (a = {}), { name: "hide", options: a, async fn(o) {
    const { rects: e } = o, { strategy: t = "referenceHidden", ...l } = Ce(a, o);
    switch (t) {
      case "referenceHidden": {
        const n = xo(await je(o, { ...l, elementContext: "reference" }), e.reference);
        return { data: { referenceHiddenOffsets: n, referenceHidden: Do(n) } };
      }
      case "escaped": {
        const n = xo(await je(o, { ...l, altBoundary: true }), e.floating);
        return { data: { escapedOffsets: n, escaped: Do(n) } };
      }
      default:
        return {};
    }
  } };
};
var cl = function(a) {
  return a === void 0 && (a = 0), { name: "offset", options: a, async fn(o) {
    const { x: e, y: t } = o, l = await async function(n, i) {
      const { placement: r, platform: s, elements: d } = n, c = await (s.isRTL == null ? void 0 : s.isRTL(d.floating)), p = _e(r), f = Ge(r), m = He(r) === "x", v = ["left", "top"].includes(p) ? -1 : 1, y = c && m ? -1 : 1, h2 = Ce(i, n);
      let { mainAxis: E, crossAxis: $, alignmentAxis: k } = typeof h2 == "number" ? { mainAxis: h2, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...h2 };
      return f && typeof k == "number" && ($ = f === "end" ? -1 * k : k), m ? { x: $ * y, y: E * v } : { x: E * v, y: $ * y };
    }(o, a);
    return { x: e + l.x, y: t + l.y, data: l };
  } };
};
function ma(a) {
  return a === "x" ? "y" : "x";
}
var pl = function(a) {
  return a === void 0 && (a = {}), { name: "shift", options: a, async fn(o) {
    const { x: e, y: t, placement: l } = o, { mainAxis: n = true, crossAxis: i = false, limiter: r = { fn: (h2) => {
      let { x: E, y: $ } = h2;
      return { x: E, y: $ };
    } }, ...s } = Ce(a, o), d = { x: e, y: t }, c = await je(o, s), p = He(_e(l)), f = ma(p);
    let m = d[p], v = d[f];
    if (n) {
      const h2 = p === "y" ? "bottom" : "right";
      m = Yt(m + c[p === "y" ? "top" : "left"], m, m - c[h2]);
    }
    if (i) {
      const h2 = f === "y" ? "bottom" : "right";
      v = Yt(v + c[f === "y" ? "top" : "left"], v, v - c[h2]);
    }
    const y = r.fn({ ...o, [p]: m, [f]: v });
    return { ...y, data: { x: y.x - e, y: y.y - t } };
  } };
};
var fl = function(a) {
  return a === void 0 && (a = {}), { options: a, fn(o) {
    const { x: e, y: t, placement: l, rects: n, middlewareData: i } = o, { offset: r = 0, mainAxis: s = true, crossAxis: d = true } = Ce(a, o), c = { x: e, y: t }, p = He(l), f = ma(p);
    let m = c[p], v = c[f];
    const y = Ce(r, o), h2 = typeof y == "number" ? { mainAxis: y, crossAxis: 0 } : { mainAxis: 0, crossAxis: 0, ...y };
    if (s) {
      const k = p === "y" ? "height" : "width", O = n.reference[p] - n.floating[k] + h2.mainAxis, x = n.reference[p] + n.reference[k] - h2.mainAxis;
      m < O ? m = O : m > x && (m = x);
    }
    if (d) {
      var E, $;
      const k = p === "y" ? "width" : "height", O = ["top", "left"].includes(_e(l)), x = n.reference[f] - n.floating[k] + (O && ((E = i.offset) == null ? void 0 : E[f]) || 0) + (O ? 0 : h2.crossAxis), I = n.reference[f] + n.reference[k] + (O ? 0 : (($ = i.offset) == null ? void 0 : $[f]) || 0) - (O ? h2.crossAxis : 0);
      v < x ? v = x : v > I && (v = I);
    }
    return { [p]: m, [f]: v };
  } };
};
var ml = function(a) {
  return a === void 0 && (a = {}), { name: "size", options: a, async fn(o) {
    const { placement: e, rects: t, platform: l, elements: n } = o, { apply: i = () => {
    }, ...r } = Ce(a, o), s = await je(o, r), d = _e(e), c = Ge(e), p = He(e) === "x", { width: f, height: m } = t.floating;
    let v, y;
    d === "top" || d === "bottom" ? (v = d, y = c === (await (l.isRTL == null ? void 0 : l.isRTL(n.floating)) ? "start" : "end") ? "left" : "right") : (y = d, v = c === "end" ? "top" : "bottom");
    const h2 = m - s[v], E = f - s[y], $ = !o.middlewareData.shift;
    let k = h2, O = E;
    if (p) {
      const I = f - s.left - s.right;
      O = c || $ ? et(E, I) : I;
    } else {
      const I = m - s.top - s.bottom;
      k = c || $ ? et(h2, I) : I;
    }
    if ($ && !c) {
      const I = Ie(s.left, 0), T = Ie(s.right, 0), W = Ie(s.top, 0), X = Ie(s.bottom, 0);
      p ? O = f - 2 * (I !== 0 || T !== 0 ? I + T : Ie(s.left, s.right)) : k = m - 2 * (W !== 0 || X !== 0 ? W + X : Ie(s.top, s.bottom));
    }
    await i({ ...o, availableWidth: O, availableHeight: k });
    const x = await l.getDimensions(n.floating);
    return f !== x.width || m !== x.height ? { reset: { rects: true } } : {};
  } };
};
function ce(a) {
  var o;
  return ((o = a.ownerDocument) == null ? void 0 : o.defaultView) || window;
}
function pe(a) {
  return ce(a).getComputedStyle(a);
}
function va(a) {
  return a instanceof ce(a).Node;
}
function Pe(a) {
  return va(a) ? (a.nodeName || "").toLowerCase() : "#document";
}
function fe(a) {
  return a instanceof ce(a).HTMLElement;
}
function be(a) {
  return a instanceof ce(a).Element;
}
function Mo(a) {
  return typeof ShadowRoot < "u" && (a instanceof ce(a).ShadowRoot || a instanceof ShadowRoot);
}
function tt(a) {
  const { overflow: o, overflowX: e, overflowY: t, display: l } = pe(a);
  return /auto|scroll|overlay|hidden|clip/.test(o + t + e) && !["inline", "contents"].includes(l);
}
function vl(a) {
  return ["table", "td", "th"].includes(Pe(a));
}
function Ut(a) {
  const o = so(), e = pe(a);
  return e.transform !== "none" || e.perspective !== "none" || !o && !!e.backdropFilter && e.backdropFilter !== "none" || !o && !!e.filter && e.filter !== "none" || ["transform", "perspective", "filter"].some((t) => (e.willChange || "").includes(t)) || ["paint", "layout", "strict", "content"].some((t) => (e.contain || "").includes(t));
}
function so() {
  return !(typeof CSS > "u" || !CSS.supports) && CSS.supports("-webkit-backdrop-filter", "none");
}
function Rt(a) {
  return ["html", "body", "#document"].includes(Pe(a));
}
var qt = Math.min;
var We = Math.max;
var $t = Math.round;
var yt = Math.floor;
var Le = (a) => ({ x: a, y: a });
function ha(a) {
  const o = pe(a);
  let e = parseFloat(o.width) || 0, t = parseFloat(o.height) || 0;
  const l = fe(a), n = l ? a.offsetWidth : e, i = l ? a.offsetHeight : t, r = $t(e) !== n || $t(t) !== i;
  return r && (e = n, t = i), { width: e, height: t, $: r };
}
function uo(a) {
  return be(a) ? a : a.contextElement;
}
function Ye(a) {
  const o = uo(a);
  if (!fe(o))
    return Le(1);
  const e = o.getBoundingClientRect(), { width: t, height: l, $: n } = ha(o);
  let i = (n ? $t(e.width) : e.width) / t, r = (n ? $t(e.height) : e.height) / l;
  return i && Number.isFinite(i) || (i = 1), r && Number.isFinite(r) || (r = 1), { x: i, y: r };
}
var Ro = Le(0);
function ya(a, o, e) {
  var t, l;
  if (o === void 0 && (o = true), !so())
    return Ro;
  const n = a ? ce(a) : window;
  return !e || o && e !== n ? Ro : { x: ((t = n.visualViewport) == null ? void 0 : t.offsetLeft) || 0, y: ((l = n.visualViewport) == null ? void 0 : l.offsetTop) || 0 };
}
function Ne(a, o, e, t) {
  o === void 0 && (o = false), e === void 0 && (e = false);
  const l = a.getBoundingClientRect(), n = uo(a);
  let i = Le(1);
  o && (t ? be(t) && (i = Ye(t)) : i = Ye(a));
  const r = ya(n, e, t);
  let s = (l.left + r.x) / i.x, d = (l.top + r.y) / i.y, c = l.width / i.x, p = l.height / i.y;
  if (n) {
    const f = ce(n), m = t && be(t) ? ce(t) : t;
    let v = f.frameElement;
    for (; v && t && m !== f; ) {
      const y = Ye(v), h2 = v.getBoundingClientRect(), E = getComputedStyle(v), $ = h2.left + (v.clientLeft + parseFloat(E.paddingLeft)) * y.x, k = h2.top + (v.clientTop + parseFloat(E.paddingTop)) * y.y;
      s *= y.x, d *= y.y, c *= y.x, p *= y.y, s += $, d += k, v = ce(v).frameElement;
    }
  }
  return Et({ width: c, height: p, x: s, y: d });
}
function we(a) {
  return ((va(a) ? a.ownerDocument : a.document) || window.document).documentElement;
}
function It(a) {
  return be(a) ? { scrollLeft: a.scrollLeft, scrollTop: a.scrollTop } : { scrollLeft: a.pageXOffset, scrollTop: a.pageYOffset };
}
function ga(a) {
  return Ne(we(a)).left + It(a).scrollLeft;
}
function qe(a) {
  if (Pe(a) === "html")
    return a;
  const o = a.assignedSlot || a.parentNode || Mo(a) && a.host || we(a);
  return Mo(o) ? o.host : o;
}
function _a(a) {
  const o = qe(a);
  return Rt(o) ? a.ownerDocument ? a.ownerDocument.body : a.body : fe(o) && tt(o) ? o : _a(o);
}
function St(a, o) {
  var e;
  o === void 0 && (o = []);
  const t = _a(a), l = t === ((e = a.ownerDocument) == null ? void 0 : e.body), n = ce(t);
  return l ? o.concat(n, n.visualViewport || [], tt(t) ? t : []) : o.concat(t, St(t));
}
function Io(a, o, e) {
  let t;
  if (o === "viewport")
    t = function(l, n) {
      const i = ce(l), r = we(l), s = i.visualViewport;
      let d = r.clientWidth, c = r.clientHeight, p = 0, f = 0;
      if (s) {
        d = s.width, c = s.height;
        const m = so();
        (!m || m && n === "fixed") && (p = s.offsetLeft, f = s.offsetTop);
      }
      return { width: d, height: c, x: p, y: f };
    }(a, e);
  else if (o === "document")
    t = function(l) {
      const n = we(l), i = It(l), r = l.ownerDocument.body, s = We(n.scrollWidth, n.clientWidth, r.scrollWidth, r.clientWidth), d = We(n.scrollHeight, n.clientHeight, r.scrollHeight, r.clientHeight);
      let c = -i.scrollLeft + ga(l);
      const p = -i.scrollTop;
      return pe(r).direction === "rtl" && (c += We(n.clientWidth, r.clientWidth) - s), { width: s, height: d, x: c, y: p };
    }(we(a));
  else if (be(o))
    t = function(l, n) {
      const i = Ne(l, true, n === "fixed"), r = i.top + l.clientTop, s = i.left + l.clientLeft, d = fe(l) ? Ye(l) : Le(1);
      return { width: l.clientWidth * d.x, height: l.clientHeight * d.y, x: s * d.x, y: r * d.y };
    }(o, e);
  else {
    const l = ya(a);
    t = { ...o, x: o.x - l.x, y: o.y - l.y };
  }
  return Et(t);
}
function ba(a, o) {
  const e = qe(a);
  return !(e === o || !be(e) || Rt(e)) && (pe(e).position === "fixed" || ba(e, o));
}
function Lo(a, o) {
  return fe(a) && pe(a).position !== "fixed" ? o ? o(a) : a.offsetParent : null;
}
function No(a, o) {
  const e = ce(a);
  if (!fe(a))
    return e;
  let t = Lo(a, o);
  for (; t && vl(t) && pe(t).position === "static"; )
    t = Lo(t, o);
  return t && (Pe(t) === "html" || Pe(t) === "body" && pe(t).position === "static" && !Ut(t)) ? e : t || function(l) {
    let n = qe(l);
    for (; fe(n) && !Rt(n); ) {
      if (Ut(n))
        return n;
      n = qe(n);
    }
    return null;
  }(a) || e;
}
function hl(a, o, e) {
  const t = fe(o), l = we(o), n = e === "fixed", i = Ne(a, true, n, o);
  let r = { scrollLeft: 0, scrollTop: 0 };
  const s = Le(0);
  if (t || !t && !n)
    if ((Pe(o) !== "body" || tt(l)) && (r = It(o)), fe(o)) {
      const d = Ne(o, true, n, o);
      s.x = d.x + o.clientLeft, s.y = d.y + o.clientTop;
    } else
      l && (s.x = ga(l));
  return { x: i.left + r.scrollLeft - s.x, y: i.top + r.scrollTop - s.y, width: i.width, height: i.height };
}
var yl = { getClippingRect: function(a) {
  let { element: o, boundary: e, rootBoundary: t, strategy: l } = a;
  const n = e === "clippingAncestors" ? function(d, c) {
    const p = c.get(d);
    if (p)
      return p;
    let f = St(d).filter((h2) => be(h2) && Pe(h2) !== "body"), m = null;
    const v = pe(d).position === "fixed";
    let y = v ? qe(d) : d;
    for (; be(y) && !Rt(y); ) {
      const h2 = pe(y), E = Ut(y);
      E || h2.position !== "fixed" || (m = null), (v ? !E && !m : !E && h2.position === "static" && m && ["absolute", "fixed"].includes(m.position) || tt(y) && !E && ba(d, y)) ? f = f.filter(($) => $ !== y) : m = h2, y = qe(y);
    }
    return c.set(d, f), f;
  }(o, this._c) : [].concat(e), i = [...n, t], r = i[0], s = i.reduce((d, c) => {
    const p = Io(o, c, l);
    return d.top = We(p.top, d.top), d.right = qt(p.right, d.right), d.bottom = qt(p.bottom, d.bottom), d.left = We(p.left, d.left), d;
  }, Io(o, r, l));
  return { width: s.right - s.left, height: s.bottom - s.top, x: s.left, y: s.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(a) {
  let { rect: o, offsetParent: e, strategy: t } = a;
  const l = fe(e), n = we(e);
  if (e === n)
    return o;
  let i = { scrollLeft: 0, scrollTop: 0 }, r = Le(1);
  const s = Le(0);
  if ((l || !l && t !== "fixed") && ((Pe(e) !== "body" || tt(n)) && (i = It(e)), fe(e))) {
    const d = Ne(e);
    r = Ye(e), s.x = d.x + e.clientLeft, s.y = d.y + e.clientTop;
  }
  return { width: o.width * r.x, height: o.height * r.y, x: o.x * r.x - i.scrollLeft * r.x + s.x, y: o.y * r.y - i.scrollTop * r.y + s.y };
}, isElement: be, getDimensions: function(a) {
  return ha(a);
}, getOffsetParent: No, getDocumentElement: we, getScale: Ye, async getElementRects(a) {
  let { reference: o, floating: e, strategy: t } = a;
  const l = this.getOffsetParent || No, n = this.getDimensions;
  return { reference: hl(o, await l(e), t), floating: { x: 0, y: 0, ...await n(e) } };
}, getClientRects: (a) => Array.from(a.getClientRects()), isRTL: (a) => pe(a).direction === "rtl" };
function gl(a, o, e, t) {
  t === void 0 && (t = {});
  const { ancestorScroll: l = true, ancestorResize: n = true, elementResize: i = true, layoutShift: r = typeof IntersectionObserver == "function", animationFrame: s = false } = t, d = uo(a), c = l || n ? [...d ? St(d) : [], ...St(o)] : [];
  c.forEach((y) => {
    l && y.addEventListener("scroll", e, { passive: true }), n && y.addEventListener("resize", e);
  });
  const p = d && r ? function(y, h2) {
    let E, $ = null;
    const k = we(y);
    function O() {
      clearTimeout(E), $ && $.disconnect(), $ = null;
    }
    return function x(I, T) {
      I === void 0 && (I = false), T === void 0 && (T = 1), O();
      const { left: W, top: X, width: J, height: F } = y.getBoundingClientRect();
      if (I || h2(), !J || !F)
        return;
      const Z = yt(X), q = yt(k.clientWidth - (W + J)), oe = yt(k.clientHeight - (X + F)), ae = yt(W);
      let j = true;
      $ = new IntersectionObserver((Me) => {
        const Re = Me[0].intersectionRatio;
        if (Re !== T) {
          if (!j)
            return x();
          Re ? x(false, Re) : E = setTimeout(() => {
            x(false, 1e-7);
          }, 100);
        }
        j = false;
      }, { rootMargin: -Z + "px " + -q + "px " + -oe + "px " + -ae + "px", threshold: We(0, qt(1, T)) || 1 }), $.observe(y);
    }(true), O;
  }(d, e) : null;
  let f, m = null;
  i && (m = new ResizeObserver(e), d && !s && m.observe(d), m.observe(o));
  let v = s ? Ne(a) : null;
  return s && function y() {
    const h2 = Ne(a);
    !v || h2.x === v.x && h2.y === v.y && h2.width === v.width && h2.height === v.height || e(), v = h2, f = requestAnimationFrame(y);
  }(), e(), () => {
    c.forEach((y) => {
      l && y.removeEventListener("scroll", e), n && y.removeEventListener("resize", e);
    }), p && p(), m && m.disconnect(), m = null, s && cancelAnimationFrame(f);
  };
}
var _l = (a, o, e) => {
  const t = /* @__PURE__ */ new Map(), l = { platform: yl, ...e }, n = { ...l.platform, _c: t };
  return nl(a, o, { ...l, platform: n });
};
function Xt(a) {
  var o;
  return (o = a == null ? void 0 : a.$el) != null ? o : a;
}
function bl(a) {
  return {
    name: "arrow",
    options: a,
    fn(o) {
      const e = Xt(unref(a.element));
      return e == null ? {} : ll({
        element: e,
        padding: a.padding
      }).fn(o);
    }
  };
}
function wa(a) {
  return typeof window > "u" ? 1 : (a.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Ko(a, o) {
  const e = wa(a);
  return Math.round(o * e) / e;
}
function wl(a, o, e) {
  e === void 0 && (e = {});
  const t = e.whileElementsMounted, l = computed(() => {
    var T;
    return (T = unref(e.open)) != null ? T : true;
  }), n = computed(() => unref(e.middleware)), i = computed(() => {
    var T;
    return (T = unref(e.placement)) != null ? T : "bottom";
  }), r = computed(() => {
    var T;
    return (T = unref(e.strategy)) != null ? T : "absolute";
  }), s = computed(() => {
    var T;
    return (T = unref(e.transform)) != null ? T : true;
  }), d = computed(() => Xt(a.value)), c = computed(() => Xt(o.value)), p = ref(0), f = ref(0), m = ref(r.value), v = ref(i.value), y = shallowRef({}), h2 = ref(false), E = computed(() => {
    const T = {
      position: m.value,
      left: "0",
      top: "0"
    };
    if (!c.value)
      return T;
    const W = Ko(c.value, p.value), X = Ko(c.value, f.value);
    return s.value ? {
      ...T,
      transform: "translate(" + W + "px, " + X + "px)",
      ...wa(c.value) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: m.value,
      left: W + "px",
      top: X + "px"
    };
  });
  let $;
  function k() {
    d.value == null || c.value == null || _l(d.value, c.value, {
      middleware: n.value,
      placement: i.value,
      strategy: r.value
    }).then((T) => {
      p.value = T.x, f.value = T.y, m.value = T.strategy, v.value = T.placement, y.value = T.middlewareData, h2.value = true;
    });
  }
  function O() {
    typeof $ == "function" && ($(), $ = void 0);
  }
  function x() {
    if (O(), t === void 0) {
      k();
      return;
    }
    if (d.value != null && c.value != null) {
      $ = t(d.value, c.value, k);
      return;
    }
  }
  function I() {
    l.value || (h2.value = false);
  }
  return watch([n, i, r], k, {
    flush: "sync"
  }), watch([d, c], x, {
    flush: "sync"
  }), watch(l, I, {
    flush: "sync"
  }), getCurrentScope() && onScopeDispose(O), {
    x: shallowReadonly(p),
    y: shallowReadonly(f),
    strategy: shallowReadonly(m),
    placement: shallowReadonly(v),
    middlewareData: shallowReadonly(y),
    isPositioned: shallowReadonly(h2),
    floatingStyles: E,
    update: k
  };
}
var Ea = Symbol();
var El = {
  inheritAttrs: false
};
var ye = defineComponent({
  ...El,
  __name: "PopperContent",
  props: {
    side: { default: "bottom" },
    sideOffset: { default: 0 },
    align: { default: "center" },
    alignOffset: { default: 0 },
    avoidCollisions: { type: Boolean, default: true },
    collisionBoundary: { default: () => [] },
    collisionPadding: { default: 0 },
    arrowPadding: { default: 0 },
    sticky: { default: "partial" },
    hideWhenDetached: { type: Boolean, default: false },
    updatePositionStrategy: { default: "optimized" },
    onPlaced: {},
    prioritizePosition: { type: Boolean, default: false },
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(ro), t = ref(), l = ref(), n = ref(), { width: i, height: r } = $n(n), s = computed(
      () => o.side + (o.align !== "center" ? "-" + o.align : "")
    ), d = computed(() => typeof o.collisionPadding == "number" ? o.collisionPadding : { top: 0, right: 0, bottom: 0, left: 0, ...o.collisionPadding }), c = computed(() => Array.isArray(o.collisionBoundary) ? o.collisionBoundary : [o.collisionBoundary]), p = computed(() => ({
      padding: d.value,
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: c.value.length > 0
    })), f = on(() => [
      cl({
        mainAxis: o.sideOffset + r.value,
        alignmentAxis: o.alignOffset
      }),
      o.avoidCollisions && pl({
        mainAxis: true,
        crossAxis: !!o.prioritizePosition,
        limiter: o.sticky === "partial" ? fl() : void 0,
        ...p.value
      }),
      !o.prioritizePosition && o.avoidCollisions && ul({
        ...p.value
      }),
      ml({
        ...p,
        apply: ({ elements: T, rects: W, availableWidth: X, availableHeight: J }) => {
          const { width: F, height: Z } = W.reference, q = T.floating.style;
          Object.assign(T.floating.style, {
            maxWidth: `${X}px`,
            maxHeight: `${J}px`
          }), q.setProperty(
            "--radix-popper-available-width",
            `${X}px`
          ), q.setProperty(
            "--radix-popper-available-height",
            `${J}px`
          ), q.setProperty(
            "--radix-popper-anchor-width",
            `${F}px`
          ), q.setProperty(
            "--radix-popper-anchor-height",
            `${Z}px`
          );
        }
      }),
      n.value && bl({ element: n.value, padding: o.arrowPadding }),
      al({
        arrowWidth: i.value,
        arrowHeight: r.value
      }),
      o.hideWhenDetached && dl({ strategy: "referenceHidden", ...p.value })
    ]), { floatingStyles: m, placement: v, isPositioned: y, middlewareData: h2 } = wl(
      e.anchor,
      t,
      {
        strategy: "fixed",
        placement: s,
        whileElementsMounted: (...T) => gl(...T, {
          animationFrame: o.updatePositionStrategy === "always"
        }),
        middleware: f
      }
    ), E = computed(
      () => Wt(v.value)[0]
    ), $ = computed(
      () => Wt(v.value)[1]
    );
    watchEffect(() => {
      var T;
      y.value && ((T = o.onPlaced) == null || T.call(o));
    });
    const k = computed(
      () => {
        var T;
        return ((T = h2.value.arrow) == null ? void 0 : T.centerOffset) !== 0;
      }
    ), O = ref("");
    watchEffect(() => {
      l.value && (O.value = window.getComputedStyle(l.value).zIndex);
    });
    const x = computed(() => {
      var T;
      return ((T = h2.value.arrow) == null ? void 0 : T.x) ?? 0;
    }), I = computed(() => {
      var T;
      return ((T = h2.value.arrow) == null ? void 0 : T.y) ?? 0;
    });
    return provide(Ea, {
      placedSide: E,
      onArrowChange: (T) => {
        n.value = T;
      },
      arrowX: x,
      arrowY: I,
      shouldHideArrow: k
    }), (T, W) => {
      var X, J, F;
      return openBlock(), createElementBlock("div", {
        ref_key: "floatingRef",
        ref: t,
        "data-radix-popper-content-wrapper": "",
        style: normalizeStyle({
          ...unref(m),
          transform: unref(y) ? unref(m).transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: O.value,
          ["--radix-popper-transform-origin"]: [
            (X = unref(h2).transformOrigin) == null ? void 0 : X.x,
            (J = unref(h2).transformOrigin) == null ? void 0 : J.y
          ].join(" ")
        })
      }, [
        createVNode(unref(R), mergeProps(T.$attrs, {
          "as-child": o.asChild,
          "data-side": E.value,
          "data-align": $.value,
          style: {
            // if the PopperContent hasn't been placed yet (not all measurements done)
            // we prevent animations so that users's animation don't kick in too early referring wrong sides
            animation: unref(y) ? void 0 : "none",
            // hide the content if using the hide middleware and should be hidden
            opacity: (F = unref(h2).hide) != null && F.referenceHidden ? 0 : void 0
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
var Cl = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
};
var $l = {
  inheritAttrs: false
};
var Fe = defineComponent({
  ...$l,
  __name: "PopperArrow",
  props: {
    width: {},
    height: {},
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = inject(Ea), e = computed(
      () => o != null && o.placedSide ? Cl[o == null ? void 0 : o.placedSide.value] : ""
    );
    return (t, l) => {
      var n, i, r, s;
      return openBlock(), createElementBlock("span", {
        ref: (d) => {
          unref(o).onArrowChange(d);
        },
        style: normalizeStyle({
          position: "absolute",
          left: (n = unref(o).arrowX) != null && n.value ? `${(i = unref(o).arrowX) == null ? void 0 : i.value}px` : void 0,
          top: (r = unref(o).arrowY) != null && r.value ? `${(s = unref(o).arrowY) == null ? void 0 : s.value}px` : void 0,
          [e.value]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[unref(o).placedSide.value],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[unref(o).placedSide.value],
          visibility: unref(o).shouldHideArrow.value ? "hidden" : void 0
        })
      }, [
        createVNode(Jn, mergeProps(t.$attrs, { style: {
          display: "block"
        } }), null, 16)
      ], 4);
    };
  }
});
var co = Symbol();
var ai = defineComponent({
  __name: "TooltipRoot",
  props: {
    defaultOpen: { type: Boolean, default: false },
    open: { type: Boolean, default: void 0 },
    delayDuration: { default: 700 },
    disableHoverableContent: { type: Boolean }
  },
  emits: ["update:open"],
  setup(a, { emit: o }) {
    const e = a, t = H(e, "open", o, {
      defaultValue: e.defaultOpen,
      passive: true
    }), l = ref(false), n = computed(() => t.value ? l.value ? "delayed-open" : "instant-open" : "closed");
    return provide(co, {
      open: t,
      showTooltip: (i) => {
        l.value = i, t.value = true;
      },
      hideTooltip: () => t.value = false,
      delayMs: e.delayDuration,
      dataState: n,
      disableHoverableContent: computed(() => e.disableHoverableContent),
      contentId: Q()
    }), (i, r) => (openBlock(), createBlock(unref(me), null, {
      default: withCtx(() => [
        renderSlot(i.$slots, "default")
      ]),
      _: 3
    }));
  }
});
var ni = defineComponent({
  __name: "TooltipTrigger",
  props: {
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(co), { primitiveElement: t, currentElement: l } = B();
    return En(l, {
      delayEnter: e == null ? void 0 : e.delayMs,
      onHoverEnter: () => e == null ? void 0 : e.showTooltip(true),
      delayLeave: 0,
      onHoverLeave: () => e == null ? void 0 : e.hideTooltip(),
      disabled: e == null ? void 0 : e.disableHoverableContent
    }), (n, i) => (openBlock(), createBlock(unref(he), { asChild: "" }, {
      default: withCtx(() => {
        var r, s, d, c;
        return [
          createVNode(unref(G), {
            type: "button",
            ref_key: "primitiveElement",
            ref: t,
            "aria-describedby": (r = unref(e)) != null && r.open ? unref(e).contentId : void 0,
            "as-child": o.asChild,
            "data-state": (s = unref(e)) == null ? void 0 : s.dataState.value,
            "aria-expanded": ((d = unref(e)) == null ? void 0 : d.open.value) || false,
            onFocus: i[0] || (i[0] = (p) => {
              var f;
              return (f = unref(e)) == null ? void 0 : f.showTooltip(false);
            }),
            onBlur: (c = unref(e)) == null ? void 0 : c.hideTooltip
          }, {
            default: withCtx(() => [
              renderSlot(n.$slots, "default")
            ]),
            _: 3
          }, 8, ["aria-describedby", "as-child", "data-state", "aria-expanded", "onBlur"])
        ];
      }),
      _: 3
    }));
  }
});
var Ca = defineComponent({
  __name: "VisuallyHidden",
  setup(a) {
    return (o, e) => (openBlock(), createBlock(unref(ne), {
      style: normalizeStyle({
        // See: https://github.com/twbs/bootstrap/blob/master/scss/mixins/_screen-reader.scss
        position: "absolute",
        border: 0,
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        wordWrap: "normal"
      })
    }, {
      default: withCtx(() => [
        renderSlot(o.$slots, "default")
      ]),
      _: 3
    }, 8, ["style"]));
  }
});
var li = defineComponent({
  __name: "TooltipContent",
  props: {
    ariaLabel: {},
    asChild: { type: Boolean, default: false },
    side: { default: "top" },
    sideOffset: { default: 0 },
    align: { default: "center" },
    alignOffset: {},
    avoidCollisions: { type: Boolean, default: true },
    collisionBoundary: { default: () => [] },
    collisionPadding: { default: 0 },
    arrowPadding: { default: 0 },
    sticky: { default: "partial" },
    hideWhenDetached: { type: Boolean, default: false }
  },
  emits: ["escapeKeyDown", "pointerDownOutside"],
  setup(a, { emit: o }) {
    const e = a, t = ref(), l = inject(co);
    Se(t, () => {
      o("pointerDownOutside", new Event("pointerdown"));
    });
    function n(r) {
      o("escapeKeyDown", r);
    }
    const i = computed(() => {
      var c, p;
      if (e.ariaLabel)
        return e.ariaLabel;
      const r = (p = (c = useSlots()).default) == null ? void 0 : p.call(c);
      let s = "";
      function d(f) {
        typeof f.children == "string" ? s += f.children : Array.isArray(f.children) && f.children.forEach((m) => d(m));
      }
      return r == null || r.forEach((f) => d(f)), s;
    });
    return (r, s) => {
      var d;
      return (d = unref(l)) != null && d.open.value ? (openBlock(), createBlock(unref(ye), {
        key: 0,
        ref_key: "contentElement",
        ref: t,
        side: e.side,
        sideOffset: e.sideOffset,
        align: e.align,
        alignOffset: e.alignOffset,
        avoidCollisions: e.avoidCollisions,
        collisionBoundary: e.collisionBoundary,
        collisionPadding: e.collisionPadding,
        arrowPadding: e.arrowPadding,
        sticky: e.sticky,
        hideWhenDetached: e.hideWhenDetached,
        style: { "--radix-tooltip-content-transform-origin": `var(
        --radix-popper-transform-origin
      )`, "--radix-tooltip-content-available-width": `var(
        --radix-popper-available-width
      )`, "--radix-tooltip-content-available-height": `var(
        --radix-popper-available-height
      )`, "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)", "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)" },
        onKeydown: s[0] || (s[0] = withKeys((c) => n(c), ["esc"]))
      }, {
        default: withCtx(() => {
          var c, p;
          return [
            createVNode(unref(R), {
              "data-state": (c = unref(l)) == null ? void 0 : c.dataState.value,
              "data-side": e.side,
              "data-align": e.align,
              "as-child": e.asChild,
              role: "tooltip",
              tabindex: "-1"
            }, {
              default: withCtx(() => [
                renderSlot(r.$slots, "default")
              ]),
              _: 3
            }, 8, ["data-state", "data-side", "data-align", "as-child"]),
            createVNode(unref(Ca), {
              id: (p = unref(l)) == null ? void 0 : p.contentId,
              role: "tooltip"
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(i.value), 1)
              ]),
              _: 1
            }, 8, ["id"])
          ];
        }),
        _: 3
      }, 8, ["side", "sideOffset", "align", "alignOffset", "avoidCollisions", "collisionBoundary", "collisionPadding", "arrowPadding", "sticky", "hideWhenDetached"])) : createCommentVNode("", true);
    };
  }
});
var ri = defineComponent({
  __name: "TooltipArrow",
  props: {
    width: { default: 10 },
    height: { default: 5 },
    asChild: { type: Boolean, default: false }
  },
  setup(a) {
    const o = a;
    return (e, t) => (openBlock(), createBlock(unref(Fe), {
      "as-child": o.asChild,
      height: o.height,
      width: o.width
    }, null, 8, ["as-child", "height", "width"]));
  }
});
var po = Symbol();
var ii = defineComponent({
  __name: "HoverCardRoot",
  props: {
    defaultOpen: { type: Boolean, default: false },
    open: { type: Boolean, default: void 0 },
    openDelay: { default: 700 },
    closeDelay: { default: 300 }
  },
  emits: ["update:open"],
  setup(a, { emit: o }) {
    const e = a, t = H(e, "open", o, {
      defaultValue: e.defaultOpen,
      passive: true
    });
    return provide(po, {
      open: t,
      showTooltip: () => {
        t.value = true;
      },
      hideTooltip: () => {
        t.value = false;
      },
      openDelay: e.openDelay,
      closeDelay: e.closeDelay,
      isHover: false
    }), (l, n) => (openBlock(), createBlock(unref(me), null, {
      default: withCtx(() => [
        renderSlot(l.$slots, "default")
      ]),
      _: 3
    }));
  }
});
var si = defineComponent({
  __name: "HoverCardTrigger",
  props: {
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(po), { primitiveElement: t, currentElement: l } = B();
    async function n(r) {
      await wn(
        r,
        l.value,
        e == null ? void 0 : e.openDelay
      ) && (e == null || e.showTooltip());
    }
    async function i(r) {
      e.isHover = false, await Zo(r, e == null ? void 0 : e.closeDelay) && !(e != null && e.isHover) && (e == null || e.hideTooltip());
    }
    return (r, s) => (openBlock(), createBlock(unref(he), { asChild: "" }, {
      default: withCtx(() => {
        var d, c;
        return [
          createVNode(unref(G), {
            ref_key: "primitiveElement",
            ref: t,
            "as-child": o.asChild,
            "aria-expanded": ((d = unref(e)) == null ? void 0 : d.open.value) || false,
            "data-state": (c = unref(e)) != null && c.open.value ? "open" : "closed",
            onMouseover: s[0] || (s[0] = (p) => unref(e).isHover = true),
            onMouseenter: n,
            onMouseleave: i,
            style: { cursor: "default" }
          }, {
            default: withCtx(() => [
              renderSlot(r.$slots, "default")
            ]),
            _: 3
          }, 8, ["as-child", "aria-expanded", "data-state"])
        ];
      }),
      _: 3
    }));
  }
});
var ui = defineComponent({
  __name: "HoverCardPortal",
  props: {
    container: {}
  },
  setup(a) {
    const o = a;
    return (e, t) => (openBlock(), createBlock(pt, normalizeProps(guardReactiveProps(o)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var di = defineComponent({
  __name: "HoverCardContent",
  props: {
    side: { default: "bottom" },
    sideOffset: {},
    align: { default: "center" },
    alignOffset: {},
    avoidCollisions: { type: Boolean, default: true },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    onPlaced: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(po);
    async function t(l) {
      e.isHover = false, await Zo(l, e == null ? void 0 : e.closeDelay) && !(e != null && e.isHover) && (e == null || e.hideTooltip());
    }
    return (l, n) => {
      var i, r;
      return (i = unref(e)) != null && i.open.value ? (openBlock(), createBlock(unref(ye), mergeProps({ key: 0 }, o, {
        onMouseover: n[0] || (n[0] = (s) => unref(e).isHover = true),
        onMouseleave: t,
        "data-state": (r = unref(e)) != null && r.open.value ? "open" : "closed",
        "data-side": o.side,
        "data-align": o.align
      }), {
        default: withCtx(() => [
          renderSlot(l.$slots, "default")
        ]),
        _: 3
      }, 16, ["data-state", "data-side", "data-align"])) : createCommentVNode("", true);
    };
  }
});
var ci = defineComponent({
  __name: "HoverCardArrow",
  setup(a) {
    return (o, e) => (openBlock(), createBlock(unref(Fe)));
  }
});
var Lt = Symbol();
var pi = defineComponent({
  __name: "PopoverRoot",
  props: {
    defaultOpen: { type: Boolean, default: false },
    open: { type: Boolean, default: void 0 },
    modal: { type: Boolean, default: false }
  },
  emits: ["update:open"],
  setup(a, { emit: o }) {
    const e = a, t = H(e, "open", o, {
      defaultValue: e.defaultOpen,
      passive: true
    }), l = ref();
    return provide(Lt, {
      open: t,
      showPopover: () => {
        t.value = true;
      },
      hidePopover: () => {
        t.value = false;
      },
      triggerElement: l
    }), (n, i) => (openBlock(), createBlock(unref(me), null, {
      default: withCtx(() => [
        renderSlot(n.$slots, "default")
      ]),
      _: 3
    }));
  }
});
var fi = defineComponent({
  __name: "PopoverTrigger",
  props: {
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(Lt), { primitiveElement: t, currentElement: l } = B();
    onMounted(() => {
      e.triggerElement.value = l.value;
    });
    function n() {
      e != null && e.open.value ? e == null || e.hidePopover() : e == null || e.showPopover();
    }
    return (i, r) => (openBlock(), createBlock(unref(he), { asChild: "" }, {
      default: withCtx(() => {
        var s, d;
        return [
          createVNode(unref(G), {
            type: "button",
            ref_key: "primitiveElement",
            ref: t,
            "aria-expanded": ((s = unref(e)) == null ? void 0 : s.open.value) || false,
            "data-state": (d = unref(e)) != null && d.open.value ? "open" : "closed",
            "as-child": o.asChild,
            onClick: n
          }, {
            default: withCtx(() => [
              renderSlot(i.$slots, "default")
            ]),
            _: 3
          }, 8, ["aria-expanded", "data-state", "as-child"])
        ];
      }),
      _: 3
    }));
  }
});
var mi = defineComponent({
  __name: "PopoverPortal",
  props: {
    container: {}
  },
  setup(a) {
    const o = a;
    return (e, t) => (openBlock(), createBlock(pt, normalizeProps(guardReactiveProps(o)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var vi = defineComponent({
  __name: "PopoverContent",
  props: {
    forceMount: { type: Boolean },
    side: { default: "bottom" },
    sideOffset: {},
    align: { default: "center" },
    alignOffset: {},
    avoidCollisions: { type: Boolean, default: true },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    onPlaced: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(Lt), { primitiveElement: t, currentElement: l } = B();
    watchEffect(() => {
      l.value && (e != null && e.open.value ? (jt(l.value), window.addEventListener("keydown", n)) : e != null && e.triggerElement.value && (e == null || e.triggerElement.value.focus(), i()));
    }), Se(l, (r) => {
      e == null || e.hidePopover(), r.preventDefault(), r.stopPropagation();
    });
    function n(r) {
      r.key === "Escape" && (e == null || e.hidePopover());
    }
    function i() {
      window.removeEventListener("keydown", n);
    }
    return onUnmounted(() => {
      i();
    }), (r, s) => {
      var d;
      return (d = unref(e)) != null && d.open.value ? (openBlock(), createBlock(unref(ye), mergeProps({
        key: 0,
        ref_key: "primitiveElement",
        ref: t
      }, o), {
        default: withCtx(() => {
          var c, p;
          return [
            (c = unref(e)) != null && c.open.value ? (openBlock(), createBlock(unref(R), {
              key: 0,
              "data-state": (p = unref(e)) != null && p.open.value ? "open" : "closed",
              "data-side": o.side,
              "data-align": o.align,
              role: "tooltip",
              "as-child": o.asChild
            }, {
              default: withCtx(() => [
                renderSlot(r.$slots, "default")
              ]),
              _: 3
            }, 8, ["data-state", "data-side", "data-align", "as-child"])) : createCommentVNode("", true)
          ];
        }),
        _: 3
      }, 16)) : createCommentVNode("", true);
    };
  }
});
var hi = defineComponent({
  __name: "PopoverArrow",
  setup(a) {
    return (o, e) => (openBlock(), createBlock(unref(Fe)));
  }
});
var yi = defineComponent({
  __name: "PopoverClose",
  props: {
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(Lt);
    return (t, l) => {
      var n, i, r;
      return openBlock(), createBlock(unref(G), {
        type: "button",
        "aria-expanded": ((n = unref(e)) == null ? void 0 : n.open.value) || false,
        "data-state": (i = unref(e)) != null && i.open.value ? "open" : "closed",
        "as-child": o.asChild,
        onClick: (r = unref(e)) == null ? void 0 : r.hidePopover
      }, {
        default: withCtx(() => [
          renderSlot(t.$slots, "default")
        ]),
        _: 3
      }, 8, ["aria-expanded", "data-state", "as-child", "onClick"]);
    };
  }
});
var Be = Symbol();
var gi = defineComponent({
  __name: "DropdownMenuRoot",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modelValue: { type: Boolean },
    orientation: { default: "vertical" },
    dir: {}
  },
  emits: ["update:modelValue"],
  setup(a, { emit: o }) {
    const e = a, t = H(e, "modelValue", o, {
      passive: true
    }), l = ref(), n = ref();
    return provide(Be, {
      selectedElement: l,
      changeSelected: (i) => {
        l.value = i, l.value.focus();
      },
      modelValue: t,
      showTooltip: () => {
        t.value = true;
      },
      hideTooltip: () => {
        t.value = false;
      },
      triggerElement: n,
      itemsArray: [],
      orientation: e.orientation
    }), (i, r) => (openBlock(), createBlock(unref(me), null, {
      default: withCtx(() => [
        renderSlot(i.$slots, "default")
      ]),
      _: 3
    }));
  }
});
var _i = defineComponent({
  __name: "DropdownMenuTrigger",
  props: {
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(
      Be
    ), { primitiveElement: t, currentElement: l } = B();
    onMounted(() => {
      e.triggerElement.value = l.value;
    });
    function n() {
      e != null && e.modelValue.value ? e == null || e.hideTooltip() : e == null || e.showTooltip();
    }
    async function i(r) {
      var s;
      (r.key === "ArrowDown" || r.key === "Enter" || r.keyCode === 32) && (e == null || e.showTooltip(), await nextTick(), e == null || e.changeSelected((s = e.itemsArray) == null ? void 0 : s[0]));
    }
    return (r, s) => (openBlock(), createBlock(unref(he), { asChild: "" }, {
      default: withCtx(() => {
        var d, c;
        return [
          createVNode(unref(G), {
            type: "button",
            ref_key: "primitiveElement",
            ref: t,
            "aria-expanded": ((d = unref(e)) == null ? void 0 : d.modelValue.value) || false,
            "data-state": (c = unref(e)) != null && c.modelValue.value ? "open" : "closed",
            "as-child": o.asChild,
            onClick: n,
            onKeydown: withModifiers(i, ["prevent"])
          }, {
            default: withCtx(() => [
              renderSlot(r.$slots, "default")
            ]),
            _: 3
          }, 8, ["aria-expanded", "data-state", "as-child", "onKeydown"])
        ];
      }),
      _: 3
    }));
  }
});
var fo = (a, o) => {
  const e = a.__vccOpts || a;
  for (const [t, l] of o)
    e[t] = l;
  return e;
};
var Sl = {};
function Al(a, o) {
  return openBlock(), createBlock(Teleport, { to: "body" }, [
    renderSlot(a.$slots, "default")
  ]);
}
var bi = fo(Sl, [["render", Al]]);
var wi = defineComponent({
  __name: "DropdownMenuContent",
  props: {
    loop: { type: Boolean },
    side: { default: "bottom" },
    sideOffset: {},
    align: { default: "center" },
    alignOffset: {},
    avoidCollisions: { type: Boolean, default: true },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    onPlaced: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(Be), { primitiveElement: t, currentElement: l } = B(), { createCollection: n, getItems: i } = ie();
    n(l), watchEffect(() => {
      l.value && (e != null && e.modelValue.value ? (document.querySelector("body").style.pointerEvents = "none", e.itemsArray = i(l.value)) : e != null && e.triggerElement.value && r());
    });
    function r() {
      document.querySelector("body").style.pointerEvents = "", setTimeout(() => {
        var s;
        (s = e == null ? void 0 : e.triggerElement.value) == null || s.focus();
      }, 0);
    }
    return Se(l, (s) => {
      s.target.closest('[role="menuitem"]') || e == null || e.hideTooltip();
    }), (s, d) => {
      var c;
      return (c = unref(e)) != null && c.modelValue.value ? (openBlock(), createBlock(unref(ye), normalizeProps(mergeProps({ key: 0 }, o)), {
        default: withCtx(() => {
          var p;
          return [
            createVNode(unref(R), {
              ref_key: "primitiveElement",
              ref: t,
              "data-state": (p = unref(e)) != null && p.modelValue.value ? "open" : "closed",
              "data-side": o.side,
              "data-align": o.align,
              role: "tooltip",
              "as-child": o.asChild,
              style: { "pointer-events": "auto" }
            }, {
              default: withCtx(() => [
                renderSlot(s.$slots, "default")
              ]),
              _: 3
            }, 8, ["data-state", "data-side", "data-align", "as-child"])
          ];
        }),
        _: 3
      }, 16)) : createCommentVNode("", true);
    };
  }
});
var Ei = defineComponent({
  __name: "DropdownMenuArrow",
  setup(a) {
    return (o, e) => (openBlock(), createBlock(unref(Fe)));
  }
});
var ot = Symbol();
var Ci = defineComponent({
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
  setup(a, { emit: o }) {
    const e = a, t = H(e, "modelValue", o, {
      passive: true
    }), l = ref(), n = inject(ot);
    return provide(ot, {
      modelValue: t,
      showTooltip: () => {
        t.value = true;
      },
      hideTooltip: () => {
        t.value = false;
      },
      triggerElement: l,
      itemsArray: [],
      orientation: e.orientation,
      triggerId: Q(),
      contentId: Q(),
      parentContext: n
    }), (i, r) => (openBlock(), createBlock(unref(me), null, {
      default: withCtx(() => [
        renderSlot(i.$slots, "default")
      ]),
      _: 3
    }));
  }
});
var $i = defineComponent({
  __name: "DropdownMenuItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(
      Be
    ), t = inject(
      ot
    );
    function l() {
      e != null && e.selectedElement.value && e.hideTooltip();
    }
    function n() {
      e == null || e.hideTooltip();
    }
    return (i, r) => {
      var s;
      return openBlock(), createBlock(se, {
        disabled: o.disabled,
        rootProvider: unref(e),
        subProvider: unref(t),
        orientation: (s = unref(e)) == null ? void 0 : s.orientation,
        "as-child": o.asChild,
        onHandleClick: l,
        onEscapeKeydown: n
      }, {
        default: withCtx(() => [
          renderSlot(i.$slots, "default")
        ]),
        _: 3
      }, 8, ["disabled", "rootProvider", "subProvider", "orientation", "as-child"]);
    };
  }
});
var kl = Symbol();
var Si = defineComponent({
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
    modelValue: {},
    asChild: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(a, { emit: o }) {
    const e = a, { primitiveElement: t, currentElement: l } = B();
    return provide(kl, {
      type: e.type,
      modelValue: toRef(() => e.modelValue),
      changeModelValue: (n) => {
        if (e.type === "single")
          o("update:modelValue", n);
        else {
          let i = e.modelValue;
          if (i.includes(n)) {
            let r = i.findIndex((s) => s === n);
            i.splice(r, 1);
          } else
            i.push(n);
          o("update:modelValue", i);
        }
      },
      parentElement: l
    }), (n, i) => (openBlock(), createBlock(unref(R), {
      ref_key: "primitiveElement",
      ref: t,
      role: "group",
      dir: e.dir,
      "as-child": e.asChild,
      "aria-label": "Text alignment"
    }, {
      default: withCtx(() => [
        renderSlot(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["dir", "as-child"]));
  }
});
var Ai = defineComponent({
  __name: "DropdownMenuSeparator",
  props: {
    orientation: {},
    decorative: { type: Boolean },
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a;
    return (e, t) => (openBlock(), createBlock(Xe, normalizeProps(guardReactiveProps(o)), null, 16));
  }
});
var mo = Symbol();
var Pl = ["id", "checked", "name", "disabled"];
var ki = defineComponent({
  __name: "DropdownMenuCheckboxItem",
  props: {
    checked: { type: Boolean },
    modelValue: { type: Boolean },
    id: {},
    name: {},
    value: {},
    disabled: { type: Boolean },
    onSelect: {},
    textValue: {},
    asChild: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(a, { emit: o }) {
    const e = a, t = inject(
      Be
    ), l = H(e, "modelValue", o, {
      passive: true
    }), n = computed(() => l.value ? "checked" : "unchecked");
    function i() {
      l.value = !l.value;
    }
    function r() {
      t == null || t.hideTooltip();
    }
    return provide(mo, {
      modelValue: l
    }), (s, d) => {
      var c;
      return openBlock(), createBlock(se, {
        ref: "currentElement",
        disabled: e.disabled,
        rootProvider: unref(t),
        orientation: (c = unref(t)) == null ? void 0 : c.orientation,
        onHandleClick: i,
        onEscapeKeydown: r,
        role: "menuitemcheckbox",
        "data-state": n.value,
        "as-child": e.asChild,
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
          }), null, 16, Pl),
          renderSlot(s.$slots, "default")
        ]),
        _: 3
      }, 8, ["disabled", "rootProvider", "orientation", "data-state", "as-child", "aria-checked"]);
    };
  }
});
var Pi = defineComponent({
  __name: "DropdownMenuItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(mo);
    return (t, l) => {
      var n;
      return (n = unref(e)) != null && n.modelValue.value ? (openBlock(), createBlock(unref(ne), mergeProps({ key: 0 }, o, { style: { "pointer-events": "none" } }), {
        default: withCtx(() => [
          renderSlot(t.$slots, "default")
        ]),
        _: 3
      }, 16)) : createCommentVNode("", true);
    };
  }
});
var Oi = defineComponent({
  __name: "DropdownMenuLabel",
  props: {
    for: {},
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a;
    return (e, t) => (openBlock(), createBlock(unref(ut), normalizeProps(guardReactiveProps(o)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var $a = "RadioGroup";
var Ti = defineComponent({
  __name: "DropdownMenuRadioGroup",
  props: {
    value: {},
    defaultValue: {},
    modelValue: {},
    asChild: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(a, { emit: o }) {
    const e = a, { primitiveElement: t, currentElement: l } = B(), n = H(e, "modelValue", o, {
      passive: true
    });
    return provide($a, {
      modelValue: n,
      changeModelValue: (i) => {
        n.value = i;
      },
      parentElement: l
    }), (i, r) => (openBlock(), createBlock(unref(R), {
      ref_key: "primitiveElement",
      ref: t,
      role: "radiogroup",
      "aria-label": "radiogroup",
      "as-child": e.asChild
    }, {
      default: withCtx(() => [
        renderSlot(i.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child"]));
  }
});
var Bi = defineComponent({
  __name: "DropdownMenuRadioItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    id: {},
    name: {},
    onSelect: {},
    textValue: {},
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(
      Be
    ), t = inject(
      $a
    ), l = computed(() => {
      var s;
      return ((s = t == null ? void 0 : t.modelValue) == null ? void 0 : s.value) === o.value ? "on" : "off";
    });
    function n() {
      if (e != null && e.selectedElement.value)
        return t == null ? void 0 : t.changeModelValue(o.value);
    }
    function i() {
      e == null || e.hideTooltip();
    }
    const r = computed(
      () => {
        var s;
        return ((s = t == null ? void 0 : t.modelValue) == null ? void 0 : s.value) === o.value;
      }
    );
    return provide(mo, {
      modelValue: r
    }), (s, d) => {
      var c;
      return openBlock(), createBlock(se, {
        disabled: o.disabled,
        rootProvider: unref(e),
        orientation: (c = unref(e)) == null ? void 0 : c.orientation,
        "data-radix-vue-radio-value": o.value,
        onHandleClick: n,
        onEscapeKeydown: i,
        onClick: n,
        role: "menuitemradio",
        "data-state": l.value,
        "as-child": o.asChild
      }, {
        default: withCtx(() => [
          renderSlot(s.$slots, "default")
        ]),
        _: 3
      }, 8, ["disabled", "rootProvider", "orientation", "data-radix-vue-radio-value", "data-state", "as-child"]);
    };
  }
});
var xi = defineComponent({
  __name: "DropdownMenuSubContent",
  props: {
    loop: { type: Boolean },
    side: { default: "right" },
    sideOffset: {},
    align: { default: "start" },
    alignOffset: {},
    avoidCollisions: { type: Boolean, default: true },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    onPlaced: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(
      Be
    ), t = inject(
      ot
    ), { primitiveElement: l, currentElement: n } = B(), { createCollection: i } = ie();
    i(n), watchEffect(() => {
      n.value && t != null && t.modelValue.value && r();
    }), watch(
      () => e == null ? void 0 : e.selectedElement.value,
      (s) => {
        var c;
        if (!(t != null && t.modelValue.value))
          return;
        const d = Array.from(
          ((c = s == null ? void 0 : s.closest('[role="tooltip"]')) == null ? void 0 : c.querySelectorAll(
            "[data-radix-vue-collection-item]:not([data-disabled])"
          )) ?? []
        );
        d != null && d.length && d.includes(t.triggerElement.value) && (e == null ? void 0 : e.selectedElement.value) !== (t == null ? void 0 : t.triggerElement.value) && (t == null || t.hideTooltip());
      }
    );
    function r() {
      const s = Array.from(
        n.value.querySelectorAll(
          "[data-radix-vue-collection-item]:not([data-disabled])"
        )
      );
      return t.itemsArray = s, s;
    }
    return Se(n, (s) => {
      s.target.closest('[role="menuitem"]') || t == null || t.hideTooltip();
    }), (s, d) => {
      var c;
      return (c = unref(t)) != null && c.modelValue.value ? (openBlock(), createBlock(unref(ye), normalizeProps(mergeProps({ key: 0 }, o)), {
        default: withCtx(() => {
          var p;
          return [
            createVNode(unref(R), {
              ref_key: "primitiveElement",
              ref: l,
              "data-state": (p = unref(t)) != null && p.modelValue.value ? "open" : "closed",
              "data-side": o.side,
              "data-align": o.align,
              "data-orientation": unref(t).orientation,
              "aria-labelledby": unref(t).triggerId,
              role: "tooltip",
              "as-child": o.asChild,
              style: { "pointer-events": "auto" }
            }, {
              default: withCtx(() => [
                renderSlot(s.$slots, "default")
              ]),
              _: 3
            }, 8, ["data-state", "data-side", "data-align", "data-orientation", "aria-labelledby", "as-child"])
          ];
        }),
        _: 3
      }, 16)) : createCommentVNode("", true);
    };
  }
});
var Di = defineComponent({
  __name: "DropdownMenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(
      Be
    ), t = inject(
      ot
    ), { primitiveElement: l, currentElement: n } = B();
    onMounted(() => {
      t.triggerElement.value = n.value;
    });
    async function i() {
      var f;
      t == null || t.showTooltip(), await nextTick();
      const p = (f = t == null ? void 0 : t.itemsArray) == null ? void 0 : f[0];
      e.selectedElement.value = p, p == null || p.focus();
    }
    function r() {
      t != null && t.modelValue.value || i();
    }
    async function s(p) {
      p.key === "ArrowRight" && i();
    }
    const d = computed(() => t != null && t.modelValue.value ? "open" : "closed");
    function c() {
      return t == null ? void 0 : t.showTooltip();
    }
    return (p, f) => (openBlock(), createBlock(unref(he), { asChild: "" }, {
      default: withCtx(() => {
        var m, v, y, h2, E;
        return [
          createVNode(se, {
            ref_key: "primitiveElement",
            ref: l,
            id: (m = unref(t)) == null ? void 0 : m.triggerId,
            rootProvider: unref(e),
            subProvider: (v = unref(t)) == null ? void 0 : v.parentContext,
            "aria-expanded": (y = unref(t)) == null ? void 0 : y.modelValue.value,
            "aria-controls": (h2 = unref(t)) == null ? void 0 : h2.contentId,
            "data-state": d.value,
            "data-orientation": (E = unref(e)) == null ? void 0 : E.orientation,
            "as-child": o.asChild,
            "aria-haspopup": "menu",
            onHandleClick: r,
            onMouseover: c,
            onHorizontalKeydown: s
          }, {
            default: withCtx(() => [
              renderSlot(p.$slots, "default")
            ]),
            _: 3
          }, 8, ["id", "rootProvider", "subProvider", "aria-expanded", "aria-controls", "data-state", "data-orientation", "as-child"])
        ];
      }),
      _: 3
    }));
  }
});
var xe = Symbol();
var Mi = defineComponent({
  __name: "ContextMenuRoot",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modelValue: { type: Boolean },
    orientation: { default: "vertical" },
    dir: {}
  },
  emits: ["update:modelValue"],
  setup(a, { emit: o }) {
    const e = a, t = H(e, "modelValue", o, {
      passive: true
    }), l = ref(), n = ref(), i = ref(0), r = ref(0);
    return provide(xe, {
      selectedElement: l,
      changeSelected: (s) => {
        l.value = s, l.value.focus();
      },
      modelValue: t,
      showTooltip: () => {
        t.value = true;
      },
      hideTooltip: () => {
        t.value = false;
      },
      triggerElement: n,
      itemsArray: [],
      orientation: e.orientation,
      clientX: i,
      clientY: r
    }), (s, d) => (openBlock(), createBlock(unref(me), null, {
      default: withCtx(() => [
        renderSlot(s.$slots, "default")
      ]),
      _: 3
    }));
  }
});
var Ri = defineComponent({
  __name: "ContextMenuTrigger",
  props: {
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(
      xe
    ), t = {
      getBoundingClientRect() {
        return {
          width: 0,
          height: 0,
          x: e == null ? void 0 : e.clientX.value,
          y: e == null ? void 0 : e.clientY.value,
          top: e == null ? void 0 : e.clientY.value,
          left: e == null ? void 0 : e.clientX.value,
          right: e == null ? void 0 : e.clientX.value,
          bottom: e == null ? void 0 : e.clientY.value
        };
      }
    };
    function l(n) {
      e != null && e.modelValue.value ? e == null || e.hideTooltip() : (e.clientX.value = n.clientX, e.clientY.value = n.clientY, e == null || e.showTooltip());
    }
    return onMounted(() => {
      e.triggerElement.value = t;
    }), (n, i) => (openBlock(), createBlock(unref(he), {
      element: t,
      asChild: ""
    }, {
      default: withCtx(() => {
        var r, s;
        return [
          createVNode(unref(G), {
            type: "button",
            "aria-expanded": ((r = unref(e)) == null ? void 0 : r.modelValue.value) || false,
            "data-state": (s = unref(e)) != null && s.modelValue.value ? "open" : "closed",
            "as-child": o.asChild,
            onContextmenu: withModifiers(l, ["prevent"])
          }, {
            default: withCtx(() => [
              renderSlot(n.$slots, "default")
            ]),
            _: 3
          }, 8, ["aria-expanded", "data-state", "as-child", "onContextmenu"])
        ];
      }),
      _: 3
    }));
  }
});
var Ol = {};
function Tl(a, o) {
  return openBlock(), createBlock(Teleport, { to: "body" }, [
    renderSlot(a.$slots, "default")
  ]);
}
var Ii = fo(Ol, [["render", Tl]]);
var Li = defineComponent({
  __name: "ContextMenuContent",
  props: {
    loop: { type: Boolean },
    side: { default: "bottom" },
    sideOffset: {},
    align: { default: "start" },
    alignOffset: {},
    avoidCollisions: { type: Boolean, default: true },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    onPlaced: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(xe), { primitiveElement: t, currentElement: l } = B(), { createCollection: n, getItems: i } = ie();
    n(l), watchEffect(() => {
      l.value && (e != null && e.modelValue.value ? (e.itemsArray = i(l.value), window.addEventListener("keydown", d), window.addEventListener("scroll", s)) : r());
    }), watchEffect(() => {
      e != null && e.selectedElement.value && r();
    });
    function r() {
      window.removeEventListener("keydown", d), window.removeEventListener("scroll", s);
    }
    Se(l, (c) => {
      c.target.closest('[role="menuitem"]') || e == null || e.hideTooltip();
    });
    function s() {
      e == null || e.hideTooltip(), window.removeEventListener("scroll", s);
    }
    async function d(c) {
      var p, f, m;
      if (c.preventDefault(), c.key === "ArrowDown" || c.key === "Enter" || c.keyCode === 32)
        e == null || e.changeSelected((p = e.itemsArray) == null ? void 0 : p[0]), (f = e == null ? void 0 : e.selectedElement.value) == null || f.focus();
      else if (c.key === "ArrowUp") {
        const v = (m = e == null ? void 0 : e.itemsArray) == null ? void 0 : m[(e == null ? void 0 : e.itemsArray.length) - 1];
        e == null || e.changeSelected(v), v == null || v.focus();
      }
      window.removeEventListener("keydown", d);
    }
    return (c, p) => {
      var f;
      return (f = unref(e)) != null && f.modelValue.value ? (openBlock(), createBlock(unref(ye), mergeProps({ key: 0 }, o, { "prioritize-position": "" }), {
        default: withCtx(() => {
          var m;
          return [
            createVNode(unref(R), {
              ref_key: "primitiveElement",
              ref: t,
              "data-state": (m = unref(e)) != null && m.modelValue.value ? "open" : "closed",
              "data-side": o.side,
              "data-align": o.align,
              role: "tooltip",
              asChild: o.asChild,
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
var Ni = defineComponent({
  __name: "ContextMenuArrow",
  setup(a) {
    return (o, e) => (openBlock(), createBlock(unref(Fe)));
  }
});
var at = Symbol();
var Ki = defineComponent({
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
  setup(a, { emit: o }) {
    const e = a, t = H(e, "modelValue", o, {
      passive: true
    }), l = ref(), n = inject(at);
    return provide(at, {
      modelValue: t,
      showTooltip: () => {
        t.value = true;
      },
      hideTooltip: () => {
        t.value = false;
      },
      triggerElement: l,
      itemsArray: [],
      orientation: e.orientation,
      triggerId: Q(),
      contentId: Q(),
      parentContext: n
    }), (i, r) => (openBlock(), createBlock(unref(me), null, {
      default: withCtx(() => [
        renderSlot(i.$slots, "default")
      ]),
      _: 3
    }));
  }
});
var Hi = defineComponent({
  __name: "ContextMenuItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(
      xe
    ), t = inject(
      at
    );
    function l() {
      e != null && e.selectedElement.value && e.hideTooltip();
    }
    function n() {
      e == null || e.hideTooltip();
    }
    return (i, r) => {
      var s;
      return openBlock(), createBlock(se, {
        disabled: o.disabled,
        rootProvider: unref(e),
        subProvider: unref(t),
        orientation: (s = unref(e)) == null ? void 0 : s.orientation,
        "as-child": o.asChild,
        onHandleClick: l,
        onEscapeKeydown: n
      }, {
        default: withCtx(() => [
          renderSlot(i.$slots, "default")
        ]),
        _: 3
      }, 8, ["disabled", "rootProvider", "subProvider", "orientation", "as-child"]);
    };
  }
});
var Bl = Symbol();
var Fi = defineComponent({
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
    modelValue: {},
    asChild: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(a, { emit: o }) {
    const e = a, { primitiveElement: t, currentElement: l } = B();
    return provide(Bl, {
      type: e.type,
      modelValue: toRef(() => e.modelValue),
      changeModelValue: (n) => {
        if (e.type === "single")
          o("update:modelValue", n);
        else {
          let i = e.modelValue;
          if (i.includes(n)) {
            let r = i.findIndex((s) => s === n);
            i.splice(r, 1);
          } else
            i.push(n);
          o("update:modelValue", i);
        }
      },
      parentElement: l
    }), (n, i) => (openBlock(), createBlock(unref(R), {
      ref_key: "primitiveElement",
      ref: t,
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
var zi = defineComponent({
  __name: "ContextMenuSeparator",
  props: {
    orientation: {},
    decorative: { type: Boolean },
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a;
    return (e, t) => (openBlock(), createBlock(Xe, normalizeProps(guardReactiveProps(o)), null, 16));
  }
});
var vo = Symbol();
var xl = ["id", "checked", "name", "disabled"];
var Wi = defineComponent({
  __name: "ContextMenuCheckboxItem",
  props: {
    checked: { type: Boolean },
    modelValue: { type: Boolean },
    id: {},
    name: {},
    value: {},
    disabled: { type: Boolean },
    onSelect: {},
    textValue: {},
    asChild: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(a, { emit: o }) {
    const e = a, t = inject(
      xe
    ), l = H(e, "modelValue", o, {
      passive: true
    }), n = computed(() => l.value ? "checked" : "unchecked");
    function i() {
      l.value = !l.value;
    }
    function r() {
      t == null || t.hideTooltip();
    }
    return provide(vo, {
      modelValue: l
    }), (s, d) => {
      var c;
      return openBlock(), createBlock(se, {
        ref: "currentElement",
        disabled: e.disabled,
        rootProvider: unref(t),
        orientation: (c = unref(t)) == null ? void 0 : c.orientation,
        "as-child": e.asChild,
        onHandleClick: i,
        onEscapeKeydown: r,
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
          }), null, 16, xl),
          renderSlot(s.$slots, "default")
        ]),
        _: 3
      }, 8, ["disabled", "rootProvider", "orientation", "as-child", "data-state", "aria-checked"]);
    };
  }
});
var Yi = defineComponent({
  __name: "ContextMenuItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(vo);
    return (t, l) => {
      var n;
      return (n = unref(e)) != null && n.modelValue.value ? (openBlock(), createBlock(unref(ne), {
        key: 0,
        "as-child": o.asChild,
        style: { "pointer-events": "none" }
      }, {
        default: withCtx(() => [
          renderSlot(t.$slots, "default")
        ]),
        _: 3
      }, 8, ["as-child"])) : createCommentVNode("", true);
    };
  }
});
var Ui = defineComponent({
  __name: "ContextMenuLabel",
  props: {
    for: {},
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a;
    return (e, t) => (openBlock(), createBlock(unref(ut), normalizeProps(guardReactiveProps(o)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Sa = "RadioGroup";
var qi = defineComponent({
  __name: "ContextMenuRadioGroup",
  props: {
    value: {},
    defaultValue: {},
    modelValue: {},
    asChild: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(a, { emit: o }) {
    const e = a, { primitiveElement: t, currentElement: l } = B(), n = H(e, "modelValue", o, {
      passive: true
    });
    return provide(Sa, {
      modelValue: n,
      changeModelValue: (i) => {
        n.value = i;
      },
      parentElement: l
    }), (i, r) => (openBlock(), createBlock(unref(R), {
      ref_key: "primitiveElement",
      ref: t,
      role: "radiogroup",
      "aria-label": "radiogroup",
      "as-child": e.asChild
    }, {
      default: withCtx(() => [
        renderSlot(i.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child"]));
  }
});
var Xi = defineComponent({
  __name: "ContextMenuRadioItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    id: {},
    name: {},
    onSelect: {},
    textValue: {},
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(
      xe
    ), t = inject(
      Sa
    ), l = computed(() => {
      var s;
      return ((s = t == null ? void 0 : t.modelValue) == null ? void 0 : s.value) === o.value ? "on" : "off";
    });
    function n() {
      if (e != null && e.selectedElement.value)
        return t == null ? void 0 : t.changeModelValue(o.value);
    }
    function i() {
      e == null || e.hideTooltip();
    }
    const r = computed(
      () => {
        var s;
        return ((s = t == null ? void 0 : t.modelValue) == null ? void 0 : s.value) === o.value;
      }
    );
    return provide(vo, {
      modelValue: r
    }), (s, d) => {
      var c;
      return openBlock(), createBlock(se, {
        disabled: o.disabled,
        rootProvider: unref(e),
        orientation: (c = unref(e)) == null ? void 0 : c.orientation,
        "data-radix-vue-radio-value": o.value,
        "as-child": o.asChild,
        onHandleClick: n,
        onEscapeKeydown: i,
        onClick: n,
        role: "menuitemradio",
        "data-state": l.value
      }, {
        default: withCtx(() => [
          renderSlot(s.$slots, "default")
        ]),
        _: 3
      }, 8, ["disabled", "rootProvider", "orientation", "data-radix-vue-radio-value", "as-child", "data-state"]);
    };
  }
});
var Gi = defineComponent({
  __name: "ContextMenuSubContent",
  props: {
    loop: { type: Boolean },
    side: { default: "right" },
    sideOffset: {},
    align: { default: "start" },
    alignOffset: {},
    avoidCollisions: { type: Boolean, default: true },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    onPlaced: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(
      xe
    ), t = inject(
      at
    ), { primitiveElement: l, currentElement: n } = B(), { createCollection: i } = ie();
    i(n), watchEffect(() => {
      n.value && t != null && t.modelValue.value && r();
    }), watch(
      () => e == null ? void 0 : e.selectedElement.value,
      (s) => {
        var c;
        if (!(t != null && t.modelValue.value))
          return;
        const d = Array.from(
          ((c = s == null ? void 0 : s.closest('[role="tooltip"]')) == null ? void 0 : c.querySelectorAll(
            "[data-radix-vue-collection-item]:not([data-disabled])"
          )) ?? []
        );
        d != null && d.length && d.includes(t.triggerElement.value) && (e == null ? void 0 : e.selectedElement.value) !== (t == null ? void 0 : t.triggerElement.value) && (t == null || t.hideTooltip());
      }
    );
    function r() {
      const s = Array.from(
        n.value.querySelectorAll(
          "[data-radix-vue-collection-item]:not([data-disabled])"
        )
      );
      return t.itemsArray = s, s;
    }
    return Se(n, (s) => {
      s.target.closest('[role="menuitem"]') || t == null || t.hideTooltip();
    }), (s, d) => {
      var c;
      return (c = unref(t)) != null && c.modelValue.value ? (openBlock(), createBlock(unref(ye), normalizeProps(mergeProps({ key: 0 }, o)), {
        default: withCtx(() => {
          var p;
          return [
            createVNode(unref(R), {
              ref_key: "primitiveElement",
              ref: l,
              "data-state": (p = unref(t)) != null && p.modelValue.value ? "open" : "closed",
              "data-side": o.side,
              "data-align": o.align,
              "data-orientation": unref(t).orientation,
              "aria-labelledby": unref(t).triggerId,
              role: "tooltip",
              "as-child": o.asChild,
              style: { "pointer-events": "auto" }
            }, {
              default: withCtx(() => [
                renderSlot(s.$slots, "default")
              ]),
              _: 3
            }, 8, ["data-state", "data-side", "data-align", "data-orientation", "aria-labelledby", "as-child"])
          ];
        }),
        _: 3
      }, 16)) : createCommentVNode("", true);
    };
  }
});
var Ji = defineComponent({
  __name: "ContextMenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(
      xe
    ), t = inject(
      at
    ), { primitiveElement: l, currentElement: n } = B();
    onMounted(() => {
      t.triggerElement.value = n.value;
    });
    async function i() {
      var f;
      t == null || t.showTooltip(), await nextTick();
      const p = (f = t == null ? void 0 : t.itemsArray) == null ? void 0 : f[0];
      e.selectedElement.value = p, p == null || p.focus();
    }
    function r() {
      t != null && t.modelValue.value || i();
    }
    async function s(p) {
      p.key === "ArrowRight" && i();
    }
    const d = computed(() => t != null && t.modelValue.value ? "open" : "closed");
    function c() {
      return t == null ? void 0 : t.showTooltip();
    }
    return (p, f) => (openBlock(), createBlock(unref(he), { asChild: "" }, {
      default: withCtx(() => {
        var m, v, y, h2, E;
        return [
          createVNode(se, {
            ref_key: "primitiveElement",
            ref: l,
            id: (m = unref(t)) == null ? void 0 : m.triggerId,
            rootProvider: unref(e),
            subProvider: (v = unref(t)) == null ? void 0 : v.parentContext,
            "aria-expanded": (y = unref(t)) == null ? void 0 : y.modelValue.value,
            "aria-controls": (h2 = unref(t)) == null ? void 0 : h2.contentId,
            "data-state": d.value,
            "as-child": o.asChild,
            "data-orientation": (E = unref(e)) == null ? void 0 : E.orientation,
            "aria-haspopup": "menu",
            onHandleClick: r,
            onMouseover: c,
            onHorizontalKeydown: s
          }, {
            default: withCtx(() => [
              renderSlot(p.$slots, "default")
            ]),
            _: 3
          }, 8, ["id", "rootProvider", "subProvider", "aria-expanded", "aria-controls", "data-state", "as-child", "data-orientation"])
        ];
      }),
      _: 3
    }));
  }
});
var ft = Symbol();
var Zi = defineComponent({
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
  setup(a, { emit: o }) {
    const e = a, t = H(e, "modelValue", o, {
      defaultValue: e.defaultValue
    }), l = ref(), n = ref(), i = ref(false);
    provide(ft, {
      selectedElement: l,
      changeSelected: (s) => {
        l.value = s, l.value.focus();
      },
      modelValue: t,
      changeModelValue: r,
      isOpen: i,
      showTooltip: () => {
        i.value = true;
      },
      hideTooltip: () => {
        i.value = false;
      },
      triggerElement: n,
      itemsArray: [],
      orientation: e.orientation,
      multiple: e.multiple
    });
    function r(s) {
      if (e.multiple) {
        let d = [...t.value];
        if (d.includes(s)) {
          let c = d.findIndex((p) => p === s);
          d.splice(c, 1);
        } else
          d.push(s);
        t.value = d;
      } else
        t.value = s;
    }
    return (s, d) => (openBlock(), createBlock(unref(me), null, {
      default: withCtx(() => [
        renderSlot(s.$slots, "default")
      ]),
      _: 3
    }));
  }
});
var Qi = defineComponent({
  __name: "SelectTrigger",
  props: {
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(ft), { primitiveElement: t, currentElement: l } = B();
    onMounted(() => {
      e.triggerElement.value = l.value;
    });
    async function n() {
      var r, s;
      if (e == null || e.showTooltip(), await nextTick(), e != null && e.modelValue.value && !(e != null && e.multiple)) {
        const d = (r = e.itemsArray) == null ? void 0 : r.find((c) => c.getAttribute("data-radix-vue-radio-value") === (e == null ? void 0 : e.modelValue.value));
        e == null || e.changeSelected(d);
      } else
        e == null || e.changeSelected((s = e.itemsArray) == null ? void 0 : s[0]);
    }
    function i(r) {
      (r.key === "ArrowDown" || r.key === "ArrowUp" || r.key === "Enter" || r.keyCode === 32) && n();
    }
    return (r, s) => (openBlock(), createBlock(unref(he), { asChild: "" }, {
      default: withCtx(() => {
        var d, c;
        return [
          createVNode(unref(G), {
            type: "button",
            ref_key: "primitiveElement",
            ref: t,
            "aria-expanded": ((d = unref(e)) == null ? void 0 : d.isOpen.value) || false,
            "data-state": (c = unref(e)) != null && c.isOpen.value ? "open" : "closed",
            "as-child": o.asChild,
            onClick: n,
            onKeydown: withModifiers(i, ["prevent"])
          }, {
            default: withCtx(() => [
              renderSlot(r.$slots, "default")
            ]),
            _: 3
          }, 8, ["aria-expanded", "data-state", "as-child", "onKeydown"])
        ];
      }),
      _: 3
    }));
  }
});
var Vi = defineComponent({
  __name: "SelectPortal",
  props: {
    container: {}
  },
  setup(a) {
    const o = a;
    return (e, t) => (openBlock(), createBlock(pt, normalizeProps(guardReactiveProps(o)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var ji = defineComponent({
  __name: "SelectContent",
  props: {
    loop: { type: Boolean },
    side: { default: "bottom" },
    sideOffset: {},
    align: { default: "center" },
    alignOffset: {},
    avoidCollisions: { type: Boolean, default: true },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    onPlaced: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(ft), { primitiveElement: t, currentElement: l } = B(), { createCollection: n, getItems: i } = ie();
    n(l), watchEffect(() => {
      l.value && (e != null && e.isOpen.value ? (document.querySelector("body").style.pointerEvents = "none", e.itemsArray = i(l.value)) : e != null && e.triggerElement.value && r());
    });
    function r() {
      document.querySelector("body").style.pointerEvents = "", setTimeout(() => {
        var s;
        (s = e == null ? void 0 : e.triggerElement.value) == null || s.focus();
      }, 0);
    }
    return Se(l, (s) => {
      s.target.closest('[role="menuitem"]') || e == null || e.hideTooltip();
    }), (s, d) => {
      var c, p;
      return (c = unref(e)) != null && c.isOpen.value ? (openBlock(), createBlock(unref(ye), mergeProps({ key: 0 }, o, {
        "prioritize-position": "",
        role: "listbox",
        "data-state": (p = unref(e)) != null && p.isOpen.value ? "open" : "closed",
        "data-side": o.side,
        "data-align": o.align
      }), {
        default: withCtx(() => [
          createVNode(unref(R), {
            ref_key: "primitiveElement",
            ref: t,
            "as-child": o.asChild,
            role: "presentation",
            style: { "pointer-events": "auto" }
          }, {
            default: withCtx(() => [
              renderSlot(s.$slots, "default")
            ]),
            _: 3
          }, 8, ["as-child"])
        ]),
        _: 3
      }, 16, ["data-state", "data-side", "data-align"])) : createCommentVNode("", true);
    };
  }
});
var es = defineComponent({
  __name: "SelectArrow",
  setup(a) {
    return (o, e) => (openBlock(), createBlock(unref(Fe)));
  }
});
var ts = defineComponent({
  __name: "SelectSeparator",
  props: {
    orientation: {},
    decorative: { type: Boolean },
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a;
    return (e, t) => (openBlock(), createBlock(Xe, {
      orientation: o.orientation,
      decorative: o.decorative
    }, null, 8, ["orientation", "decorative"]));
  }
});
var Aa = Symbol();
var os = defineComponent({
  __name: "SelectItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(ft), t = inject(Aa), l = computed(() => {
      var n;
      return e != null && e.multiple ? (n = e == null ? void 0 : e.modelValue.value) == null ? void 0 : n.includes(
        t.value
      ) : (e == null ? void 0 : e.modelValue.value) === (t == null ? void 0 : t.value);
    });
    return (n, i) => l.value ? (openBlock(), createBlock(unref(ne), {
      key: 0,
      "aria-hidden": "true",
      style: { "pointer-events": "none" },
      "as-child": o.asChild
    }, {
      default: withCtx(() => [
        renderSlot(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child"])) : createCommentVNode("", true);
  }
});
var as = defineComponent({
  __name: "SelectLabel",
  props: {
    for: {},
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a;
    return (e, t) => (openBlock(), createBlock(unref(ut), normalizeProps(guardReactiveProps(o)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var ns = defineComponent({
  __name: "SelectGroup",
  props: {
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a;
    return (e, t) => (openBlock(), createBlock(unref(R), {
      "as-child": o.asChild,
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
var ls = defineComponent({
  __name: "SelectItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    id: {},
    name: {},
    onSelect: {},
    textValue: {},
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(ft);
    function t() {
      return e == null || e.changeModelValue(o.value), e == null ? void 0 : e.hideTooltip();
    }
    return provide(Aa, {
      value: o.value
    }), (l, n) => {
      var i, r, s;
      return openBlock(), createBlock(se, {
        disabled: o.disabled,
        rootProvider: unref(e),
        orientation: (i = unref(e)) == null ? void 0 : i.orientation,
        "data-radix-vue-radio-value": o.value,
        "as-child": o.asChild,
        onHandleClick: t,
        onEscapeKeydown: n[0] || (n[0] = (d) => {
          var c;
          return (c = unref(e)) == null ? void 0 : c.hideTooltip();
        }),
        role: "option",
        "data-state": ((s = (r = unref(e)) == null ? void 0 : r.modelValue) == null ? void 0 : s.value) === o.value ? "checked" : "unchecked"
      }, {
        default: withCtx(() => [
          renderSlot(l.$slots, "default")
        ]),
        _: 3
      }, 8, ["disabled", "rootProvider", "orientation", "data-radix-vue-radio-value", "as-child", "data-state"]);
    };
  }
});
var Ae = Symbol();
var Dl = {
  inheritAttrs: false
};
var rs = defineComponent({
  ...Dl,
  __name: "MenubarRoot",
  props: {
    modelValue: {},
    defaultValue: {},
    orientation: { default: "horizontal" },
    dir: {}
  },
  emits: ["update:modelValue"],
  setup(a, { emit: o }) {
    const e = a, t = H(e, "modelValue", o, {
      passive: true,
      defaultValue: e.defaultValue
    }), l = ref(), n = ref(), i = [], r = ref(), s = Vt();
    return provide(Ae, {
      selectedElement: l,
      changeSelected: (d) => {
        var c;
        l.value = d, (c = l.value) == null || c.focus();
      },
      modelValue: t,
      changeValue: (d) => {
        t.value = d;
      },
      triggerElement: n,
      triggerItemsArray: i,
      itemsArray: [],
      orientation: e.orientation
    }), watch(
      s,
      () => {
        s.value === r.value && (n.value ? n.value.focus() : i.length && i[0].focus());
      },
      { immediate: true }
    ), (d, c) => (openBlock(), createBlock(unref(me), null, {
      default: withCtx(() => [
        createBaseVNode("div", mergeProps({ role: "menubar" }, d.$attrs, {
          ref_key: "menubarContainerElement",
          ref: r,
          tabindex: "0"
        }), [
          renderSlot(d.$slots, "default")
        ], 16)
      ]),
      _: 3
    }));
  }
});
var At = Symbol();
var is = defineComponent({
  __name: "MenubarMenu",
  props: {
    value: {}
  },
  setup(a) {
    const e = a.value ?? Q(), t = inject(Ae), l = ref(), n = computed(() => (t == null ? void 0 : t.modelValue.value) === e), i = inject(At);
    return provide(At, {
      value: e,
      isOpen: n,
      triggerElement: l,
      itemsArray: [],
      triggerId: e,
      contentId: Q(),
      parentContext: i,
      orientation: "vertical"
    }), (r, s) => (openBlock(), createBlock(unref(me), null, {
      default: withCtx(() => [
        renderSlot(r.$slots, "default")
      ]),
      _: 3
    }));
  }
});
var Ml = {
  inheritAttrs: false
};
var ss = defineComponent({
  ...Ml,
  __name: "MenubarTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(Ae), t = inject(
      At
    ), { primitiveElement: l, currentElement: n } = B(), i = Vt();
    onMounted(() => {
      t.triggerElement.value = n.value, e.triggerItemsArray.push(n.value);
    });
    async function r() {
      var y;
      e == null || e.changeValue(t == null ? void 0 : t.value), await nextTick();
      const v = (y = t == null ? void 0 : t.itemsArray) == null ? void 0 : y[0];
      e.selectedElement.value = v, v == null || v.focus();
    }
    function s(v) {
      if (v.key === "Escape")
        return c();
      if (v.keyCode === 32 || v.key === "Enter") {
        v.target.click();
        return;
      }
      if (v.key === "ArrowDown")
        return r();
      const y = te(
        v,
        n.value,
        n.value.parentElement,
        {
          arrowKeyOptions: "horizontal"
        }
      );
      y && (e == null || e.changeSelected(y), y.focus(), e != null && e.modelValue.value && (e == null || e.changeValue(y.id)));
    }
    function d() {
      if (!o.disabled && (e != null && e.modelValue.value)) {
        e == null || e.changeSelected(n.value), e == null || e.changeValue(t == null ? void 0 : t.value);
        return;
      }
    }
    function c() {
      e == null || e.changeValue(void 0), document.querySelector("body").style.pointerEvents = "", setTimeout(() => {
        var v;
        (v = e == null ? void 0 : e.triggerElement.value) == null || v.focus();
      }, 0);
    }
    function p() {
      r();
    }
    const f = computed(() => t != null && t.isOpen.value ? "open" : "closed"), m = computed(() => i.value && i.value === n.value || (e == null ? void 0 : e.triggerElement.value) === n.value && (e == null ? void 0 : e.selectedElement.value));
    return watchEffect(() => {
      (e == null ? void 0 : e.selectedElement.value) === n.value && (e.triggerElement.value = n.value);
    }), watch(
      i,
      () => {
        i.value === n.value ? (e.selectedElement.value = n.value, e.triggerElement.value = n.value) : !(t != null && t.isOpen.value) && e.selectedElement.value === n.value && (e.selectedElement.value = void 0);
      },
      { immediate: true }
    ), (v, y) => (openBlock(), createBlock(unref(he), { asChild: "" }, {
      default: withCtx(() => {
        var h2, E, $, k, O;
        return [
          createVNode(unref(G), mergeProps({
            role: "menuitem",
            ref_key: "primitiveElement",
            ref: l,
            id: (h2 = unref(t)) == null ? void 0 : h2.triggerId,
            "aria-expanded": (E = unref(t)) == null ? void 0 : E.isOpen.value,
            "aria-controls": ($ = unref(t)) == null ? void 0 : $.contentId,
            "data-state": f.value,
            "data-orientation": (k = unref(e)) == null ? void 0 : k.orientation,
            "aria-haspopup": "menu",
            onKeydown: withModifiers(s, ["prevent"]),
            "data-radix-vue-collection-item": "",
            onMouseenter: d,
            onClick: p,
            "data-highlighted": m.value ? "" : null,
            "aria-disabled": o.disabled ? true : void 0,
            "data-disabled": o.disabled ? "" : void 0,
            "as-child": o.asChild,
            tabindex: ((O = unref(e)) == null ? void 0 : O.triggerElement.value) === unref(n) ? "0" : "-1"
          }, v.$attrs), {
            default: withCtx(() => [
              renderSlot(v.$slots, "default")
            ]),
            _: 3
          }, 16, ["id", "aria-expanded", "aria-controls", "data-state", "data-orientation", "onKeydown", "data-highlighted", "aria-disabled", "data-disabled", "as-child", "tabindex"])
        ];
      }),
      _: 3
    }));
  }
});
var Rl = {};
function Il(a, o) {
  return openBlock(), createBlock(Teleport, { to: "body" }, [
    renderSlot(a.$slots, "default")
  ]);
}
var us = fo(Rl, [["render", Il]]);
var ds = defineComponent({
  __name: "MenubarContent",
  props: {
    loop: { type: Boolean },
    side: { default: "bottom" },
    sideOffset: {},
    align: { default: "start" },
    alignOffset: {},
    avoidCollisions: { type: Boolean, default: true },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    onPlaced: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(Ae), t = inject(
      At
    ), { primitiveElement: l, currentElement: n } = B(), { createCollection: i } = ie();
    i(n), watchEffect(() => {
      n.value && t != null && t.isOpen.value && r();
    }), watch(
      () => e == null ? void 0 : e.selectedElement.value,
      (d) => {
        var p;
        if (!(t != null && t.isOpen.value))
          return;
        const c = Array.from(
          ((p = d == null ? void 0 : d.closest('[role="tooltip"]')) == null ? void 0 : p.querySelectorAll(
            "[data-radix-vue-collection-item]:not([data-disabled])"
          )) ?? []
        );
        c != null && c.length && c.includes(
          t.triggerElement.value
        ) && (e == null ? void 0 : e.selectedElement.value) !== (t == null ? void 0 : t.triggerElement.value) && (e == null || e.changeValue(void 0));
      }
    );
    function r() {
      const d = Array.from(
        n.value.querySelectorAll(
          "[data-radix-vue-collection-item]:not([data-disabled])"
        )
      );
      return t.itemsArray = d, d;
    }
    Se(n, (d) => {
      d.target.closest('[role="menuitem"]') || (e == null || e.changeValue(void 0), e.selectedElement.value = void 0);
    });
    const s = computed(() => t != null && t.isOpen ? "open" : "false");
    return (d, c) => {
      var p;
      return (p = unref(t)) != null && p.isOpen.value ? (openBlock(), createBlock(unref(ye), normalizeProps(mergeProps({ key: 0 }, o)), {
        default: withCtx(() => {
          var f, m;
          return [
            createVNode(unref(R), {
              ref_key: "primitiveElement",
              ref: l,
              "data-state": s.value,
              "data-side": o.side,
              "data-align": o.align,
              "aria-labelledby": (f = unref(t)) == null ? void 0 : f.triggerId,
              "data-orientation": (m = unref(t)) == null ? void 0 : m.orientation,
              role: "tooltip",
              "as-child": o.asChild,
              style: { "pointer-events": "auto" }
            }, {
              default: withCtx(() => [
                renderSlot(d.$slots, "default")
              ]),
              _: 3
            }, 8, ["data-state", "data-side", "data-align", "aria-labelledby", "data-orientation", "as-child"])
          ];
        }),
        _: 3
      }, 16)) : createCommentVNode("", true);
    };
  }
});
var cs = defineComponent({
  __name: "MenubarArrow",
  setup(a) {
    return (o, e) => (openBlock(), createBlock(unref(Fe)));
  }
});
var nt = Symbol();
var ps = defineComponent({
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
  setup(a, { emit: o }) {
    const e = a, t = H(e, "modelValue", o, {
      passive: true
    }), l = ref(), n = inject(nt);
    return provide(nt, {
      modelValue: t,
      showTooltip: () => {
        t.value = true;
      },
      hideTooltip: () => {
        t.value = false;
      },
      triggerElement: l,
      itemsArray: [],
      orientation: e.orientation,
      triggerId: Q(),
      contentId: Q(),
      parentContext: n
    }), (i, r) => (openBlock(), createBlock(unref(me), null, {
      default: withCtx(() => [
        renderSlot(i.$slots, "default")
      ]),
      _: 3
    }));
  }
});
var fs = defineComponent({
  __name: "MenubarItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(Ae), t = inject(
      nt
    );
    function l() {
      e.changeValue(void 0), e.changeSelected(
        e.triggerElement.value
      );
    }
    function n(r) {
      const s = te(
        r,
        e == null ? void 0 : e.triggerElement.value,
        void 0,
        {
          arrowKeyOptions: "horizontal",
          itemsArray: e == null ? void 0 : e.triggerItemsArray
        }
      );
      s && (e == null || e.changeSelected(s), e == null || e.changeValue(s.id));
    }
    function i() {
      e.changeValue(void 0), e.changeSelected(
        e.triggerElement.value
      );
    }
    return (r, s) => {
      var d;
      return openBlock(), createBlock(se, {
        disabled: o.disabled,
        rootProvider: unref(e),
        subProvider: unref(t),
        orientation: (d = unref(e)) == null ? void 0 : d.orientation,
        "as-child": o.asChild,
        onHandleClick: l,
        onHorizontalKeydown: n,
        onEscapeKeydown: i
      }, {
        default: withCtx(() => [
          renderSlot(r.$slots, "default")
        ]),
        _: 3
      }, 8, ["disabled", "rootProvider", "subProvider", "orientation", "as-child"]);
    };
  }
});
var Ll = Symbol();
var ms = defineComponent({
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
    modelValue: {},
    asChild: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(a, { emit: o }) {
    const e = a, { primitiveElement: t, currentElement: l } = B();
    return provide(Ll, {
      type: e.type,
      modelValue: toRef(() => e.modelValue),
      changeModelValue: (n) => {
        if (e.type === "single")
          o("update:modelValue", n);
        else {
          let i = e.modelValue;
          if (i.includes(n)) {
            let r = i.findIndex((s) => s === n);
            i.splice(r, 1);
          } else
            i.push(n);
          o("update:modelValue", i);
        }
      },
      parentElement: l
    }), (n, i) => (openBlock(), createBlock(unref(R), {
      ref_key: "primitiveElement",
      ref: t,
      role: "group",
      dir: e.dir,
      "as-child": e.asChild,
      "aria-label": "Text alignment"
    }, {
      default: withCtx(() => [
        renderSlot(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["dir", "as-child"]));
  }
});
var vs = defineComponent({
  __name: "MenubarSeparator",
  props: {
    orientation: {},
    decorative: { type: Boolean },
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a;
    return (e, t) => (openBlock(), createBlock(Xe, normalizeProps(guardReactiveProps(o)), null, 16));
  }
});
var ho = Symbol();
var Nl = ["id", "checked", "name", "disabled"];
var hs = defineComponent({
  __name: "MenubarCheckboxItem",
  props: {
    checked: { type: Boolean },
    modelValue: { type: Boolean },
    id: {},
    name: {},
    value: {},
    disabled: { type: Boolean },
    onSelect: {},
    textValue: {},
    asChild: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(a, { emit: o }) {
    const e = a, t = inject(Ae), l = H(e, "modelValue", o, {
      passive: true
    }), n = computed(() => l.value ? "checked" : "unchecked");
    function i() {
      l.value = !l.value;
    }
    provide(ho, {
      modelValue: l
    });
    function r(d) {
      const c = te(
        d,
        t == null ? void 0 : t.triggerElement.value,
        void 0,
        {
          arrowKeyOptions: "horizontal",
          itemsArray: t == null ? void 0 : t.triggerItemsArray
        }
      );
      c && (t == null || t.changeSelected(c), t == null || t.changeValue(c.id));
    }
    function s(d) {
      t.changeValue(void 0), t.changeSelected(
        t.triggerElement.value
      );
    }
    return (d, c) => {
      var p;
      return openBlock(), createBlock(se, {
        ref: "currentElement",
        disabled: e.disabled,
        rootProvider: unref(t),
        orientation: (p = unref(t)) == null ? void 0 : p.orientation,
        onHandleClick: i,
        onHorizontalKeydown: r,
        onEscapeKeydown: s,
        role: "menuitemcheckbox",
        "data-state": n.value,
        "aria-checked": !!e.modelValue,
        "as-child": e.asChild
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
          }), null, 16, Nl),
          renderSlot(d.$slots, "default")
        ]),
        _: 3
      }, 8, ["disabled", "rootProvider", "orientation", "data-state", "aria-checked", "as-child"]);
    };
  }
});
var ys = defineComponent({
  __name: "MenubarItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(ho);
    return (t, l) => {
      var n;
      return (n = unref(e)) != null && n.modelValue.value ? (openBlock(), createBlock(unref(ne), mergeProps({ key: 0 }, o, { style: { "pointer-events": "none" } }), {
        default: withCtx(() => [
          renderSlot(t.$slots, "default")
        ]),
        _: 3
      }, 16)) : createCommentVNode("", true);
    };
  }
});
var gs = defineComponent({
  __name: "MenubarLabel",
  props: {
    for: {},
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a;
    return (e, t) => (openBlock(), createBlock(unref(ut), normalizeProps(guardReactiveProps(o)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var ka = "RadioGroup";
var _s = defineComponent({
  __name: "MenubarRadioGroup",
  props: {
    value: {},
    defaultValue: {},
    modelValue: {},
    asChild: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(a, { emit: o }) {
    const e = a, { primitiveElement: t, currentElement: l } = B(), n = H(e, "modelValue", o, {
      passive: true
    });
    return provide(ka, {
      modelValue: n,
      changeModelValue: (i) => {
        n.value = i;
      },
      parentElement: l
    }), (i, r) => (openBlock(), createBlock(unref(R), {
      ref_key: "primitiveElement",
      ref: t,
      role: "radiogroup",
      "aria-label": "radiogroup",
      "as-child": e.asChild
    }, {
      default: withCtx(() => [
        renderSlot(i.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child"]));
  }
});
var bs = defineComponent({
  __name: "MenubarRadioItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    id: {},
    name: {},
    onSelect: {},
    textValue: {},
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(Ae), t = inject(
      ka
    ), l = computed(() => {
      var d;
      return ((d = t == null ? void 0 : t.modelValue) == null ? void 0 : d.value) === o.value ? "on" : "off";
    });
    function n() {
      if (e != null && e.selectedElement.value)
        return t == null ? void 0 : t.changeModelValue(o.value);
    }
    const i = computed(
      () => {
        var d;
        return ((d = t == null ? void 0 : t.modelValue) == null ? void 0 : d.value) === o.value;
      }
    );
    provide(ho, {
      modelValue: i
    });
    function r(d) {
      const c = te(
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
    function s() {
      e.changeValue(void 0), e.changeSelected(
        e.triggerElement.value
      );
    }
    return (d, c) => {
      var p;
      return openBlock(), createBlock(se, {
        disabled: o.disabled,
        rootProvider: unref(e),
        orientation: (p = unref(e)) == null ? void 0 : p.orientation,
        "data-radix-vue-radio-value": o.value,
        "as-child": o.asChild,
        onHandleClick: n,
        onHorizontalKeydown: r,
        onEscapeKeydown: s,
        role: "menuitemradio",
        "data-state": l.value
      }, {
        default: withCtx(() => [
          renderSlot(d.$slots, "default")
        ]),
        _: 3
      }, 8, ["disabled", "rootProvider", "orientation", "data-radix-vue-radio-value", "as-child", "data-state"]);
    };
  }
});
var ws = defineComponent({
  __name: "MenubarSubContent",
  props: {
    loop: { type: Boolean },
    side: { default: "right" },
    sideOffset: {},
    align: { default: "start" },
    alignOffset: {},
    avoidCollisions: { type: Boolean, default: true },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    onPlaced: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(Ae), t = inject(nt), { primitiveElement: l, currentElement: n } = B(), { createCollection: i } = ie();
    i(n), watchEffect(() => {
      n.value && t != null && t.modelValue.value && r();
    }), watch(
      () => e == null ? void 0 : e.selectedElement.value,
      (s) => {
        var c;
        if (!(t != null && t.modelValue.value))
          return;
        const d = Array.from(
          ((c = s == null ? void 0 : s.closest('[role="tooltip"]')) == null ? void 0 : c.querySelectorAll(
            "[data-radix-vue-collection-item]:not([data-disabled])"
          )) ?? []
        );
        d != null && d.length && d.includes(t.triggerElement.value) && (e == null ? void 0 : e.selectedElement.value) !== (t == null ? void 0 : t.triggerElement.value) && (t == null || t.hideTooltip());
      }
    );
    function r() {
      const s = Array.from(
        n.value.querySelectorAll(
          "[data-radix-vue-collection-item]:not([data-disabled])"
        )
      );
      return t.itemsArray = s, s;
    }
    return Se(n, (s) => {
      s.target.closest('[role="menuitem"]') || t == null || t.hideTooltip();
    }), (s, d) => {
      var c;
      return (c = unref(t)) != null && c.modelValue.value ? (openBlock(), createBlock(unref(ye), normalizeProps(mergeProps({ key: 0 }, o)), {
        default: withCtx(() => {
          var p;
          return [
            createVNode(unref(R), {
              ref_key: "primitiveElement",
              ref: l,
              "data-state": (p = unref(t)) != null && p.modelValue.value ? "open" : "closed",
              "data-side": o.side,
              "data-align": o.align,
              "data-orientation": unref(t).orientation,
              "aria-labelledby": unref(t).triggerId,
              role: "tooltip",
              asChild: o.asChild,
              style: { "pointer-events": "auto" }
            }, {
              default: withCtx(() => [
                renderSlot(s.$slots, "default")
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
var Es = defineComponent({
  __name: "MenubarSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(Ae), t = inject(nt), { primitiveElement: l, currentElement: n } = B();
    onMounted(() => {
      t.triggerElement.value = n.value;
    });
    async function i() {
      var m;
      t == null || t.showTooltip(), await nextTick();
      const f = (m = t == null ? void 0 : t.itemsArray) == null ? void 0 : m[0];
      e.selectedElement.value = f, f == null || f.focus();
    }
    function r() {
      t != null && t.modelValue.value || i();
    }
    async function s(f) {
      if (f.key === "ArrowRight")
        i();
      else {
        const m = te(
          f,
          e == null ? void 0 : e.triggerElement.value,
          void 0,
          {
            arrowKeyOptions: "horizontal",
            itemsArray: e == null ? void 0 : e.triggerItemsArray
          }
        );
        m && (e == null || e.changeSelected(m), m.focus(), e != null && e.modelValue.value && (e == null || e.changeValue(m.id)));
      }
    }
    const d = computed(() => t != null && t.modelValue.value ? "open" : "closed");
    function c() {
      return t == null ? void 0 : t.showTooltip();
    }
    function p(f) {
      e.changeValue(void 0), e.changeSelected(
        e.triggerElement.value
      );
    }
    return (f, m) => (openBlock(), createBlock(unref(he), { asChild: "" }, {
      default: withCtx(() => {
        var v, y, h2, E, $;
        return [
          createVNode(se, {
            ref_key: "primitiveElement",
            ref: l,
            id: (v = unref(t)) == null ? void 0 : v.triggerId,
            rootProvider: unref(e),
            subProvider: (y = unref(t)) == null ? void 0 : y.parentContext,
            "aria-expanded": (h2 = unref(t)) == null ? void 0 : h2.modelValue.value,
            "aria-controls": (E = unref(t)) == null ? void 0 : E.contentId,
            "data-state": d.value,
            "data-orientation": ($ = unref(e)) == null ? void 0 : $.orientation,
            "as-child": o.asChild,
            "aria-haspopup": "menu",
            onHandleClick: r,
            onMouseover: c,
            onHorizontalKeydown: s,
            onEscapeKeydown: p
          }, {
            default: withCtx(() => [
              renderSlot(f.$slots, "default")
            ]),
            _: 3
          }, 8, ["id", "rootProvider", "subProvider", "aria-expanded", "aria-controls", "data-state", "data-orientation", "as-child"])
        ];
      }),
      _: 3
    }));
  }
});
var De = Symbol();
var Cs = defineComponent({
  __name: "NavigationMenuRoot",
  props: {
    modelValue: { default: "" },
    defaultValue: {},
    dir: { default: "ltr" },
    orientation: { default: "horizontal" },
    delayDuration: { default: 200 },
    skipDelayDuration: { default: 300 },
    asChild: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(a, { emit: o }) {
    const e = a, t = H(e, "modelValue", o, {
      passive: true,
      defaultValue: e.defaultValue ?? ""
    }), l = ref(""), { primitiveElement: n, currentElement: i } = B(), { createCollection: r } = ie();
    r();
    const s = ref(), d = ref(), c = ref(/* @__PURE__ */ new Map()), { delayDuration: p, skipDelayDuration: f } = toRefs(e), m = dn(false, f), v = computed(() => t.value !== "" || m.value ? 150 : p.value), y = Qt((h2) => {
      l.value = t.value, t.value = h2;
    }, v);
    return provide(De, {
      isRootMenu: true,
      modelValue: t,
      previousValue: l,
      baseId: Q(),
      dir: e.dir,
      orientation: e.orientation,
      rootNavigationMenu: i,
      indicatorTrack: s,
      onIndicatorTrackChange: (h2) => {
        s.value = h2;
      },
      viewport: d,
      onViewportChange: (h2) => {
        d.value = h2;
      },
      viewportContent: c,
      onViewportContentChange: (h2, E) => {
        const $ = c.value;
        c.value = new Map($.set(h2, E));
      },
      onViewportContentRemove: (h2) => {
        const E = c.value;
        if (!E.has(h2))
          return E;
        E.delete(h2), c.value = new Map(E);
      },
      onTriggerEnter: (h2) => {
        y(h2);
      },
      onTriggerLeave: () => {
        m.value = true, y("");
      },
      onContentEnter: (h2) => {
        y(h2);
      },
      onContentLeave: () => {
        y("");
      },
      onItemSelect: (h2) => {
        l.value = t.value, t.value = h2;
      },
      onItemDismiss: () => {
        l.value = t.value, t.value = "";
      }
    }), (h2, E) => (openBlock(), createBlock(unref(xn), {
      ref_key: "primitiveElement",
      ref: n,
      "aria-label": "Main",
      "data-orientation": h2.orientation,
      dir: h2.dir,
      "as-child": e.asChild
    }, {
      default: withCtx(() => [
        renderSlot(h2.$slots, "default")
      ]),
      _: 3
    }, 8, ["data-orientation", "dir", "as-child"]));
  }
});
function Nt(a) {
  return a ? "open" : "closed";
}
function Pa(a, o) {
  return `${a}-trigger-${o}`;
}
function yo(a, o) {
  return `${a}-content-${o}`;
}
var bt = "navigationMenu.rootContentDismiss";
function Gt(a) {
  const o = [], e = document.createTreeWalker(a, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (t) => {
      const l = t.tagName === "INPUT" && t.type === "hidden";
      return t.disabled || t.hidden || l ? NodeFilter.FILTER_SKIP : t.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; e.nextNode(); )
    o.push(e.currentNode);
  return o;
}
function Oa(a) {
  const o = document.activeElement;
  return a.some((e) => e === o ? true : (e.focus(), document.activeElement !== o));
}
function Kl(a) {
  return a.forEach((o) => {
    o.dataset.tabindex = o.getAttribute("tabindex") || "", o.setAttribute("tabindex", "-1");
  }), () => {
    a.forEach((o) => {
      const e = o.dataset.tabindex;
      o.setAttribute("tabindex", e);
    });
  };
}
var go = Symbol();
var $s = defineComponent({
  __name: "NavigationMenuItem",
  props: {
    value: {},
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, { getItems: e } = ie(), t = inject(De), l = o.value || Q(), n = ref(), i = ref(), r = yo(t.baseId, l);
    let s = () => ({});
    const d = ref(false), c = async (v = "start") => {
      const y = document.getElementById(r);
      if (y) {
        s();
        const h2 = Gt(y);
        h2.length && Oa(v === "start" ? h2 : h2.reverse());
      }
    }, p = () => {
      const v = document.getElementById(r);
      if (v) {
        const y = Gt(v);
        y.length && (s = Kl(y));
      }
    };
    provide(go, {
      value: l,
      contentId: r,
      triggerRef: n,
      focusProxyRef: i,
      wasEscapeCloseRef: d,
      onEntryKeyDown: c,
      onFocusProxyEnter: c,
      onContentFocusOutside: p,
      onRootContentClose: p
    });
    const f = () => {
      var v;
      t == null || t.onItemDismiss(), (v = n.value) == null || v.focus();
    }, m = (v) => {
      const y = document.activeElement;
      if (v.keyCode === 32 || v.key === "Enter")
        if ((t == null ? void 0 : t.modelValue.value) === l) {
          f(), v.preventDefault();
          return;
        } else {
          v.target.click(), v.preventDefault();
          return;
        }
      const h2 = e().filter(
        ($) => {
          var k;
          return (k = $.parentElement) == null ? void 0 : k.hasAttribute("aria-menu-item");
        }
      ), E = te(v, y, void 0, {
        itemsArray: h2,
        loop: false
      });
      E && (E == null || E.focus()), v.preventDefault(), v.stopPropagation();
    };
    return (v, y) => (openBlock(), createBlock(unref(Bn), {
      "aria-menu-item": "",
      "as-child": o.asChild,
      onKeydown: withKeys(m, ["up", "down", "left", "right", "home", "end", "space"])
    }, {
      default: withCtx(() => [
        renderSlot(v.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "onKeydown"]));
  }
});
var Hl = "dismissableLayer.pointerDownOutside";
var Fl = "dismissableLayer.focusOutside";
function zl(a, o = globalThis == null ? void 0 : globalThis.document) {
  const e = ref(false), t = ref(() => {
  });
  return watchEffect((l) => {
    const n = (r) => {
      if (r.target && !e.value) {
        let s = function() {
          Ta(
            Hl,
            a,
            d
          );
        };
        const d = { originalEvent: r };
        r.pointerType === "touch" ? (o.removeEventListener("click", t.value), t.value = s, o.addEventListener("click", t.value, {
          once: true
        })) : s();
      } else
        o.removeEventListener("click", t.value);
      e.value = false;
    }, i = window.setTimeout(() => {
      o.addEventListener("pointerdown", n);
    }, 0);
    l(() => {
      window.clearTimeout(i), o.removeEventListener("pointerdown", n), o.removeEventListener("click", t.value);
    });
  }), {
    onPointerDownCapture: () => e.value = true
  };
}
function Wl(a, o = globalThis == null ? void 0 : globalThis.document) {
  const e = ref(false);
  return watchEffect((t) => {
    const l = (n) => {
      n.target && !e.value && Ta(
        Fl,
        a,
        { originalEvent: n }
      );
    };
    o.addEventListener("focusin", l), t(() => o.removeEventListener("focusin", l));
  }), {
    onFocusCapture: () => e.value = true,
    onBlurCapture: () => e.value = false
  };
}
function Ta(a, o, e) {
  const t = e.originalEvent.target, l = new CustomEvent(a, {
    bubbles: false,
    cancelable: true,
    detail: e
  });
  o && t.addEventListener(a, o, { once: true }), t.dispatchEvent(l);
}
var Yl = defineComponent({
  __name: "DismissableLayer",
  props: {
    disableOutsidePointerEvents: { type: Boolean, default: false },
    asChild: { type: Boolean }
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss"],
  setup(a, { emit: o }) {
    const e = a, { primitiveElement: t, currentElement: l } = B(), n = computed(
      () => {
        var v;
        return ((v = l.value) == null ? void 0 : v.ownerDocument) ?? globalThis.document;
      }
    ), i = ref(/* @__PURE__ */ new Set()), r = ref(/* @__PURE__ */ new Set());
    provide("dismissable", {
      layers: i,
      layersWithOutsidePointerEventsDisabled: r
    });
    const s = inject("dismissable", {
      layers: i,
      layersWithOutsidePointerEventsDisabled: r
    });
    watch(
      () => s,
      () => {
        s != null && s.layers.value && (i.value = s.layers.value), s != null && s.layersWithOutsidePointerEventsDisabled.value && (r.value = s.layersWithOutsidePointerEventsDisabled.value);
      },
      { immediate: true, deep: true }
    );
    const d = computed(() => l.value ? Array.from(i.value).indexOf(l.value) : -1), c = computed(() => r.value.size > 0), p = computed(() => {
      const v = Array.from(i.value), [y] = [...r.value].slice(-1), h2 = v.indexOf(y);
      return d.value >= h2;
    }), f = zl(async (v) => {
      p.value && (o("pointerDownOutside", v), o("interactOutside", v), await nextTick(), v.defaultPrevented || o("dismiss"));
    }, n.value), m = Wl((v) => {
      o("focusOutside", v), o("interactOutside", v), v.defaultPrevented || o("dismiss");
    }, n.value);
    return fn("Escape", (v) => {
      d.value === i.value.size - 1 && (o("escapeKeyDown", v), v.defaultPrevented || o("dismiss"));
    }), watchEffect((v) => {
      if (!l.value)
        return;
      let y;
      e.disableOutsidePointerEvents && (r.value.size === 0 && (y = n.value.body.style.pointerEvents, n.value.body.style.pointerEvents = "none"), r.value.add(l.value)), i.value.add(l.value), v(() => {
        e.disableOutsidePointerEvents && r.value.size === 1 && (n.value.body.style.pointerEvents = y);
      });
    }), watchEffect((v) => {
      v(() => {
        l.value && (i.value.delete(l.value), r.value.delete(l.value));
      });
    }), (v, y) => (openBlock(), createBlock(unref(R), {
      ref_key: "primitiveElement",
      ref: t,
      "as-child": v.asChild,
      style: normalizeStyle({
        pointerEvents: c.value ? p.value ? "auto" : "none" : void 0
      }),
      onFocusCapture: unref(m).onFocusCapture,
      onBlurCapture: unref(m).onBlurCapture,
      onPointerdownCapture: unref(f).onPointerDownCapture
    }, {
      default: withCtx(() => [
        renderSlot(v.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "style", "onFocusCapture", "onBlurCapture", "onPointerdownCapture"]));
  }
});
var Ba = defineComponent({
  __name: "NavigationMenuContentImpl",
  props: {
    value: {},
    triggerRef: {},
    focusProxyRef: {},
    wasEscapeCloseRef: {},
    onContentFocusOutside: { type: Function },
    onRootContentClose: { type: Function },
    disableOutsidePointerEvents: { type: Boolean }
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss"],
  setup(a, { expose: o, emit: e }) {
    const t = a, { getItems: l } = ie(), { primitiveElement: n, currentElement: i } = B(), r = inject(De), s = Pa(r.baseId, t.value), d = yo(r.baseId, t.value), c = ref(null), p = computed(() => {
      const $ = l().map((W) => W.id.split("trigger-")[1]);
      (r == null ? void 0 : r.dir) === "rtl" && $.reverse();
      const k = $.indexOf(r.modelValue.value), O = $.indexOf(r.previousValue.value), x = t.value === (r == null ? void 0 : r.modelValue.value), I = O === $.indexOf(t.value);
      if (!x && !I)
        return c.value;
      const T = (() => {
        if (k !== O) {
          if (x && O !== -1)
            return k > O ? "from-end" : "from-start";
          if (I && k !== -1)
            return k > O ? "to-start" : "to-end";
        }
        return null;
      })();
      return c.value = T, T;
    }), f = (E) => {
      var $, k;
      if (e("focusOutside", E), e("interactOutside", E), !E.defaultPrevented) {
        t.onContentFocusOutside();
        const O = E.target;
        (k = ($ = r.rootNavigationMenu) == null ? void 0 : $.value) != null && k.contains(O) && E.preventDefault();
      }
    }, m = (E) => {
      var $;
      if (e("pointerDownOutside", E), !E.defaultPrevented) {
        const k = E.target, O = l().some((I) => I.contains(k)), x = (r == null ? void 0 : r.isRootMenu) && (($ = r.viewport.value) == null ? void 0 : $.contains(k));
        (O || x || !(r != null && r.isRootMenu)) && E.preventDefault();
      }
    };
    watchEffect((E) => {
      const $ = i.value;
      if (r != null && r.isRootMenu && $) {
        const k = () => {
          var O;
          r.onItemDismiss(), t.onRootContentClose(), $.contains(document.activeElement) && ((O = t.triggerRef.value) == null || O.focus());
        };
        $.addEventListener(bt, k), E(
          () => $.removeEventListener(bt, k)
        );
      }
    });
    const v = (E) => {
      var $, k;
      e("escapeKeyDown", E), E.defaultPrevented || (r.onItemDismiss(), (k = ($ = t == null ? void 0 : t.triggerRef) == null ? void 0 : $.value) == null || k.focus(), t.wasEscapeCloseRef.value = true);
    }, y = (E) => {
      var I;
      const $ = E.altKey || E.ctrlKey || E.metaKey, k = E.key === "Tab" && !$, O = Gt(E.currentTarget);
      if (k) {
        const T = document.activeElement, W = O.findIndex(
          (F) => F === T
        ), J = E.shiftKey ? O.slice(0, W).reverse() : O.slice(W + 1, O.length);
        if (Oa(J))
          E.preventDefault();
        else {
          (I = t.focusProxyRef.value) == null || I.focus();
          return;
        }
      }
      const x = te(
        E,
        document.activeElement,
        void 0,
        { itemsArray: O, loop: false }
      );
      x == null || x.focus(), !(E.key === "Enter" || E.key === "Escape") && (E.preventDefault(), E.stopPropagation());
    }, h2 = () => {
      var $;
      const E = new Event(bt, {
        bubbles: true,
        cancelable: true
      });
      ($ = i.value) == null || $.dispatchEvent(E);
    };
    return o({
      ...t
    }), (E, $) => {
      var k, O;
      return openBlock(), createBlock(unref(Yl), {
        ref_key: "primitiveElement",
        ref: n,
        id: unref(d),
        "aria-labelledby": unref(s),
        "data-motion": p.value,
        "data-state": unref(Nt)(((k = unref(r)) == null ? void 0 : k.modelValue.value) === t.value),
        "data-orientation": (O = unref(r)) == null ? void 0 : O.orientation,
        "disable-outside-pointer-events": E.disableOutsidePointerEvents,
        onKeydown: y,
        onEscapeKeyDown: v,
        onPointerDownOutside: m,
        onFocusOutside: f,
        onDismiss: h2
      }, {
        default: withCtx(() => [
          renderSlot(E.$slots, "default")
        ]),
        _: 3
      }, 8, ["id", "aria-labelledby", "data-motion", "data-state", "data-orientation", "disable-outside-pointer-events"]);
    };
  }
});
var Ss = defineComponent({
  inheritAttrs: false,
  __name: "NavigationMenuContent",
  props: {
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean }
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss"],
  setup(a, { emit: o }) {
    const e = a, t = inject(De), l = inject(go), n = computed(() => (l == null ? void 0 : l.value) === (t == null ? void 0 : t.modelValue.value)), i = Uo(
      () => l,
      () => ({
        ...e,
        value: l.value,
        triggerRef: l.triggerRef,
        focusProxyRef: l.focusProxyRef,
        wasEscapeCloseRef: l.wasEscapeCloseRef,
        onContentFocusOutside: l.onContentFocusOutside,
        onRootContentClose: l.onRootContentClose
      })
    ), r = getCurrentInstance();
    watch(
      n,
      async () => {
        var c, p;
        t != null && t.isRootMenu || await nextTick();
        const d = (p = (c = r == null ? void 0 : r.vnode.children) == null ? void 0 : c.default()) == null ? void 0 : p[0];
        t != null && t.viewport && d && (l != null && l.triggerRef.value) && (d.props = {
          ...d.props,
          ...i.value,
          triggerRef: l.triggerRef,
          focusProxyRef: l.focusProxyRef,
          wasEscapeCloseRef: l.wasEscapeCloseRef
        }, d.parentProps = r.vnode.props, t.onViewportContentChange(l.value, d), i.trigger());
      },
      { immediate: true, deep: true }
    );
    const s = (d) => {
      o("pointerDownOutside", d), d.preventDefault || t == null || t.onContentLeave();
    };
    return (d, c) => {
      var p;
      return (p = unref(t)) != null && p.viewport.value ? createCommentVNode("", true) : (openBlock(), createBlock(unref(Qe), {
        key: 0,
        present: n.value
      }, {
        default: withCtx(() => {
          var f;
          return [
            createVNode(Ba, mergeProps({
              "data-state": unref(Nt)(n.value),
              style: {
                pointerEvents: !n.value && ((f = unref(t)) != null && f.isRootMenu) ? "none" : void 0
              }
            }, { ...d.$attrs, ...unref(i) }, {
              onPointerenter: c[0] || (c[0] = (m) => {
                var v;
                return (v = unref(t)) == null ? void 0 : v.onContentEnter(unref(l).value);
              }),
              onPointerleave: c[1] || (c[1] = (m) => {
                var v;
                return (v = unref(t)) == null ? void 0 : v.onContentLeave();
              }),
              onPointerdown: s,
              onFocusOutside: c[2] || (c[2] = (m) => o("focusOutside", m)),
              onInteractOutside: c[3] || (c[3] = (m) => o("interactOutside", m))
            }), {
              default: withCtx(() => [
                renderSlot(d.$slots, "default")
              ]),
              _: 3
            }, 16, ["data-state", "style"])
          ];
        }),
        _: 3
      }, 8, ["present"]));
    };
  }
});
var As = defineComponent({
  inheritAttrs: false,
  __name: "NavigationMenuIndicator",
  props: {
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, { getItems: e } = ie(), t = inject(De), l = ref(), n = computed(() => (t == null ? void 0 : t.orientation) === "horizontal"), i = computed(() => !!(t != null && t.modelValue.value)), r = ref(), s = () => {
      r.value && (l.value = {
        size: n.value ? r.value.offsetWidth : r.value.offsetHeight,
        offset: n.value ? r.value.offsetLeft : r.value.offsetTop
      });
    };
    return watchEffect(() => {
      if (!(t != null && t.modelValue.value)) {
        l.value = void 0;
        return;
      }
      const d = e();
      r.value = d.find(
        (c) => c.id.includes(t == null ? void 0 : t.modelValue.value)
      ), s();
    }), Ee(r, s), Ee(t.indicatorTrack, s), (d, c) => {
      var p, f;
      return (p = unref(t)) != null && p.indicatorTrack.value ? (openBlock(), createBlock(Teleport, {
        key: 0,
        to: (f = unref(t)) == null ? void 0 : f.indicatorTrack.value
      }, [
        createVNode(unref(Qe), { present: i.value }, {
          default: withCtx(() => {
            var m, v, y, h2;
            return [
              createVNode(unref(R), mergeProps({
                "aria-hidden": "",
                "data-state": i.value ? "visible" : "hidden",
                "data-orientation": unref(t).orientation,
                "as-child": o.asChild,
                style: {
                  position: "absolute",
                  ...n.value ? {
                    left: 0,
                    width: ((m = l.value) == null ? void 0 : m.size) + "px",
                    transform: `translateX(${(v = l.value) == null ? void 0 : v.offset}px)`
                  } : {
                    top: 0,
                    height: ((y = l.value) == null ? void 0 : y.size) + "px",
                    transform: `translateY(${(h2 = l.value) == null ? void 0 : h2.offset}px)`
                  }
                }
              }, d.$attrs), {
                default: withCtx(() => [
                  renderSlot(d.$slots, "default")
                ]),
                _: 3
              }, 16, ["data-state", "data-orientation", "as-child", "style"])
            ];
          }),
          _: 3
        }, 8, ["present"])
      ], 8, ["to"])) : createCommentVNode("", true);
    };
  }
});
var ks = defineComponent({
  __name: "NavigationMenuLink",
  props: {
    active: { type: Boolean },
    asChild: { type: Boolean }
  },
  emits: ["select"],
  setup(a, { emit: o }) {
    const e = a, t = async (l) => {
      var n;
      if (o("select", l), await nextTick(), !l.defaultPrevented && !l.metaKey) {
        const i = new CustomEvent(
          bt,
          {
            bubbles: true,
            cancelable: true
          }
        );
        (n = l.target) == null || n.dispatchEvent(i);
      }
    };
    return (l, n) => (openBlock(), createBlock(unref(Vo), {
      "data-active": l.active ? "" : void 0,
      "aria-current": l.active ? "page" : void 0,
      "as-child": e.asChild,
      onClick: t,
      "data-radix-vue-collection-item": ""
    }, {
      default: withCtx(() => [
        renderSlot(l.$slots, "default")
      ]),
      _: 3
    }, 8, ["data-active", "aria-current", "as-child"]));
  }
});
var Ps = defineComponent({
  inheritAttrs: false,
  __name: "NavigationMenuList",
  props: {
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(De), { primitiveElement: t, currentElement: l } = B(), { setCollection: n } = ie();
    return n(l), onMounted(() => {
      e == null || e.onIndicatorTrackChange(l.value);
    }), (i, r) => (openBlock(), createBlock(unref(R), {
      ref_key: "primitiveElement",
      ref: t,
      style: { position: "relative" }
    }, {
      default: withCtx(() => {
        var s;
        return [
          createVNode(unref(Mn), mergeProps(i.$attrs, {
            "as-child": o.asChild,
            "data-orientation": (s = unref(e)) == null ? void 0 : s.orientation
          }), {
            default: withCtx(() => [
              renderSlot(i.$slots, "default")
            ]),
            _: 3
          }, 16, ["as-child", "data-orientation"])
        ];
      }),
      _: 3
    }, 512));
  }
});
var Ul = ["aria-owns"];
var Os = defineComponent({
  inheritAttrs: false,
  __name: "NavigationMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(De), t = inject(go), { primitiveElement: l, currentElement: n } = B(), i = ref(""), r = ref(""), s = ref(false), d = ref(false), c = computed(() => (t == null ? void 0 : t.value) === (e == null ? void 0 : e.modelValue.value));
    onMounted(() => {
      t.triggerRef = n, i.value = Pa(e.baseId, t.value), r.value = yo(e.baseId, t.value);
    });
    const p = () => {
      d.value = false, t.wasEscapeCloseRef.value = false;
    }, f = ($) => {
      if ($.pointerType === "mouse") {
        if (o.disabled || d.value || t.wasEscapeCloseRef.value || s.value)
          return;
        e.onTriggerEnter(t.value), s.value = true;
      }
    }, m = ($) => {
      if ($.pointerType === "mouse") {
        if (o.disabled)
          return;
        e.onTriggerLeave(), s.value = false;
      }
    }, v = () => {
      c.value ? e == null || e.onItemSelect("") : e == null || e.onItemSelect(t.value), d.value = c.value;
    }, y = ($) => {
      const O = { horizontal: "ArrowDown", vertical: e.dir === "rtl" ? "ArrowLeft" : "ArrowRight" }[e.orientation];
      c.value && $.key === O && (t.onEntryKeyDown(), $.preventDefault(), $.stopPropagation());
    }, h2 = ($) => {
      t.focusProxyRef.value = de($);
    }, E = ($) => {
      const k = document.getElementById(t.contentId), O = $.relatedTarget, x = O === n.value, I = k == null ? void 0 : k.contains(O);
      (x || !I) && t.onFocusProxyEnter(x ? "start" : "end");
    };
    return ($, k) => {
      var O;
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(unref(G), mergeProps({
          ref_key: "primitiveElement",
          ref: l,
          id: i.value,
          disabled: $.disabled,
          "data-disabled": $.disabled ? "" : void 0,
          "data-state": unref(Nt)(c.value),
          "aria-expanded": c.value,
          "aria-controls": r.value,
          "as-child": o.asChild,
          onPointerenter: p,
          onPointermove: f,
          onPointerleave: m,
          onClick: v,
          onKeydown: y
        }, $.$attrs, { "data-radix-vue-collection-item": "" }), {
          default: withCtx(() => [
            renderSlot($.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "disabled", "data-disabled", "data-state", "aria-expanded", "aria-controls", "as-child"]),
        c.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          createVNode(unref(Ca), {
            "aria-hidden": "",
            tabIndex: 0,
            ref: h2,
            onFocus: E
          }),
          (O = unref(e)) != null && O.viewport ? (openBlock(), createElementBlock("span", {
            key: 0,
            "aria-owns": r.value
          }, null, 8, Ul)) : createCommentVNode("", true)
        ], 64)) : createCommentVNode("", true)
      ], 64);
    };
  }
});
var Ts = defineComponent({
  inheritAttrs: false,
  __name: "NavigationMenuViewport",
  setup(a) {
    const { primitiveElement: o, currentElement: e } = B(), t = inject(De), l = ref(), n = computed(() => !!(t != null && t.modelValue.value)), i = computed(
      () => n.value ? t.modelValue.value : t.previousValue.value
    );
    watch(e, () => {
      t.onViewportChange(e.value);
    });
    const r = computed(
      () => (
        // @ts-ignore
        Array.from(t == null ? void 0 : t.viewportContent.value.values())
      )
    ), s = ref();
    return Ee(s, () => {
      s.value && (l.value = {
        width: s.value.offsetWidth,
        height: s.value.offsetHeight
      });
    }), (d, c) => (openBlock(), createBlock(unref(Qe), { present: n.value }, {
      default: withCtx(() => {
        var p, f, m, v;
        return [
          createVNode(unref(R), mergeProps(d.$attrs, {
            ref_key: "primitiveElement",
            ref: o,
            "data-state": unref(Nt)(n.value),
            "data-orientation": (p = unref(t)) == null ? void 0 : p.orientation,
            style: {
              // Prevent interaction when animating out
              pointerEvents: !n.value && ((f = unref(t)) != null && f.isRootMenu) ? "none" : void 0,
              ["--radix-navigation-menu-viewport-width"]: l.value ? ((m = l.value) == null ? void 0 : m.width) + "px" : void 0,
              ["--radix-navigation-menu-viewport-height"]: l.value ? ((v = l.value) == null ? void 0 : v.height) + "px" : void 0
            },
            onPointerenter: c[0] || (c[0] = (y) => {
              var h2;
              return (h2 = unref(t)) == null ? void 0 : h2.onContentEnter(i.value);
            }),
            onPointerleave: c[1] || (c[1] = (y) => {
              var h2;
              return (h2 = unref(t)) == null ? void 0 : h2.onContentLeave();
            })
          }), {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList(r.value, (y) => {
                var h2, E;
                return openBlock(), createBlock(unref(Qe), {
                  key: (h2 = y.props) == null ? void 0 : h2.value,
                  present: i.value === ((E = y.props) == null ? void 0 : E.value)
                }, {
                  default: withCtx(() => [
                    createVNode(Ba, mergeProps({
                      ref_for: true,
                      ref: ($) => {
                        var k;
                        i.value === ((k = y.props) == null ? void 0 : k.value) && $ && (s.value = unref(de)($.$el));
                      }
                    }, { ...y.props, ...y.parentProps }), {
                      default: withCtx(() => [
                        (openBlock(), createBlock(resolveDynamicComponent(y)))
                      ]),
                      _: 2
                    }, 1040)
                  ]),
                  _: 2
                }, 1032, ["present"]);
              }), 128))
            ]),
            _: 1
          }, 16, ["data-state", "data-orientation", "style"])
        ];
      }),
      _: 1
    }, 8, ["present"]));
  }
});
var ue = Symbol();
var Bs = defineComponent({
  __name: "ScrollAreaRoot",
  props: {
    type: { default: "hover" },
    dir: { default: "ltr" },
    scrollHideDelay: { default: 600 },
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, { primitiveElement: e, currentElement: t } = B(), l = ref(0), n = ref(0), i = ref(), r = ref(), s = ref(), d = ref(), c = ref(false), p = ref(false), f = (T) => {
      i.value = T;
    }, m = (T) => {
      r.value = T;
    }, v = (T) => {
      s.value = T;
    }, y = (T) => {
      d.value = T;
    }, h2 = (T) => {
      c.value = T;
    }, E = (T) => {
      p.value = T;
    }, $ = (T) => {
      l.value = T;
    }, k = (T) => {
      n.value = T;
    }, { type: O, dir: x, scrollHideDelay: I } = toRefs(o);
    return provide(ue, {
      type: O,
      dir: x,
      scrollHideDelay: I,
      scrollArea: t,
      viewport: i,
      onViewportChange: f,
      content: r,
      onContentChange: m,
      scrollbarX: s,
      scrollbarXEnabled: c,
      scrollbarY: d,
      scrollbarYEnabled: p,
      onScrollbarXChange: v,
      onScrollbarYChange: y,
      onScrollbarXEnabledChange: h2,
      onScrollbarYEnabledChange: E,
      onCornerWidthChange: $,
      onCornerHeightChange: k
    }), (T, W) => (openBlock(), createBlock(unref(R), {
      ref_key: "primitiveElement",
      ref: e,
      "as-child": o.asChild,
      dir: o.dir,
      style: normalizeStyle({
        position: "relative",
        // Pass corner sizes as CSS vars to reduce re-renders of context consumers
        ["--radix-scroll-area-corner-width"]: l.value + "px",
        ["--radix-scroll-area-corner-height"]: n.value + "px"
      })
    }, {
      default: withCtx(() => [
        renderSlot(T.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "dir", "style"]));
  }
});
var xs = defineComponent({
  __name: "ScrollAreaViewport",
  props: {
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(ue), { primitiveElement: t, currentElement: l } = B(), n = ref();
    return onMounted(() => {
      e == null || e.onViewportChange(n.value), e == null || e.onContentChange(l.value);
    }), (i, r) => {
      var s, d;
      return openBlock(), createElementBlock("div", {
        ref_key: "viewportElement",
        ref: n,
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
          overflowX: (s = unref(e)) != null && s.scrollbarXEnabled.value ? "scroll" : "hidden",
          overflowY: (d = unref(e)) != null && d.scrollbarYEnabled.value ? "scroll" : "hidden"
        })
      }, [
        createVNode(unref(R), {
          ref_key: "primitiveElement",
          ref: t,
          style: { minWidth: "100%", display: "table" },
          "as-child": o.asChild
        }, {
          default: withCtx(() => [
            renderSlot(i.$slots, "default")
          ]),
          _: 3
        }, 8, ["as-child"])
      ], 4);
    };
  }
});
function ql(a, [o, e]) {
  return Math.min(e, Math.max(o, a));
}
function xa(a, o) {
  return (e) => {
    if (a[0] === a[1] || o[0] === o[1])
      return o[0];
    const t = (o[1] - o[0]) / (a[1] - a[0]);
    return o[0] + t * (e - a[0]);
  };
}
function Kt(a) {
  const o = Da(a.viewport, a.content), e = a.scrollbar.paddingStart + a.scrollbar.paddingEnd, t = (a.scrollbar.size - e) * o;
  return Math.max(t, 18);
}
function Da(a, o) {
  const e = a / o;
  return isNaN(e) ? 0 : e;
}
var Xl = (a, o = () => {
}) => {
  let e = { left: a.scrollLeft, top: a.scrollTop }, t = 0;
  return function l() {
    const n = { left: a.scrollLeft, top: a.scrollTop }, i = e.left !== n.left, r = e.top !== n.top;
    (i || r) && o(), e = n, t = window.requestAnimationFrame(l);
  }(), () => window.cancelAnimationFrame(t);
};
function Ho(a, o, e = "ltr") {
  const t = Kt(o), l = o.scrollbar.paddingStart + o.scrollbar.paddingEnd, n = o.scrollbar.size - l, i = o.content - o.viewport, r = n - t, s = e === "ltr" ? [0, i] : [i * -1, 0], d = ql(
    a,
    s
  );
  return xa([0, i], [0, r])(d);
}
function gt(a) {
  return a ? parseInt(a, 10) : 0;
}
function Gl(a, o, e, t = "ltr") {
  const l = Kt(e), n = l / 2, i = o || n, r = l - i, s = e.scrollbar.paddingStart + i, d = e.scrollbar.size - e.scrollbar.paddingEnd - r, c = e.content - e.viewport, p = t === "ltr" ? [0, c] : [c * -1, 0];
  return xa(
    [s, d],
    p
  )(a);
}
function Fo(a, o) {
  return a > 0 && a < o;
}
var Ma = defineComponent({
  __name: "ScrollAreaScrollbarImpl",
  props: {
    isHorizontal: { type: Boolean }
  },
  emits: ["onDragScroll", "onWheelScroll", "onThumbPointerDown"],
  setup(a, { emit: o }) {
    const e = a, t = inject(ue), l = inject(
      mt
    ), n = inject(vt), { primitiveElement: i, currentElement: r } = B(), s = ref(""), d = ref();
    function c(h2) {
      var E, $;
      if (d.value) {
        const k = h2.clientX - ((E = d.value) == null ? void 0 : E.left), O = h2.clientY - (($ = d.value) == null ? void 0 : $.top);
        o("onDragScroll", { x: k, y: O });
      }
    }
    const p = (h2) => {
      h2.button === 0 && (h2.target.setPointerCapture(h2.pointerId), d.value = r.value.getBoundingClientRect(), s.value = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", t != null && t.viewport && (t.viewport.value.style.scrollBehavior = "auto"), c(h2));
    }, f = (h2) => {
      c(h2);
    }, m = (h2) => {
      const E = h2.target;
      E.hasPointerCapture(h2.pointerId) && E.releasePointerCapture(h2.pointerId), document.body.style.webkitUserSelect = s.value, t != null && t.viewport && (t.viewport.value.style.scrollBehavior = ""), d.value = void 0;
    }, v = (h2) => {
      var O;
      if (!l)
        return;
      const E = h2.target, $ = (O = r.value) == null ? void 0 : O.contains(E), k = l.sizes.value.content - l.sizes.value.viewport;
      $ && l.handleWheelScroll(h2, k);
    };
    onMounted(() => {
      document.addEventListener("wheel", v, { passive: false });
    }), onUnmounted(() => {
      document.removeEventListener("wheel", v);
    });
    const y = () => {
      var h2, E, $, k, O, x;
      r.value && (e.isHorizontal ? l == null || l.handleSizeChange({
        content: ((h2 = t == null ? void 0 : t.viewport.value) == null ? void 0 : h2.scrollWidth) ?? 0,
        viewport: ((E = t == null ? void 0 : t.viewport.value) == null ? void 0 : E.offsetWidth) ?? 0,
        scrollbar: {
          size: (($ = r.value) == null ? void 0 : $.clientWidth) ?? 0,
          paddingStart: gt(getComputedStyle(r.value).paddingLeft),
          paddingEnd: gt(getComputedStyle(r.value).paddingRight)
        }
      }) : l == null || l.handleSizeChange({
        content: ((k = t == null ? void 0 : t.viewport.value) == null ? void 0 : k.scrollHeight) ?? 0,
        viewport: ((O = t == null ? void 0 : t.viewport.value) == null ? void 0 : O.offsetHeight) ?? 0,
        scrollbar: {
          size: ((x = r.value) == null ? void 0 : x.clientHeight) ?? 0,
          paddingStart: gt(getComputedStyle(r.value).paddingLeft),
          paddingEnd: gt(getComputedStyle(r.value).paddingRight)
        }
      }));
    };
    return Ee(r, y), Ee(t == null ? void 0 : t.content, y), (h2, E) => {
      var $;
      return openBlock(), createBlock(unref(R), {
        ref_key: "primitiveElement",
        ref: i,
        style: { position: "absolute" },
        "data-scrollbarimpl": "",
        "as-child": ($ = unref(n)) == null ? void 0 : $.asChild.value,
        onPointerdown: p,
        onPointermove: f,
        onPointerup: m
      }, {
        default: withCtx(() => [
          renderSlot(h2.$slots, "default")
        ]),
        _: 3
      }, 8, ["as-child"]);
    };
  }
});
var Jl = defineComponent({
  __name: "ScrollAreaScrollbarX",
  setup(a) {
    const o = inject(ue), e = inject(
      mt
    ), { primitiveElement: t, currentElement: l } = B();
    onMounted(() => {
      l.value && (o == null || o.onScrollbarXChange(l.value));
    });
    const n = computed(() => e == null ? void 0 : e.sizes.value);
    return (i, r) => {
      var s, d, c, p;
      return openBlock(), createBlock(Ma, {
        "is-horizontal": true,
        "data-orientation": "horizontal",
        ref_key: "primitiveElement",
        ref: t,
        onOnDragScroll: r[0] || (r[0] = (f) => {
          var m;
          return (m = unref(e)) == null ? void 0 : m.onDragScroll(f.x);
        }),
        style: normalizeStyle({
          bottom: 0,
          left: ((d = (s = unref(o)) == null ? void 0 : s.dir) == null ? void 0 : d.value) === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
          right: ((p = (c = unref(o)) == null ? void 0 : c.dir) == null ? void 0 : p.value) === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
          ["--radix-scroll-area-thumb-width"]: n.value ? unref(Kt)(n.value) + "px" : void 0
        })
      }, {
        default: withCtx(() => [
          renderSlot(i.$slots, "default")
        ]),
        _: 3
      }, 8, ["style"]);
    };
  }
});
var Zl = defineComponent({
  __name: "ScrollAreaScrollbarY",
  setup(a) {
    const o = inject(ue), e = inject(
      mt
    ), { primitiveElement: t, currentElement: l } = B();
    onMounted(() => {
      l.value && (o == null || o.onScrollbarYChange(l.value));
    });
    const n = computed(() => e == null ? void 0 : e.sizes.value);
    return (i, r) => {
      var s, d, c, p;
      return openBlock(), createBlock(Ma, {
        "is-horizontal": false,
        "data-orientation": "vertical",
        ref_key: "primitiveElement",
        ref: t,
        onOnDragScroll: r[0] || (r[0] = (f) => {
          var m;
          return (m = unref(e)) == null ? void 0 : m.onDragScroll(f.y);
        }),
        style: normalizeStyle({
          top: 0,
          right: ((d = (s = unref(o)) == null ? void 0 : s.dir) == null ? void 0 : d.value) === "ltr" ? 0 : void 0,
          left: ((p = (c = unref(o)) == null ? void 0 : c.dir) == null ? void 0 : p.value) === "rtl" ? 0 : void 0,
          bottom: "var(--radix-scroll-area-corner-height)",
          ["--radix-scroll-area-thumb-height"]: n.value ? unref(Kt)(n.value) + "px" : void 0
        })
      }, {
        default: withCtx(() => [
          renderSlot(i.$slots, "default")
        ]),
        _: 3
      }, 8, ["style"]);
    };
  }
});
var mt = Symbol();
var _o = defineComponent({
  __name: "ScrollAreaScrollbarVisible",
  setup(a) {
    const o = inject(ue), e = inject(vt), t = ref({
      content: 0,
      viewport: 0,
      scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
    }), l = computed(() => {
      const h2 = Da(t.value.viewport, t.value.content);
      return h2 > 0 && h2 < 1;
    }), n = ref(), i = ref(0), r = (h2, E) => {
      if (f.value) {
        const $ = o.viewport.value.scrollLeft + h2.deltaY;
        o.viewport.value.scrollLeft = $, Fo($, E) && h2.preventDefault();
      } else {
        const $ = o.viewport.value.scrollTop + h2.deltaY;
        o.viewport.value.scrollTop = $, Fo($, E) && h2.preventDefault();
      }
    }, s = (h2, E) => {
      f.value ? i.value = E.x : i.value = E.y;
    }, d = (h2) => {
      i.value = 0;
    }, c = (h2) => {
      t.value = h2;
    };
    function p(h2, E) {
      return Gl(
        h2,
        i.value,
        t.value,
        E
      );
    }
    const f = computed(
      () => e == null ? void 0 : e.isHorizontal.value
    );
    return provide(
      mt,
      {
        sizes: t,
        hasThumb: l,
        handleWheelScroll: r,
        handleThumbDown: s,
        handleThumbUp: d,
        handleSizeChange: c,
        onThumbPositionChange: () => {
          var h2;
          if (f.value) {
            if (o != null && o.viewport.value && n.value) {
              const E = o == null ? void 0 : o.viewport.value.scrollLeft, $ = Ho(
                E,
                t.value,
                (h2 = o == null ? void 0 : o.dir) == null ? void 0 : h2.value
              );
              n.value.style.transform = `translate3d(${$}px, 0, 0)`;
            }
          } else if (o != null && o.viewport.value && n.value) {
            const E = o == null ? void 0 : o.viewport.value.scrollTop, $ = Ho(E, t.value);
            n.value.style.transform = `translate3d(0, ${$}px, 0)`;
          }
        },
        onThumbChange: (h2) => {
          n.value = h2;
        },
        onDragScroll: (h2) => {
          var E;
          f.value ? o.viewport.value.scrollLeft = p(
            h2,
            (E = o.dir) == null ? void 0 : E.value
          ) : o.viewport.value.scrollTop = p(h2);
        }
      }
    ), (h2, E) => f.value ? (openBlock(), createBlock(Jl, normalizeProps(mergeProps({ key: 0 }, h2.$attrs)), {
      default: withCtx(() => [
        renderSlot(h2.$slots, "default")
      ]),
      _: 3
    }, 16)) : (openBlock(), createBlock(Zl, normalizeProps(mergeProps({ key: 1 }, h2.$attrs)), {
      default: withCtx(() => [
        renderSlot(h2.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Ra = defineComponent({
  __name: "ScrollAreaScrollbarAuto",
  setup(a) {
    const o = inject(ue), e = inject(vt), t = ref(false), l = Qt(() => {
      if (o != null && o.viewport.value) {
        const n = (o == null ? void 0 : o.viewport.value.offsetWidth) < (o == null ? void 0 : o.viewport.value.scrollWidth), i = (o == null ? void 0 : o.viewport.value.offsetHeight) < (o == null ? void 0 : o.viewport.value.scrollHeight);
        t.value = e != null && e.isHorizontal.value ? n : i;
      }
    }, 10);
    return Ee(o == null ? void 0 : o.viewport, l), Ee(o == null ? void 0 : o.content, l), (n, i) => t.value ? (openBlock(), createBlock(_o, mergeProps({ key: 0 }, n.$attrs, {
      "data-state": t.value ? "visible" : "hidden"
    }), {
      default: withCtx(() => [
        renderSlot(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-state"])) : createCommentVNode("", true);
  }
});
var Ql = {
  inheritAttrs: false
};
var Vl = defineComponent({
  ...Ql,
  __name: "ScrollAreaScrollbarHover",
  setup(a) {
    const o = inject(ue);
    let e;
    const t = ref(false), l = () => {
      window.clearTimeout(e), t.value = true;
    }, n = () => {
      e = window.setTimeout(() => {
        t.value = false;
      }, o == null ? void 0 : o.scrollHideDelay.value);
    };
    return onMounted(() => {
      const i = o == null ? void 0 : o.scrollArea.value;
      i && (i.addEventListener("pointerenter", l), i.addEventListener("pointerleave", n));
    }), onUnmounted(() => {
      const i = o == null ? void 0 : o.scrollArea.value;
      i && (window.clearTimeout(e), i.removeEventListener("pointerenter", l), i.removeEventListener("pointerleave", n));
    }), (i, r) => t.value ? (openBlock(), createBlock(Ra, mergeProps({ key: 0 }, i.$attrs, {
      "data-state": t.value ? "visible" : "hidden"
    }), {
      default: withCtx(() => [
        renderSlot(i.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-state"])) : createCommentVNode("", true);
  }
});
var jl = defineComponent({
  __name: "ScrollAreaScrollbarScroll",
  setup(a) {
    const o = inject(ue), e = inject(vt), { state: t, dispatch: l } = Qo("hidden", {
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
      t.value === "idle" && window.setTimeout(
        () => l("HIDE"),
        o == null ? void 0 : o.scrollHideDelay.value
      );
    });
    const n = Qt(() => l("SCROLL_END"), 100);
    return watchEffect(() => {
      const i = o == null ? void 0 : o.viewport.value, r = e != null && e.isHorizontal.value ? "scrollLeft" : "scrollTop";
      if (i) {
        let s = i[r];
        const d = () => {
          const c = i[r];
          s !== c && (l("SCROLL"), n()), s = c;
        };
        i.addEventListener("scroll", d);
      }
    }), (i, r) => unref(t) !== "hidden" ? (openBlock(), createBlock(_o, normalizeProps(mergeProps({ key: 0 }, i.$attrs)), {
      default: withCtx(() => [
        renderSlot(i.$slots, "default")
      ]),
      _: 3
    }, 16)) : createCommentVNode("", true);
  }
});
var vt = Symbol();
var er = {
  inheritAttrs: false
};
var Ds = defineComponent({
  ...er,
  __name: "ScrollAreaScrollbar",
  props: {
    orientation: { default: "vertical" },
    forceMount: { type: Boolean, default: void 0 },
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(ue), t = computed(() => o.orientation === "horizontal");
    watch(
      t,
      () => {
        t.value ? e == null || e.onScrollbarXEnabledChange(true) : e == null || e.onScrollbarYEnabledChange(true);
      },
      { immediate: true }
    ), onUnmounted(() => {
      e == null || e.onScrollbarXEnabledChange(false), e == null || e.onScrollbarYEnabledChange(false);
    });
    const { orientation: l, forceMount: n, asChild: i } = toRefs(o);
    return provide(vt, {
      orientation: l,
      forceMount: n,
      isHorizontal: t,
      asChild: i
    }), (r, s) => {
      var d, c, p, f;
      return ((d = unref(e)) == null ? void 0 : d.type.value) === "hover" ? (openBlock(), createBlock(Vl, mergeProps({ key: 0 }, r.$attrs, { forceMount: unref(n) }), {
        default: withCtx(() => [
          renderSlot(r.$slots, "default")
        ]),
        _: 3
      }, 16, ["forceMount"])) : ((c = unref(e)) == null ? void 0 : c.type.value) === "scroll" ? (openBlock(), createBlock(jl, mergeProps({ key: 1 }, r.$attrs, { forceMount: unref(n) }), {
        default: withCtx(() => [
          renderSlot(r.$slots, "default")
        ]),
        _: 3
      }, 16, ["forceMount"])) : ((p = unref(e)) == null ? void 0 : p.type.value) === "auto" ? (openBlock(), createBlock(Ra, mergeProps({ key: 2 }, r.$attrs, { forceMount: unref(n) }), {
        default: withCtx(() => [
          renderSlot(r.$slots, "default")
        ]),
        _: 3
      }, 16, ["forceMount"])) : ((f = unref(e)) == null ? void 0 : f.type.value) === "always" ? (openBlock(), createBlock(_o, mergeProps({ key: 3 }, r.$attrs, {
        "data-state": "visible",
        forceMount: unref(n)
      }), {
        default: withCtx(() => [
          renderSlot(r.$slots, "default")
        ]),
        _: 3
      }, 16, ["forceMount"])) : createCommentVNode("", true);
    };
  }
});
var Ms = defineComponent({
  __name: "ScrollAreaThumb",
  props: {
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(ue), t = inject(
      mt
    ), l = (f) => {
      const v = f.target.getBoundingClientRect(), y = f.clientX - v.left, h2 = f.clientY - v.top;
      t == null || t.handleThumbDown(f, { x: y, y: h2 });
    }, n = (f) => {
      t == null || t.handleThumbUp(f);
    }, { primitiveElement: i, currentElement: r } = B(), s = ref(), d = computed(() => e == null ? void 0 : e.viewport.value), c = () => {
      if (!s.value) {
        const f = Xl(
          d.value,
          t == null ? void 0 : t.onThumbPositionChange
        );
        s.value = f, t == null || t.onThumbPositionChange();
      }
    }, p = computed(() => t == null ? void 0 : t.sizes.value);
    return cn(p, () => {
      t == null || t.onThumbChange(r.value), d.value && (t == null || t.onThumbPositionChange(), d.value.addEventListener("scroll", c));
    }), onUnmounted(() => {
      var f;
      d.value.removeEventListener("scroll", c), (f = e == null ? void 0 : e.viewport.value) == null || f.removeEventListener("scroll", c);
    }), (f, m) => {
      var v;
      return openBlock(), createBlock(unref(R), {
        ref_key: "primitiveElement",
        ref: i,
        "data-state": (v = unref(t)) != null && v.hasThumb ? "visible" : "hidden",
        style: normalizeStyle({
          width: "var(--radix-scroll-area-thumb-width)",
          height: "var(--radix-scroll-area-thumb-height)"
        }),
        "as-child": o.asChild,
        onPointerdown: l,
        onPointerup: n
      }, {
        default: withCtx(() => [
          renderSlot(f.$slots, "default")
        ]),
        _: 3
      }, 8, ["data-state", "style", "as-child"]);
    };
  }
});
var tr = defineComponent({
  __name: "ScrollAreaCornerImpl",
  setup(a) {
    const o = inject(ue), e = ref(0), t = ref(0), l = computed(() => !!e.value && !!t.value), n = () => {
      var s;
      const r = ((s = o == null ? void 0 : o.scrollbarX.value) == null ? void 0 : s.offsetHeight) || 0;
      o == null || o.onCornerHeightChange(r), t.value = r;
    }, i = () => {
      var s;
      const r = ((s = o == null ? void 0 : o.scrollbarY.value) == null ? void 0 : s.offsetWidth) || 0;
      o == null || o.onCornerWidthChange(r), e.value = r;
    };
    return Ee(o == null ? void 0 : o.scrollbarX.value, n), Ee(o == null ? void 0 : o.scrollbarY.value, i), watch(() => o == null ? void 0 : o.scrollbarX.value, n), watch(() => o == null ? void 0 : o.scrollbarY.value, i), (r, s) => {
      var d;
      return l.value ? (openBlock(), createBlock(unref(R), mergeProps({
        key: 0,
        style: {
          width: e.value + "px",
          height: t.value + "px",
          position: "absolute",
          right: unref(o).dir.value === "ltr" ? 0 : void 0,
          left: unref(o).dir.value === "rtl" ? 0 : void 0,
          bottom: 0
        }
      }, (d = r.$parent) == null ? void 0 : d.$props), {
        default: withCtx(() => [
          renderSlot(r.$slots, "default")
        ]),
        _: 3
      }, 16, ["style"])) : createCommentVNode("", true);
    };
  }
});
var Rs = defineComponent({
  __name: "ScrollAreaCorner",
  props: {
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(ue), t = computed(
      () => !!(e != null && e.scrollbarX.value) && !!e.scrollbarY.value
    ), l = computed(
      () => (e == null ? void 0 : e.type.value) !== "scroll" && t.value
    );
    return (n, i) => l.value ? (openBlock(), createBlock(tr, normalizeProps(mergeProps({ key: 0 }, o)), {
      default: withCtx(() => [
        renderSlot(n.$slots, "default")
      ]),
      _: 3
    }, 16)) : createCommentVNode("", true);
  }
});
export {
  lr as AccordionContent,
  rr as AccordionHeader,
  nr as AccordionItem,
  ar as AccordionRoot,
  ir as AccordionTrigger,
  Xr as AlertDialogAction,
  Yr as AlertDialogCancel,
  zr as AlertDialogContent,
  qr as AlertDialogDescription,
  Wr as AlertDialogOverlay,
  Fr as AlertDialogPortal,
  Kr as AlertDialogRoot,
  Ur as AlertDialogTitle,
  Hr as AlertDialogTrigger,
  yr as AspectRatio,
  oi as AvatarFallback,
  ti as AvatarImage,
  ei as AvatarRoot,
  ur as CheckboxIndicator,
  sr as CheckboxRoot,
  Nn as CollapsibleContent,
  Rn as CollapsibleRoot,
  In as CollapsibleTrigger,
  Ni as ContextMenuArrow,
  Wi as ContextMenuCheckboxItem,
  Li as ContextMenuContent,
  Fi as ContextMenuGroup,
  Hi as ContextMenuItem,
  Yi as ContextMenuItemIndicator,
  Ui as ContextMenuLabel,
  Ii as ContextMenuPortal,
  qi as ContextMenuRadioGroup,
  Xi as ContextMenuRadioItem,
  Mi as ContextMenuRoot,
  zi as ContextMenuSeparator,
  Ki as ContextMenuSub,
  Gi as ContextMenuSubContent,
  Ji as ContextMenuSubTrigger,
  Ri as ContextMenuTrigger,
  Ir as DialogClose,
  Mr as DialogContent,
  Nr as DialogDescription,
  Rr as DialogOverlay,
  Dr as DialogPortal,
  Br as DialogRoot,
  Lr as DialogTitle,
  xr as DialogTrigger,
  Ei as DropdownMenuArrow,
  ki as DropdownMenuCheckboxItem,
  wi as DropdownMenuContent,
  Si as DropdownMenuGroup,
  $i as DropdownMenuItem,
  Pi as DropdownMenuItemIndicator,
  Oi as DropdownMenuLabel,
  bi as DropdownMenuPortal,
  Ti as DropdownMenuRadioGroup,
  Bi as DropdownMenuRadioItem,
  gi as DropdownMenuRoot,
  Ai as DropdownMenuSeparator,
  Ci as DropdownMenuSub,
  xi as DropdownMenuSubContent,
  Di as DropdownMenuSubTrigger,
  _i as DropdownMenuTrigger,
  ci as HoverCardArrow,
  di as HoverCardContent,
  ui as HoverCardPortal,
  ii as HoverCardRoot,
  si as HoverCardTrigger,
  fr as Label,
  cs as MenubarArrow,
  hs as MenubarCheckboxItem,
  ds as MenubarContent,
  ms as MenubarGroup,
  fs as MenubarItem,
  ys as MenubarItemIndicator,
  gs as MenubarLabel,
  is as MenubarMenu,
  us as MenubarPortal,
  _s as MenubarRadioGroup,
  bs as MenubarRadioItem,
  rs as MenubarRoot,
  vs as MenubarSeparator,
  ps as MenubarSub,
  ws as MenubarSubContent,
  Es as MenubarSubTrigger,
  ss as MenubarTrigger,
  Ss as NavigationMenuContent,
  As as NavigationMenuIndicator,
  $s as NavigationMenuItem,
  ks as NavigationMenuLink,
  Ps as NavigationMenuList,
  Cs as NavigationMenuRoot,
  Os as NavigationMenuTrigger,
  Ts as NavigationMenuViewport,
  hi as PopoverArrow,
  yi as PopoverClose,
  vi as PopoverContent,
  mi as PopoverPortal,
  pi as PopoverRoot,
  fi as PopoverTrigger,
  Tr as ProgressIndicator,
  Or as ProgressRoot,
  Pr as RadioGroupIndicator,
  kr as RadioGroupItem,
  Ar as RadioGroupRoot,
  Rs as ScrollAreaCorner,
  Bs as ScrollAreaRoot,
  Ds as ScrollAreaScrollbar,
  Ms as ScrollAreaThumb,
  xs as ScrollAreaViewport,
  es as SelectArrow,
  ji as SelectContent,
  ns as SelectGroup,
  ls as SelectItem,
  os as SelectItemIndicator,
  as as SelectLabel,
  Vi as SelectPortal,
  Zi as SelectRoot,
  ts as SelectSeparator,
  Qi as SelectTrigger,
  pr as Separator,
  Sr as SliderRange,
  Er as SliderRoot,
  Cr as SliderThumb,
  $r as SliderTrack,
  dr as SwitchRoot,
  cr as SwitchThumb,
  br as TabsContent,
  _r as TabsList,
  gr as TabsRoot,
  wr as TabsTrigger,
  mr as Toggle,
  hr as ToggleGroupItem,
  vr as ToggleGroupRoot,
  Jr as ToolbarButton,
  Zr as ToolbarLink,
  Gr as ToolbarRoot,
  jr as ToolbarSeparator,
  Qr as ToolbarToggleGroup,
  Vr as ToolbarToggleItem,
  ri as TooltipArrow,
  li as TooltipContent,
  ai as TooltipRoot,
  ni as TooltipTrigger
};
//# sourceMappingURL=radix-vue.js.map
