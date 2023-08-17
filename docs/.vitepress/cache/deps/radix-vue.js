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
  vModelSelect,
  watch,
  watchEffect,
  withCtx,
  withDirectives,
  withKeys,
  withModifiers
} from "./chunk-OX6HOUGK.js";
import "./chunk-76J2PTFD.js";

// node_modules/.pnpm/radix-vue@0.1.20_vue@3.3.4/node_modules/radix-vue/dist/index.js
var Ya = Object.defineProperty;
var Ua = Object.defineProperties;
var Ga = Object.getOwnPropertyDescriptors;
var dn = Object.getOwnPropertySymbols;
var Xa = Object.prototype.hasOwnProperty;
var qa = Object.prototype.propertyIsEnumerable;
var cn = (o, t, e) => t in o ? Ya(o, t, { enumerable: true, configurable: true, writable: true, value: e }) : o[t] = e;
var Ja = (o, t) => {
  for (var e in t || (t = {}))
    Xa.call(t, e) && cn(o, e, t[e]);
  if (dn)
    for (var e of dn(t))
      qa.call(t, e) && cn(o, e, t[e]);
  return o;
};
var Za = (o, t) => Ua(o, Ga(t));
function Qa(o, t) {
  var e;
  const n = shallowRef();
  return watchEffect(() => {
    n.value = o();
  }, Za(Ja({}, t), {
    flush: (e = t == null ? void 0 : t.flush) != null ? e : "sync"
  })), readonly(n);
}
function Fn(o, t) {
  let e, n, a;
  const s = ref(true), l = () => {
    s.value = true, a();
  };
  watch(o, l, { flush: "sync" });
  const i = typeof t == "function" ? t : t.get, u = typeof t == "function" ? void 0 : t.set, d = customRef((c, f) => (n = c, a = f, {
    get() {
      return s.value && (e = i(), s.value = false), n(), e;
    },
    set(p) {
      u == null || u(p);
    }
  }));
  return Object.isExtensible(d) && (d.trigger = l), d;
}
function kt(o) {
  return getCurrentScope() ? (onScopeDispose(o), true) : false;
}
function wo(o) {
  let t = false, e;
  const n = effectScope(true);
  return (...a) => (t || (e = n.run(() => o(...a)), t = true), e);
}
function xe(o) {
  return typeof o == "function" ? o() : unref(o);
}
var Te = typeof window < "u";
var ja = (o) => typeof o < "u";
var pn = (o, t, e) => Math.min(e, Math.max(t, o));
var Ze = () => {
};
var ro = es();
function es() {
  var o;
  return Te && ((o = window == null ? void 0 : window.navigator) == null ? void 0 : o.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
}
function ts(o, t) {
  function e(...n) {
    return new Promise((a, s) => {
      Promise.resolve(o(() => t.apply(this, n), { fn: t, thisArg: this, args: n })).then(a).catch(s);
    });
  }
  return e;
}
function os(o, t = {}) {
  let e, n, a = Ze;
  const s = (i) => {
    clearTimeout(i), a(), a = Ze;
  };
  return (i) => {
    const u = xe(o), d = xe(t.maxWait);
    return e && s(e), u <= 0 || d !== void 0 && d <= 0 ? (n && (s(n), n = null), Promise.resolve(i())) : new Promise((c, f) => {
      a = t.rejectOnCancel ? f : c, d && !n && (n = setTimeout(() => {
        e && s(e), n = null, c(i());
      }, d)), e = setTimeout(() => {
        n && s(n), n = null, c(i());
      }, u);
    });
  };
}
function Kn(...o) {
  if (o.length !== 1)
    return toRef(...o);
  const t = o[0];
  return typeof t == "function" ? readonly(customRef(() => ({ get: t, set: Ze }))) : ref(t);
}
function Hn(o, t = 1e4) {
  return customRef((e, n) => {
    let a = o, s;
    const l = () => setTimeout(() => {
      a = o, n();
    }, xe(t));
    return kt(() => {
      clearTimeout(s);
    }), {
      get() {
        return e(), a;
      },
      set(i) {
        a = i, n(), clearTimeout(s), s = l();
      }
    };
  });
}
function Eo(o, t = 200, e = {}) {
  return ts(
    os(t, e),
    o
  );
}
function ns(o, t, e) {
  const n = watch(o, (...a) => (nextTick(() => n()), t(...a)), e);
}
function se(o) {
  var t;
  const e = xe(o);
  return (t = e == null ? void 0 : e.$el) != null ? t : e;
}
var pt = Te ? window : void 0;
var to = Te ? window.document : void 0;
function _e(...o) {
  let t, e, n, a;
  if (typeof o[0] == "string" || Array.isArray(o[0]) ? ([e, n, a] = o, t = pt) : [t, e, n, a] = o, !t)
    return Ze;
  Array.isArray(e) || (e = [e]), Array.isArray(n) || (n = [n]);
  const s = [], l = () => {
    s.forEach((c) => c()), s.length = 0;
  }, i = (c, f, p, m) => (c.addEventListener(f, p, m), () => c.removeEventListener(f, p, m)), u = watch(
    () => [se(t), xe(a)],
    ([c, f]) => {
      l(), c && s.push(
        ...e.flatMap((p) => n.map((m) => i(c, p, m, f)))
      );
    },
    { immediate: true, flush: "post" }
  ), d = () => {
    u(), l();
  };
  return kt(d), d;
}
var fn = false;
function Vn(o, t, e = {}) {
  const { window: n = pt, ignore: a = [], capture: s = true, detectIframe: l = false } = e;
  if (!n)
    return;
  ro && !fn && (fn = true, Array.from(n.document.body.children).forEach((p) => p.addEventListener("click", Ze)), n.document.documentElement.addEventListener("click", Ze));
  let i = true;
  const u = (p) => a.some((m) => {
    if (typeof m == "string")
      return Array.from(n.document.querySelectorAll(m)).some((v) => v === p.target || p.composedPath().includes(v));
    {
      const v = se(m);
      return v && (p.target === v || p.composedPath().includes(v));
    }
  }), c = [
    _e(n, "click", (p) => {
      const m = se(o);
      if (!(!m || m === p.target || p.composedPath().includes(m))) {
        if (p.detail === 0 && (i = !u(p)), !i) {
          i = true;
          return;
        }
        t(p);
      }
    }, { passive: true, capture: s }),
    _e(n, "pointerdown", (p) => {
      const m = se(o);
      m && (i = !p.composedPath().includes(m) && !u(p));
    }, { passive: true }),
    l && _e(n, "blur", (p) => {
      setTimeout(() => {
        var m;
        const v = se(o);
        ((m = n.document.activeElement) == null ? void 0 : m.tagName) === "IFRAME" && !(v != null && v.contains(n.document.activeElement)) && t(p);
      }, 0);
    })
  ].filter(Boolean);
  return () => c.forEach((p) => p());
}
function as(o) {
  return typeof o == "function" ? o : typeof o == "string" ? (t) => t.key === o : Array.isArray(o) ? (t) => o.includes(t.key) : () => true;
}
function ss(...o) {
  let t, e, n = {};
  o.length === 3 ? (t = o[0], e = o[1], n = o[2]) : o.length === 2 ? typeof o[1] == "object" ? (t = true, e = o[0], n = o[1]) : (t = o[0], e = o[1]) : (t = true, e = o[0]);
  const {
    target: a = pt,
    eventName: s = "keydown",
    passive: l = false,
    dedupe: i = false
  } = n, u = as(t);
  return _e(a, s, (c) => {
    c.repeat && xe(i) || u(c) && e(c);
  }, l);
}
function ls(o = {}) {
  var t;
  const {
    window: e = pt,
    deep: n = true
  } = o, a = (t = o.document) != null ? t : e == null ? void 0 : e.document, s = () => {
    var i;
    let u = a == null ? void 0 : a.activeElement;
    if (n)
      for (; u != null && u.shadowRoot; )
        u = (i = u == null ? void 0 : u.shadowRoot) == null ? void 0 : i.activeElement;
    return u;
  }, l = Fn(
    () => null,
    () => s()
  );
  return e && (_e(e, "blur", (i) => {
    i.relatedTarget === null && l.trigger();
  }, true), _e(e, "focus", l.trigger, true)), l;
}
function rs() {
  const o = ref(false);
  return getCurrentInstance() && onMounted(() => {
    o.value = true;
  }), o;
}
function is(o) {
  const t = rs();
  return computed(() => (t.value, !!o()));
}
function us(o) {
  return JSON.parse(JSON.stringify(o));
}
var mn = Object.getOwnPropertySymbols;
var ds = Object.prototype.hasOwnProperty;
var cs = Object.prototype.propertyIsEnumerable;
var ps = (o, t) => {
  var e = {};
  for (var n in o)
    ds.call(o, n) && t.indexOf(n) < 0 && (e[n] = o[n]);
  if (o != null && mn)
    for (var n of mn(o))
      t.indexOf(n) < 0 && cs.call(o, n) && (e[n] = o[n]);
  return e;
};
function $e(o, t, e = {}) {
  const n = e, { window: a = pt } = n, s = ps(n, ["window"]);
  let l;
  const i = is(() => a && "ResizeObserver" in a), u = () => {
    l && (l.disconnect(), l = void 0);
  }, d = computed(
    () => Array.isArray(o) ? o.map((p) => se(p)) : [se(o)]
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
  return kt(f), {
    isSupported: i,
    stop: f
  };
}
function fs(o, t) {
  const e = shallowRef(t);
  return watch(
    Kn(o),
    (n, a) => {
      e.value = a;
    },
    { flush: "sync" }
  ), readonly(e);
}
function Wn(o) {
  const t = window.getComputedStyle(o);
  if (t.overflowX === "scroll" || t.overflowY === "scroll" || t.overflowX === "auto" && o.clientWidth < o.scrollWidth || t.overflowY === "auto" && o.clientHeight < o.scrollHeight)
    return true;
  {
    const e = o.parentNode;
    return !e || e.tagName === "BODY" ? false : Wn(e);
  }
}
function ms(o) {
  const t = o || window.event, e = t.target;
  return Wn(e) ? false : t.touches.length > 1 ? true : (t.preventDefault && t.preventDefault(), false);
}
function vs(o, t = false) {
  const e = ref(t);
  let n = null, a;
  watch(Kn(o), (i) => {
    if (i) {
      const u = i;
      a = u.style.overflow, e.value && (u.style.overflow = "hidden");
    }
  }, {
    immediate: true
  });
  const s = () => {
    const i = xe(o);
    !i || e.value || (ro && (n = _e(
      i,
      "touchmove",
      (u) => {
        ms(u);
      },
      { passive: false }
    )), i.style.overflow = "hidden", e.value = true);
  }, l = () => {
    const i = xe(o);
    !i || !e.value || (ro && (n == null || n()), i.style.overflow = a, e.value = false);
  };
  return kt(l), computed({
    get() {
      return e.value;
    },
    set(i) {
      i ? s() : l();
    }
  });
}
function X(o, t, e, n = {}) {
  var a, s, l;
  const {
    clone: i = false,
    passive: u = false,
    eventName: d,
    deep: c = false,
    defaultValue: f,
    shouldEmit: p
  } = n, m = getCurrentInstance(), v = e || (m == null ? void 0 : m.emit) || ((a = m == null ? void 0 : m.$emit) == null ? void 0 : a.bind(m)) || ((l = (s = m == null ? void 0 : m.proxy) == null ? void 0 : s.$emit) == null ? void 0 : l.bind(m == null ? void 0 : m.proxy));
  let h2 = d;
  t || (t = "modelValue"), h2 = h2 || `update:${t.toString()}`;
  const y = ($) => i ? typeof i == "function" ? i($) : us($) : $, C = () => ja(o[t]) ? y(o[t]) : f, O = ($) => {
    p ? p($) && v(h2, $) : v(h2, $);
  };
  if (u) {
    const $ = C(), S = ref($);
    return watch(
      () => o[t],
      (A) => S.value = y(A)
    ), watch(
      S,
      (A) => {
        (A !== o[t] || c) && O(A);
      },
      { deep: c }
    ), S;
  } else
    return computed({
      get() {
        return C();
      },
      set($) {
        O($);
      }
    });
}
function pe(o, t, e, n = {}) {
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
  } = n, [f, p, m, v, h2, y] = [
    o.key === "ArrowRight",
    o.key === "ArrowLeft",
    o.key === "ArrowUp",
    o.key === "ArrowDown",
    o.key === "Home",
    o.key === "End"
  ], C = m || v, O = f || p;
  if (!h2 && !y && (!C && !O || a === "vertical" && O || a === "horizontal" && C))
    return null;
  const $ = e ? Array.from(e.querySelectorAll(`[${s}]`)) : l;
  if (!$.length)
    return null;
  d && o.preventDefault();
  let S = null;
  return O || C ? S = zn($, t, {
    goForward: C ? v : u === "ltr" ? f : p,
    loop: i
  }) : h2 ? S = $.at(0) || null : y && (S = $.at(-1) || null), c && (S == null || S.focus()), S;
}
function zn(o, t, { goForward: e, loop: n }, a = o.length) {
  if (--a === 0)
    return null;
  const s = o.indexOf(t), l = e ? s + 1 : s - 1;
  if (!n && (l < 0 || l >= o.length))
    return null;
  const i = (l + o.length) % o.length, u = o[i];
  return u ? u.hasAttribute("disabled") && u.getAttribute("disabled") !== "false" ? zn(
    o,
    u,
    { goForward: e, loop: n },
    a
  ) : u : null;
}
async function hs(o, t, e = 500) {
  let n = true, a, s;
  const l = new Promise((d) => {
    s = d, a = setTimeout(() => {
      u(), d(n);
    }, e);
  });
  function i() {
    n = false, u(), clearTimeout(a), a = void 0, s(false);
  }
  function u() {
    t.removeEventListener("mouseleave", i);
  }
  return t.addEventListener("mouseleave", i), l;
}
function ys(o, t = {}) {
  const { delayEnter: e = 0, delayLeave: n = 0, disabled: a = false } = t;
  let s;
  function l(i) {
    if (s && (clearTimeout(s), s = void 0), toValue(a))
      return;
    const u = i ? e : n, d = i ? t.onHoverEnter : t.onHoverLeave;
    s = setTimeout(() => d == null ? void 0 : d(), u);
  }
  _e(o, "mouseenter", () => l(true), { passive: true }), _e(o, "mouseleave", () => l(false), { passive: true });
}
var Yn = (o, t = 300) => {
  let e = true, n, a;
  const s = o.target, l = new Promise((d) => {
    a = d, n = setTimeout(() => {
      u(), d(e);
    }, t);
  });
  function i() {
    e = false, u(), clearTimeout(n), n = void 0, a(false);
  }
  function u() {
    s.removeEventListener("mouseenter", i);
  }
  return s.addEventListener("mouseenter", i), l;
};
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
var oo = 0;
function Gn() {
  watchEffect((o) => {
    if (!Te)
      return;
    const t = document.querySelectorAll("[data-radix-focus-guard]");
    document.body.insertAdjacentElement(
      "afterbegin",
      t[0] ?? vn()
    ), document.body.insertAdjacentElement(
      "beforeend",
      t[1] ?? vn()
    ), oo++, o(() => {
      oo === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((e) => e.remove()), oo--;
    });
  });
}
function vn() {
  const o = document.createElement("span");
  return o.setAttribute("data-radix-focus-guard", ""), o.tabIndex = 0, o.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", o;
}
var gs = "data-radix-vue-collection-item";
var hn = Symbol();
var ft = () => {
  const o = (a) => {
    provide(hn, {
      collectionRef: a
    });
  }, t = inject(hn);
  return { createCollection: o, setCollection: (a) => {
    t && (t.collectionRef = a);
  }, getItems: (a) => {
    const s = a ?? se(t == null ? void 0 : t.collectionRef);
    return s ? Array.from(
      s.querySelectorAll(
        `[${gs}]:not([data-disabled])`
      )
    ) : [];
  } };
};
var _s = "data-radix-vue-collection-item";
var Se = (o) => {
  const t = o ?? Symbol();
  return { createCollection: (a) => {
    const s = ref([]);
    function l() {
      const i = se(a);
      return i ? s.value = Array.from(
        i.querySelectorAll(`[${_s}]:not([data-disabled])`)
      ) : s.value = [];
    }
    return onBeforeUpdate(() => {
      s.value = [];
    }), onMounted(l), onUpdated(l), watch(() => a == null ? void 0 : a.value, l, { immediate: true }), provide(t, s), s;
  }, injectCollection: () => inject(t, ref([])) };
};
var ee = (o) => {
  const t = getCurrentInstance(), e = t == null ? void 0 : t.type.emits, n = {};
  return e != null && e.length || console.warn(
    `No emitted event found. Please check component: ${t == null ? void 0 : t.type.__name}`
  ), e == null || e.forEach((a) => {
    n[toHandlerKey(camelize(a))] = (...s) => o(a, ...s);
  }), n;
};
var bs = (o) => {
  const t = ref(), e = computed(() => {
    var a;
    return ((a = t.value) == null ? void 0 : a.width) ?? 0;
  }), n = computed(() => {
    var a;
    return ((a = t.value) == null ? void 0 : a.height) ?? 0;
  });
  return onMounted(() => {
    const a = se(o);
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
    height: n
  };
};
var ws = wo(() => ({ count: ref(0) }));
var oe = (o) => {
  const { count: t } = ws();
  return o || t.value++, o || `radix-${t.value}`;
};
function Es(o) {
  if (o) {
    const t = [
      ...Array.from(
        o.querySelectorAll(
          'a[href], button, input, textarea, select, details,[tabindex]:not([tabindex="-1"])'
        )
      )
    ].filter(
      (s) => !s.hasAttribute("disabled") && !s.getAttribute("aria-hidden")
    ), e = t[0], n = t[t.length - 1], a = 9;
    return e && e.focus(), o.addEventListener("keydown", function(s) {
      (s.key === "Tab" || s.keyCode === a) && (s.shiftKey ? document.activeElement === e && (n.focus(), s.preventDefault()) : document.activeElement === n && (e.focus(), s.preventDefault()));
    }), e;
  }
}
function Co(o) {
  return o ? o.flatMap((t) => t.type === Fragment ? Co(t.children) : [t]) : [];
}
function Cs(o) {
  return o && (typeof o.type == "string" || typeof o.type == "object" || typeof o.type == "function");
}
var $s = wo(() => ref(0));
var $o = (o) => {
  const t = $s(), e = vs(to == null ? void 0 : to.body, false), n = computed({
    get() {
      return e.value;
    },
    set(a) {
      if (Te)
        if (a) {
          const s = window.innerWidth - document.documentElement.clientWidth;
          s > 0 && (document.body.style.paddingRight = s + "px"), nextTick(() => {
            document.body.style.pointerEvents = "none", e.value = true;
          });
        } else
          document.body.style.paddingRight = "", document.body.style.pointerEvents = "", e.value = false;
    }
  });
  return o && (t.value++, n.value = o), onBeforeUnmount(() => {
    o && (t.value--, t.value === 0 && (document.body.style.paddingRight = "", document.body.style.pointerEvents = ""));
  }), n;
};
var Oo = (o) => {
  const t = Hn("", 1e3);
  return {
    search: t,
    handleTypeaheadSearch: (a) => {
      var f, p;
      t.value = t.value + a;
      const s = o.value, l = document.activeElement, i = ((p = (f = s.find((m) => m === l)) == null ? void 0 : f.textContent) == null ? void 0 : p.trim()) ?? "", u = s.map((m) => {
        var v;
        return ((v = m.textContent) == null ? void 0 : v.trim()) ?? "";
      }), d = Os(u, t.value, i), c = s.find(
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
function Po(o, t) {
  return o.map((e, n) => o[(t + n) % o.length]);
}
function Os(o, t, e) {
  const a = t.length > 1 && Array.from(t).every((d) => d === t[0]) ? t[0] : t, s = e ? o.indexOf(e) : -1;
  let l = Po(o, Math.max(s, 0));
  a.length === 1 && (l = l.filter((d) => d !== e));
  const u = l.find(
    (d) => d.toLowerCase().startsWith(a.toLowerCase())
  );
  return u !== e ? u : void 0;
}
var yn = (o) => {
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
  setup(o, { attrs: t, slots: e }) {
    const n = o.asChild ? "template" : o.as;
    return n !== "template" ? () => h(o.as, t, { default: e.default }) : () => {
      var l, i;
      if (!e.default)
        return null;
      const a = Co(e.default());
      a.length !== 1 && yn(n);
      const s = a[0];
      if (Cs(s) || yn(n), Object.keys(t).length > 0) {
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
var F = () => {
  const o = ref(), t = computed(() => se(o));
  return {
    primitiveElement: o,
    currentElement: t
  };
};
var To = Symbol();
var Ps = defineComponent({
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
    const e = o, n = X(e, "open", t, {
      defaultValue: e.defaultOpen,
      passive: true
    }), a = X(e, "disabled");
    return provide(To, {
      contentId: oe(),
      disabled: a,
      open: n,
      onOpenToggle: () => {
        n.value = !n.value;
      }
    }), (s, l) => (openBlock(), createBlock(unref(M), {
      as: s.as,
      "as-child": e.asChild,
      "data-state": e.open ? "open" : "closed",
      "data-disabled": e.disabled ? "" : void 0
    }, {
      default: withCtx(() => [
        renderSlot(s.$slots, "default", { open: unref(n) })
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
  setup(o) {
    const t = o, e = inject(
      To
    );
    return (n, a) => {
      var s, l, i, u, d, c, f, p;
      return openBlock(), createBlock(unref(M), {
        type: n.as === "button" ? "button" : void 0,
        as: n.as,
        "as-child": t.asChild,
        "aria-controls": (s = unref(e)) == null ? void 0 : s.contentId,
        "aria-expanded": ((l = unref(e)) == null ? void 0 : l.open.value) || false,
        "data-state": (i = unref(e)) != null && i.open.value ? "open" : "closed",
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
function Ss(o, t) {
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
        const y = n.value, C = $t(t.value);
        p ? l("MOUNT") : C === "none" || ((h2 = e.value) == null ? void 0 : h2.display) === "none" ? l("UNMOUNT") : l(m && y !== C ? "ANIMATION_OUT" : "UNMOUNT");
      }
    },
    { immediate: true }
  );
  const i = (p) => {
    const v = $t(t.value).includes(
      p.animationName
    );
    p.target === t.value && v && l("ANIMATION_END");
  }, u = (p) => {
    p.target === t.value && (n.value = $t(t.value));
  }, d = watch(
    t,
    (p, m) => {
      p ? (e.value = getComputedStyle(p), p.addEventListener("animationstart", u), p.addEventListener("animationcancel", i), p.addEventListener("animationend", i)) : (l("ANIMATION_END"), m == null || m.removeEventListener("animationstart", u), m == null || m.removeEventListener("animationcancel", i), m == null || m.removeEventListener("animationend", i));
    },
    { immediate: true }
  ), c = watch(s, () => {
    const p = $t(t.value);
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
function $t(o) {
  return o && getComputedStyle(o).animationName || "none";
}
var ue = defineComponent({
  __name: "Presence",
  props: {
    present: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(o, { expose: t }) {
    var p;
    const e = o, { present: n, forceMount: a } = toRefs(e), s = useSlots(), l = ref(), { isPresent: i } = Ss(n, l), u = {
      beforeMount(m) {
        m.hasAttribute("data-radix-popper-content-wrapper") ? l.value = m.firstChild : l.value = m;
      }
    };
    let d = (p = s.default) == null ? void 0 : p.call(s);
    d = Co(d || []);
    const c = getCurrentInstance(), f = () => {
      var m, v, h2;
      if (d && (d == null ? void 0 : d.length) > 1) {
        const y = (m = c == null ? void 0 : c.parent) != null && m.type.name ? `<${c.parent.type.name} />` : "component";
        throw new Error(
          [
            `Detected an invalid children for \`${y}\` for  \`Presence\` component.`,
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
      return a.value || n.value || i.value ? withDirectives((h2 = (v = s.default) == null ? void 0 : v.call(s)) == null ? void 0 : h2[0], [[u]]) : null;
    };
    return t({
      present: i
    }), (m, v) => (openBlock(), createBlock(f));
  }
});
var Bs = defineComponent({
  inheritAttrs: false,
  __name: "CollapsibleContent",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o, e = inject(
      To
    ), n = ref(), { primitiveElement: a, currentElement: s } = F(), l = ref(0), i = ref(0), u = computed(() => e == null ? void 0 : e.open.value), d = ref(u.value), c = ref();
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
        i.value = p.height, l.value = p.width, d.value || (f.style.transitionDuration = c.value.transitionDuration, f.style.animationName = c.value.animationName);
      },
      {
        immediate: true
      }
    ), onMounted(() => {
      requestAnimationFrame(() => {
        d.value = false;
      });
    }), (f, p) => (openBlock(), createBlock(unref(ue), {
      ref_key: "presentRef",
      ref: n,
      present: unref(e).open.value,
      "force-mount": true
    }, {
      default: withCtx(() => {
        var m, v, h2, y, C;
        return [
          createVNode(unref(M), mergeProps({
            ref_key: "primitiveElement",
            ref: a
          }, f.$attrs, {
            "as-child": t.asChild,
            as: f.as,
            "data-state": (m = unref(e)) != null && m.open.value ? "open" : "closed",
            "data-disabled": (h2 = (v = unref(e)) == null ? void 0 : v.disabled) != null && h2.value ? "true" : void 0,
            id: (y = unref(e)) == null ? void 0 : y.contentId,
            hidden: !((C = n.value) != null && C.present),
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
function As(o, t) {
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
function Is({ type: o, defaultValue: t }) {
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
function Ds(o, t) {
  const e = X(o, "modelValue", t, {
    defaultValue: Is(o),
    passive: true
  });
  watch(
    () => [o.type, o.modelValue],
    () => {
      const a = As(o.type, e.value);
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
        const l = s.findIndex((i) => i === a);
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
var mt = Symbol();
var rr = defineComponent({
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
    const e = o, { modelValue: n, changeModelValue: a } = Ds(e, t), { primitiveElement: s, currentElement: l } = F();
    return provide(mt, {
      disabled: e.disabled,
      direction: e.dir,
      orientation: e.orientation,
      parentElement: l,
      isSingle: computed(() => e.type === "single"),
      collapsible: e.collapsible,
      modelValue: n,
      changeModelValue: a
    }), (i, u) => (openBlock(), createBlock(unref(M), {
      ref_key: "primitiveElement",
      ref: s,
      "as-child": e.asChild,
      as: e.as
    }, {
      default: withCtx(() => [
        renderSlot(i.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
});
var Rt = Symbol();
var ir = defineComponent({
  __name: "AccordionItem",
  props: {
    disabled: { type: Boolean },
    value: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o, e = inject(mt), n = computed(
      () => e != null && e.isSingle.value ? t.value === e.modelValue.value : Array.isArray(e == null ? void 0 : e.modelValue.value) && !!(e != null && e.modelValue.value.includes(t.value))
    ), a = computed(() => (e == null ? void 0 : e.disabled) || t.disabled || !!(e != null && e.isSingle.value) && n.value && !(e != null && e.collapsible)), s = computed(() => a.value ? "" : void 0), l = computed(
      () => n.value ? "open" : "closed"
      /* Closed */
    ), { primitiveElement: i, currentElement: u } = F();
    provide(Rt, {
      open: n,
      dataState: l,
      disabled: a,
      dataDisabled: s,
      triggerId: oe(),
      primitiveElement: i,
      currentElement: u,
      value: computed(() => t.value)
    });
    function d(c) {
      pe(
        c,
        u.value,
        e == null ? void 0 : e.parentElement.value,
        {
          arrowKeyOptions: e == null ? void 0 : e.orientation,
          dir: e == null ? void 0 : e.direction,
          focus: true
        }
      );
    }
    return (c, f) => {
      var p;
      return openBlock(), createBlock(unref(Ps), {
        "data-orientation": (p = unref(e)) == null ? void 0 : p.orientation,
        "data-disabled": s.value,
        "data-state": l.value,
        disabled: a.value,
        open: n.value,
        onKeydown: withKeys(d, ["up", "down", "left", "right", "home", "end"]),
        "as-child": t.asChild
      }, {
        default: withCtx(() => [
          renderSlot(c.$slots, "default", { open: n.value })
        ]),
        _: 3
      }, 8, ["data-orientation", "data-disabled", "data-state", "disabled", "open", "onKeydown", "as-child"]);
    };
  }
});
var ur = defineComponent({
  __name: "AccordionContent",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o, e = inject(mt), n = inject(Rt);
    return (a, s) => {
      var l, i, u, d, c, f, p;
      return openBlock(), createBlock(unref(Bs), {
        role: "region",
        id: (l = unref(n)) == null ? void 0 : l.triggerId,
        open: (i = unref(n)) == null ? void 0 : i.open.value,
        hidden: !((u = unref(n)) != null && u.open.value),
        "as-child": t.asChild,
        "aria-labelledby": (d = unref(n)) == null ? void 0 : d.triggerId,
        "data-state": (c = unref(n)) == null ? void 0 : c.dataState.value,
        "data-disabled": (f = unref(n)) == null ? void 0 : f.dataDisabled.value,
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
var dr = defineComponent({
  __name: "AccordionHeader",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o, e = inject(mt), n = inject(Rt);
    return (a, s) => {
      var l, i, u;
      return openBlock(), createBlock(unref(M), {
        as: t.as || "h3",
        "as-child": t.asChild,
        "data-orientation": (l = unref(e)) == null ? void 0 : l.orientation,
        "data-state": (i = unref(n)) == null ? void 0 : i.dataState.value,
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
var cr = defineComponent({
  __name: "AccordionTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o, e = inject(mt), n = inject(Rt);
    function a() {
      n != null && n.disabled.value || n && (e == null || e.changeModelValue(n.value.value));
    }
    return (s, l) => {
      var i, u, d, c, f, p, m, v, h2, y;
      return openBlock(), createBlock(unref(Ts), {
        ref: (i = unref(n)) == null ? void 0 : i.primitiveElement,
        "data-radix-vue-collection-item": "",
        as: t.as,
        "as-child": t.asChild,
        "aria-controls": (u = unref(n)) == null ? void 0 : u.triggerId,
        "aria-disabled": ((d = unref(n)) == null ? void 0 : d.disabled.value) || void 0,
        "aria-expanded": ((c = unref(n)) == null ? void 0 : c.open.value) || false,
        "data-disabled": (f = unref(n)) == null ? void 0 : f.dataDisabled.value,
        "data-orientation": (p = unref(e)) == null ? void 0 : p.orientation,
        "data-state": (m = unref(n)) == null ? void 0 : m.dataState.value,
        disabled: (h2 = (v = unref(n)) == null ? void 0 : v.disabled) == null ? void 0 : h2.value,
        onClick: a,
        id: (y = unref(n)) == null ? void 0 : y.triggerId
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
var Xn = Symbol();
var pr = defineComponent({
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
    provide(Xn, {
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
          type: "checkbox",
          id: e.id
        }, e.modelValue, {
          onChange: n,
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
var fr = defineComponent({
  __name: "CheckboxIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(o) {
    const t = o, e = inject(Xn);
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
var Ms = ["id", "name", "disabled", "required", "data-state", "data-disabled"];
var qn = Symbol();
var mr = defineComponent({
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
    const e = o, n = X(e, "open", t, {
      defaultValue: e.defaultOpen,
      passive: true
      // set passive to true so that if no props.modelValue was passed, it will still update
    }), a = () => {
      n.value = !n.value;
    };
    provide(qn, {
      open: n,
      toggleOpen: a,
      disabled: e.disabled
    });
    function s(l) {
      l.key === "Enter" && a();
    }
    return (l, i) => (openBlock(), createBlock(unref(M), {
      value: unref(n),
      role: "switch",
      "aria-checked": unref(n),
      "data-state": unref(n) ? "checked" : "unchecked",
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
        }, unref(n), {
          name: e.name,
          onClick: a,
          onKeydown: s,
          "aria-hidden": "true",
          disabled: e.disabled,
          required: e.required,
          "data-state": unref(n) ? "checked" : "unchecked",
          "data-disabled": e.disabled ? "" : void 0,
          style: { opacity: "0", position: "absolute", inset: "0" }
        }), null, 16, Ms)
      ]),
      _: 3
    }, 8, ["value", "aria-checked", "data-state", "data-disabled", "as-child", "as"]));
  }
});
var vr = defineComponent({
  __name: "SwitchThumb",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(o) {
    const t = inject(qn);
    return (e, n) => {
      var a, s, l;
      return openBlock(), createBlock(unref(M), {
        "data-state": (s = (a = unref(t)) == null ? void 0 : a.open) != null && s.value ? "checked" : "unchecked",
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
var Jn = defineComponent({
  __name: "BaseSeparator",
  props: {
    orientation: { default: "horizontal" },
    decorative: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o, e = ["horizontal", "vertical"];
    function n(i) {
      return e.includes(i);
    }
    const a = computed(
      () => n(t.orientation) ? t.orientation : "horizontal"
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
var hr = defineComponent({
  __name: "Separator",
  props: {
    orientation: { default: "horizontal" },
    decorative: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o;
    return (e, n) => (openBlock(), createBlock(Jn, normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var yr = defineComponent({
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
var gr = defineComponent({
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
    }), a = () => {
      n.value = !n.value;
    }, s = computed(() => n.value ? "on" : "off"), l = (i) => {
      i.key === "Enter" && a();
    };
    return (i, u) => (openBlock(), createBlock(unref(M), mergeProps({
      "as-child": e.asChild,
      as: i.as,
      value: unref(n)
    }, unref(n), {
      role: "checkbox",
      "aria-checked": unref(n),
      "data-state": s.value,
      "data-disabled": e.disabled,
      disabled: e.disabled,
      onClick: a,
      onKeydown: l,
      style: { position: "relative" }
    }), {
      default: withCtx(() => [
        renderSlot(i.$slots, "default")
      ]),
      _: 3
    }, 16, ["as-child", "as", "value", "aria-checked", "data-state", "data-disabled", "disabled"]));
  }
});
var Zn = Symbol();
var _r = defineComponent({
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
    const e = o, { primitiveElement: n, currentElement: a } = F(), s = ref(), l = ref(), i = ls(), u = ref([]), d = X(e, "modelValue", t, {
      defaultValue: e.defaultValue,
      passive: true
    });
    provide(Zn, {
      type: e.type,
      modelValue: d,
      changeModelValue: c,
      parentElement: a,
      activeValue: s,
      currentFocusedElement: l,
      dir: e.dir,
      orientation: e.orientation,
      loop: e.loop,
      itemsArray: u,
      rovingFocus: e.rovingFocus,
      rootDisabled: e.disabled
    });
    function c(f) {
      if (e.type === "single")
        d.value = f;
      else {
        let p = e.modelValue;
        if (p.includes(f)) {
          let m = p.findIndex((v) => v === f);
          p.splice(m, 1);
        } else
          p.push(f);
        d.value = p;
      }
    }
    return watch(
      i,
      () => {
        if (i.value === a.value && !e.disabled) {
          if (!u.value.length)
            return;
          if (l.value)
            l.value.focus();
          else {
            let f = u.value.filter(
              (p) => !p.hasAttribute("disabled") && !p.hasAttribute("data-disabled")
            );
            f[0].focus(), l.value = f[0];
          }
        }
      },
      { immediate: true }
    ), (f, p) => (openBlock(), createBlock(unref(M), {
      "as-child": e.asChild,
      as: f.as,
      ref_key: "primitiveElement",
      ref: n,
      role: "group",
      dir: e.dir,
      tabindex: "0",
      "aria-label": "Text alignment",
      "data-orientation": e.orientation
    }, {
      default: withCtx(() => [
        renderSlot(f.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "dir", "data-orientation"]));
  }
});
var br = defineComponent({
  __name: "ToggleGroupItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(o) {
    const t = o, e = inject(
      Zn
    ), { primitiveElement: n, currentElement: a } = F();
    onMounted(() => {
      var f;
      (f = e == null ? void 0 : e.itemsArray.value) == null || f.push(a.value);
    });
    const s = computed(() => {
      var f, p, m;
      return (e == null ? void 0 : e.type) === "multiple" ? (p = (f = e == null ? void 0 : e.modelValue) == null ? void 0 : f.value) != null && p.includes(t.value) ? "on" : "off" : ((m = e == null ? void 0 : e.modelValue) == null ? void 0 : m.value) === t.value ? "on" : "off";
    }), l = computed(() => {
      var f, p, m;
      return (e == null ? void 0 : e.type) === "multiple" ? (p = (f = e == null ? void 0 : e.modelValue) == null ? void 0 : f.value) == null ? void 0 : p.includes(t.value) : ((m = e == null ? void 0 : e.modelValue) == null ? void 0 : m.value) === t.value;
    });
    function i(f) {
      if (!(e != null && e.rovingFocus) || e != null && e.rootDisabled)
        return;
      (f.key === "ArrowLeft" || f.key === "ArrowRight" || f.key === "ArrowUp" || f.key === "ArrowDown") && f.preventDefault();
      const p = pe(
        f,
        a.value,
        e == null ? void 0 : e.parentElement.value,
        { loop: e == null ? void 0 : e.loop }
      );
      p && (p.focus(), e.currentFocusedElement.value = p);
    }
    const u = computed(() => {
      var f, p, m;
      return (f = e == null ? void 0 : e.currentFocusedElement) != null && f.value ? ((m = e == null ? void 0 : e.currentFocusedElement) == null ? void 0 : m.value) === a.value ? "0" : "-1" : ((p = e == null ? void 0 : e.modelValue) == null ? void 0 : p.value) === t.value ? "0" : "-1";
    }), d = computed(() => (e == null ? void 0 : e.type) === "multiple" ? "checkbox" : "radio");
    function c() {
      e != null && e.rootDisabled || (e == null || e.changeModelValue(t.value), e.currentFocusedElement.value = a.value);
    }
    return (f, p) => {
      var m, v;
      return openBlock(), createBlock(unref(M), {
        "as-child": t.asChild,
        as: f.as,
        ref_key: "primitiveElement",
        ref: n,
        type: f.as === "button" ? "button" : void 0,
        role: d.value,
        "data-state": s.value,
        disabled: t.disabled || ((m = unref(e)) == null ? void 0 : m.rootDisabled),
        "data-disabled": t.disabled ? "" : void 0,
        "aria-checked": l.value,
        "data-orientation": (v = unref(e)) == null ? void 0 : v.orientation,
        onClick: c,
        onKeydown: i,
        "data-radix-vue-collection-item": "",
        tabindex: u.value
      }, {
        default: withCtx(() => [
          renderSlot(f.$slots, "default")
        ]),
        _: 3
      }, 8, ["as-child", "as", "type", "role", "data-state", "disabled", "data-disabled", "aria-checked", "data-orientation", "tabindex"]);
    };
  }
});
var wr = defineComponent({
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
          renderSlot(n.$slots, "default")
        ]),
        _: 3
      }, 8, ["as-child", "as"])
    ], 4));
  }
});
var Lt = Symbol();
var Er = defineComponent({
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
    return provide(Lt, {
      modelValue: s,
      changeModelValue: (l) => {
        s.value = l, l && e.onValueChange && e.onValueChange(l);
      },
      currentFocusedElement: a,
      parentElement: n,
      orientation: e.orientation,
      dir: e.dir,
      loop: true,
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
var Cr = defineComponent({
  __name: "TabsList",
  props: {
    loop: { type: Boolean, default: true },
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o, e = inject(Lt), { primitiveElement: n, currentElement: a } = F();
    return onMounted(() => {
      e.parentElement.value = a.value, e.loop = t.loop;
    }), (s, l) => {
      var i, u;
      return openBlock(), createBlock(unref(M), {
        role: "tablist",
        ref_key: "primitiveElement",
        ref: n,
        "as-child": t.asChild,
        as: s.as,
        "aria-orientation": (i = unref(e)) == null ? void 0 : i.orientation,
        tabindex: "0",
        "data-orientation": (u = unref(e)) == null ? void 0 : u.orientation,
        style: { outline: "none" }
      }, {
        default: withCtx(() => [
          renderSlot(s.$slots, "default")
        ]),
        _: 3
      }, 8, ["as-child", "as", "aria-orientation", "data-orientation"]);
    };
  }
});
var $r = defineComponent({
  __name: "TabsContent",
  props: {
    value: {},
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o, e = inject(Lt), n = computed(() => {
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
var Or = defineComponent({
  __name: "TabsTrigger",
  props: {
    value: {},
    disabled: { type: Boolean, default: false },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(o) {
    const t = o, e = inject(Lt), { primitiveElement: n, currentElement: a } = F();
    function s(u) {
      e == null || e.changeModelValue(u);
    }
    function l(u) {
      const d = pe(
        u,
        a.value,
        e == null ? void 0 : e.parentElement.value,
        {
          arrowKeyOptions: e == null ? void 0 : e.orientation,
          loop: e == null ? void 0 : e.loop,
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
        ref: n,
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
var ks = ["value", "aria-valuenow", "name"];
var So = Symbol();
var Pr = defineComponent({
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
    const e = o, { primitiveElement: n, currentElement: a } = F(), s = ref(), l = computed(() => e.modelValue ? e.modelValue < 50 ? (e.modelValue - 50) / 50 * 10 : (e.modelValue - 50) / 50 * -10 : 0);
    provide(So, {
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
        }, null, 8, ks)
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
});
var Tr = defineComponent({
  __name: "SliderThumb",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(o) {
    const t = o, e = inject(So), { primitiveElement: n, currentElement: a } = F();
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
      var d, c, f, p, m, v, h2, y, C;
      return openBlock(), createElementBlock("span", {
        style: normalizeStyle(`transform: translateX(-50%); position: absolute; left: calc(${(c = (d = unref(e)) == null ? void 0 : d.modelValue) == null ? void 0 : c.value}%)`)
      }, [
        createVNode(unref(M), mergeProps(i.$attrs, {
          ref_key: "primitiveElement",
          ref: n,
          role: "slider",
          tabindex: "0",
          "data-disabled": (f = unref(e)) == null ? void 0 : f.disabled,
          "data-orientation": (p = unref(e)) == null ? void 0 : p.orientation,
          "aria-valuenow": (v = (m = unref(e)) == null ? void 0 : m.modelValue) == null ? void 0 : v.value,
          "aria-valuemin": (h2 = unref(e)) == null ? void 0 : h2.min,
          "aria-valuemax": (y = unref(e)) == null ? void 0 : y.max,
          "aria-orientation": (C = unref(e)) == null ? void 0 : C.orientation,
          "as-child": t.asChild,
          as: i.as,
          onKeydown: l
        }), null, 16, ["data-disabled", "data-orientation", "aria-valuenow", "aria-valuemin", "aria-valuemax", "aria-orientation", "as-child", "as"])
      ], 4);
    };
  }
});
var Sr = defineComponent({
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
var Br = defineComponent({
  __name: "SliderRange",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(o) {
    const t = o, e = inject(So);
    return (n, a) => {
      var s, l, i, u, d;
      return openBlock(), createBlock(unref(M), {
        "data-disabled": (s = unref(e)) == null ? void 0 : s.disabled,
        "data-orientation": (l = unref(e)) == null ? void 0 : l.orientation,
        "as-child": t.asChild,
        as: n.as,
        style: normalizeStyle(`left: 0%; right: ${(((i = unref(e)) == null ? void 0 : i.max) ?? 100) - (((d = (u = unref(e)) == null ? void 0 : u.modelValue) == null ? void 0 : d.value) ?? 0)}%`)
      }, null, 8, ["data-disabled", "data-orientation", "as-child", "as", "style"]);
    };
  }
});
var Qn = "RadioGroup";
var jn = Symbol();
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
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(o, { emit: t }) {
    const e = o, { primitiveElement: n, currentElement: a } = F(), s = X(e, "modelValue", t, {
      defaultValue: e.defaultValue,
      passive: true
    });
    return provide(Qn, {
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
      ref: n,
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
var Rs = ["value", "required", "disabled", "checked"];
var Ir = defineComponent({
  __name: "RadioGroupItem",
  props: {
    value: {},
    disabled: { type: Boolean, default: false },
    required: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o, e = inject(Qn), n = computed(() => (e == null ? void 0 : e.disabled.value) || t.disabled), a = computed(() => (e == null ? void 0 : e.required.value) || t.required), s = computed(() => {
      var f;
      return ((f = e == null ? void 0 : e.modelValue) == null ? void 0 : f.value) === t.value;
    });
    provide(jn, readonly({ disabled: n, checked: s }));
    function l(f) {
      n.value || e == null || e.changeModelValue(f);
    }
    const { primitiveElement: i, currentElement: u } = F();
    function d(f) {
      if (n.value)
        return;
      const p = pe(
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
          disabled: n.value ? true : void 0,
          "data-state": s.value ? "checked" : "unchecked",
          "data-disabled": n.value ? "" : void 0,
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
          disabled: n.value,
          style: { transform: "translateX(-100%)", position: "absolute", "pointer-events": "none", opacity: "0", margin: "0px", width: "25px", height: "25px" },
          checked: s.value
        }, null, 8, Rs)
      ], 64);
    };
  }
});
var Dr = defineComponent({
  __name: "RadioGroupIndicator",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(o) {
    const t = inject(jn);
    return (e, n) => {
      var a, s, l;
      return (a = unref(t)) != null && a.checked ? (openBlock(), createBlock(unref(M), {
        key: 0,
        "data-state": (s = unref(t)) != null && s.checked ? "checked" : "unchecked",
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
var ea = Symbol();
var Bo = (o) => typeof o == "number";
function Ls(o, t) {
  return o === null || Bo(o) && !isNaN(o) && o <= t && o >= 0 ? o : (console.error(`Invalid prop \`value\` of value \`${o}\` supplied to \`ProgressRoot\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${at} if no \`max\` prop is set)
  - \`null\` if the progress is indeterminate.

Defaulting to \`null\`.`), null);
}
var at = 100;
function Ns(o) {
  return Bo(o) && !isNaN(o) && o > 0 ? o : (console.error(
    `Invalid prop \`max\` of value \`${o}\` supplied to \`ProgressRoot\`. Only numbers greater than 0 are valid max values. Defaulting to \`${at}\`.`
  ), at);
}
var xr = defineComponent({
  __name: "ProgressRoot",
  props: {
    modelValue: {},
    max: { default: at },
    getValueLabel: { type: Function, default: (o, t) => `${Math.round(o / t * at)}%` },
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
        const i = Ls(l, e.max);
        i !== l && (await nextTick(), n.value = i);
      },
      { immediate: true }
    ), watch(
      () => e.max,
      (l) => {
        const i = Ns(e.max);
        i !== l && (a.value = i);
      },
      { immediate: true }
    );
    const s = computed(() => n.value ? n.value === a.value ? "complete" : "loading" : "indeterminate");
    return provide(ea, {
      modelValue: n,
      max: a,
      progressState: s
    }), (l, i) => (openBlock(), createBlock(unref(M), {
      asChild: e.asChild,
      as: l.as,
      "aria-valuemax": unref(a),
      "aria-valuemin": 0,
      "aria-valuenow": Bo(unref(n)) ? unref(n) : void 0,
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
    }, 8, ["asChild", "as", "aria-valuemax", "aria-valuenow", "aria-valuetext", "data-state", "data-value", "data-max"]));
  }
});
var Mr = defineComponent({
  __name: "ProgressIndicator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o, e = inject(ea);
    return (n, a) => {
      var s, l, i, u;
      return openBlock(), createBlock(unref(M), mergeProps(t, {
        "data-state": (s = unref(e)) == null ? void 0 : s.progressState.value,
        "data-value": ((i = (l = unref(e)) == null ? void 0 : l.modelValue) == null ? void 0 : i.value) ?? void 0,
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
var he = Symbol();
var Fs = defineComponent({
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
    return provide(he, {
      open: n,
      modal: l,
      openModal: () => {
        n.value = true;
      },
      onOpenChange: (i) => {
        n.value = i;
      },
      onOpenToggle: () => {
        n.value = !n.value;
      },
      contentId: oe(),
      titleId: oe(),
      descriptionId: oe(),
      triggerElement: a,
      contentElement: s
    }), (i, u) => renderSlot(i.$slots, "default");
  }
});
var Ks = defineComponent({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(o) {
    const t = o, e = inject(he), { primitiveElement: n, currentElement: a } = F();
    return onMounted(() => {
      e.triggerElement = a;
    }), (s, l) => {
      var i, u, d, c;
      return openBlock(), createBlock(unref(M), mergeProps({
        ref_key: "primitiveElement",
        ref: n
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
var Hs = defineComponent({
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
var Vs = "dismissableLayer.pointerDownOutside";
var Ws = "dismissableLayer.focusOutside";
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
function zs(o, t) {
  var s;
  const e = ((s = t == null ? void 0 : t.value) == null ? void 0 : s.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), n = ref(false), a = ref(() => {
  });
  return watchEffect((l) => {
    if (!Te)
      return;
    const i = (d) => {
      if (t != null && t.value) {
        if (ta(t.value, d.target)) {
          n.value = false;
          return;
        }
        if (d.target && !n.value) {
          let c = function() {
            oa(
              Vs,
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
      e.addEventListener("pointerdown", i);
    }, 0);
    l(() => {
      window.clearTimeout(u), e.removeEventListener("pointerdown", i), e.removeEventListener("click", a.value);
    });
  }), {
    onPointerDownCapture: () => n.value = true
  };
}
function Ys(o, t) {
  var a;
  const e = ((a = t == null ? void 0 : t.value) == null ? void 0 : a.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), n = ref(false);
  return watchEffect(async (s) => {
    if (!Te)
      return;
    const l = async (i) => {
      t != null && t.value && (ta(t.value, i.target) || i.target && !n.value && oa(
        Ws,
        o,
        { originalEvent: i }
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
var Nt = defineComponent({
  __name: "DismissableLayer",
  props: {
    disableOutsidePointerEvents: { type: Boolean, default: false },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss"],
  setup(o, { emit: t }) {
    const e = o, { primitiveElement: n, currentElement: a } = F(), s = computed(
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
      const v = Array.from(l.value), [h2] = [...i.value].slice(-1), y = v.indexOf(h2);
      return d.value >= y;
    }), p = zs(async (v) => {
      f.value && (t("pointerDownOutside", v), t("interactOutside", v), await nextTick(), v.defaultPrevented || t("dismiss"));
    }, a), m = Ys((v) => {
      t("focusOutside", v), t("interactOutside", v), v.defaultPrevented || t("dismiss");
    }, a);
    return ss("Escape", (v) => {
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
var no = "focusScope.autoFocusOnMount";
var ao = "focusScope.autoFocusOnUnmount";
var gn = { bubbles: false, cancelable: true };
function Us(o, { select: t = false } = {}) {
  const e = document.activeElement;
  for (const n of o)
    if (Ie(n, { select: t }), document.activeElement !== e)
      return;
}
function Gs(o) {
  const t = na(o), e = _n(t, o), n = _n(t.reverse(), o);
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
function _n(o, t) {
  for (const e of o)
    if (!Xs(e, { upTo: t }))
      return e;
}
function Xs(o, { upTo: t }) {
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
function qs(o) {
  return o instanceof HTMLInputElement && "select" in o;
}
function Ie(o, { select: t = false } = {}) {
  if (o && o.focus) {
    const e = document.activeElement;
    o.focus({ preventScroll: true }), o !== e && qs(o) && t && o.select();
  }
}
var Js = wo(() => ref([]));
function Zs() {
  const o = Js();
  return {
    add(t) {
      const e = o.value[0];
      t !== e && (e == null || e.pause()), o.value = bn(o.value, t), o.value.unshift(t);
    },
    remove(t) {
      var e;
      o.value = bn(o.value, t), (e = o.value[0]) == null || e.resume();
    }
  };
}
function bn(o, t) {
  const e = [...o], n = e.indexOf(t);
  return n !== -1 && e.splice(n, 1), e;
}
function Qs(o) {
  return o.filter((t) => t.tagName !== "A");
}
var Ao = defineComponent({
  __name: "FocusScope",
  props: {
    loop: { type: Boolean, default: false },
    trapped: { type: Boolean, default: false },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["mountAutoFocus", "unmountAutoFocus"],
  setup(o, { emit: t }) {
    const e = o, { primitiveElement: n, currentElement: a } = F(), s = ref(null), l = Zs(), i = reactive({
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
        if (i.paused || !c)
          return;
        const y = h2.target;
        c.contains(y) ? s.value = y : Ie(s.value, { select: true });
      }
      function p(h2) {
        if (i.paused || !c)
          return;
        const y = h2.relatedTarget;
        y !== null && (c.contains(y) || Ie(s.value, { select: true }));
      }
      function m(h2) {
        if (document.activeElement === document.body)
          for (const C of h2)
            C.removedNodes.length > 0 && Ie(c);
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
        const m = new CustomEvent(no, gn);
        c.addEventListener(
          no,
          (v) => t("mountAutoFocus", v)
        ), c.dispatchEvent(m), m.defaultPrevented || (Us(Qs(na(c)), {
          select: true
        }), document.activeElement === f && Ie(c));
      }
      d(() => {
        c.removeEventListener(
          no,
          (h2) => t("mountAutoFocus", h2)
        );
        const m = new CustomEvent(ao, gn), v = (h2) => {
          t("unmountAutoFocus", h2);
        };
        c.addEventListener(ao, v), c.dispatchEvent(m), setTimeout(() => {
          m.defaultPrevented || Ie(f ?? document.body, { select: true }), c.removeEventListener(ao, v), l.remove(i);
        }, 0);
      });
    });
    const u = (d) => {
      if (!e.loop && !e.trapped || i.paused)
        return;
      const c = d.key === "Tab" && !d.altKey && !d.ctrlKey && !d.metaKey, f = document.activeElement;
      if (c && f) {
        const p = d.currentTarget, [m, v] = Gs(p);
        m && v ? !d.shiftKey && f === v ? (d.preventDefault(), e.loop && Ie(m, { select: true })) : d.shiftKey && f === m && (d.preventDefault(), e.loop && Ie(v, { select: true })) : f === p && d.preventDefault();
      }
    };
    return (d, c) => (openBlock(), createBlock(unref(M), {
      ref_key: "primitiveElement",
      ref: n,
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
var js = "menu.itemSelect";
var io = ["Enter", " "];
var el = ["ArrowDown", "PageUp", "Home"];
var aa = ["ArrowUp", "PageDown", "End"];
var tl = [...el, ...aa];
var ol = {
  ltr: [...io, "ArrowRight"],
  rtl: [...io, "ArrowLeft"]
};
var nl = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
};
function Io(o) {
  return o ? "open" : "closed";
}
function St(o) {
  return o === "indeterminate";
}
function Do(o) {
  return St(o) ? "indeterminate" : o ? "checked" : "unchecked";
}
function uo(o) {
  const t = document.activeElement;
  for (const e of o)
    if (e === t || (e.focus(), document.activeElement !== t))
      return;
}
function al(o, t) {
  const { x: e, y: n } = o;
  let a = false;
  for (let s = 0, l = t.length - 1; s < t.length; l = s++) {
    const i = t[s].x, u = t[s].y, d = t[l].x, c = t[l].y;
    u > n != c > n && e < (d - i) * (n - u) / (c - u) + i && (a = !a);
  }
  return a;
}
function sl(o, t) {
  if (!t)
    return false;
  const e = { x: o.clientX, y: o.clientY };
  return al(e, t);
}
function st(o) {
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
  emits: ["openAutoFocus", "closeAutoFocus"],
  setup(o, { emit: t }) {
    const e = o, n = inject(he);
    return (a, s) => (openBlock(), createBlock(unref(Ao), {
      asChild: "",
      loop: "",
      trapped: e.trapFocus,
      onMountAutoFocus: s[1] || (s[1] = (l) => t("openAutoFocus", l)),
      onUnmountAutoFocus: s[2] || (s[2] = (l) => t("closeAutoFocus", l))
    }, {
      default: withCtx(() => [
        createVNode(unref(Nt), mergeProps(a.$attrs, {
          as: a.as,
          "as-child": a.asChild,
          "disable-outside-pointer-events": a.disableOutsidePointerEvents,
          role: "dialog",
          id: unref(n).contentId,
          "aria-describedby": unref(n).descriptionId,
          "aria-labelledby": unref(n).titleId,
          "data-state": unref(Io)(unref(n).open.value),
          onDismiss: s[0] || (s[0] = (l) => {
            var i;
            return (i = unref(n)) == null ? void 0 : i.onOpenChange(false);
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
var ll = defineComponent({
  __name: "DialogContentModal",
  props: {
    forceMount: { type: Boolean },
    trapFocus: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["openAutoFocus", "closeAutoFocus"],
  setup(o, { emit: t }) {
    const e = o, n = inject(he), a = ee(t);
    return (s, l) => {
      var i;
      return openBlock(), createBlock(sa, mergeProps({ ...e, ...unref(a) }, {
        "trap-focus": (i = unref(n)) == null ? void 0 : i.open.value,
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
var rl = defineComponent({
  __name: "DialogContentNonModal",
  props: {
    forceMount: { type: Boolean },
    trapFocus: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["openAutoFocus", "closeAutoFocus"],
  setup(o, { emit: t }) {
    const e = o, n = ee(t), a = inject(he), s = ref(false), l = ref(false);
    return (i, u) => (openBlock(), createBlock(sa, mergeProps({ ...e, ...unref(n) }, {
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
var il = defineComponent({
  __name: "DialogContent",
  props: {
    forceMount: { type: Boolean },
    trapFocus: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["openAutoFocus", "closeAutoFocus"],
  setup(o, { emit: t }) {
    const e = o, n = inject(he), a = ee(t);
    return (s, l) => (openBlock(), createBlock(unref(ue), {
      present: unref(n).open.value
    }, {
      default: withCtx(() => {
        var i;
        return [
          (i = unref(n)) != null && i.modal.value ? (openBlock(), createBlock(ll, mergeProps({ key: 0 }, { ...e, ...unref(a), ...s.$attrs }, {
            onOpenAutoFocus: l[0] || (l[0] = (u) => t("openAutoFocus", u))
          }), {
            default: withCtx(() => [
              renderSlot(s.$slots, "default")
            ]),
            _: 3
          }, 16)) : (openBlock(), createBlock(rl, normalizeProps(mergeProps({ key: 1 }, { ...e, ...unref(a), ...s.$attrs })), {
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
var ul = defineComponent({
  __name: "DialogOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = inject(he), e = $o();
    return watch(
      () => t == null ? void 0 : t.open.value,
      (n) => e.value = n ?? false
    ), (n, a) => (openBlock(), createBlock(unref(ue), {
      present: n.forceMount || unref(t).open.value
    }, {
      default: withCtx(() => {
        var s;
        return [
          createVNode(unref(M), mergeProps(n.$attrs, {
            as: n.as,
            asChild: n.asChild,
            "data-state": (s = unref(t)) != null && s.open.value ? "open" : "closed",
            style: { "pointer-events": "auto" },
            "data-aria-hidden": "true",
            "aria-hidden": "true"
          }), {
            default: withCtx(() => [
              renderSlot(n.$slots, "default")
            ]),
            _: 3
          }, 16, ["as", "asChild", "data-state"])
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
    const t = o, e = inject(he);
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
var dl = defineComponent({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: { default: "h2" }
  },
  setup(o) {
    const t = o, e = inject(he);
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
var cl = defineComponent({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: { default: "p" }
  },
  setup(o) {
    const t = o, e = inject(he);
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
var kr = defineComponent({
  __name: "AlertDialogRoot",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean }
  },
  emits: ["update:open"],
  setup(o, { emit: t }) {
    const e = o, n = ee(t);
    return (a, s) => (openBlock(), createBlock(unref(Fs), mergeProps({ ...e, ...unref(n) }, { modal: true }), {
      default: withCtx(() => [
        renderSlot(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Rr = defineComponent({
  __name: "AlertDialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o;
    return (e, n) => (openBlock(), createBlock(unref(Ks), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Lr = defineComponent({
  __name: "AlertDialogPortal",
  props: {
    to: {},
    disabled: { type: Boolean }
  },
  setup(o) {
    const t = o;
    return (e, n) => (openBlock(), createBlock(unref(Hs), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var ra = Symbol();
var Nr = defineComponent({
  __name: "AlertDialogContent",
  props: {
    forceMount: { type: Boolean },
    trapFocus: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["openAutoFocus", "closeAutoFocus"],
  setup(o, { emit: t }) {
    const e = o, n = ee(t), a = ref();
    return provide(ra, {
      onCancelElementChange: (s) => {
        a.value = s;
      }
    }), (s, l) => (openBlock(), createBlock(unref(il), mergeProps({ ...e, ...unref(n) }, {
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
var Fr = defineComponent({
  __name: "AlertDialogOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o;
    return (e, n) => (openBlock(), createBlock(unref(ul), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Kr = defineComponent({
  __name: "AlertDialogCancel",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o, e = inject(ra), { primitiveElement: n, currentElement: a } = F();
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
var Hr = defineComponent({
  __name: "AlertDialogTitle",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o;
    return (e, n) => (openBlock(), createBlock(unref(dl), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Vr = defineComponent({
  __name: "AlertDialogDescription",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o;
    return (e, n) => (openBlock(), createBlock(unref(cl), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Wr = defineComponent({
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
var Ft = Symbol();
var zr = defineComponent({
  __name: "ToolbarRoot",
  props: {
    orientation: { default: "horizontal" },
    dir: { default: "ltr" },
    loop: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o, { primitiveElement: e, currentElement: n } = F(), a = ref();
    return provide(Ft, {
      parentElement: n,
      activeElement: a,
      orientation: t.orientation
    }), (s, l) => (openBlock(), createBlock(unref(M), {
      ref_key: "primitiveElement",
      ref: e,
      role: "toolbar",
      tabindex: "0",
      style: { outline: "none" },
      "aria-orientation": t.orientation,
      dir: t.dir,
      "data-orientation": t.orientation,
      "as-child": t.asChild,
      as: s.as
    }, {
      default: withCtx(() => [
        renderSlot(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["aria-orientation", "dir", "data-orientation", "as-child", "as"]));
  }
});
var Yr = defineComponent({
  __name: "ToolbarButton",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(o) {
    const t = o, e = inject(Ft), { primitiveElement: n, currentElement: a } = F();
    function s(l) {
      const i = pe(
        l,
        a.value,
        e == null ? void 0 : e.parentElement.value
      );
      i == null || i.focus();
    }
    return (l, i) => {
      var u, d;
      return openBlock(), createBlock(unref(M), {
        ref_key: "primitiveElement",
        ref: n,
        "data-orientation": (u = unref(e)) == null ? void 0 : u.orientation,
        "as-child": t.asChild,
        as: l.as,
        type: l.as === "button" ? "button" : void 0,
        tabindex: ((d = unref(e)) == null ? void 0 : d.activeElement.value) === unref(a) ? "0" : "-1",
        onKeydown: s,
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
var Ur = defineComponent({
  __name: "ToolbarLink",
  props: {
    asChild: { type: Boolean },
    as: { default: "a" }
  },
  setup(o) {
    const t = o, e = inject(Ft), { primitiveElement: n, currentElement: a } = F();
    function s(l) {
      const i = pe(
        l,
        a.value,
        e == null ? void 0 : e.parentElement.value
      );
      i == null || i.focus();
    }
    return (l, i) => {
      var u;
      return openBlock(), createBlock(unref(M), {
        ref_key: "primitiveElement",
        ref: n,
        tabindex: ((u = unref(e)) == null ? void 0 : u.activeElement.value) === unref(a) ? "0" : "-1",
        as: l.as,
        "as-child": t.asChild,
        onKeydown: s,
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
var ia = Symbol();
var Gr = defineComponent({
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
    const e = o, { primitiveElement: n, currentElement: a } = F();
    return provide(ia, {
      type: e.type,
      modelValue: toRef(() => e.modelValue),
      changeModelValue: (s) => {
        if (e.type === "single")
          t("update:modelValue", s);
        else {
          if (!s)
            return;
          let l = e.modelValue;
          if (l.includes(s)) {
            let i = l.findIndex((u) => u === s);
            l.splice(i, 1);
          } else
            l.push(s);
          t("update:modelValue", l);
        }
      },
      orientation: e.orientation ? e.orientation : "horizontal",
      parentElement: a
    }), (s, l) => (openBlock(), createBlock(unref(M), {
      ref_key: "primitiveElement",
      ref: n,
      role: "group",
      dir: e.dir,
      "as-child": e.asChild,
      as: s.as,
      "aria-label": "Text alignment"
    }, {
      default: withCtx(() => [
        renderSlot(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["dir", "as-child", "as"]));
  }
});
var Xr = defineComponent({
  __name: "ToolbarToggleItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o, e = inject(
      ia
    ), n = inject(Ft), a = computed(() => {
      var i, u, d;
      return (e == null ? void 0 : e.type) === "multiple" ? (u = (i = e == null ? void 0 : e.modelValue) == null ? void 0 : i.value) != null && u.includes(t.value) ? "on" : "off" : ((d = e == null ? void 0 : e.modelValue) == null ? void 0 : d.value) === t.value ? "on" : "off";
    }), s = ref();
    function l(i) {
      const u = pe(
        i,
        s.value,
        n == null ? void 0 : n.parentElement.value
      );
      u == null || u.focus();
    }
    return (i, u) => {
      var d;
      return openBlock(), createBlock(unref(M), {
        type: "button",
        "data-state": a.value,
        "data-disabled": t.disabled,
        "data-orientation": (d = unref(e)) == null ? void 0 : d.orientation,
        "as-child": t.asChild,
        as: i.as,
        onClick: u[0] || (u[0] = (c) => unref(e).changeModelValue(t.value)),
        ref_key: "currentToggleElement",
        ref: s,
        onKeydown: l,
        "data-radix-vue-collection-item": ""
      }, {
        default: withCtx(() => [
          renderSlot(i.$slots, "default")
        ]),
        _: 3
      }, 8, ["data-state", "data-disabled", "data-orientation", "as-child", "as"]);
    };
  }
});
var qr = defineComponent({
  __name: "ToolbarSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o;
    return (e, n) => (openBlock(), createBlock(Jn, {
      "as-child": t.asChild,
      as: e.as
    }, null, 8, ["as-child", "as"]));
  }
});
var xo = Symbol();
var Jr = defineComponent({
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
function pl(o) {
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
var Zr = defineComponent({
  __name: "AvatarImage",
  props: {
    onLoadingStatusChange: {},
    asChild: { type: Boolean },
    as: { default: "img" }
  },
  setup(o) {
    const t = o, e = inject(xo), n = useAttrs().src, a = pl(n);
    return watch(
      a,
      (s) => {
        s !== "idle" && (e.imageLoadingStatus.value = s);
      },
      { immediate: true }
    ), (s, l) => unref(a) === "loaded" ? (openBlock(), createBlock(unref(M), {
      key: 0,
      "as-child": t.asChild,
      as: s.as
    }, {
      default: withCtx(() => [
        renderSlot(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as"])) : createCommentVNode("", true);
  }
});
var Qr = defineComponent({
  __name: "AvatarFallback",
  props: {
    delayMs: { default: 0 },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(o) {
    const t = o, e = inject(xo);
    let n = ref(false), a;
    return t.delayMs ? a = setTimeout(() => {
      n.value = true, clearTimeout(a);
    }, t.delayMs) : n.value = true, (s, l) => {
      var i;
      return unref(n) && ((i = unref(e)) == null ? void 0 : i.imageLoadingStatus.value) !== "loaded" ? (openBlock(), createBlock(unref(M), {
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
var Mo = Symbol();
var je = defineComponent({
  __name: "PopperRoot",
  setup(o) {
    const t = ref();
    return provide(Mo, {
      anchor: t,
      onAnchorChange: (e) => {
        t.value = e;
      }
    }), (e, n) => renderSlot(e.$slots, "default");
  }
});
var vt = defineComponent({
  __name: "PopperAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o, { primitiveElement: e, currentElement: n } = F(), a = inject(Mo);
    return watch(n, () => {
      a == null || a.onAnchorChange(t.element ?? n.value);
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
var fl = (o) => ({
  name: "transformOrigin",
  options: o,
  fn(t) {
    var y, C, O;
    const { placement: e, rects: n, middlewareData: a } = t, l = ((y = a.arrow) == null ? void 0 : y.centerOffset) !== 0, i = l ? 0 : o.arrowWidth, u = l ? 0 : o.arrowHeight, [d, c] = co(e), f = { start: "0%", center: "50%", end: "100%" }[c], p = (((C = a.arrow) == null ? void 0 : C.x) ?? 0) + i / 2, m = (((O = a.arrow) == null ? void 0 : O.y) ?? 0) + u / 2;
    let v = "", h2 = "";
    return d === "bottom" ? (v = l ? f : `${p}px`, h2 = `${-u}px`) : d === "top" ? (v = l ? f : `${p}px`, h2 = `${n.floating.height + u}px`) : d === "right" ? (v = `${-u}px`, h2 = l ? f : `${m}px`) : d === "left" && (v = `${n.floating.width + u}px`, h2 = l ? f : `${m}px`), { data: { x: v, y: h2 } };
  }
});
function co(o) {
  const [t, e = "center"] = o.split("-");
  return [t, e];
}
function et(o) {
  return o.split("-")[1];
}
function ko(o) {
  return o === "y" ? "height" : "width";
}
function be(o) {
  return o.split("-")[0];
}
function Ge(o) {
  return ["top", "bottom"].includes(be(o)) ? "x" : "y";
}
function wn(o, t, e) {
  let { reference: n, floating: a } = o;
  const s = n.x + n.width / 2 - a.width / 2, l = n.y + n.height / 2 - a.height / 2, i = Ge(t), u = ko(i), d = n[u] / 2 - a[u] / 2, c = i === "x";
  let f;
  switch (be(t)) {
    case "top":
      f = { x: s, y: n.y - a.height };
      break;
    case "bottom":
      f = { x: s, y: n.y + n.height };
      break;
    case "right":
      f = { x: n.x + n.width, y: l };
      break;
    case "left":
      f = { x: n.x - a.width, y: l };
      break;
    default:
      f = { x: n.x, y: n.y };
  }
  switch (et(t)) {
    case "start":
      f[i] -= d * (e && c ? -1 : 1);
      break;
    case "end":
      f[i] += d * (e && c ? -1 : 1);
  }
  return f;
}
var ml = async (o, t, e) => {
  const { placement: n = "bottom", strategy: a = "absolute", middleware: s = [], platform: l } = e, i = s.filter(Boolean), u = await (l.isRTL == null ? void 0 : l.isRTL(t));
  let d = await l.getElementRects({ reference: o, floating: t, strategy: a }), { x: c, y: f } = wn(d, n, u), p = n, m = {}, v = 0;
  for (let h2 = 0; h2 < i.length; h2++) {
    const { name: y, fn: C } = i[h2], { x: O, y: $, data: S, reset: A } = await C({ x: c, y: f, initialPlacement: n, placement: p, strategy: a, middlewareData: m, rects: d, platform: l, elements: { reference: o, floating: t } });
    c = O ?? c, f = $ ?? f, m = { ...m, [y]: { ...m[y], ...S } }, A && v <= 50 && (v++, typeof A == "object" && (A.placement && (p = A.placement), A.rects && (d = A.rects === true ? await l.getElementRects({ reference: o, floating: t, strategy: a }) : A.rects), { x: c, y: f } = wn(d, p, u)), h2 = -1);
  }
  return { x: c, y: f, placement: p, strategy: a, middlewareData: m };
};
function Oe(o, t) {
  return typeof o == "function" ? o(t) : o;
}
function ua(o) {
  return typeof o != "number" ? function(t) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...t };
  }(o) : { top: o, right: o, bottom: o, left: o };
}
function Bt(o) {
  return { ...o, top: o.y, left: o.x, right: o.x + o.width, bottom: o.y + o.height };
}
async function lt(o, t) {
  var e;
  t === void 0 && (t = {});
  const { x: n, y: a, platform: s, rects: l, elements: i, strategy: u } = o, { boundary: d = "clippingAncestors", rootBoundary: c = "viewport", elementContext: f = "floating", altBoundary: p = false, padding: m = 0 } = Oe(t, o), v = ua(m), h2 = i[p ? f === "floating" ? "reference" : "floating" : f], y = Bt(await s.getClippingRect({ element: (e = await (s.isElement == null ? void 0 : s.isElement(h2))) == null || e ? h2 : h2.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(i.floating)), boundary: d, rootBoundary: c, strategy: u })), C = f === "floating" ? { ...l.floating, x: n, y: a } : l.reference, O = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(i.floating)), $ = await (s.isElement == null ? void 0 : s.isElement(O)) && await (s.getScale == null ? void 0 : s.getScale(O)) || { x: 1, y: 1 }, S = Bt(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: C, offsetParent: O, strategy: u }) : C);
  return { top: (y.top - S.top + v.top) / $.y, bottom: (S.bottom - y.bottom + v.bottom) / $.y, left: (y.left - S.left + v.left) / $.x, right: (S.right - y.right + v.right) / $.x };
}
var rt = Math.min;
var We = Math.max;
function po(o, t, e) {
  return We(o, rt(t, e));
}
var vl = (o) => ({ name: "arrow", options: o, async fn(t) {
  const { x: e, y: n, placement: a, rects: s, platform: l, elements: i } = t, { element: u, padding: d = 0 } = Oe(o, t) || {};
  if (u == null)
    return {};
  const c = ua(d), f = { x: e, y: n }, p = Ge(a), m = ko(p), v = await l.getDimensions(u), h2 = p === "y", y = h2 ? "top" : "left", C = h2 ? "bottom" : "right", O = h2 ? "clientHeight" : "clientWidth", $ = s.reference[m] + s.reference[p] - f[p] - s.floating[m], S = f[p] - s.reference[p], A = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(u));
  let x = A ? A[O] : 0;
  x && await (l.isElement == null ? void 0 : l.isElement(A)) || (x = i.floating[O] || s.floating[m]);
  const B = $ / 2 - S / 2, V = x / 2 - v[m] / 2 - 1, I = rt(c[y], V), R = rt(c[C], V), N = I, z = x - v[m] - R, U = x / 2 - v[m] / 2 + B, G = po(N, U, z), Q = et(a) != null && U != G && s.reference[m] / 2 - (U < N ? I : R) - v[m] / 2 < 0 ? U < N ? N - U : z - U : 0;
  return { [p]: f[p] - Q, data: { [p]: G, centerOffset: U - G + Q } };
} });
var da = ["top", "right", "bottom", "left"];
da.reduce((o, t) => o.concat(t, t + "-start", t + "-end"), []);
var hl = { left: "right", right: "left", bottom: "top", top: "bottom" };
function At(o) {
  return o.replace(/left|right|bottom|top/g, (t) => hl[t]);
}
function yl(o, t, e) {
  e === void 0 && (e = false);
  const n = et(o), a = Ge(o), s = ko(a);
  let l = a === "x" ? n === (e ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return t.reference[s] > t.floating[s] && (l = At(l)), { main: l, cross: At(l) };
}
var gl = { start: "end", end: "start" };
function so(o) {
  return o.replace(/start|end/g, (t) => gl[t]);
}
var _l = function(o) {
  return o === void 0 && (o = {}), { name: "flip", options: o, async fn(t) {
    var e;
    const { placement: n, middlewareData: a, rects: s, initialPlacement: l, platform: i, elements: u } = t, { mainAxis: d = true, crossAxis: c = true, fallbackPlacements: f, fallbackStrategy: p = "bestFit", fallbackAxisSideDirection: m = "none", flipAlignment: v = true, ...h2 } = Oe(o, t), y = be(n), C = be(l) === l, O = await (i.isRTL == null ? void 0 : i.isRTL(u.floating)), $ = f || (C || !v ? [At(l)] : function(N) {
      const z = At(N);
      return [so(N), z, so(z)];
    }(l));
    f || m === "none" || $.push(...function(N, z, U, G) {
      const Q = et(N);
      let j = function(fe, ye, Jt) {
        const Fe = ["left", "right"], Et = ["right", "left"], ot = ["top", "bottom"], Zt = ["bottom", "top"];
        switch (fe) {
          case "top":
          case "bottom":
            return Jt ? ye ? Et : Fe : ye ? Fe : Et;
          case "left":
          case "right":
            return ye ? ot : Zt;
          default:
            return [];
        }
      }(be(N), U === "start", G);
      return Q && (j = j.map((fe) => fe + "-" + Q), z && (j = j.concat(j.map(so)))), j;
    }(l, v, m, O));
    const S = [l, ...$], A = await lt(t, h2), x = [];
    let B = ((e = a.flip) == null ? void 0 : e.overflows) || [];
    if (d && x.push(A[y]), c) {
      const { main: N, cross: z } = yl(n, s, O);
      x.push(A[N], A[z]);
    }
    if (B = [...B, { placement: n, overflows: x }], !x.every((N) => N <= 0)) {
      var V, I;
      const N = (((V = a.flip) == null ? void 0 : V.index) || 0) + 1, z = S[N];
      if (z)
        return { data: { index: N, overflows: B }, reset: { placement: z } };
      let U = (I = B.filter((G) => G.overflows[0] <= 0).sort((G, Q) => G.overflows[1] - Q.overflows[1])[0]) == null ? void 0 : I.placement;
      if (!U)
        switch (p) {
          case "bestFit": {
            var R;
            const G = (R = B.map((Q) => [Q.placement, Q.overflows.filter((j) => j > 0).reduce((j, fe) => j + fe, 0)]).sort((Q, j) => Q[1] - j[1])[0]) == null ? void 0 : R[0];
            G && (U = G);
            break;
          }
          case "initialPlacement":
            U = l;
        }
      if (n !== U)
        return { reset: { placement: U } };
    }
    return {};
  } };
};
function En(o, t) {
  return { top: o.top - t.height, right: o.right - t.width, bottom: o.bottom - t.height, left: o.left - t.width };
}
function Cn(o) {
  return da.some((t) => o[t] >= 0);
}
var bl = function(o) {
  return o === void 0 && (o = {}), { name: "hide", options: o, async fn(t) {
    const { rects: e } = t, { strategy: n = "referenceHidden", ...a } = Oe(o, t);
    switch (n) {
      case "referenceHidden": {
        const s = En(await lt(t, { ...a, elementContext: "reference" }), e.reference);
        return { data: { referenceHiddenOffsets: s, referenceHidden: Cn(s) } };
      }
      case "escaped": {
        const s = En(await lt(t, { ...a, altBoundary: true }), e.floating);
        return { data: { escapedOffsets: s, escaped: Cn(s) } };
      }
      default:
        return {};
    }
  } };
};
var wl = function(o) {
  return o === void 0 && (o = 0), { name: "offset", options: o, async fn(t) {
    const { x: e, y: n } = t, a = await async function(s, l) {
      const { placement: i, platform: u, elements: d } = s, c = await (u.isRTL == null ? void 0 : u.isRTL(d.floating)), f = be(i), p = et(i), m = Ge(i) === "x", v = ["left", "top"].includes(f) ? -1 : 1, h2 = c && m ? -1 : 1, y = Oe(l, s);
      let { mainAxis: C, crossAxis: O, alignmentAxis: $ } = typeof y == "number" ? { mainAxis: y, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...y };
      return p && typeof $ == "number" && (O = p === "end" ? -1 * $ : $), m ? { x: O * h2, y: C * v } : { x: C * v, y: O * h2 };
    }(t, o);
    return { x: e + a.x, y: n + a.y, data: a };
  } };
};
function ca(o) {
  return o === "x" ? "y" : "x";
}
var El = function(o) {
  return o === void 0 && (o = {}), { name: "shift", options: o, async fn(t) {
    const { x: e, y: n, placement: a } = t, { mainAxis: s = true, crossAxis: l = false, limiter: i = { fn: (y) => {
      let { x: C, y: O } = y;
      return { x: C, y: O };
    } }, ...u } = Oe(o, t), d = { x: e, y: n }, c = await lt(t, u), f = Ge(be(a)), p = ca(f);
    let m = d[f], v = d[p];
    if (s) {
      const y = f === "y" ? "bottom" : "right";
      m = po(m + c[f === "y" ? "top" : "left"], m, m - c[y]);
    }
    if (l) {
      const y = p === "y" ? "bottom" : "right";
      v = po(v + c[p === "y" ? "top" : "left"], v, v - c[y]);
    }
    const h2 = i.fn({ ...t, [f]: m, [p]: v });
    return { ...h2, data: { x: h2.x - e, y: h2.y - n } };
  } };
};
var Cl = function(o) {
  return o === void 0 && (o = {}), { options: o, fn(t) {
    const { x: e, y: n, placement: a, rects: s, middlewareData: l } = t, { offset: i = 0, mainAxis: u = true, crossAxis: d = true } = Oe(o, t), c = { x: e, y: n }, f = Ge(a), p = ca(f);
    let m = c[f], v = c[p];
    const h2 = Oe(i, t), y = typeof h2 == "number" ? { mainAxis: h2, crossAxis: 0 } : { mainAxis: 0, crossAxis: 0, ...h2 };
    if (u) {
      const $ = f === "y" ? "height" : "width", S = s.reference[f] - s.floating[$] + y.mainAxis, A = s.reference[f] + s.reference[$] - y.mainAxis;
      m < S ? m = S : m > A && (m = A);
    }
    if (d) {
      var C, O;
      const $ = f === "y" ? "width" : "height", S = ["top", "left"].includes(be(a)), A = s.reference[p] - s.floating[$] + (S && ((C = l.offset) == null ? void 0 : C[p]) || 0) + (S ? 0 : y.crossAxis), x = s.reference[p] + s.reference[$] + (S ? 0 : ((O = l.offset) == null ? void 0 : O[p]) || 0) - (S ? y.crossAxis : 0);
      v < A ? v = A : v > x && (v = x);
    }
    return { [f]: m, [p]: v };
  } };
};
var $l = function(o) {
  return o === void 0 && (o = {}), { name: "size", options: o, async fn(t) {
    const { placement: e, rects: n, platform: a, elements: s } = t, { apply: l = () => {
    }, ...i } = Oe(o, t), u = await lt(t, i), d = be(e), c = et(e), f = Ge(e) === "x", { width: p, height: m } = n.floating;
    let v, h2;
    d === "top" || d === "bottom" ? (v = d, h2 = c === (await (a.isRTL == null ? void 0 : a.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (h2 = d, v = c === "end" ? "top" : "bottom");
    const y = m - u[v], C = p - u[h2], O = !t.middlewareData.shift;
    let $ = y, S = C;
    if (f) {
      const x = p - u.left - u.right;
      S = c || O ? rt(C, x) : x;
    } else {
      const x = m - u.top - u.bottom;
      $ = c || O ? rt(y, x) : x;
    }
    if (O && !c) {
      const x = We(u.left, 0), B = We(u.right, 0), V = We(u.top, 0), I = We(u.bottom, 0);
      f ? S = p - 2 * (x !== 0 || B !== 0 ? x + B : We(u.left, u.right)) : $ = m - 2 * (V !== 0 || I !== 0 ? V + I : We(u.top, u.bottom));
    }
    await l({ ...t, availableWidth: S, availableHeight: $ });
    const A = await a.getDimensions(s.floating);
    return p !== A.width || m !== A.height ? { reset: { rects: true } } : {};
  } };
};
function ie(o) {
  var t;
  return ((t = o.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function de(o) {
  return ie(o).getComputedStyle(o);
}
function pa(o) {
  return o instanceof ie(o).Node;
}
function Me(o) {
  return pa(o) ? (o.nodeName || "").toLowerCase() : "#document";
}
function ce(o) {
  return o instanceof ie(o).HTMLElement;
}
function we(o) {
  return o instanceof ie(o).Element;
}
function $n(o) {
  return typeof ShadowRoot < "u" && (o instanceof ie(o).ShadowRoot || o instanceof ShadowRoot);
}
function it(o) {
  const { overflow: t, overflowX: e, overflowY: n, display: a } = de(o);
  return /auto|scroll|overlay|hidden|clip/.test(t + n + e) && !["inline", "contents"].includes(a);
}
function Ol(o) {
  return ["table", "td", "th"].includes(Me(o));
}
function fo(o) {
  const t = Ro(), e = de(o);
  return e.transform !== "none" || e.perspective !== "none" || !t && !!e.backdropFilter && e.backdropFilter !== "none" || !t && !!e.filter && e.filter !== "none" || ["transform", "perspective", "filter"].some((n) => (e.willChange || "").includes(n)) || ["paint", "layout", "strict", "content"].some((n) => (e.contain || "").includes(n));
}
function Ro() {
  return !(typeof CSS > "u" || !CSS.supports) && CSS.supports("-webkit-backdrop-filter", "none");
}
function Kt(o) {
  return ["html", "body", "#document"].includes(Me(o));
}
var mo = Math.min;
var qe = Math.max;
var It = Math.round;
var Ot = Math.floor;
var ze = (o) => ({ x: o, y: o });
function fa(o) {
  const t = de(o);
  let e = parseFloat(t.width) || 0, n = parseFloat(t.height) || 0;
  const a = ce(o), s = a ? o.offsetWidth : e, l = a ? o.offsetHeight : n, i = It(e) !== s || It(n) !== l;
  return i && (e = s, n = l), { width: e, height: n, $: i };
}
function Lo(o) {
  return we(o) ? o : o.contextElement;
}
function Je(o) {
  const t = Lo(o);
  if (!ce(t))
    return ze(1);
  const e = t.getBoundingClientRect(), { width: n, height: a, $: s } = fa(t);
  let l = (s ? It(e.width) : e.width) / n, i = (s ? It(e.height) : e.height) / a;
  return l && Number.isFinite(l) || (l = 1), i && Number.isFinite(i) || (i = 1), { x: l, y: i };
}
var On = ze(0);
function ma(o, t, e) {
  var n, a;
  if (t === void 0 && (t = true), !Ro())
    return On;
  const s = o ? ie(o) : window;
  return !e || t && e !== s ? On : { x: ((n = s.visualViewport) == null ? void 0 : n.offsetLeft) || 0, y: ((a = s.visualViewport) == null ? void 0 : a.offsetTop) || 0 };
}
function Ye(o, t, e, n) {
  t === void 0 && (t = false), e === void 0 && (e = false);
  const a = o.getBoundingClientRect(), s = Lo(o);
  let l = ze(1);
  t && (n ? we(n) && (l = Je(n)) : l = Je(o));
  const i = ma(s, e, n);
  let u = (a.left + i.x) / l.x, d = (a.top + i.y) / l.y, c = a.width / l.x, f = a.height / l.y;
  if (s) {
    const p = ie(s), m = n && we(n) ? ie(n) : n;
    let v = p.frameElement;
    for (; v && n && m !== p; ) {
      const h2 = Je(v), y = v.getBoundingClientRect(), C = getComputedStyle(v), O = y.left + (v.clientLeft + parseFloat(C.paddingLeft)) * h2.x, $ = y.top + (v.clientTop + parseFloat(C.paddingTop)) * h2.y;
      u *= h2.x, d *= h2.y, c *= h2.x, f *= h2.y, u += O, d += $, v = ie(v).frameElement;
    }
  }
  return Bt({ width: c, height: f, x: u, y: d });
}
function Ee(o) {
  return ((pa(o) ? o.ownerDocument : o.document) || window.document).documentElement;
}
function Ht(o) {
  return we(o) ? { scrollLeft: o.scrollLeft, scrollTop: o.scrollTop } : { scrollLeft: o.pageXOffset, scrollTop: o.pageYOffset };
}
function va(o) {
  return Ye(Ee(o)).left + Ht(o).scrollLeft;
}
function Qe(o) {
  if (Me(o) === "html")
    return o;
  const t = o.assignedSlot || o.parentNode || $n(o) && o.host || Ee(o);
  return $n(t) ? t.host : t;
}
function ha(o) {
  const t = Qe(o);
  return Kt(t) ? o.ownerDocument ? o.ownerDocument.body : o.body : ce(t) && it(t) ? t : ha(t);
}
function Dt(o, t) {
  var e;
  t === void 0 && (t = []);
  const n = ha(o), a = n === ((e = o.ownerDocument) == null ? void 0 : e.body), s = ie(n);
  return a ? t.concat(s, s.visualViewport || [], it(n) ? n : []) : t.concat(n, Dt(n));
}
function Pn(o, t, e) {
  let n;
  if (t === "viewport")
    n = function(a, s) {
      const l = ie(a), i = Ee(a), u = l.visualViewport;
      let d = i.clientWidth, c = i.clientHeight, f = 0, p = 0;
      if (u) {
        d = u.width, c = u.height;
        const m = Ro();
        (!m || m && s === "fixed") && (f = u.offsetLeft, p = u.offsetTop);
      }
      return { width: d, height: c, x: f, y: p };
    }(o, e);
  else if (t === "document")
    n = function(a) {
      const s = Ee(a), l = Ht(a), i = a.ownerDocument.body, u = qe(s.scrollWidth, s.clientWidth, i.scrollWidth, i.clientWidth), d = qe(s.scrollHeight, s.clientHeight, i.scrollHeight, i.clientHeight);
      let c = -l.scrollLeft + va(a);
      const f = -l.scrollTop;
      return de(i).direction === "rtl" && (c += qe(s.clientWidth, i.clientWidth) - u), { width: u, height: d, x: c, y: f };
    }(Ee(o));
  else if (we(t))
    n = function(a, s) {
      const l = Ye(a, true, s === "fixed"), i = l.top + a.clientTop, u = l.left + a.clientLeft, d = ce(a) ? Je(a) : ze(1);
      return { width: a.clientWidth * d.x, height: a.clientHeight * d.y, x: u * d.x, y: i * d.y };
    }(t, e);
  else {
    const a = ma(o);
    n = { ...t, x: t.x - a.x, y: t.y - a.y };
  }
  return Bt(n);
}
function ya(o, t) {
  const e = Qe(o);
  return !(e === t || !we(e) || Kt(e)) && (de(e).position === "fixed" || ya(e, t));
}
function Tn(o, t) {
  return ce(o) && de(o).position !== "fixed" ? t ? t(o) : o.offsetParent : null;
}
function Sn(o, t) {
  const e = ie(o);
  if (!ce(o))
    return e;
  let n = Tn(o, t);
  for (; n && Ol(n) && de(n).position === "static"; )
    n = Tn(n, t);
  return n && (Me(n) === "html" || Me(n) === "body" && de(n).position === "static" && !fo(n)) ? e : n || function(a) {
    let s = Qe(a);
    for (; ce(s) && !Kt(s); ) {
      if (fo(s))
        return s;
      s = Qe(s);
    }
    return null;
  }(o) || e;
}
function Pl(o, t, e) {
  const n = ce(t), a = Ee(t), s = e === "fixed", l = Ye(o, true, s, t);
  let i = { scrollLeft: 0, scrollTop: 0 };
  const u = ze(0);
  if (n || !n && !s)
    if ((Me(t) !== "body" || it(a)) && (i = Ht(t)), ce(t)) {
      const d = Ye(t, true, s, t);
      u.x = d.x + t.clientLeft, u.y = d.y + t.clientTop;
    } else
      a && (u.x = va(a));
  return { x: l.left + i.scrollLeft - u.x, y: l.top + i.scrollTop - u.y, width: l.width, height: l.height };
}
var Tl = { getClippingRect: function(o) {
  let { element: t, boundary: e, rootBoundary: n, strategy: a } = o;
  const s = e === "clippingAncestors" ? function(d, c) {
    const f = c.get(d);
    if (f)
      return f;
    let p = Dt(d).filter((y) => we(y) && Me(y) !== "body"), m = null;
    const v = de(d).position === "fixed";
    let h2 = v ? Qe(d) : d;
    for (; we(h2) && !Kt(h2); ) {
      const y = de(h2), C = fo(h2);
      C || y.position !== "fixed" || (m = null), (v ? !C && !m : !C && y.position === "static" && m && ["absolute", "fixed"].includes(m.position) || it(h2) && !C && ya(d, h2)) ? p = p.filter((O) => O !== h2) : m = y, h2 = Qe(h2);
    }
    return c.set(d, p), p;
  }(t, this._c) : [].concat(e), l = [...s, n], i = l[0], u = l.reduce((d, c) => {
    const f = Pn(t, c, a);
    return d.top = qe(f.top, d.top), d.right = mo(f.right, d.right), d.bottom = mo(f.bottom, d.bottom), d.left = qe(f.left, d.left), d;
  }, Pn(t, i, a));
  return { width: u.right - u.left, height: u.bottom - u.top, x: u.left, y: u.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(o) {
  let { rect: t, offsetParent: e, strategy: n } = o;
  const a = ce(e), s = Ee(e);
  if (e === s)
    return t;
  let l = { scrollLeft: 0, scrollTop: 0 }, i = ze(1);
  const u = ze(0);
  if ((a || !a && n !== "fixed") && ((Me(e) !== "body" || it(s)) && (l = Ht(e)), ce(e))) {
    const d = Ye(e);
    i = Je(e), u.x = d.x + e.clientLeft, u.y = d.y + e.clientTop;
  }
  return { width: t.width * i.x, height: t.height * i.y, x: t.x * i.x - l.scrollLeft * i.x + u.x, y: t.y * i.y - l.scrollTop * i.y + u.y };
}, isElement: we, getDimensions: function(o) {
  return fa(o);
}, getOffsetParent: Sn, getDocumentElement: Ee, getScale: Je, async getElementRects(o) {
  let { reference: t, floating: e, strategy: n } = o;
  const a = this.getOffsetParent || Sn, s = this.getDimensions;
  return { reference: Pl(t, await a(e), n), floating: { x: 0, y: 0, ...await s(e) } };
}, getClientRects: (o) => Array.from(o.getClientRects()), isRTL: (o) => de(o).direction === "rtl" };
function Sl(o, t, e, n) {
  n === void 0 && (n = {});
  const { ancestorScroll: a = true, ancestorResize: s = true, elementResize: l = true, layoutShift: i = typeof IntersectionObserver == "function", animationFrame: u = false } = n, d = Lo(o), c = a || s ? [...d ? Dt(d) : [], ...Dt(t)] : [];
  c.forEach((h2) => {
    a && h2.addEventListener("scroll", e, { passive: true }), s && h2.addEventListener("resize", e);
  });
  const f = d && i ? function(h2, y) {
    let C, O = null;
    const $ = Ee(h2);
    function S() {
      clearTimeout(C), O && O.disconnect(), O = null;
    }
    return function A(x, B) {
      x === void 0 && (x = false), B === void 0 && (B = 1), S();
      const { left: V, top: I, width: R, height: N } = h2.getBoundingClientRect();
      if (x || y(), !R || !N)
        return;
      const z = Ot(I), U = Ot($.clientWidth - (V + R)), G = Ot($.clientHeight - (I + N)), Q = Ot(V);
      let j = true;
      O = new IntersectionObserver((fe) => {
        const ye = fe[0].intersectionRatio;
        if (ye !== B) {
          if (!j)
            return A();
          ye ? A(false, ye) : C = setTimeout(() => {
            A(false, 1e-7);
          }, 100);
        }
        j = false;
      }, { rootMargin: -z + "px " + -U + "px " + -G + "px " + -Q + "px", threshold: qe(0, mo(1, B)) || 1 }), O.observe(h2);
    }(true), S;
  }(d, e) : null;
  let p, m = null;
  l && (m = new ResizeObserver(e), d && !u && m.observe(d), m.observe(t));
  let v = u ? Ye(o) : null;
  return u && function h2() {
    const y = Ye(o);
    !v || y.x === v.x && y.y === v.y && y.width === v.width && y.height === v.height || e(), v = y, p = requestAnimationFrame(h2);
  }(), e(), () => {
    c.forEach((h2) => {
      a && h2.removeEventListener("scroll", e), s && h2.removeEventListener("resize", e);
    }), f && f(), m && m.disconnect(), m = null, u && cancelAnimationFrame(p);
  };
}
var Bl = (o, t, e) => {
  const n = /* @__PURE__ */ new Map(), a = { platform: Tl, ...e }, s = { ...a.platform, _c: n };
  return ml(o, t, { ...a, platform: s });
};
function vo(o) {
  var t;
  return (t = o == null ? void 0 : o.$el) != null ? t : o;
}
function Al(o) {
  return {
    name: "arrow",
    options: o,
    fn(t) {
      const e = vo(unref(o.element));
      return e == null ? {} : vl({
        element: e,
        padding: o.padding
      }).fn(t);
    }
  };
}
function ga(o) {
  return typeof window > "u" ? 1 : (o.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Bn(o, t) {
  const e = ga(o);
  return Math.round(t * e) / e;
}
function Il(o, t, e) {
  e === void 0 && (e = {});
  const n = e.whileElementsMounted, a = computed(() => {
    var B;
    return (B = unref(e.open)) != null ? B : true;
  }), s = computed(() => unref(e.middleware)), l = computed(() => {
    var B;
    return (B = unref(e.placement)) != null ? B : "bottom";
  }), i = computed(() => {
    var B;
    return (B = unref(e.strategy)) != null ? B : "absolute";
  }), u = computed(() => {
    var B;
    return (B = unref(e.transform)) != null ? B : true;
  }), d = computed(() => vo(o.value)), c = computed(() => vo(t.value)), f = ref(0), p = ref(0), m = ref(i.value), v = ref(l.value), h2 = shallowRef({}), y = ref(false), C = computed(() => {
    const B = {
      position: m.value,
      left: "0",
      top: "0"
    };
    if (!c.value)
      return B;
    const V = Bn(c.value, f.value), I = Bn(c.value, p.value);
    return u.value ? {
      ...B,
      transform: "translate(" + V + "px, " + I + "px)",
      ...ga(c.value) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: m.value,
      left: V + "px",
      top: I + "px"
    };
  });
  let O;
  function $() {
    d.value == null || c.value == null || Bl(d.value, c.value, {
      middleware: s.value,
      placement: l.value,
      strategy: i.value
    }).then((B) => {
      f.value = B.x, p.value = B.y, m.value = B.strategy, v.value = B.placement, h2.value = B.middlewareData, y.value = true;
    });
  }
  function S() {
    typeof O == "function" && (O(), O = void 0);
  }
  function A() {
    if (S(), n === void 0) {
      $();
      return;
    }
    if (d.value != null && c.value != null) {
      O = n(d.value, c.value, $);
      return;
    }
  }
  function x() {
    a.value || (y.value = false);
  }
  return watch([s, l, i], $, {
    flush: "sync"
  }), watch([d, c], A, {
    flush: "sync"
  }), watch(a, x, {
    flush: "sync"
  }), getCurrentScope() && onScopeDispose(S), {
    x: shallowReadonly(f),
    y: shallowReadonly(p),
    strategy: shallowReadonly(m),
    placement: shallowReadonly(v),
    middlewareData: shallowReadonly(h2),
    isPositioned: shallowReadonly(y),
    floatingStyles: C,
    update: $
  };
}
var Re = {
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
var _a = Symbol();
var Dl = {
  inheritAttrs: false
};
var ht = defineComponent({
  ...Dl,
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
    ...Re
  }),
  setup(o, { expose: t }) {
    const e = o, n = inject(Mo), { primitiveElement: a, currentElement: s } = F(), l = ref(), i = ref(), u = ref(), { width: d, height: c } = bs(u), f = computed(
      () => e.side + (e.align !== "center" ? "-" + e.align : "")
    ), p = computed(() => typeof e.collisionPadding == "number" ? e.collisionPadding : { top: 0, right: 0, bottom: 0, left: 0, ...e.collisionPadding }), m = computed(() => Array.isArray(e.collisionBoundary) ? e.collisionBoundary : [e.collisionBoundary]), v = computed(() => ({
      padding: p.value,
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: m.value.length > 0
    })), h2 = Qa(() => [
      wl({
        mainAxis: e.sideOffset + c.value,
        alignmentAxis: e.alignOffset
      }),
      e.avoidCollisions && El({
        mainAxis: true,
        crossAxis: !!e.prioritizePosition,
        limiter: e.sticky === "partial" ? Cl() : void 0,
        ...v.value
      }),
      !e.prioritizePosition && e.avoidCollisions && _l({
        ...v.value
      }),
      $l({
        ...v,
        apply: ({ elements: R, rects: N, availableWidth: z, availableHeight: U }) => {
          const { width: G, height: Q } = N.reference, j = R.floating.style;
          Object.assign(R.floating.style, {
            maxWidth: `${z}px`,
            maxHeight: `${U}px`
          }), j.setProperty(
            "--radix-popper-available-width",
            `${z}px`
          ), j.setProperty(
            "--radix-popper-available-height",
            `${U}px`
          ), j.setProperty(
            "--radix-popper-anchor-width",
            `${G}px`
          ), j.setProperty(
            "--radix-popper-anchor-height",
            `${Q}px`
          );
        }
      }),
      u.value && Al({ element: u.value, padding: e.arrowPadding }),
      fl({
        arrowWidth: d.value,
        arrowHeight: c.value
      }),
      e.hideWhenDetached && bl({ strategy: "referenceHidden", ...v.value })
    ]), { floatingStyles: y, placement: C, isPositioned: O, middlewareData: $ } = Il(
      n.anchor,
      l,
      {
        strategy: "fixed",
        placement: f,
        whileElementsMounted: (...R) => Sl(...R, {
          animationFrame: e.updatePositionStrategy === "always"
        }),
        middleware: h2
      }
    ), S = computed(
      () => co(C.value)[0]
    ), A = computed(
      () => co(C.value)[1]
    );
    watchEffect(() => {
      var R;
      O.value && ((R = e.onPlaced) == null || R.call(e));
    });
    const x = computed(
      () => {
        var R;
        return ((R = $.value.arrow) == null ? void 0 : R.centerOffset) !== 0;
      }
    ), B = ref("");
    watchEffect(() => {
      i.value && (B.value = window.getComputedStyle(i.value).zIndex);
    });
    const V = computed(() => {
      var R;
      return ((R = $.value.arrow) == null ? void 0 : R.x) ?? 0;
    }), I = computed(() => {
      var R;
      return ((R = $.value.arrow) == null ? void 0 : R.y) ?? 0;
    });
    return provide(_a, {
      placedSide: S,
      onArrowChange: (R) => {
        u.value = R;
      },
      arrowX: V,
      arrowY: I,
      shouldHideArrow: x
    }), t({
      $el: s
    }), (R, N) => {
      var z, U, G;
      return openBlock(), createElementBlock("div", {
        ref_key: "floatingRef",
        ref: l,
        "data-radix-popper-content-wrapper": "",
        style: normalizeStyle({
          ...unref(y),
          transform: unref(O) ? unref(y).transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: B.value,
          ["--radix-popper-transform-origin"]: [
            (z = unref($).transformOrigin) == null ? void 0 : z.x,
            (U = unref($).transformOrigin) == null ? void 0 : U.y
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
          "data-align": A.value,
          style: {
            // if the PopperContent hasn't been placed yet (not all measurements done)
            // we prevent animations so that users's animation don't kick in too early referring wrong sides
            animation: unref(O) ? void 0 : "none",
            // hide the content if using the hide middleware and should be hidden
            opacity: (G = unref($).hide) != null && G.referenceHidden ? 0 : void 0
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
var xl = createBaseVNode("polygon", { points: "0,0 30,0 15,10" }, null, -1);
var Ml = defineComponent({
  __name: "Arrow",
  props: {
    width: { default: 10 },
    height: { default: 5 },
    asChild: { type: Boolean },
    as: { default: "svg" }
  },
  setup(o) {
    const t = o, { primitiveElement: e } = F();
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
          xl
        ])
      ]),
      _: 3
    }, 16, ["width", "height"]));
  }
});
var kl = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
};
var Rl = {
  inheritAttrs: false
};
var yt = defineComponent({
  ...Rl,
  __name: "PopperArrow",
  props: {
    width: {},
    height: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = inject(_a), e = computed(
      () => t != null && t.placedSide ? kl[t == null ? void 0 : t.placedSide.value] : ""
    );
    return (n, a) => {
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
        createVNode(Ml, mergeProps(n.$attrs, { style: {
          display: "block"
        } }), null, 16)
      ], 4);
    };
  }
});
var No = Symbol();
var jr = defineComponent({
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
    return provide(No, {
      open: n,
      showTooltip: (l) => {
        a.value = l, n.value = true;
      },
      hideTooltip: () => n.value = false,
      delayMs: e.delayDuration,
      dataState: s,
      disableHoverableContent: computed(() => e.disableHoverableContent),
      contentId: oe()
    }), (l, i) => (openBlock(), createBlock(unref(je), null, {
      default: withCtx(() => [
        renderSlot(l.$slots, "default")
      ]),
      _: 3
    }));
  }
});
var ei = defineComponent({
  __name: "TooltipTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(o) {
    const t = o, e = inject(No), { primitiveElement: n, currentElement: a } = F();
    return ys(a, {
      delayEnter: e == null ? void 0 : e.delayMs,
      onHoverEnter: () => e == null ? void 0 : e.showTooltip(true),
      delayLeave: 0,
      onHoverLeave: () => e == null ? void 0 : e.hideTooltip(),
      disabled: e == null ? void 0 : e.disableHoverableContent
    }), (s, l) => (openBlock(), createBlock(unref(vt), { asChild: "" }, {
      default: withCtx(() => {
        var i, u, d, c;
        return [
          createVNode(unref(M), {
            type: s.as === "button" ? "button" : void 0,
            ref_key: "primitiveElement",
            ref: n,
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
var Fo = defineComponent({
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
var ti = defineComponent({
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
    const e = o, n = ref(), a = inject(No);
    Vn(n, () => {
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
      return (d = unref(a)) != null && d.open.value ? (openBlock(), createBlock(unref(ht), {
        key: 0,
        ref_key: "contentElement",
        ref: n,
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
            createVNode(unref(Fo), {
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
var oi = defineComponent({
  __name: "TooltipArrow",
  props: {
    width: { default: 10 },
    height: { default: 5 },
    asChild: { type: Boolean, default: false },
    as: {}
  },
  setup(o) {
    const t = o;
    return (e, n) => (openBlock(), createBlock(unref(yt), {
      "as-child": t.asChild,
      as: e.as,
      height: t.height,
      width: t.width
    }, null, 8, ["as-child", "as", "height", "width"]));
  }
});
var Ko = Symbol();
var ni = defineComponent({
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
    return provide(Ko, {
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
    }), (a, s) => (openBlock(), createBlock(unref(je), null, {
      default: withCtx(() => [
        renderSlot(a.$slots, "default")
      ]),
      _: 3
    }));
  }
});
var ai = defineComponent({
  __name: "HoverCardTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(o) {
    const t = o, e = inject(Ko), { primitiveElement: n, currentElement: a } = F();
    async function s(i) {
      await hs(
        i,
        a.value,
        e == null ? void 0 : e.openDelay
      ) && (e == null || e.showTooltip());
    }
    async function l(i) {
      e.isHover = false, await Yn(i, e == null ? void 0 : e.closeDelay) && !(e != null && e.isHover) && (e == null || e.hideTooltip());
    }
    return (i, u) => (openBlock(), createBlock(unref(vt), { asChild: "" }, {
      default: withCtx(() => {
        var d, c;
        return [
          createVNode(unref(M), {
            ref_key: "primitiveElement",
            ref: n,
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
var ba = defineComponent({
  __name: "BasePortal",
  props: {
    container: { default: "body" }
  },
  setup(o) {
    const t = o;
    return (e, n) => (openBlock(), createBlock(Teleport, {
      to: t.container
    }, [
      renderSlot(e.$slots, "default")
    ], 8, ["to"]));
  }
});
var si = defineComponent({
  __name: "HoverCardPortal",
  props: {
    container: {}
  },
  setup(o) {
    const t = o;
    return (e, n) => (openBlock(), createBlock(ba, normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var li = defineComponent({
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
    const t = o, e = inject(Ko);
    async function n(a) {
      e.isHover = false, await Yn(a, e == null ? void 0 : e.closeDelay) && !(e != null && e.isHover) && (e == null || e.hideTooltip());
    }
    return (a, s) => {
      var l, i;
      return (l = unref(e)) != null && l.open.value ? (openBlock(), createBlock(unref(ht), mergeProps({ key: 0 }, t, {
        onMouseover: s[0] || (s[0] = (u) => unref(e).isHover = true),
        onMouseleave: n,
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
var ri = defineComponent({
  __name: "HoverCardArrow",
  setup(o) {
    return (t, e) => (openBlock(), createBlock(unref(yt)));
  }
});
var Vt = Symbol();
var ii = defineComponent({
  __name: "PopoverRoot",
  props: {
    defaultOpen: { type: Boolean, default: false },
    open: { type: Boolean, default: void 0 },
    modal: { type: Boolean, default: false }
  },
  emits: ["update:open"],
  setup(o, { emit: t }) {
    const e = o, n = X(e, "open", t, {
      defaultValue: e.defaultOpen,
      passive: true
    }), a = ref();
    return provide(Vt, {
      open: n,
      showPopover: () => {
        n.value = true;
      },
      hidePopover: () => {
        n.value = false;
      },
      triggerElement: a
    }), (s, l) => (openBlock(), createBlock(unref(je), null, {
      default: withCtx(() => [
        renderSlot(s.$slots, "default")
      ]),
      _: 3
    }));
  }
});
var ui = defineComponent({
  __name: "PopoverTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(o) {
    const t = o, e = inject(Vt), { primitiveElement: n, currentElement: a } = F();
    onMounted(() => {
      e.triggerElement.value = a.value;
    });
    function s() {
      e != null && e.open.value ? e == null || e.hidePopover() : e == null || e.showPopover();
    }
    return (l, i) => (openBlock(), createBlock(unref(vt), { asChild: "" }, {
      default: withCtx(() => {
        var u, d;
        return [
          createVNode(unref(M), {
            as: l.as,
            type: l.as === "button" ? "button" : void 0,
            ref_key: "primitiveElement",
            ref: n,
            "aria-expanded": ((u = unref(e)) == null ? void 0 : u.open.value) || false,
            "data-state": (d = unref(e)) != null && d.open.value ? "open" : "closed",
            "as-child": t.asChild,
            onClick: s
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
var di = defineComponent({
  __name: "PopoverPortal",
  props: {
    container: {}
  },
  setup(o) {
    const t = o;
    return (e, n) => (openBlock(), createBlock(ba, normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var ci = defineComponent({
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
    const t = o, e = inject(Vt), { primitiveElement: n, currentElement: a } = F();
    watchEffect(() => {
      a.value && (e != null && e.open.value ? (Es(a.value), window.addEventListener("keydown", s)) : e != null && e.triggerElement.value && (e == null || e.triggerElement.value.focus(), l()));
    }), Vn(a, (i) => {
      e == null || e.hidePopover(), i.preventDefault(), i.stopPropagation();
    });
    function s(i) {
      i.key === "Escape" && (e == null || e.hidePopover());
    }
    function l() {
      window.removeEventListener("keydown", s);
    }
    return onUnmounted(() => {
      l();
    }), (i, u) => {
      var d;
      return (d = unref(e)) != null && d.open.value ? (openBlock(), createBlock(unref(ht), mergeProps({
        key: 0,
        ref_key: "primitiveElement",
        ref: n
      }, t), {
        default: withCtx(() => {
          var c, f;
          return [
            (c = unref(e)) != null && c.open.value ? (openBlock(), createBlock(unref(M), {
              key: 0,
              "data-state": (f = unref(e)) != null && f.open.value ? "open" : "closed",
              "data-side": t.side,
              "data-align": t.align,
              role: "tooltip",
              "as-child": t.asChild,
              as: i.as
            }, {
              default: withCtx(() => [
                renderSlot(i.$slots, "default")
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
var pi = defineComponent({
  __name: "PopoverArrow",
  setup(o) {
    return (t, e) => (openBlock(), createBlock(unref(yt)));
  }
});
var fi = defineComponent({
  __name: "PopoverClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(o) {
    const t = o, e = inject(Vt);
    return (n, a) => {
      var s, l, i;
      return openBlock(), createBlock(unref(M), {
        type: n.as === "button" ? "button" : void 0,
        as: n.as,
        "aria-expanded": ((s = unref(e)) == null ? void 0 : s.open.value) || false,
        "data-state": (l = unref(e)) != null && l.open.value ? "open" : "closed",
        "as-child": t.asChild,
        onClick: (i = unref(e)) == null ? void 0 : i.hidePopover
      }, {
        default: withCtx(() => [
          renderSlot(n.$slots, "default")
        ]),
        _: 3
      }, 8, ["type", "as", "aria-expanded", "data-state", "as-child", "onClick"]);
    };
  }
});
var Wt = defineComponent({
  __name: "MenuAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o;
    return (e, n) => (openBlock(), createBlock(unref(vt), normalizeProps(guardReactiveProps(t)), {
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
  setup(o) {
    const t = o;
    return (e, n) => (openBlock(), createBlock(unref(yt), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var ve = Symbol();
var tt = Symbol();
var Vo = defineComponent({
  __name: "MenuRoot",
  props: {
    open: { type: Boolean, default: false },
    onOpenChange: {},
    dir: { default: "ltr" },
    modal: { type: Boolean, default: true }
  },
  emits: ["update:open"],
  setup(o, { emit: t }) {
    const e = o, { modal: n, dir: a } = toRefs(e), s = X(e, "open", t), l = ref(), i = ref(false);
    return watchEffect((u) => {
      if (!Te)
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
    }), provide(ve, {
      open: s,
      onOpenChange: (u) => {
        s.value = u;
      },
      content: l,
      onContentChange: (u) => {
        l.value = u;
      }
    }), provide(tt, {
      onClose: () => {
        s.value = false;
      },
      isUsingKeyboardRef: i,
      dir: a,
      modal: n
    }), (u, d) => (openBlock(), createBlock(unref(je), null, {
      default: withCtx(() => [
        renderSlot(u.$slots, "default")
      ]),
      _: 3
    }));
  }
});
var zt = Symbol();
var Wo = defineComponent({
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
    ...Re
  }),
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss", "openAutoFocus", "closeAutoFocus"],
  setup(o, { emit: t }) {
    const e = o, n = inject(ve), a = inject(tt), { trapFocus: s, disableOutsidePointerEvents: l, loop: i } = toRefs(e);
    Gn(), $o(l.value);
    const u = ref(""), d = ref(0), c = ref(0), f = ref(null), p = ref("right"), m = ref(0), v = ref(null), { createCollection: h2 } = Se(), { primitiveElement: y, currentElement: C } = F(), O = h2(C);
    watch(C, (I) => {
      n.onContentChange(I);
    });
    const { handleTypeaheadSearch: $ } = Oo(O);
    onUnmounted(() => {
      window.clearTimeout(d.value);
    });
    const S = (I) => {
      var N, z;
      return p.value === ((N = f.value) == null ? void 0 : N.side) && sl(I, (z = f.value) == null ? void 0 : z.area);
    }, A = async (I) => {
      t("openAutoFocus", I), setTimeout(() => {
        var R, N, z;
        (R = C.value) == null || R.focus(), a != null && a.isUsingKeyboardRef.value && !I.defaultPrevented && ((z = (N = O.value) == null ? void 0 : N[0]) == null || z.focus(), I.preventDefault());
      }, 0);
    }, x = (I) => {
      const N = I.target.closest("[data-radix-menu-content]") === I.currentTarget, z = I.ctrlKey || I.altKey || I.metaKey, U = I.key.length === 1, G = pe(
        I,
        document.activeElement,
        C.value,
        {
          loop: i.value,
          arrowKeyOptions: "vertical",
          dir: a == null ? void 0 : a.dir.value,
          focus: true
        }
      );
      if (G)
        return G == null ? void 0 : G.focus();
      if (I.code === "Space" || (N && (I.key === "Tab" && I.preventDefault(), !z && U && $(I.key)), I.target !== C.value) || !tl.includes(I.key))
        return;
      I.preventDefault();
      const Q = O.value;
      aa.includes(I.key) && Q.reverse(), uo(Q);
    }, B = (I) => {
      var R, N;
      (N = (R = I == null ? void 0 : I.currentTarget) == null ? void 0 : R.contains) != null && N.call(R, I.target) || (window.clearTimeout(d.value), u.value = "");
    }, V = (I) => {
      var z;
      if (!st(I))
        return;
      const R = I.target, N = m.value !== I.clientX;
      if ((z = I == null ? void 0 : I.currentTarget) != null && z.contains(R) && N) {
        const U = I.clientX > m.value ? "right" : "left";
        p.value = U, m.value = I.clientX;
      }
    };
    return provide(zt, {
      onItemEnter: (I) => {
        S(I) && I.preventDefault();
      },
      onItemLeave: (I) => {
        var R;
        S(I) || ((R = C.value) == null || R.focus(), v.value = null);
      },
      onTriggerLeave: (I) => {
        S(I) && I.preventDefault();
      },
      searchRef: u,
      pointerGraceTimerRef: c,
      onPointerGraceIntentChange: (I) => {
        f.value = I;
      }
    }), (I, R) => (openBlock(), createBlock(unref(Ao), {
      asChild: "",
      trapped: unref(s),
      onMountAutoFocus: A,
      onUnmountAutoFocus: R[5] || (R[5] = (N) => t("closeAutoFocus", N))
    }, {
      default: withCtx(() => [
        createVNode(unref(Nt), {
          asChild: "",
          disableOutsidePointerEvents: unref(l),
          onEscapeKeyDown: R[0] || (R[0] = (N) => t("escapeKeyDown", N)),
          onPointerDownOutside: R[1] || (R[1] = (N) => t("pointerDownOutside", N)),
          onFocusOutside: R[2] || (R[2] = (N) => t("focusOutside", N)),
          onInteractOutside: R[3] || (R[3] = (N) => t("interactOutside", N)),
          onDismiss: R[4] || (R[4] = (N) => t("dismiss"))
        }, {
          default: withCtx(() => [
            createVNode(unref(ht), {
              ref_key: "primitiveElement",
              ref: y,
              role: "menu",
              as: I.as,
              "as-child": I.asChild,
              "aria-orientation": "vertical",
              "data-radix-menu-content": "",
              "data-state": unref(Io)(unref(n).open.value),
              dir: unref(a).dir.value,
              onKeydown: x,
              onBlur: B,
              onPointermove: V,
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
var wa = defineComponent({
  __name: "MenuItemImpl",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(o, { expose: t }) {
    const e = o, { primitiveElement: n, currentElement: a } = F(), s = inject(zt), l = ref(false), i = async (d) => {
      if (await nextTick(), !d.defaultPrevented && st(d)) {
        if (e.disabled)
          s.onItemLeave(d);
        else if (s.onItemEnter(d), !d.defaultPrevented) {
          const c = d.currentTarget;
          c && c.focus();
        }
      }
    }, u = async (d) => {
      await nextTick(), !d.defaultPrevented && st(d) && s.onItemLeave(d);
    };
    return t({
      el: a
    }), (d, c) => (openBlock(), createBlock(unref(M), {
      ref_key: "primitiveElement",
      ref: n,
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
    const e = o, { primitiveElement: n, currentElement: a } = F(), s = inject(tt), l = inject(zt), i = ref(false), u = async () => {
      const d = a.value;
      if (!e.disabled && d) {
        const c = new CustomEvent(js, {
          bubbles: true,
          cancelable: true
        });
        t("select", c), await nextTick(), c.defaultPrevented ? i.value = false : s.onClose();
      }
    };
    return (d, c) => (openBlock(), createBlock(wa, {
      ref_key: "primitiveElement",
      ref: n,
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
        d.disabled || p && f.key === " " || unref(io).includes(f.key) && (f.currentTarget.click(), f.preventDefault());
      })
    }, {
      default: withCtx(() => [
        renderSlot(d.$slots, "default")
      ]),
      _: 3
    }, 8, ["disabled"]));
  }
});
var zo = Symbol();
var Yo = defineComponent({
  __name: "MenuItemIndicator",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(o) {
    const t = inject(zo, {
      checked: ref(false)
    });
    return (e, n) => {
      var a, s;
      return openBlock(), createBlock(unref(ue), {
        present: unref(St)((a = unref(t)) == null ? void 0 : a.checked.value) || ((s = unref(t)) == null ? void 0 : s.checked.value) === true
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
var Uo = defineComponent({
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
    return provide(zo, {
      checked: n
    }), (a, s) => (openBlock(), createBlock(gt, mergeProps({ role: "menuitemcheckbox" }, e, {
      "aria-checked": unref(St)(unref(n)) ? "mixed" : unref(n),
      "data-state": unref(Do)(unref(n)),
      onSelect: s[0] || (s[0] = async (l) => {
        t("select", l), unref(St)(unref(n)) ? n.value = true : n.value = !unref(n);
      })
    }), {
      default: withCtx(() => [
        renderSlot(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-checked", "data-state"]));
  }
});
var Ll = defineComponent({
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
    const e = o, n = inject(ve), a = ee(t);
    return (s, l) => {
      var i, u;
      return openBlock(), createBlock(Wo, mergeProps({ ...e, ...unref(a) }, {
        "trap-focus": (i = unref(n)) == null ? void 0 : i.open.value,
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
var Nl = defineComponent({
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
    const e = o, n = inject(ve), a = ee(t);
    return (s, l) => (openBlock(), createBlock(Wo, mergeProps({ ...e, ...unref(a) }, {
      "trap-focus": false,
      "disable-outside-pointer-events": false,
      "disable-outside-scroll": false,
      onDismiss: l[0] || (l[0] = (i) => {
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
var Go = defineComponent({
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
    const e = o, n = inject(ve), a = inject(tt), s = ee(t);
    return (l, i) => (openBlock(), createBlock(unref(ue), {
      present: unref(n).open.value
    }, {
      default: withCtx(() => {
        var u;
        return [
          (u = unref(a)) != null && u.modal.value ? (openBlock(), createBlock(Ll, normalizeProps(mergeProps({ key: 0 }, { ...l.$attrs, ...e, ...unref(s) })), {
            default: withCtx(() => [
              renderSlot(l.$slots, "default")
            ]),
            _: 3
          }, 16)) : (openBlock(), createBlock(Nl, normalizeProps(mergeProps({ key: 1 }, { ...l.$attrs, ...e, ...unref(s) })), {
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
var Yt = defineComponent({
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
var Xo = defineComponent({
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
var qo = defineComponent({
  __name: "MenuPortal",
  props: {
    to: { default: "body" },
    disabled: { type: Boolean }
  },
  setup(o) {
    const t = o, e = inject(ve);
    return (n, a) => (openBlock(), createBlock(unref(ue), {
      present: unref(e).open.value
    }, {
      default: withCtx(() => [
        (openBlock(), createBlock(Teleport, normalizeProps(guardReactiveProps(t)), [
          renderSlot(n.$slots, "default")
        ], 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
});
var Ea = Symbol();
var Jo = defineComponent({
  __name: "MenuRadioGroup",
  props: {
    modelValue: { default: "" },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(o, { emit: t }) {
    const e = o, n = X(e, "modelValue", t);
    return provide(Ea, {
      modelValue: n,
      onValueChange: (a) => {
        n.value = a;
      }
    }), (a, s) => (openBlock(), createBlock(Yt, normalizeProps(guardReactiveProps(e)), {
      default: withCtx(() => [
        renderSlot(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Zo = defineComponent({
  __name: "MenuRadioItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(o, { emit: t }) {
    const e = o, { value: n } = toRefs(e), a = inject(Ea), s = computed(
      () => (a == null ? void 0 : a.modelValue.value) === (n == null ? void 0 : n.value)
    );
    return provide(zo, {
      checked: s
    }), (l, i) => (openBlock(), createBlock(gt, mergeProps({ role: "menuitemradio" }, e, {
      "aria-checked": s.value,
      "data-state": unref(Do)(s.value),
      onSelect: i[0] || (i[0] = async (u) => {
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
var Qo = defineComponent({
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
var jo = Symbol();
var en = defineComponent({
  __name: "MenuSub",
  props: {
    open: { type: Boolean }
  },
  emits: ["update:open"],
  setup(o, { emit: t }) {
    const n = X(o, "open", t, {
      defaultValue: false,
      passive: true
    }), a = inject(ve), s = ref(), l = ref();
    return watchEffect((i) => {
      (a == null ? void 0 : a.open.value) === false && (n.value = false), i(() => n.value = false);
    }), provide(ve, {
      open: n,
      onOpenChange: (i) => {
        n.value = i;
      },
      content: l,
      onContentChange: (i) => {
        l.value = i;
      }
    }), provide(jo, {
      triggerId: oe(),
      contentId: oe(),
      trigger: s,
      onTriggerChange: (i) => {
        s.value = i;
      }
    }), (i, u) => (openBlock(), createBlock(unref(je), null, {
      default: withCtx(() => [
        renderSlot(i.$slots, "default")
      ]),
      _: 3
    }));
  }
});
var tn = defineComponent({
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
    ...Re
  }),
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss", "openAutoFocus", "closeAutoFocus"],
  setup(o, { emit: t }) {
    const e = o, n = ee(t), a = inject(ve), s = inject(tt), l = inject(jo), { primitiveElement: i, currentElement: u } = F();
    return (d, c) => (openBlock(), createBlock(unref(ue), {
      present: unref(a).open.value
    }, {
      default: withCtx(() => [
        createVNode(Wo, mergeProps({
          ref_key: "primitiveElement",
          ref: i
        }, { ...e, ...unref(n) }, {
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
            const p = (v = f.currentTarget) == null ? void 0 : v.contains(f.target), m = unref(nl)[unref(s).dir.value].includes(f.key);
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
var on = defineComponent({
  __name: "MenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o, e = inject(ve), n = inject(tt), a = inject(jo), s = inject(zt), l = ref(null), i = computed(
      () => s == null ? void 0 : s.pointerGraceTimerRef.value
    ), u = () => {
      l.value && window.clearTimeout(l.value), l.value = null;
    };
    onUnmounted(() => {
      u();
    });
    const d = (p) => {
      st(p) && (s.onItemEnter(p), e.onOpenChange(true), !p.defaultPrevented && !t.disabled && !(e != null && e.open.value) && !l.value && (s.onPointerGraceIntentChange(null), l.value = window.setTimeout(() => {
        u();
      }, 100)));
    }, c = (p) => {
      var v, h2;
      if (!st(p))
        return;
      u();
      const m = (v = e.content.value) == null ? void 0 : v.getBoundingClientRect();
      if (m) {
        const y = (h2 = e.content.value) == null ? void 0 : h2.dataset.side, C = y === "right", O = C ? -5 : 5, $ = m[C ? "left" : "right"], S = m[C ? "right" : "left"];
        s.onPointerGraceIntentChange({
          area: [
            // Apply a bleed on clientX to ensure that our exit point is
            // consistently within polygon bounds
            { x: p.clientX + O, y: p.clientY },
            { x: $, y: m.top },
            { x: S, y: m.top },
            { x: S, y: m.bottom },
            { x: $, y: m.bottom }
          ],
          side: y
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
      t.disabled || m && p.key === " " || ol[n.dir.value].includes(p.key) && (e.onOpenChange(true), await nextTick(), (v = e.content.value) == null || v.focus(), p.preventDefault());
    };
    return (p, m) => (openBlock(), createBlock(Wt, { asChild: "" }, {
      default: withCtx(() => {
        var v;
        return [
          createVNode(wa, {
            id: unref(a).triggerId,
            "aria-haspopup": "menu",
            "aria-expanded": unref(e).open.value,
            "aria-controls": (v = unref(a)) == null ? void 0 : v.contentId,
            "data-state": unref(Io)(unref(e).open.value),
            ref: (h2) => {
              var y;
              (y = unref(a)) == null || y.onTriggerChange(h2 == null ? void 0 : h2.el);
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
var nn = Symbol();
var mi = defineComponent({
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
    return provide(nn, {
      open: n,
      onOpenChange: (i) => {
        n.value = i;
      },
      onOpenToggle: () => {
        n.value = !n.value;
      },
      triggerId: oe(),
      triggerElement: a,
      contentId: oe(),
      modal: s,
      dir: l
    }), (i, u) => (openBlock(), createBlock(unref(Vo), {
      open: unref(n),
      "onUpdate:open": u[0] || (u[0] = (d) => isRef(n) ? n.value = d : null),
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
var vi = defineComponent({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(o) {
    const t = o, e = inject(nn), { primitiveElement: n, currentElement: a } = F();
    return onMounted(() => {
      e.triggerElement = a;
    }), (s, l) => (openBlock(), createBlock(unref(Wt), { asChild: "" }, {
      default: withCtx(() => {
        var i, u, d, c, f;
        return [
          createVNode(unref(M), {
            ref_key: "primitiveElement",
            ref: n,
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
var hi = defineComponent({
  __name: "DropdownMenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean }
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
var yi = defineComponent({
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
    ...Re
  }),
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss", "openAutoFocus", "closeAutoFocus"],
  setup(o, { emit: t }) {
    const e = o, n = inject(nn), a = ref(false), s = ee(t), l = (i) => {
      t("closeAutoFocus", i), !i.defaultPrevented && (a.value || setTimeout(() => {
        var u;
        (u = n == null ? void 0 : n.triggerElement.value) == null || u.focus();
      }, 0), a.value = false, i.preventDefault());
    };
    return (i, u) => {
      var d, c;
      return openBlock(), createBlock(unref(Go), mergeProps({ ...e, ...unref(s) }, {
        id: (d = unref(n)) == null ? void 0 : d.contentId,
        "aria-labelledby": (c = unref(n)) == null ? void 0 : c.triggerId,
        onCloseAutoFocus: l,
        onInteractOutside: u[0] || (u[0] = (f) => {
          var h2;
          if (t("interactOutside", f), f.defaultPrevented)
            return;
          const p = f.detail.originalEvent, m = p.button === 0 && p.ctrlKey === true, v = p.button === 2 || m;
          (!((h2 = unref(n)) != null && h2.modal.value) || v) && (a.value = true);
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
var gi = defineComponent({
  __name: "DropdownMenuArrow",
  props: {
    width: { default: 10 },
    height: { default: 5 },
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o;
    return (e, n) => (openBlock(), createBlock(unref(Ho), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var _i = defineComponent({
  __name: "DropdownMenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(o, { emit: t }) {
    const e = o, n = ee(t);
    return (a, s) => (openBlock(), createBlock(unref(gt), normalizeProps(guardReactiveProps({ ...e, ...unref(n) })), {
      default: withCtx(() => [
        renderSlot(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var bi = defineComponent({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o;
    return (e, n) => (openBlock(), createBlock(unref(Yt), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var wi = defineComponent({
  __name: "DropdownMenuSeparator",
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
var Ei = defineComponent({
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
    const e = o, n = ee(t);
    return (a, s) => (openBlock(), createBlock(unref(Uo), normalizeProps(guardReactiveProps({ ...e, ...unref(n) })), {
      default: withCtx(() => [
        renderSlot(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Ci = defineComponent({
  __name: "DropdownMenuItemIndicator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o;
    return (e, n) => (openBlock(), createBlock(unref(Yo), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var $i = defineComponent({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o;
    return (e, n) => (openBlock(), createBlock(unref(Xo), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Oi = defineComponent({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(o, { emit: t }) {
    const e = o, n = ee(t);
    return (a, s) => (openBlock(), createBlock(unref(Jo), normalizeProps(guardReactiveProps({ ...e, ...unref(n) })), {
      default: withCtx(() => [
        renderSlot(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Pi = defineComponent({
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
    return (n, a) => (openBlock(), createBlock(unref(Zo), normalizeProps(guardReactiveProps({ ...e, ...t })), {
      default: withCtx(() => [
        renderSlot(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Ti = defineComponent({
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
    return (a, s) => (openBlock(), createBlock(unref(en), {
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
var Si = defineComponent({
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
    ...Re
  }),
  setup(o, { emit: t }) {
    const e = o;
    return (n, a) => (openBlock(), createBlock(unref(tn), mergeProps({ ...e, ...t }, { style: {
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
var Bi = defineComponent({
  __name: "DropdownMenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
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
var an = Symbol();
var Ai = defineComponent({
  __name: "ContextMenuRoot",
  props: {
    dir: { default: "ltr" },
    modal: { type: Boolean, default: true }
  },
  emits: ["update:open"],
  setup(o, { emit: t }) {
    const e = o, { dir: n, modal: a } = toRefs(e), s = ref(false);
    return provide(an, {
      open: s,
      onOpenChange: (l) => {
        s.value = l, t("update:open", l);
      },
      dir: n,
      modal: a
    }), (l, i) => (openBlock(), createBlock(unref(Vo), {
      open: s.value,
      "onUpdate:open": i[0] || (i[0] = (u) => s.value = u),
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
function An(o) {
  return o.pointerType !== "mouse";
}
var Ii = defineComponent({
  inheritAttrs: false,
  __name: "ContextMenuTrigger",
  props: {
    disabled: { type: Boolean, default: false },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(o) {
    const t = o, { disabled: e } = toRefs(t), n = inject(an), a = ref({ x: 0, y: 0 }), s = computed(() => ({
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
      a.value = { x: p.clientX, y: p.clientY }, n == null || n.onOpenChange(true);
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
        createVNode(unref(Wt), {
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
var Di = defineComponent({
  __name: "ContextMenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean }
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
var xi = defineComponent({
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
  setup(o, { emit: t }) {
    const e = o, n = inject(an), a = ref(false);
    return (s, l) => (openBlock(), createBlock(unref(Go), mergeProps(e, {
      side: "right",
      sideOffset: 2,
      align: "start",
      onCloseAutoFocus: l[0] || (l[0] = (i) => {
        t("closeAutoFocus", i), !i.defaultPrevented && a.value && i.preventDefault(), a.value = false;
      }),
      onInteractOutside: l[1] || (l[1] = (i) => {
        var u;
        t("interactOutside", i), !i.defaultPrevented && !((u = unref(n)) != null && u.modal.value) && (a.value = true);
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
var Mi = defineComponent({
  __name: "ContextMenuArrow",
  props: {
    width: {},
    height: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o;
    return (e, n) => (openBlock(), createBlock(unref(Ho), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var ki = defineComponent({
  __name: "ContextMenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(o, { emit: t }) {
    const e = o, n = ee(t);
    return (a, s) => (openBlock(), createBlock(unref(gt), normalizeProps(guardReactiveProps({ ...e, ...unref(n) })), {
      default: withCtx(() => [
        renderSlot(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Ri = defineComponent({
  __name: "ContextMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o;
    return (e, n) => (openBlock(), createBlock(unref(Yt), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Li = defineComponent({
  __name: "ContextMenuSeparator",
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
var Ni = defineComponent({
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
    const e = o, n = ee(t);
    return (a, s) => (openBlock(), createBlock(unref(Uo), normalizeProps(guardReactiveProps({ ...e, ...unref(n) })), {
      default: withCtx(() => [
        renderSlot(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Fi = defineComponent({
  __name: "ContextMenuItemIndicator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o;
    return (e, n) => (openBlock(), createBlock(unref(Yo), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Ki = defineComponent({
  __name: "ContextMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o;
    return (e, n) => (openBlock(), createBlock(unref(Xo), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Hi = defineComponent({
  __name: "ContextMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(o, { emit: t }) {
    const e = o, n = ee(t);
    return (a, s) => (openBlock(), createBlock(unref(Jo), normalizeProps(guardReactiveProps({ ...e, ...unref(n) })), {
      default: withCtx(() => [
        renderSlot(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Vi = defineComponent({
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
    const e = o, n = ee(t);
    return (a, s) => (openBlock(), createBlock(unref(Zo), normalizeProps(guardReactiveProps({ ...e, ...unref(n) })), {
      default: withCtx(() => [
        renderSlot(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Wi = defineComponent({
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
    return (a, s) => (openBlock(), createBlock(unref(en), {
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
var zi = defineComponent({
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
    ...Re
  }),
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss", "openAutoFocus", "closeAutoFocus"],
  setup(o, { emit: t }) {
    const e = o, n = ee(t);
    return (a, s) => (openBlock(), createBlock(unref(tn), mergeProps({ ...e, ...unref(n) }, { style: {
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
var Yi = defineComponent({
  __name: "ContextMenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
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
var Fl = ["default-value"];
var Kl = defineComponent({
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
    fs(e);
    const n = ref();
    return (a, s) => (openBlock(), createBlock(unref(Fo), { asChild: "" }, {
      default: withCtx(() => [
        withDirectives(createBaseVNode("select", mergeProps({
          ref_key: "selectElement",
          ref: n,
          "default-value": unref(e)
        }, t, {
          "onUpdate:modelValue": s[0] || (s[0] = (l) => isRef(e) ? e.value = l : null)
        }), [
          renderSlot(a.$slots, "default")
        ], 16, Fl), [
          [vModelSelect, unref(e)]
        ])
      ]),
      _: 3
    }));
  }
});
var Hl = {
  key: 0,
  value: ""
};
var Le = Symbol();
var Ca = Symbol();
var Ui = defineComponent({
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
    }), s = ref(), l = ref(), i = ref({
      x: 0,
      y: 0
    }), { required: u, disabled: d, dir: c } = toRefs(e);
    provide(Le, {
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
      contentId: oe(),
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
      triggerPointerDownPosRef: i,
      disabled: d
    });
    const f = computed(
      () => s.value ? !!s.value.closest("form") : true
    ), p = ref(/* @__PURE__ */ new Set()), m = computed(() => Array.from(p.value).map((v) => {
      var h2;
      return (h2 = v.props) == null ? void 0 : h2.value;
    }).join(";"));
    return provide(Ca, {
      onNativeOptionAdd: (v) => {
        p.value.add(v);
      },
      onNativeOptionRemove: (v) => {
        p.value.delete(v);
      }
    }), (v, h2) => (openBlock(), createBlock(unref(je), null, {
      default: withCtx(() => [
        renderSlot(v.$slots, "default"),
        f.value ? (openBlock(), createBlock(Kl, {
          "aria-hidden": "",
          tabIndex: "-1",
          key: m.value,
          required: unref(u),
          name: v.name,
          autocomplete: v.autocomplete,
          disabled: unref(d),
          value: unref(n),
          onChange: h2[0] || (h2[0] = (y) => n.value = y.target.value)
        }, {
          default: withCtx(() => [
            unref(n) === void 0 ? (openBlock(), createElementBlock("option", Hl)) : createCommentVNode("", true),
            (openBlock(true), createElementBlock(Fragment, null, renderList(Array.from(p.value), (y) => (openBlock(), createBlock(resolveDynamicComponent(y), mergeProps(y.props, {
              key: y.key ?? ""
            }), null, 16))), 128))
          ]),
          _: 1
        }, 8, ["required", "name", "autocomplete", "disabled", "value"])) : createCommentVNode("", true)
      ]),
      _: 3
    }));
  }
});
var Vl = [" ", "Enter", "ArrowUp", "ArrowDown"];
var Wl = [" ", "Enter"];
var ge = 10;
function $a(o) {
  return o === "" || o === void 0;
}
var Gi = defineComponent({
  __name: "SelectTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(o) {
    const t = o, e = inject(Le), n = computed(() => {
      var p;
      return ((p = e == null ? void 0 : e.disabled) == null ? void 0 : p.value) || t.disabled;
    }), { primitiveElement: a, currentElement: s } = F();
    onMounted(() => {
      e.triggerElement = s;
    });
    const { injectCollection: l } = Se(), i = l(), { search: u, handleTypeaheadSearch: d, resetTypeahead: c } = Oo(i), f = () => {
      n.value || (e.onOpenChange(true), c());
    };
    return (p, m) => (openBlock(), createBlock(unref(vt), { asChild: "" }, {
      default: withCtx(() => {
        var v, h2, y, C, O, $, S, A;
        return [
          createVNode(unref(M), {
            ref_key: "primitiveElement",
            ref: a,
            role: "combobox",
            type: p.as === "button" ? "button" : void 0,
            "aria-controls": (v = unref(e)) == null ? void 0 : v.contentId,
            "aria-expanded": ((h2 = unref(e)) == null ? void 0 : h2.open.value) || false,
            "aria-required": (C = (y = unref(e)) == null ? void 0 : y.required) == null ? void 0 : C.value,
            "aria-autocomplete": "none",
            dir: (O = unref(e)) == null ? void 0 : O.dir.value,
            "data-state": ($ = unref(e)) != null && $.open.value ? "open" : "closed",
            "data-disabled": n.value ? "" : void 0,
            "data-placeholder": unref($a)((A = (S = unref(e)) == null ? void 0 : S.modelValue) == null ? void 0 : A.value) ? "" : void 0,
            "as-child": p.asChild,
            as: p.as,
            onClick: m[0] || (m[0] = (x) => {
              var B;
              (B = x == null ? void 0 : x.currentTarget) == null || B.focus();
            }),
            onPointerdown: m[1] || (m[1] = (x) => {
              const B = x.target;
              B.hasPointerCapture(x.pointerId) && B.releasePointerCapture(x.pointerId), x.button === 0 && x.ctrlKey === false && (f(), unref(e).triggerPointerDownPosRef.value = {
                x: Math.round(x.pageX),
                y: Math.round(x.pageY)
              }, x.preventDefault());
            }),
            onPointerup: m[2] || (m[2] = withModifiers(() => {
            }, ["prevent"])),
            onKeydown: m[3] || (m[3] = (x) => {
              const B = unref(u) !== "";
              !(x.ctrlKey || x.altKey || x.metaKey) && x.key.length === 1 && B && x.key === " " || (unref(d)(x.key), unref(Vl).includes(x.key) && (f(), x.preventDefault()));
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
var Xi = defineComponent({
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
var Ut = Symbol();
var qi = defineComponent({
  __name: "SelectViewport",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o, e = inject(Be), n = e.position === "item-aligned" ? inject(Ut) : void 0, { primitiveElement: a, currentElement: s } = F();
    onMounted(() => {
      e.onViewportChange(s.value);
    });
    const l = ref(0), i = (u) => {
      const d = u.currentTarget, { shouldExpandOnScrollRef: c, contentWrapper: f } = n;
      if (c != null && c.value && (f != null && f.value)) {
        const p = Math.abs(l.value - d.scrollTop);
        if (p > 0) {
          const m = window.innerHeight - ge * 2, v = parseFloat(f.value.style.minHeight), h2 = parseFloat(f.value.style.height), y = Math.max(v, h2);
          if (y < m) {
            const C = y + p, O = Math.min(m, C), $ = C - O;
            f.value.style.height = O + "px", f.value.style.bottom === "0px" && (d.scrollTop = $ > 0 ? $ : 0, f.value.style.justifyContent = "flex-end");
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
var zl = defineComponent({
  inheritAttrs: false,
  __name: "SelectItemAlignedPosition",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["placed"],
  setup(o, { emit: t }) {
    const e = o, { injectCollection: n } = Se(), a = inject(Le), s = inject(Be), l = n(), i = ref(false), u = ref(true), d = ref(), { primitiveElement: c, currentElement: f } = F(), { viewport: p, selectedItem: m, selectedItemText: v, focusSelectedItem: h2 } = s, y = () => {
      if (a && a.triggerElement.value && a.valueElement.value && d.value && f.value && (p != null && p.value) && (m != null && m.value) && (v != null && v.value)) {
        const $ = a.triggerElement.value.getBoundingClientRect(), S = f.value.getBoundingClientRect(), A = a.valueElement.value.getBoundingClientRect(), x = v.value.getBoundingClientRect();
        if (a.dir.value !== "rtl") {
          const Ke = x.left - S.left, Ae = A.left - Ke, He = $.left - Ae, Ve = $.width + He, Qt = Math.max(Ve, S.width), jt = window.innerWidth - ge, eo = pn(Ae, ge, jt - Qt);
          d.value.style.minWidth = Ve + "px", d.value.style.left = eo + "px";
        } else {
          const Ke = S.right - x.right, Ae = window.innerWidth - A.right - Ke, He = window.innerWidth - $.right - Ae, Ve = $.width + He, Qt = Math.max(Ve, S.width), jt = window.innerWidth - ge, eo = pn(
            Ae,
            ge,
            jt - Qt
          );
          d.value.style.minWidth = Ve + "px", d.value.style.right = eo + "px";
        }
        const B = l.value, V = window.innerHeight - ge * 2, I = p.value.scrollHeight, R = window.getComputedStyle(f.value), N = parseInt(R.borderTopWidth, 10), z = parseInt(R.paddingTop, 10), U = parseInt(
          R.borderBottomWidth,
          10
        ), G = parseInt(R.paddingBottom, 10), Q = N + z + I + G + U, j = Math.min(
          m.value.offsetHeight * 5,
          Q
        ), fe = window.getComputedStyle(p.value), ye = parseInt(fe.paddingTop, 10), Jt = parseInt(fe.paddingBottom, 10), Fe = $.top + $.height / 2 - ge, Et = V - Fe, ot = m.value.offsetHeight / 2, Zt = m.value.offsetTop + ot, Ct = N + z + Zt, Ma = Q - Ct;
        if (Ct <= Fe) {
          const Ke = m.value === B[B.length - 1];
          d.value.style.bottom = "0px";
          const Ae = f.value.clientHeight - p.value.offsetTop - p.value.offsetHeight, He = Math.max(
            Et,
            ot + // viewport might have padding bottom, include it to avoid a scrollable viewport
            (Ke ? Jt : 0) + Ae + U
          ), Ve = Ct + He;
          d.value.style.height = Ve + "px";
        } else {
          const Ke = m.value === B[0];
          d.value.style.top = "0px";
          const He = Math.max(
            Fe,
            N + p.value.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
            (Ke ? ye : 0) + ot
          ) + Ma;
          d.value.style.height = He + "px", p.value.scrollTop = Ct - Fe + p.value.offsetTop;
        }
        d.value.style.margin = `${ge}px 0`, d.value.style.minHeight = j + "px", d.value.style.maxHeight = V + "px", t("placed"), requestAnimationFrame(() => i.value = true);
      }
    }, C = ref("");
    return onMounted(() => {
      y(), f.value && (C.value = window.getComputedStyle(f.value).zIndex);
    }), provide(Ut, {
      contentWrapper: d,
      shouldExpandOnScrollRef: i,
      onScrollButtonChange: ($) => {
        $ && u.value === true && (y(), h2 == null || h2(), u.value = false);
      }
    }), ($, S) => (openBlock(), createElementBlock("div", {
      ref_key: "contentWrapperElement",
      ref: d,
      style: normalizeStyle({
        display: "flex",
        flexDirection: "column",
        position: "fixed",
        zIndex: C.value
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
      }, { ...$.$attrs, ...e }), {
        default: withCtx(() => [
          renderSlot($.$slots, "default")
        ]),
        _: 3
      }, 16, ["style"])
    ], 4));
  }
});
var Yl = defineComponent({
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
  setup(o) {
    const t = o;
    return (e, n) => (openBlock(), createBlock(unref(ht), mergeProps(t, { style: {
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
var Ul = defineComponent({
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
    const e = o, n = inject(Le);
    Gn(), $o(true);
    const { createCollection: a } = Se(), s = ref(), l = a(s), { search: i, handleTypeaheadSearch: u } = Oo(l), d = ref(), c = ref(), f = ref(), p = ref(false), m = ref(false), v = () => {
      c.value && s.value && uo([c.value, s.value]);
    };
    watch(p, () => {
      v();
    });
    const { onOpenChange: h2, triggerPointerDownPosRef: y } = n;
    watchEffect(($) => {
      if (!s.value)
        return;
      let S = { x: 0, y: 0 };
      const A = (B) => {
        var V, I;
        S = {
          x: Math.abs(
            Math.round(B.pageX) - (((V = y.value) == null ? void 0 : V.x) ?? 0)
          ),
          y: Math.abs(
            Math.round(B.pageY) - (((I = y.value) == null ? void 0 : I.y) ?? 0)
          )
        };
      }, x = (B) => {
        var V;
        S.x <= 10 && S.y <= 10 ? B.preventDefault() : (V = s.value) != null && V.contains(B.target) || h2(false), document.removeEventListener("pointermove", A), y.value = null;
      };
      y.value !== null && (document.addEventListener("pointermove", A), document.addEventListener("pointerup", x, {
        capture: true,
        once: true
      })), $(() => {
        document.removeEventListener("pointermove", A), document.removeEventListener("pointerup", x, {
          capture: true
        });
      });
    });
    const C = ($) => {
      const S = $.ctrlKey || $.altKey || $.metaKey;
      if ($.key === "Tab" && $.preventDefault(), !S && $.key.length === 1 && u($.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes($.key)) {
        let A = l.value;
        if (["ArrowUp", "End"].includes($.key) && (A = A.slice().reverse()), ["ArrowUp", "ArrowDown"].includes($.key)) {
          const x = $.target, B = A.indexOf(x);
          A = A.slice(B + 1);
        }
        setTimeout(() => uo(A)), $.preventDefault();
      }
    }, O = computed(() => e.position === "popper" ? e : {});
    return provide(Be, {
      content: s,
      viewport: d,
      onViewportChange: ($) => {
        d.value = $;
      },
      itemRefCallback: ($, S, A) => {
        var V, I;
        const x = !m.value && !A;
        (((V = n == null ? void 0 : n.modelValue) == null ? void 0 : V.value) !== void 0 && ((I = n == null ? void 0 : n.modelValue) == null ? void 0 : I.value) === S || x) && (c.value = $, x && (m.value = true));
      },
      selectedItem: c,
      selectedItemText: f,
      onItemLeave: () => {
        var $;
        ($ = s.value) == null || $.focus();
      },
      itemTextRefCallback: ($, S, A) => {
        var V, I;
        const x = !m.value && !A;
        (((V = n == null ? void 0 : n.modelValue) == null ? void 0 : V.value) !== void 0 && ((I = n == null ? void 0 : n.modelValue) == null ? void 0 : I.value) === S || x) && (f.value = $);
      },
      focusSelectedItem: v,
      position: e.position,
      isPositioned: p,
      searchRef: i
    }), ($, S) => (openBlock(), createBlock(unref(Ao), {
      asChild: "",
      onMountAutoFocus: S[6] || (S[6] = withModifiers(() => {
      }, ["prevent"])),
      onUnmountAutoFocus: S[7] || (S[7] = (A) => {
        var x, B;
        t("closeAutoFocus", A), !A.defaultPrevented && ((B = (x = unref(n)) == null ? void 0 : x.triggerElement.value) == null || B.focus({ preventScroll: true }), A.preventDefault());
      })
    }, {
      default: withCtx(() => [
        createVNode(unref(Nt), {
          asChild: "",
          disableOutsidePointerEvents: "",
          onFocusOutside: S[2] || (S[2] = withModifiers(() => {
          }, ["prevent"])),
          onDismiss: S[3] || (S[3] = (A) => {
            var x;
            return (x = unref(n)) == null ? void 0 : x.onOpenChange(false);
          }),
          onEscapeKeyDown: S[4] || (S[4] = (A) => t("escapeKeyDown", A)),
          onPointerDownOutside: S[5] || (S[5] = (A) => t("pointerDownOutside", A))
        }, {
          default: withCtx(() => {
            var A, x, B;
            return [
              (openBlock(), createBlock(resolveDynamicComponent(
                $.position === "popper" ? Yl : zl
              ), mergeProps({
                ref: (V) => {
                  s.value = unref(se)(V);
                }
              }, { ...$.$attrs, ...O.value }, {
                role: "listbox",
                id: (A = unref(n)) == null ? void 0 : A.contentId,
                "data-state": (x = unref(n)) != null && x.open.value ? "open" : "closed",
                dir: (B = unref(n)) == null ? void 0 : B.dir.value,
                onContextmenu: S[0] || (S[0] = withModifiers(() => {
                }, ["prevent"])),
                onPlaced: S[1] || (S[1] = (V) => p.value = true),
                onKeydown: C,
                style: {
                  // flex layout so we can place the scroll buttons properly
                  display: "flex",
                  flexDirection: "column",
                  // reset the outline by default as the content MAY get focused
                  outline: "none"
                }
              }), {
                default: withCtx(() => [
                  renderSlot($.$slots, "default")
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
var Ji = defineComponent({
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
    const e = o, n = inject(Le), a = ee(t);
    return (s, l) => (openBlock(), createBlock(unref(ue), {
      present: unref(n).open.value
    }, {
      default: withCtx(() => [
        createVNode(Ul, normalizeProps(guardReactiveProps({ ...e, ...unref(a) })), {
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
var Zi = defineComponent({
  __name: "SelectArrow",
  props: {
    width: {},
    height: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o, e = inject(Le), n = inject(Be);
    return (a, s) => {
      var l, i;
      return (l = unref(e)) != null && l.open.value && ((i = unref(n)) == null ? void 0 : i.position) === "popper" ? (openBlock(), createBlock(unref(yt), normalizeProps(mergeProps({ key: 0 }, t)), {
        default: withCtx(() => [
          renderSlot(a.$slots, "default")
        ]),
        _: 3
      }, 16)) : createCommentVNode("", true);
    };
  }
});
var Qi = defineComponent({
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
var sn = Symbol();
var ji = defineComponent({
  __name: "SelectItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o, { disabled: e } = toRefs(t), n = inject(Le), a = inject(Be), { primitiveElement: s, currentElement: l } = F(), i = computed(() => {
      var h2;
      return ((h2 = n == null ? void 0 : n.modelValue) == null ? void 0 : h2.value) === t.value;
    }), u = ref(false), d = ref(t.textValue ?? ""), c = oe(), f = async (h2) => {
      await nextTick(), !(h2 != null && h2.defaultPrevented) && (e.value || (n.onValueChange(t.value), n.onOpenChange(false)));
    }, p = async (h2) => {
      var y;
      await nextTick(), !h2.defaultPrevented && (e.value ? (y = a.onItemLeave) == null || y.call(a) : h2.currentTarget.focus({ preventScroll: true }));
    }, m = async (h2) => {
      var y;
      await nextTick(), !h2.defaultPrevented && h2.currentTarget === document.activeElement && ((y = a.onItemLeave) == null || y.call(a));
    }, v = async (h2) => {
      var C;
      await nextTick(), !(h2.defaultPrevented || ((C = a.searchRef) == null ? void 0 : C.value) !== "" && h2.key === " ") && (Wl.includes(h2.key) && f(), h2.key === " " && h2.preventDefault());
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
    }), provide(sn, {
      value: t.value,
      disabled: e,
      textId: c,
      isSelected: i,
      onItemTextChange: (h2) => {
        d.value = ((d.value || (h2 == null ? void 0 : h2.textContent)) ?? "").trim();
      }
    }), (h2, y) => (openBlock(), createBlock(unref(M), {
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
      onFocus: y[0] || (y[0] = (C) => u.value = true),
      onBlur: y[1] || (y[1] = (C) => u.value = false),
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
var eu = defineComponent({
  __name: "SelectItemIndicator",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(o) {
    const t = o, e = inject(sn);
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
var Oa = Symbol();
var tu = defineComponent({
  __name: "SelectGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o, e = oe();
    return provide(Oa, {
      id: e
    }), (n, a) => (openBlock(), createBlock(unref(M), mergeProps({ role: "group" }, t, { "aria-labelledby": unref(e) }), {
      default: withCtx(() => [
        renderSlot(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-labelledby"]));
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
    const t = o, e = inject(Oa, {
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
var nu = defineComponent({
  inheritAttrs: false,
  __name: "SelectItemText",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(o) {
    const t = o, e = inject(Be), n = inject(Ca), a = inject(sn), { primitiveElement: s, currentElement: l } = F(), i = computed(() => {
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
var Pa = defineComponent({
  __name: "SelectScrollButtonImpl",
  emits: ["auto-scroll"],
  setup(o, { emit: t }) {
    const { injectCollection: e } = Se(), n = e(), a = inject(Be), s = ref(null), l = () => {
      s.value !== null && (window.clearInterval(s.value), s.value = null);
    };
    watchEffect(() => {
      const d = n.value.find(
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
var au = defineComponent({
  __name: "SelectScrollUpButton",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = inject(Be), e = t.position === "item-aligned" ? inject(Ut) : void 0, { primitiveElement: n, currentElement: a } = F(), s = ref(false);
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
    }), (l, i) => s.value ? (openBlock(), createBlock(Pa, {
      key: 0,
      ref_key: "primitiveElement",
      ref: n,
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
var su = defineComponent({
  __name: "SelectScrollDownButton",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = inject(Be), e = t.position === "item-aligned" ? inject(Ut) : void 0, { primitiveElement: n, currentElement: a } = F(), s = ref(false);
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
    }), (l, i) => s.value ? (openBlock(), createBlock(Pa, {
      key: 0,
      ref_key: "primitiveElement",
      ref: n,
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
var lu = defineComponent({
  __name: "SelectValue",
  props: {
    placeholder: { default: "" },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(o) {
    const { primitiveElement: t, currentElement: e } = F(), n = inject(Le);
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
        var l, i;
        return [
          unref($a)((i = (l = unref(n)) == null ? void 0 : l.modelValue) == null ? void 0 : i.value) ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
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
var _t = Symbol();
var ru = defineComponent({
  __name: "MenubarRoot",
  props: {
    modelValue: {},
    defaultValue: {},
    dir: { default: "ltr" },
    loop: { type: Boolean, default: false }
  },
  emits: ["update:modelValue"],
  setup(o, { emit: t }) {
    const e = o, { primitiveElement: n, currentElement: a } = F(), { createCollection: s } = Se("menubar");
    s(a);
    const l = X(e, "modelValue", t, {
      passive: true,
      defaultValue: e.defaultValue ?? ""
    }), i = ref(null), { dir: u, loop: d } = toRefs(e);
    return provide(_t, {
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
      ref: n
    }, {
      default: withCtx(() => [
        renderSlot(c.$slots, "default")
      ]),
      _: 3
    }, 512));
  }
});
var Gt = Symbol();
var iu = defineComponent({
  __name: "MenubarMenu",
  props: {
    value: {}
  },
  setup(o) {
    const e = o.value ?? oe(), n = inject(_t), a = ref(), s = ref(false), l = computed(() => (n == null ? void 0 : n.modelValue.value) === e);
    return watch(l, () => {
      l.value || (s.value = false);
    }), provide(Gt, {
      value: e,
      triggerElement: a,
      triggerId: e,
      contentId: oe(),
      wasKeyboardTriggerOpenRef: s
    }), (i, u) => {
      var d;
      return openBlock(), createBlock(unref(Vo), {
        open: l.value,
        modal: false,
        dir: (d = unref(n)) == null ? void 0 : d.dir.value,
        "onUpdate:open": u[0] || (u[0] = (c) => {
          var f;
          c || (f = unref(n)) == null || f.onMenuClose();
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
var uu = defineComponent({
  __name: "MenubarTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(o) {
    const t = inject(_t), e = inject(Gt), { primitiveElement: n, currentElement: a } = F(), { injectCollection: s } = Se("menubar"), l = s(), i = ref(false), u = computed(() => (t == null ? void 0 : t.modelValue.value) === (e == null ? void 0 : e.value));
    onMounted(() => {
      e.triggerElement = a;
    });
    const d = (c) => {
      var m;
      const f = document.activeElement, p = (m = l.value) == null ? void 0 : m[0].parentElement;
      !f || !p || pe(c, f, p, {
        loop: t == null ? void 0 : t.loop.value,
        dir: t == null ? void 0 : t.dir.value,
        itemsArray: l.value,
        focus: true
      });
    };
    return (c, f) => (openBlock(), createBlock(unref(Wt), { asChild: "" }, {
      default: withCtx(() => {
        var p, m, v;
        return [
          createVNode(unref(M), {
            ref_key: "primitiveElement",
            ref: n,
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
              var y;
              !!unref(t).modelValue.value && !u.value && (unref(t).onMenuOpen(unref(e).value), (y = unref(a)) == null || y.focus());
            }),
            onKeydown: [
              f[2] || (f[2] = withKeys((h2) => {
                var y, C;
                c.disabled || (["Enter", " "].includes(h2.key) && ((y = unref(t)) == null || y.onMenuToggle(unref(e).value)), h2.key === "ArrowDown" && ((C = unref(t)) == null || C.onMenuOpen(unref(e).value)), ["Enter", " ", "ArrowDown"].includes(h2.key) && (unref(e).wasKeyboardTriggerOpenRef.value = true, h2.preventDefault()));
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
var du = defineComponent({
  __name: "MenubarPortal",
  props: {
    to: {},
    disabled: { type: Boolean }
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
var cu = defineComponent({
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
    ...Re,
    align: "start"
  }),
  setup(o) {
    const t = o, e = inject(_t), n = inject(Gt), { injectCollection: a } = Se("menubar"), s = a(), l = ref(false), i = (u) => {
      const c = u.target.hasAttribute(
        "data-radix-menubar-subtrigger"
      ), p = ((e == null ? void 0 : e.dir.value) === "rtl" ? "ArrowRight" : "ArrowLeft") === u.key;
      if (!p && c)
        return;
      let v = s.value.map((C) => C.dataset.value);
      p && v.reverse();
      const h2 = v.indexOf(n == null ? void 0 : n.value);
      v = e != null && e.loop.value ? Po(v, h2 + 1) : v.slice(h2 + 1);
      const [y] = v;
      y && (e == null || e.onMenuOpen(y));
    };
    return (u, d) => {
      var c, f;
      return openBlock(), createBlock(unref(Go), mergeProps({
        id: (c = unref(n)) == null ? void 0 : c.contentId,
        "aria-labelledby": (f = unref(n)) == null ? void 0 : f.triggerId,
        "data-radix-menubar-content": ""
      }, t, {
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
var pu = defineComponent({
  __name: "MenubarArrow",
  props: {
    width: { default: 10 },
    height: { default: 5 },
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o;
    return (e, n) => (openBlock(), createBlock(unref(Ho), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var fu = defineComponent({
  __name: "MenubarItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(o, { emit: t }) {
    const e = o, n = ee(t);
    return (a, s) => (openBlock(), createBlock(unref(gt), normalizeProps(guardReactiveProps({ ...e, ...unref(n) })), {
      default: withCtx(() => [
        renderSlot(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var mu = defineComponent({
  __name: "MenubarGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o;
    return (e, n) => (openBlock(), createBlock(unref(Yt), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var vu = defineComponent({
  __name: "MenubarSeparator",
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
    const e = o, n = ee(t);
    return (a, s) => (openBlock(), createBlock(unref(Uo), normalizeProps(guardReactiveProps({ ...e, ...unref(n) })), {
      default: withCtx(() => [
        renderSlot(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var yu = defineComponent({
  __name: "MenubarItemIndicator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o;
    return (e, n) => (openBlock(), createBlock(unref(Yo), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var gu = defineComponent({
  __name: "MenubarLabel",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o;
    return (e, n) => (openBlock(), createBlock(unref(Xo), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var _u = defineComponent({
  __name: "MenubarRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(o, { emit: t }) {
    const e = o, n = ee(t);
    return (a, s) => (openBlock(), createBlock(unref(Jo), normalizeProps(guardReactiveProps({ ...e, ...unref(n) })), {
      default: withCtx(() => [
        renderSlot(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var bu = defineComponent({
  __name: "MenubarRadioItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(o, { emit: t }) {
    const e = o;
    return (n, a) => (openBlock(), createBlock(unref(Zo), normalizeProps(guardReactiveProps({ ...e, ...t })), {
      default: withCtx(() => [
        renderSlot(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var wu = defineComponent({
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
    return (a, s) => (openBlock(), createBlock(unref(en), {
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
var Eu = defineComponent({
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
    ...Re
  }),
  setup(o, { emit: t }) {
    const e = o, { injectCollection: n } = Se("menubar"), a = inject(_t), s = inject(Gt), l = n(), i = (u) => {
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
    return (u, d) => (openBlock(), createBlock(unref(tn), mergeProps({ ...e, ...t }, {
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
var Cu = defineComponent({
  __name: "MenubarSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o;
    return (e, n) => (openBlock(), createBlock(unref(on), mergeProps({ "data-radix-menubar-subtrigger": "" }, t), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var Ne = Symbol();
var $u = defineComponent({
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
    }), a = ref(""), { primitiveElement: s, currentElement: l } = F(), { createCollection: i } = ft();
    i();
    const u = ref(), d = ref(), c = ref(/* @__PURE__ */ new Map()), { delayDuration: f, skipDelayDuration: p } = toRefs(e), m = Hn(false, p), v = computed(() => n.value !== "" || m.value ? 150 : f.value), h2 = Eo((y) => {
      a.value = n.value, n.value = y;
    }, v);
    return provide(Ne, {
      isRootMenu: true,
      modelValue: n,
      previousValue: a,
      baseId: oe(),
      dir: e.dir,
      orientation: e.orientation,
      rootNavigationMenu: l,
      indicatorTrack: u,
      onIndicatorTrackChange: (y) => {
        u.value = y;
      },
      viewport: d,
      onViewportChange: (y) => {
        d.value = y;
      },
      viewportContent: c,
      onViewportContentChange: (y, C) => {
        const O = c.value;
        c.value = new Map(O.set(y, C));
      },
      onViewportContentRemove: (y) => {
        const C = c.value;
        if (!C.has(y))
          return C;
        C.delete(y), c.value = new Map(C);
      },
      onTriggerEnter: (y) => {
        h2(y);
      },
      onTriggerLeave: () => {
        m.value = true, h2("");
      },
      onContentEnter: (y) => {
        h2(y);
      },
      onContentLeave: () => {
        h2("");
      },
      onItemSelect: (y) => {
        a.value = n.value, n.value = y;
      },
      onItemDismiss: () => {
        a.value = n.value, n.value = "";
      }
    }), (y, C) => (openBlock(), createBlock(unref(M), {
      ref_key: "primitiveElement",
      ref: s,
      "aria-label": "Main",
      as: y.as,
      "as-child": y.asChild,
      "data-orientation": y.orientation,
      dir: y.dir
    }, {
      default: withCtx(() => [
        renderSlot(y.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-orientation", "dir"]));
  }
});
function Xt(o) {
  return o ? "open" : "closed";
}
function Ta(o, t) {
  return `${o}-trigger-${t}`;
}
function ln(o, t) {
  return `${o}-content-${t}`;
}
var Tt = "navigationMenu.rootContentDismiss";
function ho(o) {
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
function Sa(o) {
  const t = document.activeElement;
  return o.some((e) => e === t ? true : (e.focus(), document.activeElement !== t));
}
function Gl(o) {
  return o.forEach((t) => {
    t.dataset.tabindex = t.getAttribute("tabindex") || "", t.setAttribute("tabindex", "-1");
  }), () => {
    o.forEach((t) => {
      const e = t.dataset.tabindex;
      t.setAttribute("tabindex", e);
    });
  };
}
var rn = Symbol();
var Ou = defineComponent({
  __name: "NavigationMenuItem",
  props: {
    value: {},
    asChild: { type: Boolean },
    as: { default: "li" }
  },
  setup(o) {
    const t = o, { getItems: e } = ft(), n = inject(Ne), a = t.value || oe(), s = ref(), l = ref(), i = ln(n.baseId, a);
    let u = () => ({});
    const d = ref(false), c = async (v = "start") => {
      const h2 = document.getElementById(i);
      if (h2) {
        u();
        const y = ho(h2);
        y.length && Sa(v === "start" ? y : y.reverse());
      }
    }, f = () => {
      const v = document.getElementById(i);
      if (v) {
        const h2 = ho(v);
        h2.length && (u = Gl(h2));
      }
    };
    provide(rn, {
      value: a,
      contentId: i,
      triggerRef: s,
      focusProxyRef: l,
      wasEscapeCloseRef: d,
      onEntryKeyDown: c,
      onFocusProxyEnter: c,
      onContentFocusOutside: f,
      onRootContentClose: f
    });
    const p = () => {
      var v;
      n == null || n.onItemDismiss(), (v = s.value) == null || v.focus();
    }, m = (v) => {
      const h2 = document.activeElement;
      if (v.keyCode === 32 || v.key === "Enter")
        if ((n == null ? void 0 : n.modelValue.value) === a) {
          p(), v.preventDefault();
          return;
        } else {
          v.target.click(), v.preventDefault();
          return;
        }
      const y = e().filter(
        (O) => {
          var $;
          return ($ = O.parentElement) == null ? void 0 : $.hasAttribute("aria-menu-item");
        }
      ), C = pe(v, h2, void 0, {
        itemsArray: y,
        loop: false
      });
      C && (C == null || C.focus()), v.preventDefault(), v.stopPropagation();
    };
    return (v, h2) => (openBlock(), createBlock(unref(M), {
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
  setup(o, { expose: t, emit: e }) {
    const n = o, { getItems: a } = ft(), { primitiveElement: s, currentElement: l } = F(), i = inject(Ne), u = Ta(i.baseId, n.value), d = ln(i.baseId, n.value), c = ref(null), f = computed(() => {
      const O = a().map((V) => V.id.split("trigger-")[1]);
      (i == null ? void 0 : i.dir) === "rtl" && O.reverse();
      const $ = O.indexOf(i.modelValue.value), S = O.indexOf(i.previousValue.value), A = n.value === (i == null ? void 0 : i.modelValue.value), x = S === O.indexOf(n.value);
      if (!A && !x)
        return c.value;
      const B = (() => {
        if ($ !== S) {
          if (A && S !== -1)
            return $ > S ? "from-end" : "from-start";
          if (x && $ !== -1)
            return $ > S ? "to-start" : "to-end";
        }
        return null;
      })();
      return c.value = B, B;
    }), p = (C) => {
      var O, $;
      if (e("focusOutside", C), e("interactOutside", C), !C.defaultPrevented) {
        n.onContentFocusOutside();
        const S = C.target;
        ($ = (O = i.rootNavigationMenu) == null ? void 0 : O.value) != null && $.contains(S) && C.preventDefault();
      }
    }, m = (C) => {
      var O;
      if (e("pointerDownOutside", C), !C.defaultPrevented) {
        const $ = C.target, S = a().some((x) => x.contains($)), A = (i == null ? void 0 : i.isRootMenu) && ((O = i.viewport.value) == null ? void 0 : O.contains($));
        (S || A || !(i != null && i.isRootMenu)) && C.preventDefault();
      }
    };
    watchEffect((C) => {
      const O = l.value;
      if (i != null && i.isRootMenu && O) {
        const $ = () => {
          var S;
          i.onItemDismiss(), n.onRootContentClose(), O.contains(document.activeElement) && ((S = n.triggerRef.value) == null || S.focus());
        };
        O.addEventListener(Tt, $), C(
          () => O.removeEventListener(Tt, $)
        );
      }
    });
    const v = (C) => {
      var O, $;
      e("escapeKeyDown", C), C.defaultPrevented || (i.onItemDismiss(), ($ = (O = n == null ? void 0 : n.triggerRef) == null ? void 0 : O.value) == null || $.focus(), n.wasEscapeCloseRef.value = true);
    }, h2 = (C) => {
      var x;
      const O = C.altKey || C.ctrlKey || C.metaKey, $ = C.key === "Tab" && !O, S = ho(C.currentTarget);
      if ($) {
        const B = document.activeElement, V = S.findIndex(
          (N) => N === B
        ), R = C.shiftKey ? S.slice(0, V).reverse() : S.slice(V + 1, S.length);
        if (Sa(R))
          C.preventDefault();
        else {
          (x = n.focusProxyRef.value) == null || x.focus();
          return;
        }
      }
      const A = pe(
        C,
        document.activeElement,
        void 0,
        { itemsArray: S, loop: false }
      );
      A == null || A.focus(), !(C.key === "Enter" || C.key === "Escape") && (C.preventDefault(), C.stopPropagation());
    }, y = () => {
      var O;
      const C = new Event(Tt, {
        bubbles: true,
        cancelable: true
      });
      (O = l.value) == null || O.dispatchEvent(C);
    };
    return t({
      ...n
    }), (C, O) => {
      var $, S;
      return openBlock(), createBlock(unref(Nt), {
        ref_key: "primitiveElement",
        ref: s,
        id: unref(d),
        "aria-labelledby": unref(u),
        "data-motion": f.value,
        "data-state": unref(Xt)((($ = unref(i)) == null ? void 0 : $.modelValue.value) === n.value),
        "data-orientation": (S = unref(i)) == null ? void 0 : S.orientation,
        "disable-outside-pointer-events": C.disableOutsidePointerEvents,
        onKeydown: h2,
        onEscapeKeyDown: v,
        onPointerDownOutside: m,
        onFocusOutside: p,
        onDismiss: y
      }, {
        default: withCtx(() => [
          renderSlot(C.$slots, "default")
        ]),
        _: 3
      }, 8, ["id", "aria-labelledby", "data-motion", "data-state", "data-orientation", "disable-outside-pointer-events"]);
    };
  }
});
var Pu = defineComponent({
  inheritAttrs: false,
  __name: "NavigationMenuContent",
  props: {
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss"],
  setup(o, { emit: t }) {
    const e = o, n = inject(Ne), a = inject(rn), s = computed(() => (a == null ? void 0 : a.value) === (n == null ? void 0 : n.modelValue.value)), l = Fn(
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
        n != null && n.isRootMenu || await nextTick();
        const d = (f = (c = i == null ? void 0 : i.vnode.children) == null ? void 0 : c.default()) == null ? void 0 : f[0];
        n != null && n.viewport && d && (a != null && a.triggerRef.value) && (d.props = {
          ...d.props,
          ...l.value,
          triggerRef: a.triggerRef,
          focusProxyRef: a.focusProxyRef,
          wasEscapeCloseRef: a.wasEscapeCloseRef
        }, d.parentProps = i.vnode.props, n.onViewportContentChange(a.value, d), l.trigger());
      },
      { immediate: true, deep: true }
    );
    const u = (d) => {
      t("pointerDownOutside", d), d.preventDefault || n == null || n.onContentLeave();
    };
    return (d, c) => {
      var f;
      return (f = unref(n)) != null && f.viewport.value ? createCommentVNode("", true) : (openBlock(), createBlock(unref(ue), {
        key: 0,
        present: s.value
      }, {
        default: withCtx(() => {
          var p;
          return [
            createVNode(Ba, mergeProps({
              "data-state": unref(Xt)(s.value),
              style: {
                pointerEvents: !s.value && ((p = unref(n)) != null && p.isRootMenu) ? "none" : void 0
              }
            }, { ...d.$attrs, ...unref(l) }, {
              onPointerenter: c[0] || (c[0] = (m) => {
                var v;
                return (v = unref(n)) == null ? void 0 : v.onContentEnter(unref(a).value);
              }),
              onPointerleave: c[1] || (c[1] = (m) => {
                var v;
                return (v = unref(n)) == null ? void 0 : v.onContentLeave();
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
var Tu = defineComponent({
  inheritAttrs: false,
  __name: "NavigationMenuIndicator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o, { getItems: e } = ft(), n = inject(Ne), a = ref(), s = computed(() => (n == null ? void 0 : n.orientation) === "horizontal"), l = computed(() => !!(n != null && n.modelValue.value)), i = ref(), u = () => {
      i.value && (a.value = {
        size: s.value ? i.value.offsetWidth : i.value.offsetHeight,
        offset: s.value ? i.value.offsetLeft : i.value.offsetTop
      });
    };
    return watchEffect(() => {
      if (!(n != null && n.modelValue.value)) {
        a.value = void 0;
        return;
      }
      const d = e();
      i.value = d.find(
        (c) => c.id.includes(n == null ? void 0 : n.modelValue.value)
      ), u();
    }), $e(i, u), $e(n.indicatorTrack, u), (d, c) => {
      var f, p;
      return (f = unref(n)) != null && f.indicatorTrack.value ? (openBlock(), createBlock(Teleport, {
        key: 0,
        to: (p = unref(n)) == null ? void 0 : p.indicatorTrack.value
      }, [
        createVNode(unref(ue), { present: l.value }, {
          default: withCtx(() => {
            var m, v, h2, y;
            return [
              createVNode(unref(M), mergeProps({
                "aria-hidden": "",
                "data-state": l.value ? "visible" : "hidden",
                "data-orientation": unref(n).orientation,
                "as-child": t.asChild,
                as: d.as,
                style: {
                  position: "absolute",
                  ...s.value ? {
                    left: 0,
                    width: ((m = a.value) == null ? void 0 : m.size) + "px",
                    transform: `translateX(${(v = a.value) == null ? void 0 : v.offset}px)`
                  } : {
                    top: 0,
                    height: ((h2 = a.value) == null ? void 0 : h2.size) + "px",
                    transform: `translateY(${(y = a.value) == null ? void 0 : y.offset}px)`
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
var Su = defineComponent({
  __name: "NavigationMenuLink",
  props: {
    active: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "a" }
  },
  emits: ["select"],
  setup(o, { emit: t }) {
    const e = o, n = async (a) => {
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
      onClick: n,
      "data-radix-vue-collection-item": ""
    }, {
      default: withCtx(() => [
        renderSlot(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "data-active", "aria-current", "as-child"]));
  }
});
var Bu = defineComponent({
  inheritAttrs: false,
  __name: "NavigationMenuList",
  props: {
    asChild: { type: Boolean },
    as: { default: "ul" }
  },
  setup(o) {
    const t = o, e = inject(Ne), { primitiveElement: n, currentElement: a } = F(), { setCollection: s } = ft();
    return s(a), onMounted(() => {
      e == null || e.onIndicatorTrackChange(a.value);
    }), (l, i) => (openBlock(), createBlock(unref(M), {
      ref_key: "primitiveElement",
      ref: n,
      style: { position: "relative" }
    }, {
      default: withCtx(() => {
        var u;
        return [
          createVNode(unref(M), mergeProps(l.$attrs, {
            "as-child": t.asChild,
            as: l.as,
            "data-orientation": (u = unref(e)) == null ? void 0 : u.orientation
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
var Xl = ["aria-owns"];
var Au = defineComponent({
  inheritAttrs: false,
  __name: "NavigationMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(o) {
    const t = o, e = inject(Ne), n = inject(rn), { primitiveElement: a, currentElement: s } = F(), l = ref(""), i = ref(""), u = ref(false), d = ref(false), c = computed(() => (n == null ? void 0 : n.value) === (e == null ? void 0 : e.modelValue.value));
    onMounted(() => {
      n.triggerRef = s, l.value = Ta(e.baseId, n.value), i.value = ln(e.baseId, n.value);
    });
    const f = () => {
      d.value = false, n.wasEscapeCloseRef.value = false;
    }, p = (O) => {
      if (O.pointerType === "mouse") {
        if (t.disabled || d.value || n.wasEscapeCloseRef.value || u.value)
          return;
        e.onTriggerEnter(n.value), u.value = true;
      }
    }, m = (O) => {
      if (O.pointerType === "mouse") {
        if (t.disabled)
          return;
        e.onTriggerLeave(), u.value = false;
      }
    }, v = () => {
      c.value ? e == null || e.onItemSelect("") : e == null || e.onItemSelect(n.value), d.value = c.value;
    }, h2 = (O) => {
      const S = { horizontal: "ArrowDown", vertical: e.dir === "rtl" ? "ArrowLeft" : "ArrowRight" }[e.orientation];
      c.value && O.key === S && (n.onEntryKeyDown(), O.preventDefault(), O.stopPropagation());
    }, y = (O) => {
      n.focusProxyRef.value = se(O);
    }, C = (O) => {
      const $ = document.getElementById(n.contentId), S = O.relatedTarget, A = S === s.value, x = $ == null ? void 0 : $.contains(S);
      (A || !x) && n.onFocusProxyEnter(A ? "start" : "end");
    };
    return (O, $) => {
      var S;
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(unref(M), mergeProps({
          ref_key: "primitiveElement",
          ref: a,
          id: l.value,
          disabled: O.disabled,
          "data-disabled": O.disabled ? "" : void 0,
          "data-state": unref(Xt)(c.value),
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
          createVNode(unref(Fo), {
            "aria-hidden": "",
            tabIndex: 0,
            ref: y,
            onFocus: C
          }),
          (S = unref(e)) != null && S.viewport ? (openBlock(), createElementBlock("span", {
            key: 0,
            "aria-owns": i.value
          }, null, 8, Xl)) : createCommentVNode("", true)
        ], 64)) : createCommentVNode("", true)
      ], 64);
    };
  }
});
var Iu = defineComponent({
  inheritAttrs: false,
  __name: "NavigationMenuViewport",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const { primitiveElement: t, currentElement: e } = F(), n = inject(Ne), a = ref(), s = computed(() => !!(n != null && n.modelValue.value)), l = computed(
      () => s.value ? n.modelValue.value : n.previousValue.value
    );
    watch(e, () => {
      n.onViewportChange(e.value);
    });
    const i = computed(
      () => (
        // @ts-ignore
        Array.from(n == null ? void 0 : n.viewportContent.value.values())
      )
    ), u = ref();
    return $e(u, () => {
      u.value && (a.value = {
        width: u.value.offsetWidth,
        height: u.value.offsetHeight
      });
    }), (d, c) => (openBlock(), createBlock(unref(ue), { present: s.value }, {
      default: withCtx(() => {
        var f, p, m, v;
        return [
          createVNode(unref(M), mergeProps(d.$attrs, {
            as: d.as,
            "as-child": d.asChild,
            ref_key: "primitiveElement",
            ref: t,
            "data-state": unref(Xt)(s.value),
            "data-orientation": (f = unref(n)) == null ? void 0 : f.orientation,
            style: {
              // Prevent interaction when animating out
              pointerEvents: !s.value && ((p = unref(n)) != null && p.isRootMenu) ? "none" : void 0,
              ["--radix-navigation-menu-viewport-width"]: a.value ? ((m = a.value) == null ? void 0 : m.width) + "px" : void 0,
              ["--radix-navigation-menu-viewport-height"]: a.value ? ((v = a.value) == null ? void 0 : v.height) + "px" : void 0
            },
            onPointerenter: c[0] || (c[0] = (h2) => {
              var y;
              return (y = unref(n)) == null ? void 0 : y.onContentEnter(l.value);
            }),
            onPointerleave: c[1] || (c[1] = (h2) => {
              var y;
              return (y = unref(n)) == null ? void 0 : y.onContentLeave();
            })
          }), {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList(i.value, (h2) => {
                var y, C;
                return openBlock(), createBlock(unref(ue), {
                  key: (y = h2.props) == null ? void 0 : y.value,
                  present: l.value === ((C = h2.props) == null ? void 0 : C.value)
                }, {
                  default: withCtx(() => [
                    createVNode(Ba, mergeProps({
                      ref_for: true,
                      ref: (O) => {
                        var $;
                        l.value === (($ = h2.props) == null ? void 0 : $.value) && O && (u.value = unref(se)(O.$el));
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
var re = Symbol();
var Du = defineComponent({
  __name: "ScrollAreaRoot",
  props: {
    type: { default: "hover" },
    dir: { default: "ltr" },
    scrollHideDelay: { default: 600 },
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o, { primitiveElement: e, currentElement: n } = F(), a = ref(0), s = ref(0), l = ref(), i = ref(), u = ref(), d = ref(), c = ref(false), f = ref(false), p = (B) => {
      l.value = B;
    }, m = (B) => {
      i.value = B;
    }, v = (B) => {
      u.value = B;
    }, h2 = (B) => {
      d.value = B;
    }, y = (B) => {
      c.value = B;
    }, C = (B) => {
      f.value = B;
    }, O = (B) => {
      a.value = B;
    }, $ = (B) => {
      s.value = B;
    }, { type: S, dir: A, scrollHideDelay: x } = toRefs(t);
    return provide(re, {
      type: S,
      dir: A,
      scrollHideDelay: x,
      scrollArea: n,
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
      onScrollbarXEnabledChange: y,
      onScrollbarYEnabledChange: C,
      onCornerWidthChange: O,
      onCornerHeightChange: $
    }), (B, V) => (openBlock(), createBlock(unref(M), {
      ref_key: "primitiveElement",
      ref: e,
      "as-child": t.asChild,
      as: B.as,
      dir: t.dir,
      style: normalizeStyle({
        position: "relative",
        // Pass corner sizes as CSS vars to reduce re-renders of context consumers
        ["--radix-scroll-area-corner-width"]: a.value + "px",
        ["--radix-scroll-area-corner-height"]: s.value + "px"
      })
    }, {
      default: withCtx(() => [
        renderSlot(B.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "dir", "style"]));
  }
});
var xu = defineComponent({
  inheritAttrs: false,
  __name: "ScrollAreaViewport",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o, e = inject(re), { primitiveElement: n, currentElement: a } = F(), s = ref();
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
function ql(o, [t, e]) {
  return Math.min(e, Math.max(t, o));
}
function Aa(o, t) {
  return (e) => {
    if (o[0] === o[1] || t[0] === t[1])
      return t[0];
    const n = (t[1] - t[0]) / (o[1] - o[0]);
    return t[0] + n * (e - o[0]);
  };
}
function qt(o) {
  const t = Ia(o.viewport, o.content), e = o.scrollbar.paddingStart + o.scrollbar.paddingEnd, n = (o.scrollbar.size - e) * t;
  return Math.max(n, 18);
}
function Ia(o, t) {
  const e = o / t;
  return isNaN(e) ? 0 : e;
}
var Jl = (o, t = () => {
}) => {
  let e = { left: o.scrollLeft, top: o.scrollTop }, n = 0;
  return function a() {
    const s = { left: o.scrollLeft, top: o.scrollTop }, l = e.left !== s.left, i = e.top !== s.top;
    (l || i) && t(), e = s, n = window.requestAnimationFrame(a);
  }(), () => window.cancelAnimationFrame(n);
};
function In(o, t, e = "ltr") {
  const n = qt(t), a = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, s = t.scrollbar.size - a, l = t.content - t.viewport, i = s - n, u = e === "ltr" ? [0, l] : [l * -1, 0], d = ql(
    o,
    u
  );
  return Aa([0, l], [0, i])(d);
}
function Pt(o) {
  return o ? parseInt(o, 10) : 0;
}
function Zl(o, t, e, n = "ltr") {
  const a = qt(e), s = a / 2, l = t || s, i = a - l, u = e.scrollbar.paddingStart + l, d = e.scrollbar.size - e.scrollbar.paddingEnd - i, c = e.content - e.viewport, f = n === "ltr" ? [0, c] : [c * -1, 0];
  return Aa(
    [u, d],
    f
  )(o);
}
function Dn(o, t) {
  return o > 0 && o < t;
}
var Da = defineComponent({
  __name: "ScrollAreaScrollbarImpl",
  props: {
    isHorizontal: { type: Boolean }
  },
  emits: ["onDragScroll", "onWheelScroll", "onThumbPointerDown"],
  setup(o, { emit: t }) {
    const e = o, n = inject(re), a = inject(
      bt
    ), s = inject(wt), { primitiveElement: l, currentElement: i } = F(), u = ref(""), d = ref();
    function c(y) {
      var C, O;
      if (d.value) {
        const $ = y.clientX - ((C = d.value) == null ? void 0 : C.left), S = y.clientY - ((O = d.value) == null ? void 0 : O.top);
        t("onDragScroll", { x: $, y: S });
      }
    }
    const f = (y) => {
      y.button === 0 && (y.target.setPointerCapture(y.pointerId), d.value = i.value.getBoundingClientRect(), u.value = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", n != null && n.viewport && (n.viewport.value.style.scrollBehavior = "auto"), c(y));
    }, p = (y) => {
      c(y);
    }, m = (y) => {
      const C = y.target;
      C.hasPointerCapture(y.pointerId) && C.releasePointerCapture(y.pointerId), document.body.style.webkitUserSelect = u.value, n != null && n.viewport && (n.viewport.value.style.scrollBehavior = ""), d.value = void 0;
    }, v = (y) => {
      var S;
      if (!a)
        return;
      const C = y.target, O = (S = i.value) == null ? void 0 : S.contains(C), $ = a.sizes.value.content - a.sizes.value.viewport;
      O && a.handleWheelScroll(y, $);
    };
    onMounted(() => {
      document.addEventListener("wheel", v, { passive: false });
    }), onUnmounted(() => {
      document.removeEventListener("wheel", v);
    });
    const h2 = () => {
      var y, C, O, $, S, A;
      i.value && (e.isHorizontal ? a == null || a.handleSizeChange({
        content: ((y = n == null ? void 0 : n.viewport.value) == null ? void 0 : y.scrollWidth) ?? 0,
        viewport: ((C = n == null ? void 0 : n.viewport.value) == null ? void 0 : C.offsetWidth) ?? 0,
        scrollbar: {
          size: ((O = i.value) == null ? void 0 : O.clientWidth) ?? 0,
          paddingStart: Pt(getComputedStyle(i.value).paddingLeft),
          paddingEnd: Pt(getComputedStyle(i.value).paddingRight)
        }
      }) : a == null || a.handleSizeChange({
        content: (($ = n == null ? void 0 : n.viewport.value) == null ? void 0 : $.scrollHeight) ?? 0,
        viewport: ((S = n == null ? void 0 : n.viewport.value) == null ? void 0 : S.offsetHeight) ?? 0,
        scrollbar: {
          size: ((A = i.value) == null ? void 0 : A.clientHeight) ?? 0,
          paddingStart: Pt(getComputedStyle(i.value).paddingLeft),
          paddingEnd: Pt(getComputedStyle(i.value).paddingRight)
        }
      }));
    };
    return $e(i, h2), $e(n == null ? void 0 : n.content, h2), (y, C) => {
      var O, $;
      return openBlock(), createBlock(unref(M), {
        ref_key: "primitiveElement",
        ref: l,
        style: { position: "absolute" },
        "data-scrollbarimpl": "",
        as: (O = unref(s)) == null ? void 0 : O.as.value,
        "as-child": ($ = unref(s)) == null ? void 0 : $.asChild.value,
        onPointerdown: f,
        onPointermove: p,
        onPointerup: m
      }, {
        default: withCtx(() => [
          renderSlot(y.$slots, "default")
        ]),
        _: 3
      }, 8, ["as", "as-child"]);
    };
  }
});
var Ql = defineComponent({
  __name: "ScrollAreaScrollbarX",
  setup(o) {
    const t = inject(re), e = inject(
      bt
    ), { primitiveElement: n, currentElement: a } = F();
    onMounted(() => {
      a.value && (t == null || t.onScrollbarXChange(a.value));
    });
    const s = computed(() => e == null ? void 0 : e.sizes.value);
    return (l, i) => {
      var u, d, c, f;
      return openBlock(), createBlock(Da, {
        "is-horizontal": true,
        "data-orientation": "horizontal",
        ref_key: "primitiveElement",
        ref: n,
        onOnDragScroll: i[0] || (i[0] = (p) => {
          var m;
          return (m = unref(e)) == null ? void 0 : m.onDragScroll(p.x);
        }),
        style: normalizeStyle({
          bottom: 0,
          left: ((d = (u = unref(t)) == null ? void 0 : u.dir) == null ? void 0 : d.value) === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
          right: ((f = (c = unref(t)) == null ? void 0 : c.dir) == null ? void 0 : f.value) === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
          ["--radix-scroll-area-thumb-width"]: s.value ? unref(qt)(s.value) + "px" : void 0
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
var jl = defineComponent({
  __name: "ScrollAreaScrollbarY",
  setup(o) {
    const t = inject(re), e = inject(
      bt
    ), { primitiveElement: n, currentElement: a } = F();
    onMounted(() => {
      a.value && (t == null || t.onScrollbarYChange(a.value));
    });
    const s = computed(() => e == null ? void 0 : e.sizes.value);
    return (l, i) => {
      var u, d, c, f;
      return openBlock(), createBlock(Da, {
        "is-horizontal": false,
        "data-orientation": "vertical",
        ref_key: "primitiveElement",
        ref: n,
        onOnDragScroll: i[0] || (i[0] = (p) => {
          var m;
          return (m = unref(e)) == null ? void 0 : m.onDragScroll(p.y);
        }),
        style: normalizeStyle({
          top: 0,
          right: ((d = (u = unref(t)) == null ? void 0 : u.dir) == null ? void 0 : d.value) === "ltr" ? 0 : void 0,
          left: ((f = (c = unref(t)) == null ? void 0 : c.dir) == null ? void 0 : f.value) === "rtl" ? 0 : void 0,
          bottom: "var(--radix-scroll-area-corner-height)",
          ["--radix-scroll-area-thumb-height"]: s.value ? unref(qt)(s.value) + "px" : void 0
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
var bt = Symbol();
var un = defineComponent({
  __name: "ScrollAreaScrollbarVisible",
  setup(o) {
    const t = inject(re), e = inject(wt), n = ref({
      content: 0,
      viewport: 0,
      scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
    }), a = computed(() => {
      const y = Ia(n.value.viewport, n.value.content);
      return y > 0 && y < 1;
    }), s = ref(), l = ref(0), i = (y, C) => {
      if (p.value) {
        const O = t.viewport.value.scrollLeft + y.deltaY;
        t.viewport.value.scrollLeft = O, Dn(O, C) && y.preventDefault();
      } else {
        const O = t.viewport.value.scrollTop + y.deltaY;
        t.viewport.value.scrollTop = O, Dn(O, C) && y.preventDefault();
      }
    }, u = (y, C) => {
      p.value ? l.value = C.x : l.value = C.y;
    }, d = (y) => {
      l.value = 0;
    }, c = (y) => {
      n.value = y;
    };
    function f(y, C) {
      return Zl(
        y,
        l.value,
        n.value,
        C
      );
    }
    const p = computed(
      () => e == null ? void 0 : e.isHorizontal.value
    );
    return provide(
      bt,
      {
        sizes: n,
        hasThumb: a,
        handleWheelScroll: i,
        handleThumbDown: u,
        handleThumbUp: d,
        handleSizeChange: c,
        onThumbPositionChange: () => {
          var y;
          if (p.value) {
            if (t != null && t.viewport.value && s.value) {
              const C = t == null ? void 0 : t.viewport.value.scrollLeft, O = In(
                C,
                n.value,
                (y = t == null ? void 0 : t.dir) == null ? void 0 : y.value
              );
              s.value.style.transform = `translate3d(${O}px, 0, 0)`;
            }
          } else if (t != null && t.viewport.value && s.value) {
            const C = t == null ? void 0 : t.viewport.value.scrollTop, O = In(C, n.value);
            s.value.style.transform = `translate3d(0, ${O}px, 0)`;
          }
        },
        onThumbChange: (y) => {
          s.value = y;
        },
        onDragScroll: (y) => {
          var C;
          p.value ? t.viewport.value.scrollLeft = f(
            y,
            (C = t.dir) == null ? void 0 : C.value
          ) : t.viewport.value.scrollTop = f(y);
        }
      }
    ), (y, C) => p.value ? (openBlock(), createBlock(Ql, normalizeProps(mergeProps({ key: 0 }, y.$attrs)), {
      default: withCtx(() => [
        renderSlot(y.$slots, "default")
      ]),
      _: 3
    }, 16)) : (openBlock(), createBlock(jl, normalizeProps(mergeProps({ key: 1 }, y.$attrs)), {
      default: withCtx(() => [
        renderSlot(y.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
var xa = defineComponent({
  __name: "ScrollAreaScrollbarAuto",
  setup(o) {
    const t = inject(re), e = inject(wt), n = ref(false), a = Eo(() => {
      if (t != null && t.viewport.value) {
        const s = (t == null ? void 0 : t.viewport.value.offsetWidth) < (t == null ? void 0 : t.viewport.value.scrollWidth), l = (t == null ? void 0 : t.viewport.value.offsetHeight) < (t == null ? void 0 : t.viewport.value.scrollHeight);
        n.value = e != null && e.isHorizontal.value ? s : l;
      }
    }, 10);
    return $e(t == null ? void 0 : t.viewport, a), $e(t == null ? void 0 : t.content, a), (s, l) => n.value ? (openBlock(), createBlock(un, mergeProps({ key: 0 }, s.$attrs, {
      "data-state": n.value ? "visible" : "hidden"
    }), {
      default: withCtx(() => [
        renderSlot(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-state"])) : createCommentVNode("", true);
  }
});
var er = {
  inheritAttrs: false
};
var tr = defineComponent({
  ...er,
  __name: "ScrollAreaScrollbarHover",
  setup(o) {
    const t = inject(re);
    let e;
    const n = ref(false), a = () => {
      window.clearTimeout(e), n.value = true;
    }, s = () => {
      e = window.setTimeout(() => {
        n.value = false;
      }, t == null ? void 0 : t.scrollHideDelay.value);
    };
    return onMounted(() => {
      const l = t == null ? void 0 : t.scrollArea.value;
      l && (l.addEventListener("pointerenter", a), l.addEventListener("pointerleave", s));
    }), onUnmounted(() => {
      const l = t == null ? void 0 : t.scrollArea.value;
      l && (window.clearTimeout(e), l.removeEventListener("pointerenter", a), l.removeEventListener("pointerleave", s));
    }), (l, i) => n.value ? (openBlock(), createBlock(xa, mergeProps({ key: 0 }, l.$attrs, {
      "data-state": n.value ? "visible" : "hidden"
    }), {
      default: withCtx(() => [
        renderSlot(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-state"])) : createCommentVNode("", true);
  }
});
var or = defineComponent({
  __name: "ScrollAreaScrollbarScroll",
  setup(o) {
    const t = inject(re), e = inject(wt), { state: n, dispatch: a } = Un("hidden", {
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
    const s = Eo(() => a("SCROLL_END"), 100);
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
    }), (l, i) => unref(n) !== "hidden" ? (openBlock(), createBlock(un, normalizeProps(mergeProps({ key: 0 }, l.$attrs)), {
      default: withCtx(() => [
        renderSlot(l.$slots, "default")
      ]),
      _: 3
    }, 16)) : createCommentVNode("", true);
  }
});
var wt = Symbol();
var nr = {
  inheritAttrs: false
};
var Mu = defineComponent({
  ...nr,
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
    const { orientation: a, forceMount: s, asChild: l, as: i } = toRefs(t);
    return provide(wt, {
      orientation: a,
      forceMount: s,
      isHorizontal: n,
      as: i,
      asChild: l
    }), (u, d) => {
      var c, f, p, m;
      return ((c = unref(e)) == null ? void 0 : c.type.value) === "hover" ? (openBlock(), createBlock(tr, mergeProps({ key: 0 }, u.$attrs, { forceMount: unref(s) }), {
        default: withCtx(() => [
          renderSlot(u.$slots, "default")
        ]),
        _: 3
      }, 16, ["forceMount"])) : ((f = unref(e)) == null ? void 0 : f.type.value) === "scroll" ? (openBlock(), createBlock(or, mergeProps({ key: 1 }, u.$attrs, { forceMount: unref(s) }), {
        default: withCtx(() => [
          renderSlot(u.$slots, "default")
        ]),
        _: 3
      }, 16, ["forceMount"])) : ((p = unref(e)) == null ? void 0 : p.type.value) === "auto" ? (openBlock(), createBlock(xa, mergeProps({ key: 2 }, u.$attrs, { forceMount: unref(s) }), {
        default: withCtx(() => [
          renderSlot(u.$slots, "default")
        ]),
        _: 3
      }, 16, ["forceMount"])) : ((m = unref(e)) == null ? void 0 : m.type.value) === "always" ? (openBlock(), createBlock(un, mergeProps({ key: 3 }, u.$attrs, {
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
var ku = defineComponent({
  __name: "ScrollAreaThumb",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const t = o, e = inject(re), n = inject(
      bt
    ), a = (p) => {
      const v = p.target.getBoundingClientRect(), h2 = p.clientX - v.left, y = p.clientY - v.top;
      n == null || n.handleThumbDown(p, { x: h2, y });
    }, s = (p) => {
      n == null || n.handleThumbUp(p);
    }, { primitiveElement: l, currentElement: i } = F(), u = ref(), d = computed(() => e == null ? void 0 : e.viewport.value), c = () => {
      if (!u.value) {
        const p = Jl(
          d.value,
          n == null ? void 0 : n.onThumbPositionChange
        );
        u.value = p, n == null || n.onThumbPositionChange();
      }
    }, f = computed(() => n == null ? void 0 : n.sizes.value);
    return ns(f, () => {
      n == null || n.onThumbChange(i.value), d.value && (n == null || n.onThumbPositionChange(), d.value.addEventListener("scroll", c));
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
var ar = defineComponent({
  __name: "ScrollAreaCornerImpl",
  setup(o) {
    const t = inject(re), e = ref(0), n = ref(0), a = computed(() => !!e.value && !!n.value), s = () => {
      var u;
      const i = ((u = t == null ? void 0 : t.scrollbarX.value) == null ? void 0 : u.offsetHeight) || 0;
      t == null || t.onCornerHeightChange(i), n.value = i;
    }, l = () => {
      var u;
      const i = ((u = t == null ? void 0 : t.scrollbarY.value) == null ? void 0 : u.offsetWidth) || 0;
      t == null || t.onCornerWidthChange(i), e.value = i;
    };
    return $e(t == null ? void 0 : t.scrollbarX.value, s), $e(t == null ? void 0 : t.scrollbarY.value, l), watch(() => t == null ? void 0 : t.scrollbarX.value, s), watch(() => t == null ? void 0 : t.scrollbarY.value, l), (i, u) => {
      var d;
      return a.value ? (openBlock(), createBlock(unref(M), mergeProps({
        key: 0,
        style: {
          width: e.value + "px",
          height: n.value + "px",
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
var Ru = defineComponent({
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
    return (s, l) => a.value ? (openBlock(), createBlock(ar, normalizeProps(mergeProps({ key: 0 }, t)), {
      default: withCtx(() => [
        renderSlot(s.$slots, "default")
      ]),
      _: 3
    }, 16)) : createCommentVNode("", true);
  }
});
export {
  ur as AccordionContent,
  dr as AccordionHeader,
  ir as AccordionItem,
  rr as AccordionRoot,
  cr as AccordionTrigger,
  Wr as AlertDialogAction,
  Kr as AlertDialogCancel,
  Nr as AlertDialogContent,
  Vr as AlertDialogDescription,
  Fr as AlertDialogOverlay,
  Lr as AlertDialogPortal,
  kr as AlertDialogRoot,
  Hr as AlertDialogTitle,
  Rr as AlertDialogTrigger,
  wr as AspectRatio,
  Qr as AvatarFallback,
  Zr as AvatarImage,
  Jr as AvatarRoot,
  fr as CheckboxIndicator,
  pr as CheckboxRoot,
  Bs as CollapsibleContent,
  Ps as CollapsibleRoot,
  Ts as CollapsibleTrigger,
  Mi as ContextMenuArrow,
  Ni as ContextMenuCheckboxItem,
  xi as ContextMenuContent,
  Ri as ContextMenuGroup,
  ki as ContextMenuItem,
  Fi as ContextMenuItemIndicator,
  Ki as ContextMenuLabel,
  Di as ContextMenuPortal,
  Hi as ContextMenuRadioGroup,
  Vi as ContextMenuRadioItem,
  Ai as ContextMenuRoot,
  Li as ContextMenuSeparator,
  Wi as ContextMenuSub,
  zi as ContextMenuSubContent,
  Yi as ContextMenuSubTrigger,
  Ii as ContextMenuTrigger,
  la as DialogClose,
  il as DialogContent,
  cl as DialogDescription,
  ul as DialogOverlay,
  Hs as DialogPortal,
  Fs as DialogRoot,
  dl as DialogTitle,
  Ks as DialogTrigger,
  gi as DropdownMenuArrow,
  Ei as DropdownMenuCheckboxItem,
  yi as DropdownMenuContent,
  bi as DropdownMenuGroup,
  _i as DropdownMenuItem,
  Ci as DropdownMenuItemIndicator,
  $i as DropdownMenuLabel,
  hi as DropdownMenuPortal,
  Oi as DropdownMenuRadioGroup,
  Pi as DropdownMenuRadioItem,
  mi as DropdownMenuRoot,
  wi as DropdownMenuSeparator,
  Ti as DropdownMenuSub,
  Si as DropdownMenuSubContent,
  Bi as DropdownMenuSubTrigger,
  vi as DropdownMenuTrigger,
  ri as HoverCardArrow,
  li as HoverCardContent,
  si as HoverCardPortal,
  ni as HoverCardRoot,
  ai as HoverCardTrigger,
  yr as Label,
  pu as MenubarArrow,
  hu as MenubarCheckboxItem,
  cu as MenubarContent,
  mu as MenubarGroup,
  fu as MenubarItem,
  yu as MenubarItemIndicator,
  gu as MenubarLabel,
  iu as MenubarMenu,
  du as MenubarPortal,
  _u as MenubarRadioGroup,
  bu as MenubarRadioItem,
  ru as MenubarRoot,
  vu as MenubarSeparator,
  wu as MenubarSub,
  Eu as MenubarSubContent,
  Cu as MenubarSubTrigger,
  uu as MenubarTrigger,
  Pu as NavigationMenuContent,
  Tu as NavigationMenuIndicator,
  Ou as NavigationMenuItem,
  Su as NavigationMenuLink,
  Bu as NavigationMenuList,
  $u as NavigationMenuRoot,
  Au as NavigationMenuTrigger,
  Iu as NavigationMenuViewport,
  pi as PopoverArrow,
  fi as PopoverClose,
  ci as PopoverContent,
  di as PopoverPortal,
  ii as PopoverRoot,
  ui as PopoverTrigger,
  Mr as ProgressIndicator,
  xr as ProgressRoot,
  Dr as RadioGroupIndicator,
  Ir as RadioGroupItem,
  Ar as RadioGroupRoot,
  Ru as ScrollAreaCorner,
  Du as ScrollAreaRoot,
  Mu as ScrollAreaScrollbar,
  ku as ScrollAreaThumb,
  xu as ScrollAreaViewport,
  Zi as SelectArrow,
  Ji as SelectContent,
  tu as SelectGroup,
  ji as SelectItem,
  eu as SelectItemIndicator,
  nu as SelectItemText,
  ou as SelectLabel,
  Xi as SelectPortal,
  Ui as SelectRoot,
  su as SelectScrollDownButton,
  au as SelectScrollUpButton,
  Qi as SelectSeparator,
  Gi as SelectTrigger,
  lu as SelectValue,
  qi as SelectViewport,
  hr as Separator,
  Br as SliderRange,
  Pr as SliderRoot,
  Tr as SliderThumb,
  Sr as SliderTrack,
  mr as SwitchRoot,
  vr as SwitchThumb,
  $r as TabsContent,
  Cr as TabsList,
  Er as TabsRoot,
  Or as TabsTrigger,
  gr as Toggle,
  br as ToggleGroupItem,
  _r as ToggleGroupRoot,
  Yr as ToolbarButton,
  Ur as ToolbarLink,
  zr as ToolbarRoot,
  qr as ToolbarSeparator,
  Gr as ToolbarToggleGroup,
  Xr as ToolbarToggleItem,
  oi as TooltipArrow,
  ti as TooltipContent,
  jr as TooltipRoot,
  ei as TooltipTrigger
};
//# sourceMappingURL=radix-vue.js.map
