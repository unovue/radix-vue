import {
  Fragment,
  Teleport,
  camelize,
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
  isRef,
  mergeDefaults,
  mergeProps,
  nextTick,
  normalizeProps,
  normalizeStyle,
  onBeforeUnmount,
  onBeforeUpdate,
  onMounted,
  onScopeDispose,
  onUnmounted,
  onUpdated,
  openBlock,
  provide,
  reactive,
  readonly,
  ref,
  renderList,
  renderSlot,
  resolveDynamicComponent,
  shallowReadonly,
  shallowRef,
  toDisplayString,
  toHandlerKey,
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

// ../node_modules/.pnpm/radix-vue@0.1.19_vue@3.3.4/node_modules/radix-vue/dist/index.js
var On = Object.defineProperty;
var Pn = Object.defineProperties;
var An = Object.getOwnPropertyDescriptors;
var La = Object.getOwnPropertySymbols;
var Bn = Object.prototype.hasOwnProperty;
var Tn = Object.prototype.propertyIsEnumerable;
var Na = (o, t, e) => t in o ? On(o, t, { enumerable: true, configurable: true, writable: true, value: e }) : o[t] = e;
var kn = (o, t) => {
  for (var e in t || (t = {}))
    Bn.call(t, e) && Na(o, e, t[e]);
  if (La)
    for (var e of La(t))
      Tn.call(t, e) && Na(o, e, t[e]);
  return o;
};
var Dn = (o, t) => Pn(o, An(t));
function Mn(o, t) {
  var e;
  const a = shallowRef();
  return watchEffect(() => {
    a.value = o();
  }, Dn(kn({}, t), {
    flush: (e = t == null ? void 0 : t.flush) != null ? e : "sync"
  })), readonly(a);
}
function mo(o, t) {
  let e, a, s;
  const n = ref(true), l = () => {
    n.value = true, s();
  };
  watch(o, l, { flush: "sync" });
  const r = typeof t == "function" ? t : t.get, i = typeof t == "function" ? void 0 : t.set, d = customRef((c, p) => (a = c, s = p, {
    get() {
      return n.value && (e = r(), n.value = false), a(), e;
    },
    set(f) {
      i == null || i(f);
    }
  }));
  return Object.isExtensible(d) && (d.trigger = l), d;
}
function xt(o) {
  return getCurrentScope() ? (onScopeDispose(o), true) : false;
}
function ia(o) {
  let t = false, e;
  const a = effectScope(true);
  return (...s) => (t || (e = a.run(() => o(...s)), t = true), e);
}
function ke(o) {
  return typeof o == "function" ? o() : unref(o);
}
var ct = typeof window < "u";
var In = (o) => typeof o < "u";
var Je = () => {
};
var Zt = xn();
function xn() {
  var o;
  return ct && ((o = window == null ? void 0 : window.navigator) == null ? void 0 : o.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
}
function Rn(o, t) {
  function e(...a) {
    return new Promise((s, n) => {
      Promise.resolve(o(() => t.apply(this, a), { fn: t, thisArg: this, args: a })).then(s).catch(n);
    });
  }
  return e;
}
function Ln(o, t = {}) {
  let e, a, s = Je;
  const n = (r) => {
    clearTimeout(r), s(), s = Je;
  };
  return (r) => {
    const i = ke(o), d = ke(t.maxWait);
    return e && n(e), i <= 0 || d !== void 0 && d <= 0 ? (a && (n(a), a = null), Promise.resolve(r())) : new Promise((c, p) => {
      s = t.rejectOnCancel ? p : c, d && !a && (a = setTimeout(() => {
        e && n(e), a = null, c(r());
      }, d)), e = setTimeout(() => {
        a && n(a), a = null, c(r());
      }, i);
    });
  };
}
function Nn(...o) {
  if (o.length !== 1)
    return toRef(...o);
  const t = o[0];
  return typeof t == "function" ? readonly(customRef(() => ({ get: t, set: Je }))) : ref(t);
}
function Kn(o, t = 1e4) {
  return customRef((e, a) => {
    let s = o, n;
    const l = () => setTimeout(() => {
      s = o, a();
    }, ke(t));
    return xt(() => {
      clearTimeout(n);
    }), {
      get() {
        return e(), s;
      },
      set(r) {
        s = r, a(), clearTimeout(n), n = l();
      }
    };
  });
}
function ua(o, t = 200, e = {}) {
  return Rn(
    Ln(t, e),
    o
  );
}
function Fn(o, t, e) {
  const a = watch(o, (...s) => (nextTick(() => a()), t(...s)), e);
}
function oe(o) {
  var t;
  const e = ke(o);
  return (t = e == null ? void 0 : e.$el) != null ? t : e;
}
var pt = ct ? window : void 0;
var Gt = ct ? window.document : void 0;
function ye(...o) {
  let t, e, a, s;
  if (typeof o[0] == "string" || Array.isArray(o[0]) ? ([e, a, s] = o, t = pt) : [t, e, a, s] = o, !t)
    return Je;
  Array.isArray(e) || (e = [e]), Array.isArray(a) || (a = [a]);
  const n = [], l = () => {
    n.forEach((c) => c()), n.length = 0;
  }, r = (c, p, f, m) => (c.addEventListener(p, f, m), () => c.removeEventListener(p, f, m)), i = watch(
    () => [oe(t), ke(s)],
    ([c, p]) => {
      l(), c && n.push(
        ...e.flatMap((f) => a.map((m) => r(c, f, m, p)))
      );
    },
    { immediate: true, flush: "post" }
  ), d = () => {
    i(), l();
  };
  return xt(d), d;
}
var Ka = false;
function ze(o, t, e = {}) {
  const { window: a = pt, ignore: s = [], capture: n = true, detectIframe: l = false } = e;
  if (!a)
    return;
  Zt && !Ka && (Ka = true, Array.from(a.document.body.children).forEach((f) => f.addEventListener("click", Je)), a.document.documentElement.addEventListener("click", Je));
  let r = true;
  const i = (f) => s.some((m) => {
    if (typeof m == "string")
      return Array.from(a.document.querySelectorAll(m)).some((v) => v === f.target || f.composedPath().includes(v));
    {
      const v = oe(m);
      return v && (f.target === v || f.composedPath().includes(v));
    }
  }), c = [
    ye(a, "click", (f) => {
      const m = oe(o);
      if (!(!m || m === f.target || f.composedPath().includes(m))) {
        if (f.detail === 0 && (r = !i(f)), !r) {
          r = true;
          return;
        }
        t(f);
      }
    }, { passive: true, capture: n }),
    ye(a, "pointerdown", (f) => {
      const m = oe(o);
      m && (r = !f.composedPath().includes(m) && !i(f));
    }, { passive: true }),
    l && ye(a, "blur", (f) => {
      setTimeout(() => {
        var m;
        const v = oe(o);
        ((m = a.document.activeElement) == null ? void 0 : m.tagName) === "IFRAME" && !(v != null && v.contains(a.document.activeElement)) && t(f);
      }, 0);
    })
  ].filter(Boolean);
  return () => c.forEach((f) => f());
}
function Hn(o) {
  return typeof o == "function" ? o : typeof o == "string" ? (t) => t.key === o : Array.isArray(o) ? (t) => o.includes(t.key) : () => true;
}
function zn(...o) {
  let t, e, a = {};
  o.length === 3 ? (t = o[0], e = o[1], a = o[2]) : o.length === 2 ? typeof o[1] == "object" ? (t = true, e = o[0], a = o[1]) : (t = o[0], e = o[1]) : (t = true, e = o[0]);
  const {
    target: s = pt,
    eventName: n = "keydown",
    passive: l = false,
    dedupe: r = false
  } = a, i = Hn(t);
  return ye(s, n, (c) => {
    c.repeat && ke(r) || i(c) && e(c);
  }, l);
}
function da(o = {}) {
  var t;
  const {
    window: e = pt,
    deep: a = true
  } = o, s = (t = o.document) != null ? t : e == null ? void 0 : e.document, n = () => {
    var r;
    let i = s == null ? void 0 : s.activeElement;
    if (a)
      for (; i != null && i.shadowRoot; )
        i = (r = i == null ? void 0 : i.shadowRoot) == null ? void 0 : r.activeElement;
    return i;
  }, l = mo(
    () => null,
    () => n()
  );
  return e && (ye(e, "blur", (r) => {
    r.relatedTarget === null && l.trigger();
  }, true), ye(e, "focus", l.trigger, true)), l;
}
function Wn() {
  const o = ref(false);
  return getCurrentInstance() && onMounted(() => {
    o.value = true;
  }), o;
}
function Yn(o) {
  const t = Wn();
  return computed(() => (t.value, !!o()));
}
function Un(o) {
  return JSON.parse(JSON.stringify(o));
}
var Fa = Object.getOwnPropertySymbols;
var Gn = Object.prototype.hasOwnProperty;
var Xn = Object.prototype.propertyIsEnumerable;
var qn = (o, t) => {
  var e = {};
  for (var a in o)
    Gn.call(o, a) && t.indexOf(a) < 0 && (e[a] = o[a]);
  if (o != null && Fa)
    for (var a of Fa(o))
      t.indexOf(a) < 0 && Xn.call(o, a) && (e[a] = o[a]);
  return e;
};
function we(o, t, e = {}) {
  const a = e, { window: s = pt } = a, n = qn(a, ["window"]);
  let l;
  const r = Yn(() => s && "ResizeObserver" in s), i = () => {
    l && (l.disconnect(), l = void 0);
  }, d = computed(
    () => Array.isArray(o) ? o.map((f) => oe(f)) : [oe(o)]
  ), c = watch(
    d,
    (f) => {
      if (i(), r.value && s) {
        l = new ResizeObserver(t);
        for (const m of f)
          m && l.observe(m, n);
      }
    },
    { immediate: true, flush: "post", deep: true }
  ), p = () => {
    i(), c();
  };
  return xt(p), {
    isSupported: r,
    stop: p
  };
}
function vo(o) {
  const t = window.getComputedStyle(o);
  if (t.overflowX === "scroll" || t.overflowY === "scroll" || t.overflowX === "auto" && o.clientWidth < o.scrollWidth || t.overflowY === "auto" && o.clientHeight < o.scrollHeight)
    return true;
  {
    const e = o.parentNode;
    return !e || e.tagName === "BODY" ? false : vo(e);
  }
}
function Jn(o) {
  const t = o || window.event, e = t.target;
  return vo(e) ? false : t.touches.length > 1 ? true : (t.preventDefault && t.preventDefault(), false);
}
function Qn(o, t = false) {
  const e = ref(t);
  let a = null, s;
  watch(Nn(o), (r) => {
    if (r) {
      const i = r;
      s = i.style.overflow, e.value && (i.style.overflow = "hidden");
    }
  }, {
    immediate: true
  });
  const n = () => {
    const r = ke(o);
    !r || e.value || (Zt && (a = ye(
      r,
      "touchmove",
      (i) => {
        Jn(i);
      },
      { passive: false }
    )), r.style.overflow = "hidden", e.value = true);
  }, l = () => {
    const r = ke(o);
    !r || !e.value || (Zt && (a == null || a()), r.style.overflow = s, e.value = false);
  };
  return xt(l), computed({
    get() {
      return e.value;
    },
    set(r) {
      r ? n() : l();
    }
  });
}
function U(o, t, e, a = {}) {
  var s, n, l;
  const {
    clone: r = false,
    passive: i = false,
    eventName: d,
    deep: c = false,
    defaultValue: p,
    shouldEmit: f
  } = a, m = getCurrentInstance(), v = e || (m == null ? void 0 : m.emit) || ((s = m == null ? void 0 : m.$emit) == null ? void 0 : s.bind(m)) || ((l = (n = m == null ? void 0 : m.proxy) == null ? void 0 : n.$emit) == null ? void 0 : l.bind(m == null ? void 0 : m.proxy));
  let g = d;
  t || (t = "modelValue"), g = g || `update:${t.toString()}`;
  const h2 = (P) => r ? typeof r == "function" ? r(P) : Un(P) : P, C = () => In(o[t]) ? h2(o[t]) : p, $ = (P) => {
    f ? f(P) && v(g, P) : v(g, P);
  };
  if (i) {
    const P = C(), B = ref(P);
    return watch(
      () => o[t],
      (R) => B.value = h2(R)
    ), watch(
      B,
      (R) => {
        (R !== o[t] || c) && $(R);
      },
      { deep: c }
    ), B;
  } else
    return computed({
      get() {
        return C();
      },
      set(P) {
        $(P);
      }
    });
}
function ae(o, t, e, a = {}) {
  if (!t)
    return null;
  const {
    arrowKeyOptions: s = "both",
    attributeName: n = "data-radix-vue-collection-item",
    itemsArray: l = [],
    loop: r = true,
    dir: i = "ltr",
    preventScroll: d = true,
    focus: c = false
  } = a, [p, f, m, v, g, h2] = [
    o.key === "ArrowRight",
    o.key === "ArrowLeft",
    o.key === "ArrowUp",
    o.key === "ArrowDown",
    o.key === "Home",
    o.key === "End"
  ], C = m || v, $ = p || f;
  if (!g && !h2 && (!C && !$ || s === "vertical" && $ || s === "horizontal" && C))
    return null;
  const P = e ? Array.from(e.querySelectorAll(`[${n}]`)) : l;
  if (!P.length)
    return null;
  d && o.preventDefault();
  let B = null;
  return $ || C ? B = ho(P, t, {
    goForward: C ? v : i === "ltr" ? p : f,
    loop: r
  }) : g ? B = P.at(0) || null : h2 && (B = P.at(-1) || null), c && (B == null || B.focus()), B;
}
function ho(o, t, { goForward: e, loop: a }, s = o.length) {
  if (--s === 0)
    return null;
  const n = o.indexOf(t), l = e ? n + 1 : n - 1;
  if (!a && (l < 0 || l >= o.length))
    return null;
  const r = (l + o.length) % o.length, i = o[r];
  return i ? i.hasAttribute("disabled") && i.getAttribute("disabled") !== "false" ? ho(
    o,
    i,
    { goForward: e, loop: a },
    s
  ) : i : null;
}
async function Zn(o, t, e = 500) {
  let a = true, s, n;
  const l = new Promise((d) => {
    n = d, s = setTimeout(() => {
      i(), d(a);
    }, e);
  });
  function r() {
    a = false, i(), clearTimeout(s), s = void 0, n(false);
  }
  function i() {
    t.removeEventListener("mouseleave", r);
  }
  return t.addEventListener("mouseleave", r), l;
}
function Vn(o, t = {}) {
  const { delayEnter: e = 0, delayLeave: a = 0, disabled: s = false } = t;
  let n;
  function l(r) {
    if (n && (clearTimeout(n), n = void 0), toValue(s))
      return;
    const i = r ? e : a, d = r ? t.onHoverEnter : t.onHoverLeave;
    n = setTimeout(() => d == null ? void 0 : d(), i);
  }
  ye(o, "mouseenter", () => l(true), { passive: true }), ye(o, "mouseleave", () => l(false), { passive: true });
}
var yo = (o, t = 300) => {
  let e = true, a, s;
  const n = o.target, l = new Promise((d) => {
    s = d, a = setTimeout(() => {
      i(), d(e);
    }, t);
  });
  function r() {
    e = false, i(), clearTimeout(a), a = void 0, s(false);
  }
  function i() {
    n.removeEventListener("mouseenter", r);
  }
  return n.addEventListener("mouseenter", r), l;
};
function go(o, t) {
  const e = ref(o);
  function a(n) {
    return t[e.value][n] ?? e.value;
  }
  return {
    state: e,
    dispatch: (n) => {
      e.value = a(n);
    }
  };
}
var Xt = 0;
function jn() {
  watchEffect((o) => {
    const t = document.querySelectorAll("[data-radix-focus-guard]");
    document.body.insertAdjacentElement(
      "afterbegin",
      t[0] ?? Ha()
    ), document.body.insertAdjacentElement(
      "beforeend",
      t[1] ?? Ha()
    ), Xt++, o(() => {
      Xt === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((e) => e.remove()), Xt--;
    });
  });
}
function Ha() {
  const o = document.createElement("span");
  return o.setAttribute("data-radix-focus-guard", ""), o.tabIndex = 0, o.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", o;
}
var es = "data-radix-vue-collection-item";
var za = Symbol();
var de = () => {
  const o = (s) => {
    provide(za, {
      collectionRef: s
    });
  }, t = inject(za);
  return { createCollection: o, setCollection: (s) => {
    t && (t.collectionRef = s);
  }, getItems: (s) => {
    const n = s ?? oe(t == null ? void 0 : t.collectionRef);
    return n ? Array.from(
      n.querySelectorAll(
        `[${es}]:not([data-disabled])`
      )
    ) : [];
  } };
};
var ts = "data-radix-vue-collection-item";
var Wa = Symbol();
var as = () => ({ createCollection: (e) => {
  const a = ref([]);
  function s() {
    const n = oe(e);
    return n ? a.value = Array.from(
      n.querySelectorAll(`[${ts}]:not([data-disabled])`)
    ) : a.value = [];
  }
  return onBeforeUpdate(() => {
    a.value = [];
  }), onMounted(s), onUpdated(s), provide(Wa, a), a;
}, injectCollection: () => inject(Wa, ref([])) });
var Ie = (o) => {
  const t = getCurrentInstance(), e = t == null ? void 0 : t.type.emits, a = {};
  return e.forEach((s) => {
    a[toHandlerKey(camelize(s))] = (...n) => o(s, ...n);
  }), a;
};
var os = (o) => {
  const t = ref(), e = computed(() => {
    var s;
    return ((s = t.value) == null ? void 0 : s.width) ?? 0;
  }), a = computed(() => {
    var s;
    return ((s = t.value) == null ? void 0 : s.height) ?? 0;
  });
  return onMounted(() => {
    const s = oe(o);
    if (s) {
      t.value = { width: s.offsetWidth, height: s.offsetHeight };
      const n = new ResizeObserver((l) => {
        if (!Array.isArray(l) || !l.length)
          return;
        const r = l[0];
        let i, d;
        if ("borderBoxSize" in r) {
          const c = r.borderBoxSize, p = Array.isArray(c) ? c[0] : c;
          i = p.inlineSize, d = p.blockSize;
        } else
          i = s.offsetWidth, d = s.offsetHeight;
        t.value = { width: i, height: d };
      });
      return n.observe(s, { box: "border-box" }), () => n.unobserve(s);
    } else
      t.value = void 0;
  }), {
    width: e,
    height: a
  };
};
var ns = ia(() => ({ count: ref(0) }));
var te = (o) => {
  const { count: t } = ns();
  return o || t.value++, o || `radix-${t.value}`;
};
function ca(o) {
  if (o) {
    const t = [
      ...Array.from(
        o.querySelectorAll(
          'a[href], button, input, textarea, select, details,[tabindex]:not([tabindex="-1"])'
        )
      )
    ].filter(
      (n) => !n.hasAttribute("disabled") && !n.getAttribute("aria-hidden")
    ), e = t[0], a = t[t.length - 1], s = 9;
    return e && e.focus(), o.addEventListener("keydown", function(n) {
      (n.key === "Tab" || n.keyCode === s) && (n.shiftKey ? document.activeElement === e && (a.focus(), n.preventDefault()) : document.activeElement === a && (e.focus(), n.preventDefault()));
    }), e;
  }
}
function pa(o) {
  return o ? o.flatMap((t) => t.type === Fragment ? pa(t.children) : [t]) : [];
}
function ss(o) {
  return o && (typeof o.type == "string" || typeof o.type == "object" || typeof o.type == "function");
}
var ls = ia(() => ref(0));
var fa = (o) => {
  const t = ls(), e = Qn(Gt == null ? void 0 : Gt.body, false), a = computed({
    get() {
      return e.value;
    },
    set(s) {
      if (ct)
        if (s) {
          const n = window.innerWidth - document.documentElement.clientWidth;
          n > 0 && (document.body.style.paddingRight = n + "px"), document.body.style.pointerEvents = "none", e.value = true;
        } else
          document.body.style.paddingRight = "", document.body.style.pointerEvents = "", e.value = false;
    }
  });
  return o && (t.value++, a.value = o), onBeforeUnmount(() => {
    o && (t.value--, t.value === 0 && (document.body.style.paddingRight = "", document.body.style.pointerEvents = ""));
  }), a;
};
var Ya = (o) => {
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
var A = defineComponent({
  inheritAttrs: false,
  name: "Primitive",
  props: {
    asChild: {
      type: Boolean,
      default: false
    },
    as: {
      type: String,
      default: "div"
    }
  },
  setup(o, { attrs: t, slots: e }) {
    const a = o.asChild ? "template" : o.as;
    return a !== "template" ? () => h(o.as, t, { default: e.default }) : () => {
      var l, r;
      if (!e.default)
        return null;
      const s = pa(e.default());
      s.length !== 1 && Ya(a);
      const n = s[0];
      if (ss(n) || Ya(a), Object.keys(t).length > 0) {
        (l = n.props) == null || delete l.ref;
        const i = mergeProps(t, n.props ?? {});
        t.class && ((r = n.props) != null && r.class) && delete n.props.class;
        const d = cloneVNode(n, i);
        for (const c in i)
          c.startsWith("on") && (d.props || (d.props = {}), d.props[c] = i[c]);
        return d;
      }
      return n;
    };
  }
});
var x = () => {
  const o = ref(), t = computed(() => oe(o));
  return {
    primitiveElement: o,
    currentElement: t
  };
};
var ma = Symbol();
var rs = defineComponent({
  __name: "CollapsibleRoot",
  props: {
    defaultOpen: { type: Boolean, default: false },
    open: { type: Boolean, default: void 0 },
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:open"],
  setup(o, { emit: t }) {
    const e = o, a = U(e, "open", t, {
      defaultValue: e.defaultOpen,
      passive: true
    }), s = U(e, "disabled");
    return provide(ma, {
      contentId: te(),
      disabled: s,
      open: a,
      onOpenToggle: () => {
        a.value = !a.value;
      }
    }), (n, l) => (openBlock(), createBlock(unref(A), {
      as: n.as,
      "as-child": e.asChild,
      "data-state": e.open ? "open" : "closed",
      "data-disabled": e.disabled ? "" : void 0
    }, {
      default: withCtx(() => [
        renderSlot(n.$slots, "default", { open: unref(a) })
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-state", "data-disabled"]));
  }
});
var is = defineComponent({
  __name: "CollapsibleTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(o) {
    const t = o, e = inject(
      ma
    );
    return (a, s) => {
      var n, l, r, i, d, c, p, f;
      return openBlock(), createBlock(unref(A), {
        type: a.as === "button" ? "button" : void 0,
        as: a.as,
        "as-child": t.asChild,
        "aria-controls": (n = unref(e)) == null ? void 0 : n.contentId,
        "aria-expanded": ((l = unref(e)) == null ? void 0 : l.open.value) || false,
        "data-state": (r = unref(e)) != null && r.open.value ? "open" : "closed",
        "data-disabled": (d = (i = unref(e)) == null ? void 0 : i.disabled) != null && d.value ? "" : void 0,
        disabled: (p = (c = unref(e)) == null ? void 0 : c.disabled) == null ? void 0 : p.value,
        onClick: (f = unref(e)) == null ? void 0 : f.onOpenToggle
      }, {
        default: withCtx(() => [
          renderSlot(a.$slots, "default")
        ]),
        _: 3
      }, 8, ["type", "as", "as-child", "aria-controls", "aria-expanded", "data-state", "data-disabled", "disabled", "onClick"]);
    };
  }
});
function us(o, t) {
  const e = ref({}), a = ref("none"), s = o.value ? "mounted" : "unmounted", { state: n, dispatch: l } = go(s, {
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
    o,
    async (f, m) => {
      var g;
      const v = m !== f;
      if (await nextTick(), v) {
        const h2 = a.value, C = bt(t.value);
        f ? l("MOUNT") : C === "none" || ((g = e.value) == null ? void 0 : g.display) === "none" ? l("UNMOUNT") : l(m && h2 !== C ? "ANIMATION_OUT" : "UNMOUNT");
      }
    },
    { immediate: true }
  );
  const r = (f) => {
    const v = bt(t.value).includes(
      f.animationName
    );
    f.target === t.value && v && l("ANIMATION_END");
  }, i = (f) => {
    f.target === t.value && (a.value = bt(t.value));
  }, d = watch(
    t,
    (f, m) => {
      f ? (e.value = getComputedStyle(f), f.addEventListener("animationstart", i), f.addEventListener("animationcancel", r), f.addEventListener("animationend", r)) : (l("ANIMATION_END"), m == null || m.removeEventListener("animationstart", i), m == null || m.removeEventListener("animationcancel", r), m == null || m.removeEventListener("animationend", r));
    },
    { immediate: true }
  ), c = watch(n, () => {
    const f = bt(t.value);
    a.value = n.value === "mounted" ? f : "none";
  });
  return onUnmounted(() => {
    d(), c();
  }), {
    isPresent: computed(
      () => ["mounted", "unmountSuspended"].includes(n.value)
    )
  };
}
function bt(o) {
  return o && getComputedStyle(o).animationName || "none";
}
var Ee = defineComponent({
  __name: "Presence",
  props: {
    present: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(o, { expose: t }) {
    var f;
    const e = o, { present: a, forceMount: s } = toRefs(e), n = useSlots(), l = ref(), { isPresent: r } = us(a, l), i = {
      created(m) {
        l.value = m;
      }
    };
    let d = (f = n.default) == null ? void 0 : f.call(n);
    d = pa(d || []);
    const c = getCurrentInstance(), p = () => {
      var m, v, g;
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
            ].map((C) => `  - ${C}`).join(`
`)
          ].join(`
`)
        );
      }
      return s.value || a.value || r.value ? withDirectives((g = (v = n.default) == null ? void 0 : v.call(n)) == null ? void 0 : g[0], [[i]]) : null;
    };
    return t({
      present: r
    }), (m, v) => (openBlock(), createBlock(p));
  }
});
var ds = defineComponent({
  inheritAttrs: false,
  __name: "CollapsibleContent",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o, e = inject(
      ma
    ), a = ref(), { primitiveElement: s, currentElement: n } = x(), l = ref(0), r = ref(0), i = computed(() => e == null ? void 0 : e.open.value), d = ref(i.value), c = ref();
    return watch(
      () => {
        var p;
        return [i.value, (p = a.value) == null ? void 0 : p.present];
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
        r.value = f.height, l.value = f.width, d.value || (p.style.transitionDuration = c.value.transitionDuration, p.style.animationName = c.value.animationName);
      },
      {
        immediate: true
      }
    ), onMounted(() => {
      requestAnimationFrame(() => {
        d.value = false;
      });
    }), (p, f) => (openBlock(), createBlock(unref(Ee), {
      ref_key: "presentRef",
      ref: a,
      present: unref(e).open.value,
      "force-mount": true
    }, {
      default: withCtx(() => {
        var m, v, g, h2, C;
        return [
          createVNode(unref(A), mergeProps({
            ref_key: "primitiveElement",
            ref: s
          }, p.$attrs, {
            "as-child": t.asChild,
            as: p.as,
            "data-state": (m = unref(e)) != null && m.open.value ? "open" : "closed",
            "data-disabled": (g = (v = unref(e)) == null ? void 0 : v.disabled) != null && g.value ? "true" : void 0,
            id: (h2 = unref(e)) == null ? void 0 : h2.contentId,
            hidden: !((C = a.value) != null && C.present),
            style: {
              ["--radix-collapsible-content-height"]: `${r.value}px`,
              ["--radix-collapsible-content-width"]: `${l.value}px`
            }
          }), {
            default: withCtx(() => [
              renderSlot(p.$slots, "default")
            ]),
            _: 3
          }, 16, ["as-child", "as", "data-state", "data-disabled", "id", "hidden", "style"])
        ];
      }),
      _: 3
    }, 8, ["present"]));
  }
});
function cs(o, t) {
  if (o === "single") {
    if (Array.isArray(t)) {
      console.error(`Invalid prop \`value\` of value \`${t}\` supplied to \`AccordionRoot\`, which type is \`single\`. The \`value\` prop must be:
  - a string
  - \`undefined\`

If you want to use multiple values, use the \`AccordionRoot\` with type \`multiple\`.

Defaulting to \`undefined\`.`);
      return;
    }
  } else if (o === "multiple" && (typeof t == "string" || typeof t > "u"))
    return console.error(`Invalid prop \`value\` of value \`${t}\` supplied to \`AccordionRoot\`, which type is \`multiple\`. The \`value\` prop must be:
- an array of strings
- empty array (\`[]\`)

If you want to use just one value, use the \`AccordionRoot\` with type \`single\`.

Defaulting to empty array (\`[]\`).`), [];
  return t;
}
function ps({ type: o, defaultValue: t }) {
  if (o === "multiple")
    return Array.isArray(t) ? t : t === void 0 ? [] : (console.error(
      `Invalid prop \`defaultValue\` of value \`${t}\` supplied to \`AccordionRoot\`, which type is \`multiple\`. The \`defaultValue\` prop must be:
  - an array of strings
  - empty array (\`[]\`)

If you want to use just one value, use the \`AccordionRoot\` with type \`single\`.

Defaulting to empty array (\`[]\`).`
    ), []);
  if (o === "single") {
    if (typeof t == "string")
      return t;
    if (t === void 0)
      return;
    console.error(
      `Invalid prop \`defaultValue\` of value \`${t}\` supplied to \`AccordionRoot\`, which type is \`single\`. The \`defaultValue\` prop must be:
  - a string
  - \`undefined\`

Defaulting to \`undefined\`.`
    );
    return;
  }
}
function fs(o, t) {
  const e = U(o, "modelValue", t, {
    defaultValue: ps(o),
    passive: true
  });
  watch(
    () => [o.type, o.modelValue],
    () => {
      const s = cs(o.type, e.value);
      e.value !== s && (e.value = s);
    },
    { immediate: true }
  );
  function a(s) {
    if (o.type === "single")
      e.value = s === e.value ? void 0 : s;
    else {
      const n = e.value || [];
      if (n.includes(s)) {
        const l = n.findIndex((r) => r === s);
        n.splice(l, 1);
      } else
        n.push(s);
      e.value = n;
    }
  }
  return {
    modelValue: e,
    changeModelValue: a
  };
}
var ft = Symbol();
var or = defineComponent({
  __name: "AccordionRoot",
  props: {
    type: {},
    modelValue: {},
    defaultValue: {},
    collapsible: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    dir: { default: "ltr" },
    orientation: { default: "vertical" },
    asChild: { type: Boolean, default: false },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(o, { emit: t }) {
    const e = o, { modelValue: a, changeModelValue: s } = fs(e, t), { primitiveElement: n, currentElement: l } = x();
    return provide(ft, {
      disabled: e.disabled,
      direction: e.dir,
      orientation: e.orientation,
      parentElement: l,
      isSingle: computed(() => e.type === "single"),
      collapsible: e.collapsible,
      modelValue: a,
      changeModelValue: s
    }), (r, i) => (openBlock(), createBlock(unref(A), {
      ref_key: "primitiveElement",
      ref: n,
      "as-child": e.asChild,
      as: e.as
    }, {
      default: withCtx(() => [
        renderSlot(r.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
});
var Rt = Symbol();
var nr = defineComponent({
  __name: "AccordionItem",
  props: {
    disabled: { type: Boolean },
    value: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o, e = inject(ft), a = computed(
      () => e != null && e.isSingle.value ? t.value === e.modelValue.value : Array.isArray(e == null ? void 0 : e.modelValue.value) && !!(e != null && e.modelValue.value.includes(t.value))
    ), s = computed(() => (e == null ? void 0 : e.disabled) || t.disabled || !!(e != null && e.isSingle.value) && a.value && !(e != null && e.collapsible)), n = computed(() => s.value ? "" : void 0), l = computed(
      () => a.value ? "open" : "closed"
      /* Closed */
    );
    watch(l, () => {
      console.log("run");
    });
    const { primitiveElement: r, currentElement: i } = x();
    provide(Rt, {
      open: a,
      dataState: l,
      disabled: s,
      dataDisabled: n,
      triggerId: te(),
      primitiveElement: r,
      currentElement: i,
      value: computed(() => t.value)
    });
    function d(c) {
      ae(
        c,
        i.value,
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
      return openBlock(), createBlock(unref(rs), {
        "data-orientation": (f = unref(e)) == null ? void 0 : f.orientation,
        "data-disabled": n.value,
        "data-state": l.value,
        disabled: s.value,
        open: a.value,
        onKeydown: withKeys(d, ["up", "down", "left", "right", "home", "end"]),
        "as-child": t.asChild
      }, {
        default: withCtx(() => [
          renderSlot(c.$slots, "default", { open: a.value })
        ]),
        _: 3
      }, 8, ["data-orientation", "data-disabled", "data-state", "disabled", "open", "onKeydown", "as-child"]);
    };
  }
});
var sr = defineComponent({
  __name: "AccordionContent",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o, e = inject(ft), a = inject(Rt);
    return (s, n) => {
      var l, r, i, d, c, p, f;
      return openBlock(), createBlock(unref(ds), {
        role: "region",
        id: (l = unref(a)) == null ? void 0 : l.triggerId,
        open: (r = unref(a)) == null ? void 0 : r.open.value,
        hidden: !((i = unref(a)) != null && i.open.value),
        "as-child": t.asChild,
        "aria-labelledby": (d = unref(a)) == null ? void 0 : d.triggerId,
        "data-state": (c = unref(a)) == null ? void 0 : c.dataState.value,
        "data-disabled": (p = unref(a)) == null ? void 0 : p.dataDisabled.value,
        "data-orientation": (f = unref(e)) == null ? void 0 : f.orientation,
        style: normalizeStyle(`
      --radix-accordion-content-width: var(--radix-collapsible-content-width);
      --radix-accordion-content-height: var(--radix-collapsible-content-height);
    `)
      }, {
        default: withCtx(() => [
          renderSlot(s.$slots, "default")
        ]),
        _: 3
      }, 8, ["id", "open", "hidden", "as-child", "aria-labelledby", "data-state", "data-disabled", "data-orientation", "style"]);
    };
  }
});
var lr = defineComponent({
  __name: "AccordionHeader",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o, e = inject(ft), a = inject(Rt);
    return (s, n) => {
      var l, r, i;
      return openBlock(), createBlock(unref(A), {
        as: t.as || "h3",
        "as-child": t.asChild,
        "data-orientation": (l = unref(e)) == null ? void 0 : l.orientation,
        "data-state": (r = unref(a)) == null ? void 0 : r.dataState.value,
        "data-disabled": (i = unref(a)) == null ? void 0 : i.dataDisabled.value
      }, {
        default: withCtx(() => [
          renderSlot(s.$slots, "default")
        ]),
        _: 3
      }, 8, ["as", "as-child", "data-orientation", "data-state", "data-disabled"]);
    };
  }
});
var rr = defineComponent({
  __name: "AccordionTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o, e = inject(ft), a = inject(Rt);
    function s() {
      a != null && a.disabled.value || a && (e == null || e.changeModelValue(a.value.value));
    }
    return (n, l) => {
      var r, i, d, c, p, f, m, v, g, h2;
      return openBlock(), createBlock(unref(is), {
        ref: (r = unref(a)) == null ? void 0 : r.primitiveElement,
        "data-radix-vue-collection-item": "",
        as: t.as,
        "as-child": t.asChild,
        "aria-controls": (i = unref(a)) == null ? void 0 : i.triggerId,
        "aria-disabled": ((d = unref(a)) == null ? void 0 : d.disabled.value) || void 0,
        "aria-expanded": ((c = unref(a)) == null ? void 0 : c.open.value) || false,
        "data-disabled": (p = unref(a)) == null ? void 0 : p.dataDisabled.value,
        "data-orientation": (f = unref(e)) == null ? void 0 : f.orientation,
        "data-state": (m = unref(a)) == null ? void 0 : m.dataState.value,
        disabled: (g = (v = unref(a)) == null ? void 0 : v.disabled) == null ? void 0 : g.value,
        onClick: s,
        id: (h2 = unref(a)) == null ? void 0 : h2.triggerId
      }, {
        default: withCtx(() => [
          renderSlot(n.$slots, "default")
        ]),
        _: 3
      }, 8, ["as", "as-child", "aria-controls", "aria-disabled", "aria-expanded", "data-disabled", "data-orientation", "data-state", "disabled", "id"]);
    };
  }
});
var ms = ["id", "checked", "name", "disabled", "required", "data-state"];
var _o = Symbol();
var ir = defineComponent({
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
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(o, { emit: t }) {
    const e = o;
    provide(_o, {
      required: e.required,
      disabled: e.disabled,
      modelValue: toRef(() => e.modelValue)
    });
    function a() {
      return t("update:modelValue", !e.modelValue);
    }
    let s;
    return (n, l) => (openBlock(), createBlock(unref(A), {
      "as-child": e.asChild,
      as: n.as,
      value: e.value,
      role: "checkbox",
      "aria-checked": e.modelValue,
      "data-state": unref(s),
      style: { position: "relative" },
      "data-disabled": e.disabled ? "" : void 0
    }, {
      default: withCtx(() => [
        createBaseVNode("input", mergeProps({
          type: "checkbox",
          id: e.id
        }, e.modelValue, {
          onChange: a,
          checked: e.modelValue,
          name: e.name,
          "aria-hidden": "true",
          disabled: e.disabled,
          required: e.required,
          "data-state": unref(s),
          style: { opacity: "0", position: "absolute", inset: "0" }
        }), null, 16, ms),
        renderSlot(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "value", "aria-checked", "data-state", "data-disabled"]));
  }
});
var ur = defineComponent({
  __name: "CheckboxIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(o) {
    const t = o, e = inject(_o);
    return (a, s) => {
      var n;
      return (n = unref(e)) != null && n.modelValue.value ? (openBlock(), createBlock(unref(A), {
        key: 0,
        style: { "pointer-events": "none" },
        "as-child": t.asChild,
        as: a.as,
        "data-disabled": unref(e).disabled ? "" : void 0,
        "data-state": unref(e).modelValue.value ? "checked" : "unchecked"
      }, {
        default: withCtx(() => [
          renderSlot(a.$slots, "default")
        ]),
        _: 3
      }, 8, ["as-child", "as", "data-disabled", "data-state"])) : createCommentVNode("", true);
    };
  }
});
var vs = ["id", "name", "disabled", "required", "data-state", "data-disabled"];
var bo = Symbol();
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
    asChild: { type: Boolean, default: false },
    as: {}
  },
  emits: ["update:open"],
  setup(o, { emit: t }) {
    const e = o, a = U(e, "open", t, {
      defaultValue: e.defaultOpen,
      passive: true
      // set passive to true so that if no props.modelValue was passed, it will still update
    }), s = () => {
      a.value = !a.value;
    };
    provide(bo, {
      open: a,
      toggleOpen: s,
      disabled: e.disabled
    });
    function n(l) {
      l.key === "Enter" && s();
    }
    return (l, r) => (openBlock(), createBlock(unref(A), {
      value: unref(a),
      role: "switch",
      "aria-checked": unref(a),
      "data-state": unref(a) ? "checked" : "unchecked",
      "data-disabled": e.disabled ? "" : void 0,
      "as-child": e.asChild,
      as: l.as,
      style: { position: "relative" }
    }, {
      default: withCtx(() => [
        renderSlot(l.$slots, "default"),
        createBaseVNode("input", mergeProps({
          type: "checkbox",
          id: e.id
        }, unref(a), {
          name: e.name,
          onClick: s,
          onKeydown: n,
          "aria-hidden": "true",
          disabled: e.disabled,
          required: e.required,
          "data-state": unref(a) ? "checked" : "unchecked",
          "data-disabled": e.disabled ? "" : void 0,
          style: { opacity: "0", position: "absolute", inset: "0" }
        }), null, 16, vs)
      ]),
      _: 3
    }, 8, ["value", "aria-checked", "data-state", "data-disabled", "as-child", "as"]));
  }
});
var cr = defineComponent({
  __name: "SwitchThumb",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(o) {
    const t = inject(bo);
    return (e, a) => {
      var s, n, l;
      return openBlock(), createBlock(unref(A), {
        "data-state": (n = (s = unref(t)) == null ? void 0 : s.open) != null && n.value ? "checked" : "unchecked",
        "data-disabled": (l = unref(t)) != null && l.disabled ? "" : void 0,
        "as-child": e.asChild,
        as: e.as
      }, {
        default: withCtx(() => [
          renderSlot(e.$slots, "default")
        ]),
        _: 3
      }, 8, ["data-state", "data-disabled", "as-child", "as"]);
    };
  }
});
var mt = defineComponent({
  __name: "BaseSeparator",
  props: {
    orientation: { default: "horizontal" },
    decorative: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o;
    return (e, a) => (openBlock(), createBlock(unref(A), mergeProps(t, {
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
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o;
    return (e, a) => (openBlock(), createBlock(mt, mergeProps(t, {
      "data-orientation": t.orientation
    }), null, 16, ["data-orientation"]));
  }
});
var fr = defineComponent({
  __name: "Label",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "label" }
  },
  setup(o) {
    const t = o;
    return (e, a) => (openBlock(), createBlock(unref(A), normalizeProps(guardReactiveProps(t)), {
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
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  emits: ["update:pressed"],
  setup(o, { emit: t }) {
    const e = o, a = U(e, "pressed", t, {
      defaultValue: e.defaultValue,
      passive: true
    }), s = () => {
      a.value = !a.value;
    }, n = computed(() => a.value ? "on" : "off"), l = (r) => {
      r.key === "Enter" && s();
    };
    return (r, i) => (openBlock(), createBlock(unref(A), mergeProps({
      "as-child": e.asChild,
      as: r.as,
      value: unref(a)
    }, unref(a), {
      role: "checkbox",
      "aria-checked": unref(a),
      "data-state": n.value,
      "data-disabled": e.disabled,
      disabled: e.disabled,
      onClick: s,
      onKeydown: l,
      style: { position: "relative" }
    }), {
      default: withCtx(() => [
        renderSlot(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["as-child", "as", "value", "aria-checked", "data-state", "data-disabled", "disabled"]));
  }
});
var wo = Symbol();
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
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(o, { emit: t }) {
    const e = o, { primitiveElement: a, currentElement: s } = x(), n = ref(), l = ref(), r = da(), i = ref([]), d = U(e, "modelValue", t, {
      defaultValue: e.defaultValue,
      passive: true
    });
    provide(wo, {
      type: e.type,
      modelValue: d,
      changeModelValue: c,
      parentElement: s,
      activeValue: n,
      currentFocusedElement: l,
      dir: e.dir,
      orientation: e.orientation,
      loop: e.loop,
      itemsArray: i,
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
        if (r.value === s.value && !e.disabled) {
          if (!i.value.length)
            return;
          if (l.value)
            l.value.focus();
          else {
            let p = i.value.filter(
              (f) => !f.hasAttribute("disabled") && !f.hasAttribute("data-disabled")
            );
            p[0].focus(), l.value = p[0];
          }
        }
      },
      { immediate: true }
    ), (p, f) => (openBlock(), createBlock(unref(A), {
      "as-child": e.asChild,
      as: p.as,
      ref_key: "primitiveElement",
      ref: a,
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
    }, 8, ["as-child", "as", "dir", "data-orientation"]));
  }
});
var hr = defineComponent({
  __name: "ToggleGroupItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(o) {
    const t = o, e = inject(
      wo
    ), { primitiveElement: a, currentElement: s } = x();
    onMounted(() => {
      var p;
      (p = e == null ? void 0 : e.itemsArray.value) == null || p.push(s.value);
    });
    const n = computed(() => {
      var p, f, m;
      return (e == null ? void 0 : e.type) === "multiple" ? (f = (p = e == null ? void 0 : e.modelValue) == null ? void 0 : p.value) != null && f.includes(t.value) ? "on" : "off" : ((m = e == null ? void 0 : e.modelValue) == null ? void 0 : m.value) === t.value ? "on" : "off";
    }), l = computed(() => {
      var p, f, m;
      return (e == null ? void 0 : e.type) === "multiple" ? (f = (p = e == null ? void 0 : e.modelValue) == null ? void 0 : p.value) == null ? void 0 : f.includes(t.value) : ((m = e == null ? void 0 : e.modelValue) == null ? void 0 : m.value) === t.value;
    });
    function r(p) {
      if (!(e != null && e.rovingFocus) || e != null && e.rootDisabled)
        return;
      (p.key === "ArrowLeft" || p.key === "ArrowRight" || p.key === "ArrowUp" || p.key === "ArrowDown") && p.preventDefault();
      const f = ae(
        p,
        s.value,
        e == null ? void 0 : e.parentElement.value,
        { loop: e == null ? void 0 : e.loop }
      );
      f && (f.focus(), e.currentFocusedElement.value = f);
    }
    const i = computed(() => {
      var p, f, m;
      return (p = e == null ? void 0 : e.currentFocusedElement) != null && p.value ? ((m = e == null ? void 0 : e.currentFocusedElement) == null ? void 0 : m.value) === s.value ? "0" : "-1" : ((f = e == null ? void 0 : e.modelValue) == null ? void 0 : f.value) === t.value ? "0" : "-1";
    }), d = computed(() => (e == null ? void 0 : e.type) === "multiple" ? "checkbox" : "radio");
    function c() {
      e != null && e.rootDisabled || (e == null || e.changeModelValue(t.value), e.currentFocusedElement.value = s.value);
    }
    return (p, f) => {
      var m, v;
      return openBlock(), createBlock(unref(A), {
        "as-child": t.asChild,
        as: p.as,
        ref_key: "primitiveElement",
        ref: a,
        type: p.as === "button" ? "button" : void 0,
        role: d.value,
        "data-state": n.value,
        disabled: t.disabled || ((m = unref(e)) == null ? void 0 : m.rootDisabled),
        "data-disabled": t.disabled ? "" : void 0,
        "aria-checked": l.value,
        "data-orientation": (v = unref(e)) == null ? void 0 : v.orientation,
        onClick: c,
        onKeydown: r,
        "data-radix-vue-collection-item": "",
        tabindex: i.value
      }, {
        default: withCtx(() => [
          renderSlot(p.$slots, "default")
        ]),
        _: 3
      }, 8, ["as-child", "as", "type", "role", "data-state", "disabled", "data-disabled", "aria-checked", "data-orientation", "tabindex"]);
    };
  }
});
var yr = defineComponent({
  __name: "AspectRatio",
  props: {
    ratio: { default: 1 },
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o, e = computed(() => 1 / t.ratio * 100);
    return (a, s) => (openBlock(), createElementBlock("div", {
      style: normalizeStyle(`position: relative; width: 100%; padding-bottom: ${e.value}%`)
    }, [
      createVNode(unref(A), {
        "as-child": a.asChild,
        as: a.as,
        style: { position: "absolute", inset: "0px" }
      }, {
        default: withCtx(() => [
          renderSlot(a.$slots, "default")
        ]),
        _: 3
      }, 8, ["as-child", "as"])
    ], 4));
  }
});
var Lt = Symbol();
var gr = defineComponent({
  __name: "TabsRoot",
  props: {
    defaultValue: {},
    orientation: { default: "horizontal" },
    dir: { default: "ltr" },
    activationMode: { default: "automatic" },
    modelValue: {},
    onValueChange: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(o, { emit: t }) {
    const e = o, a = ref(), s = ref(), n = U(e, "modelValue", t, {
      defaultValue: e.defaultValue,
      passive: true
    });
    return provide(Lt, {
      modelValue: n,
      changeModelValue: (l) => {
        n.value = l, l && e.onValueChange && e.onValueChange(l);
      },
      currentFocusedElement: s,
      parentElement: a,
      orientation: e.orientation,
      dir: e.dir,
      loop: true,
      activationMode: e.activationMode
    }), (l, r) => (openBlock(), createBlock(unref(A), {
      dir: e.dir,
      "data-orientation": e.orientation,
      "as-child": e.asChild,
      as: l.as
    }, {
      default: withCtx(() => [
        renderSlot(l.$slots, "default")
      ]),
      _: 3
    }, 8, ["dir", "data-orientation", "as-child", "as"]));
  }
});
var _r = defineComponent({
  __name: "TabsList",
  props: {
    loop: { type: Boolean, default: true },
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o, e = inject(Lt), { primitiveElement: a, currentElement: s } = x();
    return onMounted(() => {
      e.parentElement.value = s.value, e.loop = t.loop;
    }), (n, l) => {
      var r, i;
      return openBlock(), createBlock(unref(A), {
        role: "tablist",
        ref_key: "primitiveElement",
        ref: a,
        "as-child": t.asChild,
        as: n.as,
        "aria-orientation": (r = unref(e)) == null ? void 0 : r.orientation,
        tabindex: "0",
        "data-orientation": (i = unref(e)) == null ? void 0 : i.orientation,
        style: { outline: "none" }
      }, {
        default: withCtx(() => [
          renderSlot(n.$slots, "default")
        ]),
        _: 3
      }, 8, ["as-child", "as", "aria-orientation", "data-orientation"]);
    };
  }
});
var br = defineComponent({
  __name: "TabsContent",
  props: {
    value: {},
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o, e = inject(Lt), a = computed(() => {
      var s;
      return ((s = e == null ? void 0 : e.modelValue) == null ? void 0 : s.value) === t.value ? "active" : "inactive";
    });
    return (s, n) => {
      var l, r, i;
      return ((r = (l = unref(e)) == null ? void 0 : l.modelValue) == null ? void 0 : r.value) === t.value ? (openBlock(), createBlock(unref(A), {
        key: 0,
        "as-child": t.asChild,
        as: s.as,
        role: "tabpanel",
        "data-state": a.value,
        "data-orientation": (i = unref(e)) == null ? void 0 : i.orientation,
        tabindex: "0"
      }, {
        default: withCtx(() => [
          renderSlot(s.$slots, "default")
        ]),
        _: 3
      }, 8, ["as-child", "as", "data-state", "data-orientation"])) : createCommentVNode("", true);
    };
  }
});
var wr = defineComponent({
  __name: "TabsTrigger",
  props: {
    value: {},
    disabled: { type: Boolean, default: false },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(o) {
    const t = o, e = inject(Lt), { primitiveElement: a, currentElement: s } = x();
    function n(i) {
      e == null || e.changeModelValue(i);
    }
    function l(i) {
      const d = ae(
        i,
        s.value,
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
      var i, d, c;
      return (i = e == null ? void 0 : e.currentFocusedElement) != null && i.value ? ((c = e == null ? void 0 : e.currentFocusedElement) == null ? void 0 : c.value) === s.value ? "0" : "-1" : ((d = e == null ? void 0 : e.modelValue) == null ? void 0 : d.value) === t.value ? "0" : "-1";
    });
    return (i, d) => {
      var c, p, f, m, v;
      return openBlock(), createBlock(unref(A), {
        ref_key: "primitiveElement",
        ref: a,
        type: i.as === "button" ? "button" : void 0,
        as: i.as,
        "as-child": t.asChild,
        role: "tab",
        "aria-selected": ((p = (c = unref(e)) == null ? void 0 : c.modelValue) == null ? void 0 : p.value) === t.value ? "true" : "false",
        "data-state": ((m = (f = unref(e)) == null ? void 0 : f.modelValue) == null ? void 0 : m.value) === t.value ? "active" : "inactive",
        disabled: t.disabled,
        "data-disabled": t.disabled ? "" : void 0,
        tabindex: r.value,
        "data-orientation": (v = unref(e)) == null ? void 0 : v.orientation,
        "data-radix-vue-collection-item": "",
        "data-radix-vue-tab-value": t.value,
        onClick: d[0] || (d[0] = (g) => n(t.value)),
        onKeydown: withKeys(l, ["up", "down", "left", "right", "home", "end"])
      }, {
        default: withCtx(() => [
          renderSlot(i.$slots, "default")
        ]),
        _: 3
      }, 8, ["type", "as", "as-child", "aria-selected", "data-state", "disabled", "data-disabled", "tabindex", "data-orientation", "data-radix-vue-tab-value", "onKeydown"]);
    };
  }
});
var hs = ["value", "aria-valuenow", "name"];
var va = Symbol();
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
    asChild: { type: Boolean, default: false },
    as: { default: "span" }
  },
  emits: ["update:modelValue"],
  setup(o, { emit: t }) {
    const e = o, { primitiveElement: a, currentElement: s } = x(), n = ref(), l = computed(() => e.modelValue ? e.modelValue < 50 ? (e.modelValue - 50) / 50 * 10 : (e.modelValue - 50) / 50 * -10 : 0);
    provide(va, {
      modelValue: toRef(() => e.modelValue),
      changeModelValue: (m) => {
        t("update:modelValue", m);
      },
      rootSliderElement: s,
      orientation: e.orientation,
      dir: e.dir,
      thumbOffset: l,
      min: e.min,
      max: e.max,
      step: e.step,
      thumbElement: n,
      disabled: e.disabled
    });
    function r(m) {
      t("update:modelValue", f(m, e.step));
    }
    let i;
    function d(m) {
      n.value && n.value.focus(), m.preventDefault(), s.value && (i = s.value.getBoundingClientRect(), m.clientX - 10 - l.value > i.left && m.clientX - 10 - l.value < i.left + i.width && r(
        Math.round(
          (m.clientX - 10 - l.value - i.left) / i.width * 100
        )
      ), document.addEventListener("pointermove", c), document.addEventListener("pointerup", p));
    }
    const c = (m) => {
      n.value && n.value.focus(), m.clientX - 10 - l.value > i.left && m.clientX - 10 - l.value < i.left + i.width && r(
        (m.clientX - 10 - l.value - i.left) / i.width * 100
      ), m.clientX - 10 - l.value <= i.left && r(e.min), m.clientX - 10 - l.value >= i.left + i.width && r(e.max);
    }, p = (m) => {
      document.removeEventListener("pointermove", c), document.removeEventListener("pointerup", p);
    };
    function f(m, v) {
      const g = Math.floor(m / v);
      return m % v <= v / 2 ? g * v : (g + 1) * v;
    }
    return (m, v) => (openBlock(), createBlock(unref(A), {
      ref_key: "primitiveElement",
      ref: a,
      "as-child": e.asChild,
      as: m.as,
      onPointerdown: d
    }, {
      default: withCtx(() => [
        renderSlot(m.$slots, "default"),
        createBaseVNode("input", {
          style: { display: "none" },
          value: e.modelValue,
          "aria-valuenow": e.modelValue,
          name: e.name
        }, null, 8, hs)
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
});
var Cr = defineComponent({
  __name: "SliderThumb",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(o) {
    const t = o, e = inject(va), { primitiveElement: a, currentElement: s } = x();
    onMounted(() => {
      e != null && e.thumbElement && (e.thumbElement.value = s.value);
    });
    let n = 2;
    function l(r) {
      var c;
      if (!e)
        return;
      (r.keyCode === 32 || r.key === "Enter") && r.preventDefault();
      const i = Number(e == null ? void 0 : e.step), d = Number((c = e.modelValue) == null ? void 0 : c.value);
      (r.key === "ArrowUp" || r.key === "ArrowRight") && (r.shiftKey ? (r.preventDefault(), d + n >= (e == null ? void 0 : e.max) ? e == null || e.changeModelValue(e == null ? void 0 : e.max) : d + n <= (e == null ? void 0 : e.min) ? e == null || e.changeModelValue(e == null ? void 0 : e.min) : e == null || e.changeModelValue(d + n)) : (r.preventDefault(), d + i >= (e == null ? void 0 : e.max) ? e == null || e.changeModelValue(e == null ? void 0 : e.max) : d + i <= (e == null ? void 0 : e.min) ? e == null || e.changeModelValue(e == null ? void 0 : e.min) : e == null || e.changeModelValue(d + i))), (r.key === "ArrowDown" || r.key === "ArrowLeft") && (r.shiftKey ? (r.preventDefault(), d - n >= (e == null ? void 0 : e.max) ? e == null || e.changeModelValue(e == null ? void 0 : e.max) : d - n <= (e == null ? void 0 : e.min) ? e == null || e.changeModelValue(e == null ? void 0 : e.min) : e == null || e.changeModelValue(d - n)) : (r.preventDefault(), d - i >= (e == null ? void 0 : e.max) ? e == null || e.changeModelValue(e == null ? void 0 : e.max) : d - i <= (e == null ? void 0 : e.min) ? e == null || e.changeModelValue(e == null ? void 0 : e.min) : e == null || e.changeModelValue(d - i)));
    }
    return (r, i) => {
      var d, c, p, f, m, v, g, h2, C;
      return openBlock(), createElementBlock("span", {
        style: normalizeStyle(`transform: translateX(-50%); position: absolute; left: calc(${(c = (d = unref(e)) == null ? void 0 : d.modelValue) == null ? void 0 : c.value}%)`)
      }, [
        createVNode(unref(A), mergeProps(r.$attrs, {
          ref_key: "primitiveElement",
          ref: a,
          role: "slider",
          tabindex: "0",
          "data-disabled": (p = unref(e)) == null ? void 0 : p.disabled,
          "data-orientation": (f = unref(e)) == null ? void 0 : f.orientation,
          "aria-valuenow": (v = (m = unref(e)) == null ? void 0 : m.modelValue) == null ? void 0 : v.value,
          "aria-valuemin": (g = unref(e)) == null ? void 0 : g.min,
          "aria-valuemax": (h2 = unref(e)) == null ? void 0 : h2.max,
          "aria-orientation": (C = unref(e)) == null ? void 0 : C.orientation,
          "as-child": t.asChild,
          as: r.as,
          onKeydown: l
        }), null, 16, ["data-disabled", "data-orientation", "aria-valuenow", "aria-valuemin", "aria-valuemax", "aria-orientation", "as-child", "as"])
      ], 4);
    };
  }
});
var $r = defineComponent({
  __name: "SliderTrack",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(o) {
    const t = o;
    return (e, a) => (openBlock(), createBlock(unref(A), {
      "as-child": t.asChild,
      as: e.as
    }, {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
});
var Sr = defineComponent({
  __name: "SliderRange",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(o) {
    const t = o, e = inject(va);
    return (a, s) => {
      var n, l, r, i, d;
      return openBlock(), createBlock(unref(A), {
        "data-disabled": (n = unref(e)) == null ? void 0 : n.disabled,
        "data-orientation": (l = unref(e)) == null ? void 0 : l.orientation,
        "as-child": t.asChild,
        as: a.as,
        style: normalizeStyle(`left: 0%; right: ${(((r = unref(e)) == null ? void 0 : r.max) ?? 100) - (((d = (i = unref(e)) == null ? void 0 : i.modelValue) == null ? void 0 : d.value) ?? 0)}%`)
      }, null, 8, ["data-disabled", "data-orientation", "as-child", "as", "style"]);
    };
  }
});
var Eo = "RadioGroup";
var Co = Symbol();
var Or = defineComponent({
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
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(o, { emit: t }) {
    const e = o, { primitiveElement: a, currentElement: s } = x(), n = U(e, "modelValue", t, {
      defaultValue: e.defaultValue,
      passive: true
    });
    return provide(Eo, {
      modelValue: n,
      changeModelValue: (l) => {
        n.value = l, l && e.onValueChange && e.onValueChange(l);
      },
      parentElement: s,
      currentFocusedElement: ref(),
      disabled: ref(e.disabled),
      loop: ref(e.loop),
      orientation: ref(e.orientation),
      name: e.name,
      required: ref(e.required)
    }), (l, r) => (openBlock(), createBlock(unref(A), {
      ref_key: "primitiveElement",
      ref: a,
      role: "radiogroup",
      "data-disabled": e.disabled ? "" : void 0,
      "as-child": e.asChild,
      as: l.as,
      required: e.required,
      "aria-required": e.required,
      dir: e.dir,
      name: e.name
    }, {
      default: withCtx(() => [
        renderSlot(l.$slots, "default")
      ]),
      _: 3
    }, 8, ["data-disabled", "as-child", "as", "required", "aria-required", "dir", "name"]));
  }
});
var ys = ["value", "required", "disabled", "checked"];
var Pr = defineComponent({
  __name: "RadioGroupItem",
  props: {
    value: {},
    disabled: { type: Boolean, default: false },
    required: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o, e = inject(Eo), a = computed(() => (e == null ? void 0 : e.disabled.value) || t.disabled), s = computed(() => (e == null ? void 0 : e.required.value) || t.required), n = computed(() => {
      var p;
      return ((p = e == null ? void 0 : e.modelValue) == null ? void 0 : p.value) === t.value;
    });
    provide(Co, readonly({ disabled: a, checked: n }));
    function l(p) {
      a.value || e == null || e.changeModelValue(p);
    }
    const { primitiveElement: r, currentElement: i } = x();
    function d(p) {
      if (a.value)
        return;
      const f = ae(
        p,
        i.value,
        e == null ? void 0 : e.parentElement.value,
        {
          arrowKeyOptions: e == null ? void 0 : e.orientation.value,
          loop: e == null ? void 0 : e.loop.value
        }
      );
      f && (l(f == null ? void 0 : f.getAttribute("value")), e.currentFocusedElement.value = f, f.focus());
    }
    const c = computed(() => {
      var p, f;
      return (p = e == null ? void 0 : e.currentFocusedElement) != null && p.value ? ((f = e == null ? void 0 : e.currentFocusedElement) == null ? void 0 : f.value) === i.value ? "0" : "-1" : n.value ? "0" : "-1";
    });
    return (p, f) => {
      var m;
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(unref(A), mergeProps({
          type: p.as === "button" ? "button" : void 0,
          as: p.as,
          ref_key: "primitiveElement",
          ref: r,
          role: "radio",
          "data-radix-vue-collection-item": ""
        }, p.$attrs, {
          "as-child": t.asChild,
          disabled: a.value ? true : void 0,
          "data-state": n.value ? "checked" : "unchecked",
          "data-disabled": a.value ? "" : void 0,
          tabindex: c.value,
          value: t.value,
          name: (m = unref(e)) == null ? void 0 : m.name,
          onClick: f[0] || (f[0] = (v) => l(t.value)),
          onKeydown: d
        }), {
          default: withCtx(() => [
            renderSlot(p.$slots, "default")
          ]),
          _: 3
        }, 16, ["type", "as", "as-child", "disabled", "data-state", "data-disabled", "tabindex", "value", "name"]),
        createBaseVNode("input", {
          type: "radio",
          "aria-hidden": "true",
          tabindex: "-1",
          value: t.value,
          required: s.value,
          disabled: a.value,
          style: { transform: "translateX(-100%)", position: "absolute", "pointer-events": "none", opacity: "0", margin: "0px", width: "25px", height: "25px" },
          checked: n.value
        }, null, 8, ys)
      ], 64);
    };
  }
});
var Ar = defineComponent({
  __name: "RadioGroupIndicator",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(o) {
    const t = inject(Co);
    return (e, a) => {
      var s, n, l;
      return (s = unref(t)) != null && s.checked ? (openBlock(), createBlock(unref(A), {
        key: 0,
        "data-state": (n = unref(t)) != null && n.checked ? "checked" : "unchecked",
        "data-disabled": (l = unref(t)) != null && l.disabled ? "" : void 0,
        "as-child": e.asChild,
        as: e.as
      }, {
        default: withCtx(() => [
          renderSlot(e.$slots, "default")
        ]),
        _: 3
      }, 8, ["data-state", "data-disabled", "as-child", "as"])) : createCommentVNode("", true);
    };
  }
});
var $o = Symbol();
var ha = (o) => typeof o == "number";
function gs(o, t) {
  return o === null || ha(o) && !isNaN(o) && o <= t && o >= 0 ? o : (console.error(`Invalid prop \`value\` of value \`${o}\` supplied to \`ProgressRoot\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${tt} if no \`max\` prop is set)
  - \`null\` if the progress is indeterminate.

Defaulting to \`null\`.`), null);
}
var tt = 100;
function _s(o) {
  return ha(o) && !isNaN(o) && o > 0 ? o : (console.error(
    `Invalid prop \`max\` of value \`${o}\` supplied to \`ProgressRoot\`. Only numbers greater than 0 are valid max values. Defaulting to \`${tt}\`.`
  ), tt);
}
var Br = defineComponent({
  __name: "ProgressRoot",
  props: {
    modelValue: {},
    max: { default: tt },
    getValueLabel: { type: Function, default: (o, t) => `${Math.round(o / t * tt)}%` },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue", "update:max"],
  setup(o, { emit: t }) {
    const e = o, a = U(e, "modelValue", t, {
      passive: true
    }), s = U(e, "max", t, {
      passive: true
    });
    watch(
      () => a.value,
      async (l) => {
        const r = gs(l, e.max);
        r !== l && (await nextTick(), a.value = r);
      },
      { immediate: true }
    ), watch(
      () => e.max,
      (l) => {
        const r = _s(e.max);
        r !== l && (s.value = r);
      },
      { immediate: true }
    );
    const n = computed(() => a.value ? a.value === s.value ? "complete" : "loading" : "indeterminate");
    return provide($o, {
      modelValue: a,
      max: s,
      progressState: n
    }), (l, r) => (openBlock(), createBlock(unref(A), {
      asChild: e.asChild,
      as: l.as,
      "aria-valuemax": unref(s),
      "aria-valuemin": 0,
      "aria-valuenow": ha(unref(a)) ? unref(a) : void 0,
      "aria-valuetext": l.getValueLabel(unref(a), unref(s)),
      role: "progressbar",
      "data-state": n.value,
      "data-value": unref(a) ?? void 0,
      "data-max": unref(s)
    }, {
      default: withCtx(() => [
        renderSlot(l.$slots, "default")
      ]),
      _: 3
    }, 8, ["asChild", "as", "aria-valuemax", "aria-valuenow", "aria-valuetext", "data-state", "data-value", "data-max"]));
  }
});
var Tr = defineComponent({
  __name: "ProgressIndicator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o, e = inject($o);
    return (a, s) => {
      var n, l, r, i;
      return openBlock(), createBlock(unref(A), mergeProps(t, {
        "data-state": (n = unref(e)) == null ? void 0 : n.progressState.value,
        "data-value": ((r = (l = unref(e)) == null ? void 0 : l.modelValue) == null ? void 0 : r.value) ?? void 0,
        "data-max": (i = unref(e)) == null ? void 0 : i.max.value
      }), {
        default: withCtx(() => [
          renderSlot(a.$slots, "default")
        ]),
        _: 3
      }, 16, ["data-state", "data-value", "data-max"]);
    };
  }
});
var vt = Symbol();
var kr = defineComponent({
  __name: "DialogRoot",
  props: {
    open: { type: Boolean, default: void 0 },
    defaultOpen: { type: Boolean, default: false },
    modal: { type: Boolean, default: true }
  },
  emits: ["update:open"],
  setup(o, { emit: t }) {
    const e = o, a = U(e, "open", t, {
      defaultValue: e.defaultOpen,
      passive: true
    }), s = fa(a.value);
    return watchEffect((n) => {
      s.value = a.value, n(() => s.value = false);
    }), provide(vt, {
      open: a,
      modal: e.modal,
      openModal: () => {
        a.value = true;
      },
      closeModal: () => {
        a.value = false;
      },
      triggerButton: ref()
    }), (n, l) => renderSlot(n.$slots, "default");
  }
});
var Dr = defineComponent({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(o) {
    const t = o, e = inject(vt), { primitiveElement: a, currentElement: s } = x();
    function n() {
      console.error(
        "Injected value not found, DialogTrigger possibly not wrapped with DialogRoot. Component may not be working properly."
      );
    }
    return onMounted(() => {
      e ? e.triggerButton.value = s.value : n();
    }), (l, r) => {
      var i, d, c;
      return openBlock(), createBlock(unref(A), mergeProps(t, {
        type: l.as === "button" ? "button" : void 0,
        ref_key: "primitiveElement",
        ref: a,
        "aria-expanded": ((i = unref(e)) == null ? void 0 : i.open.value) || false,
        "data-state": (d = unref(e)) != null && d.open.value ? "open" : "closed",
        onClick: (c = unref(e)) == null ? void 0 : c.openModal
      }), {
        default: withCtx(() => [
          renderSlot(l.$slots, "default")
        ]),
        _: 3
      }, 16, ["type", "aria-expanded", "data-state", "onClick"]);
    };
  }
});
var ht = defineComponent({
  __name: "BasePortal",
  props: {
    container: { default: "body" }
  },
  setup(o) {
    const t = o;
    return (e, a) => (openBlock(), createBlock(Teleport, {
      to: t.container
    }, [
      renderSlot(e.$slots, "default")
    ], 8, ["to"]));
  }
});
var bs = createBaseVNode("polygon", { points: "0,0 30,0 15,10" }, null, -1);
var ws = defineComponent({
  __name: "Arrow",
  props: {
    width: { default: 10 },
    height: { default: 5 },
    asChild: { type: Boolean },
    as: { default: "svg" }
  },
  setup(o) {
    const t = o, { primitiveElement: e } = x();
    return (a, s) => (openBlock(), createBlock(unref(A), mergeProps({
      ref_key: "primitiveElement",
      ref: e
    }, t, {
      width: a.width,
      height: a.height,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none"
    }), {
      default: withCtx(() => [
        renderSlot(a.$slots, "default", {}, () => [
          bs
        ])
      ]),
      _: 3
    }, 16, ["width", "height"]));
  }
});
var Oe = defineComponent({
  __name: "BaseMenuItem",
  props: {
    disabled: { type: Boolean },
    rootProvider: {},
    subProvider: {},
    orientation: {},
    role: { default: "menuitem" },
    dataState: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: [
    "handle-click",
    "horizontal-keydown",
    "mouseover",
    "escape-keydown"
  ],
  setup(o, { emit: t }) {
    const e = o, { getItems: a } = de(), { primitiveElement: s, currentElement: n } = x();
    function l(p) {
      var m, v, g, h2;
      if (p.key === "Escape")
        return i(), t("escape-keydown", p);
      if (p.keyCode === 32 || p.key === "Enter") {
        p.target.click();
        return;
      }
      if (p.key === "ArrowLeft") {
        const C = (m = e.subProvider) == null ? void 0 : m.triggerElement.value;
        if (C)
          return (v = e.rootProvider) == null || v.changeSelected(C), (g = e.subProvider) == null ? void 0 : g.hideTooltip();
      }
      if (p.key === "ArrowRight" || p.key === "ArrowLeft")
        return t("horizontal-keydown", p);
      const f = ae(
        p,
        n.value,
        void 0,
        {
          arrowKeyOptions: "vertical",
          itemsArray: a()
        }
      );
      f && ((h2 = e.rootProvider) == null || h2.changeSelected(f));
    }
    function r() {
      var p;
      e.disabled || (p = e.rootProvider) == null || p.changeSelected(n.value);
    }
    function i() {
      document.querySelector("body").style.pointerEvents = "", setTimeout(() => {
        var p, f;
        (f = (p = e.rootProvider) == null ? void 0 : p.triggerElement.value) == null || f.focus();
      }, 0);
    }
    function d() {
      t("handle-click");
    }
    function c() {
      t("mouseover");
    }
    return (p, f) => {
      var m, v, g;
      return openBlock(), createBlock(unref(A), {
        role: e.role,
        ref_key: "primitiveElement",
        ref: s,
        onKeydown: withModifiers(l, ["prevent"]),
        "data-state": e.dataState,
        "as-child": p.asChild,
        as: p.as,
        "data-radix-vue-collection-item": "",
        onMouseenter: r,
        onMouseover: c,
        onClick: d,
        "data-highlighted": ((m = p.rootProvider) == null ? void 0 : m.selectedElement.value) === unref(n) ? "" : null,
        "aria-disabled": e.disabled ? true : void 0,
        "data-disabled": e.disabled ? "" : void 0,
        "data-orientation": (v = p.rootProvider) == null ? void 0 : v.orientation,
        tabindex: ((g = p.rootProvider) == null ? void 0 : g.selectedElement.value) === unref(n) ? "0" : "-1"
      }, {
        default: withCtx(() => [
          renderSlot(p.$slots, "default")
        ]),
        _: 3
      }, 8, ["role", "onKeydown", "data-state", "as-child", "as", "data-highlighted", "aria-disabled", "data-disabled", "data-orientation", "tabindex"]);
    };
  }
});
var Mr = defineComponent({
  __name: "DialogPortal",
  props: {
    container: {}
  },
  setup(o) {
    const t = o;
    return (e, a) => (openBlock(), createBlock(unref(ht), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function So(o) {
  return getCurrentScope() ? (onScopeDispose(o), true) : false;
}
function St(o) {
  return typeof o == "function" ? o() : unref(o);
}
var Oo = typeof window < "u";
var ya = () => {
};
var Vt = Es();
function Es() {
  var o;
  return Oo && ((o = window == null ? void 0 : window.navigator) == null ? void 0 : o.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
}
var Ua = {
  mounted: "mounted",
  updated: "updated",
  unmounted: "unmounted"
};
function Cs(...o) {
  if (o.length !== 1)
    return toRef(...o);
  const t = o[0];
  return typeof t == "function" ? readonly(customRef(() => ({ get: t, set: ya }))) : ref(t);
}
function et(o) {
  var t;
  const e = St(o);
  return (t = e == null ? void 0 : e.$el) != null ? t : e;
}
var Po = Oo ? window : void 0;
function Ct(...o) {
  let t, e, a, s;
  if (typeof o[0] == "string" || Array.isArray(o[0]) ? ([e, a, s] = o, t = Po) : [t, e, a, s] = o, !t)
    return ya;
  Array.isArray(e) || (e = [e]), Array.isArray(a) || (a = [a]);
  const n = [], l = () => {
    n.forEach((c) => c()), n.length = 0;
  }, r = (c, p, f, m) => (c.addEventListener(p, f, m), () => c.removeEventListener(p, f, m)), i = watch(
    () => [et(t), St(s)],
    ([c, p]) => {
      l(), c && n.push(
        ...e.flatMap((f) => a.map((m) => r(c, f, m, p)))
      );
    },
    { immediate: true, flush: "post" }
  ), d = () => {
    i(), l();
  };
  return So(d), d;
}
var Ga = false;
function Xa(o, t, e = {}) {
  const { window: a = Po, ignore: s = [], capture: n = true, detectIframe: l = false } = e;
  if (!a)
    return;
  Vt && !Ga && (Ga = true, Array.from(a.document.body.children).forEach((f) => f.addEventListener("click", ya)));
  let r = true;
  const i = (f) => s.some((m) => {
    if (typeof m == "string")
      return Array.from(a.document.querySelectorAll(m)).some((v) => v === f.target || f.composedPath().includes(v));
    {
      const v = et(m);
      return v && (f.target === v || f.composedPath().includes(v));
    }
  }), c = [
    Ct(a, "click", (f) => {
      const m = et(o);
      if (!(!m || m === f.target || f.composedPath().includes(m))) {
        if (f.detail === 0 && (r = !i(f)), !r) {
          r = true;
          return;
        }
        t(f);
      }
    }, { passive: true, capture: n }),
    Ct(a, "pointerdown", (f) => {
      const m = et(o);
      m && (r = !f.composedPath().includes(m) && !i(f));
    }, { passive: true }),
    l && Ct(a, "blur", (f) => {
      setTimeout(() => {
        var m;
        const v = et(o);
        ((m = a.document.activeElement) == null ? void 0 : m.tagName) === "IFRAME" && !(v != null && v.contains(a.document.activeElement)) && t(f);
      }, 0);
    })
  ].filter(Boolean);
  return () => c.forEach((f) => f());
}
var $s = {
  [Ua.mounted](o, t) {
    const e = !t.modifiers.bubble;
    if (typeof t.value == "function")
      o.__onClickOutside_stop = Xa(o, t.value, { capture: e });
    else {
      const [a, s] = t.value;
      o.__onClickOutside_stop = Xa(o, a, Object.assign({ capture: e }, s));
    }
  },
  [Ua.unmounted](o) {
    o.__onClickOutside_stop();
  }
};
function Ao(o) {
  const t = window.getComputedStyle(o);
  if (t.overflowX === "scroll" || t.overflowY === "scroll" || t.overflowX === "auto" && o.clientWidth < o.scrollWidth || t.overflowY === "auto" && o.clientHeight < o.scrollHeight)
    return true;
  {
    const e = o.parentNode;
    return !e || e.tagName === "BODY" ? false : Ao(e);
  }
}
function Ss(o) {
  const t = o || window.event, e = t.target;
  return Ao(e) ? false : t.touches.length > 1 ? true : (t.preventDefault && t.preventDefault(), false);
}
function Os(o, t = false) {
  const e = ref(t);
  let a = null, s;
  watch(Cs(o), (r) => {
    if (r) {
      const i = r;
      s = i.style.overflow, e.value && (i.style.overflow = "hidden");
    }
  }, {
    immediate: true
  });
  const n = () => {
    const r = St(o);
    !r || e.value || (Vt && (a = Ct(
      r,
      "touchmove",
      (i) => {
        Ss(i);
      },
      { passive: false }
    )), r.style.overflow = "hidden", e.value = true);
  }, l = () => {
    const r = St(o);
    !r || !e.value || (Vt && (a == null || a()), r.style.overflow = s, e.value = false);
  };
  return So(l), computed({
    get() {
      return e.value;
    },
    set(r) {
      r ? n() : l();
    }
  });
}
function Ps() {
  let o = false;
  const t = ref(false);
  return (e, a) => {
    if (t.value = a.value, o)
      return;
    o = true;
    const s = Os(e, a.value);
    watch(t, (n) => s.value = n);
  };
}
Ps();
var Ir = defineComponent({
  __name: "DialogContent",
  props: {
    isOpenAutoFocus: { type: Boolean, default: true },
    isCloseAutoFocus: { type: Boolean, default: void 0 },
    isEscapeKeyDownDefault: { type: Boolean, default: true },
    isPointerDownOutsideDefault: { type: Boolean, default: true },
    isDisableInteractOutside: { type: Boolean, default: void 0 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["open", "close", "escapeKeyDown", "pointerDownOutside"],
  setup(o, { emit: t }) {
    const e = o, a = inject(vt), { primitiveElement: s, currentElement: n } = x(), l = () => e.isDisableInteractOutside || a.modal && e.isDisableInteractOutside === void 0, r = () => e.isCloseAutoFocus || a.modal && e.isCloseAutoFocus === void 0;
    watchEffect(() => {
      var m;
      n.value && (a != null && a.open.value ? (e.isOpenAutoFocus && ca(n.value), l() && d(), a != null && a.modal && window.addEventListener("keydown", i), window.addEventListener("keydown", f), t("open")) : (c(), window.removeEventListener("keydown", i), window.removeEventListener("keydown", f), r() && ((m = a == null ? void 0 : a.triggerButton.value) == null || m.focus()), t("close")));
    });
    function i(m) {
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
      e.isPointerDownOutsideDefault && (a == null || a.closeModal()), t("pointerDownOutside");
    }
    function f(m) {
      var v;
      m.key === "Escape" && (e.isEscapeKeyDownDefault && (m.preventDefault(), a == null || a.closeModal(), r() && ((v = a == null ? void 0 : a.triggerButton.value) == null || v.focus())), t("escapeKeyDown"));
    }
    return (m, v) => {
      var g, h2;
      return (g = unref(a)) != null && g.open.value ? withDirectives((openBlock(), createBlock(unref(A), {
        key: 0,
        as: m.as,
        "as-child": e.asChild,
        ref_key: "primitiveElement",
        ref: s,
        "data-state": (h2 = unref(a)) != null && h2.open.value ? "open" : "closed",
        role: "dialog",
        tabindex: "-1",
        style: { "pointer-events": "auto" }
      }, {
        default: withCtx(() => [
          renderSlot(m.$slots, "default")
        ]),
        _: 3
      }, 8, ["as", "as-child", "data-state"])), [
        [unref($s), p]
      ]) : createCommentVNode("", true);
    };
  }
});
var xr = defineComponent({
  __name: "DialogOverlay",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o, e = inject(vt);
    return (a, s) => {
      var n, l;
      return (n = unref(e)) != null && n.open.value ? (openBlock(), createBlock(unref(A), mergeProps({ key: 0 }, t, {
        "data-state": (l = unref(e)) != null && l.open.value ? "open" : "closed",
        style: { "pointer-events": "auto" },
        "data-aria-hidden": "true",
        "aria-hidden": "true"
      }), {
        default: withCtx(() => [
          renderSlot(a.$slots, "default")
        ]),
        _: 3
      }, 16, ["data-state"])) : createCommentVNode("", true);
    };
  }
});
var Rr = defineComponent({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(o) {
    const t = o, e = inject(vt);
    function a() {
      e == null || e.closeModal();
    }
    return (s, n) => (openBlock(), createBlock(unref(A), mergeProps(t, {
      type: s.as === "button" ? "button" : void 0,
      "aria-label": "Close",
      onClick: a
    }), {
      default: withCtx(() => [
        renderSlot(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["type"]));
  }
});
var Lr = defineComponent({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: { default: "h2" }
  },
  setup(o) {
    const t = o;
    return (e, a) => (openBlock(), createBlock(unref(A), normalizeProps(guardReactiveProps(t)), {
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
    asChild: { type: Boolean },
    as: { default: "p" }
  },
  setup(o) {
    const t = o;
    return (e, a) => (openBlock(), createBlock(unref(A), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var xe = Symbol();
var Kr = defineComponent({
  __name: "AlertDialogRoot",
  props: {
    open: { type: Boolean, default: void 0 },
    defaultOpen: { type: Boolean, default: false }
  },
  emits: ["update:open"],
  setup(o, { emit: t }) {
    const e = o, a = U(e, "open", t, {
      defaultValue: e.defaultOpen,
      passive: true
    }), s = fa(a.value);
    return watchEffect((n) => {
      s.value = a.value, n(() => s.value = false);
    }), provide(xe, {
      contentId: te(),
      titleId: te(),
      descriptionId: te(),
      open: a,
      openModal: () => {
        a.value = true;
      },
      closeModal: () => {
        a.value = false;
      },
      triggerButton: ref()
    }), (n, l) => renderSlot(n.$slots, "default");
  }
});
var Fr = defineComponent({
  __name: "AlertDialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(o) {
    const t = o, e = inject(xe), { primitiveElement: a, currentElement: s } = x();
    return onMounted(() => {
      e ? e.triggerButton.value = s.value : console.error(
        "Injected value not found, AlertDialogTrigger possibly not wrapped with AlertDialogRoot. Component may not be working properly."
      );
    }), (n, l) => {
      var r, i, d, c;
      return openBlock(), createBlock(unref(A), mergeProps(t, {
        type: t.as === "button" ? "button" : void 0,
        ref_key: "primitiveElement",
        ref: a,
        "aria-haspopup": "dialog",
        "aria-controls": (r = unref(e)) == null ? void 0 : r.contentId,
        "aria-expanded": ((i = unref(e)) == null ? void 0 : i.open.value) || false,
        "data-state": (d = unref(e)) != null && d.open.value ? "open" : "closed",
        onClick: (c = unref(e)) == null ? void 0 : c.openModal
      }), {
        default: withCtx(() => [
          renderSlot(n.$slots, "default")
        ]),
        _: 3
      }, 16, ["type", "aria-controls", "aria-expanded", "data-state", "onClick"]);
    };
  }
});
var Hr = defineComponent({
  __name: "AlertDialogPortal",
  props: {
    container: {}
  },
  setup(o) {
    const t = o;
    return (e, a) => (openBlock(), createBlock(ht, normalizeProps(guardReactiveProps(t)), {
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
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["open", "close", "escapeKeyDown"],
  setup(o, { emit: t }) {
    const e = o, a = inject(xe), { primitiveElement: s, currentElement: n } = x();
    watchEffect((r) => {
      r(() => {
        var i;
        e.isCloseAutoFocus && ((i = a == null ? void 0 : a.triggerButton.value) == null || i.focus()), window.removeEventListener("keydown", l), t("close");
      }), n.value && a != null && a.open.value && (e.isOpenAutoFocus && ca(n.value), window.addEventListener("keydown", l), t("open"));
    });
    const l = (r) => {
      var i;
      if (r.key === "Escape")
        return e.isEscapeKeyDownDefault && (r.preventDefault(), a == null || a.closeModal(), e.isCloseAutoFocus && ((i = a == null ? void 0 : a.triggerButton.value) == null || i.focus())), t("escapeKeyDown");
      if (r.key === "ArrowDown" || r.key === "ArrowUp") {
        const d = document.activeElement;
        d && ["input", "select", "textarea"].indexOf(d.tagName.toLowerCase()) === -1 && r.preventDefault();
      }
    };
    return (r, i) => {
      var d, c, p, f, m;
      return (d = unref(a)) != null && d.open.value ? (openBlock(), createBlock(unref(A), {
        key: 0,
        as: e.as,
        "as-child": e.asChild,
        ref_key: "primitiveElement",
        ref: s,
        id: (c = unref(a)) == null ? void 0 : c.contentId,
        "aria-labelledby": (p = unref(a)) == null ? void 0 : p.titleId,
        "aria-describedby": (f = unref(a)) == null ? void 0 : f.descriptionId,
        "data-state": (m = unref(a)) != null && m.open.value ? "open" : "closed",
        role: "alertdialog",
        tabindex: "-1",
        style: { "pointer-events": "auto" }
      }, {
        default: withCtx(() => [
          renderSlot(r.$slots, "default")
        ]),
        _: 3
      }, 8, ["as", "as-child", "id", "aria-labelledby", "aria-describedby", "data-state"])) : createCommentVNode("", true);
    };
  }
});
var Wr = defineComponent({
  __name: "AlertDialogOverlay",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o, e = inject(xe);
    return (a, s) => {
      var n, l;
      return (n = unref(e)) != null && n.open.value ? (openBlock(), createBlock(unref(A), mergeProps({ key: 0 }, t, {
        "data-state": (l = unref(e)) != null && l.open.value ? "open" : "closed",
        style: { "pointer-events": "auto" },
        "data-aria-hidden": "true",
        "aria-hidden": "true"
      }), {
        default: withCtx(() => [
          renderSlot(a.$slots, "default")
        ]),
        _: 3
      }, 16, ["data-state"])) : createCommentVNode("", true);
    };
  }
});
var Yr = defineComponent({
  __name: "AlertDialogCancel",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(o) {
    const t = o, e = inject(xe);
    return (a, s) => (openBlock(), createBlock(unref(A), mergeProps(t, {
      type: t.as === "button" ? "button" : void 0,
      onClick: s[0] || (s[0] = (n) => {
        var l;
        return (l = unref(e)) == null ? void 0 : l.closeModal();
      })
    }), {
      default: withCtx(() => [
        renderSlot(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["type"]));
  }
});
var Ur = defineComponent({
  __name: "AlertDialogTitle",
  props: {
    asChild: { type: Boolean },
    as: { default: "h2" }
  },
  setup(o) {
    const t = o, e = inject(xe);
    return (a, s) => {
      var n;
      return openBlock(), createBlock(unref(A), mergeProps(t, {
        id: (n = unref(e)) == null ? void 0 : n.titleId
      }), {
        default: withCtx(() => [
          renderSlot(a.$slots, "default")
        ]),
        _: 3
      }, 16, ["id"]);
    };
  }
});
var Gr = defineComponent({
  __name: "AlertDialogDescription",
  props: {
    asChild: { type: Boolean },
    as: { default: "p" }
  },
  setup(o) {
    const t = o, e = inject(xe);
    return (a, s) => {
      var n;
      return openBlock(), createBlock(unref(A), mergeProps(t, {
        id: (n = unref(e)) == null ? void 0 : n.descriptionId
      }), {
        default: withCtx(() => [
          renderSlot(a.$slots, "default")
        ]),
        _: 3
      }, 16, ["id"]);
    };
  }
});
var Xr = defineComponent({
  __name: "AlertDialogAction",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(o) {
    const t = o, e = inject(xe);
    return (a, s) => (openBlock(), createBlock(unref(A), mergeProps(t, {
      type: t.as === "button" ? "button" : void 0,
      onClick: s[0] || (s[0] = (n) => {
        var l;
        return (l = unref(e)) == null ? void 0 : l.closeModal();
      })
    }), {
      default: withCtx(() => [
        renderSlot(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["type"]));
  }
});
var Nt = Symbol();
var qr = defineComponent({
  __name: "ToolbarRoot",
  props: {
    orientation: { default: "horizontal" },
    dir: { default: "ltr" },
    loop: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o, { primitiveElement: e, currentElement: a } = x(), s = ref();
    return provide(Nt, {
      parentElement: a,
      activeElement: s,
      orientation: t.orientation
    }), (n, l) => (openBlock(), createBlock(unref(A), {
      ref_key: "primitiveElement",
      ref: e,
      role: "toolbar",
      tabindex: "0",
      style: { outline: "none" },
      "aria-orientation": t.orientation,
      dir: t.dir,
      "data-orientation": t.orientation,
      "as-child": t.asChild,
      as: n.as
    }, {
      default: withCtx(() => [
        renderSlot(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["aria-orientation", "dir", "data-orientation", "as-child", "as"]));
  }
});
var Jr = defineComponent({
  __name: "ToolbarButton",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(o) {
    const t = o, e = inject(Nt), { primitiveElement: a, currentElement: s } = x();
    function n(l) {
      const r = ae(
        l,
        s.value,
        e == null ? void 0 : e.parentElement.value
      );
      r == null || r.focus();
    }
    return (l, r) => {
      var i, d;
      return openBlock(), createBlock(unref(A), {
        ref_key: "primitiveElement",
        ref: a,
        "data-orientation": (i = unref(e)) == null ? void 0 : i.orientation,
        "as-child": t.asChild,
        as: l.as,
        type: l.as === "button" ? "button" : void 0,
        tabindex: ((d = unref(e)) == null ? void 0 : d.activeElement.value) === unref(s) ? "0" : "-1",
        onKeydown: n,
        "data-radix-vue-collection-item": ""
      }, {
        default: withCtx(() => [
          renderSlot(l.$slots, "default")
        ]),
        _: 3
      }, 8, ["data-orientation", "as-child", "as", "type", "tabindex"]);
    };
  }
});
var Qr = defineComponent({
  __name: "ToolbarLink",
  props: {
    asChild: { type: Boolean },
    as: { default: "a" }
  },
  setup(o) {
    const t = o, e = inject(Nt), { primitiveElement: a, currentElement: s } = x();
    function n(l) {
      const r = ae(
        l,
        s.value,
        e == null ? void 0 : e.parentElement.value
      );
      r == null || r.focus();
    }
    return (l, r) => {
      var i;
      return openBlock(), createBlock(unref(A), {
        ref_key: "primitiveElement",
        ref: a,
        tabindex: ((i = unref(e)) == null ? void 0 : i.activeElement.value) === unref(s) ? "0" : "-1",
        as: l.as,
        "as-child": t.asChild,
        onKeydown: n,
        "data-radix-vue-collection-item": ""
      }, {
        default: withCtx(() => [
          renderSlot(l.$slots, "default")
        ]),
        _: 3
      }, 8, ["tabindex", "as", "as-child"]);
    };
  }
});
var Bo = Symbol();
var Zr = defineComponent({
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
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(o, { emit: t }) {
    const e = o, { primitiveElement: a, currentElement: s } = x();
    return provide(Bo, {
      type: e.type,
      modelValue: toRef(() => e.modelValue),
      changeModelValue: (n) => {
        if (e.type === "single")
          t("update:modelValue", n);
        else {
          if (!n)
            return;
          let l = e.modelValue;
          if (l.includes(n)) {
            let r = l.findIndex((i) => i === n);
            l.splice(r, 1);
          } else
            l.push(n);
          t("update:modelValue", l);
        }
      },
      orientation: e.orientation ? e.orientation : "horizontal",
      parentElement: s
    }), (n, l) => (openBlock(), createBlock(unref(A), {
      ref_key: "primitiveElement",
      ref: a,
      role: "group",
      dir: e.dir,
      "as-child": e.asChild,
      as: n.as,
      "aria-label": "Text alignment"
    }, {
      default: withCtx(() => [
        renderSlot(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["dir", "as-child", "as"]));
  }
});
var Vr = defineComponent({
  __name: "ToolbarToggleItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o, e = inject(
      Bo
    ), a = inject(Nt), s = computed(() => {
      var r, i, d;
      return (e == null ? void 0 : e.type) === "multiple" ? (i = (r = e == null ? void 0 : e.modelValue) == null ? void 0 : r.value) != null && i.includes(t.value) ? "on" : "off" : ((d = e == null ? void 0 : e.modelValue) == null ? void 0 : d.value) === t.value ? "on" : "off";
    }), n = ref();
    function l(r) {
      const i = ae(
        r,
        n.value,
        a == null ? void 0 : a.parentElement.value
      );
      i == null || i.focus();
    }
    return (r, i) => {
      var d;
      return openBlock(), createBlock(unref(A), {
        type: "button",
        "data-state": s.value,
        "data-disabled": t.disabled,
        "data-orientation": (d = unref(e)) == null ? void 0 : d.orientation,
        "as-child": t.asChild,
        as: r.as,
        onClick: i[0] || (i[0] = (c) => unref(e).changeModelValue(t.value)),
        ref_key: "currentToggleElement",
        ref: n,
        onKeydown: l,
        "data-radix-vue-collection-item": ""
      }, {
        default: withCtx(() => [
          renderSlot(r.$slots, "default")
        ]),
        _: 3
      }, 8, ["data-state", "data-disabled", "data-orientation", "as-child", "as"]);
    };
  }
});
var jr = defineComponent({
  __name: "ToolbarSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o;
    return (e, a) => (openBlock(), createBlock(mt, {
      "as-child": t.asChild,
      as: e.as
    }, null, 8, ["as-child", "as"]));
  }
});
var ga = Symbol();
var ei = defineComponent({
  __name: "AvatarRoot",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(o) {
    const t = o, e = ref("loading");
    return provide(ga, {
      imageLoadingStatus: e
    }), (a, s) => (openBlock(), createBlock(unref(A), {
      as: a.as,
      "as-child": t.asChild
    }, {
      default: withCtx(() => [
        renderSlot(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
});
function As(o) {
  const t = ref("idle"), e = ref(false);
  return onMounted(() => {
    if (!o) {
      t.value = "error";
      return;
    }
    e.value = true;
    const a = new window.Image(), s = (n) => () => {
      e.value && (t.value = n);
    };
    t.value = "loading", a.onload = s("loaded"), a.onerror = s("error"), a.src = o;
  }), onUnmounted(() => {
    e.value = false;
  }), t;
}
var ti = defineComponent({
  __name: "AvatarImage",
  props: {
    onLoadingStatusChange: {},
    asChild: { type: Boolean },
    as: { default: "img" }
  },
  setup(o) {
    const t = o, e = inject(ga), a = useAttrs().src, s = As(a);
    return watch(
      s,
      (n) => {
        n !== "idle" && (e.imageLoadingStatus.value = n);
      },
      { immediate: true }
    ), (n, l) => unref(s) === "loaded" ? (openBlock(), createBlock(unref(A), {
      key: 0,
      "as-child": t.asChild,
      as: n.as
    }, {
      default: withCtx(() => [
        renderSlot(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as"])) : createCommentVNode("", true);
  }
});
var ai = defineComponent({
  __name: "AvatarFallback",
  props: {
    delayMs: { default: 0 },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(o) {
    const t = o, e = inject(ga);
    let a = ref(false), s;
    return t.delayMs ? s = setTimeout(() => {
      a.value = true, clearTimeout(s);
    }, t.delayMs) : a.value = true, (n, l) => {
      var r;
      return unref(a) && ((r = unref(e)) == null ? void 0 : r.imageLoadingStatus.value) !== "loaded" ? (openBlock(), createBlock(unref(A), {
        key: 0,
        "as-child": t.asChild,
        as: n.as
      }, {
        default: withCtx(() => [
          renderSlot(n.$slots, "default")
        ]),
        _: 3
      }, 8, ["as-child", "as"])) : createCommentVNode("", true);
    };
  }
});
var _a = Symbol();
var ce = defineComponent({
  __name: "PopperRoot",
  setup(o) {
    const t = ref();
    return provide(_a, {
      anchor: t,
      onAnchorChange: (e) => {
        t.value = e;
      }
    }), (e, a) => renderSlot(e.$slots, "default");
  }
});
var Pe = defineComponent({
  __name: "PopperAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o, { primitiveElement: e, currentElement: a } = x(), s = inject(_a);
    return watch(a, () => {
      s == null || s.onAnchorChange(t.element ?? a.value);
    }), (n, l) => (openBlock(), createBlock(unref(A), {
      as: n.as,
      "as-child": n.asChild,
      ref_key: "primitiveElement",
      ref: e
    }, {
      default: withCtx(() => [
        renderSlot(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
});
var Bs = (o) => ({
  name: "transformOrigin",
  options: o,
  fn(t) {
    var h2, C, $;
    const { placement: e, rects: a, middlewareData: s } = t, l = ((h2 = s.arrow) == null ? void 0 : h2.centerOffset) !== 0, r = l ? 0 : o.arrowWidth, i = l ? 0 : o.arrowHeight, [d, c] = jt(e), p = { start: "0%", center: "50%", end: "100%" }[c], f = (((C = s.arrow) == null ? void 0 : C.x) ?? 0) + r / 2, m = ((($ = s.arrow) == null ? void 0 : $.y) ?? 0) + i / 2;
    let v = "", g = "";
    return d === "bottom" ? (v = l ? p : `${f}px`, g = `${-i}px`) : d === "top" ? (v = l ? p : `${f}px`, g = `${a.floating.height + i}px`) : d === "right" ? (v = `${-i}px`, g = l ? p : `${m}px`) : d === "left" && (v = `${a.floating.width + i}px`, g = l ? p : `${m}px`), { data: { x: v, y: g } };
  }
});
function jt(o) {
  const [t, e = "center"] = o.split("-");
  return [t, e];
}
function Ve(o) {
  return o.split("-")[1];
}
function ba(o) {
  return o === "y" ? "height" : "width";
}
function ge(o) {
  return o.split("-")[0];
}
function We(o) {
  return ["top", "bottom"].includes(ge(o)) ? "x" : "y";
}
function qa(o, t, e) {
  let { reference: a, floating: s } = o;
  const n = a.x + a.width / 2 - s.width / 2, l = a.y + a.height / 2 - s.height / 2, r = We(t), i = ba(r), d = a[i] / 2 - s[i] / 2, c = r === "x";
  let p;
  switch (ge(t)) {
    case "top":
      p = { x: n, y: a.y - s.height };
      break;
    case "bottom":
      p = { x: n, y: a.y + a.height };
      break;
    case "right":
      p = { x: a.x + a.width, y: l };
      break;
    case "left":
      p = { x: a.x - s.width, y: l };
      break;
    default:
      p = { x: a.x, y: a.y };
  }
  switch (Ve(t)) {
    case "start":
      p[r] -= d * (e && c ? -1 : 1);
      break;
    case "end":
      p[r] += d * (e && c ? -1 : 1);
  }
  return p;
}
var Ts = async (o, t, e) => {
  const { placement: a = "bottom", strategy: s = "absolute", middleware: n = [], platform: l } = e, r = n.filter(Boolean), i = await (l.isRTL == null ? void 0 : l.isRTL(t));
  let d = await l.getElementRects({ reference: o, floating: t, strategy: s }), { x: c, y: p } = qa(d, a, i), f = a, m = {}, v = 0;
  for (let g = 0; g < r.length; g++) {
    const { name: h2, fn: C } = r[g], { x: $, y: P, data: B, reset: R } = await C({ x: c, y: p, initialPlacement: a, placement: f, strategy: s, middlewareData: m, rects: d, platform: l, elements: { reference: o, floating: t } });
    c = $ ?? c, p = P ?? p, m = { ...m, [h2]: { ...m[h2], ...B } }, R && v <= 50 && (v++, typeof R == "object" && (R.placement && (f = R.placement), R.rects && (d = R.rects === true ? await l.getElementRects({ reference: o, floating: t, strategy: s }) : R.rects), { x: c, y: p } = qa(d, f, i)), g = -1);
  }
  return { x: c, y: p, placement: f, strategy: s, middlewareData: m };
};
function Ce(o, t) {
  return typeof o == "function" ? o(t) : o;
}
function To(o) {
  return typeof o != "number" ? function(t) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...t };
  }(o) : { top: o, right: o, bottom: o, left: o };
}
function Ot(o) {
  return { ...o, top: o.y, left: o.x, right: o.x + o.width, bottom: o.y + o.height };
}
async function at(o, t) {
  var e;
  t === void 0 && (t = {});
  const { x: a, y: s, platform: n, rects: l, elements: r, strategy: i } = o, { boundary: d = "clippingAncestors", rootBoundary: c = "viewport", elementContext: p = "floating", altBoundary: f = false, padding: m = 0 } = Ce(t, o), v = To(m), g = r[f ? p === "floating" ? "reference" : "floating" : p], h2 = Ot(await n.getClippingRect({ element: (e = await (n.isElement == null ? void 0 : n.isElement(g))) == null || e ? g : g.contextElement || await (n.getDocumentElement == null ? void 0 : n.getDocumentElement(r.floating)), boundary: d, rootBoundary: c, strategy: i })), C = p === "floating" ? { ...l.floating, x: a, y: s } : l.reference, $ = await (n.getOffsetParent == null ? void 0 : n.getOffsetParent(r.floating)), P = await (n.isElement == null ? void 0 : n.isElement($)) && await (n.getScale == null ? void 0 : n.getScale($)) || { x: 1, y: 1 }, B = Ot(n.convertOffsetParentRelativeRectToViewportRelativeRect ? await n.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: C, offsetParent: $, strategy: i }) : C);
  return { top: (h2.top - B.top + v.top) / P.y, bottom: (B.bottom - h2.bottom + v.bottom) / P.y, left: (h2.left - B.left + v.left) / P.x, right: (B.right - h2.right + v.right) / P.x };
}
var ot = Math.min;
var Ne = Math.max;
function ea(o, t, e) {
  return Ne(o, ot(t, e));
}
var ks = (o) => ({ name: "arrow", options: o, async fn(t) {
  const { x: e, y: a, placement: s, rects: n, platform: l, elements: r } = t, { element: i, padding: d = 0 } = Ce(o, t) || {};
  if (i == null)
    return {};
  const c = To(d), p = { x: e, y: a }, f = We(s), m = ba(f), v = await l.getDimensions(i), g = f === "y", h2 = g ? "top" : "left", C = g ? "bottom" : "right", $ = g ? "clientHeight" : "clientWidth", P = n.reference[m] + n.reference[f] - p[f] - n.floating[m], B = p[f] - n.reference[f], R = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(i));
  let K = R ? R[$] : 0;
  K && await (l.isElement == null ? void 0 : l.isElement(R)) || (K = r.floating[$] || n.floating[m]);
  const D = P / 2 - B / 2, Q = K / 2 - v[m] / 2 - 1, k = ot(c[h2], Q), M = ot(c[C], Q), L = k, W = K - v[m] - M, G = K / 2 - v[m] / 2 + D, J = ea(L, G, W), j = Ve(s) != null && G != J && n.reference[m] / 2 - (G < L ? k : M) - v[m] / 2 < 0 ? G < L ? L - G : W - G : 0;
  return { [f]: p[f] - j, data: { [f]: J, centerOffset: G - J + j } };
} });
var ko = ["top", "right", "bottom", "left"];
ko.reduce((o, t) => o.concat(t, t + "-start", t + "-end"), []);
var Ds = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Pt(o) {
  return o.replace(/left|right|bottom|top/g, (t) => Ds[t]);
}
function Ms(o, t, e) {
  e === void 0 && (e = false);
  const a = Ve(o), s = We(o), n = ba(s);
  let l = s === "x" ? a === (e ? "end" : "start") ? "right" : "left" : a === "start" ? "bottom" : "top";
  return t.reference[n] > t.floating[n] && (l = Pt(l)), { main: l, cross: Pt(l) };
}
var Is = { start: "end", end: "start" };
function qt(o) {
  return o.replace(/start|end/g, (t) => Is[t]);
}
var xs = function(o) {
  return o === void 0 && (o = {}), { name: "flip", options: o, async fn(t) {
    var e;
    const { placement: a, middlewareData: s, rects: n, initialPlacement: l, platform: r, elements: i } = t, { mainAxis: d = true, crossAxis: c = true, fallbackPlacements: p, fallbackStrategy: f = "bestFit", fallbackAxisSideDirection: m = "none", flipAlignment: v = true, ...g } = Ce(o, t), h2 = ge(a), C = ge(l) === l, $ = await (r.isRTL == null ? void 0 : r.isRTL(i.floating)), P = p || (C || !v ? [Pt(l)] : function(L) {
      const W = Pt(L);
      return [qt(L), W, qt(W)];
    }(l));
    p || m === "none" || P.push(...function(L, W, G, J) {
      const j = Ve(L);
      let V = function(pe, fe, he) {
        const re = ["left", "right"], Ra = ["right", "left"], dn = ["top", "bottom"], cn = ["bottom", "top"];
        switch (pe) {
          case "top":
          case "bottom":
            return he ? fe ? Ra : re : fe ? re : Ra;
          case "left":
          case "right":
            return fe ? dn : cn;
          default:
            return [];
        }
      }(ge(L), G === "start", J);
      return j && (V = V.map((pe) => pe + "-" + j), W && (V = V.concat(V.map(qt)))), V;
    }(l, v, m, $));
    const B = [l, ...P], R = await at(t, g), K = [];
    let D = ((e = s.flip) == null ? void 0 : e.overflows) || [];
    if (d && K.push(R[h2]), c) {
      const { main: L, cross: W } = Ms(a, n, $);
      K.push(R[L], R[W]);
    }
    if (D = [...D, { placement: a, overflows: K }], !K.every((L) => L <= 0)) {
      var Q, k;
      const L = (((Q = s.flip) == null ? void 0 : Q.index) || 0) + 1, W = B[L];
      if (W)
        return { data: { index: L, overflows: D }, reset: { placement: W } };
      let G = (k = D.filter((J) => J.overflows[0] <= 0).sort((J, j) => J.overflows[1] - j.overflows[1])[0]) == null ? void 0 : k.placement;
      if (!G)
        switch (f) {
          case "bestFit": {
            var M;
            const J = (M = D.map((j) => [j.placement, j.overflows.filter((V) => V > 0).reduce((V, pe) => V + pe, 0)]).sort((j, V) => j[1] - V[1])[0]) == null ? void 0 : M[0];
            J && (G = J);
            break;
          }
          case "initialPlacement":
            G = l;
        }
      if (a !== G)
        return { reset: { placement: G } };
    }
    return {};
  } };
};
function Ja(o, t) {
  return { top: o.top - t.height, right: o.right - t.width, bottom: o.bottom - t.height, left: o.left - t.width };
}
function Qa(o) {
  return ko.some((t) => o[t] >= 0);
}
var Rs = function(o) {
  return o === void 0 && (o = {}), { name: "hide", options: o, async fn(t) {
    const { rects: e } = t, { strategy: a = "referenceHidden", ...s } = Ce(o, t);
    switch (a) {
      case "referenceHidden": {
        const n = Ja(await at(t, { ...s, elementContext: "reference" }), e.reference);
        return { data: { referenceHiddenOffsets: n, referenceHidden: Qa(n) } };
      }
      case "escaped": {
        const n = Ja(await at(t, { ...s, altBoundary: true }), e.floating);
        return { data: { escapedOffsets: n, escaped: Qa(n) } };
      }
      default:
        return {};
    }
  } };
};
var Ls = function(o) {
  return o === void 0 && (o = 0), { name: "offset", options: o, async fn(t) {
    const { x: e, y: a } = t, s = await async function(n, l) {
      const { placement: r, platform: i, elements: d } = n, c = await (i.isRTL == null ? void 0 : i.isRTL(d.floating)), p = ge(r), f = Ve(r), m = We(r) === "x", v = ["left", "top"].includes(p) ? -1 : 1, g = c && m ? -1 : 1, h2 = Ce(l, n);
      let { mainAxis: C, crossAxis: $, alignmentAxis: P } = typeof h2 == "number" ? { mainAxis: h2, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...h2 };
      return f && typeof P == "number" && ($ = f === "end" ? -1 * P : P), m ? { x: $ * g, y: C * v } : { x: C * v, y: $ * g };
    }(t, o);
    return { x: e + s.x, y: a + s.y, data: s };
  } };
};
function Do(o) {
  return o === "x" ? "y" : "x";
}
var Ns = function(o) {
  return o === void 0 && (o = {}), { name: "shift", options: o, async fn(t) {
    const { x: e, y: a, placement: s } = t, { mainAxis: n = true, crossAxis: l = false, limiter: r = { fn: (h2) => {
      let { x: C, y: $ } = h2;
      return { x: C, y: $ };
    } }, ...i } = Ce(o, t), d = { x: e, y: a }, c = await at(t, i), p = We(ge(s)), f = Do(p);
    let m = d[p], v = d[f];
    if (n) {
      const h2 = p === "y" ? "bottom" : "right";
      m = ea(m + c[p === "y" ? "top" : "left"], m, m - c[h2]);
    }
    if (l) {
      const h2 = f === "y" ? "bottom" : "right";
      v = ea(v + c[f === "y" ? "top" : "left"], v, v - c[h2]);
    }
    const g = r.fn({ ...t, [p]: m, [f]: v });
    return { ...g, data: { x: g.x - e, y: g.y - a } };
  } };
};
var Ks = function(o) {
  return o === void 0 && (o = {}), { options: o, fn(t) {
    const { x: e, y: a, placement: s, rects: n, middlewareData: l } = t, { offset: r = 0, mainAxis: i = true, crossAxis: d = true } = Ce(o, t), c = { x: e, y: a }, p = We(s), f = Do(p);
    let m = c[p], v = c[f];
    const g = Ce(r, t), h2 = typeof g == "number" ? { mainAxis: g, crossAxis: 0 } : { mainAxis: 0, crossAxis: 0, ...g };
    if (i) {
      const P = p === "y" ? "height" : "width", B = n.reference[p] - n.floating[P] + h2.mainAxis, R = n.reference[p] + n.reference[P] - h2.mainAxis;
      m < B ? m = B : m > R && (m = R);
    }
    if (d) {
      var C, $;
      const P = p === "y" ? "width" : "height", B = ["top", "left"].includes(ge(s)), R = n.reference[f] - n.floating[P] + (B && ((C = l.offset) == null ? void 0 : C[f]) || 0) + (B ? 0 : h2.crossAxis), K = n.reference[f] + n.reference[P] + (B ? 0 : (($ = l.offset) == null ? void 0 : $[f]) || 0) - (B ? h2.crossAxis : 0);
      v < R ? v = R : v > K && (v = K);
    }
    return { [p]: m, [f]: v };
  } };
};
var Fs = function(o) {
  return o === void 0 && (o = {}), { name: "size", options: o, async fn(t) {
    const { placement: e, rects: a, platform: s, elements: n } = t, { apply: l = () => {
    }, ...r } = Ce(o, t), i = await at(t, r), d = ge(e), c = Ve(e), p = We(e) === "x", { width: f, height: m } = a.floating;
    let v, g;
    d === "top" || d === "bottom" ? (v = d, g = c === (await (s.isRTL == null ? void 0 : s.isRTL(n.floating)) ? "start" : "end") ? "left" : "right") : (g = d, v = c === "end" ? "top" : "bottom");
    const h2 = m - i[v], C = f - i[g], $ = !t.middlewareData.shift;
    let P = h2, B = C;
    if (p) {
      const K = f - i.left - i.right;
      B = c || $ ? ot(C, K) : K;
    } else {
      const K = m - i.top - i.bottom;
      P = c || $ ? ot(h2, K) : K;
    }
    if ($ && !c) {
      const K = Ne(i.left, 0), D = Ne(i.right, 0), Q = Ne(i.top, 0), k = Ne(i.bottom, 0);
      p ? B = f - 2 * (K !== 0 || D !== 0 ? K + D : Ne(i.left, i.right)) : P = m - 2 * (Q !== 0 || k !== 0 ? Q + k : Ne(i.top, i.bottom));
    }
    await l({ ...t, availableWidth: B, availableHeight: P });
    const R = await s.getDimensions(n.floating);
    return f !== R.width || m !== R.height ? { reset: { rects: true } } : {};
  } };
};
function se(o) {
  var t;
  return ((t = o.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function ie(o) {
  return se(o).getComputedStyle(o);
}
function Mo(o) {
  return o instanceof se(o).Node;
}
function De(o) {
  return Mo(o) ? (o.nodeName || "").toLowerCase() : "#document";
}
function ue(o) {
  return o instanceof se(o).HTMLElement;
}
function _e(o) {
  return o instanceof se(o).Element;
}
function Za(o) {
  return typeof ShadowRoot < "u" && (o instanceof se(o).ShadowRoot || o instanceof ShadowRoot);
}
function nt(o) {
  const { overflow: t, overflowX: e, overflowY: a, display: s } = ie(o);
  return /auto|scroll|overlay|hidden|clip/.test(t + a + e) && !["inline", "contents"].includes(s);
}
function Hs(o) {
  return ["table", "td", "th"].includes(De(o));
}
function ta(o) {
  const t = wa(), e = ie(o);
  return e.transform !== "none" || e.perspective !== "none" || !t && !!e.backdropFilter && e.backdropFilter !== "none" || !t && !!e.filter && e.filter !== "none" || ["transform", "perspective", "filter"].some((a) => (e.willChange || "").includes(a)) || ["paint", "layout", "strict", "content"].some((a) => (e.contain || "").includes(a));
}
function wa() {
  return !(typeof CSS > "u" || !CSS.supports) && CSS.supports("-webkit-backdrop-filter", "none");
}
function Kt(o) {
  return ["html", "body", "#document"].includes(De(o));
}
var aa = Math.min;
var Ge = Math.max;
var At = Math.round;
var wt = Math.floor;
var Ke = (o) => ({ x: o, y: o });
function Io(o) {
  const t = ie(o);
  let e = parseFloat(t.width) || 0, a = parseFloat(t.height) || 0;
  const s = ue(o), n = s ? o.offsetWidth : e, l = s ? o.offsetHeight : a, r = At(e) !== n || At(a) !== l;
  return r && (e = n, a = l), { width: e, height: a, $: r };
}
function Ea(o) {
  return _e(o) ? o : o.contextElement;
}
function Xe(o) {
  const t = Ea(o);
  if (!ue(t))
    return Ke(1);
  const e = t.getBoundingClientRect(), { width: a, height: s, $: n } = Io(t);
  let l = (n ? At(e.width) : e.width) / a, r = (n ? At(e.height) : e.height) / s;
  return l && Number.isFinite(l) || (l = 1), r && Number.isFinite(r) || (r = 1), { x: l, y: r };
}
var Va = Ke(0);
function xo(o, t, e) {
  var a, s;
  if (t === void 0 && (t = true), !wa())
    return Va;
  const n = o ? se(o) : window;
  return !e || t && e !== n ? Va : { x: ((a = n.visualViewport) == null ? void 0 : a.offsetLeft) || 0, y: ((s = n.visualViewport) == null ? void 0 : s.offsetTop) || 0 };
}
function Fe(o, t, e, a) {
  t === void 0 && (t = false), e === void 0 && (e = false);
  const s = o.getBoundingClientRect(), n = Ea(o);
  let l = Ke(1);
  t && (a ? _e(a) && (l = Xe(a)) : l = Xe(o));
  const r = xo(n, e, a);
  let i = (s.left + r.x) / l.x, d = (s.top + r.y) / l.y, c = s.width / l.x, p = s.height / l.y;
  if (n) {
    const f = se(n), m = a && _e(a) ? se(a) : a;
    let v = f.frameElement;
    for (; v && a && m !== f; ) {
      const g = Xe(v), h2 = v.getBoundingClientRect(), C = getComputedStyle(v), $ = h2.left + (v.clientLeft + parseFloat(C.paddingLeft)) * g.x, P = h2.top + (v.clientTop + parseFloat(C.paddingTop)) * g.y;
      i *= g.x, d *= g.y, c *= g.x, p *= g.y, i += $, d += P, v = se(v).frameElement;
    }
  }
  return Ot({ width: c, height: p, x: i, y: d });
}
function be(o) {
  return ((Mo(o) ? o.ownerDocument : o.document) || window.document).documentElement;
}
function Ft(o) {
  return _e(o) ? { scrollLeft: o.scrollLeft, scrollTop: o.scrollTop } : { scrollLeft: o.pageXOffset, scrollTop: o.pageYOffset };
}
function Ro(o) {
  return Fe(be(o)).left + Ft(o).scrollLeft;
}
function Qe(o) {
  if (De(o) === "html")
    return o;
  const t = o.assignedSlot || o.parentNode || Za(o) && o.host || be(o);
  return Za(t) ? t.host : t;
}
function Lo(o) {
  const t = Qe(o);
  return Kt(t) ? o.ownerDocument ? o.ownerDocument.body : o.body : ue(t) && nt(t) ? t : Lo(t);
}
function Bt(o, t) {
  var e;
  t === void 0 && (t = []);
  const a = Lo(o), s = a === ((e = o.ownerDocument) == null ? void 0 : e.body), n = se(a);
  return s ? t.concat(n, n.visualViewport || [], nt(a) ? a : []) : t.concat(a, Bt(a));
}
function ja(o, t, e) {
  let a;
  if (t === "viewport")
    a = function(s, n) {
      const l = se(s), r = be(s), i = l.visualViewport;
      let d = r.clientWidth, c = r.clientHeight, p = 0, f = 0;
      if (i) {
        d = i.width, c = i.height;
        const m = wa();
        (!m || m && n === "fixed") && (p = i.offsetLeft, f = i.offsetTop);
      }
      return { width: d, height: c, x: p, y: f };
    }(o, e);
  else if (t === "document")
    a = function(s) {
      const n = be(s), l = Ft(s), r = s.ownerDocument.body, i = Ge(n.scrollWidth, n.clientWidth, r.scrollWidth, r.clientWidth), d = Ge(n.scrollHeight, n.clientHeight, r.scrollHeight, r.clientHeight);
      let c = -l.scrollLeft + Ro(s);
      const p = -l.scrollTop;
      return ie(r).direction === "rtl" && (c += Ge(n.clientWidth, r.clientWidth) - i), { width: i, height: d, x: c, y: p };
    }(be(o));
  else if (_e(t))
    a = function(s, n) {
      const l = Fe(s, true, n === "fixed"), r = l.top + s.clientTop, i = l.left + s.clientLeft, d = ue(s) ? Xe(s) : Ke(1);
      return { width: s.clientWidth * d.x, height: s.clientHeight * d.y, x: i * d.x, y: r * d.y };
    }(t, e);
  else {
    const s = xo(o);
    a = { ...t, x: t.x - s.x, y: t.y - s.y };
  }
  return Ot(a);
}
function No(o, t) {
  const e = Qe(o);
  return !(e === t || !_e(e) || Kt(e)) && (ie(e).position === "fixed" || No(e, t));
}
function eo(o, t) {
  return ue(o) && ie(o).position !== "fixed" ? t ? t(o) : o.offsetParent : null;
}
function to(o, t) {
  const e = se(o);
  if (!ue(o))
    return e;
  let a = eo(o, t);
  for (; a && Hs(a) && ie(a).position === "static"; )
    a = eo(a, t);
  return a && (De(a) === "html" || De(a) === "body" && ie(a).position === "static" && !ta(a)) ? e : a || function(s) {
    let n = Qe(s);
    for (; ue(n) && !Kt(n); ) {
      if (ta(n))
        return n;
      n = Qe(n);
    }
    return null;
  }(o) || e;
}
function zs(o, t, e) {
  const a = ue(t), s = be(t), n = e === "fixed", l = Fe(o, true, n, t);
  let r = { scrollLeft: 0, scrollTop: 0 };
  const i = Ke(0);
  if (a || !a && !n)
    if ((De(t) !== "body" || nt(s)) && (r = Ft(t)), ue(t)) {
      const d = Fe(t, true, n, t);
      i.x = d.x + t.clientLeft, i.y = d.y + t.clientTop;
    } else
      s && (i.x = Ro(s));
  return { x: l.left + r.scrollLeft - i.x, y: l.top + r.scrollTop - i.y, width: l.width, height: l.height };
}
var Ws = { getClippingRect: function(o) {
  let { element: t, boundary: e, rootBoundary: a, strategy: s } = o;
  const n = e === "clippingAncestors" ? function(d, c) {
    const p = c.get(d);
    if (p)
      return p;
    let f = Bt(d).filter((h2) => _e(h2) && De(h2) !== "body"), m = null;
    const v = ie(d).position === "fixed";
    let g = v ? Qe(d) : d;
    for (; _e(g) && !Kt(g); ) {
      const h2 = ie(g), C = ta(g);
      C || h2.position !== "fixed" || (m = null), (v ? !C && !m : !C && h2.position === "static" && m && ["absolute", "fixed"].includes(m.position) || nt(g) && !C && No(d, g)) ? f = f.filter(($) => $ !== g) : m = h2, g = Qe(g);
    }
    return c.set(d, f), f;
  }(t, this._c) : [].concat(e), l = [...n, a], r = l[0], i = l.reduce((d, c) => {
    const p = ja(t, c, s);
    return d.top = Ge(p.top, d.top), d.right = aa(p.right, d.right), d.bottom = aa(p.bottom, d.bottom), d.left = Ge(p.left, d.left), d;
  }, ja(t, r, s));
  return { width: i.right - i.left, height: i.bottom - i.top, x: i.left, y: i.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(o) {
  let { rect: t, offsetParent: e, strategy: a } = o;
  const s = ue(e), n = be(e);
  if (e === n)
    return t;
  let l = { scrollLeft: 0, scrollTop: 0 }, r = Ke(1);
  const i = Ke(0);
  if ((s || !s && a !== "fixed") && ((De(e) !== "body" || nt(n)) && (l = Ft(e)), ue(e))) {
    const d = Fe(e);
    r = Xe(e), i.x = d.x + e.clientLeft, i.y = d.y + e.clientTop;
  }
  return { width: t.width * r.x, height: t.height * r.y, x: t.x * r.x - l.scrollLeft * r.x + i.x, y: t.y * r.y - l.scrollTop * r.y + i.y };
}, isElement: _e, getDimensions: function(o) {
  return Io(o);
}, getOffsetParent: to, getDocumentElement: be, getScale: Xe, async getElementRects(o) {
  let { reference: t, floating: e, strategy: a } = o;
  const s = this.getOffsetParent || to, n = this.getDimensions;
  return { reference: zs(t, await s(e), a), floating: { x: 0, y: 0, ...await n(e) } };
}, getClientRects: (o) => Array.from(o.getClientRects()), isRTL: (o) => ie(o).direction === "rtl" };
function Ys(o, t, e, a) {
  a === void 0 && (a = {});
  const { ancestorScroll: s = true, ancestorResize: n = true, elementResize: l = true, layoutShift: r = typeof IntersectionObserver == "function", animationFrame: i = false } = a, d = Ea(o), c = s || n ? [...d ? Bt(d) : [], ...Bt(t)] : [];
  c.forEach((g) => {
    s && g.addEventListener("scroll", e, { passive: true }), n && g.addEventListener("resize", e);
  });
  const p = d && r ? function(g, h2) {
    let C, $ = null;
    const P = be(g);
    function B() {
      clearTimeout(C), $ && $.disconnect(), $ = null;
    }
    return function R(K, D) {
      K === void 0 && (K = false), D === void 0 && (D = 1), B();
      const { left: Q, top: k, width: M, height: L } = g.getBoundingClientRect();
      if (K || h2(), !M || !L)
        return;
      const W = wt(k), G = wt(P.clientWidth - (Q + M)), J = wt(P.clientHeight - (k + L)), j = wt(Q);
      let V = true;
      $ = new IntersectionObserver((pe) => {
        const fe = pe[0].intersectionRatio;
        if (fe !== D) {
          if (!V)
            return R();
          fe ? R(false, fe) : C = setTimeout(() => {
            R(false, 1e-7);
          }, 100);
        }
        V = false;
      }, { rootMargin: -W + "px " + -G + "px " + -J + "px " + -j + "px", threshold: Ge(0, aa(1, D)) || 1 }), $.observe(g);
    }(true), B;
  }(d, e) : null;
  let f, m = null;
  l && (m = new ResizeObserver(e), d && !i && m.observe(d), m.observe(t));
  let v = i ? Fe(o) : null;
  return i && function g() {
    const h2 = Fe(o);
    !v || h2.x === v.x && h2.y === v.y && h2.width === v.width && h2.height === v.height || e(), v = h2, f = requestAnimationFrame(g);
  }(), e(), () => {
    c.forEach((g) => {
      s && g.removeEventListener("scroll", e), n && g.removeEventListener("resize", e);
    }), p && p(), m && m.disconnect(), m = null, i && cancelAnimationFrame(f);
  };
}
var Us = (o, t, e) => {
  const a = /* @__PURE__ */ new Map(), s = { platform: Ws, ...e }, n = { ...s.platform, _c: a };
  return Ts(o, t, { ...s, platform: n });
};
function oa(o) {
  var t;
  return (t = o == null ? void 0 : o.$el) != null ? t : o;
}
function Gs(o) {
  return {
    name: "arrow",
    options: o,
    fn(t) {
      const e = oa(unref(o.element));
      return e == null ? {} : ks({
        element: e,
        padding: o.padding
      }).fn(t);
    }
  };
}
function Ko(o) {
  return typeof window > "u" ? 1 : (o.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function ao(o, t) {
  const e = Ko(o);
  return Math.round(t * e) / e;
}
function Xs(o, t, e) {
  e === void 0 && (e = {});
  const a = e.whileElementsMounted, s = computed(() => {
    var D;
    return (D = unref(e.open)) != null ? D : true;
  }), n = computed(() => unref(e.middleware)), l = computed(() => {
    var D;
    return (D = unref(e.placement)) != null ? D : "bottom";
  }), r = computed(() => {
    var D;
    return (D = unref(e.strategy)) != null ? D : "absolute";
  }), i = computed(() => {
    var D;
    return (D = unref(e.transform)) != null ? D : true;
  }), d = computed(() => oa(o.value)), c = computed(() => oa(t.value)), p = ref(0), f = ref(0), m = ref(r.value), v = ref(l.value), g = shallowRef({}), h2 = ref(false), C = computed(() => {
    const D = {
      position: m.value,
      left: "0",
      top: "0"
    };
    if (!c.value)
      return D;
    const Q = ao(c.value, p.value), k = ao(c.value, f.value);
    return i.value ? {
      ...D,
      transform: "translate(" + Q + "px, " + k + "px)",
      ...Ko(c.value) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: m.value,
      left: Q + "px",
      top: k + "px"
    };
  });
  let $;
  function P() {
    d.value == null || c.value == null || Us(d.value, c.value, {
      middleware: n.value,
      placement: l.value,
      strategy: r.value
    }).then((D) => {
      p.value = D.x, f.value = D.y, m.value = D.strategy, v.value = D.placement, g.value = D.middlewareData, h2.value = true;
    });
  }
  function B() {
    typeof $ == "function" && ($(), $ = void 0);
  }
  function R() {
    if (B(), a === void 0) {
      P();
      return;
    }
    if (d.value != null && c.value != null) {
      $ = a(d.value, c.value, P);
      return;
    }
  }
  function K() {
    s.value || (h2.value = false);
  }
  return watch([n, l, r], P, {
    flush: "sync"
  }), watch([d, c], R, {
    flush: "sync"
  }), watch(s, K, {
    flush: "sync"
  }), getCurrentScope() && onScopeDispose(B), {
    x: shallowReadonly(p),
    y: shallowReadonly(f),
    strategy: shallowReadonly(m),
    placement: shallowReadonly(v),
    middlewareData: shallowReadonly(g),
    isPositioned: shallowReadonly(h2),
    floatingStyles: C,
    update: P
  };
}
var Ht = {
  side: "bottom",
  sideOffset: 0,
  align: "center",
  alignOffset: 0,
  arrowPadding: 0,
  avoidCollisions: true,
  collisionBoundary: () => [],
  collisionPadding: 0,
  sticky: "partial",
  hideWhenDetached: false,
  updatePositionStrategy: "optimized",
  prioritizePosition: false
};
var Fo = Symbol();
var qs = {
  inheritAttrs: false
};
var Ae = defineComponent({
  ...qs,
  __name: "PopperContent",
  props: mergeDefaults({
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    onPlaced: { type: Function },
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  }, {
    ...Ht
  }),
  setup(o, { expose: t }) {
    const e = o, a = inject(_a), { primitiveElement: s, currentElement: n } = x(), l = ref(), r = ref(), i = ref(), { width: d, height: c } = os(i), p = computed(
      () => e.side + (e.align !== "center" ? "-" + e.align : "")
    ), f = computed(() => typeof e.collisionPadding == "number" ? e.collisionPadding : { top: 0, right: 0, bottom: 0, left: 0, ...e.collisionPadding }), m = computed(() => Array.isArray(e.collisionBoundary) ? e.collisionBoundary : [e.collisionBoundary]), v = computed(() => ({
      padding: f.value,
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: m.value.length > 0
    })), g = Mn(() => [
      Ls({
        mainAxis: e.sideOffset + c.value,
        alignmentAxis: e.alignOffset
      }),
      e.avoidCollisions && Ns({
        mainAxis: true,
        crossAxis: !!e.prioritizePosition,
        limiter: e.sticky === "partial" ? Ks() : void 0,
        ...v.value
      }),
      !e.prioritizePosition && e.avoidCollisions && xs({
        ...v.value
      }),
      Fs({
        ...v,
        apply: ({ elements: M, rects: L, availableWidth: W, availableHeight: G }) => {
          const { width: J, height: j } = L.reference, V = M.floating.style;
          Object.assign(M.floating.style, {
            maxWidth: `${W}px`,
            maxHeight: `${G}px`
          }), V.setProperty(
            "--radix-popper-available-width",
            `${W}px`
          ), V.setProperty(
            "--radix-popper-available-height",
            `${G}px`
          ), V.setProperty(
            "--radix-popper-anchor-width",
            `${J}px`
          ), V.setProperty(
            "--radix-popper-anchor-height",
            `${j}px`
          );
        }
      }),
      i.value && Gs({ element: i.value, padding: e.arrowPadding }),
      Bs({
        arrowWidth: d.value,
        arrowHeight: c.value
      }),
      e.hideWhenDetached && Rs({ strategy: "referenceHidden", ...v.value })
    ]), { floatingStyles: h2, placement: C, isPositioned: $, middlewareData: P } = Xs(
      a.anchor,
      l,
      {
        strategy: "fixed",
        placement: p,
        whileElementsMounted: (...M) => Ys(...M, {
          animationFrame: e.updatePositionStrategy === "always"
        }),
        middleware: g
      }
    ), B = computed(
      () => jt(C.value)[0]
    ), R = computed(
      () => jt(C.value)[1]
    );
    watchEffect(() => {
      var M;
      $.value && ((M = e.onPlaced) == null || M.call(e));
    });
    const K = computed(
      () => {
        var M;
        return ((M = P.value.arrow) == null ? void 0 : M.centerOffset) !== 0;
      }
    ), D = ref("");
    watchEffect(() => {
      r.value && (D.value = window.getComputedStyle(r.value).zIndex);
    });
    const Q = computed(() => {
      var M;
      return ((M = P.value.arrow) == null ? void 0 : M.x) ?? 0;
    }), k = computed(() => {
      var M;
      return ((M = P.value.arrow) == null ? void 0 : M.y) ?? 0;
    });
    return provide(Fo, {
      placedSide: B,
      onArrowChange: (M) => {
        i.value = M;
      },
      arrowX: Q,
      arrowY: k,
      shouldHideArrow: K
    }), t({
      $el: n
    }), (M, L) => {
      var W, G, J;
      return openBlock(), createElementBlock("div", {
        ref_key: "floatingRef",
        ref: l,
        "data-radix-popper-content-wrapper": "",
        style: normalizeStyle({
          ...unref(h2),
          transform: unref($) ? unref(h2).transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: D.value,
          ["--radix-popper-transform-origin"]: [
            (W = unref(P).transformOrigin) == null ? void 0 : W.x,
            (G = unref(P).transformOrigin) == null ? void 0 : G.y
          ].join(" ")
        })
      }, [
        createVNode(unref(A), mergeProps({
          ref_key: "primitiveElement",
          ref: s
        }, M.$attrs, {
          "as-child": e.asChild,
          as: M.as,
          "data-side": B.value,
          "data-align": R.value,
          style: {
            // if the PopperContent hasn't been placed yet (not all measurements done)
            // we prevent animations so that users's animation don't kick in too early referring wrong sides
            animation: unref($) ? void 0 : "none",
            // hide the content if using the hide middleware and should be hidden
            opacity: (J = unref(P).hide) != null && J.referenceHidden ? 0 : void 0
          }
        }), {
          default: withCtx(() => [
            renderSlot(M.$slots, "default")
          ]),
          _: 3
        }, 16, ["as-child", "as", "data-side", "data-align", "style"])
      ], 4);
    };
  }
});
var Js = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
};
var Qs = {
  inheritAttrs: false
};
var Ye = defineComponent({
  ...Qs,
  __name: "PopperArrow",
  props: {
    width: {},
    height: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = inject(Fo), e = computed(
      () => t != null && t.placedSide ? Js[t == null ? void 0 : t.placedSide.value] : ""
    );
    return (a, s) => {
      var n, l, r, i;
      return openBlock(), createElementBlock("span", {
        ref: (d) => {
          unref(t).onArrowChange(d);
        },
        style: normalizeStyle({
          position: "absolute",
          left: (n = unref(t).arrowX) != null && n.value ? `${(l = unref(t).arrowX) == null ? void 0 : l.value}px` : void 0,
          top: (r = unref(t).arrowY) != null && r.value ? `${(i = unref(t).arrowY) == null ? void 0 : i.value}px` : void 0,
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
        createVNode(ws, mergeProps(a.$attrs, { style: {
          display: "block"
        } }), null, 16)
      ], 4);
    };
  }
});
var Ca = Symbol();
var oi = defineComponent({
  __name: "TooltipRoot",
  props: {
    defaultOpen: { type: Boolean, default: false },
    open: { type: Boolean, default: void 0 },
    delayDuration: { default: 700 },
    disableHoverableContent: { type: Boolean }
  },
  emits: ["update:open"],
  setup(o, { emit: t }) {
    const e = o, a = U(e, "open", t, {
      defaultValue: e.defaultOpen,
      passive: true
    }), s = ref(false), n = computed(() => a.value ? s.value ? "delayed-open" : "instant-open" : "closed");
    return provide(Ca, {
      open: a,
      showTooltip: (l) => {
        s.value = l, a.value = true;
      },
      hideTooltip: () => a.value = false,
      delayMs: e.delayDuration,
      dataState: n,
      disableHoverableContent: computed(() => e.disableHoverableContent),
      contentId: te()
    }), (l, r) => (openBlock(), createBlock(unref(ce), null, {
      default: withCtx(() => [
        renderSlot(l.$slots, "default")
      ]),
      _: 3
    }));
  }
});
var ni = defineComponent({
  __name: "TooltipTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(o) {
    const t = o, e = inject(Ca), { primitiveElement: a, currentElement: s } = x();
    return Vn(s, {
      delayEnter: e == null ? void 0 : e.delayMs,
      onHoverEnter: () => e == null ? void 0 : e.showTooltip(true),
      delayLeave: 0,
      onHoverLeave: () => e == null ? void 0 : e.hideTooltip(),
      disabled: e == null ? void 0 : e.disableHoverableContent
    }), (n, l) => (openBlock(), createBlock(unref(Pe), { asChild: "" }, {
      default: withCtx(() => {
        var r, i, d, c;
        return [
          createVNode(unref(A), {
            type: n.as === "button" ? "button" : void 0,
            ref_key: "primitiveElement",
            ref: a,
            "aria-describedby": (r = unref(e)) != null && r.open ? unref(e).contentId : void 0,
            as: n.as,
            "as-child": t.asChild,
            "data-state": (i = unref(e)) == null ? void 0 : i.dataState.value,
            "aria-expanded": ((d = unref(e)) == null ? void 0 : d.open.value) || false,
            onFocus: l[0] || (l[0] = (p) => {
              var f;
              return (f = unref(e)) == null ? void 0 : f.showTooltip(false);
            }),
            onBlur: (c = unref(e)) == null ? void 0 : c.hideTooltip
          }, {
            default: withCtx(() => [
              renderSlot(n.$slots, "default")
            ]),
            _: 3
          }, 8, ["type", "aria-describedby", "as", "as-child", "data-state", "aria-expanded", "onBlur"])
        ];
      }),
      _: 3
    }));
  }
});
var Ho = defineComponent({
  __name: "VisuallyHidden",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(o) {
    return (t, e) => (openBlock(), createBlock(unref(A), {
      as: t.as,
      "as-child": t.asChild,
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
        renderSlot(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "style"]));
  }
});
var si = defineComponent({
  __name: "TooltipContent",
  props: {
    ariaLabel: {},
    asChild: { type: Boolean, default: false },
    as: {},
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
  setup(o, { emit: t }) {
    const e = o, a = ref(), s = inject(Ca);
    ze(a, () => {
      t("pointerDownOutside", new Event("pointerdown"));
    });
    function n(r) {
      t("escapeKeyDown", r);
    }
    const l = computed(() => {
      var c, p;
      if (e.ariaLabel)
        return e.ariaLabel;
      const r = (p = (c = useSlots()).default) == null ? void 0 : p.call(c);
      let i = "";
      function d(f) {
        typeof f.children == "string" ? i += f.children : Array.isArray(f.children) && f.children.forEach((m) => d(m));
      }
      return r == null || r.forEach((f) => d(f)), i;
    });
    return (r, i) => {
      var d;
      return (d = unref(s)) != null && d.open.value ? (openBlock(), createBlock(unref(Ae), {
        key: 0,
        ref_key: "contentElement",
        ref: a,
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
        onKeydown: i[0] || (i[0] = withKeys((c) => n(c), ["esc"]))
      }, {
        default: withCtx(() => {
          var c, p;
          return [
            createVNode(unref(A), {
              "data-state": (c = unref(s)) == null ? void 0 : c.dataState.value,
              "data-side": e.side,
              "data-align": e.align,
              "as-child": e.asChild,
              as: r.as,
              role: "tooltip",
              tabindex: "-1"
            }, {
              default: withCtx(() => [
                renderSlot(r.$slots, "default")
              ]),
              _: 3
            }, 8, ["data-state", "data-side", "data-align", "as-child", "as"]),
            createVNode(unref(Ho), {
              id: (p = unref(s)) == null ? void 0 : p.contentId,
              role: "tooltip"
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(l.value), 1)
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
var li = defineComponent({
  __name: "TooltipArrow",
  props: {
    width: { default: 10 },
    height: { default: 5 },
    asChild: { type: Boolean, default: false },
    as: {}
  },
  setup(o) {
    const t = o;
    return (e, a) => (openBlock(), createBlock(unref(Ye), {
      "as-child": t.asChild,
      as: e.as,
      height: t.height,
      width: t.width
    }, null, 8, ["as-child", "as", "height", "width"]));
  }
});
var $a = Symbol();
var ri = defineComponent({
  __name: "HoverCardRoot",
  props: {
    defaultOpen: { type: Boolean, default: false },
    open: { type: Boolean, default: void 0 },
    openDelay: { default: 700 },
    closeDelay: { default: 300 }
  },
  emits: ["update:open"],
  setup(o, { emit: t }) {
    const e = o, a = U(e, "open", t, {
      defaultValue: e.defaultOpen,
      passive: true
    });
    return provide($a, {
      open: a,
      showTooltip: () => {
        a.value = true;
      },
      hideTooltip: () => {
        a.value = false;
      },
      openDelay: e.openDelay,
      closeDelay: e.closeDelay,
      isHover: false
    }), (s, n) => (openBlock(), createBlock(unref(ce), null, {
      default: withCtx(() => [
        renderSlot(s.$slots, "default")
      ]),
      _: 3
    }));
  }
});
var ii = defineComponent({
  __name: "HoverCardTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(o) {
    const t = o, e = inject($a), { primitiveElement: a, currentElement: s } = x();
    async function n(r) {
      await Zn(
        r,
        s.value,
        e == null ? void 0 : e.openDelay
      ) && (e == null || e.showTooltip());
    }
    async function l(r) {
      e.isHover = false, await yo(r, e == null ? void 0 : e.closeDelay) && !(e != null && e.isHover) && (e == null || e.hideTooltip());
    }
    return (r, i) => (openBlock(), createBlock(unref(Pe), { asChild: "" }, {
      default: withCtx(() => {
        var d, c;
        return [
          createVNode(unref(A), {
            ref_key: "primitiveElement",
            ref: a,
            "as-child": t.asChild,
            as: r.as,
            "aria-expanded": ((d = unref(e)) == null ? void 0 : d.open.value) || false,
            "data-state": (c = unref(e)) != null && c.open.value ? "open" : "closed",
            onMouseover: i[0] || (i[0] = (p) => unref(e).isHover = true),
            onMouseenter: n,
            onMouseleave: l,
            style: { cursor: "default" }
          }, {
            default: withCtx(() => [
              renderSlot(r.$slots, "default")
            ]),
            _: 3
          }, 8, ["as-child", "as", "aria-expanded", "data-state"])
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
  setup(o) {
    const t = o;
    return (e, a) => (openBlock(), createBlock(ht, normalizeProps(guardReactiveProps(t)), {
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
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o, e = inject($a);
    async function a(s) {
      e.isHover = false, await yo(s, e == null ? void 0 : e.closeDelay) && !(e != null && e.isHover) && (e == null || e.hideTooltip());
    }
    return (s, n) => {
      var l, r;
      return (l = unref(e)) != null && l.open.value ? (openBlock(), createBlock(unref(Ae), mergeProps({ key: 0 }, t, {
        onMouseover: n[0] || (n[0] = (i) => unref(e).isHover = true),
        onMouseleave: a,
        "data-state": (r = unref(e)) != null && r.open.value ? "open" : "closed",
        "data-side": t.side,
        "data-align": t.align
      }), {
        default: withCtx(() => [
          renderSlot(s.$slots, "default")
        ]),
        _: 3
      }, 16, ["data-state", "data-side", "data-align"])) : createCommentVNode("", true);
    };
  }
});
var ci = defineComponent({
  __name: "HoverCardArrow",
  setup(o) {
    return (t, e) => (openBlock(), createBlock(unref(Ye)));
  }
});
var zt = Symbol();
var pi = defineComponent({
  __name: "PopoverRoot",
  props: {
    defaultOpen: { type: Boolean, default: false },
    open: { type: Boolean, default: void 0 },
    modal: { type: Boolean, default: false }
  },
  emits: ["update:open"],
  setup(o, { emit: t }) {
    const e = o, a = U(e, "open", t, {
      defaultValue: e.defaultOpen,
      passive: true
    }), s = ref();
    return provide(zt, {
      open: a,
      showPopover: () => {
        a.value = true;
      },
      hidePopover: () => {
        a.value = false;
      },
      triggerElement: s
    }), (n, l) => (openBlock(), createBlock(unref(ce), null, {
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
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(o) {
    const t = o, e = inject(zt), { primitiveElement: a, currentElement: s } = x();
    onMounted(() => {
      e.triggerElement.value = s.value;
    });
    function n() {
      e != null && e.open.value ? e == null || e.hidePopover() : e == null || e.showPopover();
    }
    return (l, r) => (openBlock(), createBlock(unref(Pe), { asChild: "" }, {
      default: withCtx(() => {
        var i, d;
        return [
          createVNode(unref(A), {
            as: l.as,
            type: l.as === "button" ? "button" : void 0,
            ref_key: "primitiveElement",
            ref: a,
            "aria-expanded": ((i = unref(e)) == null ? void 0 : i.open.value) || false,
            "data-state": (d = unref(e)) != null && d.open.value ? "open" : "closed",
            "as-child": t.asChild,
            onClick: n
          }, {
            default: withCtx(() => [
              renderSlot(l.$slots, "default")
            ]),
            _: 3
          }, 8, ["as", "type", "aria-expanded", "data-state", "as-child"])
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
  setup(o) {
    const t = o;
    return (e, a) => (openBlock(), createBlock(ht, normalizeProps(guardReactiveProps(t)), {
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
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o, e = inject(zt), { primitiveElement: a, currentElement: s } = x();
    watchEffect(() => {
      s.value && (e != null && e.open.value ? (ca(s.value), window.addEventListener("keydown", n)) : e != null && e.triggerElement.value && (e == null || e.triggerElement.value.focus(), l()));
    }), ze(s, (r) => {
      e == null || e.hidePopover(), r.preventDefault(), r.stopPropagation();
    });
    function n(r) {
      r.key === "Escape" && (e == null || e.hidePopover());
    }
    function l() {
      window.removeEventListener("keydown", n);
    }
    return onUnmounted(() => {
      l();
    }), (r, i) => {
      var d;
      return (d = unref(e)) != null && d.open.value ? (openBlock(), createBlock(unref(Ae), mergeProps({
        key: 0,
        ref_key: "primitiveElement",
        ref: a
      }, t), {
        default: withCtx(() => {
          var c, p;
          return [
            (c = unref(e)) != null && c.open.value ? (openBlock(), createBlock(unref(A), {
              key: 0,
              "data-state": (p = unref(e)) != null && p.open.value ? "open" : "closed",
              "data-side": t.side,
              "data-align": t.align,
              role: "tooltip",
              "as-child": t.asChild,
              as: r.as
            }, {
              default: withCtx(() => [
                renderSlot(r.$slots, "default")
              ]),
              _: 3
            }, 8, ["data-state", "data-side", "data-align", "as-child", "as"])) : createCommentVNode("", true)
          ];
        }),
        _: 3
      }, 16)) : createCommentVNode("", true);
    };
  }
});
var hi = defineComponent({
  __name: "PopoverArrow",
  setup(o) {
    return (t, e) => (openBlock(), createBlock(unref(Ye)));
  }
});
var yi = defineComponent({
  __name: "PopoverClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(o) {
    const t = o, e = inject(zt);
    return (a, s) => {
      var n, l, r;
      return openBlock(), createBlock(unref(A), {
        type: a.as === "button" ? "button" : void 0,
        as: a.as,
        "aria-expanded": ((n = unref(e)) == null ? void 0 : n.open.value) || false,
        "data-state": (l = unref(e)) != null && l.open.value ? "open" : "closed",
        "as-child": t.asChild,
        onClick: (r = unref(e)) == null ? void 0 : r.hidePopover
      }, {
        default: withCtx(() => [
          renderSlot(a.$slots, "default")
        ]),
        _: 3
      }, 8, ["type", "as", "aria-expanded", "data-state", "as-child", "onClick"]);
    };
  }
});
var zo = defineComponent({
  __name: "MenuAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o;
    return (e, a) => (openBlock(), createBlock(unref(Pe), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Zs = defineComponent({
  __name: "MenuArrow",
  props: {
    width: {},
    height: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o;
    return (e, a) => (openBlock(), createBlock(unref(Ye), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Vs = "menu.itemSelect";
var na = ["Enter", " "];
var js = ["ArrowDown", "PageUp", "Home"];
var Wo = ["ArrowUp", "PageDown", "End"];
var el = [...js, ...Wo];
var tl = {
  ltr: [...na, "ArrowRight"],
  rtl: [...na, "ArrowLeft"]
};
var al = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
};
function Yo(o) {
  return o ? "open" : "closed";
}
function Tt(o) {
  return o === "indeterminate";
}
function Sa(o) {
  return Tt(o) ? "indeterminate" : o ? "checked" : "unchecked";
}
function ol(o) {
  const t = document.activeElement;
  for (const e of o)
    if (e === t || (e.focus(), document.activeElement !== t))
      return;
}
function nl(o, t) {
  return o.map((e, a) => o[(t + a) % o.length]);
}
function sl(o, t, e) {
  const s = t.length > 1 && Array.from(t).every((d) => d === t[0]) ? t[0] : t, n = e ? o.indexOf(e) : -1;
  let l = nl(o, Math.max(n, 0));
  s.length === 1 && (l = l.filter((d) => d !== e));
  const i = l.find(
    (d) => d.toLowerCase().startsWith(s.toLowerCase())
  );
  return i !== e ? i : void 0;
}
function ll(o, t) {
  const { x: e, y: a } = o;
  let s = false;
  for (let n = 0, l = t.length - 1; n < t.length; l = n++) {
    const r = t[n].x, i = t[n].y, d = t[l].x, c = t[l].y;
    i > a != c > a && e < (d - r) * (a - i) / (c - i) + r && (s = !s);
  }
  return s;
}
function rl(o, t) {
  if (!t)
    return false;
  const e = { x: o.clientX, y: o.clientY };
  return ll(e, t);
}
function st(o) {
  return o.pointerType === "mouse";
}
var Jt = "focusScope.autoFocusOnMount";
var Qt = "focusScope.autoFocusOnUnmount";
var oo = { bubbles: false, cancelable: true };
function il(o, { select: t = false } = {}) {
  const e = document.activeElement;
  for (const a of o)
    if (Te(a, { select: t }), document.activeElement !== e)
      return;
}
function ul(o) {
  const t = Uo(o), e = no(t, o), a = no(t.reverse(), o);
  return [e, a];
}
function Uo(o) {
  const t = [], e = document.createTreeWalker(o, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (a) => {
      const s = a.tagName === "INPUT" && a.type === "hidden";
      return a.disabled || a.hidden || s ? NodeFilter.FILTER_SKIP : a.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; e.nextNode(); )
    t.push(e.currentNode);
  return t;
}
function no(o, t) {
  for (const e of o)
    if (!dl(e, { upTo: t }))
      return e;
}
function dl(o, { upTo: t }) {
  if (getComputedStyle(o).visibility === "hidden")
    return true;
  for (; o; ) {
    if (t !== void 0 && o === t)
      return false;
    if (getComputedStyle(o).display === "none")
      return true;
    o = o.parentElement;
  }
  return false;
}
function cl(o) {
  return o instanceof HTMLInputElement && "select" in o;
}
function Te(o, { select: t = false } = {}) {
  if (o && o.focus) {
    const e = document.activeElement;
    o.focus({ preventScroll: true }), o !== e && cl(o) && t && o.select();
  }
}
var pl = ia(() => ref([]));
function fl() {
  const o = pl();
  return {
    add(t) {
      const e = o.value[0];
      t !== e && (e == null || e.pause()), o.value = so(o.value, t), o.value.unshift(t);
    },
    remove(t) {
      var e;
      o.value = so(o.value, t), (e = o.value[0]) == null || e.resume();
    }
  };
}
function so(o, t) {
  const e = [...o], a = e.indexOf(t);
  return a !== -1 && e.splice(a, 1), e;
}
function ml(o) {
  return o.filter((t) => t.tagName !== "A");
}
var vl = defineComponent({
  __name: "FocusScope",
  props: {
    loop: { type: Boolean, default: false },
    trapped: { type: Boolean, default: false },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["mountAutoFocus", "unmountAutoFocus"],
  setup(o, { emit: t }) {
    const e = o, { primitiveElement: a, currentElement: s } = x(), n = ref(null), l = fl(), r = reactive({
      paused: false,
      pause() {
        this.paused = true;
      },
      resume() {
        this.paused = false;
      }
    });
    watchEffect((d) => {
      const c = s.value;
      if (!e.trapped)
        return;
      function p(g) {
        if (r.paused || !c)
          return;
        const h2 = g.target;
        c.contains(h2) ? n.value = h2 : Te(n.value, { select: true });
      }
      function f(g) {
        if (r.paused || !c)
          return;
        const h2 = g.relatedTarget;
        h2 !== null && (c.contains(h2) || Te(n.value, { select: true }));
      }
      function m(g) {
        if (document.activeElement === document.body)
          for (const C of g)
            C.removedNodes.length > 0 && Te(c);
      }
      document.addEventListener("focusin", p), document.addEventListener("focusout", f);
      const v = new MutationObserver(m);
      c && v.observe(c, { childList: true, subtree: true }), d(() => {
        document.removeEventListener("focusin", p), document.removeEventListener("focusout", f), v.disconnect();
      });
    }), watchEffect(async (d) => {
      const c = s.value;
      if (await nextTick(), !c)
        return;
      l.add(r);
      const p = document.activeElement;
      if (!c.contains(p)) {
        const m = new CustomEvent(Jt, oo);
        c.addEventListener(
          Jt,
          (v) => t("mountAutoFocus", v)
        ), c.dispatchEvent(m), m.defaultPrevented || (il(ml(Uo(c)), {
          select: true
        }), document.activeElement === p && Te(c));
      }
      d(() => {
        c.removeEventListener(
          Jt,
          (g) => t("mountAutoFocus", g)
        );
        const m = new CustomEvent(Qt, oo), v = (g) => {
          t("unmountAutoFocus", g);
        };
        c.addEventListener(Qt, v), c.dispatchEvent(m), setTimeout(() => {
          m.defaultPrevented || Te(p ?? document.body, { select: true }), c.removeEventListener(Qt, v), l.remove(r);
        }, 0);
      });
    });
    const i = (d) => {
      if (!e.loop && !e.trapped || r.paused)
        return;
      const c = d.key === "Tab" && !d.altKey && !d.ctrlKey && !d.metaKey, p = document.activeElement;
      if (c && p) {
        const f = d.currentTarget, [m, v] = ul(f);
        m && v ? !d.shiftKey && p === v ? (d.preventDefault(), e.loop && Te(m, { select: true })) : d.shiftKey && p === m && (d.preventDefault(), e.loop && Te(v, { select: true })) : p === f && d.preventDefault();
      }
    };
    return (d, c) => (openBlock(), createBlock(unref(A), {
      ref_key: "primitiveElement",
      ref: a,
      tabIndex: "-1",
      onKeydown: i,
      asChild: e.asChild,
      as: e.as
    }, {
      default: withCtx(() => [
        renderSlot(d.$slots, "default")
      ]),
      _: 3
    }, 8, ["asChild", "as"]));
  }
});
var hl = "dismissableLayer.pointerDownOutside";
var yl = "dismissableLayer.focusOutside";
function Go(o, t) {
  const e = t.closest(
    "[data-dismissable-layer]"
  ), a = o.querySelector(
    "[data-dismissable-layer]"
  );
  if (!a)
    return false;
  const s = Array.from(
    o.ownerDocument.querySelectorAll("[data-dismissable-layer]")
  );
  return a === e || s.indexOf(a) < s.indexOf(e);
}
function gl(o, t) {
  var n;
  const e = ((n = t == null ? void 0 : t.value) == null ? void 0 : n.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), a = ref(false), s = ref(() => {
  });
  return watchEffect((l) => {
    const r = (d) => {
      if (t != null && t.value) {
        if (Go(t.value, d.target)) {
          a.value = false;
          return;
        }
        if (d.target && !a.value) {
          let c = function() {
            Xo(
              hl,
              o,
              p
            );
          };
          const p = { originalEvent: d };
          d.pointerType === "touch" ? (e.removeEventListener("click", s.value), s.value = c, e.addEventListener("click", s.value, {
            once: true
          })) : c();
        } else
          e.removeEventListener("click", s.value);
        a.value = false;
      }
    }, i = window.setTimeout(() => {
      e.addEventListener("pointerdown", r);
    }, 0);
    l(() => {
      window.clearTimeout(i), e.removeEventListener("pointerdown", r), e.removeEventListener("click", s.value);
    });
  }), {
    onPointerDownCapture: () => a.value = true
  };
}
function _l(o, t) {
  var s;
  const e = ((s = t == null ? void 0 : t.value) == null ? void 0 : s.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), a = ref(false);
  return watchEffect(async (n) => {
    const l = async (r) => {
      t != null && t.value && (Go(t.value, r.target) || r.target && !a.value && Xo(
        yl,
        o,
        { originalEvent: r }
      ));
    };
    e.addEventListener("focusin", l), n(() => e.removeEventListener("focusin", l));
  }), {
    onFocusCapture: () => a.value = true,
    onBlurCapture: () => a.value = false
  };
}
function Xo(o, t, e) {
  const a = e.originalEvent.target, s = new CustomEvent(o, {
    bubbles: false,
    cancelable: true,
    detail: e
  });
  t && a.addEventListener(o, t, { once: true }), a.dispatchEvent(s);
}
var qo = defineComponent({
  __name: "DismissableLayer",
  props: {
    disableOutsidePointerEvents: { type: Boolean, default: false },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss"],
  setup(o, { emit: t }) {
    const e = o, { primitiveElement: a, currentElement: s } = x(), n = computed(
      () => {
        var v;
        return ((v = s.value) == null ? void 0 : v.ownerDocument) ?? globalThis.document;
      }
    ), l = ref(/* @__PURE__ */ new Set()), r = ref(/* @__PURE__ */ new Set());
    provide("dismissable", {
      layers: l,
      layersWithOutsidePointerEventsDisabled: r
    });
    const i = inject("dismissable", {
      layers: l,
      layersWithOutsidePointerEventsDisabled: r
    });
    watch(
      () => i,
      () => {
        i != null && i.layers.value && (l.value = i.layers.value), i != null && i.layersWithOutsidePointerEventsDisabled.value && (r.value = i.layersWithOutsidePointerEventsDisabled.value);
      },
      { immediate: true, deep: true }
    );
    const d = computed(() => s.value ? Array.from(l.value).indexOf(s.value) : -1), c = computed(() => r.value.size > 0), p = computed(() => {
      const v = Array.from(l.value), [g] = [...r.value].slice(-1), h2 = v.indexOf(g);
      return d.value >= h2;
    }), f = gl(async (v) => {
      p.value && (t("pointerDownOutside", v), t("interactOutside", v), await nextTick(), v.defaultPrevented || t("dismiss"));
    }, s), m = _l((v) => {
      t("focusOutside", v), t("interactOutside", v), v.defaultPrevented || t("dismiss");
    }, s);
    return zn("Escape", (v) => {
      d.value === l.value.size - 1 && (t("escapeKeyDown", v), v.defaultPrevented || t("dismiss"));
    }), watchEffect((v) => {
      if (!s.value)
        return;
      let g;
      e.disableOutsidePointerEvents && (r.value.size === 0 && (g = n.value.body.style.pointerEvents, n.value.body.style.pointerEvents = "none"), r.value.add(s.value)), l.value.add(s.value), v(() => {
        (e.disableOutsidePointerEvents || r.value.size === 1) && (n.value.body.style.pointerEvents = g);
      });
    }), watchEffect((v) => {
      v(() => {
        s.value && (l.value.delete(s.value), r.value.delete(s.value));
      });
    }), (v, g) => (openBlock(), createBlock(unref(A), {
      ref_key: "primitiveElement",
      ref: a,
      "as-child": v.asChild,
      as: v.as,
      "data-dismissable-layer": "",
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
    }, 8, ["as-child", "as", "style", "onFocusCapture", "onBlurCapture", "onPointerdownCapture"]));
  }
});
var ve = Symbol();
var je = Symbol();
var bl = defineComponent({
  __name: "MenuRoot",
  props: {
    open: { type: Boolean, default: false },
    onOpenChange: {},
    dir: { default: "ltr" },
    modal: { type: Boolean, default: true }
  },
  emits: ["update:open"],
  setup(o, { emit: t }) {
    const e = o, { modal: a, dir: s } = toRefs(e), n = U(e, "open", t), l = ref(), r = ref(false);
    return watchEffect((i) => {
      if (!ct)
        return;
      const d = () => {
        r.value = true, document.addEventListener("pointerdown", c, {
          capture: true,
          once: true
        }), document.addEventListener("pointermove", c, {
          capture: true,
          once: true
        });
      }, c = () => r.value = false;
      document.addEventListener("keydown", d, { capture: true }), i(() => {
        document.removeEventListener("keydown", d, { capture: true }), document.removeEventListener("pointerdown", c, {
          capture: true
        }), document.removeEventListener("pointermove", c, {
          capture: true
        });
      });
    }), provide(ve, {
      open: n,
      onOpenChange: (i) => {
        n.value = i;
      },
      content: l,
      onContentChange: (i) => {
        l.value = i;
      }
    }), provide(je, {
      onClose: () => {
        n.value = false;
      },
      isUsingKeyboardRef: r,
      dir: s,
      modal: a
    }), (i, d) => (openBlock(), createBlock(unref(ce), null, {
      default: withCtx(() => [
        renderSlot(i.$slots, "default")
      ]),
      _: 3
    }));
  }
});
var Wt = Symbol();
var Oa = defineComponent({
  __name: "MenuContentImpl",
  props: mergeDefaults({
    loop: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    disableOutsideScroll: { type: Boolean },
    trapFocus: { type: Boolean },
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  }, {
    ...Ht
  }),
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss", "openAutoFocus", "closeAutoFocus"],
  setup(o, { emit: t }) {
    const e = o, a = inject(ve), s = inject(je), { trapFocus: n, disableOutsidePointerEvents: l, loop: r } = toRefs(e);
    jn(), fa(l.value);
    const i = ref(""), d = ref(0), c = ref(0), p = ref(null), f = ref("right"), m = ref(0), v = ref(null), { createCollection: g } = as(), { primitiveElement: h2, currentElement: C } = x(), $ = g(C);
    watch(C, (k) => {
      a.onContentChange(k);
    });
    const P = (k) => {
      var pe, fe;
      const M = i.value + k, L = $.value, W = document.activeElement, G = ((fe = (pe = L.find((he) => he === W)) == null ? void 0 : pe.textContent) == null ? void 0 : fe.trim()) ?? "", J = L.map((he) => {
        var re;
        return ((re = he.textContent) == null ? void 0 : re.trim()) ?? "";
      }), j = sl(J, M, G), V = L.find((he) => {
        var re;
        return ((re = he.textContent) == null ? void 0 : re.trim()) === j;
      });
      (function he(re) {
        i.value = re, window.clearTimeout(d.value), re !== "" && (d.value = window.setTimeout(() => he(""), 1e3));
      })(M), V && setTimeout(() => V.focus());
    };
    onUnmounted(() => {
      window.clearTimeout(d.value);
    });
    const B = (k) => {
      var L, W;
      return f.value === ((L = p.value) == null ? void 0 : L.side) && rl(k, (W = p.value) == null ? void 0 : W.area);
    }, R = async (k) => {
      var M, L, W;
      t("openAutoFocus", k), (M = C.value) == null || M.focus(), s != null && s.isUsingKeyboardRef.value && (await nextTick(), (W = (L = $.value) == null ? void 0 : L[0]) == null || W.focus(), k.preventDefault());
    }, K = (k) => {
      const L = k.target.closest("[data-radix-menu-content]") === k.currentTarget, W = k.ctrlKey || k.altKey || k.metaKey, G = k.key.length === 1, J = ae(
        k,
        document.activeElement,
        C.value,
        {
          loop: r.value,
          arrowKeyOptions: "vertical",
          dir: s == null ? void 0 : s.dir.value,
          focus: true
        }
      );
      if (J)
        return J == null ? void 0 : J.focus();
      if (k.code === "Space" || (L && (k.key === "Tab" && k.preventDefault(), !W && G && P(k.key)), k.target !== C.value) || !el.includes(k.key))
        return;
      k.preventDefault();
      const j = $.value;
      Wo.includes(k.key) && j.reverse(), ol(j);
    }, D = (k) => {
      var M, L;
      (L = (M = k == null ? void 0 : k.currentTarget) == null ? void 0 : M.contains) != null && L.call(M, k.target) || (window.clearTimeout(d.value), i.value = "");
    }, Q = (k) => {
      var W;
      if (!st(k))
        return;
      const M = k.target, L = m.value !== k.clientX;
      if ((W = k == null ? void 0 : k.currentTarget) != null && W.contains(M) && L) {
        const G = k.clientX > m.value ? "right" : "left";
        f.value = G, m.value = k.clientX;
      }
    };
    return provide(Wt, {
      onItemEnter: (k) => {
        B(k) && k.preventDefault();
      },
      onItemLeave: (k) => {
        var M;
        B(k) || ((M = C.value) == null || M.focus(), v.value = null);
      },
      onTriggerLeave: (k) => {
        B(k) && k.preventDefault();
      },
      searchRef: i,
      pointerGraceTimerRef: c,
      onPointerGraceIntentChange: (k) => {
        p.value = k;
      }
    }), (k, M) => (openBlock(), createBlock(unref(vl), {
      asChild: "",
      trapped: unref(n),
      onMountAutoFocus: R,
      onUnmountAutoFocus: M[5] || (M[5] = (L) => t("closeAutoFocus", L))
    }, {
      default: withCtx(() => [
        createVNode(unref(qo), {
          asChild: "",
          disableOutsidePointerEvents: unref(l),
          onEscapeKeyDown: M[0] || (M[0] = (L) => t("escapeKeyDown", L)),
          onPointerDownOutside: M[1] || (M[1] = (L) => t("pointerDownOutside", L)),
          onFocusOutside: M[2] || (M[2] = (L) => t("focusOutside", L)),
          onInteractOutside: M[3] || (M[3] = (L) => t("interactOutside", L)),
          onDismiss: M[4] || (M[4] = (L) => t("dismiss"))
        }, {
          default: withCtx(() => [
            createVNode(unref(Ae), {
              ref_key: "primitiveElement",
              ref: h2,
              role: "menu",
              as: k.as,
              "as-child": k.asChild,
              "aria-orientation": "vertical",
              "data-radix-menu-content": "",
              "data-state": unref(Yo)(unref(a).open.value),
              dir: unref(s).dir.value,
              onKeydown: K,
              onBlur: D,
              onPointermove: Q,
              side: k.side,
              sideOffset: k.sideOffset,
              align: k.align,
              alignOffset: k.alignOffset,
              avoidCollisions: k.avoidCollisions,
              collisionBoundary: k.collisionBoundary,
              collisionPadding: k.collisionPadding,
              arrowPadding: k.arrowPadding,
              sticky: k.sticky,
              hideWhenDetached: k.hideWhenDetached
            }, {
              default: withCtx(() => [
                renderSlot(k.$slots, "default")
              ]),
              _: 3
            }, 8, ["as", "as-child", "data-state", "dir", "side", "sideOffset", "align", "alignOffset", "avoidCollisions", "collisionBoundary", "collisionPadding", "arrowPadding", "sticky", "hideWhenDetached"])
          ]),
          _: 3
        }, 8, ["disableOutsidePointerEvents"])
      ]),
      _: 3
    }, 8, ["trapped"]));
  }
});
var Jo = defineComponent({
  __name: "MenuItemImpl",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(o, { expose: t }) {
    const e = o, { primitiveElement: a, currentElement: s } = x(), n = inject(Wt), l = ref(false), r = async (d) => {
      if (await nextTick(), !d.defaultPrevented && st(d)) {
        if (e.disabled)
          n.onItemLeave(d);
        else if (n.onItemEnter(d), !d.defaultPrevented) {
          const c = d.currentTarget;
          c && c.focus();
        }
      }
    }, i = async (d) => {
      await nextTick(), !d.defaultPrevented && st(d) && n.onItemLeave(d);
    };
    return t({
      el: s
    }), (d, c) => (openBlock(), createBlock(unref(A), {
      ref_key: "primitiveElement",
      ref: a,
      role: "menuitem",
      tabindex: "-1",
      "data-radix-vue-collection-item": "",
      "aria-disabled": d.disabled || void 0,
      "data-disabled": d.disabled ? "" : void 0,
      disabled: d.disabled,
      "data-highlighted": l.value ? "" : void 0,
      onPointermove: r,
      onPointerleave: i,
      onFocus: c[0] || (c[0] = async (p) => {
        await nextTick(), !(p.defaultPrevented || d.disabled) && (l.value = true);
      }),
      onBlur: c[1] || (c[1] = async (p) => {
        await nextTick(), !p.defaultPrevented && (l.value = false);
      })
    }, {
      default: withCtx(() => [
        renderSlot(d.$slots, "default")
      ]),
      _: 3
    }, 8, ["aria-disabled", "data-disabled", "disabled", "data-highlighted"]));
  }
});
var Pa = defineComponent({
  __name: "MenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(o, { emit: t }) {
    const e = o, { primitiveElement: a, currentElement: s } = x(), n = inject(je), l = inject(Wt), r = ref(false), i = async () => {
      const d = s.value;
      if (!e.disabled && d) {
        const c = new CustomEvent(Vs, {
          bubbles: true,
          cancelable: true
        });
        t("select", c), await nextTick(), c.defaultPrevented ? r.value = false : n.onClose();
      }
    };
    return (d, c) => (openBlock(), createBlock(Jo, {
      ref_key: "primitiveElement",
      ref: a,
      disabled: d.disabled,
      onClick: i,
      onPointerdown: c[0] || (c[0] = () => {
        r.value = true;
      }),
      onPointerup: c[1] || (c[1] = async (p) => {
        var f;
        await nextTick(), !p.defaultPrevented && (r.value || (f = p.currentTarget) == null || f.click());
      }),
      onKeydown: c[2] || (c[2] = async (p) => {
        const f = unref(l).searchRef.value !== "";
        d.disabled || f && p.key === " " || unref(na).includes(p.key) && (p.currentTarget.click(), p.preventDefault());
      })
    }, {
      default: withCtx(() => [
        renderSlot(d.$slots, "default")
      ]),
      _: 3
    }, 8, ["disabled"]));
  }
});
var Aa = Symbol();
var wl = defineComponent({
  __name: "MenuItemIndicator",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(o) {
    const t = inject(Aa, {
      checked: ref(false)
    });
    return (e, a) => {
      var s, n;
      return openBlock(), createBlock(unref(Ee), {
        present: unref(Tt)((s = unref(t)) == null ? void 0 : s.checked.value) || ((n = unref(t)) == null ? void 0 : n.checked.value) === true
      }, {
        default: withCtx(() => [
          createVNode(unref(A), {
            as: e.as,
            "as-child": e.asChild,
            "data-state": unref(Sa)(unref(t).checked.value)
          }, {
            default: withCtx(() => [
              renderSlot(e.$slots, "default")
            ]),
            _: 3
          }, 8, ["as", "as-child", "data-state"])
        ]),
        _: 3
      }, 8, ["present"]);
    };
  }
});
var El = defineComponent({
  __name: "MenuCheckboxItem",
  props: {
    checked: { type: [Boolean, String], default: false },
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select", "update:checked"],
  setup(o, { emit: t }) {
    const e = o, a = U(e, "checked", t);
    return provide(Aa, {
      checked: a
    }), (s, n) => (openBlock(), createBlock(Pa, mergeProps({ role: "menuitemcheckbox" }, e, {
      "aria-checked": unref(Tt)(unref(a)) ? "mixed" : unref(a),
      "data-state": unref(Sa)(unref(a)),
      onSelect: n[0] || (n[0] = async (l) => {
        t("select", l), unref(Tt)(unref(a)) ? a.value = true : a.value = !unref(a);
      })
    }), {
      default: withCtx(() => [
        renderSlot(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-checked", "data-state"]));
  }
});
var Cl = defineComponent({
  __name: "MenuRootContentModal",
  props: {
    loop: { type: Boolean },
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss", "openAutoFocus", "closeAutoFocus"],
  setup(o, { emit: t }) {
    const e = o, a = inject(ve), s = Ie(t);
    return (n, l) => {
      var r, i;
      return openBlock(), createBlock(Oa, mergeProps({ ...e, ...unref(s) }, {
        "trap-focus": (r = unref(a)) == null ? void 0 : r.open.value,
        "disable-outside-pointer-events": (i = unref(a)) == null ? void 0 : i.open.value,
        "disable-outside-scroll": true,
        onDismiss: l[0] || (l[0] = (d) => {
          var c;
          return (c = unref(a)) == null ? void 0 : c.onOpenChange(false);
        }),
        onFocusOutside: l[1] || (l[1] = withModifiers((d) => t("focusOutside", d), ["prevent"]))
      }), {
        default: withCtx(() => [
          renderSlot(n.$slots, "default")
        ]),
        _: 3
      }, 16, ["trap-focus", "disable-outside-pointer-events"]);
    };
  }
});
var $l = defineComponent({
  __name: "MenuRootContentNonModal",
  props: {
    loop: { type: Boolean },
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss", "openAutoFocus", "closeAutoFocus"],
  setup(o, { emit: t }) {
    const e = o, a = inject(ve), s = Ie(t);
    return (n, l) => (openBlock(), createBlock(Oa, mergeProps({ ...e, ...unref(s) }, {
      "trap-focus": false,
      "disable-outside-pointer-events": false,
      "disable-outside-scroll": false,
      onDismiss: l[0] || (l[0] = (r) => {
        var i;
        return (i = unref(a)) == null ? void 0 : i.onOpenChange(false);
      })
    }), {
      default: withCtx(() => [
        renderSlot(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Sl = defineComponent({
  __name: "MenuContent",
  props: {
    loop: { type: Boolean },
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss", "openAutoFocus", "closeAutoFocus"],
  setup(o, { emit: t }) {
    const e = o, a = inject(ve), s = inject(je), n = Ie(t);
    return (l, r) => (openBlock(), createBlock(unref(Ee), {
      present: unref(a).open.value
    }, {
      default: withCtx(() => {
        var i;
        return [
          (i = unref(s)) != null && i.modal.value ? (openBlock(), createBlock(Cl, normalizeProps(mergeProps({ key: 0 }, { ...l.$attrs, ...e, ...unref(n) })), {
            default: withCtx(() => [
              renderSlot(l.$slots, "default")
            ]),
            _: 3
          }, 16)) : (openBlock(), createBlock($l, normalizeProps(mergeProps({ key: 1 }, { ...l.$attrs, ...e, ...unref(n) })), {
            default: withCtx(() => [
              renderSlot(l.$slots, "default")
            ]),
            _: 3
          }, 16))
        ];
      }),
      _: 3
    }, 8, ["present"]));
  }
});
var Qo = defineComponent({
  __name: "MenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o;
    return (e, a) => (openBlock(), createBlock(unref(A), mergeProps({ role: "group" }, t), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Ol = defineComponent({
  __name: "MenuLabel",
  props: {
    asChild: { type: Boolean },
    as: { default: "label" }
  },
  setup(o) {
    const t = o;
    return (e, a) => (openBlock(), createBlock(unref(A), mergeProps({ role: "group" }, t), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Pl = defineComponent({
  __name: "MenuPortal",
  props: {
    to: { default: "body" },
    disabled: { type: Boolean }
  },
  setup(o) {
    const t = o, e = inject(ve);
    return (a, s) => (openBlock(), createBlock(unref(Ee), {
      present: unref(e).open.value
    }, {
      default: withCtx(() => [
        (openBlock(), createBlock(Teleport, normalizeProps(guardReactiveProps(t)), [
          renderSlot(a.$slots, "default")
        ], 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
});
var Zo = Symbol();
var Al = defineComponent({
  __name: "MenuRadioGroup",
  props: {
    modelValue: { default: "" },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(o, { emit: t }) {
    const e = o, a = U(e, "modelValue", t);
    return provide(Zo, {
      modelValue: a,
      onValueChange: (s) => {
        a.value = s;
      }
    }), (s, n) => (openBlock(), createBlock(Qo, normalizeProps(guardReactiveProps(e)), {
      default: withCtx(() => [
        renderSlot(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Bl = defineComponent({
  __name: "MenuRadioItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(o, { emit: t }) {
    const e = o, { value: a } = toRefs(e), s = inject(Zo), n = computed(
      () => (s == null ? void 0 : s.modelValue.value) === (a == null ? void 0 : a.value)
    );
    return provide(Aa, {
      checked: n
    }), (l, r) => (openBlock(), createBlock(Pa, mergeProps({ role: "menuitemradio" }, e, {
      "aria-checked": n.value,
      "data-state": unref(Sa)(n.value),
      onSelect: r[0] || (r[0] = async (i) => {
        var d;
        t("select", i), (d = unref(s)) == null || d.onValueChange(unref(a));
      })
    }), {
      default: withCtx(() => [
        renderSlot(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-checked", "data-state"]));
  }
});
var Tl = defineComponent({
  __name: "MenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o;
    return (e, a) => (openBlock(), createBlock(unref(A), mergeProps(t, {
      role: "separator",
      "aria-orientation": "horizontal"
    }), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Ba = Symbol();
var kl = defineComponent({
  __name: "MenuSub",
  props: {
    open: { type: Boolean }
  },
  emits: ["update:open"],
  setup(o, { emit: t }) {
    const a = U(o, "open", t, {
      defaultValue: false,
      passive: true
    }), s = inject(ve), n = ref(), l = ref();
    return watchEffect((r) => {
      (s == null ? void 0 : s.open.value) === false && (a.value = false), r(() => a.value = false);
    }), provide(ve, {
      open: a,
      onOpenChange: (r) => {
        a.value = r;
      },
      content: l,
      onContentChange: (r) => {
        l.value = r;
      }
    }), provide(Ba, {
      triggerId: te(),
      contentId: te(),
      trigger: n,
      onTriggerChange: (r) => {
        n.value = r;
      }
    }), (r, i) => (openBlock(), createBlock(unref(ce), null, {
      default: withCtx(() => [
        renderSlot(r.$slots, "default")
      ]),
      _: 3
    }));
  }
});
var Dl = defineComponent({
  __name: "MenuSubContent",
  props: {
    loop: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    disableOutsideScroll: { type: Boolean },
    trapFocus: { type: Boolean },
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss", "openAutoFocus", "closeAutoFocus"],
  setup(o, { emit: t }) {
    const e = o, a = Ie(t), s = inject(ve), n = inject(je), l = inject(Ba), { primitiveElement: r, currentElement: i } = x();
    return (d, c) => (openBlock(), createBlock(unref(Ee), {
      present: unref(s).open.value
    }, {
      default: withCtx(() => [
        createVNode(Oa, mergeProps({
          ref_key: "primitiveElement",
          ref: r
        }, { ...e, ...unref(a) }, {
          id: unref(l).contentId,
          "aria-labelledby": unref(l).triggerId,
          align: "start",
          side: unref(n).dir.value === "rtl" ? "left" : "right",
          disableOutsidePointerEvents: false,
          disableOutsideScroll: false,
          trapFocus: false,
          onOpenAutoFocus: c[0] || (c[0] = (p) => {
            var f;
            unref(n).isUsingKeyboardRef.value && ((f = unref(i)) == null || f.focus()), p.preventDefault();
          }),
          onCloseAutoFocus: c[1] || (c[1] = withModifiers(() => {
          }, ["prevent"])),
          onFocusOutside: c[2] || (c[2] = async (p) => {
            p.defaultPrevented || p.target !== unref(l).trigger.value && unref(s).onOpenChange(false);
          }),
          onEscapeKeyDown: c[3] || (c[3] = (p) => {
            var f;
            (f = unref(n)) == null || f.onClose(), p.preventDefault();
          }),
          onKeydown: c[4] || (c[4] = (p) => {
            var v, g;
            const f = (v = p.currentTarget) == null ? void 0 : v.contains(p.target), m = unref(al)[unref(n).dir.value].includes(p.key);
            f && m && (unref(s).onOpenChange(false), (g = unref(l).trigger.value) == null || g.focus(), p.preventDefault());
          })
        }), {
          default: withCtx(() => [
            renderSlot(d.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "aria-labelledby", "side"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
});
var Ml = defineComponent({
  __name: "MenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o, e = inject(ve), a = inject(je), s = inject(Ba), n = inject(Wt), l = ref(null), r = computed(
      () => n == null ? void 0 : n.pointerGraceTimerRef.value
    ), i = () => {
      l.value && window.clearTimeout(l.value), l.value = null;
    };
    onUnmounted(() => {
      i();
    });
    const d = (f) => {
      st(f) && (n.onItemEnter(f), e.onOpenChange(true), !f.defaultPrevented && !t.disabled && !(e != null && e.open.value) && !l.value && (n.onPointerGraceIntentChange(null), l.value = window.setTimeout(() => {
        i();
      }, 100)));
    }, c = (f) => {
      var v, g;
      if (!st(f))
        return;
      i();
      const m = (v = e.content.value) == null ? void 0 : v.getBoundingClientRect();
      if (m) {
        const h2 = (g = e.content.value) == null ? void 0 : g.dataset.side, C = h2 === "right", $ = C ? -5 : 5, P = m[C ? "left" : "right"], B = m[C ? "right" : "left"];
        n.onPointerGraceIntentChange({
          area: [
            // Apply a bleed on clientX to ensure that our exit point is
            // consistently within polygon bounds
            { x: f.clientX + $, y: f.clientY },
            { x: P, y: m.top },
            { x: B, y: m.top },
            { x: B, y: m.bottom },
            { x: P, y: m.bottom }
          ],
          side: h2
        }), window.clearTimeout(r.value), n.pointerGraceTimerRef.value = window.setTimeout(
          () => n.onPointerGraceIntentChange(null),
          300
        );
      } else {
        if (n.onTriggerLeave(f), f.defaultPrevented)
          return;
        n.onPointerGraceIntentChange(null);
      }
    }, p = async (f) => {
      var v;
      const m = n.searchRef.value !== "";
      t.disabled || m && f.key === " " || tl[a.dir.value].includes(f.key) && (e.onOpenChange(true), await nextTick(), (v = e.content.value) == null || v.focus(), f.preventDefault());
    };
    return (f, m) => (openBlock(), createBlock(zo, { asChild: "" }, {
      default: withCtx(() => {
        var v;
        return [
          createVNode(Jo, {
            id: unref(s).triggerId,
            "aria-haspopup": "menu",
            "aria-expanded": unref(e).open.value,
            "aria-controls": (v = unref(s)) == null ? void 0 : v.contentId,
            "data-state": unref(Yo)(unref(e).open.value),
            ref: (g) => {
              var h2;
              (h2 = unref(s)) == null || h2.onTriggerChange(g == null ? void 0 : g.el);
            },
            onClick: m[0] || (m[0] = async (g) => {
              t.disabled || g.defaultPrevented || (g.currentTarget.focus(), unref(e).open.value || unref(e).onOpenChange(true));
            }),
            onPointermove: d,
            onPointerleave: c,
            onKeydown: p
          }, {
            default: withCtx(() => [
              renderSlot(f.$slots, "default")
            ]),
            _: 3
          }, 8, ["id", "aria-expanded", "aria-controls", "data-state"])
        ];
      }),
      _: 3
    }));
  }
});
var Ta = Symbol();
var gi = defineComponent({
  __name: "DropdownMenuRoot",
  props: {
    open: { type: Boolean, default: void 0 },
    defaultOpen: { type: Boolean },
    dir: { default: "ltr" },
    modal: { type: Boolean, default: true }
  },
  emits: ["update:open"],
  setup(o, { emit: t }) {
    const e = o, a = U(e, "open", t, {
      defaultValue: e.defaultOpen,
      passive: true
    }), s = ref(), { modal: n, dir: l } = toRefs(e);
    return provide(Ta, {
      open: a,
      onOpenChange: (r) => {
        a.value = r;
      },
      onOpenToggle: () => {
        a.value = !a.value;
      },
      triggerId: te(),
      triggerElement: s,
      contentId: te(),
      modal: n,
      dir: l
    }), (r, i) => (openBlock(), createBlock(unref(bl), {
      open: unref(a),
      "onUpdate:open": i[0] || (i[0] = (d) => isRef(a) ? a.value = d : null),
      dir: unref(l),
      modal: unref(n)
    }, {
      default: withCtx(() => [
        renderSlot(r.$slots, "default")
      ]),
      _: 3
    }, 8, ["open", "dir", "modal"]));
  }
});
var _i = defineComponent({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(o) {
    const t = o, e = inject(Ta), { primitiveElement: a, currentElement: s } = x();
    return onMounted(() => {
      e.triggerElement = s;
    }), (n, l) => (openBlock(), createBlock(unref(zo), { asChild: "" }, {
      default: withCtx(() => {
        var r, i, d, c, p;
        return [
          createVNode(unref(A), {
            ref_key: "primitiveElement",
            ref: a,
            id: (r = unref(e)) == null ? void 0 : r.triggerId,
            type: n.as === "button" ? "button" : void 0,
            "as-child": t.asChild,
            as: n.as,
            "aria-haspopup": "menu",
            "aria-expanded": (i = unref(e)) == null ? void 0 : i.open.value,
            "aria-controls": (d = unref(e)) != null && d.open.value ? (c = unref(e)) == null ? void 0 : c.contentId : void 0,
            "data-disabled": n.disabled ? "" : void 0,
            disabled: n.disabled,
            "data-state": (p = unref(e)) != null && p.open.value ? "open" : "closed",
            onPointerdown: l[0] || (l[0] = (f) => {
              var m, v;
              !n.disabled && f.button === 0 && f.ctrlKey === false && ((m = unref(e)) == null || m.onOpenToggle(), (v = unref(e)) != null && v.open.value && f.preventDefault());
            }),
            onKeydown: l[1] || (l[1] = withKeys(
              (f) => {
                var m, v;
                n.disabled || (["Enter", " "].includes(f.key) && ((m = unref(e)) == null || m.onOpenToggle()), f.key === "ArrowDown" && ((v = unref(e)) == null || v.onOpenChange(true)), ["Enter", " ", "ArrowDown"].includes(f.key) && f.preventDefault());
              },
              ["enter", "space", "arrow-down"]
            ))
          }, {
            default: withCtx(() => [
              renderSlot(n.$slots, "default")
            ]),
            _: 3
          }, 8, ["id", "type", "as-child", "as", "aria-expanded", "aria-controls", "data-disabled", "disabled", "data-state"])
        ];
      }),
      _: 3
    }));
  }
});
var bi = defineComponent({
  __name: "DropdownMenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean }
  },
  setup(o) {
    const t = o;
    return (e, a) => (openBlock(), createBlock(unref(Pl), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var wi = defineComponent({
  __name: "DropdownMenuContent",
  props: mergeDefaults({
    loop: { type: Boolean },
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  }, {
    ...Ht
  }),
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss", "openAutoFocus", "closeAutoFocus"],
  setup(o, { emit: t }) {
    const e = o, a = inject(Ta), s = ref(false), n = Ie(t), l = (r) => {
      t("closeAutoFocus", r), !r.defaultPrevented && (s.value || setTimeout(() => {
        var i;
        (i = a == null ? void 0 : a.triggerElement.value) == null || i.focus();
      }, 0), s.value = false, r.preventDefault());
    };
    return (r, i) => {
      var d, c;
      return openBlock(), createBlock(unref(Sl), mergeProps({ ...e, ...unref(n) }, {
        id: (d = unref(a)) == null ? void 0 : d.contentId,
        "aria-labelledby": (c = unref(a)) == null ? void 0 : c.triggerId,
        onCloseAutoFocus: l,
        onInteractOutside: i[0] || (i[0] = (p) => {
          var g;
          if (t("interactOutside", p), p.defaultPrevented)
            return;
          const f = p.detail.originalEvent, m = f.button === 0 && f.ctrlKey === true, v = f.button === 2 || m;
          (!((g = unref(a)) != null && g.modal.value) || v) && (s.value = true);
        }),
        style: {
          "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
          "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
          "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
        }
      }), {
        default: withCtx(() => [
          renderSlot(r.$slots, "default")
        ]),
        _: 3
      }, 16, ["id", "aria-labelledby", "style"]);
    };
  }
});
var Ei = defineComponent({
  __name: "DropdownMenuArrow",
  props: {
    width: { default: 10 },
    height: { default: 5 },
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o;
    return (e, a) => (openBlock(), createBlock(unref(Zs), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Ci = defineComponent({
  __name: "DropdownMenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(o, { emit: t }) {
    const e = o, a = Ie(t);
    return (s, n) => (openBlock(), createBlock(unref(Pa), normalizeProps(guardReactiveProps({ ...e, ...unref(a) })), {
      default: withCtx(() => [
        renderSlot(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var $i = defineComponent({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o;
    return (e, a) => (openBlock(), createBlock(unref(Qo), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Si = defineComponent({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o;
    return (e, a) => (openBlock(), createBlock(unref(Tl), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Oi = defineComponent({
  __name: "DropdownMenuCheckboxItem",
  props: {
    checked: { type: [Boolean, String] },
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select", "update:checked"],
  setup(o, { emit: t }) {
    const e = o, a = Ie(t);
    return (s, n) => (openBlock(), createBlock(unref(El), normalizeProps(guardReactiveProps({ ...e, ...unref(a) })), {
      default: withCtx(() => [
        renderSlot(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Pi = defineComponent({
  __name: "DropdownMenuItemIndicator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o;
    return (e, a) => (openBlock(), createBlock(unref(wl), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Ai = defineComponent({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o;
    return (e, a) => (openBlock(), createBlock(unref(Ol), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Bi = defineComponent({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(o, { emit: t }) {
    const e = o, a = Ie(t);
    return (s, n) => (openBlock(), createBlock(unref(Al), normalizeProps(guardReactiveProps({ ...e, ...unref(a) })), {
      default: withCtx(() => [
        renderSlot(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Ti = defineComponent({
  __name: "DropdownMenuRadioItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(o, { emit: t }) {
    const e = o;
    return (a, s) => (openBlock(), createBlock(unref(Bl), normalizeProps(guardReactiveProps({ ...e, ...t })), {
      default: withCtx(() => [
        renderSlot(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var ki = defineComponent({
  __name: "DropdownMenuSub",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean }
  },
  emits: ["update:open"],
  setup(o, { emit: t }) {
    const e = o, a = U(e, "open", t, {
      passive: true,
      defaultValue: e.defaultOpen ?? false
    });
    return (s, n) => (openBlock(), createBlock(unref(kl), {
      open: unref(a),
      "onUpdate:open": n[0] || (n[0] = (l) => isRef(a) ? a.value = l : null)
    }, {
      default: withCtx(() => [
        renderSlot(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["open"]));
  }
});
var Di = defineComponent({
  __name: "DropdownMenuSubContent",
  props: mergeDefaults({
    loop: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    disableOutsideScroll: { type: Boolean },
    trapFocus: { type: Boolean },
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  }, {
    ...Ht
  }),
  setup(o, { emit: t }) {
    const e = o;
    return (a, s) => (openBlock(), createBlock(unref(Dl), mergeProps({ ...e, ...t }, { style: {
      "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
      "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
      "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
    } }), {
      default: withCtx(() => [
        renderSlot(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["style"]));
  }
});
var Mi = defineComponent({
  __name: "DropdownMenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o;
    return (e, a) => (openBlock(), createBlock(unref(Ml), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Re = Symbol();
var Ii = defineComponent({
  __name: "ContextMenuRoot",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modelValue: { type: Boolean },
    orientation: { default: "vertical" },
    dir: {}
  },
  emits: ["update:modelValue"],
  setup(o, { emit: t }) {
    const e = o, a = U(e, "modelValue", t, {
      passive: true
    }), s = ref(), n = ref(), l = ref(0), r = ref(0);
    return provide(Re, {
      selectedElement: s,
      changeSelected: (i) => {
        s.value = i, s.value.focus();
      },
      modelValue: a,
      showTooltip: () => {
        a.value = true;
      },
      hideTooltip: () => {
        a.value = false;
      },
      triggerElement: n,
      itemsArray: [],
      orientation: e.orientation,
      clientX: l,
      clientY: r
    }), (i, d) => (openBlock(), createBlock(unref(ce), null, {
      default: withCtx(() => [
        renderSlot(i.$slots, "default")
      ]),
      _: 3
    }));
  }
});
var xi = defineComponent({
  __name: "ContextMenuTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(o) {
    const t = o, e = inject(
      Re
    ), a = {
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
    function s(n) {
      e != null && e.modelValue.value ? e == null || e.hideTooltip() : (e.clientX.value = n.clientX, e.clientY.value = n.clientY, e == null || e.showTooltip());
    }
    return onMounted(() => {
      e.triggerElement.value = a;
    }), (n, l) => (openBlock(), createBlock(unref(Pe), {
      element: a,
      asChild: ""
    }, {
      default: withCtx(() => {
        var r, i;
        return [
          createVNode(unref(A), {
            as: n.as,
            type: n.as === "button" ? "button" : void 0,
            "aria-expanded": ((r = unref(e)) == null ? void 0 : r.modelValue.value) || false,
            "data-state": (i = unref(e)) != null && i.modelValue.value ? "open" : "closed",
            "as-child": t.asChild,
            onContextmenu: withModifiers(s, ["prevent"])
          }, {
            default: withCtx(() => [
              renderSlot(n.$slots, "default")
            ]),
            _: 3
          }, 8, ["as", "type", "aria-expanded", "data-state", "as-child", "onContextmenu"])
        ];
      }),
      _: 3
    }));
  }
});
var Vo = (o, t) => {
  const e = o.__vccOpts || o;
  for (const [a, s] of t)
    e[a] = s;
  return e;
};
var Il = {};
function xl(o, t) {
  return openBlock(), createBlock(Teleport, { to: "body" }, [
    renderSlot(o.$slots, "default")
  ]);
}
var Ri = Vo(Il, [["render", xl]]);
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
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o, e = inject(Re), { primitiveElement: a, currentElement: s } = x(), { createCollection: n, getItems: l } = de();
    n(s), watchEffect(() => {
      s.value && (e != null && e.modelValue.value ? (e.itemsArray = l(s.value), window.addEventListener("keydown", d), window.addEventListener("scroll", i)) : r());
    }), watchEffect(() => {
      e != null && e.selectedElement.value && r();
    });
    function r() {
      window.removeEventListener("keydown", d), window.removeEventListener("scroll", i);
    }
    ze(s, (c) => {
      c.target.closest('[role="menuitem"]') || e == null || e.hideTooltip();
    });
    function i() {
      e == null || e.hideTooltip(), window.removeEventListener("scroll", i);
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
      return (f = unref(e)) != null && f.modelValue.value ? (openBlock(), createBlock(unref(Ae), mergeProps({ key: 0 }, t, { "prioritize-position": "" }), {
        default: withCtx(() => {
          var m;
          return [
            createVNode(unref(A), {
              ref_key: "primitiveElement",
              ref: a,
              "data-state": (m = unref(e)) != null && m.modelValue.value ? "open" : "closed",
              "data-side": t.side,
              "data-align": t.align,
              role: "tooltip",
              as: c.as,
              asChild: t.asChild,
              style: { "pointer-events": "auto" }
            }, {
              default: withCtx(() => [
                renderSlot(c.$slots, "default")
              ]),
              _: 3
            }, 8, ["data-state", "data-side", "data-align", "as", "asChild"])
          ];
        }),
        _: 3
      }, 16)) : createCommentVNode("", true);
    };
  }
});
var Ni = defineComponent({
  __name: "ContextMenuArrow",
  setup(o) {
    return (t, e) => (openBlock(), createBlock(unref(Ye)));
  }
});
var lt = Symbol();
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
  setup(o, { emit: t }) {
    const e = o, a = U(e, "modelValue", t, {
      passive: true
    }), s = ref(), n = inject(lt);
    return provide(lt, {
      modelValue: a,
      showTooltip: () => {
        a.value = true;
      },
      hideTooltip: () => {
        a.value = false;
      },
      triggerElement: s,
      itemsArray: [],
      orientation: e.orientation,
      triggerId: te(),
      contentId: te(),
      parentContext: n
    }), (l, r) => (openBlock(), createBlock(unref(ce), null, {
      default: withCtx(() => [
        renderSlot(l.$slots, "default")
      ]),
      _: 3
    }));
  }
});
var Fi = defineComponent({
  __name: "ContextMenuItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o, e = inject(
      Re
    ), a = inject(
      lt
    );
    function s() {
      e != null && e.selectedElement.value && e.hideTooltip();
    }
    function n() {
      e == null || e.hideTooltip();
    }
    return (l, r) => {
      var i;
      return openBlock(), createBlock(Oe, {
        disabled: t.disabled,
        rootProvider: unref(e),
        subProvider: unref(a),
        orientation: (i = unref(e)) == null ? void 0 : i.orientation,
        "as-child": t.asChild,
        onHandleClick: s,
        onEscapeKeydown: n
      }, {
        default: withCtx(() => [
          renderSlot(l.$slots, "default")
        ]),
        _: 3
      }, 8, ["disabled", "rootProvider", "subProvider", "orientation", "as-child"]);
    };
  }
});
var Rl = Symbol();
var Hi = defineComponent({
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
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(o, { emit: t }) {
    const e = o, { primitiveElement: a, currentElement: s } = x();
    return provide(Rl, {
      type: e.type,
      modelValue: toRef(() => e.modelValue),
      changeModelValue: (n) => {
        if (e.type === "single")
          t("update:modelValue", n);
        else {
          let l = e.modelValue;
          if (l.includes(n)) {
            let r = l.findIndex((i) => i === n);
            l.splice(r, 1);
          } else
            l.push(n);
          t("update:modelValue", l);
        }
      },
      parentElement: s
    }), (n, l) => (openBlock(), createBlock(unref(A), {
      ref_key: "primitiveElement",
      ref: a,
      role: "group",
      as: n.as,
      "as-child": n.asChild,
      dir: e.dir,
      "aria-label": "Text alignment"
    }, {
      default: withCtx(() => [
        renderSlot(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "dir"]));
  }
});
var zi = defineComponent({
  __name: "ContextMenuSeparator",
  props: {
    orientation: {},
    decorative: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o;
    return (e, a) => (openBlock(), createBlock(mt, normalizeProps(guardReactiveProps(t)), null, 16));
  }
});
var ka = Symbol();
var Ll = ["id", "checked", "name", "disabled"];
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
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(o, { emit: t }) {
    const e = o, a = inject(
      Re
    ), s = U(e, "modelValue", t, {
      passive: true
    }), n = computed(() => s.value ? "checked" : "unchecked");
    function l() {
      s.value = !s.value;
    }
    function r() {
      a == null || a.hideTooltip();
    }
    return provide(ka, {
      modelValue: s
    }), (i, d) => {
      var c;
      return openBlock(), createBlock(Oe, {
        ref: "currentElement",
        disabled: e.disabled,
        rootProvider: unref(a),
        orientation: (c = unref(a)) == null ? void 0 : c.orientation,
        "as-child": e.asChild,
        onHandleClick: l,
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
          }), null, 16, Ll),
          renderSlot(i.$slots, "default")
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
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(o) {
    const t = o, e = inject(ka);
    return (a, s) => {
      var n;
      return (n = unref(e)) != null && n.modelValue.value ? (openBlock(), createBlock(unref(A), {
        key: 0,
        as: a.as,
        "as-child": t.asChild,
        style: { "pointer-events": "none" }
      }, {
        default: withCtx(() => [
          renderSlot(a.$slots, "default")
        ]),
        _: 3
      }, 8, ["as", "as-child"])) : createCommentVNode("", true);
    };
  }
});
var Ui = defineComponent({
  __name: "ContextMenuLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "label" }
  },
  setup(o) {
    const t = o;
    return (e, a) => (openBlock(), createBlock(unref(A), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var jo = "RadioGroup";
var Gi = defineComponent({
  __name: "ContextMenuRadioGroup",
  props: {
    value: {},
    defaultValue: {},
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(o, { emit: t }) {
    const e = o, { primitiveElement: a, currentElement: s } = x(), n = U(e, "modelValue", t, {
      passive: true
    });
    return provide(jo, {
      modelValue: n,
      changeModelValue: (l) => {
        n.value = l;
      },
      parentElement: s
    }), (l, r) => (openBlock(), createBlock(unref(A), {
      ref_key: "primitiveElement",
      ref: a,
      role: "radiogroup",
      "aria-label": "radiogroup",
      "as-child": e.asChild,
      as: l.as
    }, {
      default: withCtx(() => [
        renderSlot(l.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
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
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o, e = inject(
      Re
    ), a = inject(
      jo
    ), s = computed(() => {
      var i;
      return ((i = a == null ? void 0 : a.modelValue) == null ? void 0 : i.value) === t.value ? "on" : "off";
    });
    function n() {
      if (e != null && e.selectedElement.value)
        return a == null ? void 0 : a.changeModelValue(t.value);
    }
    function l() {
      e == null || e.hideTooltip();
    }
    const r = computed(
      () => {
        var i;
        return ((i = a == null ? void 0 : a.modelValue) == null ? void 0 : i.value) === t.value;
      }
    );
    return provide(ka, {
      modelValue: r
    }), (i, d) => {
      var c;
      return openBlock(), createBlock(Oe, {
        disabled: t.disabled,
        rootProvider: unref(e),
        orientation: (c = unref(e)) == null ? void 0 : c.orientation,
        "data-radix-vue-radio-value": t.value,
        "as-child": t.asChild,
        as: i.as,
        onHandleClick: n,
        onEscapeKeydown: l,
        onClick: n,
        role: "menuitemradio",
        "data-state": s.value
      }, {
        default: withCtx(() => [
          renderSlot(i.$slots, "default")
        ]),
        _: 3
      }, 8, ["disabled", "rootProvider", "orientation", "data-radix-vue-radio-value", "as-child", "as", "data-state"]);
    };
  }
});
var qi = defineComponent({
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
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o, e = inject(
      Re
    ), a = inject(
      lt
    ), { primitiveElement: s, currentElement: n } = x(), { createCollection: l } = de();
    l(n), watchEffect(() => {
      n.value && a != null && a.modelValue.value && r();
    }), watch(
      () => e == null ? void 0 : e.selectedElement.value,
      (i) => {
        var c;
        if (!(a != null && a.modelValue.value))
          return;
        const d = Array.from(
          ((c = i == null ? void 0 : i.closest('[role="tooltip"]')) == null ? void 0 : c.querySelectorAll(
            "[data-radix-vue-collection-item]:not([data-disabled])"
          )) ?? []
        );
        d != null && d.length && d.includes(a.triggerElement.value) && (e == null ? void 0 : e.selectedElement.value) !== (a == null ? void 0 : a.triggerElement.value) && (a == null || a.hideTooltip());
      }
    );
    function r() {
      const i = Array.from(
        n.value.querySelectorAll(
          "[data-radix-vue-collection-item]:not([data-disabled])"
        )
      );
      return a.itemsArray = i, i;
    }
    return ze(n, (i) => {
      i.target.closest('[role="menuitem"]') || a == null || a.hideTooltip();
    }), (i, d) => {
      var c;
      return (c = unref(a)) != null && c.modelValue.value ? (openBlock(), createBlock(unref(Ae), normalizeProps(mergeProps({ key: 0 }, t)), {
        default: withCtx(() => {
          var p;
          return [
            createVNode(unref(A), {
              ref_key: "primitiveElement",
              ref: s,
              "data-state": (p = unref(a)) != null && p.modelValue.value ? "open" : "closed",
              "data-side": t.side,
              "data-align": t.align,
              "data-orientation": unref(a).orientation,
              "aria-labelledby": unref(a).triggerId,
              role: "tooltip",
              "as-child": t.asChild,
              as: i.as,
              style: { "pointer-events": "auto" }
            }, {
              default: withCtx(() => [
                renderSlot(i.$slots, "default")
              ]),
              _: 3
            }, 8, ["data-state", "data-side", "data-align", "data-orientation", "aria-labelledby", "as-child", "as"])
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
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o, e = inject(
      Re
    ), a = inject(
      lt
    ), { primitiveElement: s, currentElement: n } = x();
    onMounted(() => {
      a.triggerElement.value = n.value;
    });
    async function l() {
      var f;
      a == null || a.showTooltip(), await nextTick();
      const p = (f = a == null ? void 0 : a.itemsArray) == null ? void 0 : f[0];
      e.selectedElement.value = p, p == null || p.focus();
    }
    function r() {
      a != null && a.modelValue.value || l();
    }
    async function i(p) {
      p.key === "ArrowRight" && l();
    }
    const d = computed(() => a != null && a.modelValue.value ? "open" : "closed");
    function c() {
      return a == null ? void 0 : a.showTooltip();
    }
    return (p, f) => (openBlock(), createBlock(unref(Pe), { asChild: "" }, {
      default: withCtx(() => {
        var m, v, g, h2, C;
        return [
          createVNode(Oe, {
            ref_key: "primitiveElement",
            ref: s,
            id: (m = unref(a)) == null ? void 0 : m.triggerId,
            rootProvider: unref(e),
            subProvider: (v = unref(a)) == null ? void 0 : v.parentContext,
            "aria-expanded": (g = unref(a)) == null ? void 0 : g.modelValue.value,
            "aria-controls": (h2 = unref(a)) == null ? void 0 : h2.contentId,
            "data-state": d.value,
            "as-child": t.asChild,
            as: p.as,
            "data-orientation": (C = unref(e)) == null ? void 0 : C.orientation,
            "aria-haspopup": "menu",
            onHandleClick: r,
            onMouseover: c,
            onHorizontalKeydown: i
          }, {
            default: withCtx(() => [
              renderSlot(p.$slots, "default")
            ]),
            _: 3
          }, 8, ["id", "rootProvider", "subProvider", "aria-expanded", "aria-controls", "data-state", "as-child", "as", "data-orientation"])
        ];
      }),
      _: 3
    }));
  }
});
var yt = Symbol();
var Qi = defineComponent({
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
  setup(o, { emit: t }) {
    const e = o, a = U(e, "modelValue", t, {
      defaultValue: e.defaultValue
    }), s = ref(), n = ref(), l = ref(false);
    provide(yt, {
      selectedElement: s,
      changeSelected: (i) => {
        s.value = i, s.value.focus();
      },
      modelValue: a,
      changeModelValue: r,
      isOpen: l,
      showTooltip: () => {
        l.value = true;
      },
      hideTooltip: () => {
        l.value = false;
      },
      triggerElement: n,
      itemsArray: [],
      orientation: e.orientation,
      multiple: e.multiple
    });
    function r(i) {
      if (e.multiple) {
        let d = [...a.value];
        if (d.includes(i)) {
          let c = d.findIndex((p) => p === i);
          d.splice(c, 1);
        } else
          d.push(i);
        a.value = d;
      } else
        a.value = i;
    }
    return (i, d) => (openBlock(), createBlock(unref(ce), null, {
      default: withCtx(() => [
        renderSlot(i.$slots, "default")
      ]),
      _: 3
    }));
  }
});
var Zi = defineComponent({
  __name: "SelectTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(o) {
    const t = o, e = inject(yt), { primitiveElement: a, currentElement: s } = x();
    onMounted(() => {
      e.triggerElement.value = s.value;
    });
    async function n() {
      var r, i;
      if (e == null || e.showTooltip(), await nextTick(), e != null && e.modelValue.value && !(e != null && e.multiple)) {
        const d = (r = e.itemsArray) == null ? void 0 : r.find((c) => c.getAttribute("data-radix-vue-radio-value") === (e == null ? void 0 : e.modelValue.value));
        e == null || e.changeSelected(d);
      } else
        e == null || e.changeSelected((i = e.itemsArray) == null ? void 0 : i[0]);
    }
    function l(r) {
      (r.key === "ArrowDown" || r.key === "ArrowUp" || r.key === "Enter" || r.keyCode === 32) && n();
    }
    return (r, i) => (openBlock(), createBlock(unref(Pe), { asChild: "" }, {
      default: withCtx(() => {
        var d, c;
        return [
          createVNode(unref(A), {
            type: r.as === "button" ? "button" : void 0,
            ref_key: "primitiveElement",
            ref: a,
            "aria-expanded": ((d = unref(e)) == null ? void 0 : d.isOpen.value) || false,
            "data-state": (c = unref(e)) != null && c.isOpen.value ? "open" : "closed",
            "as-child": t.asChild,
            as: r.as,
            onClick: n,
            onKeydown: withModifiers(l, ["prevent"])
          }, {
            default: withCtx(() => [
              renderSlot(r.$slots, "default")
            ]),
            _: 3
          }, 8, ["type", "aria-expanded", "data-state", "as-child", "as", "onKeydown"])
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
  setup(o) {
    const t = o;
    return (e, a) => (openBlock(), createBlock(ht, normalizeProps(guardReactiveProps(t)), {
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
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o, e = inject(yt), { primitiveElement: a, currentElement: s } = x(), { createCollection: n, getItems: l } = de();
    n(s), watchEffect(() => {
      s.value && (e != null && e.isOpen.value ? (document.querySelector("body").style.pointerEvents = "none", e.itemsArray = l(s.value)) : e != null && e.triggerElement.value && r());
    });
    function r() {
      document.querySelector("body").style.pointerEvents = "", setTimeout(() => {
        var i;
        (i = e == null ? void 0 : e.triggerElement.value) == null || i.focus();
      }, 0);
    }
    return ze(s, (i) => {
      i.target.closest('[role="menuitem"]') || e == null || e.hideTooltip();
    }), (i, d) => {
      var c, p;
      return (c = unref(e)) != null && c.isOpen.value ? (openBlock(), createBlock(unref(Ae), mergeProps({ key: 0 }, t, {
        "prioritize-position": "",
        role: "listbox",
        "data-state": (p = unref(e)) != null && p.isOpen.value ? "open" : "closed",
        "data-side": t.side,
        "data-align": t.align
      }), {
        default: withCtx(() => [
          createVNode(unref(A), {
            ref_key: "primitiveElement",
            ref: a,
            "as-child": t.asChild,
            as: i.as,
            role: "presentation",
            style: { "pointer-events": "auto" }
          }, {
            default: withCtx(() => [
              renderSlot(i.$slots, "default")
            ]),
            _: 3
          }, 8, ["as-child", "as"])
        ]),
        _: 3
      }, 16, ["data-state", "data-side", "data-align"])) : createCommentVNode("", true);
    };
  }
});
var eu = defineComponent({
  __name: "SelectArrow",
  setup(o) {
    return (t, e) => (openBlock(), createBlock(unref(Ye)));
  }
});
var tu = defineComponent({
  __name: "SelectSeparator",
  props: {
    orientation: {},
    decorative: { type: Boolean },
    asChild: { type: Boolean }
  },
  setup(o) {
    const t = o;
    return (e, a) => (openBlock(), createBlock(mt, {
      orientation: t.orientation,
      decorative: t.decorative
    }, null, 8, ["orientation", "decorative"]));
  }
});
var en = Symbol();
var au = defineComponent({
  __name: "SelectItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o, e = inject(yt), a = inject(en), s = computed(() => {
      var n;
      return e != null && e.multiple ? (n = e == null ? void 0 : e.modelValue.value) == null ? void 0 : n.includes(
        a.value
      ) : (e == null ? void 0 : e.modelValue.value) === (a == null ? void 0 : a.value);
    });
    return (n, l) => s.value ? (openBlock(), createBlock(unref(A), {
      key: 0,
      "aria-hidden": "true",
      style: { "pointer-events": "none" },
      "as-child": t.asChild,
      as: n.as
    }, {
      default: withCtx(() => [
        renderSlot(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as"])) : createCommentVNode("", true);
  }
});
var ou = defineComponent({
  __name: "SelectLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "label" }
  },
  setup(o) {
    const t = o;
    return (e, a) => (openBlock(), createBlock(unref(A), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var nu = defineComponent({
  __name: "SelectGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o;
    return (e, a) => (openBlock(), createBlock(unref(A), {
      "as-child": t.asChild,
      as: e.as,
      ref: "primitiveElement",
      role: "group",
      "aria-label": "group"
    }, {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
});
var su = defineComponent({
  __name: "SelectItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    id: {},
    name: {},
    onSelect: {},
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o, e = inject(yt);
    function a() {
      return e == null || e.changeModelValue(t.value), e == null ? void 0 : e.hideTooltip();
    }
    return provide(en, {
      value: t.value
    }), (s, n) => {
      var l, r, i;
      return openBlock(), createBlock(Oe, {
        disabled: t.disabled,
        rootProvider: unref(e),
        orientation: (l = unref(e)) == null ? void 0 : l.orientation,
        "data-radix-vue-radio-value": t.value,
        "as-child": t.asChild,
        as: s.as,
        onHandleClick: a,
        onEscapeKeydown: n[0] || (n[0] = (d) => {
          var c;
          return (c = unref(e)) == null ? void 0 : c.hideTooltip();
        }),
        role: "option",
        "data-state": ((i = (r = unref(e)) == null ? void 0 : r.modelValue) == null ? void 0 : i.value) === t.value ? "checked" : "unchecked"
      }, {
        default: withCtx(() => [
          renderSlot(s.$slots, "default")
        ]),
        _: 3
      }, 8, ["disabled", "rootProvider", "orientation", "data-radix-vue-radio-value", "as-child", "as", "data-state"]);
    };
  }
});
var Be = Symbol();
var Nl = {
  inheritAttrs: false
};
var lu = defineComponent({
  ...Nl,
  __name: "MenubarRoot",
  props: {
    modelValue: {},
    defaultValue: {},
    orientation: { default: "horizontal" },
    dir: {}
  },
  emits: ["update:modelValue"],
  setup(o, { emit: t }) {
    const e = o, a = U(e, "modelValue", t, {
      passive: true,
      defaultValue: e.defaultValue
    }), s = ref(), n = ref(), l = [], r = ref(), i = da();
    return provide(Be, {
      selectedElement: s,
      changeSelected: (d) => {
        var c;
        s.value = d, (c = s.value) == null || c.focus();
      },
      modelValue: a,
      changeValue: (d) => {
        a.value = d;
      },
      triggerElement: n,
      triggerItemsArray: l,
      itemsArray: [],
      orientation: e.orientation
    }), watch(
      i,
      () => {
        i.value === r.value && (n.value ? n.value.focus() : l.length && l[0].focus());
      },
      { immediate: true }
    ), (d, c) => (openBlock(), createBlock(unref(ce), null, {
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
var kt = Symbol();
var ru = defineComponent({
  __name: "MenubarMenu",
  props: {
    value: {}
  },
  setup(o) {
    const e = o.value ?? te(), a = inject(Be), s = ref(), n = computed(() => (a == null ? void 0 : a.modelValue.value) === e), l = inject(kt);
    return provide(kt, {
      value: e,
      isOpen: n,
      triggerElement: s,
      itemsArray: [],
      triggerId: e,
      contentId: te(),
      parentContext: l,
      orientation: "vertical"
    }), (r, i) => (openBlock(), createBlock(unref(ce), null, {
      default: withCtx(() => [
        renderSlot(r.$slots, "default")
      ]),
      _: 3
    }));
  }
});
var Kl = {
  inheritAttrs: false
};
var iu = defineComponent({
  ...Kl,
  __name: "MenubarTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(o) {
    const t = o, e = inject(Be), a = inject(
      kt
    ), { primitiveElement: s, currentElement: n } = x(), l = da();
    onMounted(() => {
      a.triggerElement.value = n.value, e.triggerItemsArray.push(n.value);
    });
    async function r() {
      var g;
      e == null || e.changeValue(a == null ? void 0 : a.value), await nextTick();
      const v = (g = a == null ? void 0 : a.itemsArray) == null ? void 0 : g[0];
      e.selectedElement.value = v, v == null || v.focus();
    }
    function i(v) {
      if (v.key === "Escape")
        return c();
      if (v.keyCode === 32 || v.key === "Enter") {
        v.target.click();
        return;
      }
      if (v.key === "ArrowDown")
        return r();
      const g = ae(
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
        e == null || e.changeSelected(n.value), e == null || e.changeValue(a == null ? void 0 : a.value);
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
    const f = computed(() => a != null && a.isOpen.value ? "open" : "closed"), m = computed(() => l.value && l.value === n.value || (e == null ? void 0 : e.triggerElement.value) === n.value && (e == null ? void 0 : e.selectedElement.value));
    return watchEffect(() => {
      (e == null ? void 0 : e.selectedElement.value) === n.value && (e.triggerElement.value = n.value);
    }), watch(
      l,
      () => {
        l.value === n.value ? (e.selectedElement.value = n.value, e.triggerElement.value = n.value) : !(a != null && a.isOpen.value) && e.selectedElement.value === n.value && (e.selectedElement.value = void 0);
      },
      { immediate: true }
    ), (v, g) => (openBlock(), createBlock(unref(Pe), { asChild: "" }, {
      default: withCtx(() => {
        var h2, C, $, P, B;
        return [
          createVNode(unref(A), mergeProps({
            role: "menuitem",
            ref_key: "primitiveElement",
            ref: s,
            id: (h2 = unref(a)) == null ? void 0 : h2.triggerId,
            "aria-expanded": (C = unref(a)) == null ? void 0 : C.isOpen.value,
            "aria-controls": ($ = unref(a)) == null ? void 0 : $.contentId,
            "data-state": f.value,
            "data-orientation": (P = unref(e)) == null ? void 0 : P.orientation,
            "aria-haspopup": "menu",
            onKeydown: withModifiers(i, ["prevent"]),
            "data-radix-vue-collection-item": "",
            onMouseenter: d,
            onClick: p,
            "data-highlighted": m.value ? "" : null,
            "aria-disabled": t.disabled ? true : void 0,
            "data-disabled": t.disabled ? "" : void 0,
            "as-child": t.asChild,
            as: v.as,
            tabindex: ((B = unref(e)) == null ? void 0 : B.triggerElement.value) === unref(n) ? "0" : "-1"
          }, v.$attrs), {
            default: withCtx(() => [
              renderSlot(v.$slots, "default")
            ]),
            _: 3
          }, 16, ["id", "aria-expanded", "aria-controls", "data-state", "data-orientation", "onKeydown", "data-highlighted", "aria-disabled", "data-disabled", "as-child", "as", "tabindex"])
        ];
      }),
      _: 3
    }));
  }
});
var Fl = {};
function Hl(o, t) {
  return openBlock(), createBlock(Teleport, { to: "body" }, [
    renderSlot(o.$slots, "default")
  ]);
}
var uu = Vo(Fl, [["render", Hl]]);
var du = defineComponent({
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
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o, e = inject(Be), a = inject(
      kt
    ), { primitiveElement: s, currentElement: n } = x(), { createCollection: l } = de();
    l(n), watchEffect(() => {
      n.value && a != null && a.isOpen.value && r();
    }), watch(
      () => e == null ? void 0 : e.selectedElement.value,
      (d) => {
        var p;
        if (!(a != null && a.isOpen.value))
          return;
        const c = Array.from(
          ((p = d == null ? void 0 : d.closest('[role="tooltip"]')) == null ? void 0 : p.querySelectorAll(
            "[data-radix-vue-collection-item]:not([data-disabled])"
          )) ?? []
        );
        c != null && c.length && c.includes(
          a.triggerElement.value
        ) && (e == null ? void 0 : e.selectedElement.value) !== (a == null ? void 0 : a.triggerElement.value) && (e == null || e.changeValue(void 0));
      }
    );
    function r() {
      const d = Array.from(
        n.value.querySelectorAll(
          "[data-radix-vue-collection-item]:not([data-disabled])"
        )
      );
      return a.itemsArray = d, d;
    }
    ze(n, (d) => {
      d.target.closest('[role="menuitem"]') || (e == null || e.changeValue(void 0), e.selectedElement.value = void 0);
    });
    const i = computed(() => a != null && a.isOpen ? "open" : "false");
    return (d, c) => {
      var p;
      return (p = unref(a)) != null && p.isOpen.value ? (openBlock(), createBlock(unref(Ae), normalizeProps(mergeProps({ key: 0 }, t)), {
        default: withCtx(() => {
          var f, m;
          return [
            createVNode(unref(A), {
              ref_key: "primitiveElement",
              ref: s,
              "data-state": i.value,
              "data-side": t.side,
              "data-align": t.align,
              "aria-labelledby": (f = unref(a)) == null ? void 0 : f.triggerId,
              "data-orientation": (m = unref(a)) == null ? void 0 : m.orientation,
              role: "tooltip",
              "as-child": t.asChild,
              as: d.as,
              style: { "pointer-events": "auto" }
            }, {
              default: withCtx(() => [
                renderSlot(d.$slots, "default")
              ]),
              _: 3
            }, 8, ["data-state", "data-side", "data-align", "aria-labelledby", "data-orientation", "as-child", "as"])
          ];
        }),
        _: 3
      }, 16)) : createCommentVNode("", true);
    };
  }
});
var cu = defineComponent({
  __name: "MenubarArrow",
  setup(o) {
    return (t, e) => (openBlock(), createBlock(unref(Ye)));
  }
});
var rt = Symbol();
var pu = defineComponent({
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
  setup(o, { emit: t }) {
    const e = o, a = U(e, "modelValue", t, {
      passive: true
    }), s = ref(), n = inject(rt);
    return provide(rt, {
      modelValue: a,
      showTooltip: () => {
        a.value = true;
      },
      hideTooltip: () => {
        a.value = false;
      },
      triggerElement: s,
      itemsArray: [],
      orientation: e.orientation,
      triggerId: te(),
      contentId: te(),
      parentContext: n
    }), (l, r) => (openBlock(), createBlock(unref(ce), null, {
      default: withCtx(() => [
        renderSlot(l.$slots, "default")
      ]),
      _: 3
    }));
  }
});
var fu = defineComponent({
  __name: "MenubarItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o, e = inject(Be), a = inject(
      rt
    );
    function s() {
      e.changeValue(void 0), e.changeSelected(
        e.triggerElement.value
      );
    }
    function n(r) {
      const i = ae(
        r,
        e == null ? void 0 : e.triggerElement.value,
        void 0,
        {
          arrowKeyOptions: "horizontal",
          itemsArray: e == null ? void 0 : e.triggerItemsArray
        }
      );
      i && (e == null || e.changeSelected(i), e == null || e.changeValue(i.id));
    }
    function l() {
      e.changeValue(void 0), e.changeSelected(
        e.triggerElement.value
      );
    }
    return (r, i) => {
      var d;
      return openBlock(), createBlock(Oe, {
        disabled: t.disabled,
        rootProvider: unref(e),
        subProvider: unref(a),
        orientation: (d = unref(e)) == null ? void 0 : d.orientation,
        "as-child": t.asChild,
        as: r.as,
        onHandleClick: s,
        onHorizontalKeydown: n,
        onEscapeKeydown: l
      }, {
        default: withCtx(() => [
          renderSlot(r.$slots, "default")
        ]),
        _: 3
      }, 8, ["disabled", "rootProvider", "subProvider", "orientation", "as-child", "as"]);
    };
  }
});
var zl = Symbol();
var mu = defineComponent({
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
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(o, { emit: t }) {
    const e = o, { primitiveElement: a, currentElement: s } = x();
    return provide(zl, {
      type: e.type,
      modelValue: toRef(() => e.modelValue),
      changeModelValue: (n) => {
        if (e.type === "single")
          t("update:modelValue", n);
        else {
          let l = e.modelValue;
          if (l.includes(n)) {
            let r = l.findIndex((i) => i === n);
            l.splice(r, 1);
          } else
            l.push(n);
          t("update:modelValue", l);
        }
      },
      parentElement: s
    }), (n, l) => (openBlock(), createBlock(unref(A), {
      ref_key: "primitiveElement",
      ref: a,
      role: "group",
      dir: e.dir,
      as: n.as,
      "as-child": e.asChild,
      "aria-label": "Text alignment"
    }, {
      default: withCtx(() => [
        renderSlot(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["dir", "as", "as-child"]));
  }
});
var vu = defineComponent({
  __name: "MenubarSeparator",
  props: {
    orientation: {},
    decorative: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o;
    return (e, a) => (openBlock(), createBlock(mt, normalizeProps(guardReactiveProps(t)), null, 16));
  }
});
var Da = Symbol();
var Wl = ["id", "checked", "name", "disabled"];
var hu = defineComponent({
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
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(o, { emit: t }) {
    const e = o, a = inject(Be), s = U(e, "modelValue", t, {
      passive: true
    }), n = computed(() => s.value ? "checked" : "unchecked");
    function l() {
      s.value = !s.value;
    }
    provide(Da, {
      modelValue: s
    });
    function r(d) {
      const c = ae(
        d,
        a == null ? void 0 : a.triggerElement.value,
        void 0,
        {
          arrowKeyOptions: "horizontal",
          itemsArray: a == null ? void 0 : a.triggerItemsArray
        }
      );
      c && (a == null || a.changeSelected(c), a == null || a.changeValue(c.id));
    }
    function i(d) {
      a.changeValue(void 0), a.changeSelected(
        a.triggerElement.value
      );
    }
    return (d, c) => {
      var p;
      return openBlock(), createBlock(Oe, {
        ref: "currentElement",
        disabled: e.disabled,
        rootProvider: unref(a),
        orientation: (p = unref(a)) == null ? void 0 : p.orientation,
        onHandleClick: l,
        onHorizontalKeydown: r,
        onEscapeKeydown: i,
        role: "menuitemcheckbox",
        "data-state": n.value,
        "aria-checked": !!e.modelValue,
        "as-child": e.asChild,
        as: d.as
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
          }), null, 16, Wl),
          renderSlot(d.$slots, "default")
        ]),
        _: 3
      }, 8, ["disabled", "rootProvider", "orientation", "data-state", "aria-checked", "as-child", "as"]);
    };
  }
});
var yu = defineComponent({
  __name: "MenubarItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(o) {
    const t = o, e = inject(Da);
    return (a, s) => {
      var n;
      return (n = unref(e)) != null && n.modelValue.value ? (openBlock(), createBlock(unref(A), mergeProps({ key: 0 }, t, { style: { "pointer-events": "none" } }), {
        default: withCtx(() => [
          renderSlot(a.$slots, "default")
        ]),
        _: 3
      }, 16)) : createCommentVNode("", true);
    };
  }
});
var gu = defineComponent({
  __name: "MenubarLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "label" }
  },
  setup(o) {
    const t = o;
    return (e, a) => (openBlock(), createBlock(unref(A), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var tn = "RadioGroup";
var _u = defineComponent({
  __name: "MenubarRadioGroup",
  props: {
    value: {},
    defaultValue: {},
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(o, { emit: t }) {
    const e = o, { primitiveElement: a, currentElement: s } = x(), n = U(e, "modelValue", t, {
      passive: true
    });
    return provide(tn, {
      modelValue: n,
      changeModelValue: (l) => {
        n.value = l;
      },
      parentElement: s
    }), (l, r) => (openBlock(), createBlock(unref(A), {
      ref_key: "primitiveElement",
      ref: a,
      role: "radiogroup",
      "aria-label": "radiogroup",
      "as-child": e.asChild,
      as: l.as
    }, {
      default: withCtx(() => [
        renderSlot(l.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
});
var bu = defineComponent({
  __name: "MenubarRadioItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    id: {},
    name: {},
    onSelect: {},
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o, e = inject(Be), a = inject(
      tn
    ), s = computed(() => {
      var d;
      return ((d = a == null ? void 0 : a.modelValue) == null ? void 0 : d.value) === t.value ? "on" : "off";
    });
    function n() {
      if (e != null && e.selectedElement.value)
        return a == null ? void 0 : a.changeModelValue(t.value);
    }
    const l = computed(
      () => {
        var d;
        return ((d = a == null ? void 0 : a.modelValue) == null ? void 0 : d.value) === t.value;
      }
    );
    provide(Da, {
      modelValue: l
    });
    function r(d) {
      const c = ae(
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
    function i() {
      e.changeValue(void 0), e.changeSelected(
        e.triggerElement.value
      );
    }
    return (d, c) => {
      var p;
      return openBlock(), createBlock(Oe, {
        disabled: t.disabled,
        rootProvider: unref(e),
        orientation: (p = unref(e)) == null ? void 0 : p.orientation,
        "data-radix-vue-radio-value": t.value,
        "as-child": t.asChild,
        as: d.as,
        onHandleClick: n,
        onHorizontalKeydown: r,
        onEscapeKeydown: i,
        role: "menuitemradio",
        "data-state": s.value
      }, {
        default: withCtx(() => [
          renderSlot(d.$slots, "default")
        ]),
        _: 3
      }, 8, ["disabled", "rootProvider", "orientation", "data-radix-vue-radio-value", "as-child", "as", "data-state"]);
    };
  }
});
var wu = defineComponent({
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
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o, e = inject(Be), a = inject(rt), { primitiveElement: s, currentElement: n } = x(), { createCollection: l } = de();
    l(n), watchEffect(() => {
      n.value && a != null && a.modelValue.value && r();
    }), watch(
      () => e == null ? void 0 : e.selectedElement.value,
      (i) => {
        var c;
        if (!(a != null && a.modelValue.value))
          return;
        const d = Array.from(
          ((c = i == null ? void 0 : i.closest('[role="tooltip"]')) == null ? void 0 : c.querySelectorAll(
            "[data-radix-vue-collection-item]:not([data-disabled])"
          )) ?? []
        );
        d != null && d.length && d.includes(a.triggerElement.value) && (e == null ? void 0 : e.selectedElement.value) !== (a == null ? void 0 : a.triggerElement.value) && (a == null || a.hideTooltip());
      }
    );
    function r() {
      const i = Array.from(
        n.value.querySelectorAll(
          "[data-radix-vue-collection-item]:not([data-disabled])"
        )
      );
      return a.itemsArray = i, i;
    }
    return ze(n, (i) => {
      i.target.closest('[role="menuitem"]') || a == null || a.hideTooltip();
    }), (i, d) => {
      var c;
      return (c = unref(a)) != null && c.modelValue.value ? (openBlock(), createBlock(unref(Ae), normalizeProps(mergeProps({ key: 0 }, t)), {
        default: withCtx(() => {
          var p;
          return [
            createVNode(unref(A), {
              ref_key: "primitiveElement",
              ref: s,
              "data-state": (p = unref(a)) != null && p.modelValue.value ? "open" : "closed",
              "data-side": t.side,
              "data-align": t.align,
              "data-orientation": unref(a).orientation,
              "aria-labelledby": unref(a).triggerId,
              as: i.as,
              role: "tooltip",
              asChild: t.asChild,
              style: { "pointer-events": "auto" }
            }, {
              default: withCtx(() => [
                renderSlot(i.$slots, "default")
              ]),
              _: 3
            }, 8, ["data-state", "data-side", "data-align", "data-orientation", "aria-labelledby", "as", "asChild"])
          ];
        }),
        _: 3
      }, 16)) : createCommentVNode("", true);
    };
  }
});
var Eu = defineComponent({
  __name: "MenubarSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o, e = inject(Be), a = inject(rt), { primitiveElement: s, currentElement: n } = x();
    onMounted(() => {
      a.triggerElement.value = n.value;
    });
    async function l() {
      var m;
      a == null || a.showTooltip(), await nextTick();
      const f = (m = a == null ? void 0 : a.itemsArray) == null ? void 0 : m[0];
      e.selectedElement.value = f, f == null || f.focus();
    }
    function r() {
      a != null && a.modelValue.value || l();
    }
    async function i(f) {
      if (f.key === "ArrowRight")
        l();
      else {
        const m = ae(
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
    const d = computed(() => a != null && a.modelValue.value ? "open" : "closed");
    function c() {
      return a == null ? void 0 : a.showTooltip();
    }
    function p(f) {
      e.changeValue(void 0), e.changeSelected(
        e.triggerElement.value
      );
    }
    return (f, m) => (openBlock(), createBlock(unref(Pe), { asChild: "" }, {
      default: withCtx(() => {
        var v, g, h2, C, $;
        return [
          createVNode(Oe, {
            ref_key: "primitiveElement",
            ref: s,
            id: (v = unref(a)) == null ? void 0 : v.triggerId,
            rootProvider: unref(e),
            subProvider: (g = unref(a)) == null ? void 0 : g.parentContext,
            "aria-expanded": (h2 = unref(a)) == null ? void 0 : h2.modelValue.value,
            "aria-controls": (C = unref(a)) == null ? void 0 : C.contentId,
            "data-state": d.value,
            "data-orientation": ($ = unref(e)) == null ? void 0 : $.orientation,
            "as-child": t.asChild,
            "aria-haspopup": "menu",
            onHandleClick: r,
            onMouseover: c,
            onHorizontalKeydown: i,
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
var Le = Symbol();
var Cu = defineComponent({
  __name: "NavigationMenuRoot",
  props: {
    modelValue: { default: "" },
    defaultValue: {},
    dir: { default: "ltr" },
    orientation: { default: "horizontal" },
    delayDuration: { default: 200 },
    skipDelayDuration: { default: 300 },
    asChild: { type: Boolean },
    as: { default: "nav" }
  },
  emits: ["update:modelValue"],
  setup(o, { emit: t }) {
    const e = o, a = U(e, "modelValue", t, {
      passive: true,
      defaultValue: e.defaultValue ?? ""
    }), s = ref(""), { primitiveElement: n, currentElement: l } = x(), { createCollection: r } = de();
    r();
    const i = ref(), d = ref(), c = ref(/* @__PURE__ */ new Map()), { delayDuration: p, skipDelayDuration: f } = toRefs(e), m = Kn(false, f), v = computed(() => a.value !== "" || m.value ? 150 : p.value), g = ua((h2) => {
      s.value = a.value, a.value = h2;
    }, v);
    return provide(Le, {
      isRootMenu: true,
      modelValue: a,
      previousValue: s,
      baseId: te(),
      dir: e.dir,
      orientation: e.orientation,
      rootNavigationMenu: l,
      indicatorTrack: i,
      onIndicatorTrackChange: (h2) => {
        i.value = h2;
      },
      viewport: d,
      onViewportChange: (h2) => {
        d.value = h2;
      },
      viewportContent: c,
      onViewportContentChange: (h2, C) => {
        const $ = c.value;
        c.value = new Map($.set(h2, C));
      },
      onViewportContentRemove: (h2) => {
        const C = c.value;
        if (!C.has(h2))
          return C;
        C.delete(h2), c.value = new Map(C);
      },
      onTriggerEnter: (h2) => {
        g(h2);
      },
      onTriggerLeave: () => {
        m.value = true, g("");
      },
      onContentEnter: (h2) => {
        g(h2);
      },
      onContentLeave: () => {
        g("");
      },
      onItemSelect: (h2) => {
        s.value = a.value, a.value = h2;
      },
      onItemDismiss: () => {
        s.value = a.value, a.value = "";
      }
    }), (h2, C) => (openBlock(), createBlock(unref(A), {
      ref_key: "primitiveElement",
      ref: n,
      "aria-label": "Main",
      as: h2.as,
      "as-child": h2.asChild,
      "data-orientation": h2.orientation,
      dir: h2.dir
    }, {
      default: withCtx(() => [
        renderSlot(h2.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-orientation", "dir"]));
  }
});
function Yt(o) {
  return o ? "open" : "closed";
}
function an(o, t) {
  return `${o}-trigger-${t}`;
}
function Ma(o, t) {
  return `${o}-content-${t}`;
}
var $t = "navigationMenu.rootContentDismiss";
function sa(o) {
  const t = [], e = document.createTreeWalker(o, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (a) => {
      const s = a.tagName === "INPUT" && a.type === "hidden";
      return a.disabled || a.hidden || s ? NodeFilter.FILTER_SKIP : a.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; e.nextNode(); )
    t.push(e.currentNode);
  return t;
}
function on(o) {
  const t = document.activeElement;
  return o.some((e) => e === t ? true : (e.focus(), document.activeElement !== t));
}
function Yl(o) {
  return o.forEach((t) => {
    t.dataset.tabindex = t.getAttribute("tabindex") || "", t.setAttribute("tabindex", "-1");
  }), () => {
    o.forEach((t) => {
      const e = t.dataset.tabindex;
      t.setAttribute("tabindex", e);
    });
  };
}
var Ia = Symbol();
var $u = defineComponent({
  __name: "NavigationMenuItem",
  props: {
    value: {},
    asChild: { type: Boolean },
    as: { default: "li" }
  },
  setup(o) {
    const t = o, { getItems: e } = de(), a = inject(Le), s = t.value || te(), n = ref(), l = ref(), r = Ma(a.baseId, s);
    let i = () => ({});
    const d = ref(false), c = async (v = "start") => {
      const g = document.getElementById(r);
      if (g) {
        i();
        const h2 = sa(g);
        h2.length && on(v === "start" ? h2 : h2.reverse());
      }
    }, p = () => {
      const v = document.getElementById(r);
      if (v) {
        const g = sa(v);
        g.length && (i = Yl(g));
      }
    };
    provide(Ia, {
      value: s,
      contentId: r,
      triggerRef: n,
      focusProxyRef: l,
      wasEscapeCloseRef: d,
      onEntryKeyDown: c,
      onFocusProxyEnter: c,
      onContentFocusOutside: p,
      onRootContentClose: p
    });
    const f = () => {
      var v;
      a == null || a.onItemDismiss(), (v = n.value) == null || v.focus();
    }, m = (v) => {
      const g = document.activeElement;
      if (v.keyCode === 32 || v.key === "Enter")
        if ((a == null ? void 0 : a.modelValue.value) === s) {
          f(), v.preventDefault();
          return;
        } else {
          v.target.click(), v.preventDefault();
          return;
        }
      const h2 = e().filter(
        ($) => {
          var P;
          return (P = $.parentElement) == null ? void 0 : P.hasAttribute("aria-menu-item");
        }
      ), C = ae(v, g, void 0, {
        itemsArray: h2,
        loop: false
      });
      C && (C == null || C.focus()), v.preventDefault(), v.stopPropagation();
    };
    return (v, g) => (openBlock(), createBlock(unref(A), {
      "as-child": t.asChild,
      as: v.as,
      onKeydown: withKeys(m, ["up", "down", "left", "right", "home", "end", "space"]),
      "aria-menu-item": ""
    }, {
      default: withCtx(() => [
        renderSlot(v.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "onKeydown"]));
  }
});
var nn = defineComponent({
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
  setup(o, { expose: t, emit: e }) {
    const a = o, { getItems: s } = de(), { primitiveElement: n, currentElement: l } = x(), r = inject(Le), i = an(r.baseId, a.value), d = Ma(r.baseId, a.value), c = ref(null), p = computed(() => {
      const $ = s().map((Q) => Q.id.split("trigger-")[1]);
      (r == null ? void 0 : r.dir) === "rtl" && $.reverse();
      const P = $.indexOf(r.modelValue.value), B = $.indexOf(r.previousValue.value), R = a.value === (r == null ? void 0 : r.modelValue.value), K = B === $.indexOf(a.value);
      if (!R && !K)
        return c.value;
      const D = (() => {
        if (P !== B) {
          if (R && B !== -1)
            return P > B ? "from-end" : "from-start";
          if (K && P !== -1)
            return P > B ? "to-start" : "to-end";
        }
        return null;
      })();
      return c.value = D, D;
    }), f = (C) => {
      var $, P;
      if (e("focusOutside", C), e("interactOutside", C), !C.defaultPrevented) {
        a.onContentFocusOutside();
        const B = C.target;
        (P = ($ = r.rootNavigationMenu) == null ? void 0 : $.value) != null && P.contains(B) && C.preventDefault();
      }
    }, m = (C) => {
      var $;
      if (e("pointerDownOutside", C), !C.defaultPrevented) {
        const P = C.target, B = s().some((K) => K.contains(P)), R = (r == null ? void 0 : r.isRootMenu) && (($ = r.viewport.value) == null ? void 0 : $.contains(P));
        (B || R || !(r != null && r.isRootMenu)) && C.preventDefault();
      }
    };
    watchEffect((C) => {
      const $ = l.value;
      if (r != null && r.isRootMenu && $) {
        const P = () => {
          var B;
          r.onItemDismiss(), a.onRootContentClose(), $.contains(document.activeElement) && ((B = a.triggerRef.value) == null || B.focus());
        };
        $.addEventListener($t, P), C(
          () => $.removeEventListener($t, P)
        );
      }
    });
    const v = (C) => {
      var $, P;
      e("escapeKeyDown", C), C.defaultPrevented || (r.onItemDismiss(), (P = ($ = a == null ? void 0 : a.triggerRef) == null ? void 0 : $.value) == null || P.focus(), a.wasEscapeCloseRef.value = true);
    }, g = (C) => {
      var K;
      const $ = C.altKey || C.ctrlKey || C.metaKey, P = C.key === "Tab" && !$, B = sa(C.currentTarget);
      if (P) {
        const D = document.activeElement, Q = B.findIndex(
          (L) => L === D
        ), M = C.shiftKey ? B.slice(0, Q).reverse() : B.slice(Q + 1, B.length);
        if (on(M))
          C.preventDefault();
        else {
          (K = a.focusProxyRef.value) == null || K.focus();
          return;
        }
      }
      const R = ae(
        C,
        document.activeElement,
        void 0,
        { itemsArray: B, loop: false }
      );
      R == null || R.focus(), !(C.key === "Enter" || C.key === "Escape") && (C.preventDefault(), C.stopPropagation());
    }, h2 = () => {
      var $;
      const C = new Event($t, {
        bubbles: true,
        cancelable: true
      });
      ($ = l.value) == null || $.dispatchEvent(C);
    };
    return t({
      ...a
    }), (C, $) => {
      var P, B;
      return openBlock(), createBlock(unref(qo), {
        ref_key: "primitiveElement",
        ref: n,
        id: unref(d),
        "aria-labelledby": unref(i),
        "data-motion": p.value,
        "data-state": unref(Yt)(((P = unref(r)) == null ? void 0 : P.modelValue.value) === a.value),
        "data-orientation": (B = unref(r)) == null ? void 0 : B.orientation,
        "disable-outside-pointer-events": C.disableOutsidePointerEvents,
        onKeydown: g,
        onEscapeKeyDown: v,
        onPointerDownOutside: m,
        onFocusOutside: f,
        onDismiss: h2
      }, {
        default: withCtx(() => [
          renderSlot(C.$slots, "default")
        ]),
        _: 3
      }, 8, ["id", "aria-labelledby", "data-motion", "data-state", "data-orientation", "disable-outside-pointer-events"]);
    };
  }
});
var Su = defineComponent({
  inheritAttrs: false,
  __name: "NavigationMenuContent",
  props: {
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss"],
  setup(o, { emit: t }) {
    const e = o, a = inject(Le), s = inject(Ia), n = computed(() => (s == null ? void 0 : s.value) === (a == null ? void 0 : a.modelValue.value)), l = mo(
      () => s,
      () => ({
        ...e,
        value: s.value,
        triggerRef: s.triggerRef,
        focusProxyRef: s.focusProxyRef,
        wasEscapeCloseRef: s.wasEscapeCloseRef,
        onContentFocusOutside: s.onContentFocusOutside,
        onRootContentClose: s.onRootContentClose
      })
    ), r = getCurrentInstance();
    watch(
      n,
      async () => {
        var c, p;
        a != null && a.isRootMenu || await nextTick();
        const d = (p = (c = r == null ? void 0 : r.vnode.children) == null ? void 0 : c.default()) == null ? void 0 : p[0];
        a != null && a.viewport && d && (s != null && s.triggerRef.value) && (d.props = {
          ...d.props,
          ...l.value,
          triggerRef: s.triggerRef,
          focusProxyRef: s.focusProxyRef,
          wasEscapeCloseRef: s.wasEscapeCloseRef
        }, d.parentProps = r.vnode.props, a.onViewportContentChange(s.value, d), l.trigger());
      },
      { immediate: true, deep: true }
    );
    const i = (d) => {
      t("pointerDownOutside", d), d.preventDefault || a == null || a.onContentLeave();
    };
    return (d, c) => {
      var p;
      return (p = unref(a)) != null && p.viewport.value ? createCommentVNode("", true) : (openBlock(), createBlock(unref(Ee), {
        key: 0,
        present: n.value
      }, {
        default: withCtx(() => {
          var f;
          return [
            createVNode(nn, mergeProps({
              "data-state": unref(Yt)(n.value),
              style: {
                pointerEvents: !n.value && ((f = unref(a)) != null && f.isRootMenu) ? "none" : void 0
              }
            }, { ...d.$attrs, ...unref(l) }, {
              onPointerenter: c[0] || (c[0] = (m) => {
                var v;
                return (v = unref(a)) == null ? void 0 : v.onContentEnter(unref(s).value);
              }),
              onPointerleave: c[1] || (c[1] = (m) => {
                var v;
                return (v = unref(a)) == null ? void 0 : v.onContentLeave();
              }),
              onPointerdown: i,
              onFocusOutside: c[2] || (c[2] = (m) => t("focusOutside", m)),
              onInteractOutside: c[3] || (c[3] = (m) => t("interactOutside", m))
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
var Ou = defineComponent({
  inheritAttrs: false,
  __name: "NavigationMenuIndicator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o, { getItems: e } = de(), a = inject(Le), s = ref(), n = computed(() => (a == null ? void 0 : a.orientation) === "horizontal"), l = computed(() => !!(a != null && a.modelValue.value)), r = ref(), i = () => {
      r.value && (s.value = {
        size: n.value ? r.value.offsetWidth : r.value.offsetHeight,
        offset: n.value ? r.value.offsetLeft : r.value.offsetTop
      });
    };
    return watchEffect(() => {
      if (!(a != null && a.modelValue.value)) {
        s.value = void 0;
        return;
      }
      const d = e();
      r.value = d.find(
        (c) => c.id.includes(a == null ? void 0 : a.modelValue.value)
      ), i();
    }), we(r, i), we(a.indicatorTrack, i), (d, c) => {
      var p, f;
      return (p = unref(a)) != null && p.indicatorTrack.value ? (openBlock(), createBlock(Teleport, {
        key: 0,
        to: (f = unref(a)) == null ? void 0 : f.indicatorTrack.value
      }, [
        createVNode(unref(Ee), { present: l.value }, {
          default: withCtx(() => {
            var m, v, g, h2;
            return [
              createVNode(unref(A), mergeProps({
                "aria-hidden": "",
                "data-state": l.value ? "visible" : "hidden",
                "data-orientation": unref(a).orientation,
                "as-child": t.asChild,
                as: d.as,
                style: {
                  position: "absolute",
                  ...n.value ? {
                    left: 0,
                    width: ((m = s.value) == null ? void 0 : m.size) + "px",
                    transform: `translateX(${(v = s.value) == null ? void 0 : v.offset}px)`
                  } : {
                    top: 0,
                    height: ((g = s.value) == null ? void 0 : g.size) + "px",
                    transform: `translateY(${(h2 = s.value) == null ? void 0 : h2.offset}px)`
                  }
                }
              }, d.$attrs), {
                default: withCtx(() => [
                  renderSlot(d.$slots, "default")
                ]),
                _: 3
              }, 16, ["data-state", "data-orientation", "as-child", "as", "style"])
            ];
          }),
          _: 3
        }, 8, ["present"])
      ], 8, ["to"])) : createCommentVNode("", true);
    };
  }
});
var Pu = defineComponent({
  __name: "NavigationMenuLink",
  props: {
    active: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "a" }
  },
  emits: ["select"],
  setup(o, { emit: t }) {
    const e = o, a = async (s) => {
      var n;
      if (t("select", s), await nextTick(), !s.defaultPrevented && !s.metaKey) {
        const l = new CustomEvent(
          $t,
          {
            bubbles: true,
            cancelable: true
          }
        );
        (n = s.target) == null || n.dispatchEvent(l);
      }
    };
    return (s, n) => (openBlock(), createBlock(unref(A), {
      as: s.as,
      "data-active": s.active ? "" : void 0,
      "aria-current": s.active ? "page" : void 0,
      "as-child": e.asChild,
      onClick: a,
      "data-radix-vue-collection-item": ""
    }, {
      default: withCtx(() => [
        renderSlot(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "data-active", "aria-current", "as-child"]));
  }
});
var Au = defineComponent({
  inheritAttrs: false,
  __name: "NavigationMenuList",
  props: {
    asChild: { type: Boolean },
    as: { default: "ul" }
  },
  setup(o) {
    const t = o, e = inject(Le), { primitiveElement: a, currentElement: s } = x(), { setCollection: n } = de();
    return n(s), onMounted(() => {
      e == null || e.onIndicatorTrackChange(s.value);
    }), (l, r) => (openBlock(), createBlock(unref(A), {
      ref_key: "primitiveElement",
      ref: a,
      style: { position: "relative" }
    }, {
      default: withCtx(() => {
        var i;
        return [
          createVNode(unref(A), mergeProps(l.$attrs, {
            "as-child": t.asChild,
            as: l.as,
            "data-orientation": (i = unref(e)) == null ? void 0 : i.orientation
          }), {
            default: withCtx(() => [
              renderSlot(l.$slots, "default")
            ]),
            _: 3
          }, 16, ["as-child", "as", "data-orientation"])
        ];
      }),
      _: 3
    }, 512));
  }
});
var Ul = ["aria-owns"];
var Bu = defineComponent({
  inheritAttrs: false,
  __name: "NavigationMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(o) {
    const t = o, e = inject(Le), a = inject(Ia), { primitiveElement: s, currentElement: n } = x(), l = ref(""), r = ref(""), i = ref(false), d = ref(false), c = computed(() => (a == null ? void 0 : a.value) === (e == null ? void 0 : e.modelValue.value));
    onMounted(() => {
      a.triggerRef = n, l.value = an(e.baseId, a.value), r.value = Ma(e.baseId, a.value);
    });
    const p = () => {
      d.value = false, a.wasEscapeCloseRef.value = false;
    }, f = ($) => {
      if ($.pointerType === "mouse") {
        if (t.disabled || d.value || a.wasEscapeCloseRef.value || i.value)
          return;
        e.onTriggerEnter(a.value), i.value = true;
      }
    }, m = ($) => {
      if ($.pointerType === "mouse") {
        if (t.disabled)
          return;
        e.onTriggerLeave(), i.value = false;
      }
    }, v = () => {
      c.value ? e == null || e.onItemSelect("") : e == null || e.onItemSelect(a.value), d.value = c.value;
    }, g = ($) => {
      const B = { horizontal: "ArrowDown", vertical: e.dir === "rtl" ? "ArrowLeft" : "ArrowRight" }[e.orientation];
      c.value && $.key === B && (a.onEntryKeyDown(), $.preventDefault(), $.stopPropagation());
    }, h2 = ($) => {
      a.focusProxyRef.value = oe($);
    }, C = ($) => {
      const P = document.getElementById(a.contentId), B = $.relatedTarget, R = B === n.value, K = P == null ? void 0 : P.contains(B);
      (R || !K) && a.onFocusProxyEnter(R ? "start" : "end");
    };
    return ($, P) => {
      var B;
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(unref(A), mergeProps({
          ref_key: "primitiveElement",
          ref: s,
          id: l.value,
          disabled: $.disabled,
          "data-disabled": $.disabled ? "" : void 0,
          "data-state": unref(Yt)(c.value),
          "aria-expanded": c.value,
          "aria-controls": r.value,
          "as-child": t.asChild,
          as: $.as,
          onPointerenter: p,
          onPointermove: f,
          onPointerleave: m,
          onClick: v,
          onKeydown: g
        }, $.$attrs, { "data-radix-vue-collection-item": "" }), {
          default: withCtx(() => [
            renderSlot($.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "disabled", "data-disabled", "data-state", "aria-expanded", "aria-controls", "as-child", "as"]),
        c.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          createVNode(unref(Ho), {
            "aria-hidden": "",
            tabIndex: 0,
            ref: h2,
            onFocus: C
          }),
          (B = unref(e)) != null && B.viewport ? (openBlock(), createElementBlock("span", {
            key: 0,
            "aria-owns": r.value
          }, null, 8, Ul)) : createCommentVNode("", true)
        ], 64)) : createCommentVNode("", true)
      ], 64);
    };
  }
});
var Tu = defineComponent({
  inheritAttrs: false,
  __name: "NavigationMenuViewport",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const { primitiveElement: t, currentElement: e } = x(), a = inject(Le), s = ref(), n = computed(() => !!(a != null && a.modelValue.value)), l = computed(
      () => n.value ? a.modelValue.value : a.previousValue.value
    );
    watch(e, () => {
      a.onViewportChange(e.value);
    });
    const r = computed(
      () => (
        // @ts-ignore
        Array.from(a == null ? void 0 : a.viewportContent.value.values())
      )
    ), i = ref();
    return we(i, () => {
      i.value && (s.value = {
        width: i.value.offsetWidth,
        height: i.value.offsetHeight
      });
    }), (d, c) => (openBlock(), createBlock(unref(Ee), { present: n.value }, {
      default: withCtx(() => {
        var p, f, m, v;
        return [
          createVNode(unref(A), mergeProps(d.$attrs, {
            as: d.as,
            "as-child": d.asChild,
            ref_key: "primitiveElement",
            ref: t,
            "data-state": unref(Yt)(n.value),
            "data-orientation": (p = unref(a)) == null ? void 0 : p.orientation,
            style: {
              // Prevent interaction when animating out
              pointerEvents: !n.value && ((f = unref(a)) != null && f.isRootMenu) ? "none" : void 0,
              ["--radix-navigation-menu-viewport-width"]: s.value ? ((m = s.value) == null ? void 0 : m.width) + "px" : void 0,
              ["--radix-navigation-menu-viewport-height"]: s.value ? ((v = s.value) == null ? void 0 : v.height) + "px" : void 0
            },
            onPointerenter: c[0] || (c[0] = (g) => {
              var h2;
              return (h2 = unref(a)) == null ? void 0 : h2.onContentEnter(l.value);
            }),
            onPointerleave: c[1] || (c[1] = (g) => {
              var h2;
              return (h2 = unref(a)) == null ? void 0 : h2.onContentLeave();
            })
          }), {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList(r.value, (g) => {
                var h2, C;
                return openBlock(), createBlock(unref(Ee), {
                  key: (h2 = g.props) == null ? void 0 : h2.value,
                  present: l.value === ((C = g.props) == null ? void 0 : C.value)
                }, {
                  default: withCtx(() => [
                    createVNode(nn, mergeProps({
                      ref_for: true,
                      ref: ($) => {
                        var P;
                        l.value === ((P = g.props) == null ? void 0 : P.value) && $ && (i.value = unref(oe)($.$el));
                      }
                    }, { ...g.props, ...g.parentProps }), {
                      default: withCtx(() => [
                        (openBlock(), createBlock(resolveDynamicComponent(g)))
                      ]),
                      _: 2
                    }, 1040)
                  ]),
                  _: 2
                }, 1032, ["present"]);
              }), 128))
            ]),
            _: 1
          }, 16, ["as", "as-child", "data-state", "data-orientation", "style"])
        ];
      }),
      _: 1
    }, 8, ["present"]));
  }
});
var ne = Symbol();
var ku = defineComponent({
  __name: "ScrollAreaRoot",
  props: {
    type: { default: "hover" },
    dir: { default: "ltr" },
    scrollHideDelay: { default: 600 },
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o, { primitiveElement: e, currentElement: a } = x(), s = ref(0), n = ref(0), l = ref(), r = ref(), i = ref(), d = ref(), c = ref(false), p = ref(false), f = (D) => {
      l.value = D;
    }, m = (D) => {
      r.value = D;
    }, v = (D) => {
      i.value = D;
    }, g = (D) => {
      d.value = D;
    }, h2 = (D) => {
      c.value = D;
    }, C = (D) => {
      p.value = D;
    }, $ = (D) => {
      s.value = D;
    }, P = (D) => {
      n.value = D;
    }, { type: B, dir: R, scrollHideDelay: K } = toRefs(t);
    return provide(ne, {
      type: B,
      dir: R,
      scrollHideDelay: K,
      scrollArea: a,
      viewport: l,
      onViewportChange: f,
      content: r,
      onContentChange: m,
      scrollbarX: i,
      scrollbarXEnabled: c,
      scrollbarY: d,
      scrollbarYEnabled: p,
      onScrollbarXChange: v,
      onScrollbarYChange: g,
      onScrollbarXEnabledChange: h2,
      onScrollbarYEnabledChange: C,
      onCornerWidthChange: $,
      onCornerHeightChange: P
    }), (D, Q) => (openBlock(), createBlock(unref(A), {
      ref_key: "primitiveElement",
      ref: e,
      "as-child": t.asChild,
      as: D.as,
      dir: t.dir,
      style: normalizeStyle({
        position: "relative",
        // Pass corner sizes as CSS vars to reduce re-renders of context consumers
        ["--radix-scroll-area-corner-width"]: s.value + "px",
        ["--radix-scroll-area-corner-height"]: n.value + "px"
      })
    }, {
      default: withCtx(() => [
        renderSlot(D.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "dir", "style"]));
  }
});
var Du = defineComponent({
  inheritAttrs: false,
  __name: "ScrollAreaViewport",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o, e = inject(ne), { primitiveElement: a, currentElement: s } = x(), n = ref();
    return onMounted(() => {
      e == null || e.onViewportChange(n.value), e == null || e.onContentChange(s.value);
    }), (l, r) => {
      var i, d;
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(unref(A), { as: "style" }, {
          default: withCtx(() => [
            createTextVNode(" /* Hide scrollbars cross-browser and enable momentum scroll for touch devices */ [data-radix-scroll-area-viewport] { -ms-overflow-style: none; -webkit-overflow-scrolling: touch; } [data-radix-scroll-area-viewport]::-webkit-scrollbar { display: none; } ")
          ]),
          _: 1
        }),
        createBaseVNode("div", mergeProps({
          ref_key: "viewportElement",
          ref: n,
          "data-radix-scroll-area-viewport": "",
          style: {
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
            overflowX: (i = unref(e)) != null && i.scrollbarXEnabled.value ? "scroll" : "hidden",
            overflowY: (d = unref(e)) != null && d.scrollbarYEnabled.value ? "scroll" : "hidden"
          }
        }, l.$attrs), [
          createVNode(unref(A), {
            ref_key: "primitiveElement",
            ref: a,
            style: { minWidth: "100%", display: "table" },
            "as-child": t.asChild,
            as: l.as
          }, {
            default: withCtx(() => [
              renderSlot(l.$slots, "default")
            ]),
            _: 3
          }, 8, ["as-child", "as"])
        ], 16)
      ], 64);
    };
  }
});
function Gl(o, [t, e]) {
  return Math.min(e, Math.max(t, o));
}
function sn(o, t) {
  return (e) => {
    if (o[0] === o[1] || t[0] === t[1])
      return t[0];
    const a = (t[1] - t[0]) / (o[1] - o[0]);
    return t[0] + a * (e - o[0]);
  };
}
function Ut(o) {
  const t = ln(o.viewport, o.content), e = o.scrollbar.paddingStart + o.scrollbar.paddingEnd, a = (o.scrollbar.size - e) * t;
  return Math.max(a, 18);
}
function ln(o, t) {
  const e = o / t;
  return isNaN(e) ? 0 : e;
}
var Xl = (o, t = () => {
}) => {
  let e = { left: o.scrollLeft, top: o.scrollTop }, a = 0;
  return function s() {
    const n = { left: o.scrollLeft, top: o.scrollTop }, l = e.left !== n.left, r = e.top !== n.top;
    (l || r) && t(), e = n, a = window.requestAnimationFrame(s);
  }(), () => window.cancelAnimationFrame(a);
};
function lo(o, t, e = "ltr") {
  const a = Ut(t), s = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, n = t.scrollbar.size - s, l = t.content - t.viewport, r = n - a, i = e === "ltr" ? [0, l] : [l * -1, 0], d = Gl(
    o,
    i
  );
  return sn([0, l], [0, r])(d);
}
function Et(o) {
  return o ? parseInt(o, 10) : 0;
}
function ql(o, t, e, a = "ltr") {
  const s = Ut(e), n = s / 2, l = t || n, r = s - l, i = e.scrollbar.paddingStart + l, d = e.scrollbar.size - e.scrollbar.paddingEnd - r, c = e.content - e.viewport, p = a === "ltr" ? [0, c] : [c * -1, 0];
  return sn(
    [i, d],
    p
  )(o);
}
function ro(o, t) {
  return o > 0 && o < t;
}
var rn = defineComponent({
  __name: "ScrollAreaScrollbarImpl",
  props: {
    isHorizontal: { type: Boolean }
  },
  emits: ["onDragScroll", "onWheelScroll", "onThumbPointerDown"],
  setup(o, { emit: t }) {
    const e = o, a = inject(ne), s = inject(
      gt
    ), n = inject(_t), { primitiveElement: l, currentElement: r } = x(), i = ref(""), d = ref();
    function c(h2) {
      var C, $;
      if (d.value) {
        const P = h2.clientX - ((C = d.value) == null ? void 0 : C.left), B = h2.clientY - (($ = d.value) == null ? void 0 : $.top);
        t("onDragScroll", { x: P, y: B });
      }
    }
    const p = (h2) => {
      h2.button === 0 && (h2.target.setPointerCapture(h2.pointerId), d.value = r.value.getBoundingClientRect(), i.value = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", a != null && a.viewport && (a.viewport.value.style.scrollBehavior = "auto"), c(h2));
    }, f = (h2) => {
      c(h2);
    }, m = (h2) => {
      const C = h2.target;
      C.hasPointerCapture(h2.pointerId) && C.releasePointerCapture(h2.pointerId), document.body.style.webkitUserSelect = i.value, a != null && a.viewport && (a.viewport.value.style.scrollBehavior = ""), d.value = void 0;
    }, v = (h2) => {
      var B;
      if (!s)
        return;
      const C = h2.target, $ = (B = r.value) == null ? void 0 : B.contains(C), P = s.sizes.value.content - s.sizes.value.viewport;
      $ && s.handleWheelScroll(h2, P);
    };
    onMounted(() => {
      document.addEventListener("wheel", v, { passive: false });
    }), onUnmounted(() => {
      document.removeEventListener("wheel", v);
    });
    const g = () => {
      var h2, C, $, P, B, R;
      r.value && (e.isHorizontal ? s == null || s.handleSizeChange({
        content: ((h2 = a == null ? void 0 : a.viewport.value) == null ? void 0 : h2.scrollWidth) ?? 0,
        viewport: ((C = a == null ? void 0 : a.viewport.value) == null ? void 0 : C.offsetWidth) ?? 0,
        scrollbar: {
          size: (($ = r.value) == null ? void 0 : $.clientWidth) ?? 0,
          paddingStart: Et(getComputedStyle(r.value).paddingLeft),
          paddingEnd: Et(getComputedStyle(r.value).paddingRight)
        }
      }) : s == null || s.handleSizeChange({
        content: ((P = a == null ? void 0 : a.viewport.value) == null ? void 0 : P.scrollHeight) ?? 0,
        viewport: ((B = a == null ? void 0 : a.viewport.value) == null ? void 0 : B.offsetHeight) ?? 0,
        scrollbar: {
          size: ((R = r.value) == null ? void 0 : R.clientHeight) ?? 0,
          paddingStart: Et(getComputedStyle(r.value).paddingLeft),
          paddingEnd: Et(getComputedStyle(r.value).paddingRight)
        }
      }));
    };
    return we(r, g), we(a == null ? void 0 : a.content, g), (h2, C) => {
      var $, P;
      return openBlock(), createBlock(unref(A), {
        ref_key: "primitiveElement",
        ref: l,
        style: { position: "absolute" },
        "data-scrollbarimpl": "",
        as: ($ = unref(n)) == null ? void 0 : $.as.value,
        "as-child": (P = unref(n)) == null ? void 0 : P.asChild.value,
        onPointerdown: p,
        onPointermove: f,
        onPointerup: m
      }, {
        default: withCtx(() => [
          renderSlot(h2.$slots, "default")
        ]),
        _: 3
      }, 8, ["as", "as-child"]);
    };
  }
});
var Jl = defineComponent({
  __name: "ScrollAreaScrollbarX",
  setup(o) {
    const t = inject(ne), e = inject(
      gt
    ), { primitiveElement: a, currentElement: s } = x();
    onMounted(() => {
      s.value && (t == null || t.onScrollbarXChange(s.value));
    });
    const n = computed(() => e == null ? void 0 : e.sizes.value);
    return (l, r) => {
      var i, d, c, p;
      return openBlock(), createBlock(rn, {
        "is-horizontal": true,
        "data-orientation": "horizontal",
        ref_key: "primitiveElement",
        ref: a,
        onOnDragScroll: r[0] || (r[0] = (f) => {
          var m;
          return (m = unref(e)) == null ? void 0 : m.onDragScroll(f.x);
        }),
        style: normalizeStyle({
          bottom: 0,
          left: ((d = (i = unref(t)) == null ? void 0 : i.dir) == null ? void 0 : d.value) === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
          right: ((p = (c = unref(t)) == null ? void 0 : c.dir) == null ? void 0 : p.value) === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
          ["--radix-scroll-area-thumb-width"]: n.value ? unref(Ut)(n.value) + "px" : void 0
        })
      }, {
        default: withCtx(() => [
          renderSlot(l.$slots, "default")
        ]),
        _: 3
      }, 8, ["style"]);
    };
  }
});
var Ql = defineComponent({
  __name: "ScrollAreaScrollbarY",
  setup(o) {
    const t = inject(ne), e = inject(
      gt
    ), { primitiveElement: a, currentElement: s } = x();
    onMounted(() => {
      s.value && (t == null || t.onScrollbarYChange(s.value));
    });
    const n = computed(() => e == null ? void 0 : e.sizes.value);
    return (l, r) => {
      var i, d, c, p;
      return openBlock(), createBlock(rn, {
        "is-horizontal": false,
        "data-orientation": "vertical",
        ref_key: "primitiveElement",
        ref: a,
        onOnDragScroll: r[0] || (r[0] = (f) => {
          var m;
          return (m = unref(e)) == null ? void 0 : m.onDragScroll(f.y);
        }),
        style: normalizeStyle({
          top: 0,
          right: ((d = (i = unref(t)) == null ? void 0 : i.dir) == null ? void 0 : d.value) === "ltr" ? 0 : void 0,
          left: ((p = (c = unref(t)) == null ? void 0 : c.dir) == null ? void 0 : p.value) === "rtl" ? 0 : void 0,
          bottom: "var(--radix-scroll-area-corner-height)",
          ["--radix-scroll-area-thumb-height"]: n.value ? unref(Ut)(n.value) + "px" : void 0
        })
      }, {
        default: withCtx(() => [
          renderSlot(l.$slots, "default")
        ]),
        _: 3
      }, 8, ["style"]);
    };
  }
});
var gt = Symbol();
var xa = defineComponent({
  __name: "ScrollAreaScrollbarVisible",
  setup(o) {
    const t = inject(ne), e = inject(_t), a = ref({
      content: 0,
      viewport: 0,
      scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
    }), s = computed(() => {
      const h2 = ln(a.value.viewport, a.value.content);
      return h2 > 0 && h2 < 1;
    }), n = ref(), l = ref(0), r = (h2, C) => {
      if (f.value) {
        const $ = t.viewport.value.scrollLeft + h2.deltaY;
        t.viewport.value.scrollLeft = $, ro($, C) && h2.preventDefault();
      } else {
        const $ = t.viewport.value.scrollTop + h2.deltaY;
        t.viewport.value.scrollTop = $, ro($, C) && h2.preventDefault();
      }
    }, i = (h2, C) => {
      f.value ? l.value = C.x : l.value = C.y;
    }, d = (h2) => {
      l.value = 0;
    }, c = (h2) => {
      a.value = h2;
    };
    function p(h2, C) {
      return ql(
        h2,
        l.value,
        a.value,
        C
      );
    }
    const f = computed(
      () => e == null ? void 0 : e.isHorizontal.value
    );
    return provide(
      gt,
      {
        sizes: a,
        hasThumb: s,
        handleWheelScroll: r,
        handleThumbDown: i,
        handleThumbUp: d,
        handleSizeChange: c,
        onThumbPositionChange: () => {
          var h2;
          if (f.value) {
            if (t != null && t.viewport.value && n.value) {
              const C = t == null ? void 0 : t.viewport.value.scrollLeft, $ = lo(
                C,
                a.value,
                (h2 = t == null ? void 0 : t.dir) == null ? void 0 : h2.value
              );
              n.value.style.transform = `translate3d(${$}px, 0, 0)`;
            }
          } else if (t != null && t.viewport.value && n.value) {
            const C = t == null ? void 0 : t.viewport.value.scrollTop, $ = lo(C, a.value);
            n.value.style.transform = `translate3d(0, ${$}px, 0)`;
          }
        },
        onThumbChange: (h2) => {
          n.value = h2;
        },
        onDragScroll: (h2) => {
          var C;
          f.value ? t.viewport.value.scrollLeft = p(
            h2,
            (C = t.dir) == null ? void 0 : C.value
          ) : t.viewport.value.scrollTop = p(h2);
        }
      }
    ), (h2, C) => f.value ? (openBlock(), createBlock(Jl, normalizeProps(mergeProps({ key: 0 }, h2.$attrs)), {
      default: withCtx(() => [
        renderSlot(h2.$slots, "default")
      ]),
      _: 3
    }, 16)) : (openBlock(), createBlock(Ql, normalizeProps(mergeProps({ key: 1 }, h2.$attrs)), {
      default: withCtx(() => [
        renderSlot(h2.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var un = defineComponent({
  __name: "ScrollAreaScrollbarAuto",
  setup(o) {
    const t = inject(ne), e = inject(_t), a = ref(false), s = ua(() => {
      if (t != null && t.viewport.value) {
        const n = (t == null ? void 0 : t.viewport.value.offsetWidth) < (t == null ? void 0 : t.viewport.value.scrollWidth), l = (t == null ? void 0 : t.viewport.value.offsetHeight) < (t == null ? void 0 : t.viewport.value.scrollHeight);
        a.value = e != null && e.isHorizontal.value ? n : l;
      }
    }, 10);
    return we(t == null ? void 0 : t.viewport, s), we(t == null ? void 0 : t.content, s), (n, l) => a.value ? (openBlock(), createBlock(xa, mergeProps({ key: 0 }, n.$attrs, {
      "data-state": a.value ? "visible" : "hidden"
    }), {
      default: withCtx(() => [
        renderSlot(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-state"])) : createCommentVNode("", true);
  }
});
var Zl = {
  inheritAttrs: false
};
var Vl = defineComponent({
  ...Zl,
  __name: "ScrollAreaScrollbarHover",
  setup(o) {
    const t = inject(ne);
    let e;
    const a = ref(false), s = () => {
      window.clearTimeout(e), a.value = true;
    }, n = () => {
      e = window.setTimeout(() => {
        a.value = false;
      }, t == null ? void 0 : t.scrollHideDelay.value);
    };
    return onMounted(() => {
      const l = t == null ? void 0 : t.scrollArea.value;
      l && (l.addEventListener("pointerenter", s), l.addEventListener("pointerleave", n));
    }), onUnmounted(() => {
      const l = t == null ? void 0 : t.scrollArea.value;
      l && (window.clearTimeout(e), l.removeEventListener("pointerenter", s), l.removeEventListener("pointerleave", n));
    }), (l, r) => a.value ? (openBlock(), createBlock(un, mergeProps({ key: 0 }, l.$attrs, {
      "data-state": a.value ? "visible" : "hidden"
    }), {
      default: withCtx(() => [
        renderSlot(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-state"])) : createCommentVNode("", true);
  }
});
var jl = defineComponent({
  __name: "ScrollAreaScrollbarScroll",
  setup(o) {
    const t = inject(ne), e = inject(_t), { state: a, dispatch: s } = go("hidden", {
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
      a.value === "idle" && window.setTimeout(
        () => s("HIDE"),
        t == null ? void 0 : t.scrollHideDelay.value
      );
    });
    const n = ua(() => s("SCROLL_END"), 100);
    return watchEffect(() => {
      const l = t == null ? void 0 : t.viewport.value, r = e != null && e.isHorizontal.value ? "scrollLeft" : "scrollTop";
      if (l) {
        let i = l[r];
        const d = () => {
          const c = l[r];
          i !== c && (s("SCROLL"), n()), i = c;
        };
        l.addEventListener("scroll", d);
      }
    }), (l, r) => unref(a) !== "hidden" ? (openBlock(), createBlock(xa, normalizeProps(mergeProps({ key: 0 }, l.$attrs)), {
      default: withCtx(() => [
        renderSlot(l.$slots, "default")
      ]),
      _: 3
    }, 16)) : createCommentVNode("", true);
  }
});
var _t = Symbol();
var er = {
  inheritAttrs: false
};
var Mu = defineComponent({
  ...er,
  __name: "ScrollAreaScrollbar",
  props: {
    orientation: { default: "vertical" },
    forceMount: { type: Boolean, default: void 0 },
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(o) {
    const t = o, e = inject(ne), a = computed(() => t.orientation === "horizontal");
    watch(
      a,
      () => {
        a.value ? e == null || e.onScrollbarXEnabledChange(true) : e == null || e.onScrollbarYEnabledChange(true);
      },
      { immediate: true }
    ), onUnmounted(() => {
      e == null || e.onScrollbarXEnabledChange(false), e == null || e.onScrollbarYEnabledChange(false);
    });
    const { orientation: s, forceMount: n, asChild: l, as: r } = toRefs(t);
    return provide(_t, {
      orientation: s,
      forceMount: n,
      isHorizontal: a,
      as: r,
      asChild: l
    }), (i, d) => {
      var c, p, f, m;
      return ((c = unref(e)) == null ? void 0 : c.type.value) === "hover" ? (openBlock(), createBlock(Vl, mergeProps({ key: 0 }, i.$attrs, { forceMount: unref(n) }), {
        default: withCtx(() => [
          renderSlot(i.$slots, "default")
        ]),
        _: 3
      }, 16, ["forceMount"])) : ((p = unref(e)) == null ? void 0 : p.type.value) === "scroll" ? (openBlock(), createBlock(jl, mergeProps({ key: 1 }, i.$attrs, { forceMount: unref(n) }), {
        default: withCtx(() => [
          renderSlot(i.$slots, "default")
        ]),
        _: 3
      }, 16, ["forceMount"])) : ((f = unref(e)) == null ? void 0 : f.type.value) === "auto" ? (openBlock(), createBlock(un, mergeProps({ key: 2 }, i.$attrs, { forceMount: unref(n) }), {
        default: withCtx(() => [
          renderSlot(i.$slots, "default")
        ]),
        _: 3
      }, 16, ["forceMount"])) : ((m = unref(e)) == null ? void 0 : m.type.value) === "always" ? (openBlock(), createBlock(xa, mergeProps({ key: 3 }, i.$attrs, {
        "data-state": "visible",
        forceMount: unref(n)
      }), {
        default: withCtx(() => [
          renderSlot(i.$slots, "default")
        ]),
        _: 3
      }, 16, ["forceMount"])) : createCommentVNode("", true);
    };
  }
});
var Iu = defineComponent({
  __name: "ScrollAreaThumb",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o, e = inject(ne), a = inject(
      gt
    ), s = (f) => {
      const v = f.target.getBoundingClientRect(), g = f.clientX - v.left, h2 = f.clientY - v.top;
      a == null || a.handleThumbDown(f, { x: g, y: h2 });
    }, n = (f) => {
      a == null || a.handleThumbUp(f);
    }, { primitiveElement: l, currentElement: r } = x(), i = ref(), d = computed(() => e == null ? void 0 : e.viewport.value), c = () => {
      if (!i.value) {
        const f = Xl(
          d.value,
          a == null ? void 0 : a.onThumbPositionChange
        );
        i.value = f, a == null || a.onThumbPositionChange();
      }
    }, p = computed(() => a == null ? void 0 : a.sizes.value);
    return Fn(p, () => {
      a == null || a.onThumbChange(r.value), d.value && (a == null || a.onThumbPositionChange(), d.value.addEventListener("scroll", c));
    }), onUnmounted(() => {
      var f;
      d.value.removeEventListener("scroll", c), (f = e == null ? void 0 : e.viewport.value) == null || f.removeEventListener("scroll", c);
    }), (f, m) => {
      var v;
      return openBlock(), createBlock(unref(A), {
        ref_key: "primitiveElement",
        ref: l,
        "data-state": (v = unref(a)) != null && v.hasThumb ? "visible" : "hidden",
        style: normalizeStyle({
          width: "var(--radix-scroll-area-thumb-width)",
          height: "var(--radix-scroll-area-thumb-height)"
        }),
        "as-child": t.asChild,
        as: f.as,
        onPointerdown: s,
        onPointerup: n
      }, {
        default: withCtx(() => [
          renderSlot(f.$slots, "default")
        ]),
        _: 3
      }, 8, ["data-state", "style", "as-child", "as"]);
    };
  }
});
var tr = defineComponent({
  __name: "ScrollAreaCornerImpl",
  setup(o) {
    const t = inject(ne), e = ref(0), a = ref(0), s = computed(() => !!e.value && !!a.value), n = () => {
      var i;
      const r = ((i = t == null ? void 0 : t.scrollbarX.value) == null ? void 0 : i.offsetHeight) || 0;
      t == null || t.onCornerHeightChange(r), a.value = r;
    }, l = () => {
      var i;
      const r = ((i = t == null ? void 0 : t.scrollbarY.value) == null ? void 0 : i.offsetWidth) || 0;
      t == null || t.onCornerWidthChange(r), e.value = r;
    };
    return we(t == null ? void 0 : t.scrollbarX.value, n), we(t == null ? void 0 : t.scrollbarY.value, l), watch(() => t == null ? void 0 : t.scrollbarX.value, n), watch(() => t == null ? void 0 : t.scrollbarY.value, l), (r, i) => {
      var d;
      return s.value ? (openBlock(), createBlock(unref(A), mergeProps({
        key: 0,
        style: {
          width: e.value + "px",
          height: a.value + "px",
          position: "absolute",
          right: unref(t).dir.value === "ltr" ? 0 : void 0,
          left: unref(t).dir.value === "rtl" ? 0 : void 0,
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
var xu = defineComponent({
  __name: "ScrollAreaCorner",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o, e = inject(ne), a = computed(
      () => !!(e != null && e.scrollbarX.value) && !!e.scrollbarY.value
    ), s = computed(
      () => (e == null ? void 0 : e.type.value) !== "scroll" && a.value
    );
    return (n, l) => s.value ? (openBlock(), createBlock(tr, normalizeProps(mergeProps({ key: 0 }, t)), {
      default: withCtx(() => [
        renderSlot(n.$slots, "default")
      ]),
      _: 3
    }, 16)) : createCommentVNode("", true);
  }
});
export {
  sr as AccordionContent,
  lr as AccordionHeader,
  nr as AccordionItem,
  or as AccordionRoot,
  rr as AccordionTrigger,
  Xr as AlertDialogAction,
  Yr as AlertDialogCancel,
  zr as AlertDialogContent,
  Gr as AlertDialogDescription,
  Wr as AlertDialogOverlay,
  Hr as AlertDialogPortal,
  Kr as AlertDialogRoot,
  Ur as AlertDialogTitle,
  Fr as AlertDialogTrigger,
  yr as AspectRatio,
  ai as AvatarFallback,
  ti as AvatarImage,
  ei as AvatarRoot,
  ur as CheckboxIndicator,
  ir as CheckboxRoot,
  ds as CollapsibleContent,
  rs as CollapsibleRoot,
  is as CollapsibleTrigger,
  Ni as ContextMenuArrow,
  Wi as ContextMenuCheckboxItem,
  Li as ContextMenuContent,
  Hi as ContextMenuGroup,
  Fi as ContextMenuItem,
  Yi as ContextMenuItemIndicator,
  Ui as ContextMenuLabel,
  Ri as ContextMenuPortal,
  Gi as ContextMenuRadioGroup,
  Xi as ContextMenuRadioItem,
  Ii as ContextMenuRoot,
  zi as ContextMenuSeparator,
  Ki as ContextMenuSub,
  qi as ContextMenuSubContent,
  Ji as ContextMenuSubTrigger,
  xi as ContextMenuTrigger,
  Rr as DialogClose,
  Ir as DialogContent,
  Nr as DialogDescription,
  xr as DialogOverlay,
  Mr as DialogPortal,
  kr as DialogRoot,
  Lr as DialogTitle,
  Dr as DialogTrigger,
  Ei as DropdownMenuArrow,
  Oi as DropdownMenuCheckboxItem,
  wi as DropdownMenuContent,
  $i as DropdownMenuGroup,
  Ci as DropdownMenuItem,
  Pi as DropdownMenuItemIndicator,
  Ai as DropdownMenuLabel,
  bi as DropdownMenuPortal,
  Bi as DropdownMenuRadioGroup,
  Ti as DropdownMenuRadioItem,
  gi as DropdownMenuRoot,
  Si as DropdownMenuSeparator,
  ki as DropdownMenuSub,
  Di as DropdownMenuSubContent,
  Mi as DropdownMenuSubTrigger,
  _i as DropdownMenuTrigger,
  ci as HoverCardArrow,
  di as HoverCardContent,
  ui as HoverCardPortal,
  ri as HoverCardRoot,
  ii as HoverCardTrigger,
  fr as Label,
  cu as MenubarArrow,
  hu as MenubarCheckboxItem,
  du as MenubarContent,
  mu as MenubarGroup,
  fu as MenubarItem,
  yu as MenubarItemIndicator,
  gu as MenubarLabel,
  ru as MenubarMenu,
  uu as MenubarPortal,
  _u as MenubarRadioGroup,
  bu as MenubarRadioItem,
  lu as MenubarRoot,
  vu as MenubarSeparator,
  pu as MenubarSub,
  wu as MenubarSubContent,
  Eu as MenubarSubTrigger,
  iu as MenubarTrigger,
  Su as NavigationMenuContent,
  Ou as NavigationMenuIndicator,
  $u as NavigationMenuItem,
  Pu as NavigationMenuLink,
  Au as NavigationMenuList,
  Cu as NavigationMenuRoot,
  Bu as NavigationMenuTrigger,
  Tu as NavigationMenuViewport,
  hi as PopoverArrow,
  yi as PopoverClose,
  vi as PopoverContent,
  mi as PopoverPortal,
  pi as PopoverRoot,
  fi as PopoverTrigger,
  Tr as ProgressIndicator,
  Br as ProgressRoot,
  Ar as RadioGroupIndicator,
  Pr as RadioGroupItem,
  Or as RadioGroupRoot,
  xu as ScrollAreaCorner,
  ku as ScrollAreaRoot,
  Mu as ScrollAreaScrollbar,
  Iu as ScrollAreaThumb,
  Du as ScrollAreaViewport,
  eu as SelectArrow,
  ji as SelectContent,
  nu as SelectGroup,
  su as SelectItem,
  au as SelectItemIndicator,
  ou as SelectLabel,
  Vi as SelectPortal,
  Qi as SelectRoot,
  tu as SelectSeparator,
  Zi as SelectTrigger,
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
  Qr as ToolbarLink,
  qr as ToolbarRoot,
  jr as ToolbarSeparator,
  Zr as ToolbarToggleGroup,
  Vr as ToolbarToggleItem,
  li as TooltipArrow,
  si as TooltipContent,
  oi as TooltipRoot,
  ni as TooltipTrigger
};
//# sourceMappingURL=radix-vue.js.map
