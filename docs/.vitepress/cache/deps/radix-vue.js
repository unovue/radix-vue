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

// node_modules/.pnpm/radix-vue@0.1.3_vue@3.3.4/node_modules/radix-vue/dist/index.js
var Re = (a, t) => {
  const e = a.__vccOpts || a;
  for (const [o, l] of t)
    e[o] = l;
  return e;
};
var Aa = {};
function Ta(a, t) {
  var e, o, l;
  return openBlock(), createBlock(resolveDynamicComponent(
    // @ts-ignore we can ignore this as we have validated the existence of 1 child in Primitive.vue
    (l = (o = (e = a.$slots).default) == null ? void 0 : o.call(e)[0].children) == null ? void 0 : l[0]
  ), normalizeProps(guardReactiveProps(a.$attrs)), null, 16);
}
var Pa = Re(Aa, [["render", Ta]]);
var Oa = Object.defineProperty;
var Ba = Object.defineProperties;
var Ma = Object.getOwnPropertyDescriptors;
var ro = Object.getOwnPropertySymbols;
var Da = Object.prototype.hasOwnProperty;
var Ra = Object.prototype.propertyIsEnumerable;
var io = (a, t, e) => t in a ? Oa(a, t, { enumerable: true, configurable: true, writable: true, value: e }) : a[t] = e;
var Na = (a, t) => {
  for (var e in t || (t = {}))
    Da.call(t, e) && io(a, e, t[e]);
  if (ro)
    for (var e of ro(t))
      Ra.call(t, e) && io(a, e, t[e]);
  return a;
};
var Ia = (a, t) => Ba(a, Ma(t));
function La(a, t) {
  var e;
  const o = shallowRef();
  return watchEffect(() => {
    o.value = a();
  }, Ia(Na({}, t), {
    flush: (e = t == null ? void 0 : t.flush) != null ? e : "sync"
  })), readonly(o);
}
function Ka(a, t) {
  let e, o, l;
  const n = ref(true), r = () => {
    n.value = true, l();
  };
  watch(a, r, { flush: "sync" });
  const u = typeof t == "function" ? t : t.get, i = typeof t == "function" ? void 0 : t.set, d = customRef((p, c) => (o = p, l = c, {
    get() {
      return n.value && (e = u(), n.value = false), o(), e;
    },
    set(m) {
      i == null || i(m);
    }
  }));
  return Object.isExtensible(d) && (d.trigger = r), d;
}
function Ao(a) {
  return getCurrentScope() ? (onScopeDispose(a), true) : false;
}
function Ha(a) {
  let t = false, e;
  const o = effectScope(true);
  return (...l) => (t || (e = o.run(() => a(...l)), t = true), e);
}
function ct(a) {
  return typeof a == "function" ? a() : unref(a);
}
var To = typeof window < "u";
var za = (a) => typeof a < "u";
var pt = () => {
};
var Ya = Wa();
function Wa() {
  var a;
  return To && ((a = window == null ? void 0 : window.navigator) == null ? void 0 : a.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
}
function Ua(a, t) {
  function e(...o) {
    return new Promise((l, n) => {
      Promise.resolve(a(() => t.apply(this, o), { fn: t, thisArg: this, args: o })).then(l).catch(n);
    });
  }
  return e;
}
function qa(a, t = {}) {
  let e, o, l = pt;
  const n = (u) => {
    clearTimeout(u), l(), l = pt;
  };
  return (u) => {
    const i = ct(a), d = ct(t.maxWait);
    return e && n(e), i <= 0 || d !== void 0 && d <= 0 ? (o && (n(o), o = null), Promise.resolve(u())) : new Promise((p, c) => {
      l = t.rejectOnCancel ? c : p, d && !o && (o = setTimeout(() => {
        e && n(e), o = null, p(u());
      }, d)), e = setTimeout(() => {
        o && n(o), o = null, p(u());
      }, i);
    });
  };
}
function It(a, t = 200, e = {}) {
  return Ua(
    qa(t, e),
    a
  );
}
function Ga(a, t, e = {}) {
  var o, l;
  const {
    flush: n = "sync",
    deep: r = false,
    immediate: u = true,
    direction: i = "both",
    transform: d = {}
  } = e;
  let p, c;
  const m = (o = d.ltr) != null ? o : (v) => v, f = (l = d.rtl) != null ? l : (v) => v;
  return (i === "both" || i === "ltr") && (p = watch(
    a,
    (v) => t.value = m(v),
    { flush: n, deep: r, immediate: u }
  )), (i === "both" || i === "rtl") && (c = watch(
    t,
    (v) => a.value = f(v),
    { flush: n, deep: r, immediate: u }
  )), () => {
    p == null || p(), c == null || c();
  };
}
function Xa(a, t, e) {
  const o = watch(a, (...l) => (nextTick(() => o()), t(...l)), e);
}
function J(a) {
  var t;
  const e = ct(a);
  return (t = e == null ? void 0 : e.$el) != null ? t : e;
}
var gt = To ? window : void 0;
function Je(...a) {
  let t, e, o, l;
  if (typeof a[0] == "string" || Array.isArray(a[0]) ? ([e, o, l] = a, t = gt) : [t, e, o, l] = a, !t)
    return pt;
  Array.isArray(e) || (e = [e]), Array.isArray(o) || (o = [o]);
  const n = [], r = () => {
    n.forEach((p) => p()), n.length = 0;
  }, u = (p, c, m, f) => (p.addEventListener(c, m, f), () => p.removeEventListener(c, m, f)), i = watch(
    () => [J(t), ct(l)],
    ([p, c]) => {
      r(), p && n.push(
        ...e.flatMap((m) => o.map((f) => u(p, m, f, c)))
      );
    },
    { immediate: true, flush: "post" }
  ), d = () => {
    i(), r();
  };
  return Ao(d), d;
}
var so = false;
function Ce(a, t, e = {}) {
  const { window: o = gt, ignore: l = [], capture: n = true, detectIframe: r = false } = e;
  if (!o)
    return;
  Ya && !so && (so = true, Array.from(o.document.body.children).forEach((m) => m.addEventListener("click", pt)));
  let u = true;
  const i = (m) => l.some((f) => {
    if (typeof f == "string")
      return Array.from(o.document.querySelectorAll(f)).some((v) => v === m.target || m.composedPath().includes(v));
    {
      const v = J(f);
      return v && (m.target === v || m.composedPath().includes(v));
    }
  }), p = [
    Je(o, "click", (m) => {
      const f = J(a);
      if (!(!f || f === m.target || m.composedPath().includes(f))) {
        if (m.detail === 0 && (u = !i(m)), !u) {
          u = true;
          return;
        }
        t(m);
      }
    }, { passive: true, capture: n }),
    Je(o, "pointerdown", (m) => {
      const f = J(a);
      f && (u = !m.composedPath().includes(f) && !i(m));
    }, { passive: true }),
    r && Je(o, "blur", (m) => {
      setTimeout(() => {
        var f;
        const v = J(a);
        ((f = o.document.activeElement) == null ? void 0 : f.tagName) === "IFRAME" && !(v != null && v.contains(o.document.activeElement)) && t(m);
      }, 0);
    })
  ].filter(Boolean);
  return () => p.forEach((m) => m());
}
function Lt(a = {}) {
  var t;
  const { window: e = gt } = a, o = (t = a.document) != null ? t : e == null ? void 0 : e.document, l = Ka(
    () => null,
    () => o == null ? void 0 : o.activeElement
  );
  return e && (Je(e, "blur", (n) => {
    n.relatedTarget === null && l.trigger();
  }, true), Je(e, "focus", l.trigger, true)), l;
}
function Ja() {
  const a = ref(false);
  return getCurrentInstance() && onMounted(() => {
    a.value = true;
  }), a;
}
function Fa(a) {
  const t = Ja();
  return computed(() => (t.value, !!a()));
}
function Za(a) {
  return JSON.parse(JSON.stringify(a));
}
var uo = Object.getOwnPropertySymbols;
var Qa = Object.prototype.hasOwnProperty;
var Va = Object.prototype.propertyIsEnumerable;
var ja = (a, t) => {
  var e = {};
  for (var o in a)
    Qa.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && uo)
    for (var o of uo(a))
      t.indexOf(o) < 0 && Va.call(a, o) && (e[o] = a[o]);
  return e;
};
function ze(a, t, e = {}) {
  const o = e, { window: l = gt } = o, n = ja(o, ["window"]);
  let r;
  const u = Fa(() => l && "ResizeObserver" in l), i = () => {
    r && (r.disconnect(), r = void 0);
  }, d = computed(
    () => Array.isArray(a) ? a.map((m) => J(m)) : [J(a)]
  ), p = watch(
    d,
    (m) => {
      if (i(), u.value && l) {
        r = new ResizeObserver(t);
        for (const f of m)
          f && r.observe(f, n);
      }
    },
    { immediate: true, flush: "post", deep: true }
  ), c = () => {
    i(), p();
  };
  return Ao(c), {
    isSupported: u,
    stop: c
  };
}
function K(a, t, e, o = {}) {
  var l, n, r;
  const {
    clone: u = false,
    passive: i = false,
    eventName: d,
    deep: p = false,
    defaultValue: c,
    shouldEmit: m
  } = o, f = getCurrentInstance(), v = e || (f == null ? void 0 : f.emit) || ((l = f == null ? void 0 : f.$emit) == null ? void 0 : l.bind(f)) || ((r = (n = f == null ? void 0 : f.proxy) == null ? void 0 : n.$emit) == null ? void 0 : r.bind(f == null ? void 0 : f.proxy));
  let h2 = d;
  t || (t = "modelValue"), h2 = h2 || `update:${t.toString()}`;
  const y = (k) => u ? typeof u == "function" ? u(k) : Za(k) : k, x = () => za(a[t]) ? y(a[t]) : c, $ = (k) => {
    m ? m(k) && v(h2, k) : v(h2, k);
  };
  if (i) {
    const k = x(), P = ref(k);
    return watch(
      () => a[t],
      (D) => P.value = y(D)
    ), watch(
      P,
      (D) => {
        (D !== a[t] || p) && $(D);
      },
      { deep: p }
    ), P;
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
var Po = (a, t) => {
  const e = (o) => {
    const l = J(a);
    (l == null ? void 0 : l.contains(o.relatedTarget)) || t(o);
  };
  onMounted(() => {
    const o = J(a);
    o == null || o.addEventListener("focusout", e);
  }), onUnmounted(() => {
    const o = J(a);
    o == null || o.removeEventListener("focusout", e);
  });
};
function oe(a, t, e, o = {}) {
  const {
    arrowKeyOptions: l = "both",
    attributeName: n = "data-radix-vue-collection-item",
    itemsArray: r = [],
    loop: u = true,
    dir: i = "ltr",
    preventScroll: d = true
  } = o, [p, c, m, f] = [
    a.key === "ArrowRight",
    a.key === "ArrowLeft",
    a.key === "ArrowUp",
    a.key === "ArrowDown"
  ], v = m || f, h2 = p || c;
  if (!v && !h2 || l === "vertical" && h2 || l === "horizontal" && v)
    return null;
  const y = e ? Array.from(e.querySelectorAll(`[${n}]`)) : r;
  return y.length ? (d && a.preventDefault(), Oo(y, t, {
    goForward: v ? f : i === "ltr" ? p : c,
    loop: u
  })) : null;
}
function Oo(a, t, { goForward: e, loop: o }, l = a.length) {
  if (--l === 0)
    return null;
  const n = a.indexOf(t), r = e ? n + 1 : n - 1;
  if (!o && (r < 0 || r >= a.length))
    return null;
  const u = (r + a.length) % a.length, i = a[u];
  return i ? i.hasAttribute("disabled") && i.getAttribute("disabled") !== "false" ? Oo(
    a,
    i,
    { goForward: e, loop: o },
    l
  ) : i : null;
}
async function Bo(a, t, e = 500) {
  let o = true, l, n;
  const r = new Promise((d) => {
    n = d, l = setTimeout(() => {
      i(), d(o);
    }, e);
  });
  function u() {
    o = false, i(), clearTimeout(l), l = void 0, n(false);
  }
  function i() {
    t.removeEventListener("mouseleave", u);
  }
  return t.addEventListener("mouseleave", u), r;
}
var Mo = (a, t = 300) => {
  let e = true, o, l;
  const n = a.target, r = new Promise((d) => {
    l = d, o = setTimeout(() => {
      i(), d(e);
    }, t);
  });
  function u() {
    e = false, i(), clearTimeout(o), o = void 0, l(false);
  }
  function i() {
    n.removeEventListener("mouseenter", u);
  }
  return n.addEventListener("mouseenter", u), r;
};
function Do(a, t) {
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
var en = "data-radix-vue-collection-item";
var co = Symbol();
var le = () => {
  const a = (l) => {
    provide(co, {
      collectionRef: l
    });
  }, t = inject(co);
  return { createCollection: a, setCollection: (l) => {
    t && (t.collectionRef = l);
  }, getItems: (l) => {
    const n = l ?? J(t == null ? void 0 : t.collectionRef);
    return n ? Array.from(
      n.querySelectorAll(
        `[${en}]:not([data-disabled])`
      )
    ) : [];
  } };
};
var tn = (a) => {
  const t = ref(), e = computed(() => {
    var l;
    return ((l = t.value) == null ? void 0 : l.width) ?? 0;
  }), o = computed(() => {
    var l;
    return ((l = t.value) == null ? void 0 : l.height) ?? 0;
  });
  return onMounted(() => {
    const l = J(a);
    if (l) {
      t.value = { width: l.offsetWidth, height: l.offsetHeight };
      const n = new ResizeObserver((r) => {
        if (!Array.isArray(r) || !r.length)
          return;
        const u = r[0];
        let i, d;
        if ("borderBoxSize" in u) {
          const p = u.borderBoxSize, c = Array.isArray(p) ? p[0] : p;
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
var on = Ha(() => ({ count: ref(0) }));
var ue = (a) => {
  const { count: t } = on();
  return a || t.value++, a || `radix-${t.value}`;
};
function Kt(a) {
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
function Ro(a) {
  return a ? a.flatMap((t) => t.type === Fragment ? Ro(t.children) : [t]) : [];
}
var an = [
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
var Z = an.reduce((a, t) => {
  const e = defineComponent({
    props: {
      asChild: Boolean
    },
    setup(o, { slots: l, attrs: n }) {
      var u, i;
      if (!!o.asChild) {
        const d = Ro((u = l.default) == null ? void 0 : u.call(l)), p = getCurrentInstance();
        if (d.length > 1) {
          const m = (i = p == null ? void 0 : p.parent) != null && i.type.__name ? `<${p.parent.type.__name} />` : "component";
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
        return typeof d[0].type == "string" ? () => h(d[0]) : () => h(Pa, () => {
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
var B = () => {
  const a = ref(), t = computed(() => J(a));
  return {
    primitiveElement: a,
    currentElement: t
  };
};
var No = Z.a;
var X = Z.button;
var M = Z.div;
Z.form;
var Io = Z.h2;
var nn = Z.h3;
var ln = Z.img;
Z.input;
var at = Z.label;
var rn = Z.li;
var sn = Z.nav;
Z.ol;
var Lo = Z.p;
var ae = Z.span;
var un = Z.svg;
var dn = Z.ul;
var Ht = Symbol();
var cn = defineComponent({
  __name: "CollapsibleRoot",
  props: {
    asChild: { type: Boolean, default: false },
    defaultOpen: { type: Boolean, default: false },
    open: { type: Boolean, default: void 0 },
    disabled: { type: Boolean }
  },
  emits: ["update:open"],
  setup(a, { emit: t }) {
    const e = a, o = K(e, "open", t, {
      defaultValue: e.defaultOpen,
      passive: true
    }), l = K(e, "disabled");
    return provide(Ht, {
      contentId: ue(),
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
var pn = defineComponent({
  __name: "CollapsibleTrigger",
  props: {
    asChild: { type: Boolean, default: false }
  },
  setup(a) {
    const t = a, e = inject(
      Ht
    );
    return (o, l) => {
      var n, r, u, i, d, p, c, m;
      return openBlock(), createBlock(unref(X), {
        type: "button",
        asChild: t.asChild,
        "aria-controls": (n = unref(e)) == null ? void 0 : n.contentId,
        "aria-expanded": ((r = unref(e)) == null ? void 0 : r.open.value) || false,
        "data-state": (u = unref(e)) != null && u.open.value ? "open" : "closed",
        "data-disabled": (d = (i = unref(e)) == null ? void 0 : i.disabled) != null && d.value ? "" : void 0,
        disabled: (c = (p = unref(e)) == null ? void 0 : p.disabled) == null ? void 0 : c.value,
        onClick: (m = unref(e)) == null ? void 0 : m.onOpenToggle
      }, {
        default: withCtx(() => [
          renderSlot(o.$slots, "default")
        ]),
        _: 3
      }, 8, ["asChild", "aria-controls", "aria-expanded", "data-state", "data-disabled", "disabled", "onClick"]);
    };
  }
});
function fn(a, t) {
  const e = ref({}), o = ref(a.value), l = ref("none"), n = a.value ? "mounted" : "unmounted", { state: r, dispatch: u } = Do(n, {
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
      const m = l.value, f = At(t);
      a.value ? u("MOUNT") : f === "none" || (d == null ? void 0 : d.display) === "none" ? u("UNMOUNT") : u(p && m !== f ? "ANIMATION_OUT" : "UNMOUNT"), o.value = a.value;
    }
  }), t) {
    const d = (c) => {
      const f = At(t).includes(
        c.animationName
      );
      c.target === t && f && u("ANIMATION_END");
    }, p = (c) => {
      c.target === t && (l.value = At(t));
    };
    t.addEventListener("animationstart", p), t.addEventListener("animationcancel", d), t.addEventListener("animationend", d);
  } else
    u("ANIMATION_END");
  const i = computed(
    () => ["mounted", "unmountSuspended"].includes(r.value)
  );
  return e.value = getComputedStyle(t), {
    isPresent: i
  };
}
function At(a) {
  return a && getComputedStyle(a).animationName || "none";
}
var Ze = defineComponent({
  __name: "Presence",
  props: {
    present: { type: Boolean }
  },
  setup(a, { expose: t }) {
    const e = a, { present: o } = toRefs(e), l = useSlots();
    let n = ref(false);
    const r = {
      created(i) {
        const { isPresent: d } = fn(o, i);
        Ga(n, d, { direction: "rtl" });
      }
    }, u = () => {
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
    }), (i, d) => (openBlock(), createBlock(u));
  }
});
var mn = defineComponent({
  inheritAttrs: false,
  __name: "CollapsibleContent",
  props: {
    asChild: { type: Boolean, default: false }
  },
  setup(a) {
    const t = a, e = inject(
      Ht
    ), o = ref(), { primitiveElement: l, currentElement: n } = B(), r = ref(0), u = ref(0), i = computed(() => e == null ? void 0 : e.open.value), d = ref(i.value), p = ref();
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
        const m = c.getBoundingClientRect();
        u.value = m.height, r.value = m.width, d.value || (c.style.transitionDuration = p.value.transitionDuration, c.style.animationName = p.value.animationName);
      },
      {
        immediate: true
      }
    ), requestAnimationFrame(() => {
      d.value = false;
    }), (c, m) => (openBlock(), createBlock(unref(Ze), {
      ref_key: "presentRef",
      ref: o,
      present: unref(e).open.value
    }, {
      default: withCtx(() => {
        var f, v, h2, y, x;
        return [
          createVNode(unref(M), mergeProps({
            ref_key: "primitiveElement",
            ref: l
          }, c.$attrs, {
            asChild: t.asChild,
            "data-state": (f = unref(e)) != null && f.open.value ? "open" : "closed",
            "data-disabled": (h2 = (v = unref(e)) == null ? void 0 : v.disabled) != null && h2.value ? "true" : void 0,
            id: (y = unref(e)) == null ? void 0 : y.contentId,
            hidden: !((x = unref(e)) != null && x.open),
            style: {
              ["--radix-collapsible-content-height"]: `${u.value}px`,
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
var zt = Symbol();
var Yt = Symbol();
var nt = Symbol();
var Ko = defineComponent({
  __name: "AccordionImpl",
  props: {
    disabled: { type: Boolean },
    orientation: { default: "vertical" },
    dir: {}
  },
  setup(a) {
    const t = a, { primitiveElement: e, currentElement: o } = B();
    return provide(nt, {
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
var bt = Symbol();
var vn = [
  "Home",
  "End",
  "ArrowDown",
  "ArrowUp",
  "ArrowLeft",
  "ArrowRight"
];
var Tl = defineComponent({
  __name: "AccordionItem",
  props: {
    disabled: { type: Boolean },
    value: {},
    asChild: { type: Boolean }
  },
  setup(a) {
    const t = a, e = inject(
      nt
    ), o = inject(
      zt
    ), l = computed({
      get: () => t.value && (o == null ? void 0 : o.modelValue.value.includes(t.value)) || false,
      set: (i) => {
        i ? o == null || o.onItemOpen(t.value) : o == null || o.onItemClose(t.value);
      }
    }), n = computed(
      () => (e == null ? void 0 : e.disabled) || t.disabled
    );
    provide(bt, {
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
    const u = (i) => {
      if (!vn.includes(i.key))
        return;
      const d = (e == null ? void 0 : e.direction) === "ltr", p = i.target, c = r().filter(
        // (item) => !item.ref.current?.disabled
        // (item) => !item.disabled
        (P) => P
      ), m = c.findIndex(
        // (item) => item.ref.current === target
        (P) => P === p
      ), f = c.length;
      if (m === -1)
        return;
      i.preventDefault();
      let v = m;
      const h2 = 0, y = f - 1, x = () => {
        v = m + 1, v > y && (v = h2);
      }, $ = () => {
        v = m - 1, v < h2 && (v = y);
      };
      switch (i.key) {
        case "Home":
          v = h2;
          break;
        case "End":
          v = y;
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
      const k = v % f;
      c[k].focus();
    };
    return (i, d) => {
      var p;
      return openBlock(), createBlock(unref(cn), {
        "data-orientation": (p = unref(e)) == null ? void 0 : p.orientation,
        "data-state": l.value ? "open" : "closed",
        disabled: n.value,
        open: l.value,
        "onUpdate:open": d[0] || (d[0] = (c) => l.value = c),
        onKeydown: u
      }, {
        default: withCtx(() => [
          renderSlot(i.$slots, "default")
        ]),
        _: 3
      }, 8, ["data-orientation", "data-state", "disabled", "open"]);
    };
  }
});
var Pl = defineComponent({
  __name: "AccordionContent",
  setup(a) {
    const t = inject(
      nt
    ), e = inject(
      bt
    );
    return (o, l) => {
      var n, r;
      return openBlock(), createBlock(unref(mn), {
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
var Ol = defineComponent({
  __name: "AccordionHeader",
  setup(a) {
    const t = inject(
      nt
    ), e = inject(
      bt
    );
    return (o, l) => {
      var n, r, u;
      return openBlock(), createBlock(unref(nn), {
        "data-orientation": (n = unref(t)) == null ? void 0 : n.orientation,
        "data-state": (r = unref(e)) != null && r.open ? "open" : "closed",
        "data-disabled": (u = unref(e)) != null && u.disabled ? "" : void 0
      }, {
        default: withCtx(() => [
          renderSlot(o.$slots, "default")
        ]),
        _: 3
      }, 8, ["data-orientation", "data-state", "data-disabled"]);
    };
  }
});
var hn = defineComponent({
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
    return provide(zt, {
      modelValue: o,
      onItemOpen: (r) => {
        o.value = [...o.value, r];
      },
      onItemClose: (r) => {
        o.value = [...o.value].filter(
          (u) => u !== r
        );
      }
    }), provide(Yt, {
      collapsible: false
    }), (r, u) => (openBlock(), createBlock(Ko, normalizeProps(guardReactiveProps(e)), {
      default: withCtx(() => [
        renderSlot(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var _n = defineComponent({
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
    return provide(zt, {
      modelValue: o,
      onItemOpen: (l) => {
        o.value = l;
      },
      onItemClose: (l) => {
        e.collapsible && (o.value = "");
      }
    }), provide(Yt, {
      collapsible: e.collapsible
    }), (l, n) => (openBlock(), createBlock(Ko, normalizeProps(guardReactiveProps(e)), {
      default: withCtx(() => [
        renderSlot(l.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Bl = defineComponent({
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
    return (o, l) => e.type === "multiple" ? (openBlock(), createBlock(hn, mergeProps({ key: 0 }, e, {
      "onUpdate:modelValue": l[0] || (l[0] = (n) => t("update:modelValue", n))
    }), {
      default: withCtx(() => [
        renderSlot(o.$slots, "default")
      ]),
      _: 3
    }, 16)) : (openBlock(), createBlock(_n, mergeProps({ key: 1 }, e, {
      "onUpdate:modelValue": l[1] || (l[1] = (n) => t("update:modelValue", n))
    }), {
      default: withCtx(() => [
        renderSlot(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Ml = defineComponent({
  __name: "AccordionTrigger",
  setup(a) {
    const t = inject(
      nt
    ), e = inject(
      bt
    ), o = inject(Yt);
    return (l, n) => {
      var r, u, i, d;
      return openBlock(), createBlock(unref(pn), {
        "data-radix-vue-collection-item": "",
        "aria-disabled": ((r = unref(e)) == null ? void 0 : r.open) && !((u = unref(o)) != null && u.collapsible) || void 0,
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
var yn = ["id", "checked", "name", "disabled", "required", "data-state"];
var Ho = Symbol();
var Dl = defineComponent({
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
    provide(Ho, {
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
        }), null, 16, yn),
        renderSlot(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["asChild", "value", "aria-checked", "data-state", "data-disabled"]));
  }
});
var Rl = defineComponent({
  __name: "CheckboxIndicator",
  props: {
    asChild: { type: Boolean, default: false },
    forceMount: { type: Boolean }
  },
  setup(a) {
    const t = a, e = inject(Ho);
    return (o, l) => {
      var n;
      return (n = unref(e)) != null && n.modelValue.value ? (openBlock(), createBlock(unref(ae), {
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
var gn = ["id", "checked", "name", "disabled", "required", "data-state", "data-disabled"];
var zo = Symbol();
var Nl = defineComponent({
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
    provide(zo, {
      open: o,
      toggleOpen: l,
      disabled: e.disabled
    });
    function n(r) {
      r.key === "Enter" && l();
    }
    return (r, u) => (openBlock(), createBlock(unref(M), {
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
        }), null, 16, gn),
        renderSlot(r.$slots, "default")
      ]),
      _: 3
    }, 8, ["value", "aria-checked", "data-state", "data-disabled"]));
  }
});
var Il = defineComponent({
  __name: "SwitchThumb",
  setup(a) {
    const t = inject(zo);
    return (e, o) => {
      var l, n, r, u;
      return openBlock(), createBlock(unref(ae), {
        "data-state": (n = (l = unref(t)) == null ? void 0 : l.open) != null && n.value ? "checked" : "unchecked",
        "data-disabled": (r = unref(t)) != null && r.disabled ? "" : void 0,
        onClick: (u = unref(t)) == null ? void 0 : u.toggleOpen
      }, {
        default: withCtx(() => [
          renderSlot(e.$slots, "default")
        ]),
        _: 3
      }, 8, ["data-state", "data-disabled", "onClick"]);
    };
  }
});
var qe = defineComponent({
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
var Ll = defineComponent({
  __name: "Separator",
  props: {
    asChild: { type: Boolean, default: false },
    orientation: { default: "horizontal" },
    decorative: { type: Boolean }
  },
  setup(a) {
    const t = a;
    return (e, o) => (openBlock(), createBlock(qe, {
      orientation: t.orientation,
      decorative: t.decorative,
      "data-orientation": t.orientation
    }, null, 8, ["orientation", "decorative", "data-orientation"]));
  }
});
var Kl = defineComponent({
  __name: "Label",
  props: {
    for: {
      type: String,
      required: false
    }
  },
  setup(a) {
    const t = a;
    return (e, o) => (openBlock(), createBlock(unref(at), {
      for: t.for
    }, {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["for"]));
  }
});
var bn = ["id", "checked", "name", "disabled", "data-state", "data-disabled"];
var Hl = defineComponent({
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
    function r(u) {
      u.key === "Enter" && l();
    }
    return (u, i) => (openBlock(), createBlock(unref(M), {
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
        }), null, 16, bn),
        renderSlot(u.$slots, "default")
      ]),
      _: 3
    }, 8, ["value", "aria-checked", "data-state", "data-disabled"]));
  }
});
var Yo = Symbol();
var zl = defineComponent({
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
    const e = a, { primitiveElement: o, currentElement: l } = B(), n = ref(), r = ref(), u = Lt(), i = ref([]), d = K(e, "modelValue", t, {
      defaultValue: e.defaultValue,
      passive: true
    });
    provide(Yo, {
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
      u,
      () => {
        if (u.value === l.value && !e.disabled) {
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
    ), (c, m) => (openBlock(), createBlock(unref(M), {
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
var Yl = defineComponent({
  __name: "ToggleGroupItem",
  props: {
    asChild: { type: Boolean, default: false },
    value: {},
    disabled: { type: Boolean }
  },
  setup(a) {
    const t = a, e = inject(
      Yo
    ), { primitiveElement: o, currentElement: l } = B();
    onMounted(() => {
      var c;
      (c = e == null ? void 0 : e.itemsArray.value) == null || c.push(l.value);
    });
    const n = computed(() => {
      var c, m, f;
      return (e == null ? void 0 : e.type) === "multiple" ? (m = (c = e == null ? void 0 : e.modelValue) == null ? void 0 : c.value) != null && m.includes(t.value) ? "on" : "off" : ((f = e == null ? void 0 : e.modelValue) == null ? void 0 : f.value) === t.value ? "on" : "off";
    }), r = computed(() => {
      var c, m, f;
      return (e == null ? void 0 : e.type) === "multiple" ? (m = (c = e == null ? void 0 : e.modelValue) == null ? void 0 : c.value) == null ? void 0 : m.includes(t.value) : ((f = e == null ? void 0 : e.modelValue) == null ? void 0 : f.value) === t.value;
    });
    function u(c) {
      if (!(e != null && e.rovingFocus) || e != null && e.rootDisabled)
        return;
      (c.key === "ArrowLeft" || c.key === "ArrowRight" || c.key === "ArrowUp" || c.key === "ArrowDown") && c.preventDefault();
      const m = oe(
        c,
        l.value,
        e == null ? void 0 : e.parentElement.value,
        { loop: e == null ? void 0 : e.loop }
      );
      m && (m.focus(), e.currentFocusedElement.value = m);
    }
    const i = computed(() => {
      var c, m, f;
      return (c = e == null ? void 0 : e.currentFocusedElement) != null && c.value ? ((f = e == null ? void 0 : e.currentFocusedElement) == null ? void 0 : f.value) === l.value ? "0" : "-1" : ((m = e == null ? void 0 : e.modelValue) == null ? void 0 : m.value) === t.value ? "0" : "-1";
    }), d = computed(() => (e == null ? void 0 : e.type) === "multiple" ? "checkbox" : "radio");
    function p() {
      e != null && e.rootDisabled || (e == null || e.changeModelValue(t.value), e.currentFocusedElement.value = l.value);
    }
    return (c, m) => {
      var f, v;
      return openBlock(), createBlock(unref(X), {
        "as-child": t.asChild,
        ref_key: "primitiveElement",
        ref: o,
        type: "button",
        role: d.value,
        "data-state": n.value,
        disabled: t.disabled || ((f = unref(e)) == null ? void 0 : f.rootDisabled),
        "data-disabled": t.disabled ? "" : void 0,
        "aria-checked": r.value,
        "data-orientation": (v = unref(e)) == null ? void 0 : v.orientation,
        onClick: p,
        onKeydown: u,
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
var Wl = defineComponent({
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
var Et = Symbol();
var Ul = defineComponent({
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
    const e = a, o = ref(), l = ref(), n = K(e, "modelValue", t, {
      defaultValue: e.defaultValue,
      passive: true
    });
    return provide(Et, {
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
    }), (r, u) => (openBlock(), createBlock(unref(M), {
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
var ql = defineComponent({
  __name: "TabsList",
  props: {
    asChild: { type: Boolean, default: false },
    loop: { type: Boolean, default: true }
  },
  setup(a) {
    const t = a, e = inject(Et), { primitiveElement: o, currentElement: l } = B();
    return onMounted(() => {
      e.parentElement.value = l.value, e.loop = t.loop;
    }), (n, r) => {
      var u, i;
      return openBlock(), createBlock(unref(M), {
        asChild: n.asChild,
        role: "tablist",
        ref_key: "primitiveElement",
        ref: o,
        "aria-orientation": (u = unref(e)) == null ? void 0 : u.orientation,
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
var Gl = defineComponent({
  __name: "TabsContent",
  props: {
    asChild: { type: Boolean, default: false },
    value: {},
    forceMount: { type: Boolean }
  },
  setup(a) {
    const t = a, e = inject(Et), o = computed(() => {
      var l;
      return ((l = e == null ? void 0 : e.modelValue) == null ? void 0 : l.value) === t.value ? "active" : "inactive";
    });
    return (l, n) => {
      var r, u, i;
      return ((u = (r = unref(e)) == null ? void 0 : r.modelValue) == null ? void 0 : u.value) === t.value ? (openBlock(), createBlock(unref(M), {
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
var Xl = defineComponent({
  __name: "TabsTrigger",
  props: {
    value: {},
    disabled: { type: Boolean, default: false },
    asChild: { type: Boolean, default: false }
  },
  setup(a) {
    const t = a, e = inject(Et), { primitiveElement: o, currentElement: l } = B();
    function n(i) {
      e == null || e.changeModelValue(i);
    }
    function r(i) {
      const d = oe(
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
    const u = computed(() => {
      var i, d, p;
      return (i = e == null ? void 0 : e.currentFocusedElement) != null && i.value ? ((p = e == null ? void 0 : e.currentFocusedElement) == null ? void 0 : p.value) === l.value ? "0" : "-1" : ((d = e == null ? void 0 : e.modelValue) == null ? void 0 : d.value) === t.value ? "0" : "-1";
    });
    return (i, d) => {
      var p, c, m, f, v;
      return openBlock(), createBlock(unref(X), {
        ref_key: "primitiveElement",
        ref: o,
        type: "button",
        asChild: t.asChild,
        role: "tab",
        "aria-selected": ((c = (p = unref(e)) == null ? void 0 : p.modelValue) == null ? void 0 : c.value) === t.value ? "true" : "false",
        "data-state": ((f = (m = unref(e)) == null ? void 0 : m.modelValue) == null ? void 0 : f.value) === t.value ? "active" : "inactive",
        disabled: t.disabled,
        "data-disabled": t.disabled ? "" : void 0,
        tabindex: u.value,
        "data-orientation": (v = unref(e)) == null ? void 0 : v.orientation,
        "data-radix-vue-collection-item": "",
        "data-radix-vue-tab-value": t.value,
        onClick: d[0] || (d[0] = (h2) => n(t.value)),
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
var En = ["value", "aria-valuenow", "name"];
var Wt = Symbol();
var Jl = defineComponent({
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
    provide(Wt, {
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
    function u(f) {
      t("update:modelValue", m(f, e.step));
    }
    let i;
    function d(f) {
      n.value && n.value.focus(), f.preventDefault(), l.value && (i = l.value.getBoundingClientRect(), f.clientX - 10 - r.value > i.left && f.clientX - 10 - r.value < i.left + i.width && u(
        Math.round(
          (f.clientX - 10 - r.value - i.left) / i.width * 100
        )
      ), document.addEventListener("pointermove", p), document.addEventListener("pointerup", c));
    }
    const p = (f) => {
      n.value && n.value.focus(), f.clientX - 10 - r.value > i.left && f.clientX - 10 - r.value < i.left + i.width && u(
        (f.clientX - 10 - r.value - i.left) / i.width * 100
      ), f.clientX - 10 - r.value <= i.left && u(e.min), f.clientX - 10 - r.value >= i.left + i.width && u(e.max);
    }, c = (f) => {
      document.removeEventListener("pointermove", p), document.removeEventListener("pointerup", c);
    };
    function m(f, v) {
      const h2 = Math.floor(f / v);
      return f % v <= v / 2 ? h2 * v : (h2 + 1) * v;
    }
    return (f, v) => (openBlock(), createBlock(unref(ae), {
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
        }, null, 8, En)
      ]),
      _: 3
    }, 512));
  }
});
var Fl = defineComponent({
  __name: "SliderThumb",
  props: {
    asChild: { type: Boolean, default: false },
    class: {}
  },
  setup(a) {
    const t = a, e = inject(Wt), { primitiveElement: o, currentElement: l } = B();
    onMounted(() => {
      e != null && e.thumbElement && (e.thumbElement.value = l.value);
    });
    let n = 2;
    function r(u) {
      var p;
      if (!e)
        return;
      (u.keyCode === 32 || u.key === "Enter") && u.preventDefault();
      const i = Number(e == null ? void 0 : e.step), d = Number((p = e.modelValue) == null ? void 0 : p.value);
      (u.key === "ArrowUp" || u.key === "ArrowRight") && (u.shiftKey ? (u.preventDefault(), d + n >= (e == null ? void 0 : e.max) ? e == null || e.changeModelValue(e == null ? void 0 : e.max) : d + n <= (e == null ? void 0 : e.min) ? e == null || e.changeModelValue(e == null ? void 0 : e.min) : e == null || e.changeModelValue(d + n)) : (u.preventDefault(), d + i >= (e == null ? void 0 : e.max) ? e == null || e.changeModelValue(e == null ? void 0 : e.max) : d + i <= (e == null ? void 0 : e.min) ? e == null || e.changeModelValue(e == null ? void 0 : e.min) : e == null || e.changeModelValue(d + i))), (u.key === "ArrowDown" || u.key === "ArrowLeft") && (u.shiftKey ? (u.preventDefault(), d - n >= (e == null ? void 0 : e.max) ? e == null || e.changeModelValue(e == null ? void 0 : e.max) : d - n <= (e == null ? void 0 : e.min) ? e == null || e.changeModelValue(e == null ? void 0 : e.min) : e == null || e.changeModelValue(d - n)) : (u.preventDefault(), d - i >= (e == null ? void 0 : e.max) ? e == null || e.changeModelValue(e == null ? void 0 : e.max) : d - i <= (e == null ? void 0 : e.min) ? e == null || e.changeModelValue(e == null ? void 0 : e.min) : e == null || e.changeModelValue(d - i)));
    }
    return (u, i) => {
      var d, p, c, m, f, v, h2, y, x;
      return openBlock(), createElementBlock("span", {
        style: normalizeStyle(`transform: translateX(-50%); position: absolute; left: calc(${(p = (d = unref(e)) == null ? void 0 : d.modelValue) == null ? void 0 : p.value}%)`)
      }, [
        createVNode(unref(ae), {
          class: normalizeClass(t.class),
          ref_key: "primitiveElement",
          ref: o,
          role: "slider",
          tabindex: "0",
          "data-disabled": (c = unref(e)) == null ? void 0 : c.disabled,
          "data-orientation": (m = unref(e)) == null ? void 0 : m.orientation,
          "aria-valuenow": (v = (f = unref(e)) == null ? void 0 : f.modelValue) == null ? void 0 : v.value,
          "aria-valuemin": (h2 = unref(e)) == null ? void 0 : h2.min,
          "aria-valuemax": (y = unref(e)) == null ? void 0 : y.max,
          "aria-orientation": (x = unref(e)) == null ? void 0 : x.orientation,
          onKeydown: r
        }, null, 8, ["class", "data-disabled", "data-orientation", "aria-valuenow", "aria-valuemin", "aria-valuemax", "aria-orientation"])
      ], 4);
    };
  }
});
var Zl = defineComponent({
  __name: "SliderTrack",
  props: {
    asChild: { type: Boolean }
  },
  setup(a) {
    return (t, e) => (openBlock(), createBlock(unref(ae), { asChild: t.asChild }, {
      default: withCtx(() => [
        renderSlot(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["asChild"]));
  }
});
var Ql = defineComponent({
  __name: "SliderRange",
  setup(a) {
    const t = inject(Wt);
    return (e, o) => {
      var l, n, r, u, i;
      return openBlock(), createBlock(unref(ae), {
        "data-disabled": (l = unref(t)) == null ? void 0 : l.disabled,
        "data-orientation": (n = unref(t)) == null ? void 0 : n.orientation,
        style: normalizeStyle(`left: 0%; right: ${(((r = unref(t)) == null ? void 0 : r.max) ?? 100) - (((i = (u = unref(t)) == null ? void 0 : u.modelValue) == null ? void 0 : i.value) ?? 0)}%`)
      }, null, 8, ["data-disabled", "data-orientation", "style"]);
    };
  }
});
var Wo = "RadioGroup";
var Uo = Symbol();
var Vl = defineComponent({
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
    const e = a, { primitiveElement: o, currentElement: l } = B(), n = K(e, "modelValue", t, {
      defaultValue: e.defaultValue,
      passive: true
    });
    return provide(Wo, {
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
    }), (r, u) => (openBlock(), createBlock(unref(M), {
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
var wn = ["value", "required", "disabled", "checked"];
var jl = defineComponent({
  __name: "RadioGroupItem",
  props: {
    asChild: { type: Boolean, default: false },
    value: {},
    disabled: { type: Boolean, default: false },
    required: { type: Boolean }
  },
  setup(a) {
    const t = a, e = inject(Wo), o = computed(() => (e == null ? void 0 : e.disabled.value) || t.disabled), l = computed(() => (e == null ? void 0 : e.required.value) || t.required), n = computed(() => {
      var c;
      return ((c = e == null ? void 0 : e.modelValue) == null ? void 0 : c.value) === t.value;
    });
    provide(Uo, readonly({ disabled: o, checked: n }));
    function r(c) {
      o.value || e == null || e.changeModelValue(c);
    }
    const { primitiveElement: u, currentElement: i } = B();
    function d(c) {
      if (o.value)
        return;
      const m = oe(
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
          ref: u,
          role: "radio",
          "data-radix-vue-collection-item": ""
        }, c.$attrs, {
          asChild: t.asChild,
          disabled: o.value ? true : void 0,
          "data-state": n.value ? "checked" : "unchecked",
          "data-disabled": o.value ? "" : void 0,
          tabindex: p.value,
          value: t.value,
          name: (f = unref(e)) == null ? void 0 : f.name,
          onClick: m[0] || (m[0] = (v) => r(t.value)),
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
        }, null, 8, wn)
      ], 64);
    };
  }
});
var er = defineComponent({
  __name: "RadioGroupIndicator",
  props: {
    asChild: { type: Boolean, default: false }
  },
  setup(a) {
    const t = inject(Uo);
    return (e, o) => {
      var l, n, r;
      return (l = unref(t)) != null && l.checked ? (openBlock(), createBlock(unref(ae), {
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
var qo = Symbol();
var tr = defineComponent({
  __name: "ProgressRoot",
  props: {
    asChild: { type: Boolean },
    value: {},
    modelValue: {},
    max: {}
  },
  setup(a) {
    const t = a;
    return provide(qo, {
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
var or = defineComponent({
  __name: "ProgressIndicator",
  setup(a) {
    const t = inject(qo);
    return (e, o) => {
      var l, n, r, u, i, d, p;
      return openBlock(), createBlock(unref(M), {
        "data-state": ((l = unref(t)) == null ? void 0 : l.modelValue) === ((n = unref(t)) == null ? void 0 : n.max) ? "complete" : "loading",
        "data-value": (r = unref(t)) == null ? void 0 : r.modelValue,
        "data-max": (u = unref(t)) == null ? void 0 : u.max,
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
var lt = Symbol();
var ar = defineComponent({
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
    return provide(lt, {
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
var nr = defineComponent({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean, default: false }
  },
  setup(a) {
    const t = a, e = inject(lt), { primitiveElement: o, currentElement: l } = B();
    return onMounted(() => {
      e && (e.triggerButton = l);
    }), (n, r) => {
      var u, i, d;
      return openBlock(), createBlock(unref(X), {
        asChild: t.asChild,
        type: "button",
        ref_key: "primitiveElement",
        ref: o,
        "aria-expanded": ((u = unref(e)) == null ? void 0 : u.open.value) || false,
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
var Cn = {};
function xn(a, t) {
  return openBlock(), createBlock(Teleport, { to: "body" }, [
    renderSlot(a.$slots, "default")
  ]);
}
var lr = Re(Cn, [["render", xn]]);
var rr = defineComponent({
  __name: "DialogContent",
  props: {
    asChild: { type: Boolean, default: false },
    forceMount: { type: Boolean }
  },
  setup(a) {
    const t = a, e = inject(lt), { primitiveElement: o, currentElement: l } = B();
    Ce(l, n);
    function n() {
      alert("click outside!");
    }
    watchEffect(() => {
      l.value && (e != null && e.open.value ? (Kt(l.value), document.querySelector("body").style.pointerEvents = "none", window.addEventListener("wheel", r, { passive: false }), window.addEventListener("keydown", u)) : (document.querySelector("body").style.pointerEvents = "", window.removeEventListener("wheel", r), window.removeEventListener("keydown", u), e != null && e.triggerButton.value && (e == null || e.triggerButton.value.focus())));
    });
    function r(i) {
      i.preventDefault();
    }
    function u(i) {
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
var ir = defineComponent({
  __name: "DialogOverlay",
  props: {
    asChild: { type: Boolean, default: false },
    forceMount: { type: Boolean }
  },
  setup(a) {
    const t = a, e = inject(lt);
    return (o, l) => {
      var n, r, u;
      return (n = unref(e)) != null && n.open.value ? (openBlock(), createBlock(unref(M), {
        key: 0,
        asChild: t.asChild,
        "data-state": (r = unref(e)) != null && r.open.value ? "open" : "closed",
        style: { "pointer-events": "auto" },
        "data-aria-hidden": "true",
        "aria-hidden": "true",
        onClick: (u = unref(e)) == null ? void 0 : u.closeModal
      }, {
        default: withCtx(() => [
          renderSlot(o.$slots, "default")
        ]),
        _: 3
      }, 8, ["asChild", "data-state", "onClick"])) : createCommentVNode("", true);
    };
  }
});
var sr = defineComponent({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean, default: false }
  },
  setup(a) {
    const t = a, e = inject(lt);
    return (o, l) => {
      var n, r, u;
      return openBlock(), createBlock(unref(X), {
        type: "button",
        asChild: t.asChild,
        "aria-expanded": ((n = unref(e)) == null ? void 0 : n.open.value) || false,
        "data-state": (r = unref(e)) != null && r.open.value ? "open" : "closed",
        onClick: (u = unref(e)) == null ? void 0 : u.closeModal
      }, {
        default: withCtx(() => [
          renderSlot(o.$slots, "default")
        ]),
        _: 3
      }, 8, ["asChild", "aria-expanded", "data-state", "onClick"]);
    };
  }
});
var ur = defineComponent({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean, default: false }
  },
  setup(a) {
    const t = a;
    return (e, o) => (openBlock(), createBlock(unref(Io), {
      asChild: t.asChild
    }, {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["asChild"]));
  }
});
var dr = defineComponent({
  __name: "DialogDescription",
  setup(a) {
    return (t, e) => (openBlock(), createBlock(unref(Lo), null, {
      default: withCtx(() => [
        renderSlot(t.$slots, "default")
      ]),
      _: 3
    }));
  }
});
var Ge = Symbol();
var cr = defineComponent({
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
    return provide(Ge, {
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
var pr = defineComponent({
  __name: "AlertDialogTrigger",
  props: {
    asChild: { type: Boolean, default: false }
  },
  setup(a) {
    const t = a, e = inject(Ge), { primitiveElement: o, currentElement: l } = B();
    return onMounted(() => {
      e && (e.triggerButton = l);
    }), (n, r) => {
      var u, i, d;
      return openBlock(), createBlock(unref(X), {
        asChild: t.asChild,
        type: "button",
        ref_key: "primitiveElement",
        ref: o,
        "aria-expanded": ((u = unref(e)) == null ? void 0 : u.open.value) || false,
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
var $n = {};
function Sn(a, t) {
  return openBlock(), createBlock(Teleport, { to: "body" }, [
    renderSlot(a.$slots, "default")
  ]);
}
var fr = Re($n, [["render", Sn]]);
var mr = defineComponent({
  __name: "AlertDialogContent",
  props: {
    asChild: { type: Boolean, default: false },
    forceMount: { type: Boolean }
  },
  setup(a) {
    const t = a, e = inject(Ge), { primitiveElement: o, currentElement: l } = B();
    watchEffect(() => {
      l.value && (e != null && e.open.value ? (Kt(l.value), document.querySelector("body").style.pointerEvents = "none", window.addEventListener("wheel", n, { passive: false }), window.addEventListener("keydown", r)) : (document.querySelector("body").style.pointerEvents = "", window.removeEventListener("wheel", n), window.removeEventListener("keydown", r), e != null && e.triggerButton.value && (e == null || e.triggerButton.value.focus())));
    });
    function n(u) {
      u.preventDefault();
    }
    function r(u) {
      if (u.key === "ArrowDown" || u.key === "ArrowUp") {
        const i = document.activeElement;
        i && ["input", "select", "textarea"].indexOf(i.tagName.toLowerCase()) === -1 && u.preventDefault();
      }
      u.key === "Escape" && (e == null || e.closeModal());
    }
    return (u, i) => {
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
          renderSlot(u.$slots, "default")
        ]),
        _: 3
      }, 8, ["asChild", "data-state"])) : createCommentVNode("", true);
    };
  }
});
var vr = defineComponent({
  __name: "AlertDialogOverlay",
  props: {
    asChild: { type: Boolean, default: false },
    forceMount: { type: Boolean }
  },
  setup(a) {
    const t = a, e = inject(Ge);
    return (o, l) => {
      var n, r, u;
      return (n = unref(e)) != null && n.open.value ? (openBlock(), createBlock(unref(M), {
        key: 0,
        asChild: t.asChild,
        "data-state": (r = unref(e)) != null && r.open.value ? "open" : "closed",
        style: { "pointer-events": "auto" },
        "data-aria-hidden": "true",
        "aria-hidden": "true",
        onClick: (u = unref(e)) == null ? void 0 : u.closeModal
      }, {
        default: withCtx(() => [
          renderSlot(o.$slots, "default")
        ]),
        _: 3
      }, 8, ["asChild", "data-state", "onClick"])) : createCommentVNode("", true);
    };
  }
});
var hr = defineComponent({
  __name: "AlertDialogCancel",
  props: {
    asChild: { type: Boolean, default: false }
  },
  setup(a) {
    const t = a, e = inject(Ge);
    return (o, l) => {
      var n, r, u;
      return openBlock(), createBlock(unref(X), {
        asChild: t.asChild,
        type: "button",
        "aria-expanded": ((n = unref(e)) == null ? void 0 : n.open.value) || false,
        "data-state": (r = unref(e)) != null && r.open.value ? "open" : "closed",
        onClick: (u = unref(e)) == null ? void 0 : u.closeModal
      }, {
        default: withCtx(() => [
          renderSlot(o.$slots, "default")
        ]),
        _: 3
      }, 8, ["asChild", "aria-expanded", "data-state", "onClick"]);
    };
  }
});
var _r = defineComponent({
  __name: "AlertDialogTitle",
  props: {
    asChild: { type: Boolean, default: false }
  },
  setup(a) {
    const t = a;
    return (e, o) => (openBlock(), createBlock(unref(Io), {
      asChild: t.asChild
    }, {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["asChild"]));
  }
});
var yr = defineComponent({
  __name: "AlertDialogDescription",
  props: {
    asChild: { type: Boolean, default: false }
  },
  setup(a) {
    const t = a;
    return (e, o) => (openBlock(), createBlock(unref(Lo), {
      asChild: t.asChild
    }, {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["asChild"]));
  }
});
var kn = ["aria-expanded", "data-state"];
var gr = defineComponent({
  __name: "AlertDialogAction",
  setup(a) {
    const t = inject(Ge);
    return (e, o) => {
      var l, n;
      return openBlock(), createElementBlock("button", {
        type: "button",
        "aria-expanded": ((l = unref(t)) == null ? void 0 : l.open.value) || false,
        "data-state": (n = unref(t)) != null && n.open.value ? "open" : "closed",
        onClick: o[0] || (o[0] = //@ts-ignore
        (...r) => {
          var u, i;
          return ((u = unref(t)) == null ? void 0 : u.closeModal) && ((i = unref(t)) == null ? void 0 : i.closeModal(...r));
        })
      }, [
        renderSlot(e.$slots, "default")
      ], 8, kn);
    };
  }
});
var wt = Symbol();
var br = defineComponent({
  __name: "ToolbarRoot",
  props: {
    asChild: { type: Boolean, default: false },
    orientation: { default: "horizontal" },
    dir: { default: "ltr" },
    loop: { type: Boolean }
  },
  setup(a) {
    const t = a, { primitiveElement: e, currentElement: o } = B(), l = ref();
    return provide(wt, {
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
var Er = defineComponent({
  __name: "ToolbarButton",
  setup(a) {
    const t = inject(wt), { primitiveElement: e, currentElement: o } = B();
    function l(n) {
      const r = oe(
        n,
        o.value,
        t == null ? void 0 : t.parentElement.value
      );
      r == null || r.focus();
    }
    return (n, r) => {
      var u, i;
      return openBlock(), createBlock(unref(X), {
        ref_key: "primitiveElement",
        ref: e,
        "data-orientation": (u = unref(t)) == null ? void 0 : u.orientation,
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
var wr = defineComponent({
  __name: "ToolbarLink",
  setup(a) {
    const t = inject(wt), { primitiveElement: e, currentElement: o } = B();
    function l(n) {
      const r = oe(
        n,
        o.value,
        t == null ? void 0 : t.parentElement.value
      );
      r == null || r.focus();
    }
    return (n, r) => {
      var u;
      return openBlock(), createBlock(unref(No), {
        ref_key: "primitiveElement",
        ref: e,
        tabindex: ((u = unref(t)) == null ? void 0 : u.activeElement.value) === unref(o) ? "0" : "-1",
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
var Go = Symbol();
var Cr = defineComponent({
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
    return provide(Go, {
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
            let u = r.findIndex((i) => i === n);
            r.splice(u, 1);
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
var xr = defineComponent({
  __name: "ToolbarToggleItem",
  props: {
    asChild: { type: Boolean, default: false },
    value: {},
    disabled: { type: Boolean }
  },
  setup(a) {
    const t = a, e = inject(
      Go
    ), o = inject(wt), l = computed(() => {
      var u, i, d;
      return (e == null ? void 0 : e.type) === "multiple" ? (i = (u = e == null ? void 0 : e.modelValue) == null ? void 0 : u.value) != null && i.includes(t.value) ? "on" : "off" : ((d = e == null ? void 0 : e.modelValue) == null ? void 0 : d.value) === t.value ? "on" : "off";
    }), n = ref();
    function r(u) {
      const i = oe(
        u,
        n.value,
        o == null ? void 0 : o.parentElement.value
      );
      i == null || i.focus();
    }
    return (u, i) => {
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
          renderSlot(u.$slots, "default")
        ]),
        _: 3
      }, 8, ["data-state", "data-disabled", "data-orientation"]);
    };
  }
});
var $r = defineComponent({
  __name: "ToolbarSeparator",
  props: {
    asChild: { type: Boolean, default: false }
  },
  setup(a) {
    const t = a;
    return (e, o) => (openBlock(), createBlock(qe, {
      asChild: t.asChild
    }, null, 8, ["asChild"]));
  }
});
var Ut = Symbol();
var Sr = defineComponent({
  __name: "AvatarRoot",
  props: {
    asChild: { type: Boolean, default: false }
  },
  setup(a) {
    const t = a, e = ref("loading");
    return provide(Ut, {
      imageLoadingStatus: e
    }), (o, l) => (openBlock(), createBlock(unref(ae), {
      asChild: t.asChild
    }, {
      default: withCtx(() => [
        renderSlot(o.$slots, "default")
      ]),
      _: 3
    }, 8, ["asChild"]));
  }
});
var kr = defineComponent({
  __name: "AvatarImage",
  props: {
    asChild: { type: Boolean, default: false },
    onLoadingStatusChange: {}
  },
  setup(a) {
    const t = inject(Ut);
    return onMounted(() => {
      t.imageLoadingStatus.value = "loaded";
    }), (e, o) => (openBlock(), createBlock(unref(ln), { asChild: e.asChild }, null, 8, ["asChild"]));
  }
});
var Ar = defineComponent({
  __name: "AvatarFallback",
  props: {
    asChild: { type: Boolean, default: false },
    delayMs: { default: 0 }
  },
  setup(a) {
    const t = a, e = inject(Ut);
    let o = ref(), l;
    return t.delayMs ? (l && clearTimeout(l), l = setTimeout(() => {
      o.value = true;
    }, t.delayMs)) : o.value = true, (n, r) => {
      var u;
      return unref(o) && ((u = unref(e)) == null ? void 0 : u.imageLoadingStatus.value) !== "loaded" ? (openBlock(), createBlock(unref(ae), {
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
var qt = Symbol();
var pe = defineComponent({
  __name: "PopperRoot",
  setup(a) {
    const t = ref();
    return provide(qt, {
      anchor: t,
      onAnchorChange: (e) => {
        t.value = e;
      }
    }), (e, o) => renderSlot(e.$slots, "default");
  }
});
var ve = defineComponent({
  __name: "PopperAnchor",
  props: {
    asChild: { type: Boolean },
    element: {}
  },
  setup(a) {
    const t = a, { primitiveElement: e, currentElement: o } = B(), l = inject(qt);
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
var An = (a) => ({
  name: "transformOrigin",
  options: a,
  fn(t) {
    var y, x, $;
    const { placement: e, rects: o, middlewareData: l } = t, r = ((y = l.arrow) == null ? void 0 : y.centerOffset) !== 0, u = r ? 0 : a.arrowWidth, i = r ? 0 : a.arrowHeight, [d, p] = Pt(e), c = { start: "0%", center: "50%", end: "100%" }[p], m = (((x = l.arrow) == null ? void 0 : x.x) ?? 0) + u / 2, f = ((($ = l.arrow) == null ? void 0 : $.y) ?? 0) + i / 2;
    let v = "", h2 = "";
    return d === "bottom" ? (v = r ? c : `${m}px`, h2 = `${-i}px`) : d === "top" ? (v = r ? c : `${m}px`, h2 = `${o.floating.height + i}px`) : d === "right" ? (v = `${-i}px`, h2 = r ? c : `${f}px`) : d === "left" && (v = `${o.floating.width + i}px`, h2 = r ? c : `${f}px`), { data: { x: v, y: h2 } };
  }
});
function Pt(a) {
  const [t, e = "center"] = a.split("-");
  return [t, e];
}
function Xe(a) {
  return a.split("-")[1];
}
function Gt(a) {
  return a === "y" ? "height" : "width";
}
function _e(a) {
  return a.split("-")[0];
}
function Ne(a) {
  return ["top", "bottom"].includes(_e(a)) ? "x" : "y";
}
function po(a, t, e) {
  let { reference: o, floating: l } = a;
  const n = o.x + o.width / 2 - l.width / 2, r = o.y + o.height / 2 - l.height / 2, u = Ne(t), i = Gt(u), d = o[i] / 2 - l[i] / 2, p = u === "x";
  let c;
  switch (_e(t)) {
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
  switch (Xe(t)) {
    case "start":
      c[u] -= d * (e && p ? -1 : 1);
      break;
    case "end":
      c[u] += d * (e && p ? -1 : 1);
  }
  return c;
}
var Tn = async (a, t, e) => {
  const { placement: o = "bottom", strategy: l = "absolute", middleware: n = [], platform: r } = e, u = n.filter(Boolean), i = await (r.isRTL == null ? void 0 : r.isRTL(t));
  let d = await r.getElementRects({ reference: a, floating: t, strategy: l }), { x: p, y: c } = po(d, o, i), m = o, f = {}, v = 0;
  for (let h2 = 0; h2 < u.length; h2++) {
    const { name: y, fn: x } = u[h2], { x: $, y: k, data: P, reset: D } = await x({ x: p, y: c, initialPlacement: o, placement: m, strategy: l, middlewareData: f, rects: d, platform: r, elements: { reference: a, floating: t } });
    p = $ ?? p, c = k ?? c, f = { ...f, [y]: { ...f[y], ...P } }, D && v <= 50 && (v++, typeof D == "object" && (D.placement && (m = D.placement), D.rects && (d = D.rects === true ? await r.getElementRects({ reference: a, floating: t, strategy: l }) : D.rects), { x: p, y: c } = po(d, m, i)), h2 = -1);
  }
  return { x: p, y: c, placement: m, strategy: l, middlewareData: f };
};
function Ee(a, t) {
  return typeof a == "function" ? a(t) : a;
}
function Xo(a) {
  return typeof a != "number" ? function(t) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...t };
  }(a) : { top: a, right: a, bottom: a, left: a };
}
function ft(a) {
  return { ...a, top: a.y, left: a.x, right: a.x + a.width, bottom: a.y + a.height };
}
async function Qe(a, t) {
  var e;
  t === void 0 && (t = {});
  const { x: o, y: l, platform: n, rects: r, elements: u, strategy: i } = a, { boundary: d = "clippingAncestors", rootBoundary: p = "viewport", elementContext: c = "floating", altBoundary: m = false, padding: f = 0 } = Ee(t, a), v = Xo(f), h2 = u[m ? c === "floating" ? "reference" : "floating" : c], y = ft(await n.getClippingRect({ element: (e = await (n.isElement == null ? void 0 : n.isElement(h2))) == null || e ? h2 : h2.contextElement || await (n.getDocumentElement == null ? void 0 : n.getDocumentElement(u.floating)), boundary: d, rootBoundary: p, strategy: i })), x = c === "floating" ? { ...r.floating, x: o, y: l } : r.reference, $ = await (n.getOffsetParent == null ? void 0 : n.getOffsetParent(u.floating)), k = await (n.isElement == null ? void 0 : n.isElement($)) && await (n.getScale == null ? void 0 : n.getScale($)) || { x: 1, y: 1 }, P = ft(n.convertOffsetParentRelativeRectToViewportRelativeRect ? await n.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: x, offsetParent: $, strategy: i }) : x);
  return { top: (y.top - P.top + v.top) / k.y, bottom: (P.bottom - y.bottom + v.bottom) / k.y, left: (y.left - P.left + v.left) / k.x, right: (P.right - y.right + v.right) / k.x };
}
var Ve = Math.min;
var Be = Math.max;
function Ot(a, t, e) {
  return Be(a, Ve(t, e));
}
var Pn = (a) => ({ name: "arrow", options: a, async fn(t) {
  const { x: e, y: o, placement: l, rects: n, platform: r, elements: u } = t, { element: i, padding: d = 0 } = Ee(a, t) || {};
  if (i == null)
    return {};
  const p = Xo(d), c = { x: e, y: o }, m = Ne(l), f = Gt(m), v = await r.getDimensions(i), h2 = m === "y", y = h2 ? "top" : "left", x = h2 ? "bottom" : "right", $ = h2 ? "clientHeight" : "clientWidth", k = n.reference[f] + n.reference[m] - c[m] - n.floating[f], P = c[m] - n.reference[m], D = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(i));
  let N = D ? D[$] : 0;
  N && await (r.isElement == null ? void 0 : r.isElement(D)) || (N = u.floating[$] || n.floating[f]);
  const T = k / 2 - P / 2, U = N / 2 - v[f] / 2 - 1, q = Ve(p[y], U), V = Ve(p[x], U), z = q, F = N - v[f] - V, Y = N / 2 - v[f] / 2 + T, j = Ot(z, Y, F), ee = Xe(l) != null && Y != j && n.reference[f] / 2 - (Y < z ? q : V) - v[f] / 2 < 0 ? Y < z ? z - Y : F - Y : 0;
  return { [m]: c[m] - ee, data: { [m]: j, centerOffset: Y - j + ee } };
} });
var Jo = ["top", "right", "bottom", "left"];
Jo.reduce((a, t) => a.concat(t, t + "-start", t + "-end"), []);
var On = { left: "right", right: "left", bottom: "top", top: "bottom" };
function mt(a) {
  return a.replace(/left|right|bottom|top/g, (t) => On[t]);
}
function Bn(a, t, e) {
  e === void 0 && (e = false);
  const o = Xe(a), l = Ne(a), n = Gt(l);
  let r = l === "x" ? o === (e ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return t.reference[n] > t.floating[n] && (r = mt(r)), { main: r, cross: mt(r) };
}
var Mn = { start: "end", end: "start" };
function Tt(a) {
  return a.replace(/start|end/g, (t) => Mn[t]);
}
var Dn = function(a) {
  return a === void 0 && (a = {}), { name: "flip", options: a, async fn(t) {
    var e;
    const { placement: o, middlewareData: l, rects: n, initialPlacement: r, platform: u, elements: i } = t, { mainAxis: d = true, crossAxis: p = true, fallbackPlacements: c, fallbackStrategy: m = "bestFit", fallbackAxisSideDirection: f = "none", flipAlignment: v = true, ...h2 } = Ee(a, t), y = _e(o), x = _e(r) === r, $ = await (u.isRTL == null ? void 0 : u.isRTL(i.floating)), k = c || (x || !v ? [mt(r)] : function(z) {
      const F = mt(z);
      return [Tt(z), F, Tt(F)];
    }(r));
    c || f === "none" || k.push(...function(z, F, Y, j) {
      const ee = Xe(z);
      let Q = function(Pe, Oe, ha) {
        const no = ["left", "right"], lo = ["right", "left"], _a = ["top", "bottom"], ya = ["bottom", "top"];
        switch (Pe) {
          case "top":
          case "bottom":
            return ha ? Oe ? lo : no : Oe ? no : lo;
          case "left":
          case "right":
            return Oe ? _a : ya;
          default:
            return [];
        }
      }(_e(z), Y === "start", j);
      return ee && (Q = Q.map((Pe) => Pe + "-" + ee), F && (Q = Q.concat(Q.map(Tt)))), Q;
    }(r, v, f, $));
    const P = [r, ...k], D = await Qe(t, h2), N = [];
    let T = ((e = l.flip) == null ? void 0 : e.overflows) || [];
    if (d && N.push(D[y]), p) {
      const { main: z, cross: F } = Bn(o, n, $);
      N.push(D[z], D[F]);
    }
    if (T = [...T, { placement: o, overflows: N }], !N.every((z) => z <= 0)) {
      var U, q;
      const z = (((U = l.flip) == null ? void 0 : U.index) || 0) + 1, F = P[z];
      if (F)
        return { data: { index: z, overflows: T }, reset: { placement: F } };
      let Y = (q = T.filter((j) => j.overflows[0] <= 0).sort((j, ee) => j.overflows[1] - ee.overflows[1])[0]) == null ? void 0 : q.placement;
      if (!Y)
        switch (m) {
          case "bestFit": {
            var V;
            const j = (V = T.map((ee) => [ee.placement, ee.overflows.filter((Q) => Q > 0).reduce((Q, Pe) => Q + Pe, 0)]).sort((ee, Q) => ee[1] - Q[1])[0]) == null ? void 0 : V[0];
            j && (Y = j);
            break;
          }
          case "initialPlacement":
            Y = r;
        }
      if (o !== Y)
        return { reset: { placement: Y } };
    }
    return {};
  } };
};
function fo(a, t) {
  return { top: a.top - t.height, right: a.right - t.width, bottom: a.bottom - t.height, left: a.left - t.width };
}
function mo(a) {
  return Jo.some((t) => a[t] >= 0);
}
var Rn = function(a) {
  return a === void 0 && (a = {}), { name: "hide", options: a, async fn(t) {
    const { rects: e } = t, { strategy: o = "referenceHidden", ...l } = Ee(a, t);
    switch (o) {
      case "referenceHidden": {
        const n = fo(await Qe(t, { ...l, elementContext: "reference" }), e.reference);
        return { data: { referenceHiddenOffsets: n, referenceHidden: mo(n) } };
      }
      case "escaped": {
        const n = fo(await Qe(t, { ...l, altBoundary: true }), e.floating);
        return { data: { escapedOffsets: n, escaped: mo(n) } };
      }
      default:
        return {};
    }
  } };
};
var Nn = function(a) {
  return a === void 0 && (a = 0), { name: "offset", options: a, async fn(t) {
    const { x: e, y: o } = t, l = await async function(n, r) {
      const { placement: u, platform: i, elements: d } = n, p = await (i.isRTL == null ? void 0 : i.isRTL(d.floating)), c = _e(u), m = Xe(u), f = Ne(u) === "x", v = ["left", "top"].includes(c) ? -1 : 1, h2 = p && f ? -1 : 1, y = Ee(r, n);
      let { mainAxis: x, crossAxis: $, alignmentAxis: k } = typeof y == "number" ? { mainAxis: y, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...y };
      return m && typeof k == "number" && ($ = m === "end" ? -1 * k : k), f ? { x: $ * h2, y: x * v } : { x: x * v, y: $ * h2 };
    }(t, a);
    return { x: e + l.x, y: o + l.y, data: l };
  } };
};
function Fo(a) {
  return a === "x" ? "y" : "x";
}
var In = function(a) {
  return a === void 0 && (a = {}), { name: "shift", options: a, async fn(t) {
    const { x: e, y: o, placement: l } = t, { mainAxis: n = true, crossAxis: r = false, limiter: u = { fn: (y) => {
      let { x, y: $ } = y;
      return { x, y: $ };
    } }, ...i } = Ee(a, t), d = { x: e, y: o }, p = await Qe(t, i), c = Ne(_e(l)), m = Fo(c);
    let f = d[c], v = d[m];
    if (n) {
      const y = c === "y" ? "bottom" : "right";
      f = Ot(f + p[c === "y" ? "top" : "left"], f, f - p[y]);
    }
    if (r) {
      const y = m === "y" ? "bottom" : "right";
      v = Ot(v + p[m === "y" ? "top" : "left"], v, v - p[y]);
    }
    const h2 = u.fn({ ...t, [c]: f, [m]: v });
    return { ...h2, data: { x: h2.x - e, y: h2.y - o } };
  } };
};
var Ln = function(a) {
  return a === void 0 && (a = {}), { options: a, fn(t) {
    const { x: e, y: o, placement: l, rects: n, middlewareData: r } = t, { offset: u = 0, mainAxis: i = true, crossAxis: d = true } = Ee(a, t), p = { x: e, y: o }, c = Ne(l), m = Fo(c);
    let f = p[c], v = p[m];
    const h2 = Ee(u, t), y = typeof h2 == "number" ? { mainAxis: h2, crossAxis: 0 } : { mainAxis: 0, crossAxis: 0, ...h2 };
    if (i) {
      const k = c === "y" ? "height" : "width", P = n.reference[c] - n.floating[k] + y.mainAxis, D = n.reference[c] + n.reference[k] - y.mainAxis;
      f < P ? f = P : f > D && (f = D);
    }
    if (d) {
      var x, $;
      const k = c === "y" ? "width" : "height", P = ["top", "left"].includes(_e(l)), D = n.reference[m] - n.floating[k] + (P && ((x = r.offset) == null ? void 0 : x[m]) || 0) + (P ? 0 : y.crossAxis), N = n.reference[m] + n.reference[k] + (P ? 0 : (($ = r.offset) == null ? void 0 : $[m]) || 0) - (P ? y.crossAxis : 0);
      v < D ? v = D : v > N && (v = N);
    }
    return { [c]: f, [m]: v };
  } };
};
var Kn = function(a) {
  return a === void 0 && (a = {}), { name: "size", options: a, async fn(t) {
    const { placement: e, rects: o, platform: l, elements: n } = t, { apply: r = () => {
    }, ...u } = Ee(a, t), i = await Qe(t, u), d = _e(e), p = Xe(e), c = Ne(e) === "x", { width: m, height: f } = o.floating;
    let v, h2;
    d === "top" || d === "bottom" ? (v = d, h2 = p === (await (l.isRTL == null ? void 0 : l.isRTL(n.floating)) ? "start" : "end") ? "left" : "right") : (h2 = d, v = p === "end" ? "top" : "bottom");
    const y = f - i[v], x = m - i[h2], $ = !t.middlewareData.shift;
    let k = y, P = x;
    if (c) {
      const N = m - i.left - i.right;
      P = p || $ ? Ve(x, N) : N;
    } else {
      const N = f - i.top - i.bottom;
      k = p || $ ? Ve(y, N) : N;
    }
    if ($ && !p) {
      const N = Be(i.left, 0), T = Be(i.right, 0), U = Be(i.top, 0), q = Be(i.bottom, 0);
      c ? P = m - 2 * (N !== 0 || T !== 0 ? N + T : Be(i.left, i.right)) : k = f - 2 * (U !== 0 || q !== 0 ? U + q : Be(i.top, i.bottom));
    }
    await r({ ...t, availableWidth: P, availableHeight: k });
    const D = await l.getDimensions(n.floating);
    return m !== D.width || f !== D.height ? { reset: { rects: true } } : {};
  } };
};
function ie(a) {
  var t;
  return ((t = a.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function se(a) {
  return ie(a).getComputedStyle(a);
}
function Zo(a) {
  return a instanceof ie(a).Node;
}
function $e(a) {
  return Zo(a) ? (a.nodeName || "").toLowerCase() : "#document";
}
function de(a) {
  return a instanceof ie(a).HTMLElement;
}
function ye(a) {
  return a instanceof ie(a).Element;
}
function vo(a) {
  return typeof ShadowRoot < "u" && (a instanceof ie(a).ShadowRoot || a instanceof ShadowRoot);
}
function je(a) {
  const { overflow: t, overflowX: e, overflowY: o, display: l } = se(a);
  return /auto|scroll|overlay|hidden|clip/.test(t + o + e) && !["inline", "contents"].includes(l);
}
function Hn(a) {
  return ["table", "td", "th"].includes($e(a));
}
function Bt(a) {
  const t = Xt(), e = se(a);
  return e.transform !== "none" || e.perspective !== "none" || !t && !!e.backdropFilter && e.backdropFilter !== "none" || !t && !!e.filter && e.filter !== "none" || ["transform", "perspective", "filter"].some((o) => (e.willChange || "").includes(o)) || ["paint", "layout", "strict", "content"].some((o) => (e.contain || "").includes(o));
}
function Xt() {
  return !(typeof CSS > "u" || !CSS.supports) && CSS.supports("-webkit-backdrop-filter", "none");
}
function Ct(a) {
  return ["html", "body", "#document"].includes($e(a));
}
var Mt = Math.min;
var Ke = Math.max;
var vt = Math.round;
var ut = Math.floor;
var Me = (a) => ({ x: a, y: a });
function Qo(a) {
  const t = se(a);
  let e = parseFloat(t.width) || 0, o = parseFloat(t.height) || 0;
  const l = de(a), n = l ? a.offsetWidth : e, r = l ? a.offsetHeight : o, u = vt(e) !== n || vt(o) !== r;
  return u && (e = n, o = r), { width: e, height: o, $: u };
}
function Jt(a) {
  return ye(a) ? a : a.contextElement;
}
function He(a) {
  const t = Jt(a);
  if (!de(t))
    return Me(1);
  const e = t.getBoundingClientRect(), { width: o, height: l, $: n } = Qo(t);
  let r = (n ? vt(e.width) : e.width) / o, u = (n ? vt(e.height) : e.height) / l;
  return r && Number.isFinite(r) || (r = 1), u && Number.isFinite(u) || (u = 1), { x: r, y: u };
}
var ho = Me(0);
function Vo(a, t, e) {
  var o, l;
  if (t === void 0 && (t = true), !Xt())
    return ho;
  const n = a ? ie(a) : window;
  return !e || t && e !== n ? ho : { x: ((o = n.visualViewport) == null ? void 0 : o.offsetLeft) || 0, y: ((l = n.visualViewport) == null ? void 0 : l.offsetTop) || 0 };
}
function De(a, t, e, o) {
  t === void 0 && (t = false), e === void 0 && (e = false);
  const l = a.getBoundingClientRect(), n = Jt(a);
  let r = Me(1);
  t && (o ? ye(o) && (r = He(o)) : r = He(a));
  const u = Vo(n, e, o);
  let i = (l.left + u.x) / r.x, d = (l.top + u.y) / r.y, p = l.width / r.x, c = l.height / r.y;
  if (n) {
    const m = ie(n), f = o && ye(o) ? ie(o) : o;
    let v = m.frameElement;
    for (; v && o && f !== m; ) {
      const h2 = He(v), y = v.getBoundingClientRect(), x = getComputedStyle(v), $ = y.left + (v.clientLeft + parseFloat(x.paddingLeft)) * h2.x, k = y.top + (v.clientTop + parseFloat(x.paddingTop)) * h2.y;
      i *= h2.x, d *= h2.y, p *= h2.x, c *= h2.y, i += $, d += k, v = ie(v).frameElement;
    }
  }
  return ft({ width: p, height: c, x: i, y: d });
}
function ge(a) {
  return ((Zo(a) ? a.ownerDocument : a.document) || window.document).documentElement;
}
function xt(a) {
  return ye(a) ? { scrollLeft: a.scrollLeft, scrollTop: a.scrollTop } : { scrollLeft: a.pageXOffset, scrollTop: a.pageYOffset };
}
function jo(a) {
  return De(ge(a)).left + xt(a).scrollLeft;
}
function Ye(a) {
  if ($e(a) === "html")
    return a;
  const t = a.assignedSlot || a.parentNode || vo(a) && a.host || ge(a);
  return vo(t) ? t.host : t;
}
function ea(a) {
  const t = Ye(a);
  return Ct(t) ? a.ownerDocument ? a.ownerDocument.body : a.body : de(t) && je(t) ? t : ea(t);
}
function ht(a, t) {
  var e;
  t === void 0 && (t = []);
  const o = ea(a), l = o === ((e = a.ownerDocument) == null ? void 0 : e.body), n = ie(o);
  return l ? t.concat(n, n.visualViewport || [], je(o) ? o : []) : t.concat(o, ht(o));
}
function _o(a, t, e) {
  let o;
  if (t === "viewport")
    o = function(l, n) {
      const r = ie(l), u = ge(l), i = r.visualViewport;
      let d = u.clientWidth, p = u.clientHeight, c = 0, m = 0;
      if (i) {
        d = i.width, p = i.height;
        const f = Xt();
        (!f || f && n === "fixed") && (c = i.offsetLeft, m = i.offsetTop);
      }
      return { width: d, height: p, x: c, y: m };
    }(a, e);
  else if (t === "document")
    o = function(l) {
      const n = ge(l), r = xt(l), u = l.ownerDocument.body, i = Ke(n.scrollWidth, n.clientWidth, u.scrollWidth, u.clientWidth), d = Ke(n.scrollHeight, n.clientHeight, u.scrollHeight, u.clientHeight);
      let p = -r.scrollLeft + jo(l);
      const c = -r.scrollTop;
      return se(u).direction === "rtl" && (p += Ke(n.clientWidth, u.clientWidth) - i), { width: i, height: d, x: p, y: c };
    }(ge(a));
  else if (ye(t))
    o = function(l, n) {
      const r = De(l, true, n === "fixed"), u = r.top + l.clientTop, i = r.left + l.clientLeft, d = de(l) ? He(l) : Me(1);
      return { width: l.clientWidth * d.x, height: l.clientHeight * d.y, x: i * d.x, y: u * d.y };
    }(t, e);
  else {
    const l = Vo(a);
    o = { ...t, x: t.x - l.x, y: t.y - l.y };
  }
  return ft(o);
}
function ta(a, t) {
  const e = Ye(a);
  return !(e === t || !ye(e) || Ct(e)) && (se(e).position === "fixed" || ta(e, t));
}
function yo(a, t) {
  return de(a) && se(a).position !== "fixed" ? t ? t(a) : a.offsetParent : null;
}
function go(a, t) {
  const e = ie(a);
  if (!de(a))
    return e;
  let o = yo(a, t);
  for (; o && Hn(o) && se(o).position === "static"; )
    o = yo(o, t);
  return o && ($e(o) === "html" || $e(o) === "body" && se(o).position === "static" && !Bt(o)) ? e : o || function(l) {
    let n = Ye(l);
    for (; de(n) && !Ct(n); ) {
      if (Bt(n))
        return n;
      n = Ye(n);
    }
    return null;
  }(a) || e;
}
function zn(a, t, e) {
  const o = de(t), l = ge(t), n = e === "fixed", r = De(a, true, n, t);
  let u = { scrollLeft: 0, scrollTop: 0 };
  const i = Me(0);
  if (o || !o && !n)
    if (($e(t) !== "body" || je(l)) && (u = xt(t)), de(t)) {
      const d = De(t, true, n, t);
      i.x = d.x + t.clientLeft, i.y = d.y + t.clientTop;
    } else
      l && (i.x = jo(l));
  return { x: r.left + u.scrollLeft - i.x, y: r.top + u.scrollTop - i.y, width: r.width, height: r.height };
}
var Yn = { getClippingRect: function(a) {
  let { element: t, boundary: e, rootBoundary: o, strategy: l } = a;
  const n = e === "clippingAncestors" ? function(d, p) {
    const c = p.get(d);
    if (c)
      return c;
    let m = ht(d).filter((y) => ye(y) && $e(y) !== "body"), f = null;
    const v = se(d).position === "fixed";
    let h2 = v ? Ye(d) : d;
    for (; ye(h2) && !Ct(h2); ) {
      const y = se(h2), x = Bt(h2);
      x || y.position !== "fixed" || (f = null), (v ? !x && !f : !x && y.position === "static" && f && ["absolute", "fixed"].includes(f.position) || je(h2) && !x && ta(d, h2)) ? m = m.filter(($) => $ !== h2) : f = y, h2 = Ye(h2);
    }
    return p.set(d, m), m;
  }(t, this._c) : [].concat(e), r = [...n, o], u = r[0], i = r.reduce((d, p) => {
    const c = _o(t, p, l);
    return d.top = Ke(c.top, d.top), d.right = Mt(c.right, d.right), d.bottom = Mt(c.bottom, d.bottom), d.left = Ke(c.left, d.left), d;
  }, _o(t, u, l));
  return { width: i.right - i.left, height: i.bottom - i.top, x: i.left, y: i.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(a) {
  let { rect: t, offsetParent: e, strategy: o } = a;
  const l = de(e), n = ge(e);
  if (e === n)
    return t;
  let r = { scrollLeft: 0, scrollTop: 0 }, u = Me(1);
  const i = Me(0);
  if ((l || !l && o !== "fixed") && (($e(e) !== "body" || je(n)) && (r = xt(e)), de(e))) {
    const d = De(e);
    u = He(e), i.x = d.x + e.clientLeft, i.y = d.y + e.clientTop;
  }
  return { width: t.width * u.x, height: t.height * u.y, x: t.x * u.x - r.scrollLeft * u.x + i.x, y: t.y * u.y - r.scrollTop * u.y + i.y };
}, isElement: ye, getDimensions: function(a) {
  return Qo(a);
}, getOffsetParent: go, getDocumentElement: ge, getScale: He, async getElementRects(a) {
  let { reference: t, floating: e, strategy: o } = a;
  const l = this.getOffsetParent || go, n = this.getDimensions;
  return { reference: zn(t, await l(e), o), floating: { x: 0, y: 0, ...await n(e) } };
}, getClientRects: (a) => Array.from(a.getClientRects()), isRTL: (a) => se(a).direction === "rtl" };
function Wn(a, t, e, o) {
  o === void 0 && (o = {});
  const { ancestorScroll: l = true, ancestorResize: n = true, elementResize: r = true, layoutShift: u = typeof IntersectionObserver == "function", animationFrame: i = false } = o, d = Jt(a), p = l || n ? [...d ? ht(d) : [], ...ht(t)] : [];
  p.forEach((h2) => {
    l && h2.addEventListener("scroll", e, { passive: true }), n && h2.addEventListener("resize", e);
  });
  const c = d && u ? function(h2, y) {
    let x, $ = null;
    const k = ge(h2);
    function P() {
      clearTimeout(x), $ && $.disconnect(), $ = null;
    }
    return function D(N, T) {
      N === void 0 && (N = false), T === void 0 && (T = 1), P();
      const { left: U, top: q, width: V, height: z } = h2.getBoundingClientRect();
      if (N || y(), !V || !z)
        return;
      const F = ut(q), Y = ut(k.clientWidth - (U + V)), j = ut(k.clientHeight - (q + z)), ee = ut(U);
      let Q = true;
      $ = new IntersectionObserver((Pe) => {
        const Oe = Pe[0].intersectionRatio;
        if (Oe !== T) {
          if (!Q)
            return D();
          Oe ? D(false, Oe) : x = setTimeout(() => {
            D(false, 1e-7);
          }, 100);
        }
        Q = false;
      }, { rootMargin: -F + "px " + -Y + "px " + -j + "px " + -ee + "px", threshold: Ke(0, Mt(1, T)) || 1 }), $.observe(h2);
    }(true), P;
  }(d, e) : null;
  let m, f = null;
  r && (f = new ResizeObserver(e), d && !i && f.observe(d), f.observe(t));
  let v = i ? De(a) : null;
  return i && function h2() {
    const y = De(a);
    !v || y.x === v.x && y.y === v.y && y.width === v.width && y.height === v.height || e(), v = y, m = requestAnimationFrame(h2);
  }(), e(), () => {
    p.forEach((h2) => {
      l && h2.removeEventListener("scroll", e), n && h2.removeEventListener("resize", e);
    }), c && c(), f && f.disconnect(), f = null, i && cancelAnimationFrame(m);
  };
}
var Un = (a, t, e) => {
  const o = /* @__PURE__ */ new Map(), l = { platform: Yn, ...e }, n = { ...l.platform, _c: o };
  return Tn(a, t, { ...l, platform: n });
};
function Dt(a) {
  var t;
  return (t = a == null ? void 0 : a.$el) != null ? t : a;
}
function qn(a) {
  return {
    name: "arrow",
    options: a,
    fn(t) {
      const e = Dt(unref(a.element));
      return e == null ? {} : Pn({
        element: e,
        padding: a.padding
      }).fn(t);
    }
  };
}
function oa(a) {
  return typeof window > "u" ? 1 : (a.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function bo(a, t) {
  const e = oa(a);
  return Math.round(t * e) / e;
}
function Gn(a, t, e) {
  e === void 0 && (e = {});
  const o = e.whileElementsMounted, l = computed(() => {
    var T;
    return (T = unref(e.open)) != null ? T : true;
  }), n = computed(() => unref(e.middleware)), r = computed(() => {
    var T;
    return (T = unref(e.placement)) != null ? T : "bottom";
  }), u = computed(() => {
    var T;
    return (T = unref(e.strategy)) != null ? T : "absolute";
  }), i = computed(() => {
    var T;
    return (T = unref(e.transform)) != null ? T : true;
  }), d = computed(() => Dt(a.value)), p = computed(() => Dt(t.value)), c = ref(0), m = ref(0), f = ref(u.value), v = ref(r.value), h2 = shallowRef({}), y = ref(false), x = computed(() => {
    const T = {
      position: f.value,
      left: "0",
      top: "0"
    };
    if (!p.value)
      return T;
    const U = bo(p.value, c.value), q = bo(p.value, m.value);
    return i.value ? {
      ...T,
      transform: "translate(" + U + "px, " + q + "px)",
      ...oa(p.value) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: f.value,
      left: U + "px",
      top: q + "px"
    };
  });
  let $;
  function k() {
    d.value == null || p.value == null || Un(d.value, p.value, {
      middleware: n.value,
      placement: r.value,
      strategy: u.value
    }).then((T) => {
      c.value = T.x, m.value = T.y, f.value = T.strategy, v.value = T.placement, h2.value = T.middlewareData, y.value = true;
    });
  }
  function P() {
    typeof $ == "function" && ($(), $ = void 0);
  }
  function D() {
    if (P(), o === void 0) {
      k();
      return;
    }
    if (d.value != null && p.value != null) {
      $ = o(d.value, p.value, k);
      return;
    }
  }
  function N() {
    l.value || (y.value = false);
  }
  return watch([n, r, u], k, {
    flush: "sync"
  }), watch([d, p], D, {
    flush: "sync"
  }), watch(l, N, {
    flush: "sync"
  }), getCurrentScope() && onScopeDispose(P), {
    x: shallowReadonly(c),
    y: shallowReadonly(m),
    strategy: shallowReadonly(f),
    placement: shallowReadonly(v),
    middlewareData: shallowReadonly(h2),
    isPositioned: shallowReadonly(y),
    floatingStyles: x,
    update: k
  };
}
var aa = Symbol();
var Xn = {
  inheritAttrs: false
};
var he = defineComponent({
  ...Xn,
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
    const t = a, e = inject(qt), o = ref(), l = ref(), n = ref(), { width: r, height: u } = tn(n), i = computed(
      () => t.side + (t.align !== "center" ? "-" + t.align : "")
    ), d = computed(() => typeof t.collisionPadding == "number" ? t.collisionPadding : { top: 0, right: 0, bottom: 0, left: 0, ...t.collisionPadding }), p = computed(() => Array.isArray(t.collisionBoundary) ? t.collisionBoundary : [t.collisionBoundary]), c = computed(() => ({
      padding: d.value,
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: p.value.length > 0
    })), m = La(() => [
      Nn({
        mainAxis: t.sideOffset + u.value,
        alignmentAxis: t.alignOffset
      }),
      t.avoidCollisions && In({
        mainAxis: true,
        crossAxis: !!t.prioritizePosition,
        limiter: t.sticky === "partial" ? Ln() : void 0,
        ...c.value
      }),
      !t.prioritizePosition && t.avoidCollisions && Dn({
        ...c.value
      }),
      Kn({
        ...c,
        apply: ({ elements: T, rects: U, availableWidth: q, availableHeight: V }) => {
          const { width: z, height: F } = U.reference, Y = T.floating.style;
          Object.assign(T.floating.style, {
            maxWidth: `${q}px`,
            maxHeight: `${V}px`
          }), Y.setProperty(
            "--radix-popper-available-width",
            `${q}px`
          ), Y.setProperty(
            "--radix-popper-available-height",
            `${V}px`
          ), Y.setProperty(
            "--radix-popper-anchor-width",
            `${z}px`
          ), Y.setProperty(
            "--radix-popper-anchor-height",
            `${F}px`
          );
        }
      }),
      n.value && qn({ element: n.value, padding: t.arrowPadding }),
      An({
        arrowWidth: r.value,
        arrowHeight: u.value
      }),
      t.hideWhenDetached && Rn({ strategy: "referenceHidden", ...c.value })
    ]), { floatingStyles: f, placement: v, isPositioned: h2, middlewareData: y } = Gn(
      e.anchor,
      o,
      {
        strategy: "fixed",
        placement: i,
        whileElementsMounted: (...T) => Wn(...T, {
          animationFrame: t.updatePositionStrategy === "always"
        }),
        middleware: m
      }
    ), x = computed(
      () => Pt(v.value)[0]
    ), $ = computed(
      () => Pt(v.value)[1]
    );
    watchEffect(() => {
      var T;
      h2.value && ((T = t.onPlaced) == null || T.call(t));
    });
    const k = computed(
      () => {
        var T;
        return ((T = y.value.arrow) == null ? void 0 : T.centerOffset) !== 0;
      }
    ), P = ref("");
    watchEffect(() => {
      l.value && (P.value = window.getComputedStyle(l.value).zIndex);
    });
    const D = computed(() => {
      var T;
      return ((T = y.value.arrow) == null ? void 0 : T.x) ?? 0;
    }), N = computed(() => {
      var T;
      return ((T = y.value.arrow) == null ? void 0 : T.y) ?? 0;
    });
    return provide(aa, {
      placedSide: x,
      onArrowChange: (T) => {
        n.value = T;
      },
      arrowX: D,
      arrowY: N,
      shouldHideArrow: k
    }), (T, U) => {
      var q, V, z;
      return openBlock(), createElementBlock("div", {
        ref_key: "floatingRef",
        ref: o,
        "data-radix-popper-content-wrapper": "",
        style: normalizeStyle({
          ...unref(f),
          transform: unref(h2) ? unref(f).transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: P.value,
          ["--radix-popper-transform-origin"]: [
            (q = unref(y).transformOrigin) == null ? void 0 : q.x,
            (V = unref(y).transformOrigin) == null ? void 0 : V.y
          ].join(" ")
        })
      }, [
        createVNode(unref(M), mergeProps(T.$attrs, {
          "as-child": t.asChild,
          "data-side": x.value,
          "data-align": $.value,
          style: {
            // if the PopperContent hasn't been placed yet (not all measurements done)
            // we prevent animations so that users's animation don't kick in too early referring wrong sides
            animation: unref(h2) ? void 0 : "none",
            // hide the content if using the hide middleware and should be hidden
            opacity: (z = unref(y).hide) != null && z.referenceHidden ? 0 : void 0
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
var Jn = createBaseVNode("polygon", { points: "0,0 30,0 15,10" }, null, -1);
var Fn = defineComponent({
  __name: "Arrow",
  props: {
    width: { default: 10 },
    height: { default: 5 }
  },
  setup(a) {
    const t = a, { primitiveElement: e } = B();
    return (o, l) => (openBlock(), createBlock(unref(un), mergeProps({
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
          Jn
        ])
      ]),
      _: 3
    }, 16, ["width", "height"]));
  }
});
var Zn = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
};
var Qn = {
  inheritAttrs: false
};
var Ie = defineComponent({
  ...Qn,
  __name: "PopperArrow",
  props: {
    width: {},
    height: {}
  },
  setup(a) {
    const t = inject(aa), e = computed(
      () => t != null && t.placedSide ? Zn[t == null ? void 0 : t.placedSide.value] : ""
    );
    return (o, l) => {
      var n, r, u, i;
      return openBlock(), createElementBlock("span", {
        ref: (d) => {
          unref(t).onArrowChange(d);
        },
        style: normalizeStyle({
          position: "absolute",
          left: (n = unref(t).arrowX) != null && n.value ? `${(r = unref(t).arrowX) == null ? void 0 : r.value}px` : void 0,
          top: (u = unref(t).arrowY) != null && u.value ? `${(i = unref(t).arrowY) == null ? void 0 : i.value}px` : void 0,
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
        createVNode(Fn, mergeProps(o.$attrs, { style: {
          display: "block"
        } }), null, 16)
      ], 4);
    };
  }
});
var Ft = Symbol();
var Tr = defineComponent({
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
    return provide(Ft, {
      open: o,
      showTooltip: () => {
        o.value = true;
      },
      hideTooltip: () => {
        o.value = false;
      }
    }), (l, n) => (openBlock(), createBlock(unref(pe), null, {
      default: withCtx(() => [
        renderSlot(l.$slots, "default")
      ]),
      _: 3
    }));
  }
});
var Pr = defineComponent({
  __name: "TooltipTrigger",
  setup(a) {
    const t = inject(Ft), { primitiveElement: e, currentElement: o } = B();
    async function l(r) {
      await Bo(r, o.value) && (t == null || t.showTooltip());
    }
    const n = computed(() => t != null && t.open.value ? "closed" : "instant-open");
    return (r, u) => (openBlock(), createBlock(unref(ve), { asChild: "" }, {
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
var Zt = defineComponent({
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
var Or = defineComponent({
  __name: "TooltipPortal",
  props: {
    to: { default: "body" }
  },
  setup(a) {
    const t = a;
    return (e, o) => (openBlock(), createBlock(Zt, {
      to: t.to
    }, {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["to"]));
  }
});
var Br = defineComponent({
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
    const t = a, e = inject(Ft);
    return (o, l) => {
      var n;
      return (n = unref(e)) != null && n.open.value ? (openBlock(), createBlock(unref(he), normalizeProps(mergeProps({ key: 0 }, t)), {
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
var Mr = defineComponent({
  __name: "TooltipArrow",
  setup(a) {
    return (t, e) => (openBlock(), createBlock(unref(Ie)));
  }
});
var Qt = Symbol();
var Dr = defineComponent({
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
    return provide(Qt, {
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
    }), (l, n) => (openBlock(), createBlock(unref(pe), null, {
      default: withCtx(() => [
        renderSlot(l.$slots, "default")
      ]),
      _: 3
    }));
  }
});
var Rr = defineComponent({
  __name: "HoverCardTrigger",
  setup(a) {
    const t = inject(Qt), { primitiveElement: e, currentElement: o } = B();
    async function l(r) {
      await Bo(
        r,
        o.value,
        t == null ? void 0 : t.openDelay
      ) && (t == null || t.showTooltip());
    }
    async function n(r) {
      t.isHover = false, await Mo(r, t == null ? void 0 : t.closeDelay) && !(t != null && t.isHover) && (t == null || t.hideTooltip());
    }
    return (r, u) => (openBlock(), createBlock(unref(ve), { asChild: "" }, {
      default: withCtx(() => {
        var i, d;
        return [
          createVNode(unref(X), {
            type: "button",
            ref_key: "primitiveElement",
            ref: e,
            "aria-expanded": ((i = unref(t)) == null ? void 0 : i.open.value) || false,
            "data-state": (d = unref(t)) != null && d.open.value ? "open" : "closed",
            onMouseover: u[0] || (u[0] = (p) => unref(t).isHover = true),
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
var Nr = defineComponent({
  __name: "HoverCardPortal",
  props: {
    to: { default: "body" }
  },
  setup(a) {
    const t = a;
    return (e, o) => (openBlock(), createBlock(Zt, {
      to: t.to
    }, {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["to"]));
  }
});
var Ir = defineComponent({
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
    const t = a, e = inject(Qt);
    async function o(l) {
      e.isHover = false, await Mo(l, e == null ? void 0 : e.closeDelay) && !(e != null && e.isHover) && (e == null || e.hideTooltip());
    }
    return (l, n) => {
      var r, u;
      return (r = unref(e)) != null && r.open.value ? (openBlock(), createBlock(unref(he), mergeProps({ key: 0 }, t, {
        onMouseover: n[0] || (n[0] = (i) => unref(e).isHover = true),
        onMouseleave: o,
        "data-state": (u = unref(e)) != null && u.open.value ? "delayed-open" : "closed",
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
var Lr = defineComponent({
  __name: "HoverCardArrow",
  setup(a) {
    return (t, e) => (openBlock(), createBlock(unref(Ie)));
  }
});
var $t = Symbol();
var Kr = defineComponent({
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
    return provide($t, {
      open: o,
      showPopover: () => {
        o.value = true;
      },
      hidePopover: () => {
        o.value = false;
      },
      triggerElement: l
    }), (n, r) => (openBlock(), createBlock(unref(pe), null, {
      default: withCtx(() => [
        renderSlot(n.$slots, "default")
      ]),
      _: 3
    }));
  }
});
var Hr = defineComponent({
  __name: "PopoverTrigger",
  setup(a) {
    const t = inject($t), { primitiveElement: e, currentElement: o } = B();
    onMounted(() => {
      t.triggerElement.value = o.value;
    });
    function l() {
      t != null && t.open.value ? t == null || t.hidePopover() : t == null || t.showPopover();
    }
    return (n, r) => (openBlock(), createBlock(unref(ve), { asChild: "" }, {
      default: withCtx(() => {
        var u, i;
        return [
          createVNode(unref(X), {
            type: "button",
            ref_key: "primitiveElement",
            ref: e,
            "aria-expanded": ((u = unref(t)) == null ? void 0 : u.open.value) || false,
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
var zr = defineComponent({
  __name: "PopoverPortal",
  props: {
    to: { default: "body" }
  },
  setup(a) {
    const t = a;
    return (e, o) => (openBlock(), createBlock(Zt, {
      to: t.to
    }, {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["to"]));
  }
});
function Vn(a, t) {
  if (t) {
    const e = t.getBoundingClientRect();
    return !(a.clientX > e.left && a.clientX < e.right && a.clientY > e.top && a.clientY < e.bottom);
  }
}
var Yr = defineComponent({
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
    const t = a, e = inject($t), { primitiveElement: o, currentElement: l } = B();
    watchEffect(() => {
      l.value && (e != null && e.open.value ? (Kt(l.value), window.addEventListener("mousedown", n), window.addEventListener("keydown", r)) : e != null && e.triggerElement.value && (e == null || e.triggerElement.value.focus(), u()));
    });
    function n(i) {
      var p;
      if ((p = e == null ? void 0 : e.triggerElement.value) != null && p.contains(i.target))
        return;
      Vn(i, l.value) && (e == null || e.hidePopover(), i.preventDefault(), i.stopPropagation());
    }
    function r(i) {
      i.key === "Escape" && (e == null || e.hidePopover());
    }
    function u() {
      window.removeEventListener("mousedown", n), window.removeEventListener("keydown", r);
    }
    return onUnmounted(() => {
      u();
    }), (i, d) => {
      var p;
      return (p = unref(e)) != null && p.open.value ? (openBlock(), createBlock(unref(he), mergeProps({
        key: 0,
        ref_key: "primitiveElement",
        ref: o
      }, t), {
        default: withCtx(() => {
          var c, m;
          return [
            (c = unref(e)) != null && c.open.value ? (openBlock(), createBlock(unref(M), {
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
var Wr = defineComponent({
  __name: "PopoverArrow",
  setup(a) {
    return (t, e) => (openBlock(), createBlock(unref(Ie)));
  }
});
var Ur = defineComponent({
  __name: "PopoverClose",
  setup(a) {
    const t = inject($t);
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
var ke = Symbol();
var qr = defineComponent({
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
    return provide(ke, {
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
    }), (r, u) => (openBlock(), createBlock(unref(pe), null, {
      default: withCtx(() => [
        renderSlot(r.$slots, "default")
      ]),
      _: 3
    }));
  }
});
var Gr = defineComponent({
  __name: "DropdownMenuTrigger",
  setup(a) {
    const t = inject(
      ke
    ), { primitiveElement: e, currentElement: o } = B();
    onMounted(() => {
      t.triggerElement.value = o.value;
    });
    function l() {
      t != null && t.modelValue.value ? t == null || t.hideTooltip() : t == null || t.showTooltip();
    }
    async function n(r) {
      var u;
      (r.key === "ArrowDown" || r.key === "Enter" || r.keyCode === 32) && (t == null || t.showTooltip(), await nextTick(), t == null || t.changeSelected((u = t.itemsArray) == null ? void 0 : u[0]));
    }
    return (r, u) => (openBlock(), createBlock(unref(ve), { asChild: "" }, {
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
var jn = {};
function el(a, t) {
  return openBlock(), createBlock(Teleport, { to: "body" }, [
    renderSlot(a.$slots, "default")
  ]);
}
var Xr = Re(jn, [["render", el]]);
var Jr = defineComponent({
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
    const t = a, e = inject(ke), { primitiveElement: o, currentElement: l } = B(), { createCollection: n, getItems: r } = le();
    n(l), watchEffect(() => {
      l.value && (e != null && e.modelValue.value ? (document.querySelector("body").style.pointerEvents = "none", e.itemsArray = r(l.value)) : e != null && e.triggerElement.value && u());
    });
    function u() {
      document.querySelector("body").style.pointerEvents = "", setTimeout(() => {
        var i;
        (i = e == null ? void 0 : e.triggerElement.value) == null || i.focus();
      }, 0);
    }
    return Ce(l, (i) => {
      i.target.closest('[role="menuitem"]') || e == null || e.hideTooltip();
    }), (i, d) => {
      var p;
      return (p = unref(e)) != null && p.modelValue.value ? (openBlock(), createBlock(unref(he), normalizeProps(mergeProps({ key: 0 }, t)), {
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
var Fr = defineComponent({
  __name: "DropdownMenuArrow",
  setup(a) {
    return (t, e) => (openBlock(), createBlock(unref(Ie)));
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
    dataState: {}
  },
  emits: [
    "handle-click",
    "horizontal-keydown",
    "mouseover",
    "escape-keydown"
  ],
  setup(a, { emit: t }) {
    const e = a, { getItems: o } = le(), { primitiveElement: l, currentElement: n } = B();
    function r(c) {
      var f, v, h2, y;
      if (c.key === "Escape")
        return i(), t("escape-keydown", c);
      if (c.keyCode === 32 || c.key === "Enter") {
        c.target.click();
        return;
      }
      if (c.key === "ArrowLeft") {
        const x = (f = e.subProvider) == null ? void 0 : f.triggerElement.value;
        if (x)
          return (v = e.rootProvider) == null || v.changeSelected(x), (h2 = e.subProvider) == null ? void 0 : h2.hideTooltip();
      }
      if (c.key === "ArrowRight" || c.key === "ArrowLeft")
        return t("horizontal-keydown", c);
      const m = oe(
        c,
        n.value,
        void 0,
        {
          arrowKeyOptions: "vertical",
          itemsArray: o()
        }
      );
      m && ((y = e.rootProvider) == null || y.changeSelected(m));
    }
    function u() {
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
      t("handle-click");
    }
    function p() {
      t("mouseover");
    }
    return (c, m) => {
      var f, v, h2;
      return openBlock(), createBlock(unref(M), {
        role: e.role,
        ref_key: "primitiveElement",
        ref: l,
        onKeydown: withModifiers(r, ["prevent"]),
        "data-state": e.dataState,
        "data-radix-vue-collection-item": "",
        onMouseenter: u,
        onMouseover: p,
        onClick: d,
        "data-highlighted": ((f = c.rootProvider) == null ? void 0 : f.selectedElement.value) === unref(n) ? "" : null,
        "aria-disabled": e.disabled ? true : void 0,
        "data-disabled": e.disabled ? "" : void 0,
        "data-orientation": (v = c.rootProvider) == null ? void 0 : v.orientation,
        tabindex: ((h2 = c.rootProvider) == null ? void 0 : h2.selectedElement.value) === unref(n) ? "0" : "-1"
      }, {
        default: withCtx(() => [
          renderSlot(c.$slots, "default")
        ]),
        _: 3
      }, 8, ["role", "onKeydown", "data-state", "data-highlighted", "aria-disabled", "data-disabled", "data-orientation", "tabindex"]);
    };
  }
});
var et = Symbol();
var Zr = defineComponent({
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
    }), l = ref(), n = inject(et);
    return provide(et, {
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
      triggerId: ue(),
      contentId: ue(),
      parentContext: n
    }), (r, u) => (openBlock(), createBlock(unref(pe), null, {
      default: withCtx(() => [
        renderSlot(r.$slots, "default")
      ]),
      _: 3
    }));
  }
});
var Qr = defineComponent({
  __name: "DropdownMenuItem",
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
      et
    );
    function l() {
      e != null && e.selectedElement.value && e.hideTooltip();
    }
    function n() {
      e == null || e.hideTooltip();
    }
    return (r, u) => {
      var i;
      return openBlock(), createBlock(re, {
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
var tl = Symbol();
var Vr = defineComponent({
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
    return provide(tl, {
      type: e.type,
      modelValue: toRef(() => e.modelValue),
      changeModelValue: (n) => {
        if (e.type === "single")
          t("update:modelValue", n);
        else {
          let r = e.modelValue;
          if (r.includes(n)) {
            let u = r.findIndex((i) => i === n);
            r.splice(u, 1);
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
var jr = defineComponent({
  __name: "DropdownMenuSeparator",
  props: {
    orientation: {},
    decorative: { type: Boolean },
    asChild: { type: Boolean }
  },
  setup(a) {
    const t = a;
    return (e, o) => (openBlock(), createBlock(qe, {
      orientation: t.orientation,
      decorative: t.decorative
    }, null, 8, ["orientation", "decorative"]));
  }
});
var Vt = Symbol();
var ol = ["id", "checked", "name", "disabled"];
var ei = defineComponent({
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
      ke
    ), l = K(e, "modelValue", t, {
      passive: true
    }), n = computed(() => l.value ? "checked" : "unchecked");
    function r() {
      l.value = !l.value;
    }
    function u() {
      o == null || o.hideTooltip();
    }
    return provide(Vt, {
      modelValue: l
    }), (i, d) => {
      var p;
      return openBlock(), createBlock(re, {
        ref: "currentElement",
        disabled: e.disabled,
        rootProvider: unref(o),
        orientation: (p = unref(o)) == null ? void 0 : p.orientation,
        onHandleClick: r,
        onEscapeKeydown: u,
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
          }), null, 16, ol),
          renderSlot(i.$slots, "default")
        ]),
        _: 3
      }, 8, ["disabled", "rootProvider", "orientation", "data-state", "aria-checked"]);
    };
  }
});
var ti = defineComponent({
  __name: "DropdownMenuItemIndicator",
  setup(a) {
    const t = inject(Vt);
    return (e, o) => {
      var l;
      return (l = unref(t)) != null && l.modelValue.value ? (openBlock(), createBlock(unref(ae), {
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
var oi = defineComponent({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    for: {}
  },
  setup(a) {
    const t = a;
    return (e, o) => (openBlock(), createBlock(unref(at), {
      for: t.for
    }, {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["for"]));
  }
});
var na = "RadioGroup";
var ai = defineComponent({
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
    return provide(na, {
      modelValue: n,
      changeModelValue: (r) => {
        n.value = r;
      },
      parentElement: l
    }), (r, u) => (openBlock(), createBlock(unref(M), {
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
var ni = defineComponent({
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
      ke
    ), o = inject(
      na
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
    const u = computed(
      () => {
        var i;
        return ((i = o == null ? void 0 : o.modelValue) == null ? void 0 : i.value) === t.value;
      }
    );
    return provide(Vt, {
      modelValue: u
    }), (i, d) => {
      var p;
      return openBlock(), createBlock(re, {
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
var li = defineComponent({
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
      ke
    ), o = inject(
      et
    ), { primitiveElement: l, currentElement: n } = B(), { createCollection: r } = le();
    r(n), watchEffect(() => {
      n.value && o != null && o.modelValue.value && u();
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
    function u() {
      const i = Array.from(
        n.value.querySelectorAll(
          "[data-radix-vue-collection-item]:not([data-disabled])"
        )
      );
      return o.itemsArray = i, i;
    }
    return Ce(n, (i) => {
      i.target.closest('[role="menuitem"]') || o == null || o.hideTooltip();
    }), (i, d) => {
      var p;
      return (p = unref(o)) != null && p.modelValue.value ? (openBlock(), createBlock(unref(he), normalizeProps(mergeProps({ key: 0 }, t)), {
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
var ri = defineComponent({
  __name: "DropdownMenuSubTrigger",
  setup(a) {
    const t = inject(
      ke
    ), e = inject(
      et
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
    async function u(p) {
      p.key === "ArrowRight" && n();
    }
    const i = computed(() => e != null && e.modelValue.value ? "open" : "closed");
    function d() {
      return e == null ? void 0 : e.showTooltip();
    }
    return (p, c) => (openBlock(), createBlock(unref(ve), { asChild: "" }, {
      default: withCtx(() => {
        var m, f, v, h2, y;
        return [
          createVNode(re, {
            ref_key: "primitiveElement",
            ref: o,
            id: (m = unref(e)) == null ? void 0 : m.triggerId,
            rootProvider: unref(t),
            subProvider: (f = unref(e)) == null ? void 0 : f.parentContext,
            "aria-expanded": (v = unref(e)) == null ? void 0 : v.modelValue.value,
            "aria-controls": (h2 = unref(e)) == null ? void 0 : h2.contentId,
            "data-state": i.value,
            "data-orientation": (y = unref(t)) == null ? void 0 : y.orientation,
            "aria-haspopup": "menu",
            onHandleClick: r,
            onMouseover: d,
            onHorizontalKeydown: u
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
var Ae = Symbol();
var ii = defineComponent({
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
    }), l = ref(), n = ref(), r = ref(0), u = ref(0);
    return provide(Ae, {
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
      clientY: u
    }), (i, d) => (openBlock(), createBlock(unref(pe), null, {
      default: withCtx(() => [
        renderSlot(i.$slots, "default")
      ]),
      _: 3
    }));
  }
});
var si = defineComponent({
  __name: "ContextMenuTrigger",
  setup(a) {
    const t = inject(
      Ae
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
    }), (l, n) => (openBlock(), createBlock(unref(ve), {
      element: e,
      asChild: ""
    }, {
      default: withCtx(() => {
        var r, u;
        return [
          createVNode(unref(X), {
            type: "button",
            "aria-expanded": ((r = unref(t)) == null ? void 0 : r.modelValue.value) || false,
            "data-state": (u = unref(t)) != null && u.modelValue.value ? "open" : "closed",
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
var al = {};
function nl(a, t) {
  return openBlock(), createBlock(Teleport, { to: "body" }, [
    renderSlot(a.$slots, "default")
  ]);
}
var ui = Re(al, [["render", nl]]);
var di = defineComponent({
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
    const t = a, e = inject(Ae), { primitiveElement: o, currentElement: l } = B(), { createCollection: n, getItems: r } = le();
    n(l), watchEffect(() => {
      l.value && (e != null && e.modelValue.value ? (e.itemsArray = r(l.value), window.addEventListener("keydown", d), window.addEventListener("scroll", i)) : u());
    }), watchEffect(() => {
      e != null && e.selectedElement.value && u();
    });
    function u() {
      window.removeEventListener("keydown", d), window.removeEventListener("scroll", i);
    }
    Ce(l, (p) => {
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
      return (m = unref(e)) != null && m.modelValue.value ? (openBlock(), createBlock(unref(he), mergeProps({ key: 0 }, t, { "prioritize-position": "" }), {
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
var ci = defineComponent({
  __name: "ContextMenuArrow",
  setup(a) {
    return (t, e) => (openBlock(), createBlock(unref(Ie)));
  }
});
var tt = Symbol();
var pi = defineComponent({
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
    }), l = ref(), n = inject(tt);
    return provide(tt, {
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
      triggerId: ue(),
      contentId: ue(),
      parentContext: n
    }), (r, u) => (openBlock(), createBlock(unref(pe), null, {
      default: withCtx(() => [
        renderSlot(r.$slots, "default")
      ]),
      _: 3
    }));
  }
});
var fi = defineComponent({
  __name: "ContextMenuItem",
  props: {
    asChild: { type: Boolean },
    value: {},
    disabled: { type: Boolean },
    textValue: {}
  },
  setup(a) {
    const t = a, e = inject(
      Ae
    ), o = inject(
      tt
    );
    function l() {
      e != null && e.selectedElement.value && e.hideTooltip();
    }
    function n() {
      e == null || e.hideTooltip();
    }
    return (r, u) => {
      var i;
      return openBlock(), createBlock(re, {
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
var ll = Symbol();
var mi = defineComponent({
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
    return provide(ll, {
      type: e.type,
      modelValue: toRef(() => e.modelValue),
      changeModelValue: (n) => {
        if (e.type === "single")
          t("update:modelValue", n);
        else {
          let r = e.modelValue;
          if (r.includes(n)) {
            let u = r.findIndex((i) => i === n);
            r.splice(u, 1);
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
var vi = defineComponent({
  __name: "ContextMenuSeparator",
  props: {
    orientation: {},
    decorative: { type: Boolean },
    asChild: { type: Boolean }
  },
  setup(a) {
    const t = a;
    return (e, o) => (openBlock(), createBlock(qe, {
      orientation: t.orientation,
      decorative: t.decorative
    }, null, 8, ["orientation", "decorative"]));
  }
});
var jt = Symbol();
var rl = ["id", "checked", "name", "disabled"];
var hi = defineComponent({
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
      Ae
    ), l = K(e, "modelValue", t, {
      passive: true
    }), n = computed(() => l.value ? "checked" : "unchecked");
    function r() {
      l.value = !l.value;
    }
    function u() {
      o == null || o.hideTooltip();
    }
    return provide(jt, {
      modelValue: l
    }), (i, d) => {
      var p;
      return openBlock(), createBlock(re, {
        ref: "currentElement",
        disabled: e.disabled,
        rootProvider: unref(o),
        orientation: (p = unref(o)) == null ? void 0 : p.orientation,
        onHandleClick: r,
        onEscapeKeydown: u,
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
          }), null, 16, rl),
          renderSlot(i.$slots, "default")
        ]),
        _: 3
      }, 8, ["disabled", "rootProvider", "orientation", "data-state", "aria-checked"]);
    };
  }
});
var _i = defineComponent({
  __name: "ContextMenuItemIndicator",
  setup(a) {
    const t = inject(jt);
    return (e, o) => {
      var l;
      return (l = unref(t)) != null && l.modelValue.value ? (openBlock(), createBlock(unref(ae), {
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
var yi = defineComponent({
  __name: "ContextMenuLabel",
  props: {
    asChild: { type: Boolean },
    for: {}
  },
  setup(a) {
    const t = a;
    return (e, o) => (openBlock(), createBlock(unref(at), {
      for: t.for
    }, {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["for"]));
  }
});
var la = "RadioGroup";
var gi = defineComponent({
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
    return provide(la, {
      modelValue: n,
      changeModelValue: (r) => {
        n.value = r;
      },
      parentElement: l
    }), (r, u) => (openBlock(), createBlock(unref(M), {
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
var bi = defineComponent({
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
      Ae
    ), o = inject(
      la
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
    const u = computed(
      () => {
        var i;
        return ((i = o == null ? void 0 : o.modelValue) == null ? void 0 : i.value) === t.value;
      }
    );
    return provide(jt, {
      modelValue: u
    }), (i, d) => {
      var p;
      return openBlock(), createBlock(re, {
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
var Ei = defineComponent({
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
      Ae
    ), o = inject(
      tt
    ), { primitiveElement: l, currentElement: n } = B(), { createCollection: r } = le();
    r(n), watchEffect(() => {
      n.value && o != null && o.modelValue.value && u();
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
    function u() {
      const i = Array.from(
        n.value.querySelectorAll(
          "[data-radix-vue-collection-item]:not([data-disabled])"
        )
      );
      return o.itemsArray = i, i;
    }
    return Ce(n, (i) => {
      i.target.closest('[role="menuitem"]') || o == null || o.hideTooltip();
    }), (i, d) => {
      var p;
      return (p = unref(o)) != null && p.modelValue.value ? (openBlock(), createBlock(unref(he), normalizeProps(mergeProps({ key: 0 }, t)), {
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
var wi = defineComponent({
  __name: "ContextMenuSubTrigger",
  setup(a) {
    const t = inject(
      Ae
    ), e = inject(
      tt
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
    async function u(p) {
      p.key === "ArrowRight" && n();
    }
    const i = computed(() => e != null && e.modelValue.value ? "open" : "closed");
    function d() {
      return e == null ? void 0 : e.showTooltip();
    }
    return (p, c) => (openBlock(), createBlock(unref(ve), { asChild: "" }, {
      default: withCtx(() => {
        var m, f, v, h2, y;
        return [
          createVNode(re, {
            ref_key: "primitiveElement",
            ref: o,
            id: (m = unref(e)) == null ? void 0 : m.triggerId,
            rootProvider: unref(t),
            subProvider: (f = unref(e)) == null ? void 0 : f.parentContext,
            "aria-expanded": (v = unref(e)) == null ? void 0 : v.modelValue.value,
            "aria-controls": (h2 = unref(e)) == null ? void 0 : h2.contentId,
            "data-state": i.value,
            "data-orientation": (y = unref(t)) == null ? void 0 : y.orientation,
            "aria-haspopup": "menu",
            onHandleClick: r,
            onMouseover: d,
            onHorizontalKeydown: u
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
var rt = Symbol();
var Ci = defineComponent({
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
    provide(rt, {
      selectedElement: l,
      changeSelected: (i) => {
        l.value = i, l.value.focus();
      },
      modelValue: o,
      changeModelValue: u,
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
    function u(i) {
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
    return (i, d) => (openBlock(), createBlock(unref(pe), null, {
      default: withCtx(() => [
        renderSlot(i.$slots, "default")
      ]),
      _: 3
    }));
  }
});
var xi = defineComponent({
  __name: "SelectTrigger",
  setup(a) {
    const t = inject(rt), { primitiveElement: e, currentElement: o } = B();
    onMounted(() => {
      t.triggerElement.value = o.value;
    });
    async function l() {
      var r, u;
      if (t == null || t.showTooltip(), await nextTick(), t != null && t.modelValue.value && !(t != null && t.multiple)) {
        const i = (r = t.itemsArray) == null ? void 0 : r.find((d) => d.getAttribute("data-radix-vue-radio-value") === (t == null ? void 0 : t.modelValue.value));
        t == null || t.changeSelected(i);
      } else
        t == null || t.changeSelected((u = t.itemsArray) == null ? void 0 : u[0]);
    }
    function n(r) {
      (r.key === "ArrowDown" || r.key === "ArrowUp" || r.key === "Enter" || r.keyCode === 32) && l();
    }
    return (r, u) => (openBlock(), createBlock(unref(ve), { asChild: "" }, {
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
var il = {};
function sl(a, t) {
  return openBlock(), createBlock(Teleport, { to: "body" }, [
    renderSlot(a.$slots, "default")
  ]);
}
var $i = Re(il, [["render", sl]]);
var Si = defineComponent({
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
    const t = a, e = inject(rt), { primitiveElement: o, currentElement: l } = B(), { createCollection: n, getItems: r } = le();
    n(l), watchEffect(() => {
      l.value && (e != null && e.isOpen.value ? (document.querySelector("body").style.pointerEvents = "none", e.itemsArray = r(l.value)) : e != null && e.triggerElement.value && u());
    });
    function u() {
      document.querySelector("body").style.pointerEvents = "", setTimeout(() => {
        var i;
        (i = e == null ? void 0 : e.triggerElement.value) == null || i.focus();
      }, 0);
    }
    return Ce(l, (i) => {
      i.target.closest('[role="menuitem"]') || e == null || e.hideTooltip();
    }), (i, d) => {
      var p, c;
      return (p = unref(e)) != null && p.isOpen.value ? (openBlock(), createBlock(unref(he), mergeProps({ key: 0 }, t, {
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
var ki = defineComponent({
  __name: "SelectArrow",
  setup(a) {
    return (t, e) => (openBlock(), createBlock(unref(Ie)));
  }
});
var Ai = defineComponent({
  __name: "SelectSeparator",
  props: {
    orientation: {},
    decorative: { type: Boolean },
    asChild: { type: Boolean }
  },
  setup(a) {
    const t = a;
    return (e, o) => (openBlock(), createBlock(qe, {
      orientation: t.orientation,
      decorative: t.decorative
    }, null, 8, ["orientation", "decorative"]));
  }
});
var ra = Symbol();
var Ti = defineComponent({
  __name: "SelectItemIndicator",
  setup(a) {
    const t = inject(rt), e = inject(ra), o = computed(() => {
      var l;
      return t != null && t.multiple ? (l = t == null ? void 0 : t.modelValue.value) == null ? void 0 : l.includes(
        e.value
      ) : (t == null ? void 0 : t.modelValue.value) === (e == null ? void 0 : e.value);
    });
    return (l, n) => o.value ? (openBlock(), createBlock(unref(ae), {
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
var Pi = defineComponent({
  __name: "SelectLabel",
  props: {
    asChild: { type: Boolean },
    for: {}
  },
  setup(a) {
    const t = a;
    return (e, o) => (openBlock(), createBlock(unref(at), {
      for: t.for
    }, {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["for"]));
  }
});
var Oi = defineComponent({
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
var Bi = defineComponent({
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
    const t = a, e = inject(rt);
    function o() {
      return e == null || e.changeModelValue(t.value), e == null ? void 0 : e.hideTooltip();
    }
    return provide(ra, {
      value: t.value
    }), (l, n) => {
      var r, u, i;
      return openBlock(), createBlock(re, {
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
        "data-state": ((i = (u = unref(e)) == null ? void 0 : u.modelValue) == null ? void 0 : i.value) === t.value ? "checked" : "unchecked"
      }, {
        default: withCtx(() => [
          renderSlot(l.$slots, "default")
        ]),
        _: 3
      }, 8, ["disabled", "rootProvider", "orientation", "data-radix-vue-radio-value", "data-state"]);
    };
  }
});
var xe = Symbol();
var ul = {
  inheritAttrs: false
};
var Mi = defineComponent({
  ...ul,
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
    }), l = ref(), n = ref(), r = [], u = ref(), i = Lt();
    return provide(xe, {
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
        i.value === u.value && (n.value ? n.value.focus() : r.length && r[0].focus());
      },
      { immediate: true }
    ), (d, p) => (openBlock(), createBlock(unref(pe), null, {
      default: withCtx(() => [
        createBaseVNode("div", mergeProps({ role: "menubar" }, d.$attrs, {
          ref_key: "menubarContainerElement",
          ref: u,
          tabindex: "0"
        }), [
          renderSlot(d.$slots, "default")
        ], 16)
      ]),
      _: 3
    }));
  }
});
var _t = Symbol();
var Di = defineComponent({
  __name: "MenubarMenu",
  props: {
    value: {}
  },
  setup(a) {
    const e = a.value ?? ue(), o = inject(xe), l = ref(), n = computed(() => (o == null ? void 0 : o.modelValue.value) === e), r = inject(_t);
    return provide(_t, {
      value: e,
      isOpen: n,
      triggerElement: l,
      itemsArray: [],
      triggerId: e,
      contentId: ue(),
      parentContext: r,
      orientation: "vertical"
    }), (u, i) => (openBlock(), createBlock(unref(pe), null, {
      default: withCtx(() => [
        renderSlot(u.$slots, "default")
      ]),
      _: 3
    }));
  }
});
var dl = {
  inheritAttrs: false
};
var Ri = defineComponent({
  ...dl,
  __name: "MenubarTrigger",
  props: {
    asChild: { type: Boolean },
    disabled: { type: Boolean },
    textValue: {}
  },
  setup(a) {
    const t = a, e = inject(xe), o = inject(
      _t
    ), { primitiveElement: l, currentElement: n } = B(), r = Lt();
    onMounted(() => {
      o.triggerElement.value = n.value, e.triggerItemsArray.push(n.value);
    });
    async function u() {
      var h2;
      e == null || e.changeValue(o == null ? void 0 : o.value), await nextTick();
      const v = (h2 = o == null ? void 0 : o.itemsArray) == null ? void 0 : h2[0];
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
        return u();
      const h2 = oe(
        v,
        n.value,
        n.value.parentElement,
        {
          arrowKeyOptions: "horizontal"
        }
      );
      h2 && (e == null || e.changeSelected(h2), h2.focus(), e != null && e.modelValue.value && (e == null || e.changeValue(h2.id)));
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
      u();
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
    ), (v, h2) => (openBlock(), createBlock(unref(ve), { asChild: "" }, {
      default: withCtx(() => {
        var y, x, $, k, P;
        return [
          createVNode(unref(X), mergeProps({
            role: "menuitem",
            ref_key: "primitiveElement",
            ref: l,
            id: (y = unref(o)) == null ? void 0 : y.triggerId,
            "aria-expanded": (x = unref(o)) == null ? void 0 : x.isOpen.value,
            "aria-controls": ($ = unref(o)) == null ? void 0 : $.contentId,
            "data-state": m.value,
            "data-orientation": (k = unref(e)) == null ? void 0 : k.orientation,
            "aria-haspopup": "menu",
            onKeydown: withModifiers(i, ["prevent"]),
            "data-radix-vue-collection-item": "",
            onMouseenter: d,
            onClick: c,
            "data-highlighted": f.value ? "" : null,
            "aria-disabled": t.disabled ? true : void 0,
            "data-disabled": t.disabled ? "" : void 0,
            tabindex: ((P = unref(e)) == null ? void 0 : P.triggerElement.value) === unref(n) ? "0" : "-1"
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
var cl = {};
function pl(a, t) {
  return openBlock(), createBlock(Teleport, { to: "body" }, [
    renderSlot(a.$slots, "default")
  ]);
}
var Ni = Re(cl, [["render", pl]]);
var Ii = defineComponent({
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
    const t = a, e = inject(xe), o = inject(
      _t
    ), { primitiveElement: l, currentElement: n } = B(), { createCollection: r } = le();
    r(n), watchEffect(() => {
      n.value && o != null && o.isOpen.value && u();
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
    function u() {
      const d = Array.from(
        n.value.querySelectorAll(
          "[data-radix-vue-collection-item]:not([data-disabled])"
        )
      );
      return o.itemsArray = d, d;
    }
    Ce(n, (d) => {
      d.target.closest('[role="menuitem"]') || (e == null || e.changeValue(void 0), e.selectedElement.value = void 0);
    });
    const i = computed(() => o != null && o.isOpen ? "open" : "false");
    return (d, p) => {
      var c;
      return (c = unref(o)) != null && c.isOpen.value ? (openBlock(), createBlock(unref(he), normalizeProps(mergeProps({ key: 0 }, t)), {
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
var Li = defineComponent({
  __name: "MenubarArrow",
  setup(a) {
    return (t, e) => (openBlock(), createBlock(unref(Ie)));
  }
});
var ot = Symbol();
var Ki = defineComponent({
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
    }), l = ref(), n = inject(ot);
    return provide(ot, {
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
      triggerId: ue(),
      contentId: ue(),
      parentContext: n
    }), (r, u) => (openBlock(), createBlock(unref(pe), null, {
      default: withCtx(() => [
        renderSlot(r.$slots, "default")
      ]),
      _: 3
    }));
  }
});
var Hi = defineComponent({
  __name: "MenubarItem",
  props: {
    asChild: { type: Boolean },
    value: {},
    disabled: { type: Boolean },
    textValue: {}
  },
  setup(a) {
    const t = a, e = inject(xe), o = inject(
      ot
    );
    function l() {
      e.changeValue(void 0), e.changeSelected(
        e.triggerElement.value
      );
    }
    function n(u) {
      const i = oe(
        u,
        e == null ? void 0 : e.triggerElement.value,
        void 0,
        {
          arrowKeyOptions: "horizontal",
          itemsArray: e == null ? void 0 : e.triggerItemsArray
        }
      );
      i && (e == null || e.changeSelected(i), e == null || e.changeValue(i.id));
    }
    function r(u) {
      e.changeValue(void 0), e.changeSelected(
        e.triggerElement.value
      );
    }
    return (u, i) => {
      var d;
      return openBlock(), createBlock(re, {
        disabled: t.disabled,
        rootProvider: unref(e),
        subProvider: unref(o),
        orientation: (d = unref(e)) == null ? void 0 : d.orientation,
        onHandleClick: l,
        onHorizontalKeydown: n,
        onEscapeKeydown: r
      }, {
        default: withCtx(() => [
          renderSlot(u.$slots, "default")
        ]),
        _: 3
      }, 8, ["disabled", "rootProvider", "subProvider", "orientation"]);
    };
  }
});
var fl = Symbol();
var zi = defineComponent({
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
    return provide(fl, {
      type: e.type,
      modelValue: toRef(() => e.modelValue),
      changeModelValue: (n) => {
        if (e.type === "single")
          t("update:modelValue", n);
        else {
          let r = e.modelValue;
          if (r.includes(n)) {
            let u = r.findIndex((i) => i === n);
            r.splice(u, 1);
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
var Yi = defineComponent({
  __name: "MenubarSeparator",
  props: {
    orientation: {},
    decorative: { type: Boolean },
    asChild: { type: Boolean }
  },
  setup(a) {
    const t = a;
    return (e, o) => (openBlock(), createBlock(qe, {
      orientation: t.orientation,
      decorative: t.decorative
    }, null, 8, ["orientation", "decorative"]));
  }
});
var eo = Symbol();
var ml = ["id", "checked", "name", "disabled"];
var Wi = defineComponent({
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
    const e = a, o = inject(xe), l = K(e, "modelValue", t, {
      passive: true
    }), n = computed(() => l.value ? "checked" : "unchecked");
    function r() {
      l.value = !l.value;
    }
    provide(eo, {
      modelValue: l
    });
    function u(d) {
      const p = oe(
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
      return openBlock(), createBlock(re, {
        ref: "currentElement",
        disabled: e.disabled,
        rootProvider: unref(o),
        orientation: (c = unref(o)) == null ? void 0 : c.orientation,
        onHandleClick: r,
        onHorizontalKeydown: u,
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
          }), null, 16, ml),
          renderSlot(d.$slots, "default")
        ]),
        _: 3
      }, 8, ["disabled", "rootProvider", "orientation", "data-state", "aria-checked"]);
    };
  }
});
var Ui = defineComponent({
  __name: "MenubarItemIndicator",
  setup(a) {
    const t = inject(eo);
    return (e, o) => {
      var l;
      return (l = unref(t)) != null && l.modelValue.value ? (openBlock(), createBlock(unref(ae), {
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
var qi = defineComponent({
  __name: "MenubarLabel",
  props: {
    asChild: { type: Boolean },
    for: {}
  },
  setup(a) {
    const t = a;
    return (e, o) => (openBlock(), createBlock(unref(at), {
      for: t.for
    }, {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["for"]));
  }
});
var ia = "RadioGroup";
var Gi = defineComponent({
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
    return provide(ia, {
      modelValue: n,
      changeModelValue: (r) => {
        n.value = r;
      },
      parentElement: l
    }), (r, u) => (openBlock(), createBlock(unref(M), {
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
var Xi = defineComponent({
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
    const t = a, e = inject(xe), o = inject(
      ia
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
    provide(eo, {
      modelValue: r
    });
    function u(d) {
      const p = oe(
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
      return openBlock(), createBlock(re, {
        disabled: t.disabled,
        rootProvider: unref(e),
        orientation: (c = unref(e)) == null ? void 0 : c.orientation,
        "data-radix-vue-radio-value": t.value,
        onHandleClick: n,
        onHorizontalKeydown: u,
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
var Ji = defineComponent({
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
    const t = a, e = inject(xe), o = inject(ot), { primitiveElement: l, currentElement: n } = B(), { createCollection: r } = le();
    r(n), watchEffect(() => {
      n.value && o != null && o.modelValue.value && u();
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
    function u() {
      const i = Array.from(
        n.value.querySelectorAll(
          "[data-radix-vue-collection-item]:not([data-disabled])"
        )
      );
      return o.itemsArray = i, i;
    }
    return Ce(n, (i) => {
      i.target.closest('[role="menuitem"]') || o == null || o.hideTooltip();
    }), (i, d) => {
      var p;
      return (p = unref(o)) != null && p.modelValue.value ? (openBlock(), createBlock(unref(he), normalizeProps(mergeProps({ key: 0 }, t)), {
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
var Fi = defineComponent({
  __name: "MenubarSubTrigger",
  setup(a) {
    const t = inject(xe), e = inject(ot), { primitiveElement: o, currentElement: l } = B();
    onMounted(() => {
      e.triggerElement.value = l.value;
    });
    async function n() {
      var m;
      e == null || e.showTooltip(), await nextTick();
      const c = (m = e == null ? void 0 : e.itemsArray) == null ? void 0 : m[0];
      t.selectedElement.value = c, c == null || c.focus();
    }
    function r() {
      e != null && e.modelValue.value || n();
    }
    async function u(c) {
      if (c.key === "ArrowRight")
        n();
      else {
        const m = oe(
          c,
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
    function p(c) {
      t.changeValue(void 0), t.changeSelected(
        t.triggerElement.value
      );
    }
    return (c, m) => (openBlock(), createBlock(unref(ve), { asChild: "" }, {
      default: withCtx(() => {
        var f, v, h2, y, x;
        return [
          createVNode(re, {
            ref_key: "primitiveElement",
            ref: o,
            id: (f = unref(e)) == null ? void 0 : f.triggerId,
            rootProvider: unref(t),
            subProvider: (v = unref(e)) == null ? void 0 : v.parentContext,
            "aria-expanded": (h2 = unref(e)) == null ? void 0 : h2.modelValue.value,
            "aria-controls": (y = unref(e)) == null ? void 0 : y.contentId,
            "data-state": i.value,
            "data-orientation": (x = unref(t)) == null ? void 0 : x.orientation,
            "aria-haspopup": "menu",
            onHandleClick: r,
            onMouseover: d,
            onHorizontalKeydown: u,
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
var Te = Symbol();
var Zi = defineComponent({
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
  setup(a, { emit: t }) {
    const e = a, o = K(e, "modelValue", t, {
      passive: true,
      defaultValue: e.defaultValue ?? ""
    }), l = ref(""), { primitiveElement: n, currentElement: r } = B(), { createCollection: u } = le();
    u();
    const i = () => {
      o.value = "";
    };
    Ce(r, () => {
      i();
    }), Po(r, () => {
      i();
    });
    const d = ref(), p = ref(), c = ref(/* @__PURE__ */ new Map()), m = It((f) => {
      l.value = o.value, o.value = f;
    }, e.delayDuration);
    return provide(Te, {
      isRootMenu: true,
      modelValue: o,
      previousValue: l,
      baseId: ue(),
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
        const h2 = c.value;
        c.value = new Map(h2.set(f, v));
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
        l.value = o.value, o.value = f;
      }
    }), (f, v) => (openBlock(), createBlock(unref(sn), {
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
function to(a) {
  return a ? "open" : "closed";
}
function sa(a, t) {
  return `${a}-trigger-${t}`;
}
function ua(a, t) {
  return `${a}-content-${t}`;
}
function Rt(a) {
  const t = [], e = document.createTreeWalker(a, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (o) => {
      const l = o.tagName === "INPUT" && o.type === "hidden";
      return o.disabled || o.hidden || l ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; e.nextNode(); )
    t.push(e.currentNode);
  return t;
}
function da(a) {
  const t = document.activeElement;
  return a.some((e) => e === t ? true : (e.focus(), document.activeElement !== t));
}
function vl(a) {
  return a.forEach((t) => {
    t.dataset.tabindex = t.getAttribute("tabindex") || "", t.setAttribute("tabindex", "-1");
  }), () => {
    a.forEach((t) => {
      const e = t.dataset.tabindex;
      t.setAttribute("tabindex", e);
    });
  };
}
var oo = Symbol();
var Qi = defineComponent({
  __name: "NavigationMenuItem",
  props: {
    value: {}
  },
  setup(a) {
    const t = a, { getItems: e } = le(), o = inject(Te), l = t.value || ue(), n = ref(), r = ref(), u = ref();
    let i = () => ({});
    const d = ref(false), p = async (v = "start") => {
      var y, x, $;
      const h2 = ($ = (x = (y = r.value) == null ? void 0 : y.children) == null ? void 0 : x[0]) == null ? void 0 : $.el.parentElement;
      if (h2) {
        i();
        const k = Rt(J(h2));
        k.length && da(v === "start" ? k : k.reverse());
      }
    };
    provide(oo, {
      value: l,
      triggerRef: n,
      contentRef: r,
      focusProxyRef: u,
      wasEscapeCloseRef: d,
      onEntryKeyDown: p,
      onFocusProxyEnter: p,
      onContentFocusOutside: () => {
        var h2, y, x;
        const v = (x = (y = (h2 = r.value) == null ? void 0 : h2.children) == null ? void 0 : y[0]) == null ? void 0 : x.el.parentElement;
        if (v) {
          const $ = Rt(J(v));
          $.length && (i = vl($));
        }
      }
    });
    const m = () => {
      var v;
      o == null || o.onItemSelect(""), (v = n.value) == null || v.focus();
    }, f = (v) => {
      var x;
      const h2 = document.activeElement;
      if ((v.key === "ArrowUp" || v.key === "ArrowDown" || v.key === "ArrowLeft" || v.key === "ArrowRight") && v.preventDefault(), v.keyCode === 32 || v.key === "Enter")
        if ((o == null ? void 0 : o.modelValue.value) === l) {
          m(), v.preventDefault();
          return;
        } else {
          v.target.click(), v.preventDefault();
          return;
        }
      if (v.key === "Escape") {
        d.value = true, (x = n.value) == null || x.focus(), o.modelValue.value = "";
        return;
      }
      const y = oe(v, h2, void 0, {
        itemsArray: e(),
        loop: false
      });
      y == null || y.focus();
    };
    return (v, h2) => (openBlock(), createBlock(unref(rn), { onKeydown: f }, {
      default: withCtx(() => [
        renderSlot(v.$slots, "default")
      ]),
      _: 3
    }));
  }
});
var hl = ["id", "aria-labelledby", "data-motion", "onKeydown"];
var ca = defineComponent({
  __name: "NavigationMenuContentImpl",
  props: {
    value: {},
    triggerRef: {},
    focusProxyRef: {},
    wasEscapeCloseRef: {},
    onContentFocusOutside: { type: Function }
  },
  emits: ["escape"],
  setup(a, { expose: t, emit: e }) {
    const o = a, { getItems: l } = le(), n = ref(), r = inject(Te), u = sa(r.baseId, o.value), i = ua(r.baseId, o.value), d = ref(null), p = computed(() => {
      const v = l().map((P) => P.id.split("trigger-")[1]);
      (r == null ? void 0 : r.dir) === "rtl" && v.reverse();
      const h2 = v.indexOf(r.modelValue.value), y = v.indexOf(r.previousValue.value), x = o.value === (r == null ? void 0 : r.modelValue.value), $ = y === v.indexOf(o.value);
      if (!x && !$)
        return d.value;
      const k = (() => {
        if (h2 !== y) {
          if (x && y !== -1)
            return h2 > y ? "from-end" : "from-start";
          if ($ && h2 !== -1)
            return h2 > y ? "to-start" : "to-end";
        }
        return null;
      })();
      return d.value = k, k;
    });
    Po(n, (f) => {
      var h2, y;
      o.onContentFocusOutside();
      const v = f.target;
      (y = (h2 = r.rootNavigationMenu) == null ? void 0 : h2.value) != null && y.contains(v) && f.preventDefault();
    });
    const c = (f) => {
      var $;
      const v = f.altKey || f.ctrlKey || f.metaKey, h2 = f.key === "Tab" && !v, y = Rt(f.currentTarget);
      if (h2) {
        const k = document.activeElement, P = y.findIndex(
          (T) => T === k
        ), N = f.shiftKey ? y.slice(0, P).reverse() : y.slice(P + 1, y.length);
        if (da(N))
          f.preventDefault();
        else {
          ($ = o.focusProxyRef.value) == null || $.focus();
          return;
        }
      }
      const x = oe(
        f,
        document.activeElement,
        void 0,
        { itemsArray: y, loop: false }
      );
      x == null || x.focus(), f.preventDefault();
    }, m = (f) => {
      e("escape", f);
    };
    return t({
      ...o
    }), (f, v) => (openBlock(), createElementBlock("div", {
      ref_key: "elementRef",
      ref: n,
      id: unref(i),
      "aria-labelledby": unref(u),
      "data-motion": p.value,
      onKeydown: [
        c,
        withKeys(withModifiers(m, ["prevent"]), ["escape"])
      ]
    }, [
      renderSlot(f.$slots, "default")
    ], 40, hl));
  }
});
var Vi = defineComponent({
  inheritAttrs: false,
  __name: "NavigationMenuContent",
  setup(a) {
    const t = inject(Te), e = inject(oo), o = computed(() => (e == null ? void 0 : e.value) === (t == null ? void 0 : t.modelValue.value)), l = computed(() => ({
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
      t != null && t.viewport && i && (i.props = { ...i.props, ...l.value }, i.parentProps = r.vnode.props, e.contentRef.value = i, t.onViewportContentChange(e.value, i));
    });
    const u = () => {
      e.wasEscapeCloseRef.value = true;
    };
    return (i, d) => {
      var p;
      return (p = unref(t)) != null && p.viewport ? createCommentVNode("", true) : (openBlock(), createBlock(unref(Ze), {
        key: 0,
        present: o.value
      }, {
        default: withCtx(() => {
          var c;
          return [
            createVNode(ca, mergeProps({
              ref_key: "elementRef",
              ref: n,
              "data-state": unref(to)(o.value),
              style: {
                pointerEvents: !o.value && ((c = unref(t)) != null && c.isRootMenu) ? "none" : void 0
              }
            }, (i.$attrs, l.value), { onEscape: u }), {
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
var ji = defineComponent({
  inheritAttrs: false,
  __name: "NavigationMenuIndicator",
  setup(a) {
    const { getItems: t } = le(), e = inject(Te), o = ref(), l = computed(() => (e == null ? void 0 : e.orientation) === "horizontal"), n = computed(() => !!(e != null && e.modelValue.value)), r = ref();
    watchEffect(() => {
      if (!(e != null && e.modelValue.value)) {
        o.value = void 0;
        return;
      }
      const i = t();
      r.value = i.find(
        (d) => d.id.includes(e == null ? void 0 : e.modelValue.value)
      ), u();
    });
    const u = () => {
      r.value && (o.value = {
        size: l.value ? r.value.offsetWidth : r.value.offsetHeight,
        offset: l.value ? r.value.offsetLeft : r.value.offsetTop
      });
    };
    return ze(e.indicatorTrack, u), (i, d) => {
      var p, c;
      return (p = unref(e)) != null && p.indicatorTrack.value ? (openBlock(), createBlock(Teleport, {
        key: 0,
        to: (c = unref(e)) == null ? void 0 : c.indicatorTrack.value
      }, [
        createVNode(unref(Ze), { present: n.value }, {
          default: withCtx(() => {
            var m, f, v, h2;
            return [
              createVNode(unref(M), mergeProps({
                "aria-hidden": "",
                "data-state": n.value ? "visible" : "hidden",
                "data-orientation": unref(e).orientation,
                style: {
                  position: "absolute",
                  ...l.value ? {
                    left: 0,
                    width: ((m = o.value) == null ? void 0 : m.size) + "px",
                    transform: `translateX(${(f = o.value) == null ? void 0 : f.offset}px)`
                  } : {
                    top: 0,
                    height: ((v = o.value) == null ? void 0 : v.size) + "px",
                    transform: `translateY(${(h2 = o.value) == null ? void 0 : h2.offset}px)`
                  }
                }
              }, i.$attrs), {
                default: withCtx(() => [
                  renderSlot(i.$slots, "default")
                ]),
                _: 3
              }, 16, ["data-state", "data-orientation", "style"])
            ];
          }),
          _: 3
        }, 8, ["present"])
      ], 8, ["to"])) : createCommentVNode("", true);
    };
  }
});
var es = defineComponent({
  __name: "NavigationMenuLink",
  props: {
    active: { type: Boolean }
  },
  setup(a) {
    const t = (e) => {
    };
    return (e, o) => (openBlock(), createBlock(unref(No), {
      "data-active": e.active ? "" : void 0,
      "aria-current": e.active ? "page" : void 0,
      onClick: t,
      "data-radix-vue-collection-item": ""
    }, {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["data-active", "aria-current"]));
  }
});
var _l = defineComponent({
  __name: "VisuallyHidden",
  setup(a) {
    return (t, e) => (openBlock(), createBlock(unref(ae), {
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
var yl = ["aria-owns"];
var ts = defineComponent({
  inheritAttrs: false,
  __name: "NavigationMenuTrigger",
  props: {
    disabled: { type: Boolean }
  },
  setup(a) {
    const t = a, e = inject(Te), o = inject(oo), { primitiveElement: l, currentElement: n } = B(), r = sa(e.baseId, o.value), u = ua(e.baseId, o.value), i = ref(false), d = ref(false), p = computed(() => (o == null ? void 0 : o.value) === (e == null ? void 0 : e.modelValue.value));
    onMounted(() => {
      o.triggerRef = n;
    });
    const c = ($) => {
      d.value = false, o.wasEscapeCloseRef.value = false;
    }, m = ($) => {
      if ($.pointerType === "mouse") {
        if (t.disabled || d.value || o.wasEscapeCloseRef.value || i.value)
          return;
        e.onTriggerEnter(o.value), i.value = true;
      }
    }, f = ($) => {
      if ($.pointerType === "mouse") {
        if (t.disabled)
          return;
        e.onTriggerLeave(), i.value = false;
      }
    }, v = ($) => {
      p.value ? e == null || e.onItemSelect("") : e == null || e.onItemSelect(o.value), d.value = p.value;
    }, h2 = ($) => {
      const P = { horizontal: "ArrowDown", vertical: e.dir === "rtl" ? "ArrowLeft" : "ArrowRight" }[e.orientation];
      p.value && $.key === P && (o.onEntryKeyDown(), $.preventDefault(), $.stopPropagation());
    }, y = ($) => {
      o.focusProxyRef.value = J($);
    }, x = ($) => {
      var T, U;
      const k = (
        // @ts-ignore
        ((U = (T = o.contentRef.value) == null ? void 0 : T.children) == null ? void 0 : U[0].el).parentElement
      ), P = $.relatedTarget, D = P === n.value, N = k == null ? void 0 : k.contains(P);
      (D || !N) && o.onFocusProxyEnter(D ? "start" : "end");
    };
    return ($, k) => {
      var P;
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(unref(X), mergeProps({
          ref_key: "primitiveElement",
          ref: l,
          id: unref(r),
          disabled: $.disabled,
          "data-disabled": $.disabled ? "" : void 0,
          "data-state": unref(to)(p.value),
          "aria-expanded": p.value,
          "aria-controls": unref(u),
          onPointerenter: c,
          onPointermove: m,
          onPointerleave: f,
          onClick: v,
          onKeydown: h2
        }, $.$attrs, { "data-radix-vue-collection-item": "" }), {
          default: withCtx(() => [
            renderSlot($.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "disabled", "data-disabled", "data-state", "aria-expanded", "aria-controls"]),
        p.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          createVNode(unref(_l), {
            "aria-hidden": "",
            tabIndex: 0,
            ref: y,
            onFocus: x
          }),
          (P = unref(e)) != null && P.viewport ? (openBlock(), createElementBlock("span", {
            key: 0,
            "aria-owns": unref(u)
          }, null, 8, yl)) : createCommentVNode("", true)
        ], 64)) : createCommentVNode("", true)
      ], 64);
    };
  }
});
var os = defineComponent({
  inheritAttrs: false,
  __name: "NavigationMenuList",
  setup(a) {
    const t = inject(Te), { primitiveElement: e, currentElement: o } = B(), { setCollection: l } = le();
    return l(o), onMounted(() => {
      t == null || t.onIndicatorTrackChange(o.value);
    }), (n, r) => (openBlock(), createBlock(unref(M), {
      ref_key: "primitiveElement",
      ref: e,
      style: { position: "relative" }
    }, {
      default: withCtx(() => {
        var u;
        return [
          createVNode(unref(dn), mergeProps(n.$attrs, {
            "data-orientation": (u = unref(t)) == null ? void 0 : u.orientation
          }), {
            default: withCtx(() => [
              renderSlot(n.$slots, "default")
            ]),
            _: 3
          }, 16, ["data-orientation"])
        ];
      }),
      _: 3
    }, 512));
  }
});
var as = defineComponent({
  inheritAttrs: false,
  __name: "NavigationMenuViewport",
  setup(a) {
    const { primitiveElement: t, currentElement: e } = B(), o = inject(Te), l = ref(), n = ref(), r = computed(() => !!(o != null && o.modelValue.value)), u = computed(
      () => r.value ? o.modelValue.value : o.previousValue.value
    );
    onMounted(() => {
      o.onViewportChange(e.value);
    });
    const i = computed(
      () => (
        // @ts-ignore
        Array.from(o == null ? void 0 : o.viewportContent.value.values())
      )
    ), d = ref(false), p = (m) => {
      d.value = u.value === (m == null ? void 0 : m.value), d.value && (l.value = J(m));
    }, c = (m) => {
      var f, v, h2;
      o.modelValue.value = "", (h2 = (v = (f = m.props) == null ? void 0 : f.triggerRef) == null ? void 0 : v.value) == null || h2.focus(), m.props.wasEscapeCloseRef.value = true;
    };
    return ze(l, () => {
      l.value && (n.value = {
        width: l.value.offsetWidth,
        height: l.value.offsetHeight
      });
    }), (m, f) => (openBlock(), createBlock(unref(Ze), { present: r.value }, {
      default: withCtx(() => {
        var v, h2, y, x;
        return [
          createVNode(unref(M), mergeProps(m.$attrs, {
            ref_key: "primitiveElement",
            ref: t,
            "data-state": unref(to)(r.value),
            "data-orientation": (v = unref(o)) == null ? void 0 : v.orientation,
            style: {
              // Prevent interaction when animating out
              pointerEvents: !r.value && ((h2 = unref(o)) != null && h2.isRootMenu) ? "none" : void 0,
              ["--radix-navigation-menu-viewport-width"]: n.value ? ((y = n.value) == null ? void 0 : y.width) + "px" : void 0,
              ["--radix-navigation-menu-viewport-height"]: n.value ? ((x = n.value) == null ? void 0 : x.height) + "px" : void 0
            },
            onPointerenter: f[0] || (f[0] = ($) => {
              var k;
              return (k = unref(o)) == null ? void 0 : k.onContentEnter(u.value);
            }),
            onPointerleave: f[1] || (f[1] = ($) => {
              var k;
              return (k = unref(o)) == null ? void 0 : k.onContentLeave();
            })
          }), {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList(i.value, ($) => {
                var k, P;
                return openBlock(), createBlock(unref(Ze), {
                  key: (k = $.props) == null ? void 0 : k.value,
                  present: u.value === ((P = $.props) == null ? void 0 : P.value)
                }, {
                  default: withCtx(() => [
                    createVNode(ca, mergeProps({
                      ref_for: true,
                      ref: p
                    }, { ...$.props, ...$.parentProps }, {
                      onEscape: (D) => c($)
                    }), {
                      default: withCtx(() => [
                        (openBlock(), createBlock(resolveDynamicComponent($)))
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
var fe = "ScrollArea";
var ns = defineComponent({
  __name: "ScrollAreaRoot",
  props: {
    type: { default: "hover" },
    dir: { default: "ltr" },
    scrollHideDelay: { default: 600 }
  },
  setup(a) {
    const t = a, e = ref(0), o = ref(0), l = ref(), n = ref(), r = ref(), u = ref(), i = ref(false), d = ref(false), p = ref(), c = (x) => {
      l.value = x;
    }, m = (x) => {
      n.value = x;
    }, f = (x) => {
      r.value = x;
    }, v = (x) => {
      u.value = x;
    }, h2 = (x) => {
      i.value = x;
    }, y = (x) => {
      d.value = x;
    };
    return provide(fe, {
      type: t.type,
      dir: t.dir,
      scrollHideDelay: t.scrollHideDelay,
      scrollArea: p,
      viewport: l,
      onViewportChange: c,
      content: n,
      onContentChange: m,
      scrollbarX: r,
      scrollbarXEnabled: i,
      scrollbarY: u,
      scrollbarYEnabled: d,
      onScrollbarXChange: f,
      onScrollbarYChange: v,
      onScrollbarXEnabledChange: h2,
      onScrollbarYEnabledChange: y
    }), (x, $) => (openBlock(), createElementBlock("div", {
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
var ls = defineComponent({
  __name: "ScrollAreaViewport",
  setup(a) {
    const t = inject(
      fe
    ), e = ref(), o = ref();
    return onMounted(() => {
      t == null || t.onViewportChange(e.value), t == null || t.onContentChange(o.value);
    }), (l, n) => {
      var r, u;
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
          overflowY: (u = unref(t)) != null && u.scrollbarYEnabled.value ? "scroll" : "hidden"
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
function gl(a, [t, e]) {
  return Math.min(e, Math.max(t, a));
}
function pa(a, t) {
  return (e) => {
    if (a[0] === a[1] || t[0] === t[1])
      return t[0];
    const o = (t[1] - t[0]) / (a[1] - a[0]);
    return t[0] + o * (e - a[0]);
  };
}
function St(a) {
  const t = fa(a.viewport, a.content), e = a.scrollbar.paddingStart + a.scrollbar.paddingEnd, o = (a.scrollbar.size - e) * t;
  return Math.max(o, 18);
}
function fa(a, t) {
  const e = a / t;
  return isNaN(e) ? 0 : e;
}
var bl = (a, t = () => {
}) => {
  let e = { left: a.scrollLeft, top: a.scrollTop }, o = 0;
  return function l() {
    const n = { left: a.scrollLeft, top: a.scrollTop }, r = e.left !== n.left, u = e.top !== n.top;
    (r || u) && t(), e = n, o = window.requestAnimationFrame(l);
  }(), () => window.cancelAnimationFrame(o);
};
function Eo(a, t, e = "ltr") {
  const o = St(t), l = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, n = t.scrollbar.size - l, r = t.content - t.viewport, u = n - o, i = e === "ltr" ? [0, r] : [r * -1, 0], d = gl(
    a,
    i
  );
  return pa([0, r], [0, u])(d);
}
function dt(a) {
  return a ? parseInt(a, 10) : 0;
}
function El(a, t, e, o = "ltr") {
  const l = St(e), n = l / 2, r = t || n, u = l - r, i = e.scrollbar.paddingStart + r, d = e.scrollbar.size - e.scrollbar.paddingEnd - u, p = e.content - e.viewport, c = o === "ltr" ? [0, p] : [p * -1, 0];
  return pa(
    [i, d],
    c
  )(a);
}
function wo(a, t) {
  return a > 0 && a < t;
}
var ma = defineComponent({
  __name: "ScrollAreaScrollbarImpl",
  props: {
    isHorizontal: { type: Boolean }
  },
  emits: ["onDragScroll", "onWheelScroll", "onThumbPointerDown"],
  setup(a, { emit: t }) {
    const e = a, o = inject(
      fe
    ), l = inject(
      it
    ), n = ref(""), r = ref(), u = ref();
    function i(h2) {
      var y, x;
      if (u.value) {
        const $ = h2.clientX - ((y = u.value) == null ? void 0 : y.left), k = h2.clientY - ((x = u.value) == null ? void 0 : x.top);
        t("onDragScroll", { x: $, y: k });
      }
    }
    const d = (h2) => {
      h2.button === 0 && (h2.target.setPointerCapture(h2.pointerId), u.value = r.value.getBoundingClientRect(), n.value = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", o != null && o.viewport && (o.viewport.value.style.scrollBehavior = "auto"), i(h2));
    }, p = (h2) => {
      i(h2);
    }, c = (h2) => {
      const y = h2.target;
      y.hasPointerCapture(h2.pointerId) && y.releasePointerCapture(h2.pointerId), document.body.style.webkitUserSelect = n.value, o != null && o.viewport && (o.viewport.value.style.scrollBehavior = ""), u.value = void 0;
    }, m = (h2) => {
      var k;
      if (!l)
        return;
      const y = h2.target, x = (k = r.value) == null ? void 0 : k.contains(y), $ = l.sizes.value.content - l.sizes.value.viewport;
      x && l.handleWheelScroll(h2, $);
    };
    onMounted(() => {
      document.addEventListener("wheel", m, { passive: false });
    }), onUnmounted(() => {
      document.removeEventListener("wheel", m);
    });
    const f = () => {
      var h2, y, x, $, k, P;
      r.value && (e.isHorizontal ? l == null || l.handleSizeChange({
        content: ((h2 = o == null ? void 0 : o.viewport.value) == null ? void 0 : h2.scrollWidth) ?? 0,
        viewport: ((y = o == null ? void 0 : o.viewport.value) == null ? void 0 : y.offsetWidth) ?? 0,
        scrollbar: {
          size: ((x = r.value) == null ? void 0 : x.clientWidth) ?? 0,
          paddingStart: dt(getComputedStyle(r.value).paddingLeft),
          paddingEnd: dt(getComputedStyle(r.value).paddingRight)
        }
      }) : l == null || l.handleSizeChange({
        content: (($ = o == null ? void 0 : o.viewport.value) == null ? void 0 : $.scrollHeight) ?? 0,
        viewport: ((k = o == null ? void 0 : o.viewport.value) == null ? void 0 : k.offsetHeight) ?? 0,
        scrollbar: {
          size: ((P = r.value) == null ? void 0 : P.clientHeight) ?? 0,
          paddingStart: dt(getComputedStyle(r.value).paddingLeft),
          paddingEnd: dt(getComputedStyle(r.value).paddingRight)
        }
      }));
    };
    ze(r, f), ze(o == null ? void 0 : o.content, f);
    const v = computed(() => {
      var h2, y, x, $;
      return e.isHorizontal ? ((h2 = o == null ? void 0 : o.viewport.value) == null ? void 0 : h2.scrollWidth) !== ((y = o == null ? void 0 : o.viewport.value) == null ? void 0 : y.offsetWidth) : ((x = o == null ? void 0 : o.viewport.value) == null ? void 0 : x.scrollHeight) !== (($ = o == null ? void 0 : o.viewport.value) == null ? void 0 : $.offsetHeight);
    });
    return (h2, y) => v.value ? (openBlock(), createElementBlock("div", {
      key: 0,
      ref_key: "scrollbar",
      ref: r,
      style: { position: "absolute" },
      onPointerdown: d,
      onPointermove: p,
      onPointerup: c
    }, [
      v.value ? renderSlot(h2.$slots, "default", { key: 0 }) : createCommentVNode("", true)
    ], 544)) : createCommentVNode("", true);
  }
});
var wl = defineComponent({
  __name: "ScrollAreaScrollbarX",
  setup(a) {
    const t = inject(
      fe
    ), e = inject(
      it
    ), { primitiveElement: o, currentElement: l } = B();
    onMounted(() => {
      l.value && (t == null || t.onScrollbarYChange(l.value));
    });
    const n = computed(() => e == null ? void 0 : e.sizes.value);
    return (r, u) => {
      var i, d;
      return openBlock(), createBlock(ma, {
        "is-horizontal": true,
        "data-orientation": "horizontal",
        ref_key: "primitiveElement",
        ref: o,
        onOnDragScroll: u[0] || (u[0] = (p) => {
          var c;
          return (c = unref(e)) == null ? void 0 : c.onDragScroll(p.x);
        }),
        style: normalizeStyle({
          bottom: 0,
          left: ((i = unref(t)) == null ? void 0 : i.dir) === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
          right: ((d = unref(t)) == null ? void 0 : d.dir) === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
          ["--radix-scroll-area-thumb-width"]: n.value ? unref(St)(n.value) + "px" : void 0
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
var Cl = defineComponent({
  __name: "ScrollAreaScrollbarY",
  setup(a) {
    const t = inject(
      fe
    ), e = inject(
      it
    ), { primitiveElement: o, currentElement: l } = B();
    onMounted(() => {
      l.value && (t == null || t.onScrollbarYChange(l.value));
    });
    const n = computed(() => e == null ? void 0 : e.sizes.value);
    return (r, u) => {
      var i, d;
      return openBlock(), createBlock(ma, {
        "is-horizontal": false,
        "data-orientation": "vertical",
        ref_key: "primitiveElement",
        ref: o,
        onOnDragScroll: u[0] || (u[0] = (p) => {
          var c;
          return (c = unref(e)) == null ? void 0 : c.onDragScroll(p.y);
        }),
        style: normalizeStyle({
          top: 0,
          right: ((i = unref(t)) == null ? void 0 : i.dir) === "ltr" ? 0 : void 0,
          left: ((d = unref(t)) == null ? void 0 : d.dir) === "rtl" ? 0 : void 0,
          bottom: "var(--radix-scroll-area-corner-height)",
          ["--radix-scroll-area-thumb-height"]: n.value ? unref(St)(n.value) + "px" : void 0
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
var it = "ScrollAreaScrollbarVisible";
var ao = defineComponent({
  __name: "ScrollAreaScrollbarVisible",
  setup(a) {
    const t = inject(
      fe
    ), e = inject(
      st
    ), o = ref({
      content: 0,
      viewport: 0,
      scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
    }), l = computed(() => {
      const y = fa(o.value.viewport, o.value.content);
      return y > 0 && y < 1;
    }), n = ref(), r = ref(0), u = (y, x) => {
      if (m.value) {
        const $ = t.viewport.value.scrollLeft + y.deltaY;
        t.viewport.value.scrollLeft = $, wo($, x) && y.preventDefault();
      } else {
        const $ = t.viewport.value.scrollTop + y.deltaY;
        t.viewport.value.scrollTop = $, wo($, x) && y.preventDefault();
      }
    }, i = (y, x) => {
      m.value ? r.value = x.x : r.value = x.y;
    }, d = (y) => {
      r.value = 0;
    }, p = (y) => {
      o.value = y;
    };
    function c(y, x) {
      return El(
        y,
        r.value,
        o.value,
        x
      );
    }
    const m = computed(
      () => e == null ? void 0 : e.isHorizontal.value
    );
    return provide(
      it,
      {
        sizes: o,
        hasThumb: l,
        handleWheelScroll: u,
        handleThumbDown: i,
        handleThumbUp: d,
        handleSizeChange: p,
        onThumbPositionChange: () => {
          if (m.value) {
            if (t != null && t.viewport.value && n.value) {
              const y = t == null ? void 0 : t.viewport.value.scrollLeft, x = Eo(
                y,
                o.value,
                t == null ? void 0 : t.dir
              );
              n.value.style.transform = `translate3d(${x}px, 0, 0)`;
            }
          } else if (t != null && t.viewport.value && n.value) {
            const y = t == null ? void 0 : t.viewport.value.scrollTop, x = Eo(y, o.value);
            n.value.style.transform = `translate3d(0, ${x}px, 0)`;
          }
        },
        onThumbChange: (y) => {
          n.value = y;
        },
        onDragScroll: (y) => {
          m.value ? t.viewport.value.scrollLeft = c(
            y,
            t.dir
          ) : t.viewport.value.scrollTop = c(y);
        }
      }
    ), (y, x) => m.value ? (openBlock(), createBlock(wl, { key: 0 }, {
      default: withCtx(() => [
        renderSlot(y.$slots, "default")
      ]),
      _: 3
    })) : (openBlock(), createBlock(Cl, { key: 1 }, {
      default: withCtx(() => [
        renderSlot(y.$slots, "default")
      ]),
      _: 3
    }));
  }
});
var va = defineComponent({
  __name: "ScrollAreaScrollbarAuto",
  setup(a) {
    const t = inject(
      fe
    ), e = inject(
      st
    ), o = computed(() => e == null ? void 0 : e.visible.value), l = It(() => {
      if (t != null && t.viewport.value) {
        const n = (t == null ? void 0 : t.viewport.value.offsetWidth) < (t == null ? void 0 : t.viewport.value.scrollWidth), r = (t == null ? void 0 : t.viewport.value.offsetHeight) < (t == null ? void 0 : t.viewport.value.scrollHeight);
        e != null && e.isHorizontal.value ? e.visible.value = n : e.visible.value = r;
      }
    }, 10);
    return ze(t == null ? void 0 : t.viewport, l), ze(t == null ? void 0 : t.content, l), (n, r) => o.value ? (openBlock(), createBlock(ao, mergeProps({ key: 0 }, n.$attrs, {
      "data-state": o.value ? "visible" : "hidden"
    }), {
      default: withCtx(() => [
        renderSlot(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-state"])) : createCommentVNode("", true);
  }
});
var xl = {
  inheritAttrs: false
};
var $l = defineComponent({
  ...xl,
  __name: "ScrollAreaScrollbarHover",
  setup(a) {
    const t = inject(fe), e = inject(
      st
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
    }), (r, u) => {
      var i;
      return openBlock(), createBlock(va, mergeProps(r.$attrs, {
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
var Sl = defineComponent({
  __name: "ScrollAreaScrollbarScroll",
  setup(a) {
    const t = inject(
      fe
    ), e = inject(
      st
    ), { state: o, dispatch: l } = Do("hidden", {
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
    const n = It(() => l("SCROLL_END"), 100);
    return watchEffect(() => {
      const r = t == null ? void 0 : t.viewport.value, u = e != null && e.isHorizontal.value ? "scrollLeft" : "scrollTop";
      if (r) {
        let i = r[u];
        const d = () => {
          const p = r[u];
          i !== p && (l("SCROLL"), n()), i = p;
        };
        r.addEventListener("scroll", d);
      }
    }), (r, u) => unref(o) !== "hidden" ? (openBlock(), createBlock(ao, normalizeProps(mergeProps({ key: 0 }, r.$attrs)), {
      default: withCtx(() => [
        renderSlot(r.$slots, "default")
      ]),
      _: 3
    }, 16)) : createCommentVNode("", true);
  }
});
var st = "ScrollAreaScrollbar";
var kl = {
  inheritAttrs: false
};
var rs = defineComponent({
  ...kl,
  __name: "ScrollAreaScrollbar",
  props: {
    orientation: { default: "vertical" },
    forceMount: { type: Boolean, default: void 0 }
  },
  setup(a) {
    const t = a, e = inject(fe), o = ref(false), l = computed(() => t.orientation === "horizontal");
    return watch(
      l,
      () => {
        l.value ? e == null || e.onScrollbarXEnabledChange(true) : e == null || e.onScrollbarYEnabledChange(true);
      },
      { immediate: true }
    ), onUnmounted(() => {
      e == null || e.onScrollbarXEnabledChange(false), e == null || e.onScrollbarYEnabledChange(false);
    }), provide(st, {
      orientation: toRef(() => t.orientation),
      forceMount: toRef(() => t.forceMount),
      isHorizontal: l,
      visible: o
    }), (n, r) => {
      var u, i, d, p;
      return ((u = unref(e)) == null ? void 0 : u.type) === "hover" ? (openBlock(), createBlock($l, mergeProps({ key: 0 }, n.$attrs, { forceMount: n.forceMount }), {
        default: withCtx(() => [
          renderSlot(n.$slots, "default")
        ]),
        _: 3
      }, 16, ["forceMount"])) : ((i = unref(e)) == null ? void 0 : i.type) === "scroll" ? (openBlock(), createBlock(Sl, mergeProps({ key: 1 }, n.$attrs, { forceMount: n.forceMount }), {
        default: withCtx(() => [
          renderSlot(n.$slots, "default")
        ]),
        _: 3
      }, 16, ["forceMount"])) : ((d = unref(e)) == null ? void 0 : d.type) === "auto" ? (openBlock(), createBlock(va, mergeProps({ key: 2 }, n.$attrs, { forceMount: n.forceMount }), {
        default: withCtx(() => [
          renderSlot(n.$slots, "default")
        ]),
        _: 3
      }, 16, ["forceMount"])) : ((p = unref(e)) == null ? void 0 : p.type) === "always" ? (openBlock(), createBlock(ao, mergeProps({ key: 3 }, n.$attrs, { forceMount: n.forceMount }), {
        default: withCtx(() => [
          renderSlot(n.$slots, "default")
        ]),
        _: 3
      }, 16, ["forceMount"])) : createCommentVNode("", true);
    };
  }
});
var is = defineComponent({
  __name: "ScrollAreaThumb",
  setup(a) {
    const t = inject(
      fe
    ), e = inject(
      it
    ), o = (c) => {
      const f = c.target.getBoundingClientRect(), v = c.clientX - f.left, h2 = c.clientY - f.top;
      e == null || e.handleThumbDown(c, { x: v, y: h2 });
    }, l = (c) => {
      e == null || e.handleThumbUp(c);
    }, { primitiveElement: n, currentElement: r } = B(), u = ref(), i = computed(() => t == null ? void 0 : t.viewport.value), d = () => {
      if (!u.value) {
        const c = bl(
          i.value,
          e == null ? void 0 : e.onThumbPositionChange
        );
        u.value = c, e == null || e.onThumbPositionChange();
      }
    }, p = computed(() => e == null ? void 0 : e.sizes.value);
    return Xa(p, () => {
      e == null || e.onThumbChange(r.value), i.value && (e == null || e.onThumbPositionChange(), i.value.addEventListener("scroll", d));
    }), onUnmounted(() => {
      var c;
      i.value.removeEventListener("scroll", d), (c = t == null ? void 0 : t.viewport.value) == null || c.removeEventListener(
        "scroll",
        d
      );
    }), (c, m) => {
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
  Yt as ACCORDION_COLLAPSIBLE_INJECTION_KEY,
  nt as ACCORDION_IMPL_INJECTION_KEY,
  bt as ACCORDION_ITEM_INJECTION_KEY,
  vn as ACCORDION_KEYS,
  zt as ACCORDION_VALUE_INJECTION_KEY,
  Pl as AccordionContent,
  Ol as AccordionHeader,
  Ko as AccordionImpl,
  hn as AccordionImplMultiple,
  _n as AccordionImplSingle,
  Tl as AccordionItem,
  Bl as AccordionRoot,
  Ml as AccordionTrigger,
  gr as AlertDialogAction,
  hr as AlertDialogCancel,
  mr as AlertDialogContent,
  yr as AlertDialogDescription,
  vr as AlertDialogOverlay,
  fr as AlertDialogPortal,
  cr as AlertDialogRoot,
  _r as AlertDialogTitle,
  pr as AlertDialogTrigger,
  Wl as AspectRatio,
  Ar as AvatarFallback,
  kr as AvatarImage,
  Sr as AvatarRoot,
  Ht as COLLAPSIBLE_INJECTION_KEY,
  Rl as CheckboxIndicator,
  Dl as CheckboxRoot,
  mn as CollapsibleContent,
  cn as CollapsibleRoot,
  pn as CollapsibleTrigger,
  ci as ContextMenuArrow,
  hi as ContextMenuCheckboxItem,
  di as ContextMenuContent,
  mi as ContextMenuGroup,
  fi as ContextMenuItem,
  _i as ContextMenuItemIndicator,
  yi as ContextMenuLabel,
  ui as ContextMenuPortal,
  gi as ContextMenuRadioGroup,
  bi as ContextMenuRadioItem,
  ii as ContextMenuRoot,
  vi as ContextMenuSeparator,
  pi as ContextMenuSub,
  Ei as ContextMenuSubContent,
  wi as ContextMenuSubTrigger,
  si as ContextMenuTrigger,
  sr as DialogClose,
  rr as DialogContent,
  dr as DialogDescription,
  ir as DialogOverlay,
  lr as DialogPortal,
  ar as DialogRoot,
  ur as DialogTitle,
  nr as DialogTrigger,
  Fr as DropdownMenuArrow,
  ei as DropdownMenuCheckboxItem,
  Jr as DropdownMenuContent,
  Vr as DropdownMenuGroup,
  Qr as DropdownMenuItem,
  ti as DropdownMenuItemIndicator,
  oi as DropdownMenuLabel,
  Xr as DropdownMenuPortal,
  ai as DropdownMenuRadioGroup,
  ni as DropdownMenuRadioItem,
  qr as DropdownMenuRoot,
  jr as DropdownMenuSeparator,
  Zr as DropdownMenuSub,
  li as DropdownMenuSubContent,
  ri as DropdownMenuSubTrigger,
  Gr as DropdownMenuTrigger,
  Lr as HoverCardArrow,
  Ir as HoverCardContent,
  Nr as HoverCardPortal,
  Dr as HoverCardRoot,
  Rr as HoverCardTrigger,
  Kl as Label,
  Li as MenubarArrow,
  Wi as MenubarCheckboxItem,
  Ii as MenubarContent,
  zi as MenubarGroup,
  Hi as MenubarItem,
  Ui as MenubarItemIndicator,
  qi as MenubarLabel,
  Di as MenubarMenu,
  Ni as MenubarPortal,
  Gi as MenubarRadioGroup,
  Xi as MenubarRadioItem,
  Mi as MenubarRoot,
  Yi as MenubarSeparator,
  Ki as MenubarSub,
  Ji as MenubarSubContent,
  Fi as MenubarSubTrigger,
  Ri as MenubarTrigger,
  Vi as NavigationMenuContent,
  ji as NavigationMenuIndicator,
  Qi as NavigationMenuItem,
  es as NavigationMenuLink,
  os as NavigationMenuList,
  Zi as NavigationMenuRoot,
  ts as NavigationMenuTrigger,
  as as NavigationMenuViewport,
  Wr as PopoverArrow,
  Ur as PopoverClose,
  Yr as PopoverContent,
  zr as PopoverPortal,
  Kr as PopoverRoot,
  Hr as PopoverTrigger,
  or as ProgressIndicator,
  tr as ProgressRoot,
  er as RadioGroupIndicator,
  jl as RadioGroupItem,
  Vl as RadioGroupRoot,
  ns as ScrollAreaRoot,
  rs as ScrollAreaScrollbar,
  is as ScrollAreaThumb,
  ls as ScrollAreaViewport,
  ki as SelectArrow,
  Si as SelectContent,
  Oi as SelectGroup,
  Bi as SelectItem,
  Ti as SelectItemIndicator,
  Pi as SelectLabel,
  $i as SelectPortal,
  Ci as SelectRoot,
  Ai as SelectSeparator,
  xi as SelectTrigger,
  Ll as Separator,
  Ql as SliderRange,
  Jl as SliderRoot,
  Fl as SliderThumb,
  Zl as SliderTrack,
  Nl as SwitchRoot,
  Il as SwitchThumb,
  Gl as TabsContent,
  ql as TabsList,
  Ul as TabsRoot,
  Xl as TabsTrigger,
  Hl as Toggle,
  Yl as ToggleGroupItem,
  zl as ToggleGroupRoot,
  Er as ToolbarButton,
  wr as ToolbarLink,
  br as ToolbarRoot,
  $r as ToolbarSeparator,
  Cr as ToolbarToggleGroup,
  xr as ToolbarToggleItem,
  Mr as TooltipArrow,
  Br as TooltipContent,
  Or as TooltipPortal,
  Tr as TooltipRoot,
  Pr as TooltipTrigger
};
//# sourceMappingURL=radix-vue.js.map
