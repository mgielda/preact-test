import { c as Ba, g as Xp, D as qp, e as yn, l as ia, s as pn, f as Wp, z as Kp, A as Zp } from "./MystEditor.js";
import { i as Qp } from "./is_dark-3d1618f4.js";
var cl = { exports: {} };
(function(pe, he) {
  (function(J, ce) {
    pe.exports = ce();
  })(Ba, function() {
    function J(t) {
      return J = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
        return typeof e;
      } : function(e) {
        return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
      }, J(t);
    }
    function ce(t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function");
    }
    function H(t, e) {
      for (var r = 0; r < e.length; r++) {
        var a = e[r];
        a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a);
      }
    }
    function D(t, e, r) {
      return e && H(t.prototype, e), r && H(t, r), Object.defineProperty(t, "prototype", {
        writable: !1
      }), t;
    }
    function T(t, e, r) {
      return e in t ? Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : t[e] = r, t;
    }
    function w(t, e) {
      return C(t) || $(t, e) || _(t, e) || K();
    }
    function C(t) {
      if (Array.isArray(t))
        return t;
    }
    function $(t, e) {
      var r = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
      if (r != null) {
        var a = [], n = !0, i = !1, s, o;
        try {
          for (r = r.call(t); !(n = (s = r.next()).done) && (a.push(s.value), !(e && a.length === e)); n = !0)
            ;
        } catch (l) {
          i = !0, o = l;
        } finally {
          try {
            !n && r.return != null && r.return();
          } finally {
            if (i)
              throw o;
          }
        }
        return a;
      }
    }
    function _(t, e) {
      if (!!t) {
        if (typeof t == "string")
          return k(t, e);
        var r = Object.prototype.toString.call(t).slice(8, -1);
        if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set")
          return Array.from(t);
        if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
          return k(t, e);
      }
    }
    function k(t, e) {
      (e == null || e > t.length) && (e = t.length);
      for (var r = 0, a = new Array(e); r < e; r++)
        a[r] = t[r];
      return a;
    }
    function K() {
      throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    function O(t, e) {
      var r = typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
      if (!r) {
        if (Array.isArray(t) || (r = _(t)) || e && t && typeof t.length == "number") {
          r && (t = r);
          var a = 0, n = function() {
          };
          return {
            s: n,
            n: function() {
              return a >= t.length ? {
                done: !0
              } : {
                done: !1,
                value: t[a++]
              };
            },
            e: function(l) {
              throw l;
            },
            f: n
          };
        }
        throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      var i = !0, s = !1, o;
      return {
        s: function() {
          r = r.call(t);
        },
        n: function() {
          var l = r.next();
          return i = l.done, l;
        },
        e: function(l) {
          s = !0, o = l;
        },
        f: function() {
          try {
            !i && r.return != null && r.return();
          } finally {
            if (s)
              throw o;
          }
        }
      };
    }
    var U = typeof window > "u" ? null : window, Y = U ? U.navigator : null;
    U && U.document;
    var j = J(""), ae = J({}), ue = J(function() {
    }), ee = typeof HTMLElement > "u" ? "undefined" : J(HTMLElement), fe = function(e) {
      return e && e.instanceString && te(e.instanceString) ? e.instanceString() : null;
    }, V = function(e) {
      return e != null && J(e) == j;
    }, te = function(e) {
      return e != null && J(e) === ue;
    }, L = function(e) {
      return !Oe(e) && (Array.isArray ? Array.isArray(e) : e != null && e instanceof Array);
    }, B = function(e) {
      return e != null && J(e) === ae && !L(e) && e.constructor === Object;
    }, q = function(e) {
      return e != null && J(e) === ae;
    }, R = function(e) {
      return e != null && J(e) === J(1) && !isNaN(e);
    }, de = function(e) {
      return R(e) && Math.floor(e) === e;
    }, we = function(e) {
      if (ee !== "undefined")
        return e != null && e instanceof HTMLElement;
    }, Oe = function(e) {
      return Ie(e) || We(e);
    }, Ie = function(e) {
      return fe(e) === "collection" && e._private.single;
    }, We = function(e) {
      return fe(e) === "collection" && !e._private.single;
    }, rt = function(e) {
      return fe(e) === "core";
    }, lt = function(e) {
      return fe(e) === "stylesheet";
    }, Fe = function(e) {
      return fe(e) === "event";
    }, ze = function(e) {
      return e == null ? !0 : !!(e === "" || e.match(/^\s+$/));
    }, je = function(e) {
      return typeof HTMLElement > "u" ? !1 : e instanceof HTMLElement;
    }, at = function(e) {
      return B(e) && R(e.x1) && R(e.x2) && R(e.y1) && R(e.y2);
    }, ft = function(e) {
      return q(e) && te(e.then);
    }, dt = function() {
      return Y && Y.userAgent.match(/msie|trident|edge/i);
    }, tt = function(e, r) {
      r || (r = function() {
        if (arguments.length === 1)
          return arguments[0];
        if (arguments.length === 0)
          return "undefined";
        for (var i = [], s = 0; s < arguments.length; s++)
          i.push(arguments[s]);
        return i.join("$");
      });
      var a = function n() {
        var i = this, s = arguments, o, l = r.apply(i, s), u = n.cache;
        return (o = u[l]) || (o = u[l] = e.apply(i, s)), o;
      };
      return a.cache = {}, a;
    }, Et = tt(function(t) {
      return t.replace(/([A-Z])/g, function(e) {
        return "-" + e.toLowerCase();
      });
    }), pt = tt(function(t) {
      return t.replace(/(-\w)/g, function(e) {
        return e[1].toUpperCase();
      });
    }), zt = tt(function(t, e) {
      return t + e[0].toUpperCase() + e.substring(1);
    }, function(t, e) {
      return t + "$" + e;
    }), tr = function(e) {
      return ze(e) ? e : e.charAt(0).toUpperCase() + e.substring(1);
    }, yt = "(?:[-+]?(?:(?:\\d+|\\d*\\.\\d+)(?:[Ee][+-]?\\d+)?))", jt = "rgb[a]?\\((" + yt + "[%]?)\\s*,\\s*(" + yt + "[%]?)\\s*,\\s*(" + yt + "[%]?)(?:\\s*,\\s*(" + yt + "))?\\)", bn = "rgb[a]?\\((?:" + yt + "[%]?)\\s*,\\s*(?:" + yt + "[%]?)\\s*,\\s*(?:" + yt + "[%]?)(?:\\s*,\\s*(?:" + yt + "))?\\)", oa = "hsl[a]?\\((" + yt + ")\\s*,\\s*(" + yt + "[%])\\s*,\\s*(" + yt + "[%])(?:\\s*,\\s*(" + yt + "))?\\)", Fa = "hsl[a]?\\((?:" + yt + ")\\s*,\\s*(?:" + yt + "[%])\\s*,\\s*(?:" + yt + "[%])(?:\\s*,\\s*(?:" + yt + "))?\\)", or = "\\#[0-9a-fA-F]{3}", xl = "\\#[0-9a-fA-F]{6}", ys = function(e, r) {
      return e < r ? -1 : e > r ? 1 : 0;
    }, Tl = function(e, r) {
      return -1 * ys(e, r);
    }, Qe = Object.assign != null ? Object.assign.bind(Object) : function(t) {
      for (var e = arguments, r = 1; r < e.length; r++) {
        var a = e[r];
        if (a != null)
          for (var n = Object.keys(a), i = 0; i < n.length; i++) {
            var s = n[i];
            t[s] = a[s];
          }
      }
      return t;
    }, Cl = function(e) {
      if (!(!(e.length === 4 || e.length === 7) || e[0] !== "#")) {
        var r = e.length === 4, a, n, i, s = 16;
        return r ? (a = parseInt(e[1] + e[1], s), n = parseInt(e[2] + e[2], s), i = parseInt(e[3] + e[3], s)) : (a = parseInt(e[1] + e[2], s), n = parseInt(e[3] + e[4], s), i = parseInt(e[5] + e[6], s)), [a, n, i];
      }
    }, Dl = function(e) {
      var r, a, n, i, s, o, l, u;
      function f(v, y, p) {
        return p < 0 && (p += 1), p > 1 && (p -= 1), p < 1 / 6 ? v + (y - v) * 6 * p : p < 1 / 2 ? y : p < 2 / 3 ? v + (y - v) * (2 / 3 - p) * 6 : v;
      }
      var h = new RegExp("^" + oa + "$").exec(e);
      if (h) {
        if (a = parseInt(h[1]), a < 0 ? a = (360 - -1 * a % 360) % 360 : a > 360 && (a = a % 360), a /= 360, n = parseFloat(h[2]), n < 0 || n > 100 || (n = n / 100, i = parseFloat(h[3]), i < 0 || i > 100) || (i = i / 100, s = h[4], s !== void 0 && (s = parseFloat(s), s < 0 || s > 1)))
          return;
        if (n === 0)
          o = l = u = Math.round(i * 255);
        else {
          var c = i < 0.5 ? i * (1 + n) : i + n - i * n, d = 2 * i - c;
          o = Math.round(255 * f(d, c, a + 1 / 3)), l = Math.round(255 * f(d, c, a)), u = Math.round(255 * f(d, c, a - 1 / 3));
        }
        r = [o, l, u, s];
      }
      return r;
    }, Sl = function(e) {
      var r, a = new RegExp("^" + jt + "$").exec(e);
      if (a) {
        r = [];
        for (var n = [], i = 1; i <= 3; i++) {
          var s = a[i];
          if (s[s.length - 1] === "%" && (n[i] = !0), s = parseFloat(s), n[i] && (s = s / 100 * 255), s < 0 || s > 255)
            return;
          r.push(Math.floor(s));
        }
        var o = n[1] || n[2] || n[3], l = n[1] && n[2] && n[3];
        if (o && !l)
          return;
        var u = a[4];
        if (u !== void 0) {
          if (u = parseFloat(u), u < 0 || u > 1)
            return;
          r.push(u);
        }
      }
      return r;
    }, Ll = function(e) {
      return Ol[e.toLowerCase()];
    }, Al = function(e) {
      return (L(e) ? e : null) || Ll(e) || Cl(e) || Sl(e) || Dl(e);
    }, Ol = {
      transparent: [0, 0, 0, 0],
      aliceblue: [240, 248, 255],
      antiquewhite: [250, 235, 215],
      aqua: [0, 255, 255],
      aquamarine: [127, 255, 212],
      azure: [240, 255, 255],
      beige: [245, 245, 220],
      bisque: [255, 228, 196],
      black: [0, 0, 0],
      blanchedalmond: [255, 235, 205],
      blue: [0, 0, 255],
      blueviolet: [138, 43, 226],
      brown: [165, 42, 42],
      burlywood: [222, 184, 135],
      cadetblue: [95, 158, 160],
      chartreuse: [127, 255, 0],
      chocolate: [210, 105, 30],
      coral: [255, 127, 80],
      cornflowerblue: [100, 149, 237],
      cornsilk: [255, 248, 220],
      crimson: [220, 20, 60],
      cyan: [0, 255, 255],
      darkblue: [0, 0, 139],
      darkcyan: [0, 139, 139],
      darkgoldenrod: [184, 134, 11],
      darkgray: [169, 169, 169],
      darkgreen: [0, 100, 0],
      darkgrey: [169, 169, 169],
      darkkhaki: [189, 183, 107],
      darkmagenta: [139, 0, 139],
      darkolivegreen: [85, 107, 47],
      darkorange: [255, 140, 0],
      darkorchid: [153, 50, 204],
      darkred: [139, 0, 0],
      darksalmon: [233, 150, 122],
      darkseagreen: [143, 188, 143],
      darkslateblue: [72, 61, 139],
      darkslategray: [47, 79, 79],
      darkslategrey: [47, 79, 79],
      darkturquoise: [0, 206, 209],
      darkviolet: [148, 0, 211],
      deeppink: [255, 20, 147],
      deepskyblue: [0, 191, 255],
      dimgray: [105, 105, 105],
      dimgrey: [105, 105, 105],
      dodgerblue: [30, 144, 255],
      firebrick: [178, 34, 34],
      floralwhite: [255, 250, 240],
      forestgreen: [34, 139, 34],
      fuchsia: [255, 0, 255],
      gainsboro: [220, 220, 220],
      ghostwhite: [248, 248, 255],
      gold: [255, 215, 0],
      goldenrod: [218, 165, 32],
      gray: [128, 128, 128],
      grey: [128, 128, 128],
      green: [0, 128, 0],
      greenyellow: [173, 255, 47],
      honeydew: [240, 255, 240],
      hotpink: [255, 105, 180],
      indianred: [205, 92, 92],
      indigo: [75, 0, 130],
      ivory: [255, 255, 240],
      khaki: [240, 230, 140],
      lavender: [230, 230, 250],
      lavenderblush: [255, 240, 245],
      lawngreen: [124, 252, 0],
      lemonchiffon: [255, 250, 205],
      lightblue: [173, 216, 230],
      lightcoral: [240, 128, 128],
      lightcyan: [224, 255, 255],
      lightgoldenrodyellow: [250, 250, 210],
      lightgray: [211, 211, 211],
      lightgreen: [144, 238, 144],
      lightgrey: [211, 211, 211],
      lightpink: [255, 182, 193],
      lightsalmon: [255, 160, 122],
      lightseagreen: [32, 178, 170],
      lightskyblue: [135, 206, 250],
      lightslategray: [119, 136, 153],
      lightslategrey: [119, 136, 153],
      lightsteelblue: [176, 196, 222],
      lightyellow: [255, 255, 224],
      lime: [0, 255, 0],
      limegreen: [50, 205, 50],
      linen: [250, 240, 230],
      magenta: [255, 0, 255],
      maroon: [128, 0, 0],
      mediumaquamarine: [102, 205, 170],
      mediumblue: [0, 0, 205],
      mediumorchid: [186, 85, 211],
      mediumpurple: [147, 112, 219],
      mediumseagreen: [60, 179, 113],
      mediumslateblue: [123, 104, 238],
      mediumspringgreen: [0, 250, 154],
      mediumturquoise: [72, 209, 204],
      mediumvioletred: [199, 21, 133],
      midnightblue: [25, 25, 112],
      mintcream: [245, 255, 250],
      mistyrose: [255, 228, 225],
      moccasin: [255, 228, 181],
      navajowhite: [255, 222, 173],
      navy: [0, 0, 128],
      oldlace: [253, 245, 230],
      olive: [128, 128, 0],
      olivedrab: [107, 142, 35],
      orange: [255, 165, 0],
      orangered: [255, 69, 0],
      orchid: [218, 112, 214],
      palegoldenrod: [238, 232, 170],
      palegreen: [152, 251, 152],
      paleturquoise: [175, 238, 238],
      palevioletred: [219, 112, 147],
      papayawhip: [255, 239, 213],
      peachpuff: [255, 218, 185],
      peru: [205, 133, 63],
      pink: [255, 192, 203],
      plum: [221, 160, 221],
      powderblue: [176, 224, 230],
      purple: [128, 0, 128],
      red: [255, 0, 0],
      rosybrown: [188, 143, 143],
      royalblue: [65, 105, 225],
      saddlebrown: [139, 69, 19],
      salmon: [250, 128, 114],
      sandybrown: [244, 164, 96],
      seagreen: [46, 139, 87],
      seashell: [255, 245, 238],
      sienna: [160, 82, 45],
      silver: [192, 192, 192],
      skyblue: [135, 206, 235],
      slateblue: [106, 90, 205],
      slategray: [112, 128, 144],
      slategrey: [112, 128, 144],
      snow: [255, 250, 250],
      springgreen: [0, 255, 127],
      steelblue: [70, 130, 180],
      tan: [210, 180, 140],
      teal: [0, 128, 128],
      thistle: [216, 191, 216],
      tomato: [255, 99, 71],
      turquoise: [64, 224, 208],
      violet: [238, 130, 238],
      wheat: [245, 222, 179],
      white: [255, 255, 255],
      whitesmoke: [245, 245, 245],
      yellow: [255, 255, 0],
      yellowgreen: [154, 205, 50]
    }, ms = function(e) {
      for (var r = e.map, a = e.keys, n = a.length, i = 0; i < n; i++) {
        var s = a[i];
        if (B(s))
          throw Error("Tried to set map with object key");
        i < a.length - 1 ? (r[s] == null && (r[s] = {}), r = r[s]) : r[s] = e.value;
      }
    }, bs = function(e) {
      for (var r = e.map, a = e.keys, n = a.length, i = 0; i < n; i++) {
        var s = a[i];
        if (B(s))
          throw Error("Tried to get map with object key");
        if (r = r[s], r == null)
          return r;
      }
      return r;
    };
    function Ml(t) {
      var e = typeof t;
      return t != null && (e == "object" || e == "function");
    }
    var Yr = Ml, Ga = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof Ba < "u" ? Ba : typeof self < "u" ? self : {};
    function Nl(t, e) {
      return e = { exports: {} }, t(e, e.exports), e.exports;
    }
    var Il = typeof Ga == "object" && Ga && Ga.Object === Object && Ga, Rl = Il, kl = typeof self == "object" && self && self.Object === Object && self, Pl = Rl || kl || Function("return this")(), En = Pl, Bl = function() {
      return En.Date.now();
    }, gi = Bl, Fl = /\s/;
    function Gl(t) {
      for (var e = t.length; e-- && Fl.test(t.charAt(e)); )
        ;
      return e;
    }
    var zl = Gl, Vl = /^\s+/;
    function Ul(t) {
      return t && t.slice(0, zl(t) + 1).replace(Vl, "");
    }
    var $l = Ul, Yl = En.Symbol, ua = Yl, Es = Object.prototype, _l = Es.hasOwnProperty, Hl = Es.toString, za = ua ? ua.toStringTag : void 0;
    function Xl(t) {
      var e = _l.call(t, za), r = t[za];
      try {
        t[za] = void 0;
        var a = !0;
      } catch {
      }
      var n = Hl.call(t);
      return a && (e ? t[za] = r : delete t[za]), n;
    }
    var ql = Xl, Wl = Object.prototype, Kl = Wl.toString;
    function Zl(t) {
      return Kl.call(t);
    }
    var Ql = Zl, Jl = "[object Null]", jl = "[object Undefined]", ws = ua ? ua.toStringTag : void 0;
    function ef(t) {
      return t == null ? t === void 0 ? jl : Jl : ws && ws in Object(t) ? ql(t) : Ql(t);
    }
    var xs = ef;
    function tf(t) {
      return t != null && typeof t == "object";
    }
    var rf = tf, af = "[object Symbol]";
    function nf(t) {
      return typeof t == "symbol" || rf(t) && xs(t) == af;
    }
    var Va = nf, Ts = 0 / 0, sf = /^[-+]0x[0-9a-f]+$/i, of = /^0b[01]+$/i, uf = /^0o[0-7]+$/i, lf = parseInt;
    function ff(t) {
      if (typeof t == "number")
        return t;
      if (Va(t))
        return Ts;
      if (Yr(t)) {
        var e = typeof t.valueOf == "function" ? t.valueOf() : t;
        t = Yr(e) ? e + "" : e;
      }
      if (typeof t != "string")
        return t === 0 ? t : +t;
      t = $l(t);
      var r = of.test(t);
      return r || uf.test(t) ? lf(t.slice(2), r ? 2 : 8) : sf.test(t) ? Ts : +t;
    }
    var Cs = ff, hf = "Expected a function", cf = Math.max, vf = Math.min;
    function df(t, e, r) {
      var a, n, i, s, o, l, u = 0, f = !1, h = !1, c = !0;
      if (typeof t != "function")
        throw new TypeError(hf);
      e = Cs(e) || 0, Yr(r) && (f = !!r.leading, h = "maxWait" in r, i = h ? cf(Cs(r.maxWait) || 0, e) : i, c = "trailing" in r ? !!r.trailing : c);
      function d(S) {
        var x = a, I = n;
        return a = n = void 0, u = S, s = t.apply(I, x), s;
      }
      function v(S) {
        return u = S, o = setTimeout(g, e), f ? d(S) : s;
      }
      function y(S) {
        var x = S - l, I = S - u, A = e - x;
        return h ? vf(A, i - I) : A;
      }
      function p(S) {
        var x = S - l, I = S - u;
        return l === void 0 || x >= e || x < 0 || h && I >= i;
      }
      function g() {
        var S = gi();
        if (p(S))
          return m(S);
        o = setTimeout(g, y(S));
      }
      function m(S) {
        return o = void 0, c && a ? d(S) : (a = n = void 0, s);
      }
      function b() {
        o !== void 0 && clearTimeout(o), u = 0, a = l = n = o = void 0;
      }
      function E() {
        return o === void 0 ? s : m(gi());
      }
      function M() {
        var S = gi(), x = p(S);
        if (a = arguments, n = this, l = S, x) {
          if (o === void 0)
            return v(l);
          if (h)
            return clearTimeout(o), o = setTimeout(g, e), d(l);
        }
        return o === void 0 && (o = setTimeout(g, e)), s;
      }
      return M.cancel = b, M.flush = E, M;
    }
    var wn = df, pi = U ? U.performance : null, Ds = pi && pi.now ? function() {
      return pi.now();
    } : function() {
      return Date.now();
    }, gf = function() {
      if (U) {
        if (U.requestAnimationFrame)
          return function(t) {
            U.requestAnimationFrame(t);
          };
        if (U.mozRequestAnimationFrame)
          return function(t) {
            U.mozRequestAnimationFrame(t);
          };
        if (U.webkitRequestAnimationFrame)
          return function(t) {
            U.webkitRequestAnimationFrame(t);
          };
        if (U.msRequestAnimationFrame)
          return function(t) {
            U.msRequestAnimationFrame(t);
          };
      }
      return function(t) {
        t && setTimeout(function() {
          t(Ds());
        }, 1e3 / 60);
      };
    }(), xn = function(e) {
      return gf(e);
    }, Cr = Ds, la = 9261, Ss = 65599, Ua = 5381, Ls = function(e) {
      for (var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : la, a = r, n; n = e.next(), !n.done; )
        a = a * Ss + n.value | 0;
      return a;
    }, $a = function(e) {
      var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : la;
      return r * Ss + e | 0;
    }, Ya = function(e) {
      var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ua;
      return (r << 5) + r + e | 0;
    }, pf = function(e, r) {
      return e * 2097152 + r;
    }, Nr = function(e) {
      return e[0] * 2097152 + e[1];
    }, Tn = function(e, r) {
      return [$a(e[0], r[0]), Ya(e[1], r[1])];
    }, yf = function(e, r) {
      var a = {
        value: 0,
        done: !1
      }, n = 0, i = e.length, s = {
        next: function() {
          return n < i ? a.value = e[n++] : a.done = !0, a;
        }
      };
      return Ls(s, r);
    }, _r = function(e, r) {
      var a = {
        value: 0,
        done: !1
      }, n = 0, i = e.length, s = {
        next: function() {
          return n < i ? a.value = e.charCodeAt(n++) : a.done = !0, a;
        }
      };
      return Ls(s, r);
    }, As = function() {
      return mf(arguments);
    }, mf = function(e) {
      for (var r, a = 0; a < e.length; a++) {
        var n = e[a];
        a === 0 ? r = _r(n) : r = _r(n, r);
      }
      return r;
    }, Os = !0, bf = console.warn != null, Ef = console.trace != null, yi = Number.MAX_SAFE_INTEGER || 9007199254740991, Ms = function() {
      return !0;
    }, Cn = function() {
      return !1;
    }, Ns = function() {
      return 0;
    }, mi = function() {
    }, Dt = function(e) {
      throw new Error(e);
    }, Is = function(e) {
      if (e !== void 0)
        Os = !!e;
      else
        return Os;
    }, ht = function(e) {
      !Is() || (bf ? console.warn(e) : (console.log(e), Ef && console.trace()));
    }, wf = function(e) {
      return Qe({}, e);
    }, gr = function(e) {
      return e == null ? e : L(e) ? e.slice() : B(e) ? wf(e) : e;
    }, xf = function(e) {
      return e.slice();
    }, Rs = function(e, r) {
      for (r = e = ""; e++ < 36; r += e * 51 & 52 ? (e ^ 15 ? 8 ^ Math.random() * (e ^ 20 ? 16 : 4) : 4).toString(16) : "-")
        ;
      return r;
    }, Tf = {}, ks = function() {
      return Tf;
    }, It = function(e) {
      var r = Object.keys(e);
      return function(a) {
        for (var n = {}, i = 0; i < r.length; i++) {
          var s = r[i], o = a == null ? void 0 : a[s];
          n[s] = o === void 0 ? e[s] : o;
        }
        return n;
      };
    }, Ir = function(e, r, a) {
      for (var n = e.length - 1; n >= 0 && !(e[n] === r && (e.splice(n, 1), a)); n--)
        ;
    }, bi = function(e) {
      e.splice(0, e.length);
    }, Cf = function(e, r) {
      for (var a = 0; a < r.length; a++) {
        var n = r[a];
        e.push(n);
      }
    }, ur = function(e, r, a) {
      return a && (r = zt(a, r)), e[r];
    }, Rr = function(e, r, a, n) {
      a && (r = zt(a, r)), e[r] = n;
    }, Df = /* @__PURE__ */ function() {
      function t() {
        ce(this, t), this._obj = {};
      }
      return D(t, [{
        key: "set",
        value: function(r, a) {
          return this._obj[r] = a, this;
        }
      }, {
        key: "delete",
        value: function(r) {
          return this._obj[r] = void 0, this;
        }
      }, {
        key: "clear",
        value: function() {
          this._obj = {};
        }
      }, {
        key: "has",
        value: function(r) {
          return this._obj[r] !== void 0;
        }
      }, {
        key: "get",
        value: function(r) {
          return this._obj[r];
        }
      }]), t;
    }(), pr = typeof Map < "u" ? Map : Df, Sf = "undefined", Lf = /* @__PURE__ */ function() {
      function t(e) {
        if (ce(this, t), this._obj = /* @__PURE__ */ Object.create(null), this.size = 0, e != null) {
          var r;
          e.instanceString != null && e.instanceString() === this.instanceString() ? r = e.toArray() : r = e;
          for (var a = 0; a < r.length; a++)
            this.add(r[a]);
        }
      }
      return D(t, [{
        key: "instanceString",
        value: function() {
          return "set";
        }
      }, {
        key: "add",
        value: function(r) {
          var a = this._obj;
          a[r] !== 1 && (a[r] = 1, this.size++);
        }
      }, {
        key: "delete",
        value: function(r) {
          var a = this._obj;
          a[r] === 1 && (a[r] = 0, this.size--);
        }
      }, {
        key: "clear",
        value: function() {
          this._obj = /* @__PURE__ */ Object.create(null);
        }
      }, {
        key: "has",
        value: function(r) {
          return this._obj[r] === 1;
        }
      }, {
        key: "toArray",
        value: function() {
          var r = this;
          return Object.keys(this._obj).filter(function(a) {
            return r.has(a);
          });
        }
      }, {
        key: "forEach",
        value: function(r, a) {
          return this.toArray().forEach(r, a);
        }
      }]), t;
    }(), fa = (typeof Set > "u" ? "undefined" : J(Set)) !== Sf ? Set : Lf, Dn = function(e, r) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
      if (e === void 0 || r === void 0 || !rt(e)) {
        Dt("An element must have a core reference and parameters set");
        return;
      }
      var n = r.group;
      if (n == null && (r.data && r.data.source != null && r.data.target != null ? n = "edges" : n = "nodes"), n !== "nodes" && n !== "edges") {
        Dt("An element must be of type `nodes` or `edges`; you specified `" + n + "`");
        return;
      }
      this.length = 1, this[0] = this;
      var i = this._private = {
        cy: e,
        single: !0,
        data: r.data || {},
        position: r.position || {
          x: 0,
          y: 0
        },
        autoWidth: void 0,
        autoHeight: void 0,
        autoPadding: void 0,
        compoundBoundsClean: !1,
        listeners: [],
        group: n,
        style: {},
        rstyle: {},
        styleCxts: [],
        styleKeys: {},
        removed: !0,
        selected: !!r.selected,
        selectable: r.selectable === void 0 ? !0 : !!r.selectable,
        locked: !!r.locked,
        grabbed: !1,
        grabbable: r.grabbable === void 0 ? !0 : !!r.grabbable,
        pannable: r.pannable === void 0 ? n === "edges" : !!r.pannable,
        active: !1,
        classes: new fa(),
        animation: {
          current: [],
          queue: []
        },
        rscratch: {},
        scratch: r.scratch || {},
        edges: [],
        children: [],
        parent: r.parent && r.parent.isNode() ? r.parent : null,
        traversalCache: {},
        backgrounding: !1,
        bbCache: null,
        bbCacheShift: {
          x: 0,
          y: 0
        },
        bodyBounds: null,
        overlayBounds: null,
        labelBounds: {
          all: null,
          source: null,
          target: null,
          main: null
        },
        arrowBounds: {
          source: null,
          target: null,
          "mid-source": null,
          "mid-target": null
        }
      };
      if (i.position.x == null && (i.position.x = 0), i.position.y == null && (i.position.y = 0), r.renderedPosition) {
        var s = r.renderedPosition, o = e.pan(), l = e.zoom();
        i.position = {
          x: (s.x - o.x) / l,
          y: (s.y - o.y) / l
        };
      }
      var u = [];
      L(r.classes) ? u = r.classes : V(r.classes) && (u = r.classes.split(/\s+/));
      for (var f = 0, h = u.length; f < h; f++) {
        var c = u[f];
        !c || c === "" || i.classes.add(c);
      }
      this.createEmitter();
      var d = r.style || r.css;
      d && (ht("Setting a `style` bypass at element creation should be done only when absolutely necessary.  Try to use the stylesheet instead."), this.style(d)), (a === void 0 || a) && this.restore();
    }, Ps = function(e) {
      return e = {
        bfs: e.bfs || !e.dfs,
        dfs: e.dfs || !e.bfs
      }, function(a, n, i) {
        var s;
        B(a) && !Oe(a) && (s = a, a = s.roots || s.root, n = s.visit, i = s.directed), i = arguments.length === 2 && !te(n) ? n : i, n = te(n) ? n : function() {
        };
        for (var o = this._private.cy, l = a = V(a) ? this.filter(a) : a, u = [], f = [], h = {}, c = {}, d = {}, v = 0, y, p = this.byGroup(), g = p.nodes, m = p.edges, b = 0; b < l.length; b++) {
          var E = l[b], M = E.id();
          E.isNode() && (u.unshift(E), e.bfs && (d[M] = !0, f.push(E)), c[M] = 0);
        }
        for (var S = function() {
          var X = e.bfs ? u.shift() : u.pop(), P = X.id();
          if (e.dfs) {
            if (d[P])
              return "continue";
            d[P] = !0, f.push(X);
          }
          var Q = c[P], W = h[P], Z = W != null ? W.source() : null, re = W != null ? W.target() : null, le = W == null ? void 0 : X.same(Z) ? re[0] : Z[0], ve = void 0;
          if (ve = n(X, W, le, v++, Q), ve === !0)
            return y = X, "break";
          if (ve === !1)
            return "break";
          for (var se = X.connectedEdges().filter(function(Ae) {
            return (!i || Ae.source().same(X)) && m.has(Ae);
          }), ie = 0; ie < se.length; ie++) {
            var be = se[ie], De = be.connectedNodes().filter(function(Ae) {
              return !Ae.same(X) && g.has(Ae);
            }), Le = De.id();
            De.length !== 0 && !d[Le] && (De = De[0], u.push(De), e.bfs && (d[Le] = !0, f.push(De)), h[Le] = be, c[Le] = c[P] + 1);
          }
        }; u.length !== 0; ) {
          var x = S();
          if (x !== "continue" && x === "break")
            break;
        }
        for (var I = o.collection(), A = 0; A < f.length; A++) {
          var z = f[A], F = h[z.id()];
          F != null && I.push(F), I.push(z);
        }
        return {
          path: o.collection(I),
          found: o.collection(y)
        };
      };
    }, _a = {
      breadthFirstSearch: Ps({
        bfs: !0
      }),
      depthFirstSearch: Ps({
        dfs: !0
      })
    };
    _a.bfs = _a.breadthFirstSearch, _a.dfs = _a.depthFirstSearch;
    var Af = Nl(function(t, e) {
      (function() {
        var r, a, n, i, s, o, l, u, f, h, c, d, v, y, p;
        n = Math.floor, h = Math.min, a = function(g, m) {
          return g < m ? -1 : g > m ? 1 : 0;
        }, f = function(g, m, b, E, M) {
          var S;
          if (b == null && (b = 0), M == null && (M = a), b < 0)
            throw new Error("lo must be non-negative");
          for (E == null && (E = g.length); b < E; )
            S = n((b + E) / 2), M(m, g[S]) < 0 ? E = S : b = S + 1;
          return [].splice.apply(g, [b, b - b].concat(m)), m;
        }, o = function(g, m, b) {
          return b == null && (b = a), g.push(m), y(g, 0, g.length - 1, b);
        }, s = function(g, m) {
          var b, E;
          return m == null && (m = a), b = g.pop(), g.length ? (E = g[0], g[0] = b, p(g, 0, m)) : E = b, E;
        }, u = function(g, m, b) {
          var E;
          return b == null && (b = a), E = g[0], g[0] = m, p(g, 0, b), E;
        }, l = function(g, m, b) {
          var E;
          return b == null && (b = a), g.length && b(g[0], m) < 0 && (E = [g[0], m], m = E[0], g[0] = E[1], p(g, 0, b)), m;
        }, i = function(g, m) {
          var b, E, M, S, x, I;
          for (m == null && (m = a), S = function() {
            I = [];
            for (var A = 0, z = n(g.length / 2); 0 <= z ? A < z : A > z; 0 <= z ? A++ : A--)
              I.push(A);
            return I;
          }.apply(this).reverse(), x = [], E = 0, M = S.length; E < M; E++)
            b = S[E], x.push(p(g, b, m));
          return x;
        }, v = function(g, m, b) {
          var E;
          if (b == null && (b = a), E = g.indexOf(m), E !== -1)
            return y(g, 0, E, b), p(g, E, b);
        }, c = function(g, m, b) {
          var E, M, S, x, I;
          if (b == null && (b = a), M = g.slice(0, m), !M.length)
            return M;
          for (i(M, b), I = g.slice(m), S = 0, x = I.length; S < x; S++)
            E = I[S], l(M, E, b);
          return M.sort(b).reverse();
        }, d = function(g, m, b) {
          var E, M, S, x, I, A, z, F, G;
          if (b == null && (b = a), m * 10 <= g.length) {
            if (S = g.slice(0, m).sort(b), !S.length)
              return S;
            for (M = S[S.length - 1], z = g.slice(m), x = 0, A = z.length; x < A; x++)
              E = z[x], b(E, M) < 0 && (f(S, E, 0, null, b), S.pop(), M = S[S.length - 1]);
            return S;
          }
          for (i(g, b), G = [], I = 0, F = h(m, g.length); 0 <= F ? I < F : I > F; 0 <= F ? ++I : --I)
            G.push(s(g, b));
          return G;
        }, y = function(g, m, b, E) {
          var M, S, x;
          for (E == null && (E = a), M = g[b]; b > m; ) {
            if (x = b - 1 >> 1, S = g[x], E(M, S) < 0) {
              g[b] = S, b = x;
              continue;
            }
            break;
          }
          return g[b] = M;
        }, p = function(g, m, b) {
          var E, M, S, x, I;
          for (b == null && (b = a), M = g.length, I = m, S = g[m], E = 2 * m + 1; E < M; )
            x = E + 1, x < M && !(b(g[E], g[x]) < 0) && (E = x), g[m] = g[E], m = E, E = 2 * m + 1;
          return g[m] = S, y(g, I, m, b);
        }, r = function() {
          g.push = o, g.pop = s, g.replace = u, g.pushpop = l, g.heapify = i, g.updateItem = v, g.nlargest = c, g.nsmallest = d;
          function g(m) {
            this.cmp = m != null ? m : a, this.nodes = [];
          }
          return g.prototype.push = function(m) {
            return o(this.nodes, m, this.cmp);
          }, g.prototype.pop = function() {
            return s(this.nodes, this.cmp);
          }, g.prototype.peek = function() {
            return this.nodes[0];
          }, g.prototype.contains = function(m) {
            return this.nodes.indexOf(m) !== -1;
          }, g.prototype.replace = function(m) {
            return u(this.nodes, m, this.cmp);
          }, g.prototype.pushpop = function(m) {
            return l(this.nodes, m, this.cmp);
          }, g.prototype.heapify = function() {
            return i(this.nodes, this.cmp);
          }, g.prototype.updateItem = function(m) {
            return v(this.nodes, m, this.cmp);
          }, g.prototype.clear = function() {
            return this.nodes = [];
          }, g.prototype.empty = function() {
            return this.nodes.length === 0;
          }, g.prototype.size = function() {
            return this.nodes.length;
          }, g.prototype.clone = function() {
            var m;
            return m = new g(), m.nodes = this.nodes.slice(0), m;
          }, g.prototype.toArray = function() {
            return this.nodes.slice(0);
          }, g.prototype.insert = g.prototype.push, g.prototype.top = g.prototype.peek, g.prototype.front = g.prototype.peek, g.prototype.has = g.prototype.contains, g.prototype.copy = g.prototype.clone, g;
        }(), function(g, m) {
          return t.exports = m();
        }(this, function() {
          return r;
        });
      }).call(Ga);
    }), Ha = Af, Of = It({
      root: null,
      weight: function(e) {
        return 1;
      },
      directed: !1
    }), Mf = {
      dijkstra: function(e) {
        if (!B(e)) {
          var r = arguments;
          e = {
            root: r[0],
            weight: r[1],
            directed: r[2]
          };
        }
        var a = Of(e), n = a.root, i = a.weight, s = a.directed, o = this, l = i, u = V(n) ? this.filter(n)[0] : n[0], f = {}, h = {}, c = {}, d = this.byGroup(), v = d.nodes, y = d.edges;
        y.unmergeBy(function(Q) {
          return Q.isLoop();
        });
        for (var p = function(W) {
          return f[W.id()];
        }, g = function(W, Z) {
          f[W.id()] = Z, m.updateItem(W);
        }, m = new Ha(function(Q, W) {
          return p(Q) - p(W);
        }), b = 0; b < v.length; b++) {
          var E = v[b];
          f[E.id()] = E.same(u) ? 0 : 1 / 0, m.push(E);
        }
        for (var M = function(W, Z) {
          for (var re = (s ? W.edgesTo(Z) : W.edgesWith(Z)).intersect(y), le = 1 / 0, ve, se = 0; se < re.length; se++) {
            var ie = re[se], be = l(ie);
            (be < le || !ve) && (le = be, ve = ie);
          }
          return {
            edge: ve,
            dist: le
          };
        }; m.size() > 0; ) {
          var S = m.pop(), x = p(S), I = S.id();
          if (c[I] = x, x !== 1 / 0)
            for (var A = S.neighborhood().intersect(v), z = 0; z < A.length; z++) {
              var F = A[z], G = F.id(), X = M(S, F), P = x + X.dist;
              P < p(F) && (g(F, P), h[G] = {
                node: S,
                edge: X.edge
              });
            }
        }
        return {
          distanceTo: function(W) {
            var Z = V(W) ? v.filter(W)[0] : W[0];
            return c[Z.id()];
          },
          pathTo: function(W) {
            var Z = V(W) ? v.filter(W)[0] : W[0], re = [], le = Z, ve = le.id();
            if (Z.length > 0)
              for (re.unshift(Z); h[ve]; ) {
                var se = h[ve];
                re.unshift(se.edge), re.unshift(se.node), le = se.node, ve = le.id();
              }
            return o.spawn(re);
          }
        };
      }
    }, Nf = {
      kruskal: function(e) {
        e = e || function(b) {
          return 1;
        };
        for (var r = this.byGroup(), a = r.nodes, n = r.edges, i = a.length, s = new Array(i), o = a, l = function(E) {
          for (var M = 0; M < s.length; M++) {
            var S = s[M];
            if (S.has(E))
              return M;
          }
        }, u = 0; u < i; u++)
          s[u] = this.spawn(a[u]);
        for (var f = n.sort(function(b, E) {
          return e(b) - e(E);
        }), h = 0; h < f.length; h++) {
          var c = f[h], d = c.source()[0], v = c.target()[0], y = l(d), p = l(v), g = s[y], m = s[p];
          y !== p && (o.merge(c), g.merge(m), s.splice(p, 1));
        }
        return o;
      }
    }, If = It({
      root: null,
      goal: null,
      weight: function(e) {
        return 1;
      },
      heuristic: function(e) {
        return 0;
      },
      directed: !1
    }), Rf = {
      aStar: function(e) {
        var r = this.cy(), a = If(e), n = a.root, i = a.goal, s = a.heuristic, o = a.directed, l = a.weight;
        n = r.collection(n)[0], i = r.collection(i)[0];
        var u = n.id(), f = i.id(), h = {}, c = {}, d = {}, v = new Ha(function(ve, se) {
          return c[ve.id()] - c[se.id()];
        }), y = new fa(), p = {}, g = {}, m = function(se, ie) {
          v.push(se), y.add(ie);
        }, b, E, M = function() {
          b = v.pop(), E = b.id(), y.delete(E);
        }, S = function(se) {
          return y.has(se);
        };
        m(n, u), h[u] = 0, c[u] = s(n);
        for (var x = 0; v.size() > 0; ) {
          if (M(), x++, E === f) {
            for (var I = [], A = i, z = f, F = g[z]; I.unshift(A), F != null && I.unshift(F), A = p[z], A != null; )
              z = A.id(), F = g[z];
            return {
              found: !0,
              distance: h[E],
              path: this.spawn(I),
              steps: x
            };
          }
          d[E] = !0;
          for (var G = b._private.edges, X = 0; X < G.length; X++) {
            var P = G[X];
            if (!!this.hasElementWithId(P.id()) && !(o && P.data("source") !== E)) {
              var Q = P.source(), W = P.target(), Z = Q.id() !== E ? Q : W, re = Z.id();
              if (!!this.hasElementWithId(re) && !d[re]) {
                var le = h[E] + l(P);
                if (!S(re)) {
                  h[re] = le, c[re] = le + s(Z), m(Z, re), p[re] = b, g[re] = P;
                  continue;
                }
                le < h[re] && (h[re] = le, c[re] = le + s(Z), p[re] = b, g[re] = P);
              }
            }
          }
        }
        return {
          found: !1,
          distance: void 0,
          path: void 0,
          steps: x
        };
      }
    }, kf = It({
      weight: function(e) {
        return 1;
      },
      directed: !1
    }), Pf = {
      floydWarshall: function(e) {
        for (var r = this.cy(), a = kf(e), n = a.weight, i = a.directed, s = n, o = this.byGroup(), l = o.nodes, u = o.edges, f = l.length, h = f * f, c = function(be) {
          return l.indexOf(be);
        }, d = function(be) {
          return l[be];
        }, v = new Array(h), y = 0; y < h; y++) {
          var p = y % f, g = (y - p) / f;
          g === p ? v[y] = 0 : v[y] = 1 / 0;
        }
        for (var m = new Array(h), b = new Array(h), E = 0; E < u.length; E++) {
          var M = u[E], S = M.source()[0], x = M.target()[0];
          if (S !== x) {
            var I = c(S), A = c(x), z = I * f + A, F = s(M);
            if (v[z] > F && (v[z] = F, m[z] = A, b[z] = M), !i) {
              var G = A * f + I;
              !i && v[G] > F && (v[G] = F, m[G] = I, b[G] = M);
            }
          }
        }
        for (var X = 0; X < f; X++)
          for (var P = 0; P < f; P++)
            for (var Q = P * f + X, W = 0; W < f; W++) {
              var Z = P * f + W, re = X * f + W;
              v[Q] + v[re] < v[Z] && (v[Z] = v[Q] + v[re], m[Z] = m[Q]);
            }
        var le = function(be) {
          return (V(be) ? r.filter(be) : be)[0];
        }, ve = function(be) {
          return c(le(be));
        }, se = {
          distance: function(be, De) {
            var Le = ve(be), Ae = ve(De);
            return v[Le * f + Ae];
          },
          path: function(be, De) {
            var Le = ve(be), Ae = ve(De), Me = d(Le);
            if (Le === Ae)
              return Me.collection();
            if (m[Le * f + Ae] == null)
              return r.collection();
            var Ee = r.collection(), ne = Le, xe;
            for (Ee.merge(Me); Le !== Ae; )
              ne = Le, Le = m[Le * f + Ae], xe = b[ne * f + Le], Ee.merge(xe), Ee.merge(d(Le));
            return Ee;
          }
        };
        return se;
      }
    }, Bf = It({
      weight: function(e) {
        return 1;
      },
      directed: !1,
      root: null
    }), Ff = {
      bellmanFord: function(e) {
        var r = this, a = Bf(e), n = a.weight, i = a.directed, s = a.root, o = n, l = this, u = this.cy(), f = this.byGroup(), h = f.edges, c = f.nodes, d = c.length, v = new pr(), y = !1, p = [];
        s = u.collection(s)[0], h.unmergeBy(function(_e) {
          return _e.isLoop();
        });
        for (var g = h.length, m = function($e) {
          var qe = v.get($e.id());
          return qe || (qe = {}, v.set($e.id(), qe)), qe;
        }, b = function($e) {
          return (V($e) ? u.$($e) : $e)[0];
        }, E = function($e) {
          return m(b($e)).dist;
        }, M = function($e) {
          for (var qe = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : s, vt = b($e), it = [], et = vt; ; ) {
            if (et == null)
              return r.spawn();
            var ut = m(et), Se = ut.edge, N = ut.pred;
            if (it.unshift(et[0]), et.same(qe) && it.length > 0)
              break;
            Se != null && it.unshift(Se), et = N;
          }
          return l.spawn(it);
        }, S = 0; S < d; S++) {
          var x = c[S], I = m(x);
          x.same(s) ? I.dist = 0 : I.dist = 1 / 0, I.pred = null, I.edge = null;
        }
        for (var A = !1, z = function($e, qe, vt, it, et, ut) {
          var Se = it.dist + ut;
          Se < et.dist && !vt.same(it.edge) && (et.dist = Se, et.pred = $e, et.edge = vt, A = !0);
        }, F = 1; F < d; F++) {
          A = !1;
          for (var G = 0; G < g; G++) {
            var X = h[G], P = X.source(), Q = X.target(), W = o(X), Z = m(P), re = m(Q);
            z(P, Q, X, Z, re, W), i || z(Q, P, X, re, Z, W);
          }
          if (!A)
            break;
        }
        if (A)
          for (var le = [], ve = 0; ve < g; ve++) {
            var se = h[ve], ie = se.source(), be = se.target(), De = o(se), Le = m(ie).dist, Ae = m(be).dist;
            if (Le + De < Ae || !i && Ae + De < Le)
              if (y || (ht("Graph contains a negative weight cycle for Bellman-Ford"), y = !0), e.findNegativeWeightCycles !== !1) {
                var Me = [];
                Le + De < Ae && Me.push(ie), !i && Ae + De < Le && Me.push(be);
                for (var Ee = Me.length, ne = 0; ne < Ee; ne++) {
                  var xe = Me[ne], Te = [xe];
                  Te.push(m(xe).edge);
                  for (var Be = m(xe).pred; Te.indexOf(Be) === -1; )
                    Te.push(Be), Te.push(m(Be).edge), Be = m(Be).pred;
                  Te = Te.slice(Te.indexOf(Be));
                  for (var He = Te[0].id(), ke = 0, Pe = 2; Pe < Te.length; Pe += 2)
                    Te[Pe].id() < He && (He = Te[Pe].id(), ke = Pe);
                  Te = Te.slice(ke).concat(Te.slice(0, ke)), Te.push(Te[0]);
                  var Ve = Te.map(function(_e) {
                    return _e.id();
                  }).join(",");
                  le.indexOf(Ve) === -1 && (p.push(l.spawn(Te)), le.push(Ve));
                }
              } else
                break;
          }
        return {
          distanceTo: E,
          pathTo: M,
          hasNegativeWeightCycle: y,
          negativeWeightCycles: p
        };
      }
    }, Gf = Math.sqrt(2), zf = function(e, r, a) {
      a.length === 0 && Dt("Karger-Stein must be run on a connected (sub)graph");
      for (var n = a[e], i = n[1], s = n[2], o = r[i], l = r[s], u = a, f = u.length - 1; f >= 0; f--) {
        var h = u[f], c = h[1], d = h[2];
        (r[c] === o && r[d] === l || r[c] === l && r[d] === o) && u.splice(f, 1);
      }
      for (var v = 0; v < u.length; v++) {
        var y = u[v];
        y[1] === l ? (u[v] = y.slice(), u[v][1] = o) : y[2] === l && (u[v] = y.slice(), u[v][2] = o);
      }
      for (var p = 0; p < r.length; p++)
        r[p] === l && (r[p] = o);
      return u;
    }, Ei = function(e, r, a, n) {
      for (; a > n; ) {
        var i = Math.floor(Math.random() * r.length);
        r = zf(i, e, r), a--;
      }
      return r;
    }, Vf = {
      kargerStein: function() {
        var e = this, r = this.byGroup(), a = r.nodes, n = r.edges;
        n.unmergeBy(function(re) {
          return re.isLoop();
        });
        var i = a.length, s = n.length, o = Math.ceil(Math.pow(Math.log(i) / Math.LN2, 2)), l = Math.floor(i / Gf);
        if (i < 2) {
          Dt("At least 2 nodes are required for Karger-Stein algorithm");
          return;
        }
        for (var u = [], f = 0; f < s; f++) {
          var h = n[f];
          u.push([f, a.indexOf(h.source()), a.indexOf(h.target())]);
        }
        for (var c = 1 / 0, d = [], v = new Array(i), y = new Array(i), p = new Array(i), g = function(le, ve) {
          for (var se = 0; se < i; se++)
            ve[se] = le[se];
        }, m = 0; m <= o; m++) {
          for (var b = 0; b < i; b++)
            y[b] = b;
          var E = Ei(y, u.slice(), i, l), M = E.slice();
          g(y, p);
          var S = Ei(y, E, l, 2), x = Ei(p, M, l, 2);
          S.length <= x.length && S.length < c ? (c = S.length, d = S, g(y, v)) : x.length <= S.length && x.length < c && (c = x.length, d = x, g(p, v));
        }
        for (var I = this.spawn(d.map(function(re) {
          return n[re[0]];
        })), A = this.spawn(), z = this.spawn(), F = v[0], G = 0; G < v.length; G++) {
          var X = v[G], P = a[G];
          X === F ? A.merge(P) : z.merge(P);
        }
        var Q = function(le) {
          var ve = e.spawn();
          return le.forEach(function(se) {
            ve.merge(se), se.connectedEdges().forEach(function(ie) {
              e.contains(ie) && !I.contains(ie) && ve.merge(ie);
            });
          }), ve;
        }, W = [Q(A), Q(z)], Z = {
          cut: I,
          components: W,
          partition1: A,
          partition2: z
        };
        return Z;
      }
    }, Uf = function(e) {
      return {
        x: e.x,
        y: e.y
      };
    }, Sn = function(e, r, a) {
      return {
        x: e.x * r + a.x,
        y: e.y * r + a.y
      };
    }, Bs = function(e, r, a) {
      return {
        x: (e.x - a.x) / r,
        y: (e.y - a.y) / r
      };
    }, ha = function(e) {
      return {
        x: e[0],
        y: e[1]
      };
    }, $f = function(e) {
      for (var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : e.length, n = 1 / 0, i = r; i < a; i++) {
        var s = e[i];
        isFinite(s) && (n = Math.min(s, n));
      }
      return n;
    }, Yf = function(e) {
      for (var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : e.length, n = -1 / 0, i = r; i < a; i++) {
        var s = e[i];
        isFinite(s) && (n = Math.max(s, n));
      }
      return n;
    }, _f = function(e) {
      for (var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : e.length, n = 0, i = 0, s = r; s < a; s++) {
        var o = e[s];
        isFinite(o) && (n += o, i++);
      }
      return n / i;
    }, Hf = function(e) {
      var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : e.length, n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !0, i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, s = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : !0;
      n ? e = e.slice(r, a) : (a < e.length && e.splice(a, e.length - a), r > 0 && e.splice(0, r));
      for (var o = 0, l = e.length - 1; l >= 0; l--) {
        var u = e[l];
        s ? isFinite(u) || (e[l] = -1 / 0, o++) : e.splice(l, 1);
      }
      i && e.sort(function(c, d) {
        return c - d;
      });
      var f = e.length, h = Math.floor(f / 2);
      return f % 2 !== 0 ? e[h + 1 + o] : (e[h - 1 + o] + e[h + o]) / 2;
    }, Xf = function(e) {
      return Math.PI * e / 180;
    }, Ln = function(e, r) {
      return Math.atan2(r, e) - Math.PI / 2;
    }, wi = Math.log2 || function(t) {
      return Math.log(t) / Math.log(2);
    }, Fs = function(e) {
      return e > 0 ? 1 : e < 0 ? -1 : 0;
    }, Hr = function(e, r) {
      return Math.sqrt(Xr(e, r));
    }, Xr = function(e, r) {
      var a = r.x - e.x, n = r.y - e.y;
      return a * a + n * n;
    }, qf = function(e) {
      for (var r = e.length, a = 0, n = 0; n < r; n++)
        a += e[n];
      for (var i = 0; i < r; i++)
        e[i] = e[i] / a;
      return e;
    }, Mt = function(e, r, a, n) {
      return (1 - n) * (1 - n) * e + 2 * (1 - n) * n * r + n * n * a;
    }, ca = function(e, r, a, n) {
      return {
        x: Mt(e.x, r.x, a.x, n),
        y: Mt(e.y, r.y, a.y, n)
      };
    }, Wf = function(e, r, a, n) {
      var i = {
        x: r.x - e.x,
        y: r.y - e.y
      }, s = Hr(e, r), o = {
        x: i.x / s,
        y: i.y / s
      };
      return a = a == null ? 0 : a, n = n != null ? n : a * s, {
        x: e.x + o.x * n,
        y: e.y + o.y * n
      };
    }, Xa = function(e, r, a) {
      return Math.max(e, Math.min(a, r));
    }, Kt = function(e) {
      if (e == null)
        return {
          x1: 1 / 0,
          y1: 1 / 0,
          x2: -1 / 0,
          y2: -1 / 0,
          w: 0,
          h: 0
        };
      if (e.x1 != null && e.y1 != null) {
        if (e.x2 != null && e.y2 != null && e.x2 >= e.x1 && e.y2 >= e.y1)
          return {
            x1: e.x1,
            y1: e.y1,
            x2: e.x2,
            y2: e.y2,
            w: e.x2 - e.x1,
            h: e.y2 - e.y1
          };
        if (e.w != null && e.h != null && e.w >= 0 && e.h >= 0)
          return {
            x1: e.x1,
            y1: e.y1,
            x2: e.x1 + e.w,
            y2: e.y1 + e.h,
            w: e.w,
            h: e.h
          };
      }
    }, Kf = function(e) {
      return {
        x1: e.x1,
        x2: e.x2,
        w: e.w,
        y1: e.y1,
        y2: e.y2,
        h: e.h
      };
    }, Zf = function(e) {
      e.x1 = 1 / 0, e.y1 = 1 / 0, e.x2 = -1 / 0, e.y2 = -1 / 0, e.w = 0, e.h = 0;
    }, Qf = function(e, r, a) {
      return {
        x1: e.x1 + r,
        x2: e.x2 + r,
        y1: e.y1 + a,
        y2: e.y2 + a,
        w: e.w,
        h: e.h
      };
    }, Gs = function(e, r) {
      e.x1 = Math.min(e.x1, r.x1), e.x2 = Math.max(e.x2, r.x2), e.w = e.x2 - e.x1, e.y1 = Math.min(e.y1, r.y1), e.y2 = Math.max(e.y2, r.y2), e.h = e.y2 - e.y1;
    }, Jf = function(e, r, a) {
      e.x1 = Math.min(e.x1, r), e.x2 = Math.max(e.x2, r), e.w = e.x2 - e.x1, e.y1 = Math.min(e.y1, a), e.y2 = Math.max(e.y2, a), e.h = e.y2 - e.y1;
    }, An = function(e) {
      var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      return e.x1 -= r, e.x2 += r, e.y1 -= r, e.y2 += r, e.w = e.x2 - e.x1, e.h = e.y2 - e.y1, e;
    }, On = function(e) {
      var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [0], a, n, i, s;
      if (r.length === 1)
        a = n = i = s = r[0];
      else if (r.length === 2)
        a = i = r[0], s = n = r[1];
      else if (r.length === 4) {
        var o = w(r, 4);
        a = o[0], n = o[1], i = o[2], s = o[3];
      }
      return e.x1 -= s, e.x2 += n, e.y1 -= a, e.y2 += i, e.w = e.x2 - e.x1, e.h = e.y2 - e.y1, e;
    }, zs = function(e, r) {
      e.x1 = r.x1, e.y1 = r.y1, e.x2 = r.x2, e.y2 = r.y2, e.w = e.x2 - e.x1, e.h = e.y2 - e.y1;
    }, xi = function(e, r) {
      return !(e.x1 > r.x2 || r.x1 > e.x2 || e.x2 < r.x1 || r.x2 < e.x1 || e.y2 < r.y1 || r.y2 < e.y1 || e.y1 > r.y2 || r.y1 > e.y2);
    }, va = function(e, r, a) {
      return e.x1 <= r && r <= e.x2 && e.y1 <= a && a <= e.y2;
    }, jf = function(e, r) {
      return va(e, r.x, r.y);
    }, Vs = function(e, r) {
      return va(e, r.x1, r.y1) && va(e, r.x2, r.y2);
    }, Us = function(e, r, a, n, i, s, o) {
      var l = arguments.length > 7 && arguments[7] !== void 0 ? arguments[7] : "auto", u = l === "auto" ? Wr(i, s) : l, f = i / 2, h = s / 2;
      u = Math.min(u, f, h);
      var c = u !== f, d = u !== h, v;
      if (c) {
        var y = a - f + u - o, p = n - h - o, g = a + f - u + o, m = p;
        if (v = kr(e, r, a, n, y, p, g, m, !1), v.length > 0)
          return v;
      }
      if (d) {
        var b = a + f + o, E = n - h + u - o, M = b, S = n + h - u + o;
        if (v = kr(e, r, a, n, b, E, M, S, !1), v.length > 0)
          return v;
      }
      if (c) {
        var x = a - f + u - o, I = n + h + o, A = a + f - u + o, z = I;
        if (v = kr(e, r, a, n, x, I, A, z, !1), v.length > 0)
          return v;
      }
      if (d) {
        var F = a - f - o, G = n - h + u - o, X = F, P = n + h - u + o;
        if (v = kr(e, r, a, n, F, G, X, P, !1), v.length > 0)
          return v;
      }
      var Q;
      {
        var W = a - f + u, Z = n - h + u;
        if (Q = qa(e, r, a, n, W, Z, u + o), Q.length > 0 && Q[0] <= W && Q[1] <= Z)
          return [Q[0], Q[1]];
      }
      {
        var re = a + f - u, le = n - h + u;
        if (Q = qa(e, r, a, n, re, le, u + o), Q.length > 0 && Q[0] >= re && Q[1] <= le)
          return [Q[0], Q[1]];
      }
      {
        var ve = a + f - u, se = n + h - u;
        if (Q = qa(e, r, a, n, ve, se, u + o), Q.length > 0 && Q[0] >= ve && Q[1] >= se)
          return [Q[0], Q[1]];
      }
      {
        var ie = a - f + u, be = n + h - u;
        if (Q = qa(e, r, a, n, ie, be, u + o), Q.length > 0 && Q[0] <= ie && Q[1] >= be)
          return [Q[0], Q[1]];
      }
      return [];
    }, eh = function(e, r, a, n, i, s, o) {
      var l = o, u = Math.min(a, i), f = Math.max(a, i), h = Math.min(n, s), c = Math.max(n, s);
      return u - l <= e && e <= f + l && h - l <= r && r <= c + l;
    }, th = function(e, r, a, n, i, s, o, l, u) {
      var f = {
        x1: Math.min(a, o, i) - u,
        x2: Math.max(a, o, i) + u,
        y1: Math.min(n, l, s) - u,
        y2: Math.max(n, l, s) + u
      };
      return !(e < f.x1 || e > f.x2 || r < f.y1 || r > f.y2);
    }, rh = function(e, r, a, n) {
      a -= n;
      var i = r * r - 4 * e * a;
      if (i < 0)
        return [];
      var s = Math.sqrt(i), o = 2 * e, l = (-r + s) / o, u = (-r - s) / o;
      return [l, u];
    }, ah = function(e, r, a, n, i) {
      var s = 1e-5;
      e === 0 && (e = s), r /= e, a /= e, n /= e;
      var o, l, u, f, h, c, d, v;
      if (l = (3 * a - r * r) / 9, u = -(27 * n) + r * (9 * a - 2 * (r * r)), u /= 54, o = l * l * l + u * u, i[1] = 0, d = r / 3, o > 0) {
        h = u + Math.sqrt(o), h = h < 0 ? -Math.pow(-h, 1 / 3) : Math.pow(h, 1 / 3), c = u - Math.sqrt(o), c = c < 0 ? -Math.pow(-c, 1 / 3) : Math.pow(c, 1 / 3), i[0] = -d + h + c, d += (h + c) / 2, i[4] = i[2] = -d, d = Math.sqrt(3) * (-c + h) / 2, i[3] = d, i[5] = -d;
        return;
      }
      if (i[5] = i[3] = 0, o === 0) {
        v = u < 0 ? -Math.pow(-u, 1 / 3) : Math.pow(u, 1 / 3), i[0] = -d + 2 * v, i[4] = i[2] = -(v + d);
        return;
      }
      l = -l, f = l * l * l, f = Math.acos(u / Math.sqrt(f)), v = 2 * Math.sqrt(l), i[0] = -d + v * Math.cos(f / 3), i[2] = -d + v * Math.cos((f + 2 * Math.PI) / 3), i[4] = -d + v * Math.cos((f + 4 * Math.PI) / 3);
    }, nh = function(e, r, a, n, i, s, o, l) {
      var u = 1 * a * a - 4 * a * i + 2 * a * o + 4 * i * i - 4 * i * o + o * o + n * n - 4 * n * s + 2 * n * l + 4 * s * s - 4 * s * l + l * l, f = 1 * 9 * a * i - 3 * a * a - 3 * a * o - 6 * i * i + 3 * i * o + 9 * n * s - 3 * n * n - 3 * n * l - 6 * s * s + 3 * s * l, h = 1 * 3 * a * a - 6 * a * i + a * o - a * e + 2 * i * i + 2 * i * e - o * e + 3 * n * n - 6 * n * s + n * l - n * r + 2 * s * s + 2 * s * r - l * r, c = 1 * a * i - a * a + a * e - i * e + n * s - n * n + n * r - s * r, d = [];
      ah(u, f, h, c, d);
      for (var v = 1e-7, y = [], p = 0; p < 6; p += 2)
        Math.abs(d[p + 1]) < v && d[p] >= 0 && d[p] <= 1 && y.push(d[p]);
      y.push(1), y.push(0);
      for (var g = -1, m, b, E, M = 0; M < y.length; M++)
        m = Math.pow(1 - y[M], 2) * a + 2 * (1 - y[M]) * y[M] * i + y[M] * y[M] * o, b = Math.pow(1 - y[M], 2) * n + 2 * (1 - y[M]) * y[M] * s + y[M] * y[M] * l, E = Math.pow(m - e, 2) + Math.pow(b - r, 2), g >= 0 ? E < g && (g = E) : g = E;
      return g;
    }, ih = function(e, r, a, n, i, s) {
      var o = [e - a, r - n], l = [i - a, s - n], u = l[0] * l[0] + l[1] * l[1], f = o[0] * o[0] + o[1] * o[1], h = o[0] * l[0] + o[1] * l[1], c = h * h / u;
      return h < 0 ? f : c > u ? (e - i) * (e - i) + (r - s) * (r - s) : f - c;
    }, Zt = function(e, r, a) {
      for (var n, i, s, o, l, u = 0, f = 0; f < a.length / 2; f++)
        if (n = a[f * 2], i = a[f * 2 + 1], f + 1 < a.length / 2 ? (s = a[(f + 1) * 2], o = a[(f + 1) * 2 + 1]) : (s = a[(f + 1 - a.length / 2) * 2], o = a[(f + 1 - a.length / 2) * 2 + 1]), !(n == e && s == e))
          if (n >= e && e >= s || n <= e && e <= s)
            l = (e - n) / (s - n) * (o - i) + i, l > r && u++;
          else
            continue;
      return u % 2 !== 0;
    }, Dr = function(e, r, a, n, i, s, o, l, u) {
      var f = new Array(a.length), h;
      l[0] != null ? (h = Math.atan(l[1] / l[0]), l[0] < 0 ? h = h + Math.PI / 2 : h = -h - Math.PI / 2) : h = l;
      for (var c = Math.cos(-h), d = Math.sin(-h), v = 0; v < f.length / 2; v++)
        f[v * 2] = s / 2 * (a[v * 2] * c - a[v * 2 + 1] * d), f[v * 2 + 1] = o / 2 * (a[v * 2 + 1] * c + a[v * 2] * d), f[v * 2] += n, f[v * 2 + 1] += i;
      var y;
      if (u > 0) {
        var p = Nn(f, -u);
        y = Mn(p);
      } else
        y = f;
      return Zt(e, r, y);
    }, sh = function(e, r, a, n, i, s, o, l) {
      for (var u = new Array(a.length * 2), f = 0; f < l.length; f++) {
        var h = l[f];
        u[f * 4 + 0] = h.startX, u[f * 4 + 1] = h.startY, u[f * 4 + 2] = h.stopX, u[f * 4 + 3] = h.stopY;
        var c = Math.pow(h.cx - e, 2) + Math.pow(h.cy - r, 2);
        if (c <= Math.pow(h.radius, 2))
          return !0;
      }
      return Zt(e, r, u);
    }, Mn = function(e) {
      for (var r = new Array(e.length / 2), a, n, i, s, o, l, u, f, h = 0; h < e.length / 4; h++) {
        a = e[h * 4], n = e[h * 4 + 1], i = e[h * 4 + 2], s = e[h * 4 + 3], h < e.length / 4 - 1 ? (o = e[(h + 1) * 4], l = e[(h + 1) * 4 + 1], u = e[(h + 1) * 4 + 2], f = e[(h + 1) * 4 + 3]) : (o = e[0], l = e[1], u = e[2], f = e[3]);
        var c = kr(a, n, i, s, o, l, u, f, !0);
        r[h * 2] = c[0], r[h * 2 + 1] = c[1];
      }
      return r;
    }, Nn = function(e, r) {
      for (var a = new Array(e.length * 2), n, i, s, o, l = 0; l < e.length / 2; l++) {
        n = e[l * 2], i = e[l * 2 + 1], l < e.length / 2 - 1 ? (s = e[(l + 1) * 2], o = e[(l + 1) * 2 + 1]) : (s = e[0], o = e[1]);
        var u = o - i, f = -(s - n), h = Math.sqrt(u * u + f * f), c = u / h, d = f / h;
        a[l * 4] = n + c * r, a[l * 4 + 1] = i + d * r, a[l * 4 + 2] = s + c * r, a[l * 4 + 3] = o + d * r;
      }
      return a;
    }, oh = function(e, r, a, n, i, s) {
      var o = a - e, l = n - r;
      o /= i, l /= s;
      var u = Math.sqrt(o * o + l * l), f = u - 1;
      if (f < 0)
        return [];
      var h = f / u;
      return [(a - e) * h + e, (n - r) * h + r];
    }, qr = function(e, r, a, n, i, s, o) {
      return e -= i, r -= s, e /= a / 2 + o, r /= n / 2 + o, e * e + r * r <= 1;
    }, qa = function(e, r, a, n, i, s, o) {
      var l = [a - e, n - r], u = [e - i, r - s], f = l[0] * l[0] + l[1] * l[1], h = 2 * (u[0] * l[0] + u[1] * l[1]), c = u[0] * u[0] + u[1] * u[1] - o * o, d = h * h - 4 * f * c;
      if (d < 0)
        return [];
      var v = (-h + Math.sqrt(d)) / (2 * f), y = (-h - Math.sqrt(d)) / (2 * f), p = Math.min(v, y), g = Math.max(v, y), m = [];
      if (p >= 0 && p <= 1 && m.push(p), g >= 0 && g <= 1 && m.push(g), m.length === 0)
        return [];
      var b = m[0] * l[0] + e, E = m[0] * l[1] + r;
      if (m.length > 1) {
        if (m[0] == m[1])
          return [b, E];
        var M = m[1] * l[0] + e, S = m[1] * l[1] + r;
        return [b, E, M, S];
      } else
        return [b, E];
    }, Ti = function(e, r, a) {
      return r <= e && e <= a || a <= e && e <= r ? e : e <= r && r <= a || a <= r && r <= e ? r : a;
    }, kr = function(e, r, a, n, i, s, o, l, u) {
      var f = e - i, h = a - e, c = o - i, d = r - s, v = n - r, y = l - s, p = c * d - y * f, g = h * d - v * f, m = y * h - c * v;
      if (m !== 0) {
        var b = p / m, E = g / m, M = 1e-3, S = 0 - M, x = 1 + M;
        return S <= b && b <= x && S <= E && E <= x ? [e + b * h, r + b * v] : u ? [e + b * h, r + b * v] : [];
      } else
        return p === 0 || g === 0 ? Ti(e, a, o) === o ? [o, l] : Ti(e, a, i) === i ? [i, s] : Ti(i, o, a) === a ? [a, n] : [] : [];
    }, Wa = function(e, r, a, n, i, s, o, l) {
      var u = [], f, h = new Array(a.length), c = !0;
      s == null && (c = !1);
      var d;
      if (c) {
        for (var v = 0; v < h.length / 2; v++)
          h[v * 2] = a[v * 2] * s + n, h[v * 2 + 1] = a[v * 2 + 1] * o + i;
        if (l > 0) {
          var y = Nn(h, -l);
          d = Mn(y);
        } else
          d = h;
      } else
        d = a;
      for (var p, g, m, b, E = 0; E < d.length / 2; E++)
        p = d[E * 2], g = d[E * 2 + 1], E < d.length / 2 - 1 ? (m = d[(E + 1) * 2], b = d[(E + 1) * 2 + 1]) : (m = d[0], b = d[1]), f = kr(e, r, n, i, p, g, m, b), f.length !== 0 && u.push(f[0], f[1]);
      return u;
    }, uh = function(e, r, a, n, i, s, o, l, u) {
      var f = [], h, c = new Array(a.length * 2);
      u.forEach(function(m, b) {
        b === 0 ? (c[c.length - 2] = m.startX, c[c.length - 1] = m.startY) : (c[b * 4 - 2] = m.startX, c[b * 4 - 1] = m.startY), c[b * 4] = m.stopX, c[b * 4 + 1] = m.stopY, h = qa(e, r, n, i, m.cx, m.cy, m.radius), h.length !== 0 && f.push(h[0], h[1]);
      });
      for (var d = 0; d < c.length / 4; d++)
        h = kr(e, r, n, i, c[d * 4], c[d * 4 + 1], c[d * 4 + 2], c[d * 4 + 3], !1), h.length !== 0 && f.push(h[0], h[1]);
      if (f.length > 2) {
        for (var v = [f[0], f[1]], y = Math.pow(v[0] - e, 2) + Math.pow(v[1] - r, 2), p = 1; p < f.length / 2; p++) {
          var g = Math.pow(f[p * 2] - e, 2) + Math.pow(f[p * 2 + 1] - r, 2);
          g <= y && (v[0] = f[p * 2], v[1] = f[p * 2 + 1], y = g);
        }
        return v;
      }
      return f;
    }, In = function(e, r, a) {
      var n = [e[0] - r[0], e[1] - r[1]], i = Math.sqrt(n[0] * n[0] + n[1] * n[1]), s = (i - a) / i;
      return s < 0 && (s = 1e-5), [r[0] + s * n[0], r[1] + s * n[1]];
    }, Xt = function(e, r) {
      var a = Ci(e, r);
      return a = $s(a), a;
    }, $s = function(e) {
      for (var r, a, n = e.length / 2, i = 1 / 0, s = 1 / 0, o = -1 / 0, l = -1 / 0, u = 0; u < n; u++)
        r = e[2 * u], a = e[2 * u + 1], i = Math.min(i, r), o = Math.max(o, r), s = Math.min(s, a), l = Math.max(l, a);
      for (var f = 2 / (o - i), h = 2 / (l - s), c = 0; c < n; c++)
        r = e[2 * c] = e[2 * c] * f, a = e[2 * c + 1] = e[2 * c + 1] * h, i = Math.min(i, r), o = Math.max(o, r), s = Math.min(s, a), l = Math.max(l, a);
      if (s < -1)
        for (var d = 0; d < n; d++)
          a = e[2 * d + 1] = e[2 * d + 1] + (-1 - s);
      return e;
    }, Ci = function(e, r) {
      var a = 1 / e * 2 * Math.PI, n = e % 2 === 0 ? Math.PI / 2 + a / 2 : Math.PI / 2;
      n += r;
      for (var i = new Array(e * 2), s, o = 0; o < e; o++)
        s = o * a + n, i[2 * o] = Math.cos(s), i[2 * o + 1] = Math.sin(-s);
      return i;
    }, Wr = function(e, r) {
      return Math.min(e / 4, r / 4, 8);
    }, Ys = function(e, r) {
      return Math.min(e / 10, r / 10, 8);
    }, Di = function() {
      return 8;
    }, lh = function(e, r, a) {
      return [e - 2 * r + a, 2 * (r - e), e];
    }, Si = function(e, r) {
      return {
        heightOffset: Math.min(15, 0.05 * r),
        widthOffset: Math.min(100, 0.25 * e),
        ctrlPtOffsetPct: 0.05
      };
    }, fh = It({
      dampingFactor: 0.8,
      precision: 1e-6,
      iterations: 200,
      weight: function(e) {
        return 1;
      }
    }), hh = {
      pageRank: function(e) {
        for (var r = fh(e), a = r.dampingFactor, n = r.precision, i = r.iterations, s = r.weight, o = this._private.cy, l = this.byGroup(), u = l.nodes, f = l.edges, h = u.length, c = h * h, d = f.length, v = new Array(c), y = new Array(h), p = (1 - a) / h, g = 0; g < h; g++) {
          for (var m = 0; m < h; m++) {
            var b = g * h + m;
            v[b] = 0;
          }
          y[g] = 0;
        }
        for (var E = 0; E < d; E++) {
          var M = f[E], S = M.data("source"), x = M.data("target");
          if (S !== x) {
            var I = u.indexOfId(S), A = u.indexOfId(x), z = s(M), F = A * h + I;
            v[F] += z, y[I] += z;
          }
        }
        for (var G = 1 / h + p, X = 0; X < h; X++)
          if (y[X] === 0)
            for (var P = 0; P < h; P++) {
              var Q = P * h + X;
              v[Q] = G;
            }
          else
            for (var W = 0; W < h; W++) {
              var Z = W * h + X;
              v[Z] = v[Z] / y[X] + p;
            }
        for (var re = new Array(h), le = new Array(h), ve, se = 0; se < h; se++)
          re[se] = 1;
        for (var ie = 0; ie < i; ie++) {
          for (var be = 0; be < h; be++)
            le[be] = 0;
          for (var De = 0; De < h; De++)
            for (var Le = 0; Le < h; Le++) {
              var Ae = De * h + Le;
              le[De] += v[Ae] * re[Le];
            }
          qf(le), ve = re, re = le, le = ve;
          for (var Me = 0, Ee = 0; Ee < h; Ee++) {
            var ne = ve[Ee] - re[Ee];
            Me += ne * ne;
          }
          if (Me < n)
            break;
        }
        var xe = {
          rank: function(Be) {
            return Be = o.collection(Be)[0], re[u.indexOf(Be)];
          }
        };
        return xe;
      }
    }, _s = It({
      root: null,
      weight: function(e) {
        return 1;
      },
      directed: !1,
      alpha: 0
    }), da = {
      degreeCentralityNormalized: function(e) {
        e = _s(e);
        var r = this.cy(), a = this.nodes(), n = a.length;
        if (e.directed) {
          for (var f = {}, h = {}, c = 0, d = 0, v = 0; v < n; v++) {
            var y = a[v], p = y.id();
            e.root = y;
            var g = this.degreeCentrality(e);
            c < g.indegree && (c = g.indegree), d < g.outdegree && (d = g.outdegree), f[p] = g.indegree, h[p] = g.outdegree;
          }
          return {
            indegree: function(b) {
              return c == 0 ? 0 : (V(b) && (b = r.filter(b)), f[b.id()] / c);
            },
            outdegree: function(b) {
              return d === 0 ? 0 : (V(b) && (b = r.filter(b)), h[b.id()] / d);
            }
          };
        } else {
          for (var i = {}, s = 0, o = 0; o < n; o++) {
            var l = a[o];
            e.root = l;
            var u = this.degreeCentrality(e);
            s < u.degree && (s = u.degree), i[l.id()] = u.degree;
          }
          return {
            degree: function(b) {
              return s === 0 ? 0 : (V(b) && (b = r.filter(b)), i[b.id()] / s);
            }
          };
        }
      },
      degreeCentrality: function(e) {
        e = _s(e);
        var r = this.cy(), a = this, n = e, i = n.root, s = n.weight, o = n.directed, l = n.alpha;
        if (i = r.collection(i)[0], o) {
          for (var d = i.connectedEdges(), v = d.filter(function(S) {
            return S.target().same(i) && a.has(S);
          }), y = d.filter(function(S) {
            return S.source().same(i) && a.has(S);
          }), p = v.length, g = y.length, m = 0, b = 0, E = 0; E < v.length; E++)
            m += s(v[E]);
          for (var M = 0; M < y.length; M++)
            b += s(y[M]);
          return {
            indegree: Math.pow(p, 1 - l) * Math.pow(m, l),
            outdegree: Math.pow(g, 1 - l) * Math.pow(b, l)
          };
        } else {
          for (var u = i.connectedEdges().intersection(a), f = u.length, h = 0, c = 0; c < u.length; c++)
            h += s(u[c]);
          return {
            degree: Math.pow(f, 1 - l) * Math.pow(h, l)
          };
        }
      }
    };
    da.dc = da.degreeCentrality, da.dcn = da.degreeCentralityNormalised = da.degreeCentralityNormalized;
    var Hs = It({
      harmonic: !0,
      weight: function() {
        return 1;
      },
      directed: !1,
      root: null
    }), ga = {
      closenessCentralityNormalized: function(e) {
        for (var r = Hs(e), a = r.harmonic, n = r.weight, i = r.directed, s = this.cy(), o = {}, l = 0, u = this.nodes(), f = this.floydWarshall({
          weight: n,
          directed: i
        }), h = 0; h < u.length; h++) {
          for (var c = 0, d = u[h], v = 0; v < u.length; v++)
            if (h !== v) {
              var y = f.distance(d, u[v]);
              a ? c += 1 / y : c += y;
            }
          a || (c = 1 / c), l < c && (l = c), o[d.id()] = c;
        }
        return {
          closeness: function(g) {
            return l == 0 ? 0 : (V(g) ? g = s.filter(g)[0].id() : g = g.id(), o[g] / l);
          }
        };
      },
      closenessCentrality: function(e) {
        var r = Hs(e), a = r.root, n = r.weight, i = r.directed, s = r.harmonic;
        a = this.filter(a)[0];
        for (var o = this.dijkstra({
          root: a,
          weight: n,
          directed: i
        }), l = 0, u = this.nodes(), f = 0; f < u.length; f++) {
          var h = u[f];
          if (!h.same(a)) {
            var c = o.distanceTo(h);
            s ? l += 1 / c : l += c;
          }
        }
        return s ? l : 1 / l;
      }
    };
    ga.cc = ga.closenessCentrality, ga.ccn = ga.closenessCentralityNormalised = ga.closenessCentralityNormalized;
    var ch = It({
      weight: null,
      directed: !1
    }), Li = {
      betweennessCentrality: function(e) {
        for (var r = ch(e), a = r.directed, n = r.weight, i = n != null, s = this.cy(), o = this.nodes(), l = {}, u = {}, f = 0, h = {
          set: function(b, E) {
            u[b] = E, E > f && (f = E);
          },
          get: function(b) {
            return u[b];
          }
        }, c = 0; c < o.length; c++) {
          var d = o[c], v = d.id();
          a ? l[v] = d.outgoers().nodes() : l[v] = d.openNeighborhood().nodes(), h.set(v, 0);
        }
        for (var y = function(b) {
          for (var E = o[b].id(), M = [], S = {}, x = {}, I = {}, A = new Ha(function(Le, Ae) {
            return I[Le] - I[Ae];
          }), z = 0; z < o.length; z++) {
            var F = o[z].id();
            S[F] = [], x[F] = 0, I[F] = 1 / 0;
          }
          for (x[E] = 1, I[E] = 0, A.push(E); !A.empty(); ) {
            var G = A.pop();
            if (M.push(G), i)
              for (var X = 0; X < l[G].length; X++) {
                var P = l[G][X], Q = s.getElementById(G), W = void 0;
                Q.edgesTo(P).length > 0 ? W = Q.edgesTo(P)[0] : W = P.edgesTo(Q)[0];
                var Z = n(W);
                P = P.id(), I[P] > I[G] + Z && (I[P] = I[G] + Z, A.nodes.indexOf(P) < 0 ? A.push(P) : A.updateItem(P), x[P] = 0, S[P] = []), I[P] == I[G] + Z && (x[P] = x[P] + x[G], S[P].push(G));
              }
            else
              for (var re = 0; re < l[G].length; re++) {
                var le = l[G][re].id();
                I[le] == 1 / 0 && (A.push(le), I[le] = I[G] + 1), I[le] == I[G] + 1 && (x[le] = x[le] + x[G], S[le].push(G));
              }
          }
          for (var ve = {}, se = 0; se < o.length; se++)
            ve[o[se].id()] = 0;
          for (; M.length > 0; ) {
            for (var ie = M.pop(), be = 0; be < S[ie].length; be++) {
              var De = S[ie][be];
              ve[De] = ve[De] + x[De] / x[ie] * (1 + ve[ie]);
            }
            ie != o[b].id() && h.set(ie, h.get(ie) + ve[ie]);
          }
        }, p = 0; p < o.length; p++)
          y(p);
        var g = {
          betweenness: function(b) {
            var E = s.collection(b).id();
            return h.get(E);
          },
          betweennessNormalized: function(b) {
            if (f == 0)
              return 0;
            var E = s.collection(b).id();
            return h.get(E) / f;
          }
        };
        return g.betweennessNormalised = g.betweennessNormalized, g;
      }
    };
    Li.bc = Li.betweennessCentrality;
    var vh = It({
      expandFactor: 2,
      inflateFactor: 2,
      multFactor: 1,
      maxIterations: 20,
      attributes: [
        function(t) {
          return 1;
        }
      ]
    }), dh = function(e) {
      return vh(e);
    }, gh = function(e, r) {
      for (var a = 0, n = 0; n < r.length; n++)
        a += r[n](e);
      return a;
    }, ph = function(e, r, a) {
      for (var n = 0; n < r; n++)
        e[n * r + n] = a;
    }, Xs = function(e, r) {
      for (var a, n = 0; n < r; n++) {
        a = 0;
        for (var i = 0; i < r; i++)
          a += e[i * r + n];
        for (var s = 0; s < r; s++)
          e[s * r + n] = e[s * r + n] / a;
      }
    }, yh = function(e, r, a) {
      for (var n = new Array(a * a), i = 0; i < a; i++) {
        for (var s = 0; s < a; s++)
          n[i * a + s] = 0;
        for (var o = 0; o < a; o++)
          for (var l = 0; l < a; l++)
            n[i * a + l] += e[i * a + o] * r[o * a + l];
      }
      return n;
    }, mh = function(e, r, a) {
      for (var n = e.slice(0), i = 1; i < a; i++)
        e = yh(e, n, r);
      return e;
    }, bh = function(e, r, a) {
      for (var n = new Array(r * r), i = 0; i < r * r; i++)
        n[i] = Math.pow(e[i], a);
      return Xs(n, r), n;
    }, Eh = function(e, r, a, n) {
      for (var i = 0; i < a; i++) {
        var s = Math.round(e[i] * Math.pow(10, n)) / Math.pow(10, n), o = Math.round(r[i] * Math.pow(10, n)) / Math.pow(10, n);
        if (s !== o)
          return !1;
      }
      return !0;
    }, wh = function(e, r, a, n) {
      for (var i = [], s = 0; s < r; s++) {
        for (var o = [], l = 0; l < r; l++)
          Math.round(e[s * r + l] * 1e3) / 1e3 > 0 && o.push(a[l]);
        o.length !== 0 && i.push(n.collection(o));
      }
      return i;
    }, xh = function(e, r) {
      for (var a = 0; a < e.length; a++)
        if (!r[a] || e[a].id() !== r[a].id())
          return !1;
      return !0;
    }, Th = function(e) {
      for (var r = 0; r < e.length; r++)
        for (var a = 0; a < e.length; a++)
          r != a && xh(e[r], e[a]) && e.splice(a, 1);
      return e;
    }, qs = function(e) {
      for (var r = this.nodes(), a = this.edges(), n = this.cy(), i = dh(e), s = {}, o = 0; o < r.length; o++)
        s[r[o].id()] = o;
      for (var l = r.length, u = l * l, f = new Array(u), h, c = 0; c < u; c++)
        f[c] = 0;
      for (var d = 0; d < a.length; d++) {
        var v = a[d], y = s[v.source().id()], p = s[v.target().id()], g = gh(v, i.attributes);
        f[y * l + p] += g, f[p * l + y] += g;
      }
      ph(f, l, i.multFactor), Xs(f, l);
      for (var m = !0, b = 0; m && b < i.maxIterations; )
        m = !1, h = mh(f, l, i.expandFactor), f = bh(h, l, i.inflateFactor), Eh(f, h, u, 4) || (m = !0), b++;
      var E = wh(f, l, r, n);
      return E = Th(E), E;
    }, Ch = {
      markovClustering: qs,
      mcl: qs
    }, Dh = function(e) {
      return e;
    }, Ws = function(e, r) {
      return Math.abs(r - e);
    }, Ks = function(e, r, a) {
      return e + Ws(r, a);
    }, Zs = function(e, r, a) {
      return e + Math.pow(a - r, 2);
    }, Sh = function(e) {
      return Math.sqrt(e);
    }, Lh = function(e, r, a) {
      return Math.max(e, Ws(r, a));
    }, Ka = function(e, r, a, n, i) {
      for (var s = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : Dh, o = n, l, u, f = 0; f < e; f++)
        l = r(f), u = a(f), o = i(o, l, u);
      return s(o);
    }, pa = {
      euclidean: function(e, r, a) {
        return e >= 2 ? Ka(e, r, a, 0, Zs, Sh) : Ka(e, r, a, 0, Ks);
      },
      squaredEuclidean: function(e, r, a) {
        return Ka(e, r, a, 0, Zs);
      },
      manhattan: function(e, r, a) {
        return Ka(e, r, a, 0, Ks);
      },
      max: function(e, r, a) {
        return Ka(e, r, a, -1 / 0, Lh);
      }
    };
    pa["squared-euclidean"] = pa.squaredEuclidean, pa.squaredeuclidean = pa.squaredEuclidean;
    function Rn(t, e, r, a, n, i) {
      var s;
      return te(t) ? s = t : s = pa[t] || pa.euclidean, e === 0 && te(t) ? s(n, i) : s(e, r, a, n, i);
    }
    var Ah = It({
      k: 2,
      m: 2,
      sensitivityThreshold: 1e-4,
      distance: "euclidean",
      maxIterations: 10,
      attributes: [],
      testMode: !1,
      testCentroids: null
    }), Ai = function(e) {
      return Ah(e);
    }, kn = function(e, r, a, n, i) {
      var s = i !== "kMedoids", o = s ? function(h) {
        return a[h];
      } : function(h) {
        return n[h](a);
      }, l = function(c) {
        return n[c](r);
      }, u = a, f = r;
      return Rn(e, n.length, o, l, u, f);
    }, Oi = function(e, r, a) {
      for (var n = a.length, i = new Array(n), s = new Array(n), o = new Array(r), l = null, u = 0; u < n; u++)
        i[u] = e.min(a[u]).value, s[u] = e.max(a[u]).value;
      for (var f = 0; f < r; f++) {
        l = [];
        for (var h = 0; h < n; h++)
          l[h] = Math.random() * (s[h] - i[h]) + i[h];
        o[f] = l;
      }
      return o;
    }, Qs = function(e, r, a, n, i) {
      for (var s = 1 / 0, o = 0, l = 0; l < r.length; l++) {
        var u = kn(a, e, r[l], n, i);
        u < s && (s = u, o = l);
      }
      return o;
    }, Js = function(e, r, a) {
      for (var n = [], i = null, s = 0; s < r.length; s++)
        i = r[s], a[i.id()] === e && n.push(i);
      return n;
    }, Oh = function(e, r, a) {
      return Math.abs(r - e) <= a;
    }, Mh = function(e, r, a) {
      for (var n = 0; n < e.length; n++)
        for (var i = 0; i < e[n].length; i++) {
          var s = Math.abs(e[n][i] - r[n][i]);
          if (s > a)
            return !1;
        }
      return !0;
    }, Nh = function(e, r, a) {
      for (var n = 0; n < a; n++)
        if (e === r[n])
          return !0;
      return !1;
    }, js = function(e, r) {
      var a = new Array(r);
      if (e.length < 50)
        for (var n = 0; n < r; n++) {
          for (var i = e[Math.floor(Math.random() * e.length)]; Nh(i, a, n); )
            i = e[Math.floor(Math.random() * e.length)];
          a[n] = i;
        }
      else
        for (var s = 0; s < r; s++)
          a[s] = e[Math.floor(Math.random() * e.length)];
      return a;
    }, eo = function(e, r, a) {
      for (var n = 0, i = 0; i < r.length; i++)
        n += kn("manhattan", r[i], e, a, "kMedoids");
      return n;
    }, Ih = function(e) {
      var r = this.cy(), a = this.nodes(), n = null, i = Ai(e), s = new Array(i.k), o = {}, l;
      i.testMode ? typeof i.testCentroids == "number" ? (i.testCentroids, l = Oi(a, i.k, i.attributes)) : J(i.testCentroids) === "object" ? l = i.testCentroids : l = Oi(a, i.k, i.attributes) : l = Oi(a, i.k, i.attributes);
      for (var u = !0, f = 0; u && f < i.maxIterations; ) {
        for (var h = 0; h < a.length; h++)
          n = a[h], o[n.id()] = Qs(n, l, i.distance, i.attributes, "kMeans");
        u = !1;
        for (var c = 0; c < i.k; c++) {
          var d = Js(c, a, o);
          if (d.length !== 0) {
            for (var v = i.attributes.length, y = l[c], p = new Array(v), g = new Array(v), m = 0; m < v; m++) {
              g[m] = 0;
              for (var b = 0; b < d.length; b++)
                n = d[b], g[m] += i.attributes[m](n);
              p[m] = g[m] / d.length, Oh(p[m], y[m], i.sensitivityThreshold) || (u = !0);
            }
            l[c] = p, s[c] = r.collection(d);
          }
        }
        f++;
      }
      return s;
    }, Rh = function(e) {
      var r = this.cy(), a = this.nodes(), n = null, i = Ai(e), s = new Array(i.k), o, l = {}, u, f = new Array(i.k);
      i.testMode ? typeof i.testCentroids == "number" || (J(i.testCentroids) === "object" ? o = i.testCentroids : o = js(a, i.k)) : o = js(a, i.k);
      for (var h = !0, c = 0; h && c < i.maxIterations; ) {
        for (var d = 0; d < a.length; d++)
          n = a[d], l[n.id()] = Qs(n, o, i.distance, i.attributes, "kMedoids");
        h = !1;
        for (var v = 0; v < o.length; v++) {
          var y = Js(v, a, l);
          if (y.length !== 0) {
            f[v] = eo(o[v], y, i.attributes);
            for (var p = 0; p < y.length; p++)
              u = eo(y[p], y, i.attributes), u < f[v] && (f[v] = u, o[v] = y[p], h = !0);
            s[v] = r.collection(y);
          }
        }
        c++;
      }
      return s;
    }, kh = function(e, r, a, n, i) {
      for (var s, o, l = 0; l < r.length; l++)
        for (var u = 0; u < e.length; u++)
          n[l][u] = Math.pow(a[l][u], i.m);
      for (var f = 0; f < e.length; f++)
        for (var h = 0; h < i.attributes.length; h++) {
          s = 0, o = 0;
          for (var c = 0; c < r.length; c++)
            s += n[c][f] * i.attributes[h](r[c]), o += n[c][f];
          e[f][h] = s / o;
        }
    }, Ph = function(e, r, a, n, i) {
      for (var s = 0; s < e.length; s++)
        r[s] = e[s].slice();
      for (var o, l, u, f = 2 / (i.m - 1), h = 0; h < a.length; h++)
        for (var c = 0; c < n.length; c++) {
          o = 0;
          for (var d = 0; d < a.length; d++)
            l = kn(i.distance, n[c], a[h], i.attributes, "cmeans"), u = kn(i.distance, n[c], a[d], i.attributes, "cmeans"), o += Math.pow(l / u, f);
          e[c][h] = 1 / o;
        }
    }, Bh = function(e, r, a, n) {
      for (var i = new Array(a.k), s = 0; s < i.length; s++)
        i[s] = [];
      for (var o, l, u = 0; u < r.length; u++) {
        o = -1 / 0, l = -1;
        for (var f = 0; f < r[0].length; f++)
          r[u][f] > o && (o = r[u][f], l = f);
        i[l].push(e[u]);
      }
      for (var h = 0; h < i.length; h++)
        i[h] = n.collection(i[h]);
      return i;
    }, to = function(e) {
      var r = this.cy(), a = this.nodes(), n = Ai(e), i, s, o, l, u;
      l = new Array(a.length);
      for (var f = 0; f < a.length; f++)
        l[f] = new Array(n.k);
      o = new Array(a.length);
      for (var h = 0; h < a.length; h++)
        o[h] = new Array(n.k);
      for (var c = 0; c < a.length; c++) {
        for (var d = 0, v = 0; v < n.k; v++)
          o[c][v] = Math.random(), d += o[c][v];
        for (var y = 0; y < n.k; y++)
          o[c][y] = o[c][y] / d;
      }
      s = new Array(n.k);
      for (var p = 0; p < n.k; p++)
        s[p] = new Array(n.attributes.length);
      u = new Array(a.length);
      for (var g = 0; g < a.length; g++)
        u[g] = new Array(n.k);
      for (var m = !0, b = 0; m && b < n.maxIterations; )
        m = !1, kh(s, a, o, u, n), Ph(o, l, s, a, n), Mh(o, l, n.sensitivityThreshold) || (m = !0), b++;
      return i = Bh(a, o, n, r), {
        clusters: i,
        degreeOfMembership: o
      };
    }, Fh = {
      kMeans: Ih,
      kMedoids: Rh,
      fuzzyCMeans: to,
      fcm: to
    }, Gh = It({
      distance: "euclidean",
      linkage: "min",
      mode: "threshold",
      threshold: 1 / 0,
      addDendrogram: !1,
      dendrogramDepth: 0,
      attributes: []
    }), zh = {
      single: "min",
      complete: "max"
    }, Vh = function(e) {
      var r = Gh(e), a = zh[r.linkage];
      return a != null && (r.linkage = a), r;
    }, ro = function(e, r, a, n, i) {
      for (var s = 0, o = 1 / 0, l, u = i.attributes, f = function(A, z) {
        return Rn(i.distance, u.length, function(F) {
          return u[F](A);
        }, function(F) {
          return u[F](z);
        }, A, z);
      }, h = 0; h < e.length; h++) {
        var c = e[h].key, d = a[c][n[c]];
        d < o && (s = c, o = d);
      }
      if (i.mode === "threshold" && o >= i.threshold || i.mode === "dendrogram" && e.length === 1)
        return !1;
      var v = r[s], y = r[n[s]], p;
      i.mode === "dendrogram" ? p = {
        left: v,
        right: y,
        key: v.key
      } : p = {
        value: v.value.concat(y.value),
        key: v.key
      }, e[v.index] = p, e.splice(y.index, 1), r[v.key] = p;
      for (var g = 0; g < e.length; g++) {
        var m = e[g];
        v.key === m.key ? l = 1 / 0 : i.linkage === "min" ? (l = a[v.key][m.key], a[v.key][m.key] > a[y.key][m.key] && (l = a[y.key][m.key])) : i.linkage === "max" ? (l = a[v.key][m.key], a[v.key][m.key] < a[y.key][m.key] && (l = a[y.key][m.key])) : i.linkage === "mean" ? l = (a[v.key][m.key] * v.size + a[y.key][m.key] * y.size) / (v.size + y.size) : i.mode === "dendrogram" ? l = f(m.value, v.value) : l = f(m.value[0], v.value[0]), a[v.key][m.key] = a[m.key][v.key] = l;
      }
      for (var b = 0; b < e.length; b++) {
        var E = e[b].key;
        if (n[E] === v.key || n[E] === y.key) {
          for (var M = E, S = 0; S < e.length; S++) {
            var x = e[S].key;
            a[E][x] < a[E][M] && (M = x);
          }
          n[E] = M;
        }
        e[b].index = b;
      }
      return v.key = y.key = v.index = y.index = null, !0;
    }, Pn = function t(e, r, a) {
      !e || (e.value ? r.push(e.value) : (e.left && t(e.left, r), e.right && t(e.right, r)));
    }, Uh = function t(e, r) {
      if (!e)
        return "";
      if (e.left && e.right) {
        var a = t(e.left, r), n = t(e.right, r), i = r.add({
          group: "nodes",
          data: {
            id: a + "," + n
          }
        });
        return r.add({
          group: "edges",
          data: {
            source: a,
            target: i.id()
          }
        }), r.add({
          group: "edges",
          data: {
            source: n,
            target: i.id()
          }
        }), i.id();
      } else if (e.value)
        return e.value.id();
    }, $h = function t(e, r, a) {
      if (!e)
        return [];
      var n = [], i = [], s = [];
      return r === 0 ? (e.left && Pn(e.left, n), e.right && Pn(e.right, i), s = n.concat(i), [a.collection(s)]) : r === 1 ? e.value ? [a.collection(e.value)] : (e.left && Pn(e.left, n), e.right && Pn(e.right, i), [a.collection(n), a.collection(i)]) : e.value ? [a.collection(e.value)] : (e.left && (n = t(e.left, r - 1, a)), e.right && (i = t(e.right, r - 1, a)), n.concat(i));
    }, ao = function(e) {
      for (var r = this.cy(), a = this.nodes(), n = Vh(e), i = n.attributes, s = function(b, E) {
        return Rn(n.distance, i.length, function(M) {
          return i[M](b);
        }, function(M) {
          return i[M](E);
        }, b, E);
      }, o = [], l = [], u = [], f = [], h = 0; h < a.length; h++) {
        var c = {
          value: n.mode === "dendrogram" ? a[h] : [a[h]],
          key: h,
          index: h
        };
        o[h] = c, f[h] = c, l[h] = [], u[h] = 0;
      }
      for (var d = 0; d < o.length; d++)
        for (var v = 0; v <= d; v++) {
          var y = void 0;
          n.mode === "dendrogram" ? y = d === v ? 1 / 0 : s(o[d].value, o[v].value) : y = d === v ? 1 / 0 : s(o[d].value[0], o[v].value[0]), l[d][v] = y, l[v][d] = y, y < l[d][u[d]] && (u[d] = v);
        }
      for (var p = ro(o, f, l, u, n); p; )
        p = ro(o, f, l, u, n);
      var g;
      return n.mode === "dendrogram" ? (g = $h(o[0], n.dendrogramDepth, r), n.addDendrogram && Uh(o[0], r)) : (g = new Array(o.length), o.forEach(function(m, b) {
        m.key = m.index = null, g[b] = r.collection(m.value);
      })), g;
    }, Yh = {
      hierarchicalClustering: ao,
      hca: ao
    }, _h = It({
      distance: "euclidean",
      preference: "median",
      damping: 0.8,
      maxIterations: 1e3,
      minIterations: 100,
      attributes: []
    }), Hh = function(e) {
      var r = e.damping, a = e.preference;
      0.5 <= r && r < 1 || Dt("Damping must range on [0.5, 1).  Got: ".concat(r));
      var n = ["median", "mean", "min", "max"];
      return n.some(function(i) {
        return i === a;
      }) || R(a) || Dt("Preference must be one of [".concat(n.map(function(i) {
        return "'".concat(i, "'");
      }).join(", "), "] or a number.  Got: ").concat(a)), _h(e);
    }, Xh = function(e, r, a, n) {
      var i = function(o, l) {
        return n[l](o);
      };
      return -Rn(e, n.length, function(s) {
        return i(r, s);
      }, function(s) {
        return i(a, s);
      }, r, a);
    }, qh = function(e, r) {
      var a = null;
      return r === "median" ? a = Hf(e) : r === "mean" ? a = _f(e) : r === "min" ? a = $f(e) : r === "max" ? a = Yf(e) : a = r, a;
    }, Wh = function(e, r, a) {
      for (var n = [], i = 0; i < e; i++)
        r[i * e + i] + a[i * e + i] > 0 && n.push(i);
      return n;
    }, no = function(e, r, a) {
      for (var n = [], i = 0; i < e; i++) {
        for (var s = -1, o = -1 / 0, l = 0; l < a.length; l++) {
          var u = a[l];
          r[i * e + u] > o && (s = u, o = r[i * e + u]);
        }
        s > 0 && n.push(s);
      }
      for (var f = 0; f < a.length; f++)
        n[a[f]] = a[f];
      return n;
    }, Kh = function(e, r, a) {
      for (var n = no(e, r, a), i = 0; i < a.length; i++) {
        for (var s = [], o = 0; o < n.length; o++)
          n[o] === a[i] && s.push(o);
        for (var l = -1, u = -1 / 0, f = 0; f < s.length; f++) {
          for (var h = 0, c = 0; c < s.length; c++)
            h += r[s[c] * e + s[f]];
          h > u && (l = f, u = h);
        }
        a[i] = s[l];
      }
      return n = no(e, r, a), n;
    }, io = function(e) {
      for (var r = this.cy(), a = this.nodes(), n = Hh(e), i = {}, s = 0; s < a.length; s++)
        i[a[s].id()] = s;
      var o, l, u, f, h, c;
      o = a.length, l = o * o, u = new Array(l);
      for (var d = 0; d < l; d++)
        u[d] = -1 / 0;
      for (var v = 0; v < o; v++)
        for (var y = 0; y < o; y++)
          v !== y && (u[v * o + y] = Xh(n.distance, a[v], a[y], n.attributes));
      f = qh(u, n.preference);
      for (var p = 0; p < o; p++)
        u[p * o + p] = f;
      h = new Array(l);
      for (var g = 0; g < l; g++)
        h[g] = 0;
      c = new Array(l);
      for (var m = 0; m < l; m++)
        c[m] = 0;
      for (var b = new Array(o), E = new Array(o), M = new Array(o), S = 0; S < o; S++)
        b[S] = 0, E[S] = 0, M[S] = 0;
      for (var x = new Array(o * n.minIterations), I = 0; I < x.length; I++)
        x[I] = 0;
      var A;
      for (A = 0; A < n.maxIterations; A++) {
        for (var z = 0; z < o; z++) {
          for (var F = -1 / 0, G = -1 / 0, X = -1, P = 0, Q = 0; Q < o; Q++)
            b[Q] = h[z * o + Q], P = c[z * o + Q] + u[z * o + Q], P >= F ? (G = F, F = P, X = Q) : P > G && (G = P);
          for (var W = 0; W < o; W++)
            h[z * o + W] = (1 - n.damping) * (u[z * o + W] - F) + n.damping * b[W];
          h[z * o + X] = (1 - n.damping) * (u[z * o + X] - G) + n.damping * b[X];
        }
        for (var Z = 0; Z < o; Z++) {
          for (var re = 0, le = 0; le < o; le++)
            b[le] = c[le * o + Z], E[le] = Math.max(0, h[le * o + Z]), re += E[le];
          re -= E[Z], E[Z] = h[Z * o + Z], re += E[Z];
          for (var ve = 0; ve < o; ve++)
            c[ve * o + Z] = (1 - n.damping) * Math.min(0, re - E[ve]) + n.damping * b[ve];
          c[Z * o + Z] = (1 - n.damping) * (re - E[Z]) + n.damping * b[Z];
        }
        for (var se = 0, ie = 0; ie < o; ie++) {
          var be = c[ie * o + ie] + h[ie * o + ie] > 0 ? 1 : 0;
          x[A % n.minIterations * o + ie] = be, se += be;
        }
        if (se > 0 && (A >= n.minIterations - 1 || A == n.maxIterations - 1)) {
          for (var De = 0, Le = 0; Le < o; Le++) {
            M[Le] = 0;
            for (var Ae = 0; Ae < n.minIterations; Ae++)
              M[Le] += x[Ae * o + Le];
            (M[Le] === 0 || M[Le] === n.minIterations) && De++;
          }
          if (De === o)
            break;
        }
      }
      for (var Me = Wh(o, h, c), Ee = Kh(o, u, Me), ne = {}, xe = 0; xe < Me.length; xe++)
        ne[Me[xe]] = [];
      for (var Te = 0; Te < a.length; Te++) {
        var Be = i[a[Te].id()], He = Ee[Be];
        He != null && ne[He].push(a[Te]);
      }
      for (var ke = new Array(Me.length), Pe = 0; Pe < Me.length; Pe++)
        ke[Pe] = r.collection(ne[Me[Pe]]);
      return ke;
    }, Zh = {
      affinityPropagation: io,
      ap: io
    }, Qh = It({
      root: void 0,
      directed: !1
    }), Jh = {
      hierholzer: function(e) {
        if (!B(e)) {
          var r = arguments;
          e = {
            root: r[0],
            directed: r[1]
          };
        }
        var a = Qh(e), n = a.root, i = a.directed, s = this, o = !1, l, u, f;
        n && (f = V(n) ? this.filter(n)[0].id() : n[0].id());
        var h = {}, c = {};
        i ? s.forEach(function(m) {
          var b = m.id();
          if (m.isNode()) {
            var E = m.indegree(!0), M = m.outdegree(!0), S = E - M, x = M - E;
            S == 1 ? l ? o = !0 : l = b : x == 1 ? u ? o = !0 : u = b : (x > 1 || S > 1) && (o = !0), h[b] = [], m.outgoers().forEach(function(I) {
              I.isEdge() && h[b].push(I.id());
            });
          } else
            c[b] = [void 0, m.target().id()];
        }) : s.forEach(function(m) {
          var b = m.id();
          if (m.isNode()) {
            var E = m.degree(!0);
            E % 2 && (l ? u ? o = !0 : u = b : l = b), h[b] = [], m.connectedEdges().forEach(function(M) {
              return h[b].push(M.id());
            });
          } else
            c[b] = [m.source().id(), m.target().id()];
        });
        var d = {
          found: !1,
          trail: void 0
        };
        if (o)
          return d;
        if (u && l)
          if (i) {
            if (f && u != f)
              return d;
            f = u;
          } else {
            if (f && u != f && l != f)
              return d;
            f || (f = u);
          }
        else
          f || (f = s[0].id());
        var v = function(b) {
          for (var E = b, M = [b], S, x, I; h[E].length; )
            S = h[E].shift(), x = c[S][0], I = c[S][1], E != I ? (h[I] = h[I].filter(function(A) {
              return A != S;
            }), E = I) : !i && E != x && (h[x] = h[x].filter(function(A) {
              return A != S;
            }), E = x), M.unshift(S), M.unshift(E);
          return M;
        }, y = [], p = [];
        for (p = v(f); p.length != 1; )
          h[p[0]].length == 0 ? (y.unshift(s.getElementById(p.shift())), y.unshift(s.getElementById(p.shift()))) : p = v(p.shift()).concat(p);
        y.unshift(s.getElementById(p.shift()));
        for (var g in h)
          if (h[g].length)
            return d;
        return d.found = !0, d.trail = this.spawn(y, !0), d;
      }
    }, Bn = function() {
      var e = this, r = {}, a = 0, n = 0, i = [], s = [], o = {}, l = function(c, d) {
        for (var v = s.length - 1, y = [], p = e.spawn(); s[v].x != c || s[v].y != d; )
          y.push(s.pop().edge), v--;
        y.push(s.pop().edge), y.forEach(function(g) {
          var m = g.connectedNodes().intersection(e);
          p.merge(g), m.forEach(function(b) {
            var E = b.id(), M = b.connectedEdges().intersection(e);
            p.merge(b), r[E].cutVertex ? p.merge(M.filter(function(S) {
              return S.isLoop();
            })) : p.merge(M);
          });
        }), i.push(p);
      }, u = function h(c, d, v) {
        c === v && (n += 1), r[d] = {
          id: a,
          low: a++,
          cutVertex: !1
        };
        var y = e.getElementById(d).connectedEdges().intersection(e);
        if (y.size() === 0)
          i.push(e.spawn(e.getElementById(d)));
        else {
          var p, g, m, b;
          y.forEach(function(E) {
            p = E.source().id(), g = E.target().id(), m = p === d ? g : p, m !== v && (b = E.id(), o[b] || (o[b] = !0, s.push({
              x: d,
              y: m,
              edge: E
            })), m in r ? r[d].low = Math.min(r[d].low, r[m].id) : (h(c, m, d), r[d].low = Math.min(r[d].low, r[m].low), r[d].id <= r[m].low && (r[d].cutVertex = !0, l(d, m))));
          });
        }
      };
      e.forEach(function(h) {
        if (h.isNode()) {
          var c = h.id();
          c in r || (n = 0, u(c, c), r[c].cutVertex = n > 1);
        }
      });
      var f = Object.keys(r).filter(function(h) {
        return r[h].cutVertex;
      }).map(function(h) {
        return e.getElementById(h);
      });
      return {
        cut: e.spawn(f),
        components: i
      };
    }, jh = {
      hopcroftTarjanBiconnected: Bn,
      htbc: Bn,
      htb: Bn,
      hopcroftTarjanBiconnectedComponents: Bn
    }, Fn = function() {
      var e = this, r = {}, a = 0, n = [], i = [], s = e.spawn(e), o = function l(u) {
        i.push(u), r[u] = {
          index: a,
          low: a++,
          explored: !1
        };
        var f = e.getElementById(u).connectedEdges().intersection(e);
        if (f.forEach(function(y) {
          var p = y.target().id();
          p !== u && (p in r || l(p), r[p].explored || (r[u].low = Math.min(r[u].low, r[p].low)));
        }), r[u].index === r[u].low) {
          for (var h = e.spawn(); ; ) {
            var c = i.pop();
            if (h.merge(e.getElementById(c)), r[c].low = r[u].index, r[c].explored = !0, c === u)
              break;
          }
          var d = h.edgesWith(h), v = h.merge(d);
          n.push(v), s = s.difference(v);
        }
      };
      return e.forEach(function(l) {
        if (l.isNode()) {
          var u = l.id();
          u in r || o(u);
        }
      }), {
        cut: s,
        components: n
      };
    }, ec = {
      tarjanStronglyConnected: Fn,
      tsc: Fn,
      tscc: Fn,
      tarjanStronglyConnectedComponents: Fn
    }, so = {};
    [_a, Mf, Nf, Rf, Pf, Ff, Vf, hh, da, ga, Li, Ch, Fh, Yh, Zh, Jh, jh, ec].forEach(function(t) {
      Qe(so, t);
    });
    /*!
    Embeddable Minimum Strictly-Compliant Promises/A+ 1.1.1 Thenable
    Copyright (c) 2013-2014 Ralf S. Engelschall (http://engelschall.com)
    Licensed under The MIT License (http://opensource.org/licenses/MIT)
    */
    var oo = 0, uo = 1, lo = 2, Sr = function t(e) {
      if (!(this instanceof t))
        return new t(e);
      this.id = "Thenable/1.0.7", this.state = oo, this.fulfillValue = void 0, this.rejectReason = void 0, this.onFulfilled = [], this.onRejected = [], this.proxy = {
        then: this.then.bind(this)
      }, typeof e == "function" && e.call(this, this.fulfill.bind(this), this.reject.bind(this));
    };
    Sr.prototype = {
      fulfill: function(e) {
        return fo(this, uo, "fulfillValue", e);
      },
      reject: function(e) {
        return fo(this, lo, "rejectReason", e);
      },
      then: function(e, r) {
        var a = this, n = new Sr();
        return a.onFulfilled.push(vo(e, n, "fulfill")), a.onRejected.push(vo(r, n, "reject")), ho(a), n.proxy;
      }
    };
    var fo = function(e, r, a, n) {
      return e.state === oo && (e.state = r, e[a] = n, ho(e)), e;
    }, ho = function(e) {
      e.state === uo ? co(e, "onFulfilled", e.fulfillValue) : e.state === lo && co(e, "onRejected", e.rejectReason);
    }, co = function(e, r, a) {
      if (e[r].length !== 0) {
        var n = e[r];
        e[r] = [];
        var i = function() {
          for (var o = 0; o < n.length; o++)
            n[o](a);
        };
        typeof setImmediate == "function" ? setImmediate(i) : setTimeout(i, 0);
      }
    }, vo = function(e, r, a) {
      return function(n) {
        if (typeof e != "function")
          r[a].call(r, n);
        else {
          var i;
          try {
            i = e(n);
          } catch (s) {
            r.reject(s);
            return;
          }
          tc(r, i);
        }
      };
    }, tc = function t(e, r) {
      if (e === r || e.proxy === r) {
        e.reject(new TypeError("cannot resolve promise with itself"));
        return;
      }
      var a;
      if (J(r) === "object" && r !== null || typeof r == "function")
        try {
          a = r.then;
        } catch (i) {
          e.reject(i);
          return;
        }
      if (typeof a == "function") {
        var n = !1;
        try {
          a.call(
            r,
            function(i) {
              n || (n = !0, i === r ? e.reject(new TypeError("circular thenable chain")) : t(e, i));
            },
            function(i) {
              n || (n = !0, e.reject(i));
            }
          );
        } catch (i) {
          n || e.reject(i);
        }
        return;
      }
      e.fulfill(r);
    };
    Sr.all = function(t) {
      return new Sr(function(e, r) {
        for (var a = new Array(t.length), n = 0, i = function(l, u) {
          a[l] = u, n++, n === t.length && e(a);
        }, s = 0; s < t.length; s++)
          (function(o) {
            var l = t[o], u = l != null && l.then != null;
            if (u)
              l.then(function(h) {
                i(o, h);
              }, function(h) {
                r(h);
              });
            else {
              var f = l;
              i(o, f);
            }
          })(s);
      });
    }, Sr.resolve = function(t) {
      return new Sr(function(e, r) {
        e(t);
      });
    }, Sr.reject = function(t) {
      return new Sr(function(e, r) {
        r(t);
      });
    };
    var ya = typeof Promise < "u" ? Promise : Sr, Mi = function(e, r, a) {
      var n = rt(e), i = !n, s = this._private = Qe({
        duration: 1e3
      }, r, a);
      if (s.target = e, s.style = s.style || s.css, s.started = !1, s.playing = !1, s.hooked = !1, s.applying = !1, s.progress = 0, s.completes = [], s.frames = [], s.complete && te(s.complete) && s.completes.push(s.complete), i) {
        var o = e.position();
        s.startPosition = s.startPosition || {
          x: o.x,
          y: o.y
        }, s.startStyle = s.startStyle || e.cy().style().getAnimationStartStyle(e, s.style);
      }
      if (n) {
        var l = e.pan();
        s.startPan = {
          x: l.x,
          y: l.y
        }, s.startZoom = e.zoom();
      }
      this.length = 1, this[0] = this;
    }, Kr = Mi.prototype;
    Qe(Kr, {
      instanceString: function() {
        return "animation";
      },
      hook: function() {
        var e = this._private;
        if (!e.hooked) {
          var r, a = e.target._private.animation;
          e.queue ? r = a.queue : r = a.current, r.push(this), Oe(e.target) && e.target.cy().addToAnimationPool(e.target), e.hooked = !0;
        }
        return this;
      },
      play: function() {
        var e = this._private;
        return e.progress === 1 && (e.progress = 0), e.playing = !0, e.started = !1, e.stopped = !1, this.hook(), this;
      },
      playing: function() {
        return this._private.playing;
      },
      apply: function() {
        var e = this._private;
        return e.applying = !0, e.started = !1, e.stopped = !1, this.hook(), this;
      },
      applying: function() {
        return this._private.applying;
      },
      pause: function() {
        var e = this._private;
        return e.playing = !1, e.started = !1, this;
      },
      stop: function() {
        var e = this._private;
        return e.playing = !1, e.started = !1, e.stopped = !0, this;
      },
      rewind: function() {
        return this.progress(0);
      },
      fastforward: function() {
        return this.progress(1);
      },
      time: function(e) {
        var r = this._private;
        return e === void 0 ? r.progress * r.duration : this.progress(e / r.duration);
      },
      progress: function(e) {
        var r = this._private, a = r.playing;
        return e === void 0 ? r.progress : (a && this.pause(), r.progress = e, r.started = !1, a && this.play(), this);
      },
      completed: function() {
        return this._private.progress === 1;
      },
      reverse: function() {
        var e = this._private, r = e.playing;
        r && this.pause(), e.progress = 1 - e.progress, e.started = !1;
        var a = function(u, f) {
          var h = e[u];
          h != null && (e[u] = e[f], e[f] = h);
        };
        if (a("zoom", "startZoom"), a("pan", "startPan"), a("position", "startPosition"), e.style)
          for (var n = 0; n < e.style.length; n++) {
            var i = e.style[n], s = i.name, o = e.startStyle[s];
            e.startStyle[s] = i, e.style[n] = o;
          }
        return r && this.play(), this;
      },
      promise: function(e) {
        var r = this._private, a;
        switch (e) {
          case "frame":
            a = r.frames;
            break;
          default:
          case "complete":
          case "completed":
            a = r.completes;
        }
        return new ya(function(n, i) {
          a.push(function() {
            n();
          });
        });
      }
    }), Kr.complete = Kr.completed, Kr.run = Kr.play, Kr.running = Kr.playing;
    var rc = {
      animated: function() {
        return function() {
          var r = this, a = r.length !== void 0, n = a ? r : [r], i = this._private.cy || this;
          if (!i.styleEnabled())
            return !1;
          var s = n[0];
          if (s)
            return s._private.animation.current.length > 0;
        };
      },
      clearQueue: function() {
        return function() {
          var r = this, a = r.length !== void 0, n = a ? r : [r], i = this._private.cy || this;
          if (!i.styleEnabled())
            return this;
          for (var s = 0; s < n.length; s++) {
            var o = n[s];
            o._private.animation.queue = [];
          }
          return this;
        };
      },
      delay: function() {
        return function(r, a) {
          var n = this._private.cy || this;
          return n.styleEnabled() ? this.animate({
            delay: r,
            duration: r,
            complete: a
          }) : this;
        };
      },
      delayAnimation: function() {
        return function(r, a) {
          var n = this._private.cy || this;
          return n.styleEnabled() ? this.animation({
            delay: r,
            duration: r,
            complete: a
          }) : this;
        };
      },
      animation: function() {
        return function(r, a) {
          var n = this, i = n.length !== void 0, s = i ? n : [n], o = this._private.cy || this, l = !i, u = !l;
          if (!o.styleEnabled())
            return this;
          var f = o.style();
          r = Qe({}, r, a);
          var h = Object.keys(r).length === 0;
          if (h)
            return new Mi(s[0], r);
          switch (r.duration === void 0 && (r.duration = 400), r.duration) {
            case "slow":
              r.duration = 600;
              break;
            case "fast":
              r.duration = 200;
              break;
          }
          if (u && (r.style = f.getPropsList(r.style || r.css), r.css = void 0), u && r.renderedPosition != null) {
            var c = r.renderedPosition, d = o.pan(), v = o.zoom();
            r.position = Bs(c, v, d);
          }
          if (l && r.panBy != null) {
            var y = r.panBy, p = o.pan();
            r.pan = {
              x: p.x + y.x,
              y: p.y + y.y
            };
          }
          var g = r.center || r.centre;
          if (l && g != null) {
            var m = o.getCenterPan(g.eles, r.zoom);
            m != null && (r.pan = m);
          }
          if (l && r.fit != null) {
            var b = r.fit, E = o.getFitViewport(b.eles || b.boundingBox, b.padding);
            E != null && (r.pan = E.pan, r.zoom = E.zoom);
          }
          if (l && B(r.zoom)) {
            var M = o.getZoomedViewport(r.zoom);
            M != null ? (M.zoomed && (r.zoom = M.zoom), M.panned && (r.pan = M.pan)) : r.zoom = null;
          }
          return new Mi(s[0], r);
        };
      },
      animate: function() {
        return function(r, a) {
          var n = this, i = n.length !== void 0, s = i ? n : [n], o = this._private.cy || this;
          if (!o.styleEnabled())
            return this;
          a && (r = Qe({}, r, a));
          for (var l = 0; l < s.length; l++) {
            var u = s[l], f = u.animated() && (r.queue === void 0 || r.queue), h = u.animation(r, f ? {
              queue: !0
            } : void 0);
            h.play();
          }
          return this;
        };
      },
      stop: function() {
        return function(r, a) {
          var n = this, i = n.length !== void 0, s = i ? n : [n], o = this._private.cy || this;
          if (!o.styleEnabled())
            return this;
          for (var l = 0; l < s.length; l++) {
            for (var u = s[l], f = u._private, h = f.animation.current, c = 0; c < h.length; c++) {
              var d = h[c], v = d._private;
              a && (v.duration = 0);
            }
            r && (f.animation.queue = []), a || (f.animation.current = []);
          }
          return o.notify("draw"), this;
        };
      }
    }, ac = Array.isArray, Gn = ac, nc = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, ic = /^\w*$/;
    function sc(t, e) {
      if (Gn(t))
        return !1;
      var r = typeof t;
      return r == "number" || r == "symbol" || r == "boolean" || t == null || Va(t) ? !0 : ic.test(t) || !nc.test(t) || e != null && t in Object(e);
    }
    var oc = sc, uc = "[object AsyncFunction]", lc = "[object Function]", fc = "[object GeneratorFunction]", hc = "[object Proxy]";
    function cc(t) {
      if (!Yr(t))
        return !1;
      var e = xs(t);
      return e == lc || e == fc || e == uc || e == hc;
    }
    var vc = cc, dc = En["__core-js_shared__"], Ni = dc, go = function() {
      var t = /[^.]+$/.exec(Ni && Ni.keys && Ni.keys.IE_PROTO || "");
      return t ? "Symbol(src)_1." + t : "";
    }();
    function gc(t) {
      return !!go && go in t;
    }
    var pc = gc, yc = Function.prototype, mc = yc.toString;
    function bc(t) {
      if (t != null) {
        try {
          return mc.call(t);
        } catch {
        }
        try {
          return t + "";
        } catch {
        }
      }
      return "";
    }
    var Ec = bc, wc = /[\\^$.*+?()[\]{}|]/g, xc = /^\[object .+?Constructor\]$/, Tc = Function.prototype, Cc = Object.prototype, Dc = Tc.toString, Sc = Cc.hasOwnProperty, Lc = RegExp(
      "^" + Dc.call(Sc).replace(wc, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
    );
    function Ac(t) {
      if (!Yr(t) || pc(t))
        return !1;
      var e = vc(t) ? Lc : xc;
      return e.test(Ec(t));
    }
    var Oc = Ac;
    function Mc(t, e) {
      return t == null ? void 0 : t[e];
    }
    var Nc = Mc;
    function Ic(t, e) {
      var r = Nc(t, e);
      return Oc(r) ? r : void 0;
    }
    var Ii = Ic, Rc = Ii(Object, "create"), Za = Rc;
    function kc() {
      this.__data__ = Za ? Za(null) : {}, this.size = 0;
    }
    var Pc = kc;
    function Bc(t) {
      var e = this.has(t) && delete this.__data__[t];
      return this.size -= e ? 1 : 0, e;
    }
    var Fc = Bc, Gc = "__lodash_hash_undefined__", zc = Object.prototype, Vc = zc.hasOwnProperty;
    function Uc(t) {
      var e = this.__data__;
      if (Za) {
        var r = e[t];
        return r === Gc ? void 0 : r;
      }
      return Vc.call(e, t) ? e[t] : void 0;
    }
    var $c = Uc, Yc = Object.prototype, _c = Yc.hasOwnProperty;
    function Hc(t) {
      var e = this.__data__;
      return Za ? e[t] !== void 0 : _c.call(e, t);
    }
    var Xc = Hc, qc = "__lodash_hash_undefined__";
    function Wc(t, e) {
      var r = this.__data__;
      return this.size += this.has(t) ? 0 : 1, r[t] = Za && e === void 0 ? qc : e, this;
    }
    var Kc = Wc;
    function ma(t) {
      var e = -1, r = t == null ? 0 : t.length;
      for (this.clear(); ++e < r; ) {
        var a = t[e];
        this.set(a[0], a[1]);
      }
    }
    ma.prototype.clear = Pc, ma.prototype.delete = Fc, ma.prototype.get = $c, ma.prototype.has = Xc, ma.prototype.set = Kc;
    var po = ma;
    function Zc() {
      this.__data__ = [], this.size = 0;
    }
    var Qc = Zc;
    function Jc(t, e) {
      return t === e || t !== t && e !== e;
    }
    var yo = Jc;
    function jc(t, e) {
      for (var r = t.length; r--; )
        if (yo(t[r][0], e))
          return r;
      return -1;
    }
    var zn = jc, ev = Array.prototype, tv = ev.splice;
    function rv(t) {
      var e = this.__data__, r = zn(e, t);
      if (r < 0)
        return !1;
      var a = e.length - 1;
      return r == a ? e.pop() : tv.call(e, r, 1), --this.size, !0;
    }
    var av = rv;
    function nv(t) {
      var e = this.__data__, r = zn(e, t);
      return r < 0 ? void 0 : e[r][1];
    }
    var iv = nv;
    function sv(t) {
      return zn(this.__data__, t) > -1;
    }
    var ov = sv;
    function uv(t, e) {
      var r = this.__data__, a = zn(r, t);
      return a < 0 ? (++this.size, r.push([t, e])) : r[a][1] = e, this;
    }
    var lv = uv;
    function ba(t) {
      var e = -1, r = t == null ? 0 : t.length;
      for (this.clear(); ++e < r; ) {
        var a = t[e];
        this.set(a[0], a[1]);
      }
    }
    ba.prototype.clear = Qc, ba.prototype.delete = av, ba.prototype.get = iv, ba.prototype.has = ov, ba.prototype.set = lv;
    var fv = ba, hv = Ii(En, "Map"), cv = hv;
    function vv() {
      this.size = 0, this.__data__ = {
        hash: new po(),
        map: new (cv || fv)(),
        string: new po()
      };
    }
    var dv = vv;
    function gv(t) {
      var e = typeof t;
      return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null;
    }
    var pv = gv;
    function yv(t, e) {
      var r = t.__data__;
      return pv(e) ? r[typeof e == "string" ? "string" : "hash"] : r.map;
    }
    var Vn = yv;
    function mv(t) {
      var e = Vn(this, t).delete(t);
      return this.size -= e ? 1 : 0, e;
    }
    var bv = mv;
    function Ev(t) {
      return Vn(this, t).get(t);
    }
    var wv = Ev;
    function xv(t) {
      return Vn(this, t).has(t);
    }
    var Tv = xv;
    function Cv(t, e) {
      var r = Vn(this, t), a = r.size;
      return r.set(t, e), this.size += r.size == a ? 0 : 1, this;
    }
    var Dv = Cv;
    function Ea(t) {
      var e = -1, r = t == null ? 0 : t.length;
      for (this.clear(); ++e < r; ) {
        var a = t[e];
        this.set(a[0], a[1]);
      }
    }
    Ea.prototype.clear = dv, Ea.prototype.delete = bv, Ea.prototype.get = wv, Ea.prototype.has = Tv, Ea.prototype.set = Dv;
    var mo = Ea, Sv = "Expected a function";
    function Ri(t, e) {
      if (typeof t != "function" || e != null && typeof e != "function")
        throw new TypeError(Sv);
      var r = function() {
        var a = arguments, n = e ? e.apply(this, a) : a[0], i = r.cache;
        if (i.has(n))
          return i.get(n);
        var s = t.apply(this, a);
        return r.cache = i.set(n, s) || i, s;
      };
      return r.cache = new (Ri.Cache || mo)(), r;
    }
    Ri.Cache = mo;
    var Lv = Ri, Av = 500;
    function Ov(t) {
      var e = Lv(t, function(a) {
        return r.size === Av && r.clear(), a;
      }), r = e.cache;
      return e;
    }
    var Mv = Ov, Nv = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Iv = /\\(\\)?/g, Rv = Mv(function(t) {
      var e = [];
      return t.charCodeAt(0) === 46 && e.push(""), t.replace(Nv, function(r, a, n, i) {
        e.push(n ? i.replace(Iv, "$1") : a || r);
      }), e;
    }), bo = Rv;
    function kv(t, e) {
      for (var r = -1, a = t == null ? 0 : t.length, n = Array(a); ++r < a; )
        n[r] = e(t[r], r, t);
      return n;
    }
    var Eo = kv, Pv = 1 / 0, wo = ua ? ua.prototype : void 0, xo = wo ? wo.toString : void 0;
    function To(t) {
      if (typeof t == "string")
        return t;
      if (Gn(t))
        return Eo(t, To) + "";
      if (Va(t))
        return xo ? xo.call(t) : "";
      var e = t + "";
      return e == "0" && 1 / t == -Pv ? "-0" : e;
    }
    var Bv = To;
    function Fv(t) {
      return t == null ? "" : Bv(t);
    }
    var Co = Fv;
    function Gv(t, e) {
      return Gn(t) ? t : oc(t, e) ? [t] : bo(Co(t));
    }
    var Do = Gv, zv = 1 / 0;
    function Vv(t) {
      if (typeof t == "string" || Va(t))
        return t;
      var e = t + "";
      return e == "0" && 1 / t == -zv ? "-0" : e;
    }
    var ki = Vv;
    function Uv(t, e) {
      e = Do(e, t);
      for (var r = 0, a = e.length; t != null && r < a; )
        t = t[ki(e[r++])];
      return r && r == a ? t : void 0;
    }
    var $v = Uv;
    function Yv(t, e, r) {
      var a = t == null ? void 0 : $v(t, e);
      return a === void 0 ? r : a;
    }
    var _v = Yv, Hv = function() {
      try {
        var t = Ii(Object, "defineProperty");
        return t({}, "", {}), t;
      } catch {
      }
    }(), So = Hv;
    function Xv(t, e, r) {
      e == "__proto__" && So ? So(t, e, {
        configurable: !0,
        enumerable: !0,
        value: r,
        writable: !0
      }) : t[e] = r;
    }
    var qv = Xv, Wv = Object.prototype, Kv = Wv.hasOwnProperty;
    function Zv(t, e, r) {
      var a = t[e];
      (!(Kv.call(t, e) && yo(a, r)) || r === void 0 && !(e in t)) && qv(t, e, r);
    }
    var Qv = Zv, Jv = 9007199254740991, jv = /^(?:0|[1-9]\d*)$/;
    function ed(t, e) {
      var r = typeof t;
      return e = e == null ? Jv : e, !!e && (r == "number" || r != "symbol" && jv.test(t)) && t > -1 && t % 1 == 0 && t < e;
    }
    var td = ed;
    function rd(t, e, r, a) {
      if (!Yr(t))
        return t;
      e = Do(e, t);
      for (var n = -1, i = e.length, s = i - 1, o = t; o != null && ++n < i; ) {
        var l = ki(e[n]), u = r;
        if (l === "__proto__" || l === "constructor" || l === "prototype")
          return t;
        if (n != s) {
          var f = o[l];
          u = a ? a(f, l, o) : void 0, u === void 0 && (u = Yr(f) ? f : td(e[n + 1]) ? [] : {});
        }
        Qv(o, l, u), o = o[l];
      }
      return t;
    }
    var ad = rd;
    function nd(t, e, r) {
      return t == null ? t : ad(t, e, r);
    }
    var id = nd;
    function sd(t, e) {
      var r = -1, a = t.length;
      for (e || (e = Array(a)); ++r < a; )
        e[r] = t[r];
      return e;
    }
    var od = sd;
    function ud(t) {
      return Gn(t) ? Eo(t, ki) : Va(t) ? [t] : od(bo(Co(t)));
    }
    var ld = ud, fd = {
      data: function(e) {
        var r = {
          field: "data",
          bindingEvent: "data",
          allowBinding: !1,
          allowSetting: !1,
          allowGetting: !1,
          settingEvent: "data",
          settingTriggersEvent: !1,
          triggerFnName: "trigger",
          immutableKeys: {},
          updateStyle: !1,
          beforeGet: function(n) {
          },
          beforeSet: function(n, i) {
          },
          onSet: function(n) {
          },
          canSet: function(n) {
            return !0;
          }
        };
        return e = Qe({}, r, e), function(n, i) {
          var s = e, o = this, l = o.length !== void 0, u = l ? o : [o], f = l ? o[0] : o;
          if (V(n)) {
            var h = n.indexOf(".") !== -1, c = h && ld(n);
            if (s.allowGetting && i === void 0) {
              var d;
              return f && (s.beforeGet(f), c && f._private[s.field][n] === void 0 ? d = _v(f._private[s.field], c) : d = f._private[s.field][n]), d;
            } else if (s.allowSetting && i !== void 0) {
              var v = !s.immutableKeys[n];
              if (v) {
                var y = T({}, n, i);
                s.beforeSet(o, y);
                for (var p = 0, g = u.length; p < g; p++) {
                  var m = u[p];
                  s.canSet(m) && (c && f._private[s.field][n] === void 0 ? id(m._private[s.field], c, i) : m._private[s.field][n] = i);
                }
                s.updateStyle && o.updateStyle(), s.onSet(o), s.settingTriggersEvent && o[s.triggerFnName](s.settingEvent);
              }
            }
          } else if (s.allowSetting && B(n)) {
            var b = n, E, M, S = Object.keys(b);
            s.beforeSet(o, b);
            for (var x = 0; x < S.length; x++) {
              E = S[x], M = b[E];
              var I = !s.immutableKeys[E];
              if (I)
                for (var A = 0; A < u.length; A++) {
                  var z = u[A];
                  s.canSet(z) && (z._private[s.field][E] = M);
                }
            }
            s.updateStyle && o.updateStyle(), s.onSet(o), s.settingTriggersEvent && o[s.triggerFnName](s.settingEvent);
          } else if (s.allowBinding && te(n)) {
            var F = n;
            o.on(s.bindingEvent, F);
          } else if (s.allowGetting && n === void 0) {
            var G;
            return f && (s.beforeGet(f), G = f._private[s.field]), G;
          }
          return o;
        };
      },
      removeData: function(e) {
        var r = {
          field: "data",
          event: "data",
          triggerFnName: "trigger",
          triggerEvent: !1,
          immutableKeys: {}
        };
        return e = Qe({}, r, e), function(n) {
          var i = e, s = this, o = s.length !== void 0, l = o ? s : [s];
          if (V(n)) {
            for (var u = n.split(/\s+/), f = u.length, h = 0; h < f; h++) {
              var c = u[h];
              if (!ze(c)) {
                var d = !i.immutableKeys[c];
                if (d)
                  for (var v = 0, y = l.length; v < y; v++)
                    l[v]._private[i.field][c] = void 0;
              }
            }
            i.triggerEvent && s[i.triggerFnName](i.event);
          } else if (n === void 0) {
            for (var p = 0, g = l.length; p < g; p++)
              for (var m = l[p]._private[i.field], b = Object.keys(m), E = 0; E < b.length; E++) {
                var M = b[E], S = !i.immutableKeys[M];
                S && (m[M] = void 0);
              }
            i.triggerEvent && s[i.triggerFnName](i.event);
          }
          return s;
        };
      }
    }, hd = {
      eventAliasesOn: function(e) {
        var r = e;
        r.addListener = r.listen = r.bind = r.on, r.unlisten = r.unbind = r.off = r.removeListener, r.trigger = r.emit, r.pon = r.promiseOn = function(a, n) {
          var i = this, s = Array.prototype.slice.call(arguments, 0);
          return new ya(function(o, l) {
            var u = function(d) {
              i.off.apply(i, h), o(d);
            }, f = s.concat([u]), h = f.concat([]);
            i.on.apply(i, f);
          });
        };
      }
    }, ct = {};
    [rc, fd, hd].forEach(function(t) {
      Qe(ct, t);
    });
    var cd = {
      animate: ct.animate(),
      animation: ct.animation(),
      animated: ct.animated(),
      clearQueue: ct.clearQueue(),
      delay: ct.delay(),
      delayAnimation: ct.delayAnimation(),
      stop: ct.stop()
    }, Un = {
      classes: function(e) {
        var r = this;
        if (e === void 0) {
          var a = [];
          return r[0]._private.classes.forEach(function(v) {
            return a.push(v);
          }), a;
        } else
          L(e) || (e = (e || "").match(/\S+/g) || []);
        for (var n = [], i = new fa(e), s = 0; s < r.length; s++) {
          for (var o = r[s], l = o._private, u = l.classes, f = !1, h = 0; h < e.length; h++) {
            var c = e[h], d = u.has(c);
            if (!d) {
              f = !0;
              break;
            }
          }
          f || (f = u.size !== e.length), f && (l.classes = i, n.push(o));
        }
        return n.length > 0 && this.spawn(n).updateStyle().emit("class"), r;
      },
      addClass: function(e) {
        return this.toggleClass(e, !0);
      },
      hasClass: function(e) {
        var r = this[0];
        return r != null && r._private.classes.has(e);
      },
      toggleClass: function(e, r) {
        L(e) || (e = e.match(/\S+/g) || []);
        for (var a = this, n = r === void 0, i = [], s = 0, o = a.length; s < o; s++)
          for (var l = a[s], u = l._private.classes, f = !1, h = 0; h < e.length; h++) {
            var c = e[h], d = u.has(c), v = !1;
            r || n && !d ? (u.add(c), v = !0) : (!r || n && d) && (u.delete(c), v = !0), !f && v && (i.push(l), f = !0);
          }
        return i.length > 0 && this.spawn(i).updateStyle().emit("class"), a;
      },
      removeClass: function(e) {
        return this.toggleClass(e, !1);
      },
      flashClass: function(e, r) {
        var a = this;
        if (r == null)
          r = 250;
        else if (r === 0)
          return a;
        return a.addClass(e), setTimeout(function() {
          a.removeClass(e);
        }, r), a;
      }
    };
    Un.className = Un.classNames = Un.classes;
    var nt = {
      metaChar: "[\\!\\\"\\#\\$\\%\\&\\'\\(\\)\\*\\+\\,\\.\\/\\:\\;\\<\\=\\>\\?\\@\\[\\]\\^\\`\\{\\|\\}\\~]",
      comparatorOp: "=|\\!=|>|>=|<|<=|\\$=|\\^=|\\*=",
      boolOp: "\\?|\\!|\\^",
      string: `"(?:\\\\"|[^"])*"|'(?:\\\\'|[^'])*'`,
      number: yt,
      meta: "degree|indegree|outdegree",
      separator: "\\s*,\\s*",
      descendant: "\\s+",
      child: "\\s+>\\s+",
      subject: "\\$",
      group: "node|edge|\\*",
      directedEdge: "\\s+->\\s+",
      undirectedEdge: "\\s+<->\\s+"
    };
    nt.variable = "(?:[\\w-.]|(?:\\\\" + nt.metaChar + "))+", nt.className = "(?:[\\w-]|(?:\\\\" + nt.metaChar + "))+", nt.value = nt.string + "|" + nt.number, nt.id = nt.variable, function() {
      var t, e, r;
      for (t = nt.comparatorOp.split("|"), r = 0; r < t.length; r++)
        e = t[r], nt.comparatorOp += "|@" + e;
      for (t = nt.comparatorOp.split("|"), r = 0; r < t.length; r++)
        e = t[r], !(e.indexOf("!") >= 0) && e !== "=" && (nt.comparatorOp += "|\\!" + e);
    }();
    var gt = function() {
      return {
        checks: []
      };
    }, Ge = {
      GROUP: 0,
      COLLECTION: 1,
      FILTER: 2,
      DATA_COMPARE: 3,
      DATA_EXIST: 4,
      DATA_BOOL: 5,
      META_COMPARE: 6,
      STATE: 7,
      ID: 8,
      CLASS: 9,
      UNDIRECTED_EDGE: 10,
      DIRECTED_EDGE: 11,
      NODE_SOURCE: 12,
      NODE_TARGET: 13,
      NODE_NEIGHBOR: 14,
      CHILD: 15,
      DESCENDANT: 16,
      PARENT: 17,
      ANCESTOR: 18,
      COMPOUND_SPLIT: 19,
      TRUE: 20
    }, Pi = [{
      selector: ":selected",
      matches: function(e) {
        return e.selected();
      }
    }, {
      selector: ":unselected",
      matches: function(e) {
        return !e.selected();
      }
    }, {
      selector: ":selectable",
      matches: function(e) {
        return e.selectable();
      }
    }, {
      selector: ":unselectable",
      matches: function(e) {
        return !e.selectable();
      }
    }, {
      selector: ":locked",
      matches: function(e) {
        return e.locked();
      }
    }, {
      selector: ":unlocked",
      matches: function(e) {
        return !e.locked();
      }
    }, {
      selector: ":visible",
      matches: function(e) {
        return e.visible();
      }
    }, {
      selector: ":hidden",
      matches: function(e) {
        return !e.visible();
      }
    }, {
      selector: ":transparent",
      matches: function(e) {
        return e.transparent();
      }
    }, {
      selector: ":grabbed",
      matches: function(e) {
        return e.grabbed();
      }
    }, {
      selector: ":free",
      matches: function(e) {
        return !e.grabbed();
      }
    }, {
      selector: ":removed",
      matches: function(e) {
        return e.removed();
      }
    }, {
      selector: ":inside",
      matches: function(e) {
        return !e.removed();
      }
    }, {
      selector: ":grabbable",
      matches: function(e) {
        return e.grabbable();
      }
    }, {
      selector: ":ungrabbable",
      matches: function(e) {
        return !e.grabbable();
      }
    }, {
      selector: ":animated",
      matches: function(e) {
        return e.animated();
      }
    }, {
      selector: ":unanimated",
      matches: function(e) {
        return !e.animated();
      }
    }, {
      selector: ":parent",
      matches: function(e) {
        return e.isParent();
      }
    }, {
      selector: ":childless",
      matches: function(e) {
        return e.isChildless();
      }
    }, {
      selector: ":child",
      matches: function(e) {
        return e.isChild();
      }
    }, {
      selector: ":orphan",
      matches: function(e) {
        return e.isOrphan();
      }
    }, {
      selector: ":nonorphan",
      matches: function(e) {
        return e.isChild();
      }
    }, {
      selector: ":compound",
      matches: function(e) {
        return e.isNode() ? e.isParent() : e.source().isParent() || e.target().isParent();
      }
    }, {
      selector: ":loop",
      matches: function(e) {
        return e.isLoop();
      }
    }, {
      selector: ":simple",
      matches: function(e) {
        return e.isSimple();
      }
    }, {
      selector: ":active",
      matches: function(e) {
        return e.active();
      }
    }, {
      selector: ":inactive",
      matches: function(e) {
        return !e.active();
      }
    }, {
      selector: ":backgrounding",
      matches: function(e) {
        return e.backgrounding();
      }
    }, {
      selector: ":nonbackgrounding",
      matches: function(e) {
        return !e.backgrounding();
      }
    }].sort(function(t, e) {
      return Tl(t.selector, e.selector);
    }), vd = function() {
      for (var t = {}, e, r = 0; r < Pi.length; r++)
        e = Pi[r], t[e.selector] = e.matches;
      return t;
    }(), dd = function(e, r) {
      return vd[e](r);
    }, gd = "(" + Pi.map(function(t) {
      return t.selector;
    }).join("|") + ")", wa = function(e) {
      return e.replace(new RegExp("\\\\(" + nt.metaChar + ")", "g"), function(r, a) {
        return a;
      });
    }, Pr = function(e, r, a) {
      e[e.length - 1] = a;
    }, Bi = [{
      name: "group",
      query: !0,
      regex: "(" + nt.group + ")",
      populate: function(e, r, a) {
        var n = w(a, 1), i = n[0];
        r.checks.push({
          type: Ge.GROUP,
          value: i === "*" ? i : i + "s"
        });
      }
    }, {
      name: "state",
      query: !0,
      regex: gd,
      populate: function(e, r, a) {
        var n = w(a, 1), i = n[0];
        r.checks.push({
          type: Ge.STATE,
          value: i
        });
      }
    }, {
      name: "id",
      query: !0,
      regex: "\\#(" + nt.id + ")",
      populate: function(e, r, a) {
        var n = w(a, 1), i = n[0];
        r.checks.push({
          type: Ge.ID,
          value: wa(i)
        });
      }
    }, {
      name: "className",
      query: !0,
      regex: "\\.(" + nt.className + ")",
      populate: function(e, r, a) {
        var n = w(a, 1), i = n[0];
        r.checks.push({
          type: Ge.CLASS,
          value: wa(i)
        });
      }
    }, {
      name: "dataExists",
      query: !0,
      regex: "\\[\\s*(" + nt.variable + ")\\s*\\]",
      populate: function(e, r, a) {
        var n = w(a, 1), i = n[0];
        r.checks.push({
          type: Ge.DATA_EXIST,
          field: wa(i)
        });
      }
    }, {
      name: "dataCompare",
      query: !0,
      regex: "\\[\\s*(" + nt.variable + ")\\s*(" + nt.comparatorOp + ")\\s*(" + nt.value + ")\\s*\\]",
      populate: function(e, r, a) {
        var n = w(a, 3), i = n[0], s = n[1], o = n[2], l = new RegExp("^" + nt.string + "$").exec(o) != null;
        l ? o = o.substring(1, o.length - 1) : o = parseFloat(o), r.checks.push({
          type: Ge.DATA_COMPARE,
          field: wa(i),
          operator: s,
          value: o
        });
      }
    }, {
      name: "dataBool",
      query: !0,
      regex: "\\[\\s*(" + nt.boolOp + ")\\s*(" + nt.variable + ")\\s*\\]",
      populate: function(e, r, a) {
        var n = w(a, 2), i = n[0], s = n[1];
        r.checks.push({
          type: Ge.DATA_BOOL,
          field: wa(s),
          operator: i
        });
      }
    }, {
      name: "metaCompare",
      query: !0,
      regex: "\\[\\[\\s*(" + nt.meta + ")\\s*(" + nt.comparatorOp + ")\\s*(" + nt.number + ")\\s*\\]\\]",
      populate: function(e, r, a) {
        var n = w(a, 3), i = n[0], s = n[1], o = n[2];
        r.checks.push({
          type: Ge.META_COMPARE,
          field: wa(i),
          operator: s,
          value: parseFloat(o)
        });
      }
    }, {
      name: "nextQuery",
      separator: !0,
      regex: nt.separator,
      populate: function(e, r) {
        var a = e.currentSubject, n = e.edgeCount, i = e.compoundCount, s = e[e.length - 1];
        a != null && (s.subject = a, e.currentSubject = null), s.edgeCount = n, s.compoundCount = i, e.edgeCount = 0, e.compoundCount = 0;
        var o = e[e.length++] = gt();
        return o;
      }
    }, {
      name: "directedEdge",
      separator: !0,
      regex: nt.directedEdge,
      populate: function(e, r) {
        if (e.currentSubject == null) {
          var a = gt(), n = r, i = gt();
          return a.checks.push({
            type: Ge.DIRECTED_EDGE,
            source: n,
            target: i
          }), Pr(e, r, a), e.edgeCount++, i;
        } else {
          var s = gt(), o = r, l = gt();
          return s.checks.push({
            type: Ge.NODE_SOURCE,
            source: o,
            target: l
          }), Pr(e, r, s), e.edgeCount++, l;
        }
      }
    }, {
      name: "undirectedEdge",
      separator: !0,
      regex: nt.undirectedEdge,
      populate: function(e, r) {
        if (e.currentSubject == null) {
          var a = gt(), n = r, i = gt();
          return a.checks.push({
            type: Ge.UNDIRECTED_EDGE,
            nodes: [n, i]
          }), Pr(e, r, a), e.edgeCount++, i;
        } else {
          var s = gt(), o = r, l = gt();
          return s.checks.push({
            type: Ge.NODE_NEIGHBOR,
            node: o,
            neighbor: l
          }), Pr(e, r, s), l;
        }
      }
    }, {
      name: "child",
      separator: !0,
      regex: nt.child,
      populate: function(e, r) {
        if (e.currentSubject == null) {
          var a = gt(), n = gt(), i = e[e.length - 1];
          return a.checks.push({
            type: Ge.CHILD,
            parent: i,
            child: n
          }), Pr(e, r, a), e.compoundCount++, n;
        } else if (e.currentSubject === r) {
          var s = gt(), o = e[e.length - 1], l = gt(), u = gt(), f = gt(), h = gt();
          return s.checks.push({
            type: Ge.COMPOUND_SPLIT,
            left: o,
            right: l,
            subject: u
          }), u.checks = r.checks, r.checks = [{
            type: Ge.TRUE
          }], h.checks.push({
            type: Ge.TRUE
          }), l.checks.push({
            type: Ge.PARENT,
            parent: h,
            child: f
          }), Pr(e, o, s), e.currentSubject = u, e.compoundCount++, f;
        } else {
          var c = gt(), d = gt(), v = [{
            type: Ge.PARENT,
            parent: c,
            child: d
          }];
          return c.checks = r.checks, r.checks = v, e.compoundCount++, d;
        }
      }
    }, {
      name: "descendant",
      separator: !0,
      regex: nt.descendant,
      populate: function(e, r) {
        if (e.currentSubject == null) {
          var a = gt(), n = gt(), i = e[e.length - 1];
          return a.checks.push({
            type: Ge.DESCENDANT,
            ancestor: i,
            descendant: n
          }), Pr(e, r, a), e.compoundCount++, n;
        } else if (e.currentSubject === r) {
          var s = gt(), o = e[e.length - 1], l = gt(), u = gt(), f = gt(), h = gt();
          return s.checks.push({
            type: Ge.COMPOUND_SPLIT,
            left: o,
            right: l,
            subject: u
          }), u.checks = r.checks, r.checks = [{
            type: Ge.TRUE
          }], h.checks.push({
            type: Ge.TRUE
          }), l.checks.push({
            type: Ge.ANCESTOR,
            ancestor: h,
            descendant: f
          }), Pr(e, o, s), e.currentSubject = u, e.compoundCount++, f;
        } else {
          var c = gt(), d = gt(), v = [{
            type: Ge.ANCESTOR,
            ancestor: c,
            descendant: d
          }];
          return c.checks = r.checks, r.checks = v, e.compoundCount++, d;
        }
      }
    }, {
      name: "subject",
      modifier: !0,
      regex: nt.subject,
      populate: function(e, r) {
        if (e.currentSubject != null && e.currentSubject !== r)
          return ht("Redefinition of subject in selector `" + e.toString() + "`"), !1;
        e.currentSubject = r;
        var a = e[e.length - 1], n = a.checks[0], i = n == null ? null : n.type;
        i === Ge.DIRECTED_EDGE ? n.type = Ge.NODE_TARGET : i === Ge.UNDIRECTED_EDGE && (n.type = Ge.NODE_NEIGHBOR, n.node = n.nodes[1], n.neighbor = n.nodes[0], n.nodes = null);
      }
    }];
    Bi.forEach(function(t) {
      return t.regexObj = new RegExp("^" + t.regex);
    });
    var pd = function(e) {
      for (var r, a, n, i = 0; i < Bi.length; i++) {
        var s = Bi[i], o = s.name, l = e.match(s.regexObj);
        if (l != null) {
          a = l, r = s, n = o;
          var u = l[0];
          e = e.substring(u.length);
          break;
        }
      }
      return {
        expr: r,
        match: a,
        name: n,
        remaining: e
      };
    }, yd = function(e) {
      var r = e.match(/^\s+/);
      if (r) {
        var a = r[0];
        e = e.substring(a.length);
      }
      return e;
    }, md = function(e) {
      var r = this, a = r.inputText = e, n = r[0] = gt();
      for (r.length = 1, a = yd(a); ; ) {
        var i = pd(a);
        if (i.expr == null)
          return ht("The selector `" + e + "`is invalid"), !1;
        var s = i.match.slice(1), o = i.expr.populate(r, n, s);
        if (o === !1)
          return !1;
        if (o != null && (n = o), a = i.remaining, a.match(/^\s*$/))
          break;
      }
      var l = r[r.length - 1];
      r.currentSubject != null && (l.subject = r.currentSubject), l.edgeCount = r.edgeCount, l.compoundCount = r.compoundCount;
      for (var u = 0; u < r.length; u++) {
        var f = r[u];
        if (f.compoundCount > 0 && f.edgeCount > 0)
          return ht("The selector `" + e + "` is invalid because it uses both a compound selector and an edge selector"), !1;
        if (f.edgeCount > 1)
          return ht("The selector `" + e + "` is invalid because it uses multiple edge selectors"), !1;
        f.edgeCount === 1 && ht("The selector `" + e + "` is deprecated.  Edge selectors do not take effect on changes to source and target nodes after an edge is added, for performance reasons.  Use a class or data selector on edges instead, updating the class or data of an edge when your app detects a change in source or target nodes.");
      }
      return !0;
    }, bd = function() {
      if (this.toStringCache != null)
        return this.toStringCache;
      for (var e = function(f) {
        return f == null ? "" : f;
      }, r = function(f) {
        return V(f) ? '"' + f + '"' : e(f);
      }, a = function(f) {
        return " " + f + " ";
      }, n = function(f, h) {
        var c = f.type, d = f.value;
        switch (c) {
          case Ge.GROUP: {
            var v = e(d);
            return v.substring(0, v.length - 1);
          }
          case Ge.DATA_COMPARE: {
            var y = f.field, p = f.operator;
            return "[" + y + a(e(p)) + r(d) + "]";
          }
          case Ge.DATA_BOOL: {
            var g = f.operator, m = f.field;
            return "[" + e(g) + m + "]";
          }
          case Ge.DATA_EXIST: {
            var b = f.field;
            return "[" + b + "]";
          }
          case Ge.META_COMPARE: {
            var E = f.operator, M = f.field;
            return "[[" + M + a(e(E)) + r(d) + "]]";
          }
          case Ge.STATE:
            return d;
          case Ge.ID:
            return "#" + d;
          case Ge.CLASS:
            return "." + d;
          case Ge.PARENT:
          case Ge.CHILD:
            return i(f.parent, h) + a(">") + i(f.child, h);
          case Ge.ANCESTOR:
          case Ge.DESCENDANT:
            return i(f.ancestor, h) + " " + i(f.descendant, h);
          case Ge.COMPOUND_SPLIT: {
            var S = i(f.left, h), x = i(f.subject, h), I = i(f.right, h);
            return S + (S.length > 0 ? " " : "") + x + I;
          }
          case Ge.TRUE:
            return "";
        }
      }, i = function(f, h) {
        return f.checks.reduce(function(c, d, v) {
          return c + (h === f && v === 0 ? "$" : "") + n(d, h);
        }, "");
      }, s = "", o = 0; o < this.length; o++) {
        var l = this[o];
        s += i(l, l.subject), this.length > 1 && o < this.length - 1 && (s += ", ");
      }
      return this.toStringCache = s, s;
    }, Ed = {
      parse: md,
      toString: bd
    }, Lo = function(e, r, a) {
      var n, i = V(e), s = R(e), o = V(a), l, u, f = !1, h = !1, c = !1;
      switch (r.indexOf("!") >= 0 && (r = r.replace("!", ""), h = !0), r.indexOf("@") >= 0 && (r = r.replace("@", ""), f = !0), (i || o || f) && (l = !i && !s ? "" : "" + e, u = "" + a), f && (e = l = l.toLowerCase(), a = u = u.toLowerCase()), r) {
        case "*=":
          n = l.indexOf(u) >= 0;
          break;
        case "$=":
          n = l.indexOf(u, l.length - u.length) >= 0;
          break;
        case "^=":
          n = l.indexOf(u) === 0;
          break;
        case "=":
          n = e === a;
          break;
        case ">":
          c = !0, n = e > a;
          break;
        case ">=":
          c = !0, n = e >= a;
          break;
        case "<":
          c = !0, n = e < a;
          break;
        case "<=":
          c = !0, n = e <= a;
          break;
        default:
          n = !1;
          break;
      }
      return h && (e != null || !c) && (n = !n), n;
    }, wd = function(e, r) {
      switch (r) {
        case "?":
          return !!e;
        case "!":
          return !e;
        case "^":
          return e === void 0;
      }
    }, xd = function(e) {
      return e !== void 0;
    }, Fi = function(e, r) {
      return e.data(r);
    }, Td = function(e, r) {
      return e[r]();
    }, St = [], Tt = function(e, r) {
      return e.checks.every(function(a) {
        return St[a.type](a, r);
      });
    };
    St[Ge.GROUP] = function(t, e) {
      var r = t.value;
      return r === "*" || r === e.group();
    }, St[Ge.STATE] = function(t, e) {
      var r = t.value;
      return dd(r, e);
    }, St[Ge.ID] = function(t, e) {
      var r = t.value;
      return e.id() === r;
    }, St[Ge.CLASS] = function(t, e) {
      var r = t.value;
      return e.hasClass(r);
    }, St[Ge.META_COMPARE] = function(t, e) {
      var r = t.field, a = t.operator, n = t.value;
      return Lo(Td(e, r), a, n);
    }, St[Ge.DATA_COMPARE] = function(t, e) {
      var r = t.field, a = t.operator, n = t.value;
      return Lo(Fi(e, r), a, n);
    }, St[Ge.DATA_BOOL] = function(t, e) {
      var r = t.field, a = t.operator;
      return wd(Fi(e, r), a);
    }, St[Ge.DATA_EXIST] = function(t, e) {
      var r = t.field;
      return t.operator, xd(Fi(e, r));
    }, St[Ge.UNDIRECTED_EDGE] = function(t, e) {
      var r = t.nodes[0], a = t.nodes[1], n = e.source(), i = e.target();
      return Tt(r, n) && Tt(a, i) || Tt(a, n) && Tt(r, i);
    }, St[Ge.NODE_NEIGHBOR] = function(t, e) {
      return Tt(t.node, e) && e.neighborhood().some(function(r) {
        return r.isNode() && Tt(t.neighbor, r);
      });
    }, St[Ge.DIRECTED_EDGE] = function(t, e) {
      return Tt(t.source, e.source()) && Tt(t.target, e.target());
    }, St[Ge.NODE_SOURCE] = function(t, e) {
      return Tt(t.source, e) && e.outgoers().some(function(r) {
        return r.isNode() && Tt(t.target, r);
      });
    }, St[Ge.NODE_TARGET] = function(t, e) {
      return Tt(t.target, e) && e.incomers().some(function(r) {
        return r.isNode() && Tt(t.source, r);
      });
    }, St[Ge.CHILD] = function(t, e) {
      return Tt(t.child, e) && Tt(t.parent, e.parent());
    }, St[Ge.PARENT] = function(t, e) {
      return Tt(t.parent, e) && e.children().some(function(r) {
        return Tt(t.child, r);
      });
    }, St[Ge.DESCENDANT] = function(t, e) {
      return Tt(t.descendant, e) && e.ancestors().some(function(r) {
        return Tt(t.ancestor, r);
      });
    }, St[Ge.ANCESTOR] = function(t, e) {
      return Tt(t.ancestor, e) && e.descendants().some(function(r) {
        return Tt(t.descendant, r);
      });
    }, St[Ge.COMPOUND_SPLIT] = function(t, e) {
      return Tt(t.subject, e) && Tt(t.left, e) && Tt(t.right, e);
    }, St[Ge.TRUE] = function() {
      return !0;
    }, St[Ge.COLLECTION] = function(t, e) {
      var r = t.value;
      return r.has(e);
    }, St[Ge.FILTER] = function(t, e) {
      var r = t.value;
      return r(e);
    };
    var Cd = function(e) {
      var r = this;
      if (r.length === 1 && r[0].checks.length === 1 && r[0].checks[0].type === Ge.ID)
        return e.getElementById(r[0].checks[0].value).collection();
      var a = function(i) {
        for (var s = 0; s < r.length; s++) {
          var o = r[s];
          if (Tt(o, i))
            return !0;
        }
        return !1;
      };
      return r.text() == null && (a = function() {
        return !0;
      }), e.filter(a);
    }, Dd = function(e) {
      for (var r = this, a = 0; a < r.length; a++) {
        var n = r[a];
        if (Tt(n, e))
          return !0;
      }
      return !1;
    }, Sd = {
      matches: Dd,
      filter: Cd
    }, Br = function(e) {
      this.inputText = e, this.currentSubject = null, this.compoundCount = 0, this.edgeCount = 0, this.length = 0, e == null || V(e) && e.match(/^\s*$/) || (Oe(e) ? this.addQuery({
        checks: [{
          type: Ge.COLLECTION,
          value: e.collection()
        }]
      }) : te(e) ? this.addQuery({
        checks: [{
          type: Ge.FILTER,
          value: e
        }]
      }) : V(e) ? this.parse(e) || (this.invalid = !0) : Dt("A selector must be created from a string; found "));
    }, Fr = Br.prototype;
    [Ed, Sd].forEach(function(t) {
      return Qe(Fr, t);
    }), Fr.text = function() {
      return this.inputText;
    }, Fr.size = function() {
      return this.length;
    }, Fr.eq = function(t) {
      return this[t];
    }, Fr.sameText = function(t) {
      return !this.invalid && !t.invalid && this.text() === t.text();
    }, Fr.addQuery = function(t) {
      this[this.length++] = t;
    }, Fr.selector = Fr.toString;
    var Gr = {
      allAre: function(e) {
        var r = new Br(e);
        return this.every(function(a) {
          return r.matches(a);
        });
      },
      is: function(e) {
        var r = new Br(e);
        return this.some(function(a) {
          return r.matches(a);
        });
      },
      some: function(e, r) {
        for (var a = 0; a < this.length; a++) {
          var n = r ? e.apply(r, [this[a], a, this]) : e(this[a], a, this);
          if (n)
            return !0;
        }
        return !1;
      },
      every: function(e, r) {
        for (var a = 0; a < this.length; a++) {
          var n = r ? e.apply(r, [this[a], a, this]) : e(this[a], a, this);
          if (!n)
            return !1;
        }
        return !0;
      },
      same: function(e) {
        if (this === e)
          return !0;
        e = this.cy().collection(e);
        var r = this.length, a = e.length;
        return r !== a ? !1 : r === 1 ? this[0] === e[0] : this.every(function(n) {
          return e.hasElementWithId(n.id());
        });
      },
      anySame: function(e) {
        return e = this.cy().collection(e), this.some(function(r) {
          return e.hasElementWithId(r.id());
        });
      },
      allAreNeighbors: function(e) {
        e = this.cy().collection(e);
        var r = this.neighborhood();
        return e.every(function(a) {
          return r.hasElementWithId(a.id());
        });
      },
      contains: function(e) {
        e = this.cy().collection(e);
        var r = this;
        return e.every(function(a) {
          return r.hasElementWithId(a.id());
        });
      }
    };
    Gr.allAreNeighbours = Gr.allAreNeighbors, Gr.has = Gr.contains, Gr.equal = Gr.equals = Gr.same;
    var rr = function(e, r) {
      return function(n, i, s, o) {
        var l = n, u = this, f;
        if (l == null ? f = "" : Oe(l) && l.length === 1 && (f = l.id()), u.length === 1 && f) {
          var h = u[0]._private, c = h.traversalCache = h.traversalCache || {}, d = c[r] = c[r] || [], v = _r(f), y = d[v];
          return y || (d[v] = e.call(u, n, i, s, o));
        } else
          return e.call(u, n, i, s, o);
      };
    }, xa = {
      parent: function(e) {
        var r = [];
        if (this.length === 1) {
          var a = this[0]._private.parent;
          if (a)
            return a;
        }
        for (var n = 0; n < this.length; n++) {
          var i = this[n], s = i._private.parent;
          s && r.push(s);
        }
        return this.spawn(r, !0).filter(e);
      },
      parents: function(e) {
        for (var r = [], a = this.parent(); a.nonempty(); ) {
          for (var n = 0; n < a.length; n++) {
            var i = a[n];
            r.push(i);
          }
          a = a.parent();
        }
        return this.spawn(r, !0).filter(e);
      },
      commonAncestors: function(e) {
        for (var r, a = 0; a < this.length; a++) {
          var n = this[a], i = n.parents();
          r = r || i, r = r.intersect(i);
        }
        return r.filter(e);
      },
      orphans: function(e) {
        return this.stdFilter(function(r) {
          return r.isOrphan();
        }).filter(e);
      },
      nonorphans: function(e) {
        return this.stdFilter(function(r) {
          return r.isChild();
        }).filter(e);
      },
      children: rr(function(t) {
        for (var e = [], r = 0; r < this.length; r++)
          for (var a = this[r], n = a._private.children, i = 0; i < n.length; i++)
            e.push(n[i]);
        return this.spawn(e, !0).filter(t);
      }, "children"),
      siblings: function(e) {
        return this.parent().children().not(this).filter(e);
      },
      isParent: function() {
        var e = this[0];
        if (e)
          return e.isNode() && e._private.children.length !== 0;
      },
      isChildless: function() {
        var e = this[0];
        if (e)
          return e.isNode() && e._private.children.length === 0;
      },
      isChild: function() {
        var e = this[0];
        if (e)
          return e.isNode() && e._private.parent != null;
      },
      isOrphan: function() {
        var e = this[0];
        if (e)
          return e.isNode() && e._private.parent == null;
      },
      descendants: function(e) {
        var r = [];
        function a(n) {
          for (var i = 0; i < n.length; i++) {
            var s = n[i];
            r.push(s), s.children().nonempty() && a(s.children());
          }
        }
        return a(this.children()), this.spawn(r, !0).filter(e);
      }
    };
    function Gi(t, e, r, a) {
      for (var n = [], i = new fa(), s = t.cy(), o = s.hasCompoundNodes(), l = 0; l < t.length; l++) {
        var u = t[l];
        r ? n.push(u) : o && a(n, i, u);
      }
      for (; n.length > 0; ) {
        var f = n.shift();
        e(f), i.add(f.id()), o && a(n, i, f);
      }
      return t;
    }
    function Ao(t, e, r) {
      if (r.isParent())
        for (var a = r._private.children, n = 0; n < a.length; n++) {
          var i = a[n];
          e.has(i.id()) || t.push(i);
        }
    }
    xa.forEachDown = function(t) {
      var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
      return Gi(this, t, e, Ao);
    };
    function Oo(t, e, r) {
      if (r.isChild()) {
        var a = r._private.parent;
        e.has(a.id()) || t.push(a);
      }
    }
    xa.forEachUp = function(t) {
      var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
      return Gi(this, t, e, Oo);
    };
    function Ld(t, e, r) {
      Oo(t, e, r), Ao(t, e, r);
    }
    xa.forEachUpAndDown = function(t) {
      var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
      return Gi(this, t, e, Ld);
    }, xa.ancestors = xa.parents;
    var Qa, Mo;
    Qa = Mo = {
      data: ct.data({
        field: "data",
        bindingEvent: "data",
        allowBinding: !0,
        allowSetting: !0,
        settingEvent: "data",
        settingTriggersEvent: !0,
        triggerFnName: "trigger",
        allowGetting: !0,
        immutableKeys: {
          id: !0,
          source: !0,
          target: !0,
          parent: !0
        },
        updateStyle: !0
      }),
      removeData: ct.removeData({
        field: "data",
        event: "data",
        triggerFnName: "trigger",
        triggerEvent: !0,
        immutableKeys: {
          id: !0,
          source: !0,
          target: !0,
          parent: !0
        },
        updateStyle: !0
      }),
      scratch: ct.data({
        field: "scratch",
        bindingEvent: "scratch",
        allowBinding: !0,
        allowSetting: !0,
        settingEvent: "scratch",
        settingTriggersEvent: !0,
        triggerFnName: "trigger",
        allowGetting: !0,
        updateStyle: !0
      }),
      removeScratch: ct.removeData({
        field: "scratch",
        event: "scratch",
        triggerFnName: "trigger",
        triggerEvent: !0,
        updateStyle: !0
      }),
      rscratch: ct.data({
        field: "rscratch",
        allowBinding: !1,
        allowSetting: !0,
        settingTriggersEvent: !1,
        allowGetting: !0
      }),
      removeRscratch: ct.removeData({
        field: "rscratch",
        triggerEvent: !1
      }),
      id: function() {
        var e = this[0];
        if (e)
          return e._private.data.id;
      }
    }, Qa.attr = Qa.data, Qa.removeAttr = Qa.removeData;
    var Ad = Mo, $n = {};
    function zi(t) {
      return function(e) {
        var r = this;
        if (e === void 0 && (e = !0), r.length !== 0)
          if (r.isNode() && !r.removed()) {
            for (var a = 0, n = r[0], i = n._private.edges, s = 0; s < i.length; s++) {
              var o = i[s];
              !e && o.isLoop() || (a += t(n, o));
            }
            return a;
          } else
            return;
      };
    }
    Qe($n, {
      degree: zi(function(t, e) {
        return e.source().same(e.target()) ? 2 : 1;
      }),
      indegree: zi(function(t, e) {
        return e.target().same(t) ? 1 : 0;
      }),
      outdegree: zi(function(t, e) {
        return e.source().same(t) ? 1 : 0;
      })
    });
    function Ta(t, e) {
      return function(r) {
        for (var a, n = this.nodes(), i = 0; i < n.length; i++) {
          var s = n[i], o = s[t](r);
          o !== void 0 && (a === void 0 || e(o, a)) && (a = o);
        }
        return a;
      };
    }
    Qe($n, {
      minDegree: Ta("degree", function(t, e) {
        return t < e;
      }),
      maxDegree: Ta("degree", function(t, e) {
        return t > e;
      }),
      minIndegree: Ta("indegree", function(t, e) {
        return t < e;
      }),
      maxIndegree: Ta("indegree", function(t, e) {
        return t > e;
      }),
      minOutdegree: Ta("outdegree", function(t, e) {
        return t < e;
      }),
      maxOutdegree: Ta("outdegree", function(t, e) {
        return t > e;
      })
    }), Qe($n, {
      totalDegree: function(e) {
        for (var r = 0, a = this.nodes(), n = 0; n < a.length; n++)
          r += a[n].degree(e);
        return r;
      }
    });
    var lr, No, Io = function(e, r, a) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        if (!i.locked()) {
          var s = i._private.position, o = {
            x: r.x != null ? r.x - s.x : 0,
            y: r.y != null ? r.y - s.y : 0
          };
          i.isParent() && !(o.x === 0 && o.y === 0) && i.children().shift(o, a), i.dirtyBoundingBoxCache();
        }
      }
    }, Ro = {
      field: "position",
      bindingEvent: "position",
      allowBinding: !0,
      allowSetting: !0,
      settingEvent: "position",
      settingTriggersEvent: !0,
      triggerFnName: "emitAndNotify",
      allowGetting: !0,
      validKeys: ["x", "y"],
      beforeGet: function(e) {
        e.updateCompoundBounds();
      },
      beforeSet: function(e, r) {
        Io(e, r, !1);
      },
      onSet: function(e) {
        e.dirtyCompoundBoundsCache();
      },
      canSet: function(e) {
        return !e.locked();
      }
    };
    lr = No = {
      position: ct.data(Ro),
      silentPosition: ct.data(Qe({}, Ro, {
        allowBinding: !1,
        allowSetting: !0,
        settingTriggersEvent: !1,
        allowGetting: !1,
        beforeSet: function(e, r) {
          Io(e, r, !0);
        },
        onSet: function(e) {
          e.dirtyCompoundBoundsCache();
        }
      })),
      positions: function(e, r) {
        if (B(e))
          r ? this.silentPosition(e) : this.position(e);
        else if (te(e)) {
          var a = e, n = this.cy();
          n.startBatch();
          for (var i = 0; i < this.length; i++) {
            var s = this[i], o = void 0;
            (o = a(s, i)) && (r ? s.silentPosition(o) : s.position(o));
          }
          n.endBatch();
        }
        return this;
      },
      silentPositions: function(e) {
        return this.positions(e, !0);
      },
      shift: function(e, r, a) {
        var n;
        if (B(e) ? (n = {
          x: R(e.x) ? e.x : 0,
          y: R(e.y) ? e.y : 0
        }, a = r) : V(e) && R(r) && (n = {
          x: 0,
          y: 0
        }, n[e] = r), n != null) {
          var i = this.cy();
          i.startBatch();
          for (var s = 0; s < this.length; s++) {
            var o = this[s];
            if (!(i.hasCompoundNodes() && o.isChild() && o.ancestors().anySame(this))) {
              var l = o.position(), u = {
                x: l.x + n.x,
                y: l.y + n.y
              };
              a ? o.silentPosition(u) : o.position(u);
            }
          }
          i.endBatch();
        }
        return this;
      },
      silentShift: function(e, r) {
        return B(e) ? this.shift(e, !0) : V(e) && R(r) && this.shift(e, r, !0), this;
      },
      renderedPosition: function(e, r) {
        var a = this[0], n = this.cy(), i = n.zoom(), s = n.pan(), o = B(e) ? e : void 0, l = o !== void 0 || r !== void 0 && V(e);
        if (a && a.isNode())
          if (l)
            for (var u = 0; u < this.length; u++) {
              var f = this[u];
              r !== void 0 ? f.position(e, (r - s[e]) / i) : o !== void 0 && f.position(Bs(o, i, s));
            }
          else {
            var h = a.position();
            return o = Sn(h, i, s), e === void 0 ? o : o[e];
          }
        else if (!l)
          return;
        return this;
      },
      relativePosition: function(e, r) {
        var a = this[0], n = this.cy(), i = B(e) ? e : void 0, s = i !== void 0 || r !== void 0 && V(e), o = n.hasCompoundNodes();
        if (a && a.isNode())
          if (s)
            for (var l = 0; l < this.length; l++) {
              var u = this[l], f = o ? u.parent() : null, h = f && f.length > 0, c = h;
              h && (f = f[0]);
              var d = c ? f.position() : {
                x: 0,
                y: 0
              };
              r !== void 0 ? u.position(e, r + d[e]) : i !== void 0 && u.position({
                x: i.x + d.x,
                y: i.y + d.y
              });
            }
          else {
            var v = a.position(), y = o ? a.parent() : null, p = y && y.length > 0, g = p;
            p && (y = y[0]);
            var m = g ? y.position() : {
              x: 0,
              y: 0
            };
            return i = {
              x: v.x - m.x,
              y: v.y - m.y
            }, e === void 0 ? i : i[e];
          }
        else if (!s)
          return;
        return this;
      }
    }, lr.modelPosition = lr.point = lr.position, lr.modelPositions = lr.points = lr.positions, lr.renderedPoint = lr.renderedPosition, lr.relativePoint = lr.relativePosition;
    var Od = No, Ca, zr;
    Ca = zr = {}, zr.renderedBoundingBox = function(t) {
      var e = this.boundingBox(t), r = this.cy(), a = r.zoom(), n = r.pan(), i = e.x1 * a + n.x, s = e.x2 * a + n.x, o = e.y1 * a + n.y, l = e.y2 * a + n.y;
      return {
        x1: i,
        x2: s,
        y1: o,
        y2: l,
        w: s - i,
        h: l - o
      };
    }, zr.dirtyCompoundBoundsCache = function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, e = this.cy();
      return !e.styleEnabled() || !e.hasCompoundNodes() ? this : (this.forEachUp(function(r) {
        if (r.isParent()) {
          var a = r._private;
          a.compoundBoundsClean = !1, a.bbCache = null, t || r.emitAndNotify("bounds");
        }
      }), this);
    }, zr.updateCompoundBounds = function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, e = this.cy();
      if (!e.styleEnabled() || !e.hasCompoundNodes())
        return this;
      if (!t && e.batching())
        return this;
      function r(s) {
        if (!s.isParent())
          return;
        var o = s._private, l = s.children(), u = s.pstyle("compound-sizing-wrt-labels").value === "include", f = {
          width: {
            val: s.pstyle("min-width").pfValue,
            left: s.pstyle("min-width-bias-left"),
            right: s.pstyle("min-width-bias-right")
          },
          height: {
            val: s.pstyle("min-height").pfValue,
            top: s.pstyle("min-height-bias-top"),
            bottom: s.pstyle("min-height-bias-bottom")
          }
        }, h = l.boundingBox({
          includeLabels: u,
          includeOverlays: !1,
          useCache: !1
        }), c = o.position;
        (h.w === 0 || h.h === 0) && (h = {
          w: s.pstyle("width").pfValue,
          h: s.pstyle("height").pfValue
        }, h.x1 = c.x - h.w / 2, h.x2 = c.x + h.w / 2, h.y1 = c.y - h.h / 2, h.y2 = c.y + h.h / 2);
        function d(A, z, F) {
          var G = 0, X = 0, P = z + F;
          return A > 0 && P > 0 && (G = z / P * A, X = F / P * A), {
            biasDiff: G,
            biasComplementDiff: X
          };
        }
        function v(A, z, F, G) {
          if (F.units === "%")
            switch (G) {
              case "width":
                return A > 0 ? F.pfValue * A : 0;
              case "height":
                return z > 0 ? F.pfValue * z : 0;
              case "average":
                return A > 0 && z > 0 ? F.pfValue * (A + z) / 2 : 0;
              case "min":
                return A > 0 && z > 0 ? A > z ? F.pfValue * z : F.pfValue * A : 0;
              case "max":
                return A > 0 && z > 0 ? A > z ? F.pfValue * A : F.pfValue * z : 0;
              default:
                return 0;
            }
          else
            return F.units === "px" ? F.pfValue : 0;
        }
        var y = f.width.left.value;
        f.width.left.units === "px" && f.width.val > 0 && (y = y * 100 / f.width.val);
        var p = f.width.right.value;
        f.width.right.units === "px" && f.width.val > 0 && (p = p * 100 / f.width.val);
        var g = f.height.top.value;
        f.height.top.units === "px" && f.height.val > 0 && (g = g * 100 / f.height.val);
        var m = f.height.bottom.value;
        f.height.bottom.units === "px" && f.height.val > 0 && (m = m * 100 / f.height.val);
        var b = d(f.width.val - h.w, y, p), E = b.biasDiff, M = b.biasComplementDiff, S = d(f.height.val - h.h, g, m), x = S.biasDiff, I = S.biasComplementDiff;
        o.autoPadding = v(h.w, h.h, s.pstyle("padding"), s.pstyle("padding-relative-to").value), o.autoWidth = Math.max(h.w, f.width.val), c.x = (-E + h.x1 + h.x2 + M) / 2, o.autoHeight = Math.max(h.h, f.height.val), c.y = (-x + h.y1 + h.y2 + I) / 2;
      }
      for (var a = 0; a < this.length; a++) {
        var n = this[a], i = n._private;
        (!i.compoundBoundsClean || t) && (r(n), e.batching() || (i.compoundBoundsClean = !0));
      }
      return this;
    };
    var ar = function(e) {
      return e === 1 / 0 || e === -1 / 0 ? 0 : e;
    }, fr = function(e, r, a, n, i) {
      n - r === 0 || i - a === 0 || r == null || a == null || n == null || i == null || (e.x1 = r < e.x1 ? r : e.x1, e.x2 = n > e.x2 ? n : e.x2, e.y1 = a < e.y1 ? a : e.y1, e.y2 = i > e.y2 ? i : e.y2, e.w = e.x2 - e.x1, e.h = e.y2 - e.y1);
    }, Zr = function(e, r) {
      return r == null ? e : fr(e, r.x1, r.y1, r.x2, r.y2);
    }, Ja = function(e, r, a) {
      return ur(e, r, a);
    }, Yn = function(e, r, a) {
      if (!r.cy().headless()) {
        var n = r._private, i = n.rstyle, s = i.arrowWidth / 2, o = r.pstyle(a + "-arrow-shape").value, l, u;
        if (o !== "none") {
          a === "source" ? (l = i.srcX, u = i.srcY) : a === "target" ? (l = i.tgtX, u = i.tgtY) : (l = i.midX, u = i.midY);
          var f = n.arrowBounds = n.arrowBounds || {}, h = f[a] = f[a] || {};
          h.x1 = l - s, h.y1 = u - s, h.x2 = l + s, h.y2 = u + s, h.w = h.x2 - h.x1, h.h = h.y2 - h.y1, An(h, 1), fr(e, h.x1, h.y1, h.x2, h.y2);
        }
      }
    }, Vi = function(e, r, a) {
      if (!r.cy().headless()) {
        var n;
        a ? n = a + "-" : n = "";
        var i = r._private, s = i.rstyle, o = r.pstyle(n + "label").strValue;
        if (o) {
          var l = r.pstyle("text-halign"), u = r.pstyle("text-valign"), f = Ja(s, "labelWidth", a), h = Ja(s, "labelHeight", a), c = Ja(s, "labelX", a), d = Ja(s, "labelY", a), v = r.pstyle(n + "text-margin-x").pfValue, y = r.pstyle(n + "text-margin-y").pfValue, p = r.isEdge(), g = r.pstyle(n + "text-rotation"), m = r.pstyle("text-outline-width").pfValue, b = r.pstyle("text-border-width").pfValue, E = b / 2, M = r.pstyle("text-background-padding").pfValue, S = 2, x = h, I = f, A = I / 2, z = x / 2, F, G, X, P;
          if (p)
            F = c - A, G = c + A, X = d - z, P = d + z;
          else {
            switch (l.value) {
              case "left":
                F = c - I, G = c;
                break;
              case "center":
                F = c - A, G = c + A;
                break;
              case "right":
                F = c, G = c + I;
                break;
            }
            switch (u.value) {
              case "top":
                X = d - x, P = d;
                break;
              case "center":
                X = d - z, P = d + z;
                break;
              case "bottom":
                X = d, P = d + x;
                break;
            }
          }
          F += v - Math.max(m, E) - M - S, G += v + Math.max(m, E) + M + S, X += y - Math.max(m, E) - M - S, P += y + Math.max(m, E) + M + S;
          var Q = a || "main", W = i.labelBounds, Z = W[Q] = W[Q] || {};
          Z.x1 = F, Z.y1 = X, Z.x2 = G, Z.y2 = P, Z.w = G - F, Z.h = P - X;
          var re = p && g.strValue === "autorotate", le = g.pfValue != null && g.pfValue !== 0;
          if (re || le) {
            var ve = re ? Ja(i.rstyle, "labelAngle", a) : g.pfValue, se = Math.cos(ve), ie = Math.sin(ve), be = (F + G) / 2, De = (X + P) / 2;
            if (!p) {
              switch (l.value) {
                case "left":
                  be = G;
                  break;
                case "right":
                  be = F;
                  break;
              }
              switch (u.value) {
                case "top":
                  De = P;
                  break;
                case "bottom":
                  De = X;
                  break;
              }
            }
            var Le = function(He, ke) {
              return He = He - be, ke = ke - De, {
                x: He * se - ke * ie + be,
                y: He * ie + ke * se + De
              };
            }, Ae = Le(F, X), Me = Le(F, P), Ee = Le(G, X), ne = Le(G, P);
            F = Math.min(Ae.x, Me.x, Ee.x, ne.x), G = Math.max(Ae.x, Me.x, Ee.x, ne.x), X = Math.min(Ae.y, Me.y, Ee.y, ne.y), P = Math.max(Ae.y, Me.y, Ee.y, ne.y);
          }
          var xe = Q + "Rot", Te = W[xe] = W[xe] || {};
          Te.x1 = F, Te.y1 = X, Te.x2 = G, Te.y2 = P, Te.w = G - F, Te.h = P - X, fr(e, F, X, G, P), fr(i.labelBounds.all, F, X, G, P);
        }
        return e;
      }
    }, Md = function(e, r) {
      if (!r.cy().headless()) {
        var a = r.pstyle("outline-opacity").value, n = r.pstyle("outline-width").value;
        if (a > 0 && n > 0) {
          var i = r.pstyle("outline-offset").value, s = r.pstyle("shape").value, o = n + i, l = (e.w + o * 2) / e.w, u = (e.h + o * 2) / e.h, f = 0, h = 0;
          ["diamond", "pentagon", "round-triangle"].includes(s) ? (l = (e.w + o * 2.4) / e.w, h = -o / 3.6) : ["concave-hexagon", "rhomboid", "right-rhomboid"].includes(s) ? l = (e.w + o * 2.4) / e.w : s === "star" ? (l = (e.w + o * 2.8) / e.w, u = (e.h + o * 2.6) / e.h, h = -o / 3.8) : s === "triangle" ? (l = (e.w + o * 2.8) / e.w, u = (e.h + o * 2.4) / e.h, h = -o / 1.4) : s === "vee" && (l = (e.w + o * 4.4) / e.w, u = (e.h + o * 3.8) / e.h, h = -o * 0.5);
          var c = e.h * u - e.h, d = e.w * l - e.w;
          if (On(e, [Math.ceil(c / 2), Math.ceil(d / 2)]), f != 0 || h !== 0) {
            var v = Qf(e, f, h);
            Gs(e, v);
          }
        }
      }
    }, Nd = function(e, r) {
      var a = e._private.cy, n = a.styleEnabled(), i = a.headless(), s = Kt(), o = e._private, l = e.isNode(), u = e.isEdge(), f, h, c, d, v, y, p = o.rstyle, g = l && n ? e.pstyle("bounds-expansion").pfValue : [0], m = function(Ve) {
        return Ve.pstyle("display").value !== "none";
      }, b = !n || m(e) && (!u || m(e.source()) && m(e.target()));
      if (b) {
        var E = 0, M = 0;
        n && r.includeOverlays && (E = e.pstyle("overlay-opacity").value, E !== 0 && (M = e.pstyle("overlay-padding").value));
        var S = 0, x = 0;
        n && r.includeUnderlays && (S = e.pstyle("underlay-opacity").value, S !== 0 && (x = e.pstyle("underlay-padding").value));
        var I = Math.max(M, x), A = 0, z = 0;
        if (n && (A = e.pstyle("width").pfValue, z = A / 2), l && r.includeNodes) {
          var F = e.position();
          v = F.x, y = F.y;
          var G = e.outerWidth(), X = G / 2, P = e.outerHeight(), Q = P / 2;
          f = v - X, h = v + X, c = y - Q, d = y + Q, fr(s, f, c, h, d), n && r.includeOutlines && Md(s, e);
        } else if (u && r.includeEdges)
          if (n && !i) {
            var W = e.pstyle("curve-style").strValue;
            if (f = Math.min(p.srcX, p.midX, p.tgtX), h = Math.max(p.srcX, p.midX, p.tgtX), c = Math.min(p.srcY, p.midY, p.tgtY), d = Math.max(p.srcY, p.midY, p.tgtY), f -= z, h += z, c -= z, d += z, fr(s, f, c, h, d), W === "haystack") {
              var Z = p.haystackPts;
              if (Z && Z.length === 2) {
                if (f = Z[0].x, c = Z[0].y, h = Z[1].x, d = Z[1].y, f > h) {
                  var re = f;
                  f = h, h = re;
                }
                if (c > d) {
                  var le = c;
                  c = d, d = le;
                }
                fr(s, f - z, c - z, h + z, d + z);
              }
            } else if (W === "bezier" || W === "unbundled-bezier" || W.endsWith("segments") || W.endsWith("taxi")) {
              var ve;
              switch (W) {
                case "bezier":
                case "unbundled-bezier":
                  ve = p.bezierPts;
                  break;
                case "segments":
                case "taxi":
                case "round-segments":
                case "round-taxi":
                  ve = p.linePts;
                  break;
              }
              if (ve != null)
                for (var se = 0; se < ve.length; se++) {
                  var ie = ve[se];
                  f = ie.x - z, h = ie.x + z, c = ie.y - z, d = ie.y + z, fr(s, f, c, h, d);
                }
            }
          } else {
            var be = e.source(), De = be.position(), Le = e.target(), Ae = Le.position();
            if (f = De.x, h = Ae.x, c = De.y, d = Ae.y, f > h) {
              var Me = f;
              f = h, h = Me;
            }
            if (c > d) {
              var Ee = c;
              c = d, d = Ee;
            }
            f -= z, h += z, c -= z, d += z, fr(s, f, c, h, d);
          }
        if (n && r.includeEdges && u && (Yn(s, e, "mid-source"), Yn(s, e, "mid-target"), Yn(s, e, "source"), Yn(s, e, "target")), n) {
          var ne = e.pstyle("ghost").value === "yes";
          if (ne) {
            var xe = e.pstyle("ghost-offset-x").pfValue, Te = e.pstyle("ghost-offset-y").pfValue;
            fr(s, s.x1 + xe, s.y1 + Te, s.x2 + xe, s.y2 + Te);
          }
        }
        var Be = o.bodyBounds = o.bodyBounds || {};
        zs(Be, s), On(Be, g), An(Be, 1), n && (f = s.x1, h = s.x2, c = s.y1, d = s.y2, fr(s, f - I, c - I, h + I, d + I));
        var He = o.overlayBounds = o.overlayBounds || {};
        zs(He, s), On(He, g), An(He, 1);
        var ke = o.labelBounds = o.labelBounds || {};
        ke.all != null ? Zf(ke.all) : ke.all = Kt(), n && r.includeLabels && (r.includeMainLabels && Vi(s, e, null), u && (r.includeSourceLabels && Vi(s, e, "source"), r.includeTargetLabels && Vi(s, e, "target")));
      }
      return s.x1 = ar(s.x1), s.y1 = ar(s.y1), s.x2 = ar(s.x2), s.y2 = ar(s.y2), s.w = ar(s.x2 - s.x1), s.h = ar(s.y2 - s.y1), s.w > 0 && s.h > 0 && b && (On(s, g), An(s, 1)), s;
    }, ko = function(e) {
      var r = 0, a = function(s) {
        return (s ? 1 : 0) << r++;
      }, n = 0;
      return n += a(e.incudeNodes), n += a(e.includeEdges), n += a(e.includeLabels), n += a(e.includeMainLabels), n += a(e.includeSourceLabels), n += a(e.includeTargetLabels), n += a(e.includeOverlays), n += a(e.includeOutlines), n;
    }, Po = function(e) {
      if (e.isEdge()) {
        var r = e.source().position(), a = e.target().position(), n = function(s) {
          return Math.round(s);
        };
        return yf([n(r.x), n(r.y), n(a.x), n(a.y)]);
      } else
        return 0;
    }, Bo = function(e, r) {
      var a = e._private, n, i = e.isEdge(), s = r == null ? Fo : ko(r), o = s === Fo, l = Po(e), u = a.bbCachePosKey === l, f = r.useCache && u, h = function(y) {
        return y._private.bbCache == null || y._private.styleDirty;
      }, c = !f || h(e) || i && h(e.source()) || h(e.target());
      if (c ? (u || e.recalculateRenderedStyle(f), n = Nd(e, ja), a.bbCache = n, a.bbCachePosKey = l) : n = a.bbCache, !o) {
        var d = e.isNode();
        n = Kt(), (r.includeNodes && d || r.includeEdges && !d) && (r.includeOverlays ? Zr(n, a.overlayBounds) : Zr(n, a.bodyBounds)), r.includeLabels && (r.includeMainLabels && (!i || r.includeSourceLabels && r.includeTargetLabels) ? Zr(n, a.labelBounds.all) : (r.includeMainLabels && Zr(n, a.labelBounds.mainRot), r.includeSourceLabels && Zr(n, a.labelBounds.sourceRot), r.includeTargetLabels && Zr(n, a.labelBounds.targetRot))), n.w = n.x2 - n.x1, n.h = n.y2 - n.y1;
      }
      return n;
    }, ja = {
      includeNodes: !0,
      includeEdges: !0,
      includeLabels: !0,
      includeMainLabels: !0,
      includeSourceLabels: !0,
      includeTargetLabels: !0,
      includeOverlays: !0,
      includeUnderlays: !0,
      includeOutlines: !0,
      useCache: !0
    }, Fo = ko(ja), Go = It(ja);
    zr.boundingBox = function(t) {
      var e;
      if (this.length === 1 && this[0]._private.bbCache != null && !this[0]._private.styleDirty && (t === void 0 || t.useCache === void 0 || t.useCache === !0))
        t === void 0 ? t = ja : t = Go(t), e = Bo(this[0], t);
      else {
        e = Kt(), t = t || ja;
        var r = Go(t), a = this, n = a.cy(), i = n.styleEnabled();
        if (i)
          for (var s = 0; s < a.length; s++) {
            var o = a[s], l = o._private, u = Po(o), f = l.bbCachePosKey === u, h = r.useCache && f && !l.styleDirty;
            o.recalculateRenderedStyle(h);
          }
        this.updateCompoundBounds(!t.useCache);
        for (var c = 0; c < a.length; c++) {
          var d = a[c];
          Zr(e, Bo(d, r));
        }
      }
      return e.x1 = ar(e.x1), e.y1 = ar(e.y1), e.x2 = ar(e.x2), e.y2 = ar(e.y2), e.w = ar(e.x2 - e.x1), e.h = ar(e.y2 - e.y1), e;
    }, zr.dirtyBoundingBoxCache = function() {
      for (var t = 0; t < this.length; t++) {
        var e = this[t]._private;
        e.bbCache = null, e.bbCachePosKey = null, e.bodyBounds = null, e.overlayBounds = null, e.labelBounds.all = null, e.labelBounds.source = null, e.labelBounds.target = null, e.labelBounds.main = null, e.labelBounds.sourceRot = null, e.labelBounds.targetRot = null, e.labelBounds.mainRot = null, e.arrowBounds.source = null, e.arrowBounds.target = null, e.arrowBounds["mid-source"] = null, e.arrowBounds["mid-target"] = null;
      }
      return this.emitAndNotify("bounds"), this;
    }, zr.boundingBoxAt = function(t) {
      var e = this.nodes(), r = this.cy(), a = r.hasCompoundNodes(), n = r.collection();
      if (a && (n = e.filter(function(u) {
        return u.isParent();
      }), e = e.not(n)), B(t)) {
        var i = t;
        t = function() {
          return i;
        };
      }
      var s = function(f, h) {
        return f._private.bbAtOldPos = t(f, h);
      }, o = function(f) {
        return f._private.bbAtOldPos;
      };
      r.startBatch(), e.forEach(s).silentPositions(t), a && (n.dirtyCompoundBoundsCache(), n.dirtyBoundingBoxCache(), n.updateCompoundBounds(!0));
      var l = Kf(this.boundingBox({
        useCache: !1
      }));
      return e.silentPositions(o), a && (n.dirtyCompoundBoundsCache(), n.dirtyBoundingBoxCache(), n.updateCompoundBounds(!0)), r.endBatch(), l;
    }, Ca.boundingbox = Ca.bb = Ca.boundingBox, Ca.renderedBoundingbox = Ca.renderedBoundingBox;
    var Id = zr, en, tn;
    en = tn = {};
    var zo = function(e) {
      e.uppercaseName = tr(e.name), e.autoName = "auto" + e.uppercaseName, e.labelName = "label" + e.uppercaseName, e.outerName = "outer" + e.uppercaseName, e.uppercaseOuterName = tr(e.outerName), en[e.name] = function() {
        var a = this[0], n = a._private, i = n.cy, s = i._private.styleEnabled;
        if (a)
          if (s) {
            if (a.isParent())
              return a.updateCompoundBounds(), n[e.autoName] || 0;
            var o = a.pstyle(e.name);
            switch (o.strValue) {
              case "label":
                return a.recalculateRenderedStyle(), n.rstyle[e.labelName] || 0;
              default:
                return o.pfValue;
            }
          } else
            return 1;
      }, en["outer" + e.uppercaseName] = function() {
        var a = this[0], n = a._private, i = n.cy, s = i._private.styleEnabled;
        if (a)
          if (s) {
            var o = a[e.name](), l = a.pstyle("border-width").pfValue, u = 2 * a.padding();
            return o + l + u;
          } else
            return 1;
      }, en["rendered" + e.uppercaseName] = function() {
        var a = this[0];
        if (a) {
          var n = a[e.name]();
          return n * this.cy().zoom();
        }
      }, en["rendered" + e.uppercaseOuterName] = function() {
        var a = this[0];
        if (a) {
          var n = a[e.outerName]();
          return n * this.cy().zoom();
        }
      };
    };
    zo({
      name: "width"
    }), zo({
      name: "height"
    }), tn.padding = function() {
      var t = this[0], e = t._private;
      return t.isParent() ? (t.updateCompoundBounds(), e.autoPadding !== void 0 ? e.autoPadding : t.pstyle("padding").pfValue) : t.pstyle("padding").pfValue;
    }, tn.paddedHeight = function() {
      var t = this[0];
      return t.height() + 2 * t.padding();
    }, tn.paddedWidth = function() {
      var t = this[0];
      return t.width() + 2 * t.padding();
    };
    var Rd = tn, kd = function(e, r) {
      if (e.isEdge())
        return r(e);
    }, Pd = function(e, r) {
      if (e.isEdge()) {
        var a = e.cy();
        return Sn(r(e), a.zoom(), a.pan());
      }
    }, Bd = function(e, r) {
      if (e.isEdge()) {
        var a = e.cy(), n = a.pan(), i = a.zoom();
        return r(e).map(function(s) {
          return Sn(s, i, n);
        });
      }
    }, Fd = function(e) {
      return e.renderer().getControlPoints(e);
    }, Gd = function(e) {
      return e.renderer().getSegmentPoints(e);
    }, zd = function(e) {
      return e.renderer().getSourceEndpoint(e);
    }, Vd = function(e) {
      return e.renderer().getTargetEndpoint(e);
    }, Ud = function(e) {
      return e.renderer().getEdgeMidpoint(e);
    }, Vo = {
      controlPoints: {
        get: Fd,
        mult: !0
      },
      segmentPoints: {
        get: Gd,
        mult: !0
      },
      sourceEndpoint: {
        get: zd
      },
      targetEndpoint: {
        get: Vd
      },
      midpoint: {
        get: Ud
      }
    }, $d = function(e) {
      return "rendered" + e[0].toUpperCase() + e.substr(1);
    }, Yd = Object.keys(Vo).reduce(function(t, e) {
      var r = Vo[e], a = $d(e);
      return t[e] = function() {
        return kd(this, r.get);
      }, r.mult ? t[a] = function() {
        return Bd(this, r.get);
      } : t[a] = function() {
        return Pd(this, r.get);
      }, t;
    }, {}), _d = Qe({}, Od, Id, Rd, Yd);
    /*!
    	  Event object based on jQuery events, MIT license
    
    	  https://jquery.org/license/
    	  https://tldrlegal.com/license/mit-license
    	  https://github.com/jquery/jquery/blob/master/src/event.js
    	  */
    var Uo = function(e, r) {
      this.recycle(e, r);
    };
    function rn() {
      return !1;
    }
    function _n() {
      return !0;
    }
    Uo.prototype = {
      instanceString: function() {
        return "event";
      },
      recycle: function(e, r) {
        if (this.isImmediatePropagationStopped = this.isPropagationStopped = this.isDefaultPrevented = rn, e != null && e.preventDefault ? (this.type = e.type, this.isDefaultPrevented = e.defaultPrevented ? _n : rn) : e != null && e.type ? r = e : this.type = e, r != null && (this.originalEvent = r.originalEvent, this.type = r.type != null ? r.type : this.type, this.cy = r.cy, this.target = r.target, this.position = r.position, this.renderedPosition = r.renderedPosition, this.namespace = r.namespace, this.layout = r.layout), this.cy != null && this.position != null && this.renderedPosition == null) {
          var a = this.position, n = this.cy.zoom(), i = this.cy.pan();
          this.renderedPosition = {
            x: a.x * n + i.x,
            y: a.y * n + i.y
          };
        }
        this.timeStamp = e && e.timeStamp || Date.now();
      },
      preventDefault: function() {
        this.isDefaultPrevented = _n;
        var e = this.originalEvent;
        !e || e.preventDefault && e.preventDefault();
      },
      stopPropagation: function() {
        this.isPropagationStopped = _n;
        var e = this.originalEvent;
        !e || e.stopPropagation && e.stopPropagation();
      },
      stopImmediatePropagation: function() {
        this.isImmediatePropagationStopped = _n, this.stopPropagation();
      },
      isDefaultPrevented: rn,
      isPropagationStopped: rn,
      isImmediatePropagationStopped: rn
    };
    var $o = /^([^.]+)(\.(?:[^.]+))?$/, Hd = ".*", Yo = {
      qualifierCompare: function(e, r) {
        return e === r;
      },
      eventMatches: function() {
        return !0;
      },
      addEventFields: function() {
      },
      callbackContext: function(e) {
        return e;
      },
      beforeEmit: function() {
      },
      afterEmit: function() {
      },
      bubble: function() {
        return !1;
      },
      parent: function() {
        return null;
      },
      context: null
    }, _o = Object.keys(Yo), Xd = {};
    function Hn() {
      for (var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Xd, e = arguments.length > 1 ? arguments[1] : void 0, r = 0; r < _o.length; r++) {
        var a = _o[r];
        this[a] = t[a] || Yo[a];
      }
      this.context = e || this.context, this.listeners = [], this.emitting = 0;
    }
    var Vr = Hn.prototype, Ho = function(e, r, a, n, i, s, o) {
      te(n) && (i = n, n = null), o && (s == null ? s = o : s = Qe({}, s, o));
      for (var l = L(a) ? a : a.split(/\s+/), u = 0; u < l.length; u++) {
        var f = l[u];
        if (!ze(f)) {
          var h = f.match($o);
          if (h) {
            var c = h[1], d = h[2] ? h[2] : null, v = r(e, f, c, d, n, i, s);
            if (v === !1)
              break;
          }
        }
      }
    }, Xo = function(e, r) {
      return e.addEventFields(e.context, r), new Uo(r.type, r);
    }, qd = function(e, r, a) {
      if (Fe(a)) {
        r(e, a);
        return;
      } else if (B(a)) {
        r(e, Xo(e, a));
        return;
      }
      for (var n = L(a) ? a : a.split(/\s+/), i = 0; i < n.length; i++) {
        var s = n[i];
        if (!ze(s)) {
          var o = s.match($o);
          if (o) {
            var l = o[1], u = o[2] ? o[2] : null, f = Xo(e, {
              type: l,
              namespace: u,
              target: e.context
            });
            r(e, f);
          }
        }
      }
    };
    Vr.on = Vr.addListener = function(t, e, r, a, n) {
      return Ho(this, function(i, s, o, l, u, f, h) {
        te(f) && i.listeners.push({
          event: s,
          callback: f,
          type: o,
          namespace: l,
          qualifier: u,
          conf: h
        });
      }, t, e, r, a, n), this;
    }, Vr.one = function(t, e, r, a) {
      return this.on(t, e, r, a, {
        one: !0
      });
    }, Vr.removeListener = Vr.off = function(t, e, r, a) {
      var n = this;
      this.emitting !== 0 && (this.listeners = xf(this.listeners));
      for (var i = this.listeners, s = function(u) {
        var f = i[u];
        Ho(n, function(h, c, d, v, y, p) {
          if ((f.type === d || t === "*") && (!v && f.namespace !== ".*" || f.namespace === v) && (!y || h.qualifierCompare(f.qualifier, y)) && (!p || f.callback === p))
            return i.splice(u, 1), !1;
        }, t, e, r, a);
      }, o = i.length - 1; o >= 0; o--)
        s(o);
      return this;
    }, Vr.removeAllListeners = function() {
      return this.removeListener("*");
    }, Vr.emit = Vr.trigger = function(t, e, r) {
      var a = this.listeners, n = a.length;
      return this.emitting++, L(e) || (e = [e]), qd(this, function(i, s) {
        r != null && (a = [{
          event: s.event,
          type: s.type,
          namespace: s.namespace,
          callback: r
        }], n = a.length);
        for (var o = function(f) {
          var h = a[f];
          if (h.type === s.type && (!h.namespace || h.namespace === s.namespace || h.namespace === Hd) && i.eventMatches(i.context, h, s)) {
            var c = [s];
            e != null && Cf(c, e), i.beforeEmit(i.context, h, s), h.conf && h.conf.one && (i.listeners = i.listeners.filter(function(y) {
              return y !== h;
            }));
            var d = i.callbackContext(i.context, h, s), v = h.callback.apply(d, c);
            i.afterEmit(i.context, h, s), v === !1 && (s.stopPropagation(), s.preventDefault());
          }
        }, l = 0; l < n; l++)
          o(l);
        i.bubble(i.context) && !s.isPropagationStopped() && i.parent(i.context).emit(s, e);
      }, t), this.emitting--, this;
    };
    var Wd = {
      qualifierCompare: function(e, r) {
        return e == null || r == null ? e == null && r == null : e.sameText(r);
      },
      eventMatches: function(e, r, a) {
        var n = r.qualifier;
        return n != null ? e !== a.target && Ie(a.target) && n.matches(a.target) : !0;
      },
      addEventFields: function(e, r) {
        r.cy = e.cy(), r.target = e;
      },
      callbackContext: function(e, r, a) {
        return r.qualifier != null ? a.target : e;
      },
      beforeEmit: function(e, r) {
        r.conf && r.conf.once && r.conf.onceCollection.removeListener(r.event, r.qualifier, r.callback);
      },
      bubble: function() {
        return !0;
      },
      parent: function(e) {
        return e.isChild() ? e.parent() : e.cy();
      }
    }, Xn = function(e) {
      return V(e) ? new Br(e) : e;
    }, qo = {
      createEmitter: function() {
        for (var e = 0; e < this.length; e++) {
          var r = this[e], a = r._private;
          a.emitter || (a.emitter = new Hn(Wd, r));
        }
        return this;
      },
      emitter: function() {
        return this._private.emitter;
      },
      on: function(e, r, a) {
        for (var n = Xn(r), i = 0; i < this.length; i++) {
          var s = this[i];
          s.emitter().on(e, n, a);
        }
        return this;
      },
      removeListener: function(e, r, a) {
        for (var n = Xn(r), i = 0; i < this.length; i++) {
          var s = this[i];
          s.emitter().removeListener(e, n, a);
        }
        return this;
      },
      removeAllListeners: function() {
        for (var e = 0; e < this.length; e++) {
          var r = this[e];
          r.emitter().removeAllListeners();
        }
        return this;
      },
      one: function(e, r, a) {
        for (var n = Xn(r), i = 0; i < this.length; i++) {
          var s = this[i];
          s.emitter().one(e, n, a);
        }
        return this;
      },
      once: function(e, r, a) {
        for (var n = Xn(r), i = 0; i < this.length; i++) {
          var s = this[i];
          s.emitter().on(e, n, a, {
            once: !0,
            onceCollection: this
          });
        }
      },
      emit: function(e, r) {
        for (var a = 0; a < this.length; a++) {
          var n = this[a];
          n.emitter().emit(e, r);
        }
        return this;
      },
      emitAndNotify: function(e, r) {
        if (this.length !== 0)
          return this.cy().notify(e, this), this.emit(e, r), this;
      }
    };
    ct.eventAliasesOn(qo);
    var Wo = {
      nodes: function(e) {
        return this.filter(function(r) {
          return r.isNode();
        }).filter(e);
      },
      edges: function(e) {
        return this.filter(function(r) {
          return r.isEdge();
        }).filter(e);
      },
      byGroup: function() {
        for (var e = this.spawn(), r = this.spawn(), a = 0; a < this.length; a++) {
          var n = this[a];
          n.isNode() ? e.push(n) : r.push(n);
        }
        return {
          nodes: e,
          edges: r
        };
      },
      filter: function(e, r) {
        if (e === void 0)
          return this;
        if (V(e) || Oe(e))
          return new Br(e).filter(this);
        if (te(e)) {
          for (var a = this.spawn(), n = this, i = 0; i < n.length; i++) {
            var s = n[i], o = r ? e.apply(r, [s, i, n]) : e(s, i, n);
            o && a.push(s);
          }
          return a;
        }
        return this.spawn();
      },
      not: function(e) {
        if (e) {
          V(e) && (e = this.filter(e));
          for (var r = this.spawn(), a = 0; a < this.length; a++) {
            var n = this[a], i = e.has(n);
            i || r.push(n);
          }
          return r;
        } else
          return this;
      },
      absoluteComplement: function() {
        var e = this.cy();
        return e.mutableElements().not(this);
      },
      intersect: function(e) {
        if (V(e)) {
          var r = e;
          return this.filter(r);
        }
        for (var a = this.spawn(), n = this, i = e, s = this.length < e.length, o = s ? n : i, l = s ? i : n, u = 0; u < o.length; u++) {
          var f = o[u];
          l.has(f) && a.push(f);
        }
        return a;
      },
      xor: function(e) {
        var r = this._private.cy;
        V(e) && (e = r.$(e));
        var a = this.spawn(), n = this, i = e, s = function(l, u) {
          for (var f = 0; f < l.length; f++) {
            var h = l[f], c = h._private.data.id, d = u.hasElementWithId(c);
            d || a.push(h);
          }
        };
        return s(n, i), s(i, n), a;
      },
      diff: function(e) {
        var r = this._private.cy;
        V(e) && (e = r.$(e));
        var a = this.spawn(), n = this.spawn(), i = this.spawn(), s = this, o = e, l = function(f, h, c) {
          for (var d = 0; d < f.length; d++) {
            var v = f[d], y = v._private.data.id, p = h.hasElementWithId(y);
            p ? i.merge(v) : c.push(v);
          }
        };
        return l(s, o, a), l(o, s, n), {
          left: a,
          right: n,
          both: i
        };
      },
      add: function(e) {
        var r = this._private.cy;
        if (!e)
          return this;
        if (V(e)) {
          var a = e;
          e = r.mutableElements().filter(a);
        }
        for (var n = this.spawnSelf(), i = 0; i < e.length; i++) {
          var s = e[i], o = !this.has(s);
          o && n.push(s);
        }
        return n;
      },
      merge: function(e) {
        var r = this._private, a = r.cy;
        if (!e)
          return this;
        if (e && V(e)) {
          var n = e;
          e = a.mutableElements().filter(n);
        }
        for (var i = r.map, s = 0; s < e.length; s++) {
          var o = e[s], l = o._private.data.id, u = !i.has(l);
          if (u) {
            var f = this.length++;
            this[f] = o, i.set(l, {
              ele: o,
              index: f
            });
          }
        }
        return this;
      },
      unmergeAt: function(e) {
        var r = this[e], a = r.id(), n = this._private, i = n.map;
        this[e] = void 0, i.delete(a);
        var s = e === this.length - 1;
        if (this.length > 1 && !s) {
          var o = this.length - 1, l = this[o], u = l._private.data.id;
          this[o] = void 0, this[e] = l, i.set(u, {
            ele: l,
            index: e
          });
        }
        return this.length--, this;
      },
      unmergeOne: function(e) {
        e = e[0];
        var r = this._private, a = e._private.data.id, n = r.map, i = n.get(a);
        if (!i)
          return this;
        var s = i.index;
        return this.unmergeAt(s), this;
      },
      unmerge: function(e) {
        var r = this._private.cy;
        if (!e)
          return this;
        if (e && V(e)) {
          var a = e;
          e = r.mutableElements().filter(a);
        }
        for (var n = 0; n < e.length; n++)
          this.unmergeOne(e[n]);
        return this;
      },
      unmergeBy: function(e) {
        for (var r = this.length - 1; r >= 0; r--) {
          var a = this[r];
          e(a) && this.unmergeAt(r);
        }
        return this;
      },
      map: function(e, r) {
        for (var a = [], n = this, i = 0; i < n.length; i++) {
          var s = n[i], o = r ? e.apply(r, [s, i, n]) : e(s, i, n);
          a.push(o);
        }
        return a;
      },
      reduce: function(e, r) {
        for (var a = r, n = this, i = 0; i < n.length; i++)
          a = e(a, n[i], i, n);
        return a;
      },
      max: function(e, r) {
        for (var a = -1 / 0, n, i = this, s = 0; s < i.length; s++) {
          var o = i[s], l = r ? e.apply(r, [o, s, i]) : e(o, s, i);
          l > a && (a = l, n = o);
        }
        return {
          value: a,
          ele: n
        };
      },
      min: function(e, r) {
        for (var a = 1 / 0, n, i = this, s = 0; s < i.length; s++) {
          var o = i[s], l = r ? e.apply(r, [o, s, i]) : e(o, s, i);
          l < a && (a = l, n = o);
        }
        return {
          value: a,
          ele: n
        };
      }
    }, st = Wo;
    st.u = st["|"] = st["+"] = st.union = st.or = st.add, st["\\"] = st["!"] = st["-"] = st.difference = st.relativeComplement = st.subtract = st.not, st.n = st["&"] = st["."] = st.and = st.intersection = st.intersect, st["^"] = st["(+)"] = st["(-)"] = st.symmetricDifference = st.symdiff = st.xor, st.fnFilter = st.filterFn = st.stdFilter = st.filter, st.complement = st.abscomp = st.absoluteComplement;
    var Kd = {
      isNode: function() {
        return this.group() === "nodes";
      },
      isEdge: function() {
        return this.group() === "edges";
      },
      isLoop: function() {
        return this.isEdge() && this.source()[0] === this.target()[0];
      },
      isSimple: function() {
        return this.isEdge() && this.source()[0] !== this.target()[0];
      },
      group: function() {
        var e = this[0];
        if (e)
          return e._private.group;
      }
    }, Ko = function(e, r) {
      var a = e.cy(), n = a.hasCompoundNodes();
      function i(f) {
        var h = f.pstyle("z-compound-depth");
        return h.value === "auto" ? n ? f.zDepth() : 0 : h.value === "bottom" ? -1 : h.value === "top" ? yi : 0;
      }
      var s = i(e) - i(r);
      if (s !== 0)
        return s;
      function o(f) {
        var h = f.pstyle("z-index-compare");
        return h.value === "auto" && f.isNode() ? 1 : 0;
      }
      var l = o(e) - o(r);
      if (l !== 0)
        return l;
      var u = e.pstyle("z-index").value - r.pstyle("z-index").value;
      return u !== 0 ? u : e.poolIndex() - r.poolIndex();
    }, qn = {
      forEach: function(e, r) {
        if (te(e))
          for (var a = this.length, n = 0; n < a; n++) {
            var i = this[n], s = r ? e.apply(r, [i, n, this]) : e(i, n, this);
            if (s === !1)
              break;
          }
        return this;
      },
      toArray: function() {
        for (var e = [], r = 0; r < this.length; r++)
          e.push(this[r]);
        return e;
      },
      slice: function(e, r) {
        var a = [], n = this.length;
        r == null && (r = n), e == null && (e = 0), e < 0 && (e = n + e), r < 0 && (r = n + r);
        for (var i = e; i >= 0 && i < r && i < n; i++)
          a.push(this[i]);
        return this.spawn(a);
      },
      size: function() {
        return this.length;
      },
      eq: function(e) {
        return this[e] || this.spawn();
      },
      first: function() {
        return this[0] || this.spawn();
      },
      last: function() {
        return this[this.length - 1] || this.spawn();
      },
      empty: function() {
        return this.length === 0;
      },
      nonempty: function() {
        return !this.empty();
      },
      sort: function(e) {
        if (!te(e))
          return this;
        var r = this.toArray().sort(e);
        return this.spawn(r);
      },
      sortByZIndex: function() {
        return this.sort(Ko);
      },
      zDepth: function() {
        var e = this[0];
        if (!!e) {
          var r = e._private, a = r.group;
          if (a === "nodes") {
            var n = r.data.parent ? e.parents().size() : 0;
            return e.isParent() ? n : yi - 1;
          } else {
            var i = r.source, s = r.target, o = i.zDepth(), l = s.zDepth();
            return Math.max(o, l, 0);
          }
        }
      }
    };
    qn.each = qn.forEach;
    var Zd = function() {
      var e = "undefined", r = (typeof Symbol > "u" ? "undefined" : J(Symbol)) != e && J(Symbol.iterator) != e;
      r && (qn[Symbol.iterator] = function() {
        var a = this, n = {
          value: void 0,
          done: !1
        }, i = 0, s = this.length;
        return T({
          next: function() {
            return i < s ? n.value = a[i++] : (n.value = void 0, n.done = !0), n;
          }
        }, Symbol.iterator, function() {
          return this;
        });
      });
    };
    Zd();
    var Qd = It({
      nodeDimensionsIncludeLabels: !1
    }), Wn = {
      layoutDimensions: function(e) {
        e = Qd(e);
        var r;
        if (!this.takesUpSpace())
          r = {
            w: 0,
            h: 0
          };
        else if (e.nodeDimensionsIncludeLabels) {
          var a = this.boundingBox();
          r = {
            w: a.w,
            h: a.h
          };
        } else
          r = {
            w: this.outerWidth(),
            h: this.outerHeight()
          };
        return (r.w === 0 || r.h === 0) && (r.w = r.h = 1), r;
      },
      layoutPositions: function(e, r, a) {
        var n = this.nodes().filter(function(M) {
          return !M.isParent();
        }), i = this.cy(), s = r.eles, o = function(S) {
          return S.id();
        }, l = tt(a, o);
        e.emit({
          type: "layoutstart",
          layout: e
        }), e.animations = [];
        var u = function(S, x, I) {
          var A = {
            x: x.x1 + x.w / 2,
            y: x.y1 + x.h / 2
          }, z = {
            x: (I.x - A.x) * S,
            y: (I.y - A.y) * S
          };
          return {
            x: A.x + z.x,
            y: A.y + z.y
          };
        }, f = r.spacingFactor && r.spacingFactor !== 1, h = function() {
          if (!f)
            return null;
          for (var S = Kt(), x = 0; x < n.length; x++) {
            var I = n[x], A = l(I, x);
            Jf(S, A.x, A.y);
          }
          return S;
        }, c = h(), d = tt(function(M, S) {
          var x = l(M, S);
          if (f) {
            var I = Math.abs(r.spacingFactor);
            x = u(I, c, x);
          }
          return r.transform != null && (x = r.transform(M, x)), x;
        }, o);
        if (r.animate) {
          for (var v = 0; v < n.length; v++) {
            var y = n[v], p = d(y, v), g = r.animateFilter == null || r.animateFilter(y, v);
            if (g) {
              var m = y.animation({
                position: p,
                duration: r.animationDuration,
                easing: r.animationEasing
              });
              e.animations.push(m);
            } else
              y.position(p);
          }
          if (r.fit) {
            var b = i.animation({
              fit: {
                boundingBox: s.boundingBoxAt(d),
                padding: r.padding
              },
              duration: r.animationDuration,
              easing: r.animationEasing
            });
            e.animations.push(b);
          } else if (r.zoom !== void 0 && r.pan !== void 0) {
            var E = i.animation({
              zoom: r.zoom,
              pan: r.pan,
              duration: r.animationDuration,
              easing: r.animationEasing
            });
            e.animations.push(E);
          }
          e.animations.forEach(function(M) {
            return M.play();
          }), e.one("layoutready", r.ready), e.emit({
            type: "layoutready",
            layout: e
          }), ya.all(e.animations.map(function(M) {
            return M.promise();
          })).then(function() {
            e.one("layoutstop", r.stop), e.emit({
              type: "layoutstop",
              layout: e
            });
          });
        } else
          n.positions(d), r.fit && i.fit(r.eles, r.padding), r.zoom != null && i.zoom(r.zoom), r.pan && i.pan(r.pan), e.one("layoutready", r.ready), e.emit({
            type: "layoutready",
            layout: e
          }), e.one("layoutstop", r.stop), e.emit({
            type: "layoutstop",
            layout: e
          });
        return this;
      },
      layout: function(e) {
        var r = this.cy();
        return r.makeLayout(Qe({}, e, {
          eles: this
        }));
      }
    };
    Wn.createLayout = Wn.makeLayout = Wn.layout;
    function Zo(t, e, r) {
      var a = r._private, n = a.styleCache = a.styleCache || [], i;
      return (i = n[t]) != null || (i = n[t] = e(r)), i;
    }
    function Kn(t, e) {
      return t = _r(t), function(a) {
        return Zo(t, e, a);
      };
    }
    function Zn(t, e) {
      t = _r(t);
      var r = function(n) {
        return e.call(n);
      };
      return function() {
        var n = this[0];
        if (n)
          return Zo(t, r, n);
      };
    }
    var Rt = {
      recalculateRenderedStyle: function(e) {
        var r = this.cy(), a = r.renderer(), n = r.styleEnabled();
        return a && n && a.recalculateRenderedStyle(this, e), this;
      },
      dirtyStyleCache: function() {
        var e = this.cy(), r = function(i) {
          return i._private.styleCache = null;
        };
        if (e.hasCompoundNodes()) {
          var a;
          a = this.spawnSelf().merge(this.descendants()).merge(this.parents()), a.merge(a.connectedEdges()), a.forEach(r);
        } else
          this.forEach(function(n) {
            r(n), n.connectedEdges().forEach(r);
          });
        return this;
      },
      updateStyle: function(e) {
        var r = this._private.cy;
        if (!r.styleEnabled())
          return this;
        if (r.batching()) {
          var a = r._private.batchStyleEles;
          return a.merge(this), this;
        }
        var n = r.hasCompoundNodes(), i = this;
        e = !!(e || e === void 0), n && (i = this.spawnSelf().merge(this.descendants()).merge(this.parents()));
        var s = i;
        return e ? s.emitAndNotify("style") : s.emit("style"), i.forEach(function(o) {
          return o._private.styleDirty = !0;
        }), this;
      },
      cleanStyle: function() {
        var e = this.cy();
        if (!!e.styleEnabled())
          for (var r = 0; r < this.length; r++) {
            var a = this[r];
            a._private.styleDirty && (a._private.styleDirty = !1, e.style().apply(a));
          }
      },
      parsedStyle: function(e) {
        var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, a = this[0], n = a.cy();
        if (!!n.styleEnabled() && a) {
          this.cleanStyle();
          var i = a._private.style[e];
          return i != null ? i : r ? n.style().getDefaultProperty(e) : null;
        }
      },
      numericStyle: function(e) {
        var r = this[0];
        if (!!r.cy().styleEnabled() && r) {
          var a = r.pstyle(e);
          return a.pfValue !== void 0 ? a.pfValue : a.value;
        }
      },
      numericStyleUnits: function(e) {
        var r = this[0];
        if (!!r.cy().styleEnabled() && r)
          return r.pstyle(e).units;
      },
      renderedStyle: function(e) {
        var r = this.cy();
        if (!r.styleEnabled())
          return this;
        var a = this[0];
        if (a)
          return r.style().getRenderedStyle(a, e);
      },
      style: function(e, r) {
        var a = this.cy();
        if (!a.styleEnabled())
          return this;
        var n = !1, i = a.style();
        if (B(e)) {
          var s = e;
          i.applyBypass(this, s, n), this.emitAndNotify("style");
        } else if (V(e))
          if (r === void 0) {
            var o = this[0];
            return o ? i.getStylePropertyValue(o, e) : void 0;
          } else
            i.applyBypass(this, e, r, n), this.emitAndNotify("style");
        else if (e === void 0) {
          var l = this[0];
          return l ? i.getRawStyle(l) : void 0;
        }
        return this;
      },
      removeStyle: function(e) {
        var r = this.cy();
        if (!r.styleEnabled())
          return this;
        var a = !1, n = r.style(), i = this;
        if (e === void 0)
          for (var s = 0; s < i.length; s++) {
            var o = i[s];
            n.removeAllBypasses(o, a);
          }
        else {
          e = e.split(/\s+/);
          for (var l = 0; l < i.length; l++) {
            var u = i[l];
            n.removeBypasses(u, e, a);
          }
        }
        return this.emitAndNotify("style"), this;
      },
      show: function() {
        return this.css("display", "element"), this;
      },
      hide: function() {
        return this.css("display", "none"), this;
      },
      effectiveOpacity: function() {
        var e = this.cy();
        if (!e.styleEnabled())
          return 1;
        var r = e.hasCompoundNodes(), a = this[0];
        if (a) {
          var n = a._private, i = a.pstyle("opacity").value;
          if (!r)
            return i;
          var s = n.data.parent ? a.parents() : null;
          if (s)
            for (var o = 0; o < s.length; o++) {
              var l = s[o], u = l.pstyle("opacity").value;
              i = u * i;
            }
          return i;
        }
      },
      transparent: function() {
        var e = this.cy();
        if (!e.styleEnabled())
          return !1;
        var r = this[0], a = r.cy().hasCompoundNodes();
        if (r)
          return a ? r.effectiveOpacity() === 0 : r.pstyle("opacity").value === 0;
      },
      backgrounding: function() {
        var e = this.cy();
        if (!e.styleEnabled())
          return !1;
        var r = this[0];
        return !!r._private.backgrounding;
      }
    };
    function Ui(t, e) {
      var r = t._private, a = r.data.parent ? t.parents() : null;
      if (a)
        for (var n = 0; n < a.length; n++) {
          var i = a[n];
          if (!e(i))
            return !1;
        }
      return !0;
    }
    function $i(t) {
      var e = t.ok, r = t.edgeOkViaNode || t.ok, a = t.parentOk || t.ok;
      return function() {
        var n = this.cy();
        if (!n.styleEnabled())
          return !0;
        var i = this[0], s = n.hasCompoundNodes();
        if (i) {
          var o = i._private;
          if (!e(i))
            return !1;
          if (i.isNode())
            return !s || Ui(i, a);
          var l = o.source, u = o.target;
          return r(l) && (!s || Ui(l, r)) && (l === u || r(u) && (!s || Ui(u, r)));
        }
      };
    }
    var Da = Kn("eleTakesUpSpace", function(t) {
      return t.pstyle("display").value === "element" && t.width() !== 0 && (t.isNode() ? t.height() !== 0 : !0);
    });
    Rt.takesUpSpace = Zn("takesUpSpace", $i({
      ok: Da
    }));
    var Jd = Kn("eleInteractive", function(t) {
      return t.pstyle("events").value === "yes" && t.pstyle("visibility").value === "visible" && Da(t);
    }), jd = Kn("parentInteractive", function(t) {
      return t.pstyle("visibility").value === "visible" && Da(t);
    });
    Rt.interactive = Zn("interactive", $i({
      ok: Jd,
      parentOk: jd,
      edgeOkViaNode: Da
    })), Rt.noninteractive = function() {
      var t = this[0];
      if (t)
        return !t.interactive();
    };
    var eg = Kn("eleVisible", function(t) {
      return t.pstyle("visibility").value === "visible" && t.pstyle("opacity").pfValue !== 0 && Da(t);
    }), tg = Da;
    Rt.visible = Zn("visible", $i({
      ok: eg,
      edgeOkViaNode: tg
    })), Rt.hidden = function() {
      var t = this[0];
      if (t)
        return !t.visible();
    }, Rt.isBundledBezier = Zn("isBundledBezier", function() {
      return this.cy().styleEnabled() ? !this.removed() && this.pstyle("curve-style").value === "bezier" && this.takesUpSpace() : !1;
    }), Rt.bypass = Rt.css = Rt.style, Rt.renderedCss = Rt.renderedStyle, Rt.removeBypass = Rt.removeCss = Rt.removeStyle, Rt.pstyle = Rt.parsedStyle;
    var Ur = {};
    function Qo(t) {
      return function() {
        var e = arguments, r = [];
        if (e.length === 2) {
          var a = e[0], n = e[1];
          this.on(t.event, a, n);
        } else if (e.length === 1 && te(e[0])) {
          var i = e[0];
          this.on(t.event, i);
        } else if (e.length === 0 || e.length === 1 && L(e[0])) {
          for (var s = e.length === 1 ? e[0] : null, o = 0; o < this.length; o++) {
            var l = this[o], u = !t.ableField || l._private[t.ableField], f = l._private[t.field] != t.value;
            if (t.overrideAble) {
              var h = t.overrideAble(l);
              if (h !== void 0 && (u = h, !h))
                return this;
            }
            u && (l._private[t.field] = t.value, f && r.push(l));
          }
          var c = this.spawn(r);
          c.updateStyle(), c.emit(t.event), s && c.emit(s);
        }
        return this;
      };
    }
    function Sa(t) {
      Ur[t.field] = function() {
        var e = this[0];
        if (e) {
          if (t.overrideField) {
            var r = t.overrideField(e);
            if (r !== void 0)
              return r;
          }
          return e._private[t.field];
        }
      }, Ur[t.on] = Qo({
        event: t.on,
        field: t.field,
        ableField: t.ableField,
        overrideAble: t.overrideAble,
        value: !0
      }), Ur[t.off] = Qo({
        event: t.off,
        field: t.field,
        ableField: t.ableField,
        overrideAble: t.overrideAble,
        value: !1
      });
    }
    Sa({
      field: "locked",
      overrideField: function(e) {
        return e.cy().autolock() ? !0 : void 0;
      },
      on: "lock",
      off: "unlock"
    }), Sa({
      field: "grabbable",
      overrideField: function(e) {
        return e.cy().autoungrabify() || e.pannable() ? !1 : void 0;
      },
      on: "grabify",
      off: "ungrabify"
    }), Sa({
      field: "selected",
      ableField: "selectable",
      overrideAble: function(e) {
        return e.cy().autounselectify() ? !1 : void 0;
      },
      on: "select",
      off: "unselect"
    }), Sa({
      field: "selectable",
      overrideField: function(e) {
        return e.cy().autounselectify() ? !1 : void 0;
      },
      on: "selectify",
      off: "unselectify"
    }), Ur.deselect = Ur.unselect, Ur.grabbed = function() {
      var t = this[0];
      if (t)
        return t._private.grabbed;
    }, Sa({
      field: "active",
      on: "activate",
      off: "unactivate"
    }), Sa({
      field: "pannable",
      on: "panify",
      off: "unpanify"
    }), Ur.inactive = function() {
      var t = this[0];
      if (t)
        return !t._private.active;
    };
    var Vt = {}, Jo = function(e) {
      return function(a) {
        for (var n = this, i = [], s = 0; s < n.length; s++) {
          var o = n[s];
          if (!!o.isNode()) {
            for (var l = !1, u = o.connectedEdges(), f = 0; f < u.length; f++) {
              var h = u[f], c = h.source(), d = h.target();
              if (e.noIncomingEdges && d === o && c !== o || e.noOutgoingEdges && c === o && d !== o) {
                l = !0;
                break;
              }
            }
            l || i.push(o);
          }
        }
        return this.spawn(i, !0).filter(a);
      };
    }, jo = function(e) {
      return function(r) {
        for (var a = this, n = [], i = 0; i < a.length; i++) {
          var s = a[i];
          if (!!s.isNode())
            for (var o = s.connectedEdges(), l = 0; l < o.length; l++) {
              var u = o[l], f = u.source(), h = u.target();
              e.outgoing && f === s ? (n.push(u), n.push(h)) : e.incoming && h === s && (n.push(u), n.push(f));
            }
        }
        return this.spawn(n, !0).filter(r);
      };
    }, eu = function(e) {
      return function(r) {
        for (var a = this, n = [], i = {}; ; ) {
          var s = e.outgoing ? a.outgoers() : a.incomers();
          if (s.length === 0)
            break;
          for (var o = !1, l = 0; l < s.length; l++) {
            var u = s[l], f = u.id();
            i[f] || (i[f] = !0, n.push(u), o = !0);
          }
          if (!o)
            break;
          a = s;
        }
        return this.spawn(n, !0).filter(r);
      };
    };
    Vt.clearTraversalCache = function() {
      for (var t = 0; t < this.length; t++)
        this[t]._private.traversalCache = null;
    }, Qe(Vt, {
      roots: Jo({
        noIncomingEdges: !0
      }),
      leaves: Jo({
        noOutgoingEdges: !0
      }),
      outgoers: rr(jo({
        outgoing: !0
      }), "outgoers"),
      successors: eu({
        outgoing: !0
      }),
      incomers: rr(jo({
        incoming: !0
      }), "incomers"),
      predecessors: eu({
        incoming: !0
      })
    }), Qe(Vt, {
      neighborhood: rr(function(t) {
        for (var e = [], r = this.nodes(), a = 0; a < r.length; a++)
          for (var n = r[a], i = n.connectedEdges(), s = 0; s < i.length; s++) {
            var o = i[s], l = o.source(), u = o.target(), f = n === l ? u : l;
            f.length > 0 && e.push(f[0]), e.push(o[0]);
          }
        return this.spawn(e, !0).filter(t);
      }, "neighborhood"),
      closedNeighborhood: function(e) {
        return this.neighborhood().add(this).filter(e);
      },
      openNeighborhood: function(e) {
        return this.neighborhood(e);
      }
    }), Vt.neighbourhood = Vt.neighborhood, Vt.closedNeighbourhood = Vt.closedNeighborhood, Vt.openNeighbourhood = Vt.openNeighborhood, Qe(Vt, {
      source: rr(function(e) {
        var r = this[0], a;
        return r && (a = r._private.source || r.cy().collection()), a && e ? a.filter(e) : a;
      }, "source"),
      target: rr(function(e) {
        var r = this[0], a;
        return r && (a = r._private.target || r.cy().collection()), a && e ? a.filter(e) : a;
      }, "target"),
      sources: tu({
        attr: "source"
      }),
      targets: tu({
        attr: "target"
      })
    });
    function tu(t) {
      return function(r) {
        for (var a = [], n = 0; n < this.length; n++) {
          var i = this[n], s = i._private[t.attr];
          s && a.push(s);
        }
        return this.spawn(a, !0).filter(r);
      };
    }
    Qe(Vt, {
      edgesWith: rr(ru(), "edgesWith"),
      edgesTo: rr(ru({
        thisIsSrc: !0
      }), "edgesTo")
    });
    function ru(t) {
      return function(r) {
        var a = [], n = this._private.cy, i = t || {};
        V(r) && (r = n.$(r));
        for (var s = 0; s < r.length; s++)
          for (var o = r[s]._private.edges, l = 0; l < o.length; l++) {
            var u = o[l], f = u._private.data, h = this.hasElementWithId(f.source) && r.hasElementWithId(f.target), c = r.hasElementWithId(f.source) && this.hasElementWithId(f.target), d = h || c;
            !d || (i.thisIsSrc || i.thisIsTgt) && (i.thisIsSrc && !h || i.thisIsTgt && !c) || a.push(u);
          }
        return this.spawn(a, !0);
      };
    }
    Qe(Vt, {
      connectedEdges: rr(function(t) {
        for (var e = [], r = this, a = 0; a < r.length; a++) {
          var n = r[a];
          if (!!n.isNode())
            for (var i = n._private.edges, s = 0; s < i.length; s++) {
              var o = i[s];
              e.push(o);
            }
        }
        return this.spawn(e, !0).filter(t);
      }, "connectedEdges"),
      connectedNodes: rr(function(t) {
        for (var e = [], r = this, a = 0; a < r.length; a++) {
          var n = r[a];
          !n.isEdge() || (e.push(n.source()[0]), e.push(n.target()[0]));
        }
        return this.spawn(e, !0).filter(t);
      }, "connectedNodes"),
      parallelEdges: rr(au(), "parallelEdges"),
      codirectedEdges: rr(au({
        codirected: !0
      }), "codirectedEdges")
    });
    function au(t) {
      var e = {
        codirected: !1
      };
      return t = Qe({}, e, t), function(a) {
        for (var n = [], i = this.edges(), s = t, o = 0; o < i.length; o++)
          for (var l = i[o], u = l._private, f = u.source, h = f._private.data.id, c = u.data.target, d = f._private.edges, v = 0; v < d.length; v++) {
            var y = d[v], p = y._private.data, g = p.target, m = p.source, b = g === c && m === h, E = h === g && c === m;
            (s.codirected && b || !s.codirected && (b || E)) && n.push(y);
          }
        return this.spawn(n, !0).filter(a);
      };
    }
    Qe(Vt, {
      components: function(e) {
        var r = this, a = r.cy(), n = a.collection(), i = e == null ? r.nodes() : e.nodes(), s = [];
        e != null && i.empty() && (i = e.sources());
        var o = function(f, h) {
          n.merge(f), i.unmerge(f), h.merge(f);
        };
        if (i.empty())
          return r.spawn();
        var l = function() {
          var f = a.collection();
          s.push(f);
          var h = i[0];
          o(h, f), r.bfs({
            directed: !1,
            roots: h,
            visit: function(d) {
              return o(d, f);
            }
          }), f.forEach(function(c) {
            c.connectedEdges().forEach(function(d) {
              r.has(d) && f.has(d.source()) && f.has(d.target()) && f.merge(d);
            });
          });
        };
        do
          l();
        while (i.length > 0);
        return s;
      },
      component: function() {
        var e = this[0];
        return e.cy().mutableElements().components(e)[0];
      }
    }), Vt.componentsOf = Vt.components;
    var kt = function(e, r) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
      if (e === void 0) {
        Dt("A collection must have a reference to the core");
        return;
      }
      var i = new pr(), s = !1;
      if (!r)
        r = [];
      else if (r.length > 0 && B(r[0]) && !Ie(r[0])) {
        s = !0;
        for (var o = [], l = new fa(), u = 0, f = r.length; u < f; u++) {
          var h = r[u];
          h.data == null && (h.data = {});
          var c = h.data;
          if (c.id == null)
            c.id = Rs();
          else if (e.hasElementWithId(c.id) || l.has(c.id))
            continue;
          var d = new Dn(e, h, !1);
          o.push(d), l.add(c.id);
        }
        r = o;
      }
      this.length = 0;
      for (var v = 0, y = r.length; v < y; v++) {
        var p = r[v][0];
        if (p != null) {
          var g = p._private.data.id;
          (!a || !i.has(g)) && (a && i.set(g, {
            index: this.length,
            ele: p
          }), this[this.length] = p, this.length++);
        }
      }
      this._private = {
        eles: this,
        cy: e,
        get map() {
          return this.lazyMap == null && this.rebuildMap(), this.lazyMap;
        },
        set map(m) {
          this.lazyMap = m;
        },
        rebuildMap: function() {
          for (var b = this.lazyMap = new pr(), E = this.eles, M = 0; M < E.length; M++) {
            var S = E[M];
            b.set(S.id(), {
              index: M,
              ele: S
            });
          }
        }
      }, a && (this._private.map = i), s && !n && this.restore();
    }, wt = Dn.prototype = kt.prototype = Object.create(Array.prototype);
    wt.instanceString = function() {
      return "collection";
    }, wt.spawn = function(t, e) {
      return new kt(this.cy(), t, e);
    }, wt.spawnSelf = function() {
      return this.spawn(this);
    }, wt.cy = function() {
      return this._private.cy;
    }, wt.renderer = function() {
      return this._private.cy.renderer();
    }, wt.element = function() {
      return this[0];
    }, wt.collection = function() {
      return We(this) ? this : new kt(this._private.cy, [this]);
    }, wt.unique = function() {
      return new kt(this._private.cy, this, !0);
    }, wt.hasElementWithId = function(t) {
      return t = "" + t, this._private.map.has(t);
    }, wt.getElementById = function(t) {
      t = "" + t;
      var e = this._private.cy, r = this._private.map.get(t);
      return r ? r.ele : new kt(e);
    }, wt.$id = wt.getElementById, wt.poolIndex = function() {
      var t = this._private.cy, e = t._private.elements, r = this[0]._private.data.id;
      return e._private.map.get(r).index;
    }, wt.indexOf = function(t) {
      var e = t[0]._private.data.id;
      return this._private.map.get(e).index;
    }, wt.indexOfId = function(t) {
      return t = "" + t, this._private.map.get(t).index;
    }, wt.json = function(t) {
      var e = this.element(), r = this.cy();
      if (e == null && t)
        return this;
      if (e != null) {
        var a = e._private;
        if (B(t)) {
          if (r.startBatch(), t.data) {
            e.data(t.data);
            var n = a.data;
            if (e.isEdge()) {
              var i = !1, s = {}, o = t.data.source, l = t.data.target;
              o != null && o != n.source && (s.source = "" + o, i = !0), l != null && l != n.target && (s.target = "" + l, i = !0), i && (e = e.move(s));
            } else {
              var u = "parent" in t.data, f = t.data.parent;
              u && (f != null || n.parent != null) && f != n.parent && (f === void 0 && (f = null), f != null && (f = "" + f), e = e.move({
                parent: f
              }));
            }
          }
          t.position && e.position(t.position);
          var h = function(y, p, g) {
            var m = t[y];
            m != null && m !== a[y] && (m ? e[p]() : e[g]());
          };
          return h("removed", "remove", "restore"), h("selected", "select", "unselect"), h("selectable", "selectify", "unselectify"), h("locked", "lock", "unlock"), h("grabbable", "grabify", "ungrabify"), h("pannable", "panify", "unpanify"), t.classes != null && e.classes(t.classes), r.endBatch(), this;
        } else if (t === void 0) {
          var c = {
            data: gr(a.data),
            position: gr(a.position),
            group: a.group,
            removed: a.removed,
            selected: a.selected,
            selectable: a.selectable,
            locked: a.locked,
            grabbable: a.grabbable,
            pannable: a.pannable,
            classes: null
          };
          c.classes = "";
          var d = 0;
          return a.classes.forEach(function(v) {
            return c.classes += d++ === 0 ? v : " " + v;
          }), c;
        }
      }
    }, wt.jsons = function() {
      for (var t = [], e = 0; e < this.length; e++) {
        var r = this[e], a = r.json();
        t.push(a);
      }
      return t;
    }, wt.clone = function() {
      for (var t = this.cy(), e = [], r = 0; r < this.length; r++) {
        var a = this[r], n = a.json(), i = new Dn(t, n, !1);
        e.push(i);
      }
      return new kt(t, e);
    }, wt.copy = wt.clone, wt.restore = function() {
      for (var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0, e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, r = this, a = r.cy(), n = a._private, i = [], s = [], o, l = 0, u = r.length; l < u; l++) {
        var f = r[l];
        e && !f.removed() || (f.isNode() ? i.push(f) : s.push(f));
      }
      o = i.concat(s);
      var h, c = function() {
        o.splice(h, 1), h--;
      };
      for (h = 0; h < o.length; h++) {
        var d = o[h], v = d._private, y = v.data;
        if (d.clearTraversalCache(), !(!e && !v.removed)) {
          if (y.id === void 0)
            y.id = Rs();
          else if (R(y.id))
            y.id = "" + y.id;
          else if (ze(y.id) || !V(y.id)) {
            Dt("Can not create element with invalid string ID `" + y.id + "`"), c();
            continue;
          } else if (a.hasElementWithId(y.id)) {
            Dt("Can not create second element with ID `" + y.id + "`"), c();
            continue;
          }
        }
        var p = y.id;
        if (d.isNode()) {
          var g = v.position;
          g.x == null && (g.x = 0), g.y == null && (g.y = 0);
        }
        if (d.isEdge()) {
          for (var m = d, b = ["source", "target"], E = b.length, M = !1, S = 0; S < E; S++) {
            var x = b[S], I = y[x];
            R(I) && (I = y[x] = "" + y[x]), I == null || I === "" ? (Dt("Can not create edge `" + p + "` with unspecified " + x), M = !0) : a.hasElementWithId(I) || (Dt("Can not create edge `" + p + "` with nonexistant " + x + " `" + I + "`"), M = !0);
          }
          if (M) {
            c();
            continue;
          }
          var A = a.getElementById(y.source), z = a.getElementById(y.target);
          A.same(z) ? A._private.edges.push(m) : (A._private.edges.push(m), z._private.edges.push(m)), m._private.source = A, m._private.target = z;
        }
        v.map = new pr(), v.map.set(p, {
          ele: d,
          index: 0
        }), v.removed = !1, e && a.addToPool(d);
      }
      for (var F = 0; F < i.length; F++) {
        var G = i[F], X = G._private.data;
        R(X.parent) && (X.parent = "" + X.parent);
        var P = X.parent, Q = P != null;
        if (Q || G._private.parent) {
          var W = G._private.parent ? a.collection().merge(G._private.parent) : a.getElementById(P);
          if (W.empty())
            X.parent = void 0;
          else if (W[0].removed())
            ht("Node added with missing parent, reference to parent removed"), X.parent = void 0, G._private.parent = null;
          else {
            for (var Z = !1, re = W; !re.empty(); ) {
              if (G.same(re)) {
                Z = !0, X.parent = void 0;
                break;
              }
              re = re.parent();
            }
            Z || (W[0]._private.children.push(G), G._private.parent = W[0], n.hasCompoundNodes = !0);
          }
        }
      }
      if (o.length > 0) {
        for (var le = o.length === r.length ? r : new kt(a, o), ve = 0; ve < le.length; ve++) {
          var se = le[ve];
          se.isNode() || (se.parallelEdges().clearTraversalCache(), se.source().clearTraversalCache(), se.target().clearTraversalCache());
        }
        var ie;
        n.hasCompoundNodes ? ie = a.collection().merge(le).merge(le.connectedNodes()).merge(le.parent()) : ie = le, ie.dirtyCompoundBoundsCache().dirtyBoundingBoxCache().updateStyle(t), t ? le.emitAndNotify("add") : e && le.emit("add");
      }
      return r;
    }, wt.removed = function() {
      var t = this[0];
      return t && t._private.removed;
    }, wt.inside = function() {
      var t = this[0];
      return t && !t._private.removed;
    }, wt.remove = function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0, e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, r = this, a = [], n = {}, i = r._private.cy;
      function s(P) {
        for (var Q = P._private.edges, W = 0; W < Q.length; W++)
          l(Q[W]);
      }
      function o(P) {
        for (var Q = P._private.children, W = 0; W < Q.length; W++)
          l(Q[W]);
      }
      function l(P) {
        var Q = n[P.id()];
        e && P.removed() || Q || (n[P.id()] = !0, P.isNode() ? (a.push(P), s(P), o(P)) : a.unshift(P));
      }
      for (var u = 0, f = r.length; u < f; u++) {
        var h = r[u];
        l(h);
      }
      function c(P, Q) {
        var W = P._private.edges;
        Ir(W, Q), P.clearTraversalCache();
      }
      function d(P) {
        P.clearTraversalCache();
      }
      var v = [];
      v.ids = {};
      function y(P, Q) {
        Q = Q[0], P = P[0];
        var W = P._private.children, Z = P.id();
        Ir(W, Q), Q._private.parent = null, v.ids[Z] || (v.ids[Z] = !0, v.push(P));
      }
      r.dirtyCompoundBoundsCache(), e && i.removeFromPool(a);
      for (var p = 0; p < a.length; p++) {
        var g = a[p];
        if (g.isEdge()) {
          var m = g.source()[0], b = g.target()[0];
          c(m, g), c(b, g);
          for (var E = g.parallelEdges(), M = 0; M < E.length; M++) {
            var S = E[M];
            d(S), S.isBundledBezier() && S.dirtyBoundingBoxCache();
          }
        } else {
          var x = g.parent();
          x.length !== 0 && y(x, g);
        }
        e && (g._private.removed = !0);
      }
      var I = i._private.elements;
      i._private.hasCompoundNodes = !1;
      for (var A = 0; A < I.length; A++) {
        var z = I[A];
        if (z.isParent()) {
          i._private.hasCompoundNodes = !0;
          break;
        }
      }
      var F = new kt(this.cy(), a);
      F.size() > 0 && (t ? F.emitAndNotify("remove") : e && F.emit("remove"));
      for (var G = 0; G < v.length; G++) {
        var X = v[G];
        (!e || !X.removed()) && X.updateStyle();
      }
      return F;
    }, wt.move = function(t) {
      var e = this._private.cy, r = this, a = !1, n = !1, i = function(v) {
        return v == null ? v : "" + v;
      };
      if (t.source !== void 0 || t.target !== void 0) {
        var s = i(t.source), o = i(t.target), l = s != null && e.hasElementWithId(s), u = o != null && e.hasElementWithId(o);
        (l || u) && (e.batch(function() {
          r.remove(a, n), r.emitAndNotify("moveout");
          for (var d = 0; d < r.length; d++) {
            var v = r[d], y = v._private.data;
            v.isEdge() && (l && (y.source = s), u && (y.target = o));
          }
          r.restore(a, n);
        }), r.emitAndNotify("move"));
      } else if (t.parent !== void 0) {
        var f = i(t.parent), h = f === null || e.hasElementWithId(f);
        if (h) {
          var c = f === null ? void 0 : f;
          e.batch(function() {
            var d = r.remove(a, n);
            d.emitAndNotify("moveout");
            for (var v = 0; v < r.length; v++) {
              var y = r[v], p = y._private.data;
              y.isNode() && (p.parent = c);
            }
            d.restore(a, n);
          }), r.emitAndNotify("move");
        }
      }
      return this;
    }, [so, cd, Un, Gr, xa, Ad, $n, _d, qo, Wo, Kd, qn, Wn, Rt, Ur, Vt].forEach(function(t) {
      Qe(wt, t);
    });
    var rg = {
      add: function(e) {
        var r, a = this;
        if (Oe(e)) {
          var n = e;
          if (n._private.cy === a)
            r = n.restore();
          else {
            for (var i = [], s = 0; s < n.length; s++) {
              var o = n[s];
              i.push(o.json());
            }
            r = new kt(a, i);
          }
        } else if (L(e)) {
          var l = e;
          r = new kt(a, l);
        } else if (B(e) && (L(e.nodes) || L(e.edges))) {
          for (var u = e, f = [], h = ["nodes", "edges"], c = 0, d = h.length; c < d; c++) {
            var v = h[c], y = u[v];
            if (L(y))
              for (var p = 0, g = y.length; p < g; p++) {
                var m = Qe({
                  group: v
                }, y[p]);
                f.push(m);
              }
          }
          r = new kt(a, f);
        } else {
          var b = e;
          r = new Dn(a, b).collection();
        }
        return r;
      },
      remove: function(e) {
        if (!Oe(e)) {
          if (V(e)) {
            var r = e;
            e = this.$(r);
          }
        }
        return e.remove();
      }
    };
    /*! Bezier curve function generator. Copyright Gaetan Renaudeau. MIT License: http://en.wikipedia.org/wiki/MIT_License */
    function ag(t, e, r, a) {
      var n = 4, i = 1e-3, s = 1e-7, o = 10, l = 11, u = 1 / (l - 1), f = typeof Float32Array < "u";
      if (arguments.length !== 4)
        return !1;
      for (var h = 0; h < 4; ++h)
        if (typeof arguments[h] != "number" || isNaN(arguments[h]) || !isFinite(arguments[h]))
          return !1;
      t = Math.min(t, 1), r = Math.min(r, 1), t = Math.max(t, 0), r = Math.max(r, 0);
      var c = f ? new Float32Array(l) : new Array(l);
      function d(z, F) {
        return 1 - 3 * F + 3 * z;
      }
      function v(z, F) {
        return 3 * F - 6 * z;
      }
      function y(z) {
        return 3 * z;
      }
      function p(z, F, G) {
        return ((d(F, G) * z + v(F, G)) * z + y(F)) * z;
      }
      function g(z, F, G) {
        return 3 * d(F, G) * z * z + 2 * v(F, G) * z + y(F);
      }
      function m(z, F) {
        for (var G = 0; G < n; ++G) {
          var X = g(F, t, r);
          if (X === 0)
            return F;
          var P = p(F, t, r) - z;
          F -= P / X;
        }
        return F;
      }
      function b() {
        for (var z = 0; z < l; ++z)
          c[z] = p(z * u, t, r);
      }
      function E(z, F, G) {
        var X, P, Q = 0;
        do
          P = F + (G - F) / 2, X = p(P, t, r) - z, X > 0 ? G = P : F = P;
        while (Math.abs(X) > s && ++Q < o);
        return P;
      }
      function M(z) {
        for (var F = 0, G = 1, X = l - 1; G !== X && c[G] <= z; ++G)
          F += u;
        --G;
        var P = (z - c[G]) / (c[G + 1] - c[G]), Q = F + P * u, W = g(Q, t, r);
        return W >= i ? m(z, Q) : W === 0 ? Q : E(z, F, F + u);
      }
      var S = !1;
      function x() {
        S = !0, (t !== e || r !== a) && b();
      }
      var I = function(F) {
        return S || x(), t === e && r === a ? F : F === 0 ? 0 : F === 1 ? 1 : p(M(F), e, a);
      };
      I.getControlPoints = function() {
        return [{
          x: t,
          y: e
        }, {
          x: r,
          y: a
        }];
      };
      var A = "generateBezier(" + [t, e, r, a] + ")";
      return I.toString = function() {
        return A;
      }, I;
    }
    /*! Runge-Kutta spring physics function generator. Adapted from Framer.js, copyright Koen Bok. MIT License: http://en.wikipedia.org/wiki/MIT_License */
    var ng = function() {
      function t(a) {
        return -a.tension * a.x - a.friction * a.v;
      }
      function e(a, n, i) {
        var s = {
          x: a.x + i.dx * n,
          v: a.v + i.dv * n,
          tension: a.tension,
          friction: a.friction
        };
        return {
          dx: s.v,
          dv: t(s)
        };
      }
      function r(a, n) {
        var i = {
          dx: a.v,
          dv: t(a)
        }, s = e(a, n * 0.5, i), o = e(a, n * 0.5, s), l = e(a, n, o), u = 1 / 6 * (i.dx + 2 * (s.dx + o.dx) + l.dx), f = 1 / 6 * (i.dv + 2 * (s.dv + o.dv) + l.dv);
        return a.x = a.x + u * n, a.v = a.v + f * n, a;
      }
      return function a(n, i, s) {
        var o = {
          x: -1,
          v: 0,
          tension: null,
          friction: null
        }, l = [0], u = 0, f = 1 / 1e4, h = 16 / 1e3, c, d, v;
        for (n = parseFloat(n) || 500, i = parseFloat(i) || 20, s = s || null, o.tension = n, o.friction = i, c = s !== null, c ? (u = a(n, i), d = u / s * h) : d = h; v = r(v || o, d), l.push(1 + v.x), u += 16, Math.abs(v.x) > f && Math.abs(v.v) > f; )
          ;
        return c ? function(y) {
          return l[y * (l.length - 1) | 0];
        } : u;
      };
    }(), xt = function(e, r, a, n) {
      var i = ag(e, r, a, n);
      return function(s, o, l) {
        return s + (o - s) * i(l);
      };
    }, Qn = {
      linear: function(e, r, a) {
        return e + (r - e) * a;
      },
      ease: xt(0.25, 0.1, 0.25, 1),
      "ease-in": xt(0.42, 0, 1, 1),
      "ease-out": xt(0, 0, 0.58, 1),
      "ease-in-out": xt(0.42, 0, 0.58, 1),
      "ease-in-sine": xt(0.47, 0, 0.745, 0.715),
      "ease-out-sine": xt(0.39, 0.575, 0.565, 1),
      "ease-in-out-sine": xt(0.445, 0.05, 0.55, 0.95),
      "ease-in-quad": xt(0.55, 0.085, 0.68, 0.53),
      "ease-out-quad": xt(0.25, 0.46, 0.45, 0.94),
      "ease-in-out-quad": xt(0.455, 0.03, 0.515, 0.955),
      "ease-in-cubic": xt(0.55, 0.055, 0.675, 0.19),
      "ease-out-cubic": xt(0.215, 0.61, 0.355, 1),
      "ease-in-out-cubic": xt(0.645, 0.045, 0.355, 1),
      "ease-in-quart": xt(0.895, 0.03, 0.685, 0.22),
      "ease-out-quart": xt(0.165, 0.84, 0.44, 1),
      "ease-in-out-quart": xt(0.77, 0, 0.175, 1),
      "ease-in-quint": xt(0.755, 0.05, 0.855, 0.06),
      "ease-out-quint": xt(0.23, 1, 0.32, 1),
      "ease-in-out-quint": xt(0.86, 0, 0.07, 1),
      "ease-in-expo": xt(0.95, 0.05, 0.795, 0.035),
      "ease-out-expo": xt(0.19, 1, 0.22, 1),
      "ease-in-out-expo": xt(1, 0, 0, 1),
      "ease-in-circ": xt(0.6, 0.04, 0.98, 0.335),
      "ease-out-circ": xt(0.075, 0.82, 0.165, 1),
      "ease-in-out-circ": xt(0.785, 0.135, 0.15, 0.86),
      spring: function(e, r, a) {
        if (a === 0)
          return Qn.linear;
        var n = ng(e, r, a);
        return function(i, s, o) {
          return i + (s - i) * n(o);
        };
      },
      "cubic-bezier": xt
    };
    function nu(t, e, r, a, n) {
      if (a === 1 || e === r)
        return r;
      var i = n(e, r, a);
      return t == null || ((t.roundValue || t.color) && (i = Math.round(i)), t.min !== void 0 && (i = Math.max(i, t.min)), t.max !== void 0 && (i = Math.min(i, t.max))), i;
    }
    function iu(t, e) {
      return t.pfValue != null || t.value != null ? t.pfValue != null && (e == null || e.type.units !== "%") ? t.pfValue : t.value : t;
    }
    function La(t, e, r, a, n) {
      var i = n != null ? n.type : null;
      r < 0 ? r = 0 : r > 1 && (r = 1);
      var s = iu(t, n), o = iu(e, n);
      if (R(s) && R(o))
        return nu(i, s, o, r, a);
      if (L(s) && L(o)) {
        for (var l = [], u = 0; u < o.length; u++) {
          var f = s[u], h = o[u];
          if (f != null && h != null) {
            var c = nu(i, f, h, r, a);
            l.push(c);
          } else
            l.push(h);
        }
        return l;
      }
    }
    function ig(t, e, r, a) {
      var n = !a, i = t._private, s = e._private, o = s.easing, l = s.startTime, u = a ? t : t.cy(), f = u.style();
      if (!s.easingImpl)
        if (o == null)
          s.easingImpl = Qn.linear;
        else {
          var h;
          if (V(o)) {
            var c = f.parse("transition-timing-function", o);
            h = c.value;
          } else
            h = o;
          var d, v;
          V(h) ? (d = h, v = []) : (d = h[1], v = h.slice(2).map(function(le) {
            return +le;
          })), v.length > 0 ? (d === "spring" && v.push(s.duration), s.easingImpl = Qn[d].apply(null, v)) : s.easingImpl = Qn[d];
        }
      var y = s.easingImpl, p;
      if (s.duration === 0 ? p = 1 : p = (r - l) / s.duration, s.applying && (p = s.progress), p < 0 ? p = 0 : p > 1 && (p = 1), s.delay == null) {
        var g = s.startPosition, m = s.position;
        if (m && n && !t.locked()) {
          var b = {};
          an(g.x, m.x) && (b.x = La(g.x, m.x, p, y)), an(g.y, m.y) && (b.y = La(g.y, m.y, p, y)), t.position(b);
        }
        var E = s.startPan, M = s.pan, S = i.pan, x = M != null && a;
        x && (an(E.x, M.x) && (S.x = La(E.x, M.x, p, y)), an(E.y, M.y) && (S.y = La(E.y, M.y, p, y)), t.emit("pan"));
        var I = s.startZoom, A = s.zoom, z = A != null && a;
        z && (an(I, A) && (i.zoom = Xa(i.minZoom, La(I, A, p, y), i.maxZoom)), t.emit("zoom")), (x || z) && t.emit("viewport");
        var F = s.style;
        if (F && F.length > 0 && n) {
          for (var G = 0; G < F.length; G++) {
            var X = F[G], P = X.name, Q = X, W = s.startStyle[P], Z = f.properties[W.name], re = La(W, Q, p, y, Z);
            f.overrideBypass(t, P, re);
          }
          t.emit("style");
        }
      }
      return s.progress = p, p;
    }
    function an(t, e) {
      return t == null || e == null ? !1 : R(t) && R(e) ? !0 : !!(t && e);
    }
    function sg(t, e, r, a) {
      var n = e._private;
      n.started = !0, n.startTime = r - n.progress * n.duration;
    }
    function su(t, e) {
      var r = e._private.aniEles, a = [];
      function n(f, h) {
        var c = f._private, d = c.animation.current, v = c.animation.queue, y = !1;
        if (d.length === 0) {
          var p = v.shift();
          p && d.push(p);
        }
        for (var g = function(S) {
          for (var x = S.length - 1; x >= 0; x--) {
            var I = S[x];
            I();
          }
          S.splice(0, S.length);
        }, m = d.length - 1; m >= 0; m--) {
          var b = d[m], E = b._private;
          if (E.stopped) {
            d.splice(m, 1), E.hooked = !1, E.playing = !1, E.started = !1, g(E.frames);
            continue;
          }
          !E.playing && !E.applying || (E.playing && E.applying && (E.applying = !1), E.started || sg(f, b, t), ig(f, b, t, h), E.applying && (E.applying = !1), g(E.frames), E.step != null && E.step(t), b.completed() && (d.splice(m, 1), E.hooked = !1, E.playing = !1, E.started = !1, g(E.completes)), y = !0);
        }
        return !h && d.length === 0 && v.length === 0 && a.push(f), y;
      }
      for (var i = !1, s = 0; s < r.length; s++) {
        var o = r[s], l = n(o);
        i = i || l;
      }
      var u = n(e, !0);
      (i || u) && (r.length > 0 ? e.notify("draw", r) : e.notify("draw")), r.unmerge(a), e.emit("step");
    }
    var og = {
      animate: ct.animate(),
      animation: ct.animation(),
      animated: ct.animated(),
      clearQueue: ct.clearQueue(),
      delay: ct.delay(),
      delayAnimation: ct.delayAnimation(),
      stop: ct.stop(),
      addToAnimationPool: function(e) {
        var r = this;
        !r.styleEnabled() || r._private.aniEles.merge(e);
      },
      stopAnimationLoop: function() {
        this._private.animationsRunning = !1;
      },
      startAnimationLoop: function() {
        var e = this;
        if (e._private.animationsRunning = !0, !e.styleEnabled())
          return;
        function r() {
          !e._private.animationsRunning || xn(function(i) {
            su(i, e), r();
          });
        }
        var a = e.renderer();
        a && a.beforeRender ? a.beforeRender(function(i, s) {
          su(s, e);
        }, a.beforeRenderPriorities.animations) : r();
      }
    }, ug = {
      qualifierCompare: function(e, r) {
        return e == null || r == null ? e == null && r == null : e.sameText(r);
      },
      eventMatches: function(e, r, a) {
        var n = r.qualifier;
        return n != null ? e !== a.target && Ie(a.target) && n.matches(a.target) : !0;
      },
      addEventFields: function(e, r) {
        r.cy = e, r.target = e;
      },
      callbackContext: function(e, r, a) {
        return r.qualifier != null ? a.target : e;
      }
    }, Jn = function(e) {
      return V(e) ? new Br(e) : e;
    }, ou = {
      createEmitter: function() {
        var e = this._private;
        return e.emitter || (e.emitter = new Hn(ug, this)), this;
      },
      emitter: function() {
        return this._private.emitter;
      },
      on: function(e, r, a) {
        return this.emitter().on(e, Jn(r), a), this;
      },
      removeListener: function(e, r, a) {
        return this.emitter().removeListener(e, Jn(r), a), this;
      },
      removeAllListeners: function() {
        return this.emitter().removeAllListeners(), this;
      },
      one: function(e, r, a) {
        return this.emitter().one(e, Jn(r), a), this;
      },
      once: function(e, r, a) {
        return this.emitter().one(e, Jn(r), a), this;
      },
      emit: function(e, r) {
        return this.emitter().emit(e, r), this;
      },
      emitAndNotify: function(e, r) {
        return this.emit(e), this.notify(e, r), this;
      }
    };
    ct.eventAliasesOn(ou);
    var Yi = {
      png: function(e) {
        var r = this._private.renderer;
        return e = e || {}, r.png(e);
      },
      jpg: function(e) {
        var r = this._private.renderer;
        return e = e || {}, e.bg = e.bg || "#fff", r.jpg(e);
      }
    };
    Yi.jpeg = Yi.jpg;
    var jn = {
      layout: function(e) {
        var r = this;
        if (e == null) {
          Dt("Layout options must be specified to make a layout");
          return;
        }
        if (e.name == null) {
          Dt("A `name` must be specified to make a layout");
          return;
        }
        var a = e.name, n = r.extension("layout", a);
        if (n == null) {
          Dt("No such layout `" + a + "` found.  Did you forget to import it and `cytoscape.use()` it?");
          return;
        }
        var i;
        V(e.eles) ? i = r.$(e.eles) : i = e.eles != null ? e.eles : r.$();
        var s = new n(Qe({}, e, {
          cy: r,
          eles: i
        }));
        return s;
      }
    };
    jn.createLayout = jn.makeLayout = jn.layout;
    var lg = {
      notify: function(e, r) {
        var a = this._private;
        if (this.batching()) {
          a.batchNotifications = a.batchNotifications || {};
          var n = a.batchNotifications[e] = a.batchNotifications[e] || this.collection();
          r != null && n.merge(r);
          return;
        }
        if (!!a.notificationsEnabled) {
          var i = this.renderer();
          this.destroyed() || !i || i.notify(e, r);
        }
      },
      notifications: function(e) {
        var r = this._private;
        return e === void 0 ? r.notificationsEnabled : (r.notificationsEnabled = !!e, this);
      },
      noNotifications: function(e) {
        this.notifications(!1), e(), this.notifications(!0);
      },
      batching: function() {
        return this._private.batchCount > 0;
      },
      startBatch: function() {
        var e = this._private;
        return e.batchCount == null && (e.batchCount = 0), e.batchCount === 0 && (e.batchStyleEles = this.collection(), e.batchNotifications = {}), e.batchCount++, this;
      },
      endBatch: function() {
        var e = this._private;
        if (e.batchCount === 0)
          return this;
        if (e.batchCount--, e.batchCount === 0) {
          e.batchStyleEles.updateStyle();
          var r = this.renderer();
          Object.keys(e.batchNotifications).forEach(function(a) {
            var n = e.batchNotifications[a];
            n.empty() ? r.notify(a) : r.notify(a, n);
          });
        }
        return this;
      },
      batch: function(e) {
        return this.startBatch(), e(), this.endBatch(), this;
      },
      batchData: function(e) {
        var r = this;
        return this.batch(function() {
          for (var a = Object.keys(e), n = 0; n < a.length; n++) {
            var i = a[n], s = e[i], o = r.getElementById(i);
            o.data(s);
          }
        });
      }
    }, fg = It({
      hideEdgesOnViewport: !1,
      textureOnViewport: !1,
      motionBlur: !1,
      motionBlurOpacity: 0.05,
      pixelRatio: void 0,
      desktopTapThreshold: 4,
      touchTapThreshold: 8,
      wheelSensitivity: 1,
      debug: !1,
      showFps: !1
    }), _i = {
      renderTo: function(e, r, a, n) {
        var i = this._private.renderer;
        return i.renderTo(e, r, a, n), this;
      },
      renderer: function() {
        return this._private.renderer;
      },
      forceRender: function() {
        return this.notify("draw"), this;
      },
      resize: function() {
        return this.invalidateSize(), this.emitAndNotify("resize"), this;
      },
      initRenderer: function(e) {
        var r = this, a = r.extension("renderer", e.name);
        if (a == null) {
          Dt("Can not initialise: No such renderer `".concat(e.name, "` found. Did you forget to import it and `cytoscape.use()` it?"));
          return;
        }
        e.wheelSensitivity !== void 0 && ht("You have set a custom wheel sensitivity.  This will make your app zoom unnaturally when using mainstream mice.  You should change this value from the default only if you can guarantee that all your users will use the same hardware and OS configuration as your current machine.");
        var n = fg(e);
        n.cy = r, r._private.renderer = new a(n), this.notify("init");
      },
      destroyRenderer: function() {
        var e = this;
        e.notify("destroy");
        var r = e.container();
        if (r)
          for (r._cyreg = null; r.childNodes.length > 0; )
            r.removeChild(r.childNodes[0]);
        e._private.renderer = null, e.mutableElements().forEach(function(a) {
          var n = a._private;
          n.rscratch = {}, n.rstyle = {}, n.animation.current = [], n.animation.queue = [];
        });
      },
      onRender: function(e) {
        return this.on("render", e);
      },
      offRender: function(e) {
        return this.off("render", e);
      }
    };
    _i.invalidateDimensions = _i.resize;
    var ei = {
      collection: function(e, r) {
        return V(e) ? this.$(e) : Oe(e) ? e.collection() : L(e) ? (r || (r = {}), new kt(this, e, r.unique, r.removed)) : new kt(this);
      },
      nodes: function(e) {
        var r = this.$(function(a) {
          return a.isNode();
        });
        return e ? r.filter(e) : r;
      },
      edges: function(e) {
        var r = this.$(function(a) {
          return a.isEdge();
        });
        return e ? r.filter(e) : r;
      },
      $: function(e) {
        var r = this._private.elements;
        return e ? r.filter(e) : r.spawnSelf();
      },
      mutableElements: function() {
        return this._private.elements;
      }
    };
    ei.elements = ei.filter = ei.$;
    var Ut = {}, nn = "t", hg = "f";
    Ut.apply = function(t) {
      for (var e = this, r = e._private, a = r.cy, n = a.collection(), i = 0; i < t.length; i++) {
        var s = t[i], o = e.getContextMeta(s);
        if (!o.empty) {
          var l = e.getContextStyle(o), u = e.applyContextStyle(o, l, s);
          s._private.appliedInitStyle ? e.updateTransitions(s, u.diffProps) : s._private.appliedInitStyle = !0;
          var f = e.updateStyleHints(s);
          f && n.push(s);
        }
      }
      return n;
    }, Ut.getPropertiesDiff = function(t, e) {
      var r = this, a = r._private.propDiffs = r._private.propDiffs || {}, n = t + "-" + e, i = a[n];
      if (i)
        return i;
      for (var s = [], o = {}, l = 0; l < r.length; l++) {
        var u = r[l], f = t[l] === nn, h = e[l] === nn, c = f !== h, d = u.mappedProperties.length > 0;
        if (c || h && d) {
          var v = void 0;
          c && d || c ? v = u.properties : d && (v = u.mappedProperties);
          for (var y = 0; y < v.length; y++) {
            for (var p = v[y], g = p.name, m = !1, b = l + 1; b < r.length; b++) {
              var E = r[b], M = e[b] === nn;
              if (!!M && (m = E.properties[p.name] != null, m))
                break;
            }
            !o[g] && !m && (o[g] = !0, s.push(g));
          }
        }
      }
      return a[n] = s, s;
    }, Ut.getContextMeta = function(t) {
      for (var e = this, r = "", a, n = t._private.styleCxtKey || "", i = 0; i < e.length; i++) {
        var s = e[i], o = s.selector && s.selector.matches(t);
        o ? r += nn : r += hg;
      }
      return a = e.getPropertiesDiff(n, r), t._private.styleCxtKey = r, {
        key: r,
        diffPropNames: a,
        empty: a.length === 0
      };
    }, Ut.getContextStyle = function(t) {
      var e = t.key, r = this, a = this._private.contextStyles = this._private.contextStyles || {};
      if (a[e])
        return a[e];
      for (var n = {
        _private: {
          key: e
        }
      }, i = 0; i < r.length; i++) {
        var s = r[i], o = e[i] === nn;
        if (!!o)
          for (var l = 0; l < s.properties.length; l++) {
            var u = s.properties[l];
            n[u.name] = u;
          }
      }
      return a[e] = n, n;
    }, Ut.applyContextStyle = function(t, e, r) {
      for (var a = this, n = t.diffPropNames, i = {}, s = a.types, o = 0; o < n.length; o++) {
        var l = n[o], u = e[l], f = r.pstyle(l);
        if (!u)
          if (f)
            f.bypass ? u = {
              name: l,
              deleteBypassed: !0
            } : u = {
              name: l,
              delete: !0
            };
          else
            continue;
        if (f !== u) {
          if (u.mapped === s.fn && f != null && f.mapping != null && f.mapping.value === u.value) {
            var h = f.mapping, c = h.fnValue = u.value(r);
            if (c === h.prevFnValue)
              continue;
          }
          var d = i[l] = {
            prev: f
          };
          a.applyParsedProperty(r, u), d.next = r.pstyle(l), d.next && d.next.bypass && (d.next = d.next.bypassed);
        }
      }
      return {
        diffProps: i
      };
    }, Ut.updateStyleHints = function(t) {
      var e = t._private, r = this, a = r.propertyGroupNames, n = r.propertyGroupKeys, i = function(Te, Be, He) {
        return r.getPropertiesHash(Te, Be, He);
      }, s = e.styleKey;
      if (t.removed())
        return !1;
      var o = e.group === "nodes", l = t._private.style;
      a = Object.keys(l);
      for (var u = 0; u < n.length; u++) {
        var f = n[u];
        e.styleKeys[f] = [la, Ua];
      }
      for (var h = function(Te, Be) {
        return e.styleKeys[Be][0] = $a(Te, e.styleKeys[Be][0]);
      }, c = function(Te, Be) {
        return e.styleKeys[Be][1] = Ya(Te, e.styleKeys[Be][1]);
      }, d = function(Te, Be) {
        h(Te, Be), c(Te, Be);
      }, v = function(Te, Be) {
        for (var He = 0; He < Te.length; He++) {
          var ke = Te.charCodeAt(He);
          h(ke, Be), c(ke, Be);
        }
      }, y = 2e9, p = function(Te) {
        return -128 < Te && Te < 128 && Math.floor(Te) !== Te ? y - (Te * 1024 | 0) : Te;
      }, g = 0; g < a.length; g++) {
        var m = a[g], b = l[m];
        if (b != null) {
          var E = this.properties[m], M = E.type, S = E.groupKey, x = void 0;
          E.hashOverride != null ? x = E.hashOverride(t, b) : b.pfValue != null && (x = b.pfValue);
          var I = E.enums == null ? b.value : null, A = x != null, z = I != null, F = A || z, G = b.units;
          if (M.number && F && !M.multiple) {
            var X = A ? x : I;
            d(p(X), S), !A && G != null && v(G, S);
          } else
            v(b.strValue, S);
        }
      }
      for (var P = [la, Ua], Q = 0; Q < n.length; Q++) {
        var W = n[Q], Z = e.styleKeys[W];
        P[0] = $a(Z[0], P[0]), P[1] = Ya(Z[1], P[1]);
      }
      e.styleKey = pf(P[0], P[1]);
      var re = e.styleKeys;
      e.labelDimsKey = Nr(re.labelDimensions);
      var le = i(t, ["label"], re.labelDimensions);
      if (e.labelKey = Nr(le), e.labelStyleKey = Nr(Tn(re.commonLabel, le)), !o) {
        var ve = i(t, ["source-label"], re.labelDimensions);
        e.sourceLabelKey = Nr(ve), e.sourceLabelStyleKey = Nr(Tn(re.commonLabel, ve));
        var se = i(t, ["target-label"], re.labelDimensions);
        e.targetLabelKey = Nr(se), e.targetLabelStyleKey = Nr(Tn(re.commonLabel, se));
      }
      if (o) {
        var ie = e.styleKeys, be = ie.nodeBody, De = ie.nodeBorder, Le = ie.nodeOutline, Ae = ie.backgroundImage, Me = ie.compound, Ee = ie.pie, ne = [be, De, Le, Ae, Me, Ee].filter(function(xe) {
          return xe != null;
        }).reduce(Tn, [la, Ua]);
        e.nodeKey = Nr(ne), e.hasPie = Ee != null && Ee[0] !== la && Ee[1] !== Ua;
      }
      return s !== e.styleKey;
    }, Ut.clearStyleHints = function(t) {
      var e = t._private;
      e.styleCxtKey = "", e.styleKeys = {}, e.styleKey = null, e.labelKey = null, e.labelStyleKey = null, e.sourceLabelKey = null, e.sourceLabelStyleKey = null, e.targetLabelKey = null, e.targetLabelStyleKey = null, e.nodeKey = null, e.hasPie = null;
    }, Ut.applyParsedProperty = function(t, e) {
      var r = this, a = e, n = t._private.style, i, s = r.types, o = r.properties[a.name].type, l = a.bypass, u = n[a.name], f = u && u.bypass, h = t._private, c = "mapping", d = function(be) {
        return be == null ? null : be.pfValue != null ? be.pfValue : be.value;
      }, v = function() {
        var be = d(u), De = d(a);
        r.checkTriggers(t, a.name, be, De);
      };
      if (e.name === "curve-style" && t.isEdge() && (e.value !== "bezier" && t.isLoop() || e.value === "haystack" && (t.source().isParent() || t.target().isParent())) && (a = e = this.parse(e.name, "bezier", l)), a.delete)
        return n[a.name] = void 0, v(), !0;
      if (a.deleteBypassed)
        return u ? u.bypass ? (u.bypassed = void 0, v(), !0) : !1 : (v(), !0);
      if (a.deleteBypass)
        return u ? u.bypass ? (n[a.name] = u.bypassed, v(), !0) : !1 : (v(), !0);
      var y = function() {
        ht("Do not assign mappings to elements without corresponding data (i.e. ele `" + t.id() + "` has no mapping for property `" + a.name + "` with data field `" + a.field + "`); try a `[" + a.field + "]` selector to limit scope to elements with `" + a.field + "` defined");
      };
      switch (a.mapped) {
        case s.mapData: {
          for (var p = a.field.split("."), g = h.data, m = 0; m < p.length && g; m++) {
            var b = p[m];
            g = g[b];
          }
          if (g == null)
            return y(), !1;
          var E;
          if (R(g)) {
            var M = a.fieldMax - a.fieldMin;
            M === 0 ? E = 0 : E = (g - a.fieldMin) / M;
          } else
            return ht("Do not use continuous mappers without specifying numeric data (i.e. `" + a.field + ": " + g + "` for `" + t.id() + "` is non-numeric)"), !1;
          if (E < 0 ? E = 0 : E > 1 && (E = 1), o.color) {
            var S = a.valueMin[0], x = a.valueMax[0], I = a.valueMin[1], A = a.valueMax[1], z = a.valueMin[2], F = a.valueMax[2], G = a.valueMin[3] == null ? 1 : a.valueMin[3], X = a.valueMax[3] == null ? 1 : a.valueMax[3], P = [Math.round(S + (x - S) * E), Math.round(I + (A - I) * E), Math.round(z + (F - z) * E), Math.round(G + (X - G) * E)];
            i = {
              bypass: a.bypass,
              name: a.name,
              value: P,
              strValue: "rgb(" + P[0] + ", " + P[1] + ", " + P[2] + ")"
            };
          } else if (o.number) {
            var Q = a.valueMin + (a.valueMax - a.valueMin) * E;
            i = this.parse(a.name, Q, a.bypass, c);
          } else
            return !1;
          if (!i)
            return y(), !1;
          i.mapping = a, a = i;
          break;
        }
        case s.data: {
          for (var W = a.field.split("."), Z = h.data, re = 0; re < W.length && Z; re++) {
            var le = W[re];
            Z = Z[le];
          }
          if (Z != null && (i = this.parse(a.name, Z, a.bypass, c)), !i)
            return y(), !1;
          i.mapping = a, a = i;
          break;
        }
        case s.fn: {
          var ve = a.value, se = a.fnValue != null ? a.fnValue : ve(t);
          if (a.prevFnValue = se, se == null)
            return ht("Custom function mappers may not return null (i.e. `" + a.name + "` for ele `" + t.id() + "` is null)"), !1;
          if (i = this.parse(a.name, se, a.bypass, c), !i)
            return ht("Custom function mappers may not return invalid values for the property type (i.e. `" + a.name + "` for ele `" + t.id() + "` is invalid)"), !1;
          i.mapping = gr(a), a = i;
          break;
        }
        case void 0:
          break;
        default:
          return !1;
      }
      return l ? (f ? a.bypassed = u.bypassed : a.bypassed = u, n[a.name] = a) : f ? u.bypassed = a : n[a.name] = a, v(), !0;
    }, Ut.cleanElements = function(t, e) {
      for (var r = 0; r < t.length; r++) {
        var a = t[r];
        if (this.clearStyleHints(a), a.dirtyCompoundBoundsCache(), a.dirtyBoundingBoxCache(), !e)
          a._private.style = {};
        else
          for (var n = a._private.style, i = Object.keys(n), s = 0; s < i.length; s++) {
            var o = i[s], l = n[o];
            l != null && (l.bypass ? l.bypassed = null : n[o] = null);
          }
      }
    }, Ut.update = function() {
      var t = this._private.cy, e = t.mutableElements();
      e.updateStyle();
    }, Ut.updateTransitions = function(t, e) {
      var r = this, a = t._private, n = t.pstyle("transition-property").value, i = t.pstyle("transition-duration").pfValue, s = t.pstyle("transition-delay").pfValue;
      if (n.length > 0 && i > 0) {
        for (var o = {}, l = !1, u = 0; u < n.length; u++) {
          var f = n[u], h = t.pstyle(f), c = e[f];
          if (!!c) {
            var d = c.prev, v = d, y = c.next != null ? c.next : h, p = !1, g = void 0, m = 1e-6;
            !v || (R(v.pfValue) && R(y.pfValue) ? (p = y.pfValue - v.pfValue, g = v.pfValue + m * p) : R(v.value) && R(y.value) ? (p = y.value - v.value, g = v.value + m * p) : L(v.value) && L(y.value) && (p = v.value[0] !== y.value[0] || v.value[1] !== y.value[1] || v.value[2] !== y.value[2], g = v.strValue), p && (o[f] = y.strValue, this.applyBypass(t, f, g), l = !0));
          }
        }
        if (!l)
          return;
        a.transitioning = !0, new ya(function(b) {
          s > 0 ? t.delayAnimation(s).play().promise().then(b) : b();
        }).then(function() {
          return t.animation({
            style: o,
            duration: i,
            easing: t.pstyle("transition-timing-function").value,
            queue: !1
          }).play().promise();
        }).then(function() {
          r.removeBypasses(t, n), t.emitAndNotify("style"), a.transitioning = !1;
        });
      } else
        a.transitioning && (this.removeBypasses(t, n), t.emitAndNotify("style"), a.transitioning = !1);
    }, Ut.checkTrigger = function(t, e, r, a, n, i) {
      var s = this.properties[e], o = n(s);
      o != null && o(r, a) && i(s);
    }, Ut.checkZOrderTrigger = function(t, e, r, a) {
      var n = this;
      this.checkTrigger(t, e, r, a, function(i) {
        return i.triggersZOrder;
      }, function() {
        n._private.cy.notify("zorder", t);
      });
    }, Ut.checkBoundsTrigger = function(t, e, r, a) {
      this.checkTrigger(t, e, r, a, function(n) {
        return n.triggersBounds;
      }, function(n) {
        t.dirtyCompoundBoundsCache(), t.dirtyBoundingBoxCache(), n.triggersBoundsOfParallelBeziers && e === "curve-style" && (r === "bezier" || a === "bezier") && t.parallelEdges().forEach(function(i) {
          i.isBundledBezier() && i.dirtyBoundingBoxCache();
        }), n.triggersBoundsOfConnectedEdges && e === "display" && (r === "none" || a === "none") && t.connectedEdges().forEach(function(i) {
          i.dirtyBoundingBoxCache();
        });
      });
    }, Ut.checkTriggers = function(t, e, r, a) {
      t.dirtyStyleCache(), this.checkZOrderTrigger(t, e, r, a), this.checkBoundsTrigger(t, e, r, a);
    };
    var sn = {};
    sn.applyBypass = function(t, e, r, a) {
      var n = this, i = [], s = !0;
      if (e === "*" || e === "**") {
        if (r !== void 0)
          for (var o = 0; o < n.properties.length; o++) {
            var l = n.properties[o], u = l.name, f = this.parse(u, r, !0);
            f && i.push(f);
          }
      } else if (V(e)) {
        var h = this.parse(e, r, !0);
        h && i.push(h);
      } else if (B(e)) {
        var c = e;
        a = r;
        for (var d = Object.keys(c), v = 0; v < d.length; v++) {
          var y = d[v], p = c[y];
          if (p === void 0 && (p = c[pt(y)]), p !== void 0) {
            var g = this.parse(y, p, !0);
            g && i.push(g);
          }
        }
      } else
        return !1;
      if (i.length === 0)
        return !1;
      for (var m = !1, b = 0; b < t.length; b++) {
        for (var E = t[b], M = {}, S = void 0, x = 0; x < i.length; x++) {
          var I = i[x];
          if (a) {
            var A = E.pstyle(I.name);
            S = M[I.name] = {
              prev: A
            };
          }
          m = this.applyParsedProperty(E, gr(I)) || m, a && (S.next = E.pstyle(I.name));
        }
        m && this.updateStyleHints(E), a && this.updateTransitions(E, M, s);
      }
      return m;
    }, sn.overrideBypass = function(t, e, r) {
      e = Et(e);
      for (var a = 0; a < t.length; a++) {
        var n = t[a], i = n._private.style[e], s = this.properties[e].type, o = s.color, l = s.mutiple, u = i ? i.pfValue != null ? i.pfValue : i.value : null;
        !i || !i.bypass ? this.applyBypass(n, e, r) : (i.value = r, i.pfValue != null && (i.pfValue = r), o ? i.strValue = "rgb(" + r.join(",") + ")" : l ? i.strValue = r.join(" ") : i.strValue = "" + r, this.updateStyleHints(n)), this.checkTriggers(n, e, u, r);
      }
    }, sn.removeAllBypasses = function(t, e) {
      return this.removeBypasses(t, this.propertyNames, e);
    }, sn.removeBypasses = function(t, e, r) {
      for (var a = !0, n = 0; n < t.length; n++) {
        for (var i = t[n], s = {}, o = 0; o < e.length; o++) {
          var l = e[o], u = this.properties[l], f = i.pstyle(u.name);
          if (!(!f || !f.bypass)) {
            var h = "", c = this.parse(l, h, !0), d = s[u.name] = {
              prev: f
            };
            this.applyParsedProperty(i, c), d.next = i.pstyle(u.name);
          }
        }
        this.updateStyleHints(i), r && this.updateTransitions(i, s, a);
      }
    };
    var Hi = {};
    Hi.getEmSizeInPixels = function() {
      var t = this.containerCss("font-size");
      return t != null ? parseFloat(t) : 1;
    }, Hi.containerCss = function(t) {
      var e = this._private.cy, r = e.container(), a = e.window();
      if (a && r && a.getComputedStyle)
        return a.getComputedStyle(r).getPropertyValue(t);
    };
    var yr = {};
    yr.getRenderedStyle = function(t, e) {
      return e ? this.getStylePropertyValue(t, e, !0) : this.getRawStyle(t, !0);
    }, yr.getRawStyle = function(t, e) {
      var r = this;
      if (t = t[0], t) {
        for (var a = {}, n = 0; n < r.properties.length; n++) {
          var i = r.properties[n], s = r.getStylePropertyValue(t, i.name, e);
          s != null && (a[i.name] = s, a[pt(i.name)] = s);
        }
        return a;
      }
    }, yr.getIndexedStyle = function(t, e, r, a) {
      var n = t.pstyle(e)[r][a];
      return n != null ? n : t.cy().style().getDefaultProperty(e)[r][0];
    }, yr.getStylePropertyValue = function(t, e, r) {
      var a = this;
      if (t = t[0], t) {
        var n = a.properties[e];
        n.alias && (n = n.pointsTo);
        var i = n.type, s = t.pstyle(n.name);
        if (s) {
          var o = s.value, l = s.units, u = s.strValue;
          if (r && i.number && o != null && R(o)) {
            var f = t.cy().zoom(), h = function(p) {
              return p * f;
            }, c = function(p, g) {
              return h(p) + g;
            }, d = L(o), v = d ? l.every(function(y) {
              return y != null;
            }) : l != null;
            return v ? d ? o.map(function(y, p) {
              return c(y, l[p]);
            }).join(" ") : c(o, l) : d ? o.map(function(y) {
              return V(y) ? y : "" + h(y);
            }).join(" ") : "" + h(o);
          } else if (u != null)
            return u;
        }
        return null;
      }
    }, yr.getAnimationStartStyle = function(t, e) {
      for (var r = {}, a = 0; a < e.length; a++) {
        var n = e[a], i = n.name, s = t.pstyle(i);
        s !== void 0 && (B(s) ? s = this.parse(i, s.strValue) : s = this.parse(i, s)), s && (r[i] = s);
      }
      return r;
    }, yr.getPropsList = function(t) {
      var e = this, r = [], a = t, n = e.properties;
      if (a)
        for (var i = Object.keys(a), s = 0; s < i.length; s++) {
          var o = i[s], l = a[o], u = n[o] || n[Et(o)], f = this.parse(u.name, l);
          f && r.push(f);
        }
      return r;
    }, yr.getNonDefaultPropertiesHash = function(t, e, r) {
      var a = r.slice(), n, i, s, o, l, u;
      for (l = 0; l < e.length; l++)
        if (n = e[l], i = t.pstyle(n, !1), i != null)
          if (i.pfValue != null)
            a[0] = $a(o, a[0]), a[1] = Ya(o, a[1]);
          else
            for (s = i.strValue, u = 0; u < s.length; u++)
              o = s.charCodeAt(u), a[0] = $a(o, a[0]), a[1] = Ya(o, a[1]);
      return a;
    }, yr.getPropertiesHash = yr.getNonDefaultPropertiesHash;
    var ti = {};
    ti.appendFromJson = function(t) {
      for (var e = this, r = 0; r < t.length; r++) {
        var a = t[r], n = a.selector, i = a.style || a.css, s = Object.keys(i);
        e.selector(n);
        for (var o = 0; o < s.length; o++) {
          var l = s[o], u = i[l];
          e.css(l, u);
        }
      }
      return e;
    }, ti.fromJson = function(t) {
      var e = this;
      return e.resetToDefault(), e.appendFromJson(t), e;
    }, ti.json = function() {
      for (var t = [], e = this.defaultLength; e < this.length; e++) {
        for (var r = this[e], a = r.selector, n = r.properties, i = {}, s = 0; s < n.length; s++) {
          var o = n[s];
          i[o.name] = o.strValue;
        }
        t.push({
          selector: a ? a.toString() : "core",
          style: i
        });
      }
      return t;
    };
    var Xi = {};
    Xi.appendFromString = function(t) {
      var e = this, r = this, a = "" + t, n, i, s;
      a = a.replace(/[/][*](\s|.)+?[*][/]/g, "");
      function o() {
        a.length > n.length ? a = a.substr(n.length) : a = "";
      }
      function l() {
        i.length > s.length ? i = i.substr(s.length) : i = "";
      }
      for (; ; ) {
        var u = a.match(/^\s*$/);
        if (u)
          break;
        var f = a.match(/^\s*((?:.|\s)+?)\s*\{((?:.|\s)+?)\}/);
        if (!f) {
          ht("Halting stylesheet parsing: String stylesheet contains more to parse but no selector and block found in: " + a);
          break;
        }
        n = f[0];
        var h = f[1];
        if (h !== "core") {
          var c = new Br(h);
          if (c.invalid) {
            ht("Skipping parsing of block: Invalid selector found in string stylesheet: " + h), o();
            continue;
          }
        }
        var d = f[2], v = !1;
        i = d;
        for (var y = []; ; ) {
          var p = i.match(/^\s*$/);
          if (p)
            break;
          var g = i.match(/^\s*(.+?)\s*:\s*(.+?)(?:\s*;|\s*$)/);
          if (!g) {
            ht("Skipping parsing of block: Invalid formatting of style property and value definitions found in:" + d), v = !0;
            break;
          }
          s = g[0];
          var m = g[1], b = g[2], E = e.properties[m];
          if (!E) {
            ht("Skipping property: Invalid property name in: " + s), l();
            continue;
          }
          var M = r.parse(m, b);
          if (!M) {
            ht("Skipping property: Invalid property definition in: " + s), l();
            continue;
          }
          y.push({
            name: m,
            val: b
          }), l();
        }
        if (v) {
          o();
          break;
        }
        r.selector(h);
        for (var S = 0; S < y.length; S++) {
          var x = y[S];
          r.css(x.name, x.val);
        }
        o();
      }
      return r;
    }, Xi.fromString = function(t) {
      var e = this;
      return e.resetToDefault(), e.appendFromString(t), e;
    };
    var Pt = {};
    (function() {
      var t = yt, e = bn, r = Fa, a = or, n = xl, i = function(ne) {
        return "^" + ne + "\\s*\\(\\s*([\\w\\.]+)\\s*\\)$";
      }, s = function(ne) {
        var xe = t + "|\\w+|" + e + "|" + r + "|" + a + "|" + n;
        return "^" + ne + "\\s*\\(([\\w\\.]+)\\s*\\,\\s*(" + t + ")\\s*\\,\\s*(" + t + ")\\s*,\\s*(" + xe + ")\\s*\\,\\s*(" + xe + ")\\)$";
      }, o = [`^url\\s*\\(\\s*['"]?(.+?)['"]?\\s*\\)$`, "^(none)$", "^(.+)$"];
      Pt.types = {
        time: {
          number: !0,
          min: 0,
          units: "s|ms",
          implicitUnits: "ms"
        },
        percent: {
          number: !0,
          min: 0,
          max: 100,
          units: "%",
          implicitUnits: "%"
        },
        percentages: {
          number: !0,
          min: 0,
          max: 100,
          units: "%",
          implicitUnits: "%",
          multiple: !0
        },
        zeroOneNumber: {
          number: !0,
          min: 0,
          max: 1,
          unitless: !0
        },
        zeroOneNumbers: {
          number: !0,
          min: 0,
          max: 1,
          unitless: !0,
          multiple: !0
        },
        nOneOneNumber: {
          number: !0,
          min: -1,
          max: 1,
          unitless: !0
        },
        nonNegativeInt: {
          number: !0,
          min: 0,
          integer: !0,
          unitless: !0
        },
        nonNegativeNumber: {
          number: !0,
          min: 0,
          unitless: !0
        },
        position: {
          enums: ["parent", "origin"]
        },
        nodeSize: {
          number: !0,
          min: 0,
          enums: ["label"]
        },
        number: {
          number: !0,
          unitless: !0
        },
        numbers: {
          number: !0,
          unitless: !0,
          multiple: !0
        },
        positiveNumber: {
          number: !0,
          unitless: !0,
          min: 0,
          strictMin: !0
        },
        size: {
          number: !0,
          min: 0
        },
        bidirectionalSize: {
          number: !0
        },
        bidirectionalSizeMaybePercent: {
          number: !0,
          allowPercent: !0
        },
        bidirectionalSizes: {
          number: !0,
          multiple: !0
        },
        sizeMaybePercent: {
          number: !0,
          min: 0,
          allowPercent: !0
        },
        axisDirection: {
          enums: ["horizontal", "leftward", "rightward", "vertical", "upward", "downward", "auto"]
        },
        paddingRelativeTo: {
          enums: ["width", "height", "average", "min", "max"]
        },
        bgWH: {
          number: !0,
          min: 0,
          allowPercent: !0,
          enums: ["auto"],
          multiple: !0
        },
        bgPos: {
          number: !0,
          allowPercent: !0,
          multiple: !0
        },
        bgRelativeTo: {
          enums: ["inner", "include-padding"],
          multiple: !0
        },
        bgRepeat: {
          enums: ["repeat", "repeat-x", "repeat-y", "no-repeat"],
          multiple: !0
        },
        bgFit: {
          enums: ["none", "contain", "cover"],
          multiple: !0
        },
        bgCrossOrigin: {
          enums: ["anonymous", "use-credentials", "null"],
          multiple: !0
        },
        bgClip: {
          enums: ["none", "node"],
          multiple: !0
        },
        bgContainment: {
          enums: ["inside", "over"],
          multiple: !0
        },
        color: {
          color: !0
        },
        colors: {
          color: !0,
          multiple: !0
        },
        fill: {
          enums: ["solid", "linear-gradient", "radial-gradient"]
        },
        bool: {
          enums: ["yes", "no"]
        },
        bools: {
          enums: ["yes", "no"],
          multiple: !0
        },
        lineStyle: {
          enums: ["solid", "dotted", "dashed"]
        },
        lineCap: {
          enums: ["butt", "round", "square"]
        },
        linePosition: {
          enums: ["center", "inside", "outside"]
        },
        lineJoin: {
          enums: ["round", "bevel", "miter"]
        },
        borderStyle: {
          enums: ["solid", "dotted", "dashed", "double"]
        },
        curveStyle: {
          enums: ["bezier", "unbundled-bezier", "haystack", "segments", "straight", "straight-triangle", "taxi", "round-segments", "round-taxi"]
        },
        radiusType: {
          enums: ["arc-radius", "influence-radius"],
          multiple: !0
        },
        fontFamily: {
          regex: '^([\\w- \\"]+(?:\\s*,\\s*[\\w- \\"]+)*)$'
        },
        fontStyle: {
          enums: ["italic", "normal", "oblique"]
        },
        fontWeight: {
          enums: ["normal", "bold", "bolder", "lighter", "100", "200", "300", "400", "500", "600", "800", "900", 100, 200, 300, 400, 500, 600, 700, 800, 900]
        },
        textDecoration: {
          enums: ["none", "underline", "overline", "line-through"]
        },
        textTransform: {
          enums: ["none", "uppercase", "lowercase"]
        },
        textWrap: {
          enums: ["none", "wrap", "ellipsis"]
        },
        textOverflowWrap: {
          enums: ["whitespace", "anywhere"]
        },
        textBackgroundShape: {
          enums: ["rectangle", "roundrectangle", "round-rectangle"]
        },
        nodeShape: {
          enums: ["rectangle", "roundrectangle", "round-rectangle", "cutrectangle", "cut-rectangle", "bottomroundrectangle", "bottom-round-rectangle", "barrel", "ellipse", "triangle", "round-triangle", "square", "pentagon", "round-pentagon", "hexagon", "round-hexagon", "concavehexagon", "concave-hexagon", "heptagon", "round-heptagon", "octagon", "round-octagon", "tag", "round-tag", "star", "diamond", "round-diamond", "vee", "rhomboid", "right-rhomboid", "polygon"]
        },
        overlayShape: {
          enums: ["roundrectangle", "round-rectangle", "ellipse"]
        },
        cornerRadius: {
          number: !0,
          min: 0,
          units: "px|em",
          implicitUnits: "px",
          enums: ["auto"]
        },
        compoundIncludeLabels: {
          enums: ["include", "exclude"]
        },
        arrowShape: {
          enums: ["tee", "triangle", "triangle-tee", "circle-triangle", "triangle-cross", "triangle-backcurve", "vee", "square", "circle", "diamond", "chevron", "none"]
        },
        arrowFill: {
          enums: ["filled", "hollow"]
        },
        arrowWidth: {
          number: !0,
          units: "%|px|em",
          implicitUnits: "px",
          enums: ["match-line"]
        },
        display: {
          enums: ["element", "none"]
        },
        visibility: {
          enums: ["hidden", "visible"]
        },
        zCompoundDepth: {
          enums: ["bottom", "orphan", "auto", "top"]
        },
        zIndexCompare: {
          enums: ["auto", "manual"]
        },
        valign: {
          enums: ["top", "center", "bottom"]
        },
        halign: {
          enums: ["left", "center", "right"]
        },
        justification: {
          enums: ["left", "center", "right", "auto"]
        },
        text: {
          string: !0
        },
        data: {
          mapping: !0,
          regex: i("data")
        },
        layoutData: {
          mapping: !0,
          regex: i("layoutData")
        },
        scratch: {
          mapping: !0,
          regex: i("scratch")
        },
        mapData: {
          mapping: !0,
          regex: s("mapData")
        },
        mapLayoutData: {
          mapping: !0,
          regex: s("mapLayoutData")
        },
        mapScratch: {
          mapping: !0,
          regex: s("mapScratch")
        },
        fn: {
          mapping: !0,
          fn: !0
        },
        url: {
          regexes: o,
          singleRegexMatchValue: !0
        },
        urls: {
          regexes: o,
          singleRegexMatchValue: !0,
          multiple: !0
        },
        propList: {
          propList: !0
        },
        angle: {
          number: !0,
          units: "deg|rad",
          implicitUnits: "rad"
        },
        textRotation: {
          number: !0,
          units: "deg|rad",
          implicitUnits: "rad",
          enums: ["none", "autorotate"]
        },
        polygonPointList: {
          number: !0,
          multiple: !0,
          evenMultiple: !0,
          min: -1,
          max: 1,
          unitless: !0
        },
        edgeDistances: {
          enums: ["intersection", "node-position", "endpoints"]
        },
        edgeEndpoint: {
          number: !0,
          multiple: !0,
          units: "%|px|em|deg|rad",
          implicitUnits: "px",
          enums: ["inside-to-node", "outside-to-node", "outside-to-node-or-label", "outside-to-line", "outside-to-line-or-label"],
          singleEnum: !0,
          validate: function(ne, xe) {
            switch (ne.length) {
              case 2:
                return xe[0] !== "deg" && xe[0] !== "rad" && xe[1] !== "deg" && xe[1] !== "rad";
              case 1:
                return V(ne[0]) || xe[0] === "deg" || xe[0] === "rad";
              default:
                return !1;
            }
          }
        },
        easing: {
          regexes: ["^(spring)\\s*\\(\\s*(" + t + ")\\s*,\\s*(" + t + ")\\s*\\)$", "^(cubic-bezier)\\s*\\(\\s*(" + t + ")\\s*,\\s*(" + t + ")\\s*,\\s*(" + t + ")\\s*,\\s*(" + t + ")\\s*\\)$"],
          enums: ["linear", "ease", "ease-in", "ease-out", "ease-in-out", "ease-in-sine", "ease-out-sine", "ease-in-out-sine", "ease-in-quad", "ease-out-quad", "ease-in-out-quad", "ease-in-cubic", "ease-out-cubic", "ease-in-out-cubic", "ease-in-quart", "ease-out-quart", "ease-in-out-quart", "ease-in-quint", "ease-out-quint", "ease-in-out-quint", "ease-in-expo", "ease-out-expo", "ease-in-out-expo", "ease-in-circ", "ease-out-circ", "ease-in-out-circ"]
        },
        gradientDirection: {
          enums: [
            "to-bottom",
            "to-top",
            "to-left",
            "to-right",
            "to-bottom-right",
            "to-bottom-left",
            "to-top-right",
            "to-top-left",
            "to-right-bottom",
            "to-left-bottom",
            "to-right-top",
            "to-left-top"
          ]
        },
        boundsExpansion: {
          number: !0,
          multiple: !0,
          min: 0,
          validate: function(ne) {
            var xe = ne.length;
            return xe === 1 || xe === 2 || xe === 4;
          }
        }
      };
      var l = {
        zeroNonZero: function(ne, xe) {
          return (ne == null || xe == null) && ne !== xe || ne == 0 && xe != 0 ? !0 : ne != 0 && xe == 0;
        },
        any: function(ne, xe) {
          return ne != xe;
        },
        emptyNonEmpty: function(ne, xe) {
          var Te = ze(ne), Be = ze(xe);
          return Te && !Be || !Te && Be;
        }
      }, u = Pt.types, f = [{
        name: "label",
        type: u.text,
        triggersBounds: l.any,
        triggersZOrder: l.emptyNonEmpty
      }, {
        name: "text-rotation",
        type: u.textRotation,
        triggersBounds: l.any
      }, {
        name: "text-margin-x",
        type: u.bidirectionalSize,
        triggersBounds: l.any
      }, {
        name: "text-margin-y",
        type: u.bidirectionalSize,
        triggersBounds: l.any
      }], h = [{
        name: "source-label",
        type: u.text,
        triggersBounds: l.any
      }, {
        name: "source-text-rotation",
        type: u.textRotation,
        triggersBounds: l.any
      }, {
        name: "source-text-margin-x",
        type: u.bidirectionalSize,
        triggersBounds: l.any
      }, {
        name: "source-text-margin-y",
        type: u.bidirectionalSize,
        triggersBounds: l.any
      }, {
        name: "source-text-offset",
        type: u.size,
        triggersBounds: l.any
      }], c = [{
        name: "target-label",
        type: u.text,
        triggersBounds: l.any
      }, {
        name: "target-text-rotation",
        type: u.textRotation,
        triggersBounds: l.any
      }, {
        name: "target-text-margin-x",
        type: u.bidirectionalSize,
        triggersBounds: l.any
      }, {
        name: "target-text-margin-y",
        type: u.bidirectionalSize,
        triggersBounds: l.any
      }, {
        name: "target-text-offset",
        type: u.size,
        triggersBounds: l.any
      }], d = [{
        name: "font-family",
        type: u.fontFamily,
        triggersBounds: l.any
      }, {
        name: "font-style",
        type: u.fontStyle,
        triggersBounds: l.any
      }, {
        name: "font-weight",
        type: u.fontWeight,
        triggersBounds: l.any
      }, {
        name: "font-size",
        type: u.size,
        triggersBounds: l.any
      }, {
        name: "text-transform",
        type: u.textTransform,
        triggersBounds: l.any
      }, {
        name: "text-wrap",
        type: u.textWrap,
        triggersBounds: l.any
      }, {
        name: "text-overflow-wrap",
        type: u.textOverflowWrap,
        triggersBounds: l.any
      }, {
        name: "text-max-width",
        type: u.size,
        triggersBounds: l.any
      }, {
        name: "text-outline-width",
        type: u.size,
        triggersBounds: l.any
      }, {
        name: "line-height",
        type: u.positiveNumber,
        triggersBounds: l.any
      }], v = [{
        name: "text-valign",
        type: u.valign,
        triggersBounds: l.any
      }, {
        name: "text-halign",
        type: u.halign,
        triggersBounds: l.any
      }, {
        name: "color",
        type: u.color
      }, {
        name: "text-outline-color",
        type: u.color
      }, {
        name: "text-outline-opacity",
        type: u.zeroOneNumber
      }, {
        name: "text-background-color",
        type: u.color
      }, {
        name: "text-background-opacity",
        type: u.zeroOneNumber
      }, {
        name: "text-background-padding",
        type: u.size,
        triggersBounds: l.any
      }, {
        name: "text-border-opacity",
        type: u.zeroOneNumber
      }, {
        name: "text-border-color",
        type: u.color
      }, {
        name: "text-border-width",
        type: u.size,
        triggersBounds: l.any
      }, {
        name: "text-border-style",
        type: u.borderStyle,
        triggersBounds: l.any
      }, {
        name: "text-background-shape",
        type: u.textBackgroundShape,
        triggersBounds: l.any
      }, {
        name: "text-justification",
        type: u.justification
      }], y = [{
        name: "events",
        type: u.bool,
        triggersZOrder: l.any
      }, {
        name: "text-events",
        type: u.bool,
        triggersZOrder: l.any
      }], p = [{
        name: "display",
        type: u.display,
        triggersZOrder: l.any,
        triggersBounds: l.any,
        triggersBoundsOfConnectedEdges: !0
      }, {
        name: "visibility",
        type: u.visibility,
        triggersZOrder: l.any
      }, {
        name: "opacity",
        type: u.zeroOneNumber,
        triggersZOrder: l.zeroNonZero
      }, {
        name: "text-opacity",
        type: u.zeroOneNumber
      }, {
        name: "min-zoomed-font-size",
        type: u.size
      }, {
        name: "z-compound-depth",
        type: u.zCompoundDepth,
        triggersZOrder: l.any
      }, {
        name: "z-index-compare",
        type: u.zIndexCompare,
        triggersZOrder: l.any
      }, {
        name: "z-index",
        type: u.number,
        triggersZOrder: l.any
      }], g = [{
        name: "overlay-padding",
        type: u.size,
        triggersBounds: l.any
      }, {
        name: "overlay-color",
        type: u.color
      }, {
        name: "overlay-opacity",
        type: u.zeroOneNumber,
        triggersBounds: l.zeroNonZero
      }, {
        name: "overlay-shape",
        type: u.overlayShape,
        triggersBounds: l.any
      }, {
        name: "overlay-corner-radius",
        type: u.cornerRadius
      }], m = [{
        name: "underlay-padding",
        type: u.size,
        triggersBounds: l.any
      }, {
        name: "underlay-color",
        type: u.color
      }, {
        name: "underlay-opacity",
        type: u.zeroOneNumber,
        triggersBounds: l.zeroNonZero
      }, {
        name: "underlay-shape",
        type: u.overlayShape,
        triggersBounds: l.any
      }, {
        name: "underlay-corner-radius",
        type: u.cornerRadius
      }], b = [{
        name: "transition-property",
        type: u.propList
      }, {
        name: "transition-duration",
        type: u.time
      }, {
        name: "transition-delay",
        type: u.time
      }, {
        name: "transition-timing-function",
        type: u.easing
      }], E = function(ne, xe) {
        return xe.value === "label" ? -ne.poolIndex() : xe.pfValue;
      }, M = [{
        name: "height",
        type: u.nodeSize,
        triggersBounds: l.any,
        hashOverride: E
      }, {
        name: "width",
        type: u.nodeSize,
        triggersBounds: l.any,
        hashOverride: E
      }, {
        name: "shape",
        type: u.nodeShape,
        triggersBounds: l.any
      }, {
        name: "shape-polygon-points",
        type: u.polygonPointList,
        triggersBounds: l.any
      }, {
        name: "corner-radius",
        type: u.cornerRadius
      }, {
        name: "background-color",
        type: u.color
      }, {
        name: "background-fill",
        type: u.fill
      }, {
        name: "background-opacity",
        type: u.zeroOneNumber
      }, {
        name: "background-blacken",
        type: u.nOneOneNumber
      }, {
        name: "background-gradient-stop-colors",
        type: u.colors
      }, {
        name: "background-gradient-stop-positions",
        type: u.percentages
      }, {
        name: "background-gradient-direction",
        type: u.gradientDirection
      }, {
        name: "padding",
        type: u.sizeMaybePercent,
        triggersBounds: l.any
      }, {
        name: "padding-relative-to",
        type: u.paddingRelativeTo,
        triggersBounds: l.any
      }, {
        name: "bounds-expansion",
        type: u.boundsExpansion,
        triggersBounds: l.any
      }], S = [{
        name: "border-color",
        type: u.color
      }, {
        name: "border-opacity",
        type: u.zeroOneNumber
      }, {
        name: "border-width",
        type: u.size,
        triggersBounds: l.any
      }, {
        name: "border-style",
        type: u.borderStyle
      }, {
        name: "border-cap",
        type: u.lineCap
      }, {
        name: "border-join",
        type: u.lineJoin
      }, {
        name: "border-dash-pattern",
        type: u.numbers
      }, {
        name: "border-dash-offset",
        type: u.number
      }, {
        name: "border-position",
        type: u.linePosition
      }], x = [{
        name: "outline-color",
        type: u.color
      }, {
        name: "outline-opacity",
        type: u.zeroOneNumber
      }, {
        name: "outline-width",
        type: u.size,
        triggersBounds: l.any
      }, {
        name: "outline-style",
        type: u.borderStyle
      }, {
        name: "outline-offset",
        type: u.size,
        triggersBounds: l.any
      }], I = [{
        name: "background-image",
        type: u.urls
      }, {
        name: "background-image-crossorigin",
        type: u.bgCrossOrigin
      }, {
        name: "background-image-opacity",
        type: u.zeroOneNumbers
      }, {
        name: "background-image-containment",
        type: u.bgContainment
      }, {
        name: "background-image-smoothing",
        type: u.bools
      }, {
        name: "background-position-x",
        type: u.bgPos
      }, {
        name: "background-position-y",
        type: u.bgPos
      }, {
        name: "background-width-relative-to",
        type: u.bgRelativeTo
      }, {
        name: "background-height-relative-to",
        type: u.bgRelativeTo
      }, {
        name: "background-repeat",
        type: u.bgRepeat
      }, {
        name: "background-fit",
        type: u.bgFit
      }, {
        name: "background-clip",
        type: u.bgClip
      }, {
        name: "background-width",
        type: u.bgWH
      }, {
        name: "background-height",
        type: u.bgWH
      }, {
        name: "background-offset-x",
        type: u.bgPos
      }, {
        name: "background-offset-y",
        type: u.bgPos
      }], A = [{
        name: "position",
        type: u.position,
        triggersBounds: l.any
      }, {
        name: "compound-sizing-wrt-labels",
        type: u.compoundIncludeLabels,
        triggersBounds: l.any
      }, {
        name: "min-width",
        type: u.size,
        triggersBounds: l.any
      }, {
        name: "min-width-bias-left",
        type: u.sizeMaybePercent,
        triggersBounds: l.any
      }, {
        name: "min-width-bias-right",
        type: u.sizeMaybePercent,
        triggersBounds: l.any
      }, {
        name: "min-height",
        type: u.size,
        triggersBounds: l.any
      }, {
        name: "min-height-bias-top",
        type: u.sizeMaybePercent,
        triggersBounds: l.any
      }, {
        name: "min-height-bias-bottom",
        type: u.sizeMaybePercent,
        triggersBounds: l.any
      }], z = [{
        name: "line-style",
        type: u.lineStyle
      }, {
        name: "line-color",
        type: u.color
      }, {
        name: "line-fill",
        type: u.fill
      }, {
        name: "line-cap",
        type: u.lineCap
      }, {
        name: "line-opacity",
        type: u.zeroOneNumber
      }, {
        name: "line-dash-pattern",
        type: u.numbers
      }, {
        name: "line-dash-offset",
        type: u.number
      }, {
        name: "line-outline-width",
        type: u.size
      }, {
        name: "line-outline-color",
        type: u.color
      }, {
        name: "line-gradient-stop-colors",
        type: u.colors
      }, {
        name: "line-gradient-stop-positions",
        type: u.percentages
      }, {
        name: "curve-style",
        type: u.curveStyle,
        triggersBounds: l.any,
        triggersBoundsOfParallelBeziers: !0
      }, {
        name: "haystack-radius",
        type: u.zeroOneNumber,
        triggersBounds: l.any
      }, {
        name: "source-endpoint",
        type: u.edgeEndpoint,
        triggersBounds: l.any
      }, {
        name: "target-endpoint",
        type: u.edgeEndpoint,
        triggersBounds: l.any
      }, {
        name: "control-point-step-size",
        type: u.size,
        triggersBounds: l.any
      }, {
        name: "control-point-distances",
        type: u.bidirectionalSizes,
        triggersBounds: l.any
      }, {
        name: "control-point-weights",
        type: u.numbers,
        triggersBounds: l.any
      }, {
        name: "segment-distances",
        type: u.bidirectionalSizes,
        triggersBounds: l.any
      }, {
        name: "segment-weights",
        type: u.numbers,
        triggersBounds: l.any
      }, {
        name: "segment-radii",
        type: u.numbers,
        triggersBounds: l.any
      }, {
        name: "radius-type",
        type: u.radiusType,
        triggersBounds: l.any
      }, {
        name: "taxi-turn",
        type: u.bidirectionalSizeMaybePercent,
        triggersBounds: l.any
      }, {
        name: "taxi-turn-min-distance",
        type: u.size,
        triggersBounds: l.any
      }, {
        name: "taxi-direction",
        type: u.axisDirection,
        triggersBounds: l.any
      }, {
        name: "taxi-radius",
        type: u.number,
        triggersBounds: l.any
      }, {
        name: "edge-distances",
        type: u.edgeDistances,
        triggersBounds: l.any
      }, {
        name: "arrow-scale",
        type: u.positiveNumber,
        triggersBounds: l.any
      }, {
        name: "loop-direction",
        type: u.angle,
        triggersBounds: l.any
      }, {
        name: "loop-sweep",
        type: u.angle,
        triggersBounds: l.any
      }, {
        name: "source-distance-from-node",
        type: u.size,
        triggersBounds: l.any
      }, {
        name: "target-distance-from-node",
        type: u.size,
        triggersBounds: l.any
      }], F = [{
        name: "ghost",
        type: u.bool,
        triggersBounds: l.any
      }, {
        name: "ghost-offset-x",
        type: u.bidirectionalSize,
        triggersBounds: l.any
      }, {
        name: "ghost-offset-y",
        type: u.bidirectionalSize,
        triggersBounds: l.any
      }, {
        name: "ghost-opacity",
        type: u.zeroOneNumber
      }], G = [{
        name: "selection-box-color",
        type: u.color
      }, {
        name: "selection-box-opacity",
        type: u.zeroOneNumber
      }, {
        name: "selection-box-border-color",
        type: u.color
      }, {
        name: "selection-box-border-width",
        type: u.size
      }, {
        name: "active-bg-color",
        type: u.color
      }, {
        name: "active-bg-opacity",
        type: u.zeroOneNumber
      }, {
        name: "active-bg-size",
        type: u.size
      }, {
        name: "outside-texture-bg-color",
        type: u.color
      }, {
        name: "outside-texture-bg-opacity",
        type: u.zeroOneNumber
      }], X = [];
      Pt.pieBackgroundN = 16, X.push({
        name: "pie-size",
        type: u.sizeMaybePercent
      });
      for (var P = 1; P <= Pt.pieBackgroundN; P++)
        X.push({
          name: "pie-" + P + "-background-color",
          type: u.color
        }), X.push({
          name: "pie-" + P + "-background-size",
          type: u.percent
        }), X.push({
          name: "pie-" + P + "-background-opacity",
          type: u.zeroOneNumber
        });
      var Q = [], W = Pt.arrowPrefixes = ["source", "mid-source", "target", "mid-target"];
      [{
        name: "arrow-shape",
        type: u.arrowShape,
        triggersBounds: l.any
      }, {
        name: "arrow-color",
        type: u.color
      }, {
        name: "arrow-fill",
        type: u.arrowFill
      }, {
        name: "arrow-width",
        type: u.arrowWidth
      }].forEach(function(Ee) {
        W.forEach(function(ne) {
          var xe = ne + "-" + Ee.name, Te = Ee.type, Be = Ee.triggersBounds;
          Q.push({
            name: xe,
            type: Te,
            triggersBounds: Be
          });
        });
      }, {});
      var Z = Pt.properties = [].concat(y, b, p, g, m, F, v, d, f, h, c, M, S, x, I, X, A, z, Q, G), re = Pt.propertyGroups = {
        behavior: y,
        transition: b,
        visibility: p,
        overlay: g,
        underlay: m,
        ghost: F,
        commonLabel: v,
        labelDimensions: d,
        mainLabel: f,
        sourceLabel: h,
        targetLabel: c,
        nodeBody: M,
        nodeBorder: S,
        nodeOutline: x,
        backgroundImage: I,
        pie: X,
        compound: A,
        edgeLine: z,
        edgeArrow: Q,
        core: G
      }, le = Pt.propertyGroupNames = {}, ve = Pt.propertyGroupKeys = Object.keys(re);
      ve.forEach(function(Ee) {
        le[Ee] = re[Ee].map(function(ne) {
          return ne.name;
        }), re[Ee].forEach(function(ne) {
          return ne.groupKey = Ee;
        });
      });
      var se = Pt.aliases = [{
        name: "content",
        pointsTo: "label"
      }, {
        name: "control-point-distance",
        pointsTo: "control-point-distances"
      }, {
        name: "control-point-weight",
        pointsTo: "control-point-weights"
      }, {
        name: "segment-distance",
        pointsTo: "segment-distances"
      }, {
        name: "segment-weight",
        pointsTo: "segment-weights"
      }, {
        name: "segment-radius",
        pointsTo: "segment-radii"
      }, {
        name: "edge-text-rotation",
        pointsTo: "text-rotation"
      }, {
        name: "padding-left",
        pointsTo: "padding"
      }, {
        name: "padding-right",
        pointsTo: "padding"
      }, {
        name: "padding-top",
        pointsTo: "padding"
      }, {
        name: "padding-bottom",
        pointsTo: "padding"
      }];
      Pt.propertyNames = Z.map(function(Ee) {
        return Ee.name;
      });
      for (var ie = 0; ie < Z.length; ie++) {
        var be = Z[ie];
        Z[be.name] = be;
      }
      for (var De = 0; De < se.length; De++) {
        var Le = se[De], Ae = Z[Le.pointsTo], Me = {
          name: Le.name,
          alias: !0,
          pointsTo: Ae
        };
        Z.push(Me), Z[Le.name] = Me;
      }
    })(), Pt.getDefaultProperty = function(t) {
      return this.getDefaultProperties()[t];
    }, Pt.getDefaultProperties = function() {
      var t = this._private;
      if (t.defaultProperties != null)
        return t.defaultProperties;
      for (var e = Qe({
        "selection-box-color": "#ddd",
        "selection-box-opacity": 0.65,
        "selection-box-border-color": "#aaa",
        "selection-box-border-width": 1,
        "active-bg-color": "black",
        "active-bg-opacity": 0.15,
        "active-bg-size": 30,
        "outside-texture-bg-color": "#000",
        "outside-texture-bg-opacity": 0.125,
        events: "yes",
        "text-events": "no",
        "text-valign": "top",
        "text-halign": "center",
        "text-justification": "auto",
        "line-height": 1,
        color: "#000",
        "text-outline-color": "#000",
        "text-outline-width": 0,
        "text-outline-opacity": 1,
        "text-opacity": 1,
        "text-decoration": "none",
        "text-transform": "none",
        "text-wrap": "none",
        "text-overflow-wrap": "whitespace",
        "text-max-width": 9999,
        "text-background-color": "#000",
        "text-background-opacity": 0,
        "text-background-shape": "rectangle",
        "text-background-padding": 0,
        "text-border-opacity": 0,
        "text-border-width": 0,
        "text-border-style": "solid",
        "text-border-color": "#000",
        "font-family": "Helvetica Neue, Helvetica, sans-serif",
        "font-style": "normal",
        "font-weight": "normal",
        "font-size": 16,
        "min-zoomed-font-size": 0,
        "text-rotation": "none",
        "source-text-rotation": "none",
        "target-text-rotation": "none",
        visibility: "visible",
        display: "element",
        opacity: 1,
        "z-compound-depth": "auto",
        "z-index-compare": "auto",
        "z-index": 0,
        label: "",
        "text-margin-x": 0,
        "text-margin-y": 0,
        "source-label": "",
        "source-text-offset": 0,
        "source-text-margin-x": 0,
        "source-text-margin-y": 0,
        "target-label": "",
        "target-text-offset": 0,
        "target-text-margin-x": 0,
        "target-text-margin-y": 0,
        "overlay-opacity": 0,
        "overlay-color": "#000",
        "overlay-padding": 10,
        "overlay-shape": "round-rectangle",
        "overlay-corner-radius": "auto",
        "underlay-opacity": 0,
        "underlay-color": "#000",
        "underlay-padding": 10,
        "underlay-shape": "round-rectangle",
        "underlay-corner-radius": "auto",
        "transition-property": "none",
        "transition-duration": 0,
        "transition-delay": 0,
        "transition-timing-function": "linear",
        "background-blacken": 0,
        "background-color": "#999",
        "background-fill": "solid",
        "background-opacity": 1,
        "background-image": "none",
        "background-image-crossorigin": "anonymous",
        "background-image-opacity": 1,
        "background-image-containment": "inside",
        "background-image-smoothing": "yes",
        "background-position-x": "50%",
        "background-position-y": "50%",
        "background-offset-x": 0,
        "background-offset-y": 0,
        "background-width-relative-to": "include-padding",
        "background-height-relative-to": "include-padding",
        "background-repeat": "no-repeat",
        "background-fit": "none",
        "background-clip": "node",
        "background-width": "auto",
        "background-height": "auto",
        "border-color": "#000",
        "border-opacity": 1,
        "border-width": 0,
        "border-style": "solid",
        "border-dash-pattern": [4, 2],
        "border-dash-offset": 0,
        "border-cap": "butt",
        "border-join": "miter",
        "border-position": "center",
        "outline-color": "#999",
        "outline-opacity": 1,
        "outline-width": 0,
        "outline-offset": 0,
        "outline-style": "solid",
        height: 30,
        width: 30,
        shape: "ellipse",
        "shape-polygon-points": "-1, -1,   1, -1,   1, 1,   -1, 1",
        "corner-radius": "auto",
        "bounds-expansion": 0,
        "background-gradient-direction": "to-bottom",
        "background-gradient-stop-colors": "#999",
        "background-gradient-stop-positions": "0%",
        ghost: "no",
        "ghost-offset-y": 0,
        "ghost-offset-x": 0,
        "ghost-opacity": 0,
        padding: 0,
        "padding-relative-to": "width",
        position: "origin",
        "compound-sizing-wrt-labels": "include",
        "min-width": 0,
        "min-width-bias-left": 0,
        "min-width-bias-right": 0,
        "min-height": 0,
        "min-height-bias-top": 0,
        "min-height-bias-bottom": 0
      }, {
        "pie-size": "100%"
      }, [{
        name: "pie-{{i}}-background-color",
        value: "black"
      }, {
        name: "pie-{{i}}-background-size",
        value: "0%"
      }, {
        name: "pie-{{i}}-background-opacity",
        value: 1
      }].reduce(function(l, u) {
        for (var f = 1; f <= Pt.pieBackgroundN; f++) {
          var h = u.name.replace("{{i}}", f), c = u.value;
          l[h] = c;
        }
        return l;
      }, {}), {
        "line-style": "solid",
        "line-color": "#999",
        "line-fill": "solid",
        "line-cap": "butt",
        "line-opacity": 1,
        "line-outline-width": 0,
        "line-outline-color": "#000",
        "line-gradient-stop-colors": "#999",
        "line-gradient-stop-positions": "0%",
        "control-point-step-size": 40,
        "control-point-weights": 0.5,
        "segment-weights": 0.5,
        "segment-distances": 20,
        "segment-radii": 15,
        "radius-type": "arc-radius",
        "taxi-turn": "50%",
        "taxi-radius": 15,
        "taxi-turn-min-distance": 10,
        "taxi-direction": "auto",
        "edge-distances": "intersection",
        "curve-style": "haystack",
        "haystack-radius": 0,
        "arrow-scale": 1,
        "loop-direction": "-45deg",
        "loop-sweep": "-90deg",
        "source-distance-from-node": 0,
        "target-distance-from-node": 0,
        "source-endpoint": "outside-to-node",
        "target-endpoint": "outside-to-node",
        "line-dash-pattern": [6, 3],
        "line-dash-offset": 0
      }, [{
        name: "arrow-shape",
        value: "none"
      }, {
        name: "arrow-color",
        value: "#999"
      }, {
        name: "arrow-fill",
        value: "filled"
      }, {
        name: "arrow-width",
        value: 1
      }].reduce(function(l, u) {
        return Pt.arrowPrefixes.forEach(function(f) {
          var h = f + "-" + u.name, c = u.value;
          l[h] = c;
        }), l;
      }, {})), r = {}, a = 0; a < this.properties.length; a++) {
        var n = this.properties[a];
        if (!n.pointsTo) {
          var i = n.name, s = e[i], o = this.parse(i, s);
          r[i] = o;
        }
      }
      return t.defaultProperties = r, t.defaultProperties;
    }, Pt.addDefaultStylesheet = function() {
      this.selector(":parent").css({
        shape: "rectangle",
        padding: 10,
        "background-color": "#eee",
        "border-color": "#ccc",
        "border-width": 1
      }).selector("edge").css({
        width: 3
      }).selector(":loop").css({
        "curve-style": "bezier"
      }).selector("edge:compound").css({
        "curve-style": "bezier",
        "source-endpoint": "outside-to-line",
        "target-endpoint": "outside-to-line"
      }).selector(":selected").css({
        "background-color": "#0169D9",
        "line-color": "#0169D9",
        "source-arrow-color": "#0169D9",
        "target-arrow-color": "#0169D9",
        "mid-source-arrow-color": "#0169D9",
        "mid-target-arrow-color": "#0169D9"
      }).selector(":parent:selected").css({
        "background-color": "#CCE1F9",
        "border-color": "#aec8e5"
      }).selector(":active").css({
        "overlay-color": "black",
        "overlay-padding": 10,
        "overlay-opacity": 0.25
      }), this.defaultLength = this.length;
    };
    var ri = {};
    ri.parse = function(t, e, r, a) {
      var n = this;
      if (te(e))
        return n.parseImplWarn(t, e, r, a);
      var i = a === "mapping" || a === !0 || a === !1 || a == null ? "dontcare" : a, s = r ? "t" : "f", o = "" + e, l = As(t, o, s, i), u = n.propCache = n.propCache || [], f;
      return (f = u[l]) || (f = u[l] = n.parseImplWarn(t, e, r, a)), (r || a === "mapping") && (f = gr(f), f && (f.value = gr(f.value))), f;
    }, ri.parseImplWarn = function(t, e, r, a) {
      var n = this.parseImpl(t, e, r, a);
      return !n && e != null && ht("The style property `".concat(t, ": ").concat(e, "` is invalid")), n && (n.name === "width" || n.name === "height") && e === "label" && ht("The style value of `label` is deprecated for `" + n.name + "`"), n;
    }, ri.parseImpl = function(t, e, r, a) {
      var n = this;
      t = Et(t);
      var i = n.properties[t], s = e, o = n.types;
      if (!i || e === void 0)
        return null;
      i.alias && (i = i.pointsTo, t = i.name);
      var l = V(e);
      l && (e = e.trim());
      var u = i.type;
      if (!u)
        return null;
      if (r && (e === "" || e === null))
        return {
          name: t,
          value: e,
          bypass: !0,
          deleteBypass: !0
        };
      if (te(e))
        return {
          name: t,
          value: e,
          strValue: "fn",
          mapped: o.fn,
          bypass: r
        };
      var f, h;
      if (!(!l || a || e.length < 7 || e[1] !== "a")) {
        if (e.length >= 7 && e[0] === "d" && (f = new RegExp(o.data.regex).exec(e))) {
          if (r)
            return !1;
          var c = o.data;
          return {
            name: t,
            value: f,
            strValue: "" + e,
            mapped: c,
            field: f[1],
            bypass: r
          };
        } else if (e.length >= 10 && e[0] === "m" && (h = new RegExp(o.mapData.regex).exec(e))) {
          if (r || u.multiple)
            return !1;
          var d = o.mapData;
          if (!(u.color || u.number))
            return !1;
          var v = this.parse(t, h[4]);
          if (!v || v.mapped)
            return !1;
          var y = this.parse(t, h[5]);
          if (!y || y.mapped)
            return !1;
          if (v.pfValue === y.pfValue || v.strValue === y.strValue)
            return ht("`" + t + ": " + e + "` is not a valid mapper because the output range is zero; converting to `" + t + ": " + v.strValue + "`"), this.parse(t, v.strValue);
          if (u.color) {
            var p = v.value, g = y.value, m = p[0] === g[0] && p[1] === g[1] && p[2] === g[2] && (p[3] === g[3] || (p[3] == null || p[3] === 1) && (g[3] == null || g[3] === 1));
            if (m)
              return !1;
          }
          return {
            name: t,
            value: h,
            strValue: "" + e,
            mapped: d,
            field: h[1],
            fieldMin: parseFloat(h[2]),
            fieldMax: parseFloat(h[3]),
            valueMin: v.value,
            valueMax: y.value,
            bypass: r
          };
        }
      }
      if (u.multiple && a !== "multiple") {
        var b;
        if (l ? b = e.split(/\s+/) : L(e) ? b = e : b = [e], u.evenMultiple && b.length % 2 !== 0)
          return null;
        for (var E = [], M = [], S = [], x = "", I = !1, A = 0; A < b.length; A++) {
          var z = n.parse(t, b[A], r, "multiple");
          I = I || V(z.value), E.push(z.value), S.push(z.pfValue != null ? z.pfValue : z.value), M.push(z.units), x += (A > 0 ? " " : "") + z.strValue;
        }
        return u.validate && !u.validate(E, M) ? null : u.singleEnum && I ? E.length === 1 && V(E[0]) ? {
          name: t,
          value: E[0],
          strValue: E[0],
          bypass: r
        } : null : {
          name: t,
          value: E,
          pfValue: S,
          strValue: x,
          bypass: r,
          units: M
        };
      }
      var F = function() {
        for (var ne = 0; ne < u.enums.length; ne++) {
          var xe = u.enums[ne];
          if (xe === e)
            return {
              name: t,
              value: e,
              strValue: "" + e,
              bypass: r
            };
        }
        return null;
      };
      if (u.number) {
        var G, X = "px";
        if (u.units && (G = u.units), u.implicitUnits && (X = u.implicitUnits), !u.unitless)
          if (l) {
            var P = "px|em" + (u.allowPercent ? "|\\%" : "");
            G && (P = G);
            var Q = e.match("^(" + yt + ")(" + P + ")?$");
            Q && (e = Q[1], G = Q[2] || X);
          } else
            (!G || u.implicitUnits) && (G = X);
        if (e = parseFloat(e), isNaN(e) && u.enums === void 0)
          return null;
        if (isNaN(e) && u.enums !== void 0)
          return e = s, F();
        if (u.integer && !de(e) || u.min !== void 0 && (e < u.min || u.strictMin && e === u.min) || u.max !== void 0 && (e > u.max || u.strictMax && e === u.max))
          return null;
        var W = {
          name: t,
          value: e,
          strValue: "" + e + (G || ""),
          units: G,
          bypass: r
        };
        return u.unitless || G !== "px" && G !== "em" ? W.pfValue = e : W.pfValue = G === "px" || !G ? e : this.getEmSizeInPixels() * e, (G === "ms" || G === "s") && (W.pfValue = G === "ms" ? e : 1e3 * e), (G === "deg" || G === "rad") && (W.pfValue = G === "rad" ? e : Xf(e)), G === "%" && (W.pfValue = e / 100), W;
      } else if (u.propList) {
        var Z = [], re = "" + e;
        if (re !== "none") {
          for (var le = re.split(/\s*,\s*|\s+/), ve = 0; ve < le.length; ve++) {
            var se = le[ve].trim();
            n.properties[se] ? Z.push(se) : ht("`" + se + "` is not a valid property name");
          }
          if (Z.length === 0)
            return null;
        }
        return {
          name: t,
          value: Z,
          strValue: Z.length === 0 ? "none" : Z.join(" "),
          bypass: r
        };
      } else if (u.color) {
        var ie = Al(e);
        return ie ? {
          name: t,
          value: ie,
          pfValue: ie,
          strValue: "rgb(" + ie[0] + "," + ie[1] + "," + ie[2] + ")",
          bypass: r
        } : null;
      } else if (u.regex || u.regexes) {
        if (u.enums) {
          var be = F();
          if (be)
            return be;
        }
        for (var De = u.regexes ? u.regexes : [u.regex], Le = 0; Le < De.length; Le++) {
          var Ae = new RegExp(De[Le]), Me = Ae.exec(e);
          if (Me)
            return {
              name: t,
              value: u.singleRegexMatchValue ? Me[1] : Me,
              strValue: "" + e,
              bypass: r
            };
        }
        return null;
      } else
        return u.string ? {
          name: t,
          value: "" + e,
          strValue: "" + e,
          bypass: r
        } : u.enums ? F() : null;
    };
    var $t = function t(e) {
      if (!(this instanceof t))
        return new t(e);
      if (!rt(e)) {
        Dt("A style must have a core reference");
        return;
      }
      this._private = {
        cy: e,
        coreStyle: {}
      }, this.length = 0, this.resetToDefault();
    }, Yt = $t.prototype;
    Yt.instanceString = function() {
      return "style";
    }, Yt.clear = function() {
      for (var t = this._private, e = t.cy, r = e.elements(), a = 0; a < this.length; a++)
        this[a] = void 0;
      return this.length = 0, t.contextStyles = {}, t.propDiffs = {}, this.cleanElements(r, !0), r.forEach(function(n) {
        var i = n[0]._private;
        i.styleDirty = !0, i.appliedInitStyle = !1;
      }), this;
    }, Yt.resetToDefault = function() {
      return this.clear(), this.addDefaultStylesheet(), this;
    }, Yt.core = function(t) {
      return this._private.coreStyle[t] || this.getDefaultProperty(t);
    }, Yt.selector = function(t) {
      var e = t === "core" ? null : new Br(t), r = this.length++;
      return this[r] = {
        selector: e,
        properties: [],
        mappedProperties: [],
        index: r
      }, this;
    }, Yt.css = function() {
      var t = this, e = arguments;
      if (e.length === 1)
        for (var r = e[0], a = 0; a < t.properties.length; a++) {
          var n = t.properties[a], i = r[n.name];
          i === void 0 && (i = r[pt(n.name)]), i !== void 0 && this.cssRule(n.name, i);
        }
      else
        e.length === 2 && this.cssRule(e[0], e[1]);
      return this;
    }, Yt.style = Yt.css, Yt.cssRule = function(t, e) {
      var r = this.parse(t, e);
      if (r) {
        var a = this.length - 1;
        this[a].properties.push(r), this[a].properties[r.name] = r, r.name.match(/pie-(\d+)-background-size/) && r.value && (this._private.hasPie = !0), r.mapped && this[a].mappedProperties.push(r);
        var n = !this[a].selector;
        n && (this._private.coreStyle[r.name] = r);
      }
      return this;
    }, Yt.append = function(t) {
      return lt(t) ? t.appendToStyle(this) : L(t) ? this.appendFromJson(t) : V(t) && this.appendFromString(t), this;
    }, $t.fromJson = function(t, e) {
      var r = new $t(t);
      return r.fromJson(e), r;
    }, $t.fromString = function(t, e) {
      return new $t(t).fromString(e);
    }, [Ut, sn, Hi, yr, ti, Xi, Pt, ri].forEach(function(t) {
      Qe(Yt, t);
    }), $t.types = Yt.types, $t.properties = Yt.properties, $t.propertyGroups = Yt.propertyGroups, $t.propertyGroupNames = Yt.propertyGroupNames, $t.propertyGroupKeys = Yt.propertyGroupKeys;
    var cg = {
      style: function(e) {
        if (e) {
          var r = this.setStyle(e);
          r.update();
        }
        return this._private.style;
      },
      setStyle: function(e) {
        var r = this._private;
        return lt(e) ? r.style = e.generateStyle(this) : L(e) ? r.style = $t.fromJson(this, e) : V(e) ? r.style = $t.fromString(this, e) : r.style = $t(this), r.style;
      },
      updateStyle: function() {
        this.mutableElements().updateStyle();
      }
    }, vg = "single", Qr = {
      autolock: function(e) {
        if (e !== void 0)
          this._private.autolock = !!e;
        else
          return this._private.autolock;
        return this;
      },
      autoungrabify: function(e) {
        if (e !== void 0)
          this._private.autoungrabify = !!e;
        else
          return this._private.autoungrabify;
        return this;
      },
      autounselectify: function(e) {
        if (e !== void 0)
          this._private.autounselectify = !!e;
        else
          return this._private.autounselectify;
        return this;
      },
      selectionType: function(e) {
        var r = this._private;
        if (r.selectionType == null && (r.selectionType = vg), e !== void 0)
          (e === "additive" || e === "single") && (r.selectionType = e);
        else
          return r.selectionType;
        return this;
      },
      panningEnabled: function(e) {
        if (e !== void 0)
          this._private.panningEnabled = !!e;
        else
          return this._private.panningEnabled;
        return this;
      },
      userPanningEnabled: function(e) {
        if (e !== void 0)
          this._private.userPanningEnabled = !!e;
        else
          return this._private.userPanningEnabled;
        return this;
      },
      zoomingEnabled: function(e) {
        if (e !== void 0)
          this._private.zoomingEnabled = !!e;
        else
          return this._private.zoomingEnabled;
        return this;
      },
      userZoomingEnabled: function(e) {
        if (e !== void 0)
          this._private.userZoomingEnabled = !!e;
        else
          return this._private.userZoomingEnabled;
        return this;
      },
      boxSelectionEnabled: function(e) {
        if (e !== void 0)
          this._private.boxSelectionEnabled = !!e;
        else
          return this._private.boxSelectionEnabled;
        return this;
      },
      pan: function() {
        var e = arguments, r = this._private.pan, a, n, i, s, o;
        switch (e.length) {
          case 0:
            return r;
          case 1:
            if (V(e[0]))
              return a = e[0], r[a];
            if (B(e[0])) {
              if (!this._private.panningEnabled)
                return this;
              i = e[0], s = i.x, o = i.y, R(s) && (r.x = s), R(o) && (r.y = o), this.emit("pan viewport");
            }
            break;
          case 2:
            if (!this._private.panningEnabled)
              return this;
            a = e[0], n = e[1], (a === "x" || a === "y") && R(n) && (r[a] = n), this.emit("pan viewport");
            break;
        }
        return this.notify("viewport"), this;
      },
      panBy: function(e, r) {
        var a = arguments, n = this._private.pan, i, s, o, l, u;
        if (!this._private.panningEnabled)
          return this;
        switch (a.length) {
          case 1:
            B(e) && (o = a[0], l = o.x, u = o.y, R(l) && (n.x += l), R(u) && (n.y += u), this.emit("pan viewport"));
            break;
          case 2:
            i = e, s = r, (i === "x" || i === "y") && R(s) && (n[i] += s), this.emit("pan viewport");
            break;
        }
        return this.notify("viewport"), this;
      },
      fit: function(e, r) {
        var a = this.getFitViewport(e, r);
        if (a) {
          var n = this._private;
          n.zoom = a.zoom, n.pan = a.pan, this.emit("pan zoom viewport"), this.notify("viewport");
        }
        return this;
      },
      getFitViewport: function(e, r) {
        if (R(e) && r === void 0 && (r = e, e = void 0), !(!this._private.panningEnabled || !this._private.zoomingEnabled)) {
          var a;
          if (V(e)) {
            var n = e;
            e = this.$(n);
          } else if (at(e)) {
            var i = e;
            a = {
              x1: i.x1,
              y1: i.y1,
              x2: i.x2,
              y2: i.y2
            }, a.w = a.x2 - a.x1, a.h = a.y2 - a.y1;
          } else
            Oe(e) || (e = this.mutableElements());
          if (!(Oe(e) && e.empty())) {
            a = a || e.boundingBox();
            var s = this.width(), o = this.height(), l;
            if (r = R(r) ? r : 0, !isNaN(s) && !isNaN(o) && s > 0 && o > 0 && !isNaN(a.w) && !isNaN(a.h) && a.w > 0 && a.h > 0) {
              l = Math.min((s - 2 * r) / a.w, (o - 2 * r) / a.h), l = l > this._private.maxZoom ? this._private.maxZoom : l, l = l < this._private.minZoom ? this._private.minZoom : l;
              var u = {
                x: (s - l * (a.x1 + a.x2)) / 2,
                y: (o - l * (a.y1 + a.y2)) / 2
              };
              return {
                zoom: l,
                pan: u
              };
            }
          }
        }
      },
      zoomRange: function(e, r) {
        var a = this._private;
        if (r == null) {
          var n = e;
          e = n.min, r = n.max;
        }
        return R(e) && R(r) && e <= r ? (a.minZoom = e, a.maxZoom = r) : R(e) && r === void 0 && e <= a.maxZoom ? a.minZoom = e : R(r) && e === void 0 && r >= a.minZoom && (a.maxZoom = r), this;
      },
      minZoom: function(e) {
        return e === void 0 ? this._private.minZoom : this.zoomRange({
          min: e
        });
      },
      maxZoom: function(e) {
        return e === void 0 ? this._private.maxZoom : this.zoomRange({
          max: e
        });
      },
      getZoomedViewport: function(e) {
        var r = this._private, a = r.pan, n = r.zoom, i, s, o = !1;
        if (r.zoomingEnabled || (o = !0), R(e) ? s = e : B(e) && (s = e.level, e.position != null ? i = Sn(e.position, n, a) : e.renderedPosition != null && (i = e.renderedPosition), i != null && !r.panningEnabled && (o = !0)), s = s > r.maxZoom ? r.maxZoom : s, s = s < r.minZoom ? r.minZoom : s, o || !R(s) || s === n || i != null && (!R(i.x) || !R(i.y)))
          return null;
        if (i != null) {
          var l = a, u = n, f = s, h = {
            x: -f / u * (i.x - l.x) + i.x,
            y: -f / u * (i.y - l.y) + i.y
          };
          return {
            zoomed: !0,
            panned: !0,
            zoom: f,
            pan: h
          };
        } else
          return {
            zoomed: !0,
            panned: !1,
            zoom: s,
            pan: a
          };
      },
      zoom: function(e) {
        if (e === void 0)
          return this._private.zoom;
        var r = this.getZoomedViewport(e), a = this._private;
        return r == null || !r.zoomed ? this : (a.zoom = r.zoom, r.panned && (a.pan.x = r.pan.x, a.pan.y = r.pan.y), this.emit("zoom" + (r.panned ? " pan" : "") + " viewport"), this.notify("viewport"), this);
      },
      viewport: function(e) {
        var r = this._private, a = !0, n = !0, i = [], s = !1, o = !1;
        if (!e)
          return this;
        if (R(e.zoom) || (a = !1), B(e.pan) || (n = !1), !a && !n)
          return this;
        if (a) {
          var l = e.zoom;
          l < r.minZoom || l > r.maxZoom || !r.zoomingEnabled ? s = !0 : (r.zoom = l, i.push("zoom"));
        }
        if (n && (!s || !e.cancelOnFailedZoom) && r.panningEnabled) {
          var u = e.pan;
          R(u.x) && (r.pan.x = u.x, o = !1), R(u.y) && (r.pan.y = u.y, o = !1), o || i.push("pan");
        }
        return i.length > 0 && (i.push("viewport"), this.emit(i.join(" ")), this.notify("viewport")), this;
      },
      center: function(e) {
        var r = this.getCenterPan(e);
        return r && (this._private.pan = r, this.emit("pan viewport"), this.notify("viewport")), this;
      },
      getCenterPan: function(e, r) {
        if (!!this._private.panningEnabled) {
          if (V(e)) {
            var a = e;
            e = this.mutableElements().filter(a);
          } else
            Oe(e) || (e = this.mutableElements());
          if (e.length !== 0) {
            var n = e.boundingBox(), i = this.width(), s = this.height();
            r = r === void 0 ? this._private.zoom : r;
            var o = {
              x: (i - r * (n.x1 + n.x2)) / 2,
              y: (s - r * (n.y1 + n.y2)) / 2
            };
            return o;
          }
        }
      },
      reset: function() {
        return !this._private.panningEnabled || !this._private.zoomingEnabled ? this : (this.viewport({
          pan: {
            x: 0,
            y: 0
          },
          zoom: 1
        }), this);
      },
      invalidateSize: function() {
        this._private.sizeCache = null;
      },
      size: function() {
        var e = this._private, r = e.container, a = this;
        return e.sizeCache = e.sizeCache || (r ? function() {
          var n = a.window().getComputedStyle(r), i = function(o) {
            return parseFloat(n.getPropertyValue(o));
          };
          return {
            width: r.clientWidth - i("padding-left") - i("padding-right"),
            height: r.clientHeight - i("padding-top") - i("padding-bottom")
          };
        }() : {
          width: 1,
          height: 1
        });
      },
      width: function() {
        return this.size().width;
      },
      height: function() {
        return this.size().height;
      },
      extent: function() {
        var e = this._private.pan, r = this._private.zoom, a = this.renderedExtent(), n = {
          x1: (a.x1 - e.x) / r,
          x2: (a.x2 - e.x) / r,
          y1: (a.y1 - e.y) / r,
          y2: (a.y2 - e.y) / r
        };
        return n.w = n.x2 - n.x1, n.h = n.y2 - n.y1, n;
      },
      renderedExtent: function() {
        var e = this.width(), r = this.height();
        return {
          x1: 0,
          y1: 0,
          x2: e,
          y2: r,
          w: e,
          h: r
        };
      },
      multiClickDebounceTime: function(e) {
        if (e)
          this._private.multiClickDebounceTime = e;
        else
          return this._private.multiClickDebounceTime;
        return this;
      }
    };
    Qr.centre = Qr.center, Qr.autolockNodes = Qr.autolock, Qr.autoungrabifyNodes = Qr.autoungrabify;
    var on = {
      data: ct.data({
        field: "data",
        bindingEvent: "data",
        allowBinding: !0,
        allowSetting: !0,
        settingEvent: "data",
        settingTriggersEvent: !0,
        triggerFnName: "trigger",
        allowGetting: !0,
        updateStyle: !0
      }),
      removeData: ct.removeData({
        field: "data",
        event: "data",
        triggerFnName: "trigger",
        triggerEvent: !0,
        updateStyle: !0
      }),
      scratch: ct.data({
        field: "scratch",
        bindingEvent: "scratch",
        allowBinding: !0,
        allowSetting: !0,
        settingEvent: "scratch",
        settingTriggersEvent: !0,
        triggerFnName: "trigger",
        allowGetting: !0,
        updateStyle: !0
      }),
      removeScratch: ct.removeData({
        field: "scratch",
        event: "scratch",
        triggerFnName: "trigger",
        triggerEvent: !0,
        updateStyle: !0
      })
    };
    on.attr = on.data, on.removeAttr = on.removeData;
    var un = function(e) {
      var r = this;
      e = Qe({}, e);
      var a = e.container;
      a && !we(a) && we(a[0]) && (a = a[0]);
      var n = a ? a._cyreg : null;
      n = n || {}, n && n.cy && (n.cy.destroy(), n = {});
      var i = n.readies = n.readies || [];
      a && (a._cyreg = n), n.cy = r;
      var s = U !== void 0 && a !== void 0 && !e.headless, o = e;
      o.layout = Qe({
        name: s ? "grid" : "null"
      }, o.layout), o.renderer = Qe({
        name: s ? "canvas" : "null"
      }, o.renderer);
      var l = function(v, y, p) {
        return y !== void 0 ? y : p !== void 0 ? p : v;
      }, u = this._private = {
        container: a,
        ready: !1,
        options: o,
        elements: new kt(this),
        listeners: [],
        aniEles: new kt(this),
        data: o.data || {},
        scratch: {},
        layout: null,
        renderer: null,
        destroyed: !1,
        notificationsEnabled: !0,
        minZoom: 1e-50,
        maxZoom: 1e50,
        zoomingEnabled: l(!0, o.zoomingEnabled),
        userZoomingEnabled: l(!0, o.userZoomingEnabled),
        panningEnabled: l(!0, o.panningEnabled),
        userPanningEnabled: l(!0, o.userPanningEnabled),
        boxSelectionEnabled: l(!0, o.boxSelectionEnabled),
        autolock: l(!1, o.autolock, o.autolockNodes),
        autoungrabify: l(!1, o.autoungrabify, o.autoungrabifyNodes),
        autounselectify: l(!1, o.autounselectify),
        styleEnabled: o.styleEnabled === void 0 ? s : o.styleEnabled,
        zoom: R(o.zoom) ? o.zoom : 1,
        pan: {
          x: B(o.pan) && R(o.pan.x) ? o.pan.x : 0,
          y: B(o.pan) && R(o.pan.y) ? o.pan.y : 0
        },
        animation: {
          current: [],
          queue: []
        },
        hasCompoundNodes: !1,
        multiClickDebounceTime: l(250, o.multiClickDebounceTime)
      };
      this.createEmitter(), this.selectionType(o.selectionType), this.zoomRange({
        min: o.minZoom,
        max: o.maxZoom
      });
      var f = function(v, y) {
        var p = v.some(ft);
        if (p)
          return ya.all(v).then(y);
        y(v);
      };
      u.styleEnabled && r.setStyle([]);
      var h = Qe({}, o, o.renderer);
      r.initRenderer(h);
      var c = function(v, y, p) {
        r.notifications(!1);
        var g = r.mutableElements();
        g.length > 0 && g.remove(), v != null && (B(v) || L(v)) && r.add(v), r.one("layoutready", function(b) {
          r.notifications(!0), r.emit(b), r.one("load", y), r.emitAndNotify("load");
        }).one("layoutstop", function() {
          r.one("done", p), r.emit("done");
        });
        var m = Qe({}, r._private.options.layout);
        m.eles = r.elements(), r.layout(m).run();
      };
      f([o.style, o.elements], function(d) {
        var v = d[0], y = d[1];
        u.styleEnabled && r.style().append(v), c(y, function() {
          r.startAnimationLoop(), u.ready = !0, te(o.ready) && r.on("ready", o.ready);
          for (var p = 0; p < i.length; p++) {
            var g = i[p];
            r.on("ready", g);
          }
          n && (n.readies = []), r.emit("ready");
        }, o.done);
      });
    }, ai = un.prototype;
    Qe(ai, {
      instanceString: function() {
        return "core";
      },
      isReady: function() {
        return this._private.ready;
      },
      destroyed: function() {
        return this._private.destroyed;
      },
      ready: function(e) {
        return this.isReady() ? this.emitter().emit("ready", [], e) : this.on("ready", e), this;
      },
      destroy: function() {
        var e = this;
        if (!e.destroyed())
          return e.stopAnimationLoop(), e.destroyRenderer(), this.emit("destroy"), e._private.destroyed = !0, e;
      },
      hasElementWithId: function(e) {
        return this._private.elements.hasElementWithId(e);
      },
      getElementById: function(e) {
        return this._private.elements.getElementById(e);
      },
      hasCompoundNodes: function() {
        return this._private.hasCompoundNodes;
      },
      headless: function() {
        return this._private.renderer.isHeadless();
      },
      styleEnabled: function() {
        return this._private.styleEnabled;
      },
      addToPool: function(e) {
        return this._private.elements.merge(e), this;
      },
      removeFromPool: function(e) {
        return this._private.elements.unmerge(e), this;
      },
      container: function() {
        return this._private.container || null;
      },
      window: function() {
        var e = this._private.container;
        if (e == null)
          return U;
        var r = this._private.container.ownerDocument;
        return r === void 0 || r == null ? U : r.defaultView || U;
      },
      mount: function(e) {
        if (e != null) {
          var r = this, a = r._private, n = a.options;
          return !we(e) && we(e[0]) && (e = e[0]), r.stopAnimationLoop(), r.destroyRenderer(), a.container = e, a.styleEnabled = !0, r.invalidateSize(), r.initRenderer(Qe({}, n, n.renderer, {
            name: n.renderer.name === "null" ? "canvas" : n.renderer.name
          })), r.startAnimationLoop(), r.style(n.style), r.emit("mount"), r;
        }
      },
      unmount: function() {
        var e = this;
        return e.stopAnimationLoop(), e.destroyRenderer(), e.initRenderer({
          name: "null"
        }), e.emit("unmount"), e;
      },
      options: function() {
        return gr(this._private.options);
      },
      json: function(e) {
        var r = this, a = r._private, n = r.mutableElements(), i = function(E) {
          return r.getElementById(E.id());
        };
        if (B(e)) {
          if (r.startBatch(), e.elements) {
            var s = {}, o = function(E, M) {
              for (var S = [], x = [], I = 0; I < E.length; I++) {
                var A = E[I];
                if (!A.data.id) {
                  ht("cy.json() cannot handle elements without an ID attribute");
                  continue;
                }
                var z = "" + A.data.id, F = r.getElementById(z);
                s[z] = !0, F.length !== 0 ? x.push({
                  ele: F,
                  json: A
                }) : (M && (A.group = M), S.push(A));
              }
              r.add(S);
              for (var G = 0; G < x.length; G++) {
                var X = x[G], P = X.ele, Q = X.json;
                P.json(Q);
              }
            };
            if (L(e.elements))
              o(e.elements);
            else
              for (var l = ["nodes", "edges"], u = 0; u < l.length; u++) {
                var f = l[u], h = e.elements[f];
                L(h) && o(h, f);
              }
            var c = r.collection();
            n.filter(function(b) {
              return !s[b.id()];
            }).forEach(function(b) {
              b.isParent() ? c.merge(b) : b.remove();
            }), c.forEach(function(b) {
              return b.children().move({
                parent: null
              });
            }), c.forEach(function(b) {
              return i(b).remove();
            });
          }
          e.style && r.style(e.style), e.zoom != null && e.zoom !== a.zoom && r.zoom(e.zoom), e.pan && (e.pan.x !== a.pan.x || e.pan.y !== a.pan.y) && r.pan(e.pan), e.data && r.data(e.data);
          for (var d = ["minZoom", "maxZoom", "zoomingEnabled", "userZoomingEnabled", "panningEnabled", "userPanningEnabled", "boxSelectionEnabled", "autolock", "autoungrabify", "autounselectify", "multiClickDebounceTime"], v = 0; v < d.length; v++) {
            var y = d[v];
            e[y] != null && r[y](e[y]);
          }
          return r.endBatch(), this;
        } else {
          var p = !!e, g = {};
          p ? g.elements = this.elements().map(function(b) {
            return b.json();
          }) : (g.elements = {}, n.forEach(function(b) {
            var E = b.group();
            g.elements[E] || (g.elements[E] = []), g.elements[E].push(b.json());
          })), this._private.styleEnabled && (g.style = r.style().json()), g.data = gr(r.data());
          var m = a.options;
          return g.zoomingEnabled = a.zoomingEnabled, g.userZoomingEnabled = a.userZoomingEnabled, g.zoom = a.zoom, g.minZoom = a.minZoom, g.maxZoom = a.maxZoom, g.panningEnabled = a.panningEnabled, g.userPanningEnabled = a.userPanningEnabled, g.pan = gr(a.pan), g.boxSelectionEnabled = a.boxSelectionEnabled, g.renderer = gr(m.renderer), g.hideEdgesOnViewport = m.hideEdgesOnViewport, g.textureOnViewport = m.textureOnViewport, g.wheelSensitivity = m.wheelSensitivity, g.motionBlur = m.motionBlur, g.multiClickDebounceTime = m.multiClickDebounceTime, g;
        }
      }
    }), ai.$id = ai.getElementById, [rg, og, ou, Yi, jn, lg, _i, ei, cg, Qr, on].forEach(function(t) {
      Qe(ai, t);
    });
    var dg = {
      fit: !0,
      directed: !1,
      padding: 30,
      circle: !1,
      grid: !1,
      spacingFactor: 1.75,
      boundingBox: void 0,
      avoidOverlap: !0,
      nodeDimensionsIncludeLabels: !1,
      roots: void 0,
      depthSort: void 0,
      animate: !1,
      animationDuration: 500,
      animationEasing: void 0,
      animateFilter: function(e, r) {
        return !0;
      },
      ready: void 0,
      stop: void 0,
      transform: function(e, r) {
        return r;
      }
    }, gg = {
      maximal: !1,
      acyclic: !1
    }, Aa = function(e) {
      return e.scratch("breadthfirst");
    }, uu = function(e, r) {
      return e.scratch("breadthfirst", r);
    };
    function lu(t) {
      this.options = Qe({}, dg, gg, t);
    }
    lu.prototype.run = function() {
      var t = this.options, e = t, r = t.cy, a = e.eles, n = a.nodes().filter(function(ke) {
        return !ke.isParent();
      }), i = a, s = e.directed, o = e.acyclic || e.maximal || e.maximalAdjustments > 0, l = Kt(e.boundingBox ? e.boundingBox : {
        x1: 0,
        y1: 0,
        w: r.width(),
        h: r.height()
      }), u;
      if (Oe(e.roots))
        u = e.roots;
      else if (L(e.roots)) {
        for (var f = [], h = 0; h < e.roots.length; h++) {
          var c = e.roots[h], d = r.getElementById(c);
          f.push(d);
        }
        u = r.collection(f);
      } else if (V(e.roots))
        u = r.$(e.roots);
      else if (s)
        u = n.roots();
      else {
        var v = a.components();
        u = r.collection();
        for (var y = function(Pe) {
          var Ve = v[Pe], _e = Ve.maxDegree(!1), $e = Ve.filter(function(qe) {
            return qe.degree(!1) === _e;
          });
          u = u.add($e);
        }, p = 0; p < v.length; p++)
          y(p);
      }
      var g = [], m = {}, b = function(Pe, Ve) {
        g[Ve] == null && (g[Ve] = []);
        var _e = g[Ve].length;
        g[Ve].push(Pe), uu(Pe, {
          index: _e,
          depth: Ve
        });
      }, E = function(Pe, Ve) {
        var _e = Aa(Pe), $e = _e.depth, qe = _e.index;
        g[$e][qe] = null, b(Pe, Ve);
      };
      i.bfs({
        roots: u,
        directed: e.directed,
        visit: function(Pe, Ve, _e, $e, qe) {
          var vt = Pe[0], it = vt.id();
          b(vt, qe), m[it] = !0;
        }
      });
      for (var M = [], S = 0; S < n.length; S++) {
        var x = n[S];
        m[x.id()] || M.push(x);
      }
      var I = function(Pe) {
        for (var Ve = g[Pe], _e = 0; _e < Ve.length; _e++) {
          var $e = Ve[_e];
          if ($e == null) {
            Ve.splice(_e, 1), _e--;
            continue;
          }
          uu($e, {
            depth: Pe,
            index: _e
          });
        }
      }, A = function() {
        for (var Pe = 0; Pe < g.length; Pe++)
          I(Pe);
      }, z = function(Pe, Ve) {
        for (var _e = Aa(Pe), $e = Pe.incomers().filter(function(N) {
          return N.isNode() && a.has(N);
        }), qe = -1, vt = Pe.id(), it = 0; it < $e.length; it++) {
          var et = $e[it], ut = Aa(et);
          qe = Math.max(qe, ut.depth);
        }
        if (_e.depth <= qe) {
          if (!e.acyclic && Ve[vt])
            return null;
          var Se = qe + 1;
          return E(Pe, Se), Ve[vt] = Se, !0;
        }
        return !1;
      };
      if (s && o) {
        var F = [], G = {}, X = function(Pe) {
          return F.push(Pe);
        }, P = function() {
          return F.shift();
        };
        for (n.forEach(function(ke) {
          return F.push(ke);
        }); F.length > 0; ) {
          var Q = P(), W = z(Q, G);
          if (W)
            Q.outgoers().filter(function(ke) {
              return ke.isNode() && a.has(ke);
            }).forEach(X);
          else if (W === null) {
            ht("Detected double maximal shift for node `" + Q.id() + "`.  Bailing maximal adjustment due to cycle.  Use `options.maximal: true` only on DAGs.");
            break;
          }
        }
      }
      A();
      var Z = 0;
      if (e.avoidOverlap)
        for (var re = 0; re < n.length; re++) {
          var le = n[re], ve = le.layoutDimensions(e), se = ve.w, ie = ve.h;
          Z = Math.max(Z, se, ie);
        }
      var be = {}, De = function(Pe) {
        if (be[Pe.id()])
          return be[Pe.id()];
        for (var Ve = Aa(Pe).depth, _e = Pe.neighborhood(), $e = 0, qe = 0, vt = 0; vt < _e.length; vt++) {
          var it = _e[vt];
          if (!(it.isEdge() || it.isParent() || !n.has(it))) {
            var et = Aa(it);
            if (et != null) {
              var ut = et.index, Se = et.depth;
              if (!(ut == null || Se == null)) {
                var N = g[Se].length;
                Se < Ve && ($e += ut / N, qe++);
              }
            }
          }
        }
        return qe = Math.max(1, qe), $e = $e / qe, qe === 0 && ($e = 0), be[Pe.id()] = $e, $e;
      }, Le = function(Pe, Ve) {
        var _e = De(Pe), $e = De(Ve), qe = _e - $e;
        return qe === 0 ? ys(Pe.id(), Ve.id()) : qe;
      };
      e.depthSort !== void 0 && (Le = e.depthSort);
      for (var Ae = 0; Ae < g.length; Ae++)
        g[Ae].sort(Le), I(Ae);
      for (var Me = [], Ee = 0; Ee < M.length; Ee++)
        Me.push(M[Ee]);
      g.unshift(Me), A();
      for (var ne = 0, xe = 0; xe < g.length; xe++)
        ne = Math.max(g[xe].length, ne);
      var Te = {
        x: l.x1 + l.w / 2,
        y: l.x1 + l.h / 2
      }, Be = g.reduce(function(ke, Pe) {
        return Math.max(ke, Pe.length);
      }, 0), He = function(Pe) {
        var Ve = Aa(Pe), _e = Ve.depth, $e = Ve.index, qe = g[_e].length, vt = Math.max(l.w / ((e.grid ? Be : qe) + 1), Z), it = Math.max(l.h / (g.length + 1), Z), et = Math.min(l.w / 2 / g.length, l.h / 2 / g.length);
        if (et = Math.max(et, Z), e.circle) {
          var Se = et * _e + et - (g.length > 0 && g[0].length <= 3 ? et / 2 : 0), N = 2 * Math.PI / g[_e].length * $e;
          return _e === 0 && g[0].length === 1 && (Se = 1), {
            x: Te.x + Se * Math.cos(N),
            y: Te.y + Se * Math.sin(N)
          };
        } else {
          var ut = {
            x: Te.x + ($e + 1 - (qe + 1) / 2) * vt,
            y: (_e + 1) * it
          };
          return ut;
        }
      };
      return a.nodes().layoutPositions(this, e, He), this;
    };
    var pg = {
      fit: !0,
      padding: 30,
      boundingBox: void 0,
      avoidOverlap: !0,
      nodeDimensionsIncludeLabels: !1,
      spacingFactor: void 0,
      radius: void 0,
      startAngle: 3 / 2 * Math.PI,
      sweep: void 0,
      clockwise: !0,
      sort: void 0,
      animate: !1,
      animationDuration: 500,
      animationEasing: void 0,
      animateFilter: function(e, r) {
        return !0;
      },
      ready: void 0,
      stop: void 0,
      transform: function(e, r) {
        return r;
      }
    };
    function fu(t) {
      this.options = Qe({}, pg, t);
    }
    fu.prototype.run = function() {
      var t = this.options, e = t, r = t.cy, a = e.eles, n = e.counterclockwise !== void 0 ? !e.counterclockwise : e.clockwise, i = a.nodes().not(":parent");
      e.sort && (i = i.sort(e.sort));
      for (var s = Kt(e.boundingBox ? e.boundingBox : {
        x1: 0,
        y1: 0,
        w: r.width(),
        h: r.height()
      }), o = {
        x: s.x1 + s.w / 2,
        y: s.y1 + s.h / 2
      }, l = e.sweep === void 0 ? 2 * Math.PI - 2 * Math.PI / i.length : e.sweep, u = l / Math.max(1, i.length - 1), f, h = 0, c = 0; c < i.length; c++) {
        var d = i[c], v = d.layoutDimensions(e), y = v.w, p = v.h;
        h = Math.max(h, y, p);
      }
      if (R(e.radius) ? f = e.radius : i.length <= 1 ? f = 0 : f = Math.min(s.h, s.w) / 2 - h, i.length > 1 && e.avoidOverlap) {
        h *= 1.75;
        var g = Math.cos(u) - Math.cos(0), m = Math.sin(u) - Math.sin(0), b = Math.sqrt(h * h / (g * g + m * m));
        f = Math.max(b, f);
      }
      var E = function(S, x) {
        var I = e.startAngle + x * u * (n ? 1 : -1), A = f * Math.cos(I), z = f * Math.sin(I), F = {
          x: o.x + A,
          y: o.y + z
        };
        return F;
      };
      return a.nodes().layoutPositions(this, e, E), this;
    };
    var yg = {
      fit: !0,
      padding: 30,
      startAngle: 3 / 2 * Math.PI,
      sweep: void 0,
      clockwise: !0,
      equidistant: !1,
      minNodeSpacing: 10,
      boundingBox: void 0,
      avoidOverlap: !0,
      nodeDimensionsIncludeLabels: !1,
      height: void 0,
      width: void 0,
      spacingFactor: void 0,
      concentric: function(e) {
        return e.degree();
      },
      levelWidth: function(e) {
        return e.maxDegree() / 4;
      },
      animate: !1,
      animationDuration: 500,
      animationEasing: void 0,
      animateFilter: function(e, r) {
        return !0;
      },
      ready: void 0,
      stop: void 0,
      transform: function(e, r) {
        return r;
      }
    };
    function hu(t) {
      this.options = Qe({}, yg, t);
    }
    hu.prototype.run = function() {
      for (var t = this.options, e = t, r = e.counterclockwise !== void 0 ? !e.counterclockwise : e.clockwise, a = t.cy, n = e.eles, i = n.nodes().not(":parent"), s = Kt(e.boundingBox ? e.boundingBox : {
        x1: 0,
        y1: 0,
        w: a.width(),
        h: a.height()
      }), o = {
        x: s.x1 + s.w / 2,
        y: s.y1 + s.h / 2
      }, l = [], u = 0, f = 0; f < i.length; f++) {
        var h = i[f], c = void 0;
        c = e.concentric(h), l.push({
          value: c,
          node: h
        }), h._private.scratch.concentric = c;
      }
      i.updateStyle();
      for (var d = 0; d < i.length; d++) {
        var v = i[d], y = v.layoutDimensions(e);
        u = Math.max(u, y.w, y.h);
      }
      l.sort(function(ke, Pe) {
        return Pe.value - ke.value;
      });
      for (var p = e.levelWidth(i), g = [[]], m = g[0], b = 0; b < l.length; b++) {
        var E = l[b];
        if (m.length > 0) {
          var M = Math.abs(m[0].value - E.value);
          M >= p && (m = [], g.push(m));
        }
        m.push(E);
      }
      var S = u + e.minNodeSpacing;
      if (!e.avoidOverlap) {
        var x = g.length > 0 && g[0].length > 1, I = Math.min(s.w, s.h) / 2 - S, A = I / (g.length + x ? 1 : 0);
        S = Math.min(S, A);
      }
      for (var z = 0, F = 0; F < g.length; F++) {
        var G = g[F], X = e.sweep === void 0 ? 2 * Math.PI - 2 * Math.PI / G.length : e.sweep, P = G.dTheta = X / Math.max(1, G.length - 1);
        if (G.length > 1 && e.avoidOverlap) {
          var Q = Math.cos(P) - Math.cos(0), W = Math.sin(P) - Math.sin(0), Z = Math.sqrt(S * S / (Q * Q + W * W));
          z = Math.max(Z, z);
        }
        G.r = z, z += S;
      }
      if (e.equidistant) {
        for (var re = 0, le = 0, ve = 0; ve < g.length; ve++) {
          var se = g[ve], ie = se.r - le;
          re = Math.max(re, ie);
        }
        le = 0;
        for (var be = 0; be < g.length; be++) {
          var De = g[be];
          be === 0 && (le = De.r), De.r = le, le += re;
        }
      }
      for (var Le = {}, Ae = 0; Ae < g.length; Ae++)
        for (var Me = g[Ae], Ee = Me.dTheta, ne = Me.r, xe = 0; xe < Me.length; xe++) {
          var Te = Me[xe], Be = e.startAngle + (r ? 1 : -1) * Ee * xe, He = {
            x: o.x + ne * Math.cos(Be),
            y: o.y + ne * Math.sin(Be)
          };
          Le[Te.node.id()] = He;
        }
      return n.nodes().layoutPositions(this, e, function(ke) {
        var Pe = ke.id();
        return Le[Pe];
      }), this;
    };
    var qi, mg = {
      ready: function() {
      },
      stop: function() {
      },
      animate: !0,
      animationEasing: void 0,
      animationDuration: void 0,
      animateFilter: function(e, r) {
        return !0;
      },
      animationThreshold: 250,
      refresh: 20,
      fit: !0,
      padding: 30,
      boundingBox: void 0,
      nodeDimensionsIncludeLabels: !1,
      randomize: !1,
      componentSpacing: 40,
      nodeRepulsion: function(e) {
        return 2048;
      },
      nodeOverlap: 4,
      idealEdgeLength: function(e) {
        return 32;
      },
      edgeElasticity: function(e) {
        return 32;
      },
      nestingFactor: 1.2,
      gravity: 1,
      numIter: 1e3,
      initialTemp: 1e3,
      coolingFactor: 0.99,
      minTemp: 1
    };
    function ni(t) {
      this.options = Qe({}, mg, t), this.options.layout = this;
      var e = this.options.eles.nodes(), r = this.options.eles.edges(), a = r.filter(function(n) {
        var i = n.source().data("id"), s = n.target().data("id"), o = e.some(function(u) {
          return u.data("id") === i;
        }), l = e.some(function(u) {
          return u.data("id") === s;
        });
        return !o || !l;
      });
      this.options.eles = this.options.eles.not(a);
    }
    ni.prototype.run = function() {
      var t = this.options, e = t.cy, r = this;
      r.stopped = !1, (t.animate === !0 || t.animate === !1) && r.emit({
        type: "layoutstart",
        layout: r
      }), t.debug === !0 ? qi = !0 : qi = !1;
      var a = bg(e, r, t);
      qi && xg(a), t.randomize && Tg(a);
      var n = Cr(), i = function() {
        Cg(a, e, t), t.fit === !0 && e.fit(t.padding);
      }, s = function(c) {
        return !(r.stopped || c >= t.numIter || (Dg(a, t), a.temperature = a.temperature * t.coolingFactor, a.temperature < t.minTemp));
      }, o = function() {
        if (t.animate === !0 || t.animate === !1)
          i(), r.one("layoutstop", t.stop), r.emit({
            type: "layoutstop",
            layout: r
          });
        else {
          var c = t.eles.nodes(), d = cu(a, t, c);
          c.layoutPositions(r, t, d);
        }
      }, l = 0, u = !0;
      if (t.animate === !0) {
        var f = function h() {
          for (var c = 0; u && c < t.refresh; )
            u = s(l), l++, c++;
          if (!u)
            du(a, t), o();
          else {
            var d = Cr();
            d - n >= t.animationThreshold && i(), xn(h);
          }
        };
        f();
      } else {
        for (; u; )
          u = s(l), l++;
        du(a, t), o();
      }
      return this;
    }, ni.prototype.stop = function() {
      return this.stopped = !0, this.thread && this.thread.stop(), this.emit("layoutstop"), this;
    }, ni.prototype.destroy = function() {
      return this.thread && this.thread.stop(), this;
    };
    var bg = function(e, r, a) {
      for (var n = a.eles.edges(), i = a.eles.nodes(), s = Kt(a.boundingBox ? a.boundingBox : {
        x1: 0,
        y1: 0,
        w: e.width(),
        h: e.height()
      }), o = {
        isCompound: e.hasCompoundNodes(),
        layoutNodes: [],
        idToIndex: {},
        nodeSize: i.size(),
        graphSet: [],
        indexToGraph: [],
        layoutEdges: [],
        edgeSize: n.size(),
        temperature: a.initialTemp,
        clientWidth: s.w,
        clientHeight: s.h,
        boundingBox: s
      }, l = a.eles.components(), u = {}, f = 0; f < l.length; f++)
        for (var h = l[f], c = 0; c < h.length; c++) {
          var d = h[c];
          u[d.id()] = f;
        }
      for (var f = 0; f < o.nodeSize; f++) {
        var v = i[f], y = v.layoutDimensions(a), p = {};
        p.isLocked = v.locked(), p.id = v.data("id"), p.parentId = v.data("parent"), p.cmptId = u[v.id()], p.children = [], p.positionX = v.position("x"), p.positionY = v.position("y"), p.offsetX = 0, p.offsetY = 0, p.height = y.w, p.width = y.h, p.maxX = p.positionX + p.width / 2, p.minX = p.positionX - p.width / 2, p.maxY = p.positionY + p.height / 2, p.minY = p.positionY - p.height / 2, p.padLeft = parseFloat(v.style("padding")), p.padRight = parseFloat(v.style("padding")), p.padTop = parseFloat(v.style("padding")), p.padBottom = parseFloat(v.style("padding")), p.nodeRepulsion = te(a.nodeRepulsion) ? a.nodeRepulsion(v) : a.nodeRepulsion, o.layoutNodes.push(p), o.idToIndex[p.id] = f;
      }
      for (var g = [], m = 0, b = -1, E = [], f = 0; f < o.nodeSize; f++) {
        var v = o.layoutNodes[f], M = v.parentId;
        M != null ? o.layoutNodes[o.idToIndex[M]].children.push(v.id) : (g[++b] = v.id, E.push(v.id));
      }
      for (o.graphSet.push(E); m <= b; ) {
        var S = g[m++], x = o.idToIndex[S], d = o.layoutNodes[x], I = d.children;
        if (I.length > 0) {
          o.graphSet.push(I);
          for (var f = 0; f < I.length; f++)
            g[++b] = I[f];
        }
      }
      for (var f = 0; f < o.graphSet.length; f++)
        for (var A = o.graphSet[f], c = 0; c < A.length; c++) {
          var z = o.idToIndex[A[c]];
          o.indexToGraph[z] = f;
        }
      for (var f = 0; f < o.edgeSize; f++) {
        var F = n[f], G = {};
        G.id = F.data("id"), G.sourceId = F.data("source"), G.targetId = F.data("target");
        var X = te(a.idealEdgeLength) ? a.idealEdgeLength(F) : a.idealEdgeLength, P = te(a.edgeElasticity) ? a.edgeElasticity(F) : a.edgeElasticity, Q = o.idToIndex[G.sourceId], W = o.idToIndex[G.targetId], Z = o.indexToGraph[Q], re = o.indexToGraph[W];
        if (Z != re) {
          for (var le = Eg(G.sourceId, G.targetId, o), ve = o.graphSet[le], se = 0, p = o.layoutNodes[Q]; ve.indexOf(p.id) === -1; )
            p = o.layoutNodes[o.idToIndex[p.parentId]], se++;
          for (p = o.layoutNodes[W]; ve.indexOf(p.id) === -1; )
            p = o.layoutNodes[o.idToIndex[p.parentId]], se++;
          X *= se * a.nestingFactor;
        }
        G.idealLength = X, G.elasticity = P, o.layoutEdges.push(G);
      }
      return o;
    }, Eg = function(e, r, a) {
      var n = wg(e, r, 0, a);
      return 2 > n.count ? 0 : n.graph;
    }, wg = function t(e, r, a, n) {
      var i = n.graphSet[a];
      if (-1 < i.indexOf(e) && -1 < i.indexOf(r))
        return {
          count: 2,
          graph: a
        };
      for (var s = 0, o = 0; o < i.length; o++) {
        var l = i[o], u = n.idToIndex[l], f = n.layoutNodes[u].children;
        if (f.length !== 0) {
          var h = n.indexToGraph[n.idToIndex[f[0]]], c = t(e, r, h, n);
          if (c.count !== 0)
            if (c.count === 1) {
              if (s++, s === 2)
                break;
            } else
              return c;
        }
      }
      return {
        count: s,
        graph: a
      };
    }, xg, Tg = function(e, r) {
      for (var a = e.clientWidth, n = e.clientHeight, i = 0; i < e.nodeSize; i++) {
        var s = e.layoutNodes[i];
        s.children.length === 0 && !s.isLocked && (s.positionX = Math.random() * a, s.positionY = Math.random() * n);
      }
    }, cu = function(e, r, a) {
      var n = e.boundingBox, i = {
        x1: 1 / 0,
        x2: -1 / 0,
        y1: 1 / 0,
        y2: -1 / 0
      };
      return r.boundingBox && (a.forEach(function(s) {
        var o = e.layoutNodes[e.idToIndex[s.data("id")]];
        i.x1 = Math.min(i.x1, o.positionX), i.x2 = Math.max(i.x2, o.positionX), i.y1 = Math.min(i.y1, o.positionY), i.y2 = Math.max(i.y2, o.positionY);
      }), i.w = i.x2 - i.x1, i.h = i.y2 - i.y1), function(s, o) {
        var l = e.layoutNodes[e.idToIndex[s.data("id")]];
        if (r.boundingBox) {
          var u = (l.positionX - i.x1) / i.w, f = (l.positionY - i.y1) / i.h;
          return {
            x: n.x1 + u * n.w,
            y: n.y1 + f * n.h
          };
        } else
          return {
            x: l.positionX,
            y: l.positionY
          };
      };
    }, Cg = function(e, r, a) {
      var n = a.layout, i = a.eles.nodes(), s = cu(e, a, i);
      i.positions(s), e.ready !== !0 && (e.ready = !0, n.one("layoutready", a.ready), n.emit({
        type: "layoutready",
        layout: this
      }));
    }, Dg = function(e, r, a) {
      Sg(e, r), Og(e), Mg(e, r), Ng(e), Ig(e);
    }, Sg = function(e, r) {
      for (var a = 0; a < e.graphSet.length; a++)
        for (var n = e.graphSet[a], i = n.length, s = 0; s < i; s++)
          for (var o = e.layoutNodes[e.idToIndex[n[s]]], l = s + 1; l < i; l++) {
            var u = e.layoutNodes[e.idToIndex[n[l]]];
            Lg(o, u, e, r);
          }
    }, vu = function(e) {
      return -e + 2 * e * Math.random();
    }, Lg = function(e, r, a, n) {
      var i = e.cmptId, s = r.cmptId;
      if (!(i !== s && !a.isCompound)) {
        var o = r.positionX - e.positionX, l = r.positionY - e.positionY, u = 1;
        o === 0 && l === 0 && (o = vu(u), l = vu(u));
        var f = Ag(e, r, o, l);
        if (f > 0)
          var h = n.nodeOverlap * f, c = Math.sqrt(o * o + l * l), d = h * o / c, v = h * l / c;
        else
          var y = ii(e, o, l), p = ii(r, -1 * o, -1 * l), g = p.x - y.x, m = p.y - y.y, b = g * g + m * m, c = Math.sqrt(b), h = (e.nodeRepulsion + r.nodeRepulsion) / b, d = h * g / c, v = h * m / c;
        e.isLocked || (e.offsetX -= d, e.offsetY -= v), r.isLocked || (r.offsetX += d, r.offsetY += v);
      }
    }, Ag = function(e, r, a, n) {
      if (a > 0)
        var i = e.maxX - r.minX;
      else
        var i = r.maxX - e.minX;
      if (n > 0)
        var s = e.maxY - r.minY;
      else
        var s = r.maxY - e.minY;
      return i >= 0 && s >= 0 ? Math.sqrt(i * i + s * s) : 0;
    }, ii = function(e, r, a) {
      var n = e.positionX, i = e.positionY, s = e.height || 1, o = e.width || 1, l = a / r, u = s / o, f = {};
      return r === 0 && 0 < a || r === 0 && 0 > a ? (f.x = n, f.y = i + s / 2, f) : 0 < r && -1 * u <= l && l <= u ? (f.x = n + o / 2, f.y = i + o * a / 2 / r, f) : 0 > r && -1 * u <= l && l <= u ? (f.x = n - o / 2, f.y = i - o * a / 2 / r, f) : 0 < a && (l <= -1 * u || l >= u) ? (f.x = n + s * r / 2 / a, f.y = i + s / 2, f) : (0 > a && (l <= -1 * u || l >= u) && (f.x = n - s * r / 2 / a, f.y = i - s / 2), f);
    }, Og = function(e, r) {
      for (var a = 0; a < e.edgeSize; a++) {
        var n = e.layoutEdges[a], i = e.idToIndex[n.sourceId], s = e.layoutNodes[i], o = e.idToIndex[n.targetId], l = e.layoutNodes[o], u = l.positionX - s.positionX, f = l.positionY - s.positionY;
        if (!(u === 0 && f === 0)) {
          var h = ii(s, u, f), c = ii(l, -1 * u, -1 * f), d = c.x - h.x, v = c.y - h.y, y = Math.sqrt(d * d + v * v), p = Math.pow(n.idealLength - y, 2) / n.elasticity;
          if (y !== 0)
            var g = p * d / y, m = p * v / y;
          else
            var g = 0, m = 0;
          s.isLocked || (s.offsetX += g, s.offsetY += m), l.isLocked || (l.offsetX -= g, l.offsetY -= m);
        }
      }
    }, Mg = function(e, r) {
      if (r.gravity !== 0)
        for (var a = 1, n = 0; n < e.graphSet.length; n++) {
          var i = e.graphSet[n], s = i.length;
          if (n === 0)
            var o = e.clientHeight / 2, l = e.clientWidth / 2;
          else
            var u = e.layoutNodes[e.idToIndex[i[0]]], f = e.layoutNodes[e.idToIndex[u.parentId]], o = f.positionX, l = f.positionY;
          for (var h = 0; h < s; h++) {
            var c = e.layoutNodes[e.idToIndex[i[h]]];
            if (!c.isLocked) {
              var d = o - c.positionX, v = l - c.positionY, y = Math.sqrt(d * d + v * v);
              if (y > a) {
                var p = r.gravity * d / y, g = r.gravity * v / y;
                c.offsetX += p, c.offsetY += g;
              }
            }
          }
        }
    }, Ng = function(e, r) {
      var a = [], n = 0, i = -1;
      for (a.push.apply(a, e.graphSet[0]), i += e.graphSet[0].length; n <= i; ) {
        var s = a[n++], o = e.idToIndex[s], l = e.layoutNodes[o], u = l.children;
        if (0 < u.length && !l.isLocked) {
          for (var f = l.offsetX, h = l.offsetY, c = 0; c < u.length; c++) {
            var d = e.layoutNodes[e.idToIndex[u[c]]];
            d.offsetX += f, d.offsetY += h, a[++i] = u[c];
          }
          l.offsetX = 0, l.offsetY = 0;
        }
      }
    }, Ig = function(e, r) {
      for (var a = 0; a < e.nodeSize; a++) {
        var n = e.layoutNodes[a];
        0 < n.children.length && (n.maxX = void 0, n.minX = void 0, n.maxY = void 0, n.minY = void 0);
      }
      for (var a = 0; a < e.nodeSize; a++) {
        var n = e.layoutNodes[a];
        if (!(0 < n.children.length || n.isLocked)) {
          var i = Rg(n.offsetX, n.offsetY, e.temperature);
          n.positionX += i.x, n.positionY += i.y, n.offsetX = 0, n.offsetY = 0, n.minX = n.positionX - n.width, n.maxX = n.positionX + n.width, n.minY = n.positionY - n.height, n.maxY = n.positionY + n.height, kg(n, e);
        }
      }
      for (var a = 0; a < e.nodeSize; a++) {
        var n = e.layoutNodes[a];
        0 < n.children.length && !n.isLocked && (n.positionX = (n.maxX + n.minX) / 2, n.positionY = (n.maxY + n.minY) / 2, n.width = n.maxX - n.minX, n.height = n.maxY - n.minY);
      }
    }, Rg = function(e, r, a) {
      var n = Math.sqrt(e * e + r * r);
      if (n > a)
        var i = {
          x: a * e / n,
          y: a * r / n
        };
      else
        var i = {
          x: e,
          y: r
        };
      return i;
    }, kg = function t(e, r) {
      var a = e.parentId;
      if (a != null) {
        var n = r.layoutNodes[r.idToIndex[a]], i = !1;
        if ((n.maxX == null || e.maxX + n.padRight > n.maxX) && (n.maxX = e.maxX + n.padRight, i = !0), (n.minX == null || e.minX - n.padLeft < n.minX) && (n.minX = e.minX - n.padLeft, i = !0), (n.maxY == null || e.maxY + n.padBottom > n.maxY) && (n.maxY = e.maxY + n.padBottom, i = !0), (n.minY == null || e.minY - n.padTop < n.minY) && (n.minY = e.minY - n.padTop, i = !0), i)
          return t(n, r);
      }
    }, du = function(e, r) {
      for (var a = e.layoutNodes, n = [], i = 0; i < a.length; i++) {
        var s = a[i], o = s.cmptId, l = n[o] = n[o] || [];
        l.push(s);
      }
      for (var u = 0, i = 0; i < n.length; i++) {
        var f = n[i];
        if (!!f) {
          f.x1 = 1 / 0, f.x2 = -1 / 0, f.y1 = 1 / 0, f.y2 = -1 / 0;
          for (var h = 0; h < f.length; h++) {
            var c = f[h];
            f.x1 = Math.min(f.x1, c.positionX - c.width / 2), f.x2 = Math.max(f.x2, c.positionX + c.width / 2), f.y1 = Math.min(f.y1, c.positionY - c.height / 2), f.y2 = Math.max(f.y2, c.positionY + c.height / 2);
          }
          f.w = f.x2 - f.x1, f.h = f.y2 - f.y1, u += f.w * f.h;
        }
      }
      n.sort(function(m, b) {
        return b.w * b.h - m.w * m.h;
      });
      for (var d = 0, v = 0, y = 0, p = 0, g = Math.sqrt(u) * e.clientWidth / e.clientHeight, i = 0; i < n.length; i++) {
        var f = n[i];
        if (!!f) {
          for (var h = 0; h < f.length; h++) {
            var c = f[h];
            c.isLocked || (c.positionX += d - f.x1, c.positionY += v - f.y1);
          }
          d += f.w + r.componentSpacing, y += f.w + r.componentSpacing, p = Math.max(p, f.h), y > g && (v += p + r.componentSpacing, d = 0, y = 0, p = 0);
        }
      }
    }, Pg = {
      fit: !0,
      padding: 30,
      boundingBox: void 0,
      avoidOverlap: !0,
      avoidOverlapPadding: 10,
      nodeDimensionsIncludeLabels: !1,
      spacingFactor: void 0,
      condense: !1,
      rows: void 0,
      cols: void 0,
      position: function(e) {
      },
      sort: void 0,
      animate: !1,
      animationDuration: 500,
      animationEasing: void 0,
      animateFilter: function(e, r) {
        return !0;
      },
      ready: void 0,
      stop: void 0,
      transform: function(e, r) {
        return r;
      }
    };
    function gu(t) {
      this.options = Qe({}, Pg, t);
    }
    gu.prototype.run = function() {
      var t = this.options, e = t, r = t.cy, a = e.eles, n = a.nodes().not(":parent");
      e.sort && (n = n.sort(e.sort));
      var i = Kt(e.boundingBox ? e.boundingBox : {
        x1: 0,
        y1: 0,
        w: r.width(),
        h: r.height()
      });
      if (i.h === 0 || i.w === 0)
        a.nodes().layoutPositions(this, e, function(be) {
          return {
            x: i.x1,
            y: i.y1
          };
        });
      else {
        var s = n.size(), o = Math.sqrt(s * i.h / i.w), l = Math.round(o), u = Math.round(i.w / i.h * o), f = function(De) {
          if (De == null)
            return Math.min(l, u);
          var Le = Math.min(l, u);
          Le == l ? l = De : u = De;
        }, h = function(De) {
          if (De == null)
            return Math.max(l, u);
          var Le = Math.max(l, u);
          Le == l ? l = De : u = De;
        }, c = e.rows, d = e.cols != null ? e.cols : e.columns;
        if (c != null && d != null)
          l = c, u = d;
        else if (c != null && d == null)
          l = c, u = Math.ceil(s / l);
        else if (c == null && d != null)
          u = d, l = Math.ceil(s / u);
        else if (u * l > s) {
          var v = f(), y = h();
          (v - 1) * y >= s ? f(v - 1) : (y - 1) * v >= s && h(y - 1);
        } else
          for (; u * l < s; ) {
            var p = f(), g = h();
            (g + 1) * p >= s ? h(g + 1) : f(p + 1);
          }
        var m = i.w / u, b = i.h / l;
        if (e.condense && (m = 0, b = 0), e.avoidOverlap)
          for (var E = 0; E < n.length; E++) {
            var M = n[E], S = M._private.position;
            (S.x == null || S.y == null) && (S.x = 0, S.y = 0);
            var x = M.layoutDimensions(e), I = e.avoidOverlapPadding, A = x.w + I, z = x.h + I;
            m = Math.max(m, A), b = Math.max(b, z);
          }
        for (var F = {}, G = function(De, Le) {
          return !!F["c-" + De + "-" + Le];
        }, X = function(De, Le) {
          F["c-" + De + "-" + Le] = !0;
        }, P = 0, Q = 0, W = function() {
          Q++, Q >= u && (Q = 0, P++);
        }, Z = {}, re = 0; re < n.length; re++) {
          var le = n[re], ve = e.position(le);
          if (ve && (ve.row !== void 0 || ve.col !== void 0)) {
            var se = {
              row: ve.row,
              col: ve.col
            };
            if (se.col === void 0)
              for (se.col = 0; G(se.row, se.col); )
                se.col++;
            else if (se.row === void 0)
              for (se.row = 0; G(se.row, se.col); )
                se.row++;
            Z[le.id()] = se, X(se.row, se.col);
          }
        }
        var ie = function(De, Le) {
          var Ae, Me;
          if (De.locked() || De.isParent())
            return !1;
          var Ee = Z[De.id()];
          if (Ee)
            Ae = Ee.col * m + m / 2 + i.x1, Me = Ee.row * b + b / 2 + i.y1;
          else {
            for (; G(P, Q); )
              W();
            Ae = Q * m + m / 2 + i.x1, Me = P * b + b / 2 + i.y1, X(P, Q), W();
          }
          return {
            x: Ae,
            y: Me
          };
        };
        n.layoutPositions(this, e, ie);
      }
      return this;
    };
    var Bg = {
      ready: function() {
      },
      stop: function() {
      }
    };
    function Wi(t) {
      this.options = Qe({}, Bg, t);
    }
    Wi.prototype.run = function() {
      var t = this.options, e = t.eles, r = this;
      return t.cy, r.emit("layoutstart"), e.nodes().positions(function() {
        return {
          x: 0,
          y: 0
        };
      }), r.one("layoutready", t.ready), r.emit("layoutready"), r.one("layoutstop", t.stop), r.emit("layoutstop"), this;
    }, Wi.prototype.stop = function() {
      return this;
    };
    var Fg = {
      positions: void 0,
      zoom: void 0,
      pan: void 0,
      fit: !0,
      padding: 30,
      spacingFactor: void 0,
      animate: !1,
      animationDuration: 500,
      animationEasing: void 0,
      animateFilter: function(e, r) {
        return !0;
      },
      ready: void 0,
      stop: void 0,
      transform: function(e, r) {
        return r;
      }
    };
    function pu(t) {
      this.options = Qe({}, Fg, t);
    }
    pu.prototype.run = function() {
      var t = this.options, e = t.eles, r = e.nodes(), a = te(t.positions);
      function n(i) {
        if (t.positions == null)
          return Uf(i.position());
        if (a)
          return t.positions(i);
        var s = t.positions[i._private.data.id];
        return s == null ? null : s;
      }
      return r.layoutPositions(this, t, function(i, s) {
        var o = n(i);
        return i.locked() || o == null ? !1 : o;
      }), this;
    };
    var Gg = {
      fit: !0,
      padding: 30,
      boundingBox: void 0,
      animate: !1,
      animationDuration: 500,
      animationEasing: void 0,
      animateFilter: function(e, r) {
        return !0;
      },
      ready: void 0,
      stop: void 0,
      transform: function(e, r) {
        return r;
      }
    };
    function yu(t) {
      this.options = Qe({}, Gg, t);
    }
    yu.prototype.run = function() {
      var t = this.options, e = t.cy, r = t.eles, a = Kt(t.boundingBox ? t.boundingBox : {
        x1: 0,
        y1: 0,
        w: e.width(),
        h: e.height()
      }), n = function(s, o) {
        return {
          x: a.x1 + Math.round(Math.random() * a.w),
          y: a.y1 + Math.round(Math.random() * a.h)
        };
      };
      return r.nodes().layoutPositions(this, t, n), this;
    };
    var zg = [{
      name: "breadthfirst",
      impl: lu
    }, {
      name: "circle",
      impl: fu
    }, {
      name: "concentric",
      impl: hu
    }, {
      name: "cose",
      impl: ni
    }, {
      name: "grid",
      impl: gu
    }, {
      name: "null",
      impl: Wi
    }, {
      name: "preset",
      impl: pu
    }, {
      name: "random",
      impl: yu
    }];
    function mu(t) {
      this.options = t, this.notifications = 0;
    }
    var bu = function() {
    }, Eu = function() {
      throw new Error("A headless instance can not render images");
    };
    mu.prototype = {
      recalculateRenderedStyle: bu,
      notify: function() {
        this.notifications++;
      },
      init: bu,
      isHeadless: function() {
        return !0;
      },
      png: Eu,
      jpg: Eu
    };
    var Ki = {};
    Ki.arrowShapeWidth = 0.3, Ki.registerArrowShapes = function() {
      var t = this.arrowShapes = {}, e = this, r = function(u, f, h, c, d, v, y) {
        var p = d.x - h / 2 - y, g = d.x + h / 2 + y, m = d.y - h / 2 - y, b = d.y + h / 2 + y, E = p <= u && u <= g && m <= f && f <= b;
        return E;
      }, a = function(u, f, h, c, d) {
        var v = u * Math.cos(c) - f * Math.sin(c), y = u * Math.sin(c) + f * Math.cos(c), p = v * h, g = y * h, m = p + d.x, b = g + d.y;
        return {
          x: m,
          y: b
        };
      }, n = function(u, f, h, c) {
        for (var d = [], v = 0; v < u.length; v += 2) {
          var y = u[v], p = u[v + 1];
          d.push(a(y, p, f, h, c));
        }
        return d;
      }, i = function(u) {
        for (var f = [], h = 0; h < u.length; h++) {
          var c = u[h];
          f.push(c.x, c.y);
        }
        return f;
      }, s = function(u) {
        return u.pstyle("width").pfValue * u.pstyle("arrow-scale").pfValue * 2;
      }, o = function(u, f) {
        V(f) && (f = t[f]), t[u] = Qe({
          name: u,
          points: [-0.15, -0.3, 0.15, -0.3, 0.15, 0.3, -0.15, 0.3],
          collide: function(c, d, v, y, p, g) {
            var m = i(n(this.points, v + 2 * g, y, p)), b = Zt(c, d, m);
            return b;
          },
          roughCollide: r,
          draw: function(c, d, v, y) {
            var p = n(this.points, d, v, y);
            e.arrowShapeImpl("polygon")(c, p);
          },
          spacing: function(c) {
            return 0;
          },
          gap: s
        }, f);
      };
      o("none", {
        collide: Cn,
        roughCollide: Cn,
        draw: mi,
        spacing: Ns,
        gap: Ns
      }), o("triangle", {
        points: [-0.15, -0.3, 0, 0, 0.15, -0.3]
      }), o("arrow", "triangle"), o("triangle-backcurve", {
        points: t.triangle.points,
        controlPoint: [0, -0.15],
        roughCollide: r,
        draw: function(u, f, h, c, d) {
          var v = n(this.points, f, h, c), y = this.controlPoint, p = a(y[0], y[1], f, h, c);
          e.arrowShapeImpl(this.name)(u, v, p);
        },
        gap: function(u) {
          return s(u) * 0.8;
        }
      }), o("triangle-tee", {
        points: [0, 0, 0.15, -0.3, -0.15, -0.3, 0, 0],
        pointsTee: [-0.15, -0.4, -0.15, -0.5, 0.15, -0.5, 0.15, -0.4],
        collide: function(u, f, h, c, d, v, y) {
          var p = i(n(this.points, h + 2 * y, c, d)), g = i(n(this.pointsTee, h + 2 * y, c, d)), m = Zt(u, f, p) || Zt(u, f, g);
          return m;
        },
        draw: function(u, f, h, c, d) {
          var v = n(this.points, f, h, c), y = n(this.pointsTee, f, h, c);
          e.arrowShapeImpl(this.name)(u, v, y);
        }
      }), o("circle-triangle", {
        radius: 0.15,
        pointsTr: [0, -0.15, 0.15, -0.45, -0.15, -0.45, 0, -0.15],
        collide: function(u, f, h, c, d, v, y) {
          var p = d, g = Math.pow(p.x - u, 2) + Math.pow(p.y - f, 2) <= Math.pow((h + 2 * y) * this.radius, 2), m = i(n(this.points, h + 2 * y, c, d));
          return Zt(u, f, m) || g;
        },
        draw: function(u, f, h, c, d) {
          var v = n(this.pointsTr, f, h, c);
          e.arrowShapeImpl(this.name)(u, v, c.x, c.y, this.radius * f);
        },
        spacing: function(u) {
          return e.getArrowWidth(u.pstyle("width").pfValue, u.pstyle("arrow-scale").value) * this.radius;
        }
      }), o("triangle-cross", {
        points: [0, 0, 0.15, -0.3, -0.15, -0.3, 0, 0],
        baseCrossLinePts: [
          -0.15,
          -0.4,
          -0.15,
          -0.4,
          0.15,
          -0.4,
          0.15,
          -0.4
        ],
        crossLinePts: function(u, f) {
          var h = this.baseCrossLinePts.slice(), c = f / u, d = 3, v = 5;
          return h[d] = h[d] - c, h[v] = h[v] - c, h;
        },
        collide: function(u, f, h, c, d, v, y) {
          var p = i(n(this.points, h + 2 * y, c, d)), g = i(n(this.crossLinePts(h, v), h + 2 * y, c, d)), m = Zt(u, f, p) || Zt(u, f, g);
          return m;
        },
        draw: function(u, f, h, c, d) {
          var v = n(this.points, f, h, c), y = n(this.crossLinePts(f, d), f, h, c);
          e.arrowShapeImpl(this.name)(u, v, y);
        }
      }), o("vee", {
        points: [-0.15, -0.3, 0, 0, 0.15, -0.3, 0, -0.15],
        gap: function(u) {
          return s(u) * 0.525;
        }
      }), o("circle", {
        radius: 0.15,
        collide: function(u, f, h, c, d, v, y) {
          var p = d, g = Math.pow(p.x - u, 2) + Math.pow(p.y - f, 2) <= Math.pow((h + 2 * y) * this.radius, 2);
          return g;
        },
        draw: function(u, f, h, c, d) {
          e.arrowShapeImpl(this.name)(u, c.x, c.y, this.radius * f);
        },
        spacing: function(u) {
          return e.getArrowWidth(u.pstyle("width").pfValue, u.pstyle("arrow-scale").value) * this.radius;
        }
      }), o("tee", {
        points: [-0.15, 0, -0.15, -0.1, 0.15, -0.1, 0.15, 0],
        spacing: function(u) {
          return 1;
        },
        gap: function(u) {
          return 1;
        }
      }), o("square", {
        points: [-0.15, 0, 0.15, 0, 0.15, -0.3, -0.15, -0.3]
      }), o("diamond", {
        points: [-0.15, -0.15, 0, -0.3, 0.15, -0.15, 0, 0],
        gap: function(u) {
          return u.pstyle("width").pfValue * u.pstyle("arrow-scale").value;
        }
      }), o("chevron", {
        points: [0, 0, -0.15, -0.15, -0.1, -0.2, 0, -0.1, 0.1, -0.2, 0.15, -0.15],
        gap: function(u) {
          return 0.95 * u.pstyle("width").pfValue * u.pstyle("arrow-scale").value;
        }
      });
    };
    var Jr = {};
    Jr.projectIntoViewport = function(t, e) {
      var r = this.cy, a = this.findContainerClientCoords(), n = a[0], i = a[1], s = a[4], o = r.pan(), l = r.zoom(), u = ((t - n) / s - o.x) / l, f = ((e - i) / s - o.y) / l;
      return [u, f];
    }, Jr.findContainerClientCoords = function() {
      if (this.containerBB)
        return this.containerBB;
      var t = this.container, e = t.getBoundingClientRect(), r = this.cy.window().getComputedStyle(t), a = function(g) {
        return parseFloat(r.getPropertyValue(g));
      }, n = {
        left: a("padding-left"),
        right: a("padding-right"),
        top: a("padding-top"),
        bottom: a("padding-bottom")
      }, i = {
        left: a("border-left-width"),
        right: a("border-right-width"),
        top: a("border-top-width"),
        bottom: a("border-bottom-width")
      }, s = t.clientWidth, o = t.clientHeight, l = n.left + n.right, u = n.top + n.bottom, f = i.left + i.right, h = e.width / (s + f), c = s - l, d = o - u, v = e.left + n.left + i.left, y = e.top + n.top + i.top;
      return this.containerBB = [v, y, c, d, h];
    }, Jr.invalidateContainerClientCoordsCache = function() {
      this.containerBB = null;
    }, Jr.findNearestElement = function(t, e, r, a) {
      return this.findNearestElements(t, e, r, a)[0];
    }, Jr.findNearestElements = function(t, e, r, a) {
      var n = this, i = this, s = i.getCachedZSortedEles(), o = [], l = i.cy.zoom(), u = i.cy.hasCompoundNodes(), f = (a ? 24 : 8) / l, h = (a ? 8 : 2) / l, c = (a ? 8 : 2) / l, d = 1 / 0, v, y;
      r && (s = s.interactive);
      function p(x, I) {
        if (x.isNode()) {
          if (y)
            return;
          y = x, o.push(x);
        }
        if (x.isEdge() && (I == null || I < d))
          if (v) {
            if (v.pstyle("z-compound-depth").value === x.pstyle("z-compound-depth").value && v.pstyle("z-compound-depth").value === x.pstyle("z-compound-depth").value) {
              for (var A = 0; A < o.length; A++)
                if (o[A].isEdge()) {
                  o[A] = x, v = x, d = I != null ? I : d;
                  break;
                }
            }
          } else
            o.push(x), v = x, d = I != null ? I : d;
      }
      function g(x) {
        var I = x.outerWidth() + 2 * h, A = x.outerHeight() + 2 * h, z = I / 2, F = A / 2, G = x.position(), X = x.pstyle("corner-radius").value === "auto" ? "auto" : x.pstyle("corner-radius").pfValue, P = x._private.rscratch;
        if (G.x - z <= t && t <= G.x + z && G.y - F <= e && e <= G.y + F) {
          var Q = i.nodeShapes[n.getNodeShape(x)];
          if (Q.checkPoint(t, e, 0, I, A, G.x, G.y, X, P))
            return p(x, 0), !0;
        }
      }
      function m(x) {
        var I = x._private, A = I.rscratch, z = x.pstyle("width").pfValue, F = x.pstyle("arrow-scale").value, G = z / 2 + f, X = G * G, P = G * 2, re = I.source, le = I.target, Q;
        if (A.edgeType === "segments" || A.edgeType === "straight" || A.edgeType === "haystack") {
          for (var W = A.allpts, Z = 0; Z + 3 < W.length; Z += 2)
            if (eh(t, e, W[Z], W[Z + 1], W[Z + 2], W[Z + 3], P) && X > (Q = ih(t, e, W[Z], W[Z + 1], W[Z + 2], W[Z + 3])))
              return p(x, Q), !0;
        } else if (A.edgeType === "bezier" || A.edgeType === "multibezier" || A.edgeType === "self" || A.edgeType === "compound") {
          for (var W = A.allpts, Z = 0; Z + 5 < A.allpts.length; Z += 4)
            if (th(t, e, W[Z], W[Z + 1], W[Z + 2], W[Z + 3], W[Z + 4], W[Z + 5], P) && X > (Q = nh(t, e, W[Z], W[Z + 1], W[Z + 2], W[Z + 3], W[Z + 4], W[Z + 5])))
              return p(x, Q), !0;
        }
        for (var re = re || I.source, le = le || I.target, ve = n.getArrowWidth(z, F), se = [{
          name: "source",
          x: A.arrowStartX,
          y: A.arrowStartY,
          angle: A.srcArrowAngle
        }, {
          name: "target",
          x: A.arrowEndX,
          y: A.arrowEndY,
          angle: A.tgtArrowAngle
        }, {
          name: "mid-source",
          x: A.midX,
          y: A.midY,
          angle: A.midsrcArrowAngle
        }, {
          name: "mid-target",
          x: A.midX,
          y: A.midY,
          angle: A.midtgtArrowAngle
        }], Z = 0; Z < se.length; Z++) {
          var ie = se[Z], be = i.arrowShapes[x.pstyle(ie.name + "-arrow-shape").value], De = x.pstyle("width").pfValue;
          if (be.roughCollide(t, e, ve, ie.angle, {
            x: ie.x,
            y: ie.y
          }, De, f) && be.collide(t, e, ve, ie.angle, {
            x: ie.x,
            y: ie.y
          }, De, f))
            return p(x), !0;
        }
        u && o.length > 0 && (g(re), g(le));
      }
      function b(x, I, A) {
        return ur(x, I, A);
      }
      function E(x, I) {
        var A = x._private, z = c, F;
        I ? F = I + "-" : F = "", x.boundingBox();
        var G = A.labelBounds[I || "main"], X = x.pstyle(F + "label").value, P = x.pstyle("text-events").strValue === "yes";
        if (!(!P || !X)) {
          var Q = b(A.rscratch, "labelX", I), W = b(A.rscratch, "labelY", I), Z = b(A.rscratch, "labelAngle", I), re = x.pstyle(F + "text-margin-x").pfValue, le = x.pstyle(F + "text-margin-y").pfValue, ve = G.x1 - z - re, se = G.x2 + z - re, ie = G.y1 - z - le, be = G.y2 + z - le;
          if (Z) {
            var De = Math.cos(Z), Le = Math.sin(Z), Ae = function(He, ke) {
              return He = He - Q, ke = ke - W, {
                x: He * De - ke * Le + Q,
                y: He * Le + ke * De + W
              };
            }, Me = Ae(ve, ie), Ee = Ae(ve, be), ne = Ae(se, ie), xe = Ae(se, be), Te = [
              Me.x + re,
              Me.y + le,
              ne.x + re,
              ne.y + le,
              xe.x + re,
              xe.y + le,
              Ee.x + re,
              Ee.y + le
            ];
            if (Zt(t, e, Te))
              return p(x), !0;
          } else if (va(G, t, e))
            return p(x), !0;
        }
      }
      for (var M = s.length - 1; M >= 0; M--) {
        var S = s[M];
        S.isNode() ? g(S) || E(S) : m(S) || E(S) || E(S, "source") || E(S, "target");
      }
      return o;
    }, Jr.getAllInBox = function(t, e, r, a) {
      var n = this.getCachedZSortedEles().interactive, i = [], s = Math.min(t, r), o = Math.max(t, r), l = Math.min(e, a), u = Math.max(e, a);
      t = s, r = o, e = l, a = u;
      for (var f = Kt({
        x1: t,
        y1: e,
        x2: r,
        y2: a
      }), h = 0; h < n.length; h++) {
        var c = n[h];
        if (c.isNode()) {
          var d = c, v = d.boundingBox({
            includeNodes: !0,
            includeEdges: !1,
            includeLabels: !1
          });
          xi(f, v) && !Vs(v, f) && i.push(d);
        } else {
          var y = c, p = y._private, g = p.rscratch;
          if (g.startX != null && g.startY != null && !va(f, g.startX, g.startY) || g.endX != null && g.endY != null && !va(f, g.endX, g.endY))
            continue;
          if (g.edgeType === "bezier" || g.edgeType === "multibezier" || g.edgeType === "self" || g.edgeType === "compound" || g.edgeType === "segments" || g.edgeType === "haystack") {
            for (var m = p.rstyle.bezierPts || p.rstyle.linePts || p.rstyle.haystackPts, b = !0, E = 0; E < m.length; E++)
              if (!jf(f, m[E])) {
                b = !1;
                break;
              }
            b && i.push(y);
          } else
            (g.edgeType === "haystack" || g.edgeType === "straight") && i.push(y);
        }
      }
      return i;
    };
    var si = {};
    si.calculateArrowAngles = function(t) {
      var e = t._private.rscratch, r = e.edgeType === "haystack", a = e.edgeType === "bezier", n = e.edgeType === "multibezier", i = e.edgeType === "segments", s = e.edgeType === "compound", o = e.edgeType === "self", l, u, f, h, c, d, g, m;
      if (r ? (f = e.haystackPts[0], h = e.haystackPts[1], c = e.haystackPts[2], d = e.haystackPts[3]) : (f = e.arrowStartX, h = e.arrowStartY, c = e.arrowEndX, d = e.arrowEndY), g = e.midX, m = e.midY, i)
        l = f - e.segpts[0], u = h - e.segpts[1];
      else if (n || s || o || a) {
        var v = e.allpts, y = Mt(v[0], v[2], v[4], 0.1), p = Mt(v[1], v[3], v[5], 0.1);
        l = f - y, u = h - p;
      } else
        l = f - g, u = h - m;
      e.srcArrowAngle = Ln(l, u);
      var g = e.midX, m = e.midY;
      if (r && (g = (f + c) / 2, m = (h + d) / 2), l = c - f, u = d - h, i) {
        var v = e.allpts;
        if (v.length / 2 % 2 === 0) {
          var b = v.length / 2, E = b - 2;
          l = v[b] - v[E], u = v[b + 1] - v[E + 1];
        } else if (e.isRound)
          l = e.midVector[1], u = -e.midVector[0];
        else {
          var b = v.length / 2 - 1, E = b - 2;
          l = v[b] - v[E], u = v[b + 1] - v[E + 1];
        }
      } else if (n || s || o) {
        var v = e.allpts, M = e.ctrlpts, S, x, I, A;
        if (M.length / 2 % 2 === 0) {
          var z = v.length / 2 - 1, F = z + 2, G = F + 2;
          S = Mt(v[z], v[F], v[G], 0), x = Mt(v[z + 1], v[F + 1], v[G + 1], 0), I = Mt(v[z], v[F], v[G], 1e-4), A = Mt(v[z + 1], v[F + 1], v[G + 1], 1e-4);
        } else {
          var F = v.length / 2 - 1, z = F - 2, G = F + 2;
          S = Mt(v[z], v[F], v[G], 0.4999), x = Mt(v[z + 1], v[F + 1], v[G + 1], 0.4999), I = Mt(v[z], v[F], v[G], 0.5), A = Mt(v[z + 1], v[F + 1], v[G + 1], 0.5);
        }
        l = I - S, u = A - x;
      }
      if (e.midtgtArrowAngle = Ln(l, u), e.midDispX = l, e.midDispY = u, l *= -1, u *= -1, i) {
        var v = e.allpts;
        if (v.length / 2 % 2 !== 0) {
          if (!e.isRound) {
            var b = v.length / 2 - 1, X = b + 2;
            l = -(v[X] - v[b]), u = -(v[X + 1] - v[b + 1]);
          }
        }
      }
      if (e.midsrcArrowAngle = Ln(l, u), i)
        l = c - e.segpts[e.segpts.length - 2], u = d - e.segpts[e.segpts.length - 1];
      else if (n || s || o || a) {
        var v = e.allpts, P = v.length, y = Mt(v[P - 6], v[P - 4], v[P - 2], 0.9), p = Mt(v[P - 5], v[P - 3], v[P - 1], 0.9);
        l = c - y, u = d - p;
      } else
        l = c - g, u = d - m;
      e.tgtArrowAngle = Ln(l, u);
    }, si.getArrowWidth = si.getArrowHeight = function(t, e) {
      var r = this.arrowWidthCache = this.arrowWidthCache || {}, a = r[t + ", " + e];
      return a || (a = Math.max(Math.pow(t * 13.37, 0.9), 29) * e, r[t + ", " + e] = a, a);
    };
    var Zi, Qi, mr = {}, nr = {}, wu, xu, jr, oi, Lr, ea, ta, br, Oa, ui, Tu, Cu, Ji, ji, Du, Su = function(e, r, a) {
      a.x = r.x - e.x, a.y = r.y - e.y, a.len = Math.sqrt(a.x * a.x + a.y * a.y), a.nx = a.x / a.len, a.ny = a.y / a.len, a.ang = Math.atan2(a.ny, a.nx);
    }, Vg = function(e, r) {
      r.x = e.x * -1, r.y = e.y * -1, r.nx = e.nx * -1, r.ny = e.ny * -1, r.ang = e.ang > 0 ? -(Math.PI - e.ang) : Math.PI + e.ang;
    }, Ug = function(e, r, a, n, i) {
      if (e !== Du ? Su(r, e, mr) : Vg(nr, mr), Su(r, a, nr), wu = mr.nx * nr.ny - mr.ny * nr.nx, xu = mr.nx * nr.nx - mr.ny * -nr.ny, Lr = Math.asin(Math.max(-1, Math.min(1, wu))), Math.abs(Lr) < 1e-6) {
        Zi = r.x, Qi = r.y, ta = Oa = 0;
        return;
      }
      jr = 1, oi = !1, xu < 0 ? Lr < 0 ? Lr = Math.PI + Lr : (Lr = Math.PI - Lr, jr = -1, oi = !0) : Lr > 0 && (jr = -1, oi = !0), r.radius !== void 0 ? Oa = r.radius : Oa = n, ea = Lr / 2, ui = Math.min(mr.len / 2, nr.len / 2), i ? (br = Math.abs(Math.cos(ea) * Oa / Math.sin(ea)), br > ui ? (br = ui, ta = Math.abs(br * Math.sin(ea) / Math.cos(ea))) : ta = Oa) : (br = Math.min(ui, Oa), ta = Math.abs(br * Math.sin(ea) / Math.cos(ea))), Ji = r.x + nr.nx * br, ji = r.y + nr.ny * br, Zi = Ji - nr.ny * ta * jr, Qi = ji + nr.nx * ta * jr, Tu = r.x + mr.nx * br, Cu = r.y + mr.ny * br, Du = r;
    };
    function Lu(t, e) {
      e.radius === 0 ? t.lineTo(e.cx, e.cy) : t.arc(e.cx, e.cy, e.radius, e.startAngle, e.endAngle, e.counterClockwise);
    }
    function es(t, e, r, a) {
      var n = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0;
      return a === 0 || e.radius === 0 ? {
        cx: e.x,
        cy: e.y,
        radius: 0,
        startX: e.x,
        startY: e.y,
        stopX: e.x,
        stopY: e.y,
        startAngle: void 0,
        endAngle: void 0,
        counterClockwise: void 0
      } : (Ug(t, e, r, a, n), {
        cx: Zi,
        cy: Qi,
        radius: ta,
        startX: Tu,
        startY: Cu,
        stopX: Ji,
        stopY: ji,
        startAngle: mr.ang + Math.PI / 2 * jr,
        endAngle: nr.ang - Math.PI / 2 * jr,
        counterClockwise: oi
      });
    }
    var _t = {};
    _t.findMidptPtsEtc = function(t, e) {
      var r = e.posPts, a = e.intersectionPts, n = e.vectorNormInverse, i, s = t.pstyle("source-endpoint"), o = t.pstyle("target-endpoint"), l = s.units != null && o.units != null, u = function(M, S, x, I) {
        var A = I - S, z = x - M, F = Math.sqrt(z * z + A * A);
        return {
          x: -A / F,
          y: z / F
        };
      }, f = t.pstyle("edge-distances").value;
      switch (f) {
        case "node-position":
          i = r;
          break;
        case "intersection":
          i = a;
          break;
        case "endpoints": {
          if (l) {
            var h = this.manualEndptToPx(t.source()[0], s), c = w(h, 2), d = c[0], v = c[1], y = this.manualEndptToPx(t.target()[0], o), p = w(y, 2), g = p[0], m = p[1], b = {
              x1: d,
              y1: v,
              x2: g,
              y2: m
            };
            n = u(d, v, g, m), i = b;
          } else
            ht("Edge ".concat(t.id(), " has edge-distances:endpoints specified without manual endpoints specified via source-endpoint and target-endpoint.  Falling back on edge-distances:intersection (default).")), i = a;
          break;
        }
      }
      return {
        midptPts: i,
        vectorNormInverse: n
      };
    }, _t.findHaystackPoints = function(t) {
      for (var e = 0; e < t.length; e++) {
        var r = t[e], a = r._private, n = a.rscratch;
        if (!n.haystack) {
          var i = Math.random() * 2 * Math.PI;
          n.source = {
            x: Math.cos(i),
            y: Math.sin(i)
          }, i = Math.random() * 2 * Math.PI, n.target = {
            x: Math.cos(i),
            y: Math.sin(i)
          };
        }
        var s = a.source, o = a.target, l = s.position(), u = o.position(), f = s.width(), h = o.width(), c = s.height(), d = o.height(), v = r.pstyle("haystack-radius").value, y = v / 2;
        n.haystackPts = n.allpts = [n.source.x * f * y + l.x, n.source.y * c * y + l.y, n.target.x * h * y + u.x, n.target.y * d * y + u.y], n.midX = (n.allpts[0] + n.allpts[2]) / 2, n.midY = (n.allpts[1] + n.allpts[3]) / 2, n.edgeType = "haystack", n.haystack = !0, this.storeEdgeProjections(r), this.calculateArrowAngles(r), this.recalculateEdgeLabelProjections(r), this.calculateLabelAngles(r);
      }
    }, _t.findSegmentsPoints = function(t, e) {
      var r = t._private.rscratch, a = t.pstyle("segment-weights"), n = t.pstyle("segment-distances"), i = t.pstyle("segment-radii"), s = t.pstyle("radius-type"), o = Math.min(a.pfValue.length, n.pfValue.length), l = i.pfValue[i.pfValue.length - 1], u = s.pfValue[s.pfValue.length - 1];
      r.edgeType = "segments", r.segpts = [], r.radii = [], r.isArcRadius = [];
      for (var f = 0; f < o; f++) {
        var h = a.pfValue[f], c = n.pfValue[f], d = 1 - h, v = h, y = this.findMidptPtsEtc(t, e), p = y.midptPts, g = y.vectorNormInverse, m = {
          x: p.x1 * d + p.x2 * v,
          y: p.y1 * d + p.y2 * v
        };
        r.segpts.push(m.x + g.x * c, m.y + g.y * c), r.radii.push(i.pfValue[f] !== void 0 ? i.pfValue[f] : l), r.isArcRadius.push((s.pfValue[f] !== void 0 ? s.pfValue[f] : u) === "arc-radius");
      }
    }, _t.findLoopPoints = function(t, e, r, a) {
      var n = t._private.rscratch, i = e.dirCounts, s = e.srcPos, o = t.pstyle("control-point-distances"), l = o ? o.pfValue[0] : void 0, u = t.pstyle("loop-direction").pfValue, f = t.pstyle("loop-sweep").pfValue, h = t.pstyle("control-point-step-size").pfValue;
      n.edgeType = "self";
      var c = r, d = h;
      a && (c = 0, d = l);
      var v = u - Math.PI / 2, y = v - f / 2, p = v + f / 2, g = String(u + "_" + f);
      c = i[g] === void 0 ? i[g] = 0 : ++i[g], n.ctrlpts = [s.x + Math.cos(y) * 1.4 * d * (c / 3 + 1), s.y + Math.sin(y) * 1.4 * d * (c / 3 + 1), s.x + Math.cos(p) * 1.4 * d * (c / 3 + 1), s.y + Math.sin(p) * 1.4 * d * (c / 3 + 1)];
    }, _t.findCompoundLoopPoints = function(t, e, r, a) {
      var n = t._private.rscratch;
      n.edgeType = "compound";
      var i = e.srcPos, s = e.tgtPos, o = e.srcW, l = e.srcH, u = e.tgtW, f = e.tgtH, h = t.pstyle("control-point-step-size").pfValue, c = t.pstyle("control-point-distances"), d = c ? c.pfValue[0] : void 0, v = r, y = h;
      a && (v = 0, y = d);
      var p = 50, g = {
        x: i.x - o / 2,
        y: i.y - l / 2
      }, m = {
        x: s.x - u / 2,
        y: s.y - f / 2
      }, b = {
        x: Math.min(g.x, m.x),
        y: Math.min(g.y, m.y)
      }, E = 0.5, M = Math.max(E, Math.log(o * 0.01)), S = Math.max(E, Math.log(u * 0.01));
      n.ctrlpts = [b.x, b.y - (1 + Math.pow(p, 1.12) / 100) * y * (v / 3 + 1) * M, b.x - (1 + Math.pow(p, 1.12) / 100) * y * (v / 3 + 1) * S, b.y];
    }, _t.findStraightEdgePoints = function(t) {
      t._private.rscratch.edgeType = "straight";
    }, _t.findBezierPoints = function(t, e, r, a, n) {
      var i = t._private.rscratch, s = t.pstyle("control-point-step-size").pfValue, o = t.pstyle("control-point-distances"), l = t.pstyle("control-point-weights"), u = o && l ? Math.min(o.value.length, l.value.length) : 1, f = o ? o.pfValue[0] : void 0, h = l.value[0], c = a;
      i.edgeType = c ? "multibezier" : "bezier", i.ctrlpts = [];
      for (var d = 0; d < u; d++) {
        var v = (0.5 - e.eles.length / 2 + r) * s * (n ? -1 : 1), y = void 0, p = Fs(v);
        c && (f = o ? o.pfValue[d] : s, h = l.value[d]), a ? y = f : y = f !== void 0 ? p * f : void 0;
        var g = y !== void 0 ? y : v, m = 1 - h, b = h, E = this.findMidptPtsEtc(t, e), M = E.midptPts, S = E.vectorNormInverse, x = {
          x: M.x1 * m + M.x2 * b,
          y: M.y1 * m + M.y2 * b
        };
        i.ctrlpts.push(x.x + S.x * g, x.y + S.y * g);
      }
    }, _t.findTaxiPoints = function(t, e) {
      var r = t._private.rscratch;
      r.edgeType = "segments";
      var a = "vertical", n = "horizontal", i = "leftward", s = "rightward", o = "downward", l = "upward", u = "auto", f = e.posPts, h = e.srcW, c = e.srcH, d = e.tgtW, v = e.tgtH, y = t.pstyle("edge-distances").value, p = y !== "node-position", g = t.pstyle("taxi-direction").value, m = g, b = t.pstyle("taxi-turn"), E = b.units === "%", M = b.pfValue, S = M < 0, x = t.pstyle("taxi-turn-min-distance").pfValue, I = p ? (h + d) / 2 : 0, A = p ? (c + v) / 2 : 0, z = f.x2 - f.x1, F = f.y2 - f.y1, G = function(Ke, Ze) {
        return Ke > 0 ? Math.max(Ke - Ze, 0) : Math.min(Ke + Ze, 0);
      }, X = G(z, I), P = G(F, A), Q = !1;
      m === u ? g = Math.abs(X) > Math.abs(P) ? n : a : m === l || m === o ? (g = a, Q = !0) : (m === i || m === s) && (g = n, Q = !0);
      var W = g === a, Z = W ? P : X, re = W ? F : z, le = Fs(re), ve = !1;
      !(Q && (E || S)) && (m === o && re < 0 || m === l && re > 0 || m === i && re > 0 || m === s && re < 0) && (le *= -1, Z = le * Math.abs(Z), ve = !0);
      var se;
      if (E) {
        var ie = M < 0 ? 1 + M : M;
        se = ie * Z;
      } else {
        var be = M < 0 ? Z : 0;
        se = be + M * le;
      }
      var De = function(Ke) {
        return Math.abs(Ke) < x || Math.abs(Ke) >= Math.abs(Z);
      }, Le = De(se), Ae = De(Math.abs(Z) - Math.abs(se)), Me = Le || Ae;
      if (Me && !ve)
        if (W) {
          var Ee = Math.abs(re) <= c / 2, ne = Math.abs(z) <= d / 2;
          if (Ee) {
            var xe = (f.x1 + f.x2) / 2, Te = f.y1, Be = f.y2;
            r.segpts = [xe, Te, xe, Be];
          } else if (ne) {
            var He = (f.y1 + f.y2) / 2, ke = f.x1, Pe = f.x2;
            r.segpts = [ke, He, Pe, He];
          } else
            r.segpts = [f.x1, f.y2];
        } else {
          var Ve = Math.abs(re) <= h / 2, _e = Math.abs(F) <= v / 2;
          if (Ve) {
            var $e = (f.y1 + f.y2) / 2, qe = f.x1, vt = f.x2;
            r.segpts = [qe, $e, vt, $e];
          } else if (_e) {
            var it = (f.x1 + f.x2) / 2, et = f.y1, ut = f.y2;
            r.segpts = [it, et, it, ut];
          } else
            r.segpts = [f.x2, f.y1];
        }
      else if (W) {
        var Se = f.y1 + se + (p ? c / 2 * le : 0), N = f.x1, oe = f.x2;
        r.segpts = [N, Se, oe, Se];
      } else {
        var Ce = f.x1 + se + (p ? h / 2 * le : 0), ye = f.y1, ge = f.y2;
        r.segpts = [Ce, ye, Ce, ge];
      }
      if (r.isRound) {
        var Re = t.pstyle("taxi-radius").value, me = t.pstyle("radius-type").value[0] === "arc-radius";
        r.radii = new Array(r.segpts.length / 2).fill(Re), r.isArcRadius = new Array(r.segpts.length / 2).fill(me);
      }
    }, _t.tryToCorrectInvalidPoints = function(t, e) {
      var r = t._private.rscratch;
      if (r.edgeType === "bezier") {
        var a = e.srcPos, n = e.tgtPos, i = e.srcW, s = e.srcH, o = e.tgtW, l = e.tgtH, u = e.srcShape, f = e.tgtShape, h = e.srcCornerRadius, c = e.tgtCornerRadius, d = e.srcRs, v = e.tgtRs, y = !R(r.startX) || !R(r.startY), p = !R(r.arrowStartX) || !R(r.arrowStartY), g = !R(r.endX) || !R(r.endY), m = !R(r.arrowEndX) || !R(r.arrowEndY), b = 3, E = this.getArrowWidth(t.pstyle("width").pfValue, t.pstyle("arrow-scale").value) * this.arrowShapeWidth, M = b * E, S = Hr({
          x: r.ctrlpts[0],
          y: r.ctrlpts[1]
        }, {
          x: r.startX,
          y: r.startY
        }), x = S < M, I = Hr({
          x: r.ctrlpts[0],
          y: r.ctrlpts[1]
        }, {
          x: r.endX,
          y: r.endY
        }), A = I < M, z = !1;
        if (y || p || x) {
          z = !0;
          var F = {
            x: r.ctrlpts[0] - a.x,
            y: r.ctrlpts[1] - a.y
          }, G = Math.sqrt(F.x * F.x + F.y * F.y), X = {
            x: F.x / G,
            y: F.y / G
          }, P = Math.max(i, s), Q = {
            x: r.ctrlpts[0] + X.x * 2 * P,
            y: r.ctrlpts[1] + X.y * 2 * P
          }, W = u.intersectLine(a.x, a.y, i, s, Q.x, Q.y, 0, h, d);
          x ? (r.ctrlpts[0] = r.ctrlpts[0] + X.x * (M - S), r.ctrlpts[1] = r.ctrlpts[1] + X.y * (M - S)) : (r.ctrlpts[0] = W[0] + X.x * M, r.ctrlpts[1] = W[1] + X.y * M);
        }
        if (g || m || A) {
          z = !0;
          var Z = {
            x: r.ctrlpts[0] - n.x,
            y: r.ctrlpts[1] - n.y
          }, re = Math.sqrt(Z.x * Z.x + Z.y * Z.y), le = {
            x: Z.x / re,
            y: Z.y / re
          }, ve = Math.max(i, s), se = {
            x: r.ctrlpts[0] + le.x * 2 * ve,
            y: r.ctrlpts[1] + le.y * 2 * ve
          }, ie = f.intersectLine(n.x, n.y, o, l, se.x, se.y, 0, c, v);
          A ? (r.ctrlpts[0] = r.ctrlpts[0] + le.x * (M - I), r.ctrlpts[1] = r.ctrlpts[1] + le.y * (M - I)) : (r.ctrlpts[0] = ie[0] + le.x * M, r.ctrlpts[1] = ie[1] + le.y * M);
        }
        z && this.findEndpoints(t);
      }
    }, _t.storeAllpts = function(t) {
      var e = t._private.rscratch;
      if (e.edgeType === "multibezier" || e.edgeType === "bezier" || e.edgeType === "self" || e.edgeType === "compound") {
        e.allpts = [], e.allpts.push(e.startX, e.startY);
        for (var r = 0; r + 1 < e.ctrlpts.length; r += 2)
          e.allpts.push(e.ctrlpts[r], e.ctrlpts[r + 1]), r + 3 < e.ctrlpts.length && e.allpts.push((e.ctrlpts[r] + e.ctrlpts[r + 2]) / 2, (e.ctrlpts[r + 1] + e.ctrlpts[r + 3]) / 2);
        e.allpts.push(e.endX, e.endY);
        var a, n;
        e.ctrlpts.length / 2 % 2 === 0 ? (a = e.allpts.length / 2 - 1, e.midX = e.allpts[a], e.midY = e.allpts[a + 1]) : (a = e.allpts.length / 2 - 3, n = 0.5, e.midX = Mt(e.allpts[a], e.allpts[a + 2], e.allpts[a + 4], n), e.midY = Mt(e.allpts[a + 1], e.allpts[a + 3], e.allpts[a + 5], n));
      } else if (e.edgeType === "straight")
        e.allpts = [e.startX, e.startY, e.endX, e.endY], e.midX = (e.startX + e.endX + e.arrowStartX + e.arrowEndX) / 4, e.midY = (e.startY + e.endY + e.arrowStartY + e.arrowEndY) / 4;
      else if (e.edgeType === "segments") {
        if (e.allpts = [], e.allpts.push(e.startX, e.startY), e.allpts.push.apply(e.allpts, e.segpts), e.allpts.push(e.endX, e.endY), e.isRound) {
          e.roundCorners = [];
          for (var i = 2; i + 3 < e.allpts.length; i += 2) {
            var s = e.radii[i / 2 - 1], o = e.isArcRadius[i / 2 - 1];
            e.roundCorners.push(es({
              x: e.allpts[i - 2],
              y: e.allpts[i - 1]
            }, {
              x: e.allpts[i],
              y: e.allpts[i + 1],
              radius: s
            }, {
              x: e.allpts[i + 2],
              y: e.allpts[i + 3]
            }, s, o));
          }
        }
        if (e.segpts.length % 4 === 0) {
          var l = e.segpts.length / 2, u = l - 2;
          e.midX = (e.segpts[u] + e.segpts[l]) / 2, e.midY = (e.segpts[u + 1] + e.segpts[l + 1]) / 2;
        } else {
          var f = e.segpts.length / 2 - 1;
          if (!e.isRound)
            e.midX = e.segpts[f], e.midY = e.segpts[f + 1];
          else {
            var h = {
              x: e.segpts[f],
              y: e.segpts[f + 1]
            }, c = e.roundCorners[f / 2], d = [h.x - c.cx, h.y - c.cy], v = c.radius / Math.sqrt(Math.pow(d[0], 2) + Math.pow(d[1], 2));
            d = d.map(function(y) {
              return y * v;
            }), e.midX = c.cx + d[0], e.midY = c.cy + d[1], e.midVector = d;
          }
        }
      }
    }, _t.checkForInvalidEdgeWarning = function(t) {
      var e = t[0]._private.rscratch;
      e.nodesOverlap || R(e.startX) && R(e.startY) && R(e.endX) && R(e.endY) ? e.loggedErr = !1 : e.loggedErr || (e.loggedErr = !0, ht("Edge `" + t.id() + "` has invalid endpoints and so it is impossible to draw.  Adjust your edge style (e.g. control points) accordingly or use an alternative edge type.  This is expected behaviour when the source node and the target node overlap."));
    }, _t.findEdgeControlPoints = function(t) {
      var e = this;
      if (!(!t || t.length === 0)) {
        for (var r = this, a = r.cy, n = a.hasCompoundNodes(), i = {
          map: new pr(),
          get: function(x) {
            var I = this.map.get(x[0]);
            return I != null ? I.get(x[1]) : null;
          },
          set: function(x, I) {
            var A = this.map.get(x[0]);
            A == null && (A = new pr(), this.map.set(x[0], A)), A.set(x[1], I);
          }
        }, s = [], o = [], l = 0; l < t.length; l++) {
          var u = t[l], f = u._private, h = u.pstyle("curve-style").value;
          if (!(u.removed() || !u.takesUpSpace())) {
            if (h === "haystack") {
              o.push(u);
              continue;
            }
            var c = h === "unbundled-bezier" || h.endsWith("segments") || h === "straight" || h === "straight-triangle" || h.endsWith("taxi"), d = h === "unbundled-bezier" || h === "bezier", v = f.source, y = f.target, p = v.poolIndex(), g = y.poolIndex(), m = [p, g].sort(), b = i.get(m);
            b == null && (b = {
              eles: []
            }, i.set(m, b), s.push(m)), b.eles.push(u), c && (b.hasUnbundled = !0), d && (b.hasBezier = !0);
          }
        }
        for (var E = function(x) {
          var I = s[x], A = i.get(I), z = void 0;
          if (!A.hasUnbundled) {
            var F = A.eles[0].parallelEdges().filter(function(Ce) {
              return Ce.isBundledBezier();
            });
            bi(A.eles), F.forEach(function(Ce) {
              return A.eles.push(Ce);
            }), A.eles.sort(function(Ce, ye) {
              return Ce.poolIndex() - ye.poolIndex();
            });
          }
          var G = A.eles[0], X = G.source(), P = G.target();
          if (X.poolIndex() > P.poolIndex()) {
            var Q = X;
            X = P, P = Q;
          }
          var W = A.srcPos = X.position(), Z = A.tgtPos = P.position(), re = A.srcW = X.outerWidth(), le = A.srcH = X.outerHeight(), ve = A.tgtW = P.outerWidth(), se = A.tgtH = P.outerHeight(), ie = A.srcShape = r.nodeShapes[e.getNodeShape(X)], be = A.tgtShape = r.nodeShapes[e.getNodeShape(P)], De = A.srcCornerRadius = X.pstyle("corner-radius").value === "auto" ? "auto" : X.pstyle("corner-radius").pfValue, Le = A.tgtCornerRadius = P.pstyle("corner-radius").value === "auto" ? "auto" : P.pstyle("corner-radius").pfValue, Ae = A.tgtRs = P._private.rscratch, Me = A.srcRs = X._private.rscratch;
          A.dirCounts = {
            north: 0,
            west: 0,
            south: 0,
            east: 0,
            northwest: 0,
            southwest: 0,
            northeast: 0,
            southeast: 0
          };
          for (var Ee = 0; Ee < A.eles.length; Ee++) {
            var ne = A.eles[Ee], xe = ne[0]._private.rscratch, Te = ne.pstyle("curve-style").value, Be = Te === "unbundled-bezier" || Te.endsWith("segments") || Te.endsWith("taxi"), He = !X.same(ne.source());
            if (!A.calculatedIntersection && X !== P && (A.hasBezier || A.hasUnbundled)) {
              A.calculatedIntersection = !0;
              var ke = ie.intersectLine(W.x, W.y, re, le, Z.x, Z.y, 0, De, Me), Pe = A.srcIntn = ke, Ve = be.intersectLine(Z.x, Z.y, ve, se, W.x, W.y, 0, Le, Ae), _e = A.tgtIntn = Ve, $e = A.intersectionPts = {
                x1: ke[0],
                x2: Ve[0],
                y1: ke[1],
                y2: Ve[1]
              }, qe = A.posPts = {
                x1: W.x,
                x2: Z.x,
                y1: W.y,
                y2: Z.y
              }, vt = Ve[1] - ke[1], it = Ve[0] - ke[0], et = Math.sqrt(it * it + vt * vt), ut = A.vector = {
                x: it,
                y: vt
              }, Se = A.vectorNorm = {
                x: ut.x / et,
                y: ut.y / et
              }, N = {
                x: -Se.y,
                y: Se.x
              };
              A.nodesOverlap = !R(et) || be.checkPoint(ke[0], ke[1], 0, ve, se, Z.x, Z.y, Le, Ae) || ie.checkPoint(Ve[0], Ve[1], 0, re, le, W.x, W.y, De, Me), A.vectorNormInverse = N, z = {
                nodesOverlap: A.nodesOverlap,
                dirCounts: A.dirCounts,
                calculatedIntersection: !0,
                hasBezier: A.hasBezier,
                hasUnbundled: A.hasUnbundled,
                eles: A.eles,
                srcPos: Z,
                tgtPos: W,
                srcW: ve,
                srcH: se,
                tgtW: re,
                tgtH: le,
                srcIntn: _e,
                tgtIntn: Pe,
                srcShape: be,
                tgtShape: ie,
                posPts: {
                  x1: qe.x2,
                  y1: qe.y2,
                  x2: qe.x1,
                  y2: qe.y1
                },
                intersectionPts: {
                  x1: $e.x2,
                  y1: $e.y2,
                  x2: $e.x1,
                  y2: $e.y1
                },
                vector: {
                  x: -ut.x,
                  y: -ut.y
                },
                vectorNorm: {
                  x: -Se.x,
                  y: -Se.y
                },
                vectorNormInverse: {
                  x: -N.x,
                  y: -N.y
                }
              };
            }
            var oe = He ? z : A;
            xe.nodesOverlap = oe.nodesOverlap, xe.srcIntn = oe.srcIntn, xe.tgtIntn = oe.tgtIntn, xe.isRound = Te.startsWith("round"), n && (X.isParent() || X.isChild() || P.isParent() || P.isChild()) && (X.parents().anySame(P) || P.parents().anySame(X) || X.same(P) && X.isParent()) ? e.findCompoundLoopPoints(ne, oe, Ee, Be) : X === P ? e.findLoopPoints(ne, oe, Ee, Be) : Te.endsWith("segments") ? e.findSegmentsPoints(ne, oe) : Te.endsWith("taxi") ? e.findTaxiPoints(ne, oe) : Te === "straight" || !Be && A.eles.length % 2 === 1 && Ee === Math.floor(A.eles.length / 2) ? e.findStraightEdgePoints(ne) : e.findBezierPoints(ne, oe, Ee, Be, He), e.findEndpoints(ne), e.tryToCorrectInvalidPoints(ne, oe), e.checkForInvalidEdgeWarning(ne), e.storeAllpts(ne), e.storeEdgeProjections(ne), e.calculateArrowAngles(ne), e.recalculateEdgeLabelProjections(ne), e.calculateLabelAngles(ne);
          }
        }, M = 0; M < s.length; M++)
          E(M);
        this.findHaystackPoints(o);
      }
    };
    function Au(t) {
      var e = [];
      if (t != null) {
        for (var r = 0; r < t.length; r += 2) {
          var a = t[r], n = t[r + 1];
          e.push({
            x: a,
            y: n
          });
        }
        return e;
      }
    }
    _t.getSegmentPoints = function(t) {
      var e = t[0]._private.rscratch, r = e.edgeType;
      if (r === "segments")
        return this.recalculateRenderedStyle(t), Au(e.segpts);
    }, _t.getControlPoints = function(t) {
      var e = t[0]._private.rscratch, r = e.edgeType;
      if (r === "bezier" || r === "multibezier" || r === "self" || r === "compound")
        return this.recalculateRenderedStyle(t), Au(e.ctrlpts);
    }, _t.getEdgeMidpoint = function(t) {
      var e = t[0]._private.rscratch;
      return this.recalculateRenderedStyle(t), {
        x: e.midX,
        y: e.midY
      };
    };
    var ln = {};
    ln.manualEndptToPx = function(t, e) {
      var r = this, a = t.position(), n = t.outerWidth(), i = t.outerHeight(), s = t._private.rscratch;
      if (e.value.length === 2) {
        var o = [e.pfValue[0], e.pfValue[1]];
        return e.units[0] === "%" && (o[0] = o[0] * n), e.units[1] === "%" && (o[1] = o[1] * i), o[0] += a.x, o[1] += a.y, o;
      } else {
        var l = e.pfValue[0];
        l = -Math.PI / 2 + l;
        var u = 2 * Math.max(n, i), f = [a.x + Math.cos(l) * u, a.y + Math.sin(l) * u];
        return r.nodeShapes[this.getNodeShape(t)].intersectLine(a.x, a.y, n, i, f[0], f[1], 0, t.pstyle("corner-radius").value === "auto" ? "auto" : t.pstyle("corner-radius").pfValue, s);
      }
    }, ln.findEndpoints = function(t) {
      var e = this, r, a = t.source()[0], n = t.target()[0], i = a.position(), s = n.position(), o = t.pstyle("target-arrow-shape").value, l = t.pstyle("source-arrow-shape").value, u = t.pstyle("target-distance-from-node").pfValue, f = t.pstyle("source-distance-from-node").pfValue, h = a._private.rscratch, c = n._private.rscratch, d = t.pstyle("curve-style").value, v = t._private.rscratch, y = v.edgeType, p = d === "taxi", g = y === "self" || y === "compound", m = y === "bezier" || y === "multibezier" || g, b = y !== "bezier", E = y === "straight" || y === "segments", M = y === "segments", S = m || b || E, x = g || p, I = t.pstyle("source-endpoint"), A = x ? "outside-to-node" : I.value, z = a.pstyle("corner-radius").value === "auto" ? "auto" : a.pstyle("corner-radius").pfValue, F = t.pstyle("target-endpoint"), G = x ? "outside-to-node" : F.value, X = n.pstyle("corner-radius").value === "auto" ? "auto" : n.pstyle("corner-radius").pfValue;
      v.srcManEndpt = I, v.tgtManEndpt = F;
      var P, Q, W, Z;
      if (m) {
        var re = [v.ctrlpts[0], v.ctrlpts[1]], le = b ? [v.ctrlpts[v.ctrlpts.length - 2], v.ctrlpts[v.ctrlpts.length - 1]] : re;
        P = le, Q = re;
      } else if (E) {
        var ve = M ? v.segpts.slice(0, 2) : [s.x, s.y], se = M ? v.segpts.slice(v.segpts.length - 2) : [i.x, i.y];
        P = se, Q = ve;
      }
      if (G === "inside-to-node")
        r = [s.x, s.y];
      else if (F.units)
        r = this.manualEndptToPx(n, F);
      else if (G === "outside-to-line")
        r = v.tgtIntn;
      else if (G === "outside-to-node" || G === "outside-to-node-or-label" ? W = P : (G === "outside-to-line" || G === "outside-to-line-or-label") && (W = [i.x, i.y]), r = e.nodeShapes[this.getNodeShape(n)].intersectLine(s.x, s.y, n.outerWidth(), n.outerHeight(), W[0], W[1], 0, X, c), G === "outside-to-node-or-label" || G === "outside-to-line-or-label") {
        var ie = n._private.rscratch, be = ie.labelWidth, De = ie.labelHeight, Le = ie.labelX, Ae = ie.labelY, Me = be / 2, Ee = De / 2, ne = n.pstyle("text-valign").value;
        ne === "top" ? Ae -= Ee : ne === "bottom" && (Ae += Ee);
        var xe = n.pstyle("text-halign").value;
        xe === "left" ? Le -= Me : xe === "right" && (Le += Me);
        var Te = Wa(W[0], W[1], [Le - Me, Ae - Ee, Le + Me, Ae - Ee, Le + Me, Ae + Ee, Le - Me, Ae + Ee], s.x, s.y);
        if (Te.length > 0) {
          var Be = i, He = Xr(Be, ha(r)), ke = Xr(Be, ha(Te)), Pe = He;
          if (ke < He && (r = Te, Pe = ke), Te.length > 2) {
            var Ve = Xr(Be, {
              x: Te[2],
              y: Te[3]
            });
            Ve < Pe && (r = [Te[2], Te[3]]);
          }
        }
      }
      var _e = In(r, P, e.arrowShapes[o].spacing(t) + u), $e = In(r, P, e.arrowShapes[o].gap(t) + u);
      if (v.endX = $e[0], v.endY = $e[1], v.arrowEndX = _e[0], v.arrowEndY = _e[1], A === "inside-to-node")
        r = [i.x, i.y];
      else if (I.units)
        r = this.manualEndptToPx(a, I);
      else if (A === "outside-to-line")
        r = v.srcIntn;
      else if (A === "outside-to-node" || A === "outside-to-node-or-label" ? Z = Q : (A === "outside-to-line" || A === "outside-to-line-or-label") && (Z = [s.x, s.y]), r = e.nodeShapes[this.getNodeShape(a)].intersectLine(i.x, i.y, a.outerWidth(), a.outerHeight(), Z[0], Z[1], 0, z, h), A === "outside-to-node-or-label" || A === "outside-to-line-or-label") {
        var qe = a._private.rscratch, vt = qe.labelWidth, it = qe.labelHeight, et = qe.labelX, ut = qe.labelY, Se = vt / 2, N = it / 2, oe = a.pstyle("text-valign").value;
        oe === "top" ? ut -= N : oe === "bottom" && (ut += N);
        var Ce = a.pstyle("text-halign").value;
        Ce === "left" ? et -= Se : Ce === "right" && (et += Se);
        var ye = Wa(Z[0], Z[1], [et - Se, ut - N, et + Se, ut - N, et + Se, ut + N, et - Se, ut + N], i.x, i.y);
        if (ye.length > 0) {
          var ge = s, Re = Xr(ge, ha(r)), me = Xr(ge, ha(ye)), Ne = Re;
          if (me < Re && (r = [ye[0], ye[1]], Ne = me), ye.length > 2) {
            var Ke = Xr(ge, {
              x: ye[2],
              y: ye[3]
            });
            Ke < Ne && (r = [ye[2], ye[3]]);
          }
        }
      }
      var Ze = In(r, Q, e.arrowShapes[l].spacing(t) + f), Ye = In(r, Q, e.arrowShapes[l].gap(t) + f);
      v.startX = Ye[0], v.startY = Ye[1], v.arrowStartX = Ze[0], v.arrowStartY = Ze[1], S && (!R(v.startX) || !R(v.startY) || !R(v.endX) || !R(v.endY) ? v.badLine = !0 : v.badLine = !1);
    }, ln.getSourceEndpoint = function(t) {
      var e = t[0]._private.rscratch;
      switch (this.recalculateRenderedStyle(t), e.edgeType) {
        case "haystack":
          return {
            x: e.haystackPts[0],
            y: e.haystackPts[1]
          };
        default:
          return {
            x: e.arrowStartX,
            y: e.arrowStartY
          };
      }
    }, ln.getTargetEndpoint = function(t) {
      var e = t[0]._private.rscratch;
      switch (this.recalculateRenderedStyle(t), e.edgeType) {
        case "haystack":
          return {
            x: e.haystackPts[2],
            y: e.haystackPts[3]
          };
        default:
          return {
            x: e.arrowEndX,
            y: e.arrowEndY
          };
      }
    };
    var ts = {};
    function $g(t, e, r) {
      for (var a = function(u, f, h, c) {
        return Mt(u, f, h, c);
      }, n = e._private, i = n.rstyle.bezierPts, s = 0; s < t.bezierProjPcts.length; s++) {
        var o = t.bezierProjPcts[s];
        i.push({
          x: a(r[0], r[2], r[4], o),
          y: a(r[1], r[3], r[5], o)
        });
      }
    }
    ts.storeEdgeProjections = function(t) {
      var e = t._private, r = e.rscratch, a = r.edgeType;
      if (e.rstyle.bezierPts = null, e.rstyle.linePts = null, e.rstyle.haystackPts = null, a === "multibezier" || a === "bezier" || a === "self" || a === "compound") {
        e.rstyle.bezierPts = [];
        for (var n = 0; n + 5 < r.allpts.length; n += 4)
          $g(this, t, r.allpts.slice(n, n + 6));
      } else if (a === "segments")
        for (var i = e.rstyle.linePts = [], n = 0; n + 1 < r.allpts.length; n += 2)
          i.push({
            x: r.allpts[n],
            y: r.allpts[n + 1]
          });
      else if (a === "haystack") {
        var s = r.haystackPts;
        e.rstyle.haystackPts = [{
          x: s[0],
          y: s[1]
        }, {
          x: s[2],
          y: s[3]
        }];
      }
      e.rstyle.arrowWidth = this.getArrowWidth(t.pstyle("width").pfValue, t.pstyle("arrow-scale").value) * this.arrowShapeWidth;
    }, ts.recalculateEdgeProjections = function(t) {
      this.findEdgeControlPoints(t);
    };
    var Er = {};
    Er.recalculateNodeLabelProjection = function(t) {
      var e = t.pstyle("label").strValue;
      if (!ze(e)) {
        var r, a, n = t._private, i = t.width(), s = t.height(), o = t.padding(), l = t.position(), u = t.pstyle("text-halign").strValue, f = t.pstyle("text-valign").strValue, h = n.rscratch, c = n.rstyle;
        switch (u) {
          case "left":
            r = l.x - i / 2 - o;
            break;
          case "right":
            r = l.x + i / 2 + o;
            break;
          default:
            r = l.x;
        }
        switch (f) {
          case "top":
            a = l.y - s / 2 - o;
            break;
          case "bottom":
            a = l.y + s / 2 + o;
            break;
          default:
            a = l.y;
        }
        h.labelX = r, h.labelY = a, c.labelX = r, c.labelY = a, this.calculateLabelAngles(t), this.applyLabelDimensions(t);
      }
    };
    var Ou = function(e, r) {
      var a = Math.atan(r / e);
      return e === 0 && a < 0 && (a = a * -1), a;
    }, Mu = function(e, r) {
      var a = r.x - e.x, n = r.y - e.y;
      return Ou(a, n);
    }, Yg = function(e, r, a, n) {
      var i = Xa(0, n - 1e-3, 1), s = Xa(0, n + 1e-3, 1), o = ca(e, r, a, i), l = ca(e, r, a, s);
      return Mu(o, l);
    };
    Er.recalculateEdgeLabelProjections = function(t) {
      var e, r = t._private, a = r.rscratch, n = this, i = {
        mid: t.pstyle("label").strValue,
        source: t.pstyle("source-label").strValue,
        target: t.pstyle("target-label").strValue
      };
      if (!!(i.mid || i.source || i.target)) {
        e = {
          x: a.midX,
          y: a.midY
        };
        var s = function(h, c, d) {
          Rr(r.rscratch, h, c, d), Rr(r.rstyle, h, c, d);
        };
        s("labelX", null, e.x), s("labelY", null, e.y);
        var o = Ou(a.midDispX, a.midDispY);
        s("labelAutoAngle", null, o);
        var l = function f() {
          if (f.cache)
            return f.cache;
          for (var h = [], c = 0; c + 5 < a.allpts.length; c += 4) {
            var d = {
              x: a.allpts[c],
              y: a.allpts[c + 1]
            }, v = {
              x: a.allpts[c + 2],
              y: a.allpts[c + 3]
            }, y = {
              x: a.allpts[c + 4],
              y: a.allpts[c + 5]
            };
            h.push({
              p0: d,
              p1: v,
              p2: y,
              startDist: 0,
              length: 0,
              segments: []
            });
          }
          var p = r.rstyle.bezierPts, g = n.bezierProjPcts.length;
          function m(x, I, A, z, F) {
            var G = Hr(I, A), X = x.segments[x.segments.length - 1], P = {
              p0: I,
              p1: A,
              t0: z,
              t1: F,
              startDist: X ? X.startDist + X.length : 0,
              length: G
            };
            x.segments.push(P), x.length += G;
          }
          for (var b = 0; b < h.length; b++) {
            var E = h[b], M = h[b - 1];
            M && (E.startDist = M.startDist + M.length), m(E, E.p0, p[b * g], 0, n.bezierProjPcts[0]);
            for (var S = 0; S < g - 1; S++)
              m(E, p[b * g + S], p[b * g + S + 1], n.bezierProjPcts[S], n.bezierProjPcts[S + 1]);
            m(E, p[b * g + g - 1], E.p2, n.bezierProjPcts[g - 1], 1);
          }
          return f.cache = h;
        }, u = function(h) {
          var c, d = h === "source";
          if (!!i[h]) {
            var v = t.pstyle(h + "-text-offset").pfValue;
            switch (a.edgeType) {
              case "self":
              case "compound":
              case "bezier":
              case "multibezier": {
                for (var y = l(), p, g = 0, m = 0, b = 0; b < y.length; b++) {
                  for (var E = y[d ? b : y.length - 1 - b], M = 0; M < E.segments.length; M++) {
                    var S = E.segments[d ? M : E.segments.length - 1 - M], x = b === y.length - 1 && M === E.segments.length - 1;
                    if (g = m, m += S.length, m >= v || x) {
                      p = {
                        cp: E,
                        segment: S
                      };
                      break;
                    }
                  }
                  if (p)
                    break;
                }
                var I = p.cp, A = p.segment, z = (v - g) / A.length, F = A.t1 - A.t0, G = d ? A.t0 + F * z : A.t1 - F * z;
                G = Xa(0, G, 1), e = ca(I.p0, I.p1, I.p2, G), c = Yg(I.p0, I.p1, I.p2, G);
                break;
              }
              case "straight":
              case "segments":
              case "haystack": {
                for (var X = 0, P, Q, W, Z, re = a.allpts.length, le = 0; le + 3 < re && (d ? (W = {
                  x: a.allpts[le],
                  y: a.allpts[le + 1]
                }, Z = {
                  x: a.allpts[le + 2],
                  y: a.allpts[le + 3]
                }) : (W = {
                  x: a.allpts[re - 2 - le],
                  y: a.allpts[re - 1 - le]
                }, Z = {
                  x: a.allpts[re - 4 - le],
                  y: a.allpts[re - 3 - le]
                }), P = Hr(W, Z), Q = X, X += P, !(X >= v)); le += 2)
                  ;
                var ve = v - Q, se = ve / P;
                se = Xa(0, se, 1), e = Wf(W, Z, se), c = Mu(W, Z);
                break;
              }
            }
            s("labelX", h, e.x), s("labelY", h, e.y), s("labelAutoAngle", h, c);
          }
        };
        u("source"), u("target"), this.applyLabelDimensions(t);
      }
    }, Er.applyLabelDimensions = function(t) {
      this.applyPrefixedLabelDimensions(t), t.isEdge() && (this.applyPrefixedLabelDimensions(t, "source"), this.applyPrefixedLabelDimensions(t, "target"));
    }, Er.applyPrefixedLabelDimensions = function(t, e) {
      var r = t._private, a = this.getLabelText(t, e), n = this.calculateLabelDimensions(t, a), i = t.pstyle("line-height").pfValue, s = t.pstyle("text-wrap").strValue, o = ur(r.rscratch, "labelWrapCachedLines", e) || [], l = s !== "wrap" ? 1 : Math.max(o.length, 1), u = n.height / l, f = u * i, h = n.width, c = n.height + (l - 1) * (i - 1) * u;
      Rr(r.rstyle, "labelWidth", e, h), Rr(r.rscratch, "labelWidth", e, h), Rr(r.rstyle, "labelHeight", e, c), Rr(r.rscratch, "labelHeight", e, c), Rr(r.rscratch, "labelLineHeight", e, f);
    }, Er.getLabelText = function(t, e) {
      var r = t._private, a = e ? e + "-" : "", n = t.pstyle(a + "label").strValue, i = t.pstyle("text-transform").value, s = function(be, De) {
        return De ? (Rr(r.rscratch, be, e, De), De) : ur(r.rscratch, be, e);
      };
      if (!n)
        return "";
      i == "none" || (i == "uppercase" ? n = n.toUpperCase() : i == "lowercase" && (n = n.toLowerCase()));
      var o = t.pstyle("text-wrap").value;
      if (o === "wrap") {
        var l = s("labelKey");
        if (l != null && s("labelWrapKey") === l)
          return s("labelWrapCachedText");
        for (var u = "\u200B", f = n.split(`
`), h = t.pstyle("text-max-width").pfValue, c = t.pstyle("text-overflow-wrap").value, d = c === "anywhere", v = [], y = /[\s\u200b]+|$/g, p = 0; p < f.length; p++) {
          var g = f[p], m = this.calculateLabelDimensions(t, g), b = m.width;
          if (d) {
            var E = g.split("").join(u);
            g = E;
          }
          if (b > h) {
            var M = g.matchAll(y), S = "", x = 0, I = O(M), A;
            try {
              for (I.s(); !(A = I.n()).done; ) {
                var z = A.value, F = z[0], G = g.substring(x, z.index);
                x = z.index + F.length;
                var X = S.length === 0 ? G : S + G + F, P = this.calculateLabelDimensions(t, X), Q = P.width;
                Q <= h ? S += G + F : (S && v.push(S), S = G + F);
              }
            } catch (ie) {
              I.e(ie);
            } finally {
              I.f();
            }
            S.match(/^[\s\u200b]+$/) || v.push(S);
          } else
            v.push(g);
        }
        s("labelWrapCachedLines", v), n = s("labelWrapCachedText", v.join(`
`)), s("labelWrapKey", l);
      } else if (o === "ellipsis") {
        var W = t.pstyle("text-max-width").pfValue, Z = "", re = "\u2026", le = !1;
        if (this.calculateLabelDimensions(t, n).width < W)
          return n;
        for (var ve = 0; ve < n.length; ve++) {
          var se = this.calculateLabelDimensions(t, Z + n[ve] + re).width;
          if (se > W)
            break;
          Z += n[ve], ve === n.length - 1 && (le = !0);
        }
        return le || (Z += re), Z;
      }
      return n;
    }, Er.getLabelJustification = function(t) {
      var e = t.pstyle("text-justification").strValue, r = t.pstyle("text-halign").strValue;
      if (e === "auto")
        if (t.isNode())
          switch (r) {
            case "left":
              return "right";
            case "right":
              return "left";
            default:
              return "center";
          }
        else
          return "center";
      else
        return e;
    }, Er.calculateLabelDimensions = function(t, e) {
      var r = this, a = r.cy.window(), n = a.document, i = _r(e, t._private.labelDimsKey), s = r.labelDimCache || (r.labelDimCache = []), o = s[i];
      if (o != null)
        return o;
      var l = 0, u = t.pstyle("font-style").strValue, f = t.pstyle("font-size").pfValue, h = t.pstyle("font-family").strValue, c = t.pstyle("font-weight").strValue, d = this.labelCalcCanvas, v = this.labelCalcCanvasContext;
      if (!d) {
        d = this.labelCalcCanvas = n.createElement("canvas"), v = this.labelCalcCanvasContext = d.getContext("2d");
        var y = d.style;
        y.position = "absolute", y.left = "-9999px", y.top = "-9999px", y.zIndex = "-1", y.visibility = "hidden", y.pointerEvents = "none";
      }
      v.font = "".concat(u, " ").concat(c, " ").concat(f, "px ").concat(h);
      for (var p = 0, g = 0, m = e.split(`
`), b = 0; b < m.length; b++) {
        var E = m[b], M = v.measureText(E), S = Math.ceil(M.width), x = f;
        p = Math.max(S, p), g += x;
      }
      return p += l, g += l, s[i] = {
        width: p,
        height: g
      };
    }, Er.calculateLabelAngle = function(t, e) {
      var r = t._private, a = r.rscratch, n = t.isEdge(), i = e ? e + "-" : "", s = t.pstyle(i + "text-rotation"), o = s.strValue;
      return o === "none" ? 0 : n && o === "autorotate" ? a.labelAutoAngle : o === "autorotate" ? 0 : s.pfValue;
    }, Er.calculateLabelAngles = function(t) {
      var e = this, r = t.isEdge(), a = t._private, n = a.rscratch;
      n.labelAngle = e.calculateLabelAngle(t), r && (n.sourceLabelAngle = e.calculateLabelAngle(t, "source"), n.targetLabelAngle = e.calculateLabelAngle(t, "target"));
    };
    var Nu = {}, Iu = 28, Ru = !1;
    Nu.getNodeShape = function(t) {
      var e = this, r = t.pstyle("shape").value;
      if (r === "cutrectangle" && (t.width() < Iu || t.height() < Iu))
        return Ru || (ht("The `cutrectangle` node shape can not be used at small sizes so `rectangle` is used instead"), Ru = !0), "rectangle";
      if (t.isParent())
        return r === "rectangle" || r === "roundrectangle" || r === "round-rectangle" || r === "cutrectangle" || r === "cut-rectangle" || r === "barrel" ? r : "rectangle";
      if (r === "polygon") {
        var a = t.pstyle("shape-polygon-points").value;
        return e.nodeShapes.makePolygon(a).name;
      }
      return r;
    };
    var li = {};
    li.registerCalculationListeners = function() {
      var t = this.cy, e = t.collection(), r = this, a = function(s) {
        var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
        if (e.merge(s), o)
          for (var l = 0; l < s.length; l++) {
            var u = s[l], f = u._private, h = f.rstyle;
            h.clean = !1, h.cleanConnected = !1;
          }
      };
      r.binder(t).on("bounds.* dirty.*", function(s) {
        var o = s.target;
        a(o);
      }).on("style.* background.*", function(s) {
        var o = s.target;
        a(o, !1);
      });
      var n = function(s) {
        if (s) {
          var o = r.onUpdateEleCalcsFns;
          e.cleanStyle();
          for (var l = 0; l < e.length; l++) {
            var u = e[l], f = u._private.rstyle;
            u.isNode() && !f.cleanConnected && (a(u.connectedEdges()), f.cleanConnected = !0);
          }
          if (o)
            for (var h = 0; h < o.length; h++) {
              var c = o[h];
              c(s, e);
            }
          r.recalculateRenderedStyle(e), e = t.collection();
        }
      };
      r.flushRenderedStyleQueue = function() {
        n(!0);
      }, r.beforeRender(n, r.beforeRenderPriorities.eleCalcs);
    }, li.onUpdateEleCalcs = function(t) {
      var e = this.onUpdateEleCalcsFns = this.onUpdateEleCalcsFns || [];
      e.push(t);
    }, li.recalculateRenderedStyle = function(t, e) {
      var r = function(E) {
        return E._private.rstyle.cleanConnected;
      }, a = [], n = [];
      if (!this.destroyed) {
        e === void 0 && (e = !0);
        for (var i = 0; i < t.length; i++) {
          var s = t[i], o = s._private, l = o.rstyle;
          s.isEdge() && (!r(s.source()) || !r(s.target())) && (l.clean = !1), !(e && l.clean || s.removed()) && s.pstyle("display").value !== "none" && (o.group === "nodes" ? n.push(s) : a.push(s), l.clean = !0);
        }
        for (var u = 0; u < n.length; u++) {
          var f = n[u], h = f._private, c = h.rstyle, d = f.position();
          this.recalculateNodeLabelProjection(f), c.nodeX = d.x, c.nodeY = d.y, c.nodeW = f.pstyle("width").pfValue, c.nodeH = f.pstyle("height").pfValue;
        }
        this.recalculateEdgeProjections(a);
        for (var v = 0; v < a.length; v++) {
          var y = a[v], p = y._private, g = p.rstyle, m = p.rscratch;
          g.srcX = m.arrowStartX, g.srcY = m.arrowStartY, g.tgtX = m.arrowEndX, g.tgtY = m.arrowEndY, g.midX = m.midX, g.midY = m.midY, g.labelAngle = m.labelAngle, g.sourceLabelAngle = m.sourceLabelAngle, g.targetLabelAngle = m.targetLabelAngle;
        }
      }
    };
    var fi = {};
    fi.updateCachedGrabbedEles = function() {
      var t = this.cachedZSortedEles;
      if (!!t) {
        t.drag = [], t.nondrag = [];
        for (var e = [], r = 0; r < t.length; r++) {
          var a = t[r], n = a._private.rscratch;
          a.grabbed() && !a.isParent() ? e.push(a) : n.inDragLayer ? t.drag.push(a) : t.nondrag.push(a);
        }
        for (var r = 0; r < e.length; r++) {
          var a = e[r];
          t.drag.push(a);
        }
      }
    }, fi.invalidateCachedZSortedEles = function() {
      this.cachedZSortedEles = null;
    }, fi.getCachedZSortedEles = function(t) {
      if (t || !this.cachedZSortedEles) {
        var e = this.cy.mutableElements().toArray();
        e.sort(Ko), e.interactive = e.filter(function(r) {
          return r.interactive();
        }), this.cachedZSortedEles = e, this.updateCachedGrabbedEles();
      } else
        e = this.cachedZSortedEles;
      return e;
    };
    var ku = {};
    [Jr, si, _t, ln, ts, Er, Nu, li, fi].forEach(function(t) {
      Qe(ku, t);
    });
    var Pu = {};
    Pu.getCachedImage = function(t, e, r) {
      var a = this, n = a.imageCache = a.imageCache || {}, i = n[t];
      if (i)
        return i.image.complete || i.image.addEventListener("load", r), i.image;
      i = n[t] = n[t] || {};
      var s = i.image = new Image();
      s.addEventListener("load", r), s.addEventListener("error", function() {
        s.error = !0;
      });
      var o = "data:", l = t.substring(0, o.length).toLowerCase() === o;
      return l || (e = e === "null" ? null : e, s.crossOrigin = e), s.src = t, s;
    };
    var Ma = {};
    Ma.registerBinding = function(t, e, r, a) {
      var n = Array.prototype.slice.apply(arguments, [1]), i = this.binder(t);
      return i.on.apply(i, n);
    }, Ma.binder = function(t) {
      var e = this, r = e.cy.window(), a = t === r || t === r.document || t === r.document.body || je(t);
      if (e.supportsPassiveEvents == null) {
        var n = !1;
        try {
          var i = Object.defineProperty({}, "passive", {
            get: function() {
              return n = !0, !0;
            }
          });
          r.addEventListener("test", null, i);
        } catch {
        }
        e.supportsPassiveEvents = n;
      }
      var s = function(l, u, f) {
        var h = Array.prototype.slice.call(arguments);
        return a && e.supportsPassiveEvents && (h[2] = {
          capture: f != null ? f : !1,
          passive: !1,
          once: !1
        }), e.bindings.push({
          target: t,
          args: h
        }), (t.addEventListener || t.on).apply(t, h), this;
      };
      return {
        on: s,
        addEventListener: s,
        addListener: s,
        bind: s
      };
    }, Ma.nodeIsDraggable = function(t) {
      return t && t.isNode() && !t.locked() && t.grabbable();
    }, Ma.nodeIsGrabbable = function(t) {
      return this.nodeIsDraggable(t) && t.interactive();
    }, Ma.load = function() {
      var t = this, e = t.cy.window(), r = function(N) {
        return N.selected();
      }, a = function(N, oe, Ce, ye) {
        N == null && (N = t.cy);
        for (var ge = 0; ge < oe.length; ge++) {
          var Re = oe[ge];
          N.emit({
            originalEvent: Ce,
            type: Re,
            position: ye
          });
        }
      }, n = function(N) {
        return N.shiftKey || N.metaKey || N.ctrlKey;
      }, i = function(N, oe) {
        var Ce = !0;
        if (t.cy.hasCompoundNodes() && N && N.pannable())
          for (var ye = 0; oe && ye < oe.length; ye++) {
            var N = oe[ye];
            if (N.isNode() && N.isParent() && !N.pannable()) {
              Ce = !1;
              break;
            }
          }
        else
          Ce = !0;
        return Ce;
      }, s = function(N) {
        N[0]._private.grabbed = !0;
      }, o = function(N) {
        N[0]._private.grabbed = !1;
      }, l = function(N) {
        N[0]._private.rscratch.inDragLayer = !0;
      }, u = function(N) {
        N[0]._private.rscratch.inDragLayer = !1;
      }, f = function(N) {
        N[0]._private.rscratch.isGrabTarget = !0;
      }, h = function(N) {
        N[0]._private.rscratch.isGrabTarget = !1;
      }, c = function(N, oe) {
        var Ce = oe.addToList, ye = Ce.has(N);
        !ye && N.grabbable() && !N.locked() && (Ce.merge(N), s(N));
      }, d = function(N, oe) {
        if (!!N.cy().hasCompoundNodes() && !(oe.inDragLayer == null && oe.addToList == null)) {
          var Ce = N.descendants();
          oe.inDragLayer && (Ce.forEach(l), Ce.connectedEdges().forEach(l)), oe.addToList && c(Ce, oe);
        }
      }, v = function(N, oe) {
        oe = oe || {};
        var Ce = N.cy().hasCompoundNodes();
        oe.inDragLayer && (N.forEach(l), N.neighborhood().stdFilter(function(ye) {
          return !Ce || ye.isEdge();
        }).forEach(l)), oe.addToList && N.forEach(function(ye) {
          c(ye, oe);
        }), d(N, oe), g(N, {
          inDragLayer: oe.inDragLayer
        }), t.updateCachedGrabbedEles();
      }, y = v, p = function(N) {
        !N || (t.getCachedZSortedEles().forEach(function(oe) {
          o(oe), u(oe), h(oe);
        }), t.updateCachedGrabbedEles());
      }, g = function(N, oe) {
        if (!(oe.inDragLayer == null && oe.addToList == null) && !!N.cy().hasCompoundNodes()) {
          var Ce = N.ancestors().orphans();
          if (!Ce.same(N)) {
            var ye = Ce.descendants().spawnSelf().merge(Ce).unmerge(N).unmerge(N.descendants()), ge = ye.connectedEdges();
            oe.inDragLayer && (ge.forEach(l), ye.forEach(l)), oe.addToList && ye.forEach(function(Re) {
              c(Re, oe);
            });
          }
        }
      }, m = function() {
        document.activeElement != null && document.activeElement.blur != null && document.activeElement.blur();
      }, b = typeof MutationObserver < "u", E = typeof ResizeObserver < "u";
      b ? (t.removeObserver = new MutationObserver(function(Se) {
        for (var N = 0; N < Se.length; N++) {
          var oe = Se[N], Ce = oe.removedNodes;
          if (Ce)
            for (var ye = 0; ye < Ce.length; ye++) {
              var ge = Ce[ye];
              if (ge === t.container) {
                t.destroy();
                break;
              }
            }
        }
      }), t.container.parentNode && t.removeObserver.observe(t.container.parentNode, {
        childList: !0
      })) : t.registerBinding(t.container, "DOMNodeRemoved", function(Se) {
        t.destroy();
      });
      var M = wn(function() {
        t.cy.resize();
      }, 100);
      b && (t.styleObserver = new MutationObserver(M), t.styleObserver.observe(t.container, {
        attributes: !0
      })), t.registerBinding(e, "resize", M), E && (t.resizeObserver = new ResizeObserver(M), t.resizeObserver.observe(t.container));
      var S = function(N, oe) {
        for (; N != null; )
          oe(N), N = N.parentNode;
      }, x = function() {
        t.invalidateContainerClientCoordsCache();
      };
      S(t.container, function(Se) {
        t.registerBinding(Se, "transitionend", x), t.registerBinding(Se, "animationend", x), t.registerBinding(Se, "scroll", x);
      }), t.registerBinding(t.container, "contextmenu", function(Se) {
        Se.preventDefault();
      });
      var I = function() {
        return t.selection[4] !== 0;
      }, A = function(N) {
        for (var oe = t.findContainerClientCoords(), Ce = oe[0], ye = oe[1], ge = oe[2], Re = oe[3], me = N.touches ? N.touches : [N], Ne = !1, Ke = 0; Ke < me.length; Ke++) {
          var Ze = me[Ke];
          if (Ce <= Ze.clientX && Ze.clientX <= Ce + ge && ye <= Ze.clientY && Ze.clientY <= ye + Re) {
            Ne = !0;
            break;
          }
        }
        if (!Ne)
          return !1;
        for (var Ye = t.container, Je = N.target, Ue = Je.parentNode, Xe = !1; Ue; ) {
          if (Ue === Ye) {
            Xe = !0;
            break;
          }
          Ue = Ue.parentNode;
        }
        return !!Xe;
      };
      t.registerBinding(t.container, "mousedown", function(N) {
        if (!!A(N) && !(t.hoverData.which === 1 && N.which !== 1)) {
          N.preventDefault(), m(), t.hoverData.capture = !0, t.hoverData.which = N.which;
          var oe = t.cy, Ce = [N.clientX, N.clientY], ye = t.projectIntoViewport(Ce[0], Ce[1]), ge = t.selection, Re = t.findNearestElements(ye[0], ye[1], !0, !1), me = Re[0], Ne = t.dragData.possibleDragElements;
          t.hoverData.mdownPos = ye, t.hoverData.mdownGPos = Ce;
          var Ke = function() {
            t.hoverData.tapholdCancelled = !1, clearTimeout(t.hoverData.tapholdTimeout), t.hoverData.tapholdTimeout = setTimeout(function() {
              if (!t.hoverData.tapholdCancelled) {
                var Ct = t.hoverData.down;
                Ct ? Ct.emit({
                  originalEvent: N,
                  type: "taphold",
                  position: {
                    x: ye[0],
                    y: ye[1]
                  }
                }) : oe.emit({
                  originalEvent: N,
                  type: "taphold",
                  position: {
                    x: ye[0],
                    y: ye[1]
                  }
                });
              }
            }, t.tapholdDuration);
          };
          if (N.which == 3) {
            t.hoverData.cxtStarted = !0;
            var Ze = {
              originalEvent: N,
              type: "cxttapstart",
              position: {
                x: ye[0],
                y: ye[1]
              }
            };
            me ? (me.activate(), me.emit(Ze), t.hoverData.down = me) : oe.emit(Ze), t.hoverData.downTime = new Date().getTime(), t.hoverData.cxtDragged = !1;
          } else if (N.which == 1) {
            me && me.activate();
            {
              if (me != null && t.nodeIsGrabbable(me)) {
                var Ye = function(Ct) {
                  return {
                    originalEvent: N,
                    type: Ct,
                    position: {
                      x: ye[0],
                      y: ye[1]
                    }
                  };
                }, Je = function(Ct) {
                  Ct.emit(Ye("grab"));
                };
                if (f(me), !me.selected())
                  Ne = t.dragData.possibleDragElements = oe.collection(), y(me, {
                    addToList: Ne
                  }), me.emit(Ye("grabon")).emit(Ye("grab"));
                else {
                  Ne = t.dragData.possibleDragElements = oe.collection();
                  var Ue = oe.$(function(Xe) {
                    return Xe.isNode() && Xe.selected() && t.nodeIsGrabbable(Xe);
                  });
                  v(Ue, {
                    addToList: Ne
                  }), me.emit(Ye("grabon")), Ue.forEach(Je);
                }
                t.redrawHint("eles", !0), t.redrawHint("drag", !0);
              }
              t.hoverData.down = me, t.hoverData.downs = Re, t.hoverData.downTime = new Date().getTime();
            }
            a(me, ["mousedown", "tapstart", "vmousedown"], N, {
              x: ye[0],
              y: ye[1]
            }), me == null ? (ge[4] = 1, t.data.bgActivePosistion = {
              x: ye[0],
              y: ye[1]
            }, t.redrawHint("select", !0), t.redraw()) : me.pannable() && (ge[4] = 1), Ke();
          }
          ge[0] = ge[2] = ye[0], ge[1] = ge[3] = ye[1];
        }
      }, !1), t.registerBinding(e, "mousemove", function(N) {
        var oe = t.hoverData.capture;
        if (!(!oe && !A(N))) {
          var Ce = !1, ye = t.cy, ge = ye.zoom(), Re = [N.clientX, N.clientY], me = t.projectIntoViewport(Re[0], Re[1]), Ne = t.hoverData.mdownPos, Ke = t.hoverData.mdownGPos, Ze = t.selection, Ye = null;
          !t.hoverData.draggingEles && !t.hoverData.dragging && !t.hoverData.selecting && (Ye = t.findNearestElement(me[0], me[1], !0, !1));
          var Je = t.hoverData.last, Ue = t.hoverData.down, Xe = [me[0] - Ze[2], me[1] - Ze[3]], Ct = t.dragData.possibleDragElements, mt;
          if (Ke) {
            var qt = Re[0] - Ke[0], Ft = qt * qt, At = Re[1] - Ke[1], Qt = At * At, Gt = Ft + Qt;
            t.hoverData.isOverThresholdDrag = mt = Gt >= t.desktopTapThreshold2;
          }
          var Wt = n(N);
          mt && (t.hoverData.tapholdCancelled = !0);
          var hr = function() {
            var Tr = t.hoverData.dragDelta = t.hoverData.dragDelta || [];
            Tr.length === 0 ? (Tr.push(Xe[0]), Tr.push(Xe[1])) : (Tr[0] += Xe[0], Tr[1] += Xe[1]);
          };
          Ce = !0, a(Ye, ["mousemove", "vmousemove", "tapdrag"], N, {
            x: me[0],
            y: me[1]
          });
          var ir = function() {
            t.data.bgActivePosistion = void 0, t.hoverData.selecting || ye.emit({
              originalEvent: N,
              type: "boxstart",
              position: {
                x: me[0],
                y: me[1]
              }
            }), Ze[4] = 1, t.hoverData.selecting = !0, t.redrawHint("select", !0), t.redraw();
          };
          if (t.hoverData.which === 3) {
            if (mt) {
              var Jt = {
                originalEvent: N,
                type: "cxtdrag",
                position: {
                  x: me[0],
                  y: me[1]
                }
              };
              Ue ? Ue.emit(Jt) : ye.emit(Jt), t.hoverData.cxtDragged = !0, (!t.hoverData.cxtOver || Ye !== t.hoverData.cxtOver) && (t.hoverData.cxtOver && t.hoverData.cxtOver.emit({
                originalEvent: N,
                type: "cxtdragout",
                position: {
                  x: me[0],
                  y: me[1]
                }
              }), t.hoverData.cxtOver = Ye, Ye && Ye.emit({
                originalEvent: N,
                type: "cxtdragover",
                position: {
                  x: me[0],
                  y: me[1]
                }
              }));
            }
          } else if (t.hoverData.dragging) {
            if (Ce = !0, ye.panningEnabled() && ye.userPanningEnabled()) {
              var xr;
              if (t.hoverData.justStartedPan) {
                var Mr = t.hoverData.mdownPos;
                xr = {
                  x: (me[0] - Mr[0]) * ge,
                  y: (me[1] - Mr[1]) * ge
                }, t.hoverData.justStartedPan = !1;
              } else
                xr = {
                  x: Xe[0] * ge,
                  y: Xe[1] * ge
                };
              ye.panBy(xr), ye.emit("dragpan"), t.hoverData.dragged = !0;
            }
            me = t.projectIntoViewport(N.clientX, N.clientY);
          } else if (Ze[4] == 1 && (Ue == null || Ue.pannable())) {
            if (mt) {
              if (!t.hoverData.dragging && ye.boxSelectionEnabled() && (Wt || !ye.panningEnabled() || !ye.userPanningEnabled()))
                ir();
              else if (!t.hoverData.selecting && ye.panningEnabled() && ye.userPanningEnabled()) {
                var cr = i(Ue, t.hoverData.downs);
                cr && (t.hoverData.dragging = !0, t.hoverData.justStartedPan = !0, Ze[4] = 0, t.data.bgActivePosistion = ha(Ne), t.redrawHint("select", !0), t.redraw());
              }
              Ue && Ue.pannable() && Ue.active() && Ue.unactivate();
            }
          } else {
            if (Ue && Ue.pannable() && Ue.active() && Ue.unactivate(), (!Ue || !Ue.grabbed()) && Ye != Je && (Je && a(Je, ["mouseout", "tapdragout"], N, {
              x: me[0],
              y: me[1]
            }), Ye && a(Ye, ["mouseover", "tapdragover"], N, {
              x: me[0],
              y: me[1]
            }), t.hoverData.last = Ye), Ue)
              if (mt) {
                if (ye.boxSelectionEnabled() && Wt)
                  Ue && Ue.grabbed() && (p(Ct), Ue.emit("freeon"), Ct.emit("free"), t.dragData.didDrag && (Ue.emit("dragfreeon"), Ct.emit("dragfree"))), ir();
                else if (Ue && Ue.grabbed() && t.nodeIsDraggable(Ue)) {
                  var Ot = !t.dragData.didDrag;
                  Ot && t.redrawHint("eles", !0), t.dragData.didDrag = !0, t.hoverData.draggingEles || v(Ct, {
                    inDragLayer: !0
                  });
                  var Nt = {
                    x: 0,
                    y: 0
                  };
                  if (R(Xe[0]) && R(Xe[1]) && (Nt.x += Xe[0], Nt.y += Xe[1], Ot)) {
                    var Ht = t.hoverData.dragDelta;
                    Ht && R(Ht[0]) && R(Ht[1]) && (Nt.x += Ht[0], Nt.y += Ht[1]);
                  }
                  t.hoverData.draggingEles = !0, Ct.silentShift(Nt).emit("position drag"), t.redrawHint("drag", !0), t.redraw();
                }
              } else
                hr();
            Ce = !0;
          }
          if (Ze[2] = me[0], Ze[3] = me[1], Ce)
            return N.stopPropagation && N.stopPropagation(), N.preventDefault && N.preventDefault(), !1;
        }
      }, !1);
      var z, F, G;
      t.registerBinding(e, "mouseup", function(N) {
        if (!(t.hoverData.which === 1 && N.which !== 1 && t.hoverData.capture)) {
          var oe = t.hoverData.capture;
          if (!!oe) {
            t.hoverData.capture = !1;
            var Ce = t.cy, ye = t.projectIntoViewport(N.clientX, N.clientY), ge = t.selection, Re = t.findNearestElement(ye[0], ye[1], !0, !1), me = t.dragData.possibleDragElements, Ne = t.hoverData.down, Ke = n(N);
            if (t.data.bgActivePosistion && (t.redrawHint("select", !0), t.redraw()), t.hoverData.tapholdCancelled = !0, t.data.bgActivePosistion = void 0, Ne && Ne.unactivate(), t.hoverData.which === 3) {
              var Ze = {
                originalEvent: N,
                type: "cxttapend",
                position: {
                  x: ye[0],
                  y: ye[1]
                }
              };
              if (Ne ? Ne.emit(Ze) : Ce.emit(Ze), !t.hoverData.cxtDragged) {
                var Ye = {
                  originalEvent: N,
                  type: "cxttap",
                  position: {
                    x: ye[0],
                    y: ye[1]
                  }
                };
                Ne ? Ne.emit(Ye) : Ce.emit(Ye);
              }
              t.hoverData.cxtDragged = !1, t.hoverData.which = null;
            } else if (t.hoverData.which === 1) {
              if (a(Re, ["mouseup", "tapend", "vmouseup"], N, {
                x: ye[0],
                y: ye[1]
              }), !t.dragData.didDrag && !t.hoverData.dragged && !t.hoverData.selecting && !t.hoverData.isOverThresholdDrag && (a(Ne, ["click", "tap", "vclick"], N, {
                x: ye[0],
                y: ye[1]
              }), F = !1, N.timeStamp - G <= Ce.multiClickDebounceTime() ? (z && clearTimeout(z), F = !0, G = null, a(Ne, ["dblclick", "dbltap", "vdblclick"], N, {
                x: ye[0],
                y: ye[1]
              })) : (z = setTimeout(function() {
                F || a(Ne, ["oneclick", "onetap", "voneclick"], N, {
                  x: ye[0],
                  y: ye[1]
                });
              }, Ce.multiClickDebounceTime()), G = N.timeStamp)), Ne == null && !t.dragData.didDrag && !t.hoverData.selecting && !t.hoverData.dragged && !n(N) && (Ce.$(r).unselect(["tapunselect"]), me.length > 0 && t.redrawHint("eles", !0), t.dragData.possibleDragElements = me = Ce.collection()), Re == Ne && !t.dragData.didDrag && !t.hoverData.selecting && Re != null && Re._private.selectable && (t.hoverData.dragging || (Ce.selectionType() === "additive" || Ke ? Re.selected() ? Re.unselect(["tapunselect"]) : Re.select(["tapselect"]) : Ke || (Ce.$(r).unmerge(Re).unselect(["tapunselect"]), Re.select(["tapselect"]))), t.redrawHint("eles", !0)), t.hoverData.selecting) {
                var Je = Ce.collection(t.getAllInBox(ge[0], ge[1], ge[2], ge[3]));
                t.redrawHint("select", !0), Je.length > 0 && t.redrawHint("eles", !0), Ce.emit({
                  type: "boxend",
                  originalEvent: N,
                  position: {
                    x: ye[0],
                    y: ye[1]
                  }
                });
                var Ue = function(mt) {
                  return mt.selectable() && !mt.selected();
                };
                Ce.selectionType() === "additive" || Ke || Ce.$(r).unmerge(Je).unselect(), Je.emit("box").stdFilter(Ue).select().emit("boxselect"), t.redraw();
              }
              if (t.hoverData.dragging && (t.hoverData.dragging = !1, t.redrawHint("select", !0), t.redrawHint("eles", !0), t.redraw()), !ge[4]) {
                t.redrawHint("drag", !0), t.redrawHint("eles", !0);
                var Xe = Ne && Ne.grabbed();
                p(me), Xe && (Ne.emit("freeon"), me.emit("free"), t.dragData.didDrag && (Ne.emit("dragfreeon"), me.emit("dragfree")));
              }
            }
            ge[4] = 0, t.hoverData.down = null, t.hoverData.cxtStarted = !1, t.hoverData.draggingEles = !1, t.hoverData.selecting = !1, t.hoverData.isOverThresholdDrag = !1, t.dragData.didDrag = !1, t.hoverData.dragged = !1, t.hoverData.dragDelta = [], t.hoverData.mdownPos = null, t.hoverData.mdownGPos = null;
          }
        }
      }, !1);
      var X = function(N) {
        if (!t.scrollingPage) {
          var oe = t.cy, Ce = oe.zoom(), ye = oe.pan(), ge = t.projectIntoViewport(N.clientX, N.clientY), Re = [ge[0] * Ce + ye.x, ge[1] * Ce + ye.y];
          if (t.hoverData.draggingEles || t.hoverData.dragging || t.hoverData.cxtStarted || I()) {
            N.preventDefault();
            return;
          }
          if (oe.panningEnabled() && oe.userPanningEnabled() && oe.zoomingEnabled() && oe.userZoomingEnabled()) {
            N.preventDefault(), t.data.wheelZooming = !0, clearTimeout(t.data.wheelTimeout), t.data.wheelTimeout = setTimeout(function() {
              t.data.wheelZooming = !1, t.redrawHint("eles", !0), t.redraw();
            }, 150);
            var me;
            N.deltaY != null ? me = N.deltaY / -250 : N.wheelDeltaY != null ? me = N.wheelDeltaY / 1e3 : me = N.wheelDelta / 1e3, me = me * t.wheelSensitivity;
            var Ne = N.deltaMode === 1;
            Ne && (me *= 33);
            var Ke = oe.zoom() * Math.pow(10, me);
            N.type === "gesturechange" && (Ke = t.gestureStartZoom * N.scale), oe.zoom({
              level: Ke,
              renderedPosition: {
                x: Re[0],
                y: Re[1]
              }
            }), oe.emit(N.type === "gesturechange" ? "pinchzoom" : "scrollzoom");
          }
        }
      };
      t.registerBinding(t.container, "wheel", X, !0), t.registerBinding(e, "scroll", function(N) {
        t.scrollingPage = !0, clearTimeout(t.scrollingPageTimeout), t.scrollingPageTimeout = setTimeout(function() {
          t.scrollingPage = !1;
        }, 250);
      }, !0), t.registerBinding(t.container, "gesturestart", function(N) {
        t.gestureStartZoom = t.cy.zoom(), t.hasTouchStarted || N.preventDefault();
      }, !0), t.registerBinding(t.container, "gesturechange", function(Se) {
        t.hasTouchStarted || X(Se);
      }, !0), t.registerBinding(t.container, "mouseout", function(N) {
        var oe = t.projectIntoViewport(N.clientX, N.clientY);
        t.cy.emit({
          originalEvent: N,
          type: "mouseout",
          position: {
            x: oe[0],
            y: oe[1]
          }
        });
      }, !1), t.registerBinding(t.container, "mouseover", function(N) {
        var oe = t.projectIntoViewport(N.clientX, N.clientY);
        t.cy.emit({
          originalEvent: N,
          type: "mouseover",
          position: {
            x: oe[0],
            y: oe[1]
          }
        });
      }, !1);
      var P, Q, W, Z, re, le, ve, se, ie, be, De, Le, Ae, Me = function(N, oe, Ce, ye) {
        return Math.sqrt((Ce - N) * (Ce - N) + (ye - oe) * (ye - oe));
      }, Ee = function(N, oe, Ce, ye) {
        return (Ce - N) * (Ce - N) + (ye - oe) * (ye - oe);
      }, ne;
      t.registerBinding(t.container, "touchstart", ne = function(N) {
        if (t.hasTouchStarted = !0, !!A(N)) {
          m(), t.touchData.capture = !0, t.data.bgActivePosistion = void 0;
          var oe = t.cy, Ce = t.touchData.now, ye = t.touchData.earlier;
          if (N.touches[0]) {
            var ge = t.projectIntoViewport(N.touches[0].clientX, N.touches[0].clientY);
            Ce[0] = ge[0], Ce[1] = ge[1];
          }
          if (N.touches[1]) {
            var ge = t.projectIntoViewport(N.touches[1].clientX, N.touches[1].clientY);
            Ce[2] = ge[0], Ce[3] = ge[1];
          }
          if (N.touches[2]) {
            var ge = t.projectIntoViewport(N.touches[2].clientX, N.touches[2].clientY);
            Ce[4] = ge[0], Ce[5] = ge[1];
          }
          if (N.touches[1]) {
            t.touchData.singleTouchMoved = !0, p(t.dragData.touchDragEles);
            var Re = t.findContainerClientCoords();
            ie = Re[0], be = Re[1], De = Re[2], Le = Re[3], P = N.touches[0].clientX - ie, Q = N.touches[0].clientY - be, W = N.touches[1].clientX - ie, Z = N.touches[1].clientY - be, Ae = 0 <= P && P <= De && 0 <= W && W <= De && 0 <= Q && Q <= Le && 0 <= Z && Z <= Le;
            var me = oe.pan(), Ne = oe.zoom();
            re = Me(P, Q, W, Z), le = Ee(P, Q, W, Z), ve = [(P + W) / 2, (Q + Z) / 2], se = [(ve[0] - me.x) / Ne, (ve[1] - me.y) / Ne];
            var Ke = 200, Ze = Ke * Ke;
            if (le < Ze && !N.touches[2]) {
              var Ye = t.findNearestElement(Ce[0], Ce[1], !0, !0), Je = t.findNearestElement(Ce[2], Ce[3], !0, !0);
              Ye && Ye.isNode() ? (Ye.activate().emit({
                originalEvent: N,
                type: "cxttapstart",
                position: {
                  x: Ce[0],
                  y: Ce[1]
                }
              }), t.touchData.start = Ye) : Je && Je.isNode() ? (Je.activate().emit({
                originalEvent: N,
                type: "cxttapstart",
                position: {
                  x: Ce[0],
                  y: Ce[1]
                }
              }), t.touchData.start = Je) : oe.emit({
                originalEvent: N,
                type: "cxttapstart",
                position: {
                  x: Ce[0],
                  y: Ce[1]
                }
              }), t.touchData.start && (t.touchData.start._private.grabbed = !1), t.touchData.cxt = !0, t.touchData.cxtDragged = !1, t.data.bgActivePosistion = void 0, t.redraw();
              return;
            }
          }
          if (N.touches[2])
            oe.boxSelectionEnabled() && N.preventDefault();
          else if (!N.touches[1]) {
            if (N.touches[0]) {
              var Ue = t.findNearestElements(Ce[0], Ce[1], !0, !0), Xe = Ue[0];
              if (Xe != null && (Xe.activate(), t.touchData.start = Xe, t.touchData.starts = Ue, t.nodeIsGrabbable(Xe))) {
                var Ct = t.dragData.touchDragEles = oe.collection(), mt = null;
                t.redrawHint("eles", !0), t.redrawHint("drag", !0), Xe.selected() ? (mt = oe.$(function(Gt) {
                  return Gt.selected() && t.nodeIsGrabbable(Gt);
                }), v(mt, {
                  addToList: Ct
                })) : y(Xe, {
                  addToList: Ct
                }), f(Xe);
                var qt = function(Wt) {
                  return {
                    originalEvent: N,
                    type: Wt,
                    position: {
                      x: Ce[0],
                      y: Ce[1]
                    }
                  };
                };
                Xe.emit(qt("grabon")), mt ? mt.forEach(function(Gt) {
                  Gt.emit(qt("grab"));
                }) : Xe.emit(qt("grab"));
              }
              a(Xe, ["touchstart", "tapstart", "vmousedown"], N, {
                x: Ce[0],
                y: Ce[1]
              }), Xe == null && (t.data.bgActivePosistion = {
                x: ge[0],
                y: ge[1]
              }, t.redrawHint("select", !0), t.redraw()), t.touchData.singleTouchMoved = !1, t.touchData.singleTouchStartTime = +new Date(), clearTimeout(t.touchData.tapholdTimeout), t.touchData.tapholdTimeout = setTimeout(function() {
                t.touchData.singleTouchMoved === !1 && !t.pinching && !t.touchData.selecting && a(t.touchData.start, ["taphold"], N, {
                  x: Ce[0],
                  y: Ce[1]
                });
              }, t.tapholdDuration);
            }
          }
          if (N.touches.length >= 1) {
            for (var Ft = t.touchData.startPosition = [null, null, null, null, null, null], At = 0; At < Ce.length; At++)
              Ft[At] = ye[At] = Ce[At];
            var Qt = N.touches[0];
            t.touchData.startGPosition = [Qt.clientX, Qt.clientY];
          }
        }
      }, !1);
      var xe;
      t.registerBinding(e, "touchmove", xe = function(N) {
        var oe = t.touchData.capture;
        if (!(!oe && !A(N))) {
          var Ce = t.selection, ye = t.cy, ge = t.touchData.now, Re = t.touchData.earlier, me = ye.zoom();
          if (N.touches[0]) {
            var Ne = t.projectIntoViewport(N.touches[0].clientX, N.touches[0].clientY);
            ge[0] = Ne[0], ge[1] = Ne[1];
          }
          if (N.touches[1]) {
            var Ne = t.projectIntoViewport(N.touches[1].clientX, N.touches[1].clientY);
            ge[2] = Ne[0], ge[3] = Ne[1];
          }
          if (N.touches[2]) {
            var Ne = t.projectIntoViewport(N.touches[2].clientX, N.touches[2].clientY);
            ge[4] = Ne[0], ge[5] = Ne[1];
          }
          var Ke = t.touchData.startGPosition, Ze;
          if (oe && N.touches[0] && Ke) {
            for (var Ye = [], Je = 0; Je < ge.length; Je++)
              Ye[Je] = ge[Je] - Re[Je];
            var Ue = N.touches[0].clientX - Ke[0], Xe = Ue * Ue, Ct = N.touches[0].clientY - Ke[1], mt = Ct * Ct, qt = Xe + mt;
            Ze = qt >= t.touchTapThreshold2;
          }
          if (oe && t.touchData.cxt) {
            N.preventDefault();
            var Ft = N.touches[0].clientX - ie, At = N.touches[0].clientY - be, Qt = N.touches[1].clientX - ie, Gt = N.touches[1].clientY - be, Wt = Ee(Ft, At, Qt, Gt), hr = Wt / le, ir = 150, Jt = ir * ir, xr = 1.5, Mr = xr * xr;
            if (hr >= Mr || Wt >= Jt) {
              t.touchData.cxt = !1, t.data.bgActivePosistion = void 0, t.redrawHint("select", !0);
              var cr = {
                originalEvent: N,
                type: "cxttapend",
                position: {
                  x: ge[0],
                  y: ge[1]
                }
              };
              t.touchData.start ? (t.touchData.start.unactivate().emit(cr), t.touchData.start = null) : ye.emit(cr);
            }
          }
          if (oe && t.touchData.cxt) {
            var cr = {
              originalEvent: N,
              type: "cxtdrag",
              position: {
                x: ge[0],
                y: ge[1]
              }
            };
            t.data.bgActivePosistion = void 0, t.redrawHint("select", !0), t.touchData.start ? t.touchData.start.emit(cr) : ye.emit(cr), t.touchData.start && (t.touchData.start._private.grabbed = !1), t.touchData.cxtDragged = !0;
            var Ot = t.findNearestElement(ge[0], ge[1], !0, !0);
            (!t.touchData.cxtOver || Ot !== t.touchData.cxtOver) && (t.touchData.cxtOver && t.touchData.cxtOver.emit({
              originalEvent: N,
              type: "cxtdragout",
              position: {
                x: ge[0],
                y: ge[1]
              }
            }), t.touchData.cxtOver = Ot, Ot && Ot.emit({
              originalEvent: N,
              type: "cxtdragover",
              position: {
                x: ge[0],
                y: ge[1]
              }
            }));
          } else if (oe && N.touches[2] && ye.boxSelectionEnabled())
            N.preventDefault(), t.data.bgActivePosistion = void 0, this.lastThreeTouch = +new Date(), t.touchData.selecting || ye.emit({
              originalEvent: N,
              type: "boxstart",
              position: {
                x: ge[0],
                y: ge[1]
              }
            }), t.touchData.selecting = !0, t.touchData.didSelect = !0, Ce[4] = 1, !Ce || Ce.length === 0 || Ce[0] === void 0 ? (Ce[0] = (ge[0] + ge[2] + ge[4]) / 3, Ce[1] = (ge[1] + ge[3] + ge[5]) / 3, Ce[2] = (ge[0] + ge[2] + ge[4]) / 3 + 1, Ce[3] = (ge[1] + ge[3] + ge[5]) / 3 + 1) : (Ce[2] = (ge[0] + ge[2] + ge[4]) / 3, Ce[3] = (ge[1] + ge[3] + ge[5]) / 3), t.redrawHint("select", !0), t.redraw();
          else if (oe && N.touches[1] && !t.touchData.didSelect && ye.zoomingEnabled() && ye.panningEnabled() && ye.userZoomingEnabled() && ye.userPanningEnabled()) {
            N.preventDefault(), t.data.bgActivePosistion = void 0, t.redrawHint("select", !0);
            var Nt = t.dragData.touchDragEles;
            if (Nt) {
              t.redrawHint("drag", !0);
              for (var Ht = 0; Ht < Nt.length; Ht++) {
                var Pa = Nt[Ht]._private;
                Pa.grabbed = !1, Pa.rscratch.inDragLayer = !1;
              }
            }
            var Tr = t.touchData.start, Ft = N.touches[0].clientX - ie, At = N.touches[0].clientY - be, Qt = N.touches[1].clientX - ie, Gt = N.touches[1].clientY - be, sl = Me(Ft, At, Qt, Gt), Fp = sl / re;
            if (Ae) {
              var Gp = Ft - P, zp = At - Q, Vp = Qt - W, Up = Gt - Z, $p = (Gp + Vp) / 2, Yp = (zp + Up) / 2, dn = ye.zoom(), fs = dn * Fp, di = ye.pan(), ol = se[0] * dn + di.x, ul = se[1] * dn + di.y, _p = {
                x: -fs / dn * (ol - di.x - $p) + ol,
                y: -fs / dn * (ul - di.y - Yp) + ul
              };
              if (Tr && Tr.active()) {
                var Nt = t.dragData.touchDragEles;
                p(Nt), t.redrawHint("drag", !0), t.redrawHint("eles", !0), Tr.unactivate().emit("freeon"), Nt.emit("free"), t.dragData.didDrag && (Tr.emit("dragfreeon"), Nt.emit("dragfree"));
              }
              ye.viewport({
                zoom: fs,
                pan: _p,
                cancelOnFailedZoom: !0
              }), ye.emit("pinchzoom"), re = sl, P = Ft, Q = At, W = Qt, Z = Gt, t.pinching = !0;
            }
            if (N.touches[0]) {
              var Ne = t.projectIntoViewport(N.touches[0].clientX, N.touches[0].clientY);
              ge[0] = Ne[0], ge[1] = Ne[1];
            }
            if (N.touches[1]) {
              var Ne = t.projectIntoViewport(N.touches[1].clientX, N.touches[1].clientY);
              ge[2] = Ne[0], ge[3] = Ne[1];
            }
            if (N.touches[2]) {
              var Ne = t.projectIntoViewport(N.touches[2].clientX, N.touches[2].clientY);
              ge[4] = Ne[0], ge[5] = Ne[1];
            }
          } else if (N.touches[0] && !t.touchData.didSelect) {
            var vr = t.touchData.start, hs = t.touchData.last, Ot;
            if (!t.hoverData.draggingEles && !t.swipePanning && (Ot = t.findNearestElement(ge[0], ge[1], !0, !0)), oe && vr != null && N.preventDefault(), oe && vr != null && t.nodeIsDraggable(vr))
              if (Ze) {
                var Nt = t.dragData.touchDragEles, ll = !t.dragData.didDrag;
                ll && v(Nt, {
                  inDragLayer: !0
                }), t.dragData.didDrag = !0;
                var gn = {
                  x: 0,
                  y: 0
                };
                if (R(Ye[0]) && R(Ye[1]) && (gn.x += Ye[0], gn.y += Ye[1], ll)) {
                  t.redrawHint("eles", !0);
                  var dr = t.touchData.dragDelta;
                  dr && R(dr[0]) && R(dr[1]) && (gn.x += dr[0], gn.y += dr[1]);
                }
                t.hoverData.draggingEles = !0, Nt.silentShift(gn).emit("position drag"), t.redrawHint("drag", !0), t.touchData.startPosition[0] == Re[0] && t.touchData.startPosition[1] == Re[1] && t.redrawHint("eles", !0), t.redraw();
              } else {
                var dr = t.touchData.dragDelta = t.touchData.dragDelta || [];
                dr.length === 0 ? (dr.push(Ye[0]), dr.push(Ye[1])) : (dr[0] += Ye[0], dr[1] += Ye[1]);
              }
            if (a(vr || Ot, ["touchmove", "tapdrag", "vmousemove"], N, {
              x: ge[0],
              y: ge[1]
            }), (!vr || !vr.grabbed()) && Ot != hs && (hs && hs.emit({
              originalEvent: N,
              type: "tapdragout",
              position: {
                x: ge[0],
                y: ge[1]
              }
            }), Ot && Ot.emit({
              originalEvent: N,
              type: "tapdragover",
              position: {
                x: ge[0],
                y: ge[1]
              }
            })), t.touchData.last = Ot, oe)
              for (var Ht = 0; Ht < ge.length; Ht++)
                ge[Ht] && t.touchData.startPosition[Ht] && Ze && (t.touchData.singleTouchMoved = !0);
            if (oe && (vr == null || vr.pannable()) && ye.panningEnabled() && ye.userPanningEnabled()) {
              var Hp = i(vr, t.touchData.starts);
              Hp && (N.preventDefault(), t.data.bgActivePosistion || (t.data.bgActivePosistion = ha(t.touchData.startPosition)), t.swipePanning ? (ye.panBy({
                x: Ye[0] * me,
                y: Ye[1] * me
              }), ye.emit("dragpan")) : Ze && (t.swipePanning = !0, ye.panBy({
                x: Ue * me,
                y: Ct * me
              }), ye.emit("dragpan"), vr && (vr.unactivate(), t.redrawHint("select", !0), t.touchData.start = null)));
              var Ne = t.projectIntoViewport(N.touches[0].clientX, N.touches[0].clientY);
              ge[0] = Ne[0], ge[1] = Ne[1];
            }
          }
          for (var Je = 0; Je < ge.length; Je++)
            Re[Je] = ge[Je];
          oe && N.touches.length > 0 && !t.hoverData.draggingEles && !t.swipePanning && t.data.bgActivePosistion != null && (t.data.bgActivePosistion = void 0, t.redrawHint("select", !0), t.redraw());
        }
      }, !1);
      var Te;
      t.registerBinding(e, "touchcancel", Te = function(N) {
        var oe = t.touchData.start;
        t.touchData.capture = !1, oe && oe.unactivate();
      });
      var Be, He, ke, Pe;
      if (t.registerBinding(e, "touchend", Be = function(N) {
        var oe = t.touchData.start, Ce = t.touchData.capture;
        if (Ce)
          N.touches.length === 0 && (t.touchData.capture = !1), N.preventDefault();
        else
          return;
        var ye = t.selection;
        t.swipePanning = !1, t.hoverData.draggingEles = !1;
        var ge = t.cy, Re = ge.zoom(), me = t.touchData.now, Ne = t.touchData.earlier;
        if (N.touches[0]) {
          var Ke = t.projectIntoViewport(N.touches[0].clientX, N.touches[0].clientY);
          me[0] = Ke[0], me[1] = Ke[1];
        }
        if (N.touches[1]) {
          var Ke = t.projectIntoViewport(N.touches[1].clientX, N.touches[1].clientY);
          me[2] = Ke[0], me[3] = Ke[1];
        }
        if (N.touches[2]) {
          var Ke = t.projectIntoViewport(N.touches[2].clientX, N.touches[2].clientY);
          me[4] = Ke[0], me[5] = Ke[1];
        }
        oe && oe.unactivate();
        var Ze;
        if (t.touchData.cxt) {
          if (Ze = {
            originalEvent: N,
            type: "cxttapend",
            position: {
              x: me[0],
              y: me[1]
            }
          }, oe ? oe.emit(Ze) : ge.emit(Ze), !t.touchData.cxtDragged) {
            var Ye = {
              originalEvent: N,
              type: "cxttap",
              position: {
                x: me[0],
                y: me[1]
              }
            };
            oe ? oe.emit(Ye) : ge.emit(Ye);
          }
          t.touchData.start && (t.touchData.start._private.grabbed = !1), t.touchData.cxt = !1, t.touchData.start = null, t.redraw();
          return;
        }
        if (!N.touches[2] && ge.boxSelectionEnabled() && t.touchData.selecting) {
          t.touchData.selecting = !1;
          var Je = ge.collection(t.getAllInBox(ye[0], ye[1], ye[2], ye[3]));
          ye[0] = void 0, ye[1] = void 0, ye[2] = void 0, ye[3] = void 0, ye[4] = 0, t.redrawHint("select", !0), ge.emit({
            type: "boxend",
            originalEvent: N,
            position: {
              x: me[0],
              y: me[1]
            }
          });
          var Ue = function(Jt) {
            return Jt.selectable() && !Jt.selected();
          };
          Je.emit("box").stdFilter(Ue).select().emit("boxselect"), Je.nonempty() && t.redrawHint("eles", !0), t.redraw();
        }
        if (oe != null && oe.unactivate(), N.touches[2])
          t.data.bgActivePosistion = void 0, t.redrawHint("select", !0);
        else if (!N.touches[1]) {
          if (!N.touches[0]) {
            if (!N.touches[0]) {
              t.data.bgActivePosistion = void 0, t.redrawHint("select", !0);
              var Xe = t.dragData.touchDragEles;
              if (oe != null) {
                var Ct = oe._private.grabbed;
                p(Xe), t.redrawHint("drag", !0), t.redrawHint("eles", !0), Ct && (oe.emit("freeon"), Xe.emit("free"), t.dragData.didDrag && (oe.emit("dragfreeon"), Xe.emit("dragfree"))), a(oe, ["touchend", "tapend", "vmouseup", "tapdragout"], N, {
                  x: me[0],
                  y: me[1]
                }), oe.unactivate(), t.touchData.start = null;
              } else {
                var mt = t.findNearestElement(me[0], me[1], !0, !0);
                a(mt, ["touchend", "tapend", "vmouseup", "tapdragout"], N, {
                  x: me[0],
                  y: me[1]
                });
              }
              var qt = t.touchData.startPosition[0] - me[0], Ft = qt * qt, At = t.touchData.startPosition[1] - me[1], Qt = At * At, Gt = Ft + Qt, Wt = Gt * Re * Re;
              t.touchData.singleTouchMoved || (oe || ge.$(":selected").unselect(["tapunselect"]), a(oe, ["tap", "vclick"], N, {
                x: me[0],
                y: me[1]
              }), He = !1, N.timeStamp - Pe <= ge.multiClickDebounceTime() ? (ke && clearTimeout(ke), He = !0, Pe = null, a(oe, ["dbltap", "vdblclick"], N, {
                x: me[0],
                y: me[1]
              })) : (ke = setTimeout(function() {
                He || a(oe, ["onetap", "voneclick"], N, {
                  x: me[0],
                  y: me[1]
                });
              }, ge.multiClickDebounceTime()), Pe = N.timeStamp)), oe != null && !t.dragData.didDrag && oe._private.selectable && Wt < t.touchTapThreshold2 && !t.pinching && (ge.selectionType() === "single" ? (ge.$(r).unmerge(oe).unselect(["tapunselect"]), oe.select(["tapselect"])) : oe.selected() ? oe.unselect(["tapunselect"]) : oe.select(["tapselect"]), t.redrawHint("eles", !0)), t.touchData.singleTouchMoved = !0;
            }
          }
        }
        for (var hr = 0; hr < me.length; hr++)
          Ne[hr] = me[hr];
        t.dragData.didDrag = !1, N.touches.length === 0 && (t.touchData.dragDelta = [], t.touchData.startPosition = [null, null, null, null, null, null], t.touchData.startGPosition = null, t.touchData.didSelect = !1), N.touches.length < 2 && (N.touches.length === 1 && (t.touchData.startGPosition = [N.touches[0].clientX, N.touches[0].clientY]), t.pinching = !1, t.redrawHint("eles", !0), t.redraw());
      }, !1), typeof TouchEvent > "u") {
        var Ve = [], _e = function(N) {
          return {
            clientX: N.clientX,
            clientY: N.clientY,
            force: 1,
            identifier: N.pointerId,
            pageX: N.pageX,
            pageY: N.pageY,
            radiusX: N.width / 2,
            radiusY: N.height / 2,
            screenX: N.screenX,
            screenY: N.screenY,
            target: N.target
          };
        }, $e = function(N) {
          return {
            event: N,
            touch: _e(N)
          };
        }, qe = function(N) {
          Ve.push($e(N));
        }, vt = function(N) {
          for (var oe = 0; oe < Ve.length; oe++) {
            var Ce = Ve[oe];
            if (Ce.event.pointerId === N.pointerId) {
              Ve.splice(oe, 1);
              return;
            }
          }
        }, it = function(N) {
          var oe = Ve.filter(function(Ce) {
            return Ce.event.pointerId === N.pointerId;
          })[0];
          oe.event = N, oe.touch = _e(N);
        }, et = function(N) {
          N.touches = Ve.map(function(oe) {
            return oe.touch;
          });
        }, ut = function(N) {
          return N.pointerType === "mouse" || N.pointerType === 4;
        };
        t.registerBinding(t.container, "pointerdown", function(Se) {
          ut(Se) || (Se.preventDefault(), qe(Se), et(Se), ne(Se));
        }), t.registerBinding(t.container, "pointerup", function(Se) {
          ut(Se) || (vt(Se), et(Se), Be(Se));
        }), t.registerBinding(t.container, "pointercancel", function(Se) {
          ut(Se) || (vt(Se), et(Se), Te(Se));
        }), t.registerBinding(t.container, "pointermove", function(Se) {
          ut(Se) || (Se.preventDefault(), it(Se), et(Se), xe(Se));
        });
      }
    };
    var Ar = {};
    Ar.generatePolygon = function(t, e) {
      return this.nodeShapes[t] = {
        renderer: this,
        name: t,
        points: e,
        draw: function(a, n, i, s, o, l) {
          this.renderer.nodeShapeImpl("polygon", a, n, i, s, o, this.points);
        },
        intersectLine: function(a, n, i, s, o, l, u, f) {
          return Wa(o, l, this.points, a, n, i / 2, s / 2, u);
        },
        checkPoint: function(a, n, i, s, o, l, u, f) {
          return Dr(a, n, this.points, l, u, s, o, [0, -1], i);
        }
      };
    }, Ar.generateEllipse = function() {
      return this.nodeShapes.ellipse = {
        renderer: this,
        name: "ellipse",
        draw: function(e, r, a, n, i, s) {
          this.renderer.nodeShapeImpl(this.name, e, r, a, n, i);
        },
        intersectLine: function(e, r, a, n, i, s, o, l) {
          return oh(i, s, e, r, a / 2 + o, n / 2 + o);
        },
        checkPoint: function(e, r, a, n, i, s, o, l) {
          return qr(e, r, n, i, s, o, a);
        }
      };
    }, Ar.generateRoundPolygon = function(t, e) {
      return this.nodeShapes[t] = {
        renderer: this,
        name: t,
        points: e,
        getOrCreateCorners: function(a, n, i, s, o, l, u) {
          if (l[u] !== void 0 && l[u + "-cx"] === a && l[u + "-cy"] === n)
            return l[u];
          l[u] = new Array(e.length / 2), l[u + "-cx"] = a, l[u + "-cy"] = n;
          var f = i / 2, h = s / 2;
          o = o === "auto" ? Ys(i, s) : o;
          for (var c = new Array(e.length / 2), d = 0; d < e.length / 2; d++)
            c[d] = {
              x: a + f * e[d * 2],
              y: n + h * e[d * 2 + 1]
            };
          var v, y, p, g, m = c.length;
          for (y = c[m - 1], v = 0; v < m; v++)
            p = c[v % m], g = c[(v + 1) % m], l[u][v] = es(y, p, g, o), y = p, p = g;
          return l[u];
        },
        draw: function(a, n, i, s, o, l, u) {
          this.renderer.nodeShapeImpl("round-polygon", a, n, i, s, o, this.points, this.getOrCreateCorners(n, i, s, o, l, u, "drawCorners"));
        },
        intersectLine: function(a, n, i, s, o, l, u, f, h) {
          return uh(o, l, this.points, a, n, i, s, u, this.getOrCreateCorners(a, n, i, s, f, h, "corners"));
        },
        checkPoint: function(a, n, i, s, o, l, u, f, h) {
          return sh(a, n, this.points, l, u, s, o, this.getOrCreateCorners(l, u, s, o, f, h, "corners"));
        }
      };
    }, Ar.generateRoundRectangle = function() {
      return this.nodeShapes["round-rectangle"] = this.nodeShapes.roundrectangle = {
        renderer: this,
        name: "round-rectangle",
        points: Xt(4, 0),
        draw: function(e, r, a, n, i, s) {
          this.renderer.nodeShapeImpl(this.name, e, r, a, n, i, this.points, s);
        },
        intersectLine: function(e, r, a, n, i, s, o, l) {
          return Us(i, s, e, r, a, n, o, l);
        },
        checkPoint: function(e, r, a, n, i, s, o, l) {
          var u = n / 2, f = i / 2;
          l = l === "auto" ? Wr(n, i) : l, l = Math.min(u, f, l);
          var h = l * 2;
          return !!(Dr(e, r, this.points, s, o, n, i - h, [0, -1], a) || Dr(e, r, this.points, s, o, n - h, i, [0, -1], a) || qr(e, r, h, h, s - u + l, o - f + l, a) || qr(e, r, h, h, s + u - l, o - f + l, a) || qr(e, r, h, h, s + u - l, o + f - l, a) || qr(e, r, h, h, s - u + l, o + f - l, a));
        }
      };
    }, Ar.generateCutRectangle = function() {
      return this.nodeShapes["cut-rectangle"] = this.nodeShapes.cutrectangle = {
        renderer: this,
        name: "cut-rectangle",
        cornerLength: Di(),
        points: Xt(4, 0),
        draw: function(e, r, a, n, i, s) {
          this.renderer.nodeShapeImpl(this.name, e, r, a, n, i, null, s);
        },
        generateCutTrianglePts: function(e, r, a, n, i) {
          var s = i === "auto" ? this.cornerLength : i, o = r / 2, l = e / 2, u = a - l, f = a + l, h = n - o, c = n + o;
          return {
            topLeft: [u, h + s, u + s, h, u + s, h + s],
            topRight: [f - s, h, f, h + s, f - s, h + s],
            bottomRight: [f, c - s, f - s, c, f - s, c - s],
            bottomLeft: [u + s, c, u, c - s, u + s, c - s]
          };
        },
        intersectLine: function(e, r, a, n, i, s, o, l) {
          var u = this.generateCutTrianglePts(a + 2 * o, n + 2 * o, e, r, l), f = [].concat.apply([], [u.topLeft.splice(0, 4), u.topRight.splice(0, 4), u.bottomRight.splice(0, 4), u.bottomLeft.splice(0, 4)]);
          return Wa(i, s, f, e, r);
        },
        checkPoint: function(e, r, a, n, i, s, o, l) {
          var u = l === "auto" ? this.cornerLength : l;
          if (Dr(e, r, this.points, s, o, n, i - 2 * u, [0, -1], a) || Dr(e, r, this.points, s, o, n - 2 * u, i, [0, -1], a))
            return !0;
          var f = this.generateCutTrianglePts(n, i, s, o);
          return Zt(e, r, f.topLeft) || Zt(e, r, f.topRight) || Zt(e, r, f.bottomRight) || Zt(e, r, f.bottomLeft);
        }
      };
    }, Ar.generateBarrel = function() {
      return this.nodeShapes.barrel = {
        renderer: this,
        name: "barrel",
        points: Xt(4, 0),
        draw: function(e, r, a, n, i, s) {
          this.renderer.nodeShapeImpl(this.name, e, r, a, n, i);
        },
        intersectLine: function(e, r, a, n, i, s, o, l) {
          var u = 0.15, f = 0.5, h = 0.85, c = this.generateBarrelBezierPts(a + 2 * o, n + 2 * o, e, r), d = function(p) {
            var g = ca({
              x: p[0],
              y: p[1]
            }, {
              x: p[2],
              y: p[3]
            }, {
              x: p[4],
              y: p[5]
            }, u), m = ca({
              x: p[0],
              y: p[1]
            }, {
              x: p[2],
              y: p[3]
            }, {
              x: p[4],
              y: p[5]
            }, f), b = ca({
              x: p[0],
              y: p[1]
            }, {
              x: p[2],
              y: p[3]
            }, {
              x: p[4],
              y: p[5]
            }, h);
            return [p[0], p[1], g.x, g.y, m.x, m.y, b.x, b.y, p[4], p[5]];
          }, v = [].concat(d(c.topLeft), d(c.topRight), d(c.bottomRight), d(c.bottomLeft));
          return Wa(i, s, v, e, r);
        },
        generateBarrelBezierPts: function(e, r, a, n) {
          var i = r / 2, s = e / 2, o = a - s, l = a + s, u = n - i, f = n + i, h = Si(e, r), c = h.heightOffset, d = h.widthOffset, v = h.ctrlPtOffsetPct * e, y = {
            topLeft: [o, u + c, o + v, u, o + d, u],
            topRight: [l - d, u, l - v, u, l, u + c],
            bottomRight: [l, f - c, l - v, f, l - d, f],
            bottomLeft: [o + d, f, o + v, f, o, f - c]
          };
          return y.topLeft.isTop = !0, y.topRight.isTop = !0, y.bottomLeft.isBottom = !0, y.bottomRight.isBottom = !0, y;
        },
        checkPoint: function(e, r, a, n, i, s, o, l) {
          var u = Si(n, i), f = u.heightOffset, h = u.widthOffset;
          if (Dr(e, r, this.points, s, o, n, i - 2 * f, [0, -1], a) || Dr(e, r, this.points, s, o, n - 2 * h, i, [0, -1], a))
            return !0;
          for (var c = this.generateBarrelBezierPts(n, i, s, o), d = function(I, A, z) {
            var F = z[4], G = z[2], X = z[0], P = z[5], Q = z[1], W = Math.min(F, X), Z = Math.max(F, X), re = Math.min(P, Q), le = Math.max(P, Q);
            if (W <= I && I <= Z && re <= A && A <= le) {
              var ve = lh(F, G, X), se = rh(ve[0], ve[1], ve[2], I), ie = se.filter(function(be) {
                return 0 <= be && be <= 1;
              });
              if (ie.length > 0)
                return ie[0];
            }
            return null;
          }, v = Object.keys(c), y = 0; y < v.length; y++) {
            var p = v[y], g = c[p], m = d(e, r, g);
            if (m != null) {
              var b = g[5], E = g[3], M = g[1], S = Mt(b, E, M, m);
              if (g.isTop && S <= r || g.isBottom && r <= S)
                return !0;
            }
          }
          return !1;
        }
      };
    }, Ar.generateBottomRoundrectangle = function() {
      return this.nodeShapes["bottom-round-rectangle"] = this.nodeShapes.bottomroundrectangle = {
        renderer: this,
        name: "bottom-round-rectangle",
        points: Xt(4, 0),
        draw: function(e, r, a, n, i, s) {
          this.renderer.nodeShapeImpl(this.name, e, r, a, n, i, this.points, s);
        },
        intersectLine: function(e, r, a, n, i, s, o, l) {
          var u = e - (a / 2 + o), f = r - (n / 2 + o), h = f, c = e + (a / 2 + o), d = kr(i, s, e, r, u, f, c, h, !1);
          return d.length > 0 ? d : Us(i, s, e, r, a, n, o, l);
        },
        checkPoint: function(e, r, a, n, i, s, o, l) {
          l = l === "auto" ? Wr(n, i) : l;
          var u = 2 * l;
          if (Dr(e, r, this.points, s, o, n, i - u, [0, -1], a) || Dr(e, r, this.points, s, o, n - u, i, [0, -1], a))
            return !0;
          var f = n / 2 + 2 * a, h = i / 2 + 2 * a, c = [s - f, o - h, s - f, o, s + f, o, s + f, o - h];
          return !!(Zt(e, r, c) || qr(e, r, u, u, s + n / 2 - l, o + i / 2 - l, a) || qr(e, r, u, u, s - n / 2 + l, o + i / 2 - l, a));
        }
      };
    }, Ar.registerNodeShapes = function() {
      var t = this.nodeShapes = {}, e = this;
      this.generateEllipse(), this.generatePolygon("triangle", Xt(3, 0)), this.generateRoundPolygon("round-triangle", Xt(3, 0)), this.generatePolygon("rectangle", Xt(4, 0)), t.square = t.rectangle, this.generateRoundRectangle(), this.generateCutRectangle(), this.generateBarrel(), this.generateBottomRoundrectangle();
      {
        var r = [0, 1, 1, 0, 0, -1, -1, 0];
        this.generatePolygon("diamond", r), this.generateRoundPolygon("round-diamond", r);
      }
      this.generatePolygon("pentagon", Xt(5, 0)), this.generateRoundPolygon("round-pentagon", Xt(5, 0)), this.generatePolygon("hexagon", Xt(6, 0)), this.generateRoundPolygon("round-hexagon", Xt(6, 0)), this.generatePolygon("heptagon", Xt(7, 0)), this.generateRoundPolygon("round-heptagon", Xt(7, 0)), this.generatePolygon("octagon", Xt(8, 0)), this.generateRoundPolygon("round-octagon", Xt(8, 0));
      var a = new Array(20);
      {
        var n = Ci(5, 0), i = Ci(5, Math.PI / 5), s = 0.5 * (3 - Math.sqrt(5));
        s *= 1.57;
        for (var o = 0; o < i.length / 2; o++)
          i[o * 2] *= s, i[o * 2 + 1] *= s;
        for (var o = 0; o < 20 / 4; o++)
          a[o * 4] = n[o * 2], a[o * 4 + 1] = n[o * 2 + 1], a[o * 4 + 2] = i[o * 2], a[o * 4 + 3] = i[o * 2 + 1];
      }
      a = $s(a), this.generatePolygon("star", a), this.generatePolygon("vee", [-1, -1, 0, -0.333, 1, -1, 0, 1]), this.generatePolygon("rhomboid", [-1, -1, 0.333, -1, 1, 1, -0.333, 1]), this.generatePolygon("right-rhomboid", [-0.333, -1, 1, -1, 0.333, 1, -1, 1]), this.nodeShapes.concavehexagon = this.generatePolygon("concave-hexagon", [-1, -0.95, -0.75, 0, -1, 0.95, 1, 0.95, 0.75, 0, 1, -0.95]);
      {
        var l = [-1, -1, 0.25, -1, 1, 0, 0.25, 1, -1, 1];
        this.generatePolygon("tag", l), this.generateRoundPolygon("round-tag", l);
      }
      t.makePolygon = function(u) {
        var f = u.join("$"), h = "polygon-" + f, c;
        return (c = this[h]) ? c : e.generatePolygon(h, u);
      };
    };
    var fn = {};
    fn.timeToRender = function() {
      return this.redrawTotalTime / this.redrawCount;
    }, fn.redraw = function(t) {
      t = t || ks();
      var e = this;
      e.averageRedrawTime === void 0 && (e.averageRedrawTime = 0), e.lastRedrawTime === void 0 && (e.lastRedrawTime = 0), e.lastDrawTime === void 0 && (e.lastDrawTime = 0), e.requestedFrame = !0, e.renderOptions = t;
    }, fn.beforeRender = function(t, e) {
      if (!this.destroyed) {
        e == null && Dt("Priority is not optional for beforeRender");
        var r = this.beforeRenderCallbacks;
        r.push({
          fn: t,
          priority: e
        }), r.sort(function(a, n) {
          return n.priority - a.priority;
        });
      }
    };
    var Bu = function(e, r, a) {
      for (var n = e.beforeRenderCallbacks, i = 0; i < n.length; i++)
        n[i].fn(r, a);
    };
    fn.startRenderLoop = function() {
      var t = this, e = t.cy;
      if (!t.renderLoopStarted) {
        t.renderLoopStarted = !0;
        var r = function a(n) {
          if (!t.destroyed) {
            if (!e.batching())
              if (t.requestedFrame && !t.skipFrame) {
                Bu(t, !0, n);
                var i = Cr();
                t.render(t.renderOptions);
                var s = t.lastDrawTime = Cr();
                t.averageRedrawTime === void 0 && (t.averageRedrawTime = s - i), t.redrawCount === void 0 && (t.redrawCount = 0), t.redrawCount++, t.redrawTotalTime === void 0 && (t.redrawTotalTime = 0);
                var o = s - i;
                t.redrawTotalTime += o, t.lastRedrawTime = o, t.averageRedrawTime = t.averageRedrawTime / 2 + o / 2, t.requestedFrame = !1;
              } else
                Bu(t, !1, n);
            t.skipFrame = !1, xn(a);
          }
        };
        xn(r);
      }
    };
    var _g = function(e) {
      this.init(e);
    }, Fu = _g, Na = Fu.prototype;
    Na.clientFunctions = ["redrawHint", "render", "renderTo", "matchCanvasSize", "nodeShapeImpl", "arrowShapeImpl"], Na.init = function(t) {
      var e = this;
      e.options = t, e.cy = t.cy;
      var r = e.container = t.cy.container(), a = e.cy.window();
      if (a) {
        var n = a.document, i = n.head, s = "__________cytoscape_stylesheet", o = "__________cytoscape_container", l = n.getElementById(s) != null;
        if (r.className.indexOf(o) < 0 && (r.className = (r.className || "") + " " + o), !l) {
          var u = n.createElement("style");
          u.id = s, u.textContent = "." + o + " { position: relative; }", i.insertBefore(u, i.children[0]);
        }
        var f = a.getComputedStyle(r), h = f.getPropertyValue("position");
        h === "static" && ht("A Cytoscape container has style position:static and so can not use UI extensions properly");
      }
      e.selection = [void 0, void 0, void 0, void 0, 0], e.bezierProjPcts = [0.05, 0.225, 0.4, 0.5, 0.6, 0.775, 0.95], e.hoverData = {
        down: null,
        last: null,
        downTime: null,
        triggerMode: null,
        dragging: !1,
        initialPan: [null, null],
        capture: !1
      }, e.dragData = {
        possibleDragElements: []
      }, e.touchData = {
        start: null,
        capture: !1,
        startPosition: [null, null, null, null, null, null],
        singleTouchStartTime: null,
        singleTouchMoved: !0,
        now: [null, null, null, null, null, null],
        earlier: [null, null, null, null, null, null]
      }, e.redraws = 0, e.showFps = t.showFps, e.debug = t.debug, e.hideEdgesOnViewport = t.hideEdgesOnViewport, e.textureOnViewport = t.textureOnViewport, e.wheelSensitivity = t.wheelSensitivity, e.motionBlurEnabled = t.motionBlur, e.forcedPixelRatio = R(t.pixelRatio) ? t.pixelRatio : null, e.motionBlur = t.motionBlur, e.motionBlurOpacity = t.motionBlurOpacity, e.motionBlurTransparency = 1 - e.motionBlurOpacity, e.motionBlurPxRatio = 1, e.mbPxRBlurry = 1, e.minMbLowQualFrames = 4, e.fullQualityMb = !1, e.clearedForMotionBlur = [], e.desktopTapThreshold = t.desktopTapThreshold, e.desktopTapThreshold2 = t.desktopTapThreshold * t.desktopTapThreshold, e.touchTapThreshold = t.touchTapThreshold, e.touchTapThreshold2 = t.touchTapThreshold * t.touchTapThreshold, e.tapholdDuration = 500, e.bindings = [], e.beforeRenderCallbacks = [], e.beforeRenderPriorities = {
        animations: 400,
        eleCalcs: 300,
        eleTxrDeq: 200,
        lyrTxrDeq: 150,
        lyrTxrSkip: 100
      }, e.registerNodeShapes(), e.registerArrowShapes(), e.registerCalculationListeners();
    }, Na.notify = function(t, e) {
      var r = this, a = r.cy;
      if (!this.destroyed) {
        if (t === "init") {
          r.load();
          return;
        }
        if (t === "destroy") {
          r.destroy();
          return;
        }
        (t === "add" || t === "remove" || t === "move" && a.hasCompoundNodes() || t === "load" || t === "zorder" || t === "mount") && r.invalidateCachedZSortedEles(), t === "viewport" && r.redrawHint("select", !0), (t === "load" || t === "resize" || t === "mount") && (r.invalidateContainerClientCoordsCache(), r.matchCanvasSize(r.container)), r.redrawHint("eles", !0), r.redrawHint("drag", !0), this.startRenderLoop(), this.redraw();
      }
    }, Na.destroy = function() {
      var t = this;
      t.destroyed = !0, t.cy.stopAnimationLoop();
      for (var e = 0; e < t.bindings.length; e++) {
        var r = t.bindings[e], a = r, n = a.target;
        (n.off || n.removeEventListener).apply(n, a.args);
      }
      if (t.bindings = [], t.beforeRenderCallbacks = [], t.onUpdateEleCalcsFns = [], t.removeObserver && t.removeObserver.disconnect(), t.styleObserver && t.styleObserver.disconnect(), t.resizeObserver && t.resizeObserver.disconnect(), t.labelCalcDiv)
        try {
          document.body.removeChild(t.labelCalcDiv);
        } catch {
        }
    }, Na.isHeadless = function() {
      return !1;
    }, [Ki, ku, Pu, Ma, Ar, fn].forEach(function(t) {
      Qe(Na, t);
    });
    var rs = 1e3 / 60, Gu = {
      setupDequeueing: function(e) {
        return function() {
          var a = this, n = this.renderer;
          if (!a.dequeueingSetup) {
            a.dequeueingSetup = !0;
            var i = wn(function() {
              n.redrawHint("eles", !0), n.redrawHint("drag", !0), n.redraw();
            }, e.deqRedrawThreshold), s = function(u, f) {
              var h = Cr(), c = n.averageRedrawTime, d = n.lastRedrawTime, v = [], y = n.cy.extent(), p = n.getPixelRatio();
              for (u || n.flushRenderedStyleQueue(); ; ) {
                var g = Cr(), m = g - h, b = g - f;
                if (d < rs) {
                  var E = rs - (u ? c : 0);
                  if (b >= e.deqFastCost * E)
                    break;
                } else if (u) {
                  if (m >= e.deqCost * d || m >= e.deqAvgCost * c)
                    break;
                } else if (b >= e.deqNoDrawCost * rs)
                  break;
                var M = e.deq(a, p, y);
                if (M.length > 0)
                  for (var S = 0; S < M.length; S++)
                    v.push(M[S]);
                else
                  break;
              }
              v.length > 0 && (e.onDeqd(a, v), !u && e.shouldRedraw(a, v, p, y) && i());
            }, o = e.priority || mi;
            n.beforeRender(s, o(a));
          }
        };
      }
    }, Hg = /* @__PURE__ */ function() {
      function t(e) {
        var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Cn;
        ce(this, t), this.idsByKey = new pr(), this.keyForId = new pr(), this.cachesByLvl = new pr(), this.lvls = [], this.getKey = e, this.doesEleInvalidateKey = r;
      }
      return D(t, [{
        key: "getIdsFor",
        value: function(r) {
          r == null && Dt("Can not get id list for null key");
          var a = this.idsByKey, n = this.idsByKey.get(r);
          return n || (n = new fa(), a.set(r, n)), n;
        }
      }, {
        key: "addIdForKey",
        value: function(r, a) {
          r != null && this.getIdsFor(r).add(a);
        }
      }, {
        key: "deleteIdForKey",
        value: function(r, a) {
          r != null && this.getIdsFor(r).delete(a);
        }
      }, {
        key: "getNumberOfIdsForKey",
        value: function(r) {
          return r == null ? 0 : this.getIdsFor(r).size;
        }
      }, {
        key: "updateKeyMappingFor",
        value: function(r) {
          var a = r.id(), n = this.keyForId.get(a), i = this.getKey(r);
          this.deleteIdForKey(n, a), this.addIdForKey(i, a), this.keyForId.set(a, i);
        }
      }, {
        key: "deleteKeyMappingFor",
        value: function(r) {
          var a = r.id(), n = this.keyForId.get(a);
          this.deleteIdForKey(n, a), this.keyForId.delete(a);
        }
      }, {
        key: "keyHasChangedFor",
        value: function(r) {
          var a = r.id(), n = this.keyForId.get(a), i = this.getKey(r);
          return n !== i;
        }
      }, {
        key: "isInvalid",
        value: function(r) {
          return this.keyHasChangedFor(r) || this.doesEleInvalidateKey(r);
        }
      }, {
        key: "getCachesAt",
        value: function(r) {
          var a = this.cachesByLvl, n = this.lvls, i = a.get(r);
          return i || (i = new pr(), a.set(r, i), n.push(r)), i;
        }
      }, {
        key: "getCache",
        value: function(r, a) {
          return this.getCachesAt(a).get(r);
        }
      }, {
        key: "get",
        value: function(r, a) {
          var n = this.getKey(r), i = this.getCache(n, a);
          return i != null && this.updateKeyMappingFor(r), i;
        }
      }, {
        key: "getForCachedKey",
        value: function(r, a) {
          var n = this.keyForId.get(r.id()), i = this.getCache(n, a);
          return i;
        }
      }, {
        key: "hasCache",
        value: function(r, a) {
          return this.getCachesAt(a).has(r);
        }
      }, {
        key: "has",
        value: function(r, a) {
          var n = this.getKey(r);
          return this.hasCache(n, a);
        }
      }, {
        key: "setCache",
        value: function(r, a, n) {
          n.key = r, this.getCachesAt(a).set(r, n);
        }
      }, {
        key: "set",
        value: function(r, a, n) {
          var i = this.getKey(r);
          this.setCache(i, a, n), this.updateKeyMappingFor(r);
        }
      }, {
        key: "deleteCache",
        value: function(r, a) {
          this.getCachesAt(a).delete(r);
        }
      }, {
        key: "delete",
        value: function(r, a) {
          var n = this.getKey(r);
          this.deleteCache(n, a);
        }
      }, {
        key: "invalidateKey",
        value: function(r) {
          var a = this;
          this.lvls.forEach(function(n) {
            return a.deleteCache(r, n);
          });
        }
      }, {
        key: "invalidate",
        value: function(r) {
          var a = r.id(), n = this.keyForId.get(a);
          this.deleteKeyMappingFor(r);
          var i = this.doesEleInvalidateKey(r);
          return i && this.invalidateKey(n), i || this.getNumberOfIdsForKey(n) === 0;
        }
      }]), t;
    }(), zu = 25, hi = 50, ci = -4, as = 3, Xg = 7.99, qg = 8, Wg = 1024, Kg = 1024, Zg = 1024, Qg = 0.2, Jg = 0.8, jg = 10, ep = 0.15, tp = 0.1, rp = 0.9, ap = 0.9, np = 100, ip = 1, Ia = {
      dequeue: "dequeue",
      downscale: "downscale",
      highQuality: "highQuality"
    }, sp = It({
      getKey: null,
      doesEleInvalidateKey: Cn,
      drawElement: null,
      getBoundingBox: null,
      getRotationPoint: null,
      getRotationOffset: null,
      isVisible: Ms,
      allowEdgeTxrCaching: !0,
      allowParentTxrCaching: !0
    }), hn = function(e, r) {
      var a = this;
      a.renderer = e, a.onDequeues = [];
      var n = sp(r);
      Qe(a, n), a.lookup = new Hg(n.getKey, n.doesEleInvalidateKey), a.setupDequeueing();
    }, Lt = hn.prototype;
    Lt.reasons = Ia, Lt.getTextureQueue = function(t) {
      var e = this;
      return e.eleImgCaches = e.eleImgCaches || {}, e.eleImgCaches[t] = e.eleImgCaches[t] || [];
    }, Lt.getRetiredTextureQueue = function(t) {
      var e = this, r = e.eleImgCaches.retired = e.eleImgCaches.retired || {}, a = r[t] = r[t] || [];
      return a;
    }, Lt.getElementQueue = function() {
      var t = this, e = t.eleCacheQueue = t.eleCacheQueue || new Ha(function(r, a) {
        return a.reqs - r.reqs;
      });
      return e;
    }, Lt.getElementKeyToQueue = function() {
      var t = this, e = t.eleKeyToCacheQueue = t.eleKeyToCacheQueue || {};
      return e;
    }, Lt.getElement = function(t, e, r, a, n) {
      var i = this, s = this.renderer, o = s.cy.zoom(), l = this.lookup;
      if (!e || e.w === 0 || e.h === 0 || isNaN(e.w) || isNaN(e.h) || !t.visible() || t.removed() || !i.allowEdgeTxrCaching && t.isEdge() || !i.allowParentTxrCaching && t.isParent())
        return null;
      if (a == null && (a = Math.ceil(wi(o * r))), a < ci)
        a = ci;
      else if (o >= Xg || a > as)
        return null;
      var u = Math.pow(2, a), f = e.h * u, h = e.w * u, c = s.eleTextBiggerThanMin(t, u);
      if (!this.isVisible(t, c))
        return null;
      var d = l.get(t, a);
      if (d && d.invalidated && (d.invalidated = !1, d.texture.invalidatedWidth -= d.width), d)
        return d;
      var v;
      if (f <= zu ? v = zu : f <= hi ? v = hi : v = Math.ceil(f / hi) * hi, f > Zg || h > Kg)
        return null;
      var y = i.getTextureQueue(v), p = y[y.length - 2], g = function() {
        return i.recycleTexture(v, h) || i.addTexture(v, h);
      };
      p || (p = y[y.length - 1]), p || (p = g()), p.width - p.usedWidth < h && (p = g());
      for (var m = function(W) {
        return W && W.scaledLabelShown === c;
      }, b = n && n === Ia.dequeue, E = n && n === Ia.highQuality, M = n && n === Ia.downscale, S, x = a + 1; x <= as; x++) {
        var I = l.get(t, x);
        if (I) {
          S = I;
          break;
        }
      }
      var A = S && S.level === a + 1 ? S : null, z = function() {
        p.context.drawImage(A.texture.canvas, A.x, 0, A.width, A.height, p.usedWidth, 0, h, f);
      };
      if (p.context.setTransform(1, 0, 0, 1, 0, 0), p.context.clearRect(p.usedWidth, 0, h, v), m(A))
        z();
      else if (m(S))
        if (E) {
          for (var F = S.level; F > a; F--)
            A = i.getElement(t, e, r, F, Ia.downscale);
          z();
        } else
          return i.queueElement(t, S.level - 1), S;
      else {
        var G;
        if (!b && !E && !M)
          for (var X = a - 1; X >= ci; X--) {
            var P = l.get(t, X);
            if (P) {
              G = P;
              break;
            }
          }
        if (m(G))
          return i.queueElement(t, a), G;
        p.context.translate(p.usedWidth, 0), p.context.scale(u, u), this.drawElement(p.context, t, e, c, !1), p.context.scale(1 / u, 1 / u), p.context.translate(-p.usedWidth, 0);
      }
      return d = {
        x: p.usedWidth,
        texture: p,
        level: a,
        scale: u,
        width: h,
        height: f,
        scaledLabelShown: c
      }, p.usedWidth += Math.ceil(h + qg), p.eleCaches.push(d), l.set(t, a, d), i.checkTextureFullness(p), d;
    }, Lt.invalidateElements = function(t) {
      for (var e = 0; e < t.length; e++)
        this.invalidateElement(t[e]);
    }, Lt.invalidateElement = function(t) {
      var e = this, r = e.lookup, a = [], n = r.isInvalid(t);
      if (!!n) {
        for (var i = ci; i <= as; i++) {
          var s = r.getForCachedKey(t, i);
          s && a.push(s);
        }
        var o = r.invalidate(t);
        if (o)
          for (var l = 0; l < a.length; l++) {
            var u = a[l], f = u.texture;
            f.invalidatedWidth += u.width, u.invalidated = !0, e.checkTextureUtility(f);
          }
        e.removeFromQueue(t);
      }
    }, Lt.checkTextureUtility = function(t) {
      t.invalidatedWidth >= Qg * t.width && this.retireTexture(t);
    }, Lt.checkTextureFullness = function(t) {
      var e = this, r = e.getTextureQueue(t.height);
      t.usedWidth / t.width > Jg && t.fullnessChecks >= jg ? Ir(r, t) : t.fullnessChecks++;
    }, Lt.retireTexture = function(t) {
      var e = this, r = t.height, a = e.getTextureQueue(r), n = this.lookup;
      Ir(a, t), t.retired = !0;
      for (var i = t.eleCaches, s = 0; s < i.length; s++) {
        var o = i[s];
        n.deleteCache(o.key, o.level);
      }
      bi(i);
      var l = e.getRetiredTextureQueue(r);
      l.push(t);
    }, Lt.addTexture = function(t, e) {
      var r = this, a = r.getTextureQueue(t), n = {};
      return a.push(n), n.eleCaches = [], n.height = t, n.width = Math.max(Wg, e), n.usedWidth = 0, n.invalidatedWidth = 0, n.fullnessChecks = 0, n.canvas = r.renderer.makeOffscreenCanvas(n.width, n.height), n.context = n.canvas.getContext("2d"), n;
    }, Lt.recycleTexture = function(t, e) {
      for (var r = this, a = r.getTextureQueue(t), n = r.getRetiredTextureQueue(t), i = 0; i < n.length; i++) {
        var s = n[i];
        if (s.width >= e)
          return s.retired = !1, s.usedWidth = 0, s.invalidatedWidth = 0, s.fullnessChecks = 0, bi(s.eleCaches), s.context.setTransform(1, 0, 0, 1, 0, 0), s.context.clearRect(0, 0, s.width, s.height), Ir(n, s), a.push(s), s;
      }
    }, Lt.queueElement = function(t, e) {
      var r = this, a = r.getElementQueue(), n = r.getElementKeyToQueue(), i = this.getKey(t), s = n[i];
      if (s)
        s.level = Math.max(s.level, e), s.eles.merge(t), s.reqs++, a.updateItem(s);
      else {
        var o = {
          eles: t.spawn().merge(t),
          level: e,
          reqs: 1,
          key: i
        };
        a.push(o), n[i] = o;
      }
    }, Lt.dequeue = function(t) {
      for (var e = this, r = e.getElementQueue(), a = e.getElementKeyToQueue(), n = [], i = e.lookup, s = 0; s < ip && r.size() > 0; s++) {
        var o = r.pop(), l = o.key, u = o.eles[0], f = i.hasCache(u, o.level);
        if (a[l] = null, f)
          continue;
        n.push(o);
        var h = e.getBoundingBox(u);
        e.getElement(u, h, t, o.level, Ia.dequeue);
      }
      return n;
    }, Lt.removeFromQueue = function(t) {
      var e = this, r = e.getElementQueue(), a = e.getElementKeyToQueue(), n = this.getKey(t), i = a[n];
      i != null && (i.eles.length === 1 ? (i.reqs = yi, r.updateItem(i), r.pop(), a[n] = null) : i.eles.unmerge(t));
    }, Lt.onDequeue = function(t) {
      this.onDequeues.push(t);
    }, Lt.offDequeue = function(t) {
      Ir(this.onDequeues, t);
    }, Lt.setupDequeueing = Gu.setupDequeueing({
      deqRedrawThreshold: np,
      deqCost: ep,
      deqAvgCost: tp,
      deqNoDrawCost: rp,
      deqFastCost: ap,
      deq: function(e, r, a) {
        return e.dequeue(r, a);
      },
      onDeqd: function(e, r) {
        for (var a = 0; a < e.onDequeues.length; a++) {
          var n = e.onDequeues[a];
          n(r);
        }
      },
      shouldRedraw: function(e, r, a, n) {
        for (var i = 0; i < r.length; i++)
          for (var s = r[i].eles, o = 0; o < s.length; o++) {
            var l = s[o].boundingBox();
            if (xi(l, n))
              return !0;
          }
        return !1;
      },
      priority: function(e) {
        return e.renderer.beforeRenderPriorities.eleTxrDeq;
      }
    });
    var op = 1, cn = -4, vi = 2, up = 3.99, lp = 50, fp = 50, hp = 0.15, cp = 0.1, vp = 0.9, dp = 0.9, gp = 1, Vu = 250, pp = 4e3 * 4e3, yp = !0, Uu = function(e) {
      var r = this, a = r.renderer = e, n = a.cy;
      r.layersByLevel = {}, r.firstGet = !0, r.lastInvalidationTime = Cr() - 2 * Vu, r.skipping = !1, r.eleTxrDeqs = n.collection(), r.scheduleElementRefinement = wn(function() {
        r.refineElementTextures(r.eleTxrDeqs), r.eleTxrDeqs.unmerge(r.eleTxrDeqs);
      }, fp), a.beforeRender(function(s, o) {
        o - r.lastInvalidationTime <= Vu ? r.skipping = !0 : r.skipping = !1;
      }, a.beforeRenderPriorities.lyrTxrSkip);
      var i = function(o, l) {
        return l.reqs - o.reqs;
      };
      r.layersQueue = new Ha(i), r.setupDequeueing();
    }, Bt = Uu.prototype, $u = 0, mp = Math.pow(2, 53) - 1;
    Bt.makeLayer = function(t, e) {
      var r = Math.pow(2, e), a = Math.ceil(t.w * r), n = Math.ceil(t.h * r), i = this.renderer.makeOffscreenCanvas(a, n), s = {
        id: $u = ++$u % mp,
        bb: t,
        level: e,
        width: a,
        height: n,
        canvas: i,
        context: i.getContext("2d"),
        eles: [],
        elesQueue: [],
        reqs: 0
      }, o = s.context, l = -s.bb.x1, u = -s.bb.y1;
      return o.scale(r, r), o.translate(l, u), s;
    }, Bt.getLayers = function(t, e, r) {
      var a = this, n = a.renderer, i = n.cy, s = i.zoom(), o = a.firstGet;
      if (a.firstGet = !1, r == null) {
        if (r = Math.ceil(wi(s * e)), r < cn)
          r = cn;
        else if (s >= up || r > vi)
          return null;
      }
      a.validateLayersElesOrdering(r, t);
      var l = a.layersByLevel, u = Math.pow(2, r), f = l[r] = l[r] || [], h, c = a.levelIsComplete(r, t), d, v = function() {
        var z = function(Q) {
          if (a.validateLayersElesOrdering(Q, t), a.levelIsComplete(Q, t))
            return d = l[Q], !0;
        }, F = function(Q) {
          if (!d)
            for (var W = r + Q; cn <= W && W <= vi && !z(W); W += Q)
              ;
        };
        F(1), F(-1);
        for (var G = f.length - 1; G >= 0; G--) {
          var X = f[G];
          X.invalid && Ir(f, X);
        }
      };
      if (!c)
        v();
      else
        return f;
      var y = function() {
        if (!h) {
          h = Kt();
          for (var z = 0; z < t.length; z++)
            Gs(h, t[z].boundingBox());
        }
        return h;
      }, p = function(z) {
        z = z || {};
        var F = z.after;
        y();
        var G = h.w * u * (h.h * u);
        if (G > pp)
          return null;
        var X = a.makeLayer(h, r);
        if (F != null) {
          var P = f.indexOf(F) + 1;
          f.splice(P, 0, X);
        } else
          (z.insert === void 0 || z.insert) && f.unshift(X);
        return X;
      };
      if (a.skipping && !o)
        return null;
      for (var g = null, m = t.length / op, b = !o, E = 0; E < t.length; E++) {
        var M = t[E], S = M._private.rscratch, x = S.imgLayerCaches = S.imgLayerCaches || {}, I = x[r];
        if (I) {
          g = I;
          continue;
        }
        if ((!g || g.eles.length >= m || !Vs(g.bb, M.boundingBox())) && (g = p({
          insert: !0,
          after: g
        }), !g))
          return null;
        d || b ? a.queueLayer(g, M) : a.drawEleInLayer(g, M, r, e), g.eles.push(M), x[r] = g;
      }
      return d || (b ? null : f);
    }, Bt.getEleLevelForLayerLevel = function(t, e) {
      return t;
    }, Bt.drawEleInLayer = function(t, e, r, a) {
      var n = this, i = this.renderer, s = t.context, o = e.boundingBox();
      o.w === 0 || o.h === 0 || !e.visible() || (r = n.getEleLevelForLayerLevel(r, a), i.setImgSmoothing(s, !1), i.drawCachedElement(s, e, null, null, r, yp), i.setImgSmoothing(s, !0));
    }, Bt.levelIsComplete = function(t, e) {
      var r = this, a = r.layersByLevel[t];
      if (!a || a.length === 0)
        return !1;
      for (var n = 0, i = 0; i < a.length; i++) {
        var s = a[i];
        if (s.reqs > 0 || s.invalid)
          return !1;
        n += s.eles.length;
      }
      return n === e.length;
    }, Bt.validateLayersElesOrdering = function(t, e) {
      var r = this.layersByLevel[t];
      if (!!r)
        for (var a = 0; a < r.length; a++) {
          for (var n = r[a], i = -1, s = 0; s < e.length; s++)
            if (n.eles[0] === e[s]) {
              i = s;
              break;
            }
          if (i < 0) {
            this.invalidateLayer(n);
            continue;
          }
          for (var o = i, s = 0; s < n.eles.length; s++)
            if (n.eles[s] !== e[o + s]) {
              this.invalidateLayer(n);
              break;
            }
        }
    }, Bt.updateElementsInLayers = function(t, e) {
      for (var r = this, a = Ie(t[0]), n = 0; n < t.length; n++)
        for (var i = a ? null : t[n], s = a ? t[n] : t[n].ele, o = s._private.rscratch, l = o.imgLayerCaches = o.imgLayerCaches || {}, u = cn; u <= vi; u++) {
          var f = l[u];
          !f || i && r.getEleLevelForLayerLevel(f.level) !== i.level || e(f, s, i);
        }
    }, Bt.haveLayers = function() {
      for (var t = this, e = !1, r = cn; r <= vi; r++) {
        var a = t.layersByLevel[r];
        if (a && a.length > 0) {
          e = !0;
          break;
        }
      }
      return e;
    }, Bt.invalidateElements = function(t) {
      var e = this;
      t.length !== 0 && (e.lastInvalidationTime = Cr(), !(t.length === 0 || !e.haveLayers()) && e.updateElementsInLayers(t, function(a, n, i) {
        e.invalidateLayer(a);
      }));
    }, Bt.invalidateLayer = function(t) {
      if (this.lastInvalidationTime = Cr(), !t.invalid) {
        var e = t.level, r = t.eles, a = this.layersByLevel[e];
        Ir(a, t), t.elesQueue = [], t.invalid = !0, t.replacement && (t.replacement.invalid = !0);
        for (var n = 0; n < r.length; n++) {
          var i = r[n]._private.rscratch.imgLayerCaches;
          i && (i[e] = null);
        }
      }
    }, Bt.refineElementTextures = function(t) {
      var e = this;
      e.updateElementsInLayers(t, function(a, n, i) {
        var s = a.replacement;
        if (s || (s = a.replacement = e.makeLayer(a.bb, a.level), s.replaces = a, s.eles = a.eles), !s.reqs)
          for (var o = 0; o < s.eles.length; o++)
            e.queueLayer(s, s.eles[o]);
      });
    }, Bt.enqueueElementRefinement = function(t) {
      this.eleTxrDeqs.merge(t), this.scheduleElementRefinement();
    }, Bt.queueLayer = function(t, e) {
      var r = this, a = r.layersQueue, n = t.elesQueue, i = n.hasId = n.hasId || {};
      if (!t.replacement) {
        if (e) {
          if (i[e.id()])
            return;
          n.push(e), i[e.id()] = !0;
        }
        t.reqs ? (t.reqs++, a.updateItem(t)) : (t.reqs = 1, a.push(t));
      }
    }, Bt.dequeue = function(t) {
      for (var e = this, r = e.layersQueue, a = [], n = 0; n < gp && r.size() !== 0; ) {
        var i = r.peek();
        if (i.replacement) {
          r.pop();
          continue;
        }
        if (i.replaces && i !== i.replaces.replacement) {
          r.pop();
          continue;
        }
        if (i.invalid) {
          r.pop();
          continue;
        }
        var s = i.elesQueue.shift();
        s && (e.drawEleInLayer(i, s, i.level, t), n++), a.length === 0 && a.push(!0), i.elesQueue.length === 0 && (r.pop(), i.reqs = 0, i.replaces && e.applyLayerReplacement(i), e.requestRedraw());
      }
      return a;
    }, Bt.applyLayerReplacement = function(t) {
      var e = this, r = e.layersByLevel[t.level], a = t.replaces, n = r.indexOf(a);
      if (!(n < 0 || a.invalid)) {
        r[n] = t;
        for (var i = 0; i < t.eles.length; i++) {
          var s = t.eles[i]._private, o = s.imgLayerCaches = s.imgLayerCaches || {};
          o && (o[t.level] = t);
        }
        e.requestRedraw();
      }
    }, Bt.requestRedraw = wn(function() {
      var t = this.renderer;
      t.redrawHint("eles", !0), t.redrawHint("drag", !0), t.redraw();
    }, 100), Bt.setupDequeueing = Gu.setupDequeueing({
      deqRedrawThreshold: lp,
      deqCost: hp,
      deqAvgCost: cp,
      deqNoDrawCost: vp,
      deqFastCost: dp,
      deq: function(e, r) {
        return e.dequeue(r);
      },
      onDeqd: mi,
      shouldRedraw: Ms,
      priority: function(e) {
        return e.renderer.beforeRenderPriorities.lyrTxrDeq;
      }
    });
    var Yu = {}, _u;
    function bp(t, e) {
      for (var r = 0; r < e.length; r++) {
        var a = e[r];
        t.lineTo(a.x, a.y);
      }
    }
    function Ep(t, e, r) {
      for (var a, n = 0; n < e.length; n++) {
        var i = e[n];
        n === 0 && (a = i), t.lineTo(i.x, i.y);
      }
      t.quadraticCurveTo(r.x, r.y, a.x, a.y);
    }
    function Hu(t, e, r) {
      t.beginPath && t.beginPath();
      for (var a = e, n = 0; n < a.length; n++) {
        var i = a[n];
        t.lineTo(i.x, i.y);
      }
      var s = r, o = r[0];
      t.moveTo(o.x, o.y);
      for (var n = 1; n < s.length; n++) {
        var i = s[n];
        t.lineTo(i.x, i.y);
      }
      t.closePath && t.closePath();
    }
    function wp(t, e, r, a, n) {
      t.beginPath && t.beginPath(), t.arc(r, a, n, 0, Math.PI * 2, !1);
      var i = e, s = i[0];
      t.moveTo(s.x, s.y);
      for (var o = 0; o < i.length; o++) {
        var l = i[o];
        t.lineTo(l.x, l.y);
      }
      t.closePath && t.closePath();
    }
    function xp(t, e, r, a) {
      t.arc(e, r, a, 0, Math.PI * 2, !1);
    }
    Yu.arrowShapeImpl = function(t) {
      return (_u || (_u = {
        polygon: bp,
        "triangle-backcurve": Ep,
        "triangle-tee": Hu,
        "circle-triangle": wp,
        "triangle-cross": Hu,
        circle: xp
      }))[t];
    };
    var wr = {};
    wr.drawElement = function(t, e, r, a, n, i) {
      var s = this;
      e.isNode() ? s.drawNode(t, e, r, a, n, i) : s.drawEdge(t, e, r, a, n, i);
    }, wr.drawElementOverlay = function(t, e) {
      var r = this;
      e.isNode() ? r.drawNodeOverlay(t, e) : r.drawEdgeOverlay(t, e);
    }, wr.drawElementUnderlay = function(t, e) {
      var r = this;
      e.isNode() ? r.drawNodeUnderlay(t, e) : r.drawEdgeUnderlay(t, e);
    }, wr.drawCachedElementPortion = function(t, e, r, a, n, i, s, o) {
      var l = this, u = r.getBoundingBox(e);
      if (!(u.w === 0 || u.h === 0)) {
        var f = r.getElement(e, u, a, n, i);
        if (f != null) {
          var h = o(l, e);
          if (h === 0)
            return;
          var c = s(l, e), d = u.x1, v = u.y1, y = u.w, p = u.h, g, m, b, E, M;
          if (c !== 0) {
            var S = r.getRotationPoint(e);
            b = S.x, E = S.y, t.translate(b, E), t.rotate(c), M = l.getImgSmoothing(t), M || l.setImgSmoothing(t, !0);
            var x = r.getRotationOffset(e);
            g = x.x, m = x.y;
          } else
            g = d, m = v;
          var I;
          h !== 1 && (I = t.globalAlpha, t.globalAlpha = I * h), t.drawImage(f.texture.canvas, f.x, 0, f.width, f.height, g, m, y, p), h !== 1 && (t.globalAlpha = I), c !== 0 && (t.rotate(-c), t.translate(-b, -E), M || l.setImgSmoothing(t, !1));
        } else
          r.drawElement(t, e);
      }
    };
    var Tp = function() {
      return 0;
    }, Cp = function(e, r) {
      return e.getTextAngle(r, null);
    }, Dp = function(e, r) {
      return e.getTextAngle(r, "source");
    }, Sp = function(e, r) {
      return e.getTextAngle(r, "target");
    }, Lp = function(e, r) {
      return r.effectiveOpacity();
    }, ns = function(e, r) {
      return r.pstyle("text-opacity").pfValue * r.effectiveOpacity();
    };
    wr.drawCachedElement = function(t, e, r, a, n, i) {
      var s = this, o = s.data, l = o.eleTxrCache, u = o.lblTxrCache, f = o.slbTxrCache, h = o.tlbTxrCache, c = e.boundingBox(), d = i === !0 ? l.reasons.highQuality : null;
      if (!(c.w === 0 || c.h === 0 || !e.visible()) && (!a || xi(c, a))) {
        var v = e.isEdge(), y = e.element()._private.rscratch.badLine;
        s.drawElementUnderlay(t, e), s.drawCachedElementPortion(t, e, l, r, n, d, Tp, Lp), (!v || !y) && s.drawCachedElementPortion(t, e, u, r, n, d, Cp, ns), v && !y && (s.drawCachedElementPortion(t, e, f, r, n, d, Dp, ns), s.drawCachedElementPortion(t, e, h, r, n, d, Sp, ns)), s.drawElementOverlay(t, e);
      }
    }, wr.drawElements = function(t, e) {
      for (var r = this, a = 0; a < e.length; a++) {
        var n = e[a];
        r.drawElement(t, n);
      }
    }, wr.drawCachedElements = function(t, e, r, a) {
      for (var n = this, i = 0; i < e.length; i++) {
        var s = e[i];
        n.drawCachedElement(t, s, r, a);
      }
    }, wr.drawCachedNodes = function(t, e, r, a) {
      for (var n = this, i = 0; i < e.length; i++) {
        var s = e[i];
        !s.isNode() || n.drawCachedElement(t, s, r, a);
      }
    }, wr.drawLayeredElements = function(t, e, r, a) {
      var n = this, i = n.data.lyrTxrCache.getLayers(e, r);
      if (i)
        for (var s = 0; s < i.length; s++) {
          var o = i[s], l = o.bb;
          l.w === 0 || l.h === 0 || t.drawImage(o.canvas, l.x1, l.y1, l.w, l.h);
        }
      else
        n.drawCachedElements(t, e, r, a);
    };
    var Or = {};
    Or.drawEdge = function(t, e, r) {
      var a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !0, n = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, i = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : !0, s = this, o = e._private.rscratch;
      if (!(i && !e.visible()) && !(o.badLine || o.allpts == null || isNaN(o.allpts[0]))) {
        var l;
        r && (l = r, t.translate(-l.x1, -l.y1));
        var u = i ? e.pstyle("opacity").value : 1, f = i ? e.pstyle("line-opacity").value : 1, h = e.pstyle("curve-style").value, c = e.pstyle("line-style").value, d = e.pstyle("width").pfValue, v = e.pstyle("line-cap").value, y = e.pstyle("line-outline-width").value, p = e.pstyle("line-outline-color").value, g = u * f, m = u * f, b = function() {
          var Q = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : g;
          h === "straight-triangle" ? (s.eleStrokeStyle(t, e, Q), s.drawEdgeTrianglePath(e, t, o.allpts)) : (t.lineWidth = d, t.lineCap = v, s.eleStrokeStyle(t, e, Q), s.drawEdgePath(e, t, o.allpts, c), t.lineCap = "butt");
        }, E = function() {
          var Q = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : g;
          if (t.lineWidth = d + y, t.lineCap = v, y > 0)
            s.colorStrokeStyle(t, p[0], p[1], p[2], Q);
          else {
            t.lineCap = "butt";
            return;
          }
          h === "straight-triangle" ? s.drawEdgeTrianglePath(e, t, o.allpts) : (s.drawEdgePath(e, t, o.allpts, c), t.lineCap = "butt");
        }, M = function() {
          !n || s.drawEdgeOverlay(t, e);
        }, S = function() {
          !n || s.drawEdgeUnderlay(t, e);
        }, x = function() {
          var Q = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : m;
          s.drawArrowheads(t, e, Q);
        }, I = function() {
          s.drawElementText(t, e, null, a);
        };
        t.lineJoin = "round";
        var A = e.pstyle("ghost").value === "yes";
        if (A) {
          var z = e.pstyle("ghost-offset-x").pfValue, F = e.pstyle("ghost-offset-y").pfValue, G = e.pstyle("ghost-opacity").value, X = g * G;
          t.translate(z, F), b(X), x(X), t.translate(-z, -F);
        } else
          E();
        S(), b(), x(), M(), I(), r && t.translate(l.x1, l.y1);
      }
    };
    var Xu = function(e) {
      if (!["overlay", "underlay"].includes(e))
        throw new Error("Invalid state");
      return function(r, a) {
        if (!!a.visible()) {
          var n = a.pstyle("".concat(e, "-opacity")).value;
          if (n !== 0) {
            var i = this, s = i.usePaths(), o = a._private.rscratch, l = a.pstyle("".concat(e, "-padding")).pfValue, u = 2 * l, f = a.pstyle("".concat(e, "-color")).value;
            r.lineWidth = u, o.edgeType === "self" && !s ? r.lineCap = "butt" : r.lineCap = "round", i.colorStrokeStyle(r, f[0], f[1], f[2], n), i.drawEdgePath(a, r, o.allpts, "solid");
          }
        }
      };
    };
    Or.drawEdgeOverlay = Xu("overlay"), Or.drawEdgeUnderlay = Xu("underlay"), Or.drawEdgePath = function(t, e, r, a) {
      var n = t._private.rscratch, i = e, s, o = !1, l = this.usePaths(), u = t.pstyle("line-dash-pattern").pfValue, f = t.pstyle("line-dash-offset").pfValue;
      if (l) {
        var h = r.join("$"), c = n.pathCacheKey && n.pathCacheKey === h;
        c ? (s = e = n.pathCache, o = !0) : (s = e = new Path2D(), n.pathCacheKey = h, n.pathCache = s);
      }
      if (i.setLineDash)
        switch (a) {
          case "dotted":
            i.setLineDash([1, 1]);
            break;
          case "dashed":
            i.setLineDash(u), i.lineDashOffset = f;
            break;
          case "solid":
            i.setLineDash([]);
            break;
        }
      if (!o && !n.badLine)
        switch (e.beginPath && e.beginPath(), e.moveTo(r[0], r[1]), n.edgeType) {
          case "bezier":
          case "self":
          case "compound":
          case "multibezier":
            for (var d = 2; d + 3 < r.length; d += 4)
              e.quadraticCurveTo(r[d], r[d + 1], r[d + 2], r[d + 3]);
            break;
          case "straight":
          case "haystack":
            for (var v = 2; v + 1 < r.length; v += 2)
              e.lineTo(r[v], r[v + 1]);
            break;
          case "segments":
            if (n.isRound) {
              var y = O(n.roundCorners), p;
              try {
                for (y.s(); !(p = y.n()).done; ) {
                  var g = p.value;
                  Lu(e, g);
                }
              } catch (b) {
                y.e(b);
              } finally {
                y.f();
              }
              e.lineTo(r[r.length - 2], r[r.length - 1]);
            } else
              for (var m = 2; m + 1 < r.length; m += 2)
                e.lineTo(r[m], r[m + 1]);
            break;
        }
      e = i, l ? e.stroke(s) : e.stroke(), e.setLineDash && e.setLineDash([]);
    }, Or.drawEdgeTrianglePath = function(t, e, r) {
      e.fillStyle = e.strokeStyle;
      for (var a = t.pstyle("width").pfValue, n = 0; n + 1 < r.length; n += 2) {
        var i = [r[n + 2] - r[n], r[n + 3] - r[n + 1]], s = Math.sqrt(i[0] * i[0] + i[1] * i[1]), o = [i[1] / s, -i[0] / s], l = [o[0] * a / 2, o[1] * a / 2];
        e.beginPath(), e.moveTo(r[n] - l[0], r[n + 1] - l[1]), e.lineTo(r[n] + l[0], r[n + 1] + l[1]), e.lineTo(r[n + 2], r[n + 3]), e.closePath(), e.fill();
      }
    }, Or.drawArrowheads = function(t, e, r) {
      var a = e._private.rscratch, n = a.edgeType === "haystack";
      n || this.drawArrowhead(t, e, "source", a.arrowStartX, a.arrowStartY, a.srcArrowAngle, r), this.drawArrowhead(t, e, "mid-target", a.midX, a.midY, a.midtgtArrowAngle, r), this.drawArrowhead(t, e, "mid-source", a.midX, a.midY, a.midsrcArrowAngle, r), n || this.drawArrowhead(t, e, "target", a.arrowEndX, a.arrowEndY, a.tgtArrowAngle, r);
    }, Or.drawArrowhead = function(t, e, r, a, n, i, s) {
      if (!(isNaN(a) || a == null || isNaN(n) || n == null || isNaN(i) || i == null)) {
        var o = this, l = e.pstyle(r + "-arrow-shape").value;
        if (l !== "none") {
          var u = e.pstyle(r + "-arrow-fill").value === "hollow" ? "both" : "filled", f = e.pstyle(r + "-arrow-fill").value, h = e.pstyle("width").pfValue, c = e.pstyle(r + "-arrow-width"), d = c.value === "match-line" ? h : c.pfValue;
          c.units === "%" && (d *= h);
          var v = e.pstyle("opacity").value;
          s === void 0 && (s = v);
          var y = t.globalCompositeOperation;
          (s !== 1 || f === "hollow") && (t.globalCompositeOperation = "destination-out", o.colorFillStyle(t, 255, 255, 255, 1), o.colorStrokeStyle(t, 255, 255, 255, 1), o.drawArrowShape(e, t, u, h, l, d, a, n, i), t.globalCompositeOperation = y);
          var p = e.pstyle(r + "-arrow-color").value;
          o.colorFillStyle(t, p[0], p[1], p[2], s), o.colorStrokeStyle(t, p[0], p[1], p[2], s), o.drawArrowShape(e, t, f, h, l, d, a, n, i);
        }
      }
    }, Or.drawArrowShape = function(t, e, r, a, n, i, s, o, l) {
      var u = this, f = this.usePaths() && n !== "triangle-cross", h = !1, c, d = e, v = {
        x: s,
        y: o
      }, y = t.pstyle("arrow-scale").value, p = this.getArrowWidth(a, y), g = u.arrowShapes[n];
      if (f) {
        var m = u.arrowPathCache = u.arrowPathCache || [], b = _r(n), E = m[b];
        E != null ? (c = e = E, h = !0) : (c = e = new Path2D(), m[b] = c);
      }
      h || (e.beginPath && e.beginPath(), f ? g.draw(e, 1, 0, {
        x: 0,
        y: 0
      }, 1) : g.draw(e, p, l, v, a), e.closePath && e.closePath()), e = d, f && (e.translate(s, o), e.rotate(l), e.scale(p, p)), (r === "filled" || r === "both") && (f ? e.fill(c) : e.fill()), (r === "hollow" || r === "both") && (e.lineWidth = i / (f ? p : 1), e.lineJoin = "miter", f ? e.stroke(c) : e.stroke()), f && (e.scale(1 / p, 1 / p), e.rotate(-l), e.translate(-s, -o));
    };
    var is = {};
    is.safeDrawImage = function(t, e, r, a, n, i, s, o, l, u) {
      if (!(n <= 0 || i <= 0 || l <= 0 || u <= 0))
        try {
          t.drawImage(e, r, a, n, i, s, o, l, u);
        } catch (f) {
          ht(f);
        }
    }, is.drawInscribedImage = function(t, e, r, a, n) {
      var i = this, s = r.position(), o = s.x, l = s.y, u = r.cy().style(), f = u.getIndexedStyle.bind(u), h = f(r, "background-fit", "value", a), c = f(r, "background-repeat", "value", a), d = r.width(), v = r.height(), y = r.padding() * 2, p = d + (f(r, "background-width-relative-to", "value", a) === "inner" ? 0 : y), g = v + (f(r, "background-height-relative-to", "value", a) === "inner" ? 0 : y), m = r._private.rscratch, b = f(r, "background-clip", "value", a), E = b === "node", M = f(r, "background-image-opacity", "value", a) * n, S = f(r, "background-image-smoothing", "value", a), x = r.pstyle("corner-radius").value;
      x !== "auto" && (x = r.pstyle("corner-radius").pfValue);
      var I = e.width || e.cachedW, A = e.height || e.cachedH;
      (I == null || A == null) && (document.body.appendChild(e), I = e.cachedW = e.width || e.offsetWidth, A = e.cachedH = e.height || e.offsetHeight, document.body.removeChild(e));
      var z = I, F = A;
      if (f(r, "background-width", "value", a) !== "auto" && (f(r, "background-width", "units", a) === "%" ? z = f(r, "background-width", "pfValue", a) * p : z = f(r, "background-width", "pfValue", a)), f(r, "background-height", "value", a) !== "auto" && (f(r, "background-height", "units", a) === "%" ? F = f(r, "background-height", "pfValue", a) * g : F = f(r, "background-height", "pfValue", a)), !(z === 0 || F === 0)) {
        if (h === "contain") {
          var G = Math.min(p / z, g / F);
          z *= G, F *= G;
        } else if (h === "cover") {
          var G = Math.max(p / z, g / F);
          z *= G, F *= G;
        }
        var X = o - p / 2, P = f(r, "background-position-x", "units", a), Q = f(r, "background-position-x", "pfValue", a);
        P === "%" ? X += (p - z) * Q : X += Q;
        var W = f(r, "background-offset-x", "units", a), Z = f(r, "background-offset-x", "pfValue", a);
        W === "%" ? X += (p - z) * Z : X += Z;
        var re = l - g / 2, le = f(r, "background-position-y", "units", a), ve = f(r, "background-position-y", "pfValue", a);
        le === "%" ? re += (g - F) * ve : re += ve;
        var se = f(r, "background-offset-y", "units", a), ie = f(r, "background-offset-y", "pfValue", a);
        se === "%" ? re += (g - F) * ie : re += ie, m.pathCache && (X -= o, re -= l, o = 0, l = 0);
        var be = t.globalAlpha;
        t.globalAlpha = M;
        var De = i.getImgSmoothing(t), Le = !1;
        if (S === "no" && De ? (i.setImgSmoothing(t, !1), Le = !0) : S === "yes" && !De && (i.setImgSmoothing(t, !0), Le = !0), c === "no-repeat")
          E && (t.save(), m.pathCache ? t.clip(m.pathCache) : (i.nodeShapes[i.getNodeShape(r)].draw(t, o, l, p, g, x, m), t.clip())), i.safeDrawImage(t, e, 0, 0, I, A, X, re, z, F), E && t.restore();
        else {
          var Ae = t.createPattern(e, c);
          t.fillStyle = Ae, i.nodeShapes[i.getNodeShape(r)].draw(t, o, l, p, g, x, m), t.translate(X, re), t.fill(), t.translate(-X, -re);
        }
        t.globalAlpha = be, Le && i.setImgSmoothing(t, De);
      }
    };
    var ra = {};
    ra.eleTextBiggerThanMin = function(t, e) {
      if (!e) {
        var r = t.cy().zoom(), a = this.getPixelRatio(), n = Math.ceil(wi(r * a));
        e = Math.pow(2, n);
      }
      var i = t.pstyle("font-size").pfValue * e, s = t.pstyle("min-zoomed-font-size").pfValue;
      return !(i < s);
    }, ra.drawElementText = function(t, e, r, a, n) {
      var i = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : !0, s = this;
      if (a == null) {
        if (i && !s.eleTextBiggerThanMin(e))
          return;
      } else if (a === !1)
        return;
      if (e.isNode()) {
        var o = e.pstyle("label");
        if (!o || !o.value)
          return;
        var l = s.getLabelJustification(e);
        t.textAlign = l, t.textBaseline = "bottom";
      } else {
        var u = e.element()._private.rscratch.badLine, f = e.pstyle("label"), h = e.pstyle("source-label"), c = e.pstyle("target-label");
        if (u || (!f || !f.value) && (!h || !h.value) && (!c || !c.value))
          return;
        t.textAlign = "center", t.textBaseline = "bottom";
      }
      var d = !r, v;
      r && (v = r, t.translate(-v.x1, -v.y1)), n == null ? (s.drawText(t, e, null, d, i), e.isEdge() && (s.drawText(t, e, "source", d, i), s.drawText(t, e, "target", d, i))) : s.drawText(t, e, n, d, i), r && t.translate(v.x1, v.y1);
    }, ra.getFontCache = function(t) {
      var e;
      this.fontCaches = this.fontCaches || [];
      for (var r = 0; r < this.fontCaches.length; r++)
        if (e = this.fontCaches[r], e.context === t)
          return e;
      return e = {
        context: t
      }, this.fontCaches.push(e), e;
    }, ra.setupTextStyle = function(t, e) {
      var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, a = e.pstyle("font-style").strValue, n = e.pstyle("font-size").pfValue + "px", i = e.pstyle("font-family").strValue, s = e.pstyle("font-weight").strValue, o = r ? e.effectiveOpacity() * e.pstyle("text-opacity").value : 1, l = e.pstyle("text-outline-opacity").value * o, u = e.pstyle("color").value, f = e.pstyle("text-outline-color").value;
      t.font = a + " " + s + " " + n + " " + i, t.lineJoin = "round", this.colorFillStyle(t, u[0], u[1], u[2], o), this.colorStrokeStyle(t, f[0], f[1], f[2], l);
    };
    function ss(t, e, r, a, n) {
      var i = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 5, s = arguments.length > 6 ? arguments[6] : void 0;
      t.beginPath(), t.moveTo(e + i, r), t.lineTo(e + a - i, r), t.quadraticCurveTo(e + a, r, e + a, r + i), t.lineTo(e + a, r + n - i), t.quadraticCurveTo(e + a, r + n, e + a - i, r + n), t.lineTo(e + i, r + n), t.quadraticCurveTo(e, r + n, e, r + n - i), t.lineTo(e, r + i), t.quadraticCurveTo(e, r, e + i, r), t.closePath(), s ? t.stroke() : t.fill();
    }
    ra.getTextAngle = function(t, e) {
      var r, a = t._private, n = a.rscratch, i = e ? e + "-" : "", s = t.pstyle(i + "text-rotation"), o = ur(n, "labelAngle", e);
      return s.strValue === "autorotate" ? r = t.isEdge() ? o : 0 : s.strValue === "none" ? r = 0 : r = s.pfValue, r;
    }, ra.drawText = function(t, e, r) {
      var a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !0, n = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, i = e._private, s = i.rscratch, o = n ? e.effectiveOpacity() : 1;
      if (!(n && (o === 0 || e.pstyle("text-opacity").value === 0))) {
        r === "main" && (r = null);
        var l = ur(s, "labelX", r), u = ur(s, "labelY", r), f, h, c = this.getLabelText(e, r);
        if (c != null && c !== "" && !isNaN(l) && !isNaN(u)) {
          this.setupTextStyle(t, e, n);
          var d = r ? r + "-" : "", v = ur(s, "labelWidth", r), y = ur(s, "labelHeight", r), p = e.pstyle(d + "text-margin-x").pfValue, g = e.pstyle(d + "text-margin-y").pfValue, m = e.isEdge(), b = e.pstyle("text-halign").value, E = e.pstyle("text-valign").value;
          m && (b = "center", E = "center"), l += p, u += g;
          var M;
          switch (a ? M = this.getTextAngle(e, r) : M = 0, M !== 0 && (f = l, h = u, t.translate(f, h), t.rotate(M), l = 0, u = 0), E) {
            case "top":
              break;
            case "center":
              u += y / 2;
              break;
            case "bottom":
              u += y;
              break;
          }
          var S = e.pstyle("text-background-opacity").value, x = e.pstyle("text-border-opacity").value, I = e.pstyle("text-border-width").pfValue, A = e.pstyle("text-background-padding").pfValue, z = e.pstyle("text-background-shape").strValue, F = z.indexOf("round") === 0, G = 2;
          if (S > 0 || I > 0 && x > 0) {
            var X = l - A;
            switch (b) {
              case "left":
                X -= v;
                break;
              case "center":
                X -= v / 2;
                break;
            }
            var P = u - y - A, Q = v + 2 * A, W = y + 2 * A;
            if (S > 0) {
              var Z = t.fillStyle, re = e.pstyle("text-background-color").value;
              t.fillStyle = "rgba(" + re[0] + "," + re[1] + "," + re[2] + "," + S * o + ")", F ? ss(t, X, P, Q, W, G) : t.fillRect(X, P, Q, W), t.fillStyle = Z;
            }
            if (I > 0 && x > 0) {
              var le = t.strokeStyle, ve = t.lineWidth, se = e.pstyle("text-border-color").value, ie = e.pstyle("text-border-style").value;
              if (t.strokeStyle = "rgba(" + se[0] + "," + se[1] + "," + se[2] + "," + x * o + ")", t.lineWidth = I, t.setLineDash)
                switch (ie) {
                  case "dotted":
                    t.setLineDash([1, 1]);
                    break;
                  case "dashed":
                    t.setLineDash([4, 2]);
                    break;
                  case "double":
                    t.lineWidth = I / 4, t.setLineDash([]);
                    break;
                  case "solid":
                    t.setLineDash([]);
                    break;
                }
              if (F ? ss(t, X, P, Q, W, G, "stroke") : t.strokeRect(X, P, Q, W), ie === "double") {
                var be = I / 2;
                F ? ss(t, X + be, P + be, Q - be * 2, W - be * 2, G, "stroke") : t.strokeRect(X + be, P + be, Q - be * 2, W - be * 2);
              }
              t.setLineDash && t.setLineDash([]), t.lineWidth = ve, t.strokeStyle = le;
            }
          }
          var De = 2 * e.pstyle("text-outline-width").pfValue;
          if (De > 0 && (t.lineWidth = De), e.pstyle("text-wrap").value === "wrap") {
            var Le = ur(s, "labelWrapCachedLines", r), Ae = ur(s, "labelLineHeight", r), Me = v / 2, Ee = this.getLabelJustification(e);
            switch (Ee === "auto" || (b === "left" ? Ee === "left" ? l += -v : Ee === "center" && (l += -Me) : b === "center" ? Ee === "left" ? l += -Me : Ee === "right" && (l += Me) : b === "right" && (Ee === "center" ? l += Me : Ee === "right" && (l += v))), E) {
              case "top":
                u -= (Le.length - 1) * Ae;
                break;
              case "center":
              case "bottom":
                u -= (Le.length - 1) * Ae;
                break;
            }
            for (var ne = 0; ne < Le.length; ne++)
              De > 0 && t.strokeText(Le[ne], l, u), t.fillText(Le[ne], l, u), u += Ae;
          } else
            De > 0 && t.strokeText(c, l, u), t.fillText(c, l, u);
          M !== 0 && (t.rotate(-M), t.translate(-f, -h));
        }
      }
    };
    var Ra = {};
    Ra.drawNode = function(t, e, r) {
      var a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !0, n = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, i = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : !0, s = this, o, l, u = e._private, f = u.rscratch, h = e.position();
      if (!(!R(h.x) || !R(h.y)) && !(i && !e.visible())) {
        var c = i ? e.effectiveOpacity() : 1, d = s.usePaths(), v, y = !1, p = e.padding();
        o = e.width() + 2 * p, l = e.height() + 2 * p;
        var g;
        r && (g = r, t.translate(-g.x1, -g.y1));
        for (var m = e.pstyle("background-image"), b = m.value, E = new Array(b.length), M = new Array(b.length), S = 0, x = 0; x < b.length; x++) {
          var I = b[x], A = E[x] = I != null && I !== "none";
          if (A) {
            var z = e.cy().style().getIndexedStyle(e, "background-image-crossorigin", "value", x);
            S++, M[x] = s.getCachedImage(I, z, function() {
              u.backgroundTimestamp = Date.now(), e.emitAndNotify("background");
            });
          }
        }
        var F = e.pstyle("background-blacken").value, G = e.pstyle("border-width").pfValue, X = e.pstyle("background-opacity").value * c, P = e.pstyle("border-color").value, Q = e.pstyle("border-style").value, W = e.pstyle("border-join").value, Z = e.pstyle("border-cap").value, re = e.pstyle("border-position").value, le = e.pstyle("border-dash-pattern").pfValue, ve = e.pstyle("border-dash-offset").pfValue, se = e.pstyle("border-opacity").value * c, ie = e.pstyle("outline-width").pfValue, be = e.pstyle("outline-color").value, De = e.pstyle("outline-style").value, Le = e.pstyle("outline-opacity").value * c, Ae = e.pstyle("outline-offset").value, Me = e.pstyle("corner-radius").value;
        Me !== "auto" && (Me = e.pstyle("corner-radius").pfValue);
        var Ee = function() {
          var Re = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : X;
          s.eleFillStyle(t, e, Re);
        }, ne = function() {
          var Re = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : se;
          s.colorStrokeStyle(t, P[0], P[1], P[2], Re);
        }, xe = function() {
          var Re = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Le;
          s.colorStrokeStyle(t, be[0], be[1], be[2], Re);
        }, Te = function(Re, me, Ne, Ke) {
          var Ze = s.nodePathCache = s.nodePathCache || [], Ye = As(Ne === "polygon" ? Ne + "," + Ke.join(",") : Ne, "" + me, "" + Re, "" + Me), Je = Ze[Ye], Ue, Xe = !1;
          return Je != null ? (Ue = Je, Xe = !0, f.pathCache = Ue) : (Ue = new Path2D(), Ze[Ye] = f.pathCache = Ue), {
            path: Ue,
            cacheHit: Xe
          };
        }, Be = e.pstyle("shape").strValue, He = e.pstyle("shape-polygon-points").pfValue;
        if (d) {
          t.translate(h.x, h.y);
          var ke = Te(o, l, Be, He);
          v = ke.path, y = ke.cacheHit;
        }
        var Pe = function() {
          if (!y) {
            var Re = h;
            d && (Re = {
              x: 0,
              y: 0
            }), s.nodeShapes[s.getNodeShape(e)].draw(v || t, Re.x, Re.y, o, l, Me, f);
          }
          d ? t.fill(v) : t.fill();
        }, Ve = function() {
          for (var Re = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : c, me = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, Ne = u.backgrounding, Ke = 0, Ze = 0; Ze < M.length; Ze++) {
            var Ye = e.cy().style().getIndexedStyle(e, "background-image-containment", "value", Ze);
            if (me && Ye === "over" || !me && Ye === "inside") {
              Ke++;
              continue;
            }
            E[Ze] && M[Ze].complete && !M[Ze].error && (Ke++, s.drawInscribedImage(t, M[Ze], e, Ze, Re));
          }
          u.backgrounding = Ke !== S, Ne !== u.backgrounding && e.updateStyle(!1);
        }, _e = function() {
          var Re = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, me = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : c;
          s.hasPie(e) && (s.drawPie(t, e, me), Re && (d || s.nodeShapes[s.getNodeShape(e)].draw(t, h.x, h.y, o, l, Me, f)));
        }, $e = function() {
          var Re = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : c, me = (F > 0 ? F : -F) * Re, Ne = F > 0 ? 0 : 255;
          F !== 0 && (s.colorFillStyle(t, Ne, Ne, Ne, me), d ? t.fill(v) : t.fill());
        }, qe = function() {
          if (G > 0) {
            if (t.lineWidth = G, t.lineCap = Z, t.lineJoin = W, t.setLineDash)
              switch (Q) {
                case "dotted":
                  t.setLineDash([1, 1]);
                  break;
                case "dashed":
                  t.setLineDash(le), t.lineDashOffset = ve;
                  break;
                case "solid":
                case "double":
                  t.setLineDash([]);
                  break;
              }
            if (re !== "center") {
              if (t.save(), t.lineWidth *= 2, re === "inside")
                d ? t.clip(v) : t.clip();
              else {
                var Re = new Path2D();
                Re.rect(-o / 2 - G, -l / 2 - G, o + 2 * G, l + 2 * G), Re.addPath(v), t.clip(Re, "evenodd");
              }
              d ? t.stroke(v) : t.stroke(), t.restore();
            } else
              d ? t.stroke(v) : t.stroke();
            if (Q === "double") {
              t.lineWidth = G / 3;
              var me = t.globalCompositeOperation;
              t.globalCompositeOperation = "destination-out", d ? t.stroke(v) : t.stroke(), t.globalCompositeOperation = me;
            }
            t.setLineDash && t.setLineDash([]);
          }
        }, vt = function() {
          if (ie > 0) {
            if (t.lineWidth = ie, t.lineCap = "butt", t.setLineDash)
              switch (De) {
                case "dotted":
                  t.setLineDash([1, 1]);
                  break;
                case "dashed":
                  t.setLineDash([4, 2]);
                  break;
                case "solid":
                case "double":
                  t.setLineDash([]);
                  break;
              }
            var Re = h;
            d && (Re = {
              x: 0,
              y: 0
            });
            var me = s.getNodeShape(e), Ne = G;
            re === "inside" && (Ne = 0), re === "outside" && (Ne *= 2);
            var Ke = (o + Ne + (ie + Ae)) / o, Ze = (l + Ne + (ie + Ae)) / l, Ye = o * Ke, Je = l * Ze, Ue = s.nodeShapes[me].points, Xe;
            if (d) {
              var Ct = Te(Ye, Je, me, Ue);
              Xe = Ct.path;
            }
            if (me === "ellipse")
              s.drawEllipsePath(Xe || t, Re.x, Re.y, Ye, Je);
            else if (["round-diamond", "round-heptagon", "round-hexagon", "round-octagon", "round-pentagon", "round-polygon", "round-triangle", "round-tag"].includes(me)) {
              var mt = 0, qt = 0, Ft = 0;
              me === "round-diamond" ? mt = (Ne + Ae + ie) * 1.4 : me === "round-heptagon" ? (mt = (Ne + Ae + ie) * 1.075, Ft = -(Ne / 2 + Ae + ie) / 35) : me === "round-hexagon" ? mt = (Ne + Ae + ie) * 1.12 : me === "round-pentagon" ? (mt = (Ne + Ae + ie) * 1.13, Ft = -(Ne / 2 + Ae + ie) / 15) : me === "round-tag" ? (mt = (Ne + Ae + ie) * 1.12, qt = (Ne / 2 + ie + Ae) * 0.07) : me === "round-triangle" && (mt = (Ne + Ae + ie) * (Math.PI / 2), Ft = -(Ne + Ae / 2 + ie) / Math.PI), mt !== 0 && (Ke = (o + mt) / o, Ye = o * Ke, ["round-hexagon", "round-tag"].includes(me) || (Ze = (l + mt) / l, Je = l * Ze)), Me = Me === "auto" ? Ys(Ye, Je) : Me;
              for (var At = Ye / 2, Qt = Je / 2, Gt = Me + (Ne + ie + Ae) / 2, Wt = new Array(Ue.length / 2), hr = new Array(Ue.length / 2), ir = 0; ir < Ue.length / 2; ir++)
                Wt[ir] = {
                  x: Re.x + qt + At * Ue[ir * 2],
                  y: Re.y + Ft + Qt * Ue[ir * 2 + 1]
                };
              var Jt, xr, Mr, cr, Ot = Wt.length;
              for (xr = Wt[Ot - 1], Jt = 0; Jt < Ot; Jt++)
                Mr = Wt[Jt % Ot], cr = Wt[(Jt + 1) % Ot], hr[Jt] = es(xr, Mr, cr, Gt), xr = Mr, Mr = cr;
              s.drawRoundPolygonPath(Xe || t, Re.x + qt, Re.y + Ft, o * Ke, l * Ze, Ue, hr);
            } else if (["roundrectangle", "round-rectangle"].includes(me))
              Me = Me === "auto" ? Wr(Ye, Je) : Me, s.drawRoundRectanglePath(Xe || t, Re.x, Re.y, Ye, Je, Me + (Ne + ie + Ae) / 2);
            else if (["cutrectangle", "cut-rectangle"].includes(me))
              Me = Me === "auto" ? Di() : Me, s.drawCutRectanglePath(Xe || t, Re.x, Re.y, Ye, Je, null, Me + (Ne + ie + Ae) / 4);
            else if (["bottomroundrectangle", "bottom-round-rectangle"].includes(me))
              Me = Me === "auto" ? Wr(Ye, Je) : Me, s.drawBottomRoundRectanglePath(Xe || t, Re.x, Re.y, Ye, Je, Me + (Ne + ie + Ae) / 2);
            else if (me === "barrel")
              s.drawBarrelPath(Xe || t, Re.x, Re.y, Ye, Je);
            else if (me.startsWith("polygon") || ["rhomboid", "right-rhomboid", "round-tag", "tag", "vee"].includes(me)) {
              var Nt = (Ne + ie + Ae) / o;
              Ue = Mn(Nn(Ue, Nt)), s.drawPolygonPath(Xe || t, Re.x, Re.y, o, l, Ue);
            } else {
              var Ht = (Ne + ie + Ae) / o;
              Ue = Mn(Nn(Ue, -Ht)), s.drawPolygonPath(Xe || t, Re.x, Re.y, o, l, Ue);
            }
            if (d ? t.stroke(Xe) : t.stroke(), De === "double") {
              t.lineWidth = Ne / 3;
              var Pa = t.globalCompositeOperation;
              t.globalCompositeOperation = "destination-out", d ? t.stroke(Xe) : t.stroke(), t.globalCompositeOperation = Pa;
            }
            t.setLineDash && t.setLineDash([]);
          }
        }, it = function() {
          n && s.drawNodeOverlay(t, e, h, o, l);
        }, et = function() {
          n && s.drawNodeUnderlay(t, e, h, o, l);
        }, ut = function() {
          s.drawElementText(t, e, null, a);
        }, Se = e.pstyle("ghost").value === "yes";
        if (Se) {
          var N = e.pstyle("ghost-offset-x").pfValue, oe = e.pstyle("ghost-offset-y").pfValue, Ce = e.pstyle("ghost-opacity").value, ye = Ce * c;
          t.translate(N, oe), xe(), vt(), Ee(Ce * X), Pe(), Ve(ye, !0), ne(Ce * se), qe(), _e(F !== 0 || G !== 0), Ve(ye, !1), $e(ye), t.translate(-N, -oe);
        }
        d && t.translate(-h.x, -h.y), et(), d && t.translate(h.x, h.y), xe(), vt(), Ee(), Pe(), Ve(c, !0), ne(), qe(), _e(F !== 0 || G !== 0), Ve(c, !1), $e(), d && t.translate(-h.x, -h.y), ut(), it(), r && t.translate(g.x1, g.y1);
      }
    };
    var qu = function(e) {
      if (!["overlay", "underlay"].includes(e))
        throw new Error("Invalid state");
      return function(r, a, n, i, s) {
        var o = this;
        if (!!a.visible()) {
          var l = a.pstyle("".concat(e, "-padding")).pfValue, u = a.pstyle("".concat(e, "-opacity")).value, f = a.pstyle("".concat(e, "-color")).value, h = a.pstyle("".concat(e, "-shape")).value, c = a.pstyle("".concat(e, "-corner-radius")).value;
          if (u > 0) {
            if (n = n || a.position(), i == null || s == null) {
              var d = a.padding();
              i = a.width() + 2 * d, s = a.height() + 2 * d;
            }
            o.colorFillStyle(r, f[0], f[1], f[2], u), o.nodeShapes[h].draw(r, n.x, n.y, i + l * 2, s + l * 2, c), r.fill();
          }
        }
      };
    };
    Ra.drawNodeOverlay = qu("overlay"), Ra.drawNodeUnderlay = qu("underlay"), Ra.hasPie = function(t) {
      return t = t[0], t._private.hasPie;
    }, Ra.drawPie = function(t, e, r, a) {
      e = e[0], a = a || e.position();
      var n = e.cy().style(), i = e.pstyle("pie-size"), s = a.x, o = a.y, l = e.width(), u = e.height(), f = Math.min(l, u) / 2, h = 0, c = this.usePaths();
      c && (s = 0, o = 0), i.units === "%" ? f = f * i.pfValue : i.pfValue !== void 0 && (f = i.pfValue / 2);
      for (var d = 1; d <= n.pieBackgroundN; d++) {
        var v = e.pstyle("pie-" + d + "-background-size").value, y = e.pstyle("pie-" + d + "-background-color").value, p = e.pstyle("pie-" + d + "-background-opacity").value * r, g = v / 100;
        g + h > 1 && (g = 1 - h);
        var m = 1.5 * Math.PI + 2 * Math.PI * h, b = 2 * Math.PI * g, E = m + b;
        v === 0 || h >= 1 || h + g > 1 || (t.beginPath(), t.moveTo(s, o), t.arc(s, o, f, m, E), t.closePath(), this.colorFillStyle(t, y[0], y[1], y[2], p), t.fill(), h += g);
      }
    };
    var er = {}, Ap = 100;
    er.getPixelRatio = function() {
      var t = this.data.contexts[0];
      if (this.forcedPixelRatio != null)
        return this.forcedPixelRatio;
      var e = this.cy.window(), r = t.backingStorePixelRatio || t.webkitBackingStorePixelRatio || t.mozBackingStorePixelRatio || t.msBackingStorePixelRatio || t.oBackingStorePixelRatio || t.backingStorePixelRatio || 1;
      return (e.devicePixelRatio || 1) / r;
    }, er.paintCache = function(t) {
      for (var e = this.paintCaches = this.paintCaches || [], r = !0, a, n = 0; n < e.length; n++)
        if (a = e[n], a.context === t) {
          r = !1;
          break;
        }
      return r && (a = {
        context: t
      }, e.push(a)), a;
    }, er.createGradientStyleFor = function(t, e, r, a, n) {
      var i, s = this.usePaths(), o = r.pstyle(e + "-gradient-stop-colors").value, l = r.pstyle(e + "-gradient-stop-positions").pfValue;
      if (a === "radial-gradient")
        if (r.isEdge()) {
          var u = r.sourceEndpoint(), f = r.targetEndpoint(), h = r.midpoint(), c = Hr(u, h), d = Hr(f, h);
          i = t.createRadialGradient(h.x, h.y, 0, h.x, h.y, Math.max(c, d));
        } else {
          var v = s ? {
            x: 0,
            y: 0
          } : r.position(), y = r.paddedWidth(), p = r.paddedHeight();
          i = t.createRadialGradient(v.x, v.y, 0, v.x, v.y, Math.max(y, p));
        }
      else if (r.isEdge()) {
        var g = r.sourceEndpoint(), m = r.targetEndpoint();
        i = t.createLinearGradient(g.x, g.y, m.x, m.y);
      } else {
        var b = s ? {
          x: 0,
          y: 0
        } : r.position(), E = r.paddedWidth(), M = r.paddedHeight(), S = E / 2, x = M / 2, I = r.pstyle("background-gradient-direction").value;
        switch (I) {
          case "to-bottom":
            i = t.createLinearGradient(b.x, b.y - x, b.x, b.y + x);
            break;
          case "to-top":
            i = t.createLinearGradient(b.x, b.y + x, b.x, b.y - x);
            break;
          case "to-left":
            i = t.createLinearGradient(b.x + S, b.y, b.x - S, b.y);
            break;
          case "to-right":
            i = t.createLinearGradient(b.x - S, b.y, b.x + S, b.y);
            break;
          case "to-bottom-right":
          case "to-right-bottom":
            i = t.createLinearGradient(b.x - S, b.y - x, b.x + S, b.y + x);
            break;
          case "to-top-right":
          case "to-right-top":
            i = t.createLinearGradient(b.x - S, b.y + x, b.x + S, b.y - x);
            break;
          case "to-bottom-left":
          case "to-left-bottom":
            i = t.createLinearGradient(b.x + S, b.y - x, b.x - S, b.y + x);
            break;
          case "to-top-left":
          case "to-left-top":
            i = t.createLinearGradient(b.x + S, b.y + x, b.x - S, b.y - x);
            break;
        }
      }
      if (!i)
        return null;
      for (var A = l.length === o.length, z = o.length, F = 0; F < z; F++)
        i.addColorStop(A ? l[F] : F / (z - 1), "rgba(" + o[F][0] + "," + o[F][1] + "," + o[F][2] + "," + n + ")");
      return i;
    }, er.gradientFillStyle = function(t, e, r, a) {
      var n = this.createGradientStyleFor(t, "background", e, r, a);
      if (!n)
        return null;
      t.fillStyle = n;
    }, er.colorFillStyle = function(t, e, r, a, n) {
      t.fillStyle = "rgba(" + e + "," + r + "," + a + "," + n + ")";
    }, er.eleFillStyle = function(t, e, r) {
      var a = e.pstyle("background-fill").value;
      if (a === "linear-gradient" || a === "radial-gradient")
        this.gradientFillStyle(t, e, a, r);
      else {
        var n = e.pstyle("background-color").value;
        this.colorFillStyle(t, n[0], n[1], n[2], r);
      }
    }, er.gradientStrokeStyle = function(t, e, r, a) {
      var n = this.createGradientStyleFor(t, "line", e, r, a);
      if (!n)
        return null;
      t.strokeStyle = n;
    }, er.colorStrokeStyle = function(t, e, r, a, n) {
      t.strokeStyle = "rgba(" + e + "," + r + "," + a + "," + n + ")";
    }, er.eleStrokeStyle = function(t, e, r) {
      var a = e.pstyle("line-fill").value;
      if (a === "linear-gradient" || a === "radial-gradient")
        this.gradientStrokeStyle(t, e, a, r);
      else {
        var n = e.pstyle("line-color").value;
        this.colorStrokeStyle(t, n[0], n[1], n[2], r);
      }
    }, er.matchCanvasSize = function(t) {
      var e = this, r = e.data, a = e.findContainerClientCoords(), n = a[2], i = a[3], s = e.getPixelRatio(), o = e.motionBlurPxRatio;
      (t === e.data.bufferCanvases[e.MOTIONBLUR_BUFFER_NODE] || t === e.data.bufferCanvases[e.MOTIONBLUR_BUFFER_DRAG]) && (s = o);
      var l = n * s, u = i * s, f;
      if (!(l === e.canvasWidth && u === e.canvasHeight)) {
        e.fontCaches = null;
        var h = r.canvasContainer;
        h.style.width = n + "px", h.style.height = i + "px";
        for (var c = 0; c < e.CANVAS_LAYERS; c++)
          f = r.canvases[c], f.width = l, f.height = u, f.style.width = n + "px", f.style.height = i + "px";
        for (var c = 0; c < e.BUFFER_COUNT; c++)
          f = r.bufferCanvases[c], f.width = l, f.height = u, f.style.width = n + "px", f.style.height = i + "px";
        e.textureMult = 1, s <= 1 && (f = r.bufferCanvases[e.TEXTURE_BUFFER], e.textureMult = 2, f.width = l * e.textureMult, f.height = u * e.textureMult), e.canvasWidth = l, e.canvasHeight = u;
      }
    }, er.renderTo = function(t, e, r, a) {
      this.render({
        forcedContext: t,
        forcedZoom: e,
        forcedPan: r,
        drawAllLayers: !0,
        forcedPxRatio: a
      });
    }, er.render = function(t) {
      t = t || ks();
      var e = t.forcedContext, r = t.drawAllLayers, a = t.drawOnlyNodeLayer, n = t.forcedZoom, i = t.forcedPan, s = this, o = t.forcedPxRatio === void 0 ? this.getPixelRatio() : t.forcedPxRatio, l = s.cy, u = s.data, f = u.canvasNeedsRedraw, h = s.textureOnViewport && !e && (s.pinching || s.hoverData.dragging || s.swipePanning || s.data.wheelZooming), c = t.motionBlur !== void 0 ? t.motionBlur : s.motionBlur, d = s.motionBlurPxRatio, v = l.hasCompoundNodes(), y = s.hoverData.draggingEles, p = !!(s.hoverData.selecting || s.touchData.selecting);
      c = c && !e && s.motionBlurEnabled && !p;
      var g = c;
      e || (s.prevPxRatio !== o && (s.invalidateContainerClientCoordsCache(), s.matchCanvasSize(s.container), s.redrawHint("eles", !0), s.redrawHint("drag", !0)), s.prevPxRatio = o), !e && s.motionBlurTimeout && clearTimeout(s.motionBlurTimeout), c && (s.mbFrames == null && (s.mbFrames = 0), s.mbFrames++, s.mbFrames < 3 && (g = !1), s.mbFrames > s.minMbLowQualFrames && (s.motionBlurPxRatio = s.mbPxRBlurry)), s.clearingMotionBlur && (s.motionBlurPxRatio = 1), s.textureDrawLastFrame && !h && (f[s.NODE] = !0, f[s.SELECT_BOX] = !0);
      var m = l.style(), b = l.zoom(), E = n !== void 0 ? n : b, M = l.pan(), S = {
        x: M.x,
        y: M.y
      }, x = {
        zoom: b,
        pan: {
          x: M.x,
          y: M.y
        }
      }, I = s.prevViewport, A = I === void 0 || x.zoom !== I.zoom || x.pan.x !== I.pan.x || x.pan.y !== I.pan.y;
      !A && !(y && !v) && (s.motionBlurPxRatio = 1), i && (S = i), E *= o, S.x *= o, S.y *= o;
      var z = s.getCachedZSortedEles();
      function F(ke, Pe, Ve, _e, $e) {
        var qe = ke.globalCompositeOperation;
        ke.globalCompositeOperation = "destination-out", s.colorFillStyle(ke, 255, 255, 255, s.motionBlurTransparency), ke.fillRect(Pe, Ve, _e, $e), ke.globalCompositeOperation = qe;
      }
      function G(ke, Pe) {
        var Ve, _e, $e, qe;
        !s.clearingMotionBlur && (ke === u.bufferContexts[s.MOTIONBLUR_BUFFER_NODE] || ke === u.bufferContexts[s.MOTIONBLUR_BUFFER_DRAG]) ? (Ve = {
          x: M.x * d,
          y: M.y * d
        }, _e = b * d, $e = s.canvasWidth * d, qe = s.canvasHeight * d) : (Ve = S, _e = E, $e = s.canvasWidth, qe = s.canvasHeight), ke.setTransform(1, 0, 0, 1, 0, 0), Pe === "motionBlur" ? F(ke, 0, 0, $e, qe) : !e && (Pe === void 0 || Pe) && ke.clearRect(0, 0, $e, qe), r || (ke.translate(Ve.x, Ve.y), ke.scale(_e, _e)), i && ke.translate(i.x, i.y), n && ke.scale(n, n);
      }
      if (h || (s.textureDrawLastFrame = !1), h) {
        if (s.textureDrawLastFrame = !0, !s.textureCache) {
          s.textureCache = {}, s.textureCache.bb = l.mutableElements().boundingBox(), s.textureCache.texture = s.data.bufferCanvases[s.TEXTURE_BUFFER];
          var X = s.data.bufferContexts[s.TEXTURE_BUFFER];
          X.setTransform(1, 0, 0, 1, 0, 0), X.clearRect(0, 0, s.canvasWidth * s.textureMult, s.canvasHeight * s.textureMult), s.render({
            forcedContext: X,
            drawOnlyNodeLayer: !0,
            forcedPxRatio: o * s.textureMult
          });
          var x = s.textureCache.viewport = {
            zoom: l.zoom(),
            pan: l.pan(),
            width: s.canvasWidth,
            height: s.canvasHeight
          };
          x.mpan = {
            x: (0 - x.pan.x) / x.zoom,
            y: (0 - x.pan.y) / x.zoom
          };
        }
        f[s.DRAG] = !1, f[s.NODE] = !1;
        var P = u.contexts[s.NODE], Q = s.textureCache.texture, x = s.textureCache.viewport;
        P.setTransform(1, 0, 0, 1, 0, 0), c ? F(P, 0, 0, x.width, x.height) : P.clearRect(0, 0, x.width, x.height);
        var W = m.core("outside-texture-bg-color").value, Z = m.core("outside-texture-bg-opacity").value;
        s.colorFillStyle(P, W[0], W[1], W[2], Z), P.fillRect(0, 0, x.width, x.height);
        var b = l.zoom();
        G(P, !1), P.clearRect(x.mpan.x, x.mpan.y, x.width / x.zoom / o, x.height / x.zoom / o), P.drawImage(Q, x.mpan.x, x.mpan.y, x.width / x.zoom / o, x.height / x.zoom / o);
      } else
        s.textureOnViewport && !e && (s.textureCache = null);
      var re = l.extent(), le = s.pinching || s.hoverData.dragging || s.swipePanning || s.data.wheelZooming || s.hoverData.draggingEles || s.cy.animated(), ve = s.hideEdgesOnViewport && le, se = [];
      if (se[s.NODE] = !f[s.NODE] && c && !s.clearedForMotionBlur[s.NODE] || s.clearingMotionBlur, se[s.NODE] && (s.clearedForMotionBlur[s.NODE] = !0), se[s.DRAG] = !f[s.DRAG] && c && !s.clearedForMotionBlur[s.DRAG] || s.clearingMotionBlur, se[s.DRAG] && (s.clearedForMotionBlur[s.DRAG] = !0), f[s.NODE] || r || a || se[s.NODE]) {
        var ie = c && !se[s.NODE] && d !== 1, P = e || (ie ? s.data.bufferContexts[s.MOTIONBLUR_BUFFER_NODE] : u.contexts[s.NODE]), be = c && !ie ? "motionBlur" : void 0;
        G(P, be), ve ? s.drawCachedNodes(P, z.nondrag, o, re) : s.drawLayeredElements(P, z.nondrag, o, re), s.debug && s.drawDebugPoints(P, z.nondrag), !r && !c && (f[s.NODE] = !1);
      }
      if (!a && (f[s.DRAG] || r || se[s.DRAG])) {
        var ie = c && !se[s.DRAG] && d !== 1, P = e || (ie ? s.data.bufferContexts[s.MOTIONBLUR_BUFFER_DRAG] : u.contexts[s.DRAG]);
        G(P, c && !ie ? "motionBlur" : void 0), ve ? s.drawCachedNodes(P, z.drag, o, re) : s.drawCachedElements(P, z.drag, o, re), s.debug && s.drawDebugPoints(P, z.drag), !r && !c && (f[s.DRAG] = !1);
      }
      if (s.showFps || !a && f[s.SELECT_BOX] && !r) {
        var P = e || u.contexts[s.SELECT_BOX];
        if (G(P), s.selection[4] == 1 && (s.hoverData.selecting || s.touchData.selecting)) {
          var b = s.cy.zoom(), De = m.core("selection-box-border-width").value / b;
          P.lineWidth = De, P.fillStyle = "rgba(" + m.core("selection-box-color").value[0] + "," + m.core("selection-box-color").value[1] + "," + m.core("selection-box-color").value[2] + "," + m.core("selection-box-opacity").value + ")", P.fillRect(s.selection[0], s.selection[1], s.selection[2] - s.selection[0], s.selection[3] - s.selection[1]), De > 0 && (P.strokeStyle = "rgba(" + m.core("selection-box-border-color").value[0] + "," + m.core("selection-box-border-color").value[1] + "," + m.core("selection-box-border-color").value[2] + "," + m.core("selection-box-opacity").value + ")", P.strokeRect(s.selection[0], s.selection[1], s.selection[2] - s.selection[0], s.selection[3] - s.selection[1]));
        }
        if (u.bgActivePosistion && !s.hoverData.selecting) {
          var b = s.cy.zoom(), Le = u.bgActivePosistion;
          P.fillStyle = "rgba(" + m.core("active-bg-color").value[0] + "," + m.core("active-bg-color").value[1] + "," + m.core("active-bg-color").value[2] + "," + m.core("active-bg-opacity").value + ")", P.beginPath(), P.arc(Le.x, Le.y, m.core("active-bg-size").pfValue / b, 0, 2 * Math.PI), P.fill();
        }
        var Ae = s.lastRedrawTime;
        if (s.showFps && Ae) {
          Ae = Math.round(Ae);
          var Me = Math.round(1e3 / Ae);
          P.setTransform(1, 0, 0, 1, 0, 0), P.fillStyle = "rgba(255, 0, 0, 0.75)", P.strokeStyle = "rgba(255, 0, 0, 0.75)", P.lineWidth = 1, P.fillText("1 frame = " + Ae + " ms = " + Me + " fps", 0, 20);
          var Ee = 60;
          P.strokeRect(0, 30, 250, 20), P.fillRect(0, 30, 250 * Math.min(Me / Ee, 1), 20);
        }
        r || (f[s.SELECT_BOX] = !1);
      }
      if (c && d !== 1) {
        var ne = u.contexts[s.NODE], xe = s.data.bufferCanvases[s.MOTIONBLUR_BUFFER_NODE], Te = u.contexts[s.DRAG], Be = s.data.bufferCanvases[s.MOTIONBLUR_BUFFER_DRAG], He = function(Pe, Ve, _e) {
          Pe.setTransform(1, 0, 0, 1, 0, 0), _e || !g ? Pe.clearRect(0, 0, s.canvasWidth, s.canvasHeight) : F(Pe, 0, 0, s.canvasWidth, s.canvasHeight);
          var $e = d;
          Pe.drawImage(
            Ve,
            0,
            0,
            s.canvasWidth * $e,
            s.canvasHeight * $e,
            0,
            0,
            s.canvasWidth,
            s.canvasHeight
          );
        };
        (f[s.NODE] || se[s.NODE]) && (He(ne, xe, se[s.NODE]), f[s.NODE] = !1), (f[s.DRAG] || se[s.DRAG]) && (He(Te, Be, se[s.DRAG]), f[s.DRAG] = !1);
      }
      s.prevViewport = x, s.clearingMotionBlur && (s.clearingMotionBlur = !1, s.motionBlurCleared = !0, s.motionBlur = !0), c && (s.motionBlurTimeout = setTimeout(function() {
        s.motionBlurTimeout = null, s.clearedForMotionBlur[s.NODE] = !1, s.clearedForMotionBlur[s.DRAG] = !1, s.motionBlur = !1, s.clearingMotionBlur = !h, s.mbFrames = 0, f[s.NODE] = !0, f[s.DRAG] = !0, s.redraw();
      }, Ap)), e || l.emit("render");
    };
    var $r = {};
    $r.drawPolygonPath = function(t, e, r, a, n, i) {
      var s = a / 2, o = n / 2;
      t.beginPath && t.beginPath(), t.moveTo(e + s * i[0], r + o * i[1]);
      for (var l = 1; l < i.length / 2; l++)
        t.lineTo(e + s * i[l * 2], r + o * i[l * 2 + 1]);
      t.closePath();
    }, $r.drawRoundPolygonPath = function(t, e, r, a, n, i, s) {
      s.forEach(function(o) {
        return Lu(t, o);
      }), t.closePath();
    }, $r.drawRoundRectanglePath = function(t, e, r, a, n, i) {
      var s = a / 2, o = n / 2, l = i === "auto" ? Wr(a, n) : Math.min(i, o, s);
      t.beginPath && t.beginPath(), t.moveTo(e, r - o), t.arcTo(e + s, r - o, e + s, r, l), t.arcTo(e + s, r + o, e, r + o, l), t.arcTo(e - s, r + o, e - s, r, l), t.arcTo(e - s, r - o, e, r - o, l), t.lineTo(e, r - o), t.closePath();
    }, $r.drawBottomRoundRectanglePath = function(t, e, r, a, n, i) {
      var s = a / 2, o = n / 2, l = i === "auto" ? Wr(a, n) : i;
      t.beginPath && t.beginPath(), t.moveTo(e, r - o), t.lineTo(e + s, r - o), t.lineTo(e + s, r), t.arcTo(e + s, r + o, e, r + o, l), t.arcTo(e - s, r + o, e - s, r, l), t.lineTo(e - s, r - o), t.lineTo(e, r - o), t.closePath();
    }, $r.drawCutRectanglePath = function(t, e, r, a, n, i, s) {
      var o = a / 2, l = n / 2, u = s === "auto" ? Di() : s;
      t.beginPath && t.beginPath(), t.moveTo(e - o + u, r - l), t.lineTo(e + o - u, r - l), t.lineTo(e + o, r - l + u), t.lineTo(e + o, r + l - u), t.lineTo(e + o - u, r + l), t.lineTo(e - o + u, r + l), t.lineTo(e - o, r + l - u), t.lineTo(e - o, r - l + u), t.closePath();
    }, $r.drawBarrelPath = function(t, e, r, a, n) {
      var i = a / 2, s = n / 2, o = e - i, l = e + i, u = r - s, f = r + s, h = Si(a, n), c = h.widthOffset, d = h.heightOffset, v = h.ctrlPtOffsetPct * c;
      t.beginPath && t.beginPath(), t.moveTo(o, u + d), t.lineTo(o, f - d), t.quadraticCurveTo(o + v, f, o + c, f), t.lineTo(l - c, f), t.quadraticCurveTo(l - v, f, l, f - d), t.lineTo(l, u + d), t.quadraticCurveTo(l - v, u, l - c, u), t.lineTo(o + c, u), t.quadraticCurveTo(o + v, u, o, u + d), t.closePath();
    };
    for (var Wu = Math.sin(0), Ku = Math.cos(0), os = {}, us = {}, Zu = Math.PI / 40, ka = 0 * Math.PI; ka < 2 * Math.PI; ka += Zu)
      os[ka] = Math.sin(ka), us[ka] = Math.cos(ka);
    $r.drawEllipsePath = function(t, e, r, a, n) {
      if (t.beginPath && t.beginPath(), t.ellipse)
        t.ellipse(e, r, a / 2, n / 2, 0, 0, 2 * Math.PI);
      else
        for (var i, s, o = a / 2, l = n / 2, u = 0 * Math.PI; u < 2 * Math.PI; u += Zu)
          i = e - o * os[u] * Wu + o * us[u] * Ku, s = r + l * us[u] * Wu + l * os[u] * Ku, u === 0 ? t.moveTo(i, s) : t.lineTo(i, s);
      t.closePath();
    };
    var vn = {};
    vn.createBuffer = function(t, e) {
      var r = document.createElement("canvas");
      return r.width = t, r.height = e, [r, r.getContext("2d")];
    }, vn.bufferCanvasImage = function(t) {
      var e = this.cy, r = e.mutableElements(), a = r.boundingBox(), n = this.findContainerClientCoords(), i = t.full ? Math.ceil(a.w) : n[2], s = t.full ? Math.ceil(a.h) : n[3], o = R(t.maxWidth) || R(t.maxHeight), l = this.getPixelRatio(), u = 1;
      if (t.scale !== void 0)
        i *= t.scale, s *= t.scale, u = t.scale;
      else if (o) {
        var f = 1 / 0, h = 1 / 0;
        R(t.maxWidth) && (f = u * t.maxWidth / i), R(t.maxHeight) && (h = u * t.maxHeight / s), u = Math.min(f, h), i *= u, s *= u;
      }
      o || (i *= l, s *= l, u *= l);
      var c = document.createElement("canvas");
      c.width = i, c.height = s, c.style.width = i + "px", c.style.height = s + "px";
      var d = c.getContext("2d");
      if (i > 0 && s > 0) {
        d.clearRect(0, 0, i, s), d.globalCompositeOperation = "source-over";
        var v = this.getCachedZSortedEles();
        if (t.full)
          d.translate(-a.x1 * u, -a.y1 * u), d.scale(u, u), this.drawElements(d, v), d.scale(1 / u, 1 / u), d.translate(a.x1 * u, a.y1 * u);
        else {
          var y = e.pan(), p = {
            x: y.x * u,
            y: y.y * u
          };
          u *= e.zoom(), d.translate(p.x, p.y), d.scale(u, u), this.drawElements(d, v), d.scale(1 / u, 1 / u), d.translate(-p.x, -p.y);
        }
        t.bg && (d.globalCompositeOperation = "destination-over", d.fillStyle = t.bg, d.rect(0, 0, i, s), d.fill());
      }
      return c;
    };
    function Op(t, e) {
      for (var r = atob(t), a = new ArrayBuffer(r.length), n = new Uint8Array(a), i = 0; i < r.length; i++)
        n[i] = r.charCodeAt(i);
      return new Blob([a], {
        type: e
      });
    }
    function Qu(t) {
      var e = t.indexOf(",");
      return t.substr(e + 1);
    }
    function Ju(t, e, r) {
      var a = function() {
        return e.toDataURL(r, t.quality);
      };
      switch (t.output) {
        case "blob-promise":
          return new ya(function(n, i) {
            try {
              e.toBlob(function(s) {
                s != null ? n(s) : i(new Error("`canvas.toBlob()` sent a null value in its callback"));
              }, r, t.quality);
            } catch (s) {
              i(s);
            }
          });
        case "blob":
          return Op(Qu(a()), r);
        case "base64":
          return Qu(a());
        case "base64uri":
        default:
          return a();
      }
    }
    vn.png = function(t) {
      return Ju(t, this.bufferCanvasImage(t), "image/png");
    }, vn.jpg = function(t) {
      return Ju(t, this.bufferCanvasImage(t), "image/jpeg");
    };
    var ju = {};
    ju.nodeShapeImpl = function(t, e, r, a, n, i, s, o) {
      switch (t) {
        case "ellipse":
          return this.drawEllipsePath(e, r, a, n, i);
        case "polygon":
          return this.drawPolygonPath(e, r, a, n, i, s);
        case "round-polygon":
          return this.drawRoundPolygonPath(e, r, a, n, i, s, o);
        case "roundrectangle":
        case "round-rectangle":
          return this.drawRoundRectanglePath(e, r, a, n, i, o);
        case "cutrectangle":
        case "cut-rectangle":
          return this.drawCutRectanglePath(e, r, a, n, i, s, o);
        case "bottomroundrectangle":
        case "bottom-round-rectangle":
          return this.drawBottomRoundRectanglePath(e, r, a, n, i, o);
        case "barrel":
          return this.drawBarrelPath(e, r, a, n, i);
      }
    };
    var Mp = el, ot = el.prototype;
    ot.CANVAS_LAYERS = 3, ot.SELECT_BOX = 0, ot.DRAG = 1, ot.NODE = 2, ot.BUFFER_COUNT = 3, ot.TEXTURE_BUFFER = 0, ot.MOTIONBLUR_BUFFER_NODE = 1, ot.MOTIONBLUR_BUFFER_DRAG = 2;
    function el(t) {
      var e = this, r = e.cy.window(), a = r.document;
      e.data = {
        canvases: new Array(ot.CANVAS_LAYERS),
        contexts: new Array(ot.CANVAS_LAYERS),
        canvasNeedsRedraw: new Array(ot.CANVAS_LAYERS),
        bufferCanvases: new Array(ot.BUFFER_COUNT),
        bufferContexts: new Array(ot.CANVAS_LAYERS)
      };
      var n = "-webkit-tap-highlight-color", i = "rgba(0,0,0,0)";
      e.data.canvasContainer = a.createElement("div");
      var s = e.data.canvasContainer.style;
      e.data.canvasContainer.style[n] = i, s.position = "relative", s.zIndex = "0", s.overflow = "hidden";
      var o = t.cy.container();
      o.appendChild(e.data.canvasContainer), o.style[n] = i;
      var l = {
        "-webkit-user-select": "none",
        "-moz-user-select": "-moz-none",
        "user-select": "none",
        "-webkit-tap-highlight-color": "rgba(0,0,0,0)",
        "outline-style": "none"
      };
      dt() && (l["-ms-touch-action"] = "none", l["touch-action"] = "none");
      for (var u = 0; u < ot.CANVAS_LAYERS; u++) {
        var f = e.data.canvases[u] = a.createElement("canvas");
        e.data.contexts[u] = f.getContext("2d"), Object.keys(l).forEach(function(Ee) {
          f.style[Ee] = l[Ee];
        }), f.style.position = "absolute", f.setAttribute("data-id", "layer" + u), f.style.zIndex = String(ot.CANVAS_LAYERS - u), e.data.canvasContainer.appendChild(f), e.data.canvasNeedsRedraw[u] = !1;
      }
      e.data.topCanvas = e.data.canvases[0], e.data.canvases[ot.NODE].setAttribute("data-id", "layer" + ot.NODE + "-node"), e.data.canvases[ot.SELECT_BOX].setAttribute("data-id", "layer" + ot.SELECT_BOX + "-selectbox"), e.data.canvases[ot.DRAG].setAttribute("data-id", "layer" + ot.DRAG + "-drag");
      for (var u = 0; u < ot.BUFFER_COUNT; u++)
        e.data.bufferCanvases[u] = a.createElement("canvas"), e.data.bufferContexts[u] = e.data.bufferCanvases[u].getContext("2d"), e.data.bufferCanvases[u].style.position = "absolute", e.data.bufferCanvases[u].setAttribute("data-id", "buffer" + u), e.data.bufferCanvases[u].style.zIndex = String(-u - 1), e.data.bufferCanvases[u].style.visibility = "hidden";
      e.pathsEnabled = !0;
      var h = Kt(), c = function(ne) {
        return {
          x: (ne.x1 + ne.x2) / 2,
          y: (ne.y1 + ne.y2) / 2
        };
      }, d = function(ne) {
        return {
          x: -ne.w / 2,
          y: -ne.h / 2
        };
      }, v = function(ne) {
        var xe = ne[0]._private, Te = xe.oldBackgroundTimestamp === xe.backgroundTimestamp;
        return !Te;
      }, y = function(ne) {
        return ne[0]._private.nodeKey;
      }, p = function(ne) {
        return ne[0]._private.labelStyleKey;
      }, g = function(ne) {
        return ne[0]._private.sourceLabelStyleKey;
      }, m = function(ne) {
        return ne[0]._private.targetLabelStyleKey;
      }, b = function(ne, xe, Te, Be, He) {
        return e.drawElement(ne, xe, Te, !1, !1, He);
      }, E = function(ne, xe, Te, Be, He) {
        return e.drawElementText(ne, xe, Te, Be, "main", He);
      }, M = function(ne, xe, Te, Be, He) {
        return e.drawElementText(ne, xe, Te, Be, "source", He);
      }, S = function(ne, xe, Te, Be, He) {
        return e.drawElementText(ne, xe, Te, Be, "target", He);
      }, x = function(ne) {
        return ne.boundingBox(), ne[0]._private.bodyBounds;
      }, I = function(ne) {
        return ne.boundingBox(), ne[0]._private.labelBounds.main || h;
      }, A = function(ne) {
        return ne.boundingBox(), ne[0]._private.labelBounds.source || h;
      }, z = function(ne) {
        return ne.boundingBox(), ne[0]._private.labelBounds.target || h;
      }, F = function(ne, xe) {
        return xe;
      }, G = function(ne) {
        return c(x(ne));
      }, X = function(ne, xe, Te) {
        var Be = ne ? ne + "-" : "";
        return {
          x: xe.x + Te.pstyle(Be + "text-margin-x").pfValue,
          y: xe.y + Te.pstyle(Be + "text-margin-y").pfValue
        };
      }, P = function(ne, xe, Te) {
        var Be = ne[0]._private.rscratch;
        return {
          x: Be[xe],
          y: Be[Te]
        };
      }, Q = function(ne) {
        return X("", P(ne, "labelX", "labelY"), ne);
      }, W = function(ne) {
        return X("source", P(ne, "sourceLabelX", "sourceLabelY"), ne);
      }, Z = function(ne) {
        return X("target", P(ne, "targetLabelX", "targetLabelY"), ne);
      }, re = function(ne) {
        return d(x(ne));
      }, le = function(ne) {
        return d(A(ne));
      }, ve = function(ne) {
        return d(z(ne));
      }, se = function(ne) {
        var xe = I(ne), Te = d(I(ne));
        if (ne.isNode()) {
          switch (ne.pstyle("text-halign").value) {
            case "left":
              Te.x = -xe.w;
              break;
            case "right":
              Te.x = 0;
              break;
          }
          switch (ne.pstyle("text-valign").value) {
            case "top":
              Te.y = -xe.h;
              break;
            case "bottom":
              Te.y = 0;
              break;
          }
        }
        return Te;
      }, ie = e.data.eleTxrCache = new hn(e, {
        getKey: y,
        doesEleInvalidateKey: v,
        drawElement: b,
        getBoundingBox: x,
        getRotationPoint: G,
        getRotationOffset: re,
        allowEdgeTxrCaching: !1,
        allowParentTxrCaching: !1
      }), be = e.data.lblTxrCache = new hn(e, {
        getKey: p,
        drawElement: E,
        getBoundingBox: I,
        getRotationPoint: Q,
        getRotationOffset: se,
        isVisible: F
      }), De = e.data.slbTxrCache = new hn(e, {
        getKey: g,
        drawElement: M,
        getBoundingBox: A,
        getRotationPoint: W,
        getRotationOffset: le,
        isVisible: F
      }), Le = e.data.tlbTxrCache = new hn(e, {
        getKey: m,
        drawElement: S,
        getBoundingBox: z,
        getRotationPoint: Z,
        getRotationOffset: ve,
        isVisible: F
      }), Ae = e.data.lyrTxrCache = new Uu(e);
      e.onUpdateEleCalcs(function(ne, xe) {
        ie.invalidateElements(xe), be.invalidateElements(xe), De.invalidateElements(xe), Le.invalidateElements(xe), Ae.invalidateElements(xe);
        for (var Te = 0; Te < xe.length; Te++) {
          var Be = xe[Te]._private;
          Be.oldBackgroundTimestamp = Be.backgroundTimestamp;
        }
      });
      var Me = function(ne) {
        for (var xe = 0; xe < ne.length; xe++)
          Ae.enqueueElementRefinement(ne[xe].ele);
      };
      ie.onDequeue(Me), be.onDequeue(Me), De.onDequeue(Me), Le.onDequeue(Me);
    }
    ot.redrawHint = function(t, e) {
      var r = this;
      switch (t) {
        case "eles":
          r.data.canvasNeedsRedraw[ot.NODE] = e;
          break;
        case "drag":
          r.data.canvasNeedsRedraw[ot.DRAG] = e;
          break;
        case "select":
          r.data.canvasNeedsRedraw[ot.SELECT_BOX] = e;
          break;
      }
    };
    var Np = typeof Path2D < "u";
    ot.path2dEnabled = function(t) {
      if (t === void 0)
        return this.pathsEnabled;
      this.pathsEnabled = !!t;
    }, ot.usePaths = function() {
      return Np && this.pathsEnabled;
    }, ot.setImgSmoothing = function(t, e) {
      t.imageSmoothingEnabled != null ? t.imageSmoothingEnabled = e : (t.webkitImageSmoothingEnabled = e, t.mozImageSmoothingEnabled = e, t.msImageSmoothingEnabled = e);
    }, ot.getImgSmoothing = function(t) {
      return t.imageSmoothingEnabled != null ? t.imageSmoothingEnabled : t.webkitImageSmoothingEnabled || t.mozImageSmoothingEnabled || t.msImageSmoothingEnabled;
    }, ot.makeOffscreenCanvas = function(t, e) {
      var r;
      if ((typeof OffscreenCanvas > "u" ? "undefined" : J(OffscreenCanvas)) !== "undefined")
        r = new OffscreenCanvas(t, e);
      else {
        var a = this.cy.window(), n = a.document;
        r = n.createElement("canvas"), r.width = t, r.height = e;
      }
      return r;
    }, [Yu, wr, Or, is, ra, Ra, er, $r, vn, ju].forEach(function(t) {
      Qe(ot, t);
    });
    var Ip = [{
      name: "null",
      impl: mu
    }, {
      name: "base",
      impl: Fu
    }, {
      name: "canvas",
      impl: Mp
    }], Rp = [{
      type: "layout",
      extensions: zg
    }, {
      type: "renderer",
      extensions: Ip
    }], tl = {}, rl = {};
    function al(t, e, r) {
      var a = r, n = function(I) {
        ht("Can not register `" + e + "` for `" + t + "` since `" + I + "` already exists in the prototype and can not be overridden");
      };
      if (t === "core") {
        if (un.prototype[e])
          return n(e);
        un.prototype[e] = r;
      } else if (t === "collection") {
        if (kt.prototype[e])
          return n(e);
        kt.prototype[e] = r;
      } else if (t === "layout") {
        for (var i = function(I) {
          this.options = I, r.call(this, I), B(this._private) || (this._private = {}), this._private.cy = I.cy, this._private.listeners = [], this.createEmitter();
        }, s = i.prototype = Object.create(r.prototype), o = [], l = 0; l < o.length; l++) {
          var u = o[l];
          s[u] = s[u] || function() {
            return this;
          };
        }
        s.start && !s.run ? s.run = function() {
          return this.start(), this;
        } : !s.start && s.run && (s.start = function() {
          return this.run(), this;
        });
        var f = r.prototype.stop;
        s.stop = function() {
          var x = this.options;
          if (x && x.animate) {
            var I = this.animations;
            if (I)
              for (var A = 0; A < I.length; A++)
                I[A].stop();
          }
          return f ? f.call(this) : this.emit("layoutstop"), this;
        }, s.destroy || (s.destroy = function() {
          return this;
        }), s.cy = function() {
          return this._private.cy;
        };
        var h = function(I) {
          return I._private.cy;
        }, c = {
          addEventFields: function(I, A) {
            A.layout = I, A.cy = h(I), A.target = I;
          },
          bubble: function() {
            return !0;
          },
          parent: function(I) {
            return h(I);
          }
        };
        Qe(s, {
          createEmitter: function() {
            return this._private.emitter = new Hn(c, this), this;
          },
          emitter: function() {
            return this._private.emitter;
          },
          on: function(I, A) {
            return this.emitter().on(I, A), this;
          },
          one: function(I, A) {
            return this.emitter().one(I, A), this;
          },
          once: function(I, A) {
            return this.emitter().one(I, A), this;
          },
          removeListener: function(I, A) {
            return this.emitter().removeListener(I, A), this;
          },
          removeAllListeners: function() {
            return this.emitter().removeAllListeners(), this;
          },
          emit: function(I, A) {
            return this.emitter().emit(I, A), this;
          }
        }), ct.eventAliasesOn(s), a = i;
      } else if (t === "renderer" && e !== "null" && e !== "base") {
        var d = nl("renderer", "base"), v = d.prototype, y = r, p = r.prototype, g = function() {
          d.apply(this, arguments), y.apply(this, arguments);
        }, m = g.prototype;
        for (var b in v) {
          var E = v[b], M = p[b] != null;
          if (M)
            return n(b);
          m[b] = E;
        }
        for (var S in p)
          m[S] = p[S];
        v.clientFunctions.forEach(function(x) {
          m[x] = m[x] || function() {
            Dt("Renderer does not implement `renderer." + x + "()` on its prototype");
          };
        }), a = g;
      } else if (t === "__proto__" || t === "constructor" || t === "prototype")
        return Dt(t + " is an illegal type to be registered, possibly lead to prototype pollutions");
      return ms({
        map: tl,
        keys: [t, e],
        value: a
      });
    }
    function nl(t, e) {
      return bs({
        map: tl,
        keys: [t, e]
      });
    }
    function kp(t, e, r, a, n) {
      return ms({
        map: rl,
        keys: [t, e, r, a],
        value: n
      });
    }
    function Pp(t, e, r, a) {
      return bs({
        map: rl,
        keys: [t, e, r, a]
      });
    }
    var ls = function() {
      if (arguments.length === 2)
        return nl.apply(null, arguments);
      if (arguments.length === 3)
        return al.apply(null, arguments);
      if (arguments.length === 4)
        return Pp.apply(null, arguments);
      if (arguments.length === 5)
        return kp.apply(null, arguments);
      Dt("Invalid extension access syntax");
    };
    un.prototype.extension = ls, Rp.forEach(function(t) {
      t.extensions.forEach(function(e) {
        al(t.type, e.name, e.impl);
      });
    });
    var il = function t() {
      if (!(this instanceof t))
        return new t();
      this.length = 0;
    }, aa = il.prototype;
    aa.instanceString = function() {
      return "stylesheet";
    }, aa.selector = function(t) {
      var e = this.length++;
      return this[e] = {
        selector: t,
        properties: []
      }, this;
    }, aa.css = function(t, e) {
      var r = this.length - 1;
      if (V(t))
        this[r].properties.push({
          name: t,
          value: e
        });
      else if (B(t))
        for (var a = t, n = Object.keys(a), i = 0; i < n.length; i++) {
          var s = n[i], o = a[s];
          if (o != null) {
            var l = $t.properties[s] || $t.properties[pt(s)];
            if (l != null) {
              var u = l.name, f = o;
              this[r].properties.push({
                name: u,
                value: f
              });
            }
          }
        }
      return this;
    }, aa.style = aa.css, aa.generateStyle = function(t) {
      var e = new $t(t);
      return this.appendToStyle(e);
    }, aa.appendToStyle = function(t) {
      for (var e = 0; e < this.length; e++) {
        var r = this[e], a = r.selector, n = r.properties;
        t.selector(a);
        for (var i = 0; i < n.length; i++) {
          var s = n[i];
          t.css(s.name, s.value);
        }
      }
      return t;
    };
    var Bp = "3.30.1", na = function(e) {
      if (e === void 0 && (e = {}), B(e))
        return new un(e);
      if (V(e))
        return ls.apply(ls, arguments);
    };
    return na.use = function(t) {
      var e = Array.prototype.slice.call(arguments, 1);
      return e.unshift(na), t.apply(null, e), this;
    }, na.warnings = function(t) {
      return Is(t);
    }, na.version = Bp, na.stylesheet = na.Stylesheet = il, na;
  });
})(cl);
const vl = cl.exports;
var dl = { exports: {} }, cs = { exports: {} }, vs = { exports: {} }, fl;
function Jp() {
  return fl || (fl = 1, function(pe, he) {
    (function(ce, H) {
      pe.exports = H();
    })(Ba, function() {
      return function(J) {
        var ce = {};
        function H(D) {
          if (ce[D])
            return ce[D].exports;
          var T = ce[D] = {
            i: D,
            l: !1,
            exports: {}
          };
          return J[D].call(T.exports, T, T.exports, H), T.l = !0, T.exports;
        }
        return H.m = J, H.c = ce, H.i = function(D) {
          return D;
        }, H.d = function(D, T, w) {
          H.o(D, T) || Object.defineProperty(D, T, {
            configurable: !1,
            enumerable: !0,
            get: w
          });
        }, H.n = function(D) {
          var T = D && D.__esModule ? function() {
            return D.default;
          } : function() {
            return D;
          };
          return H.d(T, "a", T), T;
        }, H.o = function(D, T) {
          return Object.prototype.hasOwnProperty.call(D, T);
        }, H.p = "", H(H.s = 26);
      }([
        function(J, ce, H) {
          function D() {
          }
          D.QUALITY = 1, D.DEFAULT_CREATE_BENDS_AS_NEEDED = !1, D.DEFAULT_INCREMENTAL = !1, D.DEFAULT_ANIMATION_ON_LAYOUT = !0, D.DEFAULT_ANIMATION_DURING_LAYOUT = !1, D.DEFAULT_ANIMATION_PERIOD = 50, D.DEFAULT_UNIFORM_LEAF_NODE_SIZES = !1, D.DEFAULT_GRAPH_MARGIN = 15, D.NODE_DIMENSIONS_INCLUDE_LABELS = !1, D.SIMPLE_NODE_SIZE = 40, D.SIMPLE_NODE_HALF_SIZE = D.SIMPLE_NODE_SIZE / 2, D.EMPTY_COMPOUND_NODE_SIZE = 40, D.MIN_EDGE_LENGTH = 1, D.WORLD_BOUNDARY = 1e6, D.INITIAL_WORLD_BOUNDARY = D.WORLD_BOUNDARY / 1e3, D.WORLD_CENTER_X = 1200, D.WORLD_CENTER_Y = 900, J.exports = D;
        },
        function(J, ce, H) {
          var D = H(2), T = H(8), w = H(9);
          function C(_, k, K) {
            D.call(this, K), this.isOverlapingSourceAndTarget = !1, this.vGraphObject = K, this.bendpoints = [], this.source = _, this.target = k;
          }
          C.prototype = Object.create(D.prototype);
          for (var $ in D)
            C[$] = D[$];
          C.prototype.getSource = function() {
            return this.source;
          }, C.prototype.getTarget = function() {
            return this.target;
          }, C.prototype.isInterGraph = function() {
            return this.isInterGraph;
          }, C.prototype.getLength = function() {
            return this.length;
          }, C.prototype.isOverlapingSourceAndTarget = function() {
            return this.isOverlapingSourceAndTarget;
          }, C.prototype.getBendpoints = function() {
            return this.bendpoints;
          }, C.prototype.getLca = function() {
            return this.lca;
          }, C.prototype.getSourceInLca = function() {
            return this.sourceInLca;
          }, C.prototype.getTargetInLca = function() {
            return this.targetInLca;
          }, C.prototype.getOtherEnd = function(_) {
            if (this.source === _)
              return this.target;
            if (this.target === _)
              return this.source;
            throw "Node is not incident with this edge";
          }, C.prototype.getOtherEndInGraph = function(_, k) {
            for (var K = this.getOtherEnd(_), O = k.getGraphManager().getRoot(); ; ) {
              if (K.getOwner() == k)
                return K;
              if (K.getOwner() == O)
                break;
              K = K.getOwner().getParent();
            }
            return null;
          }, C.prototype.updateLength = function() {
            var _ = new Array(4);
            this.isOverlapingSourceAndTarget = T.getIntersection(this.target.getRect(), this.source.getRect(), _), this.isOverlapingSourceAndTarget || (this.lengthX = _[0] - _[2], this.lengthY = _[1] - _[3], Math.abs(this.lengthX) < 1 && (this.lengthX = w.sign(this.lengthX)), Math.abs(this.lengthY) < 1 && (this.lengthY = w.sign(this.lengthY)), this.length = Math.sqrt(this.lengthX * this.lengthX + this.lengthY * this.lengthY));
          }, C.prototype.updateLengthSimple = function() {
            this.lengthX = this.target.getCenterX() - this.source.getCenterX(), this.lengthY = this.target.getCenterY() - this.source.getCenterY(), Math.abs(this.lengthX) < 1 && (this.lengthX = w.sign(this.lengthX)), Math.abs(this.lengthY) < 1 && (this.lengthY = w.sign(this.lengthY)), this.length = Math.sqrt(this.lengthX * this.lengthX + this.lengthY * this.lengthY);
          }, J.exports = C;
        },
        function(J, ce, H) {
          function D(T) {
            this.vGraphObject = T;
          }
          J.exports = D;
        },
        function(J, ce, H) {
          var D = H(2), T = H(10), w = H(13), C = H(0), $ = H(16), _ = H(4);
          function k(O, U, Y, j) {
            Y == null && j == null && (j = U), D.call(this, j), O.graphManager != null && (O = O.graphManager), this.estimatedSize = T.MIN_VALUE, this.inclusionTreeDepth = T.MAX_VALUE, this.vGraphObject = j, this.edges = [], this.graphManager = O, Y != null && U != null ? this.rect = new w(U.x, U.y, Y.width, Y.height) : this.rect = new w();
          }
          k.prototype = Object.create(D.prototype);
          for (var K in D)
            k[K] = D[K];
          k.prototype.getEdges = function() {
            return this.edges;
          }, k.prototype.getChild = function() {
            return this.child;
          }, k.prototype.getOwner = function() {
            return this.owner;
          }, k.prototype.getWidth = function() {
            return this.rect.width;
          }, k.prototype.setWidth = function(O) {
            this.rect.width = O;
          }, k.prototype.getHeight = function() {
            return this.rect.height;
          }, k.prototype.setHeight = function(O) {
            this.rect.height = O;
          }, k.prototype.getCenterX = function() {
            return this.rect.x + this.rect.width / 2;
          }, k.prototype.getCenterY = function() {
            return this.rect.y + this.rect.height / 2;
          }, k.prototype.getCenter = function() {
            return new _(this.rect.x + this.rect.width / 2, this.rect.y + this.rect.height / 2);
          }, k.prototype.getLocation = function() {
            return new _(this.rect.x, this.rect.y);
          }, k.prototype.getRect = function() {
            return this.rect;
          }, k.prototype.getDiagonal = function() {
            return Math.sqrt(this.rect.width * this.rect.width + this.rect.height * this.rect.height);
          }, k.prototype.getHalfTheDiagonal = function() {
            return Math.sqrt(this.rect.height * this.rect.height + this.rect.width * this.rect.width) / 2;
          }, k.prototype.setRect = function(O, U) {
            this.rect.x = O.x, this.rect.y = O.y, this.rect.width = U.width, this.rect.height = U.height;
          }, k.prototype.setCenter = function(O, U) {
            this.rect.x = O - this.rect.width / 2, this.rect.y = U - this.rect.height / 2;
          }, k.prototype.setLocation = function(O, U) {
            this.rect.x = O, this.rect.y = U;
          }, k.prototype.moveBy = function(O, U) {
            this.rect.x += O, this.rect.y += U;
          }, k.prototype.getEdgeListToNode = function(O) {
            var U = [], Y = this;
            return Y.edges.forEach(function(j) {
              if (j.target == O) {
                if (j.source != Y)
                  throw "Incorrect edge source!";
                U.push(j);
              }
            }), U;
          }, k.prototype.getEdgesBetween = function(O) {
            var U = [], Y = this;
            return Y.edges.forEach(function(j) {
              if (!(j.source == Y || j.target == Y))
                throw "Incorrect edge source and/or target";
              (j.target == O || j.source == O) && U.push(j);
            }), U;
          }, k.prototype.getNeighborsList = function() {
            var O = /* @__PURE__ */ new Set(), U = this;
            return U.edges.forEach(function(Y) {
              if (Y.source == U)
                O.add(Y.target);
              else {
                if (Y.target != U)
                  throw "Incorrect incidency!";
                O.add(Y.source);
              }
            }), O;
          }, k.prototype.withChildren = function() {
            var O = /* @__PURE__ */ new Set(), U, Y;
            if (O.add(this), this.child != null)
              for (var j = this.child.getNodes(), ae = 0; ae < j.length; ae++)
                U = j[ae], Y = U.withChildren(), Y.forEach(function(ue) {
                  O.add(ue);
                });
            return O;
          }, k.prototype.getNoOfChildren = function() {
            var O = 0, U;
            if (this.child == null)
              O = 1;
            else
              for (var Y = this.child.getNodes(), j = 0; j < Y.length; j++)
                U = Y[j], O += U.getNoOfChildren();
            return O == 0 && (O = 1), O;
          }, k.prototype.getEstimatedSize = function() {
            if (this.estimatedSize == T.MIN_VALUE)
              throw "assert failed";
            return this.estimatedSize;
          }, k.prototype.calcEstimatedSize = function() {
            return this.child == null ? this.estimatedSize = (this.rect.width + this.rect.height) / 2 : (this.estimatedSize = this.child.calcEstimatedSize(), this.rect.width = this.estimatedSize, this.rect.height = this.estimatedSize, this.estimatedSize);
          }, k.prototype.scatter = function() {
            var O, U, Y = -C.INITIAL_WORLD_BOUNDARY, j = C.INITIAL_WORLD_BOUNDARY;
            O = C.WORLD_CENTER_X + $.nextDouble() * (j - Y) + Y;
            var ae = -C.INITIAL_WORLD_BOUNDARY, ue = C.INITIAL_WORLD_BOUNDARY;
            U = C.WORLD_CENTER_Y + $.nextDouble() * (ue - ae) + ae, this.rect.x = O, this.rect.y = U;
          }, k.prototype.updateBounds = function() {
            if (this.getChild() == null)
              throw "assert failed";
            if (this.getChild().getNodes().length != 0) {
              var O = this.getChild();
              if (O.updateBounds(!0), this.rect.x = O.getLeft(), this.rect.y = O.getTop(), this.setWidth(O.getRight() - O.getLeft()), this.setHeight(O.getBottom() - O.getTop()), C.NODE_DIMENSIONS_INCLUDE_LABELS) {
                var U = O.getRight() - O.getLeft(), Y = O.getBottom() - O.getTop();
                this.labelWidth > U && (this.rect.x -= (this.labelWidth - U) / 2, this.setWidth(this.labelWidth)), this.labelHeight > Y && (this.labelPos == "center" ? this.rect.y -= (this.labelHeight - Y) / 2 : this.labelPos == "top" && (this.rect.y -= this.labelHeight - Y), this.setHeight(this.labelHeight));
              }
            }
          }, k.prototype.getInclusionTreeDepth = function() {
            if (this.inclusionTreeDepth == T.MAX_VALUE)
              throw "assert failed";
            return this.inclusionTreeDepth;
          }, k.prototype.transform = function(O) {
            var U = this.rect.x;
            U > C.WORLD_BOUNDARY ? U = C.WORLD_BOUNDARY : U < -C.WORLD_BOUNDARY && (U = -C.WORLD_BOUNDARY);
            var Y = this.rect.y;
            Y > C.WORLD_BOUNDARY ? Y = C.WORLD_BOUNDARY : Y < -C.WORLD_BOUNDARY && (Y = -C.WORLD_BOUNDARY);
            var j = new _(U, Y), ae = O.inverseTransformPoint(j);
            this.setLocation(ae.x, ae.y);
          }, k.prototype.getLeft = function() {
            return this.rect.x;
          }, k.prototype.getRight = function() {
            return this.rect.x + this.rect.width;
          }, k.prototype.getTop = function() {
            return this.rect.y;
          }, k.prototype.getBottom = function() {
            return this.rect.y + this.rect.height;
          }, k.prototype.getParent = function() {
            return this.owner == null ? null : this.owner.getParent();
          }, J.exports = k;
        },
        function(J, ce, H) {
          function D(T, w) {
            T == null && w == null ? (this.x = 0, this.y = 0) : (this.x = T, this.y = w);
          }
          D.prototype.getX = function() {
            return this.x;
          }, D.prototype.getY = function() {
            return this.y;
          }, D.prototype.setX = function(T) {
            this.x = T;
          }, D.prototype.setY = function(T) {
            this.y = T;
          }, D.prototype.getDifference = function(T) {
            return new DimensionD(this.x - T.x, this.y - T.y);
          }, D.prototype.getCopy = function() {
            return new D(this.x, this.y);
          }, D.prototype.translate = function(T) {
            return this.x += T.width, this.y += T.height, this;
          }, J.exports = D;
        },
        function(J, ce, H) {
          var D = H(2), T = H(10), w = H(0), C = H(6), $ = H(3), _ = H(1), k = H(13), K = H(12), O = H(11);
          function U(j, ae, ue) {
            D.call(this, ue), this.estimatedSize = T.MIN_VALUE, this.margin = w.DEFAULT_GRAPH_MARGIN, this.edges = [], this.nodes = [], this.isConnected = !1, this.parent = j, ae != null && ae instanceof C ? this.graphManager = ae : ae != null && ae instanceof Layout && (this.graphManager = ae.graphManager);
          }
          U.prototype = Object.create(D.prototype);
          for (var Y in D)
            U[Y] = D[Y];
          U.prototype.getNodes = function() {
            return this.nodes;
          }, U.prototype.getEdges = function() {
            return this.edges;
          }, U.prototype.getGraphManager = function() {
            return this.graphManager;
          }, U.prototype.getParent = function() {
            return this.parent;
          }, U.prototype.getLeft = function() {
            return this.left;
          }, U.prototype.getRight = function() {
            return this.right;
          }, U.prototype.getTop = function() {
            return this.top;
          }, U.prototype.getBottom = function() {
            return this.bottom;
          }, U.prototype.isConnected = function() {
            return this.isConnected;
          }, U.prototype.add = function(j, ae, ue) {
            if (ae == null && ue == null) {
              var ee = j;
              if (this.graphManager == null)
                throw "Graph has no graph mgr!";
              if (this.getNodes().indexOf(ee) > -1)
                throw "Node already in graph!";
              return ee.owner = this, this.getNodes().push(ee), ee;
            } else {
              var fe = j;
              if (!(this.getNodes().indexOf(ae) > -1 && this.getNodes().indexOf(ue) > -1))
                throw "Source or target not in graph!";
              if (!(ae.owner == ue.owner && ae.owner == this))
                throw "Both owners must be this graph!";
              return ae.owner != ue.owner ? null : (fe.source = ae, fe.target = ue, fe.isInterGraph = !1, this.getEdges().push(fe), ae.edges.push(fe), ue != ae && ue.edges.push(fe), fe);
            }
          }, U.prototype.remove = function(j) {
            var ae = j;
            if (j instanceof $) {
              if (ae == null)
                throw "Node is null!";
              if (!(ae.owner != null && ae.owner == this))
                throw "Owner graph is invalid!";
              if (this.graphManager == null)
                throw "Owner graph manager is invalid!";
              for (var ue = ae.edges.slice(), ee, fe = ue.length, V = 0; V < fe; V++)
                ee = ue[V], ee.isInterGraph ? this.graphManager.remove(ee) : ee.source.owner.remove(ee);
              var te = this.nodes.indexOf(ae);
              if (te == -1)
                throw "Node not in owner node list!";
              this.nodes.splice(te, 1);
            } else if (j instanceof _) {
              var ee = j;
              if (ee == null)
                throw "Edge is null!";
              if (!(ee.source != null && ee.target != null))
                throw "Source and/or target is null!";
              if (!(ee.source.owner != null && ee.target.owner != null && ee.source.owner == this && ee.target.owner == this))
                throw "Source and/or target owner is invalid!";
              var L = ee.source.edges.indexOf(ee), B = ee.target.edges.indexOf(ee);
              if (!(L > -1 && B > -1))
                throw "Source and/or target doesn't know this edge!";
              ee.source.edges.splice(L, 1), ee.target != ee.source && ee.target.edges.splice(B, 1);
              var te = ee.source.owner.getEdges().indexOf(ee);
              if (te == -1)
                throw "Not in owner's edge list!";
              ee.source.owner.getEdges().splice(te, 1);
            }
          }, U.prototype.updateLeftTop = function() {
            for (var j = T.MAX_VALUE, ae = T.MAX_VALUE, ue, ee, fe, V = this.getNodes(), te = V.length, L = 0; L < te; L++) {
              var B = V[L];
              ue = B.getTop(), ee = B.getLeft(), j > ue && (j = ue), ae > ee && (ae = ee);
            }
            return j == T.MAX_VALUE ? null : (V[0].getParent().paddingLeft != null ? fe = V[0].getParent().paddingLeft : fe = this.margin, this.left = ae - fe, this.top = j - fe, new K(this.left, this.top));
          }, U.prototype.updateBounds = function(j) {
            for (var ae = T.MAX_VALUE, ue = -T.MAX_VALUE, ee = T.MAX_VALUE, fe = -T.MAX_VALUE, V, te, L, B, q, R = this.nodes, de = R.length, we = 0; we < de; we++) {
              var Oe = R[we];
              j && Oe.child != null && Oe.updateBounds(), V = Oe.getLeft(), te = Oe.getRight(), L = Oe.getTop(), B = Oe.getBottom(), ae > V && (ae = V), ue < te && (ue = te), ee > L && (ee = L), fe < B && (fe = B);
            }
            var Ie = new k(ae, ee, ue - ae, fe - ee);
            ae == T.MAX_VALUE && (this.left = this.parent.getLeft(), this.right = this.parent.getRight(), this.top = this.parent.getTop(), this.bottom = this.parent.getBottom()), R[0].getParent().paddingLeft != null ? q = R[0].getParent().paddingLeft : q = this.margin, this.left = Ie.x - q, this.right = Ie.x + Ie.width + q, this.top = Ie.y - q, this.bottom = Ie.y + Ie.height + q;
          }, U.calculateBounds = function(j) {
            for (var ae = T.MAX_VALUE, ue = -T.MAX_VALUE, ee = T.MAX_VALUE, fe = -T.MAX_VALUE, V, te, L, B, q = j.length, R = 0; R < q; R++) {
              var de = j[R];
              V = de.getLeft(), te = de.getRight(), L = de.getTop(), B = de.getBottom(), ae > V && (ae = V), ue < te && (ue = te), ee > L && (ee = L), fe < B && (fe = B);
            }
            var we = new k(ae, ee, ue - ae, fe - ee);
            return we;
          }, U.prototype.getInclusionTreeDepth = function() {
            return this == this.graphManager.getRoot() ? 1 : this.parent.getInclusionTreeDepth();
          }, U.prototype.getEstimatedSize = function() {
            if (this.estimatedSize == T.MIN_VALUE)
              throw "assert failed";
            return this.estimatedSize;
          }, U.prototype.calcEstimatedSize = function() {
            for (var j = 0, ae = this.nodes, ue = ae.length, ee = 0; ee < ue; ee++) {
              var fe = ae[ee];
              j += fe.calcEstimatedSize();
            }
            return j == 0 ? this.estimatedSize = w.EMPTY_COMPOUND_NODE_SIZE : this.estimatedSize = j / Math.sqrt(this.nodes.length), this.estimatedSize;
          }, U.prototype.updateConnected = function() {
            var j = this;
            if (this.nodes.length == 0) {
              this.isConnected = !0;
              return;
            }
            var ae = new O(), ue = /* @__PURE__ */ new Set(), ee = this.nodes[0], fe, V, te = ee.withChildren();
            for (te.forEach(function(we) {
              ae.push(we), ue.add(we);
            }); ae.length !== 0; ) {
              ee = ae.shift(), fe = ee.getEdges();
              for (var L = fe.length, B = 0; B < L; B++) {
                var q = fe[B];
                if (V = q.getOtherEndInGraph(ee, this), V != null && !ue.has(V)) {
                  var R = V.withChildren();
                  R.forEach(function(we) {
                    ae.push(we), ue.add(we);
                  });
                }
              }
            }
            if (this.isConnected = !1, ue.size >= this.nodes.length) {
              var de = 0;
              ue.forEach(function(we) {
                we.owner == j && de++;
              }), de == this.nodes.length && (this.isConnected = !0);
            }
          }, J.exports = U;
        },
        function(J, ce, H) {
          var D, T = H(1);
          function w(C) {
            D = H(5), this.layout = C, this.graphs = [], this.edges = [];
          }
          w.prototype.addRoot = function() {
            var C = this.layout.newGraph(), $ = this.layout.newNode(null), _ = this.add(C, $);
            return this.setRootGraph(_), this.rootGraph;
          }, w.prototype.add = function(C, $, _, k, K) {
            if (_ == null && k == null && K == null) {
              if (C == null)
                throw "Graph is null!";
              if ($ == null)
                throw "Parent node is null!";
              if (this.graphs.indexOf(C) > -1)
                throw "Graph already in this graph mgr!";
              if (this.graphs.push(C), C.parent != null)
                throw "Already has a parent!";
              if ($.child != null)
                throw "Already has a child!";
              return C.parent = $, $.child = C, C;
            } else {
              K = _, k = $, _ = C;
              var O = k.getOwner(), U = K.getOwner();
              if (!(O != null && O.getGraphManager() == this))
                throw "Source not in this graph mgr!";
              if (!(U != null && U.getGraphManager() == this))
                throw "Target not in this graph mgr!";
              if (O == U)
                return _.isInterGraph = !1, O.add(_, k, K);
              if (_.isInterGraph = !0, _.source = k, _.target = K, this.edges.indexOf(_) > -1)
                throw "Edge already in inter-graph edge list!";
              if (this.edges.push(_), !(_.source != null && _.target != null))
                throw "Edge source and/or target is null!";
              if (!(_.source.edges.indexOf(_) == -1 && _.target.edges.indexOf(_) == -1))
                throw "Edge already in source and/or target incidency list!";
              return _.source.edges.push(_), _.target.edges.push(_), _;
            }
          }, w.prototype.remove = function(C) {
            if (C instanceof D) {
              var $ = C;
              if ($.getGraphManager() != this)
                throw "Graph not in this graph mgr";
              if (!($ == this.rootGraph || $.parent != null && $.parent.graphManager == this))
                throw "Invalid parent node!";
              var _ = [];
              _ = _.concat($.getEdges());
              for (var k, K = _.length, O = 0; O < K; O++)
                k = _[O], $.remove(k);
              var U = [];
              U = U.concat($.getNodes());
              var Y;
              K = U.length;
              for (var O = 0; O < K; O++)
                Y = U[O], $.remove(Y);
              $ == this.rootGraph && this.setRootGraph(null);
              var j = this.graphs.indexOf($);
              this.graphs.splice(j, 1), $.parent = null;
            } else if (C instanceof T) {
              if (k = C, k == null)
                throw "Edge is null!";
              if (!k.isInterGraph)
                throw "Not an inter-graph edge!";
              if (!(k.source != null && k.target != null))
                throw "Source and/or target is null!";
              if (!(k.source.edges.indexOf(k) != -1 && k.target.edges.indexOf(k) != -1))
                throw "Source and/or target doesn't know this edge!";
              var j = k.source.edges.indexOf(k);
              if (k.source.edges.splice(j, 1), j = k.target.edges.indexOf(k), k.target.edges.splice(j, 1), !(k.source.owner != null && k.source.owner.getGraphManager() != null))
                throw "Edge owner graph or owner graph manager is null!";
              if (k.source.owner.getGraphManager().edges.indexOf(k) == -1)
                throw "Not in owner graph manager's edge list!";
              var j = k.source.owner.getGraphManager().edges.indexOf(k);
              k.source.owner.getGraphManager().edges.splice(j, 1);
            }
          }, w.prototype.updateBounds = function() {
            this.rootGraph.updateBounds(!0);
          }, w.prototype.getGraphs = function() {
            return this.graphs;
          }, w.prototype.getAllNodes = function() {
            if (this.allNodes == null) {
              for (var C = [], $ = this.getGraphs(), _ = $.length, k = 0; k < _; k++)
                C = C.concat($[k].getNodes());
              this.allNodes = C;
            }
            return this.allNodes;
          }, w.prototype.resetAllNodes = function() {
            this.allNodes = null;
          }, w.prototype.resetAllEdges = function() {
            this.allEdges = null;
          }, w.prototype.resetAllNodesToApplyGravitation = function() {
            this.allNodesToApplyGravitation = null;
          }, w.prototype.getAllEdges = function() {
            if (this.allEdges == null) {
              var C = [], $ = this.getGraphs();
              $.length;
              for (var _ = 0; _ < $.length; _++)
                C = C.concat($[_].getEdges());
              C = C.concat(this.edges), this.allEdges = C;
            }
            return this.allEdges;
          }, w.prototype.getAllNodesToApplyGravitation = function() {
            return this.allNodesToApplyGravitation;
          }, w.prototype.setAllNodesToApplyGravitation = function(C) {
            if (this.allNodesToApplyGravitation != null)
              throw "assert failed";
            this.allNodesToApplyGravitation = C;
          }, w.prototype.getRoot = function() {
            return this.rootGraph;
          }, w.prototype.setRootGraph = function(C) {
            if (C.getGraphManager() != this)
              throw "Root not in this graph mgr!";
            this.rootGraph = C, C.parent == null && (C.parent = this.layout.newNode("Root node"));
          }, w.prototype.getLayout = function() {
            return this.layout;
          }, w.prototype.isOneAncestorOfOther = function(C, $) {
            if (!(C != null && $ != null))
              throw "assert failed";
            if (C == $)
              return !0;
            var _ = C.getOwner(), k;
            do {
              if (k = _.getParent(), k == null)
                break;
              if (k == $)
                return !0;
              if (_ = k.getOwner(), _ == null)
                break;
            } while (!0);
            _ = $.getOwner();
            do {
              if (k = _.getParent(), k == null)
                break;
              if (k == C)
                return !0;
              if (_ = k.getOwner(), _ == null)
                break;
            } while (!0);
            return !1;
          }, w.prototype.calcLowestCommonAncestors = function() {
            for (var C, $, _, k, K, O = this.getAllEdges(), U = O.length, Y = 0; Y < U; Y++) {
              if (C = O[Y], $ = C.source, _ = C.target, C.lca = null, C.sourceInLca = $, C.targetInLca = _, $ == _) {
                C.lca = $.getOwner();
                continue;
              }
              for (k = $.getOwner(); C.lca == null; ) {
                for (C.targetInLca = _, K = _.getOwner(); C.lca == null; ) {
                  if (K == k) {
                    C.lca = K;
                    break;
                  }
                  if (K == this.rootGraph)
                    break;
                  if (C.lca != null)
                    throw "assert failed";
                  C.targetInLca = K.getParent(), K = C.targetInLca.getOwner();
                }
                if (k == this.rootGraph)
                  break;
                C.lca == null && (C.sourceInLca = k.getParent(), k = C.sourceInLca.getOwner());
              }
              if (C.lca == null)
                throw "assert failed";
            }
          }, w.prototype.calcLowestCommonAncestor = function(C, $) {
            if (C == $)
              return C.getOwner();
            var _ = C.getOwner();
            do {
              if (_ == null)
                break;
              var k = $.getOwner();
              do {
                if (k == null)
                  break;
                if (k == _)
                  return k;
                k = k.getParent().getOwner();
              } while (!0);
              _ = _.getParent().getOwner();
            } while (!0);
            return _;
          }, w.prototype.calcInclusionTreeDepths = function(C, $) {
            C == null && $ == null && (C = this.rootGraph, $ = 1);
            for (var _, k = C.getNodes(), K = k.length, O = 0; O < K; O++)
              _ = k[O], _.inclusionTreeDepth = $, _.child != null && this.calcInclusionTreeDepths(_.child, $ + 1);
          }, w.prototype.includesInvalidEdge = function() {
            for (var C, $ = this.edges.length, _ = 0; _ < $; _++)
              if (C = this.edges[_], this.isOneAncestorOfOther(C.source, C.target))
                return !0;
            return !1;
          }, J.exports = w;
        },
        function(J, ce, H) {
          var D = H(0);
          function T() {
          }
          for (var w in D)
            T[w] = D[w];
          T.MAX_ITERATIONS = 2500, T.DEFAULT_EDGE_LENGTH = 50, T.DEFAULT_SPRING_STRENGTH = 0.45, T.DEFAULT_REPULSION_STRENGTH = 4500, T.DEFAULT_GRAVITY_STRENGTH = 0.4, T.DEFAULT_COMPOUND_GRAVITY_STRENGTH = 1, T.DEFAULT_GRAVITY_RANGE_FACTOR = 3.8, T.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR = 1.5, T.DEFAULT_USE_SMART_IDEAL_EDGE_LENGTH_CALCULATION = !0, T.DEFAULT_USE_SMART_REPULSION_RANGE_CALCULATION = !0, T.DEFAULT_COOLING_FACTOR_INCREMENTAL = 0.3, T.COOLING_ADAPTATION_FACTOR = 0.33, T.ADAPTATION_LOWER_NODE_LIMIT = 1e3, T.ADAPTATION_UPPER_NODE_LIMIT = 5e3, T.MAX_NODE_DISPLACEMENT_INCREMENTAL = 100, T.MAX_NODE_DISPLACEMENT = T.MAX_NODE_DISPLACEMENT_INCREMENTAL * 3, T.MIN_REPULSION_DIST = T.DEFAULT_EDGE_LENGTH / 10, T.CONVERGENCE_CHECK_PERIOD = 100, T.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR = 0.1, T.MIN_EDGE_LENGTH = 1, T.GRID_CALCULATION_CHECK_PERIOD = 10, J.exports = T;
        },
        function(J, ce, H) {
          var D = H(12);
          function T() {
          }
          T.calcSeparationAmount = function(w, C, $, _) {
            if (!w.intersects(C))
              throw "assert failed";
            var k = new Array(2);
            this.decideDirectionsForOverlappingNodes(w, C, k), $[0] = Math.min(w.getRight(), C.getRight()) - Math.max(w.x, C.x), $[1] = Math.min(w.getBottom(), C.getBottom()) - Math.max(w.y, C.y), w.getX() <= C.getX() && w.getRight() >= C.getRight() ? $[0] += Math.min(C.getX() - w.getX(), w.getRight() - C.getRight()) : C.getX() <= w.getX() && C.getRight() >= w.getRight() && ($[0] += Math.min(w.getX() - C.getX(), C.getRight() - w.getRight())), w.getY() <= C.getY() && w.getBottom() >= C.getBottom() ? $[1] += Math.min(C.getY() - w.getY(), w.getBottom() - C.getBottom()) : C.getY() <= w.getY() && C.getBottom() >= w.getBottom() && ($[1] += Math.min(w.getY() - C.getY(), C.getBottom() - w.getBottom()));
            var K = Math.abs((C.getCenterY() - w.getCenterY()) / (C.getCenterX() - w.getCenterX()));
            C.getCenterY() === w.getCenterY() && C.getCenterX() === w.getCenterX() && (K = 1);
            var O = K * $[0], U = $[1] / K;
            $[0] < U ? U = $[0] : O = $[1], $[0] = -1 * k[0] * (U / 2 + _), $[1] = -1 * k[1] * (O / 2 + _);
          }, T.decideDirectionsForOverlappingNodes = function(w, C, $) {
            w.getCenterX() < C.getCenterX() ? $[0] = -1 : $[0] = 1, w.getCenterY() < C.getCenterY() ? $[1] = -1 : $[1] = 1;
          }, T.getIntersection2 = function(w, C, $) {
            var _ = w.getCenterX(), k = w.getCenterY(), K = C.getCenterX(), O = C.getCenterY();
            if (w.intersects(C))
              return $[0] = _, $[1] = k, $[2] = K, $[3] = O, !0;
            var U = w.getX(), Y = w.getY(), j = w.getRight(), ae = w.getX(), ue = w.getBottom(), ee = w.getRight(), fe = w.getWidthHalf(), V = w.getHeightHalf(), te = C.getX(), L = C.getY(), B = C.getRight(), q = C.getX(), R = C.getBottom(), de = C.getRight(), we = C.getWidthHalf(), Oe = C.getHeightHalf(), Ie = !1, We = !1;
            if (_ === K) {
              if (k > O)
                return $[0] = _, $[1] = Y, $[2] = K, $[3] = R, !1;
              if (k < O)
                return $[0] = _, $[1] = ue, $[2] = K, $[3] = L, !1;
            } else if (k === O) {
              if (_ > K)
                return $[0] = U, $[1] = k, $[2] = B, $[3] = O, !1;
              if (_ < K)
                return $[0] = j, $[1] = k, $[2] = te, $[3] = O, !1;
            } else {
              var rt = w.height / w.width, lt = C.height / C.width, Fe = (O - k) / (K - _), ze = void 0, je = void 0, at = void 0, ft = void 0, dt = void 0, tt = void 0;
              if (-rt === Fe ? _ > K ? ($[0] = ae, $[1] = ue, Ie = !0) : ($[0] = j, $[1] = Y, Ie = !0) : rt === Fe && (_ > K ? ($[0] = U, $[1] = Y, Ie = !0) : ($[0] = ee, $[1] = ue, Ie = !0)), -lt === Fe ? K > _ ? ($[2] = q, $[3] = R, We = !0) : ($[2] = B, $[3] = L, We = !0) : lt === Fe && (K > _ ? ($[2] = te, $[3] = L, We = !0) : ($[2] = de, $[3] = R, We = !0)), Ie && We)
                return !1;
              if (_ > K ? k > O ? (ze = this.getCardinalDirection(rt, Fe, 4), je = this.getCardinalDirection(lt, Fe, 2)) : (ze = this.getCardinalDirection(-rt, Fe, 3), je = this.getCardinalDirection(-lt, Fe, 1)) : k > O ? (ze = this.getCardinalDirection(-rt, Fe, 1), je = this.getCardinalDirection(-lt, Fe, 3)) : (ze = this.getCardinalDirection(rt, Fe, 2), je = this.getCardinalDirection(lt, Fe, 4)), !Ie)
                switch (ze) {
                  case 1:
                    ft = Y, at = _ + -V / Fe, $[0] = at, $[1] = ft;
                    break;
                  case 2:
                    at = ee, ft = k + fe * Fe, $[0] = at, $[1] = ft;
                    break;
                  case 3:
                    ft = ue, at = _ + V / Fe, $[0] = at, $[1] = ft;
                    break;
                  case 4:
                    at = ae, ft = k + -fe * Fe, $[0] = at, $[1] = ft;
                    break;
                }
              if (!We)
                switch (je) {
                  case 1:
                    tt = L, dt = K + -Oe / Fe, $[2] = dt, $[3] = tt;
                    break;
                  case 2:
                    dt = de, tt = O + we * Fe, $[2] = dt, $[3] = tt;
                    break;
                  case 3:
                    tt = R, dt = K + Oe / Fe, $[2] = dt, $[3] = tt;
                    break;
                  case 4:
                    dt = q, tt = O + -we * Fe, $[2] = dt, $[3] = tt;
                    break;
                }
            }
            return !1;
          }, T.getCardinalDirection = function(w, C, $) {
            return w > C ? $ : 1 + $ % 4;
          }, T.getIntersection = function(w, C, $, _) {
            if (_ == null)
              return this.getIntersection2(w, C, $);
            var k = w.x, K = w.y, O = C.x, U = C.y, Y = $.x, j = $.y, ae = _.x, ue = _.y, ee = void 0, fe = void 0, V = void 0, te = void 0, L = void 0, B = void 0, q = void 0, R = void 0, de = void 0;
            return V = U - K, L = k - O, q = O * K - k * U, te = ue - j, B = Y - ae, R = ae * j - Y * ue, de = V * B - te * L, de === 0 ? null : (ee = (L * R - B * q) / de, fe = (te * q - V * R) / de, new D(ee, fe));
          }, T.angleOfVector = function(w, C, $, _) {
            var k = void 0;
            return w !== $ ? (k = Math.atan((_ - C) / ($ - w)), $ < w ? k += Math.PI : _ < C && (k += this.TWO_PI)) : _ < C ? k = this.ONE_AND_HALF_PI : k = this.HALF_PI, k;
          }, T.doIntersect = function(w, C, $, _) {
            var k = w.x, K = w.y, O = C.x, U = C.y, Y = $.x, j = $.y, ae = _.x, ue = _.y, ee = (O - k) * (ue - j) - (ae - Y) * (U - K);
            if (ee === 0)
              return !1;
            var fe = ((ue - j) * (ae - k) + (Y - ae) * (ue - K)) / ee, V = ((K - U) * (ae - k) + (O - k) * (ue - K)) / ee;
            return 0 < fe && fe < 1 && 0 < V && V < 1;
          }, T.HALF_PI = 0.5 * Math.PI, T.ONE_AND_HALF_PI = 1.5 * Math.PI, T.TWO_PI = 2 * Math.PI, T.THREE_PI = 3 * Math.PI, J.exports = T;
        },
        function(J, ce, H) {
          function D() {
          }
          D.sign = function(T) {
            return T > 0 ? 1 : T < 0 ? -1 : 0;
          }, D.floor = function(T) {
            return T < 0 ? Math.ceil(T) : Math.floor(T);
          }, D.ceil = function(T) {
            return T < 0 ? Math.floor(T) : Math.ceil(T);
          }, J.exports = D;
        },
        function(J, ce, H) {
          function D() {
          }
          D.MAX_VALUE = 2147483647, D.MIN_VALUE = -2147483648, J.exports = D;
        },
        function(J, ce, H) {
          var D = function() {
            function k(K, O) {
              for (var U = 0; U < O.length; U++) {
                var Y = O[U];
                Y.enumerable = Y.enumerable || !1, Y.configurable = !0, "value" in Y && (Y.writable = !0), Object.defineProperty(K, Y.key, Y);
              }
            }
            return function(K, O, U) {
              return O && k(K.prototype, O), U && k(K, U), K;
            };
          }();
          function T(k, K) {
            if (!(k instanceof K))
              throw new TypeError("Cannot call a class as a function");
          }
          var w = function(K) {
            return { value: K, next: null, prev: null };
          }, C = function(K, O, U, Y) {
            return K !== null ? K.next = O : Y.head = O, U !== null ? U.prev = O : Y.tail = O, O.prev = K, O.next = U, Y.length++, O;
          }, $ = function(K, O) {
            var U = K.prev, Y = K.next;
            return U !== null ? U.next = Y : O.head = Y, Y !== null ? Y.prev = U : O.tail = U, K.prev = K.next = null, O.length--, K;
          }, _ = function() {
            function k(K) {
              var O = this;
              T(this, k), this.length = 0, this.head = null, this.tail = null, K != null && K.forEach(function(U) {
                return O.push(U);
              });
            }
            return D(k, [{
              key: "size",
              value: function() {
                return this.length;
              }
            }, {
              key: "insertBefore",
              value: function(O, U) {
                return C(U.prev, w(O), U, this);
              }
            }, {
              key: "insertAfter",
              value: function(O, U) {
                return C(U, w(O), U.next, this);
              }
            }, {
              key: "insertNodeBefore",
              value: function(O, U) {
                return C(U.prev, O, U, this);
              }
            }, {
              key: "insertNodeAfter",
              value: function(O, U) {
                return C(U, O, U.next, this);
              }
            }, {
              key: "push",
              value: function(O) {
                return C(this.tail, w(O), null, this);
              }
            }, {
              key: "unshift",
              value: function(O) {
                return C(null, w(O), this.head, this);
              }
            }, {
              key: "remove",
              value: function(O) {
                return $(O, this);
              }
            }, {
              key: "pop",
              value: function() {
                return $(this.tail, this).value;
              }
            }, {
              key: "popNode",
              value: function() {
                return $(this.tail, this);
              }
            }, {
              key: "shift",
              value: function() {
                return $(this.head, this).value;
              }
            }, {
              key: "shiftNode",
              value: function() {
                return $(this.head, this);
              }
            }, {
              key: "get_object_at",
              value: function(O) {
                if (O <= this.length()) {
                  for (var U = 1, Y = this.head; U < O; )
                    Y = Y.next, U++;
                  return Y.value;
                }
              }
            }, {
              key: "set_object_at",
              value: function(O, U) {
                if (O <= this.length()) {
                  for (var Y = 1, j = this.head; Y < O; )
                    j = j.next, Y++;
                  j.value = U;
                }
              }
            }]), k;
          }();
          J.exports = _;
        },
        function(J, ce, H) {
          function D(T, w, C) {
            this.x = null, this.y = null, T == null && w == null && C == null ? (this.x = 0, this.y = 0) : typeof T == "number" && typeof w == "number" && C == null ? (this.x = T, this.y = w) : T.constructor.name == "Point" && w == null && C == null && (C = T, this.x = C.x, this.y = C.y);
          }
          D.prototype.getX = function() {
            return this.x;
          }, D.prototype.getY = function() {
            return this.y;
          }, D.prototype.getLocation = function() {
            return new D(this.x, this.y);
          }, D.prototype.setLocation = function(T, w, C) {
            T.constructor.name == "Point" && w == null && C == null ? (C = T, this.setLocation(C.x, C.y)) : typeof T == "number" && typeof w == "number" && C == null && (parseInt(T) == T && parseInt(w) == w ? this.move(T, w) : (this.x = Math.floor(T + 0.5), this.y = Math.floor(w + 0.5)));
          }, D.prototype.move = function(T, w) {
            this.x = T, this.y = w;
          }, D.prototype.translate = function(T, w) {
            this.x += T, this.y += w;
          }, D.prototype.equals = function(T) {
            if (T.constructor.name == "Point") {
              var w = T;
              return this.x == w.x && this.y == w.y;
            }
            return this == T;
          }, D.prototype.toString = function() {
            return new D().constructor.name + "[x=" + this.x + ",y=" + this.y + "]";
          }, J.exports = D;
        },
        function(J, ce, H) {
          function D(T, w, C, $) {
            this.x = 0, this.y = 0, this.width = 0, this.height = 0, T != null && w != null && C != null && $ != null && (this.x = T, this.y = w, this.width = C, this.height = $);
          }
          D.prototype.getX = function() {
            return this.x;
          }, D.prototype.setX = function(T) {
            this.x = T;
          }, D.prototype.getY = function() {
            return this.y;
          }, D.prototype.setY = function(T) {
            this.y = T;
          }, D.prototype.getWidth = function() {
            return this.width;
          }, D.prototype.setWidth = function(T) {
            this.width = T;
          }, D.prototype.getHeight = function() {
            return this.height;
          }, D.prototype.setHeight = function(T) {
            this.height = T;
          }, D.prototype.getRight = function() {
            return this.x + this.width;
          }, D.prototype.getBottom = function() {
            return this.y + this.height;
          }, D.prototype.intersects = function(T) {
            return !(this.getRight() < T.x || this.getBottom() < T.y || T.getRight() < this.x || T.getBottom() < this.y);
          }, D.prototype.getCenterX = function() {
            return this.x + this.width / 2;
          }, D.prototype.getMinX = function() {
            return this.getX();
          }, D.prototype.getMaxX = function() {
            return this.getX() + this.width;
          }, D.prototype.getCenterY = function() {
            return this.y + this.height / 2;
          }, D.prototype.getMinY = function() {
            return this.getY();
          }, D.prototype.getMaxY = function() {
            return this.getY() + this.height;
          }, D.prototype.getWidthHalf = function() {
            return this.width / 2;
          }, D.prototype.getHeightHalf = function() {
            return this.height / 2;
          }, J.exports = D;
        },
        function(J, ce, H) {
          var D = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(w) {
            return typeof w;
          } : function(w) {
            return w && typeof Symbol == "function" && w.constructor === Symbol && w !== Symbol.prototype ? "symbol" : typeof w;
          };
          function T() {
          }
          T.lastID = 0, T.createID = function(w) {
            return T.isPrimitive(w) ? w : (w.uniqueID != null || (w.uniqueID = T.getString(), T.lastID++), w.uniqueID);
          }, T.getString = function(w) {
            return w == null && (w = T.lastID), "Object#" + w;
          }, T.isPrimitive = function(w) {
            var C = typeof w > "u" ? "undefined" : D(w);
            return w == null || C != "object" && C != "function";
          }, J.exports = T;
        },
        function(J, ce, H) {
          function D(Y) {
            if (Array.isArray(Y)) {
              for (var j = 0, ae = Array(Y.length); j < Y.length; j++)
                ae[j] = Y[j];
              return ae;
            } else
              return Array.from(Y);
          }
          var T = H(0), w = H(6), C = H(3), $ = H(1), _ = H(5), k = H(4), K = H(17), O = H(27);
          function U(Y) {
            O.call(this), this.layoutQuality = T.QUALITY, this.createBendsAsNeeded = T.DEFAULT_CREATE_BENDS_AS_NEEDED, this.incremental = T.DEFAULT_INCREMENTAL, this.animationOnLayout = T.DEFAULT_ANIMATION_ON_LAYOUT, this.animationDuringLayout = T.DEFAULT_ANIMATION_DURING_LAYOUT, this.animationPeriod = T.DEFAULT_ANIMATION_PERIOD, this.uniformLeafNodeSizes = T.DEFAULT_UNIFORM_LEAF_NODE_SIZES, this.edgeToDummyNodes = /* @__PURE__ */ new Map(), this.graphManager = new w(this), this.isLayoutFinished = !1, this.isSubLayout = !1, this.isRemoteUse = !1, Y != null && (this.isRemoteUse = Y);
          }
          U.RANDOM_SEED = 1, U.prototype = Object.create(O.prototype), U.prototype.getGraphManager = function() {
            return this.graphManager;
          }, U.prototype.getAllNodes = function() {
            return this.graphManager.getAllNodes();
          }, U.prototype.getAllEdges = function() {
            return this.graphManager.getAllEdges();
          }, U.prototype.getAllNodesToApplyGravitation = function() {
            return this.graphManager.getAllNodesToApplyGravitation();
          }, U.prototype.newGraphManager = function() {
            var Y = new w(this);
            return this.graphManager = Y, Y;
          }, U.prototype.newGraph = function(Y) {
            return new _(null, this.graphManager, Y);
          }, U.prototype.newNode = function(Y) {
            return new C(this.graphManager, Y);
          }, U.prototype.newEdge = function(Y) {
            return new $(null, null, Y);
          }, U.prototype.checkLayoutSuccess = function() {
            return this.graphManager.getRoot() == null || this.graphManager.getRoot().getNodes().length == 0 || this.graphManager.includesInvalidEdge();
          }, U.prototype.runLayout = function() {
            this.isLayoutFinished = !1, this.tilingPreLayout && this.tilingPreLayout(), this.initParameters();
            var Y;
            return this.checkLayoutSuccess() ? Y = !1 : Y = this.layout(), T.ANIMATE === "during" ? !1 : (Y && (this.isSubLayout || this.doPostLayout()), this.tilingPostLayout && this.tilingPostLayout(), this.isLayoutFinished = !0, Y);
          }, U.prototype.doPostLayout = function() {
            this.incremental || this.transform(), this.update();
          }, U.prototype.update2 = function() {
            if (this.createBendsAsNeeded && (this.createBendpointsFromDummyNodes(), this.graphManager.resetAllEdges()), !this.isRemoteUse) {
              for (var Y = this.graphManager.getAllEdges(), j = 0; j < Y.length; j++)
                Y[j];
              for (var ae = this.graphManager.getRoot().getNodes(), j = 0; j < ae.length; j++)
                ae[j];
              this.update(this.graphManager.getRoot());
            }
          }, U.prototype.update = function(Y) {
            if (Y == null)
              this.update2();
            else if (Y instanceof C) {
              var j = Y;
              if (j.getChild() != null)
                for (var ae = j.getChild().getNodes(), ue = 0; ue < ae.length; ue++)
                  update(ae[ue]);
              if (j.vGraphObject != null) {
                var ee = j.vGraphObject;
                ee.update(j);
              }
            } else if (Y instanceof $) {
              var fe = Y;
              if (fe.vGraphObject != null) {
                var V = fe.vGraphObject;
                V.update(fe);
              }
            } else if (Y instanceof _) {
              var te = Y;
              if (te.vGraphObject != null) {
                var L = te.vGraphObject;
                L.update(te);
              }
            }
          }, U.prototype.initParameters = function() {
            this.isSubLayout || (this.layoutQuality = T.QUALITY, this.animationDuringLayout = T.DEFAULT_ANIMATION_DURING_LAYOUT, this.animationPeriod = T.DEFAULT_ANIMATION_PERIOD, this.animationOnLayout = T.DEFAULT_ANIMATION_ON_LAYOUT, this.incremental = T.DEFAULT_INCREMENTAL, this.createBendsAsNeeded = T.DEFAULT_CREATE_BENDS_AS_NEEDED, this.uniformLeafNodeSizes = T.DEFAULT_UNIFORM_LEAF_NODE_SIZES), this.animationDuringLayout && (this.animationOnLayout = !1);
          }, U.prototype.transform = function(Y) {
            if (Y == null)
              this.transform(new k(0, 0));
            else {
              var j = new K(), ae = this.graphManager.getRoot().updateLeftTop();
              if (ae != null) {
                j.setWorldOrgX(Y.x), j.setWorldOrgY(Y.y), j.setDeviceOrgX(ae.x), j.setDeviceOrgY(ae.y);
                for (var ue = this.getAllNodes(), ee, fe = 0; fe < ue.length; fe++)
                  ee = ue[fe], ee.transform(j);
              }
            }
          }, U.prototype.positionNodesRandomly = function(Y) {
            if (Y == null)
              this.positionNodesRandomly(this.getGraphManager().getRoot()), this.getGraphManager().getRoot().updateBounds(!0);
            else
              for (var j, ae, ue = Y.getNodes(), ee = 0; ee < ue.length; ee++)
                j = ue[ee], ae = j.getChild(), ae == null || ae.getNodes().length == 0 ? j.scatter() : (this.positionNodesRandomly(ae), j.updateBounds());
          }, U.prototype.getFlatForest = function() {
            for (var Y = [], j = !0, ae = this.graphManager.getRoot().getNodes(), ue = !0, ee = 0; ee < ae.length; ee++)
              ae[ee].getChild() != null && (ue = !1);
            if (!ue)
              return Y;
            var fe = /* @__PURE__ */ new Set(), V = [], te = /* @__PURE__ */ new Map(), L = [];
            for (L = L.concat(ae); L.length > 0 && j; ) {
              for (V.push(L[0]); V.length > 0 && j; ) {
                var B = V[0];
                V.splice(0, 1), fe.add(B);
                for (var q = B.getEdges(), ee = 0; ee < q.length; ee++) {
                  var R = q[ee].getOtherEnd(B);
                  if (te.get(B) != R)
                    if (!fe.has(R))
                      V.push(R), te.set(R, B);
                    else {
                      j = !1;
                      break;
                    }
                }
              }
              if (!j)
                Y = [];
              else {
                var de = [].concat(D(fe));
                Y.push(de);
                for (var ee = 0; ee < de.length; ee++) {
                  var we = de[ee], Oe = L.indexOf(we);
                  Oe > -1 && L.splice(Oe, 1);
                }
                fe = /* @__PURE__ */ new Set(), te = /* @__PURE__ */ new Map();
              }
            }
            return Y;
          }, U.prototype.createDummyNodesForBendpoints = function(Y) {
            for (var j = [], ae = Y.source, ue = this.graphManager.calcLowestCommonAncestor(Y.source, Y.target), ee = 0; ee < Y.bendpoints.length; ee++) {
              var fe = this.newNode(null);
              fe.setRect(new Point(0, 0), new Dimension(1, 1)), ue.add(fe);
              var V = this.newEdge(null);
              this.graphManager.add(V, ae, fe), j.add(fe), ae = fe;
            }
            var V = this.newEdge(null);
            return this.graphManager.add(V, ae, Y.target), this.edgeToDummyNodes.set(Y, j), Y.isInterGraph() ? this.graphManager.remove(Y) : ue.remove(Y), j;
          }, U.prototype.createBendpointsFromDummyNodes = function() {
            var Y = [];
            Y = Y.concat(this.graphManager.getAllEdges()), Y = [].concat(D(this.edgeToDummyNodes.keys())).concat(Y);
            for (var j = 0; j < Y.length; j++) {
              var ae = Y[j];
              if (ae.bendpoints.length > 0) {
                for (var ue = this.edgeToDummyNodes.get(ae), ee = 0; ee < ue.length; ee++) {
                  var fe = ue[ee], V = new k(fe.getCenterX(), fe.getCenterY()), te = ae.bendpoints.get(ee);
                  te.x = V.x, te.y = V.y, fe.getOwner().remove(fe);
                }
                this.graphManager.add(ae, ae.source, ae.target);
              }
            }
          }, U.transform = function(Y, j, ae, ue) {
            if (ae != null && ue != null) {
              var ee = j;
              if (Y <= 50) {
                var fe = j / ae;
                ee -= (j - fe) / 50 * (50 - Y);
              } else {
                var V = j * ue;
                ee += (V - j) / 50 * (Y - 50);
              }
              return ee;
            } else {
              var te, L;
              return Y <= 50 ? (te = 9 * j / 500, L = j / 10) : (te = 9 * j / 50, L = -8 * j), te * Y + L;
            }
          }, U.findCenterOfTree = function(Y) {
            var j = [];
            j = j.concat(Y);
            var ae = [], ue = /* @__PURE__ */ new Map(), ee = !1, fe = null;
            (j.length == 1 || j.length == 2) && (ee = !0, fe = j[0]);
            for (var V = 0; V < j.length; V++) {
              var te = j[V], L = te.getNeighborsList().size;
              ue.set(te, te.getNeighborsList().size), L == 1 && ae.push(te);
            }
            var B = [];
            for (B = B.concat(ae); !ee; ) {
              var q = [];
              q = q.concat(B), B = [];
              for (var V = 0; V < j.length; V++) {
                var te = j[V], R = j.indexOf(te);
                R >= 0 && j.splice(R, 1);
                var de = te.getNeighborsList();
                de.forEach(function(Ie) {
                  if (ae.indexOf(Ie) < 0) {
                    var We = ue.get(Ie), rt = We - 1;
                    rt == 1 && B.push(Ie), ue.set(Ie, rt);
                  }
                });
              }
              ae = ae.concat(B), (j.length == 1 || j.length == 2) && (ee = !0, fe = j[0]);
            }
            return fe;
          }, U.prototype.setGraphManager = function(Y) {
            this.graphManager = Y;
          }, J.exports = U;
        },
        function(J, ce, H) {
          function D() {
          }
          D.seed = 1, D.x = 0, D.nextDouble = function() {
            return D.x = Math.sin(D.seed++) * 1e4, D.x - Math.floor(D.x);
          }, J.exports = D;
        },
        function(J, ce, H) {
          var D = H(4);
          function T(w, C) {
            this.lworldOrgX = 0, this.lworldOrgY = 0, this.ldeviceOrgX = 0, this.ldeviceOrgY = 0, this.lworldExtX = 1, this.lworldExtY = 1, this.ldeviceExtX = 1, this.ldeviceExtY = 1;
          }
          T.prototype.getWorldOrgX = function() {
            return this.lworldOrgX;
          }, T.prototype.setWorldOrgX = function(w) {
            this.lworldOrgX = w;
          }, T.prototype.getWorldOrgY = function() {
            return this.lworldOrgY;
          }, T.prototype.setWorldOrgY = function(w) {
            this.lworldOrgY = w;
          }, T.prototype.getWorldExtX = function() {
            return this.lworldExtX;
          }, T.prototype.setWorldExtX = function(w) {
            this.lworldExtX = w;
          }, T.prototype.getWorldExtY = function() {
            return this.lworldExtY;
          }, T.prototype.setWorldExtY = function(w) {
            this.lworldExtY = w;
          }, T.prototype.getDeviceOrgX = function() {
            return this.ldeviceOrgX;
          }, T.prototype.setDeviceOrgX = function(w) {
            this.ldeviceOrgX = w;
          }, T.prototype.getDeviceOrgY = function() {
            return this.ldeviceOrgY;
          }, T.prototype.setDeviceOrgY = function(w) {
            this.ldeviceOrgY = w;
          }, T.prototype.getDeviceExtX = function() {
            return this.ldeviceExtX;
          }, T.prototype.setDeviceExtX = function(w) {
            this.ldeviceExtX = w;
          }, T.prototype.getDeviceExtY = function() {
            return this.ldeviceExtY;
          }, T.prototype.setDeviceExtY = function(w) {
            this.ldeviceExtY = w;
          }, T.prototype.transformX = function(w) {
            var C = 0, $ = this.lworldExtX;
            return $ != 0 && (C = this.ldeviceOrgX + (w - this.lworldOrgX) * this.ldeviceExtX / $), C;
          }, T.prototype.transformY = function(w) {
            var C = 0, $ = this.lworldExtY;
            return $ != 0 && (C = this.ldeviceOrgY + (w - this.lworldOrgY) * this.ldeviceExtY / $), C;
          }, T.prototype.inverseTransformX = function(w) {
            var C = 0, $ = this.ldeviceExtX;
            return $ != 0 && (C = this.lworldOrgX + (w - this.ldeviceOrgX) * this.lworldExtX / $), C;
          }, T.prototype.inverseTransformY = function(w) {
            var C = 0, $ = this.ldeviceExtY;
            return $ != 0 && (C = this.lworldOrgY + (w - this.ldeviceOrgY) * this.lworldExtY / $), C;
          }, T.prototype.inverseTransformPoint = function(w) {
            var C = new D(this.inverseTransformX(w.x), this.inverseTransformY(w.y));
            return C;
          }, J.exports = T;
        },
        function(J, ce, H) {
          function D(O) {
            if (Array.isArray(O)) {
              for (var U = 0, Y = Array(O.length); U < O.length; U++)
                Y[U] = O[U];
              return Y;
            } else
              return Array.from(O);
          }
          var T = H(15), w = H(7), C = H(0), $ = H(8), _ = H(9);
          function k() {
            T.call(this), this.useSmartIdealEdgeLengthCalculation = w.DEFAULT_USE_SMART_IDEAL_EDGE_LENGTH_CALCULATION, this.idealEdgeLength = w.DEFAULT_EDGE_LENGTH, this.springConstant = w.DEFAULT_SPRING_STRENGTH, this.repulsionConstant = w.DEFAULT_REPULSION_STRENGTH, this.gravityConstant = w.DEFAULT_GRAVITY_STRENGTH, this.compoundGravityConstant = w.DEFAULT_COMPOUND_GRAVITY_STRENGTH, this.gravityRangeFactor = w.DEFAULT_GRAVITY_RANGE_FACTOR, this.compoundGravityRangeFactor = w.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR, this.displacementThresholdPerNode = 3 * w.DEFAULT_EDGE_LENGTH / 100, this.coolingFactor = w.DEFAULT_COOLING_FACTOR_INCREMENTAL, this.initialCoolingFactor = w.DEFAULT_COOLING_FACTOR_INCREMENTAL, this.totalDisplacement = 0, this.oldTotalDisplacement = 0, this.maxIterations = w.MAX_ITERATIONS;
          }
          k.prototype = Object.create(T.prototype);
          for (var K in T)
            k[K] = T[K];
          k.prototype.initParameters = function() {
            T.prototype.initParameters.call(this, arguments), this.totalIterations = 0, this.notAnimatedIterations = 0, this.useFRGridVariant = w.DEFAULT_USE_SMART_REPULSION_RANGE_CALCULATION, this.grid = [];
          }, k.prototype.calcIdealEdgeLengths = function() {
            for (var O, U, Y, j, ae, ue, ee = this.getGraphManager().getAllEdges(), fe = 0; fe < ee.length; fe++)
              O = ee[fe], O.idealLength = this.idealEdgeLength, O.isInterGraph && (Y = O.getSource(), j = O.getTarget(), ae = O.getSourceInLca().getEstimatedSize(), ue = O.getTargetInLca().getEstimatedSize(), this.useSmartIdealEdgeLengthCalculation && (O.idealLength += ae + ue - 2 * C.SIMPLE_NODE_SIZE), U = O.getLca().getInclusionTreeDepth(), O.idealLength += w.DEFAULT_EDGE_LENGTH * w.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR * (Y.getInclusionTreeDepth() + j.getInclusionTreeDepth() - 2 * U));
          }, k.prototype.initSpringEmbedder = function() {
            var O = this.getAllNodes().length;
            this.incremental ? (O > w.ADAPTATION_LOWER_NODE_LIMIT && (this.coolingFactor = Math.max(this.coolingFactor * w.COOLING_ADAPTATION_FACTOR, this.coolingFactor - (O - w.ADAPTATION_LOWER_NODE_LIMIT) / (w.ADAPTATION_UPPER_NODE_LIMIT - w.ADAPTATION_LOWER_NODE_LIMIT) * this.coolingFactor * (1 - w.COOLING_ADAPTATION_FACTOR))), this.maxNodeDisplacement = w.MAX_NODE_DISPLACEMENT_INCREMENTAL) : (O > w.ADAPTATION_LOWER_NODE_LIMIT ? this.coolingFactor = Math.max(w.COOLING_ADAPTATION_FACTOR, 1 - (O - w.ADAPTATION_LOWER_NODE_LIMIT) / (w.ADAPTATION_UPPER_NODE_LIMIT - w.ADAPTATION_LOWER_NODE_LIMIT) * (1 - w.COOLING_ADAPTATION_FACTOR)) : this.coolingFactor = 1, this.initialCoolingFactor = this.coolingFactor, this.maxNodeDisplacement = w.MAX_NODE_DISPLACEMENT), this.maxIterations = Math.max(this.getAllNodes().length * 5, this.maxIterations), this.totalDisplacementThreshold = this.displacementThresholdPerNode * this.getAllNodes().length, this.repulsionRange = this.calcRepulsionRange();
          }, k.prototype.calcSpringForces = function() {
            for (var O = this.getAllEdges(), U, Y = 0; Y < O.length; Y++)
              U = O[Y], this.calcSpringForce(U, U.idealLength);
          }, k.prototype.calcRepulsionForces = function() {
            var O = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0, U = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, Y, j, ae, ue, ee = this.getAllNodes(), fe;
            if (this.useFRGridVariant)
              for (this.totalIterations % w.GRID_CALCULATION_CHECK_PERIOD == 1 && O && this.updateGrid(), fe = /* @__PURE__ */ new Set(), Y = 0; Y < ee.length; Y++)
                ae = ee[Y], this.calculateRepulsionForceOfANode(ae, fe, O, U), fe.add(ae);
            else
              for (Y = 0; Y < ee.length; Y++)
                for (ae = ee[Y], j = Y + 1; j < ee.length; j++)
                  ue = ee[j], ae.getOwner() == ue.getOwner() && this.calcRepulsionForce(ae, ue);
          }, k.prototype.calcGravitationalForces = function() {
            for (var O, U = this.getAllNodesToApplyGravitation(), Y = 0; Y < U.length; Y++)
              O = U[Y], this.calcGravitationalForce(O);
          }, k.prototype.moveNodes = function() {
            for (var O = this.getAllNodes(), U, Y = 0; Y < O.length; Y++)
              U = O[Y], U.move();
          }, k.prototype.calcSpringForce = function(O, U) {
            var Y = O.getSource(), j = O.getTarget(), ae, ue, ee, fe;
            if (this.uniformLeafNodeSizes && Y.getChild() == null && j.getChild() == null)
              O.updateLengthSimple();
            else if (O.updateLength(), O.isOverlapingSourceAndTarget)
              return;
            ae = O.getLength(), ae != 0 && (ue = this.springConstant * (ae - U), ee = ue * (O.lengthX / ae), fe = ue * (O.lengthY / ae), Y.springForceX += ee, Y.springForceY += fe, j.springForceX -= ee, j.springForceY -= fe);
          }, k.prototype.calcRepulsionForce = function(O, U) {
            var Y = O.getRect(), j = U.getRect(), ae = new Array(2), ue = new Array(4), ee, fe, V, te, L, B, q;
            if (Y.intersects(j)) {
              $.calcSeparationAmount(Y, j, ae, w.DEFAULT_EDGE_LENGTH / 2), B = 2 * ae[0], q = 2 * ae[1];
              var R = O.noOfChildren * U.noOfChildren / (O.noOfChildren + U.noOfChildren);
              O.repulsionForceX -= R * B, O.repulsionForceY -= R * q, U.repulsionForceX += R * B, U.repulsionForceY += R * q;
            } else
              this.uniformLeafNodeSizes && O.getChild() == null && U.getChild() == null ? (ee = j.getCenterX() - Y.getCenterX(), fe = j.getCenterY() - Y.getCenterY()) : ($.getIntersection(Y, j, ue), ee = ue[2] - ue[0], fe = ue[3] - ue[1]), Math.abs(ee) < w.MIN_REPULSION_DIST && (ee = _.sign(ee) * w.MIN_REPULSION_DIST), Math.abs(fe) < w.MIN_REPULSION_DIST && (fe = _.sign(fe) * w.MIN_REPULSION_DIST), V = ee * ee + fe * fe, te = Math.sqrt(V), L = this.repulsionConstant * O.noOfChildren * U.noOfChildren / V, B = L * ee / te, q = L * fe / te, O.repulsionForceX -= B, O.repulsionForceY -= q, U.repulsionForceX += B, U.repulsionForceY += q;
          }, k.prototype.calcGravitationalForce = function(O) {
            var U, Y, j, ae, ue, ee, fe, V;
            U = O.getOwner(), Y = (U.getRight() + U.getLeft()) / 2, j = (U.getTop() + U.getBottom()) / 2, ae = O.getCenterX() - Y, ue = O.getCenterY() - j, ee = Math.abs(ae) + O.getWidth() / 2, fe = Math.abs(ue) + O.getHeight() / 2, O.getOwner() == this.graphManager.getRoot() ? (V = U.getEstimatedSize() * this.gravityRangeFactor, (ee > V || fe > V) && (O.gravitationForceX = -this.gravityConstant * ae, O.gravitationForceY = -this.gravityConstant * ue)) : (V = U.getEstimatedSize() * this.compoundGravityRangeFactor, (ee > V || fe > V) && (O.gravitationForceX = -this.gravityConstant * ae * this.compoundGravityConstant, O.gravitationForceY = -this.gravityConstant * ue * this.compoundGravityConstant));
          }, k.prototype.isConverged = function() {
            var O, U = !1;
            return this.totalIterations > this.maxIterations / 3 && (U = Math.abs(this.totalDisplacement - this.oldTotalDisplacement) < 2), O = this.totalDisplacement < this.totalDisplacementThreshold, this.oldTotalDisplacement = this.totalDisplacement, O || U;
          }, k.prototype.animate = function() {
            this.animationDuringLayout && !this.isSubLayout && (this.notAnimatedIterations == this.animationPeriod ? (this.update(), this.notAnimatedIterations = 0) : this.notAnimatedIterations++);
          }, k.prototype.calcNoOfChildrenForAllNodes = function() {
            for (var O, U = this.graphManager.getAllNodes(), Y = 0; Y < U.length; Y++)
              O = U[Y], O.noOfChildren = O.getNoOfChildren();
          }, k.prototype.calcGrid = function(O) {
            var U = 0, Y = 0;
            U = parseInt(Math.ceil((O.getRight() - O.getLeft()) / this.repulsionRange)), Y = parseInt(Math.ceil((O.getBottom() - O.getTop()) / this.repulsionRange));
            for (var j = new Array(U), ae = 0; ae < U; ae++)
              j[ae] = new Array(Y);
            for (var ae = 0; ae < U; ae++)
              for (var ue = 0; ue < Y; ue++)
                j[ae][ue] = new Array();
            return j;
          }, k.prototype.addNodeToGrid = function(O, U, Y) {
            var j = 0, ae = 0, ue = 0, ee = 0;
            j = parseInt(Math.floor((O.getRect().x - U) / this.repulsionRange)), ae = parseInt(Math.floor((O.getRect().width + O.getRect().x - U) / this.repulsionRange)), ue = parseInt(Math.floor((O.getRect().y - Y) / this.repulsionRange)), ee = parseInt(Math.floor((O.getRect().height + O.getRect().y - Y) / this.repulsionRange));
            for (var fe = j; fe <= ae; fe++)
              for (var V = ue; V <= ee; V++)
                this.grid[fe][V].push(O), O.setGridCoordinates(j, ae, ue, ee);
          }, k.prototype.updateGrid = function() {
            var O, U, Y = this.getAllNodes();
            for (this.grid = this.calcGrid(this.graphManager.getRoot()), O = 0; O < Y.length; O++)
              U = Y[O], this.addNodeToGrid(U, this.graphManager.getRoot().getLeft(), this.graphManager.getRoot().getTop());
          }, k.prototype.calculateRepulsionForceOfANode = function(O, U, Y, j) {
            if (this.totalIterations % w.GRID_CALCULATION_CHECK_PERIOD == 1 && Y || j) {
              var ae = /* @__PURE__ */ new Set();
              O.surrounding = new Array();
              for (var ue, ee = this.grid, fe = O.startX - 1; fe < O.finishX + 2; fe++)
                for (var V = O.startY - 1; V < O.finishY + 2; V++)
                  if (!(fe < 0 || V < 0 || fe >= ee.length || V >= ee[0].length)) {
                    for (var te = 0; te < ee[fe][V].length; te++)
                      if (ue = ee[fe][V][te], !(O.getOwner() != ue.getOwner() || O == ue) && !U.has(ue) && !ae.has(ue)) {
                        var L = Math.abs(O.getCenterX() - ue.getCenterX()) - (O.getWidth() / 2 + ue.getWidth() / 2), B = Math.abs(O.getCenterY() - ue.getCenterY()) - (O.getHeight() / 2 + ue.getHeight() / 2);
                        L <= this.repulsionRange && B <= this.repulsionRange && ae.add(ue);
                      }
                  }
              O.surrounding = [].concat(D(ae));
            }
            for (fe = 0; fe < O.surrounding.length; fe++)
              this.calcRepulsionForce(O, O.surrounding[fe]);
          }, k.prototype.calcRepulsionRange = function() {
            return 0;
          }, J.exports = k;
        },
        function(J, ce, H) {
          var D = H(1), T = H(7);
          function w($, _, k) {
            D.call(this, $, _, k), this.idealLength = T.DEFAULT_EDGE_LENGTH;
          }
          w.prototype = Object.create(D.prototype);
          for (var C in D)
            w[C] = D[C];
          J.exports = w;
        },
        function(J, ce, H) {
          var D = H(3);
          function T(C, $, _, k) {
            D.call(this, C, $, _, k), this.springForceX = 0, this.springForceY = 0, this.repulsionForceX = 0, this.repulsionForceY = 0, this.gravitationForceX = 0, this.gravitationForceY = 0, this.displacementX = 0, this.displacementY = 0, this.startX = 0, this.finishX = 0, this.startY = 0, this.finishY = 0, this.surrounding = [];
          }
          T.prototype = Object.create(D.prototype);
          for (var w in D)
            T[w] = D[w];
          T.prototype.setGridCoordinates = function(C, $, _, k) {
            this.startX = C, this.finishX = $, this.startY = _, this.finishY = k;
          }, J.exports = T;
        },
        function(J, ce, H) {
          function D(T, w) {
            this.width = 0, this.height = 0, T !== null && w !== null && (this.height = w, this.width = T);
          }
          D.prototype.getWidth = function() {
            return this.width;
          }, D.prototype.setWidth = function(T) {
            this.width = T;
          }, D.prototype.getHeight = function() {
            return this.height;
          }, D.prototype.setHeight = function(T) {
            this.height = T;
          }, J.exports = D;
        },
        function(J, ce, H) {
          var D = H(14);
          function T() {
            this.map = {}, this.keys = [];
          }
          T.prototype.put = function(w, C) {
            var $ = D.createID(w);
            this.contains($) || (this.map[$] = C, this.keys.push(w));
          }, T.prototype.contains = function(w) {
            return D.createID(w), this.map[w] != null;
          }, T.prototype.get = function(w) {
            var C = D.createID(w);
            return this.map[C];
          }, T.prototype.keySet = function() {
            return this.keys;
          }, J.exports = T;
        },
        function(J, ce, H) {
          var D = H(14);
          function T() {
            this.set = {};
          }
          T.prototype.add = function(w) {
            var C = D.createID(w);
            this.contains(C) || (this.set[C] = w);
          }, T.prototype.remove = function(w) {
            delete this.set[D.createID(w)];
          }, T.prototype.clear = function() {
            this.set = {};
          }, T.prototype.contains = function(w) {
            return this.set[D.createID(w)] == w;
          }, T.prototype.isEmpty = function() {
            return this.size() === 0;
          }, T.prototype.size = function() {
            return Object.keys(this.set).length;
          }, T.prototype.addAllTo = function(w) {
            for (var C = Object.keys(this.set), $ = C.length, _ = 0; _ < $; _++)
              w.push(this.set[C[_]]);
          }, T.prototype.size = function() {
            return Object.keys(this.set).length;
          }, T.prototype.addAll = function(w) {
            for (var C = w.length, $ = 0; $ < C; $++) {
              var _ = w[$];
              this.add(_);
            }
          }, J.exports = T;
        },
        function(J, ce, H) {
          var D = function() {
            function $(_, k) {
              for (var K = 0; K < k.length; K++) {
                var O = k[K];
                O.enumerable = O.enumerable || !1, O.configurable = !0, "value" in O && (O.writable = !0), Object.defineProperty(_, O.key, O);
              }
            }
            return function(_, k, K) {
              return k && $(_.prototype, k), K && $(_, K), _;
            };
          }();
          function T($, _) {
            if (!($ instanceof _))
              throw new TypeError("Cannot call a class as a function");
          }
          var w = H(11), C = function() {
            function $(_, k) {
              T(this, $), (k !== null || k !== void 0) && (this.compareFunction = this._defaultCompareFunction);
              var K = void 0;
              _ instanceof w ? K = _.size() : K = _.length, this._quicksort(_, 0, K - 1);
            }
            return D($, [{
              key: "_quicksort",
              value: function(k, K, O) {
                if (K < O) {
                  var U = this._partition(k, K, O);
                  this._quicksort(k, K, U), this._quicksort(k, U + 1, O);
                }
              }
            }, {
              key: "_partition",
              value: function(k, K, O) {
                for (var U = this._get(k, K), Y = K, j = O; ; ) {
                  for (; this.compareFunction(U, this._get(k, j)); )
                    j--;
                  for (; this.compareFunction(this._get(k, Y), U); )
                    Y++;
                  if (Y < j)
                    this._swap(k, Y, j), Y++, j--;
                  else
                    return j;
                }
              }
            }, {
              key: "_get",
              value: function(k, K) {
                return k instanceof w ? k.get_object_at(K) : k[K];
              }
            }, {
              key: "_set",
              value: function(k, K, O) {
                k instanceof w ? k.set_object_at(K, O) : k[K] = O;
              }
            }, {
              key: "_swap",
              value: function(k, K, O) {
                var U = this._get(k, K);
                this._set(k, K, this._get(k, O)), this._set(k, O, U);
              }
            }, {
              key: "_defaultCompareFunction",
              value: function(k, K) {
                return K > k;
              }
            }]), $;
          }();
          J.exports = C;
        },
        function(J, ce, H) {
          var D = function() {
            function C($, _) {
              for (var k = 0; k < _.length; k++) {
                var K = _[k];
                K.enumerable = K.enumerable || !1, K.configurable = !0, "value" in K && (K.writable = !0), Object.defineProperty($, K.key, K);
              }
            }
            return function($, _, k) {
              return _ && C($.prototype, _), k && C($, k), $;
            };
          }();
          function T(C, $) {
            if (!(C instanceof $))
              throw new TypeError("Cannot call a class as a function");
          }
          var w = function() {
            function C($, _) {
              var k = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, K = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : -1, O = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : -1;
              T(this, C), this.sequence1 = $, this.sequence2 = _, this.match_score = k, this.mismatch_penalty = K, this.gap_penalty = O, this.iMax = $.length + 1, this.jMax = _.length + 1, this.grid = new Array(this.iMax);
              for (var U = 0; U < this.iMax; U++) {
                this.grid[U] = new Array(this.jMax);
                for (var Y = 0; Y < this.jMax; Y++)
                  this.grid[U][Y] = 0;
              }
              this.tracebackGrid = new Array(this.iMax);
              for (var j = 0; j < this.iMax; j++) {
                this.tracebackGrid[j] = new Array(this.jMax);
                for (var ae = 0; ae < this.jMax; ae++)
                  this.tracebackGrid[j][ae] = [null, null, null];
              }
              this.alignments = [], this.score = -1, this.computeGrids();
            }
            return D(C, [{
              key: "getScore",
              value: function() {
                return this.score;
              }
            }, {
              key: "getAlignments",
              value: function() {
                return this.alignments;
              }
            }, {
              key: "computeGrids",
              value: function() {
                for (var _ = 1; _ < this.jMax; _++)
                  this.grid[0][_] = this.grid[0][_ - 1] + this.gap_penalty, this.tracebackGrid[0][_] = [!1, !1, !0];
                for (var k = 1; k < this.iMax; k++)
                  this.grid[k][0] = this.grid[k - 1][0] + this.gap_penalty, this.tracebackGrid[k][0] = [!1, !0, !1];
                for (var K = 1; K < this.iMax; K++)
                  for (var O = 1; O < this.jMax; O++) {
                    var U = void 0;
                    this.sequence1[K - 1] === this.sequence2[O - 1] ? U = this.grid[K - 1][O - 1] + this.match_score : U = this.grid[K - 1][O - 1] + this.mismatch_penalty;
                    var Y = this.grid[K - 1][O] + this.gap_penalty, j = this.grid[K][O - 1] + this.gap_penalty, ae = [U, Y, j], ue = this.arrayAllMaxIndexes(ae);
                    this.grid[K][O] = ae[ue[0]], this.tracebackGrid[K][O] = [ue.includes(0), ue.includes(1), ue.includes(2)];
                  }
                this.score = this.grid[this.iMax - 1][this.jMax - 1];
              }
            }, {
              key: "alignmentTraceback",
              value: function() {
                var _ = [];
                for (_.push({
                  pos: [this.sequence1.length, this.sequence2.length],
                  seq1: "",
                  seq2: ""
                }); _[0]; ) {
                  var k = _[0], K = this.tracebackGrid[k.pos[0]][k.pos[1]];
                  K[0] && _.push({
                    pos: [k.pos[0] - 1, k.pos[1] - 1],
                    seq1: this.sequence1[k.pos[0] - 1] + k.seq1,
                    seq2: this.sequence2[k.pos[1] - 1] + k.seq2
                  }), K[1] && _.push({
                    pos: [k.pos[0] - 1, k.pos[1]],
                    seq1: this.sequence1[k.pos[0] - 1] + k.seq1,
                    seq2: "-" + k.seq2
                  }), K[2] && _.push({
                    pos: [k.pos[0], k.pos[1] - 1],
                    seq1: "-" + k.seq1,
                    seq2: this.sequence2[k.pos[1] - 1] + k.seq2
                  }), k.pos[0] === 0 && k.pos[1] === 0 && this.alignments.push({
                    sequence1: k.seq1,
                    sequence2: k.seq2
                  }), _.shift();
                }
                return this.alignments;
              }
            }, {
              key: "getAllIndexes",
              value: function(_, k) {
                for (var K = [], O = -1; (O = _.indexOf(k, O + 1)) !== -1; )
                  K.push(O);
                return K;
              }
            }, {
              key: "arrayAllMaxIndexes",
              value: function(_) {
                return this.getAllIndexes(_, Math.max.apply(null, _));
              }
            }]), C;
          }();
          J.exports = w;
        },
        function(J, ce, H) {
          var D = function() {
          };
          D.FDLayout = H(18), D.FDLayoutConstants = H(7), D.FDLayoutEdge = H(19), D.FDLayoutNode = H(20), D.DimensionD = H(21), D.HashMap = H(22), D.HashSet = H(23), D.IGeometry = H(8), D.IMath = H(9), D.Integer = H(10), D.Point = H(12), D.PointD = H(4), D.RandomSeed = H(16), D.RectangleD = H(13), D.Transform = H(17), D.UniqueIDGeneretor = H(14), D.Quicksort = H(24), D.LinkedList = H(11), D.LGraphObject = H(2), D.LGraph = H(5), D.LEdge = H(1), D.LGraphManager = H(6), D.LNode = H(3), D.Layout = H(15), D.LayoutConstants = H(0), D.NeedlemanWunsch = H(25), J.exports = D;
        },
        function(J, ce, H) {
          function D() {
            this.listeners = [];
          }
          var T = D.prototype;
          T.addListener = function(w, C) {
            this.listeners.push({
              event: w,
              callback: C
            });
          }, T.removeListener = function(w, C) {
            for (var $ = this.listeners.length; $ >= 0; $--) {
              var _ = this.listeners[$];
              _.event === w && _.callback === C && this.listeners.splice($, 1);
            }
          }, T.emit = function(w, C) {
            for (var $ = 0; $ < this.listeners.length; $++) {
              var _ = this.listeners[$];
              w === _.event && _.callback(C);
            }
          }, J.exports = D;
        }
      ]);
    });
  }(vs)), vs.exports;
}
var hl;
function jp() {
  return hl || (hl = 1, function(pe, he) {
    (function(ce, H) {
      pe.exports = H(Jp());
    })(Ba, function(J) {
      return function(ce) {
        var H = {};
        function D(T) {
          if (H[T])
            return H[T].exports;
          var w = H[T] = {
            i: T,
            l: !1,
            exports: {}
          };
          return ce[T].call(w.exports, w, w.exports, D), w.l = !0, w.exports;
        }
        return D.m = ce, D.c = H, D.i = function(T) {
          return T;
        }, D.d = function(T, w, C) {
          D.o(T, w) || Object.defineProperty(T, w, {
            configurable: !1,
            enumerable: !0,
            get: C
          });
        }, D.n = function(T) {
          var w = T && T.__esModule ? function() {
            return T.default;
          } : function() {
            return T;
          };
          return D.d(w, "a", w), w;
        }, D.o = function(T, w) {
          return Object.prototype.hasOwnProperty.call(T, w);
        }, D.p = "", D(D.s = 7);
      }([
        function(ce, H) {
          ce.exports = J;
        },
        function(ce, H, D) {
          var T = D(0).FDLayoutConstants;
          function w() {
          }
          for (var C in T)
            w[C] = T[C];
          w.DEFAULT_USE_MULTI_LEVEL_SCALING = !1, w.DEFAULT_RADIAL_SEPARATION = T.DEFAULT_EDGE_LENGTH, w.DEFAULT_COMPONENT_SEPERATION = 60, w.TILE = !0, w.TILING_PADDING_VERTICAL = 10, w.TILING_PADDING_HORIZONTAL = 10, w.TREE_REDUCTION_ON_INCREMENTAL = !1, ce.exports = w;
        },
        function(ce, H, D) {
          var T = D(0).FDLayoutEdge;
          function w($, _, k) {
            T.call(this, $, _, k);
          }
          w.prototype = Object.create(T.prototype);
          for (var C in T)
            w[C] = T[C];
          ce.exports = w;
        },
        function(ce, H, D) {
          var T = D(0).LGraph;
          function w($, _, k) {
            T.call(this, $, _, k);
          }
          w.prototype = Object.create(T.prototype);
          for (var C in T)
            w[C] = T[C];
          ce.exports = w;
        },
        function(ce, H, D) {
          var T = D(0).LGraphManager;
          function w($) {
            T.call(this, $);
          }
          w.prototype = Object.create(T.prototype);
          for (var C in T)
            w[C] = T[C];
          ce.exports = w;
        },
        function(ce, H, D) {
          var T = D(0).FDLayoutNode, w = D(0).IMath;
          function C(_, k, K, O) {
            T.call(this, _, k, K, O);
          }
          C.prototype = Object.create(T.prototype);
          for (var $ in T)
            C[$] = T[$];
          C.prototype.move = function() {
            var _ = this.graphManager.getLayout();
            this.displacementX = _.coolingFactor * (this.springForceX + this.repulsionForceX + this.gravitationForceX) / this.noOfChildren, this.displacementY = _.coolingFactor * (this.springForceY + this.repulsionForceY + this.gravitationForceY) / this.noOfChildren, Math.abs(this.displacementX) > _.coolingFactor * _.maxNodeDisplacement && (this.displacementX = _.coolingFactor * _.maxNodeDisplacement * w.sign(this.displacementX)), Math.abs(this.displacementY) > _.coolingFactor * _.maxNodeDisplacement && (this.displacementY = _.coolingFactor * _.maxNodeDisplacement * w.sign(this.displacementY)), this.child == null ? this.moveBy(this.displacementX, this.displacementY) : this.child.getNodes().length == 0 ? this.moveBy(this.displacementX, this.displacementY) : this.propogateDisplacementToChildren(this.displacementX, this.displacementY), _.totalDisplacement += Math.abs(this.displacementX) + Math.abs(this.displacementY), this.springForceX = 0, this.springForceY = 0, this.repulsionForceX = 0, this.repulsionForceY = 0, this.gravitationForceX = 0, this.gravitationForceY = 0, this.displacementX = 0, this.displacementY = 0;
          }, C.prototype.propogateDisplacementToChildren = function(_, k) {
            for (var K = this.getChild().getNodes(), O, U = 0; U < K.length; U++)
              O = K[U], O.getChild() == null ? (O.moveBy(_, k), O.displacementX += _, O.displacementY += k) : O.propogateDisplacementToChildren(_, k);
          }, C.prototype.setPred1 = function(_) {
            this.pred1 = _;
          }, C.prototype.getPred1 = function() {
            return pred1;
          }, C.prototype.getPred2 = function() {
            return pred2;
          }, C.prototype.setNext = function(_) {
            this.next = _;
          }, C.prototype.getNext = function() {
            return next;
          }, C.prototype.setProcessed = function(_) {
            this.processed = _;
          }, C.prototype.isProcessed = function() {
            return processed;
          }, ce.exports = C;
        },
        function(ce, H, D) {
          var T = D(0).FDLayout, w = D(4), C = D(3), $ = D(5), _ = D(2), k = D(1), K = D(0).FDLayoutConstants, O = D(0).LayoutConstants, U = D(0).Point, Y = D(0).PointD, j = D(0).Layout, ae = D(0).Integer, ue = D(0).IGeometry, ee = D(0).LGraph, fe = D(0).Transform;
          function V() {
            T.call(this), this.toBeTiled = {};
          }
          V.prototype = Object.create(T.prototype);
          for (var te in T)
            V[te] = T[te];
          V.prototype.newGraphManager = function() {
            var L = new w(this);
            return this.graphManager = L, L;
          }, V.prototype.newGraph = function(L) {
            return new C(null, this.graphManager, L);
          }, V.prototype.newNode = function(L) {
            return new $(this.graphManager, L);
          }, V.prototype.newEdge = function(L) {
            return new _(null, null, L);
          }, V.prototype.initParameters = function() {
            T.prototype.initParameters.call(this, arguments), this.isSubLayout || (k.DEFAULT_EDGE_LENGTH < 10 ? this.idealEdgeLength = 10 : this.idealEdgeLength = k.DEFAULT_EDGE_LENGTH, this.useSmartIdealEdgeLengthCalculation = k.DEFAULT_USE_SMART_IDEAL_EDGE_LENGTH_CALCULATION, this.springConstant = K.DEFAULT_SPRING_STRENGTH, this.repulsionConstant = K.DEFAULT_REPULSION_STRENGTH, this.gravityConstant = K.DEFAULT_GRAVITY_STRENGTH, this.compoundGravityConstant = K.DEFAULT_COMPOUND_GRAVITY_STRENGTH, this.gravityRangeFactor = K.DEFAULT_GRAVITY_RANGE_FACTOR, this.compoundGravityRangeFactor = K.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR, this.prunedNodesAll = [], this.growTreeIterations = 0, this.afterGrowthIterations = 0, this.isTreeGrowing = !1, this.isGrowthFinished = !1, this.coolingCycle = 0, this.maxCoolingCycle = this.maxIterations / K.CONVERGENCE_CHECK_PERIOD, this.finalTemperature = K.CONVERGENCE_CHECK_PERIOD / this.maxIterations, this.coolingAdjuster = 1);
          }, V.prototype.layout = function() {
            var L = O.DEFAULT_CREATE_BENDS_AS_NEEDED;
            return L && (this.createBendpoints(), this.graphManager.resetAllEdges()), this.level = 0, this.classicLayout();
          }, V.prototype.classicLayout = function() {
            if (this.nodesWithGravity = this.calculateNodesToApplyGravitationTo(), this.graphManager.setAllNodesToApplyGravitation(this.nodesWithGravity), this.calcNoOfChildrenForAllNodes(), this.graphManager.calcLowestCommonAncestors(), this.graphManager.calcInclusionTreeDepths(), this.graphManager.getRoot().calcEstimatedSize(), this.calcIdealEdgeLengths(), this.incremental) {
              if (k.TREE_REDUCTION_ON_INCREMENTAL) {
                this.reduceTrees(), this.graphManager.resetAllNodesToApplyGravitation();
                var B = new Set(this.getAllNodes()), q = this.nodesWithGravity.filter(function(we) {
                  return B.has(we);
                });
                this.graphManager.setAllNodesToApplyGravitation(q);
              }
            } else {
              var L = this.getFlatForest();
              if (L.length > 0)
                this.positionNodesRadially(L);
              else {
                this.reduceTrees(), this.graphManager.resetAllNodesToApplyGravitation();
                var B = new Set(this.getAllNodes()), q = this.nodesWithGravity.filter(function(R) {
                  return B.has(R);
                });
                this.graphManager.setAllNodesToApplyGravitation(q), this.positionNodesRandomly();
              }
            }
            return this.initSpringEmbedder(), this.runSpringEmbedder(), !0;
          }, V.prototype.tick = function() {
            if (this.totalIterations++, this.totalIterations === this.maxIterations && !this.isTreeGrowing && !this.isGrowthFinished)
              if (this.prunedNodesAll.length > 0)
                this.isTreeGrowing = !0;
              else
                return !0;
            if (this.totalIterations % K.CONVERGENCE_CHECK_PERIOD == 0 && !this.isTreeGrowing && !this.isGrowthFinished) {
              if (this.isConverged())
                if (this.prunedNodesAll.length > 0)
                  this.isTreeGrowing = !0;
                else
                  return !0;
              this.coolingCycle++, this.layoutQuality == 0 ? this.coolingAdjuster = this.coolingCycle : this.layoutQuality == 1 && (this.coolingAdjuster = this.coolingCycle / 3), this.coolingFactor = Math.max(this.initialCoolingFactor - Math.pow(this.coolingCycle, Math.log(100 * (this.initialCoolingFactor - this.finalTemperature)) / Math.log(this.maxCoolingCycle)) / 100 * this.coolingAdjuster, this.finalTemperature), this.animationPeriod = Math.ceil(this.initialAnimationPeriod * Math.sqrt(this.coolingFactor));
            }
            if (this.isTreeGrowing) {
              if (this.growTreeIterations % 10 == 0)
                if (this.prunedNodesAll.length > 0) {
                  this.graphManager.updateBounds(), this.updateGrid(), this.growTree(this.prunedNodesAll), this.graphManager.resetAllNodesToApplyGravitation();
                  var L = new Set(this.getAllNodes()), B = this.nodesWithGravity.filter(function(de) {
                    return L.has(de);
                  });
                  this.graphManager.setAllNodesToApplyGravitation(B), this.graphManager.updateBounds(), this.updateGrid(), this.coolingFactor = K.DEFAULT_COOLING_FACTOR_INCREMENTAL;
                } else
                  this.isTreeGrowing = !1, this.isGrowthFinished = !0;
              this.growTreeIterations++;
            }
            if (this.isGrowthFinished) {
              if (this.isConverged())
                return !0;
              this.afterGrowthIterations % 10 == 0 && (this.graphManager.updateBounds(), this.updateGrid()), this.coolingFactor = K.DEFAULT_COOLING_FACTOR_INCREMENTAL * ((100 - this.afterGrowthIterations) / 100), this.afterGrowthIterations++;
            }
            var q = !this.isTreeGrowing && !this.isGrowthFinished, R = this.growTreeIterations % 10 == 1 && this.isTreeGrowing || this.afterGrowthIterations % 10 == 1 && this.isGrowthFinished;
            return this.totalDisplacement = 0, this.graphManager.updateBounds(), this.calcSpringForces(), this.calcRepulsionForces(q, R), this.calcGravitationalForces(), this.moveNodes(), this.animate(), !1;
          }, V.prototype.getPositionsData = function() {
            for (var L = this.graphManager.getAllNodes(), B = {}, q = 0; q < L.length; q++) {
              var R = L[q].rect, de = L[q].id;
              B[de] = {
                id: de,
                x: R.getCenterX(),
                y: R.getCenterY(),
                w: R.width,
                h: R.height
              };
            }
            return B;
          }, V.prototype.runSpringEmbedder = function() {
            this.initialAnimationPeriod = 25, this.animationPeriod = this.initialAnimationPeriod;
            var L = !1;
            if (K.ANIMATE === "during")
              this.emit("layoutstarted");
            else {
              for (; !L; )
                L = this.tick();
              this.graphManager.updateBounds();
            }
          }, V.prototype.calculateNodesToApplyGravitationTo = function() {
            var L = [], B, q = this.graphManager.getGraphs(), R = q.length, de;
            for (de = 0; de < R; de++)
              B = q[de], B.updateConnected(), B.isConnected || (L = L.concat(B.getNodes()));
            return L;
          }, V.prototype.createBendpoints = function() {
            var L = [];
            L = L.concat(this.graphManager.getAllEdges());
            var B = /* @__PURE__ */ new Set(), q;
            for (q = 0; q < L.length; q++) {
              var R = L[q];
              if (!B.has(R)) {
                var de = R.getSource(), we = R.getTarget();
                if (de == we)
                  R.getBendpoints().push(new Y()), R.getBendpoints().push(new Y()), this.createDummyNodesForBendpoints(R), B.add(R);
                else {
                  var Oe = [];
                  if (Oe = Oe.concat(de.getEdgeListToNode(we)), Oe = Oe.concat(we.getEdgeListToNode(de)), !B.has(Oe[0])) {
                    if (Oe.length > 1) {
                      var Ie;
                      for (Ie = 0; Ie < Oe.length; Ie++) {
                        var We = Oe[Ie];
                        We.getBendpoints().push(new Y()), this.createDummyNodesForBendpoints(We);
                      }
                    }
                    Oe.forEach(function(rt) {
                      B.add(rt);
                    });
                  }
                }
              }
              if (B.size == L.length)
                break;
            }
          }, V.prototype.positionNodesRadially = function(L) {
            for (var B = new U(0, 0), q = Math.ceil(Math.sqrt(L.length)), R = 0, de = 0, we = 0, Oe = new Y(0, 0), Ie = 0; Ie < L.length; Ie++) {
              Ie % q == 0 && (we = 0, de = R, Ie != 0 && (de += k.DEFAULT_COMPONENT_SEPERATION), R = 0);
              var We = L[Ie], rt = j.findCenterOfTree(We);
              B.x = we, B.y = de, Oe = V.radialLayout(We, rt, B), Oe.y > R && (R = Math.floor(Oe.y)), we = Math.floor(Oe.x + k.DEFAULT_COMPONENT_SEPERATION);
            }
            this.transform(new Y(O.WORLD_CENTER_X - Oe.x / 2, O.WORLD_CENTER_Y - Oe.y / 2));
          }, V.radialLayout = function(L, B, q) {
            var R = Math.max(this.maxDiagonalInTree(L), k.DEFAULT_RADIAL_SEPARATION);
            V.branchRadialLayout(B, null, 0, 359, 0, R);
            var de = ee.calculateBounds(L), we = new fe();
            we.setDeviceOrgX(de.getMinX()), we.setDeviceOrgY(de.getMinY()), we.setWorldOrgX(q.x), we.setWorldOrgY(q.y);
            for (var Oe = 0; Oe < L.length; Oe++) {
              var Ie = L[Oe];
              Ie.transform(we);
            }
            var We = new Y(de.getMaxX(), de.getMaxY());
            return we.inverseTransformPoint(We);
          }, V.branchRadialLayout = function(L, B, q, R, de, we) {
            var Oe = (R - q + 1) / 2;
            Oe < 0 && (Oe += 180);
            var Ie = (Oe + q) % 360, We = Ie * ue.TWO_PI / 360, rt = de * Math.cos(We), lt = de * Math.sin(We);
            L.setCenter(rt, lt);
            var Fe = [];
            Fe = Fe.concat(L.getEdges());
            var ze = Fe.length;
            B != null && ze--;
            for (var je = 0, at = Fe.length, ft, dt = L.getEdgesBetween(B); dt.length > 1; ) {
              var tt = dt[0];
              dt.splice(0, 1);
              var Et = Fe.indexOf(tt);
              Et >= 0 && Fe.splice(Et, 1), at--, ze--;
            }
            B != null ? ft = (Fe.indexOf(dt[0]) + 1) % at : ft = 0;
            for (var pt = Math.abs(R - q) / ze, zt = ft; je != ze; zt = ++zt % at) {
              var tr = Fe[zt].getOtherEnd(L);
              if (tr != B) {
                var yt = (q + je * pt) % 360, jt = (yt + pt) % 360;
                V.branchRadialLayout(tr, L, yt, jt, de + we, we), je++;
              }
            }
          }, V.maxDiagonalInTree = function(L) {
            for (var B = ae.MIN_VALUE, q = 0; q < L.length; q++) {
              var R = L[q], de = R.getDiagonal();
              de > B && (B = de);
            }
            return B;
          }, V.prototype.calcRepulsionRange = function() {
            return 2 * (this.level + 1) * this.idealEdgeLength;
          }, V.prototype.groupZeroDegreeMembers = function() {
            var L = this, B = {};
            this.memberGroups = {}, this.idToDummyNode = {};
            for (var q = [], R = this.graphManager.getAllNodes(), de = 0; de < R.length; de++) {
              var we = R[de], Oe = we.getParent();
              this.getNodeDegreeWithChildren(we) === 0 && (Oe.id == null || !this.getToBeTiled(Oe)) && q.push(we);
            }
            for (var de = 0; de < q.length; de++) {
              var we = q[de], Ie = we.getParent().id;
              typeof B[Ie] > "u" && (B[Ie] = []), B[Ie] = B[Ie].concat(we);
            }
            Object.keys(B).forEach(function(We) {
              if (B[We].length > 1) {
                var rt = "DummyCompound_" + We;
                L.memberGroups[rt] = B[We];
                var lt = B[We][0].getParent(), Fe = new $(L.graphManager);
                Fe.id = rt, Fe.paddingLeft = lt.paddingLeft || 0, Fe.paddingRight = lt.paddingRight || 0, Fe.paddingBottom = lt.paddingBottom || 0, Fe.paddingTop = lt.paddingTop || 0, L.idToDummyNode[rt] = Fe;
                var ze = L.getGraphManager().add(L.newGraph(), Fe), je = lt.getChild();
                je.add(Fe);
                for (var at = 0; at < B[We].length; at++) {
                  var ft = B[We][at];
                  je.remove(ft), ze.add(ft);
                }
              }
            });
          }, V.prototype.clearCompounds = function() {
            var L = {}, B = {};
            this.performDFSOnCompounds();
            for (var q = 0; q < this.compoundOrder.length; q++)
              B[this.compoundOrder[q].id] = this.compoundOrder[q], L[this.compoundOrder[q].id] = [].concat(this.compoundOrder[q].getChild().getNodes()), this.graphManager.remove(this.compoundOrder[q].getChild()), this.compoundOrder[q].child = null;
            this.graphManager.resetAllNodes(), this.tileCompoundMembers(L, B);
          }, V.prototype.clearZeroDegreeMembers = function() {
            var L = this, B = this.tiledZeroDegreePack = [];
            Object.keys(this.memberGroups).forEach(function(q) {
              var R = L.idToDummyNode[q];
              B[q] = L.tileNodes(L.memberGroups[q], R.paddingLeft + R.paddingRight), R.rect.width = B[q].width, R.rect.height = B[q].height;
            });
          }, V.prototype.repopulateCompounds = function() {
            for (var L = this.compoundOrder.length - 1; L >= 0; L--) {
              var B = this.compoundOrder[L], q = B.id, R = B.paddingLeft, de = B.paddingTop;
              this.adjustLocations(this.tiledMemberPack[q], B.rect.x, B.rect.y, R, de);
            }
          }, V.prototype.repopulateZeroDegreeMembers = function() {
            var L = this, B = this.tiledZeroDegreePack;
            Object.keys(B).forEach(function(q) {
              var R = L.idToDummyNode[q], de = R.paddingLeft, we = R.paddingTop;
              L.adjustLocations(B[q], R.rect.x, R.rect.y, de, we);
            });
          }, V.prototype.getToBeTiled = function(L) {
            var B = L.id;
            if (this.toBeTiled[B] != null)
              return this.toBeTiled[B];
            var q = L.getChild();
            if (q == null)
              return this.toBeTiled[B] = !1, !1;
            for (var R = q.getNodes(), de = 0; de < R.length; de++) {
              var we = R[de];
              if (this.getNodeDegree(we) > 0)
                return this.toBeTiled[B] = !1, !1;
              if (we.getChild() == null) {
                this.toBeTiled[we.id] = !1;
                continue;
              }
              if (!this.getToBeTiled(we))
                return this.toBeTiled[B] = !1, !1;
            }
            return this.toBeTiled[B] = !0, !0;
          }, V.prototype.getNodeDegree = function(L) {
            L.id;
            for (var B = L.getEdges(), q = 0, R = 0; R < B.length; R++) {
              var de = B[R];
              de.getSource().id !== de.getTarget().id && (q = q + 1);
            }
            return q;
          }, V.prototype.getNodeDegreeWithChildren = function(L) {
            var B = this.getNodeDegree(L);
            if (L.getChild() == null)
              return B;
            for (var q = L.getChild().getNodes(), R = 0; R < q.length; R++) {
              var de = q[R];
              B += this.getNodeDegreeWithChildren(de);
            }
            return B;
          }, V.prototype.performDFSOnCompounds = function() {
            this.compoundOrder = [], this.fillCompexOrderByDFS(this.graphManager.getRoot().getNodes());
          }, V.prototype.fillCompexOrderByDFS = function(L) {
            for (var B = 0; B < L.length; B++) {
              var q = L[B];
              q.getChild() != null && this.fillCompexOrderByDFS(q.getChild().getNodes()), this.getToBeTiled(q) && this.compoundOrder.push(q);
            }
          }, V.prototype.adjustLocations = function(L, B, q, R, de) {
            B += R, q += de;
            for (var we = B, Oe = 0; Oe < L.rows.length; Oe++) {
              var Ie = L.rows[Oe];
              B = we;
              for (var We = 0, rt = 0; rt < Ie.length; rt++) {
                var lt = Ie[rt];
                lt.rect.x = B, lt.rect.y = q, B += lt.rect.width + L.horizontalPadding, lt.rect.height > We && (We = lt.rect.height);
              }
              q += We + L.verticalPadding;
            }
          }, V.prototype.tileCompoundMembers = function(L, B) {
            var q = this;
            this.tiledMemberPack = [], Object.keys(L).forEach(function(R) {
              var de = B[R];
              q.tiledMemberPack[R] = q.tileNodes(L[R], de.paddingLeft + de.paddingRight), de.rect.width = q.tiledMemberPack[R].width, de.rect.height = q.tiledMemberPack[R].height;
            });
          }, V.prototype.tileNodes = function(L, B) {
            var q = k.TILING_PADDING_VERTICAL, R = k.TILING_PADDING_HORIZONTAL, de = {
              rows: [],
              rowWidth: [],
              rowHeight: [],
              width: 0,
              height: B,
              verticalPadding: q,
              horizontalPadding: R
            };
            L.sort(function(Ie, We) {
              return Ie.rect.width * Ie.rect.height > We.rect.width * We.rect.height ? -1 : Ie.rect.width * Ie.rect.height < We.rect.width * We.rect.height ? 1 : 0;
            });
            for (var we = 0; we < L.length; we++) {
              var Oe = L[we];
              de.rows.length == 0 ? this.insertNodeToRow(de, Oe, 0, B) : this.canAddHorizontal(de, Oe.rect.width, Oe.rect.height) ? this.insertNodeToRow(de, Oe, this.getShortestRowIndex(de), B) : this.insertNodeToRow(de, Oe, de.rows.length, B), this.shiftToLastRow(de);
            }
            return de;
          }, V.prototype.insertNodeToRow = function(L, B, q, R) {
            var de = R;
            if (q == L.rows.length) {
              var we = [];
              L.rows.push(we), L.rowWidth.push(de), L.rowHeight.push(0);
            }
            var Oe = L.rowWidth[q] + B.rect.width;
            L.rows[q].length > 0 && (Oe += L.horizontalPadding), L.rowWidth[q] = Oe, L.width < Oe && (L.width = Oe);
            var Ie = B.rect.height;
            q > 0 && (Ie += L.verticalPadding);
            var We = 0;
            Ie > L.rowHeight[q] && (We = L.rowHeight[q], L.rowHeight[q] = Ie, We = L.rowHeight[q] - We), L.height += We, L.rows[q].push(B);
          }, V.prototype.getShortestRowIndex = function(L) {
            for (var B = -1, q = Number.MAX_VALUE, R = 0; R < L.rows.length; R++)
              L.rowWidth[R] < q && (B = R, q = L.rowWidth[R]);
            return B;
          }, V.prototype.getLongestRowIndex = function(L) {
            for (var B = -1, q = Number.MIN_VALUE, R = 0; R < L.rows.length; R++)
              L.rowWidth[R] > q && (B = R, q = L.rowWidth[R]);
            return B;
          }, V.prototype.canAddHorizontal = function(L, B, q) {
            var R = this.getShortestRowIndex(L);
            if (R < 0)
              return !0;
            var de = L.rowWidth[R];
            if (de + L.horizontalPadding + B <= L.width)
              return !0;
            var we = 0;
            L.rowHeight[R] < q && R > 0 && (we = q + L.verticalPadding - L.rowHeight[R]);
            var Oe;
            L.width - de >= B + L.horizontalPadding ? Oe = (L.height + we) / (de + B + L.horizontalPadding) : Oe = (L.height + we) / L.width, we = q + L.verticalPadding;
            var Ie;
            return L.width < B ? Ie = (L.height + we) / B : Ie = (L.height + we) / L.width, Ie < 1 && (Ie = 1 / Ie), Oe < 1 && (Oe = 1 / Oe), Oe < Ie;
          }, V.prototype.shiftToLastRow = function(L) {
            var B = this.getLongestRowIndex(L), q = L.rowWidth.length - 1, R = L.rows[B], de = R[R.length - 1], we = de.width + L.horizontalPadding;
            if (L.width - L.rowWidth[q] > we && B != q) {
              R.splice(-1, 1), L.rows[q].push(de), L.rowWidth[B] = L.rowWidth[B] - we, L.rowWidth[q] = L.rowWidth[q] + we, L.width = L.rowWidth[instance.getLongestRowIndex(L)];
              for (var Oe = Number.MIN_VALUE, Ie = 0; Ie < R.length; Ie++)
                R[Ie].height > Oe && (Oe = R[Ie].height);
              B > 0 && (Oe += L.verticalPadding);
              var We = L.rowHeight[B] + L.rowHeight[q];
              L.rowHeight[B] = Oe, L.rowHeight[q] < de.height + L.verticalPadding && (L.rowHeight[q] = de.height + L.verticalPadding);
              var rt = L.rowHeight[B] + L.rowHeight[q];
              L.height += rt - We, this.shiftToLastRow(L);
            }
          }, V.prototype.tilingPreLayout = function() {
            k.TILE && (this.groupZeroDegreeMembers(), this.clearCompounds(), this.clearZeroDegreeMembers());
          }, V.prototype.tilingPostLayout = function() {
            k.TILE && (this.repopulateZeroDegreeMembers(), this.repopulateCompounds());
          }, V.prototype.reduceTrees = function() {
            for (var L = [], B = !0, q; B; ) {
              var R = this.graphManager.getAllNodes(), de = [];
              B = !1;
              for (var we = 0; we < R.length; we++)
                q = R[we], q.getEdges().length == 1 && !q.getEdges()[0].isInterGraph && q.getChild() == null && (de.push([q, q.getEdges()[0], q.getOwner()]), B = !0);
              if (B == !0) {
                for (var Oe = [], Ie = 0; Ie < de.length; Ie++)
                  de[Ie][0].getEdges().length == 1 && (Oe.push(de[Ie]), de[Ie][0].getOwner().remove(de[Ie][0]));
                L.push(Oe), this.graphManager.resetAllNodes(), this.graphManager.resetAllEdges();
              }
            }
            this.prunedNodesAll = L;
          }, V.prototype.growTree = function(L) {
            for (var B = L.length, q = L[B - 1], R, de = 0; de < q.length; de++)
              R = q[de], this.findPlaceforPrunedNode(R), R[2].add(R[0]), R[2].add(R[1], R[1].source, R[1].target);
            L.splice(L.length - 1, 1), this.graphManager.resetAllNodes(), this.graphManager.resetAllEdges();
          }, V.prototype.findPlaceforPrunedNode = function(L) {
            var B, q, R = L[0];
            R == L[1].source ? q = L[1].target : q = L[1].source;
            var de = q.startX, we = q.finishX, Oe = q.startY, Ie = q.finishY, We = 0, rt = 0, lt = 0, Fe = 0, ze = [We, lt, rt, Fe];
            if (Oe > 0)
              for (var je = de; je <= we; je++)
                ze[0] += this.grid[je][Oe - 1].length + this.grid[je][Oe].length - 1;
            if (we < this.grid.length - 1)
              for (var je = Oe; je <= Ie; je++)
                ze[1] += this.grid[we + 1][je].length + this.grid[we][je].length - 1;
            if (Ie < this.grid[0].length - 1)
              for (var je = de; je <= we; je++)
                ze[2] += this.grid[je][Ie + 1].length + this.grid[je][Ie].length - 1;
            if (de > 0)
              for (var je = Oe; je <= Ie; je++)
                ze[3] += this.grid[de - 1][je].length + this.grid[de][je].length - 1;
            for (var at = ae.MAX_VALUE, ft, dt, tt = 0; tt < ze.length; tt++)
              ze[tt] < at ? (at = ze[tt], ft = 1, dt = tt) : ze[tt] == at && ft++;
            if (ft == 3 && at == 0)
              ze[0] == 0 && ze[1] == 0 && ze[2] == 0 ? B = 1 : ze[0] == 0 && ze[1] == 0 && ze[3] == 0 ? B = 0 : ze[0] == 0 && ze[2] == 0 && ze[3] == 0 ? B = 3 : ze[1] == 0 && ze[2] == 0 && ze[3] == 0 && (B = 2);
            else if (ft == 2 && at == 0) {
              var Et = Math.floor(Math.random() * 2);
              ze[0] == 0 && ze[1] == 0 ? Et == 0 ? B = 0 : B = 1 : ze[0] == 0 && ze[2] == 0 ? Et == 0 ? B = 0 : B = 2 : ze[0] == 0 && ze[3] == 0 ? Et == 0 ? B = 0 : B = 3 : ze[1] == 0 && ze[2] == 0 ? Et == 0 ? B = 1 : B = 2 : ze[1] == 0 && ze[3] == 0 ? Et == 0 ? B = 1 : B = 3 : Et == 0 ? B = 2 : B = 3;
            } else if (ft == 4 && at == 0) {
              var Et = Math.floor(Math.random() * 4);
              B = Et;
            } else
              B = dt;
            B == 0 ? R.setCenter(q.getCenterX(), q.getCenterY() - q.getHeight() / 2 - K.DEFAULT_EDGE_LENGTH - R.getHeight() / 2) : B == 1 ? R.setCenter(q.getCenterX() + q.getWidth() / 2 + K.DEFAULT_EDGE_LENGTH + R.getWidth() / 2, q.getCenterY()) : B == 2 ? R.setCenter(q.getCenterX(), q.getCenterY() + q.getHeight() / 2 + K.DEFAULT_EDGE_LENGTH + R.getHeight() / 2) : R.setCenter(q.getCenterX() - q.getWidth() / 2 - K.DEFAULT_EDGE_LENGTH - R.getWidth() / 2, q.getCenterY());
          }, ce.exports = V;
        },
        function(ce, H, D) {
          var T = {};
          T.layoutBase = D(0), T.CoSEConstants = D(1), T.CoSEEdge = D(2), T.CoSEGraph = D(3), T.CoSEGraphManager = D(4), T.CoSELayout = D(6), T.CoSENode = D(5), ce.exports = T;
        }
      ]);
    });
  }(cs)), cs.exports;
}
(function(pe, he) {
  (function(ce, H) {
    pe.exports = H(jp());
  })(Ba, function(J) {
    return function(ce) {
      var H = {};
      function D(T) {
        if (H[T])
          return H[T].exports;
        var w = H[T] = {
          i: T,
          l: !1,
          exports: {}
        };
        return ce[T].call(w.exports, w, w.exports, D), w.l = !0, w.exports;
      }
      return D.m = ce, D.c = H, D.i = function(T) {
        return T;
      }, D.d = function(T, w, C) {
        D.o(T, w) || Object.defineProperty(T, w, {
          configurable: !1,
          enumerable: !0,
          get: C
        });
      }, D.n = function(T) {
        var w = T && T.__esModule ? function() {
          return T.default;
        } : function() {
          return T;
        };
        return D.d(w, "a", w), w;
      }, D.o = function(T, w) {
        return Object.prototype.hasOwnProperty.call(T, w);
      }, D.p = "", D(D.s = 1);
    }([
      function(ce, H) {
        ce.exports = J;
      },
      function(ce, H, D) {
        var T = D(0).layoutBase.LayoutConstants, w = D(0).layoutBase.FDLayoutConstants, C = D(0).CoSEConstants, $ = D(0).CoSELayout, _ = D(0).CoSENode, k = D(0).layoutBase.PointD, K = D(0).layoutBase.DimensionD, O = {
          ready: function() {
          },
          stop: function() {
          },
          quality: "default",
          nodeDimensionsIncludeLabels: !1,
          refresh: 30,
          fit: !0,
          padding: 10,
          randomize: !0,
          nodeRepulsion: 4500,
          idealEdgeLength: 50,
          edgeElasticity: 0.45,
          nestingFactor: 0.1,
          gravity: 0.25,
          numIter: 2500,
          tile: !0,
          animate: "end",
          animationDuration: 500,
          tilingPaddingVertical: 10,
          tilingPaddingHorizontal: 10,
          gravityRangeCompound: 1.5,
          gravityCompound: 1,
          gravityRange: 3.8,
          initialEnergyOnIncremental: 0.5
        };
        function U(ue, ee) {
          var fe = {};
          for (var V in ue)
            fe[V] = ue[V];
          for (var V in ee)
            fe[V] = ee[V];
          return fe;
        }
        function Y(ue) {
          this.options = U(O, ue), j(this.options);
        }
        var j = function(ee) {
          ee.nodeRepulsion != null && (C.DEFAULT_REPULSION_STRENGTH = w.DEFAULT_REPULSION_STRENGTH = ee.nodeRepulsion), ee.idealEdgeLength != null && (C.DEFAULT_EDGE_LENGTH = w.DEFAULT_EDGE_LENGTH = ee.idealEdgeLength), ee.edgeElasticity != null && (C.DEFAULT_SPRING_STRENGTH = w.DEFAULT_SPRING_STRENGTH = ee.edgeElasticity), ee.nestingFactor != null && (C.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR = w.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR = ee.nestingFactor), ee.gravity != null && (C.DEFAULT_GRAVITY_STRENGTH = w.DEFAULT_GRAVITY_STRENGTH = ee.gravity), ee.numIter != null && (C.MAX_ITERATIONS = w.MAX_ITERATIONS = ee.numIter), ee.gravityRange != null && (C.DEFAULT_GRAVITY_RANGE_FACTOR = w.DEFAULT_GRAVITY_RANGE_FACTOR = ee.gravityRange), ee.gravityCompound != null && (C.DEFAULT_COMPOUND_GRAVITY_STRENGTH = w.DEFAULT_COMPOUND_GRAVITY_STRENGTH = ee.gravityCompound), ee.gravityRangeCompound != null && (C.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR = w.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR = ee.gravityRangeCompound), ee.initialEnergyOnIncremental != null && (C.DEFAULT_COOLING_FACTOR_INCREMENTAL = w.DEFAULT_COOLING_FACTOR_INCREMENTAL = ee.initialEnergyOnIncremental), ee.quality == "draft" ? T.QUALITY = 0 : ee.quality == "proof" ? T.QUALITY = 2 : T.QUALITY = 1, C.NODE_DIMENSIONS_INCLUDE_LABELS = w.NODE_DIMENSIONS_INCLUDE_LABELS = T.NODE_DIMENSIONS_INCLUDE_LABELS = ee.nodeDimensionsIncludeLabels, C.DEFAULT_INCREMENTAL = w.DEFAULT_INCREMENTAL = T.DEFAULT_INCREMENTAL = !ee.randomize, C.ANIMATE = w.ANIMATE = T.ANIMATE = ee.animate, C.TILE = ee.tile, C.TILING_PADDING_VERTICAL = typeof ee.tilingPaddingVertical == "function" ? ee.tilingPaddingVertical.call() : ee.tilingPaddingVertical, C.TILING_PADDING_HORIZONTAL = typeof ee.tilingPaddingHorizontal == "function" ? ee.tilingPaddingHorizontal.call() : ee.tilingPaddingHorizontal;
        };
        Y.prototype.run = function() {
          var ue, ee, fe = this.options;
          this.idToLNode = {};
          var V = this.layout = new $(), te = this;
          te.stopped = !1, this.cy = this.options.cy, this.cy.trigger({ type: "layoutstart", layout: this });
          var L = V.newGraphManager();
          this.gm = L;
          var B = this.options.eles.nodes(), q = this.options.eles.edges();
          this.root = L.addRoot(), this.processChildrenList(this.root, this.getTopMostNodes(B), V);
          for (var R = 0; R < q.length; R++) {
            var de = q[R], we = this.idToLNode[de.data("source")], Oe = this.idToLNode[de.data("target")];
            if (we !== Oe && we.getEdgesBetween(Oe).length == 0) {
              var Ie = L.add(V.newEdge(), we, Oe);
              Ie.id = de.id();
            }
          }
          var We = function(Fe, ze) {
            typeof Fe == "number" && (Fe = ze);
            var je = Fe.data("id"), at = te.idToLNode[je];
            return {
              x: at.getRect().getCenterX(),
              y: at.getRect().getCenterY()
            };
          }, rt = function lt() {
            for (var Fe = function() {
              fe.fit && fe.cy.fit(fe.eles, fe.padding), ue || (ue = !0, te.cy.one("layoutready", fe.ready), te.cy.trigger({ type: "layoutready", layout: te }));
            }, ze = te.options.refresh, je, at = 0; at < ze && !je; at++)
              je = te.stopped || te.layout.tick();
            if (je) {
              V.checkLayoutSuccess() && !V.isSubLayout && V.doPostLayout(), V.tilingPostLayout && V.tilingPostLayout(), V.isLayoutFinished = !0, te.options.eles.nodes().positions(We), Fe(), te.cy.one("layoutstop", te.options.stop), te.cy.trigger({ type: "layoutstop", layout: te }), ee && cancelAnimationFrame(ee), ue = !1;
              return;
            }
            var ft = te.layout.getPositionsData();
            fe.eles.nodes().positions(function(dt, tt) {
              if (typeof dt == "number" && (dt = tt), !dt.isParent()) {
                for (var Et = dt.id(), pt = ft[Et], zt = dt; pt == null && (pt = ft[zt.data("parent")] || ft["DummyCompound_" + zt.data("parent")], ft[Et] = pt, zt = zt.parent()[0], zt != null); )
                  ;
                return pt != null ? {
                  x: pt.x,
                  y: pt.y
                } : {
                  x: dt.position("x"),
                  y: dt.position("y")
                };
              }
            }), Fe(), ee = requestAnimationFrame(lt);
          };
          return V.addListener("layoutstarted", function() {
            te.options.animate === "during" && (ee = requestAnimationFrame(rt));
          }), V.runLayout(), this.options.animate !== "during" && (te.options.eles.nodes().not(":parent").layoutPositions(te, te.options, We), ue = !1), this;
        }, Y.prototype.getTopMostNodes = function(ue) {
          for (var ee = {}, fe = 0; fe < ue.length; fe++)
            ee[ue[fe].id()] = !0;
          var V = ue.filter(function(te, L) {
            typeof te == "number" && (te = L);
            for (var B = te.parent()[0]; B != null; ) {
              if (ee[B.id()])
                return !1;
              B = B.parent()[0];
            }
            return !0;
          });
          return V;
        }, Y.prototype.processChildrenList = function(ue, ee, fe) {
          for (var V = ee.length, te = 0; te < V; te++) {
            var L = ee[te], B = L.children(), q, R = L.layoutDimensions({
              nodeDimensionsIncludeLabels: this.options.nodeDimensionsIncludeLabels
            });
            if (L.outerWidth() != null && L.outerHeight() != null ? q = ue.add(new _(fe.graphManager, new k(L.position("x") - R.w / 2, L.position("y") - R.h / 2), new K(parseFloat(R.w), parseFloat(R.h)))) : q = ue.add(new _(this.graphManager)), q.id = L.data("id"), q.paddingLeft = parseInt(L.css("padding")), q.paddingTop = parseInt(L.css("padding")), q.paddingRight = parseInt(L.css("padding")), q.paddingBottom = parseInt(L.css("padding")), this.options.nodeDimensionsIncludeLabels && L.isParent()) {
              var de = L.boundingBox({ includeLabels: !0, includeNodes: !1 }).w, we = L.boundingBox({ includeLabels: !0, includeNodes: !1 }).h, Oe = L.css("text-halign");
              q.labelWidth = de, q.labelHeight = we, q.labelPos = Oe;
            }
            if (this.idToLNode[L.data("id")] = q, isNaN(q.rect.x) && (q.rect.x = 0), isNaN(q.rect.y) && (q.rect.y = 0), B != null && B.length > 0) {
              var Ie;
              Ie = fe.getGraphManager().add(fe.newGraph(), q), this.processChildrenList(Ie, B, fe);
            }
          }
        }, Y.prototype.stop = function() {
          return this.stopped = !0, this;
        };
        var ae = function(ee) {
          ee("layout", "cose-bilkent", Y);
        };
        typeof cytoscape < "u" && ae(cytoscape), ce.exports = ae;
      }
    ]);
  });
})(dl);
const ey = /* @__PURE__ */ Xp(dl.exports);
var ds = function() {
  var pe = function(fe, V, te, L) {
    for (te = te || {}, L = fe.length; L--; te[fe[L]] = V)
      ;
    return te;
  }, he = [1, 4], J = [1, 13], ce = [1, 12], H = [1, 15], D = [1, 16], T = [1, 20], w = [1, 19], C = [6, 7, 8], $ = [1, 26], _ = [1, 24], k = [1, 25], K = [6, 7, 11], O = [1, 6, 13, 15, 16, 19, 22], U = [1, 33], Y = [1, 34], j = [1, 6, 7, 11, 13, 15, 16, 19, 22], ae = {
    trace: function() {
    },
    yy: {},
    symbols_: { error: 2, start: 3, mindMap: 4, spaceLines: 5, SPACELINE: 6, NL: 7, MINDMAP: 8, document: 9, stop: 10, EOF: 11, statement: 12, SPACELIST: 13, node: 14, ICON: 15, CLASS: 16, nodeWithId: 17, nodeWithoutId: 18, NODE_DSTART: 19, NODE_DESCR: 20, NODE_DEND: 21, NODE_ID: 22, $accept: 0, $end: 1 },
    terminals_: { 2: "error", 6: "SPACELINE", 7: "NL", 8: "MINDMAP", 11: "EOF", 13: "SPACELIST", 15: "ICON", 16: "CLASS", 19: "NODE_DSTART", 20: "NODE_DESCR", 21: "NODE_DEND", 22: "NODE_ID" },
    productions_: [0, [3, 1], [3, 2], [5, 1], [5, 2], [5, 2], [4, 2], [4, 3], [10, 1], [10, 1], [10, 1], [10, 2], [10, 2], [9, 3], [9, 2], [12, 2], [12, 2], [12, 2], [12, 1], [12, 1], [12, 1], [12, 1], [12, 1], [14, 1], [14, 1], [18, 3], [17, 1], [17, 4]],
    performAction: function(V, te, L, B, q, R, de) {
      var we = R.length - 1;
      switch (q) {
        case 6:
        case 7:
          return B;
        case 8:
          B.getLogger().trace("Stop NL ");
          break;
        case 9:
          B.getLogger().trace("Stop EOF ");
          break;
        case 11:
          B.getLogger().trace("Stop NL2 ");
          break;
        case 12:
          B.getLogger().trace("Stop EOF2 ");
          break;
        case 15:
          B.getLogger().info("Node: ", R[we].id), B.addNode(R[we - 1].length, R[we].id, R[we].descr, R[we].type);
          break;
        case 16:
          B.getLogger().trace("Icon: ", R[we]), B.decorateNode({ icon: R[we] });
          break;
        case 17:
        case 21:
          B.decorateNode({ class: R[we] });
          break;
        case 18:
          B.getLogger().trace("SPACELIST");
          break;
        case 19:
          B.getLogger().trace("Node: ", R[we].id), B.addNode(0, R[we].id, R[we].descr, R[we].type);
          break;
        case 20:
          B.decorateNode({ icon: R[we] });
          break;
        case 25:
          B.getLogger().trace("node found ..", R[we - 2]), this.$ = { id: R[we - 1], descr: R[we - 1], type: B.getType(R[we - 2], R[we]) };
          break;
        case 26:
          this.$ = { id: R[we], descr: R[we], type: B.nodeType.DEFAULT };
          break;
        case 27:
          B.getLogger().trace("node found ..", R[we - 3]), this.$ = { id: R[we - 3], descr: R[we - 1], type: B.getType(R[we - 2], R[we]) };
          break;
      }
    },
    table: [{ 3: 1, 4: 2, 5: 3, 6: [1, 5], 8: he }, { 1: [3] }, { 1: [2, 1] }, { 4: 6, 6: [1, 7], 7: [1, 8], 8: he }, { 6: J, 7: [1, 10], 9: 9, 12: 11, 13: ce, 14: 14, 15: H, 16: D, 17: 17, 18: 18, 19: T, 22: w }, pe(C, [2, 3]), { 1: [2, 2] }, pe(C, [2, 4]), pe(C, [2, 5]), { 1: [2, 6], 6: J, 12: 21, 13: ce, 14: 14, 15: H, 16: D, 17: 17, 18: 18, 19: T, 22: w }, { 6: J, 9: 22, 12: 11, 13: ce, 14: 14, 15: H, 16: D, 17: 17, 18: 18, 19: T, 22: w }, { 6: $, 7: _, 10: 23, 11: k }, pe(K, [2, 22], { 17: 17, 18: 18, 14: 27, 15: [1, 28], 16: [1, 29], 19: T, 22: w }), pe(K, [2, 18]), pe(K, [2, 19]), pe(K, [2, 20]), pe(K, [2, 21]), pe(K, [2, 23]), pe(K, [2, 24]), pe(K, [2, 26], { 19: [1, 30] }), { 20: [1, 31] }, { 6: $, 7: _, 10: 32, 11: k }, { 1: [2, 7], 6: J, 12: 21, 13: ce, 14: 14, 15: H, 16: D, 17: 17, 18: 18, 19: T, 22: w }, pe(O, [2, 14], { 7: U, 11: Y }), pe(j, [2, 8]), pe(j, [2, 9]), pe(j, [2, 10]), pe(K, [2, 15]), pe(K, [2, 16]), pe(K, [2, 17]), { 20: [1, 35] }, { 21: [1, 36] }, pe(O, [2, 13], { 7: U, 11: Y }), pe(j, [2, 11]), pe(j, [2, 12]), { 21: [1, 37] }, pe(K, [2, 25]), pe(K, [2, 27])],
    defaultActions: { 2: [2, 1], 6: [2, 2] },
    parseError: function(V, te) {
      if (te.recoverable)
        this.trace(V);
      else {
        var L = new Error(V);
        throw L.hash = te, L;
      }
    },
    parse: function(V) {
      var te = this, L = [0], B = [], q = [null], R = [], de = this.table, we = "", Oe = 0, Ie = 0, We = 2, rt = 1, lt = R.slice.call(arguments, 1), Fe = Object.create(this.lexer), ze = { yy: {} };
      for (var je in this.yy)
        Object.prototype.hasOwnProperty.call(this.yy, je) && (ze.yy[je] = this.yy[je]);
      Fe.setInput(V, ze.yy), ze.yy.lexer = Fe, ze.yy.parser = this, typeof Fe.yylloc > "u" && (Fe.yylloc = {});
      var at = Fe.yylloc;
      R.push(at);
      var ft = Fe.options && Fe.options.ranges;
      typeof ze.yy.parseError == "function" ? this.parseError = ze.yy.parseError : this.parseError = Object.getPrototypeOf(this).parseError;
      function dt() {
        var or;
        return or = B.pop() || Fe.lex() || rt, typeof or != "number" && (or instanceof Array && (B = or, or = B.pop()), or = te.symbols_[or] || or), or;
      }
      for (var tt, Et, pt, zt, tr = {}, yt, jt, bn, oa; ; ) {
        if (Et = L[L.length - 1], this.defaultActions[Et] ? pt = this.defaultActions[Et] : ((tt === null || typeof tt > "u") && (tt = dt()), pt = de[Et] && de[Et][tt]), typeof pt > "u" || !pt.length || !pt[0]) {
          var Fa = "";
          oa = [];
          for (yt in de[Et])
            this.terminals_[yt] && yt > We && oa.push("'" + this.terminals_[yt] + "'");
          Fe.showPosition ? Fa = "Parse error on line " + (Oe + 1) + `:
` + Fe.showPosition() + `
Expecting ` + oa.join(", ") + ", got '" + (this.terminals_[tt] || tt) + "'" : Fa = "Parse error on line " + (Oe + 1) + ": Unexpected " + (tt == rt ? "end of input" : "'" + (this.terminals_[tt] || tt) + "'"), this.parseError(Fa, {
            text: Fe.match,
            token: this.terminals_[tt] || tt,
            line: Fe.yylineno,
            loc: at,
            expected: oa
          });
        }
        if (pt[0] instanceof Array && pt.length > 1)
          throw new Error("Parse Error: multiple actions possible at state: " + Et + ", token: " + tt);
        switch (pt[0]) {
          case 1:
            L.push(tt), q.push(Fe.yytext), R.push(Fe.yylloc), L.push(pt[1]), tt = null, Ie = Fe.yyleng, we = Fe.yytext, Oe = Fe.yylineno, at = Fe.yylloc;
            break;
          case 2:
            if (jt = this.productions_[pt[1]][1], tr.$ = q[q.length - jt], tr._$ = {
              first_line: R[R.length - (jt || 1)].first_line,
              last_line: R[R.length - 1].last_line,
              first_column: R[R.length - (jt || 1)].first_column,
              last_column: R[R.length - 1].last_column
            }, ft && (tr._$.range = [
              R[R.length - (jt || 1)].range[0],
              R[R.length - 1].range[1]
            ]), zt = this.performAction.apply(tr, [
              we,
              Ie,
              Oe,
              ze.yy,
              pt[1],
              q,
              R
            ].concat(lt)), typeof zt < "u")
              return zt;
            jt && (L = L.slice(0, -1 * jt * 2), q = q.slice(0, -1 * jt), R = R.slice(0, -1 * jt)), L.push(this.productions_[pt[1]][0]), q.push(tr.$), R.push(tr._$), bn = de[L[L.length - 2]][L[L.length - 1]], L.push(bn);
            break;
          case 3:
            return !0;
        }
      }
      return !0;
    }
  }, ue = function() {
    var fe = {
      EOF: 1,
      parseError: function(te, L) {
        if (this.yy.parser)
          this.yy.parser.parseError(te, L);
        else
          throw new Error(te);
      },
      setInput: function(V, te) {
        return this.yy = te || this.yy || {}, this._input = V, this._more = this._backtrack = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
          first_line: 1,
          first_column: 0,
          last_line: 1,
          last_column: 0
        }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
      },
      input: function() {
        var V = this._input[0];
        this.yytext += V, this.yyleng++, this.offset++, this.match += V, this.matched += V;
        var te = V.match(/(?:\r\n?|\n).*/g);
        return te ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), V;
      },
      unput: function(V) {
        var te = V.length, L = V.split(/(?:\r\n?|\n)/g);
        this._input = V + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - te), this.offset -= te;
        var B = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), L.length - 1 && (this.yylineno -= L.length - 1);
        var q = this.yylloc.range;
        return this.yylloc = {
          first_line: this.yylloc.first_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.first_column,
          last_column: L ? (L.length === B.length ? this.yylloc.first_column : 0) + B[B.length - L.length].length - L[0].length : this.yylloc.first_column - te
        }, this.options.ranges && (this.yylloc.range = [q[0], q[0] + this.yyleng - te]), this.yyleng = this.yytext.length, this;
      },
      more: function() {
        return this._more = !0, this;
      },
      reject: function() {
        if (this.options.backtrack_lexer)
          this._backtrack = !0;
        else
          return this.parseError("Lexical error on line " + (this.yylineno + 1) + `. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
` + this.showPosition(), {
            text: "",
            token: null,
            line: this.yylineno
          });
        return this;
      },
      less: function(V) {
        this.unput(this.match.slice(V));
      },
      pastInput: function() {
        var V = this.matched.substr(0, this.matched.length - this.match.length);
        return (V.length > 20 ? "..." : "") + V.substr(-20).replace(/\n/g, "");
      },
      upcomingInput: function() {
        var V = this.match;
        return V.length < 20 && (V += this._input.substr(0, 20 - V.length)), (V.substr(0, 20) + (V.length > 20 ? "..." : "")).replace(/\n/g, "");
      },
      showPosition: function() {
        var V = this.pastInput(), te = new Array(V.length + 1).join("-");
        return V + this.upcomingInput() + `
` + te + "^";
      },
      test_match: function(V, te) {
        var L, B, q;
        if (this.options.backtrack_lexer && (q = {
          yylineno: this.yylineno,
          yylloc: {
            first_line: this.yylloc.first_line,
            last_line: this.last_line,
            first_column: this.yylloc.first_column,
            last_column: this.yylloc.last_column
          },
          yytext: this.yytext,
          match: this.match,
          matches: this.matches,
          matched: this.matched,
          yyleng: this.yyleng,
          offset: this.offset,
          _more: this._more,
          _input: this._input,
          yy: this.yy,
          conditionStack: this.conditionStack.slice(0),
          done: this.done
        }, this.options.ranges && (q.yylloc.range = this.yylloc.range.slice(0))), B = V[0].match(/(?:\r\n?|\n).*/g), B && (this.yylineno += B.length), this.yylloc = {
          first_line: this.yylloc.last_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.last_column,
          last_column: B ? B[B.length - 1].length - B[B.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + V[0].length
        }, this.yytext += V[0], this.match += V[0], this.matches = V, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = !1, this._backtrack = !1, this._input = this._input.slice(V[0].length), this.matched += V[0], L = this.performAction.call(this, this.yy, this, te, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1), L)
          return L;
        if (this._backtrack) {
          for (var R in q)
            this[R] = q[R];
          return !1;
        }
        return !1;
      },
      next: function() {
        if (this.done)
          return this.EOF;
        this._input || (this.done = !0);
        var V, te, L, B;
        this._more || (this.yytext = "", this.match = "");
        for (var q = this._currentRules(), R = 0; R < q.length; R++)
          if (L = this._input.match(this.rules[q[R]]), L && (!te || L[0].length > te[0].length)) {
            if (te = L, B = R, this.options.backtrack_lexer) {
              if (V = this.test_match(L, q[R]), V !== !1)
                return V;
              if (this._backtrack) {
                te = !1;
                continue;
              } else
                return !1;
            } else if (!this.options.flex)
              break;
          }
        return te ? (V = this.test_match(te, q[B]), V !== !1 ? V : !1) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
` + this.showPosition(), {
          text: "",
          token: null,
          line: this.yylineno
        });
      },
      lex: function() {
        var te = this.next();
        return te || this.lex();
      },
      begin: function(te) {
        this.conditionStack.push(te);
      },
      popState: function() {
        var te = this.conditionStack.length - 1;
        return te > 0 ? this.conditionStack.pop() : this.conditionStack[0];
      },
      _currentRules: function() {
        return this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1] ? this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules : this.conditions.INITIAL.rules;
      },
      topState: function(te) {
        return te = this.conditionStack.length - 1 - Math.abs(te || 0), te >= 0 ? this.conditionStack[te] : "INITIAL";
      },
      pushState: function(te) {
        this.begin(te);
      },
      stateStackSize: function() {
        return this.conditionStack.length;
      },
      options: { "case-insensitive": !0 },
      performAction: function(te, L, B, q) {
        switch (B) {
          case 0:
            te.getLogger().trace("Found comment", L.yytext);
            break;
          case 1:
            return 8;
          case 2:
            this.begin("CLASS");
            break;
          case 3:
            return this.popState(), 16;
          case 4:
            this.popState();
            break;
          case 5:
            te.getLogger().trace("Begin icon"), this.begin("ICON");
            break;
          case 6:
            return te.getLogger().trace("SPACELINE"), 6;
          case 7:
            return 7;
          case 8:
            return 15;
          case 9:
            te.getLogger().trace("end icon"), this.popState();
            break;
          case 10:
            return te.getLogger().trace("Exploding node"), this.begin("NODE"), 19;
          case 11:
            return te.getLogger().trace("Cloud"), this.begin("NODE"), 19;
          case 12:
            return te.getLogger().trace("Explosion Bang"), this.begin("NODE"), 19;
          case 13:
            return te.getLogger().trace("Cloud Bang"), this.begin("NODE"), 19;
          case 14:
            return this.begin("NODE"), 19;
          case 15:
            return this.begin("NODE"), 19;
          case 16:
            return this.begin("NODE"), 19;
          case 17:
            return this.begin("NODE"), 19;
          case 18:
            return 13;
          case 19:
            return 22;
          case 20:
            return 11;
          case 21:
            te.getLogger().trace("Starting NSTR"), this.begin("NSTR");
            break;
          case 22:
            return te.getLogger().trace("description:", L.yytext), "NODE_DESCR";
          case 23:
            this.popState();
            break;
          case 24:
            return this.popState(), te.getLogger().trace("node end ))"), "NODE_DEND";
          case 25:
            return this.popState(), te.getLogger().trace("node end )"), "NODE_DEND";
          case 26:
            return this.popState(), te.getLogger().trace("node end ...", L.yytext), "NODE_DEND";
          case 27:
            return this.popState(), te.getLogger().trace("node end (("), "NODE_DEND";
          case 28:
            return this.popState(), te.getLogger().trace("node end (-"), "NODE_DEND";
          case 29:
            return this.popState(), te.getLogger().trace("node end (-"), "NODE_DEND";
          case 30:
            return this.popState(), te.getLogger().trace("node end (("), "NODE_DEND";
          case 31:
            return this.popState(), te.getLogger().trace("node end (("), "NODE_DEND";
          case 32:
            return te.getLogger().trace("Long description:", L.yytext), 20;
          case 33:
            return te.getLogger().trace("Long description:", L.yytext), 20;
        }
      },
      rules: [/^(?:\s*%%.*)/i, /^(?:mindmap\b)/i, /^(?::::)/i, /^(?:.+)/i, /^(?:\n)/i, /^(?:::icon\()/i, /^(?:[\s]+[\n])/i, /^(?:[\n]+)/i, /^(?:[^\)]+)/i, /^(?:\))/i, /^(?:-\))/i, /^(?:\(-)/i, /^(?:\)\))/i, /^(?:\))/i, /^(?:\(\()/i, /^(?:\{\{)/i, /^(?:\()/i, /^(?:\[)/i, /^(?:[\s]+)/i, /^(?:[^\(\[\n\-\)\{\}]+)/i, /^(?:$)/i, /^(?:["])/i, /^(?:[^"]+)/i, /^(?:["])/i, /^(?:[\)]\))/i, /^(?:[\)])/i, /^(?:[\]])/i, /^(?:\}\})/i, /^(?:\(-)/i, /^(?:-\))/i, /^(?:\(\()/i, /^(?:\()/i, /^(?:[^\)\]\(\}]+)/i, /^(?:.+(?!\(\())/i],
      conditions: { CLASS: { rules: [3, 4], inclusive: !1 }, ICON: { rules: [8, 9], inclusive: !1 }, NSTR: { rules: [22, 23], inclusive: !1 }, NODE: { rules: [21, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33], inclusive: !1 }, INITIAL: { rules: [0, 1, 2, 5, 6, 7, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], inclusive: !0 } }
    };
    return fe;
  }();
  ae.lexer = ue;
  function ee() {
    this.yy = {};
  }
  return ee.prototype = ae, ae.Parser = ee, new ee();
}();
ds.parser = ds;
const ty = ds, mn = (pe) => qp(pe, yn());
let sr = [], gl = 0, gs = {};
const ry = () => {
  sr = [], gl = 0, gs = {};
}, ay = function(pe) {
  for (let he = sr.length - 1; he >= 0; he--)
    if (sr[he].level < pe)
      return sr[he];
  return null;
}, ny = () => sr.length > 0 ? sr[0] : null, iy = (pe, he, J, ce) => {
  ia.info("addNode", pe, he, J, ce);
  const H = yn(), D = {
    id: gl++,
    nodeId: mn(he),
    level: pe,
    descr: mn(J),
    type: ce,
    children: [],
    width: yn().mindmap.maxNodeWidth
  };
  switch (D.type) {
    case bt.ROUNDED_RECT:
      D.padding = 2 * H.mindmap.padding;
      break;
    case bt.RECT:
      D.padding = 2 * H.mindmap.padding;
      break;
    case bt.HEXAGON:
      D.padding = 2 * H.mindmap.padding;
      break;
    default:
      D.padding = H.mindmap.padding;
  }
  const T = ay(pe);
  if (T)
    T.children.push(D), sr.push(D);
  else if (sr.length === 0)
    sr.push(D);
  else {
    let w = new Error(
      'There can be only one root. No parent could be found for ("' + D.descr + '")'
    );
    throw w.hash = {
      text: "branch " + name,
      token: "branch " + name,
      line: "1",
      loc: { first_line: 1, last_line: 1, first_column: 1, last_column: 1 },
      expected: ['"checkout ' + name + '"']
    }, w;
  }
}, bt = {
  DEFAULT: 0,
  NO_BORDER: 0,
  ROUNDED_RECT: 1,
  RECT: 2,
  CIRCLE: 3,
  CLOUD: 4,
  BANG: 5,
  HEXAGON: 6
}, sy = (pe, he) => {
  switch (ia.debug("In get type", pe, he), pe) {
    case "[":
      return bt.RECT;
    case "(":
      return he === ")" ? bt.ROUNDED_RECT : bt.CLOUD;
    case "((":
      return bt.CIRCLE;
    case ")":
      return bt.CLOUD;
    case "))":
      return bt.BANG;
    case "{{":
      return bt.HEXAGON;
    default:
      return bt.DEFAULT;
  }
}, pl = (pe, he) => {
  gs[pe] = he;
}, oy = (pe) => {
  const he = sr[sr.length - 1];
  pe && pe.icon && (he.icon = mn(pe.icon)), pe && pe.class && (he.class = mn(pe.class));
}, sa = (pe) => {
  switch (pe) {
    case bt.DEFAULT:
      return "no-border";
    case bt.RECT:
      return "rect";
    case bt.ROUNDED_RECT:
      return "rounded-rect";
    case bt.CIRCLE:
      return "circle";
    case bt.CLOUD:
      return "cloud";
    case bt.BANG:
      return "bang";
    case bt.HEXAGON:
      return "hexgon";
    default:
      return "no-border";
  }
};
let yl;
const uy = (pe) => {
  yl = pe;
}, ly = () => ia, fy = (pe) => sr[pe], ps = (pe) => gs[pe], hy = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  addNode: iy,
  clear: ry,
  decorateNode: oy,
  getElementById: ps,
  getLogger: ly,
  getMindmap: ny,
  getNodeById: fy,
  getType: sy,
  nodeType: bt,
  get parseError() {
    return yl;
  },
  sanitizeText: mn,
  setElementForId: pl,
  setErrorHandler: uy,
  type2Str: sa
}, Symbol.toStringTag, { value: "Module" })), ml = 12;
function cy(pe, he) {
  pe.each(function() {
    var J = pn(this), ce = J.text().split(/(\s+|<br>)/).reverse(), H, D = [], T = 1.1, w = J.attr("y"), C = parseFloat(J.attr("dy")), $ = J.text(null).append("tspan").attr("x", 0).attr("y", w).attr("dy", C + "em");
    for (let _ = 0; _ < ce.length; _++)
      H = ce[ce.length - 1 - _], D.push(H), $.text(D.join(" ").trim()), ($.node().getComputedTextLength() > he || H === "<br>") && (D.pop(), $.text(D.join(" ").trim()), H === "<br>" ? D = [""] : D = [H], $ = J.append("tspan").attr("x", 0).attr("y", w).attr("dy", T + "em").text(H));
  });
}
const vy = function(pe, he, J) {
  pe.append("path").attr("id", "node-" + he.id).attr("class", "node-bkg node-" + sa(he.type)).attr(
    "d",
    `M0 ${he.height - 5} v${-he.height + 2 * 5} q0,-5 5,-5 h${he.width - 2 * 5} q5,0 5,5 v${he.height - 5} H0 Z`
  ), pe.append("line").attr("class", "node-line-" + J).attr("x1", 0).attr("y1", he.height).attr("x2", he.width).attr("y2", he.height);
}, dy = function(pe, he) {
  pe.append("rect").attr("id", "node-" + he.id).attr("class", "node-bkg node-" + sa(he.type)).attr("height", he.height).attr("width", he.width);
}, gy = function(pe, he) {
  const J = he.width, ce = he.height, H = 0.15 * J, D = 0.25 * J, T = 0.35 * J, w = 0.2 * J;
  pe.append("path").attr("id", "node-" + he.id).attr("class", "node-bkg node-" + sa(he.type)).attr(
    "d",
    `M0 0 a${H},${H} 0 0,1 ${J * 0.25},${-1 * J * 0.1}
      a${T},${T} 1 0,1 ${J * 0.4},${-1 * J * 0.1}
      a${D},${D} 1 0,1 ${J * 0.35},${1 * J * 0.2}

      a${H},${H} 1 0,1 ${J * 0.15},${1 * ce * 0.35}
      a${w},${w} 1 0,1 ${-1 * J * 0.15},${1 * ce * 0.65}

      a${D},${H} 1 0,1 ${-1 * J * 0.25},${J * 0.15}
      a${T},${T} 1 0,1 ${-1 * J * 0.5},${0}
      a${H},${H} 1 0,1 ${-1 * J * 0.25},${-1 * J * 0.15}

      a${H},${H} 1 0,1 ${-1 * J * 0.1},${-1 * ce * 0.35}
      a${w},${w} 1 0,1 ${J * 0.1},${-1 * ce * 0.65}

    H0 V0 Z`
  );
}, py = function(pe, he) {
  const J = he.width, ce = he.height, H = 0.15 * J;
  pe.append("path").attr("id", "node-" + he.id).attr("class", "node-bkg node-" + sa(he.type)).attr(
    "d",
    `M0 0 a${H},${H} 1 0,0 ${J * 0.25},${-1 * ce * 0.1}
      a${H},${H} 1 0,0 ${J * 0.25},${0}
      a${H},${H} 1 0,0 ${J * 0.25},${0}
      a${H},${H} 1 0,0 ${J * 0.25},${1 * ce * 0.1}

      a${H},${H} 1 0,0 ${J * 0.15},${1 * ce * 0.33}
      a${H * 0.8},${H * 0.8} 1 0,0 ${0},${1 * ce * 0.34}
      a${H},${H} 1 0,0 ${-1 * J * 0.15},${1 * ce * 0.33}

      a${H},${H} 1 0,0 ${-1 * J * 0.25},${ce * 0.15}
      a${H},${H} 1 0,0 ${-1 * J * 0.25},${0}
      a${H},${H} 1 0,0 ${-1 * J * 0.25},${0}
      a${H},${H} 1 0,0 ${-1 * J * 0.25},${-1 * ce * 0.15}

      a${H},${H} 1 0,0 ${-1 * J * 0.1},${-1 * ce * 0.33}
      a${H * 0.8},${H * 0.8} 1 0,0 ${0},${-1 * ce * 0.34}
      a${H},${H} 1 0,0 ${J * 0.1},${-1 * ce * 0.33}

    H0 V0 Z`
  );
}, yy = function(pe, he) {
  pe.append("circle").attr("id", "node-" + he.id).attr("class", "node-bkg node-" + sa(he.type)).attr("r", he.width / 2);
};
function my(pe, he, J, ce, H) {
  return pe.insert("polygon", ":first-child").attr(
    "points",
    ce.map(function(D) {
      return D.x + "," + D.y;
    }).join(" ")
  ).attr("transform", "translate(" + (H.width - he) / 2 + ", " + J + ")");
}
const by = function(pe, he) {
  const J = he.height, H = J / 4, D = he.width - he.padding + 2 * H, T = [
    { x: H, y: 0 },
    { x: D - H, y: 0 },
    { x: D, y: -J / 2 },
    { x: D - H, y: -J },
    { x: H, y: -J },
    { x: 0, y: -J / 2 }
  ];
  my(pe, D, J, T, he);
}, Ey = function(pe, he) {
  pe.append("rect").attr("id", "node-" + he.id).attr("class", "node-bkg node-" + sa(he.type)).attr("height", he.height).attr("rx", he.padding).attr("ry", he.padding).attr("width", he.width);
}, wy = function(pe, he, J, ce) {
  const H = J % (ml - 1), D = pe.append("g");
  he.section = H;
  let T = "section-" + H;
  H < 0 && (T += " section-root"), D.attr("class", (he.class ? he.class + " " : "") + "mindmap-node " + T);
  const w = D.append("g"), C = D.append("g"), _ = C.append("text").text(he.descr).attr("dy", "1em").attr("alignment-baseline", "middle").attr("dominant-baseline", "middle").attr("text-anchor", "middle").call(cy, he.width).node().getBBox(), k = ce.fontSize.replace ? ce.fontSize.replace("px", "") : ce.fontSize;
  if (he.height = _.height + k * 1.1 * 0.5 + he.padding, he.width = _.width + 2 * he.padding, he.icon)
    if (he.type === bt.CIRCLE)
      he.height += 50, he.width += 50, D.append("foreignObject").attr("height", "50px").attr("width", he.width).attr("style", "text-align: center;").append("div").attr("class", "icon-container").append("i").attr("class", "node-icon-" + H + " " + he.icon), C.attr(
        "transform",
        "translate(" + he.width / 2 + ", " + (he.height / 2 - 1.5 * he.padding) + ")"
      );
    else {
      he.width += 50;
      const K = he.height;
      he.height = Math.max(K, 60);
      const O = Math.abs(he.height - K);
      D.append("foreignObject").attr("width", "60px").attr("height", he.height).attr("style", "text-align: center;margin-top:" + O / 2 + "px;").append("div").attr("class", "icon-container").append("i").attr("class", "node-icon-" + H + " " + he.icon), C.attr(
        "transform",
        "translate(" + (25 + he.width / 2) + ", " + (O / 2 + he.padding / 2) + ")"
      );
    }
  else
    C.attr("transform", "translate(" + he.width / 2 + ", " + he.padding / 2 + ")");
  switch (he.type) {
    case bt.DEFAULT:
      vy(w, he, H);
      break;
    case bt.ROUNDED_RECT:
      Ey(w, he);
      break;
    case bt.RECT:
      dy(w, he);
      break;
    case bt.CIRCLE:
      w.attr("transform", "translate(" + he.width / 2 + ", " + +he.height / 2 + ")"), yy(w, he);
      break;
    case bt.CLOUD:
      gy(w, he);
      break;
    case bt.BANG:
      py(w, he);
      break;
    case bt.HEXAGON:
      by(w, he);
      break;
  }
  return pl(he.id, D), he.height;
}, xy = function(he, J, ce, H, D) {
  const T = D % (ml - 1), w = ce.x + ce.width / 2, C = ce.y + ce.height / 2, $ = J.x + J.width / 2, _ = J.y + J.height / 2, k = $ > w ? w + Math.abs(w - $) / 2 : w - Math.abs(w - $) / 2, K = _ > C ? C + Math.abs(C - _) / 2 : C - Math.abs(C - _) / 2, O = $ > w ? Math.abs(w - k) / 2 + w : -Math.abs(w - k) / 2 + w, U = _ > C ? Math.abs(C - K) / 2 + C : -Math.abs(C - K) / 2 + C;
  he.append("path").attr(
    "d",
    ce.direction === "TB" || ce.direction === "BT" ? `M${w},${C} Q${w},${U} ${k},${K} T${$},${_}` : `M${w},${C} Q${O},${C} ${k},${K} T${$},${_}`
  ).attr("class", "edge section-edge-" + T + " edge-depth-" + H);
}, Ty = function(pe) {
  const he = ps(pe.id), J = pe.x || 0, ce = pe.y || 0;
  he.attr("transform", "translate(" + J + "," + ce + ")");
}, bl = { drawNode: wy, positionNode: Ty, drawEdge: xy };
vl.use(ey);
function El(pe, he, J, ce) {
  bl.drawNode(pe, he, J, ce), he.children && he.children.forEach((H, D) => {
    El(pe, H, J < 0 ? D : J, ce);
  });
}
function Cy(pe, he) {
  he.edges().map((J, ce) => {
    const H = J.data();
    if (J[0]._private.bodyBounds) {
      const D = J[0]._private.rscratch;
      ia.trace("Edge: ", ce, H), pe.insert("path").attr(
        "d",
        `M ${D.startX},${D.startY} L ${D.midX},${D.midY} L${D.endX},${D.endY} `
      ).attr("class", "edge section-edge-" + H.section + " edge-depth-" + H.depth);
    }
  });
}
function wl(pe, he, J, ce) {
  he.add({
    group: "nodes",
    data: {
      id: pe.id,
      labelText: pe.descr,
      height: pe.height,
      width: pe.width,
      level: ce,
      nodeId: pe.id,
      padding: pe.padding,
      type: pe.type
    },
    position: {
      x: pe.x,
      y: pe.y
    }
  }), pe.children && pe.children.forEach((H) => {
    wl(H, he, J, ce + 1), he.add({
      group: "edges",
      data: {
        id: `${pe.id}_${H.id}`,
        source: pe.id,
        target: H.id,
        depth: ce,
        section: H.section
      }
    });
  });
}
function Dy(pe, he) {
  return new Promise((J) => {
    const ce = pn("body").append("div").attr("id", "cy").attr("style", "display:none"), H = vl({
      container: document.getElementById("cy"),
      style: [
        {
          selector: "edge",
          style: {
            "curve-style": "bezier"
          }
        }
      ]
    });
    ce.remove(), wl(pe, H, he, 0), H.nodes().forEach(function(D) {
      D.layoutDimensions = () => {
        const T = D.data();
        return { w: T.width, h: T.height };
      };
    }), H.layout({
      name: "cose-bilkent",
      quality: "proof",
      styleEnabled: !1,
      animate: !1
    }).run(), H.ready((D) => {
      ia.info("Ready", D), J(H);
    });
  });
}
function Sy(pe) {
  pe.nodes().map((he, J) => {
    const ce = he.data();
    ce.x = he.position().x, ce.y = he.position().y, bl.positionNode(ce);
    const H = ps(ce.nodeId);
    ia.info("Id:", J, "Position: (", he.position().x, ", ", he.position().y, ")", ce), H.attr(
      "transform",
      `translate(${he.position().x - ce.width / 2}, ${he.position().y - ce.height / 2})`
    ), H.attr("attr", `apa-${J})`);
  });
}
const Ly = async (pe, he, J, ce) => {
  const H = yn();
  ce.db.clear(), ce.parser.parse(pe), ia.debug(`Renering info diagram
` + pe);
  const D = yn().securityLevel;
  let T;
  D === "sandbox" && (T = pn("#i" + he));
  const C = (D === "sandbox" ? pn(T.nodes()[0].contentDocument.body) : pn("body")).select("#" + he);
  C.append("g");
  const $ = ce.db.getMindmap(), _ = C.append("g");
  _.attr("class", "mindmap-edges");
  const k = C.append("g");
  k.attr("class", "mindmap-nodes"), El(k, $, -1, H);
  const K = await Dy($, H);
  Cy(_, K), Sy(K), Wp(void 0, C, H.mindmap.padding, H.mindmap.useMaxWidth);
}, Ay = {
  draw: Ly
}, Oy = (pe) => {
  let he = "";
  for (let J = 0; J < pe.THEME_COLOR_LIMIT; J++)
    pe["lineColor" + J] = pe["lineColor" + J] || pe["cScaleInv" + J], Qp(pe["lineColor" + J]) ? pe["lineColor" + J] = Kp(pe["lineColor" + J], 20) : pe["lineColor" + J] = Zp(pe["lineColor" + J], 20);
  for (let J = 0; J < pe.THEME_COLOR_LIMIT; J++) {
    const ce = "" + (17 - 3 * J);
    he += `
    .section-${J - 1} rect, .section-${J - 1} path, .section-${J - 1} circle, .section-${J - 1} polygon, .section-${J - 1} path  {
      fill: ${pe["cScale" + J]};
    }
    .section-${J - 1} text {
     fill: ${pe["cScaleLabel" + J]};
    }
    .node-icon-${J - 1} {
      font-size: 40px;
      color: ${pe["cScaleLabel" + J]};
    }
    .section-edge-${J - 1}{
      stroke: ${pe["cScale" + J]};
    }
    .edge-depth-${J - 1}{
      stroke-width: ${ce};
    }
    .section-${J - 1} line {
      stroke: ${pe["cScaleInv" + J]} ;
      stroke-width: 3;
    }

    .disabled, .disabled circle, .disabled text {
      fill: lightgray;
    }
    .disabled text {
      fill: #efefef;
    }
    `;
  }
  return he;
}, My = (pe) => `
  .edge {
    stroke-width: 3;
  }
  ${Oy(pe)}
  .section-root rect, .section-root path, .section-root circle, .section-root polygon  {
    fill: ${pe.git0};
  }
  .section-root text {
    fill: ${pe.gitBranchLabel0};
  }
  .icon-container {
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .edge {
    fill: none;
  }
`, Ny = My, ky = {
  db: hy,
  renderer: Ay,
  parser: ty,
  styles: Ny
};
export {
  ky as diagram
};
