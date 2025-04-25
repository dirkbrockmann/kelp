(function(){"use strict";try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode('/*! tailwindcss v4.1.4 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-font-weight:initial}}}@layer theme{:root,:host{--tw-font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--tw-spacing:.25rem;--tw-container-5xl:64rem;--tw-text-2xl:1.5rem;--tw-text-2xl--line-height:calc(2/1.5);--tw-text-3xl:1.875rem;--tw-text-3xl--line-height: 1.2 ;--tw-text-5xl:3rem;--tw-text-5xl--line-height:1;--tw-font-weight-light:300}}@layer base,components;@layer utilities{.tw\\:grid{display:grid}.tw\\:max-w-5xl{max-width:var(--tw-container-5xl)}.tw\\:grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.tw\\:p-1{padding:calc(var(--tw-spacing)*1)}.tw\\:px-8{padding-inline:calc(var(--tw-spacing)*8)}.tw\\:px-10{padding-inline:calc(var(--tw-spacing)*10)}.tw\\:font-sans{font-family:var(--tw-font-sans)}.tw\\:text-2xl{font-size:var(--tw-text-2xl);line-height:var(--tw-leading,var(--tw-text-2xl--line-height))}.tw\\:text-3xl{font-size:var(--tw-text-3xl);line-height:var(--tw-leading,var(--tw-text-3xl--line-height))}.tw\\:text-5xl{font-size:var(--tw-text-5xl);line-height:var(--tw-leading,var(--tw-text-5xl--line-height))}.tw\\:font-light{--tw-font-weight:var(--tw-font-weight-light);font-weight:var(--tw-font-weight-light)}@media (min-width:40rem){.tw\\:sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.tw\\:sm\\:gap-4{gap:calc(var(--tw-spacing)*4)}.tw\\:sm\\:p-0{padding:calc(var(--tw-spacing)*0)}}.debug-grid-16{background-image:linear-gradient(90deg,#0000ff1a 1px,#0000 1px),linear-gradient(#0000ff1a 1px,#0000 1px);background-repeat:repeat;background-size:6.25% 6.25%,6.25% 6.25%}}.explorable *,.explorable :before,.explorable :after{box-sizing:border-box}@property --tw-font-weight{syntax:"*";inherits:false}._widget_18g36_1{stroke:#969696;stroke-width:1px;cursor:pointer;pointer-events:all;stroke-opacity:1;fill-opacity:1;fill:#ccc;font-size:16px}._widget_18g36_1 ._title_18g36_12{font-size:20px;fill:#000;stroke:none;text-anchor:middle}._widget_18g36_1 ._label_18g36_19{fill:#000;stroke:none}._widget_18g36_1 ._lit_18g36_24{fill:#eee}._button_18g36_29>._symbol_18g36_29,._radio_18g36_29>._radiobutton_18g36_29>._symbol_18g36_29{fill:#fff;fill-rule:nonzero;pointer-events:none}._widget_18g36_1 ._symbol_18g36_29._selected_18g36_35,._toggle_18g36_35._selected_18g36_35,._widget_18g36_1 ._symbol_18g36_29._selected_18g36_35._lit_18g36_24{fill:#000}._widget_18g36_1 ._symbol_18g36_29._lit_18g36_24{fill:#bbb}._slider_18g36_44>._track_18g36_44,._toggle_18g36_35>._track_18g36_44{pointer-events:none}._slider_18g36_44>._track_overlay_18g36_48,._toggle_18g36_35>._track_overlay_18g36_48{pointer-events:all;cursor:pointer;fill:transparent;stroke:transparent}._slider_18g36_44>._handle_18g36_55,._toggle_18g36_35>._handle_18g36_55{fill:#fff}._slidervalue_veqrl_5{font-size:14px;alignment-baseline:middle}._bit_veqrl_10{stroke:#000;stroke-width:.5}._bit_veqrl_10>._on_veqrl_15{fill:gray}._bit_veqrl_10>._off_veqrl_19{fill:#fff}')),document.head.appendChild(t)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
const oo = {
  display_type: "canvas",
  // either svg or canvas depending on explorable
  debug: !1,
  // if set to true, draws dots on the control panel to help widget placement
  controls_border: "",
  display_border: "1px solid black",
  debug_lattice: "debug-grid-16",
  controls_grid: { nx: 12, ny: 12 },
  display_size: { width: 1204, height: 1204 },
  controls_size: { width: 480, height: 480 },
  display_class: " tw:p-1",
  controls_class: "tw:p-1",
  container_class: "tw:font-sans tw:grid tw:grid-cols-1 tw:sm:grid-cols-2 tw:sm:gap-4 tw:px-8 tw:sm:p-0"
};
function fn(t, n) {
  return t == null || n == null ? NaN : t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function ao(t, n) {
  return t == null || n == null ? NaN : n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN;
}
function Xr(t) {
  let n, e, r;
  t.length !== 2 ? (n = fn, e = (s, u) => fn(t(s), u), r = (s, u) => t(s) - u) : (n = t === fn || t === ao ? t : so, e = t, r = t);
  function i(s, u, l = 0, h = s.length) {
    if (l < h) {
      if (n(u, u) !== 0) return h;
      do {
        const f = l + h >>> 1;
        e(s[f], u) < 0 ? l = f + 1 : h = f;
      } while (l < h);
    }
    return l;
  }
  function o(s, u, l = 0, h = s.length) {
    if (l < h) {
      if (n(u, u) !== 0) return h;
      do {
        const f = l + h >>> 1;
        e(s[f], u) <= 0 ? l = f + 1 : h = f;
      } while (l < h);
    }
    return l;
  }
  function a(s, u, l = 0, h = s.length) {
    const f = i(s, u, l, h - 1);
    return f > l && r(s[f - 1], u) > -r(s[f], u) ? f - 1 : f;
  }
  return { left: i, center: a, right: o };
}
function so() {
  return 0;
}
function uo(t) {
  return t === null ? NaN : +t;
}
const lo = Xr(fn), fo = lo.right;
Xr(uo).center;
const co = Math.sqrt(50), ho = Math.sqrt(10), po = Math.sqrt(2);
function yn(t, n, e) {
  const r = (n - t) / Math.max(0, e), i = Math.floor(Math.log10(r)), o = r / Math.pow(10, i), a = o >= co ? 10 : o >= ho ? 5 : o >= po ? 2 : 1;
  let s, u, l;
  return i < 0 ? (l = Math.pow(10, -i) / a, s = Math.round(t * l), u = Math.round(n * l), s / l < t && ++s, u / l > n && --u, l = -l) : (l = Math.pow(10, i) * a, s = Math.round(t / l), u = Math.round(n / l), s * l < t && ++s, u * l > n && --u), u < s && 0.5 <= e && e < 2 ? yn(t, n, e * 2) : [s, u, l];
}
function go(t, n, e) {
  if (n = +n, t = +t, e = +e, !(e > 0)) return [];
  if (t === n) return [t];
  const r = n < t, [i, o, a] = r ? yn(n, t, e) : yn(t, n, e);
  if (!(o >= i)) return [];
  const s = o - i + 1, u = new Array(s);
  if (r)
    if (a < 0) for (let l = 0; l < s; ++l) u[l] = (o - l) / -a;
    else for (let l = 0; l < s; ++l) u[l] = (o - l) * a;
  else if (a < 0) for (let l = 0; l < s; ++l) u[l] = (i + l) / -a;
  else for (let l = 0; l < s; ++l) u[l] = (i + l) * a;
  return u;
}
function Qn(t, n, e) {
  return n = +n, t = +t, e = +e, yn(t, n, e)[2];
}
function yo(t, n, e) {
  n = +n, t = +t, e = +e;
  const r = n < t, i = r ? Qn(n, t, e) : Qn(t, n, e);
  return (r ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function en(t, n) {
  let e;
  for (const r of t)
    r != null && (e < r || e === void 0 && r >= r) && (e = r);
  return e;
}
function _o(t, n, e) {
  t = +t, n = +n, e = (i = arguments.length) < 2 ? (n = t, t = 0, 1) : i < 3 ? 1 : +e;
  for (var r = -1, i = Math.max(0, Math.ceil((n - t) / e)) | 0, o = new Array(i); ++r < i; )
    o[r] = t + r * e;
  return o;
}
var mo = { value: () => {
} };
function xe() {
  for (var t = 0, n = arguments.length, e = {}, r; t < n; ++t) {
    if (!(r = arguments[t] + "") || r in e || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    e[r] = [];
  }
  return new cn(e);
}
function cn(t) {
  this._ = t;
}
function vo(t, n) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var r = "", i = e.indexOf(".");
    if (i >= 0 && (r = e.slice(i + 1), e = e.slice(0, i)), e && !n.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    return { type: e, name: r };
  });
}
cn.prototype = xe.prototype = {
  constructor: cn,
  on: function(t, n) {
    var e = this._, r = vo(t + "", e), i, o = -1, a = r.length;
    if (arguments.length < 2) {
      for (; ++o < a; ) if ((i = (t = r[o]).type) && (i = wo(e[i], t.name))) return i;
      return;
    }
    if (n != null && typeof n != "function") throw new Error("invalid callback: " + n);
    for (; ++o < a; )
      if (i = (t = r[o]).type) e[i] = We(e[i], t.name, n);
      else if (n == null) for (i in e) e[i] = We(e[i], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, n = this._;
    for (var e in n) t[e] = n[e].slice();
    return new cn(t);
  },
  call: function(t, n) {
    if ((i = arguments.length - 2) > 0) for (var e = new Array(i), r = 0, i, o; r < i; ++r) e[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (o = this._[t], r = 0, i = o.length; r < i; ++r) o[r].value.apply(n, e);
  },
  apply: function(t, n, e) {
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (var r = this._[t], i = 0, o = r.length; i < o; ++i) r[i].value.apply(n, e);
  }
};
function wo(t, n) {
  for (var e = 0, r = t.length, i; e < r; ++e)
    if ((i = t[e]).name === n)
      return i.value;
}
function We(t, n, e) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === n) {
      t[r] = mo, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return e != null && t.push({ name: n, value: e }), t;
}
var jn = "http://www.w3.org/1999/xhtml";
const Ze = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: jn,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function En(t) {
  var n = t += "", e = n.indexOf(":");
  return e >= 0 && (n = t.slice(0, e)) !== "xmlns" && (t = t.slice(e + 1)), Ze.hasOwnProperty(n) ? { space: Ze[n], local: t } : t;
}
function bo(t) {
  return function() {
    var n = this.ownerDocument, e = this.namespaceURI;
    return e === jn && n.documentElement.namespaceURI === jn ? n.createElement(t) : n.createElementNS(e, t);
  };
}
function xo(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function Gr(t) {
  var n = En(t);
  return (n.local ? xo : bo)(n);
}
function $o() {
}
function $e(t) {
  return t == null ? $o : function() {
    return this.querySelector(t);
  };
}
function Mo(t) {
  typeof t != "function" && (t = $e(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], a = o.length, s = r[i] = new Array(a), u, l, h = 0; h < a; ++h)
      (u = o[h]) && (l = t.call(u, u.__data__, h, o)) && ("__data__" in u && (l.__data__ = u.__data__), s[h] = l);
  return new I(r, this._parents);
}
function Ao(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function To() {
  return [];
}
function Ur(t) {
  return t == null ? To : function() {
    return this.querySelectorAll(t);
  };
}
function So(t) {
  return function() {
    return Ao(t.apply(this, arguments));
  };
}
function Po(t) {
  typeof t == "function" ? t = So(t) : t = Ur(t);
  for (var n = this._groups, e = n.length, r = [], i = [], o = 0; o < e; ++o)
    for (var a = n[o], s = a.length, u, l = 0; l < s; ++l)
      (u = a[l]) && (r.push(t.call(u, u.__data__, l, a)), i.push(u));
  return new I(r, i);
}
function Yr(t) {
  return function() {
    return this.matches(t);
  };
}
function Kr(t) {
  return function(n) {
    return n.matches(t);
  };
}
var Eo = Array.prototype.find;
function No(t) {
  return function() {
    return Eo.call(this.children, t);
  };
}
function zo() {
  return this.firstElementChild;
}
function Oo(t) {
  return this.select(t == null ? zo : No(typeof t == "function" ? t : Kr(t)));
}
var ko = Array.prototype.filter;
function Co() {
  return Array.from(this.children);
}
function Ro(t) {
  return function() {
    return ko.call(this.children, t);
  };
}
function Io(t) {
  return this.selectAll(t == null ? Co : Ro(typeof t == "function" ? t : Kr(t)));
}
function Fo(t) {
  typeof t != "function" && (t = Yr(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], a = o.length, s = r[i] = [], u, l = 0; l < a; ++l)
      (u = o[l]) && t.call(u, u.__data__, l, o) && s.push(u);
  return new I(r, this._parents);
}
function Vr(t) {
  return new Array(t.length);
}
function Lo() {
  return new I(this._enter || this._groups.map(Vr), this._parents);
}
function _n(t, n) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = n;
}
_n.prototype = {
  constructor: _n,
  appendChild: function(t) {
    return this._parent.insertBefore(t, this._next);
  },
  insertBefore: function(t, n) {
    return this._parent.insertBefore(t, n);
  },
  querySelector: function(t) {
    return this._parent.querySelector(t);
  },
  querySelectorAll: function(t) {
    return this._parent.querySelectorAll(t);
  }
};
function Do(t) {
  return function() {
    return t;
  };
}
function qo(t, n, e, r, i, o) {
  for (var a = 0, s, u = n.length, l = o.length; a < l; ++a)
    (s = n[a]) ? (s.__data__ = o[a], r[a] = s) : e[a] = new _n(t, o[a]);
  for (; a < u; ++a)
    (s = n[a]) && (i[a] = s);
}
function Ho(t, n, e, r, i, o, a) {
  var s, u, l = /* @__PURE__ */ new Map(), h = n.length, f = o.length, c = new Array(h), p;
  for (s = 0; s < h; ++s)
    (u = n[s]) && (c[s] = p = a.call(u, u.__data__, s, n) + "", l.has(p) ? i[s] = u : l.set(p, u));
  for (s = 0; s < f; ++s)
    p = a.call(t, o[s], s, o) + "", (u = l.get(p)) ? (r[s] = u, u.__data__ = o[s], l.delete(p)) : e[s] = new _n(t, o[s]);
  for (s = 0; s < h; ++s)
    (u = n[s]) && l.get(c[s]) === u && (i[s] = u);
}
function Bo(t) {
  return t.__data__;
}
function Xo(t, n) {
  if (!arguments.length) return Array.from(this, Bo);
  var e = n ? Ho : qo, r = this._parents, i = this._groups;
  typeof t != "function" && (t = Do(t));
  for (var o = i.length, a = new Array(o), s = new Array(o), u = new Array(o), l = 0; l < o; ++l) {
    var h = r[l], f = i[l], c = f.length, p = Go(t.call(h, h && h.__data__, l, r)), d = p.length, g = s[l] = new Array(d), b = a[l] = new Array(d), _ = u[l] = new Array(c);
    e(h, f, g, b, _, p, n);
    for (var $ = 0, T = 0, y, v; $ < d; ++$)
      if (y = g[$]) {
        for ($ >= T && (T = $ + 1); !(v = b[T]) && ++T < d; ) ;
        y._next = v || null;
      }
  }
  return a = new I(a, r), a._enter = s, a._exit = u, a;
}
function Go(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function Uo() {
  return new I(this._exit || this._groups.map(Vr), this._parents);
}
function Yo(t, n, e) {
  var r = this.enter(), i = this, o = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), n != null && (i = n(i), i && (i = i.selection())), e == null ? o.remove() : e(o), r && i ? r.merge(i).order() : i;
}
function Ko(t) {
  for (var n = t.selection ? t.selection() : t, e = this._groups, r = n._groups, i = e.length, o = r.length, a = Math.min(i, o), s = new Array(i), u = 0; u < a; ++u)
    for (var l = e[u], h = r[u], f = l.length, c = s[u] = new Array(f), p, d = 0; d < f; ++d)
      (p = l[d] || h[d]) && (c[d] = p);
  for (; u < i; ++u)
    s[u] = e[u];
  return new I(s, this._parents);
}
function Vo() {
  for (var t = this._groups, n = -1, e = t.length; ++n < e; )
    for (var r = t[n], i = r.length - 1, o = r[i], a; --i >= 0; )
      (a = r[i]) && (o && a.compareDocumentPosition(o) ^ 4 && o.parentNode.insertBefore(a, o), o = a);
  return this;
}
function Wo(t) {
  t || (t = Zo);
  function n(f, c) {
    return f && c ? t(f.__data__, c.__data__) : !f - !c;
  }
  for (var e = this._groups, r = e.length, i = new Array(r), o = 0; o < r; ++o) {
    for (var a = e[o], s = a.length, u = i[o] = new Array(s), l, h = 0; h < s; ++h)
      (l = a[h]) && (u[h] = l);
    u.sort(n);
  }
  return new I(i, this._parents).order();
}
function Zo(t, n) {
  return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function Jo() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function Qo() {
  return Array.from(this);
}
function jo() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, o = r.length; i < o; ++i) {
      var a = r[i];
      if (a) return a;
    }
  return null;
}
function ta() {
  let t = 0;
  for (const n of this) ++t;
  return t;
}
function na() {
  return !this.node();
}
function ea(t) {
  for (var n = this._groups, e = 0, r = n.length; e < r; ++e)
    for (var i = n[e], o = 0, a = i.length, s; o < a; ++o)
      (s = i[o]) && t.call(s, s.__data__, o, i);
  return this;
}
function ra(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function ia(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function oa(t, n) {
  return function() {
    this.setAttribute(t, n);
  };
}
function aa(t, n) {
  return function() {
    this.setAttributeNS(t.space, t.local, n);
  };
}
function sa(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttribute(t) : this.setAttribute(t, e);
  };
}
function ua(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e);
  };
}
function la(t, n) {
  var e = En(t);
  if (arguments.length < 2) {
    var r = this.node();
    return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e);
  }
  return this.each((n == null ? e.local ? ia : ra : typeof n == "function" ? e.local ? ua : sa : e.local ? aa : oa)(e, n));
}
function Wr(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function fa(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function ca(t, n, e) {
  return function() {
    this.style.setProperty(t, n, e);
  };
}
function ha(t, n, e) {
  return function() {
    var r = n.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, e);
  };
}
function da(t, n, e) {
  return arguments.length > 1 ? this.each((n == null ? fa : typeof n == "function" ? ha : ca)(t, n, e ?? "")) : Et(this.node(), t);
}
function Et(t, n) {
  return t.style.getPropertyValue(n) || Wr(t).getComputedStyle(t, null).getPropertyValue(n);
}
function pa(t) {
  return function() {
    delete this[t];
  };
}
function ga(t, n) {
  return function() {
    this[t] = n;
  };
}
function ya(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? delete this[t] : this[t] = e;
  };
}
function _a(t, n) {
  return arguments.length > 1 ? this.each((n == null ? pa : typeof n == "function" ? ya : ga)(t, n)) : this.node()[t];
}
function Zr(t) {
  return t.trim().split(/^|\s+/);
}
function Me(t) {
  return t.classList || new Jr(t);
}
function Jr(t) {
  this._node = t, this._names = Zr(t.getAttribute("class") || "");
}
Jr.prototype = {
  add: function(t) {
    var n = this._names.indexOf(t);
    n < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(t) {
    var n = this._names.indexOf(t);
    n >= 0 && (this._names.splice(n, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(t) {
    return this._names.indexOf(t) >= 0;
  }
};
function Qr(t, n) {
  for (var e = Me(t), r = -1, i = n.length; ++r < i; ) e.add(n[r]);
}
function jr(t, n) {
  for (var e = Me(t), r = -1, i = n.length; ++r < i; ) e.remove(n[r]);
}
function ma(t) {
  return function() {
    Qr(this, t);
  };
}
function va(t) {
  return function() {
    jr(this, t);
  };
}
function wa(t, n) {
  return function() {
    (n.apply(this, arguments) ? Qr : jr)(this, t);
  };
}
function ba(t, n) {
  var e = Zr(t + "");
  if (arguments.length < 2) {
    for (var r = Me(this.node()), i = -1, o = e.length; ++i < o; ) if (!r.contains(e[i])) return !1;
    return !0;
  }
  return this.each((typeof n == "function" ? wa : n ? ma : va)(e, n));
}
function xa() {
  this.textContent = "";
}
function $a(t) {
  return function() {
    this.textContent = t;
  };
}
function Ma(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.textContent = n ?? "";
  };
}
function Aa(t) {
  return arguments.length ? this.each(t == null ? xa : (typeof t == "function" ? Ma : $a)(t)) : this.node().textContent;
}
function Ta() {
  this.innerHTML = "";
}
function Sa(t) {
  return function() {
    this.innerHTML = t;
  };
}
function Pa(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.innerHTML = n ?? "";
  };
}
function Ea(t) {
  return arguments.length ? this.each(t == null ? Ta : (typeof t == "function" ? Pa : Sa)(t)) : this.node().innerHTML;
}
function Na() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function za() {
  return this.each(Na);
}
function Oa() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function ka() {
  return this.each(Oa);
}
function Ca(t) {
  var n = typeof t == "function" ? t : Gr(t);
  return this.select(function() {
    return this.appendChild(n.apply(this, arguments));
  });
}
function Ra() {
  return null;
}
function Ia(t, n) {
  var e = typeof t == "function" ? t : Gr(t), r = n == null ? Ra : typeof n == "function" ? n : $e(n);
  return this.select(function() {
    return this.insertBefore(e.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function Fa() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function La() {
  return this.each(Fa);
}
function Da() {
  var t = this.cloneNode(!1), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function qa() {
  var t = this.cloneNode(!0), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function Ha(t) {
  return this.select(t ? qa : Da);
}
function Ba(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function Xa(t) {
  return function(n) {
    t.call(this, n, this.__data__);
  };
}
function Ga(t) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var e = "", r = n.indexOf(".");
    return r >= 0 && (e = n.slice(r + 1), n = n.slice(0, r)), { type: n, name: e };
  });
}
function Ua(t) {
  return function() {
    var n = this.__on;
    if (n) {
      for (var e = 0, r = -1, i = n.length, o; e < i; ++e)
        o = n[e], (!t.type || o.type === t.type) && o.name === t.name ? this.removeEventListener(o.type, o.listener, o.options) : n[++r] = o;
      ++r ? n.length = r : delete this.__on;
    }
  };
}
function Ya(t, n, e) {
  return function() {
    var r = this.__on, i, o = Xa(n);
    if (r) {
      for (var a = 0, s = r.length; a < s; ++a)
        if ((i = r[a]).type === t.type && i.name === t.name) {
          this.removeEventListener(i.type, i.listener, i.options), this.addEventListener(i.type, i.listener = o, i.options = e), i.value = n;
          return;
        }
    }
    this.addEventListener(t.type, o, e), i = { type: t.type, name: t.name, value: n, listener: o, options: e }, r ? r.push(i) : this.__on = [i];
  };
}
function Ka(t, n, e) {
  var r = Ga(t + ""), i, o = r.length, a;
  if (arguments.length < 2) {
    var s = this.node().__on;
    if (s) {
      for (var u = 0, l = s.length, h; u < l; ++u)
        for (i = 0, h = s[u]; i < o; ++i)
          if ((a = r[i]).type === h.type && a.name === h.name)
            return h.value;
    }
    return;
  }
  for (s = n ? Ya : Ua, i = 0; i < o; ++i) this.each(s(r[i], n, e));
  return this;
}
function ti(t, n, e) {
  var r = Wr(t), i = r.CustomEvent;
  typeof i == "function" ? i = new i(n, e) : (i = r.document.createEvent("Event"), e ? (i.initEvent(n, e.bubbles, e.cancelable), i.detail = e.detail) : i.initEvent(n, !1, !1)), t.dispatchEvent(i);
}
function Va(t, n) {
  return function() {
    return ti(this, t, n);
  };
}
function Wa(t, n) {
  return function() {
    return ti(this, t, n.apply(this, arguments));
  };
}
function Za(t, n) {
  return this.each((typeof n == "function" ? Wa : Va)(t, n));
}
function* Ja() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, o = r.length, a; i < o; ++i)
      (a = r[i]) && (yield a);
}
var ni = [null];
function I(t, n) {
  this._groups = t, this._parents = n;
}
function Zt() {
  return new I([[document.documentElement]], ni);
}
function Qa() {
  return this;
}
I.prototype = Zt.prototype = {
  constructor: I,
  select: Mo,
  selectAll: Po,
  selectChild: Oo,
  selectChildren: Io,
  filter: Fo,
  data: Xo,
  enter: Lo,
  exit: Uo,
  join: Yo,
  merge: Ko,
  selection: Qa,
  order: Vo,
  sort: Wo,
  call: Jo,
  nodes: Qo,
  node: jo,
  size: ta,
  empty: na,
  each: ea,
  attr: la,
  style: da,
  property: _a,
  classed: ba,
  text: Aa,
  html: Ea,
  raise: za,
  lower: ka,
  append: Ca,
  insert: Ia,
  remove: La,
  clone: Ha,
  datum: Ba,
  on: Ka,
  dispatch: Za,
  [Symbol.iterator]: Ja
};
function S(t) {
  return typeof t == "string" ? new I([[document.querySelector(t)]], [document.documentElement]) : new I([[t]], ni);
}
function ja(t) {
  let n;
  for (; n = t.sourceEvent; ) t = n;
  return t;
}
function te(t, n) {
  if (t = ja(t), n === void 0 && (n = t.currentTarget), n) {
    var e = n.ownerSVGElement || n;
    if (e.createSVGPoint) {
      var r = e.createSVGPoint();
      return r.x = t.clientX, r.y = t.clientY, r = r.matrixTransform(n.getScreenCTM().inverse()), [r.x, r.y];
    }
    if (n.getBoundingClientRect) {
      var i = n.getBoundingClientRect();
      return [t.clientX - i.left - n.clientLeft, t.clientY - i.top - n.clientTop];
    }
  }
  return [t.pageX, t.pageY];
}
const ts = { passive: !1 }, Bt = { capture: !0, passive: !1 };
function Gn(t) {
  t.stopImmediatePropagation();
}
function Tt(t) {
  t.preventDefault(), t.stopImmediatePropagation();
}
function ns(t) {
  var n = t.document.documentElement, e = S(t).on("dragstart.drag", Tt, Bt);
  "onselectstart" in n ? e.on("selectstart.drag", Tt, Bt) : (n.__noselect = n.style.MozUserSelect, n.style.MozUserSelect = "none");
}
function es(t, n) {
  var e = t.document.documentElement, r = S(t).on("dragstart.drag", null);
  n && (r.on("click.drag", Tt, Bt), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in e ? r.on("selectstart.drag", null) : (e.style.MozUserSelect = e.__noselect, delete e.__noselect);
}
const rn = (t) => () => t;
function ne(t, {
  sourceEvent: n,
  subject: e,
  target: r,
  identifier: i,
  active: o,
  x: a,
  y: s,
  dx: u,
  dy: l,
  dispatch: h
}) {
  Object.defineProperties(this, {
    type: { value: t, enumerable: !0, configurable: !0 },
    sourceEvent: { value: n, enumerable: !0, configurable: !0 },
    subject: { value: e, enumerable: !0, configurable: !0 },
    target: { value: r, enumerable: !0, configurable: !0 },
    identifier: { value: i, enumerable: !0, configurable: !0 },
    active: { value: o, enumerable: !0, configurable: !0 },
    x: { value: a, enumerable: !0, configurable: !0 },
    y: { value: s, enumerable: !0, configurable: !0 },
    dx: { value: u, enumerable: !0, configurable: !0 },
    dy: { value: l, enumerable: !0, configurable: !0 },
    _: { value: h }
  });
}
ne.prototype.on = function() {
  var t = this._.on.apply(this._, arguments);
  return t === this._ ? this : t;
};
function rs(t) {
  return !t.ctrlKey && !t.button;
}
function is() {
  return this.parentNode;
}
function os(t, n) {
  return n ?? { x: t.x, y: t.y };
}
function as() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function ss() {
  var t = rs, n = is, e = os, r = as, i = {}, o = xe("start", "drag", "end"), a = 0, s, u, l, h, f = 0;
  function c(y) {
    y.on("mousedown.drag", p).filter(r).on("touchstart.drag", b).on("touchmove.drag", _, ts).on("touchend.drag touchcancel.drag", $).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function p(y, v) {
    if (!(h || !t.call(this, y, v))) {
      var P = T(this, n.call(this, y, v), y, v, "mouse");
      P && (S(y.view).on("mousemove.drag", d, Bt).on("mouseup.drag", g, Bt), ns(y.view), Gn(y), l = !1, s = y.clientX, u = y.clientY, P("start", y));
    }
  }
  function d(y) {
    if (Tt(y), !l) {
      var v = y.clientX - s, P = y.clientY - u;
      l = v * v + P * P > f;
    }
    i.mouse("drag", y);
  }
  function g(y) {
    S(y.view).on("mousemove.drag mouseup.drag", null), es(y.view, l), Tt(y), i.mouse("end", y);
  }
  function b(y, v) {
    if (t.call(this, y, v)) {
      var P = y.changedTouches, E = n.call(this, y, v), N = P.length, U, J;
      for (U = 0; U < N; ++U)
        (J = T(this, E, y, v, P[U].identifier, P[U])) && (Gn(y), J("start", y, P[U]));
    }
  }
  function _(y) {
    var v = y.changedTouches, P = v.length, E, N;
    for (E = 0; E < P; ++E)
      (N = i[v[E].identifier]) && (Tt(y), N("drag", y, v[E]));
  }
  function $(y) {
    var v = y.changedTouches, P = v.length, E, N;
    for (h && clearTimeout(h), h = setTimeout(function() {
      h = null;
    }, 500), E = 0; E < P; ++E)
      (N = i[v[E].identifier]) && (Gn(y), N("end", y, v[E]));
  }
  function T(y, v, P, E, N, U) {
    var J = o.copy(), w = te(U || P, v), Y, z, D;
    if ((D = e.call(y, new ne("beforestart", {
      sourceEvent: P,
      target: c,
      identifier: N,
      active: a,
      x: w[0],
      y: w[1],
      dx: 0,
      dy: 0,
      dispatch: J
    }), E)) != null)
      return Y = D.x - w[0] || 0, z = D.y - w[1] || 0, function nn(st, ft, $t) {
        var F = w, Xn;
        switch (st) {
          case "start":
            i[N] = nn, Xn = a++;
            break;
          case "end":
            delete i[N], --a;
          // falls through
          case "drag":
            w = te($t || ft, v), Xn = a;
            break;
        }
        J.call(
          st,
          y,
          new ne(st, {
            sourceEvent: ft,
            subject: D,
            target: c,
            identifier: N,
            active: Xn,
            x: w[0] + Y,
            y: w[1] + z,
            dx: w[0] - F[0],
            dy: w[1] - F[1],
            dispatch: J
          }),
          E
        );
      };
  }
  return c.filter = function(y) {
    return arguments.length ? (t = typeof y == "function" ? y : rn(!!y), c) : t;
  }, c.container = function(y) {
    return arguments.length ? (n = typeof y == "function" ? y : rn(y), c) : n;
  }, c.subject = function(y) {
    return arguments.length ? (e = typeof y == "function" ? y : rn(y), c) : e;
  }, c.touchable = function(y) {
    return arguments.length ? (r = typeof y == "function" ? y : rn(!!y), c) : r;
  }, c.on = function() {
    var y = o.on.apply(o, arguments);
    return y === o ? c : y;
  }, c.clickDistance = function(y) {
    return arguments.length ? (f = (y = +y) * y, c) : Math.sqrt(f);
  }, c;
}
function Ae(t, n, e) {
  t.prototype = n.prototype = e, e.constructor = t;
}
function ei(t, n) {
  var e = Object.create(t.prototype);
  for (var r in n) e[r] = n[r];
  return e;
}
function Jt() {
}
var Xt = 0.7, mn = 1 / Xt, St = "\\s*([+-]?\\d+)\\s*", Gt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", K = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", us = /^#([0-9a-f]{3,8})$/, ls = new RegExp(`^rgb\\(${St},${St},${St}\\)$`), fs = new RegExp(`^rgb\\(${K},${K},${K}\\)$`), cs = new RegExp(`^rgba\\(${St},${St},${St},${Gt}\\)$`), hs = new RegExp(`^rgba\\(${K},${K},${K},${Gt}\\)$`), ds = new RegExp(`^hsl\\(${Gt},${K},${K}\\)$`), ps = new RegExp(`^hsla\\(${Gt},${K},${K},${Gt}\\)$`), Je = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
Ae(Jt, yt, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Qe,
  // Deprecated! Use color.formatHex.
  formatHex: Qe,
  formatHex8: gs,
  formatHsl: ys,
  formatRgb: je,
  toString: je
});
function Qe() {
  return this.rgb().formatHex();
}
function gs() {
  return this.rgb().formatHex8();
}
function ys() {
  return ri(this).formatHsl();
}
function je() {
  return this.rgb().formatRgb();
}
function yt(t) {
  var n, e;
  return t = (t + "").trim().toLowerCase(), (n = us.exec(t)) ? (e = n[1].length, n = parseInt(n[1], 16), e === 6 ? tr(n) : e === 3 ? new O(n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, (n & 15) << 4 | n & 15, 1) : e === 8 ? on(n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, (n & 255) / 255) : e === 4 ? on(n >> 12 & 15 | n >> 8 & 240, n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, ((n & 15) << 4 | n & 15) / 255) : null) : (n = ls.exec(t)) ? new O(n[1], n[2], n[3], 1) : (n = fs.exec(t)) ? new O(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, 1) : (n = cs.exec(t)) ? on(n[1], n[2], n[3], n[4]) : (n = hs.exec(t)) ? on(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, n[4]) : (n = ds.exec(t)) ? rr(n[1], n[2] / 100, n[3] / 100, 1) : (n = ps.exec(t)) ? rr(n[1], n[2] / 100, n[3] / 100, n[4]) : Je.hasOwnProperty(t) ? tr(Je[t]) : t === "transparent" ? new O(NaN, NaN, NaN, 0) : null;
}
function tr(t) {
  return new O(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function on(t, n, e, r) {
  return r <= 0 && (t = n = e = NaN), new O(t, n, e, r);
}
function _s(t) {
  return t instanceof Jt || (t = yt(t)), t ? (t = t.rgb(), new O(t.r, t.g, t.b, t.opacity)) : new O();
}
function ee(t, n, e, r) {
  return arguments.length === 1 ? _s(t) : new O(t, n, e, r ?? 1);
}
function O(t, n, e, r) {
  this.r = +t, this.g = +n, this.b = +e, this.opacity = +r;
}
Ae(O, ee, ei(Jt, {
  brighter(t) {
    return t = t == null ? mn : Math.pow(mn, t), new O(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Xt : Math.pow(Xt, t), new O(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new O(gt(this.r), gt(this.g), gt(this.b), vn(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: nr,
  // Deprecated! Use color.formatHex.
  formatHex: nr,
  formatHex8: ms,
  formatRgb: er,
  toString: er
}));
function nr() {
  return `#${ht(this.r)}${ht(this.g)}${ht(this.b)}`;
}
function ms() {
  return `#${ht(this.r)}${ht(this.g)}${ht(this.b)}${ht((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function er() {
  const t = vn(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${gt(this.r)}, ${gt(this.g)}, ${gt(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function vn(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function gt(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function ht(t) {
  return t = gt(t), (t < 16 ? "0" : "") + t.toString(16);
}
function rr(t, n, e, r) {
  return r <= 0 ? t = n = e = NaN : e <= 0 || e >= 1 ? t = n = NaN : n <= 0 && (t = NaN), new B(t, n, e, r);
}
function ri(t) {
  if (t instanceof B) return new B(t.h, t.s, t.l, t.opacity);
  if (t instanceof Jt || (t = yt(t)), !t) return new B();
  if (t instanceof B) return t;
  t = t.rgb();
  var n = t.r / 255, e = t.g / 255, r = t.b / 255, i = Math.min(n, e, r), o = Math.max(n, e, r), a = NaN, s = o - i, u = (o + i) / 2;
  return s ? (n === o ? a = (e - r) / s + (e < r) * 6 : e === o ? a = (r - n) / s + 2 : a = (n - e) / s + 4, s /= u < 0.5 ? o + i : 2 - o - i, a *= 60) : s = u > 0 && u < 1 ? 0 : a, new B(a, s, u, t.opacity);
}
function vs(t, n, e, r) {
  return arguments.length === 1 ? ri(t) : new B(t, n, e, r ?? 1);
}
function B(t, n, e, r) {
  this.h = +t, this.s = +n, this.l = +e, this.opacity = +r;
}
Ae(B, vs, ei(Jt, {
  brighter(t) {
    return t = t == null ? mn : Math.pow(mn, t), new B(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Xt : Math.pow(Xt, t), new B(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, n = isNaN(t) || isNaN(this.s) ? 0 : this.s, e = this.l, r = e + (e < 0.5 ? e : 1 - e) * n, i = 2 * e - r;
    return new O(
      Un(t >= 240 ? t - 240 : t + 120, i, r),
      Un(t, i, r),
      Un(t < 120 ? t + 240 : t - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new B(ir(this.h), an(this.s), an(this.l), vn(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = vn(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${ir(this.h)}, ${an(this.s) * 100}%, ${an(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function ir(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function an(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function Un(t, n, e) {
  return (t < 60 ? n + (e - n) * t / 60 : t < 180 ? e : t < 240 ? n + (e - n) * (240 - t) / 60 : n) * 255;
}
const Te = (t) => () => t;
function ws(t, n) {
  return function(e) {
    return t + e * n;
  };
}
function bs(t, n, e) {
  return t = Math.pow(t, e), n = Math.pow(n, e) - t, e = 1 / e, function(r) {
    return Math.pow(t + r * n, e);
  };
}
function xs(t) {
  return (t = +t) == 1 ? ii : function(n, e) {
    return e - n ? bs(n, e, t) : Te(isNaN(n) ? e : n);
  };
}
function ii(t, n) {
  var e = n - t;
  return e ? ws(t, e) : Te(isNaN(t) ? n : t);
}
const wn = function t(n) {
  var e = xs(n);
  function r(i, o) {
    var a = e((i = ee(i)).r, (o = ee(o)).r), s = e(i.g, o.g), u = e(i.b, o.b), l = ii(i.opacity, o.opacity);
    return function(h) {
      return i.r = a(h), i.g = s(h), i.b = u(h), i.opacity = l(h), i + "";
    };
  }
  return r.gamma = t, r;
}(1);
function $s(t, n) {
  n || (n = []);
  var e = t ? Math.min(n.length, t.length) : 0, r = n.slice(), i;
  return function(o) {
    for (i = 0; i < e; ++i) r[i] = t[i] * (1 - o) + n[i] * o;
    return r;
  };
}
function Ms(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function As(t, n) {
  var e = n ? n.length : 0, r = t ? Math.min(e, t.length) : 0, i = new Array(r), o = new Array(e), a;
  for (a = 0; a < r; ++a) i[a] = Se(t[a], n[a]);
  for (; a < e; ++a) o[a] = n[a];
  return function(s) {
    for (a = 0; a < r; ++a) o[a] = i[a](s);
    return o;
  };
}
function Ts(t, n) {
  var e = /* @__PURE__ */ new Date();
  return t = +t, n = +n, function(r) {
    return e.setTime(t * (1 - r) + n * r), e;
  };
}
function q(t, n) {
  return t = +t, n = +n, function(e) {
    return t * (1 - e) + n * e;
  };
}
function Ss(t, n) {
  var e = {}, r = {}, i;
  (t === null || typeof t != "object") && (t = {}), (n === null || typeof n != "object") && (n = {});
  for (i in n)
    i in t ? e[i] = Se(t[i], n[i]) : r[i] = n[i];
  return function(o) {
    for (i in e) r[i] = e[i](o);
    return r;
  };
}
var re = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Yn = new RegExp(re.source, "g");
function Ps(t) {
  return function() {
    return t;
  };
}
function Es(t) {
  return function(n) {
    return t(n) + "";
  };
}
function oi(t, n) {
  var e = re.lastIndex = Yn.lastIndex = 0, r, i, o, a = -1, s = [], u = [];
  for (t = t + "", n = n + ""; (r = re.exec(t)) && (i = Yn.exec(n)); )
    (o = i.index) > e && (o = n.slice(e, o), s[a] ? s[a] += o : s[++a] = o), (r = r[0]) === (i = i[0]) ? s[a] ? s[a] += i : s[++a] = i : (s[++a] = null, u.push({ i: a, x: q(r, i) })), e = Yn.lastIndex;
  return e < n.length && (o = n.slice(e), s[a] ? s[a] += o : s[++a] = o), s.length < 2 ? u[0] ? Es(u[0].x) : Ps(n) : (n = u.length, function(l) {
    for (var h = 0, f; h < n; ++h) s[(f = u[h]).i] = f.x(l);
    return s.join("");
  });
}
function Se(t, n) {
  var e = typeof n, r;
  return n == null || e === "boolean" ? Te(n) : (e === "number" ? q : e === "string" ? (r = yt(n)) ? (n = r, wn) : oi : n instanceof yt ? wn : n instanceof Date ? Ts : Ms(n) ? $s : Array.isArray(n) ? As : typeof n.valueOf != "function" && typeof n.toString != "function" || isNaN(n) ? Ss : q)(t, n);
}
function Ns(t, n) {
  return t = +t, n = +n, function(e) {
    return Math.round(t * (1 - e) + n * e);
  };
}
var or = 180 / Math.PI, ie = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function ai(t, n, e, r, i, o) {
  var a, s, u;
  return (a = Math.sqrt(t * t + n * n)) && (t /= a, n /= a), (u = t * e + n * r) && (e -= t * u, r -= n * u), (s = Math.sqrt(e * e + r * r)) && (e /= s, r /= s, u /= s), t * r < n * e && (t = -t, n = -n, u = -u, a = -a), {
    translateX: i,
    translateY: o,
    rotate: Math.atan2(n, t) * or,
    skewX: Math.atan(u) * or,
    scaleX: a,
    scaleY: s
  };
}
var sn;
function zs(t) {
  const n = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return n.isIdentity ? ie : ai(n.a, n.b, n.c, n.d, n.e, n.f);
}
function Os(t) {
  return t == null || (sn || (sn = document.createElementNS("http://www.w3.org/2000/svg", "g")), sn.setAttribute("transform", t), !(t = sn.transform.baseVal.consolidate())) ? ie : (t = t.matrix, ai(t.a, t.b, t.c, t.d, t.e, t.f));
}
function si(t, n, e, r) {
  function i(l) {
    return l.length ? l.pop() + " " : "";
  }
  function o(l, h, f, c, p, d) {
    if (l !== f || h !== c) {
      var g = p.push("translate(", null, n, null, e);
      d.push({ i: g - 4, x: q(l, f) }, { i: g - 2, x: q(h, c) });
    } else (f || c) && p.push("translate(" + f + n + c + e);
  }
  function a(l, h, f, c) {
    l !== h ? (l - h > 180 ? h += 360 : h - l > 180 && (l += 360), c.push({ i: f.push(i(f) + "rotate(", null, r) - 2, x: q(l, h) })) : h && f.push(i(f) + "rotate(" + h + r);
  }
  function s(l, h, f, c) {
    l !== h ? c.push({ i: f.push(i(f) + "skewX(", null, r) - 2, x: q(l, h) }) : h && f.push(i(f) + "skewX(" + h + r);
  }
  function u(l, h, f, c, p, d) {
    if (l !== f || h !== c) {
      var g = p.push(i(p) + "scale(", null, ",", null, ")");
      d.push({ i: g - 4, x: q(l, f) }, { i: g - 2, x: q(h, c) });
    } else (f !== 1 || c !== 1) && p.push(i(p) + "scale(" + f + "," + c + ")");
  }
  return function(l, h) {
    var f = [], c = [];
    return l = t(l), h = t(h), o(l.translateX, l.translateY, h.translateX, h.translateY, f, c), a(l.rotate, h.rotate, f, c), s(l.skewX, h.skewX, f, c), u(l.scaleX, l.scaleY, h.scaleX, h.scaleY, f, c), l = h = null, function(p) {
      for (var d = -1, g = c.length, b; ++d < g; ) f[(b = c[d]).i] = b.x(p);
      return f.join("");
    };
  };
}
var ks = si(zs, "px, ", "px)", "deg)"), Cs = si(Os, ", ", ")", ")"), Nt = 0, Lt = 0, Rt = 0, ui = 1e3, bn, Dt, xn = 0, _t = 0, Nn = 0, Ut = typeof performance == "object" && performance.now ? performance : Date, li = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function zn() {
  return _t || (li(Rs), _t = Ut.now() + Nn);
}
function Rs() {
  _t = 0;
}
function Yt() {
  this._call = this._time = this._next = null;
}
Yt.prototype = fi.prototype = {
  constructor: Yt,
  restart: function(t, n, e) {
    if (typeof t != "function") throw new TypeError("callback is not a function");
    e = (e == null ? zn() : +e) + (n == null ? 0 : +n), !this._next && Dt !== this && (Dt ? Dt._next = this : bn = this, Dt = this), this._call = t, this._time = e, oe();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, oe());
  }
};
function fi(t, n, e) {
  var r = new Yt();
  return r.restart(t, n, e), r;
}
function Is() {
  zn(), ++Nt;
  for (var t = bn, n; t; )
    (n = _t - t._time) >= 0 && t._call.call(void 0, n), t = t._next;
  --Nt;
}
function ar() {
  _t = (xn = Ut.now()) + Nn, Nt = Lt = 0;
  try {
    Is();
  } finally {
    Nt = 0, Ls(), _t = 0;
  }
}
function Fs() {
  var t = Ut.now(), n = t - xn;
  n > ui && (Nn -= n, xn = t);
}
function Ls() {
  for (var t, n = bn, e, r = 1 / 0; n; )
    n._call ? (r > n._time && (r = n._time), t = n, n = n._next) : (e = n._next, n._next = null, n = t ? t._next = e : bn = e);
  Dt = t, oe(r);
}
function oe(t) {
  if (!Nt) {
    Lt && (Lt = clearTimeout(Lt));
    var n = t - _t;
    n > 24 ? (t < 1 / 0 && (Lt = setTimeout(ar, t - Ut.now() - Nn)), Rt && (Rt = clearInterval(Rt))) : (Rt || (xn = Ut.now(), Rt = setInterval(Fs, ui)), Nt = 1, li(ar));
  }
}
function sr(t, n, e) {
  var r = new Yt();
  return n = n == null ? 0 : +n, r.restart((i) => {
    r.stop(), t(i + n);
  }, n, e), r;
}
function Ds(t, n, e) {
  var r = new Yt(), i = n;
  return r._restart = r.restart, r.restart = function(o, a, s) {
    a = +a, s = s == null ? zn() : +s, r._restart(function u(l) {
      l += i, r._restart(u, i += a, s), o(l);
    }, a, s);
  }, r.restart(t, n, e), r;
}
var qs = xe("start", "end", "cancel", "interrupt"), Hs = [], ci = 0, ur = 1, ae = 2, hn = 3, lr = 4, se = 5, dn = 6;
function On(t, n, e, r, i, o) {
  var a = t.__transition;
  if (!a) t.__transition = {};
  else if (e in a) return;
  Bs(t, e, {
    name: n,
    index: r,
    // For context during callback.
    group: i,
    // For context during callback.
    on: qs,
    tween: Hs,
    time: o.time,
    delay: o.delay,
    duration: o.duration,
    ease: o.ease,
    timer: null,
    state: ci
  });
}
function Pe(t, n) {
  var e = X(t, n);
  if (e.state > ci) throw new Error("too late; already scheduled");
  return e;
}
function Z(t, n) {
  var e = X(t, n);
  if (e.state > hn) throw new Error("too late; already running");
  return e;
}
function X(t, n) {
  var e = t.__transition;
  if (!e || !(e = e[n])) throw new Error("transition not found");
  return e;
}
function Bs(t, n, e) {
  var r = t.__transition, i;
  r[n] = e, e.timer = fi(o, 0, e.time);
  function o(l) {
    e.state = ur, e.timer.restart(a, e.delay, e.time), e.delay <= l && a(l - e.delay);
  }
  function a(l) {
    var h, f, c, p;
    if (e.state !== ur) return u();
    for (h in r)
      if (p = r[h], p.name === e.name) {
        if (p.state === hn) return sr(a);
        p.state === lr ? (p.state = dn, p.timer.stop(), p.on.call("interrupt", t, t.__data__, p.index, p.group), delete r[h]) : +h < n && (p.state = dn, p.timer.stop(), p.on.call("cancel", t, t.__data__, p.index, p.group), delete r[h]);
      }
    if (sr(function() {
      e.state === hn && (e.state = lr, e.timer.restart(s, e.delay, e.time), s(l));
    }), e.state = ae, e.on.call("start", t, t.__data__, e.index, e.group), e.state === ae) {
      for (e.state = hn, i = new Array(c = e.tween.length), h = 0, f = -1; h < c; ++h)
        (p = e.tween[h].value.call(t, t.__data__, e.index, e.group)) && (i[++f] = p);
      i.length = f + 1;
    }
  }
  function s(l) {
    for (var h = l < e.duration ? e.ease.call(null, l / e.duration) : (e.timer.restart(u), e.state = se, 1), f = -1, c = i.length; ++f < c; )
      i[f].call(t, h);
    e.state === se && (e.on.call("end", t, t.__data__, e.index, e.group), u());
  }
  function u() {
    e.state = dn, e.timer.stop(), delete r[n];
    for (var l in r) return;
    delete t.__transition;
  }
}
function Xs(t, n) {
  var e = t.__transition, r, i, o = !0, a;
  if (e) {
    n = n == null ? null : n + "";
    for (a in e) {
      if ((r = e[a]).name !== n) {
        o = !1;
        continue;
      }
      i = r.state > ae && r.state < se, r.state = dn, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete e[a];
    }
    o && delete t.__transition;
  }
}
function Gs(t) {
  return this.each(function() {
    Xs(this, t);
  });
}
function Us(t, n) {
  var e, r;
  return function() {
    var i = Z(this, t), o = i.tween;
    if (o !== e) {
      r = e = o;
      for (var a = 0, s = r.length; a < s; ++a)
        if (r[a].name === n) {
          r = r.slice(), r.splice(a, 1);
          break;
        }
    }
    i.tween = r;
  };
}
function Ys(t, n, e) {
  var r, i;
  if (typeof e != "function") throw new Error();
  return function() {
    var o = Z(this, t), a = o.tween;
    if (a !== r) {
      i = (r = a).slice();
      for (var s = { name: n, value: e }, u = 0, l = i.length; u < l; ++u)
        if (i[u].name === n) {
          i[u] = s;
          break;
        }
      u === l && i.push(s);
    }
    o.tween = i;
  };
}
function Ks(t, n) {
  var e = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = X(this.node(), e).tween, i = 0, o = r.length, a; i < o; ++i)
      if ((a = r[i]).name === t)
        return a.value;
    return null;
  }
  return this.each((n == null ? Us : Ys)(e, t, n));
}
function Ee(t, n, e) {
  var r = t._id;
  return t.each(function() {
    var i = Z(this, r);
    (i.value || (i.value = {}))[n] = e.apply(this, arguments);
  }), function(i) {
    return X(i, r).value[n];
  };
}
function hi(t, n) {
  var e;
  return (typeof n == "number" ? q : n instanceof yt ? wn : (e = yt(n)) ? (n = e, wn) : oi)(t, n);
}
function Vs(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Ws(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Zs(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var a = this.getAttribute(t);
    return a === i ? null : a === r ? o : o = n(r = a, e);
  };
}
function Js(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var a = this.getAttributeNS(t.space, t.local);
    return a === i ? null : a === r ? o : o = n(r = a, e);
  };
}
function Qs(t, n, e) {
  var r, i, o;
  return function() {
    var a, s = e(this), u;
    return s == null ? void this.removeAttribute(t) : (a = this.getAttribute(t), u = s + "", a === u ? null : a === r && u === i ? o : (i = u, o = n(r = a, s)));
  };
}
function js(t, n, e) {
  var r, i, o;
  return function() {
    var a, s = e(this), u;
    return s == null ? void this.removeAttributeNS(t.space, t.local) : (a = this.getAttributeNS(t.space, t.local), u = s + "", a === u ? null : a === r && u === i ? o : (i = u, o = n(r = a, s)));
  };
}
function tu(t, n) {
  var e = En(t), r = e === "transform" ? Cs : hi;
  return this.attrTween(t, typeof n == "function" ? (e.local ? js : Qs)(e, r, Ee(this, "attr." + t, n)) : n == null ? (e.local ? Ws : Vs)(e) : (e.local ? Js : Zs)(e, r, n));
}
function nu(t, n) {
  return function(e) {
    this.setAttribute(t, n.call(this, e));
  };
}
function eu(t, n) {
  return function(e) {
    this.setAttributeNS(t.space, t.local, n.call(this, e));
  };
}
function ru(t, n) {
  var e, r;
  function i() {
    var o = n.apply(this, arguments);
    return o !== r && (e = (r = o) && eu(t, o)), e;
  }
  return i._value = n, i;
}
function iu(t, n) {
  var e, r;
  function i() {
    var o = n.apply(this, arguments);
    return o !== r && (e = (r = o) && nu(t, o)), e;
  }
  return i._value = n, i;
}
function ou(t, n) {
  var e = "attr." + t;
  if (arguments.length < 2) return (e = this.tween(e)) && e._value;
  if (n == null) return this.tween(e, null);
  if (typeof n != "function") throw new Error();
  var r = En(t);
  return this.tween(e, (r.local ? ru : iu)(r, n));
}
function au(t, n) {
  return function() {
    Pe(this, t).delay = +n.apply(this, arguments);
  };
}
function su(t, n) {
  return n = +n, function() {
    Pe(this, t).delay = n;
  };
}
function uu(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? au : su)(n, t)) : X(this.node(), n).delay;
}
function lu(t, n) {
  return function() {
    Z(this, t).duration = +n.apply(this, arguments);
  };
}
function fu(t, n) {
  return n = +n, function() {
    Z(this, t).duration = n;
  };
}
function cu(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? lu : fu)(n, t)) : X(this.node(), n).duration;
}
function hu(t, n) {
  if (typeof n != "function") throw new Error();
  return function() {
    Z(this, t).ease = n;
  };
}
function du(t) {
  var n = this._id;
  return arguments.length ? this.each(hu(n, t)) : X(this.node(), n).ease;
}
function pu(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    if (typeof e != "function") throw new Error();
    Z(this, t).ease = e;
  };
}
function gu(t) {
  if (typeof t != "function") throw new Error();
  return this.each(pu(this._id, t));
}
function yu(t) {
  typeof t != "function" && (t = Yr(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], a = o.length, s = r[i] = [], u, l = 0; l < a; ++l)
      (u = o[l]) && t.call(u, u.__data__, l, o) && s.push(u);
  return new et(r, this._parents, this._name, this._id);
}
function _u(t) {
  if (t._id !== this._id) throw new Error();
  for (var n = this._groups, e = t._groups, r = n.length, i = e.length, o = Math.min(r, i), a = new Array(r), s = 0; s < o; ++s)
    for (var u = n[s], l = e[s], h = u.length, f = a[s] = new Array(h), c, p = 0; p < h; ++p)
      (c = u[p] || l[p]) && (f[p] = c);
  for (; s < r; ++s)
    a[s] = n[s];
  return new et(a, this._parents, this._name, this._id);
}
function mu(t) {
  return (t + "").trim().split(/^|\s+/).every(function(n) {
    var e = n.indexOf(".");
    return e >= 0 && (n = n.slice(0, e)), !n || n === "start";
  });
}
function vu(t, n, e) {
  var r, i, o = mu(n) ? Pe : Z;
  return function() {
    var a = o(this, t), s = a.on;
    s !== r && (i = (r = s).copy()).on(n, e), a.on = i;
  };
}
function wu(t, n) {
  var e = this._id;
  return arguments.length < 2 ? X(this.node(), e).on.on(t) : this.each(vu(e, t, n));
}
function bu(t) {
  return function() {
    var n = this.parentNode;
    for (var e in this.__transition) if (+e !== t) return;
    n && n.removeChild(this);
  };
}
function xu() {
  return this.on("end.remove", bu(this._id));
}
function $u(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = $e(t));
  for (var r = this._groups, i = r.length, o = new Array(i), a = 0; a < i; ++a)
    for (var s = r[a], u = s.length, l = o[a] = new Array(u), h, f, c = 0; c < u; ++c)
      (h = s[c]) && (f = t.call(h, h.__data__, c, s)) && ("__data__" in h && (f.__data__ = h.__data__), l[c] = f, On(l[c], n, e, c, l, X(h, e)));
  return new et(o, this._parents, n, e);
}
function Mu(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = Ur(t));
  for (var r = this._groups, i = r.length, o = [], a = [], s = 0; s < i; ++s)
    for (var u = r[s], l = u.length, h, f = 0; f < l; ++f)
      if (h = u[f]) {
        for (var c = t.call(h, h.__data__, f, u), p, d = X(h, e), g = 0, b = c.length; g < b; ++g)
          (p = c[g]) && On(p, n, e, g, c, d);
        o.push(c), a.push(h);
      }
  return new et(o, a, n, e);
}
var Au = Zt.prototype.constructor;
function Tu() {
  return new Au(this._groups, this._parents);
}
function Su(t, n) {
  var e, r, i;
  return function() {
    var o = Et(this, t), a = (this.style.removeProperty(t), Et(this, t));
    return o === a ? null : o === e && a === r ? i : i = n(e = o, r = a);
  };
}
function di(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Pu(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var a = Et(this, t);
    return a === i ? null : a === r ? o : o = n(r = a, e);
  };
}
function Eu(t, n, e) {
  var r, i, o;
  return function() {
    var a = Et(this, t), s = e(this), u = s + "";
    return s == null && (u = s = (this.style.removeProperty(t), Et(this, t))), a === u ? null : a === r && u === i ? o : (i = u, o = n(r = a, s));
  };
}
function Nu(t, n) {
  var e, r, i, o = "style." + n, a = "end." + o, s;
  return function() {
    var u = Z(this, t), l = u.on, h = u.value[o] == null ? s || (s = di(n)) : void 0;
    (l !== e || i !== h) && (r = (e = l).copy()).on(a, i = h), u.on = r;
  };
}
function zu(t, n, e) {
  var r = (t += "") == "transform" ? ks : hi;
  return n == null ? this.styleTween(t, Su(t, r)).on("end.style." + t, di(t)) : typeof n == "function" ? this.styleTween(t, Eu(t, r, Ee(this, "style." + t, n))).each(Nu(this._id, t)) : this.styleTween(t, Pu(t, r, n), e).on("end.style." + t, null);
}
function Ou(t, n, e) {
  return function(r) {
    this.style.setProperty(t, n.call(this, r), e);
  };
}
function ku(t, n, e) {
  var r, i;
  function o() {
    var a = n.apply(this, arguments);
    return a !== i && (r = (i = a) && Ou(t, a, e)), r;
  }
  return o._value = n, o;
}
function Cu(t, n, e) {
  var r = "style." + (t += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (n == null) return this.tween(r, null);
  if (typeof n != "function") throw new Error();
  return this.tween(r, ku(t, n, e ?? ""));
}
function Ru(t) {
  return function() {
    this.textContent = t;
  };
}
function Iu(t) {
  return function() {
    var n = t(this);
    this.textContent = n ?? "";
  };
}
function Fu(t) {
  return this.tween("text", typeof t == "function" ? Iu(Ee(this, "text", t)) : Ru(t == null ? "" : t + ""));
}
function Lu(t) {
  return function(n) {
    this.textContent = t.call(this, n);
  };
}
function Du(t) {
  var n, e;
  function r() {
    var i = t.apply(this, arguments);
    return i !== e && (n = (e = i) && Lu(i)), n;
  }
  return r._value = t, r;
}
function qu(t) {
  var n = "text";
  if (arguments.length < 1) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  return this.tween(n, Du(t));
}
function Hu() {
  for (var t = this._name, n = this._id, e = pi(), r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var a = r[o], s = a.length, u, l = 0; l < s; ++l)
      if (u = a[l]) {
        var h = X(u, n);
        On(u, t, e, l, a, {
          time: h.time + h.delay + h.duration,
          delay: 0,
          duration: h.duration,
          ease: h.ease
        });
      }
  return new et(r, this._parents, t, e);
}
function Bu() {
  var t, n, e = this, r = e._id, i = e.size();
  return new Promise(function(o, a) {
    var s = { value: a }, u = { value: function() {
      --i === 0 && o();
    } };
    e.each(function() {
      var l = Z(this, r), h = l.on;
      h !== t && (n = (t = h).copy(), n._.cancel.push(s), n._.interrupt.push(s), n._.end.push(u)), l.on = n;
    }), i === 0 && o();
  });
}
var Xu = 0;
function et(t, n, e, r) {
  this._groups = t, this._parents = n, this._name = e, this._id = r;
}
function pi() {
  return ++Xu;
}
var Q = Zt.prototype;
et.prototype = {
  constructor: et,
  select: $u,
  selectAll: Mu,
  selectChild: Q.selectChild,
  selectChildren: Q.selectChildren,
  filter: yu,
  merge: _u,
  selection: Tu,
  transition: Hu,
  call: Q.call,
  nodes: Q.nodes,
  node: Q.node,
  size: Q.size,
  empty: Q.empty,
  each: Q.each,
  on: wu,
  attr: tu,
  attrTween: ou,
  style: zu,
  styleTween: Cu,
  text: Fu,
  textTween: qu,
  remove: xu,
  tween: Ks,
  delay: uu,
  duration: cu,
  ease: du,
  easeVarying: gu,
  end: Bu,
  [Symbol.iterator]: Q[Symbol.iterator]
};
function Gu(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var Uu = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Gu
};
function Yu(t, n) {
  for (var e; !(e = t.__transition) || !(e = e[n]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${n} not found`);
  return e;
}
function Ku(t) {
  var n, e;
  t instanceof et ? (n = t._id, t = t._name) : (n = pi(), (e = Uu).time = zn(), t = t == null ? null : t + "");
  for (var r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var a = r[o], s = a.length, u, l = 0; l < s; ++l)
      (u = a[l]) && On(u, t, n, l, a, e || Yu(u, n));
  return new et(r, this._parents, t, n);
}
Zt.prototype.interrupt = Gs;
Zt.prototype.transition = Ku;
const ue = Math.PI, le = 2 * ue, ct = 1e-6, Vu = le - ct;
function gi(t) {
  this._ += t[0];
  for (let n = 1, e = t.length; n < e; ++n)
    this._ += arguments[n] + t[n];
}
function Wu(t) {
  let n = Math.floor(t);
  if (!(n >= 0)) throw new Error(`invalid digits: ${t}`);
  if (n > 15) return gi;
  const e = 10 ** n;
  return function(r) {
    this._ += r[0];
    for (let i = 1, o = r.length; i < o; ++i)
      this._ += Math.round(arguments[i] * e) / e + r[i];
  };
}
class yi {
  constructor(n) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = n == null ? gi : Wu(n);
  }
  moveTo(n, e) {
    this._append`M${this._x0 = this._x1 = +n},${this._y0 = this._y1 = +e}`;
  }
  closePath() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
  }
  lineTo(n, e) {
    this._append`L${this._x1 = +n},${this._y1 = +e}`;
  }
  quadraticCurveTo(n, e, r, i) {
    this._append`Q${+n},${+e},${this._x1 = +r},${this._y1 = +i}`;
  }
  bezierCurveTo(n, e, r, i, o, a) {
    this._append`C${+n},${+e},${+r},${+i},${this._x1 = +o},${this._y1 = +a}`;
  }
  arcTo(n, e, r, i, o) {
    if (n = +n, e = +e, r = +r, i = +i, o = +o, o < 0) throw new Error(`negative radius: ${o}`);
    let a = this._x1, s = this._y1, u = r - n, l = i - e, h = a - n, f = s - e, c = h * h + f * f;
    if (this._x1 === null)
      this._append`M${this._x1 = n},${this._y1 = e}`;
    else if (c > ct) if (!(Math.abs(f * u - l * h) > ct) || !o)
      this._append`L${this._x1 = n},${this._y1 = e}`;
    else {
      let p = r - a, d = i - s, g = u * u + l * l, b = p * p + d * d, _ = Math.sqrt(g), $ = Math.sqrt(c), T = o * Math.tan((ue - Math.acos((g + c - b) / (2 * _ * $))) / 2), y = T / $, v = T / _;
      Math.abs(y - 1) > ct && this._append`L${n + y * h},${e + y * f}`, this._append`A${o},${o},0,0,${+(f * p > h * d)},${this._x1 = n + v * u},${this._y1 = e + v * l}`;
    }
  }
  arc(n, e, r, i, o, a) {
    if (n = +n, e = +e, r = +r, a = !!a, r < 0) throw new Error(`negative radius: ${r}`);
    let s = r * Math.cos(i), u = r * Math.sin(i), l = n + s, h = e + u, f = 1 ^ a, c = a ? i - o : o - i;
    this._x1 === null ? this._append`M${l},${h}` : (Math.abs(this._x1 - l) > ct || Math.abs(this._y1 - h) > ct) && this._append`L${l},${h}`, r && (c < 0 && (c = c % le + le), c > Vu ? this._append`A${r},${r},0,1,${f},${n - s},${e - u}A${r},${r},0,1,${f},${this._x1 = l},${this._y1 = h}` : c > ct && this._append`A${r},${r},0,${+(c >= ue)},${f},${this._x1 = n + r * Math.cos(o)},${this._y1 = e + r * Math.sin(o)}`);
  }
  rect(n, e, r, i) {
    this._append`M${this._x0 = this._x1 = +n},${this._y0 = this._y1 = +e}h${r = +r}v${+i}h${-r}Z`;
  }
  toString() {
    return this._;
  }
}
function G() {
  return new yi();
}
G.prototype = yi.prototype;
function Zu(t) {
  return Math.abs(t = Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10);
}
function $n(t, n) {
  if ((e = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf("e")) < 0) return null;
  var e, r = t.slice(0, e);
  return [
    r.length > 1 ? r[0] + r.slice(2) : r,
    +t.slice(e + 1)
  ];
}
function zt(t) {
  return t = $n(Math.abs(t)), t ? t[1] : NaN;
}
function Ju(t, n) {
  return function(e, r) {
    for (var i = e.length, o = [], a = 0, s = t[0], u = 0; i > 0 && s > 0 && (u + s + 1 > r && (s = Math.max(1, r - u)), o.push(e.substring(i -= s, i + s)), !((u += s + 1) > r)); )
      s = t[a = (a + 1) % t.length];
    return o.reverse().join(n);
  };
}
function Qu(t) {
  return function(n) {
    return n.replace(/[0-9]/g, function(e) {
      return t[+e];
    });
  };
}
var ju = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Mn(t) {
  if (!(n = ju.exec(t))) throw new Error("invalid format: " + t);
  var n;
  return new Ne({
    fill: n[1],
    align: n[2],
    sign: n[3],
    symbol: n[4],
    zero: n[5],
    width: n[6],
    comma: n[7],
    precision: n[8] && n[8].slice(1),
    trim: n[9],
    type: n[10]
  });
}
Mn.prototype = Ne.prototype;
function Ne(t) {
  this.fill = t.fill === void 0 ? " " : t.fill + "", this.align = t.align === void 0 ? ">" : t.align + "", this.sign = t.sign === void 0 ? "-" : t.sign + "", this.symbol = t.symbol === void 0 ? "" : t.symbol + "", this.zero = !!t.zero, this.width = t.width === void 0 ? void 0 : +t.width, this.comma = !!t.comma, this.precision = t.precision === void 0 ? void 0 : +t.precision, this.trim = !!t.trim, this.type = t.type === void 0 ? "" : t.type + "";
}
Ne.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function tl(t) {
  t: for (var n = t.length, e = 1, r = -1, i; e < n; ++e)
    switch (t[e]) {
      case ".":
        r = i = e;
        break;
      case "0":
        r === 0 && (r = e), i = e;
        break;
      default:
        if (!+t[e]) break t;
        r > 0 && (r = 0);
        break;
    }
  return r > 0 ? t.slice(0, r) + t.slice(i + 1) : t;
}
var _i;
function nl(t, n) {
  var e = $n(t, n);
  if (!e) return t + "";
  var r = e[0], i = e[1], o = i - (_i = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, a = r.length;
  return o === a ? r : o > a ? r + new Array(o - a + 1).join("0") : o > 0 ? r.slice(0, o) + "." + r.slice(o) : "0." + new Array(1 - o).join("0") + $n(t, Math.max(0, n + o - 1))[0];
}
function fr(t, n) {
  var e = $n(t, n);
  if (!e) return t + "";
  var r = e[0], i = e[1];
  return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0");
}
const cr = {
  "%": (t, n) => (t * 100).toFixed(n),
  b: (t) => Math.round(t).toString(2),
  c: (t) => t + "",
  d: Zu,
  e: (t, n) => t.toExponential(n),
  f: (t, n) => t.toFixed(n),
  g: (t, n) => t.toPrecision(n),
  o: (t) => Math.round(t).toString(8),
  p: (t, n) => fr(t * 100, n),
  r: fr,
  s: nl,
  X: (t) => Math.round(t).toString(16).toUpperCase(),
  x: (t) => Math.round(t).toString(16)
};
function hr(t) {
  return t;
}
var dr = Array.prototype.map, pr = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function el(t) {
  var n = t.grouping === void 0 || t.thousands === void 0 ? hr : Ju(dr.call(t.grouping, Number), t.thousands + ""), e = t.currency === void 0 ? "" : t.currency[0] + "", r = t.currency === void 0 ? "" : t.currency[1] + "", i = t.decimal === void 0 ? "." : t.decimal + "", o = t.numerals === void 0 ? hr : Qu(dr.call(t.numerals, String)), a = t.percent === void 0 ? "%" : t.percent + "", s = t.minus === void 0 ? "−" : t.minus + "", u = t.nan === void 0 ? "NaN" : t.nan + "";
  function l(f) {
    f = Mn(f);
    var c = f.fill, p = f.align, d = f.sign, g = f.symbol, b = f.zero, _ = f.width, $ = f.comma, T = f.precision, y = f.trim, v = f.type;
    v === "n" ? ($ = !0, v = "g") : cr[v] || (T === void 0 && (T = 12), y = !0, v = "g"), (b || c === "0" && p === "=") && (b = !0, c = "0", p = "=");
    var P = g === "$" ? e : g === "#" && /[boxX]/.test(v) ? "0" + v.toLowerCase() : "", E = g === "$" ? r : /[%p]/.test(v) ? a : "", N = cr[v], U = /[defgprs%]/.test(v);
    T = T === void 0 ? 6 : /[gprs]/.test(v) ? Math.max(1, Math.min(21, T)) : Math.max(0, Math.min(20, T));
    function J(w) {
      var Y = P, z = E, D, nn, st;
      if (v === "c")
        z = N(w) + z, w = "";
      else {
        w = +w;
        var ft = w < 0 || 1 / w < 0;
        if (w = isNaN(w) ? u : N(Math.abs(w), T), y && (w = tl(w)), ft && +w == 0 && d !== "+" && (ft = !1), Y = (ft ? d === "(" ? d : s : d === "-" || d === "(" ? "" : d) + Y, z = (v === "s" ? pr[8 + _i / 3] : "") + z + (ft && d === "(" ? ")" : ""), U) {
          for (D = -1, nn = w.length; ++D < nn; )
            if (st = w.charCodeAt(D), 48 > st || st > 57) {
              z = (st === 46 ? i + w.slice(D + 1) : w.slice(D)) + z, w = w.slice(0, D);
              break;
            }
        }
      }
      $ && !b && (w = n(w, 1 / 0));
      var $t = Y.length + w.length + z.length, F = $t < _ ? new Array(_ - $t + 1).join(c) : "";
      switch ($ && b && (w = n(F + w, F.length ? _ - z.length : 1 / 0), F = ""), p) {
        case "<":
          w = Y + w + z + F;
          break;
        case "=":
          w = Y + F + w + z;
          break;
        case "^":
          w = F.slice(0, $t = F.length >> 1) + Y + w + z + F.slice($t);
          break;
        default:
          w = F + Y + w + z;
          break;
      }
      return o(w);
    }
    return J.toString = function() {
      return f + "";
    }, J;
  }
  function h(f, c) {
    var p = l((f = Mn(f), f.type = "f", f)), d = Math.max(-8, Math.min(8, Math.floor(zt(c) / 3))) * 3, g = Math.pow(10, -d), b = pr[8 + d / 3];
    return function(_) {
      return p(g * _) + b;
    };
  }
  return {
    format: l,
    formatPrefix: h
  };
}
var un, kt, mi;
rl({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function rl(t) {
  return un = el(t), kt = un.format, mi = un.formatPrefix, un;
}
function il(t) {
  return Math.max(0, -zt(Math.abs(t)));
}
function ol(t, n) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(zt(n) / 3))) * 3 - zt(Math.abs(t)));
}
function al(t, n) {
  return t = Math.abs(t), n = Math.abs(n) - t, Math.max(0, zt(n) - zt(t)) + 1;
}
function sl(t, n) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(t);
      break;
    default:
      this.range(n).domain(t);
      break;
  }
  return this;
}
function ul(t) {
  return function() {
    return t;
  };
}
function ll(t) {
  return +t;
}
var gr = [0, 1];
function Mt(t) {
  return t;
}
function fe(t, n) {
  return (n -= t = +t) ? function(e) {
    return (e - t) / n;
  } : ul(isNaN(n) ? NaN : 0.5);
}
function fl(t, n) {
  var e;
  return t > n && (e = t, t = n, n = e), function(r) {
    return Math.max(t, Math.min(n, r));
  };
}
function cl(t, n, e) {
  var r = t[0], i = t[1], o = n[0], a = n[1];
  return i < r ? (r = fe(i, r), o = e(a, o)) : (r = fe(r, i), o = e(o, a)), function(s) {
    return o(r(s));
  };
}
function hl(t, n, e) {
  var r = Math.min(t.length, n.length) - 1, i = new Array(r), o = new Array(r), a = -1;
  for (t[r] < t[0] && (t = t.slice().reverse(), n = n.slice().reverse()); ++a < r; )
    i[a] = fe(t[a], t[a + 1]), o[a] = e(n[a], n[a + 1]);
  return function(s) {
    var u = fo(t, s, 1, r) - 1;
    return o[u](i[u](s));
  };
}
function dl(t, n) {
  return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown());
}
function pl() {
  var t = gr, n = gr, e = Se, r, i, o, a = Mt, s, u, l;
  function h() {
    var c = Math.min(t.length, n.length);
    return a !== Mt && (a = fl(t[0], t[c - 1])), s = c > 2 ? hl : cl, u = l = null, f;
  }
  function f(c) {
    return c == null || isNaN(c = +c) ? o : (u || (u = s(t.map(r), n, e)))(r(a(c)));
  }
  return f.invert = function(c) {
    return a(i((l || (l = s(n, t.map(r), q)))(c)));
  }, f.domain = function(c) {
    return arguments.length ? (t = Array.from(c, ll), h()) : t.slice();
  }, f.range = function(c) {
    return arguments.length ? (n = Array.from(c), h()) : n.slice();
  }, f.rangeRound = function(c) {
    return n = Array.from(c), e = Ns, h();
  }, f.clamp = function(c) {
    return arguments.length ? (a = c ? !0 : Mt, h()) : a !== Mt;
  }, f.interpolate = function(c) {
    return arguments.length ? (e = c, h()) : e;
  }, f.unknown = function(c) {
    return arguments.length ? (o = c, f) : o;
  }, function(c, p) {
    return r = c, i = p, h();
  };
}
function gl() {
  return pl()(Mt, Mt);
}
function yl(t, n, e, r) {
  var i = yo(t, n, e), o;
  switch (r = Mn(r ?? ",f"), r.type) {
    case "s": {
      var a = Math.max(Math.abs(t), Math.abs(n));
      return r.precision == null && !isNaN(o = ol(i, a)) && (r.precision = o), mi(r, a);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      r.precision == null && !isNaN(o = al(i, Math.max(Math.abs(t), Math.abs(n)))) && (r.precision = o - (r.type === "e"));
      break;
    }
    case "f":
    case "%": {
      r.precision == null && !isNaN(o = il(i)) && (r.precision = o - (r.type === "%") * 2);
      break;
    }
  }
  return kt(r);
}
function _l(t) {
  var n = t.domain;
  return t.ticks = function(e) {
    var r = n();
    return go(r[0], r[r.length - 1], e ?? 10);
  }, t.tickFormat = function(e, r) {
    var i = n();
    return yl(i[0], i[i.length - 1], e ?? 10, r);
  }, t.nice = function(e) {
    e == null && (e = 10);
    var r = n(), i = 0, o = r.length - 1, a = r[i], s = r[o], u, l, h = 10;
    for (s < a && (l = a, a = s, s = l, l = i, i = o, o = l); h-- > 0; ) {
      if (l = Qn(a, s, e), l === u)
        return r[i] = a, r[o] = s, n(r);
      if (l > 0)
        a = Math.floor(a / l) * l, s = Math.ceil(s / l) * l;
      else if (l < 0)
        a = Math.ceil(a * l) / l, s = Math.floor(s * l) / l;
      else
        break;
      u = l;
    }
    return t;
  }, t;
}
function V() {
  var t = gl();
  return t.copy = function() {
    return dl(t, V());
  }, sl.apply(t, arguments), _l(t);
}
function qt(t, n, e) {
  this.k = t, this.x = n, this.y = e;
}
qt.prototype = {
  constructor: qt,
  scale: function(t) {
    return t === 1 ? this : new qt(this.k * t, this.x, this.y);
  },
  translate: function(t, n) {
    return t === 0 & n === 0 ? this : new qt(this.k, this.x + this.k * t, this.y + this.k * n);
  },
  apply: function(t) {
    return [t[0] * this.k + this.x, t[1] * this.k + this.y];
  },
  applyX: function(t) {
    return t * this.k + this.x;
  },
  applyY: function(t) {
    return t * this.k + this.y;
  },
  invert: function(t) {
    return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k];
  },
  invertX: function(t) {
    return (t - this.x) / this.k;
  },
  invertY: function(t) {
    return (t - this.y) / this.k;
  },
  rescaleX: function(t) {
    return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t));
  },
  rescaleY: function(t) {
    return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
qt.prototype;
var vi = typeof global == "object" && global && global.Object === Object && global, ml = typeof self == "object" && self && self.Object === Object && self, it = vi || ml || Function("return this")(), W = it.Symbol, wi = Object.prototype, vl = wi.hasOwnProperty, wl = wi.toString, It = W ? W.toStringTag : void 0;
function bl(t) {
  var n = vl.call(t, It), e = t[It];
  try {
    t[It] = void 0;
    var r = !0;
  } catch {
  }
  var i = wl.call(t);
  return r && (n ? t[It] = e : delete t[It]), i;
}
var xl = Object.prototype, $l = xl.toString;
function Ml(t) {
  return $l.call(t);
}
var Al = "[object Null]", Tl = "[object Undefined]", yr = W ? W.toStringTag : void 0;
function wt(t) {
  return t == null ? t === void 0 ? Tl : Al : yr && yr in Object(t) ? bl(t) : Ml(t);
}
function lt(t) {
  return t != null && typeof t == "object";
}
var Sl = "[object Symbol]";
function Ot(t) {
  return typeof t == "symbol" || lt(t) && wt(t) == Sl;
}
function ut(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length, i = Array(r); ++e < r; )
    i[e] = n(t[e], e, t);
  return i;
}
var k = Array.isArray, _r = W ? W.prototype : void 0, mr = _r ? _r.toString : void 0;
function bi(t) {
  if (typeof t == "string")
    return t;
  if (k(t))
    return ut(t, bi) + "";
  if (Ot(t))
    return mr ? mr.call(t) : "";
  var n = t + "";
  return n == "0" && 1 / t == -1 / 0 ? "-0" : n;
}
var Pl = /\s/;
function El(t) {
  for (var n = t.length; n-- && Pl.test(t.charAt(n)); )
    ;
  return n;
}
var Nl = /^\s+/;
function zl(t) {
  return t && t.slice(0, El(t) + 1).replace(Nl, "");
}
function rt(t) {
  var n = typeof t;
  return t != null && (n == "object" || n == "function");
}
var vr = NaN, Ol = /^[-+]0x[0-9a-f]+$/i, kl = /^0b[01]+$/i, Cl = /^0o[0-7]+$/i, Rl = parseInt;
function Il(t) {
  if (typeof t == "number")
    return t;
  if (Ot(t))
    return vr;
  if (rt(t)) {
    var n = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = rt(n) ? n + "" : n;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = zl(t);
  var e = kl.test(t);
  return e || Cl.test(t) ? Rl(t.slice(2), e ? 2 : 8) : Ol.test(t) ? vr : +t;
}
var Fl = 1 / 0, Ll = 17976931348623157e292;
function Kn(t) {
  if (!t)
    return t === 0 ? t : 0;
  if (t = Il(t), t === Fl || t === -1 / 0) {
    var n = t < 0 ? -1 : 1;
    return n * Ll;
  }
  return t === t ? t : 0;
}
function Qt(t) {
  return t;
}
var Dl = "[object AsyncFunction]", ql = "[object Function]", Hl = "[object GeneratorFunction]", Bl = "[object Proxy]";
function xi(t) {
  if (!rt(t))
    return !1;
  var n = wt(t);
  return n == ql || n == Hl || n == Dl || n == Bl;
}
var Vn = it["__core-js_shared__"], wr = function() {
  var t = /[^.]+$/.exec(Vn && Vn.keys && Vn.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
function Xl(t) {
  return !!wr && wr in t;
}
var Gl = Function.prototype, Ul = Gl.toString;
function bt(t) {
  if (t != null) {
    try {
      return Ul.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var Yl = /[\\^$.*+?()[\]{}|]/g, Kl = /^\[object .+?Constructor\]$/, Vl = Function.prototype, Wl = Object.prototype, Zl = Vl.toString, Jl = Wl.hasOwnProperty, Ql = RegExp(
  "^" + Zl.call(Jl).replace(Yl, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function jl(t) {
  if (!rt(t) || Xl(t))
    return !1;
  var n = xi(t) ? Ql : Kl;
  return n.test(bt(t));
}
function tf(t, n) {
  return t == null ? void 0 : t[n];
}
function xt(t, n) {
  var e = tf(t, n);
  return jl(e) ? e : void 0;
}
var ce = xt(it, "WeakMap");
function nf(t, n, e) {
  switch (e.length) {
    case 0:
      return t.call(n);
    case 1:
      return t.call(n, e[0]);
    case 2:
      return t.call(n, e[0], e[1]);
    case 3:
      return t.call(n, e[0], e[1], e[2]);
  }
  return t.apply(n, e);
}
var ef = 800, rf = 16, of = Date.now;
function af(t) {
  var n = 0, e = 0;
  return function() {
    var r = of(), i = rf - (r - e);
    if (e = r, i > 0) {
      if (++n >= ef)
        return arguments[0];
    } else
      n = 0;
    return t.apply(void 0, arguments);
  };
}
function sf(t) {
  return function() {
    return t;
  };
}
var An = function() {
  try {
    var t = xt(Object, "defineProperty");
    return t({}, "", {}), t;
  } catch {
  }
}(), uf = An ? function(t, n) {
  return An(t, "toString", {
    configurable: !0,
    enumerable: !1,
    value: sf(n),
    writable: !0
  });
} : Qt, lf = af(uf);
function ff(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length; ++e < r && n(t[e], e, t) !== !1; )
    ;
  return t;
}
var cf = 9007199254740991, hf = /^(?:0|[1-9]\d*)$/;
function kn(t, n) {
  var e = typeof t;
  return n = n ?? cf, !!n && (e == "number" || e != "symbol" && hf.test(t)) && t > -1 && t % 1 == 0 && t < n;
}
function df(t, n, e) {
  n == "__proto__" && An ? An(t, n, {
    configurable: !0,
    enumerable: !0,
    value: e,
    writable: !0
  }) : t[n] = e;
}
function Cn(t, n) {
  return t === n || t !== t && n !== n;
}
var pf = Object.prototype, gf = pf.hasOwnProperty;
function yf(t, n, e) {
  var r = t[n];
  (!(gf.call(t, n) && Cn(r, e)) || e === void 0 && !(n in t)) && df(t, n, e);
}
var br = Math.max;
function _f(t, n, e) {
  return n = br(n === void 0 ? t.length - 1 : n, 0), function() {
    for (var r = arguments, i = -1, o = br(r.length - n, 0), a = Array(o); ++i < o; )
      a[i] = r[n + i];
    i = -1;
    for (var s = Array(n + 1); ++i < n; )
      s[i] = r[i];
    return s[n] = e(a), nf(t, this, s);
  };
}
function $i(t, n) {
  return lf(_f(t, n, Qt), t + "");
}
var mf = 9007199254740991;
function ze(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= mf;
}
function Ct(t) {
  return t != null && ze(t.length) && !xi(t);
}
function he(t, n, e) {
  if (!rt(e))
    return !1;
  var r = typeof n;
  return (r == "number" ? Ct(e) && kn(n, e.length) : r == "string" && n in e) ? Cn(e[n], t) : !1;
}
var vf = Object.prototype;
function Mi(t) {
  var n = t && t.constructor, e = typeof n == "function" && n.prototype || vf;
  return t === e;
}
function Ai(t, n) {
  for (var e = -1, r = Array(t); ++e < t; )
    r[e] = n(e);
  return r;
}
var wf = "[object Arguments]";
function xr(t) {
  return lt(t) && wt(t) == wf;
}
var Ti = Object.prototype, bf = Ti.hasOwnProperty, xf = Ti.propertyIsEnumerable, Oe = xr(/* @__PURE__ */ function() {
  return arguments;
}()) ? xr : function(t) {
  return lt(t) && bf.call(t, "callee") && !xf.call(t, "callee");
};
function $f() {
  return !1;
}
var Si = typeof exports == "object" && exports && !exports.nodeType && exports, $r = Si && typeof module == "object" && module && !module.nodeType && module, Mf = $r && $r.exports === Si, Mr = Mf ? it.Buffer : void 0, Af = Mr ? Mr.isBuffer : void 0, de = Af || $f, Tf = "[object Arguments]", Sf = "[object Array]", Pf = "[object Boolean]", Ef = "[object Date]", Nf = "[object Error]", zf = "[object Function]", Of = "[object Map]", kf = "[object Number]", Cf = "[object Object]", Rf = "[object RegExp]", If = "[object Set]", Ff = "[object String]", Lf = "[object WeakMap]", Df = "[object ArrayBuffer]", qf = "[object DataView]", Hf = "[object Float32Array]", Bf = "[object Float64Array]", Xf = "[object Int8Array]", Gf = "[object Int16Array]", Uf = "[object Int32Array]", Yf = "[object Uint8Array]", Kf = "[object Uint8ClampedArray]", Vf = "[object Uint16Array]", Wf = "[object Uint32Array]", A = {};
A[Hf] = A[Bf] = A[Xf] = A[Gf] = A[Uf] = A[Yf] = A[Kf] = A[Vf] = A[Wf] = !0;
A[Tf] = A[Sf] = A[Df] = A[Pf] = A[qf] = A[Ef] = A[Nf] = A[zf] = A[Of] = A[kf] = A[Cf] = A[Rf] = A[If] = A[Ff] = A[Lf] = !1;
function Zf(t) {
  return lt(t) && ze(t.length) && !!A[wt(t)];
}
function Pi(t) {
  return function(n) {
    return t(n);
  };
}
var Ei = typeof exports == "object" && exports && !exports.nodeType && exports, Ht = Ei && typeof module == "object" && module && !module.nodeType && module, Jf = Ht && Ht.exports === Ei, Wn = Jf && vi.process, Ar = function() {
  try {
    var t = Ht && Ht.require && Ht.require("util").types;
    return t || Wn && Wn.binding && Wn.binding("util");
  } catch {
  }
}(), Tr = Ar && Ar.isTypedArray, Ni = Tr ? Pi(Tr) : Zf, Qf = Object.prototype, jf = Qf.hasOwnProperty;
function zi(t, n) {
  var e = k(t), r = !e && Oe(t), i = !e && !r && de(t), o = !e && !r && !i && Ni(t), a = e || r || i || o, s = a ? Ai(t.length, String) : [], u = s.length;
  for (var l in t)
    (n || jf.call(t, l)) && !(a && // Safari 9 has enumerable `arguments.length` in strict mode.
    (l == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (l == "offset" || l == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    o && (l == "buffer" || l == "byteLength" || l == "byteOffset") || // Skip index properties.
    kn(l, u))) && s.push(l);
  return s;
}
function Oi(t, n) {
  return function(e) {
    return t(n(e));
  };
}
var tc = Oi(Object.keys, Object), nc = Object.prototype, ec = nc.hasOwnProperty;
function rc(t) {
  if (!Mi(t))
    return tc(t);
  var n = [];
  for (var e in Object(t))
    ec.call(t, e) && e != "constructor" && n.push(e);
  return n;
}
function Rn(t) {
  return Ct(t) ? zi(t) : rc(t);
}
function ic(t) {
  var n = [];
  if (t != null)
    for (var e in Object(t))
      n.push(e);
  return n;
}
var oc = Object.prototype, ac = oc.hasOwnProperty;
function sc(t) {
  if (!rt(t))
    return ic(t);
  var n = Mi(t), e = [];
  for (var r in t)
    r == "constructor" && (n || !ac.call(t, r)) || e.push(r);
  return e;
}
function uc(t) {
  return Ct(t) ? zi(t, !0) : sc(t);
}
var lc = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, fc = /^\w*$/;
function ke(t, n) {
  if (k(t))
    return !1;
  var e = typeof t;
  return e == "number" || e == "symbol" || e == "boolean" || t == null || Ot(t) ? !0 : fc.test(t) || !lc.test(t) || n != null && t in Object(n);
}
var Kt = xt(Object, "create");
function cc() {
  this.__data__ = Kt ? Kt(null) : {}, this.size = 0;
}
function hc(t) {
  var n = this.has(t) && delete this.__data__[t];
  return this.size -= n ? 1 : 0, n;
}
var dc = "__lodash_hash_undefined__", pc = Object.prototype, gc = pc.hasOwnProperty;
function yc(t) {
  var n = this.__data__;
  if (Kt) {
    var e = n[t];
    return e === dc ? void 0 : e;
  }
  return gc.call(n, t) ? n[t] : void 0;
}
var _c = Object.prototype, mc = _c.hasOwnProperty;
function vc(t) {
  var n = this.__data__;
  return Kt ? n[t] !== void 0 : mc.call(n, t);
}
var wc = "__lodash_hash_undefined__";
function bc(t, n) {
  var e = this.__data__;
  return this.size += this.has(t) ? 0 : 1, e[t] = Kt && n === void 0 ? wc : n, this;
}
function mt(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
mt.prototype.clear = cc;
mt.prototype.delete = hc;
mt.prototype.get = yc;
mt.prototype.has = vc;
mt.prototype.set = bc;
function xc() {
  this.__data__ = [], this.size = 0;
}
function In(t, n) {
  for (var e = t.length; e--; )
    if (Cn(t[e][0], n))
      return e;
  return -1;
}
var $c = Array.prototype, Mc = $c.splice;
function Ac(t) {
  var n = this.__data__, e = In(n, t);
  if (e < 0)
    return !1;
  var r = n.length - 1;
  return e == r ? n.pop() : Mc.call(n, e, 1), --this.size, !0;
}
function Tc(t) {
  var n = this.__data__, e = In(n, t);
  return e < 0 ? void 0 : n[e][1];
}
function Sc(t) {
  return In(this.__data__, t) > -1;
}
function Pc(t, n) {
  var e = this.__data__, r = In(e, t);
  return r < 0 ? (++this.size, e.push([t, n])) : e[r][1] = n, this;
}
function ot(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
ot.prototype.clear = xc;
ot.prototype.delete = Ac;
ot.prototype.get = Tc;
ot.prototype.has = Sc;
ot.prototype.set = Pc;
var Vt = xt(it, "Map");
function Ec() {
  this.size = 0, this.__data__ = {
    hash: new mt(),
    map: new (Vt || ot)(),
    string: new mt()
  };
}
function Nc(t) {
  var n = typeof t;
  return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? t !== "__proto__" : t === null;
}
function Fn(t, n) {
  var e = t.__data__;
  return Nc(n) ? e[typeof n == "string" ? "string" : "hash"] : e.map;
}
function zc(t) {
  var n = Fn(this, t).delete(t);
  return this.size -= n ? 1 : 0, n;
}
function Oc(t) {
  return Fn(this, t).get(t);
}
function kc(t) {
  return Fn(this, t).has(t);
}
function Cc(t, n) {
  var e = Fn(this, t), r = e.size;
  return e.set(t, n), this.size += e.size == r ? 0 : 1, this;
}
function at(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
at.prototype.clear = Ec;
at.prototype.delete = zc;
at.prototype.get = Oc;
at.prototype.has = kc;
at.prototype.set = Cc;
var Rc = "Expected a function";
function Ce(t, n) {
  if (typeof t != "function" || n != null && typeof n != "function")
    throw new TypeError(Rc);
  var e = function() {
    var r = arguments, i = n ? n.apply(this, r) : r[0], o = e.cache;
    if (o.has(i))
      return o.get(i);
    var a = t.apply(this, r);
    return e.cache = o.set(i, a) || o, a;
  };
  return e.cache = new (Ce.Cache || at)(), e;
}
Ce.Cache = at;
var Ic = 500;
function Fc(t) {
  var n = Ce(t, function(r) {
    return e.size === Ic && e.clear(), r;
  }), e = n.cache;
  return n;
}
var Lc = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Dc = /\\(\\)?/g, qc = Fc(function(t) {
  var n = [];
  return t.charCodeAt(0) === 46 && n.push(""), t.replace(Lc, function(e, r, i, o) {
    n.push(i ? o.replace(Dc, "$1") : r || e);
  }), n;
});
function Ln(t) {
  return t == null ? "" : bi(t);
}
function Dn(t, n) {
  return k(t) ? t : ke(t, n) ? [t] : qc(Ln(t));
}
function jt(t) {
  if (typeof t == "string" || Ot(t))
    return t;
  var n = t + "";
  return n == "0" && 1 / t == -1 / 0 ? "-0" : n;
}
function qn(t, n) {
  n = Dn(n, t);
  for (var e = 0, r = n.length; t != null && e < r; )
    t = t[jt(n[e++])];
  return e && e == r ? t : void 0;
}
function Hc(t, n, e) {
  var r = t == null ? void 0 : qn(t, n);
  return r === void 0 ? e : r;
}
function Re(t, n) {
  for (var e = -1, r = n.length, i = t.length; ++e < r; )
    t[i + e] = n[e];
  return t;
}
var Sr = W ? W.isConcatSpreadable : void 0;
function Bc(t) {
  return k(t) || Oe(t) || !!(Sr && t && t[Sr]);
}
function ki(t, n, e, r, i) {
  var o = -1, a = t.length;
  for (e || (e = Bc), i || (i = []); ++o < a; ) {
    var s = t[o];
    e(s) ? Re(i, s) : i[i.length] = s;
  }
  return i;
}
function Xc(t) {
  var n = t == null ? 0 : t.length;
  return n ? ki(t) : [];
}
var Gc = Oi(Object.getPrototypeOf, Object);
function Uc(t, n, e) {
  var r = -1, i = t.length;
  n < 0 && (n = -n > i ? 0 : i + n), e = e > i ? i : e, e < 0 && (e += i), i = n > e ? 0 : e - n >>> 0, n >>>= 0;
  for (var o = Array(i); ++r < i; )
    o[r] = t[r + n];
  return o;
}
function Yc(t, n, e) {
  var r = t.length;
  return e = e === void 0 ? r : e, Uc(t, n, e);
}
var Kc = "\\ud800-\\udfff", Vc = "\\u0300-\\u036f", Wc = "\\ufe20-\\ufe2f", Zc = "\\u20d0-\\u20ff", Jc = Vc + Wc + Zc, Qc = "\\ufe0e\\ufe0f", jc = "\\u200d", th = RegExp("[" + jc + Kc + Jc + Qc + "]");
function Ci(t) {
  return th.test(t);
}
function nh(t) {
  return t.split("");
}
var Ri = "\\ud800-\\udfff", eh = "\\u0300-\\u036f", rh = "\\ufe20-\\ufe2f", ih = "\\u20d0-\\u20ff", oh = eh + rh + ih, ah = "\\ufe0e\\ufe0f", sh = "[" + Ri + "]", pe = "[" + oh + "]", ge = "\\ud83c[\\udffb-\\udfff]", uh = "(?:" + pe + "|" + ge + ")", Ii = "[^" + Ri + "]", Fi = "(?:\\ud83c[\\udde6-\\uddff]){2}", Li = "[\\ud800-\\udbff][\\udc00-\\udfff]", lh = "\\u200d", Di = uh + "?", qi = "[" + ah + "]?", fh = "(?:" + lh + "(?:" + [Ii, Fi, Li].join("|") + ")" + qi + Di + ")*", ch = qi + Di + fh, hh = "(?:" + [Ii + pe + "?", pe, Fi, Li, sh].join("|") + ")", dh = RegExp(ge + "(?=" + ge + ")|" + hh + ch, "g");
function ph(t) {
  return t.match(dh) || [];
}
function gh(t) {
  return Ci(t) ? ph(t) : nh(t);
}
function yh(t) {
  return function(n) {
    n = Ln(n);
    var e = Ci(n) ? gh(n) : void 0, r = e ? e[0] : n.charAt(0), i = e ? Yc(e, 1).join("") : n.slice(1);
    return r[t]() + i;
  };
}
var _h = yh("toUpperCase");
function mh(t) {
  return _h(Ln(t).toLowerCase());
}
function vh() {
  this.__data__ = new ot(), this.size = 0;
}
function wh(t) {
  var n = this.__data__, e = n.delete(t);
  return this.size = n.size, e;
}
function bh(t) {
  return this.__data__.get(t);
}
function xh(t) {
  return this.__data__.has(t);
}
var $h = 200;
function Mh(t, n) {
  var e = this.__data__;
  if (e instanceof ot) {
    var r = e.__data__;
    if (!Vt || r.length < $h - 1)
      return r.push([t, n]), this.size = ++e.size, this;
    e = this.__data__ = new at(r);
  }
  return e.set(t, n), this.size = e.size, this;
}
function nt(t) {
  var n = this.__data__ = new ot(t);
  this.size = n.size;
}
nt.prototype.clear = vh;
nt.prototype.delete = wh;
nt.prototype.get = bh;
nt.prototype.has = xh;
nt.prototype.set = Mh;
function Ie(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length, i = 0, o = []; ++e < r; ) {
    var a = t[e];
    n(a, e, t) && (o[i++] = a);
  }
  return o;
}
function Hi() {
  return [];
}
var Ah = Object.prototype, Th = Ah.propertyIsEnumerable, Pr = Object.getOwnPropertySymbols, Bi = Pr ? function(t) {
  return t == null ? [] : (t = Object(t), Ie(Pr(t), function(n) {
    return Th.call(t, n);
  }));
} : Hi, Sh = Object.getOwnPropertySymbols, Ph = Sh ? function(t) {
  for (var n = []; t; )
    Re(n, Bi(t)), t = Gc(t);
  return n;
} : Hi;
function Xi(t, n, e) {
  var r = n(t);
  return k(t) ? r : Re(r, e(t));
}
function Er(t) {
  return Xi(t, Rn, Bi);
}
function Eh(t) {
  return Xi(t, uc, Ph);
}
var ye = xt(it, "DataView"), _e = xt(it, "Promise"), me = xt(it, "Set"), Nr = "[object Map]", Nh = "[object Object]", zr = "[object Promise]", Or = "[object Set]", kr = "[object WeakMap]", Cr = "[object DataView]", zh = bt(ye), Oh = bt(Vt), kh = bt(_e), Ch = bt(me), Rh = bt(ce), j = wt;
(ye && j(new ye(new ArrayBuffer(1))) != Cr || Vt && j(new Vt()) != Nr || _e && j(_e.resolve()) != zr || me && j(new me()) != Or || ce && j(new ce()) != kr) && (j = function(t) {
  var n = wt(t), e = n == Nh ? t.constructor : void 0, r = e ? bt(e) : "";
  if (r)
    switch (r) {
      case zh:
        return Cr;
      case Oh:
        return Nr;
      case kh:
        return zr;
      case Ch:
        return Or;
      case Rh:
        return kr;
    }
  return n;
});
var Rr = it.Uint8Array, Ih = "__lodash_hash_undefined__";
function Fh(t) {
  return this.__data__.set(t, Ih), this;
}
function Lh(t) {
  return this.__data__.has(t);
}
function Tn(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.__data__ = new at(); ++n < e; )
    this.add(t[n]);
}
Tn.prototype.add = Tn.prototype.push = Fh;
Tn.prototype.has = Lh;
function Dh(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length; ++e < r; )
    if (n(t[e], e, t))
      return !0;
  return !1;
}
function qh(t, n) {
  return t.has(n);
}
var Hh = 1, Bh = 2;
function Gi(t, n, e, r, i, o) {
  var a = e & Hh, s = t.length, u = n.length;
  if (s != u && !(a && u > s))
    return !1;
  var l = o.get(t), h = o.get(n);
  if (l && h)
    return l == n && h == t;
  var f = -1, c = !0, p = e & Bh ? new Tn() : void 0;
  for (o.set(t, n), o.set(n, t); ++f < s; ) {
    var d = t[f], g = n[f];
    if (r)
      var b = a ? r(g, d, f, n, t, o) : r(d, g, f, t, n, o);
    if (b !== void 0) {
      if (b)
        continue;
      c = !1;
      break;
    }
    if (p) {
      if (!Dh(n, function(_, $) {
        if (!qh(p, $) && (d === _ || i(d, _, e, r, o)))
          return p.push($);
      })) {
        c = !1;
        break;
      }
    } else if (!(d === g || i(d, g, e, r, o))) {
      c = !1;
      break;
    }
  }
  return o.delete(t), o.delete(n), c;
}
function Ui(t) {
  var n = -1, e = Array(t.size);
  return t.forEach(function(r, i) {
    e[++n] = [i, r];
  }), e;
}
function Xh(t) {
  var n = -1, e = Array(t.size);
  return t.forEach(function(r) {
    e[++n] = r;
  }), e;
}
var Gh = 1, Uh = 2, Yh = "[object Boolean]", Kh = "[object Date]", Vh = "[object Error]", Wh = "[object Map]", Zh = "[object Number]", Jh = "[object RegExp]", Qh = "[object Set]", jh = "[object String]", td = "[object Symbol]", nd = "[object ArrayBuffer]", ed = "[object DataView]", Ir = W ? W.prototype : void 0, Zn = Ir ? Ir.valueOf : void 0;
function rd(t, n, e, r, i, o, a) {
  switch (e) {
    case ed:
      if (t.byteLength != n.byteLength || t.byteOffset != n.byteOffset)
        return !1;
      t = t.buffer, n = n.buffer;
    case nd:
      return !(t.byteLength != n.byteLength || !o(new Rr(t), new Rr(n)));
    case Yh:
    case Kh:
    case Zh:
      return Cn(+t, +n);
    case Vh:
      return t.name == n.name && t.message == n.message;
    case Jh:
    case jh:
      return t == n + "";
    case Wh:
      var s = Ui;
    case Qh:
      var u = r & Gh;
      if (s || (s = Xh), t.size != n.size && !u)
        return !1;
      var l = a.get(t);
      if (l)
        return l == n;
      r |= Uh, a.set(t, n);
      var h = Gi(s(t), s(n), r, i, o, a);
      return a.delete(t), h;
    case td:
      if (Zn)
        return Zn.call(t) == Zn.call(n);
  }
  return !1;
}
var id = 1, od = Object.prototype, ad = od.hasOwnProperty;
function sd(t, n, e, r, i, o) {
  var a = e & id, s = Er(t), u = s.length, l = Er(n), h = l.length;
  if (u != h && !a)
    return !1;
  for (var f = u; f--; ) {
    var c = s[f];
    if (!(a ? c in n : ad.call(n, c)))
      return !1;
  }
  var p = o.get(t), d = o.get(n);
  if (p && d)
    return p == n && d == t;
  var g = !0;
  o.set(t, n), o.set(n, t);
  for (var b = a; ++f < u; ) {
    c = s[f];
    var _ = t[c], $ = n[c];
    if (r)
      var T = a ? r($, _, c, n, t, o) : r(_, $, c, t, n, o);
    if (!(T === void 0 ? _ === $ || i(_, $, e, r, o) : T)) {
      g = !1;
      break;
    }
    b || (b = c == "constructor");
  }
  if (g && !b) {
    var y = t.constructor, v = n.constructor;
    y != v && "constructor" in t && "constructor" in n && !(typeof y == "function" && y instanceof y && typeof v == "function" && v instanceof v) && (g = !1);
  }
  return o.delete(t), o.delete(n), g;
}
var ud = 1, Fr = "[object Arguments]", Lr = "[object Array]", ln = "[object Object]", ld = Object.prototype, Dr = ld.hasOwnProperty;
function fd(t, n, e, r, i, o) {
  var a = k(t), s = k(n), u = a ? Lr : j(t), l = s ? Lr : j(n);
  u = u == Fr ? ln : u, l = l == Fr ? ln : l;
  var h = u == ln, f = l == ln, c = u == l;
  if (c && de(t)) {
    if (!de(n))
      return !1;
    a = !0, h = !1;
  }
  if (c && !h)
    return o || (o = new nt()), a || Ni(t) ? Gi(t, n, e, r, i, o) : rd(t, n, u, e, r, i, o);
  if (!(e & ud)) {
    var p = h && Dr.call(t, "__wrapped__"), d = f && Dr.call(n, "__wrapped__");
    if (p || d) {
      var g = p ? t.value() : t, b = d ? n.value() : n;
      return o || (o = new nt()), i(g, b, e, r, o);
    }
  }
  return c ? (o || (o = new nt()), sd(t, n, e, r, i, o)) : !1;
}
function Fe(t, n, e, r, i) {
  return t === n ? !0 : t == null || n == null || !lt(t) && !lt(n) ? t !== t && n !== n : fd(t, n, e, r, Fe, i);
}
var cd = 1, hd = 2;
function dd(t, n, e, r) {
  var i = e.length, o = i;
  if (t == null)
    return !o;
  for (t = Object(t); i--; ) {
    var a = e[i];
    if (a[2] ? a[1] !== t[a[0]] : !(a[0] in t))
      return !1;
  }
  for (; ++i < o; ) {
    a = e[i];
    var s = a[0], u = t[s], l = a[1];
    if (a[2]) {
      if (u === void 0 && !(s in t))
        return !1;
    } else {
      var h = new nt(), f;
      if (!(f === void 0 ? Fe(l, u, cd | hd, r, h) : f))
        return !1;
    }
  }
  return !0;
}
function Yi(t) {
  return t === t && !rt(t);
}
function pd(t) {
  for (var n = Rn(t), e = n.length; e--; ) {
    var r = n[e], i = t[r];
    n[e] = [r, i, Yi(i)];
  }
  return n;
}
function Ki(t, n) {
  return function(e) {
    return e == null ? !1 : e[t] === n && (n !== void 0 || t in Object(e));
  };
}
function gd(t) {
  var n = pd(t);
  return n.length == 1 && n[0][2] ? Ki(n[0][0], n[0][1]) : function(e) {
    return e === t || dd(e, t, n);
  };
}
function yd(t, n) {
  return t != null && n in Object(t);
}
function Vi(t, n, e) {
  n = Dn(n, t);
  for (var r = -1, i = n.length, o = !1; ++r < i; ) {
    var a = jt(n[r]);
    if (!(o = t != null && e(t, a)))
      break;
    t = t[a];
  }
  return o || ++r != i ? o : (i = t == null ? 0 : t.length, !!i && ze(i) && kn(a, i) && (k(t) || Oe(t)));
}
function _d(t, n) {
  return t != null && Vi(t, n, yd);
}
var md = 1, vd = 2;
function wd(t, n) {
  return ke(t) && Yi(n) ? Ki(jt(t), n) : function(e) {
    var r = Hc(e, t);
    return r === void 0 && r === n ? _d(e, t) : Fe(n, r, md | vd);
  };
}
function Wi(t) {
  return function(n) {
    return n == null ? void 0 : n[t];
  };
}
function bd(t) {
  return function(n) {
    return qn(n, t);
  };
}
function xd(t) {
  return ke(t) ? Wi(jt(t)) : bd(t);
}
function tn(t) {
  return typeof t == "function" ? t : t == null ? Qt : typeof t == "object" ? k(t) ? wd(t[0], t[1]) : gd(t) : xd(t);
}
function $d(t) {
  return function(n, e, r) {
    for (var i = -1, o = Object(n), a = r(n), s = a.length; s--; ) {
      var u = a[++i];
      if (e(o[u], u, o) === !1)
        break;
    }
    return n;
  };
}
var Md = $d();
function Ad(t, n) {
  return t && Md(t, n, Rn);
}
function Td(t, n) {
  return function(e, r) {
    if (e == null)
      return e;
    if (!Ct(e))
      return t(e, r);
    for (var i = e.length, o = -1, a = Object(e); ++o < i && r(a[o], o, a) !== !1; )
      ;
    return e;
  };
}
var Le = Td(Ad);
function Sd(t) {
  return lt(t) && Ct(t);
}
function Pd(t) {
  return typeof t == "function" ? t : Qt;
}
function R(t, n) {
  var e = k(t) ? ff : Le;
  return e(t, Pd(n));
}
function Ed(t, n) {
  return ut(n, function(e) {
    return [e, t[e]];
  });
}
function Nd(t) {
  var n = -1, e = Array(t.size);
  return t.forEach(function(r) {
    e[++n] = [r, r];
  }), e;
}
var zd = "[object Map]", Od = "[object Set]";
function kd(t) {
  return function(n) {
    var e = j(n);
    return e == zd ? Ui(n) : e == Od ? Nd(n) : Ed(n, t(n));
  };
}
var Zi = kd(Rn);
function Cd(t, n) {
  var e = [];
  return Le(t, function(r, i, o) {
    n(r, i, o) && e.push(r);
  }), e;
}
function Hn(t, n) {
  var e = k(t) ? Ie : Cd;
  return e(t, tn(n));
}
function Ji(t, n) {
  var e = -1, r = Ct(t) ? Array(t.length) : [];
  return Le(t, function(i, o, a) {
    r[++e] = n(i, o, a);
  }), r;
}
function vt(t, n) {
  var e = k(t) ? ut : Ji;
  return e(t, tn(n));
}
var Rd = Object.prototype, Id = Rd.hasOwnProperty;
function Fd(t, n) {
  return t != null && Id.call(t, n);
}
function Qi(t, n) {
  return t != null && Vi(t, n, Fd);
}
var Ld = "[object Boolean]";
function Dd(t) {
  return t === !0 || t === !1 || lt(t) && wt(t) == Ld;
}
function qd(t, n) {
  for (var e, r = -1, i = t.length; ++r < i; ) {
    var o = n(t[r]);
    o !== void 0 && (e = e === void 0 ? o : e + o);
  }
  return e;
}
function Hd(t, n, e, r) {
  if (!rt(t))
    return t;
  n = Dn(n, t);
  for (var i = -1, o = n.length, a = o - 1, s = t; s != null && ++i < o; ) {
    var u = jt(n[i]), l = e;
    if (u === "__proto__" || u === "constructor" || u === "prototype")
      return t;
    if (i != a) {
      var h = s[u];
      l = void 0, l === void 0 && (l = rt(h) ? h : kn(n[i + 1]) ? [] : {});
    }
    yf(s, u, l), s = s[u];
  }
  return t;
}
function Bd(t, n, e) {
  for (var r = -1, i = n.length, o = {}; ++r < i; ) {
    var a = n[r], s = qn(t, a);
    e(s, a) && Hd(o, Dn(a, t), s);
  }
  return o;
}
function De(t, n) {
  if (t == null)
    return {};
  var e = ut(Eh(t), function(r) {
    return [r];
  });
  return n = tn(n), Bd(t, e, function(r, i) {
    return n(r, i[0]);
  });
}
function Xd(t, n) {
  var e = t.length;
  for (t.sort(n); e--; )
    t[e] = t[e].value;
  return t;
}
function Gd(t, n) {
  if (t !== n) {
    var e = t !== void 0, r = t === null, i = t === t, o = Ot(t), a = n !== void 0, s = n === null, u = n === n, l = Ot(n);
    if (!s && !l && !o && t > n || o && a && u && !s && !l || r && a && u || !e && u || !i)
      return 1;
    if (!r && !o && !l && t < n || l && e && i && !r && !o || s && e && i || !a && i || !u)
      return -1;
  }
  return 0;
}
function Ud(t, n, e) {
  for (var r = -1, i = t.criteria, o = n.criteria, a = i.length, s = e.length; ++r < a; ) {
    var u = Gd(i[r], o[r]);
    if (u) {
      if (r >= s)
        return u;
      var l = e[r];
      return u * (l == "desc" ? -1 : 1);
    }
  }
  return t.index - n.index;
}
function Yd(t, n, e) {
  n.length ? n = ut(n, function(o) {
    return k(o) ? function(a) {
      return qn(a, o.length === 1 ? o[0] : o);
    } : o;
  }) : n = [Qt];
  var r = -1;
  n = ut(n, Pi(tn));
  var i = Ji(t, function(o, a, s) {
    var u = ut(n, function(l) {
      return l(o);
    });
    return { criteria: u, index: ++r, value: o };
  });
  return Xd(i, function(o, a) {
    return Ud(o, a, e);
  });
}
var Kd = Math.ceil, Vd = Math.max;
function Wd(t, n, e, r) {
  for (var i = -1, o = Vd(Kd((n - t) / (e || 1)), 0), a = Array(o); o--; )
    a[++i] = t, t += e;
  return a;
}
function Zd(t) {
  return function(n, e, r) {
    return r && typeof r != "number" && he(n, e, r) && (e = r = void 0), n = Kn(n), e === void 0 ? (e = n, n = 0) : e = Kn(e), r = r === void 0 ? n < e ? 1 : -1 : Kn(r), Wd(n, e, r);
  };
}
var qe = Zd();
function Jd() {
  var t = arguments, n = Ln(t[0]);
  return t.length < 3 ? n : n.replace(t[1], t[2]);
}
var Qd = $i(function(t, n) {
  if (t == null)
    return [];
  var e = n.length;
  return e > 1 && he(t, n[0], n[1]) ? n = [] : e > 2 && he(n[0], n[1], n[2]) && (n = [n[0]]), Yd(t, ki(n), []);
});
function jd(t, n) {
  return t && t.length ? qd(t, tn(n)) : 0;
}
var t0 = Math.max;
function n0(t) {
  if (!(t && t.length))
    return [];
  var n = 0;
  return t = Ie(t, function(e) {
    if (Sd(e))
      return n = t0(e.length, n), !0;
  }), Ai(n, function(e) {
    return ut(t, Wi(e));
  });
}
var Sn = $i(n0);
const e0 = (t, n, e = 12, r = 12) => {
  const i = V().domain([0, e]).range([0, t]), o = V().domain([0, r]).range([0, n]);
  return {
    points: function() {
      return qe((e + 1) * (r + 1)).map(function(u) {
        return { m: u % (e + 1), n: Math.floor(u / (e + 1)), x: i(u % (e + 1)), y: o(Math.floor(u / (e + 1))) };
      });
    },
    position: function(u, l) {
      typeof u == "number" && (u = [u]), typeof l == "number" && (l = [l]);
      const h = Xc(vt(l, function(f) {
        return vt(
          u,
          function(c) {
            return { x: i(c), y: o(f) };
          }
        );
      }));
      return h.length == 1 ? h[0] : h;
    }
  };
}, r0 = "_widget_18g36_1", i0 = "_label_18g36_19", o0 = "_lit_18g36_24", a0 = "_button_18g36_29", s0 = "_symbol_18g36_29", u0 = "_radio_18g36_29", l0 = "_radiobutton_18g36_29", f0 = "_selected_18g36_35", c0 = "_toggle_18g36_35", h0 = "_slider_18g36_44", d0 = "_track_18g36_44", p0 = "_track_overlay_18g36_48", g0 = "_handle_18g36_55", m = {
  widget: r0,
  label: i0,
  lit: o0,
  button: a0,
  symbol: s0,
  radio: u0,
  radiobutton: l0,
  selected: f0,
  toggle: c0,
  slider: h0,
  track: d0,
  track_overlay: p0,
  handle: g0
}, Bn = () => {
  const n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890", e = n.length;
  let r = "";
  for (let i = 0; i < 10; ++i)
    r += n[Math.floor(Math.random() * e)];
  return r;
}, He = (t, n, e) => {
  var r, i, o, a;
  switch (e) {
    case "top":
      r = 0, i = -n / 2 - 5, o = "middle", a = "bottom";
      break;
    case "bottom":
      r = 0, i = n / 2 + 5, o = "middle", a = "hanging";
      break;
    case "left":
      r = -t / 2 - 5, i = 0, o = "end", a = "middle";
      break;
    case "right":
      r = t / 2 + 5, i = 0, o = "start", a = "middle";
      break;
    default:
      r = 0, i = n / 2 + 5, o = "middle", a = "hanging";
  }
  return { x: r, y: i, anchor: o, valign: a };
}, y0 = (t = 1) => {
  const n = G();
  return n.moveTo(t * 1, t * 0), n.lineTo(t * -0.5, t * (Math.sqrt(3) / 2)), n.lineTo(t * -0.5, t * (-Math.sqrt(3) / 2)), n.closePath(), n.toString();
}, _0 = (t = 1) => {
  const n = G(), e = 0.7;
  return n.moveTo(e * t * (1 + 0.75), e * t * 0), n.lineTo(e * t * (-0.5 + 0.75), e * t * (Math.sqrt(3) / 2)), n.lineTo(e * t * (-0.5 + 0.75), e * t * (-Math.sqrt(3) / 2)), n.closePath(), n.moveTo(e * t * (1 - 0.75), e * t * 0), n.lineTo(e * t * (-0.5 - 0.75), e * t * (Math.sqrt(3) / 2)), n.lineTo(e * t * (-0.5 - 0.75), e * t * (-Math.sqrt(3) / 2)), n.closePath(), n.toString();
}, m0 = (t = 1) => {
  const n = G();
  return n.moveTo(-t * 1, t * 0), n.lineTo(t * 0.5, t * (Math.sqrt(3) / 2)), n.lineTo(t * 0.5, t * (-Math.sqrt(3) / 2)), n.closePath(), n.toString();
}, v0 = (t = 1) => {
  const n = 0.3333333333333333, e = 0.9;
  var r = G();
  return r.moveTo(t * e, t * e), r.lineTo(t * e, t * -0.9), r.lineTo(t * (e * n), t * -0.9), r.lineTo(t * (e * n), t * e), r.closePath(), r.moveTo(-t * e, t * e), r.lineTo(-t * e, t * -0.9), r.lineTo(-t * (e * n), t * -0.9), r.lineTo(-t * (e * n), t * e), r.closePath(), r.toString();
}, w0 = (t = 1) => {
  const n = G(), e = Math.PI / 2.5, r = e / 2, i = 2 * Math.PI - e / 2, o = 0.5, a = 0.6, s = 0.6, u = [t * (1 - o / 2) * Math.cos(i), t * (1 - o / 2) * Math.sin(i)], l = [t * s * Math.cos(i + Math.PI / 2), t * s * Math.sin(i + Math.PI / 2)];
  return n.moveTo(t * Math.cos(i), t * Math.sin(i)), n.arc(0, 0, t, i, r, !0), n.lineTo(t * (1 - o) * Math.cos(r), t * (1 - o) * Math.sin(r)), n.arc(0, 0, t * (1 - o), r, i, !1), n.lineTo(t * (1 - a - o / 2) * Math.cos(i), t * (1 - a - o / 2) * Math.sin(i)), n.lineTo(u[0] + l[0], u[1] + l[1]), n.lineTo(t * (1 + a - o / 2) * Math.cos(i), t * (1 + a - o / 2) * Math.sin(i)), n.closePath(), n.toString();
}, b0 = (t = 1) => {
  const n = G(), e = Math.PI / 10, r = t / 2, i = Math.PI - e, o = e, a = -e, s = Math.PI + e;
  return n.arc(0, 0, r, s, a), n.lineTo(t, r * Math.sin(s)), n.lineTo(t, -t), n.lineTo(-t, -t), n.lineTo(-t, r * Math.sin(s)), n.closePath(), n.arc(0, 0, r, o, i), n.lineTo(-t, r * Math.sin(i)), n.lineTo(-t, t), n.lineTo(t, t), n.lineTo(t, r * Math.sin(i)), n.closePath(), n.toString();
}, x0 = (t = 1) => {
  const n = G(), e = Math.PI / 2.5, r = e / 2 + Math.PI, i = 2 * Math.PI - e / 2 + Math.PI, o = 0.5, a = 0.6, s = -0.6;
  n.moveTo(t * Math.cos(r), t * Math.sin(r)), n.arc(0, 0, t, r, i, !1), n.lineTo(t * (1 - o) * Math.cos(i), t * (1 - o) * Math.sin(i)), n.arc(0, 0, t * (1 - o), i, r, !0), n.lineTo(t * (1 - a - o / 2) * Math.cos(r), t * (1 - a - o / 2) * Math.sin(r));
  var u = [t * (1 - o / 2) * Math.cos(r), t * (1 - o / 2) * Math.sin(r)], l = [t * s * Math.cos(r + Math.PI / 2), t * s * Math.sin(r + Math.PI / 2)];
  return n.lineTo(u[0] + l[0], u[1] + l[1]), n.lineTo(t * (1 + a - o / 2) * Math.cos(r), t * (1 + a - o / 2) * Math.sin(r)), n.closePath(), n.toString();
}, $0 = (t = 1) => {
  var n = G(), e = 0.9;
  return n.moveTo(t * e, t * e), n.lineTo(t * -0.9, t * e), n.lineTo(t * -0.9, t * -0.9), n.lineTo(t * e, t * -0.9), n.closePath(), n.toString();
}, M0 = (t = 1) => {
  const n = G(), e = 0, r = 2 * Math.PI;
  return n.moveTo(t * Math.cos(e), t * Math.sin(e)), n.arc(0, 0, t, e, r, !0), n.closePath(), n.toString();
}, ve = (t) => {
  switch (t) {
    case "play":
      return y0;
    case "forward":
      return _0;
    case "back":
      return m0;
    case "pause":
      return v0;
    case "reload":
      return w0;
    case "capture":
      return b0;
    case "rewind":
      return x0;
    case "stop":
      return $0;
    case "push":
      return M0;
  }
}, ji = () => {
  const t = "button";
  var n = Bn(), e = 50, r = 0.3, i = "round", o = { x: 0, y: 0 }, a = null, s = "bottom", u = null, l = function(d) {
  }, h = ["play"], f = 0;
  return {
    type: t,
    id: function(d) {
      return typeof d > "u" ? n : (n = d, this);
    },
    size: function(d) {
      return typeof d > "u" ? e : (e = d, this);
    },
    symbolsize: function(d) {
      return typeof d > "u" ? r : (r = d, this);
    },
    shape: function(d) {
      return typeof d > "u" ? i : (i = d, this);
    },
    position: function(d) {
      return typeof d > "u" ? o : (o = d, this);
    },
    x: function(d) {
      return typeof d > "u" ? o.x : (o.x = d, this);
    },
    y: function(d) {
      return typeof d > "u" ? o.y : (o.y = d, this);
    },
    label: function(d) {
      return typeof d > "u" ? a : (a = d, this);
    },
    labelposition: function(d) {
      return typeof d > "u" ? s : (s = d, this);
    },
    fontsize: function(d) {
      return typeof d > "u" ? u : (u = d, this);
    },
    update: function(d) {
      if (typeof d == "function")
        return l = d, this;
      l(d);
    },
    actions: function(d) {
      return typeof d > "u" ? h : (h = d, this);
    },
    value: function(d) {
      return typeof d > "u" ? f : (f = d, this);
    },
    click: function() {
      f = (f + 1) % h.length, l(), S(this.parentNode).select("." + m.symbol).attr("d", ve(h[f])(r * e));
    },
    press: function(d) {
      f = (f + 1) % h.length, l(), d.select("#button_" + n).select("." + m.symbol).attr("d", ve(h[f])(r * e));
    }
  };
}, A0 = () => {
  const t = "slider", n = kt(".3f");
  var e = Bn(), r = 100, i = 8, o = 10, a = !1, s = { x: 0, y: 0 }, u = "top-left", l = null, h = function(_) {
  }, f = function(_) {
  }, c = [0, 1], p = 0, d = null, g = V().domain(c).range([0, r]).clamp(!0);
  const b = function(_, $, T = c) {
    const y = _.select("#slider_" + e);
    g.domain(T), p = $, y.selectAll("." + m.handle).transition().attr("cx", g($)), a && y.select("." + m.label).text(d + " = " + n(p)), h(), f();
  };
  return {
    type: t,
    scale: g,
    id: function(_) {
      return typeof _ > "u" ? e : (e = _, this);
    },
    label: function(_) {
      return typeof _ > "u" ? d : (d = _, this);
    },
    size: function(_) {
      return typeof _ > "u" ? r : (r = _, this);
    },
    girth: function(_) {
      return typeof _ > "u" ? i : (i = _, this);
    },
    knob: function(_) {
      return typeof _ > "u" ? o : (o = _, this);
    },
    show: function(_) {
      return typeof _ > "u" ? a : (a = _, this);
    },
    position: function(_) {
      return typeof _ > "u" ? s : (s = _, this);
    },
    x: function(_) {
      return typeof _ > "u" ? s.x : (s.x = _, this);
    },
    y: function(_) {
      return typeof _ > "u" ? s.y : (s.y = _, this);
    },
    labelposition: function(_) {
      return typeof _ > "u" ? u : (u = _, this);
    },
    fontsize: function(_) {
      return typeof _ > "u" ? l : (l = _, this);
    },
    update: function(_) {
      if (typeof _ == "function")
        return h = _, this;
      h(_);
    },
    update_end: function(_) {
      if (typeof _ == "function")
        return f = _, this;
      f(_);
    },
    range: function(_) {
      return typeof _ > "u" ? c : (c = _, this);
    },
    value: function(_) {
      return typeof _ > "u" ? p : (p = _, this);
    },
    reset: b,
    click: b
  };
}, T0 = () => {
  const t = "toggle";
  var n = Bn(), e = 10, r = { x: 0, y: 0 }, i = null, o = "top", a = null, s = function(f) {
  }, u = 0;
  return {
    type: t,
    id: function(f) {
      return typeof f > "u" ? n : (n = f, this);
    },
    size: function(f) {
      return typeof f > "u" ? e : (e = f, this);
    },
    position: function(f) {
      return typeof f > "u" ? r : (r = f, this);
    },
    x: function(f) {
      return typeof f > "u" ? r.x : (r.x = f, this);
    },
    y: function(f) {
      return typeof f > "u" ? r.y : (r.y = f, this);
    },
    label: function(f) {
      return typeof f > "u" ? i : (i = f, this);
    },
    labelposition: function(f) {
      return typeof f > "u" ? o : (o = f, this);
    },
    fontsize: function(f) {
      return typeof f > "u" ? a : (a = f, this);
    },
    update: function(f) {
      if (typeof f == "function")
        return s = f, this;
      s(f);
    },
    value: function(f) {
      return typeof f > "u" ? u : (u = f, this);
    },
    click: function() {
      u = !u;
      const f = S(this.parentNode);
      f.select("." + m.handle).transition().attr("cx", u ? 2 * e : 0), f.classed(m.selected, u), s();
    },
    reset: function(f, c) {
      u = c;
      const p = f.select("#toggle_" + n);
      p.selectAll("." + m.handle).transition().attr("cx", u ? 2 * e : 0), p.classed(m.selected, u), s();
    }
  };
}, S0 = () => {
  const t = "radio";
  var n = Bn(), e = 100, r = 20, i = 0.3, o = "round", a = "vertical", s = { x: 0, y: 0 }, u = "right", l = null, h = function(g) {
  }, f = [], c = 0;
  return {
    type: t,
    id: function(g) {
      return typeof g > "u" ? n : (n = g, this);
    },
    size: function(g) {
      return typeof g > "u" ? e : (e = g, this);
    },
    buttonsize: function(g) {
      return typeof g > "u" ? r : (r = g, this);
    },
    buttonpadding: function(g) {
      return typeof g > "u" ? i : (i = g, this);
    },
    orientation: function(g) {
      return typeof g > "u" ? a : (a = g, this);
    },
    shape: function(g) {
      return typeof g > "u" ? o : (o = g, this);
    },
    position: function(g) {
      return typeof g > "u" ? s : (s = g, this);
    },
    x: function(g) {
      return typeof g > "u" ? s.x : (s.x = g, this);
    },
    y: function(g) {
      return typeof g > "u" ? s.y : (s.y = g, this);
    },
    labelposition: function(g) {
      return typeof g > "u" ? u : (u = g, this);
    },
    fontsize: function(g) {
      return typeof g > "u" ? l : (l = g, this);
    },
    update: function(g) {
      if (typeof g == "function")
        return h = g, this;
      h(g);
    },
    choices: function(g) {
      return typeof g > "u" ? f : (f = g, this);
    },
    value: function(g) {
      return typeof g > "u" ? c : (c = g, this);
    },
    click: function(g, b) {
      c = b, S(this.parentNode).selectAll("." + m.symbol).classed(m.selected, (_) => _ == c), h();
    },
    reset: function(g, b) {
      c = b, g.select("#radio_" + n).selectAll("." + m.symbol).classed(m.selected, (_) => _ == c), h();
    }
  };
}, P0 = (t, n) => {
  const e = "button_" + t.id(), r = t.label(), i = t.labelposition(), o = document.createElementNS("http://www.w3.org/2000/svg", "g"), a = S(o).attr("class", m.widget + " " + m.button).attr("id", e).attr("transform", "translate(" + t.x() + "," + t.y() + ")");
  var s;
  if (t.shape() == "rect" ? s = a.append("rect").attr("width", t.size()).attr("height", t.size()).attr("transform", "translate(" + -t.size() / 2 + "," + -t.size() / 2 + ")").attr("rx", 5).attr("ry", 5) : s = a.append("circle").attr("r", t.size() / 2), s.attr("class", m.background).on("click", t.click).on("mouseover", function() {
    S(this).classed(m.lit, !0), S(this.parentNode).select("." + m.symbol).classed(m.lit, !0);
  }).on("mouseout", function() {
    S(this).classed(m.lit, !1), S(this.parentNode).select("." + m.symbol).classed(m.lit, !1);
  }), a.append("path").attr("d", ve(t.actions()[t.value()])(t.symbolsize() * t.size())).attr("class", m.symbol), r) {
    const u = He(t.size(), t.size(), i);
    a.append("text").text(r).attr("class", m.label).style("text-anchor", u.anchor).style("font-size", t.fontsize()).style("alignment-baseline", u.valign).attr("transform", "translate(" + u.x + "," + u.y + ")");
  }
  return o;
}, to = (t, n) => {
  const e = G();
  return e.moveTo(0, n / 2), e.arc(0, 0, n / 2, Math.PI / 2, 3 * Math.PI / 2, !1), e.lineTo(t, -n / 2), e.arc(t, 0, n / 2, 3 * Math.PI / 2, 2 * Math.PI + Math.PI / 2, !1), e.closePath(), e.toString();
}, E0 = (t, n) => {
  const e = kt(".3f"), r = "slider_" + t.id();
  t.labelposition();
  const i = t.range, o = t.size();
  t.label();
  const a = t.scale;
  var s;
  const u = document.createElementNS("http://www.w3.org/2000/svg", "g");
  s = S(u).attr("class", m.widget + " " + m.slider).attr("id", r).attr("transform", "translate(" + t.x() + "," + t.y() + ")"), a.domain(i()).range([0, o]).clamp(!0);
  const l = t.knob() > t.girth() ? t.knob() : t.girth() / 2;
  s.append("path").attr("d", to(t.size(), t.girth())).attr("class", m.track), s.append("circle").attr("class", m.handle).attr("r", t.knob()).attr("cx", a(t.value())), s.append("rect").attr("width", t.size() + 2 * l).attr("height", 2 * l).attr("transform", "translate(" + -l + "," + -l + ")").attr("class", m.track_overlay).on("click", function(d) {
    const g = te(d, this)[0];
    t.value(a.invert(g)), t.update(), t.update_end(), s.selectAll("." + m.handle).attr("cx", a(t.value())), t.show() && s.select("." + m.label).text(t.label() + " = " + e(t.value()));
  }).call(
    ss().on("drag", function(d) {
      t.value(a.invert(d.x)), t.update(), s.selectAll("." + m.handle).attr("cx", a(t.value())), t.show() && s.select("." + m.label).text(t.label() + " = " + e(t.value()));
    }).on("end", function(d) {
      t.update_end();
    })
  );
  var h, f, c, p = "bottom";
  return t.fontsize && (f = t.labelposition().match(/bottom/i) != null ? en([t.girth() / 2, t.knob()]) + t.fontsize() / 2 : -en([t.girth() / 2, t.knob()]) - t.fontsize() / 2), f = t.labelposition().match(/bottom/i) != null ? en([t.girth() / 2, t.knob()]) + 7 : -en([t.girth() / 2, t.knob()]) - 7, h = t.labelposition().match(/right/i) != null ? t.size() : t.labelposition().match(/center/i) != null ? t.size() / 2 : 0, c = t.labelposition().match(/right/i) != null ? "end" : t.labelposition().match(/center/i) != null ? "middle" : "start", p = t.labelposition().match(/bottom/i) != null ? "hanging" : "top", s.append("text").text(t.show() ? t.label() + " = " + e(t.value()) : t.label()).attr("class", m.label).style("text-anchor", c).style("alignment-baseline", p).style("font-size", t.fontsize()).style("opacity", 1).attr("transform", "translate(" + h + "," + f + ")"), u;
}, N0 = (t, n) => {
  const e = "toggle_" + t.id(), r = t.size(), i = t.label(), o = t.labelposition(), a = document.createElementNS("http://www.w3.org/2000/svg", "g"), s = S(a).attr("class", m.widget + " " + m.toggle).attr("id", e).attr("transform", "translate(" + (t.x() - r) + "," + t.y() + ")").classed(m.selected, t.value() == 1);
  if (s.append("path").attr("d", to(2 * t.size(), 2 * t.size())).attr("class", m.track), s.append("circle").attr("class", m.handle).attr("r", r).attr("cx", t.value() ? 2 * r : 0), s.append("rect").attr("width", 4 * t.size()).attr("height", 2 * t.size()).attr("class", m.track_overlay).attr("transform", "translate(" + -t.size() + "," + -t.size() + ")").on("click", t.click), i) {
    const u = He(4 * t.size(), 2 * t.size(), o);
    s.append("text").text(i).attr("class", m.label).style("text-anchor", u.anchor).style("font-size", t.fontsize()).style("alignment-baseline", u.valign).attr("transform", "translate(" + (u.x + r) + "," + u.y + ")");
  }
  return a;
}, z0 = (t, n) => {
  const e = "radio_" + t.id(), r = t.labelposition(), i = t.buttonsize(), o = t.buttonsize() * (1 - t.buttonpadding()), a = t.choices().length, s = _o(a), u = V().domain([0, a - 1]).range([0, t.size()]), l = V().domain([0, a - 1]).range([0, t.size()]), h = document.createElementNS("http://www.w3.org/2000/svg", "g"), c = S(h).attr("class", m.widget + " " + m.radio).attr("id", e).attr("transform", "translate(" + t.x() + "," + t.y() + ")").selectAll("." + m.radiobutton).data(s).enter().append("g").attr("class", m.radiobutton).attr("id", (b) => "b" + b).attr("transform", (b) => t.orientation() == "vertical" ? "translate(0," + l(b) + ")" : "translate(" + u(b) + ",0)");
  var p, d;
  t.shape() == "rect" ? (p = c.append("rect").attr("width", i).attr("height", i).attr("rx", 2).attr("ry", 2).attr("transform", "translate(" + -i / 2 + "," + -i / 2 + ")"), d = c.append("rect").attr("width", o).attr("height", o).attr("rx", 2).attr("ry", 2).attr("transform", "translate(" + -o / 2 + "," + -o / 2 + ")")) : (p = c.append("circle").attr("r", i / 2), d = c.append("circle").attr("r", o / 2)), p.attr("class", m.background).on("mouseover", function() {
    S(this).classed(m.lit, !0), S(this.parentNode).select("." + m.symbol).classed(m.lit, !0);
  }).on("mouseout", function() {
    S(this).classed(m.lit, !1), S(this.parentNode).select("." + m.symbol).classed(m.lit, !1);
  }), d.attr("class", m.symbol), d.filter((b) => b == t.value()).classed(m.selected, !0), c.on("click", t.click);
  const g = He(t.buttonsize(), t.buttonsize(), r);
  return c.append("text").attr("class", m.label).text(function(b, _) {
    return t.choices()[_];
  }).attr("alignment-baseline", g.valign).attr("transform", "translate(" + g.x + "," + g.y + ")").style("font-size", t.fontsize()).attr("text-anchor", g.anchor), h;
}, Ft = (t, n) => {
  switch (t.type) {
    case "button":
      return P0(t);
    case "slider":
      return E0(t);
    case "radio":
      return z0(t);
    case "toggle":
      return N0(t);
  }
}, O0 = (t, n) => {
  const e = e0(
    n.controls_size.width,
    n.controls_size.height,
    n.controls_grid.nx,
    n.controls_grid.ny
  ), r = S("#" + t).classed(n.id + " " + n.container_class, !0), i = r.append("div").attr("id", "display").attr("class", "display-panel").classed(n.display_class, !0).classed(n.debug_lattice, n.debug).append(n.display_type).attr("width", n.display_type == "canvas" ? n.display_size.width : null).attr("height", n.display_type == "canvas" ? n.display_size.height : null).attr("viewBox", n.display_type == "canvas" ? null : "0 0 " + n.display_size.width + " " + n.display_size.height).style("width", "100%"), o = r.append("div").attr("id", "controls").attr("class", "control-panel").classed(n.controls_class, !0).classed(n.debug_lattice, n.debug).append("svg").attr("viewBox", "0 0 " + n.controls_size.width + " " + n.controls_size.height).style("width", "100%").style("height", "100%");
  return typeof n.controls_border == "string" && n.controls_border.length > 0 && o.style("border", n.controls_border), typeof n.display_border == "string" && n.display_border.length > 0 && i.style("border", n.display_border), n.debug && o.selectAll(null).data(e.points).enter().append("circle").attr("r", 2).attr("transform", (a) => "translate(" + a.x + "," + a.y + ")").style("fill", "black"), { display: i, controls: o, grid: e };
}, M = {
  widgets: {
    slider_size: 160,
    slider_gap: 1,
    slider_girth: 12,
    slider_knob: 12,
    slider_anchor: { x: 6.5, y: 1 },
    dens_slider_anchor: { x: 6.5, y: 11 },
    toggle_anchor: { x: 6.5, y: 9.5 },
    toggle_label_pos: "right",
    playbutton_size: 120,
    playbutton_anchor: { x: 2, y: 2 },
    backbutton_anchor: { x: 2, y: 5 },
    //		resetbutton_anchor:{x:2,y:5},
    radio_anchor: { x: 1, y: 7 },
    radio_size: 160,
    radio_orientation: "vertical",
    radio_label_position: "right",
    radio_shape: "circle",
    bit_size: 12
  },
  simulation: {
    delay: 10
  }
}, x = {
  N: 150,
  done: !1,
  "000": {
    range: [0, 1],
    default: 0
  },
  "001": {
    range: [0, 1],
    default: 0
  },
  "010": {
    range: [0, 1],
    default: 0
  },
  "011": {
    range: [0, 1],
    default: 0
  },
  100: {
    range: [0, 1],
    default: 0
  },
  101: {
    range: [0, 1],
    default: 0
  },
  110: {
    range: [0, 1],
    default: 0
  },
  111: {
    range: [0, 1],
    default: 0
  },
  initial_density: {
    range: [0, 1],
    default: 0.1
  },
  systems: {
    choices: ["Water weed", "Volcano", "Giant Kelp", "Spotted Kelp", "Sierpinsky"],
    default: 2,
    setups: [
      { density: 0.8, values: [0, 0.5, 0.233, 0.653, 0.5, 0.5, 0.863, 0.303] },
      { density: 0.1, values: [0, 0.433, 0, 0.753, 0.763, 1, 0.733, 0.903] },
      { density: 0.1, values: [0, 0.323, 0.703, 0.793, 0.5, 1, 0.793, 0] },
      { density: 0.6, values: [0, 0.55, 0.5, 0.5, 0.55, 0, 0.5, 1] },
      { density: -1, values: [0, 1, 0, 1, 1, 0, 1, 0] }
    ]
  },
  start_with_a_dot: {
    default: !1
  }
}, Be = (t) => vt(Zi(t), (n) => {
  n[1].id = n[0], n[1].label = Jd(mh(n[0]), /_/g, " ");
}), Xe = (t) => vt(Zi(t), (n) => n[1]), Ge = (t, n) => R(t, (e, r) => e.widget = n[r]), k0 = (t) => De(t, (n) => Qi(n, "range")), C0 = (t) => De(t, (n) => Dd(n.default)), R0 = (t) => De(t, (n) => Qi(n, "choices"));
V().domain([0, 360]).range([0, 2 * Math.PI]);
V().range([0, 360]).domain([0, 2 * Math.PI]);
const I0 = "_slidervalue_veqrl_5", F0 = "_bit_veqrl_10", L0 = "_on_veqrl_15", D0 = "_off_veqrl_19", C = {
  slidervalue: I0,
  bit: F0,
  on: L0,
  off: D0
}, q0 = kt(".3f"), Ue = k0(x), Ye = C0(x), Ke = R0(x);
Be(Ue);
Be(Ye);
Be(Ke);
const no = Qd(Xe(Ue), (t) => t.id), eo = Xe(Ye), Ve = Xe(Ke), L = vt(
  no,
  (t) => A0().id(t.id).label(t.label).range(t.range).value(t.default).size(M.widgets.slider_size).labelposition("top").girth(M.widgets.slider_girth).knob(M.widgets.slider_knob)
);
R(L, (t) => {
  t.label(t.id() == "initial_density" ? "initial density" : null);
});
const we = vt(
  eo,
  (t) => T0().id(t.id).label(t.label).value(t.default)
), Pn = vt(
  Ve,
  (t) => S0().choices(t.choices).id(t.id).value(t.default).orientation(M.widgets.radio_orientation).labelposition(M.widgets.radio_label_position)
);
R(Ve[0].setups[Pn[0].value()].values, (t, n) => L[n].value(t));
Ge(eo, we);
Ge(no, L);
Ge(Ve, Pn);
const be = L[8];
L.pop();
const tt = ji().actions(["play", "pause"]), Wt = ji().actions(["rewind"]), H0 = [tt, Wt];
var ro;
const B0 = (t, n) => {
  const e = n.position(M.widgets.slider_anchor.x, qe(L.length).map((s) => M.widgets.slider_anchor.y + M.widgets.slider_gap * s)), r = n.position(M.widgets.dens_slider_anchor.x, M.widgets.dens_slider_anchor.y), i = n.position(M.widgets.toggle_anchor.x, M.widgets.toggle_anchor.y), o = n.position(M.widgets.radio_anchor.x, M.widgets.radio_anchor.y);
  L.forEach((s, u) => s.position(e[u])), be.position(r), we[0].position(i).labelposition(M.widgets.toggle_label_pos), Pn[0].position(o).size(M.widgets.radio_size).shape(M.widgets.radio_shape), tt.position(n.position(M.widgets.playbutton_anchor.x, M.widgets.playbutton_anchor.y)).size(M.widgets.playbutton_size), Wt.position(n.position(M.widgets.backbutton_anchor.x, M.widgets.backbutton_anchor.y)), t.selectAll(null).data(L).enter().append(Ft), t.selectAll(null).data([be]).enter().append(Ft), t.selectAll(null).data(we).enter().append(Ft), t.selectAll(null).data(H0).enter().append(Ft), t.selectAll(null).data(Pn).enter().append(Ft), t.selectAll(null).data(L).enter().append("text").text((s) => q0(s.value())).attr("transform", (s) => "translate(" + (s.position().x + M.widgets.slider_size + 14) + "," + s.position().y + ")").attr("class", C.slidervalue), t.selectAll(null).data(L).enter().append("g").attr("transform", (s) => "translate(" + s.position().x + "," + s.position().y + ")").attr("class", C.bit).attr("id", (s) => s.id());
  const a = M.widgets.bit_size;
  t.selectAll("." + C.bit).append("rect").attr("width", a).attr("height", a).attr("class", (s) => s.id()[0] == 0 ? C.off : C.on).attr("transform", "translate(" + (-12 - 4 * a) + "," + -12 / 2 + ")"), t.selectAll("." + C.bit).append("rect").attr("width", a).attr("height", a).attr("class", (s) => s.id()[2] == 0 ? C.off : C.on).attr("transform", "translate(" + (12 - 4 * a) + "," + -12 / 2 + ")"), t.selectAll("." + C.bit).append("rect").attr("width", a).attr("height", a).attr("class", (s) => s.id()[1] == 0 ? C.off : C.on).attr("transform", "translate(" + (0 - 4 * a) + "," + -12 / 2 + ")").style("stroke", "darkred").style("stroke-width", 3), ro = t;
}, X0 = (t) => {
  R(Ue, (n) => n.widget.reset(t, n.default)), R(Ye, (n) => n.widget.reset(t, n.default)), R(Ke, (n) => n.widget.reset(t, n.default));
};
function io(t, n) {
  return [t % n, Math.floor(t / n)];
}
const G0 = {
  n4: Sn([-1, 1, 0, 0], [0, 0, -1, 1]),
  n8: Sn([-1, 0, 1, 1, 1, 0, -1, -1], [-1, -1, -1, 0, 1, 1, 1, 0])
};
function Jn(t, n, e = "periodic", r = "n8") {
  const i = [];
  return G0[r].forEach((o) => {
    var a = o[1], s = o[0];
    const u = io(t, n), l = u[0], h = u[1], f = l + s, c = h + a;
    (e == "dirichlet" ? !(a == 0 && s == 0) && f < n && c < n && f >= 0 && c >= 0 : !(a == 0 && s == 0)) && i.push(n * ((c + n) % n) + (f + n) % n);
  }), i;
}
const U0 = function(t) {
  var n = "periodic", e = 1, r = "n8";
  const i = 2 * t + 1;
  var o = e / i, a = o;
  const s = qe(i * i).map(function(c) {
    const p = io(c, i);
    return {
      m: p[0],
      n: p[1],
      x: o * (p[0] + 0.5) - e / 2,
      y: a * (p[1] + 0.5) - e / 2
    };
  });
  s.forEach(function(c, p) {
    c.neighbors = Jn(p, i, n, r).map((d) => s[d]), c.cell = () => [
      { x: c.x + o / 2, y: c.y + a / 2 },
      { x: c.x - o / 2, y: c.y + a / 2 },
      { x: c.x - o / 2, y: c.y - a / 2 },
      { x: c.x + o / 2, y: c.y - a / 2 },
      { x: c.x + o / 2, y: c.y + a / 2 }
    ], c.random_interior_point = () => ({
      x: c.x + o * (Math.random() - 0.5),
      y: c.y + a * (Math.random() - 0.5)
    });
  });
  const u = function(c) {
    return typeof c < "u" ? (s.forEach(function(p) {
      p.x = (p.m + 0.5) * c / i - c / 2, p.y = (p.n + 0.5) * c / i - c / 2;
    }), e = c, o = e / i, a = e / i, this.L = e, this) : e;
  }, l = function(c) {
    return typeof c < "u" ? (s.forEach(function(p, d) {
      p.neighbors = Jn(d, i, c, r).map((g) => s[g]);
    }), n = c, s.forEach((p) => {
      p.is_boundary = n == "dirichlet" && (p.n == 0 || p.n == 2 * t || p.m == 0 || p.m == 2 * t);
    }), this) : n;
  }, h = function(c) {
    return typeof c < "u" ? (s.forEach(function(p, d) {
      p.neighbors = Jn(d, i, n, c).map((g) => s[g]);
    }), r = c, this) : r;
  }, f = function() {
    return n === "periodic" ? null : Hn(s, (c) => c.n == 0 || c.n == 2 * t || c.m == 0 || c.m == 2 * t);
  };
  return {
    type: "square",
    L: e,
    N: t,
    size: i * i,
    hood: h,
    nodes: s,
    scale: u,
    boundary: l,
    boundary_cells: f
  };
};
Sn([-1, 1, 0, 0], [0, 0, -1, 1]), Sn([-1, 0, 1, 1, 1, 0, -1, -1], [-1, -1, -1, 0, 1, 1, 1, 0]);
var Pt = [];
2 * x.N + 1;
const qr = x.N, Y0 = () => {
  x.timer = {}, x.tick = 0;
  const t = x.N;
  Pt = U0(t).nodes, x.start_with_a_dot.widget.value() ? R(Pt, (e) => {
    e.state = e.n == 2 * t & e.m == t ? 1 : 0;
  }) : R(Pt, (e) => {
    e.state = e.n == 2 * t & Math.random() < x.initial_density.widget.value() ? 1 : 0;
  });
}, K0 = () => {
  x.tick++;
  const t = Hn(Pt, (n) => 2 * qr - n.n == x.tick);
  return R(t, (n) => {
    let e = n.neighbors[6].state + "" + n.neighbors[5].state + n.neighbors[4].state;
    Math.random() < x[e].widget.value() ? n.state = 1 : n.state = 0;
  }), jd(t, (n) => n.state) == 0 || x.tick > 2 * qr;
};
x.L;
const dt = V().domain([-0.5, 0.5]), pt = V().domain([-0.5, 0.5]);
var H, pn, gn;
const V0 = (t, n) => {
  pn = n.display_size.width, gn = n.display_size.height, dt.range([0, pn]), pt.range([0, gn]), H = t.node().getContext("2d"), H.clearRect(0, 0, pn, gn), R(Hn(Pt, (e) => e.state == 1), (e) => {
    const r = e.cell(), i = "black";
    H.fillStyle = i, H.strokeStyle = i, H.lineWidth = 0, H.fillRect(dt(r[0].x), pt(r[0].y), dt(r[2].x) - dt(r[0].x), pt(r[2].y) - pt(r[0].y));
  });
}, W0 = (t, n) => {
  H.clearRect(0, 0, pn, gn), R(Hn(Pt, (e) => e.state == 1), (e) => {
    const r = e.cell(), i = "black";
    H.fillStyle = i, H.strokeStyle = i, H.lineWidth = 0, H.fillRect(dt(r[0].x), pt(r[0].y), dt(r[2].x) - dt(r[0].x), pt(r[2].y) - pt(r[0].y));
  });
};
function Z0(t, n) {
  x.done = K0(), W0(), x.done && tt.press(ro);
}
function At(t, n) {
  x.done = !1, Y0(), V0(t, n);
}
const Hr = kt(".3f");
var Br = {};
const J0 = (t, n) => {
  tt.value() == 1 ? ((x.tick == 2 * x.N + 1 || x.done == !0) && At(t, n), Br = Ds(() => Z0(), M.simulation.delay)) : Br.stop();
}, Q0 = (t, n, e) => {
  Wt.update(() => X0(n)), tt.update(() => {
    J0(t, e);
  }), x.systems.widget.update(() => {
    R(x.systems.setups[x.systems.widget.value()].values, (i, o) => L[o].reset(n, i)), be.reset(n, x.systems.setups[x.systems.widget.value()].density), n.selectAll("." + C.slidervalue).text((i) => Hr(i.value()));
    const r = x.systems.setups[x.systems.widget.value()].density == -1;
    n.select("#slider_initial_density").transition().style("opacity", r ? 0 : 1), n.select("#slider_initial_density").selectAll("*").style("pointer-events", r ? "none" : null), r ? x.start_with_a_dot.widget.reset(n, !0) : x.start_with_a_dot.widget.reset(n, !1), At(t, e);
  }), x.start_with_a_dot.widget.update(() => {
    n.select("#slider_initial_density").transition().style("opacity", x.start_with_a_dot.widget.value() ? 0 : 1), n.select("#slider_initial_density").selectAll("*").style("pointer-events", x.start_with_a_dot.widget.value() ? "none" : null), At(t, e);
  }), x.initial_density.widget.update_end(() => {
    At(t, e);
  }), R(L, (r) => {
    r.update(() => {
      n.selectAll("." + C.slidervalue).text((i) => Hr(i.value()));
    }), r.update_end(() => At(t, e));
  });
}, j0 = {
  name: "@explorables/kelp",
  title: "Kelp!!!",
  subtitle: "A stochastic cellular automaton",
  description: "This explorable illustrates a stockastic cellular automaton, a simple model that is able to generate fractal growth structures and a diverse set of patterns.",
  author: "Dirk Brockmann (https://synosy.github.io)"
};
function tp(t, n = oo) {
  const e = O0(t, n), r = e.display, i = e.controls, o = e.grid;
  return B0(i, o), Q0(r, i, n), At(r, n), {
    halt() {
      tt.value() === 1 && tt.press(i);
    },
    reset() {
      tt.value() === 1 && tt.press(i), Wt.press(i), Wt.press(i);
    },
    config: n,
    meta: j0
  };
}
export {
  oo as config,
  tp as default,
  tp as load,
  j0 as meta
};
