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
} from "./chunk-OX6HOUGK.js";
import "./chunk-76J2PTFD.js";

// node_modules/.pnpm/radix-vue@0.1.24_vue@3.3.4/node_modules/radix-vue/dist/index.js
var Ya = Object.defineProperty;
var Ga = Object.defineProperties;
var Xa = Object.getOwnPropertyDescriptors;
var fn = Object.getOwnPropertySymbols;
var qa = Object.prototype.hasOwnProperty;
var Ja = Object.prototype.propertyIsEnumerable;
var mn = (o, t, e) => t in o ? Ya(o, t, { enumerable: true, configurable: true, writable: true, value: e }) : o[t] = e;
var Za = (o, t) => {
  for (var e in t || (t = {}))
    qa.call(t, e) && mn(o, e, t[e]);
  if (fn)
    for (var e of fn(t))
      Ja.call(t, e) && mn(o, e, t[e]);
  return o;
};
var Qa = (o, t) => Ga(o, Xa(t));
function ja(o, t) {
  var e;
  const n = shallowRef();
  return watchEffect(() => {
    n.value = o();
  }, Qa(Za({}, t), {
    flush: (e = t == null ? void 0 : t.flush) != null ? e : "sync"
  })), readonly(n);
}
function es(o, t) {
  let e, n, a;
  const s = ref(true), l = () => {
    s.value = true, a();
  };
  watch(o, l, { flush: "sync" });
  const r = typeof t == "function" ? t : t.get, u = typeof t == "function" ? void 0 : t.set, d = customRef((c, f) => (n = c, a = f, {
    get() {
      return s.value && (e = r(), s.value = false), n(), e;
    },
    set(p) {
      u == null || u(p);
    }
  }));
  return Object.isExtensible(d) && (d.trigger = l), d;
}
function Mt(o) {
  return getCurrentScope() ? (onScopeDispose(o), true) : false;
}
function wo(o) {
  let t = false, e;
  const n = effectScope(true);
  return (...a) => (t || (e = n.run(() => o(...a)), t = true), e);
}
function Ee(o) {
  return typeof o == "function" ? o() : unref(o);
}
var Te = typeof window < "u";
var ts = (o) => typeof o < "u";
var vn = (o, t, e) => Math.min(e, Math.max(t, o));
var Je = () => {
};
var ao = os();
function os() {
  var o;
  return Te && ((o = window == null ? void 0 : window.navigator) == null ? void 0 : o.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
}
function ns(o, t) {
  function e(...n) {
    return new Promise((a, s) => {
      Promise.resolve(o(() => t.apply(this, n), { fn: t, thisArg: this, args: n })).then(a).catch(s);
    });
  }
  return e;
}
function as(o, t = {}) {
  let e, n, a = Je;
  const s = (r) => {
    clearTimeout(r), a(), a = Je;
  };
  return (r) => {
    const u = Ee(o), d = Ee(t.maxWait);
    return e && s(e), u <= 0 || d !== void 0 && d <= 0 ? (n && (s(n), n = null), Promise.resolve(r())) : new Promise((c, f) => {
      a = t.rejectOnCancel ? f : c, d && !n && (n = setTimeout(() => {
        e && s(e), n = null, c(r());
      }, d)), e = setTimeout(() => {
        n && s(n), n = null, c(r());
      }, u);
    });
  };
}
function Fn(...o) {
  if (o.length !== 1)
    return toRef(...o);
  const t = o[0];
  return typeof t == "function" ? readonly(customRef(() => ({ get: t, set: Je }))) : ref(t);
}
function Kn(o, t = 1e4) {
  return customRef((e, n) => {
    let a = o, s;
    const l = () => setTimeout(() => {
      a = o, n();
    }, Ee(t));
    return Mt(() => {
      clearTimeout(s);
    }), {
      get() {
        return e(), a;
      },
      set(r) {
        a = r, n(), clearTimeout(s), s = l();
      }
    };
  });
}
function Co(o, t = 200, e = {}) {
  return ns(
    as(t, e),
    o
  );
}
function ss(o, t, e) {
  const n = watch(o, (...a) => (nextTick(() => n()), t(...a)), e);
}
function ue(o) {
  var t;
  const e = Ee(o);
  return (t = e == null ? void 0 : e.$el) != null ? t : e;
}
var pt = Te ? window : void 0;
var jt = Te ? window.document : void 0;
function pe(...o) {
  let t, e, n, a;
  if (typeof o[0] == "string" || Array.isArray(o[0]) ? ([e, n, a] = o, t = pt) : [t, e, n, a] = o, !t)
    return Je;
  Array.isArray(e) || (e = [e]), Array.isArray(n) || (n = [n]);
  const s = [], l = () => {
    s.forEach((c) => c()), s.length = 0;
  }, r = (c, f, p, m) => (c.addEventListener(f, p, m), () => c.removeEventListener(f, p, m)), u = watch(
    () => [ue(t), Ee(a)],
    ([c, f]) => {
      l(), c && s.push(
        ...e.flatMap((p) => n.map((m) => r(c, p, m, f)))
      );
    },
    { immediate: true, flush: "post" }
  ), d = () => {
    u(), l();
  };
  return Mt(d), d;
}
var hn = false;
function ls(o, t, e = {}) {
  const { window: n = pt, ignore: a = [], capture: s = true, detectIframe: l = false } = e;
  if (!n)
    return;
  ao && !hn && (hn = true, Array.from(n.document.body.children).forEach((p) => p.addEventListener("click", Je)), n.document.documentElement.addEventListener("click", Je));
  let r = true;
  const u = (p) => a.some((m) => {
    if (typeof m == "string")
      return Array.from(n.document.querySelectorAll(m)).some((v) => v === p.target || p.composedPath().includes(v));
    {
      const v = ue(m);
      return v && (p.target === v || p.composedPath().includes(v));
    }
  }), c = [
    pe(n, "click", (p) => {
      const m = ue(o);
      if (!(!m || m === p.target || p.composedPath().includes(m))) {
        if (p.detail === 0 && (r = !u(p)), !r) {
          r = true;
          return;
        }
        t(p);
      }
    }, { passive: true, capture: s }),
    pe(n, "pointerdown", (p) => {
      const m = ue(o);
      m && (r = !p.composedPath().includes(m) && !u(p));
    }, { passive: true }),
    l && pe(n, "blur", (p) => {
      setTimeout(() => {
        var m;
        const v = ue(o);
        ((m = n.document.activeElement) == null ? void 0 : m.tagName) === "IFRAME" && !(v != null && v.contains(n.document.activeElement)) && t(p);
      }, 0);
    })
  ].filter(Boolean);
  return () => c.forEach((p) => p());
}
function is(o) {
  return typeof o == "function" ? o : typeof o == "string" ? (t) => t.key === o : Array.isArray(o) ? (t) => o.includes(t.key) : () => true;
}
function rs(...o) {
  let t, e, n = {};
  o.length === 3 ? (t = o[0], e = o[1], n = o[2]) : o.length === 2 ? typeof o[1] == "object" ? (t = true, e = o[0], n = o[1]) : (t = o[0], e = o[1]) : (t = true, e = o[0]);
  const {
    target: a = pt,
    eventName: s = "keydown",
    passive: l = false,
    dedupe: r = false
  } = n, u = is(t);
  return pe(a, s, (c) => {
    c.repeat && Ee(r) || u(c) && e(c);
  }, l);
}
function us(o = {}) {
  var t;
  const {
    window: e = pt,
    deep: n = true
  } = o, a = (t = o.document) != null ? t : e == null ? void 0 : e.document, s = () => {
    var r;
    let u = a == null ? void 0 : a.activeElement;
    if (n)
      for (; u != null && u.shadowRoot; )
        u = (r = u == null ? void 0 : u.shadowRoot) == null ? void 0 : r.activeElement;
    return u;
  }, l = es(
    () => null,
    () => s()
  );
  return e && (pe(e, "blur", (r) => {
    r.relatedTarget === null && l.trigger();
  }, true), pe(e, "focus", l.trigger, true)), l;
}
function Vn() {
  const o = ref(false);
  return getCurrentInstance() && onMounted(() => {
    o.value = true;
  }), o;
}
function ds(o) {
  const t = Vn();
  return computed(() => (t.value, !!o()));
}
function cs(o) {
  return JSON.parse(JSON.stringify(o));
}
var gn = Object.getOwnPropertySymbols;
var ps = Object.prototype.hasOwnProperty;
var fs = Object.prototype.propertyIsEnumerable;
var ms = (o, t) => {
  var e = {};
  for (var n in o)
    ps.call(o, n) && t.indexOf(n) < 0 && (e[n] = o[n]);
  if (o != null && gn)
    for (var n of gn(o))
      t.indexOf(n) < 0 && fs.call(o, n) && (e[n] = o[n]);
  return e;
};
function Oe(o, t, e = {}) {
  const n = e, { window: a = pt } = n, s = ms(n, ["window"]);
  let l;
  const r = ds(() => a && "ResizeObserver" in a), u = () => {
    l && (l.disconnect(), l = void 0);
  }, d = computed(
    () => Array.isArray(o) ? o.map((p) => ue(p)) : [ue(o)]
  ), c = watch(
    d,
    (p) => {
      if (u(), r.value && a) {
        l = new ResizeObserver(t);
        for (const m of p)
          m && l.observe(m, s);
      }
    },
    { immediate: true, flush: "post", deep: true }
  ), f = () => {
    u(), c();
  };
  return Mt(f), {
    isSupported: r,
    stop: f
  };
}
function vs(o, t) {
  const e = shallowRef(t);
  return watch(
    Fn(o),
    (n, a) => {
      e.value = a;
    },
    { flush: "sync" }
  ), readonly(e);
}
function Hn(o) {
  const t = window.getComputedStyle(o);
  if (t.overflowX === "scroll" || t.overflowY === "scroll" || t.overflowX === "auto" && o.clientWidth < o.scrollWidth || t.overflowY === "auto" && o.clientHeight < o.scrollHeight)
    return true;
  {
    const e = o.parentNode;
    return !e || e.tagName === "BODY" ? false : Hn(e);
  }
}
function hs(o) {
  const t = o || window.event, e = t.target;
  return Hn(e) ? false : t.touches.length > 1 ? true : (t.preventDefault && t.preventDefault(), false);
}
function gs(o, t = false) {
  const e = ref(t);
  let n = null, a;
  watch(Fn(o), (r) => {
    if (r) {
      const u = r;
      a = u.style.overflow, e.value && (u.style.overflow = "hidden");
    }
  }, {
    immediate: true
  });
  const s = () => {
    const r = Ee(o);
    !r || e.value || (ao && (n = pe(
      r,
      "touchmove",
      (u) => {
        hs(u);
      },
      { passive: false }
    )), r.style.overflow = "hidden", e.value = true);
  }, l = () => {
    const r = Ee(o);
    !r || !e.value || (ao && (n == null || n()), r.style.overflow = a, e.value = false);
  };
  return Mt(l), computed({
    get() {
      return e.value;
    },
    set(r) {
      r ? s() : l();
    }
  });
}
function X(o, t, e, n = {}) {
  var a, s, l;
  const {
    clone: r = false,
    passive: u = false,
    eventName: d,
    deep: c = false,
    defaultValue: f,
    shouldEmit: p
  } = n, m = getCurrentInstance(), v = e || (m == null ? void 0 : m.emit) || ((a = m == null ? void 0 : m.$emit) == null ? void 0 : a.bind(m)) || ((l = (s = m == null ? void 0 : m.proxy) == null ? void 0 : s.$emit) == null ? void 0 : l.bind(m == null ? void 0 : m.proxy));
  let h2 = d;
  t || (t = "modelValue"), h2 = h2 || `update:${t.toString()}`;
  const _ = (E) => r ? typeof r == "function" ? r(E) : cs(E) : E, S = () => ts(o[t]) ? _(o[t]) : f, O = (E) => {
    p ? p(E) && v(h2, E) : v(h2, E);
  };
  if (u) {
    const E = S(), B = ref(E);
    return watch(
      () => o[t],
      (T) => B.value = _(T)
    ), watch(
      B,
      (T) => {
        (T !== o[t] || c) && O(T);
      },
      { deep: c }
    ), B;
  } else
    return computed({
      get() {
        return S();
      },
      set(E) {
        O(E);
      }
    });
}
function je(o, t, e, n = {}) {
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
  } = n, [f, p, m, v, h2, _] = [
    o.key === "ArrowRight",
    o.key === "ArrowLeft",
    o.key === "ArrowUp",
    o.key === "ArrowDown",
    o.key === "Home",
    o.key === "End"
  ], S = m || v, O = f || p;
  if (!h2 && !_ && (!S && !O || a === "vertical" && O || a === "horizontal" && S))
    return null;
  const E = e ? Array.from(e.querySelectorAll(`[${s}]`)) : l;
  if (!E.length)
    return null;
  d && o.preventDefault();
  let B = null;
  return O || S ? B = Wn(E, t, {
    goForward: S ? v : u === "ltr" ? f : p,
    loop: r
  }) : h2 ? B = E.at(0) || null : _ && (B = E.at(-1) || null), c && (B == null || B.focus()), B;
}
function Wn(o, t, { goForward: e, loop: n }, a = o.length) {
  if (--a === 0)
    return null;
  const s = o.indexOf(t), l = e ? s + 1 : s - 1;
  if (!n && (l < 0 || l >= o.length))
    return null;
  const r = (l + o.length) % o.length, u = o[r];
  return u ? u.hasAttribute("disabled") && u.getAttribute("disabled") !== "false" ? Wn(
    o,
    u,
    { goForward: e, loop: n },
    a
  ) : u : null;
}
async function ys(o, t, e = 500) {
  let n = true, a, s;
  const l = new Promise((d) => {
    s = d, a = setTimeout(() => {
      u(), d(n);
    }, e);
  });
  function r() {
    n = false, u(), clearTimeout(a), a = void 0, s(false);
  }
  function u() {
    t.removeEventListener("mouseleave", r);
  }
  return t.addEventListener("mouseleave", r), l;
}
function _s(o, t = {}) {
  const { delayEnter: e = 0, delayLeave: n = 0, disabled: a = false } = t;
  let s;
  function l(r) {
    if (s && (clearTimeout(s), s = void 0), Ee(a))
      return;
    const u = r ? e : n, d = r ? t.onHoverEnter : t.onHoverLeave;
    s = setTimeout(() => d == null ? void 0 : d(), u);
  }
  pe(o, "mouseenter", () => l(true), { passive: true }), pe(o, "mouseleave", () => l(false), { passive: true });
}
function zn(o, t = 300) {
  let e = true, n, a;
  const s = o.target, l = new Promise((d) => {
    a = d, n = setTimeout(() => {
      u(), d(e);
    }, t);
  });
  function r() {
    e = false, u(), clearTimeout(n), n = void 0, a(false);
  }
  function u() {
    s.removeEventListener("mouseenter", r);
  }
  return s.addEventListener("mouseenter", r), l;
}
function Un(o, t) {
  const e = ref(o);
  function n(s) {
    return t[e.value][s] ?? e.value;
  }
  return {
    state: e,
    dispatch: (s) => {
      e.value = n(s);
    }
  };
}
var eo = 0;
function Eo() {
  watchEffect((o) => {
    if (!Te)
      return;
    const t = document.querySelectorAll("[data-radix-focus-guard]");
    document.body.insertAdjacentElement(
      "afterbegin",
      t[0] ?? yn()
    ), document.body.insertAdjacentElement(
      "beforeend",
      t[1] ?? yn()
    ), eo++, o(() => {
      eo === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((e) => e.remove()), eo--;
    });
  });
}
function yn() {
  const o = document.createElement("span");
  return o.setAttribute("data-radix-focus-guard", ""), o.tabIndex = 0, o.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", o;
}
var bs = "data-radix-vue-collection-item";
function ae(o) {
  const t = o ?? Symbol();
  return { createCollection: (a) => {
    const s = ref([]);
    function l() {
      const r = ue(a);
      return r ? s.value = Array.from(
        r.querySelectorAll(`[${bs}]:not([data-disabled])`)
      ) : s.value = [];
    }
    return onBeforeUpdate(() => {
      s.value = [];
    }), onMounted(l), onUpdated(l), watch(() => a == null ? void 0 : a.value, l, { immediate: true }), provide(t, s), s;
  }, injectCollection: () => inject(t, ref([])) };
}
function G(o) {
  const t = getCurrentInstance(), e = t == null ? void 0 : t.type.emits, n = {};
  return e != null && e.length || console.warn(
    `No emitted event found. Please check component: ${t == null ? void 0 : t.type.__name}`
  ), e == null || e.forEach((a) => {
    n[toHandlerKey(camelize(a))] = (...s) => o(a, ...s);
  }), n;
}
function ws(o) {
  const t = ref(), e = computed(() => {
    var a;
    return ((a = t.value) == null ? void 0 : a.width) ?? 0;
  }), n = computed(() => {
    var a;
    return ((a = t.value) == null ? void 0 : a.height) ?? 0;
  });
  return onMounted(() => {
    const a = ue(o);
    if (a) {
      t.value = { width: a.offsetWidth, height: a.offsetHeight };
      const s = new ResizeObserver((l) => {
        if (!Array.isArray(l) || !l.length)
          return;
        const r = l[0];
        let u, d;
        if ("borderBoxSize" in r) {
          const c = r.borderBoxSize, f = Array.isArray(c) ? c[0] : c;
          u = f.inlineSize, d = f.blockSize;
        } else
          u = a.offsetWidth, d = a.offsetHeight;
        t.value = { width: u, height: d };
      });
      return s.observe(a, { box: "border-box" }), () => s.unobserve(a);
    } else
      t.value = void 0;
  }), {
    width: e,
    height: n
  };
}
var Cs = wo(() => ({ count: ref(0) }));
function te(o) {
  const { count: t } = Cs();
  return o || t.value++, o || `radix-${t.value}`;
}
function Oo(o) {
  return o ? o.flatMap((t) => t.type === Fragment ? Oo(t.children) : [t]) : [];
}
function Es(o) {
  return o && (typeof o.type == "string" || typeof o.type == "object" || typeof o.type == "function");
}
var Os = wo(() => ref(0));
function kt(o) {
  const t = Os(), e = gs(jt == null ? void 0 : jt.body, false), n = computed({
    get() {
      return e.value;
    },
    set(a) {
      if (Te)
        if (a) {
          const s = window.innerWidth - document.documentElement.clientWidth;
          s > 0 && (document.body.style.paddingRight = `${s}px`), nextTick(() => {
            document.body.style.pointerEvents = "none", e.value = true;
          });
        } else
          document.body.style.paddingRight = "", document.body.style.pointerEvents = "", e.value = false;
    }
  });
  return o && (t.value++, n.value = o), onBeforeUnmount(() => {
    o && (t.value--, t.value === 0 && (document.body.style.paddingRight = "", document.body.style.pointerEvents = ""));
  }), n;
}
function $o(o) {
  const t = Kn("", 1e3);
  return {
    search: t,
    handleTypeaheadSearch: (a) => {
      var f, p;
      t.value = t.value + a;
      const s = o.value, l = document.activeElement, r = ((p = (f = s.find((m) => m === l)) == null ? void 0 : f.textContent) == null ? void 0 : p.trim()) ?? "", u = s.map((m) => {
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
function So(o, t) {
  return o.map((e, n) => o[(t + n) % o.length]);
}
function $s(o, t, e) {
  const a = t.length > 1 && Array.from(t).every((d) => d === t[0]) ? t[0] : t, s = e ? o.indexOf(e) : -1;
  let l = So(o, Math.max(s, 0));
  a.length === 1 && (l = l.filter((d) => d !== e));
  const u = l.find(
    (d) => d.toLowerCase().startsWith(a.toLowerCase())
  );
  return u !== e ? u : void 0;
}
function _n(o) {
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
}
var M = defineComponent({
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
  setup(o, { attrs: t, slots: e }) {
    const n = o.asChild ? "template" : o.as;
    return n !== "template" ? () => h(o.as, t, { default: e.default }) : () => {
      var l, r;
      if (!e.default)
        return null;
      const a = Oo(e.default());
      a.length !== 1 && _n(n);
      const s = a[0];
      if (Es(s) || _n(n), Object.keys(t).length > 0) {
        (l = s.props) == null || delete l.ref;
        const u = mergeProps(t, s.props ?? {});
        t.class && ((r = s.props) != null && r.class) && delete s.props.class;
        const d = cloneVNode(s, u);
        for (const c in u)
          c.startsWith("on") && (d.props || (d.props = {}), d.props[c] = u[c]);
        return d;
      }
      return s;
    };
  }
});
function H() {
  const o = ref(), t = computed(() => ue(o));
  return {
    primitiveElement: o,
    currentElement: t
  };
}
var Po = Symbol();
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
  setup(o, { expose: t, emit: e }) {
    const n = o, a = X(n, "open", e, {
      defaultValue: n.defaultOpen,
      passive: true
    }), s = X(n, "disabled");
    return provide(Po, {
      contentId: te(),
      disabled: s,
      open: a,
      onOpenToggle: () => {
        a.value = !a.value;
      }
    }), t({ open: a }), (l, r) => (openBlock(), createBlock(unref(M), {
      as: l.as,
      "as-child": n.asChild,
      "data-state": n.open ? "open" : "closed",
      "data-disabled": n.disabled ? "" : void 0
    }, {
      default: withCtx(() => [
        renderSlot(l.$slots, "default", { open: unref(a) })
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-state", "data-disabled"]));
  }
});
var Ps = defineComponent({
  __name: "CollapsibleTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(o) {
    const t = o, e = inject(Po);
    return (n, a) => {
      var s, l, r, u, d, c, f, p;
      return openBlock(), createBlock(unref(M), {
        type: n.as === "button" ? "button" : void 0,
        as: n.as,
        "as-child": t.asChild,
        "aria-controls": (s = unref(e)) == null ? void 0 : s.contentId,
        "aria-expanded": ((l = unref(e)) == null ? void 0 : l.open.value) || false,
        "data-state": (r = unref(e)) != null && r.open.value ? "open" : "closed",
        "data-disabled": (d = (u = unref(e)) == null ? void 0 : u.disabled) != null && d.value ? "" : void 0,
        disabled: (f = (c = unref(e)) == null ? void 0 : c.disabled) == null ? void 0 : f.value,
        onClick: (p = unref(e)) == null ? void 0 : p.onOpenToggle
      }, {
        default: withCtx(() => [
          renderSlot(n.$slots, "default")
        ]),
        _: 3
      }, 8, ["type", "as", "as-child", "aria-controls", "aria-expanded", "data-state", "data-disabled", "disabled", "onClick"]);
    };
  }
});
function Bs(o, t) {
  const e = ref({}), n = ref("none"), a = o.value ? "mounted" : "unmounted", { state: s, dispatch: l } = Un(a, {
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
    async (p, m) => {
      var h2;
      const v = m !== p;
      if (await nextTick(), v) {
        const _ = n.value, S = Et(t.value);
        p ? l("MOUNT") : S === "none" || ((h2 = e.value) == null ? void 0 : h2.display) === "none" ? l("UNMOUNT") : l(m && _ !== S ? "ANIMATION_OUT" : "UNMOUNT");
      }
    },
    { immediate: true }
  );
  const r = (p) => {
    const v = Et(t.value).includes(
      p.animationName
    );
    p.target === t.value && v && l("ANIMATION_END");
  }, u = (p) => {
    p.target === t.value && (n.value = Et(t.value));
  }, d = watch(
    t,
    (p, m) => {
      p ? (e.value = getComputedStyle(p), p.addEventListener("animationstart", u), p.addEventListener("animationcancel", r), p.addEventListener("animationend", r)) : (l("ANIMATION_END"), m == null || m.removeEventListener("animationstart", u), m == null || m.removeEventListener("animationcancel", r), m == null || m.removeEventListener("animationend", r));
    },
    { immediate: true }
  ), c = watch(s, () => {
    const p = Et(t.value);
    n.value = s.value === "mounted" ? p : "none";
  });
  return onUnmounted(() => {
    d(), c();
  }), {
    isPresent: computed(
      () => ["mounted", "unmountSuspended"].includes(s.value)
    )
  };
}
function Et(o) {
  return o && getComputedStyle(o).animationName || "none";
}
var ie = defineComponent({
  __name: "Presence",
  props: {
    present: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(o, { expose: t }) {
    var p;
    const e = o, { present: n, forceMount: a } = toRefs(e), s = useSlots(), l = ref(), { isPresent: r } = Bs(n, l), u = {
      beforeMount(m) {
        m.hasAttribute("data-radix-popper-content-wrapper") ? l.value = m.firstChild : l.value = m;
      }
    };
    let d = (p = s.default) == null ? void 0 : p.call(s);
    d = Oo(d || []);
    const c = getCurrentInstance();
    function f() {
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
      return a.value || n.value || r.value ? withDirectives((v = s.default) == null ? void 0 : v.call(s)[0], [[u]]) : null;
    }
    return t({
      present: r
    }), (m, v) => (openBlock(), createBlock(f));
  }
});
var Ts = {
  inheritAttrs: false
};
var As = defineComponent({
  ...Ts,
  __name: "CollapsibleContent",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o, e = inject(Po), n = ref(), { primitiveElement: a, currentElement: s } = H(), l = ref(0), r = ref(0), u = computed(() => e == null ? void 0 : e.open.value), d = ref(u.value), c = ref();
    return watch(
      () => {
        var f;
        return [u.value, (f = n.value) == null ? void 0 : f.present];
      },
      async () => {
        await nextTick();
        const f = s.value;
        if (!f)
          return;
        c.value = c.value || {
          transitionDuration: f.style.transitionDuration,
          animationName: f.style.animationName
        }, f.style.transitionDuration = "0s", f.style.animationName = "none";
        const p = f.getBoundingClientRect();
        r.value = p.height, l.value = p.width, d.value || (f.style.transitionDuration = c.value.transitionDuration, f.style.animationName = c.value.animationName);
      },
      {
        immediate: true
      }
    ), onMounted(() => {
      requestAnimationFrame(() => {
        d.value = false;
      });
    }), (f, p) => (openBlock(), createBlock(unref(ie), {
      ref_key: "presentRef",
      ref: n,
      present: unref(e).open.value,
      "force-mount": true
    }, {
      default: withCtx(() => {
        var m, v, h2, _, S;
        return [
          createVNode(unref(M), mergeProps(f.$attrs, {
            id: (m = unref(e)) == null ? void 0 : m.contentId,
            ref_key: "primitiveElement",
            ref: a,
            "as-child": t.asChild,
            as: f.as,
            "data-state": (v = unref(e)) != null && v.open.value ? "open" : "closed",
            "data-disabled": (_ = (h2 = unref(e)) == null ? void 0 : h2.disabled) != null && _.value ? "true" : void 0,
            hidden: !((S = n.value) != null && S.present),
            style: {
              ["--radix-collapsible-content-height"]: `${r.value}px`,
              ["--radix-collapsible-content-width"]: `${l.value}px`
            }
          }), {
            default: withCtx(() => [
              renderSlot(f.$slots, "default")
            ]),
            _: 3
          }, 16, ["id", "as-child", "as", "data-state", "data-disabled", "hidden", "style"])
        ];
      }),
      _: 3
    }, 8, ["present"]));
  }
});
function Is(o, t) {
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
function Ds({ type: o, defaultValue: t }) {
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
function Yn(o, t) {
  const e = X(o, "modelValue", t, {
    defaultValue: Ds(o),
    passive: true
  });
  watch(
    () => [o.type, o.modelValue],
    () => {
      const a = Is(o.type, e.value);
      e.value !== a && (e.value = a);
    },
    { immediate: true }
  );
  function n(a) {
    if (o.type === "single")
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
    changeModelValue: n
  };
}
var ft = Symbol();
var Li = defineComponent({
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
  setup(o, { expose: t, emit: e }) {
    const n = o, { modelValue: a, changeModelValue: s } = Yn(n, e), { primitiveElement: l, currentElement: r } = H();
    return provide(ft, {
      disabled: n.disabled,
      direction: n.dir,
      orientation: n.orientation,
      parentElement: r,
      isSingle: computed(() => n.type === "single"),
      collapsible: n.collapsible,
      modelValue: a,
      changeModelValue: s
    }), t({
      modelValue: a
    }), (u, d) => (openBlock(), createBlock(unref(M), {
      ref_key: "primitiveElement",
      ref: l,
      "as-child": n.asChild,
      as: n.as
    }, {
      default: withCtx(() => [
        renderSlot(u.$slots, "default", { modelValue: unref(a) })
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
});
var xt = Symbol();
var Fi = defineComponent({
  __name: "AccordionItem",
  props: {
    disabled: { type: Boolean },
    value: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(o, { expose: t }) {
    const e = o, n = inject(ft), a = computed(
      () => n != null && n.isSingle.value ? e.value === n.modelValue.value : Array.isArray(n == null ? void 0 : n.modelValue.value) && !!(n != null && n.modelValue.value.includes(e.value))
    ), s = computed(() => (n == null ? void 0 : n.disabled) || e.disabled || !!(n != null && n.isSingle.value) && a.value && !(n != null && n.collapsible)), l = computed(() => s.value ? "" : void 0), r = computed(
      () => a.value ? "open" : "closed"
      /* Closed */
    ), { primitiveElement: u, currentElement: d } = H();
    provide(xt, {
      open: a,
      dataState: r,
      disabled: s,
      dataDisabled: l,
      triggerId: te(),
      primitiveElement: u,
      currentElement: d,
      value: computed(() => e.value)
    });
    function c(f) {
      je(
        f,
        d.value,
        n == null ? void 0 : n.parentElement.value,
        {
          arrowKeyOptions: n == null ? void 0 : n.orientation,
          dir: n == null ? void 0 : n.direction,
          focus: true
        }
      );
    }
    return t({ open: a }), (f, p) => {
      var m;
      return openBlock(), createBlock(unref(Ss), {
        "data-orientation": (m = unref(n)) == null ? void 0 : m.orientation,
        "data-disabled": l.value,
        "data-state": r.value,
        disabled: s.value,
        open: a.value,
        "as-child": e.asChild,
        onKeydown: withKeys(c, ["up", "down", "left", "right", "home", "end"])
      }, {
        default: withCtx(() => [
          renderSlot(f.$slots, "default", { open: a.value })
        ]),
        _: 3
      }, 8, ["data-orientation", "data-disabled", "data-state", "disabled", "open", "as-child", "onKeydown"]);
    };
  }
});
var Ki = defineComponent({
  __name: "AccordionContent",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o, e = inject(ft), n = inject(xt);
    return (a, s) => {
      var l, r, u, d, c, f, p;
      return openBlock(), createBlock(unref(As), {
        id: (l = unref(n)) == null ? void 0 : l.triggerId,
        role: "region",
        open: (r = unref(n)) == null ? void 0 : r.open.value,
        hidden: !((u = unref(n)) != null && u.open.value),
        "as-child": t.asChild,
        "aria-labelledby": (d = unref(n)) == null ? void 0 : d.triggerId,
        "data-state": (c = unref(n)) == null ? void 0 : c.dataState.value,
        "data-disabled": (f = unref(n)) == null ? void 0 : f.dataDisabled.value,
        "data-orientation": (p = unref(e)) == null ? void 0 : p.orientation,
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
var Vi = defineComponent({
  __name: "AccordionHeader",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o, e = inject(ft), n = inject(xt);
    return (a, s) => {
      var l, r, u;
      return openBlock(), createBlock(unref(M), {
        as: t.as || "h3",
        "as-child": t.asChild,
        "data-orientation": (l = unref(e)) == null ? void 0 : l.orientation,
        "data-state": (r = unref(n)) == null ? void 0 : r.dataState.value,
        "data-disabled": (u = unref(n)) == null ? void 0 : u.dataDisabled.value
      }, {
        default: withCtx(() => [
          renderSlot(a.$slots, "default")
        ]),
        _: 3
      }, 8, ["as", "as-child", "data-orientation", "data-state", "data-disabled"]);
    };
  }
});
var Hi = defineComponent({
  __name: "AccordionTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o, e = inject(ft), n = inject(xt);
    function a() {
      n != null && n.disabled.value || n && (e == null || e.changeModelValue(n.value.value));
    }
    return (s, l) => {
      var r, u, d, c, f, p, m, v, h2, _;
      return openBlock(), createBlock(unref(Ps), {
        id: (r = unref(n)) == null ? void 0 : r.triggerId,
        ref: (u = unref(n)) == null ? void 0 : u.primitiveElement,
        "data-radix-vue-collection-item": "",
        as: t.as,
        "as-child": t.asChild,
        "aria-controls": (d = unref(n)) == null ? void 0 : d.triggerId,
        "aria-disabled": ((c = unref(n)) == null ? void 0 : c.disabled.value) || void 0,
        "aria-expanded": ((f = unref(n)) == null ? void 0 : f.open.value) || false,
        "data-disabled": (p = unref(n)) == null ? void 0 : p.dataDisabled.value,
        "data-orientation": (m = unref(e)) == null ? void 0 : m.orientation,
        "data-state": (v = unref(n)) == null ? void 0 : v.dataState.value,
        disabled: (_ = (h2 = unref(n)) == null ? void 0 : h2.disabled) == null ? void 0 : _.value,
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
var Gn = Symbol();
var Wi = defineComponent({
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
    provide(Gn, {
      required: e.required,
      disabled: e.disabled,
      modelValue: toRef(() => e.modelValue)
    });
    function n() {
      return t("update:modelValue", !e.modelValue);
    }
    let a;
    return (s, l) => (openBlock(), createBlock(unref(M), {
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
          onChange: n
        }), null, 16, Ms),
        renderSlot(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "value", "aria-checked", "data-state", "data-disabled"]));
  }
});
var zi = defineComponent({
  __name: "CheckboxIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(o) {
    const t = o, e = inject(Gn);
    return (n, a) => {
      var s;
      return (s = unref(e)) != null && s.modelValue.value ? (openBlock(), createBlock(unref(M), {
        key: 0,
        style: { "pointer-events": "none" },
        "as-child": t.asChild,
        as: n.as,
        "data-disabled": unref(e).disabled ? "" : void 0,
        "data-state": unref(e).modelValue.value ? "checked" : "unchecked"
      }, {
        default: withCtx(() => [
          renderSlot(n.$slots, "default")
        ]),
        _: 3
      }, 8, ["as-child", "as", "data-disabled", "data-state"])) : createCommentVNode("", true);
    };
  }
});
var ks = ["id", "name", "disabled", "required", "data-state", "data-disabled"];
var Xn = Symbol();
var Ui = defineComponent({
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
  setup(o, { emit: t }) {
    const e = o, { disabled: n } = toRefs(e), a = X(e, "checked", t, {
      defaultValue: e.defaultChecked,
      passive: true
      // set passive to true so that if no props.modelValue was passed, it will still update
    });
    function s() {
      a.value = !a.value;
    }
    provide(Xn, {
      checked: a,
      toggleCheck: s,
      disabled: n
    });
    function l(r) {
      r.key === "Enter" && s();
    }
    return (r, u) => (openBlock(), createBlock(unref(M), {
      value: unref(a),
      role: "switch",
      "aria-checked": unref(a),
      "data-state": unref(a) ? "checked" : "unchecked",
      "data-disabled": unref(n) ? "" : void 0,
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
          disabled: unref(n),
          required: r.required,
          "data-state": unref(a) ? "checked" : "unchecked",
          "data-disabled": unref(n) ? "" : void 0,
          style: { opacity: "0", position: "absolute", inset: "0" },
          onClick: s,
          onKeydown: l
        }), null, 16, ks)
      ]),
      _: 3
    }, 8, ["value", "aria-checked", "data-state", "data-disabled", "as-child", "as"]));
  }
});
var Yi = defineComponent({
  __name: "SwitchThumb",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(o) {
    const t = inject(Xn);
    return (e, n) => {
      var a, s, l;
      return openBlock(), createBlock(unref(M), {
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
var qn = defineComponent({
  __name: "BaseSeparator",
  props: {
    orientation: { default: "horizontal" },
    decorative: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o, e = ["horizontal", "vertical"];
    function n(r) {
      return e.includes(r);
    }
    const a = computed(
      () => n(t.orientation) ? t.orientation : "horizontal"
    ), s = computed(
      () => a.value === "vertical" ? t.orientation : void 0
    ), l = computed(
      () => t.decorative ? { role: "none" } : { "aria-orientation": s.value, role: "separator" }
    );
    return (r, u) => (openBlock(), createBlock(unref(M), mergeProps({
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
var Gi = defineComponent({
  __name: "Separator",
  props: {
    orientation: { default: "horizontal" },
    decorative: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o;
    return (e, n) => (openBlock(), createBlock(qn, normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Xi = defineComponent({
  __name: "Label",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "label" }
  },
  setup(o) {
    const t = o;
    return (e, n) => (openBlock(), createBlock(unref(M), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var xs = defineComponent({
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
    const e = o, n = X(e, "pressed", t, {
      defaultValue: e.defaultValue,
      passive: true
    });
    function a() {
      n.value = !n.value;
    }
    const s = computed(() => n.value ? "on" : "off");
    return (l, r) => (openBlock(), createBlock(unref(M), {
      type: l.as === "button" ? "button" : void 0,
      "as-child": e.asChild,
      as: l.as,
      "aria-pressed": unref(n),
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
var Rs = "rovingFocusGroup.onEntryFocus";
var Ns = { bubbles: false, cancelable: true };
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
function Fs(o, t) {
  return t !== "rtl" ? o : o === "ArrowLeft" ? "ArrowRight" : o === "ArrowRight" ? "ArrowLeft" : o;
}
function Ks(o, t, e) {
  const n = Fs(o.key, e);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(n)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(n)))
    return Ls[n];
}
function Jn(o) {
  const t = document.activeElement;
  for (const e of o)
    if (e === t || (e.focus(), document.activeElement !== t))
      return;
}
function Vs(o, t) {
  return o.map((e, n) => o[(t + n) % o.length]);
}
var Zn = Symbol();
var Bo = defineComponent({
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
  emits: ["entryFocus"],
  setup(o, { emit: t }) {
    const e = o, { loop: n, orientation: a, dir: s } = toRefs(e), l = ref(e.defaultCurrentTabStopId), r = ref(false), u = ref(false), d = ref(0), c = us(), { primitiveElement: f, currentElement: p } = H(), { createCollection: m } = ae("rovingFocus"), v = m(p);
    function h2(_) {
      const S = !u.value;
      if (_.currentTarget && _.target === _.currentTarget && S && !r.value) {
        const O = new CustomEvent(Rs, Ns);
        if (_.currentTarget.dispatchEvent(O), t("entryFocus", _), !O.defaultPrevented) {
          const E = v.value, B = E.find((A) => A === c.value), T = E.find(
            (A) => A.id === l.value
          ), D = [B, T, ...E].filter(
            Boolean
          );
          Jn(D);
        }
      }
      u.value = false;
    }
    return provide(Zn, {
      loop: n,
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
    }), (_, S) => (openBlock(), createBlock(unref(M), {
      ref_key: "primitiveElement",
      ref: f,
      tabindex: r.value || d.value === 0 ? -1 : 0,
      "data-orientation": unref(a),
      as: _.as,
      "as-child": _.asChild,
      style: { outline: "none" },
      onMousedown: S[0] || (S[0] = (O) => u.value = true),
      onFocus: h2,
      onBlur: S[1] || (S[1] = (O) => r.value = false)
    }, {
      default: withCtx(() => [
        renderSlot(_.$slots, "default")
      ]),
      _: 3
    }, 8, ["tabindex", "data-orientation", "as", "as-child"]));
  }
});
var Rt = defineComponent({
  __name: "RovingFocusItem",
  props: {
    tabStopId: {},
    focusable: { type: Boolean, default: true },
    active: { type: Boolean, default: true },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(o) {
    const t = o, e = inject(Zn), n = te(), a = computed(() => t.tabStopId || n), s = computed(
      () => (e == null ? void 0 : e.currentTabStopId.value) === a.value
    ), { injectCollection: l } = ae("rovingFocus"), r = l(), { onFocusableItemAdd: u, onFocusableItemRemove: d } = e;
    onMounted(() => {
      t.focusable && u();
    }), onUnmounted(() => {
      t.focusable && d();
    });
    function c(f) {
      if (f.key === "Tab" && f.shiftKey) {
        e == null || e.onItemShiftTab();
        return;
      }
      if (f.target !== f.currentTarget)
        return;
      const p = Ks(
        f,
        e == null ? void 0 : e.orientation.value,
        e == null ? void 0 : e.dir.value
      );
      if (p !== void 0) {
        f.preventDefault();
        let m = [...r.value];
        if (p === "last")
          m.reverse();
        else if (p === "prev" || p === "next") {
          p === "prev" && m.reverse();
          const v = m.indexOf(
            f.currentTarget
          );
          m = e != null && e.loop.value ? Vs(m, v + 1) : m.slice(v + 1);
        }
        nextTick(() => Jn(m));
      }
    }
    return (f, p) => {
      var m;
      return openBlock(), createBlock(unref(M), {
        "data-radix-vue-collection-item": "",
        tabindex: s.value ? 0 : -1,
        "data-orientation": (m = unref(e)) == null ? void 0 : m.orientation.value,
        as: f.as,
        "as-child": f.asChild,
        onMousedown: p[0] || (p[0] = (v) => {
          var h2;
          f.focusable ? (h2 = unref(e)) == null || h2.onItemFocus(a.value) : v.preventDefault();
        }),
        onFocus: p[1] || (p[1] = (v) => {
          var h2;
          return (h2 = unref(e)) == null ? void 0 : h2.onItemFocus(a.value);
        }),
        onKeydown: c
      }, {
        default: withCtx(() => [
          renderSlot(f.$slots, "default")
        ]),
        _: 3
      }, 8, ["tabindex", "data-orientation", "as", "as-child"]);
    };
  }
});
var Qn = Symbol();
var Hs = defineComponent({
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
  setup(o, { emit: t }) {
    const e = o, { loop: n, rovingFocus: a, disabled: s, dir: l } = toRefs(e), { modelValue: r, changeModelValue: u } = Yn(e, t);
    return provide(Qn, {
      type: e.type,
      modelValue: r,
      changeModelValue: u,
      dir: l,
      orientation: e.orientation,
      loop: n,
      rovingFocus: a,
      disabled: s
    }), (d, c) => (openBlock(), createBlock(resolveDynamicComponent(unref(a) ? unref(Bo) : unref(M)), {
      "as-child": "",
      orientation: unref(a) ? d.orientation : void 0,
      dir: unref(l),
      loop: unref(a) ? unref(n) : void 0
    }, {
      default: withCtx(() => [
        createVNode(unref(M), {
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
var Ws = defineComponent({
  __name: "ToggleGroupItem",
  props: {
    value: {},
    defaultValue: { type: Boolean },
    pressed: { type: Boolean },
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(o) {
    const t = o, e = inject(Qn), n = computed(() => {
      var a;
      return ((a = e == null ? void 0 : e.disabled) == null ? void 0 : a.value) || t.disabled;
    });
    return (a, s) => {
      var l;
      return openBlock(), createBlock(resolveDynamicComponent((l = unref(e)) != null && l.rovingFocus.value ? unref(Rt) : unref(M)), {
        "as-child": "",
        focusable: !n.value,
        active: a.pressed
      }, {
        default: withCtx(() => {
          var r, u, d, c;
          return [
            createVNode(unref(xs), mergeProps(t, {
              disabled: n.value,
              pressed: ((r = unref(e)) == null ? void 0 : r.type) === "single" ? ((u = unref(e)) == null ? void 0 : u.modelValue.value) === a.value : (c = (d = unref(e)) == null ? void 0 : d.modelValue.value) == null ? void 0 : c.includes(a.value),
              "onUpdate:pressed": s[0] || (s[0] = (f) => {
                var p;
                return (p = unref(e)) == null ? void 0 : p.changeModelValue(a.value);
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
var qi = defineComponent({
  __name: "AspectRatio",
  props: {
    ratio: { default: 1 },
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o, e = computed(() => 1 / t.ratio * 100);
    return (n, a) => (openBlock(), createElementBlock("div", {
      style: normalizeStyle(`position: relative; width: 100%; padding-bottom: ${e.value}%`)
    }, [
      createVNode(unref(M), {
        "as-child": n.asChild,
        as: n.as,
        style: { position: "absolute", inset: "0px" }
      }, {
        default: withCtx(() => [
          renderSlot(n.$slots, "default", { aspect: e.value })
        ]),
        _: 3
      }, 8, ["as-child", "as"])
    ], 4));
  }
});
var Nt = Symbol();
var Ji = defineComponent({
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
    const e = o, n = ref(), a = ref(), s = X(e, "modelValue", t, {
      defaultValue: e.defaultValue,
      passive: true
    });
    return provide(Nt, {
      modelValue: s,
      changeModelValue: (l) => {
        s.value = l, l && e.onValueChange && e.onValueChange(l);
      },
      currentFocusedElement: a,
      parentElement: n,
      orientation: e.orientation,
      dir: e.dir,
      loop: ref(true),
      activationMode: e.activationMode
    }), (l, r) => (openBlock(), createBlock(unref(M), {
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
var Zi = defineComponent({
  __name: "TabsList",
  props: {
    loop: { type: Boolean, default: true },
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o, { loop: e } = toRefs(t), n = inject(Nt), { primitiveElement: a, currentElement: s } = H();
    return onMounted(() => {
      n.parentElement.value = s.value, n.loop = e;
    }), (l, r) => {
      var u, d;
      return openBlock(), createBlock(unref(M), {
        ref_key: "primitiveElement",
        ref: a,
        role: "tablist",
        "as-child": t.asChild,
        as: l.as,
        "aria-orientation": (u = unref(n)) == null ? void 0 : u.orientation,
        tabindex: "0",
        "data-orientation": (d = unref(n)) == null ? void 0 : d.orientation,
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
var Qi = defineComponent({
  __name: "TabsContent",
  props: {
    value: {},
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o, e = inject(Nt), n = computed(() => {
      var a;
      return ((a = e == null ? void 0 : e.modelValue) == null ? void 0 : a.value) === t.value ? "active" : "inactive";
    });
    return (a, s) => {
      var l, r, u;
      return ((r = (l = unref(e)) == null ? void 0 : l.modelValue) == null ? void 0 : r.value) === t.value ? (openBlock(), createBlock(unref(M), {
        key: 0,
        "as-child": t.asChild,
        as: a.as,
        role: "tabpanel",
        "data-state": n.value,
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
var ji = defineComponent({
  __name: "TabsTrigger",
  props: {
    value: {},
    disabled: { type: Boolean, default: false },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(o) {
    const t = o, e = inject(Nt), { primitiveElement: n, currentElement: a } = H();
    function s(u) {
      e == null || e.changeModelValue(u);
    }
    function l(u) {
      const d = je(
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
      var c, f, p, m, v;
      return openBlock(), createBlock(unref(M), {
        ref_key: "primitiveElement",
        ref: n,
        type: u.as === "button" ? "button" : void 0,
        as: u.as,
        "as-child": t.asChild,
        role: "tab",
        "aria-selected": ((f = (c = unref(e)) == null ? void 0 : c.modelValue) == null ? void 0 : f.value) === t.value ? "true" : "false",
        "data-state": ((m = (p = unref(e)) == null ? void 0 : p.modelValue) == null ? void 0 : m.value) === t.value ? "active" : "inactive",
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
var zs = ["value", "aria-valuenow", "name"];
var To = Symbol();
var er = defineComponent({
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
    const e = o, { primitiveElement: n, currentElement: a } = H(), s = ref(), l = computed(() => e.modelValue ? e.modelValue < 50 ? (e.modelValue - 50) / 50 * 10 : (e.modelValue - 50) / 50 * -10 : 0);
    provide(To, {
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
      t("update:modelValue", p(m, e.step));
    }
    let u;
    function d(m) {
      s.value && s.value.focus(), m.preventDefault(), a.value && (u = a.value.getBoundingClientRect(), m.clientX - 10 - l.value > u.left && m.clientX - 10 - l.value < u.left + u.width && r(
        Math.round(
          (m.clientX - 10 - l.value - u.left) / u.width * 100
        )
      ), document.addEventListener("pointermove", c), document.addEventListener("pointerup", f));
    }
    function c(m) {
      s.value && s.value.focus(), m.clientX - 10 - l.value > u.left && m.clientX - 10 - l.value < u.left + u.width && r(
        (m.clientX - 10 - l.value - u.left) / u.width * 100
      ), m.clientX - 10 - l.value <= u.left && r(e.min), m.clientX - 10 - l.value >= u.left + u.width && r(e.max);
    }
    function f(m) {
      document.removeEventListener("pointermove", c), document.removeEventListener("pointerup", f);
    }
    function p(m, v) {
      const h2 = Math.floor(m / v);
      return m % v <= v / 2 ? h2 * v : (h2 + 1) * v;
    }
    return (m, v) => (openBlock(), createBlock(unref(M), {
      ref_key: "primitiveElement",
      ref: n,
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
        }, null, 8, zs)
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
});
var tr = defineComponent({
  __name: "SliderThumb",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(o) {
    const t = o, e = inject(To), { primitiveElement: n, currentElement: a } = H();
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
      var d, c, f, p, m, v, h2, _, S;
      return openBlock(), createElementBlock("span", {
        style: normalizeStyle(`transform: translateX(-50%); position: absolute; left: calc(${(c = (d = unref(e)) == null ? void 0 : d.modelValue) == null ? void 0 : c.value}%)`)
      }, [
        createVNode(unref(M), mergeProps(r.$attrs, {
          ref_key: "primitiveElement",
          ref: n,
          role: "slider",
          tabindex: "0",
          "data-disabled": (f = unref(e)) == null ? void 0 : f.disabled,
          "data-orientation": (p = unref(e)) == null ? void 0 : p.orientation,
          "aria-valuenow": (v = (m = unref(e)) == null ? void 0 : m.modelValue) == null ? void 0 : v.value,
          "aria-valuemin": (h2 = unref(e)) == null ? void 0 : h2.min,
          "aria-valuemax": (_ = unref(e)) == null ? void 0 : _.max,
          "aria-orientation": (S = unref(e)) == null ? void 0 : S.orientation,
          "as-child": t.asChild,
          as: r.as,
          onKeydown: l
        }), null, 16, ["data-disabled", "data-orientation", "aria-valuenow", "aria-valuemin", "aria-valuemax", "aria-orientation", "as-child", "as"])
      ], 4);
    };
  }
});
var or = defineComponent({
  __name: "SliderTrack",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(o) {
    const t = o;
    return (e, n) => (openBlock(), createBlock(unref(M), {
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
var nr = defineComponent({
  __name: "SliderRange",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(o) {
    const t = o, e = inject(To);
    return (n, a) => {
      var s, l, r, u, d;
      return openBlock(), createBlock(unref(M), {
        "data-disabled": (s = unref(e)) == null ? void 0 : s.disabled,
        "data-orientation": (l = unref(e)) == null ? void 0 : l.orientation,
        "as-child": t.asChild,
        as: n.as,
        style: normalizeStyle(`left: 0%; right: ${(((r = unref(e)) == null ? void 0 : r.max) ?? 100) - (((d = (u = unref(e)) == null ? void 0 : u.modelValue) == null ? void 0 : d.value) ?? 0)}%`)
      }, null, 8, ["data-disabled", "data-orientation", "as-child", "as", "style"]);
    };
  }
});
var Ao = Symbol();
var ar = defineComponent({
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
  setup(o, { emit: t }) {
    const e = o, n = X(e, "modelValue", t, {
      defaultValue: e.defaultValue,
      passive: true
    }), { disabled: a, loop: s, orientation: l, name: r, required: u } = toRefs(e);
    return provide(Ao, {
      modelValue: n,
      changeModelValue: (d) => {
        n.value = d;
      },
      disabled: a,
      loop: s,
      orientation: l,
      name: r == null ? void 0 : r.value,
      required: u
    }), (d, c) => (openBlock(), createBlock(unref(Bo), {
      "as-child": "",
      orientation: unref(l),
      dir: d.dir,
      loop: unref(s)
    }, {
      default: withCtx(() => [
        createVNode(unref(M), {
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
var Us = defineComponent({
  __name: "Radio",
  props: {
    value: {},
    disabled: { type: Boolean, default: false },
    required: { type: Boolean },
    checked: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(o) {
    const t = o, { value: e, checked: n } = toRefs(t), { primitiveElement: a, currentElement: s } = H(), l = inject(Ao), r = computed(
      () => s.value ? !!s.value.closest("form") : true
    ), u = ref(false);
    function d(c) {
      l == null || l.changeModelValue(e == null ? void 0 : e.value), r.value && "isPropagationStopped" in c && (u.value || c.stopPropagation());
    }
    return (c, f) => {
      var p;
      return openBlock(), createBlock(unref(M), mergeProps({
        ref_key: "primitiveElement",
        ref: a
      }, c.$attrs, {
        role: "radio",
        type: c.as === "button" ? "button" : void 0,
        as: c.as,
        "aria-checked": unref(n),
        "as-child": c.asChild,
        disabled: c.disabled ? true : void 0,
        "data-state": unref(n) ? "checked" : "unchecked",
        "data-disabled": c.disabled ? "" : void 0,
        value: unref(e),
        required: c.required,
        name: (p = unref(l)) == null ? void 0 : p.name,
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
var Ys = ["default-value", "required", "checked", "disabled"];
var jn = Symbol();
var Gs = {
  inheritAttrs: false
};
var sr = defineComponent({
  ...Gs,
  __name: "RadioGroupItem",
  props: {
    value: {},
    disabled: { type: Boolean, default: false },
    required: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(o) {
    const t = o, { value: e } = toRefs(t), { primitiveElement: n, currentElement: a } = H(), s = inject(Ao), l = computed(() => (s == null ? void 0 : s.disabled.value) || t.disabled), r = computed(() => (s == null ? void 0 : s.required.value) || t.required), u = computed(() => {
      var p;
      return ((p = s == null ? void 0 : s.modelValue) == null ? void 0 : p.value) === t.value;
    });
    provide(jn, { disabled: l, checked: u });
    const d = ref(false), c = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
    pe("keydown", (p) => {
      c.includes(p.key) && (d.value = true);
    }), pe("keyup", () => {
      d.value = false;
    });
    function f() {
      setTimeout(() => {
        var p;
        d.value && ((p = a.value) == null || p.click());
      }, 0);
    }
    return (p, m) => (openBlock(), createElementBlock(Fragment, null, [
      createVNode(unref(Rt), {
        checked: u.value,
        disabled: l.value,
        "as-child": "",
        focusable: !l.value,
        active: u.value
      }, {
        default: withCtx(() => [
          createVNode(Us, mergeProps({
            ref_key: "primitiveElement",
            ref: n
          }, { ...p.$attrs, ...t }, {
            checked: u.value,
            onKeydown: m[0] || (m[0] = withKeys(withModifiers(() => {
            }, ["prevent"]), ["enter"])),
            onFocus: f
          }), {
            default: withCtx(() => [
              renderSlot(p.$slots, "default")
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
      }, null, 12, Ys), [
        [vModelRadio, unref(e)]
      ])
    ], 64));
  }
});
var lr = defineComponent({
  __name: "RadioGroupIndicator",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(o) {
    const t = inject(jn);
    return (e, n) => {
      var a, s, l;
      return (a = unref(t)) != null && a.checked.value ? (openBlock(), createBlock(unref(M), {
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
var Io = (o) => typeof o == "number";
function Xs(o, t) {
  return o === null || Io(o) && !Number.isNaN(o) && o <= t && o >= 0 ? o : (console.error(`Invalid prop \`value\` of value \`${o}\` supplied to \`ProgressRoot\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${lt} if no \`max\` prop is set)
  - \`null\` if the progress is indeterminate.

Defaulting to \`null\`.`), null);
}
function qs(o) {
  return Io(o) && !Number.isNaN(o) && o > 0 ? o : (console.error(
    `Invalid prop \`max\` of value \`${o}\` supplied to \`ProgressRoot\`. Only numbers greater than 0 are valid max values. Defaulting to \`${lt}\`.`
  ), lt);
}
var ir = defineComponent({
  __name: "ProgressRoot",
  props: {
    modelValue: {},
    max: { default: lt },
    getValueLabel: { type: Function, default: (o, t) => `${Math.round(o / t * lt)}%` },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue", "update:max"],
  setup(o, { emit: t }) {
    const e = o, n = X(e, "modelValue", t, {
      passive: true
    }), a = X(e, "max", t, {
      passive: true
    });
    watch(
      () => n.value,
      async (l) => {
        const r = Xs(l, e.max);
        r !== l && (await nextTick(), n.value = r);
      },
      { immediate: true }
    ), watch(
      () => e.max,
      (l) => {
        const r = qs(e.max);
        r !== l && (a.value = r);
      },
      { immediate: true }
    );
    const s = computed(() => n.value ? n.value === a.value ? "complete" : "loading" : "indeterminate");
    return provide(ea, {
      modelValue: n,
      max: a,
      progressState: s
    }), (l, r) => (openBlock(), createBlock(unref(M), {
      "as-child": e.asChild,
      as: l.as,
      "aria-valuemax": unref(a),
      "aria-valuemin": 0,
      "aria-valuenow": Io(unref(n)) ? unref(n) : void 0,
      "aria-valuetext": l.getValueLabel(unref(n), unref(a)),
      role: "progressbar",
      "data-state": s.value,
      "data-value": unref(n) ?? void 0,
      "data-max": unref(a)
    }, {
      default: withCtx(() => [
        renderSlot(l.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "aria-valuemax", "aria-valuenow", "aria-valuetext", "data-state", "data-value", "data-max"]));
  }
});
var rr = defineComponent({
  __name: "ProgressIndicator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o, e = inject(ea);
    return (n, a) => {
      var s, l, r, u;
      return openBlock(), createBlock(unref(M), mergeProps(t, {
        "data-state": (s = unref(e)) == null ? void 0 : s.progressState.value,
        "data-value": ((r = (l = unref(e)) == null ? void 0 : l.modelValue) == null ? void 0 : r.value) ?? void 0,
        "data-max": (u = unref(e)) == null ? void 0 : u.max.value
      }), {
        default: withCtx(() => [
          renderSlot(n.$slots, "default")
        ]),
        _: 3
      }, 16, ["data-state", "data-value", "data-max"]);
    };
  }
});
var ye = Symbol();
var Js = defineComponent({
  __name: "DialogRoot",
  props: {
    open: { type: Boolean, default: void 0 },
    defaultOpen: { type: Boolean, default: false },
    modal: { type: Boolean, default: true }
  },
  emits: ["update:open"],
  setup(o, { emit: t }) {
    const e = o, n = X(e, "open", t, {
      defaultValue: e.defaultOpen,
      passive: true
    }), a = ref(), s = ref(), { modal: l } = toRefs(e);
    return provide(ye, {
      open: n,
      modal: l,
      openModal: () => {
        n.value = true;
      },
      onOpenChange: (r) => {
        n.value = r;
      },
      onOpenToggle: () => {
        n.value = !n.value;
      },
      contentId: te(),
      titleId: te(),
      descriptionId: te(),
      triggerElement: a,
      contentElement: s
    }), (r, u) => renderSlot(r.$slots, "default");
  }
});
var Zs = defineComponent({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(o) {
    const t = o, e = inject(ye), { primitiveElement: n, currentElement: a } = H();
    return onMounted(() => {
      e.triggerElement = a;
    }), (s, l) => {
      var r, u, d, c;
      return openBlock(), createBlock(unref(M), mergeProps({
        ref_key: "primitiveElement",
        ref: n
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
var Qs = defineComponent({
  __name: "DialogPortal",
  props: {
    to: { default: "body" },
    disabled: { type: Boolean }
  },
  setup(o) {
    const t = o;
    return (e, n) => (openBlock(), createBlock(Teleport, normalizeProps(guardReactiveProps(t)), [
      renderSlot(e.$slots, "default")
    ], 16));
  }
});
var js = "dismissableLayer.pointerDownOutside";
var el = "dismissableLayer.focusOutside";
function ta(o, t) {
  const e = t.closest(
    "[data-dismissable-layer]"
  ), n = o.querySelector(
    "[data-dismissable-layer]"
  );
  if (!n)
    return false;
  const a = Array.from(
    o.ownerDocument.querySelectorAll("[data-dismissable-layer]")
  );
  return n === e || a.indexOf(n) < a.indexOf(e);
}
function tl(o, t) {
  var s;
  const e = ((s = t == null ? void 0 : t.value) == null ? void 0 : s.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), n = ref(false), a = ref(() => {
  });
  return watchEffect((l) => {
    if (!Te)
      return;
    const r = (d) => {
      if (t != null && t.value) {
        if (ta(t.value, d.target)) {
          n.value = false;
          return;
        }
        if (d.target && !n.value) {
          let c = function() {
            oa(
              js,
              o,
              f
            );
          };
          const f = { originalEvent: d };
          d.pointerType === "touch" ? (e.removeEventListener("click", a.value), a.value = c, e.addEventListener("click", a.value, {
            once: true
          })) : c();
        } else
          e.removeEventListener("click", a.value);
        n.value = false;
      }
    }, u = window.setTimeout(() => {
      e.addEventListener("pointerdown", r);
    }, 0);
    l(() => {
      window.clearTimeout(u), e.removeEventListener("pointerdown", r), e.removeEventListener("click", a.value);
    });
  }), {
    onPointerDownCapture: () => n.value = true
  };
}
function ol(o, t) {
  var a;
  const e = ((a = t == null ? void 0 : t.value) == null ? void 0 : a.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), n = ref(false);
  return watchEffect(async (s) => {
    if (!Te)
      return;
    const l = async (r) => {
      t != null && t.value && (ta(t.value, r.target) || r.target && !n.value && oa(
        el,
        o,
        { originalEvent: r }
      ));
    };
    e.addEventListener("focusin", l), s(() => e.removeEventListener("focusin", l));
  }), {
    onFocusCapture: () => n.value = true,
    onBlurCapture: () => n.value = false
  };
}
function oa(o, t, e) {
  const n = e.originalEvent.target, a = new CustomEvent(o, {
    bubbles: false,
    cancelable: true,
    detail: e
  });
  t && n.addEventListener(o, t, { once: true }), n.dispatchEvent(a);
}
var mt = defineComponent({
  __name: "DismissableLayer",
  props: {
    disableOutsidePointerEvents: { type: Boolean, default: false },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss"],
  setup(o, { emit: t }) {
    const e = o, { primitiveElement: n, currentElement: a } = H(), s = computed(
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
    const d = computed(() => a.value ? Array.from(l.value).indexOf(a.value) : -1), c = computed(() => r.value.size > 0), f = computed(() => {
      const v = Array.from(l.value), [h2] = [...r.value].slice(-1), _ = v.indexOf(h2);
      return d.value >= _;
    }), p = tl(async (v) => {
      f.value && (t("pointerDownOutside", v), t("interactOutside", v), await nextTick(), v.defaultPrevented || t("dismiss"));
    }, a), m = ol((v) => {
      t("focusOutside", v), t("interactOutside", v), v.defaultPrevented || t("dismiss");
    }, a);
    return rs("Escape", (v) => {
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
    }), (v, h2) => (openBlock(), createBlock(unref(M), {
      ref_key: "primitiveElement",
      ref: n,
      "as-child": v.asChild,
      as: v.as,
      "data-dismissable-layer": "",
      style: normalizeStyle({
        pointerEvents: c.value ? f.value ? "auto" : "none" : void 0
      }),
      onFocusCapture: unref(m).onFocusCapture,
      onBlurCapture: unref(m).onBlurCapture,
      onPointerdownCapture: unref(p).onPointerDownCapture
    }, {
      default: withCtx(() => [
        renderSlot(v.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "style", "onFocusCapture", "onBlurCapture", "onPointerdownCapture"]));
  }
});
var to = "focusScope.autoFocusOnMount";
var oo = "focusScope.autoFocusOnUnmount";
var bn = { bubbles: false, cancelable: true };
function nl(o, { select: t = false } = {}) {
  const e = document.activeElement;
  for (const n of o)
    if (Me(n, { select: t }), document.activeElement !== e)
      return;
}
function al(o) {
  const t = na(o), e = wn(t, o), n = wn(t.reverse(), o);
  return [e, n];
}
function na(o) {
  const t = [], e = document.createTreeWalker(o, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (n) => {
      const a = n.tagName === "INPUT" && n.type === "hidden";
      return n.disabled || n.hidden || a ? NodeFilter.FILTER_SKIP : n.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; e.nextNode(); )
    t.push(e.currentNode);
  return t;
}
function wn(o, t) {
  for (const e of o)
    if (!sl(e, { upTo: t }))
      return e;
}
function sl(o, { upTo: t }) {
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
function ll(o) {
  return o instanceof HTMLInputElement && "select" in o;
}
function Me(o, { select: t = false } = {}) {
  if (o && o.focus) {
    const e = document.activeElement;
    o.focus({ preventScroll: true }), o !== e && ll(o) && t && o.select();
  }
}
var il = wo(() => ref([]));
function rl() {
  const o = il();
  return {
    add(t) {
      const e = o.value[0];
      t !== e && (e == null || e.pause()), o.value = Cn(o.value, t), o.value.unshift(t);
    },
    remove(t) {
      var e;
      o.value = Cn(o.value, t), (e = o.value[0]) == null || e.resume();
    }
  };
}
function Cn(o, t) {
  const e = [...o], n = e.indexOf(t);
  return n !== -1 && e.splice(n, 1), e;
}
function ul(o) {
  return o.filter((t) => t.tagName !== "A");
}
var Lt = defineComponent({
  __name: "FocusScope",
  props: {
    loop: { type: Boolean, default: false },
    trapped: { type: Boolean, default: false },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["mountAutoFocus", "unmountAutoFocus"],
  setup(o, { emit: t }) {
    const e = o, { primitiveElement: n, currentElement: a } = H(), s = ref(null), l = rl(), r = reactive({
      paused: false,
      pause() {
        this.paused = true;
      },
      resume() {
        this.paused = false;
      }
    });
    watchEffect((d) => {
      if (!Te)
        return;
      const c = a.value;
      if (!e.trapped)
        return;
      function f(h2) {
        if (r.paused || !c)
          return;
        const _ = h2.target;
        c.contains(_) ? s.value = _ : Me(s.value, { select: true });
      }
      function p(h2) {
        if (r.paused || !c)
          return;
        const _ = h2.relatedTarget;
        _ !== null && (c.contains(_) || Me(s.value, { select: true }));
      }
      function m(h2) {
        if (document.activeElement === document.body)
          for (const S of h2)
            S.removedNodes.length > 0 && Me(c);
      }
      document.addEventListener("focusin", f), document.addEventListener("focusout", p);
      const v = new MutationObserver(m);
      c && v.observe(c, { childList: true, subtree: true }), d(() => {
        document.removeEventListener("focusin", f), document.removeEventListener("focusout", p), v.disconnect();
      });
    }), watchEffect(async (d) => {
      const c = a.value;
      if (await nextTick(), !c)
        return;
      l.add(r);
      const f = document.activeElement;
      if (!c.contains(f)) {
        const m = new CustomEvent(to, bn);
        c.addEventListener(
          to,
          (v) => t("mountAutoFocus", v)
        ), c.dispatchEvent(m), m.defaultPrevented || (nl(ul(na(c)), {
          select: true
        }), document.activeElement === f && Me(c));
      }
      d(() => {
        c.removeEventListener(
          to,
          (h2) => t("mountAutoFocus", h2)
        );
        const m = new CustomEvent(oo, bn), v = (h2) => {
          t("unmountAutoFocus", h2);
        };
        c.addEventListener(oo, v), c.dispatchEvent(m), setTimeout(() => {
          m.defaultPrevented || Me(f ?? document.body, { select: true }), c.removeEventListener(oo, v), l.remove(r);
        }, 0);
      });
    });
    function u(d) {
      if (!e.loop && !e.trapped || r.paused)
        return;
      const c = d.key === "Tab" && !d.altKey && !d.ctrlKey && !d.metaKey, f = document.activeElement;
      if (c && f) {
        const p = d.currentTarget, [m, v] = al(p);
        m && v ? !d.shiftKey && f === v ? (d.preventDefault(), e.loop && Me(m, { select: true })) : d.shiftKey && f === m && (d.preventDefault(), e.loop && Me(v, { select: true })) : f === p && d.preventDefault();
      }
    }
    return (d, c) => (openBlock(), createBlock(unref(M), {
      ref_key: "primitiveElement",
      ref: n,
      "tab-index": "-1",
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
var dl = "menu.itemSelect";
var so = ["Enter", " "];
var cl = ["ArrowDown", "PageUp", "Home"];
var aa = ["ArrowUp", "PageDown", "End"];
var pl = [...cl, ...aa];
var fl = {
  ltr: [...so, "ArrowRight"],
  rtl: [...so, "ArrowLeft"]
};
var ml = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
};
function Do(o) {
  return o ? "open" : "closed";
}
function Pt(o) {
  return o === "indeterminate";
}
function Mo(o) {
  return Pt(o) ? "indeterminate" : o ? "checked" : "unchecked";
}
function lo(o) {
  const t = document.activeElement;
  for (const e of o)
    if (e === t || (e.focus(), document.activeElement !== t))
      return;
}
function vl(o, t) {
  const { x: e, y: n } = o;
  let a = false;
  for (let s = 0, l = t.length - 1; s < t.length; l = s++) {
    const r = t[s].x, u = t[s].y, d = t[l].x, c = t[l].y;
    u > n != c > n && e < (d - r) * (n - u) / (c - u) + r && (a = !a);
  }
  return a;
}
function hl(o, t) {
  if (!t)
    return false;
  const e = { x: o.clientX, y: o.clientY };
  return vl(e, t);
}
function it(o) {
  return o.pointerType === "mouse";
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
  setup(o, { emit: t }) {
    const e = o, n = inject(ye);
    return (a, s) => (openBlock(), createBlock(unref(Lt), {
      "as-child": "",
      loop: "",
      trapped: e.trapFocus,
      onMountAutoFocus: s[5] || (s[5] = (l) => t("openAutoFocus", l)),
      onUnmountAutoFocus: s[6] || (s[6] = (l) => t("closeAutoFocus", l))
    }, {
      default: withCtx(() => [
        createVNode(unref(mt), mergeProps(a.$attrs, {
          id: unref(n).contentId,
          as: a.as,
          "as-child": a.asChild,
          "disable-outside-pointer-events": a.disableOutsidePointerEvents,
          role: "dialog",
          "aria-describedby": unref(n).descriptionId,
          "aria-labelledby": unref(n).titleId,
          "data-state": unref(Do)(unref(n).open.value),
          onDismiss: s[0] || (s[0] = (l) => {
            var r;
            return (r = unref(n)) == null ? void 0 : r.onOpenChange(false);
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
var gl = defineComponent({
  __name: "DialogContentModal",
  props: {
    forceMount: { type: Boolean },
    trapFocus: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss", "openAutoFocus", "closeAutoFocus"],
  setup(o, { emit: t }) {
    const e = o, n = inject(ye), a = G(t);
    return (s, l) => {
      var r;
      return openBlock(), createBlock(sa, mergeProps({ ...e, ...unref(a) }, {
        "trap-focus": (r = unref(n)) == null ? void 0 : r.open.value,
        "disable-outside-pointer-events": true,
        onCloseAutoFocus: l[0] || (l[0] = (u) => {
          var d, c;
          t("closeAutoFocus", u), u.defaultPrevented || (u.preventDefault(), (c = (d = unref(n)) == null ? void 0 : d.triggerElement.value) == null || c.focus());
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
var yl = defineComponent({
  __name: "DialogContentNonModal",
  props: {
    forceMount: { type: Boolean },
    trapFocus: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss", "openAutoFocus", "closeAutoFocus"],
  setup(o, { emit: t }) {
    const e = o, n = G(t), a = inject(ye), s = ref(false), l = ref(false);
    return (r, u) => (openBlock(), createBlock(sa, mergeProps({ ...e, ...unref(n) }, {
      "trap-focus": false,
      "disable-outside-pointer-events": false,
      onCloseAutoFocus: u[0] || (u[0] = (d) => {
        var c, f;
        t("closeAutoFocus", d), d.defaultPrevented || (s.value || (f = (c = unref(a)) == null ? void 0 : c.triggerElement.value) == null || f.focus(), d.preventDefault()), s.value = false, l.value = false;
      }),
      onInteractOutside: u[1] || (u[1] = (d) => {
        var p, m;
        d.defaultPrevented || (s.value = true, d.detail.originalEvent.type === "pointerdown" && (l.value = true));
        const c = d.target;
        ((m = (p = unref(a)) == null ? void 0 : p.triggerElement.value) == null ? void 0 : m.contains(c)) && d.preventDefault(), d.detail.originalEvent.type === "focusin" && l.value && d.preventDefault();
      })
    }), {
      default: withCtx(() => [
        renderSlot(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var _l = defineComponent({
  __name: "DialogContent",
  props: {
    forceMount: { type: Boolean },
    trapFocus: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss", "openAutoFocus", "closeAutoFocus"],
  setup(o, { emit: t }) {
    const e = o, n = inject(ye), a = G(t);
    return (s, l) => (openBlock(), createBlock(unref(ie), {
      present: unref(n).open.value
    }, {
      default: withCtx(() => {
        var r;
        return [
          (r = unref(n)) != null && r.modal.value ? (openBlock(), createBlock(gl, mergeProps({ key: 0 }, { ...e, ...unref(a), ...s.$attrs }, {
            onOpenAutoFocus: l[0] || (l[0] = (u) => t("openAutoFocus", u))
          }), {
            default: withCtx(() => [
              renderSlot(s.$slots, "default")
            ]),
            _: 3
          }, 16)) : (openBlock(), createBlock(yl, normalizeProps(mergeProps({ key: 1 }, { ...e, ...unref(a), ...s.$attrs })), {
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
var bl = defineComponent({
  __name: "DialogOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = inject(ye), e = kt();
    return watch(
      () => t == null ? void 0 : t.open.value,
      (n) => e.value = n ?? false
    ), (n, a) => (openBlock(), createBlock(unref(ie), {
      present: n.forceMount || unref(t).open.value
    }, {
      default: withCtx(() => {
        var s;
        return [
          createVNode(unref(M), mergeProps(n.$attrs, {
            as: n.as,
            "as-child": n.asChild,
            "data-state": (s = unref(t)) != null && s.open.value ? "open" : "closed",
            style: { "pointer-events": "auto" },
            "data-aria-hidden": "true",
            "aria-hidden": "true"
          }), {
            default: withCtx(() => [
              renderSlot(n.$slots, "default")
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
  setup(o) {
    const t = o, e = inject(ye);
    return (n, a) => (openBlock(), createBlock(unref(M), mergeProps(t, {
      type: n.as === "button" ? "button" : void 0,
      "aria-label": "Close",
      onClick: a[0] || (a[0] = (s) => {
        var l;
        return (l = unref(e)) == null ? void 0 : l.onOpenChange(false);
      })
    }), {
      default: withCtx(() => [
        renderSlot(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["type"]));
  }
});
var wl = defineComponent({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: { default: "h2" }
  },
  setup(o) {
    const t = o, e = inject(ye);
    return (n, a) => {
      var s;
      return openBlock(), createBlock(unref(M), mergeProps(t, {
        id: (s = unref(e)) == null ? void 0 : s.descriptionId
      }), {
        default: withCtx(() => [
          renderSlot(n.$slots, "default")
        ]),
        _: 3
      }, 16, ["id"]);
    };
  }
});
var Cl = defineComponent({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: { default: "p" }
  },
  setup(o) {
    const t = o, e = inject(ye);
    return (n, a) => {
      var s;
      return openBlock(), createBlock(unref(M), mergeProps(t, {
        id: (s = unref(e)) == null ? void 0 : s.descriptionId
      }), {
        default: withCtx(() => [
          renderSlot(n.$slots, "default")
        ]),
        _: 3
      }, 16, ["id"]);
    };
  }
});
var ur = defineComponent({
  __name: "AlertDialogRoot",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean }
  },
  emits: ["update:open"],
  setup(o, { emit: t }) {
    const e = o, n = G(t);
    return (a, s) => (openBlock(), createBlock(unref(Js), mergeProps({ ...e, ...unref(n) }, { modal: true }), {
      default: withCtx(() => [
        renderSlot(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var dr = defineComponent({
  __name: "AlertDialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o;
    return (e, n) => (openBlock(), createBlock(unref(Zs), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var cr = defineComponent({
  __name: "AlertDialogPortal",
  props: {
    to: {},
    disabled: { type: Boolean }
  },
  setup(o) {
    const t = o;
    return (e, n) => (openBlock(), createBlock(unref(Qs), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var ia = Symbol();
var pr = defineComponent({
  __name: "AlertDialogContent",
  props: {
    forceMount: { type: Boolean },
    trapFocus: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss", "openAutoFocus", "closeAutoFocus"],
  setup(o, { emit: t }) {
    const e = o, n = G(t), a = ref();
    return provide(ia, {
      onCancelElementChange: (s) => {
        a.value = s;
      }
    }), (s, l) => (openBlock(), createBlock(unref(_l), mergeProps({ ...e, ...unref(n) }, {
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
var fr = defineComponent({
  __name: "AlertDialogOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o;
    return (e, n) => (openBlock(), createBlock(unref(bl), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var mr = defineComponent({
  __name: "AlertDialogCancel",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o, e = inject(ia), { primitiveElement: n, currentElement: a } = H();
    return onMounted(() => {
      e.onCancelElementChange(a.value);
    }), (s, l) => (openBlock(), createBlock(unref(la), mergeProps(t, {
      ref_key: "primitiveElement",
      ref: n
    }), {
      default: withCtx(() => [
        renderSlot(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var vr = defineComponent({
  __name: "AlertDialogTitle",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o;
    return (e, n) => (openBlock(), createBlock(unref(wl), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var hr = defineComponent({
  __name: "AlertDialogDescription",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o;
    return (e, n) => (openBlock(), createBlock(unref(Cl), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var gr = defineComponent({
  __name: "AlertDialogAction",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o;
    return (e, n) => (openBlock(), createBlock(unref(la), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var ko = Symbol();
var yr = defineComponent({
  __name: "ToolbarRoot",
  props: {
    orientation: { default: "horizontal" },
    dir: { default: "ltr" },
    loop: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o, { orientation: e, dir: n } = toRefs(t);
    return provide(ko, { orientation: e, dir: n }), (a, s) => (openBlock(), createBlock(unref(Bo), {
      "as-child": "",
      orientation: unref(e),
      dir: unref(n),
      loop: a.loop
    }, {
      default: withCtx(() => [
        createVNode(unref(M), {
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
var El = defineComponent({
  __name: "ToolbarButton",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(o) {
    const t = o;
    return (e, n) => (openBlock(), createBlock(unref(Rt), {
      "as-child": "",
      focusable: !e.disabled
    }, {
      default: withCtx(() => [
        createVNode(unref(M), mergeProps({
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
var _r = defineComponent({
  __name: "ToolbarLink",
  props: {
    asChild: { type: Boolean },
    as: { default: "a" }
  },
  setup(o) {
    const t = o;
    return (e, n) => (openBlock(), createBlock(unref(Rt), {
      "as-child": "",
      focusable: ""
    }, {
      default: withCtx(() => [
        createVNode(unref(M), mergeProps(t, {
          onKeydown: n[0] || (n[0] = (a) => {
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
var br = defineComponent({
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
  setup(o, { emit: t }) {
    const e = o, n = inject(ko), a = G(t);
    return (s, l) => {
      var r, u;
      return openBlock(), createBlock(unref(Hs), mergeProps({ ...e, ...unref(a) }, {
        "data-orientation": (r = unref(n)) == null ? void 0 : r.orientation.value,
        dir: (u = unref(n)) == null ? void 0 : u.dir.value,
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
var wr = defineComponent({
  __name: "ToolbarToggleItem",
  props: {
    value: {},
    defaultValue: { type: Boolean },
    pressed: { type: Boolean },
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o;
    return (e, n) => (openBlock(), createBlock(El, { "as-child": "" }, {
      default: withCtx(() => [
        createVNode(unref(Ws), normalizeProps(guardReactiveProps(t)), {
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
var Cr = defineComponent({
  __name: "ToolbarSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o, e = inject(ko);
    return (n, a) => {
      var s;
      return openBlock(), createBlock(qn, {
        orientation: (s = unref(e)) == null ? void 0 : s.orientation.value,
        "as-child": t.asChild,
        as: n.as
      }, {
        default: withCtx(() => [
          renderSlot(n.$slots, "default")
        ]),
        _: 3
      }, 8, ["orientation", "as-child", "as"]);
    };
  }
});
var xo = Symbol();
var Er = defineComponent({
  __name: "AvatarRoot",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(o) {
    const t = o, e = ref("loading");
    return provide(xo, {
      imageLoadingStatus: e
    }), (n, a) => (openBlock(), createBlock(unref(M), {
      as: n.as,
      "as-child": t.asChild
    }, {
      default: withCtx(() => [
        renderSlot(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
});
function Ol(o) {
  const t = ref("idle"), e = ref(false);
  return onMounted(() => {
    if (!o) {
      t.value = "error";
      return;
    }
    e.value = true;
    const n = new window.Image(), a = (s) => () => {
      e.value && (t.value = s);
    };
    t.value = "loading", n.onload = a("loaded"), n.onerror = a("error"), n.src = o;
  }), onUnmounted(() => {
    e.value = false;
  }), t;
}
var Or = defineComponent({
  __name: "AvatarImage",
  props: {
    asChild: { type: Boolean },
    as: { default: "img" }
  },
  emits: ["loadingStatusChange"],
  setup(o, { emit: t }) {
    const e = o, n = inject(xo), a = useAttrs().src, s = Ol(a);
    return watch(
      s,
      (l) => {
        t("loadingStatusChange", l), l !== "idle" && (n.imageLoadingStatus.value = l);
      },
      { immediate: true }
    ), (l, r) => unref(s) === "loaded" ? (openBlock(), createBlock(unref(M), {
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
var $r = defineComponent({
  __name: "AvatarFallback",
  props: {
    delayMs: { default: 0 },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(o) {
    const t = o, e = inject(xo), n = ref(false);
    let a;
    return t.delayMs ? a = setTimeout(() => {
      n.value = true, clearTimeout(a);
    }, t.delayMs) : n.value = true, (s, l) => {
      var r;
      return n.value && ((r = unref(e)) == null ? void 0 : r.imageLoadingStatus.value) !== "loaded" ? (openBlock(), createBlock(unref(M), {
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
var Ro = Symbol();
var et = defineComponent({
  __name: "PopperRoot",
  setup(o) {
    const t = ref();
    return provide(Ro, {
      anchor: t,
      onAnchorChange: (e) => {
        t.value = e;
      }
    }), (e, n) => renderSlot(e.$slots, "default");
  }
});
var tt = defineComponent({
  __name: "PopperAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o, { primitiveElement: e, currentElement: n } = H(), a = inject(Ro);
    return watch(n, () => {
      a == null || a.onAnchorChange(t.element ?? n.value);
    }), (s, l) => (openBlock(), createBlock(unref(M), {
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
var $l = ["top", "right", "bottom", "left"];
var rt = Math.min;
var Ve = Math.max;
var Sl = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
var Pl = {
  start: "end",
  end: "start"
};
function io(o, t, e) {
  return Ve(o, rt(t, e));
}
function $e(o, t) {
  return typeof o == "function" ? o(t) : o;
}
function Se(o) {
  return o.split("-")[0];
}
function ot(o) {
  return o.split("-")[1];
}
function No(o) {
  return o === "x" ? "y" : "x";
}
function Lo(o) {
  return o === "y" ? "height" : "width";
}
function nt(o) {
  return ["top", "bottom"].includes(Se(o)) ? "y" : "x";
}
function Fo(o) {
  return No(nt(o));
}
function Bl(o, t, e) {
  e === void 0 && (e = false);
  const n = ot(o), a = Fo(o), s = Lo(a);
  let l = a === "x" ? n === (e ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return t.reference[s] > t.floating[s] && (l = Bt(l)), [l, Bt(l)];
}
function Tl(o) {
  const t = Bt(o);
  return [ro(o), t, ro(t)];
}
function ro(o) {
  return o.replace(/start|end/g, (t) => Pl[t]);
}
function Al(o, t, e) {
  const n = ["left", "right"], a = ["right", "left"], s = ["top", "bottom"], l = ["bottom", "top"];
  switch (o) {
    case "top":
    case "bottom":
      return e ? t ? a : n : t ? n : a;
    case "left":
    case "right":
      return t ? s : l;
    default:
      return [];
  }
}
function Il(o, t, e, n) {
  const a = ot(o);
  let s = Al(Se(o), e === "start", n);
  return a && (s = s.map((l) => l + "-" + a), t && (s = s.concat(s.map(ro)))), s;
}
function Bt(o) {
  return o.replace(/left|right|bottom|top/g, (t) => Sl[t]);
}
function Dl(o) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...o
  };
}
function ra(o) {
  return typeof o != "number" ? Dl(o) : {
    top: o,
    right: o,
    bottom: o,
    left: o
  };
}
function Tt(o) {
  return {
    ...o,
    top: o.y,
    left: o.x,
    right: o.x + o.width,
    bottom: o.y + o.height
  };
}
function En(o, t, e) {
  let {
    reference: n,
    floating: a
  } = o;
  const s = nt(t), l = Fo(t), r = Lo(l), u = Se(t), d = s === "y", c = n.x + n.width / 2 - a.width / 2, f = n.y + n.height / 2 - a.height / 2, p = n[r] / 2 - a[r] / 2;
  let m;
  switch (u) {
    case "top":
      m = {
        x: c,
        y: n.y - a.height
      };
      break;
    case "bottom":
      m = {
        x: c,
        y: n.y + n.height
      };
      break;
    case "right":
      m = {
        x: n.x + n.width,
        y: f
      };
      break;
    case "left":
      m = {
        x: n.x - a.width,
        y: f
      };
      break;
    default:
      m = {
        x: n.x,
        y: n.y
      };
  }
  switch (ot(t)) {
    case "start":
      m[l] -= p * (e && d ? -1 : 1);
      break;
    case "end":
      m[l] += p * (e && d ? -1 : 1);
      break;
  }
  return m;
}
var Ml = async (o, t, e) => {
  const {
    placement: n = "bottom",
    strategy: a = "absolute",
    middleware: s = [],
    platform: l
  } = e, r = s.filter(Boolean), u = await (l.isRTL == null ? void 0 : l.isRTL(t));
  let d = await l.getElementRects({
    reference: o,
    floating: t,
    strategy: a
  }), {
    x: c,
    y: f
  } = En(d, n, u), p = n, m = {}, v = 0;
  for (let h2 = 0; h2 < r.length; h2++) {
    const {
      name: _,
      fn: S
    } = r[h2], {
      x: O,
      y: E,
      data: B,
      reset: T
    } = await S({
      x: c,
      y: f,
      initialPlacement: n,
      placement: p,
      strategy: a,
      middlewareData: m,
      rects: d,
      platform: l,
      elements: {
        reference: o,
        floating: t
      }
    });
    if (c = O ?? c, f = E ?? f, m = {
      ...m,
      [_]: {
        ...m[_],
        ...B
      }
    }, T && v <= 50) {
      v++, typeof T == "object" && (T.placement && (p = T.placement), T.rects && (d = T.rects === true ? await l.getElementRects({
        reference: o,
        floating: t,
        strategy: a
      }) : T.rects), {
        x: c,
        y: f
      } = En(d, p, u)), h2 = -1;
      continue;
    }
  }
  return {
    x: c,
    y: f,
    placement: p,
    strategy: a,
    middlewareData: m
  };
};
async function ut(o, t) {
  var e;
  t === void 0 && (t = {});
  const {
    x: n,
    y: a,
    platform: s,
    rects: l,
    elements: r,
    strategy: u
  } = o, {
    boundary: d = "clippingAncestors",
    rootBoundary: c = "viewport",
    elementContext: f = "floating",
    altBoundary: p = false,
    padding: m = 0
  } = $e(t, o), v = ra(m), _ = r[p ? f === "floating" ? "reference" : "floating" : f], S = Tt(await s.getClippingRect({
    element: (e = await (s.isElement == null ? void 0 : s.isElement(_))) == null || e ? _ : _.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(r.floating)),
    boundary: d,
    rootBoundary: c,
    strategy: u
  })), O = f === "floating" ? {
    ...l.floating,
    x: n,
    y: a
  } : l.reference, E = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(r.floating)), B = await (s.isElement == null ? void 0 : s.isElement(E)) ? await (s.getScale == null ? void 0 : s.getScale(E)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, T = Tt(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: O,
    offsetParent: E,
    strategy: u
  }) : O);
  return {
    top: (S.top - T.top + v.top) / B.y,
    bottom: (T.bottom - S.bottom + v.bottom) / B.y,
    left: (S.left - T.left + v.left) / B.x,
    right: (T.right - S.right + v.right) / B.x
  };
}
var kl = (o) => ({
  name: "arrow",
  options: o,
  async fn(t) {
    const {
      x: e,
      y: n,
      placement: a,
      rects: s,
      platform: l,
      elements: r
    } = t, {
      element: u,
      padding: d = 0
    } = $e(o, t) || {};
    if (u == null)
      return {};
    const c = ra(d), f = {
      x: e,
      y: n
    }, p = Fo(a), m = Lo(p), v = await l.getDimensions(u), h2 = p === "y", _ = h2 ? "top" : "left", S = h2 ? "bottom" : "right", O = h2 ? "clientHeight" : "clientWidth", E = s.reference[m] + s.reference[p] - f[p] - s.floating[m], B = f[p] - s.reference[p], T = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(u));
    let D = T ? T[O] : 0;
    (!D || !await (l.isElement == null ? void 0 : l.isElement(T))) && (D = r.floating[O] || s.floating[m]);
    const A = E / 2 - B / 2, W = D / 2 - v[m] / 2 - 1, I = rt(c[_], W), R = rt(c[S], W), K = I, U = D - v[m] - R, Y = D / 2 - v[m] / 2 + A, Z = io(K, Y, U), oe = ot(a) != null && Y != Z && s.reference[m] / 2 - (Y < K ? I : R) - v[m] / 2 < 0 ? Y < K ? K - Y : U - Y : 0;
    return {
      [p]: f[p] - oe,
      data: {
        [p]: Z,
        centerOffset: Y - Z + oe
      }
    };
  }
});
var xl = function(o) {
  return o === void 0 && (o = {}), {
    name: "flip",
    options: o,
    async fn(t) {
      var e;
      const {
        placement: n,
        middlewareData: a,
        rects: s,
        initialPlacement: l,
        platform: r,
        elements: u
      } = t, {
        mainAxis: d = true,
        crossAxis: c = true,
        fallbackPlacements: f,
        fallbackStrategy: p = "bestFit",
        fallbackAxisSideDirection: m = "none",
        flipAlignment: v = true,
        ...h2
      } = $e(o, t), _ = Se(n), S = Se(l) === l, O = await (r.isRTL == null ? void 0 : r.isRTL(u.floating)), E = f || (S || !v ? [Bt(l)] : Tl(l));
      !f && m !== "none" && E.push(...Il(l, v, m, O));
      const B = [l, ...E], T = await ut(t, h2), D = [];
      let A = ((e = a.flip) == null ? void 0 : e.overflows) || [];
      if (d && D.push(T[_]), c) {
        const K = Bl(n, s, O);
        D.push(T[K[0]], T[K[1]]);
      }
      if (A = [...A, {
        placement: n,
        overflows: D
      }], !D.every((K) => K <= 0)) {
        var W, I;
        const K = (((W = a.flip) == null ? void 0 : W.index) || 0) + 1, U = B[K];
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
        let Y = (I = A.filter((Z) => Z.overflows[0] <= 0).sort((Z, ne) => Z.overflows[1] - ne.overflows[1])[0]) == null ? void 0 : I.placement;
        if (!Y)
          switch (p) {
            case "bestFit": {
              var R;
              const Z = (R = A.map((ne) => [ne.placement, ne.overflows.filter((oe) => oe > 0).reduce((oe, Ue) => oe + Ue, 0)]).sort((ne, oe) => ne[1] - oe[1])[0]) == null ? void 0 : R[0];
              Z && (Y = Z);
              break;
            }
            case "initialPlacement":
              Y = l;
              break;
          }
        if (n !== Y)
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
function On(o, t) {
  return {
    top: o.top - t.height,
    right: o.right - t.width,
    bottom: o.bottom - t.height,
    left: o.left - t.width
  };
}
function $n(o) {
  return $l.some((t) => o[t] >= 0);
}
var Rl = function(o) {
  return o === void 0 && (o = {}), {
    name: "hide",
    options: o,
    async fn(t) {
      const {
        rects: e
      } = t, {
        strategy: n = "referenceHidden",
        ...a
      } = $e(o, t);
      switch (n) {
        case "referenceHidden": {
          const s = await ut(t, {
            ...a,
            elementContext: "reference"
          }), l = On(s, e.reference);
          return {
            data: {
              referenceHiddenOffsets: l,
              referenceHidden: $n(l)
            }
          };
        }
        case "escaped": {
          const s = await ut(t, {
            ...a,
            altBoundary: true
          }), l = On(s, e.floating);
          return {
            data: {
              escapedOffsets: l,
              escaped: $n(l)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function Nl(o, t) {
  const {
    placement: e,
    platform: n,
    elements: a
  } = o, s = await (n.isRTL == null ? void 0 : n.isRTL(a.floating)), l = Se(e), r = ot(e), u = nt(e) === "y", d = ["left", "top"].includes(l) ? -1 : 1, c = s && u ? -1 : 1, f = $e(t, o);
  let {
    mainAxis: p,
    crossAxis: m,
    alignmentAxis: v
  } = typeof f == "number" ? {
    mainAxis: f,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...f
  };
  return r && typeof v == "number" && (m = r === "end" ? v * -1 : v), u ? {
    x: m * c,
    y: p * d
  } : {
    x: p * d,
    y: m * c
  };
}
var Ll = function(o) {
  return o === void 0 && (o = 0), {
    name: "offset",
    options: o,
    async fn(t) {
      const {
        x: e,
        y: n
      } = t, a = await Nl(t, o);
      return {
        x: e + a.x,
        y: n + a.y,
        data: a
      };
    }
  };
};
var Fl = function(o) {
  return o === void 0 && (o = {}), {
    name: "shift",
    options: o,
    async fn(t) {
      const {
        x: e,
        y: n,
        placement: a
      } = t, {
        mainAxis: s = true,
        crossAxis: l = false,
        limiter: r = {
          fn: (_) => {
            let {
              x: S,
              y: O
            } = _;
            return {
              x: S,
              y: O
            };
          }
        },
        ...u
      } = $e(o, t), d = {
        x: e,
        y: n
      }, c = await ut(t, u), f = nt(Se(a)), p = No(f);
      let m = d[p], v = d[f];
      if (s) {
        const _ = p === "y" ? "top" : "left", S = p === "y" ? "bottom" : "right", O = m + c[_], E = m - c[S];
        m = io(O, m, E);
      }
      if (l) {
        const _ = f === "y" ? "top" : "left", S = f === "y" ? "bottom" : "right", O = v + c[_], E = v - c[S];
        v = io(O, v, E);
      }
      const h2 = r.fn({
        ...t,
        [p]: m,
        [f]: v
      });
      return {
        ...h2,
        data: {
          x: h2.x - e,
          y: h2.y - n
        }
      };
    }
  };
};
var Kl = function(o) {
  return o === void 0 && (o = {}), {
    options: o,
    fn(t) {
      const {
        x: e,
        y: n,
        placement: a,
        rects: s,
        middlewareData: l
      } = t, {
        offset: r = 0,
        mainAxis: u = true,
        crossAxis: d = true
      } = $e(o, t), c = {
        x: e,
        y: n
      }, f = nt(a), p = No(f);
      let m = c[p], v = c[f];
      const h2 = $e(r, t), _ = typeof h2 == "number" ? {
        mainAxis: h2,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...h2
      };
      if (u) {
        const E = p === "y" ? "height" : "width", B = s.reference[p] - s.floating[E] + _.mainAxis, T = s.reference[p] + s.reference[E] - _.mainAxis;
        m < B ? m = B : m > T && (m = T);
      }
      if (d) {
        var S, O;
        const E = p === "y" ? "width" : "height", B = ["top", "left"].includes(Se(a)), T = s.reference[f] - s.floating[E] + (B && ((S = l.offset) == null ? void 0 : S[f]) || 0) + (B ? 0 : _.crossAxis), D = s.reference[f] + s.reference[E] + (B ? 0 : ((O = l.offset) == null ? void 0 : O[f]) || 0) - (B ? _.crossAxis : 0);
        v < T ? v = T : v > D && (v = D);
      }
      return {
        [p]: m,
        [f]: v
      };
    }
  };
};
var Vl = function(o) {
  return o === void 0 && (o = {}), {
    name: "size",
    options: o,
    async fn(t) {
      const {
        placement: e,
        rects: n,
        platform: a,
        elements: s
      } = t, {
        apply: l = () => {
        },
        ...r
      } = $e(o, t), u = await ut(t, r), d = Se(e), c = ot(e), f = nt(e) === "y", {
        width: p,
        height: m
      } = n.floating;
      let v, h2;
      d === "top" || d === "bottom" ? (v = d, h2 = c === (await (a.isRTL == null ? void 0 : a.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (h2 = d, v = c === "end" ? "top" : "bottom");
      const _ = m - u[v], S = p - u[h2], O = !t.middlewareData.shift;
      let E = _, B = S;
      if (f) {
        const D = p - u.left - u.right;
        B = c || O ? rt(S, D) : D;
      } else {
        const D = m - u.top - u.bottom;
        E = c || O ? rt(_, D) : D;
      }
      if (O && !c) {
        const D = Ve(u.left, 0), A = Ve(u.right, 0), W = Ve(u.top, 0), I = Ve(u.bottom, 0);
        f ? B = p - 2 * (D !== 0 || A !== 0 ? D + A : Ve(u.left, u.right)) : E = m - 2 * (W !== 0 || I !== 0 ? W + I : Ve(u.top, u.bottom));
      }
      await l({
        ...t,
        availableWidth: B,
        availableHeight: E
      });
      const T = await a.getDimensions(s.floating);
      return p !== T.width || m !== T.height ? {
        reset: {
          rects: true
        }
      } : {};
    }
  };
};
function de(o) {
  var t;
  return ((t = o.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function fe(o) {
  return de(o).getComputedStyle(o);
}
function ua(o) {
  return o instanceof de(o).Node;
}
function ke(o) {
  return ua(o) ? (o.nodeName || "").toLowerCase() : "#document";
}
function ve(o) {
  return o instanceof de(o).HTMLElement;
}
function be(o) {
  return o instanceof de(o).Element;
}
function Sn(o) {
  return typeof ShadowRoot < "u" && (o instanceof de(o).ShadowRoot || o instanceof ShadowRoot);
}
function dt(o) {
  const { overflow: t, overflowX: e, overflowY: n, display: a } = fe(o);
  return /auto|scroll|overlay|hidden|clip/.test(t + n + e) && !["inline", "contents"].includes(a);
}
function Hl(o) {
  return ["table", "td", "th"].includes(ke(o));
}
function uo(o) {
  const t = Ko(), e = fe(o);
  return e.transform !== "none" || e.perspective !== "none" || !t && !!e.backdropFilter && e.backdropFilter !== "none" || !t && !!e.filter && e.filter !== "none" || ["transform", "perspective", "filter"].some((n) => (e.willChange || "").includes(n)) || ["paint", "layout", "strict", "content"].some((n) => (e.contain || "").includes(n));
}
function Ko() {
  return !(typeof CSS > "u" || !CSS.supports) && CSS.supports("-webkit-backdrop-filter", "none");
}
function Ft(o) {
  return ["html", "body", "#document"].includes(ke(o));
}
var co = Math.min;
var Ge = Math.max;
var At = Math.round;
var Ot = Math.floor;
var He = (o) => ({ x: o, y: o });
function da(o) {
  const t = fe(o);
  let e = parseFloat(t.width) || 0, n = parseFloat(t.height) || 0;
  const a = ve(o), s = a ? o.offsetWidth : e, l = a ? o.offsetHeight : n, r = At(e) !== s || At(n) !== l;
  return r && (e = s, n = l), { width: e, height: n, $: r };
}
function Vo(o) {
  return be(o) ? o : o.contextElement;
}
function Xe(o) {
  const t = Vo(o);
  if (!ve(t))
    return He(1);
  const e = t.getBoundingClientRect(), { width: n, height: a, $: s } = da(t);
  let l = (s ? At(e.width) : e.width) / n, r = (s ? At(e.height) : e.height) / a;
  return l && Number.isFinite(l) || (l = 1), r && Number.isFinite(r) || (r = 1), { x: l, y: r };
}
var Pn = He(0);
function ca(o, t, e) {
  var n, a;
  if (t === void 0 && (t = true), !Ko())
    return Pn;
  const s = o ? de(o) : window;
  return !e || t && e !== s ? Pn : { x: ((n = s.visualViewport) == null ? void 0 : n.offsetLeft) || 0, y: ((a = s.visualViewport) == null ? void 0 : a.offsetTop) || 0 };
}
function We(o, t, e, n) {
  t === void 0 && (t = false), e === void 0 && (e = false);
  const a = o.getBoundingClientRect(), s = Vo(o);
  let l = He(1);
  t && (n ? be(n) && (l = Xe(n)) : l = Xe(o));
  const r = ca(s, e, n);
  let u = (a.left + r.x) / l.x, d = (a.top + r.y) / l.y, c = a.width / l.x, f = a.height / l.y;
  if (s) {
    const p = de(s), m = n && be(n) ? de(n) : n;
    let v = p.frameElement;
    for (; v && n && m !== p; ) {
      const h2 = Xe(v), _ = v.getBoundingClientRect(), S = getComputedStyle(v), O = _.left + (v.clientLeft + parseFloat(S.paddingLeft)) * h2.x, E = _.top + (v.clientTop + parseFloat(S.paddingTop)) * h2.y;
      u *= h2.x, d *= h2.y, c *= h2.x, f *= h2.y, u += O, d += E, v = de(v).frameElement;
    }
  }
  return Tt({ width: c, height: f, x: u, y: d });
}
function we(o) {
  return ((ua(o) ? o.ownerDocument : o.document) || window.document).documentElement;
}
function Kt(o) {
  return be(o) ? { scrollLeft: o.scrollLeft, scrollTop: o.scrollTop } : { scrollLeft: o.pageXOffset, scrollTop: o.pageYOffset };
}
function pa(o) {
  return We(we(o)).left + Kt(o).scrollLeft;
}
function Ze(o) {
  if (ke(o) === "html")
    return o;
  const t = o.assignedSlot || o.parentNode || Sn(o) && o.host || we(o);
  return Sn(t) ? t.host : t;
}
function fa(o) {
  const t = Ze(o);
  return Ft(t) ? o.ownerDocument ? o.ownerDocument.body : o.body : ve(t) && dt(t) ? t : fa(t);
}
function It(o, t) {
  var e;
  t === void 0 && (t = []);
  const n = fa(o), a = n === ((e = o.ownerDocument) == null ? void 0 : e.body), s = de(n);
  return a ? t.concat(s, s.visualViewport || [], dt(n) ? n : []) : t.concat(n, It(n));
}
function Bn(o, t, e) {
  let n;
  if (t === "viewport")
    n = function(a, s) {
      const l = de(a), r = we(a), u = l.visualViewport;
      let d = r.clientWidth, c = r.clientHeight, f = 0, p = 0;
      if (u) {
        d = u.width, c = u.height;
        const m = Ko();
        (!m || m && s === "fixed") && (f = u.offsetLeft, p = u.offsetTop);
      }
      return { width: d, height: c, x: f, y: p };
    }(o, e);
  else if (t === "document")
    n = function(a) {
      const s = we(a), l = Kt(a), r = a.ownerDocument.body, u = Ge(s.scrollWidth, s.clientWidth, r.scrollWidth, r.clientWidth), d = Ge(s.scrollHeight, s.clientHeight, r.scrollHeight, r.clientHeight);
      let c = -l.scrollLeft + pa(a);
      const f = -l.scrollTop;
      return fe(r).direction === "rtl" && (c += Ge(s.clientWidth, r.clientWidth) - u), { width: u, height: d, x: c, y: f };
    }(we(o));
  else if (be(t))
    n = function(a, s) {
      const l = We(a, true, s === "fixed"), r = l.top + a.clientTop, u = l.left + a.clientLeft, d = ve(a) ? Xe(a) : He(1);
      return { width: a.clientWidth * d.x, height: a.clientHeight * d.y, x: u * d.x, y: r * d.y };
    }(t, e);
  else {
    const a = ca(o);
    n = { ...t, x: t.x - a.x, y: t.y - a.y };
  }
  return Tt(n);
}
function ma(o, t) {
  const e = Ze(o);
  return !(e === t || !be(e) || Ft(e)) && (fe(e).position === "fixed" || ma(e, t));
}
function Tn(o, t) {
  return ve(o) && fe(o).position !== "fixed" ? t ? t(o) : o.offsetParent : null;
}
function An(o, t) {
  const e = de(o);
  if (!ve(o))
    return e;
  let n = Tn(o, t);
  for (; n && Hl(n) && fe(n).position === "static"; )
    n = Tn(n, t);
  return n && (ke(n) === "html" || ke(n) === "body" && fe(n).position === "static" && !uo(n)) ? e : n || function(a) {
    let s = Ze(a);
    for (; ve(s) && !Ft(s); ) {
      if (uo(s))
        return s;
      s = Ze(s);
    }
    return null;
  }(o) || e;
}
function Wl(o, t, e) {
  const n = ve(t), a = we(t), s = e === "fixed", l = We(o, true, s, t);
  let r = { scrollLeft: 0, scrollTop: 0 };
  const u = He(0);
  if (n || !n && !s)
    if ((ke(t) !== "body" || dt(a)) && (r = Kt(t)), ve(t)) {
      const d = We(t, true, s, t);
      u.x = d.x + t.clientLeft, u.y = d.y + t.clientTop;
    } else
      a && (u.x = pa(a));
  return { x: l.left + r.scrollLeft - u.x, y: l.top + r.scrollTop - u.y, width: l.width, height: l.height };
}
var zl = { getClippingRect: function(o) {
  let { element: t, boundary: e, rootBoundary: n, strategy: a } = o;
  const s = e === "clippingAncestors" ? function(d, c) {
    const f = c.get(d);
    if (f)
      return f;
    let p = It(d).filter((_) => be(_) && ke(_) !== "body"), m = null;
    const v = fe(d).position === "fixed";
    let h2 = v ? Ze(d) : d;
    for (; be(h2) && !Ft(h2); ) {
      const _ = fe(h2), S = uo(h2);
      S || _.position !== "fixed" || (m = null), (v ? !S && !m : !S && _.position === "static" && m && ["absolute", "fixed"].includes(m.position) || dt(h2) && !S && ma(d, h2)) ? p = p.filter((O) => O !== h2) : m = _, h2 = Ze(h2);
    }
    return c.set(d, p), p;
  }(t, this._c) : [].concat(e), l = [...s, n], r = l[0], u = l.reduce((d, c) => {
    const f = Bn(t, c, a);
    return d.top = Ge(f.top, d.top), d.right = co(f.right, d.right), d.bottom = co(f.bottom, d.bottom), d.left = Ge(f.left, d.left), d;
  }, Bn(t, r, a));
  return { width: u.right - u.left, height: u.bottom - u.top, x: u.left, y: u.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(o) {
  let { rect: t, offsetParent: e, strategy: n } = o;
  const a = ve(e), s = we(e);
  if (e === s)
    return t;
  let l = { scrollLeft: 0, scrollTop: 0 }, r = He(1);
  const u = He(0);
  if ((a || !a && n !== "fixed") && ((ke(e) !== "body" || dt(s)) && (l = Kt(e)), ve(e))) {
    const d = We(e);
    r = Xe(e), u.x = d.x + e.clientLeft, u.y = d.y + e.clientTop;
  }
  return { width: t.width * r.x, height: t.height * r.y, x: t.x * r.x - l.scrollLeft * r.x + u.x, y: t.y * r.y - l.scrollTop * r.y + u.y };
}, isElement: be, getDimensions: function(o) {
  return da(o);
}, getOffsetParent: An, getDocumentElement: we, getScale: Xe, async getElementRects(o) {
  let { reference: t, floating: e, strategy: n } = o;
  const a = this.getOffsetParent || An, s = this.getDimensions;
  return { reference: Wl(t, await a(e), n), floating: { x: 0, y: 0, ...await s(e) } };
}, getClientRects: (o) => Array.from(o.getClientRects()), isRTL: (o) => fe(o).direction === "rtl" };
function Ul(o, t, e, n) {
  n === void 0 && (n = {});
  const { ancestorScroll: a = true, ancestorResize: s = true, elementResize: l = true, layoutShift: r = typeof IntersectionObserver == "function", animationFrame: u = false } = n, d = Vo(o), c = a || s ? [...d ? It(d) : [], ...It(t)] : [];
  c.forEach((h2) => {
    a && h2.addEventListener("scroll", e, { passive: true }), s && h2.addEventListener("resize", e);
  });
  const f = d && r ? function(h2, _) {
    let S, O = null;
    const E = we(h2);
    function B() {
      clearTimeout(S), O && O.disconnect(), O = null;
    }
    return function T(D, A) {
      D === void 0 && (D = false), A === void 0 && (A = 1), B();
      const { left: W, top: I, width: R, height: K } = h2.getBoundingClientRect();
      if (D || _(), !R || !K)
        return;
      const U = Ot(I), Y = Ot(E.clientWidth - (W + R)), Z = Ot(E.clientHeight - (I + K)), ne = Ot(W);
      let oe = true;
      O = new IntersectionObserver((Ue) => {
        const st = Ue[0].intersectionRatio;
        if (st !== A) {
          if (!oe)
            return T();
          st ? T(false, st) : S = setTimeout(() => {
            T(false, 1e-7);
          }, 100);
        }
        oe = false;
      }, { rootMargin: -U + "px " + -Y + "px " + -Z + "px " + -ne + "px", threshold: Ge(0, co(1, A)) || 1 }), O.observe(h2);
    }(true), B;
  }(d, e) : null;
  let p, m = null;
  l && (m = new ResizeObserver(e), d && !u && m.observe(d), m.observe(t));
  let v = u ? We(o) : null;
  return u && function h2() {
    const _ = We(o);
    !v || _.x === v.x && _.y === v.y && _.width === v.width && _.height === v.height || e(), v = _, p = requestAnimationFrame(h2);
  }(), e(), () => {
    c.forEach((h2) => {
      a && h2.removeEventListener("scroll", e), s && h2.removeEventListener("resize", e);
    }), f && f(), m && m.disconnect(), m = null, u && cancelAnimationFrame(p);
  };
}
var Yl = (o, t, e) => {
  const n = /* @__PURE__ */ new Map(), a = { platform: zl, ...e }, s = { ...a.platform, _c: n };
  return Ml(o, t, { ...a, platform: s });
};
function po(o) {
  var t;
  return (t = o == null ? void 0 : o.$el) != null ? t : o;
}
function Gl(o) {
  return {
    name: "arrow",
    options: o,
    fn(t) {
      const e = po(unref(o.element));
      return e == null ? {} : kl({
        element: e,
        padding: o.padding
      }).fn(t);
    }
  };
}
function va(o) {
  return typeof window > "u" ? 1 : (o.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function In(o, t) {
  const e = va(o);
  return Math.round(t * e) / e;
}
function Xl(o, t, e) {
  e === void 0 && (e = {});
  const n = e.whileElementsMounted, a = computed(() => {
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
  }), d = computed(() => po(o.value)), c = computed(() => po(t.value)), f = ref(0), p = ref(0), m = ref(r.value), v = ref(l.value), h2 = shallowRef({}), _ = ref(false), S = computed(() => {
    const A = {
      position: m.value,
      left: "0",
      top: "0"
    };
    if (!c.value)
      return A;
    const W = In(c.value, f.value), I = In(c.value, p.value);
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
    d.value == null || c.value == null || Yl(d.value, c.value, {
      middleware: s.value,
      placement: l.value,
      strategy: r.value
    }).then((A) => {
      f.value = A.x, p.value = A.y, m.value = A.strategy, v.value = A.placement, h2.value = A.middlewareData, _.value = true;
    });
  }
  function B() {
    typeof O == "function" && (O(), O = void 0);
  }
  function T() {
    if (B(), n === void 0) {
      E();
      return;
    }
    if (d.value != null && c.value != null) {
      O = n(d.value, c.value, E);
      return;
    }
  }
  function D() {
    a.value || (_.value = false);
  }
  return watch([s, l, r], E, {
    flush: "sync"
  }), watch([d, c], T, {
    flush: "sync"
  }), watch(a, D, {
    flush: "sync"
  }), getCurrentScope() && onScopeDispose(B), {
    x: shallowReadonly(f),
    y: shallowReadonly(p),
    strategy: shallowReadonly(m),
    placement: shallowReadonly(v),
    middlewareData: shallowReadonly(h2),
    isPositioned: shallowReadonly(_),
    floatingStyles: S,
    update: E
  };
}
function ql(o) {
  return o !== null;
}
function Jl(o) {
  return {
    name: "transformOrigin",
    options: o,
    fn(t) {
      var _, S, O;
      const { placement: e, rects: n, middlewareData: a } = t, l = ((_ = a.arrow) == null ? void 0 : _.centerOffset) !== 0, r = l ? 0 : o.arrowWidth, u = l ? 0 : o.arrowHeight, [d, c] = fo(e), f = { start: "0%", center: "50%", end: "100%" }[c], p = (((S = a.arrow) == null ? void 0 : S.x) ?? 0) + r / 2, m = (((O = a.arrow) == null ? void 0 : O.y) ?? 0) + u / 2;
      let v = "", h2 = "";
      return d === "bottom" ? (v = l ? f : `${p}px`, h2 = `${-u}px`) : d === "top" ? (v = l ? f : `${p}px`, h2 = `${n.floating.height + u}px`) : d === "right" ? (v = `${-u}px`, h2 = l ? f : `${m}px`) : d === "left" && (v = `${n.floating.width + u}px`, h2 = l ? f : `${m}px`), { data: { x: v, y: h2 } };
    }
  };
}
function fo(o) {
  const [t, e = "center"] = o.split("-");
  return [t, e];
}
var Ae = {
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
var Zl = {
  inheritAttrs: false
};
var vt = defineComponent({
  ...Zl,
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
    ...Ae
  }),
  setup(o, { expose: t }) {
    const e = o, n = inject(Ro), { primitiveElement: a, currentElement: s } = H(), l = ref(), r = ref(), u = ref(), { width: d, height: c } = ws(u), f = computed(
      () => e.side + (e.align !== "center" ? `-${e.align}` : "")
    ), p = computed(() => typeof e.collisionPadding == "number" ? e.collisionPadding : { top: 0, right: 0, bottom: 0, left: 0, ...e.collisionPadding }), m = computed(() => Array.isArray(e.collisionBoundary) ? e.collisionBoundary : [e.collisionBoundary]), v = computed(() => ({
      padding: p.value,
      boundary: m.value.filter(ql),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: m.value.length > 0
    })), h2 = ja(() => [
      Ll({
        mainAxis: e.sideOffset + c.value,
        alignmentAxis: e.alignOffset
      }),
      e.avoidCollisions && Fl({
        mainAxis: true,
        crossAxis: !!e.prioritizePosition,
        limiter: e.sticky === "partial" ? Kl() : void 0,
        ...v.value
      }),
      !e.prioritizePosition && e.avoidCollisions && xl({
        ...v.value
      }),
      Vl({
        ...v.value,
        apply: ({ elements: R, rects: K, availableWidth: U, availableHeight: Y }) => {
          const { width: Z, height: ne } = K.reference, oe = R.floating.style;
          Object.assign(R.floating.style, {
            maxWidth: `${U}px`,
            maxHeight: `${Y}px`
          }), oe.setProperty(
            "--radix-popper-available-width",
            `${U}px`
          ), oe.setProperty(
            "--radix-popper-available-height",
            `${Y}px`
          ), oe.setProperty(
            "--radix-popper-anchor-width",
            `${Z}px`
          ), oe.setProperty(
            "--radix-popper-anchor-height",
            `${ne}px`
          );
        }
      }),
      u.value && Gl({ element: u.value, padding: e.arrowPadding }),
      Jl({
        arrowWidth: d.value,
        arrowHeight: c.value
      }),
      e.hideWhenDetached && Rl({ strategy: "referenceHidden", ...v.value })
    ]), { floatingStyles: _, placement: S, isPositioned: O, middlewareData: E } = Xl(
      n.anchor,
      l,
      {
        strategy: "fixed",
        placement: f,
        whileElementsMounted: (...R) => Ul(...R, {
          animationFrame: e.updatePositionStrategy === "always"
        }),
        middleware: h2
      }
    ), B = computed(
      () => fo(S.value)[0]
    ), T = computed(
      () => fo(S.value)[1]
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
      placedSide: B,
      onArrowChange: (R) => {
        u.value = R;
      },
      arrowX: W,
      arrowY: I,
      shouldHideArrow: D
    }), t({
      $el: s
    }), (R, K) => {
      var U, Y, Z;
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
        createVNode(unref(M), mergeProps({
          ref_key: "primitiveElement",
          ref: a
        }, R.$attrs, {
          "as-child": e.asChild,
          as: R.as,
          "data-side": B.value,
          "data-align": T.value,
          style: {
            // if the PopperContent hasn't been placed yet (not all measurements done)
            // we prevent animations so that users's animation don't kick in too early referring wrong sides
            animation: unref(O) ? void 0 : "none",
            // hide the content if using the hide middleware and should be hidden
            opacity: (Z = unref(E).hide) != null && Z.referenceHidden ? 0 : void 0
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
var Ql = createBaseVNode("polygon", { points: "0,0 30,0 15,10" }, null, -1);
var jl = defineComponent({
  __name: "Arrow",
  props: {
    width: { default: 10 },
    height: { default: 5 },
    asChild: { type: Boolean },
    as: { default: "svg" }
  },
  setup(o) {
    const t = o, { primitiveElement: e } = H();
    return (n, a) => (openBlock(), createBlock(unref(M), mergeProps({
      ref_key: "primitiveElement",
      ref: e
    }, t, {
      width: n.width,
      height: n.height,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none"
    }), {
      default: withCtx(() => [
        renderSlot(n.$slots, "default", {}, () => [
          Ql
        ])
      ]),
      _: 3
    }, 16, ["width", "height"]));
  }
});
var ei = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
};
var ti = {
  inheritAttrs: false
};
var ht = defineComponent({
  ...ti,
  __name: "PopperArrow",
  props: {
    width: {},
    height: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = inject(ha), e = computed(
      () => t != null && t.placedSide ? ei[t == null ? void 0 : t.placedSide.value] : ""
    );
    return (n, a) => {
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
        createVNode(jl, mergeProps(n.$attrs, { style: {
          display: "block"
        } }), null, 16)
      ], 4);
    };
  }
});
var Ho = Symbol();
var Sr = defineComponent({
  __name: "TooltipRoot",
  props: {
    defaultOpen: { type: Boolean, default: false },
    open: { type: Boolean, default: void 0 },
    delayDuration: { default: 700 },
    disableHoverableContent: { type: Boolean }
  },
  emits: ["update:open"],
  setup(o, { emit: t }) {
    const e = o, n = X(e, "open", t, {
      defaultValue: e.defaultOpen,
      passive: true
    }), a = ref(false), s = computed(() => n.value ? a.value ? "delayed-open" : "instant-open" : "closed");
    return provide(Ho, {
      open: n,
      showTooltip: (l) => {
        a.value = l, n.value = true;
      },
      hideTooltip: () => n.value = false,
      delayMs: e.delayDuration,
      dataState: s,
      disableHoverableContent: computed(() => e.disableHoverableContent),
      contentId: te()
    }), (l, r) => (openBlock(), createBlock(unref(et), null, {
      default: withCtx(() => [
        renderSlot(l.$slots, "default")
      ]),
      _: 3
    }));
  }
});
var Pr = defineComponent({
  __name: "TooltipTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(o) {
    const t = o, e = inject(Ho), { primitiveElement: n, currentElement: a } = H();
    return _s(a, {
      delayEnter: e == null ? void 0 : e.delayMs,
      onHoverEnter: () => e == null ? void 0 : e.showTooltip(true),
      delayLeave: 0,
      onHoverLeave: () => e == null ? void 0 : e.hideTooltip(),
      disabled: e == null ? void 0 : e.disableHoverableContent
    }), (s, l) => (openBlock(), createBlock(unref(tt), { "as-child": "" }, {
      default: withCtx(() => {
        var r, u, d, c;
        return [
          createVNode(unref(M), {
            ref_key: "primitiveElement",
            ref: n,
            type: s.as === "button" ? "button" : void 0,
            "aria-describedby": (r = unref(e)) != null && r.open ? unref(e).contentId : void 0,
            as: s.as,
            "as-child": t.asChild,
            "data-state": (u = unref(e)) == null ? void 0 : u.dataState.value,
            "aria-expanded": ((d = unref(e)) == null ? void 0 : d.open.value) || false,
            onFocus: l[0] || (l[0] = (f) => {
              var p;
              return (p = unref(e)) == null ? void 0 : p.showTooltip(false);
            }),
            onBlur: (c = unref(e)) == null ? void 0 : c.hideTooltip
          }, {
            default: withCtx(() => [
              renderSlot(s.$slots, "default")
            ]),
            _: 3
          }, 8, ["type", "aria-describedby", "as", "as-child", "data-state", "aria-expanded", "onBlur"])
        ];
      }),
      _: 3
    }));
  }
});
var Wo = defineComponent({
  __name: "VisuallyHidden",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(o) {
    return (t, e) => (openBlock(), createBlock(unref(M), {
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
var Br = defineComponent({
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
    const e = o, n = ref(), a = inject(Ho);
    ls(n, () => {
      t("pointerDownOutside", new Event("pointerdown"));
    });
    function s(r) {
      t("escapeKeyDown", r);
    }
    const l = computed(() => {
      var c, f;
      if (e.ariaLabel)
        return e.ariaLabel;
      const r = (f = (c = useSlots()).default) == null ? void 0 : f.call(c);
      let u = "";
      function d(p) {
        typeof p.children == "string" ? u += p.children : Array.isArray(p.children) && p.children.forEach((m) => d(m));
      }
      return r == null || r.forEach((p) => d(p)), u;
    });
    return (r, u) => (openBlock(), createBlock(unref(ie), {
      present: unref(a).open.value
    }, {
      default: withCtx(() => [
        createVNode(unref(vt), mergeProps({
          ref_key: "contentElement",
          ref: n
        }, r.$attrs, {
          side: e.side,
          "side-offset": e.sideOffset,
          align: e.align,
          "align-offset": e.alignOffset,
          "avoid-collisions": e.avoidCollisions,
          "collision-boundary": e.collisionBoundary,
          "collision-padding": e.collisionPadding,
          "arrow-padding": e.arrowPadding,
          sticky: e.sticky,
          "hide-when-detached": e.hideWhenDetached,
          style: { "--radix-tooltip-content-transform-origin": `var(
        --radix-popper-transform-origin
      )`, "--radix-tooltip-content-available-width": `var(
        --radix-popper-available-width
      )`, "--radix-tooltip-content-available-height": `var(
        --radix-popper-available-height
      )`, "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)", "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)" },
          onKeydown: u[0] || (u[0] = withKeys((d) => s(d), ["esc"]))
        }), {
          default: withCtx(() => {
            var d, c;
            return [
              createVNode(unref(M), {
                "data-state": (d = unref(a)) == null ? void 0 : d.dataState.value,
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
              createVNode(unref(Wo), {
                id: (c = unref(a)) == null ? void 0 : c.contentId,
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
        }, 16, ["side", "side-offset", "align", "align-offset", "avoid-collisions", "collision-boundary", "collision-padding", "arrow-padding", "sticky", "hide-when-detached"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
});
var Tr = defineComponent({
  __name: "TooltipArrow",
  props: {
    width: { default: 10 },
    height: { default: 5 },
    asChild: { type: Boolean, default: false },
    as: {}
  },
  setup(o) {
    const t = o;
    return (e, n) => (openBlock(), createBlock(unref(ht), {
      "as-child": t.asChild,
      as: e.as,
      height: t.height,
      width: t.width
    }, null, 8, ["as-child", "as", "height", "width"]));
  }
});
var Ar = defineComponent({
  __name: "TooltipPortal",
  props: {
    to: { default: "body" },
    disabled: { type: Boolean }
  },
  setup(o) {
    const t = o;
    return (e, n) => (openBlock(), createBlock(Teleport, normalizeProps(guardReactiveProps(t)), [
      renderSlot(e.$slots, "default")
    ], 16));
  }
});
var zo = Symbol();
var Ir = defineComponent({
  __name: "HoverCardRoot",
  props: {
    defaultOpen: { type: Boolean, default: false },
    open: { type: Boolean, default: void 0 },
    openDelay: { default: 700 },
    closeDelay: { default: 300 }
  },
  emits: ["update:open"],
  setup(o, { emit: t }) {
    const e = o, n = X(e, "open", t, {
      defaultValue: e.defaultOpen,
      passive: true
    });
    return provide(zo, {
      open: n,
      showTooltip: () => {
        n.value = true;
      },
      hideTooltip: () => {
        n.value = false;
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
var Dr = defineComponent({
  __name: "HoverCardTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(o) {
    const t = o, e = inject(zo), { primitiveElement: n, currentElement: a } = H();
    async function s(r) {
      await ys(
        r,
        a.value,
        e == null ? void 0 : e.openDelay
      ) && (e == null || e.showTooltip());
    }
    async function l(r) {
      e.isHover = false, await zn(r, e == null ? void 0 : e.closeDelay) && !(e != null && e.isHover) && (e == null || e.hideTooltip());
    }
    return (r, u) => (openBlock(), createBlock(unref(tt), { "as-child": "" }, {
      default: withCtx(() => {
        var d, c;
        return [
          createVNode(unref(M), {
            ref_key: "primitiveElement",
            ref: n,
            "as-child": t.asChild,
            as: r.as,
            "aria-expanded": ((d = unref(e)) == null ? void 0 : d.open.value) || false,
            "data-state": (c = unref(e)) != null && c.open.value ? "open" : "closed",
            style: { cursor: "default" },
            onMouseover: u[0] || (u[0] = (f) => unref(e).isHover = true),
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
var Mr = defineComponent({
  __name: "HoverCardPortal",
  props: {
    to: { default: "body" },
    disabled: { type: Boolean }
  },
  setup(o) {
    const t = o;
    return (e, n) => (openBlock(), createBlock(Teleport, normalizeProps(guardReactiveProps(t)), [
      renderSlot(e.$slots, "default")
    ], 16));
  }
});
var kr = defineComponent({
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
    const t = o, e = inject(zo);
    async function n(a) {
      e.isHover = false, await zn(a, e == null ? void 0 : e.closeDelay) && !(e != null && e.isHover) && (e == null || e.hideTooltip());
    }
    return (a, s) => (openBlock(), createBlock(unref(ie), {
      present: unref(e).open.value
    }, {
      default: withCtx(() => {
        var l;
        return [
          createVNode(unref(vt), mergeProps({ ...t, ...a.$attrs }, {
            "data-state": (l = unref(e)) != null && l.open.value ? "open" : "closed",
            "data-side": t.side,
            "data-align": t.align,
            onMouseover: s[0] || (s[0] = (r) => unref(e).isHover = true),
            onMouseleave: n
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
var xr = defineComponent({
  __name: "HoverCardArrow",
  props: {
    width: {},
    height: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o;
    return (e, n) => (openBlock(), createBlock(unref(ht), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Re = Symbol();
var Rr = defineComponent({
  __name: "PopoverRoot",
  props: {
    defaultOpen: { type: Boolean, default: false },
    open: { type: Boolean, default: void 0 },
    modal: { type: Boolean, default: false }
  },
  emits: ["update:open"],
  setup(o, { emit: t }) {
    const e = o, { modal: n } = toRefs(e), a = X(e, "open", t, {
      defaultValue: e.defaultOpen,
      passive: true
    }), s = ref(), l = ref(false);
    return provide(Re, {
      contentId: te(),
      modal: n,
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
var Nr = defineComponent({
  __name: "PopoverTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(o, { expose: t }) {
    const e = o, n = inject(Re), { primitiveElement: a, currentElement: s } = H();
    return onMounted(() => {
      n.triggerElement.value = s.value;
    }), t({ $el: s }), (l, r) => {
      var u;
      return openBlock(), createBlock(resolveDynamicComponent((u = unref(n)) != null && u.hasCustomAnchor.value ? unref(M) : unref(tt)), { "as-child": "" }, {
        default: withCtx(() => {
          var d, c, f;
          return [
            createVNode(unref(M), {
              ref_key: "primitiveElement",
              ref: a,
              type: l.as === "button" ? "button" : void 0,
              "aria-haspopup": "dialog",
              "aria-expanded": (d = unref(n)) == null ? void 0 : d.open.value,
              "aria-controls": (c = unref(n)) == null ? void 0 : c.contentId,
              "data-state": (f = unref(n)) != null && f.open.value ? "open" : "closed",
              as: l.as,
              "as-child": e.asChild,
              onClick: unref(n).onOpenToggle
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
var Lr = defineComponent({
  __name: "PopoverPortal",
  props: {
    to: { default: "body" },
    disabled: { type: Boolean }
  },
  setup(o) {
    const t = o;
    return (e, n) => (openBlock(), createBlock(Teleport, normalizeProps(guardReactiveProps(t)), [
      renderSlot(e.$slots, "default")
    ], 16));
  }
});
var ga = defineComponent({
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
  setup(o, { emit: t }) {
    const e = o, n = inject(Re);
    return Eo(), (a, s) => (openBlock(), createBlock(unref(Lt), {
      "as-child": "",
      loop: "",
      trapped: a.trapFocus,
      onMountAutoFocus: s[5] || (s[5] = (l) => t("openAutoFocus", l)),
      onUnmountAutoFocus: s[6] || (s[6] = (l) => t("closeAutoFocus", l))
    }, {
      default: withCtx(() => [
        createVNode(unref(mt), {
          "as-child": "",
          "disable-outside-pointer-events": a.disableOutsidePointerEvents,
          onPointerDownOutside: s[0] || (s[0] = (l) => t("pointerDownOutside", l)),
          onInteractOutside: s[1] || (s[1] = (l) => t("interactOutside", l)),
          onEscapeKeyDown: s[2] || (s[2] = (l) => t("escapeKeyDown", l)),
          onFocusOutside: s[3] || (s[3] = (l) => t("focusOutside", l)),
          onDismiss: s[4] || (s[4] = (l) => {
            var r;
            return (r = unref(n)) == null ? void 0 : r.onOpenChange(false);
          })
        }, {
          default: withCtx(() => {
            var l, r;
            return [
              createVNode(unref(vt), mergeProps(e, {
                id: (l = unref(n)) == null ? void 0 : l.contentId,
                "data-state": (r = unref(n)) != null && r.open.value ? "open" : "closed",
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
var oi = defineComponent({
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
  setup(o, { emit: t }) {
    const e = o, n = inject(Re), a = ref(false);
    kt(true);
    const s = G(t);
    return (l, r) => {
      var u;
      return openBlock(), createBlock(ga, mergeProps({ ...e, ...unref(s) }, {
        "trap-focus": (u = unref(n)) == null ? void 0 : u.open.value,
        "disable-outside-pointer-events": "",
        onCloseAutoFocus: r[0] || (r[0] = withModifiers(
          (d) => {
            var c, f;
            t("closeAutoFocus", d), a.value || (f = (c = unref(n)) == null ? void 0 : c.triggerElement.value) == null || f.focus();
          },
          ["prevent"]
        )),
        onPointerDownOutside: r[1] || (r[1] = (d) => {
          t("pointerDownOutside", d);
          const c = d.detail.originalEvent, f = c.button === 0 && c.ctrlKey === true, p = c.button === 2 || f;
          a.value = p;
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
var ni = defineComponent({
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
  setup(o, { emit: t }) {
    const e = o, n = inject(Re), a = ref(false), s = ref(false), l = G(t);
    return (r, u) => (openBlock(), createBlock(ga, mergeProps({ ...e, ...unref(l) }, {
      "trap-focus": false,
      "disable-outside-pointer-events": false,
      onCloseAutoFocus: u[0] || (u[0] = (d) => {
        var c, f;
        t("closeAutoFocus", d), d.defaultPrevented || (a.value || (f = (c = unref(n)) == null ? void 0 : c.triggerElement.value) == null || f.focus(), d.preventDefault()), a.value = false, s.value = false;
      }),
      onInteractOutside: u[1] || (u[1] = async (d) => {
        var p, m;
        t("interactOutside", d), d.defaultPrevented || (a.value = true, d.detail.originalEvent.type === "pointerdown" && (s.value = true));
        const c = d.target;
        ((m = (p = unref(n)) == null ? void 0 : p.triggerElement.value) == null ? void 0 : m.contains(c)) && d.preventDefault(), d.detail.originalEvent.type === "focusin" && s.value && d.preventDefault();
      })
    }), {
      default: withCtx(() => [
        renderSlot(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Fr = defineComponent({
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
    ...Ae
  }),
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss", "openAutoFocus", "closeAutoFocus"],
  setup(o, { emit: t }) {
    const e = o, n = inject(Re), a = G(t);
    return (s, l) => (openBlock(), createBlock(unref(ie), {
      present: s.forceMount || unref(n).open.value
    }, {
      default: withCtx(() => {
        var r;
        return [
          (r = unref(n)) != null && r.modal.value ? (openBlock(), createBlock(oi, normalizeProps(mergeProps({ key: 0 }, { ...e, ...unref(a) })), {
            default: withCtx(() => [
              renderSlot(s.$slots, "default")
            ]),
            _: 3
          }, 16)) : (openBlock(), createBlock(ni, normalizeProps(mergeProps({ key: 1 }, { ...e, ...unref(a) })), {
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
var Kr = defineComponent({
  __name: "PopoverArrow",
  props: {
    width: {},
    height: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o;
    return (e, n) => (openBlock(), createBlock(unref(ht), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Vr = defineComponent({
  __name: "PopoverClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(o) {
    const t = o, e = inject(Re);
    return (n, a) => (openBlock(), createBlock(unref(M), {
      type: n.as === "button" ? "button" : void 0,
      as: n.as,
      "as-child": t.asChild,
      onClick: a[0] || (a[0] = (s) => {
        var l;
        return (l = unref(e)) == null ? void 0 : l.onOpenChange(false);
      })
    }, {
      default: withCtx(() => [
        renderSlot(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["type", "as", "as-child"]));
  }
});
var Hr = defineComponent({
  __name: "PopoverAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o, e = inject(Re);
    return onBeforeMount(() => {
      e.hasCustomAnchor.value = true;
    }), onUnmounted(() => {
      e.hasCustomAnchor.value = false;
    }), (n, a) => (openBlock(), createBlock(unref(tt), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Vt = defineComponent({
  __name: "MenuAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o;
    return (e, n) => (openBlock(), createBlock(unref(tt), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Uo = defineComponent({
  __name: "MenuArrow",
  props: {
    width: {},
    height: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o;
    return (e, n) => (openBlock(), createBlock(unref(ht), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Pe = Symbol();
var at = Symbol();
var Yo = defineComponent({
  __name: "MenuRoot",
  props: {
    open: { type: Boolean, default: false },
    onOpenChange: {},
    dir: { default: "ltr" },
    modal: { type: Boolean, default: true }
  },
  emits: ["update:open"],
  setup(o, { emit: t }) {
    const e = o, { modal: n, dir: a } = toRefs(e), s = X(e, "open", t), l = ref(), r = ref(false);
    return watchEffect((u) => {
      if (!Te)
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
    }), provide(Pe, {
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
      modal: n
    }), (u, d) => (openBlock(), createBlock(unref(et), null, {
      default: withCtx(() => [
        renderSlot(u.$slots, "default")
      ]),
      _: 3
    }));
  }
});
var Ht = Symbol();
var Go = defineComponent({
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
    ...Ae
  }),
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss", "openAutoFocus", "closeAutoFocus"],
  setup(o, { emit: t }) {
    const e = o, n = inject(Pe), a = inject(at), { trapFocus: s, disableOutsidePointerEvents: l, loop: r } = toRefs(e);
    Eo(), kt(l.value);
    const u = ref(""), d = ref(0), c = ref(0), f = ref(null), p = ref("right"), m = ref(0), v = ref(null), { createCollection: h2 } = ae(), { primitiveElement: _, currentElement: S } = H(), O = h2(S);
    watch(S, (I) => {
      n.onContentChange(I);
    });
    const { handleTypeaheadSearch: E } = $o(O);
    onUnmounted(() => {
      window.clearTimeout(d.value);
    });
    function B(I) {
      var K, U;
      return p.value === ((K = f.value) == null ? void 0 : K.side) && hl(I, (U = f.value) == null ? void 0 : U.area);
    }
    async function T(I) {
      t("openAutoFocus", I), setTimeout(() => {
        var R, K, U;
        (R = S.value) == null || R.focus(), a != null && a.isUsingKeyboardRef.value && !I.defaultPrevented && ((U = (K = O.value) == null ? void 0 : K[0]) == null || U.focus(), I.preventDefault());
      }, 0);
    }
    function D(I) {
      const K = I.target.closest("[data-radix-menu-content]") === I.currentTarget, U = I.ctrlKey || I.altKey || I.metaKey, Y = I.key.length === 1, Z = je(
        I,
        document.activeElement,
        S.value,
        {
          loop: r.value,
          arrowKeyOptions: "vertical",
          dir: a == null ? void 0 : a.dir.value,
          focus: true
        }
      );
      if (Z)
        return Z == null ? void 0 : Z.focus();
      if (I.code === "Space" || (K && (I.key === "Tab" && I.preventDefault(), !U && Y && E(I.key)), I.target !== S.value) || !pl.includes(I.key))
        return;
      I.preventDefault();
      const ne = O.value;
      aa.includes(I.key) && ne.reverse(), lo(ne);
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
        p.value = Y, m.value = I.clientX;
      }
    }
    return provide(Ht, {
      onItemEnter: (I) => {
        B(I) && I.preventDefault();
      },
      onItemLeave: (I) => {
        var R;
        B(I) || ((R = S.value) == null || R.focus(), v.value = null);
      },
      onTriggerLeave: (I) => {
        B(I) && I.preventDefault();
      },
      searchRef: u,
      pointerGraceTimerRef: c,
      onPointerGraceIntentChange: (I) => {
        f.value = I;
      }
    }), (I, R) => (openBlock(), createBlock(unref(Lt), {
      "as-child": "",
      trapped: unref(s),
      onMountAutoFocus: T,
      onUnmountAutoFocus: R[5] || (R[5] = (K) => t("closeAutoFocus", K))
    }, {
      default: withCtx(() => [
        createVNode(unref(mt), {
          "as-child": "",
          "disable-outside-pointer-events": unref(l),
          onEscapeKeyDown: R[0] || (R[0] = (K) => t("escapeKeyDown", K)),
          onPointerDownOutside: R[1] || (R[1] = (K) => t("pointerDownOutside", K)),
          onFocusOutside: R[2] || (R[2] = (K) => t("focusOutside", K)),
          onInteractOutside: R[3] || (R[3] = (K) => t("interactOutside", K)),
          onDismiss: R[4] || (R[4] = (K) => t("dismiss"))
        }, {
          default: withCtx(() => [
            createVNode(unref(vt), {
              ref_key: "primitiveElement",
              ref: _,
              role: "menu",
              as: I.as,
              "as-child": I.asChild,
              "aria-orientation": "vertical",
              "data-radix-menu-content": "",
              "data-state": unref(Do)(unref(n).open.value),
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
        }, 8, ["disable-outside-pointer-events"])
      ]),
      _: 3
    }, 8, ["trapped"]));
  }
});
var ya = defineComponent({
  __name: "MenuItemImpl",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(o, { expose: t }) {
    const e = o, { primitiveElement: n, currentElement: a } = H(), s = inject(Ht), l = ref(false);
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
    }), (d, c) => (openBlock(), createBlock(unref(M), {
      ref_key: "primitiveElement",
      ref: n,
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
      onFocus: c[0] || (c[0] = async (f) => {
        await nextTick(), !(f.defaultPrevented || d.disabled) && (l.value = true);
      }),
      onBlur: c[1] || (c[1] = async (f) => {
        await nextTick(), !f.defaultPrevented && (l.value = false);
      })
    }, {
      default: withCtx(() => [
        renderSlot(d.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "aria-disabled", "data-disabled", "disabled", "data-highlighted"]));
  }
});
var gt = defineComponent({
  __name: "MenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(o, { emit: t }) {
    const e = o, { primitiveElement: n, currentElement: a } = H(), s = inject(at), l = inject(Ht), r = ref(false);
    async function u() {
      const d = a.value;
      if (!e.disabled && d) {
        const c = new CustomEvent(dl, {
          bubbles: true,
          cancelable: true
        });
        t("select", c), await nextTick(), c.defaultPrevented ? r.value = false : s.onClose();
      }
    }
    return (d, c) => (openBlock(), createBlock(ya, mergeProps(e, {
      ref_key: "primitiveElement",
      ref: n,
      onClick: u,
      onPointerdown: c[0] || (c[0] = () => {
        r.value = true;
      }),
      onPointerup: c[1] || (c[1] = async (f) => {
        var p;
        await nextTick(), !f.defaultPrevented && (r.value || (p = f.currentTarget) == null || p.click());
      }),
      onKeydown: c[2] || (c[2] = async (f) => {
        const p = unref(l).searchRef.value !== "";
        d.disabled || p && f.key === " " || unref(so).includes(f.key) && (f.currentTarget.click(), f.preventDefault());
      })
    }), {
      default: withCtx(() => [
        renderSlot(d.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Xo = Symbol();
var qo = defineComponent({
  __name: "MenuItemIndicator",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(o) {
    const t = inject(Xo, {
      checked: ref(false)
    });
    return (e, n) => {
      var a, s;
      return openBlock(), createBlock(unref(ie), {
        present: unref(Pt)((a = unref(t)) == null ? void 0 : a.checked.value) || ((s = unref(t)) == null ? void 0 : s.checked.value) === true
      }, {
        default: withCtx(() => [
          createVNode(unref(M), {
            as: e.as,
            "as-child": e.asChild,
            "data-state": unref(Mo)(unref(t).checked.value)
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
var Jo = defineComponent({
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
    const e = o, n = X(e, "checked", t);
    return provide(Xo, {
      checked: n
    }), (a, s) => (openBlock(), createBlock(gt, mergeProps({ role: "menuitemcheckbox" }, e, {
      "aria-checked": unref(Pt)(unref(n)) ? "mixed" : unref(n),
      "data-state": unref(Mo)(unref(n)),
      onSelect: s[0] || (s[0] = async (l) => {
        t("select", l), unref(Pt)(unref(n)) ? n.value = true : n.value = !unref(n);
      })
    }), {
      default: withCtx(() => [
        renderSlot(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-checked", "data-state"]));
  }
});
var ai = defineComponent({
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
    const e = o, n = inject(Pe), a = G(t);
    return (s, l) => {
      var r, u;
      return openBlock(), createBlock(Go, mergeProps({ ...e, ...unref(a) }, {
        "trap-focus": (r = unref(n)) == null ? void 0 : r.open.value,
        "disable-outside-pointer-events": (u = unref(n)) == null ? void 0 : u.open.value,
        "disable-outside-scroll": true,
        onDismiss: l[0] || (l[0] = (d) => {
          var c;
          return (c = unref(n)) == null ? void 0 : c.onOpenChange(false);
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
var si = defineComponent({
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
    const e = o, n = inject(Pe), a = G(t);
    return (s, l) => (openBlock(), createBlock(Go, mergeProps({ ...e, ...unref(a) }, {
      "trap-focus": false,
      "disable-outside-pointer-events": false,
      "disable-outside-scroll": false,
      onDismiss: l[0] || (l[0] = (r) => {
        var u;
        return (u = unref(n)) == null ? void 0 : u.onOpenChange(false);
      })
    }), {
      default: withCtx(() => [
        renderSlot(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Zo = defineComponent({
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
    const e = o, n = inject(Pe), a = inject(at), s = G(t);
    return (l, r) => (openBlock(), createBlock(unref(ie), {
      present: unref(n).open.value
    }, {
      default: withCtx(() => {
        var u;
        return [
          (u = unref(a)) != null && u.modal.value ? (openBlock(), createBlock(ai, normalizeProps(mergeProps({ key: 0 }, { ...l.$attrs, ...e, ...unref(s) })), {
            default: withCtx(() => [
              renderSlot(l.$slots, "default")
            ]),
            _: 3
          }, 16)) : (openBlock(), createBlock(si, normalizeProps(mergeProps({ key: 1 }, { ...l.$attrs, ...e, ...unref(s) })), {
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
var Wt = defineComponent({
  __name: "MenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o;
    return (e, n) => (openBlock(), createBlock(unref(M), mergeProps({ role: "group" }, t), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Qo = defineComponent({
  __name: "MenuLabel",
  props: {
    asChild: { type: Boolean },
    as: { default: "label" }
  },
  setup(o) {
    const t = o;
    return (e, n) => (openBlock(), createBlock(unref(M), mergeProps({ role: "group" }, t), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var jo = defineComponent({
  __name: "MenuPortal",
  props: {
    to: { default: "body" },
    disabled: { type: Boolean }
  },
  setup(o) {
    const t = o;
    return (e, n) => (openBlock(), createBlock(Teleport, normalizeProps(guardReactiveProps(t)), [
      renderSlot(e.$slots, "default")
    ], 16));
  }
});
var _a = Symbol();
var en = defineComponent({
  __name: "MenuRadioGroup",
  props: {
    modelValue: { default: "" },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(o, { emit: t }) {
    const e = o, n = X(e, "modelValue", t);
    return provide(_a, {
      modelValue: n,
      onValueChange: (a) => {
        n.value = a;
      }
    }), (a, s) => (openBlock(), createBlock(Wt, normalizeProps(guardReactiveProps(e)), {
      default: withCtx(() => [
        renderSlot(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var tn = defineComponent({
  __name: "MenuRadioItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(o, { emit: t }) {
    const e = o, { value: n } = toRefs(e), a = inject(_a), s = computed(
      () => (a == null ? void 0 : a.modelValue.value) === (n == null ? void 0 : n.value)
    );
    return provide(Xo, {
      checked: s
    }), (l, r) => (openBlock(), createBlock(gt, mergeProps({ role: "menuitemradio" }, e, {
      "aria-checked": s.value,
      "data-state": unref(Mo)(s.value),
      onSelect: r[0] || (r[0] = async (u) => {
        var d;
        t("select", u), (d = unref(a)) == null || d.onValueChange(unref(n));
      })
    }), {
      default: withCtx(() => [
        renderSlot(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-checked", "data-state"]));
  }
});
var on = defineComponent({
  __name: "MenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o;
    return (e, n) => (openBlock(), createBlock(unref(M), mergeProps(t, {
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
var nn = Symbol();
var an = defineComponent({
  __name: "MenuSub",
  props: {
    open: { type: Boolean }
  },
  emits: ["update:open"],
  setup(o, { emit: t }) {
    const n = X(o, "open", t, {
      defaultValue: false,
      passive: true
    }), a = inject(Pe), s = ref(), l = ref();
    return watchEffect((r) => {
      (a == null ? void 0 : a.open.value) === false && (n.value = false), r(() => n.value = false);
    }), provide(Pe, {
      open: n,
      onOpenChange: (r) => {
        n.value = r;
      },
      content: l,
      onContentChange: (r) => {
        l.value = r;
      }
    }), provide(nn, {
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
var sn = defineComponent({
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
    ...Ae
  }),
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss", "openAutoFocus", "closeAutoFocus"],
  setup(o, { emit: t }) {
    const e = o, n = G(t), a = inject(Pe), s = inject(at), l = inject(nn), { primitiveElement: r, currentElement: u } = H();
    return (d, c) => (openBlock(), createBlock(unref(ie), {
      present: unref(a).open.value
    }, {
      default: withCtx(() => [
        createVNode(Go, mergeProps({ ...e, ...unref(n) }, {
          id: unref(l).contentId,
          ref_key: "primitiveElement",
          ref: r,
          "aria-labelledby": unref(l).triggerId,
          align: "start",
          side: unref(s).dir.value === "rtl" ? "left" : "right",
          "disable-outside-pointer-events": false,
          "disable-outside-scroll": false,
          "trap-focus": false,
          onOpenAutoFocus: c[0] || (c[0] = (f) => {
            var p;
            unref(s).isUsingKeyboardRef.value && ((p = unref(u)) == null || p.focus());
          }),
          onCloseAutoFocus: c[1] || (c[1] = withModifiers(() => {
          }, ["prevent"])),
          onFocusOutside: c[2] || (c[2] = async (f) => {
            f.defaultPrevented || f.target !== unref(l).trigger.value && unref(a).onOpenChange(false);
          }),
          onEscapeKeyDown: c[3] || (c[3] = (f) => {
            var p;
            (p = unref(s)) == null || p.onClose(), f.preventDefault();
          }),
          onKeydown: c[4] || (c[4] = (f) => {
            var v, h2;
            const p = (v = f.currentTarget) == null ? void 0 : v.contains(f.target), m = unref(ml)[unref(s).dir.value].includes(f.key);
            p && m && (unref(a).onOpenChange(false), (h2 = unref(l).trigger.value) == null || h2.focus(), f.preventDefault());
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
var ln = defineComponent({
  __name: "MenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o, e = inject(Pe), n = inject(at), a = inject(nn), s = inject(Ht), l = ref(null), r = computed(
      () => s == null ? void 0 : s.pointerGraceTimerRef.value
    );
    function u() {
      l.value && window.clearTimeout(l.value), l.value = null;
    }
    onUnmounted(() => {
      u();
    });
    function d(p) {
      it(p) && (s.onItemEnter(p), e.onOpenChange(true), !p.defaultPrevented && !t.disabled && !(e != null && e.open.value) && !l.value && (s.onPointerGraceIntentChange(null), l.value = window.setTimeout(() => {
        u();
      }, 100)));
    }
    function c(p) {
      var v, h2;
      if (!it(p))
        return;
      u();
      const m = (v = e.content.value) == null ? void 0 : v.getBoundingClientRect();
      if (m) {
        const _ = (h2 = e.content.value) == null ? void 0 : h2.dataset.side, S = _ === "right", O = S ? -5 : 5, E = m[S ? "left" : "right"], B = m[S ? "right" : "left"];
        s.onPointerGraceIntentChange({
          area: [
            // Apply a bleed on clientX to ensure that our exit point is
            // consistently within polygon bounds
            { x: p.clientX + O, y: p.clientY },
            { x: E, y: m.top },
            { x: B, y: m.top },
            { x: B, y: m.bottom },
            { x: E, y: m.bottom }
          ],
          side: _
        }), window.clearTimeout(r.value), s.pointerGraceTimerRef.value = window.setTimeout(
          () => s.onPointerGraceIntentChange(null),
          300
        );
      } else {
        if (s.onTriggerLeave(p), p.defaultPrevented)
          return;
        s.onPointerGraceIntentChange(null);
      }
    }
    async function f(p) {
      var v;
      const m = s.searchRef.value !== "";
      t.disabled || m && p.key === " " || fl[n.dir.value].includes(p.key) && (e.onOpenChange(true), await nextTick(), (v = e.content.value) == null || v.focus(), p.preventDefault());
    }
    return (p, m) => (openBlock(), createBlock(Vt, { "as-child": "" }, {
      default: withCtx(() => {
        var v;
        return [
          createVNode(ya, {
            id: unref(a).triggerId,
            ref: (h2) => {
              var _;
              (_ = unref(a)) == null || _.onTriggerChange(h2 == null ? void 0 : h2.el);
            },
            "aria-haspopup": "menu",
            "aria-expanded": unref(e).open.value,
            "aria-controls": (v = unref(a)) == null ? void 0 : v.contentId,
            "data-state": unref(Do)(unref(e).open.value),
            onClick: m[0] || (m[0] = async (h2) => {
              t.disabled || h2.defaultPrevented || (h2.currentTarget.focus(), unref(e).open.value || unref(e).onOpenChange(true));
            }),
            onPointermove: d,
            onPointerleave: c,
            onKeydown: f
          }, {
            default: withCtx(() => [
              renderSlot(p.$slots, "default")
            ]),
            _: 3
          }, 8, ["id", "aria-expanded", "aria-controls", "data-state"])
        ];
      }),
      _: 3
    }));
  }
});
var rn = Symbol();
var Wr = defineComponent({
  __name: "DropdownMenuRoot",
  props: {
    open: { type: Boolean, default: void 0 },
    defaultOpen: { type: Boolean },
    dir: { default: "ltr" },
    modal: { type: Boolean, default: true }
  },
  emits: ["update:open"],
  setup(o, { emit: t }) {
    const e = o, n = X(e, "open", t, {
      defaultValue: e.defaultOpen,
      passive: true
    }), a = ref(), { modal: s, dir: l } = toRefs(e);
    return provide(rn, {
      open: n,
      onOpenChange: (r) => {
        n.value = r;
      },
      onOpenToggle: () => {
        n.value = !n.value;
      },
      triggerId: te(),
      triggerElement: a,
      contentId: te(),
      modal: s,
      dir: l
    }), (r, u) => (openBlock(), createBlock(unref(Yo), {
      open: unref(n),
      "onUpdate:open": u[0] || (u[0] = (d) => isRef(n) ? n.value = d : null),
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
var zr = defineComponent({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(o) {
    const t = o, e = inject(rn), { primitiveElement: n, currentElement: a } = H();
    return onMounted(() => {
      e.triggerElement = a;
    }), (s, l) => (openBlock(), createBlock(unref(Vt), { "as-child": "" }, {
      default: withCtx(() => {
        var r, u, d, c, f;
        return [
          createVNode(unref(M), {
            id: (r = unref(e)) == null ? void 0 : r.triggerId,
            ref_key: "primitiveElement",
            ref: n,
            type: s.as === "button" ? "button" : void 0,
            "as-child": t.asChild,
            as: s.as,
            "aria-haspopup": "menu",
            "aria-expanded": (u = unref(e)) == null ? void 0 : u.open.value,
            "aria-controls": (d = unref(e)) != null && d.open.value ? (c = unref(e)) == null ? void 0 : c.contentId : void 0,
            "data-disabled": s.disabled ? "" : void 0,
            disabled: s.disabled,
            "data-state": (f = unref(e)) != null && f.open.value ? "open" : "closed",
            onPointerdown: l[0] || (l[0] = (p) => {
              var m, v;
              !s.disabled && p.button === 0 && p.ctrlKey === false && ((m = unref(e)) == null || m.onOpenToggle(), (v = unref(e)) != null && v.open.value && p.preventDefault());
            }),
            onKeydown: l[1] || (l[1] = withKeys(
              (p) => {
                var m, v;
                s.disabled || (["Enter", " "].includes(p.key) && ((m = unref(e)) == null || m.onOpenToggle()), p.key === "ArrowDown" && ((v = unref(e)) == null || v.onOpenChange(true)), ["Enter", " ", "ArrowDown"].includes(p.key) && p.preventDefault());
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
var Ur = defineComponent({
  __name: "DropdownMenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean }
  },
  setup(o) {
    const t = o;
    return (e, n) => (openBlock(), createBlock(unref(jo), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Yr = defineComponent({
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
    ...Ae
  }),
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss", "openAutoFocus", "closeAutoFocus"],
  setup(o, { emit: t }) {
    const e = o, n = inject(rn), a = ref(false), s = G(t);
    function l(r) {
      t("closeAutoFocus", r), !r.defaultPrevented && (a.value || setTimeout(() => {
        var u;
        (u = n == null ? void 0 : n.triggerElement.value) == null || u.focus();
      }, 0), a.value = false, r.preventDefault());
    }
    return (r, u) => {
      var d, c;
      return openBlock(), createBlock(unref(Zo), mergeProps({ ...e, ...unref(s) }, {
        id: (d = unref(n)) == null ? void 0 : d.contentId,
        "aria-labelledby": (c = unref(n)) == null ? void 0 : c.triggerId,
        style: {
          "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
          "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
          "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
        },
        onCloseAutoFocus: l,
        onInteractOutside: u[0] || (u[0] = (f) => {
          var h2;
          if (t("interactOutside", f), f.defaultPrevented)
            return;
          const p = f.detail.originalEvent, m = p.button === 0 && p.ctrlKey === true, v = p.button === 2 || m;
          (!((h2 = unref(n)) != null && h2.modal.value) || v) && (a.value = true);
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
var Gr = defineComponent({
  __name: "DropdownMenuArrow",
  props: {
    width: { default: 10 },
    height: { default: 5 },
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o;
    return (e, n) => (openBlock(), createBlock(unref(Uo), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Xr = defineComponent({
  __name: "DropdownMenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(o, { emit: t }) {
    const e = o, n = G(t);
    return (a, s) => (openBlock(), createBlock(unref(gt), normalizeProps(guardReactiveProps({ ...e, ...unref(n) })), {
      default: withCtx(() => [
        renderSlot(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var qr = defineComponent({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o;
    return (e, n) => (openBlock(), createBlock(unref(Wt), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Jr = defineComponent({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o;
    return (e, n) => (openBlock(), createBlock(unref(on), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Zr = defineComponent({
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
    const e = o, n = G(t);
    return (a, s) => (openBlock(), createBlock(unref(Jo), normalizeProps(guardReactiveProps({ ...e, ...unref(n) })), {
      default: withCtx(() => [
        renderSlot(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Qr = defineComponent({
  __name: "DropdownMenuItemIndicator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o;
    return (e, n) => (openBlock(), createBlock(unref(qo), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var jr = defineComponent({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o;
    return (e, n) => (openBlock(), createBlock(unref(Qo), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var eu = defineComponent({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(o, { emit: t }) {
    const e = o, n = G(t);
    return (a, s) => (openBlock(), createBlock(unref(en), normalizeProps(guardReactiveProps({ ...e, ...unref(n) })), {
      default: withCtx(() => [
        renderSlot(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var tu = defineComponent({
  __name: "DropdownMenuRadioItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(o, { emit: t }) {
    const e = o;
    return (n, a) => (openBlock(), createBlock(unref(tn), normalizeProps(guardReactiveProps({ ...e, ...t })), {
      default: withCtx(() => [
        renderSlot(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var ou = defineComponent({
  __name: "DropdownMenuSub",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean }
  },
  emits: ["update:open"],
  setup(o, { emit: t }) {
    const e = o, n = X(e, "open", t, {
      passive: true,
      defaultValue: e.defaultOpen ?? false
    });
    return (a, s) => (openBlock(), createBlock(unref(an), {
      open: unref(n),
      "onUpdate:open": s[0] || (s[0] = (l) => isRef(n) ? n.value = l : null)
    }, {
      default: withCtx(() => [
        renderSlot(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["open"]));
  }
});
var nu = defineComponent({
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
    ...Ae
  }),
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss", "openAutoFocus", "closeAutoFocus"],
  setup(o, { emit: t }) {
    const e = o;
    return (n, a) => (openBlock(), createBlock(unref(sn), mergeProps({ ...e, ...t }, { style: {
      "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
      "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
      "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
    } }), {
      default: withCtx(() => [
        renderSlot(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["style"]));
  }
});
var au = defineComponent({
  __name: "DropdownMenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o;
    return (e, n) => (openBlock(), createBlock(unref(ln), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var un = Symbol();
var su = defineComponent({
  __name: "ContextMenuRoot",
  props: {
    dir: { default: "ltr" },
    modal: { type: Boolean, default: true }
  },
  emits: ["update:open"],
  setup(o, { emit: t }) {
    const e = o, { dir: n, modal: a } = toRefs(e), s = ref(false);
    return provide(un, {
      open: s,
      onOpenChange: (l) => {
        s.value = l, t("update:open", l);
      },
      dir: n,
      modal: a
    }), (l, r) => (openBlock(), createBlock(unref(Yo), {
      open: s.value,
      "onUpdate:open": r[0] || (r[0] = (u) => s.value = u),
      dir: unref(n),
      modal: unref(a)
    }, {
      default: withCtx(() => [
        renderSlot(l.$slots, "default")
      ]),
      _: 3
    }, 8, ["open", "dir", "modal"]));
  }
});
function Dn(o) {
  return o.pointerType !== "mouse";
}
var li = {
  inheritAttrs: false
};
var lu = defineComponent({
  ...li,
  __name: "ContextMenuTrigger",
  props: {
    disabled: { type: Boolean, default: false },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(o) {
    const t = o, { disabled: e } = toRefs(t), n = inject(un), a = ref({ x: 0, y: 0 }), s = computed(() => ({
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
    function u(p) {
      a.value = { x: p.clientX, y: p.clientY }, n == null || n.onOpenChange(true);
    }
    async function d(p) {
      e.value || (await nextTick(), p.defaultPrevented || (r(), u(p), p.preventDefault()));
    }
    async function c(p) {
      e.value || (await nextTick(), Dn(p) && !p.defaultPrevented && (r(), l.value = window.setTimeout(() => u(p), 700)));
    }
    async function f(p) {
      e.value || (await nextTick(), Dn(p) && !p.defaultPrevented && r());
    }
    return (p, m) => {
      var v;
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(unref(Vt), {
          as: "div",
          element: s.value
        }, null, 8, ["element"]),
        createVNode(unref(M), mergeProps({
          as: p.as,
          "as-child": p.asChild,
          "data-state": (v = unref(n)) != null && v.open.value ? "open" : "closed",
          "data-disabled": unref(e) ? "" : void 0,
          style: {
            WebkitTouchCallout: "none"
          }
        }, p.$attrs, {
          onContextmenu: d,
          onPointerdown: c,
          onPointermove: f,
          onPointercancel: f,
          onPointerup: f
        }), {
          default: withCtx(() => [
            renderSlot(p.$slots, "default")
          ]),
          _: 3
        }, 16, ["as", "as-child", "data-state", "data-disabled"])
      ], 64);
    };
  }
});
var iu = defineComponent({
  __name: "ContextMenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean }
  },
  setup(o) {
    const t = o;
    return (e, n) => (openBlock(), createBlock(unref(jo), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var ru = defineComponent({
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
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss", "openAutoFocus", "closeAutoFocus"],
  setup(o, { emit: t }) {
    const e = o, n = inject(un), a = ref(false);
    return (s, l) => (openBlock(), createBlock(unref(Zo), mergeProps(e, {
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
        t("interactOutside", r), !r.defaultPrevented && !((u = unref(n)) != null && u.modal.value) && (a.value = true);
      })
    }), {
      default: withCtx(() => [
        renderSlot(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["style"]));
  }
});
var uu = defineComponent({
  __name: "ContextMenuArrow",
  props: {
    width: {},
    height: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o;
    return (e, n) => (openBlock(), createBlock(unref(Uo), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var du = defineComponent({
  __name: "ContextMenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(o, { emit: t }) {
    const e = o, n = G(t);
    return (a, s) => (openBlock(), createBlock(unref(gt), normalizeProps(guardReactiveProps({ ...e, ...unref(n) })), {
      default: withCtx(() => [
        renderSlot(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var cu = defineComponent({
  __name: "ContextMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o;
    return (e, n) => (openBlock(), createBlock(unref(Wt), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var pu = defineComponent({
  __name: "ContextMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o;
    return (e, n) => (openBlock(), createBlock(unref(on), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var fu = defineComponent({
  __name: "ContextMenuCheckboxItem",
  props: {
    checked: { type: [Boolean, String] },
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select", "update:checked"],
  setup(o, { emit: t }) {
    const e = o, n = G(t);
    return (a, s) => (openBlock(), createBlock(unref(Jo), normalizeProps(guardReactiveProps({ ...e, ...unref(n) })), {
      default: withCtx(() => [
        renderSlot(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var mu = defineComponent({
  __name: "ContextMenuItemIndicator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o;
    return (e, n) => (openBlock(), createBlock(unref(qo), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var vu = defineComponent({
  __name: "ContextMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o;
    return (e, n) => (openBlock(), createBlock(unref(Qo), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var hu = defineComponent({
  __name: "ContextMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(o, { emit: t }) {
    const e = o, n = G(t);
    return (a, s) => (openBlock(), createBlock(unref(en), normalizeProps(guardReactiveProps({ ...e, ...unref(n) })), {
      default: withCtx(() => [
        renderSlot(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var gu = defineComponent({
  __name: "ContextMenuRadioItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(o, { emit: t }) {
    const e = o, n = G(t);
    return (a, s) => (openBlock(), createBlock(unref(tn), normalizeProps(guardReactiveProps({ ...e, ...unref(n) })), {
      default: withCtx(() => [
        renderSlot(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var yu = defineComponent({
  __name: "ContextMenuSub",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean }
  },
  emits: ["update:open"],
  setup(o, { emit: t }) {
    const e = o, n = X(e, "open", t, {
      passive: true,
      defaultValue: e.defaultOpen
    });
    return (a, s) => (openBlock(), createBlock(unref(an), {
      open: unref(n),
      "onUpdate:open": s[0] || (s[0] = (l) => isRef(n) ? n.value = l : null)
    }, {
      default: withCtx(() => [
        renderSlot(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["open"]));
  }
});
var _u = defineComponent({
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
    ...Ae
  }),
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss", "openAutoFocus", "closeAutoFocus"],
  setup(o, { emit: t }) {
    const e = o, n = G(t);
    return (a, s) => (openBlock(), createBlock(unref(sn), mergeProps({ ...e, ...unref(n) }, { style: {
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
var bu = defineComponent({
  __name: "ContextMenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o;
    return (e, n) => (openBlock(), createBlock(unref(ln), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var ii = ["default-value"];
var ri = defineComponent({
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
  setup(o) {
    const t = o, { value: e } = toRefs(t);
    vs(e);
    const n = ref();
    return (a, s) => (openBlock(), createBlock(unref(Wo), { "as-child": "" }, {
      default: withCtx(() => [
        withDirectives(createBaseVNode("select", mergeProps({
          ref_key: "selectElement",
          ref: n
        }, t, {
          "onUpdate:modelValue": s[0] || (s[0] = (l) => isRef(e) ? e.value = l : null),
          "default-value": unref(e)
        }), [
          renderSlot(a.$slots, "default")
        ], 16, ii), [
          [vModelSelect, unref(e)]
        ])
      ]),
      _: 3
    }));
  }
});
var ui = {
  key: 0,
  value: ""
};
var Ne = Symbol();
var ba = Symbol();
var wu = defineComponent({
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
  setup(o, { emit: t }) {
    const e = o, n = X(e, "modelValue", t, {
      defaultValue: e.defaultValue,
      passive: true
    }), a = X(e, "open", t, {
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
      modelValue: n,
      onValueChange: (v) => {
        n.value = v;
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
    const f = computed(
      () => s.value ? !!s.value.closest("form") : true
    ), p = ref(/* @__PURE__ */ new Set()), m = computed(() => Array.from(p.value).map((v) => {
      var h2;
      return (h2 = v.props) == null ? void 0 : h2.value;
    }).join(";"));
    return provide(ba, {
      onNativeOptionAdd: (v) => {
        p.value.add(v);
      },
      onNativeOptionRemove: (v) => {
        p.value.delete(v);
      }
    }), (v, h2) => (openBlock(), createBlock(unref(et), null, {
      default: withCtx(() => [
        renderSlot(v.$slots, "default"),
        f.value ? (openBlock(), createBlock(ri, {
          key: m.value,
          "aria-hidden": "",
          "tab-index": "-1",
          required: unref(u),
          name: v.name,
          autocomplete: v.autocomplete,
          disabled: unref(d),
          value: unref(n),
          onChange: h2[0] || (h2[0] = (_) => n.value = _.target.value)
        }, {
          default: withCtx(() => [
            unref(n) === void 0 ? (openBlock(), createElementBlock("option", ui)) : createCommentVNode("", true),
            (openBlock(true), createElementBlock(Fragment, null, renderList(Array.from(p.value), (_) => (openBlock(), createBlock(resolveDynamicComponent(_), mergeProps(_.props, {
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
var di = [" ", "Enter", "ArrowUp", "ArrowDown"];
var ci = [" ", "Enter"];
var _e = 10;
function wa(o) {
  return o === "" || o === void 0;
}
var Cu = defineComponent({
  __name: "SelectTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(o) {
    const t = o, e = inject(Ne), n = computed(() => {
      var p;
      return ((p = e == null ? void 0 : e.disabled) == null ? void 0 : p.value) || t.disabled;
    }), { primitiveElement: a, currentElement: s } = H();
    onMounted(() => {
      e.triggerElement = s;
    });
    const { injectCollection: l } = ae(), r = l(), { search: u, handleTypeaheadSearch: d, resetTypeahead: c } = $o(r);
    function f() {
      n.value || (e.onOpenChange(true), c());
    }
    return (p, m) => (openBlock(), createBlock(unref(tt), { "as-child": "" }, {
      default: withCtx(() => {
        var v, h2, _, S, O, E, B, T;
        return [
          createVNode(unref(M), {
            ref_key: "primitiveElement",
            ref: a,
            role: "combobox",
            type: p.as === "button" ? "button" : void 0,
            "aria-controls": (v = unref(e)) == null ? void 0 : v.contentId,
            "aria-expanded": ((h2 = unref(e)) == null ? void 0 : h2.open.value) || false,
            "aria-required": (S = (_ = unref(e)) == null ? void 0 : _.required) == null ? void 0 : S.value,
            "aria-autocomplete": "none",
            dir: (O = unref(e)) == null ? void 0 : O.dir.value,
            "data-state": (E = unref(e)) != null && E.open.value ? "open" : "closed",
            "data-disabled": n.value ? "" : void 0,
            "data-placeholder": unref(wa)((T = (B = unref(e)) == null ? void 0 : B.modelValue) == null ? void 0 : T.value) ? "" : void 0,
            "as-child": p.asChild,
            as: p.as,
            onClick: m[0] || (m[0] = (D) => {
              var A;
              (A = D == null ? void 0 : D.currentTarget) == null || A.focus();
            }),
            onPointerdown: m[1] || (m[1] = (D) => {
              const A = D.target;
              A.hasPointerCapture(D.pointerId) && A.releasePointerCapture(D.pointerId), D.button === 0 && D.ctrlKey === false && (f(), unref(e).triggerPointerDownPosRef.value = {
                x: Math.round(D.pageX),
                y: Math.round(D.pageY)
              }, D.preventDefault());
            }),
            onPointerup: m[2] || (m[2] = withModifiers(() => {
            }, ["prevent"])),
            onKeydown: m[3] || (m[3] = (D) => {
              const A = unref(u) !== "";
              !(D.ctrlKey || D.altKey || D.metaKey) && D.key.length === 1 && A && D.key === " " || (unref(d)(D.key), unref(di).includes(D.key) && (f(), D.preventDefault()));
            })
          }, {
            default: withCtx(() => [
              renderSlot(p.$slots, "default")
            ]),
            _: 3
          }, 8, ["type", "aria-controls", "aria-expanded", "aria-required", "dir", "data-state", "data-disabled", "data-placeholder", "as-child", "as"])
        ];
      }),
      _: 3
    }));
  }
});
var Eu = defineComponent({
  __name: "SelectPortal",
  props: {
    to: { default: "body" },
    disabled: { type: Boolean }
  },
  setup(o) {
    const t = o;
    return (e, n) => (openBlock(), createBlock(Teleport, normalizeProps(guardReactiveProps(t)), [
      renderSlot(e.$slots, "default")
    ], 16));
  }
});
var zt = Symbol();
var Ou = defineComponent({
  __name: "SelectViewport",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o, e = inject(Ie), n = e.position === "item-aligned" ? inject(zt) : void 0, { primitiveElement: a, currentElement: s } = H();
    onMounted(() => {
      e.onViewportChange(s.value);
    });
    const l = ref(0);
    function r(u) {
      const d = u.currentTarget, { shouldExpandOnScrollRef: c, contentWrapper: f } = n;
      if (c != null && c.value && (f != null && f.value)) {
        const p = Math.abs(l.value - d.scrollTop);
        if (p > 0) {
          const m = window.innerHeight - _e * 2, v = Number.parseFloat(
            f.value.style.minHeight
          ), h2 = Number.parseFloat(f.value.style.height), _ = Math.max(v, h2);
          if (_ < m) {
            const S = _ + p, O = Math.min(m, S), E = S - O;
            f.value.style.height = `${O}px`, f.value.style.bottom === "0px" && (d.scrollTop = E > 0 ? E : 0, f.value.style.justifyContent = "flex-end");
          }
        }
      }
      l.value = d.scrollTop;
    }
    return (u, d) => (openBlock(), createElementBlock(Fragment, null, [
      createVNode(unref(M), { as: "style" }, {
        default: withCtx(() => [
          createTextVNode(" /* Hide scrollbars cross-browser and enable momentum scroll for touch devices */ [data-radix-select-viewport] { scrollbar-width:none; -ms-overflow-style: none; -webkit-overflow-scrolling: touch; } [data-radix-select-viewport]::-webkit-scrollbar { display: none; } ")
        ]),
        _: 1
      }),
      createVNode(unref(M), mergeProps({
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
var pi = {
  inheritAttrs: false
};
var fi = defineComponent({
  ...pi,
  __name: "SelectItemAlignedPosition",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["placed"],
  setup(o, { emit: t }) {
    const e = o, { injectCollection: n } = ae(), a = inject(Ne), s = inject(Ie), l = n(), r = ref(false), u = ref(true), d = ref(), { primitiveElement: c, currentElement: f } = H(), { viewport: p, selectedItem: m, selectedItemText: v, focusSelectedItem: h2 } = s;
    function _() {
      if (a && a.triggerElement.value && a.valueElement.value && d.value && f.value && (p != null && p.value) && (m != null && m.value) && (v != null && v.value)) {
        const E = a.triggerElement.value.getBoundingClientRect(), B = f.value.getBoundingClientRect(), T = a.valueElement.value.getBoundingClientRect(), D = v.value.getBoundingClientRect();
        if (a.dir.value !== "rtl") {
          const Le = D.left - B.left, De = T.left - Le, Fe = E.left - De, Ke = E.width + Fe, Jt = Math.max(Ke, B.width), Zt = window.innerWidth - _e, Qt = vn(De, _e, Zt - Jt);
          d.value.style.minWidth = `${Ke}px`, d.value.style.left = `${Qt}px`;
        } else {
          const Le = B.right - D.right, De = window.innerWidth - T.right - Le, Fe = window.innerWidth - E.right - De, Ke = E.width + Fe, Jt = Math.max(Ke, B.width), Zt = window.innerWidth - _e, Qt = vn(
            De,
            _e,
            Zt - Jt
          );
          d.value.style.minWidth = `${Ke}px`, d.value.style.right = `${Qt}px`;
        }
        const A = l.value, W = window.innerHeight - _e * 2, I = p.value.scrollHeight, R = window.getComputedStyle(f.value), K = Number.parseInt(
          R.borderTopWidth,
          10
        ), U = Number.parseInt(R.paddingTop, 10), Y = Number.parseInt(
          R.borderBottomWidth,
          10
        ), Z = Number.parseInt(
          R.paddingBottom,
          10
        ), ne = K + U + I + Z + Y, oe = Math.min(
          m.value.offsetHeight * 5,
          ne
        ), Ue = window.getComputedStyle(p.value), st = Number.parseInt(Ue.paddingTop, 10), Aa = Number.parseInt(
          Ue.paddingBottom,
          10
        ), wt = E.top + E.height / 2 - _e, Ia = W - wt, qt = m.value.offsetHeight / 2, Da = m.value.offsetTop + qt, Ct = K + U + Da, Ma = ne - Ct;
        if (Ct <= wt) {
          const Le = m.value === A[A.length - 1];
          d.value.style.bottom = "0px";
          const De = f.value.clientHeight - p.value.offsetTop - p.value.offsetHeight, Fe = Math.max(
            Ia,
            qt + (Le ? Aa : 0) + De + Y
          ), Ke = Ct + Fe;
          d.value.style.height = `${Ke}px`;
        } else {
          const Le = m.value === A[0];
          d.value.style.top = "0px";
          const Fe = Math.max(
            wt,
            K + p.value.offsetTop + (Le ? st : 0) + qt
          ) + Ma;
          d.value.style.height = `${Fe}px`, p.value.scrollTop = Ct - wt + p.value.offsetTop;
        }
        d.value.style.margin = `${_e}px 0`, d.value.style.minHeight = `${oe}px`, d.value.style.maxHeight = `${W}px`, t("placed"), requestAnimationFrame(() => r.value = true);
      }
    }
    const S = ref("");
    onMounted(() => {
      _(), f.value && (S.value = window.getComputedStyle(f.value).zIndex);
    });
    function O(E) {
      E && u.value === true && (_(), h2 == null || h2(), u.value = false);
    }
    return provide(zt, {
      contentWrapper: d,
      shouldExpandOnScrollRef: r,
      onScrollButtonChange: O
    }), (E, B) => (openBlock(), createElementBlock("div", {
      ref_key: "contentWrapperElement",
      ref: d,
      style: normalizeStyle({
        display: "flex",
        flexDirection: "column",
        position: "fixed",
        zIndex: S.value
      })
    }, [
      createVNode(unref(M), mergeProps({
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
var mi = defineComponent({
  __name: "SelectPopperPosition",
  props: {
    side: {},
    sideOffset: {},
    align: { default: "start" },
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: { default: _e },
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
    const t = o;
    return (e, n) => (openBlock(), createBlock(unref(vt), mergeProps(t, { style: {
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
var Ie = Symbol();
var vi = defineComponent({
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
  setup(o, { emit: t }) {
    const e = o, n = inject(Ne);
    Eo(), kt(true);
    const { createCollection: a } = ae(), s = ref(), l = a(s), { search: r, handleTypeaheadSearch: u } = $o(l), d = ref(), c = ref(), f = ref(), p = ref(false), m = ref(false);
    function v() {
      c.value && s.value && lo([c.value, s.value]);
    }
    watch(p, () => {
      v();
    });
    const { onOpenChange: h2, triggerPointerDownPosRef: _ } = n;
    watchEffect((E) => {
      if (!s.value)
        return;
      let B = { x: 0, y: 0 };
      const T = (A) => {
        var W, I;
        B = {
          x: Math.abs(
            Math.round(A.pageX) - (((W = _.value) == null ? void 0 : W.x) ?? 0)
          ),
          y: Math.abs(
            Math.round(A.pageY) - (((I = _.value) == null ? void 0 : I.y) ?? 0)
          )
        };
      }, D = (A) => {
        var W;
        B.x <= 10 && B.y <= 10 ? A.preventDefault() : (W = s.value) != null && W.contains(A.target) || h2(false), document.removeEventListener("pointermove", T), _.value = null;
      };
      _.value !== null && (document.addEventListener("pointermove", T), document.addEventListener("pointerup", D, {
        capture: true,
        once: true
      })), E(() => {
        document.removeEventListener("pointermove", T), document.removeEventListener("pointerup", D, {
          capture: true
        });
      });
    });
    function S(E) {
      const B = E.ctrlKey || E.altKey || E.metaKey;
      if (E.key === "Tab" && E.preventDefault(), !B && E.key.length === 1 && u(E.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(E.key)) {
        let T = l.value;
        if (["ArrowUp", "End"].includes(E.key) && (T = T.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(E.key)) {
          const D = E.target, A = T.indexOf(D);
          T = T.slice(A + 1);
        }
        setTimeout(() => lo(T)), E.preventDefault();
      }
    }
    const O = computed(() => e.position === "popper" ? e : {});
    return provide(Ie, {
      content: s,
      viewport: d,
      onViewportChange: (E) => {
        d.value = E;
      },
      itemRefCallback: (E, B, T) => {
        var W, I;
        const D = !m.value && !T;
        (((W = n == null ? void 0 : n.modelValue) == null ? void 0 : W.value) !== void 0 && ((I = n == null ? void 0 : n.modelValue) == null ? void 0 : I.value) === B || D) && (c.value = E, D && (m.value = true));
      },
      selectedItem: c,
      selectedItemText: f,
      onItemLeave: () => {
        var E;
        (E = s.value) == null || E.focus();
      },
      itemTextRefCallback: (E, B, T) => {
        var W, I;
        const D = !m.value && !T;
        (((W = n == null ? void 0 : n.modelValue) == null ? void 0 : W.value) !== void 0 && ((I = n == null ? void 0 : n.modelValue) == null ? void 0 : I.value) === B || D) && (f.value = E);
      },
      focusSelectedItem: v,
      position: e.position,
      isPositioned: p,
      searchRef: r
    }), (E, B) => (openBlock(), createBlock(unref(Lt), {
      "as-child": "",
      onMountAutoFocus: B[6] || (B[6] = withModifiers(() => {
      }, ["prevent"])),
      onUnmountAutoFocus: B[7] || (B[7] = (T) => {
        var D, A;
        t("closeAutoFocus", T), !T.defaultPrevented && ((A = (D = unref(n)) == null ? void 0 : D.triggerElement.value) == null || A.focus({ preventScroll: true }), T.preventDefault());
      })
    }, {
      default: withCtx(() => [
        createVNode(unref(mt), {
          "as-child": "",
          "disable-outside-pointer-events": "",
          onFocusOutside: B[2] || (B[2] = withModifiers(() => {
          }, ["prevent"])),
          onDismiss: B[3] || (B[3] = (T) => {
            var D;
            return (D = unref(n)) == null ? void 0 : D.onOpenChange(false);
          }),
          onEscapeKeyDown: B[4] || (B[4] = (T) => t("escapeKeyDown", T)),
          onPointerDownOutside: B[5] || (B[5] = (T) => t("pointerDownOutside", T))
        }, {
          default: withCtx(() => {
            var T, D, A;
            return [
              (openBlock(), createBlock(resolveDynamicComponent(
                E.position === "popper" ? mi : fi
              ), mergeProps({ ...E.$attrs, ...O.value }, {
                id: (T = unref(n)) == null ? void 0 : T.contentId,
                ref: (W) => {
                  s.value = unref(ue)(W);
                },
                role: "listbox",
                "data-state": (D = unref(n)) != null && D.open.value ? "open" : "closed",
                dir: (A = unref(n)) == null ? void 0 : A.dir.value,
                style: {
                  // flex layout so we can place the scroll buttons properly
                  display: "flex",
                  flexDirection: "column",
                  // reset the outline by default as the content MAY get focused
                  outline: "none"
                },
                onContextmenu: B[0] || (B[0] = withModifiers(() => {
                }, ["prevent"])),
                onPlaced: B[1] || (B[1] = (W) => p.value = true),
                onKeydown: S
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
var $u = defineComponent({
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
  setup(o, { emit: t }) {
    const e = o, n = inject(Ne), a = G(t);
    return (s, l) => (openBlock(), createBlock(unref(ie), {
      present: unref(n).open.value
    }, {
      default: withCtx(() => [
        createVNode(vi, normalizeProps(guardReactiveProps({ ...e, ...unref(a) })), {
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
var Su = defineComponent({
  __name: "SelectArrow",
  props: {
    width: {},
    height: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o, e = inject(Ne), n = inject(Ie);
    return (a, s) => {
      var l, r;
      return (l = unref(e)) != null && l.open.value && ((r = unref(n)) == null ? void 0 : r.position) === "popper" ? (openBlock(), createBlock(unref(ht), normalizeProps(mergeProps({ key: 0 }, t)), {
        default: withCtx(() => [
          renderSlot(a.$slots, "default")
        ]),
        _: 3
      }, 16)) : createCommentVNode("", true);
    };
  }
});
var Pu = defineComponent({
  __name: "SelectSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o;
    return (e, n) => (openBlock(), createBlock(unref(M), mergeProps({ "aria-hidden": "" }, t), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var dn = Symbol();
var Bu = defineComponent({
  __name: "SelectItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o, { disabled: e } = toRefs(t), n = inject(Ne), a = inject(Ie), { primitiveElement: s, currentElement: l } = H(), r = computed(() => {
      var h2;
      return ((h2 = n == null ? void 0 : n.modelValue) == null ? void 0 : h2.value) === t.value;
    }), u = ref(false), d = ref(t.textValue ?? ""), c = te();
    async function f(h2) {
      await nextTick(), !(h2 != null && h2.defaultPrevented) && (e.value || (n.onValueChange(t.value), n.onOpenChange(false)));
    }
    async function p(h2) {
      var _;
      await nextTick(), !h2.defaultPrevented && (e.value ? (_ = a.onItemLeave) == null || _.call(a) : h2.currentTarget.focus({ preventScroll: true }));
    }
    async function m(h2) {
      var _;
      await nextTick(), !h2.defaultPrevented && h2.currentTarget === document.activeElement && ((_ = a.onItemLeave) == null || _.call(a));
    }
    async function v(h2) {
      var S;
      await nextTick(), !(h2.defaultPrevented || ((S = a.searchRef) == null ? void 0 : S.value) !== "" && h2.key === " ") && (ci.includes(h2.key) && f(), h2.key === " " && h2.preventDefault());
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
    }), provide(dn, {
      value: t.value,
      disabled: e,
      textId: c,
      isSelected: r,
      onItemTextChange: (h2) => {
        d.value = ((d.value || (h2 == null ? void 0 : h2.textContent)) ?? "").trim();
      }
    }), (h2, _) => (openBlock(), createBlock(unref(M), {
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
      onFocus: _[0] || (_[0] = (S) => u.value = true),
      onBlur: _[1] || (_[1] = (S) => u.value = false),
      onPointerup: f,
      onPointermove: p,
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
var Tu = defineComponent({
  __name: "SelectItemIndicator",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(o) {
    const t = o, e = inject(dn);
    return (n, a) => {
      var s;
      return (s = unref(e)) != null && s.isSelected.value ? (openBlock(), createBlock(unref(M), mergeProps({
        key: 0,
        "aria-hidden": ""
      }, t), {
        default: withCtx(() => [
          renderSlot(n.$slots, "default")
        ]),
        _: 3
      }, 16)) : createCommentVNode("", true);
    };
  }
});
var Ca = Symbol();
var Au = defineComponent({
  __name: "SelectGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o, e = te();
    return provide(Ca, {
      id: e
    }), (n, a) => (openBlock(), createBlock(unref(M), mergeProps({ role: "group" }, t, { "aria-labelledby": unref(e) }), {
      default: withCtx(() => [
        renderSlot(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-labelledby"]));
  }
});
var Iu = defineComponent({
  __name: "SelectLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "label" }
  },
  setup(o) {
    const t = o, e = inject(Ca, {
      id: ""
    });
    return (n, a) => (openBlock(), createBlock(unref(M), mergeProps(t, {
      id: unref(e).id
    }), {
      default: withCtx(() => [
        renderSlot(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
});
var hi = {
  inheritAttrs: false
};
var Du = defineComponent({
  ...hi,
  __name: "SelectItemText",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(o) {
    const t = o, e = inject(Ie), n = inject(ba), a = inject(dn), { primitiveElement: s, currentElement: l } = H(), r = computed(() => {
      var c;
      return h("option", {
        key: a == null ? void 0 : a.value,
        value: a == null ? void 0 : a.value,
        disabled: a == null ? void 0 : a.disabled.value,
        innerHTML: (c = l.value) == null ? void 0 : c.textContent
      });
    }), { onNativeOptionAdd: u, onNativeOptionRemove: d } = n;
    return onMounted(() => {
      l.value && (a == null || a.onItemTextChange(l.value), e == null || e.itemTextRefCallback(
        l.value,
        a.value,
        a.disabled.value
      ), u(r.value));
    }), (c, f) => {
      var p;
      return openBlock(), createBlock(unref(M), mergeProps({
        id: (p = unref(a)) == null ? void 0 : p.textId,
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
var Ea = defineComponent({
  __name: "SelectScrollButtonImpl",
  emits: ["autoScroll"],
  setup(o, { emit: t }) {
    const { injectCollection: e } = ae(), n = e(), a = inject(Ie), s = ref(null);
    function l() {
      s.value !== null && (window.clearInterval(s.value), s.value = null);
    }
    watchEffect(() => {
      const d = n.value.find(
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
      var f;
      return openBlock(), createBlock(unref(M), mergeProps({
        "aria-hidden": "",
        style: {
          flexShrink: 0
        }
      }, (f = d.$parent) == null ? void 0 : f.$props, {
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
var Mu = defineComponent({
  __name: "SelectScrollUpButton",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = inject(Ie), e = t.position === "item-aligned" ? inject(zt) : void 0, { primitiveElement: n, currentElement: a } = H(), s = ref(false);
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
    }), (l, r) => s.value ? (openBlock(), createBlock(Ea, {
      key: 0,
      ref_key: "primitiveElement",
      ref: n,
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
var ku = defineComponent({
  __name: "SelectScrollDownButton",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = inject(Ie), e = t.position === "item-aligned" ? inject(zt) : void 0, { primitiveElement: n, currentElement: a } = H(), s = ref(false);
    return watchEffect((l) => {
      var r, u;
      if ((r = t.viewport) != null && r.value && ((u = t.isPositioned) != null && u.value)) {
        let d = function() {
          const f = c.scrollHeight - c.clientHeight;
          s.value = Math.ceil(c.scrollTop) < f;
        };
        const c = t.viewport.value;
        d(), c.addEventListener("scroll", d), l(() => c.removeEventListener("scroll", d));
      }
    }), watch(a, () => {
      a.value && (e == null || e.onScrollButtonChange(a.value));
    }), (l, r) => s.value ? (openBlock(), createBlock(Ea, {
      key: 0,
      ref_key: "primitiveElement",
      ref: n,
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
var xu = defineComponent({
  __name: "SelectValue",
  props: {
    placeholder: { default: "" },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(o) {
    const { primitiveElement: t, currentElement: e } = H(), n = inject(Ne);
    return onMounted(() => {
      var s, l;
      n.valueElement = e;
      const a = !!((l = (s = useSlots()) == null ? void 0 : s.default) != null && l.call(s));
      n.onValueElementHasChildrenChange(a);
    }), (a, s) => (openBlock(), createBlock(unref(M), {
      ref_key: "primitiveElement",
      ref: t,
      as: a.as,
      "as-child": a.asChild,
      style: { pointerEvents: "none" }
    }, {
      default: withCtx(() => {
        var l, r;
        return [
          unref(wa)((r = (l = unref(n)) == null ? void 0 : l.modelValue) == null ? void 0 : r.value) ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
            createTextVNode(toDisplayString(a.placeholder), 1)
          ], 64)) : renderSlot(a.$slots, "default", { key: 1 }, () => {
            var u, d;
            return [
              createTextVNode(toDisplayString((d = (u = unref(n)) == null ? void 0 : u.modelValue) == null ? void 0 : d.value), 1)
            ];
          })
        ];
      }),
      _: 3
    }, 8, ["as", "as-child"]));
  }
});
var Ru = defineComponent({
  __name: "SelectIcon",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(o) {
    return (t, e) => (openBlock(), createBlock(unref(M), {
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
var yt = Symbol();
var Nu = defineComponent({
  __name: "MenubarRoot",
  props: {
    modelValue: {},
    defaultValue: {},
    dir: { default: "ltr" },
    loop: { type: Boolean, default: false }
  },
  emits: ["update:modelValue"],
  setup(o, { emit: t }) {
    const e = o, { primitiveElement: n, currentElement: a } = H(), { createCollection: s } = ae("menubar");
    s(a);
    const l = X(e, "modelValue", t, {
      passive: true,
      defaultValue: e.defaultValue ?? ""
    }), r = ref(null), { dir: u, loop: d } = toRefs(e);
    return provide(yt, {
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
    }), (c, f) => (openBlock(), createBlock(unref(M), {
      ref_key: "primitiveElement",
      ref: n,
      role: "menubar"
    }, {
      default: withCtx(() => [
        renderSlot(c.$slots, "default")
      ]),
      _: 3
    }, 512));
  }
});
var Ut = Symbol();
var Lu = defineComponent({
  __name: "MenubarMenu",
  props: {
    value: {}
  },
  setup(o) {
    const e = o.value ?? te(), n = inject(yt), a = ref(), s = ref(false), l = computed(() => (n == null ? void 0 : n.modelValue.value) === e);
    return watch(l, () => {
      l.value || (s.value = false);
    }), provide(Ut, {
      value: e,
      triggerElement: a,
      triggerId: e,
      contentId: te(),
      wasKeyboardTriggerOpenRef: s
    }), (r, u) => {
      var d;
      return openBlock(), createBlock(unref(Yo), {
        open: l.value,
        modal: false,
        dir: (d = unref(n)) == null ? void 0 : d.dir.value,
        "onUpdate:open": u[0] || (u[0] = (c) => {
          var f;
          c || (f = unref(n)) == null || f.onMenuClose();
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
var Fu = defineComponent({
  __name: "MenubarTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(o) {
    const t = inject(yt), e = inject(Ut), { primitiveElement: n, currentElement: a } = H(), { injectCollection: s } = ae("menubar"), l = s(), r = ref(false), u = computed(() => (t == null ? void 0 : t.modelValue.value) === (e == null ? void 0 : e.value));
    onMounted(() => {
      e.triggerElement = a;
    });
    function d(c) {
      var m;
      const f = document.activeElement, p = (m = l.value) == null ? void 0 : m[0].parentElement;
      !f || !p || je(c, f, p, {
        loop: t == null ? void 0 : t.loop.value,
        dir: t == null ? void 0 : t.dir.value,
        itemsArray: l.value,
        focus: true
      });
    }
    return (c, f) => (openBlock(), createBlock(unref(Vt), { "as-child": "" }, {
      default: withCtx(() => {
        var p, m, v;
        return [
          createVNode(unref(M), {
            id: (p = unref(e)) == null ? void 0 : p.triggerId,
            ref_key: "primitiveElement",
            ref: n,
            as: c.as,
            type: c.as === "button" ? "button" : void 0,
            role: "menuitem",
            "aria-haspopup": "menu",
            "aria-expanded": u.value,
            "aria-controls": u.value ? (m = unref(e)) == null ? void 0 : m.contentId : void 0,
            "data-highlighted": r.value ? "" : void 0,
            "data-state": u.value ? "open" : "closed",
            "data-disabled": c.disabled ? "" : void 0,
            disabled: c.disabled,
            "data-value": (v = unref(e)) == null ? void 0 : v.value,
            "data-radix-vue-collection-item": "",
            onPointerdown: f[0] || (f[0] = (h2) => {
              !c.disabled && h2.button === 0 && h2.ctrlKey === false && (unref(t).onMenuOpen(unref(e).value), u.value || h2.preventDefault());
            }),
            onPointerenter: f[1] || (f[1] = () => {
              var _;
              !!unref(t).modelValue.value && !u.value && (unref(t).onMenuOpen(unref(e).value), (_ = unref(a)) == null || _.focus());
            }),
            onKeydown: [
              f[2] || (f[2] = withKeys((h2) => {
                var _, S;
                c.disabled || (["Enter", " "].includes(h2.key) && ((_ = unref(t)) == null || _.onMenuToggle(unref(e).value)), h2.key === "ArrowDown" && ((S = unref(t)) == null || S.onMenuOpen(unref(e).value)), ["Enter", " ", "ArrowDown"].includes(h2.key) && (unref(e).wasKeyboardTriggerOpenRef.value = true, h2.preventDefault()));
              }, ["enter", "space", "arrow-down"])),
              withKeys(d, ["arrow-right", "arrow-left", "home", "end"])
            ],
            onFocus: f[3] || (f[3] = (h2) => r.value = true),
            onBlur: f[4] || (f[4] = (h2) => r.value = false)
          }, {
            default: withCtx(() => [
              renderSlot(c.$slots, "default")
            ]),
            _: 3
          }, 8, ["id", "as", "type", "aria-expanded", "aria-controls", "data-highlighted", "data-state", "data-disabled", "disabled", "data-value", "onKeydown"])
        ];
      }),
      _: 3
    }));
  }
});
var Ku = defineComponent({
  __name: "MenubarPortal",
  props: {
    to: {},
    disabled: { type: Boolean }
  },
  setup(o) {
    const t = o;
    return (e, n) => (openBlock(), createBlock(unref(jo), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Vu = defineComponent({
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
    ...Ae,
    align: "start"
  }),
  setup(o) {
    const t = o, e = inject(yt), n = inject(Ut), { injectCollection: a } = ae("menubar"), s = a(), l = ref(false);
    function r(u) {
      const c = u.target.hasAttribute(
        "data-radix-menubar-subtrigger"
      ), p = ((e == null ? void 0 : e.dir.value) === "rtl" ? "ArrowRight" : "ArrowLeft") === u.key;
      if (!p && c)
        return;
      let v = s.value.map((S) => S.dataset.value);
      p && v.reverse();
      const h2 = v.indexOf(n == null ? void 0 : n.value);
      v = e != null && e.loop.value ? So(v, h2 + 1) : v.slice(h2 + 1);
      const [_] = v;
      _ && (e == null || e.onMenuOpen(_));
    }
    return (u, d) => {
      var c, f;
      return openBlock(), createBlock(unref(Zo), mergeProps({
        id: (c = unref(n)) == null ? void 0 : c.contentId,
        "aria-labelledby": (f = unref(n)) == null ? void 0 : f.triggerId,
        "data-radix-menubar-content": ""
      }, t, {
        style: {
          "--radix-menubar-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-menubar-content-available-width": "var(--radix-popper-available-width)",
          "--radix-menubar-content-available-height": "var(--radix-popper-available-height)",
          "--radix-menubar-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-menubar-trigger-height": "var(--radix-popper-anchor-height)"
        },
        onCloseAutoFocus: d[0] || (d[0] = (p) => {
          var v, h2;
          !!!((v = unref(e)) != null && v.modelValue.value) && !l.value && ((h2 = unref(n).triggerElement.value) == null || h2.focus()), l.value = false, p.preventDefault();
        }),
        onFocusOutside: d[1] || (d[1] = (p) => {
          const m = p.target;
          unref(s).some((h2) => h2.contains(m)) && p.preventDefault();
        }),
        onInteractOutside: d[2] || (d[2] = (p) => {
          l.value = true;
        }),
        onOpenAutoFocus: d[3] || (d[3] = (p) => {
          var m;
          (m = unref(n)) != null && m.wasKeyboardTriggerOpenRef.value || p.preventDefault();
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
var Hu = defineComponent({
  __name: "MenubarArrow",
  props: {
    width: { default: 10 },
    height: { default: 5 },
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o;
    return (e, n) => (openBlock(), createBlock(unref(Uo), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Wu = defineComponent({
  __name: "MenubarItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(o, { emit: t }) {
    const e = o, n = G(t);
    return (a, s) => (openBlock(), createBlock(unref(gt), normalizeProps(guardReactiveProps({ ...e, ...unref(n) })), {
      default: withCtx(() => [
        renderSlot(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var zu = defineComponent({
  __name: "MenubarGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o;
    return (e, n) => (openBlock(), createBlock(unref(Wt), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Uu = defineComponent({
  __name: "MenubarSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o;
    return (e, n) => (openBlock(), createBlock(unref(on), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Yu = defineComponent({
  __name: "MenubarCheckboxItem",
  props: {
    checked: { type: [Boolean, String] },
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select", "update:checked"],
  setup(o, { emit: t }) {
    const e = o, n = G(t);
    return (a, s) => (openBlock(), createBlock(unref(Jo), normalizeProps(guardReactiveProps({ ...e, ...unref(n) })), {
      default: withCtx(() => [
        renderSlot(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Gu = defineComponent({
  __name: "MenubarItemIndicator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o;
    return (e, n) => (openBlock(), createBlock(unref(qo), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Xu = defineComponent({
  __name: "MenubarLabel",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o;
    return (e, n) => (openBlock(), createBlock(unref(Qo), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var qu = defineComponent({
  __name: "MenubarRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(o, { emit: t }) {
    const e = o, n = G(t);
    return (a, s) => (openBlock(), createBlock(unref(en), normalizeProps(guardReactiveProps({ ...e, ...unref(n) })), {
      default: withCtx(() => [
        renderSlot(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Ju = defineComponent({
  __name: "MenubarRadioItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(o, { emit: t }) {
    const e = o;
    return (n, a) => (openBlock(), createBlock(unref(tn), normalizeProps(guardReactiveProps({ ...e, ...t })), {
      default: withCtx(() => [
        renderSlot(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Zu = defineComponent({
  __name: "MenubarSub",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean }
  },
  emits: ["update:open"],
  setup(o, { emit: t }) {
    const e = o, n = X(e, "open", t, {
      passive: true,
      defaultValue: e.defaultOpen ?? false
    });
    return (a, s) => (openBlock(), createBlock(unref(an), {
      open: unref(n),
      "onUpdate:open": s[0] || (s[0] = (l) => isRef(n) ? n.value = l : null)
    }, {
      default: withCtx(() => [
        renderSlot(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["open"]));
  }
});
var Qu = defineComponent({
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
    ...Ae
  }),
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss", "openAutoFocus", "closeAutoFocus"],
  setup(o, { emit: t }) {
    const e = o, { injectCollection: n } = ae("menubar"), a = inject(yt), s = inject(Ut), l = n();
    function r(u) {
      if (u.target.hasAttribute(
        "data-radix-menubar-subtrigger"
      ))
        return;
      let f = l.value.map((v) => v.dataset.value);
      const p = f.indexOf(s == null ? void 0 : s.value);
      f = a != null && a.loop.value ? So(f, p + 1) : f.slice(p + 1);
      const [m] = f;
      m && (a == null || a.onMenuOpen(m));
    }
    return (u, d) => (openBlock(), createBlock(unref(sn), mergeProps({ ...e, ...t }, {
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
var ju = defineComponent({
  __name: "MenubarSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o;
    return (e, n) => (openBlock(), createBlock(unref(ln), mergeProps({ "data-radix-menubar-subtrigger": "" }, t), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var he = Symbol();
var ed = defineComponent({
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
    const e = o, n = X(e, "modelValue", t, {
      passive: true,
      defaultValue: e.defaultValue ?? ""
    }), a = ref(""), { primitiveElement: s, currentElement: l } = H(), r = ref(), u = ref(), { createCollection: d } = ae("nav");
    d(r);
    const { delayDuration: c, skipDelayDuration: f } = toRefs(e), p = Kn(false, f), m = computed(() => n.value !== "" || p.value ? 150 : c.value), v = Co((h2) => {
      a.value = n.value, n.value = h2;
    }, m);
    return provide(he, {
      isRootMenu: true,
      modelValue: n,
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
        p.value = true, v("");
      },
      onContentEnter: (h2) => {
        v(h2);
      },
      onContentLeave: () => {
        v("");
      },
      onItemSelect: (h2) => {
        a.value = n.value, n.value = h2;
      },
      onItemDismiss: () => {
        a.value = n.value, n.value = "";
      }
    }), (h2, _) => (openBlock(), createBlock(unref(M), {
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
function Yt(o) {
  return o ? "open" : "closed";
}
function Oa(o, t) {
  return `${o}-trigger-${t}`;
}
function cn(o, t) {
  return `${o}-content-${t}`;
}
var St = "navigationMenu.rootContentDismiss";
function mo(o) {
  const t = [], e = document.createTreeWalker(o, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (n) => {
      const a = n.tagName === "INPUT" && n.type === "hidden";
      return n.disabled || n.hidden || a ? NodeFilter.FILTER_SKIP : n.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; e.nextNode(); )
    t.push(e.currentNode);
  return t;
}
function $a(o) {
  const t = document.activeElement;
  return o.some((e) => e === t ? true : (e.focus(), document.activeElement !== t));
}
function gi(o) {
  return o.forEach((t) => {
    t.dataset.tabindex = t.getAttribute("tabindex") || "", t.setAttribute("tabindex", "-1");
  }), () => {
    o.forEach((t) => {
      const e = t.dataset.tabindex;
      t.setAttribute("tabindex", e);
    });
  };
}
var Gt = Symbol();
var td = defineComponent({
  __name: "NavigationMenuItem",
  props: {
    value: {},
    asChild: { type: Boolean },
    as: { default: "li" }
  },
  setup(o) {
    const t = o, { injectCollection: e } = ae("nav"), n = e(), a = inject(he), s = t.value || te(), l = ref(), r = ref(), u = cn(a.baseId, s);
    let d = () => ({});
    const c = ref(false);
    async function f(h2 = "start") {
      const _ = document.getElementById(u);
      if (_) {
        d();
        const S = mo(_);
        S.length && $a(h2 === "start" ? S : S.reverse());
      }
    }
    function p() {
      const h2 = document.getElementById(u);
      if (h2) {
        const _ = mo(h2);
        _.length && (d = gi(_));
      }
    }
    provide(Gt, {
      value: s,
      contentId: u,
      triggerRef: l,
      focusProxyRef: r,
      wasEscapeCloseRef: c,
      onEntryKeyDown: f,
      onFocusProxyEnter: f,
      onContentFocusOutside: p,
      onRootContentClose: p
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
      const S = n.value.filter(
        (E) => {
          var B;
          return (B = E.parentElement) == null ? void 0 : B.hasAttribute("data-menu-item");
        }
      ), O = je(h2, _, void 0, {
        itemsArray: S,
        loop: false
      });
      O && (O == null || O.focus()), h2.preventDefault(), h2.stopPropagation();
    }
    return (h2, _) => (openBlock(), createBlock(unref(M), {
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
var yi = defineComponent({
  __name: "NavigationMenuContentImpl",
  props: {
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss"],
  setup(o, { emit: t }) {
    const e = o, { injectCollection: n } = ae("nav"), a = n(), { primitiveElement: s, currentElement: l } = H(), r = inject(he), u = inject(Gt), d = Oa(r.baseId, u.value), c = cn(r.baseId, u.value), f = ref(null), p = computed(() => {
      const E = a.value.map((I) => I.id.split("trigger-")[1]);
      (r == null ? void 0 : r.dir) === "rtl" && E.reverse();
      const B = E.indexOf(r.modelValue.value), T = E.indexOf(r.previousValue.value), D = u.value === (r == null ? void 0 : r.modelValue.value), A = T === E.indexOf(u.value);
      if (!D && !A)
        return f.value;
      const W = (() => {
        if (B !== T) {
          if (D && T !== -1)
            return B > T ? "from-end" : "from-start";
          if (A && B !== -1)
            return B > T ? "to-start" : "to-end";
        }
        return null;
      })();
      return f.value = W, W;
    });
    function m(O) {
      var E, B;
      if (t("focusOutside", O), t("interactOutside", O), !O.defaultPrevented) {
        u.onContentFocusOutside();
        const T = O.target;
        (B = (E = r.rootNavigationMenu) == null ? void 0 : E.value) != null && B.contains(T) && O.preventDefault();
      }
    }
    function v(O) {
      var E;
      if (t("pointerDownOutside", O), !O.defaultPrevented) {
        const B = O.target, T = a.value.some(
          (A) => A.contains(B)
        ), D = (r == null ? void 0 : r.isRootMenu) && ((E = r.viewport.value) == null ? void 0 : E.contains(B));
        (T || D || !(r != null && r.isRootMenu)) && O.preventDefault();
      }
    }
    watchEffect((O) => {
      const E = l.value;
      if (r != null && r.isRootMenu && E) {
        const B = () => {
          var T;
          u.onRootContentClose(), E.contains(document.activeElement) && ((T = u.triggerRef.value) == null || T.focus());
        };
        E.addEventListener(St, B), O(
          () => E.removeEventListener(St, B)
        );
      }
    });
    function h2(O) {
      var E, B;
      t("escapeKeyDown", O), O.defaultPrevented || (r.onItemDismiss(), (B = (E = u.triggerRef) == null ? void 0 : E.value) == null || B.focus(), u.wasEscapeCloseRef.value = true);
    }
    function _(O) {
      var A;
      const E = O.altKey || O.ctrlKey || O.metaKey, B = O.key === "Tab" && !E, T = mo(O.currentTarget);
      if (B) {
        const W = document.activeElement, I = T.findIndex(
          (U) => U === W
        ), K = O.shiftKey ? T.slice(0, I).reverse() : T.slice(I + 1, T.length);
        if ($a(K))
          O.preventDefault();
        else {
          (A = u.focusProxyRef.value) == null || A.focus();
          return;
        }
      }
      const D = je(
        O,
        document.activeElement,
        void 0,
        { itemsArray: T, loop: false }
      );
      D == null || D.focus(), !(O.key === "Enter" || O.key === "Escape") && (O.preventDefault(), O.stopPropagation());
    }
    function S() {
      var E;
      const O = new Event(St, {
        bubbles: true,
        cancelable: true
      });
      (E = l.value) == null || E.dispatchEvent(O);
    }
    return (O, E) => {
      var B, T;
      return openBlock(), createBlock(unref(mt), mergeProps({
        id: unref(c),
        ref_key: "primitiveElement",
        ref: s,
        "aria-labelledby": unref(d),
        "data-motion": p.value,
        "data-state": unref(Yt)(((B = unref(r)) == null ? void 0 : B.modelValue.value) === unref(u).value),
        "data-orientation": (T = unref(r)) == null ? void 0 : T.orientation
      }, e, {
        onKeydown: _,
        onEscapeKeyDown: h2,
        onPointerDownOutside: v,
        onFocusOutside: m,
        onDismiss: S
      }), {
        default: withCtx(() => [
          renderSlot(O.$slots, "default")
        ]),
        _: 3
      }, 16, ["id", "aria-labelledby", "data-motion", "data-state", "data-orientation"]);
    };
  }
});
var _i = {
  inheritAttrs: false
};
var od = defineComponent({
  ..._i,
  __name: "NavigationMenuContent",
  props: {
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss"],
  setup(o, { emit: t }) {
    const e = o, n = G(t), a = Vn(), s = inject(he), l = inject(Gt), r = computed(() => (l == null ? void 0 : l.value) === (s == null ? void 0 : s.modelValue.value)), u = computed(() => !(s != null && s.modelValue.value) && (s != null && s.previousValue.value) ? (s == null ? void 0 : s.previousValue.value) === (l == null ? void 0 : l.value) : false);
    function d(c) {
      t("pointerDownOutside", c), c.preventDefault || s == null || s.onContentLeave();
    }
    return (c, f) => {
      var p, m;
      return unref(a) ? (openBlock(), createBlock(Teleport, {
        key: 0,
        to: (p = unref(s)) == null ? void 0 : p.viewport.value,
        disabled: !((m = unref(s)) != null && m.viewport.value)
      }, [
        createVNode(unref(ie), {
          present: r.value || u.value
        }, {
          default: withCtx(() => {
            var v;
            return [
              createVNode(yi, mergeProps({
                "data-state": unref(Yt)(r.value),
                style: {
                  pointerEvents: !r.value && ((v = unref(s)) != null && v.isRootMenu) ? "none" : void 0
                }
              }, { ...c.$attrs, ...e, ...unref(n) }, {
                onPointerenter: f[0] || (f[0] = (h2) => {
                  var _;
                  return (_ = unref(s)) == null ? void 0 : _.onContentEnter(unref(l).value);
                }),
                onPointerleave: f[1] || (f[1] = (h2) => {
                  var _;
                  return (_ = unref(s)) == null ? void 0 : _.onContentLeave();
                }),
                onPointerdown: d,
                onFocusOutside: f[2] || (f[2] = (h2) => t("focusOutside", h2)),
                onInteractOutside: f[3] || (f[3] = (h2) => t("interactOutside", h2))
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
var bi = {
  inheritAttrs: false
};
var nd = defineComponent({
  ...bi,
  __name: "NavigationMenuIndicator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o, { injectCollection: e } = ae("nav"), n = e(), a = inject(he), s = ref(), l = computed(() => (a == null ? void 0 : a.orientation) === "horizontal"), r = computed(() => !!(a != null && a.modelValue.value)), u = ref();
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
      const c = n.value;
      u.value = c.find(
        (f) => f.id.includes(a == null ? void 0 : a.modelValue.value)
      ), d();
    }), Oe(u, d), Oe(a.indicatorTrack, d), (c, f) => {
      var p, m;
      return (p = unref(a)) != null && p.indicatorTrack.value ? (openBlock(), createBlock(Teleport, {
        key: 0,
        to: (m = unref(a)) == null ? void 0 : m.indicatorTrack.value
      }, [
        createVNode(unref(ie), { present: r.value }, {
          default: withCtx(() => {
            var v, h2, _, S;
            return [
              createVNode(unref(M), mergeProps({
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
                    transform: `translateY(${(S = s.value) == null ? void 0 : S.offset}px)`
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
var ad = defineComponent({
  __name: "NavigationMenuLink",
  props: {
    active: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "a" }
  },
  emits: ["select"],
  setup(o, { emit: t }) {
    const e = o;
    async function n(a) {
      var s;
      if (t("select", a), await nextTick(), !a.defaultPrevented && !a.metaKey) {
        const l = new CustomEvent(
          St,
          {
            bubbles: true,
            cancelable: true
          }
        );
        (s = a.target) == null || s.dispatchEvent(l);
      }
    }
    return (a, s) => (openBlock(), createBlock(unref(M), {
      as: a.as,
      "data-active": a.active ? "" : void 0,
      "aria-current": a.active ? "page" : void 0,
      "as-child": e.asChild,
      "data-radix-vue-collection-item": "",
      onClick: n
    }, {
      default: withCtx(() => [
        renderSlot(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "data-active", "aria-current", "as-child"]));
  }
});
var wi = {
  inheritAttrs: false
};
var sd = defineComponent({
  ...wi,
  __name: "NavigationMenuList",
  props: {
    asChild: { type: Boolean },
    as: { default: "ul" }
  },
  setup(o) {
    const t = o, e = inject(he), { primitiveElement: n, currentElement: a } = H();
    return onMounted(() => {
      e == null || e.onIndicatorTrackChange(a.value);
    }), (s, l) => (openBlock(), createBlock(unref(M), {
      ref_key: "primitiveElement",
      ref: n,
      style: { position: "relative" }
    }, {
      default: withCtx(() => {
        var r;
        return [
          createVNode(unref(M), mergeProps(s.$attrs, {
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
var ld = defineComponent({
  __name: "NavigationMenuSub",
  props: {
    modelValue: {},
    defaultValue: {},
    orientation: { default: "horizontal" },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(o, { emit: t }) {
    const e = o, n = X(e, "modelValue", t, {
      passive: true,
      defaultValue: e.defaultValue ?? ""
    }), a = ref(""), s = inject(he), { primitiveElement: l, currentElement: r } = H(), u = ref(), d = ref(), { createCollection: c } = ae("nav");
    return c(u), provide(he, {
      ...s,
      isRootMenu: false,
      modelValue: n,
      previousValue: a,
      orientation: e.orientation,
      rootNavigationMenu: r,
      indicatorTrack: u,
      onIndicatorTrackChange: (f) => {
        u.value = f;
      },
      viewport: d,
      onViewportChange: (f) => {
        d.value = f;
      },
      onTriggerEnter: (f) => {
        n.value = f;
      },
      onTriggerLeave: () => {
      },
      onContentEnter: () => {
      },
      onContentLeave: () => {
      },
      onItemSelect: (f) => {
        n.value = f;
      },
      onItemDismiss: () => {
        n.value = "";
      }
    }), (f, p) => (openBlock(), createBlock(unref(M), {
      ref_key: "primitiveElement",
      ref: l,
      "data-orientation": f.orientation,
      "as-child": e.asChild,
      as: f.as
    }, {
      default: withCtx(() => [
        renderSlot(f.$slots, "default")
      ]),
      _: 3
    }, 8, ["data-orientation", "as-child", "as"]));
  }
});
var Ci = ["aria-owns"];
var Ei = {
  inheritAttrs: false
};
var id = defineComponent({
  ...Ei,
  __name: "NavigationMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(o) {
    const t = o, e = inject(he), n = inject(Gt), { primitiveElement: a, currentElement: s } = H(), l = ref(""), r = ref(""), u = ref(false), d = ref(false), c = computed(() => (n == null ? void 0 : n.value) === (e == null ? void 0 : e.modelValue.value));
    onMounted(() => {
      n.triggerRef = s, l.value = Oa(e.baseId, n.value), r.value = cn(e.baseId, n.value);
    });
    function f() {
      d.value = false, n.wasEscapeCloseRef.value = false;
    }
    function p(O) {
      if (O.pointerType === "mouse") {
        if (t.disabled || d.value || n.wasEscapeCloseRef.value || u.value)
          return;
        e.onTriggerEnter(n.value), u.value = true;
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
      u.value || (c.value ? e == null || e.onItemSelect("") : e == null || e.onItemSelect(n.value), d.value = c.value);
    }
    function h2(O) {
      const B = { horizontal: "ArrowDown", vertical: e.dir === "rtl" ? "ArrowLeft" : "ArrowRight" }[e.orientation];
      c.value && O.key === B && (n.onEntryKeyDown(), O.preventDefault(), O.stopPropagation());
    }
    function _(O) {
      n.focusProxyRef.value = ue(O);
    }
    function S(O) {
      const E = document.getElementById(n.contentId), B = O.relatedTarget, T = B === s.value, D = E == null ? void 0 : E.contains(B);
      (T || !D) && n.onFocusProxyEnter(T ? "start" : "end");
    }
    return (O, E) => {
      var B;
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(unref(M), mergeProps({
          id: l.value,
          ref_key: "primitiveElement",
          ref: a,
          disabled: O.disabled,
          "data-disabled": O.disabled ? "" : void 0,
          "data-state": unref(Yt)(c.value),
          "aria-expanded": c.value,
          "aria-controls": r.value,
          "as-child": t.asChild,
          as: O.as
        }, O.$attrs, {
          "data-radix-vue-collection-item": "",
          onPointerenter: f,
          onPointermove: p,
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
          createVNode(unref(Wo), {
            ref: _,
            "aria-hidden": "",
            tabindex: 0,
            onFocus: S
          }),
          (B = unref(e)) != null && B.viewport ? (openBlock(), createElementBlock("span", {
            key: 0,
            "aria-owns": r.value
          }, null, 8, Ci)) : createCommentVNode("", true)
        ], 64)) : createCommentVNode("", true)
      ], 64);
    };
  }
});
var Oi = {
  inheritAttrs: false
};
var rd = defineComponent({
  ...Oi,
  __name: "NavigationMenuViewport",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const { primitiveElement: t, currentElement: e } = H(), n = inject(he), a = ref(), s = computed(() => !!(n != null && n.modelValue.value)), l = computed(() => n.modelValue.value);
    watch(e, () => {
      e.value && n.onViewportChange(e.value);
    });
    const r = ref();
    return watch([l, s], async () => {
      var d, c;
      if (await nextTick(), !e.value)
        return;
      const u = (c = (d = e.value.querySelector("[data-state=open]")) == null ? void 0 : d.children) == null ? void 0 : c[0];
      r.value = u;
    }, { immediate: true }), Oe(r, () => {
      r.value && (a.value = {
        width: r.value.offsetWidth,
        height: r.value.offsetHeight
      });
    }), (u, d) => (openBlock(), createBlock(unref(ie), { present: s.value }, {
      default: withCtx(() => {
        var c, f, p, m;
        return [
          createVNode(unref(M), mergeProps(u.$attrs, {
            ref_key: "primitiveElement",
            ref: t,
            as: u.as,
            "as-child": u.asChild,
            "data-state": unref(Yt)(s.value),
            "data-orientation": (c = unref(n)) == null ? void 0 : c.orientation,
            style: {
              // Prevent interaction when animating out
              pointerEvents: !s.value && ((f = unref(n)) != null && f.isRootMenu) ? "none" : void 0,
              ["--radix-navigation-menu-viewport-width"]: a.value ? `${(p = a.value) == null ? void 0 : p.width}px` : void 0,
              ["--radix-navigation-menu-viewport-height"]: a.value ? `${(m = a.value) == null ? void 0 : m.height}px` : void 0
            },
            onPointerenter: d[0] || (d[0] = (v) => {
              var h2;
              return (h2 = unref(n)) == null ? void 0 : h2.onContentEnter(unref(n).modelValue.value);
            }),
            onPointerleave: d[1] || (d[1] = (v) => {
              var h2;
              return (h2 = unref(n)) == null ? void 0 : h2.onContentLeave();
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
var re = Symbol();
var ud = defineComponent({
  __name: "ScrollAreaRoot",
  props: {
    type: { default: "hover" },
    dir: { default: "ltr" },
    scrollHideDelay: { default: 600 },
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o, { primitiveElement: e, currentElement: n } = H(), a = ref(0), s = ref(0), l = ref(), r = ref(), u = ref(), d = ref(), c = ref(false), f = ref(false);
    function p(A) {
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
    function S(A) {
      f.value = A;
    }
    function O(A) {
      a.value = A;
    }
    function E(A) {
      s.value = A;
    }
    const { type: B, dir: T, scrollHideDelay: D } = toRefs(t);
    return provide(re, {
      type: B,
      dir: T,
      scrollHideDelay: D,
      scrollArea: n,
      viewport: l,
      onViewportChange: p,
      content: r,
      onContentChange: m,
      scrollbarX: u,
      scrollbarXEnabled: c,
      scrollbarY: d,
      scrollbarYEnabled: f,
      onScrollbarXChange: v,
      onScrollbarYChange: h2,
      onScrollbarXEnabledChange: _,
      onScrollbarYEnabledChange: S,
      onCornerWidthChange: O,
      onCornerHeightChange: E
    }), (A, W) => (openBlock(), createBlock(unref(M), {
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
var $i = {
  inheritAttrs: false
};
var dd = defineComponent({
  ...$i,
  __name: "ScrollAreaViewport",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o, e = inject(re), { primitiveElement: n, currentElement: a } = H(), s = ref();
    return onMounted(() => {
      e == null || e.onViewportChange(s.value), e == null || e.onContentChange(a.value);
    }), (l, r) => {
      var u, d;
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(unref(M), { as: "style" }, {
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
          createVNode(unref(M), {
            ref_key: "primitiveElement",
            ref: n,
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
function Si(o, [t, e]) {
  return Math.min(e, Math.max(t, o));
}
function Sa(o, t) {
  return (e) => {
    if (o[0] === o[1] || t[0] === t[1])
      return t[0];
    const n = (t[1] - t[0]) / (o[1] - o[0]);
    return t[0] + n * (e - o[0]);
  };
}
function Xt(o) {
  const t = Pa(o.viewport, o.content), e = o.scrollbar.paddingStart + o.scrollbar.paddingEnd, n = (o.scrollbar.size - e) * t;
  return Math.max(n, 18);
}
function Pa(o, t) {
  const e = o / t;
  return Number.isNaN(e) ? 0 : e;
}
function Pi(o, t = () => {
}) {
  let e = { left: o.scrollLeft, top: o.scrollTop }, n = 0;
  return function a() {
    const s = { left: o.scrollLeft, top: o.scrollTop }, l = e.left !== s.left, r = e.top !== s.top;
    (l || r) && t(), e = s, n = window.requestAnimationFrame(a);
  }(), () => window.cancelAnimationFrame(n);
}
function Mn(o, t, e = "ltr") {
  const n = Xt(t), a = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, s = t.scrollbar.size - a, l = t.content - t.viewport, r = s - n, u = e === "ltr" ? [0, l] : [l * -1, 0], d = Si(
    o,
    u
  );
  return Sa([0, l], [0, r])(d);
}
function $t(o) {
  return o ? Number.parseInt(o, 10) : 0;
}
function Bi(o, t, e, n = "ltr") {
  const a = Xt(e), s = a / 2, l = t || s, r = a - l, u = e.scrollbar.paddingStart + l, d = e.scrollbar.size - e.scrollbar.paddingEnd - r, c = e.content - e.viewport, f = n === "ltr" ? [0, c] : [c * -1, 0];
  return Sa(
    [u, d],
    f
  )(o);
}
function kn(o, t) {
  return o > 0 && o < t;
}
var Ba = defineComponent({
  __name: "ScrollAreaScrollbarImpl",
  props: {
    isHorizontal: { type: Boolean }
  },
  emits: ["onDragScroll", "onWheelScroll", "onThumbPointerDown"],
  setup(o, { emit: t }) {
    const e = o, n = inject(re), a = inject(
      _t
    ), s = inject(bt), { primitiveElement: l, currentElement: r } = H(), u = ref(""), d = ref();
    function c(_) {
      var S, O;
      if (d.value) {
        const E = _.clientX - ((S = d.value) == null ? void 0 : S.left), B = _.clientY - ((O = d.value) == null ? void 0 : O.top);
        t("onDragScroll", { x: E, y: B });
      }
    }
    function f(_) {
      _.button === 0 && (_.target.setPointerCapture(_.pointerId), d.value = r.value.getBoundingClientRect(), u.value = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", n != null && n.viewport && (n.viewport.value.style.scrollBehavior = "auto"), c(_));
    }
    function p(_) {
      c(_);
    }
    function m(_) {
      const S = _.target;
      S.hasPointerCapture(_.pointerId) && S.releasePointerCapture(_.pointerId), document.body.style.webkitUserSelect = u.value, n != null && n.viewport && (n.viewport.value.style.scrollBehavior = ""), d.value = void 0;
    }
    function v(_) {
      var B;
      if (!a)
        return;
      const S = _.target, O = (B = r.value) == null ? void 0 : B.contains(S), E = a.sizes.value.content - a.sizes.value.viewport;
      O && a.handleWheelScroll(_, E);
    }
    onMounted(() => {
      document.addEventListener("wheel", v, { passive: false });
    }), onUnmounted(() => {
      document.removeEventListener("wheel", v);
    });
    function h2() {
      var _, S, O, E, B, T;
      r.value && (e.isHorizontal ? a == null || a.handleSizeChange({
        content: ((_ = n == null ? void 0 : n.viewport.value) == null ? void 0 : _.scrollWidth) ?? 0,
        viewport: ((S = n == null ? void 0 : n.viewport.value) == null ? void 0 : S.offsetWidth) ?? 0,
        scrollbar: {
          size: ((O = r.value) == null ? void 0 : O.clientWidth) ?? 0,
          paddingStart: $t(getComputedStyle(r.value).paddingLeft),
          paddingEnd: $t(getComputedStyle(r.value).paddingRight)
        }
      }) : a == null || a.handleSizeChange({
        content: ((E = n == null ? void 0 : n.viewport.value) == null ? void 0 : E.scrollHeight) ?? 0,
        viewport: ((B = n == null ? void 0 : n.viewport.value) == null ? void 0 : B.offsetHeight) ?? 0,
        scrollbar: {
          size: ((T = r.value) == null ? void 0 : T.clientHeight) ?? 0,
          paddingStart: $t(getComputedStyle(r.value).paddingLeft),
          paddingEnd: $t(getComputedStyle(r.value).paddingRight)
        }
      }));
    }
    return Oe(r, h2), Oe(n == null ? void 0 : n.content, h2), (_, S) => {
      var O, E;
      return openBlock(), createBlock(unref(M), {
        ref_key: "primitiveElement",
        ref: l,
        style: { position: "absolute" },
        "data-scrollbarimpl": "",
        as: (O = unref(s)) == null ? void 0 : O.as.value,
        "as-child": (E = unref(s)) == null ? void 0 : E.asChild.value,
        onPointerdown: f,
        onPointermove: p,
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
var Ti = defineComponent({
  __name: "ScrollAreaScrollbarX",
  setup(o) {
    const t = inject(re), e = inject(
      _t
    ), { primitiveElement: n, currentElement: a } = H();
    onMounted(() => {
      a.value && (t == null || t.onScrollbarXChange(a.value));
    });
    const s = computed(() => e == null ? void 0 : e.sizes.value);
    return (l, r) => {
      var u, d, c, f;
      return openBlock(), createBlock(Ba, {
        ref_key: "primitiveElement",
        ref: n,
        "is-horizontal": true,
        "data-orientation": "horizontal",
        style: normalizeStyle({
          bottom: 0,
          left: ((d = (u = unref(t)) == null ? void 0 : u.dir) == null ? void 0 : d.value) === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
          right: ((f = (c = unref(t)) == null ? void 0 : c.dir) == null ? void 0 : f.value) === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
          ["--radix-scroll-area-thumb-width"]: s.value ? `${unref(Xt)(s.value)}px` : void 0
        }),
        onOnDragScroll: r[0] || (r[0] = (p) => {
          var m;
          return (m = unref(e)) == null ? void 0 : m.onDragScroll(p.x);
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
var Ai = defineComponent({
  __name: "ScrollAreaScrollbarY",
  setup(o) {
    const t = inject(re), e = inject(
      _t
    ), { primitiveElement: n, currentElement: a } = H();
    onMounted(() => {
      a.value && (t == null || t.onScrollbarYChange(a.value));
    });
    const s = computed(() => e == null ? void 0 : e.sizes.value);
    return (l, r) => {
      var u, d, c, f;
      return openBlock(), createBlock(Ba, {
        ref_key: "primitiveElement",
        ref: n,
        "is-horizontal": false,
        "data-orientation": "vertical",
        style: normalizeStyle({
          top: 0,
          right: ((d = (u = unref(t)) == null ? void 0 : u.dir) == null ? void 0 : d.value) === "ltr" ? 0 : void 0,
          left: ((f = (c = unref(t)) == null ? void 0 : c.dir) == null ? void 0 : f.value) === "rtl" ? 0 : void 0,
          bottom: "var(--radix-scroll-area-corner-height)",
          ["--radix-scroll-area-thumb-height"]: s.value ? `${unref(Xt)(s.value)}px` : void 0
        }),
        onOnDragScroll: r[0] || (r[0] = (p) => {
          var m;
          return (m = unref(e)) == null ? void 0 : m.onDragScroll(p.y);
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
var _t = Symbol();
var pn = defineComponent({
  __name: "ScrollAreaScrollbarVisible",
  setup(o) {
    const t = inject(re), e = inject(bt), n = ref({
      content: 0,
      viewport: 0,
      scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
    }), a = computed(() => {
      const _ = Pa(n.value.viewport, n.value.content);
      return _ > 0 && _ < 1;
    }), s = ref(), l = ref(0);
    function r(_, S) {
      if (p.value) {
        const O = t.viewport.value.scrollLeft + _.deltaY;
        t.viewport.value.scrollLeft = O, kn(O, S) && _.preventDefault();
      } else {
        const O = t.viewport.value.scrollTop + _.deltaY;
        t.viewport.value.scrollTop = O, kn(O, S) && _.preventDefault();
      }
    }
    function u(_, S) {
      p.value ? l.value = S.x : l.value = S.y;
    }
    function d(_) {
      l.value = 0;
    }
    function c(_) {
      n.value = _;
    }
    function f(_, S) {
      return Bi(
        _,
        l.value,
        n.value,
        S
      );
    }
    const p = computed(
      () => e == null ? void 0 : e.isHorizontal.value
    );
    function m(_) {
      var S;
      p.value ? t.viewport.value.scrollLeft = f(
        _,
        (S = t.dir) == null ? void 0 : S.value
      ) : t.viewport.value.scrollTop = f(_);
    }
    function v() {
      var _;
      if (p.value) {
        if (t != null && t.viewport.value && s.value) {
          const S = t == null ? void 0 : t.viewport.value.scrollLeft, O = Mn(
            S,
            n.value,
            (_ = t == null ? void 0 : t.dir) == null ? void 0 : _.value
          );
          s.value.style.transform = `translate3d(${O}px, 0, 0)`;
        }
      } else if (t != null && t.viewport.value && s.value) {
        const S = t == null ? void 0 : t.viewport.value.scrollTop, O = Mn(S, n.value);
        s.value.style.transform = `translate3d(0, ${O}px, 0)`;
      }
    }
    function h2(_) {
      s.value = _;
    }
    return provide(
      _t,
      {
        sizes: n,
        hasThumb: a,
        handleWheelScroll: r,
        handleThumbDown: u,
        handleThumbUp: d,
        handleSizeChange: c,
        onThumbPositionChange: v,
        onThumbChange: h2,
        onDragScroll: m
      }
    ), (_, S) => p.value ? (openBlock(), createBlock(Ti, normalizeProps(mergeProps({ key: 0 }, _.$attrs)), {
      default: withCtx(() => [
        renderSlot(_.$slots, "default")
      ]),
      _: 3
    }, 16)) : (openBlock(), createBlock(Ai, normalizeProps(mergeProps({ key: 1 }, _.$attrs)), {
      default: withCtx(() => [
        renderSlot(_.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Ta = defineComponent({
  __name: "ScrollAreaScrollbarAuto",
  setup(o) {
    const t = inject(re), e = inject(bt), n = ref(false), a = Co(() => {
      if (t != null && t.viewport.value) {
        const s = (t == null ? void 0 : t.viewport.value.offsetWidth) < (t == null ? void 0 : t.viewport.value.scrollWidth), l = (t == null ? void 0 : t.viewport.value.offsetHeight) < (t == null ? void 0 : t.viewport.value.scrollHeight);
        n.value = e != null && e.isHorizontal.value ? s : l;
      }
    }, 10);
    return Oe(t == null ? void 0 : t.viewport, a), Oe(t == null ? void 0 : t.content, a), (s, l) => n.value ? (openBlock(), createBlock(pn, mergeProps({ key: 0 }, s.$attrs, {
      "data-state": n.value ? "visible" : "hidden"
    }), {
      default: withCtx(() => [
        renderSlot(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-state"])) : createCommentVNode("", true);
  }
});
var Ii = {
  inheritAttrs: false
};
var Di = defineComponent({
  ...Ii,
  __name: "ScrollAreaScrollbarHover",
  setup(o) {
    const t = inject(re);
    let e;
    const n = ref(false);
    function a() {
      window.clearTimeout(e), n.value = true;
    }
    function s() {
      e = window.setTimeout(() => {
        n.value = false;
      }, t == null ? void 0 : t.scrollHideDelay.value);
    }
    return onMounted(() => {
      const l = t == null ? void 0 : t.scrollArea.value;
      l && (l.addEventListener("pointerenter", a), l.addEventListener("pointerleave", s));
    }), onUnmounted(() => {
      const l = t == null ? void 0 : t.scrollArea.value;
      l && (window.clearTimeout(e), l.removeEventListener("pointerenter", a), l.removeEventListener("pointerleave", s));
    }), (l, r) => n.value ? (openBlock(), createBlock(Ta, mergeProps({ key: 0 }, l.$attrs, {
      "data-state": n.value ? "visible" : "hidden"
    }), {
      default: withCtx(() => [
        renderSlot(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-state"])) : createCommentVNode("", true);
  }
});
var Mi = defineComponent({
  __name: "ScrollAreaScrollbarScroll",
  setup(o) {
    const t = inject(re), e = inject(bt), { state: n, dispatch: a } = Un("hidden", {
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
      n.value === "idle" && window.setTimeout(
        () => a("HIDE"),
        t == null ? void 0 : t.scrollHideDelay.value
      );
    });
    const s = Co(() => a("SCROLL_END"), 100);
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
    }), (l, r) => unref(n) !== "hidden" ? (openBlock(), createBlock(pn, normalizeProps(mergeProps({ key: 0 }, l.$attrs)), {
      default: withCtx(() => [
        renderSlot(l.$slots, "default")
      ]),
      _: 3
    }, 16)) : createCommentVNode("", true);
  }
});
var bt = Symbol();
var ki = {
  inheritAttrs: false
};
var cd = defineComponent({
  ...ki,
  __name: "ScrollAreaScrollbar",
  props: {
    orientation: { default: "vertical" },
    forceMount: { type: Boolean, default: void 0 },
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(o) {
    const t = o, e = inject(re), n = computed(() => t.orientation === "horizontal");
    watch(
      n,
      () => {
        n.value ? e == null || e.onScrollbarXEnabledChange(true) : e == null || e.onScrollbarYEnabledChange(true);
      },
      { immediate: true }
    ), onUnmounted(() => {
      e == null || e.onScrollbarXEnabledChange(false), e == null || e.onScrollbarYEnabledChange(false);
    });
    const { orientation: a, forceMount: s, asChild: l, as: r } = toRefs(t);
    return provide(bt, {
      orientation: a,
      forceMount: s,
      isHorizontal: n,
      as: r,
      asChild: l
    }), (u, d) => {
      var c, f, p, m;
      return ((c = unref(e)) == null ? void 0 : c.type.value) === "hover" ? (openBlock(), createBlock(Di, mergeProps({ key: 0 }, u.$attrs, { "force-mount": unref(s) }), {
        default: withCtx(() => [
          renderSlot(u.$slots, "default")
        ]),
        _: 3
      }, 16, ["force-mount"])) : ((f = unref(e)) == null ? void 0 : f.type.value) === "scroll" ? (openBlock(), createBlock(Mi, mergeProps({ key: 1 }, u.$attrs, { "force-mount": unref(s) }), {
        default: withCtx(() => [
          renderSlot(u.$slots, "default")
        ]),
        _: 3
      }, 16, ["force-mount"])) : ((p = unref(e)) == null ? void 0 : p.type.value) === "auto" ? (openBlock(), createBlock(Ta, mergeProps({ key: 2 }, u.$attrs, { "force-mount": unref(s) }), {
        default: withCtx(() => [
          renderSlot(u.$slots, "default")
        ]),
        _: 3
      }, 16, ["force-mount"])) : ((m = unref(e)) == null ? void 0 : m.type.value) === "always" ? (openBlock(), createBlock(pn, mergeProps({ key: 3 }, u.$attrs, {
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
var pd = defineComponent({
  __name: "ScrollAreaThumb",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o, e = inject(re), n = inject(
      _t
    );
    function a(p) {
      const v = p.target.getBoundingClientRect(), h2 = p.clientX - v.left, _ = p.clientY - v.top;
      n == null || n.handleThumbDown(p, { x: h2, y: _ });
    }
    function s(p) {
      n == null || n.handleThumbUp(p);
    }
    const { primitiveElement: l, currentElement: r } = H(), u = ref(), d = computed(() => e == null ? void 0 : e.viewport.value);
    function c() {
      if (!u.value) {
        const p = Pi(
          d.value,
          n == null ? void 0 : n.onThumbPositionChange
        );
        u.value = p, n == null || n.onThumbPositionChange();
      }
    }
    const f = computed(() => n == null ? void 0 : n.sizes.value);
    return ss(f, () => {
      n == null || n.onThumbChange(r.value), d.value && (n == null || n.onThumbPositionChange(), d.value.addEventListener("scroll", c));
    }), onUnmounted(() => {
      var p;
      d.value.removeEventListener("scroll", c), (p = e == null ? void 0 : e.viewport.value) == null || p.removeEventListener("scroll", c);
    }), (p, m) => {
      var v;
      return openBlock(), createBlock(unref(M), {
        ref_key: "primitiveElement",
        ref: l,
        "data-state": (v = unref(n)) != null && v.hasThumb ? "visible" : "hidden",
        style: normalizeStyle({
          width: "var(--radix-scroll-area-thumb-width)",
          height: "var(--radix-scroll-area-thumb-height)"
        }),
        "as-child": t.asChild,
        as: p.as,
        onPointerdown: a,
        onPointerup: s
      }, {
        default: withCtx(() => [
          renderSlot(p.$slots, "default")
        ]),
        _: 3
      }, 8, ["data-state", "style", "as-child", "as"]);
    };
  }
});
var xi = defineComponent({
  __name: "ScrollAreaCornerImpl",
  setup(o) {
    const t = inject(re), e = ref(0), n = ref(0), a = computed(() => !!e.value && !!n.value);
    function s() {
      var u;
      const r = ((u = t == null ? void 0 : t.scrollbarX.value) == null ? void 0 : u.offsetHeight) || 0;
      t == null || t.onCornerHeightChange(r), n.value = r;
    }
    function l() {
      var u;
      const r = ((u = t == null ? void 0 : t.scrollbarY.value) == null ? void 0 : u.offsetWidth) || 0;
      t == null || t.onCornerWidthChange(r), e.value = r;
    }
    return Oe(t == null ? void 0 : t.scrollbarX.value, s), Oe(t == null ? void 0 : t.scrollbarY.value, l), watch(() => t == null ? void 0 : t.scrollbarX.value, s), watch(() => t == null ? void 0 : t.scrollbarY.value, l), (r, u) => {
      var d;
      return a.value ? (openBlock(), createBlock(unref(M), mergeProps({
        key: 0,
        style: {
          width: `${e.value}px`,
          height: `${n.value}px`,
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
var fd = defineComponent({
  __name: "ScrollAreaCorner",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o, e = inject(re), n = computed(
      () => !!(e != null && e.scrollbarX.value) && !!e.scrollbarY.value
    ), a = computed(
      () => (e == null ? void 0 : e.type.value) !== "scroll" && n.value
    );
    return (s, l) => a.value ? (openBlock(), createBlock(xi, normalizeProps(mergeProps({ key: 0 }, t)), {
      default: withCtx(() => [
        renderSlot(s.$slots, "default")
      ]),
      _: 3
    }, 16)) : createCommentVNode("", true);
  }
});
export {
  Ki as AccordionContent,
  Vi as AccordionHeader,
  Fi as AccordionItem,
  Li as AccordionRoot,
  Hi as AccordionTrigger,
  gr as AlertDialogAction,
  mr as AlertDialogCancel,
  pr as AlertDialogContent,
  hr as AlertDialogDescription,
  fr as AlertDialogOverlay,
  cr as AlertDialogPortal,
  ur as AlertDialogRoot,
  vr as AlertDialogTitle,
  dr as AlertDialogTrigger,
  qi as AspectRatio,
  $r as AvatarFallback,
  Or as AvatarImage,
  Er as AvatarRoot,
  zi as CheckboxIndicator,
  Wi as CheckboxRoot,
  As as CollapsibleContent,
  Ss as CollapsibleRoot,
  Ps as CollapsibleTrigger,
  uu as ContextMenuArrow,
  fu as ContextMenuCheckboxItem,
  ru as ContextMenuContent,
  cu as ContextMenuGroup,
  du as ContextMenuItem,
  mu as ContextMenuItemIndicator,
  vu as ContextMenuLabel,
  iu as ContextMenuPortal,
  hu as ContextMenuRadioGroup,
  gu as ContextMenuRadioItem,
  su as ContextMenuRoot,
  pu as ContextMenuSeparator,
  yu as ContextMenuSub,
  _u as ContextMenuSubContent,
  bu as ContextMenuSubTrigger,
  lu as ContextMenuTrigger,
  la as DialogClose,
  _l as DialogContent,
  Cl as DialogDescription,
  bl as DialogOverlay,
  Qs as DialogPortal,
  Js as DialogRoot,
  wl as DialogTitle,
  Zs as DialogTrigger,
  Gr as DropdownMenuArrow,
  Zr as DropdownMenuCheckboxItem,
  Yr as DropdownMenuContent,
  qr as DropdownMenuGroup,
  Xr as DropdownMenuItem,
  Qr as DropdownMenuItemIndicator,
  jr as DropdownMenuLabel,
  Ur as DropdownMenuPortal,
  eu as DropdownMenuRadioGroup,
  tu as DropdownMenuRadioItem,
  Wr as DropdownMenuRoot,
  Jr as DropdownMenuSeparator,
  ou as DropdownMenuSub,
  nu as DropdownMenuSubContent,
  au as DropdownMenuSubTrigger,
  zr as DropdownMenuTrigger,
  xr as HoverCardArrow,
  kr as HoverCardContent,
  Mr as HoverCardPortal,
  Ir as HoverCardRoot,
  Dr as HoverCardTrigger,
  Xi as Label,
  Hu as MenubarArrow,
  Yu as MenubarCheckboxItem,
  Vu as MenubarContent,
  zu as MenubarGroup,
  Wu as MenubarItem,
  Gu as MenubarItemIndicator,
  Xu as MenubarLabel,
  Lu as MenubarMenu,
  Ku as MenubarPortal,
  qu as MenubarRadioGroup,
  Ju as MenubarRadioItem,
  Nu as MenubarRoot,
  Uu as MenubarSeparator,
  Zu as MenubarSub,
  Qu as MenubarSubContent,
  ju as MenubarSubTrigger,
  Fu as MenubarTrigger,
  od as NavigationMenuContent,
  nd as NavigationMenuIndicator,
  td as NavigationMenuItem,
  ad as NavigationMenuLink,
  sd as NavigationMenuList,
  ed as NavigationMenuRoot,
  ld as NavigationMenuSub,
  id as NavigationMenuTrigger,
  rd as NavigationMenuViewport,
  Hr as PopoverAnchor,
  Kr as PopoverArrow,
  Vr as PopoverClose,
  Fr as PopoverContent,
  Lr as PopoverPortal,
  Rr as PopoverRoot,
  Nr as PopoverTrigger,
  rr as ProgressIndicator,
  ir as ProgressRoot,
  lr as RadioGroupIndicator,
  sr as RadioGroupItem,
  ar as RadioGroupRoot,
  fd as ScrollAreaCorner,
  ud as ScrollAreaRoot,
  cd as ScrollAreaScrollbar,
  pd as ScrollAreaThumb,
  dd as ScrollAreaViewport,
  Su as SelectArrow,
  $u as SelectContent,
  Au as SelectGroup,
  Ru as SelectIcon,
  Bu as SelectItem,
  Tu as SelectItemIndicator,
  Du as SelectItemText,
  Iu as SelectLabel,
  Eu as SelectPortal,
  wu as SelectRoot,
  ku as SelectScrollDownButton,
  Mu as SelectScrollUpButton,
  Pu as SelectSeparator,
  Cu as SelectTrigger,
  xu as SelectValue,
  Ou as SelectViewport,
  Gi as Separator,
  nr as SliderRange,
  er as SliderRoot,
  tr as SliderThumb,
  or as SliderTrack,
  Ui as SwitchRoot,
  Yi as SwitchThumb,
  Qi as TabsContent,
  Zi as TabsList,
  Ji as TabsRoot,
  ji as TabsTrigger,
  xs as Toggle,
  Ws as ToggleGroupItem,
  Hs as ToggleGroupRoot,
  El as ToolbarButton,
  _r as ToolbarLink,
  yr as ToolbarRoot,
  Cr as ToolbarSeparator,
  br as ToolbarToggleGroup,
  wr as ToolbarToggleItem,
  Tr as TooltipArrow,
  Br as TooltipContent,
  Ar as TooltipPortal,
  Sr as TooltipRoot,
  Pr as TooltipTrigger
};
//# sourceMappingURL=radix-vue.js.map
