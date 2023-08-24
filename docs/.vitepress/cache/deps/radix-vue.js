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
  onBeforeMount,
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
  unref,
  useAttrs,
  useSlots,
  vModelRadio,
  vModelSelect,
  watch,
  watchEffect,
  withCtx,
  withDirectives,
  withKeys,
  withModifiers
} from "./chunk-NQEDJL6T.js";
import "./chunk-76J2PTFD.js";

// ../node_modules/.pnpm/radix-vue@0.1.26_vue@3.3.4/node_modules/radix-vue/dist/index.js
var Xa = Object.defineProperty;
var qa = Object.defineProperties;
var Ja = Object.getOwnPropertyDescriptors;
var fo = Object.getOwnPropertySymbols;
var Za = Object.prototype.hasOwnProperty;
var Qa = Object.prototype.propertyIsEnumerable;
var mo = (n, t, e) => t in n ? Xa(n, t, { enumerable: true, configurable: true, writable: true, value: e }) : n[t] = e;
var ja = (n, t) => {
  for (var e in t || (t = {}))
    Za.call(t, e) && mo(n, e, t[e]);
  if (fo)
    for (var e of fo(t))
      Qa.call(t, e) && mo(n, e, t[e]);
  return n;
};
var es = (n, t) => qa(n, Ja(t));
function ts(n, t) {
  var e;
  const o = shallowRef();
  return watchEffect(() => {
    o.value = n();
  }, es(ja({}, t), {
    flush: (e = t == null ? void 0 : t.flush) != null ? e : "sync"
  })), readonly(o);
}
function ns(n, t) {
  let e, o, a;
  const s = ref(true), l = () => {
    s.value = true, a();
  };
  watch(n, l, { flush: "sync" });
  const r = typeof t == "function" ? t : t.get, u = typeof t == "function" ? void 0 : t.set, d = customRef((c, p) => (o = c, a = p, {
    get() {
      return s.value && (e = r(), s.value = false), o(), e;
    },
    set(f) {
      u == null || u(f);
    }
  }));
  return Object.isExtensible(d) && (d.trigger = l), d;
}
function ct(n) {
  return getCurrentScope() ? (onScopeDispose(n), true) : false;
}
function En(n) {
  let t = false, e;
  const o = effectScope(true);
  return (...a) => (t || (e = o.run(() => n(...a)), t = true), e);
}
function we(n) {
  return typeof n == "function" ? n() : unref(n);
}
var ve = typeof window < "u";
var os = (n) => typeof n < "u";
var vo = (n, t, e) => Math.min(e, Math.max(t, n));
var Bt = () => {
};
var ho = as();
function as() {
  var n;
  return ve && ((n = window == null ? void 0 : window.navigator) == null ? void 0 : n.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
}
function ss(n, t) {
  function e(...o) {
    return new Promise((a, s) => {
      Promise.resolve(n(() => t.apply(this, o), { fn: t, thisArg: this, args: o })).then(a).catch(s);
    });
  }
  return e;
}
function ls(n, t = {}) {
  let e, o, a = Bt;
  const s = (r) => {
    clearTimeout(r), a(), a = Bt;
  };
  return (r) => {
    const u = we(n), d = we(t.maxWait);
    return e && s(e), u <= 0 || d !== void 0 && d <= 0 ? (o && (s(o), o = null), Promise.resolve(r())) : new Promise((c, p) => {
      a = t.rejectOnCancel ? p : c, d && !o && (o = setTimeout(() => {
        e && s(e), o = null, c(r());
      }, d)), e = setTimeout(() => {
        o && s(o), o = null, c(r());
      }, u);
    });
  };
}
function Fo(...n) {
  if (n.length !== 1)
    return toRef(...n);
  const t = n[0];
  return typeof t == "function" ? readonly(customRef(() => ({ get: t, set: Bt }))) : ref(t);
}
function Lo(n, t = 1e4) {
  return customRef((e, o) => {
    let a = n, s;
    const l = () => setTimeout(() => {
      a = n, o();
    }, we(t));
    return ct(() => {
      clearTimeout(s);
    }), {
      get() {
        return e(), a;
      },
      set(r) {
        a = r, o(), clearTimeout(s), s = l();
      }
    };
  });
}
function On(n, t = 200, e = {}) {
  return ss(
    ls(t, e),
    n
  );
}
function Ko(n, t, e = {}) {
  const {
    immediate: o = true
  } = e, a = ref(false);
  let s = null;
  function l() {
    s && (clearTimeout(s), s = null);
  }
  function r() {
    a.value = false, l();
  }
  function u(...d) {
    l(), a.value = true, s = setTimeout(() => {
      a.value = false, s = null, n(...d);
    }, we(t));
  }
  return o && (a.value = true, ve && u()), ct(r), {
    isPending: readonly(a),
    start: u,
    stop: r
  };
}
function is(n, t, e) {
  const o = watch(n, (...a) => (nextTick(() => o()), t(...a)), e);
}
function De(n) {
  var t;
  const e = we(n);
  return (t = e == null ? void 0 : e.$el) != null ? t : e;
}
var Nt = ve ? window : void 0;
var on = ve ? window.document : void 0;
function xe(...n) {
  let t, e, o, a;
  if (typeof n[0] == "string" || Array.isArray(n[0]) ? ([e, o, a] = n, t = Nt) : [t, e, o, a] = n, !t)
    return Bt;
  Array.isArray(e) || (e = [e]), Array.isArray(o) || (o = [o]);
  const s = [], l = () => {
    s.forEach((c) => c()), s.length = 0;
  }, r = (c, p, f, m) => (c.addEventListener(p, f, m), () => c.removeEventListener(p, f, m)), u = watch(
    () => [De(t), we(a)],
    ([c, p]) => {
      l(), c && s.push(
        ...e.flatMap((f) => o.map((m) => r(c, f, m, p)))
      );
    },
    { immediate: true, flush: "post" }
  ), d = () => {
    u(), l();
  };
  return ct(d), d;
}
function rs(n) {
  return typeof n == "function" ? n : typeof n == "string" ? (t) => t.key === n : Array.isArray(n) ? (t) => n.includes(t.key) : () => true;
}
function us(...n) {
  let t, e, o = {};
  n.length === 3 ? (t = n[0], e = n[1], o = n[2]) : n.length === 2 ? typeof n[1] == "object" ? (t = true, e = n[0], o = n[1]) : (t = n[0], e = n[1]) : (t = true, e = n[0]);
  const {
    target: a = Nt,
    eventName: s = "keydown",
    passive: l = false,
    dedupe: r = false
  } = o, u = rs(t);
  return xe(a, s, (c) => {
    c.repeat && we(r) || u(c) && e(c);
  }, l);
}
function ds(n = {}) {
  var t;
  const {
    window: e = Nt,
    deep: o = true
  } = n, a = (t = n.document) != null ? t : e == null ? void 0 : e.document, s = () => {
    var r;
    let u = a == null ? void 0 : a.activeElement;
    if (o)
      for (; u != null && u.shadowRoot; )
        u = (r = u == null ? void 0 : u.shadowRoot) == null ? void 0 : r.activeElement;
    return u;
  }, l = ns(
    () => null,
    () => s()
  );
  return e && (xe(e, "blur", (r) => {
    r.relatedTarget === null && l.trigger();
  }, true), xe(e, "focus", l.trigger, true)), l;
}
function Vo() {
  const n = ref(false);
  return getCurrentInstance() && onMounted(() => {
    n.value = true;
  }), n;
}
function cs(n) {
  const t = Vo();
  return computed(() => (t.value, !!n()));
}
function ps(n) {
  return JSON.parse(JSON.stringify(n));
}
var go = Object.getOwnPropertySymbols;
var fs = Object.prototype.hasOwnProperty;
var ms = Object.prototype.propertyIsEnumerable;
var vs = (n, t) => {
  var e = {};
  for (var o in n)
    fs.call(n, o) && t.indexOf(o) < 0 && (e[o] = n[o]);
  if (n != null && go)
    for (var o of go(n))
      t.indexOf(o) < 0 && ms.call(n, o) && (e[o] = n[o]);
  return e;
};
function Ce(n, t, e = {}) {
  const o = e, { window: a = Nt } = o, s = vs(o, ["window"]);
  let l;
  const r = cs(() => a && "ResizeObserver" in a), u = () => {
    l && (l.disconnect(), l = void 0);
  }, d = computed(
    () => Array.isArray(n) ? n.map((f) => De(f)) : [De(n)]
  ), c = watch(
    d,
    (f) => {
      if (u(), r.value && a) {
        l = new ResizeObserver(t);
        for (const m of f)
          m && l.observe(m, s);
      }
    },
    { immediate: true, flush: "post", deep: true }
  ), p = () => {
    u(), c();
  };
  return ct(p), {
    isSupported: r,
    stop: p
  };
}
function hs(n, t) {
  const e = shallowRef(t);
  return watch(
    Fo(n),
    (o, a) => {
      e.value = a;
    },
    { flush: "sync" }
  ), readonly(e);
}
function Ho(n) {
  const t = window.getComputedStyle(n);
  if (t.overflowX === "scroll" || t.overflowY === "scroll" || t.overflowX === "auto" && n.clientWidth < n.scrollWidth || t.overflowY === "auto" && n.clientHeight < n.scrollHeight)
    return true;
  {
    const e = n.parentNode;
    return !e || e.tagName === "BODY" ? false : Ho(e);
  }
}
function gs(n) {
  const t = n || window.event, e = t.target;
  return Ho(e) ? false : t.touches.length > 1 ? true : (t.preventDefault && t.preventDefault(), false);
}
function ys(n, t = false) {
  const e = ref(t);
  let o = null, a;
  watch(Fo(n), (r) => {
    if (r) {
      const u = r;
      a = u.style.overflow, e.value && (u.style.overflow = "hidden");
    }
  }, {
    immediate: true
  });
  const s = () => {
    const r = we(n);
    !r || e.value || (ho && (o = xe(
      r,
      "touchmove",
      (u) => {
        gs(u);
      },
      { passive: false }
    )), r.style.overflow = "hidden", e.value = true);
  }, l = () => {
    const r = we(n);
    !r || !e.value || (ho && (o == null || o()), r.style.overflow = a, e.value = false);
  };
  return ct(l), computed({
    get() {
      return e.value;
    },
    set(r) {
      r ? s() : l();
    }
  });
}
function J(n, t, e, o = {}) {
  var a, s, l;
  const {
    clone: r = false,
    passive: u = false,
    eventName: d,
    deep: c = false,
    defaultValue: p,
    shouldEmit: f
  } = o, m = getCurrentInstance(), v = e || (m == null ? void 0 : m.emit) || ((a = m == null ? void 0 : m.$emit) == null ? void 0 : a.bind(m)) || ((l = (s = m == null ? void 0 : m.proxy) == null ? void 0 : s.$emit) == null ? void 0 : l.bind(m == null ? void 0 : m.proxy));
  let h2 = d;
  t || (t = "modelValue"), h2 = h2 || `update:${t.toString()}`;
  const _ = (E) => r ? typeof r == "function" ? r(E) : ps(E) : E, P = () => os(n[t]) ? _(n[t]) : p, O = (E) => {
    f ? f(E) && v(h2, E) : v(h2, E);
  };
  if (u) {
    const E = P(), T = ref(E);
    return watch(
      () => n[t],
      (B) => T.value = _(B)
    ), watch(
      T,
      (B) => {
        (B !== n[t] || c) && O(B);
      },
      { deep: c }
    ), T;
  } else
    return computed({
      get() {
        return P();
      },
      set(E) {
        O(E);
      }
    });
}
function pt(n, t, e, o = {}) {
  if (!t)
    return null;
  const {
    arrowKeyOptions: a = "both",
    attributeName: s = "data-radix-vue-collection-item",
    itemsArray: l = [],
    loop: r = true,
    dir: u = "ltr",
    preventScroll: d = true,
    focus: c = false
  } = o, [p, f, m, v, h2, _] = [
    n.key === "ArrowRight",
    n.key === "ArrowLeft",
    n.key === "ArrowUp",
    n.key === "ArrowDown",
    n.key === "Home",
    n.key === "End"
  ], P = m || v, O = p || f;
  if (!h2 && !_ && (!P && !O || a === "vertical" && O || a === "horizontal" && P))
    return null;
  const E = e ? Array.from(e.querySelectorAll(`[${s}]`)) : l;
  if (!E.length)
    return null;
  d && n.preventDefault();
  let T = null;
  return O || P ? T = Wo(E, t, {
    goForward: P ? v : u === "ltr" ? p : f,
    loop: r
  }) : h2 ? T = E.at(0) || null : _ && (T = E.at(-1) || null), c && (T == null || T.focus()), T;
}
function Wo(n, t, { goForward: e, loop: o }, a = n.length) {
  if (--a === 0)
    return null;
  const s = n.indexOf(t), l = e ? s + 1 : s - 1;
  if (!o && (l < 0 || l >= n.length))
    return null;
  const r = (l + n.length) % n.length, u = n[r];
  return u ? u.hasAttribute("disabled") && u.getAttribute("disabled") !== "false" ? Wo(
    n,
    u,
    { goForward: e, loop: o },
    a
  ) : u : null;
}
async function _s(n, t, e = 500) {
  let o = true, a, s;
  const l = new Promise((d) => {
    s = d, a = setTimeout(() => {
      u(), d(o);
    }, e);
  });
  function r() {
    o = false, u(), clearTimeout(a), a = void 0, s(false);
  }
  function u() {
    t.removeEventListener("mouseleave", r);
  }
  return t.addEventListener("mouseleave", r), l;
}
function zo(n, t = 300) {
  let e = true, o, a;
  const s = n.target, l = new Promise((d) => {
    a = d, o = setTimeout(() => {
      u(), d(e);
    }, t);
  });
  function r() {
    e = false, u(), clearTimeout(o), o = void 0, a(false);
  }
  function u() {
    s.removeEventListener("mouseenter", r);
  }
  return s.addEventListener("mouseenter", r), l;
}
function Uo(n, t) {
  const e = ref(n);
  function o(s) {
    return t[e.value][s] ?? e.value;
  }
  return {
    state: e,
    dispatch: (s) => {
      e.value = o(s);
    }
  };
}
var an = 0;
function $n() {
  watchEffect((n) => {
    if (!ve)
      return;
    const t = document.querySelectorAll("[data-radix-focus-guard]");
    document.body.insertAdjacentElement(
      "afterbegin",
      t[0] ?? yo()
    ), document.body.insertAdjacentElement(
      "beforeend",
      t[1] ?? yo()
    ), an++, n(() => {
      an === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((e) => e.remove()), an--;
    });
  });
}
function yo() {
  const n = document.createElement("span");
  return n.setAttribute("data-radix-focus-guard", ""), n.tabIndex = 0, n.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", n;
}
var bs = "data-radix-vue-collection-item";
function se(n) {
  const t = n ?? Symbol();
  return { createCollection: (a) => {
    const s = ref([]);
    function l() {
      const r = De(a);
      return r ? s.value = Array.from(
        r.querySelectorAll(`[${bs}]:not([data-disabled])`)
      ) : s.value = [];
    }
    return onBeforeUpdate(() => {
      s.value = [];
    }), onMounted(l), onUpdated(l), watch(() => a == null ? void 0 : a.value, l, { immediate: true }), provide(t, s), s;
  }, injectCollection: () => inject(t, ref([])) };
}
function X(n) {
  const t = getCurrentInstance(), e = t == null ? void 0 : t.type.emits, o = {};
  return e != null && e.length || console.warn(
    `No emitted event found. Please check component: ${t == null ? void 0 : t.type.__name}`
  ), e == null || e.forEach((a) => {
    o[toHandlerKey(camelize(a))] = (...s) => n(a, ...s);
  }), o;
}
function ws(n) {
  const t = ref(), e = computed(() => {
    var a;
    return ((a = t.value) == null ? void 0 : a.width) ?? 0;
  }), o = computed(() => {
    var a;
    return ((a = t.value) == null ? void 0 : a.height) ?? 0;
  });
  return onMounted(() => {
    const a = De(n);
    if (a) {
      t.value = { width: a.offsetWidth, height: a.offsetHeight };
      const s = new ResizeObserver((l) => {
        if (!Array.isArray(l) || !l.length)
          return;
        const r = l[0];
        let u, d;
        if ("borderBoxSize" in r) {
          const c = r.borderBoxSize, p = Array.isArray(c) ? c[0] : c;
          u = p.inlineSize, d = p.blockSize;
        } else
          u = a.offsetWidth, d = a.offsetHeight;
        t.value = { width: u, height: d };
      });
      return s.observe(a, { box: "border-box" }), () => s.unobserve(a);
    } else
      t.value = void 0;
  }), {
    width: e,
    height: o
  };
}
var Cs = En(() => ({ count: ref(0) }));
function te(n) {
  const { count: t } = Cs();
  return n || t.value++, n || `radix-${t.value}`;
}
function Pn(n) {
  return n ? n.flatMap((t) => t.type === Fragment ? Pn(t.children) : [t]) : [];
}
function Es(n) {
  return n && (typeof n.type == "string" || typeof n.type == "object" || typeof n.type == "function");
}
var Os = En(() => ref(0));
function Ft(n) {
  const t = Os(), e = ys(on == null ? void 0 : on.body, false), o = computed({
    get() {
      return e.value;
    },
    set(a) {
      if (ve)
        if (a) {
          const s = window.innerWidth - document.documentElement.clientWidth;
          s > 0 && (document.body.style.paddingRight = `${s}px`), nextTick(() => {
            document.body.style.pointerEvents = "none", e.value = true;
          });
        } else
          document.body.style.paddingRight = "", document.body.style.pointerEvents = "", e.value = false;
    }
  });
  return n && (t.value++, o.value = n), onBeforeUnmount(() => {
    n && (t.value--, t.value === 0 && (document.body.style.paddingRight = "", document.body.style.pointerEvents = ""));
  }), o;
}
function Sn(n) {
  const t = Lo("", 1e3);
  return {
    search: t,
    handleTypeaheadSearch: (a) => {
      var p, f;
      t.value = t.value + a;
      const s = n.value, l = document.activeElement, r = ((f = (p = s.find((m) => m === l)) == null ? void 0 : p.textContent) == null ? void 0 : f.trim()) ?? "", u = s.map((m) => {
        var v;
        return ((v = m.textContent) == null ? void 0 : v.trim()) ?? "";
      }), d = $s(u, t.value, r), c = s.find(
        (m) => {
          var v;
          return ((v = m.textContent) == null ? void 0 : v.trim()) === d;
        }
      );
      c && c.focus();
    },
    resetTypeahead: () => {
      t.value = "";
    }
  };
}
function Tn(n, t) {
  return n.map((e, o) => n[(t + o) % n.length]);
}
function $s(n, t, e) {
  const a = t.length > 1 && Array.from(t).every((d) => d === t[0]) ? t[0] : t, s = e ? n.indexOf(e) : -1;
  let l = Tn(n, Math.max(s, 0));
  a.length === 1 && (l = l.filter((d) => d !== e));
  const u = l.find(
    (d) => d.toLowerCase().startsWith(a.toLowerCase())
  );
  return u !== e ? u : void 0;
}
function Ps(n) {
  throw new Error(
    [
      `Detected an invalid children for \`${n}\` with \`asChild\` prop.`,
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
}
var x = defineComponent({
  name: "Primitive",
  inheritAttrs: false,
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
  setup(n, { attrs: t, slots: e }) {
    const o = n.asChild ? "template" : n.as;
    return o !== "template" ? () => h(n.as, t, { default: e.default }) : () => {
      var r, u;
      if (!e.default)
        return null;
      const a = Pn(e.default()), [s, ...l] = a;
      if (Es(s) || Ps(o), Object.keys(t).length > 0) {
        (r = s.props) == null || delete r.ref;
        const d = mergeProps(t, s.props ?? {});
        t.class && ((u = s.props) != null && u.class) && delete s.props.class;
        const c = cloneVNode(s, d);
        for (const p in d)
          p.startsWith("on") && (c.props || (c.props = {}), c.props[p] = d[p]);
        return a.length === 1 ? c : [c, ...l];
      }
      return a;
    };
  }
});
function H() {
  const n = ref(), t = computed(() => {
    var e;
    return ((e = n.value) == null ? void 0 : e.$el.nodeName) === "#text" ? n.value.$el.nextElementSibling : De(n);
  });
  return {
    primitiveElement: n,
    currentElement: t
  };
}
var Bn = Symbol();
var Ss = defineComponent({
  __name: "CollapsibleRoot",
  props: {
    defaultOpen: { type: Boolean, default: false },
    open: { type: Boolean, default: void 0 },
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:open"],
  setup(n, { expose: t, emit: e }) {
    const o = n, a = J(o, "open", e, {
      defaultValue: o.defaultOpen,
      passive: true
    }), s = J(o, "disabled");
    return provide(Bn, {
      contentId: te(),
      disabled: s,
      open: a,
      onOpenToggle: () => {
        a.value = !a.value;
      }
    }), t({ open: a }), (l, r) => (openBlock(), createBlock(unref(x), {
      as: l.as,
      "as-child": o.asChild,
      "data-state": o.open ? "open" : "closed",
      "data-disabled": o.disabled ? "" : void 0
    }, {
      default: withCtx(() => [
        renderSlot(l.$slots, "default", { open: unref(a) })
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-state", "data-disabled"]));
  }
});
var Ts = defineComponent({
  __name: "CollapsibleTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(n) {
    const t = n, e = inject(Bn);
    return (o, a) => {
      var s, l, r, u, d, c, p, f;
      return openBlock(), createBlock(unref(x), {
        type: o.as === "button" ? "button" : void 0,
        as: o.as,
        "as-child": t.asChild,
        "aria-controls": (s = unref(e)) == null ? void 0 : s.contentId,
        "aria-expanded": ((l = unref(e)) == null ? void 0 : l.open.value) || false,
        "data-state": (r = unref(e)) != null && r.open.value ? "open" : "closed",
        "data-disabled": (d = (u = unref(e)) == null ? void 0 : u.disabled) != null && d.value ? "" : void 0,
        disabled: (p = (c = unref(e)) == null ? void 0 : c.disabled) == null ? void 0 : p.value,
        onClick: (f = unref(e)) == null ? void 0 : f.onOpenToggle
      }, {
        default: withCtx(() => [
          renderSlot(o.$slots, "default")
        ]),
        _: 3
      }, 8, ["type", "as", "as-child", "aria-controls", "aria-expanded", "data-state", "data-disabled", "disabled", "onClick"]);
    };
  }
});
function Bs(n, t) {
  const e = ref({}), o = ref("none"), a = n.value ? "mounted" : "unmounted", { state: s, dispatch: l } = Uo(a, {
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
    n,
    async (f, m) => {
      var h2;
      const v = m !== f;
      if (await nextTick(), v) {
        const _ = o.value, P = $t(t.value);
        f ? l("MOUNT") : P === "none" || ((h2 = e.value) == null ? void 0 : h2.display) === "none" ? l("UNMOUNT") : l(m && _ !== P ? "ANIMATION_OUT" : "UNMOUNT");
      }
    },
    { immediate: true }
  );
  const r = (f) => {
    const v = $t(t.value).includes(
      f.animationName
    );
    f.target === t.value && v && l("ANIMATION_END");
  }, u = (f) => {
    f.target === t.value && (o.value = $t(t.value));
  }, d = watch(
    t,
    (f, m) => {
      f ? (e.value = getComputedStyle(f), f.addEventListener("animationstart", u), f.addEventListener("animationcancel", r), f.addEventListener("animationend", r)) : (l("ANIMATION_END"), m == null || m.removeEventListener("animationstart", u), m == null || m.removeEventListener("animationcancel", r), m == null || m.removeEventListener("animationend", r));
    },
    { immediate: true }
  ), c = watch(s, () => {
    const f = $t(t.value);
    o.value = s.value === "mounted" ? f : "none";
  });
  return onUnmounted(() => {
    d(), c();
  }), {
    isPresent: computed(
      () => ["mounted", "unmountSuspended"].includes(s.value)
    )
  };
}
function $t(n) {
  return n && getComputedStyle(n).animationName || "none";
}
var de = defineComponent({
  __name: "Presence",
  props: {
    present: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(n, { expose: t }) {
    var f;
    const e = n, { present: o, forceMount: a } = toRefs(e), s = useSlots(), l = ref(), { isPresent: r } = Bs(o, l), u = {
      beforeMount(m) {
        m.hasAttribute("data-radix-popper-content-wrapper") ? l.value = m.firstChild : l.value = m;
      }
    };
    let d = (f = s.default) == null ? void 0 : f.call(s);
    d = Pn(d || []);
    const c = getCurrentInstance();
    function p() {
      var m, v;
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
            ].map((_) => `  - ${_}`).join(`
`)
          ].join(`
`)
        );
      }
      return a.value || o.value || r.value ? withDirectives((v = s.default) == null ? void 0 : v.call(s)[0], [[u]]) : null;
    }
    return t({
      present: r
    }), (m, v) => (openBlock(), createBlock(p));
  }
});
var As = {
  inheritAttrs: false
};
var Is = defineComponent({
  ...As,
  __name: "CollapsibleContent",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(n) {
    const t = n, e = inject(Bn), o = ref(), { primitiveElement: a, currentElement: s } = H(), l = ref(0), r = ref(0), u = computed(() => e == null ? void 0 : e.open.value), d = ref(u.value), c = ref();
    return watch(
      () => {
        var p;
        return [u.value, (p = o.value) == null ? void 0 : p.present];
      },
      async () => {
        await nextTick();
        const p = s.value;
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
    }), (p, f) => (openBlock(), createBlock(unref(de), {
      ref_key: "presentRef",
      ref: o,
      present: unref(e).open.value,
      "force-mount": true
    }, {
      default: withCtx(() => {
        var m, v, h2, _, P;
        return [
          createVNode(unref(x), mergeProps(p.$attrs, {
            id: (m = unref(e)) == null ? void 0 : m.contentId,
            ref_key: "primitiveElement",
            ref: a,
            "as-child": t.asChild,
            as: p.as,
            "data-state": (v = unref(e)) != null && v.open.value ? "open" : "closed",
            "data-disabled": (_ = (h2 = unref(e)) == null ? void 0 : h2.disabled) != null && _.value ? "true" : void 0,
            hidden: !((P = o.value) != null && P.present),
            style: {
              ["--radix-collapsible-content-height"]: `${r.value}px`,
              ["--radix-collapsible-content-width"]: `${l.value}px`
            }
          }), {
            default: withCtx(() => [
              renderSlot(p.$slots, "default")
            ]),
            _: 3
          }, 16, ["id", "as-child", "as", "data-state", "data-disabled", "hidden", "style"])
        ];
      }),
      _: 3
    }, 8, ["present"]));
  }
});
function Ds(n, t) {
  if (n === "single") {
    if (Array.isArray(t)) {
      console.error(`Invalid prop \`value\` of value \`${t}\` supplied to \`AccordionRoot\`, which type is \`single\`. The \`value\` prop must be:
  - a string
  - \`undefined\`

If you want to use multiple values, use the \`AccordionRoot\` with type \`multiple\`.

Defaulting to \`undefined\`.`);
      return;
    }
  } else if (n === "multiple" && (typeof t == "string" || typeof t > "u"))
    return console.error(`Invalid prop \`value\` of value \`${t}\` supplied to \`AccordionRoot\`, which type is \`multiple\`. The \`value\` prop must be:
- an array of strings
- empty array (\`[]\`)

If you want to use just one value, use the \`AccordionRoot\` with type \`single\`.

Defaulting to empty array (\`[]\`).`), [];
  return t;
}
function xs({ type: n, defaultValue: t }) {
  if (n === "multiple")
    return Array.isArray(t) ? t : t === void 0 ? [] : (console.error(
      `Invalid prop \`defaultValue\` of value \`${t}\` supplied to \`AccordionRoot\`, which type is \`multiple\`. The \`defaultValue\` prop must be:
  - an array of strings
  - empty array (\`[]\`)

If you want to use just one value, use the \`AccordionRoot\` with type \`single\`.

Defaulting to empty array (\`[]\`).`
    ), []);
  if (n === "single") {
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
function Yo(n, t) {
  const e = J(n, "modelValue", t, {
    defaultValue: xs(n),
    passive: true
  });
  watch(
    () => [n.type, n.modelValue],
    () => {
      const a = Ds(n.type, e.value);
      e.value !== a && (e.value = a);
    },
    { immediate: true }
  );
  function o(a) {
    if (n.type === "single")
      e.value = a === e.value ? void 0 : a;
    else {
      const s = e.value || [];
      if (s.includes(a)) {
        const l = s.findIndex((r) => r === a);
        s.splice(l, 1);
      } else
        s.push(a);
      e.value = s;
    }
  }
  return {
    modelValue: e,
    changeModelValue: o
  };
}
var ft = Symbol();
var Yi = defineComponent({
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
  setup(n, { expose: t, emit: e }) {
    const o = n, { modelValue: a, changeModelValue: s } = Yo(o, e), { primitiveElement: l, currentElement: r } = H();
    return provide(ft, {
      disabled: o.disabled,
      direction: o.dir,
      orientation: o.orientation,
      parentElement: r,
      isSingle: computed(() => o.type === "single"),
      collapsible: o.collapsible,
      modelValue: a,
      changeModelValue: s
    }), t({
      modelValue: a
    }), (u, d) => (openBlock(), createBlock(unref(x), {
      ref_key: "primitiveElement",
      ref: l,
      "as-child": o.asChild,
      as: o.as
    }, {
      default: withCtx(() => [
        renderSlot(u.$slots, "default", { modelValue: unref(a) })
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
});
var Lt = Symbol();
var Gi = defineComponent({
  __name: "AccordionItem",
  props: {
    disabled: { type: Boolean },
    value: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(n, { expose: t }) {
    const e = n, o = inject(ft), a = computed(
      () => o != null && o.isSingle.value ? e.value === o.modelValue.value : Array.isArray(o == null ? void 0 : o.modelValue.value) && !!(o != null && o.modelValue.value.includes(e.value))
    ), s = computed(() => (o == null ? void 0 : o.disabled) || e.disabled || !!(o != null && o.isSingle.value) && a.value && !(o != null && o.collapsible)), l = computed(() => s.value ? "" : void 0), r = computed(
      () => a.value ? "open" : "closed"
      /* Closed */
    ), { primitiveElement: u, currentElement: d } = H();
    provide(Lt, {
      open: a,
      dataState: r,
      disabled: s,
      dataDisabled: l,
      triggerId: te(),
      primitiveElement: u,
      currentElement: d,
      value: computed(() => e.value)
    });
    function c(p) {
      pt(
        p,
        d.value,
        o == null ? void 0 : o.parentElement.value,
        {
          arrowKeyOptions: o == null ? void 0 : o.orientation,
          dir: o == null ? void 0 : o.direction,
          focus: true
        }
      );
    }
    return t({ open: a }), (p, f) => {
      var m;
      return openBlock(), createBlock(unref(Ss), {
        "data-orientation": (m = unref(o)) == null ? void 0 : m.orientation,
        "data-disabled": l.value,
        "data-state": r.value,
        disabled: s.value,
        open: a.value,
        "as-child": e.asChild,
        onKeydown: withKeys(c, ["up", "down", "left", "right", "home", "end"])
      }, {
        default: withCtx(() => [
          renderSlot(p.$slots, "default", { open: a.value })
        ]),
        _: 3
      }, 8, ["data-orientation", "data-disabled", "data-state", "disabled", "open", "as-child", "onKeydown"]);
    };
  }
});
var Xi = defineComponent({
  __name: "AccordionContent",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(n) {
    const t = n, e = inject(ft), o = inject(Lt);
    return (a, s) => {
      var l, r, u, d, c, p, f;
      return openBlock(), createBlock(unref(Is), {
        id: (l = unref(o)) == null ? void 0 : l.triggerId,
        role: "region",
        open: (r = unref(o)) == null ? void 0 : r.open.value,
        hidden: !((u = unref(o)) != null && u.open.value),
        "as-child": t.asChild,
        "aria-labelledby": (d = unref(o)) == null ? void 0 : d.triggerId,
        "data-state": (c = unref(o)) == null ? void 0 : c.dataState.value,
        "data-disabled": (p = unref(o)) == null ? void 0 : p.dataDisabled.value,
        "data-orientation": (f = unref(e)) == null ? void 0 : f.orientation,
        style: { "--radix-accordion-content-width": "var(--radix-collapsible-content-width)", "--radix-accordion-content-height": "var(--radix-collapsible-content-height)" }
      }, {
        default: withCtx(() => [
          renderSlot(a.$slots, "default")
        ]),
        _: 3
      }, 8, ["id", "open", "hidden", "as-child", "aria-labelledby", "data-state", "data-disabled", "data-orientation"]);
    };
  }
});
var qi = defineComponent({
  __name: "AccordionHeader",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(n) {
    const t = n, e = inject(ft), o = inject(Lt);
    return (a, s) => {
      var l, r, u;
      return openBlock(), createBlock(unref(x), {
        as: t.as || "h3",
        "as-child": t.asChild,
        "data-orientation": (l = unref(e)) == null ? void 0 : l.orientation,
        "data-state": (r = unref(o)) == null ? void 0 : r.dataState.value,
        "data-disabled": (u = unref(o)) == null ? void 0 : u.dataDisabled.value
      }, {
        default: withCtx(() => [
          renderSlot(a.$slots, "default")
        ]),
        _: 3
      }, 8, ["as", "as-child", "data-orientation", "data-state", "data-disabled"]);
    };
  }
});
var Ji = defineComponent({
  __name: "AccordionTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(n) {
    const t = n, e = inject(ft), o = inject(Lt);
    function a() {
      o != null && o.disabled.value || o && (e == null || e.changeModelValue(o.value.value));
    }
    return (s, l) => {
      var r, u, d, c, p, f, m, v, h2, _;
      return openBlock(), createBlock(unref(Ts), {
        id: (r = unref(o)) == null ? void 0 : r.triggerId,
        ref: (u = unref(o)) == null ? void 0 : u.primitiveElement,
        "data-radix-vue-collection-item": "",
        as: t.as,
        "as-child": t.asChild,
        "aria-controls": (d = unref(o)) == null ? void 0 : d.triggerId,
        "aria-disabled": ((c = unref(o)) == null ? void 0 : c.disabled.value) || void 0,
        "aria-expanded": ((p = unref(o)) == null ? void 0 : p.open.value) || false,
        "data-disabled": (f = unref(o)) == null ? void 0 : f.dataDisabled.value,
        "data-orientation": (m = unref(e)) == null ? void 0 : m.orientation,
        "data-state": (v = unref(o)) == null ? void 0 : v.dataState.value,
        disabled: (_ = (h2 = unref(o)) == null ? void 0 : h2.disabled) == null ? void 0 : _.value,
        onClick: a
      }, {
        default: withCtx(() => [
          renderSlot(s.$slots, "default")
        ]),
        _: 3
      }, 8, ["id", "as", "as-child", "aria-controls", "aria-disabled", "aria-expanded", "data-disabled", "data-orientation", "data-state", "disabled"]);
    };
  }
});
var Ms = ["id", "checked", "name", "disabled", "required", "data-state"];
var Go = Symbol();
var Zi = defineComponent({
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
  setup(n, { emit: t }) {
    const e = n;
    provide(Go, {
      required: e.required,
      disabled: e.disabled,
      modelValue: toRef(() => e.modelValue)
    });
    function o() {
      return t("update:modelValue", !e.modelValue);
    }
    let a;
    return (s, l) => (openBlock(), createBlock(unref(x), {
      "as-child": e.asChild,
      as: s.as,
      value: e.value,
      role: "checkbox",
      "aria-checked": e.modelValue,
      "data-state": unref(a),
      style: { position: "relative" },
      "data-disabled": e.disabled ? "" : void 0
    }, {
      default: withCtx(() => [
        createBaseVNode("input", mergeProps({
          id: e.id,
          type: "checkbox"
        }, e.modelValue, {
          checked: e.modelValue,
          name: e.name,
          "aria-hidden": "true",
          disabled: e.disabled,
          required: e.required,
          "data-state": unref(a),
          style: { opacity: "0", position: "absolute", inset: "0" },
          onChange: o
        }), null, 16, Ms),
        renderSlot(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "value", "aria-checked", "data-state", "data-disabled"]));
  }
});
var Qi = defineComponent({
  __name: "CheckboxIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(n) {
    const t = n, e = inject(Go);
    return (o, a) => {
      var s;
      return (s = unref(e)) != null && s.modelValue.value ? (openBlock(), createBlock(unref(x), {
        key: 0,
        style: { "pointer-events": "none" },
        "as-child": t.asChild,
        as: o.as,
        "data-disabled": unref(e).disabled ? "" : void 0,
        "data-state": unref(e).modelValue.value ? "checked" : "unchecked"
      }, {
        default: withCtx(() => [
          renderSlot(o.$slots, "default")
        ]),
        _: 3
      }, 8, ["as-child", "as", "data-disabled", "data-state"])) : createCommentVNode("", true);
    };
  }
});
var ks = ["id", "name", "disabled", "required", "data-state", "data-disabled"];
var Xo = Symbol();
var ji = defineComponent({
  __name: "SwitchRoot",
  props: {
    defaultChecked: { type: Boolean },
    checked: { type: Boolean },
    disabled: { type: Boolean, default: false },
    required: { type: Boolean },
    name: {},
    id: {},
    asChild: { type: Boolean, default: false },
    as: {}
  },
  emits: ["update:checked"],
  setup(n, { emit: t }) {
    const e = n, { disabled: o } = toRefs(e), a = J(e, "checked", t, {
      defaultValue: e.defaultChecked,
      passive: true
      // set passive to true so that if no props.modelValue was passed, it will still update
    });
    function s() {
      a.value = !a.value;
    }
    provide(Xo, {
      checked: a,
      toggleCheck: s,
      disabled: o
    });
    function l(r) {
      r.key === "Enter" && s();
    }
    return (r, u) => (openBlock(), createBlock(unref(x), {
      value: unref(a),
      role: "switch",
      "aria-checked": unref(a),
      "data-state": unref(a) ? "checked" : "unchecked",
      "data-disabled": unref(o) ? "" : void 0,
      "as-child": r.asChild,
      as: r.as,
      style: { position: "relative" }
    }, {
      default: withCtx(() => [
        renderSlot(r.$slots, "default"),
        createBaseVNode("input", mergeProps({
          id: r.id,
          type: "checkbox"
        }, unref(a), {
          name: r.name,
          "aria-hidden": "true",
          disabled: unref(o),
          required: r.required,
          "data-state": unref(a) ? "checked" : "unchecked",
          "data-disabled": unref(o) ? "" : void 0,
          style: { opacity: "0", position: "absolute", inset: "0" },
          onClick: s,
          onKeydown: l
        }), null, 16, ks)
      ]),
      _: 3
    }, 8, ["value", "aria-checked", "data-state", "data-disabled", "as-child", "as"]));
  }
});
var er = defineComponent({
  __name: "SwitchThumb",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(n) {
    const t = inject(Xo);
    return (e, o) => {
      var a, s, l;
      return openBlock(), createBlock(unref(x), {
        "data-state": (s = (a = unref(t)) == null ? void 0 : a.checked) != null && s.value ? "checked" : "unchecked",
        "data-disabled": (l = unref(t)) != null && l.disabled.value ? "" : void 0,
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
var qo = defineComponent({
  __name: "BaseSeparator",
  props: {
    orientation: { default: "horizontal" },
    decorative: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(n) {
    const t = n, e = ["horizontal", "vertical"];
    function o(r) {
      return e.includes(r);
    }
    const a = computed(
      () => o(t.orientation) ? t.orientation : "horizontal"
    ), s = computed(
      () => a.value === "vertical" ? t.orientation : void 0
    ), l = computed(
      () => t.decorative ? { role: "none" } : { "aria-orientation": s.value, role: "separator" }
    );
    return (r, u) => (openBlock(), createBlock(unref(x), mergeProps({
      as: r.as,
      "as-child": r.asChild,
      "data-orientation": a.value
    }, l.value), {
      default: withCtx(() => [
        renderSlot(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["as", "as-child", "data-orientation"]));
  }
});
var tr = defineComponent({
  __name: "Separator",
  props: {
    orientation: { default: "horizontal" },
    decorative: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(n) {
    const t = n;
    return (e, o) => (openBlock(), createBlock(qo, normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var nr = defineComponent({
  __name: "Label",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "label" }
  },
  setup(n) {
    const t = n;
    return (e, o) => (openBlock(), createBlock(unref(x), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Rs = defineComponent({
  __name: "ToggleRoot",
  props: {
    defaultValue: { type: Boolean },
    pressed: { type: Boolean, default: void 0 },
    disabled: { type: Boolean, default: false },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  emits: ["update:pressed"],
  setup(n, { emit: t }) {
    const e = n, o = J(e, "pressed", t, {
      defaultValue: e.defaultValue,
      passive: true
    });
    function a() {
      o.value = !o.value;
    }
    const s = computed(() => o.value ? "on" : "off");
    return (l, r) => (openBlock(), createBlock(unref(x), {
      type: l.as === "button" ? "button" : void 0,
      "as-child": e.asChild,
      as: l.as,
      "aria-pressed": unref(o),
      "data-state": s.value,
      "data-disabled": l.disabled ? "" : void 0,
      disabled: l.disabled,
      onClick: a,
      onKeydown: withKeys(a, ["enter"])
    }, {
      default: withCtx(() => [
        renderSlot(l.$slots, "default")
      ]),
      _: 3
    }, 8, ["type", "as-child", "as", "aria-pressed", "data-state", "data-disabled", "disabled", "onKeydown"]));
  }
});
var Ns = "rovingFocusGroup.onEntryFocus";
var Fs = { bubbles: false, cancelable: true };
var Ls = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function Ks(n, t) {
  return t !== "rtl" ? n : n === "ArrowLeft" ? "ArrowRight" : n === "ArrowRight" ? "ArrowLeft" : n;
}
function Vs(n, t, e) {
  const o = Ks(n.key, e);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(o)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(o)))
    return Ls[o];
}
function Jo(n) {
  const t = document.activeElement;
  for (const e of n)
    if (e === t || (e.focus(), document.activeElement !== t))
      return;
}
function Hs(n, t) {
  return n.map((e, o) => n[(t + o) % n.length]);
}
var Zo = Symbol();
var mt = defineComponent({
  __name: "RovingFocusGroup",
  props: {
    orientation: { default: "horizontal" },
    dir: { default: "ltr" },
    loop: { type: Boolean, default: false },
    currentTabStopId: {},
    defaultCurrentTabStopId: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["entryFocus", "update:currentTabStopId"],
  setup(n, { emit: t }) {
    const e = n, { loop: o, orientation: a, dir: s } = toRefs(e), l = J(e, "currentTabStopId", t, {
      defaultValue: e.defaultCurrentTabStopId
    }), r = ref(false), u = ref(false), d = ref(0), c = ds(), { primitiveElement: p, currentElement: f } = H(), { createCollection: m } = se("rovingFocus"), v = m(f);
    function h2(_) {
      const P = !u.value;
      if (_.currentTarget && _.target === _.currentTarget && P && !r.value) {
        const O = new CustomEvent(Ns, Fs);
        if (_.currentTarget.dispatchEvent(O), t("entryFocus", O), !O.defaultPrevented) {
          const E = v.value, T = E.find((A) => A === c.value), B = E.find(
            (A) => A.id === l.value
          ), D = [T, B, ...E].filter(
            Boolean
          );
          Jo(D);
        }
      }
      u.value = false;
    }
    return provide(Zo, {
      loop: o,
      dir: s,
      orientation: a,
      currentTabStopId: l,
      onItemFocus: (_) => {
        l.value = _;
      },
      onItemShiftTab: () => {
        r.value = true;
      },
      onFocusableItemAdd: () => {
        d.value++;
      },
      onFocusableItemRemove: () => {
        d.value--;
      }
    }), (_, P) => (openBlock(), createBlock(unref(x), {
      ref_key: "primitiveElement",
      ref: p,
      tabindex: r.value || d.value === 0 ? -1 : 0,
      "data-orientation": unref(a),
      as: _.as,
      "as-child": _.asChild,
      style: { outline: "none" },
      onMousedown: P[0] || (P[0] = (O) => u.value = true),
      onFocus: h2,
      onBlur: P[1] || (P[1] = (O) => r.value = false)
    }, {
      default: withCtx(() => [
        renderSlot(_.$slots, "default")
      ]),
      _: 3
    }, 8, ["tabindex", "data-orientation", "as", "as-child"]));
  }
});
var vt = defineComponent({
  __name: "RovingFocusItem",
  props: {
    tabStopId: {},
    focusable: { type: Boolean, default: true },
    active: { type: Boolean, default: true },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(n) {
    const t = n, e = inject(Zo), o = te(), a = computed(() => t.tabStopId || o), s = computed(
      () => (e == null ? void 0 : e.currentTabStopId.value) === a.value
    ), { injectCollection: l } = se("rovingFocus"), r = l(), { onFocusableItemAdd: u, onFocusableItemRemove: d } = e;
    onMounted(() => {
      t.focusable && u();
    }), onUnmounted(() => {
      t.focusable && d();
    });
    function c(p) {
      if (p.key === "Tab" && p.shiftKey) {
        e == null || e.onItemShiftTab();
        return;
      }
      if (p.target !== p.currentTarget)
        return;
      const f = Vs(
        p,
        e == null ? void 0 : e.orientation.value,
        e == null ? void 0 : e.dir.value
      );
      if (f !== void 0) {
        p.preventDefault();
        let m = [...r.value];
        if (f === "last")
          m.reverse();
        else if (f === "prev" || f === "next") {
          f === "prev" && m.reverse();
          const v = m.indexOf(
            p.currentTarget
          );
          m = e != null && e.loop.value ? Hs(m, v + 1) : m.slice(v + 1);
        }
        nextTick(() => Jo(m));
      }
    }
    return (p, f) => {
      var m;
      return openBlock(), createBlock(unref(x), {
        "data-radix-vue-collection-item": "",
        tabindex: s.value ? 0 : -1,
        "data-orientation": (m = unref(e)) == null ? void 0 : m.orientation.value,
        as: p.as,
        "as-child": p.asChild,
        onMousedown: f[0] || (f[0] = (v) => {
          var h2;
          p.focusable ? (h2 = unref(e)) == null || h2.onItemFocus(a.value) : v.preventDefault();
        }),
        onFocus: f[1] || (f[1] = (v) => {
          var h2;
          return (h2 = unref(e)) == null ? void 0 : h2.onItemFocus(a.value);
        }),
        onKeydown: c
      }, {
        default: withCtx(() => [
          renderSlot(p.$slots, "default")
        ]),
        _: 3
      }, 8, ["tabindex", "data-orientation", "as", "as-child"]);
    };
  }
});
var Qo = Symbol();
var Ws = defineComponent({
  __name: "ToggleGroupRoot",
  props: {
    type: { default: "single" },
    defaultValue: {},
    modelValue: {},
    rovingFocus: { type: Boolean, default: true },
    disabled: { type: Boolean, default: false },
    orientation: { default: "horizontal" },
    dir: { default: "ltr" },
    loop: { type: Boolean, default: true },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(n, { emit: t }) {
    const e = n, { loop: o, rovingFocus: a, disabled: s, dir: l } = toRefs(e), { modelValue: r, changeModelValue: u } = Yo(e, t);
    return provide(Qo, {
      type: e.type,
      modelValue: r,
      changeModelValue: u,
      dir: l,
      orientation: e.orientation,
      loop: o,
      rovingFocus: a,
      disabled: s
    }), (d, c) => (openBlock(), createBlock(resolveDynamicComponent(unref(a) ? unref(mt) : unref(x)), {
      "as-child": "",
      orientation: unref(a) ? d.orientation : void 0,
      dir: unref(l),
      loop: unref(a) ? unref(o) : void 0
    }, {
      default: withCtx(() => [
        createVNode(unref(x), {
          role: "group",
          "as-child": d.asChild,
          as: d.as
        }, {
          default: withCtx(() => [
            renderSlot(d.$slots, "default", { modelValue: unref(r) })
          ]),
          _: 3
        }, 8, ["as-child", "as"])
      ]),
      _: 3
    }, 8, ["orientation", "dir", "loop"]));
  }
});
var zs = defineComponent({
  __name: "ToggleGroupItem",
  props: {
    value: {},
    defaultValue: { type: Boolean },
    pressed: { type: Boolean },
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(n) {
    const t = n, e = inject(Qo), o = computed(() => {
      var a;
      return ((a = e == null ? void 0 : e.disabled) == null ? void 0 : a.value) || t.disabled;
    });
    return (a, s) => {
      var l;
      return openBlock(), createBlock(resolveDynamicComponent((l = unref(e)) != null && l.rovingFocus.value ? unref(vt) : unref(x)), {
        "as-child": "",
        focusable: !o.value,
        active: a.pressed
      }, {
        default: withCtx(() => {
          var r, u, d, c;
          return [
            createVNode(unref(Rs), mergeProps(t, {
              disabled: o.value,
              pressed: ((r = unref(e)) == null ? void 0 : r.type) === "single" ? ((u = unref(e)) == null ? void 0 : u.modelValue.value) === a.value : (c = (d = unref(e)) == null ? void 0 : d.modelValue.value) == null ? void 0 : c.includes(a.value),
              "onUpdate:pressed": s[0] || (s[0] = (p) => {
                var f;
                return (f = unref(e)) == null ? void 0 : f.changeModelValue(a.value);
              })
            }), {
              default: withCtx(() => [
                renderSlot(a.$slots, "default")
              ]),
              _: 3
            }, 16, ["disabled", "pressed"])
          ];
        }),
        _: 3
      }, 8, ["focusable", "active"]);
    };
  }
});
var or = defineComponent({
  __name: "AspectRatio",
  props: {
    ratio: { default: 1 },
    asChild: { type: Boolean },
    as: {}
  },
  setup(n) {
    const t = n, e = computed(() => 1 / t.ratio * 100);
    return (o, a) => (openBlock(), createElementBlock("div", {
      style: normalizeStyle(`position: relative; width: 100%; padding-bottom: ${e.value}%`)
    }, [
      createVNode(unref(x), {
        "as-child": o.asChild,
        as: o.as,
        style: { position: "absolute", inset: "0px" }
      }, {
        default: withCtx(() => [
          renderSlot(o.$slots, "default", { aspect: e.value })
        ]),
        _: 3
      }, 8, ["as-child", "as"])
    ], 4));
  }
});
var Kt = Symbol();
var ar = defineComponent({
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
  setup(n, { emit: t }) {
    const e = n, o = ref(), a = ref(), s = J(e, "modelValue", t, {
      defaultValue: e.defaultValue,
      passive: true
    });
    return provide(Kt, {
      modelValue: s,
      changeModelValue: (l) => {
        s.value = l, l && e.onValueChange && e.onValueChange(l);
      },
      currentFocusedElement: a,
      parentElement: o,
      orientation: e.orientation,
      dir: e.dir,
      loop: ref(true),
      activationMode: e.activationMode
    }), (l, r) => (openBlock(), createBlock(unref(x), {
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
var sr = defineComponent({
  __name: "TabsList",
  props: {
    loop: { type: Boolean, default: true },
    asChild: { type: Boolean },
    as: {}
  },
  setup(n) {
    const t = n, { loop: e } = toRefs(t), o = inject(Kt), { primitiveElement: a, currentElement: s } = H();
    return onMounted(() => {
      o.parentElement.value = s.value, o.loop = e;
    }), (l, r) => {
      var u, d;
      return openBlock(), createBlock(unref(x), {
        ref_key: "primitiveElement",
        ref: a,
        role: "tablist",
        "as-child": t.asChild,
        as: l.as,
        "aria-orientation": (u = unref(o)) == null ? void 0 : u.orientation,
        tabindex: "0",
        "data-orientation": (d = unref(o)) == null ? void 0 : d.orientation,
        style: { outline: "none" }
      }, {
        default: withCtx(() => [
          renderSlot(l.$slots, "default")
        ]),
        _: 3
      }, 8, ["as-child", "as", "aria-orientation", "data-orientation"]);
    };
  }
});
var lr = defineComponent({
  __name: "TabsContent",
  props: {
    value: {},
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(n) {
    const t = n, e = inject(Kt), o = computed(() => {
      var a;
      return ((a = e == null ? void 0 : e.modelValue) == null ? void 0 : a.value) === t.value ? "active" : "inactive";
    });
    return (a, s) => {
      var l, r, u;
      return ((r = (l = unref(e)) == null ? void 0 : l.modelValue) == null ? void 0 : r.value) === t.value ? (openBlock(), createBlock(unref(x), {
        key: 0,
        "as-child": t.asChild,
        as: a.as,
        role: "tabpanel",
        "data-state": o.value,
        "data-orientation": (u = unref(e)) == null ? void 0 : u.orientation,
        tabindex: "0"
      }, {
        default: withCtx(() => [
          renderSlot(a.$slots, "default")
        ]),
        _: 3
      }, 8, ["as-child", "as", "data-state", "data-orientation"])) : createCommentVNode("", true);
    };
  }
});
var ir = defineComponent({
  __name: "TabsTrigger",
  props: {
    value: {},
    disabled: { type: Boolean, default: false },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(n) {
    const t = n, e = inject(Kt), { primitiveElement: o, currentElement: a } = H();
    function s(u) {
      e == null || e.changeModelValue(u);
    }
    function l(u) {
      const d = pt(
        u,
        a.value,
        e == null ? void 0 : e.parentElement.value,
        {
          arrowKeyOptions: e == null ? void 0 : e.orientation,
          loop: e == null ? void 0 : e.loop.value,
          focus: true
        }
      );
      d && (e.currentFocusedElement.value = d, (e == null ? void 0 : e.activationMode) === "automatic" && s(d == null ? void 0 : d.getAttribute("data-radix-vue-tab-value")));
    }
    const r = computed(() => {
      var u, d, c;
      return (u = e == null ? void 0 : e.currentFocusedElement) != null && u.value ? ((c = e == null ? void 0 : e.currentFocusedElement) == null ? void 0 : c.value) === a.value ? "0" : "-1" : ((d = e == null ? void 0 : e.modelValue) == null ? void 0 : d.value) === t.value ? "0" : "-1";
    });
    return (u, d) => {
      var c, p, f, m, v;
      return openBlock(), createBlock(unref(x), {
        ref_key: "primitiveElement",
        ref: o,
        type: u.as === "button" ? "button" : void 0,
        as: u.as,
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
        onClick: d[0] || (d[0] = (h2) => s(t.value)),
        onKeydown: withKeys(l, ["up", "down", "left", "right", "home", "end"])
      }, {
        default: withCtx(() => [
          renderSlot(u.$slots, "default")
        ]),
        _: 3
      }, 8, ["type", "as", "as-child", "aria-selected", "data-state", "disabled", "data-disabled", "tabindex", "data-orientation", "data-radix-vue-tab-value", "onKeydown"]);
    };
  }
});
var Us = ["value", "aria-valuenow", "name"];
var An = Symbol();
var rr = defineComponent({
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
  setup(n, { emit: t }) {
    const e = n, { primitiveElement: o, currentElement: a } = H(), s = ref(), l = computed(() => e.modelValue ? e.modelValue < 50 ? (e.modelValue - 50) / 50 * 10 : (e.modelValue - 50) / 50 * -10 : 0);
    provide(An, {
      modelValue: toRef(() => e.modelValue),
      changeModelValue: (m) => {
        t("update:modelValue", m);
      },
      rootSliderElement: a,
      orientation: e.orientation,
      dir: e.dir,
      thumbOffset: l,
      min: e.min,
      max: e.max,
      step: e.step,
      thumbElement: s,
      disabled: e.disabled
    });
    function r(m) {
      t("update:modelValue", f(m, e.step));
    }
    let u;
    function d(m) {
      s.value && s.value.focus(), m.preventDefault(), a.value && (u = a.value.getBoundingClientRect(), m.clientX - 10 - l.value > u.left && m.clientX - 10 - l.value < u.left + u.width && r(
        Math.round(
          (m.clientX - 10 - l.value - u.left) / u.width * 100
        )
      ), document.addEventListener("pointermove", c), document.addEventListener("pointerup", p));
    }
    function c(m) {
      s.value && s.value.focus(), m.clientX - 10 - l.value > u.left && m.clientX - 10 - l.value < u.left + u.width && r(
        (m.clientX - 10 - l.value - u.left) / u.width * 100
      ), m.clientX - 10 - l.value <= u.left && r(e.min), m.clientX - 10 - l.value >= u.left + u.width && r(e.max);
    }
    function p(m) {
      document.removeEventListener("pointermove", c), document.removeEventListener("pointerup", p);
    }
    function f(m, v) {
      const h2 = Math.floor(m / v);
      return m % v <= v / 2 ? h2 * v : (h2 + 1) * v;
    }
    return (m, v) => (openBlock(), createBlock(unref(x), {
      ref_key: "primitiveElement",
      ref: o,
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
        }, null, 8, Us)
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
});
var ur = defineComponent({
  __name: "SliderThumb",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(n) {
    const t = n, e = inject(An), { primitiveElement: o, currentElement: a } = H();
    onMounted(() => {
      e != null && e.thumbElement && (e.thumbElement.value = a.value);
    });
    const s = 2;
    function l(r) {
      var c;
      if (!e)
        return;
      (r.keyCode === 32 || r.key === "Enter") && r.preventDefault();
      const u = Number(e == null ? void 0 : e.step), d = Number((c = e.modelValue) == null ? void 0 : c.value);
      (r.key === "ArrowUp" || r.key === "ArrowRight") && (r.shiftKey ? (r.preventDefault(), d + s >= (e == null ? void 0 : e.max) ? e == null || e.changeModelValue(e == null ? void 0 : e.max) : d + s <= (e == null ? void 0 : e.min) ? e == null || e.changeModelValue(e == null ? void 0 : e.min) : e == null || e.changeModelValue(d + s)) : (r.preventDefault(), d + u >= (e == null ? void 0 : e.max) ? e == null || e.changeModelValue(e == null ? void 0 : e.max) : d + u <= (e == null ? void 0 : e.min) ? e == null || e.changeModelValue(e == null ? void 0 : e.min) : e == null || e.changeModelValue(d + u))), (r.key === "ArrowDown" || r.key === "ArrowLeft") && (r.shiftKey ? (r.preventDefault(), d - s >= (e == null ? void 0 : e.max) ? e == null || e.changeModelValue(e == null ? void 0 : e.max) : d - s <= (e == null ? void 0 : e.min) ? e == null || e.changeModelValue(e == null ? void 0 : e.min) : e == null || e.changeModelValue(d - s)) : (r.preventDefault(), d - u >= (e == null ? void 0 : e.max) ? e == null || e.changeModelValue(e == null ? void 0 : e.max) : d - u <= (e == null ? void 0 : e.min) ? e == null || e.changeModelValue(e == null ? void 0 : e.min) : e == null || e.changeModelValue(d - u)));
    }
    return (r, u) => {
      var d, c, p, f, m, v, h2, _, P;
      return openBlock(), createElementBlock("span", {
        style: normalizeStyle(`transform: translateX(-50%); position: absolute; left: calc(${(c = (d = unref(e)) == null ? void 0 : d.modelValue) == null ? void 0 : c.value}%)`)
      }, [
        createVNode(unref(x), mergeProps(r.$attrs, {
          ref_key: "primitiveElement",
          ref: o,
          role: "slider",
          tabindex: "0",
          "data-disabled": (p = unref(e)) == null ? void 0 : p.disabled,
          "data-orientation": (f = unref(e)) == null ? void 0 : f.orientation,
          "aria-valuenow": (v = (m = unref(e)) == null ? void 0 : m.modelValue) == null ? void 0 : v.value,
          "aria-valuemin": (h2 = unref(e)) == null ? void 0 : h2.min,
          "aria-valuemax": (_ = unref(e)) == null ? void 0 : _.max,
          "aria-orientation": (P = unref(e)) == null ? void 0 : P.orientation,
          "as-child": t.asChild,
          as: r.as,
          onKeydown: l
        }), null, 16, ["data-disabled", "data-orientation", "aria-valuenow", "aria-valuemin", "aria-valuemax", "aria-orientation", "as-child", "as"])
      ], 4);
    };
  }
});
var dr = defineComponent({
  __name: "SliderTrack",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(n) {
    const t = n;
    return (e, o) => (openBlock(), createBlock(unref(x), {
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
var cr = defineComponent({
  __name: "SliderRange",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(n) {
    const t = n, e = inject(An);
    return (o, a) => {
      var s, l, r, u, d;
      return openBlock(), createBlock(unref(x), {
        "data-disabled": (s = unref(e)) == null ? void 0 : s.disabled,
        "data-orientation": (l = unref(e)) == null ? void 0 : l.orientation,
        "as-child": t.asChild,
        as: o.as,
        style: normalizeStyle(`left: 0%; right: ${(((r = unref(e)) == null ? void 0 : r.max) ?? 100) - (((d = (u = unref(e)) == null ? void 0 : u.modelValue) == null ? void 0 : d.value) ?? 0)}%`)
      }, null, 8, ["data-disabled", "data-orientation", "as-child", "as", "style"]);
    };
  }
});
var In = Symbol();
var pr = defineComponent({
  __name: "RadioGroupRoot",
  props: {
    modelValue: {},
    defaultValue: {},
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
  setup(n, { emit: t }) {
    const e = n, o = J(e, "modelValue", t, {
      defaultValue: e.defaultValue,
      passive: true
    }), { disabled: a, loop: s, orientation: l, name: r, required: u } = toRefs(e);
    return provide(In, {
      modelValue: o,
      changeModelValue: (d) => {
        o.value = d;
      },
      disabled: a,
      loop: s,
      orientation: l,
      name: r == null ? void 0 : r.value,
      required: u
    }), (d, c) => (openBlock(), createBlock(unref(mt), {
      "as-child": "",
      orientation: unref(l),
      dir: d.dir,
      loop: unref(s)
    }, {
      default: withCtx(() => [
        createVNode(unref(x), {
          role: "radiogroup",
          "data-disabled": unref(a) ? "" : void 0,
          "as-child": d.asChild,
          as: d.as,
          required: unref(u),
          "aria-orientation": unref(l),
          "aria-required": unref(u),
          dir: d.dir,
          name: unref(r)
        }, {
          default: withCtx(() => [
            renderSlot(d.$slots, "default")
          ]),
          _: 3
        }, 8, ["data-disabled", "as-child", "as", "required", "aria-orientation", "aria-required", "dir", "name"])
      ]),
      _: 3
    }, 8, ["orientation", "dir", "loop"]));
  }
});
var Ys = defineComponent({
  __name: "Radio",
  props: {
    value: {},
    disabled: { type: Boolean, default: false },
    required: { type: Boolean },
    checked: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(n) {
    const t = n, { value: e, checked: o } = toRefs(t), { primitiveElement: a, currentElement: s } = H(), l = inject(In), r = computed(
      () => s.value ? !!s.value.closest("form") : true
    ), u = ref(false);
    function d(c) {
      l == null || l.changeModelValue(e == null ? void 0 : e.value), r.value && "isPropagationStopped" in c && (u.value || c.stopPropagation());
    }
    return (c, p) => {
      var f;
      return openBlock(), createBlock(unref(x), mergeProps({
        ref_key: "primitiveElement",
        ref: a
      }, c.$attrs, {
        role: "radio",
        type: c.as === "button" ? "button" : void 0,
        as: c.as,
        "aria-checked": unref(o),
        "as-child": c.asChild,
        disabled: c.disabled ? true : void 0,
        "data-state": unref(o) ? "checked" : "unchecked",
        "data-disabled": c.disabled ? "" : void 0,
        value: unref(e),
        required: c.required,
        name: (f = unref(l)) == null ? void 0 : f.name,
        onClick: d
      }), {
        default: withCtx(() => [
          renderSlot(c.$slots, "default")
        ]),
        _: 3
      }, 16, ["type", "as", "aria-checked", "as-child", "disabled", "data-state", "data-disabled", "value", "required", "name"]);
    };
  }
});
var Gs = ["default-value", "required", "checked", "disabled"];
var jo = Symbol();
var Xs = {
  inheritAttrs: false
};
var fr = defineComponent({
  ...Xs,
  __name: "RadioGroupItem",
  props: {
    value: {},
    disabled: { type: Boolean, default: false },
    required: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(n) {
    const t = n, { value: e } = toRefs(t), { primitiveElement: o, currentElement: a } = H(), s = inject(In), l = computed(() => (s == null ? void 0 : s.disabled.value) || t.disabled), r = computed(() => (s == null ? void 0 : s.required.value) || t.required), u = computed(() => {
      var f;
      return ((f = s == null ? void 0 : s.modelValue) == null ? void 0 : f.value) === t.value;
    });
    provide(jo, { disabled: l, checked: u });
    const d = ref(false), c = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
    xe("keydown", (f) => {
      c.includes(f.key) && (d.value = true);
    }), xe("keyup", () => {
      d.value = false;
    });
    function p() {
      setTimeout(() => {
        var f;
        d.value && ((f = a.value) == null || f.click());
      }, 0);
    }
    return (f, m) => (openBlock(), createElementBlock(Fragment, null, [
      createVNode(unref(vt), {
        checked: u.value,
        disabled: l.value,
        "as-child": "",
        focusable: !l.value,
        active: u.value
      }, {
        default: withCtx(() => [
          createVNode(Ys, mergeProps({
            ref_key: "primitiveElement",
            ref: o
          }, { ...f.$attrs, ...t }, {
            checked: u.value,
            onKeydown: m[0] || (m[0] = withKeys(withModifiers(() => {
            }, ["prevent"]), ["enter"])),
            onFocus: p
          }), {
            default: withCtx(() => [
              renderSlot(f.$slots, "default")
            ]),
            _: 3
          }, 16, ["checked"])
        ]),
        _: 3
      }, 8, ["checked", "disabled", "focusable", "active"]),
      withDirectives(createBaseVNode("input", {
        "onUpdate:modelValue": m[1] || (m[1] = (v) => isRef(e) ? e.value = v : null),
        type: "radio",
        "aria-hidden": "true",
        tabindex: "-1",
        "default-value": u.value,
        required: r.value,
        checked: u.value,
        disabled: l.value,
        style: normalizeStyle(
          {
            transform: "translateX(-100%)",
            position: "absolute",
            pointerEvents: "none",
            opacity: "0",
            margin: "0px",
            width: "25px",
            height: "25px"
          }
        )
      }, null, 12, Gs), [
        [vModelRadio, unref(e)]
      ])
    ], 64));
  }
});
var mr = defineComponent({
  __name: "RadioGroupIndicator",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(n) {
    const t = inject(jo);
    return (e, o) => {
      var a, s, l;
      return (a = unref(t)) != null && a.checked.value ? (openBlock(), createBlock(unref(x), {
        key: 0,
        "data-state": (s = unref(t)) != null && s.checked.value ? "checked" : "unchecked",
        "data-disabled": (l = unref(t)) != null && l.disabled.value ? "" : void 0,
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
var lt = 100;
var ea = Symbol();
var Dn = (n) => typeof n == "number";
function qs(n, t) {
  return n === null || Dn(n) && !Number.isNaN(n) && n <= t && n >= 0 ? n : (console.error(`Invalid prop \`value\` of value \`${n}\` supplied to \`ProgressRoot\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${lt} if no \`max\` prop is set)
  - \`null\` if the progress is indeterminate.

Defaulting to \`null\`.`), null);
}
function Js(n) {
  return Dn(n) && !Number.isNaN(n) && n > 0 ? n : (console.error(
    `Invalid prop \`max\` of value \`${n}\` supplied to \`ProgressRoot\`. Only numbers greater than 0 are valid max values. Defaulting to \`${lt}\`.`
  ), lt);
}
var vr = defineComponent({
  __name: "ProgressRoot",
  props: {
    modelValue: {},
    max: { default: lt },
    getValueLabel: { type: Function, default: (n, t) => `${Math.round(n / t * lt)}%` },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue", "update:max"],
  setup(n, { emit: t }) {
    const e = n, o = J(e, "modelValue", t, {
      passive: true
    }), a = J(e, "max", t, {
      passive: true
    });
    watch(
      () => o.value,
      async (l) => {
        const r = qs(l, e.max);
        r !== l && (await nextTick(), o.value = r);
      },
      { immediate: true }
    ), watch(
      () => e.max,
      (l) => {
        const r = Js(e.max);
        r !== l && (a.value = r);
      },
      { immediate: true }
    );
    const s = computed(() => o.value ? o.value === a.value ? "complete" : "loading" : "indeterminate");
    return provide(ea, {
      modelValue: o,
      max: a,
      progressState: s
    }), (l, r) => (openBlock(), createBlock(unref(x), {
      "as-child": e.asChild,
      as: l.as,
      "aria-valuemax": unref(a),
      "aria-valuemin": 0,
      "aria-valuenow": Dn(unref(o)) ? unref(o) : void 0,
      "aria-valuetext": l.getValueLabel(unref(o), unref(a)),
      role: "progressbar",
      "data-state": s.value,
      "data-value": unref(o) ?? void 0,
      "data-max": unref(a)
    }, {
      default: withCtx(() => [
        renderSlot(l.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "aria-valuemax", "aria-valuenow", "aria-valuetext", "data-state", "data-value", "data-max"]));
  }
});
var hr = defineComponent({
  __name: "ProgressIndicator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(n) {
    const t = n, e = inject(ea);
    return (o, a) => {
      var s, l, r, u;
      return openBlock(), createBlock(unref(x), mergeProps(t, {
        "data-state": (s = unref(e)) == null ? void 0 : s.progressState.value,
        "data-value": ((r = (l = unref(e)) == null ? void 0 : l.modelValue) == null ? void 0 : r.value) ?? void 0,
        "data-max": (u = unref(e)) == null ? void 0 : u.max.value
      }), {
        default: withCtx(() => [
          renderSlot(o.$slots, "default")
        ]),
        _: 3
      }, 16, ["data-state", "data-value", "data-max"]);
    };
  }
});
var he = Symbol();
var Zs = defineComponent({
  __name: "DialogRoot",
  props: {
    open: { type: Boolean, default: void 0 },
    defaultOpen: { type: Boolean, default: false },
    modal: { type: Boolean, default: true }
  },
  emits: ["update:open"],
  setup(n, { emit: t }) {
    const e = n, o = J(e, "open", t, {
      defaultValue: e.defaultOpen,
      passive: true
    }), a = ref(), s = ref(), { modal: l } = toRefs(e);
    return provide(he, {
      open: o,
      modal: l,
      openModal: () => {
        o.value = true;
      },
      onOpenChange: (r) => {
        o.value = r;
      },
      onOpenToggle: () => {
        o.value = !o.value;
      },
      contentId: te(),
      titleId: te(),
      descriptionId: te(),
      triggerElement: a,
      contentElement: s
    }), (r, u) => renderSlot(r.$slots, "default");
  }
});
var Qs = defineComponent({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(n) {
    const t = n, e = inject(he), { primitiveElement: o, currentElement: a } = H();
    return onMounted(() => {
      e.triggerElement = a;
    }), (s, l) => {
      var r, u, d, c;
      return openBlock(), createBlock(unref(x), mergeProps({
        ref_key: "primitiveElement",
        ref: o
      }, t, {
        type: s.as === "button" ? "button" : void 0,
        "aria-haspopup": "dialog",
        "aria-expanded": ((r = unref(e)) == null ? void 0 : r.open.value) || false,
        "aria-controls": (u = unref(e)) == null ? void 0 : u.contentId,
        "data-state": (d = unref(e)) != null && d.open.value ? "open" : "closed",
        onClick: (c = unref(e)) == null ? void 0 : c.onOpenToggle
      }), {
        default: withCtx(() => [
          renderSlot(s.$slots, "default")
        ]),
        _: 3
      }, 16, ["type", "aria-expanded", "aria-controls", "data-state", "onClick"]);
    };
  }
});
var js = defineComponent({
  __name: "DialogPortal",
  props: {
    to: { default: "body" },
    disabled: { type: Boolean }
  },
  setup(n) {
    const t = n;
    return (e, o) => (openBlock(), createBlock(Teleport, normalizeProps(guardReactiveProps(t)), [
      renderSlot(e.$slots, "default")
    ], 16));
  }
});
var el = "dismissableLayer.pointerDownOutside";
var tl = "dismissableLayer.focusOutside";
function ta(n, t) {
  const e = t.closest(
    "[data-dismissable-layer]"
  ), o = n.querySelector(
    "[data-dismissable-layer]"
  );
  if (!o)
    return false;
  const a = Array.from(
    n.ownerDocument.querySelectorAll("[data-dismissable-layer]")
  );
  return o === e || a.indexOf(o) < a.indexOf(e);
}
function nl(n, t) {
  var s;
  const e = ((s = t == null ? void 0 : t.value) == null ? void 0 : s.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), o = ref(false), a = ref(() => {
  });
  return watchEffect((l) => {
    if (!ve)
      return;
    const r = async (d) => {
      if (t != null && t.value) {
        if (await nextTick(), ta(t.value, d.target)) {
          o.value = false;
          return;
        }
        if (d.target && !o.value) {
          let c = function() {
            na(
              el,
              n,
              p
            );
          };
          const p = { originalEvent: d };
          d.pointerType === "touch" ? (e.removeEventListener("click", a.value), a.value = c, e.addEventListener("click", a.value, {
            once: true
          })) : c();
        } else
          e.removeEventListener("click", a.value);
        o.value = false;
      }
    }, u = window.setTimeout(() => {
      e.addEventListener("pointerdown", r);
    }, 0);
    l(() => {
      window.clearTimeout(u), e.removeEventListener("pointerdown", r), e.removeEventListener("click", a.value);
    });
  }), {
    onPointerDownCapture: () => o.value = true
  };
}
function ol(n, t) {
  var a;
  const e = ((a = t == null ? void 0 : t.value) == null ? void 0 : a.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), o = ref(false);
  return watchEffect((s) => {
    if (!ve)
      return;
    const l = async (r) => {
      t != null && t.value && (await nextTick(), !ta(t.value, r.target) && r.target && !o.value && na(
        tl,
        n,
        { originalEvent: r }
      ));
    };
    e.addEventListener("focusin", l), s(() => e.removeEventListener("focusin", l));
  }), {
    onFocusCapture: () => o.value = true,
    onBlurCapture: () => o.value = false
  };
}
function na(n, t, e) {
  const o = e.originalEvent.target, a = new CustomEvent(n, {
    bubbles: false,
    cancelable: true,
    detail: e
  });
  t && o.addEventListener(n, t, { once: true }), o.dispatchEvent(a);
}
var je = defineComponent({
  __name: "DismissableLayer",
  props: {
    disableOutsidePointerEvents: { type: Boolean, default: false },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss"],
  setup(n, { emit: t }) {
    const e = n, { primitiveElement: o, currentElement: a } = H(), s = computed(
      () => {
        var v;
        return ((v = a.value) == null ? void 0 : v.ownerDocument) ?? globalThis.document;
      }
    ), l = ref(/* @__PURE__ */ new Set()), r = ref(/* @__PURE__ */ new Set());
    provide("dismissable", {
      layers: l,
      layersWithOutsidePointerEventsDisabled: r
    });
    const u = inject("dismissable", {
      layers: l,
      layersWithOutsidePointerEventsDisabled: r
    });
    watch(
      () => u,
      () => {
        u != null && u.layers.value && (l.value = u.layers.value), u != null && u.layersWithOutsidePointerEventsDisabled.value && (r.value = u.layersWithOutsidePointerEventsDisabled.value);
      },
      { immediate: true, deep: true }
    );
    const d = computed(() => a.value ? Array.from(l.value).indexOf(a.value) : -1), c = computed(() => r.value.size > 0), p = computed(() => {
      const v = Array.from(l.value), [h2] = [...r.value].slice(-1), _ = v.indexOf(h2);
      return d.value >= _;
    }), f = nl(async (v) => {
      p.value && (t("pointerDownOutside", v), t("interactOutside", v), await nextTick(), v.defaultPrevented || t("dismiss"));
    }, a), m = ol((v) => {
      t("focusOutside", v), t("interactOutside", v), v.defaultPrevented || t("dismiss");
    }, a);
    return us("Escape", (v) => {
      d.value === l.value.size - 1 && (t("escapeKeyDown", v), v.defaultPrevented || t("dismiss"));
    }), watchEffect((v) => {
      if (!a.value)
        return;
      let h2;
      e.disableOutsidePointerEvents && (r.value.size === 0 && (h2 = s.value.body.style.pointerEvents, s.value.body.style.pointerEvents = "none"), r.value.add(a.value)), l.value.add(a.value), v(() => {
        (e.disableOutsidePointerEvents || r.value.size === 1) && (s.value.body.style.pointerEvents = h2);
      });
    }), watchEffect((v) => {
      v(() => {
        a.value && (l.value.delete(a.value), r.value.delete(a.value));
      });
    }), (v, h2) => (openBlock(), createBlock(unref(x), {
      ref_key: "primitiveElement",
      ref: o,
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
var sn = "focusScope.autoFocusOnMount";
var ln = "focusScope.autoFocusOnUnmount";
var _o = { bubbles: false, cancelable: true };
function al(n, { select: t = false } = {}) {
  const e = document.activeElement;
  for (const o of n)
    if (Ie(o, { select: t }), document.activeElement !== e)
      return;
}
function sl(n) {
  const t = oa(n), e = bo(t, n), o = bo(t.reverse(), n);
  return [e, o];
}
function oa(n) {
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
function bo(n, t) {
  for (const e of n)
    if (!ll(e, { upTo: t }))
      return e;
}
function ll(n, { upTo: t }) {
  if (getComputedStyle(n).visibility === "hidden")
    return true;
  for (; n; ) {
    if (t !== void 0 && n === t)
      return false;
    if (getComputedStyle(n).display === "none")
      return true;
    n = n.parentElement;
  }
  return false;
}
function il(n) {
  return n instanceof HTMLInputElement && "select" in n;
}
function Ie(n, { select: t = false } = {}) {
  if (n && n.focus) {
    const e = document.activeElement;
    n.focus({ preventScroll: true }), n !== e && il(n) && t && n.select();
  }
}
var rl = En(() => ref([]));
function ul() {
  const n = rl();
  return {
    add(t) {
      const e = n.value[0];
      t !== e && (e == null || e.pause()), n.value = wo(n.value, t), n.value.unshift(t);
    },
    remove(t) {
      var e;
      n.value = wo(n.value, t), (e = n.value[0]) == null || e.resume();
    }
  };
}
function wo(n, t) {
  const e = [...n], o = e.indexOf(t);
  return o !== -1 && e.splice(o, 1), e;
}
function dl(n) {
  return n.filter((t) => t.tagName !== "A");
}
var Vt = defineComponent({
  __name: "FocusScope",
  props: {
    loop: { type: Boolean, default: false },
    trapped: { type: Boolean, default: false },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["mountAutoFocus", "unmountAutoFocus"],
  setup(n, { emit: t }) {
    const e = n, { primitiveElement: o, currentElement: a } = H(), s = ref(null), l = ul(), r = reactive({
      paused: false,
      pause() {
        this.paused = true;
      },
      resume() {
        this.paused = false;
      }
    });
    watchEffect((d) => {
      if (!ve)
        return;
      const c = a.value;
      if (!e.trapped)
        return;
      function p(h2) {
        if (r.paused || !c)
          return;
        const _ = h2.target;
        c.contains(_) ? s.value = _ : Ie(s.value, { select: true });
      }
      function f(h2) {
        if (r.paused || !c)
          return;
        const _ = h2.relatedTarget;
        _ !== null && (c.contains(_) || Ie(s.value, { select: true }));
      }
      function m(h2) {
        if (document.activeElement === document.body)
          for (const P of h2)
            P.removedNodes.length > 0 && Ie(c);
      }
      document.addEventListener("focusin", p), document.addEventListener("focusout", f);
      const v = new MutationObserver(m);
      c && v.observe(c, { childList: true, subtree: true }), d(() => {
        document.removeEventListener("focusin", p), document.removeEventListener("focusout", f), v.disconnect();
      });
    }), watchEffect(async (d) => {
      const c = a.value;
      if (await nextTick(), !c)
        return;
      l.add(r);
      const p = document.activeElement;
      if (!c.contains(p)) {
        const m = new CustomEvent(sn, _o);
        c.addEventListener(
          sn,
          (v) => t("mountAutoFocus", v)
        ), c.dispatchEvent(m), m.defaultPrevented || (al(dl(oa(c)), {
          select: true
        }), document.activeElement === p && Ie(c));
      }
      d(() => {
        c.removeEventListener(
          sn,
          (h2) => t("mountAutoFocus", h2)
        );
        const m = new CustomEvent(ln, _o), v = (h2) => {
          t("unmountAutoFocus", h2);
        };
        c.addEventListener(ln, v), c.dispatchEvent(m), setTimeout(() => {
          m.defaultPrevented || Ie(p ?? document.body, { select: true }), c.removeEventListener(ln, v), l.remove(r);
        }, 0);
      });
    });
    function u(d) {
      if (!e.loop && !e.trapped || r.paused)
        return;
      const c = d.key === "Tab" && !d.altKey && !d.ctrlKey && !d.metaKey, p = document.activeElement;
      if (c && p) {
        const f = d.currentTarget, [m, v] = sl(f);
        m && v ? !d.shiftKey && p === v ? (d.preventDefault(), e.loop && Ie(m, { select: true })) : d.shiftKey && p === m && (d.preventDefault(), e.loop && Ie(v, { select: true })) : p === f && d.preventDefault();
      }
    }
    return (d, c) => (openBlock(), createBlock(unref(x), {
      ref_key: "primitiveElement",
      ref: o,
      tabindex: "-1",
      "as-child": e.asChild,
      as: e.as,
      onKeydown: u
    }, {
      default: withCtx(() => [
        renderSlot(d.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
});
var cl = "menu.itemSelect";
var un = ["Enter", " "];
var pl = ["ArrowDown", "PageUp", "Home"];
var aa = ["ArrowUp", "PageDown", "End"];
var fl = [...pl, ...aa];
var ml = {
  ltr: [...un, "ArrowRight"],
  rtl: [...un, "ArrowLeft"]
};
var vl = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
};
function xn(n) {
  return n ? "open" : "closed";
}
function At(n) {
  return n === "indeterminate";
}
function Mn(n) {
  return At(n) ? "indeterminate" : n ? "checked" : "unchecked";
}
function dn(n) {
  const t = document.activeElement;
  for (const e of n)
    if (e === t || (e.focus(), document.activeElement !== t))
      return;
}
function hl(n, t) {
  const { x: e, y: o } = n;
  let a = false;
  for (let s = 0, l = t.length - 1; s < t.length; l = s++) {
    const r = t[s].x, u = t[s].y, d = t[l].x, c = t[l].y;
    u > o != c > o && e < (d - r) * (o - u) / (c - u) + r && (a = !a);
  }
  return a;
}
function gl(n, t) {
  if (!t)
    return false;
  const e = { x: n.clientX, y: n.clientY };
  return hl(e, t);
}
function it(n) {
  return n.pointerType === "mouse";
}
var sa = defineComponent({
  __name: "DialogContentImpl",
  props: {
    forceMount: { type: Boolean },
    trapFocus: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss", "openAutoFocus", "closeAutoFocus"],
  setup(n, { emit: t }) {
    const e = n, o = inject(he);
    return (a, s) => (openBlock(), createBlock(unref(Vt), {
      "as-child": "",
      loop: "",
      trapped: e.trapFocus,
      onMountAutoFocus: s[5] || (s[5] = (l) => t("openAutoFocus", l)),
      onUnmountAutoFocus: s[6] || (s[6] = (l) => t("closeAutoFocus", l))
    }, {
      default: withCtx(() => [
        createVNode(unref(je), mergeProps(a.$attrs, {
          id: unref(o).contentId,
          as: a.as,
          "as-child": a.asChild,
          "disable-outside-pointer-events": a.disableOutsidePointerEvents,
          role: "dialog",
          "aria-describedby": unref(o).descriptionId,
          "aria-labelledby": unref(o).titleId,
          "data-state": unref(xn)(unref(o).open.value),
          onDismiss: s[0] || (s[0] = (l) => {
            var r;
            return (r = unref(o)) == null ? void 0 : r.onOpenChange(false);
          }),
          onEscapeKeyDown: s[1] || (s[1] = (l) => t("escapeKeyDown", l)),
          onFocusOutside: s[2] || (s[2] = (l) => t("focusOutside", l)),
          onInteractOutside: s[3] || (s[3] = (l) => t("interactOutside", l)),
          onPointerDownOutside: s[4] || (s[4] = (l) => t("pointerDownOutside", l))
        }), {
          default: withCtx(() => [
            renderSlot(a.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "as", "as-child", "disable-outside-pointer-events", "aria-describedby", "aria-labelledby", "data-state"])
      ]),
      _: 3
    }, 8, ["trapped"]));
  }
});
var yl = defineComponent({
  __name: "DialogContentModal",
  props: {
    forceMount: { type: Boolean },
    trapFocus: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss", "openAutoFocus", "closeAutoFocus"],
  setup(n, { emit: t }) {
    const e = n, o = inject(he), a = X(t);
    return (s, l) => {
      var r;
      return openBlock(), createBlock(sa, mergeProps({ ...e, ...unref(a) }, {
        "trap-focus": (r = unref(o)) == null ? void 0 : r.open.value,
        "disable-outside-pointer-events": true,
        onCloseAutoFocus: l[0] || (l[0] = (u) => {
          var d, c;
          t("closeAutoFocus", u), u.defaultPrevented || (u.preventDefault(), (c = (d = unref(o)) == null ? void 0 : d.triggerElement.value) == null || c.focus());
        }),
        onPointerDownOutside: l[1] || (l[1] = (u) => {
          const d = u.detail.originalEvent, c = d.button === 0 && d.ctrlKey === true;
          (d.button === 2 || c) && u.preventDefault();
        }),
        onFocusOutside: l[2] || (l[2] = (u) => {
          u.preventDefault();
        }),
        onOpenAutoFocus: l[3] || (l[3] = (u) => t("openAutoFocus", u))
      }), {
        default: withCtx(() => [
          renderSlot(s.$slots, "default")
        ]),
        _: 3
      }, 16, ["trap-focus"]);
    };
  }
});
var _l = defineComponent({
  __name: "DialogContentNonModal",
  props: {
    forceMount: { type: Boolean },
    trapFocus: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss", "openAutoFocus", "closeAutoFocus"],
  setup(n, { emit: t }) {
    const e = n, o = X(t), a = inject(he), s = ref(false), l = ref(false);
    return (r, u) => (openBlock(), createBlock(sa, mergeProps({ ...e, ...unref(o) }, {
      "trap-focus": false,
      "disable-outside-pointer-events": false,
      onCloseAutoFocus: u[0] || (u[0] = (d) => {
        var c, p;
        t("closeAutoFocus", d), d.defaultPrevented || (s.value || (p = (c = unref(a)) == null ? void 0 : c.triggerElement.value) == null || p.focus(), d.preventDefault()), s.value = false, l.value = false;
      }),
      onInteractOutside: u[1] || (u[1] = (d) => {
        var f, m;
        d.defaultPrevented || (s.value = true, d.detail.originalEvent.type === "pointerdown" && (l.value = true));
        const c = d.target;
        ((m = (f = unref(a)) == null ? void 0 : f.triggerElement.value) == null ? void 0 : m.contains(c)) && d.preventDefault(), d.detail.originalEvent.type === "focusin" && l.value && d.preventDefault();
      })
    }), {
      default: withCtx(() => [
        renderSlot(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var bl = defineComponent({
  __name: "DialogContent",
  props: {
    forceMount: { type: Boolean },
    trapFocus: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss", "openAutoFocus", "closeAutoFocus"],
  setup(n, { emit: t }) {
    const e = n, o = inject(he), a = X(t);
    return (s, l) => (openBlock(), createBlock(unref(de), {
      present: unref(o).open.value
    }, {
      default: withCtx(() => {
        var r;
        return [
          (r = unref(o)) != null && r.modal.value ? (openBlock(), createBlock(yl, mergeProps({ key: 0 }, { ...e, ...unref(a), ...s.$attrs }, {
            onOpenAutoFocus: l[0] || (l[0] = (u) => t("openAutoFocus", u))
          }), {
            default: withCtx(() => [
              renderSlot(s.$slots, "default")
            ]),
            _: 3
          }, 16)) : (openBlock(), createBlock(_l, normalizeProps(mergeProps({ key: 1 }, { ...e, ...unref(a), ...s.$attrs })), {
            default: withCtx(() => [
              renderSlot(s.$slots, "default")
            ]),
            _: 3
          }, 16))
        ];
      }),
      _: 3
    }, 8, ["present"]));
  }
});
var wl = defineComponent({
  __name: "DialogOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(n) {
    const t = inject(he), e = Ft();
    return watch(
      () => t == null ? void 0 : t.open.value,
      (o) => e.value = o ?? false
    ), (o, a) => (openBlock(), createBlock(unref(de), {
      present: o.forceMount || unref(t).open.value
    }, {
      default: withCtx(() => {
        var s;
        return [
          createVNode(unref(x), mergeProps(o.$attrs, {
            as: o.as,
            "as-child": o.asChild,
            "data-state": (s = unref(t)) != null && s.open.value ? "open" : "closed",
            style: { "pointer-events": "auto" },
            "data-aria-hidden": "true",
            "aria-hidden": "true"
          }), {
            default: withCtx(() => [
              renderSlot(o.$slots, "default")
            ]),
            _: 3
          }, 16, ["as", "as-child", "data-state"])
        ];
      }),
      _: 3
    }, 8, ["present"]));
  }
});
var la = defineComponent({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(n) {
    const t = n, e = inject(he);
    return (o, a) => (openBlock(), createBlock(unref(x), mergeProps(t, {
      type: o.as === "button" ? "button" : void 0,
      "aria-label": "Close",
      onClick: a[0] || (a[0] = (s) => {
        var l;
        return (l = unref(e)) == null ? void 0 : l.onOpenChange(false);
      })
    }), {
      default: withCtx(() => [
        renderSlot(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["type"]));
  }
});
var Cl = defineComponent({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: { default: "h2" }
  },
  setup(n) {
    const t = n, e = inject(he);
    return (o, a) => {
      var s;
      return openBlock(), createBlock(unref(x), mergeProps(t, {
        id: (s = unref(e)) == null ? void 0 : s.descriptionId
      }), {
        default: withCtx(() => [
          renderSlot(o.$slots, "default")
        ]),
        _: 3
      }, 16, ["id"]);
    };
  }
});
var El = defineComponent({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: { default: "p" }
  },
  setup(n) {
    const t = n, e = inject(he);
    return (o, a) => {
      var s;
      return openBlock(), createBlock(unref(x), mergeProps(t, {
        id: (s = unref(e)) == null ? void 0 : s.descriptionId
      }), {
        default: withCtx(() => [
          renderSlot(o.$slots, "default")
        ]),
        _: 3
      }, 16, ["id"]);
    };
  }
});
var gr = defineComponent({
  __name: "AlertDialogRoot",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean }
  },
  emits: ["update:open"],
  setup(n, { emit: t }) {
    const e = n, o = X(t);
    return (a, s) => (openBlock(), createBlock(unref(Zs), mergeProps({ ...e, ...unref(o) }, { modal: true }), {
      default: withCtx(() => [
        renderSlot(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var yr = defineComponent({
  __name: "AlertDialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(n) {
    const t = n;
    return (e, o) => (openBlock(), createBlock(unref(Qs), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var _r = defineComponent({
  __name: "AlertDialogPortal",
  props: {
    to: {},
    disabled: { type: Boolean }
  },
  setup(n) {
    const t = n;
    return (e, o) => (openBlock(), createBlock(unref(js), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var ia = Symbol();
var br = defineComponent({
  __name: "AlertDialogContent",
  props: {
    forceMount: { type: Boolean },
    trapFocus: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss", "openAutoFocus", "closeAutoFocus"],
  setup(n, { emit: t }) {
    const e = n, o = X(t), a = ref();
    return provide(ia, {
      onCancelElementChange: (s) => {
        a.value = s;
      }
    }), (s, l) => (openBlock(), createBlock(unref(bl), mergeProps({ ...e, ...unref(o) }, {
      role: "alertdialog",
      onPointerDownOutside: l[0] || (l[0] = withModifiers(() => {
      }, ["prevent"])),
      onInteractOutside: l[1] || (l[1] = withModifiers(() => {
      }, ["prevent"])),
      onOpenAutoFocus: l[2] || (l[2] = () => {
        nextTick(() => {
          var r;
          (r = a.value) == null || r.focus({
            preventScroll: true
          });
        });
      })
    }), {
      default: withCtx(() => [
        renderSlot(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var wr = defineComponent({
  __name: "AlertDialogOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(n) {
    const t = n;
    return (e, o) => (openBlock(), createBlock(unref(wl), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Cr = defineComponent({
  __name: "AlertDialogCancel",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(n) {
    const t = n, e = inject(ia), { primitiveElement: o, currentElement: a } = H();
    return onMounted(() => {
      e.onCancelElementChange(a.value);
    }), (s, l) => (openBlock(), createBlock(unref(la), mergeProps(t, {
      ref_key: "primitiveElement",
      ref: o
    }), {
      default: withCtx(() => [
        renderSlot(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Er = defineComponent({
  __name: "AlertDialogTitle",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(n) {
    const t = n;
    return (e, o) => (openBlock(), createBlock(unref(Cl), normalizeProps(guardReactiveProps(t)), {
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
    asChild: { type: Boolean },
    as: {}
  },
  setup(n) {
    const t = n;
    return (e, o) => (openBlock(), createBlock(unref(El), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var $r = defineComponent({
  __name: "AlertDialogAction",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(n) {
    const t = n;
    return (e, o) => (openBlock(), createBlock(unref(la), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var kn = Symbol();
var Pr = defineComponent({
  __name: "ToolbarRoot",
  props: {
    orientation: { default: "horizontal" },
    dir: { default: "ltr" },
    loop: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(n) {
    const t = n, { orientation: e, dir: o } = toRefs(t);
    return provide(kn, { orientation: e, dir: o }), (a, s) => (openBlock(), createBlock(unref(mt), {
      "as-child": "",
      orientation: unref(e),
      dir: unref(o),
      loop: a.loop
    }, {
      default: withCtx(() => [
        createVNode(unref(x), {
          role: "toolbar",
          "aria-orientation": unref(e),
          "as-child": a.asChild,
          as: a.as
        }, {
          default: withCtx(() => [
            renderSlot(a.$slots, "default")
          ]),
          _: 3
        }, 8, ["aria-orientation", "as-child", "as"])
      ]),
      _: 3
    }, 8, ["orientation", "dir", "loop"]));
  }
});
var Ol = defineComponent({
  __name: "ToolbarButton",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(n) {
    const t = n;
    return (e, o) => (openBlock(), createBlock(unref(vt), {
      "as-child": "",
      focusable: !e.disabled
    }, {
      default: withCtx(() => [
        createVNode(unref(x), mergeProps({
          type: e.as === "button" ? "button" : void 0
        }, t), {
          default: withCtx(() => [
            renderSlot(e.$slots, "default")
          ]),
          _: 3
        }, 16, ["type"])
      ]),
      _: 3
    }, 8, ["focusable"]));
  }
});
var Sr = defineComponent({
  __name: "ToolbarLink",
  props: {
    asChild: { type: Boolean },
    as: { default: "a" }
  },
  setup(n) {
    const t = n;
    return (e, o) => (openBlock(), createBlock(unref(vt), {
      "as-child": "",
      focusable: ""
    }, {
      default: withCtx(() => [
        createVNode(unref(x), mergeProps(t, {
          onKeydown: o[0] || (o[0] = (a) => {
            var s;
            a.key === " " && ((s = a.currentTarget) == null || s.click());
          })
        }), {
          default: withCtx(() => [
            renderSlot(e.$slots, "default")
          ]),
          _: 3
        }, 16)
      ]),
      _: 3
    }));
  }
});
var Tr = defineComponent({
  __name: "ToolbarToggleGroup",
  props: {
    type: {},
    defaultValue: {},
    modelValue: {},
    rovingFocus: { type: Boolean },
    disabled: { type: Boolean },
    orientation: {},
    dir: {},
    loop: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(n, { emit: t }) {
    const e = n, o = inject(kn), a = X(t);
    return (s, l) => {
      var r, u;
      return openBlock(), createBlock(unref(Ws), mergeProps({ ...e, ...unref(a) }, {
        "data-orientation": (r = unref(o)) == null ? void 0 : r.orientation.value,
        dir: (u = unref(o)) == null ? void 0 : u.dir.value,
        "roving-focus": false
      }), {
        default: withCtx(() => [
          renderSlot(s.$slots, "default")
        ]),
        _: 3
      }, 16, ["data-orientation", "dir"]);
    };
  }
});
var Br = defineComponent({
  __name: "ToolbarToggleItem",
  props: {
    value: {},
    defaultValue: { type: Boolean },
    pressed: { type: Boolean },
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(n) {
    const t = n;
    return (e, o) => (openBlock(), createBlock(Ol, { "as-child": "" }, {
      default: withCtx(() => [
        createVNode(unref(zs), normalizeProps(guardReactiveProps(t)), {
          default: withCtx(() => [
            renderSlot(e.$slots, "default")
          ]),
          _: 3
        }, 16)
      ]),
      _: 3
    }));
  }
});
var Ar = defineComponent({
  __name: "ToolbarSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(n) {
    const t = n, e = inject(kn);
    return (o, a) => {
      var s;
      return openBlock(), createBlock(qo, {
        orientation: (s = unref(e)) == null ? void 0 : s.orientation.value,
        "as-child": t.asChild,
        as: o.as
      }, {
        default: withCtx(() => [
          renderSlot(o.$slots, "default")
        ]),
        _: 3
      }, 8, ["orientation", "as-child", "as"]);
    };
  }
});
var Rn = Symbol();
var Ir = defineComponent({
  __name: "AvatarRoot",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(n) {
    const t = n, e = ref("loading");
    return provide(Rn, {
      imageLoadingStatus: e
    }), (o, a) => (openBlock(), createBlock(unref(x), {
      as: o.as,
      "as-child": t.asChild
    }, {
      default: withCtx(() => [
        renderSlot(o.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
});
function $l(n) {
  const t = ref("idle"), e = ref(false);
  return onMounted(() => {
    if (!n) {
      t.value = "error";
      return;
    }
    e.value = true;
    const o = new window.Image(), a = (s) => () => {
      e.value && (t.value = s);
    };
    t.value = "loading", o.onload = a("loaded"), o.onerror = a("error"), o.src = n;
  }), onUnmounted(() => {
    e.value = false;
  }), t;
}
var Dr = defineComponent({
  __name: "AvatarImage",
  props: {
    asChild: { type: Boolean },
    as: { default: "img" }
  },
  emits: ["loadingStatusChange"],
  setup(n, { emit: t }) {
    const e = n, o = inject(Rn), a = useAttrs().src, s = $l(a);
    return watch(
      s,
      (l) => {
        t("loadingStatusChange", l), l !== "idle" && (o.imageLoadingStatus.value = l);
      },
      { immediate: true }
    ), (l, r) => unref(s) === "loaded" ? (openBlock(), createBlock(unref(x), {
      key: 0,
      "as-child": e.asChild,
      as: l.as
    }, {
      default: withCtx(() => [
        renderSlot(l.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as"])) : createCommentVNode("", true);
  }
});
var xr = defineComponent({
  __name: "AvatarFallback",
  props: {
    delayMs: { default: 0 },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(n) {
    const t = n, e = inject(Rn), o = ref(false);
    let a;
    return t.delayMs ? a = setTimeout(() => {
      o.value = true, clearTimeout(a);
    }, t.delayMs) : o.value = true, (s, l) => {
      var r;
      return o.value && ((r = unref(e)) == null ? void 0 : r.imageLoadingStatus.value) !== "loaded" ? (openBlock(), createBlock(unref(x), {
        key: 0,
        "as-child": t.asChild,
        as: s.as
      }, {
        default: withCtx(() => [
          renderSlot(s.$slots, "default")
        ]),
        _: 3
      }, 8, ["as-child", "as"])) : createCommentVNode("", true);
    };
  }
});
var Nn = Symbol();
var et = defineComponent({
  __name: "PopperRoot",
  setup(n) {
    const t = ref();
    return provide(Nn, {
      anchor: t,
      onAnchorChange: (e) => {
        t.value = e;
      }
    }), (e, o) => renderSlot(e.$slots, "default");
  }
});
var tt = defineComponent({
  __name: "PopperAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(n) {
    const t = n, { primitiveElement: e, currentElement: o } = H(), a = inject(Nn);
    return watch(o, () => {
      a == null || a.onAnchorChange(t.element ?? o.value);
    }), (s, l) => (openBlock(), createBlock(unref(x), {
      ref_key: "primitiveElement",
      ref: e,
      as: s.as,
      "as-child": s.asChild
    }, {
      default: withCtx(() => [
        renderSlot(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
});
var Pl = ["top", "right", "bottom", "left"];
var rt = Math.min;
var Ve = Math.max;
var Sl = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
var Tl = {
  start: "end",
  end: "start"
};
function cn(n, t, e) {
  return Ve(n, rt(t, e));
}
function Ee(n, t) {
  return typeof n == "function" ? n(t) : n;
}
function Oe(n) {
  return n.split("-")[0];
}
function nt(n) {
  return n.split("-")[1];
}
function Fn(n) {
  return n === "x" ? "y" : "x";
}
function Ln(n) {
  return n === "y" ? "height" : "width";
}
function ot(n) {
  return ["top", "bottom"].includes(Oe(n)) ? "y" : "x";
}
function Kn(n) {
  return Fn(ot(n));
}
function Bl(n, t, e) {
  e === void 0 && (e = false);
  const o = nt(n), a = Kn(n), s = Ln(a);
  let l = a === "x" ? o === (e ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return t.reference[s] > t.floating[s] && (l = It(l)), [l, It(l)];
}
function Al(n) {
  const t = It(n);
  return [pn(n), t, pn(t)];
}
function pn(n) {
  return n.replace(/start|end/g, (t) => Tl[t]);
}
function Il(n, t, e) {
  const o = ["left", "right"], a = ["right", "left"], s = ["top", "bottom"], l = ["bottom", "top"];
  switch (n) {
    case "top":
    case "bottom":
      return e ? t ? a : o : t ? o : a;
    case "left":
    case "right":
      return t ? s : l;
    default:
      return [];
  }
}
function Dl(n, t, e, o) {
  const a = nt(n);
  let s = Il(Oe(n), e === "start", o);
  return a && (s = s.map((l) => l + "-" + a), t && (s = s.concat(s.map(pn)))), s;
}
function It(n) {
  return n.replace(/left|right|bottom|top/g, (t) => Sl[t]);
}
function xl(n) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...n
  };
}
function ra(n) {
  return typeof n != "number" ? xl(n) : {
    top: n,
    right: n,
    bottom: n,
    left: n
  };
}
function Dt(n) {
  return {
    ...n,
    top: n.y,
    left: n.x,
    right: n.x + n.width,
    bottom: n.y + n.height
  };
}
function Co(n, t, e) {
  let {
    reference: o,
    floating: a
  } = n;
  const s = ot(t), l = Kn(t), r = Ln(l), u = Oe(t), d = s === "y", c = o.x + o.width / 2 - a.width / 2, p = o.y + o.height / 2 - a.height / 2, f = o[r] / 2 - a[r] / 2;
  let m;
  switch (u) {
    case "top":
      m = {
        x: c,
        y: o.y - a.height
      };
      break;
    case "bottom":
      m = {
        x: c,
        y: o.y + o.height
      };
      break;
    case "right":
      m = {
        x: o.x + o.width,
        y: p
      };
      break;
    case "left":
      m = {
        x: o.x - a.width,
        y: p
      };
      break;
    default:
      m = {
        x: o.x,
        y: o.y
      };
  }
  switch (nt(t)) {
    case "start":
      m[l] -= f * (e && d ? -1 : 1);
      break;
    case "end":
      m[l] += f * (e && d ? -1 : 1);
      break;
  }
  return m;
}
var Ml = async (n, t, e) => {
  const {
    placement: o = "bottom",
    strategy: a = "absolute",
    middleware: s = [],
    platform: l
  } = e, r = s.filter(Boolean), u = await (l.isRTL == null ? void 0 : l.isRTL(t));
  let d = await l.getElementRects({
    reference: n,
    floating: t,
    strategy: a
  }), {
    x: c,
    y: p
  } = Co(d, o, u), f = o, m = {}, v = 0;
  for (let h2 = 0; h2 < r.length; h2++) {
    const {
      name: _,
      fn: P
    } = r[h2], {
      x: O,
      y: E,
      data: T,
      reset: B
    } = await P({
      x: c,
      y: p,
      initialPlacement: o,
      placement: f,
      strategy: a,
      middlewareData: m,
      rects: d,
      platform: l,
      elements: {
        reference: n,
        floating: t
      }
    });
    if (c = O ?? c, p = E ?? p, m = {
      ...m,
      [_]: {
        ...m[_],
        ...T
      }
    }, B && v <= 50) {
      v++, typeof B == "object" && (B.placement && (f = B.placement), B.rects && (d = B.rects === true ? await l.getElementRects({
        reference: n,
        floating: t,
        strategy: a
      }) : B.rects), {
        x: c,
        y: p
      } = Co(d, f, u)), h2 = -1;
      continue;
    }
  }
  return {
    x: c,
    y: p,
    placement: f,
    strategy: a,
    middlewareData: m
  };
};
async function ut(n, t) {
  var e;
  t === void 0 && (t = {});
  const {
    x: o,
    y: a,
    platform: s,
    rects: l,
    elements: r,
    strategy: u
  } = n, {
    boundary: d = "clippingAncestors",
    rootBoundary: c = "viewport",
    elementContext: p = "floating",
    altBoundary: f = false,
    padding: m = 0
  } = Ee(t, n), v = ra(m), _ = r[f ? p === "floating" ? "reference" : "floating" : p], P = Dt(await s.getClippingRect({
    element: (e = await (s.isElement == null ? void 0 : s.isElement(_))) == null || e ? _ : _.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(r.floating)),
    boundary: d,
    rootBoundary: c,
    strategy: u
  })), O = p === "floating" ? {
    ...l.floating,
    x: o,
    y: a
  } : l.reference, E = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(r.floating)), T = await (s.isElement == null ? void 0 : s.isElement(E)) ? await (s.getScale == null ? void 0 : s.getScale(E)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, B = Dt(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: O,
    offsetParent: E,
    strategy: u
  }) : O);
  return {
    top: (P.top - B.top + v.top) / T.y,
    bottom: (B.bottom - P.bottom + v.bottom) / T.y,
    left: (P.left - B.left + v.left) / T.x,
    right: (B.right - P.right + v.right) / T.x
  };
}
var kl = (n) => ({
  name: "arrow",
  options: n,
  async fn(t) {
    const {
      x: e,
      y: o,
      placement: a,
      rects: s,
      platform: l,
      elements: r
    } = t, {
      element: u,
      padding: d = 0
    } = Ee(n, t) || {};
    if (u == null)
      return {};
    const c = ra(d), p = {
      x: e,
      y: o
    }, f = Kn(a), m = Ln(f), v = await l.getDimensions(u), h2 = f === "y", _ = h2 ? "top" : "left", P = h2 ? "bottom" : "right", O = h2 ? "clientHeight" : "clientWidth", E = s.reference[m] + s.reference[f] - p[f] - s.floating[m], T = p[f] - s.reference[f], B = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(u));
    let D = B ? B[O] : 0;
    (!D || !await (l.isElement == null ? void 0 : l.isElement(B))) && (D = r.floating[O] || s.floating[m]);
    const A = E / 2 - T / 2, W = D / 2 - v[m] / 2 - 1, I = rt(c[_], W), R = rt(c[P], W), K = I, U = D - v[m] - R, Y = D / 2 - v[m] / 2 + A, Q = cn(K, Y, U), ne = nt(a) != null && Y != Q && s.reference[m] / 2 - (Y < K ? I : R) - v[m] / 2 < 0 ? Y < K ? K - Y : U - Y : 0;
    return {
      [f]: p[f] - ne,
      data: {
        [f]: Q,
        centerOffset: Y - Q + ne
      }
    };
  }
});
var Rl = function(n) {
  return n === void 0 && (n = {}), {
    name: "flip",
    options: n,
    async fn(t) {
      var e;
      const {
        placement: o,
        middlewareData: a,
        rects: s,
        initialPlacement: l,
        platform: r,
        elements: u
      } = t, {
        mainAxis: d = true,
        crossAxis: c = true,
        fallbackPlacements: p,
        fallbackStrategy: f = "bestFit",
        fallbackAxisSideDirection: m = "none",
        flipAlignment: v = true,
        ...h2
      } = Ee(n, t), _ = Oe(o), P = Oe(l) === l, O = await (r.isRTL == null ? void 0 : r.isRTL(u.floating)), E = p || (P || !v ? [It(l)] : Al(l));
      !p && m !== "none" && E.push(...Dl(l, v, m, O));
      const T = [l, ...E], B = await ut(t, h2), D = [];
      let A = ((e = a.flip) == null ? void 0 : e.overflows) || [];
      if (d && D.push(B[_]), c) {
        const K = Bl(o, s, O);
        D.push(B[K[0]], B[K[1]]);
      }
      if (A = [...A, {
        placement: o,
        overflows: D
      }], !D.every((K) => K <= 0)) {
        var W, I;
        const K = (((W = a.flip) == null ? void 0 : W.index) || 0) + 1, U = T[K];
        if (U)
          return {
            data: {
              index: K,
              overflows: A
            },
            reset: {
              placement: U
            }
          };
        let Y = (I = A.filter((Q) => Q.overflows[0] <= 0).sort((Q, oe) => Q.overflows[1] - oe.overflows[1])[0]) == null ? void 0 : I.placement;
        if (!Y)
          switch (f) {
            case "bestFit": {
              var R;
              const Q = (R = A.map((oe) => [oe.placement, oe.overflows.filter((ne) => ne > 0).reduce((ne, Ue) => ne + Ue, 0)]).sort((oe, ne) => oe[1] - ne[1])[0]) == null ? void 0 : R[0];
              Q && (Y = Q);
              break;
            }
            case "initialPlacement":
              Y = l;
              break;
          }
        if (o !== Y)
          return {
            reset: {
              placement: Y
            }
          };
      }
      return {};
    }
  };
};
function Eo(n, t) {
  return {
    top: n.top - t.height,
    right: n.right - t.width,
    bottom: n.bottom - t.height,
    left: n.left - t.width
  };
}
function Oo(n) {
  return Pl.some((t) => n[t] >= 0);
}
var Nl = function(n) {
  return n === void 0 && (n = {}), {
    name: "hide",
    options: n,
    async fn(t) {
      const {
        rects: e
      } = t, {
        strategy: o = "referenceHidden",
        ...a
      } = Ee(n, t);
      switch (o) {
        case "referenceHidden": {
          const s = await ut(t, {
            ...a,
            elementContext: "reference"
          }), l = Eo(s, e.reference);
          return {
            data: {
              referenceHiddenOffsets: l,
              referenceHidden: Oo(l)
            }
          };
        }
        case "escaped": {
          const s = await ut(t, {
            ...a,
            altBoundary: true
          }), l = Eo(s, e.floating);
          return {
            data: {
              escapedOffsets: l,
              escaped: Oo(l)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function Fl(n, t) {
  const {
    placement: e,
    platform: o,
    elements: a
  } = n, s = await (o.isRTL == null ? void 0 : o.isRTL(a.floating)), l = Oe(e), r = nt(e), u = ot(e) === "y", d = ["left", "top"].includes(l) ? -1 : 1, c = s && u ? -1 : 1, p = Ee(t, n);
  let {
    mainAxis: f,
    crossAxis: m,
    alignmentAxis: v
  } = typeof p == "number" ? {
    mainAxis: p,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...p
  };
  return r && typeof v == "number" && (m = r === "end" ? v * -1 : v), u ? {
    x: m * c,
    y: f * d
  } : {
    x: f * d,
    y: m * c
  };
}
var Ll = function(n) {
  return n === void 0 && (n = 0), {
    name: "offset",
    options: n,
    async fn(t) {
      const {
        x: e,
        y: o
      } = t, a = await Fl(t, n);
      return {
        x: e + a.x,
        y: o + a.y,
        data: a
      };
    }
  };
};
var Kl = function(n) {
  return n === void 0 && (n = {}), {
    name: "shift",
    options: n,
    async fn(t) {
      const {
        x: e,
        y: o,
        placement: a
      } = t, {
        mainAxis: s = true,
        crossAxis: l = false,
        limiter: r = {
          fn: (_) => {
            let {
              x: P,
              y: O
            } = _;
            return {
              x: P,
              y: O
            };
          }
        },
        ...u
      } = Ee(n, t), d = {
        x: e,
        y: o
      }, c = await ut(t, u), p = ot(Oe(a)), f = Fn(p);
      let m = d[f], v = d[p];
      if (s) {
        const _ = f === "y" ? "top" : "left", P = f === "y" ? "bottom" : "right", O = m + c[_], E = m - c[P];
        m = cn(O, m, E);
      }
      if (l) {
        const _ = p === "y" ? "top" : "left", P = p === "y" ? "bottom" : "right", O = v + c[_], E = v - c[P];
        v = cn(O, v, E);
      }
      const h2 = r.fn({
        ...t,
        [f]: m,
        [p]: v
      });
      return {
        ...h2,
        data: {
          x: h2.x - e,
          y: h2.y - o
        }
      };
    }
  };
};
var Vl = function(n) {
  return n === void 0 && (n = {}), {
    options: n,
    fn(t) {
      const {
        x: e,
        y: o,
        placement: a,
        rects: s,
        middlewareData: l
      } = t, {
        offset: r = 0,
        mainAxis: u = true,
        crossAxis: d = true
      } = Ee(n, t), c = {
        x: e,
        y: o
      }, p = ot(a), f = Fn(p);
      let m = c[f], v = c[p];
      const h2 = Ee(r, t), _ = typeof h2 == "number" ? {
        mainAxis: h2,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...h2
      };
      if (u) {
        const E = f === "y" ? "height" : "width", T = s.reference[f] - s.floating[E] + _.mainAxis, B = s.reference[f] + s.reference[E] - _.mainAxis;
        m < T ? m = T : m > B && (m = B);
      }
      if (d) {
        var P, O;
        const E = f === "y" ? "width" : "height", T = ["top", "left"].includes(Oe(a)), B = s.reference[p] - s.floating[E] + (T && ((P = l.offset) == null ? void 0 : P[p]) || 0) + (T ? 0 : _.crossAxis), D = s.reference[p] + s.reference[E] + (T ? 0 : ((O = l.offset) == null ? void 0 : O[p]) || 0) - (T ? _.crossAxis : 0);
        v < B ? v = B : v > D && (v = D);
      }
      return {
        [f]: m,
        [p]: v
      };
    }
  };
};
var Hl = function(n) {
  return n === void 0 && (n = {}), {
    name: "size",
    options: n,
    async fn(t) {
      const {
        placement: e,
        rects: o,
        platform: a,
        elements: s
      } = t, {
        apply: l = () => {
        },
        ...r
      } = Ee(n, t), u = await ut(t, r), d = Oe(e), c = nt(e), p = ot(e) === "y", {
        width: f,
        height: m
      } = o.floating;
      let v, h2;
      d === "top" || d === "bottom" ? (v = d, h2 = c === (await (a.isRTL == null ? void 0 : a.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (h2 = d, v = c === "end" ? "top" : "bottom");
      const _ = m - u[v], P = f - u[h2], O = !t.middlewareData.shift;
      let E = _, T = P;
      if (p) {
        const D = f - u.left - u.right;
        T = c || O ? rt(P, D) : D;
      } else {
        const D = m - u.top - u.bottom;
        E = c || O ? rt(_, D) : D;
      }
      if (O && !c) {
        const D = Ve(u.left, 0), A = Ve(u.right, 0), W = Ve(u.top, 0), I = Ve(u.bottom, 0);
        p ? T = f - 2 * (D !== 0 || A !== 0 ? D + A : Ve(u.left, u.right)) : E = m - 2 * (W !== 0 || I !== 0 ? W + I : Ve(u.top, u.bottom));
      }
      await l({
        ...t,
        availableWidth: T,
        availableHeight: E
      });
      const B = await a.getDimensions(s.floating);
      return f !== B.width || m !== B.height ? {
        reset: {
          rects: true
        }
      } : {};
    }
  };
};
function ue(n) {
  var t;
  return ((t = n.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function ce(n) {
  return ue(n).getComputedStyle(n);
}
function ua(n) {
  return n instanceof ue(n).Node;
}
function Me(n) {
  return ua(n) ? (n.nodeName || "").toLowerCase() : "#document";
}
function pe(n) {
  return n instanceof ue(n).HTMLElement;
}
function ye(n) {
  return n instanceof ue(n).Element;
}
function $o(n) {
  return typeof ShadowRoot < "u" && (n instanceof ue(n).ShadowRoot || n instanceof ShadowRoot);
}
function dt(n) {
  const { overflow: t, overflowX: e, overflowY: o, display: a } = ce(n);
  return /auto|scroll|overlay|hidden|clip/.test(t + o + e) && !["inline", "contents"].includes(a);
}
function Wl(n) {
  return ["table", "td", "th"].includes(Me(n));
}
function fn(n) {
  const t = Vn(), e = ce(n);
  return e.transform !== "none" || e.perspective !== "none" || !t && !!e.backdropFilter && e.backdropFilter !== "none" || !t && !!e.filter && e.filter !== "none" || ["transform", "perspective", "filter"].some((o) => (e.willChange || "").includes(o)) || ["paint", "layout", "strict", "content"].some((o) => (e.contain || "").includes(o));
}
function Vn() {
  return !(typeof CSS > "u" || !CSS.supports) && CSS.supports("-webkit-backdrop-filter", "none");
}
function Ht(n) {
  return ["html", "body", "#document"].includes(Me(n));
}
var mn = Math.min;
var Ge = Math.max;
var xt = Math.round;
var Pt = Math.floor;
var He = (n) => ({ x: n, y: n });
function da(n) {
  const t = ce(n);
  let e = parseFloat(t.width) || 0, o = parseFloat(t.height) || 0;
  const a = pe(n), s = a ? n.offsetWidth : e, l = a ? n.offsetHeight : o, r = xt(e) !== s || xt(o) !== l;
  return r && (e = s, o = l), { width: e, height: o, $: r };
}
function Hn(n) {
  return ye(n) ? n : n.contextElement;
}
function Xe(n) {
  const t = Hn(n);
  if (!pe(t))
    return He(1);
  const e = t.getBoundingClientRect(), { width: o, height: a, $: s } = da(t);
  let l = (s ? xt(e.width) : e.width) / o, r = (s ? xt(e.height) : e.height) / a;
  return l && Number.isFinite(l) || (l = 1), r && Number.isFinite(r) || (r = 1), { x: l, y: r };
}
var Po = He(0);
function ca(n, t, e) {
  var o, a;
  if (t === void 0 && (t = true), !Vn())
    return Po;
  const s = n ? ue(n) : window;
  return !e || t && e !== s ? Po : { x: ((o = s.visualViewport) == null ? void 0 : o.offsetLeft) || 0, y: ((a = s.visualViewport) == null ? void 0 : a.offsetTop) || 0 };
}
function We(n, t, e, o) {
  t === void 0 && (t = false), e === void 0 && (e = false);
  const a = n.getBoundingClientRect(), s = Hn(n);
  let l = He(1);
  t && (o ? ye(o) && (l = Xe(o)) : l = Xe(n));
  const r = ca(s, e, o);
  let u = (a.left + r.x) / l.x, d = (a.top + r.y) / l.y, c = a.width / l.x, p = a.height / l.y;
  if (s) {
    const f = ue(s), m = o && ye(o) ? ue(o) : o;
    let v = f.frameElement;
    for (; v && o && m !== f; ) {
      const h2 = Xe(v), _ = v.getBoundingClientRect(), P = getComputedStyle(v), O = _.left + (v.clientLeft + parseFloat(P.paddingLeft)) * h2.x, E = _.top + (v.clientTop + parseFloat(P.paddingTop)) * h2.y;
      u *= h2.x, d *= h2.y, c *= h2.x, p *= h2.y, u += O, d += E, v = ue(v).frameElement;
    }
  }
  return Dt({ width: c, height: p, x: u, y: d });
}
function _e(n) {
  return ((ua(n) ? n.ownerDocument : n.document) || window.document).documentElement;
}
function Wt(n) {
  return ye(n) ? { scrollLeft: n.scrollLeft, scrollTop: n.scrollTop } : { scrollLeft: n.pageXOffset, scrollTop: n.pageYOffset };
}
function pa(n) {
  return We(_e(n)).left + Wt(n).scrollLeft;
}
function Je(n) {
  if (Me(n) === "html")
    return n;
  const t = n.assignedSlot || n.parentNode || $o(n) && n.host || _e(n);
  return $o(t) ? t.host : t;
}
function fa(n) {
  const t = Je(n);
  return Ht(t) ? n.ownerDocument ? n.ownerDocument.body : n.body : pe(t) && dt(t) ? t : fa(t);
}
function Mt(n, t) {
  var e;
  t === void 0 && (t = []);
  const o = fa(n), a = o === ((e = n.ownerDocument) == null ? void 0 : e.body), s = ue(o);
  return a ? t.concat(s, s.visualViewport || [], dt(o) ? o : []) : t.concat(o, Mt(o));
}
function So(n, t, e) {
  let o;
  if (t === "viewport")
    o = function(a, s) {
      const l = ue(a), r = _e(a), u = l.visualViewport;
      let d = r.clientWidth, c = r.clientHeight, p = 0, f = 0;
      if (u) {
        d = u.width, c = u.height;
        const m = Vn();
        (!m || m && s === "fixed") && (p = u.offsetLeft, f = u.offsetTop);
      }
      return { width: d, height: c, x: p, y: f };
    }(n, e);
  else if (t === "document")
    o = function(a) {
      const s = _e(a), l = Wt(a), r = a.ownerDocument.body, u = Ge(s.scrollWidth, s.clientWidth, r.scrollWidth, r.clientWidth), d = Ge(s.scrollHeight, s.clientHeight, r.scrollHeight, r.clientHeight);
      let c = -l.scrollLeft + pa(a);
      const p = -l.scrollTop;
      return ce(r).direction === "rtl" && (c += Ge(s.clientWidth, r.clientWidth) - u), { width: u, height: d, x: c, y: p };
    }(_e(n));
  else if (ye(t))
    o = function(a, s) {
      const l = We(a, true, s === "fixed"), r = l.top + a.clientTop, u = l.left + a.clientLeft, d = pe(a) ? Xe(a) : He(1);
      return { width: a.clientWidth * d.x, height: a.clientHeight * d.y, x: u * d.x, y: r * d.y };
    }(t, e);
  else {
    const a = ca(n);
    o = { ...t, x: t.x - a.x, y: t.y - a.y };
  }
  return Dt(o);
}
function ma(n, t) {
  const e = Je(n);
  return !(e === t || !ye(e) || Ht(e)) && (ce(e).position === "fixed" || ma(e, t));
}
function To(n, t) {
  return pe(n) && ce(n).position !== "fixed" ? t ? t(n) : n.offsetParent : null;
}
function Bo(n, t) {
  const e = ue(n);
  if (!pe(n))
    return e;
  let o = To(n, t);
  for (; o && Wl(o) && ce(o).position === "static"; )
    o = To(o, t);
  return o && (Me(o) === "html" || Me(o) === "body" && ce(o).position === "static" && !fn(o)) ? e : o || function(a) {
    let s = Je(a);
    for (; pe(s) && !Ht(s); ) {
      if (fn(s))
        return s;
      s = Je(s);
    }
    return null;
  }(n) || e;
}
function zl(n, t, e) {
  const o = pe(t), a = _e(t), s = e === "fixed", l = We(n, true, s, t);
  let r = { scrollLeft: 0, scrollTop: 0 };
  const u = He(0);
  if (o || !o && !s)
    if ((Me(t) !== "body" || dt(a)) && (r = Wt(t)), pe(t)) {
      const d = We(t, true, s, t);
      u.x = d.x + t.clientLeft, u.y = d.y + t.clientTop;
    } else
      a && (u.x = pa(a));
  return { x: l.left + r.scrollLeft - u.x, y: l.top + r.scrollTop - u.y, width: l.width, height: l.height };
}
var Ul = { getClippingRect: function(n) {
  let { element: t, boundary: e, rootBoundary: o, strategy: a } = n;
  const s = e === "clippingAncestors" ? function(d, c) {
    const p = c.get(d);
    if (p)
      return p;
    let f = Mt(d).filter((_) => ye(_) && Me(_) !== "body"), m = null;
    const v = ce(d).position === "fixed";
    let h2 = v ? Je(d) : d;
    for (; ye(h2) && !Ht(h2); ) {
      const _ = ce(h2), P = fn(h2);
      P || _.position !== "fixed" || (m = null), (v ? !P && !m : !P && _.position === "static" && m && ["absolute", "fixed"].includes(m.position) || dt(h2) && !P && ma(d, h2)) ? f = f.filter((O) => O !== h2) : m = _, h2 = Je(h2);
    }
    return c.set(d, f), f;
  }(t, this._c) : [].concat(e), l = [...s, o], r = l[0], u = l.reduce((d, c) => {
    const p = So(t, c, a);
    return d.top = Ge(p.top, d.top), d.right = mn(p.right, d.right), d.bottom = mn(p.bottom, d.bottom), d.left = Ge(p.left, d.left), d;
  }, So(t, r, a));
  return { width: u.right - u.left, height: u.bottom - u.top, x: u.left, y: u.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(n) {
  let { rect: t, offsetParent: e, strategy: o } = n;
  const a = pe(e), s = _e(e);
  if (e === s)
    return t;
  let l = { scrollLeft: 0, scrollTop: 0 }, r = He(1);
  const u = He(0);
  if ((a || !a && o !== "fixed") && ((Me(e) !== "body" || dt(s)) && (l = Wt(e)), pe(e))) {
    const d = We(e);
    r = Xe(e), u.x = d.x + e.clientLeft, u.y = d.y + e.clientTop;
  }
  return { width: t.width * r.x, height: t.height * r.y, x: t.x * r.x - l.scrollLeft * r.x + u.x, y: t.y * r.y - l.scrollTop * r.y + u.y };
}, isElement: ye, getDimensions: function(n) {
  return da(n);
}, getOffsetParent: Bo, getDocumentElement: _e, getScale: Xe, async getElementRects(n) {
  let { reference: t, floating: e, strategy: o } = n;
  const a = this.getOffsetParent || Bo, s = this.getDimensions;
  return { reference: zl(t, await a(e), o), floating: { x: 0, y: 0, ...await s(e) } };
}, getClientRects: (n) => Array.from(n.getClientRects()), isRTL: (n) => ce(n).direction === "rtl" };
function Yl(n, t, e, o) {
  o === void 0 && (o = {});
  const { ancestorScroll: a = true, ancestorResize: s = true, elementResize: l = true, layoutShift: r = typeof IntersectionObserver == "function", animationFrame: u = false } = o, d = Hn(n), c = a || s ? [...d ? Mt(d) : [], ...Mt(t)] : [];
  c.forEach((h2) => {
    a && h2.addEventListener("scroll", e, { passive: true }), s && h2.addEventListener("resize", e);
  });
  const p = d && r ? function(h2, _) {
    let P, O = null;
    const E = _e(h2);
    function T() {
      clearTimeout(P), O && O.disconnect(), O = null;
    }
    return function B(D, A) {
      D === void 0 && (D = false), A === void 0 && (A = 1), T();
      const { left: W, top: I, width: R, height: K } = h2.getBoundingClientRect();
      if (D || _(), !R || !K)
        return;
      const U = Pt(I), Y = Pt(E.clientWidth - (W + R)), Q = Pt(E.clientHeight - (I + K)), oe = Pt(W);
      let ne = true;
      O = new IntersectionObserver((Ue) => {
        const st = Ue[0].intersectionRatio;
        if (st !== A) {
          if (!ne)
            return B();
          st ? B(false, st) : P = setTimeout(() => {
            B(false, 1e-7);
          }, 100);
        }
        ne = false;
      }, { rootMargin: -U + "px " + -Y + "px " + -Q + "px " + -oe + "px", threshold: Ge(0, mn(1, A)) || 1 }), O.observe(h2);
    }(true), T;
  }(d, e) : null;
  let f, m = null;
  l && (m = new ResizeObserver(e), d && !u && m.observe(d), m.observe(t));
  let v = u ? We(n) : null;
  return u && function h2() {
    const _ = We(n);
    !v || _.x === v.x && _.y === v.y && _.width === v.width && _.height === v.height || e(), v = _, f = requestAnimationFrame(h2);
  }(), e(), () => {
    c.forEach((h2) => {
      a && h2.removeEventListener("scroll", e), s && h2.removeEventListener("resize", e);
    }), p && p(), m && m.disconnect(), m = null, u && cancelAnimationFrame(f);
  };
}
var Gl = (n, t, e) => {
  const o = /* @__PURE__ */ new Map(), a = { platform: Ul, ...e }, s = { ...a.platform, _c: o };
  return Ml(n, t, { ...a, platform: s });
};
function vn(n) {
  var t;
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
function Xl(n) {
  return {
    name: "arrow",
    options: n,
    fn(t) {
      const e = vn(unref(n.element));
      return e == null ? {} : kl({
        element: e,
        padding: n.padding
      }).fn(t);
    }
  };
}
function va(n) {
  return typeof window > "u" ? 1 : (n.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Ao(n, t) {
  const e = va(n);
  return Math.round(t * e) / e;
}
function ql(n, t, e) {
  e === void 0 && (e = {});
  const o = e.whileElementsMounted, a = computed(() => {
    var A;
    return (A = unref(e.open)) != null ? A : true;
  }), s = computed(() => unref(e.middleware)), l = computed(() => {
    var A;
    return (A = unref(e.placement)) != null ? A : "bottom";
  }), r = computed(() => {
    var A;
    return (A = unref(e.strategy)) != null ? A : "absolute";
  }), u = computed(() => {
    var A;
    return (A = unref(e.transform)) != null ? A : true;
  }), d = computed(() => vn(n.value)), c = computed(() => vn(t.value)), p = ref(0), f = ref(0), m = ref(r.value), v = ref(l.value), h2 = shallowRef({}), _ = ref(false), P = computed(() => {
    const A = {
      position: m.value,
      left: "0",
      top: "0"
    };
    if (!c.value)
      return A;
    const W = Ao(c.value, p.value), I = Ao(c.value, f.value);
    return u.value ? {
      ...A,
      transform: "translate(" + W + "px, " + I + "px)",
      ...va(c.value) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: m.value,
      left: W + "px",
      top: I + "px"
    };
  });
  let O;
  function E() {
    d.value == null || c.value == null || Gl(d.value, c.value, {
      middleware: s.value,
      placement: l.value,
      strategy: r.value
    }).then((A) => {
      p.value = A.x, f.value = A.y, m.value = A.strategy, v.value = A.placement, h2.value = A.middlewareData, _.value = true;
    });
  }
  function T() {
    typeof O == "function" && (O(), O = void 0);
  }
  function B() {
    if (T(), o === void 0) {
      E();
      return;
    }
    if (d.value != null && c.value != null) {
      O = o(d.value, c.value, E);
      return;
    }
  }
  function D() {
    a.value || (_.value = false);
  }
  return watch([s, l, r], E, {
    flush: "sync"
  }), watch([d, c], B, {
    flush: "sync"
  }), watch(a, D, {
    flush: "sync"
  }), getCurrentScope() && onScopeDispose(T), {
    x: shallowReadonly(p),
    y: shallowReadonly(f),
    strategy: shallowReadonly(m),
    placement: shallowReadonly(v),
    middlewareData: shallowReadonly(h2),
    isPositioned: shallowReadonly(_),
    floatingStyles: P,
    update: E
  };
}
function Jl(n) {
  return n !== null;
}
function Zl(n) {
  return {
    name: "transformOrigin",
    options: n,
    fn(t) {
      var _, P, O;
      const { placement: e, rects: o, middlewareData: a } = t, l = ((_ = a.arrow) == null ? void 0 : _.centerOffset) !== 0, r = l ? 0 : n.arrowWidth, u = l ? 0 : n.arrowHeight, [d, c] = hn(e), p = { start: "0%", center: "50%", end: "100%" }[c], f = (((P = a.arrow) == null ? void 0 : P.x) ?? 0) + r / 2, m = (((O = a.arrow) == null ? void 0 : O.y) ?? 0) + u / 2;
      let v = "", h2 = "";
      return d === "bottom" ? (v = l ? p : `${f}px`, h2 = `${-u}px`) : d === "top" ? (v = l ? p : `${f}px`, h2 = `${o.floating.height + u}px`) : d === "right" ? (v = `${-u}px`, h2 = l ? p : `${m}px`) : d === "left" && (v = `${o.floating.width + u}px`, h2 = l ? p : `${m}px`), { data: { x: v, y: h2 } };
    }
  };
}
function hn(n) {
  const [t, e = "center"] = n.split("-");
  return [t, e];
}
var Te = {
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
var ha = Symbol();
var Ql = {
  inheritAttrs: false
};
var ht = defineComponent({
  ...Ql,
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
    ...Te
  }),
  setup(n, { expose: t }) {
    const e = n, o = inject(Nn), { primitiveElement: a, currentElement: s } = H(), l = ref(), r = ref(), u = ref(), { width: d, height: c } = ws(u), p = computed(
      () => e.side + (e.align !== "center" ? `-${e.align}` : "")
    ), f = computed(() => typeof e.collisionPadding == "number" ? e.collisionPadding : { top: 0, right: 0, bottom: 0, left: 0, ...e.collisionPadding }), m = computed(() => Array.isArray(e.collisionBoundary) ? e.collisionBoundary : [e.collisionBoundary]), v = computed(() => ({
      padding: f.value,
      boundary: m.value.filter(Jl),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: m.value.length > 0
    })), h2 = ts(() => [
      Ll({
        mainAxis: e.sideOffset + c.value,
        alignmentAxis: e.alignOffset
      }),
      e.avoidCollisions && Kl({
        mainAxis: true,
        crossAxis: !!e.prioritizePosition,
        limiter: e.sticky === "partial" ? Vl() : void 0,
        ...v.value
      }),
      !e.prioritizePosition && e.avoidCollisions && Rl({
        ...v.value
      }),
      Hl({
        ...v.value,
        apply: ({ elements: R, rects: K, availableWidth: U, availableHeight: Y }) => {
          const { width: Q, height: oe } = K.reference, ne = R.floating.style;
          Object.assign(R.floating.style, {
            maxWidth: `${U}px`,
            maxHeight: `${Y}px`
          }), ne.setProperty(
            "--radix-popper-available-width",
            `${U}px`
          ), ne.setProperty(
            "--radix-popper-available-height",
            `${Y}px`
          ), ne.setProperty(
            "--radix-popper-anchor-width",
            `${Q}px`
          ), ne.setProperty(
            "--radix-popper-anchor-height",
            `${oe}px`
          );
        }
      }),
      u.value && Xl({ element: u.value, padding: e.arrowPadding }),
      Zl({
        arrowWidth: d.value,
        arrowHeight: c.value
      }),
      e.hideWhenDetached && Nl({ strategy: "referenceHidden", ...v.value })
    ]), { floatingStyles: _, placement: P, isPositioned: O, middlewareData: E } = ql(
      o.anchor,
      l,
      {
        strategy: "fixed",
        placement: p,
        whileElementsMounted: (...R) => Yl(...R, {
          animationFrame: e.updatePositionStrategy === "always"
        }),
        middleware: h2
      }
    ), T = computed(
      () => hn(P.value)[0]
    ), B = computed(
      () => hn(P.value)[1]
    );
    watchEffect(() => {
      var R;
      O.value && ((R = e.onPlaced) == null || R.call(e));
    });
    const D = computed(
      () => {
        var R;
        return ((R = E.value.arrow) == null ? void 0 : R.centerOffset) !== 0;
      }
    ), A = ref("");
    watchEffect(() => {
      r.value && (A.value = window.getComputedStyle(r.value).zIndex);
    });
    const W = computed(() => {
      var R;
      return ((R = E.value.arrow) == null ? void 0 : R.x) ?? 0;
    }), I = computed(() => {
      var R;
      return ((R = E.value.arrow) == null ? void 0 : R.y) ?? 0;
    });
    return provide(ha, {
      placedSide: T,
      onArrowChange: (R) => {
        u.value = R;
      },
      arrowX: W,
      arrowY: I,
      shouldHideArrow: D
    }), t({
      $el: s
    }), (R, K) => {
      var U, Y, Q;
      return openBlock(), createElementBlock("div", {
        ref_key: "floatingRef",
        ref: l,
        "data-radix-popper-content-wrapper": "",
        style: normalizeStyle({
          ...unref(_),
          transform: unref(O) ? unref(_).transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: A.value,
          ["--radix-popper-transform-origin"]: [
            (U = unref(E).transformOrigin) == null ? void 0 : U.x,
            (Y = unref(E).transformOrigin) == null ? void 0 : Y.y
          ].join(" ")
        })
      }, [
        createVNode(unref(x), mergeProps({
          ref_key: "primitiveElement",
          ref: a
        }, R.$attrs, {
          "as-child": e.asChild,
          as: R.as,
          "data-side": T.value,
          "data-align": B.value,
          style: {
            // if the PopperContent hasn't been placed yet (not all measurements done)
            // we prevent animations so that users's animation don't kick in too early referring wrong sides
            animation: unref(O) ? void 0 : "none",
            // hide the content if using the hide middleware and should be hidden
            opacity: (Q = unref(E).hide) != null && Q.referenceHidden ? 0 : void 0
          }
        }), {
          default: withCtx(() => [
            renderSlot(R.$slots, "default")
          ]),
          _: 3
        }, 16, ["as-child", "as", "data-side", "data-align", "style"])
      ], 4);
    };
  }
});
var jl = createBaseVNode("polygon", { points: "0,0 30,0 15,10" }, null, -1);
var ei = defineComponent({
  __name: "Arrow",
  props: {
    width: { default: 10 },
    height: { default: 5 },
    asChild: { type: Boolean },
    as: { default: "svg" }
  },
  setup(n) {
    const t = n, { primitiveElement: e } = H();
    return (o, a) => (openBlock(), createBlock(unref(x), mergeProps({
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
          jl
        ])
      ]),
      _: 3
    }, 16, ["width", "height"]));
  }
});
var ti = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
};
var ni = {
  inheritAttrs: false
};
var gt = defineComponent({
  ...ni,
  __name: "PopperArrow",
  props: {
    width: {},
    height: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(n) {
    const t = inject(ha), e = computed(
      () => t != null && t.placedSide ? ti[t == null ? void 0 : t.placedSide.value] : ""
    );
    return (o, a) => {
      var s, l, r, u;
      return openBlock(), createElementBlock("span", {
        ref: (d) => {
          unref(t).onArrowChange(d);
        },
        style: normalizeStyle({
          position: "absolute",
          left: (s = unref(t).arrowX) != null && s.value ? `${(l = unref(t).arrowX) == null ? void 0 : l.value}px` : void 0,
          top: (r = unref(t).arrowY) != null && r.value ? `${(u = unref(t).arrowY) == null ? void 0 : u.value}px` : void 0,
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
        createVNode(ei, mergeProps(o.$attrs, { style: {
          display: "block"
        } }), null, 16)
      ], 4);
    };
  }
});
var ga = "tooltip.open";
function oi(n, t) {
  const e = Math.abs(t.top - n.y), o = Math.abs(t.bottom - n.y), a = Math.abs(t.right - n.x), s = Math.abs(t.left - n.x);
  switch (Math.min(e, o, a, s)) {
    case s:
      return "left";
    case a:
      return "right";
    case e:
      return "top";
    case o:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function ai(n, t, e = 5) {
  const o = [];
  switch (t) {
    case "top":
      o.push(
        { x: n.x - e, y: n.y + e },
        { x: n.x + e, y: n.y + e }
      );
      break;
    case "bottom":
      o.push(
        { x: n.x - e, y: n.y - e },
        { x: n.x + e, y: n.y - e }
      );
      break;
    case "left":
      o.push(
        { x: n.x + e, y: n.y - e },
        { x: n.x + e, y: n.y + e }
      );
      break;
    case "right":
      o.push(
        { x: n.x - e, y: n.y - e },
        { x: n.x - e, y: n.y + e }
      );
      break;
  }
  return o;
}
function si(n) {
  const { top: t, right: e, bottom: o, left: a } = n;
  return [
    { x: a, y: t },
    { x: e, y: t },
    { x: e, y: o },
    { x: a, y: o }
  ];
}
function li(n, t) {
  const { x: e, y: o } = n;
  let a = false;
  for (let s = 0, l = t.length - 1; s < t.length; l = s++) {
    const r = t[s].x, u = t[s].y, d = t[l].x, c = t[l].y;
    u > o != c > o && e < (d - r) * (o - u) / (c - u) + r && (a = !a);
  }
  return a;
}
function ii(n) {
  const t = n.slice();
  return t.sort((e, o) => e.x < o.x ? -1 : e.x > o.x ? 1 : e.y < o.y ? -1 : e.y > o.y ? 1 : 0), ri(t);
}
function ri(n) {
  if (n.length <= 1)
    return n.slice();
  const t = [];
  for (let o = 0; o < n.length; o++) {
    const a = n[o];
    for (; t.length >= 2; ) {
      const s = t[t.length - 1], l = t[t.length - 2];
      if ((s.x - l.x) * (a.y - l.y) >= (s.y - l.y) * (a.x - l.x))
        t.pop();
      else
        break;
    }
    t.push(a);
  }
  t.pop();
  const e = [];
  for (let o = n.length - 1; o >= 0; o--) {
    const a = n[o];
    for (; e.length >= 2; ) {
      const s = e[e.length - 1], l = e[e.length - 2];
      if ((s.x - l.x) * (a.y - l.y) >= (s.y - l.y) * (a.x - l.x))
        e.pop();
      else
        break;
    }
    e.push(a);
  }
  return e.pop(), t.length === 1 && e.length === 1 && t[0].x === e[0].x && t[0].y === e[0].y ? t : t.concat(e);
}
var zt = Symbol();
var Mr = defineComponent({
  __name: "TooltipProvider",
  props: {
    delayDuration: { default: 700 },
    skipDelayDuration: { default: 300 },
    disableHoverableContent: { type: Boolean, default: false }
  },
  setup(n) {
    const t = n, { delayDuration: e, skipDelayDuration: o, disableHoverableContent: a } = toRefs(t), s = ref(true), l = ref(false), { start: r, stop: u } = Ko(() => {
      s.value = true;
    }, o, { immediate: false });
    return provide(zt, {
      isOpenDelayed: s,
      delayDuration: e,
      onOpen() {
        u(), s.value = false;
      },
      onClose() {
        r();
      },
      isPointerInTransitRef: l,
      onPointerInTransitChange(d) {
        l.value = d;
      },
      disableHoverableContent: a
    }), (d, c) => renderSlot(d.$slots, "default");
  }
});
var yt = Symbol();
var kr = defineComponent({
  __name: "TooltipRoot",
  props: {
    defaultOpen: { type: Boolean, default: false },
    open: { type: Boolean, default: void 0 },
    delayDuration: { default: void 0 },
    disableHoverableContent: { type: Boolean, default: void 0 }
  },
  emits: ["update:open"],
  setup(n, { emit: t }) {
    const e = n, o = inject(zt), a = computed(() => e.disableHoverableContent ?? (o == null ? void 0 : o.disableHoverableContent.value) ?? false), s = computed(() => e.delayDuration ?? (o == null ? void 0 : o.delayDuration.value) ?? 700), l = J(e, "open", t, {
      defaultValue: e.defaultOpen,
      passive: true
    });
    watch(l, (h2) => {
      o != null && o.onClose && (h2 ? (o.onOpen(), document.dispatchEvent(new CustomEvent(ga))) : o.onClose());
    });
    const r = ref(false), u = ref(), d = computed(() => l.value ? r.value ? "delayed-open" : "instant-open" : "closed"), { start: c, stop: p } = Ko(() => {
      r.value = true, l.value = true;
    }, s, { immediate: false });
    function f() {
      p(), r.value = false, l.value = true;
    }
    function m() {
      p(), l.value = false;
    }
    function v() {
      c();
    }
    return provide(yt, {
      contentId: te(),
      open: l,
      stateAttribute: d,
      trigger: u,
      onTriggerChange(h2) {
        u.value = h2;
      },
      onTriggerEnter() {
        o != null && o.isOpenDelayed.value ? v() : f();
      },
      onTriggerLeave() {
        a.value ? m() : p();
      },
      onOpen: f,
      onClose: m,
      disableHoverableContent: a
    }), (h2, _) => (openBlock(), createBlock(unref(et), null, {
      default: withCtx(() => [
        renderSlot(h2.$slots, "default")
      ]),
      _: 3
    }));
  }
});
var Rr = defineComponent({
  __name: "TooltipTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(n) {
    const t = n, e = inject(yt), o = inject(zt), { primitiveElement: a, currentElement: s } = H(), l = ref(false), r = ref(false);
    function u() {
      l.value = false;
    }
    function d() {
      l.value = true, document.addEventListener("pointerup", u, { once: true });
    }
    return onMounted(() => {
      e == null || e.onTriggerChange(s.value);
    }), (c, p) => (openBlock(), createBlock(unref(tt), { "as-child": "" }, {
      default: withCtx(() => {
        var f, m;
        return [
          createVNode(unref(x), {
            ref_key: "primitiveElement",
            ref: a,
            "aria-describedby": (f = unref(e)) != null && f.open.value ? unref(e).contentId : void 0,
            "data-state": (m = unref(e)) == null ? void 0 : m.stateAttribute.value,
            as: c.as,
            "as-child": t.asChild,
            onPointermove: p[0] || (p[0] = (v) => {
              var h2, _;
              v.pointerType !== "touch" && !r.value && !((h2 = unref(o)) != null && h2.isPointerInTransitRef.value) && ((_ = unref(e)) == null || _.onTriggerEnter(), r.value = true);
            }),
            onPointerleave: p[1] || (p[1] = (v) => {
              var h2;
              (h2 = unref(e)) == null || h2.onTriggerLeave(), r.value = false;
            }),
            onPointerdown: d,
            onFocus: p[2] || (p[2] = () => {
              var v;
              l.value || (v = unref(e)) == null || v.onOpen();
            }),
            onBlur: p[3] || (p[3] = (v) => {
              var h2;
              return (h2 = unref(e)) == null ? void 0 : h2.onClose();
            }),
            onClick: p[4] || (p[4] = (v) => {
              var h2;
              return (h2 = unref(e)) == null ? void 0 : h2.onClose();
            })
          }, {
            default: withCtx(() => [
              renderSlot(c.$slots, "default")
            ]),
            _: 3
          }, 8, ["aria-describedby", "data-state", "as", "as-child"])
        ];
      }),
      _: 3
    }));
  }
});
var Wn = defineComponent({
  __name: "VisuallyHidden",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(n) {
    return (t, e) => (openBlock(), createBlock(unref(x), {
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
var ya = defineComponent({
  __name: "TooltipContentImpl",
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
  setup(n, { emit: t }) {
    const e = n, o = ref(), a = inject(yt), s = computed(() => {
      var c, p;
      if (e.ariaLabel)
        return e.ariaLabel;
      const r = (p = (c = useSlots()).default) == null ? void 0 : p.call(c);
      let u = "";
      function d(f) {
        typeof f.children == "string" ? u += f.children : Array.isArray(f.children) && f.children.forEach((m) => d(m));
      }
      return r == null || r.forEach((f) => d(f)), u;
    }), l = computed(() => ({
      as: e.as,
      asChild: e.asChild,
      side: e.side,
      sideOffset: e.sideOffset,
      align: e.align,
      alignOffset: e.alignOffset,
      avoidCollisions: e.avoidCollisions,
      collisionBoundary: e.collisionBoundary,
      collisionPadding: e.collisionPadding,
      arrowPadding: e.arrowPadding,
      sticky: e.sticky,
      hideWhenDetached: e.hideWhenDetached
    }));
    return onMounted(() => {
      xe(window, "scroll", (r) => {
        const u = r.target;
        u != null && u.contains(a.trigger.value) && a.onClose();
      }), xe(window, ga, a.onClose);
    }), (r, u) => (openBlock(), createBlock(unref(je), {
      "as-child": "",
      "disable-outside-pointer-events": false,
      onEscapeKeyDown: u[0] || (u[0] = (d) => t("escapeKeyDown", d)),
      onPointerDownOutside: u[1] || (u[1] = (d) => t("pointerDownOutside", d)),
      onFocusOutside: u[2] || (u[2] = withModifiers(() => {
      }, ["prevent"])),
      onDismiss: u[3] || (u[3] = (d) => {
        var c;
        return (c = unref(a)) == null ? void 0 : c.onClose();
      })
    }, {
      default: withCtx(() => {
        var d;
        return [
          createVNode(unref(ht), mergeProps({
            ref_key: "contentElement",
            ref: o,
            "data-state": (d = unref(a)) == null ? void 0 : d.stateAttribute.value
          }, { ...r.$attrs, ...l.value }, { style: {
            "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
            "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
            "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
            "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
          } }), {
            default: withCtx(() => {
              var c;
              return [
                renderSlot(r.$slots, "default"),
                createVNode(unref(Wn), {
                  id: (c = unref(a)) == null ? void 0 : c.contentId,
                  role: "tooltip"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(s.value), 1)
                  ]),
                  _: 1
                }, 8, ["id"])
              ];
            }),
            _: 3
          }, 16, ["data-state", "style"])
        ];
      }),
      _: 3
    }));
  }
});
var ui = defineComponent({
  __name: "TooltipContentHoverable",
  props: {
    ariaLabel: {},
    asChild: { type: Boolean },
    as: {},
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean }
  },
  setup(n) {
    const t = n, { primitiveElement: e, currentElement: o } = H(), a = inject(yt), s = inject(zt), { trigger: l, onClose: r } = a, u = ref(null);
    function d() {
      u.value = null, s == null || s.onPointerInTransitChange(false);
    }
    function c(p, f) {
      const m = p.currentTarget, v = { x: p.clientX, y: p.clientY }, h2 = oi(v, m.getBoundingClientRect()), _ = ai(v, h2), P = si(f.getBoundingClientRect()), O = ii([..._, ...P]);
      u.value = O, s == null || s.onPointerInTransitChange(true);
    }
    return watchEffect((p) => {
      if (l.value && o.value) {
        const f = (v) => c(v, o.value), m = (v) => c(v, l.value);
        l.value.addEventListener("pointerleave", f), o.value.addEventListener("pointerleave", m), p(() => {
          var v, h2;
          (v = l.value) == null || v.removeEventListener("pointerleave", f), (h2 = o.value) == null || h2.removeEventListener("pointerleave", m);
        });
      }
    }), watchEffect((p) => {
      if (u.value) {
        const f = (m) => {
          var O, E;
          if (!u.value)
            return;
          const v = m.target, h2 = { x: m.clientX, y: m.clientY }, _ = ((O = l.value) == null ? void 0 : O.contains(v)) || ((E = o.value) == null ? void 0 : E.contains(v)), P = !li(h2, u.value);
          _ ? d() : P && (d(), r());
        };
        document.addEventListener("pointermove", f), p(() => document.removeEventListener("pointermove", f));
      }
    }), (p, f) => (openBlock(), createBlock(ya, mergeProps({
      ref_key: "primitiveElement",
      ref: e
    }, t), {
      default: withCtx(() => [
        renderSlot(p.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Nr = defineComponent({
  __name: "TooltipContent",
  props: {
    ariaLabel: {},
    asChild: { type: Boolean },
    as: {},
    side: { default: "top" },
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean }
  },
  emits: ["escapeKeyDown", "pointerDownOutside"],
  setup(n, { emit: t }) {
    const e = n, o = X(t), a = inject(yt);
    return (s, l) => {
      var r, u;
      return (r = unref(a)) != null && r.open.value ? (openBlock(), createBlock(resolveDynamicComponent((u = unref(a)) != null && u.disableHoverableContent.value ? ya : ui), normalizeProps(mergeProps({ key: 0 }, { ...e, ...unref(o) })), {
        default: withCtx(() => [
          renderSlot(s.$slots, "default")
        ]),
        _: 3
      }, 16)) : createCommentVNode("", true);
    };
  }
});
var Fr = defineComponent({
  __name: "TooltipArrow",
  props: {
    width: { default: 10 },
    height: { default: 5 },
    asChild: { type: Boolean, default: false },
    as: {}
  },
  setup(n) {
    const t = n;
    return (e, o) => (openBlock(), createBlock(unref(gt), {
      "as-child": t.asChild,
      as: e.as,
      height: t.height,
      width: t.width
    }, null, 8, ["as-child", "as", "height", "width"]));
  }
});
var Lr = defineComponent({
  __name: "TooltipPortal",
  props: {
    to: { default: "body" },
    disabled: { type: Boolean }
  },
  setup(n) {
    const t = n;
    return (e, o) => (openBlock(), createBlock(Teleport, normalizeProps(guardReactiveProps(t)), [
      renderSlot(e.$slots, "default")
    ], 16));
  }
});
var zn = Symbol();
var Kr = defineComponent({
  __name: "HoverCardRoot",
  props: {
    defaultOpen: { type: Boolean, default: false },
    open: { type: Boolean, default: void 0 },
    openDelay: { default: 700 },
    closeDelay: { default: 300 }
  },
  emits: ["update:open"],
  setup(n, { emit: t }) {
    const e = n, o = J(e, "open", t, {
      defaultValue: e.defaultOpen,
      passive: true
    });
    return provide(zn, {
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
    }), (a, s) => (openBlock(), createBlock(unref(et), null, {
      default: withCtx(() => [
        renderSlot(a.$slots, "default")
      ]),
      _: 3
    }));
  }
});
var Vr = defineComponent({
  __name: "HoverCardTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(n) {
    const t = n, e = inject(zn), { primitiveElement: o, currentElement: a } = H();
    async function s(r) {
      await _s(
        r,
        a.value,
        e == null ? void 0 : e.openDelay
      ) && (e == null || e.showTooltip());
    }
    async function l(r) {
      e.isHover = false, await zo(r, e == null ? void 0 : e.closeDelay) && !(e != null && e.isHover) && (e == null || e.hideTooltip());
    }
    return (r, u) => (openBlock(), createBlock(unref(tt), { "as-child": "" }, {
      default: withCtx(() => {
        var d, c;
        return [
          createVNode(unref(x), {
            ref_key: "primitiveElement",
            ref: o,
            "as-child": t.asChild,
            as: r.as,
            "aria-expanded": ((d = unref(e)) == null ? void 0 : d.open.value) || false,
            "data-state": (c = unref(e)) != null && c.open.value ? "open" : "closed",
            style: { cursor: "default" },
            onMouseover: u[0] || (u[0] = (p) => unref(e).isHover = true),
            onMouseenter: s,
            onMouseleave: l
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
var Hr = defineComponent({
  __name: "HoverCardPortal",
  props: {
    to: { default: "body" },
    disabled: { type: Boolean }
  },
  setup(n) {
    const t = n;
    return (e, o) => (openBlock(), createBlock(Teleport, normalizeProps(guardReactiveProps(t)), [
      renderSlot(e.$slots, "default")
    ], 16));
  }
});
var Wr = defineComponent({
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
  setup(n) {
    const t = n, e = inject(zn);
    async function o(a) {
      e.isHover = false, await zo(a, e == null ? void 0 : e.closeDelay) && !(e != null && e.isHover) && (e == null || e.hideTooltip());
    }
    return (a, s) => (openBlock(), createBlock(unref(de), {
      present: unref(e).open.value
    }, {
      default: withCtx(() => {
        var l;
        return [
          createVNode(unref(ht), mergeProps({ ...t, ...a.$attrs }, {
            "data-state": (l = unref(e)) != null && l.open.value ? "open" : "closed",
            "data-side": t.side,
            "data-align": t.align,
            onMouseover: s[0] || (s[0] = (r) => unref(e).isHover = true),
            onMouseleave: o
          }), {
            default: withCtx(() => [
              renderSlot(a.$slots, "default")
            ]),
            _: 3
          }, 16, ["data-state", "data-side", "data-align"])
        ];
      }),
      _: 3
    }, 8, ["present"]));
  }
});
var zr = defineComponent({
  __name: "HoverCardArrow",
  props: {
    width: {},
    height: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(n) {
    const t = n;
    return (e, o) => (openBlock(), createBlock(unref(gt), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Re = Symbol();
var Ur = defineComponent({
  __name: "PopoverRoot",
  props: {
    defaultOpen: { type: Boolean, default: false },
    open: { type: Boolean, default: void 0 },
    modal: { type: Boolean, default: false }
  },
  emits: ["update:open"],
  setup(n, { emit: t }) {
    const e = n, { modal: o } = toRefs(e), a = J(e, "open", t, {
      defaultValue: e.defaultOpen,
      passive: true
    }), s = ref(), l = ref(false);
    return provide(Re, {
      contentId: te(),
      modal: o,
      open: a,
      onOpenChange: (r) => {
        a.value = r;
      },
      onOpenToggle: () => {
        a.value = !a.value;
      },
      triggerElement: s,
      hasCustomAnchor: l
    }), (r, u) => (openBlock(), createBlock(unref(et), null, {
      default: withCtx(() => [
        renderSlot(r.$slots, "default")
      ]),
      _: 3
    }));
  }
});
var Yr = defineComponent({
  __name: "PopoverTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(n, { expose: t }) {
    const e = n, o = inject(Re), { primitiveElement: a, currentElement: s } = H();
    return onMounted(() => {
      o.triggerElement.value = s.value;
    }), t({ $el: s }), (l, r) => {
      var u;
      return openBlock(), createBlock(resolveDynamicComponent((u = unref(o)) != null && u.hasCustomAnchor.value ? unref(x) : unref(tt)), { "as-child": "" }, {
        default: withCtx(() => {
          var d, c, p;
          return [
            createVNode(unref(x), {
              ref_key: "primitiveElement",
              ref: a,
              type: l.as === "button" ? "button" : void 0,
              "aria-haspopup": "dialog",
              "aria-expanded": (d = unref(o)) == null ? void 0 : d.open.value,
              "aria-controls": (c = unref(o)) == null ? void 0 : c.contentId,
              "data-state": (p = unref(o)) != null && p.open.value ? "open" : "closed",
              as: l.as,
              "as-child": e.asChild,
              onClick: unref(o).onOpenToggle
            }, {
              default: withCtx(() => [
                renderSlot(l.$slots, "default")
              ]),
              _: 3
            }, 8, ["type", "aria-expanded", "aria-controls", "data-state", "as", "as-child", "onClick"])
          ];
        }),
        _: 3
      });
    };
  }
});
var Gr = defineComponent({
  __name: "PopoverPortal",
  props: {
    to: { default: "body" },
    disabled: { type: Boolean }
  },
  setup(n) {
    const t = n;
    return (e, o) => (openBlock(), createBlock(Teleport, normalizeProps(guardReactiveProps(t)), [
      renderSlot(e.$slots, "default")
    ], 16));
  }
});
var _a = defineComponent({
  __name: "PopoverContentImpl",
  props: {
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
    onPlaced: { type: Function },
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    disableOutsidePointerEvents: { type: Boolean }
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss", "openAutoFocus", "closeAutoFocus"],
  setup(n, { emit: t }) {
    const e = n, o = inject(Re);
    return $n(), (a, s) => (openBlock(), createBlock(unref(Vt), {
      "as-child": "",
      loop: "",
      trapped: a.trapFocus,
      onMountAutoFocus: s[5] || (s[5] = (l) => t("openAutoFocus", l)),
      onUnmountAutoFocus: s[6] || (s[6] = (l) => t("closeAutoFocus", l))
    }, {
      default: withCtx(() => [
        createVNode(unref(je), {
          "as-child": "",
          "disable-outside-pointer-events": a.disableOutsidePointerEvents,
          onPointerDownOutside: s[0] || (s[0] = (l) => t("pointerDownOutside", l)),
          onInteractOutside: s[1] || (s[1] = (l) => t("interactOutside", l)),
          onEscapeKeyDown: s[2] || (s[2] = (l) => t("escapeKeyDown", l)),
          onFocusOutside: s[3] || (s[3] = (l) => t("focusOutside", l)),
          onDismiss: s[4] || (s[4] = (l) => {
            var r;
            return (r = unref(o)) == null ? void 0 : r.onOpenChange(false);
          })
        }, {
          default: withCtx(() => {
            var l, r;
            return [
              createVNode(unref(ht), mergeProps(e, {
                id: (l = unref(o)) == null ? void 0 : l.contentId,
                "data-state": (r = unref(o)) != null && r.open.value ? "open" : "closed",
                role: "dialog",
                style: {
                  "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
                  "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
                  "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
                  "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
                  "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
                }
              }), {
                default: withCtx(() => [
                  renderSlot(a.$slots, "default")
                ]),
                _: 3
              }, 16, ["id", "data-state", "style"])
            ];
          }),
          _: 3
        }, 8, ["disable-outside-pointer-events"])
      ]),
      _: 3
    }, 8, ["trapped"]));
  }
});
var di = defineComponent({
  __name: "PopoverContentModal",
  props: {
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
    onPlaced: { type: Function },
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    disableOutsidePointerEvents: { type: Boolean }
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss", "openAutoFocus", "closeAutoFocus"],
  setup(n, { emit: t }) {
    const e = n, o = inject(Re), a = ref(false);
    Ft(true);
    const s = X(t);
    return (l, r) => {
      var u;
      return openBlock(), createBlock(_a, mergeProps({ ...e, ...unref(s) }, {
        "trap-focus": (u = unref(o)) == null ? void 0 : u.open.value,
        "disable-outside-pointer-events": "",
        onCloseAutoFocus: r[0] || (r[0] = withModifiers(
          (d) => {
            var c, p;
            t("closeAutoFocus", d), a.value || (p = (c = unref(o)) == null ? void 0 : c.triggerElement.value) == null || p.focus();
          },
          ["prevent"]
        )),
        onPointerDownOutside: r[1] || (r[1] = (d) => {
          t("pointerDownOutside", d);
          const c = d.detail.originalEvent, p = c.button === 0 && c.ctrlKey === true, f = c.button === 2 || p;
          a.value = f;
        }),
        onFocusOutside: r[2] || (r[2] = withModifiers(() => {
        }, ["prevent"]))
      }), {
        default: withCtx(() => [
          renderSlot(l.$slots, "default")
        ]),
        _: 3
      }, 16, ["trap-focus"]);
    };
  }
});
var ci = defineComponent({
  __name: "PopoverContentNonModal",
  props: {
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
    onPlaced: { type: Function },
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    disableOutsidePointerEvents: { type: Boolean }
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss", "openAutoFocus", "closeAutoFocus"],
  setup(n, { emit: t }) {
    const e = n, o = inject(Re), a = ref(false), s = ref(false), l = X(t);
    return (r, u) => (openBlock(), createBlock(_a, mergeProps({ ...e, ...unref(l) }, {
      "trap-focus": false,
      "disable-outside-pointer-events": false,
      onCloseAutoFocus: u[0] || (u[0] = (d) => {
        var c, p;
        t("closeAutoFocus", d), d.defaultPrevented || (a.value || (p = (c = unref(o)) == null ? void 0 : c.triggerElement.value) == null || p.focus(), d.preventDefault()), a.value = false, s.value = false;
      }),
      onInteractOutside: u[1] || (u[1] = async (d) => {
        var f, m;
        t("interactOutside", d), d.defaultPrevented || (a.value = true, d.detail.originalEvent.type === "pointerdown" && (s.value = true));
        const c = d.target;
        ((m = (f = unref(o)) == null ? void 0 : f.triggerElement.value) == null ? void 0 : m.contains(c)) && d.preventDefault(), d.detail.originalEvent.type === "focusin" && s.value && d.preventDefault();
      })
    }), {
      default: withCtx(() => [
        renderSlot(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Xr = defineComponent({
  __name: "PopoverContent",
  props: mergeDefaults({
    forceMount: { type: Boolean },
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
    onPlaced: { type: Function },
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    disableOutsidePointerEvents: { type: Boolean }
  }, {
    ...Te
  }),
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss", "openAutoFocus", "closeAutoFocus"],
  setup(n, { emit: t }) {
    const e = n, o = inject(Re), a = X(t);
    return (s, l) => (openBlock(), createBlock(unref(de), {
      present: s.forceMount || unref(o).open.value
    }, {
      default: withCtx(() => {
        var r;
        return [
          (r = unref(o)) != null && r.modal.value ? (openBlock(), createBlock(di, normalizeProps(mergeProps({ key: 0 }, { ...e, ...unref(a) })), {
            default: withCtx(() => [
              renderSlot(s.$slots, "default")
            ]),
            _: 3
          }, 16)) : (openBlock(), createBlock(ci, normalizeProps(mergeProps({ key: 1 }, { ...e, ...unref(a) })), {
            default: withCtx(() => [
              renderSlot(s.$slots, "default")
            ]),
            _: 3
          }, 16))
        ];
      }),
      _: 3
    }, 8, ["present"]));
  }
});
var qr = defineComponent({
  __name: "PopoverArrow",
  props: {
    width: {},
    height: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(n) {
    const t = n;
    return (e, o) => (openBlock(), createBlock(unref(gt), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Jr = defineComponent({
  __name: "PopoverClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(n) {
    const t = n, e = inject(Re);
    return (o, a) => (openBlock(), createBlock(unref(x), {
      type: o.as === "button" ? "button" : void 0,
      as: o.as,
      "as-child": t.asChild,
      onClick: a[0] || (a[0] = (s) => {
        var l;
        return (l = unref(e)) == null ? void 0 : l.onOpenChange(false);
      })
    }, {
      default: withCtx(() => [
        renderSlot(o.$slots, "default")
      ]),
      _: 3
    }, 8, ["type", "as", "as-child"]));
  }
});
var Zr = defineComponent({
  __name: "PopoverAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(n) {
    const t = n, e = inject(Re);
    return onBeforeMount(() => {
      e.hasCustomAnchor.value = true;
    }), onUnmounted(() => {
      e.hasCustomAnchor.value = false;
    }), (o, a) => (openBlock(), createBlock(unref(tt), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Ut = defineComponent({
  __name: "MenuAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(n) {
    const t = n;
    return (e, o) => (openBlock(), createBlock(unref(tt), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Un = defineComponent({
  __name: "MenuArrow",
  props: {
    width: {},
    height: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(n) {
    const t = n;
    return (e, o) => (openBlock(), createBlock(unref(gt), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var $e = Symbol();
var at = Symbol();
var Yn = defineComponent({
  __name: "MenuRoot",
  props: {
    open: { type: Boolean, default: false },
    onOpenChange: {},
    dir: { default: "ltr" },
    modal: { type: Boolean, default: true }
  },
  emits: ["update:open"],
  setup(n, { emit: t }) {
    const e = n, { modal: o, dir: a } = toRefs(e), s = J(e, "open", t), l = ref(), r = ref(false);
    return watchEffect((u) => {
      if (!ve)
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
      document.addEventListener("keydown", d, { capture: true }), u(() => {
        document.removeEventListener("keydown", d, { capture: true }), document.removeEventListener("pointerdown", c, {
          capture: true
        }), document.removeEventListener("pointermove", c, {
          capture: true
        });
      });
    }), provide($e, {
      open: s,
      onOpenChange: (u) => {
        s.value = u;
      },
      content: l,
      onContentChange: (u) => {
        l.value = u;
      }
    }), provide(at, {
      onClose: () => {
        s.value = false;
      },
      isUsingKeyboardRef: r,
      dir: a,
      modal: o
    }), (u, d) => (openBlock(), createBlock(unref(et), null, {
      default: withCtx(() => [
        renderSlot(u.$slots, "default")
      ]),
      _: 3
    }));
  }
});
var Yt = Symbol();
var Gn = defineComponent({
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
    ...Te
  }),
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss", "entryFocus", "openAutoFocus", "closeAutoFocus"],
  setup(n, { emit: t }) {
    const e = n, o = inject($e), a = inject(at), { trapFocus: s, disableOutsidePointerEvents: l, loop: r } = toRefs(e);
    $n(), Ft(l.value);
    const u = ref(""), d = ref(0), c = ref(0), p = ref(null), f = ref("right"), m = ref(0), v = ref(null), { createCollection: h2 } = se(), { primitiveElement: _, currentElement: P } = H(), O = h2(P);
    watch(P, (I) => {
      o.onContentChange(I);
    });
    const { handleTypeaheadSearch: E } = Sn(O);
    onUnmounted(() => {
      window.clearTimeout(d.value);
    });
    function T(I) {
      var K, U;
      return f.value === ((K = p.value) == null ? void 0 : K.side) && gl(I, (U = p.value) == null ? void 0 : U.area);
    }
    async function B(I) {
      var R;
      t("openAutoFocus", I), I.preventDefault(), (R = P.value) == null || R.focus();
    }
    function D(I) {
      const K = I.target.closest("[data-radix-menu-content]") === I.currentTarget, U = I.ctrlKey || I.altKey || I.metaKey, Y = I.key.length === 1, Q = pt(
        I,
        document.activeElement,
        P.value,
        {
          loop: r.value,
          arrowKeyOptions: "vertical",
          dir: a == null ? void 0 : a.dir.value,
          focus: true
        }
      );
      if (Q)
        return Q == null ? void 0 : Q.focus();
      if (I.code === "Space" || (K && (I.key === "Tab" && I.preventDefault(), !U && Y && E(I.key)), I.target !== P.value) || !fl.includes(I.key))
        return;
      I.preventDefault();
      const oe = O.value;
      aa.includes(I.key) && oe.reverse(), dn(oe);
    }
    function A(I) {
      var R, K;
      (K = (R = I == null ? void 0 : I.currentTarget) == null ? void 0 : R.contains) != null && K.call(R, I.target) || (window.clearTimeout(d.value), u.value = "");
    }
    function W(I) {
      var U;
      if (!it(I))
        return;
      const R = I.target, K = m.value !== I.clientX;
      if ((U = I == null ? void 0 : I.currentTarget) != null && U.contains(R) && K) {
        const Y = I.clientX > m.value ? "right" : "left";
        f.value = Y, m.value = I.clientX;
      }
    }
    return provide(Yt, {
      onItemEnter: (I) => {
        T(I) && I.preventDefault();
      },
      onItemLeave: (I) => {
        var R;
        T(I) || ((R = P.value) == null || R.focus(), v.value = null);
      },
      onTriggerLeave: (I) => {
        T(I) && I.preventDefault();
      },
      searchRef: u,
      pointerGraceTimerRef: c,
      onPointerGraceIntentChange: (I) => {
        p.value = I;
      }
    }), (I, R) => (openBlock(), createBlock(unref(Vt), {
      "as-child": "",
      trapped: unref(s),
      onMountAutoFocus: B,
      onUnmountAutoFocus: R[7] || (R[7] = (K) => t("closeAutoFocus", K))
    }, {
      default: withCtx(() => [
        createVNode(unref(je), {
          "as-child": "",
          "disable-outside-pointer-events": unref(l),
          onEscapeKeyDown: R[2] || (R[2] = (K) => t("escapeKeyDown", K)),
          onPointerDownOutside: R[3] || (R[3] = (K) => t("pointerDownOutside", K)),
          onFocusOutside: R[4] || (R[4] = (K) => t("focusOutside", K)),
          onInteractOutside: R[5] || (R[5] = (K) => t("interactOutside", K)),
          onDismiss: R[6] || (R[6] = (K) => t("dismiss"))
        }, {
          default: withCtx(() => {
            var K;
            return [
              createVNode(unref(mt), {
                "current-tab-stop-id": v.value,
                "onUpdate:currentTabStopId": R[0] || (R[0] = (U) => v.value = U),
                "as-child": "",
                dir: (K = unref(a)) == null ? void 0 : K.dir.value,
                orientation: "vertical",
                loop: unref(r),
                onEntryFocus: R[1] || (R[1] = (U) => {
                  var Y;
                  t("entryFocus", U), (Y = unref(a)) != null && Y.isUsingKeyboardRef.value || U.preventDefault();
                })
              }, {
                default: withCtx(() => [
                  createVNode(unref(ht), {
                    ref_key: "primitiveElement",
                    ref: _,
                    role: "menu",
                    as: I.as,
                    "as-child": I.asChild,
                    "aria-orientation": "vertical",
                    "data-radix-menu-content": "",
                    "data-state": unref(xn)(unref(o).open.value),
                    dir: unref(a).dir.value,
                    side: I.side,
                    "side-offset": I.sideOffset,
                    align: I.align,
                    "align-offset": I.alignOffset,
                    "avoid-collisions": I.avoidCollisions,
                    "collision-boundary": I.collisionBoundary,
                    "collision-padding": I.collisionPadding,
                    "arrow-padding": I.arrowPadding,
                    sticky: I.sticky,
                    "hide-when-detached": I.hideWhenDetached,
                    onKeydown: D,
                    onBlur: A,
                    onPointermove: W
                  }, {
                    default: withCtx(() => [
                      renderSlot(I.$slots, "default")
                    ]),
                    _: 3
                  }, 8, ["as", "as-child", "data-state", "dir", "side", "side-offset", "align", "align-offset", "avoid-collisions", "collision-boundary", "collision-padding", "arrow-padding", "sticky", "hide-when-detached"])
                ]),
                _: 3
              }, 8, ["current-tab-stop-id", "dir", "loop"])
            ];
          }),
          _: 3
        }, 8, ["disable-outside-pointer-events"])
      ]),
      _: 3
    }, 8, ["trapped"]));
  }
});
var ba = defineComponent({
  __name: "MenuItemImpl",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(n, { expose: t }) {
    const e = n, { primitiveElement: o, currentElement: a } = H(), s = inject(Yt), l = ref(false);
    async function r(d) {
      if (await nextTick(), !d.defaultPrevented && it(d)) {
        if (e.disabled)
          s.onItemLeave(d);
        else if (s.onItemEnter(d), !d.defaultPrevented) {
          const c = d.currentTarget;
          c && c.focus();
        }
      }
    }
    async function u(d) {
      await nextTick(), !d.defaultPrevented && it(d) && s.onItemLeave(d);
    }
    return t({
      el: a
    }), (d, c) => (openBlock(), createBlock(unref(x), {
      ref_key: "primitiveElement",
      ref: o,
      role: "menuitem",
      tabindex: "-1",
      as: d.as,
      "as-child": d.asChild,
      "data-radix-vue-collection-item": "",
      "aria-disabled": d.disabled || void 0,
      "data-disabled": d.disabled ? "" : void 0,
      disabled: d.disabled,
      "data-highlighted": l.value ? "" : void 0,
      onPointermove: r,
      onPointerleave: u,
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
    }, 8, ["as", "as-child", "aria-disabled", "data-disabled", "disabled", "data-highlighted"]));
  }
});
var _t = defineComponent({
  __name: "MenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(n, { emit: t }) {
    const e = n, { primitiveElement: o, currentElement: a } = H(), s = inject(at), l = inject(Yt), r = ref(false);
    async function u() {
      const d = a.value;
      if (!e.disabled && d) {
        const c = new CustomEvent(cl, {
          bubbles: true,
          cancelable: true
        });
        t("select", c), await nextTick(), c.defaultPrevented ? r.value = false : s.onClose();
      }
    }
    return (d, c) => (openBlock(), createBlock(ba, mergeProps(e, {
      ref_key: "primitiveElement",
      ref: o,
      onClick: u,
      onPointerdown: c[0] || (c[0] = () => {
        r.value = true;
      }),
      onPointerup: c[1] || (c[1] = async (p) => {
        var f;
        await nextTick(), !p.defaultPrevented && (r.value || (f = p.currentTarget) == null || f.click());
      }),
      onKeydown: c[2] || (c[2] = async (p) => {
        const f = unref(l).searchRef.value !== "";
        d.disabled || f && p.key === " " || unref(un).includes(p.key) && (p.currentTarget.click(), p.preventDefault());
      })
    }), {
      default: withCtx(() => [
        renderSlot(d.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Xn = Symbol();
var qn = defineComponent({
  __name: "MenuItemIndicator",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(n) {
    const t = inject(Xn, {
      checked: ref(false)
    });
    return (e, o) => {
      var a, s;
      return openBlock(), createBlock(unref(de), {
        present: unref(At)((a = unref(t)) == null ? void 0 : a.checked.value) || ((s = unref(t)) == null ? void 0 : s.checked.value) === true
      }, {
        default: withCtx(() => [
          createVNode(unref(x), {
            as: e.as,
            "as-child": e.asChild,
            "data-state": unref(Mn)(unref(t).checked.value)
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
var Jn = defineComponent({
  __name: "MenuCheckboxItem",
  props: {
    checked: { type: [Boolean, String], default: false },
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select", "update:checked"],
  setup(n, { emit: t }) {
    const e = n, o = J(e, "checked", t);
    return provide(Xn, {
      checked: o
    }), (a, s) => (openBlock(), createBlock(_t, mergeProps({ role: "menuitemcheckbox" }, e, {
      "aria-checked": unref(At)(unref(o)) ? "mixed" : unref(o),
      "data-state": unref(Mn)(unref(o)),
      onSelect: s[0] || (s[0] = async (l) => {
        t("select", l), unref(At)(unref(o)) ? o.value = true : o.value = !unref(o);
      })
    }), {
      default: withCtx(() => [
        renderSlot(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-checked", "data-state"]));
  }
});
var pi = defineComponent({
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
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss", "entryFocus", "openAutoFocus", "closeAutoFocus"],
  setup(n, { emit: t }) {
    const e = n, o = inject($e), a = X(t);
    return (s, l) => {
      var r, u;
      return openBlock(), createBlock(Gn, mergeProps({ ...e, ...unref(a) }, {
        "trap-focus": (r = unref(o)) == null ? void 0 : r.open.value,
        "disable-outside-pointer-events": (u = unref(o)) == null ? void 0 : u.open.value,
        "disable-outside-scroll": true,
        onDismiss: l[0] || (l[0] = (d) => {
          var c;
          return (c = unref(o)) == null ? void 0 : c.onOpenChange(false);
        }),
        onFocusOutside: l[1] || (l[1] = withModifiers((d) => t("focusOutside", d), ["prevent"]))
      }), {
        default: withCtx(() => [
          renderSlot(s.$slots, "default")
        ]),
        _: 3
      }, 16, ["trap-focus", "disable-outside-pointer-events"]);
    };
  }
});
var fi = defineComponent({
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
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss", "entryFocus", "openAutoFocus", "closeAutoFocus"],
  setup(n, { emit: t }) {
    const e = n, o = inject($e), a = X(t);
    return (s, l) => (openBlock(), createBlock(Gn, mergeProps({ ...e, ...unref(a) }, {
      "trap-focus": false,
      "disable-outside-pointer-events": false,
      "disable-outside-scroll": false,
      onDismiss: l[0] || (l[0] = (r) => {
        var u;
        return (u = unref(o)) == null ? void 0 : u.onOpenChange(false);
      })
    }), {
      default: withCtx(() => [
        renderSlot(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Zn = defineComponent({
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
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss", "entryFocus", "openAutoFocus", "closeAutoFocus"],
  setup(n, { emit: t }) {
    const e = n, o = inject($e), a = inject(at), s = X(t);
    return (l, r) => (openBlock(), createBlock(unref(de), {
      present: unref(o).open.value
    }, {
      default: withCtx(() => {
        var u;
        return [
          (u = unref(a)) != null && u.modal.value ? (openBlock(), createBlock(pi, normalizeProps(mergeProps({ key: 0 }, { ...l.$attrs, ...e, ...unref(s) })), {
            default: withCtx(() => [
              renderSlot(l.$slots, "default")
            ]),
            _: 3
          }, 16)) : (openBlock(), createBlock(fi, normalizeProps(mergeProps({ key: 1 }, { ...l.$attrs, ...e, ...unref(s) })), {
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
var Gt = defineComponent({
  __name: "MenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(n) {
    const t = n;
    return (e, o) => (openBlock(), createBlock(unref(x), mergeProps({ role: "group" }, t), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Qn = defineComponent({
  __name: "MenuLabel",
  props: {
    asChild: { type: Boolean },
    as: { default: "label" }
  },
  setup(n) {
    const t = n;
    return (e, o) => (openBlock(), createBlock(unref(x), mergeProps({ role: "group" }, t), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var jn = defineComponent({
  __name: "MenuPortal",
  props: {
    to: { default: "body" },
    disabled: { type: Boolean }
  },
  setup(n) {
    const t = n;
    return (e, o) => (openBlock(), createBlock(Teleport, normalizeProps(guardReactiveProps(t)), [
      renderSlot(e.$slots, "default")
    ], 16));
  }
});
var wa = Symbol();
var eo = defineComponent({
  __name: "MenuRadioGroup",
  props: {
    modelValue: { default: "" },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(n, { emit: t }) {
    const e = n, o = J(e, "modelValue", t);
    return provide(wa, {
      modelValue: o,
      onValueChange: (a) => {
        o.value = a;
      }
    }), (a, s) => (openBlock(), createBlock(Gt, normalizeProps(guardReactiveProps(e)), {
      default: withCtx(() => [
        renderSlot(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var to = defineComponent({
  __name: "MenuRadioItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(n, { emit: t }) {
    const e = n, { value: o } = toRefs(e), a = inject(wa), s = computed(
      () => (a == null ? void 0 : a.modelValue.value) === (o == null ? void 0 : o.value)
    );
    return provide(Xn, {
      checked: s
    }), (l, r) => (openBlock(), createBlock(_t, mergeProps({ role: "menuitemradio" }, e, {
      "aria-checked": s.value,
      "data-state": unref(Mn)(s.value),
      onSelect: r[0] || (r[0] = async (u) => {
        var d;
        t("select", u), (d = unref(a)) == null || d.onValueChange(unref(o));
      })
    }), {
      default: withCtx(() => [
        renderSlot(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-checked", "data-state"]));
  }
});
var no = defineComponent({
  __name: "MenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(n) {
    const t = n;
    return (e, o) => (openBlock(), createBlock(unref(x), mergeProps(t, {
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
var oo = Symbol();
var ao = defineComponent({
  __name: "MenuSub",
  props: {
    open: { type: Boolean }
  },
  emits: ["update:open"],
  setup(n, { emit: t }) {
    const o = J(n, "open", t, {
      defaultValue: false,
      passive: true
    }), a = inject($e), s = ref(), l = ref();
    return watchEffect((r) => {
      (a == null ? void 0 : a.open.value) === false && (o.value = false), r(() => o.value = false);
    }), provide($e, {
      open: o,
      onOpenChange: (r) => {
        o.value = r;
      },
      content: l,
      onContentChange: (r) => {
        l.value = r;
      }
    }), provide(oo, {
      triggerId: te(),
      contentId: te(),
      trigger: s,
      onTriggerChange: (r) => {
        s.value = r;
      }
    }), (r, u) => (openBlock(), createBlock(unref(et), null, {
      default: withCtx(() => [
        renderSlot(r.$slots, "default")
      ]),
      _: 3
    }));
  }
});
var so = defineComponent({
  __name: "MenuSubContent",
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
    ...Te
  }),
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss", "entryFocus", "openAutoFocus", "closeAutoFocus"],
  setup(n, { emit: t }) {
    const e = n, o = X(t), a = inject($e), s = inject(at), l = inject(oo), { primitiveElement: r, currentElement: u } = H();
    return (d, c) => (openBlock(), createBlock(unref(de), {
      present: unref(a).open.value
    }, {
      default: withCtx(() => [
        createVNode(Gn, mergeProps({ ...e, ...unref(o) }, {
          id: unref(l).contentId,
          ref_key: "primitiveElement",
          ref: r,
          "aria-labelledby": unref(l).triggerId,
          align: "start",
          side: unref(s).dir.value === "rtl" ? "left" : "right",
          "disable-outside-pointer-events": false,
          "disable-outside-scroll": false,
          "trap-focus": false,
          onOpenAutoFocus: c[0] || (c[0] = (p) => {
            var f;
            unref(s).isUsingKeyboardRef.value && ((f = unref(u)) == null || f.focus());
          }),
          onCloseAutoFocus: c[1] || (c[1] = withModifiers(() => {
          }, ["prevent"])),
          onFocusOutside: c[2] || (c[2] = async (p) => {
            p.defaultPrevented || p.target !== unref(l).trigger.value && unref(a).onOpenChange(false);
          }),
          onEscapeKeyDown: c[3] || (c[3] = (p) => {
            var f;
            (f = unref(s)) == null || f.onClose(), p.preventDefault();
          }),
          onKeydown: c[4] || (c[4] = (p) => {
            var v, h2;
            const f = (v = p.currentTarget) == null ? void 0 : v.contains(p.target), m = unref(vl)[unref(s).dir.value].includes(p.key);
            f && m && (unref(a).onOpenChange(false), (h2 = unref(l).trigger.value) == null || h2.focus(), p.preventDefault());
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
var lo = defineComponent({
  __name: "MenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(n) {
    const t = n, e = inject($e), o = inject(at), a = inject(oo), s = inject(Yt), l = ref(null), r = computed(
      () => s == null ? void 0 : s.pointerGraceTimerRef.value
    );
    function u() {
      l.value && window.clearTimeout(l.value), l.value = null;
    }
    onUnmounted(() => {
      u();
    });
    function d(f) {
      it(f) && (s.onItemEnter(f), e.onOpenChange(true), !f.defaultPrevented && !t.disabled && !(e != null && e.open.value) && !l.value && (s.onPointerGraceIntentChange(null), l.value = window.setTimeout(() => {
        u();
      }, 100)));
    }
    function c(f) {
      var v, h2;
      if (!it(f))
        return;
      u();
      const m = (v = e.content.value) == null ? void 0 : v.getBoundingClientRect();
      if (m) {
        const _ = (h2 = e.content.value) == null ? void 0 : h2.dataset.side, P = _ === "right", O = P ? -5 : 5, E = m[P ? "left" : "right"], T = m[P ? "right" : "left"];
        s.onPointerGraceIntentChange({
          area: [
            // Apply a bleed on clientX to ensure that our exit point is
            // consistently within polygon bounds
            { x: f.clientX + O, y: f.clientY },
            { x: E, y: m.top },
            { x: T, y: m.top },
            { x: T, y: m.bottom },
            { x: E, y: m.bottom }
          ],
          side: _
        }), window.clearTimeout(r.value), s.pointerGraceTimerRef.value = window.setTimeout(
          () => s.onPointerGraceIntentChange(null),
          300
        );
      } else {
        if (s.onTriggerLeave(f), f.defaultPrevented)
          return;
        s.onPointerGraceIntentChange(null);
      }
    }
    async function p(f) {
      var v;
      const m = s.searchRef.value !== "";
      t.disabled || m && f.key === " " || ml[o.dir.value].includes(f.key) && (e.onOpenChange(true), await nextTick(), (v = e.content.value) == null || v.focus(), f.preventDefault());
    }
    return (f, m) => (openBlock(), createBlock(Ut, { "as-child": "" }, {
      default: withCtx(() => {
        var v;
        return [
          createVNode(ba, {
            id: unref(a).triggerId,
            ref: (h2) => {
              var _;
              (_ = unref(a)) == null || _.onTriggerChange(h2 == null ? void 0 : h2.el);
            },
            "aria-haspopup": "menu",
            "aria-expanded": unref(e).open.value,
            "aria-controls": (v = unref(a)) == null ? void 0 : v.contentId,
            "data-state": unref(xn)(unref(e).open.value),
            onClick: m[0] || (m[0] = async (h2) => {
              t.disabled || h2.defaultPrevented || (h2.currentTarget.focus(), unref(e).open.value || unref(e).onOpenChange(true));
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
var io = Symbol();
var Qr = defineComponent({
  __name: "DropdownMenuRoot",
  props: {
    open: { type: Boolean, default: void 0 },
    defaultOpen: { type: Boolean },
    dir: { default: "ltr" },
    modal: { type: Boolean, default: true }
  },
  emits: ["update:open"],
  setup(n, { emit: t }) {
    const e = n, o = J(e, "open", t, {
      defaultValue: e.defaultOpen,
      passive: true
    }), a = ref(), { modal: s, dir: l } = toRefs(e);
    return provide(io, {
      open: o,
      onOpenChange: (r) => {
        o.value = r;
      },
      onOpenToggle: () => {
        o.value = !o.value;
      },
      triggerId: te(),
      triggerElement: a,
      contentId: te(),
      modal: s,
      dir: l
    }), (r, u) => (openBlock(), createBlock(unref(Yn), {
      open: unref(o),
      "onUpdate:open": u[0] || (u[0] = (d) => isRef(o) ? o.value = d : null),
      dir: unref(l),
      modal: unref(s)
    }, {
      default: withCtx(() => [
        renderSlot(r.$slots, "default")
      ]),
      _: 3
    }, 8, ["open", "dir", "modal"]));
  }
});
var jr = defineComponent({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(n) {
    const t = n, e = inject(io), { primitiveElement: o, currentElement: a } = H();
    return onMounted(() => {
      e.triggerElement = a;
    }), (s, l) => (openBlock(), createBlock(unref(Ut), { "as-child": "" }, {
      default: withCtx(() => {
        var r, u, d, c, p;
        return [
          createVNode(unref(x), {
            id: (r = unref(e)) == null ? void 0 : r.triggerId,
            ref_key: "primitiveElement",
            ref: o,
            type: s.as === "button" ? "button" : void 0,
            "as-child": t.asChild,
            as: s.as,
            "aria-haspopup": "menu",
            "aria-expanded": (u = unref(e)) == null ? void 0 : u.open.value,
            "aria-controls": (d = unref(e)) != null && d.open.value ? (c = unref(e)) == null ? void 0 : c.contentId : void 0,
            "data-disabled": s.disabled ? "" : void 0,
            disabled: s.disabled,
            "data-state": (p = unref(e)) != null && p.open.value ? "open" : "closed",
            onPointerdown: l[0] || (l[0] = (f) => {
              var m, v;
              !s.disabled && f.button === 0 && f.ctrlKey === false && ((m = unref(e)) == null || m.onOpenToggle(), (v = unref(e)) != null && v.open.value && f.preventDefault());
            }),
            onKeydown: l[1] || (l[1] = withKeys(
              (f) => {
                var m, v;
                s.disabled || (["Enter", " "].includes(f.key) && ((m = unref(e)) == null || m.onOpenToggle()), f.key === "ArrowDown" && ((v = unref(e)) == null || v.onOpenChange(true)), ["Enter", " ", "ArrowDown"].includes(f.key) && f.preventDefault());
              },
              ["enter", "space", "arrow-down"]
            ))
          }, {
            default: withCtx(() => [
              renderSlot(s.$slots, "default")
            ]),
            _: 3
          }, 8, ["id", "type", "as-child", "as", "aria-expanded", "aria-controls", "data-disabled", "disabled", "data-state"])
        ];
      }),
      _: 3
    }));
  }
});
var eu = defineComponent({
  __name: "DropdownMenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean }
  },
  setup(n) {
    const t = n;
    return (e, o) => (openBlock(), createBlock(unref(jn), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var tu = defineComponent({
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
    ...Te
  }),
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss", "entryFocus", "openAutoFocus", "closeAutoFocus"],
  setup(n, { emit: t }) {
    const e = n, o = inject(io), a = ref(false), s = X(t);
    function l(r) {
      t("closeAutoFocus", r), !r.defaultPrevented && (a.value || setTimeout(() => {
        var u;
        (u = o == null ? void 0 : o.triggerElement.value) == null || u.focus();
      }, 0), a.value = false, r.preventDefault());
    }
    return (r, u) => {
      var d, c;
      return openBlock(), createBlock(unref(Zn), mergeProps({ ...e, ...unref(s) }, {
        id: (d = unref(o)) == null ? void 0 : d.contentId,
        "aria-labelledby": (c = unref(o)) == null ? void 0 : c.triggerId,
        style: {
          "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
          "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
          "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
        },
        onCloseAutoFocus: l,
        onInteractOutside: u[0] || (u[0] = (p) => {
          var h2;
          if (t("interactOutside", p), p.defaultPrevented)
            return;
          const f = p.detail.originalEvent, m = f.button === 0 && f.ctrlKey === true, v = f.button === 2 || m;
          (!((h2 = unref(o)) != null && h2.modal.value) || v) && (a.value = true);
        })
      }), {
        default: withCtx(() => [
          renderSlot(r.$slots, "default")
        ]),
        _: 3
      }, 16, ["id", "aria-labelledby", "style"]);
    };
  }
});
var nu = defineComponent({
  __name: "DropdownMenuArrow",
  props: {
    width: { default: 10 },
    height: { default: 5 },
    asChild: { type: Boolean },
    as: {}
  },
  setup(n) {
    const t = n;
    return (e, o) => (openBlock(), createBlock(unref(Un), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var ou = defineComponent({
  __name: "DropdownMenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(n, { emit: t }) {
    const e = n, o = X(t);
    return (a, s) => (openBlock(), createBlock(unref(_t), normalizeProps(guardReactiveProps({ ...e, ...unref(o) })), {
      default: withCtx(() => [
        renderSlot(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var au = defineComponent({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(n) {
    const t = n;
    return (e, o) => (openBlock(), createBlock(unref(Gt), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var su = defineComponent({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(n) {
    const t = n;
    return (e, o) => (openBlock(), createBlock(unref(no), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var lu = defineComponent({
  __name: "DropdownMenuCheckboxItem",
  props: {
    checked: { type: [Boolean, String] },
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select", "update:checked"],
  setup(n, { emit: t }) {
    const e = n, o = X(t);
    return (a, s) => (openBlock(), createBlock(unref(Jn), normalizeProps(guardReactiveProps({ ...e, ...unref(o) })), {
      default: withCtx(() => [
        renderSlot(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var iu = defineComponent({
  __name: "DropdownMenuItemIndicator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(n) {
    const t = n;
    return (e, o) => (openBlock(), createBlock(unref(qn), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var ru = defineComponent({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(n) {
    const t = n;
    return (e, o) => (openBlock(), createBlock(unref(Qn), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var uu = defineComponent({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(n, { emit: t }) {
    const e = n, o = X(t);
    return (a, s) => (openBlock(), createBlock(unref(eo), normalizeProps(guardReactiveProps({ ...e, ...unref(o) })), {
      default: withCtx(() => [
        renderSlot(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var du = defineComponent({
  __name: "DropdownMenuRadioItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(n, { emit: t }) {
    const e = n;
    return (o, a) => (openBlock(), createBlock(unref(to), normalizeProps(guardReactiveProps({ ...e, ...t })), {
      default: withCtx(() => [
        renderSlot(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var cu = defineComponent({
  __name: "DropdownMenuSub",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean }
  },
  emits: ["update:open"],
  setup(n, { emit: t }) {
    const e = n, o = J(e, "open", t, {
      passive: true,
      defaultValue: e.defaultOpen ?? false
    });
    return (a, s) => (openBlock(), createBlock(unref(ao), {
      open: unref(o),
      "onUpdate:open": s[0] || (s[0] = (l) => isRef(o) ? o.value = l : null)
    }, {
      default: withCtx(() => [
        renderSlot(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["open"]));
  }
});
var pu = defineComponent({
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
    ...Te
  }),
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss", "entryFocus", "openAutoFocus", "closeAutoFocus"],
  setup(n, { emit: t }) {
    const e = n;
    return (o, a) => (openBlock(), createBlock(unref(so), mergeProps({ ...e, ...t }, { style: {
      "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
      "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
      "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
    } }), {
      default: withCtx(() => [
        renderSlot(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["style"]));
  }
});
var fu = defineComponent({
  __name: "DropdownMenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(n) {
    const t = n;
    return (e, o) => (openBlock(), createBlock(unref(lo), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var ro = Symbol();
var mu = defineComponent({
  __name: "ContextMenuRoot",
  props: {
    dir: { default: "ltr" },
    modal: { type: Boolean, default: true }
  },
  emits: ["update:open"],
  setup(n, { emit: t }) {
    const e = n, { dir: o, modal: a } = toRefs(e), s = ref(false);
    return provide(ro, {
      open: s,
      onOpenChange: (l) => {
        s.value = l, t("update:open", l);
      },
      dir: o,
      modal: a
    }), (l, r) => (openBlock(), createBlock(unref(Yn), {
      open: s.value,
      "onUpdate:open": r[0] || (r[0] = (u) => s.value = u),
      dir: unref(o),
      modal: unref(a)
    }, {
      default: withCtx(() => [
        renderSlot(l.$slots, "default")
      ]),
      _: 3
    }, 8, ["open", "dir", "modal"]));
  }
});
function Io(n) {
  return n.pointerType !== "mouse";
}
var mi = {
  inheritAttrs: false
};
var vu = defineComponent({
  ...mi,
  __name: "ContextMenuTrigger",
  props: {
    disabled: { type: Boolean, default: false },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(n) {
    const t = n, { disabled: e } = toRefs(t), o = inject(ro), a = ref({ x: 0, y: 0 }), s = computed(() => ({
      getBoundingClientRect: () => ({
        width: 0,
        height: 0,
        left: a.value.x,
        right: a.value.x,
        top: a.value.y,
        bottom: a.value.y,
        ...a.value
      })
    })), l = ref(0);
    function r() {
      window.clearTimeout(l.value);
    }
    function u(f) {
      a.value = { x: f.clientX, y: f.clientY }, o == null || o.onOpenChange(true);
    }
    async function d(f) {
      e.value || (await nextTick(), f.defaultPrevented || (r(), u(f), f.preventDefault()));
    }
    async function c(f) {
      e.value || (await nextTick(), Io(f) && !f.defaultPrevented && (r(), l.value = window.setTimeout(() => u(f), 700)));
    }
    async function p(f) {
      e.value || (await nextTick(), Io(f) && !f.defaultPrevented && r());
    }
    return (f, m) => {
      var v;
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(unref(Ut), {
          as: "div",
          element: s.value
        }, null, 8, ["element"]),
        createVNode(unref(x), mergeProps({
          as: f.as,
          "as-child": f.asChild,
          "data-state": (v = unref(o)) != null && v.open.value ? "open" : "closed",
          "data-disabled": unref(e) ? "" : void 0,
          style: {
            WebkitTouchCallout: "none"
          }
        }, f.$attrs, {
          onContextmenu: d,
          onPointerdown: c,
          onPointermove: p,
          onPointercancel: p,
          onPointerup: p
        }), {
          default: withCtx(() => [
            renderSlot(f.$slots, "default")
          ]),
          _: 3
        }, 16, ["as", "as-child", "data-state", "data-disabled"])
      ], 64);
    };
  }
});
var hu = defineComponent({
  __name: "ContextMenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean }
  },
  setup(n) {
    const t = n;
    return (e, o) => (openBlock(), createBlock(unref(jn), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var gu = defineComponent({
  __name: "ContextMenuContent",
  props: {
    loop: { type: Boolean },
    alignOffset: { default: 0 },
    avoidCollisions: { type: Boolean, default: true },
    collisionBoundary: { default: () => [] },
    collisionPadding: { default: 0 },
    sticky: { default: "partial" },
    hideWhenDetached: { type: Boolean, default: false },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss", "entryFocus", "openAutoFocus", "closeAutoFocus"],
  setup(n, { emit: t }) {
    const e = n, o = inject(ro), a = ref(false);
    return (s, l) => (openBlock(), createBlock(unref(Zn), mergeProps(e, {
      side: "right",
      "side-offset": 2,
      align: "start",
      style: {
        "--radix-context-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-context-menu-content-available-width": "var(--radix-popper-available-width)",
        "--radix-context-menu-content-available-height": "var(--radix-popper-available-height)",
        "--radix-context-menu-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-context-menu-trigger-height": "var(--radix-popper-anchor-height)"
      },
      onCloseAutoFocus: l[0] || (l[0] = (r) => {
        t("closeAutoFocus", r), !r.defaultPrevented && a.value && r.preventDefault(), a.value = false;
      }),
      onInteractOutside: l[1] || (l[1] = (r) => {
        var u;
        t("interactOutside", r), !r.defaultPrevented && !((u = unref(o)) != null && u.modal.value) && (a.value = true);
      })
    }), {
      default: withCtx(() => [
        renderSlot(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["style"]));
  }
});
var yu = defineComponent({
  __name: "ContextMenuArrow",
  props: {
    width: {},
    height: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(n) {
    const t = n;
    return (e, o) => (openBlock(), createBlock(unref(Un), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var _u = defineComponent({
  __name: "ContextMenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(n, { emit: t }) {
    const e = n, o = X(t);
    return (a, s) => (openBlock(), createBlock(unref(_t), normalizeProps(guardReactiveProps({ ...e, ...unref(o) })), {
      default: withCtx(() => [
        renderSlot(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var bu = defineComponent({
  __name: "ContextMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(n) {
    const t = n;
    return (e, o) => (openBlock(), createBlock(unref(Gt), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var wu = defineComponent({
  __name: "ContextMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(n) {
    const t = n;
    return (e, o) => (openBlock(), createBlock(unref(no), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Cu = defineComponent({
  __name: "ContextMenuCheckboxItem",
  props: {
    checked: { type: [Boolean, String] },
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select", "update:checked"],
  setup(n, { emit: t }) {
    const e = n, o = X(t);
    return (a, s) => (openBlock(), createBlock(unref(Jn), normalizeProps(guardReactiveProps({ ...e, ...unref(o) })), {
      default: withCtx(() => [
        renderSlot(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Eu = defineComponent({
  __name: "ContextMenuItemIndicator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(n) {
    const t = n;
    return (e, o) => (openBlock(), createBlock(unref(qn), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Ou = defineComponent({
  __name: "ContextMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(n) {
    const t = n;
    return (e, o) => (openBlock(), createBlock(unref(Qn), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var $u = defineComponent({
  __name: "ContextMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(n, { emit: t }) {
    const e = n, o = X(t);
    return (a, s) => (openBlock(), createBlock(unref(eo), normalizeProps(guardReactiveProps({ ...e, ...unref(o) })), {
      default: withCtx(() => [
        renderSlot(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Pu = defineComponent({
  __name: "ContextMenuRadioItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(n, { emit: t }) {
    const e = n, o = X(t);
    return (a, s) => (openBlock(), createBlock(unref(to), normalizeProps(guardReactiveProps({ ...e, ...unref(o) })), {
      default: withCtx(() => [
        renderSlot(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Su = defineComponent({
  __name: "ContextMenuSub",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean }
  },
  emits: ["update:open"],
  setup(n, { emit: t }) {
    const e = n, o = J(e, "open", t, {
      passive: true,
      defaultValue: e.defaultOpen
    });
    return (a, s) => (openBlock(), createBlock(unref(ao), {
      open: unref(o),
      "onUpdate:open": s[0] || (s[0] = (l) => isRef(o) ? o.value = l : null)
    }, {
      default: withCtx(() => [
        renderSlot(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["open"]));
  }
});
var Tu = defineComponent({
  __name: "ContextMenuSubContent",
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
    ...Te
  }),
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss", "entryFocus", "openAutoFocus", "closeAutoFocus"],
  setup(n, { emit: t }) {
    const e = n, o = X(t);
    return (a, s) => (openBlock(), createBlock(unref(so), mergeProps({ ...e, ...unref(o) }, { style: {
      "--radix-context-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-context-menu-content-available-width": "var(--radix-popper-available-width)",
      "--radix-context-menu-content-available-height": "var(--radix-popper-available-height)",
      "--radix-context-menu-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-context-menu-trigger-height": "var(--radix-popper-anchor-height)"
    } }), {
      default: withCtx(() => [
        renderSlot(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["style"]));
  }
});
var Bu = defineComponent({
  __name: "ContextMenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(n) {
    const t = n;
    return (e, o) => (openBlock(), createBlock(unref(lo), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var vi = ["default-value"];
var hi = defineComponent({
  __name: "BubbleSelect",
  props: {
    autocomplete: {},
    autofocus: { type: Boolean },
    disabled: { type: Boolean },
    form: {},
    multiple: { type: Boolean },
    name: {},
    required: { type: Boolean },
    size: {},
    value: {}
  },
  setup(n) {
    const t = n, { value: e } = toRefs(t);
    hs(e);
    const o = ref();
    return (a, s) => (openBlock(), createBlock(unref(Wn), { "as-child": "" }, {
      default: withCtx(() => [
        withDirectives(createBaseVNode("select", mergeProps({
          ref_key: "selectElement",
          ref: o
        }, t, {
          "onUpdate:modelValue": s[0] || (s[0] = (l) => isRef(e) ? e.value = l : null),
          "default-value": unref(e)
        }), [
          renderSlot(a.$slots, "default")
        ], 16, vi), [
          [vModelSelect, unref(e)]
        ])
      ]),
      _: 3
    }));
  }
});
var gi = {
  key: 0,
  value: ""
};
var Ne = Symbol();
var Ca = Symbol();
var Au = defineComponent({
  __name: "SelectRoot",
  props: {
    open: { type: Boolean, default: void 0 },
    defaultOpen: { type: Boolean },
    defaultValue: { default: "" },
    modelValue: { default: "" },
    orientation: { default: "vertical" },
    dir: { default: "ltr" },
    name: {},
    autocomplete: {},
    disabled: { type: Boolean },
    required: { type: Boolean }
  },
  emits: ["update:modelValue", "update:open"],
  setup(n, { emit: t }) {
    const e = n, o = J(e, "modelValue", t, {
      defaultValue: e.defaultValue,
      passive: true
    }), a = J(e, "open", t, {
      defaultValue: e.defaultOpen,
      passive: true
    }), s = ref(), l = ref(), r = ref({
      x: 0,
      y: 0
    }), { required: u, disabled: d, dir: c } = toRefs(e);
    provide(Ne, {
      triggerElement: s,
      onTriggerChange: (v) => {
        s.value = v;
      },
      valueElement: l,
      onValueElementChange: (v) => {
        l.value = v;
      },
      valueElementHasChildren: false,
      onValueElementHasChildrenChange: (v) => {
      },
      contentId: te(),
      modelValue: o,
      onValueChange: (v) => {
        o.value = v;
      },
      open: a,
      required: u,
      onOpenChange: (v) => {
        a.value = v;
      },
      dir: c,
      triggerPointerDownPosRef: r,
      disabled: d
    });
    const p = computed(
      () => s.value ? !!s.value.closest("form") : true
    ), f = ref(/* @__PURE__ */ new Set()), m = computed(() => Array.from(f.value).map((v) => {
      var h2;
      return (h2 = v.props) == null ? void 0 : h2.value;
    }).join(";"));
    return provide(Ca, {
      onNativeOptionAdd: (v) => {
        f.value.add(v);
      },
      onNativeOptionRemove: (v) => {
        f.value.delete(v);
      }
    }), (v, h2) => (openBlock(), createBlock(unref(et), null, {
      default: withCtx(() => [
        renderSlot(v.$slots, "default"),
        p.value ? (openBlock(), createBlock(hi, {
          key: m.value,
          "aria-hidden": "",
          tabindex: "-1",
          required: unref(u),
          name: v.name,
          autocomplete: v.autocomplete,
          disabled: unref(d),
          value: unref(o),
          onChange: h2[0] || (h2[0] = (_) => o.value = _.target.value)
        }, {
          default: withCtx(() => [
            unref(o) === void 0 ? (openBlock(), createElementBlock("option", gi)) : createCommentVNode("", true),
            (openBlock(true), createElementBlock(Fragment, null, renderList(Array.from(f.value), (_) => (openBlock(), createBlock(resolveDynamicComponent(_), mergeProps(_.props, {
              key: _.key ?? ""
            }), null, 16))), 128))
          ]),
          _: 1
        }, 8, ["required", "name", "autocomplete", "disabled", "value"])) : createCommentVNode("", true)
      ]),
      _: 3
    }));
  }
});
var yi = [" ", "Enter", "ArrowUp", "ArrowDown"];
var _i = [" ", "Enter"];
var ge = 10;
function Ea(n) {
  return n === "" || n === void 0;
}
var Iu = defineComponent({
  __name: "SelectTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(n) {
    const t = n, e = inject(Ne), o = computed(() => {
      var f;
      return ((f = e == null ? void 0 : e.disabled) == null ? void 0 : f.value) || t.disabled;
    }), { primitiveElement: a, currentElement: s } = H();
    onMounted(() => {
      e.triggerElement = s;
    });
    const { injectCollection: l } = se(), r = l(), { search: u, handleTypeaheadSearch: d, resetTypeahead: c } = Sn(r);
    function p() {
      o.value || (e.onOpenChange(true), c());
    }
    return (f, m) => (openBlock(), createBlock(unref(tt), { "as-child": "" }, {
      default: withCtx(() => {
        var v, h2, _, P, O, E, T, B;
        return [
          createVNode(unref(x), {
            ref_key: "primitiveElement",
            ref: a,
            role: "combobox",
            type: f.as === "button" ? "button" : void 0,
            "aria-controls": (v = unref(e)) == null ? void 0 : v.contentId,
            "aria-expanded": ((h2 = unref(e)) == null ? void 0 : h2.open.value) || false,
            "aria-required": (P = (_ = unref(e)) == null ? void 0 : _.required) == null ? void 0 : P.value,
            "aria-autocomplete": "none",
            dir: (O = unref(e)) == null ? void 0 : O.dir.value,
            "data-state": (E = unref(e)) != null && E.open.value ? "open" : "closed",
            "data-disabled": o.value ? "" : void 0,
            "data-placeholder": unref(Ea)((B = (T = unref(e)) == null ? void 0 : T.modelValue) == null ? void 0 : B.value) ? "" : void 0,
            "as-child": f.asChild,
            as: f.as,
            onClick: m[0] || (m[0] = (D) => {
              var A;
              (A = D == null ? void 0 : D.currentTarget) == null || A.focus();
            }),
            onPointerdown: m[1] || (m[1] = (D) => {
              const A = D.target;
              A.hasPointerCapture(D.pointerId) && A.releasePointerCapture(D.pointerId), D.button === 0 && D.ctrlKey === false && (p(), unref(e).triggerPointerDownPosRef.value = {
                x: Math.round(D.pageX),
                y: Math.round(D.pageY)
              }, D.preventDefault());
            }),
            onPointerup: m[2] || (m[2] = withModifiers(() => {
            }, ["prevent"])),
            onKeydown: m[3] || (m[3] = (D) => {
              const A = unref(u) !== "";
              !(D.ctrlKey || D.altKey || D.metaKey) && D.key.length === 1 && A && D.key === " " || (unref(d)(D.key), unref(yi).includes(D.key) && (p(), D.preventDefault()));
            })
          }, {
            default: withCtx(() => [
              renderSlot(f.$slots, "default")
            ]),
            _: 3
          }, 8, ["type", "aria-controls", "aria-expanded", "aria-required", "dir", "data-state", "data-disabled", "data-placeholder", "as-child", "as"])
        ];
      }),
      _: 3
    }));
  }
});
var Du = defineComponent({
  __name: "SelectPortal",
  props: {
    to: { default: "body" },
    disabled: { type: Boolean }
  },
  setup(n) {
    const t = n;
    return (e, o) => (openBlock(), createBlock(Teleport, normalizeProps(guardReactiveProps(t)), [
      renderSlot(e.$slots, "default")
    ], 16));
  }
});
var Xt = Symbol();
var xu = defineComponent({
  __name: "SelectViewport",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(n) {
    const t = n, e = inject(Be), o = e.position === "item-aligned" ? inject(Xt) : void 0, { primitiveElement: a, currentElement: s } = H();
    onMounted(() => {
      e.onViewportChange(s.value);
    });
    const l = ref(0);
    function r(u) {
      const d = u.currentTarget, { shouldExpandOnScrollRef: c, contentWrapper: p } = o;
      if (c != null && c.value && (p != null && p.value)) {
        const f = Math.abs(l.value - d.scrollTop);
        if (f > 0) {
          const m = window.innerHeight - ge * 2, v = Number.parseFloat(
            p.value.style.minHeight
          ), h2 = Number.parseFloat(p.value.style.height), _ = Math.max(v, h2);
          if (_ < m) {
            const P = _ + f, O = Math.min(m, P), E = P - O;
            p.value.style.height = `${O}px`, p.value.style.bottom === "0px" && (d.scrollTop = E > 0 ? E : 0, p.value.style.justifyContent = "flex-end");
          }
        }
      }
      l.value = d.scrollTop;
    }
    return (u, d) => (openBlock(), createElementBlock(Fragment, null, [
      createVNode(unref(x), { as: "style" }, {
        default: withCtx(() => [
          createTextVNode(" /* Hide scrollbars cross-browser and enable momentum scroll for touch devices */ [data-radix-select-viewport] { scrollbar-width:none; -ms-overflow-style: none; -webkit-overflow-scrolling: touch; } [data-radix-select-viewport]::-webkit-scrollbar { display: none; } ")
        ]),
        _: 1
      }),
      createVNode(unref(x), mergeProps({
        ref_key: "primitiveElement",
        ref: a,
        "data-radix-select-viewport": "",
        role: "presentation"
      }, { ...u.$attrs, ...t }, {
        style: {
          // we use position: 'relative' here on the `viewport` so that when we call
          // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
          // (independent of the scrollUpButton).
          position: "relative",
          flex: 1,
          overflow: "auto"
        },
        onScroll: r
      }), {
        default: withCtx(() => [
          renderSlot(u.$slots, "default")
        ]),
        _: 3
      }, 16, ["style"])
    ], 64));
  }
});
var bi = {
  inheritAttrs: false
};
var wi = defineComponent({
  ...bi,
  __name: "SelectItemAlignedPosition",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["placed"],
  setup(n, { emit: t }) {
    const e = n, { injectCollection: o } = se(), a = inject(Ne), s = inject(Be), l = o(), r = ref(false), u = ref(true), d = ref(), { primitiveElement: c, currentElement: p } = H(), { viewport: f, selectedItem: m, selectedItemText: v, focusSelectedItem: h2 } = s;
    function _() {
      if (a && a.triggerElement.value && a.valueElement.value && d.value && p.value && (f != null && f.value) && (m != null && m.value) && (v != null && v.value)) {
        const E = a.triggerElement.value.getBoundingClientRect(), T = p.value.getBoundingClientRect(), B = a.valueElement.value.getBoundingClientRect(), D = v.value.getBoundingClientRect();
        if (a.dir.value !== "rtl") {
          const Fe = D.left - T.left, Ae = B.left - Fe, Le = E.left - Ae, Ke = E.width + Le, en = Math.max(Ke, T.width), tn = window.innerWidth - ge, nn = vo(Ae, ge, tn - en);
          d.value.style.minWidth = `${Ke}px`, d.value.style.left = `${nn}px`;
        } else {
          const Fe = T.right - D.right, Ae = window.innerWidth - B.right - Fe, Le = window.innerWidth - E.right - Ae, Ke = E.width + Le, en = Math.max(Ke, T.width), tn = window.innerWidth - ge, nn = vo(
            Ae,
            ge,
            tn - en
          );
          d.value.style.minWidth = `${Ke}px`, d.value.style.right = `${nn}px`;
        }
        const A = l.value, W = window.innerHeight - ge * 2, I = f.value.scrollHeight, R = window.getComputedStyle(p.value), K = Number.parseInt(
          R.borderTopWidth,
          10
        ), U = Number.parseInt(R.paddingTop, 10), Y = Number.parseInt(
          R.borderBottomWidth,
          10
        ), Q = Number.parseInt(
          R.paddingBottom,
          10
        ), oe = K + U + I + Q + Y, ne = Math.min(
          m.value.offsetHeight * 5,
          oe
        ), Ue = window.getComputedStyle(f.value), st = Number.parseInt(Ue.paddingTop, 10), Da = Number.parseInt(
          Ue.paddingBottom,
          10
        ), Et = E.top + E.height / 2 - ge, xa = W - Et, jt = m.value.offsetHeight / 2, Ma = m.value.offsetTop + jt, Ot = K + U + Ma, ka = oe - Ot;
        if (Ot <= Et) {
          const Fe = m.value === A[A.length - 1];
          d.value.style.bottom = "0px";
          const Ae = p.value.clientHeight - f.value.offsetTop - f.value.offsetHeight, Le = Math.max(
            xa,
            jt + (Fe ? Da : 0) + Ae + Y
          ), Ke = Ot + Le;
          d.value.style.height = `${Ke}px`;
        } else {
          const Fe = m.value === A[0];
          d.value.style.top = "0px";
          const Le = Math.max(
            Et,
            K + f.value.offsetTop + (Fe ? st : 0) + jt
          ) + ka;
          d.value.style.height = `${Le}px`, f.value.scrollTop = Ot - Et + f.value.offsetTop;
        }
        d.value.style.margin = `${ge}px 0`, d.value.style.minHeight = `${ne}px`, d.value.style.maxHeight = `${W}px`, t("placed"), requestAnimationFrame(() => r.value = true);
      }
    }
    const P = ref("");
    onMounted(() => {
      _(), p.value && (P.value = window.getComputedStyle(p.value).zIndex);
    });
    function O(E) {
      E && u.value === true && (_(), h2 == null || h2(), u.value = false);
    }
    return provide(Xt, {
      contentWrapper: d,
      shouldExpandOnScrollRef: r,
      onScrollButtonChange: O
    }), (E, T) => (openBlock(), createElementBlock("div", {
      ref_key: "contentWrapperElement",
      ref: d,
      style: normalizeStyle({
        display: "flex",
        flexDirection: "column",
        position: "fixed",
        zIndex: P.value
      })
    }, [
      createVNode(unref(x), mergeProps({
        ref_key: "primitiveElement",
        ref: c,
        style: {
          // When we get the height of the content, it includes borders. If we were to set
          // the height without having `boxSizing: 'border-box'` it would be too big.
          boxSizing: "border-box",
          // We need to ensure the content doesn't get taller than the wrapper
          maxHeight: "100%"
        }
      }, { ...E.$attrs, ...e }), {
        default: withCtx(() => [
          renderSlot(E.$slots, "default")
        ]),
        _: 3
      }, 16, ["style"])
    ], 4));
  }
});
var Ci = defineComponent({
  __name: "SelectPopperPosition",
  props: {
    side: {},
    sideOffset: {},
    align: { default: "start" },
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: { default: ge },
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    onPlaced: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(n) {
    const t = n;
    return (e, o) => (openBlock(), createBlock(unref(ht), mergeProps(t, { style: {
      // Ensure border-box for floating-ui calculations
      boxSizing: "border-box",
      "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-select-content-available-width": "var(--radix-popper-available-width)",
      "--radix-select-content-available-height": "var(--radix-popper-available-height)",
      "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
    } }), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16, ["style"]));
  }
});
var Be = Symbol();
var Ei = defineComponent({
  __name: "SelectContentImpl",
  props: {
    position: { default: "item-aligned" },
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
    onPlaced: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["closeAutoFocus", "escapeKeyDown", "pointerDownOutside"],
  setup(n, { emit: t }) {
    const e = n, o = inject(Ne);
    $n(), Ft(true);
    const { createCollection: a } = se(), s = ref(), l = a(s), { search: r, handleTypeaheadSearch: u } = Sn(l), d = ref(), c = ref(), p = ref(), f = ref(false), m = ref(false);
    function v() {
      c.value && s.value && dn([c.value, s.value]);
    }
    watch(f, () => {
      v();
    });
    const { onOpenChange: h2, triggerPointerDownPosRef: _ } = o;
    watchEffect((E) => {
      if (!s.value)
        return;
      let T = { x: 0, y: 0 };
      const B = (A) => {
        var W, I;
        T = {
          x: Math.abs(
            Math.round(A.pageX) - (((W = _.value) == null ? void 0 : W.x) ?? 0)
          ),
          y: Math.abs(
            Math.round(A.pageY) - (((I = _.value) == null ? void 0 : I.y) ?? 0)
          )
        };
      }, D = (A) => {
        var W;
        T.x <= 10 && T.y <= 10 ? A.preventDefault() : (W = s.value) != null && W.contains(A.target) || h2(false), document.removeEventListener("pointermove", B), _.value = null;
      };
      _.value !== null && (document.addEventListener("pointermove", B), document.addEventListener("pointerup", D, {
        capture: true,
        once: true
      })), E(() => {
        document.removeEventListener("pointermove", B), document.removeEventListener("pointerup", D, {
          capture: true
        });
      });
    });
    function P(E) {
      const T = E.ctrlKey || E.altKey || E.metaKey;
      if (E.key === "Tab" && E.preventDefault(), !T && E.key.length === 1 && u(E.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(E.key)) {
        let B = l.value;
        if (["ArrowUp", "End"].includes(E.key) && (B = B.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(E.key)) {
          const D = E.target, A = B.indexOf(D);
          B = B.slice(A + 1);
        }
        setTimeout(() => dn(B)), E.preventDefault();
      }
    }
    const O = computed(() => e.position === "popper" ? e : {});
    return provide(Be, {
      content: s,
      viewport: d,
      onViewportChange: (E) => {
        d.value = E;
      },
      itemRefCallback: (E, T, B) => {
        var W, I;
        const D = !m.value && !B;
        (((W = o == null ? void 0 : o.modelValue) == null ? void 0 : W.value) !== void 0 && ((I = o == null ? void 0 : o.modelValue) == null ? void 0 : I.value) === T || D) && (c.value = E, D && (m.value = true));
      },
      selectedItem: c,
      selectedItemText: p,
      onItemLeave: () => {
        var E;
        (E = s.value) == null || E.focus();
      },
      itemTextRefCallback: (E, T, B) => {
        var W, I;
        const D = !m.value && !B;
        (((W = o == null ? void 0 : o.modelValue) == null ? void 0 : W.value) !== void 0 && ((I = o == null ? void 0 : o.modelValue) == null ? void 0 : I.value) === T || D) && (p.value = E);
      },
      focusSelectedItem: v,
      position: e.position,
      isPositioned: f,
      searchRef: r
    }), (E, T) => (openBlock(), createBlock(unref(Vt), {
      "as-child": "",
      onMountAutoFocus: T[6] || (T[6] = withModifiers(() => {
      }, ["prevent"])),
      onUnmountAutoFocus: T[7] || (T[7] = (B) => {
        var D, A;
        t("closeAutoFocus", B), !B.defaultPrevented && ((A = (D = unref(o)) == null ? void 0 : D.triggerElement.value) == null || A.focus({ preventScroll: true }), B.preventDefault());
      })
    }, {
      default: withCtx(() => [
        createVNode(unref(je), {
          "as-child": "",
          "disable-outside-pointer-events": "",
          onFocusOutside: T[2] || (T[2] = withModifiers(() => {
          }, ["prevent"])),
          onDismiss: T[3] || (T[3] = (B) => {
            var D;
            return (D = unref(o)) == null ? void 0 : D.onOpenChange(false);
          }),
          onEscapeKeyDown: T[4] || (T[4] = (B) => t("escapeKeyDown", B)),
          onPointerDownOutside: T[5] || (T[5] = (B) => t("pointerDownOutside", B))
        }, {
          default: withCtx(() => {
            var B, D, A;
            return [
              (openBlock(), createBlock(resolveDynamicComponent(
                E.position === "popper" ? Ci : wi
              ), mergeProps({ ...E.$attrs, ...O.value }, {
                id: (B = unref(o)) == null ? void 0 : B.contentId,
                ref: (W) => {
                  s.value = unref(De)(W);
                },
                role: "listbox",
                "data-state": (D = unref(o)) != null && D.open.value ? "open" : "closed",
                dir: (A = unref(o)) == null ? void 0 : A.dir.value,
                style: {
                  // flex layout so we can place the scroll buttons properly
                  display: "flex",
                  flexDirection: "column",
                  // reset the outline by default as the content MAY get focused
                  outline: "none"
                },
                onContextmenu: T[0] || (T[0] = withModifiers(() => {
                }, ["prevent"])),
                onPlaced: T[1] || (T[1] = (W) => f.value = true),
                onKeydown: P
              }), {
                default: withCtx(() => [
                  renderSlot(E.$slots, "default")
                ]),
                _: 3
              }, 16, ["id", "data-state", "dir"]))
            ];
          }),
          _: 3
        })
      ]),
      _: 3
    }));
  }
});
var Mu = defineComponent({
  __name: "SelectContent",
  props: {
    position: {},
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
  },
  emits: ["closeAutoFocus", "escapeKeyDown", "pointerDownOutside"],
  setup(n, { emit: t }) {
    const e = n, o = inject(Ne), a = X(t);
    return (s, l) => (openBlock(), createBlock(unref(de), {
      present: unref(o).open.value
    }, {
      default: withCtx(() => [
        createVNode(Ei, normalizeProps(guardReactiveProps({ ...e, ...unref(a) })), {
          default: withCtx(() => [
            renderSlot(s.$slots, "default")
          ]),
          _: 3
        }, 16)
      ]),
      _: 3
    }, 8, ["present"]));
  }
});
var ku = defineComponent({
  __name: "SelectArrow",
  props: {
    width: {},
    height: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(n) {
    const t = n, e = inject(Ne), o = inject(Be);
    return (a, s) => {
      var l, r;
      return (l = unref(e)) != null && l.open.value && ((r = unref(o)) == null ? void 0 : r.position) === "popper" ? (openBlock(), createBlock(unref(gt), normalizeProps(mergeProps({ key: 0 }, t)), {
        default: withCtx(() => [
          renderSlot(a.$slots, "default")
        ]),
        _: 3
      }, 16)) : createCommentVNode("", true);
    };
  }
});
var Ru = defineComponent({
  __name: "SelectSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(n) {
    const t = n;
    return (e, o) => (openBlock(), createBlock(unref(x), mergeProps({ "aria-hidden": "" }, t), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var uo = Symbol();
var Nu = defineComponent({
  __name: "SelectItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(n) {
    const t = n, { disabled: e } = toRefs(t), o = inject(Ne), a = inject(Be), { primitiveElement: s, currentElement: l } = H(), r = computed(() => {
      var h2;
      return ((h2 = o == null ? void 0 : o.modelValue) == null ? void 0 : h2.value) === t.value;
    }), u = ref(false), d = ref(t.textValue ?? ""), c = te();
    async function p(h2) {
      await nextTick(), !(h2 != null && h2.defaultPrevented) && (e.value || (o.onValueChange(t.value), o.onOpenChange(false)));
    }
    async function f(h2) {
      var _;
      await nextTick(), !h2.defaultPrevented && (e.value ? (_ = a.onItemLeave) == null || _.call(a) : h2.currentTarget.focus({ preventScroll: true }));
    }
    async function m(h2) {
      var _;
      await nextTick(), !h2.defaultPrevented && h2.currentTarget === document.activeElement && ((_ = a.onItemLeave) == null || _.call(a));
    }
    async function v(h2) {
      var P;
      await nextTick(), !(h2.defaultPrevented || ((P = a.searchRef) == null ? void 0 : P.value) !== "" && h2.key === " ") && (_i.includes(h2.key) && p(), h2.key === " " && h2.preventDefault());
    }
    if (t.value === "")
      throw new Error(
        "A <SelectItem /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return onMounted(() => {
      l.value && a.itemRefCallback(
        l.value,
        t.value,
        t.disabled
      );
    }), provide(uo, {
      value: t.value,
      disabled: e,
      textId: c,
      isSelected: r,
      onItemTextChange: (h2) => {
        d.value = ((d.value || (h2 == null ? void 0 : h2.textContent)) ?? "").trim();
      }
    }), (h2, _) => (openBlock(), createBlock(unref(x), {
      ref_key: "primitiveElement",
      ref: s,
      "data-radix-vue-collection-item": "",
      "aria-labelledby": unref(c),
      "data-highlighted": u.value ? "" : void 0,
      "aria-selected": r.value && u.value,
      "data-state": r.value ? "checked" : "unchecked",
      "aria-disabled": unref(e) || void 0,
      "data-disabled": unref(e) ? "" : void 0,
      tabindex: unref(e) ? void 0 : -1,
      as: h2.as,
      "as-child": h2.asChild,
      onFocus: _[0] || (_[0] = (P) => u.value = true),
      onBlur: _[1] || (_[1] = (P) => u.value = false),
      onPointerup: p,
      onPointermove: f,
      onPointerleave: m,
      onKeydown: v
    }, {
      default: withCtx(() => [
        renderSlot(h2.$slots, "default")
      ]),
      _: 3
    }, 8, ["aria-labelledby", "data-highlighted", "aria-selected", "data-state", "aria-disabled", "data-disabled", "tabindex", "as", "as-child"]));
  }
});
var Fu = defineComponent({
  __name: "SelectItemIndicator",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(n) {
    const t = n, e = inject(uo);
    return (o, a) => {
      var s;
      return (s = unref(e)) != null && s.isSelected.value ? (openBlock(), createBlock(unref(x), mergeProps({
        key: 0,
        "aria-hidden": ""
      }, t), {
        default: withCtx(() => [
          renderSlot(o.$slots, "default")
        ]),
        _: 3
      }, 16)) : createCommentVNode("", true);
    };
  }
});
var Oa = Symbol();
var Lu = defineComponent({
  __name: "SelectGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(n) {
    const t = n, e = te();
    return provide(Oa, {
      id: e
    }), (o, a) => (openBlock(), createBlock(unref(x), mergeProps({ role: "group" }, t, { "aria-labelledby": unref(e) }), {
      default: withCtx(() => [
        renderSlot(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-labelledby"]));
  }
});
var Ku = defineComponent({
  __name: "SelectLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "label" }
  },
  setup(n) {
    const t = n, e = inject(Oa, {
      id: ""
    });
    return (o, a) => (openBlock(), createBlock(unref(x), mergeProps(t, {
      id: unref(e).id
    }), {
      default: withCtx(() => [
        renderSlot(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
});
var Oi = {
  inheritAttrs: false
};
var Vu = defineComponent({
  ...Oi,
  __name: "SelectItemText",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(n) {
    const t = n, e = inject(Be), o = inject(Ca), a = inject(uo), { primitiveElement: s, currentElement: l } = H(), r = computed(() => {
      var c;
      return h("option", {
        key: a == null ? void 0 : a.value,
        value: a == null ? void 0 : a.value,
        disabled: a == null ? void 0 : a.disabled.value,
        innerHTML: (c = l.value) == null ? void 0 : c.textContent
      });
    }), { onNativeOptionAdd: u, onNativeOptionRemove: d } = o;
    return onMounted(() => {
      l.value && (a == null || a.onItemTextChange(l.value), e == null || e.itemTextRefCallback(
        l.value,
        a.value,
        a.disabled.value
      ), u(r.value));
    }), (c, p) => {
      var f;
      return openBlock(), createBlock(unref(x), mergeProps({
        id: (f = unref(a)) == null ? void 0 : f.textId,
        ref_key: "primitiveElement",
        ref: s
      }, t), {
        default: withCtx(() => [
          renderSlot(c.$slots, "default")
        ]),
        _: 3
      }, 16, ["id"]);
    };
  }
});
var $a = defineComponent({
  __name: "SelectScrollButtonImpl",
  emits: ["autoScroll"],
  setup(n, { emit: t }) {
    const { injectCollection: e } = se(), o = e(), a = inject(Be), s = ref(null);
    function l() {
      s.value !== null && (window.clearInterval(s.value), s.value = null);
    }
    watchEffect(() => {
      const d = o.value.find(
        (c) => c === document.activeElement
      );
      d == null || d.scrollIntoView({ block: "nearest" });
    });
    function r() {
      s.value === null && (s.value = window.setInterval(() => {
        t("autoScroll");
      }, 50));
    }
    function u() {
      a.onItemLeave(), s.value === null && (s.value = window.setInterval(() => {
        t("autoScroll");
      }, 50));
    }
    return onBeforeUnmount(() => l()), (d, c) => {
      var p;
      return openBlock(), createBlock(unref(x), mergeProps({
        "aria-hidden": "",
        style: {
          flexShrink: 0
        }
      }, (p = d.$parent) == null ? void 0 : p.$props, {
        onPointerdown: r,
        onPointermove: u,
        onPointerleave: c[0] || (c[0] = () => {
          l();
        })
      }), {
        default: withCtx(() => [
          renderSlot(d.$slots, "default")
        ]),
        _: 3
      }, 16);
    };
  }
});
var Hu = defineComponent({
  __name: "SelectScrollUpButton",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(n) {
    const t = inject(Be), e = t.position === "item-aligned" ? inject(Xt) : void 0, { primitiveElement: o, currentElement: a } = H(), s = ref(false);
    return watchEffect((l) => {
      var r, u;
      if ((r = t.viewport) != null && r.value && ((u = t.isPositioned) != null && u.value)) {
        let d = function() {
          s.value = c.scrollTop > 0;
        };
        const c = t.viewport.value;
        d(), c.addEventListener("scroll", d), l(() => c.removeEventListener("scroll", d));
      }
    }), watch(a, () => {
      a.value && (e == null || e.onScrollButtonChange(a.value));
    }), (l, r) => s.value ? (openBlock(), createBlock($a, {
      key: 0,
      ref_key: "primitiveElement",
      ref: o,
      onAutoScroll: r[0] || (r[0] = () => {
        const { viewport: u, selectedItem: d } = unref(t);
        u != null && u.value && (d != null && d.value) && (u.value.scrollTop = u.value.scrollTop - d.value.offsetHeight);
      })
    }, {
      default: withCtx(() => [
        renderSlot(l.$slots, "default")
      ]),
      _: 3
    }, 512)) : createCommentVNode("", true);
  }
});
var Wu = defineComponent({
  __name: "SelectScrollDownButton",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(n) {
    const t = inject(Be), e = t.position === "item-aligned" ? inject(Xt) : void 0, { primitiveElement: o, currentElement: a } = H(), s = ref(false);
    return watchEffect((l) => {
      var r, u;
      if ((r = t.viewport) != null && r.value && ((u = t.isPositioned) != null && u.value)) {
        let d = function() {
          const p = c.scrollHeight - c.clientHeight;
          s.value = Math.ceil(c.scrollTop) < p;
        };
        const c = t.viewport.value;
        d(), c.addEventListener("scroll", d), l(() => c.removeEventListener("scroll", d));
      }
    }), watch(a, () => {
      a.value && (e == null || e.onScrollButtonChange(a.value));
    }), (l, r) => s.value ? (openBlock(), createBlock($a, {
      key: 0,
      ref_key: "primitiveElement",
      ref: o,
      onAutoScroll: r[0] || (r[0] = () => {
        const { viewport: u, selectedItem: d } = unref(t);
        u != null && u.value && (d != null && d.value) && (u.value.scrollTop = u.value.scrollTop + d.value.offsetHeight);
      })
    }, {
      default: withCtx(() => [
        renderSlot(l.$slots, "default")
      ]),
      _: 3
    }, 512)) : createCommentVNode("", true);
  }
});
var zu = defineComponent({
  __name: "SelectValue",
  props: {
    placeholder: { default: "" },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(n) {
    const { primitiveElement: t, currentElement: e } = H(), o = inject(Ne);
    return onMounted(() => {
      var s, l;
      o.valueElement = e;
      const a = !!((l = (s = useSlots()) == null ? void 0 : s.default) != null && l.call(s));
      o.onValueElementHasChildrenChange(a);
    }), (a, s) => (openBlock(), createBlock(unref(x), {
      ref_key: "primitiveElement",
      ref: t,
      as: a.as,
      "as-child": a.asChild,
      style: { pointerEvents: "none" }
    }, {
      default: withCtx(() => {
        var l, r;
        return [
          unref(Ea)((r = (l = unref(o)) == null ? void 0 : l.modelValue) == null ? void 0 : r.value) ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
            createTextVNode(toDisplayString(a.placeholder), 1)
          ], 64)) : renderSlot(a.$slots, "default", { key: 1 }, () => {
            var u, d;
            return [
              createTextVNode(toDisplayString((d = (u = unref(o)) == null ? void 0 : u.modelValue) == null ? void 0 : d.value), 1)
            ];
          })
        ];
      }),
      _: 3
    }, 8, ["as", "as-child"]));
  }
});
var Uu = defineComponent({
  __name: "SelectIcon",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(n) {
    return (t, e) => (openBlock(), createBlock(unref(x), {
      "aria-hidden": "",
      as: t.as,
      "as-child": t.asChild
    }, {
      default: withCtx(() => [
        renderSlot(t.$slots, "default", {}, () => [
          createTextVNode("▼")
        ])
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
});
var bt = Symbol();
var Yu = defineComponent({
  __name: "MenubarRoot",
  props: {
    modelValue: {},
    defaultValue: {},
    dir: { default: "ltr" },
    loop: { type: Boolean, default: false }
  },
  emits: ["update:modelValue"],
  setup(n, { emit: t }) {
    const e = n, { primitiveElement: o, currentElement: a } = H(), { createCollection: s } = se("menubar");
    s(a);
    const l = J(e, "modelValue", t, {
      passive: true,
      defaultValue: e.defaultValue ?? ""
    }), r = ref(null), { dir: u, loop: d } = toRefs(e);
    return provide(bt, {
      modelValue: l,
      dir: u,
      loop: d,
      onMenuOpen: (c) => {
        l.value = c, r.value = c;
      },
      onMenuClose: () => {
        l.value = "";
      },
      onMenuToggle: (c) => {
        l.value = l.value ? "" : c, r.value = c;
      }
    }), (c, p) => (openBlock(), createBlock(unref(mt), {
      "current-tab-stop-id": r.value,
      "onUpdate:currentTabStopId": p[0] || (p[0] = (f) => r.value = f),
      orientation: "horizontal",
      loop: unref(d),
      dir: unref(u),
      "as-child": ""
    }, {
      default: withCtx(() => [
        createVNode(unref(x), {
          ref_key: "primitiveElement",
          ref: o,
          role: "menubar"
        }, {
          default: withCtx(() => [
            renderSlot(c.$slots, "default")
          ]),
          _: 3
        }, 512)
      ]),
      _: 3
    }, 8, ["current-tab-stop-id", "loop", "dir"]));
  }
});
var qt = Symbol();
var Gu = defineComponent({
  __name: "MenubarMenu",
  props: {
    value: {}
  },
  setup(n) {
    const e = n.value ?? te(), o = inject(bt), a = ref(), s = ref(false), l = computed(() => (o == null ? void 0 : o.modelValue.value) === e);
    return watch(l, () => {
      l.value || (s.value = false);
    }), provide(qt, {
      value: e,
      triggerElement: a,
      triggerId: e,
      contentId: te(),
      wasKeyboardTriggerOpenRef: s
    }), (r, u) => {
      var d;
      return openBlock(), createBlock(unref(Yn), {
        open: l.value,
        modal: false,
        dir: (d = unref(o)) == null ? void 0 : d.dir.value,
        "onUpdate:open": u[0] || (u[0] = (c) => {
          var p;
          c || (p = unref(o)) == null || p.onMenuClose();
        })
      }, {
        default: withCtx(() => [
          renderSlot(r.$slots, "default")
        ]),
        _: 3
      }, 8, ["open", "dir"]);
    };
  }
});
var Xu = defineComponent({
  __name: "MenubarTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(n) {
    const t = inject(bt), e = inject(qt), { primitiveElement: o, currentElement: a } = H(), s = ref(false), l = computed(() => (t == null ? void 0 : t.modelValue.value) === (e == null ? void 0 : e.value));
    return onMounted(() => {
      e.triggerElement = a;
    }), (r, u) => {
      var d;
      return openBlock(), createBlock(unref(vt), {
        "as-child": "",
        focusable: !r.disabled,
        "tab-stop-id": (d = unref(e)) == null ? void 0 : d.value
      }, {
        default: withCtx(() => [
          createVNode(unref(Ut), { "as-child": "" }, {
            default: withCtx(() => {
              var c, p, f;
              return [
                createVNode(unref(x), {
                  id: (c = unref(e)) == null ? void 0 : c.triggerId,
                  ref_key: "primitiveElement",
                  ref: o,
                  as: r.as,
                  type: r.as === "button" ? "button" : void 0,
                  role: "menuitem",
                  "aria-haspopup": "menu",
                  "aria-expanded": l.value,
                  "aria-controls": l.value ? (p = unref(e)) == null ? void 0 : p.contentId : void 0,
                  "data-highlighted": s.value ? "" : void 0,
                  "data-state": l.value ? "open" : "closed",
                  "data-disabled": r.disabled ? "" : void 0,
                  disabled: r.disabled,
                  "data-value": (f = unref(e)) == null ? void 0 : f.value,
                  "data-radix-vue-collection-item": "",
                  onPointerdown: u[0] || (u[0] = (m) => {
                    !r.disabled && m.button === 0 && m.ctrlKey === false && (unref(t).onMenuOpen(unref(e).value), l.value || m.preventDefault());
                  }),
                  onPointerenter: u[1] || (u[1] = () => {
                    var v;
                    !!unref(t).modelValue.value && !l.value && (unref(t).onMenuOpen(unref(e).value), (v = unref(a)) == null || v.focus());
                  }),
                  onKeydown: u[2] || (u[2] = withKeys((m) => {
                    var v, h2;
                    r.disabled || (["Enter", " "].includes(m.key) && ((v = unref(t)) == null || v.onMenuToggle(unref(e).value)), m.key === "ArrowDown" && ((h2 = unref(t)) == null || h2.onMenuOpen(unref(e).value)), ["Enter", " ", "ArrowDown"].includes(m.key) && (unref(e).wasKeyboardTriggerOpenRef.value = true, m.preventDefault()));
                  }, ["enter", "space", "arrow-down"])),
                  onFocus: u[3] || (u[3] = (m) => s.value = true),
                  onBlur: u[4] || (u[4] = (m) => s.value = false)
                }, {
                  default: withCtx(() => [
                    renderSlot(r.$slots, "default")
                  ]),
                  _: 3
                }, 8, ["id", "as", "type", "aria-expanded", "aria-controls", "data-highlighted", "data-state", "data-disabled", "disabled", "data-value"])
              ];
            }),
            _: 3
          })
        ]),
        _: 3
      }, 8, ["focusable", "tab-stop-id"]);
    };
  }
});
var qu = defineComponent({
  __name: "MenubarPortal",
  props: {
    to: {},
    disabled: { type: Boolean }
  },
  setup(n) {
    const t = n;
    return (e, o) => (openBlock(), createBlock(unref(jn), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Ju = defineComponent({
  __name: "MenubarContent",
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
    ...Te,
    align: "start"
  }),
  setup(n) {
    const t = n, e = inject(bt), o = inject(qt), { injectCollection: a } = se("menubar"), s = a(), l = ref(false);
    function r(u) {
      const c = u.target.hasAttribute(
        "data-radix-menubar-subtrigger"
      ), f = ((e == null ? void 0 : e.dir.value) === "rtl" ? "ArrowRight" : "ArrowLeft") === u.key;
      if (!f && c)
        return;
      let v = s.value.map((P) => P.dataset.value);
      f && v.reverse();
      const h2 = v.indexOf(o == null ? void 0 : o.value);
      v = e != null && e.loop.value ? Tn(v, h2 + 1) : v.slice(h2 + 1);
      const [_] = v;
      _ && (e == null || e.onMenuOpen(_));
    }
    return (u, d) => {
      var c, p;
      return openBlock(), createBlock(unref(Zn), mergeProps({
        id: (c = unref(o)) == null ? void 0 : c.contentId,
        "aria-labelledby": (p = unref(o)) == null ? void 0 : p.triggerId,
        "data-radix-menubar-content": ""
      }, t, {
        style: {
          "--radix-menubar-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-menubar-content-available-width": "var(--radix-popper-available-width)",
          "--radix-menubar-content-available-height": "var(--radix-popper-available-height)",
          "--radix-menubar-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-menubar-trigger-height": "var(--radix-popper-anchor-height)"
        },
        onCloseAutoFocus: d[0] || (d[0] = (f) => {
          var v, h2;
          !!!((v = unref(e)) != null && v.modelValue.value) && !l.value && ((h2 = unref(o).triggerElement.value) == null || h2.focus()), l.value = false, f.preventDefault();
        }),
        onFocusOutside: d[1] || (d[1] = (f) => {
          const m = f.target;
          unref(s).some((h2) => h2.contains(m)) && f.preventDefault();
        }),
        onInteractOutside: d[2] || (d[2] = (f) => {
          l.value = true;
        }),
        onOpenAutoFocus: d[3] || (d[3] = (f) => {
          var m;
          (m = unref(o)) != null && m.wasKeyboardTriggerOpenRef.value || f.preventDefault();
        }),
        onEntryFocus: d[4] || (d[4] = (f) => {
          var m;
          (m = unref(o)) != null && m.wasKeyboardTriggerOpenRef.value || f.preventDefault();
        }),
        onKeydown: withKeys(r, ["arrow-right", "arrow-left"])
      }), {
        default: withCtx(() => [
          renderSlot(u.$slots, "default")
        ]),
        _: 3
      }, 16, ["id", "aria-labelledby", "style", "onKeydown"]);
    };
  }
});
var Zu = defineComponent({
  __name: "MenubarArrow",
  props: {
    width: { default: 10 },
    height: { default: 5 },
    asChild: { type: Boolean },
    as: {}
  },
  setup(n) {
    const t = n;
    return (e, o) => (openBlock(), createBlock(unref(Un), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Qu = defineComponent({
  __name: "MenubarItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(n, { emit: t }) {
    const e = n, o = X(t);
    return (a, s) => (openBlock(), createBlock(unref(_t), normalizeProps(guardReactiveProps({ ...e, ...unref(o) })), {
      default: withCtx(() => [
        renderSlot(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var ju = defineComponent({
  __name: "MenubarGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(n) {
    const t = n;
    return (e, o) => (openBlock(), createBlock(unref(Gt), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var ed = defineComponent({
  __name: "MenubarSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(n) {
    const t = n;
    return (e, o) => (openBlock(), createBlock(unref(no), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var td = defineComponent({
  __name: "MenubarCheckboxItem",
  props: {
    checked: { type: [Boolean, String] },
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select", "update:checked"],
  setup(n, { emit: t }) {
    const e = n, o = X(t);
    return (a, s) => (openBlock(), createBlock(unref(Jn), normalizeProps(guardReactiveProps({ ...e, ...unref(o) })), {
      default: withCtx(() => [
        renderSlot(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var nd = defineComponent({
  __name: "MenubarItemIndicator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(n) {
    const t = n;
    return (e, o) => (openBlock(), createBlock(unref(qn), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var od = defineComponent({
  __name: "MenubarLabel",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(n) {
    const t = n;
    return (e, o) => (openBlock(), createBlock(unref(Qn), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var ad = defineComponent({
  __name: "MenubarRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(n, { emit: t }) {
    const e = n, o = X(t);
    return (a, s) => (openBlock(), createBlock(unref(eo), normalizeProps(guardReactiveProps({ ...e, ...unref(o) })), {
      default: withCtx(() => [
        renderSlot(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var sd = defineComponent({
  __name: "MenubarRadioItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(n, { emit: t }) {
    const e = n;
    return (o, a) => (openBlock(), createBlock(unref(to), normalizeProps(guardReactiveProps({ ...e, ...t })), {
      default: withCtx(() => [
        renderSlot(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var ld = defineComponent({
  __name: "MenubarSub",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean }
  },
  emits: ["update:open"],
  setup(n, { emit: t }) {
    const e = n, o = J(e, "open", t, {
      passive: true,
      defaultValue: e.defaultOpen ?? false
    });
    return (a, s) => (openBlock(), createBlock(unref(ao), {
      open: unref(o),
      "onUpdate:open": s[0] || (s[0] = (l) => isRef(o) ? o.value = l : null)
    }, {
      default: withCtx(() => [
        renderSlot(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["open"]));
  }
});
var id = defineComponent({
  __name: "MenubarSubContent",
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
    ...Te
  }),
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss", "entryFocus", "openAutoFocus", "closeAutoFocus"],
  setup(n, { emit: t }) {
    const e = n, { injectCollection: o } = se("menubar"), a = inject(bt), s = inject(qt), l = o();
    function r(u) {
      if (u.target.hasAttribute(
        "data-radix-menubar-subtrigger"
      ))
        return;
      let p = l.value.map((v) => v.dataset.value);
      const f = p.indexOf(s == null ? void 0 : s.value);
      p = a != null && a.loop.value ? Tn(p, f + 1) : p.slice(f + 1);
      const [m] = p;
      m && (a == null || a.onMenuOpen(m));
    }
    return (u, d) => (openBlock(), createBlock(unref(so), mergeProps({ ...e, ...t }, {
      "data-radix-menubar-content": "",
      style: {
        "--radix-menubar-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-menubar-content-available-width": "var(--radix-popper-available-width)",
        "--radix-menubar-content-available-height": "var(--radix-popper-available-height)",
        "--radix-menubar-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-menubar-trigger-height": "var(--radix-popper-anchor-height)"
      },
      onKeydown: withKeys(r, ["arrow-right"])
    }), {
      default: withCtx(() => [
        renderSlot(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["style", "onKeydown"]));
  }
});
var rd = defineComponent({
  __name: "MenubarSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(n) {
    const t = n;
    return (e, o) => (openBlock(), createBlock(unref(lo), mergeProps({ "data-radix-menubar-subtrigger": "" }, t), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var fe = Symbol();
var ud = defineComponent({
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
  setup(n, { emit: t }) {
    const e = n, o = J(e, "modelValue", t, {
      passive: true,
      defaultValue: e.defaultValue ?? ""
    }), a = ref(""), { primitiveElement: s, currentElement: l } = H(), r = ref(), u = ref(), { createCollection: d } = se("nav");
    d(r);
    const { delayDuration: c, skipDelayDuration: p } = toRefs(e), f = Lo(false, p), m = computed(() => o.value !== "" || f.value ? 150 : c.value), v = On((h2) => {
      a.value = o.value, o.value = h2;
    }, m);
    return provide(fe, {
      isRootMenu: true,
      modelValue: o,
      previousValue: a,
      baseId: te(),
      dir: e.dir,
      orientation: e.orientation,
      rootNavigationMenu: l,
      indicatorTrack: r,
      onIndicatorTrackChange: (h2) => {
        r.value = h2;
      },
      viewport: u,
      onViewportChange: (h2) => {
        u.value = h2;
      },
      onTriggerEnter: (h2) => {
        v(h2);
      },
      onTriggerLeave: () => {
        f.value = true, v("");
      },
      onContentEnter: (h2) => {
        v(h2);
      },
      onContentLeave: () => {
        v("");
      },
      onItemSelect: (h2) => {
        a.value = o.value, o.value = h2;
      },
      onItemDismiss: () => {
        a.value = o.value, o.value = "";
      }
    }), (h2, _) => (openBlock(), createBlock(unref(x), {
      ref_key: "primitiveElement",
      ref: s,
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
function Jt(n) {
  return n ? "open" : "closed";
}
function Pa(n, t) {
  return `${n}-trigger-${t}`;
}
function co(n, t) {
  return `${n}-content-${t}`;
}
var Tt = "navigationMenu.rootContentDismiss";
function gn(n) {
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
function Sa(n) {
  const t = document.activeElement;
  return n.some((e) => e === t ? true : (e.focus(), document.activeElement !== t));
}
function $i(n) {
  return n.forEach((t) => {
    t.dataset.tabindex = t.getAttribute("tabindex") || "", t.setAttribute("tabindex", "-1");
  }), () => {
    n.forEach((t) => {
      const e = t.dataset.tabindex;
      t.setAttribute("tabindex", e);
    });
  };
}
var Zt = Symbol();
var dd = defineComponent({
  __name: "NavigationMenuItem",
  props: {
    value: {},
    asChild: { type: Boolean },
    as: { default: "li" }
  },
  setup(n) {
    const t = n, { injectCollection: e } = se("nav"), o = e(), a = inject(fe), s = t.value || te(), l = ref(), r = ref(), u = co(a.baseId, s);
    let d = () => ({});
    const c = ref(false);
    async function p(h2 = "start") {
      const _ = document.getElementById(u);
      if (_) {
        d();
        const P = gn(_);
        P.length && Sa(h2 === "start" ? P : P.reverse());
      }
    }
    function f() {
      const h2 = document.getElementById(u);
      if (h2) {
        const _ = gn(h2);
        _.length && (d = $i(_));
      }
    }
    provide(Zt, {
      value: s,
      contentId: u,
      triggerRef: l,
      focusProxyRef: r,
      wasEscapeCloseRef: c,
      onEntryKeyDown: p,
      onFocusProxyEnter: p,
      onContentFocusOutside: f,
      onRootContentClose: f
    });
    function m() {
      var h2;
      a == null || a.onItemDismiss(), (h2 = l.value) == null || h2.focus();
    }
    function v(h2) {
      const _ = document.activeElement;
      if (h2.keyCode === 32 || h2.key === "Enter")
        if ((a == null ? void 0 : a.modelValue.value) === s) {
          m(), h2.preventDefault();
          return;
        } else {
          h2.target.click(), h2.preventDefault();
          return;
        }
      const P = o.value.filter(
        (E) => {
          var T;
          return (T = E.parentElement) == null ? void 0 : T.hasAttribute("data-menu-item");
        }
      ), O = pt(h2, _, void 0, {
        itemsArray: P,
        loop: false
      });
      O && (O == null || O.focus()), h2.preventDefault(), h2.stopPropagation();
    }
    return (h2, _) => (openBlock(), createBlock(unref(x), {
      "as-child": t.asChild,
      as: h2.as,
      "data-menu-item": "",
      onKeydown: withKeys(v, ["up", "down", "left", "right", "home", "end", "space"])
    }, {
      default: withCtx(() => [
        renderSlot(h2.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "onKeydown"]));
  }
});
var Pi = defineComponent({
  __name: "NavigationMenuContentImpl",
  props: {
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss"],
  setup(n, { emit: t }) {
    const e = n, { injectCollection: o } = se("nav"), a = o(), { primitiveElement: s, currentElement: l } = H(), r = inject(fe), u = inject(Zt), d = Pa(r.baseId, u.value), c = co(r.baseId, u.value), p = ref(null), f = computed(() => {
      const E = a.value.map((I) => I.id.split("trigger-")[1]);
      (r == null ? void 0 : r.dir) === "rtl" && E.reverse();
      const T = E.indexOf(r.modelValue.value), B = E.indexOf(r.previousValue.value), D = u.value === (r == null ? void 0 : r.modelValue.value), A = B === E.indexOf(u.value);
      if (!D && !A)
        return p.value;
      const W = (() => {
        if (T !== B) {
          if (D && B !== -1)
            return T > B ? "from-end" : "from-start";
          if (A && T !== -1)
            return T > B ? "to-start" : "to-end";
        }
        return null;
      })();
      return p.value = W, W;
    });
    function m(O) {
      var E, T;
      if (t("focusOutside", O), t("interactOutside", O), !O.defaultPrevented) {
        u.onContentFocusOutside();
        const B = O.target;
        (T = (E = r.rootNavigationMenu) == null ? void 0 : E.value) != null && T.contains(B) && O.preventDefault();
      }
    }
    function v(O) {
      var E;
      if (t("pointerDownOutside", O), !O.defaultPrevented) {
        const T = O.target, B = a.value.some(
          (A) => A.contains(T)
        ), D = (r == null ? void 0 : r.isRootMenu) && ((E = r.viewport.value) == null ? void 0 : E.contains(T));
        (B || D || !(r != null && r.isRootMenu)) && O.preventDefault();
      }
    }
    watchEffect((O) => {
      const E = l.value;
      if (r != null && r.isRootMenu && E) {
        const T = () => {
          var B;
          u.onRootContentClose(), E.contains(document.activeElement) && ((B = u.triggerRef.value) == null || B.focus());
        };
        E.addEventListener(Tt, T), O(
          () => E.removeEventListener(Tt, T)
        );
      }
    });
    function h2(O) {
      var E, T;
      t("escapeKeyDown", O), O.defaultPrevented || (r.onItemDismiss(), (T = (E = u.triggerRef) == null ? void 0 : E.value) == null || T.focus(), u.wasEscapeCloseRef.value = true);
    }
    function _(O) {
      var A;
      const E = O.altKey || O.ctrlKey || O.metaKey, T = O.key === "Tab" && !E, B = gn(O.currentTarget);
      if (T) {
        const W = document.activeElement, I = B.findIndex(
          (U) => U === W
        ), K = O.shiftKey ? B.slice(0, I).reverse() : B.slice(I + 1, B.length);
        if (Sa(K))
          O.preventDefault();
        else {
          (A = u.focusProxyRef.value) == null || A.focus();
          return;
        }
      }
      const D = pt(
        O,
        document.activeElement,
        void 0,
        { itemsArray: B, loop: false }
      );
      D == null || D.focus(), !(O.key === "Enter" || O.key === "Escape") && (O.preventDefault(), O.stopPropagation());
    }
    function P() {
      var E;
      const O = new Event(Tt, {
        bubbles: true,
        cancelable: true
      });
      (E = l.value) == null || E.dispatchEvent(O);
    }
    return (O, E) => {
      var T, B;
      return openBlock(), createBlock(unref(je), mergeProps({
        id: unref(c),
        ref_key: "primitiveElement",
        ref: s,
        "aria-labelledby": unref(d),
        "data-motion": f.value,
        "data-state": unref(Jt)(((T = unref(r)) == null ? void 0 : T.modelValue.value) === unref(u).value),
        "data-orientation": (B = unref(r)) == null ? void 0 : B.orientation
      }, e, {
        onKeydown: _,
        onEscapeKeyDown: h2,
        onPointerDownOutside: v,
        onFocusOutside: m,
        onDismiss: P
      }), {
        default: withCtx(() => [
          renderSlot(O.$slots, "default")
        ]),
        _: 3
      }, 16, ["id", "aria-labelledby", "data-motion", "data-state", "data-orientation"]);
    };
  }
});
var Si = {
  inheritAttrs: false
};
var cd = defineComponent({
  ...Si,
  __name: "NavigationMenuContent",
  props: {
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss"],
  setup(n, { emit: t }) {
    const e = n, o = X(t), a = Vo(), s = inject(fe), l = inject(Zt), r = computed(() => (l == null ? void 0 : l.value) === (s == null ? void 0 : s.modelValue.value)), u = computed(() => !(s != null && s.modelValue.value) && (s != null && s.previousValue.value) ? (s == null ? void 0 : s.previousValue.value) === (l == null ? void 0 : l.value) : false);
    function d(c) {
      t("pointerDownOutside", c), c.preventDefault || s == null || s.onContentLeave();
    }
    return (c, p) => {
      var f, m;
      return unref(a) ? (openBlock(), createBlock(Teleport, {
        key: 0,
        to: (f = unref(s)) == null ? void 0 : f.viewport.value,
        disabled: !((m = unref(s)) != null && m.viewport.value)
      }, [
        createVNode(unref(de), {
          present: r.value || u.value
        }, {
          default: withCtx(() => {
            var v;
            return [
              createVNode(Pi, mergeProps({
                "data-state": unref(Jt)(r.value),
                style: {
                  pointerEvents: !r.value && ((v = unref(s)) != null && v.isRootMenu) ? "none" : void 0
                }
              }, { ...c.$attrs, ...e, ...unref(o) }, {
                onPointerenter: p[0] || (p[0] = (h2) => {
                  var _;
                  return (_ = unref(s)) == null ? void 0 : _.onContentEnter(unref(l).value);
                }),
                onPointerleave: p[1] || (p[1] = (h2) => {
                  var _;
                  return (_ = unref(s)) == null ? void 0 : _.onContentLeave();
                }),
                onPointerdown: d,
                onFocusOutside: p[2] || (p[2] = (h2) => t("focusOutside", h2)),
                onInteractOutside: p[3] || (p[3] = (h2) => t("interactOutside", h2))
              }), {
                default: withCtx(() => [
                  renderSlot(c.$slots, "default")
                ]),
                _: 3
              }, 16, ["data-state", "style"])
            ];
          }),
          _: 3
        }, 8, ["present"])
      ], 8, ["to", "disabled"])) : createCommentVNode("", true);
    };
  }
});
var Ti = {
  inheritAttrs: false
};
var pd = defineComponent({
  ...Ti,
  __name: "NavigationMenuIndicator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(n) {
    const t = n, { injectCollection: e } = se("nav"), o = e(), a = inject(fe), s = ref(), l = computed(() => (a == null ? void 0 : a.orientation) === "horizontal"), r = computed(() => !!(a != null && a.modelValue.value)), u = ref();
    function d() {
      u.value && (s.value = {
        size: l.value ? u.value.offsetWidth : u.value.offsetHeight,
        offset: l.value ? u.value.offsetLeft : u.value.offsetTop
      });
    }
    return watchEffect(() => {
      if (!(a != null && a.modelValue.value)) {
        s.value = void 0;
        return;
      }
      const c = o.value;
      u.value = c.find(
        (p) => p.id.includes(a == null ? void 0 : a.modelValue.value)
      ), d();
    }), Ce(u, d), Ce(a.indicatorTrack, d), (c, p) => {
      var f, m;
      return (f = unref(a)) != null && f.indicatorTrack.value ? (openBlock(), createBlock(Teleport, {
        key: 0,
        to: (m = unref(a)) == null ? void 0 : m.indicatorTrack.value
      }, [
        createVNode(unref(de), { present: r.value }, {
          default: withCtx(() => {
            var v, h2, _, P;
            return [
              createVNode(unref(x), mergeProps({
                "aria-hidden": "",
                "data-state": r.value ? "visible" : "hidden",
                "data-orientation": unref(a).orientation,
                "as-child": t.asChild,
                as: c.as,
                style: {
                  position: "absolute",
                  ...l.value ? {
                    left: 0,
                    width: `${(v = s.value) == null ? void 0 : v.size}px`,
                    transform: `translateX(${(h2 = s.value) == null ? void 0 : h2.offset}px)`
                  } : {
                    top: 0,
                    height: `${(_ = s.value) == null ? void 0 : _.size}px`,
                    transform: `translateY(${(P = s.value) == null ? void 0 : P.offset}px)`
                  }
                }
              }, c.$attrs), {
                default: withCtx(() => [
                  renderSlot(c.$slots, "default")
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
var fd = defineComponent({
  __name: "NavigationMenuLink",
  props: {
    active: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "a" }
  },
  emits: ["select"],
  setup(n, { emit: t }) {
    const e = n;
    async function o(a) {
      var s;
      if (t("select", a), await nextTick(), !a.defaultPrevented && !a.metaKey) {
        const l = new CustomEvent(
          Tt,
          {
            bubbles: true,
            cancelable: true
          }
        );
        (s = a.target) == null || s.dispatchEvent(l);
      }
    }
    return (a, s) => (openBlock(), createBlock(unref(x), {
      as: a.as,
      "data-active": a.active ? "" : void 0,
      "aria-current": a.active ? "page" : void 0,
      "as-child": e.asChild,
      "data-radix-vue-collection-item": "",
      onClick: o
    }, {
      default: withCtx(() => [
        renderSlot(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "data-active", "aria-current", "as-child"]));
  }
});
var Bi = {
  inheritAttrs: false
};
var md = defineComponent({
  ...Bi,
  __name: "NavigationMenuList",
  props: {
    asChild: { type: Boolean },
    as: { default: "ul" }
  },
  setup(n) {
    const t = n, e = inject(fe), { primitiveElement: o, currentElement: a } = H();
    return onMounted(() => {
      e == null || e.onIndicatorTrackChange(a.value);
    }), (s, l) => (openBlock(), createBlock(unref(x), {
      ref_key: "primitiveElement",
      ref: o,
      style: { position: "relative" }
    }, {
      default: withCtx(() => {
        var r;
        return [
          createVNode(unref(x), mergeProps(s.$attrs, {
            "as-child": t.asChild,
            as: s.as,
            "data-orientation": (r = unref(e)) == null ? void 0 : r.orientation
          }), {
            default: withCtx(() => [
              renderSlot(s.$slots, "default")
            ]),
            _: 3
          }, 16, ["as-child", "as", "data-orientation"])
        ];
      }),
      _: 3
    }, 512));
  }
});
var vd = defineComponent({
  __name: "NavigationMenuSub",
  props: {
    modelValue: {},
    defaultValue: {},
    orientation: { default: "horizontal" },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(n, { emit: t }) {
    const e = n, o = J(e, "modelValue", t, {
      passive: true,
      defaultValue: e.defaultValue ?? ""
    }), a = ref(""), s = inject(fe), { primitiveElement: l, currentElement: r } = H(), u = ref(), d = ref(), { createCollection: c } = se("nav");
    return c(u), provide(fe, {
      ...s,
      isRootMenu: false,
      modelValue: o,
      previousValue: a,
      orientation: e.orientation,
      rootNavigationMenu: r,
      indicatorTrack: u,
      onIndicatorTrackChange: (p) => {
        u.value = p;
      },
      viewport: d,
      onViewportChange: (p) => {
        d.value = p;
      },
      onTriggerEnter: (p) => {
        o.value = p;
      },
      onTriggerLeave: () => {
      },
      onContentEnter: () => {
      },
      onContentLeave: () => {
      },
      onItemSelect: (p) => {
        o.value = p;
      },
      onItemDismiss: () => {
        o.value = "";
      }
    }), (p, f) => (openBlock(), createBlock(unref(x), {
      ref_key: "primitiveElement",
      ref: l,
      "data-orientation": p.orientation,
      "as-child": e.asChild,
      as: p.as
    }, {
      default: withCtx(() => [
        renderSlot(p.$slots, "default")
      ]),
      _: 3
    }, 8, ["data-orientation", "as-child", "as"]));
  }
});
var Ai = ["aria-owns"];
var Ii = {
  inheritAttrs: false
};
var hd = defineComponent({
  ...Ii,
  __name: "NavigationMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(n) {
    const t = n, e = inject(fe), o = inject(Zt), { primitiveElement: a, currentElement: s } = H(), l = ref(""), r = ref(""), u = ref(false), d = ref(false), c = computed(() => (o == null ? void 0 : o.value) === (e == null ? void 0 : e.modelValue.value));
    onMounted(() => {
      o.triggerRef = s, l.value = Pa(e.baseId, o.value), r.value = co(e.baseId, o.value);
    });
    function p() {
      d.value = false, o.wasEscapeCloseRef.value = false;
    }
    function f(O) {
      if (O.pointerType === "mouse") {
        if (t.disabled || d.value || o.wasEscapeCloseRef.value || u.value)
          return;
        e.onTriggerEnter(o.value), u.value = true;
      }
    }
    function m(O) {
      if (O.pointerType === "mouse") {
        if (t.disabled)
          return;
        e.onTriggerLeave(), u.value = false;
      }
    }
    function v() {
      u.value || (c.value ? e == null || e.onItemSelect("") : e == null || e.onItemSelect(o.value), d.value = c.value);
    }
    function h2(O) {
      const T = { horizontal: "ArrowDown", vertical: e.dir === "rtl" ? "ArrowLeft" : "ArrowRight" }[e.orientation];
      c.value && O.key === T && (o.onEntryKeyDown(), O.preventDefault(), O.stopPropagation());
    }
    function _(O) {
      o.focusProxyRef.value = De(O);
    }
    function P(O) {
      const E = document.getElementById(o.contentId), T = O.relatedTarget, B = T === s.value, D = E == null ? void 0 : E.contains(T);
      (B || !D) && o.onFocusProxyEnter(B ? "start" : "end");
    }
    return (O, E) => {
      var T;
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(unref(x), mergeProps({
          id: l.value,
          ref_key: "primitiveElement",
          ref: a,
          disabled: O.disabled,
          "data-disabled": O.disabled ? "" : void 0,
          "data-state": unref(Jt)(c.value),
          "aria-expanded": c.value,
          "aria-controls": r.value,
          "as-child": t.asChild,
          as: O.as
        }, O.$attrs, {
          "data-radix-vue-collection-item": "",
          onPointerenter: p,
          onPointermove: f,
          onPointerleave: m,
          onClick: v,
          onKeydown: h2
        }), {
          default: withCtx(() => [
            renderSlot(O.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "disabled", "data-disabled", "data-state", "aria-expanded", "aria-controls", "as-child", "as"]),
        c.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          createVNode(unref(Wn), {
            ref: _,
            "aria-hidden": "",
            tabindex: 0,
            onFocus: P
          }),
          (T = unref(e)) != null && T.viewport ? (openBlock(), createElementBlock("span", {
            key: 0,
            "aria-owns": r.value
          }, null, 8, Ai)) : createCommentVNode("", true)
        ], 64)) : createCommentVNode("", true)
      ], 64);
    };
  }
});
var Di = {
  inheritAttrs: false
};
var gd = defineComponent({
  ...Di,
  __name: "NavigationMenuViewport",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(n) {
    const { primitiveElement: t, currentElement: e } = H(), o = inject(fe), a = ref(), s = computed(() => !!(o != null && o.modelValue.value)), l = computed(() => o.modelValue.value);
    watch(e, () => {
      e.value && o.onViewportChange(e.value);
    });
    const r = ref();
    return watch([l, s], async () => {
      var d, c;
      if (await nextTick(), !e.value)
        return;
      const u = (c = (d = e.value.querySelector("[data-state=open]")) == null ? void 0 : d.children) == null ? void 0 : c[0];
      r.value = u;
    }, { immediate: true }), Ce(r, () => {
      r.value && (a.value = {
        width: r.value.offsetWidth,
        height: r.value.offsetHeight
      });
    }), (u, d) => (openBlock(), createBlock(unref(de), { present: s.value }, {
      default: withCtx(() => {
        var c, p, f, m;
        return [
          createVNode(unref(x), mergeProps(u.$attrs, {
            ref_key: "primitiveElement",
            ref: t,
            as: u.as,
            "as-child": u.asChild,
            "data-state": unref(Jt)(s.value),
            "data-orientation": (c = unref(o)) == null ? void 0 : c.orientation,
            style: {
              // Prevent interaction when animating out
              pointerEvents: !s.value && ((p = unref(o)) != null && p.isRootMenu) ? "none" : void 0,
              ["--radix-navigation-menu-viewport-width"]: a.value ? `${(f = a.value) == null ? void 0 : f.width}px` : void 0,
              ["--radix-navigation-menu-viewport-height"]: a.value ? `${(m = a.value) == null ? void 0 : m.height}px` : void 0
            },
            onPointerenter: d[0] || (d[0] = (v) => {
              var h2;
              return (h2 = unref(o)) == null ? void 0 : h2.onContentEnter(unref(o).modelValue.value);
            }),
            onPointerleave: d[1] || (d[1] = (v) => {
              var h2;
              return (h2 = unref(o)) == null ? void 0 : h2.onContentLeave();
            })
          }), {
            default: withCtx(() => [
              renderSlot(u.$slots, "default")
            ]),
            _: 3
          }, 16, ["as", "as-child", "data-state", "data-orientation", "style"])
        ];
      }),
      _: 3
    }, 8, ["present"]));
  }
});
var ie = Symbol();
var yd = defineComponent({
  __name: "ScrollAreaRoot",
  props: {
    type: { default: "hover" },
    dir: { default: "ltr" },
    scrollHideDelay: { default: 600 },
    asChild: { type: Boolean },
    as: {}
  },
  setup(n) {
    const t = n, { primitiveElement: e, currentElement: o } = H(), a = ref(0), s = ref(0), l = ref(), r = ref(), u = ref(), d = ref(), c = ref(false), p = ref(false);
    function f(A) {
      l.value = A;
    }
    function m(A) {
      r.value = A;
    }
    function v(A) {
      u.value = A;
    }
    function h2(A) {
      d.value = A;
    }
    function _(A) {
      c.value = A;
    }
    function P(A) {
      p.value = A;
    }
    function O(A) {
      a.value = A;
    }
    function E(A) {
      s.value = A;
    }
    const { type: T, dir: B, scrollHideDelay: D } = toRefs(t);
    return provide(ie, {
      type: T,
      dir: B,
      scrollHideDelay: D,
      scrollArea: o,
      viewport: l,
      onViewportChange: f,
      content: r,
      onContentChange: m,
      scrollbarX: u,
      scrollbarXEnabled: c,
      scrollbarY: d,
      scrollbarYEnabled: p,
      onScrollbarXChange: v,
      onScrollbarYChange: h2,
      onScrollbarXEnabledChange: _,
      onScrollbarYEnabledChange: P,
      onCornerWidthChange: O,
      onCornerHeightChange: E
    }), (A, W) => (openBlock(), createBlock(unref(x), {
      ref_key: "primitiveElement",
      ref: e,
      "as-child": t.asChild,
      as: A.as,
      dir: t.dir,
      style: normalizeStyle({
        position: "relative",
        // Pass corner sizes as CSS vars to reduce re-renders of context consumers
        ["--radix-scroll-area-corner-width"]: `${a.value}px`,
        ["--radix-scroll-area-corner-height"]: `${s.value}px`
      })
    }, {
      default: withCtx(() => [
        renderSlot(A.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "dir", "style"]));
  }
});
var xi = {
  inheritAttrs: false
};
var _d = defineComponent({
  ...xi,
  __name: "ScrollAreaViewport",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(n) {
    const t = n, e = inject(ie), { primitiveElement: o, currentElement: a } = H(), s = ref();
    return onMounted(() => {
      e == null || e.onViewportChange(s.value), e == null || e.onContentChange(a.value);
    }), (l, r) => {
      var u, d;
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(unref(x), { as: "style" }, {
          default: withCtx(() => [
            createTextVNode(" /* Hide scrollbars cross-browser and enable momentum scroll for touch devices */ [data-radix-scroll-area-viewport] { scrollbar-width:none; -ms-overflow-style:none; -webkit-overflow-scrolling:touch; } [data-radix-scroll-area-viewport]::-webkit-scrollbar { display:none; } ")
          ]),
          _: 1
        }),
        createBaseVNode("div", mergeProps({
          ref_key: "viewportElement",
          ref: s,
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
            overflowX: (u = unref(e)) != null && u.scrollbarXEnabled.value ? "scroll" : "hidden",
            overflowY: (d = unref(e)) != null && d.scrollbarYEnabled.value ? "scroll" : "hidden"
          }
        }, l.$attrs), [
          createVNode(unref(x), {
            ref_key: "primitiveElement",
            ref: o,
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
function Mi(n, [t, e]) {
  return Math.min(e, Math.max(t, n));
}
function Ta(n, t) {
  return (e) => {
    if (n[0] === n[1] || t[0] === t[1])
      return t[0];
    const o = (t[1] - t[0]) / (n[1] - n[0]);
    return t[0] + o * (e - n[0]);
  };
}
function Qt(n) {
  const t = Ba(n.viewport, n.content), e = n.scrollbar.paddingStart + n.scrollbar.paddingEnd, o = (n.scrollbar.size - e) * t;
  return Math.max(o, 18);
}
function Ba(n, t) {
  const e = n / t;
  return Number.isNaN(e) ? 0 : e;
}
function ki(n, t = () => {
}) {
  let e = { left: n.scrollLeft, top: n.scrollTop }, o = 0;
  return function a() {
    const s = { left: n.scrollLeft, top: n.scrollTop }, l = e.left !== s.left, r = e.top !== s.top;
    (l || r) && t(), e = s, o = window.requestAnimationFrame(a);
  }(), () => window.cancelAnimationFrame(o);
}
function Do(n, t, e = "ltr") {
  const o = Qt(t), a = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, s = t.scrollbar.size - a, l = t.content - t.viewport, r = s - o, u = e === "ltr" ? [0, l] : [l * -1, 0], d = Mi(
    n,
    u
  );
  return Ta([0, l], [0, r])(d);
}
function St(n) {
  return n ? Number.parseInt(n, 10) : 0;
}
function Ri(n, t, e, o = "ltr") {
  const a = Qt(e), s = a / 2, l = t || s, r = a - l, u = e.scrollbar.paddingStart + l, d = e.scrollbar.size - e.scrollbar.paddingEnd - r, c = e.content - e.viewport, p = o === "ltr" ? [0, c] : [c * -1, 0];
  return Ta(
    [u, d],
    p
  )(n);
}
function xo(n, t) {
  return n > 0 && n < t;
}
var Aa = defineComponent({
  __name: "ScrollAreaScrollbarImpl",
  props: {
    isHorizontal: { type: Boolean }
  },
  emits: ["onDragScroll", "onWheelScroll", "onThumbPointerDown"],
  setup(n, { emit: t }) {
    const e = n, o = inject(ie), a = inject(
      wt
    ), s = inject(Ct), { primitiveElement: l, currentElement: r } = H(), u = ref(""), d = ref();
    function c(_) {
      var P, O;
      if (d.value) {
        const E = _.clientX - ((P = d.value) == null ? void 0 : P.left), T = _.clientY - ((O = d.value) == null ? void 0 : O.top);
        t("onDragScroll", { x: E, y: T });
      }
    }
    function p(_) {
      _.button === 0 && (_.target.setPointerCapture(_.pointerId), d.value = r.value.getBoundingClientRect(), u.value = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", o != null && o.viewport && (o.viewport.value.style.scrollBehavior = "auto"), c(_));
    }
    function f(_) {
      c(_);
    }
    function m(_) {
      const P = _.target;
      P.hasPointerCapture(_.pointerId) && P.releasePointerCapture(_.pointerId), document.body.style.webkitUserSelect = u.value, o != null && o.viewport && (o.viewport.value.style.scrollBehavior = ""), d.value = void 0;
    }
    function v(_) {
      var T;
      if (!a)
        return;
      const P = _.target, O = (T = r.value) == null ? void 0 : T.contains(P), E = a.sizes.value.content - a.sizes.value.viewport;
      O && a.handleWheelScroll(_, E);
    }
    onMounted(() => {
      document.addEventListener("wheel", v, { passive: false });
    }), onUnmounted(() => {
      document.removeEventListener("wheel", v);
    });
    function h2() {
      var _, P, O, E, T, B;
      r.value && (e.isHorizontal ? a == null || a.handleSizeChange({
        content: ((_ = o == null ? void 0 : o.viewport.value) == null ? void 0 : _.scrollWidth) ?? 0,
        viewport: ((P = o == null ? void 0 : o.viewport.value) == null ? void 0 : P.offsetWidth) ?? 0,
        scrollbar: {
          size: ((O = r.value) == null ? void 0 : O.clientWidth) ?? 0,
          paddingStart: St(getComputedStyle(r.value).paddingLeft),
          paddingEnd: St(getComputedStyle(r.value).paddingRight)
        }
      }) : a == null || a.handleSizeChange({
        content: ((E = o == null ? void 0 : o.viewport.value) == null ? void 0 : E.scrollHeight) ?? 0,
        viewport: ((T = o == null ? void 0 : o.viewport.value) == null ? void 0 : T.offsetHeight) ?? 0,
        scrollbar: {
          size: ((B = r.value) == null ? void 0 : B.clientHeight) ?? 0,
          paddingStart: St(getComputedStyle(r.value).paddingLeft),
          paddingEnd: St(getComputedStyle(r.value).paddingRight)
        }
      }));
    }
    return Ce(r, h2), Ce(o == null ? void 0 : o.content, h2), (_, P) => {
      var O, E;
      return openBlock(), createBlock(unref(x), {
        ref_key: "primitiveElement",
        ref: l,
        style: { position: "absolute" },
        "data-scrollbarimpl": "",
        as: (O = unref(s)) == null ? void 0 : O.as.value,
        "as-child": (E = unref(s)) == null ? void 0 : E.asChild.value,
        onPointerdown: p,
        onPointermove: f,
        onPointerup: m
      }, {
        default: withCtx(() => [
          renderSlot(_.$slots, "default")
        ]),
        _: 3
      }, 8, ["as", "as-child"]);
    };
  }
});
var Ni = defineComponent({
  __name: "ScrollAreaScrollbarX",
  setup(n) {
    const t = inject(ie), e = inject(
      wt
    ), { primitiveElement: o, currentElement: a } = H();
    onMounted(() => {
      a.value && (t == null || t.onScrollbarXChange(a.value));
    });
    const s = computed(() => e == null ? void 0 : e.sizes.value);
    return (l, r) => {
      var u, d, c, p;
      return openBlock(), createBlock(Aa, {
        ref_key: "primitiveElement",
        ref: o,
        "is-horizontal": true,
        "data-orientation": "horizontal",
        style: normalizeStyle({
          bottom: 0,
          left: ((d = (u = unref(t)) == null ? void 0 : u.dir) == null ? void 0 : d.value) === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
          right: ((p = (c = unref(t)) == null ? void 0 : c.dir) == null ? void 0 : p.value) === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
          ["--radix-scroll-area-thumb-width"]: s.value ? `${unref(Qt)(s.value)}px` : void 0
        }),
        onOnDragScroll: r[0] || (r[0] = (f) => {
          var m;
          return (m = unref(e)) == null ? void 0 : m.onDragScroll(f.x);
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
var Fi = defineComponent({
  __name: "ScrollAreaScrollbarY",
  setup(n) {
    const t = inject(ie), e = inject(
      wt
    ), { primitiveElement: o, currentElement: a } = H();
    onMounted(() => {
      a.value && (t == null || t.onScrollbarYChange(a.value));
    });
    const s = computed(() => e == null ? void 0 : e.sizes.value);
    return (l, r) => {
      var u, d, c, p;
      return openBlock(), createBlock(Aa, {
        ref_key: "primitiveElement",
        ref: o,
        "is-horizontal": false,
        "data-orientation": "vertical",
        style: normalizeStyle({
          top: 0,
          right: ((d = (u = unref(t)) == null ? void 0 : u.dir) == null ? void 0 : d.value) === "ltr" ? 0 : void 0,
          left: ((p = (c = unref(t)) == null ? void 0 : c.dir) == null ? void 0 : p.value) === "rtl" ? 0 : void 0,
          bottom: "var(--radix-scroll-area-corner-height)",
          ["--radix-scroll-area-thumb-height"]: s.value ? `${unref(Qt)(s.value)}px` : void 0
        }),
        onOnDragScroll: r[0] || (r[0] = (f) => {
          var m;
          return (m = unref(e)) == null ? void 0 : m.onDragScroll(f.y);
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
var wt = Symbol();
var po = defineComponent({
  __name: "ScrollAreaScrollbarVisible",
  setup(n) {
    const t = inject(ie), e = inject(Ct), o = ref({
      content: 0,
      viewport: 0,
      scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
    }), a = computed(() => {
      const _ = Ba(o.value.viewport, o.value.content);
      return _ > 0 && _ < 1;
    }), s = ref(), l = ref(0);
    function r(_, P) {
      if (f.value) {
        const O = t.viewport.value.scrollLeft + _.deltaY;
        t.viewport.value.scrollLeft = O, xo(O, P) && _.preventDefault();
      } else {
        const O = t.viewport.value.scrollTop + _.deltaY;
        t.viewport.value.scrollTop = O, xo(O, P) && _.preventDefault();
      }
    }
    function u(_, P) {
      f.value ? l.value = P.x : l.value = P.y;
    }
    function d(_) {
      l.value = 0;
    }
    function c(_) {
      o.value = _;
    }
    function p(_, P) {
      return Ri(
        _,
        l.value,
        o.value,
        P
      );
    }
    const f = computed(
      () => e == null ? void 0 : e.isHorizontal.value
    );
    function m(_) {
      var P;
      f.value ? t.viewport.value.scrollLeft = p(
        _,
        (P = t.dir) == null ? void 0 : P.value
      ) : t.viewport.value.scrollTop = p(_);
    }
    function v() {
      var _;
      if (f.value) {
        if (t != null && t.viewport.value && s.value) {
          const P = t == null ? void 0 : t.viewport.value.scrollLeft, O = Do(
            P,
            o.value,
            (_ = t == null ? void 0 : t.dir) == null ? void 0 : _.value
          );
          s.value.style.transform = `translate3d(${O}px, 0, 0)`;
        }
      } else if (t != null && t.viewport.value && s.value) {
        const P = t == null ? void 0 : t.viewport.value.scrollTop, O = Do(P, o.value);
        s.value.style.transform = `translate3d(0, ${O}px, 0)`;
      }
    }
    function h2(_) {
      s.value = _;
    }
    return provide(
      wt,
      {
        sizes: o,
        hasThumb: a,
        handleWheelScroll: r,
        handleThumbDown: u,
        handleThumbUp: d,
        handleSizeChange: c,
        onThumbPositionChange: v,
        onThumbChange: h2,
        onDragScroll: m
      }
    ), (_, P) => f.value ? (openBlock(), createBlock(Ni, normalizeProps(mergeProps({ key: 0 }, _.$attrs)), {
      default: withCtx(() => [
        renderSlot(_.$slots, "default")
      ]),
      _: 3
    }, 16)) : (openBlock(), createBlock(Fi, normalizeProps(mergeProps({ key: 1 }, _.$attrs)), {
      default: withCtx(() => [
        renderSlot(_.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Ia = defineComponent({
  __name: "ScrollAreaScrollbarAuto",
  setup(n) {
    const t = inject(ie), e = inject(Ct), o = ref(false), a = On(() => {
      if (t != null && t.viewport.value) {
        const s = (t == null ? void 0 : t.viewport.value.offsetWidth) < (t == null ? void 0 : t.viewport.value.scrollWidth), l = (t == null ? void 0 : t.viewport.value.offsetHeight) < (t == null ? void 0 : t.viewport.value.scrollHeight);
        o.value = e != null && e.isHorizontal.value ? s : l;
      }
    }, 10);
    return Ce(t == null ? void 0 : t.viewport, a), Ce(t == null ? void 0 : t.content, a), (s, l) => o.value ? (openBlock(), createBlock(po, mergeProps({ key: 0 }, s.$attrs, {
      "data-state": o.value ? "visible" : "hidden"
    }), {
      default: withCtx(() => [
        renderSlot(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-state"])) : createCommentVNode("", true);
  }
});
var Li = {
  inheritAttrs: false
};
var Ki = defineComponent({
  ...Li,
  __name: "ScrollAreaScrollbarHover",
  setup(n) {
    const t = inject(ie);
    let e;
    const o = ref(false);
    function a() {
      window.clearTimeout(e), o.value = true;
    }
    function s() {
      e = window.setTimeout(() => {
        o.value = false;
      }, t == null ? void 0 : t.scrollHideDelay.value);
    }
    return onMounted(() => {
      const l = t == null ? void 0 : t.scrollArea.value;
      l && (l.addEventListener("pointerenter", a), l.addEventListener("pointerleave", s));
    }), onUnmounted(() => {
      const l = t == null ? void 0 : t.scrollArea.value;
      l && (window.clearTimeout(e), l.removeEventListener("pointerenter", a), l.removeEventListener("pointerleave", s));
    }), (l, r) => o.value ? (openBlock(), createBlock(Ia, mergeProps({ key: 0 }, l.$attrs, {
      "data-state": o.value ? "visible" : "hidden"
    }), {
      default: withCtx(() => [
        renderSlot(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-state"])) : createCommentVNode("", true);
  }
});
var Vi = defineComponent({
  __name: "ScrollAreaScrollbarScroll",
  setup(n) {
    const t = inject(ie), e = inject(Ct), { state: o, dispatch: a } = Uo("hidden", {
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
        t == null ? void 0 : t.scrollHideDelay.value
      );
    });
    const s = On(() => a("SCROLL_END"), 100);
    return watchEffect(() => {
      const l = t == null ? void 0 : t.viewport.value, r = e != null && e.isHorizontal.value ? "scrollLeft" : "scrollTop";
      if (l) {
        let u = l[r];
        const d = () => {
          const c = l[r];
          u !== c && (a("SCROLL"), s()), u = c;
        };
        l.addEventListener("scroll", d);
      }
    }), (l, r) => unref(o) !== "hidden" ? (openBlock(), createBlock(po, normalizeProps(mergeProps({ key: 0 }, l.$attrs)), {
      default: withCtx(() => [
        renderSlot(l.$slots, "default")
      ]),
      _: 3
    }, 16)) : createCommentVNode("", true);
  }
});
var Ct = Symbol();
var Hi = {
  inheritAttrs: false
};
var bd = defineComponent({
  ...Hi,
  __name: "ScrollAreaScrollbar",
  props: {
    orientation: { default: "vertical" },
    forceMount: { type: Boolean, default: void 0 },
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(n) {
    const t = n, e = inject(ie), o = computed(() => t.orientation === "horizontal");
    watch(
      o,
      () => {
        o.value ? e == null || e.onScrollbarXEnabledChange(true) : e == null || e.onScrollbarYEnabledChange(true);
      },
      { immediate: true }
    ), onUnmounted(() => {
      e == null || e.onScrollbarXEnabledChange(false), e == null || e.onScrollbarYEnabledChange(false);
    });
    const { orientation: a, forceMount: s, asChild: l, as: r } = toRefs(t);
    return provide(Ct, {
      orientation: a,
      forceMount: s,
      isHorizontal: o,
      as: r,
      asChild: l
    }), (u, d) => {
      var c, p, f, m;
      return ((c = unref(e)) == null ? void 0 : c.type.value) === "hover" ? (openBlock(), createBlock(Ki, mergeProps({ key: 0 }, u.$attrs, { "force-mount": unref(s) }), {
        default: withCtx(() => [
          renderSlot(u.$slots, "default")
        ]),
        _: 3
      }, 16, ["force-mount"])) : ((p = unref(e)) == null ? void 0 : p.type.value) === "scroll" ? (openBlock(), createBlock(Vi, mergeProps({ key: 1 }, u.$attrs, { "force-mount": unref(s) }), {
        default: withCtx(() => [
          renderSlot(u.$slots, "default")
        ]),
        _: 3
      }, 16, ["force-mount"])) : ((f = unref(e)) == null ? void 0 : f.type.value) === "auto" ? (openBlock(), createBlock(Ia, mergeProps({ key: 2 }, u.$attrs, { "force-mount": unref(s) }), {
        default: withCtx(() => [
          renderSlot(u.$slots, "default")
        ]),
        _: 3
      }, 16, ["force-mount"])) : ((m = unref(e)) == null ? void 0 : m.type.value) === "always" ? (openBlock(), createBlock(po, mergeProps({ key: 3 }, u.$attrs, {
        "data-state": "visible",
        "force-mount": unref(s)
      }), {
        default: withCtx(() => [
          renderSlot(u.$slots, "default")
        ]),
        _: 3
      }, 16, ["force-mount"])) : createCommentVNode("", true);
    };
  }
});
var wd = defineComponent({
  __name: "ScrollAreaThumb",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(n) {
    const t = n, e = inject(ie), o = inject(
      wt
    );
    function a(f) {
      const v = f.target.getBoundingClientRect(), h2 = f.clientX - v.left, _ = f.clientY - v.top;
      o == null || o.handleThumbDown(f, { x: h2, y: _ });
    }
    function s(f) {
      o == null || o.handleThumbUp(f);
    }
    const { primitiveElement: l, currentElement: r } = H(), u = ref(), d = computed(() => e == null ? void 0 : e.viewport.value);
    function c() {
      if (!u.value) {
        const f = ki(
          d.value,
          o == null ? void 0 : o.onThumbPositionChange
        );
        u.value = f, o == null || o.onThumbPositionChange();
      }
    }
    const p = computed(() => o == null ? void 0 : o.sizes.value);
    return is(p, () => {
      o == null || o.onThumbChange(r.value), d.value && (o == null || o.onThumbPositionChange(), d.value.addEventListener("scroll", c));
    }), onUnmounted(() => {
      var f;
      d.value.removeEventListener("scroll", c), (f = e == null ? void 0 : e.viewport.value) == null || f.removeEventListener("scroll", c);
    }), (f, m) => {
      var v;
      return openBlock(), createBlock(unref(x), {
        ref_key: "primitiveElement",
        ref: l,
        "data-state": (v = unref(o)) != null && v.hasThumb ? "visible" : "hidden",
        style: normalizeStyle({
          width: "var(--radix-scroll-area-thumb-width)",
          height: "var(--radix-scroll-area-thumb-height)"
        }),
        "as-child": t.asChild,
        as: f.as,
        onPointerdown: a,
        onPointerup: s
      }, {
        default: withCtx(() => [
          renderSlot(f.$slots, "default")
        ]),
        _: 3
      }, 8, ["data-state", "style", "as-child", "as"]);
    };
  }
});
var Wi = defineComponent({
  __name: "ScrollAreaCornerImpl",
  setup(n) {
    const t = inject(ie), e = ref(0), o = ref(0), a = computed(() => !!e.value && !!o.value);
    function s() {
      var u;
      const r = ((u = t == null ? void 0 : t.scrollbarX.value) == null ? void 0 : u.offsetHeight) || 0;
      t == null || t.onCornerHeightChange(r), o.value = r;
    }
    function l() {
      var u;
      const r = ((u = t == null ? void 0 : t.scrollbarY.value) == null ? void 0 : u.offsetWidth) || 0;
      t == null || t.onCornerWidthChange(r), e.value = r;
    }
    return Ce(t == null ? void 0 : t.scrollbarX.value, s), Ce(t == null ? void 0 : t.scrollbarY.value, l), watch(() => t == null ? void 0 : t.scrollbarX.value, s), watch(() => t == null ? void 0 : t.scrollbarY.value, l), (r, u) => {
      var d;
      return a.value ? (openBlock(), createBlock(unref(x), mergeProps({
        key: 0,
        style: {
          width: `${e.value}px`,
          height: `${o.value}px`,
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
var Cd = defineComponent({
  __name: "ScrollAreaCorner",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(n) {
    const t = n, e = inject(ie), o = computed(
      () => !!(e != null && e.scrollbarX.value) && !!e.scrollbarY.value
    ), a = computed(
      () => (e == null ? void 0 : e.type.value) !== "scroll" && o.value
    );
    return (s, l) => a.value ? (openBlock(), createBlock(Wi, normalizeProps(mergeProps({ key: 0 }, t)), {
      default: withCtx(() => [
        renderSlot(s.$slots, "default")
      ]),
      _: 3
    }, 16)) : createCommentVNode("", true);
  }
});
export {
  Xi as AccordionContent,
  qi as AccordionHeader,
  Gi as AccordionItem,
  Yi as AccordionRoot,
  Ji as AccordionTrigger,
  $r as AlertDialogAction,
  Cr as AlertDialogCancel,
  br as AlertDialogContent,
  Or as AlertDialogDescription,
  wr as AlertDialogOverlay,
  _r as AlertDialogPortal,
  gr as AlertDialogRoot,
  Er as AlertDialogTitle,
  yr as AlertDialogTrigger,
  or as AspectRatio,
  xr as AvatarFallback,
  Dr as AvatarImage,
  Ir as AvatarRoot,
  Qi as CheckboxIndicator,
  Zi as CheckboxRoot,
  Is as CollapsibleContent,
  Ss as CollapsibleRoot,
  Ts as CollapsibleTrigger,
  yu as ContextMenuArrow,
  Cu as ContextMenuCheckboxItem,
  gu as ContextMenuContent,
  bu as ContextMenuGroup,
  _u as ContextMenuItem,
  Eu as ContextMenuItemIndicator,
  Ou as ContextMenuLabel,
  hu as ContextMenuPortal,
  $u as ContextMenuRadioGroup,
  Pu as ContextMenuRadioItem,
  mu as ContextMenuRoot,
  wu as ContextMenuSeparator,
  Su as ContextMenuSub,
  Tu as ContextMenuSubContent,
  Bu as ContextMenuSubTrigger,
  vu as ContextMenuTrigger,
  la as DialogClose,
  bl as DialogContent,
  El as DialogDescription,
  wl as DialogOverlay,
  js as DialogPortal,
  Zs as DialogRoot,
  Cl as DialogTitle,
  Qs as DialogTrigger,
  nu as DropdownMenuArrow,
  lu as DropdownMenuCheckboxItem,
  tu as DropdownMenuContent,
  au as DropdownMenuGroup,
  ou as DropdownMenuItem,
  iu as DropdownMenuItemIndicator,
  ru as DropdownMenuLabel,
  eu as DropdownMenuPortal,
  uu as DropdownMenuRadioGroup,
  du as DropdownMenuRadioItem,
  Qr as DropdownMenuRoot,
  su as DropdownMenuSeparator,
  cu as DropdownMenuSub,
  pu as DropdownMenuSubContent,
  fu as DropdownMenuSubTrigger,
  jr as DropdownMenuTrigger,
  zr as HoverCardArrow,
  Wr as HoverCardContent,
  Hr as HoverCardPortal,
  Kr as HoverCardRoot,
  Vr as HoverCardTrigger,
  nr as Label,
  Zu as MenubarArrow,
  td as MenubarCheckboxItem,
  Ju as MenubarContent,
  ju as MenubarGroup,
  Qu as MenubarItem,
  nd as MenubarItemIndicator,
  od as MenubarLabel,
  Gu as MenubarMenu,
  qu as MenubarPortal,
  ad as MenubarRadioGroup,
  sd as MenubarRadioItem,
  Yu as MenubarRoot,
  ed as MenubarSeparator,
  ld as MenubarSub,
  id as MenubarSubContent,
  rd as MenubarSubTrigger,
  Xu as MenubarTrigger,
  cd as NavigationMenuContent,
  pd as NavigationMenuIndicator,
  dd as NavigationMenuItem,
  fd as NavigationMenuLink,
  md as NavigationMenuList,
  ud as NavigationMenuRoot,
  vd as NavigationMenuSub,
  hd as NavigationMenuTrigger,
  gd as NavigationMenuViewport,
  Zr as PopoverAnchor,
  qr as PopoverArrow,
  Jr as PopoverClose,
  Xr as PopoverContent,
  Gr as PopoverPortal,
  Ur as PopoverRoot,
  Yr as PopoverTrigger,
  hr as ProgressIndicator,
  vr as ProgressRoot,
  mr as RadioGroupIndicator,
  fr as RadioGroupItem,
  pr as RadioGroupRoot,
  Cd as ScrollAreaCorner,
  yd as ScrollAreaRoot,
  bd as ScrollAreaScrollbar,
  wd as ScrollAreaThumb,
  _d as ScrollAreaViewport,
  ku as SelectArrow,
  Mu as SelectContent,
  Lu as SelectGroup,
  Uu as SelectIcon,
  Nu as SelectItem,
  Fu as SelectItemIndicator,
  Vu as SelectItemText,
  Ku as SelectLabel,
  Du as SelectPortal,
  Au as SelectRoot,
  Wu as SelectScrollDownButton,
  Hu as SelectScrollUpButton,
  Ru as SelectSeparator,
  Iu as SelectTrigger,
  zu as SelectValue,
  xu as SelectViewport,
  tr as Separator,
  cr as SliderRange,
  rr as SliderRoot,
  ur as SliderThumb,
  dr as SliderTrack,
  ji as SwitchRoot,
  er as SwitchThumb,
  lr as TabsContent,
  sr as TabsList,
  ar as TabsRoot,
  ir as TabsTrigger,
  Rs as Toggle,
  zs as ToggleGroupItem,
  Ws as ToggleGroupRoot,
  Ol as ToolbarButton,
  Sr as ToolbarLink,
  Pr as ToolbarRoot,
  Ar as ToolbarSeparator,
  Tr as ToolbarToggleGroup,
  Br as ToolbarToggleItem,
  Fr as TooltipArrow,
  Nr as TooltipContent,
  Lr as TooltipPortal,
  Mr as TooltipProvider,
  kr as TooltipRoot,
  Rr as TooltipTrigger
};
//# sourceMappingURL=radix-vue.js.map
