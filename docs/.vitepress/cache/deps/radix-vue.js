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

// node_modules/.pnpm/radix-vue@0.1.5_vue@3.3.4/node_modules/radix-vue/dist/index.js
var Ct = (n, t) => {
  const e = n.__vccOpts || n;
  for (const [o, a] of t)
    e[o] = a;
  return e;
};
var Yn = {};
function Wn(n, t) {
  var e, o, a;
  return openBlock(), createBlock(resolveDynamicComponent(
    // @ts-ignore we can ignore this as we have validated the existence of 1 child in Primitive.vue
    (a = (o = (e = n.$slots).default) == null ? void 0 : o.call(e)[0].children) == null ? void 0 : a[0]
  ), normalizeProps(guardReactiveProps(n.$attrs)), null, 16);
}
var Un = Ct(Yn, [["render", Wn]]);
var qn = Object.defineProperty;
var Gn = Object.defineProperties;
var Xn = Object.getOwnPropertyDescriptors;
var ho = Object.getOwnPropertySymbols;
var Fn = Object.prototype.hasOwnProperty;
var Jn = Object.prototype.propertyIsEnumerable;
var _o = (n, t, e) => t in n ? qn(n, t, { enumerable: true, configurable: true, writable: true, value: e }) : n[t] = e;
var Zn = (n, t) => {
  for (var e in t || (t = {}))
    Fn.call(t, e) && _o(n, e, t[e]);
  if (ho)
    for (var e of ho(t))
      Jn.call(t, e) && _o(n, e, t[e]);
  return n;
};
var Qn = (n, t) => Gn(n, Xn(t));
function Vn(n, t) {
  var e;
  const o = shallowRef();
  return watchEffect(() => {
    o.value = n();
  }, Qn(Zn({}, t), {
    flush: (e = t == null ? void 0 : t.flush) != null ? e : "sync"
  })), readonly(o);
}
function jn(n, t) {
  let e, o, a;
  const l = ref(true), r = () => {
    l.value = true, a();
  };
  watch(n, r, { flush: "sync" });
  const s = typeof t == "function" ? t : t.get, i = typeof t == "function" ? void 0 : t.set, d = customRef((p, c) => (o = p, a = c, {
    get() {
      return l.value && (e = s(), l.value = false), o(), e;
    },
    set(m) {
      i == null || i(m);
    }
  }));
  return Object.isExtensible(d) && (d.trigger = r), d;
}
function Lo(n) {
  return getCurrentScope() ? (onScopeDispose(n), true) : false;
}
function ea(n) {
  let t = false, e;
  const o = effectScope(true);
  return (...a) => (t || (e = o.run(() => n(...a)), t = true), e);
}
function mt(n) {
  return typeof n == "function" ? n() : unref(n);
}
var Ko = typeof window < "u";
var ta = (n) => typeof n < "u";
var vt = () => {
};
var oa = na();
function na() {
  var n;
  return Ko && ((n = window == null ? void 0 : window.navigator) == null ? void 0 : n.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
}
function aa(n, t) {
  function e(...o) {
    return new Promise((a, l) => {
      Promise.resolve(n(() => t.apply(this, o), { fn: t, thisArg: this, args: o })).then(a).catch(l);
    });
  }
  return e;
}
function la(n, t = {}) {
  let e, o, a = vt;
  const l = (s) => {
    clearTimeout(s), a(), a = vt;
  };
  return (s) => {
    const i = mt(n), d = mt(t.maxWait);
    return e && l(e), i <= 0 || d !== void 0 && d <= 0 ? (o && (l(o), o = null), Promise.resolve(s())) : new Promise((p, c) => {
      a = t.rejectOnCancel ? c : p, d && !o && (o = setTimeout(() => {
        e && l(e), o = null, p(s());
      }, d)), e = setTimeout(() => {
        o && l(o), o = null, p(s());
      }, i);
    });
  };
}
function Gt(n, t = 200, e = {}) {
  return aa(
    la(t, e),
    n
  );
}
function ra(n, t, e = {}) {
  var o, a;
  const {
    flush: l = "sync",
    deep: r = false,
    immediate: s = true,
    direction: i = "both",
    transform: d = {}
  } = e;
  let p, c;
  const m = (o = d.ltr) != null ? o : (v) => v, f = (a = d.rtl) != null ? a : (v) => v;
  return (i === "both" || i === "ltr") && (p = watch(
    n,
    (v) => t.value = m(v),
    { flush: l, deep: r, immediate: s }
  )), (i === "both" || i === "rtl") && (c = watch(
    t,
    (v) => n.value = f(v),
    { flush: l, deep: r, immediate: s }
  )), () => {
    p == null || p(), c == null || c();
  };
}
function ia(n, t, e) {
  const o = watch(n, (...a) => (nextTick(() => o()), t(...a)), e);
}
function J(n) {
  var t;
  const e = mt(n);
  return (t = e == null ? void 0 : e.$el) != null ? t : e;
}
var xt = Ko ? window : void 0;
function Je(...n) {
  let t, e, o, a;
  if (typeof n[0] == "string" || Array.isArray(n[0]) ? ([e, o, a] = n, t = xt) : [t, e, o, a] = n, !t)
    return vt;
  Array.isArray(e) || (e = [e]), Array.isArray(o) || (o = [o]);
  const l = [], r = () => {
    l.forEach((p) => p()), l.length = 0;
  }, s = (p, c, m, f) => (p.addEventListener(c, m, f), () => p.removeEventListener(c, m, f)), i = watch(
    () => [J(t), mt(a)],
    ([p, c]) => {
      r(), p && l.push(
        ...e.flatMap((m) => o.map((f) => s(p, m, f, c)))
      );
    },
    { immediate: true, flush: "post" }
  ), d = () => {
    i(), r();
  };
  return Lo(d), d;
}
var yo = false;
function ke(n, t, e = {}) {
  const { window: o = xt, ignore: a = [], capture: l = true, detectIframe: r = false } = e;
  if (!o)
    return;
  oa && !yo && (yo = true, Array.from(o.document.body.children).forEach((m) => m.addEventListener("click", vt)));
  let s = true;
  const i = (m) => a.some((f) => {
    if (typeof f == "string")
      return Array.from(o.document.querySelectorAll(f)).some((v) => v === m.target || m.composedPath().includes(v));
    {
      const v = J(f);
      return v && (m.target === v || m.composedPath().includes(v));
    }
  }), p = [
    Je(o, "click", (m) => {
      const f = J(n);
      if (!(!f || f === m.target || m.composedPath().includes(f))) {
        if (m.detail === 0 && (s = !i(m)), !s) {
          s = true;
          return;
        }
        t(m);
      }
    }, { passive: true, capture: l }),
    Je(o, "pointerdown", (m) => {
      const f = J(n);
      f && (s = !m.composedPath().includes(f) && !i(m));
    }, { passive: true }),
    r && Je(o, "blur", (m) => {
      setTimeout(() => {
        var f;
        const v = J(n);
        ((f = o.document.activeElement) == null ? void 0 : f.tagName) === "IFRAME" && !(v != null && v.contains(o.document.activeElement)) && t(m);
      }, 0);
    })
  ].filter(Boolean);
  return () => p.forEach((m) => m());
}
function Xt(n = {}) {
  var t;
  const { window: e = xt } = n, o = (t = n.document) != null ? t : e == null ? void 0 : e.document, a = jn(
    () => null,
    () => o == null ? void 0 : o.activeElement
  );
  return e && (Je(e, "blur", (l) => {
    l.relatedTarget === null && a.trigger();
  }, true), Je(e, "focus", a.trigger, true)), a;
}
function sa() {
  const n = ref(false);
  return getCurrentInstance() && onMounted(() => {
    n.value = true;
  }), n;
}
function ua(n) {
  const t = sa();
  return computed(() => (t.value, !!n()));
}
function da(n) {
  return JSON.parse(JSON.stringify(n));
}
var go = Object.getOwnPropertySymbols;
var ca = Object.prototype.hasOwnProperty;
var pa = Object.prototype.propertyIsEnumerable;
var fa = (n, t) => {
  var e = {};
  for (var o in n)
    ca.call(n, o) && t.indexOf(o) < 0 && (e[o] = n[o]);
  if (n != null && go)
    for (var o of go(n))
      t.indexOf(o) < 0 && pa.call(n, o) && (e[o] = n[o]);
  return e;
};
function He(n, t, e = {}) {
  const o = e, { window: a = xt } = o, l = fa(o, ["window"]);
  let r;
  const s = ua(() => a && "ResizeObserver" in a), i = () => {
    r && (r.disconnect(), r = void 0);
  }, d = computed(
    () => Array.isArray(n) ? n.map((m) => J(m)) : [J(n)]
  ), p = watch(
    d,
    (m) => {
      if (i(), s.value && a) {
        r = new ResizeObserver(t);
        for (const f of m)
          f && r.observe(f, l);
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
function K(n, t, e, o = {}) {
  var a, l, r;
  const {
    clone: s = false,
    passive: i = false,
    eventName: d,
    deep: p = false,
    defaultValue: c,
    shouldEmit: m
  } = o, f = getCurrentInstance(), v = e || (f == null ? void 0 : f.emit) || ((a = f == null ? void 0 : f.$emit) == null ? void 0 : a.bind(f)) || ((r = (l = f == null ? void 0 : f.proxy) == null ? void 0 : l.$emit) == null ? void 0 : r.bind(f == null ? void 0 : f.proxy));
  let h2 = d;
  t || (t = "modelValue"), h2 = h2 || `update:${t.toString()}`;
  const y = (S) => s ? typeof s == "function" ? s(S) : da(S) : S, C = () => ta(n[t]) ? y(n[t]) : c, $ = (S) => {
    m ? m(S) && v(h2, S) : v(h2, S);
  };
  if (i) {
    const S = C(), P = ref(S);
    return watch(
      () => n[t],
      (R) => P.value = y(R)
    ), watch(
      P,
      (R) => {
        (R !== n[t] || p) && $(R);
      },
      { deep: p }
    ), P;
  } else
    return computed({
      get() {
        return C();
      },
      set(S) {
        $(S);
      }
    });
}
var Ho = (n, t) => {
  const e = (o) => {
    const a = J(n);
    (a == null ? void 0 : a.contains(o.relatedTarget)) || t(o);
  };
  onMounted(() => {
    const o = J(n);
    o == null || o.addEventListener("focusout", e);
  }), onUnmounted(() => {
    const o = J(n);
    o == null || o.removeEventListener("focusout", e);
  });
};
function oe(n, t, e, o = {}) {
  const {
    arrowKeyOptions: a = "both",
    attributeName: l = "data-radix-vue-collection-item",
    itemsArray: r = [],
    loop: s = true,
    dir: i = "ltr",
    preventScroll: d = true
  } = o, [p, c, m, f] = [
    n.key === "ArrowRight",
    n.key === "ArrowLeft",
    n.key === "ArrowUp",
    n.key === "ArrowDown"
  ], v = m || f, h2 = p || c;
  if (!v && !h2 || a === "vertical" && h2 || a === "horizontal" && v)
    return null;
  const y = e ? Array.from(e.querySelectorAll(`[${l}]`)) : r;
  return y.length ? (d && n.preventDefault(), zo(y, t, {
    goForward: v ? f : i === "ltr" ? p : c,
    loop: s
  })) : null;
}
function zo(n, t, { goForward: e, loop: o }, a = n.length) {
  if (--a === 0)
    return null;
  const l = n.indexOf(t), r = e ? l + 1 : l - 1;
  if (!o && (r < 0 || r >= n.length))
    return null;
  const s = (r + n.length) % n.length, i = n[s];
  return i ? i.hasAttribute("disabled") && i.getAttribute("disabled") !== "false" ? zo(
    n,
    i,
    { goForward: e, loop: o },
    a
  ) : i : null;
}
async function Yo(n, t, e = 500) {
  let o = true, a, l;
  const r = new Promise((d) => {
    l = d, a = setTimeout(() => {
      i(), d(o);
    }, e);
  });
  function s() {
    o = false, i(), clearTimeout(a), a = void 0, l(false);
  }
  function i() {
    t.removeEventListener("mouseleave", s);
  }
  return t.addEventListener("mouseleave", s), r;
}
var Wo = (n, t = 300) => {
  let e = true, o, a;
  const l = n.target, r = new Promise((d) => {
    a = d, o = setTimeout(() => {
      i(), d(e);
    }, t);
  });
  function s() {
    e = false, i(), clearTimeout(o), o = void 0, a(false);
  }
  function i() {
    l.removeEventListener("mouseenter", s);
  }
  return l.addEventListener("mouseenter", s), r;
};
function Uo(n, t) {
  const e = ref(n);
  function o(l) {
    return t[e.value][l] ?? e.value;
  }
  return {
    state: e,
    dispatch: (l) => {
      e.value = o(l);
    }
  };
}
var ma = "data-radix-vue-collection-item";
var bo = Symbol();
var re = () => {
  const n = (a) => {
    provide(bo, {
      collectionRef: a
    });
  }, t = inject(bo);
  return { createCollection: n, setCollection: (a) => {
    t && (t.collectionRef = a);
  }, getItems: (a) => {
    const l = a ?? J(t == null ? void 0 : t.collectionRef);
    return l ? Array.from(
      l.querySelectorAll(
        `[${ma}]:not([data-disabled])`
      )
    ) : [];
  } };
};
var va = (n) => {
  const t = ref(), e = computed(() => {
    var a;
    return ((a = t.value) == null ? void 0 : a.width) ?? 0;
  }), o = computed(() => {
    var a;
    return ((a = t.value) == null ? void 0 : a.height) ?? 0;
  });
  return onMounted(() => {
    const a = J(n);
    if (a) {
      t.value = { width: a.offsetWidth, height: a.offsetHeight };
      const l = new ResizeObserver((r) => {
        if (!Array.isArray(r) || !r.length)
          return;
        const s = r[0];
        let i, d;
        if ("borderBoxSize" in s) {
          const p = s.borderBoxSize, c = Array.isArray(p) ? p[0] : p;
          i = c.inlineSize, d = c.blockSize;
        } else
          i = a.offsetWidth, d = a.offsetHeight;
        t.value = { width: i, height: d };
      });
      return l.observe(a, { box: "border-box" }), () => l.unobserve(a);
    } else
      t.value = void 0;
  }), {
    width: e,
    height: o
  };
};
var ha = ea(() => ({ count: ref(0) }));
var ce = (n) => {
  const { count: t } = ha();
  return n || t.value++, n || `radix-${t.value}`;
};
function Ft(n) {
  if (n) {
    const t = [
      ...Array.from(
        n.querySelectorAll(
          'a[href], button, input, textarea, select, details,[tabindex]:not([tabindex="-1"])'
        )
      )
    ].filter(
      (l) => !l.hasAttribute("disabled") && !l.getAttribute("aria-hidden")
    ), e = t[0], o = t[t.length - 1], a = 9;
    return e && e.focus(), n.addEventListener("keydown", function(l) {
      (l.key === "Tab" || l.keyCode === a) && (l.shiftKey ? document.activeElement === e && (o.focus(), l.preventDefault()) : document.activeElement === o && (e.focus(), l.preventDefault()));
    }), e;
  }
}
function qo(n) {
  return n ? n.flatMap((t) => t.type === Fragment ? qo(t.children) : [t]) : [];
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
var Q = _a.reduce((n, t) => {
  const e = defineComponent({
    props: {
      asChild: {
        type: Boolean,
        default: false
      }
    },
    setup(o, { slots: a }) {
      var r, s;
      if (!!o.asChild) {
        const i = qo((r = a.default) == null ? void 0 : r.call(a)), d = getCurrentInstance();
        if (i.length > 1) {
          const c = (s = d == null ? void 0 : d.parent) != null && s.type.__name ? `<${d.parent.type.__name} />` : "component";
          throw new Error(
            [
              `Detected an invalid children for \`${c}\` with \`asChild\` prop.`,
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
        return typeof i[0].type == "string" ? () => h(i[0]) : () => h(Un, () => {
          var c;
          return (c = a.default) == null ? void 0 : c.call(a);
        });
      } else
        return () => {
          var i;
          return h(t, (i = a.default) == null ? void 0 : i.call(a));
        };
    }
  });
  return { ...n, [t]: e };
}, {});
var B = () => {
  const n = ref(), t = computed(() => J(n));
  return {
    primitiveElement: n,
    currentElement: t
  };
};
var Go = Q.a;
var X = Q.button;
var D = Q.div;
Q.form;
var Xo = Q.h2;
var ya = Q.h3;
var ga = Q.img;
Q.input;
var lt = Q.label;
var ba = Q.li;
var wa = Q.nav;
Q.ol;
var Fo = Q.p;
var ne = Q.span;
var Ea = Q.svg;
var Ca = Q.ul;
var Jt = Symbol();
var xa = defineComponent({
  __name: "CollapsibleRoot",
  props: {
    asChild: { type: Boolean, default: false },
    defaultOpen: { type: Boolean, default: false },
    open: { type: Boolean, default: void 0 },
    disabled: { type: Boolean }
  },
  emits: ["update:open"],
  setup(n, { emit: t }) {
    const e = n, o = K(e, "open", t, {
      defaultValue: e.defaultOpen,
      passive: true
    }), a = K(e, "disabled");
    return provide(Jt, {
      contentId: ce(),
      disabled: a,
      open: o,
      onOpenToggle: () => {
        o.value = !o.value;
      }
    }), (l, r) => (openBlock(), createBlock(unref(D), {
      asChild: e.asChild,
      "data-state": e.open ? "open" : "closed",
      "data-disabled": e.disabled ? "" : void 0
    }, {
      default: withCtx(() => [
        renderSlot(l.$slots, "default", { open: unref(o) })
      ]),
      _: 3
    }, 8, ["asChild", "data-state", "data-disabled"]));
  }
});
var $a = defineComponent({
  __name: "CollapsibleTrigger",
  props: {
    asChild: { type: Boolean, default: false }
  },
  setup(n) {
    const t = n, e = inject(
      Jt
    );
    return (o, a) => {
      var l, r, s, i, d, p, c, m;
      return openBlock(), createBlock(unref(X), {
        type: "button",
        asChild: t.asChild,
        "aria-controls": (l = unref(e)) == null ? void 0 : l.contentId,
        "aria-expanded": ((r = unref(e)) == null ? void 0 : r.open.value) || false,
        "data-state": (s = unref(e)) != null && s.open.value ? "open" : "closed",
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
function ka(n, t) {
  const e = ref({}), o = ref(n.value), a = ref("none"), l = n.value ? "mounted" : "unmounted", { state: r, dispatch: s } = Uo(l, {
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
    const d = e.value, p = o.value, c = p !== n.value;
    if (await nextTick(), c) {
      const m = a.value, f = Mt(t);
      n.value ? s("MOUNT") : f === "none" || (d == null ? void 0 : d.display) === "none" ? s("UNMOUNT") : s(p && m !== f ? "ANIMATION_OUT" : "UNMOUNT"), o.value = n.value;
    }
  }), t) {
    const d = (c) => {
      const f = Mt(t).includes(
        c.animationName
      );
      c.target === t && f && s("ANIMATION_END");
    }, p = (c) => {
      c.target === t && (a.value = Mt(t));
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
function Mt(n) {
  return n && getComputedStyle(n).animationName || "none";
}
var Qe = defineComponent({
  __name: "Presence",
  props: {
    present: { type: Boolean }
  },
  setup(n, { expose: t }) {
    const e = n, { present: o } = toRefs(e), a = useSlots();
    let l = ref(false);
    const r = {
      created(i) {
        const { isPresent: d } = ka(o, i);
        ra(l, d, { direction: "rtl" });
      }
    }, s = () => {
      var i, d;
      return (
        // @ts-ignore
        withDirectives((d = (i = a.default) == null ? void 0 : i.call(a)) == null ? void 0 : d[0], [
          [r],
          [vShow, l.value]
        ])
      );
    };
    return t({
      present: l
    }), (i, d) => (openBlock(), createBlock(s));
  }
});
var Sa = defineComponent({
  inheritAttrs: false,
  __name: "CollapsibleContent",
  props: {
    asChild: { type: Boolean, default: false }
  },
  setup(n) {
    const t = n, e = inject(
      Jt
    ), o = ref(), { primitiveElement: a, currentElement: l } = B(), r = ref(0), s = ref(0), i = computed(() => e == null ? void 0 : e.open.value), d = ref(i.value), p = ref();
    return watch(
      () => {
        var c;
        return [i.value, (c = o.value) == null ? void 0 : c.present];
      },
      async () => {
        await nextTick();
        const c = l.value;
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
    }), (c, m) => (openBlock(), createBlock(unref(Qe), {
      ref_key: "presentRef",
      ref: o,
      present: unref(e).open.value
    }, {
      default: withCtx(() => {
        var f, v, h2, y, C;
        return [
          createVNode(unref(D), mergeProps({
            ref_key: "primitiveElement",
            ref: a
          }, c.$attrs, {
            asChild: t.asChild,
            "data-state": (f = unref(e)) != null && f.open.value ? "open" : "closed",
            "data-disabled": (h2 = (v = unref(e)) == null ? void 0 : v.disabled) != null && h2.value ? "true" : void 0,
            id: (y = unref(e)) == null ? void 0 : y.contentId,
            hidden: !((C = unref(e)) != null && C.open),
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
var Zt = Symbol();
var Qt = Symbol();
var rt = Symbol();
var Jo = defineComponent({
  __name: "AccordionImpl",
  props: {
    disabled: { type: Boolean },
    orientation: { default: "vertical" },
    dir: {}
  },
  setup(n) {
    const t = n, { primitiveElement: e, currentElement: o } = B();
    return provide(rt, {
      disabled: t.disabled,
      direction: t.dir,
      orientation: t.orientation,
      parentElement: o
    }), (a, l) => (openBlock(), createBlock(unref(D), {
      ref_key: "primitiveElement",
      ref: e
    }, {
      default: withCtx(() => [
        renderSlot(a.$slots, "default")
      ]),
      _: 3
    }, 512));
  }
});
var $t = Symbol();
var Aa = [
  "Home",
  "End",
  "ArrowDown",
  "ArrowUp",
  "ArrowLeft",
  "ArrowRight"
];
var Hl = defineComponent({
  __name: "AccordionItem",
  props: {
    disabled: { type: Boolean },
    value: {},
    asChild: { type: Boolean }
  },
  setup(n) {
    const t = n, e = inject(
      rt
    ), o = inject(
      Zt
    ), a = computed({
      get: () => t.value && (o == null ? void 0 : o.modelValue.value.includes(t.value)) || false,
      set: (i) => {
        i ? o == null || o.onItemOpen(t.value) : o == null || o.onItemClose(t.value);
      }
    }), l = computed(
      () => (e == null ? void 0 : e.disabled) || t.disabled
    );
    provide($t, {
      open: a.value,
      disabled: l.value,
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
      if (!Aa.includes(i.key))
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
      const h2 = 0, y = f - 1, C = () => {
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
          (e == null ? void 0 : e.orientation) === "horizontal" && (d ? C() : $());
          break;
        case "ArrowDown":
          (e == null ? void 0 : e.orientation) === "vertical" && C();
          break;
        case "ArrowLeft":
          (e == null ? void 0 : e.orientation) === "horizontal" && (d ? $() : C());
          break;
        case "ArrowUp":
          (e == null ? void 0 : e.orientation) === "vertical" && $();
          break;
      }
      const S = v % f;
      c[S].focus();
    };
    return (i, d) => {
      var p;
      return openBlock(), createBlock(unref(xa), {
        "data-orientation": (p = unref(e)) == null ? void 0 : p.orientation,
        "data-state": a.value ? "open" : "closed",
        disabled: l.value,
        open: a.value,
        "onUpdate:open": d[0] || (d[0] = (c) => a.value = c),
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
var zl = defineComponent({
  __name: "AccordionContent",
  setup(n) {
    const t = inject(
      rt
    ), e = inject(
      $t
    );
    return (o, a) => {
      var l, r;
      return openBlock(), createBlock(unref(Sa), {
        role: "region",
        "aria-labelledby": (l = unref(e)) == null ? void 0 : l.triggerId,
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
var Yl = defineComponent({
  __name: "AccordionHeader",
  setup(n) {
    const t = inject(
      rt
    ), e = inject(
      $t
    );
    return (o, a) => {
      var l, r, s;
      return openBlock(), createBlock(unref(ya), {
        "data-orientation": (l = unref(t)) == null ? void 0 : l.orientation,
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
var Ta = defineComponent({
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
  setup(n, { emit: t }) {
    const e = n, o = K(e, "modelValue", t, {
      defaultValue: e.defaultValue,
      passive: true
    });
    return provide(Zt, {
      modelValue: o,
      onItemOpen: (r) => {
        o.value = [...o.value, r];
      },
      onItemClose: (r) => {
        o.value = [...o.value].filter(
          (s) => s !== r
        );
      }
    }), provide(Qt, {
      collapsible: false
    }), (r, s) => (openBlock(), createBlock(Jo, normalizeProps(guardReactiveProps(e)), {
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
    dir: {}
  },
  emits: ["update:modelValue"],
  setup(n, { emit: t }) {
    const e = n, o = K(e, "modelValue", t, {
      defaultValue: e.defaultValue ?? "",
      passive: true
    });
    return provide(Zt, {
      modelValue: o,
      onItemOpen: (a) => {
        o.value = a;
      },
      onItemClose: (a) => {
        e.collapsible && (o.value = "");
      }
    }), provide(Qt, {
      collapsible: e.collapsible
    }), (a, l) => (openBlock(), createBlock(Jo, normalizeProps(guardReactiveProps(e)), {
      default: withCtx(() => [
        renderSlot(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Wl = defineComponent({
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
  setup(n, { emit: t }) {
    const e = n;
    return (o, a) => e.type === "multiple" ? (openBlock(), createBlock(Ta, mergeProps({ key: 0 }, e, {
      "onUpdate:modelValue": a[0] || (a[0] = (l) => t("update:modelValue", l))
    }), {
      default: withCtx(() => [
        renderSlot(o.$slots, "default")
      ]),
      _: 3
    }, 16)) : (openBlock(), createBlock(Pa, mergeProps({ key: 1 }, e, {
      "onUpdate:modelValue": a[1] || (a[1] = (l) => t("update:modelValue", l))
    }), {
      default: withCtx(() => [
        renderSlot(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Ul = defineComponent({
  __name: "AccordionTrigger",
  setup(n) {
    const t = inject(
      rt
    ), e = inject(
      $t
    ), o = inject(Qt);
    return (a, l) => {
      var r, s, i, d;
      return openBlock(), createBlock(unref($a), {
        "data-radix-vue-collection-item": "",
        "aria-disabled": ((r = unref(e)) == null ? void 0 : r.open) && !((s = unref(o)) != null && s.collapsible) || void 0,
        "data-orientation": (i = unref(t)) == null ? void 0 : i.orientation,
        id: (d = unref(e)) == null ? void 0 : d.triggerId
      }, {
        default: withCtx(() => [
          renderSlot(a.$slots, "default")
        ]),
        _: 3
      }, 8, ["aria-disabled", "data-orientation", "id"]);
    };
  }
});
var Oa = ["id", "checked", "name", "disabled", "required", "data-state"];
var Zo = Symbol();
var ql = defineComponent({
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
  setup(n, { emit: t }) {
    const e = n;
    provide(Zo, {
      required: e.required,
      disabled: e.disabled,
      modelValue: toRef(() => e.modelValue)
    });
    function o() {
      return t("update:modelValue", !e.modelValue);
    }
    let a;
    return (l, r) => (openBlock(), createBlock(unref(D), {
      asChild: e.asChild,
      value: e.value,
      role: "checkbox",
      "aria-checked": e.modelValue,
      "data-state": unref(a),
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
          "data-state": unref(a),
          style: { opacity: "0", position: "absolute", inset: "0" }
        }), null, 16, Oa),
        renderSlot(l.$slots, "default")
      ]),
      _: 3
    }, 8, ["asChild", "value", "aria-checked", "data-state", "data-disabled"]));
  }
});
var Gl = defineComponent({
  __name: "CheckboxIndicator",
  props: {
    asChild: { type: Boolean, default: false },
    forceMount: { type: Boolean }
  },
  setup(n) {
    const t = n, e = inject(Zo);
    return (o, a) => {
      var l;
      return (l = unref(e)) != null && l.modelValue.value ? (openBlock(), createBlock(unref(ne), {
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
var Ba = ["id", "checked", "name", "disabled", "required", "data-state", "data-disabled"];
var Qo = Symbol();
var Xl = defineComponent({
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
  setup(n, { emit: t }) {
    const e = n, o = K(e, "open", t, {
      defaultValue: e.defaultOpen,
      passive: true
      // set passive to true so that if no props.modelValue was passed, it will still update
    }), a = () => {
      o.value = !o.value;
    };
    provide(Qo, {
      open: o,
      toggleOpen: a,
      disabled: e.disabled
    });
    function l(r) {
      (r.key === "Enter" || r.keyCode === 32) && a();
    }
    return (r, s) => (openBlock(), createBlock(unref(D), {
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
          onChange: a,
          checked: unref(o),
          name: e.name,
          onKeydown: l,
          "aria-hidden": "true",
          disabled: e.disabled,
          required: e.required,
          "data-state": unref(o) ? "checked" : "unchecked",
          "data-disabled": e.disabled ? "" : void 0,
          style: { opacity: "0", position: "absolute", inset: "0" }
        }), null, 16, Ba),
        renderSlot(r.$slots, "default")
      ]),
      _: 3
    }, 8, ["value", "aria-checked", "data-state", "data-disabled"]));
  }
});
var Fl = defineComponent({
  __name: "SwitchThumb",
  setup(n) {
    const t = inject(Qo);
    return (e, o) => {
      var a, l, r, s;
      return openBlock(), createBlock(unref(ne), {
        "data-state": (l = (a = unref(t)) == null ? void 0 : a.open) != null && l.value ? "checked" : "unchecked",
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
var Ue = defineComponent({
  __name: "BaseSeparator",
  props: {
    orientation: { default: "horizontal" },
    decorative: { type: Boolean }
  },
  setup(n) {
    const t = n;
    return (e, o) => (openBlock(), createBlock(unref(D), {
      "data-orientation": t.orientation,
      role: `${e.decorative ? "none" : "separator"}`
    }, null, 8, ["data-orientation", "role"]));
  }
});
var Jl = defineComponent({
  __name: "Separator",
  props: {
    asChild: { type: Boolean, default: false },
    orientation: { default: "horizontal" },
    decorative: { type: Boolean }
  },
  setup(n) {
    const t = n;
    return (e, o) => (openBlock(), createBlock(Ue, {
      orientation: t.orientation,
      decorative: t.decorative,
      "data-orientation": t.orientation
    }, null, 8, ["orientation", "decorative", "data-orientation"]));
  }
});
var Zl = defineComponent({
  __name: "Label",
  props: {
    for: {
      type: String,
      required: false
    }
  },
  setup(n) {
    const t = n;
    return (e, o) => (openBlock(), createBlock(unref(lt), {
      for: t.for
    }, {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["for"]));
  }
});
var Ma = ["id", "checked", "name", "disabled", "data-state", "data-disabled"];
var Ql = defineComponent({
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
  setup(n, { emit: t }) {
    const e = n, o = K(e, "pressed", t, {
      defaultValue: e.defaultPressed,
      passive: true
      // set passive to true so that if no props.pressed was passed, it will still update
    }), a = () => {
      o.value = !o.value;
    }, l = computed(() => o.value ? "on" : "off");
    function r(s) {
      s.key === "Enter" && a();
    }
    return (s, i) => (openBlock(), createBlock(unref(D), {
      value: unref(o),
      role: "checkbox",
      "aria-checked": unref(o),
      "data-state": l.value,
      "data-disabled": e.disabled,
      style: { position: "relative" }
    }, {
      default: withCtx(() => [
        createBaseVNode("input", mergeProps({
          type: "checkbox",
          id: e.id,
          onKeydown: r
        }, unref(o), {
          onChange: a,
          checked: unref(o),
          name: e.name,
          "aria-hidden": "true",
          disabled: e.disabled,
          "data-state": l.value,
          "data-disabled": e.disabled,
          style: { opacity: "0", position: "absolute", inset: "0" }
        }), null, 16, Ma),
        renderSlot(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["value", "aria-checked", "data-state", "data-disabled"]));
  }
});
var Vo = Symbol();
var Vl = defineComponent({
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
  setup(n, { emit: t }) {
    const e = n, { primitiveElement: o, currentElement: a } = B(), l = ref(), r = ref(), s = Xt(), i = ref([]), d = K(e, "modelValue", t, {
      defaultValue: e.defaultValue,
      passive: true
    });
    provide(Vo, {
      type: e.type,
      modelValue: d,
      changeModelValue: p,
      parentElement: a,
      activeValue: l,
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
        if (s.value === a.value && !e.disabled) {
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
var jl = defineComponent({
  __name: "ToggleGroupItem",
  props: {
    asChild: { type: Boolean, default: false },
    value: {},
    disabled: { type: Boolean }
  },
  setup(n) {
    const t = n, e = inject(
      Vo
    ), { primitiveElement: o, currentElement: a } = B();
    onMounted(() => {
      var c;
      (c = e == null ? void 0 : e.itemsArray.value) == null || c.push(a.value);
    });
    const l = computed(() => {
      var c, m, f;
      return (e == null ? void 0 : e.type) === "multiple" ? (m = (c = e == null ? void 0 : e.modelValue) == null ? void 0 : c.value) != null && m.includes(t.value) ? "on" : "off" : ((f = e == null ? void 0 : e.modelValue) == null ? void 0 : f.value) === t.value ? "on" : "off";
    }), r = computed(() => {
      var c, m, f;
      return (e == null ? void 0 : e.type) === "multiple" ? (m = (c = e == null ? void 0 : e.modelValue) == null ? void 0 : c.value) == null ? void 0 : m.includes(t.value) : ((f = e == null ? void 0 : e.modelValue) == null ? void 0 : f.value) === t.value;
    });
    function s(c) {
      if (!(e != null && e.rovingFocus) || e != null && e.rootDisabled)
        return;
      (c.key === "ArrowLeft" || c.key === "ArrowRight" || c.key === "ArrowUp" || c.key === "ArrowDown") && c.preventDefault();
      const m = oe(
        c,
        a.value,
        e == null ? void 0 : e.parentElement.value,
        { loop: e == null ? void 0 : e.loop }
      );
      m && (m.focus(), e.currentFocusedElement.value = m);
    }
    const i = computed(() => {
      var c, m, f;
      return (c = e == null ? void 0 : e.currentFocusedElement) != null && c.value ? ((f = e == null ? void 0 : e.currentFocusedElement) == null ? void 0 : f.value) === a.value ? "0" : "-1" : ((m = e == null ? void 0 : e.modelValue) == null ? void 0 : m.value) === t.value ? "0" : "-1";
    }), d = computed(() => (e == null ? void 0 : e.type) === "multiple" ? "checkbox" : "radio");
    function p() {
      e != null && e.rootDisabled || (e == null || e.changeModelValue(t.value), e.currentFocusedElement.value = a.value);
    }
    return (c, m) => {
      var f, v;
      return openBlock(), createBlock(unref(X), {
        "as-child": t.asChild,
        ref_key: "primitiveElement",
        ref: o,
        type: "button",
        role: d.value,
        "data-state": l.value,
        disabled: t.disabled || ((f = unref(e)) == null ? void 0 : f.rootDisabled),
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
var er = defineComponent({
  __name: "AspectRatio",
  props: {
    asChild: { type: Boolean },
    ratio: { default: 1 }
  },
  setup(n) {
    const t = n, e = computed(() => 1 / t.ratio * 100);
    return (o, a) => (openBlock(), createElementBlock("div", {
      style: normalizeStyle(`position: relative; width: 100%; padding-bottom: ${e.value}%`)
    }, [
      createVNode(unref(D), {
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
var kt = Symbol();
var tr = defineComponent({
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
  setup(n, { emit: t }) {
    const e = n, o = ref(), a = ref(), l = K(e, "modelValue", t, {
      defaultValue: e.defaultValue,
      passive: true
    });
    return provide(kt, {
      modelValue: l,
      changeModelValue: (r) => {
        l.value = r, r && e.onValueChange && e.onValueChange(r);
      },
      currentFocusedElement: a,
      parentElement: o,
      orientation: e.orientation,
      dir: e.dir,
      loop: true,
      activationMode: e.activationMode
    }), (r, s) => (openBlock(), createBlock(unref(D), {
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
var or = defineComponent({
  __name: "TabsList",
  props: {
    asChild: { type: Boolean, default: false },
    loop: { type: Boolean, default: true }
  },
  setup(n) {
    const t = n, e = inject(kt), { primitiveElement: o, currentElement: a } = B();
    return onMounted(() => {
      e.parentElement.value = a.value, e.loop = t.loop;
    }), (l, r) => {
      var s, i;
      return openBlock(), createBlock(unref(D), {
        asChild: l.asChild,
        role: "tablist",
        ref_key: "primitiveElement",
        ref: o,
        "aria-orientation": (s = unref(e)) == null ? void 0 : s.orientation,
        tabindex: "0",
        "data-orientation": (i = unref(e)) == null ? void 0 : i.orientation,
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
var nr = defineComponent({
  __name: "TabsContent",
  props: {
    asChild: { type: Boolean, default: false },
    value: {},
    forceMount: { type: Boolean }
  },
  setup(n) {
    const t = n, e = inject(kt), o = computed(() => {
      var a;
      return ((a = e == null ? void 0 : e.modelValue) == null ? void 0 : a.value) === t.value ? "active" : "inactive";
    });
    return (a, l) => {
      var r, s, i;
      return ((s = (r = unref(e)) == null ? void 0 : r.modelValue) == null ? void 0 : s.value) === t.value ? (openBlock(), createBlock(unref(D), {
        key: 0,
        asChild: a.asChild,
        role: "tabpanel",
        "data-state": o.value,
        "data-orientation": (i = unref(e)) == null ? void 0 : i.orientation,
        tabindex: "0"
      }, {
        default: withCtx(() => [
          renderSlot(a.$slots, "default")
        ]),
        _: 3
      }, 8, ["asChild", "data-state", "data-orientation"])) : createCommentVNode("", true);
    };
  }
});
var ar = defineComponent({
  __name: "TabsTrigger",
  props: {
    value: {},
    disabled: { type: Boolean, default: false },
    asChild: { type: Boolean, default: false }
  },
  setup(n) {
    const t = n, e = inject(kt), { primitiveElement: o, currentElement: a } = B();
    function l(i) {
      e == null || e.changeModelValue(i);
    }
    function r(i) {
      const d = oe(
        i,
        a.value,
        e == null ? void 0 : e.parentElement.value,
        {
          arrowKeyOptions: e == null ? void 0 : e.orientation,
          loop: e == null ? void 0 : e.loop
        }
      );
      d && (d.focus(), e.currentFocusedElement.value = d, (e == null ? void 0 : e.activationMode) === "automatic" && l(d == null ? void 0 : d.getAttribute("data-radix-vue-tab-value")));
    }
    const s = computed(() => {
      var i, d, p;
      return (i = e == null ? void 0 : e.currentFocusedElement) != null && i.value ? ((p = e == null ? void 0 : e.currentFocusedElement) == null ? void 0 : p.value) === a.value ? "0" : "-1" : ((d = e == null ? void 0 : e.modelValue) == null ? void 0 : d.value) === t.value ? "0" : "-1";
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
        tabindex: s.value,
        "data-orientation": (v = unref(e)) == null ? void 0 : v.orientation,
        "data-radix-vue-collection-item": "",
        "data-radix-vue-tab-value": t.value,
        onClick: d[0] || (d[0] = (h2) => l(t.value)),
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
var Da = ["value", "aria-valuenow", "name"];
var Vt = Symbol();
var lr = defineComponent({
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
  setup(n, { emit: t }) {
    const e = n, { primitiveElement: o, currentElement: a } = B(), l = ref(), r = computed(() => e.modelValue ? e.modelValue < 50 ? (e.modelValue - 50) / 50 * 10 : (e.modelValue - 50) / 50 * -10 : 0);
    provide(Vt, {
      modelValue: toRef(() => e.modelValue),
      changeModelValue: (f) => {
        t("update:modelValue", f);
      },
      rootSliderElement: a,
      orientation: e.orientation,
      dir: e.dir,
      thumbOffset: r,
      min: e.min,
      max: e.max,
      step: e.step,
      thumbElement: l,
      disabled: e.disabled
    });
    function s(f) {
      t("update:modelValue", m(f, e.step));
    }
    let i;
    function d(f) {
      l.value && l.value.focus(), f.preventDefault(), a.value && (i = a.value.getBoundingClientRect(), f.clientX - 10 - r.value > i.left && f.clientX - 10 - r.value < i.left + i.width && s(
        Math.round(
          (f.clientX - 10 - r.value - i.left) / i.width * 100
        )
      ), document.addEventListener("pointermove", p), document.addEventListener("pointerup", c));
    }
    const p = (f) => {
      l.value && l.value.focus(), f.clientX - 10 - r.value > i.left && f.clientX - 10 - r.value < i.left + i.width && s(
        (f.clientX - 10 - r.value - i.left) / i.width * 100
      ), f.clientX - 10 - r.value <= i.left && s(e.min), f.clientX - 10 - r.value >= i.left + i.width && s(e.max);
    }, c = (f) => {
      document.removeEventListener("pointermove", p), document.removeEventListener("pointerup", c);
    };
    function m(f, v) {
      const h2 = Math.floor(f / v);
      return f % v <= v / 2 ? h2 * v : (h2 + 1) * v;
    }
    return (f, v) => (openBlock(), createBlock(unref(ne), {
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
        }, null, 8, Da)
      ]),
      _: 3
    }, 512));
  }
});
var rr = defineComponent({
  __name: "SliderThumb",
  props: {
    asChild: { type: Boolean, default: false },
    class: {}
  },
  setup(n) {
    const t = n, e = inject(Vt), { primitiveElement: o, currentElement: a } = B();
    onMounted(() => {
      e != null && e.thumbElement && (e.thumbElement.value = a.value);
    });
    let l = 2;
    function r(s) {
      var p;
      if (!e)
        return;
      (s.keyCode === 32 || s.key === "Enter") && s.preventDefault();
      const i = Number(e == null ? void 0 : e.step), d = Number((p = e.modelValue) == null ? void 0 : p.value);
      (s.key === "ArrowUp" || s.key === "ArrowRight") && (s.shiftKey ? (s.preventDefault(), d + l >= (e == null ? void 0 : e.max) ? e == null || e.changeModelValue(e == null ? void 0 : e.max) : d + l <= (e == null ? void 0 : e.min) ? e == null || e.changeModelValue(e == null ? void 0 : e.min) : e == null || e.changeModelValue(d + l)) : (s.preventDefault(), d + i >= (e == null ? void 0 : e.max) ? e == null || e.changeModelValue(e == null ? void 0 : e.max) : d + i <= (e == null ? void 0 : e.min) ? e == null || e.changeModelValue(e == null ? void 0 : e.min) : e == null || e.changeModelValue(d + i))), (s.key === "ArrowDown" || s.key === "ArrowLeft") && (s.shiftKey ? (s.preventDefault(), d - l >= (e == null ? void 0 : e.max) ? e == null || e.changeModelValue(e == null ? void 0 : e.max) : d - l <= (e == null ? void 0 : e.min) ? e == null || e.changeModelValue(e == null ? void 0 : e.min) : e == null || e.changeModelValue(d - l)) : (s.preventDefault(), d - i >= (e == null ? void 0 : e.max) ? e == null || e.changeModelValue(e == null ? void 0 : e.max) : d - i <= (e == null ? void 0 : e.min) ? e == null || e.changeModelValue(e == null ? void 0 : e.min) : e == null || e.changeModelValue(d - i)));
    }
    return (s, i) => {
      var d, p, c, m, f, v, h2, y, C;
      return openBlock(), createElementBlock("span", {
        style: normalizeStyle(`transform: translateX(-50%); position: absolute; left: calc(${(p = (d = unref(e)) == null ? void 0 : d.modelValue) == null ? void 0 : p.value}%)`)
      }, [
        createVNode(unref(ne), {
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
          "aria-orientation": (C = unref(e)) == null ? void 0 : C.orientation,
          onKeydown: r
        }, null, 8, ["class", "data-disabled", "data-orientation", "aria-valuenow", "aria-valuemin", "aria-valuemax", "aria-orientation"])
      ], 4);
    };
  }
});
var ir = defineComponent({
  __name: "SliderTrack",
  props: {
    asChild: { type: Boolean }
  },
  setup(n) {
    return (t, e) => (openBlock(), createBlock(unref(ne), { asChild: t.asChild }, {
      default: withCtx(() => [
        renderSlot(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["asChild"]));
  }
});
var sr = defineComponent({
  __name: "SliderRange",
  setup(n) {
    const t = inject(Vt);
    return (e, o) => {
      var a, l, r, s, i;
      return openBlock(), createBlock(unref(ne), {
        "data-disabled": (a = unref(t)) == null ? void 0 : a.disabled,
        "data-orientation": (l = unref(t)) == null ? void 0 : l.orientation,
        style: normalizeStyle(`left: 0%; right: ${(((r = unref(t)) == null ? void 0 : r.max) ?? 100) - (((i = (s = unref(t)) == null ? void 0 : s.modelValue) == null ? void 0 : i.value) ?? 0)}%`)
      }, null, 8, ["data-disabled", "data-orientation", "style"]);
    };
  }
});
var jo = "RadioGroup";
var en = Symbol();
var ur = defineComponent({
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
  setup(n, { emit: t }) {
    const e = n, { primitiveElement: o, currentElement: a } = B(), l = K(e, "modelValue", t, {
      defaultValue: e.defaultValue,
      passive: true
    });
    return provide(jo, {
      modelValue: l,
      changeModelValue: (r) => {
        l.value = r, r && e.onValueChange && e.onValueChange(r);
      },
      parentElement: a,
      currentFocusedElement: ref(),
      disabled: ref(e.disabled),
      loop: ref(e.loop),
      orientation: ref(e.orientation),
      name: e.name,
      required: ref(e.required)
    }), (r, s) => (openBlock(), createBlock(unref(D), {
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
var Ra = ["value", "required", "disabled", "checked"];
var dr = defineComponent({
  __name: "RadioGroupItem",
  props: {
    asChild: { type: Boolean, default: false },
    value: {},
    disabled: { type: Boolean, default: false },
    required: { type: Boolean }
  },
  setup(n) {
    const t = n, e = inject(jo), o = computed(() => (e == null ? void 0 : e.disabled.value) || t.disabled), a = computed(() => (e == null ? void 0 : e.required.value) || t.required), l = computed(() => {
      var c;
      return ((c = e == null ? void 0 : e.modelValue) == null ? void 0 : c.value) === t.value;
    });
    provide(en, readonly({ disabled: o, checked: l }));
    function r(c) {
      o.value || e == null || e.changeModelValue(c);
    }
    const { primitiveElement: s, currentElement: i } = B();
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
      return (c = e == null ? void 0 : e.currentFocusedElement) != null && c.value ? ((m = e == null ? void 0 : e.currentFocusedElement) == null ? void 0 : m.value) === i.value ? "0" : "-1" : l.value ? "0" : "-1";
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
          asChild: t.asChild,
          disabled: o.value ? true : void 0,
          "data-state": l.value ? "checked" : "unchecked",
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
          required: a.value,
          disabled: o.value,
          style: { transform: "translateX(-100%)", position: "absolute", "pointer-events": "none", opacity: "0", margin: "0px", width: "25px", height: "25px" },
          checked: l.value
        }, null, 8, Ra)
      ], 64);
    };
  }
});
var cr = defineComponent({
  __name: "RadioGroupIndicator",
  props: {
    asChild: { type: Boolean, default: false }
  },
  setup(n) {
    const t = inject(en);
    return (e, o) => {
      var a, l, r;
      return (a = unref(t)) != null && a.checked ? (openBlock(), createBlock(unref(ne), {
        key: 0,
        asChild: e.asChild,
        "data-state": (l = unref(t)) != null && l.checked ? "checked" : "unchecked",
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
var tn = Symbol();
var pr = defineComponent({
  __name: "ProgressRoot",
  props: {
    asChild: { type: Boolean },
    value: {},
    modelValue: {},
    max: {}
  },
  setup(n) {
    const t = n;
    return provide(tn, {
      modelValue: toRef(() => t.modelValue),
      max: t.max
    }), (e, o) => (openBlock(), createBlock(unref(D), {
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
var fr = defineComponent({
  __name: "ProgressIndicator",
  setup(n) {
    const t = inject(tn);
    return (e, o) => {
      var a, l, r, s, i, d, p;
      return openBlock(), createBlock(unref(D), {
        "data-state": ((a = unref(t)) == null ? void 0 : a.modelValue) === ((l = unref(t)) == null ? void 0 : l.max) ? "complete" : "loading",
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
var it = Symbol();
var mr = defineComponent({
  __name: "DialogRoot",
  props: {
    open: { type: Boolean, default: void 0 },
    defaultOpen: { type: Boolean, default: false },
    modal: { type: Boolean, default: true }
  },
  emits: ["update:modelValue"],
  setup(n, { emit: t }) {
    const e = n, o = K(e, "open", t, {
      defaultValue: e.defaultOpen,
      passive: true
    });
    return provide(it, {
      open: o,
      modal: e.modal,
      openModal: () => {
        o.value = true;
      },
      closeModal: () => {
        o.value = false;
      },
      triggerButton: ref()
    }), (a, l) => renderSlot(a.$slots, "default");
  }
});
var vr = defineComponent({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean }
  },
  setup(n) {
    const t = n, e = inject(it), { primitiveElement: o, currentElement: a } = B();
    function l() {
      console.error(
        "Injected value not found, DialogTrigger possibly not wrapped with DialogRoot. Component may not be working properly."
      );
    }
    return onMounted(() => {
      e ? e.triggerButton.value = a.value : l();
    }), (r, s) => {
      var i, d, p;
      return openBlock(), createBlock(unref(X), mergeProps(t, {
        type: "button",
        ref_key: "primitiveElement",
        ref: o,
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
    const t = n;
    return (e, o) => (openBlock(), createBlock(Teleport, {
      to: t.container
    }, [
      renderSlot(e.$slots, "default")
    ], 8, ["to"]));
  }
});
var Ia = createBaseVNode("polygon", { points: "0,0 30,0 15,10" }, null, -1);
var Na = defineComponent({
  __name: "Arrow",
  props: {
    width: { default: 10 },
    height: { default: 5 }
  },
  setup(n) {
    const t = n, { primitiveElement: e } = B();
    return (o, a) => (openBlock(), createBlock(unref(Ea), mergeProps({
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
          Ia
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
    dataState: {}
  },
  emits: [
    "handle-click",
    "horizontal-keydown",
    "mouseover",
    "escape-keydown"
  ],
  setup(n, { emit: t }) {
    const e = n, { getItems: o } = re(), { primitiveElement: a, currentElement: l } = B();
    function r(c) {
      var f, v, h2, y;
      if (c.key === "Escape")
        return i(), t("escape-keydown", c);
      if (c.keyCode === 32 || c.key === "Enter") {
        c.target.click();
        return;
      }
      if (c.key === "ArrowLeft") {
        const C = (f = e.subProvider) == null ? void 0 : f.triggerElement.value;
        if (C)
          return (v = e.rootProvider) == null || v.changeSelected(C), (h2 = e.subProvider) == null ? void 0 : h2.hideTooltip();
      }
      if (c.key === "ArrowRight" || c.key === "ArrowLeft")
        return t("horizontal-keydown", c);
      const m = oe(
        c,
        l.value,
        void 0,
        {
          arrowKeyOptions: "vertical",
          itemsArray: o()
        }
      );
      m && ((y = e.rootProvider) == null || y.changeSelected(m));
    }
    function s() {
      var c;
      e.disabled || (c = e.rootProvider) == null || c.changeSelected(l.value);
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
      return openBlock(), createBlock(unref(D), {
        role: e.role,
        ref_key: "primitiveElement",
        ref: a,
        onKeydown: withModifiers(r, ["prevent"]),
        "data-state": e.dataState,
        "data-radix-vue-collection-item": "",
        onMouseenter: s,
        onMouseover: p,
        onClick: d,
        "data-highlighted": ((f = c.rootProvider) == null ? void 0 : f.selectedElement.value) === unref(l) ? "" : null,
        "aria-disabled": e.disabled ? true : void 0,
        "data-disabled": e.disabled ? "" : void 0,
        "data-orientation": (v = c.rootProvider) == null ? void 0 : v.orientation,
        tabindex: ((h2 = c.rootProvider) == null ? void 0 : h2.selectedElement.value) === unref(l) ? "0" : "-1"
      }, {
        default: withCtx(() => [
          renderSlot(c.$slots, "default")
        ]),
        _: 3
      }, 8, ["role", "onKeydown", "data-state", "data-highlighted", "aria-disabled", "data-disabled", "data-orientation", "tabindex"]);
    };
  }
});
var hr = defineComponent({
  __name: "DialogPortal",
  props: {
    container: {}
  },
  setup(n) {
    const t = n;
    return (e, o) => (openBlock(), createBlock(unref(qe), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function on(n) {
  return getCurrentScope() ? (onScopeDispose(n), true) : false;
}
function ht(n) {
  return typeof n == "function" ? n() : unref(n);
}
var nn = typeof window < "u";
var jt = () => {
};
var Rt = La();
function La() {
  var n;
  return nn && ((n = window == null ? void 0 : window.navigator) == null ? void 0 : n.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
}
var wo = {
  mounted: "mounted",
  updated: "updated",
  unmounted: "unmounted"
};
function Ka(...n) {
  if (n.length !== 1)
    return toRef(...n);
  const t = n[0];
  return typeof t == "function" ? readonly(customRef(() => ({ get: t, set: jt }))) : ref(t);
}
function Fe(n) {
  var t;
  const e = ht(n);
  return (t = e == null ? void 0 : e.$el) != null ? t : e;
}
var an = nn ? window : void 0;
function ft(...n) {
  let t, e, o, a;
  if (typeof n[0] == "string" || Array.isArray(n[0]) ? ([e, o, a] = n, t = an) : [t, e, o, a] = n, !t)
    return jt;
  Array.isArray(e) || (e = [e]), Array.isArray(o) || (o = [o]);
  const l = [], r = () => {
    l.forEach((p) => p()), l.length = 0;
  }, s = (p, c, m, f) => (p.addEventListener(c, m, f), () => p.removeEventListener(c, m, f)), i = watch(
    () => [Fe(t), ht(a)],
    ([p, c]) => {
      r(), p && l.push(
        ...e.flatMap((m) => o.map((f) => s(p, m, f, c)))
      );
    },
    { immediate: true, flush: "post" }
  ), d = () => {
    i(), r();
  };
  return on(d), d;
}
var Eo = false;
function Co(n, t, e = {}) {
  const { window: o = an, ignore: a = [], capture: l = true, detectIframe: r = false } = e;
  if (!o)
    return;
  Rt && !Eo && (Eo = true, Array.from(o.document.body.children).forEach((m) => m.addEventListener("click", jt)));
  let s = true;
  const i = (m) => a.some((f) => {
    if (typeof f == "string")
      return Array.from(o.document.querySelectorAll(f)).some((v) => v === m.target || m.composedPath().includes(v));
    {
      const v = Fe(f);
      return v && (m.target === v || m.composedPath().includes(v));
    }
  }), p = [
    ft(o, "click", (m) => {
      const f = Fe(n);
      if (!(!f || f === m.target || m.composedPath().includes(f))) {
        if (m.detail === 0 && (s = !i(m)), !s) {
          s = true;
          return;
        }
        t(m);
      }
    }, { passive: true, capture: l }),
    ft(o, "pointerdown", (m) => {
      const f = Fe(n);
      f && (s = !m.composedPath().includes(f) && !i(m));
    }, { passive: true }),
    r && ft(o, "blur", (m) => {
      setTimeout(() => {
        var f;
        const v = Fe(n);
        ((f = o.document.activeElement) == null ? void 0 : f.tagName) === "IFRAME" && !(v != null && v.contains(o.document.activeElement)) && t(m);
      }, 0);
    })
  ].filter(Boolean);
  return () => p.forEach((m) => m());
}
var ln = {
  [wo.mounted](n, t) {
    const e = !t.modifiers.bubble;
    if (typeof t.value == "function")
      n.__onClickOutside_stop = Co(n, t.value, { capture: e });
    else {
      const [o, a] = t.value;
      n.__onClickOutside_stop = Co(n, o, Object.assign({ capture: e }, a));
    }
  },
  [wo.unmounted](n) {
    n.__onClickOutside_stop();
  }
};
function rn(n) {
  const t = window.getComputedStyle(n);
  if (t.overflowX === "scroll" || t.overflowY === "scroll" || t.overflowX === "auto" && n.clientWidth < n.scrollWidth || t.overflowY === "auto" && n.clientHeight < n.scrollHeight)
    return true;
  {
    const e = n.parentNode;
    return !e || e.tagName === "BODY" ? false : rn(e);
  }
}
function Ha(n) {
  const t = n || window.event, e = t.target;
  return rn(e) ? false : t.touches.length > 1 ? true : (t.preventDefault && t.preventDefault(), false);
}
function za(n, t = false) {
  const e = ref(t);
  let o = null, a;
  watch(Ka(n), (s) => {
    if (s) {
      const i = s;
      a = i.style.overflow, e.value && (i.style.overflow = "hidden");
    }
  }, {
    immediate: true
  });
  const l = () => {
    const s = ht(n);
    !s || e.value || (Rt && (o = ft(
      s,
      "touchmove",
      (i) => {
        Ha(i);
      },
      { passive: false }
    )), s.style.overflow = "hidden", e.value = true);
  }, r = () => {
    const s = ht(n);
    !s || !e.value || (Rt && (o == null || o()), s.style.overflow = a, e.value = false);
  };
  return on(r), computed({
    get() {
      return e.value;
    },
    set(s) {
      s ? l() : r();
    }
  });
}
function Ya() {
  let n = false;
  const t = ref(false);
  return (e, o) => {
    if (t.value = o.value, n)
      return;
    n = true;
    const a = za(e, o.value);
    watch(t, (l) => a.value = l);
  };
}
Ya();
var _r = defineComponent({
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
  setup(n, { emit: t }) {
    const e = n, o = inject(it), { primitiveElement: a, currentElement: l } = B(), r = () => e.isDisableInteractOutside || o.modal && e.isDisableInteractOutside === void 0, s = () => e.isCloseAutoFocus || o.modal && e.isCloseAutoFocus === void 0;
    watchEffect(() => {
      var v;
      l.value && (o != null && o.open.value ? (e.isOpenAutoFocus && Ft(l.value), r() && p(), o != null && o.modal && (window.addEventListener("wheel", i, { passive: false }), window.addEventListener("keydown", d)), window.addEventListener("keydown", f), t("open")) : (c(), window.removeEventListener("wheel", i), window.removeEventListener("keydown", d), window.removeEventListener("keydown", f), s() && ((v = o == null ? void 0 : o.triggerButton.value) == null || v.focus()), t("close")));
    });
    function i(v) {
      v.preventDefault();
    }
    function d(v) {
      if (v.key === "ArrowDown" || v.key === "ArrowUp") {
        const h2 = document.activeElement;
        h2 && ["input", "select", "textarea"].indexOf(h2.tagName.toLowerCase()) === -1 && v.preventDefault();
      }
    }
    function p() {
      document.querySelector("body").style.pointerEvents = "none";
    }
    function c() {
      document.querySelector("body").style.pointerEvents = "";
    }
    function m() {
      e.isPointerDownOutsideDefault && (o == null || o.closeModal()), t("pointerDownOutside");
    }
    function f(v) {
      var h2;
      v.key === "Escape" && (e.isEscapeKeyDownDefault && (v.preventDefault(), o == null || o.closeModal(), s() && ((h2 = o == null ? void 0 : o.triggerButton.value) == null || h2.focus())), t("escapeKeyDown"));
    }
    return (v, h2) => {
      var y, C;
      return (y = unref(o)) != null && y.open.value ? withDirectives((openBlock(), createBlock(unref(D), {
        key: 0,
        asChild: e.asChild,
        ref_key: "primitiveElement",
        ref: a,
        "data-state": (C = unref(o)) != null && C.open.value ? "open" : "closed",
        role: "dialog",
        tabindex: "-1",
        style: { "pointer-events": "auto" }
      }, {
        default: withCtx(() => [
          renderSlot(v.$slots, "default")
        ]),
        _: 3
      }, 8, ["asChild", "data-state"])), [
        [unref(ln), m]
      ]) : createCommentVNode("", true);
    };
  }
});
var yr = defineComponent({
  __name: "DialogOverlay",
  props: {
    asChild: { type: Boolean }
  },
  setup(n) {
    const t = n, e = inject(it);
    return (o, a) => {
      var l, r;
      return (l = unref(e)) != null && l.open.value ? (openBlock(), createBlock(unref(D), mergeProps({ key: 0 }, t, {
        "data-state": (r = unref(e)) != null && r.open.value ? "open" : "closed",
        style: { "pointer-events": "auto" },
        "data-aria-hidden": "true",
        "aria-hidden": "true"
      }), {
        default: withCtx(() => [
          renderSlot(o.$slots, "default")
        ]),
        _: 3
      }, 16, ["data-state"])) : createCommentVNode("", true);
    };
  }
});
var gr = defineComponent({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean }
  },
  setup(n) {
    const t = n, e = inject(it);
    function o() {
      e == null || e.closeModal();
    }
    return (a, l) => (openBlock(), createBlock(unref(X), mergeProps(t, {
      type: "button",
      "aria-label": "Close",
      onClick: o
    }), {
      default: withCtx(() => [
        renderSlot(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var br = defineComponent({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean }
  },
  setup(n) {
    const t = n;
    return (e, o) => (openBlock(), createBlock(unref(Xo), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var wr = defineComponent({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean }
  },
  setup(n) {
    const t = n;
    return (e, o) => (openBlock(), createBlock(unref(Fo), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Ge = Symbol();
var Er = defineComponent({
  __name: "AlertDialogRoot",
  props: {
    open: { type: Boolean, default: void 0 },
    defaultOpen: { type: Boolean, default: false }
  },
  emits: ["update:modelValue"],
  setup(n, { emit: t }) {
    const e = n, o = K(e, "open", t, {
      defaultValue: e.defaultOpen,
      passive: true
    });
    return provide(Ge, {
      open: o,
      openModal: () => {
        o.value = true;
      },
      closeModal: () => {
        o.value = false;
      },
      triggerButton: ref()
    }), (a, l) => renderSlot(a.$slots, "default");
  }
});
var Cr = defineComponent({
  __name: "AlertDialogTrigger",
  props: {
    asChild: { type: Boolean }
  },
  setup(n) {
    const t = n, e = inject(
      Ge
    ), { primitiveElement: o, currentElement: a } = B();
    function l() {
      console.error(
        "Injected value not found, AlertDialogTrigger possibly not wrapped with AlertDialogRoot. Component may not be working properly."
      );
    }
    return onMounted(() => {
      e ? e.triggerButton.value = a.value : l();
    }), (r, s) => {
      var i, d, p;
      return openBlock(), createBlock(unref(X), mergeProps(t, {
        type: "button",
        ref_key: "primitiveElement",
        ref: o,
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
var xr = defineComponent({
  __name: "AlertDialogPortal",
  props: {
    container: {}
  },
  setup(n) {
    const t = n;
    return (e, o) => (openBlock(), createBlock(qe, normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var $r = defineComponent({
  __name: "AlertDialogContent",
  props: {
    isOpenAutoFocus: { type: Boolean, default: true },
    isCloseAutoFocus: { type: Boolean, default: void 0 },
    isEscapeKeyDownDefault: { type: Boolean, default: true },
    asChild: { type: Boolean }
  },
  emits: ["open", "close", "escapeKeyDown"],
  setup(n, { emit: t }) {
    const e = n, o = inject(
      Ge
    ), { primitiveElement: a, currentElement: l } = B(), r = () => e.isCloseAutoFocus;
    watchEffect(() => {
      var f;
      l.value && (o != null && o.open.value ? (e.isOpenAutoFocus && Ft(l.value), d(), window.addEventListener("wheel", s, { passive: false }), window.addEventListener("keydown", i), window.addEventListener("keydown", m), t("open")) : (p(), window.removeEventListener("wheel", s), window.removeEventListener("keydown", i), window.removeEventListener("keydown", m), r() && ((f = o == null ? void 0 : o.triggerButton.value) == null || f.focus()), t("close")));
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
      o == null || o.closeModal();
    }
    function m(f) {
      var v;
      f.key === "Escape" && (e.isEscapeKeyDownDefault && (f.preventDefault(), o == null || o.closeModal(), r() && ((v = o == null ? void 0 : o.triggerButton.value) == null || v.focus())), t("escapeKeyDown"));
    }
    return (f, v) => {
      var h2, y;
      return (h2 = unref(o)) != null && h2.open.value ? withDirectives((openBlock(), createBlock(unref(D), {
        key: 0,
        asChild: e.asChild,
        ref_key: "primitiveElement",
        ref: a,
        "data-state": (y = unref(o)) != null && y.open.value ? "open" : "closed",
        role: "dialog",
        tabindex: "-1",
        style: { "pointer-events": "auto" }
      }, {
        default: withCtx(() => [
          renderSlot(f.$slots, "default")
        ]),
        _: 3
      }, 8, ["asChild", "data-state"])), [
        [unref(ln), c]
      ]) : createCommentVNode("", true);
    };
  }
});
var kr = defineComponent({
  __name: "AlertDialogOverlay",
  props: {
    asChild: { type: Boolean }
  },
  setup(n) {
    const t = n, e = inject(
      Ge
    );
    return (o, a) => {
      var l, r;
      return (l = unref(e)) != null && l.open.value ? (openBlock(), createBlock(unref(D), mergeProps({ key: 0 }, t, {
        "data-state": (r = unref(e)) != null && r.open.value ? "open" : "closed",
        style: { "pointer-events": "auto" },
        "data-aria-hidden": "true",
        "aria-hidden": "true"
      }), {
        default: withCtx(() => [
          renderSlot(o.$slots, "default")
        ]),
        _: 3
      }, 16, ["data-state"])) : createCommentVNode("", true);
    };
  }
});
var Sr = defineComponent({
  __name: "AlertDialogCancel",
  props: {
    asChild: { type: Boolean }
  },
  setup(n) {
    const t = n, e = inject(
      Ge
    );
    function o() {
      e == null || e.closeModal();
    }
    return (a, l) => (openBlock(), createBlock(unref(X), mergeProps(t, {
      type: "button",
      onClick: o
    }), {
      default: withCtx(() => [
        renderSlot(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Ar = defineComponent({
  __name: "AlertDialogTitle",
  props: {
    asChild: { type: Boolean }
  },
  setup(n) {
    const t = n;
    return (e, o) => (openBlock(), createBlock(unref(Xo), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Tr = defineComponent({
  __name: "AlertDialogDescription",
  props: {
    asChild: { type: Boolean }
  },
  setup(n) {
    const t = n;
    return (e, o) => (openBlock(), createBlock(unref(Fo), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Pr = defineComponent({
  __name: "AlertDialogAction",
  props: {
    asChild: { type: Boolean }
  },
  setup(n) {
    const t = n, e = inject(
      Ge
    );
    function o() {
      e == null || e.closeModal();
    }
    return (a, l) => (openBlock(), createBlock(unref(X), mergeProps(t, {
      type: "button",
      onClick: o
    }), {
      default: withCtx(() => [
        renderSlot(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var St = Symbol();
var Or = defineComponent({
  __name: "ToolbarRoot",
  props: {
    asChild: { type: Boolean, default: false },
    orientation: { default: "horizontal" },
    dir: { default: "ltr" },
    loop: { type: Boolean }
  },
  setup(n) {
    const t = n, { primitiveElement: e, currentElement: o } = B(), a = ref();
    return provide(St, {
      parentElement: o,
      activeElement: a,
      orientation: t.orientation
    }), (l, r) => (openBlock(), createBlock(unref(D), {
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
        renderSlot(l.$slots, "default")
      ]),
      _: 3
    }, 8, ["aria-orientation", "dir", "data-orientation"]));
  }
});
var Br = defineComponent({
  __name: "ToolbarButton",
  setup(n) {
    const t = inject(St), { primitiveElement: e, currentElement: o } = B();
    function a(l) {
      const r = oe(
        l,
        o.value,
        t == null ? void 0 : t.parentElement.value
      );
      r == null || r.focus();
    }
    return (l, r) => {
      var s, i;
      return openBlock(), createBlock(unref(X), {
        ref_key: "primitiveElement",
        ref: e,
        "data-orientation": (s = unref(t)) == null ? void 0 : s.orientation,
        type: "button",
        tabindex: ((i = unref(t)) == null ? void 0 : i.activeElement.value) === unref(o) ? "0" : "-1",
        onKeydown: a,
        "data-radix-vue-collection-item": ""
      }, {
        default: withCtx(() => [
          renderSlot(l.$slots, "default")
        ]),
        _: 3
      }, 8, ["data-orientation", "tabindex"]);
    };
  }
});
var Mr = defineComponent({
  __name: "ToolbarLink",
  setup(n) {
    const t = inject(St), { primitiveElement: e, currentElement: o } = B();
    function a(l) {
      const r = oe(
        l,
        o.value,
        t == null ? void 0 : t.parentElement.value
      );
      r == null || r.focus();
    }
    return (l, r) => {
      var s;
      return openBlock(), createBlock(unref(Go), {
        ref_key: "primitiveElement",
        ref: e,
        tabindex: ((s = unref(t)) == null ? void 0 : s.activeElement.value) === unref(o) ? "0" : "-1",
        onKeydown: a,
        "data-radix-vue-collection-item": ""
      }, {
        default: withCtx(() => [
          renderSlot(l.$slots, "default")
        ]),
        _: 3
      }, 8, ["tabindex"]);
    };
  }
});
var sn = Symbol();
var Dr = defineComponent({
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
  setup(n, { emit: t }) {
    const e = n, { primitiveElement: o, currentElement: a } = B();
    return provide(sn, {
      type: e.type,
      modelValue: toRef(() => e.modelValue),
      changeModelValue: (l) => {
        if (e.type === "single")
          t("update:modelValue", l);
        else {
          if (!l)
            return;
          let r = e.modelValue;
          if (r.includes(l)) {
            let s = r.findIndex((i) => i === l);
            r.splice(s, 1);
          } else
            r.push(l);
          t("update:modelValue", r);
        }
      },
      orientation: e.orientation ? e.orientation : "horizontal",
      parentElement: a
    }), (l, r) => (openBlock(), createBlock(unref(D), {
      ref_key: "primitiveElement",
      ref: o,
      role: "group",
      dir: e.dir,
      "aria-label": "Text alignment"
    }, {
      default: withCtx(() => [
        renderSlot(l.$slots, "default")
      ]),
      _: 3
    }, 8, ["dir"]));
  }
});
var Rr = defineComponent({
  __name: "ToolbarToggleItem",
  props: {
    asChild: { type: Boolean, default: false },
    value: {},
    disabled: { type: Boolean }
  },
  setup(n) {
    const t = n, e = inject(
      sn
    ), o = inject(St), a = computed(() => {
      var s, i, d;
      return (e == null ? void 0 : e.type) === "multiple" ? (i = (s = e == null ? void 0 : e.modelValue) == null ? void 0 : s.value) != null && i.includes(t.value) ? "on" : "off" : ((d = e == null ? void 0 : e.modelValue) == null ? void 0 : d.value) === t.value ? "on" : "off";
    }), l = ref();
    function r(s) {
      const i = oe(
        s,
        l.value,
        o == null ? void 0 : o.parentElement.value
      );
      i == null || i.focus();
    }
    return (s, i) => {
      var d;
      return openBlock(), createBlock(unref(X), {
        type: "button",
        "data-state": a.value,
        "data-disabled": t.disabled,
        "data-orientation": (d = unref(e)) == null ? void 0 : d.orientation,
        onClick: i[0] || (i[0] = (p) => unref(e).changeModelValue(t.value)),
        ref_key: "currentToggleElement",
        ref: l,
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
var Ir = defineComponent({
  __name: "ToolbarSeparator",
  props: {
    asChild: { type: Boolean, default: false }
  },
  setup(n) {
    const t = n;
    return (e, o) => (openBlock(), createBlock(Ue, {
      asChild: t.asChild
    }, null, 8, ["asChild"]));
  }
});
var eo = Symbol();
var Nr = defineComponent({
  __name: "AvatarRoot",
  props: {
    asChild: { type: Boolean, default: false }
  },
  setup(n) {
    const t = n, e = ref("loading");
    return provide(eo, {
      imageLoadingStatus: e
    }), (o, a) => (openBlock(), createBlock(unref(ne), {
      asChild: t.asChild
    }, {
      default: withCtx(() => [
        renderSlot(o.$slots, "default")
      ]),
      _: 3
    }, 8, ["asChild"]));
  }
});
var Lr = defineComponent({
  __name: "AvatarImage",
  props: {
    asChild: { type: Boolean, default: false },
    onLoadingStatusChange: {}
  },
  setup(n) {
    const t = inject(eo);
    function e() {
      t.imageLoadingStatus.value = "loaded";
    }
    return (o, a) => (openBlock(), createBlock(unref(ga), {
      asChild: o.asChild,
      onLoad: e
    }, null, 8, ["asChild"]));
  }
});
var Kr = defineComponent({
  __name: "AvatarFallback",
  props: {
    asChild: { type: Boolean, default: false },
    delayMs: { default: 0 }
  },
  setup(n) {
    const t = n, e = inject(eo);
    let o = ref(false), a;
    return t.delayMs ? a = setTimeout(() => {
      o.value = true, clearTimeout(a);
    }, t.delayMs) : o.value = true, (l, r) => {
      var s;
      return unref(o) && ((s = unref(e)) == null ? void 0 : s.imageLoadingStatus.value) !== "loaded" ? (openBlock(), createBlock(unref(ne), {
        key: 0,
        asChild: t.asChild
      }, {
        default: withCtx(() => [
          renderSlot(l.$slots, "default")
        ]),
        _: 3
      }, 8, ["asChild"])) : createCommentVNode("", true);
    };
  }
});
var to = Symbol();
var me = defineComponent({
  __name: "PopperRoot",
  setup(n) {
    const t = ref();
    return provide(to, {
      anchor: t,
      onAnchorChange: (e) => {
        t.value = e;
      }
    }), (e, o) => renderSlot(e.$slots, "default");
  }
});
var _e = defineComponent({
  __name: "PopperAnchor",
  props: {
    asChild: { type: Boolean },
    element: {}
  },
  setup(n) {
    const t = n, { primitiveElement: e, currentElement: o } = B(), a = inject(to);
    return watch(o, () => {
      a == null || a.onAnchorChange(t.element ?? o.value);
    }), (l, r) => (openBlock(), createBlock(unref(D), {
      "as-child": l.asChild,
      ref_key: "primitiveElement",
      ref: e
    }, {
      default: withCtx(() => [
        renderSlot(l.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child"]));
  }
});
var Wa = (n) => ({
  name: "transformOrigin",
  options: n,
  fn(t) {
    var y, C, $;
    const { placement: e, rects: o, middlewareData: a } = t, r = ((y = a.arrow) == null ? void 0 : y.centerOffset) !== 0, s = r ? 0 : n.arrowWidth, i = r ? 0 : n.arrowHeight, [d, p] = It(e), c = { start: "0%", center: "50%", end: "100%" }[p], m = (((C = a.arrow) == null ? void 0 : C.x) ?? 0) + s / 2, f = ((($ = a.arrow) == null ? void 0 : $.y) ?? 0) + i / 2;
    let v = "", h2 = "";
    return d === "bottom" ? (v = r ? c : `${m}px`, h2 = `${-i}px`) : d === "top" ? (v = r ? c : `${m}px`, h2 = `${o.floating.height + i}px`) : d === "right" ? (v = `${-i}px`, h2 = r ? c : `${f}px`) : d === "left" && (v = `${o.floating.width + i}px`, h2 = r ? c : `${f}px`), { data: { x: v, y: h2 } };
  }
});
function It(n) {
  const [t, e = "center"] = n.split("-");
  return [t, e];
}
function Xe(n) {
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
function xo(n, t, e) {
  let { reference: o, floating: a } = n;
  const l = o.x + o.width / 2 - a.width / 2, r = o.y + o.height / 2 - a.height / 2, s = Re(t), i = oo(s), d = o[i] / 2 - a[i] / 2, p = s === "x";
  let c;
  switch (ge(t)) {
    case "top":
      c = { x: l, y: o.y - a.height };
      break;
    case "bottom":
      c = { x: l, y: o.y + o.height };
      break;
    case "right":
      c = { x: o.x + o.width, y: r };
      break;
    case "left":
      c = { x: o.x - a.width, y: r };
      break;
    default:
      c = { x: o.x, y: o.y };
  }
  switch (Xe(t)) {
    case "start":
      c[s] -= d * (e && p ? -1 : 1);
      break;
    case "end":
      c[s] += d * (e && p ? -1 : 1);
  }
  return c;
}
var Ua = async (n, t, e) => {
  const { placement: o = "bottom", strategy: a = "absolute", middleware: l = [], platform: r } = e, s = l.filter(Boolean), i = await (r.isRTL == null ? void 0 : r.isRTL(t));
  let d = await r.getElementRects({ reference: n, floating: t, strategy: a }), { x: p, y: c } = xo(d, o, i), m = o, f = {}, v = 0;
  for (let h2 = 0; h2 < s.length; h2++) {
    const { name: y, fn: C } = s[h2], { x: $, y: S, data: P, reset: R } = await C({ x: p, y: c, initialPlacement: o, placement: m, strategy: a, middlewareData: f, rects: d, platform: r, elements: { reference: n, floating: t } });
    p = $ ?? p, c = S ?? c, f = { ...f, [y]: { ...f[y], ...P } }, R && v <= 50 && (v++, typeof R == "object" && (R.placement && (m = R.placement), R.rects && (d = R.rects === true ? await r.getElementRects({ reference: n, floating: t, strategy: a }) : R.rects), { x: p, y: c } = xo(d, m, i)), h2 = -1);
  }
  return { x: p, y: c, placement: m, strategy: a, middlewareData: f };
};
function Ee(n, t) {
  return typeof n == "function" ? n(t) : n;
}
function un(n) {
  return typeof n != "number" ? function(t) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...t };
  }(n) : { top: n, right: n, bottom: n, left: n };
}
function _t(n) {
  return { ...n, top: n.y, left: n.x, right: n.x + n.width, bottom: n.y + n.height };
}
async function Ve(n, t) {
  var e;
  t === void 0 && (t = {});
  const { x: o, y: a, platform: l, rects: r, elements: s, strategy: i } = n, { boundary: d = "clippingAncestors", rootBoundary: p = "viewport", elementContext: c = "floating", altBoundary: m = false, padding: f = 0 } = Ee(t, n), v = un(f), h2 = s[m ? c === "floating" ? "reference" : "floating" : c], y = _t(await l.getClippingRect({ element: (e = await (l.isElement == null ? void 0 : l.isElement(h2))) == null || e ? h2 : h2.contextElement || await (l.getDocumentElement == null ? void 0 : l.getDocumentElement(s.floating)), boundary: d, rootBoundary: p, strategy: i })), C = c === "floating" ? { ...r.floating, x: o, y: a } : r.reference, $ = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(s.floating)), S = await (l.isElement == null ? void 0 : l.isElement($)) && await (l.getScale == null ? void 0 : l.getScale($)) || { x: 1, y: 1 }, P = _t(l.convertOffsetParentRelativeRectToViewportRelativeRect ? await l.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: C, offsetParent: $, strategy: i }) : C);
  return { top: (y.top - P.top + v.top) / S.y, bottom: (P.bottom - y.bottom + v.bottom) / S.y, left: (y.left - P.left + v.left) / S.x, right: (P.right - y.right + v.right) / S.x };
}
var je = Math.min;
var Be = Math.max;
function Nt(n, t, e) {
  return Be(n, je(t, e));
}
var qa = (n) => ({ name: "arrow", options: n, async fn(t) {
  const { x: e, y: o, placement: a, rects: l, platform: r, elements: s } = t, { element: i, padding: d = 0 } = Ee(n, t) || {};
  if (i == null)
    return {};
  const p = un(d), c = { x: e, y: o }, m = Re(a), f = oo(m), v = await r.getDimensions(i), h2 = m === "y", y = h2 ? "top" : "left", C = h2 ? "bottom" : "right", $ = h2 ? "clientHeight" : "clientWidth", S = l.reference[f] + l.reference[m] - c[m] - l.floating[f], P = c[m] - l.reference[m], R = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(i));
  let I = R ? R[$] : 0;
  I && await (r.isElement == null ? void 0 : r.isElement(R)) || (I = s.floating[$] || l.floating[f]);
  const T = S / 2 - P / 2, U = I / 2 - v[f] / 2 - 1, q = je(p[y], U), j = je(p[C], U), H = q, Z = I - v[f] - j, W = I / 2 - v[f] / 2 + T, ee = Nt(H, W, Z), te = Xe(a) != null && W != ee && l.reference[f] / 2 - (W < H ? q : j) - v[f] / 2 < 0 ? W < H ? H - W : Z - W : 0;
  return { [m]: c[m] - te, data: { [m]: ee, centerOffset: W - ee + te } };
} });
var dn = ["top", "right", "bottom", "left"];
dn.reduce((n, t) => n.concat(t, t + "-start", t + "-end"), []);
var Ga = { left: "right", right: "left", bottom: "top", top: "bottom" };
function yt(n) {
  return n.replace(/left|right|bottom|top/g, (t) => Ga[t]);
}
function Xa(n, t, e) {
  e === void 0 && (e = false);
  const o = Xe(n), a = Re(n), l = oo(a);
  let r = a === "x" ? o === (e ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return t.reference[l] > t.floating[l] && (r = yt(r)), { main: r, cross: yt(r) };
}
var Fa = { start: "end", end: "start" };
function Dt(n) {
  return n.replace(/start|end/g, (t) => Fa[t]);
}
var Ja = function(n) {
  return n === void 0 && (n = {}), { name: "flip", options: n, async fn(t) {
    var e;
    const { placement: o, middlewareData: a, rects: l, initialPlacement: r, platform: s, elements: i } = t, { mainAxis: d = true, crossAxis: p = true, fallbackPlacements: c, fallbackStrategy: m = "bestFit", fallbackAxisSideDirection: f = "none", flipAlignment: v = true, ...h2 } = Ee(n, t), y = ge(o), C = ge(r) === r, $ = await (s.isRTL == null ? void 0 : s.isRTL(i.floating)), S = c || (C || !v ? [yt(r)] : function(H) {
      const Z = yt(H);
      return [Dt(H), Z, Dt(Z)];
    }(r));
    c || f === "none" || S.push(...function(H, Z, W, ee) {
      const te = Xe(H);
      let V = function(Pe, Oe, Bn) {
        const mo = ["left", "right"], vo = ["right", "left"], Mn = ["top", "bottom"], Dn = ["bottom", "top"];
        switch (Pe) {
          case "top":
          case "bottom":
            return Bn ? Oe ? vo : mo : Oe ? mo : vo;
          case "left":
          case "right":
            return Oe ? Mn : Dn;
          default:
            return [];
        }
      }(ge(H), W === "start", ee);
      return te && (V = V.map((Pe) => Pe + "-" + te), Z && (V = V.concat(V.map(Dt)))), V;
    }(r, v, f, $));
    const P = [r, ...S], R = await Ve(t, h2), I = [];
    let T = ((e = a.flip) == null ? void 0 : e.overflows) || [];
    if (d && I.push(R[y]), p) {
      const { main: H, cross: Z } = Xa(o, l, $);
      I.push(R[H], R[Z]);
    }
    if (T = [...T, { placement: o, overflows: I }], !I.every((H) => H <= 0)) {
      var U, q;
      const H = (((U = a.flip) == null ? void 0 : U.index) || 0) + 1, Z = P[H];
      if (Z)
        return { data: { index: H, overflows: T }, reset: { placement: Z } };
      let W = (q = T.filter((ee) => ee.overflows[0] <= 0).sort((ee, te) => ee.overflows[1] - te.overflows[1])[0]) == null ? void 0 : q.placement;
      if (!W)
        switch (m) {
          case "bestFit": {
            var j;
            const ee = (j = T.map((te) => [te.placement, te.overflows.filter((V) => V > 0).reduce((V, Pe) => V + Pe, 0)]).sort((te, V) => te[1] - V[1])[0]) == null ? void 0 : j[0];
            ee && (W = ee);
            break;
          }
          case "initialPlacement":
            W = r;
        }
      if (o !== W)
        return { reset: { placement: W } };
    }
    return {};
  } };
};
function $o(n, t) {
  return { top: n.top - t.height, right: n.right - t.width, bottom: n.bottom - t.height, left: n.left - t.width };
}
function ko(n) {
  return dn.some((t) => n[t] >= 0);
}
var Za = function(n) {
  return n === void 0 && (n = {}), { name: "hide", options: n, async fn(t) {
    const { rects: e } = t, { strategy: o = "referenceHidden", ...a } = Ee(n, t);
    switch (o) {
      case "referenceHidden": {
        const l = $o(await Ve(t, { ...a, elementContext: "reference" }), e.reference);
        return { data: { referenceHiddenOffsets: l, referenceHidden: ko(l) } };
      }
      case "escaped": {
        const l = $o(await Ve(t, { ...a, altBoundary: true }), e.floating);
        return { data: { escapedOffsets: l, escaped: ko(l) } };
      }
      default:
        return {};
    }
  } };
};
var Qa = function(n) {
  return n === void 0 && (n = 0), { name: "offset", options: n, async fn(t) {
    const { x: e, y: o } = t, a = await async function(l, r) {
      const { placement: s, platform: i, elements: d } = l, p = await (i.isRTL == null ? void 0 : i.isRTL(d.floating)), c = ge(s), m = Xe(s), f = Re(s) === "x", v = ["left", "top"].includes(c) ? -1 : 1, h2 = p && f ? -1 : 1, y = Ee(r, l);
      let { mainAxis: C, crossAxis: $, alignmentAxis: S } = typeof y == "number" ? { mainAxis: y, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...y };
      return m && typeof S == "number" && ($ = m === "end" ? -1 * S : S), f ? { x: $ * h2, y: C * v } : { x: C * v, y: $ * h2 };
    }(t, n);
    return { x: e + a.x, y: o + a.y, data: a };
  } };
};
function cn(n) {
  return n === "x" ? "y" : "x";
}
var Va = function(n) {
  return n === void 0 && (n = {}), { name: "shift", options: n, async fn(t) {
    const { x: e, y: o, placement: a } = t, { mainAxis: l = true, crossAxis: r = false, limiter: s = { fn: (y) => {
      let { x: C, y: $ } = y;
      return { x: C, y: $ };
    } }, ...i } = Ee(n, t), d = { x: e, y: o }, p = await Ve(t, i), c = Re(ge(a)), m = cn(c);
    let f = d[c], v = d[m];
    if (l) {
      const y = c === "y" ? "bottom" : "right";
      f = Nt(f + p[c === "y" ? "top" : "left"], f, f - p[y]);
    }
    if (r) {
      const y = m === "y" ? "bottom" : "right";
      v = Nt(v + p[m === "y" ? "top" : "left"], v, v - p[y]);
    }
    const h2 = s.fn({ ...t, [c]: f, [m]: v });
    return { ...h2, data: { x: h2.x - e, y: h2.y - o } };
  } };
};
var ja = function(n) {
  return n === void 0 && (n = {}), { options: n, fn(t) {
    const { x: e, y: o, placement: a, rects: l, middlewareData: r } = t, { offset: s = 0, mainAxis: i = true, crossAxis: d = true } = Ee(n, t), p = { x: e, y: o }, c = Re(a), m = cn(c);
    let f = p[c], v = p[m];
    const h2 = Ee(s, t), y = typeof h2 == "number" ? { mainAxis: h2, crossAxis: 0 } : { mainAxis: 0, crossAxis: 0, ...h2 };
    if (i) {
      const S = c === "y" ? "height" : "width", P = l.reference[c] - l.floating[S] + y.mainAxis, R = l.reference[c] + l.reference[S] - y.mainAxis;
      f < P ? f = P : f > R && (f = R);
    }
    if (d) {
      var C, $;
      const S = c === "y" ? "width" : "height", P = ["top", "left"].includes(ge(a)), R = l.reference[m] - l.floating[S] + (P && ((C = r.offset) == null ? void 0 : C[m]) || 0) + (P ? 0 : y.crossAxis), I = l.reference[m] + l.reference[S] + (P ? 0 : (($ = r.offset) == null ? void 0 : $[m]) || 0) - (P ? y.crossAxis : 0);
      v < R ? v = R : v > I && (v = I);
    }
    return { [c]: f, [m]: v };
  } };
};
var el = function(n) {
  return n === void 0 && (n = {}), { name: "size", options: n, async fn(t) {
    const { placement: e, rects: o, platform: a, elements: l } = t, { apply: r = () => {
    }, ...s } = Ee(n, t), i = await Ve(t, s), d = ge(e), p = Xe(e), c = Re(e) === "x", { width: m, height: f } = o.floating;
    let v, h2;
    d === "top" || d === "bottom" ? (v = d, h2 = p === (await (a.isRTL == null ? void 0 : a.isRTL(l.floating)) ? "start" : "end") ? "left" : "right") : (h2 = d, v = p === "end" ? "top" : "bottom");
    const y = f - i[v], C = m - i[h2], $ = !t.middlewareData.shift;
    let S = y, P = C;
    if (c) {
      const I = m - i.left - i.right;
      P = p || $ ? je(C, I) : I;
    } else {
      const I = f - i.top - i.bottom;
      S = p || $ ? je(y, I) : I;
    }
    if ($ && !p) {
      const I = Be(i.left, 0), T = Be(i.right, 0), U = Be(i.top, 0), q = Be(i.bottom, 0);
      c ? P = m - 2 * (I !== 0 || T !== 0 ? I + T : Be(i.left, i.right)) : S = f - 2 * (U !== 0 || q !== 0 ? U + q : Be(i.top, i.bottom));
    }
    await r({ ...t, availableWidth: P, availableHeight: S });
    const R = await a.getDimensions(l.floating);
    return m !== R.width || f !== R.height ? { reset: { rects: true } } : {};
  } };
};
function ue(n) {
  var t;
  return ((t = n.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function de(n) {
  return ue(n).getComputedStyle(n);
}
function pn(n) {
  return n instanceof ue(n).Node;
}
function $e(n) {
  return pn(n) ? (n.nodeName || "").toLowerCase() : "#document";
}
function pe(n) {
  return n instanceof ue(n).HTMLElement;
}
function be(n) {
  return n instanceof ue(n).Element;
}
function So(n) {
  return typeof ShadowRoot < "u" && (n instanceof ue(n).ShadowRoot || n instanceof ShadowRoot);
}
function et(n) {
  const { overflow: t, overflowX: e, overflowY: o, display: a } = de(n);
  return /auto|scroll|overlay|hidden|clip/.test(t + o + e) && !["inline", "contents"].includes(a);
}
function tl(n) {
  return ["table", "td", "th"].includes($e(n));
}
function Lt(n) {
  const t = no(), e = de(n);
  return e.transform !== "none" || e.perspective !== "none" || !t && !!e.backdropFilter && e.backdropFilter !== "none" || !t && !!e.filter && e.filter !== "none" || ["transform", "perspective", "filter"].some((o) => (e.willChange || "").includes(o)) || ["paint", "layout", "strict", "content"].some((o) => (e.contain || "").includes(o));
}
function no() {
  return !(typeof CSS > "u" || !CSS.supports) && CSS.supports("-webkit-backdrop-filter", "none");
}
function At(n) {
  return ["html", "body", "#document"].includes($e(n));
}
var Kt = Math.min;
var Le = Math.max;
var gt = Math.round;
var ct = Math.floor;
var Me = (n) => ({ x: n, y: n });
function fn(n) {
  const t = de(n);
  let e = parseFloat(t.width) || 0, o = parseFloat(t.height) || 0;
  const a = pe(n), l = a ? n.offsetWidth : e, r = a ? n.offsetHeight : o, s = gt(e) !== l || gt(o) !== r;
  return s && (e = l, o = r), { width: e, height: o, $: s };
}
function ao(n) {
  return be(n) ? n : n.contextElement;
}
function Ke(n) {
  const t = ao(n);
  if (!pe(t))
    return Me(1);
  const e = t.getBoundingClientRect(), { width: o, height: a, $: l } = fn(t);
  let r = (l ? gt(e.width) : e.width) / o, s = (l ? gt(e.height) : e.height) / a;
  return r && Number.isFinite(r) || (r = 1), s && Number.isFinite(s) || (s = 1), { x: r, y: s };
}
var Ao = Me(0);
function mn(n, t, e) {
  var o, a;
  if (t === void 0 && (t = true), !no())
    return Ao;
  const l = n ? ue(n) : window;
  return !e || t && e !== l ? Ao : { x: ((o = l.visualViewport) == null ? void 0 : o.offsetLeft) || 0, y: ((a = l.visualViewport) == null ? void 0 : a.offsetTop) || 0 };
}
function De(n, t, e, o) {
  t === void 0 && (t = false), e === void 0 && (e = false);
  const a = n.getBoundingClientRect(), l = ao(n);
  let r = Me(1);
  t && (o ? be(o) && (r = Ke(o)) : r = Ke(n));
  const s = mn(l, e, o);
  let i = (a.left + s.x) / r.x, d = (a.top + s.y) / r.y, p = a.width / r.x, c = a.height / r.y;
  if (l) {
    const m = ue(l), f = o && be(o) ? ue(o) : o;
    let v = m.frameElement;
    for (; v && o && f !== m; ) {
      const h2 = Ke(v), y = v.getBoundingClientRect(), C = getComputedStyle(v), $ = y.left + (v.clientLeft + parseFloat(C.paddingLeft)) * h2.x, S = y.top + (v.clientTop + parseFloat(C.paddingTop)) * h2.y;
      i *= h2.x, d *= h2.y, p *= h2.x, c *= h2.y, i += $, d += S, v = ue(v).frameElement;
    }
  }
  return _t({ width: p, height: c, x: i, y: d });
}
function we(n) {
  return ((pn(n) ? n.ownerDocument : n.document) || window.document).documentElement;
}
function Tt(n) {
  return be(n) ? { scrollLeft: n.scrollLeft, scrollTop: n.scrollTop } : { scrollLeft: n.pageXOffset, scrollTop: n.pageYOffset };
}
function vn(n) {
  return De(we(n)).left + Tt(n).scrollLeft;
}
function ze(n) {
  if ($e(n) === "html")
    return n;
  const t = n.assignedSlot || n.parentNode || So(n) && n.host || we(n);
  return So(t) ? t.host : t;
}
function hn(n) {
  const t = ze(n);
  return At(t) ? n.ownerDocument ? n.ownerDocument.body : n.body : pe(t) && et(t) ? t : hn(t);
}
function bt(n, t) {
  var e;
  t === void 0 && (t = []);
  const o = hn(n), a = o === ((e = n.ownerDocument) == null ? void 0 : e.body), l = ue(o);
  return a ? t.concat(l, l.visualViewport || [], et(o) ? o : []) : t.concat(o, bt(o));
}
function To(n, t, e) {
  let o;
  if (t === "viewport")
    o = function(a, l) {
      const r = ue(a), s = we(a), i = r.visualViewport;
      let d = s.clientWidth, p = s.clientHeight, c = 0, m = 0;
      if (i) {
        d = i.width, p = i.height;
        const f = no();
        (!f || f && l === "fixed") && (c = i.offsetLeft, m = i.offsetTop);
      }
      return { width: d, height: p, x: c, y: m };
    }(n, e);
  else if (t === "document")
    o = function(a) {
      const l = we(a), r = Tt(a), s = a.ownerDocument.body, i = Le(l.scrollWidth, l.clientWidth, s.scrollWidth, s.clientWidth), d = Le(l.scrollHeight, l.clientHeight, s.scrollHeight, s.clientHeight);
      let p = -r.scrollLeft + vn(a);
      const c = -r.scrollTop;
      return de(s).direction === "rtl" && (p += Le(l.clientWidth, s.clientWidth) - i), { width: i, height: d, x: p, y: c };
    }(we(n));
  else if (be(t))
    o = function(a, l) {
      const r = De(a, true, l === "fixed"), s = r.top + a.clientTop, i = r.left + a.clientLeft, d = pe(a) ? Ke(a) : Me(1);
      return { width: a.clientWidth * d.x, height: a.clientHeight * d.y, x: i * d.x, y: s * d.y };
    }(t, e);
  else {
    const a = mn(n);
    o = { ...t, x: t.x - a.x, y: t.y - a.y };
  }
  return _t(o);
}
function _n(n, t) {
  const e = ze(n);
  return !(e === t || !be(e) || At(e)) && (de(e).position === "fixed" || _n(e, t));
}
function Po(n, t) {
  return pe(n) && de(n).position !== "fixed" ? t ? t(n) : n.offsetParent : null;
}
function Oo(n, t) {
  const e = ue(n);
  if (!pe(n))
    return e;
  let o = Po(n, t);
  for (; o && tl(o) && de(o).position === "static"; )
    o = Po(o, t);
  return o && ($e(o) === "html" || $e(o) === "body" && de(o).position === "static" && !Lt(o)) ? e : o || function(a) {
    let l = ze(a);
    for (; pe(l) && !At(l); ) {
      if (Lt(l))
        return l;
      l = ze(l);
    }
    return null;
  }(n) || e;
}
function ol(n, t, e) {
  const o = pe(t), a = we(t), l = e === "fixed", r = De(n, true, l, t);
  let s = { scrollLeft: 0, scrollTop: 0 };
  const i = Me(0);
  if (o || !o && !l)
    if (($e(t) !== "body" || et(a)) && (s = Tt(t)), pe(t)) {
      const d = De(t, true, l, t);
      i.x = d.x + t.clientLeft, i.y = d.y + t.clientTop;
    } else
      a && (i.x = vn(a));
  return { x: r.left + s.scrollLeft - i.x, y: r.top + s.scrollTop - i.y, width: r.width, height: r.height };
}
var nl = { getClippingRect: function(n) {
  let { element: t, boundary: e, rootBoundary: o, strategy: a } = n;
  const l = e === "clippingAncestors" ? function(d, p) {
    const c = p.get(d);
    if (c)
      return c;
    let m = bt(d).filter((y) => be(y) && $e(y) !== "body"), f = null;
    const v = de(d).position === "fixed";
    let h2 = v ? ze(d) : d;
    for (; be(h2) && !At(h2); ) {
      const y = de(h2), C = Lt(h2);
      C || y.position !== "fixed" || (f = null), (v ? !C && !f : !C && y.position === "static" && f && ["absolute", "fixed"].includes(f.position) || et(h2) && !C && _n(d, h2)) ? m = m.filter(($) => $ !== h2) : f = y, h2 = ze(h2);
    }
    return p.set(d, m), m;
  }(t, this._c) : [].concat(e), r = [...l, o], s = r[0], i = r.reduce((d, p) => {
    const c = To(t, p, a);
    return d.top = Le(c.top, d.top), d.right = Kt(c.right, d.right), d.bottom = Kt(c.bottom, d.bottom), d.left = Le(c.left, d.left), d;
  }, To(t, s, a));
  return { width: i.right - i.left, height: i.bottom - i.top, x: i.left, y: i.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(n) {
  let { rect: t, offsetParent: e, strategy: o } = n;
  const a = pe(e), l = we(e);
  if (e === l)
    return t;
  let r = { scrollLeft: 0, scrollTop: 0 }, s = Me(1);
  const i = Me(0);
  if ((a || !a && o !== "fixed") && (($e(e) !== "body" || et(l)) && (r = Tt(e)), pe(e))) {
    const d = De(e);
    s = Ke(e), i.x = d.x + e.clientLeft, i.y = d.y + e.clientTop;
  }
  return { width: t.width * s.x, height: t.height * s.y, x: t.x * s.x - r.scrollLeft * s.x + i.x, y: t.y * s.y - r.scrollTop * s.y + i.y };
}, isElement: be, getDimensions: function(n) {
  return fn(n);
}, getOffsetParent: Oo, getDocumentElement: we, getScale: Ke, async getElementRects(n) {
  let { reference: t, floating: e, strategy: o } = n;
  const a = this.getOffsetParent || Oo, l = this.getDimensions;
  return { reference: ol(t, await a(e), o), floating: { x: 0, y: 0, ...await l(e) } };
}, getClientRects: (n) => Array.from(n.getClientRects()), isRTL: (n) => de(n).direction === "rtl" };
function al(n, t, e, o) {
  o === void 0 && (o = {});
  const { ancestorScroll: a = true, ancestorResize: l = true, elementResize: r = true, layoutShift: s = typeof IntersectionObserver == "function", animationFrame: i = false } = o, d = ao(n), p = a || l ? [...d ? bt(d) : [], ...bt(t)] : [];
  p.forEach((h2) => {
    a && h2.addEventListener("scroll", e, { passive: true }), l && h2.addEventListener("resize", e);
  });
  const c = d && s ? function(h2, y) {
    let C, $ = null;
    const S = we(h2);
    function P() {
      clearTimeout(C), $ && $.disconnect(), $ = null;
    }
    return function R(I, T) {
      I === void 0 && (I = false), T === void 0 && (T = 1), P();
      const { left: U, top: q, width: j, height: H } = h2.getBoundingClientRect();
      if (I || y(), !j || !H)
        return;
      const Z = ct(q), W = ct(S.clientWidth - (U + j)), ee = ct(S.clientHeight - (q + H)), te = ct(U);
      let V = true;
      $ = new IntersectionObserver((Pe) => {
        const Oe = Pe[0].intersectionRatio;
        if (Oe !== T) {
          if (!V)
            return R();
          Oe ? R(false, Oe) : C = setTimeout(() => {
            R(false, 1e-7);
          }, 100);
        }
        V = false;
      }, { rootMargin: -Z + "px " + -W + "px " + -ee + "px " + -te + "px", threshold: Le(0, Kt(1, T)) || 1 }), $.observe(h2);
    }(true), P;
  }(d, e) : null;
  let m, f = null;
  r && (f = new ResizeObserver(e), d && !i && f.observe(d), f.observe(t));
  let v = i ? De(n) : null;
  return i && function h2() {
    const y = De(n);
    !v || y.x === v.x && y.y === v.y && y.width === v.width && y.height === v.height || e(), v = y, m = requestAnimationFrame(h2);
  }(), e(), () => {
    p.forEach((h2) => {
      a && h2.removeEventListener("scroll", e), l && h2.removeEventListener("resize", e);
    }), c && c(), f && f.disconnect(), f = null, i && cancelAnimationFrame(m);
  };
}
var ll = (n, t, e) => {
  const o = /* @__PURE__ */ new Map(), a = { platform: nl, ...e }, l = { ...a.platform, _c: o };
  return Ua(n, t, { ...a, platform: l });
};
function Ht(n) {
  var t;
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
function rl(n) {
  return {
    name: "arrow",
    options: n,
    fn(t) {
      const e = Ht(unref(n.element));
      return e == null ? {} : qa({
        element: e,
        padding: n.padding
      }).fn(t);
    }
  };
}
function yn(n) {
  return typeof window > "u" ? 1 : (n.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Bo(n, t) {
  const e = yn(n);
  return Math.round(t * e) / e;
}
function il(n, t, e) {
  e === void 0 && (e = {});
  const o = e.whileElementsMounted, a = computed(() => {
    var T;
    return (T = unref(e.open)) != null ? T : true;
  }), l = computed(() => unref(e.middleware)), r = computed(() => {
    var T;
    return (T = unref(e.placement)) != null ? T : "bottom";
  }), s = computed(() => {
    var T;
    return (T = unref(e.strategy)) != null ? T : "absolute";
  }), i = computed(() => {
    var T;
    return (T = unref(e.transform)) != null ? T : true;
  }), d = computed(() => Ht(n.value)), p = computed(() => Ht(t.value)), c = ref(0), m = ref(0), f = ref(s.value), v = ref(r.value), h2 = shallowRef({}), y = ref(false), C = computed(() => {
    const T = {
      position: f.value,
      left: "0",
      top: "0"
    };
    if (!p.value)
      return T;
    const U = Bo(p.value, c.value), q = Bo(p.value, m.value);
    return i.value ? {
      ...T,
      transform: "translate(" + U + "px, " + q + "px)",
      ...yn(p.value) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: f.value,
      left: U + "px",
      top: q + "px"
    };
  });
  let $;
  function S() {
    d.value == null || p.value == null || ll(d.value, p.value, {
      middleware: l.value,
      placement: r.value,
      strategy: s.value
    }).then((T) => {
      c.value = T.x, m.value = T.y, f.value = T.strategy, v.value = T.placement, h2.value = T.middlewareData, y.value = true;
    });
  }
  function P() {
    typeof $ == "function" && ($(), $ = void 0);
  }
  function R() {
    if (P(), o === void 0) {
      S();
      return;
    }
    if (d.value != null && p.value != null) {
      $ = o(d.value, p.value, S);
      return;
    }
  }
  function I() {
    a.value || (y.value = false);
  }
  return watch([l, r, s], S, {
    flush: "sync"
  }), watch([d, p], R, {
    flush: "sync"
  }), watch(a, I, {
    flush: "sync"
  }), getCurrentScope() && onScopeDispose(P), {
    x: shallowReadonly(c),
    y: shallowReadonly(m),
    strategy: shallowReadonly(f),
    placement: shallowReadonly(v),
    middlewareData: shallowReadonly(h2),
    isPositioned: shallowReadonly(y),
    floatingStyles: C,
    update: S
  };
}
var gn = Symbol();
var sl = {
  inheritAttrs: false
};
var ye = defineComponent({
  ...sl,
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
  setup(n) {
    const t = n, e = inject(to), o = ref(), a = ref(), l = ref(), { width: r, height: s } = va(l), i = computed(
      () => t.side + (t.align !== "center" ? "-" + t.align : "")
    ), d = computed(() => typeof t.collisionPadding == "number" ? t.collisionPadding : { top: 0, right: 0, bottom: 0, left: 0, ...t.collisionPadding }), p = computed(() => Array.isArray(t.collisionBoundary) ? t.collisionBoundary : [t.collisionBoundary]), c = computed(() => ({
      padding: d.value,
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: p.value.length > 0
    })), m = Vn(() => [
      Qa({
        mainAxis: t.sideOffset + s.value,
        alignmentAxis: t.alignOffset
      }),
      t.avoidCollisions && Va({
        mainAxis: true,
        crossAxis: !!t.prioritizePosition,
        limiter: t.sticky === "partial" ? ja() : void 0,
        ...c.value
      }),
      !t.prioritizePosition && t.avoidCollisions && Ja({
        ...c.value
      }),
      el({
        ...c,
        apply: ({ elements: T, rects: U, availableWidth: q, availableHeight: j }) => {
          const { width: H, height: Z } = U.reference, W = T.floating.style;
          Object.assign(T.floating.style, {
            maxWidth: `${q}px`,
            maxHeight: `${j}px`
          }), W.setProperty(
            "--radix-popper-available-width",
            `${q}px`
          ), W.setProperty(
            "--radix-popper-available-height",
            `${j}px`
          ), W.setProperty(
            "--radix-popper-anchor-width",
            `${H}px`
          ), W.setProperty(
            "--radix-popper-anchor-height",
            `${Z}px`
          );
        }
      }),
      l.value && rl({ element: l.value, padding: t.arrowPadding }),
      Wa({
        arrowWidth: r.value,
        arrowHeight: s.value
      }),
      t.hideWhenDetached && Za({ strategy: "referenceHidden", ...c.value })
    ]), { floatingStyles: f, placement: v, isPositioned: h2, middlewareData: y } = il(
      e.anchor,
      o,
      {
        strategy: "fixed",
        placement: i,
        whileElementsMounted: (...T) => al(...T, {
          animationFrame: t.updatePositionStrategy === "always"
        }),
        middleware: m
      }
    ), C = computed(
      () => It(v.value)[0]
    ), $ = computed(
      () => It(v.value)[1]
    );
    watchEffect(() => {
      var T;
      h2.value && ((T = t.onPlaced) == null || T.call(t));
    });
    const S = computed(
      () => {
        var T;
        return ((T = y.value.arrow) == null ? void 0 : T.centerOffset) !== 0;
      }
    ), P = ref("");
    watchEffect(() => {
      a.value && (P.value = window.getComputedStyle(a.value).zIndex);
    });
    const R = computed(() => {
      var T;
      return ((T = y.value.arrow) == null ? void 0 : T.x) ?? 0;
    }), I = computed(() => {
      var T;
      return ((T = y.value.arrow) == null ? void 0 : T.y) ?? 0;
    });
    return provide(gn, {
      placedSide: C,
      onArrowChange: (T) => {
        l.value = T;
      },
      arrowX: R,
      arrowY: I,
      shouldHideArrow: S
    }), (T, U) => {
      var q, j, H;
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
            (j = unref(y).transformOrigin) == null ? void 0 : j.y
          ].join(" ")
        })
      }, [
        createVNode(unref(D), mergeProps(T.$attrs, {
          "as-child": t.asChild,
          "data-side": C.value,
          "data-align": $.value,
          style: {
            // if the PopperContent hasn't been placed yet (not all measurements done)
            // we prevent animations so that users's animation don't kick in too early referring wrong sides
            animation: unref(h2) ? void 0 : "none",
            // hide the content if using the hide middleware and should be hidden
            opacity: (H = unref(y).hide) != null && H.referenceHidden ? 0 : void 0
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
var ul = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
};
var dl = {
  inheritAttrs: false
};
var Ie = defineComponent({
  ...dl,
  __name: "PopperArrow",
  props: {
    width: {},
    height: {}
  },
  setup(n) {
    const t = inject(gn), e = computed(
      () => t != null && t.placedSide ? ul[t == null ? void 0 : t.placedSide.value] : ""
    );
    return (o, a) => {
      var l, r, s, i;
      return openBlock(), createElementBlock("span", {
        ref: (d) => {
          unref(t).onArrowChange(d);
        },
        style: normalizeStyle({
          position: "absolute",
          left: (l = unref(t).arrowX) != null && l.value ? `${(r = unref(t).arrowX) == null ? void 0 : r.value}px` : void 0,
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
        createVNode(Na, mergeProps(o.$attrs, { style: {
          display: "block"
        } }), null, 16)
      ], 4);
    };
  }
});
var lo = Symbol();
var Hr = defineComponent({
  __name: "TooltipRoot",
  props: {
    defaultOpen: { type: Boolean, default: false },
    open: { type: Boolean, default: void 0 },
    delayDuration: { default: 700 },
    disableHoverableContent: { type: Boolean }
  },
  emits: ["update:open"],
  setup(n, { emit: t }) {
    const e = n, o = K(e, "open", t, {
      defaultValue: e.defaultOpen,
      passive: true
    });
    return provide(lo, {
      open: o,
      showTooltip: () => {
        o.value = true;
      },
      hideTooltip: () => {
        o.value = false;
      }
    }), (a, l) => (openBlock(), createBlock(unref(me), null, {
      default: withCtx(() => [
        renderSlot(a.$slots, "default")
      ]),
      _: 3
    }));
  }
});
var zr = defineComponent({
  __name: "TooltipTrigger",
  setup(n) {
    const t = inject(lo), { primitiveElement: e, currentElement: o } = B();
    async function a(r) {
      await Yo(r, o.value) && (t == null || t.showTooltip());
    }
    const l = computed(() => t != null && t.open.value ? "closed" : "instant-open");
    return (r, s) => (openBlock(), createBlock(unref(_e), { asChild: "" }, {
      default: withCtx(() => {
        var i, d;
        return [
          createVNode(unref(X), {
            type: "button",
            ref_key: "primitiveElement",
            ref: e,
            "data-state": l.value,
            "aria-expanded": ((i = unref(t)) == null ? void 0 : i.open.value) || false,
            onMouseenter: a,
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
var Yr = defineComponent({
  __name: "TooltipPortal",
  props: {
    container: {}
  },
  setup(n) {
    const t = n;
    return (e, o) => (openBlock(), createBlock(qe, normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Wr = defineComponent({
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
  setup(n) {
    const t = n, e = inject(lo);
    return (o, a) => {
      var l;
      return (l = unref(e)) != null && l.open.value ? (openBlock(), createBlock(unref(ye), normalizeProps(mergeProps({ key: 0 }, t)), {
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
var Ur = defineComponent({
  __name: "TooltipArrow",
  setup(n) {
    return (t, e) => (openBlock(), createBlock(unref(Ie)));
  }
});
var ro = Symbol();
var qr = defineComponent({
  __name: "HoverCardRoot",
  props: {
    defaultOpen: { type: Boolean, default: false },
    open: { type: Boolean, default: void 0 },
    openDelay: { default: 700 },
    closeDelay: { default: 300 }
  },
  emits: ["update:open"],
  setup(n, { emit: t }) {
    const e = n, o = K(e, "open", t, {
      defaultValue: e.defaultOpen,
      passive: true
    });
    return provide(ro, {
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
    }), (a, l) => (openBlock(), createBlock(unref(me), null, {
      default: withCtx(() => [
        renderSlot(a.$slots, "default")
      ]),
      _: 3
    }));
  }
});
var Gr = defineComponent({
  __name: "HoverCardTrigger",
  props: {
    asChild: { type: Boolean, default: false }
  },
  setup(n) {
    const t = n, e = inject(ro), { primitiveElement: o, currentElement: a } = B();
    async function l(s) {
      await Yo(
        s,
        a.value,
        e == null ? void 0 : e.openDelay
      ) && (e == null || e.showTooltip());
    }
    async function r(s) {
      e.isHover = false, await Wo(s, e == null ? void 0 : e.closeDelay) && !(e != null && e.isHover) && (e == null || e.hideTooltip());
    }
    return (s, i) => (openBlock(), createBlock(unref(_e), { asChild: "" }, {
      default: withCtx(() => {
        var d, p;
        return [
          createVNode(unref(X), {
            ref_key: "primitiveElement",
            ref: o,
            asChild: t.asChild,
            "aria-expanded": ((d = unref(e)) == null ? void 0 : d.open.value) || false,
            "data-state": (p = unref(e)) != null && p.open.value ? "open" : "closed",
            onMouseover: i[0] || (i[0] = (c) => unref(e).isHover = true),
            onMouseenter: l,
            onMouseleave: r,
            style: { cursor: "default" }
          }, {
            default: withCtx(() => [
              renderSlot(s.$slots, "default")
            ]),
            _: 3
          }, 8, ["asChild", "aria-expanded", "data-state"])
        ];
      }),
      _: 3
    }));
  }
});
var Xr = defineComponent({
  __name: "HoverCardPortal",
  props: {
    container: {}
  },
  setup(n) {
    const t = n;
    return (e, o) => (openBlock(), createBlock(qe, normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Fr = defineComponent({
  __name: "HoverCardContent",
  props: {
    asChild: { type: Boolean },
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
  setup(n) {
    const t = n, e = inject(ro);
    async function o(a) {
      e.isHover = false, await Wo(a, e == null ? void 0 : e.closeDelay) && !(e != null && e.isHover) && (e == null || e.hideTooltip());
    }
    return (a, l) => {
      var r, s;
      return (r = unref(e)) != null && r.open.value ? (openBlock(), createBlock(unref(ye), mergeProps({ key: 0 }, t, {
        onMouseover: l[0] || (l[0] = (i) => unref(e).isHover = true),
        onMouseleave: o,
        "data-state": (s = unref(e)) != null && s.open.value ? "open" : "closed",
        "data-side": t.side,
        "data-align": t.align
      }), {
        default: withCtx(() => [
          renderSlot(a.$slots, "default")
        ]),
        _: 3
      }, 16, ["data-state", "data-side", "data-align"])) : createCommentVNode("", true);
    };
  }
});
var Jr = defineComponent({
  __name: "HoverCardArrow",
  setup(n) {
    return (t, e) => (openBlock(), createBlock(unref(Ie)));
  }
});
var Pt = Symbol();
var Zr = defineComponent({
  __name: "PopoverRoot",
  props: {
    defaultOpen: { type: Boolean, default: false },
    open: { type: Boolean, default: void 0 },
    modal: { type: Boolean, default: false }
  },
  emits: ["update:open"],
  setup(n, { emit: t }) {
    const e = n, o = K(e, "open", t, {
      defaultValue: e.defaultOpen,
      passive: true
    }), a = ref();
    return provide(Pt, {
      open: o,
      showPopover: () => {
        o.value = true;
      },
      hidePopover: () => {
        o.value = false;
      },
      triggerElement: a
    }), (l, r) => (openBlock(), createBlock(unref(me), null, {
      default: withCtx(() => [
        renderSlot(l.$slots, "default")
      ]),
      _: 3
    }));
  }
});
var Qr = defineComponent({
  __name: "PopoverTrigger",
  setup(n) {
    const t = inject(Pt), { primitiveElement: e, currentElement: o } = B();
    onMounted(() => {
      t.triggerElement.value = o.value;
    });
    function a() {
      t != null && t.open.value ? t == null || t.hidePopover() : t == null || t.showPopover();
    }
    return (l, r) => (openBlock(), createBlock(unref(_e), { asChild: "" }, {
      default: withCtx(() => {
        var s, i;
        return [
          createVNode(unref(X), {
            type: "button",
            ref_key: "primitiveElement",
            ref: e,
            "aria-expanded": ((s = unref(t)) == null ? void 0 : s.open.value) || false,
            "data-state": (i = unref(t)) != null && i.open.value ? "open" : "closed",
            onClick: a
          }, {
            default: withCtx(() => [
              renderSlot(l.$slots, "default")
            ]),
            _: 3
          }, 8, ["aria-expanded", "data-state"])
        ];
      }),
      _: 3
    }));
  }
});
var Vr = defineComponent({
  __name: "PopoverPortal",
  props: {
    container: {}
  },
  setup(n) {
    const t = n;
    return (e, o) => (openBlock(), createBlock(qe, normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function cl(n, t) {
  if (t) {
    const e = t.getBoundingClientRect();
    return !(n.clientX > e.left && n.clientX < e.right && n.clientY > e.top && n.clientY < e.bottom);
  }
}
var jr = defineComponent({
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
  setup(n) {
    const t = n, e = inject(Pt), { primitiveElement: o, currentElement: a } = B();
    watchEffect(() => {
      a.value && (e != null && e.open.value ? (Ft(a.value), window.addEventListener("mousedown", l), window.addEventListener("keydown", r)) : e != null && e.triggerElement.value && (e == null || e.triggerElement.value.focus(), s()));
    });
    function l(i) {
      var p;
      if ((p = e == null ? void 0 : e.triggerElement.value) != null && p.contains(i.target))
        return;
      cl(i, a.value) && (e == null || e.hidePopover(), i.preventDefault(), i.stopPropagation());
    }
    function r(i) {
      i.key === "Escape" && (e == null || e.hidePopover());
    }
    function s() {
      window.removeEventListener("mousedown", l), window.removeEventListener("keydown", r);
    }
    return onUnmounted(() => {
      s();
    }), (i, d) => {
      var p;
      return (p = unref(e)) != null && p.open.value ? (openBlock(), createBlock(unref(ye), mergeProps({
        key: 0,
        ref_key: "primitiveElement",
        ref: o
      }, t), {
        default: withCtx(() => {
          var c, m;
          return [
            (c = unref(e)) != null && c.open.value ? (openBlock(), createBlock(unref(D), {
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
var ei = defineComponent({
  __name: "PopoverArrow",
  setup(n) {
    return (t, e) => (openBlock(), createBlock(unref(Ie)));
  }
});
var ti = defineComponent({
  __name: "PopoverClose",
  setup(n) {
    const t = inject(Pt);
    return (e, o) => {
      var a, l, r;
      return openBlock(), createBlock(unref(X), {
        type: "button",
        "aria-expanded": ((a = unref(t)) == null ? void 0 : a.open.value) || false,
        "data-state": (l = unref(t)) != null && l.open.value ? "open" : "closed",
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
var oi = defineComponent({
  __name: "DropdownMenuRoot",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modelValue: { type: Boolean },
    orientation: { default: "vertical" },
    dir: {}
  },
  emits: ["update:modelValue"],
  setup(n, { emit: t }) {
    const e = n, o = K(e, "modelValue", t, {
      passive: true
    }), a = ref(), l = ref();
    return provide(Se, {
      selectedElement: a,
      changeSelected: (r) => {
        a.value = r, a.value.focus();
      },
      modelValue: o,
      showTooltip: () => {
        o.value = true;
      },
      hideTooltip: () => {
        o.value = false;
      },
      triggerElement: l,
      itemsArray: [],
      orientation: e.orientation
    }), (r, s) => (openBlock(), createBlock(unref(me), null, {
      default: withCtx(() => [
        renderSlot(r.$slots, "default")
      ]),
      _: 3
    }));
  }
});
var ni = defineComponent({
  __name: "DropdownMenuTrigger",
  setup(n) {
    const t = inject(
      Se
    ), { primitiveElement: e, currentElement: o } = B();
    onMounted(() => {
      t.triggerElement.value = o.value;
    });
    function a() {
      t != null && t.modelValue.value ? t == null || t.hideTooltip() : t == null || t.showTooltip();
    }
    async function l(r) {
      var s;
      (r.key === "ArrowDown" || r.key === "Enter" || r.keyCode === 32) && (t == null || t.showTooltip(), await nextTick(), t == null || t.changeSelected((s = t.itemsArray) == null ? void 0 : s[0]));
    }
    return (r, s) => (openBlock(), createBlock(unref(_e), { asChild: "" }, {
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
            onClick: a,
            onKeydown: withModifiers(l, ["prevent"])
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
var pl = {};
function fl(n, t) {
  return openBlock(), createBlock(Teleport, { to: "body" }, [
    renderSlot(n.$slots, "default")
  ]);
}
var ai = Ct(pl, [["render", fl]]);
var li = defineComponent({
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
  setup(n) {
    const t = n, e = inject(Se), { primitiveElement: o, currentElement: a } = B(), { createCollection: l, getItems: r } = re();
    l(a), watchEffect(() => {
      a.value && (e != null && e.modelValue.value ? (document.querySelector("body").style.pointerEvents = "none", e.itemsArray = r(a.value)) : e != null && e.triggerElement.value && s());
    });
    function s() {
      document.querySelector("body").style.pointerEvents = "", setTimeout(() => {
        var i;
        (i = e == null ? void 0 : e.triggerElement.value) == null || i.focus();
      }, 0);
    }
    return ke(a, (i) => {
      i.target.closest('[role="menuitem"]') || e == null || e.hideTooltip();
    }), (i, d) => {
      var p;
      return (p = unref(e)) != null && p.modelValue.value ? (openBlock(), createBlock(unref(ye), normalizeProps(mergeProps({ key: 0 }, t)), {
        default: withCtx(() => {
          var c;
          return [
            createVNode(unref(D), {
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
var ri = defineComponent({
  __name: "DropdownMenuArrow",
  setup(n) {
    return (t, e) => (openBlock(), createBlock(unref(Ie)));
  }
});
var tt = Symbol();
var ii = defineComponent({
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
  setup(n, { emit: t }) {
    const e = n, o = K(e, "modelValue", t, {
      passive: true
    }), a = ref(), l = inject(tt);
    return provide(tt, {
      modelValue: o,
      showTooltip: () => {
        o.value = true;
      },
      hideTooltip: () => {
        o.value = false;
      },
      triggerElement: a,
      itemsArray: [],
      orientation: e.orientation,
      triggerId: ce(),
      contentId: ce(),
      parentContext: l
    }), (r, s) => (openBlock(), createBlock(unref(me), null, {
      default: withCtx(() => [
        renderSlot(r.$slots, "default")
      ]),
      _: 3
    }));
  }
});
var si = defineComponent({
  __name: "DropdownMenuItem",
  props: {
    asChild: { type: Boolean },
    value: {},
    disabled: { type: Boolean },
    textValue: {}
  },
  setup(n) {
    const t = n, e = inject(
      Se
    ), o = inject(
      tt
    );
    function a() {
      e != null && e.selectedElement.value && e.hideTooltip();
    }
    function l() {
      e == null || e.hideTooltip();
    }
    return (r, s) => {
      var i;
      return openBlock(), createBlock(ie, {
        disabled: t.disabled,
        rootProvider: unref(e),
        subProvider: unref(o),
        orientation: (i = unref(e)) == null ? void 0 : i.orientation,
        onHandleClick: a,
        onEscapeKeydown: l
      }, {
        default: withCtx(() => [
          renderSlot(r.$slots, "default")
        ]),
        _: 3
      }, 8, ["disabled", "rootProvider", "subProvider", "orientation"]);
    };
  }
});
var ml = Symbol();
var ui = defineComponent({
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
  setup(n, { emit: t }) {
    const e = n, { primitiveElement: o, currentElement: a } = B();
    return provide(ml, {
      type: e.type,
      modelValue: toRef(() => e.modelValue),
      changeModelValue: (l) => {
        if (e.type === "single")
          t("update:modelValue", l);
        else {
          let r = e.modelValue;
          if (r.includes(l)) {
            let s = r.findIndex((i) => i === l);
            r.splice(s, 1);
          } else
            r.push(l);
          t("update:modelValue", r);
        }
      },
      parentElement: a
    }), (l, r) => (openBlock(), createBlock(unref(D), {
      ref_key: "primitiveElement",
      ref: o,
      role: "group",
      dir: e.dir,
      "aria-label": "Text alignment"
    }, {
      default: withCtx(() => [
        renderSlot(l.$slots, "default")
      ]),
      _: 3
    }, 8, ["dir"]));
  }
});
var di = defineComponent({
  __name: "DropdownMenuSeparator",
  props: {
    orientation: {},
    decorative: { type: Boolean },
    asChild: { type: Boolean }
  },
  setup(n) {
    const t = n;
    return (e, o) => (openBlock(), createBlock(Ue, {
      orientation: t.orientation,
      decorative: t.decorative
    }, null, 8, ["orientation", "decorative"]));
  }
});
var io = Symbol();
var vl = ["id", "checked", "name", "disabled"];
var ci = defineComponent({
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
  setup(n, { emit: t }) {
    const e = n, o = inject(
      Se
    ), a = K(e, "modelValue", t, {
      passive: true
    }), l = computed(() => a.value ? "checked" : "unchecked");
    function r() {
      a.value = !a.value;
    }
    function s() {
      o == null || o.hideTooltip();
    }
    return provide(io, {
      modelValue: a
    }), (i, d) => {
      var p;
      return openBlock(), createBlock(ie, {
        ref: "currentElement",
        disabled: e.disabled,
        rootProvider: unref(o),
        orientation: (p = unref(o)) == null ? void 0 : p.orientation,
        onHandleClick: r,
        onEscapeKeydown: s,
        role: "menuitemcheckbox",
        "data-state": l.value,
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
          }), null, 16, vl),
          renderSlot(i.$slots, "default")
        ]),
        _: 3
      }, 8, ["disabled", "rootProvider", "orientation", "data-state", "aria-checked"]);
    };
  }
});
var pi = defineComponent({
  __name: "DropdownMenuItemIndicator",
  setup(n) {
    const t = inject(io);
    return (e, o) => {
      var a;
      return (a = unref(t)) != null && a.modelValue.value ? (openBlock(), createBlock(unref(ne), {
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
var fi = defineComponent({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    for: {}
  },
  setup(n) {
    const t = n;
    return (e, o) => (openBlock(), createBlock(unref(lt), {
      for: t.for
    }, {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["for"]));
  }
});
var bn = "RadioGroup";
var mi = defineComponent({
  __name: "DropdownMenuRadioGroup",
  props: {
    asChild: { type: Boolean },
    value: {},
    defaultValue: {},
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(n, { emit: t }) {
    const e = n, { primitiveElement: o, currentElement: a } = B(), l = K(e, "modelValue", t, {
      passive: true
    });
    return provide(bn, {
      modelValue: l,
      changeModelValue: (r) => {
        l.value = r;
      },
      parentElement: a
    }), (r, s) => (openBlock(), createBlock(unref(D), {
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
var vi = defineComponent({
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
  setup(n) {
    const t = n, e = inject(
      Se
    ), o = inject(
      bn
    ), a = computed(() => {
      var i;
      return ((i = o == null ? void 0 : o.modelValue) == null ? void 0 : i.value) === t.value ? "on" : "off";
    });
    function l() {
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
    return provide(io, {
      modelValue: s
    }), (i, d) => {
      var p;
      return openBlock(), createBlock(ie, {
        disabled: t.disabled,
        rootProvider: unref(e),
        orientation: (p = unref(e)) == null ? void 0 : p.orientation,
        "data-radix-vue-radio-value": t.value,
        onHandleClick: l,
        onEscapeKeydown: r,
        onClick: l,
        role: "menuitemradio",
        "data-state": a.value
      }, {
        default: withCtx(() => [
          renderSlot(i.$slots, "default")
        ]),
        _: 3
      }, 8, ["disabled", "rootProvider", "orientation", "data-radix-vue-radio-value", "data-state"]);
    };
  }
});
var hi = defineComponent({
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
  setup(n) {
    const t = n, e = inject(
      Se
    ), o = inject(
      tt
    ), { primitiveElement: a, currentElement: l } = B(), { createCollection: r } = re();
    r(l), watchEffect(() => {
      l.value && o != null && o.modelValue.value && s();
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
        l.value.querySelectorAll(
          "[data-radix-vue-collection-item]:not([data-disabled])"
        )
      );
      return o.itemsArray = i, i;
    }
    return ke(l, (i) => {
      i.target.closest('[role="menuitem"]') || o == null || o.hideTooltip();
    }), (i, d) => {
      var p;
      return (p = unref(o)) != null && p.modelValue.value ? (openBlock(), createBlock(unref(ye), normalizeProps(mergeProps({ key: 0 }, t)), {
        default: withCtx(() => {
          var c;
          return [
            createVNode(unref(D), {
              ref_key: "primitiveElement",
              ref: a,
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
var _i = defineComponent({
  __name: "DropdownMenuSubTrigger",
  setup(n) {
    const t = inject(
      Se
    ), e = inject(
      tt
    ), { primitiveElement: o, currentElement: a } = B();
    onMounted(() => {
      e.triggerElement.value = a.value;
    });
    async function l() {
      var c;
      e == null || e.showTooltip(), await nextTick();
      const p = (c = e == null ? void 0 : e.itemsArray) == null ? void 0 : c[0];
      t.selectedElement.value = p, p == null || p.focus();
    }
    function r() {
      e != null && e.modelValue.value || l();
    }
    async function s(p) {
      p.key === "ArrowRight" && l();
    }
    const i = computed(() => e != null && e.modelValue.value ? "open" : "closed");
    function d() {
      return e == null ? void 0 : e.showTooltip();
    }
    return (p, c) => (openBlock(), createBlock(unref(_e), { asChild: "" }, {
      default: withCtx(() => {
        var m, f, v, h2, y;
        return [
          createVNode(ie, {
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
var Ae = Symbol();
var yi = defineComponent({
  __name: "ContextMenuRoot",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modelValue: { type: Boolean },
    orientation: { default: "vertical" },
    dir: {}
  },
  emits: ["update:modelValue"],
  setup(n, { emit: t }) {
    const e = n, o = K(e, "modelValue", t, {
      passive: true
    }), a = ref(), l = ref(), r = ref(0), s = ref(0);
    return provide(Ae, {
      selectedElement: a,
      changeSelected: (i) => {
        a.value = i, a.value.focus();
      },
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
      clientX: r,
      clientY: s
    }), (i, d) => (openBlock(), createBlock(unref(me), null, {
      default: withCtx(() => [
        renderSlot(i.$slots, "default")
      ]),
      _: 3
    }));
  }
});
var gi = defineComponent({
  __name: "ContextMenuTrigger",
  setup(n) {
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
    function o(a) {
      t != null && t.modelValue.value ? t == null || t.hideTooltip() : (t.clientX.value = a.clientX, t.clientY.value = a.clientY, t == null || t.showTooltip());
    }
    return onMounted(() => {
      t.triggerElement.value = e;
    }), (a, l) => (openBlock(), createBlock(unref(_e), {
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
              renderSlot(a.$slots, "default")
            ]),
            _: 3
          }, 8, ["aria-expanded", "data-state", "onContextmenu"])
        ];
      }),
      _: 3
    }));
  }
});
var hl = {};
function _l(n, t) {
  return openBlock(), createBlock(Teleport, { to: "body" }, [
    renderSlot(n.$slots, "default")
  ]);
}
var bi = Ct(hl, [["render", _l]]);
var wi = defineComponent({
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
  setup(n) {
    const t = n, e = inject(Ae), { primitiveElement: o, currentElement: a } = B(), { createCollection: l, getItems: r } = re();
    l(a), watchEffect(() => {
      a.value && (e != null && e.modelValue.value ? (e.itemsArray = r(a.value), window.addEventListener("keydown", d), window.addEventListener("scroll", i)) : s());
    }), watchEffect(() => {
      e != null && e.selectedElement.value && s();
    });
    function s() {
      window.removeEventListener("keydown", d), window.removeEventListener("scroll", i);
    }
    ke(a, (p) => {
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
      return (m = unref(e)) != null && m.modelValue.value ? (openBlock(), createBlock(unref(ye), mergeProps({ key: 0 }, t, { "prioritize-position": "" }), {
        default: withCtx(() => {
          var f;
          return [
            createVNode(unref(D), {
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
var Ei = defineComponent({
  __name: "ContextMenuArrow",
  setup(n) {
    return (t, e) => (openBlock(), createBlock(unref(Ie)));
  }
});
var ot = Symbol();
var Ci = defineComponent({
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
  setup(n, { emit: t }) {
    const e = n, o = K(e, "modelValue", t, {
      passive: true
    }), a = ref(), l = inject(ot);
    return provide(ot, {
      modelValue: o,
      showTooltip: () => {
        o.value = true;
      },
      hideTooltip: () => {
        o.value = false;
      },
      triggerElement: a,
      itemsArray: [],
      orientation: e.orientation,
      triggerId: ce(),
      contentId: ce(),
      parentContext: l
    }), (r, s) => (openBlock(), createBlock(unref(me), null, {
      default: withCtx(() => [
        renderSlot(r.$slots, "default")
      ]),
      _: 3
    }));
  }
});
var xi = defineComponent({
  __name: "ContextMenuItem",
  props: {
    asChild: { type: Boolean },
    value: {},
    disabled: { type: Boolean },
    textValue: {}
  },
  setup(n) {
    const t = n, e = inject(
      Ae
    ), o = inject(
      ot
    );
    function a() {
      e != null && e.selectedElement.value && e.hideTooltip();
    }
    function l() {
      e == null || e.hideTooltip();
    }
    return (r, s) => {
      var i;
      return openBlock(), createBlock(ie, {
        disabled: t.disabled,
        rootProvider: unref(e),
        subProvider: unref(o),
        orientation: (i = unref(e)) == null ? void 0 : i.orientation,
        onHandleClick: a,
        onEscapeKeydown: l
      }, {
        default: withCtx(() => [
          renderSlot(r.$slots, "default")
        ]),
        _: 3
      }, 8, ["disabled", "rootProvider", "subProvider", "orientation"]);
    };
  }
});
var yl = Symbol();
var $i = defineComponent({
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
  setup(n, { emit: t }) {
    const e = n, { primitiveElement: o, currentElement: a } = B();
    return provide(yl, {
      type: e.type,
      modelValue: toRef(() => e.modelValue),
      changeModelValue: (l) => {
        if (e.type === "single")
          t("update:modelValue", l);
        else {
          let r = e.modelValue;
          if (r.includes(l)) {
            let s = r.findIndex((i) => i === l);
            r.splice(s, 1);
          } else
            r.push(l);
          t("update:modelValue", r);
        }
      },
      parentElement: a
    }), (l, r) => (openBlock(), createBlock(unref(D), {
      ref_key: "primitiveElement",
      ref: o,
      role: "group",
      dir: e.dir,
      "aria-label": "Text alignment"
    }, {
      default: withCtx(() => [
        renderSlot(l.$slots, "default")
      ]),
      _: 3
    }, 8, ["dir"]));
  }
});
var ki = defineComponent({
  __name: "ContextMenuSeparator",
  props: {
    orientation: {},
    decorative: { type: Boolean },
    asChild: { type: Boolean }
  },
  setup(n) {
    const t = n;
    return (e, o) => (openBlock(), createBlock(Ue, {
      orientation: t.orientation,
      decorative: t.decorative
    }, null, 8, ["orientation", "decorative"]));
  }
});
var so = Symbol();
var gl = ["id", "checked", "name", "disabled"];
var Si = defineComponent({
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
  setup(n, { emit: t }) {
    const e = n, o = inject(
      Ae
    ), a = K(e, "modelValue", t, {
      passive: true
    }), l = computed(() => a.value ? "checked" : "unchecked");
    function r() {
      a.value = !a.value;
    }
    function s() {
      o == null || o.hideTooltip();
    }
    return provide(so, {
      modelValue: a
    }), (i, d) => {
      var p;
      return openBlock(), createBlock(ie, {
        ref: "currentElement",
        disabled: e.disabled,
        rootProvider: unref(o),
        orientation: (p = unref(o)) == null ? void 0 : p.orientation,
        onHandleClick: r,
        onEscapeKeydown: s,
        role: "menuitemcheckbox",
        "data-state": l.value,
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
          }), null, 16, gl),
          renderSlot(i.$slots, "default")
        ]),
        _: 3
      }, 8, ["disabled", "rootProvider", "orientation", "data-state", "aria-checked"]);
    };
  }
});
var Ai = defineComponent({
  __name: "ContextMenuItemIndicator",
  setup(n) {
    const t = inject(so);
    return (e, o) => {
      var a;
      return (a = unref(t)) != null && a.modelValue.value ? (openBlock(), createBlock(unref(ne), {
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
var Ti = defineComponent({
  __name: "ContextMenuLabel",
  props: {
    asChild: { type: Boolean },
    for: {}
  },
  setup(n) {
    const t = n;
    return (e, o) => (openBlock(), createBlock(unref(lt), {
      for: t.for
    }, {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["for"]));
  }
});
var wn = "RadioGroup";
var Pi = defineComponent({
  __name: "ContextMenuRadioGroup",
  props: {
    asChild: { type: Boolean },
    value: {},
    defaultValue: {},
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(n, { emit: t }) {
    const e = n, { primitiveElement: o, currentElement: a } = B(), l = K(e, "modelValue", t, {
      passive: true
    });
    return provide(wn, {
      modelValue: l,
      changeModelValue: (r) => {
        l.value = r;
      },
      parentElement: a
    }), (r, s) => (openBlock(), createBlock(unref(D), {
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
var Oi = defineComponent({
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
  setup(n) {
    const t = n, e = inject(
      Ae
    ), o = inject(
      wn
    ), a = computed(() => {
      var i;
      return ((i = o == null ? void 0 : o.modelValue) == null ? void 0 : i.value) === t.value ? "on" : "off";
    });
    function l() {
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
    return provide(so, {
      modelValue: s
    }), (i, d) => {
      var p;
      return openBlock(), createBlock(ie, {
        disabled: t.disabled,
        rootProvider: unref(e),
        orientation: (p = unref(e)) == null ? void 0 : p.orientation,
        "data-radix-vue-radio-value": t.value,
        onHandleClick: l,
        onEscapeKeydown: r,
        onClick: l,
        role: "menuitemradio",
        "data-state": a.value
      }, {
        default: withCtx(() => [
          renderSlot(i.$slots, "default")
        ]),
        _: 3
      }, 8, ["disabled", "rootProvider", "orientation", "data-radix-vue-radio-value", "data-state"]);
    };
  }
});
var Bi = defineComponent({
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
  setup(n) {
    const t = n, e = inject(
      Ae
    ), o = inject(
      ot
    ), { primitiveElement: a, currentElement: l } = B(), { createCollection: r } = re();
    r(l), watchEffect(() => {
      l.value && o != null && o.modelValue.value && s();
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
        l.value.querySelectorAll(
          "[data-radix-vue-collection-item]:not([data-disabled])"
        )
      );
      return o.itemsArray = i, i;
    }
    return ke(l, (i) => {
      i.target.closest('[role="menuitem"]') || o == null || o.hideTooltip();
    }), (i, d) => {
      var p;
      return (p = unref(o)) != null && p.modelValue.value ? (openBlock(), createBlock(unref(ye), normalizeProps(mergeProps({ key: 0 }, t)), {
        default: withCtx(() => {
          var c;
          return [
            createVNode(unref(D), {
              ref_key: "primitiveElement",
              ref: a,
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
var Mi = defineComponent({
  __name: "ContextMenuSubTrigger",
  setup(n) {
    const t = inject(
      Ae
    ), e = inject(
      ot
    ), { primitiveElement: o, currentElement: a } = B();
    onMounted(() => {
      e.triggerElement.value = a.value;
    });
    async function l() {
      var c;
      e == null || e.showTooltip(), await nextTick();
      const p = (c = e == null ? void 0 : e.itemsArray) == null ? void 0 : c[0];
      t.selectedElement.value = p, p == null || p.focus();
    }
    function r() {
      e != null && e.modelValue.value || l();
    }
    async function s(p) {
      p.key === "ArrowRight" && l();
    }
    const i = computed(() => e != null && e.modelValue.value ? "open" : "closed");
    function d() {
      return e == null ? void 0 : e.showTooltip();
    }
    return (p, c) => (openBlock(), createBlock(unref(_e), { asChild: "" }, {
      default: withCtx(() => {
        var m, f, v, h2, y;
        return [
          createVNode(ie, {
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
var st = Symbol();
var Di = defineComponent({
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
  setup(n, { emit: t }) {
    const e = n, o = K(e, "modelValue", t, {
      defaultValue: e.defaultValue
    }), a = ref(), l = ref(), r = ref(false);
    provide(st, {
      selectedElement: a,
      changeSelected: (i) => {
        a.value = i, a.value.focus();
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
      triggerElement: l,
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
    return (i, d) => (openBlock(), createBlock(unref(me), null, {
      default: withCtx(() => [
        renderSlot(i.$slots, "default")
      ]),
      _: 3
    }));
  }
});
var Ri = defineComponent({
  __name: "SelectTrigger",
  setup(n) {
    const t = inject(st), { primitiveElement: e, currentElement: o } = B();
    onMounted(() => {
      t.triggerElement.value = o.value;
    });
    async function a() {
      var r, s;
      if (t == null || t.showTooltip(), await nextTick(), t != null && t.modelValue.value && !(t != null && t.multiple)) {
        const i = (r = t.itemsArray) == null ? void 0 : r.find((d) => d.getAttribute("data-radix-vue-radio-value") === (t == null ? void 0 : t.modelValue.value));
        t == null || t.changeSelected(i);
      } else
        t == null || t.changeSelected((s = t.itemsArray) == null ? void 0 : s[0]);
    }
    function l(r) {
      (r.key === "ArrowDown" || r.key === "ArrowUp" || r.key === "Enter" || r.keyCode === 32) && a();
    }
    return (r, s) => (openBlock(), createBlock(unref(_e), { asChild: "" }, {
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
            onClick: a,
            onKeydown: withModifiers(l, ["prevent"])
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
var Ii = defineComponent({
  __name: "SelectPortal",
  props: {
    container: {}
  },
  setup(n) {
    const t = n;
    return (e, o) => (openBlock(), createBlock(qe, normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Ni = defineComponent({
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
  setup(n) {
    const t = n, e = inject(st), { primitiveElement: o, currentElement: a } = B(), { createCollection: l, getItems: r } = re();
    l(a), watchEffect(() => {
      a.value && (e != null && e.isOpen.value ? (document.querySelector("body").style.pointerEvents = "none", e.itemsArray = r(a.value)) : e != null && e.triggerElement.value && s());
    });
    function s() {
      document.querySelector("body").style.pointerEvents = "", setTimeout(() => {
        var i;
        (i = e == null ? void 0 : e.triggerElement.value) == null || i.focus();
      }, 0);
    }
    return ke(a, (i) => {
      i.target.closest('[role="menuitem"]') || e == null || e.hideTooltip();
    }), (i, d) => {
      var p, c;
      return (p = unref(e)) != null && p.isOpen.value ? (openBlock(), createBlock(unref(ye), mergeProps({ key: 0 }, t, {
        "prioritize-position": "",
        role: "listbox",
        "data-state": (c = unref(e)) != null && c.isOpen.value ? "open" : "closed",
        "data-side": t.side,
        "data-align": t.align
      }), {
        default: withCtx(() => [
          createVNode(unref(D), {
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
var Li = defineComponent({
  __name: "SelectArrow",
  setup(n) {
    return (t, e) => (openBlock(), createBlock(unref(Ie)));
  }
});
var Ki = defineComponent({
  __name: "SelectSeparator",
  props: {
    orientation: {},
    decorative: { type: Boolean },
    asChild: { type: Boolean }
  },
  setup(n) {
    const t = n;
    return (e, o) => (openBlock(), createBlock(Ue, {
      orientation: t.orientation,
      decorative: t.decorative
    }, null, 8, ["orientation", "decorative"]));
  }
});
var En = Symbol();
var Hi = defineComponent({
  __name: "SelectItemIndicator",
  setup(n) {
    const t = inject(st), e = inject(En), o = computed(() => {
      var a;
      return t != null && t.multiple ? (a = t == null ? void 0 : t.modelValue.value) == null ? void 0 : a.includes(
        e.value
      ) : (t == null ? void 0 : t.modelValue.value) === (e == null ? void 0 : e.value);
    });
    return (a, l) => o.value ? (openBlock(), createBlock(unref(ne), {
      key: 0,
      "aria-hidden": "true",
      style: { "pointer-events": "none" }
    }, {
      default: withCtx(() => [
        renderSlot(a.$slots, "default")
      ]),
      _: 3
    })) : createCommentVNode("", true);
  }
});
var zi = defineComponent({
  __name: "SelectLabel",
  props: {
    asChild: { type: Boolean },
    for: {}
  },
  setup(n) {
    const t = n;
    return (e, o) => (openBlock(), createBlock(unref(lt), {
      for: t.for
    }, {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["for"]));
  }
});
var Yi = defineComponent({
  __name: "SelectGroup",
  props: {
    asChild: { type: Boolean }
  },
  setup(n) {
    const t = n;
    return (e, o) => (openBlock(), createBlock(unref(D), {
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
var Wi = defineComponent({
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
  setup(n) {
    const t = n, e = inject(st);
    function o() {
      return e == null || e.changeModelValue(t.value), e == null ? void 0 : e.hideTooltip();
    }
    return provide(En, {
      value: t.value
    }), (a, l) => {
      var r, s, i;
      return openBlock(), createBlock(ie, {
        disabled: t.disabled,
        rootProvider: unref(e),
        orientation: (r = unref(e)) == null ? void 0 : r.orientation,
        "data-radix-vue-radio-value": t.value,
        onHandleClick: o,
        onEscapeKeydown: l[0] || (l[0] = (d) => {
          var p;
          return (p = unref(e)) == null ? void 0 : p.hideTooltip();
        }),
        role: "option",
        "data-state": ((i = (s = unref(e)) == null ? void 0 : s.modelValue) == null ? void 0 : i.value) === t.value ? "checked" : "unchecked"
      }, {
        default: withCtx(() => [
          renderSlot(a.$slots, "default")
        ]),
        _: 3
      }, 8, ["disabled", "rootProvider", "orientation", "data-radix-vue-radio-value", "data-state"]);
    };
  }
});
var xe = Symbol();
var bl = {
  inheritAttrs: false
};
var Ui = defineComponent({
  ...bl,
  __name: "MenubarRoot",
  props: {
    modelValue: {},
    defaultValue: {},
    orientation: { default: "horizontal" },
    dir: {}
  },
  emits: ["update:modelValue", "update:open"],
  setup(n, { emit: t }) {
    const e = n, o = K(e, "modelValue", t, {
      passive: true,
      defaultValue: e.defaultValue
    }), a = ref(), l = ref(), r = [], s = ref(), i = Xt();
    return provide(xe, {
      selectedElement: a,
      changeSelected: (d) => {
        var p;
        a.value = d, (p = a.value) == null || p.focus();
      },
      modelValue: o,
      changeValue: (d) => {
        o.value = d;
      },
      triggerElement: l,
      triggerItemsArray: r,
      itemsArray: [],
      orientation: e.orientation
    }), watch(
      i,
      () => {
        i.value === s.value && (l.value ? l.value.focus() : r.length && r[0].focus());
      },
      { immediate: true }
    ), (d, p) => (openBlock(), createBlock(unref(me), null, {
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
var wt = Symbol();
var qi = defineComponent({
  __name: "MenubarMenu",
  props: {
    value: {}
  },
  setup(n) {
    const e = n.value ?? ce(), o = inject(xe), a = ref(), l = computed(() => (o == null ? void 0 : o.modelValue.value) === e), r = inject(wt);
    return provide(wt, {
      value: e,
      isOpen: l,
      triggerElement: a,
      itemsArray: [],
      triggerId: e,
      contentId: ce(),
      parentContext: r,
      orientation: "vertical"
    }), (s, i) => (openBlock(), createBlock(unref(me), null, {
      default: withCtx(() => [
        renderSlot(s.$slots, "default")
      ]),
      _: 3
    }));
  }
});
var wl = {
  inheritAttrs: false
};
var Gi = defineComponent({
  ...wl,
  __name: "MenubarTrigger",
  props: {
    asChild: { type: Boolean },
    disabled: { type: Boolean },
    textValue: {}
  },
  setup(n) {
    const t = n, e = inject(xe), o = inject(
      wt
    ), { primitiveElement: a, currentElement: l } = B(), r = Xt();
    onMounted(() => {
      o.triggerElement.value = l.value, e.triggerItemsArray.push(l.value);
    });
    async function s() {
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
        return s();
      const h2 = oe(
        v,
        l.value,
        l.value.parentElement,
        {
          arrowKeyOptions: "horizontal"
        }
      );
      h2 && (e == null || e.changeSelected(h2), h2.focus(), e != null && e.modelValue.value && (e == null || e.changeValue(h2.id)));
    }
    function d() {
      if (!t.disabled && (e != null && e.modelValue.value)) {
        e == null || e.changeSelected(l.value), e == null || e.changeValue(o == null ? void 0 : o.value);
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
    const m = computed(() => o != null && o.isOpen.value ? "open" : "closed"), f = computed(() => r.value === l.value || (e == null ? void 0 : e.triggerElement.value) === l.value && (e == null ? void 0 : e.selectedElement.value));
    return watchEffect(() => {
      (e == null ? void 0 : e.selectedElement.value) === l.value && (e.triggerElement.value = l.value);
    }), watch(
      r,
      () => {
        r.value === l.value ? (e.selectedElement.value = l.value, e.triggerElement.value = l.value) : !(o != null && o.isOpen.value) && e.selectedElement.value === l.value && (e.selectedElement.value = void 0);
      },
      { immediate: true }
    ), (v, h2) => (openBlock(), createBlock(unref(_e), { asChild: "" }, {
      default: withCtx(() => {
        var y, C, $, S, P;
        return [
          createVNode(unref(X), mergeProps({
            role: "menuitem",
            ref_key: "primitiveElement",
            ref: a,
            id: (y = unref(o)) == null ? void 0 : y.triggerId,
            "aria-expanded": (C = unref(o)) == null ? void 0 : C.isOpen.value,
            "aria-controls": ($ = unref(o)) == null ? void 0 : $.contentId,
            "data-state": m.value,
            "data-orientation": (S = unref(e)) == null ? void 0 : S.orientation,
            "aria-haspopup": "menu",
            onKeydown: withModifiers(i, ["prevent"]),
            "data-radix-vue-collection-item": "",
            onMouseenter: d,
            onClick: c,
            "data-highlighted": f.value ? "" : null,
            "aria-disabled": t.disabled ? true : void 0,
            "data-disabled": t.disabled ? "" : void 0,
            tabindex: ((P = unref(e)) == null ? void 0 : P.triggerElement.value) === unref(l) ? "0" : "-1"
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
var El = {};
function Cl(n, t) {
  return openBlock(), createBlock(Teleport, { to: "body" }, [
    renderSlot(n.$slots, "default")
  ]);
}
var Xi = Ct(El, [["render", Cl]]);
var Fi = defineComponent({
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
  setup(n) {
    const t = n, e = inject(xe), o = inject(
      wt
    ), { primitiveElement: a, currentElement: l } = B(), { createCollection: r } = re();
    r(l), watchEffect(() => {
      l.value && o != null && o.isOpen.value && s();
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
        l.value.querySelectorAll(
          "[data-radix-vue-collection-item]:not([data-disabled])"
        )
      );
      return o.itemsArray = d, d;
    }
    ke(l, (d) => {
      d.target.closest('[role="menuitem"]') || (e == null || e.changeValue(void 0), e.selectedElement.value = void 0);
    });
    const i = computed(() => o != null && o.isOpen ? "open" : "false");
    return (d, p) => {
      var c;
      return (c = unref(o)) != null && c.isOpen.value ? (openBlock(), createBlock(unref(ye), normalizeProps(mergeProps({ key: 0 }, t)), {
        default: withCtx(() => {
          var m, f;
          return [
            createVNode(unref(D), {
              ref_key: "primitiveElement",
              ref: a,
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
var Ji = defineComponent({
  __name: "MenubarArrow",
  setup(n) {
    return (t, e) => (openBlock(), createBlock(unref(Ie)));
  }
});
var nt = Symbol();
var Zi = defineComponent({
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
  setup(n, { emit: t }) {
    const e = n, o = K(e, "modelValue", t, {
      passive: true
    }), a = ref(), l = inject(nt);
    return provide(nt, {
      modelValue: o,
      showTooltip: () => {
        o.value = true;
      },
      hideTooltip: () => {
        o.value = false;
      },
      triggerElement: a,
      itemsArray: [],
      orientation: e.orientation,
      triggerId: ce(),
      contentId: ce(),
      parentContext: l
    }), (r, s) => (openBlock(), createBlock(unref(me), null, {
      default: withCtx(() => [
        renderSlot(r.$slots, "default")
      ]),
      _: 3
    }));
  }
});
var Qi = defineComponent({
  __name: "MenubarItem",
  props: {
    asChild: { type: Boolean },
    value: {},
    disabled: { type: Boolean },
    textValue: {}
  },
  setup(n) {
    const t = n, e = inject(xe), o = inject(
      nt
    );
    function a() {
      e.changeValue(void 0), e.changeSelected(
        e.triggerElement.value
      );
    }
    function l(s) {
      const i = oe(
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
        disabled: t.disabled,
        rootProvider: unref(e),
        subProvider: unref(o),
        orientation: (d = unref(e)) == null ? void 0 : d.orientation,
        onHandleClick: a,
        onHorizontalKeydown: l,
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
var xl = Symbol();
var Vi = defineComponent({
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
  setup(n, { emit: t }) {
    const e = n, { primitiveElement: o, currentElement: a } = B();
    return provide(xl, {
      type: e.type,
      modelValue: toRef(() => e.modelValue),
      changeModelValue: (l) => {
        if (e.type === "single")
          t("update:modelValue", l);
        else {
          let r = e.modelValue;
          if (r.includes(l)) {
            let s = r.findIndex((i) => i === l);
            r.splice(s, 1);
          } else
            r.push(l);
          t("update:modelValue", r);
        }
      },
      parentElement: a
    }), (l, r) => (openBlock(), createBlock(unref(D), {
      ref_key: "primitiveElement",
      ref: o,
      role: "group",
      dir: e.dir,
      "aria-label": "Text alignment"
    }, {
      default: withCtx(() => [
        renderSlot(l.$slots, "default")
      ]),
      _: 3
    }, 8, ["dir"]));
  }
});
var ji = defineComponent({
  __name: "MenubarSeparator",
  props: {
    orientation: {},
    decorative: { type: Boolean },
    asChild: { type: Boolean }
  },
  setup(n) {
    const t = n;
    return (e, o) => (openBlock(), createBlock(Ue, {
      orientation: t.orientation,
      decorative: t.decorative
    }, null, 8, ["orientation", "decorative"]));
  }
});
var uo = Symbol();
var $l = ["id", "checked", "name", "disabled"];
var es = defineComponent({
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
  setup(n, { emit: t }) {
    const e = n, o = inject(xe), a = K(e, "modelValue", t, {
      passive: true
    }), l = computed(() => a.value ? "checked" : "unchecked");
    function r() {
      a.value = !a.value;
    }
    provide(uo, {
      modelValue: a
    });
    function s(d) {
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
      return openBlock(), createBlock(ie, {
        ref: "currentElement",
        disabled: e.disabled,
        rootProvider: unref(o),
        orientation: (c = unref(o)) == null ? void 0 : c.orientation,
        onHandleClick: r,
        onHorizontalKeydown: s,
        onEscapeKeydown: i,
        role: "menuitemcheckbox",
        "data-state": l.value,
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
          }), null, 16, $l),
          renderSlot(d.$slots, "default")
        ]),
        _: 3
      }, 8, ["disabled", "rootProvider", "orientation", "data-state", "aria-checked"]);
    };
  }
});
var ts = defineComponent({
  __name: "MenubarItemIndicator",
  setup(n) {
    const t = inject(uo);
    return (e, o) => {
      var a;
      return (a = unref(t)) != null && a.modelValue.value ? (openBlock(), createBlock(unref(ne), {
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
var os = defineComponent({
  __name: "MenubarLabel",
  props: {
    asChild: { type: Boolean },
    for: {}
  },
  setup(n) {
    const t = n;
    return (e, o) => (openBlock(), createBlock(unref(lt), {
      for: t.for
    }, {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["for"]));
  }
});
var Cn = "RadioGroup";
var ns = defineComponent({
  __name: "MenubarRadioGroup",
  props: {
    asChild: { type: Boolean },
    value: {},
    defaultValue: {},
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(n, { emit: t }) {
    const e = n, { primitiveElement: o, currentElement: a } = B(), l = K(e, "modelValue", t, {
      passive: true
    });
    return provide(Cn, {
      modelValue: l,
      changeModelValue: (r) => {
        l.value = r;
      },
      parentElement: a
    }), (r, s) => (openBlock(), createBlock(unref(D), {
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
var as = defineComponent({
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
  setup(n) {
    const t = n, e = inject(xe), o = inject(
      Cn
    ), a = computed(() => {
      var d;
      return ((d = o == null ? void 0 : o.modelValue) == null ? void 0 : d.value) === t.value ? "on" : "off";
    });
    function l() {
      if (e != null && e.selectedElement.value)
        return o == null ? void 0 : o.changeModelValue(t.value);
    }
    const r = computed(
      () => {
        var d;
        return ((d = o == null ? void 0 : o.modelValue) == null ? void 0 : d.value) === t.value;
      }
    );
    provide(uo, {
      modelValue: r
    });
    function s(d) {
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
    function i() {
      e.changeValue(void 0), e.changeSelected(
        e.triggerElement.value
      );
    }
    return (d, p) => {
      var c;
      return openBlock(), createBlock(ie, {
        disabled: t.disabled,
        rootProvider: unref(e),
        orientation: (c = unref(e)) == null ? void 0 : c.orientation,
        "data-radix-vue-radio-value": t.value,
        onHandleClick: l,
        onHorizontalKeydown: s,
        onEscapeKeydown: i,
        role: "menuitemradio",
        "data-state": a.value
      }, {
        default: withCtx(() => [
          renderSlot(d.$slots, "default")
        ]),
        _: 3
      }, 8, ["disabled", "rootProvider", "orientation", "data-radix-vue-radio-value", "data-state"]);
    };
  }
});
var ls = defineComponent({
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
  setup(n) {
    const t = n, e = inject(xe), o = inject(nt), { primitiveElement: a, currentElement: l } = B(), { createCollection: r } = re();
    r(l), watchEffect(() => {
      l.value && o != null && o.modelValue.value && s();
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
        l.value.querySelectorAll(
          "[data-radix-vue-collection-item]:not([data-disabled])"
        )
      );
      return o.itemsArray = i, i;
    }
    return ke(l, (i) => {
      i.target.closest('[role="menuitem"]') || o == null || o.hideTooltip();
    }), (i, d) => {
      var p;
      return (p = unref(o)) != null && p.modelValue.value ? (openBlock(), createBlock(unref(ye), normalizeProps(mergeProps({ key: 0 }, t)), {
        default: withCtx(() => {
          var c;
          return [
            createVNode(unref(D), {
              ref_key: "primitiveElement",
              ref: a,
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
var rs = defineComponent({
  __name: "MenubarSubTrigger",
  setup(n) {
    const t = inject(xe), e = inject(nt), { primitiveElement: o, currentElement: a } = B();
    onMounted(() => {
      e.triggerElement.value = a.value;
    });
    async function l() {
      var m;
      e == null || e.showTooltip(), await nextTick();
      const c = (m = e == null ? void 0 : e.itemsArray) == null ? void 0 : m[0];
      t.selectedElement.value = c, c == null || c.focus();
    }
    function r() {
      e != null && e.modelValue.value || l();
    }
    async function s(c) {
      if (c.key === "ArrowRight")
        l();
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
    return (c, m) => (openBlock(), createBlock(unref(_e), { asChild: "" }, {
      default: withCtx(() => {
        var f, v, h2, y, C;
        return [
          createVNode(ie, {
            ref_key: "primitiveElement",
            ref: o,
            id: (f = unref(e)) == null ? void 0 : f.triggerId,
            rootProvider: unref(t),
            subProvider: (v = unref(e)) == null ? void 0 : v.parentContext,
            "aria-expanded": (h2 = unref(e)) == null ? void 0 : h2.modelValue.value,
            "aria-controls": (y = unref(e)) == null ? void 0 : y.contentId,
            "data-state": i.value,
            "data-orientation": (C = unref(t)) == null ? void 0 : C.orientation,
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
var Te = Symbol();
var is = defineComponent({
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
  setup(n, { emit: t }) {
    const e = n, o = K(e, "modelValue", t, {
      passive: true,
      defaultValue: e.defaultValue ?? ""
    }), a = ref(""), { primitiveElement: l, currentElement: r } = B(), { createCollection: s } = re();
    s();
    const i = () => {
      o.value = "";
    };
    ke(r, () => {
      i();
    }), Ho(r, () => {
      i();
    });
    const d = ref(), p = ref(), c = ref(/* @__PURE__ */ new Map()), m = Gt((f) => {
      a.value = o.value, o.value = f;
    }, e.delayDuration);
    return provide(Te, {
      isRootMenu: true,
      modelValue: o,
      previousValue: a,
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
        a.value = o.value, o.value = f;
      }
    }), (f, v) => (openBlock(), createBlock(unref(wa), {
      ref_key: "primitiveElement",
      ref: l,
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
function co(n) {
  return n ? "open" : "closed";
}
function xn(n, t) {
  return `${n}-trigger-${t}`;
}
function $n(n, t) {
  return `${n}-content-${t}`;
}
function zt(n) {
  const t = [], e = document.createTreeWalker(n, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (o) => {
      const a = o.tagName === "INPUT" && o.type === "hidden";
      return o.disabled || o.hidden || a ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; e.nextNode(); )
    t.push(e.currentNode);
  return t;
}
function kn(n) {
  const t = document.activeElement;
  return n.some((e) => e === t ? true : (e.focus(), document.activeElement !== t));
}
function kl(n) {
  return n.forEach((t) => {
    t.dataset.tabindex = t.getAttribute("tabindex") || "", t.setAttribute("tabindex", "-1");
  }), () => {
    n.forEach((t) => {
      const e = t.dataset.tabindex;
      t.setAttribute("tabindex", e);
    });
  };
}
var po = Symbol();
var ss = defineComponent({
  __name: "NavigationMenuItem",
  props: {
    value: {}
  },
  setup(n) {
    const t = n, { getItems: e } = re(), o = inject(Te), a = t.value || ce(), l = ref(), r = ref(), s = ref();
    let i = () => ({});
    const d = ref(false), p = async (v = "start") => {
      var y, C, $;
      const h2 = ($ = (C = (y = r.value) == null ? void 0 : y.children) == null ? void 0 : C[0]) == null ? void 0 : $.el.parentElement;
      if (h2) {
        i();
        const S = zt(J(h2));
        S.length && kn(v === "start" ? S : S.reverse());
      }
    };
    provide(po, {
      value: a,
      triggerRef: l,
      contentRef: r,
      focusProxyRef: s,
      wasEscapeCloseRef: d,
      onEntryKeyDown: p,
      onFocusProxyEnter: p,
      onContentFocusOutside: () => {
        var h2, y, C;
        const v = (C = (y = (h2 = r.value) == null ? void 0 : h2.children) == null ? void 0 : y[0]) == null ? void 0 : C.el.parentElement;
        if (v) {
          const $ = zt(J(v));
          $.length && (i = kl($));
        }
      }
    });
    const m = () => {
      var v;
      o == null || o.onItemSelect(""), (v = l.value) == null || v.focus();
    }, f = (v) => {
      var C;
      const h2 = document.activeElement;
      if ((v.key === "ArrowUp" || v.key === "ArrowDown" || v.key === "ArrowLeft" || v.key === "ArrowRight") && v.preventDefault(), v.keyCode === 32 || v.key === "Enter")
        if ((o == null ? void 0 : o.modelValue.value) === a) {
          m(), v.preventDefault();
          return;
        } else {
          v.target.click(), v.preventDefault();
          return;
        }
      if (v.key === "Escape") {
        d.value = true, (C = l.value) == null || C.focus(), o.modelValue.value = "";
        return;
      }
      const y = oe(v, h2, void 0, {
        itemsArray: e(),
        loop: false
      });
      y == null || y.focus();
    };
    return (v, h2) => (openBlock(), createBlock(unref(ba), { onKeydown: f }, {
      default: withCtx(() => [
        renderSlot(v.$slots, "default")
      ]),
      _: 3
    }));
  }
});
var Sl = ["id", "aria-labelledby", "data-motion", "onKeydown"];
var Sn = defineComponent({
  __name: "NavigationMenuContentImpl",
  props: {
    value: {},
    triggerRef: {},
    focusProxyRef: {},
    wasEscapeCloseRef: {},
    onContentFocusOutside: { type: Function }
  },
  emits: ["escape"],
  setup(n, { expose: t, emit: e }) {
    const o = n, { getItems: a } = re(), l = ref(), r = inject(Te), s = xn(r.baseId, o.value), i = $n(r.baseId, o.value), d = ref(null), p = computed(() => {
      const v = a().map((P) => P.id.split("trigger-")[1]);
      (r == null ? void 0 : r.dir) === "rtl" && v.reverse();
      const h2 = v.indexOf(r.modelValue.value), y = v.indexOf(r.previousValue.value), C = o.value === (r == null ? void 0 : r.modelValue.value), $ = y === v.indexOf(o.value);
      if (!C && !$)
        return d.value;
      const S = (() => {
        if (h2 !== y) {
          if (C && y !== -1)
            return h2 > y ? "from-end" : "from-start";
          if ($ && h2 !== -1)
            return h2 > y ? "to-start" : "to-end";
        }
        return null;
      })();
      return d.value = S, S;
    });
    Ho(l, (f) => {
      var h2, y;
      o.onContentFocusOutside();
      const v = f.target;
      (y = (h2 = r.rootNavigationMenu) == null ? void 0 : h2.value) != null && y.contains(v) && f.preventDefault();
    });
    const c = (f) => {
      var $;
      const v = f.altKey || f.ctrlKey || f.metaKey, h2 = f.key === "Tab" && !v, y = zt(f.currentTarget);
      if (h2) {
        const S = document.activeElement, P = y.findIndex(
          (T) => T === S
        ), I = f.shiftKey ? y.slice(0, P).reverse() : y.slice(P + 1, y.length);
        if (kn(I))
          f.preventDefault();
        else {
          ($ = o.focusProxyRef.value) == null || $.focus();
          return;
        }
      }
      const C = oe(
        f,
        document.activeElement,
        void 0,
        { itemsArray: y, loop: false }
      );
      C == null || C.focus(), f.preventDefault();
    }, m = (f) => {
      e("escape", f);
    };
    return t({
      ...o
    }), (f, v) => (openBlock(), createElementBlock("div", {
      ref_key: "elementRef",
      ref: l,
      id: unref(i),
      "aria-labelledby": unref(s),
      "data-motion": p.value,
      onKeydown: [
        c,
        withKeys(withModifiers(m, ["prevent"]), ["escape"])
      ]
    }, [
      renderSlot(f.$slots, "default")
    ], 40, Sl));
  }
});
var us = defineComponent({
  inheritAttrs: false,
  __name: "NavigationMenuContent",
  setup(n) {
    const t = inject(Te), e = inject(po), o = computed(() => (e == null ? void 0 : e.value) === (t == null ? void 0 : t.modelValue.value)), a = computed(() => ({
      value: e.value,
      triggerRef: e.triggerRef,
      focusProxyRef: e.focusProxyRef,
      wasEscapeCloseRef: e.wasEscapeCloseRef,
      onContentFocusOutside: e.onContentFocusOutside
      // onRootContentClose: itemContext!.onRootContentClose,
    })), l = ref();
    watch(l, () => {
      e.contentRef.value = l.value;
    });
    const r = getCurrentInstance();
    onMounted(() => {
      var d, p;
      const i = (p = (d = r == null ? void 0 : r.vnode.children) == null ? void 0 : d.default()) == null ? void 0 : p[0];
      t != null && t.viewport && i && (i.props = { ...i.props, ...a.value }, i.parentProps = r.vnode.props, e.contentRef.value = i, t.onViewportContentChange(e.value, i));
    });
    const s = () => {
      e.wasEscapeCloseRef.value = true;
    };
    return (i, d) => {
      var p;
      return (p = unref(t)) != null && p.viewport ? createCommentVNode("", true) : (openBlock(), createBlock(unref(Qe), {
        key: 0,
        present: o.value
      }, {
        default: withCtx(() => {
          var c;
          return [
            createVNode(Sn, mergeProps({
              ref_key: "elementRef",
              ref: l,
              "data-state": unref(co)(o.value),
              style: {
                pointerEvents: !o.value && ((c = unref(t)) != null && c.isRootMenu) ? "none" : void 0
              }
            }, (i.$attrs, a.value), { onEscape: s }), {
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
var ds = defineComponent({
  inheritAttrs: false,
  __name: "NavigationMenuIndicator",
  setup(n) {
    const { getItems: t } = re(), e = inject(Te), o = ref(), a = computed(() => (e == null ? void 0 : e.orientation) === "horizontal"), l = computed(() => !!(e != null && e.modelValue.value)), r = ref();
    watchEffect(() => {
      if (!(e != null && e.modelValue.value)) {
        o.value = void 0;
        return;
      }
      const i = t();
      r.value = i.find(
        (d) => d.id.includes(e == null ? void 0 : e.modelValue.value)
      ), s();
    });
    const s = () => {
      r.value && (o.value = {
        size: a.value ? r.value.offsetWidth : r.value.offsetHeight,
        offset: a.value ? r.value.offsetLeft : r.value.offsetTop
      });
    };
    return He(e.indicatorTrack, s), (i, d) => {
      var p, c;
      return (p = unref(e)) != null && p.indicatorTrack.value ? (openBlock(), createBlock(Teleport, {
        key: 0,
        to: (c = unref(e)) == null ? void 0 : c.indicatorTrack.value
      }, [
        createVNode(unref(Qe), { present: l.value }, {
          default: withCtx(() => {
            var m, f, v, h2;
            return [
              createVNode(unref(D), mergeProps({
                "aria-hidden": "",
                "data-state": l.value ? "visible" : "hidden",
                "data-orientation": unref(e).orientation,
                style: {
                  position: "absolute",
                  ...a.value ? {
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
var cs = defineComponent({
  __name: "NavigationMenuLink",
  props: {
    active: { type: Boolean }
  },
  setup(n) {
    const t = (e) => {
    };
    return (e, o) => (openBlock(), createBlock(unref(Go), {
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
var Al = defineComponent({
  __name: "VisuallyHidden",
  setup(n) {
    return (t, e) => (openBlock(), createBlock(unref(ne), {
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
var Tl = ["aria-owns"];
var ps = defineComponent({
  inheritAttrs: false,
  __name: "NavigationMenuTrigger",
  props: {
    disabled: { type: Boolean }
  },
  setup(n) {
    const t = n, e = inject(Te), o = inject(po), { primitiveElement: a, currentElement: l } = B(), r = xn(e.baseId, o.value), s = $n(e.baseId, o.value), i = ref(false), d = ref(false), p = computed(() => (o == null ? void 0 : o.value) === (e == null ? void 0 : e.modelValue.value));
    onMounted(() => {
      o.triggerRef = l;
    });
    const c = () => {
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
    }, v = () => {
      p.value ? e == null || e.onItemSelect("") : e == null || e.onItemSelect(o.value), d.value = p.value;
    }, h2 = ($) => {
      const P = { horizontal: "ArrowDown", vertical: e.dir === "rtl" ? "ArrowLeft" : "ArrowRight" }[e.orientation];
      p.value && $.key === P && (o.onEntryKeyDown(), $.preventDefault(), $.stopPropagation());
    }, y = ($) => {
      o.focusProxyRef.value = J($);
    }, C = ($) => {
      var T, U;
      const S = (
        // @ts-ignore
        ((U = (T = o.contentRef.value) == null ? void 0 : T.children) == null ? void 0 : U[0].el).parentElement
      ), P = $.relatedTarget, R = P === l.value, I = S == null ? void 0 : S.contains(P);
      (R || !I) && o.onFocusProxyEnter(R ? "start" : "end");
    };
    return ($, S) => {
      var P;
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(unref(X), mergeProps({
          ref_key: "primitiveElement",
          ref: a,
          id: unref(r),
          disabled: $.disabled,
          "data-disabled": $.disabled ? "" : void 0,
          "data-state": unref(co)(p.value),
          "aria-expanded": p.value,
          "aria-controls": unref(s),
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
          createVNode(unref(Al), {
            "aria-hidden": "",
            tabIndex: 0,
            ref: y,
            onFocus: C
          }),
          (P = unref(e)) != null && P.viewport ? (openBlock(), createElementBlock("span", {
            key: 0,
            "aria-owns": unref(s)
          }, null, 8, Tl)) : createCommentVNode("", true)
        ], 64)) : createCommentVNode("", true)
      ], 64);
    };
  }
});
var fs = defineComponent({
  inheritAttrs: false,
  __name: "NavigationMenuList",
  setup(n) {
    const t = inject(Te), { primitiveElement: e, currentElement: o } = B(), { setCollection: a } = re();
    return a(o), onMounted(() => {
      t == null || t.onIndicatorTrackChange(o.value);
    }), (l, r) => (openBlock(), createBlock(unref(D), {
      ref_key: "primitiveElement",
      ref: e,
      style: { position: "relative" }
    }, {
      default: withCtx(() => {
        var s;
        return [
          createVNode(unref(Ca), mergeProps(l.$attrs, {
            "data-orientation": (s = unref(t)) == null ? void 0 : s.orientation
          }), {
            default: withCtx(() => [
              renderSlot(l.$slots, "default")
            ]),
            _: 3
          }, 16, ["data-orientation"])
        ];
      }),
      _: 3
    }, 512));
  }
});
var ms = defineComponent({
  inheritAttrs: false,
  __name: "NavigationMenuViewport",
  setup(n) {
    const { primitiveElement: t, currentElement: e } = B(), o = inject(Te), a = ref(), l = computed(() => !!(o != null && o.modelValue.value)), r = computed(
      () => l.value ? o.modelValue.value : o.previousValue.value
    );
    onMounted(() => {
      o.onViewportChange(e.value);
    });
    const s = computed(
      () => (
        // @ts-ignore
        Array.from(o == null ? void 0 : o.viewportContent.value.values())
      )
    ), i = ref(), d = computed(() => {
      var m;
      const c = (m = i.value) == null ? void 0 : m.find(
        (f) => (f == null ? void 0 : f.value) === r.value
      );
      return J(c == null ? void 0 : c.$el);
    }), p = (c) => {
      var m, f, v;
      o.modelValue.value = "", (v = (f = (m = c.props) == null ? void 0 : m.triggerRef) == null ? void 0 : f.value) == null || v.focus(), c.props.wasEscapeCloseRef.value = true;
    };
    return He(d, () => {
      d.value && (a.value = {
        width: d.value.offsetWidth,
        height: d.value.offsetHeight
      });
    }), (c, m) => (openBlock(), createBlock(unref(Qe), { present: l.value }, {
      default: withCtx(() => {
        var f, v, h2, y;
        return [
          createVNode(unref(D), mergeProps(c.$attrs, {
            ref_key: "primitiveElement",
            ref: t,
            "data-state": unref(co)(l.value),
            "data-orientation": (f = unref(o)) == null ? void 0 : f.orientation,
            style: {
              // Prevent interaction when animating out
              pointerEvents: !l.value && ((v = unref(o)) != null && v.isRootMenu) ? "none" : void 0,
              ["--radix-navigation-menu-viewport-width"]: a.value ? ((h2 = a.value) == null ? void 0 : h2.width) + "px" : void 0,
              ["--radix-navigation-menu-viewport-height"]: a.value ? ((y = a.value) == null ? void 0 : y.height) + "px" : void 0
            },
            onPointerenter: m[0] || (m[0] = (C) => {
              var $;
              return ($ = unref(o)) == null ? void 0 : $.onContentEnter(r.value);
            }),
            onPointerleave: m[1] || (m[1] = (C) => {
              var $;
              return ($ = unref(o)) == null ? void 0 : $.onContentLeave();
            })
          }), {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList(s.value, (C) => {
                var $, S;
                return openBlock(), createBlock(unref(Qe), {
                  key: ($ = C.props) == null ? void 0 : $.value,
                  present: r.value === ((S = C.props) == null ? void 0 : S.value)
                }, {
                  default: withCtx(() => [
                    createVNode(Sn, mergeProps({
                      ref_for: true,
                      ref_key: "items",
                      ref: i
                    }, { ...C.props, ...C.parentProps }, {
                      onEscape: (P) => p(C)
                    }), {
                      default: withCtx(() => [
                        (openBlock(), createBlock(resolveDynamicComponent(C)))
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
var ve = "ScrollArea";
var vs = defineComponent({
  __name: "ScrollAreaRoot",
  props: {
    type: { default: "hover" },
    dir: { default: "ltr" },
    scrollHideDelay: { default: 600 }
  },
  setup(n) {
    const t = n, e = ref(0), o = ref(0), a = ref(), l = ref(), r = ref(), s = ref(), i = ref(false), d = ref(false), p = ref(), c = (C) => {
      a.value = C;
    }, m = (C) => {
      l.value = C;
    }, f = (C) => {
      r.value = C;
    }, v = (C) => {
      s.value = C;
    }, h2 = (C) => {
      i.value = C;
    }, y = (C) => {
      d.value = C;
    };
    return provide(ve, {
      type: t.type,
      dir: t.dir,
      scrollHideDelay: t.scrollHideDelay,
      scrollArea: p,
      viewport: a,
      onViewportChange: c,
      content: l,
      onContentChange: m,
      scrollbarX: r,
      scrollbarXEnabled: i,
      scrollbarY: s,
      scrollbarYEnabled: d,
      onScrollbarXChange: f,
      onScrollbarYChange: v,
      onScrollbarXEnabledChange: h2,
      onScrollbarYEnabledChange: y
    }), (C, $) => (openBlock(), createElementBlock("div", {
      ref_key: "scrollArea",
      ref: p,
      style: normalizeStyle({
        position: "relative",
        // Pass corner sizes as CSS vars to reduce re-renders of context consumers
        ["--radix-scroll-area-corner-width"]: e.value + "px",
        ["--radix-scroll-area-corner-height"]: o.value + "px"
      })
    }, [
      renderSlot(C.$slots, "default")
    ], 4));
  }
});
var hs = defineComponent({
  __name: "ScrollAreaViewport",
  setup(n) {
    const t = inject(
      ve
    ), e = ref(), o = ref();
    return onMounted(() => {
      t == null || t.onViewportChange(e.value), t == null || t.onContentChange(o.value);
    }), (a, l) => {
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
          renderSlot(a.$slots, "default")
        ], 512)
      ], 4);
    };
  }
});
function Pl(n, [t, e]) {
  return Math.min(e, Math.max(t, n));
}
function An(n, t) {
  return (e) => {
    if (n[0] === n[1] || t[0] === t[1])
      return t[0];
    const o = (t[1] - t[0]) / (n[1] - n[0]);
    return t[0] + o * (e - n[0]);
  };
}
function Ot(n) {
  const t = Tn(n.viewport, n.content), e = n.scrollbar.paddingStart + n.scrollbar.paddingEnd, o = (n.scrollbar.size - e) * t;
  return Math.max(o, 18);
}
function Tn(n, t) {
  const e = n / t;
  return isNaN(e) ? 0 : e;
}
var Ol = (n, t = () => {
}) => {
  let e = { left: n.scrollLeft, top: n.scrollTop }, o = 0;
  return function a() {
    const l = { left: n.scrollLeft, top: n.scrollTop }, r = e.left !== l.left, s = e.top !== l.top;
    (r || s) && t(), e = l, o = window.requestAnimationFrame(a);
  }(), () => window.cancelAnimationFrame(o);
};
function Mo(n, t, e = "ltr") {
  const o = Ot(t), a = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, l = t.scrollbar.size - a, r = t.content - t.viewport, s = l - o, i = e === "ltr" ? [0, r] : [r * -1, 0], d = Pl(
    n,
    i
  );
  return An([0, r], [0, s])(d);
}
function pt(n) {
  return n ? parseInt(n, 10) : 0;
}
function Bl(n, t, e, o = "ltr") {
  const a = Ot(e), l = a / 2, r = t || l, s = a - r, i = e.scrollbar.paddingStart + r, d = e.scrollbar.size - e.scrollbar.paddingEnd - s, p = e.content - e.viewport, c = o === "ltr" ? [0, p] : [p * -1, 0];
  return An(
    [i, d],
    c
  )(n);
}
function Do(n, t) {
  return n > 0 && n < t;
}
var Pn = defineComponent({
  __name: "ScrollAreaScrollbarImpl",
  props: {
    isHorizontal: { type: Boolean }
  },
  emits: ["onDragScroll", "onWheelScroll", "onThumbPointerDown"],
  setup(n, { emit: t }) {
    const e = n, o = inject(
      ve
    ), a = inject(
      ut
    ), { primitiveElement: l, currentElement: r } = B(), s = ref(""), i = ref();
    function d(h2) {
      var y, C;
      if (i.value) {
        const $ = h2.clientX - ((y = i.value) == null ? void 0 : y.left), S = h2.clientY - ((C = i.value) == null ? void 0 : C.top);
        t("onDragScroll", { x: $, y: S });
      }
    }
    const p = (h2) => {
      h2.button === 0 && (h2.target.setPointerCapture(h2.pointerId), i.value = r.value.getBoundingClientRect(), s.value = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", o != null && o.viewport && (o.viewport.value.style.scrollBehavior = "auto"), d(h2));
    }, c = (h2) => {
      d(h2);
    }, m = (h2) => {
      const y = h2.target;
      y.hasPointerCapture(h2.pointerId) && y.releasePointerCapture(h2.pointerId), document.body.style.webkitUserSelect = s.value, o != null && o.viewport && (o.viewport.value.style.scrollBehavior = ""), i.value = void 0;
    }, f = (h2) => {
      var S;
      if (!a)
        return;
      const y = h2.target, C = (S = r.value) == null ? void 0 : S.contains(y), $ = a.sizes.value.content - a.sizes.value.viewport;
      C && a.handleWheelScroll(h2, $);
    };
    onMounted(() => {
      document.addEventListener("wheel", f, { passive: false });
    }), onUnmounted(() => {
      document.removeEventListener("wheel", f);
    });
    const v = () => {
      var h2, y, C, $, S, P;
      r.value && (e.isHorizontal ? a == null || a.handleSizeChange({
        content: ((h2 = o == null ? void 0 : o.viewport.value) == null ? void 0 : h2.scrollWidth) ?? 0,
        viewport: ((y = o == null ? void 0 : o.viewport.value) == null ? void 0 : y.offsetWidth) ?? 0,
        scrollbar: {
          size: ((C = r.value) == null ? void 0 : C.clientWidth) ?? 0,
          paddingStart: pt(getComputedStyle(r.value).paddingLeft),
          paddingEnd: pt(getComputedStyle(r.value).paddingRight)
        }
      }) : a == null || a.handleSizeChange({
        content: (($ = o == null ? void 0 : o.viewport.value) == null ? void 0 : $.scrollHeight) ?? 0,
        viewport: ((S = o == null ? void 0 : o.viewport.value) == null ? void 0 : S.offsetHeight) ?? 0,
        scrollbar: {
          size: ((P = r.value) == null ? void 0 : P.clientHeight) ?? 0,
          paddingStart: pt(getComputedStyle(r.value).paddingLeft),
          paddingEnd: pt(getComputedStyle(r.value).paddingRight)
        }
      }));
    };
    return He(r, v), He(o == null ? void 0 : o.content, v), (h2, y) => (openBlock(), createBlock(unref(D), {
      ref_key: "primitiveElement",
      ref: l,
      style: { position: "absolute" },
      onPointerdown: p,
      onPointermove: c,
      onPointerup: m
    }, {
      default: withCtx(() => [
        renderSlot(h2.$slots, "default")
      ]),
      _: 3
    }, 512));
  }
});
var Ml = defineComponent({
  __name: "ScrollAreaScrollbarX",
  setup(n) {
    const t = inject(
      ve
    ), e = inject(
      ut
    ), { primitiveElement: o, currentElement: a } = B();
    onMounted(() => {
      a.value && (t == null || t.onScrollbarYChange(a.value));
    });
    const l = computed(() => e == null ? void 0 : e.sizes.value);
    return (r, s) => {
      var i, d;
      return openBlock(), createBlock(Pn, {
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
          ["--radix-scroll-area-thumb-width"]: l.value ? unref(Ot)(l.value) + "px" : void 0
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
var Dl = defineComponent({
  __name: "ScrollAreaScrollbarY",
  setup(n) {
    const t = inject(
      ve
    ), e = inject(
      ut
    ), { primitiveElement: o, currentElement: a } = B();
    onMounted(() => {
      a.value && (t == null || t.onScrollbarYChange(a.value));
    });
    const l = computed(() => e == null ? void 0 : e.sizes.value);
    return (r, s) => {
      var i, d;
      return openBlock(), createBlock(Pn, {
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
          ["--radix-scroll-area-thumb-height"]: l.value ? unref(Ot)(l.value) + "px" : void 0
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
var ut = "ScrollAreaScrollbarVisible";
var fo = defineComponent({
  __name: "ScrollAreaScrollbarVisible",
  setup(n) {
    const t = inject(
      ve
    ), e = inject(
      dt
    ), o = ref({
      content: 0,
      viewport: 0,
      scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
    }), a = computed(() => {
      const y = Tn(o.value.viewport, o.value.content);
      return y > 0 && y < 1;
    }), l = ref(), r = ref(0), s = (y, C) => {
      if (m.value) {
        const $ = t.viewport.value.scrollLeft + y.deltaY;
        t.viewport.value.scrollLeft = $, Do($, C) && y.preventDefault();
      } else {
        const $ = t.viewport.value.scrollTop + y.deltaY;
        t.viewport.value.scrollTop = $, Do($, C) && y.preventDefault();
      }
    }, i = (y, C) => {
      m.value ? r.value = C.x : r.value = C.y;
    }, d = (y) => {
      r.value = 0;
    }, p = (y) => {
      o.value = y;
    };
    function c(y, C) {
      return Bl(
        y,
        r.value,
        o.value,
        C
      );
    }
    const m = computed(
      () => e == null ? void 0 : e.isHorizontal.value
    );
    return provide(
      ut,
      {
        sizes: o,
        hasThumb: a,
        handleWheelScroll: s,
        handleThumbDown: i,
        handleThumbUp: d,
        handleSizeChange: p,
        onThumbPositionChange: () => {
          if (m.value) {
            if (t != null && t.viewport.value && l.value) {
              const y = t == null ? void 0 : t.viewport.value.scrollLeft, C = Mo(
                y,
                o.value,
                t == null ? void 0 : t.dir
              );
              l.value.style.transform = `translate3d(${C}px, 0, 0)`;
            }
          } else if (t != null && t.viewport.value && l.value) {
            const y = t == null ? void 0 : t.viewport.value.scrollTop, C = Mo(y, o.value);
            l.value.style.transform = `translate3d(0, ${C}px, 0)`;
          }
        },
        onThumbChange: (y) => {
          l.value = y;
        },
        onDragScroll: (y) => {
          m.value ? t.viewport.value.scrollLeft = c(
            y,
            t.dir
          ) : t.viewport.value.scrollTop = c(y);
        }
      }
    ), (y, C) => m.value ? (openBlock(), createBlock(Ml, { key: 0 }, {
      default: withCtx(() => [
        renderSlot(y.$slots, "default")
      ]),
      _: 3
    })) : (openBlock(), createBlock(Dl, { key: 1 }, {
      default: withCtx(() => [
        renderSlot(y.$slots, "default")
      ]),
      _: 3
    }));
  }
});
var On = defineComponent({
  __name: "ScrollAreaScrollbarAuto",
  setup(n) {
    const t = inject(
      ve
    ), e = inject(
      dt
    ), o = ref(false), a = Gt(() => {
      if (t != null && t.viewport.value) {
        const l = (t == null ? void 0 : t.viewport.value.offsetWidth) < (t == null ? void 0 : t.viewport.value.scrollWidth), r = (t == null ? void 0 : t.viewport.value.offsetHeight) < (t == null ? void 0 : t.viewport.value.scrollHeight);
        o.value = e != null && e.isHorizontal.value ? l : r;
      }
    }, 10);
    return He(t == null ? void 0 : t.viewport, a), He(t == null ? void 0 : t.content, a), (l, r) => o.value ? (openBlock(), createBlock(fo, mergeProps({ key: 0 }, l.$attrs, {
      "data-state": o.value ? "visible" : "hidden"
    }), {
      default: withCtx(() => [
        renderSlot(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-state"])) : createCommentVNode("", true);
  }
});
var Rl = {
  inheritAttrs: false
};
var Il = defineComponent({
  ...Rl,
  __name: "ScrollAreaScrollbarHover",
  setup(n) {
    const t = inject(ve), e = inject(
      dt
    );
    let o;
    const a = ref(false), l = () => {
      window.clearTimeout(o), a.value = true, console.log(e);
    }, r = () => {
      o = window.setTimeout(() => {
        a.value = false;
      }, t == null ? void 0 : t.scrollHideDelay);
    };
    return onMounted(() => {
      const s = t == null ? void 0 : t.scrollArea.value;
      s && (s.addEventListener("pointerenter", l), s.addEventListener("pointerleave", r));
    }), onUnmounted(() => {
      const s = t == null ? void 0 : t.scrollArea.value;
      s && (window.clearTimeout(o), s.removeEventListener("pointerenter", l), s.removeEventListener("pointerleave", r));
    }), (s, i) => a.value ? (openBlock(), createBlock(On, mergeProps({ key: 0 }, s.$attrs, {
      "data-state": a.value ? "visible" : "hidden"
    }), {
      default: withCtx(() => [
        renderSlot(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-state"])) : createCommentVNode("", true);
  }
});
var Nl = defineComponent({
  __name: "ScrollAreaScrollbarScroll",
  setup(n) {
    const t = inject(
      ve
    ), e = inject(
      dt
    ), { state: o, dispatch: a } = Uo("hidden", {
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
        () => a("HIDE"),
        t == null ? void 0 : t.scrollHideDelay
      );
    });
    const l = Gt(() => a("SCROLL_END"), 100);
    return watchEffect(() => {
      const r = t == null ? void 0 : t.viewport.value, s = e != null && e.isHorizontal.value ? "scrollLeft" : "scrollTop";
      if (r) {
        let i = r[s];
        const d = () => {
          const p = r[s];
          i !== p && (a("SCROLL"), l()), i = p;
        };
        r.addEventListener("scroll", d);
      }
    }), (r, s) => unref(o) !== "hidden" ? (openBlock(), createBlock(fo, normalizeProps(mergeProps({ key: 0 }, r.$attrs)), {
      default: withCtx(() => [
        renderSlot(r.$slots, "default")
      ]),
      _: 3
    }, 16)) : createCommentVNode("", true);
  }
});
var dt = "ScrollAreaScrollbar";
var Ll = {
  inheritAttrs: false
};
var _s = defineComponent({
  ...Ll,
  __name: "ScrollAreaScrollbar",
  props: {
    orientation: { default: "vertical" },
    forceMount: { type: Boolean, default: void 0 }
  },
  setup(n) {
    const t = n, e = inject(ve), o = computed(() => t.orientation === "horizontal");
    return watch(
      o,
      () => {
        o.value ? e == null || e.onScrollbarXEnabledChange(true) : e == null || e.onScrollbarYEnabledChange(true);
      },
      { immediate: true }
    ), onUnmounted(() => {
      e == null || e.onScrollbarXEnabledChange(false), e == null || e.onScrollbarYEnabledChange(false);
    }), provide(dt, {
      orientation: toRef(() => t.orientation),
      forceMount: toRef(() => t.forceMount),
      isHorizontal: o
    }), (a, l) => {
      var r, s, i, d;
      return ((r = unref(e)) == null ? void 0 : r.type) === "hover" ? (openBlock(), createBlock(Il, mergeProps({ key: 0 }, a.$attrs, { forceMount: a.forceMount }), {
        default: withCtx(() => [
          renderSlot(a.$slots, "default")
        ]),
        _: 3
      }, 16, ["forceMount"])) : ((s = unref(e)) == null ? void 0 : s.type) === "scroll" ? (openBlock(), createBlock(Nl, mergeProps({ key: 1 }, a.$attrs, { forceMount: a.forceMount }), {
        default: withCtx(() => [
          renderSlot(a.$slots, "default")
        ]),
        _: 3
      }, 16, ["forceMount"])) : ((i = unref(e)) == null ? void 0 : i.type) === "auto" ? (openBlock(), createBlock(On, mergeProps({ key: 2 }, a.$attrs, { forceMount: a.forceMount }), {
        default: withCtx(() => [
          renderSlot(a.$slots, "default")
        ]),
        _: 3
      }, 16, ["forceMount"])) : ((d = unref(e)) == null ? void 0 : d.type) === "always" ? (openBlock(), createBlock(fo, mergeProps({ key: 3 }, a.$attrs, { forceMount: a.forceMount }), {
        default: withCtx(() => [
          renderSlot(a.$slots, "default")
        ]),
        _: 3
      }, 16, ["forceMount"])) : createCommentVNode("", true);
    };
  }
});
var ys = defineComponent({
  __name: "ScrollAreaThumb",
  setup(n) {
    const t = inject(
      ve
    ), e = inject(
      ut
    ), o = (c) => {
      const f = c.target.getBoundingClientRect(), v = c.clientX - f.left, h2 = c.clientY - f.top;
      e == null || e.handleThumbDown(c, { x: v, y: h2 });
    }, a = (c) => {
      e == null || e.handleThumbUp(c);
    }, { primitiveElement: l, currentElement: r } = B(), s = ref(), i = computed(() => t == null ? void 0 : t.viewport.value), d = () => {
      if (!s.value) {
        const c = Ol(
          i.value,
          e == null ? void 0 : e.onThumbPositionChange
        );
        s.value = c, e == null || e.onThumbPositionChange();
      }
    }, p = computed(() => e == null ? void 0 : e.sizes.value);
    return ia(p, () => {
      e == null || e.onThumbChange(r.value), i.value && (e == null || e.onThumbPositionChange(), i.value.addEventListener("scroll", d));
    }), onUnmounted(() => {
      var c;
      i.value.removeEventListener("scroll", d), (c = t == null ? void 0 : t.viewport.value) == null || c.removeEventListener(
        "scroll",
        d
      );
    }), (c, m) => {
      var f;
      return openBlock(), createBlock(unref(D), {
        ref_key: "primitiveElement",
        ref: l,
        "data-state": (f = unref(e)) != null && f.hasThumb ? "visible" : "hidden",
        style: normalizeStyle({
          width: "var(--radix-scroll-area-thumb-width)",
          height: "var(--radix-scroll-area-thumb-height)"
        }),
        onPointerdown: o,
        onPointerup: a
      }, null, 8, ["data-state", "style"]);
    };
  }
});
export {
  zl as AccordionContent,
  Yl as AccordionHeader,
  Hl as AccordionItem,
  Wl as AccordionRoot,
  Ul as AccordionTrigger,
  Pr as AlertDialogAction,
  Sr as AlertDialogCancel,
  $r as AlertDialogContent,
  Tr as AlertDialogDescription,
  kr as AlertDialogOverlay,
  xr as AlertDialogPortal,
  Er as AlertDialogRoot,
  Ar as AlertDialogTitle,
  Cr as AlertDialogTrigger,
  er as AspectRatio,
  Kr as AvatarFallback,
  Lr as AvatarImage,
  Nr as AvatarRoot,
  Gl as CheckboxIndicator,
  ql as CheckboxRoot,
  Sa as CollapsibleContent,
  xa as CollapsibleRoot,
  $a as CollapsibleTrigger,
  Ei as ContextMenuArrow,
  Si as ContextMenuCheckboxItem,
  wi as ContextMenuContent,
  $i as ContextMenuGroup,
  xi as ContextMenuItem,
  Ai as ContextMenuItemIndicator,
  Ti as ContextMenuLabel,
  bi as ContextMenuPortal,
  Pi as ContextMenuRadioGroup,
  Oi as ContextMenuRadioItem,
  yi as ContextMenuRoot,
  ki as ContextMenuSeparator,
  Ci as ContextMenuSub,
  Bi as ContextMenuSubContent,
  Mi as ContextMenuSubTrigger,
  gi as ContextMenuTrigger,
  gr as DialogClose,
  _r as DialogContent,
  wr as DialogDescription,
  yr as DialogOverlay,
  hr as DialogPortal,
  mr as DialogRoot,
  br as DialogTitle,
  vr as DialogTrigger,
  ri as DropdownMenuArrow,
  ci as DropdownMenuCheckboxItem,
  li as DropdownMenuContent,
  ui as DropdownMenuGroup,
  si as DropdownMenuItem,
  pi as DropdownMenuItemIndicator,
  fi as DropdownMenuLabel,
  ai as DropdownMenuPortal,
  mi as DropdownMenuRadioGroup,
  vi as DropdownMenuRadioItem,
  oi as DropdownMenuRoot,
  di as DropdownMenuSeparator,
  ii as DropdownMenuSub,
  hi as DropdownMenuSubContent,
  _i as DropdownMenuSubTrigger,
  ni as DropdownMenuTrigger,
  Jr as HoverCardArrow,
  Fr as HoverCardContent,
  Xr as HoverCardPortal,
  qr as HoverCardRoot,
  Gr as HoverCardTrigger,
  Zl as Label,
  Ji as MenubarArrow,
  es as MenubarCheckboxItem,
  Fi as MenubarContent,
  Vi as MenubarGroup,
  Qi as MenubarItem,
  ts as MenubarItemIndicator,
  os as MenubarLabel,
  qi as MenubarMenu,
  Xi as MenubarPortal,
  ns as MenubarRadioGroup,
  as as MenubarRadioItem,
  Ui as MenubarRoot,
  ji as MenubarSeparator,
  Zi as MenubarSub,
  ls as MenubarSubContent,
  rs as MenubarSubTrigger,
  Gi as MenubarTrigger,
  us as NavigationMenuContent,
  ds as NavigationMenuIndicator,
  ss as NavigationMenuItem,
  cs as NavigationMenuLink,
  fs as NavigationMenuList,
  is as NavigationMenuRoot,
  ps as NavigationMenuTrigger,
  ms as NavigationMenuViewport,
  ei as PopoverArrow,
  ti as PopoverClose,
  jr as PopoverContent,
  Vr as PopoverPortal,
  Zr as PopoverRoot,
  Qr as PopoverTrigger,
  fr as ProgressIndicator,
  pr as ProgressRoot,
  cr as RadioGroupIndicator,
  dr as RadioGroupItem,
  ur as RadioGroupRoot,
  vs as ScrollAreaRoot,
  _s as ScrollAreaScrollbar,
  ys as ScrollAreaThumb,
  hs as ScrollAreaViewport,
  Li as SelectArrow,
  Ni as SelectContent,
  Yi as SelectGroup,
  Wi as SelectItem,
  Hi as SelectItemIndicator,
  zi as SelectLabel,
  Ii as SelectPortal,
  Di as SelectRoot,
  Ki as SelectSeparator,
  Ri as SelectTrigger,
  Jl as Separator,
  sr as SliderRange,
  lr as SliderRoot,
  rr as SliderThumb,
  ir as SliderTrack,
  Xl as SwitchRoot,
  Fl as SwitchThumb,
  nr as TabsContent,
  or as TabsList,
  tr as TabsRoot,
  ar as TabsTrigger,
  Ql as Toggle,
  jl as ToggleGroupItem,
  Vl as ToggleGroupRoot,
  Br as ToolbarButton,
  Mr as ToolbarLink,
  Or as ToolbarRoot,
  Ir as ToolbarSeparator,
  Dr as ToolbarToggleGroup,
  Rr as ToolbarToggleItem,
  Ur as TooltipArrow,
  Wr as TooltipContent,
  Yr as TooltipPortal,
  Hr as TooltipRoot,
  zr as TooltipTrigger
};
//# sourceMappingURL=radix-vue.js.map
