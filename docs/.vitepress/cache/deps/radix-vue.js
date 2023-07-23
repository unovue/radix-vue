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
  useSlots,
  vShow,
  watch,
  watchEffect,
  withCtx,
  withDirectives,
  withKeys,
  withModifiers
} from "./chunk-OX6HOUGK.js";

// node_modules/.pnpm/radix-vue@0.1.9_vue@3.3.4/node_modules/radix-vue/dist/index.js
var Un = Object.defineProperty;
var qn = Object.defineProperties;
var Gn = Object.getOwnPropertyDescriptors;
var _o = Object.getOwnPropertySymbols;
var Fn = Object.prototype.hasOwnProperty;
var Xn = Object.prototype.propertyIsEnumerable;
var yo = (n, o, e) => o in n ? Un(n, o, { enumerable: true, configurable: true, writable: true, value: e }) : n[o] = e;
var Jn = (n, o) => {
  for (var e in o || (o = {}))
    Fn.call(o, e) && yo(n, e, o[e]);
  if (_o)
    for (var e of _o(o))
      Xn.call(o, e) && yo(n, e, o[e]);
  return n;
};
var Zn = (n, o) => qn(n, Gn(o));
function Qn(n, o) {
  var e;
  const t = shallowRef();
  return watchEffect(() => {
    t.value = n();
  }, Zn(Jn({}, o), {
    flush: (e = o == null ? void 0 : o.flush) != null ? e : "sync"
  })), readonly(t);
}
function Vn(n, o) {
  let e, t, l;
  const a = ref(true), r = () => {
    a.value = true, l();
  };
  watch(n, r, { flush: "sync" });
  const s = typeof o == "function" ? o : o.get, i = typeof o == "function" ? void 0 : o.set, d = customRef((p, c) => (t = p, l = c, {
    get() {
      return a.value && (e = s(), a.value = false), t(), e;
    },
    set(m) {
      i == null || i(m);
    }
  }));
  return Object.isExtensible(d) && (d.trigger = r), d;
}
function Ko(n) {
  return getCurrentScope() ? (onScopeDispose(n), true) : false;
}
function jn(n) {
  let o = false, e;
  const t = effectScope(true);
  return (...l) => (o || (e = t.run(() => n(...l)), o = true), e);
}
function vt(n) {
  return typeof n == "function" ? n() : unref(n);
}
var Ho = typeof window < "u";
var ea = (n) => typeof n < "u";
var ht = () => {
};
var ta = oa();
function oa() {
  var n;
  return Ho && ((n = window == null ? void 0 : window.navigator) == null ? void 0 : n.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
}
function na(n, o) {
  function e(...t) {
    return new Promise((l, a) => {
      Promise.resolve(n(() => o.apply(this, t), { fn: o, thisArg: this, args: t })).then(l).catch(a);
    });
  }
  return e;
}
function aa(n, o = {}) {
  let e, t, l = ht;
  const a = (s) => {
    clearTimeout(s), l(), l = ht;
  };
  return (s) => {
    const i = vt(n), d = vt(o.maxWait);
    return e && a(e), i <= 0 || d !== void 0 && d <= 0 ? (t && (a(t), t = null), Promise.resolve(s())) : new Promise((p, c) => {
      l = o.rejectOnCancel ? c : p, d && !t && (t = setTimeout(() => {
        e && a(e), t = null, p(s());
      }, d)), e = setTimeout(() => {
        t && a(t), t = null, p(s());
      }, i);
    });
  };
}
function qt(n, o = 200, e = {}) {
  return na(
    aa(o, e),
    n
  );
}
function la(n, o, e = {}) {
  var t, l;
  const {
    flush: a = "sync",
    deep: r = false,
    immediate: s = true,
    direction: i = "both",
    transform: d = {}
  } = e;
  let p, c;
  const m = (t = d.ltr) != null ? t : (v) => v, f = (l = d.rtl) != null ? l : (v) => v;
  return (i === "both" || i === "ltr") && (p = watch(
    n,
    (v) => o.value = m(v),
    { flush: a, deep: r, immediate: s }
  )), (i === "both" || i === "rtl") && (c = watch(
    o,
    (v) => n.value = f(v),
    { flush: a, deep: r, immediate: s }
  )), () => {
    p == null || p(), c == null || c();
  };
}
function ra(n, o, e) {
  const t = watch(n, (...l) => (nextTick(() => t()), o(...l)), e);
}
function Z(n) {
  var o;
  const e = vt(n);
  return (o = e == null ? void 0 : e.$el) != null ? o : e;
}
var xt = Ho ? window : void 0;
function Ze(...n) {
  let o, e, t, l;
  if (typeof n[0] == "string" || Array.isArray(n[0]) ? ([e, t, l] = n, o = xt) : [o, e, t, l] = n, !o)
    return ht;
  Array.isArray(e) || (e = [e]), Array.isArray(t) || (t = [t]);
  const a = [], r = () => {
    a.forEach((p) => p()), a.length = 0;
  }, s = (p, c, m, f) => (p.addEventListener(c, m, f), () => p.removeEventListener(c, m, f)), i = watch(
    () => [Z(o), vt(l)],
    ([p, c]) => {
      r(), p && a.push(
        ...e.flatMap((m) => t.map((f) => s(p, m, f, c)))
      );
    },
    { immediate: true, flush: "post" }
  ), d = () => {
    i(), r();
  };
  return Ko(d), d;
}
var go = false;
function $e(n, o, e = {}) {
  const { window: t = xt, ignore: l = [], capture: a = true, detectIframe: r = false } = e;
  if (!t)
    return;
  ta && !go && (go = true, Array.from(t.document.body.children).forEach((m) => m.addEventListener("click", ht)));
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
      const f = Z(n);
      if (!(!f || f === m.target || m.composedPath().includes(f))) {
        if (m.detail === 0 && (s = !i(m)), !s) {
          s = true;
          return;
        }
        o(m);
      }
    }, { passive: true, capture: a }),
    Ze(t, "pointerdown", (m) => {
      const f = Z(n);
      f && (s = !m.composedPath().includes(f) && !i(m));
    }, { passive: true }),
    r && Ze(t, "blur", (m) => {
      setTimeout(() => {
        var f;
        const v = Z(n);
        ((f = t.document.activeElement) == null ? void 0 : f.tagName) === "IFRAME" && !(v != null && v.contains(t.document.activeElement)) && o(m);
      }, 0);
    })
  ].filter(Boolean);
  return () => p.forEach((m) => m());
}
function Gt(n = {}) {
  var o;
  const { window: e = xt } = n, t = (o = n.document) != null ? o : e == null ? void 0 : e.document, l = Vn(
    () => null,
    () => t == null ? void 0 : t.activeElement
  );
  return e && (Ze(e, "blur", (a) => {
    a.relatedTarget === null && l.trigger();
  }, true), Ze(e, "focus", l.trigger, true)), l;
}
function ia() {
  const n = ref(false);
  return getCurrentInstance() && onMounted(() => {
    n.value = true;
  }), n;
}
function sa(n) {
  const o = ia();
  return computed(() => (o.value, !!n()));
}
function ua(n) {
  return JSON.parse(JSON.stringify(n));
}
var bo = Object.getOwnPropertySymbols;
var da = Object.prototype.hasOwnProperty;
var ca = Object.prototype.propertyIsEnumerable;
var pa = (n, o) => {
  var e = {};
  for (var t in n)
    da.call(n, t) && o.indexOf(t) < 0 && (e[t] = n[t]);
  if (n != null && bo)
    for (var t of bo(n))
      o.indexOf(t) < 0 && ca.call(n, t) && (e[t] = n[t]);
  return e;
};
function He(n, o, e = {}) {
  const t = e, { window: l = xt } = t, a = pa(t, ["window"]);
  let r;
  const s = sa(() => l && "ResizeObserver" in l), i = () => {
    r && (r.disconnect(), r = void 0);
  }, d = computed(
    () => Array.isArray(n) ? n.map((m) => Z(m)) : [Z(n)]
  ), p = watch(
    d,
    (m) => {
      if (i(), s.value && l) {
        r = new ResizeObserver(o);
        for (const f of m)
          f && r.observe(f, a);
      }
    },
    { immediate: true, flush: "post", deep: true }
  ), c = () => {
    i(), p();
  };
  return Ko(c), {
    isSupported: s,
    stop: c
  };
}
function K(n, o, e, t = {}) {
  var l, a, r;
  const {
    clone: s = false,
    passive: i = false,
    eventName: d,
    deep: p = false,
    defaultValue: c,
    shouldEmit: m
  } = t, f = getCurrentInstance(), v = e || (f == null ? void 0 : f.emit) || ((l = f == null ? void 0 : f.$emit) == null ? void 0 : l.bind(f)) || ((r = (a = f == null ? void 0 : f.proxy) == null ? void 0 : a.$emit) == null ? void 0 : r.bind(f == null ? void 0 : f.proxy));
  let g = d;
  o || (o = "modelValue"), g = g || `update:${o.toString()}`;
  const h2 = (S) => s ? typeof s == "function" ? s(S) : ua(S) : S, x = () => ea(n[o]) ? h2(n[o]) : c, C = (S) => {
    m ? m(S) && v(g, S) : v(g, S);
  };
  if (i) {
    const S = x(), B = ref(S);
    return watch(
      () => n[o],
      (R) => B.value = h2(R)
    ), watch(
      B,
      (R) => {
        (R !== n[o] || p) && C(R);
      },
      { deep: p }
    ), B;
  } else
    return computed({
      get() {
        return x();
      },
      set(S) {
        C(S);
      }
    });
}
var zo = (n, o) => {
  const e = (t) => {
    const l = Z(n);
    (l == null ? void 0 : l.contains(t.relatedTarget)) || o(t);
  };
  onMounted(() => {
    const t = Z(n);
    t == null || t.addEventListener("focusout", e);
  }), onUnmounted(() => {
    const t = Z(n);
    t == null || t.removeEventListener("focusout", e);
  });
};
function ne(n, o, e, t = {}) {
  const {
    arrowKeyOptions: l = "both",
    attributeName: a = "data-radix-vue-collection-item",
    itemsArray: r = [],
    loop: s = true,
    dir: i = "ltr",
    preventScroll: d = true
  } = t, [p, c, m, f] = [
    n.key === "ArrowRight",
    n.key === "ArrowLeft",
    n.key === "ArrowUp",
    n.key === "ArrowDown"
  ], v = m || f, g = p || c;
  if (!v && !g || l === "vertical" && g || l === "horizontal" && v)
    return null;
  const h2 = e ? Array.from(e.querySelectorAll(`[${a}]`)) : r;
  return h2.length ? (d && n.preventDefault(), Yo(h2, o, {
    goForward: v ? f : i === "ltr" ? p : c,
    loop: s
  })) : null;
}
function Yo(n, o, { goForward: e, loop: t }, l = n.length) {
  if (--l === 0)
    return null;
  const a = n.indexOf(o), r = e ? a + 1 : a - 1;
  if (!t && (r < 0 || r >= n.length))
    return null;
  const s = (r + n.length) % n.length, i = n[s];
  return i ? i.hasAttribute("disabled") && i.getAttribute("disabled") !== "false" ? Yo(
    n,
    i,
    { goForward: e, loop: t },
    l
  ) : i : null;
}
async function Wo(n, o, e = 500) {
  let t = true, l, a;
  const r = new Promise((d) => {
    a = d, l = setTimeout(() => {
      i(), d(t);
    }, e);
  });
  function s() {
    t = false, i(), clearTimeout(l), l = void 0, a(false);
  }
  function i() {
    o.removeEventListener("mouseleave", s);
  }
  return o.addEventListener("mouseleave", s), r;
}
var Uo = (n, o = 300) => {
  let e = true, t, l;
  const a = n.target, r = new Promise((d) => {
    l = d, t = setTimeout(() => {
      i(), d(e);
    }, o);
  });
  function s() {
    e = false, i(), clearTimeout(t), t = void 0, l(false);
  }
  function i() {
    a.removeEventListener("mouseenter", s);
  }
  return a.addEventListener("mouseenter", s), r;
};
function qo(n, o) {
  const e = ref(n);
  function t(a) {
    return o[e.value][a] ?? e.value;
  }
  return {
    state: e,
    dispatch: (a) => {
      e.value = t(a);
    }
  };
}
var fa = "data-radix-vue-collection-item";
var wo = Symbol();
var le = () => {
  const n = (l) => {
    provide(wo, {
      collectionRef: l
    });
  }, o = inject(wo);
  return { createCollection: n, setCollection: (l) => {
    o && (o.collectionRef = l);
  }, getItems: (l) => {
    const a = l ?? Z(o == null ? void 0 : o.collectionRef);
    return a ? Array.from(
      a.querySelectorAll(
        `[${fa}]:not([data-disabled])`
      )
    ) : [];
  } };
};
var ma = (n) => {
  const o = ref(), e = computed(() => {
    var l;
    return ((l = o.value) == null ? void 0 : l.width) ?? 0;
  }), t = computed(() => {
    var l;
    return ((l = o.value) == null ? void 0 : l.height) ?? 0;
  });
  return onMounted(() => {
    const l = Z(n);
    if (l) {
      o.value = { width: l.offsetWidth, height: l.offsetHeight };
      const a = new ResizeObserver((r) => {
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
      return a.observe(l, { box: "border-box" }), () => a.unobserve(l);
    } else
      o.value = void 0;
  }), {
    width: e,
    height: t
  };
};
var va = jn(() => ({ count: ref(0) }));
var ce = (n) => {
  const { count: o } = va();
  return n || o.value++, n || `radix-${o.value}`;
};
function Ft(n) {
  if (n) {
    const o = [
      ...Array.from(
        n.querySelectorAll(
          'a[href], button, input, textarea, select, details,[tabindex]:not([tabindex="-1"])'
        )
      )
    ].filter(
      (a) => !a.hasAttribute("disabled") && !a.getAttribute("aria-hidden")
    ), e = o[0], t = o[o.length - 1], l = 9;
    return e && e.focus(), n.addEventListener("keydown", function(a) {
      (a.key === "Tab" || a.keyCode === l) && (a.shiftKey ? document.activeElement === e && (t.focus(), a.preventDefault()) : document.activeElement === t && (e.focus(), a.preventDefault()));
    }), e;
  }
}
function Go(n) {
  return n ? n.flatMap((o) => o.type === Fragment ? Go(o.children) : [o]) : [];
}
function ha(n) {
  return n && (typeof n.type == "string" || typeof n.type == "object" || typeof n.type == "function");
}
var _a = [
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
var ya = (n) => defineComponent({
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
      let a = (r = t.default) == null ? void 0 : r.call(t);
      if (a = Go(a || []), Object.keys(e).length > 0) {
        const [d, ...p] = a;
        if (!ha(d) || p.length > 0) {
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
        return Array.isArray(a) && a.length === 1 ? a[0] : null;
    } : () => h(
      n,
      { ...e },
      { default: () => t.default && t.default() }
    );
  }
});
var V = _a.reduce((n, o) => {
  const e = ya(o);
  return { ...n, [o]: e };
}, {});
var P = () => {
  const n = ref(), o = computed(() => Z(n));
  return {
    primitiveElement: n,
    currentElement: o
  };
};
var Fo = V.a;
var X = V.button;
var D = V.div;
V.form;
var Xo = V.h2;
var ga = V.h3;
var ba = V.img;
V.input;
var it = V.label;
var wa = V.li;
var Ea = V.nav;
V.ol;
var Jo = V.p;
var ae = V.span;
var Ca = V.svg;
var xa = V.ul;
var Xt = Symbol();
var $a = defineComponent({
  __name: "CollapsibleRoot",
  props: {
    defaultOpen: { type: Boolean, default: false },
    open: { type: Boolean, default: void 0 },
    disabled: { type: Boolean },
    asChild: { type: Boolean }
  },
  emits: ["update:open"],
  setup(n, { emit: o }) {
    const e = n, t = K(e, "open", o, {
      defaultValue: e.defaultOpen,
      passive: true
    }), l = K(e, "disabled");
    return provide(Xt, {
      contentId: ce(),
      disabled: l,
      open: t,
      onOpenToggle: () => {
        t.value = !t.value;
      }
    }), (a, r) => (openBlock(), createBlock(unref(D), {
      "as-child": e.asChild,
      "data-state": e.open ? "open" : "closed",
      "data-disabled": e.disabled ? "" : void 0
    }, {
      default: withCtx(() => [
        renderSlot(a.$slots, "default", { open: unref(t) })
      ]),
      _: 3
    }, 8, ["as-child", "data-state", "data-disabled"]));
  }
});
var ka = defineComponent({
  __name: "CollapsibleTrigger",
  props: {
    asChild: { type: Boolean }
  },
  setup(n) {
    const o = n, e = inject(
      Xt
    );
    return (t, l) => {
      var a, r, s, i, d, p, c, m;
      return openBlock(), createBlock(unref(X), {
        type: "button",
        "as-child": o.asChild,
        "aria-controls": (a = unref(e)) == null ? void 0 : a.contentId,
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
function Sa(n, o) {
  const e = ref({}), t = ref(n.value), l = ref("none"), a = n.value ? "mounted" : "unmounted", { state: r, dispatch: s } = qo(a, {
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
    const d = e.value, p = t.value, c = p !== n.value;
    if (await nextTick(), c) {
      const m = l.value, f = Ot(o);
      n.value ? s("MOUNT") : f === "none" || (d == null ? void 0 : d.display) === "none" ? s("UNMOUNT") : s(p && m !== f ? "ANIMATION_OUT" : "UNMOUNT"), t.value = n.value;
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
function Ot(n) {
  return n && getComputedStyle(n).animationName || "none";
}
var Ve = defineComponent({
  __name: "Presence",
  props: {
    present: { type: Boolean }
  },
  setup(n, { expose: o }) {
    const e = n, { present: t } = toRefs(e), l = useSlots();
    let a = ref(false);
    const r = {
      created(i) {
        const { isPresent: d } = Sa(t, i);
        la(a, d, { direction: "rtl" });
      }
    }, s = () => {
      var i, d;
      return (
        // @ts-ignore
        withDirectives((d = (i = l.default) == null ? void 0 : i.call(l)) == null ? void 0 : d[0], [
          [r],
          [vShow, a.value]
        ])
      );
    };
    return o({
      present: a
    }), (i, d) => (openBlock(), createBlock(s));
  }
});
var Aa = defineComponent({
  inheritAttrs: false,
  __name: "CollapsibleContent",
  props: {
    asChild: { type: Boolean }
  },
  setup(n) {
    const o = n, e = inject(
      Xt
    ), t = ref(), { primitiveElement: l, currentElement: a } = P(), r = ref(0), s = ref(0), i = computed(() => e == null ? void 0 : e.open.value), d = ref(i.value), p = ref();
    return watch(
      () => {
        var c;
        return [i.value, (c = t.value) == null ? void 0 : c.present];
      },
      async () => {
        await nextTick();
        const c = a.value;
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
    ), requestAnimationFrame(() => {
      d.value = false;
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
var Jt = Symbol();
var Zt = Symbol();
var st = Symbol();
var Zo = defineComponent({
  __name: "AccordionImpl",
  props: {
    disabled: { type: Boolean },
    orientation: { default: "vertical" },
    dir: {},
    asChild: { type: Boolean }
  },
  setup(n) {
    const o = n, { primitiveElement: e, currentElement: t } = P();
    return provide(st, {
      disabled: o.disabled,
      direction: o.dir,
      orientation: o.orientation,
      parentElement: t
    }), (l, a) => (openBlock(), createBlock(unref(D), {
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
var $t = Symbol();
var Ba = [
  "Home",
  "End",
  "ArrowDown",
  "ArrowUp",
  "ArrowLeft",
  "ArrowRight"
];
var Wl = defineComponent({
  __name: "AccordionItem",
  props: {
    disabled: { type: Boolean },
    value: {},
    asChild: { type: Boolean }
  },
  setup(n) {
    const o = n, e = inject(
      st
    ), t = inject(
      Jt
    ), l = computed({
      get: () => o.value && (t == null ? void 0 : t.modelValue.value.includes(o.value)) || false,
      set: (i) => {
        i ? t == null || t.onItemOpen(o.value) : t == null || t.onItemClose(o.value);
      }
    }), a = computed(
      () => (e == null ? void 0 : e.disabled) || o.disabled
    );
    provide($t, {
      open: l.value,
      disabled: a.value,
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
      if (!Ba.includes(i.key))
        return;
      const d = (e == null ? void 0 : e.direction) === "ltr", p = i.target, c = r().filter(
        // (item) => !item.ref.current?.disabled
        // (item) => !item.disabled
        (B) => B
      ), m = c.findIndex(
        // (item) => item.ref.current === target
        (B) => B === p
      ), f = c.length;
      if (m === -1)
        return;
      i.preventDefault();
      let v = m;
      const g = 0, h2 = f - 1, x = () => {
        v = m + 1, v > h2 && (v = g);
      }, C = () => {
        v = m - 1, v < g && (v = h2);
      };
      switch (i.key) {
        case "Home":
          v = g;
          break;
        case "End":
          v = h2;
          break;
        case "ArrowRight":
          (e == null ? void 0 : e.orientation) === "horizontal" && (d ? x() : C());
          break;
        case "ArrowDown":
          (e == null ? void 0 : e.orientation) === "vertical" && x();
          break;
        case "ArrowLeft":
          (e == null ? void 0 : e.orientation) === "horizontal" && (d ? C() : x());
          break;
        case "ArrowUp":
          (e == null ? void 0 : e.orientation) === "vertical" && C();
          break;
      }
      const S = v % f;
      c[S].focus();
    };
    return (i, d) => {
      var p;
      return openBlock(), createBlock(unref($a), {
        "data-orientation": (p = unref(e)) == null ? void 0 : p.orientation,
        "data-state": l.value ? "open" : "closed",
        disabled: a.value,
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
var Ul = defineComponent({
  __name: "AccordionContent",
  setup(n) {
    const o = inject(
      st
    ), e = inject(
      $t
    );
    return (t, l) => {
      var a, r;
      return openBlock(), createBlock(unref(Aa), {
        role: "region",
        "aria-labelledby": (a = unref(e)) == null ? void 0 : a.triggerId,
        "data-orientation": (r = unref(o)) == null ? void 0 : r.orientation,
        style: normalizeStyle({
          ["--radix-accordion-content-height"]: "var(--radix-collapsible-content-height)",
          ["--radix-accordion-content-width"]: "var(--radix-collapsible-content-width)"
        })
      }, {
        default: withCtx(() => [
          renderSlot(t.$slots, "default")
        ]),
        _: 3
      }, 8, ["aria-labelledby", "data-orientation", "style"]);
    };
  }
});
var ql = defineComponent({
  __name: "AccordionHeader",
  props: {
    asChild: { type: Boolean }
  },
  setup(n) {
    const o = n, e = inject(
      st
    ), t = inject(
      $t
    );
    return (l, a) => {
      var r, s, i;
      return openBlock(), createBlock(unref(ga), {
        "data-orientation": (r = unref(e)) == null ? void 0 : r.orientation,
        "data-state": (s = unref(t)) != null && s.open ? "open" : "closed",
        "data-disabled": (i = unref(t)) != null && i.disabled ? "" : void 0,
        "as-child": o.asChild
      }, {
        default: withCtx(() => [
          renderSlot(l.$slots, "default")
        ]),
        _: 3
      }, 8, ["data-orientation", "data-state", "data-disabled", "as-child"]);
    };
  }
});
var Ta = defineComponent({
  __name: "AccordionImplMultiple",
  props: {
    type: {},
    modelValue: {},
    defaultValue: { default: [] },
    onValueChange: {},
    disabled: { type: Boolean },
    orientation: {},
    dir: {},
    asChild: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(n, { emit: o }) {
    const e = n, t = K(e, "modelValue", o, {
      defaultValue: e.defaultValue,
      passive: true
    });
    return provide(Jt, {
      modelValue: t,
      onItemOpen: (r) => {
        t.value = [...t.value, r];
      },
      onItemClose: (r) => {
        t.value = [...t.value].filter(
          (s) => s !== r
        );
      }
    }), provide(Zt, {
      collapsible: false
    }), (r, s) => (openBlock(), createBlock(Zo, normalizeProps(guardReactiveProps(e)), {
      default: withCtx(() => [
        renderSlot(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Pa = defineComponent({
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
    dir: {},
    asChild: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(n, { emit: o }) {
    const e = n, t = K(e, "modelValue", o, {
      defaultValue: e.defaultValue ?? "",
      passive: true
    });
    return provide(Jt, {
      modelValue: t,
      onItemOpen: (l) => {
        t.value = l;
      },
      onItemClose: (l) => {
        e.collapsible && (t.value = "");
      }
    }), provide(Zt, {
      collapsible: e.collapsible
    }), (l, a) => (openBlock(), createBlock(Zo, normalizeProps(guardReactiveProps(e)), {
      default: withCtx(() => [
        renderSlot(l.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Gl = defineComponent({
  __name: "AccordionRoot",
  props: {
    type: {},
    modelValue: {},
    defaultValue: {},
    onValueChange: { type: Function },
    collapsible: { type: Boolean },
    disabled: { type: Boolean },
    orientation: {},
    dir: {},
    asChild: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(n, { emit: o }) {
    const e = n;
    return (t, l) => e.type === "multiple" ? (openBlock(), createBlock(Ta, mergeProps({ key: 0 }, e, {
      "onUpdate:modelValue": l[0] || (l[0] = (a) => o("update:modelValue", a))
    }), {
      default: withCtx(() => [
        renderSlot(t.$slots, "default")
      ]),
      _: 3
    }, 16)) : (openBlock(), createBlock(Pa, mergeProps({ key: 1 }, e, {
      "onUpdate:modelValue": l[1] || (l[1] = (a) => o("update:modelValue", a))
    }), {
      default: withCtx(() => [
        renderSlot(t.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Fl = defineComponent({
  __name: "AccordionTrigger",
  setup(n) {
    const o = inject(
      st
    ), e = inject(
      $t
    ), t = inject(Zt);
    return (l, a) => {
      var r, s, i, d;
      return openBlock(), createBlock(unref(ka), {
        "data-radix-vue-collection-item": "",
        "aria-disabled": ((r = unref(e)) == null ? void 0 : r.open) && !((s = unref(t)) != null && s.collapsible) || void 0,
        "data-orientation": (i = unref(o)) == null ? void 0 : i.orientation,
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
var Oa = ["id", "checked", "name", "disabled", "required", "data-state"];
var Qo = Symbol();
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
  setup(n, { emit: o }) {
    const e = n;
    provide(Qo, {
      required: e.required,
      disabled: e.disabled,
      modelValue: toRef(() => e.modelValue)
    });
    function t() {
      return o("update:modelValue", !e.modelValue);
    }
    let l;
    return (a, r) => (openBlock(), createBlock(unref(D), {
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
        }), null, 16, Oa),
        renderSlot(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "value", "aria-checked", "data-state", "data-disabled"]));
  }
});
var Jl = defineComponent({
  __name: "CheckboxIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean }
  },
  setup(n) {
    const o = n, e = inject(Qo);
    return (t, l) => {
      var a;
      return (a = unref(e)) != null && a.modelValue.value ? (openBlock(), createBlock(unref(ae), {
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
var Ma = ["id", "name", "disabled", "required", "data-state", "data-disabled"];
var Vo = Symbol();
var Zl = defineComponent({
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
  setup(n, { emit: o }) {
    const e = n, t = K(e, "open", o, {
      defaultValue: e.defaultOpen,
      passive: true
      // set passive to true so that if no props.modelValue was passed, it will still update
    }), l = () => {
      t.value = !t.value;
    };
    provide(Vo, {
      open: t,
      toggleOpen: l,
      disabled: e.disabled
    });
    function a(r) {
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
          onKeydown: a,
          "aria-hidden": "true",
          disabled: e.disabled,
          required: e.required,
          "data-state": unref(t) ? "checked" : "unchecked",
          "data-disabled": e.disabled ? "" : void 0,
          style: { opacity: "0", position: "absolute", inset: "0" }
        }), null, 16, Ma)
      ]),
      _: 3
    }, 8, ["value", "aria-checked", "data-state", "data-disabled", "as-child"]));
  }
});
var Ql = defineComponent({
  __name: "SwitchThumb",
  props: {
    asChild: { type: Boolean }
  },
  setup(n) {
    const o = inject(Vo);
    return (e, t) => {
      var l, a, r;
      return openBlock(), createBlock(unref(ae), {
        "data-state": (a = (l = unref(o)) == null ? void 0 : l.open) != null && a.value ? "checked" : "unchecked",
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
  setup(n) {
    const o = n;
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
var Vl = defineComponent({
  __name: "Separator",
  props: {
    orientation: { default: "horizontal" },
    decorative: { type: Boolean },
    asChild: { type: Boolean }
  },
  setup(n) {
    const o = n;
    return (e, t) => (openBlock(), createBlock(Ue, mergeProps(o, {
      "data-orientation": o.orientation
    }), null, 16, ["data-orientation"]));
  }
});
var jl = defineComponent({
  __name: "Label",
  props: {
    for: {},
    asChild: { type: Boolean }
  },
  setup(n) {
    const o = n;
    return (e, t) => (openBlock(), createBlock(unref(it), normalizeProps(guardReactiveProps(o)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Da = ["id", "checked", "name", "disabled", "data-state", "data-disabled"];
var er = defineComponent({
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
  setup(n, { emit: o }) {
    const e = n, t = K(e, "pressed", o, {
      defaultValue: e.defaultPressed,
      passive: true
      // set passive to true so that if no props.pressed was passed, it will still update
    }), l = () => {
      t.value = !t.value;
    }, a = computed(() => t.value ? "on" : "off");
    function r(s) {
      s.key === "Enter" && l();
    }
    return (s, i) => (openBlock(), createBlock(unref(D), {
      value: unref(t),
      role: "checkbox",
      "aria-checked": unref(t),
      "data-state": a.value,
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
          "data-state": a.value,
          "data-disabled": e.disabled,
          style: { opacity: "0", position: "absolute", inset: "0" }
        }), null, 16, Da),
        renderSlot(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["value", "aria-checked", "data-state", "data-disabled", "as-child"]));
  }
});
var jo = Symbol();
var tr = defineComponent({
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
  setup(n, { emit: o }) {
    const e = n, { primitiveElement: t, currentElement: l } = P(), a = ref(), r = ref(), s = Gt(), i = ref([]), d = K(e, "modelValue", o, {
      defaultValue: e.defaultValue,
      passive: true
    });
    provide(jo, {
      type: e.type,
      modelValue: d,
      changeModelValue: p,
      parentElement: l,
      activeValue: a,
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
var or = defineComponent({
  __name: "ToggleGroupItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean }
  },
  setup(n) {
    const o = n, e = inject(
      jo
    ), { primitiveElement: t, currentElement: l } = P();
    onMounted(() => {
      var c;
      (c = e == null ? void 0 : e.itemsArray.value) == null || c.push(l.value);
    });
    const a = computed(() => {
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
      const m = ne(
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
        "data-state": a.value,
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
var nr = defineComponent({
  __name: "AspectRatio",
  props: {
    ratio: { default: 1 },
    asChild: { type: Boolean }
  },
  setup(n) {
    const o = n, e = computed(() => 1 / o.ratio * 100);
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
  setup(n, { emit: o }) {
    const e = n, t = ref(), l = ref(), a = K(e, "modelValue", o, {
      defaultValue: e.defaultValue,
      passive: true
    });
    return provide(kt, {
      modelValue: a,
      changeModelValue: (r) => {
        a.value = r, r && e.onValueChange && e.onValueChange(r);
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
var lr = defineComponent({
  __name: "TabsList",
  props: {
    loop: { type: Boolean, default: true },
    asChild: { type: Boolean }
  },
  setup(n) {
    const o = n, e = inject(kt), { primitiveElement: t, currentElement: l } = P();
    return onMounted(() => {
      e.parentElement.value = l.value, e.loop = o.loop;
    }), (a, r) => {
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
          renderSlot(a.$slots, "default")
        ]),
        _: 3
      }, 8, ["as-child", "aria-orientation", "data-orientation"]);
    };
  }
});
var rr = defineComponent({
  __name: "TabsContent",
  props: {
    value: {},
    forceMount: { type: Boolean },
    asChild: { type: Boolean }
  },
  setup(n) {
    const o = n, e = inject(kt), t = computed(() => {
      var l;
      return ((l = e == null ? void 0 : e.modelValue) == null ? void 0 : l.value) === o.value ? "active" : "inactive";
    });
    return (l, a) => {
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
var ir = defineComponent({
  __name: "TabsTrigger",
  props: {
    value: {},
    disabled: { type: Boolean, default: false },
    asChild: { type: Boolean }
  },
  setup(n) {
    const o = n, e = inject(kt), { primitiveElement: t, currentElement: l } = P();
    function a(i) {
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
      d && (d.focus(), e.currentFocusedElement.value = d, (e == null ? void 0 : e.activationMode) === "automatic" && a(d == null ? void 0 : d.getAttribute("data-radix-vue-tab-value")));
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
        onClick: d[0] || (d[0] = (g) => a(o.value)),
        onKeydown: r
      }, {
        default: withCtx(() => [
          renderSlot(i.$slots, "default")
        ]),
        _: 3
      }, 8, ["as-child", "aria-selected", "data-state", "disabled", "data-disabled", "tabindex", "data-orientation", "data-radix-vue-tab-value"]);
    };
  }
});
var Ra = ["value", "aria-valuenow", "name"];
var Qt = Symbol();
var sr = defineComponent({
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
  setup(n, { emit: o }) {
    const e = n, { primitiveElement: t, currentElement: l } = P(), a = ref(), r = computed(() => e.modelValue ? e.modelValue < 50 ? (e.modelValue - 50) / 50 * 10 : (e.modelValue - 50) / 50 * -10 : 0);
    provide(Qt, {
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
      thumbElement: a,
      disabled: e.disabled
    });
    function s(f) {
      o("update:modelValue", m(f, e.step));
    }
    let i;
    function d(f) {
      a.value && a.value.focus(), f.preventDefault(), l.value && (i = l.value.getBoundingClientRect(), f.clientX - 10 - r.value > i.left && f.clientX - 10 - r.value < i.left + i.width && s(
        Math.round(
          (f.clientX - 10 - r.value - i.left) / i.width * 100
        )
      ), document.addEventListener("pointermove", p), document.addEventListener("pointerup", c));
    }
    const p = (f) => {
      a.value && a.value.focus(), f.clientX - 10 - r.value > i.left && f.clientX - 10 - r.value < i.left + i.width && s(
        (f.clientX - 10 - r.value - i.left) / i.width * 100
      ), f.clientX - 10 - r.value <= i.left && s(e.min), f.clientX - 10 - r.value >= i.left + i.width && s(e.max);
    }, c = (f) => {
      document.removeEventListener("pointermove", p), document.removeEventListener("pointerup", c);
    };
    function m(f, v) {
      const g = Math.floor(f / v);
      return f % v <= v / 2 ? g * v : (g + 1) * v;
    }
    return (f, v) => (openBlock(), createBlock(unref(ae), {
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
        }, null, 8, Ra)
      ]),
      _: 3
    }, 8, ["as-child"]));
  }
});
var ur = defineComponent({
  __name: "SliderThumb",
  props: {
    asChild: { type: Boolean, default: false }
  },
  setup(n) {
    const o = n, e = inject(Qt), { primitiveElement: t, currentElement: l } = P();
    onMounted(() => {
      e != null && e.thumbElement && (e.thumbElement.value = l.value);
    });
    let a = 2;
    function r(s) {
      var p;
      if (!e)
        return;
      (s.keyCode === 32 || s.key === "Enter") && s.preventDefault();
      const i = Number(e == null ? void 0 : e.step), d = Number((p = e.modelValue) == null ? void 0 : p.value);
      (s.key === "ArrowUp" || s.key === "ArrowRight") && (s.shiftKey ? (s.preventDefault(), d + a >= (e == null ? void 0 : e.max) ? e == null || e.changeModelValue(e == null ? void 0 : e.max) : d + a <= (e == null ? void 0 : e.min) ? e == null || e.changeModelValue(e == null ? void 0 : e.min) : e == null || e.changeModelValue(d + a)) : (s.preventDefault(), d + i >= (e == null ? void 0 : e.max) ? e == null || e.changeModelValue(e == null ? void 0 : e.max) : d + i <= (e == null ? void 0 : e.min) ? e == null || e.changeModelValue(e == null ? void 0 : e.min) : e == null || e.changeModelValue(d + i))), (s.key === "ArrowDown" || s.key === "ArrowLeft") && (s.shiftKey ? (s.preventDefault(), d - a >= (e == null ? void 0 : e.max) ? e == null || e.changeModelValue(e == null ? void 0 : e.max) : d - a <= (e == null ? void 0 : e.min) ? e == null || e.changeModelValue(e == null ? void 0 : e.min) : e == null || e.changeModelValue(d - a)) : (s.preventDefault(), d - i >= (e == null ? void 0 : e.max) ? e == null || e.changeModelValue(e == null ? void 0 : e.max) : d - i <= (e == null ? void 0 : e.min) ? e == null || e.changeModelValue(e == null ? void 0 : e.min) : e == null || e.changeModelValue(d - i)));
    }
    return (s, i) => {
      var d, p, c, m, f, v, g, h2, x;
      return openBlock(), createElementBlock("span", {
        style: normalizeStyle(`transform: translateX(-50%); position: absolute; left: calc(${(p = (d = unref(e)) == null ? void 0 : d.modelValue) == null ? void 0 : p.value}%)`)
      }, [
        createVNode(unref(ae), mergeProps(s.$attrs, {
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
var dr = defineComponent({
  __name: "SliderTrack",
  props: {
    asChild: { type: Boolean }
  },
  setup(n) {
    const o = n;
    return (e, t) => (openBlock(), createBlock(unref(ae), {
      "as-child": o.asChild
    }, {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child"]));
  }
});
var cr = defineComponent({
  __name: "SliderRange",
  props: {
    asChild: { type: Boolean }
  },
  setup(n) {
    const o = n, e = inject(Qt);
    return (t, l) => {
      var a, r, s, i, d;
      return openBlock(), createBlock(unref(ae), {
        "data-disabled": (a = unref(e)) == null ? void 0 : a.disabled,
        "data-orientation": (r = unref(e)) == null ? void 0 : r.orientation,
        "as-child": o.asChild,
        style: normalizeStyle(`left: 0%; right: ${(((s = unref(e)) == null ? void 0 : s.max) ?? 100) - (((d = (i = unref(e)) == null ? void 0 : i.modelValue) == null ? void 0 : d.value) ?? 0)}%`)
      }, null, 8, ["data-disabled", "data-orientation", "as-child", "style"]);
    };
  }
});
var en = "RadioGroup";
var tn = Symbol();
var pr = defineComponent({
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
  setup(n, { emit: o }) {
    const e = n, { primitiveElement: t, currentElement: l } = P(), a = K(e, "modelValue", o, {
      defaultValue: e.defaultValue,
      passive: true
    });
    return provide(en, {
      modelValue: a,
      changeModelValue: (r) => {
        a.value = r, r && e.onValueChange && e.onValueChange(r);
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
var Na = ["value", "required", "disabled", "checked"];
var fr = defineComponent({
  __name: "RadioGroupItem",
  props: {
    value: {},
    disabled: { type: Boolean, default: false },
    required: { type: Boolean },
    asChild: { type: Boolean }
  },
  setup(n) {
    const o = n, e = inject(en), t = computed(() => (e == null ? void 0 : e.disabled.value) || o.disabled), l = computed(() => (e == null ? void 0 : e.required.value) || o.required), a = computed(() => {
      var c;
      return ((c = e == null ? void 0 : e.modelValue) == null ? void 0 : c.value) === o.value;
    });
    provide(tn, readonly({ disabled: t, checked: a }));
    function r(c) {
      t.value || e == null || e.changeModelValue(c);
    }
    const { primitiveElement: s, currentElement: i } = P();
    function d(c) {
      if (t.value)
        return;
      const m = ne(
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
      return (c = e == null ? void 0 : e.currentFocusedElement) != null && c.value ? ((m = e == null ? void 0 : e.currentFocusedElement) == null ? void 0 : m.value) === i.value ? "0" : "-1" : a.value ? "0" : "-1";
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
          "data-state": a.value ? "checked" : "unchecked",
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
          checked: a.value
        }, null, 8, Na)
      ], 64);
    };
  }
});
var mr = defineComponent({
  __name: "RadioGroupIndicator",
  props: {
    asChild: { type: Boolean, default: false }
  },
  setup(n) {
    const o = inject(tn);
    return (e, t) => {
      var l, a, r;
      return (l = unref(o)) != null && l.checked ? (openBlock(), createBlock(unref(ae), {
        key: 0,
        "data-state": (a = unref(o)) != null && a.checked ? "checked" : "unchecked",
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
var on = Symbol();
var Vt = (n) => typeof n == "number";
function Ia(n, o) {
  return n === null || Vt(n) && !isNaN(n) && n <= o && n >= 0 ? n : (console.error(`Invalid prop \`value\` of value \`${n}\` supplied to \`ProgressRoot\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${je} if no \`max\` prop is set)
  - \`null\` if the progress is indeterminate.

Defaulting to \`null\`.`), null);
}
var je = 100;
function La(n) {
  return Vt(n) && !isNaN(n) && n > 0 ? n : (console.error(
    `Invalid prop \`max\` of value \`${n}\` supplied to \`ProgressRoot\`. Only numbers greater than 0 are valid max values. Defaulting to \`${je}\`.`
  ), je);
}
var vr = defineComponent({
  __name: "ProgressRoot",
  props: {
    modelValue: {},
    max: { default: je },
    getValueLabel: { type: Function, default: (n, o) => `${Math.round(n / o * je)}%` },
    asChild: { type: Boolean }
  },
  emits: ["update:modelValue", "update:max"],
  setup(n, { emit: o }) {
    const e = n, t = K(e, "modelValue", o, {
      passive: true
    }), l = K(e, "max", o, {
      passive: true
    });
    watch(
      () => t.value,
      async (r) => {
        const s = Ia(r, e.max);
        s !== r && (await nextTick(), t.value = s);
      },
      { immediate: true }
    ), watch(
      () => e.max,
      (r) => {
        const s = La(e.max);
        s !== r && (l.value = s);
      },
      { immediate: true }
    );
    const a = computed(() => t.value ? t.value === l.value ? "complete" : "loading" : "indeterminate");
    return provide(on, {
      modelValue: t,
      max: l,
      progressState: a
    }), (r, s) => (openBlock(), createBlock(unref(D), {
      asChild: e.asChild,
      "aria-valuemax": unref(l),
      "aria-valuemin": 0,
      "aria-valuenow": Vt(unref(t)) ? unref(t) : void 0,
      "aria-valuetext": r.getValueLabel(unref(t), unref(l)),
      role: "progressbar",
      "data-state": a.value,
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
var hr = defineComponent({
  __name: "ProgressIndicator",
  props: {
    asChild: { type: Boolean }
  },
  setup(n) {
    const o = n, e = inject(on);
    return (t, l) => {
      var a, r, s, i;
      return openBlock(), createBlock(unref(D), mergeProps(o, {
        "data-state": (a = unref(e)) == null ? void 0 : a.progressState.value,
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
var _r = defineComponent({
  __name: "DialogRoot",
  props: {
    open: { type: Boolean, default: void 0 },
    defaultOpen: { type: Boolean, default: false },
    modal: { type: Boolean, default: true }
  },
  emits: ["update:modelValue"],
  setup(n, { emit: o }) {
    const e = n, t = K(e, "open", o, {
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
    }), (l, a) => renderSlot(l.$slots, "default");
  }
});
var yr = defineComponent({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean }
  },
  setup(n) {
    const o = n, e = inject(ut), { primitiveElement: t, currentElement: l } = P();
    function a() {
      console.error(
        "Injected value not found, DialogTrigger possibly not wrapped with DialogRoot. Component may not be working properly."
      );
    }
    return onMounted(() => {
      e ? e.triggerButton.value = l.value : a();
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
  setup(n) {
    const o = n;
    return (e, t) => (openBlock(), createBlock(Teleport, {
      to: o.container
    }, [
      renderSlot(e.$slots, "default")
    ], 8, ["to"]));
  }
});
var Ka = createBaseVNode("polygon", { points: "0,0 30,0 15,10" }, null, -1);
var Ha = defineComponent({
  __name: "Arrow",
  props: {
    width: { default: 10 },
    height: { default: 5 }
  },
  setup(n) {
    const o = n, { primitiveElement: e } = P();
    return (t, l) => (openBlock(), createBlock(unref(Ca), mergeProps({
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
          Ka
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
  setup(n, { emit: o }) {
    const e = n, { getItems: t } = le(), { primitiveElement: l, currentElement: a } = P();
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
      const m = ne(
        c,
        a.value,
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
      e.disabled || (c = e.rootProvider) == null || c.changeSelected(a.value);
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
        "data-highlighted": ((f = c.rootProvider) == null ? void 0 : f.selectedElement.value) === unref(a) ? "" : null,
        "aria-disabled": e.disabled ? true : void 0,
        "data-disabled": e.disabled ? "" : void 0,
        "data-orientation": (v = c.rootProvider) == null ? void 0 : v.orientation,
        tabindex: ((g = c.rootProvider) == null ? void 0 : g.selectedElement.value) === unref(a) ? "0" : "-1"
      }, {
        default: withCtx(() => [
          renderSlot(c.$slots, "default")
        ]),
        _: 3
      }, 8, ["role", "onKeydown", "data-state", "data-highlighted", "aria-disabled", "data-disabled", "data-orientation", "tabindex"]);
    };
  }
});
var gr = defineComponent({
  __name: "DialogPortal",
  props: {
    container: {}
  },
  setup(n) {
    const o = n;
    return (e, t) => (openBlock(), createBlock(unref(qe), normalizeProps(guardReactiveProps(o)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function nn(n) {
  return getCurrentScope() ? (onScopeDispose(n), true) : false;
}
function _t(n) {
  return typeof n == "function" ? n() : unref(n);
}
var an = typeof window < "u";
var jt = () => {
};
var Dt = za();
function za() {
  var n;
  return an && ((n = window == null ? void 0 : window.navigator) == null ? void 0 : n.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
}
var Eo = {
  mounted: "mounted",
  updated: "updated",
  unmounted: "unmounted"
};
function Ya(...n) {
  if (n.length !== 1)
    return toRef(...n);
  const o = n[0];
  return typeof o == "function" ? readonly(customRef(() => ({ get: o, set: jt }))) : ref(o);
}
function Je(n) {
  var o;
  const e = _t(n);
  return (o = e == null ? void 0 : e.$el) != null ? o : e;
}
var ln = an ? window : void 0;
function mt(...n) {
  let o, e, t, l;
  if (typeof n[0] == "string" || Array.isArray(n[0]) ? ([e, t, l] = n, o = ln) : [o, e, t, l] = n, !o)
    return jt;
  Array.isArray(e) || (e = [e]), Array.isArray(t) || (t = [t]);
  const a = [], r = () => {
    a.forEach((p) => p()), a.length = 0;
  }, s = (p, c, m, f) => (p.addEventListener(c, m, f), () => p.removeEventListener(c, m, f)), i = watch(
    () => [Je(o), _t(l)],
    ([p, c]) => {
      r(), p && a.push(
        ...e.flatMap((m) => t.map((f) => s(p, m, f, c)))
      );
    },
    { immediate: true, flush: "post" }
  ), d = () => {
    i(), r();
  };
  return nn(d), d;
}
var Co = false;
function xo(n, o, e = {}) {
  const { window: t = ln, ignore: l = [], capture: a = true, detectIframe: r = false } = e;
  if (!t)
    return;
  Dt && !Co && (Co = true, Array.from(t.document.body.children).forEach((m) => m.addEventListener("click", jt)));
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
      const f = Je(n);
      if (!(!f || f === m.target || m.composedPath().includes(f))) {
        if (m.detail === 0 && (s = !i(m)), !s) {
          s = true;
          return;
        }
        o(m);
      }
    }, { passive: true, capture: a }),
    mt(t, "pointerdown", (m) => {
      const f = Je(n);
      f && (s = !m.composedPath().includes(f) && !i(m));
    }, { passive: true }),
    r && mt(t, "blur", (m) => {
      setTimeout(() => {
        var f;
        const v = Je(n);
        ((f = t.document.activeElement) == null ? void 0 : f.tagName) === "IFRAME" && !(v != null && v.contains(t.document.activeElement)) && o(m);
      }, 0);
    })
  ].filter(Boolean);
  return () => p.forEach((m) => m());
}
var rn = {
  [Eo.mounted](n, o) {
    const e = !o.modifiers.bubble;
    if (typeof o.value == "function")
      n.__onClickOutside_stop = xo(n, o.value, { capture: e });
    else {
      const [t, l] = o.value;
      n.__onClickOutside_stop = xo(n, t, Object.assign({ capture: e }, l));
    }
  },
  [Eo.unmounted](n) {
    n.__onClickOutside_stop();
  }
};
function sn(n) {
  const o = window.getComputedStyle(n);
  if (o.overflowX === "scroll" || o.overflowY === "scroll" || o.overflowX === "auto" && n.clientWidth < n.scrollWidth || o.overflowY === "auto" && n.clientHeight < n.scrollHeight)
    return true;
  {
    const e = n.parentNode;
    return !e || e.tagName === "BODY" ? false : sn(e);
  }
}
function Wa(n) {
  const o = n || window.event, e = o.target;
  return sn(e) ? false : o.touches.length > 1 ? true : (o.preventDefault && o.preventDefault(), false);
}
function Ua(n, o = false) {
  const e = ref(o);
  let t = null, l;
  watch(Ya(n), (s) => {
    if (s) {
      const i = s;
      l = i.style.overflow, e.value && (i.style.overflow = "hidden");
    }
  }, {
    immediate: true
  });
  const a = () => {
    const s = _t(n);
    !s || e.value || (Dt && (t = mt(
      s,
      "touchmove",
      (i) => {
        Wa(i);
      },
      { passive: false }
    )), s.style.overflow = "hidden", e.value = true);
  }, r = () => {
    const s = _t(n);
    !s || !e.value || (Dt && (t == null || t()), s.style.overflow = l, e.value = false);
  };
  return nn(r), computed({
    get() {
      return e.value;
    },
    set(s) {
      s ? a() : r();
    }
  });
}
function qa() {
  let n = false;
  const o = ref(false);
  return (e, t) => {
    if (o.value = t.value, n)
      return;
    n = true;
    const l = Ua(e, t.value);
    watch(o, (a) => l.value = a);
  };
}
qa();
var br = defineComponent({
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
  setup(n, { emit: o }) {
    const e = n, t = inject(ut), { primitiveElement: l, currentElement: a } = P(), r = () => e.isDisableInteractOutside || t.modal && e.isDisableInteractOutside === void 0, s = () => e.isCloseAutoFocus || t.modal && e.isCloseAutoFocus === void 0;
    watchEffect(() => {
      var v;
      a.value && (t != null && t.open.value ? (e.isOpenAutoFocus && Ft(a.value), r() && p(), t != null && t.modal && (window.addEventListener("wheel", i, { passive: false }), window.addEventListener("keydown", d)), window.addEventListener("keydown", f), o("open")) : (c(), window.removeEventListener("wheel", i), window.removeEventListener("keydown", d), window.removeEventListener("keydown", f), s() && ((v = t == null ? void 0 : t.triggerButton.value) == null || v.focus()), o("close")));
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
        [unref(rn), m]
      ]) : createCommentVNode("", true);
    };
  }
});
var wr = defineComponent({
  __name: "DialogOverlay",
  props: {
    asChild: { type: Boolean }
  },
  setup(n) {
    const o = n, e = inject(ut);
    return (t, l) => {
      var a, r;
      return (a = unref(e)) != null && a.open.value ? (openBlock(), createBlock(unref(D), mergeProps({ key: 0 }, o, {
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
var Er = defineComponent({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean }
  },
  setup(n) {
    const o = n, e = inject(ut);
    function t() {
      e == null || e.closeModal();
    }
    return (l, a) => (openBlock(), createBlock(unref(X), mergeProps(o, {
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
var Cr = defineComponent({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean }
  },
  setup(n) {
    const o = n;
    return (e, t) => (openBlock(), createBlock(unref(Xo), normalizeProps(guardReactiveProps(o)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var xr = defineComponent({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean }
  },
  setup(n) {
    const o = n;
    return (e, t) => (openBlock(), createBlock(unref(Jo), normalizeProps(guardReactiveProps(o)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Ge = Symbol();
var $r = defineComponent({
  __name: "AlertDialogRoot",
  props: {
    open: { type: Boolean, default: void 0 },
    defaultOpen: { type: Boolean, default: false }
  },
  emits: ["update:modelValue"],
  setup(n, { emit: o }) {
    const e = n, t = K(e, "open", o, {
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
    }), (l, a) => renderSlot(l.$slots, "default");
  }
});
var kr = defineComponent({
  __name: "AlertDialogTrigger",
  props: {
    asChild: { type: Boolean }
  },
  setup(n) {
    const o = n, e = inject(
      Ge
    ), { primitiveElement: t, currentElement: l } = P();
    function a() {
      console.error(
        "Injected value not found, AlertDialogTrigger possibly not wrapped with AlertDialogRoot. Component may not be working properly."
      );
    }
    return onMounted(() => {
      e ? e.triggerButton.value = l.value : a();
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
  setup(n) {
    const o = n;
    return (e, t) => (openBlock(), createBlock(qe, normalizeProps(guardReactiveProps(o)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Ar = defineComponent({
  __name: "AlertDialogContent",
  props: {
    isOpenAutoFocus: { type: Boolean, default: true },
    isCloseAutoFocus: { type: Boolean, default: void 0 },
    isEscapeKeyDownDefault: { type: Boolean, default: true },
    asChild: { type: Boolean }
  },
  emits: ["open", "close", "escapeKeyDown"],
  setup(n, { emit: o }) {
    const e = n, t = inject(
      Ge
    ), { primitiveElement: l, currentElement: a } = P(), r = () => e.isCloseAutoFocus;
    watchEffect(() => {
      var f;
      a.value && (t != null && t.open.value ? (e.isOpenAutoFocus && Ft(a.value), d(), window.addEventListener("wheel", s, { passive: false }), window.addEventListener("keydown", i), window.addEventListener("keydown", m), o("open")) : (p(), window.removeEventListener("wheel", s), window.removeEventListener("keydown", i), window.removeEventListener("keydown", m), r() && ((f = t == null ? void 0 : t.triggerButton.value) == null || f.focus()), o("close")));
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
        [unref(rn), c]
      ]) : createCommentVNode("", true);
    };
  }
});
var Br = defineComponent({
  __name: "AlertDialogOverlay",
  props: {
    asChild: { type: Boolean }
  },
  setup(n) {
    const o = n, e = inject(
      Ge
    );
    return (t, l) => {
      var a, r;
      return (a = unref(e)) != null && a.open.value ? (openBlock(), createBlock(unref(D), mergeProps({ key: 0 }, o, {
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
  setup(n) {
    const o = n, e = inject(
      Ge
    );
    function t() {
      e == null || e.closeModal();
    }
    return (l, a) => (openBlock(), createBlock(unref(X), mergeProps(o, {
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
var Pr = defineComponent({
  __name: "AlertDialogTitle",
  props: {
    asChild: { type: Boolean }
  },
  setup(n) {
    const o = n;
    return (e, t) => (openBlock(), createBlock(unref(Xo), normalizeProps(guardReactiveProps(o)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Or = defineComponent({
  __name: "AlertDialogDescription",
  props: {
    asChild: { type: Boolean }
  },
  setup(n) {
    const o = n;
    return (e, t) => (openBlock(), createBlock(unref(Jo), normalizeProps(guardReactiveProps(o)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Mr = defineComponent({
  __name: "AlertDialogAction",
  props: {
    asChild: { type: Boolean }
  },
  setup(n) {
    const o = n, e = inject(
      Ge
    );
    function t() {
      e == null || e.closeModal();
    }
    return (l, a) => (openBlock(), createBlock(unref(X), mergeProps(o, {
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
var St = Symbol();
var Dr = defineComponent({
  __name: "ToolbarRoot",
  props: {
    orientation: { default: "horizontal" },
    dir: { default: "ltr" },
    loop: { type: Boolean },
    asChild: { type: Boolean }
  },
  setup(n) {
    const o = n, { primitiveElement: e, currentElement: t } = P(), l = ref();
    return provide(St, {
      parentElement: t,
      activeElement: l,
      orientation: o.orientation
    }), (a, r) => (openBlock(), createBlock(unref(D), {
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
        renderSlot(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["aria-orientation", "dir", "data-orientation", "as-child"]));
  }
});
var Rr = defineComponent({
  __name: "ToolbarButton",
  props: {
    asChild: { type: Boolean }
  },
  setup(n) {
    const o = n, e = inject(St), { primitiveElement: t, currentElement: l } = P();
    function a(r) {
      const s = ne(
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
        onKeydown: a,
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
var Nr = defineComponent({
  __name: "ToolbarLink",
  props: {
    asChild: { type: Boolean }
  },
  setup(n) {
    const o = n, e = inject(St), { primitiveElement: t, currentElement: l } = P();
    function a(r) {
      const s = ne(
        r,
        l.value,
        e == null ? void 0 : e.parentElement.value
      );
      s == null || s.focus();
    }
    return (r, s) => {
      var i;
      return openBlock(), createBlock(unref(Fo), {
        ref_key: "primitiveElement",
        ref: t,
        tabindex: ((i = unref(e)) == null ? void 0 : i.activeElement.value) === unref(l) ? "0" : "-1",
        "as-child": o.asChild,
        onKeydown: a,
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
var un = Symbol();
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
  setup(n, { emit: o }) {
    const e = n, { primitiveElement: t, currentElement: l } = P();
    return provide(un, {
      type: e.type,
      modelValue: toRef(() => e.modelValue),
      changeModelValue: (a) => {
        if (e.type === "single")
          o("update:modelValue", a);
        else {
          if (!a)
            return;
          let r = e.modelValue;
          if (r.includes(a)) {
            let s = r.findIndex((i) => i === a);
            r.splice(s, 1);
          } else
            r.push(a);
          o("update:modelValue", r);
        }
      },
      orientation: e.orientation ? e.orientation : "horizontal",
      parentElement: l
    }), (a, r) => (openBlock(), createBlock(unref(D), {
      ref_key: "primitiveElement",
      ref: t,
      role: "group",
      dir: e.dir,
      "as-child": e.asChild,
      "aria-label": "Text alignment"
    }, {
      default: withCtx(() => [
        renderSlot(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["dir", "as-child"]));
  }
});
var Lr = defineComponent({
  __name: "ToolbarToggleItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean }
  },
  setup(n) {
    const o = n, e = inject(
      un
    ), t = inject(St), l = computed(() => {
      var s, i, d;
      return (e == null ? void 0 : e.type) === "multiple" ? (i = (s = e == null ? void 0 : e.modelValue) == null ? void 0 : s.value) != null && i.includes(o.value) ? "on" : "off" : ((d = e == null ? void 0 : e.modelValue) == null ? void 0 : d.value) === o.value ? "on" : "off";
    }), a = ref();
    function r(s) {
      const i = ne(
        s,
        a.value,
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
        ref: a,
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
var Kr = defineComponent({
  __name: "ToolbarSeparator",
  props: {
    asChild: { type: Boolean }
  },
  setup(n) {
    const o = n;
    return (e, t) => (openBlock(), createBlock(Ue, {
      "as-child": o.asChild
    }, null, 8, ["as-child"]));
  }
});
var eo = Symbol();
var Hr = defineComponent({
  __name: "AvatarRoot",
  props: {
    asChild: { type: Boolean }
  },
  setup(n) {
    const o = n, e = ref("loading");
    return provide(eo, {
      imageLoadingStatus: e
    }), (t, l) => (openBlock(), createBlock(unref(ae), {
      "as-child": o.asChild
    }, {
      default: withCtx(() => [
        renderSlot(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child"]));
  }
});
var zr = defineComponent({
  __name: "AvatarImage",
  props: {
    onLoadingStatusChange: {},
    asChild: { type: Boolean }
  },
  setup(n) {
    const o = n, e = inject(eo);
    function t() {
      e.imageLoadingStatus.value = "loaded";
    }
    return (l, a) => (openBlock(), createBlock(unref(ba), {
      "as-child": o.asChild,
      onLoad: t
    }, null, 8, ["as-child"]));
  }
});
var Yr = defineComponent({
  __name: "AvatarFallback",
  props: {
    delayMs: { default: 0 },
    asChild: { type: Boolean }
  },
  setup(n) {
    const o = n, e = inject(eo);
    let t = ref(false), l;
    return o.delayMs ? l = setTimeout(() => {
      t.value = true, clearTimeout(l);
    }, o.delayMs) : t.value = true, (a, r) => {
      var s;
      return unref(t) && ((s = unref(e)) == null ? void 0 : s.imageLoadingStatus.value) !== "loaded" ? (openBlock(), createBlock(unref(ae), {
        key: 0,
        "as-child": o.asChild
      }, {
        default: withCtx(() => [
          renderSlot(a.$slots, "default")
        ]),
        _: 3
      }, 8, ["as-child"])) : createCommentVNode("", true);
    };
  }
});
var to = Symbol();
var fe = defineComponent({
  __name: "PopperRoot",
  setup(n) {
    const o = ref();
    return provide(to, {
      anchor: o,
      onAnchorChange: (e) => {
        o.value = e;
      }
    }), (e, t) => renderSlot(e.$slots, "default");
  }
});
var _e = defineComponent({
  __name: "PopperAnchor",
  props: {
    element: {},
    asChild: { type: Boolean }
  },
  setup(n) {
    const o = n, { primitiveElement: e, currentElement: t } = P(), l = inject(to);
    return watch(t, () => {
      l == null || l.onAnchorChange(o.element ?? t.value);
    }), (a, r) => (openBlock(), createBlock(unref(D), {
      "as-child": a.asChild,
      ref_key: "primitiveElement",
      ref: e
    }, {
      default: withCtx(() => [
        renderSlot(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child"]));
  }
});
var Ga = (n) => ({
  name: "transformOrigin",
  options: n,
  fn(o) {
    var h2, x, C;
    const { placement: e, rects: t, middlewareData: l } = o, r = ((h2 = l.arrow) == null ? void 0 : h2.centerOffset) !== 0, s = r ? 0 : n.arrowWidth, i = r ? 0 : n.arrowHeight, [d, p] = Rt(e), c = { start: "0%", center: "50%", end: "100%" }[p], m = (((x = l.arrow) == null ? void 0 : x.x) ?? 0) + s / 2, f = (((C = l.arrow) == null ? void 0 : C.y) ?? 0) + i / 2;
    let v = "", g = "";
    return d === "bottom" ? (v = r ? c : `${m}px`, g = `${-i}px`) : d === "top" ? (v = r ? c : `${m}px`, g = `${t.floating.height + i}px`) : d === "right" ? (v = `${-i}px`, g = r ? c : `${f}px`) : d === "left" && (v = `${t.floating.width + i}px`, g = r ? c : `${f}px`), { data: { x: v, y: g } };
  }
});
function Rt(n) {
  const [o, e = "center"] = n.split("-");
  return [o, e];
}
function Fe(n) {
  return n.split("-")[1];
}
function oo(n) {
  return n === "y" ? "height" : "width";
}
function ge(n) {
  return n.split("-")[0];
}
function Re(n) {
  return ["top", "bottom"].includes(ge(n)) ? "x" : "y";
}
function $o(n, o, e) {
  let { reference: t, floating: l } = n;
  const a = t.x + t.width / 2 - l.width / 2, r = t.y + t.height / 2 - l.height / 2, s = Re(o), i = oo(s), d = t[i] / 2 - l[i] / 2, p = s === "x";
  let c;
  switch (ge(o)) {
    case "top":
      c = { x: a, y: t.y - l.height };
      break;
    case "bottom":
      c = { x: a, y: t.y + t.height };
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
  switch (Fe(o)) {
    case "start":
      c[s] -= d * (e && p ? -1 : 1);
      break;
    case "end":
      c[s] += d * (e && p ? -1 : 1);
  }
  return c;
}
var Fa = async (n, o, e) => {
  const { placement: t = "bottom", strategy: l = "absolute", middleware: a = [], platform: r } = e, s = a.filter(Boolean), i = await (r.isRTL == null ? void 0 : r.isRTL(o));
  let d = await r.getElementRects({ reference: n, floating: o, strategy: l }), { x: p, y: c } = $o(d, t, i), m = t, f = {}, v = 0;
  for (let g = 0; g < s.length; g++) {
    const { name: h2, fn: x } = s[g], { x: C, y: S, data: B, reset: R } = await x({ x: p, y: c, initialPlacement: t, placement: m, strategy: l, middlewareData: f, rects: d, platform: r, elements: { reference: n, floating: o } });
    p = C ?? p, c = S ?? c, f = { ...f, [h2]: { ...f[h2], ...B } }, R && v <= 50 && (v++, typeof R == "object" && (R.placement && (m = R.placement), R.rects && (d = R.rects === true ? await r.getElementRects({ reference: n, floating: o, strategy: l }) : R.rects), { x: p, y: c } = $o(d, m, i)), g = -1);
  }
  return { x: p, y: c, placement: m, strategy: l, middlewareData: f };
};
function Ee(n, o) {
  return typeof n == "function" ? n(o) : n;
}
function dn(n) {
  return typeof n != "number" ? function(o) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...o };
  }(n) : { top: n, right: n, bottom: n, left: n };
}
function yt(n) {
  return { ...n, top: n.y, left: n.x, right: n.x + n.width, bottom: n.y + n.height };
}
async function et(n, o) {
  var e;
  o === void 0 && (o = {});
  const { x: t, y: l, platform: a, rects: r, elements: s, strategy: i } = n, { boundary: d = "clippingAncestors", rootBoundary: p = "viewport", elementContext: c = "floating", altBoundary: m = false, padding: f = 0 } = Ee(o, n), v = dn(f), g = s[m ? c === "floating" ? "reference" : "floating" : c], h2 = yt(await a.getClippingRect({ element: (e = await (a.isElement == null ? void 0 : a.isElement(g))) == null || e ? g : g.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(s.floating)), boundary: d, rootBoundary: p, strategy: i })), x = c === "floating" ? { ...r.floating, x: t, y: l } : r.reference, C = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(s.floating)), S = await (a.isElement == null ? void 0 : a.isElement(C)) && await (a.getScale == null ? void 0 : a.getScale(C)) || { x: 1, y: 1 }, B = yt(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: x, offsetParent: C, strategy: i }) : x);
  return { top: (h2.top - B.top + v.top) / S.y, bottom: (B.bottom - h2.bottom + v.bottom) / S.y, left: (h2.left - B.left + v.left) / S.x, right: (B.right - h2.right + v.right) / S.x };
}
var tt = Math.min;
var Pe = Math.max;
function Nt(n, o, e) {
  return Pe(n, tt(o, e));
}
var Xa = (n) => ({ name: "arrow", options: n, async fn(o) {
  const { x: e, y: t, placement: l, rects: a, platform: r, elements: s } = o, { element: i, padding: d = 0 } = Ee(n, o) || {};
  if (i == null)
    return {};
  const p = dn(d), c = { x: e, y: t }, m = Re(l), f = oo(m), v = await r.getDimensions(i), g = m === "y", h2 = g ? "top" : "left", x = g ? "bottom" : "right", C = g ? "clientHeight" : "clientWidth", S = a.reference[f] + a.reference[m] - c[m] - a.floating[f], B = c[m] - a.reference[m], R = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(i));
  let N = R ? R[C] : 0;
  N && await (r.isElement == null ? void 0 : r.isElement(R)) || (N = s.floating[C] || a.floating[f]);
  const T = S / 2 - B / 2, q = N / 2 - v[f] / 2 - 1, G = tt(p[h2], q), ee = tt(p[x], q), Y = G, Q = N - v[f] - ee, U = N / 2 - v[f] / 2 + T, te = Nt(Y, U, Q), oe = Fe(l) != null && U != te && a.reference[f] / 2 - (U < Y ? G : ee) - v[f] / 2 < 0 ? U < Y ? Y - U : Q - U : 0;
  return { [m]: c[m] - oe, data: { [m]: te, centerOffset: U - te + oe } };
} });
var cn = ["top", "right", "bottom", "left"];
cn.reduce((n, o) => n.concat(o, o + "-start", o + "-end"), []);
var Ja = { left: "right", right: "left", bottom: "top", top: "bottom" };
function gt(n) {
  return n.replace(/left|right|bottom|top/g, (o) => Ja[o]);
}
function Za(n, o, e) {
  e === void 0 && (e = false);
  const t = Fe(n), l = Re(n), a = oo(l);
  let r = l === "x" ? t === (e ? "end" : "start") ? "right" : "left" : t === "start" ? "bottom" : "top";
  return o.reference[a] > o.floating[a] && (r = gt(r)), { main: r, cross: gt(r) };
}
var Qa = { start: "end", end: "start" };
function Mt(n) {
  return n.replace(/start|end/g, (o) => Qa[o]);
}
var Va = function(n) {
  return n === void 0 && (n = {}), { name: "flip", options: n, async fn(o) {
    var e;
    const { placement: t, middlewareData: l, rects: a, initialPlacement: r, platform: s, elements: i } = o, { mainAxis: d = true, crossAxis: p = true, fallbackPlacements: c, fallbackStrategy: m = "bestFit", fallbackAxisSideDirection: f = "none", flipAlignment: v = true, ...g } = Ee(n, o), h2 = ge(t), x = ge(r) === r, C = await (s.isRTL == null ? void 0 : s.isRTL(i.floating)), S = c || (x || !v ? [gt(r)] : function(Y) {
      const Q = gt(Y);
      return [Mt(Y), Q, Mt(Q)];
    }(r));
    c || f === "none" || S.push(...function(Y, Q, U, te) {
      const oe = Fe(Y);
      let j = function(Be, Te, Mn) {
        const vo = ["left", "right"], ho = ["right", "left"], Dn = ["top", "bottom"], Rn = ["bottom", "top"];
        switch (Be) {
          case "top":
          case "bottom":
            return Mn ? Te ? ho : vo : Te ? vo : ho;
          case "left":
          case "right":
            return Te ? Dn : Rn;
          default:
            return [];
        }
      }(ge(Y), U === "start", te);
      return oe && (j = j.map((Be) => Be + "-" + oe), Q && (j = j.concat(j.map(Mt)))), j;
    }(r, v, f, C));
    const B = [r, ...S], R = await et(o, g), N = [];
    let T = ((e = l.flip) == null ? void 0 : e.overflows) || [];
    if (d && N.push(R[h2]), p) {
      const { main: Y, cross: Q } = Za(t, a, C);
      N.push(R[Y], R[Q]);
    }
    if (T = [...T, { placement: t, overflows: N }], !N.every((Y) => Y <= 0)) {
      var q, G;
      const Y = (((q = l.flip) == null ? void 0 : q.index) || 0) + 1, Q = B[Y];
      if (Q)
        return { data: { index: Y, overflows: T }, reset: { placement: Q } };
      let U = (G = T.filter((te) => te.overflows[0] <= 0).sort((te, oe) => te.overflows[1] - oe.overflows[1])[0]) == null ? void 0 : G.placement;
      if (!U)
        switch (m) {
          case "bestFit": {
            var ee;
            const te = (ee = T.map((oe) => [oe.placement, oe.overflows.filter((j) => j > 0).reduce((j, Be) => j + Be, 0)]).sort((oe, j) => oe[1] - j[1])[0]) == null ? void 0 : ee[0];
            te && (U = te);
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
function ko(n, o) {
  return { top: n.top - o.height, right: n.right - o.width, bottom: n.bottom - o.height, left: n.left - o.width };
}
function So(n) {
  return cn.some((o) => n[o] >= 0);
}
var ja = function(n) {
  return n === void 0 && (n = {}), { name: "hide", options: n, async fn(o) {
    const { rects: e } = o, { strategy: t = "referenceHidden", ...l } = Ee(n, o);
    switch (t) {
      case "referenceHidden": {
        const a = ko(await et(o, { ...l, elementContext: "reference" }), e.reference);
        return { data: { referenceHiddenOffsets: a, referenceHidden: So(a) } };
      }
      case "escaped": {
        const a = ko(await et(o, { ...l, altBoundary: true }), e.floating);
        return { data: { escapedOffsets: a, escaped: So(a) } };
      }
      default:
        return {};
    }
  } };
};
var el = function(n) {
  return n === void 0 && (n = 0), { name: "offset", options: n, async fn(o) {
    const { x: e, y: t } = o, l = await async function(a, r) {
      const { placement: s, platform: i, elements: d } = a, p = await (i.isRTL == null ? void 0 : i.isRTL(d.floating)), c = ge(s), m = Fe(s), f = Re(s) === "x", v = ["left", "top"].includes(c) ? -1 : 1, g = p && f ? -1 : 1, h2 = Ee(r, a);
      let { mainAxis: x, crossAxis: C, alignmentAxis: S } = typeof h2 == "number" ? { mainAxis: h2, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...h2 };
      return m && typeof S == "number" && (C = m === "end" ? -1 * S : S), f ? { x: C * g, y: x * v } : { x: x * v, y: C * g };
    }(o, n);
    return { x: e + l.x, y: t + l.y, data: l };
  } };
};
function pn(n) {
  return n === "x" ? "y" : "x";
}
var tl = function(n) {
  return n === void 0 && (n = {}), { name: "shift", options: n, async fn(o) {
    const { x: e, y: t, placement: l } = o, { mainAxis: a = true, crossAxis: r = false, limiter: s = { fn: (h2) => {
      let { x, y: C } = h2;
      return { x, y: C };
    } }, ...i } = Ee(n, o), d = { x: e, y: t }, p = await et(o, i), c = Re(ge(l)), m = pn(c);
    let f = d[c], v = d[m];
    if (a) {
      const h2 = c === "y" ? "bottom" : "right";
      f = Nt(f + p[c === "y" ? "top" : "left"], f, f - p[h2]);
    }
    if (r) {
      const h2 = m === "y" ? "bottom" : "right";
      v = Nt(v + p[m === "y" ? "top" : "left"], v, v - p[h2]);
    }
    const g = s.fn({ ...o, [c]: f, [m]: v });
    return { ...g, data: { x: g.x - e, y: g.y - t } };
  } };
};
var ol = function(n) {
  return n === void 0 && (n = {}), { options: n, fn(o) {
    const { x: e, y: t, placement: l, rects: a, middlewareData: r } = o, { offset: s = 0, mainAxis: i = true, crossAxis: d = true } = Ee(n, o), p = { x: e, y: t }, c = Re(l), m = pn(c);
    let f = p[c], v = p[m];
    const g = Ee(s, o), h2 = typeof g == "number" ? { mainAxis: g, crossAxis: 0 } : { mainAxis: 0, crossAxis: 0, ...g };
    if (i) {
      const S = c === "y" ? "height" : "width", B = a.reference[c] - a.floating[S] + h2.mainAxis, R = a.reference[c] + a.reference[S] - h2.mainAxis;
      f < B ? f = B : f > R && (f = R);
    }
    if (d) {
      var x, C;
      const S = c === "y" ? "width" : "height", B = ["top", "left"].includes(ge(l)), R = a.reference[m] - a.floating[S] + (B && ((x = r.offset) == null ? void 0 : x[m]) || 0) + (B ? 0 : h2.crossAxis), N = a.reference[m] + a.reference[S] + (B ? 0 : ((C = r.offset) == null ? void 0 : C[m]) || 0) - (B ? h2.crossAxis : 0);
      v < R ? v = R : v > N && (v = N);
    }
    return { [c]: f, [m]: v };
  } };
};
var nl = function(n) {
  return n === void 0 && (n = {}), { name: "size", options: n, async fn(o) {
    const { placement: e, rects: t, platform: l, elements: a } = o, { apply: r = () => {
    }, ...s } = Ee(n, o), i = await et(o, s), d = ge(e), p = Fe(e), c = Re(e) === "x", { width: m, height: f } = t.floating;
    let v, g;
    d === "top" || d === "bottom" ? (v = d, g = p === (await (l.isRTL == null ? void 0 : l.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (g = d, v = p === "end" ? "top" : "bottom");
    const h2 = f - i[v], x = m - i[g], C = !o.middlewareData.shift;
    let S = h2, B = x;
    if (c) {
      const N = m - i.left - i.right;
      B = p || C ? tt(x, N) : N;
    } else {
      const N = f - i.top - i.bottom;
      S = p || C ? tt(h2, N) : N;
    }
    if (C && !p) {
      const N = Pe(i.left, 0), T = Pe(i.right, 0), q = Pe(i.top, 0), G = Pe(i.bottom, 0);
      c ? B = m - 2 * (N !== 0 || T !== 0 ? N + T : Pe(i.left, i.right)) : S = f - 2 * (q !== 0 || G !== 0 ? q + G : Pe(i.top, i.bottom));
    }
    await r({ ...o, availableWidth: B, availableHeight: S });
    const R = await l.getDimensions(a.floating);
    return m !== R.width || f !== R.height ? { reset: { rects: true } } : {};
  } };
};
function ie(n) {
  var o;
  return ((o = n.ownerDocument) == null ? void 0 : o.defaultView) || window;
}
function de(n) {
  return ie(n).getComputedStyle(n);
}
function fn(n) {
  return n instanceof ie(n).Node;
}
function xe(n) {
  return fn(n) ? (n.nodeName || "").toLowerCase() : "#document";
}
function pe(n) {
  return n instanceof ie(n).HTMLElement;
}
function be(n) {
  return n instanceof ie(n).Element;
}
function Ao(n) {
  return typeof ShadowRoot < "u" && (n instanceof ie(n).ShadowRoot || n instanceof ShadowRoot);
}
function ot(n) {
  const { overflow: o, overflowX: e, overflowY: t, display: l } = de(n);
  return /auto|scroll|overlay|hidden|clip/.test(o + t + e) && !["inline", "contents"].includes(l);
}
function al(n) {
  return ["table", "td", "th"].includes(xe(n));
}
function It(n) {
  const o = no(), e = de(n);
  return e.transform !== "none" || e.perspective !== "none" || !o && !!e.backdropFilter && e.backdropFilter !== "none" || !o && !!e.filter && e.filter !== "none" || ["transform", "perspective", "filter"].some((t) => (e.willChange || "").includes(t)) || ["paint", "layout", "strict", "content"].some((t) => (e.contain || "").includes(t));
}
function no() {
  return !(typeof CSS > "u" || !CSS.supports) && CSS.supports("-webkit-backdrop-filter", "none");
}
function At(n) {
  return ["html", "body", "#document"].includes(xe(n));
}
var Lt = Math.min;
var Le = Math.max;
var bt = Math.round;
var pt = Math.floor;
var Oe = (n) => ({ x: n, y: n });
function mn(n) {
  const o = de(n);
  let e = parseFloat(o.width) || 0, t = parseFloat(o.height) || 0;
  const l = pe(n), a = l ? n.offsetWidth : e, r = l ? n.offsetHeight : t, s = bt(e) !== a || bt(t) !== r;
  return s && (e = a, t = r), { width: e, height: t, $: s };
}
function ao(n) {
  return be(n) ? n : n.contextElement;
}
function Ke(n) {
  const o = ao(n);
  if (!pe(o))
    return Oe(1);
  const e = o.getBoundingClientRect(), { width: t, height: l, $: a } = mn(o);
  let r = (a ? bt(e.width) : e.width) / t, s = (a ? bt(e.height) : e.height) / l;
  return r && Number.isFinite(r) || (r = 1), s && Number.isFinite(s) || (s = 1), { x: r, y: s };
}
var Bo = Oe(0);
function vn(n, o, e) {
  var t, l;
  if (o === void 0 && (o = true), !no())
    return Bo;
  const a = n ? ie(n) : window;
  return !e || o && e !== a ? Bo : { x: ((t = a.visualViewport) == null ? void 0 : t.offsetLeft) || 0, y: ((l = a.visualViewport) == null ? void 0 : l.offsetTop) || 0 };
}
function Me(n, o, e, t) {
  o === void 0 && (o = false), e === void 0 && (e = false);
  const l = n.getBoundingClientRect(), a = ao(n);
  let r = Oe(1);
  o && (t ? be(t) && (r = Ke(t)) : r = Ke(n));
  const s = vn(a, e, t);
  let i = (l.left + s.x) / r.x, d = (l.top + s.y) / r.y, p = l.width / r.x, c = l.height / r.y;
  if (a) {
    const m = ie(a), f = t && be(t) ? ie(t) : t;
    let v = m.frameElement;
    for (; v && t && f !== m; ) {
      const g = Ke(v), h2 = v.getBoundingClientRect(), x = getComputedStyle(v), C = h2.left + (v.clientLeft + parseFloat(x.paddingLeft)) * g.x, S = h2.top + (v.clientTop + parseFloat(x.paddingTop)) * g.y;
      i *= g.x, d *= g.y, p *= g.x, c *= g.y, i += C, d += S, v = ie(v).frameElement;
    }
  }
  return yt({ width: p, height: c, x: i, y: d });
}
function we(n) {
  return ((fn(n) ? n.ownerDocument : n.document) || window.document).documentElement;
}
function Bt(n) {
  return be(n) ? { scrollLeft: n.scrollLeft, scrollTop: n.scrollTop } : { scrollLeft: n.pageXOffset, scrollTop: n.pageYOffset };
}
function hn(n) {
  return Me(we(n)).left + Bt(n).scrollLeft;
}
function ze(n) {
  if (xe(n) === "html")
    return n;
  const o = n.assignedSlot || n.parentNode || Ao(n) && n.host || we(n);
  return Ao(o) ? o.host : o;
}
function _n(n) {
  const o = ze(n);
  return At(o) ? n.ownerDocument ? n.ownerDocument.body : n.body : pe(o) && ot(o) ? o : _n(o);
}
function wt(n, o) {
  var e;
  o === void 0 && (o = []);
  const t = _n(n), l = t === ((e = n.ownerDocument) == null ? void 0 : e.body), a = ie(t);
  return l ? o.concat(a, a.visualViewport || [], ot(t) ? t : []) : o.concat(t, wt(t));
}
function To(n, o, e) {
  let t;
  if (o === "viewport")
    t = function(l, a) {
      const r = ie(l), s = we(l), i = r.visualViewport;
      let d = s.clientWidth, p = s.clientHeight, c = 0, m = 0;
      if (i) {
        d = i.width, p = i.height;
        const f = no();
        (!f || f && a === "fixed") && (c = i.offsetLeft, m = i.offsetTop);
      }
      return { width: d, height: p, x: c, y: m };
    }(n, e);
  else if (o === "document")
    t = function(l) {
      const a = we(l), r = Bt(l), s = l.ownerDocument.body, i = Le(a.scrollWidth, a.clientWidth, s.scrollWidth, s.clientWidth), d = Le(a.scrollHeight, a.clientHeight, s.scrollHeight, s.clientHeight);
      let p = -r.scrollLeft + hn(l);
      const c = -r.scrollTop;
      return de(s).direction === "rtl" && (p += Le(a.clientWidth, s.clientWidth) - i), { width: i, height: d, x: p, y: c };
    }(we(n));
  else if (be(o))
    t = function(l, a) {
      const r = Me(l, true, a === "fixed"), s = r.top + l.clientTop, i = r.left + l.clientLeft, d = pe(l) ? Ke(l) : Oe(1);
      return { width: l.clientWidth * d.x, height: l.clientHeight * d.y, x: i * d.x, y: s * d.y };
    }(o, e);
  else {
    const l = vn(n);
    t = { ...o, x: o.x - l.x, y: o.y - l.y };
  }
  return yt(t);
}
function yn(n, o) {
  const e = ze(n);
  return !(e === o || !be(e) || At(e)) && (de(e).position === "fixed" || yn(e, o));
}
function Po(n, o) {
  return pe(n) && de(n).position !== "fixed" ? o ? o(n) : n.offsetParent : null;
}
function Oo(n, o) {
  const e = ie(n);
  if (!pe(n))
    return e;
  let t = Po(n, o);
  for (; t && al(t) && de(t).position === "static"; )
    t = Po(t, o);
  return t && (xe(t) === "html" || xe(t) === "body" && de(t).position === "static" && !It(t)) ? e : t || function(l) {
    let a = ze(l);
    for (; pe(a) && !At(a); ) {
      if (It(a))
        return a;
      a = ze(a);
    }
    return null;
  }(n) || e;
}
function ll(n, o, e) {
  const t = pe(o), l = we(o), a = e === "fixed", r = Me(n, true, a, o);
  let s = { scrollLeft: 0, scrollTop: 0 };
  const i = Oe(0);
  if (t || !t && !a)
    if ((xe(o) !== "body" || ot(l)) && (s = Bt(o)), pe(o)) {
      const d = Me(o, true, a, o);
      i.x = d.x + o.clientLeft, i.y = d.y + o.clientTop;
    } else
      l && (i.x = hn(l));
  return { x: r.left + s.scrollLeft - i.x, y: r.top + s.scrollTop - i.y, width: r.width, height: r.height };
}
var rl = { getClippingRect: function(n) {
  let { element: o, boundary: e, rootBoundary: t, strategy: l } = n;
  const a = e === "clippingAncestors" ? function(d, p) {
    const c = p.get(d);
    if (c)
      return c;
    let m = wt(d).filter((h2) => be(h2) && xe(h2) !== "body"), f = null;
    const v = de(d).position === "fixed";
    let g = v ? ze(d) : d;
    for (; be(g) && !At(g); ) {
      const h2 = de(g), x = It(g);
      x || h2.position !== "fixed" || (f = null), (v ? !x && !f : !x && h2.position === "static" && f && ["absolute", "fixed"].includes(f.position) || ot(g) && !x && yn(d, g)) ? m = m.filter((C) => C !== g) : f = h2, g = ze(g);
    }
    return p.set(d, m), m;
  }(o, this._c) : [].concat(e), r = [...a, t], s = r[0], i = r.reduce((d, p) => {
    const c = To(o, p, l);
    return d.top = Le(c.top, d.top), d.right = Lt(c.right, d.right), d.bottom = Lt(c.bottom, d.bottom), d.left = Le(c.left, d.left), d;
  }, To(o, s, l));
  return { width: i.right - i.left, height: i.bottom - i.top, x: i.left, y: i.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(n) {
  let { rect: o, offsetParent: e, strategy: t } = n;
  const l = pe(e), a = we(e);
  if (e === a)
    return o;
  let r = { scrollLeft: 0, scrollTop: 0 }, s = Oe(1);
  const i = Oe(0);
  if ((l || !l && t !== "fixed") && ((xe(e) !== "body" || ot(a)) && (r = Bt(e)), pe(e))) {
    const d = Me(e);
    s = Ke(e), i.x = d.x + e.clientLeft, i.y = d.y + e.clientTop;
  }
  return { width: o.width * s.x, height: o.height * s.y, x: o.x * s.x - r.scrollLeft * s.x + i.x, y: o.y * s.y - r.scrollTop * s.y + i.y };
}, isElement: be, getDimensions: function(n) {
  return mn(n);
}, getOffsetParent: Oo, getDocumentElement: we, getScale: Ke, async getElementRects(n) {
  let { reference: o, floating: e, strategy: t } = n;
  const l = this.getOffsetParent || Oo, a = this.getDimensions;
  return { reference: ll(o, await l(e), t), floating: { x: 0, y: 0, ...await a(e) } };
}, getClientRects: (n) => Array.from(n.getClientRects()), isRTL: (n) => de(n).direction === "rtl" };
function il(n, o, e, t) {
  t === void 0 && (t = {});
  const { ancestorScroll: l = true, ancestorResize: a = true, elementResize: r = true, layoutShift: s = typeof IntersectionObserver == "function", animationFrame: i = false } = t, d = ao(n), p = l || a ? [...d ? wt(d) : [], ...wt(o)] : [];
  p.forEach((g) => {
    l && g.addEventListener("scroll", e, { passive: true }), a && g.addEventListener("resize", e);
  });
  const c = d && s ? function(g, h2) {
    let x, C = null;
    const S = we(g);
    function B() {
      clearTimeout(x), C && C.disconnect(), C = null;
    }
    return function R(N, T) {
      N === void 0 && (N = false), T === void 0 && (T = 1), B();
      const { left: q, top: G, width: ee, height: Y } = g.getBoundingClientRect();
      if (N || h2(), !ee || !Y)
        return;
      const Q = pt(G), U = pt(S.clientWidth - (q + ee)), te = pt(S.clientHeight - (G + Y)), oe = pt(q);
      let j = true;
      C = new IntersectionObserver((Be) => {
        const Te = Be[0].intersectionRatio;
        if (Te !== T) {
          if (!j)
            return R();
          Te ? R(false, Te) : x = setTimeout(() => {
            R(false, 1e-7);
          }, 100);
        }
        j = false;
      }, { rootMargin: -Q + "px " + -U + "px " + -te + "px " + -oe + "px", threshold: Le(0, Lt(1, T)) || 1 }), C.observe(g);
    }(true), B;
  }(d, e) : null;
  let m, f = null;
  r && (f = new ResizeObserver(e), d && !i && f.observe(d), f.observe(o));
  let v = i ? Me(n) : null;
  return i && function g() {
    const h2 = Me(n);
    !v || h2.x === v.x && h2.y === v.y && h2.width === v.width && h2.height === v.height || e(), v = h2, m = requestAnimationFrame(g);
  }(), e(), () => {
    p.forEach((g) => {
      l && g.removeEventListener("scroll", e), a && g.removeEventListener("resize", e);
    }), c && c(), f && f.disconnect(), f = null, i && cancelAnimationFrame(m);
  };
}
var sl = (n, o, e) => {
  const t = /* @__PURE__ */ new Map(), l = { platform: rl, ...e }, a = { ...l.platform, _c: t };
  return Fa(n, o, { ...l, platform: a });
};
function Kt(n) {
  var o;
  return (o = n == null ? void 0 : n.$el) != null ? o : n;
}
function ul(n) {
  return {
    name: "arrow",
    options: n,
    fn(o) {
      const e = Kt(unref(n.element));
      return e == null ? {} : Xa({
        element: e,
        padding: n.padding
      }).fn(o);
    }
  };
}
function gn(n) {
  return typeof window > "u" ? 1 : (n.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Mo(n, o) {
  const e = gn(n);
  return Math.round(o * e) / e;
}
function dl(n, o, e) {
  e === void 0 && (e = {});
  const t = e.whileElementsMounted, l = computed(() => {
    var T;
    return (T = unref(e.open)) != null ? T : true;
  }), a = computed(() => unref(e.middleware)), r = computed(() => {
    var T;
    return (T = unref(e.placement)) != null ? T : "bottom";
  }), s = computed(() => {
    var T;
    return (T = unref(e.strategy)) != null ? T : "absolute";
  }), i = computed(() => {
    var T;
    return (T = unref(e.transform)) != null ? T : true;
  }), d = computed(() => Kt(n.value)), p = computed(() => Kt(o.value)), c = ref(0), m = ref(0), f = ref(s.value), v = ref(r.value), g = shallowRef({}), h2 = ref(false), x = computed(() => {
    const T = {
      position: f.value,
      left: "0",
      top: "0"
    };
    if (!p.value)
      return T;
    const q = Mo(p.value, c.value), G = Mo(p.value, m.value);
    return i.value ? {
      ...T,
      transform: "translate(" + q + "px, " + G + "px)",
      ...gn(p.value) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: f.value,
      left: q + "px",
      top: G + "px"
    };
  });
  let C;
  function S() {
    d.value == null || p.value == null || sl(d.value, p.value, {
      middleware: a.value,
      placement: r.value,
      strategy: s.value
    }).then((T) => {
      c.value = T.x, m.value = T.y, f.value = T.strategy, v.value = T.placement, g.value = T.middlewareData, h2.value = true;
    });
  }
  function B() {
    typeof C == "function" && (C(), C = void 0);
  }
  function R() {
    if (B(), t === void 0) {
      S();
      return;
    }
    if (d.value != null && p.value != null) {
      C = t(d.value, p.value, S);
      return;
    }
  }
  function N() {
    l.value || (h2.value = false);
  }
  return watch([a, r, s], S, {
    flush: "sync"
  }), watch([d, p], R, {
    flush: "sync"
  }), watch(l, N, {
    flush: "sync"
  }), getCurrentScope() && onScopeDispose(B), {
    x: shallowReadonly(c),
    y: shallowReadonly(m),
    strategy: shallowReadonly(f),
    placement: shallowReadonly(v),
    middlewareData: shallowReadonly(g),
    isPositioned: shallowReadonly(h2),
    floatingStyles: x,
    update: S
  };
}
var bn = Symbol();
var cl = {
  inheritAttrs: false
};
var ye = defineComponent({
  ...cl,
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
  setup(n) {
    const o = n, e = inject(to), t = ref(), l = ref(), a = ref(), { width: r, height: s } = ma(a), i = computed(
      () => o.side + (o.align !== "center" ? "-" + o.align : "")
    ), d = computed(() => typeof o.collisionPadding == "number" ? o.collisionPadding : { top: 0, right: 0, bottom: 0, left: 0, ...o.collisionPadding }), p = computed(() => Array.isArray(o.collisionBoundary) ? o.collisionBoundary : [o.collisionBoundary]), c = computed(() => ({
      padding: d.value,
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: p.value.length > 0
    })), m = Qn(() => [
      el({
        mainAxis: o.sideOffset + s.value,
        alignmentAxis: o.alignOffset
      }),
      o.avoidCollisions && tl({
        mainAxis: true,
        crossAxis: !!o.prioritizePosition,
        limiter: o.sticky === "partial" ? ol() : void 0,
        ...c.value
      }),
      !o.prioritizePosition && o.avoidCollisions && Va({
        ...c.value
      }),
      nl({
        ...c,
        apply: ({ elements: T, rects: q, availableWidth: G, availableHeight: ee }) => {
          const { width: Y, height: Q } = q.reference, U = T.floating.style;
          Object.assign(T.floating.style, {
            maxWidth: `${G}px`,
            maxHeight: `${ee}px`
          }), U.setProperty(
            "--radix-popper-available-width",
            `${G}px`
          ), U.setProperty(
            "--radix-popper-available-height",
            `${ee}px`
          ), U.setProperty(
            "--radix-popper-anchor-width",
            `${Y}px`
          ), U.setProperty(
            "--radix-popper-anchor-height",
            `${Q}px`
          );
        }
      }),
      a.value && ul({ element: a.value, padding: o.arrowPadding }),
      Ga({
        arrowWidth: r.value,
        arrowHeight: s.value
      }),
      o.hideWhenDetached && ja({ strategy: "referenceHidden", ...c.value })
    ]), { floatingStyles: f, placement: v, isPositioned: g, middlewareData: h2 } = dl(
      e.anchor,
      t,
      {
        strategy: "fixed",
        placement: i,
        whileElementsMounted: (...T) => il(...T, {
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
      var T;
      g.value && ((T = o.onPlaced) == null || T.call(o));
    });
    const S = computed(
      () => {
        var T;
        return ((T = h2.value.arrow) == null ? void 0 : T.centerOffset) !== 0;
      }
    ), B = ref("");
    watchEffect(() => {
      l.value && (B.value = window.getComputedStyle(l.value).zIndex);
    });
    const R = computed(() => {
      var T;
      return ((T = h2.value.arrow) == null ? void 0 : T.x) ?? 0;
    }), N = computed(() => {
      var T;
      return ((T = h2.value.arrow) == null ? void 0 : T.y) ?? 0;
    });
    return provide(bn, {
      placedSide: x,
      onArrowChange: (T) => {
        a.value = T;
      },
      arrowX: R,
      arrowY: N,
      shouldHideArrow: S
    }), (T, q) => {
      var G, ee, Y;
      return openBlock(), createElementBlock("div", {
        ref_key: "floatingRef",
        ref: t,
        "data-radix-popper-content-wrapper": "",
        style: normalizeStyle({
          ...unref(f),
          transform: unref(g) ? unref(f).transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: B.value,
          ["--radix-popper-transform-origin"]: [
            (G = unref(h2).transformOrigin) == null ? void 0 : G.x,
            (ee = unref(h2).transformOrigin) == null ? void 0 : ee.y
          ].join(" ")
        })
      }, [
        createVNode(unref(D), mergeProps(T.$attrs, {
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
            renderSlot(T.$slots, "default")
          ]),
          _: 3
        }, 16, ["as-child", "data-side", "data-align", "style"])
      ], 4);
    };
  }
});
var pl = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
};
var fl = {
  inheritAttrs: false
};
var Ne = defineComponent({
  ...fl,
  __name: "PopperArrow",
  props: {
    width: {},
    height: {},
    asChild: { type: Boolean }
  },
  setup(n) {
    const o = inject(bn), e = computed(
      () => o != null && o.placedSide ? pl[o == null ? void 0 : o.placedSide.value] : ""
    );
    return (t, l) => {
      var a, r, s, i;
      return openBlock(), createElementBlock("span", {
        ref: (d) => {
          unref(o).onArrowChange(d);
        },
        style: normalizeStyle({
          position: "absolute",
          left: (a = unref(o).arrowX) != null && a.value ? `${(r = unref(o).arrowX) == null ? void 0 : r.value}px` : void 0,
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
        createVNode(Ha, mergeProps(t.$attrs, { style: {
          display: "block"
        } }), null, 16)
      ], 4);
    };
  }
});
var lo = Symbol();
var Wr = defineComponent({
  __name: "TooltipRoot",
  props: {
    defaultOpen: { type: Boolean, default: false },
    open: { type: Boolean, default: void 0 },
    delayDuration: { default: 700 },
    disableHoverableContent: { type: Boolean }
  },
  emits: ["update:open"],
  setup(n, { emit: o }) {
    const e = n, t = K(e, "open", o, {
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
      }
    }), (l, a) => (openBlock(), createBlock(unref(fe), null, {
      default: withCtx(() => [
        renderSlot(l.$slots, "default")
      ]),
      _: 3
    }));
  }
});
var Ur = defineComponent({
  __name: "TooltipTrigger",
  props: {
    asChild: { type: Boolean }
  },
  setup(n) {
    const o = n, e = inject(lo), { primitiveElement: t, currentElement: l } = P();
    async function a(s) {
      await Wo(s, l.value) && (e == null || e.showTooltip());
    }
    const r = computed(() => e != null && e.open.value ? "closed" : "instant-open");
    return (s, i) => (openBlock(), createBlock(unref(_e), { asChild: "" }, {
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
            onMouseenter: a,
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
var qr = defineComponent({
  __name: "TooltipPortal",
  props: {
    container: {}
  },
  setup(n) {
    const o = n;
    return (e, t) => (openBlock(), createBlock(qe, normalizeProps(guardReactiveProps(o)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Gr = defineComponent({
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
  setup(n) {
    const o = n, e = inject(lo);
    return (t, l) => {
      var a;
      return (a = unref(e)) != null && a.open.value ? (openBlock(), createBlock(unref(ye), normalizeProps(mergeProps({ key: 0 }, o)), {
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
var Fr = defineComponent({
  __name: "TooltipArrow",
  setup(n) {
    return (o, e) => (openBlock(), createBlock(unref(Ne)));
  }
});
var ro = Symbol();
var Xr = defineComponent({
  __name: "HoverCardRoot",
  props: {
    defaultOpen: { type: Boolean, default: false },
    open: { type: Boolean, default: void 0 },
    openDelay: { default: 700 },
    closeDelay: { default: 300 }
  },
  emits: ["update:open"],
  setup(n, { emit: o }) {
    const e = n, t = K(e, "open", o, {
      defaultValue: e.defaultOpen,
      passive: true
    });
    return provide(ro, {
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
    }), (l, a) => (openBlock(), createBlock(unref(fe), null, {
      default: withCtx(() => [
        renderSlot(l.$slots, "default")
      ]),
      _: 3
    }));
  }
});
var Jr = defineComponent({
  __name: "HoverCardTrigger",
  props: {
    asChild: { type: Boolean }
  },
  setup(n) {
    const o = n, e = inject(ro), { primitiveElement: t, currentElement: l } = P();
    async function a(s) {
      await Wo(
        s,
        l.value,
        e == null ? void 0 : e.openDelay
      ) && (e == null || e.showTooltip());
    }
    async function r(s) {
      e.isHover = false, await Uo(s, e == null ? void 0 : e.closeDelay) && !(e != null && e.isHover) && (e == null || e.hideTooltip());
    }
    return (s, i) => (openBlock(), createBlock(unref(_e), { asChild: "" }, {
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
            onMouseenter: a,
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
var Zr = defineComponent({
  __name: "HoverCardPortal",
  props: {
    container: {}
  },
  setup(n) {
    const o = n;
    return (e, t) => (openBlock(), createBlock(qe, normalizeProps(guardReactiveProps(o)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Qr = defineComponent({
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
  setup(n) {
    const o = n, e = inject(ro);
    async function t(l) {
      e.isHover = false, await Uo(l, e == null ? void 0 : e.closeDelay) && !(e != null && e.isHover) && (e == null || e.hideTooltip());
    }
    return (l, a) => {
      var r, s;
      return (r = unref(e)) != null && r.open.value ? (openBlock(), createBlock(unref(ye), mergeProps({ key: 0 }, o, {
        onMouseover: a[0] || (a[0] = (i) => unref(e).isHover = true),
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
var Vr = defineComponent({
  __name: "HoverCardArrow",
  setup(n) {
    return (o, e) => (openBlock(), createBlock(unref(Ne)));
  }
});
var Tt = Symbol();
var jr = defineComponent({
  __name: "PopoverRoot",
  props: {
    defaultOpen: { type: Boolean, default: false },
    open: { type: Boolean, default: void 0 },
    modal: { type: Boolean, default: false }
  },
  emits: ["update:open"],
  setup(n, { emit: o }) {
    const e = n, t = K(e, "open", o, {
      defaultValue: e.defaultOpen,
      passive: true
    }), l = ref();
    return provide(Tt, {
      open: t,
      showPopover: () => {
        t.value = true;
      },
      hidePopover: () => {
        t.value = false;
      },
      triggerElement: l
    }), (a, r) => (openBlock(), createBlock(unref(fe), null, {
      default: withCtx(() => [
        renderSlot(a.$slots, "default")
      ]),
      _: 3
    }));
  }
});
var ei = defineComponent({
  __name: "PopoverTrigger",
  props: {
    asChild: { type: Boolean }
  },
  setup(n) {
    const o = n, e = inject(Tt), { primitiveElement: t, currentElement: l } = P();
    onMounted(() => {
      e.triggerElement.value = l.value;
    });
    function a() {
      e != null && e.open.value ? e == null || e.hidePopover() : e == null || e.showPopover();
    }
    return (r, s) => (openBlock(), createBlock(unref(_e), { asChild: "" }, {
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
            onClick: a
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
var ti = defineComponent({
  __name: "PopoverPortal",
  props: {
    container: {}
  },
  setup(n) {
    const o = n;
    return (e, t) => (openBlock(), createBlock(qe, normalizeProps(guardReactiveProps(o)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function ml(n, o) {
  if (o) {
    const e = o.getBoundingClientRect();
    return !(n.clientX > e.left && n.clientX < e.right && n.clientY > e.top && n.clientY < e.bottom);
  }
}
var oi = defineComponent({
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
  setup(n) {
    const o = n, e = inject(Tt), { primitiveElement: t, currentElement: l } = P();
    watchEffect(() => {
      l.value && (e != null && e.open.value ? (Ft(l.value), window.addEventListener("mousedown", a), window.addEventListener("keydown", r)) : e != null && e.triggerElement.value && (e == null || e.triggerElement.value.focus(), s()));
    });
    function a(i) {
      var p;
      if ((p = e == null ? void 0 : e.triggerElement.value) != null && p.contains(i.target))
        return;
      ml(i, l.value) && (e == null || e.hidePopover(), i.preventDefault(), i.stopPropagation());
    }
    function r(i) {
      i.key === "Escape" && (e == null || e.hidePopover());
    }
    function s() {
      window.removeEventListener("mousedown", a), window.removeEventListener("keydown", r);
    }
    return onUnmounted(() => {
      s();
    }), (i, d) => {
      var p;
      return (p = unref(e)) != null && p.open.value ? (openBlock(), createBlock(unref(ye), mergeProps({
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
var ni = defineComponent({
  __name: "PopoverArrow",
  setup(n) {
    return (o, e) => (openBlock(), createBlock(unref(Ne)));
  }
});
var ai = defineComponent({
  __name: "PopoverClose",
  props: {
    asChild: { type: Boolean }
  },
  setup(n) {
    const o = n, e = inject(Tt);
    return (t, l) => {
      var a, r, s;
      return openBlock(), createBlock(unref(X), {
        type: "button",
        "aria-expanded": ((a = unref(e)) == null ? void 0 : a.open.value) || false,
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
var ke = Symbol();
var li = defineComponent({
  __name: "DropdownMenuRoot",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modelValue: { type: Boolean },
    orientation: { default: "vertical" },
    dir: {}
  },
  emits: ["update:modelValue"],
  setup(n, { emit: o }) {
    const e = n, t = K(e, "modelValue", o, {
      passive: true
    }), l = ref(), a = ref();
    return provide(ke, {
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
      triggerElement: a,
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
var ri = defineComponent({
  __name: "DropdownMenuTrigger",
  props: {
    asChild: { type: Boolean }
  },
  setup(n) {
    const o = n, e = inject(
      ke
    ), { primitiveElement: t, currentElement: l } = P();
    onMounted(() => {
      e.triggerElement.value = l.value;
    });
    function a() {
      e != null && e.modelValue.value ? e == null || e.hideTooltip() : e == null || e.showTooltip();
    }
    async function r(s) {
      var i;
      (s.key === "ArrowDown" || s.key === "Enter" || s.keyCode === 32) && (e == null || e.showTooltip(), await nextTick(), e == null || e.changeSelected((i = e.itemsArray) == null ? void 0 : i[0]));
    }
    return (s, i) => (openBlock(), createBlock(unref(_e), { asChild: "" }, {
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
            onClick: a,
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
var io = (n, o) => {
  const e = n.__vccOpts || n;
  for (const [t, l] of o)
    e[t] = l;
  return e;
};
var vl = {};
function hl(n, o) {
  return openBlock(), createBlock(Teleport, { to: "body" }, [
    renderSlot(n.$slots, "default")
  ]);
}
var ii = io(vl, [["render", hl]]);
var si = defineComponent({
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
  setup(n) {
    const o = n, e = inject(ke), { primitiveElement: t, currentElement: l } = P(), { createCollection: a, getItems: r } = le();
    a(l), watchEffect(() => {
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
      return (p = unref(e)) != null && p.modelValue.value ? (openBlock(), createBlock(unref(ye), normalizeProps(mergeProps({ key: 0 }, o)), {
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
var ui = defineComponent({
  __name: "DropdownMenuArrow",
  setup(n) {
    return (o, e) => (openBlock(), createBlock(unref(Ne)));
  }
});
var nt = Symbol();
var di = defineComponent({
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
  setup(n, { emit: o }) {
    const e = n, t = K(e, "modelValue", o, {
      passive: true
    }), l = ref(), a = inject(nt);
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
      triggerId: ce(),
      contentId: ce(),
      parentContext: a
    }), (r, s) => (openBlock(), createBlock(unref(fe), null, {
      default: withCtx(() => [
        renderSlot(r.$slots, "default")
      ]),
      _: 3
    }));
  }
});
var ci = defineComponent({
  __name: "DropdownMenuItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean }
  },
  setup(n) {
    const o = n, e = inject(
      ke
    ), t = inject(
      nt
    );
    function l() {
      e != null && e.selectedElement.value && e.hideTooltip();
    }
    function a() {
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
        onEscapeKeydown: a
      }, {
        default: withCtx(() => [
          renderSlot(r.$slots, "default")
        ]),
        _: 3
      }, 8, ["disabled", "rootProvider", "subProvider", "orientation", "as-child"]);
    };
  }
});
var _l = Symbol();
var pi = defineComponent({
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
  setup(n, { emit: o }) {
    const e = n, { primitiveElement: t, currentElement: l } = P();
    return provide(_l, {
      type: e.type,
      modelValue: toRef(() => e.modelValue),
      changeModelValue: (a) => {
        if (e.type === "single")
          o("update:modelValue", a);
        else {
          let r = e.modelValue;
          if (r.includes(a)) {
            let s = r.findIndex((i) => i === a);
            r.splice(s, 1);
          } else
            r.push(a);
          o("update:modelValue", r);
        }
      },
      parentElement: l
    }), (a, r) => (openBlock(), createBlock(unref(D), {
      ref_key: "primitiveElement",
      ref: t,
      role: "group",
      dir: e.dir,
      "as-child": e.asChild,
      "aria-label": "Text alignment"
    }, {
      default: withCtx(() => [
        renderSlot(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["dir", "as-child"]));
  }
});
var fi = defineComponent({
  __name: "DropdownMenuSeparator",
  props: {
    orientation: {},
    decorative: { type: Boolean },
    asChild: { type: Boolean }
  },
  setup(n) {
    const o = n;
    return (e, t) => (openBlock(), createBlock(Ue, normalizeProps(guardReactiveProps(o)), null, 16));
  }
});
var so = Symbol();
var yl = ["id", "checked", "name", "disabled"];
var mi = defineComponent({
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
  setup(n, { emit: o }) {
    const e = n, t = inject(
      ke
    ), l = K(e, "modelValue", o, {
      passive: true
    }), a = computed(() => l.value ? "checked" : "unchecked");
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
        onHandleClick: r,
        onEscapeKeydown: s,
        role: "menuitemcheckbox",
        "data-state": a.value,
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
var vi = defineComponent({
  __name: "DropdownMenuItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean }
  },
  setup(n) {
    const o = n, e = inject(so);
    return (t, l) => {
      var a;
      return (a = unref(e)) != null && a.modelValue.value ? (openBlock(), createBlock(unref(ae), mergeProps({ key: 0 }, o, { style: { "pointer-events": "none" } }), {
        default: withCtx(() => [
          renderSlot(t.$slots, "default")
        ]),
        _: 3
      }, 16)) : createCommentVNode("", true);
    };
  }
});
var hi = defineComponent({
  __name: "DropdownMenuLabel",
  props: {
    for: {},
    asChild: { type: Boolean }
  },
  setup(n) {
    const o = n;
    return (e, t) => (openBlock(), createBlock(unref(it), normalizeProps(guardReactiveProps(o)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var wn = "RadioGroup";
var _i = defineComponent({
  __name: "DropdownMenuRadioGroup",
  props: {
    value: {},
    defaultValue: {},
    modelValue: {},
    asChild: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(n, { emit: o }) {
    const e = n, { primitiveElement: t, currentElement: l } = P(), a = K(e, "modelValue", o, {
      passive: true
    });
    return provide(wn, {
      modelValue: a,
      changeModelValue: (r) => {
        a.value = r;
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
  setup(n) {
    const o = n, e = inject(
      ke
    ), t = inject(
      wn
    ), l = computed(() => {
      var i;
      return ((i = t == null ? void 0 : t.modelValue) == null ? void 0 : i.value) === o.value ? "on" : "off";
    });
    function a() {
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
        onHandleClick: a,
        onEscapeKeydown: r,
        onClick: a,
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
var gi = defineComponent({
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
  setup(n) {
    const o = n, e = inject(
      ke
    ), t = inject(
      nt
    ), { primitiveElement: l, currentElement: a } = P(), { createCollection: r } = le();
    r(a), watchEffect(() => {
      a.value && t != null && t.modelValue.value && s();
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
        a.value.querySelectorAll(
          "[data-radix-vue-collection-item]:not([data-disabled])"
        )
      );
      return t.itemsArray = i, i;
    }
    return $e(a, (i) => {
      i.target.closest('[role="menuitem"]') || t == null || t.hideTooltip();
    }), (i, d) => {
      var p;
      return (p = unref(t)) != null && p.modelValue.value ? (openBlock(), createBlock(unref(ye), normalizeProps(mergeProps({ key: 0 }, o)), {
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
var bi = defineComponent({
  __name: "DropdownMenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean }
  },
  setup(n) {
    const o = n, e = inject(
      ke
    ), t = inject(
      nt
    ), { primitiveElement: l, currentElement: a } = P();
    onMounted(() => {
      t.triggerElement.value = a.value;
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
    return (c, m) => (openBlock(), createBlock(unref(_e), { asChild: "" }, {
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
var Se = Symbol();
var wi = defineComponent({
  __name: "ContextMenuRoot",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modelValue: { type: Boolean },
    orientation: { default: "vertical" },
    dir: {}
  },
  emits: ["update:modelValue"],
  setup(n, { emit: o }) {
    const e = n, t = K(e, "modelValue", o, {
      passive: true
    }), l = ref(), a = ref(), r = ref(0), s = ref(0);
    return provide(Se, {
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
      triggerElement: a,
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
var Ei = defineComponent({
  __name: "ContextMenuTrigger",
  props: {
    asChild: { type: Boolean }
  },
  setup(n) {
    const o = n, e = inject(
      Se
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
    function l(a) {
      e != null && e.modelValue.value ? e == null || e.hideTooltip() : (e.clientX.value = a.clientX, e.clientY.value = a.clientY, e == null || e.showTooltip());
    }
    return onMounted(() => {
      e.triggerElement.value = t;
    }), (a, r) => (openBlock(), createBlock(unref(_e), {
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
              renderSlot(a.$slots, "default")
            ]),
            _: 3
          }, 8, ["aria-expanded", "data-state", "as-child", "onContextmenu"])
        ];
      }),
      _: 3
    }));
  }
});
var gl = {};
function bl(n, o) {
  return openBlock(), createBlock(Teleport, { to: "body" }, [
    renderSlot(n.$slots, "default")
  ]);
}
var Ci = io(gl, [["render", bl]]);
var xi = defineComponent({
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
  setup(n) {
    const o = n, e = inject(Se), { primitiveElement: t, currentElement: l } = P(), { createCollection: a, getItems: r } = le();
    a(l), watchEffect(() => {
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
      return (m = unref(e)) != null && m.modelValue.value ? (openBlock(), createBlock(unref(ye), mergeProps({ key: 0 }, o, { "prioritize-position": "" }), {
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
var $i = defineComponent({
  __name: "ContextMenuArrow",
  setup(n) {
    return (o, e) => (openBlock(), createBlock(unref(Ne)));
  }
});
var at = Symbol();
var ki = defineComponent({
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
  setup(n, { emit: o }) {
    const e = n, t = K(e, "modelValue", o, {
      passive: true
    }), l = ref(), a = inject(at);
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
      triggerId: ce(),
      contentId: ce(),
      parentContext: a
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
  setup(n) {
    const o = n, e = inject(
      Se
    ), t = inject(
      at
    );
    function l() {
      e != null && e.selectedElement.value && e.hideTooltip();
    }
    function a() {
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
        onEscapeKeydown: a
      }, {
        default: withCtx(() => [
          renderSlot(r.$slots, "default")
        ]),
        _: 3
      }, 8, ["disabled", "rootProvider", "subProvider", "orientation", "as-child"]);
    };
  }
});
var wl = Symbol();
var Ai = defineComponent({
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
  setup(n, { emit: o }) {
    const e = n, { primitiveElement: t, currentElement: l } = P();
    return provide(wl, {
      type: e.type,
      modelValue: toRef(() => e.modelValue),
      changeModelValue: (a) => {
        if (e.type === "single")
          o("update:modelValue", a);
        else {
          let r = e.modelValue;
          if (r.includes(a)) {
            let s = r.findIndex((i) => i === a);
            r.splice(s, 1);
          } else
            r.push(a);
          o("update:modelValue", r);
        }
      },
      parentElement: l
    }), (a, r) => (openBlock(), createBlock(unref(D), {
      ref_key: "primitiveElement",
      ref: t,
      role: "group",
      dir: e.dir,
      "aria-label": "Text alignment"
    }, {
      default: withCtx(() => [
        renderSlot(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["dir"]));
  }
});
var Bi = defineComponent({
  __name: "ContextMenuSeparator",
  props: {
    orientation: {},
    decorative: { type: Boolean },
    asChild: { type: Boolean }
  },
  setup(n) {
    const o = n;
    return (e, t) => (openBlock(), createBlock(Ue, normalizeProps(guardReactiveProps(o)), null, 16));
  }
});
var uo = Symbol();
var El = ["id", "checked", "name", "disabled"];
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
  setup(n, { emit: o }) {
    const e = n, t = inject(
      Se
    ), l = K(e, "modelValue", o, {
      passive: true
    }), a = computed(() => l.value ? "checked" : "unchecked");
    function r() {
      l.value = !l.value;
    }
    function s() {
      t == null || t.hideTooltip();
    }
    return provide(uo, {
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
        "data-state": a.value,
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
          }), null, 16, El),
          renderSlot(i.$slots, "default")
        ]),
        _: 3
      }, 8, ["disabled", "rootProvider", "orientation", "as-child", "data-state", "aria-checked"]);
    };
  }
});
var Pi = defineComponent({
  __name: "ContextMenuItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean }
  },
  setup(n) {
    const o = n, e = inject(uo);
    return (t, l) => {
      var a;
      return (a = unref(e)) != null && a.modelValue.value ? (openBlock(), createBlock(unref(ae), {
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
var Oi = defineComponent({
  __name: "ContextMenuLabel",
  props: {
    for: {},
    asChild: { type: Boolean }
  },
  setup(n) {
    const o = n;
    return (e, t) => (openBlock(), createBlock(unref(it), normalizeProps(guardReactiveProps(o)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var En = "RadioGroup";
var Mi = defineComponent({
  __name: "ContextMenuRadioGroup",
  props: {
    value: {},
    defaultValue: {},
    modelValue: {},
    asChild: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(n, { emit: o }) {
    const e = n, { primitiveElement: t, currentElement: l } = P(), a = K(e, "modelValue", o, {
      passive: true
    });
    return provide(En, {
      modelValue: a,
      changeModelValue: (r) => {
        a.value = r;
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
var Di = defineComponent({
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
  setup(n) {
    const o = n, e = inject(
      Se
    ), t = inject(
      En
    ), l = computed(() => {
      var i;
      return ((i = t == null ? void 0 : t.modelValue) == null ? void 0 : i.value) === o.value ? "on" : "off";
    });
    function a() {
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
    return provide(uo, {
      modelValue: s
    }), (i, d) => {
      var p;
      return openBlock(), createBlock(re, {
        disabled: o.disabled,
        rootProvider: unref(e),
        orientation: (p = unref(e)) == null ? void 0 : p.orientation,
        "data-radix-vue-radio-value": o.value,
        "as-child": o.asChild,
        onHandleClick: a,
        onEscapeKeydown: r,
        onClick: a,
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
var Ri = defineComponent({
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
  setup(n) {
    const o = n, e = inject(
      Se
    ), t = inject(
      at
    ), { primitiveElement: l, currentElement: a } = P(), { createCollection: r } = le();
    r(a), watchEffect(() => {
      a.value && t != null && t.modelValue.value && s();
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
        a.value.querySelectorAll(
          "[data-radix-vue-collection-item]:not([data-disabled])"
        )
      );
      return t.itemsArray = i, i;
    }
    return $e(a, (i) => {
      i.target.closest('[role="menuitem"]') || t == null || t.hideTooltip();
    }), (i, d) => {
      var p;
      return (p = unref(t)) != null && p.modelValue.value ? (openBlock(), createBlock(unref(ye), normalizeProps(mergeProps({ key: 0 }, o)), {
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
var Ni = defineComponent({
  __name: "ContextMenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean }
  },
  setup(n) {
    const o = n, e = inject(
      Se
    ), t = inject(
      at
    ), { primitiveElement: l, currentElement: a } = P();
    onMounted(() => {
      t.triggerElement.value = a.value;
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
    return (c, m) => (openBlock(), createBlock(unref(_e), { asChild: "" }, {
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
  setup(n, { emit: o }) {
    const e = n, t = K(e, "modelValue", o, {
      defaultValue: e.defaultValue
    }), l = ref(), a = ref(), r = ref(false);
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
      triggerElement: a,
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
var Li = defineComponent({
  __name: "SelectTrigger",
  props: {
    asChild: { type: Boolean }
  },
  setup(n) {
    const o = n, e = inject(dt), { primitiveElement: t, currentElement: l } = P();
    onMounted(() => {
      e.triggerElement.value = l.value;
    });
    async function a() {
      var s, i;
      if (e == null || e.showTooltip(), await nextTick(), e != null && e.modelValue.value && !(e != null && e.multiple)) {
        const d = (s = e.itemsArray) == null ? void 0 : s.find((p) => p.getAttribute("data-radix-vue-radio-value") === (e == null ? void 0 : e.modelValue.value));
        e == null || e.changeSelected(d);
      } else
        e == null || e.changeSelected((i = e.itemsArray) == null ? void 0 : i[0]);
    }
    function r(s) {
      (s.key === "ArrowDown" || s.key === "ArrowUp" || s.key === "Enter" || s.keyCode === 32) && a();
    }
    return (s, i) => (openBlock(), createBlock(unref(_e), { asChild: "" }, {
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
            onClick: a,
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
var Ki = defineComponent({
  __name: "SelectPortal",
  props: {
    container: {}
  },
  setup(n) {
    const o = n;
    return (e, t) => (openBlock(), createBlock(qe, normalizeProps(guardReactiveProps(o)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Hi = defineComponent({
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
  setup(n) {
    const o = n, e = inject(dt), { primitiveElement: t, currentElement: l } = P(), { createCollection: a, getItems: r } = le();
    a(l), watchEffect(() => {
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
      return (p = unref(e)) != null && p.isOpen.value ? (openBlock(), createBlock(unref(ye), mergeProps({ key: 0 }, o, {
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
var zi = defineComponent({
  __name: "SelectArrow",
  setup(n) {
    return (o, e) => (openBlock(), createBlock(unref(Ne)));
  }
});
var Yi = defineComponent({
  __name: "SelectSeparator",
  props: {
    orientation: {},
    decorative: { type: Boolean },
    asChild: { type: Boolean }
  },
  setup(n) {
    const o = n;
    return (e, t) => (openBlock(), createBlock(Ue, {
      orientation: o.orientation,
      decorative: o.decorative
    }, null, 8, ["orientation", "decorative"]));
  }
});
var Cn = Symbol();
var Wi = defineComponent({
  __name: "SelectItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean }
  },
  setup(n) {
    const o = n, e = inject(dt), t = inject(Cn), l = computed(() => {
      var a;
      return e != null && e.multiple ? (a = e == null ? void 0 : e.modelValue.value) == null ? void 0 : a.includes(
        t.value
      ) : (e == null ? void 0 : e.modelValue.value) === (t == null ? void 0 : t.value);
    });
    return (a, r) => l.value ? (openBlock(), createBlock(unref(ae), {
      key: 0,
      "aria-hidden": "true",
      style: { "pointer-events": "none" },
      "as-child": o.asChild
    }, {
      default: withCtx(() => [
        renderSlot(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child"])) : createCommentVNode("", true);
  }
});
var Ui = defineComponent({
  __name: "SelectLabel",
  props: {
    for: {},
    asChild: { type: Boolean }
  },
  setup(n) {
    const o = n;
    return (e, t) => (openBlock(), createBlock(unref(it), normalizeProps(guardReactiveProps(o)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var qi = defineComponent({
  __name: "SelectGroup",
  props: {
    asChild: { type: Boolean }
  },
  setup(n) {
    const o = n;
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
var Gi = defineComponent({
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
  setup(n) {
    const o = n, e = inject(dt);
    function t() {
      return e == null || e.changeModelValue(o.value), e == null ? void 0 : e.hideTooltip();
    }
    return provide(Cn, {
      value: o.value
    }), (l, a) => {
      var r, s, i;
      return openBlock(), createBlock(re, {
        disabled: o.disabled,
        rootProvider: unref(e),
        orientation: (r = unref(e)) == null ? void 0 : r.orientation,
        "data-radix-vue-radio-value": o.value,
        "as-child": o.asChild,
        onHandleClick: t,
        onEscapeKeydown: a[0] || (a[0] = (d) => {
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
var Cl = {
  inheritAttrs: false
};
var Fi = defineComponent({
  ...Cl,
  __name: "MenubarRoot",
  props: {
    modelValue: {},
    defaultValue: {},
    orientation: { default: "horizontal" },
    dir: {}
  },
  emits: ["update:modelValue", "update:open"],
  setup(n, { emit: o }) {
    const e = n, t = K(e, "modelValue", o, {
      passive: true,
      defaultValue: e.defaultValue
    }), l = ref(), a = ref(), r = [], s = ref(), i = Gt();
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
      triggerElement: a,
      triggerItemsArray: r,
      itemsArray: [],
      orientation: e.orientation
    }), watch(
      i,
      () => {
        i.value === s.value && (a.value ? a.value.focus() : r.length && r[0].focus());
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
  setup(n) {
    const e = n.value ?? ce(), t = inject(Ce), l = ref(), a = computed(() => (t == null ? void 0 : t.modelValue.value) === e), r = inject(Et);
    return provide(Et, {
      value: e,
      isOpen: a,
      triggerElement: l,
      itemsArray: [],
      triggerId: e,
      contentId: ce(),
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
var xl = {
  inheritAttrs: false
};
var Ji = defineComponent({
  ...xl,
  __name: "MenubarTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean }
  },
  setup(n) {
    const o = n, e = inject(Ce), t = inject(
      Et
    ), { primitiveElement: l, currentElement: a } = P(), r = Gt();
    onMounted(() => {
      t.triggerElement.value = a.value, e.triggerItemsArray.push(a.value);
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
      const g = ne(
        v,
        a.value,
        a.value.parentElement,
        {
          arrowKeyOptions: "horizontal"
        }
      );
      g && (e == null || e.changeSelected(g), g.focus(), e != null && e.modelValue.value && (e == null || e.changeValue(g.id)));
    }
    function d() {
      if (!o.disabled && (e != null && e.modelValue.value)) {
        e == null || e.changeSelected(a.value), e == null || e.changeValue(t == null ? void 0 : t.value);
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
    const m = computed(() => t != null && t.isOpen.value ? "open" : "closed"), f = computed(() => r.value === a.value || (e == null ? void 0 : e.triggerElement.value) === a.value && (e == null ? void 0 : e.selectedElement.value));
    return watchEffect(() => {
      (e == null ? void 0 : e.selectedElement.value) === a.value && (e.triggerElement.value = a.value);
    }), watch(
      r,
      () => {
        r.value === a.value ? (e.selectedElement.value = a.value, e.triggerElement.value = a.value) : !(t != null && t.isOpen.value) && e.selectedElement.value === a.value && (e.selectedElement.value = void 0);
      },
      { immediate: true }
    ), (v, g) => (openBlock(), createBlock(unref(_e), { asChild: "" }, {
      default: withCtx(() => {
        var h2, x, C, S, B;
        return [
          createVNode(unref(X), mergeProps({
            role: "menuitem",
            ref_key: "primitiveElement",
            ref: l,
            id: (h2 = unref(t)) == null ? void 0 : h2.triggerId,
            "aria-expanded": (x = unref(t)) == null ? void 0 : x.isOpen.value,
            "aria-controls": (C = unref(t)) == null ? void 0 : C.contentId,
            "data-state": m.value,
            "data-orientation": (S = unref(e)) == null ? void 0 : S.orientation,
            "aria-haspopup": "menu",
            onKeydown: withModifiers(i, ["prevent"]),
            "data-radix-vue-collection-item": "",
            onMouseenter: d,
            onClick: c,
            "data-highlighted": f.value ? "" : null,
            "aria-disabled": o.disabled ? true : void 0,
            "data-disabled": o.disabled ? "" : void 0,
            "as-child": o.asChild,
            tabindex: ((B = unref(e)) == null ? void 0 : B.triggerElement.value) === unref(a) ? "0" : "-1"
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
var $l = {};
function kl(n, o) {
  return openBlock(), createBlock(Teleport, { to: "body" }, [
    renderSlot(n.$slots, "default")
  ]);
}
var Zi = io($l, [["render", kl]]);
var Qi = defineComponent({
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
  setup(n) {
    const o = n, e = inject(Ce), t = inject(
      Et
    ), { primitiveElement: l, currentElement: a } = P(), { createCollection: r } = le();
    r(a), watchEffect(() => {
      a.value && t != null && t.isOpen.value && s();
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
        a.value.querySelectorAll(
          "[data-radix-vue-collection-item]:not([data-disabled])"
        )
      );
      return t.itemsArray = d, d;
    }
    $e(a, (d) => {
      d.target.closest('[role="menuitem"]') || (e == null || e.changeValue(void 0), e.selectedElement.value = void 0);
    });
    const i = computed(() => t != null && t.isOpen ? "open" : "false");
    return (d, p) => {
      var c;
      return (c = unref(t)) != null && c.isOpen.value ? (openBlock(), createBlock(unref(ye), normalizeProps(mergeProps({ key: 0 }, o)), {
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
var Vi = defineComponent({
  __name: "MenubarArrow",
  setup(n) {
    return (o, e) => (openBlock(), createBlock(unref(Ne)));
  }
});
var lt = Symbol();
var ji = defineComponent({
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
  setup(n, { emit: o }) {
    const e = n, t = K(e, "modelValue", o, {
      passive: true
    }), l = ref(), a = inject(lt);
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
      triggerId: ce(),
      contentId: ce(),
      parentContext: a
    }), (r, s) => (openBlock(), createBlock(unref(fe), null, {
      default: withCtx(() => [
        renderSlot(r.$slots, "default")
      ]),
      _: 3
    }));
  }
});
var es = defineComponent({
  __name: "MenubarItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean }
  },
  setup(n) {
    const o = n, e = inject(Ce), t = inject(
      lt
    );
    function l() {
      e.changeValue(void 0), e.changeSelected(
        e.triggerElement.value
      );
    }
    function a(s) {
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
        onHorizontalKeydown: a,
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
var ts = defineComponent({
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
  setup(n, { emit: o }) {
    const e = n, { primitiveElement: t, currentElement: l } = P();
    return provide(Sl, {
      type: e.type,
      modelValue: toRef(() => e.modelValue),
      changeModelValue: (a) => {
        if (e.type === "single")
          o("update:modelValue", a);
        else {
          let r = e.modelValue;
          if (r.includes(a)) {
            let s = r.findIndex((i) => i === a);
            r.splice(s, 1);
          } else
            r.push(a);
          o("update:modelValue", r);
        }
      },
      parentElement: l
    }), (a, r) => (openBlock(), createBlock(unref(D), {
      ref_key: "primitiveElement",
      ref: t,
      role: "group",
      dir: e.dir,
      "as-child": e.asChild,
      "aria-label": "Text alignment"
    }, {
      default: withCtx(() => [
        renderSlot(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["dir", "as-child"]));
  }
});
var os = defineComponent({
  __name: "MenubarSeparator",
  props: {
    orientation: {},
    decorative: { type: Boolean },
    asChild: { type: Boolean }
  },
  setup(n) {
    const o = n;
    return (e, t) => (openBlock(), createBlock(Ue, normalizeProps(guardReactiveProps(o)), null, 16));
  }
});
var co = Symbol();
var Al = ["id", "checked", "name", "disabled"];
var ns = defineComponent({
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
  setup(n, { emit: o }) {
    const e = n, t = inject(Ce), l = K(e, "modelValue", o, {
      passive: true
    }), a = computed(() => l.value ? "checked" : "unchecked");
    function r() {
      l.value = !l.value;
    }
    provide(co, {
      modelValue: l
    });
    function s(d) {
      const p = ne(
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
        "data-state": a.value,
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
          }), null, 16, Al),
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
  setup(n) {
    const o = n, e = inject(co);
    return (t, l) => {
      var a;
      return (a = unref(e)) != null && a.modelValue.value ? (openBlock(), createBlock(unref(ae), mergeProps({ key: 0 }, o, { style: { "pointer-events": "none" } }), {
        default: withCtx(() => [
          renderSlot(t.$slots, "default")
        ]),
        _: 3
      }, 16)) : createCommentVNode("", true);
    };
  }
});
var ls = defineComponent({
  __name: "MenubarLabel",
  props: {
    for: {},
    asChild: { type: Boolean }
  },
  setup(n) {
    const o = n;
    return (e, t) => (openBlock(), createBlock(unref(it), normalizeProps(guardReactiveProps(o)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var xn = "RadioGroup";
var rs = defineComponent({
  __name: "MenubarRadioGroup",
  props: {
    value: {},
    defaultValue: {},
    modelValue: {},
    asChild: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(n, { emit: o }) {
    const e = n, { primitiveElement: t, currentElement: l } = P(), a = K(e, "modelValue", o, {
      passive: true
    });
    return provide(xn, {
      modelValue: a,
      changeModelValue: (r) => {
        a.value = r;
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
var is = defineComponent({
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
  setup(n) {
    const o = n, e = inject(Ce), t = inject(
      xn
    ), l = computed(() => {
      var d;
      return ((d = t == null ? void 0 : t.modelValue) == null ? void 0 : d.value) === o.value ? "on" : "off";
    });
    function a() {
      if (e != null && e.selectedElement.value)
        return t == null ? void 0 : t.changeModelValue(o.value);
    }
    const r = computed(
      () => {
        var d;
        return ((d = t == null ? void 0 : t.modelValue) == null ? void 0 : d.value) === o.value;
      }
    );
    provide(co, {
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
        onHandleClick: a,
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
var ss = defineComponent({
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
  setup(n) {
    const o = n, e = inject(Ce), t = inject(lt), { primitiveElement: l, currentElement: a } = P(), { createCollection: r } = le();
    r(a), watchEffect(() => {
      a.value && t != null && t.modelValue.value && s();
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
        a.value.querySelectorAll(
          "[data-radix-vue-collection-item]:not([data-disabled])"
        )
      );
      return t.itemsArray = i, i;
    }
    return $e(a, (i) => {
      i.target.closest('[role="menuitem"]') || t == null || t.hideTooltip();
    }), (i, d) => {
      var p;
      return (p = unref(t)) != null && p.modelValue.value ? (openBlock(), createBlock(unref(ye), normalizeProps(mergeProps({ key: 0 }, o)), {
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
var us = defineComponent({
  __name: "MenubarSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean }
  },
  setup(n) {
    const o = n, e = inject(Ce), t = inject(lt), { primitiveElement: l, currentElement: a } = P();
    onMounted(() => {
      t.triggerElement.value = a.value;
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
        const f = ne(
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
    return (m, f) => (openBlock(), createBlock(unref(_e), { asChild: "" }, {
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
var ds = defineComponent({
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
  setup(n, { emit: o }) {
    const e = n, t = K(e, "modelValue", o, {
      passive: true,
      defaultValue: e.defaultValue ?? ""
    }), l = ref(""), { primitiveElement: a, currentElement: r } = P(), { createCollection: s } = le();
    s();
    const i = () => {
      t.value = "";
    };
    $e(r, () => {
      i();
    }), zo(r, () => {
      i();
    });
    const d = ref(), p = ref(), c = ref(/* @__PURE__ */ new Map()), m = qt((f) => {
      l.value = t.value, t.value = f;
    }, e.delayDuration);
    return provide(Ae, {
      isRootMenu: true,
      modelValue: t,
      previousValue: l,
      baseId: ce(),
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
    }), (f, v) => (openBlock(), createBlock(unref(Ea), {
      ref_key: "primitiveElement",
      ref: a,
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
function po(n) {
  return n ? "open" : "closed";
}
function $n(n, o) {
  return `${n}-trigger-${o}`;
}
function kn(n, o) {
  return `${n}-content-${o}`;
}
function Ht(n) {
  const o = [], e = document.createTreeWalker(n, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (t) => {
      const l = t.tagName === "INPUT" && t.type === "hidden";
      return t.disabled || t.hidden || l ? NodeFilter.FILTER_SKIP : t.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; e.nextNode(); )
    o.push(e.currentNode);
  return o;
}
function Sn(n) {
  const o = document.activeElement;
  return n.some((e) => e === o ? true : (e.focus(), document.activeElement !== o));
}
function Bl(n) {
  return n.forEach((o) => {
    o.dataset.tabindex = o.getAttribute("tabindex") || "", o.setAttribute("tabindex", "-1");
  }), () => {
    n.forEach((o) => {
      const e = o.dataset.tabindex;
      o.setAttribute("tabindex", e);
    });
  };
}
var fo = Symbol();
var cs = defineComponent({
  __name: "NavigationMenuItem",
  props: {
    value: {},
    asChild: { type: Boolean }
  },
  setup(n) {
    const o = n, { getItems: e } = le(), t = inject(Ae), l = o.value || ce(), a = ref(), r = ref(), s = ref();
    let i = () => ({});
    const d = ref(false), p = async (v = "start") => {
      var h2, x, C;
      const g = (C = (x = (h2 = r.value) == null ? void 0 : h2.children) == null ? void 0 : x[0]) == null ? void 0 : C.el.parentElement;
      if (g) {
        i();
        const S = Ht(Z(g));
        S.length && Sn(v === "start" ? S : S.reverse());
      }
    };
    provide(fo, {
      value: l,
      triggerRef: a,
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
          C.length && (i = Bl(C));
        }
      }
    });
    const m = () => {
      var v;
      t == null || t.onItemSelect(""), (v = a.value) == null || v.focus();
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
        d.value = true, (x = a.value) == null || x.focus(), t.modelValue.value = "";
        return;
      }
      const h2 = ne(v, g, void 0, {
        itemsArray: e(),
        loop: false
      });
      h2 == null || h2.focus();
    };
    return (v, g) => (openBlock(), createBlock(unref(wa), {
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
var An = defineComponent({
  __name: "NavigationMenuContentImpl",
  props: {
    value: {},
    triggerRef: {},
    focusProxyRef: {},
    wasEscapeCloseRef: {},
    onContentFocusOutside: { type: Function }
  },
  emits: ["escape"],
  setup(n, { expose: o, emit: e }) {
    const t = n, { getItems: l } = le(), a = ref(), r = inject(Ae), s = $n(r.baseId, t.value), i = kn(r.baseId, t.value), d = ref(null), p = computed(() => {
      const v = l().map((B) => B.id.split("trigger-")[1]);
      (r == null ? void 0 : r.dir) === "rtl" && v.reverse();
      const g = v.indexOf(r.modelValue.value), h2 = v.indexOf(r.previousValue.value), x = t.value === (r == null ? void 0 : r.modelValue.value), C = h2 === v.indexOf(t.value);
      if (!x && !C)
        return d.value;
      const S = (() => {
        if (g !== h2) {
          if (x && h2 !== -1)
            return g > h2 ? "from-end" : "from-start";
          if (C && g !== -1)
            return g > h2 ? "to-start" : "to-end";
        }
        return null;
      })();
      return d.value = S, S;
    });
    zo(a, (f) => {
      var g, h2;
      t.onContentFocusOutside();
      const v = f.target;
      (h2 = (g = r.rootNavigationMenu) == null ? void 0 : g.value) != null && h2.contains(v) && f.preventDefault();
    });
    const c = (f) => {
      var C;
      const v = f.altKey || f.ctrlKey || f.metaKey, g = f.key === "Tab" && !v, h2 = Ht(f.currentTarget);
      if (g) {
        const S = document.activeElement, B = h2.findIndex(
          (T) => T === S
        ), N = f.shiftKey ? h2.slice(0, B).reverse() : h2.slice(B + 1, h2.length);
        if (Sn(N))
          f.preventDefault();
        else {
          (C = t.focusProxyRef.value) == null || C.focus();
          return;
        }
      }
      const x = ne(
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
      ref: a,
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
var ps = defineComponent({
  inheritAttrs: false,
  __name: "NavigationMenuContent",
  setup(n) {
    const o = inject(Ae), e = inject(fo), t = computed(() => (e == null ? void 0 : e.value) === (o == null ? void 0 : o.modelValue.value)), l = computed(() => ({
      value: e.value,
      triggerRef: e.triggerRef,
      focusProxyRef: e.focusProxyRef,
      wasEscapeCloseRef: e.wasEscapeCloseRef,
      onContentFocusOutside: e.onContentFocusOutside
      // onRootContentClose: itemContext!.onRootContentClose,
    })), a = ref();
    watch(a, () => {
      e.contentRef.value = a.value;
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
            createVNode(An, mergeProps({
              ref_key: "elementRef",
              ref: a,
              "data-state": unref(po)(t.value),
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
var fs = defineComponent({
  inheritAttrs: false,
  __name: "NavigationMenuIndicator",
  props: {
    asChild: { type: Boolean }
  },
  setup(n) {
    const o = n, { getItems: e } = le(), t = inject(Ae), l = ref(), a = computed(() => (t == null ? void 0 : t.orientation) === "horizontal"), r = computed(() => !!(t != null && t.modelValue.value)), s = ref();
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
        size: a.value ? s.value.offsetWidth : s.value.offsetHeight,
        offset: a.value ? s.value.offsetLeft : s.value.offsetTop
      });
    };
    return He(t.indicatorTrack, i), (d, p) => {
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
                  ...a.value ? {
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
var ms = defineComponent({
  __name: "NavigationMenuLink",
  props: {
    active: { type: Boolean },
    asChild: { type: Boolean }
  },
  setup(n) {
    const o = n, e = (t) => {
    };
    return (t, l) => (openBlock(), createBlock(unref(Fo), {
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
var Pl = defineComponent({
  __name: "VisuallyHidden",
  setup(n) {
    return (o, e) => (openBlock(), createBlock(unref(ae), {
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
var Ol = ["aria-owns"];
var vs = defineComponent({
  inheritAttrs: false,
  __name: "NavigationMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean }
  },
  setup(n) {
    const o = n, e = inject(Ae), t = inject(fo), { primitiveElement: l, currentElement: a } = P(), r = $n(e.baseId, t.value), s = kn(e.baseId, t.value), i = ref(false), d = ref(false), p = computed(() => (t == null ? void 0 : t.value) === (e == null ? void 0 : e.modelValue.value));
    onMounted(() => {
      t.triggerRef = a;
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
      const B = { horizontal: "ArrowDown", vertical: e.dir === "rtl" ? "ArrowLeft" : "ArrowRight" }[e.orientation];
      p.value && C.key === B && (t.onEntryKeyDown(), C.preventDefault(), C.stopPropagation());
    }, h2 = (C) => {
      t.focusProxyRef.value = Z(C);
    }, x = (C) => {
      var T, q;
      const S = (
        // @ts-ignore
        ((q = (T = t.contentRef.value) == null ? void 0 : T.children) == null ? void 0 : q[0].el).parentElement
      ), B = C.relatedTarget, R = B === a.value, N = S == null ? void 0 : S.contains(B);
      (R || !N) && t.onFocusProxyEnter(R ? "start" : "end");
    };
    return (C, S) => {
      var B;
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(unref(X), mergeProps({
          ref_key: "primitiveElement",
          ref: l,
          id: unref(r),
          disabled: C.disabled,
          "data-disabled": C.disabled ? "" : void 0,
          "data-state": unref(po)(p.value),
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
          createVNode(unref(Pl), {
            "aria-hidden": "",
            tabIndex: 0,
            ref: h2,
            onFocus: x
          }),
          (B = unref(e)) != null && B.viewport ? (openBlock(), createElementBlock("span", {
            key: 0,
            "aria-owns": unref(s)
          }, null, 8, Ol)) : createCommentVNode("", true)
        ], 64)) : createCommentVNode("", true)
      ], 64);
    };
  }
});
var hs = defineComponent({
  inheritAttrs: false,
  __name: "NavigationMenuList",
  props: {
    asChild: { type: Boolean }
  },
  setup(n) {
    const o = n, e = inject(Ae), { primitiveElement: t, currentElement: l } = P(), { setCollection: a } = le();
    return a(l), onMounted(() => {
      e == null || e.onIndicatorTrackChange(l.value);
    }), (r, s) => (openBlock(), createBlock(unref(D), {
      ref_key: "primitiveElement",
      ref: t,
      style: { position: "relative" }
    }, {
      default: withCtx(() => {
        var i;
        return [
          createVNode(unref(xa), mergeProps(r.$attrs, {
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
var _s = defineComponent({
  inheritAttrs: false,
  __name: "NavigationMenuViewport",
  setup(n) {
    const { primitiveElement: o, currentElement: e } = P(), t = inject(Ae), l = ref(), a = computed(() => !!(t != null && t.modelValue.value)), r = computed(
      () => a.value ? t.modelValue.value : t.previousValue.value
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
    return He(d, () => {
      d.value && (l.value = {
        width: d.value.offsetWidth,
        height: d.value.offsetHeight
      });
    }), (c, m) => (openBlock(), createBlock(unref(Ve), { present: a.value }, {
      default: withCtx(() => {
        var f, v, g, h2;
        return [
          createVNode(unref(D), mergeProps(c.$attrs, {
            ref_key: "primitiveElement",
            ref: o,
            "data-state": unref(po)(a.value),
            "data-orientation": (f = unref(t)) == null ? void 0 : f.orientation,
            style: {
              // Prevent interaction when animating out
              pointerEvents: !a.value && ((v = unref(t)) != null && v.isRootMenu) ? "none" : void 0,
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
                var C, S;
                return openBlock(), createBlock(unref(Ve), {
                  key: (C = x.props) == null ? void 0 : C.value,
                  present: r.value === ((S = x.props) == null ? void 0 : S.value)
                }, {
                  default: withCtx(() => [
                    createVNode(An, mergeProps({
                      ref_for: true,
                      ref_key: "items",
                      ref: i
                    }, { ...x.props, ...x.parentProps }, {
                      onEscape: (B) => p(x)
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
  setup(n) {
    const o = n, { primitiveElement: e, currentElement: t } = P(), l = ref(0), a = ref(0), r = ref(), s = ref(), i = ref(), d = ref(), p = ref(false), c = ref(false), m = (C) => {
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
    }), (C, S) => (openBlock(), createBlock(unref(D), {
      ref_key: "primitiveElement",
      ref: e,
      "as-child": o.asChild,
      style: normalizeStyle({
        position: "relative",
        // Pass corner sizes as CSS vars to reduce re-renders of context consumers
        ["--radix-scroll-area-corner-width"]: l.value + "px",
        ["--radix-scroll-area-corner-height"]: a.value + "px"
      })
    }, {
      default: withCtx(() => [
        renderSlot(C.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "style"]));
  }
});
var gs = defineComponent({
  __name: "ScrollAreaViewport",
  props: {
    asChild: { type: Boolean }
  },
  setup(n) {
    const o = n, e = inject(
      me
    ), { primitiveElement: t, currentElement: l } = P(), a = ref();
    return onMounted(() => {
      e == null || e.onViewportChange(a.value), e == null || e.onContentChange(l.value);
    }), (r, s) => {
      var i, d;
      return openBlock(), createElementBlock("div", {
        ref_key: "viewportElement",
        ref: a,
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
function Ml(n, [o, e]) {
  return Math.min(e, Math.max(o, n));
}
function Bn(n, o) {
  return (e) => {
    if (n[0] === n[1] || o[0] === o[1])
      return o[0];
    const t = (o[1] - o[0]) / (n[1] - n[0]);
    return o[0] + t * (e - n[0]);
  };
}
function Pt(n) {
  const o = Tn(n.viewport, n.content), e = n.scrollbar.paddingStart + n.scrollbar.paddingEnd, t = (n.scrollbar.size - e) * o;
  return Math.max(t, 18);
}
function Tn(n, o) {
  const e = n / o;
  return isNaN(e) ? 0 : e;
}
var Dl = (n, o = () => {
}) => {
  let e = { left: n.scrollLeft, top: n.scrollTop }, t = 0;
  return function l() {
    const a = { left: n.scrollLeft, top: n.scrollTop }, r = e.left !== a.left, s = e.top !== a.top;
    (r || s) && o(), e = a, t = window.requestAnimationFrame(l);
  }(), () => window.cancelAnimationFrame(t);
};
function Do(n, o, e = "ltr") {
  const t = Pt(o), l = o.scrollbar.paddingStart + o.scrollbar.paddingEnd, a = o.scrollbar.size - l, r = o.content - o.viewport, s = a - t, i = e === "ltr" ? [0, r] : [r * -1, 0], d = Ml(
    n,
    i
  );
  return Bn([0, r], [0, s])(d);
}
function ft(n) {
  return n ? parseInt(n, 10) : 0;
}
function Rl(n, o, e, t = "ltr") {
  const l = Pt(e), a = l / 2, r = o || a, s = l - r, i = e.scrollbar.paddingStart + r, d = e.scrollbar.size - e.scrollbar.paddingEnd - s, p = e.content - e.viewport, c = t === "ltr" ? [0, p] : [p * -1, 0];
  return Bn(
    [i, d],
    c
  )(n);
}
function Ro(n, o) {
  return n > 0 && n < o;
}
var Pn = defineComponent({
  __name: "ScrollAreaScrollbarImpl",
  props: {
    isHorizontal: { type: Boolean }
  },
  emits: ["onDragScroll", "onWheelScroll", "onThumbPointerDown"],
  setup(n, { emit: o }) {
    const e = n, t = inject(
      me
    ), l = inject(
      ct
    ), a = inject(Xe), { primitiveElement: r, currentElement: s } = P(), i = ref(""), d = ref();
    function p(h2) {
      var x, C;
      if (d.value) {
        const S = h2.clientX - ((x = d.value) == null ? void 0 : x.left), B = h2.clientY - ((C = d.value) == null ? void 0 : C.top);
        o("onDragScroll", { x: S, y: B });
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
      var B;
      if (!l)
        return;
      const x = h2.target, C = (B = s.value) == null ? void 0 : B.contains(x), S = l.sizes.value.content - l.sizes.value.viewport;
      C && l.handleWheelScroll(h2, S);
    };
    onMounted(() => {
      document.addEventListener("wheel", v, { passive: false });
    }), onUnmounted(() => {
      document.removeEventListener("wheel", v);
    });
    const g = () => {
      var h2, x, C, S, B, R;
      s.value && (e.isHorizontal ? l == null || l.handleSizeChange({
        content: ((h2 = t == null ? void 0 : t.viewport.value) == null ? void 0 : h2.scrollWidth) ?? 0,
        viewport: ((x = t == null ? void 0 : t.viewport.value) == null ? void 0 : x.offsetWidth) ?? 0,
        scrollbar: {
          size: ((C = s.value) == null ? void 0 : C.clientWidth) ?? 0,
          paddingStart: ft(getComputedStyle(s.value).paddingLeft),
          paddingEnd: ft(getComputedStyle(s.value).paddingRight)
        }
      }) : l == null || l.handleSizeChange({
        content: ((S = t == null ? void 0 : t.viewport.value) == null ? void 0 : S.scrollHeight) ?? 0,
        viewport: ((B = t == null ? void 0 : t.viewport.value) == null ? void 0 : B.offsetHeight) ?? 0,
        scrollbar: {
          size: ((R = s.value) == null ? void 0 : R.clientHeight) ?? 0,
          paddingStart: ft(getComputedStyle(s.value).paddingLeft),
          paddingEnd: ft(getComputedStyle(s.value).paddingRight)
        }
      }));
    };
    return He(s, g), He(t == null ? void 0 : t.content, g), (h2, x) => {
      var C;
      return openBlock(), createBlock(unref(D), {
        ref_key: "primitiveElement",
        ref: r,
        style: { position: "absolute" },
        "data-scrollbarimpl": "",
        "as-child": (C = unref(a)) == null ? void 0 : C.asChild.value,
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
var Nl = defineComponent({
  __name: "ScrollAreaScrollbarX",
  setup(n) {
    const o = inject(
      me
    ), e = inject(
      ct
    ), { primitiveElement: t, currentElement: l } = P();
    onMounted(() => {
      l.value && (o == null || o.onScrollbarYChange(l.value));
    });
    const a = computed(() => e == null ? void 0 : e.sizes.value);
    return (r, s) => {
      var i, d;
      return openBlock(), createBlock(Pn, {
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
          ["--radix-scroll-area-thumb-width"]: a.value ? unref(Pt)(a.value) + "px" : void 0
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
  setup(n) {
    const o = inject(
      me
    ), e = inject(
      ct
    ), { primitiveElement: t, currentElement: l } = P();
    onMounted(() => {
      l.value && (o == null || o.onScrollbarYChange(l.value));
    });
    const a = computed(() => e == null ? void 0 : e.sizes.value);
    return (r, s) => {
      var i, d;
      return openBlock(), createBlock(Pn, {
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
          ["--radix-scroll-area-thumb-height"]: a.value ? unref(Pt)(a.value) + "px" : void 0
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
var mo = defineComponent({
  __name: "ScrollAreaScrollbarVisible",
  setup(n) {
    const o = inject(
      me
    ), e = inject(
      Xe
    ), t = ref({
      content: 0,
      viewport: 0,
      scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
    }), l = computed(() => {
      const h2 = Tn(t.value.viewport, t.value.content);
      return h2 > 0 && h2 < 1;
    }), a = ref(), r = ref(0), s = (h2, x) => {
      if (m.value) {
        const C = o.viewport.value.scrollLeft + h2.deltaY;
        o.viewport.value.scrollLeft = C, Ro(C, x) && h2.preventDefault();
      } else {
        const C = o.viewport.value.scrollTop + h2.deltaY;
        o.viewport.value.scrollTop = C, Ro(C, x) && h2.preventDefault();
      }
    }, i = (h2, x) => {
      m.value ? r.value = x.x : r.value = x.y;
    }, d = (h2) => {
      r.value = 0;
    }, p = (h2) => {
      t.value = h2;
    };
    function c(h2, x) {
      return Rl(
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
            if (o != null && o.viewport.value && a.value) {
              const h2 = o == null ? void 0 : o.viewport.value.scrollLeft, x = Do(
                h2,
                t.value,
                o == null ? void 0 : o.dir
              );
              a.value.style.transform = `translate3d(${x}px, 0, 0)`;
            }
          } else if (o != null && o.viewport.value && a.value) {
            const h2 = o == null ? void 0 : o.viewport.value.scrollTop, x = Do(h2, t.value);
            a.value.style.transform = `translate3d(0, ${x}px, 0)`;
          }
        },
        onThumbChange: (h2) => {
          a.value = h2;
        },
        onDragScroll: (h2) => {
          m.value ? o.viewport.value.scrollLeft = c(
            h2,
            o.dir
          ) : o.viewport.value.scrollTop = c(h2);
        }
      }
    ), (h2, x) => m.value ? (openBlock(), createBlock(Nl, { key: 0 }, {
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
var On = defineComponent({
  __name: "ScrollAreaScrollbarAuto",
  setup(n) {
    const o = inject(
      me
    ), e = inject(
      Xe
    ), t = ref(false), l = qt(() => {
      if (o != null && o.viewport.value) {
        const a = (o == null ? void 0 : o.viewport.value.offsetWidth) < (o == null ? void 0 : o.viewport.value.scrollWidth), r = (o == null ? void 0 : o.viewport.value.offsetHeight) < (o == null ? void 0 : o.viewport.value.scrollHeight);
        t.value = e != null && e.isHorizontal.value ? a : r;
      }
    }, 10);
    return He(o == null ? void 0 : o.viewport, l), He(o == null ? void 0 : o.content, l), (a, r) => t.value ? (openBlock(), createBlock(mo, mergeProps({ key: 0 }, a.$attrs, {
      "data-state": t.value ? "visible" : "hidden"
    }), {
      default: withCtx(() => [
        renderSlot(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-state"])) : createCommentVNode("", true);
  }
});
var Ll = {
  inheritAttrs: false
};
var Kl = defineComponent({
  ...Ll,
  __name: "ScrollAreaScrollbarHover",
  setup(n) {
    const o = inject(me);
    inject(
      Xe
    );
    let e;
    const t = ref(false), l = () => {
      window.clearTimeout(e), t.value = true;
    }, a = () => {
      e = window.setTimeout(() => {
        t.value = false;
      }, o == null ? void 0 : o.scrollHideDelay);
    };
    return onMounted(() => {
      const r = o == null ? void 0 : o.scrollArea.value;
      r && (r.addEventListener("pointerenter", l), r.addEventListener("pointerleave", a));
    }), onUnmounted(() => {
      const r = o == null ? void 0 : o.scrollArea.value;
      r && (window.clearTimeout(e), r.removeEventListener("pointerenter", l), r.removeEventListener("pointerleave", a));
    }), (r, s) => t.value ? (openBlock(), createBlock(On, mergeProps({ key: 0 }, r.$attrs, {
      "data-state": t.value ? "visible" : "hidden"
    }), {
      default: withCtx(() => [
        renderSlot(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-state"])) : createCommentVNode("", true);
  }
});
var Hl = defineComponent({
  __name: "ScrollAreaScrollbarScroll",
  setup(n) {
    const o = inject(
      me
    ), e = inject(
      Xe
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
    const a = qt(() => l("SCROLL_END"), 100);
    return watchEffect(() => {
      const r = o == null ? void 0 : o.viewport.value, s = e != null && e.isHorizontal.value ? "scrollLeft" : "scrollTop";
      if (r) {
        let i = r[s];
        const d = () => {
          const p = r[s];
          i !== p && (l("SCROLL"), a()), i = p;
        };
        r.addEventListener("scroll", d);
      }
    }), (r, s) => unref(t) !== "hidden" ? (openBlock(), createBlock(mo, normalizeProps(mergeProps({ key: 0 }, r.$attrs)), {
      default: withCtx(() => [
        renderSlot(r.$slots, "default")
      ]),
      _: 3
    }, 16)) : createCommentVNode("", true);
  }
});
var Xe = Symbol();
var zl = {
  inheritAttrs: false
};
var bs = defineComponent({
  ...zl,
  __name: "ScrollAreaScrollbar",
  props: {
    orientation: { default: "vertical" },
    forceMount: { type: Boolean, default: void 0 },
    asChild: { type: Boolean }
  },
  setup(n) {
    const o = n, e = inject(me), t = computed(() => o.orientation === "horizontal");
    watch(
      t,
      () => {
        t.value ? e == null || e.onScrollbarXEnabledChange(true) : e == null || e.onScrollbarYEnabledChange(true);
      },
      { immediate: true }
    ), onUnmounted(() => {
      e == null || e.onScrollbarXEnabledChange(false), e == null || e.onScrollbarYEnabledChange(false);
    });
    const { orientation: l, forceMount: a, asChild: r } = toRefs(o);
    return provide(Xe, {
      orientation: l,
      forceMount: a,
      isHorizontal: t,
      asChild: r
    }), (s, i) => {
      var d, p, c, m;
      return ((d = unref(e)) == null ? void 0 : d.type) === "hover" ? (openBlock(), createBlock(Kl, mergeProps({ key: 0 }, s.$attrs, { forceMount: unref(a) }), {
        default: withCtx(() => [
          renderSlot(s.$slots, "default")
        ]),
        _: 3
      }, 16, ["forceMount"])) : ((p = unref(e)) == null ? void 0 : p.type) === "scroll" ? (openBlock(), createBlock(Hl, mergeProps({ key: 1 }, s.$attrs, { forceMount: unref(a) }), {
        default: withCtx(() => [
          renderSlot(s.$slots, "default")
        ]),
        _: 3
      }, 16, ["forceMount"])) : ((c = unref(e)) == null ? void 0 : c.type) === "auto" ? (openBlock(), createBlock(On, mergeProps({ key: 2 }, s.$attrs, { forceMount: unref(a) }), {
        default: withCtx(() => [
          renderSlot(s.$slots, "default")
        ]),
        _: 3
      }, 16, ["forceMount"])) : ((m = unref(e)) == null ? void 0 : m.type) === "always" ? (openBlock(), createBlock(mo, mergeProps({ key: 3 }, s.$attrs, { forceMount: unref(a) }), {
        default: withCtx(() => [
          renderSlot(s.$slots, "default")
        ]),
        _: 3
      }, 16, ["forceMount"])) : createCommentVNode("", true);
    };
  }
});
var ws = defineComponent({
  __name: "ScrollAreaThumb",
  props: {
    asChild: { type: Boolean }
  },
  setup(n) {
    const o = n, e = inject(
      me
    ), t = inject(
      ct
    ), l = (m) => {
      const v = m.target.getBoundingClientRect(), g = m.clientX - v.left, h2 = m.clientY - v.top;
      t == null || t.handleThumbDown(m, { x: g, y: h2 });
    }, a = (m) => {
      t == null || t.handleThumbUp(m);
    }, { primitiveElement: r, currentElement: s } = P(), i = ref(), d = computed(() => e == null ? void 0 : e.viewport.value), p = () => {
      if (!i.value) {
        const m = Dl(
          d.value,
          t == null ? void 0 : t.onThumbPositionChange
        );
        i.value = m, t == null || t.onThumbPositionChange();
      }
    }, c = computed(() => t == null ? void 0 : t.sizes.value);
    return ra(c, () => {
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
        onPointerup: a
      }, null, 8, ["data-state", "style", "as-child"]);
    };
  }
});
export {
  Ul as AccordionContent,
  ql as AccordionHeader,
  Wl as AccordionItem,
  Gl as AccordionRoot,
  Fl as AccordionTrigger,
  Mr as AlertDialogAction,
  Tr as AlertDialogCancel,
  Ar as AlertDialogContent,
  Or as AlertDialogDescription,
  Br as AlertDialogOverlay,
  Sr as AlertDialogPortal,
  $r as AlertDialogRoot,
  Pr as AlertDialogTitle,
  kr as AlertDialogTrigger,
  nr as AspectRatio,
  Yr as AvatarFallback,
  zr as AvatarImage,
  Hr as AvatarRoot,
  Jl as CheckboxIndicator,
  Xl as CheckboxRoot,
  Aa as CollapsibleContent,
  $a as CollapsibleRoot,
  ka as CollapsibleTrigger,
  $i as ContextMenuArrow,
  Ti as ContextMenuCheckboxItem,
  xi as ContextMenuContent,
  Ai as ContextMenuGroup,
  Si as ContextMenuItem,
  Pi as ContextMenuItemIndicator,
  Oi as ContextMenuLabel,
  Ci as ContextMenuPortal,
  Mi as ContextMenuRadioGroup,
  Di as ContextMenuRadioItem,
  wi as ContextMenuRoot,
  Bi as ContextMenuSeparator,
  ki as ContextMenuSub,
  Ri as ContextMenuSubContent,
  Ni as ContextMenuSubTrigger,
  Ei as ContextMenuTrigger,
  Er as DialogClose,
  br as DialogContent,
  xr as DialogDescription,
  wr as DialogOverlay,
  gr as DialogPortal,
  _r as DialogRoot,
  Cr as DialogTitle,
  yr as DialogTrigger,
  ui as DropdownMenuArrow,
  mi as DropdownMenuCheckboxItem,
  si as DropdownMenuContent,
  pi as DropdownMenuGroup,
  ci as DropdownMenuItem,
  vi as DropdownMenuItemIndicator,
  hi as DropdownMenuLabel,
  ii as DropdownMenuPortal,
  _i as DropdownMenuRadioGroup,
  yi as DropdownMenuRadioItem,
  li as DropdownMenuRoot,
  fi as DropdownMenuSeparator,
  di as DropdownMenuSub,
  gi as DropdownMenuSubContent,
  bi as DropdownMenuSubTrigger,
  ri as DropdownMenuTrigger,
  Vr as HoverCardArrow,
  Qr as HoverCardContent,
  Zr as HoverCardPortal,
  Xr as HoverCardRoot,
  Jr as HoverCardTrigger,
  jl as Label,
  Vi as MenubarArrow,
  ns as MenubarCheckboxItem,
  Qi as MenubarContent,
  ts as MenubarGroup,
  es as MenubarItem,
  as as MenubarItemIndicator,
  ls as MenubarLabel,
  Xi as MenubarMenu,
  Zi as MenubarPortal,
  rs as MenubarRadioGroup,
  is as MenubarRadioItem,
  Fi as MenubarRoot,
  os as MenubarSeparator,
  ji as MenubarSub,
  ss as MenubarSubContent,
  us as MenubarSubTrigger,
  Ji as MenubarTrigger,
  ps as NavigationMenuContent,
  fs as NavigationMenuIndicator,
  cs as NavigationMenuItem,
  ms as NavigationMenuLink,
  hs as NavigationMenuList,
  ds as NavigationMenuRoot,
  vs as NavigationMenuTrigger,
  _s as NavigationMenuViewport,
  ni as PopoverArrow,
  ai as PopoverClose,
  oi as PopoverContent,
  ti as PopoverPortal,
  jr as PopoverRoot,
  ei as PopoverTrigger,
  hr as ProgressIndicator,
  vr as ProgressRoot,
  mr as RadioGroupIndicator,
  fr as RadioGroupItem,
  pr as RadioGroupRoot,
  ys as ScrollAreaRoot,
  bs as ScrollAreaScrollbar,
  ws as ScrollAreaThumb,
  gs as ScrollAreaViewport,
  zi as SelectArrow,
  Hi as SelectContent,
  qi as SelectGroup,
  Gi as SelectItem,
  Wi as SelectItemIndicator,
  Ui as SelectLabel,
  Ki as SelectPortal,
  Ii as SelectRoot,
  Yi as SelectSeparator,
  Li as SelectTrigger,
  Vl as Separator,
  cr as SliderRange,
  sr as SliderRoot,
  ur as SliderThumb,
  dr as SliderTrack,
  Zl as SwitchRoot,
  Ql as SwitchThumb,
  rr as TabsContent,
  lr as TabsList,
  ar as TabsRoot,
  ir as TabsTrigger,
  er as Toggle,
  or as ToggleGroupItem,
  tr as ToggleGroupRoot,
  Rr as ToolbarButton,
  Nr as ToolbarLink,
  Dr as ToolbarRoot,
  Kr as ToolbarSeparator,
  Ir as ToolbarToggleGroup,
  Lr as ToolbarToggleItem,
  Fr as TooltipArrow,
  Gr as TooltipContent,
  qr as TooltipPortal,
  Wr as TooltipRoot,
  Ur as TooltipTrigger
};
//# sourceMappingURL=radix-vue.js.map
