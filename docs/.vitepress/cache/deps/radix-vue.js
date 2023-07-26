import {
  Fragment,
  Teleport,
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
  vShow,
  watch,
  watchEffect,
  withCtx,
  withDirectives,
  withKeys,
  withModifiers
} from "./chunk-OX6HOUGK.js";
import "./chunk-76J2PTFD.js";

// node_modules/.pnpm/radix-vue@0.1.12_vue@3.3.4/node_modules/radix-vue/dist/index.js
var Ua = Object.defineProperty;
var qa = Object.defineProperties;
var Ga = Object.getOwnPropertyDescriptors;
var vo = Object.getOwnPropertySymbols;
var Xa = Object.prototype.hasOwnProperty;
var Fa = Object.prototype.propertyIsEnumerable;
var ho = (a, o, e) => o in a ? Ua(a, o, { enumerable: true, configurable: true, writable: true, value: e }) : a[o] = e;
var Ja = (a, o) => {
  for (var e in o || (o = {}))
    Xa.call(o, e) && ho(a, e, o[e]);
  if (vo)
    for (var e of vo(o))
      Fa.call(o, e) && ho(a, e, o[e]);
  return a;
};
var Za = (a, o) => qa(a, Ga(o));
function Qa(a, o) {
  var e;
  const t = shallowRef();
  return watchEffect(() => {
    t.value = a();
  }, Za(Ja({}, o), {
    flush: (e = o == null ? void 0 : o.flush) != null ? e : "sync"
  })), readonly(t);
}
function Va(a, o) {
  let e, t, l;
  const n = ref(true), r = () => {
    n.value = true, l();
  };
  watch(a, r, { flush: "sync" });
  const s = typeof o == "function" ? o : o.get, i = typeof o == "function" ? void 0 : o.set, d = customRef((p, c) => (t = p, l = c, {
    get() {
      return n.value && (e = s(), n.value = false), t(), e;
    },
    set(f) {
      i == null || i(f);
    }
  }));
  return Object.isExtensible(d) && (d.trigger = r), d;
}
function Ho(a) {
  return getCurrentScope() ? (onScopeDispose(a), true) : false;
}
function ja(a) {
  let o = false, e;
  const t = effectScope(true);
  return (...l) => (o || (e = t.run(() => a(...l)), o = true), e);
}
function vt(a) {
  return typeof a == "function" ? a() : unref(a);
}
var zo = typeof window < "u";
var en = (a) => typeof a < "u";
var ht = () => {
};
var tn = on();
function on() {
  var a;
  return zo && ((a = window == null ? void 0 : window.navigator) == null ? void 0 : a.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
}
function an(a, o) {
  function e(...t) {
    return new Promise((l, n) => {
      Promise.resolve(a(() => o.apply(this, t), { fn: o, thisArg: this, args: t })).then(l).catch(n);
    });
  }
  return e;
}
function nn(a, o = {}) {
  let e, t, l = ht;
  const n = (s) => {
    clearTimeout(s), l(), l = ht;
  };
  return (s) => {
    const i = vt(a), d = vt(o.maxWait);
    return e && n(e), i <= 0 || d !== void 0 && d <= 0 ? (t && (n(t), t = null), Promise.resolve(s())) : new Promise((p, c) => {
      l = o.rejectOnCancel ? c : p, d && !t && (t = setTimeout(() => {
        e && n(e), t = null, p(s());
      }, d)), e = setTimeout(() => {
        t && n(t), t = null, p(s());
      }, i);
    });
  };
}
function qt(a, o = 200, e = {}) {
  return an(
    nn(o, e),
    a
  );
}
function ln(a, o, e = {}) {
  var t, l;
  const {
    flush: n = "sync",
    deep: r = false,
    immediate: s = true,
    direction: i = "both",
    transform: d = {}
  } = e;
  let p, c;
  const f = (t = d.ltr) != null ? t : (v) => v, m = (l = d.rtl) != null ? l : (v) => v;
  return (i === "both" || i === "ltr") && (p = watch(
    a,
    (v) => o.value = f(v),
    { flush: n, deep: r, immediate: s }
  )), (i === "both" || i === "rtl") && (c = watch(
    o,
    (v) => a.value = m(v),
    { flush: n, deep: r, immediate: s }
  )), () => {
    p == null || p(), c == null || c();
  };
}
function rn(a, o, e) {
  const t = watch(a, (...l) => (nextTick(() => t()), o(...l)), e);
}
function J(a) {
  var o;
  const e = vt(a);
  return (o = e == null ? void 0 : e.$el) != null ? o : e;
}
var $t = zo ? window : void 0;
function Oe(...a) {
  let o, e, t, l;
  if (typeof a[0] == "string" || Array.isArray(a[0]) ? ([e, t, l] = a, o = $t) : [o, e, t, l] = a, !o)
    return ht;
  Array.isArray(e) || (e = [e]), Array.isArray(t) || (t = [t]);
  const n = [], r = () => {
    n.forEach((p) => p()), n.length = 0;
  }, s = (p, c, f, m) => (p.addEventListener(c, f, m), () => p.removeEventListener(c, f, m)), i = watch(
    () => [J(o), vt(l)],
    ([p, c]) => {
      r(), p && n.push(
        ...e.flatMap((f) => t.map((m) => s(p, f, m, c)))
      );
    },
    { immediate: true, flush: "post" }
  ), d = () => {
    i(), r();
  };
  return Ho(d), d;
}
var yo = false;
function Ce(a, o, e = {}) {
  const { window: t = $t, ignore: l = [], capture: n = true, detectIframe: r = false } = e;
  if (!t)
    return;
  tn && !yo && (yo = true, Array.from(t.document.body.children).forEach((f) => f.addEventListener("click", ht)));
  let s = true;
  const i = (f) => l.some((m) => {
    if (typeof m == "string")
      return Array.from(t.document.querySelectorAll(m)).some((v) => v === f.target || f.composedPath().includes(v));
    {
      const v = J(m);
      return v && (f.target === v || f.composedPath().includes(v));
    }
  }), p = [
    Oe(t, "click", (f) => {
      const m = J(a);
      if (!(!m || m === f.target || f.composedPath().includes(m))) {
        if (f.detail === 0 && (s = !i(f)), !s) {
          s = true;
          return;
        }
        o(f);
      }
    }, { passive: true, capture: n }),
    Oe(t, "pointerdown", (f) => {
      const m = J(a);
      m && (s = !f.composedPath().includes(m) && !i(f));
    }, { passive: true }),
    r && Oe(t, "blur", (f) => {
      setTimeout(() => {
        var m;
        const v = J(a);
        ((m = t.document.activeElement) == null ? void 0 : m.tagName) === "IFRAME" && !(v != null && v.contains(t.document.activeElement)) && o(f);
      }, 0);
    })
  ].filter(Boolean);
  return () => p.forEach((f) => f());
}
function Gt(a = {}) {
  var o;
  const { window: e = $t } = a, t = (o = a.document) != null ? o : e == null ? void 0 : e.document, l = Va(
    () => null,
    () => t == null ? void 0 : t.activeElement
  );
  return e && (Oe(e, "blur", (n) => {
    n.relatedTarget === null && l.trigger();
  }, true), Oe(e, "focus", l.trigger, true)), l;
}
function sn() {
  const a = ref(false);
  return getCurrentInstance() && onMounted(() => {
    a.value = true;
  }), a;
}
function un(a) {
  const o = sn();
  return computed(() => (o.value, !!a()));
}
function dn(a) {
  return JSON.parse(JSON.stringify(a));
}
var _o = Object.getOwnPropertySymbols;
var cn = Object.prototype.hasOwnProperty;
var pn = Object.prototype.propertyIsEnumerable;
var fn = (a, o) => {
  var e = {};
  for (var t in a)
    cn.call(a, t) && o.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && _o)
    for (var t of _o(a))
      o.indexOf(t) < 0 && pn.call(a, t) && (e[t] = a[t]);
  return e;
};
function Me(a, o, e = {}) {
  const t = e, { window: l = $t } = t, n = fn(t, ["window"]);
  let r;
  const s = un(() => l && "ResizeObserver" in l), i = () => {
    r && (r.disconnect(), r = void 0);
  }, d = computed(
    () => Array.isArray(a) ? a.map((f) => J(f)) : [J(a)]
  ), p = watch(
    d,
    (f) => {
      if (i(), s.value && l) {
        r = new ResizeObserver(o);
        for (const m of f)
          m && r.observe(m, n);
      }
    },
    { immediate: true, flush: "post", deep: true }
  ), c = () => {
    i(), p();
  };
  return Ho(c), {
    isSupported: s,
    stop: c
  };
}
function H(a, o, e, t = {}) {
  var l, n, r;
  const {
    clone: s = false,
    passive: i = false,
    eventName: d,
    deep: p = false,
    defaultValue: c,
    shouldEmit: f
  } = t, m = getCurrentInstance(), v = e || (m == null ? void 0 : m.emit) || ((l = m == null ? void 0 : m.$emit) == null ? void 0 : l.bind(m)) || ((r = (n = m == null ? void 0 : m.proxy) == null ? void 0 : n.$emit) == null ? void 0 : r.bind(m == null ? void 0 : m.proxy));
  let g = d;
  o || (o = "modelValue"), g = g || `update:${o.toString()}`;
  const h2 = (A) => s ? typeof s == "function" ? s(A) : dn(A) : A, x = () => en(a[o]) ? h2(a[o]) : c, C = (A) => {
    f ? f(A) && v(g, A) : v(g, A);
  };
  if (i) {
    const A = x(), T = ref(A);
    return watch(
      () => a[o],
      (I) => T.value = h2(I)
    ), watch(
      T,
      (I) => {
        (I !== a[o] || p) && C(I);
      },
      { deep: p }
    ), T;
  } else
    return computed({
      get() {
        return x();
      },
      set(A) {
        C(A);
      }
    });
}
var Yo = (a, o) => {
  const e = (t) => {
    const l = J(a);
    (l == null ? void 0 : l.contains(t.relatedTarget)) || o(t);
  };
  onMounted(() => {
    const t = J(a);
    t == null || t.addEventListener("focusout", e);
  }), onUnmounted(() => {
    const t = J(a);
    t == null || t.removeEventListener("focusout", e);
  });
};
function ee(a, o, e, t = {}) {
  if (!o)
    return null;
  const {
    arrowKeyOptions: l = "both",
    attributeName: n = "data-radix-vue-collection-item",
    itemsArray: r = [],
    loop: s = true,
    dir: i = "ltr",
    preventScroll: d = true,
    focus: p = false
  } = t, [c, f, m, v, g, h2] = [
    a.key === "ArrowRight",
    a.key === "ArrowLeft",
    a.key === "ArrowUp",
    a.key === "ArrowDown",
    a.key === "Home",
    a.key === "End"
  ], x = m || v, C = c || f;
  if (!g && !h2 && (!x && !C || l === "vertical" && C || l === "horizontal" && x))
    return null;
  const A = e ? Array.from(e.querySelectorAll(`[${n}]`)) : r;
  if (!A.length)
    return null;
  d && a.preventDefault();
  let T = null;
  return C || x ? T = Wo(A, o, {
    goForward: x ? v : i === "ltr" ? c : f,
    loop: s
  }) : g ? T = A.at(0) || null : h2 && (T = A.at(-1) || null), p && (T == null || T.focus()), T;
}
function Wo(a, o, { goForward: e, loop: t }, l = a.length) {
  if (--l === 0)
    return null;
  const n = a.indexOf(o), r = e ? n + 1 : n - 1;
  if (!t && (r < 0 || r >= a.length))
    return null;
  const s = (r + a.length) % a.length, i = a[s];
  return i ? i.hasAttribute("disabled") && i.getAttribute("disabled") !== "false" ? Wo(
    a,
    i,
    { goForward: e, loop: t },
    l
  ) : i : null;
}
async function mn(a, o, e = 500) {
  let t = true, l, n;
  const r = new Promise((d) => {
    n = d, l = setTimeout(() => {
      i(), d(t);
    }, e);
  });
  function s() {
    t = false, i(), clearTimeout(l), l = void 0, n(false);
  }
  function i() {
    o.removeEventListener("mouseleave", s);
  }
  return o.addEventListener("mouseleave", s), r;
}
function vn(a, o = {}) {
  const { delayEnter: e = 0, delayLeave: t = 0, disabled: l = false } = o;
  let n;
  function r(s) {
    if (n && (clearTimeout(n), n = void 0), toValue(l))
      return;
    const i = s ? e : t, d = s ? o.onHoverEnter : o.onHoverLeave;
    n = setTimeout(() => d == null ? void 0 : d(), i);
  }
  Oe(a, "mouseenter", () => r(true), { passive: true }), Oe(a, "mouseleave", () => r(false), { passive: true });
}
var Uo = (a, o = 300) => {
  let e = true, t, l;
  const n = a.target, r = new Promise((d) => {
    l = d, t = setTimeout(() => {
      i(), d(e);
    }, o);
  });
  function s() {
    e = false, i(), clearTimeout(t), t = void 0, l(false);
  }
  function i() {
    n.removeEventListener("mouseenter", s);
  }
  return n.addEventListener("mouseenter", s), r;
};
function qo(a, o) {
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
var hn = "data-radix-vue-collection-item";
var go = Symbol();
var re = () => {
  const a = (l) => {
    provide(go, {
      collectionRef: l
    });
  }, o = inject(go);
  return { createCollection: a, setCollection: (l) => {
    o && (o.collectionRef = l);
  }, getItems: (l) => {
    const n = l ?? J(o == null ? void 0 : o.collectionRef);
    return n ? Array.from(
      n.querySelectorAll(
        `[${hn}]:not([data-disabled])`
      )
    ) : [];
  } };
};
var yn = (a) => {
  const o = ref(), e = computed(() => {
    var l;
    return ((l = o.value) == null ? void 0 : l.width) ?? 0;
  }), t = computed(() => {
    var l;
    return ((l = o.value) == null ? void 0 : l.height) ?? 0;
  });
  return onMounted(() => {
    const l = J(a);
    if (l) {
      o.value = { width: l.offsetWidth, height: l.offsetHeight };
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
        o.value = { width: i, height: d };
      });
      return n.observe(l, { box: "border-box" }), () => n.unobserve(l);
    } else
      o.value = void 0;
  }), {
    width: e,
    height: t
  };
};
var _n = ja(() => ({ count: ref(0) }));
var le = (a) => {
  const { count: o } = _n();
  return a || o.value++, a || `radix-${o.value}`;
};
function Xt(a) {
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
function Go(a) {
  return a ? a.flatMap((o) => o.type === Fragment ? Go(o.children) : [o]) : [];
}
function gn(a) {
  return a && (typeof a.type == "string" || typeof a.type == "object" || typeof a.type == "function");
}
var bn = [
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
var bo = (a) => {
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
var wn = (a) => defineComponent({
  inheritAttrs: false,
  props: {
    asChild: {
      type: Boolean,
      default: false
    }
  },
  setup(o, { attrs: e, slots: t }) {
    const l = getCurrentInstance();
    return o.asChild ? () => {
      var r, s, i;
      let n = (r = t.default) == null ? void 0 : r.call(t);
      if (n = Go(n || []), Object.keys(e).length > 0) {
        const [d, ...p] = n;
        (!gn(d) || p.length > 0) && bo(l), (s = d.props) == null || delete s.ref;
        const c = mergeProps(e, d.props ?? {});
        (i = d.props) == null || delete i.class;
        const f = cloneVNode(d, c);
        for (const m in c)
          m.startsWith("on") && (f.props || (f.props = {}), f.props[m] = c[m]);
        return f;
      } else if (Array.isArray(n) && n.length > 1)
        bo(l);
      else
        return Array.isArray(n) && n.length === 1 ? n[0] : null;
    } : () => h(
      a,
      { ...e },
      { default: () => t.default && t.default() }
    );
  }
});
var V = bn.reduce((a, o) => {
  const e = wn(o);
  return { ...a, [o]: e };
}, {});
var P = () => {
  const a = ref(), o = computed(() => J(a));
  return {
    primitiveElement: a,
    currentElement: o
  };
};
var Xo = V.a;
var X = V.button;
var D = V.div;
V.form;
var Fo = V.h2;
var En = V.h3;
var Cn = V.img;
V.input;
var rt = V.label;
var xn = V.li;
var $n = V.nav;
V.ol;
var Jo = V.p;
var ne = V.span;
var Sn = V.svg;
var kn = V.ul;
var Ft = Symbol();
var An = defineComponent({
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
    return provide(Ft, {
      contentId: le(),
      disabled: l,
      open: t,
      onOpenToggle: () => {
        t.value = !t.value;
      }
    }), (n, r) => (openBlock(), createBlock(unref(D), {
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
var Tn = defineComponent({
  __name: "CollapsibleTrigger",
  props: {
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(
      Ft
    );
    return (t, l) => {
      var n, r, s, i, d, p, c, f;
      return openBlock(), createBlock(unref(X), {
        type: "button",
        "as-child": o.asChild,
        "aria-controls": (n = unref(e)) == null ? void 0 : n.contentId,
        "aria-expanded": ((r = unref(e)) == null ? void 0 : r.open.value) || false,
        "data-state": (s = unref(e)) != null && s.open.value ? "open" : "closed",
        "data-disabled": (d = (i = unref(e)) == null ? void 0 : i.disabled) != null && d.value ? "" : void 0,
        disabled: (c = (p = unref(e)) == null ? void 0 : p.disabled) == null ? void 0 : c.value,
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
function Bn(a, o) {
  const e = ref({}), t = ref(a.value), l = ref("none"), n = a.value ? "mounted" : "unmounted", { state: r, dispatch: s } = qo(n, {
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
    const d = e.value, p = t.value, c = p !== a.value;
    if (await nextTick(), c) {
      const f = l.value, m = Mt(o);
      a.value ? s("MOUNT") : m === "none" || (d == null ? void 0 : d.display) === "none" ? s("UNMOUNT") : s(p && f !== m ? "ANIMATION_OUT" : "UNMOUNT"), t.value = a.value;
    }
  }), o) {
    const d = (c) => {
      const m = Mt(o).includes(
        c.animationName
      );
      c.target === o && m && s("ANIMATION_END");
    }, p = (c) => {
      c.target === o && (l.value = Mt(o));
    };
    o.addEventListener("animationstart", p), o.addEventListener("animationcancel", d), o.addEventListener("animationend", d);
  } else
    s("ANIMATION_END");
  const i = computed(
    () => ["mounted", "unmountSuspended"].includes(r.value)
  );
  return e.value = getComputedStyle(o), {
    isPresent: i
  };
}
function Mt(a) {
  return a && getComputedStyle(a).animationName || "none";
}
var Qe = defineComponent({
  __name: "Presence",
  props: {
    present: { type: Boolean }
  },
  setup(a, { expose: o }) {
    const e = a, { present: t } = toRefs(e), l = useSlots();
    let n = ref(false);
    const r = {
      created(i) {
        const { isPresent: d } = Bn(t, i);
        ln(n, d, { direction: "rtl" });
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
    return o({
      present: n
    }), (i, d) => (openBlock(), createBlock(s));
  }
});
var Pn = defineComponent({
  inheritAttrs: false,
  __name: "CollapsibleContent",
  props: {
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(
      Ft
    ), t = ref(), { primitiveElement: l, currentElement: n } = P(), r = ref(0), s = ref(0), i = computed(() => e == null ? void 0 : e.open.value), d = ref(i.value), p = ref();
    return watch(
      () => {
        var c;
        return [i.value, (c = t.value) == null ? void 0 : c.present];
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
    ), onMounted(() => {
      requestAnimationFrame(() => {
        d.value = false;
      });
    }), (c, f) => (openBlock(), createBlock(unref(Qe), {
      ref_key: "presentRef",
      ref: t,
      present: unref(e).open.value
    }, {
      default: withCtx(() => {
        var m, v, g, h2, x;
        return [
          createVNode(unref(D), mergeProps({
            ref_key: "primitiveElement",
            ref: l
          }, c.$attrs, {
            "as-child": o.asChild,
            "data-state": (m = unref(e)) != null && m.open.value ? "open" : "closed",
            "data-disabled": (g = (v = unref(e)) == null ? void 0 : v.disabled) != null && g.value ? "true" : void 0,
            id: (h2 = unref(e)) == null ? void 0 : h2.contentId,
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
          }, 16, ["as-child", "data-state", "data-disabled", "id", "hidden", "style"])
        ];
      }),
      _: 3
    }, 8, ["present"]));
  }
});
function On(a, o) {
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
function Mn({ type: a, defaultValue: o }) {
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
function Dn(a, o) {
  const e = H(a, "modelValue", o, {
    defaultValue: Mn(a),
    passive: true
  });
  watch(
    [a.type, a.modelValue],
    () => {
      const l = On(a.type, e.value);
      e.value !== l && (e.value = l);
    },
    { immediate: true }
  );
  function t(l) {
    if (a.type === "single")
      e.value = l;
    else {
      const n = e.value || [];
      if (n.includes(l)) {
        const r = n.findIndex((s) => s === l);
        n.splice(r, 1);
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
var it = Symbol();
var Xl = defineComponent({
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
    const e = a, { modelValue: t, changeModelValue: l } = Dn(e, o), { primitiveElement: n, currentElement: r } = P();
    return provide(it, {
      disabled: e.disabled,
      direction: e.dir,
      orientation: e.orientation,
      parentElement: r,
      isSingle: computed(() => e.type === "single"),
      collapsible: e.collapsible,
      modelValue: t,
      changeModelValue: l
    }), (s, i) => (openBlock(), createBlock(unref(D), {
      ref_key: "primitiveElement",
      ref: n,
      "as-child": e.asChild
    }, {
      default: withCtx(() => [
        renderSlot(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child"]));
  }
});
var St = Symbol();
var Fl = defineComponent({
  __name: "AccordionItem",
  props: {
    disabled: { type: Boolean },
    value: {},
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(it), t = computed(
      () => e != null && e.isSingle.value ? o.value === e.modelValue.value : Array.isArray(e == null ? void 0 : e.modelValue.value) && !!(e != null && e.modelValue.value.includes(o.value))
    ), l = computed(() => (e == null ? void 0 : e.disabled) || o.disabled || !!(e != null && e.isSingle.value) && t.value && !(e != null && e.collapsible)), n = computed(() => l.value ? "" : void 0), r = computed(
      () => t.value ? "open" : "closed"
      /* Closed */
    ), { primitiveElement: s, currentElement: i } = P();
    provide(St, {
      open: t,
      dataState: r,
      disabled: l,
      dataDisabled: n,
      triggerId: le(),
      primitiveElement: s,
      currentElement: i,
      value: computed(() => o.value)
    });
    function d(p) {
      ee(
        p,
        i.value,
        e == null ? void 0 : e.parentElement.value,
        {
          arrowKeyOptions: e == null ? void 0 : e.orientation,
          dir: e == null ? void 0 : e.direction,
          focus: true
        }
      );
    }
    return (p, c) => {
      var f;
      return openBlock(), createBlock(unref(An), {
        "data-orientation": (f = unref(e)) == null ? void 0 : f.orientation,
        "data-disabled": n.value,
        "data-state": r.value,
        disabled: l.value,
        open: t.value,
        "onUpdate:open": c[0] || (c[0] = (m) => t.value = m),
        onKeydown: withKeys(d, ["up", "down", "left", "right", "home", "end"]),
        "as-child": o.asChild
      }, {
        default: withCtx(() => [
          renderSlot(p.$slots, "default", { open: t.value })
        ]),
        _: 3
      }, 8, ["data-orientation", "data-disabled", "data-state", "disabled", "open", "onKeydown", "as-child"]);
    };
  }
});
var Jl = defineComponent({
  __name: "AccordionContent",
  props: {
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(it), t = inject(St);
    return (l, n) => {
      var r, s, i, d, p, c, f;
      return openBlock(), createBlock(unref(Pn), {
        role: "region",
        id: (r = unref(t)) == null ? void 0 : r.triggerId,
        open: (s = unref(t)) == null ? void 0 : s.open.value,
        hidden: !((i = unref(t)) != null && i.open.value),
        "as-child": o.asChild,
        "aria-labelledby": (d = unref(t)) == null ? void 0 : d.triggerId,
        "data-state": (p = unref(t)) == null ? void 0 : p.dataState.value,
        "data-disabled": (c = unref(t)) == null ? void 0 : c.dataDisabled.value,
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
var Zl = defineComponent({
  __name: "AccordionHeader",
  props: {
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(it), t = inject(St);
    return (l, n) => {
      var r, s, i;
      return openBlock(), createBlock(unref(En), {
        "as-child": o.asChild,
        "data-orientation": (r = unref(e)) == null ? void 0 : r.orientation,
        "data-state": (s = unref(t)) == null ? void 0 : s.dataState.value,
        "data-disabled": (i = unref(t)) == null ? void 0 : i.dataDisabled.value
      }, {
        default: withCtx(() => [
          renderSlot(l.$slots, "default")
        ]),
        _: 3
      }, 8, ["as-child", "data-orientation", "data-state", "data-disabled"]);
    };
  }
});
var Ql = defineComponent({
  __name: "AccordionTrigger",
  props: {
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(it), t = inject(St);
    function l() {
      t != null && t.disabled.value || t && (e == null || e.changeModelValue(t.value.value));
    }
    return (n, r) => {
      var s, i, d, p, c, f, m, v, g, h2;
      return openBlock(), createBlock(unref(Tn), {
        ref: (s = unref(t)) == null ? void 0 : s.primitiveElement,
        "data-radix-vue-collection-item": "",
        "as-child": o.asChild,
        "aria-controls": (i = unref(t)) == null ? void 0 : i.triggerId,
        "aria-disabled": ((d = unref(t)) == null ? void 0 : d.disabled.value) || void 0,
        "aria-expanded": ((p = unref(t)) == null ? void 0 : p.open.value) || false,
        "data-disabled": (c = unref(t)) == null ? void 0 : c.dataDisabled.value,
        "data-orientation": (f = unref(e)) == null ? void 0 : f.orientation,
        "data-state": (m = unref(t)) == null ? void 0 : m.dataState.value,
        disabled: (g = (v = unref(t)) == null ? void 0 : v.disabled) == null ? void 0 : g.value,
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
var In = ["id", "checked", "name", "disabled", "required", "data-state"];
var Zo = Symbol();
var Vl = defineComponent({
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
    provide(Zo, {
      required: e.required,
      disabled: e.disabled,
      modelValue: toRef(() => e.modelValue)
    });
    function t() {
      return o("update:modelValue", !e.modelValue);
    }
    let l;
    return (n, r) => (openBlock(), createBlock(unref(D), {
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
        }), null, 16, In),
        renderSlot(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "value", "aria-checked", "data-state", "data-disabled"]));
  }
});
var jl = defineComponent({
  __name: "CheckboxIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(Zo);
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
var Rn = ["id", "name", "disabled", "required", "data-state", "data-disabled"];
var Qo = Symbol();
var er = defineComponent({
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
    provide(Qo, {
      open: t,
      toggleOpen: l,
      disabled: e.disabled
    });
    function n(r) {
      r.key === "Enter" && l();
    }
    return (r, s) => (openBlock(), createBlock(unref(D), {
      value: unref(t),
      role: "switch",
      "aria-checked": unref(t),
      "data-state": unref(t) ? "checked" : "unchecked",
      "data-disabled": e.disabled ? "" : void 0,
      "as-child": e.asChild,
      style: { position: "relative" }
    }, {
      default: withCtx(() => [
        renderSlot(r.$slots, "default"),
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
        }), null, 16, Rn)
      ]),
      _: 3
    }, 8, ["value", "aria-checked", "data-state", "data-disabled", "as-child"]));
  }
});
var tr = defineComponent({
  __name: "SwitchThumb",
  props: {
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = inject(Qo);
    return (e, t) => {
      var l, n, r;
      return openBlock(), createBlock(unref(ne), {
        "data-state": (n = (l = unref(o)) == null ? void 0 : l.open) != null && n.value ? "checked" : "unchecked",
        "data-disabled": (r = unref(o)) != null && r.disabled ? "" : void 0,
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
var qe = defineComponent({
  __name: "BaseSeparator",
  props: {
    orientation: { default: "horizontal" },
    decorative: { type: Boolean },
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a;
    return (e, t) => (openBlock(), createBlock(unref(D), mergeProps(o, {
      role: `${e.decorative ? "none" : "separator"}`
    }), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16, ["role"]));
  }
});
var or = defineComponent({
  __name: "Separator",
  props: {
    orientation: { default: "horizontal" },
    decorative: { type: Boolean },
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a;
    return (e, t) => (openBlock(), createBlock(qe, mergeProps(o, {
      "data-orientation": o.orientation
    }), null, 16, ["data-orientation"]));
  }
});
var ar = defineComponent({
  __name: "Label",
  props: {
    for: {},
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a;
    return (e, t) => (openBlock(), createBlock(unref(rt), normalizeProps(guardReactiveProps(o)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Nn = ["id", "checked", "name", "disabled", "data-state", "data-disabled"];
var nr = defineComponent({
  __name: "Toggle",
  props: {
    defaultPressed: { type: Boolean, default: false },
    pressed: { type: Boolean, default: void 0 },
    disabled: { type: Boolean, default: false },
    name: {},
    id: {},
    asChild: { type: Boolean }
  },
  emits: ["update:pressed"],
  setup(a, { emit: o }) {
    const e = a, t = H(e, "pressed", o, {
      defaultValue: e.defaultPressed,
      passive: true
      // set passive to true so that if no props.pressed was passed, it will still update
    }), l = () => {
      t.value = !t.value;
    }, n = computed(() => t.value ? "on" : "off");
    function r(s) {
      s.key === "Enter" && l();
    }
    return (s, i) => (openBlock(), createBlock(unref(D), {
      value: unref(t),
      role: "checkbox",
      "aria-checked": unref(t),
      "data-state": n.value,
      "data-disabled": e.disabled,
      "as-child": e.asChild,
      style: { position: "relative" }
    }, {
      default: withCtx(() => [
        createBaseVNode("input", mergeProps({
          type: "checkbox",
          id: e.id,
          onKeydown: r
        }, unref(t), {
          onChange: l,
          checked: unref(t),
          name: e.name,
          "aria-hidden": "true",
          disabled: e.disabled,
          "data-state": n.value,
          "data-disabled": e.disabled,
          style: { opacity: "0", position: "absolute", inset: "0" }
        }), null, 16, Nn),
        renderSlot(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["value", "aria-checked", "data-state", "data-disabled", "as-child"]));
  }
});
var Vo = Symbol();
var lr = defineComponent({
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
    const e = a, { primitiveElement: t, currentElement: l } = P(), n = ref(), r = ref(), s = Gt(), i = ref([]), d = H(e, "modelValue", o, {
      defaultValue: e.defaultValue,
      passive: true
    });
    provide(Vo, {
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
    ), (c, f) => (openBlock(), createBlock(unref(D), {
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
        renderSlot(c.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "dir", "data-orientation"]));
  }
});
var rr = defineComponent({
  __name: "ToggleGroupItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(
      Vo
    ), { primitiveElement: t, currentElement: l } = P();
    onMounted(() => {
      var c;
      (c = e == null ? void 0 : e.itemsArray.value) == null || c.push(l.value);
    });
    const n = computed(() => {
      var c, f, m;
      return (e == null ? void 0 : e.type) === "multiple" ? (f = (c = e == null ? void 0 : e.modelValue) == null ? void 0 : c.value) != null && f.includes(o.value) ? "on" : "off" : ((m = e == null ? void 0 : e.modelValue) == null ? void 0 : m.value) === o.value ? "on" : "off";
    }), r = computed(() => {
      var c, f, m;
      return (e == null ? void 0 : e.type) === "multiple" ? (f = (c = e == null ? void 0 : e.modelValue) == null ? void 0 : c.value) == null ? void 0 : f.includes(o.value) : ((m = e == null ? void 0 : e.modelValue) == null ? void 0 : m.value) === o.value;
    });
    function s(c) {
      if (!(e != null && e.rovingFocus) || e != null && e.rootDisabled)
        return;
      (c.key === "ArrowLeft" || c.key === "ArrowRight" || c.key === "ArrowUp" || c.key === "ArrowDown") && c.preventDefault();
      const f = ee(
        c,
        l.value,
        e == null ? void 0 : e.parentElement.value,
        { loop: e == null ? void 0 : e.loop }
      );
      f && (f.focus(), e.currentFocusedElement.value = f);
    }
    const i = computed(() => {
      var c, f, m;
      return (c = e == null ? void 0 : e.currentFocusedElement) != null && c.value ? ((m = e == null ? void 0 : e.currentFocusedElement) == null ? void 0 : m.value) === l.value ? "0" : "-1" : ((f = e == null ? void 0 : e.modelValue) == null ? void 0 : f.value) === o.value ? "0" : "-1";
    }), d = computed(() => (e == null ? void 0 : e.type) === "multiple" ? "checkbox" : "radio");
    function p() {
      e != null && e.rootDisabled || (e == null || e.changeModelValue(o.value), e.currentFocusedElement.value = l.value);
    }
    return (c, f) => {
      var m, v;
      return openBlock(), createBlock(unref(X), {
        "as-child": o.asChild,
        ref_key: "primitiveElement",
        ref: t,
        type: "button",
        role: d.value,
        "data-state": n.value,
        disabled: o.disabled || ((m = unref(e)) == null ? void 0 : m.rootDisabled),
        "data-disabled": o.disabled ? "" : void 0,
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
var ir = defineComponent({
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
      createVNode(unref(D), {
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
var kt = Symbol();
var sr = defineComponent({
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
    return provide(kt, {
      modelValue: n,
      changeModelValue: (r) => {
        n.value = r, r && e.onValueChange && e.onValueChange(r);
      },
      currentFocusedElement: l,
      parentElement: t,
      orientation: e.orientation,
      dir: e.dir,
      loop: true,
      activationMode: e.activationMode
    }), (r, s) => (openBlock(), createBlock(unref(D), {
      dir: e.dir,
      "data-orientation": e.orientation,
      "as-child": e.asChild
    }, {
      default: withCtx(() => [
        renderSlot(r.$slots, "default")
      ]),
      _: 3
    }, 8, ["dir", "data-orientation", "as-child"]));
  }
});
var ur = defineComponent({
  __name: "TabsList",
  props: {
    loop: { type: Boolean, default: true },
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(kt), { primitiveElement: t, currentElement: l } = P();
    return onMounted(() => {
      e.parentElement.value = l.value, e.loop = o.loop;
    }), (n, r) => {
      var s, i;
      return openBlock(), createBlock(unref(D), {
        role: "tablist",
        ref_key: "primitiveElement",
        ref: t,
        "as-child": o.asChild,
        "aria-orientation": (s = unref(e)) == null ? void 0 : s.orientation,
        tabindex: "0",
        "data-orientation": (i = unref(e)) == null ? void 0 : i.orientation,
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
var dr = defineComponent({
  __name: "TabsContent",
  props: {
    value: {},
    forceMount: { type: Boolean },
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(kt), t = computed(() => {
      var l;
      return ((l = e == null ? void 0 : e.modelValue) == null ? void 0 : l.value) === o.value ? "active" : "inactive";
    });
    return (l, n) => {
      var r, s, i;
      return ((s = (r = unref(e)) == null ? void 0 : r.modelValue) == null ? void 0 : s.value) === o.value ? (openBlock(), createBlock(unref(D), {
        key: 0,
        "as-child": o.asChild,
        role: "tabpanel",
        "data-state": t.value,
        "data-orientation": (i = unref(e)) == null ? void 0 : i.orientation,
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
var cr = defineComponent({
  __name: "TabsTrigger",
  props: {
    value: {},
    disabled: { type: Boolean, default: false },
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(kt), { primitiveElement: t, currentElement: l } = P();
    function n(i) {
      e == null || e.changeModelValue(i);
    }
    function r(i) {
      const d = ee(
        i,
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
    const s = computed(() => {
      var i, d, p;
      return (i = e == null ? void 0 : e.currentFocusedElement) != null && i.value ? ((p = e == null ? void 0 : e.currentFocusedElement) == null ? void 0 : p.value) === l.value ? "0" : "-1" : ((d = e == null ? void 0 : e.modelValue) == null ? void 0 : d.value) === o.value ? "0" : "-1";
    });
    return (i, d) => {
      var p, c, f, m, v;
      return openBlock(), createBlock(unref(X), {
        ref_key: "primitiveElement",
        ref: t,
        type: "button",
        "as-child": o.asChild,
        role: "tab",
        "aria-selected": ((c = (p = unref(e)) == null ? void 0 : p.modelValue) == null ? void 0 : c.value) === o.value ? "true" : "false",
        "data-state": ((m = (f = unref(e)) == null ? void 0 : f.modelValue) == null ? void 0 : m.value) === o.value ? "active" : "inactive",
        disabled: o.disabled,
        "data-disabled": o.disabled ? "" : void 0,
        tabindex: s.value,
        "data-orientation": (v = unref(e)) == null ? void 0 : v.orientation,
        "data-radix-vue-collection-item": "",
        "data-radix-vue-tab-value": o.value,
        onClick: d[0] || (d[0] = (g) => n(o.value)),
        onKeydown: withKeys(r, ["up", "down", "left", "right", "home", "end"])
      }, {
        default: withCtx(() => [
          renderSlot(i.$slots, "default")
        ]),
        _: 3
      }, 8, ["as-child", "aria-selected", "data-state", "disabled", "data-disabled", "tabindex", "data-orientation", "data-radix-vue-tab-value", "onKeydown"]);
    };
  }
});
var Ln = ["value", "aria-valuenow", "name"];
var Jt = Symbol();
var pr = defineComponent({
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
    const e = a, { primitiveElement: t, currentElement: l } = P(), n = ref(), r = computed(() => e.modelValue ? e.modelValue < 50 ? (e.modelValue - 50) / 50 * 10 : (e.modelValue - 50) / 50 * -10 : 0);
    provide(Jt, {
      modelValue: toRef(() => e.modelValue),
      changeModelValue: (m) => {
        o("update:modelValue", m);
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
      o("update:modelValue", f(m, e.step));
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
        }, null, 8, Ln)
      ]),
      _: 3
    }, 8, ["as-child"]));
  }
});
var fr = defineComponent({
  __name: "SliderThumb",
  props: {
    asChild: { type: Boolean, default: false }
  },
  setup(a) {
    const o = a, e = inject(Jt), { primitiveElement: t, currentElement: l } = P();
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
      var d, p, c, f, m, v, g, h2, x;
      return openBlock(), createElementBlock("span", {
        style: normalizeStyle(`transform: translateX(-50%); position: absolute; left: calc(${(p = (d = unref(e)) == null ? void 0 : d.modelValue) == null ? void 0 : p.value}%)`)
      }, [
        createVNode(unref(ne), mergeProps(s.$attrs, {
          ref_key: "primitiveElement",
          ref: t,
          role: "slider",
          tabindex: "0",
          "data-disabled": (c = unref(e)) == null ? void 0 : c.disabled,
          "data-orientation": (f = unref(e)) == null ? void 0 : f.orientation,
          "aria-valuenow": (v = (m = unref(e)) == null ? void 0 : m.modelValue) == null ? void 0 : v.value,
          "aria-valuemin": (g = unref(e)) == null ? void 0 : g.min,
          "aria-valuemax": (h2 = unref(e)) == null ? void 0 : h2.max,
          "aria-orientation": (x = unref(e)) == null ? void 0 : x.orientation,
          "as-child": o.asChild,
          onKeydown: r
        }), null, 16, ["data-disabled", "data-orientation", "aria-valuenow", "aria-valuemin", "aria-valuemax", "aria-orientation", "as-child"])
      ], 4);
    };
  }
});
var mr = defineComponent({
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
var vr = defineComponent({
  __name: "SliderRange",
  props: {
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(Jt);
    return (t, l) => {
      var n, r, s, i, d;
      return openBlock(), createBlock(unref(ne), {
        "data-disabled": (n = unref(e)) == null ? void 0 : n.disabled,
        "data-orientation": (r = unref(e)) == null ? void 0 : r.orientation,
        "as-child": o.asChild,
        style: normalizeStyle(`left: 0%; right: ${(((s = unref(e)) == null ? void 0 : s.max) ?? 100) - (((d = (i = unref(e)) == null ? void 0 : i.modelValue) == null ? void 0 : d.value) ?? 0)}%`)
      }, null, 8, ["data-disabled", "data-orientation", "as-child", "style"]);
    };
  }
});
var jo = "RadioGroup";
var ea = Symbol();
var hr = defineComponent({
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
    const e = a, { primitiveElement: t, currentElement: l } = P(), n = H(e, "modelValue", o, {
      defaultValue: e.defaultValue,
      passive: true
    });
    return provide(jo, {
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
    }), (r, s) => (openBlock(), createBlock(unref(D), {
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
        renderSlot(r.$slots, "default")
      ]),
      _: 3
    }, 8, ["data-disabled", "as-child", "required", "aria-required", "dir", "name"]));
  }
});
var Kn = ["value", "required", "disabled", "checked"];
var yr = defineComponent({
  __name: "RadioGroupItem",
  props: {
    value: {},
    disabled: { type: Boolean, default: false },
    required: { type: Boolean },
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(jo), t = computed(() => (e == null ? void 0 : e.disabled.value) || o.disabled), l = computed(() => (e == null ? void 0 : e.required.value) || o.required), n = computed(() => {
      var c;
      return ((c = e == null ? void 0 : e.modelValue) == null ? void 0 : c.value) === o.value;
    });
    provide(ea, readonly({ disabled: t, checked: n }));
    function r(c) {
      t.value || e == null || e.changeModelValue(c);
    }
    const { primitiveElement: s, currentElement: i } = P();
    function d(c) {
      if (t.value)
        return;
      const f = ee(
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
          "as-child": o.asChild,
          disabled: t.value ? true : void 0,
          "data-state": n.value ? "checked" : "unchecked",
          "data-disabled": t.value ? "" : void 0,
          tabindex: p.value,
          value: o.value,
          name: (m = unref(e)) == null ? void 0 : m.name,
          onClick: f[0] || (f[0] = (v) => r(o.value)),
          onKeydown: d
        }), {
          default: withCtx(() => [
            renderSlot(c.$slots, "default")
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
        }, null, 8, Kn)
      ], 64);
    };
  }
});
var _r = defineComponent({
  __name: "RadioGroupIndicator",
  props: {
    asChild: { type: Boolean, default: false }
  },
  setup(a) {
    const o = inject(ea);
    return (e, t) => {
      var l, n, r;
      return (l = unref(o)) != null && l.checked ? (openBlock(), createBlock(unref(ne), {
        key: 0,
        "data-state": (n = unref(o)) != null && n.checked ? "checked" : "unchecked",
        "data-disabled": (r = unref(o)) != null && r.disabled ? "" : void 0,
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
var ta = Symbol();
var Zt = (a) => typeof a == "number";
function Hn(a, o) {
  return a === null || Zt(a) && !isNaN(a) && a <= o && a >= 0 ? a : (console.error(`Invalid prop \`value\` of value \`${a}\` supplied to \`ProgressRoot\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${Ve} if no \`max\` prop is set)
  - \`null\` if the progress is indeterminate.

Defaulting to \`null\`.`), null);
}
var Ve = 100;
function zn(a) {
  return Zt(a) && !isNaN(a) && a > 0 ? a : (console.error(
    `Invalid prop \`max\` of value \`${a}\` supplied to \`ProgressRoot\`. Only numbers greater than 0 are valid max values. Defaulting to \`${Ve}\`.`
  ), Ve);
}
var gr = defineComponent({
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
      async (r) => {
        const s = Hn(r, e.max);
        s !== r && (await nextTick(), t.value = s);
      },
      { immediate: true }
    ), watch(
      () => e.max,
      (r) => {
        const s = zn(e.max);
        s !== r && (l.value = s);
      },
      { immediate: true }
    );
    const n = computed(() => t.value ? t.value === l.value ? "complete" : "loading" : "indeterminate");
    return provide(ta, {
      modelValue: t,
      max: l,
      progressState: n
    }), (r, s) => (openBlock(), createBlock(unref(D), {
      asChild: e.asChild,
      "aria-valuemax": unref(l),
      "aria-valuemin": 0,
      "aria-valuenow": Zt(unref(t)) ? unref(t) : void 0,
      "aria-valuetext": r.getValueLabel(unref(t), unref(l)),
      role: "progressbar",
      "data-state": n.value,
      "data-value": unref(t) ?? void 0,
      "data-max": unref(l)
    }, {
      default: withCtx(() => [
        renderSlot(r.$slots, "default")
      ]),
      _: 3
    }, 8, ["asChild", "aria-valuemax", "aria-valuenow", "aria-valuetext", "data-state", "data-value", "data-max"]));
  }
});
var br = defineComponent({
  __name: "ProgressIndicator",
  props: {
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(ta);
    return (t, l) => {
      var n, r, s, i;
      return openBlock(), createBlock(unref(D), mergeProps(o, {
        "data-state": (n = unref(e)) == null ? void 0 : n.progressState.value,
        "data-value": ((s = (r = unref(e)) == null ? void 0 : r.modelValue) == null ? void 0 : s.value) ?? void 0,
        "data-max": (i = unref(e)) == null ? void 0 : i.max.value
      }), {
        default: withCtx(() => [
          renderSlot(t.$slots, "default")
        ]),
        _: 3
      }, 16, ["data-state", "data-value", "data-max"]);
    };
  }
});
var st = Symbol();
var wr = defineComponent({
  __name: "DialogRoot",
  props: {
    open: { type: Boolean, default: void 0 },
    defaultOpen: { type: Boolean, default: false },
    modal: { type: Boolean, default: true }
  },
  emits: ["update:modelValue"],
  setup(a, { emit: o }) {
    const e = a, t = H(e, "open", o, {
      defaultValue: e.defaultOpen,
      passive: true
    });
    return provide(st, {
      open: t,
      modal: e.modal,
      openModal: () => {
        t.value = true;
      },
      closeModal: () => {
        t.value = false;
      },
      triggerButton: ref()
    }), (l, n) => renderSlot(l.$slots, "default");
  }
});
var Er = defineComponent({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(st), { primitiveElement: t, currentElement: l } = P();
    function n() {
      console.error(
        "Injected value not found, DialogTrigger possibly not wrapped with DialogRoot. Component may not be working properly."
      );
    }
    return onMounted(() => {
      e ? e.triggerButton.value = l.value : n();
    }), (r, s) => {
      var i, d, p;
      return openBlock(), createBlock(unref(X), mergeProps(o, {
        type: "button",
        ref_key: "primitiveElement",
        ref: t,
        "aria-expanded": ((i = unref(e)) == null ? void 0 : i.open.value) || false,
        "data-state": (d = unref(e)) != null && d.open.value ? "open" : "closed",
        onClick: (p = unref(e)) == null ? void 0 : p.openModal
      }), {
        default: withCtx(() => [
          renderSlot(r.$slots, "default")
        ]),
        _: 3
      }, 16, ["aria-expanded", "data-state", "onClick"]);
    };
  }
});
var ut = defineComponent({
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
var Yn = createBaseVNode("polygon", { points: "0,0 30,0 15,10" }, null, -1);
var Wn = defineComponent({
  __name: "Arrow",
  props: {
    width: { default: 10 },
    height: { default: 5 }
  },
  setup(a) {
    const o = a, { primitiveElement: e } = P();
    return (t, l) => (openBlock(), createBlock(unref(Sn), mergeProps({
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
          Yn
        ])
      ]),
      _: 3
    }, 16, ["width", "height"]));
  }
});
var ie = defineComponent({
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
    const e = a, { getItems: t } = re(), { primitiveElement: l, currentElement: n } = P();
    function r(c) {
      var m, v, g, h2;
      if (c.key === "Escape")
        return i(), o("escape-keydown", c);
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
        return o("horizontal-keydown", c);
      const f = ee(
        c,
        n.value,
        void 0,
        {
          arrowKeyOptions: "vertical",
          itemsArray: t()
        }
      );
      f && ((h2 = e.rootProvider) == null || h2.changeSelected(f));
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
      o("handle-click");
    }
    function p() {
      o("mouseover");
    }
    return (c, f) => {
      var m, v, g;
      return openBlock(), createBlock(unref(D), {
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
var Cr = defineComponent({
  __name: "DialogPortal",
  props: {
    container: {}
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
function oa(a) {
  return getCurrentScope() ? (onScopeDispose(a), true) : false;
}
function yt(a) {
  return typeof a == "function" ? a() : unref(a);
}
var aa = typeof window < "u";
var Qt = () => {
};
var It = Un();
function Un() {
  var a;
  return aa && ((a = window == null ? void 0 : window.navigator) == null ? void 0 : a.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
}
var wo = {
  mounted: "mounted",
  updated: "updated",
  unmounted: "unmounted"
};
function qn(...a) {
  if (a.length !== 1)
    return toRef(...a);
  const o = a[0];
  return typeof o == "function" ? readonly(customRef(() => ({ get: o, set: Qt }))) : ref(o);
}
function Je(a) {
  var o;
  const e = yt(a);
  return (o = e == null ? void 0 : e.$el) != null ? o : e;
}
var na = aa ? window : void 0;
function mt(...a) {
  let o, e, t, l;
  if (typeof a[0] == "string" || Array.isArray(a[0]) ? ([e, t, l] = a, o = na) : [o, e, t, l] = a, !o)
    return Qt;
  Array.isArray(e) || (e = [e]), Array.isArray(t) || (t = [t]);
  const n = [], r = () => {
    n.forEach((p) => p()), n.length = 0;
  }, s = (p, c, f, m) => (p.addEventListener(c, f, m), () => p.removeEventListener(c, f, m)), i = watch(
    () => [Je(o), yt(l)],
    ([p, c]) => {
      r(), p && n.push(
        ...e.flatMap((f) => t.map((m) => s(p, f, m, c)))
      );
    },
    { immediate: true, flush: "post" }
  ), d = () => {
    i(), r();
  };
  return oa(d), d;
}
var Eo = false;
function Co(a, o, e = {}) {
  const { window: t = na, ignore: l = [], capture: n = true, detectIframe: r = false } = e;
  if (!t)
    return;
  It && !Eo && (Eo = true, Array.from(t.document.body.children).forEach((f) => f.addEventListener("click", Qt)));
  let s = true;
  const i = (f) => l.some((m) => {
    if (typeof m == "string")
      return Array.from(t.document.querySelectorAll(m)).some((v) => v === f.target || f.composedPath().includes(v));
    {
      const v = Je(m);
      return v && (f.target === v || f.composedPath().includes(v));
    }
  }), p = [
    mt(t, "click", (f) => {
      const m = Je(a);
      if (!(!m || m === f.target || f.composedPath().includes(m))) {
        if (f.detail === 0 && (s = !i(f)), !s) {
          s = true;
          return;
        }
        o(f);
      }
    }, { passive: true, capture: n }),
    mt(t, "pointerdown", (f) => {
      const m = Je(a);
      m && (s = !f.composedPath().includes(m) && !i(f));
    }, { passive: true }),
    r && mt(t, "blur", (f) => {
      setTimeout(() => {
        var m;
        const v = Je(a);
        ((m = t.document.activeElement) == null ? void 0 : m.tagName) === "IFRAME" && !(v != null && v.contains(t.document.activeElement)) && o(f);
      }, 0);
    })
  ].filter(Boolean);
  return () => p.forEach((f) => f());
}
var Gn = {
  [wo.mounted](a, o) {
    const e = !o.modifiers.bubble;
    if (typeof o.value == "function")
      a.__onClickOutside_stop = Co(a, o.value, { capture: e });
    else {
      const [t, l] = o.value;
      a.__onClickOutside_stop = Co(a, t, Object.assign({ capture: e }, l));
    }
  },
  [wo.unmounted](a) {
    a.__onClickOutside_stop();
  }
};
function la(a) {
  const o = window.getComputedStyle(a);
  if (o.overflowX === "scroll" || o.overflowY === "scroll" || o.overflowX === "auto" && a.clientWidth < a.scrollWidth || o.overflowY === "auto" && a.clientHeight < a.scrollHeight)
    return true;
  {
    const e = a.parentNode;
    return !e || e.tagName === "BODY" ? false : la(e);
  }
}
function Xn(a) {
  const o = a || window.event, e = o.target;
  return la(e) ? false : o.touches.length > 1 ? true : (o.preventDefault && o.preventDefault(), false);
}
function Fn(a, o = false) {
  const e = ref(o);
  let t = null, l;
  watch(qn(a), (s) => {
    if (s) {
      const i = s;
      l = i.style.overflow, e.value && (i.style.overflow = "hidden");
    }
  }, {
    immediate: true
  });
  const n = () => {
    const s = yt(a);
    !s || e.value || (It && (t = mt(
      s,
      "touchmove",
      (i) => {
        Xn(i);
      },
      { passive: false }
    )), s.style.overflow = "hidden", e.value = true);
  }, r = () => {
    const s = yt(a);
    !s || !e.value || (It && (t == null || t()), s.style.overflow = l, e.value = false);
  };
  return oa(r), computed({
    get() {
      return e.value;
    },
    set(s) {
      s ? n() : r();
    }
  });
}
function Jn() {
  let a = false;
  const o = ref(false);
  return (e, t) => {
    if (o.value = t.value, a)
      return;
    a = true;
    const l = Fn(e, t.value);
    watch(o, (n) => l.value = n);
  };
}
Jn();
var xr = defineComponent({
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
    const e = a, t = inject(st), { primitiveElement: l, currentElement: n } = P(), r = () => e.isDisableInteractOutside || t.modal && e.isDisableInteractOutside === void 0, s = () => e.isCloseAutoFocus || t.modal && e.isCloseAutoFocus === void 0;
    watchEffect(() => {
      var v;
      n.value && (t != null && t.open.value ? (e.isOpenAutoFocus && Xt(n.value), r() && p(), t != null && t.modal && (window.addEventListener("wheel", i, { passive: false }), window.addEventListener("keydown", d)), window.addEventListener("keydown", m), o("open")) : (c(), window.removeEventListener("wheel", i), window.removeEventListener("keydown", d), window.removeEventListener("keydown", m), s() && ((v = t == null ? void 0 : t.triggerButton.value) == null || v.focus()), o("close")));
    });
    function i(v) {
      v.preventDefault();
    }
    function d(v) {
      if (v.key === "ArrowDown" || v.key === "ArrowUp") {
        const g = document.activeElement;
        g && ["input", "select", "textarea"].indexOf(g.tagName.toLowerCase()) === -1 && v.preventDefault();
      }
    }
    function p() {
      document.querySelector("body").style.pointerEvents = "none";
    }
    function c() {
      document.querySelector("body").style.pointerEvents = "";
    }
    function f() {
      e.isPointerDownOutsideDefault && (t == null || t.closeModal()), o("pointerDownOutside");
    }
    function m(v) {
      var g;
      v.key === "Escape" && (e.isEscapeKeyDownDefault && (v.preventDefault(), t == null || t.closeModal(), s() && ((g = t == null ? void 0 : t.triggerButton.value) == null || g.focus())), o("escapeKeyDown"));
    }
    return (v, g) => {
      var h2, x;
      return (h2 = unref(t)) != null && h2.open.value ? withDirectives((openBlock(), createBlock(unref(D), {
        key: 0,
        "as-child": e.asChild,
        ref_key: "primitiveElement",
        ref: l,
        "data-state": (x = unref(t)) != null && x.open.value ? "open" : "closed",
        role: "dialog",
        tabindex: "-1",
        style: { "pointer-events": "auto" }
      }, {
        default: withCtx(() => [
          renderSlot(v.$slots, "default")
        ]),
        _: 3
      }, 8, ["as-child", "data-state"])), [
        [unref(Gn), f]
      ]) : createCommentVNode("", true);
    };
  }
});
var $r = defineComponent({
  __name: "DialogOverlay",
  props: {
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(st);
    return (t, l) => {
      var n, r;
      return (n = unref(e)) != null && n.open.value ? (openBlock(), createBlock(unref(D), mergeProps({ key: 0 }, o, {
        "data-state": (r = unref(e)) != null && r.open.value ? "open" : "closed",
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
var Sr = defineComponent({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(st);
    function t() {
      e == null || e.closeModal();
    }
    return (l, n) => (openBlock(), createBlock(unref(X), mergeProps(o, {
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
var kr = defineComponent({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a;
    return (e, t) => (openBlock(), createBlock(unref(Fo), normalizeProps(guardReactiveProps(o)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Ar = defineComponent({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a;
    return (e, t) => (openBlock(), createBlock(unref(Jo), normalizeProps(guardReactiveProps(o)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Ge = Symbol();
var Tr = defineComponent({
  __name: "AlertDialogRoot",
  props: {
    open: { type: Boolean, default: void 0 },
    defaultOpen: { type: Boolean, default: false }
  },
  emits: ["update:modelValue"],
  setup(a, { emit: o }) {
    const e = a, t = H(e, "open", o, {
      defaultValue: e.defaultOpen,
      passive: true
    });
    return provide(Ge, {
      open: t,
      openModal: () => {
        t.value = true;
      },
      closeModal: () => {
        t.value = false;
      },
      triggerButton: ref()
    }), (l, n) => renderSlot(l.$slots, "default");
  }
});
var Br = defineComponent({
  __name: "AlertDialogTrigger",
  props: {
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(
      Ge
    ), { primitiveElement: t, currentElement: l } = P();
    function n() {
      console.error(
        "Injected value not found, AlertDialogTrigger possibly not wrapped with AlertDialogRoot. Component may not be working properly."
      );
    }
    return onMounted(() => {
      e ? e.triggerButton.value = l.value : n();
    }), (r, s) => {
      var i, d, p;
      return openBlock(), createBlock(unref(X), mergeProps(o, {
        type: "button",
        ref_key: "primitiveElement",
        ref: t,
        "aria-expanded": ((i = unref(e)) == null ? void 0 : i.open.value) || false,
        "data-state": (d = unref(e)) != null && d.open.value ? "open" : "closed",
        onClick: (p = unref(e)) == null ? void 0 : p.openModal
      }), {
        default: withCtx(() => [
          renderSlot(r.$slots, "default")
        ]),
        _: 3
      }, 16, ["aria-expanded", "data-state", "onClick"]);
    };
  }
});
var Pr = defineComponent({
  __name: "AlertDialogPortal",
  props: {
    container: {}
  },
  setup(a) {
    const o = a;
    return (e, t) => (openBlock(), createBlock(ut, normalizeProps(guardReactiveProps(o)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Or = defineComponent({
  __name: "AlertDialogContent",
  props: {
    isOpenAutoFocus: { type: Boolean, default: true },
    isCloseAutoFocus: { type: Boolean, default: void 0 },
    isEscapeKeyDownDefault: { type: Boolean, default: true },
    asChild: { type: Boolean }
  },
  emits: ["open", "close", "escapeKeyDown"],
  setup(a, { emit: o }) {
    const e = a, t = inject(
      Ge
    ), { primitiveElement: l, currentElement: n } = P(), r = () => e.isCloseAutoFocus;
    watchEffect(() => {
      var f;
      n.value && (t != null && t.open.value ? (e.isOpenAutoFocus && Xt(n.value), d(), window.addEventListener("wheel", s, { passive: false }), window.addEventListener("keydown", i), window.addEventListener("keydown", c), o("open")) : (p(), window.removeEventListener("wheel", s), window.removeEventListener("keydown", i), window.removeEventListener("keydown", c), r() && ((f = t == null ? void 0 : t.triggerButton.value) == null || f.focus()), o("close")));
    });
    function s(f) {
      f.preventDefault();
    }
    function i(f) {
      if (f.key === "ArrowDown" || f.key === "ArrowUp") {
        const m = document.activeElement;
        m && ["input", "select", "textarea"].indexOf(m.tagName.toLowerCase()) === -1 && f.preventDefault();
      }
    }
    function d() {
      document.querySelector("body").style.pointerEvents = "none";
    }
    function p() {
      document.querySelector("body").style.pointerEvents = "";
    }
    function c(f) {
      var m;
      f.key === "Escape" && (e.isEscapeKeyDownDefault && (f.preventDefault(), t == null || t.closeModal(), r() && ((m = t == null ? void 0 : t.triggerButton.value) == null || m.focus())), o("escapeKeyDown"));
    }
    return (f, m) => {
      var v, g;
      return (v = unref(t)) != null && v.open.value ? (openBlock(), createBlock(unref(D), {
        key: 0,
        ref_key: "primitiveElement",
        ref: l,
        "data-state": (g = unref(t)) != null && g.open.value ? "open" : "closed",
        role: "dialog",
        tabindex: "-1",
        style: { "pointer-events": "auto" }
      }, {
        default: withCtx(() => [
          renderSlot(f.$slots, "default")
        ]),
        _: 3
      }, 8, ["data-state"])) : createCommentVNode("", true);
    };
  }
});
var Mr = defineComponent({
  __name: "AlertDialogOverlay",
  props: {
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(
      Ge
    );
    return (t, l) => {
      var n, r;
      return (n = unref(e)) != null && n.open.value ? (openBlock(), createBlock(unref(D), mergeProps({ key: 0 }, o, {
        "as-child": o.asChild,
        "data-state": (r = unref(e)) != null && r.open.value ? "open" : "closed",
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
var Dr = defineComponent({
  __name: "AlertDialogCancel",
  props: {
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(
      Ge
    );
    function t() {
      e == null || e.closeModal();
    }
    return (l, n) => (openBlock(), createBlock(unref(X), mergeProps(o, {
      type: "button",
      onClick: t
    }), {
      default: withCtx(() => [
        renderSlot(l.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Ir = defineComponent({
  __name: "AlertDialogTitle",
  props: {
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a;
    return (e, t) => (openBlock(), createBlock(unref(Fo), normalizeProps(guardReactiveProps(o)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Rr = defineComponent({
  __name: "AlertDialogDescription",
  props: {
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a;
    return (e, t) => (openBlock(), createBlock(unref(Jo), normalizeProps(guardReactiveProps(o)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Nr = defineComponent({
  __name: "AlertDialogAction",
  props: {
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(
      Ge
    );
    function t() {
      e == null || e.closeModal();
    }
    return (l, n) => (openBlock(), createBlock(unref(X), mergeProps(o, {
      type: "button",
      onClick: t
    }), {
      default: withCtx(() => [
        renderSlot(l.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var At = Symbol();
var Lr = defineComponent({
  __name: "ToolbarRoot",
  props: {
    orientation: { default: "horizontal" },
    dir: { default: "ltr" },
    loop: { type: Boolean },
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, { primitiveElement: e, currentElement: t } = P(), l = ref();
    return provide(At, {
      parentElement: t,
      activeElement: l,
      orientation: o.orientation
    }), (n, r) => (openBlock(), createBlock(unref(D), {
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
var Kr = defineComponent({
  __name: "ToolbarButton",
  props: {
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(At), { primitiveElement: t, currentElement: l } = P();
    function n(r) {
      const s = ee(
        r,
        l.value,
        e == null ? void 0 : e.parentElement.value
      );
      s == null || s.focus();
    }
    return (r, s) => {
      var i, d;
      return openBlock(), createBlock(unref(X), {
        ref_key: "primitiveElement",
        ref: t,
        "data-orientation": (i = unref(e)) == null ? void 0 : i.orientation,
        "as-child": o.asChild,
        type: "button",
        tabindex: ((d = unref(e)) == null ? void 0 : d.activeElement.value) === unref(l) ? "0" : "-1",
        onKeydown: n,
        "data-radix-vue-collection-item": ""
      }, {
        default: withCtx(() => [
          renderSlot(r.$slots, "default")
        ]),
        _: 3
      }, 8, ["data-orientation", "as-child", "tabindex"]);
    };
  }
});
var Hr = defineComponent({
  __name: "ToolbarLink",
  props: {
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(At), { primitiveElement: t, currentElement: l } = P();
    function n(r) {
      const s = ee(
        r,
        l.value,
        e == null ? void 0 : e.parentElement.value
      );
      s == null || s.focus();
    }
    return (r, s) => {
      var i;
      return openBlock(), createBlock(unref(Xo), {
        ref_key: "primitiveElement",
        ref: t,
        tabindex: ((i = unref(e)) == null ? void 0 : i.activeElement.value) === unref(l) ? "0" : "-1",
        "as-child": o.asChild,
        onKeydown: n,
        "data-radix-vue-collection-item": ""
      }, {
        default: withCtx(() => [
          renderSlot(r.$slots, "default")
        ]),
        _: 3
      }, 8, ["tabindex", "as-child"]);
    };
  }
});
var ra = Symbol();
var zr = defineComponent({
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
    const e = a, { primitiveElement: t, currentElement: l } = P();
    return provide(ra, {
      type: e.type,
      modelValue: toRef(() => e.modelValue),
      changeModelValue: (n) => {
        if (e.type === "single")
          o("update:modelValue", n);
        else {
          if (!n)
            return;
          let r = e.modelValue;
          if (r.includes(n)) {
            let s = r.findIndex((i) => i === n);
            r.splice(s, 1);
          } else
            r.push(n);
          o("update:modelValue", r);
        }
      },
      orientation: e.orientation ? e.orientation : "horizontal",
      parentElement: l
    }), (n, r) => (openBlock(), createBlock(unref(D), {
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
var Yr = defineComponent({
  __name: "ToolbarToggleItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(
      ra
    ), t = inject(At), l = computed(() => {
      var s, i, d;
      return (e == null ? void 0 : e.type) === "multiple" ? (i = (s = e == null ? void 0 : e.modelValue) == null ? void 0 : s.value) != null && i.includes(o.value) ? "on" : "off" : ((d = e == null ? void 0 : e.modelValue) == null ? void 0 : d.value) === o.value ? "on" : "off";
    }), n = ref();
    function r(s) {
      const i = ee(
        s,
        n.value,
        t == null ? void 0 : t.parentElement.value
      );
      i == null || i.focus();
    }
    return (s, i) => {
      var d;
      return openBlock(), createBlock(unref(X), {
        type: "button",
        "data-state": l.value,
        "data-disabled": o.disabled,
        "data-orientation": (d = unref(e)) == null ? void 0 : d.orientation,
        "as-child": o.asChild,
        onClick: i[0] || (i[0] = (p) => unref(e).changeModelValue(o.value)),
        ref_key: "currentToggleElement",
        ref: n,
        onKeydown: r,
        "data-radix-vue-collection-item": ""
      }, {
        default: withCtx(() => [
          renderSlot(s.$slots, "default")
        ]),
        _: 3
      }, 8, ["data-state", "data-disabled", "data-orientation", "as-child"]);
    };
  }
});
var Wr = defineComponent({
  __name: "ToolbarSeparator",
  props: {
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a;
    return (e, t) => (openBlock(), createBlock(qe, {
      "as-child": o.asChild
    }, null, 8, ["as-child"]));
  }
});
var Vt = Symbol();
var Ur = defineComponent({
  __name: "AvatarRoot",
  props: {
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = ref("loading");
    return provide(Vt, {
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
function Zn(a) {
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
var qr = defineComponent({
  __name: "AvatarImage",
  props: {
    onLoadingStatusChange: {},
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(Vt), t = useAttrs().src, l = Zn(t);
    return watch(
      l,
      (n) => {
        n !== "idle" && (e.imageLoadingStatus.value = n);
      },
      { immediate: true }
    ), (n, r) => unref(l) === "loaded" ? (openBlock(), createBlock(unref(Cn), {
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
var Gr = defineComponent({
  __name: "AvatarFallback",
  props: {
    delayMs: { default: 0 },
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(Vt);
    let t = ref(false), l;
    return o.delayMs ? l = setTimeout(() => {
      t.value = true, clearTimeout(l);
    }, o.delayMs) : t.value = true, (n, r) => {
      var s;
      return unref(t) && ((s = unref(e)) == null ? void 0 : s.imageLoadingStatus.value) !== "loaded" ? (openBlock(), createBlock(unref(ne), {
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
var jt = Symbol();
var fe = defineComponent({
  __name: "PopperRoot",
  setup(a) {
    const o = ref();
    return provide(jt, {
      anchor: o,
      onAnchorChange: (e) => {
        o.value = e;
      }
    }), (e, t) => renderSlot(e.$slots, "default");
  }
});
var ye = defineComponent({
  __name: "PopperAnchor",
  props: {
    element: {},
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, { primitiveElement: e, currentElement: t } = P(), l = inject(jt);
    return watch(t, () => {
      l == null || l.onAnchorChange(o.element ?? t.value);
    }), (n, r) => (openBlock(), createBlock(unref(D), {
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
var Qn = (a) => ({
  name: "transformOrigin",
  options: a,
  fn(o) {
    var h2, x, C;
    const { placement: e, rects: t, middlewareData: l } = o, r = ((h2 = l.arrow) == null ? void 0 : h2.centerOffset) !== 0, s = r ? 0 : a.arrowWidth, i = r ? 0 : a.arrowHeight, [d, p] = Rt(e), c = { start: "0%", center: "50%", end: "100%" }[p], f = (((x = l.arrow) == null ? void 0 : x.x) ?? 0) + s / 2, m = (((C = l.arrow) == null ? void 0 : C.y) ?? 0) + i / 2;
    let v = "", g = "";
    return d === "bottom" ? (v = r ? c : `${f}px`, g = `${-i}px`) : d === "top" ? (v = r ? c : `${f}px`, g = `${t.floating.height + i}px`) : d === "right" ? (v = `${-i}px`, g = r ? c : `${m}px`) : d === "left" && (v = `${t.floating.width + i}px`, g = r ? c : `${m}px`), { data: { x: v, y: g } };
  }
});
function Rt(a) {
  const [o, e = "center"] = a.split("-");
  return [o, e];
}
function Xe(a) {
  return a.split("-")[1];
}
function eo(a) {
  return a === "y" ? "height" : "width";
}
function ge(a) {
  return a.split("-")[0];
}
function Le(a) {
  return ["top", "bottom"].includes(ge(a)) ? "x" : "y";
}
function xo(a, o, e) {
  let { reference: t, floating: l } = a;
  const n = t.x + t.width / 2 - l.width / 2, r = t.y + t.height / 2 - l.height / 2, s = Le(o), i = eo(s), d = t[i] / 2 - l[i] / 2, p = s === "x";
  let c;
  switch (ge(o)) {
    case "top":
      c = { x: n, y: t.y - l.height };
      break;
    case "bottom":
      c = { x: n, y: t.y + t.height };
      break;
    case "right":
      c = { x: t.x + t.width, y: r };
      break;
    case "left":
      c = { x: t.x - l.width, y: r };
      break;
    default:
      c = { x: t.x, y: t.y };
  }
  switch (Xe(o)) {
    case "start":
      c[s] -= d * (e && p ? -1 : 1);
      break;
    case "end":
      c[s] += d * (e && p ? -1 : 1);
  }
  return c;
}
var Vn = async (a, o, e) => {
  const { placement: t = "bottom", strategy: l = "absolute", middleware: n = [], platform: r } = e, s = n.filter(Boolean), i = await (r.isRTL == null ? void 0 : r.isRTL(o));
  let d = await r.getElementRects({ reference: a, floating: o, strategy: l }), { x: p, y: c } = xo(d, t, i), f = t, m = {}, v = 0;
  for (let g = 0; g < s.length; g++) {
    const { name: h2, fn: x } = s[g], { x: C, y: A, data: T, reset: I } = await x({ x: p, y: c, initialPlacement: t, placement: f, strategy: l, middlewareData: m, rects: d, platform: r, elements: { reference: a, floating: o } });
    p = C ?? p, c = A ?? c, m = { ...m, [h2]: { ...m[h2], ...T } }, I && v <= 50 && (v++, typeof I == "object" && (I.placement && (f = I.placement), I.rects && (d = I.rects === true ? await r.getElementRects({ reference: a, floating: o, strategy: l }) : I.rects), { x: p, y: c } = xo(d, f, i)), g = -1);
  }
  return { x: p, y: c, placement: f, strategy: l, middlewareData: m };
};
function Ee(a, o) {
  return typeof a == "function" ? a(o) : a;
}
function ia(a) {
  return typeof a != "number" ? function(o) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...o };
  }(a) : { top: a, right: a, bottom: a, left: a };
}
function _t(a) {
  return { ...a, top: a.y, left: a.x, right: a.x + a.width, bottom: a.y + a.height };
}
async function je(a, o) {
  var e;
  o === void 0 && (o = {});
  const { x: t, y: l, platform: n, rects: r, elements: s, strategy: i } = a, { boundary: d = "clippingAncestors", rootBoundary: p = "viewport", elementContext: c = "floating", altBoundary: f = false, padding: m = 0 } = Ee(o, a), v = ia(m), g = s[f ? c === "floating" ? "reference" : "floating" : c], h2 = _t(await n.getClippingRect({ element: (e = await (n.isElement == null ? void 0 : n.isElement(g))) == null || e ? g : g.contextElement || await (n.getDocumentElement == null ? void 0 : n.getDocumentElement(s.floating)), boundary: d, rootBoundary: p, strategy: i })), x = c === "floating" ? { ...r.floating, x: t, y: l } : r.reference, C = await (n.getOffsetParent == null ? void 0 : n.getOffsetParent(s.floating)), A = await (n.isElement == null ? void 0 : n.isElement(C)) && await (n.getScale == null ? void 0 : n.getScale(C)) || { x: 1, y: 1 }, T = _t(n.convertOffsetParentRelativeRectToViewportRelativeRect ? await n.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: x, offsetParent: C, strategy: i }) : x);
  return { top: (h2.top - T.top + v.top) / A.y, bottom: (T.bottom - h2.bottom + v.bottom) / A.y, left: (h2.left - T.left + v.left) / A.x, right: (T.right - h2.right + v.right) / A.x };
}
var et = Math.min;
var Pe = Math.max;
function Nt(a, o, e) {
  return Pe(a, et(o, e));
}
var jn = (a) => ({ name: "arrow", options: a, async fn(o) {
  const { x: e, y: t, placement: l, rects: n, platform: r, elements: s } = o, { element: i, padding: d = 0 } = Ee(a, o) || {};
  if (i == null)
    return {};
  const p = ia(d), c = { x: e, y: t }, f = Le(l), m = eo(f), v = await r.getDimensions(i), g = f === "y", h2 = g ? "top" : "left", x = g ? "bottom" : "right", C = g ? "clientHeight" : "clientWidth", A = n.reference[m] + n.reference[f] - c[f] - n.floating[m], T = c[f] - n.reference[f], I = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(i));
  let R = I ? I[C] : 0;
  R && await (r.isElement == null ? void 0 : r.isElement(I)) || (R = s.floating[C] || n.floating[m]);
  const B = A / 2 - T / 2, q = R / 2 - v[m] / 2 - 1, G = et(p[h2], q), te = et(p[x], q), Y = G, Q = R - v[m] - te, U = R / 2 - v[m] / 2 + B, oe = Nt(Y, U, Q), ae = Xe(l) != null && U != oe && n.reference[m] / 2 - (U < Y ? G : te) - v[m] / 2 < 0 ? U < Y ? Y - U : Q - U : 0;
  return { [f]: c[f] - ae, data: { [f]: oe, centerOffset: U - oe + ae } };
} });
var sa = ["top", "right", "bottom", "left"];
sa.reduce((a, o) => a.concat(o, o + "-start", o + "-end"), []);
var el = { left: "right", right: "left", bottom: "top", top: "bottom" };
function gt(a) {
  return a.replace(/left|right|bottom|top/g, (o) => el[o]);
}
function tl(a, o, e) {
  e === void 0 && (e = false);
  const t = Xe(a), l = Le(a), n = eo(l);
  let r = l === "x" ? t === (e ? "end" : "start") ? "right" : "left" : t === "start" ? "bottom" : "top";
  return o.reference[n] > o.floating[n] && (r = gt(r)), { main: r, cross: gt(r) };
}
var ol = { start: "end", end: "start" };
function Dt(a) {
  return a.replace(/start|end/g, (o) => ol[o]);
}
var al = function(a) {
  return a === void 0 && (a = {}), { name: "flip", options: a, async fn(o) {
    var e;
    const { placement: t, middlewareData: l, rects: n, initialPlacement: r, platform: s, elements: i } = o, { mainAxis: d = true, crossAxis: p = true, fallbackPlacements: c, fallbackStrategy: f = "bestFit", fallbackAxisSideDirection: m = "none", flipAlignment: v = true, ...g } = Ee(a, o), h2 = ge(t), x = ge(r) === r, C = await (s.isRTL == null ? void 0 : s.isRTL(i.floating)), A = c || (x || !v ? [gt(r)] : function(Y) {
      const Q = gt(Y);
      return [Dt(Y), Q, Dt(Q)];
    }(r));
    c || m === "none" || A.push(...function(Y, Q, U, oe) {
      const ae = Xe(Y);
      let j = function(Te, Be, Pa) {
        const fo = ["left", "right"], mo = ["right", "left"], Oa = ["top", "bottom"], Ma = ["bottom", "top"];
        switch (Te) {
          case "top":
          case "bottom":
            return Pa ? Be ? mo : fo : Be ? fo : mo;
          case "left":
          case "right":
            return Be ? Oa : Ma;
          default:
            return [];
        }
      }(ge(Y), U === "start", oe);
      return ae && (j = j.map((Te) => Te + "-" + ae), Q && (j = j.concat(j.map(Dt)))), j;
    }(r, v, m, C));
    const T = [r, ...A], I = await je(o, g), R = [];
    let B = ((e = l.flip) == null ? void 0 : e.overflows) || [];
    if (d && R.push(I[h2]), p) {
      const { main: Y, cross: Q } = tl(t, n, C);
      R.push(I[Y], I[Q]);
    }
    if (B = [...B, { placement: t, overflows: R }], !R.every((Y) => Y <= 0)) {
      var q, G;
      const Y = (((q = l.flip) == null ? void 0 : q.index) || 0) + 1, Q = T[Y];
      if (Q)
        return { data: { index: Y, overflows: B }, reset: { placement: Q } };
      let U = (G = B.filter((oe) => oe.overflows[0] <= 0).sort((oe, ae) => oe.overflows[1] - ae.overflows[1])[0]) == null ? void 0 : G.placement;
      if (!U)
        switch (f) {
          case "bestFit": {
            var te;
            const oe = (te = B.map((ae) => [ae.placement, ae.overflows.filter((j) => j > 0).reduce((j, Te) => j + Te, 0)]).sort((ae, j) => ae[1] - j[1])[0]) == null ? void 0 : te[0];
            oe && (U = oe);
            break;
          }
          case "initialPlacement":
            U = r;
        }
      if (t !== U)
        return { reset: { placement: U } };
    }
    return {};
  } };
};
function $o(a, o) {
  return { top: a.top - o.height, right: a.right - o.width, bottom: a.bottom - o.height, left: a.left - o.width };
}
function So(a) {
  return sa.some((o) => a[o] >= 0);
}
var nl = function(a) {
  return a === void 0 && (a = {}), { name: "hide", options: a, async fn(o) {
    const { rects: e } = o, { strategy: t = "referenceHidden", ...l } = Ee(a, o);
    switch (t) {
      case "referenceHidden": {
        const n = $o(await je(o, { ...l, elementContext: "reference" }), e.reference);
        return { data: { referenceHiddenOffsets: n, referenceHidden: So(n) } };
      }
      case "escaped": {
        const n = $o(await je(o, { ...l, altBoundary: true }), e.floating);
        return { data: { escapedOffsets: n, escaped: So(n) } };
      }
      default:
        return {};
    }
  } };
};
var ll = function(a) {
  return a === void 0 && (a = 0), { name: "offset", options: a, async fn(o) {
    const { x: e, y: t } = o, l = await async function(n, r) {
      const { placement: s, platform: i, elements: d } = n, p = await (i.isRTL == null ? void 0 : i.isRTL(d.floating)), c = ge(s), f = Xe(s), m = Le(s) === "x", v = ["left", "top"].includes(c) ? -1 : 1, g = p && m ? -1 : 1, h2 = Ee(r, n);
      let { mainAxis: x, crossAxis: C, alignmentAxis: A } = typeof h2 == "number" ? { mainAxis: h2, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...h2 };
      return f && typeof A == "number" && (C = f === "end" ? -1 * A : A), m ? { x: C * g, y: x * v } : { x: x * v, y: C * g };
    }(o, a);
    return { x: e + l.x, y: t + l.y, data: l };
  } };
};
function ua(a) {
  return a === "x" ? "y" : "x";
}
var rl = function(a) {
  return a === void 0 && (a = {}), { name: "shift", options: a, async fn(o) {
    const { x: e, y: t, placement: l } = o, { mainAxis: n = true, crossAxis: r = false, limiter: s = { fn: (h2) => {
      let { x, y: C } = h2;
      return { x, y: C };
    } }, ...i } = Ee(a, o), d = { x: e, y: t }, p = await je(o, i), c = Le(ge(l)), f = ua(c);
    let m = d[c], v = d[f];
    if (n) {
      const h2 = c === "y" ? "bottom" : "right";
      m = Nt(m + p[c === "y" ? "top" : "left"], m, m - p[h2]);
    }
    if (r) {
      const h2 = f === "y" ? "bottom" : "right";
      v = Nt(v + p[f === "y" ? "top" : "left"], v, v - p[h2]);
    }
    const g = s.fn({ ...o, [c]: m, [f]: v });
    return { ...g, data: { x: g.x - e, y: g.y - t } };
  } };
};
var il = function(a) {
  return a === void 0 && (a = {}), { options: a, fn(o) {
    const { x: e, y: t, placement: l, rects: n, middlewareData: r } = o, { offset: s = 0, mainAxis: i = true, crossAxis: d = true } = Ee(a, o), p = { x: e, y: t }, c = Le(l), f = ua(c);
    let m = p[c], v = p[f];
    const g = Ee(s, o), h2 = typeof g == "number" ? { mainAxis: g, crossAxis: 0 } : { mainAxis: 0, crossAxis: 0, ...g };
    if (i) {
      const A = c === "y" ? "height" : "width", T = n.reference[c] - n.floating[A] + h2.mainAxis, I = n.reference[c] + n.reference[A] - h2.mainAxis;
      m < T ? m = T : m > I && (m = I);
    }
    if (d) {
      var x, C;
      const A = c === "y" ? "width" : "height", T = ["top", "left"].includes(ge(l)), I = n.reference[f] - n.floating[A] + (T && ((x = r.offset) == null ? void 0 : x[f]) || 0) + (T ? 0 : h2.crossAxis), R = n.reference[f] + n.reference[A] + (T ? 0 : ((C = r.offset) == null ? void 0 : C[f]) || 0) - (T ? h2.crossAxis : 0);
      v < I ? v = I : v > R && (v = R);
    }
    return { [c]: m, [f]: v };
  } };
};
var sl = function(a) {
  return a === void 0 && (a = {}), { name: "size", options: a, async fn(o) {
    const { placement: e, rects: t, platform: l, elements: n } = o, { apply: r = () => {
    }, ...s } = Ee(a, o), i = await je(o, s), d = ge(e), p = Xe(e), c = Le(e) === "x", { width: f, height: m } = t.floating;
    let v, g;
    d === "top" || d === "bottom" ? (v = d, g = p === (await (l.isRTL == null ? void 0 : l.isRTL(n.floating)) ? "start" : "end") ? "left" : "right") : (g = d, v = p === "end" ? "top" : "bottom");
    const h2 = m - i[v], x = f - i[g], C = !o.middlewareData.shift;
    let A = h2, T = x;
    if (c) {
      const R = f - i.left - i.right;
      T = p || C ? et(x, R) : R;
    } else {
      const R = m - i.top - i.bottom;
      A = p || C ? et(h2, R) : R;
    }
    if (C && !p) {
      const R = Pe(i.left, 0), B = Pe(i.right, 0), q = Pe(i.top, 0), G = Pe(i.bottom, 0);
      c ? T = f - 2 * (R !== 0 || B !== 0 ? R + B : Pe(i.left, i.right)) : A = m - 2 * (q !== 0 || G !== 0 ? q + G : Pe(i.top, i.bottom));
    }
    await r({ ...o, availableWidth: T, availableHeight: A });
    const I = await l.getDimensions(n.floating);
    return f !== I.width || m !== I.height ? { reset: { rects: true } } : {};
  } };
};
function se(a) {
  var o;
  return ((o = a.ownerDocument) == null ? void 0 : o.defaultView) || window;
}
function ce(a) {
  return se(a).getComputedStyle(a);
}
function da(a) {
  return a instanceof se(a).Node;
}
function $e(a) {
  return da(a) ? (a.nodeName || "").toLowerCase() : "#document";
}
function pe(a) {
  return a instanceof se(a).HTMLElement;
}
function be(a) {
  return a instanceof se(a).Element;
}
function ko(a) {
  return typeof ShadowRoot < "u" && (a instanceof se(a).ShadowRoot || a instanceof ShadowRoot);
}
function tt(a) {
  const { overflow: o, overflowX: e, overflowY: t, display: l } = ce(a);
  return /auto|scroll|overlay|hidden|clip/.test(o + t + e) && !["inline", "contents"].includes(l);
}
function ul(a) {
  return ["table", "td", "th"].includes($e(a));
}
function Lt(a) {
  const o = to(), e = ce(a);
  return e.transform !== "none" || e.perspective !== "none" || !o && !!e.backdropFilter && e.backdropFilter !== "none" || !o && !!e.filter && e.filter !== "none" || ["transform", "perspective", "filter"].some((t) => (e.willChange || "").includes(t)) || ["paint", "layout", "strict", "content"].some((t) => (e.contain || "").includes(t));
}
function to() {
  return !(typeof CSS > "u" || !CSS.supports) && CSS.supports("-webkit-backdrop-filter", "none");
}
function Tt(a) {
  return ["html", "body", "#document"].includes($e(a));
}
var Kt = Math.min;
var ze = Math.max;
var bt = Math.round;
var pt = Math.floor;
var De = (a) => ({ x: a, y: a });
function ca(a) {
  const o = ce(a);
  let e = parseFloat(o.width) || 0, t = parseFloat(o.height) || 0;
  const l = pe(a), n = l ? a.offsetWidth : e, r = l ? a.offsetHeight : t, s = bt(e) !== n || bt(t) !== r;
  return s && (e = n, t = r), { width: e, height: t, $: s };
}
function oo(a) {
  return be(a) ? a : a.contextElement;
}
function Ye(a) {
  const o = oo(a);
  if (!pe(o))
    return De(1);
  const e = o.getBoundingClientRect(), { width: t, height: l, $: n } = ca(o);
  let r = (n ? bt(e.width) : e.width) / t, s = (n ? bt(e.height) : e.height) / l;
  return r && Number.isFinite(r) || (r = 1), s && Number.isFinite(s) || (s = 1), { x: r, y: s };
}
var Ao = De(0);
function pa(a, o, e) {
  var t, l;
  if (o === void 0 && (o = true), !to())
    return Ao;
  const n = a ? se(a) : window;
  return !e || o && e !== n ? Ao : { x: ((t = n.visualViewport) == null ? void 0 : t.offsetLeft) || 0, y: ((l = n.visualViewport) == null ? void 0 : l.offsetTop) || 0 };
}
function Ie(a, o, e, t) {
  o === void 0 && (o = false), e === void 0 && (e = false);
  const l = a.getBoundingClientRect(), n = oo(a);
  let r = De(1);
  o && (t ? be(t) && (r = Ye(t)) : r = Ye(a));
  const s = pa(n, e, t);
  let i = (l.left + s.x) / r.x, d = (l.top + s.y) / r.y, p = l.width / r.x, c = l.height / r.y;
  if (n) {
    const f = se(n), m = t && be(t) ? se(t) : t;
    let v = f.frameElement;
    for (; v && t && m !== f; ) {
      const g = Ye(v), h2 = v.getBoundingClientRect(), x = getComputedStyle(v), C = h2.left + (v.clientLeft + parseFloat(x.paddingLeft)) * g.x, A = h2.top + (v.clientTop + parseFloat(x.paddingTop)) * g.y;
      i *= g.x, d *= g.y, p *= g.x, c *= g.y, i += C, d += A, v = se(v).frameElement;
    }
  }
  return _t({ width: p, height: c, x: i, y: d });
}
function we(a) {
  return ((da(a) ? a.ownerDocument : a.document) || window.document).documentElement;
}
function Bt(a) {
  return be(a) ? { scrollLeft: a.scrollLeft, scrollTop: a.scrollTop } : { scrollLeft: a.pageXOffset, scrollTop: a.pageYOffset };
}
function fa(a) {
  return Ie(we(a)).left + Bt(a).scrollLeft;
}
function We(a) {
  if ($e(a) === "html")
    return a;
  const o = a.assignedSlot || a.parentNode || ko(a) && a.host || we(a);
  return ko(o) ? o.host : o;
}
function ma(a) {
  const o = We(a);
  return Tt(o) ? a.ownerDocument ? a.ownerDocument.body : a.body : pe(o) && tt(o) ? o : ma(o);
}
function wt(a, o) {
  var e;
  o === void 0 && (o = []);
  const t = ma(a), l = t === ((e = a.ownerDocument) == null ? void 0 : e.body), n = se(t);
  return l ? o.concat(n, n.visualViewport || [], tt(t) ? t : []) : o.concat(t, wt(t));
}
function To(a, o, e) {
  let t;
  if (o === "viewport")
    t = function(l, n) {
      const r = se(l), s = we(l), i = r.visualViewport;
      let d = s.clientWidth, p = s.clientHeight, c = 0, f = 0;
      if (i) {
        d = i.width, p = i.height;
        const m = to();
        (!m || m && n === "fixed") && (c = i.offsetLeft, f = i.offsetTop);
      }
      return { width: d, height: p, x: c, y: f };
    }(a, e);
  else if (o === "document")
    t = function(l) {
      const n = we(l), r = Bt(l), s = l.ownerDocument.body, i = ze(n.scrollWidth, n.clientWidth, s.scrollWidth, s.clientWidth), d = ze(n.scrollHeight, n.clientHeight, s.scrollHeight, s.clientHeight);
      let p = -r.scrollLeft + fa(l);
      const c = -r.scrollTop;
      return ce(s).direction === "rtl" && (p += ze(n.clientWidth, s.clientWidth) - i), { width: i, height: d, x: p, y: c };
    }(we(a));
  else if (be(o))
    t = function(l, n) {
      const r = Ie(l, true, n === "fixed"), s = r.top + l.clientTop, i = r.left + l.clientLeft, d = pe(l) ? Ye(l) : De(1);
      return { width: l.clientWidth * d.x, height: l.clientHeight * d.y, x: i * d.x, y: s * d.y };
    }(o, e);
  else {
    const l = pa(a);
    t = { ...o, x: o.x - l.x, y: o.y - l.y };
  }
  return _t(t);
}
function va(a, o) {
  const e = We(a);
  return !(e === o || !be(e) || Tt(e)) && (ce(e).position === "fixed" || va(e, o));
}
function Bo(a, o) {
  return pe(a) && ce(a).position !== "fixed" ? o ? o(a) : a.offsetParent : null;
}
function Po(a, o) {
  const e = se(a);
  if (!pe(a))
    return e;
  let t = Bo(a, o);
  for (; t && ul(t) && ce(t).position === "static"; )
    t = Bo(t, o);
  return t && ($e(t) === "html" || $e(t) === "body" && ce(t).position === "static" && !Lt(t)) ? e : t || function(l) {
    let n = We(l);
    for (; pe(n) && !Tt(n); ) {
      if (Lt(n))
        return n;
      n = We(n);
    }
    return null;
  }(a) || e;
}
function dl(a, o, e) {
  const t = pe(o), l = we(o), n = e === "fixed", r = Ie(a, true, n, o);
  let s = { scrollLeft: 0, scrollTop: 0 };
  const i = De(0);
  if (t || !t && !n)
    if (($e(o) !== "body" || tt(l)) && (s = Bt(o)), pe(o)) {
      const d = Ie(o, true, n, o);
      i.x = d.x + o.clientLeft, i.y = d.y + o.clientTop;
    } else
      l && (i.x = fa(l));
  return { x: r.left + s.scrollLeft - i.x, y: r.top + s.scrollTop - i.y, width: r.width, height: r.height };
}
var cl = { getClippingRect: function(a) {
  let { element: o, boundary: e, rootBoundary: t, strategy: l } = a;
  const n = e === "clippingAncestors" ? function(d, p) {
    const c = p.get(d);
    if (c)
      return c;
    let f = wt(d).filter((h2) => be(h2) && $e(h2) !== "body"), m = null;
    const v = ce(d).position === "fixed";
    let g = v ? We(d) : d;
    for (; be(g) && !Tt(g); ) {
      const h2 = ce(g), x = Lt(g);
      x || h2.position !== "fixed" || (m = null), (v ? !x && !m : !x && h2.position === "static" && m && ["absolute", "fixed"].includes(m.position) || tt(g) && !x && va(d, g)) ? f = f.filter((C) => C !== g) : m = h2, g = We(g);
    }
    return p.set(d, f), f;
  }(o, this._c) : [].concat(e), r = [...n, t], s = r[0], i = r.reduce((d, p) => {
    const c = To(o, p, l);
    return d.top = ze(c.top, d.top), d.right = Kt(c.right, d.right), d.bottom = Kt(c.bottom, d.bottom), d.left = ze(c.left, d.left), d;
  }, To(o, s, l));
  return { width: i.right - i.left, height: i.bottom - i.top, x: i.left, y: i.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(a) {
  let { rect: o, offsetParent: e, strategy: t } = a;
  const l = pe(e), n = we(e);
  if (e === n)
    return o;
  let r = { scrollLeft: 0, scrollTop: 0 }, s = De(1);
  const i = De(0);
  if ((l || !l && t !== "fixed") && (($e(e) !== "body" || tt(n)) && (r = Bt(e)), pe(e))) {
    const d = Ie(e);
    s = Ye(e), i.x = d.x + e.clientLeft, i.y = d.y + e.clientTop;
  }
  return { width: o.width * s.x, height: o.height * s.y, x: o.x * s.x - r.scrollLeft * s.x + i.x, y: o.y * s.y - r.scrollTop * s.y + i.y };
}, isElement: be, getDimensions: function(a) {
  return ca(a);
}, getOffsetParent: Po, getDocumentElement: we, getScale: Ye, async getElementRects(a) {
  let { reference: o, floating: e, strategy: t } = a;
  const l = this.getOffsetParent || Po, n = this.getDimensions;
  return { reference: dl(o, await l(e), t), floating: { x: 0, y: 0, ...await n(e) } };
}, getClientRects: (a) => Array.from(a.getClientRects()), isRTL: (a) => ce(a).direction === "rtl" };
function pl(a, o, e, t) {
  t === void 0 && (t = {});
  const { ancestorScroll: l = true, ancestorResize: n = true, elementResize: r = true, layoutShift: s = typeof IntersectionObserver == "function", animationFrame: i = false } = t, d = oo(a), p = l || n ? [...d ? wt(d) : [], ...wt(o)] : [];
  p.forEach((g) => {
    l && g.addEventListener("scroll", e, { passive: true }), n && g.addEventListener("resize", e);
  });
  const c = d && s ? function(g, h2) {
    let x, C = null;
    const A = we(g);
    function T() {
      clearTimeout(x), C && C.disconnect(), C = null;
    }
    return function I(R, B) {
      R === void 0 && (R = false), B === void 0 && (B = 1), T();
      const { left: q, top: G, width: te, height: Y } = g.getBoundingClientRect();
      if (R || h2(), !te || !Y)
        return;
      const Q = pt(G), U = pt(A.clientWidth - (q + te)), oe = pt(A.clientHeight - (G + Y)), ae = pt(q);
      let j = true;
      C = new IntersectionObserver((Te) => {
        const Be = Te[0].intersectionRatio;
        if (Be !== B) {
          if (!j)
            return I();
          Be ? I(false, Be) : x = setTimeout(() => {
            I(false, 1e-7);
          }, 100);
        }
        j = false;
      }, { rootMargin: -Q + "px " + -U + "px " + -oe + "px " + -ae + "px", threshold: ze(0, Kt(1, B)) || 1 }), C.observe(g);
    }(true), T;
  }(d, e) : null;
  let f, m = null;
  r && (m = new ResizeObserver(e), d && !i && m.observe(d), m.observe(o));
  let v = i ? Ie(a) : null;
  return i && function g() {
    const h2 = Ie(a);
    !v || h2.x === v.x && h2.y === v.y && h2.width === v.width && h2.height === v.height || e(), v = h2, f = requestAnimationFrame(g);
  }(), e(), () => {
    p.forEach((g) => {
      l && g.removeEventListener("scroll", e), n && g.removeEventListener("resize", e);
    }), c && c(), m && m.disconnect(), m = null, i && cancelAnimationFrame(f);
  };
}
var fl = (a, o, e) => {
  const t = /* @__PURE__ */ new Map(), l = { platform: cl, ...e }, n = { ...l.platform, _c: t };
  return Vn(a, o, { ...l, platform: n });
};
function Ht(a) {
  var o;
  return (o = a == null ? void 0 : a.$el) != null ? o : a;
}
function ml(a) {
  return {
    name: "arrow",
    options: a,
    fn(o) {
      const e = Ht(unref(a.element));
      return e == null ? {} : jn({
        element: e,
        padding: a.padding
      }).fn(o);
    }
  };
}
function ha(a) {
  return typeof window > "u" ? 1 : (a.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Oo(a, o) {
  const e = ha(a);
  return Math.round(o * e) / e;
}
function vl(a, o, e) {
  e === void 0 && (e = {});
  const t = e.whileElementsMounted, l = computed(() => {
    var B;
    return (B = unref(e.open)) != null ? B : true;
  }), n = computed(() => unref(e.middleware)), r = computed(() => {
    var B;
    return (B = unref(e.placement)) != null ? B : "bottom";
  }), s = computed(() => {
    var B;
    return (B = unref(e.strategy)) != null ? B : "absolute";
  }), i = computed(() => {
    var B;
    return (B = unref(e.transform)) != null ? B : true;
  }), d = computed(() => Ht(a.value)), p = computed(() => Ht(o.value)), c = ref(0), f = ref(0), m = ref(s.value), v = ref(r.value), g = shallowRef({}), h2 = ref(false), x = computed(() => {
    const B = {
      position: m.value,
      left: "0",
      top: "0"
    };
    if (!p.value)
      return B;
    const q = Oo(p.value, c.value), G = Oo(p.value, f.value);
    return i.value ? {
      ...B,
      transform: "translate(" + q + "px, " + G + "px)",
      ...ha(p.value) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: m.value,
      left: q + "px",
      top: G + "px"
    };
  });
  let C;
  function A() {
    d.value == null || p.value == null || fl(d.value, p.value, {
      middleware: n.value,
      placement: r.value,
      strategy: s.value
    }).then((B) => {
      c.value = B.x, f.value = B.y, m.value = B.strategy, v.value = B.placement, g.value = B.middlewareData, h2.value = true;
    });
  }
  function T() {
    typeof C == "function" && (C(), C = void 0);
  }
  function I() {
    if (T(), t === void 0) {
      A();
      return;
    }
    if (d.value != null && p.value != null) {
      C = t(d.value, p.value, A);
      return;
    }
  }
  function R() {
    l.value || (h2.value = false);
  }
  return watch([n, r, s], A, {
    flush: "sync"
  }), watch([d, p], I, {
    flush: "sync"
  }), watch(l, R, {
    flush: "sync"
  }), getCurrentScope() && onScopeDispose(T), {
    x: shallowReadonly(c),
    y: shallowReadonly(f),
    strategy: shallowReadonly(m),
    placement: shallowReadonly(v),
    middlewareData: shallowReadonly(g),
    isPositioned: shallowReadonly(h2),
    floatingStyles: x,
    update: A
  };
}
var ya = Symbol();
var hl = {
  inheritAttrs: false
};
var _e = defineComponent({
  ...hl,
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
    const o = a, e = inject(jt), t = ref(), l = ref(), n = ref(), { width: r, height: s } = yn(n), i = computed(
      () => o.side + (o.align !== "center" ? "-" + o.align : "")
    ), d = computed(() => typeof o.collisionPadding == "number" ? o.collisionPadding : { top: 0, right: 0, bottom: 0, left: 0, ...o.collisionPadding }), p = computed(() => Array.isArray(o.collisionBoundary) ? o.collisionBoundary : [o.collisionBoundary]), c = computed(() => ({
      padding: d.value,
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: p.value.length > 0
    })), f = Qa(() => [
      ll({
        mainAxis: o.sideOffset + s.value,
        alignmentAxis: o.alignOffset
      }),
      o.avoidCollisions && rl({
        mainAxis: true,
        crossAxis: !!o.prioritizePosition,
        limiter: o.sticky === "partial" ? il() : void 0,
        ...c.value
      }),
      !o.prioritizePosition && o.avoidCollisions && al({
        ...c.value
      }),
      sl({
        ...c,
        apply: ({ elements: B, rects: q, availableWidth: G, availableHeight: te }) => {
          const { width: Y, height: Q } = q.reference, U = B.floating.style;
          Object.assign(B.floating.style, {
            maxWidth: `${G}px`,
            maxHeight: `${te}px`
          }), U.setProperty(
            "--radix-popper-available-width",
            `${G}px`
          ), U.setProperty(
            "--radix-popper-available-height",
            `${te}px`
          ), U.setProperty(
            "--radix-popper-anchor-width",
            `${Y}px`
          ), U.setProperty(
            "--radix-popper-anchor-height",
            `${Q}px`
          );
        }
      }),
      n.value && ml({ element: n.value, padding: o.arrowPadding }),
      Qn({
        arrowWidth: r.value,
        arrowHeight: s.value
      }),
      o.hideWhenDetached && nl({ strategy: "referenceHidden", ...c.value })
    ]), { floatingStyles: m, placement: v, isPositioned: g, middlewareData: h2 } = vl(
      e.anchor,
      t,
      {
        strategy: "fixed",
        placement: i,
        whileElementsMounted: (...B) => pl(...B, {
          animationFrame: o.updatePositionStrategy === "always"
        }),
        middleware: f
      }
    ), x = computed(
      () => Rt(v.value)[0]
    ), C = computed(
      () => Rt(v.value)[1]
    );
    watchEffect(() => {
      var B;
      g.value && ((B = o.onPlaced) == null || B.call(o));
    });
    const A = computed(
      () => {
        var B;
        return ((B = h2.value.arrow) == null ? void 0 : B.centerOffset) !== 0;
      }
    ), T = ref("");
    watchEffect(() => {
      l.value && (T.value = window.getComputedStyle(l.value).zIndex);
    });
    const I = computed(() => {
      var B;
      return ((B = h2.value.arrow) == null ? void 0 : B.x) ?? 0;
    }), R = computed(() => {
      var B;
      return ((B = h2.value.arrow) == null ? void 0 : B.y) ?? 0;
    });
    return provide(ya, {
      placedSide: x,
      onArrowChange: (B) => {
        n.value = B;
      },
      arrowX: I,
      arrowY: R,
      shouldHideArrow: A
    }), (B, q) => {
      var G, te, Y;
      return openBlock(), createElementBlock("div", {
        ref_key: "floatingRef",
        ref: t,
        "data-radix-popper-content-wrapper": "",
        style: normalizeStyle({
          ...unref(m),
          transform: unref(g) ? unref(m).transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: T.value,
          ["--radix-popper-transform-origin"]: [
            (G = unref(h2).transformOrigin) == null ? void 0 : G.x,
            (te = unref(h2).transformOrigin) == null ? void 0 : te.y
          ].join(" ")
        })
      }, [
        createVNode(unref(D), mergeProps(B.$attrs, {
          "as-child": o.asChild,
          "data-side": x.value,
          "data-align": C.value,
          style: {
            // if the PopperContent hasn't been placed yet (not all measurements done)
            // we prevent animations so that users's animation don't kick in too early referring wrong sides
            animation: unref(g) ? void 0 : "none",
            // hide the content if using the hide middleware and should be hidden
            opacity: (Y = unref(h2).hide) != null && Y.referenceHidden ? 0 : void 0
          }
        }), {
          default: withCtx(() => [
            renderSlot(B.$slots, "default")
          ]),
          _: 3
        }, 16, ["as-child", "data-side", "data-align", "style"])
      ], 4);
    };
  }
});
var yl = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
};
var _l = {
  inheritAttrs: false
};
var Ke = defineComponent({
  ..._l,
  __name: "PopperArrow",
  props: {
    width: {},
    height: {},
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = inject(ya), e = computed(
      () => o != null && o.placedSide ? yl[o == null ? void 0 : o.placedSide.value] : ""
    );
    return (t, l) => {
      var n, r, s, i;
      return openBlock(), createElementBlock("span", {
        ref: (d) => {
          unref(o).onArrowChange(d);
        },
        style: normalizeStyle({
          position: "absolute",
          left: (n = unref(o).arrowX) != null && n.value ? `${(r = unref(o).arrowX) == null ? void 0 : r.value}px` : void 0,
          top: (s = unref(o).arrowY) != null && s.value ? `${(i = unref(o).arrowY) == null ? void 0 : i.value}px` : void 0,
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
        createVNode(Wn, mergeProps(t.$attrs, { style: {
          display: "block"
        } }), null, 16)
      ], 4);
    };
  }
});
var ao = Symbol();
var Xr = defineComponent({
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
    return provide(ao, {
      open: t,
      showTooltip: (r) => {
        l.value = r, t.value = true;
      },
      hideTooltip: () => t.value = false,
      delayMs: e.delayDuration,
      dataState: n,
      disableHoverableContent: computed(() => e.disableHoverableContent),
      contentId: le()
    }), (r, s) => (openBlock(), createBlock(unref(fe), null, {
      default: withCtx(() => [
        renderSlot(r.$slots, "default")
      ]),
      _: 3
    }));
  }
});
var Fr = defineComponent({
  __name: "TooltipTrigger",
  props: {
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(ao), { primitiveElement: t, currentElement: l } = P();
    return vn(l, {
      delayEnter: e == null ? void 0 : e.delayMs,
      onHoverEnter: () => e == null ? void 0 : e.showTooltip(true),
      delayLeave: 0,
      onHoverLeave: () => e == null ? void 0 : e.hideTooltip(),
      disabled: e == null ? void 0 : e.disableHoverableContent
    }), (n, r) => (openBlock(), createBlock(unref(ye), { asChild: "" }, {
      default: withCtx(() => {
        var s, i, d, p;
        return [
          createVNode(unref(X), {
            type: "button",
            ref_key: "primitiveElement",
            ref: t,
            "aria-describedby": (s = unref(e)) != null && s.open ? unref(e).contentId : void 0,
            "as-child": o.asChild,
            "data-state": (i = unref(e)) == null ? void 0 : i.dataState.value,
            "aria-expanded": ((d = unref(e)) == null ? void 0 : d.open.value) || false,
            onFocus: r[0] || (r[0] = (c) => {
              var f;
              return (f = unref(e)) == null ? void 0 : f.showTooltip(false);
            }),
            onBlur: (p = unref(e)) == null ? void 0 : p.hideTooltip,
            style: { cursor: "default" }
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
var _a = defineComponent({
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
var Jr = defineComponent({
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
    const e = a, t = ref(), l = inject(ao);
    Ce(t, () => {
      o("pointerDownOutside", new Event("pointerdown"));
    });
    function n(s) {
      o("escapeKeyDown", s);
    }
    const r = computed(() => {
      var p, c;
      if (e.ariaLabel)
        return e.ariaLabel;
      const s = (c = (p = useSlots()).default) == null ? void 0 : c.call(p);
      let i = "";
      function d(f) {
        typeof f.children == "string" ? i += f.children : Array.isArray(f.children) && f.children.forEach((m) => d(m));
      }
      return s == null || s.forEach((f) => d(f)), i;
    });
    return (s, i) => {
      var d;
      return (d = unref(l)) != null && d.open.value ? (openBlock(), createBlock(unref(_e), {
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
        onKeydown: i[0] || (i[0] = withKeys((p) => n(p), ["esc"]))
      }, {
        default: withCtx(() => {
          var p, c;
          return [
            createVNode(unref(D), {
              "data-state": (p = unref(l)) == null ? void 0 : p.dataState.value,
              "data-side": e.side,
              "data-align": e.align,
              "as-child": e.asChild,
              role: "tooltip",
              tabindex: "-1"
            }, {
              default: withCtx(() => [
                renderSlot(s.$slots, "default")
              ]),
              _: 3
            }, 8, ["data-state", "data-side", "data-align", "as-child"]),
            createVNode(unref(_a), {
              id: (c = unref(l)) == null ? void 0 : c.contentId,
              role: "tooltip"
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(r.value), 1)
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
var Zr = defineComponent({
  __name: "TooltipArrow",
  props: {
    width: { default: 10 },
    height: { default: 5 },
    asChild: { type: Boolean, default: false }
  },
  setup(a) {
    const o = a;
    return (e, t) => (openBlock(), createBlock(unref(Ke), {
      "as-child": o.asChild,
      height: o.height,
      width: o.width
    }, null, 8, ["as-child", "height", "width"]));
  }
});
var no = Symbol();
var Qr = defineComponent({
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
    return provide(no, {
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
    }), (l, n) => (openBlock(), createBlock(unref(fe), null, {
      default: withCtx(() => [
        renderSlot(l.$slots, "default")
      ]),
      _: 3
    }));
  }
});
var Vr = defineComponent({
  __name: "HoverCardTrigger",
  props: {
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(no), { primitiveElement: t, currentElement: l } = P();
    async function n(s) {
      await mn(
        s,
        l.value,
        e == null ? void 0 : e.openDelay
      ) && (e == null || e.showTooltip());
    }
    async function r(s) {
      e.isHover = false, await Uo(s, e == null ? void 0 : e.closeDelay) && !(e != null && e.isHover) && (e == null || e.hideTooltip());
    }
    return (s, i) => (openBlock(), createBlock(unref(ye), { asChild: "" }, {
      default: withCtx(() => {
        var d, p;
        return [
          createVNode(unref(X), {
            ref_key: "primitiveElement",
            ref: t,
            "as-child": o.asChild,
            "aria-expanded": ((d = unref(e)) == null ? void 0 : d.open.value) || false,
            "data-state": (p = unref(e)) != null && p.open.value ? "open" : "closed",
            onMouseover: i[0] || (i[0] = (c) => unref(e).isHover = true),
            onMouseenter: n,
            onMouseleave: r,
            style: { cursor: "default" }
          }, {
            default: withCtx(() => [
              renderSlot(s.$slots, "default")
            ]),
            _: 3
          }, 8, ["as-child", "aria-expanded", "data-state"])
        ];
      }),
      _: 3
    }));
  }
});
var jr = defineComponent({
  __name: "HoverCardPortal",
  props: {
    container: {}
  },
  setup(a) {
    const o = a;
    return (e, t) => (openBlock(), createBlock(ut, normalizeProps(guardReactiveProps(o)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var ei = defineComponent({
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
    const o = a, e = inject(no);
    async function t(l) {
      e.isHover = false, await Uo(l, e == null ? void 0 : e.closeDelay) && !(e != null && e.isHover) && (e == null || e.hideTooltip());
    }
    return (l, n) => {
      var r, s;
      return (r = unref(e)) != null && r.open.value ? (openBlock(), createBlock(unref(_e), mergeProps({ key: 0 }, o, {
        onMouseover: n[0] || (n[0] = (i) => unref(e).isHover = true),
        onMouseleave: t,
        "data-state": (s = unref(e)) != null && s.open.value ? "open" : "closed",
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
var ti = defineComponent({
  __name: "HoverCardArrow",
  setup(a) {
    return (o, e) => (openBlock(), createBlock(unref(Ke)));
  }
});
var Pt = Symbol();
var oi = defineComponent({
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
    return provide(Pt, {
      open: t,
      showPopover: () => {
        t.value = true;
      },
      hidePopover: () => {
        t.value = false;
      },
      triggerElement: l
    }), (n, r) => (openBlock(), createBlock(unref(fe), null, {
      default: withCtx(() => [
        renderSlot(n.$slots, "default")
      ]),
      _: 3
    }));
  }
});
var ai = defineComponent({
  __name: "PopoverTrigger",
  props: {
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(Pt), { primitiveElement: t, currentElement: l } = P();
    onMounted(() => {
      e.triggerElement.value = l.value;
    });
    function n() {
      e != null && e.open.value ? e == null || e.hidePopover() : e == null || e.showPopover();
    }
    return (r, s) => (openBlock(), createBlock(unref(ye), { asChild: "" }, {
      default: withCtx(() => {
        var i, d;
        return [
          createVNode(unref(X), {
            type: "button",
            ref_key: "primitiveElement",
            ref: t,
            "aria-expanded": ((i = unref(e)) == null ? void 0 : i.open.value) || false,
            "data-state": (d = unref(e)) != null && d.open.value ? "open" : "closed",
            "as-child": o.asChild,
            onClick: n
          }, {
            default: withCtx(() => [
              renderSlot(r.$slots, "default")
            ]),
            _: 3
          }, 8, ["aria-expanded", "data-state", "as-child"])
        ];
      }),
      _: 3
    }));
  }
});
var ni = defineComponent({
  __name: "PopoverPortal",
  props: {
    container: {}
  },
  setup(a) {
    const o = a;
    return (e, t) => (openBlock(), createBlock(ut, normalizeProps(guardReactiveProps(o)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function gl(a, o) {
  if (o) {
    const e = o.getBoundingClientRect();
    return !(a.clientX > e.left && a.clientX < e.right && a.clientY > e.top && a.clientY < e.bottom);
  }
}
var li = defineComponent({
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
    const o = a, e = inject(Pt), { primitiveElement: t, currentElement: l } = P();
    watchEffect(() => {
      l.value && (e != null && e.open.value ? (Xt(l.value), window.addEventListener("mousedown", n), window.addEventListener("keydown", r)) : e != null && e.triggerElement.value && (e == null || e.triggerElement.value.focus(), s()));
    });
    function n(i) {
      var p;
      if ((p = e == null ? void 0 : e.triggerElement.value) != null && p.contains(i.target))
        return;
      gl(i, l.value) && (e == null || e.hidePopover(), i.preventDefault(), i.stopPropagation());
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
      return (p = unref(e)) != null && p.open.value ? (openBlock(), createBlock(unref(_e), mergeProps({
        key: 0,
        ref_key: "primitiveElement",
        ref: t
      }, o), {
        default: withCtx(() => {
          var c, f;
          return [
            (c = unref(e)) != null && c.open.value ? (openBlock(), createBlock(unref(D), {
              key: 0,
              "data-state": (f = unref(e)) != null && f.open.value ? "open" : "closed",
              "data-side": o.side,
              "data-align": o.align,
              role: "tooltip",
              "as-child": o.asChild
            }, {
              default: withCtx(() => [
                renderSlot(i.$slots, "default")
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
var ri = defineComponent({
  __name: "PopoverArrow",
  setup(a) {
    return (o, e) => (openBlock(), createBlock(unref(Ke)));
  }
});
var ii = defineComponent({
  __name: "PopoverClose",
  props: {
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(Pt);
    return (t, l) => {
      var n, r, s;
      return openBlock(), createBlock(unref(X), {
        type: "button",
        "aria-expanded": ((n = unref(e)) == null ? void 0 : n.open.value) || false,
        "data-state": (r = unref(e)) != null && r.open.value ? "open" : "closed",
        "as-child": o.asChild,
        onClick: (s = unref(e)) == null ? void 0 : s.hidePopover
      }, {
        default: withCtx(() => [
          renderSlot(t.$slots, "default")
        ]),
        _: 3
      }, 8, ["aria-expanded", "data-state", "as-child", "onClick"]);
    };
  }
});
var Se = Symbol();
var si = defineComponent({
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
    return provide(Se, {
      selectedElement: l,
      changeSelected: (r) => {
        l.value = r, l.value.focus();
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
    }), (r, s) => (openBlock(), createBlock(unref(fe), null, {
      default: withCtx(() => [
        renderSlot(r.$slots, "default")
      ]),
      _: 3
    }));
  }
});
var ui = defineComponent({
  __name: "DropdownMenuTrigger",
  props: {
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(
      Se
    ), { primitiveElement: t, currentElement: l } = P();
    onMounted(() => {
      e.triggerElement.value = l.value;
    });
    function n() {
      e != null && e.modelValue.value ? e == null || e.hideTooltip() : e == null || e.showTooltip();
    }
    async function r(s) {
      var i;
      (s.key === "ArrowDown" || s.key === "Enter" || s.keyCode === 32) && (e == null || e.showTooltip(), await nextTick(), e == null || e.changeSelected((i = e.itemsArray) == null ? void 0 : i[0]));
    }
    return (s, i) => (openBlock(), createBlock(unref(ye), { asChild: "" }, {
      default: withCtx(() => {
        var d, p;
        return [
          createVNode(unref(X), {
            type: "button",
            ref_key: "primitiveElement",
            ref: t,
            "aria-expanded": ((d = unref(e)) == null ? void 0 : d.modelValue.value) || false,
            "data-state": (p = unref(e)) != null && p.modelValue.value ? "open" : "closed",
            "as-child": o.asChild,
            onClick: n,
            onKeydown: withModifiers(r, ["prevent"])
          }, {
            default: withCtx(() => [
              renderSlot(s.$slots, "default")
            ]),
            _: 3
          }, 8, ["aria-expanded", "data-state", "as-child", "onKeydown"])
        ];
      }),
      _: 3
    }));
  }
});
var lo = (a, o) => {
  const e = a.__vccOpts || a;
  for (const [t, l] of o)
    e[t] = l;
  return e;
};
var bl = {};
function wl(a, o) {
  return openBlock(), createBlock(Teleport, { to: "body" }, [
    renderSlot(a.$slots, "default")
  ]);
}
var di = lo(bl, [["render", wl]]);
var ci = defineComponent({
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
    const o = a, e = inject(Se), { primitiveElement: t, currentElement: l } = P(), { createCollection: n, getItems: r } = re();
    n(l), watchEffect(() => {
      l.value && (e != null && e.modelValue.value ? (document.querySelector("body").style.pointerEvents = "none", e.itemsArray = r(l.value)) : e != null && e.triggerElement.value && s());
    });
    function s() {
      document.querySelector("body").style.pointerEvents = "", setTimeout(() => {
        var i;
        (i = e == null ? void 0 : e.triggerElement.value) == null || i.focus();
      }, 0);
    }
    return Ce(l, (i) => {
      i.target.closest('[role="menuitem"]') || e == null || e.hideTooltip();
    }), (i, d) => {
      var p;
      return (p = unref(e)) != null && p.modelValue.value ? (openBlock(), createBlock(unref(_e), normalizeProps(mergeProps({ key: 0 }, o)), {
        default: withCtx(() => {
          var c;
          return [
            createVNode(unref(D), {
              ref_key: "primitiveElement",
              ref: t,
              "data-state": (c = unref(e)) != null && c.modelValue.value ? "open" : "closed",
              "data-side": o.side,
              "data-align": o.align,
              role: "tooltip",
              "as-child": o.asChild,
              style: { "pointer-events": "auto" }
            }, {
              default: withCtx(() => [
                renderSlot(i.$slots, "default")
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
var pi = defineComponent({
  __name: "DropdownMenuArrow",
  setup(a) {
    return (o, e) => (openBlock(), createBlock(unref(Ke)));
  }
});
var ot = Symbol();
var fi = defineComponent({
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
      triggerId: le(),
      contentId: le(),
      parentContext: n
    }), (r, s) => (openBlock(), createBlock(unref(fe), null, {
      default: withCtx(() => [
        renderSlot(r.$slots, "default")
      ]),
      _: 3
    }));
  }
});
var mi = defineComponent({
  __name: "DropdownMenuItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(
      Se
    ), t = inject(
      ot
    );
    function l() {
      e != null && e.selectedElement.value && e.hideTooltip();
    }
    function n() {
      e == null || e.hideTooltip();
    }
    return (r, s) => {
      var i;
      return openBlock(), createBlock(ie, {
        disabled: o.disabled,
        rootProvider: unref(e),
        subProvider: unref(t),
        orientation: (i = unref(e)) == null ? void 0 : i.orientation,
        "as-child": o.asChild,
        onHandleClick: l,
        onEscapeKeydown: n
      }, {
        default: withCtx(() => [
          renderSlot(r.$slots, "default")
        ]),
        _: 3
      }, 8, ["disabled", "rootProvider", "subProvider", "orientation", "as-child"]);
    };
  }
});
var El = Symbol();
var vi = defineComponent({
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
    const e = a, { primitiveElement: t, currentElement: l } = P();
    return provide(El, {
      type: e.type,
      modelValue: toRef(() => e.modelValue),
      changeModelValue: (n) => {
        if (e.type === "single")
          o("update:modelValue", n);
        else {
          let r = e.modelValue;
          if (r.includes(n)) {
            let s = r.findIndex((i) => i === n);
            r.splice(s, 1);
          } else
            r.push(n);
          o("update:modelValue", r);
        }
      },
      parentElement: l
    }), (n, r) => (openBlock(), createBlock(unref(D), {
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
var hi = defineComponent({
  __name: "DropdownMenuSeparator",
  props: {
    orientation: {},
    decorative: { type: Boolean },
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a;
    return (e, t) => (openBlock(), createBlock(qe, normalizeProps(guardReactiveProps(o)), null, 16));
  }
});
var ro = Symbol();
var Cl = ["id", "checked", "name", "disabled"];
var yi = defineComponent({
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
      Se
    ), l = H(e, "modelValue", o, {
      passive: true
    }), n = computed(() => l.value ? "checked" : "unchecked");
    function r() {
      l.value = !l.value;
    }
    function s() {
      t == null || t.hideTooltip();
    }
    return provide(ro, {
      modelValue: l
    }), (i, d) => {
      var p;
      return openBlock(), createBlock(ie, {
        ref: "currentElement",
        disabled: e.disabled,
        rootProvider: unref(t),
        orientation: (p = unref(t)) == null ? void 0 : p.orientation,
        onHandleClick: r,
        onEscapeKeydown: s,
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
          }), null, 16, Cl),
          renderSlot(i.$slots, "default")
        ]),
        _: 3
      }, 8, ["disabled", "rootProvider", "orientation", "data-state", "as-child", "aria-checked"]);
    };
  }
});
var _i = defineComponent({
  __name: "DropdownMenuItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(ro);
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
var gi = defineComponent({
  __name: "DropdownMenuLabel",
  props: {
    for: {},
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a;
    return (e, t) => (openBlock(), createBlock(unref(rt), normalizeProps(guardReactiveProps(o)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var ga = "RadioGroup";
var bi = defineComponent({
  __name: "DropdownMenuRadioGroup",
  props: {
    value: {},
    defaultValue: {},
    modelValue: {},
    asChild: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(a, { emit: o }) {
    const e = a, { primitiveElement: t, currentElement: l } = P(), n = H(e, "modelValue", o, {
      passive: true
    });
    return provide(ga, {
      modelValue: n,
      changeModelValue: (r) => {
        n.value = r;
      },
      parentElement: l
    }), (r, s) => (openBlock(), createBlock(unref(D), {
      ref_key: "primitiveElement",
      ref: t,
      role: "radiogroup",
      "aria-label": "radiogroup",
      "as-child": e.asChild
    }, {
      default: withCtx(() => [
        renderSlot(r.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child"]));
  }
});
var wi = defineComponent({
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
      Se
    ), t = inject(
      ga
    ), l = computed(() => {
      var i;
      return ((i = t == null ? void 0 : t.modelValue) == null ? void 0 : i.value) === o.value ? "on" : "off";
    });
    function n() {
      if (e != null && e.selectedElement.value)
        return t == null ? void 0 : t.changeModelValue(o.value);
    }
    function r() {
      e == null || e.hideTooltip();
    }
    const s = computed(
      () => {
        var i;
        return ((i = t == null ? void 0 : t.modelValue) == null ? void 0 : i.value) === o.value;
      }
    );
    return provide(ro, {
      modelValue: s
    }), (i, d) => {
      var p;
      return openBlock(), createBlock(ie, {
        disabled: o.disabled,
        rootProvider: unref(e),
        orientation: (p = unref(e)) == null ? void 0 : p.orientation,
        "data-radix-vue-radio-value": o.value,
        onHandleClick: n,
        onEscapeKeydown: r,
        onClick: n,
        role: "menuitemradio",
        "data-state": l.value,
        "as-child": o.asChild
      }, {
        default: withCtx(() => [
          renderSlot(i.$slots, "default")
        ]),
        _: 3
      }, 8, ["disabled", "rootProvider", "orientation", "data-radix-vue-radio-value", "data-state", "as-child"]);
    };
  }
});
var Ei = defineComponent({
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
      Se
    ), t = inject(
      ot
    ), { primitiveElement: l, currentElement: n } = P(), { createCollection: r } = re();
    r(n), watchEffect(() => {
      n.value && t != null && t.modelValue.value && s();
    }), watch(
      () => e == null ? void 0 : e.selectedElement.value,
      (i) => {
        var p;
        if (!(t != null && t.modelValue.value))
          return;
        const d = Array.from(
          ((p = i == null ? void 0 : i.closest('[role="tooltip"]')) == null ? void 0 : p.querySelectorAll(
            "[data-radix-vue-collection-item]:not([data-disabled])"
          )) ?? []
        );
        d != null && d.length && d.includes(t.triggerElement.value) && (e == null ? void 0 : e.selectedElement.value) !== (t == null ? void 0 : t.triggerElement.value) && (t == null || t.hideTooltip());
      }
    );
    function s() {
      const i = Array.from(
        n.value.querySelectorAll(
          "[data-radix-vue-collection-item]:not([data-disabled])"
        )
      );
      return t.itemsArray = i, i;
    }
    return Ce(n, (i) => {
      i.target.closest('[role="menuitem"]') || t == null || t.hideTooltip();
    }), (i, d) => {
      var p;
      return (p = unref(t)) != null && p.modelValue.value ? (openBlock(), createBlock(unref(_e), normalizeProps(mergeProps({ key: 0 }, o)), {
        default: withCtx(() => {
          var c;
          return [
            createVNode(unref(D), {
              ref_key: "primitiveElement",
              ref: l,
              "data-state": (c = unref(t)) != null && c.modelValue.value ? "open" : "closed",
              "data-side": o.side,
              "data-align": o.align,
              "data-orientation": unref(t).orientation,
              "aria-labelledby": unref(t).triggerId,
              role: "tooltip",
              "as-child": o.asChild,
              style: { "pointer-events": "auto" }
            }, {
              default: withCtx(() => [
                renderSlot(i.$slots, "default")
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
var Ci = defineComponent({
  __name: "DropdownMenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(
      Se
    ), t = inject(
      ot
    ), { primitiveElement: l, currentElement: n } = P();
    onMounted(() => {
      t.triggerElement.value = n.value;
    });
    async function r() {
      var f;
      t == null || t.showTooltip(), await nextTick();
      const c = (f = t == null ? void 0 : t.itemsArray) == null ? void 0 : f[0];
      e.selectedElement.value = c, c == null || c.focus();
    }
    function s() {
      t != null && t.modelValue.value || r();
    }
    async function i(c) {
      c.key === "ArrowRight" && r();
    }
    const d = computed(() => t != null && t.modelValue.value ? "open" : "closed");
    function p() {
      return t == null ? void 0 : t.showTooltip();
    }
    return (c, f) => (openBlock(), createBlock(unref(ye), { asChild: "" }, {
      default: withCtx(() => {
        var m, v, g, h2, x;
        return [
          createVNode(ie, {
            ref_key: "primitiveElement",
            ref: l,
            id: (m = unref(t)) == null ? void 0 : m.triggerId,
            rootProvider: unref(e),
            subProvider: (v = unref(t)) == null ? void 0 : v.parentContext,
            "aria-expanded": (g = unref(t)) == null ? void 0 : g.modelValue.value,
            "aria-controls": (h2 = unref(t)) == null ? void 0 : h2.contentId,
            "data-state": d.value,
            "data-orientation": (x = unref(e)) == null ? void 0 : x.orientation,
            "as-child": o.asChild,
            "aria-haspopup": "menu",
            onHandleClick: s,
            onMouseover: p,
            onHorizontalKeydown: i
          }, {
            default: withCtx(() => [
              renderSlot(c.$slots, "default")
            ]),
            _: 3
          }, 8, ["id", "rootProvider", "subProvider", "aria-expanded", "aria-controls", "data-state", "data-orientation", "as-child"])
        ];
      }),
      _: 3
    }));
  }
});
var ke = Symbol();
var xi = defineComponent({
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
    }), l = ref(), n = ref(), r = ref(0), s = ref(0);
    return provide(ke, {
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
      orientation: e.orientation,
      clientX: r,
      clientY: s
    }), (i, d) => (openBlock(), createBlock(unref(fe), null, {
      default: withCtx(() => [
        renderSlot(i.$slots, "default")
      ]),
      _: 3
    }));
  }
});
var $i = defineComponent({
  __name: "ContextMenuTrigger",
  props: {
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(
      ke
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
    }), (n, r) => (openBlock(), createBlock(unref(ye), {
      element: t,
      asChild: ""
    }, {
      default: withCtx(() => {
        var s, i;
        return [
          createVNode(unref(X), {
            type: "button",
            "aria-expanded": ((s = unref(e)) == null ? void 0 : s.modelValue.value) || false,
            "data-state": (i = unref(e)) != null && i.modelValue.value ? "open" : "closed",
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
var xl = {};
function $l(a, o) {
  return openBlock(), createBlock(Teleport, { to: "body" }, [
    renderSlot(a.$slots, "default")
  ]);
}
var Si = lo(xl, [["render", $l]]);
var ki = defineComponent({
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
    const o = a, e = inject(ke), { primitiveElement: t, currentElement: l } = P(), { createCollection: n, getItems: r } = re();
    n(l), watchEffect(() => {
      l.value && (e != null && e.modelValue.value ? (e.itemsArray = r(l.value), window.addEventListener("keydown", d), window.addEventListener("scroll", i)) : s());
    }), watchEffect(() => {
      e != null && e.selectedElement.value && s();
    });
    function s() {
      window.removeEventListener("keydown", d), window.removeEventListener("scroll", i);
    }
    Ce(l, (p) => {
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
      return (f = unref(e)) != null && f.modelValue.value ? (openBlock(), createBlock(unref(_e), mergeProps({ key: 0 }, o, { "prioritize-position": "" }), {
        default: withCtx(() => {
          var m;
          return [
            createVNode(unref(D), {
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
var Ai = defineComponent({
  __name: "ContextMenuArrow",
  setup(a) {
    return (o, e) => (openBlock(), createBlock(unref(Ke)));
  }
});
var at = Symbol();
var Ti = defineComponent({
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
      triggerId: le(),
      contentId: le(),
      parentContext: n
    }), (r, s) => (openBlock(), createBlock(unref(fe), null, {
      default: withCtx(() => [
        renderSlot(r.$slots, "default")
      ]),
      _: 3
    }));
  }
});
var Bi = defineComponent({
  __name: "ContextMenuItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(
      ke
    ), t = inject(
      at
    );
    function l() {
      e != null && e.selectedElement.value && e.hideTooltip();
    }
    function n() {
      e == null || e.hideTooltip();
    }
    return (r, s) => {
      var i;
      return openBlock(), createBlock(ie, {
        disabled: o.disabled,
        rootProvider: unref(e),
        subProvider: unref(t),
        orientation: (i = unref(e)) == null ? void 0 : i.orientation,
        "as-child": o.asChild,
        onHandleClick: l,
        onEscapeKeydown: n
      }, {
        default: withCtx(() => [
          renderSlot(r.$slots, "default")
        ]),
        _: 3
      }, 8, ["disabled", "rootProvider", "subProvider", "orientation", "as-child"]);
    };
  }
});
var Sl = Symbol();
var Pi = defineComponent({
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
    const e = a, { primitiveElement: t, currentElement: l } = P();
    return provide(Sl, {
      type: e.type,
      modelValue: toRef(() => e.modelValue),
      changeModelValue: (n) => {
        if (e.type === "single")
          o("update:modelValue", n);
        else {
          let r = e.modelValue;
          if (r.includes(n)) {
            let s = r.findIndex((i) => i === n);
            r.splice(s, 1);
          } else
            r.push(n);
          o("update:modelValue", r);
        }
      },
      parentElement: l
    }), (n, r) => (openBlock(), createBlock(unref(D), {
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
var Oi = defineComponent({
  __name: "ContextMenuSeparator",
  props: {
    orientation: {},
    decorative: { type: Boolean },
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a;
    return (e, t) => (openBlock(), createBlock(qe, normalizeProps(guardReactiveProps(o)), null, 16));
  }
});
var io = Symbol();
var kl = ["id", "checked", "name", "disabled"];
var Mi = defineComponent({
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
      ke
    ), l = H(e, "modelValue", o, {
      passive: true
    }), n = computed(() => l.value ? "checked" : "unchecked");
    function r() {
      l.value = !l.value;
    }
    function s() {
      t == null || t.hideTooltip();
    }
    return provide(io, {
      modelValue: l
    }), (i, d) => {
      var p;
      return openBlock(), createBlock(ie, {
        ref: "currentElement",
        disabled: e.disabled,
        rootProvider: unref(t),
        orientation: (p = unref(t)) == null ? void 0 : p.orientation,
        "as-child": e.asChild,
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
          }), null, 16, kl),
          renderSlot(i.$slots, "default")
        ]),
        _: 3
      }, 8, ["disabled", "rootProvider", "orientation", "as-child", "data-state", "aria-checked"]);
    };
  }
});
var Di = defineComponent({
  __name: "ContextMenuItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(io);
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
var Ii = defineComponent({
  __name: "ContextMenuLabel",
  props: {
    for: {},
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a;
    return (e, t) => (openBlock(), createBlock(unref(rt), normalizeProps(guardReactiveProps(o)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var ba = "RadioGroup";
var Ri = defineComponent({
  __name: "ContextMenuRadioGroup",
  props: {
    value: {},
    defaultValue: {},
    modelValue: {},
    asChild: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(a, { emit: o }) {
    const e = a, { primitiveElement: t, currentElement: l } = P(), n = H(e, "modelValue", o, {
      passive: true
    });
    return provide(ba, {
      modelValue: n,
      changeModelValue: (r) => {
        n.value = r;
      },
      parentElement: l
    }), (r, s) => (openBlock(), createBlock(unref(D), {
      ref_key: "primitiveElement",
      ref: t,
      role: "radiogroup",
      "aria-label": "radiogroup",
      "as-child": e.asChild
    }, {
      default: withCtx(() => [
        renderSlot(r.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child"]));
  }
});
var Ni = defineComponent({
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
      ke
    ), t = inject(
      ba
    ), l = computed(() => {
      var i;
      return ((i = t == null ? void 0 : t.modelValue) == null ? void 0 : i.value) === o.value ? "on" : "off";
    });
    function n() {
      if (e != null && e.selectedElement.value)
        return t == null ? void 0 : t.changeModelValue(o.value);
    }
    function r() {
      e == null || e.hideTooltip();
    }
    const s = computed(
      () => {
        var i;
        return ((i = t == null ? void 0 : t.modelValue) == null ? void 0 : i.value) === o.value;
      }
    );
    return provide(io, {
      modelValue: s
    }), (i, d) => {
      var p;
      return openBlock(), createBlock(ie, {
        disabled: o.disabled,
        rootProvider: unref(e),
        orientation: (p = unref(e)) == null ? void 0 : p.orientation,
        "data-radix-vue-radio-value": o.value,
        "as-child": o.asChild,
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
      }, 8, ["disabled", "rootProvider", "orientation", "data-radix-vue-radio-value", "as-child", "data-state"]);
    };
  }
});
var Li = defineComponent({
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
      ke
    ), t = inject(
      at
    ), { primitiveElement: l, currentElement: n } = P(), { createCollection: r } = re();
    r(n), watchEffect(() => {
      n.value && t != null && t.modelValue.value && s();
    }), watch(
      () => e == null ? void 0 : e.selectedElement.value,
      (i) => {
        var p;
        if (!(t != null && t.modelValue.value))
          return;
        const d = Array.from(
          ((p = i == null ? void 0 : i.closest('[role="tooltip"]')) == null ? void 0 : p.querySelectorAll(
            "[data-radix-vue-collection-item]:not([data-disabled])"
          )) ?? []
        );
        d != null && d.length && d.includes(t.triggerElement.value) && (e == null ? void 0 : e.selectedElement.value) !== (t == null ? void 0 : t.triggerElement.value) && (t == null || t.hideTooltip());
      }
    );
    function s() {
      const i = Array.from(
        n.value.querySelectorAll(
          "[data-radix-vue-collection-item]:not([data-disabled])"
        )
      );
      return t.itemsArray = i, i;
    }
    return Ce(n, (i) => {
      i.target.closest('[role="menuitem"]') || t == null || t.hideTooltip();
    }), (i, d) => {
      var p;
      return (p = unref(t)) != null && p.modelValue.value ? (openBlock(), createBlock(unref(_e), normalizeProps(mergeProps({ key: 0 }, o)), {
        default: withCtx(() => {
          var c;
          return [
            createVNode(unref(D), {
              ref_key: "primitiveElement",
              ref: l,
              "data-state": (c = unref(t)) != null && c.modelValue.value ? "open" : "closed",
              "data-side": o.side,
              "data-align": o.align,
              "data-orientation": unref(t).orientation,
              "aria-labelledby": unref(t).triggerId,
              role: "tooltip",
              "as-child": o.asChild,
              style: { "pointer-events": "auto" }
            }, {
              default: withCtx(() => [
                renderSlot(i.$slots, "default")
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
var Ki = defineComponent({
  __name: "ContextMenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(
      ke
    ), t = inject(
      at
    ), { primitiveElement: l, currentElement: n } = P();
    onMounted(() => {
      t.triggerElement.value = n.value;
    });
    async function r() {
      var f;
      t == null || t.showTooltip(), await nextTick();
      const c = (f = t == null ? void 0 : t.itemsArray) == null ? void 0 : f[0];
      e.selectedElement.value = c, c == null || c.focus();
    }
    function s() {
      t != null && t.modelValue.value || r();
    }
    async function i(c) {
      c.key === "ArrowRight" && r();
    }
    const d = computed(() => t != null && t.modelValue.value ? "open" : "closed");
    function p() {
      return t == null ? void 0 : t.showTooltip();
    }
    return (c, f) => (openBlock(), createBlock(unref(ye), { asChild: "" }, {
      default: withCtx(() => {
        var m, v, g, h2, x;
        return [
          createVNode(ie, {
            ref_key: "primitiveElement",
            ref: l,
            id: (m = unref(t)) == null ? void 0 : m.triggerId,
            rootProvider: unref(e),
            subProvider: (v = unref(t)) == null ? void 0 : v.parentContext,
            "aria-expanded": (g = unref(t)) == null ? void 0 : g.modelValue.value,
            "aria-controls": (h2 = unref(t)) == null ? void 0 : h2.contentId,
            "data-state": d.value,
            "as-child": o.asChild,
            "data-orientation": (x = unref(e)) == null ? void 0 : x.orientation,
            "aria-haspopup": "menu",
            onHandleClick: s,
            onMouseover: p,
            onHorizontalKeydown: i
          }, {
            default: withCtx(() => [
              renderSlot(c.$slots, "default")
            ]),
            _: 3
          }, 8, ["id", "rootProvider", "subProvider", "aria-expanded", "aria-controls", "data-state", "as-child", "data-orientation"])
        ];
      }),
      _: 3
    }));
  }
});
var dt = Symbol();
var Hi = defineComponent({
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
    }), l = ref(), n = ref(), r = ref(false);
    provide(dt, {
      selectedElement: l,
      changeSelected: (i) => {
        l.value = i, l.value.focus();
      },
      modelValue: t,
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
        let d = [...t.value];
        if (d.includes(i)) {
          let p = d.findIndex((c) => c === i);
          d.splice(p, 1);
        } else
          d.push(i);
        t.value = d;
      } else
        t.value = i;
    }
    return (i, d) => (openBlock(), createBlock(unref(fe), null, {
      default: withCtx(() => [
        renderSlot(i.$slots, "default")
      ]),
      _: 3
    }));
  }
});
var zi = defineComponent({
  __name: "SelectTrigger",
  props: {
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(dt), { primitiveElement: t, currentElement: l } = P();
    onMounted(() => {
      e.triggerElement.value = l.value;
    });
    async function n() {
      var s, i;
      if (e == null || e.showTooltip(), await nextTick(), e != null && e.modelValue.value && !(e != null && e.multiple)) {
        const d = (s = e.itemsArray) == null ? void 0 : s.find((p) => p.getAttribute("data-radix-vue-radio-value") === (e == null ? void 0 : e.modelValue.value));
        e == null || e.changeSelected(d);
      } else
        e == null || e.changeSelected((i = e.itemsArray) == null ? void 0 : i[0]);
    }
    function r(s) {
      (s.key === "ArrowDown" || s.key === "ArrowUp" || s.key === "Enter" || s.keyCode === 32) && n();
    }
    return (s, i) => (openBlock(), createBlock(unref(ye), { asChild: "" }, {
      default: withCtx(() => {
        var d, p;
        return [
          createVNode(unref(X), {
            type: "button",
            ref_key: "primitiveElement",
            ref: t,
            "aria-expanded": ((d = unref(e)) == null ? void 0 : d.isOpen.value) || false,
            "data-state": (p = unref(e)) != null && p.isOpen.value ? "open" : "closed",
            "as-child": o.asChild,
            onClick: n,
            onKeydown: withModifiers(r, ["prevent"])
          }, {
            default: withCtx(() => [
              renderSlot(s.$slots, "default")
            ]),
            _: 3
          }, 8, ["aria-expanded", "data-state", "as-child", "onKeydown"])
        ];
      }),
      _: 3
    }));
  }
});
var Yi = defineComponent({
  __name: "SelectPortal",
  props: {
    container: {}
  },
  setup(a) {
    const o = a;
    return (e, t) => (openBlock(), createBlock(ut, normalizeProps(guardReactiveProps(o)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Wi = defineComponent({
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
    const o = a, e = inject(dt), { primitiveElement: t, currentElement: l } = P(), { createCollection: n, getItems: r } = re();
    n(l), watchEffect(() => {
      l.value && (e != null && e.isOpen.value ? (document.querySelector("body").style.pointerEvents = "none", e.itemsArray = r(l.value)) : e != null && e.triggerElement.value && s());
    });
    function s() {
      document.querySelector("body").style.pointerEvents = "", setTimeout(() => {
        var i;
        (i = e == null ? void 0 : e.triggerElement.value) == null || i.focus();
      }, 0);
    }
    return Ce(l, (i) => {
      i.target.closest('[role="menuitem"]') || e == null || e.hideTooltip();
    }), (i, d) => {
      var p, c;
      return (p = unref(e)) != null && p.isOpen.value ? (openBlock(), createBlock(unref(_e), mergeProps({ key: 0 }, o, {
        "prioritize-position": "",
        role: "listbox",
        "data-state": (c = unref(e)) != null && c.isOpen.value ? "open" : "closed",
        "data-side": o.side,
        "data-align": o.align
      }), {
        default: withCtx(() => [
          createVNode(unref(D), {
            ref_key: "primitiveElement",
            ref: t,
            "as-child": o.asChild,
            role: "presentation",
            style: { "pointer-events": "auto" }
          }, {
            default: withCtx(() => [
              renderSlot(i.$slots, "default")
            ]),
            _: 3
          }, 8, ["as-child"])
        ]),
        _: 3
      }, 16, ["data-state", "data-side", "data-align"])) : createCommentVNode("", true);
    };
  }
});
var Ui = defineComponent({
  __name: "SelectArrow",
  setup(a) {
    return (o, e) => (openBlock(), createBlock(unref(Ke)));
  }
});
var qi = defineComponent({
  __name: "SelectSeparator",
  props: {
    orientation: {},
    decorative: { type: Boolean },
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a;
    return (e, t) => (openBlock(), createBlock(qe, {
      orientation: o.orientation,
      decorative: o.decorative
    }, null, 8, ["orientation", "decorative"]));
  }
});
var wa = Symbol();
var Gi = defineComponent({
  __name: "SelectItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(dt), t = inject(wa), l = computed(() => {
      var n;
      return e != null && e.multiple ? (n = e == null ? void 0 : e.modelValue.value) == null ? void 0 : n.includes(
        t.value
      ) : (e == null ? void 0 : e.modelValue.value) === (t == null ? void 0 : t.value);
    });
    return (n, r) => l.value ? (openBlock(), createBlock(unref(ne), {
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
var Xi = defineComponent({
  __name: "SelectLabel",
  props: {
    for: {},
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a;
    return (e, t) => (openBlock(), createBlock(unref(rt), normalizeProps(guardReactiveProps(o)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Fi = defineComponent({
  __name: "SelectGroup",
  props: {
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a;
    return (e, t) => (openBlock(), createBlock(unref(D), {
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
var Ji = defineComponent({
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
    const o = a, e = inject(dt);
    function t() {
      return e == null || e.changeModelValue(o.value), e == null ? void 0 : e.hideTooltip();
    }
    return provide(wa, {
      value: o.value
    }), (l, n) => {
      var r, s, i;
      return openBlock(), createBlock(ie, {
        disabled: o.disabled,
        rootProvider: unref(e),
        orientation: (r = unref(e)) == null ? void 0 : r.orientation,
        "data-radix-vue-radio-value": o.value,
        "as-child": o.asChild,
        onHandleClick: t,
        onEscapeKeydown: n[0] || (n[0] = (d) => {
          var p;
          return (p = unref(e)) == null ? void 0 : p.hideTooltip();
        }),
        role: "option",
        "data-state": ((i = (s = unref(e)) == null ? void 0 : s.modelValue) == null ? void 0 : i.value) === o.value ? "checked" : "unchecked"
      }, {
        default: withCtx(() => [
          renderSlot(l.$slots, "default")
        ]),
        _: 3
      }, 8, ["disabled", "rootProvider", "orientation", "data-radix-vue-radio-value", "as-child", "data-state"]);
    };
  }
});
var xe = Symbol();
var Al = {
  inheritAttrs: false
};
var Zi = defineComponent({
  ...Al,
  __name: "MenubarRoot",
  props: {
    modelValue: {},
    defaultValue: {},
    orientation: { default: "horizontal" },
    dir: {}
  },
  emits: ["update:modelValue", "update:open"],
  setup(a, { emit: o }) {
    const e = a, t = H(e, "modelValue", o, {
      passive: true,
      defaultValue: e.defaultValue
    }), l = ref(), n = ref(), r = [], s = ref(), i = Gt();
    return provide(xe, {
      selectedElement: l,
      changeSelected: (d) => {
        var p;
        l.value = d, (p = l.value) == null || p.focus();
      },
      modelValue: t,
      changeValue: (d) => {
        t.value = d;
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
    ), (d, p) => (openBlock(), createBlock(unref(fe), null, {
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
var Et = Symbol();
var Qi = defineComponent({
  __name: "MenubarMenu",
  props: {
    value: {}
  },
  setup(a) {
    const e = a.value ?? le(), t = inject(xe), l = ref(), n = computed(() => (t == null ? void 0 : t.modelValue.value) === e), r = inject(Et);
    return provide(Et, {
      value: e,
      isOpen: n,
      triggerElement: l,
      itemsArray: [],
      triggerId: e,
      contentId: le(),
      parentContext: r,
      orientation: "vertical"
    }), (s, i) => (openBlock(), createBlock(unref(fe), null, {
      default: withCtx(() => [
        renderSlot(s.$slots, "default")
      ]),
      _: 3
    }));
  }
});
var Tl = {
  inheritAttrs: false
};
var Vi = defineComponent({
  ...Tl,
  __name: "MenubarTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(xe), t = inject(
      Et
    ), { primitiveElement: l, currentElement: n } = P(), r = Gt();
    onMounted(() => {
      t.triggerElement.value = n.value, e.triggerItemsArray.push(n.value);
    });
    async function s() {
      var g;
      e == null || e.changeValue(t == null ? void 0 : t.value), await nextTick();
      const v = (g = t == null ? void 0 : t.itemsArray) == null ? void 0 : g[0];
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
      const g = ee(
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
      if (!o.disabled && (e != null && e.modelValue.value)) {
        e == null || e.changeSelected(n.value), e == null || e.changeValue(t == null ? void 0 : t.value);
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
    const f = computed(() => t != null && t.isOpen.value ? "open" : "closed"), m = computed(() => r.value && r.value === n.value || (e == null ? void 0 : e.triggerElement.value) === n.value && (e == null ? void 0 : e.selectedElement.value));
    return watchEffect(() => {
      (e == null ? void 0 : e.selectedElement.value) === n.value && (e.triggerElement.value = n.value);
    }), watch(
      r,
      () => {
        r.value === n.value ? (e.selectedElement.value = n.value, e.triggerElement.value = n.value) : !(t != null && t.isOpen.value) && e.selectedElement.value === n.value && (e.selectedElement.value = void 0);
      },
      { immediate: true }
    ), (v, g) => (openBlock(), createBlock(unref(ye), { asChild: "" }, {
      default: withCtx(() => {
        var h2, x, C, A, T;
        return [
          createVNode(unref(X), mergeProps({
            role: "menuitem",
            ref_key: "primitiveElement",
            ref: l,
            id: (h2 = unref(t)) == null ? void 0 : h2.triggerId,
            "aria-expanded": (x = unref(t)) == null ? void 0 : x.isOpen.value,
            "aria-controls": (C = unref(t)) == null ? void 0 : C.contentId,
            "data-state": f.value,
            "data-orientation": (A = unref(e)) == null ? void 0 : A.orientation,
            "aria-haspopup": "menu",
            onKeydown: withModifiers(i, ["prevent"]),
            "data-radix-vue-collection-item": "",
            onMouseenter: d,
            onClick: c,
            "data-highlighted": m.value ? "" : null,
            "aria-disabled": o.disabled ? true : void 0,
            "data-disabled": o.disabled ? "" : void 0,
            "as-child": o.asChild,
            tabindex: ((T = unref(e)) == null ? void 0 : T.triggerElement.value) === unref(n) ? "0" : "-1"
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
var Bl = {};
function Pl(a, o) {
  return openBlock(), createBlock(Teleport, { to: "body" }, [
    renderSlot(a.$slots, "default")
  ]);
}
var ji = lo(Bl, [["render", Pl]]);
var es = defineComponent({
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
    const o = a, e = inject(xe), t = inject(
      Et
    ), { primitiveElement: l, currentElement: n } = P(), { createCollection: r } = re();
    r(n), watchEffect(() => {
      n.value && t != null && t.isOpen.value && s();
    }), watch(
      () => e == null ? void 0 : e.selectedElement.value,
      (d) => {
        var c;
        if (!(t != null && t.isOpen.value))
          return;
        const p = Array.from(
          ((c = d == null ? void 0 : d.closest('[role="tooltip"]')) == null ? void 0 : c.querySelectorAll(
            "[data-radix-vue-collection-item]:not([data-disabled])"
          )) ?? []
        );
        p != null && p.length && p.includes(
          t.triggerElement.value
        ) && (e == null ? void 0 : e.selectedElement.value) !== (t == null ? void 0 : t.triggerElement.value) && (e == null || e.changeValue(void 0));
      }
    );
    function s() {
      const d = Array.from(
        n.value.querySelectorAll(
          "[data-radix-vue-collection-item]:not([data-disabled])"
        )
      );
      return t.itemsArray = d, d;
    }
    Ce(n, (d) => {
      d.target.closest('[role="menuitem"]') || (e == null || e.changeValue(void 0), e.selectedElement.value = void 0);
    });
    const i = computed(() => t != null && t.isOpen ? "open" : "false");
    return (d, p) => {
      var c;
      return (c = unref(t)) != null && c.isOpen.value ? (openBlock(), createBlock(unref(_e), normalizeProps(mergeProps({ key: 0 }, o)), {
        default: withCtx(() => {
          var f, m;
          return [
            createVNode(unref(D), {
              ref_key: "primitiveElement",
              ref: l,
              "data-state": i.value,
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
var ts = defineComponent({
  __name: "MenubarArrow",
  setup(a) {
    return (o, e) => (openBlock(), createBlock(unref(Ke)));
  }
});
var nt = Symbol();
var os = defineComponent({
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
      triggerId: le(),
      contentId: le(),
      parentContext: n
    }), (r, s) => (openBlock(), createBlock(unref(fe), null, {
      default: withCtx(() => [
        renderSlot(r.$slots, "default")
      ]),
      _: 3
    }));
  }
});
var as = defineComponent({
  __name: "MenubarItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(xe), t = inject(
      nt
    );
    function l() {
      e.changeValue(void 0), e.changeSelected(
        e.triggerElement.value
      );
    }
    function n(s) {
      const i = ee(
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
    function r() {
      e.changeValue(void 0), e.changeSelected(
        e.triggerElement.value
      );
    }
    return (s, i) => {
      var d;
      return openBlock(), createBlock(ie, {
        disabled: o.disabled,
        rootProvider: unref(e),
        subProvider: unref(t),
        orientation: (d = unref(e)) == null ? void 0 : d.orientation,
        "as-child": o.asChild,
        onHandleClick: l,
        onHorizontalKeydown: n,
        onEscapeKeydown: r
      }, {
        default: withCtx(() => [
          renderSlot(s.$slots, "default")
        ]),
        _: 3
      }, 8, ["disabled", "rootProvider", "subProvider", "orientation", "as-child"]);
    };
  }
});
var Ol = Symbol();
var ns = defineComponent({
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
    const e = a, { primitiveElement: t, currentElement: l } = P();
    return provide(Ol, {
      type: e.type,
      modelValue: toRef(() => e.modelValue),
      changeModelValue: (n) => {
        if (e.type === "single")
          o("update:modelValue", n);
        else {
          let r = e.modelValue;
          if (r.includes(n)) {
            let s = r.findIndex((i) => i === n);
            r.splice(s, 1);
          } else
            r.push(n);
          o("update:modelValue", r);
        }
      },
      parentElement: l
    }), (n, r) => (openBlock(), createBlock(unref(D), {
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
var ls = defineComponent({
  __name: "MenubarSeparator",
  props: {
    orientation: {},
    decorative: { type: Boolean },
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a;
    return (e, t) => (openBlock(), createBlock(qe, normalizeProps(guardReactiveProps(o)), null, 16));
  }
});
var so = Symbol();
var Ml = ["id", "checked", "name", "disabled"];
var rs = defineComponent({
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
    const e = a, t = inject(xe), l = H(e, "modelValue", o, {
      passive: true
    }), n = computed(() => l.value ? "checked" : "unchecked");
    function r() {
      l.value = !l.value;
    }
    provide(so, {
      modelValue: l
    });
    function s(d) {
      const p = ee(
        d,
        t == null ? void 0 : t.triggerElement.value,
        void 0,
        {
          arrowKeyOptions: "horizontal",
          itemsArray: t == null ? void 0 : t.triggerItemsArray
        }
      );
      p && (t == null || t.changeSelected(p), t == null || t.changeValue(p.id));
    }
    function i(d) {
      t.changeValue(void 0), t.changeSelected(
        t.triggerElement.value
      );
    }
    return (d, p) => {
      var c;
      return openBlock(), createBlock(ie, {
        ref: "currentElement",
        disabled: e.disabled,
        rootProvider: unref(t),
        orientation: (c = unref(t)) == null ? void 0 : c.orientation,
        onHandleClick: r,
        onHorizontalKeydown: s,
        onEscapeKeydown: i,
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
          }), null, 16, Ml),
          renderSlot(d.$slots, "default")
        ]),
        _: 3
      }, 8, ["disabled", "rootProvider", "orientation", "data-state", "aria-checked", "as-child"]);
    };
  }
});
var is = defineComponent({
  __name: "MenubarItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(so);
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
var ss = defineComponent({
  __name: "MenubarLabel",
  props: {
    for: {},
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a;
    return (e, t) => (openBlock(), createBlock(unref(rt), normalizeProps(guardReactiveProps(o)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Ea = "RadioGroup";
var us = defineComponent({
  __name: "MenubarRadioGroup",
  props: {
    value: {},
    defaultValue: {},
    modelValue: {},
    asChild: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(a, { emit: o }) {
    const e = a, { primitiveElement: t, currentElement: l } = P(), n = H(e, "modelValue", o, {
      passive: true
    });
    return provide(Ea, {
      modelValue: n,
      changeModelValue: (r) => {
        n.value = r;
      },
      parentElement: l
    }), (r, s) => (openBlock(), createBlock(unref(D), {
      ref_key: "primitiveElement",
      ref: t,
      role: "radiogroup",
      "aria-label": "radiogroup",
      "as-child": e.asChild
    }, {
      default: withCtx(() => [
        renderSlot(r.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child"]));
  }
});
var ds = defineComponent({
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
    const o = a, e = inject(xe), t = inject(
      Ea
    ), l = computed(() => {
      var d;
      return ((d = t == null ? void 0 : t.modelValue) == null ? void 0 : d.value) === o.value ? "on" : "off";
    });
    function n() {
      if (e != null && e.selectedElement.value)
        return t == null ? void 0 : t.changeModelValue(o.value);
    }
    const r = computed(
      () => {
        var d;
        return ((d = t == null ? void 0 : t.modelValue) == null ? void 0 : d.value) === o.value;
      }
    );
    provide(so, {
      modelValue: r
    });
    function s(d) {
      const p = ee(
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
    function i() {
      e.changeValue(void 0), e.changeSelected(
        e.triggerElement.value
      );
    }
    return (d, p) => {
      var c;
      return openBlock(), createBlock(ie, {
        disabled: o.disabled,
        rootProvider: unref(e),
        orientation: (c = unref(e)) == null ? void 0 : c.orientation,
        "data-radix-vue-radio-value": o.value,
        "as-child": o.asChild,
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
      }, 8, ["disabled", "rootProvider", "orientation", "data-radix-vue-radio-value", "as-child", "data-state"]);
    };
  }
});
var cs = defineComponent({
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
    const o = a, e = inject(xe), t = inject(nt), { primitiveElement: l, currentElement: n } = P(), { createCollection: r } = re();
    r(n), watchEffect(() => {
      n.value && t != null && t.modelValue.value && s();
    }), watch(
      () => e == null ? void 0 : e.selectedElement.value,
      (i) => {
        var p;
        if (!(t != null && t.modelValue.value))
          return;
        const d = Array.from(
          ((p = i == null ? void 0 : i.closest('[role="tooltip"]')) == null ? void 0 : p.querySelectorAll(
            "[data-radix-vue-collection-item]:not([data-disabled])"
          )) ?? []
        );
        d != null && d.length && d.includes(t.triggerElement.value) && (e == null ? void 0 : e.selectedElement.value) !== (t == null ? void 0 : t.triggerElement.value) && (t == null || t.hideTooltip());
      }
    );
    function s() {
      const i = Array.from(
        n.value.querySelectorAll(
          "[data-radix-vue-collection-item]:not([data-disabled])"
        )
      );
      return t.itemsArray = i, i;
    }
    return Ce(n, (i) => {
      i.target.closest('[role="menuitem"]') || t == null || t.hideTooltip();
    }), (i, d) => {
      var p;
      return (p = unref(t)) != null && p.modelValue.value ? (openBlock(), createBlock(unref(_e), normalizeProps(mergeProps({ key: 0 }, o)), {
        default: withCtx(() => {
          var c;
          return [
            createVNode(unref(D), {
              ref_key: "primitiveElement",
              ref: l,
              "data-state": (c = unref(t)) != null && c.modelValue.value ? "open" : "closed",
              "data-side": o.side,
              "data-align": o.align,
              "data-orientation": unref(t).orientation,
              "aria-labelledby": unref(t).triggerId,
              role: "tooltip",
              asChild: o.asChild,
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
var ps = defineComponent({
  __name: "MenubarSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(xe), t = inject(nt), { primitiveElement: l, currentElement: n } = P();
    onMounted(() => {
      t.triggerElement.value = n.value;
    });
    async function r() {
      var m;
      t == null || t.showTooltip(), await nextTick();
      const f = (m = t == null ? void 0 : t.itemsArray) == null ? void 0 : m[0];
      e.selectedElement.value = f, f == null || f.focus();
    }
    function s() {
      t != null && t.modelValue.value || r();
    }
    async function i(f) {
      if (f.key === "ArrowRight")
        r();
      else {
        const m = ee(
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
    function p() {
      return t == null ? void 0 : t.showTooltip();
    }
    function c(f) {
      e.changeValue(void 0), e.changeSelected(
        e.triggerElement.value
      );
    }
    return (f, m) => (openBlock(), createBlock(unref(ye), { asChild: "" }, {
      default: withCtx(() => {
        var v, g, h2, x, C;
        return [
          createVNode(ie, {
            ref_key: "primitiveElement",
            ref: l,
            id: (v = unref(t)) == null ? void 0 : v.triggerId,
            rootProvider: unref(e),
            subProvider: (g = unref(t)) == null ? void 0 : g.parentContext,
            "aria-expanded": (h2 = unref(t)) == null ? void 0 : h2.modelValue.value,
            "aria-controls": (x = unref(t)) == null ? void 0 : x.contentId,
            "data-state": d.value,
            "data-orientation": (C = unref(e)) == null ? void 0 : C.orientation,
            "as-child": o.asChild,
            "aria-haspopup": "menu",
            onHandleClick: s,
            onMouseover: p,
            onHorizontalKeydown: i,
            onEscapeKeydown: c
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
var Ae = Symbol();
var fs = defineComponent({
  __name: "NavigationMenuRoot",
  props: {
    modelValue: { default: "" },
    defaultValue: {},
    changeValue: {},
    dir: { default: "ltr" },
    orientation: { default: "horizontal" },
    delayDuration: { default: 200 },
    skipDelayDuration: { default: 300 }
  },
  emits: ["update:modelValue"],
  setup(a, { emit: o }) {
    const e = a, t = H(e, "modelValue", o, {
      passive: true,
      defaultValue: e.defaultValue ?? ""
    }), l = ref(""), { primitiveElement: n, currentElement: r } = P(), { createCollection: s } = re();
    s();
    const i = () => {
      t.value = "";
    };
    Ce(r, () => {
      i();
    }), Yo(r, () => {
      i();
    });
    const d = ref(), p = ref(), c = ref(/* @__PURE__ */ new Map()), f = qt((m) => {
      l.value = t.value, t.value = m;
    }, e.delayDuration);
    return provide(Ae, {
      isRootMenu: true,
      modelValue: t,
      previousValue: l,
      baseId: le(),
      dir: e.dir,
      orientation: e.orientation,
      rootNavigationMenu: r,
      indicatorTrack: d,
      onIndicatorTrackChange: (m) => {
        d.value = m;
      },
      viewport: p,
      onViewportChange: (m) => {
        p.value = m;
      },
      viewportContent: c,
      onViewportContentChange: (m, v) => {
        const g = c.value;
        c.value = new Map(g.set(m, v));
      },
      onViewportContentRemove: (m) => {
        const v = c.value;
        if (!v.has(m))
          return v;
        v.delete(m), c.value = new Map(v);
      },
      onTriggerEnter: (m) => {
        f(m);
      },
      onTriggerLeave: () => {
        f("");
      },
      onContentEnter: (m) => {
        f(m);
      },
      onContentLeave: () => {
        f("");
      },
      onItemSelect: (m) => {
        l.value = t.value, t.value = m;
      }
    }), (m, v) => (openBlock(), createBlock(unref($n), {
      ref_key: "primitiveElement",
      ref: n,
      "aria-label": "Main",
      "data-orientation": m.orientation,
      dir: m.dir
    }, {
      default: withCtx(() => [
        renderSlot(m.$slots, "default")
      ]),
      _: 3
    }, 8, ["data-orientation", "dir"]));
  }
});
function uo(a) {
  return a ? "open" : "closed";
}
function Ca(a, o) {
  return `${a}-trigger-${o}`;
}
function xa(a, o) {
  return `${a}-content-${o}`;
}
function zt(a) {
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
function $a(a) {
  const o = document.activeElement;
  return a.some((e) => e === o ? true : (e.focus(), document.activeElement !== o));
}
function Dl(a) {
  return a.forEach((o) => {
    o.dataset.tabindex = o.getAttribute("tabindex") || "", o.setAttribute("tabindex", "-1");
  }), () => {
    a.forEach((o) => {
      const e = o.dataset.tabindex;
      o.setAttribute("tabindex", e);
    });
  };
}
var co = Symbol();
var ms = defineComponent({
  __name: "NavigationMenuItem",
  props: {
    value: {},
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, { getItems: e } = re(), t = inject(Ae), l = o.value || le(), n = ref(), r = ref(), s = ref();
    let i = () => ({});
    const d = ref(false), p = async (v = "start") => {
      var h2, x, C;
      const g = (C = (x = (h2 = r.value) == null ? void 0 : h2.children) == null ? void 0 : x[0]) == null ? void 0 : C.el.parentElement;
      if (g) {
        i();
        const A = zt(J(g));
        A.length && $a(v === "start" ? A : A.reverse());
      }
    };
    provide(co, {
      value: l,
      triggerRef: n,
      contentRef: r,
      focusProxyRef: s,
      wasEscapeCloseRef: d,
      onEntryKeyDown: p,
      onFocusProxyEnter: p,
      onContentFocusOutside: () => {
        var g, h2, x;
        const v = (x = (h2 = (g = r.value) == null ? void 0 : g.children) == null ? void 0 : h2[0]) == null ? void 0 : x.el.parentElement;
        if (v) {
          const C = zt(J(v));
          C.length && (i = Dl(C));
        }
      }
    });
    const f = () => {
      var v;
      t == null || t.onItemSelect(""), (v = n.value) == null || v.focus();
    }, m = (v) => {
      var x;
      const g = document.activeElement;
      if ((v.key === "ArrowUp" || v.key === "ArrowDown" || v.key === "ArrowLeft" || v.key === "ArrowRight") && v.preventDefault(), v.keyCode === 32 || v.key === "Enter")
        if ((t == null ? void 0 : t.modelValue.value) === l) {
          f(), v.preventDefault();
          return;
        } else {
          v.target.click(), v.preventDefault();
          return;
        }
      if (v.key === "Escape") {
        d.value = true, (x = n.value) == null || x.focus(), t.modelValue.value = "";
        return;
      }
      const h2 = ee(v, g, void 0, {
        itemsArray: e(),
        loop: false
      });
      h2 == null || h2.focus();
    };
    return (v, g) => (openBlock(), createBlock(unref(xn), {
      "as-child": o.asChild,
      onKeydown: m
    }, {
      default: withCtx(() => [
        renderSlot(v.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child"]));
  }
});
var Il = ["id", "aria-labelledby", "data-motion", "onKeydown"];
var Sa = defineComponent({
  __name: "NavigationMenuContentImpl",
  props: {
    value: {},
    triggerRef: {},
    focusProxyRef: {},
    wasEscapeCloseRef: {},
    onContentFocusOutside: { type: Function }
  },
  emits: ["escape"],
  setup(a, { expose: o, emit: e }) {
    const t = a, { getItems: l } = re(), n = ref(), r = inject(Ae), s = Ca(r.baseId, t.value), i = xa(r.baseId, t.value), d = ref(null), p = computed(() => {
      const v = l().map((T) => T.id.split("trigger-")[1]);
      (r == null ? void 0 : r.dir) === "rtl" && v.reverse();
      const g = v.indexOf(r.modelValue.value), h2 = v.indexOf(r.previousValue.value), x = t.value === (r == null ? void 0 : r.modelValue.value), C = h2 === v.indexOf(t.value);
      if (!x && !C)
        return d.value;
      const A = (() => {
        if (g !== h2) {
          if (x && h2 !== -1)
            return g > h2 ? "from-end" : "from-start";
          if (C && g !== -1)
            return g > h2 ? "to-start" : "to-end";
        }
        return null;
      })();
      return d.value = A, A;
    });
    Yo(n, (m) => {
      var g, h2;
      t.onContentFocusOutside();
      const v = m.target;
      (h2 = (g = r.rootNavigationMenu) == null ? void 0 : g.value) != null && h2.contains(v) && m.preventDefault();
    });
    const c = (m) => {
      var C;
      const v = m.altKey || m.ctrlKey || m.metaKey, g = m.key === "Tab" && !v, h2 = zt(m.currentTarget);
      if (g) {
        const A = document.activeElement, T = h2.findIndex(
          (B) => B === A
        ), R = m.shiftKey ? h2.slice(0, T).reverse() : h2.slice(T + 1, h2.length);
        if ($a(R))
          m.preventDefault();
        else {
          (C = t.focusProxyRef.value) == null || C.focus();
          return;
        }
      }
      const x = ee(
        m,
        document.activeElement,
        void 0,
        { itemsArray: h2, loop: false }
      );
      x == null || x.focus(), m.preventDefault();
    }, f = (m) => {
      e("escape", m);
    };
    return o({
      ...t
    }), (m, v) => (openBlock(), createElementBlock("div", {
      ref_key: "elementRef",
      ref: n,
      id: unref(i),
      "aria-labelledby": unref(s),
      "data-motion": p.value,
      onKeydown: [
        c,
        withKeys(withModifiers(f, ["prevent"]), ["escape"])
      ]
    }, [
      renderSlot(m.$slots, "default")
    ], 40, Il));
  }
});
var vs = defineComponent({
  inheritAttrs: false,
  __name: "NavigationMenuContent",
  setup(a) {
    const o = inject(Ae), e = inject(co), t = computed(() => (e == null ? void 0 : e.value) === (o == null ? void 0 : o.modelValue.value)), l = computed(() => ({
      value: e.value,
      triggerRef: e.triggerRef,
      focusProxyRef: e.focusProxyRef,
      wasEscapeCloseRef: e.wasEscapeCloseRef,
      onContentFocusOutside: e.onContentFocusOutside
      // onRootContentClose: itemContext!.onRootContentClose,
    })), n = ref();
    watch(n, () => {
      e.contentRef.value = n.value;
    });
    const r = getCurrentInstance();
    onMounted(() => {
      var d, p;
      const i = (p = (d = r == null ? void 0 : r.vnode.children) == null ? void 0 : d.default()) == null ? void 0 : p[0];
      o != null && o.viewport && i && (i.props = { ...i.props, ...l.value }, i.parentProps = r.vnode.props, e.contentRef.value = i, o.onViewportContentChange(e.value, i));
    });
    const s = () => {
      e.wasEscapeCloseRef.value = true;
    };
    return (i, d) => {
      var p;
      return (p = unref(o)) != null && p.viewport ? createCommentVNode("", true) : (openBlock(), createBlock(unref(Qe), {
        key: 0,
        present: t.value
      }, {
        default: withCtx(() => {
          var c;
          return [
            createVNode(Sa, mergeProps({
              ref_key: "elementRef",
              ref: n,
              "data-state": unref(uo)(t.value),
              style: {
                pointerEvents: !t.value && ((c = unref(o)) != null && c.isRootMenu) ? "none" : void 0
              }
            }, (i.$attrs, l.value), { onEscape: s }), {
              default: withCtx(() => [
                renderSlot(i.$slots, "default")
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
var hs = defineComponent({
  inheritAttrs: false,
  __name: "NavigationMenuIndicator",
  props: {
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, { getItems: e } = re(), t = inject(Ae), l = ref(), n = computed(() => (t == null ? void 0 : t.orientation) === "horizontal"), r = computed(() => !!(t != null && t.modelValue.value)), s = ref();
    watchEffect(() => {
      if (!(t != null && t.modelValue.value)) {
        l.value = void 0;
        return;
      }
      const d = e();
      s.value = d.find(
        (p) => p.id.includes(t == null ? void 0 : t.modelValue.value)
      ), i();
    });
    const i = () => {
      s.value && (l.value = {
        size: n.value ? s.value.offsetWidth : s.value.offsetHeight,
        offset: n.value ? s.value.offsetLeft : s.value.offsetTop
      });
    };
    return Me(s, i), Me(t.indicatorTrack, i), (d, p) => {
      var c, f;
      return (c = unref(t)) != null && c.indicatorTrack.value ? (openBlock(), createBlock(Teleport, {
        key: 0,
        to: (f = unref(t)) == null ? void 0 : f.indicatorTrack.value
      }, [
        createVNode(unref(Qe), { present: r.value }, {
          default: withCtx(() => {
            var m, v, g, h2;
            return [
              createVNode(unref(D), mergeProps({
                "aria-hidden": "",
                "data-state": r.value ? "visible" : "hidden",
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
                    height: ((g = l.value) == null ? void 0 : g.size) + "px",
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
var ys = defineComponent({
  __name: "NavigationMenuLink",
  props: {
    active: { type: Boolean },
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = (t) => {
    };
    return (t, l) => (openBlock(), createBlock(unref(Xo), {
      "data-active": t.active ? "" : void 0,
      "aria-current": t.active ? "page" : void 0,
      "as-child": o.asChild,
      onClick: e,
      "data-radix-vue-collection-item": ""
    }, {
      default: withCtx(() => [
        renderSlot(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["data-active", "aria-current", "as-child"]));
  }
});
var Rl = ["aria-owns"];
var _s = defineComponent({
  inheritAttrs: false,
  __name: "NavigationMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(Ae), t = inject(co), { primitiveElement: l, currentElement: n } = P(), r = Ca(e.baseId, t.value), s = xa(e.baseId, t.value), i = ref(false), d = ref(false), p = computed(() => (t == null ? void 0 : t.value) === (e == null ? void 0 : e.modelValue.value));
    onMounted(() => {
      t.triggerRef = n;
    });
    const c = () => {
      d.value = false, t.wasEscapeCloseRef.value = false;
    }, f = (C) => {
      if (C.pointerType === "mouse") {
        if (o.disabled || d.value || t.wasEscapeCloseRef.value || i.value)
          return;
        e.onTriggerEnter(t.value), i.value = true;
      }
    }, m = (C) => {
      if (C.pointerType === "mouse") {
        if (o.disabled)
          return;
        e.onTriggerLeave(), i.value = false;
      }
    }, v = () => {
      p.value ? e == null || e.onItemSelect("") : e == null || e.onItemSelect(t.value), d.value = p.value;
    }, g = (C) => {
      const T = { horizontal: "ArrowDown", vertical: e.dir === "rtl" ? "ArrowLeft" : "ArrowRight" }[e.orientation];
      p.value && C.key === T && (t.onEntryKeyDown(), C.preventDefault(), C.stopPropagation());
    }, h2 = (C) => {
      t.focusProxyRef.value = J(C);
    }, x = (C) => {
      var B, q;
      const A = (
        // @ts-ignore
        ((q = (B = t.contentRef.value) == null ? void 0 : B.children) == null ? void 0 : q[0].el).parentElement
      ), T = C.relatedTarget, I = T === n.value, R = A == null ? void 0 : A.contains(T);
      (I || !R) && t.onFocusProxyEnter(I ? "start" : "end");
    };
    return (C, A) => {
      var T;
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(unref(X), mergeProps({
          ref_key: "primitiveElement",
          ref: l,
          id: unref(r),
          disabled: C.disabled,
          "data-disabled": C.disabled ? "" : void 0,
          "data-state": unref(uo)(p.value),
          "aria-expanded": p.value,
          "aria-controls": unref(s),
          "as-child": o.asChild,
          onPointerenter: c,
          onPointermove: f,
          onPointerleave: m,
          onClick: v,
          onKeydown: g
        }, C.$attrs, { "data-radix-vue-collection-item": "" }), {
          default: withCtx(() => [
            renderSlot(C.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "disabled", "data-disabled", "data-state", "aria-expanded", "aria-controls", "as-child"]),
        p.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          createVNode(unref(_a), {
            "aria-hidden": "",
            tabIndex: 0,
            ref: h2,
            onFocus: x
          }),
          (T = unref(e)) != null && T.viewport ? (openBlock(), createElementBlock("span", {
            key: 0,
            "aria-owns": unref(s)
          }, null, 8, Rl)) : createCommentVNode("", true)
        ], 64)) : createCommentVNode("", true)
      ], 64);
    };
  }
});
var gs = defineComponent({
  inheritAttrs: false,
  __name: "NavigationMenuList",
  props: {
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(Ae), { primitiveElement: t, currentElement: l } = P(), { setCollection: n } = re();
    return n(l), onMounted(() => {
      e == null || e.onIndicatorTrackChange(l.value);
    }), (r, s) => (openBlock(), createBlock(unref(D), {
      ref_key: "primitiveElement",
      ref: t,
      style: { position: "relative" }
    }, {
      default: withCtx(() => {
        var i;
        return [
          createVNode(unref(kn), mergeProps(r.$attrs, {
            "as-child": o.asChild,
            "data-orientation": (i = unref(e)) == null ? void 0 : i.orientation
          }), {
            default: withCtx(() => [
              renderSlot(r.$slots, "default")
            ]),
            _: 3
          }, 16, ["as-child", "data-orientation"])
        ];
      }),
      _: 3
    }, 512));
  }
});
var bs = defineComponent({
  inheritAttrs: false,
  __name: "NavigationMenuViewport",
  setup(a) {
    const { primitiveElement: o, currentElement: e } = P(), t = inject(Ae), l = ref(), n = computed(() => !!(t != null && t.modelValue.value)), r = computed(
      () => n.value ? t.modelValue.value : t.previousValue.value
    );
    onMounted(() => {
      t.onViewportChange(e.value);
    });
    const s = computed(
      () => (
        // @ts-ignore
        Array.from(t == null ? void 0 : t.viewportContent.value.values())
      )
    ), i = ref(), d = computed(() => {
      var f;
      const c = (f = i.value) == null ? void 0 : f.find(
        (m) => (m == null ? void 0 : m.value) === r.value
      );
      return J(c == null ? void 0 : c.$el);
    }), p = (c) => {
      var f, m, v;
      t.modelValue.value = "", (v = (m = (f = c.props) == null ? void 0 : f.triggerRef) == null ? void 0 : m.value) == null || v.focus(), c.props.wasEscapeCloseRef.value = true;
    };
    return Me(d, () => {
      d.value && (l.value = {
        width: d.value.offsetWidth,
        height: d.value.offsetHeight
      });
    }), (c, f) => (openBlock(), createBlock(unref(Qe), { present: n.value }, {
      default: withCtx(() => {
        var m, v, g, h2;
        return [
          createVNode(unref(D), mergeProps(c.$attrs, {
            ref_key: "primitiveElement",
            ref: o,
            "data-state": unref(uo)(n.value),
            "data-orientation": (m = unref(t)) == null ? void 0 : m.orientation,
            style: {
              // Prevent interaction when animating out
              pointerEvents: !n.value && ((v = unref(t)) != null && v.isRootMenu) ? "none" : void 0,
              ["--radix-navigation-menu-viewport-width"]: l.value ? ((g = l.value) == null ? void 0 : g.width) + "px" : void 0,
              ["--radix-navigation-menu-viewport-height"]: l.value ? ((h2 = l.value) == null ? void 0 : h2.height) + "px" : void 0
            },
            onPointerenter: f[0] || (f[0] = (x) => {
              var C;
              return (C = unref(t)) == null ? void 0 : C.onContentEnter(r.value);
            }),
            onPointerleave: f[1] || (f[1] = (x) => {
              var C;
              return (C = unref(t)) == null ? void 0 : C.onContentLeave();
            })
          }), {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList(s.value, (x) => {
                var C, A;
                return openBlock(), createBlock(unref(Qe), {
                  key: (C = x.props) == null ? void 0 : C.value,
                  present: r.value === ((A = x.props) == null ? void 0 : A.value)
                }, {
                  default: withCtx(() => [
                    createVNode(Sa, mergeProps({
                      ref_for: true,
                      ref_key: "items",
                      ref: i
                    }, { ...x.props, ...x.parentProps }, {
                      onEscape: (T) => p(x)
                    }), {
                      default: withCtx(() => [
                        (openBlock(), createBlock(resolveDynamicComponent(x)))
                      ]),
                      _: 2
                    }, 1040, ["onEscape"])
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
var me = "ScrollArea";
var ws = defineComponent({
  __name: "ScrollAreaRoot",
  props: {
    type: { default: "hover" },
    dir: { default: "ltr" },
    scrollHideDelay: { default: 600 },
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, { primitiveElement: e, currentElement: t } = P(), l = ref(0), n = ref(0), r = ref(), s = ref(), i = ref(), d = ref(), p = ref(false), c = ref(false), f = (C) => {
      r.value = C;
    }, m = (C) => {
      s.value = C;
    }, v = (C) => {
      i.value = C;
    }, g = (C) => {
      d.value = C;
    }, h2 = (C) => {
      p.value = C;
    }, x = (C) => {
      c.value = C;
    };
    return provide(me, {
      type: o.type,
      dir: o.dir,
      scrollHideDelay: o.scrollHideDelay,
      scrollArea: t,
      viewport: r,
      onViewportChange: f,
      content: s,
      onContentChange: m,
      scrollbarX: i,
      scrollbarXEnabled: p,
      scrollbarY: d,
      scrollbarYEnabled: c,
      onScrollbarXChange: v,
      onScrollbarYChange: g,
      onScrollbarXEnabledChange: h2,
      onScrollbarYEnabledChange: x
    }), (C, A) => (openBlock(), createBlock(unref(D), {
      ref_key: "primitiveElement",
      ref: e,
      "as-child": o.asChild,
      style: normalizeStyle({
        position: "relative",
        // Pass corner sizes as CSS vars to reduce re-renders of context consumers
        ["--radix-scroll-area-corner-width"]: l.value + "px",
        ["--radix-scroll-area-corner-height"]: n.value + "px"
      })
    }, {
      default: withCtx(() => [
        renderSlot(C.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "style"]));
  }
});
var Es = defineComponent({
  __name: "ScrollAreaViewport",
  props: {
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(
      me
    ), { primitiveElement: t, currentElement: l } = P(), n = ref();
    return onMounted(() => {
      e == null || e.onViewportChange(n.value), e == null || e.onContentChange(l.value);
    }), (r, s) => {
      var i, d;
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
          overflowX: (i = unref(e)) != null && i.scrollbarXEnabled.value ? "scroll" : "hidden",
          overflowY: (d = unref(e)) != null && d.scrollbarYEnabled.value ? "scroll" : "hidden"
        })
      }, [
        createVNode(unref(D), {
          ref_key: "primitiveElement",
          ref: t,
          style: { minWidth: "100%", display: "table" },
          "as-child": o.asChild
        }, {
          default: withCtx(() => [
            renderSlot(r.$slots, "default")
          ]),
          _: 3
        }, 8, ["as-child"])
      ], 4);
    };
  }
});
function Nl(a, [o, e]) {
  return Math.min(e, Math.max(o, a));
}
function ka(a, o) {
  return (e) => {
    if (a[0] === a[1] || o[0] === o[1])
      return o[0];
    const t = (o[1] - o[0]) / (a[1] - a[0]);
    return o[0] + t * (e - a[0]);
  };
}
function Ot(a) {
  const o = Aa(a.viewport, a.content), e = a.scrollbar.paddingStart + a.scrollbar.paddingEnd, t = (a.scrollbar.size - e) * o;
  return Math.max(t, 18);
}
function Aa(a, o) {
  const e = a / o;
  return isNaN(e) ? 0 : e;
}
var Ll = (a, o = () => {
}) => {
  let e = { left: a.scrollLeft, top: a.scrollTop }, t = 0;
  return function l() {
    const n = { left: a.scrollLeft, top: a.scrollTop }, r = e.left !== n.left, s = e.top !== n.top;
    (r || s) && o(), e = n, t = window.requestAnimationFrame(l);
  }(), () => window.cancelAnimationFrame(t);
};
function Mo(a, o, e = "ltr") {
  const t = Ot(o), l = o.scrollbar.paddingStart + o.scrollbar.paddingEnd, n = o.scrollbar.size - l, r = o.content - o.viewport, s = n - t, i = e === "ltr" ? [0, r] : [r * -1, 0], d = Nl(
    a,
    i
  );
  return ka([0, r], [0, s])(d);
}
function ft(a) {
  return a ? parseInt(a, 10) : 0;
}
function Kl(a, o, e, t = "ltr") {
  const l = Ot(e), n = l / 2, r = o || n, s = l - r, i = e.scrollbar.paddingStart + r, d = e.scrollbar.size - e.scrollbar.paddingEnd - s, p = e.content - e.viewport, c = t === "ltr" ? [0, p] : [p * -1, 0];
  return ka(
    [i, d],
    c
  )(a);
}
function Do(a, o) {
  return a > 0 && a < o;
}
var Ta = defineComponent({
  __name: "ScrollAreaScrollbarImpl",
  props: {
    isHorizontal: { type: Boolean }
  },
  emits: ["onDragScroll", "onWheelScroll", "onThumbPointerDown"],
  setup(a, { emit: o }) {
    const e = a, t = inject(
      me
    ), l = inject(
      ct
    ), n = inject(Fe), { primitiveElement: r, currentElement: s } = P(), i = ref(""), d = ref();
    function p(h2) {
      var x, C;
      if (d.value) {
        const A = h2.clientX - ((x = d.value) == null ? void 0 : x.left), T = h2.clientY - ((C = d.value) == null ? void 0 : C.top);
        o("onDragScroll", { x: A, y: T });
      }
    }
    const c = (h2) => {
      h2.button === 0 && (h2.target.setPointerCapture(h2.pointerId), d.value = s.value.getBoundingClientRect(), i.value = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", t != null && t.viewport && (t.viewport.value.style.scrollBehavior = "auto"), p(h2));
    }, f = (h2) => {
      p(h2);
    }, m = (h2) => {
      const x = h2.target;
      x.hasPointerCapture(h2.pointerId) && x.releasePointerCapture(h2.pointerId), document.body.style.webkitUserSelect = i.value, t != null && t.viewport && (t.viewport.value.style.scrollBehavior = ""), d.value = void 0;
    }, v = (h2) => {
      var T;
      if (!l)
        return;
      const x = h2.target, C = (T = s.value) == null ? void 0 : T.contains(x), A = l.sizes.value.content - l.sizes.value.viewport;
      C && l.handleWheelScroll(h2, A);
    };
    onMounted(() => {
      document.addEventListener("wheel", v, { passive: false });
    }), onUnmounted(() => {
      document.removeEventListener("wheel", v);
    });
    const g = () => {
      var h2, x, C, A, T, I;
      s.value && (e.isHorizontal ? l == null || l.handleSizeChange({
        content: ((h2 = t == null ? void 0 : t.viewport.value) == null ? void 0 : h2.scrollWidth) ?? 0,
        viewport: ((x = t == null ? void 0 : t.viewport.value) == null ? void 0 : x.offsetWidth) ?? 0,
        scrollbar: {
          size: ((C = s.value) == null ? void 0 : C.clientWidth) ?? 0,
          paddingStart: ft(getComputedStyle(s.value).paddingLeft),
          paddingEnd: ft(getComputedStyle(s.value).paddingRight)
        }
      }) : l == null || l.handleSizeChange({
        content: ((A = t == null ? void 0 : t.viewport.value) == null ? void 0 : A.scrollHeight) ?? 0,
        viewport: ((T = t == null ? void 0 : t.viewport.value) == null ? void 0 : T.offsetHeight) ?? 0,
        scrollbar: {
          size: ((I = s.value) == null ? void 0 : I.clientHeight) ?? 0,
          paddingStart: ft(getComputedStyle(s.value).paddingLeft),
          paddingEnd: ft(getComputedStyle(s.value).paddingRight)
        }
      }));
    };
    return Me(s, g), Me(t == null ? void 0 : t.content, g), (h2, x) => {
      var C;
      return openBlock(), createBlock(unref(D), {
        ref_key: "primitiveElement",
        ref: r,
        style: { position: "absolute" },
        "data-scrollbarimpl": "",
        "as-child": (C = unref(n)) == null ? void 0 : C.asChild.value,
        onPointerdown: c,
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
var Hl = defineComponent({
  __name: "ScrollAreaScrollbarX",
  setup(a) {
    const o = inject(
      me
    ), e = inject(
      ct
    ), { primitiveElement: t, currentElement: l } = P();
    onMounted(() => {
      l.value && (o == null || o.onScrollbarYChange(l.value));
    });
    const n = computed(() => e == null ? void 0 : e.sizes.value);
    return (r, s) => {
      var i, d;
      return openBlock(), createBlock(Ta, {
        "is-horizontal": true,
        "data-orientation": "horizontal",
        ref_key: "primitiveElement",
        ref: t,
        onOnDragScroll: s[0] || (s[0] = (p) => {
          var c;
          return (c = unref(e)) == null ? void 0 : c.onDragScroll(p.x);
        }),
        style: normalizeStyle({
          bottom: 0,
          left: ((i = unref(o)) == null ? void 0 : i.dir) === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
          right: ((d = unref(o)) == null ? void 0 : d.dir) === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
          ["--radix-scroll-area-thumb-width"]: n.value ? unref(Ot)(n.value) + "px" : void 0
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
var zl = defineComponent({
  __name: "ScrollAreaScrollbarY",
  setup(a) {
    const o = inject(
      me
    ), e = inject(
      ct
    ), { primitiveElement: t, currentElement: l } = P();
    onMounted(() => {
      l.value && (o == null || o.onScrollbarYChange(l.value));
    });
    const n = computed(() => e == null ? void 0 : e.sizes.value);
    return (r, s) => {
      var i, d;
      return openBlock(), createBlock(Ta, {
        "is-horizontal": false,
        "data-orientation": "vertical",
        ref_key: "primitiveElement",
        ref: t,
        onOnDragScroll: s[0] || (s[0] = (p) => {
          var c;
          return (c = unref(e)) == null ? void 0 : c.onDragScroll(p.y);
        }),
        style: normalizeStyle({
          top: 0,
          right: ((i = unref(o)) == null ? void 0 : i.dir) === "ltr" ? 0 : void 0,
          left: ((d = unref(o)) == null ? void 0 : d.dir) === "rtl" ? 0 : void 0,
          bottom: "var(--radix-scroll-area-corner-height)",
          ["--radix-scroll-area-thumb-height"]: n.value ? unref(Ot)(n.value) + "px" : void 0
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
var ct = "ScrollAreaScrollbarVisible";
var po = defineComponent({
  __name: "ScrollAreaScrollbarVisible",
  setup(a) {
    const o = inject(
      me
    ), e = inject(
      Fe
    ), t = ref({
      content: 0,
      viewport: 0,
      scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
    }), l = computed(() => {
      const h2 = Aa(t.value.viewport, t.value.content);
      return h2 > 0 && h2 < 1;
    }), n = ref(), r = ref(0), s = (h2, x) => {
      if (f.value) {
        const C = o.viewport.value.scrollLeft + h2.deltaY;
        o.viewport.value.scrollLeft = C, Do(C, x) && h2.preventDefault();
      } else {
        const C = o.viewport.value.scrollTop + h2.deltaY;
        o.viewport.value.scrollTop = C, Do(C, x) && h2.preventDefault();
      }
    }, i = (h2, x) => {
      f.value ? r.value = x.x : r.value = x.y;
    }, d = (h2) => {
      r.value = 0;
    }, p = (h2) => {
      t.value = h2;
    };
    function c(h2, x) {
      return Kl(
        h2,
        r.value,
        t.value,
        x
      );
    }
    const f = computed(
      () => e == null ? void 0 : e.isHorizontal.value
    );
    return provide(
      ct,
      {
        sizes: t,
        hasThumb: l,
        handleWheelScroll: s,
        handleThumbDown: i,
        handleThumbUp: d,
        handleSizeChange: p,
        onThumbPositionChange: () => {
          if (f.value) {
            if (o != null && o.viewport.value && n.value) {
              const h2 = o == null ? void 0 : o.viewport.value.scrollLeft, x = Mo(
                h2,
                t.value,
                o == null ? void 0 : o.dir
              );
              n.value.style.transform = `translate3d(${x}px, 0, 0)`;
            }
          } else if (o != null && o.viewport.value && n.value) {
            const h2 = o == null ? void 0 : o.viewport.value.scrollTop, x = Mo(h2, t.value);
            n.value.style.transform = `translate3d(0, ${x}px, 0)`;
          }
        },
        onThumbChange: (h2) => {
          n.value = h2;
        },
        onDragScroll: (h2) => {
          f.value ? o.viewport.value.scrollLeft = c(
            h2,
            o.dir
          ) : o.viewport.value.scrollTop = c(h2);
        }
      }
    ), (h2, x) => f.value ? (openBlock(), createBlock(Hl, { key: 0 }, {
      default: withCtx(() => [
        renderSlot(h2.$slots, "default")
      ]),
      _: 3
    })) : (openBlock(), createBlock(zl, { key: 1 }, {
      default: withCtx(() => [
        renderSlot(h2.$slots, "default")
      ]),
      _: 3
    }));
  }
});
var Ba = defineComponent({
  __name: "ScrollAreaScrollbarAuto",
  setup(a) {
    const o = inject(
      me
    ), e = inject(
      Fe
    ), t = ref(false), l = qt(() => {
      if (o != null && o.viewport.value) {
        const n = (o == null ? void 0 : o.viewport.value.offsetWidth) < (o == null ? void 0 : o.viewport.value.scrollWidth), r = (o == null ? void 0 : o.viewport.value.offsetHeight) < (o == null ? void 0 : o.viewport.value.scrollHeight);
        t.value = e != null && e.isHorizontal.value ? n : r;
      }
    }, 10);
    return Me(o == null ? void 0 : o.viewport, l), Me(o == null ? void 0 : o.content, l), (n, r) => t.value ? (openBlock(), createBlock(po, mergeProps({ key: 0 }, n.$attrs, {
      "data-state": t.value ? "visible" : "hidden"
    }), {
      default: withCtx(() => [
        renderSlot(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-state"])) : createCommentVNode("", true);
  }
});
var Yl = {
  inheritAttrs: false
};
var Wl = defineComponent({
  ...Yl,
  __name: "ScrollAreaScrollbarHover",
  setup(a) {
    const o = inject(me);
    inject(
      Fe
    );
    let e;
    const t = ref(false), l = () => {
      window.clearTimeout(e), t.value = true;
    }, n = () => {
      e = window.setTimeout(() => {
        t.value = false;
      }, o == null ? void 0 : o.scrollHideDelay);
    };
    return onMounted(() => {
      const r = o == null ? void 0 : o.scrollArea.value;
      r && (r.addEventListener("pointerenter", l), r.addEventListener("pointerleave", n));
    }), onUnmounted(() => {
      const r = o == null ? void 0 : o.scrollArea.value;
      r && (window.clearTimeout(e), r.removeEventListener("pointerenter", l), r.removeEventListener("pointerleave", n));
    }), (r, s) => t.value ? (openBlock(), createBlock(Ba, mergeProps({ key: 0 }, r.$attrs, {
      "data-state": t.value ? "visible" : "hidden"
    }), {
      default: withCtx(() => [
        renderSlot(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-state"])) : createCommentVNode("", true);
  }
});
var Ul = defineComponent({
  __name: "ScrollAreaScrollbarScroll",
  setup(a) {
    const o = inject(
      me
    ), e = inject(
      Fe
    ), { state: t, dispatch: l } = qo("hidden", {
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
        o == null ? void 0 : o.scrollHideDelay
      );
    });
    const n = qt(() => l("SCROLL_END"), 100);
    return watchEffect(() => {
      const r = o == null ? void 0 : o.viewport.value, s = e != null && e.isHorizontal.value ? "scrollLeft" : "scrollTop";
      if (r) {
        let i = r[s];
        const d = () => {
          const p = r[s];
          i !== p && (l("SCROLL"), n()), i = p;
        };
        r.addEventListener("scroll", d);
      }
    }), (r, s) => unref(t) !== "hidden" ? (openBlock(), createBlock(po, normalizeProps(mergeProps({ key: 0 }, r.$attrs)), {
      default: withCtx(() => [
        renderSlot(r.$slots, "default")
      ]),
      _: 3
    }, 16)) : createCommentVNode("", true);
  }
});
var Fe = Symbol();
var ql = {
  inheritAttrs: false
};
var Cs = defineComponent({
  ...ql,
  __name: "ScrollAreaScrollbar",
  props: {
    orientation: { default: "vertical" },
    forceMount: { type: Boolean, default: void 0 },
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(me), t = computed(() => o.orientation === "horizontal");
    watch(
      t,
      () => {
        t.value ? e == null || e.onScrollbarXEnabledChange(true) : e == null || e.onScrollbarYEnabledChange(true);
      },
      { immediate: true }
    ), onUnmounted(() => {
      e == null || e.onScrollbarXEnabledChange(false), e == null || e.onScrollbarYEnabledChange(false);
    });
    const { orientation: l, forceMount: n, asChild: r } = toRefs(o);
    return provide(Fe, {
      orientation: l,
      forceMount: n,
      isHorizontal: t,
      asChild: r
    }), (s, i) => {
      var d, p, c, f;
      return ((d = unref(e)) == null ? void 0 : d.type) === "hover" ? (openBlock(), createBlock(Wl, mergeProps({ key: 0 }, s.$attrs, { forceMount: unref(n) }), {
        default: withCtx(() => [
          renderSlot(s.$slots, "default")
        ]),
        _: 3
      }, 16, ["forceMount"])) : ((p = unref(e)) == null ? void 0 : p.type) === "scroll" ? (openBlock(), createBlock(Ul, mergeProps({ key: 1 }, s.$attrs, { forceMount: unref(n) }), {
        default: withCtx(() => [
          renderSlot(s.$slots, "default")
        ]),
        _: 3
      }, 16, ["forceMount"])) : ((c = unref(e)) == null ? void 0 : c.type) === "auto" ? (openBlock(), createBlock(Ba, mergeProps({ key: 2 }, s.$attrs, { forceMount: unref(n) }), {
        default: withCtx(() => [
          renderSlot(s.$slots, "default")
        ]),
        _: 3
      }, 16, ["forceMount"])) : ((f = unref(e)) == null ? void 0 : f.type) === "always" ? (openBlock(), createBlock(po, mergeProps({ key: 3 }, s.$attrs, { forceMount: unref(n) }), {
        default: withCtx(() => [
          renderSlot(s.$slots, "default")
        ]),
        _: 3
      }, 16, ["forceMount"])) : createCommentVNode("", true);
    };
  }
});
var xs = defineComponent({
  __name: "ScrollAreaThumb",
  props: {
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(
      me
    ), t = inject(
      ct
    ), l = (f) => {
      const v = f.target.getBoundingClientRect(), g = f.clientX - v.left, h2 = f.clientY - v.top;
      t == null || t.handleThumbDown(f, { x: g, y: h2 });
    }, n = (f) => {
      t == null || t.handleThumbUp(f);
    }, { primitiveElement: r, currentElement: s } = P(), i = ref(), d = computed(() => e == null ? void 0 : e.viewport.value), p = () => {
      if (!i.value) {
        const f = Ll(
          d.value,
          t == null ? void 0 : t.onThumbPositionChange
        );
        i.value = f, t == null || t.onThumbPositionChange();
      }
    }, c = computed(() => t == null ? void 0 : t.sizes.value);
    return rn(c, () => {
      t == null || t.onThumbChange(s.value), d.value && (t == null || t.onThumbPositionChange(), d.value.addEventListener("scroll", p));
    }), onUnmounted(() => {
      var f;
      d.value.removeEventListener("scroll", p), (f = e == null ? void 0 : e.viewport.value) == null || f.removeEventListener(
        "scroll",
        p
      );
    }), (f, m) => {
      var v;
      return openBlock(), createBlock(unref(D), {
        ref_key: "primitiveElement",
        ref: r,
        "data-state": (v = unref(t)) != null && v.hasThumb ? "visible" : "hidden",
        style: normalizeStyle({
          width: "var(--radix-scroll-area-thumb-width)",
          height: "var(--radix-scroll-area-thumb-height)"
        }),
        "as-child": o.asChild,
        onPointerdown: l,
        onPointerup: n
      }, null, 8, ["data-state", "style", "as-child"]);
    };
  }
});
export {
  Jl as AccordionContent,
  Zl as AccordionHeader,
  Fl as AccordionItem,
  Xl as AccordionRoot,
  Ql as AccordionTrigger,
  Nr as AlertDialogAction,
  Dr as AlertDialogCancel,
  Or as AlertDialogContent,
  Rr as AlertDialogDescription,
  Mr as AlertDialogOverlay,
  Pr as AlertDialogPortal,
  Tr as AlertDialogRoot,
  Ir as AlertDialogTitle,
  Br as AlertDialogTrigger,
  ir as AspectRatio,
  Gr as AvatarFallback,
  qr as AvatarImage,
  Ur as AvatarRoot,
  jl as CheckboxIndicator,
  Vl as CheckboxRoot,
  Pn as CollapsibleContent,
  An as CollapsibleRoot,
  Tn as CollapsibleTrigger,
  Ai as ContextMenuArrow,
  Mi as ContextMenuCheckboxItem,
  ki as ContextMenuContent,
  Pi as ContextMenuGroup,
  Bi as ContextMenuItem,
  Di as ContextMenuItemIndicator,
  Ii as ContextMenuLabel,
  Si as ContextMenuPortal,
  Ri as ContextMenuRadioGroup,
  Ni as ContextMenuRadioItem,
  xi as ContextMenuRoot,
  Oi as ContextMenuSeparator,
  Ti as ContextMenuSub,
  Li as ContextMenuSubContent,
  Ki as ContextMenuSubTrigger,
  $i as ContextMenuTrigger,
  Sr as DialogClose,
  xr as DialogContent,
  Ar as DialogDescription,
  $r as DialogOverlay,
  Cr as DialogPortal,
  wr as DialogRoot,
  kr as DialogTitle,
  Er as DialogTrigger,
  pi as DropdownMenuArrow,
  yi as DropdownMenuCheckboxItem,
  ci as DropdownMenuContent,
  vi as DropdownMenuGroup,
  mi as DropdownMenuItem,
  _i as DropdownMenuItemIndicator,
  gi as DropdownMenuLabel,
  di as DropdownMenuPortal,
  bi as DropdownMenuRadioGroup,
  wi as DropdownMenuRadioItem,
  si as DropdownMenuRoot,
  hi as DropdownMenuSeparator,
  fi as DropdownMenuSub,
  Ei as DropdownMenuSubContent,
  Ci as DropdownMenuSubTrigger,
  ui as DropdownMenuTrigger,
  ti as HoverCardArrow,
  ei as HoverCardContent,
  jr as HoverCardPortal,
  Qr as HoverCardRoot,
  Vr as HoverCardTrigger,
  ar as Label,
  ts as MenubarArrow,
  rs as MenubarCheckboxItem,
  es as MenubarContent,
  ns as MenubarGroup,
  as as MenubarItem,
  is as MenubarItemIndicator,
  ss as MenubarLabel,
  Qi as MenubarMenu,
  ji as MenubarPortal,
  us as MenubarRadioGroup,
  ds as MenubarRadioItem,
  Zi as MenubarRoot,
  ls as MenubarSeparator,
  os as MenubarSub,
  cs as MenubarSubContent,
  ps as MenubarSubTrigger,
  Vi as MenubarTrigger,
  vs as NavigationMenuContent,
  hs as NavigationMenuIndicator,
  ms as NavigationMenuItem,
  ys as NavigationMenuLink,
  gs as NavigationMenuList,
  fs as NavigationMenuRoot,
  _s as NavigationMenuTrigger,
  bs as NavigationMenuViewport,
  ri as PopoverArrow,
  ii as PopoverClose,
  li as PopoverContent,
  ni as PopoverPortal,
  oi as PopoverRoot,
  ai as PopoverTrigger,
  br as ProgressIndicator,
  gr as ProgressRoot,
  _r as RadioGroupIndicator,
  yr as RadioGroupItem,
  hr as RadioGroupRoot,
  ws as ScrollAreaRoot,
  Cs as ScrollAreaScrollbar,
  xs as ScrollAreaThumb,
  Es as ScrollAreaViewport,
  Ui as SelectArrow,
  Wi as SelectContent,
  Fi as SelectGroup,
  Ji as SelectItem,
  Gi as SelectItemIndicator,
  Xi as SelectLabel,
  Yi as SelectPortal,
  Hi as SelectRoot,
  qi as SelectSeparator,
  zi as SelectTrigger,
  or as Separator,
  vr as SliderRange,
  pr as SliderRoot,
  fr as SliderThumb,
  mr as SliderTrack,
  er as SwitchRoot,
  tr as SwitchThumb,
  dr as TabsContent,
  ur as TabsList,
  sr as TabsRoot,
  cr as TabsTrigger,
  nr as Toggle,
  rr as ToggleGroupItem,
  lr as ToggleGroupRoot,
  Kr as ToolbarButton,
  Hr as ToolbarLink,
  Lr as ToolbarRoot,
  Wr as ToolbarSeparator,
  zr as ToolbarToggleGroup,
  Yr as ToolbarToggleItem,
  Zr as TooltipArrow,
  Jr as TooltipContent,
  Xr as TooltipRoot,
  Fr as TooltipTrigger
};
//# sourceMappingURL=radix-vue.js.map
