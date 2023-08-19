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
  toValue,
  unref,
  useAttrs,
  useSlots,
  vModelSelect,
  watch,
  watchEffect,
  withCtx,
  withDirectives,
  withKeys,
  withModifiers
} from "./chunk-OX6HOUGK.js";
import "./chunk-76J2PTFD.js";

// ../node_modules/.pnpm/radix-vue@0.1.21_vue@3.3.4/node_modules/radix-vue/dist/index.js
var Xa = Object.defineProperty;
var qa = Object.defineProperties;
var Ja = Object.getOwnPropertyDescriptors;
var cn = Object.getOwnPropertySymbols;
var Za = Object.prototype.hasOwnProperty;
var Qa = Object.prototype.propertyIsEnumerable;
var pn = (n, t, e) => t in n ? Xa(n, t, { enumerable: true, configurable: true, writable: true, value: e }) : n[t] = e;
var ja = (n, t) => {
  for (var e in t || (t = {}))
    Za.call(t, e) && pn(n, e, t[e]);
  if (cn)
    for (var e of cn(t))
      Qa.call(t, e) && pn(n, e, t[e]);
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
function Fn(n, t) {
  let e, o, a;
  const s = ref(true), l = () => {
    s.value = true, a();
  };
  watch(n, l, { flush: "sync" });
  const i = typeof t == "function" ? t : t.get, u = typeof t == "function" ? void 0 : t.set, d = customRef((c, f) => (o = c, a = f, {
    get() {
      return s.value && (e = i(), s.value = false), o(), e;
    },
    set(p) {
      u == null || u(p);
    }
  }));
  return Object.isExtensible(d) && (d.trigger = l), d;
}
function xt(n) {
  return getCurrentScope() ? (onScopeDispose(n), true) : false;
}
function wo(n) {
  let t = false, e;
  const o = effectScope(true);
  return (...a) => (t || (e = o.run(() => n(...a)), t = true), e);
}
function xe(n) {
  return typeof n == "function" ? n() : unref(n);
}
var Ae = typeof window < "u";
var os = (n) => typeof n < "u";
var fn = (n, t, e) => Math.min(e, Math.max(t, n));
var Qe = () => {
};
var lo = ns();
function ns() {
  var n;
  return Ae && ((n = window == null ? void 0 : window.navigator) == null ? void 0 : n.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
}
function as(n, t) {
  function e(...o) {
    return new Promise((a, s) => {
      Promise.resolve(n(() => t.apply(this, o), { fn: t, thisArg: this, args: o })).then(a).catch(s);
    });
  }
  return e;
}
function ss(n, t = {}) {
  let e, o, a = Qe;
  const s = (i) => {
    clearTimeout(i), a(), a = Qe;
  };
  return (i) => {
    const u = xe(n), d = xe(t.maxWait);
    return e && s(e), u <= 0 || d !== void 0 && d <= 0 ? (o && (s(o), o = null), Promise.resolve(i())) : new Promise((c, f) => {
      a = t.rejectOnCancel ? f : c, d && !o && (o = setTimeout(() => {
        e && s(e), o = null, c(i());
      }, d)), e = setTimeout(() => {
        o && s(o), o = null, c(i());
      }, u);
    });
  };
}
function Kn(...n) {
  if (n.length !== 1)
    return toRef(...n);
  const t = n[0];
  return typeof t == "function" ? readonly(customRef(() => ({ get: t, set: Qe }))) : ref(t);
}
function Vn(n, t = 1e4) {
  return customRef((e, o) => {
    let a = n, s;
    const l = () => setTimeout(() => {
      a = n, o();
    }, xe(t));
    return xt(() => {
      clearTimeout(s);
    }), {
      get() {
        return e(), a;
      },
      set(i) {
        a = i, o(), clearTimeout(s), s = l();
      }
    };
  });
}
function Co(n, t = 200, e = {}) {
  return as(
    ss(t, e),
    n
  );
}
function ls(n, t, e) {
  const o = watch(n, (...a) => (nextTick(() => o()), t(...a)), e);
}
function le(n) {
  var t;
  const e = xe(n);
  return (t = e == null ? void 0 : e.$el) != null ? t : e;
}
var vt = Ae ? window : void 0;
var eo = Ae ? window.document : void 0;
function Ee(...n) {
  let t, e, o, a;
  if (typeof n[0] == "string" || Array.isArray(n[0]) ? ([e, o, a] = n, t = vt) : [t, e, o, a] = n, !t)
    return Qe;
  Array.isArray(e) || (e = [e]), Array.isArray(o) || (o = [o]);
  const s = [], l = () => {
    s.forEach((c) => c()), s.length = 0;
  }, i = (c, f, p, m) => (c.addEventListener(f, p, m), () => c.removeEventListener(f, p, m)), u = watch(
    () => [le(t), xe(a)],
    ([c, f]) => {
      l(), c && s.push(
        ...e.flatMap((p) => o.map((m) => i(c, p, m, f)))
      );
    },
    { immediate: true, flush: "post" }
  ), d = () => {
    u(), l();
  };
  return xt(d), d;
}
var mn = false;
function rs(n, t, e = {}) {
  const { window: o = vt, ignore: a = [], capture: s = true, detectIframe: l = false } = e;
  if (!o)
    return;
  lo && !mn && (mn = true, Array.from(o.document.body.children).forEach((p) => p.addEventListener("click", Qe)), o.document.documentElement.addEventListener("click", Qe));
  let i = true;
  const u = (p) => a.some((m) => {
    if (typeof m == "string")
      return Array.from(o.document.querySelectorAll(m)).some((v) => v === p.target || p.composedPath().includes(v));
    {
      const v = le(m);
      return v && (p.target === v || p.composedPath().includes(v));
    }
  }), c = [
    Ee(o, "click", (p) => {
      const m = le(n);
      if (!(!m || m === p.target || p.composedPath().includes(m))) {
        if (p.detail === 0 && (i = !u(p)), !i) {
          i = true;
          return;
        }
        t(p);
      }
    }, { passive: true, capture: s }),
    Ee(o, "pointerdown", (p) => {
      const m = le(n);
      m && (i = !p.composedPath().includes(m) && !u(p));
    }, { passive: true }),
    l && Ee(o, "blur", (p) => {
      setTimeout(() => {
        var m;
        const v = le(n);
        ((m = o.document.activeElement) == null ? void 0 : m.tagName) === "IFRAME" && !(v != null && v.contains(o.document.activeElement)) && t(p);
      }, 0);
    })
  ].filter(Boolean);
  return () => c.forEach((p) => p());
}
function is(n) {
  return typeof n == "function" ? n : typeof n == "string" ? (t) => t.key === n : Array.isArray(n) ? (t) => n.includes(t.key) : () => true;
}
function us(...n) {
  let t, e, o = {};
  n.length === 3 ? (t = n[0], e = n[1], o = n[2]) : n.length === 2 ? typeof n[1] == "object" ? (t = true, e = n[0], o = n[1]) : (t = n[0], e = n[1]) : (t = true, e = n[0]);
  const {
    target: a = vt,
    eventName: s = "keydown",
    passive: l = false,
    dedupe: i = false
  } = o, u = is(t);
  return Ee(a, s, (c) => {
    c.repeat && xe(i) || u(c) && e(c);
  }, l);
}
function ds(n = {}) {
  var t;
  const {
    window: e = vt,
    deep: o = true
  } = n, a = (t = n.document) != null ? t : e == null ? void 0 : e.document, s = () => {
    var i;
    let u = a == null ? void 0 : a.activeElement;
    if (o)
      for (; u != null && u.shadowRoot; )
        u = (i = u == null ? void 0 : u.shadowRoot) == null ? void 0 : i.activeElement;
    return u;
  }, l = Fn(
    () => null,
    () => s()
  );
  return e && (Ee(e, "blur", (i) => {
    i.relatedTarget === null && l.trigger();
  }, true), Ee(e, "focus", l.trigger, true)), l;
}
function cs() {
  const n = ref(false);
  return getCurrentInstance() && onMounted(() => {
    n.value = true;
  }), n;
}
function ps(n) {
  const t = cs();
  return computed(() => (t.value, !!n()));
}
function fs(n) {
  return JSON.parse(JSON.stringify(n));
}
var vn = Object.getOwnPropertySymbols;
var ms = Object.prototype.hasOwnProperty;
var vs = Object.prototype.propertyIsEnumerable;
var hs = (n, t) => {
  var e = {};
  for (var o in n)
    ms.call(n, o) && t.indexOf(o) < 0 && (e[o] = n[o]);
  if (n != null && vn)
    for (var o of vn(n))
      t.indexOf(o) < 0 && vs.call(n, o) && (e[o] = n[o]);
  return e;
};
function Be(n, t, e = {}) {
  const o = e, { window: a = vt } = o, s = hs(o, ["window"]);
  let l;
  const i = ps(() => a && "ResizeObserver" in a), u = () => {
    l && (l.disconnect(), l = void 0);
  }, d = computed(
    () => Array.isArray(n) ? n.map((p) => le(p)) : [le(n)]
  ), c = watch(
    d,
    (p) => {
      if (u(), i.value && a) {
        l = new ResizeObserver(t);
        for (const m of p)
          m && l.observe(m, s);
      }
    },
    { immediate: true, flush: "post", deep: true }
  ), f = () => {
    u(), c();
  };
  return xt(f), {
    isSupported: i,
    stop: f
  };
}
function gs(n, t) {
  const e = shallowRef(t);
  return watch(
    Kn(n),
    (o, a) => {
      e.value = a;
    },
    { flush: "sync" }
  ), readonly(e);
}
function Hn(n) {
  const t = window.getComputedStyle(n);
  if (t.overflowX === "scroll" || t.overflowY === "scroll" || t.overflowX === "auto" && n.clientWidth < n.scrollWidth || t.overflowY === "auto" && n.clientHeight < n.scrollHeight)
    return true;
  {
    const e = n.parentNode;
    return !e || e.tagName === "BODY" ? false : Hn(e);
  }
}
function ys(n) {
  const t = n || window.event, e = t.target;
  return Hn(e) ? false : t.touches.length > 1 ? true : (t.preventDefault && t.preventDefault(), false);
}
function _s(n, t = false) {
  const e = ref(t);
  let o = null, a;
  watch(Kn(n), (i) => {
    if (i) {
      const u = i;
      a = u.style.overflow, e.value && (u.style.overflow = "hidden");
    }
  }, {
    immediate: true
  });
  const s = () => {
    const i = xe(n);
    !i || e.value || (lo && (o = Ee(
      i,
      "touchmove",
      (u) => {
        ys(u);
      },
      { passive: false }
    )), i.style.overflow = "hidden", e.value = true);
  }, l = () => {
    const i = xe(n);
    !i || !e.value || (lo && (o == null || o()), i.style.overflow = a, e.value = false);
  };
  return xt(l), computed({
    get() {
      return e.value;
    },
    set(i) {
      i ? s() : l();
    }
  });
}
function X(n, t, e, o = {}) {
  var a, s, l;
  const {
    clone: i = false,
    passive: u = false,
    eventName: d,
    deep: c = false,
    defaultValue: f,
    shouldEmit: p
  } = o, m = getCurrentInstance(), v = e || (m == null ? void 0 : m.emit) || ((a = m == null ? void 0 : m.$emit) == null ? void 0 : a.bind(m)) || ((l = (s = m == null ? void 0 : m.proxy) == null ? void 0 : s.$emit) == null ? void 0 : l.bind(m == null ? void 0 : m.proxy));
  let h2 = d;
  t || (t = "modelValue"), h2 = h2 || `update:${t.toString()}`;
  const g = (E) => i ? typeof i == "function" ? i(E) : fs(E) : E, $ = () => os(n[t]) ? g(n[t]) : f, O = (E) => {
    p ? p(E) && v(h2, E) : v(h2, E);
  };
  if (u) {
    const E = $(), S = ref(E);
    return watch(
      () => n[t],
      (T) => S.value = g(T)
    ), watch(
      S,
      (T) => {
        (T !== n[t] || c) && O(T);
      },
      { deep: c }
    ), S;
  } else
    return computed({
      get() {
        return $();
      },
      set(E) {
        O(E);
      }
    });
}
function Ge(n, t, e, o = {}) {
  if (!t)
    return null;
  const {
    arrowKeyOptions: a = "both",
    attributeName: s = "data-radix-vue-collection-item",
    itemsArray: l = [],
    loop: i = true,
    dir: u = "ltr",
    preventScroll: d = true,
    focus: c = false
  } = o, [f, p, m, v, h2, g] = [
    n.key === "ArrowRight",
    n.key === "ArrowLeft",
    n.key === "ArrowUp",
    n.key === "ArrowDown",
    n.key === "Home",
    n.key === "End"
  ], $ = m || v, O = f || p;
  if (!h2 && !g && (!$ && !O || a === "vertical" && O || a === "horizontal" && $))
    return null;
  const E = e ? Array.from(e.querySelectorAll(`[${s}]`)) : l;
  if (!E.length)
    return null;
  d && n.preventDefault();
  let S = null;
  return O || $ ? S = Wn(E, t, {
    goForward: $ ? v : u === "ltr" ? f : p,
    loop: i
  }) : h2 ? S = E.at(0) || null : g && (S = E.at(-1) || null), c && (S == null || S.focus()), S;
}
function Wn(n, t, { goForward: e, loop: o }, a = n.length) {
  if (--a === 0)
    return null;
  const s = n.indexOf(t), l = e ? s + 1 : s - 1;
  if (!o && (l < 0 || l >= n.length))
    return null;
  const i = (l + n.length) % n.length, u = n[i];
  return u ? u.hasAttribute("disabled") && u.getAttribute("disabled") !== "false" ? Wn(
    n,
    u,
    { goForward: e, loop: o },
    a
  ) : u : null;
}
async function bs(n, t, e = 500) {
  let o = true, a, s;
  const l = new Promise((d) => {
    s = d, a = setTimeout(() => {
      u(), d(o);
    }, e);
  });
  function i() {
    o = false, u(), clearTimeout(a), a = void 0, s(false);
  }
  function u() {
    t.removeEventListener("mouseleave", i);
  }
  return t.addEventListener("mouseleave", i), l;
}
function ws(n, t = {}) {
  const { delayEnter: e = 0, delayLeave: o = 0, disabled: a = false } = t;
  let s;
  function l(i) {
    if (s && (clearTimeout(s), s = void 0), toValue(a))
      return;
    const u = i ? e : o, d = i ? t.onHoverEnter : t.onHoverLeave;
    s = setTimeout(() => d == null ? void 0 : d(), u);
  }
  Ee(n, "mouseenter", () => l(true), { passive: true }), Ee(n, "mouseleave", () => l(false), { passive: true });
}
var zn = (n, t = 300) => {
  let e = true, o, a;
  const s = n.target, l = new Promise((d) => {
    a = d, o = setTimeout(() => {
      u(), d(e);
    }, t);
  });
  function i() {
    e = false, u(), clearTimeout(o), o = void 0, a(false);
  }
  function u() {
    s.removeEventListener("mouseenter", i);
  }
  return s.addEventListener("mouseenter", i), l;
};
function Un(n, t) {
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
var to = 0;
function Eo() {
  watchEffect((n) => {
    if (!Ae)
      return;
    const t = document.querySelectorAll("[data-radix-focus-guard]");
    document.body.insertAdjacentElement(
      "afterbegin",
      t[0] ?? hn()
    ), document.body.insertAdjacentElement(
      "beforeend",
      t[1] ?? hn()
    ), to++, n(() => {
      to === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((e) => e.remove()), to--;
    });
  });
}
function hn() {
  const n = document.createElement("span");
  return n.setAttribute("data-radix-focus-guard", ""), n.tabIndex = 0, n.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", n;
}
var Cs = "data-radix-vue-collection-item";
var se = (n) => {
  const t = n ?? Symbol();
  return { createCollection: (a) => {
    const s = ref([]);
    function l() {
      const i = le(a);
      return i ? s.value = Array.from(
        i.querySelectorAll(`[${Cs}]:not([data-disabled])`)
      ) : s.value = [];
    }
    return onBeforeUpdate(() => {
      s.value = [];
    }), onMounted(l), onUpdated(l), watch(() => a == null ? void 0 : a.value, l, { immediate: true }), provide(t, s), s;
  }, injectCollection: () => inject(t, ref([])) };
};
var J = (n) => {
  const t = getCurrentInstance(), e = t == null ? void 0 : t.type.emits, o = {};
  return e != null && e.length || console.warn(
    `No emitted event found. Please check component: ${t == null ? void 0 : t.type.__name}`
  ), e == null || e.forEach((a) => {
    o[toHandlerKey(camelize(a))] = (...s) => n(a, ...s);
  }), o;
};
var Es = (n) => {
  const t = ref(), e = computed(() => {
    var a;
    return ((a = t.value) == null ? void 0 : a.width) ?? 0;
  }), o = computed(() => {
    var a;
    return ((a = t.value) == null ? void 0 : a.height) ?? 0;
  });
  return onMounted(() => {
    const a = le(n);
    if (a) {
      t.value = { width: a.offsetWidth, height: a.offsetHeight };
      const s = new ResizeObserver((l) => {
        if (!Array.isArray(l) || !l.length)
          return;
        const i = l[0];
        let u, d;
        if ("borderBoxSize" in i) {
          const c = i.borderBoxSize, f = Array.isArray(c) ? c[0] : c;
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
    height: o
  };
};
var Os = wo(() => ({ count: ref(0) }));
var ne = (n) => {
  const { count: t } = Os();
  return n || t.value++, n || `radix-${t.value}`;
};
function Oo(n) {
  return n ? n.flatMap((t) => t.type === Fragment ? Oo(t.children) : [t]) : [];
}
function $s(n) {
  return n && (typeof n.type == "string" || typeof n.type == "object" || typeof n.type == "function");
}
var Ps = wo(() => ref(0));
var Rt = (n) => {
  const t = Ps(), e = _s(eo == null ? void 0 : eo.body, false), o = computed({
    get() {
      return e.value;
    },
    set(a) {
      if (Ae)
        if (a) {
          const s = window.innerWidth - document.documentElement.clientWidth;
          s > 0 && (document.body.style.paddingRight = s + "px"), nextTick(() => {
            document.body.style.pointerEvents = "none", e.value = true;
          });
        } else
          document.body.style.paddingRight = "", document.body.style.pointerEvents = "", e.value = false;
    }
  });
  return n && (t.value++, o.value = n), onBeforeUnmount(() => {
    n && (t.value--, t.value === 0 && (document.body.style.paddingRight = "", document.body.style.pointerEvents = ""));
  }), o;
};
var $o = (n) => {
  const t = Vn("", 1e3);
  return {
    search: t,
    handleTypeaheadSearch: (a) => {
      var f, p;
      t.value = t.value + a;
      const s = n.value, l = document.activeElement, i = ((p = (f = s.find((m) => m === l)) == null ? void 0 : f.textContent) == null ? void 0 : p.trim()) ?? "", u = s.map((m) => {
        var v;
        return ((v = m.textContent) == null ? void 0 : v.trim()) ?? "";
      }), d = Bs(u, t.value, i), c = s.find(
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
};
function Po(n, t) {
  return n.map((e, o) => n[(t + o) % n.length]);
}
function Bs(n, t, e) {
  const a = t.length > 1 && Array.from(t).every((d) => d === t[0]) ? t[0] : t, s = e ? n.indexOf(e) : -1;
  let l = Po(n, Math.max(s, 0));
  a.length === 1 && (l = l.filter((d) => d !== e));
  const u = l.find(
    (d) => d.toLowerCase().startsWith(a.toLowerCase())
  );
  return u !== e ? u : void 0;
}
var gn = (n) => {
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
};
var M = defineComponent({
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
  setup(n, { attrs: t, slots: e }) {
    const o = n.asChild ? "template" : n.as;
    return o !== "template" ? () => h(n.as, t, { default: e.default }) : () => {
      var l, i;
      if (!e.default)
        return null;
      const a = Oo(e.default());
      a.length !== 1 && gn(o);
      const s = a[0];
      if ($s(s) || gn(o), Object.keys(t).length > 0) {
        (l = s.props) == null || delete l.ref;
        const u = mergeProps(t, s.props ?? {});
        t.class && ((i = s.props) != null && i.class) && delete s.props.class;
        const d = cloneVNode(s, u);
        for (const c in u)
          c.startsWith("on") && (d.props || (d.props = {}), d.props[c] = u[c]);
        return d;
      }
      return s;
    };
  }
});
var V = () => {
  const n = ref(), t = computed(() => le(n));
  return {
    primitiveElement: n,
    currentElement: t
  };
};
var Bo = Symbol();
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
    const o = n, a = X(o, "open", e, {
      defaultValue: o.defaultOpen,
      passive: true
    }), s = X(o, "disabled");
    return provide(Bo, {
      contentId: ne(),
      disabled: s,
      open: a,
      onOpenToggle: () => {
        a.value = !a.value;
      }
    }), t({ open: a }), (l, i) => (openBlock(), createBlock(unref(M), {
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
    const t = n, e = inject(Bo);
    return (o, a) => {
      var s, l, i, u, d, c, f, p;
      return openBlock(), createBlock(unref(M), {
        type: o.as === "button" ? "button" : void 0,
        as: o.as,
        "as-child": t.asChild,
        "aria-controls": (s = unref(e)) == null ? void 0 : s.contentId,
        "aria-expanded": ((l = unref(e)) == null ? void 0 : l.open.value) || false,
        "data-state": (i = unref(e)) != null && i.open.value ? "open" : "closed",
        "data-disabled": (d = (u = unref(e)) == null ? void 0 : u.disabled) != null && d.value ? "" : void 0,
        disabled: (f = (c = unref(e)) == null ? void 0 : c.disabled) == null ? void 0 : f.value,
        onClick: (p = unref(e)) == null ? void 0 : p.onOpenToggle
      }, {
        default: withCtx(() => [
          renderSlot(o.$slots, "default")
        ]),
        _: 3
      }, 8, ["type", "as", "as-child", "aria-controls", "aria-expanded", "data-state", "data-disabled", "disabled", "onClick"]);
    };
  }
});
function As(n, t) {
  const e = ref({}), o = ref("none"), a = n.value ? "mounted" : "unmounted", { state: s, dispatch: l } = Un(a, {
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
    async (p, m) => {
      var h2;
      const v = m !== p;
      if (await nextTick(), v) {
        const g = o.value, $ = Pt(t.value);
        p ? l("MOUNT") : $ === "none" || ((h2 = e.value) == null ? void 0 : h2.display) === "none" ? l("UNMOUNT") : l(m && g !== $ ? "ANIMATION_OUT" : "UNMOUNT");
      }
    },
    { immediate: true }
  );
  const i = (p) => {
    const v = Pt(t.value).includes(
      p.animationName
    );
    p.target === t.value && v && l("ANIMATION_END");
  }, u = (p) => {
    p.target === t.value && (o.value = Pt(t.value));
  }, d = watch(
    t,
    (p, m) => {
      p ? (e.value = getComputedStyle(p), p.addEventListener("animationstart", u), p.addEventListener("animationcancel", i), p.addEventListener("animationend", i)) : (l("ANIMATION_END"), m == null || m.removeEventListener("animationstart", u), m == null || m.removeEventListener("animationcancel", i), m == null || m.removeEventListener("animationend", i));
    },
    { immediate: true }
  ), c = watch(s, () => {
    const p = Pt(t.value);
    o.value = s.value === "mounted" ? p : "none";
  });
  return onUnmounted(() => {
    d(), c();
  }), {
    isPresent: computed(
      () => ["mounted", "unmountSuspended"].includes(s.value)
    )
  };
}
function Pt(n) {
  return n && getComputedStyle(n).animationName || "none";
}
var re = defineComponent({
  __name: "Presence",
  props: {
    present: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(n, { expose: t }) {
    var p;
    const e = n, { present: o, forceMount: a } = toRefs(e), s = useSlots(), l = ref(), { isPresent: i } = As(o, l), u = {
      beforeMount(m) {
        m.hasAttribute("data-radix-popper-content-wrapper") ? l.value = m.firstChild : l.value = m;
      }
    };
    let d = (p = s.default) == null ? void 0 : p.call(s);
    d = Oo(d || []);
    const c = getCurrentInstance(), f = () => {
      var m, v, h2;
      if (d && (d == null ? void 0 : d.length) > 1) {
        const g = (m = c == null ? void 0 : c.parent) != null && m.type.name ? `<${c.parent.type.name} />` : "component";
        throw new Error(
          [
            `Detected an invalid children for \`${g}\` for  \`Presence\` component.`,
            "",
            "Note: Presence works similarly to `v-if` directly, but it waits for animation/transition to finished before unmounting. So it expect only one direct child of valid VNode type.",
            "You can apply a few solutions:",
            [
              "Provide a single child element so that `presence` directive attach correctly.rv",
              "Ensure the first child is an actual element instead of a raw text node or comment node."
            ].map(($) => `  - ${$}`).join(`
`)
          ].join(`
`)
        );
      }
      return a.value || o.value || i.value ? withDirectives((h2 = (v = s.default) == null ? void 0 : v.call(s)) == null ? void 0 : h2[0], [[u]]) : null;
    };
    return t({
      present: i
    }), (m, v) => (openBlock(), createBlock(f));
  }
});
var Is = {
  inheritAttrs: false
};
var Ds = defineComponent({
  ...Is,
  __name: "CollapsibleContent",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(n) {
    const t = n, e = inject(Bo), o = ref(), { primitiveElement: a, currentElement: s } = V(), l = ref(0), i = ref(0), u = computed(() => e == null ? void 0 : e.open.value), d = ref(u.value), c = ref();
    return watch(
      () => {
        var f;
        return [u.value, (f = o.value) == null ? void 0 : f.present];
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
        i.value = p.height, l.value = p.width, d.value || (f.style.transitionDuration = c.value.transitionDuration, f.style.animationName = c.value.animationName);
      },
      {
        immediate: true
      }
    ), onMounted(() => {
      requestAnimationFrame(() => {
        d.value = false;
      });
    }), (f, p) => (openBlock(), createBlock(unref(re), {
      ref_key: "presentRef",
      ref: o,
      present: unref(e).open.value,
      "force-mount": true
    }, {
      default: withCtx(() => {
        var m, v, h2, g, $;
        return [
          createVNode(unref(M), mergeProps({
            ref_key: "primitiveElement",
            ref: a
          }, f.$attrs, {
            "as-child": t.asChild,
            as: f.as,
            "data-state": (m = unref(e)) != null && m.open.value ? "open" : "closed",
            "data-disabled": (h2 = (v = unref(e)) == null ? void 0 : v.disabled) != null && h2.value ? "true" : void 0,
            id: (g = unref(e)) == null ? void 0 : g.contentId,
            hidden: !(($ = o.value) != null && $.present),
            style: {
              ["--radix-collapsible-content-height"]: `${i.value}px`,
              ["--radix-collapsible-content-width"]: `${l.value}px`
            }
          }), {
            default: withCtx(() => [
              renderSlot(f.$slots, "default")
            ]),
            _: 3
          }, 16, ["as-child", "as", "data-state", "data-disabled", "id", "hidden", "style"])
        ];
      }),
      _: 3
    }, 8, ["present"]));
  }
});
function Ms(n, t) {
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
function ks({ type: n, defaultValue: t }) {
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
function Yn(n, t) {
  const e = X(n, "modelValue", t, {
    defaultValue: ks(n),
    passive: true
  });
  watch(
    () => [n.type, n.modelValue],
    () => {
      const a = Ms(n.type, e.value);
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
        const l = s.findIndex((i) => i === a);
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
var ht = Symbol();
var Ir = defineComponent({
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
    const o = n, { modelValue: a, changeModelValue: s } = Yn(o, e), { primitiveElement: l, currentElement: i } = V();
    return provide(ht, {
      disabled: o.disabled,
      direction: o.dir,
      orientation: o.orientation,
      parentElement: i,
      isSingle: computed(() => o.type === "single"),
      collapsible: o.collapsible,
      modelValue: a,
      changeModelValue: s
    }), t({
      modelValue: a
    }), (u, d) => (openBlock(), createBlock(unref(M), {
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
var Dr = defineComponent({
  __name: "AccordionItem",
  props: {
    disabled: { type: Boolean },
    value: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(n, { expose: t }) {
    const e = n, o = inject(ht), a = computed(
      () => o != null && o.isSingle.value ? e.value === o.modelValue.value : Array.isArray(o == null ? void 0 : o.modelValue.value) && !!(o != null && o.modelValue.value.includes(e.value))
    ), s = computed(() => (o == null ? void 0 : o.disabled) || e.disabled || !!(o != null && o.isSingle.value) && a.value && !(o != null && o.collapsible)), l = computed(() => s.value ? "" : void 0), i = computed(
      () => a.value ? "open" : "closed"
      /* Closed */
    ), { primitiveElement: u, currentElement: d } = V();
    provide(Lt, {
      open: a,
      dataState: i,
      disabled: s,
      dataDisabled: l,
      triggerId: ne(),
      primitiveElement: u,
      currentElement: d,
      value: computed(() => e.value)
    });
    function c(f) {
      Ge(
        f,
        d.value,
        o == null ? void 0 : o.parentElement.value,
        {
          arrowKeyOptions: o == null ? void 0 : o.orientation,
          dir: o == null ? void 0 : o.direction,
          focus: true
        }
      );
    }
    return t({ open: a }), (f, p) => {
      var m;
      return openBlock(), createBlock(unref(Ss), {
        "data-orientation": (m = unref(o)) == null ? void 0 : m.orientation,
        "data-disabled": l.value,
        "data-state": i.value,
        disabled: s.value,
        open: a.value,
        onKeydown: withKeys(c, ["up", "down", "left", "right", "home", "end"]),
        "as-child": e.asChild
      }, {
        default: withCtx(() => [
          renderSlot(f.$slots, "default", { open: a.value })
        ]),
        _: 3
      }, 8, ["data-orientation", "data-disabled", "data-state", "disabled", "open", "onKeydown", "as-child"]);
    };
  }
});
var Mr = defineComponent({
  __name: "AccordionContent",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(n) {
    const t = n, e = inject(ht), o = inject(Lt);
    return (a, s) => {
      var l, i, u, d, c, f, p;
      return openBlock(), createBlock(unref(Ds), {
        role: "region",
        id: (l = unref(o)) == null ? void 0 : l.triggerId,
        open: (i = unref(o)) == null ? void 0 : i.open.value,
        hidden: !((u = unref(o)) != null && u.open.value),
        "as-child": t.asChild,
        "aria-labelledby": (d = unref(o)) == null ? void 0 : d.triggerId,
        "data-state": (c = unref(o)) == null ? void 0 : c.dataState.value,
        "data-disabled": (f = unref(o)) == null ? void 0 : f.dataDisabled.value,
        "data-orientation": (p = unref(e)) == null ? void 0 : p.orientation,
        style: normalizeStyle(`
      --radix-accordion-content-width: var(--radix-collapsible-content-width);
      --radix-accordion-content-height: var(--radix-collapsible-content-height);
    `)
      }, {
        default: withCtx(() => [
          renderSlot(a.$slots, "default")
        ]),
        _: 3
      }, 8, ["id", "open", "hidden", "as-child", "aria-labelledby", "data-state", "data-disabled", "data-orientation", "style"]);
    };
  }
});
var kr = defineComponent({
  __name: "AccordionHeader",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(n) {
    const t = n, e = inject(ht), o = inject(Lt);
    return (a, s) => {
      var l, i, u;
      return openBlock(), createBlock(unref(M), {
        as: t.as || "h3",
        "as-child": t.asChild,
        "data-orientation": (l = unref(e)) == null ? void 0 : l.orientation,
        "data-state": (i = unref(o)) == null ? void 0 : i.dataState.value,
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
var xr = defineComponent({
  __name: "AccordionTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(n) {
    const t = n, e = inject(ht), o = inject(Lt);
    function a() {
      o != null && o.disabled.value || o && (e == null || e.changeModelValue(o.value.value));
    }
    return (s, l) => {
      var i, u, d, c, f, p, m, v, h2, g;
      return openBlock(), createBlock(unref(Ts), {
        ref: (i = unref(o)) == null ? void 0 : i.primitiveElement,
        "data-radix-vue-collection-item": "",
        as: t.as,
        "as-child": t.asChild,
        "aria-controls": (u = unref(o)) == null ? void 0 : u.triggerId,
        "aria-disabled": ((d = unref(o)) == null ? void 0 : d.disabled.value) || void 0,
        "aria-expanded": ((c = unref(o)) == null ? void 0 : c.open.value) || false,
        "data-disabled": (f = unref(o)) == null ? void 0 : f.dataDisabled.value,
        "data-orientation": (p = unref(e)) == null ? void 0 : p.orientation,
        "data-state": (m = unref(o)) == null ? void 0 : m.dataState.value,
        disabled: (h2 = (v = unref(o)) == null ? void 0 : v.disabled) == null ? void 0 : h2.value,
        onClick: a,
        id: (g = unref(o)) == null ? void 0 : g.triggerId
      }, {
        default: withCtx(() => [
          renderSlot(s.$slots, "default")
        ]),
        _: 3
      }, 8, ["as", "as-child", "aria-controls", "aria-disabled", "aria-expanded", "data-disabled", "data-orientation", "data-state", "disabled", "id"]);
    };
  }
});
var xs = ["id", "checked", "name", "disabled", "required", "data-state"];
var Gn = Symbol();
var Rr = defineComponent({
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
    provide(Gn, {
      required: e.required,
      disabled: e.disabled,
      modelValue: toRef(() => e.modelValue)
    });
    function o() {
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
        }), null, 16, xs),
        renderSlot(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "value", "aria-checked", "data-state", "data-disabled"]));
  }
});
var Lr = defineComponent({
  __name: "CheckboxIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(n) {
    const t = n, e = inject(Gn);
    return (o, a) => {
      var s;
      return (s = unref(e)) != null && s.modelValue.value ? (openBlock(), createBlock(unref(M), {
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
var Rs = ["id", "name", "disabled", "required", "data-state", "data-disabled"];
var Xn = Symbol();
var Nr = defineComponent({
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
    const e = n, { disabled: o } = toRefs(e), a = X(e, "checked", t, {
      defaultValue: e.defaultChecked,
      passive: true
      // set passive to true so that if no props.modelValue was passed, it will still update
    }), s = () => {
      a.value = !a.value;
    };
    provide(Xn, {
      checked: a,
      toggleCheck: s,
      disabled: o
    });
    function l(i) {
      i.key === "Enter" && s();
    }
    return (i, u) => (openBlock(), createBlock(unref(M), {
      value: unref(a),
      role: "switch",
      "aria-checked": unref(a),
      "data-state": unref(a) ? "checked" : "unchecked",
      "data-disabled": unref(o) ? "" : void 0,
      "as-child": i.asChild,
      as: i.as,
      style: { position: "relative" }
    }, {
      default: withCtx(() => [
        renderSlot(i.$slots, "default"),
        createBaseVNode("input", mergeProps({
          type: "checkbox",
          id: i.id
        }, unref(a), {
          name: i.name,
          onClick: s,
          onKeydown: l,
          "aria-hidden": "true",
          disabled: unref(o),
          required: i.required,
          "data-state": unref(a) ? "checked" : "unchecked",
          "data-disabled": unref(o) ? "" : void 0,
          style: { opacity: "0", position: "absolute", inset: "0" }
        }), null, 16, Rs)
      ]),
      _: 3
    }, 8, ["value", "aria-checked", "data-state", "data-disabled", "as-child", "as"]));
  }
});
var Fr = defineComponent({
  __name: "SwitchThumb",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(n) {
    const t = inject(Xn);
    return (e, o) => {
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
  setup(n) {
    const t = n, e = ["horizontal", "vertical"];
    function o(i) {
      return e.includes(i);
    }
    const a = computed(
      () => o(t.orientation) ? t.orientation : "horizontal"
    ), s = computed(
      () => a.value === "vertical" ? t.orientation : void 0
    ), l = computed(
      () => t.decorative ? { role: "none" } : { "aria-orientation": s.value, role: "separator" }
    );
    return (i, u) => (openBlock(), createBlock(unref(M), mergeProps({
      as: i.as,
      "as-child": i.asChild,
      "data-orientation": a.value
    }, l.value), {
      default: withCtx(() => [
        renderSlot(i.$slots, "default")
      ]),
      _: 3
    }, 16, ["as", "as-child", "data-orientation"]));
  }
});
var Kr = defineComponent({
  __name: "Separator",
  props: {
    orientation: { default: "horizontal" },
    decorative: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(n) {
    const t = n;
    return (e, o) => (openBlock(), createBlock(qn, normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Vr = defineComponent({
  __name: "Label",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "label" }
  },
  setup(n) {
    const t = n;
    return (e, o) => (openBlock(), createBlock(unref(M), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Ls = defineComponent({
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
    const e = n, o = X(e, "pressed", t, {
      defaultValue: e.defaultValue,
      passive: true
    }), a = () => {
      o.value = !o.value;
    }, s = computed(() => o.value ? "on" : "off");
    return (l, i) => (openBlock(), createBlock(unref(M), {
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
var Ks = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function Vs(n, t) {
  return t !== "rtl" ? n : n === "ArrowLeft" ? "ArrowRight" : n === "ArrowRight" ? "ArrowLeft" : n;
}
function Hs(n, t, e) {
  const o = Vs(n.key, e);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(o)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(o)))
    return Ks[o];
}
function Jn(n) {
  const t = document.activeElement;
  for (const e of n)
    if (e === t || (e.focus(), document.activeElement !== t))
      return;
}
function Ws(n, t) {
  return n.map((e, o) => n[(t + o) % n.length]);
}
var Zn = Symbol();
var Qn = defineComponent({
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
  setup(n, { emit: t }) {
    const e = n, { loop: o, orientation: a, dir: s } = toRefs(e), l = ref(e.defaultCurrentTabStopId), i = ref(false), u = ref(false), d = ref(0), c = ds(), { primitiveElement: f, currentElement: p } = V(), { createCollection: m } = se("rovingFocus"), v = m(p), h2 = (g) => {
      const $ = !u.value;
      if (g.currentTarget && g.target === g.currentTarget && $ && !i.value) {
        const O = new CustomEvent(Ns, Fs);
        if (g.currentTarget.dispatchEvent(O), t("entryFocus", g), !O.defaultPrevented) {
          const E = v.value, S = E.find((A) => A === c.value), T = E.find(
            (A) => A.id === l.value
          ), D = [S, T, ...E].filter(
            Boolean
          );
          Jn(D);
        }
      }
      u.value = false;
    };
    return provide(Zn, {
      loop: o,
      dir: s,
      orientation: a,
      currentTabStopId: l,
      onItemFocus: (g) => {
        l.value = g;
      },
      onItemShiftTab: () => {
        i.value = true;
      },
      onFocusableItemAdd: () => {
        d.value++;
      },
      onFocusableItemRemove: () => {
        d.value--;
      }
    }), (g, $) => (openBlock(), createBlock(unref(M), {
      ref_key: "primitiveElement",
      ref: f,
      tabindex: i.value || d.value === 0 ? -1 : 0,
      "data-orientation": unref(a),
      as: g.as,
      "as-child": g.asChild,
      style: { outline: "none" },
      onMousedown: $[0] || ($[0] = (O) => u.value = true),
      onFocus: h2,
      onBlur: $[1] || ($[1] = (O) => i.value = false)
    }, {
      default: withCtx(() => [
        renderSlot(g.$slots, "default")
      ]),
      _: 3
    }, 8, ["tabindex", "data-orientation", "as", "as-child"]));
  }
});
var So = defineComponent({
  __name: "RovingFocusItem",
  props: {
    tabStopId: {},
    focusable: { type: Boolean, default: true },
    active: { type: Boolean, default: true },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(n) {
    const t = n, e = inject(Zn), o = ne(), a = computed(() => t.tabStopId || o), s = computed(
      () => (e == null ? void 0 : e.currentTabStopId.value) === a.value
    ), { injectCollection: l } = se("rovingFocus"), i = l(), { onFocusableItemAdd: u, onFocusableItemRemove: d } = e;
    onMounted(() => {
      t.focusable && u();
    }), onUnmounted(() => {
      t.focusable && d();
    });
    const c = (f) => {
      if (f.key === "Tab" && f.shiftKey) {
        e == null || e.onItemShiftTab();
        return;
      }
      if (f.target !== f.currentTarget)
        return;
      const p = Hs(
        f,
        e == null ? void 0 : e.orientation.value,
        e == null ? void 0 : e.dir.value
      );
      if (p !== void 0) {
        f.preventDefault();
        let m = [...i.value];
        if (p === "last")
          m.reverse();
        else if (p === "prev" || p === "next") {
          p === "prev" && m.reverse();
          const v = m.indexOf(
            f.currentTarget
          );
          m = e != null && e.loop.value ? Ws(m, v + 1) : m.slice(v + 1);
        }
        nextTick(() => Jn(m));
      }
    };
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
var jn = Symbol();
var zs = defineComponent({
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
    const e = n, { loop: o, rovingFocus: a, disabled: s, dir: l } = toRefs(e), { modelValue: i, changeModelValue: u } = Yn(e, t);
    return provide(jn, {
      type: e.type,
      modelValue: i,
      changeModelValue: u,
      dir: l,
      orientation: e.orientation,
      loop: o,
      rovingFocus: a,
      disabled: s
    }), (d, c) => (openBlock(), createBlock(resolveDynamicComponent(unref(a) ? unref(Qn) : unref(M)), {
      asChild: "",
      orientation: unref(a) ? d.orientation : void 0,
      dir: unref(l),
      loop: unref(a) ? unref(o) : void 0
    }, {
      default: withCtx(() => [
        createVNode(unref(M), {
          ref: "primitiveElement",
          role: "group",
          "as-child": d.asChild,
          as: d.as
        }, {
          default: withCtx(() => [
            renderSlot(d.$slots, "default", { modelValue: unref(i) })
          ]),
          _: 3
        }, 8, ["as-child", "as"])
      ]),
      _: 3
    }, 8, ["orientation", "dir", "loop"]));
  }
});
var Us = defineComponent({
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
    const t = n, e = inject(jn), o = computed(() => {
      var a;
      return ((a = e == null ? void 0 : e.disabled) == null ? void 0 : a.value) || t.disabled;
    });
    return (a, s) => {
      var l;
      return openBlock(), createBlock(resolveDynamicComponent((l = unref(e)) != null && l.rovingFocus.value ? unref(So) : unref(M)), {
        asChild: "",
        focusable: !o.value,
        active: a.pressed
      }, {
        default: withCtx(() => {
          var i, u, d, c;
          return [
            createVNode(unref(Ls), mergeProps(t, {
              disabled: o.value,
              pressed: ((i = unref(e)) == null ? void 0 : i.type) === "single" ? ((u = unref(e)) == null ? void 0 : u.modelValue.value) === a.value : (c = (d = unref(e)) == null ? void 0 : d.modelValue.value) == null ? void 0 : c.includes(a.value),
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
var Hr = defineComponent({
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
      createVNode(unref(M), {
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
var Nt = Symbol();
var Wr = defineComponent({
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
    const e = n, o = ref(), a = ref(), s = X(e, "modelValue", t, {
      defaultValue: e.defaultValue,
      passive: true
    });
    return provide(Nt, {
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
    }), (l, i) => (openBlock(), createBlock(unref(M), {
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
var zr = defineComponent({
  __name: "TabsList",
  props: {
    loop: { type: Boolean, default: true },
    asChild: { type: Boolean },
    as: {}
  },
  setup(n) {
    const t = n, { loop: e } = toRefs(t), o = inject(Nt), { primitiveElement: a, currentElement: s } = V();
    return onMounted(() => {
      o.parentElement.value = s.value, o.loop = e;
    }), (l, i) => {
      var u, d;
      return openBlock(), createBlock(unref(M), {
        role: "tablist",
        ref_key: "primitiveElement",
        ref: a,
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
var Ur = defineComponent({
  __name: "TabsContent",
  props: {
    value: {},
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(n) {
    const t = n, e = inject(Nt), o = computed(() => {
      var a;
      return ((a = e == null ? void 0 : e.modelValue) == null ? void 0 : a.value) === t.value ? "active" : "inactive";
    });
    return (a, s) => {
      var l, i, u;
      return ((i = (l = unref(e)) == null ? void 0 : l.modelValue) == null ? void 0 : i.value) === t.value ? (openBlock(), createBlock(unref(M), {
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
var Yr = defineComponent({
  __name: "TabsTrigger",
  props: {
    value: {},
    disabled: { type: Boolean, default: false },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(n) {
    const t = n, e = inject(Nt), { primitiveElement: o, currentElement: a } = V();
    function s(u) {
      e == null || e.changeModelValue(u);
    }
    function l(u) {
      const d = Ge(
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
    const i = computed(() => {
      var u, d, c;
      return (u = e == null ? void 0 : e.currentFocusedElement) != null && u.value ? ((c = e == null ? void 0 : e.currentFocusedElement) == null ? void 0 : c.value) === a.value ? "0" : "-1" : ((d = e == null ? void 0 : e.modelValue) == null ? void 0 : d.value) === t.value ? "0" : "-1";
    });
    return (u, d) => {
      var c, f, p, m, v;
      return openBlock(), createBlock(unref(M), {
        ref_key: "primitiveElement",
        ref: o,
        type: u.as === "button" ? "button" : void 0,
        as: u.as,
        "as-child": t.asChild,
        role: "tab",
        "aria-selected": ((f = (c = unref(e)) == null ? void 0 : c.modelValue) == null ? void 0 : f.value) === t.value ? "true" : "false",
        "data-state": ((m = (p = unref(e)) == null ? void 0 : p.modelValue) == null ? void 0 : m.value) === t.value ? "active" : "inactive",
        disabled: t.disabled,
        "data-disabled": t.disabled ? "" : void 0,
        tabindex: i.value,
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
var Ys = ["value", "aria-valuenow", "name"];
var To = Symbol();
var Gr = defineComponent({
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
    const e = n, { primitiveElement: o, currentElement: a } = V(), s = ref(), l = computed(() => e.modelValue ? e.modelValue < 50 ? (e.modelValue - 50) / 50 * 10 : (e.modelValue - 50) / 50 * -10 : 0);
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
    function i(m) {
      t("update:modelValue", p(m, e.step));
    }
    let u;
    function d(m) {
      s.value && s.value.focus(), m.preventDefault(), a.value && (u = a.value.getBoundingClientRect(), m.clientX - 10 - l.value > u.left && m.clientX - 10 - l.value < u.left + u.width && i(
        Math.round(
          (m.clientX - 10 - l.value - u.left) / u.width * 100
        )
      ), document.addEventListener("pointermove", c), document.addEventListener("pointerup", f));
    }
    const c = (m) => {
      s.value && s.value.focus(), m.clientX - 10 - l.value > u.left && m.clientX - 10 - l.value < u.left + u.width && i(
        (m.clientX - 10 - l.value - u.left) / u.width * 100
      ), m.clientX - 10 - l.value <= u.left && i(e.min), m.clientX - 10 - l.value >= u.left + u.width && i(e.max);
    }, f = (m) => {
      document.removeEventListener("pointermove", c), document.removeEventListener("pointerup", f);
    };
    function p(m, v) {
      const h2 = Math.floor(m / v);
      return m % v <= v / 2 ? h2 * v : (h2 + 1) * v;
    }
    return (m, v) => (openBlock(), createBlock(unref(M), {
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
        }, null, 8, Ys)
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
});
var Xr = defineComponent({
  __name: "SliderThumb",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(n) {
    const t = n, e = inject(To), { primitiveElement: o, currentElement: a } = V();
    onMounted(() => {
      e != null && e.thumbElement && (e.thumbElement.value = a.value);
    });
    let s = 2;
    function l(i) {
      var c;
      if (!e)
        return;
      (i.keyCode === 32 || i.key === "Enter") && i.preventDefault();
      const u = Number(e == null ? void 0 : e.step), d = Number((c = e.modelValue) == null ? void 0 : c.value);
      (i.key === "ArrowUp" || i.key === "ArrowRight") && (i.shiftKey ? (i.preventDefault(), d + s >= (e == null ? void 0 : e.max) ? e == null || e.changeModelValue(e == null ? void 0 : e.max) : d + s <= (e == null ? void 0 : e.min) ? e == null || e.changeModelValue(e == null ? void 0 : e.min) : e == null || e.changeModelValue(d + s)) : (i.preventDefault(), d + u >= (e == null ? void 0 : e.max) ? e == null || e.changeModelValue(e == null ? void 0 : e.max) : d + u <= (e == null ? void 0 : e.min) ? e == null || e.changeModelValue(e == null ? void 0 : e.min) : e == null || e.changeModelValue(d + u))), (i.key === "ArrowDown" || i.key === "ArrowLeft") && (i.shiftKey ? (i.preventDefault(), d - s >= (e == null ? void 0 : e.max) ? e == null || e.changeModelValue(e == null ? void 0 : e.max) : d - s <= (e == null ? void 0 : e.min) ? e == null || e.changeModelValue(e == null ? void 0 : e.min) : e == null || e.changeModelValue(d - s)) : (i.preventDefault(), d - u >= (e == null ? void 0 : e.max) ? e == null || e.changeModelValue(e == null ? void 0 : e.max) : d - u <= (e == null ? void 0 : e.min) ? e == null || e.changeModelValue(e == null ? void 0 : e.min) : e == null || e.changeModelValue(d - u)));
    }
    return (i, u) => {
      var d, c, f, p, m, v, h2, g, $;
      return openBlock(), createElementBlock("span", {
        style: normalizeStyle(`transform: translateX(-50%); position: absolute; left: calc(${(c = (d = unref(e)) == null ? void 0 : d.modelValue) == null ? void 0 : c.value}%)`)
      }, [
        createVNode(unref(M), mergeProps(i.$attrs, {
          ref_key: "primitiveElement",
          ref: o,
          role: "slider",
          tabindex: "0",
          "data-disabled": (f = unref(e)) == null ? void 0 : f.disabled,
          "data-orientation": (p = unref(e)) == null ? void 0 : p.orientation,
          "aria-valuenow": (v = (m = unref(e)) == null ? void 0 : m.modelValue) == null ? void 0 : v.value,
          "aria-valuemin": (h2 = unref(e)) == null ? void 0 : h2.min,
          "aria-valuemax": (g = unref(e)) == null ? void 0 : g.max,
          "aria-orientation": ($ = unref(e)) == null ? void 0 : $.orientation,
          "as-child": t.asChild,
          as: i.as,
          onKeydown: l
        }), null, 16, ["data-disabled", "data-orientation", "aria-valuenow", "aria-valuemin", "aria-valuemax", "aria-orientation", "as-child", "as"])
      ], 4);
    };
  }
});
var qr = defineComponent({
  __name: "SliderTrack",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(n) {
    const t = n;
    return (e, o) => (openBlock(), createBlock(unref(M), {
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
var Jr = defineComponent({
  __name: "SliderRange",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(n) {
    const t = n, e = inject(To);
    return (o, a) => {
      var s, l, i, u, d;
      return openBlock(), createBlock(unref(M), {
        "data-disabled": (s = unref(e)) == null ? void 0 : s.disabled,
        "data-orientation": (l = unref(e)) == null ? void 0 : l.orientation,
        "as-child": t.asChild,
        as: o.as,
        style: normalizeStyle(`left: 0%; right: ${(((i = unref(e)) == null ? void 0 : i.max) ?? 100) - (((d = (u = unref(e)) == null ? void 0 : u.modelValue) == null ? void 0 : d.value) ?? 0)}%`)
      }, null, 8, ["data-disabled", "data-orientation", "as-child", "as", "style"]);
    };
  }
});
var ea = Symbol();
var Zr = defineComponent({
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
  setup(n, { emit: t }) {
    const e = n, { primitiveElement: o, currentElement: a } = V(), s = X(e, "modelValue", t, {
      defaultValue: e.defaultValue,
      passive: true
    });
    return provide(ea, {
      modelValue: s,
      changeModelValue: (l) => {
        s.value = l, l && e.onValueChange && e.onValueChange(l);
      },
      parentElement: a,
      currentFocusedElement: ref(),
      disabled: ref(e.disabled),
      loop: ref(e.loop),
      orientation: ref(e.orientation),
      name: e.name,
      required: ref(e.required)
    }), (l, i) => (openBlock(), createBlock(unref(M), {
      ref_key: "primitiveElement",
      ref: o,
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
var Gs = ["value", "required", "disabled", "checked"];
var ta = Symbol();
var Qr = defineComponent({
  __name: "RadioGroupItem",
  props: {
    value: {},
    disabled: { type: Boolean, default: false },
    required: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(n) {
    const t = n, e = inject(ea), o = computed(() => (e == null ? void 0 : e.disabled.value) || t.disabled), a = computed(() => (e == null ? void 0 : e.required.value) || t.required), s = computed(() => {
      var f;
      return ((f = e == null ? void 0 : e.modelValue) == null ? void 0 : f.value) === t.value;
    });
    provide(ta, { disabled: o, checked: s });
    function l(f) {
      o.value || e == null || e.changeModelValue(f);
    }
    const { primitiveElement: i, currentElement: u } = V();
    function d(f) {
      if (o.value)
        return;
      const p = Ge(
        f,
        u.value,
        e == null ? void 0 : e.parentElement.value,
        {
          arrowKeyOptions: e == null ? void 0 : e.orientation.value,
          loop: e == null ? void 0 : e.loop.value
        }
      );
      p && (l(p == null ? void 0 : p.getAttribute("value")), e.currentFocusedElement.value = p, p.focus());
    }
    const c = computed(() => {
      var f, p;
      return (f = e == null ? void 0 : e.currentFocusedElement) != null && f.value ? ((p = e == null ? void 0 : e.currentFocusedElement) == null ? void 0 : p.value) === u.value ? "0" : "-1" : s.value ? "0" : "-1";
    });
    return (f, p) => {
      var m;
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(unref(M), mergeProps({
          type: f.as === "button" ? "button" : void 0,
          as: f.as,
          ref_key: "primitiveElement",
          ref: i,
          role: "radio",
          "data-radix-vue-collection-item": ""
        }, f.$attrs, {
          "as-child": t.asChild,
          disabled: o.value ? true : void 0,
          "data-state": s.value ? "checked" : "unchecked",
          "data-disabled": o.value ? "" : void 0,
          tabindex: c.value,
          value: t.value,
          name: (m = unref(e)) == null ? void 0 : m.name,
          onClick: p[0] || (p[0] = (v) => l(t.value)),
          onKeydown: d
        }), {
          default: withCtx(() => [
            renderSlot(f.$slots, "default")
          ]),
          _: 3
        }, 16, ["type", "as", "as-child", "disabled", "data-state", "data-disabled", "tabindex", "value", "name"]),
        createBaseVNode("input", {
          type: "radio",
          "aria-hidden": "true",
          tabindex: "-1",
          value: t.value,
          required: a.value,
          disabled: o.value,
          style: { transform: "translateX(-100%)", position: "absolute", "pointer-events": "none", opacity: "0", margin: "0px", width: "25px", height: "25px" },
          checked: s.value
        }, null, 8, Gs)
      ], 64);
    };
  }
});
var jr = defineComponent({
  __name: "RadioGroupIndicator",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(n) {
    const t = inject(ta);
    return (e, o) => {
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
var oa = Symbol();
var Ao = (n) => typeof n == "number";
function Xs(n, t) {
  return n === null || Ao(n) && !isNaN(n) && n <= t && n >= 0 ? n : (console.error(`Invalid prop \`value\` of value \`${n}\` supplied to \`ProgressRoot\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${rt} if no \`max\` prop is set)
  - \`null\` if the progress is indeterminate.

Defaulting to \`null\`.`), null);
}
var rt = 100;
function qs(n) {
  return Ao(n) && !isNaN(n) && n > 0 ? n : (console.error(
    `Invalid prop \`max\` of value \`${n}\` supplied to \`ProgressRoot\`. Only numbers greater than 0 are valid max values. Defaulting to \`${rt}\`.`
  ), rt);
}
var ei = defineComponent({
  __name: "ProgressRoot",
  props: {
    modelValue: {},
    max: { default: rt },
    getValueLabel: { type: Function, default: (n, t) => `${Math.round(n / t * rt)}%` },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue", "update:max"],
  setup(n, { emit: t }) {
    const e = n, o = X(e, "modelValue", t, {
      passive: true
    }), a = X(e, "max", t, {
      passive: true
    });
    watch(
      () => o.value,
      async (l) => {
        const i = Xs(l, e.max);
        i !== l && (await nextTick(), o.value = i);
      },
      { immediate: true }
    ), watch(
      () => e.max,
      (l) => {
        const i = qs(e.max);
        i !== l && (a.value = i);
      },
      { immediate: true }
    );
    const s = computed(() => o.value ? o.value === a.value ? "complete" : "loading" : "indeterminate");
    return provide(oa, {
      modelValue: o,
      max: a,
      progressState: s
    }), (l, i) => (openBlock(), createBlock(unref(M), {
      asChild: e.asChild,
      as: l.as,
      "aria-valuemax": unref(a),
      "aria-valuemin": 0,
      "aria-valuenow": Ao(unref(o)) ? unref(o) : void 0,
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
    }, 8, ["asChild", "as", "aria-valuemax", "aria-valuenow", "aria-valuetext", "data-state", "data-value", "data-max"]));
  }
});
var ti = defineComponent({
  __name: "ProgressIndicator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(n) {
    const t = n, e = inject(oa);
    return (o, a) => {
      var s, l, i, u;
      return openBlock(), createBlock(unref(M), mergeProps(t, {
        "data-state": (s = unref(e)) == null ? void 0 : s.progressState.value,
        "data-value": ((i = (l = unref(e)) == null ? void 0 : l.modelValue) == null ? void 0 : i.value) ?? void 0,
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
var be = Symbol();
var Js = defineComponent({
  __name: "DialogRoot",
  props: {
    open: { type: Boolean, default: void 0 },
    defaultOpen: { type: Boolean, default: false },
    modal: { type: Boolean, default: true }
  },
  emits: ["update:open"],
  setup(n, { emit: t }) {
    const e = n, o = X(e, "open", t, {
      defaultValue: e.defaultOpen,
      passive: true
    }), a = ref(), s = ref(), { modal: l } = toRefs(e);
    return provide(be, {
      open: o,
      modal: l,
      openModal: () => {
        o.value = true;
      },
      onOpenChange: (i) => {
        o.value = i;
      },
      onOpenToggle: () => {
        o.value = !o.value;
      },
      contentId: ne(),
      titleId: ne(),
      descriptionId: ne(),
      triggerElement: a,
      contentElement: s
    }), (i, u) => renderSlot(i.$slots, "default");
  }
});
var Zs = defineComponent({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(n) {
    const t = n, e = inject(be), { primitiveElement: o, currentElement: a } = V();
    return onMounted(() => {
      e.triggerElement = a;
    }), (s, l) => {
      var i, u, d, c;
      return openBlock(), createBlock(unref(M), mergeProps({
        ref_key: "primitiveElement",
        ref: o
      }, t, {
        type: s.as === "button" ? "button" : void 0,
        "aria-haspopup": "dialog",
        "aria-expanded": ((i = unref(e)) == null ? void 0 : i.open.value) || false,
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
  setup(n) {
    const t = n;
    return (e, o) => (openBlock(), createBlock(Teleport, normalizeProps(guardReactiveProps(t)), [
      renderSlot(e.$slots, "default")
    ], 16));
  }
});
var js = "dismissableLayer.pointerDownOutside";
var el = "dismissableLayer.focusOutside";
function na(n, t) {
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
function tl(n, t) {
  var s;
  const e = ((s = t == null ? void 0 : t.value) == null ? void 0 : s.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), o = ref(false), a = ref(() => {
  });
  return watchEffect((l) => {
    if (!Ae)
      return;
    const i = (d) => {
      if (t != null && t.value) {
        if (na(t.value, d.target)) {
          o.value = false;
          return;
        }
        if (d.target && !o.value) {
          let c = function() {
            aa(
              js,
              n,
              f
            );
          };
          const f = { originalEvent: d };
          d.pointerType === "touch" ? (e.removeEventListener("click", a.value), a.value = c, e.addEventListener("click", a.value, {
            once: true
          })) : c();
        } else
          e.removeEventListener("click", a.value);
        o.value = false;
      }
    }, u = window.setTimeout(() => {
      e.addEventListener("pointerdown", i);
    }, 0);
    l(() => {
      window.clearTimeout(u), e.removeEventListener("pointerdown", i), e.removeEventListener("click", a.value);
    });
  }), {
    onPointerDownCapture: () => o.value = true
  };
}
function ol(n, t) {
  var a;
  const e = ((a = t == null ? void 0 : t.value) == null ? void 0 : a.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), o = ref(false);
  return watchEffect(async (s) => {
    if (!Ae)
      return;
    const l = async (i) => {
      t != null && t.value && (na(t.value, i.target) || i.target && !o.value && aa(
        el,
        n,
        { originalEvent: i }
      ));
    };
    e.addEventListener("focusin", l), s(() => e.removeEventListener("focusin", l));
  }), {
    onFocusCapture: () => o.value = true,
    onBlurCapture: () => o.value = false
  };
}
function aa(n, t, e) {
  const o = e.originalEvent.target, a = new CustomEvent(n, {
    bubbles: false,
    cancelable: true,
    detail: e
  });
  t && o.addEventListener(n, t, { once: true }), o.dispatchEvent(a);
}
var gt = defineComponent({
  __name: "DismissableLayer",
  props: {
    disableOutsidePointerEvents: { type: Boolean, default: false },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss"],
  setup(n, { emit: t }) {
    const e = n, { primitiveElement: o, currentElement: a } = V(), s = computed(
      () => {
        var v;
        return ((v = a.value) == null ? void 0 : v.ownerDocument) ?? globalThis.document;
      }
    ), l = ref(/* @__PURE__ */ new Set()), i = ref(/* @__PURE__ */ new Set());
    provide("dismissable", {
      layers: l,
      layersWithOutsidePointerEventsDisabled: i
    });
    const u = inject("dismissable", {
      layers: l,
      layersWithOutsidePointerEventsDisabled: i
    });
    watch(
      () => u,
      () => {
        u != null && u.layers.value && (l.value = u.layers.value), u != null && u.layersWithOutsidePointerEventsDisabled.value && (i.value = u.layersWithOutsidePointerEventsDisabled.value);
      },
      { immediate: true, deep: true }
    );
    const d = computed(() => a.value ? Array.from(l.value).indexOf(a.value) : -1), c = computed(() => i.value.size > 0), f = computed(() => {
      const v = Array.from(l.value), [h2] = [...i.value].slice(-1), g = v.indexOf(h2);
      return d.value >= g;
    }), p = tl(async (v) => {
      f.value && (t("pointerDownOutside", v), t("interactOutside", v), await nextTick(), v.defaultPrevented || t("dismiss"));
    }, a), m = ol((v) => {
      t("focusOutside", v), t("interactOutside", v), v.defaultPrevented || t("dismiss");
    }, a);
    return us("Escape", (v) => {
      d.value === l.value.size - 1 && (t("escapeKeyDown", v), v.defaultPrevented || t("dismiss"));
    }), watchEffect((v) => {
      if (!a.value)
        return;
      let h2;
      e.disableOutsidePointerEvents && (i.value.size === 0 && (h2 = s.value.body.style.pointerEvents, s.value.body.style.pointerEvents = "none"), i.value.add(a.value)), l.value.add(a.value), v(() => {
        (e.disableOutsidePointerEvents || i.value.size === 1) && (s.value.body.style.pointerEvents = h2);
      });
    }), watchEffect((v) => {
      v(() => {
        a.value && (l.value.delete(a.value), i.value.delete(a.value));
      });
    }), (v, h2) => (openBlock(), createBlock(unref(M), {
      ref_key: "primitiveElement",
      ref: o,
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
var oo = "focusScope.autoFocusOnMount";
var no = "focusScope.autoFocusOnUnmount";
var yn = { bubbles: false, cancelable: true };
function nl(n, { select: t = false } = {}) {
  const e = document.activeElement;
  for (const o of n)
    if (ke(o, { select: t }), document.activeElement !== e)
      return;
}
function al(n) {
  const t = sa(n), e = _n(t, n), o = _n(t.reverse(), n);
  return [e, o];
}
function sa(n) {
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
function _n(n, t) {
  for (const e of n)
    if (!sl(e, { upTo: t }))
      return e;
}
function sl(n, { upTo: t }) {
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
function ll(n) {
  return n instanceof HTMLInputElement && "select" in n;
}
function ke(n, { select: t = false } = {}) {
  if (n && n.focus) {
    const e = document.activeElement;
    n.focus({ preventScroll: true }), n !== e && ll(n) && t && n.select();
  }
}
var rl = wo(() => ref([]));
function il() {
  const n = rl();
  return {
    add(t) {
      const e = n.value[0];
      t !== e && (e == null || e.pause()), n.value = bn(n.value, t), n.value.unshift(t);
    },
    remove(t) {
      var e;
      n.value = bn(n.value, t), (e = n.value[0]) == null || e.resume();
    }
  };
}
function bn(n, t) {
  const e = [...n], o = e.indexOf(t);
  return o !== -1 && e.splice(o, 1), e;
}
function ul(n) {
  return n.filter((t) => t.tagName !== "A");
}
var Ft = defineComponent({
  __name: "FocusScope",
  props: {
    loop: { type: Boolean, default: false },
    trapped: { type: Boolean, default: false },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["mountAutoFocus", "unmountAutoFocus"],
  setup(n, { emit: t }) {
    const e = n, { primitiveElement: o, currentElement: a } = V(), s = ref(null), l = il(), i = reactive({
      paused: false,
      pause() {
        this.paused = true;
      },
      resume() {
        this.paused = false;
      }
    });
    watchEffect((d) => {
      if (!Ae)
        return;
      const c = a.value;
      if (!e.trapped)
        return;
      function f(h2) {
        if (i.paused || !c)
          return;
        const g = h2.target;
        c.contains(g) ? s.value = g : ke(s.value, { select: true });
      }
      function p(h2) {
        if (i.paused || !c)
          return;
        const g = h2.relatedTarget;
        g !== null && (c.contains(g) || ke(s.value, { select: true }));
      }
      function m(h2) {
        if (document.activeElement === document.body)
          for (const $ of h2)
            $.removedNodes.length > 0 && ke(c);
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
      l.add(i);
      const f = document.activeElement;
      if (!c.contains(f)) {
        const m = new CustomEvent(oo, yn);
        c.addEventListener(
          oo,
          (v) => t("mountAutoFocus", v)
        ), c.dispatchEvent(m), m.defaultPrevented || (nl(ul(sa(c)), {
          select: true
        }), document.activeElement === f && ke(c));
      }
      d(() => {
        c.removeEventListener(
          oo,
          (h2) => t("mountAutoFocus", h2)
        );
        const m = new CustomEvent(no, yn), v = (h2) => {
          t("unmountAutoFocus", h2);
        };
        c.addEventListener(no, v), c.dispatchEvent(m), setTimeout(() => {
          m.defaultPrevented || ke(f ?? document.body, { select: true }), c.removeEventListener(no, v), l.remove(i);
        }, 0);
      });
    });
    const u = (d) => {
      if (!e.loop && !e.trapped || i.paused)
        return;
      const c = d.key === "Tab" && !d.altKey && !d.ctrlKey && !d.metaKey, f = document.activeElement;
      if (c && f) {
        const p = d.currentTarget, [m, v] = al(p);
        m && v ? !d.shiftKey && f === v ? (d.preventDefault(), e.loop && ke(m, { select: true })) : d.shiftKey && f === m && (d.preventDefault(), e.loop && ke(v, { select: true })) : f === p && d.preventDefault();
      }
    };
    return (d, c) => (openBlock(), createBlock(unref(M), {
      ref_key: "primitiveElement",
      ref: o,
      tabIndex: "-1",
      onKeydown: u,
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
var dl = "menu.itemSelect";
var ro = ["Enter", " "];
var cl = ["ArrowDown", "PageUp", "Home"];
var la = ["ArrowUp", "PageDown", "End"];
var pl = [...cl, ...la];
var fl = {
  ltr: [...ro, "ArrowRight"],
  rtl: [...ro, "ArrowLeft"]
};
var ml = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
};
function Io(n) {
  return n ? "open" : "closed";
}
function At(n) {
  return n === "indeterminate";
}
function Do(n) {
  return At(n) ? "indeterminate" : n ? "checked" : "unchecked";
}
function io(n) {
  const t = document.activeElement;
  for (const e of n)
    if (e === t || (e.focus(), document.activeElement !== t))
      return;
}
function vl(n, t) {
  const { x: e, y: o } = n;
  let a = false;
  for (let s = 0, l = t.length - 1; s < t.length; l = s++) {
    const i = t[s].x, u = t[s].y, d = t[l].x, c = t[l].y;
    u > o != c > o && e < (d - i) * (o - u) / (c - u) + i && (a = !a);
  }
  return a;
}
function hl(n, t) {
  if (!t)
    return false;
  const e = { x: n.clientX, y: n.clientY };
  return vl(e, t);
}
function it(n) {
  return n.pointerType === "mouse";
}
var ra = defineComponent({
  __name: "DialogContentImpl",
  props: {
    forceMount: { type: Boolean },
    trapFocus: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["openAutoFocus", "closeAutoFocus"],
  setup(n, { emit: t }) {
    const e = n, o = inject(be);
    return (a, s) => (openBlock(), createBlock(unref(Ft), {
      asChild: "",
      loop: "",
      trapped: e.trapFocus,
      onMountAutoFocus: s[1] || (s[1] = (l) => t("openAutoFocus", l)),
      onUnmountAutoFocus: s[2] || (s[2] = (l) => t("closeAutoFocus", l))
    }, {
      default: withCtx(() => [
        createVNode(unref(gt), mergeProps(a.$attrs, {
          as: a.as,
          "as-child": a.asChild,
          "disable-outside-pointer-events": a.disableOutsidePointerEvents,
          role: "dialog",
          id: unref(o).contentId,
          "aria-describedby": unref(o).descriptionId,
          "aria-labelledby": unref(o).titleId,
          "data-state": unref(Io)(unref(o).open.value),
          onDismiss: s[0] || (s[0] = (l) => {
            var i;
            return (i = unref(o)) == null ? void 0 : i.onOpenChange(false);
          })
        }), {
          default: withCtx(() => [
            renderSlot(a.$slots, "default")
          ]),
          _: 3
        }, 16, ["as", "as-child", "disable-outside-pointer-events", "id", "aria-describedby", "aria-labelledby", "data-state"])
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
  emits: ["openAutoFocus", "closeAutoFocus"],
  setup(n, { emit: t }) {
    const e = n, o = inject(be), a = J(t);
    return (s, l) => {
      var i;
      return openBlock(), createBlock(ra, mergeProps({ ...e, ...unref(a) }, {
        "trap-focus": (i = unref(o)) == null ? void 0 : i.open.value,
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
var yl = defineComponent({
  __name: "DialogContentNonModal",
  props: {
    forceMount: { type: Boolean },
    trapFocus: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["openAutoFocus", "closeAutoFocus"],
  setup(n, { emit: t }) {
    const e = n, o = J(t), a = inject(be), s = ref(false), l = ref(false);
    return (i, u) => (openBlock(), createBlock(ra, mergeProps({ ...e, ...unref(o) }, {
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
        renderSlot(i.$slots, "default")
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
  emits: ["openAutoFocus", "closeAutoFocus"],
  setup(n, { emit: t }) {
    const e = n, o = inject(be), a = J(t);
    return (s, l) => (openBlock(), createBlock(unref(re), {
      present: unref(o).open.value
    }, {
      default: withCtx(() => {
        var i;
        return [
          (i = unref(o)) != null && i.modal.value ? (openBlock(), createBlock(gl, mergeProps({ key: 0 }, { ...e, ...unref(a), ...s.$attrs }, {
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
  setup(n) {
    const t = inject(be), e = Rt();
    return watch(
      () => t == null ? void 0 : t.open.value,
      (o) => e.value = o ?? false
    ), (o, a) => (openBlock(), createBlock(unref(re), {
      present: o.forceMount || unref(t).open.value
    }, {
      default: withCtx(() => {
        var s;
        return [
          createVNode(unref(M), mergeProps(o.$attrs, {
            as: o.as,
            asChild: o.asChild,
            "data-state": (s = unref(t)) != null && s.open.value ? "open" : "closed",
            style: { "pointer-events": "auto" },
            "data-aria-hidden": "true",
            "aria-hidden": "true"
          }), {
            default: withCtx(() => [
              renderSlot(o.$slots, "default")
            ]),
            _: 3
          }, 16, ["as", "asChild", "data-state"])
        ];
      }),
      _: 3
    }, 8, ["present"]));
  }
});
var ia = defineComponent({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(n) {
    const t = n, e = inject(be);
    return (o, a) => (openBlock(), createBlock(unref(M), mergeProps(t, {
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
var wl = defineComponent({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: { default: "h2" }
  },
  setup(n) {
    const t = n, e = inject(be);
    return (o, a) => {
      var s;
      return openBlock(), createBlock(unref(M), mergeProps(t, {
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
var Cl = defineComponent({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: { default: "p" }
  },
  setup(n) {
    const t = n, e = inject(be);
    return (o, a) => {
      var s;
      return openBlock(), createBlock(unref(M), mergeProps(t, {
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
var oi = defineComponent({
  __name: "AlertDialogRoot",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean }
  },
  emits: ["update:open"],
  setup(n, { emit: t }) {
    const e = n, o = J(t);
    return (a, s) => (openBlock(), createBlock(unref(Js), mergeProps({ ...e, ...unref(o) }, { modal: true }), {
      default: withCtx(() => [
        renderSlot(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var ni = defineComponent({
  __name: "AlertDialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(n) {
    const t = n;
    return (e, o) => (openBlock(), createBlock(unref(Zs), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var ai = defineComponent({
  __name: "AlertDialogPortal",
  props: {
    to: {},
    disabled: { type: Boolean }
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
var ua = Symbol();
var si = defineComponent({
  __name: "AlertDialogContent",
  props: {
    forceMount: { type: Boolean },
    trapFocus: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["openAutoFocus", "closeAutoFocus"],
  setup(n, { emit: t }) {
    const e = n, o = J(t), a = ref();
    return provide(ua, {
      onCancelElementChange: (s) => {
        a.value = s;
      }
    }), (s, l) => (openBlock(), createBlock(unref(_l), mergeProps({ ...e, ...unref(o) }, {
      role: "alertdialog",
      onPointerDownOutside: l[0] || (l[0] = withModifiers(() => {
      }, ["prevent"])),
      onInteractOutside: l[1] || (l[1] = withModifiers(() => {
      }, ["prevent"])),
      onOpenAutoFocus: l[2] || (l[2] = () => {
        nextTick(() => {
          var i;
          (i = a.value) == null || i.focus({
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
var li = defineComponent({
  __name: "AlertDialogOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(n) {
    const t = n;
    return (e, o) => (openBlock(), createBlock(unref(bl), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var ri = defineComponent({
  __name: "AlertDialogCancel",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(n) {
    const t = n, e = inject(ua), { primitiveElement: o, currentElement: a } = V();
    return onMounted(() => {
      e.onCancelElementChange(a.value);
    }), (s, l) => (openBlock(), createBlock(unref(ia), mergeProps(t, {
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
var ii = defineComponent({
  __name: "AlertDialogTitle",
  props: {
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
var ui = defineComponent({
  __name: "AlertDialogDescription",
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
var di = defineComponent({
  __name: "AlertDialogAction",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(n) {
    const t = n;
    return (e, o) => (openBlock(), createBlock(unref(ia), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Mo = Symbol();
var ci = defineComponent({
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
    return provide(Mo, { orientation: e, dir: o }), (a, s) => (openBlock(), createBlock(unref(Qn), {
      asChild: "",
      orientation: unref(e),
      dir: unref(o),
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
  setup(n) {
    const t = n;
    return (e, o) => (openBlock(), createBlock(unref(So), {
      asChild: "",
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
var pi = defineComponent({
  __name: "ToolbarLink",
  props: {
    asChild: { type: Boolean },
    as: { default: "a" }
  },
  setup(n) {
    const t = n;
    return (e, o) => (openBlock(), createBlock(unref(So), {
      asChild: "",
      focusable: ""
    }, {
      default: withCtx(() => [
        createVNode(unref(M), mergeProps(t, {
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
var fi = defineComponent({
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
    const e = n, o = inject(Mo), a = J(t);
    return (s, l) => {
      var i, u;
      return openBlock(), createBlock(unref(zs), mergeProps({ ...e, ...unref(a) }, {
        "data-orientation": (i = unref(o)) == null ? void 0 : i.orientation.value,
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
var mi = defineComponent({
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
    return (e, o) => (openBlock(), createBlock(El, { asChild: "" }, {
      default: withCtx(() => [
        createVNode(unref(Us), normalizeProps(guardReactiveProps(t)), {
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
var vi = defineComponent({
  __name: "ToolbarSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(n) {
    const t = n, e = inject(Mo);
    return (o, a) => {
      var s;
      return openBlock(), createBlock(qn, {
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
var ko = Symbol();
var hi = defineComponent({
  __name: "AvatarRoot",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(n) {
    const t = n, e = ref("loading");
    return provide(ko, {
      imageLoadingStatus: e
    }), (o, a) => (openBlock(), createBlock(unref(M), {
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
function Ol(n) {
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
var gi = defineComponent({
  __name: "AvatarImage",
  props: {
    asChild: { type: Boolean },
    as: { default: "img" }
  },
  emits: ["loadingStatusChange"],
  setup(n, { emit: t }) {
    const e = n, o = inject(ko), a = useAttrs().src, s = Ol(a);
    return watch(
      s,
      (l) => {
        t("loadingStatusChange", l), l !== "idle" && (o.imageLoadingStatus.value = l);
      },
      { immediate: true }
    ), (l, i) => unref(s) === "loaded" ? (openBlock(), createBlock(unref(M), {
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
var yi = defineComponent({
  __name: "AvatarFallback",
  props: {
    delayMs: { default: 0 },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(n) {
    const t = n, e = inject(ko);
    let o = ref(false), a;
    return t.delayMs ? a = setTimeout(() => {
      o.value = true, clearTimeout(a);
    }, t.delayMs) : o.value = true, (s, l) => {
      var i;
      return unref(o) && ((i = unref(e)) == null ? void 0 : i.imageLoadingStatus.value) !== "loaded" ? (openBlock(), createBlock(unref(M), {
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
var xo = Symbol();
var tt = defineComponent({
  __name: "PopperRoot",
  setup(n) {
    const t = ref();
    return provide(xo, {
      anchor: t,
      onAnchorChange: (e) => {
        t.value = e;
      }
    }), (e, o) => renderSlot(e.$slots, "default");
  }
});
var ot = defineComponent({
  __name: "PopperAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(n) {
    const t = n, { primitiveElement: e, currentElement: o } = V(), a = inject(xo);
    return watch(o, () => {
      a == null || a.onAnchorChange(t.element ?? o.value);
    }), (s, l) => (openBlock(), createBlock(unref(M), {
      as: s.as,
      "as-child": s.asChild,
      ref_key: "primitiveElement",
      ref: e
    }, {
      default: withCtx(() => [
        renderSlot(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
});
function $l(n) {
  return n !== null;
}
var Pl = (n) => ({
  name: "transformOrigin",
  options: n,
  fn(t) {
    var g, $, O;
    const { placement: e, rects: o, middlewareData: a } = t, l = ((g = a.arrow) == null ? void 0 : g.centerOffset) !== 0, i = l ? 0 : n.arrowWidth, u = l ? 0 : n.arrowHeight, [d, c] = uo(e), f = { start: "0%", center: "50%", end: "100%" }[c], p = ((($ = a.arrow) == null ? void 0 : $.x) ?? 0) + i / 2, m = (((O = a.arrow) == null ? void 0 : O.y) ?? 0) + u / 2;
    let v = "", h2 = "";
    return d === "bottom" ? (v = l ? f : `${p}px`, h2 = `${-u}px`) : d === "top" ? (v = l ? f : `${p}px`, h2 = `${o.floating.height + u}px`) : d === "right" ? (v = `${-u}px`, h2 = l ? f : `${m}px`) : d === "left" && (v = `${o.floating.width + u}px`, h2 = l ? f : `${m}px`), { data: { x: v, y: h2 } };
  }
});
function uo(n) {
  const [t, e = "center"] = n.split("-");
  return [t, e];
}
function nt(n) {
  return n.split("-")[1];
}
function Ro(n) {
  return n === "y" ? "height" : "width";
}
function Oe(n) {
  return n.split("-")[0];
}
function Xe(n) {
  return ["top", "bottom"].includes(Oe(n)) ? "x" : "y";
}
function wn(n, t, e) {
  let { reference: o, floating: a } = n;
  const s = o.x + o.width / 2 - a.width / 2, l = o.y + o.height / 2 - a.height / 2, i = Xe(t), u = Ro(i), d = o[u] / 2 - a[u] / 2, c = i === "x";
  let f;
  switch (Oe(t)) {
    case "top":
      f = { x: s, y: o.y - a.height };
      break;
    case "bottom":
      f = { x: s, y: o.y + o.height };
      break;
    case "right":
      f = { x: o.x + o.width, y: l };
      break;
    case "left":
      f = { x: o.x - a.width, y: l };
      break;
    default:
      f = { x: o.x, y: o.y };
  }
  switch (nt(t)) {
    case "start":
      f[i] -= d * (e && c ? -1 : 1);
      break;
    case "end":
      f[i] += d * (e && c ? -1 : 1);
  }
  return f;
}
var Bl = async (n, t, e) => {
  const { placement: o = "bottom", strategy: a = "absolute", middleware: s = [], platform: l } = e, i = s.filter(Boolean), u = await (l.isRTL == null ? void 0 : l.isRTL(t));
  let d = await l.getElementRects({ reference: n, floating: t, strategy: a }), { x: c, y: f } = wn(d, o, u), p = o, m = {}, v = 0;
  for (let h2 = 0; h2 < i.length; h2++) {
    const { name: g, fn: $ } = i[h2], { x: O, y: E, data: S, reset: T } = await $({ x: c, y: f, initialPlacement: o, placement: p, strategy: a, middlewareData: m, rects: d, platform: l, elements: { reference: n, floating: t } });
    c = O ?? c, f = E ?? f, m = { ...m, [g]: { ...m[g], ...S } }, T && v <= 50 && (v++, typeof T == "object" && (T.placement && (p = T.placement), T.rects && (d = T.rects === true ? await l.getElementRects({ reference: n, floating: t, strategy: a }) : T.rects), { x: c, y: f } = wn(d, p, u)), h2 = -1);
  }
  return { x: c, y: f, placement: p, strategy: a, middlewareData: m };
};
function Se(n, t) {
  return typeof n == "function" ? n(t) : n;
}
function da(n) {
  return typeof n != "number" ? function(t) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...t };
  }(n) : { top: n, right: n, bottom: n, left: n };
}
function It(n) {
  return { ...n, top: n.y, left: n.x, right: n.x + n.width, bottom: n.y + n.height };
}
async function ut(n, t) {
  var e;
  t === void 0 && (t = {});
  const { x: o, y: a, platform: s, rects: l, elements: i, strategy: u } = n, { boundary: d = "clippingAncestors", rootBoundary: c = "viewport", elementContext: f = "floating", altBoundary: p = false, padding: m = 0 } = Se(t, n), v = da(m), h2 = i[p ? f === "floating" ? "reference" : "floating" : f], g = It(await s.getClippingRect({ element: (e = await (s.isElement == null ? void 0 : s.isElement(h2))) == null || e ? h2 : h2.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(i.floating)), boundary: d, rootBoundary: c, strategy: u })), $ = f === "floating" ? { ...l.floating, x: o, y: a } : l.reference, O = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(i.floating)), E = await (s.isElement == null ? void 0 : s.isElement(O)) && await (s.getScale == null ? void 0 : s.getScale(O)) || { x: 1, y: 1 }, S = It(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: $, offsetParent: O, strategy: u }) : $);
  return { top: (g.top - S.top + v.top) / E.y, bottom: (S.bottom - g.bottom + v.bottom) / E.y, left: (g.left - S.left + v.left) / E.x, right: (S.right - g.right + v.right) / E.x };
}
var dt = Math.min;
var We = Math.max;
function co(n, t, e) {
  return We(n, dt(t, e));
}
var Sl = (n) => ({ name: "arrow", options: n, async fn(t) {
  const { x: e, y: o, placement: a, rects: s, platform: l, elements: i } = t, { element: u, padding: d = 0 } = Se(n, t) || {};
  if (u == null)
    return {};
  const c = da(d), f = { x: e, y: o }, p = Xe(a), m = Ro(p), v = await l.getDimensions(u), h2 = p === "y", g = h2 ? "top" : "left", $ = h2 ? "bottom" : "right", O = h2 ? "clientHeight" : "clientWidth", E = s.reference[m] + s.reference[p] - f[p] - s.floating[m], S = f[p] - s.reference[p], T = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(u));
  let D = T ? T[O] : 0;
  D && await (l.isElement == null ? void 0 : l.isElement(T)) || (D = i.floating[O] || s.floating[m]);
  const A = E / 2 - S / 2, W = D / 2 - v[m] / 2 - 1, I = dt(c[g], W), R = dt(c[$], W), N = I, z = D - v[m] - R, Y = D / 2 - v[m] / 2 + A, G = co(N, Y, z), j = nt(a) != null && Y != G && s.reference[m] / 2 - (Y < N ? I : R) - v[m] / 2 < 0 ? Y < N ? N - Y : z - Y : 0;
  return { [p]: f[p] - j, data: { [p]: G, centerOffset: Y - G + j } };
} });
var ca = ["top", "right", "bottom", "left"];
ca.reduce((n, t) => n.concat(t, t + "-start", t + "-end"), []);
var Tl = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Dt(n) {
  return n.replace(/left|right|bottom|top/g, (t) => Tl[t]);
}
function Al(n, t, e) {
  e === void 0 && (e = false);
  const o = nt(n), a = Xe(n), s = Ro(a);
  let l = a === "x" ? o === (e ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return t.reference[s] > t.floating[s] && (l = Dt(l)), { main: l, cross: Dt(l) };
}
var Il = { start: "end", end: "start" };
function ao(n) {
  return n.replace(/start|end/g, (t) => Il[t]);
}
var Dl = function(n) {
  return n === void 0 && (n = {}), { name: "flip", options: n, async fn(t) {
    var e;
    const { placement: o, middlewareData: a, rects: s, initialPlacement: l, platform: i, elements: u } = t, { mainAxis: d = true, crossAxis: c = true, fallbackPlacements: f, fallbackStrategy: p = "bestFit", fallbackAxisSideDirection: m = "none", flipAlignment: v = true, ...h2 } = Se(n, t), g = Oe(o), $ = Oe(l) === l, O = await (i.isRTL == null ? void 0 : i.isRTL(u.floating)), E = f || ($ || !v ? [Dt(l)] : function(N) {
      const z = Dt(N);
      return [ao(N), z, ao(z)];
    }(l));
    f || m === "none" || E.push(...function(N, z, Y, G) {
      const j = nt(N);
      let ee = function(fe, we, qt) {
        const Fe = ["left", "right"], Ot = ["right", "left"], st = ["top", "bottom"], Jt = ["bottom", "top"];
        switch (fe) {
          case "top":
          case "bottom":
            return qt ? we ? Ot : Fe : we ? Fe : Ot;
          case "left":
          case "right":
            return we ? st : Jt;
          default:
            return [];
        }
      }(Oe(N), Y === "start", G);
      return j && (ee = ee.map((fe) => fe + "-" + j), z && (ee = ee.concat(ee.map(ao)))), ee;
    }(l, v, m, O));
    const S = [l, ...E], T = await ut(t, h2), D = [];
    let A = ((e = a.flip) == null ? void 0 : e.overflows) || [];
    if (d && D.push(T[g]), c) {
      const { main: N, cross: z } = Al(o, s, O);
      D.push(T[N], T[z]);
    }
    if (A = [...A, { placement: o, overflows: D }], !D.every((N) => N <= 0)) {
      var W, I;
      const N = (((W = a.flip) == null ? void 0 : W.index) || 0) + 1, z = S[N];
      if (z)
        return { data: { index: N, overflows: A }, reset: { placement: z } };
      let Y = (I = A.filter((G) => G.overflows[0] <= 0).sort((G, j) => G.overflows[1] - j.overflows[1])[0]) == null ? void 0 : I.placement;
      if (!Y)
        switch (p) {
          case "bestFit": {
            var R;
            const G = (R = A.map((j) => [j.placement, j.overflows.filter((ee) => ee > 0).reduce((ee, fe) => ee + fe, 0)]).sort((j, ee) => j[1] - ee[1])[0]) == null ? void 0 : R[0];
            G && (Y = G);
            break;
          }
          case "initialPlacement":
            Y = l;
        }
      if (o !== Y)
        return { reset: { placement: Y } };
    }
    return {};
  } };
};
function Cn(n, t) {
  return { top: n.top - t.height, right: n.right - t.width, bottom: n.bottom - t.height, left: n.left - t.width };
}
function En(n) {
  return ca.some((t) => n[t] >= 0);
}
var Ml = function(n) {
  return n === void 0 && (n = {}), { name: "hide", options: n, async fn(t) {
    const { rects: e } = t, { strategy: o = "referenceHidden", ...a } = Se(n, t);
    switch (o) {
      case "referenceHidden": {
        const s = Cn(await ut(t, { ...a, elementContext: "reference" }), e.reference);
        return { data: { referenceHiddenOffsets: s, referenceHidden: En(s) } };
      }
      case "escaped": {
        const s = Cn(await ut(t, { ...a, altBoundary: true }), e.floating);
        return { data: { escapedOffsets: s, escaped: En(s) } };
      }
      default:
        return {};
    }
  } };
};
var kl = function(n) {
  return n === void 0 && (n = 0), { name: "offset", options: n, async fn(t) {
    const { x: e, y: o } = t, a = await async function(s, l) {
      const { placement: i, platform: u, elements: d } = s, c = await (u.isRTL == null ? void 0 : u.isRTL(d.floating)), f = Oe(i), p = nt(i), m = Xe(i) === "x", v = ["left", "top"].includes(f) ? -1 : 1, h2 = c && m ? -1 : 1, g = Se(l, s);
      let { mainAxis: $, crossAxis: O, alignmentAxis: E } = typeof g == "number" ? { mainAxis: g, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...g };
      return p && typeof E == "number" && (O = p === "end" ? -1 * E : E), m ? { x: O * h2, y: $ * v } : { x: $ * v, y: O * h2 };
    }(t, n);
    return { x: e + a.x, y: o + a.y, data: a };
  } };
};
function pa(n) {
  return n === "x" ? "y" : "x";
}
var xl = function(n) {
  return n === void 0 && (n = {}), { name: "shift", options: n, async fn(t) {
    const { x: e, y: o, placement: a } = t, { mainAxis: s = true, crossAxis: l = false, limiter: i = { fn: (g) => {
      let { x: $, y: O } = g;
      return { x: $, y: O };
    } }, ...u } = Se(n, t), d = { x: e, y: o }, c = await ut(t, u), f = Xe(Oe(a)), p = pa(f);
    let m = d[f], v = d[p];
    if (s) {
      const g = f === "y" ? "bottom" : "right";
      m = co(m + c[f === "y" ? "top" : "left"], m, m - c[g]);
    }
    if (l) {
      const g = p === "y" ? "bottom" : "right";
      v = co(v + c[p === "y" ? "top" : "left"], v, v - c[g]);
    }
    const h2 = i.fn({ ...t, [f]: m, [p]: v });
    return { ...h2, data: { x: h2.x - e, y: h2.y - o } };
  } };
};
var Rl = function(n) {
  return n === void 0 && (n = {}), { options: n, fn(t) {
    const { x: e, y: o, placement: a, rects: s, middlewareData: l } = t, { offset: i = 0, mainAxis: u = true, crossAxis: d = true } = Se(n, t), c = { x: e, y: o }, f = Xe(a), p = pa(f);
    let m = c[f], v = c[p];
    const h2 = Se(i, t), g = typeof h2 == "number" ? { mainAxis: h2, crossAxis: 0 } : { mainAxis: 0, crossAxis: 0, ...h2 };
    if (u) {
      const E = f === "y" ? "height" : "width", S = s.reference[f] - s.floating[E] + g.mainAxis, T = s.reference[f] + s.reference[E] - g.mainAxis;
      m < S ? m = S : m > T && (m = T);
    }
    if (d) {
      var $, O;
      const E = f === "y" ? "width" : "height", S = ["top", "left"].includes(Oe(a)), T = s.reference[p] - s.floating[E] + (S && (($ = l.offset) == null ? void 0 : $[p]) || 0) + (S ? 0 : g.crossAxis), D = s.reference[p] + s.reference[E] + (S ? 0 : ((O = l.offset) == null ? void 0 : O[p]) || 0) - (S ? g.crossAxis : 0);
      v < T ? v = T : v > D && (v = D);
    }
    return { [f]: m, [p]: v };
  } };
};
var Ll = function(n) {
  return n === void 0 && (n = {}), { name: "size", options: n, async fn(t) {
    const { placement: e, rects: o, platform: a, elements: s } = t, { apply: l = () => {
    }, ...i } = Se(n, t), u = await ut(t, i), d = Oe(e), c = nt(e), f = Xe(e) === "x", { width: p, height: m } = o.floating;
    let v, h2;
    d === "top" || d === "bottom" ? (v = d, h2 = c === (await (a.isRTL == null ? void 0 : a.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (h2 = d, v = c === "end" ? "top" : "bottom");
    const g = m - u[v], $ = p - u[h2], O = !t.middlewareData.shift;
    let E = g, S = $;
    if (f) {
      const D = p - u.left - u.right;
      S = c || O ? dt($, D) : D;
    } else {
      const D = m - u.top - u.bottom;
      E = c || O ? dt(g, D) : D;
    }
    if (O && !c) {
      const D = We(u.left, 0), A = We(u.right, 0), W = We(u.top, 0), I = We(u.bottom, 0);
      f ? S = p - 2 * (D !== 0 || A !== 0 ? D + A : We(u.left, u.right)) : E = m - 2 * (W !== 0 || I !== 0 ? W + I : We(u.top, u.bottom));
    }
    await l({ ...t, availableWidth: S, availableHeight: E });
    const T = await a.getDimensions(s.floating);
    return p !== T.width || m !== T.height ? { reset: { rects: true } } : {};
  } };
};
function de(n) {
  var t;
  return ((t = n.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function ce(n) {
  return de(n).getComputedStyle(n);
}
function fa(n) {
  return n instanceof de(n).Node;
}
function Re(n) {
  return fa(n) ? (n.nodeName || "").toLowerCase() : "#document";
}
function pe(n) {
  return n instanceof de(n).HTMLElement;
}
function $e(n) {
  return n instanceof de(n).Element;
}
function On(n) {
  return typeof ShadowRoot < "u" && (n instanceof de(n).ShadowRoot || n instanceof ShadowRoot);
}
function ct(n) {
  const { overflow: t, overflowX: e, overflowY: o, display: a } = ce(n);
  return /auto|scroll|overlay|hidden|clip/.test(t + o + e) && !["inline", "contents"].includes(a);
}
function Nl(n) {
  return ["table", "td", "th"].includes(Re(n));
}
function po(n) {
  const t = Lo(), e = ce(n);
  return e.transform !== "none" || e.perspective !== "none" || !t && !!e.backdropFilter && e.backdropFilter !== "none" || !t && !!e.filter && e.filter !== "none" || ["transform", "perspective", "filter"].some((o) => (e.willChange || "").includes(o)) || ["paint", "layout", "strict", "content"].some((o) => (e.contain || "").includes(o));
}
function Lo() {
  return !(typeof CSS > "u" || !CSS.supports) && CSS.supports("-webkit-backdrop-filter", "none");
}
function Kt(n) {
  return ["html", "body", "#document"].includes(Re(n));
}
var fo = Math.min;
var Je = Math.max;
var Mt = Math.round;
var Bt = Math.floor;
var ze = (n) => ({ x: n, y: n });
function ma(n) {
  const t = ce(n);
  let e = parseFloat(t.width) || 0, o = parseFloat(t.height) || 0;
  const a = pe(n), s = a ? n.offsetWidth : e, l = a ? n.offsetHeight : o, i = Mt(e) !== s || Mt(o) !== l;
  return i && (e = s, o = l), { width: e, height: o, $: i };
}
function No(n) {
  return $e(n) ? n : n.contextElement;
}
function Ze(n) {
  const t = No(n);
  if (!pe(t))
    return ze(1);
  const e = t.getBoundingClientRect(), { width: o, height: a, $: s } = ma(t);
  let l = (s ? Mt(e.width) : e.width) / o, i = (s ? Mt(e.height) : e.height) / a;
  return l && Number.isFinite(l) || (l = 1), i && Number.isFinite(i) || (i = 1), { x: l, y: i };
}
var $n = ze(0);
function va(n, t, e) {
  var o, a;
  if (t === void 0 && (t = true), !Lo())
    return $n;
  const s = n ? de(n) : window;
  return !e || t && e !== s ? $n : { x: ((o = s.visualViewport) == null ? void 0 : o.offsetLeft) || 0, y: ((a = s.visualViewport) == null ? void 0 : a.offsetTop) || 0 };
}
function Ue(n, t, e, o) {
  t === void 0 && (t = false), e === void 0 && (e = false);
  const a = n.getBoundingClientRect(), s = No(n);
  let l = ze(1);
  t && (o ? $e(o) && (l = Ze(o)) : l = Ze(n));
  const i = va(s, e, o);
  let u = (a.left + i.x) / l.x, d = (a.top + i.y) / l.y, c = a.width / l.x, f = a.height / l.y;
  if (s) {
    const p = de(s), m = o && $e(o) ? de(o) : o;
    let v = p.frameElement;
    for (; v && o && m !== p; ) {
      const h2 = Ze(v), g = v.getBoundingClientRect(), $ = getComputedStyle(v), O = g.left + (v.clientLeft + parseFloat($.paddingLeft)) * h2.x, E = g.top + (v.clientTop + parseFloat($.paddingTop)) * h2.y;
      u *= h2.x, d *= h2.y, c *= h2.x, f *= h2.y, u += O, d += E, v = de(v).frameElement;
    }
  }
  return It({ width: c, height: f, x: u, y: d });
}
function Pe(n) {
  return ((fa(n) ? n.ownerDocument : n.document) || window.document).documentElement;
}
function Vt(n) {
  return $e(n) ? { scrollLeft: n.scrollLeft, scrollTop: n.scrollTop } : { scrollLeft: n.pageXOffset, scrollTop: n.pageYOffset };
}
function ha(n) {
  return Ue(Pe(n)).left + Vt(n).scrollLeft;
}
function je(n) {
  if (Re(n) === "html")
    return n;
  const t = n.assignedSlot || n.parentNode || On(n) && n.host || Pe(n);
  return On(t) ? t.host : t;
}
function ga(n) {
  const t = je(n);
  return Kt(t) ? n.ownerDocument ? n.ownerDocument.body : n.body : pe(t) && ct(t) ? t : ga(t);
}
function kt(n, t) {
  var e;
  t === void 0 && (t = []);
  const o = ga(n), a = o === ((e = n.ownerDocument) == null ? void 0 : e.body), s = de(o);
  return a ? t.concat(s, s.visualViewport || [], ct(o) ? o : []) : t.concat(o, kt(o));
}
function Pn(n, t, e) {
  let o;
  if (t === "viewport")
    o = function(a, s) {
      const l = de(a), i = Pe(a), u = l.visualViewport;
      let d = i.clientWidth, c = i.clientHeight, f = 0, p = 0;
      if (u) {
        d = u.width, c = u.height;
        const m = Lo();
        (!m || m && s === "fixed") && (f = u.offsetLeft, p = u.offsetTop);
      }
      return { width: d, height: c, x: f, y: p };
    }(n, e);
  else if (t === "document")
    o = function(a) {
      const s = Pe(a), l = Vt(a), i = a.ownerDocument.body, u = Je(s.scrollWidth, s.clientWidth, i.scrollWidth, i.clientWidth), d = Je(s.scrollHeight, s.clientHeight, i.scrollHeight, i.clientHeight);
      let c = -l.scrollLeft + ha(a);
      const f = -l.scrollTop;
      return ce(i).direction === "rtl" && (c += Je(s.clientWidth, i.clientWidth) - u), { width: u, height: d, x: c, y: f };
    }(Pe(n));
  else if ($e(t))
    o = function(a, s) {
      const l = Ue(a, true, s === "fixed"), i = l.top + a.clientTop, u = l.left + a.clientLeft, d = pe(a) ? Ze(a) : ze(1);
      return { width: a.clientWidth * d.x, height: a.clientHeight * d.y, x: u * d.x, y: i * d.y };
    }(t, e);
  else {
    const a = va(n);
    o = { ...t, x: t.x - a.x, y: t.y - a.y };
  }
  return It(o);
}
function ya(n, t) {
  const e = je(n);
  return !(e === t || !$e(e) || Kt(e)) && (ce(e).position === "fixed" || ya(e, t));
}
function Bn(n, t) {
  return pe(n) && ce(n).position !== "fixed" ? t ? t(n) : n.offsetParent : null;
}
function Sn(n, t) {
  const e = de(n);
  if (!pe(n))
    return e;
  let o = Bn(n, t);
  for (; o && Nl(o) && ce(o).position === "static"; )
    o = Bn(o, t);
  return o && (Re(o) === "html" || Re(o) === "body" && ce(o).position === "static" && !po(o)) ? e : o || function(a) {
    let s = je(a);
    for (; pe(s) && !Kt(s); ) {
      if (po(s))
        return s;
      s = je(s);
    }
    return null;
  }(n) || e;
}
function Fl(n, t, e) {
  const o = pe(t), a = Pe(t), s = e === "fixed", l = Ue(n, true, s, t);
  let i = { scrollLeft: 0, scrollTop: 0 };
  const u = ze(0);
  if (o || !o && !s)
    if ((Re(t) !== "body" || ct(a)) && (i = Vt(t)), pe(t)) {
      const d = Ue(t, true, s, t);
      u.x = d.x + t.clientLeft, u.y = d.y + t.clientTop;
    } else
      a && (u.x = ha(a));
  return { x: l.left + i.scrollLeft - u.x, y: l.top + i.scrollTop - u.y, width: l.width, height: l.height };
}
var Kl = { getClippingRect: function(n) {
  let { element: t, boundary: e, rootBoundary: o, strategy: a } = n;
  const s = e === "clippingAncestors" ? function(d, c) {
    const f = c.get(d);
    if (f)
      return f;
    let p = kt(d).filter((g) => $e(g) && Re(g) !== "body"), m = null;
    const v = ce(d).position === "fixed";
    let h2 = v ? je(d) : d;
    for (; $e(h2) && !Kt(h2); ) {
      const g = ce(h2), $ = po(h2);
      $ || g.position !== "fixed" || (m = null), (v ? !$ && !m : !$ && g.position === "static" && m && ["absolute", "fixed"].includes(m.position) || ct(h2) && !$ && ya(d, h2)) ? p = p.filter((O) => O !== h2) : m = g, h2 = je(h2);
    }
    return c.set(d, p), p;
  }(t, this._c) : [].concat(e), l = [...s, o], i = l[0], u = l.reduce((d, c) => {
    const f = Pn(t, c, a);
    return d.top = Je(f.top, d.top), d.right = fo(f.right, d.right), d.bottom = fo(f.bottom, d.bottom), d.left = Je(f.left, d.left), d;
  }, Pn(t, i, a));
  return { width: u.right - u.left, height: u.bottom - u.top, x: u.left, y: u.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(n) {
  let { rect: t, offsetParent: e, strategy: o } = n;
  const a = pe(e), s = Pe(e);
  if (e === s)
    return t;
  let l = { scrollLeft: 0, scrollTop: 0 }, i = ze(1);
  const u = ze(0);
  if ((a || !a && o !== "fixed") && ((Re(e) !== "body" || ct(s)) && (l = Vt(e)), pe(e))) {
    const d = Ue(e);
    i = Ze(e), u.x = d.x + e.clientLeft, u.y = d.y + e.clientTop;
  }
  return { width: t.width * i.x, height: t.height * i.y, x: t.x * i.x - l.scrollLeft * i.x + u.x, y: t.y * i.y - l.scrollTop * i.y + u.y };
}, isElement: $e, getDimensions: function(n) {
  return ma(n);
}, getOffsetParent: Sn, getDocumentElement: Pe, getScale: Ze, async getElementRects(n) {
  let { reference: t, floating: e, strategy: o } = n;
  const a = this.getOffsetParent || Sn, s = this.getDimensions;
  return { reference: Fl(t, await a(e), o), floating: { x: 0, y: 0, ...await s(e) } };
}, getClientRects: (n) => Array.from(n.getClientRects()), isRTL: (n) => ce(n).direction === "rtl" };
function Vl(n, t, e, o) {
  o === void 0 && (o = {});
  const { ancestorScroll: a = true, ancestorResize: s = true, elementResize: l = true, layoutShift: i = typeof IntersectionObserver == "function", animationFrame: u = false } = o, d = No(n), c = a || s ? [...d ? kt(d) : [], ...kt(t)] : [];
  c.forEach((h2) => {
    a && h2.addEventListener("scroll", e, { passive: true }), s && h2.addEventListener("resize", e);
  });
  const f = d && i ? function(h2, g) {
    let $, O = null;
    const E = Pe(h2);
    function S() {
      clearTimeout($), O && O.disconnect(), O = null;
    }
    return function T(D, A) {
      D === void 0 && (D = false), A === void 0 && (A = 1), S();
      const { left: W, top: I, width: R, height: N } = h2.getBoundingClientRect();
      if (D || g(), !R || !N)
        return;
      const z = Bt(I), Y = Bt(E.clientWidth - (W + R)), G = Bt(E.clientHeight - (I + N)), j = Bt(W);
      let ee = true;
      O = new IntersectionObserver((fe) => {
        const we = fe[0].intersectionRatio;
        if (we !== A) {
          if (!ee)
            return T();
          we ? T(false, we) : $ = setTimeout(() => {
            T(false, 1e-7);
          }, 100);
        }
        ee = false;
      }, { rootMargin: -z + "px " + -Y + "px " + -G + "px " + -j + "px", threshold: Je(0, fo(1, A)) || 1 }), O.observe(h2);
    }(true), S;
  }(d, e) : null;
  let p, m = null;
  l && (m = new ResizeObserver(e), d && !u && m.observe(d), m.observe(t));
  let v = u ? Ue(n) : null;
  return u && function h2() {
    const g = Ue(n);
    !v || g.x === v.x && g.y === v.y && g.width === v.width && g.height === v.height || e(), v = g, p = requestAnimationFrame(h2);
  }(), e(), () => {
    c.forEach((h2) => {
      a && h2.removeEventListener("scroll", e), s && h2.removeEventListener("resize", e);
    }), f && f(), m && m.disconnect(), m = null, u && cancelAnimationFrame(p);
  };
}
var Hl = (n, t, e) => {
  const o = /* @__PURE__ */ new Map(), a = { platform: Kl, ...e }, s = { ...a.platform, _c: o };
  return Bl(n, t, { ...a, platform: s });
};
function mo(n) {
  var t;
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
function Wl(n) {
  return {
    name: "arrow",
    options: n,
    fn(t) {
      const e = mo(unref(n.element));
      return e == null ? {} : Sl({
        element: e,
        padding: n.padding
      }).fn(t);
    }
  };
}
function _a(n) {
  return typeof window > "u" ? 1 : (n.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Tn(n, t) {
  const e = _a(n);
  return Math.round(t * e) / e;
}
function zl(n, t, e) {
  e === void 0 && (e = {});
  const o = e.whileElementsMounted, a = computed(() => {
    var A;
    return (A = unref(e.open)) != null ? A : true;
  }), s = computed(() => unref(e.middleware)), l = computed(() => {
    var A;
    return (A = unref(e.placement)) != null ? A : "bottom";
  }), i = computed(() => {
    var A;
    return (A = unref(e.strategy)) != null ? A : "absolute";
  }), u = computed(() => {
    var A;
    return (A = unref(e.transform)) != null ? A : true;
  }), d = computed(() => mo(n.value)), c = computed(() => mo(t.value)), f = ref(0), p = ref(0), m = ref(i.value), v = ref(l.value), h2 = shallowRef({}), g = ref(false), $ = computed(() => {
    const A = {
      position: m.value,
      left: "0",
      top: "0"
    };
    if (!c.value)
      return A;
    const W = Tn(c.value, f.value), I = Tn(c.value, p.value);
    return u.value ? {
      ...A,
      transform: "translate(" + W + "px, " + I + "px)",
      ..._a(c.value) >= 1.5 && {
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
    d.value == null || c.value == null || Hl(d.value, c.value, {
      middleware: s.value,
      placement: l.value,
      strategy: i.value
    }).then((A) => {
      f.value = A.x, p.value = A.y, m.value = A.strategy, v.value = A.placement, h2.value = A.middlewareData, g.value = true;
    });
  }
  function S() {
    typeof O == "function" && (O(), O = void 0);
  }
  function T() {
    if (S(), o === void 0) {
      E();
      return;
    }
    if (d.value != null && c.value != null) {
      O = o(d.value, c.value, E);
      return;
    }
  }
  function D() {
    a.value || (g.value = false);
  }
  return watch([s, l, i], E, {
    flush: "sync"
  }), watch([d, c], T, {
    flush: "sync"
  }), watch(a, D, {
    flush: "sync"
  }), getCurrentScope() && onScopeDispose(S), {
    x: shallowReadonly(f),
    y: shallowReadonly(p),
    strategy: shallowReadonly(m),
    placement: shallowReadonly(v),
    middlewareData: shallowReadonly(h2),
    isPositioned: shallowReadonly(g),
    floatingStyles: $,
    update: E
  };
}
var Ie = {
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
var ba = Symbol();
var Ul = {
  inheritAttrs: false
};
var yt = defineComponent({
  ...Ul,
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
    ...Ie
  }),
  setup(n, { expose: t }) {
    const e = n, o = inject(xo), { primitiveElement: a, currentElement: s } = V(), l = ref(), i = ref(), u = ref(), { width: d, height: c } = Es(u), f = computed(
      () => e.side + (e.align !== "center" ? "-" + e.align : "")
    ), p = computed(() => typeof e.collisionPadding == "number" ? e.collisionPadding : { top: 0, right: 0, bottom: 0, left: 0, ...e.collisionPadding }), m = computed(() => Array.isArray(e.collisionBoundary) ? e.collisionBoundary : [e.collisionBoundary]), v = computed(() => ({
      padding: p.value,
      boundary: m.value.filter($l),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: m.value.length > 0
    })), h2 = ts(() => [
      kl({
        mainAxis: e.sideOffset + c.value,
        alignmentAxis: e.alignOffset
      }),
      e.avoidCollisions && xl({
        mainAxis: true,
        crossAxis: !!e.prioritizePosition,
        limiter: e.sticky === "partial" ? Rl() : void 0,
        ...v.value
      }),
      !e.prioritizePosition && e.avoidCollisions && Dl({
        ...v.value
      }),
      Ll({
        ...v.value,
        apply: ({ elements: R, rects: N, availableWidth: z, availableHeight: Y }) => {
          const { width: G, height: j } = N.reference, ee = R.floating.style;
          Object.assign(R.floating.style, {
            maxWidth: `${z}px`,
            maxHeight: `${Y}px`
          }), ee.setProperty(
            "--radix-popper-available-width",
            `${z}px`
          ), ee.setProperty(
            "--radix-popper-available-height",
            `${Y}px`
          ), ee.setProperty(
            "--radix-popper-anchor-width",
            `${G}px`
          ), ee.setProperty(
            "--radix-popper-anchor-height",
            `${j}px`
          );
        }
      }),
      u.value && Wl({ element: u.value, padding: e.arrowPadding }),
      Pl({
        arrowWidth: d.value,
        arrowHeight: c.value
      }),
      e.hideWhenDetached && Ml({ strategy: "referenceHidden", ...v.value })
    ]), { floatingStyles: g, placement: $, isPositioned: O, middlewareData: E } = zl(
      o.anchor,
      l,
      {
        strategy: "fixed",
        placement: f,
        whileElementsMounted: (...R) => Vl(...R, {
          animationFrame: e.updatePositionStrategy === "always"
        }),
        middleware: h2
      }
    ), S = computed(
      () => uo($.value)[0]
    ), T = computed(
      () => uo($.value)[1]
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
      i.value && (A.value = window.getComputedStyle(i.value).zIndex);
    });
    const W = computed(() => {
      var R;
      return ((R = E.value.arrow) == null ? void 0 : R.x) ?? 0;
    }), I = computed(() => {
      var R;
      return ((R = E.value.arrow) == null ? void 0 : R.y) ?? 0;
    });
    return provide(ba, {
      placedSide: S,
      onArrowChange: (R) => {
        u.value = R;
      },
      arrowX: W,
      arrowY: I,
      shouldHideArrow: D
    }), t({
      $el: s
    }), (R, N) => {
      var z, Y, G;
      return openBlock(), createElementBlock("div", {
        ref_key: "floatingRef",
        ref: l,
        "data-radix-popper-content-wrapper": "",
        style: normalizeStyle({
          ...unref(g),
          transform: unref(O) ? unref(g).transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: A.value,
          ["--radix-popper-transform-origin"]: [
            (z = unref(E).transformOrigin) == null ? void 0 : z.x,
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
          "data-side": S.value,
          "data-align": T.value,
          style: {
            // if the PopperContent hasn't been placed yet (not all measurements done)
            // we prevent animations so that users's animation don't kick in too early referring wrong sides
            animation: unref(O) ? void 0 : "none",
            // hide the content if using the hide middleware and should be hidden
            opacity: (G = unref(E).hide) != null && G.referenceHidden ? 0 : void 0
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
var Yl = createBaseVNode("polygon", { points: "0,0 30,0 15,10" }, null, -1);
var Gl = defineComponent({
  __name: "Arrow",
  props: {
    width: { default: 10 },
    height: { default: 5 },
    asChild: { type: Boolean },
    as: { default: "svg" }
  },
  setup(n) {
    const t = n, { primitiveElement: e } = V();
    return (o, a) => (openBlock(), createBlock(unref(M), mergeProps({
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
          Yl
        ])
      ]),
      _: 3
    }, 16, ["width", "height"]));
  }
});
var Xl = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
};
var ql = {
  inheritAttrs: false
};
var _t = defineComponent({
  ...ql,
  __name: "PopperArrow",
  props: {
    width: {},
    height: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(n) {
    const t = inject(ba), e = computed(
      () => t != null && t.placedSide ? Xl[t == null ? void 0 : t.placedSide.value] : ""
    );
    return (o, a) => {
      var s, l, i, u;
      return openBlock(), createElementBlock("span", {
        ref: (d) => {
          unref(t).onArrowChange(d);
        },
        style: normalizeStyle({
          position: "absolute",
          left: (s = unref(t).arrowX) != null && s.value ? `${(l = unref(t).arrowX) == null ? void 0 : l.value}px` : void 0,
          top: (i = unref(t).arrowY) != null && i.value ? `${(u = unref(t).arrowY) == null ? void 0 : u.value}px` : void 0,
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
        createVNode(Gl, mergeProps(o.$attrs, { style: {
          display: "block"
        } }), null, 16)
      ], 4);
    };
  }
});
var Fo = Symbol();
var _i = defineComponent({
  __name: "TooltipRoot",
  props: {
    defaultOpen: { type: Boolean, default: false },
    open: { type: Boolean, default: void 0 },
    delayDuration: { default: 700 },
    disableHoverableContent: { type: Boolean }
  },
  emits: ["update:open"],
  setup(n, { emit: t }) {
    const e = n, o = X(e, "open", t, {
      defaultValue: e.defaultOpen,
      passive: true
    }), a = ref(false), s = computed(() => o.value ? a.value ? "delayed-open" : "instant-open" : "closed");
    return provide(Fo, {
      open: o,
      showTooltip: (l) => {
        a.value = l, o.value = true;
      },
      hideTooltip: () => o.value = false,
      delayMs: e.delayDuration,
      dataState: s,
      disableHoverableContent: computed(() => e.disableHoverableContent),
      contentId: ne()
    }), (l, i) => (openBlock(), createBlock(unref(tt), null, {
      default: withCtx(() => [
        renderSlot(l.$slots, "default")
      ]),
      _: 3
    }));
  }
});
var bi = defineComponent({
  __name: "TooltipTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(n) {
    const t = n, e = inject(Fo), { primitiveElement: o, currentElement: a } = V();
    return ws(a, {
      delayEnter: e == null ? void 0 : e.delayMs,
      onHoverEnter: () => e == null ? void 0 : e.showTooltip(true),
      delayLeave: 0,
      onHoverLeave: () => e == null ? void 0 : e.hideTooltip(),
      disabled: e == null ? void 0 : e.disableHoverableContent
    }), (s, l) => (openBlock(), createBlock(unref(ot), { asChild: "" }, {
      default: withCtx(() => {
        var i, u, d, c;
        return [
          createVNode(unref(M), {
            type: s.as === "button" ? "button" : void 0,
            ref_key: "primitiveElement",
            ref: o,
            "aria-describedby": (i = unref(e)) != null && i.open ? unref(e).contentId : void 0,
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
var Ko = defineComponent({
  __name: "VisuallyHidden",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(n) {
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
var wi = defineComponent({
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
  setup(n, { emit: t }) {
    const e = n, o = ref(), a = inject(Fo);
    rs(o, () => {
      t("pointerDownOutside", new Event("pointerdown"));
    });
    function s(i) {
      t("escapeKeyDown", i);
    }
    const l = computed(() => {
      var c, f;
      if (e.ariaLabel)
        return e.ariaLabel;
      const i = (f = (c = useSlots()).default) == null ? void 0 : f.call(c);
      let u = "";
      function d(p) {
        typeof p.children == "string" ? u += p.children : Array.isArray(p.children) && p.children.forEach((m) => d(m));
      }
      return i == null || i.forEach((p) => d(p)), u;
    });
    return (i, u) => {
      var d;
      return (d = unref(a)) != null && d.open.value ? (openBlock(), createBlock(unref(yt), {
        key: 0,
        ref_key: "contentElement",
        ref: o,
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
        onKeydown: u[0] || (u[0] = withKeys((c) => s(c), ["esc"]))
      }, {
        default: withCtx(() => {
          var c, f;
          return [
            createVNode(unref(M), {
              "data-state": (c = unref(a)) == null ? void 0 : c.dataState.value,
              "data-side": e.side,
              "data-align": e.align,
              "as-child": e.asChild,
              as: i.as,
              role: "tooltip",
              tabindex: "-1"
            }, {
              default: withCtx(() => [
                renderSlot(i.$slots, "default")
              ]),
              _: 3
            }, 8, ["data-state", "data-side", "data-align", "as-child", "as"]),
            createVNode(unref(Ko), {
              id: (f = unref(a)) == null ? void 0 : f.contentId,
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
var Ci = defineComponent({
  __name: "TooltipArrow",
  props: {
    width: { default: 10 },
    height: { default: 5 },
    asChild: { type: Boolean, default: false },
    as: {}
  },
  setup(n) {
    const t = n;
    return (e, o) => (openBlock(), createBlock(unref(_t), {
      "as-child": t.asChild,
      as: e.as,
      height: t.height,
      width: t.width
    }, null, 8, ["as-child", "as", "height", "width"]));
  }
});
var Vo = Symbol();
var Ei = defineComponent({
  __name: "HoverCardRoot",
  props: {
    defaultOpen: { type: Boolean, default: false },
    open: { type: Boolean, default: void 0 },
    openDelay: { default: 700 },
    closeDelay: { default: 300 }
  },
  emits: ["update:open"],
  setup(n, { emit: t }) {
    const e = n, o = X(e, "open", t, {
      defaultValue: e.defaultOpen,
      passive: true
    });
    return provide(Vo, {
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
    }), (a, s) => (openBlock(), createBlock(unref(tt), null, {
      default: withCtx(() => [
        renderSlot(a.$slots, "default")
      ]),
      _: 3
    }));
  }
});
var Oi = defineComponent({
  __name: "HoverCardTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(n) {
    const t = n, e = inject(Vo), { primitiveElement: o, currentElement: a } = V();
    async function s(i) {
      await bs(
        i,
        a.value,
        e == null ? void 0 : e.openDelay
      ) && (e == null || e.showTooltip());
    }
    async function l(i) {
      e.isHover = false, await zn(i, e == null ? void 0 : e.closeDelay) && !(e != null && e.isHover) && (e == null || e.hideTooltip());
    }
    return (i, u) => (openBlock(), createBlock(unref(ot), { asChild: "" }, {
      default: withCtx(() => {
        var d, c;
        return [
          createVNode(unref(M), {
            ref_key: "primitiveElement",
            ref: o,
            "as-child": t.asChild,
            as: i.as,
            "aria-expanded": ((d = unref(e)) == null ? void 0 : d.open.value) || false,
            "data-state": (c = unref(e)) != null && c.open.value ? "open" : "closed",
            onMouseover: u[0] || (u[0] = (f) => unref(e).isHover = true),
            onMouseenter: s,
            onMouseleave: l,
            style: { cursor: "default" }
          }, {
            default: withCtx(() => [
              renderSlot(i.$slots, "default")
            ]),
            _: 3
          }, 8, ["as-child", "as", "aria-expanded", "data-state"])
        ];
      }),
      _: 3
    }));
  }
});
var wa = defineComponent({
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
var $i = defineComponent({
  __name: "HoverCardPortal",
  props: {
    container: {}
  },
  setup(n) {
    const t = n;
    return (e, o) => (openBlock(), createBlock(wa, normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Pi = defineComponent({
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
    const t = n, e = inject(Vo);
    async function o(a) {
      e.isHover = false, await zn(a, e == null ? void 0 : e.closeDelay) && !(e != null && e.isHover) && (e == null || e.hideTooltip());
    }
    return (a, s) => {
      var l, i;
      return (l = unref(e)) != null && l.open.value ? (openBlock(), createBlock(unref(yt), mergeProps({ key: 0 }, t, {
        onMouseover: s[0] || (s[0] = (u) => unref(e).isHover = true),
        onMouseleave: o,
        "data-state": (i = unref(e)) != null && i.open.value ? "open" : "closed",
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
var Bi = defineComponent({
  __name: "HoverCardArrow",
  props: {
    width: {},
    height: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(n) {
    const t = n;
    return (e, o) => (openBlock(), createBlock(unref(_t), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Le = Symbol();
var Si = defineComponent({
  __name: "PopoverRoot",
  props: {
    defaultOpen: { type: Boolean, default: false },
    open: { type: Boolean, default: void 0 },
    modal: { type: Boolean, default: false }
  },
  emits: ["update:open"],
  setup(n, { emit: t }) {
    const e = n, { modal: o } = toRefs(e), a = X(e, "open", t, {
      defaultValue: e.defaultOpen,
      passive: true
    }), s = ref(), l = ref(false);
    return provide(Le, {
      contentId: ne(),
      modal: o,
      open: a,
      onOpenChange: (i) => {
        a.value = i;
      },
      onOpenToggle: () => {
        a.value = !a.value;
      },
      triggerElement: s,
      hasCustomAnchor: l
    }), (i, u) => (openBlock(), createBlock(unref(tt), null, {
      default: withCtx(() => [
        renderSlot(i.$slots, "default")
      ]),
      _: 3
    }));
  }
});
var Ti = defineComponent({
  __name: "PopoverTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(n, { expose: t }) {
    const e = n, o = inject(Le), { primitiveElement: a, currentElement: s } = V();
    return onMounted(() => {
      o.triggerElement.value = s.value;
    }), t({ $el: s }), (l, i) => {
      var u;
      return openBlock(), createBlock(resolveDynamicComponent((u = unref(o)) != null && u.hasCustomAnchor.value ? unref(M) : unref(ot)), { asChild: "" }, {
        default: withCtx(() => {
          var d, c, f;
          return [
            createVNode(unref(M), {
              type: l.as === "button" ? "button" : void 0,
              ref_key: "primitiveElement",
              ref: a,
              "aria-haspopup": "dialog",
              "aria-expanded": (d = unref(o)) == null ? void 0 : d.open.value,
              "aria-controls": (c = unref(o)) == null ? void 0 : c.contentId,
              "data-state": (f = unref(o)) != null && f.open.value ? "open" : "closed",
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
var Ai = defineComponent({
  __name: "PopoverPortal",
  props: {
    container: {}
  },
  setup(n) {
    const t = n;
    return (e, o) => (openBlock(), createBlock(wa, normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Ca = defineComponent({
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
    const e = n, o = inject(Le);
    return Eo(), (a, s) => (openBlock(), createBlock(unref(Ft), {
      asChild: "",
      loop: "",
      trapped: a.trapFocus,
      onMountAutoFocus: s[5] || (s[5] = (l) => t("openAutoFocus", l)),
      onUnmountAutoFocus: s[6] || (s[6] = (l) => t("closeAutoFocus", l))
    }, {
      default: withCtx(() => [
        createVNode(unref(gt), {
          asChild: "",
          "disable-outside-pointer-events": a.disableOutsidePointerEvents,
          onPointerDownOutside: s[0] || (s[0] = (l) => t("pointerDownOutside", l)),
          onInteractOutside: s[1] || (s[1] = (l) => t("interactOutside", l)),
          onEscapeKeyDown: s[2] || (s[2] = (l) => t("escapeKeyDown", l)),
          onFocusOutside: s[3] || (s[3] = (l) => t("focusOutside", l)),
          onDismiss: s[4] || (s[4] = (l) => {
            var i;
            return (i = unref(o)) == null ? void 0 : i.onOpenChange(false);
          })
        }, {
          default: withCtx(() => {
            var l, i;
            return [
              createVNode(unref(yt), mergeProps(e, {
                "data-state": (l = unref(o)) != null && l.open.value ? "open" : "closed",
                role: "dialog",
                id: (i = unref(o)) == null ? void 0 : i.contentId,
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
              }, 16, ["data-state", "id", "style"])
            ];
          }),
          _: 3
        }, 8, ["disable-outside-pointer-events"])
      ]),
      _: 3
    }, 8, ["trapped"]));
  }
});
var Jl = defineComponent({
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
    const e = n, o = inject(Le), a = ref(false);
    Rt(true);
    const s = J(t);
    return (l, i) => {
      var u;
      return openBlock(), createBlock(Ca, mergeProps({ ...e, ...unref(s) }, {
        "trap-focus": (u = unref(o)) == null ? void 0 : u.open.value,
        disableOutsidePointerEvents: "",
        onCloseAutoFocus: i[0] || (i[0] = withModifiers(
          (d) => {
            var c, f;
            t("closeAutoFocus", d), a.value || (f = (c = unref(o)) == null ? void 0 : c.triggerElement.value) == null || f.focus();
          },
          ["prevent"]
        )),
        onPointerDownOutside: i[1] || (i[1] = (d) => {
          t("pointerDownOutside", d);
          const c = d.detail.originalEvent, f = c.button === 0 && c.ctrlKey === true, p = c.button === 2 || f;
          a.value = p;
        }),
        onFocusOutside: i[2] || (i[2] = withModifiers(() => {
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
var Zl = defineComponent({
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
    const e = n, o = inject(Le), a = ref(false), s = ref(false), l = J(t);
    return (i, u) => (openBlock(), createBlock(Ca, mergeProps({ ...e, ...unref(l) }, {
      "trap-focus": false,
      disableOutsidePointerEvents: false,
      onCloseAutoFocus: u[0] || (u[0] = (d) => {
        var c, f;
        t("closeAutoFocus", d), d.defaultPrevented || (a.value || (f = (c = unref(o)) == null ? void 0 : c.triggerElement.value) == null || f.focus(), d.preventDefault()), a.value = false, s.value = false;
      }),
      onInteractOutside: u[1] || (u[1] = async (d) => {
        var p, m;
        t("interactOutside", d), d.defaultPrevented || (a.value = true, d.detail.originalEvent.type === "pointerdown" && (s.value = true));
        const c = d.target;
        ((m = (p = unref(o)) == null ? void 0 : p.triggerElement.value) == null ? void 0 : m.contains(c)) && d.preventDefault(), d.detail.originalEvent.type === "focusin" && s.value && d.preventDefault();
      })
    }), {
      default: withCtx(() => [
        renderSlot(i.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Ii = defineComponent({
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
    ...Ie
  }),
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss", "openAutoFocus", "closeAutoFocus"],
  setup(n, { emit: t }) {
    const e = n, o = inject(Le), a = J(t);
    return (s, l) => (openBlock(), createBlock(unref(re), {
      present: s.forceMount || unref(o).open.value
    }, {
      default: withCtx(() => {
        var i;
        return [
          (i = unref(o)) != null && i.modal.value ? (openBlock(), createBlock(Jl, normalizeProps(mergeProps({ key: 0 }, { ...e, ...unref(a) })), {
            default: withCtx(() => [
              renderSlot(s.$slots, "default")
            ]),
            _: 3
          }, 16)) : (openBlock(), createBlock(Zl, normalizeProps(mergeProps({ key: 1 }, { ...e, ...unref(a) })), {
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
var Di = defineComponent({
  __name: "PopoverArrow",
  props: {
    width: {},
    height: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(n) {
    const t = n;
    return (e, o) => (openBlock(), createBlock(unref(_t), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Mi = defineComponent({
  __name: "PopoverClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(n) {
    const t = n, e = inject(Le);
    return (o, a) => (openBlock(), createBlock(unref(M), {
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
var ki = defineComponent({
  __name: "PopoverAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(n) {
    const t = n, e = inject(Le);
    return onBeforeMount(() => {
      e.hasCustomAnchor.value = true;
    }), onUnmounted(() => {
      e.hasCustomAnchor.value = false;
    }), (o, a) => (openBlock(), createBlock(unref(ot), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Ht = defineComponent({
  __name: "MenuAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(n) {
    const t = n;
    return (e, o) => (openBlock(), createBlock(unref(ot), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Ho = defineComponent({
  __name: "MenuArrow",
  props: {
    width: {},
    height: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(n) {
    const t = n;
    return (e, o) => (openBlock(), createBlock(unref(_t), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var ge = Symbol();
var at = Symbol();
var Wo = defineComponent({
  __name: "MenuRoot",
  props: {
    open: { type: Boolean, default: false },
    onOpenChange: {},
    dir: { default: "ltr" },
    modal: { type: Boolean, default: true }
  },
  emits: ["update:open"],
  setup(n, { emit: t }) {
    const e = n, { modal: o, dir: a } = toRefs(e), s = X(e, "open", t), l = ref(), i = ref(false);
    return watchEffect((u) => {
      if (!Ae)
        return;
      const d = () => {
        i.value = true, document.addEventListener("pointerdown", c, {
          capture: true,
          once: true
        }), document.addEventListener("pointermove", c, {
          capture: true,
          once: true
        });
      }, c = () => i.value = false;
      document.addEventListener("keydown", d, { capture: true }), u(() => {
        document.removeEventListener("keydown", d, { capture: true }), document.removeEventListener("pointerdown", c, {
          capture: true
        }), document.removeEventListener("pointermove", c, {
          capture: true
        });
      });
    }), provide(ge, {
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
      isUsingKeyboardRef: i,
      dir: a,
      modal: o
    }), (u, d) => (openBlock(), createBlock(unref(tt), null, {
      default: withCtx(() => [
        renderSlot(u.$slots, "default")
      ]),
      _: 3
    }));
  }
});
var Wt = Symbol();
var zo = defineComponent({
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
    ...Ie
  }),
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss", "openAutoFocus", "closeAutoFocus"],
  setup(n, { emit: t }) {
    const e = n, o = inject(ge), a = inject(at), { trapFocus: s, disableOutsidePointerEvents: l, loop: i } = toRefs(e);
    Eo(), Rt(l.value);
    const u = ref(""), d = ref(0), c = ref(0), f = ref(null), p = ref("right"), m = ref(0), v = ref(null), { createCollection: h2 } = se(), { primitiveElement: g, currentElement: $ } = V(), O = h2($);
    watch($, (I) => {
      o.onContentChange(I);
    });
    const { handleTypeaheadSearch: E } = $o(O);
    onUnmounted(() => {
      window.clearTimeout(d.value);
    });
    const S = (I) => {
      var N, z;
      return p.value === ((N = f.value) == null ? void 0 : N.side) && hl(I, (z = f.value) == null ? void 0 : z.area);
    }, T = async (I) => {
      t("openAutoFocus", I), setTimeout(() => {
        var R, N, z;
        (R = $.value) == null || R.focus(), a != null && a.isUsingKeyboardRef.value && !I.defaultPrevented && ((z = (N = O.value) == null ? void 0 : N[0]) == null || z.focus(), I.preventDefault());
      }, 0);
    }, D = (I) => {
      const N = I.target.closest("[data-radix-menu-content]") === I.currentTarget, z = I.ctrlKey || I.altKey || I.metaKey, Y = I.key.length === 1, G = Ge(
        I,
        document.activeElement,
        $.value,
        {
          loop: i.value,
          arrowKeyOptions: "vertical",
          dir: a == null ? void 0 : a.dir.value,
          focus: true
        }
      );
      if (G)
        return G == null ? void 0 : G.focus();
      if (I.code === "Space" || (N && (I.key === "Tab" && I.preventDefault(), !z && Y && E(I.key)), I.target !== $.value) || !pl.includes(I.key))
        return;
      I.preventDefault();
      const j = O.value;
      la.includes(I.key) && j.reverse(), io(j);
    }, A = (I) => {
      var R, N;
      (N = (R = I == null ? void 0 : I.currentTarget) == null ? void 0 : R.contains) != null && N.call(R, I.target) || (window.clearTimeout(d.value), u.value = "");
    }, W = (I) => {
      var z;
      if (!it(I))
        return;
      const R = I.target, N = m.value !== I.clientX;
      if ((z = I == null ? void 0 : I.currentTarget) != null && z.contains(R) && N) {
        const Y = I.clientX > m.value ? "right" : "left";
        p.value = Y, m.value = I.clientX;
      }
    };
    return provide(Wt, {
      onItemEnter: (I) => {
        S(I) && I.preventDefault();
      },
      onItemLeave: (I) => {
        var R;
        S(I) || ((R = $.value) == null || R.focus(), v.value = null);
      },
      onTriggerLeave: (I) => {
        S(I) && I.preventDefault();
      },
      searchRef: u,
      pointerGraceTimerRef: c,
      onPointerGraceIntentChange: (I) => {
        f.value = I;
      }
    }), (I, R) => (openBlock(), createBlock(unref(Ft), {
      asChild: "",
      trapped: unref(s),
      onMountAutoFocus: T,
      onUnmountAutoFocus: R[5] || (R[5] = (N) => t("closeAutoFocus", N))
    }, {
      default: withCtx(() => [
        createVNode(unref(gt), {
          asChild: "",
          disableOutsidePointerEvents: unref(l),
          onEscapeKeyDown: R[0] || (R[0] = (N) => t("escapeKeyDown", N)),
          onPointerDownOutside: R[1] || (R[1] = (N) => t("pointerDownOutside", N)),
          onFocusOutside: R[2] || (R[2] = (N) => t("focusOutside", N)),
          onInteractOutside: R[3] || (R[3] = (N) => t("interactOutside", N)),
          onDismiss: R[4] || (R[4] = (N) => t("dismiss"))
        }, {
          default: withCtx(() => [
            createVNode(unref(yt), {
              ref_key: "primitiveElement",
              ref: g,
              role: "menu",
              as: I.as,
              "as-child": I.asChild,
              "aria-orientation": "vertical",
              "data-radix-menu-content": "",
              "data-state": unref(Io)(unref(o).open.value),
              dir: unref(a).dir.value,
              onKeydown: D,
              onBlur: A,
              onPointermove: W,
              side: I.side,
              sideOffset: I.sideOffset,
              align: I.align,
              alignOffset: I.alignOffset,
              avoidCollisions: I.avoidCollisions,
              collisionBoundary: I.collisionBoundary,
              collisionPadding: I.collisionPadding,
              arrowPadding: I.arrowPadding,
              sticky: I.sticky,
              hideWhenDetached: I.hideWhenDetached
            }, {
              default: withCtx(() => [
                renderSlot(I.$slots, "default")
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
var Ea = defineComponent({
  __name: "MenuItemImpl",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(n, { expose: t }) {
    const e = n, { primitiveElement: o, currentElement: a } = V(), s = inject(Wt), l = ref(false), i = async (d) => {
      if (await nextTick(), !d.defaultPrevented && it(d)) {
        if (e.disabled)
          s.onItemLeave(d);
        else if (s.onItemEnter(d), !d.defaultPrevented) {
          const c = d.currentTarget;
          c && c.focus();
        }
      }
    }, u = async (d) => {
      await nextTick(), !d.defaultPrevented && it(d) && s.onItemLeave(d);
    };
    return t({
      el: a
    }), (d, c) => (openBlock(), createBlock(unref(M), {
      ref_key: "primitiveElement",
      ref: o,
      role: "menuitem",
      tabindex: "-1",
      "data-radix-vue-collection-item": "",
      "aria-disabled": d.disabled || void 0,
      "data-disabled": d.disabled ? "" : void 0,
      disabled: d.disabled,
      "data-highlighted": l.value ? "" : void 0,
      onPointermove: i,
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
    }, 8, ["aria-disabled", "data-disabled", "disabled", "data-highlighted"]));
  }
});
var bt = defineComponent({
  __name: "MenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(n, { emit: t }) {
    const e = n, { primitiveElement: o, currentElement: a } = V(), s = inject(at), l = inject(Wt), i = ref(false), u = async () => {
      const d = a.value;
      if (!e.disabled && d) {
        const c = new CustomEvent(dl, {
          bubbles: true,
          cancelable: true
        });
        t("select", c), await nextTick(), c.defaultPrevented ? i.value = false : s.onClose();
      }
    };
    return (d, c) => (openBlock(), createBlock(Ea, {
      ref_key: "primitiveElement",
      ref: o,
      disabled: d.disabled,
      onClick: u,
      onPointerdown: c[0] || (c[0] = () => {
        i.value = true;
      }),
      onPointerup: c[1] || (c[1] = async (f) => {
        var p;
        await nextTick(), !f.defaultPrevented && (i.value || (p = f.currentTarget) == null || p.click());
      }),
      onKeydown: c[2] || (c[2] = async (f) => {
        const p = unref(l).searchRef.value !== "";
        d.disabled || p && f.key === " " || unref(ro).includes(f.key) && (f.currentTarget.click(), f.preventDefault());
      })
    }, {
      default: withCtx(() => [
        renderSlot(d.$slots, "default")
      ]),
      _: 3
    }, 8, ["disabled"]));
  }
});
var Uo = Symbol();
var Yo = defineComponent({
  __name: "MenuItemIndicator",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(n) {
    const t = inject(Uo, {
      checked: ref(false)
    });
    return (e, o) => {
      var a, s;
      return openBlock(), createBlock(unref(re), {
        present: unref(At)((a = unref(t)) == null ? void 0 : a.checked.value) || ((s = unref(t)) == null ? void 0 : s.checked.value) === true
      }, {
        default: withCtx(() => [
          createVNode(unref(M), {
            as: e.as,
            "as-child": e.asChild,
            "data-state": unref(Do)(unref(t).checked.value)
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
var Go = defineComponent({
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
    const e = n, o = X(e, "checked", t);
    return provide(Uo, {
      checked: o
    }), (a, s) => (openBlock(), createBlock(bt, mergeProps({ role: "menuitemcheckbox" }, e, {
      "aria-checked": unref(At)(unref(o)) ? "mixed" : unref(o),
      "data-state": unref(Do)(unref(o)),
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
var Ql = defineComponent({
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
  setup(n, { emit: t }) {
    const e = n, o = inject(ge), a = J(t);
    return (s, l) => {
      var i, u;
      return openBlock(), createBlock(zo, mergeProps({ ...e, ...unref(a) }, {
        "trap-focus": (i = unref(o)) == null ? void 0 : i.open.value,
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
var jl = defineComponent({
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
  setup(n, { emit: t }) {
    const e = n, o = inject(ge), a = J(t);
    return (s, l) => (openBlock(), createBlock(zo, mergeProps({ ...e, ...unref(a) }, {
      "trap-focus": false,
      "disable-outside-pointer-events": false,
      "disable-outside-scroll": false,
      onDismiss: l[0] || (l[0] = (i) => {
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
var Xo = defineComponent({
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
  setup(n, { emit: t }) {
    const e = n, o = inject(ge), a = inject(at), s = J(t);
    return (l, i) => (openBlock(), createBlock(unref(re), {
      present: unref(o).open.value
    }, {
      default: withCtx(() => {
        var u;
        return [
          (u = unref(a)) != null && u.modal.value ? (openBlock(), createBlock(Ql, normalizeProps(mergeProps({ key: 0 }, { ...l.$attrs, ...e, ...unref(s) })), {
            default: withCtx(() => [
              renderSlot(l.$slots, "default")
            ]),
            _: 3
          }, 16)) : (openBlock(), createBlock(jl, normalizeProps(mergeProps({ key: 1 }, { ...l.$attrs, ...e, ...unref(s) })), {
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
var zt = defineComponent({
  __name: "MenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(n) {
    const t = n;
    return (e, o) => (openBlock(), createBlock(unref(M), mergeProps({ role: "group" }, t), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var qo = defineComponent({
  __name: "MenuLabel",
  props: {
    asChild: { type: Boolean },
    as: { default: "label" }
  },
  setup(n) {
    const t = n;
    return (e, o) => (openBlock(), createBlock(unref(M), mergeProps({ role: "group" }, t), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Jo = defineComponent({
  __name: "MenuPortal",
  props: {
    to: { default: "body" },
    disabled: { type: Boolean }
  },
  setup(n) {
    const t = n, e = inject(ge);
    return (o, a) => (openBlock(), createBlock(unref(re), {
      present: unref(e).open.value
    }, {
      default: withCtx(() => [
        (openBlock(), createBlock(Teleport, normalizeProps(guardReactiveProps(t)), [
          renderSlot(o.$slots, "default")
        ], 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
});
var Oa = Symbol();
var Zo = defineComponent({
  __name: "MenuRadioGroup",
  props: {
    modelValue: { default: "" },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(n, { emit: t }) {
    const e = n, o = X(e, "modelValue", t);
    return provide(Oa, {
      modelValue: o,
      onValueChange: (a) => {
        o.value = a;
      }
    }), (a, s) => (openBlock(), createBlock(zt, normalizeProps(guardReactiveProps(e)), {
      default: withCtx(() => [
        renderSlot(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Qo = defineComponent({
  __name: "MenuRadioItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(n, { emit: t }) {
    const e = n, { value: o } = toRefs(e), a = inject(Oa), s = computed(
      () => (a == null ? void 0 : a.modelValue.value) === (o == null ? void 0 : o.value)
    );
    return provide(Uo, {
      checked: s
    }), (l, i) => (openBlock(), createBlock(bt, mergeProps({ role: "menuitemradio" }, e, {
      "aria-checked": s.value,
      "data-state": unref(Do)(s.value),
      onSelect: i[0] || (i[0] = async (u) => {
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
var jo = defineComponent({
  __name: "MenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(n) {
    const t = n;
    return (e, o) => (openBlock(), createBlock(unref(M), mergeProps(t, {
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
var en = Symbol();
var tn = defineComponent({
  __name: "MenuSub",
  props: {
    open: { type: Boolean }
  },
  emits: ["update:open"],
  setup(n, { emit: t }) {
    const o = X(n, "open", t, {
      defaultValue: false,
      passive: true
    }), a = inject(ge), s = ref(), l = ref();
    return watchEffect((i) => {
      (a == null ? void 0 : a.open.value) === false && (o.value = false), i(() => o.value = false);
    }), provide(ge, {
      open: o,
      onOpenChange: (i) => {
        o.value = i;
      },
      content: l,
      onContentChange: (i) => {
        l.value = i;
      }
    }), provide(en, {
      triggerId: ne(),
      contentId: ne(),
      trigger: s,
      onTriggerChange: (i) => {
        s.value = i;
      }
    }), (i, u) => (openBlock(), createBlock(unref(tt), null, {
      default: withCtx(() => [
        renderSlot(i.$slots, "default")
      ]),
      _: 3
    }));
  }
});
var on = defineComponent({
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
    ...Ie
  }),
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss", "openAutoFocus", "closeAutoFocus"],
  setup(n, { emit: t }) {
    const e = n, o = J(t), a = inject(ge), s = inject(at), l = inject(en), { primitiveElement: i, currentElement: u } = V();
    return (d, c) => (openBlock(), createBlock(unref(re), {
      present: unref(a).open.value
    }, {
      default: withCtx(() => [
        createVNode(zo, mergeProps({
          ref_key: "primitiveElement",
          ref: i
        }, { ...e, ...unref(o) }, {
          id: unref(l).contentId,
          "aria-labelledby": unref(l).triggerId,
          align: "start",
          side: unref(s).dir.value === "rtl" ? "left" : "right",
          disableOutsidePointerEvents: false,
          disableOutsideScroll: false,
          trapFocus: false,
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
var nn = defineComponent({
  __name: "MenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(n) {
    const t = n, e = inject(ge), o = inject(at), a = inject(en), s = inject(Wt), l = ref(null), i = computed(
      () => s == null ? void 0 : s.pointerGraceTimerRef.value
    ), u = () => {
      l.value && window.clearTimeout(l.value), l.value = null;
    };
    onUnmounted(() => {
      u();
    });
    const d = (p) => {
      it(p) && (s.onItemEnter(p), e.onOpenChange(true), !p.defaultPrevented && !t.disabled && !(e != null && e.open.value) && !l.value && (s.onPointerGraceIntentChange(null), l.value = window.setTimeout(() => {
        u();
      }, 100)));
    }, c = (p) => {
      var v, h2;
      if (!it(p))
        return;
      u();
      const m = (v = e.content.value) == null ? void 0 : v.getBoundingClientRect();
      if (m) {
        const g = (h2 = e.content.value) == null ? void 0 : h2.dataset.side, $ = g === "right", O = $ ? -5 : 5, E = m[$ ? "left" : "right"], S = m[$ ? "right" : "left"];
        s.onPointerGraceIntentChange({
          area: [
            // Apply a bleed on clientX to ensure that our exit point is
            // consistently within polygon bounds
            { x: p.clientX + O, y: p.clientY },
            { x: E, y: m.top },
            { x: S, y: m.top },
            { x: S, y: m.bottom },
            { x: E, y: m.bottom }
          ],
          side: g
        }), window.clearTimeout(i.value), s.pointerGraceTimerRef.value = window.setTimeout(
          () => s.onPointerGraceIntentChange(null),
          300
        );
      } else {
        if (s.onTriggerLeave(p), p.defaultPrevented)
          return;
        s.onPointerGraceIntentChange(null);
      }
    }, f = async (p) => {
      var v;
      const m = s.searchRef.value !== "";
      t.disabled || m && p.key === " " || fl[o.dir.value].includes(p.key) && (e.onOpenChange(true), await nextTick(), (v = e.content.value) == null || v.focus(), p.preventDefault());
    };
    return (p, m) => (openBlock(), createBlock(Ht, { asChild: "" }, {
      default: withCtx(() => {
        var v;
        return [
          createVNode(Ea, {
            id: unref(a).triggerId,
            "aria-haspopup": "menu",
            "aria-expanded": unref(e).open.value,
            "aria-controls": (v = unref(a)) == null ? void 0 : v.contentId,
            "data-state": unref(Io)(unref(e).open.value),
            ref: (h2) => {
              var g;
              (g = unref(a)) == null || g.onTriggerChange(h2 == null ? void 0 : h2.el);
            },
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
var an = Symbol();
var xi = defineComponent({
  __name: "DropdownMenuRoot",
  props: {
    open: { type: Boolean, default: void 0 },
    defaultOpen: { type: Boolean },
    dir: { default: "ltr" },
    modal: { type: Boolean, default: true }
  },
  emits: ["update:open"],
  setup(n, { emit: t }) {
    const e = n, o = X(e, "open", t, {
      defaultValue: e.defaultOpen,
      passive: true
    }), a = ref(), { modal: s, dir: l } = toRefs(e);
    return provide(an, {
      open: o,
      onOpenChange: (i) => {
        o.value = i;
      },
      onOpenToggle: () => {
        o.value = !o.value;
      },
      triggerId: ne(),
      triggerElement: a,
      contentId: ne(),
      modal: s,
      dir: l
    }), (i, u) => (openBlock(), createBlock(unref(Wo), {
      open: unref(o),
      "onUpdate:open": u[0] || (u[0] = (d) => isRef(o) ? o.value = d : null),
      dir: unref(l),
      modal: unref(s)
    }, {
      default: withCtx(() => [
        renderSlot(i.$slots, "default")
      ]),
      _: 3
    }, 8, ["open", "dir", "modal"]));
  }
});
var Ri = defineComponent({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(n) {
    const t = n, e = inject(an), { primitiveElement: o, currentElement: a } = V();
    return onMounted(() => {
      e.triggerElement = a;
    }), (s, l) => (openBlock(), createBlock(unref(Ht), { asChild: "" }, {
      default: withCtx(() => {
        var i, u, d, c, f;
        return [
          createVNode(unref(M), {
            ref_key: "primitiveElement",
            ref: o,
            id: (i = unref(e)) == null ? void 0 : i.triggerId,
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
var Li = defineComponent({
  __name: "DropdownMenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean }
  },
  setup(n) {
    const t = n;
    return (e, o) => (openBlock(), createBlock(unref(Jo), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Ni = defineComponent({
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
    ...Ie
  }),
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss", "openAutoFocus", "closeAutoFocus"],
  setup(n, { emit: t }) {
    const e = n, o = inject(an), a = ref(false), s = J(t), l = (i) => {
      t("closeAutoFocus", i), !i.defaultPrevented && (a.value || setTimeout(() => {
        var u;
        (u = o == null ? void 0 : o.triggerElement.value) == null || u.focus();
      }, 0), a.value = false, i.preventDefault());
    };
    return (i, u) => {
      var d, c;
      return openBlock(), createBlock(unref(Xo), mergeProps({ ...e, ...unref(s) }, {
        id: (d = unref(o)) == null ? void 0 : d.contentId,
        "aria-labelledby": (c = unref(o)) == null ? void 0 : c.triggerId,
        onCloseAutoFocus: l,
        onInteractOutside: u[0] || (u[0] = (f) => {
          var h2;
          if (t("interactOutside", f), f.defaultPrevented)
            return;
          const p = f.detail.originalEvent, m = p.button === 0 && p.ctrlKey === true, v = p.button === 2 || m;
          (!((h2 = unref(o)) != null && h2.modal.value) || v) && (a.value = true);
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
          renderSlot(i.$slots, "default")
        ]),
        _: 3
      }, 16, ["id", "aria-labelledby", "style"]);
    };
  }
});
var Fi = defineComponent({
  __name: "DropdownMenuArrow",
  props: {
    width: { default: 10 },
    height: { default: 5 },
    asChild: { type: Boolean },
    as: {}
  },
  setup(n) {
    const t = n;
    return (e, o) => (openBlock(), createBlock(unref(Ho), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Ki = defineComponent({
  __name: "DropdownMenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(n, { emit: t }) {
    const e = n, o = J(t);
    return (a, s) => (openBlock(), createBlock(unref(bt), normalizeProps(guardReactiveProps({ ...e, ...unref(o) })), {
      default: withCtx(() => [
        renderSlot(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Vi = defineComponent({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(n) {
    const t = n;
    return (e, o) => (openBlock(), createBlock(unref(zt), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Hi = defineComponent({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(n) {
    const t = n;
    return (e, o) => (openBlock(), createBlock(unref(jo), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Wi = defineComponent({
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
    const e = n, o = J(t);
    return (a, s) => (openBlock(), createBlock(unref(Go), normalizeProps(guardReactiveProps({ ...e, ...unref(o) })), {
      default: withCtx(() => [
        renderSlot(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var zi = defineComponent({
  __name: "DropdownMenuItemIndicator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(n) {
    const t = n;
    return (e, o) => (openBlock(), createBlock(unref(Yo), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Ui = defineComponent({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(n) {
    const t = n;
    return (e, o) => (openBlock(), createBlock(unref(qo), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Yi = defineComponent({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(n, { emit: t }) {
    const e = n, o = J(t);
    return (a, s) => (openBlock(), createBlock(unref(Zo), normalizeProps(guardReactiveProps({ ...e, ...unref(o) })), {
      default: withCtx(() => [
        renderSlot(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Gi = defineComponent({
  __name: "DropdownMenuRadioItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(n, { emit: t }) {
    const e = n;
    return (o, a) => (openBlock(), createBlock(unref(Qo), normalizeProps(guardReactiveProps({ ...e, ...t })), {
      default: withCtx(() => [
        renderSlot(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Xi = defineComponent({
  __name: "DropdownMenuSub",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean }
  },
  emits: ["update:open"],
  setup(n, { emit: t }) {
    const e = n, o = X(e, "open", t, {
      passive: true,
      defaultValue: e.defaultOpen ?? false
    });
    return (a, s) => (openBlock(), createBlock(unref(tn), {
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
var qi = defineComponent({
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
    ...Ie
  }),
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss", "openAutoFocus", "closeAutoFocus"],
  setup(n, { emit: t }) {
    const e = n;
    return (o, a) => (openBlock(), createBlock(unref(on), mergeProps({ ...e, ...t }, { style: {
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
var Ji = defineComponent({
  __name: "DropdownMenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(n) {
    const t = n;
    return (e, o) => (openBlock(), createBlock(unref(nn), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var sn = Symbol();
var Zi = defineComponent({
  __name: "ContextMenuRoot",
  props: {
    dir: { default: "ltr" },
    modal: { type: Boolean, default: true }
  },
  emits: ["update:open"],
  setup(n, { emit: t }) {
    const e = n, { dir: o, modal: a } = toRefs(e), s = ref(false);
    return provide(sn, {
      open: s,
      onOpenChange: (l) => {
        s.value = l, t("update:open", l);
      },
      dir: o,
      modal: a
    }), (l, i) => (openBlock(), createBlock(unref(Wo), {
      open: s.value,
      "onUpdate:open": i[0] || (i[0] = (u) => s.value = u),
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
function An(n) {
  return n.pointerType !== "mouse";
}
var er = {
  inheritAttrs: false
};
var Qi = defineComponent({
  ...er,
  __name: "ContextMenuTrigger",
  props: {
    disabled: { type: Boolean, default: false },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(n) {
    const t = n, { disabled: e } = toRefs(t), o = inject(sn), a = ref({ x: 0, y: 0 }), s = computed(() => ({
      getBoundingClientRect: () => ({
        width: 0,
        height: 0,
        left: a.value.x,
        right: a.value.x,
        top: a.value.y,
        bottom: a.value.y,
        ...a.value
      })
    })), l = ref(0), i = () => {
      window.clearTimeout(l.value);
    }, u = (p) => {
      a.value = { x: p.clientX, y: p.clientY }, o == null || o.onOpenChange(true);
    }, d = async (p) => {
      e.value || (await nextTick(), p.defaultPrevented || (i(), u(p), p.preventDefault()));
    }, c = async (p) => {
      e.value || (await nextTick(), An(p) && !p.defaultPrevented && (i(), l.value = window.setTimeout(() => u(p), 700)));
    }, f = async (p) => {
      e.value || (await nextTick(), An(p) && !p.defaultPrevented && i());
    };
    return (p, m) => {
      var v;
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(unref(Ht), {
          as: "div",
          element: s.value
        }, null, 8, ["element"]),
        createVNode(unref(M), mergeProps({
          as: p.as,
          "as-child": p.asChild,
          "data-state": (v = unref(o)) != null && v.open.value ? "open" : "closed",
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
var ji = defineComponent({
  __name: "ContextMenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean }
  },
  setup(n) {
    const t = n;
    return (e, o) => (openBlock(), createBlock(unref(Jo), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var eu = defineComponent({
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
  setup(n, { emit: t }) {
    const e = n, o = inject(sn), a = ref(false);
    return (s, l) => (openBlock(), createBlock(unref(Xo), mergeProps(e, {
      side: "right",
      sideOffset: 2,
      align: "start",
      onCloseAutoFocus: l[0] || (l[0] = (i) => {
        t("closeAutoFocus", i), !i.defaultPrevented && a.value && i.preventDefault(), a.value = false;
      }),
      onInteractOutside: l[1] || (l[1] = (i) => {
        var u;
        t("interactOutside", i), !i.defaultPrevented && !((u = unref(o)) != null && u.modal.value) && (a.value = true);
      }),
      style: {
        "--radix-context-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-context-menu-content-available-width": "var(--radix-popper-available-width)",
        "--radix-context-menu-content-available-height": "var(--radix-popper-available-height)",
        "--radix-context-menu-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-context-menu-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }), {
      default: withCtx(() => [
        renderSlot(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["style"]));
  }
});
var tu = defineComponent({
  __name: "ContextMenuArrow",
  props: {
    width: {},
    height: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(n) {
    const t = n;
    return (e, o) => (openBlock(), createBlock(unref(Ho), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var ou = defineComponent({
  __name: "ContextMenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(n, { emit: t }) {
    const e = n, o = J(t);
    return (a, s) => (openBlock(), createBlock(unref(bt), normalizeProps(guardReactiveProps({ ...e, ...unref(o) })), {
      default: withCtx(() => [
        renderSlot(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var nu = defineComponent({
  __name: "ContextMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(n) {
    const t = n;
    return (e, o) => (openBlock(), createBlock(unref(zt), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var au = defineComponent({
  __name: "ContextMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(n) {
    const t = n;
    return (e, o) => (openBlock(), createBlock(unref(jo), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var su = defineComponent({
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
    const e = n, o = J(t);
    return (a, s) => (openBlock(), createBlock(unref(Go), normalizeProps(guardReactiveProps({ ...e, ...unref(o) })), {
      default: withCtx(() => [
        renderSlot(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var lu = defineComponent({
  __name: "ContextMenuItemIndicator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(n) {
    const t = n;
    return (e, o) => (openBlock(), createBlock(unref(Yo), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var ru = defineComponent({
  __name: "ContextMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(n) {
    const t = n;
    return (e, o) => (openBlock(), createBlock(unref(qo), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var iu = defineComponent({
  __name: "ContextMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(n, { emit: t }) {
    const e = n, o = J(t);
    return (a, s) => (openBlock(), createBlock(unref(Zo), normalizeProps(guardReactiveProps({ ...e, ...unref(o) })), {
      default: withCtx(() => [
        renderSlot(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var uu = defineComponent({
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
    const e = n, o = J(t);
    return (a, s) => (openBlock(), createBlock(unref(Qo), normalizeProps(guardReactiveProps({ ...e, ...unref(o) })), {
      default: withCtx(() => [
        renderSlot(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var du = defineComponent({
  __name: "ContextMenuSub",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean }
  },
  emits: ["update:open"],
  setup(n, { emit: t }) {
    const e = n, o = X(e, "open", t, {
      passive: true,
      defaultValue: e.defaultOpen
    });
    return (a, s) => (openBlock(), createBlock(unref(tn), {
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
var cu = defineComponent({
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
    ...Ie
  }),
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss", "openAutoFocus", "closeAutoFocus"],
  setup(n, { emit: t }) {
    const e = n, o = J(t);
    return (a, s) => (openBlock(), createBlock(unref(on), mergeProps({ ...e, ...unref(o) }, { style: {
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
var pu = defineComponent({
  __name: "ContextMenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(n) {
    const t = n;
    return (e, o) => (openBlock(), createBlock(unref(nn), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var tr = ["default-value"];
var or = defineComponent({
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
    gs(e);
    const o = ref();
    return (a, s) => (openBlock(), createBlock(unref(Ko), { asChild: "" }, {
      default: withCtx(() => [
        withDirectives(createBaseVNode("select", mergeProps({
          ref_key: "selectElement",
          ref: o,
          "default-value": unref(e)
        }, t, {
          "onUpdate:modelValue": s[0] || (s[0] = (l) => isRef(e) ? e.value = l : null)
        }), [
          renderSlot(a.$slots, "default")
        ], 16, tr), [
          [vModelSelect, unref(e)]
        ])
      ]),
      _: 3
    }));
  }
});
var nr = {
  key: 0,
  value: ""
};
var Ne = Symbol();
var $a = Symbol();
var fu = defineComponent({
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
    const e = n, o = X(e, "modelValue", t, {
      defaultValue: e.defaultValue,
      passive: true
    }), a = X(e, "open", t, {
      defaultValue: e.defaultOpen,
      passive: true
    }), s = ref(), l = ref(), i = ref({
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
      contentId: ne(),
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
      triggerPointerDownPosRef: i,
      disabled: d
    });
    const f = computed(
      () => s.value ? !!s.value.closest("form") : true
    ), p = ref(/* @__PURE__ */ new Set()), m = computed(() => Array.from(p.value).map((v) => {
      var h2;
      return (h2 = v.props) == null ? void 0 : h2.value;
    }).join(";"));
    return provide($a, {
      onNativeOptionAdd: (v) => {
        p.value.add(v);
      },
      onNativeOptionRemove: (v) => {
        p.value.delete(v);
      }
    }), (v, h2) => (openBlock(), createBlock(unref(tt), null, {
      default: withCtx(() => [
        renderSlot(v.$slots, "default"),
        f.value ? (openBlock(), createBlock(or, {
          "aria-hidden": "",
          tabIndex: "-1",
          key: m.value,
          required: unref(u),
          name: v.name,
          autocomplete: v.autocomplete,
          disabled: unref(d),
          value: unref(o),
          onChange: h2[0] || (h2[0] = (g) => o.value = g.target.value)
        }, {
          default: withCtx(() => [
            unref(o) === void 0 ? (openBlock(), createElementBlock("option", nr)) : createCommentVNode("", true),
            (openBlock(true), createElementBlock(Fragment, null, renderList(Array.from(p.value), (g) => (openBlock(), createBlock(resolveDynamicComponent(g), mergeProps(g.props, {
              key: g.key ?? ""
            }), null, 16))), 128))
          ]),
          _: 1
        }, 8, ["required", "name", "autocomplete", "disabled", "value"])) : createCommentVNode("", true)
      ]),
      _: 3
    }));
  }
});
var ar = [" ", "Enter", "ArrowUp", "ArrowDown"];
var sr = [" ", "Enter"];
var Ce = 10;
function Pa(n) {
  return n === "" || n === void 0;
}
var mu = defineComponent({
  __name: "SelectTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(n) {
    const t = n, e = inject(Ne), o = computed(() => {
      var p;
      return ((p = e == null ? void 0 : e.disabled) == null ? void 0 : p.value) || t.disabled;
    }), { primitiveElement: a, currentElement: s } = V();
    onMounted(() => {
      e.triggerElement = s;
    });
    const { injectCollection: l } = se(), i = l(), { search: u, handleTypeaheadSearch: d, resetTypeahead: c } = $o(i), f = () => {
      o.value || (e.onOpenChange(true), c());
    };
    return (p, m) => (openBlock(), createBlock(unref(ot), { asChild: "" }, {
      default: withCtx(() => {
        var v, h2, g, $, O, E, S, T;
        return [
          createVNode(unref(M), {
            ref_key: "primitiveElement",
            ref: a,
            role: "combobox",
            type: p.as === "button" ? "button" : void 0,
            "aria-controls": (v = unref(e)) == null ? void 0 : v.contentId,
            "aria-expanded": ((h2 = unref(e)) == null ? void 0 : h2.open.value) || false,
            "aria-required": ($ = (g = unref(e)) == null ? void 0 : g.required) == null ? void 0 : $.value,
            "aria-autocomplete": "none",
            dir: (O = unref(e)) == null ? void 0 : O.dir.value,
            "data-state": (E = unref(e)) != null && E.open.value ? "open" : "closed",
            "data-disabled": o.value ? "" : void 0,
            "data-placeholder": unref(Pa)((T = (S = unref(e)) == null ? void 0 : S.modelValue) == null ? void 0 : T.value) ? "" : void 0,
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
              !(D.ctrlKey || D.altKey || D.metaKey) && D.key.length === 1 && A && D.key === " " || (unref(d)(D.key), unref(ar).includes(D.key) && (f(), D.preventDefault()));
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
var vu = defineComponent({
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
var Ut = Symbol();
var hu = defineComponent({
  __name: "SelectViewport",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(n) {
    const t = n, e = inject(De), o = e.position === "item-aligned" ? inject(Ut) : void 0, { primitiveElement: a, currentElement: s } = V();
    onMounted(() => {
      e.onViewportChange(s.value);
    });
    const l = ref(0), i = (u) => {
      const d = u.currentTarget, { shouldExpandOnScrollRef: c, contentWrapper: f } = o;
      if (c != null && c.value && (f != null && f.value)) {
        const p = Math.abs(l.value - d.scrollTop);
        if (p > 0) {
          const m = window.innerHeight - Ce * 2, v = parseFloat(f.value.style.minHeight), h2 = parseFloat(f.value.style.height), g = Math.max(v, h2);
          if (g < m) {
            const $ = g + p, O = Math.min(m, $), E = $ - O;
            f.value.style.height = O + "px", f.value.style.bottom === "0px" && (d.scrollTop = E > 0 ? E : 0, f.value.style.justifyContent = "flex-end");
          }
        }
      }
      l.value = d.scrollTop;
    };
    return (u, d) => (openBlock(), createElementBlock(Fragment, null, [
      createVNode(unref(M), { as: "style" }, {
        default: withCtx(() => [
          createTextVNode(" /* Hide scrollbars cross-browser and enable momentum scroll for touch devices */ [data-radix-select-viewport] { -ms-overflow-style: none; -webkit-overflow-scrolling: touch; } [data-radix-select-viewport]::-webkit-scrollbar { display: none; } ")
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
        onScroll: i
      }), {
        default: withCtx(() => [
          renderSlot(u.$slots, "default")
        ]),
        _: 3
      }, 16, ["style"])
    ], 64));
  }
});
var lr = {
  inheritAttrs: false
};
var rr = defineComponent({
  ...lr,
  __name: "SelectItemAlignedPosition",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["placed"],
  setup(n, { emit: t }) {
    const e = n, { injectCollection: o } = se(), a = inject(Ne), s = inject(De), l = o(), i = ref(false), u = ref(true), d = ref(), { primitiveElement: c, currentElement: f } = V(), { viewport: p, selectedItem: m, selectedItemText: v, focusSelectedItem: h2 } = s, g = () => {
      if (a && a.triggerElement.value && a.valueElement.value && d.value && f.value && (p != null && p.value) && (m != null && m.value) && (v != null && v.value)) {
        const E = a.triggerElement.value.getBoundingClientRect(), S = f.value.getBoundingClientRect(), T = a.valueElement.value.getBoundingClientRect(), D = v.value.getBoundingClientRect();
        if (a.dir.value !== "rtl") {
          const Ke = D.left - S.left, Me = T.left - Ke, Ve = E.left - Me, He = E.width + Ve, Zt = Math.max(He, S.width), Qt = window.innerWidth - Ce, jt = fn(Me, Ce, Qt - Zt);
          d.value.style.minWidth = He + "px", d.value.style.left = jt + "px";
        } else {
          const Ke = S.right - D.right, Me = window.innerWidth - T.right - Ke, Ve = window.innerWidth - E.right - Me, He = E.width + Ve, Zt = Math.max(He, S.width), Qt = window.innerWidth - Ce, jt = fn(
            Me,
            Ce,
            Qt - Zt
          );
          d.value.style.minWidth = He + "px", d.value.style.right = jt + "px";
        }
        const A = l.value, W = window.innerHeight - Ce * 2, I = p.value.scrollHeight, R = window.getComputedStyle(f.value), N = parseInt(R.borderTopWidth, 10), z = parseInt(R.paddingTop, 10), Y = parseInt(
          R.borderBottomWidth,
          10
        ), G = parseInt(R.paddingBottom, 10), j = N + z + I + G + Y, ee = Math.min(
          m.value.offsetHeight * 5,
          j
        ), fe = window.getComputedStyle(p.value), we = parseInt(fe.paddingTop, 10), qt = parseInt(fe.paddingBottom, 10), Fe = E.top + E.height / 2 - Ce, Ot = W - Fe, st = m.value.offsetHeight / 2, Jt = m.value.offsetTop + st, $t = N + z + Jt, Ra = j - $t;
        if ($t <= Fe) {
          const Ke = m.value === A[A.length - 1];
          d.value.style.bottom = "0px";
          const Me = f.value.clientHeight - p.value.offsetTop - p.value.offsetHeight, Ve = Math.max(
            Ot,
            st + // viewport might have padding bottom, include it to avoid a scrollable viewport
            (Ke ? qt : 0) + Me + Y
          ), He = $t + Ve;
          d.value.style.height = He + "px";
        } else {
          const Ke = m.value === A[0];
          d.value.style.top = "0px";
          const Ve = Math.max(
            Fe,
            N + p.value.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
            (Ke ? we : 0) + st
          ) + Ra;
          d.value.style.height = Ve + "px", p.value.scrollTop = $t - Fe + p.value.offsetTop;
        }
        d.value.style.margin = `${Ce}px 0`, d.value.style.minHeight = ee + "px", d.value.style.maxHeight = W + "px", t("placed"), requestAnimationFrame(() => i.value = true);
      }
    }, $ = ref("");
    return onMounted(() => {
      g(), f.value && ($.value = window.getComputedStyle(f.value).zIndex);
    }), provide(Ut, {
      contentWrapper: d,
      shouldExpandOnScrollRef: i,
      onScrollButtonChange: (E) => {
        E && u.value === true && (g(), h2 == null || h2(), u.value = false);
      }
    }), (E, S) => (openBlock(), createElementBlock("div", {
      ref_key: "contentWrapperElement",
      ref: d,
      style: normalizeStyle({
        display: "flex",
        flexDirection: "column",
        position: "fixed",
        zIndex: $.value
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
var ir = defineComponent({
  __name: "SelectPopperPosition",
  props: {
    side: {},
    sideOffset: {},
    align: { default: "start" },
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: { default: Ce },
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
    return (e, o) => (openBlock(), createBlock(unref(yt), mergeProps(t, { style: {
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
var De = Symbol();
var ur = defineComponent({
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
    Eo(), Rt(true);
    const { createCollection: a } = se(), s = ref(), l = a(s), { search: i, handleTypeaheadSearch: u } = $o(l), d = ref(), c = ref(), f = ref(), p = ref(false), m = ref(false), v = () => {
      c.value && s.value && io([c.value, s.value]);
    };
    watch(p, () => {
      v();
    });
    const { onOpenChange: h2, triggerPointerDownPosRef: g } = o;
    watchEffect((E) => {
      if (!s.value)
        return;
      let S = { x: 0, y: 0 };
      const T = (A) => {
        var W, I;
        S = {
          x: Math.abs(
            Math.round(A.pageX) - (((W = g.value) == null ? void 0 : W.x) ?? 0)
          ),
          y: Math.abs(
            Math.round(A.pageY) - (((I = g.value) == null ? void 0 : I.y) ?? 0)
          )
        };
      }, D = (A) => {
        var W;
        S.x <= 10 && S.y <= 10 ? A.preventDefault() : (W = s.value) != null && W.contains(A.target) || h2(false), document.removeEventListener("pointermove", T), g.value = null;
      };
      g.value !== null && (document.addEventListener("pointermove", T), document.addEventListener("pointerup", D, {
        capture: true,
        once: true
      })), E(() => {
        document.removeEventListener("pointermove", T), document.removeEventListener("pointerup", D, {
          capture: true
        });
      });
    });
    const $ = (E) => {
      const S = E.ctrlKey || E.altKey || E.metaKey;
      if (E.key === "Tab" && E.preventDefault(), !S && E.key.length === 1 && u(E.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(E.key)) {
        let T = l.value;
        if (["ArrowUp", "End"].includes(E.key) && (T = T.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(E.key)) {
          const D = E.target, A = T.indexOf(D);
          T = T.slice(A + 1);
        }
        setTimeout(() => io(T)), E.preventDefault();
      }
    }, O = computed(() => e.position === "popper" ? e : {});
    return provide(De, {
      content: s,
      viewport: d,
      onViewportChange: (E) => {
        d.value = E;
      },
      itemRefCallback: (E, S, T) => {
        var W, I;
        const D = !m.value && !T;
        (((W = o == null ? void 0 : o.modelValue) == null ? void 0 : W.value) !== void 0 && ((I = o == null ? void 0 : o.modelValue) == null ? void 0 : I.value) === S || D) && (c.value = E, D && (m.value = true));
      },
      selectedItem: c,
      selectedItemText: f,
      onItemLeave: () => {
        var E;
        (E = s.value) == null || E.focus();
      },
      itemTextRefCallback: (E, S, T) => {
        var W, I;
        const D = !m.value && !T;
        (((W = o == null ? void 0 : o.modelValue) == null ? void 0 : W.value) !== void 0 && ((I = o == null ? void 0 : o.modelValue) == null ? void 0 : I.value) === S || D) && (f.value = E);
      },
      focusSelectedItem: v,
      position: e.position,
      isPositioned: p,
      searchRef: i
    }), (E, S) => (openBlock(), createBlock(unref(Ft), {
      asChild: "",
      onMountAutoFocus: S[6] || (S[6] = withModifiers(() => {
      }, ["prevent"])),
      onUnmountAutoFocus: S[7] || (S[7] = (T) => {
        var D, A;
        t("closeAutoFocus", T), !T.defaultPrevented && ((A = (D = unref(o)) == null ? void 0 : D.triggerElement.value) == null || A.focus({ preventScroll: true }), T.preventDefault());
      })
    }, {
      default: withCtx(() => [
        createVNode(unref(gt), {
          asChild: "",
          disableOutsidePointerEvents: "",
          onFocusOutside: S[2] || (S[2] = withModifiers(() => {
          }, ["prevent"])),
          onDismiss: S[3] || (S[3] = (T) => {
            var D;
            return (D = unref(o)) == null ? void 0 : D.onOpenChange(false);
          }),
          onEscapeKeyDown: S[4] || (S[4] = (T) => t("escapeKeyDown", T)),
          onPointerDownOutside: S[5] || (S[5] = (T) => t("pointerDownOutside", T))
        }, {
          default: withCtx(() => {
            var T, D, A;
            return [
              (openBlock(), createBlock(resolveDynamicComponent(
                E.position === "popper" ? ir : rr
              ), mergeProps({
                ref: (W) => {
                  s.value = unref(le)(W);
                }
              }, { ...E.$attrs, ...O.value }, {
                role: "listbox",
                id: (T = unref(o)) == null ? void 0 : T.contentId,
                "data-state": (D = unref(o)) != null && D.open.value ? "open" : "closed",
                dir: (A = unref(o)) == null ? void 0 : A.dir.value,
                onContextmenu: S[0] || (S[0] = withModifiers(() => {
                }, ["prevent"])),
                onPlaced: S[1] || (S[1] = (W) => p.value = true),
                onKeydown: $,
                style: {
                  // flex layout so we can place the scroll buttons properly
                  display: "flex",
                  flexDirection: "column",
                  // reset the outline by default as the content MAY get focused
                  outline: "none"
                }
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
var gu = defineComponent({
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
    const e = n, o = inject(Ne), a = J(t);
    return (s, l) => (openBlock(), createBlock(unref(re), {
      present: unref(o).open.value
    }, {
      default: withCtx(() => [
        createVNode(ur, normalizeProps(guardReactiveProps({ ...e, ...unref(a) })), {
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
var yu = defineComponent({
  __name: "SelectArrow",
  props: {
    width: {},
    height: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(n) {
    const t = n, e = inject(Ne), o = inject(De);
    return (a, s) => {
      var l, i;
      return (l = unref(e)) != null && l.open.value && ((i = unref(o)) == null ? void 0 : i.position) === "popper" ? (openBlock(), createBlock(unref(_t), normalizeProps(mergeProps({ key: 0 }, t)), {
        default: withCtx(() => [
          renderSlot(a.$slots, "default")
        ]),
        _: 3
      }, 16)) : createCommentVNode("", true);
    };
  }
});
var _u = defineComponent({
  __name: "SelectSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(n) {
    const t = n;
    return (e, o) => (openBlock(), createBlock(unref(M), mergeProps({ "aria-hidden": "" }, t), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var ln = Symbol();
var bu = defineComponent({
  __name: "SelectItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(n) {
    const t = n, { disabled: e } = toRefs(t), o = inject(Ne), a = inject(De), { primitiveElement: s, currentElement: l } = V(), i = computed(() => {
      var h2;
      return ((h2 = o == null ? void 0 : o.modelValue) == null ? void 0 : h2.value) === t.value;
    }), u = ref(false), d = ref(t.textValue ?? ""), c = ne(), f = async (h2) => {
      await nextTick(), !(h2 != null && h2.defaultPrevented) && (e.value || (o.onValueChange(t.value), o.onOpenChange(false)));
    }, p = async (h2) => {
      var g;
      await nextTick(), !h2.defaultPrevented && (e.value ? (g = a.onItemLeave) == null || g.call(a) : h2.currentTarget.focus({ preventScroll: true }));
    }, m = async (h2) => {
      var g;
      await nextTick(), !h2.defaultPrevented && h2.currentTarget === document.activeElement && ((g = a.onItemLeave) == null || g.call(a));
    }, v = async (h2) => {
      var $;
      await nextTick(), !(h2.defaultPrevented || (($ = a.searchRef) == null ? void 0 : $.value) !== "" && h2.key === " ") && (sr.includes(h2.key) && f(), h2.key === " " && h2.preventDefault());
    };
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
    }), provide(ln, {
      value: t.value,
      disabled: e,
      textId: c,
      isSelected: i,
      onItemTextChange: (h2) => {
        d.value = ((d.value || (h2 == null ? void 0 : h2.textContent)) ?? "").trim();
      }
    }), (h2, g) => (openBlock(), createBlock(unref(M), {
      ref_key: "primitiveElement",
      ref: s,
      "data-radix-vue-collection-item": "",
      "aria-labelledby": unref(c),
      "data-highlighted": u.value ? "" : void 0,
      "aria-selected": i.value && u.value,
      "data-state": i.value ? "checked" : "unchecked",
      "aria-disabled": unref(e) || void 0,
      "data-disabled": unref(e) ? "" : void 0,
      tabIndex: unref(e) ? void 0 : -1,
      as: h2.as,
      "as-child": h2.asChild,
      onFocus: g[0] || (g[0] = ($) => u.value = true),
      onBlur: g[1] || (g[1] = ($) => u.value = false),
      onPointerup: f,
      onPointermove: p,
      onPointerleave: m,
      onKeydown: v
    }, {
      default: withCtx(() => [
        renderSlot(h2.$slots, "default")
      ]),
      _: 3
    }, 8, ["aria-labelledby", "data-highlighted", "aria-selected", "data-state", "aria-disabled", "data-disabled", "tabIndex", "as", "as-child"]));
  }
});
var wu = defineComponent({
  __name: "SelectItemIndicator",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(n) {
    const t = n, e = inject(ln);
    return (o, a) => {
      var s;
      return (s = unref(e)) != null && s.isSelected.value ? (openBlock(), createBlock(unref(M), mergeProps({
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
var Ba = Symbol();
var Cu = defineComponent({
  __name: "SelectGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(n) {
    const t = n, e = ne();
    return provide(Ba, {
      id: e
    }), (o, a) => (openBlock(), createBlock(unref(M), mergeProps({ role: "group" }, t, { "aria-labelledby": unref(e) }), {
      default: withCtx(() => [
        renderSlot(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-labelledby"]));
  }
});
var Eu = defineComponent({
  __name: "SelectLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "label" }
  },
  setup(n) {
    const t = n, e = inject(Ba, {
      id: ""
    });
    return (o, a) => (openBlock(), createBlock(unref(M), mergeProps(t, {
      id: unref(e).id
    }), {
      default: withCtx(() => [
        renderSlot(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
});
var dr = {
  inheritAttrs: false
};
var Ou = defineComponent({
  ...dr,
  __name: "SelectItemText",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(n) {
    const t = n, e = inject(De), o = inject($a), a = inject(ln), { primitiveElement: s, currentElement: l } = V(), i = computed(() => {
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
      ), u(i.value));
    }), (c, f) => {
      var p;
      return openBlock(), createBlock(unref(M), mergeProps({
        ref_key: "primitiveElement",
        ref: s,
        id: (p = unref(a)) == null ? void 0 : p.textId
      }, t), {
        default: withCtx(() => [
          renderSlot(c.$slots, "default")
        ]),
        _: 3
      }, 16, ["id"]);
    };
  }
});
var Sa = defineComponent({
  __name: "SelectScrollButtonImpl",
  emits: ["auto-scroll"],
  setup(n, { emit: t }) {
    const { injectCollection: e } = se(), o = e(), a = inject(De), s = ref(null), l = () => {
      s.value !== null && (window.clearInterval(s.value), s.value = null);
    };
    watchEffect(() => {
      const d = o.value.find(
        (c) => c === document.activeElement
      );
      d == null || d.scrollIntoView({ block: "nearest" });
    });
    const i = () => {
      s.value === null && (s.value = window.setInterval(() => {
        t("auto-scroll");
      }, 50));
    }, u = () => {
      a.onItemLeave(), s.value === null && (s.value = window.setInterval(() => {
        t("auto-scroll");
      }, 50));
    };
    return onBeforeUnmount(() => l()), (d, c) => {
      var f;
      return openBlock(), createBlock(unref(M), mergeProps({
        "aria-hidden": "",
        style: {
          flexShrink: 0
        }
      }, (f = d.$parent) == null ? void 0 : f.$props, {
        onPointerdown: i,
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
var $u = defineComponent({
  __name: "SelectScrollUpButton",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(n) {
    const t = inject(De), e = t.position === "item-aligned" ? inject(Ut) : void 0, { primitiveElement: o, currentElement: a } = V(), s = ref(false);
    return watchEffect((l) => {
      var i, u;
      if ((i = t.viewport) != null && i.value && ((u = t.isPositioned) != null && u.value)) {
        let d = function() {
          s.value = c.scrollTop > 0;
        };
        const c = t.viewport.value;
        d(), c.addEventListener("scroll", d), l(() => c.removeEventListener("scroll", d));
      }
    }), watch(a, () => {
      a.value && (e == null || e.onScrollButtonChange(a.value));
    }), (l, i) => s.value ? (openBlock(), createBlock(Sa, {
      key: 0,
      ref_key: "primitiveElement",
      ref: o,
      onAutoScroll: i[0] || (i[0] = () => {
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
var Pu = defineComponent({
  __name: "SelectScrollDownButton",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(n) {
    const t = inject(De), e = t.position === "item-aligned" ? inject(Ut) : void 0, { primitiveElement: o, currentElement: a } = V(), s = ref(false);
    return watchEffect((l) => {
      var i, u;
      if ((i = t.viewport) != null && i.value && ((u = t.isPositioned) != null && u.value)) {
        let d = function() {
          const f = c.scrollHeight - c.clientHeight;
          s.value = Math.ceil(c.scrollTop) < f;
        };
        const c = t.viewport.value;
        d(), c.addEventListener("scroll", d), l(() => c.removeEventListener("scroll", d));
      }
    }), watch(a, () => {
      a.value && (e == null || e.onScrollButtonChange(a.value));
    }), (l, i) => s.value ? (openBlock(), createBlock(Sa, {
      key: 0,
      ref_key: "primitiveElement",
      ref: o,
      onAutoScroll: i[0] || (i[0] = () => {
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
var Bu = defineComponent({
  __name: "SelectValue",
  props: {
    placeholder: { default: "" },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(n) {
    const { primitiveElement: t, currentElement: e } = V(), o = inject(Ne);
    return onMounted(() => {
      var s, l;
      o.valueElement = e;
      const a = !!((l = (s = useSlots()) == null ? void 0 : s.default) != null && l.call(s));
      o.onValueElementHasChildrenChange(a);
    }), (a, s) => (openBlock(), createBlock(unref(M), {
      ref_key: "primitiveElement",
      ref: t,
      as: a.as,
      "as-child": a.asChild,
      style: { pointerEvents: "none" }
    }, {
      default: withCtx(() => {
        var l, i;
        return [
          unref(Pa)((i = (l = unref(o)) == null ? void 0 : l.modelValue) == null ? void 0 : i.value) ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
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
var wt = Symbol();
var Su = defineComponent({
  __name: "MenubarRoot",
  props: {
    modelValue: {},
    defaultValue: {},
    dir: { default: "ltr" },
    loop: { type: Boolean, default: false }
  },
  emits: ["update:modelValue"],
  setup(n, { emit: t }) {
    const e = n, { primitiveElement: o, currentElement: a } = V(), { createCollection: s } = se("menubar");
    s(a);
    const l = X(e, "modelValue", t, {
      passive: true,
      defaultValue: e.defaultValue ?? ""
    }), i = ref(null), { dir: u, loop: d } = toRefs(e);
    return provide(wt, {
      modelValue: l,
      dir: u,
      loop: d,
      onMenuOpen: (c) => {
        l.value = c, i.value = c;
      },
      onMenuClose: () => {
        l.value = "";
      },
      onMenuToggle: (c) => {
        l.value = l.value ? "" : c, i.value = c;
      }
    }), (c, f) => (openBlock(), createBlock(unref(M), {
      role: "menubar",
      ref_key: "primitiveElement",
      ref: o
    }, {
      default: withCtx(() => [
        renderSlot(c.$slots, "default")
      ]),
      _: 3
    }, 512));
  }
});
var Yt = Symbol();
var Tu = defineComponent({
  __name: "MenubarMenu",
  props: {
    value: {}
  },
  setup(n) {
    const e = n.value ?? ne(), o = inject(wt), a = ref(), s = ref(false), l = computed(() => (o == null ? void 0 : o.modelValue.value) === e);
    return watch(l, () => {
      l.value || (s.value = false);
    }), provide(Yt, {
      value: e,
      triggerElement: a,
      triggerId: e,
      contentId: ne(),
      wasKeyboardTriggerOpenRef: s
    }), (i, u) => {
      var d;
      return openBlock(), createBlock(unref(Wo), {
        open: l.value,
        modal: false,
        dir: (d = unref(o)) == null ? void 0 : d.dir.value,
        "onUpdate:open": u[0] || (u[0] = (c) => {
          var f;
          c || (f = unref(o)) == null || f.onMenuClose();
        })
      }, {
        default: withCtx(() => [
          renderSlot(i.$slots, "default")
        ]),
        _: 3
      }, 8, ["open", "dir"]);
    };
  }
});
var Au = defineComponent({
  __name: "MenubarTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(n) {
    const t = inject(wt), e = inject(Yt), { primitiveElement: o, currentElement: a } = V(), { injectCollection: s } = se("menubar"), l = s(), i = ref(false), u = computed(() => (t == null ? void 0 : t.modelValue.value) === (e == null ? void 0 : e.value));
    onMounted(() => {
      e.triggerElement = a;
    });
    const d = (c) => {
      var m;
      const f = document.activeElement, p = (m = l.value) == null ? void 0 : m[0].parentElement;
      !f || !p || Ge(c, f, p, {
        loop: t == null ? void 0 : t.loop.value,
        dir: t == null ? void 0 : t.dir.value,
        itemsArray: l.value,
        focus: true
      });
    };
    return (c, f) => (openBlock(), createBlock(unref(Ht), { asChild: "" }, {
      default: withCtx(() => {
        var p, m, v;
        return [
          createVNode(unref(M), {
            ref_key: "primitiveElement",
            ref: o,
            as: c.as,
            type: c.as === "button" ? "button" : void 0,
            role: "menuitem",
            id: (p = unref(e)) == null ? void 0 : p.triggerId,
            "aria-haspopup": "menu",
            "aria-expanded": u.value,
            "aria-controls": u.value ? (m = unref(e)) == null ? void 0 : m.contentId : void 0,
            "data-highlighted": i.value ? "" : void 0,
            "data-state": u.value ? "open" : "closed",
            "data-disabled": c.disabled ? "" : void 0,
            disabled: c.disabled,
            "data-value": (v = unref(e)) == null ? void 0 : v.value,
            "data-radix-vue-collection-item": "",
            onPointerdown: f[0] || (f[0] = (h2) => {
              !c.disabled && h2.button === 0 && h2.ctrlKey === false && (unref(t).onMenuOpen(unref(e).value), u.value || h2.preventDefault());
            }),
            onPointerenter: f[1] || (f[1] = () => {
              var g;
              !!unref(t).modelValue.value && !u.value && (unref(t).onMenuOpen(unref(e).value), (g = unref(a)) == null || g.focus());
            }),
            onKeydown: [
              f[2] || (f[2] = withKeys((h2) => {
                var g, $;
                c.disabled || (["Enter", " "].includes(h2.key) && ((g = unref(t)) == null || g.onMenuToggle(unref(e).value)), h2.key === "ArrowDown" && (($ = unref(t)) == null || $.onMenuOpen(unref(e).value)), ["Enter", " ", "ArrowDown"].includes(h2.key) && (unref(e).wasKeyboardTriggerOpenRef.value = true, h2.preventDefault()));
              }, ["enter", "space", "arrow-down"])),
              withKeys(d, ["arrow-right", "arrow-left", "home", "end"])
            ],
            onFocus: f[3] || (f[3] = (h2) => i.value = true),
            onBlur: f[4] || (f[4] = (h2) => i.value = false)
          }, {
            default: withCtx(() => [
              renderSlot(c.$slots, "default")
            ]),
            _: 3
          }, 8, ["as", "type", "id", "aria-expanded", "aria-controls", "data-highlighted", "data-state", "data-disabled", "disabled", "data-value", "onKeydown"])
        ];
      }),
      _: 3
    }));
  }
});
var Iu = defineComponent({
  __name: "MenubarPortal",
  props: {
    to: {},
    disabled: { type: Boolean }
  },
  setup(n) {
    const t = n;
    return (e, o) => (openBlock(), createBlock(unref(Jo), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Du = defineComponent({
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
    ...Ie,
    align: "start"
  }),
  setup(n) {
    const t = n, e = inject(wt), o = inject(Yt), { injectCollection: a } = se("menubar"), s = a(), l = ref(false), i = (u) => {
      const c = u.target.hasAttribute(
        "data-radix-menubar-subtrigger"
      ), p = ((e == null ? void 0 : e.dir.value) === "rtl" ? "ArrowRight" : "ArrowLeft") === u.key;
      if (!p && c)
        return;
      let v = s.value.map(($) => $.dataset.value);
      p && v.reverse();
      const h2 = v.indexOf(o == null ? void 0 : o.value);
      v = e != null && e.loop.value ? Po(v, h2 + 1) : v.slice(h2 + 1);
      const [g] = v;
      g && (e == null || e.onMenuOpen(g));
    };
    return (u, d) => {
      var c, f;
      return openBlock(), createBlock(unref(Xo), mergeProps({
        id: (c = unref(o)) == null ? void 0 : c.contentId,
        "aria-labelledby": (f = unref(o)) == null ? void 0 : f.triggerId,
        "data-radix-menubar-content": ""
      }, t, {
        onCloseAutoFocus: d[0] || (d[0] = (p) => {
          var v, h2;
          !!!((v = unref(e)) != null && v.modelValue.value) && !l.value && ((h2 = unref(o).triggerElement.value) == null || h2.focus()), l.value = false, p.preventDefault();
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
          (m = unref(o)) != null && m.wasKeyboardTriggerOpenRef.value || p.preventDefault();
        }),
        onKeydown: withKeys(i, ["arrow-right", "arrow-left"]),
        style: {
          "--radix-menubar-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-menubar-content-available-width": "var(--radix-popper-available-width)",
          "--radix-menubar-content-available-height": "var(--radix-popper-available-height)",
          "--radix-menubar-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-menubar-trigger-height": "var(--radix-popper-anchor-height)"
        }
      }), {
        default: withCtx(() => [
          renderSlot(u.$slots, "default")
        ]),
        _: 3
      }, 16, ["id", "aria-labelledby", "onKeydown", "style"]);
    };
  }
});
var Mu = defineComponent({
  __name: "MenubarArrow",
  props: {
    width: { default: 10 },
    height: { default: 5 },
    asChild: { type: Boolean },
    as: {}
  },
  setup(n) {
    const t = n;
    return (e, o) => (openBlock(), createBlock(unref(Ho), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var ku = defineComponent({
  __name: "MenubarItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(n, { emit: t }) {
    const e = n, o = J(t);
    return (a, s) => (openBlock(), createBlock(unref(bt), normalizeProps(guardReactiveProps({ ...e, ...unref(o) })), {
      default: withCtx(() => [
        renderSlot(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var xu = defineComponent({
  __name: "MenubarGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(n) {
    const t = n;
    return (e, o) => (openBlock(), createBlock(unref(zt), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Ru = defineComponent({
  __name: "MenubarSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(n) {
    const t = n;
    return (e, o) => (openBlock(), createBlock(unref(jo), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Lu = defineComponent({
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
    const e = n, o = J(t);
    return (a, s) => (openBlock(), createBlock(unref(Go), normalizeProps(guardReactiveProps({ ...e, ...unref(o) })), {
      default: withCtx(() => [
        renderSlot(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Nu = defineComponent({
  __name: "MenubarItemIndicator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(n) {
    const t = n;
    return (e, o) => (openBlock(), createBlock(unref(Yo), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Fu = defineComponent({
  __name: "MenubarLabel",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(n) {
    const t = n;
    return (e, o) => (openBlock(), createBlock(unref(qo), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Ku = defineComponent({
  __name: "MenubarRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(n, { emit: t }) {
    const e = n, o = J(t);
    return (a, s) => (openBlock(), createBlock(unref(Zo), normalizeProps(guardReactiveProps({ ...e, ...unref(o) })), {
      default: withCtx(() => [
        renderSlot(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Vu = defineComponent({
  __name: "MenubarRadioItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(n, { emit: t }) {
    const e = n;
    return (o, a) => (openBlock(), createBlock(unref(Qo), normalizeProps(guardReactiveProps({ ...e, ...t })), {
      default: withCtx(() => [
        renderSlot(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Hu = defineComponent({
  __name: "MenubarSub",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean }
  },
  emits: ["update:open"],
  setup(n, { emit: t }) {
    const e = n, o = X(e, "open", t, {
      passive: true,
      defaultValue: e.defaultOpen ?? false
    });
    return (a, s) => (openBlock(), createBlock(unref(tn), {
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
var Wu = defineComponent({
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
    ...Ie
  }),
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss", "openAutoFocus", "closeAutoFocus"],
  setup(n, { emit: t }) {
    const e = n, { injectCollection: o } = se("menubar"), a = inject(wt), s = inject(Yt), l = o(), i = (u) => {
      if (u.target.hasAttribute(
        "data-radix-menubar-subtrigger"
      ))
        return;
      let f = l.value.map((v) => v.dataset.value);
      const p = f.indexOf(s == null ? void 0 : s.value);
      f = a != null && a.loop.value ? Po(f, p + 1) : f.slice(p + 1);
      const [m] = f;
      m && (a == null || a.onMenuOpen(m));
    };
    return (u, d) => (openBlock(), createBlock(unref(on), mergeProps({ ...e, ...t }, {
      "data-radix-menubar-content": "",
      onKeydown: withKeys(i, ["arrow-right"]),
      style: {
        "--radix-menubar-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-menubar-content-available-width": "var(--radix-popper-available-width)",
        "--radix-menubar-content-available-height": "var(--radix-popper-available-height)",
        "--radix-menubar-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-menubar-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }), {
      default: withCtx(() => [
        renderSlot(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["onKeydown", "style"]));
  }
});
var zu = defineComponent({
  __name: "MenubarSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(n) {
    const t = n;
    return (e, o) => (openBlock(), createBlock(unref(nn), mergeProps({ "data-radix-menubar-subtrigger": "" }, t), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var ye = Symbol();
var Uu = defineComponent({
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
    const e = n, o = X(e, "modelValue", t, {
      passive: true,
      defaultValue: e.defaultValue ?? ""
    }), a = ref(""), { primitiveElement: s, currentElement: l } = V(), i = ref(), u = ref(), d = ref(/* @__PURE__ */ new Map()), { createCollection: c } = se("nav");
    c(i);
    const { delayDuration: f, skipDelayDuration: p } = toRefs(e), m = Vn(false, p), v = computed(() => o.value !== "" || m.value ? 150 : f.value), h2 = Co((g) => {
      a.value = o.value, o.value = g;
    }, v);
    return provide(ye, {
      isRootMenu: true,
      modelValue: o,
      previousValue: a,
      baseId: ne(),
      dir: e.dir,
      orientation: e.orientation,
      rootNavigationMenu: l,
      indicatorTrack: i,
      onIndicatorTrackChange: (g) => {
        i.value = g;
      },
      viewport: u,
      onViewportChange: (g) => {
        u.value = g;
      },
      viewportContent: d,
      onViewportContentChange: (g, $) => {
        const O = d.value;
        d.value = new Map(O.set(g, $));
      },
      onViewportContentRemove: (g) => {
        const $ = d.value;
        if (!$.has(g))
          return $;
        $.delete(g), d.value = new Map($);
      },
      onTriggerEnter: (g) => {
        h2(g);
      },
      onTriggerLeave: () => {
        m.value = true, h2("");
      },
      onContentEnter: (g) => {
        h2(g);
      },
      onContentLeave: () => {
        h2("");
      },
      onItemSelect: (g) => {
        a.value = o.value, o.value = g;
      },
      onItemDismiss: () => {
        a.value = o.value, o.value = "";
      }
    }), (g, $) => (openBlock(), createBlock(unref(M), {
      ref_key: "primitiveElement",
      ref: s,
      "aria-label": "Main",
      as: g.as,
      "as-child": g.asChild,
      "data-orientation": g.orientation,
      dir: g.dir
    }, {
      default: withCtx(() => [
        renderSlot(g.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-orientation", "dir"]));
  }
});
function Gt(n) {
  return n ? "open" : "closed";
}
function Ta(n, t) {
  return `${n}-trigger-${t}`;
}
function rn(n, t) {
  return `${n}-content-${t}`;
}
var Tt = "navigationMenu.rootContentDismiss";
function vo(n) {
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
function Aa(n) {
  const t = document.activeElement;
  return n.some((e) => e === t ? true : (e.focus(), document.activeElement !== t));
}
function cr(n) {
  return n.forEach((t) => {
    t.dataset.tabindex = t.getAttribute("tabindex") || "", t.setAttribute("tabindex", "-1");
  }), () => {
    n.forEach((t) => {
      const e = t.dataset.tabindex;
      t.setAttribute("tabindex", e);
    });
  };
}
var un = Symbol();
var Yu = defineComponent({
  __name: "NavigationMenuItem",
  props: {
    value: {},
    asChild: { type: Boolean },
    as: { default: "li" }
  },
  setup(n) {
    const t = n, { injectCollection: e } = se("nav"), o = e(), a = inject(ye), s = t.value || ne(), l = ref(), i = ref(), u = rn(a.baseId, s);
    let d = () => ({});
    const c = ref(false), f = async (h2 = "start") => {
      const g = document.getElementById(u);
      if (g) {
        d();
        const $ = vo(g);
        $.length && Aa(h2 === "start" ? $ : $.reverse());
      }
    }, p = () => {
      const h2 = document.getElementById(u);
      if (h2) {
        const g = vo(h2);
        g.length && (d = cr(g));
      }
    };
    provide(un, {
      value: s,
      contentId: u,
      triggerRef: l,
      focusProxyRef: i,
      wasEscapeCloseRef: c,
      onEntryKeyDown: f,
      onFocusProxyEnter: f,
      onContentFocusOutside: p,
      onRootContentClose: p
    });
    const m = () => {
      var h2;
      a == null || a.onItemDismiss(), (h2 = l.value) == null || h2.focus();
    }, v = (h2) => {
      const g = document.activeElement;
      if (h2.keyCode === 32 || h2.key === "Enter")
        if ((a == null ? void 0 : a.modelValue.value) === s) {
          m(), h2.preventDefault();
          return;
        } else {
          h2.target.click(), h2.preventDefault();
          return;
        }
      const $ = o.value.filter(
        (E) => {
          var S;
          return (S = E.parentElement) == null ? void 0 : S.hasAttribute("aria-menu-item");
        }
      ), O = Ge(h2, g, void 0, {
        itemsArray: $,
        loop: false
      });
      O && (O == null || O.focus()), h2.preventDefault(), h2.stopPropagation();
    };
    return (h2, g) => (openBlock(), createBlock(unref(M), {
      "as-child": t.asChild,
      as: h2.as,
      onKeydown: withKeys(v, ["up", "down", "left", "right", "home", "end", "space"]),
      "aria-menu-item": ""
    }, {
      default: withCtx(() => [
        renderSlot(h2.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "onKeydown"]));
  }
});
var Ia = defineComponent({
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
  setup(n, { expose: t, emit: e }) {
    const o = n, { injectCollection: a } = se("nav"), s = a(), { primitiveElement: l, currentElement: i } = V(), u = inject(ye), d = Ta(u.baseId, o.value), c = rn(u.baseId, o.value), f = ref(null), p = computed(() => {
      const E = s.value.map((I) => I.id.split("trigger-")[1]);
      (u == null ? void 0 : u.dir) === "rtl" && E.reverse();
      const S = E.indexOf(u.modelValue.value), T = E.indexOf(u.previousValue.value), D = o.value === (u == null ? void 0 : u.modelValue.value), A = T === E.indexOf(o.value);
      if (!D && !A)
        return f.value;
      const W = (() => {
        if (S !== T) {
          if (D && T !== -1)
            return S > T ? "from-end" : "from-start";
          if (A && S !== -1)
            return S > T ? "to-start" : "to-end";
        }
        return null;
      })();
      return f.value = W, W;
    }), m = (O) => {
      var E, S;
      if (e("focusOutside", O), e("interactOutside", O), !O.defaultPrevented) {
        o.onContentFocusOutside();
        const T = O.target;
        (S = (E = u.rootNavigationMenu) == null ? void 0 : E.value) != null && S.contains(T) && O.preventDefault();
      }
    }, v = (O) => {
      var E;
      if (e("pointerDownOutside", O), !O.defaultPrevented) {
        const S = O.target, T = s.value.some(
          (A) => A.contains(S)
        ), D = (u == null ? void 0 : u.isRootMenu) && ((E = u.viewport.value) == null ? void 0 : E.contains(S));
        (T || D || !(u != null && u.isRootMenu)) && O.preventDefault();
      }
    };
    watchEffect((O) => {
      const E = i.value;
      if (u != null && u.isRootMenu && E) {
        const S = () => {
          var T;
          u.onItemDismiss(), o.onRootContentClose(), E.contains(document.activeElement) && ((T = o.triggerRef.value) == null || T.focus());
        };
        E.addEventListener(Tt, S), O(
          () => E.removeEventListener(Tt, S)
        );
      }
    });
    const h2 = (O) => {
      var E, S;
      e("escapeKeyDown", O), O.defaultPrevented || (u.onItemDismiss(), (S = (E = o == null ? void 0 : o.triggerRef) == null ? void 0 : E.value) == null || S.focus(), o.wasEscapeCloseRef.value = true);
    }, g = (O) => {
      var A;
      const E = O.altKey || O.ctrlKey || O.metaKey, S = O.key === "Tab" && !E, T = vo(O.currentTarget);
      if (S) {
        const W = document.activeElement, I = T.findIndex(
          (z) => z === W
        ), N = O.shiftKey ? T.slice(0, I).reverse() : T.slice(I + 1, T.length);
        if (Aa(N))
          O.preventDefault();
        else {
          (A = o.focusProxyRef.value) == null || A.focus();
          return;
        }
      }
      const D = Ge(
        O,
        document.activeElement,
        void 0,
        { itemsArray: T, loop: false }
      );
      D == null || D.focus(), !(O.key === "Enter" || O.key === "Escape") && (O.preventDefault(), O.stopPropagation());
    }, $ = () => {
      var E;
      const O = new Event(Tt, {
        bubbles: true,
        cancelable: true
      });
      (E = i.value) == null || E.dispatchEvent(O);
    };
    return t({
      ...o
    }), (O, E) => {
      var S, T;
      return openBlock(), createBlock(unref(gt), {
        ref_key: "primitiveElement",
        ref: l,
        id: unref(c),
        "aria-labelledby": unref(d),
        "data-motion": p.value,
        "data-state": unref(Gt)(((S = unref(u)) == null ? void 0 : S.modelValue.value) === o.value),
        "data-orientation": (T = unref(u)) == null ? void 0 : T.orientation,
        "disable-outside-pointer-events": O.disableOutsidePointerEvents,
        onKeydown: g,
        onEscapeKeyDown: h2,
        onPointerDownOutside: v,
        onFocusOutside: m,
        onDismiss: $
      }, {
        default: withCtx(() => [
          renderSlot(O.$slots, "default")
        ]),
        _: 3
      }, 8, ["id", "aria-labelledby", "data-motion", "data-state", "data-orientation", "disable-outside-pointer-events"]);
    };
  }
});
var pr = {
  inheritAttrs: false
};
var Gu = defineComponent({
  ...pr,
  __name: "NavigationMenuContent",
  props: {
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss"],
  setup(n, { emit: t }) {
    const e = n, o = inject(ye), a = inject(un), s = computed(() => (a == null ? void 0 : a.value) === (o == null ? void 0 : o.modelValue.value)), l = Fn(
      () => a,
      () => ({
        ...e,
        value: a.value,
        triggerRef: a.triggerRef,
        focusProxyRef: a.focusProxyRef,
        wasEscapeCloseRef: a.wasEscapeCloseRef,
        onContentFocusOutside: a.onContentFocusOutside,
        onRootContentClose: a.onRootContentClose
      })
    ), i = getCurrentInstance();
    watch(
      s,
      async () => {
        var c, f;
        o != null && o.isRootMenu || await nextTick();
        const d = (f = (c = i == null ? void 0 : i.vnode.children) == null ? void 0 : c.default()) == null ? void 0 : f[0];
        o != null && o.viewport && d && (a != null && a.triggerRef.value) && (d.props = {
          ...d.props,
          ...l.value,
          triggerRef: a.triggerRef,
          focusProxyRef: a.focusProxyRef,
          wasEscapeCloseRef: a.wasEscapeCloseRef
        }, d.parentProps = i.vnode.props, o.onViewportContentChange(a.value, d), l.trigger());
      },
      { immediate: true, deep: true }
    );
    const u = (d) => {
      t("pointerDownOutside", d), d.preventDefault || o == null || o.onContentLeave();
    };
    return (d, c) => {
      var f;
      return (f = unref(o)) != null && f.viewport.value ? createCommentVNode("", true) : (openBlock(), createBlock(unref(re), {
        key: 0,
        present: s.value
      }, {
        default: withCtx(() => {
          var p;
          return [
            createVNode(Ia, mergeProps({
              "data-state": unref(Gt)(s.value),
              style: {
                pointerEvents: !s.value && ((p = unref(o)) != null && p.isRootMenu) ? "none" : void 0
              }
            }, { ...d.$attrs, ...unref(l) }, {
              onPointerenter: c[0] || (c[0] = (m) => {
                var v;
                return (v = unref(o)) == null ? void 0 : v.onContentEnter(unref(a).value);
              }),
              onPointerleave: c[1] || (c[1] = (m) => {
                var v;
                return (v = unref(o)) == null ? void 0 : v.onContentLeave();
              }),
              onPointerdown: u,
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
var fr = {
  inheritAttrs: false
};
var Xu = defineComponent({
  ...fr,
  __name: "NavigationMenuIndicator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(n) {
    const t = n, { injectCollection: e } = se("nav"), o = e(), a = inject(ye), s = ref(), l = computed(() => (a == null ? void 0 : a.orientation) === "horizontal"), i = computed(() => !!(a != null && a.modelValue.value)), u = ref(), d = () => {
      u.value && (s.value = {
        size: l.value ? u.value.offsetWidth : u.value.offsetHeight,
        offset: l.value ? u.value.offsetLeft : u.value.offsetTop
      });
    };
    return watchEffect(() => {
      if (!(a != null && a.modelValue.value)) {
        s.value = void 0;
        return;
      }
      const c = o.value;
      u.value = c.find(
        (f) => f.id.includes(a == null ? void 0 : a.modelValue.value)
      ), d();
    }), Be(u, d), Be(a.indicatorTrack, d), (c, f) => {
      var p, m;
      return (p = unref(a)) != null && p.indicatorTrack.value ? (openBlock(), createBlock(Teleport, {
        key: 0,
        to: (m = unref(a)) == null ? void 0 : m.indicatorTrack.value
      }, [
        createVNode(unref(re), { present: i.value }, {
          default: withCtx(() => {
            var v, h2, g, $;
            return [
              createVNode(unref(M), mergeProps({
                "aria-hidden": "",
                "data-state": i.value ? "visible" : "hidden",
                "data-orientation": unref(a).orientation,
                "as-child": t.asChild,
                as: c.as,
                style: {
                  position: "absolute",
                  ...l.value ? {
                    left: 0,
                    width: ((v = s.value) == null ? void 0 : v.size) + "px",
                    transform: `translateX(${(h2 = s.value) == null ? void 0 : h2.offset}px)`
                  } : {
                    top: 0,
                    height: ((g = s.value) == null ? void 0 : g.size) + "px",
                    transform: `translateY(${($ = s.value) == null ? void 0 : $.offset}px)`
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
var qu = defineComponent({
  __name: "NavigationMenuLink",
  props: {
    active: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "a" }
  },
  emits: ["select"],
  setup(n, { emit: t }) {
    const e = n, o = async (a) => {
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
    };
    return (a, s) => (openBlock(), createBlock(unref(M), {
      as: a.as,
      "data-active": a.active ? "" : void 0,
      "aria-current": a.active ? "page" : void 0,
      "as-child": e.asChild,
      onClick: o,
      "data-radix-vue-collection-item": ""
    }, {
      default: withCtx(() => [
        renderSlot(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "data-active", "aria-current", "as-child"]));
  }
});
var mr = {
  inheritAttrs: false
};
var Ju = defineComponent({
  ...mr,
  __name: "NavigationMenuList",
  props: {
    asChild: { type: Boolean },
    as: { default: "ul" }
  },
  setup(n) {
    const t = n, e = inject(ye), { primitiveElement: o, currentElement: a } = V();
    return onMounted(() => {
      e == null || e.onIndicatorTrackChange(a.value);
    }), (s, l) => (openBlock(), createBlock(unref(M), {
      ref_key: "primitiveElement",
      ref: o,
      style: { position: "relative" }
    }, {
      default: withCtx(() => {
        var i;
        return [
          createVNode(unref(M), mergeProps(s.$attrs, {
            "as-child": t.asChild,
            as: s.as,
            "data-orientation": (i = unref(e)) == null ? void 0 : i.orientation
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
var Zu = defineComponent({
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
    const e = n, o = X(e, "modelValue", t, {
      passive: true,
      defaultValue: e.defaultValue ?? ""
    }), a = ref(""), s = inject(ye), { primitiveElement: l, currentElement: i } = V(), u = ref(), d = ref(), c = ref(/* @__PURE__ */ new Map()), { createCollection: f } = se("nav");
    return f(u), provide(ye, {
      ...s,
      isRootMenu: false,
      modelValue: o,
      previousValue: a,
      orientation: e.orientation,
      rootNavigationMenu: i,
      indicatorTrack: u,
      onIndicatorTrackChange: (p) => {
        u.value = p;
      },
      viewport: d,
      onViewportChange: (p) => {
        d.value = p;
      },
      viewportContent: c,
      onViewportContentChange: (p, m) => {
        const v = c.value;
        c.value = new Map(v.set(p, m));
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
    }), (p, m) => (openBlock(), createBlock(unref(M), {
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
var vr = ["aria-owns"];
var hr = {
  inheritAttrs: false
};
var Qu = defineComponent({
  ...hr,
  __name: "NavigationMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(n) {
    const t = n, e = inject(ye), o = inject(un), { primitiveElement: a, currentElement: s } = V(), l = ref(""), i = ref(""), u = ref(false), d = ref(false), c = computed(() => (o == null ? void 0 : o.value) === (e == null ? void 0 : e.modelValue.value));
    onMounted(() => {
      o.triggerRef = s, l.value = Ta(e.baseId, o.value), i.value = rn(e.baseId, o.value);
    });
    const f = () => {
      d.value = false, o.wasEscapeCloseRef.value = false;
    }, p = (O) => {
      if (O.pointerType === "mouse") {
        if (t.disabled || d.value || o.wasEscapeCloseRef.value || u.value)
          return;
        e.onTriggerEnter(o.value), u.value = true;
      }
    }, m = (O) => {
      if (O.pointerType === "mouse") {
        if (t.disabled)
          return;
        e.onTriggerLeave(), u.value = false;
      }
    }, v = () => {
      c.value ? e == null || e.onItemSelect("") : e == null || e.onItemSelect(o.value), d.value = c.value;
    }, h2 = (O) => {
      const S = { horizontal: "ArrowDown", vertical: e.dir === "rtl" ? "ArrowLeft" : "ArrowRight" }[e.orientation];
      c.value && O.key === S && (o.onEntryKeyDown(), O.preventDefault(), O.stopPropagation());
    }, g = (O) => {
      o.focusProxyRef.value = le(O);
    }, $ = (O) => {
      const E = document.getElementById(o.contentId), S = O.relatedTarget, T = S === s.value, D = E == null ? void 0 : E.contains(S);
      (T || !D) && o.onFocusProxyEnter(T ? "start" : "end");
    };
    return (O, E) => {
      var S;
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(unref(M), mergeProps({
          ref_key: "primitiveElement",
          ref: a,
          id: l.value,
          disabled: O.disabled,
          "data-disabled": O.disabled ? "" : void 0,
          "data-state": unref(Gt)(c.value),
          "aria-expanded": c.value,
          "aria-controls": i.value,
          "as-child": t.asChild,
          as: O.as,
          onPointerenter: f,
          onPointermove: p,
          onPointerleave: m,
          onClick: v,
          onKeydown: h2
        }, O.$attrs, { "data-radix-vue-collection-item": "" }), {
          default: withCtx(() => [
            renderSlot(O.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "disabled", "data-disabled", "data-state", "aria-expanded", "aria-controls", "as-child", "as"]),
        c.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          createVNode(unref(Ko), {
            "aria-hidden": "",
            tabIndex: 0,
            ref: g,
            onFocus: $
          }),
          (S = unref(e)) != null && S.viewport ? (openBlock(), createElementBlock("span", {
            key: 0,
            "aria-owns": i.value
          }, null, 8, vr)) : createCommentVNode("", true)
        ], 64)) : createCommentVNode("", true)
      ], 64);
    };
  }
});
var gr = {
  inheritAttrs: false
};
var ju = defineComponent({
  ...gr,
  __name: "NavigationMenuViewport",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(n) {
    const { primitiveElement: t, currentElement: e } = V(), o = inject(ye), a = ref(), s = computed(() => !!(o != null && o.modelValue.value)), l = computed(
      () => s.value ? o.modelValue.value : o.previousValue.value
    );
    watch(e, () => {
      o.onViewportChange(e.value);
    });
    const i = computed(
      () => (
        // @ts-ignore
        Array.from(o == null ? void 0 : o.viewportContent.value.values())
      )
    ), u = ref();
    return Be(u, () => {
      u.value && (a.value = {
        width: u.value.offsetWidth,
        height: u.value.offsetHeight
      });
    }), (d, c) => (openBlock(), createBlock(unref(re), { present: s.value }, {
      default: withCtx(() => {
        var f, p, m, v;
        return [
          createVNode(unref(M), mergeProps(d.$attrs, {
            as: d.as,
            "as-child": d.asChild,
            ref_key: "primitiveElement",
            ref: t,
            "data-state": unref(Gt)(s.value),
            "data-orientation": (f = unref(o)) == null ? void 0 : f.orientation,
            style: {
              // Prevent interaction when animating out
              pointerEvents: !s.value && ((p = unref(o)) != null && p.isRootMenu) ? "none" : void 0,
              ["--radix-navigation-menu-viewport-width"]: a.value ? ((m = a.value) == null ? void 0 : m.width) + "px" : void 0,
              ["--radix-navigation-menu-viewport-height"]: a.value ? ((v = a.value) == null ? void 0 : v.height) + "px" : void 0
            },
            onPointerenter: c[0] || (c[0] = (h2) => {
              var g;
              return (g = unref(o)) == null ? void 0 : g.onContentEnter(l.value);
            }),
            onPointerleave: c[1] || (c[1] = (h2) => {
              var g;
              return (g = unref(o)) == null ? void 0 : g.onContentLeave();
            })
          }), {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList(i.value, (h2) => {
                var g, $;
                return openBlock(), createBlock(unref(re), {
                  key: (g = h2.props) == null ? void 0 : g.value,
                  present: l.value === (($ = h2.props) == null ? void 0 : $.value)
                }, {
                  default: withCtx(() => [
                    createVNode(Ia, mergeProps({
                      ref_for: true,
                      ref: (O) => {
                        var E;
                        l.value === ((E = h2.props) == null ? void 0 : E.value) && O && (u.value = unref(le)(O.$el));
                      }
                    }, { ...h2.props, ...h2.parentProps }), {
                      default: withCtx(() => [
                        (openBlock(), createBlock(resolveDynamicComponent(h2)))
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
var ue = Symbol();
var ed = defineComponent({
  __name: "ScrollAreaRoot",
  props: {
    type: { default: "hover" },
    dir: { default: "ltr" },
    scrollHideDelay: { default: 600 },
    asChild: { type: Boolean },
    as: {}
  },
  setup(n) {
    const t = n, { primitiveElement: e, currentElement: o } = V(), a = ref(0), s = ref(0), l = ref(), i = ref(), u = ref(), d = ref(), c = ref(false), f = ref(false), p = (A) => {
      l.value = A;
    }, m = (A) => {
      i.value = A;
    }, v = (A) => {
      u.value = A;
    }, h2 = (A) => {
      d.value = A;
    }, g = (A) => {
      c.value = A;
    }, $ = (A) => {
      f.value = A;
    }, O = (A) => {
      a.value = A;
    }, E = (A) => {
      s.value = A;
    }, { type: S, dir: T, scrollHideDelay: D } = toRefs(t);
    return provide(ue, {
      type: S,
      dir: T,
      scrollHideDelay: D,
      scrollArea: o,
      viewport: l,
      onViewportChange: p,
      content: i,
      onContentChange: m,
      scrollbarX: u,
      scrollbarXEnabled: c,
      scrollbarY: d,
      scrollbarYEnabled: f,
      onScrollbarXChange: v,
      onScrollbarYChange: h2,
      onScrollbarXEnabledChange: g,
      onScrollbarYEnabledChange: $,
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
        ["--radix-scroll-area-corner-width"]: a.value + "px",
        ["--radix-scroll-area-corner-height"]: s.value + "px"
      })
    }, {
      default: withCtx(() => [
        renderSlot(A.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "dir", "style"]));
  }
});
var yr = {
  inheritAttrs: false
};
var td = defineComponent({
  ...yr,
  __name: "ScrollAreaViewport",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(n) {
    const t = n, e = inject(ue), { primitiveElement: o, currentElement: a } = V(), s = ref();
    return onMounted(() => {
      e == null || e.onViewportChange(s.value), e == null || e.onContentChange(a.value);
    }), (l, i) => {
      var u, d;
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(unref(M), { as: "style" }, {
          default: withCtx(() => [
            createTextVNode(" /* Hide scrollbars cross-browser and enable momentum scroll for touch devices */ [data-radix-scroll-area-viewport] { -ms-overflow-style: none; -webkit-overflow-scrolling: touch; } [data-radix-scroll-area-viewport]::-webkit-scrollbar { display: none; } ")
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
function _r(n, [t, e]) {
  return Math.min(e, Math.max(t, n));
}
function Da(n, t) {
  return (e) => {
    if (n[0] === n[1] || t[0] === t[1])
      return t[0];
    const o = (t[1] - t[0]) / (n[1] - n[0]);
    return t[0] + o * (e - n[0]);
  };
}
function Xt(n) {
  const t = Ma(n.viewport, n.content), e = n.scrollbar.paddingStart + n.scrollbar.paddingEnd, o = (n.scrollbar.size - e) * t;
  return Math.max(o, 18);
}
function Ma(n, t) {
  const e = n / t;
  return isNaN(e) ? 0 : e;
}
var br = (n, t = () => {
}) => {
  let e = { left: n.scrollLeft, top: n.scrollTop }, o = 0;
  return function a() {
    const s = { left: n.scrollLeft, top: n.scrollTop }, l = e.left !== s.left, i = e.top !== s.top;
    (l || i) && t(), e = s, o = window.requestAnimationFrame(a);
  }(), () => window.cancelAnimationFrame(o);
};
function In(n, t, e = "ltr") {
  const o = Xt(t), a = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, s = t.scrollbar.size - a, l = t.content - t.viewport, i = s - o, u = e === "ltr" ? [0, l] : [l * -1, 0], d = _r(
    n,
    u
  );
  return Da([0, l], [0, i])(d);
}
function St(n) {
  return n ? parseInt(n, 10) : 0;
}
function wr(n, t, e, o = "ltr") {
  const a = Xt(e), s = a / 2, l = t || s, i = a - l, u = e.scrollbar.paddingStart + l, d = e.scrollbar.size - e.scrollbar.paddingEnd - i, c = e.content - e.viewport, f = o === "ltr" ? [0, c] : [c * -1, 0];
  return Da(
    [u, d],
    f
  )(n);
}
function Dn(n, t) {
  return n > 0 && n < t;
}
var ka = defineComponent({
  __name: "ScrollAreaScrollbarImpl",
  props: {
    isHorizontal: { type: Boolean }
  },
  emits: ["onDragScroll", "onWheelScroll", "onThumbPointerDown"],
  setup(n, { emit: t }) {
    const e = n, o = inject(ue), a = inject(
      Ct
    ), s = inject(Et), { primitiveElement: l, currentElement: i } = V(), u = ref(""), d = ref();
    function c(g) {
      var $, O;
      if (d.value) {
        const E = g.clientX - (($ = d.value) == null ? void 0 : $.left), S = g.clientY - ((O = d.value) == null ? void 0 : O.top);
        t("onDragScroll", { x: E, y: S });
      }
    }
    const f = (g) => {
      g.button === 0 && (g.target.setPointerCapture(g.pointerId), d.value = i.value.getBoundingClientRect(), u.value = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", o != null && o.viewport && (o.viewport.value.style.scrollBehavior = "auto"), c(g));
    }, p = (g) => {
      c(g);
    }, m = (g) => {
      const $ = g.target;
      $.hasPointerCapture(g.pointerId) && $.releasePointerCapture(g.pointerId), document.body.style.webkitUserSelect = u.value, o != null && o.viewport && (o.viewport.value.style.scrollBehavior = ""), d.value = void 0;
    }, v = (g) => {
      var S;
      if (!a)
        return;
      const $ = g.target, O = (S = i.value) == null ? void 0 : S.contains($), E = a.sizes.value.content - a.sizes.value.viewport;
      O && a.handleWheelScroll(g, E);
    };
    onMounted(() => {
      document.addEventListener("wheel", v, { passive: false });
    }), onUnmounted(() => {
      document.removeEventListener("wheel", v);
    });
    const h2 = () => {
      var g, $, O, E, S, T;
      i.value && (e.isHorizontal ? a == null || a.handleSizeChange({
        content: ((g = o == null ? void 0 : o.viewport.value) == null ? void 0 : g.scrollWidth) ?? 0,
        viewport: (($ = o == null ? void 0 : o.viewport.value) == null ? void 0 : $.offsetWidth) ?? 0,
        scrollbar: {
          size: ((O = i.value) == null ? void 0 : O.clientWidth) ?? 0,
          paddingStart: St(getComputedStyle(i.value).paddingLeft),
          paddingEnd: St(getComputedStyle(i.value).paddingRight)
        }
      }) : a == null || a.handleSizeChange({
        content: ((E = o == null ? void 0 : o.viewport.value) == null ? void 0 : E.scrollHeight) ?? 0,
        viewport: ((S = o == null ? void 0 : o.viewport.value) == null ? void 0 : S.offsetHeight) ?? 0,
        scrollbar: {
          size: ((T = i.value) == null ? void 0 : T.clientHeight) ?? 0,
          paddingStart: St(getComputedStyle(i.value).paddingLeft),
          paddingEnd: St(getComputedStyle(i.value).paddingRight)
        }
      }));
    };
    return Be(i, h2), Be(o == null ? void 0 : o.content, h2), (g, $) => {
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
          renderSlot(g.$slots, "default")
        ]),
        _: 3
      }, 8, ["as", "as-child"]);
    };
  }
});
var Cr = defineComponent({
  __name: "ScrollAreaScrollbarX",
  setup(n) {
    const t = inject(ue), e = inject(
      Ct
    ), { primitiveElement: o, currentElement: a } = V();
    onMounted(() => {
      a.value && (t == null || t.onScrollbarXChange(a.value));
    });
    const s = computed(() => e == null ? void 0 : e.sizes.value);
    return (l, i) => {
      var u, d, c, f;
      return openBlock(), createBlock(ka, {
        "is-horizontal": true,
        "data-orientation": "horizontal",
        ref_key: "primitiveElement",
        ref: o,
        onOnDragScroll: i[0] || (i[0] = (p) => {
          var m;
          return (m = unref(e)) == null ? void 0 : m.onDragScroll(p.x);
        }),
        style: normalizeStyle({
          bottom: 0,
          left: ((d = (u = unref(t)) == null ? void 0 : u.dir) == null ? void 0 : d.value) === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
          right: ((f = (c = unref(t)) == null ? void 0 : c.dir) == null ? void 0 : f.value) === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
          ["--radix-scroll-area-thumb-width"]: s.value ? unref(Xt)(s.value) + "px" : void 0
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
var Er = defineComponent({
  __name: "ScrollAreaScrollbarY",
  setup(n) {
    const t = inject(ue), e = inject(
      Ct
    ), { primitiveElement: o, currentElement: a } = V();
    onMounted(() => {
      a.value && (t == null || t.onScrollbarYChange(a.value));
    });
    const s = computed(() => e == null ? void 0 : e.sizes.value);
    return (l, i) => {
      var u, d, c, f;
      return openBlock(), createBlock(ka, {
        "is-horizontal": false,
        "data-orientation": "vertical",
        ref_key: "primitiveElement",
        ref: o,
        onOnDragScroll: i[0] || (i[0] = (p) => {
          var m;
          return (m = unref(e)) == null ? void 0 : m.onDragScroll(p.y);
        }),
        style: normalizeStyle({
          top: 0,
          right: ((d = (u = unref(t)) == null ? void 0 : u.dir) == null ? void 0 : d.value) === "ltr" ? 0 : void 0,
          left: ((f = (c = unref(t)) == null ? void 0 : c.dir) == null ? void 0 : f.value) === "rtl" ? 0 : void 0,
          bottom: "var(--radix-scroll-area-corner-height)",
          ["--radix-scroll-area-thumb-height"]: s.value ? unref(Xt)(s.value) + "px" : void 0
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
var Ct = Symbol();
var dn = defineComponent({
  __name: "ScrollAreaScrollbarVisible",
  setup(n) {
    const t = inject(ue), e = inject(Et), o = ref({
      content: 0,
      viewport: 0,
      scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
    }), a = computed(() => {
      const g = Ma(o.value.viewport, o.value.content);
      return g > 0 && g < 1;
    }), s = ref(), l = ref(0), i = (g, $) => {
      if (p.value) {
        const O = t.viewport.value.scrollLeft + g.deltaY;
        t.viewport.value.scrollLeft = O, Dn(O, $) && g.preventDefault();
      } else {
        const O = t.viewport.value.scrollTop + g.deltaY;
        t.viewport.value.scrollTop = O, Dn(O, $) && g.preventDefault();
      }
    }, u = (g, $) => {
      p.value ? l.value = $.x : l.value = $.y;
    }, d = (g) => {
      l.value = 0;
    }, c = (g) => {
      o.value = g;
    };
    function f(g, $) {
      return wr(
        g,
        l.value,
        o.value,
        $
      );
    }
    const p = computed(
      () => e == null ? void 0 : e.isHorizontal.value
    );
    return provide(
      Ct,
      {
        sizes: o,
        hasThumb: a,
        handleWheelScroll: i,
        handleThumbDown: u,
        handleThumbUp: d,
        handleSizeChange: c,
        onThumbPositionChange: () => {
          var g;
          if (p.value) {
            if (t != null && t.viewport.value && s.value) {
              const $ = t == null ? void 0 : t.viewport.value.scrollLeft, O = In(
                $,
                o.value,
                (g = t == null ? void 0 : t.dir) == null ? void 0 : g.value
              );
              s.value.style.transform = `translate3d(${O}px, 0, 0)`;
            }
          } else if (t != null && t.viewport.value && s.value) {
            const $ = t == null ? void 0 : t.viewport.value.scrollTop, O = In($, o.value);
            s.value.style.transform = `translate3d(0, ${O}px, 0)`;
          }
        },
        onThumbChange: (g) => {
          s.value = g;
        },
        onDragScroll: (g) => {
          var $;
          p.value ? t.viewport.value.scrollLeft = f(
            g,
            ($ = t.dir) == null ? void 0 : $.value
          ) : t.viewport.value.scrollTop = f(g);
        }
      }
    ), (g, $) => p.value ? (openBlock(), createBlock(Cr, normalizeProps(mergeProps({ key: 0 }, g.$attrs)), {
      default: withCtx(() => [
        renderSlot(g.$slots, "default")
      ]),
      _: 3
    }, 16)) : (openBlock(), createBlock(Er, normalizeProps(mergeProps({ key: 1 }, g.$attrs)), {
      default: withCtx(() => [
        renderSlot(g.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var xa = defineComponent({
  __name: "ScrollAreaScrollbarAuto",
  setup(n) {
    const t = inject(ue), e = inject(Et), o = ref(false), a = Co(() => {
      if (t != null && t.viewport.value) {
        const s = (t == null ? void 0 : t.viewport.value.offsetWidth) < (t == null ? void 0 : t.viewport.value.scrollWidth), l = (t == null ? void 0 : t.viewport.value.offsetHeight) < (t == null ? void 0 : t.viewport.value.scrollHeight);
        o.value = e != null && e.isHorizontal.value ? s : l;
      }
    }, 10);
    return Be(t == null ? void 0 : t.viewport, a), Be(t == null ? void 0 : t.content, a), (s, l) => o.value ? (openBlock(), createBlock(dn, mergeProps({ key: 0 }, s.$attrs, {
      "data-state": o.value ? "visible" : "hidden"
    }), {
      default: withCtx(() => [
        renderSlot(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-state"])) : createCommentVNode("", true);
  }
});
var Or = {
  inheritAttrs: false
};
var $r = defineComponent({
  ...Or,
  __name: "ScrollAreaScrollbarHover",
  setup(n) {
    const t = inject(ue);
    let e;
    const o = ref(false), a = () => {
      window.clearTimeout(e), o.value = true;
    }, s = () => {
      e = window.setTimeout(() => {
        o.value = false;
      }, t == null ? void 0 : t.scrollHideDelay.value);
    };
    return onMounted(() => {
      const l = t == null ? void 0 : t.scrollArea.value;
      l && (l.addEventListener("pointerenter", a), l.addEventListener("pointerleave", s));
    }), onUnmounted(() => {
      const l = t == null ? void 0 : t.scrollArea.value;
      l && (window.clearTimeout(e), l.removeEventListener("pointerenter", a), l.removeEventListener("pointerleave", s));
    }), (l, i) => o.value ? (openBlock(), createBlock(xa, mergeProps({ key: 0 }, l.$attrs, {
      "data-state": o.value ? "visible" : "hidden"
    }), {
      default: withCtx(() => [
        renderSlot(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-state"])) : createCommentVNode("", true);
  }
});
var Pr = defineComponent({
  __name: "ScrollAreaScrollbarScroll",
  setup(n) {
    const t = inject(ue), e = inject(Et), { state: o, dispatch: a } = Un("hidden", {
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
    const s = Co(() => a("SCROLL_END"), 100);
    return watchEffect(() => {
      const l = t == null ? void 0 : t.viewport.value, i = e != null && e.isHorizontal.value ? "scrollLeft" : "scrollTop";
      if (l) {
        let u = l[i];
        const d = () => {
          const c = l[i];
          u !== c && (a("SCROLL"), s()), u = c;
        };
        l.addEventListener("scroll", d);
      }
    }), (l, i) => unref(o) !== "hidden" ? (openBlock(), createBlock(dn, normalizeProps(mergeProps({ key: 0 }, l.$attrs)), {
      default: withCtx(() => [
        renderSlot(l.$slots, "default")
      ]),
      _: 3
    }, 16)) : createCommentVNode("", true);
  }
});
var Et = Symbol();
var Br = {
  inheritAttrs: false
};
var od = defineComponent({
  ...Br,
  __name: "ScrollAreaScrollbar",
  props: {
    orientation: { default: "vertical" },
    forceMount: { type: Boolean, default: void 0 },
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(n) {
    const t = n, e = inject(ue), o = computed(() => t.orientation === "horizontal");
    watch(
      o,
      () => {
        o.value ? e == null || e.onScrollbarXEnabledChange(true) : e == null || e.onScrollbarYEnabledChange(true);
      },
      { immediate: true }
    ), onUnmounted(() => {
      e == null || e.onScrollbarXEnabledChange(false), e == null || e.onScrollbarYEnabledChange(false);
    });
    const { orientation: a, forceMount: s, asChild: l, as: i } = toRefs(t);
    return provide(Et, {
      orientation: a,
      forceMount: s,
      isHorizontal: o,
      as: i,
      asChild: l
    }), (u, d) => {
      var c, f, p, m;
      return ((c = unref(e)) == null ? void 0 : c.type.value) === "hover" ? (openBlock(), createBlock($r, mergeProps({ key: 0 }, u.$attrs, { forceMount: unref(s) }), {
        default: withCtx(() => [
          renderSlot(u.$slots, "default")
        ]),
        _: 3
      }, 16, ["forceMount"])) : ((f = unref(e)) == null ? void 0 : f.type.value) === "scroll" ? (openBlock(), createBlock(Pr, mergeProps({ key: 1 }, u.$attrs, { forceMount: unref(s) }), {
        default: withCtx(() => [
          renderSlot(u.$slots, "default")
        ]),
        _: 3
      }, 16, ["forceMount"])) : ((p = unref(e)) == null ? void 0 : p.type.value) === "auto" ? (openBlock(), createBlock(xa, mergeProps({ key: 2 }, u.$attrs, { forceMount: unref(s) }), {
        default: withCtx(() => [
          renderSlot(u.$slots, "default")
        ]),
        _: 3
      }, 16, ["forceMount"])) : ((m = unref(e)) == null ? void 0 : m.type.value) === "always" ? (openBlock(), createBlock(dn, mergeProps({ key: 3 }, u.$attrs, {
        "data-state": "visible",
        forceMount: unref(s)
      }), {
        default: withCtx(() => [
          renderSlot(u.$slots, "default")
        ]),
        _: 3
      }, 16, ["forceMount"])) : createCommentVNode("", true);
    };
  }
});
var nd = defineComponent({
  __name: "ScrollAreaThumb",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(n) {
    const t = n, e = inject(ue), o = inject(
      Ct
    ), a = (p) => {
      const v = p.target.getBoundingClientRect(), h2 = p.clientX - v.left, g = p.clientY - v.top;
      o == null || o.handleThumbDown(p, { x: h2, y: g });
    }, s = (p) => {
      o == null || o.handleThumbUp(p);
    }, { primitiveElement: l, currentElement: i } = V(), u = ref(), d = computed(() => e == null ? void 0 : e.viewport.value), c = () => {
      if (!u.value) {
        const p = br(
          d.value,
          o == null ? void 0 : o.onThumbPositionChange
        );
        u.value = p, o == null || o.onThumbPositionChange();
      }
    }, f = computed(() => o == null ? void 0 : o.sizes.value);
    return ls(f, () => {
      o == null || o.onThumbChange(i.value), d.value && (o == null || o.onThumbPositionChange(), d.value.addEventListener("scroll", c));
    }), onUnmounted(() => {
      var p;
      d.value.removeEventListener("scroll", c), (p = e == null ? void 0 : e.viewport.value) == null || p.removeEventListener("scroll", c);
    }), (p, m) => {
      var v;
      return openBlock(), createBlock(unref(M), {
        ref_key: "primitiveElement",
        ref: l,
        "data-state": (v = unref(o)) != null && v.hasThumb ? "visible" : "hidden",
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
var Sr = defineComponent({
  __name: "ScrollAreaCornerImpl",
  setup(n) {
    const t = inject(ue), e = ref(0), o = ref(0), a = computed(() => !!e.value && !!o.value), s = () => {
      var u;
      const i = ((u = t == null ? void 0 : t.scrollbarX.value) == null ? void 0 : u.offsetHeight) || 0;
      t == null || t.onCornerHeightChange(i), o.value = i;
    }, l = () => {
      var u;
      const i = ((u = t == null ? void 0 : t.scrollbarY.value) == null ? void 0 : u.offsetWidth) || 0;
      t == null || t.onCornerWidthChange(i), e.value = i;
    };
    return Be(t == null ? void 0 : t.scrollbarX.value, s), Be(t == null ? void 0 : t.scrollbarY.value, l), watch(() => t == null ? void 0 : t.scrollbarX.value, s), watch(() => t == null ? void 0 : t.scrollbarY.value, l), (i, u) => {
      var d;
      return a.value ? (openBlock(), createBlock(unref(M), mergeProps({
        key: 0,
        style: {
          width: e.value + "px",
          height: o.value + "px",
          position: "absolute",
          right: unref(t).dir.value === "ltr" ? 0 : void 0,
          left: unref(t).dir.value === "rtl" ? 0 : void 0,
          bottom: 0
        }
      }, (d = i.$parent) == null ? void 0 : d.$props), {
        default: withCtx(() => [
          renderSlot(i.$slots, "default")
        ]),
        _: 3
      }, 16, ["style"])) : createCommentVNode("", true);
    };
  }
});
var ad = defineComponent({
  __name: "ScrollAreaCorner",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(n) {
    const t = n, e = inject(ue), o = computed(
      () => !!(e != null && e.scrollbarX.value) && !!e.scrollbarY.value
    ), a = computed(
      () => (e == null ? void 0 : e.type.value) !== "scroll" && o.value
    );
    return (s, l) => a.value ? (openBlock(), createBlock(Sr, normalizeProps(mergeProps({ key: 0 }, t)), {
      default: withCtx(() => [
        renderSlot(s.$slots, "default")
      ]),
      _: 3
    }, 16)) : createCommentVNode("", true);
  }
});
export {
  Mr as AccordionContent,
  kr as AccordionHeader,
  Dr as AccordionItem,
  Ir as AccordionRoot,
  xr as AccordionTrigger,
  di as AlertDialogAction,
  ri as AlertDialogCancel,
  si as AlertDialogContent,
  ui as AlertDialogDescription,
  li as AlertDialogOverlay,
  ai as AlertDialogPortal,
  oi as AlertDialogRoot,
  ii as AlertDialogTitle,
  ni as AlertDialogTrigger,
  Hr as AspectRatio,
  yi as AvatarFallback,
  gi as AvatarImage,
  hi as AvatarRoot,
  Lr as CheckboxIndicator,
  Rr as CheckboxRoot,
  Ds as CollapsibleContent,
  Ss as CollapsibleRoot,
  Ts as CollapsibleTrigger,
  tu as ContextMenuArrow,
  su as ContextMenuCheckboxItem,
  eu as ContextMenuContent,
  nu as ContextMenuGroup,
  ou as ContextMenuItem,
  lu as ContextMenuItemIndicator,
  ru as ContextMenuLabel,
  ji as ContextMenuPortal,
  iu as ContextMenuRadioGroup,
  uu as ContextMenuRadioItem,
  Zi as ContextMenuRoot,
  au as ContextMenuSeparator,
  du as ContextMenuSub,
  cu as ContextMenuSubContent,
  pu as ContextMenuSubTrigger,
  Qi as ContextMenuTrigger,
  ia as DialogClose,
  _l as DialogContent,
  Cl as DialogDescription,
  bl as DialogOverlay,
  Qs as DialogPortal,
  Js as DialogRoot,
  wl as DialogTitle,
  Zs as DialogTrigger,
  Fi as DropdownMenuArrow,
  Wi as DropdownMenuCheckboxItem,
  Ni as DropdownMenuContent,
  Vi as DropdownMenuGroup,
  Ki as DropdownMenuItem,
  zi as DropdownMenuItemIndicator,
  Ui as DropdownMenuLabel,
  Li as DropdownMenuPortal,
  Yi as DropdownMenuRadioGroup,
  Gi as DropdownMenuRadioItem,
  xi as DropdownMenuRoot,
  Hi as DropdownMenuSeparator,
  Xi as DropdownMenuSub,
  qi as DropdownMenuSubContent,
  Ji as DropdownMenuSubTrigger,
  Ri as DropdownMenuTrigger,
  Bi as HoverCardArrow,
  Pi as HoverCardContent,
  $i as HoverCardPortal,
  Ei as HoverCardRoot,
  Oi as HoverCardTrigger,
  Vr as Label,
  Mu as MenubarArrow,
  Lu as MenubarCheckboxItem,
  Du as MenubarContent,
  xu as MenubarGroup,
  ku as MenubarItem,
  Nu as MenubarItemIndicator,
  Fu as MenubarLabel,
  Tu as MenubarMenu,
  Iu as MenubarPortal,
  Ku as MenubarRadioGroup,
  Vu as MenubarRadioItem,
  Su as MenubarRoot,
  Ru as MenubarSeparator,
  Hu as MenubarSub,
  Wu as MenubarSubContent,
  zu as MenubarSubTrigger,
  Au as MenubarTrigger,
  Gu as NavigationMenuContent,
  Xu as NavigationMenuIndicator,
  Yu as NavigationMenuItem,
  qu as NavigationMenuLink,
  Ju as NavigationMenuList,
  Uu as NavigationMenuRoot,
  Zu as NavigationMenuSub,
  Qu as NavigationMenuTrigger,
  ju as NavigationMenuViewport,
  ki as PopoverAnchor,
  Di as PopoverArrow,
  Mi as PopoverClose,
  Ii as PopoverContent,
  Ai as PopoverPortal,
  Si as PopoverRoot,
  Ti as PopoverTrigger,
  ti as ProgressIndicator,
  ei as ProgressRoot,
  jr as RadioGroupIndicator,
  Qr as RadioGroupItem,
  Zr as RadioGroupRoot,
  ad as ScrollAreaCorner,
  ed as ScrollAreaRoot,
  od as ScrollAreaScrollbar,
  nd as ScrollAreaThumb,
  td as ScrollAreaViewport,
  yu as SelectArrow,
  gu as SelectContent,
  Cu as SelectGroup,
  bu as SelectItem,
  wu as SelectItemIndicator,
  Ou as SelectItemText,
  Eu as SelectLabel,
  vu as SelectPortal,
  fu as SelectRoot,
  Pu as SelectScrollDownButton,
  $u as SelectScrollUpButton,
  _u as SelectSeparator,
  mu as SelectTrigger,
  Bu as SelectValue,
  hu as SelectViewport,
  Kr as Separator,
  Jr as SliderRange,
  Gr as SliderRoot,
  Xr as SliderThumb,
  qr as SliderTrack,
  Nr as SwitchRoot,
  Fr as SwitchThumb,
  Ur as TabsContent,
  zr as TabsList,
  Wr as TabsRoot,
  Yr as TabsTrigger,
  Ls as Toggle,
  Us as ToggleGroupItem,
  zs as ToggleGroupRoot,
  El as ToolbarButton,
  pi as ToolbarLink,
  ci as ToolbarRoot,
  vi as ToolbarSeparator,
  fi as ToolbarToggleGroup,
  mi as ToolbarToggleItem,
  Ci as TooltipArrow,
  wi as TooltipContent,
  _i as TooltipRoot,
  bi as TooltipTrigger
};
//# sourceMappingURL=radix-vue.js.map
