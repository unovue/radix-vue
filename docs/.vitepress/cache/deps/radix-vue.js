import {
  Fragment,
  Teleport,
  cloneVNode,
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
  toRef,
  toRefs,
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

// node_modules/.pnpm/radix-vue@0.1.10_vue@3.3.4/node_modules/radix-vue/dist/index.js
var za = Object.defineProperty;
var Ya = Object.defineProperties;
var Wa = Object.getOwnPropertyDescriptors;
var ho = Object.getOwnPropertySymbols;
var Ua = Object.prototype.hasOwnProperty;
var qa = Object.prototype.propertyIsEnumerable;
var yo = (a, o, e) => o in a ? za(a, o, { enumerable: true, configurable: true, writable: true, value: e }) : a[o] = e;
var Ga = (a, o) => {
  for (var e in o || (o = {}))
    Ua.call(o, e) && yo(a, e, o[e]);
  if (ho)
    for (var e of ho(o))
      qa.call(o, e) && yo(a, e, o[e]);
  return a;
};
var Xa = (a, o) => Ya(a, Wa(o));
function Fa(a, o) {
  var e;
  const t = shallowRef();
  return watchEffect(() => {
    t.value = a();
  }, Xa(Ga({}, o), {
    flush: (e = o == null ? void 0 : o.flush) != null ? e : "sync"
  })), readonly(t);
}
function Ja(a, o) {
  let e, t, l;
  const n = ref(true), r = () => {
    n.value = true, l();
  };
  watch(a, r, { flush: "sync" });
  const s = typeof o == "function" ? o : o.get, i = typeof o == "function" ? void 0 : o.set, d = customRef((p, c) => (t = p, l = c, {
    get() {
      return n.value && (e = s(), n.value = false), t(), e;
    },
    set(m) {
      i == null || i(m);
    }
  }));
  return Object.isExtensible(d) && (d.trigger = r), d;
}
function Lo(a) {
  return getCurrentScope() ? (onScopeDispose(a), true) : false;
}
function Za(a) {
  let o = false, e;
  const t = effectScope(true);
  return (...l) => (o || (e = t.run(() => a(...l)), o = true), e);
}
function vt(a) {
  return typeof a == "function" ? a() : unref(a);
}
var Ko = typeof window < "u";
var Qa = (a) => typeof a < "u";
var ht = () => {
};
var Va = ja();
function ja() {
  var a;
  return Ko && ((a = window == null ? void 0 : window.navigator) == null ? void 0 : a.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
}
function en(a, o) {
  function e(...t) {
    return new Promise((l, n) => {
      Promise.resolve(a(() => o.apply(this, t), { fn: o, thisArg: this, args: t })).then(l).catch(n);
    });
  }
  return e;
}
function tn(a, o = {}) {
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
function Gt(a, o = 200, e = {}) {
  return en(
    tn(o, e),
    a
  );
}
function on(a, o, e = {}) {
  var t, l;
  const {
    flush: n = "sync",
    deep: r = false,
    immediate: s = true,
    direction: i = "both",
    transform: d = {}
  } = e;
  let p, c;
  const m = (t = d.ltr) != null ? t : (v) => v, f = (l = d.rtl) != null ? l : (v) => v;
  return (i === "both" || i === "ltr") && (p = watch(
    a,
    (v) => o.value = m(v),
    { flush: n, deep: r, immediate: s }
  )), (i === "both" || i === "rtl") && (c = watch(
    o,
    (v) => a.value = f(v),
    { flush: n, deep: r, immediate: s }
  )), () => {
    p == null || p(), c == null || c();
  };
}
function an(a, o, e) {
  const t = watch(a, (...l) => (nextTick(() => t()), o(...l)), e);
}
function Z(a) {
  var o;
  const e = vt(a);
  return (o = e == null ? void 0 : e.$el) != null ? o : e;
}
var xt = Ko ? window : void 0;
function Ze(...a) {
  let o, e, t, l;
  if (typeof a[0] == "string" || Array.isArray(a[0]) ? ([e, t, l] = a, o = xt) : [o, e, t, l] = a, !o)
    return ht;
  Array.isArray(e) || (e = [e]), Array.isArray(t) || (t = [t]);
  const n = [], r = () => {
    n.forEach((p) => p()), n.length = 0;
  }, s = (p, c, m, f) => (p.addEventListener(c, m, f), () => p.removeEventListener(c, m, f)), i = watch(
    () => [Z(o), vt(l)],
    ([p, c]) => {
      r(), p && n.push(
        ...e.flatMap((m) => t.map((f) => s(p, m, f, c)))
      );
    },
    { immediate: true, flush: "post" }
  ), d = () => {
    i(), r();
  };
  return Lo(d), d;
}
var _o = false;
function $e(a, o, e = {}) {
  const { window: t = xt, ignore: l = [], capture: n = true, detectIframe: r = false } = e;
  if (!t)
    return;
  Va && !_o && (_o = true, Array.from(t.document.body.children).forEach((m) => m.addEventListener("click", ht)));
  let s = true;
  const i = (m) => l.some((f) => {
    if (typeof f == "string")
      return Array.from(t.document.querySelectorAll(f)).some((v) => v === m.target || m.composedPath().includes(v));
    {
      const v = Z(f);
      return v && (m.target === v || m.composedPath().includes(v));
    }
  }), p = [
    Ze(t, "click", (m) => {
      const f = Z(a);
      if (!(!f || f === m.target || m.composedPath().includes(f))) {
        if (m.detail === 0 && (s = !i(m)), !s) {
          s = true;
          return;
        }
        o(m);
      }
    }, { passive: true, capture: n }),
    Ze(t, "pointerdown", (m) => {
      const f = Z(a);
      f && (s = !m.composedPath().includes(f) && !i(m));
    }, { passive: true }),
    r && Ze(t, "blur", (m) => {
      setTimeout(() => {
        var f;
        const v = Z(a);
        ((f = t.document.activeElement) == null ? void 0 : f.tagName) === "IFRAME" && !(v != null && v.contains(t.document.activeElement)) && o(m);
      }, 0);
    })
  ].filter(Boolean);
  return () => p.forEach((m) => m());
}
function Xt(a = {}) {
  var o;
  const { window: e = xt } = a, t = (o = a.document) != null ? o : e == null ? void 0 : e.document, l = Ja(
    () => null,
    () => t == null ? void 0 : t.activeElement
  );
  return e && (Ze(e, "blur", (n) => {
    n.relatedTarget === null && l.trigger();
  }, true), Ze(e, "focus", l.trigger, true)), l;
}
function nn() {
  const a = ref(false);
  return getCurrentInstance() && onMounted(() => {
    a.value = true;
  }), a;
}
function ln(a) {
  const o = nn();
  return computed(() => (o.value, !!a()));
}
function rn(a) {
  return JSON.parse(JSON.stringify(a));
}
var go = Object.getOwnPropertySymbols;
var sn = Object.prototype.hasOwnProperty;
var un = Object.prototype.propertyIsEnumerable;
var dn = (a, o) => {
  var e = {};
  for (var t in a)
    sn.call(a, t) && o.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && go)
    for (var t of go(a))
      o.indexOf(t) < 0 && un.call(a, t) && (e[t] = a[t]);
  return e;
};
function Oe(a, o, e = {}) {
  const t = e, { window: l = xt } = t, n = dn(t, ["window"]);
  let r;
  const s = ln(() => l && "ResizeObserver" in l), i = () => {
    r && (r.disconnect(), r = void 0);
  }, d = computed(
    () => Array.isArray(a) ? a.map((m) => Z(m)) : [Z(a)]
  ), p = watch(
    d,
    (m) => {
      if (i(), s.value && l) {
        r = new ResizeObserver(o);
        for (const f of m)
          f && r.observe(f, n);
      }
    },
    { immediate: true, flush: "post", deep: true }
  ), c = () => {
    i(), p();
  };
  return Lo(c), {
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
    shouldEmit: m
  } = t, f = getCurrentInstance(), v = e || (f == null ? void 0 : f.emit) || ((l = f == null ? void 0 : f.$emit) == null ? void 0 : l.bind(f)) || ((r = (n = f == null ? void 0 : f.proxy) == null ? void 0 : n.$emit) == null ? void 0 : r.bind(f == null ? void 0 : f.proxy));
  let g = d;
  o || (o = "modelValue"), g = g || `update:${o.toString()}`;
  const h2 = (k) => s ? typeof s == "function" ? s(k) : rn(k) : k, x = () => Qa(a[o]) ? h2(a[o]) : c, C = (k) => {
    m ? m(k) && v(g, k) : v(g, k);
  };
  if (i) {
    const k = x(), T = ref(k);
    return watch(
      () => a[o],
      (R) => T.value = h2(R)
    ), watch(
      T,
      (R) => {
        (R !== a[o] || p) && C(R);
      },
      { deep: p }
    ), T;
  } else
    return computed({
      get() {
        return x();
      },
      set(k) {
        C(k);
      }
    });
}
var Ho = (a, o) => {
  const e = (t) => {
    const l = Z(a);
    (l == null ? void 0 : l.contains(t.relatedTarget)) || o(t);
  };
  onMounted(() => {
    const t = Z(a);
    t == null || t.addEventListener("focusout", e);
  }), onUnmounted(() => {
    const t = Z(a);
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
  } = t, [c, m, f, v, g, h2] = [
    a.key === "ArrowRight",
    a.key === "ArrowLeft",
    a.key === "ArrowUp",
    a.key === "ArrowDown",
    a.key === "Home",
    a.key === "End"
  ], x = f || v, C = c || m;
  if (!g && !h2 && (!x && !C || l === "vertical" && C || l === "horizontal" && x))
    return null;
  const k = e ? Array.from(e.querySelectorAll(`[${n}]`)) : r;
  if (!k.length)
    return null;
  d && a.preventDefault();
  let T = null;
  return C || x ? T = zo(k, o, {
    goForward: x ? v : i === "ltr" ? c : m,
    loop: s
  }) : g ? T = k.at(0) || null : h2 && (T = k.at(-1) || null), p && (T == null || T.focus()), T;
}
function zo(a, o, { goForward: e, loop: t }, l = a.length) {
  if (--l === 0)
    return null;
  const n = a.indexOf(o), r = e ? n + 1 : n - 1;
  if (!t && (r < 0 || r >= a.length))
    return null;
  const s = (r + a.length) % a.length, i = a[s];
  return i ? i.hasAttribute("disabled") && i.getAttribute("disabled") !== "false" ? zo(
    a,
    i,
    { goForward: e, loop: t },
    l
  ) : i : null;
}
async function Yo(a, o, e = 500) {
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
var Wo = (a, o = 300) => {
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
function Uo(a, o) {
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
var cn = "data-radix-vue-collection-item";
var bo = Symbol();
var le = () => {
  const a = (l) => {
    provide(bo, {
      collectionRef: l
    });
  }, o = inject(bo);
  return { createCollection: a, setCollection: (l) => {
    o && (o.collectionRef = l);
  }, getItems: (l) => {
    const n = l ?? Z(o == null ? void 0 : o.collectionRef);
    return n ? Array.from(
      n.querySelectorAll(
        `[${cn}]:not([data-disabled])`
      )
    ) : [];
  } };
};
var pn = (a) => {
  const o = ref(), e = computed(() => {
    var l;
    return ((l = o.value) == null ? void 0 : l.width) ?? 0;
  }), t = computed(() => {
    var l;
    return ((l = o.value) == null ? void 0 : l.height) ?? 0;
  });
  return onMounted(() => {
    const l = Z(a);
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
var fn = Za(() => ({ count: ref(0) }));
var se = (a) => {
  const { count: o } = fn();
  return a || o.value++, a || `radix-${o.value}`;
};
function Ft(a) {
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
function qo(a) {
  return a ? a.flatMap((o) => o.type === Fragment ? qo(o.children) : [o]) : [];
}
function mn(a) {
  return a && (typeof a.type == "string" || typeof a.type == "object" || typeof a.type == "function");
}
var vn = [
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
var hn = (a) => defineComponent({
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
      if (n = qo(n || []), Object.keys(e).length > 0) {
        const [d, ...p] = n;
        if (!mn(d) || p.length > 0) {
          const f = (s = l == null ? void 0 : l.parent) != null && s.type.name ? `<${l.parent.type.name} />` : "component";
          throw new Error(
            [
              `Detected an invalid children for \`${f}\` with \`asChild\` prop.`,
              "",
              "Note: All components accepting `asChild` expect only one direct child of valid VNode type.",
              "You can apply a few solutions:",
              [
                "Provide a single child element so that we can forward the props onto that element.",
                "Ensure the first child is an actual element instead of a raw text node or comment node."
              ].map((v) => `  - ${v}`).join(`
`)
            ].join(`
`)
          );
        }
        (i = d.props) == null || delete i.ref;
        const c = mergeProps(d.props ?? {}, e), m = cloneVNode(d, c);
        for (const f in c)
          f.startsWith("on") && (m.props || (m.props = {}), m.props[f] = c[f]);
        return m;
      } else
        return Array.isArray(n) && n.length === 1 ? n[0] : null;
    } : () => h(
      a,
      { ...e },
      { default: () => t.default && t.default() }
    );
  }
});
var V = vn.reduce((a, o) => {
  const e = hn(o);
  return { ...a, [o]: e };
}, {});
var P = () => {
  const a = ref(), o = computed(() => Z(a));
  return {
    primitiveElement: a,
    currentElement: o
  };
};
var Go = V.a;
var X = V.button;
var D = V.div;
V.form;
var Xo = V.h2;
var yn = V.h3;
var _n = V.img;
V.input;
var it = V.label;
var gn = V.li;
var bn = V.nav;
V.ol;
var Fo = V.p;
var ne = V.span;
var wn = V.svg;
var En = V.ul;
var Jt = Symbol();
var Cn = defineComponent({
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
    return provide(Jt, {
      contentId: se(),
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
var xn = defineComponent({
  __name: "CollapsibleTrigger",
  props: {
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(
      Jt
    );
    return (t, l) => {
      var n, r, s, i, d, p, c, m;
      return openBlock(), createBlock(unref(X), {
        type: "button",
        "as-child": o.asChild,
        "aria-controls": (n = unref(e)) == null ? void 0 : n.contentId,
        "aria-expanded": ((r = unref(e)) == null ? void 0 : r.open.value) || false,
        "data-state": (s = unref(e)) != null && s.open.value ? "open" : "closed",
        "data-disabled": (d = (i = unref(e)) == null ? void 0 : i.disabled) != null && d.value ? "" : void 0,
        disabled: (c = (p = unref(e)) == null ? void 0 : p.disabled) == null ? void 0 : c.value,
        onClick: (m = unref(e)) == null ? void 0 : m.onOpenToggle
      }, {
        default: withCtx(() => [
          renderSlot(t.$slots, "default")
        ]),
        _: 3
      }, 8, ["as-child", "aria-controls", "aria-expanded", "data-state", "data-disabled", "disabled", "onClick"]);
    };
  }
});
function $n(a, o) {
  const e = ref({}), t = ref(a.value), l = ref("none"), n = a.value ? "mounted" : "unmounted", { state: r, dispatch: s } = Uo(n, {
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
      const m = l.value, f = Ot(o);
      a.value ? s("MOUNT") : f === "none" || (d == null ? void 0 : d.display) === "none" ? s("UNMOUNT") : s(p && m !== f ? "ANIMATION_OUT" : "UNMOUNT"), t.value = a.value;
    }
  }), o) {
    const d = (c) => {
      const f = Ot(o).includes(
        c.animationName
      );
      c.target === o && f && s("ANIMATION_END");
    }, p = (c) => {
      c.target === o && (l.value = Ot(o));
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
function Ot(a) {
  return a && getComputedStyle(a).animationName || "none";
}
var Ve = defineComponent({
  __name: "Presence",
  props: {
    present: { type: Boolean }
  },
  setup(a, { expose: o }) {
    const e = a, { present: t } = toRefs(e), l = useSlots();
    let n = ref(false);
    const r = {
      created(i) {
        const { isPresent: d } = $n(t, i);
        on(n, d, { direction: "rtl" });
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
var Sn = defineComponent({
  inheritAttrs: false,
  __name: "CollapsibleContent",
  props: {
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(
      Jt
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
        const m = c.getBoundingClientRect();
        s.value = m.height, r.value = m.width, d.value || (c.style.transitionDuration = p.value.transitionDuration, c.style.animationName = p.value.animationName);
      },
      {
        immediate: true
      }
    ), onMounted(() => {
      requestAnimationFrame(() => {
        d.value = false;
      });
    }), (c, m) => (openBlock(), createBlock(unref(Ve), {
      ref_key: "presentRef",
      ref: t,
      present: unref(e).open.value
    }, {
      default: withCtx(() => {
        var f, v, g, h2, x;
        return [
          createVNode(unref(D), mergeProps({
            ref_key: "primitiveElement",
            ref: l
          }, c.$attrs, {
            "as-child": o.asChild,
            "data-state": (f = unref(e)) != null && f.open.value ? "open" : "closed",
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
function kn(a, o) {
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
function An({ type: a, defaultValue: o }) {
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
function Tn(a, o) {
  const e = H(a, "modelValue", o, {
    defaultValue: An(a),
    passive: true
  });
  watch(
    [a.type, a.modelValue],
    () => {
      const l = kn(a.type, e.value);
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
var st = Symbol();
var Yl = defineComponent({
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
    const e = a, { modelValue: t, changeModelValue: l } = Tn(e, o), { primitiveElement: n, currentElement: r } = P();
    return provide(st, {
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
var $t = Symbol();
var Wl = defineComponent({
  __name: "AccordionItem",
  props: {
    disabled: { type: Boolean },
    value: {},
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(st), t = computed(
      () => e != null && e.isSingle.value ? o.value === e.modelValue.value : Array.isArray(e == null ? void 0 : e.modelValue.value) && !!(e != null && e.modelValue.value.includes(o.value))
    ), l = computed(() => (e == null ? void 0 : e.disabled) || o.disabled || !!(e != null && e.isSingle.value) && t.value && !(e != null && e.collapsible)), n = computed(() => l.value ? "" : void 0), r = computed(
      () => t.value ? "open" : "closed"
      /* Closed */
    ), { primitiveElement: s, currentElement: i } = P();
    provide($t, {
      open: t,
      dataState: r,
      disabled: l,
      dataDisabled: n,
      triggerId: se(),
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
      var m;
      return openBlock(), createBlock(unref(Cn), {
        "data-orientation": (m = unref(e)) == null ? void 0 : m.orientation,
        "data-disabled": n.value,
        "data-state": r.value,
        disabled: l.value,
        open: t.value,
        "onUpdate:open": c[0] || (c[0] = (f) => t.value = f),
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
var Ul = defineComponent({
  __name: "AccordionContent",
  props: {
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(st), t = inject($t);
    return (l, n) => {
      var r, s, i, d, p, c, m;
      return openBlock(), createBlock(unref(Sn), {
        role: "region",
        id: (r = unref(t)) == null ? void 0 : r.triggerId,
        open: (s = unref(t)) == null ? void 0 : s.open.value,
        hidden: !((i = unref(t)) != null && i.open.value),
        "as-child": o.asChild,
        "aria-labelledby": (d = unref(t)) == null ? void 0 : d.triggerId,
        "data-state": (p = unref(t)) == null ? void 0 : p.dataState.value,
        "data-disabled": (c = unref(t)) == null ? void 0 : c.dataDisabled.value,
        "data-orientation": (m = unref(e)) == null ? void 0 : m.orientation,
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
var ql = defineComponent({
  __name: "AccordionHeader",
  props: {
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(st), t = inject($t);
    return (l, n) => {
      var r, s, i;
      return openBlock(), createBlock(unref(yn), {
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
var Gl = defineComponent({
  __name: "AccordionTrigger",
  props: {
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(st), t = inject($t);
    function l() {
      t != null && t.disabled.value || t && (e == null || e.changeModelValue(t.value.value));
    }
    return (n, r) => {
      var s, i, d, p, c, m, f, v, g, h2;
      return openBlock(), createBlock(unref(xn), {
        ref: (s = unref(t)) == null ? void 0 : s.primitiveElement,
        "data-radix-vue-collection-item": "",
        "as-child": o.asChild,
        "aria-controls": (i = unref(t)) == null ? void 0 : i.triggerId,
        "aria-disabled": ((d = unref(t)) == null ? void 0 : d.disabled.value) || void 0,
        "aria-expanded": ((p = unref(t)) == null ? void 0 : p.open.value) || false,
        "data-disabled": (c = unref(t)) == null ? void 0 : c.dataDisabled.value,
        "data-orientation": (m = unref(e)) == null ? void 0 : m.orientation,
        "data-state": (f = unref(t)) == null ? void 0 : f.dataState.value,
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
var Bn = ["id", "checked", "name", "disabled", "required", "data-state"];
var Jo = Symbol();
var Xl = defineComponent({
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
    provide(Jo, {
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
        }), null, 16, Bn),
        renderSlot(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "value", "aria-checked", "data-state", "data-disabled"]));
  }
});
var Fl = defineComponent({
  __name: "CheckboxIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(Jo);
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
var Pn = ["id", "name", "disabled", "required", "data-state", "data-disabled"];
var Zo = Symbol();
var Jl = defineComponent({
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
    provide(Zo, {
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
        }), null, 16, Pn)
      ]),
      _: 3
    }, 8, ["value", "aria-checked", "data-state", "data-disabled", "as-child"]));
  }
});
var Zl = defineComponent({
  __name: "SwitchThumb",
  props: {
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = inject(Zo);
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
var Ue = defineComponent({
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
var Ql = defineComponent({
  __name: "Separator",
  props: {
    orientation: { default: "horizontal" },
    decorative: { type: Boolean },
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a;
    return (e, t) => (openBlock(), createBlock(Ue, mergeProps(o, {
      "data-orientation": o.orientation
    }), null, 16, ["data-orientation"]));
  }
});
var Vl = defineComponent({
  __name: "Label",
  props: {
    for: {},
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a;
    return (e, t) => (openBlock(), createBlock(unref(it), normalizeProps(guardReactiveProps(o)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var On = ["id", "checked", "name", "disabled", "data-state", "data-disabled"];
var jl = defineComponent({
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
        }), null, 16, On),
        renderSlot(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["value", "aria-checked", "data-state", "data-disabled", "as-child"]));
  }
});
var Qo = Symbol();
var er = defineComponent({
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
    const e = a, { primitiveElement: t, currentElement: l } = P(), n = ref(), r = ref(), s = Xt(), i = ref([]), d = H(e, "modelValue", o, {
      defaultValue: e.defaultValue,
      passive: true
    });
    provide(Qo, {
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
        let m = e.modelValue;
        if (m.includes(c)) {
          let f = m.findIndex((v) => v === c);
          m.splice(f, 1);
        } else
          m.push(c);
        d.value = m;
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
              (m) => !m.hasAttribute("disabled") && !m.hasAttribute("data-disabled")
            );
            c[0].focus(), r.value = c[0];
          }
        }
      },
      { immediate: true }
    ), (c, m) => (openBlock(), createBlock(unref(D), {
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
var tr = defineComponent({
  __name: "ToggleGroupItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(
      Qo
    ), { primitiveElement: t, currentElement: l } = P();
    onMounted(() => {
      var c;
      (c = e == null ? void 0 : e.itemsArray.value) == null || c.push(l.value);
    });
    const n = computed(() => {
      var c, m, f;
      return (e == null ? void 0 : e.type) === "multiple" ? (m = (c = e == null ? void 0 : e.modelValue) == null ? void 0 : c.value) != null && m.includes(o.value) ? "on" : "off" : ((f = e == null ? void 0 : e.modelValue) == null ? void 0 : f.value) === o.value ? "on" : "off";
    }), r = computed(() => {
      var c, m, f;
      return (e == null ? void 0 : e.type) === "multiple" ? (m = (c = e == null ? void 0 : e.modelValue) == null ? void 0 : c.value) == null ? void 0 : m.includes(o.value) : ((f = e == null ? void 0 : e.modelValue) == null ? void 0 : f.value) === o.value;
    });
    function s(c) {
      if (!(e != null && e.rovingFocus) || e != null && e.rootDisabled)
        return;
      (c.key === "ArrowLeft" || c.key === "ArrowRight" || c.key === "ArrowUp" || c.key === "ArrowDown") && c.preventDefault();
      const m = ee(
        c,
        l.value,
        e == null ? void 0 : e.parentElement.value,
        { loop: e == null ? void 0 : e.loop }
      );
      m && (m.focus(), e.currentFocusedElement.value = m);
    }
    const i = computed(() => {
      var c, m, f;
      return (c = e == null ? void 0 : e.currentFocusedElement) != null && c.value ? ((f = e == null ? void 0 : e.currentFocusedElement) == null ? void 0 : f.value) === l.value ? "0" : "-1" : ((m = e == null ? void 0 : e.modelValue) == null ? void 0 : m.value) === o.value ? "0" : "-1";
    }), d = computed(() => (e == null ? void 0 : e.type) === "multiple" ? "checkbox" : "radio");
    function p() {
      e != null && e.rootDisabled || (e == null || e.changeModelValue(o.value), e.currentFocusedElement.value = l.value);
    }
    return (c, m) => {
      var f, v;
      return openBlock(), createBlock(unref(X), {
        "as-child": o.asChild,
        ref_key: "primitiveElement",
        ref: t,
        type: "button",
        role: d.value,
        "data-state": n.value,
        disabled: o.disabled || ((f = unref(e)) == null ? void 0 : f.rootDisabled),
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
var or = defineComponent({
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
var St = Symbol();
var ar = defineComponent({
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
    return provide(St, {
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
var nr = defineComponent({
  __name: "TabsList",
  props: {
    loop: { type: Boolean, default: true },
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(St), { primitiveElement: t, currentElement: l } = P();
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
var lr = defineComponent({
  __name: "TabsContent",
  props: {
    value: {},
    forceMount: { type: Boolean },
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(St), t = computed(() => {
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
var rr = defineComponent({
  __name: "TabsTrigger",
  props: {
    value: {},
    disabled: { type: Boolean, default: false },
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(St), { primitiveElement: t, currentElement: l } = P();
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
      var p, c, m, f, v;
      return openBlock(), createBlock(unref(X), {
        ref_key: "primitiveElement",
        ref: t,
        type: "button",
        "as-child": o.asChild,
        role: "tab",
        "aria-selected": ((c = (p = unref(e)) == null ? void 0 : p.modelValue) == null ? void 0 : c.value) === o.value ? "true" : "false",
        "data-state": ((f = (m = unref(e)) == null ? void 0 : m.modelValue) == null ? void 0 : f.value) === o.value ? "active" : "inactive",
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
var Mn = ["value", "aria-valuenow", "name"];
var Zt = Symbol();
var ir = defineComponent({
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
    provide(Zt, {
      modelValue: toRef(() => e.modelValue),
      changeModelValue: (f) => {
        o("update:modelValue", f);
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
      o("update:modelValue", m(f, e.step));
    }
    let i;
    function d(f) {
      n.value && n.value.focus(), f.preventDefault(), l.value && (i = l.value.getBoundingClientRect(), f.clientX - 10 - r.value > i.left && f.clientX - 10 - r.value < i.left + i.width && s(
        Math.round(
          (f.clientX - 10 - r.value - i.left) / i.width * 100
        )
      ), document.addEventListener("pointermove", p), document.addEventListener("pointerup", c));
    }
    const p = (f) => {
      n.value && n.value.focus(), f.clientX - 10 - r.value > i.left && f.clientX - 10 - r.value < i.left + i.width && s(
        (f.clientX - 10 - r.value - i.left) / i.width * 100
      ), f.clientX - 10 - r.value <= i.left && s(e.min), f.clientX - 10 - r.value >= i.left + i.width && s(e.max);
    }, c = (f) => {
      document.removeEventListener("pointermove", p), document.removeEventListener("pointerup", c);
    };
    function m(f, v) {
      const g = Math.floor(f / v);
      return f % v <= v / 2 ? g * v : (g + 1) * v;
    }
    return (f, v) => (openBlock(), createBlock(unref(ne), {
      ref_key: "primitiveElement",
      ref: t,
      "as-child": e.asChild,
      onPointerdown: d
    }, {
      default: withCtx(() => [
        renderSlot(f.$slots, "default"),
        createBaseVNode("input", {
          style: { display: "none" },
          value: e.modelValue,
          "aria-valuenow": e.modelValue,
          name: e.name
        }, null, 8, Mn)
      ]),
      _: 3
    }, 8, ["as-child"]));
  }
});
var sr = defineComponent({
  __name: "SliderThumb",
  props: {
    asChild: { type: Boolean, default: false }
  },
  setup(a) {
    const o = a, e = inject(Zt), { primitiveElement: t, currentElement: l } = P();
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
      var d, p, c, m, f, v, g, h2, x;
      return openBlock(), createElementBlock("span", {
        style: normalizeStyle(`transform: translateX(-50%); position: absolute; left: calc(${(p = (d = unref(e)) == null ? void 0 : d.modelValue) == null ? void 0 : p.value}%)`)
      }, [
        createVNode(unref(ne), mergeProps(s.$attrs, {
          ref_key: "primitiveElement",
          ref: t,
          role: "slider",
          tabindex: "0",
          "data-disabled": (c = unref(e)) == null ? void 0 : c.disabled,
          "data-orientation": (m = unref(e)) == null ? void 0 : m.orientation,
          "aria-valuenow": (v = (f = unref(e)) == null ? void 0 : f.modelValue) == null ? void 0 : v.value,
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
var ur = defineComponent({
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
var dr = defineComponent({
  __name: "SliderRange",
  props: {
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(Zt);
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
var Vo = "RadioGroup";
var jo = Symbol();
var cr = defineComponent({
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
    return provide(Vo, {
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
var Dn = ["value", "required", "disabled", "checked"];
var pr = defineComponent({
  __name: "RadioGroupItem",
  props: {
    value: {},
    disabled: { type: Boolean, default: false },
    required: { type: Boolean },
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(Vo), t = computed(() => (e == null ? void 0 : e.disabled.value) || o.disabled), l = computed(() => (e == null ? void 0 : e.required.value) || o.required), n = computed(() => {
      var c;
      return ((c = e == null ? void 0 : e.modelValue) == null ? void 0 : c.value) === o.value;
    });
    provide(jo, readonly({ disabled: t, checked: n }));
    function r(c) {
      t.value || e == null || e.changeModelValue(c);
    }
    const { primitiveElement: s, currentElement: i } = P();
    function d(c) {
      if (t.value)
        return;
      const m = ee(
        c,
        i.value,
        e == null ? void 0 : e.parentElement.value,
        {
          arrowKeyOptions: e == null ? void 0 : e.orientation.value,
          loop: e == null ? void 0 : e.loop.value
        }
      );
      m && (r(m == null ? void 0 : m.getAttribute("value")), e.currentFocusedElement.value = m, m.focus());
    }
    const p = computed(() => {
      var c, m;
      return (c = e == null ? void 0 : e.currentFocusedElement) != null && c.value ? ((m = e == null ? void 0 : e.currentFocusedElement) == null ? void 0 : m.value) === i.value ? "0" : "-1" : n.value ? "0" : "-1";
    });
    return (c, m) => {
      var f;
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
          name: (f = unref(e)) == null ? void 0 : f.name,
          onClick: m[0] || (m[0] = (v) => r(o.value)),
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
        }, null, 8, Dn)
      ], 64);
    };
  }
});
var fr = defineComponent({
  __name: "RadioGroupIndicator",
  props: {
    asChild: { type: Boolean, default: false }
  },
  setup(a) {
    const o = inject(jo);
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
var ea = Symbol();
var Qt = (a) => typeof a == "number";
function Rn(a, o) {
  return a === null || Qt(a) && !isNaN(a) && a <= o && a >= 0 ? a : (console.error(`Invalid prop \`value\` of value \`${a}\` supplied to \`ProgressRoot\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${je} if no \`max\` prop is set)
  - \`null\` if the progress is indeterminate.

Defaulting to \`null\`.`), null);
}
var je = 100;
function In(a) {
  return Qt(a) && !isNaN(a) && a > 0 ? a : (console.error(
    `Invalid prop \`max\` of value \`${a}\` supplied to \`ProgressRoot\`. Only numbers greater than 0 are valid max values. Defaulting to \`${je}\`.`
  ), je);
}
var mr = defineComponent({
  __name: "ProgressRoot",
  props: {
    modelValue: {},
    max: { default: je },
    getValueLabel: { type: Function, default: (a, o) => `${Math.round(a / o * je)}%` },
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
        const s = Rn(r, e.max);
        s !== r && (await nextTick(), t.value = s);
      },
      { immediate: true }
    ), watch(
      () => e.max,
      (r) => {
        const s = In(e.max);
        s !== r && (l.value = s);
      },
      { immediate: true }
    );
    const n = computed(() => t.value ? t.value === l.value ? "complete" : "loading" : "indeterminate");
    return provide(ea, {
      modelValue: t,
      max: l,
      progressState: n
    }), (r, s) => (openBlock(), createBlock(unref(D), {
      asChild: e.asChild,
      "aria-valuemax": unref(l),
      "aria-valuemin": 0,
      "aria-valuenow": Qt(unref(t)) ? unref(t) : void 0,
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
var vr = defineComponent({
  __name: "ProgressIndicator",
  props: {
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(ea);
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
var ut = Symbol();
var hr = defineComponent({
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
    return provide(ut, {
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
var yr = defineComponent({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(ut), { primitiveElement: t, currentElement: l } = P();
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
var qe = defineComponent({
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
var Nn = createBaseVNode("polygon", { points: "0,0 30,0 15,10" }, null, -1);
var Ln = defineComponent({
  __name: "Arrow",
  props: {
    width: { default: 10 },
    height: { default: 5 }
  },
  setup(a) {
    const o = a, { primitiveElement: e } = P();
    return (t, l) => (openBlock(), createBlock(unref(wn), mergeProps({
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
          Nn
        ])
      ]),
      _: 3
    }, 16, ["width", "height"]));
  }
});
var re = defineComponent({
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
    const e = a, { getItems: t } = le(), { primitiveElement: l, currentElement: n } = P();
    function r(c) {
      var f, v, g, h2;
      if (c.key === "Escape")
        return i(), o("escape-keydown", c);
      if (c.keyCode === 32 || c.key === "Enter") {
        c.target.click();
        return;
      }
      if (c.key === "ArrowLeft") {
        const x = (f = e.subProvider) == null ? void 0 : f.triggerElement.value;
        if (x)
          return (v = e.rootProvider) == null || v.changeSelected(x), (g = e.subProvider) == null ? void 0 : g.hideTooltip();
      }
      if (c.key === "ArrowRight" || c.key === "ArrowLeft")
        return o("horizontal-keydown", c);
      const m = ee(
        c,
        n.value,
        void 0,
        {
          arrowKeyOptions: "vertical",
          itemsArray: t()
        }
      );
      m && ((h2 = e.rootProvider) == null || h2.changeSelected(m));
    }
    function s() {
      var c;
      e.disabled || (c = e.rootProvider) == null || c.changeSelected(n.value);
    }
    function i() {
      document.querySelector("body").style.pointerEvents = "", setTimeout(() => {
        var c, m;
        (m = (c = e.rootProvider) == null ? void 0 : c.triggerElement.value) == null || m.focus();
      }, 0);
    }
    function d() {
      o("handle-click");
    }
    function p() {
      o("mouseover");
    }
    return (c, m) => {
      var f, v, g;
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
        "data-highlighted": ((f = c.rootProvider) == null ? void 0 : f.selectedElement.value) === unref(n) ? "" : null,
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
var _r = defineComponent({
  __name: "DialogPortal",
  props: {
    container: {}
  },
  setup(a) {
    const o = a;
    return (e, t) => (openBlock(), createBlock(unref(qe), normalizeProps(guardReactiveProps(o)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function ta(a) {
  return getCurrentScope() ? (onScopeDispose(a), true) : false;
}
function yt(a) {
  return typeof a == "function" ? a() : unref(a);
}
var oa = typeof window < "u";
var Vt = () => {
};
var Dt = Kn();
function Kn() {
  var a;
  return oa && ((a = window == null ? void 0 : window.navigator) == null ? void 0 : a.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
}
var wo = {
  mounted: "mounted",
  updated: "updated",
  unmounted: "unmounted"
};
function Hn(...a) {
  if (a.length !== 1)
    return toRef(...a);
  const o = a[0];
  return typeof o == "function" ? readonly(customRef(() => ({ get: o, set: Vt }))) : ref(o);
}
function Je(a) {
  var o;
  const e = yt(a);
  return (o = e == null ? void 0 : e.$el) != null ? o : e;
}
var aa = oa ? window : void 0;
function mt(...a) {
  let o, e, t, l;
  if (typeof a[0] == "string" || Array.isArray(a[0]) ? ([e, t, l] = a, o = aa) : [o, e, t, l] = a, !o)
    return Vt;
  Array.isArray(e) || (e = [e]), Array.isArray(t) || (t = [t]);
  const n = [], r = () => {
    n.forEach((p) => p()), n.length = 0;
  }, s = (p, c, m, f) => (p.addEventListener(c, m, f), () => p.removeEventListener(c, m, f)), i = watch(
    () => [Je(o), yt(l)],
    ([p, c]) => {
      r(), p && n.push(
        ...e.flatMap((m) => t.map((f) => s(p, m, f, c)))
      );
    },
    { immediate: true, flush: "post" }
  ), d = () => {
    i(), r();
  };
  return ta(d), d;
}
var Eo = false;
function Co(a, o, e = {}) {
  const { window: t = aa, ignore: l = [], capture: n = true, detectIframe: r = false } = e;
  if (!t)
    return;
  Dt && !Eo && (Eo = true, Array.from(t.document.body.children).forEach((m) => m.addEventListener("click", Vt)));
  let s = true;
  const i = (m) => l.some((f) => {
    if (typeof f == "string")
      return Array.from(t.document.querySelectorAll(f)).some((v) => v === m.target || m.composedPath().includes(v));
    {
      const v = Je(f);
      return v && (m.target === v || m.composedPath().includes(v));
    }
  }), p = [
    mt(t, "click", (m) => {
      const f = Je(a);
      if (!(!f || f === m.target || m.composedPath().includes(f))) {
        if (m.detail === 0 && (s = !i(m)), !s) {
          s = true;
          return;
        }
        o(m);
      }
    }, { passive: true, capture: n }),
    mt(t, "pointerdown", (m) => {
      const f = Je(a);
      f && (s = !m.composedPath().includes(f) && !i(m));
    }, { passive: true }),
    r && mt(t, "blur", (m) => {
      setTimeout(() => {
        var f;
        const v = Je(a);
        ((f = t.document.activeElement) == null ? void 0 : f.tagName) === "IFRAME" && !(v != null && v.contains(t.document.activeElement)) && o(m);
      }, 0);
    })
  ].filter(Boolean);
  return () => p.forEach((m) => m());
}
var na = {
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
function zn(a) {
  const o = a || window.event, e = o.target;
  return la(e) ? false : o.touches.length > 1 ? true : (o.preventDefault && o.preventDefault(), false);
}
function Yn(a, o = false) {
  const e = ref(o);
  let t = null, l;
  watch(Hn(a), (s) => {
    if (s) {
      const i = s;
      l = i.style.overflow, e.value && (i.style.overflow = "hidden");
    }
  }, {
    immediate: true
  });
  const n = () => {
    const s = yt(a);
    !s || e.value || (Dt && (t = mt(
      s,
      "touchmove",
      (i) => {
        zn(i);
      },
      { passive: false }
    )), s.style.overflow = "hidden", e.value = true);
  }, r = () => {
    const s = yt(a);
    !s || !e.value || (Dt && (t == null || t()), s.style.overflow = l, e.value = false);
  };
  return ta(r), computed({
    get() {
      return e.value;
    },
    set(s) {
      s ? n() : r();
    }
  });
}
function Wn() {
  let a = false;
  const o = ref(false);
  return (e, t) => {
    if (o.value = t.value, a)
      return;
    a = true;
    const l = Yn(e, t.value);
    watch(o, (n) => l.value = n);
  };
}
Wn();
var gr = defineComponent({
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
    const e = a, t = inject(ut), { primitiveElement: l, currentElement: n } = P(), r = () => e.isDisableInteractOutside || t.modal && e.isDisableInteractOutside === void 0, s = () => e.isCloseAutoFocus || t.modal && e.isCloseAutoFocus === void 0;
    watchEffect(() => {
      var v;
      n.value && (t != null && t.open.value ? (e.isOpenAutoFocus && Ft(n.value), r() && p(), t != null && t.modal && (window.addEventListener("wheel", i, { passive: false }), window.addEventListener("keydown", d)), window.addEventListener("keydown", f), o("open")) : (c(), window.removeEventListener("wheel", i), window.removeEventListener("keydown", d), window.removeEventListener("keydown", f), s() && ((v = t == null ? void 0 : t.triggerButton.value) == null || v.focus()), o("close")));
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
    function m() {
      e.isPointerDownOutsideDefault && (t == null || t.closeModal()), o("pointerDownOutside");
    }
    function f(v) {
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
        [unref(na), m]
      ]) : createCommentVNode("", true);
    };
  }
});
var br = defineComponent({
  __name: "DialogOverlay",
  props: {
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(ut);
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
var wr = defineComponent({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(ut);
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
var Er = defineComponent({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a;
    return (e, t) => (openBlock(), createBlock(unref(Xo), normalizeProps(guardReactiveProps(o)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Cr = defineComponent({
  __name: "DialogDescription",
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
var Ge = Symbol();
var xr = defineComponent({
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
var $r = defineComponent({
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
var Sr = defineComponent({
  __name: "AlertDialogPortal",
  props: {
    container: {}
  },
  setup(a) {
    const o = a;
    return (e, t) => (openBlock(), createBlock(qe, normalizeProps(guardReactiveProps(o)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var kr = defineComponent({
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
      n.value && (t != null && t.open.value ? (e.isOpenAutoFocus && Ft(n.value), d(), window.addEventListener("wheel", s, { passive: false }), window.addEventListener("keydown", i), window.addEventListener("keydown", m), o("open")) : (p(), window.removeEventListener("wheel", s), window.removeEventListener("keydown", i), window.removeEventListener("keydown", m), r() && ((f = t == null ? void 0 : t.triggerButton.value) == null || f.focus()), o("close")));
    });
    function s(f) {
      f.preventDefault();
    }
    function i(f) {
      if (f.key === "ArrowDown" || f.key === "ArrowUp") {
        const v = document.activeElement;
        v && ["input", "select", "textarea"].indexOf(v.tagName.toLowerCase()) === -1 && f.preventDefault();
      }
    }
    function d() {
      document.querySelector("body").style.pointerEvents = "none";
    }
    function p() {
      document.querySelector("body").style.pointerEvents = "";
    }
    function c() {
      t == null || t.closeModal();
    }
    function m(f) {
      var v;
      f.key === "Escape" && (e.isEscapeKeyDownDefault && (f.preventDefault(), t == null || t.closeModal(), r() && ((v = t == null ? void 0 : t.triggerButton.value) == null || v.focus())), o("escapeKeyDown"));
    }
    return (f, v) => {
      var g, h2;
      return (g = unref(t)) != null && g.open.value ? withDirectives((openBlock(), createBlock(unref(D), {
        key: 0,
        ref_key: "primitiveElement",
        ref: l,
        "data-state": (h2 = unref(t)) != null && h2.open.value ? "open" : "closed",
        role: "dialog",
        tabindex: "-1",
        style: { "pointer-events": "auto" }
      }, {
        default: withCtx(() => [
          renderSlot(f.$slots, "default")
        ]),
        _: 3
      }, 8, ["data-state"])), [
        [unref(na), c]
      ]) : createCommentVNode("", true);
    };
  }
});
var Ar = defineComponent({
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
var Tr = defineComponent({
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
var Br = defineComponent({
  __name: "AlertDialogTitle",
  props: {
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a;
    return (e, t) => (openBlock(), createBlock(unref(Xo), normalizeProps(guardReactiveProps(o)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Pr = defineComponent({
  __name: "AlertDialogDescription",
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
var Or = defineComponent({
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
var kt = Symbol();
var Mr = defineComponent({
  __name: "ToolbarRoot",
  props: {
    orientation: { default: "horizontal" },
    dir: { default: "ltr" },
    loop: { type: Boolean },
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, { primitiveElement: e, currentElement: t } = P(), l = ref();
    return provide(kt, {
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
var Dr = defineComponent({
  __name: "ToolbarButton",
  props: {
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(kt), { primitiveElement: t, currentElement: l } = P();
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
var Rr = defineComponent({
  __name: "ToolbarLink",
  props: {
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(kt), { primitiveElement: t, currentElement: l } = P();
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
      return openBlock(), createBlock(unref(Go), {
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
var Ir = defineComponent({
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
var Nr = defineComponent({
  __name: "ToolbarToggleItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(
      ra
    ), t = inject(kt), l = computed(() => {
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
var Lr = defineComponent({
  __name: "ToolbarSeparator",
  props: {
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a;
    return (e, t) => (openBlock(), createBlock(Ue, {
      "as-child": o.asChild
    }, null, 8, ["as-child"]));
  }
});
var jt = Symbol();
var Kr = defineComponent({
  __name: "AvatarRoot",
  props: {
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = ref("loading");
    return provide(jt, {
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
function Un(a) {
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
var Hr = defineComponent({
  __name: "AvatarImage",
  props: {
    onLoadingStatusChange: {},
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(jt), t = useAttrs().src, l = Un(t);
    return watch(
      l,
      (n) => {
        n !== "idle" && (e.imageLoadingStatus.value = n);
      },
      { immediate: true }
    ), (n, r) => unref(l) === "loaded" ? (openBlock(), createBlock(unref(_n), {
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
var zr = defineComponent({
  __name: "AvatarFallback",
  props: {
    delayMs: { default: 0 },
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(jt);
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
var eo = Symbol();
var fe = defineComponent({
  __name: "PopperRoot",
  setup(a) {
    const o = ref();
    return provide(eo, {
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
    const o = a, { primitiveElement: e, currentElement: t } = P(), l = inject(eo);
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
var qn = (a) => ({
  name: "transformOrigin",
  options: a,
  fn(o) {
    var h2, x, C;
    const { placement: e, rects: t, middlewareData: l } = o, r = ((h2 = l.arrow) == null ? void 0 : h2.centerOffset) !== 0, s = r ? 0 : a.arrowWidth, i = r ? 0 : a.arrowHeight, [d, p] = Rt(e), c = { start: "0%", center: "50%", end: "100%" }[p], m = (((x = l.arrow) == null ? void 0 : x.x) ?? 0) + s / 2, f = (((C = l.arrow) == null ? void 0 : C.y) ?? 0) + i / 2;
    let v = "", g = "";
    return d === "bottom" ? (v = r ? c : `${m}px`, g = `${-i}px`) : d === "top" ? (v = r ? c : `${m}px`, g = `${t.floating.height + i}px`) : d === "right" ? (v = `${-i}px`, g = r ? c : `${f}px`) : d === "left" && (v = `${t.floating.width + i}px`, g = r ? c : `${f}px`), { data: { x: v, y: g } };
  }
});
function Rt(a) {
  const [o, e = "center"] = a.split("-");
  return [o, e];
}
function Xe(a) {
  return a.split("-")[1];
}
function to(a) {
  return a === "y" ? "height" : "width";
}
function ge(a) {
  return a.split("-")[0];
}
function Ne(a) {
  return ["top", "bottom"].includes(ge(a)) ? "x" : "y";
}
function xo(a, o, e) {
  let { reference: t, floating: l } = a;
  const n = t.x + t.width / 2 - l.width / 2, r = t.y + t.height / 2 - l.height / 2, s = Ne(o), i = to(s), d = t[i] / 2 - l[i] / 2, p = s === "x";
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
var Gn = async (a, o, e) => {
  const { placement: t = "bottom", strategy: l = "absolute", middleware: n = [], platform: r } = e, s = n.filter(Boolean), i = await (r.isRTL == null ? void 0 : r.isRTL(o));
  let d = await r.getElementRects({ reference: a, floating: o, strategy: l }), { x: p, y: c } = xo(d, t, i), m = t, f = {}, v = 0;
  for (let g = 0; g < s.length; g++) {
    const { name: h2, fn: x } = s[g], { x: C, y: k, data: T, reset: R } = await x({ x: p, y: c, initialPlacement: t, placement: m, strategy: l, middlewareData: f, rects: d, platform: r, elements: { reference: a, floating: o } });
    p = C ?? p, c = k ?? c, f = { ...f, [h2]: { ...f[h2], ...T } }, R && v <= 50 && (v++, typeof R == "object" && (R.placement && (m = R.placement), R.rects && (d = R.rects === true ? await r.getElementRects({ reference: a, floating: o, strategy: l }) : R.rects), { x: p, y: c } = xo(d, m, i)), g = -1);
  }
  return { x: p, y: c, placement: m, strategy: l, middlewareData: f };
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
async function et(a, o) {
  var e;
  o === void 0 && (o = {});
  const { x: t, y: l, platform: n, rects: r, elements: s, strategy: i } = a, { boundary: d = "clippingAncestors", rootBoundary: p = "viewport", elementContext: c = "floating", altBoundary: m = false, padding: f = 0 } = Ee(o, a), v = ia(f), g = s[m ? c === "floating" ? "reference" : "floating" : c], h2 = _t(await n.getClippingRect({ element: (e = await (n.isElement == null ? void 0 : n.isElement(g))) == null || e ? g : g.contextElement || await (n.getDocumentElement == null ? void 0 : n.getDocumentElement(s.floating)), boundary: d, rootBoundary: p, strategy: i })), x = c === "floating" ? { ...r.floating, x: t, y: l } : r.reference, C = await (n.getOffsetParent == null ? void 0 : n.getOffsetParent(s.floating)), k = await (n.isElement == null ? void 0 : n.isElement(C)) && await (n.getScale == null ? void 0 : n.getScale(C)) || { x: 1, y: 1 }, T = _t(n.convertOffsetParentRelativeRectToViewportRelativeRect ? await n.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: x, offsetParent: C, strategy: i }) : x);
  return { top: (h2.top - T.top + v.top) / k.y, bottom: (T.bottom - h2.bottom + v.bottom) / k.y, left: (h2.left - T.left + v.left) / k.x, right: (T.right - h2.right + v.right) / k.x };
}
var tt = Math.min;
var Pe = Math.max;
function It(a, o, e) {
  return Pe(a, tt(o, e));
}
var Xn = (a) => ({ name: "arrow", options: a, async fn(o) {
  const { x: e, y: t, placement: l, rects: n, platform: r, elements: s } = o, { element: i, padding: d = 0 } = Ee(a, o) || {};
  if (i == null)
    return {};
  const p = ia(d), c = { x: e, y: t }, m = Ne(l), f = to(m), v = await r.getDimensions(i), g = m === "y", h2 = g ? "top" : "left", x = g ? "bottom" : "right", C = g ? "clientHeight" : "clientWidth", k = n.reference[f] + n.reference[m] - c[m] - n.floating[f], T = c[m] - n.reference[m], R = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(i));
  let I = R ? R[C] : 0;
  I && await (r.isElement == null ? void 0 : r.isElement(R)) || (I = s.floating[C] || n.floating[f]);
  const B = k / 2 - T / 2, q = I / 2 - v[f] / 2 - 1, G = tt(p[h2], q), te = tt(p[x], q), Y = G, Q = I - v[f] - te, U = I / 2 - v[f] / 2 + B, oe = It(Y, U, Q), ae = Xe(l) != null && U != oe && n.reference[f] / 2 - (U < Y ? G : te) - v[f] / 2 < 0 ? U < Y ? Y - U : Q - U : 0;
  return { [m]: c[m] - ae, data: { [m]: oe, centerOffset: U - oe + ae } };
} });
var sa = ["top", "right", "bottom", "left"];
sa.reduce((a, o) => a.concat(o, o + "-start", o + "-end"), []);
var Fn = { left: "right", right: "left", bottom: "top", top: "bottom" };
function gt(a) {
  return a.replace(/left|right|bottom|top/g, (o) => Fn[o]);
}
function Jn(a, o, e) {
  e === void 0 && (e = false);
  const t = Xe(a), l = Ne(a), n = to(l);
  let r = l === "x" ? t === (e ? "end" : "start") ? "right" : "left" : t === "start" ? "bottom" : "top";
  return o.reference[n] > o.floating[n] && (r = gt(r)), { main: r, cross: gt(r) };
}
var Zn = { start: "end", end: "start" };
function Mt(a) {
  return a.replace(/start|end/g, (o) => Zn[o]);
}
var Qn = function(a) {
  return a === void 0 && (a = {}), { name: "flip", options: a, async fn(o) {
    var e;
    const { placement: t, middlewareData: l, rects: n, initialPlacement: r, platform: s, elements: i } = o, { mainAxis: d = true, crossAxis: p = true, fallbackPlacements: c, fallbackStrategy: m = "bestFit", fallbackAxisSideDirection: f = "none", flipAlignment: v = true, ...g } = Ee(a, o), h2 = ge(t), x = ge(r) === r, C = await (s.isRTL == null ? void 0 : s.isRTL(i.floating)), k = c || (x || !v ? [gt(r)] : function(Y) {
      const Q = gt(Y);
      return [Mt(Y), Q, Mt(Q)];
    }(r));
    c || f === "none" || k.push(...function(Y, Q, U, oe) {
      const ae = Xe(Y);
      let j = function(Te, Be, Ba) {
        const mo = ["left", "right"], vo = ["right", "left"], Pa = ["top", "bottom"], Oa = ["bottom", "top"];
        switch (Te) {
          case "top":
          case "bottom":
            return Ba ? Be ? vo : mo : Be ? mo : vo;
          case "left":
          case "right":
            return Be ? Pa : Oa;
          default:
            return [];
        }
      }(ge(Y), U === "start", oe);
      return ae && (j = j.map((Te) => Te + "-" + ae), Q && (j = j.concat(j.map(Mt)))), j;
    }(r, v, f, C));
    const T = [r, ...k], R = await et(o, g), I = [];
    let B = ((e = l.flip) == null ? void 0 : e.overflows) || [];
    if (d && I.push(R[h2]), p) {
      const { main: Y, cross: Q } = Jn(t, n, C);
      I.push(R[Y], R[Q]);
    }
    if (B = [...B, { placement: t, overflows: I }], !I.every((Y) => Y <= 0)) {
      var q, G;
      const Y = (((q = l.flip) == null ? void 0 : q.index) || 0) + 1, Q = T[Y];
      if (Q)
        return { data: { index: Y, overflows: B }, reset: { placement: Q } };
      let U = (G = B.filter((oe) => oe.overflows[0] <= 0).sort((oe, ae) => oe.overflows[1] - ae.overflows[1])[0]) == null ? void 0 : G.placement;
      if (!U)
        switch (m) {
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
var Vn = function(a) {
  return a === void 0 && (a = {}), { name: "hide", options: a, async fn(o) {
    const { rects: e } = o, { strategy: t = "referenceHidden", ...l } = Ee(a, o);
    switch (t) {
      case "referenceHidden": {
        const n = $o(await et(o, { ...l, elementContext: "reference" }), e.reference);
        return { data: { referenceHiddenOffsets: n, referenceHidden: So(n) } };
      }
      case "escaped": {
        const n = $o(await et(o, { ...l, altBoundary: true }), e.floating);
        return { data: { escapedOffsets: n, escaped: So(n) } };
      }
      default:
        return {};
    }
  } };
};
var jn = function(a) {
  return a === void 0 && (a = 0), { name: "offset", options: a, async fn(o) {
    const { x: e, y: t } = o, l = await async function(n, r) {
      const { placement: s, platform: i, elements: d } = n, p = await (i.isRTL == null ? void 0 : i.isRTL(d.floating)), c = ge(s), m = Xe(s), f = Ne(s) === "x", v = ["left", "top"].includes(c) ? -1 : 1, g = p && f ? -1 : 1, h2 = Ee(r, n);
      let { mainAxis: x, crossAxis: C, alignmentAxis: k } = typeof h2 == "number" ? { mainAxis: h2, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...h2 };
      return m && typeof k == "number" && (C = m === "end" ? -1 * k : k), f ? { x: C * g, y: x * v } : { x: x * v, y: C * g };
    }(o, a);
    return { x: e + l.x, y: t + l.y, data: l };
  } };
};
function ua(a) {
  return a === "x" ? "y" : "x";
}
var el = function(a) {
  return a === void 0 && (a = {}), { name: "shift", options: a, async fn(o) {
    const { x: e, y: t, placement: l } = o, { mainAxis: n = true, crossAxis: r = false, limiter: s = { fn: (h2) => {
      let { x, y: C } = h2;
      return { x, y: C };
    } }, ...i } = Ee(a, o), d = { x: e, y: t }, p = await et(o, i), c = Ne(ge(l)), m = ua(c);
    let f = d[c], v = d[m];
    if (n) {
      const h2 = c === "y" ? "bottom" : "right";
      f = It(f + p[c === "y" ? "top" : "left"], f, f - p[h2]);
    }
    if (r) {
      const h2 = m === "y" ? "bottom" : "right";
      v = It(v + p[m === "y" ? "top" : "left"], v, v - p[h2]);
    }
    const g = s.fn({ ...o, [c]: f, [m]: v });
    return { ...g, data: { x: g.x - e, y: g.y - t } };
  } };
};
var tl = function(a) {
  return a === void 0 && (a = {}), { options: a, fn(o) {
    const { x: e, y: t, placement: l, rects: n, middlewareData: r } = o, { offset: s = 0, mainAxis: i = true, crossAxis: d = true } = Ee(a, o), p = { x: e, y: t }, c = Ne(l), m = ua(c);
    let f = p[c], v = p[m];
    const g = Ee(s, o), h2 = typeof g == "number" ? { mainAxis: g, crossAxis: 0 } : { mainAxis: 0, crossAxis: 0, ...g };
    if (i) {
      const k = c === "y" ? "height" : "width", T = n.reference[c] - n.floating[k] + h2.mainAxis, R = n.reference[c] + n.reference[k] - h2.mainAxis;
      f < T ? f = T : f > R && (f = R);
    }
    if (d) {
      var x, C;
      const k = c === "y" ? "width" : "height", T = ["top", "left"].includes(ge(l)), R = n.reference[m] - n.floating[k] + (T && ((x = r.offset) == null ? void 0 : x[m]) || 0) + (T ? 0 : h2.crossAxis), I = n.reference[m] + n.reference[k] + (T ? 0 : ((C = r.offset) == null ? void 0 : C[m]) || 0) - (T ? h2.crossAxis : 0);
      v < R ? v = R : v > I && (v = I);
    }
    return { [c]: f, [m]: v };
  } };
};
var ol = function(a) {
  return a === void 0 && (a = {}), { name: "size", options: a, async fn(o) {
    const { placement: e, rects: t, platform: l, elements: n } = o, { apply: r = () => {
    }, ...s } = Ee(a, o), i = await et(o, s), d = ge(e), p = Xe(e), c = Ne(e) === "x", { width: m, height: f } = t.floating;
    let v, g;
    d === "top" || d === "bottom" ? (v = d, g = p === (await (l.isRTL == null ? void 0 : l.isRTL(n.floating)) ? "start" : "end") ? "left" : "right") : (g = d, v = p === "end" ? "top" : "bottom");
    const h2 = f - i[v], x = m - i[g], C = !o.middlewareData.shift;
    let k = h2, T = x;
    if (c) {
      const I = m - i.left - i.right;
      T = p || C ? tt(x, I) : I;
    } else {
      const I = f - i.top - i.bottom;
      k = p || C ? tt(h2, I) : I;
    }
    if (C && !p) {
      const I = Pe(i.left, 0), B = Pe(i.right, 0), q = Pe(i.top, 0), G = Pe(i.bottom, 0);
      c ? T = m - 2 * (I !== 0 || B !== 0 ? I + B : Pe(i.left, i.right)) : k = f - 2 * (q !== 0 || G !== 0 ? q + G : Pe(i.top, i.bottom));
    }
    await r({ ...o, availableWidth: T, availableHeight: k });
    const R = await l.getDimensions(n.floating);
    return m !== R.width || f !== R.height ? { reset: { rects: true } } : {};
  } };
};
function ie(a) {
  var o;
  return ((o = a.ownerDocument) == null ? void 0 : o.defaultView) || window;
}
function ce(a) {
  return ie(a).getComputedStyle(a);
}
function da(a) {
  return a instanceof ie(a).Node;
}
function xe(a) {
  return da(a) ? (a.nodeName || "").toLowerCase() : "#document";
}
function pe(a) {
  return a instanceof ie(a).HTMLElement;
}
function be(a) {
  return a instanceof ie(a).Element;
}
function ko(a) {
  return typeof ShadowRoot < "u" && (a instanceof ie(a).ShadowRoot || a instanceof ShadowRoot);
}
function ot(a) {
  const { overflow: o, overflowX: e, overflowY: t, display: l } = ce(a);
  return /auto|scroll|overlay|hidden|clip/.test(o + t + e) && !["inline", "contents"].includes(l);
}
function al(a) {
  return ["table", "td", "th"].includes(xe(a));
}
function Nt(a) {
  const o = oo(), e = ce(a);
  return e.transform !== "none" || e.perspective !== "none" || !o && !!e.backdropFilter && e.backdropFilter !== "none" || !o && !!e.filter && e.filter !== "none" || ["transform", "perspective", "filter"].some((t) => (e.willChange || "").includes(t)) || ["paint", "layout", "strict", "content"].some((t) => (e.contain || "").includes(t));
}
function oo() {
  return !(typeof CSS > "u" || !CSS.supports) && CSS.supports("-webkit-backdrop-filter", "none");
}
function At(a) {
  return ["html", "body", "#document"].includes(xe(a));
}
var Lt = Math.min;
var He = Math.max;
var bt = Math.round;
var pt = Math.floor;
var Me = (a) => ({ x: a, y: a });
function ca(a) {
  const o = ce(a);
  let e = parseFloat(o.width) || 0, t = parseFloat(o.height) || 0;
  const l = pe(a), n = l ? a.offsetWidth : e, r = l ? a.offsetHeight : t, s = bt(e) !== n || bt(t) !== r;
  return s && (e = n, t = r), { width: e, height: t, $: s };
}
function ao(a) {
  return be(a) ? a : a.contextElement;
}
function ze(a) {
  const o = ao(a);
  if (!pe(o))
    return Me(1);
  const e = o.getBoundingClientRect(), { width: t, height: l, $: n } = ca(o);
  let r = (n ? bt(e.width) : e.width) / t, s = (n ? bt(e.height) : e.height) / l;
  return r && Number.isFinite(r) || (r = 1), s && Number.isFinite(s) || (s = 1), { x: r, y: s };
}
var Ao = Me(0);
function pa(a, o, e) {
  var t, l;
  if (o === void 0 && (o = true), !oo())
    return Ao;
  const n = a ? ie(a) : window;
  return !e || o && e !== n ? Ao : { x: ((t = n.visualViewport) == null ? void 0 : t.offsetLeft) || 0, y: ((l = n.visualViewport) == null ? void 0 : l.offsetTop) || 0 };
}
function De(a, o, e, t) {
  o === void 0 && (o = false), e === void 0 && (e = false);
  const l = a.getBoundingClientRect(), n = ao(a);
  let r = Me(1);
  o && (t ? be(t) && (r = ze(t)) : r = ze(a));
  const s = pa(n, e, t);
  let i = (l.left + s.x) / r.x, d = (l.top + s.y) / r.y, p = l.width / r.x, c = l.height / r.y;
  if (n) {
    const m = ie(n), f = t && be(t) ? ie(t) : t;
    let v = m.frameElement;
    for (; v && t && f !== m; ) {
      const g = ze(v), h2 = v.getBoundingClientRect(), x = getComputedStyle(v), C = h2.left + (v.clientLeft + parseFloat(x.paddingLeft)) * g.x, k = h2.top + (v.clientTop + parseFloat(x.paddingTop)) * g.y;
      i *= g.x, d *= g.y, p *= g.x, c *= g.y, i += C, d += k, v = ie(v).frameElement;
    }
  }
  return _t({ width: p, height: c, x: i, y: d });
}
function we(a) {
  return ((da(a) ? a.ownerDocument : a.document) || window.document).documentElement;
}
function Tt(a) {
  return be(a) ? { scrollLeft: a.scrollLeft, scrollTop: a.scrollTop } : { scrollLeft: a.pageXOffset, scrollTop: a.pageYOffset };
}
function fa(a) {
  return De(we(a)).left + Tt(a).scrollLeft;
}
function Ye(a) {
  if (xe(a) === "html")
    return a;
  const o = a.assignedSlot || a.parentNode || ko(a) && a.host || we(a);
  return ko(o) ? o.host : o;
}
function ma(a) {
  const o = Ye(a);
  return At(o) ? a.ownerDocument ? a.ownerDocument.body : a.body : pe(o) && ot(o) ? o : ma(o);
}
function wt(a, o) {
  var e;
  o === void 0 && (o = []);
  const t = ma(a), l = t === ((e = a.ownerDocument) == null ? void 0 : e.body), n = ie(t);
  return l ? o.concat(n, n.visualViewport || [], ot(t) ? t : []) : o.concat(t, wt(t));
}
function To(a, o, e) {
  let t;
  if (o === "viewport")
    t = function(l, n) {
      const r = ie(l), s = we(l), i = r.visualViewport;
      let d = s.clientWidth, p = s.clientHeight, c = 0, m = 0;
      if (i) {
        d = i.width, p = i.height;
        const f = oo();
        (!f || f && n === "fixed") && (c = i.offsetLeft, m = i.offsetTop);
      }
      return { width: d, height: p, x: c, y: m };
    }(a, e);
  else if (o === "document")
    t = function(l) {
      const n = we(l), r = Tt(l), s = l.ownerDocument.body, i = He(n.scrollWidth, n.clientWidth, s.scrollWidth, s.clientWidth), d = He(n.scrollHeight, n.clientHeight, s.scrollHeight, s.clientHeight);
      let p = -r.scrollLeft + fa(l);
      const c = -r.scrollTop;
      return ce(s).direction === "rtl" && (p += He(n.clientWidth, s.clientWidth) - i), { width: i, height: d, x: p, y: c };
    }(we(a));
  else if (be(o))
    t = function(l, n) {
      const r = De(l, true, n === "fixed"), s = r.top + l.clientTop, i = r.left + l.clientLeft, d = pe(l) ? ze(l) : Me(1);
      return { width: l.clientWidth * d.x, height: l.clientHeight * d.y, x: i * d.x, y: s * d.y };
    }(o, e);
  else {
    const l = pa(a);
    t = { ...o, x: o.x - l.x, y: o.y - l.y };
  }
  return _t(t);
}
function va(a, o) {
  const e = Ye(a);
  return !(e === o || !be(e) || At(e)) && (ce(e).position === "fixed" || va(e, o));
}
function Bo(a, o) {
  return pe(a) && ce(a).position !== "fixed" ? o ? o(a) : a.offsetParent : null;
}
function Po(a, o) {
  const e = ie(a);
  if (!pe(a))
    return e;
  let t = Bo(a, o);
  for (; t && al(t) && ce(t).position === "static"; )
    t = Bo(t, o);
  return t && (xe(t) === "html" || xe(t) === "body" && ce(t).position === "static" && !Nt(t)) ? e : t || function(l) {
    let n = Ye(l);
    for (; pe(n) && !At(n); ) {
      if (Nt(n))
        return n;
      n = Ye(n);
    }
    return null;
  }(a) || e;
}
function nl(a, o, e) {
  const t = pe(o), l = we(o), n = e === "fixed", r = De(a, true, n, o);
  let s = { scrollLeft: 0, scrollTop: 0 };
  const i = Me(0);
  if (t || !t && !n)
    if ((xe(o) !== "body" || ot(l)) && (s = Tt(o)), pe(o)) {
      const d = De(o, true, n, o);
      i.x = d.x + o.clientLeft, i.y = d.y + o.clientTop;
    } else
      l && (i.x = fa(l));
  return { x: r.left + s.scrollLeft - i.x, y: r.top + s.scrollTop - i.y, width: r.width, height: r.height };
}
var ll = { getClippingRect: function(a) {
  let { element: o, boundary: e, rootBoundary: t, strategy: l } = a;
  const n = e === "clippingAncestors" ? function(d, p) {
    const c = p.get(d);
    if (c)
      return c;
    let m = wt(d).filter((h2) => be(h2) && xe(h2) !== "body"), f = null;
    const v = ce(d).position === "fixed";
    let g = v ? Ye(d) : d;
    for (; be(g) && !At(g); ) {
      const h2 = ce(g), x = Nt(g);
      x || h2.position !== "fixed" || (f = null), (v ? !x && !f : !x && h2.position === "static" && f && ["absolute", "fixed"].includes(f.position) || ot(g) && !x && va(d, g)) ? m = m.filter((C) => C !== g) : f = h2, g = Ye(g);
    }
    return p.set(d, m), m;
  }(o, this._c) : [].concat(e), r = [...n, t], s = r[0], i = r.reduce((d, p) => {
    const c = To(o, p, l);
    return d.top = He(c.top, d.top), d.right = Lt(c.right, d.right), d.bottom = Lt(c.bottom, d.bottom), d.left = He(c.left, d.left), d;
  }, To(o, s, l));
  return { width: i.right - i.left, height: i.bottom - i.top, x: i.left, y: i.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(a) {
  let { rect: o, offsetParent: e, strategy: t } = a;
  const l = pe(e), n = we(e);
  if (e === n)
    return o;
  let r = { scrollLeft: 0, scrollTop: 0 }, s = Me(1);
  const i = Me(0);
  if ((l || !l && t !== "fixed") && ((xe(e) !== "body" || ot(n)) && (r = Tt(e)), pe(e))) {
    const d = De(e);
    s = ze(e), i.x = d.x + e.clientLeft, i.y = d.y + e.clientTop;
  }
  return { width: o.width * s.x, height: o.height * s.y, x: o.x * s.x - r.scrollLeft * s.x + i.x, y: o.y * s.y - r.scrollTop * s.y + i.y };
}, isElement: be, getDimensions: function(a) {
  return ca(a);
}, getOffsetParent: Po, getDocumentElement: we, getScale: ze, async getElementRects(a) {
  let { reference: o, floating: e, strategy: t } = a;
  const l = this.getOffsetParent || Po, n = this.getDimensions;
  return { reference: nl(o, await l(e), t), floating: { x: 0, y: 0, ...await n(e) } };
}, getClientRects: (a) => Array.from(a.getClientRects()), isRTL: (a) => ce(a).direction === "rtl" };
function rl(a, o, e, t) {
  t === void 0 && (t = {});
  const { ancestorScroll: l = true, ancestorResize: n = true, elementResize: r = true, layoutShift: s = typeof IntersectionObserver == "function", animationFrame: i = false } = t, d = ao(a), p = l || n ? [...d ? wt(d) : [], ...wt(o)] : [];
  p.forEach((g) => {
    l && g.addEventListener("scroll", e, { passive: true }), n && g.addEventListener("resize", e);
  });
  const c = d && s ? function(g, h2) {
    let x, C = null;
    const k = we(g);
    function T() {
      clearTimeout(x), C && C.disconnect(), C = null;
    }
    return function R(I, B) {
      I === void 0 && (I = false), B === void 0 && (B = 1), T();
      const { left: q, top: G, width: te, height: Y } = g.getBoundingClientRect();
      if (I || h2(), !te || !Y)
        return;
      const Q = pt(G), U = pt(k.clientWidth - (q + te)), oe = pt(k.clientHeight - (G + Y)), ae = pt(q);
      let j = true;
      C = new IntersectionObserver((Te) => {
        const Be = Te[0].intersectionRatio;
        if (Be !== B) {
          if (!j)
            return R();
          Be ? R(false, Be) : x = setTimeout(() => {
            R(false, 1e-7);
          }, 100);
        }
        j = false;
      }, { rootMargin: -Q + "px " + -U + "px " + -oe + "px " + -ae + "px", threshold: He(0, Lt(1, B)) || 1 }), C.observe(g);
    }(true), T;
  }(d, e) : null;
  let m, f = null;
  r && (f = new ResizeObserver(e), d && !i && f.observe(d), f.observe(o));
  let v = i ? De(a) : null;
  return i && function g() {
    const h2 = De(a);
    !v || h2.x === v.x && h2.y === v.y && h2.width === v.width && h2.height === v.height || e(), v = h2, m = requestAnimationFrame(g);
  }(), e(), () => {
    p.forEach((g) => {
      l && g.removeEventListener("scroll", e), n && g.removeEventListener("resize", e);
    }), c && c(), f && f.disconnect(), f = null, i && cancelAnimationFrame(m);
  };
}
var il = (a, o, e) => {
  const t = /* @__PURE__ */ new Map(), l = { platform: ll, ...e }, n = { ...l.platform, _c: t };
  return Gn(a, o, { ...l, platform: n });
};
function Kt(a) {
  var o;
  return (o = a == null ? void 0 : a.$el) != null ? o : a;
}
function sl(a) {
  return {
    name: "arrow",
    options: a,
    fn(o) {
      const e = Kt(unref(a.element));
      return e == null ? {} : Xn({
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
function ul(a, o, e) {
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
  }), d = computed(() => Kt(a.value)), p = computed(() => Kt(o.value)), c = ref(0), m = ref(0), f = ref(s.value), v = ref(r.value), g = shallowRef({}), h2 = ref(false), x = computed(() => {
    const B = {
      position: f.value,
      left: "0",
      top: "0"
    };
    if (!p.value)
      return B;
    const q = Oo(p.value, c.value), G = Oo(p.value, m.value);
    return i.value ? {
      ...B,
      transform: "translate(" + q + "px, " + G + "px)",
      ...ha(p.value) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: f.value,
      left: q + "px",
      top: G + "px"
    };
  });
  let C;
  function k() {
    d.value == null || p.value == null || il(d.value, p.value, {
      middleware: n.value,
      placement: r.value,
      strategy: s.value
    }).then((B) => {
      c.value = B.x, m.value = B.y, f.value = B.strategy, v.value = B.placement, g.value = B.middlewareData, h2.value = true;
    });
  }
  function T() {
    typeof C == "function" && (C(), C = void 0);
  }
  function R() {
    if (T(), t === void 0) {
      k();
      return;
    }
    if (d.value != null && p.value != null) {
      C = t(d.value, p.value, k);
      return;
    }
  }
  function I() {
    l.value || (h2.value = false);
  }
  return watch([n, r, s], k, {
    flush: "sync"
  }), watch([d, p], R, {
    flush: "sync"
  }), watch(l, I, {
    flush: "sync"
  }), getCurrentScope() && onScopeDispose(T), {
    x: shallowReadonly(c),
    y: shallowReadonly(m),
    strategy: shallowReadonly(f),
    placement: shallowReadonly(v),
    middlewareData: shallowReadonly(g),
    isPositioned: shallowReadonly(h2),
    floatingStyles: x,
    update: k
  };
}
var ya = Symbol();
var dl = {
  inheritAttrs: false
};
var _e = defineComponent({
  ...dl,
  __name: "PopperContent",
  props: {
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
    prioritizePosition: { type: Boolean, default: false },
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(eo), t = ref(), l = ref(), n = ref(), { width: r, height: s } = pn(n), i = computed(
      () => o.side + (o.align !== "center" ? "-" + o.align : "")
    ), d = computed(() => typeof o.collisionPadding == "number" ? o.collisionPadding : { top: 0, right: 0, bottom: 0, left: 0, ...o.collisionPadding }), p = computed(() => Array.isArray(o.collisionBoundary) ? o.collisionBoundary : [o.collisionBoundary]), c = computed(() => ({
      padding: d.value,
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: p.value.length > 0
    })), m = Fa(() => [
      jn({
        mainAxis: o.sideOffset + s.value,
        alignmentAxis: o.alignOffset
      }),
      o.avoidCollisions && el({
        mainAxis: true,
        crossAxis: !!o.prioritizePosition,
        limiter: o.sticky === "partial" ? tl() : void 0,
        ...c.value
      }),
      !o.prioritizePosition && o.avoidCollisions && Qn({
        ...c.value
      }),
      ol({
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
      n.value && sl({ element: n.value, padding: o.arrowPadding }),
      qn({
        arrowWidth: r.value,
        arrowHeight: s.value
      }),
      o.hideWhenDetached && Vn({ strategy: "referenceHidden", ...c.value })
    ]), { floatingStyles: f, placement: v, isPositioned: g, middlewareData: h2 } = ul(
      e.anchor,
      t,
      {
        strategy: "fixed",
        placement: i,
        whileElementsMounted: (...B) => rl(...B, {
          animationFrame: o.updatePositionStrategy === "always"
        }),
        middleware: m
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
    const k = computed(
      () => {
        var B;
        return ((B = h2.value.arrow) == null ? void 0 : B.centerOffset) !== 0;
      }
    ), T = ref("");
    watchEffect(() => {
      l.value && (T.value = window.getComputedStyle(l.value).zIndex);
    });
    const R = computed(() => {
      var B;
      return ((B = h2.value.arrow) == null ? void 0 : B.x) ?? 0;
    }), I = computed(() => {
      var B;
      return ((B = h2.value.arrow) == null ? void 0 : B.y) ?? 0;
    });
    return provide(ya, {
      placedSide: x,
      onArrowChange: (B) => {
        n.value = B;
      },
      arrowX: R,
      arrowY: I,
      shouldHideArrow: k
    }), (B, q) => {
      var G, te, Y;
      return openBlock(), createElementBlock("div", {
        ref_key: "floatingRef",
        ref: t,
        "data-radix-popper-content-wrapper": "",
        style: normalizeStyle({
          ...unref(f),
          transform: unref(g) ? unref(f).transform : "translate(0, -200%)",
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
var cl = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
};
var pl = {
  inheritAttrs: false
};
var Le = defineComponent({
  ...pl,
  __name: "PopperArrow",
  props: {
    width: {},
    height: {},
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = inject(ya), e = computed(
      () => o != null && o.placedSide ? cl[o == null ? void 0 : o.placedSide.value] : ""
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
        createVNode(Ln, mergeProps(t.$attrs, { style: {
          display: "block"
        } }), null, 16)
      ], 4);
    };
  }
});
var no = Symbol();
var Yr = defineComponent({
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
    });
    return provide(no, {
      open: t,
      showTooltip: () => {
        t.value = true;
      },
      hideTooltip: () => {
        t.value = false;
      }
    }), (l, n) => (openBlock(), createBlock(unref(fe), null, {
      default: withCtx(() => [
        renderSlot(l.$slots, "default")
      ]),
      _: 3
    }));
  }
});
var Wr = defineComponent({
  __name: "TooltipTrigger",
  props: {
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(no), { primitiveElement: t, currentElement: l } = P();
    async function n(s) {
      await Yo(s, l.value) && (e == null || e.showTooltip());
    }
    const r = computed(() => e != null && e.open.value ? "closed" : "instant-open");
    return (s, i) => (openBlock(), createBlock(unref(ye), { asChild: "" }, {
      default: withCtx(() => {
        var d, p;
        return [
          createVNode(unref(X), {
            type: "button",
            ref_key: "primitiveElement",
            ref: t,
            "data-state": r.value,
            "aria-expanded": ((d = unref(e)) == null ? void 0 : d.open.value) || false,
            "as-child": o.asChild,
            onMouseenter: n,
            onMouseleave: (p = unref(e)) == null ? void 0 : p.hideTooltip,
            style: { cursor: "default" }
          }, {
            default: withCtx(() => [
              renderSlot(s.$slots, "default")
            ]),
            _: 3
          }, 8, ["data-state", "aria-expanded", "as-child", "onMouseleave"])
        ];
      }),
      _: 3
    }));
  }
});
var Ur = defineComponent({
  __name: "TooltipPortal",
  props: {
    container: {}
  },
  setup(a) {
    const o = a;
    return (e, t) => (openBlock(), createBlock(qe, normalizeProps(guardReactiveProps(o)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var qr = defineComponent({
  __name: "TooltipContent",
  props: {
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
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(no);
    return (t, l) => {
      var n;
      return (n = unref(e)) != null && n.open.value ? (openBlock(), createBlock(unref(_e), normalizeProps(mergeProps({ key: 0 }, o)), {
        default: withCtx(() => {
          var r;
          return [
            createVNode(unref(D), {
              ref: "primitiveElement",
              "data-state": (r = unref(e)) != null && r.open.value ? "delayed-open" : "closed",
              "data-side": "top",
              "data-align": "center",
              role: "tooltip",
              tabindex: "-1",
              asChild: o.asChild
            }, {
              default: withCtx(() => [
                renderSlot(t.$slots, "default")
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
var Gr = defineComponent({
  __name: "TooltipArrow",
  setup(a) {
    return (o, e) => (openBlock(), createBlock(unref(Le)));
  }
});
var lo = Symbol();
var Xr = defineComponent({
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
    return provide(lo, {
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
var Fr = defineComponent({
  __name: "HoverCardTrigger",
  props: {
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(lo), { primitiveElement: t, currentElement: l } = P();
    async function n(s) {
      await Yo(
        s,
        l.value,
        e == null ? void 0 : e.openDelay
      ) && (e == null || e.showTooltip());
    }
    async function r(s) {
      e.isHover = false, await Wo(s, e == null ? void 0 : e.closeDelay) && !(e != null && e.isHover) && (e == null || e.hideTooltip());
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
var Jr = defineComponent({
  __name: "HoverCardPortal",
  props: {
    container: {}
  },
  setup(a) {
    const o = a;
    return (e, t) => (openBlock(), createBlock(qe, normalizeProps(guardReactiveProps(o)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Zr = defineComponent({
  __name: "HoverCardContent",
  props: {
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
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(lo);
    async function t(l) {
      e.isHover = false, await Wo(l, e == null ? void 0 : e.closeDelay) && !(e != null && e.isHover) && (e == null || e.hideTooltip());
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
var Qr = defineComponent({
  __name: "HoverCardArrow",
  setup(a) {
    return (o, e) => (openBlock(), createBlock(unref(Le)));
  }
});
var Bt = Symbol();
var Vr = defineComponent({
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
    return provide(Bt, {
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
var jr = defineComponent({
  __name: "PopoverTrigger",
  props: {
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(Bt), { primitiveElement: t, currentElement: l } = P();
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
var ei = defineComponent({
  __name: "PopoverPortal",
  props: {
    container: {}
  },
  setup(a) {
    const o = a;
    return (e, t) => (openBlock(), createBlock(qe, normalizeProps(guardReactiveProps(o)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function fl(a, o) {
  if (o) {
    const e = o.getBoundingClientRect();
    return !(a.clientX > e.left && a.clientX < e.right && a.clientY > e.top && a.clientY < e.bottom);
  }
}
var ti = defineComponent({
  __name: "PopoverContent",
  props: {
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
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(Bt), { primitiveElement: t, currentElement: l } = P();
    watchEffect(() => {
      l.value && (e != null && e.open.value ? (Ft(l.value), window.addEventListener("mousedown", n), window.addEventListener("keydown", r)) : e != null && e.triggerElement.value && (e == null || e.triggerElement.value.focus(), s()));
    });
    function n(i) {
      var p;
      if ((p = e == null ? void 0 : e.triggerElement.value) != null && p.contains(i.target))
        return;
      fl(i, l.value) && (e == null || e.hidePopover(), i.preventDefault(), i.stopPropagation());
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
          var c, m;
          return [
            (c = unref(e)) != null && c.open.value ? (openBlock(), createBlock(unref(D), {
              key: 0,
              "data-state": (m = unref(e)) != null && m.open.value ? "open" : "closed",
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
var oi = defineComponent({
  __name: "PopoverArrow",
  setup(a) {
    return (o, e) => (openBlock(), createBlock(unref(Le)));
  }
});
var ai = defineComponent({
  __name: "PopoverClose",
  props: {
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(Bt);
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
var ni = defineComponent({
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
var li = defineComponent({
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
var ro = (a, o) => {
  const e = a.__vccOpts || a;
  for (const [t, l] of o)
    e[t] = l;
  return e;
};
var ml = {};
function vl(a, o) {
  return openBlock(), createBlock(Teleport, { to: "body" }, [
    renderSlot(a.$slots, "default")
  ]);
}
var ri = ro(ml, [["render", vl]]);
var ii = defineComponent({
  __name: "DropdownMenuContent",
  props: {
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
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(Se), { primitiveElement: t, currentElement: l } = P(), { createCollection: n, getItems: r } = le();
    n(l), watchEffect(() => {
      l.value && (e != null && e.modelValue.value ? (document.querySelector("body").style.pointerEvents = "none", e.itemsArray = r(l.value)) : e != null && e.triggerElement.value && s());
    });
    function s() {
      document.querySelector("body").style.pointerEvents = "", setTimeout(() => {
        var i;
        (i = e == null ? void 0 : e.triggerElement.value) == null || i.focus();
      }, 0);
    }
    return $e(l, (i) => {
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
var si = defineComponent({
  __name: "DropdownMenuArrow",
  setup(a) {
    return (o, e) => (openBlock(), createBlock(unref(Le)));
  }
});
var at = Symbol();
var ui = defineComponent({
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
      triggerId: se(),
      contentId: se(),
      parentContext: n
    }), (r, s) => (openBlock(), createBlock(unref(fe), null, {
      default: withCtx(() => [
        renderSlot(r.$slots, "default")
      ]),
      _: 3
    }));
  }
});
var di = defineComponent({
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
      return openBlock(), createBlock(re, {
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
var hl = Symbol();
var ci = defineComponent({
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
    return provide(hl, {
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
var pi = defineComponent({
  __name: "DropdownMenuSeparator",
  props: {
    orientation: {},
    decorative: { type: Boolean },
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a;
    return (e, t) => (openBlock(), createBlock(Ue, normalizeProps(guardReactiveProps(o)), null, 16));
  }
});
var io = Symbol();
var yl = ["id", "checked", "name", "disabled"];
var fi = defineComponent({
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
    return provide(io, {
      modelValue: l
    }), (i, d) => {
      var p;
      return openBlock(), createBlock(re, {
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
          }), null, 16, yl),
          renderSlot(i.$slots, "default")
        ]),
        _: 3
      }, 8, ["disabled", "rootProvider", "orientation", "data-state", "as-child", "aria-checked"]);
    };
  }
});
var mi = defineComponent({
  __name: "DropdownMenuItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(io);
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
var vi = defineComponent({
  __name: "DropdownMenuLabel",
  props: {
    for: {},
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a;
    return (e, t) => (openBlock(), createBlock(unref(it), normalizeProps(guardReactiveProps(o)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var _a = "RadioGroup";
var hi = defineComponent({
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
    return provide(_a, {
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
var yi = defineComponent({
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
      _a
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
      return openBlock(), createBlock(re, {
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
var _i = defineComponent({
  __name: "DropdownMenuSubContent",
  props: {
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
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(
      Se
    ), t = inject(
      at
    ), { primitiveElement: l, currentElement: n } = P(), { createCollection: r } = le();
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
    return $e(n, (i) => {
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
var gi = defineComponent({
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
      at
    ), { primitiveElement: l, currentElement: n } = P();
    onMounted(() => {
      t.triggerElement.value = n.value;
    });
    async function r() {
      var m;
      t == null || t.showTooltip(), await nextTick();
      const c = (m = t == null ? void 0 : t.itemsArray) == null ? void 0 : m[0];
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
    return (c, m) => (openBlock(), createBlock(unref(ye), { asChild: "" }, {
      default: withCtx(() => {
        var f, v, g, h2, x;
        return [
          createVNode(re, {
            ref_key: "primitiveElement",
            ref: l,
            id: (f = unref(t)) == null ? void 0 : f.triggerId,
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
var bi = defineComponent({
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
var wi = defineComponent({
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
var _l = {};
function gl(a, o) {
  return openBlock(), createBlock(Teleport, { to: "body" }, [
    renderSlot(a.$slots, "default")
  ]);
}
var Ei = ro(_l, [["render", gl]]);
var Ci = defineComponent({
  __name: "ContextMenuContent",
  props: {
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
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(ke), { primitiveElement: t, currentElement: l } = P(), { createCollection: n, getItems: r } = le();
    n(l), watchEffect(() => {
      l.value && (e != null && e.modelValue.value ? (e.itemsArray = r(l.value), window.addEventListener("keydown", d), window.addEventListener("scroll", i)) : s());
    }), watchEffect(() => {
      e != null && e.selectedElement.value && s();
    });
    function s() {
      window.removeEventListener("keydown", d), window.removeEventListener("scroll", i);
    }
    $e(l, (p) => {
      p.target.closest('[role="menuitem"]') || e == null || e.hideTooltip();
    });
    function i() {
      e == null || e.hideTooltip(), window.removeEventListener("scroll", i);
    }
    async function d(p) {
      var c, m, f;
      if (p.preventDefault(), p.key === "ArrowDown" || p.key === "Enter" || p.keyCode === 32)
        e == null || e.changeSelected((c = e.itemsArray) == null ? void 0 : c[0]), (m = e == null ? void 0 : e.selectedElement.value) == null || m.focus();
      else if (p.key === "ArrowUp") {
        const v = (f = e == null ? void 0 : e.itemsArray) == null ? void 0 : f[(e == null ? void 0 : e.itemsArray.length) - 1];
        e == null || e.changeSelected(v), v == null || v.focus();
      }
      window.removeEventListener("keydown", d);
    }
    return (p, c) => {
      var m;
      return (m = unref(e)) != null && m.modelValue.value ? (openBlock(), createBlock(unref(_e), mergeProps({ key: 0 }, o, { "prioritize-position": "" }), {
        default: withCtx(() => {
          var f;
          return [
            createVNode(unref(D), {
              ref_key: "primitiveElement",
              ref: t,
              "data-state": (f = unref(e)) != null && f.modelValue.value ? "open" : "closed",
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
var xi = defineComponent({
  __name: "ContextMenuArrow",
  setup(a) {
    return (o, e) => (openBlock(), createBlock(unref(Le)));
  }
});
var nt = Symbol();
var $i = defineComponent({
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
      triggerId: se(),
      contentId: se(),
      parentContext: n
    }), (r, s) => (openBlock(), createBlock(unref(fe), null, {
      default: withCtx(() => [
        renderSlot(r.$slots, "default")
      ]),
      _: 3
    }));
  }
});
var Si = defineComponent({
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
      nt
    );
    function l() {
      e != null && e.selectedElement.value && e.hideTooltip();
    }
    function n() {
      e == null || e.hideTooltip();
    }
    return (r, s) => {
      var i;
      return openBlock(), createBlock(re, {
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
var bl = Symbol();
var ki = defineComponent({
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
    return provide(bl, {
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
var Ai = defineComponent({
  __name: "ContextMenuSeparator",
  props: {
    orientation: {},
    decorative: { type: Boolean },
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a;
    return (e, t) => (openBlock(), createBlock(Ue, normalizeProps(guardReactiveProps(o)), null, 16));
  }
});
var so = Symbol();
var wl = ["id", "checked", "name", "disabled"];
var Ti = defineComponent({
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
    return provide(so, {
      modelValue: l
    }), (i, d) => {
      var p;
      return openBlock(), createBlock(re, {
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
          }), null, 16, wl),
          renderSlot(i.$slots, "default")
        ]),
        _: 3
      }, 8, ["disabled", "rootProvider", "orientation", "as-child", "data-state", "aria-checked"]);
    };
  }
});
var Bi = defineComponent({
  __name: "ContextMenuItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(so);
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
var Pi = defineComponent({
  __name: "ContextMenuLabel",
  props: {
    for: {},
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a;
    return (e, t) => (openBlock(), createBlock(unref(it), normalizeProps(guardReactiveProps(o)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var ga = "RadioGroup";
var Oi = defineComponent({
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
var Mi = defineComponent({
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
    return provide(so, {
      modelValue: s
    }), (i, d) => {
      var p;
      return openBlock(), createBlock(re, {
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
var Di = defineComponent({
  __name: "ContextMenuSubContent",
  props: {
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
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(
      ke
    ), t = inject(
      nt
    ), { primitiveElement: l, currentElement: n } = P(), { createCollection: r } = le();
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
    return $e(n, (i) => {
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
var Ri = defineComponent({
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
      nt
    ), { primitiveElement: l, currentElement: n } = P();
    onMounted(() => {
      t.triggerElement.value = n.value;
    });
    async function r() {
      var m;
      t == null || t.showTooltip(), await nextTick();
      const c = (m = t == null ? void 0 : t.itemsArray) == null ? void 0 : m[0];
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
    return (c, m) => (openBlock(), createBlock(unref(ye), { asChild: "" }, {
      default: withCtx(() => {
        var f, v, g, h2, x;
        return [
          createVNode(re, {
            ref_key: "primitiveElement",
            ref: l,
            id: (f = unref(t)) == null ? void 0 : f.triggerId,
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
var Ii = defineComponent({
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
var Ni = defineComponent({
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
var Li = defineComponent({
  __name: "SelectPortal",
  props: {
    container: {}
  },
  setup(a) {
    const o = a;
    return (e, t) => (openBlock(), createBlock(qe, normalizeProps(guardReactiveProps(o)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Ki = defineComponent({
  __name: "SelectContent",
  props: {
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
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(dt), { primitiveElement: t, currentElement: l } = P(), { createCollection: n, getItems: r } = le();
    n(l), watchEffect(() => {
      l.value && (e != null && e.isOpen.value ? (document.querySelector("body").style.pointerEvents = "none", e.itemsArray = r(l.value)) : e != null && e.triggerElement.value && s());
    });
    function s() {
      document.querySelector("body").style.pointerEvents = "", setTimeout(() => {
        var i;
        (i = e == null ? void 0 : e.triggerElement.value) == null || i.focus();
      }, 0);
    }
    return $e(l, (i) => {
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
var Hi = defineComponent({
  __name: "SelectArrow",
  setup(a) {
    return (o, e) => (openBlock(), createBlock(unref(Le)));
  }
});
var zi = defineComponent({
  __name: "SelectSeparator",
  props: {
    orientation: {},
    decorative: { type: Boolean },
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a;
    return (e, t) => (openBlock(), createBlock(Ue, {
      orientation: o.orientation,
      decorative: o.decorative
    }, null, 8, ["orientation", "decorative"]));
  }
});
var ba = Symbol();
var Yi = defineComponent({
  __name: "SelectItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(dt), t = inject(ba), l = computed(() => {
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
var Wi = defineComponent({
  __name: "SelectLabel",
  props: {
    for: {},
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a;
    return (e, t) => (openBlock(), createBlock(unref(it), normalizeProps(guardReactiveProps(o)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Ui = defineComponent({
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
var qi = defineComponent({
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
    return provide(ba, {
      value: o.value
    }), (l, n) => {
      var r, s, i;
      return openBlock(), createBlock(re, {
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
var Ce = Symbol();
var El = {
  inheritAttrs: false
};
var Gi = defineComponent({
  ...El,
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
    }), l = ref(), n = ref(), r = [], s = ref(), i = Xt();
    return provide(Ce, {
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
var Xi = defineComponent({
  __name: "MenubarMenu",
  props: {
    value: {}
  },
  setup(a) {
    const e = a.value ?? se(), t = inject(Ce), l = ref(), n = computed(() => (t == null ? void 0 : t.modelValue.value) === e), r = inject(Et);
    return provide(Et, {
      value: e,
      isOpen: n,
      triggerElement: l,
      itemsArray: [],
      triggerId: e,
      contentId: se(),
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
var Cl = {
  inheritAttrs: false
};
var Fi = defineComponent({
  ...Cl,
  __name: "MenubarTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(Ce), t = inject(
      Et
    ), { primitiveElement: l, currentElement: n } = P(), r = Xt();
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
    const m = computed(() => t != null && t.isOpen.value ? "open" : "closed"), f = computed(() => r.value && r.value === n.value || (e == null ? void 0 : e.triggerElement.value) === n.value && (e == null ? void 0 : e.selectedElement.value));
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
        var h2, x, C, k, T;
        return [
          createVNode(unref(X), mergeProps({
            role: "menuitem",
            ref_key: "primitiveElement",
            ref: l,
            id: (h2 = unref(t)) == null ? void 0 : h2.triggerId,
            "aria-expanded": (x = unref(t)) == null ? void 0 : x.isOpen.value,
            "aria-controls": (C = unref(t)) == null ? void 0 : C.contentId,
            "data-state": m.value,
            "data-orientation": (k = unref(e)) == null ? void 0 : k.orientation,
            "aria-haspopup": "menu",
            onKeydown: withModifiers(i, ["prevent"]),
            "data-radix-vue-collection-item": "",
            onMouseenter: d,
            onClick: c,
            "data-highlighted": f.value ? "" : null,
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
var xl = {};
function $l(a, o) {
  return openBlock(), createBlock(Teleport, { to: "body" }, [
    renderSlot(a.$slots, "default")
  ]);
}
var Ji = ro(xl, [["render", $l]]);
var Zi = defineComponent({
  __name: "MenubarContent",
  props: {
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
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(Ce), t = inject(
      Et
    ), { primitiveElement: l, currentElement: n } = P(), { createCollection: r } = le();
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
    $e(n, (d) => {
      d.target.closest('[role="menuitem"]') || (e == null || e.changeValue(void 0), e.selectedElement.value = void 0);
    });
    const i = computed(() => t != null && t.isOpen ? "open" : "false");
    return (d, p) => {
      var c;
      return (c = unref(t)) != null && c.isOpen.value ? (openBlock(), createBlock(unref(_e), normalizeProps(mergeProps({ key: 0 }, o)), {
        default: withCtx(() => {
          var m, f;
          return [
            createVNode(unref(D), {
              ref_key: "primitiveElement",
              ref: l,
              "data-state": i.value,
              "data-side": o.side,
              "data-align": o.align,
              "aria-labelledby": (m = unref(t)) == null ? void 0 : m.triggerId,
              "data-orientation": (f = unref(t)) == null ? void 0 : f.orientation,
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
var Qi = defineComponent({
  __name: "MenubarArrow",
  setup(a) {
    return (o, e) => (openBlock(), createBlock(unref(Le)));
  }
});
var lt = Symbol();
var Vi = defineComponent({
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
    }), l = ref(), n = inject(lt);
    return provide(lt, {
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
      triggerId: se(),
      contentId: se(),
      parentContext: n
    }), (r, s) => (openBlock(), createBlock(unref(fe), null, {
      default: withCtx(() => [
        renderSlot(r.$slots, "default")
      ]),
      _: 3
    }));
  }
});
var ji = defineComponent({
  __name: "MenubarItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(Ce), t = inject(
      lt
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
      return openBlock(), createBlock(re, {
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
var Sl = Symbol();
var es = defineComponent({
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
var ts = defineComponent({
  __name: "MenubarSeparator",
  props: {
    orientation: {},
    decorative: { type: Boolean },
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a;
    return (e, t) => (openBlock(), createBlock(Ue, normalizeProps(guardReactiveProps(o)), null, 16));
  }
});
var uo = Symbol();
var kl = ["id", "checked", "name", "disabled"];
var os = defineComponent({
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
    const e = a, t = inject(Ce), l = H(e, "modelValue", o, {
      passive: true
    }), n = computed(() => l.value ? "checked" : "unchecked");
    function r() {
      l.value = !l.value;
    }
    provide(uo, {
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
      return openBlock(), createBlock(re, {
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
          }), null, 16, kl),
          renderSlot(d.$slots, "default")
        ]),
        _: 3
      }, 8, ["disabled", "rootProvider", "orientation", "data-state", "aria-checked", "as-child"]);
    };
  }
});
var as = defineComponent({
  __name: "MenubarItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(uo);
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
var ns = defineComponent({
  __name: "MenubarLabel",
  props: {
    for: {},
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a;
    return (e, t) => (openBlock(), createBlock(unref(it), normalizeProps(guardReactiveProps(o)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var wa = "RadioGroup";
var ls = defineComponent({
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
    return provide(wa, {
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
var rs = defineComponent({
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
    const o = a, e = inject(Ce), t = inject(
      wa
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
    provide(uo, {
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
      return openBlock(), createBlock(re, {
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
var is = defineComponent({
  __name: "MenubarSubContent",
  props: {
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
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(Ce), t = inject(lt), { primitiveElement: l, currentElement: n } = P(), { createCollection: r } = le();
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
    return $e(n, (i) => {
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
var ss = defineComponent({
  __name: "MenubarSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(Ce), t = inject(lt), { primitiveElement: l, currentElement: n } = P();
    onMounted(() => {
      t.triggerElement.value = n.value;
    });
    async function r() {
      var f;
      t == null || t.showTooltip(), await nextTick();
      const m = (f = t == null ? void 0 : t.itemsArray) == null ? void 0 : f[0];
      e.selectedElement.value = m, m == null || m.focus();
    }
    function s() {
      t != null && t.modelValue.value || r();
    }
    async function i(m) {
      if (m.key === "ArrowRight")
        r();
      else {
        const f = ee(
          m,
          e == null ? void 0 : e.triggerElement.value,
          void 0,
          {
            arrowKeyOptions: "horizontal",
            itemsArray: e == null ? void 0 : e.triggerItemsArray
          }
        );
        f && (e == null || e.changeSelected(f), f.focus(), e != null && e.modelValue.value && (e == null || e.changeValue(f.id)));
      }
    }
    const d = computed(() => t != null && t.modelValue.value ? "open" : "closed");
    function p() {
      return t == null ? void 0 : t.showTooltip();
    }
    function c(m) {
      e.changeValue(void 0), e.changeSelected(
        e.triggerElement.value
      );
    }
    return (m, f) => (openBlock(), createBlock(unref(ye), { asChild: "" }, {
      default: withCtx(() => {
        var v, g, h2, x, C;
        return [
          createVNode(re, {
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
              renderSlot(m.$slots, "default")
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
var us = defineComponent({
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
    }), l = ref(""), { primitiveElement: n, currentElement: r } = P(), { createCollection: s } = le();
    s();
    const i = () => {
      t.value = "";
    };
    $e(r, () => {
      i();
    }), Ho(r, () => {
      i();
    });
    const d = ref(), p = ref(), c = ref(/* @__PURE__ */ new Map()), m = Gt((f) => {
      l.value = t.value, t.value = f;
    }, e.delayDuration);
    return provide(Ae, {
      isRootMenu: true,
      modelValue: t,
      previousValue: l,
      baseId: se(),
      dir: e.dir,
      orientation: e.orientation,
      rootNavigationMenu: r,
      indicatorTrack: d,
      onIndicatorTrackChange: (f) => {
        d.value = f;
      },
      viewport: p,
      onViewportChange: (f) => {
        p.value = f;
      },
      viewportContent: c,
      onViewportContentChange: (f, v) => {
        const g = c.value;
        c.value = new Map(g.set(f, v));
      },
      onViewportContentRemove: (f) => {
        const v = c.value;
        if (!v.has(f))
          return v;
        v.delete(f), c.value = new Map(v);
      },
      onTriggerEnter: (f) => {
        m(f);
      },
      onTriggerLeave: () => {
        m("");
      },
      onContentEnter: (f) => {
        m(f);
      },
      onContentLeave: () => {
        m("");
      },
      onItemSelect: (f) => {
        l.value = t.value, t.value = f;
      }
    }), (f, v) => (openBlock(), createBlock(unref(bn), {
      ref_key: "primitiveElement",
      ref: n,
      "aria-label": "Main",
      "data-orientation": f.orientation,
      dir: f.dir
    }, {
      default: withCtx(() => [
        renderSlot(f.$slots, "default")
      ]),
      _: 3
    }, 8, ["data-orientation", "dir"]));
  }
});
function co(a) {
  return a ? "open" : "closed";
}
function Ea(a, o) {
  return `${a}-trigger-${o}`;
}
function Ca(a, o) {
  return `${a}-content-${o}`;
}
function Ht(a) {
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
function xa(a) {
  const o = document.activeElement;
  return a.some((e) => e === o ? true : (e.focus(), document.activeElement !== o));
}
function Al(a) {
  return a.forEach((o) => {
    o.dataset.tabindex = o.getAttribute("tabindex") || "", o.setAttribute("tabindex", "-1");
  }), () => {
    a.forEach((o) => {
      const e = o.dataset.tabindex;
      o.setAttribute("tabindex", e);
    });
  };
}
var po = Symbol();
var ds = defineComponent({
  __name: "NavigationMenuItem",
  props: {
    value: {},
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, { getItems: e } = le(), t = inject(Ae), l = o.value || se(), n = ref(), r = ref(), s = ref();
    let i = () => ({});
    const d = ref(false), p = async (v = "start") => {
      var h2, x, C;
      const g = (C = (x = (h2 = r.value) == null ? void 0 : h2.children) == null ? void 0 : x[0]) == null ? void 0 : C.el.parentElement;
      if (g) {
        i();
        const k = Ht(Z(g));
        k.length && xa(v === "start" ? k : k.reverse());
      }
    };
    provide(po, {
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
          const C = Ht(Z(v));
          C.length && (i = Al(C));
        }
      }
    });
    const m = () => {
      var v;
      t == null || t.onItemSelect(""), (v = n.value) == null || v.focus();
    }, f = (v) => {
      var x;
      const g = document.activeElement;
      if ((v.key === "ArrowUp" || v.key === "ArrowDown" || v.key === "ArrowLeft" || v.key === "ArrowRight") && v.preventDefault(), v.keyCode === 32 || v.key === "Enter")
        if ((t == null ? void 0 : t.modelValue.value) === l) {
          m(), v.preventDefault();
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
    return (v, g) => (openBlock(), createBlock(unref(gn), {
      "as-child": o.asChild,
      onKeydown: f
    }, {
      default: withCtx(() => [
        renderSlot(v.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child"]));
  }
});
var Tl = ["id", "aria-labelledby", "data-motion", "onKeydown"];
var $a = defineComponent({
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
    const t = a, { getItems: l } = le(), n = ref(), r = inject(Ae), s = Ea(r.baseId, t.value), i = Ca(r.baseId, t.value), d = ref(null), p = computed(() => {
      const v = l().map((T) => T.id.split("trigger-")[1]);
      (r == null ? void 0 : r.dir) === "rtl" && v.reverse();
      const g = v.indexOf(r.modelValue.value), h2 = v.indexOf(r.previousValue.value), x = t.value === (r == null ? void 0 : r.modelValue.value), C = h2 === v.indexOf(t.value);
      if (!x && !C)
        return d.value;
      const k = (() => {
        if (g !== h2) {
          if (x && h2 !== -1)
            return g > h2 ? "from-end" : "from-start";
          if (C && g !== -1)
            return g > h2 ? "to-start" : "to-end";
        }
        return null;
      })();
      return d.value = k, k;
    });
    Ho(n, (f) => {
      var g, h2;
      t.onContentFocusOutside();
      const v = f.target;
      (h2 = (g = r.rootNavigationMenu) == null ? void 0 : g.value) != null && h2.contains(v) && f.preventDefault();
    });
    const c = (f) => {
      var C;
      const v = f.altKey || f.ctrlKey || f.metaKey, g = f.key === "Tab" && !v, h2 = Ht(f.currentTarget);
      if (g) {
        const k = document.activeElement, T = h2.findIndex(
          (B) => B === k
        ), I = f.shiftKey ? h2.slice(0, T).reverse() : h2.slice(T + 1, h2.length);
        if (xa(I))
          f.preventDefault();
        else {
          (C = t.focusProxyRef.value) == null || C.focus();
          return;
        }
      }
      const x = ee(
        f,
        document.activeElement,
        void 0,
        { itemsArray: h2, loop: false }
      );
      x == null || x.focus(), f.preventDefault();
    }, m = (f) => {
      e("escape", f);
    };
    return o({
      ...t
    }), (f, v) => (openBlock(), createElementBlock("div", {
      ref_key: "elementRef",
      ref: n,
      id: unref(i),
      "aria-labelledby": unref(s),
      "data-motion": p.value,
      onKeydown: [
        c,
        withKeys(withModifiers(m, ["prevent"]), ["escape"])
      ]
    }, [
      renderSlot(f.$slots, "default")
    ], 40, Tl));
  }
});
var cs = defineComponent({
  inheritAttrs: false,
  __name: "NavigationMenuContent",
  setup(a) {
    const o = inject(Ae), e = inject(po), t = computed(() => (e == null ? void 0 : e.value) === (o == null ? void 0 : o.modelValue.value)), l = computed(() => ({
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
      return (p = unref(o)) != null && p.viewport ? createCommentVNode("", true) : (openBlock(), createBlock(unref(Ve), {
        key: 0,
        present: t.value
      }, {
        default: withCtx(() => {
          var c;
          return [
            createVNode($a, mergeProps({
              ref_key: "elementRef",
              ref: n,
              "data-state": unref(co)(t.value),
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
var ps = defineComponent({
  inheritAttrs: false,
  __name: "NavigationMenuIndicator",
  props: {
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, { getItems: e } = le(), t = inject(Ae), l = ref(), n = computed(() => (t == null ? void 0 : t.orientation) === "horizontal"), r = computed(() => !!(t != null && t.modelValue.value)), s = ref();
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
    return Oe(s, i), Oe(t.indicatorTrack, i), (d, p) => {
      var c, m;
      return (c = unref(t)) != null && c.indicatorTrack.value ? (openBlock(), createBlock(Teleport, {
        key: 0,
        to: (m = unref(t)) == null ? void 0 : m.indicatorTrack.value
      }, [
        createVNode(unref(Ve), { present: r.value }, {
          default: withCtx(() => {
            var f, v, g, h2;
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
                    width: ((f = l.value) == null ? void 0 : f.size) + "px",
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
var fs = defineComponent({
  __name: "NavigationMenuLink",
  props: {
    active: { type: Boolean },
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = (t) => {
    };
    return (t, l) => (openBlock(), createBlock(unref(Go), {
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
var Bl = defineComponent({
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
    }, null, 8, ["style"]));
  }
});
var Pl = ["aria-owns"];
var ms = defineComponent({
  inheritAttrs: false,
  __name: "NavigationMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(Ae), t = inject(po), { primitiveElement: l, currentElement: n } = P(), r = Ea(e.baseId, t.value), s = Ca(e.baseId, t.value), i = ref(false), d = ref(false), p = computed(() => (t == null ? void 0 : t.value) === (e == null ? void 0 : e.modelValue.value));
    onMounted(() => {
      t.triggerRef = n;
    });
    const c = () => {
      d.value = false, t.wasEscapeCloseRef.value = false;
    }, m = (C) => {
      if (C.pointerType === "mouse") {
        if (o.disabled || d.value || t.wasEscapeCloseRef.value || i.value)
          return;
        e.onTriggerEnter(t.value), i.value = true;
      }
    }, f = (C) => {
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
      t.focusProxyRef.value = Z(C);
    }, x = (C) => {
      var B, q;
      const k = (
        // @ts-ignore
        ((q = (B = t.contentRef.value) == null ? void 0 : B.children) == null ? void 0 : q[0].el).parentElement
      ), T = C.relatedTarget, R = T === n.value, I = k == null ? void 0 : k.contains(T);
      (R || !I) && t.onFocusProxyEnter(R ? "start" : "end");
    };
    return (C, k) => {
      var T;
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(unref(X), mergeProps({
          ref_key: "primitiveElement",
          ref: l,
          id: unref(r),
          disabled: C.disabled,
          "data-disabled": C.disabled ? "" : void 0,
          "data-state": unref(co)(p.value),
          "aria-expanded": p.value,
          "aria-controls": unref(s),
          "as-child": o.asChild,
          onPointerenter: c,
          onPointermove: m,
          onPointerleave: f,
          onClick: v,
          onKeydown: g
        }, C.$attrs, { "data-radix-vue-collection-item": "" }), {
          default: withCtx(() => [
            renderSlot(C.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "disabled", "data-disabled", "data-state", "aria-expanded", "aria-controls", "as-child"]),
        p.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          createVNode(unref(Bl), {
            "aria-hidden": "",
            tabIndex: 0,
            ref: h2,
            onFocus: x
          }),
          (T = unref(e)) != null && T.viewport ? (openBlock(), createElementBlock("span", {
            key: 0,
            "aria-owns": unref(s)
          }, null, 8, Pl)) : createCommentVNode("", true)
        ], 64)) : createCommentVNode("", true)
      ], 64);
    };
  }
});
var vs = defineComponent({
  inheritAttrs: false,
  __name: "NavigationMenuList",
  props: {
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(Ae), { primitiveElement: t, currentElement: l } = P(), { setCollection: n } = le();
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
          createVNode(unref(En), mergeProps(r.$attrs, {
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
var hs = defineComponent({
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
      var m;
      const c = (m = i.value) == null ? void 0 : m.find(
        (f) => (f == null ? void 0 : f.value) === r.value
      );
      return Z(c == null ? void 0 : c.$el);
    }), p = (c) => {
      var m, f, v;
      t.modelValue.value = "", (v = (f = (m = c.props) == null ? void 0 : m.triggerRef) == null ? void 0 : f.value) == null || v.focus(), c.props.wasEscapeCloseRef.value = true;
    };
    return Oe(d, () => {
      d.value && (l.value = {
        width: d.value.offsetWidth,
        height: d.value.offsetHeight
      });
    }), (c, m) => (openBlock(), createBlock(unref(Ve), { present: n.value }, {
      default: withCtx(() => {
        var f, v, g, h2;
        return [
          createVNode(unref(D), mergeProps(c.$attrs, {
            ref_key: "primitiveElement",
            ref: o,
            "data-state": unref(co)(n.value),
            "data-orientation": (f = unref(t)) == null ? void 0 : f.orientation,
            style: {
              // Prevent interaction when animating out
              pointerEvents: !n.value && ((v = unref(t)) != null && v.isRootMenu) ? "none" : void 0,
              ["--radix-navigation-menu-viewport-width"]: l.value ? ((g = l.value) == null ? void 0 : g.width) + "px" : void 0,
              ["--radix-navigation-menu-viewport-height"]: l.value ? ((h2 = l.value) == null ? void 0 : h2.height) + "px" : void 0
            },
            onPointerenter: m[0] || (m[0] = (x) => {
              var C;
              return (C = unref(t)) == null ? void 0 : C.onContentEnter(r.value);
            }),
            onPointerleave: m[1] || (m[1] = (x) => {
              var C;
              return (C = unref(t)) == null ? void 0 : C.onContentLeave();
            })
          }), {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList(s.value, (x) => {
                var C, k;
                return openBlock(), createBlock(unref(Ve), {
                  key: (C = x.props) == null ? void 0 : C.value,
                  present: r.value === ((k = x.props) == null ? void 0 : k.value)
                }, {
                  default: withCtx(() => [
                    createVNode($a, mergeProps({
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
var ys = defineComponent({
  __name: "ScrollAreaRoot",
  props: {
    type: { default: "hover" },
    dir: { default: "ltr" },
    scrollHideDelay: { default: 600 },
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, { primitiveElement: e, currentElement: t } = P(), l = ref(0), n = ref(0), r = ref(), s = ref(), i = ref(), d = ref(), p = ref(false), c = ref(false), m = (C) => {
      r.value = C;
    }, f = (C) => {
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
      onViewportChange: m,
      content: s,
      onContentChange: f,
      scrollbarX: i,
      scrollbarXEnabled: p,
      scrollbarY: d,
      scrollbarYEnabled: c,
      onScrollbarXChange: v,
      onScrollbarYChange: g,
      onScrollbarXEnabledChange: h2,
      onScrollbarYEnabledChange: x
    }), (C, k) => (openBlock(), createBlock(unref(D), {
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
var _s = defineComponent({
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
function Ol(a, [o, e]) {
  return Math.min(e, Math.max(o, a));
}
function Sa(a, o) {
  return (e) => {
    if (a[0] === a[1] || o[0] === o[1])
      return o[0];
    const t = (o[1] - o[0]) / (a[1] - a[0]);
    return o[0] + t * (e - a[0]);
  };
}
function Pt(a) {
  const o = ka(a.viewport, a.content), e = a.scrollbar.paddingStart + a.scrollbar.paddingEnd, t = (a.scrollbar.size - e) * o;
  return Math.max(t, 18);
}
function ka(a, o) {
  const e = a / o;
  return isNaN(e) ? 0 : e;
}
var Ml = (a, o = () => {
}) => {
  let e = { left: a.scrollLeft, top: a.scrollTop }, t = 0;
  return function l() {
    const n = { left: a.scrollLeft, top: a.scrollTop }, r = e.left !== n.left, s = e.top !== n.top;
    (r || s) && o(), e = n, t = window.requestAnimationFrame(l);
  }(), () => window.cancelAnimationFrame(t);
};
function Mo(a, o, e = "ltr") {
  const t = Pt(o), l = o.scrollbar.paddingStart + o.scrollbar.paddingEnd, n = o.scrollbar.size - l, r = o.content - o.viewport, s = n - t, i = e === "ltr" ? [0, r] : [r * -1, 0], d = Ol(
    a,
    i
  );
  return Sa([0, r], [0, s])(d);
}
function ft(a) {
  return a ? parseInt(a, 10) : 0;
}
function Dl(a, o, e, t = "ltr") {
  const l = Pt(e), n = l / 2, r = o || n, s = l - r, i = e.scrollbar.paddingStart + r, d = e.scrollbar.size - e.scrollbar.paddingEnd - s, p = e.content - e.viewport, c = t === "ltr" ? [0, p] : [p * -1, 0];
  return Sa(
    [i, d],
    c
  )(a);
}
function Do(a, o) {
  return a > 0 && a < o;
}
var Aa = defineComponent({
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
        const k = h2.clientX - ((x = d.value) == null ? void 0 : x.left), T = h2.clientY - ((C = d.value) == null ? void 0 : C.top);
        o("onDragScroll", { x: k, y: T });
      }
    }
    const c = (h2) => {
      h2.button === 0 && (h2.target.setPointerCapture(h2.pointerId), d.value = s.value.getBoundingClientRect(), i.value = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", t != null && t.viewport && (t.viewport.value.style.scrollBehavior = "auto"), p(h2));
    }, m = (h2) => {
      p(h2);
    }, f = (h2) => {
      const x = h2.target;
      x.hasPointerCapture(h2.pointerId) && x.releasePointerCapture(h2.pointerId), document.body.style.webkitUserSelect = i.value, t != null && t.viewport && (t.viewport.value.style.scrollBehavior = ""), d.value = void 0;
    }, v = (h2) => {
      var T;
      if (!l)
        return;
      const x = h2.target, C = (T = s.value) == null ? void 0 : T.contains(x), k = l.sizes.value.content - l.sizes.value.viewport;
      C && l.handleWheelScroll(h2, k);
    };
    onMounted(() => {
      document.addEventListener("wheel", v, { passive: false });
    }), onUnmounted(() => {
      document.removeEventListener("wheel", v);
    });
    const g = () => {
      var h2, x, C, k, T, R;
      s.value && (e.isHorizontal ? l == null || l.handleSizeChange({
        content: ((h2 = t == null ? void 0 : t.viewport.value) == null ? void 0 : h2.scrollWidth) ?? 0,
        viewport: ((x = t == null ? void 0 : t.viewport.value) == null ? void 0 : x.offsetWidth) ?? 0,
        scrollbar: {
          size: ((C = s.value) == null ? void 0 : C.clientWidth) ?? 0,
          paddingStart: ft(getComputedStyle(s.value).paddingLeft),
          paddingEnd: ft(getComputedStyle(s.value).paddingRight)
        }
      }) : l == null || l.handleSizeChange({
        content: ((k = t == null ? void 0 : t.viewport.value) == null ? void 0 : k.scrollHeight) ?? 0,
        viewport: ((T = t == null ? void 0 : t.viewport.value) == null ? void 0 : T.offsetHeight) ?? 0,
        scrollbar: {
          size: ((R = s.value) == null ? void 0 : R.clientHeight) ?? 0,
          paddingStart: ft(getComputedStyle(s.value).paddingLeft),
          paddingEnd: ft(getComputedStyle(s.value).paddingRight)
        }
      }));
    };
    return Oe(s, g), Oe(t == null ? void 0 : t.content, g), (h2, x) => {
      var C;
      return openBlock(), createBlock(unref(D), {
        ref_key: "primitiveElement",
        ref: r,
        style: { position: "absolute" },
        "data-scrollbarimpl": "",
        "as-child": (C = unref(n)) == null ? void 0 : C.asChild.value,
        onPointerdown: c,
        onPointermove: m,
        onPointerup: f
      }, {
        default: withCtx(() => [
          renderSlot(h2.$slots, "default")
        ]),
        _: 3
      }, 8, ["as-child"]);
    };
  }
});
var Rl = defineComponent({
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
      return openBlock(), createBlock(Aa, {
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
          ["--radix-scroll-area-thumb-width"]: n.value ? unref(Pt)(n.value) + "px" : void 0
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
var Il = defineComponent({
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
      return openBlock(), createBlock(Aa, {
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
          ["--radix-scroll-area-thumb-height"]: n.value ? unref(Pt)(n.value) + "px" : void 0
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
var fo = defineComponent({
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
      const h2 = ka(t.value.viewport, t.value.content);
      return h2 > 0 && h2 < 1;
    }), n = ref(), r = ref(0), s = (h2, x) => {
      if (m.value) {
        const C = o.viewport.value.scrollLeft + h2.deltaY;
        o.viewport.value.scrollLeft = C, Do(C, x) && h2.preventDefault();
      } else {
        const C = o.viewport.value.scrollTop + h2.deltaY;
        o.viewport.value.scrollTop = C, Do(C, x) && h2.preventDefault();
      }
    }, i = (h2, x) => {
      m.value ? r.value = x.x : r.value = x.y;
    }, d = (h2) => {
      r.value = 0;
    }, p = (h2) => {
      t.value = h2;
    };
    function c(h2, x) {
      return Dl(
        h2,
        r.value,
        t.value,
        x
      );
    }
    const m = computed(
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
          if (m.value) {
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
          m.value ? o.viewport.value.scrollLeft = c(
            h2,
            o.dir
          ) : o.viewport.value.scrollTop = c(h2);
        }
      }
    ), (h2, x) => m.value ? (openBlock(), createBlock(Rl, { key: 0 }, {
      default: withCtx(() => [
        renderSlot(h2.$slots, "default")
      ]),
      _: 3
    })) : (openBlock(), createBlock(Il, { key: 1 }, {
      default: withCtx(() => [
        renderSlot(h2.$slots, "default")
      ]),
      _: 3
    }));
  }
});
var Ta = defineComponent({
  __name: "ScrollAreaScrollbarAuto",
  setup(a) {
    const o = inject(
      me
    ), e = inject(
      Fe
    ), t = ref(false), l = Gt(() => {
      if (o != null && o.viewport.value) {
        const n = (o == null ? void 0 : o.viewport.value.offsetWidth) < (o == null ? void 0 : o.viewport.value.scrollWidth), r = (o == null ? void 0 : o.viewport.value.offsetHeight) < (o == null ? void 0 : o.viewport.value.scrollHeight);
        t.value = e != null && e.isHorizontal.value ? n : r;
      }
    }, 10);
    return Oe(o == null ? void 0 : o.viewport, l), Oe(o == null ? void 0 : o.content, l), (n, r) => t.value ? (openBlock(), createBlock(fo, mergeProps({ key: 0 }, n.$attrs, {
      "data-state": t.value ? "visible" : "hidden"
    }), {
      default: withCtx(() => [
        renderSlot(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-state"])) : createCommentVNode("", true);
  }
});
var Nl = {
  inheritAttrs: false
};
var Ll = defineComponent({
  ...Nl,
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
    }), (r, s) => t.value ? (openBlock(), createBlock(Ta, mergeProps({ key: 0 }, r.$attrs, {
      "data-state": t.value ? "visible" : "hidden"
    }), {
      default: withCtx(() => [
        renderSlot(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-state"])) : createCommentVNode("", true);
  }
});
var Kl = defineComponent({
  __name: "ScrollAreaScrollbarScroll",
  setup(a) {
    const o = inject(
      me
    ), e = inject(
      Fe
    ), { state: t, dispatch: l } = Uo("hidden", {
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
    const n = Gt(() => l("SCROLL_END"), 100);
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
    }), (r, s) => unref(t) !== "hidden" ? (openBlock(), createBlock(fo, normalizeProps(mergeProps({ key: 0 }, r.$attrs)), {
      default: withCtx(() => [
        renderSlot(r.$slots, "default")
      ]),
      _: 3
    }, 16)) : createCommentVNode("", true);
  }
});
var Fe = Symbol();
var Hl = {
  inheritAttrs: false
};
var gs = defineComponent({
  ...Hl,
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
      var d, p, c, m;
      return ((d = unref(e)) == null ? void 0 : d.type) === "hover" ? (openBlock(), createBlock(Ll, mergeProps({ key: 0 }, s.$attrs, { forceMount: unref(n) }), {
        default: withCtx(() => [
          renderSlot(s.$slots, "default")
        ]),
        _: 3
      }, 16, ["forceMount"])) : ((p = unref(e)) == null ? void 0 : p.type) === "scroll" ? (openBlock(), createBlock(Kl, mergeProps({ key: 1 }, s.$attrs, { forceMount: unref(n) }), {
        default: withCtx(() => [
          renderSlot(s.$slots, "default")
        ]),
        _: 3
      }, 16, ["forceMount"])) : ((c = unref(e)) == null ? void 0 : c.type) === "auto" ? (openBlock(), createBlock(Ta, mergeProps({ key: 2 }, s.$attrs, { forceMount: unref(n) }), {
        default: withCtx(() => [
          renderSlot(s.$slots, "default")
        ]),
        _: 3
      }, 16, ["forceMount"])) : ((m = unref(e)) == null ? void 0 : m.type) === "always" ? (openBlock(), createBlock(fo, mergeProps({ key: 3 }, s.$attrs, { forceMount: unref(n) }), {
        default: withCtx(() => [
          renderSlot(s.$slots, "default")
        ]),
        _: 3
      }, 16, ["forceMount"])) : createCommentVNode("", true);
    };
  }
});
var bs = defineComponent({
  __name: "ScrollAreaThumb",
  props: {
    asChild: { type: Boolean }
  },
  setup(a) {
    const o = a, e = inject(
      me
    ), t = inject(
      ct
    ), l = (m) => {
      const v = m.target.getBoundingClientRect(), g = m.clientX - v.left, h2 = m.clientY - v.top;
      t == null || t.handleThumbDown(m, { x: g, y: h2 });
    }, n = (m) => {
      t == null || t.handleThumbUp(m);
    }, { primitiveElement: r, currentElement: s } = P(), i = ref(), d = computed(() => e == null ? void 0 : e.viewport.value), p = () => {
      if (!i.value) {
        const m = Ml(
          d.value,
          t == null ? void 0 : t.onThumbPositionChange
        );
        i.value = m, t == null || t.onThumbPositionChange();
      }
    }, c = computed(() => t == null ? void 0 : t.sizes.value);
    return an(c, () => {
      t == null || t.onThumbChange(s.value), d.value && (t == null || t.onThumbPositionChange(), d.value.addEventListener("scroll", p));
    }), onUnmounted(() => {
      var m;
      d.value.removeEventListener("scroll", p), (m = e == null ? void 0 : e.viewport.value) == null || m.removeEventListener(
        "scroll",
        p
      );
    }), (m, f) => {
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
  Ul as AccordionContent,
  ql as AccordionHeader,
  Wl as AccordionItem,
  Yl as AccordionRoot,
  Gl as AccordionTrigger,
  Or as AlertDialogAction,
  Tr as AlertDialogCancel,
  kr as AlertDialogContent,
  Pr as AlertDialogDescription,
  Ar as AlertDialogOverlay,
  Sr as AlertDialogPortal,
  xr as AlertDialogRoot,
  Br as AlertDialogTitle,
  $r as AlertDialogTrigger,
  or as AspectRatio,
  zr as AvatarFallback,
  Hr as AvatarImage,
  Kr as AvatarRoot,
  Fl as CheckboxIndicator,
  Xl as CheckboxRoot,
  Sn as CollapsibleContent,
  Cn as CollapsibleRoot,
  xn as CollapsibleTrigger,
  xi as ContextMenuArrow,
  Ti as ContextMenuCheckboxItem,
  Ci as ContextMenuContent,
  ki as ContextMenuGroup,
  Si as ContextMenuItem,
  Bi as ContextMenuItemIndicator,
  Pi as ContextMenuLabel,
  Ei as ContextMenuPortal,
  Oi as ContextMenuRadioGroup,
  Mi as ContextMenuRadioItem,
  bi as ContextMenuRoot,
  Ai as ContextMenuSeparator,
  $i as ContextMenuSub,
  Di as ContextMenuSubContent,
  Ri as ContextMenuSubTrigger,
  wi as ContextMenuTrigger,
  wr as DialogClose,
  gr as DialogContent,
  Cr as DialogDescription,
  br as DialogOverlay,
  _r as DialogPortal,
  hr as DialogRoot,
  Er as DialogTitle,
  yr as DialogTrigger,
  si as DropdownMenuArrow,
  fi as DropdownMenuCheckboxItem,
  ii as DropdownMenuContent,
  ci as DropdownMenuGroup,
  di as DropdownMenuItem,
  mi as DropdownMenuItemIndicator,
  vi as DropdownMenuLabel,
  ri as DropdownMenuPortal,
  hi as DropdownMenuRadioGroup,
  yi as DropdownMenuRadioItem,
  ni as DropdownMenuRoot,
  pi as DropdownMenuSeparator,
  ui as DropdownMenuSub,
  _i as DropdownMenuSubContent,
  gi as DropdownMenuSubTrigger,
  li as DropdownMenuTrigger,
  Qr as HoverCardArrow,
  Zr as HoverCardContent,
  Jr as HoverCardPortal,
  Xr as HoverCardRoot,
  Fr as HoverCardTrigger,
  Vl as Label,
  Qi as MenubarArrow,
  os as MenubarCheckboxItem,
  Zi as MenubarContent,
  es as MenubarGroup,
  ji as MenubarItem,
  as as MenubarItemIndicator,
  ns as MenubarLabel,
  Xi as MenubarMenu,
  Ji as MenubarPortal,
  ls as MenubarRadioGroup,
  rs as MenubarRadioItem,
  Gi as MenubarRoot,
  ts as MenubarSeparator,
  Vi as MenubarSub,
  is as MenubarSubContent,
  ss as MenubarSubTrigger,
  Fi as MenubarTrigger,
  cs as NavigationMenuContent,
  ps as NavigationMenuIndicator,
  ds as NavigationMenuItem,
  fs as NavigationMenuLink,
  vs as NavigationMenuList,
  us as NavigationMenuRoot,
  ms as NavigationMenuTrigger,
  hs as NavigationMenuViewport,
  oi as PopoverArrow,
  ai as PopoverClose,
  ti as PopoverContent,
  ei as PopoverPortal,
  Vr as PopoverRoot,
  jr as PopoverTrigger,
  vr as ProgressIndicator,
  mr as ProgressRoot,
  fr as RadioGroupIndicator,
  pr as RadioGroupItem,
  cr as RadioGroupRoot,
  ys as ScrollAreaRoot,
  gs as ScrollAreaScrollbar,
  bs as ScrollAreaThumb,
  _s as ScrollAreaViewport,
  Hi as SelectArrow,
  Ki as SelectContent,
  Ui as SelectGroup,
  qi as SelectItem,
  Yi as SelectItemIndicator,
  Wi as SelectLabel,
  Li as SelectPortal,
  Ii as SelectRoot,
  zi as SelectSeparator,
  Ni as SelectTrigger,
  Ql as Separator,
  dr as SliderRange,
  ir as SliderRoot,
  sr as SliderThumb,
  ur as SliderTrack,
  Jl as SwitchRoot,
  Zl as SwitchThumb,
  lr as TabsContent,
  nr as TabsList,
  ar as TabsRoot,
  rr as TabsTrigger,
  jl as Toggle,
  tr as ToggleGroupItem,
  er as ToggleGroupRoot,
  Dr as ToolbarButton,
  Rr as ToolbarLink,
  Mr as ToolbarRoot,
  Lr as ToolbarSeparator,
  Ir as ToolbarToggleGroup,
  Nr as ToolbarToggleItem,
  Gr as TooltipArrow,
  qr as TooltipContent,
  Ur as TooltipPortal,
  Yr as TooltipRoot,
  Wr as TooltipTrigger
};
//# sourceMappingURL=radix-vue.js.map
