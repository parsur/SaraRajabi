/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/assets/js/tinymce.js":
/*!****************************************!*\
  !*** ./resources/assets/js/tinymce.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function () {
  "use strict";

  var r = function r(e) {
    if (null === e) return "null";
    if (e === undefined) return "undefined";

    var t = _typeof(e);

    return "object" == t && (Array.prototype.isPrototypeOf(e) || e.constructor && "Array" === e.constructor.name) ? "array" : "object" == t && (String.prototype.isPrototypeOf(e) || e.constructor && "String" === e.constructor.name) ? "string" : t;
  },
      t = function t(e) {
    return {
      eq: e
    };
  },
      s = t(function (e, t) {
    return e === t;
  }),
      i = function i(o) {
    return t(function (e, t) {
      if (e.length !== t.length) return !1;

      for (var n = e.length, r = 0; r < n; r++) {
        if (!o.eq(e[r], t[r])) return !1;
      }

      return !0;
    });
  },
      c = function c(e, r) {
    return n = i(e), o = function o(e) {
      return t = e, n = r, Array.prototype.slice.call(t).sort(n);
      var t, n;
    }, t(function (e, t) {
      return n.eq(o(e), o(t));
    });
    var n, o;
  },
      u = function u(_u2) {
    return t(function (e, t) {
      var n = Object.keys(e),
          r = Object.keys(t);
      if (!c(s).eq(n, r)) return !1;

      for (var o = n.length, i = 0; i < o; i++) {
        var a = n[i];
        if (!_u2.eq(e[a], t[a])) return !1;
      }

      return !0;
    });
  },
      l = t(function (e, t) {
    if (e === t) return !0;
    var n = r(e);
    return n === r(t) && (-1 !== ["undefined", "boolean", "number", "string", "function", "xml", "null"].indexOf(n) ? e === t : "array" === n ? i(l).eq(e, t) : "object" === n && u(l).eq(e, t));
  }),
      V = function V() {},
      a = function a(n, r) {
    return function () {
      for (var e = [], t = 0; t < arguments.length; t++) {
        e[t] = arguments[t];
      }

      return n(r.apply(null, e));
    };
  },
      E = function E(e) {
    return function () {
      return e;
    };
  },
      o = function o(e) {
    return e;
  };

  function N(r) {
    for (var o = [], e = 1; e < arguments.length; e++) {
      o[e - 1] = arguments[e];
    }

    return function () {
      for (var e = [], t = 0; t < arguments.length; t++) {
        e[t] = arguments[t];
      }

      var n = o.concat(e);
      return r.apply(null, n);
    };
  }

  var e,
      n,
      f,
      d = function d(t) {
    return function (e) {
      return !t(e);
    };
  },
      m = function m(e) {
    return function () {
      throw new Error(e);
    };
  },
      b = function b(e) {
    e();
  },
      C = E(!1),
      k = E(!0),
      p = function p() {
    return g;
  },
      g = (e = function e(_e2) {
    return _e2.isNone();
  }, {
    fold: function fold(e, t) {
      return e();
    },
    is: C,
    isSome: C,
    isNone: k,
    getOr: f = function f(e) {
      return e;
    },
    getOrThunk: n = function n(e) {
      return e();
    },
    getOrDie: function getOrDie(e) {
      throw new Error(e || "error: getOrDie called on none.");
    },
    getOrNull: E(null),
    getOrUndefined: E(undefined),
    or: f,
    orThunk: n,
    map: p,
    each: V,
    bind: p,
    exists: C,
    forall: k,
    filter: p,
    equals: e,
    equals_: e,
    toArray: function toArray() {
      return [];
    },
    toString: E("none()")
  }),
      h = function h(n) {
    var e = E(n),
        t = function t() {
      return o;
    },
        r = function r(e) {
      return e(n);
    },
        o = {
      fold: function fold(e, t) {
        return t(n);
      },
      is: function is(e) {
        return n === e;
      },
      isSome: k,
      isNone: C,
      getOr: e,
      getOrThunk: e,
      getOrDie: e,
      getOrNull: e,
      getOrUndefined: e,
      or: t,
      orThunk: t,
      map: function map(e) {
        return h(e(n));
      },
      each: function each(e) {
        e(n);
      },
      bind: r,
      exists: r,
      forall: r,
      filter: function filter(e) {
        return e(n) ? o : g;
      },
      toArray: function toArray() {
        return [n];
      },
      toString: function toString() {
        return "some(" + n + ")";
      },
      equals: function equals(e) {
        return e.is(n);
      },
      equals_: function equals_(e, t) {
        return e.fold(C, function (e) {
          return t(n, e);
        });
      }
    };

    return o;
  },
      U = {
    some: h,
    none: p,
    from: function from(e) {
      return null === e || e === undefined ? g : h(e);
    }
  },
      v = function v(r) {
    return function (e) {
      return n = _typeof(t = e), (null === t ? "null" : "object" == n && (Array.prototype.isPrototypeOf(t) || t.constructor && "Array" === t.constructor.name) ? "array" : "object" == n && (String.prototype.isPrototypeOf(t) || t.constructor && "String" === t.constructor.name) ? "string" : n) === r;
      var t, n;
    };
  },
      y = function y(t) {
    return function (e) {
      return _typeof(e) === t;
    };
  },
      w = function w(t) {
    return function (e) {
      return t === e;
    };
  },
      q = v("string"),
      _ = v("object"),
      S = v("array"),
      x = w(null),
      A = y("boolean"),
      R = w(undefined),
      $ = function $(e) {
    return null === e || e === undefined;
  },
      D = function D(e) {
    return !$(e);
  },
      T = y("function"),
      O = y("number"),
      B = Array.prototype.slice,
      P = Array.prototype.indexOf,
      L = Array.prototype.push,
      I = function I(e, t) {
    return P.call(e, t);
  },
      M = function M(e, t) {
    return -1 < I(e, t);
  },
      F = function F(e, t) {
    for (var n = 0, r = e.length; n < r; n++) {
      if (t(e[n], n)) return !0;
    }

    return !1;
  },
      z = function z(e, t) {
    for (var n = e.length, r = new Array(n), o = 0; o < n; o++) {
      var i = e[o];
      r[o] = t(i, o);
    }

    return r;
  },
      W = function W(e, t) {
    for (var n = 0, r = e.length; n < r; n++) {
      t(e[n], n);
    }
  },
      j = function j(e, t) {
    for (var n = e.length - 1; 0 <= n; n--) {
      t(e[n], n);
    }
  },
      H = function H(e, t) {
    for (var n = [], r = 0, o = e.length; r < o; r++) {
      var i = e[r];
      t(i, r) && n.push(i);
    }

    return n;
  },
      K = function K(e, t, n) {
    return j(e, function (e) {
      n = t(n, e);
    }), n;
  },
      X = function X(e, t, n) {
    return W(e, function (e) {
      n = t(n, e);
    }), n;
  },
      Y = function Y(e, t) {
    return function (e, t, n) {
      for (var r = 0, o = e.length; r < o; r++) {
        var i = e[r];
        if (t(i, r)) return U.some(i);
        if (n(i, r)) break;
      }

      return U.none();
    }(e, t, C);
  },
      G = function G(e, t) {
    for (var n = 0, r = e.length; n < r; n++) {
      if (t(e[n], n)) return U.some(n);
    }

    return U.none();
  },
      J = function J(e, t) {
    return function (e) {
      for (var t = [], n = 0, r = e.length; n < r; ++n) {
        if (!S(e[n])) throw new Error("Arr.flatten item " + n + " was not an array, input: " + e);
        L.apply(t, e[n]);
      }

      return t;
    }(z(e, t));
  },
      Q = function Q(e, t) {
    for (var n = 0, r = e.length; n < r; ++n) {
      if (!0 !== t(e[n], n)) return !1;
    }

    return !0;
  },
      Z = function Z(e) {
    var t = B.call(e, 0);
    return t.reverse(), t;
  },
      ee = function ee(e, t) {
    return H(e, function (e) {
      return !M(t, e);
    });
  },
      te = function te(e, t) {
    return 0 <= t && t < e.length ? U.some(e[t]) : U.none();
  },
      ne = function ne(e) {
    return te(e, 0);
  },
      re = function re(e) {
    return te(e, e.length - 1);
  },
      oe = T(Array.from) ? Array.from : function (e) {
    return B.call(e);
  },
      ie = Object.keys,
      ae = Object.hasOwnProperty,
      ue = function ue(e, t) {
    for (var n = ie(e), r = 0, o = n.length; r < o; r++) {
      var i = n[r];
      t(e[i], i);
    }
  },
      se = function se(e, n) {
    return ce(e, function (e, t) {
      return {
        k: t,
        v: n(e, t)
      };
    });
  },
      ce = function ce(e, r) {
    var o = {};
    return ue(e, function (e, t) {
      var n = r(e, t);
      o[n.k] = n.v;
    }), o;
  },
      le = function le(n) {
    return function (e, t) {
      n[t] = e;
    };
  },
      fe = function fe(e, n, r, o) {
    return ue(e, function (e, t) {
      (n(e, t) ? r : o)(e, t);
    }), {};
  },
      de = function de(e, t) {
    var n = {},
        r = {};
    return fe(e, t, le(n), le(r)), {
      t: n,
      f: r
    };
  },
      me = function me(e, t) {
    var n = {};
    return fe(e, t, le(n), V), n;
  },
      pe = function pe(e) {
    return n = function n(e) {
      return e;
    }, r = [], ue(e, function (e, t) {
      r.push(n(e, t));
    }), r;
    var n, r;
  },
      ge = function ge(e, t) {
    return he(e, t) ? U.from(e[t]) : U.none();
  },
      he = function he(e, t) {
    return ae.call(e, t);
  },
      ve = function ve(e, t) {
    return he(e, t) && e[t] !== undefined && null !== e[t];
  },
      ye = Array.isArray,
      be = function be(e, t, n) {
    var r, o;
    if (!e) return !1;

    if (n = n || e, e.length !== undefined) {
      for (r = 0, o = e.length; r < o; r++) {
        if (!1 === t.call(n, e[r], r, e)) return !1;
      }
    } else for (r in e) {
      if (e.hasOwnProperty(r) && !1 === t.call(n, e[r], r, e)) return !1;
    }

    return !0;
  },
      Ce = function Ce(n, r) {
    var o = [];
    return be(n, function (e, t) {
      o.push(r(e, t, n));
    }), o;
  },
      we = function we(n, r) {
    var o = [];
    return be(n, function (e, t) {
      r && !r(e, t, n) || o.push(e);
    }), o;
  },
      xe = function xe(e, t) {
    if (e) for (var n = 0, r = e.length; n < r; n++) {
      if (e[n] === t) return n;
    }
    return -1;
  },
      Se = function Se(e, t, n, r) {
    for (var o = R(n) ? e[0] : n, i = 0; i < e.length; i++) {
      o = t.call(r, o, e[i], i);
    }

    return o;
  },
      Ne = function Ne(e, t, n) {
    for (var r = 0, o = e.length; r < o; r++) {
      if (t.call(n, e[r], r, e)) return r;
    }

    return -1;
  },
      Ee = function Ee(e) {
    return e[e.length - 1];
  },
      _ke = function ke() {
    return (_ke = Object.assign || function (e) {
      for (var t, n = 1, r = arguments.length; n < r; n++) {
        for (var o in t = arguments[n]) {
          Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
        }
      }

      return e;
    }).apply(this, arguments);
  };

  function _e() {
    for (var e = 0, t = 0, n = arguments.length; t < n; t++) {
      e += arguments[t].length;
    }

    for (var r = Array(e), o = 0, t = 0; t < n; t++) {
      for (var i = arguments[t], a = 0, u = i.length; a < u; a++, o++) {
        r[o] = i[a];
      }
    }

    return r;
  }

  var Ae,
      Re,
      Te,
      De,
      Oe,
      Be,
      Pe,
      Le = function Le(e, t) {
    var n = function (e, t) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        if (r.test(t)) return r;
      }

      return undefined;
    }(e, t);

    if (!n) return {
      major: 0,
      minor: 0
    };

    var r = function r(e) {
      return Number(t.replace(n, "$" + e));
    };

    return Me(r(1), r(2));
  },
      Ie = function Ie() {
    return Me(0, 0);
  },
      Me = function Me(e, t) {
    return {
      major: e,
      minor: t
    };
  },
      Fe = {
    nu: Me,
    detect: function detect(e, t) {
      var n = String(t).toLowerCase();
      return 0 === e.length ? Ie() : Le(e, n);
    },
    unknown: Ie
  },
      Ue = function Ue(e, t) {
    var n = String(t).toLowerCase();
    return Y(e, function (e) {
      return e.search(n);
    });
  },
      ze = function ze(e, n) {
    return Ue(e, n).map(function (e) {
      var t = Fe.detect(e.versionRegexes, n);
      return {
        current: e.name,
        version: t
      };
    });
  },
      je = function je(e, n) {
    return Ue(e, n).map(function (e) {
      var t = Fe.detect(e.versionRegexes, n);
      return {
        current: e.name,
        version: t
      };
    });
  },
      He = function He(e, t) {
    return -1 !== e.indexOf(t);
  },
      Ve = function Ve(e, t) {
    return n = e, o = 0, "" === (r = t) || n.length >= r.length && n.substr(o, o + r.length) === r;
    var n, r, o;
  },
      qe = function qe(t) {
    return function (e) {
      return e.replace(t, "");
    };
  },
      $e = qe(/^\s+|\s+$/g),
      We = qe(/^\s+/g),
      Ke = qe(/\s+$/g),
      Xe = /.*?version\/\ ?([0-9]+)\.([0-9]+).*/,
      Ye = function Ye(t) {
    return function (e) {
      return He(e, t);
    };
  },
      Ge = [{
    name: "Edge",
    versionRegexes: [/.*?edge\/ ?([0-9]+)\.([0-9]+)$/],
    search: function search(e) {
      return He(e, "edge/") && He(e, "chrome") && He(e, "safari") && He(e, "applewebkit");
    }
  }, {
    name: "Chrome",
    versionRegexes: [/.*?chrome\/([0-9]+)\.([0-9]+).*/, Xe],
    search: function search(e) {
      return He(e, "chrome") && !He(e, "chromeframe");
    }
  }, {
    name: "IE",
    versionRegexes: [/.*?msie\ ?([0-9]+)\.([0-9]+).*/, /.*?rv:([0-9]+)\.([0-9]+).*/],
    search: function search(e) {
      return He(e, "msie") || He(e, "trident");
    }
  }, {
    name: "Opera",
    versionRegexes: [Xe, /.*?opera\/([0-9]+)\.([0-9]+).*/],
    search: Ye("opera")
  }, {
    name: "Firefox",
    versionRegexes: [/.*?firefox\/\ ?([0-9]+)\.([0-9]+).*/],
    search: Ye("firefox")
  }, {
    name: "Safari",
    versionRegexes: [Xe, /.*?cpu os ([0-9]+)_([0-9]+).*/],
    search: function search(e) {
      return (He(e, "safari") || He(e, "mobile/")) && He(e, "applewebkit");
    }
  }],
      Je = [{
    name: "Windows",
    search: Ye("win"),
    versionRegexes: [/.*?windows\ nt\ ?([0-9]+)\.([0-9]+).*/]
  }, {
    name: "iOS",
    search: function search(e) {
      return He(e, "iphone") || He(e, "ipad");
    },
    versionRegexes: [/.*?version\/\ ?([0-9]+)\.([0-9]+).*/, /.*cpu os ([0-9]+)_([0-9]+).*/, /.*cpu iphone os ([0-9]+)_([0-9]+).*/]
  }, {
    name: "Android",
    search: Ye("android"),
    versionRegexes: [/.*?android\ ?([0-9]+)\.([0-9]+).*/]
  }, {
    name: "OSX",
    search: Ye("mac os x"),
    versionRegexes: [/.*?mac\ os\ x\ ?([0-9]+)_([0-9]+).*/]
  }, {
    name: "Linux",
    search: Ye("linux"),
    versionRegexes: []
  }, {
    name: "Solaris",
    search: Ye("sunos"),
    versionRegexes: []
  }, {
    name: "FreeBSD",
    search: Ye("freebsd"),
    versionRegexes: []
  }, {
    name: "ChromeOS",
    search: Ye("cros"),
    versionRegexes: [/.*?chrome\/([0-9]+)\.([0-9]+).*/]
  }],
      Qe = {
    browsers: E(Ge),
    oses: E(Je)
  },
      Ze = "Firefox",
      et = function et(e) {
    var t = e.current,
        n = e.version,
        r = function r(e) {
      return function () {
        return t === e;
      };
    };

    return {
      current: t,
      version: n,
      isEdge: r("Edge"),
      isChrome: r("Chrome"),
      isIE: r("IE"),
      isOpera: r("Opera"),
      isFirefox: r(Ze),
      isSafari: r("Safari")
    };
  },
      tt = {
    unknown: function unknown() {
      return et({
        current: undefined,
        version: Fe.unknown()
      });
    },
    nu: et,
    edge: E("Edge"),
    chrome: E("Chrome"),
    ie: E("IE"),
    opera: E("Opera"),
    firefox: E(Ze),
    safari: E("Safari")
  },
      nt = "Windows",
      rt = "Android",
      ot = "Solaris",
      it = "FreeBSD",
      at = "ChromeOS",
      ut = function ut(e) {
    var t = e.current,
        n = e.version,
        r = function r(e) {
      return function () {
        return t === e;
      };
    };

    return {
      current: t,
      version: n,
      isWindows: r(nt),
      isiOS: r("iOS"),
      isAndroid: r(rt),
      isOSX: r("OSX"),
      isLinux: r("Linux"),
      isSolaris: r(ot),
      isFreeBSD: r(it),
      isChromeOS: r(at)
    };
  },
      st = {
    unknown: function unknown() {
      return ut({
        current: undefined,
        version: Fe.unknown()
      });
    },
    nu: ut,
    windows: E(nt),
    ios: E("iOS"),
    android: E(rt),
    linux: E("Linux"),
    osx: E("OSX"),
    solaris: E(ot),
    freebsd: E(it),
    chromeos: E(at)
  },
      ct = function ct(e, t) {
    var n,
        r,
        o,
        i,
        a,
        u,
        s,
        c,
        l,
        f,
        d,
        m,
        p = Qe.browsers(),
        g = Qe.oses(),
        h = ze(p, e).fold(tt.unknown, tt.nu),
        v = je(g, e).fold(st.unknown, st.nu);
    return {
      browser: h,
      os: v,
      deviceType: (r = h, o = e, i = t, a = (n = v).isiOS() && !0 === /ipad/i.test(o), u = n.isiOS() && !a, s = n.isiOS() || n.isAndroid(), c = s || i("(pointer:coarse)"), l = a || !u && s && i("(min-device-width:768px)"), f = u || s && !l, d = r.isSafari() && n.isiOS() && !1 === /safari/i.test(o), m = !f && !l && !d, {
        isiPad: E(a),
        isiPhone: E(u),
        isTablet: E(l),
        isPhone: E(f),
        isTouch: E(c),
        isAndroid: n.isAndroid,
        isiOS: n.isiOS,
        isWebView: E(d),
        isDesktop: E(m)
      })
    };
  },
      lt = function lt(e) {
    return window.matchMedia(e).matches;
  },
      ft = (Te = !(Ae = function Ae() {
    return ct(navigator.userAgent, lt);
  }), function () {
    for (var e = [], t = 0; t < arguments.length; t++) {
      e[t] = arguments[t];
    }

    return Te || (Te = !0, Re = Ae.apply(null, e)), Re;
  }),
      dt = function dt() {
    return ft();
  },
      mt = navigator.userAgent,
      pt = dt(),
      gt = pt.browser,
      ht = pt.os,
      vt = pt.deviceType,
      yt = /WebKit/.test(mt) && !gt.isEdge(),
      bt = "FormData" in window && "FileReader" in window && "URL" in window && !!URL.createObjectURL,
      Ct = -1 !== mt.indexOf("Windows Phone"),
      wt = {
    opera: gt.isOpera(),
    webkit: yt,
    ie: !(!gt.isIE() && !gt.isEdge()) && gt.version.major,
    gecko: gt.isFirefox(),
    mac: ht.isOSX() || ht.isiOS(),
    iOS: vt.isiPad() || vt.isiPhone(),
    android: ht.isAndroid(),
    contentEditable: !0,
    transparentSrc: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
    caretAfter: !0,
    range: window.getSelection && "Range" in window,
    documentMode: gt.isIE() ? document.documentMode || 7 : 10,
    fileApi: bt,
    ceFalse: !0,
    cacheSuffix: null,
    container: null,
    experimentalShadowDom: !1,
    canHaveCSP: !gt.isIE(),
    desktop: vt.isDesktop(),
    windowsPhone: Ct,
    browser: {
      current: gt.current,
      version: gt.version,
      isChrome: gt.isChrome,
      isEdge: gt.isEdge,
      isFirefox: gt.isFirefox,
      isIE: gt.isIE,
      isOpera: gt.isOpera,
      isSafari: gt.isSafari
    },
    os: {
      current: ht.current,
      version: ht.version,
      isAndroid: ht.isAndroid,
      isChromeOS: ht.isChromeOS,
      isFreeBSD: ht.isFreeBSD,
      isiOS: ht.isiOS,
      isLinux: ht.isLinux,
      isOSX: ht.isOSX,
      isSolaris: ht.isSolaris,
      isWindows: ht.isWindows
    },
    deviceType: {
      isDesktop: vt.isDesktop,
      isiPad: vt.isiPad,
      isiPhone: vt.isiPhone,
      isPhone: vt.isPhone,
      isTablet: vt.isTablet,
      isTouch: vt.isTouch,
      isWebView: vt.isWebView
    }
  },
      xt = /^\s*|\s*$/g,
      St = function St(e) {
    return null === e || e === undefined ? "" : ("" + e).replace(xt, "");
  },
      Nt = function Nt(e, t) {
    return t ? !("array" !== t || !ye(e)) || _typeof(e) === t : e !== undefined;
  },
      Et = function Et(e, n, r, o) {
    o = o || this, e && (r && (e = e[r]), be(e, function (e, t) {
      return !1 !== n.call(o, e, t, r) && void Et(e, n, r, o);
    }));
  },
      kt = {
    trim: St,
    isArray: ye,
    is: Nt,
    toArray: function toArray(e) {
      if (ye(e)) return e;

      for (var t = [], n = 0, r = e.length; n < r; n++) {
        t[n] = e[n];
      }

      return t;
    },
    makeMap: function makeMap(e, t, n) {
      var r;

      for (t = t || ",", "string" == typeof (e = e || []) && (e = e.split(t)), n = n || {}, r = e.length; r--;) {
        n[e[r]] = {};
      }

      return n;
    },
    each: be,
    map: Ce,
    grep: we,
    inArray: xe,
    hasOwn: function hasOwn(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    },
    extend: function extend(e) {
      for (var t = [], n = 1; n < arguments.length; n++) {
        t[n - 1] = arguments[n];
      }

      for (var r = 0; r < t.length; r++) {
        var o,
            i = t[r];

        for (var a in i) {
          !i.hasOwnProperty(a) || (o = i[a]) !== undefined && (e[a] = o);
        }
      }

      return e;
    },
    create: function create(e, t, n) {
      var r,
          o,
          i,
          a = this,
          u = 0,
          s = (e = /^((static) )?([\w.]+)(:([\w.]+))?/.exec(e))[3].match(/(^|\.)(\w+)$/i)[2],
          c = a.createNS(e[3].replace(/\.\w+$/, ""), n);

      if (!c[s]) {
        if ("static" === e[2]) return c[s] = t, void (this.onCreate && this.onCreate(e[2], e[3], c[s]));
        t[s] || (t[s] = function () {}, u = 1), c[s] = t[s], a.extend(c[s].prototype, t), e[5] && (r = a.resolve(e[5]).prototype, o = e[5].match(/\.(\w+)$/i)[1], i = c[s], c[s] = u ? function () {
          return r[o].apply(this, arguments);
        } : function () {
          return this.parent = r[o], i.apply(this, arguments);
        }, c[s].prototype[s] = c[s], a.each(r, function (e, t) {
          c[s].prototype[t] = r[t];
        }), a.each(t, function (e, t) {
          r[t] ? c[s].prototype[t] = function () {
            return this.parent = r[t], e.apply(this, arguments);
          } : t !== s && (c[s].prototype[t] = e);
        })), a.each(t["static"], function (e, t) {
          c[s][t] = e;
        });
      }
    },
    walk: Et,
    createNS: function createNS(e, t) {
      var n, r;

      for (t = t || window, e = e.split("."), n = 0; n < e.length; n++) {
        t[r = e[n]] || (t[r] = {}), t = t[r];
      }

      return t;
    },
    resolve: function resolve(e, t) {
      var n, r;

      for (t = t || window, n = 0, r = (e = e.split(".")).length; n < r && (t = t[e[n]]); n++) {
        ;
      }

      return t;
    },
    explode: function explode(e, t) {
      return !e || Nt(e, "array") ? e : Ce(e.split(t || ","), St);
    },
    _addCacheSuffix: function _addCacheSuffix(e) {
      var t = wt.cacheSuffix;
      return t && (e += (-1 === e.indexOf("?") ? "?" : "&") + t), e;
    }
  },
      _t = function _t(e) {
    if (null === e || e === undefined) throw new Error("Node cannot be null or undefined");
    return {
      dom: e
    };
  },
      At = {
    fromHtml: function fromHtml(e, t) {
      var n = (t || document).createElement("div");
      if (n.innerHTML = e, !n.hasChildNodes() || 1 < n.childNodes.length) throw console.error("HTML does not have a single root node", e), new Error("HTML must have a single root node");
      return _t(n.childNodes[0]);
    },
    fromTag: function fromTag(e, t) {
      var n = (t || document).createElement(e);
      return _t(n);
    },
    fromText: function fromText(e, t) {
      var n = (t || document).createTextNode(e);
      return _t(n);
    },
    fromDom: _t,
    fromPoint: function fromPoint(e, t, n) {
      return U.from(e.dom.elementFromPoint(t, n)).map(_t);
    }
  },
      Rt = function Rt(e, t) {
    for (var n = [], r = function r(e) {
      return n.push(e), t(e);
    }, o = t(e); (o = o.bind(r)).isSome();) {
      ;
    }

    return n;
  },
      Tt = function Tt(e, t) {
    var n = e.dom;
    if (1 !== n.nodeType) return !1;
    var r = n;
    if (r.matches !== undefined) return r.matches(t);
    if (r.msMatchesSelector !== undefined) return r.msMatchesSelector(t);
    if (r.webkitMatchesSelector !== undefined) return r.webkitMatchesSelector(t);
    if (r.mozMatchesSelector !== undefined) return r.mozMatchesSelector(t);
    throw new Error("Browser lacks native selectors");
  },
      Dt = function Dt(e) {
    return 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType || 0 === e.childElementCount;
  },
      Ot = function Ot(e, t) {
    return e.dom === t.dom;
  },
      Bt = function Bt(e, t) {
    return n = e.dom, r = t.dom, o = n, i = r, a = Node.DOCUMENT_POSITION_CONTAINED_BY, 0 != (o.compareDocumentPosition(i) & a);
    var n, r, o, i, a;
  },
      Pt = function Pt(e, t) {
    return dt().browser.isIE() ? Bt(e, t) : (n = t, r = e.dom, o = n.dom, r !== o && r.contains(o));
    var n, r, o;
  },
      Lt = ("undefined" != typeof window || Function("return this;")(), function (e) {
    return e.dom.nodeName.toLowerCase();
  }),
      It = function It(e) {
    return e.dom.nodeType;
  },
      Mt = function Mt(t) {
    return function (e) {
      return It(e) === t;
    };
  },
      Ft = Mt(1),
      Ut = Mt(3),
      zt = Mt(9),
      jt = Mt(11),
      Ht = function Ht(e) {
    return At.fromDom(e.dom.ownerDocument);
  },
      Vt = function Vt(e) {
    return zt(e) ? e : Ht(e);
  },
      qt = function qt(e) {
    return At.fromDom(Vt(e).dom.defaultView);
  },
      $t = function $t(e) {
    return U.from(e.dom.parentNode).map(At.fromDom);
  },
      Wt = function Wt(e) {
    return U.from(e.dom.previousSibling).map(At.fromDom);
  },
      Kt = function Kt(e) {
    return U.from(e.dom.nextSibling).map(At.fromDom);
  },
      Xt = function Xt(e) {
    return Z(Rt(e, Wt));
  },
      Yt = function Yt(e) {
    return Rt(e, Kt);
  },
      Gt = function Gt(e) {
    return z(e.dom.childNodes, At.fromDom);
  },
      Jt = function Jt(e, t) {
    var n = e.dom.childNodes;
    return U.from(n[t]).map(At.fromDom);
  },
      Qt = function Qt(e) {
    return Jt(e, 0);
  },
      Zt = function Zt(e) {
    return Jt(e, e.dom.childNodes.length - 1);
  },
      en = function en(e) {
    return jt(e);
  },
      tn = T(Element.prototype.attachShadow) && T(Node.prototype.getRootNode),
      nn = E(tn),
      rn = tn ? function (e) {
    return At.fromDom(e.dom.getRootNode());
  } : Vt,
      on = function on(e) {
    return en(e) ? e : function (e) {
      var t = e.dom.head;
      if (null === t || t === undefined) throw new Error("Head is not available yet");
      return At.fromDom(t);
    }(Vt(e));
  },
      an = function an(e) {
    return At.fromDom(e.dom.host);
  },
      un = function un(e) {
    return D(e.dom.shadowRoot);
  },
      sn = function sn(t, n) {
    $t(t).each(function (e) {
      e.dom.insertBefore(n.dom, t.dom);
    });
  },
      cn = function cn(e, t) {
    Kt(e).fold(function () {
      $t(e).each(function (e) {
        fn(e, t);
      });
    }, function (e) {
      sn(e, t);
    });
  },
      ln = function ln(t, n) {
    Qt(t).fold(function () {
      fn(t, n);
    }, function (e) {
      t.dom.insertBefore(n.dom, e.dom);
    });
  },
      fn = function fn(e, t) {
    e.dom.appendChild(t.dom);
  },
      dn = function dn(t, e) {
    W(e, function (e) {
      fn(t, e);
    });
  },
      mn = function mn(e) {
    e.dom.textContent = "", W(Gt(e), function (e) {
      pn(e);
    });
  },
      pn = function pn(e) {
    var t = e.dom;
    null !== t.parentNode && t.parentNode.removeChild(t);
  },
      gn = function gn(e) {
    var t,
        n = Gt(e);
    0 < n.length && (t = e, W(n, function (e) {
      sn(t, e);
    })), pn(e);
  },
      hn = function hn(e) {
    var t = Ut(e) ? e.dom.parentNode : e.dom;
    if (t === undefined || null === t || null === t.ownerDocument) return !1;
    var n,
        r,
        o,
        i,
        a = t.ownerDocument;
    return o = At.fromDom(t), i = rn(o), (en(i) ? U.some(i) : U.none()).fold(function () {
      return a.body.contains(t);
    }, (n = hn, r = an, function (e) {
      return n(r(e));
    }));
  },
      vn = function vn(n, r) {
    return {
      left: n,
      top: r,
      translate: function translate(e, t) {
        return vn(n + e, r + t);
      }
    };
  },
      yn = vn,
      bn = function bn(e, t) {
    return e !== undefined ? e : t !== undefined ? t : 0;
  },
      Cn = function Cn(e) {
    var t,
        n = e.dom,
        r = n.ownerDocument.body;
    return r === n ? yn(r.offsetLeft, r.offsetTop) : hn(e) ? (t = n.getBoundingClientRect(), yn(t.left, t.top)) : yn(0, 0);
  },
      wn = function wn(e) {
    var t = e !== undefined ? e.dom : document,
        n = t.body.scrollLeft || t.documentElement.scrollLeft,
        r = t.body.scrollTop || t.documentElement.scrollTop;
    return yn(n, r);
  },
      xn = function xn(e, t, n) {
    var r = (n !== undefined ? n.dom : document).defaultView;
    r && r.scrollTo(e, t);
  },
      Sn = function Sn(e, t) {
    dt().browser.isSafari() && T(e.dom.scrollIntoViewIfNeeded) ? e.dom.scrollIntoViewIfNeeded(!1) : e.dom.scrollIntoView(t);
  },
      Nn = function Nn(e, t, n, r) {
    return {
      x: e,
      y: t,
      width: n,
      height: r,
      right: e + n,
      bottom: t + r
    };
  },
      En = function En(e) {
    var t,
        n,
        r = e === undefined ? window : e,
        o = r.document,
        i = wn(At.fromDom(o));
    return n = (t = r) === undefined ? window : t, U.from(n.visualViewport).fold(function () {
      var e = r.document.documentElement,
          t = e.clientWidth,
          n = e.clientHeight;
      return Nn(i.left, i.top, t, n);
    }, function (e) {
      return Nn(Math.max(e.pageLeft, i.left), Math.max(e.pageTop, i.top), e.width, e.height);
    });
  },
      kn = function kn(t) {
    return function (e) {
      return !!e && e.nodeType === t;
    };
  },
      _n = function _n(e) {
    return !!e && !Object.getPrototypeOf(e);
  },
      An = kn(1),
      Rn = function Rn(e) {
    var n = e.map(function (e) {
      return e.toLowerCase();
    });
    return function (e) {
      if (e && e.nodeName) {
        var t = e.nodeName.toLowerCase();
        return M(n, t);
      }

      return !1;
    };
  },
      Tn = function Tn(r, e) {
    var o = e.toLowerCase().split(" ");
    return function (e) {
      var t;
      if (An(e)) for (t = 0; t < o.length; t++) {
        var n = e.ownerDocument.defaultView.getComputedStyle(e, null);
        if ((n ? n.getPropertyValue(r) : null) === o[t]) return !0;
      }
      return !1;
    };
  },
      Dn = function Dn(t) {
    return function (e) {
      return An(e) && e.hasAttribute(t);
    };
  },
      On = function On(e) {
    return An(e) && e.hasAttribute("data-mce-bogus");
  },
      Bn = function Bn(e) {
    return An(e) && "TABLE" === e.tagName;
  },
      Pn = function Pn(t) {
    return function (e) {
      if (An(e)) {
        if (e.contentEditable === t) return !0;
        if (e.getAttribute("data-mce-contenteditable") === t) return !0;
      }

      return !1;
    };
  },
      Ln = Rn(["textarea", "input"]),
      In = kn(3),
      Mn = kn(8),
      Fn = kn(9),
      Un = kn(11),
      zn = Rn(["br"]),
      jn = Rn(["img"]),
      Hn = Pn("true"),
      Vn = Pn("false"),
      qn = Rn(["td", "th"]),
      $n = Rn(["video", "audio", "object", "embed"]),
      Wn = function Wn(e) {
    return e.style !== undefined && T(e.style.getPropertyValue);
  },
      Kn = function Kn(e, t, n) {
    if (!(q(n) || A(n) || O(n))) throw console.error("Invalid call to Attribute.set. Key ", t, ":: Value ", n, ":: Element ", e), new Error("Attribute value was not simple");
    e.setAttribute(t, n + "");
  },
      Xn = function Xn(e, t, n) {
    Kn(e.dom, t, n);
  },
      Yn = function Yn(e, t) {
    var n = e.dom;
    ue(t, function (e, t) {
      Kn(n, t, e);
    });
  },
      Gn = function Gn(e, t) {
    var n = e.dom.getAttribute(t);
    return null === n ? undefined : n;
  },
      Jn = function Jn(e, t) {
    return U.from(Gn(e, t));
  },
      Qn = function Qn(e, t) {
    e.dom.removeAttribute(t);
  },
      Zn = function Zn(e, t) {
    var n = e.dom;
    ue(t, function (e, t) {
      !function (e, t, n) {
        if (!q(n)) throw console.error("Invalid call to CSS.set. Property ", t, ":: Value ", n, ":: Element ", e), new Error("CSS value must be a string: " + n);
        Wn(e) && e.style.setProperty(t, n);
      }(n, t, e);
    });
  },
      er = function er(e, t) {
    var n = e.dom,
        r = window.getComputedStyle(n).getPropertyValue(t);
    return "" !== r || hn(e) ? r : tr(n, t);
  },
      tr = function tr(e, t) {
    return Wn(e) ? e.style.getPropertyValue(t) : "";
  },
      nr = function nr(e, t) {
    var n = e.dom,
        r = tr(n, t);
    return U.from(r).filter(function (e) {
      return 0 < e.length;
    });
  },
      rr = function rr(e) {
    var t = {},
        n = e.dom;
    if (Wn(n)) for (var r = 0; r < n.style.length; r++) {
      var o = n.style.item(r);
      t[o] = n.style[o];
    }
    return t;
  },
      or = dt().browser,
      ir = function ir(e) {
    return Y(e, Ft);
  },
      ar = function ar(e, t) {
    return e.children && M(e.children, t);
  },
      ur = function ur(e, t, n) {
    var r,
        o,
        i,
        a = 0,
        u = 0,
        s = e.ownerDocument;

    if (n = n || e, t) {
      if (n === e && t.getBoundingClientRect && "static" === er(At.fromDom(e), "position")) return {
        x: a = (o = t.getBoundingClientRect()).left + (s.documentElement.scrollLeft || e.scrollLeft) - s.documentElement.clientLeft,
        y: u = o.top + (s.documentElement.scrollTop || e.scrollTop) - s.documentElement.clientTop
      };

      for (r = t; r && r !== n && r.nodeType && !ar(r, n);) {
        a += r.offsetLeft || 0, u += r.offsetTop || 0, r = r.offsetParent;
      }

      for (r = t.parentNode; r && r !== n && r.nodeType && !ar(r, n);) {
        a -= r.scrollLeft || 0, u -= r.scrollTop || 0, r = r.parentNode;
      }

      u += (i = At.fromDom(t), or.isFirefox() && "table" === Lt(i) ? ir(Gt(i)).filter(function (e) {
        return "caption" === Lt(e);
      }).bind(function (o) {
        return ir(Yt(o)).map(function (e) {
          var t = e.dom.offsetTop,
              n = o.dom.offsetTop,
              r = o.dom.offsetHeight;
          return t <= n ? -r : 0;
        });
      }).getOr(0) : 0);
    }

    return {
      x: a,
      y: u
    };
  },
      sr = {},
      cr = {
    exports: sr
  };

  De = undefined, Oe = sr, Be = cr, Pe = undefined, function (e) {
    "object" == _typeof(Oe) && void 0 !== Be ? Be.exports = e() : "function" == typeof De && De.amd ? De([], e) : ("undefined" != typeof window ? window : "undefined" != typeof __webpack_require__.g ? __webpack_require__.g : "undefined" != typeof self ? self : this).EphoxContactWrapper = e();
  }(function () {
    return function l(i, a, u) {
      function s(t, e) {
        if (!a[t]) {
          if (!i[t]) {
            var n = "function" == typeof Pe && Pe;
            if (!e && n) return n(t, !0);
            if (c) return c(t, !0);
            var r = new Error("Cannot find module '" + t + "'");
            throw r.code = "MODULE_NOT_FOUND", r;
          }

          var o = a[t] = {
            exports: {}
          };
          i[t][0].call(o.exports, function (e) {
            return s(i[t][1][e] || e);
          }, o, o.exports, l, i, a, u);
        }

        return a[t].exports;
      }

      for (var c = "function" == typeof Pe && Pe, e = 0; e < u.length; e++) {
        s(u[e]);
      }

      return s;
    }({
      1: [function (e, t, n) {
        var r,
            o,
            i = t.exports = {};

        function a() {
          throw new Error("setTimeout has not been defined");
        }

        function u() {
          throw new Error("clearTimeout has not been defined");
        }

        function s(e) {
          if (r === setTimeout) return setTimeout(e, 0);
          if ((r === a || !r) && setTimeout) return r = setTimeout, setTimeout(e, 0);

          try {
            return r(e, 0);
          } catch (t) {
            try {
              return r.call(null, e, 0);
            } catch (t) {
              return r.call(this, e, 0);
            }
          }
        }

        !function () {
          try {
            r = "function" == typeof setTimeout ? setTimeout : a;
          } catch (e) {
            r = a;
          }

          try {
            o = "function" == typeof clearTimeout ? clearTimeout : u;
          } catch (e) {
            o = u;
          }
        }();
        var c,
            l = [],
            f = !1,
            d = -1;

        function m() {
          f && c && (f = !1, c.length ? l = c.concat(l) : d = -1, l.length && p());
        }

        function p() {
          if (!f) {
            var e = s(m);
            f = !0;

            for (var t = l.length; t;) {
              for (c = l, l = []; ++d < t;) {
                c && c[d].run();
              }

              d = -1, t = l.length;
            }

            c = null, f = !1, function (e) {
              if (o === clearTimeout) return clearTimeout(e);
              if ((o === u || !o) && clearTimeout) return o = clearTimeout, clearTimeout(e);

              try {
                o(e);
              } catch (t) {
                try {
                  return o.call(null, e);
                } catch (t) {
                  return o.call(this, e);
                }
              }
            }(e);
          }
        }

        function g(e, t) {
          this.fun = e, this.array = t;
        }

        function h() {}

        i.nextTick = function (e) {
          var t = new Array(arguments.length - 1);
          if (1 < arguments.length) for (var n = 1; n < arguments.length; n++) {
            t[n - 1] = arguments[n];
          }
          l.push(new g(e, t)), 1 !== l.length || f || s(p);
        }, g.prototype.run = function () {
          this.fun.apply(null, this.array);
        }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = h, i.addListener = h, i.once = h, i.off = h, i.removeListener = h, i.removeAllListeners = h, i.emit = h, i.prependListener = h, i.prependOnceListener = h, i.listeners = function (e) {
          return [];
        }, i.binding = function (e) {
          throw new Error("process.binding is not supported");
        }, i.cwd = function () {
          return "/";
        }, i.chdir = function (e) {
          throw new Error("process.chdir is not supported");
        }, i.umask = function () {
          return 0;
        };
      }, {}],
      2: [function (e, f, t) {
        (function (t) {
          function r() {}

          function a(e) {
            if ("object" != _typeof(this)) throw new TypeError("Promises must be constructed via new");
            if ("function" != typeof e) throw new TypeError("not a function");
            this._state = 0, this._handled = !1, this._value = undefined, this._deferreds = [], l(e, this);
          }

          function o(r, o) {
            for (; 3 === r._state;) {
              r = r._value;
            }

            0 !== r._state ? (r._handled = !0, a._immediateFn(function () {
              var e,
                  t = 1 === r._state ? o.onFulfilled : o.onRejected;

              if (null !== t) {
                try {
                  e = t(r._value);
                } catch (n) {
                  return void u(o.promise, n);
                }

                i(o.promise, e);
              } else (1 === r._state ? i : u)(o.promise, r._value);
            })) : r._deferreds.push(o);
          }

          function i(e, t) {
            try {
              if (t === e) throw new TypeError("A promise cannot be resolved with itself.");

              if (t && ("object" == _typeof(t) || "function" == typeof t)) {
                var n = t.then;
                if (t instanceof a) return e._state = 3, e._value = t, void s(e);
                if ("function" == typeof n) return void l((r = n, o = t, function () {
                  r.apply(o, arguments);
                }), e);
              }

              e._state = 1, e._value = t, s(e);
            } catch (i) {
              u(e, i);
            }

            var r, o;
          }

          function u(e, t) {
            e._state = 2, e._value = t, s(e);
          }

          function s(e) {
            2 === e._state && 0 === e._deferreds.length && a._immediateFn(function () {
              e._handled || a._unhandledRejectionFn(e._value);
            });

            for (var t = 0, n = e._deferreds.length; t < n; t++) {
              o(e, e._deferreds[t]);
            }

            e._deferreds = null;
          }

          function c(e, t, n) {
            this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof t ? t : null, this.promise = n;
          }

          function l(e, t) {
            var n = !1;

            try {
              e(function (e) {
                n || (n = !0, i(t, e));
              }, function (e) {
                n || (n = !0, u(t, e));
              });
            } catch (r) {
              if (n) return;
              n = !0, u(t, r);
            }
          }

          var e, n;
          e = this, n = setTimeout, a.prototype["catch"] = function (e) {
            return this.then(null, e);
          }, a.prototype.then = function (e, t) {
            var n = new this.constructor(r);
            return o(this, new c(e, t, n)), n;
          }, a.all = function (e) {
            var s = Array.prototype.slice.call(e);
            return new a(function (o, i) {
              if (0 === s.length) return o([]);
              var a = s.length;

              for (var e = 0; e < s.length; e++) {
                !function u(t, e) {
                  try {
                    if (e && ("object" == _typeof(e) || "function" == typeof e)) {
                      var n = e.then;
                      if ("function" == typeof n) return void n.call(e, function (e) {
                        u(t, e);
                      }, i);
                    }

                    s[t] = e, 0 == --a && o(s);
                  } catch (r) {
                    i(r);
                  }
                }(e, s[e]);
              }
            });
          }, a.resolve = function (t) {
            return t && "object" == _typeof(t) && t.constructor === a ? t : new a(function (e) {
              e(t);
            });
          }, a.reject = function (n) {
            return new a(function (e, t) {
              t(n);
            });
          }, a.race = function (o) {
            return new a(function (e, t) {
              for (var n = 0, r = o.length; n < r; n++) {
                o[n].then(e, t);
              }
            });
          }, a._immediateFn = "function" == typeof t ? function (e) {
            t(e);
          } : function (e) {
            n(e, 0);
          }, a._unhandledRejectionFn = function (e) {
            "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", e);
          }, a._setImmediateFn = function (e) {
            a._immediateFn = e;
          }, a._setUnhandledRejectionFn = function (e) {
            a._unhandledRejectionFn = e;
          }, void 0 !== f && f.exports ? f.exports = a : e.Promise || (e.Promise = a);
        }).call(this, e("timers").setImmediate);
      }, {
        timers: 3
      }],
      3: [function (s, e, c) {
        (function (e, t) {
          var r = s("process/browser.js").nextTick,
              n = Function.prototype.apply,
              o = Array.prototype.slice,
              i = {},
              a = 0;

          function u(e, t) {
            this._id = e, this._clearFn = t;
          }

          c.setTimeout = function () {
            return new u(n.call(setTimeout, window, arguments), clearTimeout);
          }, c.setInterval = function () {
            return new u(n.call(setInterval, window, arguments), clearInterval);
          }, c.clearTimeout = c.clearInterval = function (e) {
            e.close();
          }, u.prototype.unref = u.prototype.ref = function () {}, u.prototype.close = function () {
            this._clearFn.call(window, this._id);
          }, c.enroll = function (e, t) {
            clearTimeout(e._idleTimeoutId), e._idleTimeout = t;
          }, c.unenroll = function (e) {
            clearTimeout(e._idleTimeoutId), e._idleTimeout = -1;
          }, c._unrefActive = c.active = function (e) {
            clearTimeout(e._idleTimeoutId);
            var t = e._idleTimeout;
            0 <= t && (e._idleTimeoutId = setTimeout(function () {
              e._onTimeout && e._onTimeout();
            }, t));
          }, c.setImmediate = "function" == typeof e ? e : function (e) {
            var t = a++,
                n = !(arguments.length < 2) && o.call(arguments, 1);
            return i[t] = !0, r(function () {
              i[t] && (n ? e.apply(null, n) : e.call(null), c.clearImmediate(t));
            }), t;
          }, c.clearImmediate = "function" == typeof t ? t : function (e) {
            delete i[e];
          };
        }).call(this, s("timers").setImmediate, s("timers").clearImmediate);
      }, {
        "process/browser.js": 1,
        timers: 3
      }],
      4: [function (e, t, n) {
        var r = e("promise-polyfill"),
            o = "undefined" != typeof window ? window : Function("return this;")();
        t.exports = {
          boltExport: o.Promise || r
        };
      }, {
        "promise-polyfill": 2
      }]
    }, {}, [4])(4);
  });

  var lr = cr.exports.boltExport,
      fr = function fr(e) {
    var n = U.none(),
        t = [],
        r = function r(e) {
      o() ? a(e) : t.push(e);
    },
        o = function o() {
      return n.isSome();
    },
        i = function i(e) {
      W(e, a);
    },
        a = function a(t) {
      n.each(function (e) {
        setTimeout(function () {
          t(e);
        }, 0);
      });
    };

    return e(function (e) {
      o() || (n = U.some(e), i(t), t = []);
    }), {
      get: r,
      map: function map(n) {
        return fr(function (t) {
          r(function (e) {
            t(n(e));
          });
        });
      },
      isReady: o
    };
  },
      dr = {
    nu: fr,
    pure: function pure(t) {
      return fr(function (e) {
        e(t);
      });
    }
  },
      mr = function mr(e) {
    setTimeout(function () {
      throw e;
    }, 0);
  },
      pr = function pr(n) {
    var e = function e(_e3) {
      n().then(_e3, mr);
    };

    return {
      map: function map(e) {
        return pr(function () {
          return n().then(e);
        });
      },
      bind: function bind(t) {
        return pr(function () {
          return n().then(function (e) {
            return t(e).toPromise();
          });
        });
      },
      anonBind: function anonBind(e) {
        return pr(function () {
          return n().then(function () {
            return e.toPromise();
          });
        });
      },
      toLazy: function toLazy() {
        return dr.nu(e);
      },
      toCached: function toCached() {
        var e = null;
        return pr(function () {
          return null === e && (e = n()), e;
        });
      },
      toPromise: n,
      get: e
    };
  },
      gr = function gr(e) {
    return pr(function () {
      return new lr(e);
    });
  },
      hr = function hr(a, e) {
    return e(function (r) {
      var o = [],
          i = 0;
      0 === a.length ? r([]) : W(a, function (e, t) {
        var n;
        e.get((n = t, function (e) {
          o[n] = e, ++i >= a.length && r(o);
        }));
      });
    });
  },
      vr = function vr(n) {
    return {
      is: function is(e) {
        return n === e;
      },
      isValue: k,
      isError: C,
      getOr: E(n),
      getOrThunk: E(n),
      getOrDie: E(n),
      or: function or(e) {
        return vr(n);
      },
      orThunk: function orThunk(e) {
        return vr(n);
      },
      fold: function fold(e, t) {
        return t(n);
      },
      map: function map(e) {
        return vr(e(n));
      },
      mapError: function mapError(e) {
        return vr(n);
      },
      each: function each(e) {
        e(n);
      },
      bind: function bind(e) {
        return e(n);
      },
      exists: function exists(e) {
        return e(n);
      },
      forall: function forall(e) {
        return e(n);
      },
      toOptional: function toOptional() {
        return U.some(n);
      }
    };
  },
      yr = function yr(n) {
    return {
      is: C,
      isValue: C,
      isError: k,
      getOr: o,
      getOrThunk: function getOrThunk(e) {
        return e();
      },
      getOrDie: function getOrDie() {
        return m(String(n))();
      },
      or: function or(e) {
        return e;
      },
      orThunk: function orThunk(e) {
        return e();
      },
      fold: function fold(e, t) {
        return e(n);
      },
      map: function map(e) {
        return yr(n);
      },
      mapError: function mapError(e) {
        return yr(e(n));
      },
      each: V,
      bind: function bind(e) {
        return yr(n);
      },
      exists: C,
      forall: k,
      toOptional: U.none
    };
  },
      br = {
    value: vr,
    error: yr,
    fromOption: function fromOption(e, t) {
      return e.fold(function () {
        return yr(t);
      }, vr);
    }
  },
      Cr = function Cr(a) {
    if (!S(a)) throw new Error("cases must be an array");
    if (0 === a.length) throw new Error("there must be at least one case");
    var u = [],
        n = {};
    return W(a, function (e, r) {
      var t = ie(e);
      if (1 !== t.length) throw new Error("one and only one name per case");
      var o = t[0],
          i = e[o];
      if (n[o] !== undefined) throw new Error("duplicate key detected:" + o);
      if ("cata" === o) throw new Error("cannot have a case named cata (sorry)");
      if (!S(i)) throw new Error("case arguments must be an array");
      u.push(o), n[o] = function () {
        var e = arguments.length;
        if (e !== i.length) throw new Error("Wrong number of arguments to case " + o + ". Expected " + i.length + " (" + i + "), got " + e);

        for (var n = new Array(e), t = 0; t < n.length; t++) {
          n[t] = arguments[t];
        }

        return {
          fold: function fold() {
            if (arguments.length !== a.length) throw new Error("Wrong number of arguments to fold. Expected " + a.length + ", got " + arguments.length);
            return arguments[r].apply(null, n);
          },
          match: function match(e) {
            var t = ie(e);
            if (u.length !== t.length) throw new Error("Wrong number of arguments to match. Expected: " + u.join(",") + "\nActual: " + t.join(","));
            if (!Q(u, function (e) {
              return M(t, e);
            })) throw new Error("Not all branches were specified when using match. Specified: " + t.join(", ") + "\nRequired: " + u.join(", "));
            return e[o].apply(null, n);
          },
          log: function log(e) {
            console.log(e, {
              constructors: u,
              constructor: o,
              params: n
            });
          }
        };
      };
    }), n;
  },
      wr = (Cr([{
    bothErrors: ["error1", "error2"]
  }, {
    firstError: ["error1", "value2"]
  }, {
    secondError: ["value1", "error2"]
  }, {
    bothValues: ["value1", "value2"]
  }]), function (e) {
    return e.fold(o, o);
  });

  function xr(e, t, n, r, o) {
    return e(n, r) ? U.some(n) : T(o) && o(n) ? U.none() : t(n, r, o);
  }

  var Sr,
      Nr,
      Er,
      kr,
      _r = function _r(e, t, n) {
    for (var r = e.dom, o = T(n) ? n : C; r.parentNode;) {
      r = r.parentNode;
      var i = At.fromDom(r);
      if (t(i)) return U.some(i);
      if (o(i)) break;
    }

    return U.none();
  },
      Ar = function Ar(e, t, n) {
    return xr(function (e, t) {
      return t(e);
    }, _r, e, t, n);
  },
      Rr = function Rr(e, t) {
    return Y(e.dom.childNodes, function (e) {
      return t(At.fromDom(e));
    }).map(At.fromDom);
  },
      Tr = function Tr(e, t, n) {
    return _r(e, function (e) {
      return Tt(e, t);
    }, n);
  },
      Dr = function Dr(e, t) {
    return n = t, o = (r = e) === undefined ? document : r.dom, Dt(o) ? U.none() : U.from(o.querySelector(n)).map(At.fromDom);
    var n, r, o;
  },
      Or = function Or(e, t, n) {
    return xr(Tt, Tr, e, t, n);
  },
      Br = window.Promise ? window.Promise : (Sr = Array.isArray || function (e) {
    return "[object Array]" === Object.prototype.toString.call(e);
  }, Er = (Nr = function Nr(e) {
    if ("object" != _typeof(this)) throw new TypeError("Promises must be constructed via new");
    if ("function" != typeof e) throw new TypeError("not a function");
    this._state = null, this._value = null, this._deferreds = [], zr(e, Pr(Ir, this), Pr(Mr, this));
  }).immediateFn || "function" == typeof setImmediate && setImmediate || function (e) {
    setTimeout(e, 1);
  }, Nr.prototype["catch"] = function (e) {
    return this.then(null, e);
  }, Nr.prototype.then = function (n, r) {
    var o = this;
    return new Nr(function (e, t) {
      Lr.call(o, new Ur(n, r, e, t));
    });
  }, Nr.all = function () {
    var s = Array.prototype.slice.call(1 === arguments.length && Sr(arguments[0]) ? arguments[0] : arguments);
    return new Nr(function (o, i) {
      if (0 === s.length) return o([]);

      for (var a = s.length, e = 0; e < s.length; e++) {
        !function u(t, e) {
          try {
            if (e && ("object" == _typeof(e) || "function" == typeof e)) {
              var n = e.then;
              if ("function" == typeof n) return void n.call(e, function (e) {
                u(t, e);
              }, i);
            }

            s[t] = e, 0 == --a && o(s);
          } catch (r) {
            i(r);
          }
        }(e, s[e]);
      }
    });
  }, Nr.resolve = function (t) {
    return t && "object" == _typeof(t) && t.constructor === Nr ? t : new Nr(function (e) {
      e(t);
    });
  }, Nr.reject = function (n) {
    return new Nr(function (e, t) {
      t(n);
    });
  }, Nr.race = function (o) {
    return new Nr(function (e, t) {
      for (var n = 0, r = o.length; n < r; n++) {
        o[n].then(e, t);
      }
    });
  }, Nr);

  function Pr(e, t) {
    return function () {
      e.apply(t, arguments);
    };
  }

  function Lr(r) {
    var o = this;
    null !== this._state ? Er(function () {
      var e,
          t = o._state ? r.onFulfilled : r.onRejected;

      if (null !== t) {
        try {
          e = t(o._value);
        } catch (n) {
          return void r.reject(n);
        }

        r.resolve(e);
      } else (o._state ? r.resolve : r.reject)(o._value);
    }) : this._deferreds.push(r);
  }

  function Ir(e) {
    try {
      if (e === this) throw new TypeError("A promise cannot be resolved with itself.");

      if (e && ("object" == _typeof(e) || "function" == typeof e)) {
        var t = e.then;
        if ("function" == typeof t) return void zr(Pr(t, e), Pr(Ir, this), Pr(Mr, this));
      }

      this._state = !0, this._value = e, Fr.call(this);
    } catch (n) {
      Mr.call(this, n);
    }
  }

  function Mr(e) {
    this._state = !1, this._value = e, Fr.call(this);
  }

  function Fr() {
    for (var e = 0, t = this._deferreds.length; e < t; e++) {
      Lr.call(this, this._deferreds[e]);
    }

    this._deferreds = null;
  }

  function Ur(e, t, n, r) {
    this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof t ? t : null, this.resolve = n, this.reject = r;
  }

  function zr(e, t, n) {
    var r = !1;

    try {
      e(function (e) {
        r || (r = !0, t(e));
      }, function (e) {
        r || (r = !0, n(e));
      });
    } catch (o) {
      if (r) return;
      r = !0, n(o);
    }
  }

  var jr = function jr(e, t) {
    return "number" != typeof t && (t = 0), setTimeout(e, t);
  },
      Hr = function Hr(e, t) {
    return "number" != typeof t && (t = 1), setInterval(e, t);
  },
      Vr = function Vr(n, r) {
    var o,
        e = function e() {
      for (var e = [], t = 0; t < arguments.length; t++) {
        e[t] = arguments[t];
      }

      clearTimeout(o), o = jr(function () {
        n.apply(this, e);
      }, r);
    };

    return e.stop = function () {
      clearTimeout(o);
    }, e;
  },
      qr = {
    requestAnimationFrame: function requestAnimationFrame(e, t) {
      kr ? kr.then(e) : kr = new Br(function (e) {
        !function (e, t) {
          for (var n = window.requestAnimationFrame, r = ["ms", "moz", "webkit"], o = 0; o < r.length && !n; o++) {
            n = window[r[o] + "RequestAnimationFrame"];
          }

          (n = n || function (e) {
            window.setTimeout(e, 0);
          })(e, t);
        }(e, t = t || document.body);
      }).then(e);
    },
    setTimeout: jr,
    setInterval: Hr,
    setEditorTimeout: function setEditorTimeout(e, t, n) {
      return jr(function () {
        e.removed || t();
      }, n);
    },
    setEditorInterval: function setEditorInterval(e, t, n) {
      var r = Hr(function () {
        e.removed ? clearInterval(r) : t();
      }, n);
      return r;
    },
    debounce: Vr,
    throttle: Vr,
    clearInterval: function (_clearInterval) {
      function clearInterval(_x2) {
        return _clearInterval.apply(this, arguments);
      }

      clearInterval.toString = function () {
        return _clearInterval.toString();
      };

      return clearInterval;
    }(function (e) {
      return clearInterval(e);
    }),
    clearTimeout: function (_clearTimeout) {
      function clearTimeout(_x3) {
        return _clearTimeout.apply(this, arguments);
      }

      clearTimeout.toString = function () {
        return _clearTimeout.toString();
      };

      return clearTimeout;
    }(function (e) {
      return clearTimeout(e);
    })
  };

  function $r(m, p) {
    void 0 === p && (p = {});

    var g = 0,
        h = {},
        v = At.fromDom(m),
        y = Vt(v),
        b = p.maxLoadTime || 5e3,
        n = function n(e, t, _n2) {
      var r,
          o = kt._addCacheSuffix(e),
          i = ge(h, o).getOrThunk(function () {
        return {
          id: "mce-u" + g++,
          passed: [],
          failed: [],
          count: 0
        };
      });

      (h[o] = i).count++;

      var a,
          u,
          s,
          c = function c(e, t) {
        for (var n = e.length; n--;) {
          e[n]();
        }

        i.status = t, i.passed = [], i.failed = [], r && (r.onload = null, r.onerror = null, r = null);
      },
          l = function l() {
        return c(i.passed, 2);
      },
          f = function f() {
        return c(i.failed, 3);
      },
          d = function d() {
        var e;
        e = d, function () {
          for (var e = m.styleSheets, t = e.length; t--;) {
            var n = e[t].ownerNode;
            if (n && n.id === r.id) return l(), 1;
          }
        }() || (Date.now() - u < b ? qr.setTimeout(e) : f());
      };

      t && i.passed.push(t), _n2 && i.failed.push(_n2), 1 !== i.status && (2 !== i.status ? 3 !== i.status ? (i.status = 1, a = At.fromTag("link", y.dom), Yn(a, {
        rel: "stylesheet",
        type: "text/css",
        id: i.id
      }), u = Date.now(), p.contentCssCors && Xn(a, "crossOrigin", "anonymous"), p.referrerPolicy && Xn(a, "referrerpolicy", p.referrerPolicy), (r = a.dom).onload = d, r.onerror = f, s = a, fn(on(v), s), Xn(a, "href", o)) : f() : l());
    },
        o = function o(t) {
      return gr(function (e) {
        n(t, a(e, E(br.value(t))), a(e, E(br.error(t))));
      });
    },
        t = function t(e) {
      var r = kt._addCacheSuffix(e);

      ge(h, r).each(function (e) {
        var t, n;
        0 == --e.count && (delete h[r], t = e.id, n = on(v), Dr(n, "#" + t).each(pn));
      });
    };

    return {
      load: n,
      loadAll: function loadAll(e, n, r) {
        var t;
        t = z(e, o), hr(t, gr).get(function (e) {
          var t = function (e, t) {
            for (var n = [], r = [], o = 0, i = e.length; o < i; o++) {
              var a = e[o];
              (t(a, o) ? n : r).push(a);
            }

            return {
              pass: n,
              fail: r
            };
          }(e, function (e) {
            return e.isValue();
          });

          0 < t.fail.length ? r(t.fail.map(wr)) : n(t.pass.map(wr));
        });
      },
      unload: t,
      unloadAll: function unloadAll(e) {
        W(e, function (e) {
          t(e);
        });
      },
      _setReferrerPolicy: function _setReferrerPolicy(e) {
        p.referrerPolicy = e;
      }
    };
  }

  var Wr,
      Kr = (Wr = new WeakMap(), {
    forElement: function forElement(e, t) {
      var n = rn(e).dom;
      return U.from(Wr.get(n)).getOrThunk(function () {
        var e = $r(n, t);
        return Wr.set(n, e), e;
      });
    }
  }),
      Xr = (Yr.prototype.current = function () {
    return this.node;
  }, Yr.prototype.next = function (e) {
    return this.node = this.findSibling(this.node, "firstChild", "nextSibling", e), this.node;
  }, Yr.prototype.prev = function (e) {
    return this.node = this.findSibling(this.node, "lastChild", "previousSibling", e), this.node;
  }, Yr.prototype.prev2 = function (e) {
    return this.node = this.findPreviousNode(this.node, "lastChild", "previousSibling", e), this.node;
  }, Yr.prototype.findSibling = function (e, t, n, r) {
    var o, i;

    if (e) {
      if (!r && e[t]) return e[t];

      if (e !== this.rootNode) {
        if (o = e[n]) return o;

        for (i = e.parentNode; i && i !== this.rootNode; i = i.parentNode) {
          if (o = i[n]) return o;
        }
      }
    }
  }, Yr.prototype.findPreviousNode = function (e, t, n, r) {
    var o, i, a;

    if (e) {
      if (o = e[n], this.rootNode && o === this.rootNode) return;

      if (o) {
        if (!r) for (a = o[t]; a; a = a[t]) {
          if (!a[t]) return a;
        }
        return o;
      }

      if ((i = e.parentNode) && i !== this.rootNode) return i;
    }
  }, Yr);

  function Yr(e, t) {
    this.node = e, this.rootNode = t, this.current = this.current.bind(this), this.next = this.next.bind(this), this.prev = this.prev.bind(this), this.prev2 = this.prev2.bind(this);
  }

  var Gr,
      Jr,
      Qr = function Qr(t) {
    var n;
    return function (e) {
      return (n = n || function (e, t) {
        for (var n = {}, r = 0, o = e.length; r < o; r++) {
          var i = e[r];
          n[String(i)] = t(i, r);
        }

        return n;
      }(t, k)).hasOwnProperty(Lt(e));
    };
  },
      Zr = Qr(["h1", "h2", "h3", "h4", "h5", "h6"]),
      eo = Qr(["article", "aside", "details", "div", "dt", "figcaption", "footer", "form", "fieldset", "header", "hgroup", "html", "main", "nav", "section", "summary", "body", "p", "dl", "multicol", "dd", "figure", "address", "center", "blockquote", "h1", "h2", "h3", "h4", "h5", "h6", "listing", "xmp", "pre", "plaintext", "menu", "dir", "ul", "ol", "li", "hr", "table", "tbody", "thead", "tfoot", "th", "tr", "td", "caption"]),
      to = function to(e) {
    return Ft(e) && !eo(e);
  },
      no = function no(e) {
    return Ft(e) && "br" === Lt(e);
  },
      ro = Qr(["h1", "h2", "h3", "h4", "h5", "h6", "p", "div", "address", "pre", "form", "blockquote", "center", "dir", "fieldset", "header", "footer", "article", "section", "hgroup", "aside", "nav", "figure"]),
      oo = Qr(["ul", "ol", "dl"]),
      io = Qr(["li", "dd", "dt"]),
      ao = Qr(["thead", "tbody", "tfoot"]),
      uo = Qr(["td", "th"]),
      so = Qr(["pre", "script", "textarea", "style"]),
      co = "\uFEFF",
      lo = "\xa0",
      fo = co,
      mo = function mo(e) {
    return e === co;
  },
      po = function po(e) {
    return e.replace(/\uFEFF/g, "");
  },
      go = An,
      ho = In,
      vo = function vo(e) {
    return ho(e) && (e = e.parentNode), go(e) && e.hasAttribute("data-mce-caret");
  },
      yo = function yo(e) {
    return ho(e) && mo(e.data);
  },
      bo = function bo(e) {
    return vo(e) || yo(e);
  },
      Co = function Co(e) {
    return e.firstChild !== e.lastChild || !zn(e.firstChild);
  },
      wo = function wo(e) {
    var t = e.container();
    return !!In(t) && (t.data.charAt(e.offset()) === fo || e.isAtStart() && yo(t.previousSibling));
  },
      xo = function xo(e) {
    var t = e.container();
    return !!In(t) && (t.data.charAt(e.offset() - 1) === fo || e.isAtEnd() && yo(t.nextSibling));
  },
      So = function So(e, t, n) {
    var r,
        o = t.ownerDocument.createElement(e);
    o.setAttribute("data-mce-caret", n ? "before" : "after"), o.setAttribute("data-mce-bogus", "all"), o.appendChild(((r = document.createElement("br")).setAttribute("data-mce-bogus", "1"), r));
    var i = t.parentNode;
    return n ? i.insertBefore(o, t) : t.nextSibling ? i.insertBefore(o, t.nextSibling) : i.appendChild(o), o;
  },
      No = function No(e) {
    return ho(e) && e.data[0] === fo;
  },
      Eo = function Eo(e) {
    return ho(e) && e.data[e.data.length - 1] === fo;
  },
      ko = function ko(e) {
    return e && e.hasAttribute("data-mce-caret") ? (t = e.getElementsByTagName("br"), n = t[t.length - 1], On(n) && n.parentNode.removeChild(n), e.removeAttribute("data-mce-caret"), e.removeAttribute("data-mce-bogus"), e.removeAttribute("style"), e.removeAttribute("_moz_abspos"), e) : null;
    var t, n;
  },
      _o = Hn,
      Ao = Vn,
      Ro = zn,
      To = In,
      Do = Rn(["script", "style", "textarea"]),
      Oo = Rn(["img", "input", "textarea", "hr", "iframe", "video", "audio", "object", "embed"]),
      Bo = Rn(["table"]),
      Po = bo,
      Lo = function Lo(e) {
    return !Po(e) && (To(e) ? !Do(e.parentNode) : Oo(e) || Ro(e) || Bo(e) || Io(e));
  },
      Io = function Io(e) {
    return !1 === (An(t = e) && "true" === t.getAttribute("unselectable")) && Ao(e);
    var t;
  },
      Mo = function Mo(e, t) {
    return Lo(e) && function (e, t) {
      for (e = e.parentNode; e && e !== t; e = e.parentNode) {
        if (Io(e)) return !1;
        if (_o(e)) return !0;
      }

      return !0;
    }(e, t);
  },
      Fo = /^[ \t\r\n]*$/,
      Uo = function Uo(e) {
    return Fo.test(e);
  },
      zo = function zo(e, t) {
    var n,
        r,
        o,
        i = At.fromDom(t),
        a = At.fromDom(e);
    return n = a, r = "pre,code", o = N(Ot, i), Tr(n, r, o).isSome();
  },
      jo = function jo(e, t) {
    return Lo(e) && !1 === (o = t, In(r = e) && Uo(r.data) && !1 === zo(r, o)) || An(n = e) && "A" === n.nodeName && !n.hasAttribute("href") && (n.hasAttribute("name") || n.hasAttribute("id")) || Ho(e);
    var n, r, o;
  },
      Ho = Dn("data-mce-bookmark"),
      Vo = Dn("data-mce-bogus"),
      qo = (Gr = "data-mce-bogus", Jr = "all", function (e) {
    return An(e) && e.getAttribute(Gr) === Jr;
  }),
      $o = function $o(e, t) {
    return void 0 === t && (t = !0), function (e, t) {
      var n,
          r = 0;
      if (jo(e, e)) return !1;
      if (!(n = e.firstChild)) return !0;
      var o = new Xr(n, e);

      do {
        if (t) {
          if (qo(n)) {
            n = o.next(!0);
            continue;
          }

          if (Vo(n)) {
            n = o.next();
            continue;
          }
        }

        if (zn(n)) r++, n = o.next();else {
          if (jo(n, e)) return !1;
          n = o.next();
        }
      } while (n);

      return r <= 1;
    }(e.dom, t);
  },
      Wo = function Wo(e, t) {
    return D(e) && (jo(e, t) || to(At.fromDom(e)));
  },
      Ko = function Ko(e) {
    return "span" === e.nodeName.toLowerCase() && "bookmark" === e.getAttribute("data-mce-type");
  },
      Xo = function Xo(e, t) {
    return In(e) && 0 < e.data.length && (o = new Xr(n = e, r = t).prev(!1), i = new Xr(n, r).next(!1), a = R(o) || Wo(o, r), u = R(i) || Wo(i, r), a && u);
    var n, r, o, i, a, u;
  },
      Yo = function Yo(e, t, n) {
    var r = n || t;
    if (An(t) && Ko(t)) return t;

    for (var o, i, a, u = t.childNodes, s = u.length - 1; 0 <= s; s--) {
      Yo(e, u[s], r);
    }

    return !An(t) || 1 === (o = t.childNodes).length && Ko(o[0]) && t.parentNode.insertBefore(o[0], t), Un(a = t) || Fn(a) || jo(t, r) || An(i = t) && 0 < i.childNodes.length || Xo(t, r) || e.remove(t), t;
  },
      Go = kt.makeMap,
      Jo = /[&<>\"\u0060\u007E-\uD7FF\uE000-\uFFEF]|[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
      Qo = /[<>&\u007E-\uD7FF\uE000-\uFFEF]|[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
      Zo = /[<>&\"\']/g,
      ei = /&#([a-z0-9]+);?|&([a-z0-9]+);/gi,
      ti = {
    128: "\u20AC",
    130: "\u201A",
    131: "\u0192",
    132: "\u201E",
    133: "\u2026",
    134: "\u2020",
    135: "\u2021",
    136: "\u02C6",
    137: "\u2030",
    138: "\u0160",
    139: "\u2039",
    140: "\u0152",
    142: "\u017D",
    145: "\u2018",
    146: "\u2019",
    147: "\u201C",
    148: "\u201D",
    149: "\u2022",
    150: "\u2013",
    151: "\u2014",
    152: "\u02DC",
    153: "\u2122",
    154: "\u0161",
    155: "\u203A",
    156: "\u0153",
    158: "\u017E",
    159: "\u0178"
  },
      ni = {
    '"': "&quot;",
    "'": "&#39;",
    "<": "&lt;",
    ">": "&gt;",
    "&": "&amp;",
    "`": "&#96;"
  },
      ri = {
    "&lt;": "<",
    "&gt;": ">",
    "&amp;": "&",
    "&quot;": '"',
    "&apos;": "'"
  },
      oi = function oi(e, t) {
    var n,
        r,
        o,
        i = {};

    if (e) {
      for (e = e.split(","), t = t || 10, n = 0; n < e.length; n += 2) {
        r = String.fromCharCode(parseInt(e[n], t)), ni[r] || (o = "&" + e[n + 1] + ";", i[r] = o, i[o] = r);
      }

      return i;
    }
  },
      ii = oi("50,nbsp,51,iexcl,52,cent,53,pound,54,curren,55,yen,56,brvbar,57,sect,58,uml,59,copy,5a,ordf,5b,laquo,5c,not,5d,shy,5e,reg,5f,macr,5g,deg,5h,plusmn,5i,sup2,5j,sup3,5k,acute,5l,micro,5m,para,5n,middot,5o,cedil,5p,sup1,5q,ordm,5r,raquo,5s,frac14,5t,frac12,5u,frac34,5v,iquest,60,Agrave,61,Aacute,62,Acirc,63,Atilde,64,Auml,65,Aring,66,AElig,67,Ccedil,68,Egrave,69,Eacute,6a,Ecirc,6b,Euml,6c,Igrave,6d,Iacute,6e,Icirc,6f,Iuml,6g,ETH,6h,Ntilde,6i,Ograve,6j,Oacute,6k,Ocirc,6l,Otilde,6m,Ouml,6n,times,6o,Oslash,6p,Ugrave,6q,Uacute,6r,Ucirc,6s,Uuml,6t,Yacute,6u,THORN,6v,szlig,70,agrave,71,aacute,72,acirc,73,atilde,74,auml,75,aring,76,aelig,77,ccedil,78,egrave,79,eacute,7a,ecirc,7b,euml,7c,igrave,7d,iacute,7e,icirc,7f,iuml,7g,eth,7h,ntilde,7i,ograve,7j,oacute,7k,ocirc,7l,otilde,7m,ouml,7n,divide,7o,oslash,7p,ugrave,7q,uacute,7r,ucirc,7s,uuml,7t,yacute,7u,thorn,7v,yuml,ci,fnof,sh,Alpha,si,Beta,sj,Gamma,sk,Delta,sl,Epsilon,sm,Zeta,sn,Eta,so,Theta,sp,Iota,sq,Kappa,sr,Lambda,ss,Mu,st,Nu,su,Xi,sv,Omicron,t0,Pi,t1,Rho,t3,Sigma,t4,Tau,t5,Upsilon,t6,Phi,t7,Chi,t8,Psi,t9,Omega,th,alpha,ti,beta,tj,gamma,tk,delta,tl,epsilon,tm,zeta,tn,eta,to,theta,tp,iota,tq,kappa,tr,lambda,ts,mu,tt,nu,tu,xi,tv,omicron,u0,pi,u1,rho,u2,sigmaf,u3,sigma,u4,tau,u5,upsilon,u6,phi,u7,chi,u8,psi,u9,omega,uh,thetasym,ui,upsih,um,piv,812,bull,816,hellip,81i,prime,81j,Prime,81u,oline,824,frasl,88o,weierp,88h,image,88s,real,892,trade,89l,alefsym,8cg,larr,8ch,uarr,8ci,rarr,8cj,darr,8ck,harr,8dl,crarr,8eg,lArr,8eh,uArr,8ei,rArr,8ej,dArr,8ek,hArr,8g0,forall,8g2,part,8g3,exist,8g5,empty,8g7,nabla,8g8,isin,8g9,notin,8gb,ni,8gf,prod,8gh,sum,8gi,minus,8gn,lowast,8gq,radic,8gt,prop,8gu,infin,8h0,ang,8h7,and,8h8,or,8h9,cap,8ha,cup,8hb,int,8hk,there4,8hs,sim,8i5,cong,8i8,asymp,8j0,ne,8j1,equiv,8j4,le,8j5,ge,8k2,sub,8k3,sup,8k4,nsub,8k6,sube,8k7,supe,8kl,oplus,8kn,otimes,8l5,perp,8m5,sdot,8o8,lceil,8o9,rceil,8oa,lfloor,8ob,rfloor,8p9,lang,8pa,rang,9ea,loz,9j0,spades,9j3,clubs,9j5,hearts,9j6,diams,ai,OElig,aj,oelig,b0,Scaron,b1,scaron,bo,Yuml,m6,circ,ms,tilde,802,ensp,803,emsp,809,thinsp,80c,zwnj,80d,zwj,80e,lrm,80f,rlm,80j,ndash,80k,mdash,80o,lsquo,80p,rsquo,80q,sbquo,80s,ldquo,80t,rdquo,80u,bdquo,810,dagger,811,Dagger,81g,permil,81p,lsaquo,81q,rsaquo,85c,euro", 32),
      ai = function ai(e, t) {
    return e.replace(t ? Jo : Qo, function (e) {
      return ni[e] || e;
    });
  },
      ui = function ui(e, t) {
    return e.replace(t ? Jo : Qo, function (e) {
      return 1 < e.length ? "&#" + (1024 * (e.charCodeAt(0) - 55296) + (e.charCodeAt(1) - 56320) + 65536) + ";" : ni[e] || "&#" + e.charCodeAt(0) + ";";
    });
  },
      si = function si(e, t, n) {
    return n = n || ii, e.replace(t ? Jo : Qo, function (e) {
      return ni[e] || n[e] || e;
    });
  },
      ci = {
    encodeRaw: ai,
    encodeAllRaw: function encodeAllRaw(e) {
      return ("" + e).replace(Zo, function (e) {
        return ni[e] || e;
      });
    },
    encodeNumeric: ui,
    encodeNamed: si,
    getEncodeFunc: function getEncodeFunc(e, t) {
      var n = oi(t) || ii,
          r = Go(e.replace(/\+/g, ","));
      return r.named && r.numeric ? function (e, t) {
        return e.replace(t ? Jo : Qo, function (e) {
          return ni[e] !== undefined ? ni[e] : n[e] !== undefined ? n[e] : 1 < e.length ? "&#" + (1024 * (e.charCodeAt(0) - 55296) + (e.charCodeAt(1) - 56320) + 65536) + ";" : "&#" + e.charCodeAt(0) + ";";
        });
      } : r.named ? t ? function (e, t) {
        return si(e, t, n);
      } : si : r.numeric ? ui : ai;
    },
    decode: function decode(e) {
      return e.replace(ei, function (e, t) {
        return t ? 65535 < (t = "x" === t.charAt(0).toLowerCase() ? parseInt(t.substr(1), 16) : parseInt(t, 10)) ? (t -= 65536, String.fromCharCode(55296 + (t >> 10), 56320 + (1023 & t))) : ti[t] || String.fromCharCode(t) : ri[e] || ii[e] || (n = e, (r = At.fromTag("div").dom).innerHTML = n, r.textContent || r.innerText || n);
        var n, r;
      });
    }
  },
      li = {},
      fi = {},
      di = kt.makeMap,
      mi = kt.each,
      pi = kt.extend,
      gi = kt.explode,
      hi = kt.inArray,
      vi = function vi(e, t) {
    return (e = kt.trim(e)) ? e.split(t || " ") : [];
  },
      yi = function yi(e) {
    var s,
        t,
        n,
        r,
        o,
        i,
        c = {},
        a = function a(e, t, n) {
      var r,
          o,
          i = function i(e, t) {
        for (var n = {}, r = 0, o = e.length; r < o; r++) {
          n[e[r]] = t || {};
        }

        return n;
      };

      t = t || "", "string" == typeof (n = n || []) && (n = vi(n));

      for (var a = vi(e), u = a.length; u--;) {
        o = {
          attributes: i(r = vi([s, t].join(" "))),
          attributesOrder: r,
          children: i(n, fi)
        }, c[a[u]] = o;
      }
    },
        u = function u(e, t) {
      for (var n, r, o, i = vi(e), a = i.length, u = vi(t); a--;) {
        for (n = c[i[a]], r = 0, o = u.length; r < o; r++) {
          n.attributes[u[r]] = {}, n.attributesOrder.push(u[r]);
        }
      }
    };

    return li[e] ? li[e] : (s = "id accesskey class dir lang style tabindex title role", t = "address blockquote div dl fieldset form h1 h2 h3 h4 h5 h6 hr menu ol p pre table ul", n = "a abbr b bdo br button cite code del dfn em embed i iframe img input ins kbd label map noscript object q s samp script select small span strong sub sup textarea u var #text #comment", "html4" !== e && (s += " contenteditable contextmenu draggable dropzone hidden spellcheck translate", t += " article aside details dialog figure main header footer hgroup section nav", n += " audio canvas command datalist mark meter output picture progress time wbr video ruby bdi keygen"), "html5-strict" !== e && (s += " xml:lang", n = [n, i = "acronym applet basefont big font strike tt"].join(" "), mi(vi(i), function (e) {
      a(e, "", n);
    }), t = [t, o = "center dir isindex noframes"].join(" "), r = [t, n].join(" "), mi(vi(o), function (e) {
      a(e, "", r);
    })), r = r || [t, n].join(" "), a("html", "manifest", "head body"), a("head", "", "base command link meta noscript script style title"), a("title hr noscript br"), a("base", "href target"), a("link", "href rel media hreflang type sizes hreflang"), a("meta", "name http-equiv content charset"), a("style", "media type scoped"), a("script", "src async defer type charset"), a("body", "onafterprint onbeforeprint onbeforeunload onblur onerror onfocus onhashchange onload onmessage onoffline ononline onpagehide onpageshow onpopstate onresize onscroll onstorage onunload", r), a("address dt dd div caption", "", r), a("h1 h2 h3 h4 h5 h6 pre p abbr code var samp kbd sub sup i b u bdo span legend em strong small s cite dfn", "", n), a("blockquote", "cite", r), a("ol", "reversed start type", "li"), a("ul", "", "li"), a("li", "value", r), a("dl", "", "dt dd"), a("a", "href target rel media hreflang type", n), a("q", "cite", n), a("ins del", "cite datetime", r), a("img", "src sizes srcset alt usemap ismap width height"), a("iframe", "src name width height", r), a("embed", "src type width height"), a("object", "data type typemustmatch name usemap form width height", [r, "param"].join(" ")), a("param", "name value"), a("map", "name", [r, "area"].join(" ")), a("area", "alt coords shape href target rel media hreflang type"), a("table", "border", "caption colgroup thead tfoot tbody tr" + ("html4" === e ? " col" : "")), a("colgroup", "span", "col"), a("col", "span"), a("tbody thead tfoot", "", "tr"), a("tr", "", "td th"), a("td", "colspan rowspan headers", r), a("th", "colspan rowspan headers scope abbr", r), a("form", "accept-charset action autocomplete enctype method name novalidate target", r), a("fieldset", "disabled form name", [r, "legend"].join(" ")), a("label", "form for", n), a("input", "accept alt autocomplete checked dirname disabled form formaction formenctype formmethod formnovalidate formtarget height list max maxlength min multiple name pattern readonly required size src step type value width"), a("button", "disabled form formaction formenctype formmethod formnovalidate formtarget name type value", "html4" === e ? r : n), a("select", "disabled form multiple name required size", "option optgroup"), a("optgroup", "disabled label", "option"), a("option", "disabled label selected value"), a("textarea", "cols dirname disabled form maxlength name readonly required rows wrap"), a("menu", "type label", [r, "li"].join(" ")), a("noscript", "", r), "html4" !== e && (a("wbr"), a("ruby", "", [n, "rt rp"].join(" ")), a("figcaption", "", r), a("mark rt rp summary bdi", "", n), a("canvas", "width height", r), a("video", "src crossorigin poster preload autoplay mediagroup loop muted controls width height buffered", [r, "track source"].join(" ")), a("audio", "src crossorigin preload autoplay mediagroup loop muted controls buffered volume", [r, "track source"].join(" ")), a("picture", "", "img source"), a("source", "src srcset type media sizes"), a("track", "kind src srclang label default"), a("datalist", "", [n, "option"].join(" ")), a("article section nav aside main header footer", "", r), a("hgroup", "", "h1 h2 h3 h4 h5 h6"), a("figure", "", [r, "figcaption"].join(" ")), a("time", "datetime", n), a("dialog", "open", r), a("command", "type label icon disabled checked radiogroup command"), a("output", "for form name", n), a("progress", "value max", n), a("meter", "value min max low high optimum", n), a("details", "open", [r, "summary"].join(" ")), a("keygen", "autofocus challenge disabled form keytype name")), "html5-strict" !== e && (u("script", "language xml:space"), u("style", "xml:space"), u("object", "declare classid code codebase codetype archive standby align border hspace vspace"), u("embed", "align name hspace vspace"), u("param", "valuetype type"), u("a", "charset name rev shape coords"), u("br", "clear"), u("applet", "codebase archive code object alt name width height align hspace vspace"), u("img", "name longdesc align border hspace vspace"), u("iframe", "longdesc frameborder marginwidth marginheight scrolling align"), u("font basefont", "size color face"), u("input", "usemap align"), u("select"), u("textarea"), u("h1 h2 h3 h4 h5 h6 div p legend caption", "align"), u("ul", "type compact"), u("li", "type"), u("ol dl menu dir", "compact"), u("pre", "width xml:space"), u("hr", "align noshade size width"), u("isindex", "prompt"), u("table", "summary width frame rules cellspacing cellpadding align bgcolor"), u("col", "width align char charoff valign"), u("colgroup", "width align char charoff valign"), u("thead", "align char charoff valign"), u("tr", "align char charoff valign bgcolor"), u("th", "axis align char charoff valign nowrap bgcolor width height"), u("form", "accept"), u("td", "abbr axis scope align char charoff valign nowrap bgcolor width height"), u("tfoot", "align char charoff valign"), u("tbody", "align char charoff valign"), u("area", "nohref"), u("body", "background bgcolor text link vlink alink")), "html4" !== e && (u("input button select textarea", "autofocus"), u("input textarea", "placeholder"), u("a", "download"), u("link script img", "crossorigin"), u("img", "loading"), u("iframe", "sandbox seamless allowfullscreen loading")), mi(vi("a form meter progress dfn"), function (e) {
      c[e] && delete c[e].children[e];
    }), delete c.caption.children.table, delete c.script, li[e] = c);
  },
      bi = function bi(e, n) {
    var r;
    return e && (r = {}, "string" == typeof e && (e = {
      "*": e
    }), mi(e, function (e, t) {
      r[t] = r[t.toUpperCase()] = ("map" === n ? di : gi)(e, /[, ]/);
    })), r;
  };

  function Ci(i) {
    var S = {},
        u = {},
        N = [],
        s = {},
        t = {},
        e = function e(_e4, t, n) {
      var r = i[_e4];
      return r ? r = di(r, /[, ]/, di(r.toUpperCase(), /[, ]/)) : (r = li[_e4]) || (r = di(t, " ", di(t.toUpperCase(), " ")), r = pi(r, n), li[_e4] = r), r;
    },
        n = yi((i = i || {}).schema);

    !1 === i.verify_html && (i.valid_elements = "*[*]");
    var r = bi(i.valid_styles),
        o = bi(i.invalid_styles, "map"),
        a = bi(i.valid_classes, "map"),
        c = e("whitespace_elements", "pre script noscript style textarea video audio iframe object code"),
        l = e("self_closing_elements", "colgroup dd dt li option p td tfoot th thead tr"),
        f = e("short_ended_elements", "area base basefont br col frame hr img input isindex link meta param embed source wbr track"),
        d = e("boolean_attributes", "checked compact declare defer disabled ismap multiple nohref noresize noshade nowrap readonly selected autoplay loop controls"),
        m = "td th iframe video audio object script code",
        p = e("non_empty_elements", m + " pre", f),
        g = e("move_caret_before_on_enter_elements", m + " table", f),
        h = e("text_block_elements", "h1 h2 h3 h4 h5 h6 p div address pre form blockquote center dir fieldset header footer article section hgroup aside main nav figure"),
        v = e("block_elements", "hr table tbody thead tfoot th tr td li ol ul caption dl dt dd noscript menu isindex option datalist select optgroup figcaption details summary", h),
        y = e("text_inline_elements", "span strong b em i font strike u var cite dfn code mark q sup sub samp");
    mi((i.special || "script noscript iframe noframes noembed title style textarea xmp").split(" "), function (e) {
      t[e] = new RegExp("</" + e + "[^>]*>", "gi");
    });

    var E = function E(e) {
      return new RegExp("^" + e.replace(/([?+*])/g, ".$1") + "$");
    },
        b = function b(e) {
      var t,
          n,
          r,
          o,
          i,
          a,
          u,
          s,
          c,
          l,
          f,
          d,
          m,
          p,
          g,
          h,
          v,
          y,
          b = /^([#+\-])?([^\[!\/]+)(?:\/([^\[!]+))?(?:(!?)\[([^\]]+)])?$/,
          C = /^([!\-])?(\w+[\\:]:\w+|[^=:<]+)?(?:([=:<])(.*))?$/,
          w = /[*?+]/;

      if (e) {
        var x = vi(e, ",");

        for (S["@"] && (h = S["@"].attributes, v = S["@"].attributesOrder), t = 0, n = x.length; t < n; t++) {
          if (i = b.exec(x[t])) {
            if (p = i[1], c = i[2], g = i[3], s = i[5], a = {
              attributes: d = {},
              attributesOrder: m = []
            }, "#" === p && (a.paddEmpty = !0), "-" === p && (a.removeEmpty = !0), "!" === i[4] && (a.removeEmptyAttrs = !0), h && (ue(h, function (e, t) {
              d[t] = e;
            }), m.push.apply(m, v)), s) for (r = 0, o = (s = vi(s, "|")).length; r < o; r++) {
              if (i = C.exec(s[r])) {
                if (u = {}, f = i[1], l = i[2].replace(/[\\:]:/g, ":"), p = i[3], y = i[4], "!" === f && (a.attributesRequired = a.attributesRequired || [], a.attributesRequired.push(l), u.required = !0), "-" === f) {
                  delete d[l], m.splice(hi(m, l), 1);
                  continue;
                }

                p && ("=" === p && (a.attributesDefault = a.attributesDefault || [], a.attributesDefault.push({
                  name: l,
                  value: y
                }), u.defaultValue = y), ":" === p && (a.attributesForced = a.attributesForced || [], a.attributesForced.push({
                  name: l,
                  value: y
                }), u.forcedValue = y), "<" === p && (u.validValues = di(y, "?"))), w.test(l) ? (a.attributePatterns = a.attributePatterns || [], u.pattern = E(l), a.attributePatterns.push(u)) : (d[l] || m.push(l), d[l] = u);
              }
            }
            h || "@" !== c || (h = d, v = m), g && (a.outputName = c, S[g] = a), w.test(c) ? (a.pattern = E(c), N.push(a)) : S[c] = a;
          }
        }
      }
    },
        C = function C(e) {
      S = {}, N = [], b(e), mi(n, function (e, t) {
        u[t] = e.children;
      });
    },
        w = function w(e) {
      var a = /^(~)?(.+)$/;
      e && (li.text_block_elements = li.block_elements = null, mi(vi(e, ","), function (e) {
        var t,
            n = a.exec(e),
            r = "~" === n[1],
            o = r ? "span" : "div",
            i = n[2];
        u[i] = u[o], s[i] = o, r || (v[i.toUpperCase()] = {}, v[i] = {}), S[i] || (t = S[o], delete (t = pi({}, t)).removeEmptyAttrs, delete t.removeEmpty, S[i] = t), mi(u, function (e, t) {
          e[o] && (u[t] = e = pi({}, u[t]), e[i] = e[o]);
        });
      }));
    },
        x = function x(e) {
      var o = /^([+\-]?)([A-Za-z0-9_\-.\u00b7\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u037d\u037f-\u1fff\u200c-\u200d\u203f-\u2040\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd]+)\[([^\]]+)]$/;
      li[i.schema] = null, e && mi(vi(e, ","), function (e) {
        var t,
            n,
            r = o.exec(e);
        r && (n = r[1], t = n ? u[r[2]] : u[r[2]] = {
          "#comment": {}
        }, t = u[r[2]], mi(vi(r[3], "|"), function (e) {
          "-" === n ? delete t[e] : t[e] = {};
        }));
      });
    },
        k = function k(e) {
      var t,
          n = S[e];
      if (n) return n;

      for (t = N.length; t--;) {
        if ((n = N[t]).pattern.test(e)) return n;
      }
    };

    i.valid_elements ? C(i.valid_elements) : (mi(n, function (e, t) {
      S[t] = {
        attributes: e.attributes,
        attributesOrder: e.attributesOrder
      }, u[t] = e.children;
    }), "html5" !== i.schema && mi(vi("strong/b em/i"), function (e) {
      var t = vi(e, "/");
      S[t[1]].outputName = t[0];
    }), mi(vi("ol ul sub sup blockquote span font a table tbody strong em b i"), function (e) {
      S[e] && (S[e].removeEmpty = !0);
    }), mi(vi("p h1 h2 h3 h4 h5 h6 th td pre div address caption li"), function (e) {
      S[e].paddEmpty = !0;
    }), mi(vi("span"), function (e) {
      S[e].removeEmptyAttrs = !0;
    })), w(i.custom_elements), x(i.valid_children), b(i.extended_valid_elements), x("+ol[ul|ol],+ul[ul|ol]"), mi({
      dd: "dl",
      dt: "dl",
      li: "ul ol",
      td: "tr",
      th: "tr",
      tr: "tbody thead tfoot",
      tbody: "table",
      thead: "table",
      tfoot: "table",
      legend: "fieldset",
      area: "map",
      param: "video audio object"
    }, function (e, t) {
      S[t] && (S[t].parentsRequired = vi(e));
    }), i.invalid_elements && mi(gi(i.invalid_elements), function (e) {
      S[e] && delete S[e];
    }), k("span") || b("span[!data-mce-type|*]");
    return {
      children: u,
      elements: S,
      getValidStyles: function getValidStyles() {
        return r;
      },
      getValidClasses: function getValidClasses() {
        return a;
      },
      getBlockElements: function getBlockElements() {
        return v;
      },
      getInvalidStyles: function getInvalidStyles() {
        return o;
      },
      getShortEndedElements: function getShortEndedElements() {
        return f;
      },
      getTextBlockElements: function getTextBlockElements() {
        return h;
      },
      getTextInlineElements: function getTextInlineElements() {
        return y;
      },
      getBoolAttrs: function getBoolAttrs() {
        return d;
      },
      getElementRule: k,
      getSelfClosingElements: function getSelfClosingElements() {
        return l;
      },
      getNonEmptyElements: function getNonEmptyElements() {
        return p;
      },
      getMoveCaretBeforeOnEnterElements: function getMoveCaretBeforeOnEnterElements() {
        return g;
      },
      getWhiteSpaceElements: function getWhiteSpaceElements() {
        return c;
      },
      getSpecialElements: function getSpecialElements() {
        return t;
      },
      isValidChild: function isValidChild(e, t) {
        var n = u[e.toLowerCase()];
        return !(!n || !n[t.toLowerCase()]);
      },
      isValid: function isValid(e, t) {
        var n,
            r,
            o = k(e);

        if (o) {
          if (!t) return !0;
          if (o.attributes[t]) return !0;
          if (n = o.attributePatterns) for (r = n.length; r--;) {
            if (n[r].pattern.test(e)) return !0;
          }
        }

        return !1;
      },
      getCustomElements: function getCustomElements() {
        return s;
      },
      addValidElements: b,
      setValidElements: C,
      addCustomElements: w,
      addValidChildren: x
    };
  }

  var wi = function wi(e, t, n, r) {
    var o = function o(e) {
      return 1 < (e = parseInt(e, 10).toString(16)).length ? e : "0" + e;
    };

    return "#" + o(t) + o(n) + o(r);
  },
      xi = function xi(b, e) {
    var s,
        c,
        C = /rgb\s*\(\s*([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)\s*\)/gi,
        w = /(?:url(?:(?:\(\s*\"([^\"]+)\"\s*\))|(?:\(\s*\'([^\']+)\'\s*\))|(?:\(\s*([^)\s]+)\s*\))))|(?:\'([^\']+)\')|(?:\"([^\"]+)\")/gi,
        x = /\s*([^:]+):\s*([^;]+);?/g,
        S = /\s+$/,
        N = {},
        E = co;
    b = b || {}, e && (s = e.getValidStyles(), c = e.getInvalidStyles());

    for (var t = ("\\\" \\' \\; \\: ; : " + E).split(" "), k = 0; k < t.length; k++) {
      N[t[k]] = E + k, N[E + k] = t[k];
    }

    return {
      toHex: function toHex(e) {
        return e.replace(C, wi);
      },
      parse: function parse(e) {
        var t,
            n,
            r,
            o,
            i,
            a,
            u,
            s,
            c = {},
            l = b.url_converter,
            f = b.url_converter_scope || this,
            d = function d(e, t, n) {
          var r = c[e + "-top" + t];

          if (r) {
            var o = c[e + "-right" + t];

            if (o) {
              var i = c[e + "-bottom" + t];

              if (i) {
                var a = c[e + "-left" + t];

                if (a) {
                  var u = [r, o, i, a];

                  for (k = u.length - 1; k-- && u[k] === u[k + 1];) {
                    ;
                  }

                  -1 < k && n || (c[e + t] = -1 === k ? u[0] : u.join(" "), delete c[e + "-top" + t], delete c[e + "-right" + t], delete c[e + "-bottom" + t], delete c[e + "-left" + t]);
                }
              }
            }
          }
        },
            m = function m(e) {
          var t,
              n = c[e];

          if (n) {
            for (t = (n = n.split(" ")).length; t--;) {
              if (n[t] !== n[0]) return !1;
            }

            return c[e] = n[0], !0;
          }
        },
            p = function p(e) {
          return o = !0, N[e];
        },
            g = function g(e, t) {
          return o && (e = e.replace(/\uFEFF[0-9]/g, function (e) {
            return N[e];
          })), t || (e = e.replace(/\\([\'\";:])/g, "$1")), e;
        },
            h = function h(e) {
          return String.fromCharCode(parseInt(e.slice(1), 16));
        },
            v = function v(e) {
          return e.replace(/\\[0-9a-f]+/gi, h);
        },
            y = function y(e, t, n, r, o, i) {
          if (o = o || i) return "'" + (o = g(o)).replace(/\'/g, "\\'") + "'";

          if (t = g(t || n || r), !b.allow_script_urls) {
            var a = t.replace(/[\s\r\n]+/g, "");
            if (/(java|vb)script:/i.test(a)) return "";
            if (!b.allow_svg_data_urls && /^data:image\/svg/i.test(a)) return "";
          }

          return l && (t = l.call(f, t, "style")), "url('" + t.replace(/\'/g, "\\'") + "')";
        };

        if (e) {
          for (e = (e = e.replace(/[\u0000-\u001F]/g, "")).replace(/\\[\"\';:\uFEFF]/g, p).replace(/\"[^\"]+\"|\'[^\']+\'/g, function (e) {
            return e.replace(/[;:]/g, p);
          }); t = x.exec(e);) {
            if (x.lastIndex = t.index + t[0].length, n = t[1].replace(S, "").toLowerCase(), r = t[2].replace(S, ""), n && r) {
              if (n = v(n), r = v(r), -1 !== n.indexOf(E) || -1 !== n.indexOf('"')) continue;
              if (!b.allow_script_urls && ("behavior" === n || /expression\s*\(|\/\*|\*\//.test(r))) continue;
              "font-weight" === n && "700" === r ? r = "bold" : "color" !== n && "background-color" !== n || (r = r.toLowerCase()), r = (r = r.replace(C, wi)).replace(w, y), c[n] = o ? g(r, !0) : r;
            }
          }

          d("border", "", !0), d("border", "-width"), d("border", "-color"), d("border", "-style"), d("padding", ""), d("margin", ""), i = "border", u = "border-style", s = "border-color", m(a = "border-width") && m(u) && m(s) && (c[i] = c[a] + " " + c[u] + " " + c[s], delete c[a], delete c[u], delete c[s]), "medium none" === c.border && delete c.border, "none" === c["border-image"] && delete c["border-image"];
        }

        return c;
      },
      serialize: function serialize(i, a) {
        var u = "",
            e = function e(_e5) {
          var t,
              n = s[_e5];
          if (n) for (var r = 0, o = n.length; r < o; r++) {
            _e5 = n[r], (t = i[_e5]) && (u += (0 < u.length ? " " : "") + _e5 + ": " + t + ";");
          }
        };

        return a && s ? (e("*"), e(a)) : ue(i, function (e, t) {
          var n, r, o;
          !e || c && (n = t, r = a, (o = c["*"]) && o[n] || (o = c[r]) && o[n]) || (u += (0 < u.length ? " " : "") + t + ": " + e + ";");
        }), u;
      }
    };
  },
      Si = /^(?:mouse|contextmenu)|click/,
      Ni = {
    keyLocation: 1,
    layerX: 1,
    layerY: 1,
    returnValue: 1,
    webkitMovementX: 1,
    webkitMovementY: 1,
    keyIdentifier: 1,
    mozPressure: 1
  },
      Ei = function Ei() {
    return !1;
  },
      ki = function ki() {
    return !0;
  },
      _i = function _i(e, t, n, r) {
    e.addEventListener ? e.addEventListener(t, n, r || !1) : e.attachEvent && e.attachEvent("on" + t, n);
  },
      Ai = function Ai(e, t, n, r) {
    e.removeEventListener ? e.removeEventListener(t, n, r || !1) : e.detachEvent && e.detachEvent("on" + t, n);
  },
      Ri = function Ri(e, t) {
    var n,
        r,
        o,
        i,
        a,
        u,
        s = t || {};

    for (n in e) {
      Ni[n] || (s[n] = e[n]);
    }

    return s.target || (s.target = s.srcElement || document), s.composedPath && (s.composedPath = function () {
      return e.composedPath();
    }), e && (a = e, Si.test(a.type)) && e.pageX === undefined && e.clientX !== undefined && (o = (r = s.target.ownerDocument || document).documentElement, i = r.body, s.pageX = e.clientX + (o && o.scrollLeft || i && i.scrollLeft || 0) - (o && o.clientLeft || i && i.clientLeft || 0), s.pageY = e.clientY + (o && o.scrollTop || i && i.scrollTop || 0) - (o && o.clientTop || i && i.clientTop || 0)), s.preventDefault = function () {
      s.isDefaultPrevented = ki, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1);
    }, s.stopPropagation = function () {
      s.isPropagationStopped = ki, e && (e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0);
    }, !(s.stopImmediatePropagation = function () {
      s.isImmediatePropagationStopped = ki, s.stopPropagation();
    }) == ((u = s).isDefaultPrevented === ki || u.isDefaultPrevented === Ei) && (s.isDefaultPrevented = Ei, s.isPropagationStopped = Ei, s.isImmediatePropagationStopped = Ei), "undefined" == typeof s.metaKey && (s.metaKey = !1), s;
  },
      Ti = (Di.prototype.bind = function (e, t, n, r) {
    var o,
        i,
        a,
        u,
        s,
        c,
        l = this,
        f = window,
        d = function d(e) {
      l.executeHandlers(Ri(e || f.event), o);
    };

    if (e && 3 !== e.nodeType && 8 !== e.nodeType) {
      e[l.expando] ? o = e[l.expando] : (o = l.count++, e[l.expando] = o, l.events[o] = {}), r = r || e;

      for (var m = t.split(" "), p = m.length; p--;) {
        s = d, u = c = !1, "DOMContentLoaded" === (a = m[p]) && (a = "ready"), l.domLoaded && "ready" === a && "complete" === e.readyState ? n.call(r, Ri({
          type: a
        })) : (l.hasMouseEnterLeave || (u = l.mouseEnterLeave[a]) && (s = function s(e) {
          var t = e.currentTarget,
              n = e.relatedTarget;
          if (n && t.contains) n = t.contains(n);else for (; n && n !== t;) {
            n = n.parentNode;
          }
          n || ((e = Ri(e || f.event)).type = "mouseout" === e.type ? "mouseleave" : "mouseenter", e.target = t, l.executeHandlers(e, o));
        }), l.hasFocusIn || "focusin" !== a && "focusout" !== a || (c = !0, u = "focusin" === a ? "focus" : "blur", s = function s(e) {
          (e = Ri(e || f.event)).type = "focus" === e.type ? "focusin" : "focusout", l.executeHandlers(e, o);
        }), (i = l.events[o][a]) ? "ready" === a && l.domLoaded ? n(Ri({
          type: a
        })) : i.push({
          func: n,
          scope: r
        }) : (l.events[o][a] = i = [{
          func: n,
          scope: r
        }], i.fakeName = u, i.capture = c, i.nativeHandler = s, "ready" === a ? function (e, t, n) {
          var _r2,
              o = e.document,
              i = {
            type: "ready"
          };

          n.domLoaded ? t(i) : (_r2 = function r() {
            Ai(e, "DOMContentLoaded", _r2), Ai(e, "load", _r2), n.domLoaded || (n.domLoaded = !0, t(i)), e = null;
          }, "complete" === o.readyState || "interactive" === o.readyState && o.body ? _r2() : _i(e, "DOMContentLoaded", _r2), n.domLoaded || _i(e, "load", _r2));
        }(e, s, l) : _i(e, u || a, s, c)));
      }

      return e = i = null, n;
    }
  }, Di.prototype.unbind = function (n, e, t) {
    var r, o, i;
    if (!n || 3 === n.nodeType || 8 === n.nodeType) return this;
    var a = n[this.expando];

    if (a) {
      if (i = this.events[a], e) {
        for (var u, s, c, l, f = e.split(" "), d = f.length; d--;) {
          if (l = i[o = f[d]]) {
            if (t) for (r = l.length; r--;) {
              l[r].func === t && (u = l.nativeHandler, s = l.fakeName, c = l.capture, (l = l.slice(0, r).concat(l.slice(r + 1))).nativeHandler = u, l.fakeName = s, l.capture = c, i[o] = l);
            }
            t && 0 !== l.length || (delete i[o], Ai(n, l.fakeName || o, l.nativeHandler, l.capture));
          }
        }
      } else ue(i, function (e, t) {
        Ai(n, e.fakeName || t, e.nativeHandler, e.capture);
      }), i = {};

      for (o in i) {
        if (he(i, o)) return this;
      }

      delete this.events[a];

      try {
        delete n[this.expando];
      } catch (m) {
        n[this.expando] = null;
      }
    }

    return this;
  }, Di.prototype.fire = function (e, t, n) {
    var r;
    if (!e || 3 === e.nodeType || 8 === e.nodeType) return this;
    var o = Ri(null, n);

    for (o.type = t, o.target = e; (r = e[this.expando]) && this.executeHandlers(o, r), (e = e.parentNode || e.ownerDocument || e.defaultView || e.parentWindow) && !o.isPropagationStopped();) {
      ;
    }

    return this;
  }, Di.prototype.clean = function (e) {
    var t, n;
    if (!e || 3 === e.nodeType || 8 === e.nodeType) return this;
    if (e[this.expando] && this.unbind(e), e.getElementsByTagName || (e = e.document), e && e.getElementsByTagName) for (this.unbind(e), t = (n = e.getElementsByTagName("*")).length; t--;) {
      (e = n[t])[this.expando] && this.unbind(e);
    }
    return this;
  }, Di.prototype.destroy = function () {
    this.events = {};
  }, Di.prototype.cancel = function (e) {
    return e && (e.preventDefault(), e.stopImmediatePropagation()), !1;
  }, Di.prototype.executeHandlers = function (e, t) {
    var n = this.events[t],
        r = n && n[e.type];
    if (r) for (var o = 0, i = r.length; o < i; o++) {
      var a = r[o];
      if (a && !1 === a.func.call(a.scope, e) && e.preventDefault(), e.isImmediatePropagationStopped()) return;
    }
  }, Di.Event = new Di(), Di);

  function Di() {
    this.domLoaded = !1, this.events = {}, this.count = 1, this.expando = "mce-data-" + (+new Date()).toString(32), this.hasMouseEnterLeave = "onmouseenter" in document.documentElement, this.hasFocusIn = "onfocusin" in document.documentElement, this.count = 1;
  }

  var Oi,
      Bi,
      Pi,
      Li,
      Ii,
      Mi,
      Fi,
      Ui,
      zi,
      ji,
      Hi,
      Vi,
      qi,
      $i,
      Wi,
      Ki,
      Xi,
      Yi = "sizzle" + -new Date(),
      Gi = window.document,
      Ji = 0,
      Qi = 0,
      Zi = Da(),
      ea = Da(),
      ta = Da(),
      na = function na(e, t) {
    return e === t && (ji = !0), 0;
  },
      ra =  true ? "undefined" : 0,
      oa = {}.hasOwnProperty,
      ia = [],
      aa = ia.pop,
      ua = ia.push,
      sa = ia.push,
      ca = ia.slice,
      la = ia.indexOf || function (e) {
    for (var t = 0, n = this.length; t < n; t++) {
      if (this[t] === e) return t;
    }

    return -1;
  },
      fa = "[\\x20\\t\\r\\n\\f]",
      da = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
      ma = "\\[" + fa + "*(" + da + ")(?:" + fa + "*([*^$|!~]?=)" + fa + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + da + "))|)" + fa + "*\\]",
      pa = ":(" + da + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ma + ")*)|.*)\\)|)",
      ga = new RegExp("^" + fa + "+|((?:^|[^\\\\])(?:\\\\.)*)" + fa + "+$", "g"),
      ha = new RegExp("^" + fa + "*," + fa + "*"),
      va = new RegExp("^" + fa + "*([>+~]|" + fa + ")" + fa + "*"),
      ya = new RegExp("=" + fa + "*([^\\]'\"]*?)" + fa + "*\\]", "g"),
      ba = new RegExp(pa),
      Ca = new RegExp("^" + da + "$"),
      wa = {
    ID: new RegExp("^#(" + da + ")"),
    CLASS: new RegExp("^\\.(" + da + ")"),
    TAG: new RegExp("^(" + da + "|[*])"),
    ATTR: new RegExp("^" + ma),
    PSEUDO: new RegExp("^" + pa),
    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + fa + "*(even|odd|(([+-]|)(\\d*)n|)" + fa + "*(?:([+-]|)" + fa + "*(\\d+)|))" + fa + "*\\)|)", "i"),
    bool: new RegExp("^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$", "i"),
    needsContext: new RegExp("^" + fa + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + fa + "*((?:-\\d)?\\d*)" + fa + "*\\)|)(?=[^-]|$)", "i")
  },
      xa = /^(?:input|select|textarea|button)$/i,
      Sa = /^h\d$/i,
      Na = /^[^{]+\{\s*\[native \w/,
      Ea = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      ka = /[+~]/,
      _a = /'|\\/g,
      Aa = new RegExp("\\\\([\\da-f]{1,6}" + fa + "?|(" + fa + ")|.)", "ig"),
      Ra = function Ra(e, t, n) {
    var r = "0x" + t - 65536;
    return r != r || n ? t : r < 0 ? String.fromCharCode(65536 + r) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320);
  };

  try {
    sa.apply(ia = ca.call(Gi.childNodes), Gi.childNodes), ia[Gi.childNodes.length].nodeType;
  } catch (Ok) {
    sa = {
      apply: ia.length ? function (e, t) {
        ua.apply(e, ca.call(t));
      } : function (e, t) {
        for (var n = e.length, r = 0; e[n++] = t[r++];) {
          ;
        }

        e.length = n - 1;
      }
    };
  }

  var Ta = function Ta(e, t, n, r) {
    var o, i, a, u, s, c, l, f, d, m;
    if ((t ? t.ownerDocument || t : Gi) !== Vi && Hi(t), n = n || [], !e || "string" != typeof e) return n;
    if (1 !== (u = (t = t || Vi).nodeType) && 9 !== u) return [];

    if ($i && !r) {
      if (o = Ea.exec(e)) if (a = o[1]) {
        if (9 === u) {
          if (!(i = t.getElementById(a)) || !i.parentNode) return n;
          if (i.id === a) return n.push(i), n;
        } else if (t.ownerDocument && (i = t.ownerDocument.getElementById(a)) && Xi(t, i) && i.id === a) return n.push(i), n;
      } else {
        if (o[2]) return sa.apply(n, t.getElementsByTagName(e)), n;
        if ((a = o[3]) && Oi.getElementsByClassName) return sa.apply(n, t.getElementsByClassName(a)), n;
      }

      if (Oi.qsa && (!Wi || !Wi.test(e))) {
        if (f = l = Yi, d = t, m = 9 === u && e, 1 === u && "object" !== t.nodeName.toLowerCase()) {
          for (c = Ii(e), (l = t.getAttribute("id")) ? f = l.replace(_a, "\\$&") : t.setAttribute("id", f), f = "[id='" + f + "'] ", s = c.length; s--;) {
            c[s] = f + Ma(c[s]);
          }

          d = ka.test(e) && La(t.parentNode) || t, m = c.join(",");
        }

        if (m) try {
          return sa.apply(n, d.querySelectorAll(m)), n;
        } catch (p) {} finally {
          l || t.removeAttribute("id");
        }
      }
    }

    return Fi(e.replace(ga, "$1"), t, n, r);
  };

  function Da() {
    var n = [];

    function r(e, t) {
      return n.push(e + " ") > Bi.cacheLength && delete r[n.shift()], r[e + " "] = t;
    }

    return r;
  }

  function Oa(e) {
    return e[Yi] = !0, e;
  }

  function Ba(e, t) {
    var n = t && e,
        r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || 1 << 31) - (~e.sourceIndex || 1 << 31);
    if (r) return r;
    if (n) for (; n = n.nextSibling;) {
      if (n === t) return -1;
    }
    return e ? 1 : -1;
  }

  function Pa(a) {
    return Oa(function (i) {
      return i = +i, Oa(function (e, t) {
        for (var n, r = a([], e.length, i), o = r.length; o--;) {
          e[n = r[o]] && (e[n] = !(t[n] = e[n]));
        }
      });
    });
  }

  function La(e) {
    return e && _typeof(e.getElementsByTagName) != ra && e;
  }

  function Ia() {}

  function Ma(e) {
    for (var t = 0, n = e.length, r = ""; t < n; t++) {
      r += e[t].value;
    }

    return r;
  }

  function Fa(a, e, t) {
    var u = e.dir,
        s = t && "parentNode" === u,
        c = Qi++;
    return e.first ? function (e, t, n) {
      for (; e = e[u];) {
        if (1 === e.nodeType || s) return a(e, t, n);
      }
    } : function (e, t, n) {
      var r,
          o,
          i = [Ji, c];

      if (n) {
        for (; e = e[u];) {
          if ((1 === e.nodeType || s) && a(e, t, n)) return !0;
        }
      } else for (; e = e[u];) {
        if (1 === e.nodeType || s) {
          if ((r = (o = e[Yi] || (e[Yi] = {}))[u]) && r[0] === Ji && r[1] === c) return i[2] = r[2];
          if ((o[u] = i)[2] = a(e, t, n)) return !0;
        }
      }
    };
  }

  function Ua(o) {
    return 1 < o.length ? function (e, t, n) {
      for (var r = o.length; r--;) {
        if (!o[r](e, t, n)) return !1;
      }

      return !0;
    } : o[0];
  }

  function za(e, t, n, r, o) {
    for (var i, a = [], u = 0, s = e.length, c = null != t; u < s; u++) {
      (i = e[u]) && (n && !n(i, r, o) || (a.push(i), c && t.push(u)));
    }

    return a;
  }

  function ja(m, p, g, h, v, e) {
    return h && !h[Yi] && (h = ja(h)), v && !v[Yi] && (v = ja(v, e)), Oa(function (e, t, n, r) {
      var o,
          i,
          a,
          u = [],
          s = [],
          c = t.length,
          l = e || function (e, t, n) {
        for (var r = 0, o = t.length; r < o; r++) {
          Ta(e, t[r], n);
        }

        return n;
      }(p || "*", n.nodeType ? [n] : n, []),
          f = !m || !e && p ? l : za(l, u, m, n, r),
          d = g ? v || (e ? m : c || h) ? [] : t : f;

      if (g && g(f, d, n, r), h) for (o = za(d, s), h(o, [], n, r), i = o.length; i--;) {
        (a = o[i]) && (d[s[i]] = !(f[s[i]] = a));
      }

      if (e) {
        if (v || m) {
          if (v) {
            for (o = [], i = d.length; i--;) {
              (a = d[i]) && o.push(f[i] = a);
            }

            v(null, d = [], o, r);
          }

          for (i = d.length; i--;) {
            (a = d[i]) && -1 < (o = v ? la.call(e, a) : u[i]) && (e[o] = !(t[o] = a));
          }
        }
      } else d = za(d === t ? d.splice(c, d.length) : d), v ? v(null, t, d, r) : sa.apply(t, d);
    });
  }

  Oi = Ta.support = {}, Li = Ta.isXML = function (e) {
    var t = e && (e.ownerDocument || e).documentElement;
    return !!t && "HTML" !== t.nodeName;
  }, Hi = Ta.setDocument = function (e) {
    var t,
        s = e ? e.ownerDocument || e : Gi,
        n = s.defaultView;
    return s !== Vi && 9 === s.nodeType && s.documentElement ? (qi = (Vi = s).documentElement, $i = !Li(s), n && n !== function (e) {
      try {
        return e.top;
      } catch (t) {}

      return null;
    }(n) && (n.addEventListener ? n.addEventListener("unload", function () {
      Hi();
    }, !1) : n.attachEvent && n.attachEvent("onunload", function () {
      Hi();
    })), Oi.attributes = !0, Oi.getElementsByTagName = !0, Oi.getElementsByClassName = Na.test(s.getElementsByClassName), Oi.getById = !0, Bi.find.ID = function (e, t) {
      if (_typeof(t.getElementById) != ra && $i) {
        var n = t.getElementById(e);
        return n && n.parentNode ? [n] : [];
      }
    }, Bi.filter.ID = function (e) {
      var t = e.replace(Aa, Ra);
      return function (e) {
        return e.getAttribute("id") === t;
      };
    }, Bi.find.TAG = Oi.getElementsByTagName ? function (e, t) {
      if (_typeof(t.getElementsByTagName) != ra) return t.getElementsByTagName(e);
    } : function (e, t) {
      var n,
          r = [],
          o = 0,
          i = t.getElementsByTagName(e);
      if ("*" !== e) return i;

      for (; n = i[o++];) {
        1 === n.nodeType && r.push(n);
      }

      return r;
    }, Bi.find.CLASS = Oi.getElementsByClassName && function (e, t) {
      if ($i) return t.getElementsByClassName(e);
    }, Ki = [], Wi = [], Oi.disconnectedMatch = !0, Wi = Wi.length && new RegExp(Wi.join("|")), Ki = Ki.length && new RegExp(Ki.join("|")), t = Na.test(qi.compareDocumentPosition), Xi = t || Na.test(qi.contains) ? function (e, t) {
      var n = 9 === e.nodeType ? e.documentElement : e,
          r = t && t.parentNode;
      return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
    } : function (e, t) {
      if (t) for (; t = t.parentNode;) {
        if (t === e) return !0;
      }
      return !1;
    }, na = t ? function (e, t) {
      if (e === t) return ji = !0, 0;
      var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
      return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !Oi.sortDetached && t.compareDocumentPosition(e) === n ? e === s || e.ownerDocument === Gi && Xi(Gi, e) ? -1 : t === s || t.ownerDocument === Gi && Xi(Gi, t) ? 1 : zi ? la.call(zi, e) - la.call(zi, t) : 0 : 4 & n ? -1 : 1);
    } : function (e, t) {
      if (e === t) return ji = !0, 0;
      var n,
          r = 0,
          o = e.parentNode,
          i = t.parentNode,
          a = [e],
          u = [t];
      if (!o || !i) return e === s ? -1 : t === s ? 1 : o ? -1 : i ? 1 : zi ? la.call(zi, e) - la.call(zi, t) : 0;
      if (o === i) return Ba(e, t);

      for (n = e; n = n.parentNode;) {
        a.unshift(n);
      }

      for (n = t; n = n.parentNode;) {
        u.unshift(n);
      }

      for (; a[r] === u[r];) {
        r++;
      }

      return r ? Ba(a[r], u[r]) : a[r] === Gi ? -1 : u[r] === Gi ? 1 : 0;
    }, s) : Vi;
  }, Ta.matches = function (e, t) {
    return Ta(e, null, null, t);
  }, Ta.matchesSelector = function (e, t) {
    if ((e.ownerDocument || e) !== Vi && Hi(e), t = t.replace(ya, "='$1']"), Oi.matchesSelector && $i && (!Ki || !Ki.test(t)) && (!Wi || !Wi.test(t))) try {
      var n = (void 0).call(e, t);
      if (n || Oi.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n;
    } catch (Ok) {}
    return 0 < Ta(t, Vi, null, [e]).length;
  }, Ta.contains = function (e, t) {
    return (e.ownerDocument || e) !== Vi && Hi(e), Xi(e, t);
  }, Ta.attr = function (e, t) {
    (e.ownerDocument || e) !== Vi && Hi(e);
    var n = Bi.attrHandle[t.toLowerCase()],
        r = n && oa.call(Bi.attrHandle, t.toLowerCase()) ? n(e, t, !$i) : undefined;
    return r !== undefined ? r : Oi.attributes || !$i ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
  }, Ta.error = function (e) {
    throw new Error("Syntax error, unrecognized expression: " + e);
  }, Ta.uniqueSort = function (e) {
    var t,
        n = [],
        r = 0,
        o = 0;

    if (ji = !Oi.detectDuplicates, zi = !Oi.sortStable && e.slice(0), e.sort(na), ji) {
      for (; t = e[o++];) {
        t === e[o] && (r = n.push(o));
      }

      for (; r--;) {
        e.splice(n[r], 1);
      }
    }

    return zi = null, e;
  }, Pi = Ta.getText = function (e) {
    var t,
        n = "",
        r = 0,
        o = e.nodeType;

    if (o) {
      if (1 === o || 9 === o || 11 === o) {
        if ("string" == typeof e.textContent) return e.textContent;

        for (e = e.firstChild; e; e = e.nextSibling) {
          n += Pi(e);
        }
      } else if (3 === o || 4 === o) return e.nodeValue;
    } else for (; t = e[r++];) {
      n += Pi(t);
    }

    return n;
  }, (Bi = Ta.selectors = {
    cacheLength: 50,
    createPseudo: Oa,
    match: wa,
    attrHandle: {},
    find: {},
    relative: {
      ">": {
        dir: "parentNode",
        first: !0
      },
      " ": {
        dir: "parentNode"
      },
      "+": {
        dir: "previousSibling",
        first: !0
      },
      "~": {
        dir: "previousSibling"
      }
    },
    preFilter: {
      ATTR: function ATTR(e) {
        return e[1] = e[1].replace(Aa, Ra), e[3] = (e[3] || e[4] || e[5] || "").replace(Aa, Ra), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
      },
      CHILD: function CHILD(e) {
        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || Ta.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && Ta.error(e[0]), e;
      },
      PSEUDO: function PSEUDO(e) {
        var t,
            n = !e[6] && e[2];
        return wa.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && ba.test(n) && (t = Ii(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
      }
    },
    filter: {
      TAG: function TAG(e) {
        var t = e.replace(Aa, Ra).toLowerCase();
        return "*" === e ? function () {
          return !0;
        } : function (e) {
          return e.nodeName && e.nodeName.toLowerCase() === t;
        };
      },
      CLASS: function CLASS(e) {
        var t = Zi[e + " "];
        return t || (t = new RegExp("(^|" + fa + ")" + e + "(" + fa + "|$)")) && Zi(e, function (e) {
          return t.test("string" == typeof e.className && e.className || _typeof(e.getAttribute) != ra && e.getAttribute("class") || "");
        });
      },
      ATTR: function ATTR(n, r, o) {
        return function (e) {
          var t = Ta.attr(e, n);
          return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === o : "!=" === r ? t !== o : "^=" === r ? o && 0 === t.indexOf(o) : "*=" === r ? o && -1 < t.indexOf(o) : "$=" === r ? o && t.slice(-o.length) === o : "~=" === r ? -1 < (" " + t + " ").indexOf(o) : "|=" === r && (t === o || t.slice(0, o.length + 1) === o + "-"));
        };
      },
      CHILD: function CHILD(m, e, t, p, g) {
        var h = "nth" !== m.slice(0, 3),
            v = "last" !== m.slice(-4),
            y = "of-type" === e;
        return 1 === p && 0 === g ? function (e) {
          return !!e.parentNode;
        } : function (e, t, n) {
          var r,
              o,
              i,
              a,
              u,
              s,
              c = h != v ? "nextSibling" : "previousSibling",
              l = e.parentNode,
              f = y && e.nodeName.toLowerCase(),
              d = !n && !y;

          if (l) {
            if (h) {
              for (; c;) {
                for (i = e; i = i[c];) {
                  if (y ? i.nodeName.toLowerCase() === f : 1 === i.nodeType) return !1;
                }

                s = c = "only" === m && !s && "nextSibling";
              }

              return !0;
            }

            if (s = [v ? l.firstChild : l.lastChild], v && d) {
              for (u = (r = (o = l[Yi] || (l[Yi] = {}))[m] || [])[0] === Ji && r[1], a = r[0] === Ji && r[2], i = u && l.childNodes[u]; i = ++u && i && i[c] || (a = u = 0) || s.pop();) {
                if (1 === i.nodeType && ++a && i === e) {
                  o[m] = [Ji, u, a];
                  break;
                }
              }
            } else if (d && (r = (e[Yi] || (e[Yi] = {}))[m]) && r[0] === Ji) a = r[1];else for (; (i = ++u && i && i[c] || (a = u = 0) || s.pop()) && ((y ? i.nodeName.toLowerCase() !== f : 1 !== i.nodeType) || !++a || (d && ((i[Yi] || (i[Yi] = {}))[m] = [Ji, a]), i !== e));) {
              ;
            }

            return (a -= g) === p || a % p == 0 && 0 <= a / p;
          }
        };
      },
      PSEUDO: function PSEUDO(e, i) {
        var t,
            a = Bi.pseudos[e] || Bi.setFilters[e.toLowerCase()] || Ta.error("unsupported pseudo: " + e);
        return a[Yi] ? a(i) : 1 < a.length ? (t = [e, e, "", i], Bi.setFilters.hasOwnProperty(e.toLowerCase()) ? Oa(function (e, t) {
          for (var n, r = a(e, i), o = r.length; o--;) {
            e[n = la.call(e, r[o])] = !(t[n] = r[o]);
          }
        }) : function (e) {
          return a(e, 0, t);
        }) : a;
      }
    },
    pseudos: {
      not: Oa(function (e) {
        var r = [],
            o = [],
            u = Mi(e.replace(ga, "$1"));
        return u[Yi] ? Oa(function (e, t, n, r) {
          for (var o, i = u(e, null, r, []), a = e.length; a--;) {
            (o = i[a]) && (e[a] = !(t[a] = o));
          }
        }) : function (e, t, n) {
          return r[0] = e, u(r, null, n, o), !o.pop();
        };
      }),
      has: Oa(function (t) {
        return function (e) {
          return 0 < Ta(t, e).length;
        };
      }),
      contains: Oa(function (t) {
        return t = t.replace(Aa, Ra), function (e) {
          return -1 < (e.textContent || e.innerText || Pi(e)).indexOf(t);
        };
      }),
      lang: Oa(function (n) {
        return Ca.test(n || "") || Ta.error("unsupported lang: " + n), n = n.replace(Aa, Ra).toLowerCase(), function (e) {
          var t;

          do {
            if (t = $i ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-");
          } while ((e = e.parentNode) && 1 === e.nodeType);

          return !1;
        };
      }),
      target: function target(e) {
        var t = window.location && window.location.hash;
        return t && t.slice(1) === e.id;
      },
      root: function root(e) {
        return e === qi;
      },
      focus: function focus(e) {
        return e === Vi.activeElement && (!Vi.hasFocus || Vi.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
      },
      enabled: function enabled(e) {
        return !1 === e.disabled;
      },
      disabled: function disabled(e) {
        return !0 === e.disabled;
      },
      checked: function checked(e) {
        var t = e.nodeName.toLowerCase();
        return "input" === t && !!e.checked || "option" === t && !!e.selected;
      },
      selected: function selected(e) {
        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
      },
      empty: function empty(e) {
        for (e = e.firstChild; e; e = e.nextSibling) {
          if (e.nodeType < 6) return !1;
        }

        return !0;
      },
      parent: function parent(e) {
        return !Bi.pseudos.empty(e);
      },
      header: function header(e) {
        return Sa.test(e.nodeName);
      },
      input: function input(e) {
        return xa.test(e.nodeName);
      },
      button: function button(e) {
        var t = e.nodeName.toLowerCase();
        return "input" === t && "button" === e.type || "button" === t;
      },
      text: function text(e) {
        var t;
        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
      },
      first: Pa(function () {
        return [0];
      }),
      last: Pa(function (e, t) {
        return [t - 1];
      }),
      eq: Pa(function (e, t, n) {
        return [n < 0 ? n + t : n];
      }),
      even: Pa(function (e, t) {
        for (var n = 0; n < t; n += 2) {
          e.push(n);
        }

        return e;
      }),
      odd: Pa(function (e, t) {
        for (var n = 1; n < t; n += 2) {
          e.push(n);
        }

        return e;
      }),
      lt: Pa(function (e, t, n) {
        for (var r = n < 0 ? n + t : n; 0 <= --r;) {
          e.push(r);
        }

        return e;
      }),
      gt: Pa(function (e, t, n) {
        for (var r = n < 0 ? n + t : n; ++r < t;) {
          e.push(r);
        }

        return e;
      })
    }
  }).pseudos.nth = Bi.pseudos.eq, W(["radio", "checkbox", "file", "password", "image"], function (e) {
    var t;
    Bi.pseudos[e] = (t = e, function (e) {
      return "input" === e.nodeName.toLowerCase() && e.type === t;
    });
  }), W(["submit", "reset"], function (e) {
    var n;
    Bi.pseudos[e] = (n = e, function (e) {
      var t = e.nodeName.toLowerCase();
      return ("input" === t || "button" === t) && e.type === n;
    });
  }), Ia.prototype = Bi.filters = Bi.pseudos, Bi.setFilters = new Ia(), Ii = Ta.tokenize = function (e, t) {
    var n,
        r,
        o,
        i,
        a,
        u,
        s,
        c = ea[e + " "];
    if (c) return t ? 0 : c.slice(0);

    for (a = e, u = [], s = Bi.preFilter; a;) {
      for (i in n && !(r = ha.exec(a)) || (r && (a = a.slice(r[0].length) || a), u.push(o = [])), n = !1, (r = va.exec(a)) && (n = r.shift(), o.push({
        value: n,
        type: r[0].replace(ga, " ")
      }), a = a.slice(n.length)), Bi.filter) {
        Bi.filter.hasOwnProperty(i) && (!(r = wa[i].exec(a)) || s[i] && !(r = s[i](r)) || (n = r.shift(), o.push({
          value: n,
          type: i,
          matches: r
        }), a = a.slice(n.length)));
      }

      if (!n) break;
    }

    return t ? a.length : a ? Ta.error(e) : ea(e, u).slice(0);
  }, Mi = Ta.compile = function (e, t) {
    var n,
        h,
        v,
        y,
        b,
        r,
        o = [],
        i = [],
        a = ta[e + " "];

    if (!a) {
      for (n = (t = t || Ii(e)).length; n--;) {
        (a = function f(e) {
          for (var r, t, n, o = e.length, i = Bi.relative[e[0].type], a = i || Bi.relative[" "], u = i ? 1 : 0, s = Fa(function (e) {
            return e === r;
          }, a, !0), c = Fa(function (e) {
            return -1 < la.call(r, e);
          }, a, !0), l = [function (e, t, n) {
            return !i && (n || t !== Ui) || ((r = t).nodeType ? s : c)(e, t, n);
          }]; u < o; u++) {
            if (t = Bi.relative[e[u].type]) l = [Fa(Ua(l), t)];else {
              if ((t = Bi.filter[e[u].type].apply(null, e[u].matches))[Yi]) {
                for (n = ++u; n < o && !Bi.relative[e[n].type]; n++) {
                  ;
                }

                return ja(1 < u && Ua(l), 1 < u && Ma(e.slice(0, u - 1).concat({
                  value: " " === e[u - 2].type ? "*" : ""
                })).replace(ga, "$1"), t, u < n && f(e.slice(u, n)), n < o && f(e = e.slice(n)), n < o && Ma(e));
              }

              l.push(t);
            }
          }

          return Ua(l);
        }(t[n]))[Yi] ? o.push(a) : i.push(a);
      }

      (a = ta(e, (h = i, y = 0 < (v = o).length, b = 0 < h.length, r = function r(e, t, n, _r3, o) {
        var i,
            a,
            u,
            s = 0,
            c = "0",
            l = e && [],
            f = [],
            d = Ui,
            m = e || b && Bi.find.TAG("*", o),
            p = Ji += null == d ? 1 : Math.random() || .1,
            g = m.length;

        for (o && (Ui = t !== Vi && t); c !== g && null != (i = m[c]); c++) {
          if (b && i) {
            for (a = 0; u = h[a++];) {
              if (u(i, t, n)) {
                _r3.push(i);

                break;
              }
            }

            o && (Ji = p);
          }

          y && ((i = !u && i) && s--, e && l.push(i));
        }

        if (s += c, y && c !== s) {
          for (a = 0; u = v[a++];) {
            u(l, f, t, n);
          }

          if (e) {
            if (0 < s) for (; c--;) {
              l[c] || f[c] || (f[c] = aa.call(_r3));
            }
            f = za(f);
          }

          sa.apply(_r3, f), o && !e && 0 < f.length && 1 < s + v.length && Ta.uniqueSort(_r3);
        }

        return o && (Ji = p, Ui = d), l;
      }, y ? Oa(r) : r))).selector = e;
    }

    return a;
  }, Fi = Ta.select = function (e, t, n, r) {
    var o,
        i,
        a,
        u,
        s,
        c = "function" == typeof e && e,
        l = !r && Ii(e = c.selector || e);

    if (n = n || [], 1 === l.length) {
      if (2 < (i = l[0] = l[0].slice(0)).length && "ID" === (a = i[0]).type && Oi.getById && 9 === t.nodeType && $i && Bi.relative[i[1].type]) {
        if (!(t = (Bi.find.ID(a.matches[0].replace(Aa, Ra), t) || [])[0])) return n;
        c && (t = t.parentNode), e = e.slice(i.shift().value.length);
      }

      for (o = wa.needsContext.test(e) ? 0 : i.length; o-- && (a = i[o], !Bi.relative[u = a.type]);) {
        if ((s = Bi.find[u]) && (r = s(a.matches[0].replace(Aa, Ra), ka.test(i[0].type) && La(t.parentNode) || t))) {
          if (i.splice(o, 1), !(e = r.length && Ma(i))) return sa.apply(n, r), n;
          break;
        }
      }
    }

    return (c || Mi(e, l))(r, t, !$i, n, ka.test(e) && La(t.parentNode) || t), n;
  }, Oi.sortStable = Yi.split("").sort(na).join("") === Yi, Oi.detectDuplicates = !!ji, Hi(), Oi.sortDetached = !0;

  var Ha = document,
      Va = Array.prototype.push,
      qa = Array.prototype.slice,
      $a = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
      Wa = Ti.Event,
      Ka = kt.makeMap("children,contents,next,prev"),
      Xa = function Xa(e) {
    return void 0 !== e;
  },
      Ya = function Ya(e) {
    return "string" == typeof e;
  },
      Ga = function Ga(e, t) {
    var n,
        r = (t = t || Ha).createElement("div"),
        o = t.createDocumentFragment();

    for (r.innerHTML = e; n = r.firstChild;) {
      o.appendChild(n);
    }

    return o;
  },
      Ja = function Ja(e, t, n, r) {
    var o;
    if (Ya(t)) t = Ga(t, fu(e[0]));else if (t.length && !t.nodeType) {
      if (t = hu.makeArray(t), r) for (o = t.length - 1; 0 <= o; o--) {
        Ja(e, t[o], n, r);
      } else for (o = 0; o < t.length; o++) {
        Ja(e, t[o], n, r);
      }
      return e;
    }
    if (t.nodeType) for (o = e.length; o--;) {
      n.call(e[o], t);
    }
    return e;
  },
      Qa = function Qa(e, t) {
    return e && t && -1 !== (" " + e.className + " ").indexOf(" " + t + " ");
  },
      Za = function Za(e, t, n) {
    var r, o;
    return t = hu(t)[0], e.each(function () {
      n && r === this.parentNode || (r = this.parentNode, o = t.cloneNode(!1), this.parentNode.insertBefore(o, this)), o.appendChild(this);
    }), e;
  },
      eu = kt.makeMap("fillOpacity fontWeight lineHeight opacity orphans widows zIndex zoom", " "),
      tu = kt.makeMap("checked compact declare defer disabled ismap multiple nohref noshade nowrap readonly selected", " "),
      nu = {
    "for": "htmlFor",
    "class": "className",
    readonly: "readOnly"
  },
      ru = {
    "float": "cssFloat"
  },
      ou = {},
      iu = {},
      au = function au(e, t) {
    return new hu.fn.init(e, t);
  },
      uu = /^\s*|\s*$/g,
      su = function su(e) {
    return null === e || e === undefined ? "" : ("" + e).replace(uu, "");
  },
      cu = function cu(e, t) {
    var n, r, o, i;
    if (e) if ((n = e.length) === undefined) {
      for (r in e) {
        if (e.hasOwnProperty(r) && (i = e[r], !1 === t.call(i, r, i))) break;
      }
    } else for (o = 0; o < n && (i = e[o], !1 !== t.call(i, o, i)); o++) {
      ;
    }
    return e;
  },
      lu = function lu(e, n) {
    var r = [];
    return cu(e, function (e, t) {
      n(t, e) && r.push(t);
    }), r;
  },
      fu = function fu(e) {
    return e ? 9 === e.nodeType ? e : e.ownerDocument : Ha;
  };

  au.fn = au.prototype = {
    constructor: au,
    selector: "",
    context: null,
    length: 0,
    init: function init(e, t) {
      var n,
          r,
          o = this;
      if (!e) return o;
      if (e.nodeType) return o.context = o[0] = e, o.length = 1, o;
      if (t && t.nodeType) o.context = t;else {
        if (t) return hu(e).attr(t);
        o.context = t = document;
      }

      if (Ya(e)) {
        if (!(n = "<" === (o.selector = e).charAt(0) && ">" === e.charAt(e.length - 1) && 3 <= e.length ? [null, e, null] : $a.exec(e))) return hu(t).find(e);
        if (n[1]) for (r = Ga(e, fu(t)).firstChild; r;) {
          Va.call(o, r), r = r.nextSibling;
        } else {
          if (!(r = fu(t).getElementById(n[2]))) return o;
          if (r.id !== n[2]) return o.find(e);
          o.length = 1, o[0] = r;
        }
      } else this.add(e, !1);

      return o;
    },
    toArray: function toArray() {
      return kt.toArray(this);
    },
    add: function add(e, t) {
      var n, r;
      if (Ya(e)) return this.add(hu(e));
      if (!1 !== t) for (n = hu.unique(this.toArray().concat(hu.makeArray(e))), this.length = n.length, r = 0; r < n.length; r++) {
        this[r] = n[r];
      } else Va.apply(this, hu.makeArray(e));
      return this;
    },
    attr: function attr(t, n) {
      var e,
          r = this;
      if ("object" == _typeof(t)) cu(t, function (e, t) {
        r.attr(e, t);
      });else {
        if (!Xa(n)) {
          if (r[0] && 1 === r[0].nodeType) {
            if ((e = ou[t]) && e.get) return e.get(r[0], t);
            if (tu[t]) return r.prop(t) ? t : undefined;
            null === (n = r[0].getAttribute(t, 2)) && (n = undefined);
          }

          return n;
        }

        this.each(function () {
          var e;

          if (1 === this.nodeType) {
            if ((e = ou[t]) && e.set) return void e.set(this, n);
            null === n ? this.removeAttribute(t, 2) : this.setAttribute(t, n, 2);
          }
        });
      }
      return r;
    },
    removeAttr: function removeAttr(e) {
      return this.attr(e, null);
    },
    prop: function prop(e, t) {
      var n = this;
      if ("object" == _typeof(e = nu[e] || e)) cu(e, function (e, t) {
        n.prop(e, t);
      });else {
        if (!Xa(t)) return n[0] && n[0].nodeType && e in n[0] ? n[0][e] : t;
        this.each(function () {
          1 === this.nodeType && (this[e] = t);
        });
      }
      return n;
    },
    css: function css(n, r) {
      var e,
          o,
          i = this,
          t = function t(e) {
        return e.replace(/-(\D)/g, function (e, t) {
          return t.toUpperCase();
        });
      },
          a = function a(e) {
        return e.replace(/[A-Z]/g, function (e) {
          return "-" + e;
        });
      };

      if ("object" == _typeof(n)) cu(n, function (e, t) {
        i.css(e, t);
      });else if (Xa(r)) n = t(n), "number" != typeof r || eu[n] || (r = r.toString() + "px"), i.each(function () {
        var e = this.style;
        if ((o = iu[n]) && o.set) o.set(this, r);else {
          try {
            this.style[ru[n] || n] = r;
          } catch (t) {}

          null !== r && "" !== r || (e.removeProperty ? e.removeProperty(a(n)) : e.removeAttribute(n));
        }
      });else {
        if (e = i[0], (o = iu[n]) && o.get) return o.get(e);
        if (!e.ownerDocument.defaultView) return e.currentStyle ? e.currentStyle[t(n)] : "";

        try {
          return e.ownerDocument.defaultView.getComputedStyle(e, null).getPropertyValue(a(n));
        } catch (u) {
          return undefined;
        }
      }
      return i;
    },
    remove: function remove() {
      for (var e, t = this.length; t--;) {
        e = this[t], Wa.clean(e), e.parentNode && e.parentNode.removeChild(e);
      }

      return this;
    },
    empty: function empty() {
      for (var e, t = this.length; t--;) {
        for (e = this[t]; e.firstChild;) {
          e.removeChild(e.firstChild);
        }
      }

      return this;
    },
    html: function html(e) {
      var t;

      if (Xa(e)) {
        t = this.length;

        try {
          for (; t--;) {
            this[t].innerHTML = e;
          }
        } catch (n) {
          hu(this[t]).empty().append(e);
        }

        return this;
      }

      return this[0] ? this[0].innerHTML : "";
    },
    text: function text(e) {
      var t;

      if (Xa(e)) {
        for (t = this.length; t--;) {
          "innerText" in this[t] ? this[t].innerText = e : this[0].textContent = e;
        }

        return this;
      }

      return this[0] ? this[0].innerText || this[0].textContent : "";
    },
    append: function append() {
      return Ja(this, arguments, function (e) {
        (1 === this.nodeType || this.host && 1 === this.host.nodeType) && this.appendChild(e);
      });
    },
    prepend: function prepend() {
      return Ja(this, arguments, function (e) {
        (1 === this.nodeType || this.host && 1 === this.host.nodeType) && this.insertBefore(e, this.firstChild);
      }, !0);
    },
    before: function before() {
      return this[0] && this[0].parentNode ? Ja(this, arguments, function (e) {
        this.parentNode.insertBefore(e, this);
      }) : this;
    },
    after: function after() {
      return this[0] && this[0].parentNode ? Ja(this, arguments, function (e) {
        this.parentNode.insertBefore(e, this.nextSibling);
      }, !0) : this;
    },
    appendTo: function appendTo(e) {
      return hu(e).append(this), this;
    },
    prependTo: function prependTo(e) {
      return hu(e).prepend(this), this;
    },
    replaceWith: function replaceWith(e) {
      return this.before(e).remove();
    },
    wrap: function wrap(e) {
      return Za(this, e);
    },
    wrapAll: function wrapAll(e) {
      return Za(this, e, !0);
    },
    wrapInner: function wrapInner(e) {
      return this.each(function () {
        hu(this).contents().wrapAll(e);
      }), this;
    },
    unwrap: function unwrap() {
      return this.parent().each(function () {
        hu(this).replaceWith(this.childNodes);
      });
    },
    clone: function clone() {
      var e = [];
      return this.each(function () {
        e.push(this.cloneNode(!0));
      }), hu(e);
    },
    addClass: function addClass(e) {
      return this.toggleClass(e, !0);
    },
    removeClass: function removeClass(e) {
      return this.toggleClass(e, !1);
    },
    toggleClass: function toggleClass(o, i) {
      var e = this;
      return "string" != typeof o || (-1 !== o.indexOf(" ") ? cu(o.split(" "), function () {
        e.toggleClass(this, i);
      }) : e.each(function (e, t) {
        var n,
            r = Qa(t, o);
        r !== i && (n = t.className, r ? t.className = su((" " + n + " ").replace(" " + o + " ", " ")) : t.className += n ? " " + o : o);
      })), e;
    },
    hasClass: function hasClass(e) {
      return Qa(this[0], e);
    },
    each: function each(e) {
      return cu(this, e);
    },
    on: function on(e, t) {
      return this.each(function () {
        Wa.bind(this, e, t);
      });
    },
    off: function off(e, t) {
      return this.each(function () {
        Wa.unbind(this, e, t);
      });
    },
    trigger: function trigger(e) {
      return this.each(function () {
        "object" == _typeof(e) ? Wa.fire(this, e.type, e) : Wa.fire(this, e);
      });
    },
    show: function show() {
      return this.css("display", "");
    },
    hide: function hide() {
      return this.css("display", "none");
    },
    slice: function slice() {
      return new hu(qa.apply(this, arguments));
    },
    eq: function eq(e) {
      return -1 === e ? this.slice(e) : this.slice(e, +e + 1);
    },
    first: function first() {
      return this.eq(0);
    },
    last: function last() {
      return this.eq(-1);
    },
    find: function find(e) {
      for (var t = [], n = 0, r = this.length; n < r; n++) {
        hu.find(e, this[n], t);
      }

      return hu(t);
    },
    filter: function filter(n) {
      return hu("function" == typeof n ? lu(this.toArray(), function (e, t) {
        return n(t, e);
      }) : hu.filter(n, this.toArray()));
    },
    closest: function closest(n) {
      var r = [];
      return n instanceof hu && (n = n[0]), this.each(function (e, t) {
        for (; t;) {
          if ("string" == typeof n && hu(t).is(n)) {
            r.push(t);
            break;
          }

          if (t === n) {
            r.push(t);
            break;
          }

          t = t.parentNode;
        }
      }), hu(r);
    },
    offset: function offset(e) {
      var t,
          n,
          r,
          o,
          i = 0,
          a = 0;
      return e ? this.css(e) : ((t = this[0]) && (r = (n = t.ownerDocument).documentElement, t.getBoundingClientRect && (i = (o = t.getBoundingClientRect()).left + (r.scrollLeft || n.body.scrollLeft) - r.clientLeft, a = o.top + (r.scrollTop || n.body.scrollTop) - r.clientTop)), {
        left: i,
        top: a
      });
    },
    push: Va,
    sort: Array.prototype.sort,
    splice: Array.prototype.splice
  }, kt.extend(au, {
    extend: kt.extend,
    makeArray: function makeArray(e) {
      return (t = e) && t === t.window || e.nodeType ? [e] : kt.toArray(e);
      var t;
    },
    inArray: function inArray(e, t) {
      var n;
      if (t.indexOf) return t.indexOf(e);

      for (n = t.length; n--;) {
        if (t[n] === e) return n;
      }

      return -1;
    },
    isArray: kt.isArray,
    each: cu,
    trim: su,
    grep: lu,
    find: Ta,
    expr: Ta.selectors,
    unique: Ta.uniqueSort,
    text: Ta.getText,
    contains: Ta.contains,
    filter: function filter(e, t, n) {
      var r = t.length;

      for (n && (e = ":not(" + e + ")"); r--;) {
        1 !== t[r].nodeType && t.splice(r, 1);
      }

      return t = 1 === t.length ? hu.find.matchesSelector(t[0], e) ? [t[0]] : [] : hu.find.matches(e, t);
    }
  });

  var du = function du(e, t, n) {
    var r = [],
        o = e[t];

    for ("string" != typeof n && n instanceof hu && (n = n[0]); o && 9 !== o.nodeType;) {
      if (n !== undefined) {
        if (o === n) break;
        if ("string" == typeof n && hu(o).is(n)) break;
      }

      1 === o.nodeType && r.push(o), o = o[t];
    }

    return r;
  },
      mu = function mu(e, t, n, r) {
    var o = [];

    for (r instanceof hu && (r = r[0]); e; e = e[t]) {
      if (!n || e.nodeType === n) {
        if (r !== undefined) {
          if (e === r) break;
          if ("string" == typeof r && hu(e).is(r)) break;
        }

        o.push(e);
      }
    }

    return o;
  },
      pu = function pu(e, t, n) {
    for (e = e[t]; e; e = e[t]) {
      if (e.nodeType === n) return e;
    }

    return null;
  };

  cu({
    parent: function parent(e) {
      var t = e.parentNode;
      return t && 11 !== t.nodeType ? t : null;
    },
    parents: function parents(e) {
      return du(e, "parentNode");
    },
    next: function next(e) {
      return pu(e, "nextSibling", 1);
    },
    prev: function prev(e) {
      return pu(e, "previousSibling", 1);
    },
    children: function children(e) {
      return mu(e.firstChild, "nextSibling", 1);
    },
    contents: function contents(e) {
      return kt.toArray(("iframe" === e.nodeName ? e.contentDocument || e.contentWindow.document : e).childNodes);
    }
  }, function (r, o) {
    au.fn[r] = function (t) {
      var n = [];
      this.each(function () {
        var e = o.call(n, this, t, n);
        e && (hu.isArray(e) ? n.push.apply(n, e) : n.push(e));
      }), 1 < this.length && (Ka[r] || (n = hu.unique(n)), 0 === r.indexOf("parents") && (n = n.reverse()));
      var e = hu(n);
      return t ? e.filter(t) : e;
    };
  }), cu({
    parentsUntil: function parentsUntil(e, t) {
      return du(e, "parentNode", t);
    },
    nextUntil: function nextUntil(e, t) {
      return mu(e, "nextSibling", 1, t).slice(1);
    },
    prevUntil: function prevUntil(e, t) {
      return mu(e, "previousSibling", 1, t).slice(1);
    }
  }, function (o, i) {
    au.fn[o] = function (t, e) {
      var n = [];
      this.each(function () {
        var e = i.call(n, this, t, n);
        e && (hu.isArray(e) ? n.push.apply(n, e) : n.push(e));
      }), 1 < this.length && (n = hu.unique(n), 0 !== o.indexOf("parents") && "prevUntil" !== o || (n = n.reverse()));
      var r = hu(n);
      return e ? r.filter(e) : r;
    };
  }), au.fn.is = function (e) {
    return !!e && 0 < this.filter(e).length;
  }, au.fn.init.prototype = au.fn, au.overrideDefaults = function (n) {
    var r,
        o = function o(e, t) {
      return r = r || n(), 0 === arguments.length && (e = r.element), t = t || r.context, new o.fn.init(e, t);
    };

    return hu.extend(o, this), o;
  }, au.attrHooks = ou, au.cssHooks = iu;

  var gu,
      hu = au,
      vu = kt.each,
      yu = kt.grep,
      bu = wt.ie,
      Cu = /^([a-z0-9],?)+$/i,
      wu = function wu(n, r, o) {
    var i = r.keep_values,
        e = {
      set: function set(e, t, n) {
        r.url_converter && (t = r.url_converter.call(r.url_converter_scope || o(), t, n, e[0])), e.attr("data-mce-" + n, t).attr(n, t);
      },
      get: function get(e, t) {
        return e.attr("data-mce-" + t) || e.attr(t);
      }
    },
        t = {
      style: {
        set: function set(e, t) {
          null === t || "object" != _typeof(t) ? (i && e.attr("data-mce-style", t), null !== t && "string" == typeof t ? (e.removeAttr("style"), e.css(n.parse(t))) : e.attr("style", t)) : e.css(t);
        },
        get: function get(e) {
          var t = e.attr("data-mce-style") || e.attr("style");
          return t = n.serialize(n.parse(t), e[0].nodeName);
        }
      }
    };
    return i && (t.href = t.src = e), t;
  },
      xu = function xu(e, t) {
    var n = t.attr("style"),
        r = (r = e.serialize(e.parse(n), t[0].nodeName)) || null;
    t.attr("data-mce-style", r);
  },
      Su = function Su(e, t) {
    var n,
        r,
        o = 0;
    if (e) for (n = e.nodeType, e = e.previousSibling; e; e = e.previousSibling) {
      r = e.nodeType, (!t || 3 !== r || r !== n && e.nodeValue.length) && (o++, n = r);
    }
    return o;
  };

  function Nu(a, u) {
    var s = this;
    void 0 === u && (u = {});

    var r = {},
        c = window,
        n = {},
        t = 0,
        o = Kr.forElement(At.fromDom(a), {
      contentCssCors: u.contentCssCors,
      referrerPolicy: u.referrerPolicy
    }),
        l = [],
        f = u.schema ? u.schema : Ci({}),
        i = xi({
      url_converter: u.url_converter,
      url_converter_scope: u.url_converter_scope
    }, u.schema),
        d = u.ownEvents ? new Ti() : Ti.Event,
        m = f.getBlockElements(),
        p = hu.overrideDefaults(function () {
      return {
        context: a,
        element: j.getRoot()
      };
    }),
        g = function g(e) {
      return e && a && q(e) ? a.getElementById(e) : e;
    },
        h = function h(e) {
      return p("string" == typeof e ? g(e) : e);
    },
        v = function v(e, t, n) {
      var r,
          o,
          i = h(e);
      return i.length && (o = (r = H[t]) && r.get ? r.get(i, t) : i.attr(t)), void 0 === o && (o = n || ""), o;
    },
        y = function y(e) {
      var t = g(e);
      return t ? t.attributes : [];
    },
        b = function b(e, t, n) {
      "" === n && (n = null);
      var r,
          o = h(e),
          i = o.attr(t);
      o.length && ((r = H[t]) && r.set ? r.set(o, n, t) : o.attr(t, n), i !== n && u.onSetAttrib && u.onSetAttrib({
        attrElm: o,
        attrName: t,
        attrValue: n
      }));
    },
        C = function C() {
      return u.root_element || a.body;
    },
        w = function w(e, t) {
      return ur(a.body, g(e), t);
    },
        x = function x(e, t, n) {
      var r = h(e);
      return n ? r.css(t) : ("float" === (t = t.replace(/-(\D)/g, function (e, t) {
        return t.toUpperCase();
      })) && (t = wt.browser.isIE() ? "styleFloat" : "cssFloat"), r[0] && r[0].style ? r[0].style[t] : undefined);
    },
        S = function S(e) {
      var t, n;
      return e = g(e), t = x(e, "width"), n = x(e, "height"), -1 === t.indexOf("px") && (t = 0), -1 === n.indexOf("px") && (n = 0), {
        w: parseInt(t, 10) || e.offsetWidth || e.clientWidth,
        h: parseInt(n, 10) || e.offsetHeight || e.clientHeight
      };
    },
        N = function N(e, t) {
      if (!e) return !1;

      if (!Array.isArray(e)) {
        if ("*" === t) return 1 === e.nodeType;

        if (Cu.test(t)) {
          for (var n = t.toLowerCase().split(/,/), r = e.nodeName.toLowerCase(), o = n.length - 1; 0 <= o; o--) {
            if (n[o] === r) return !0;
          }

          return !1;
        }

        if (e.nodeType && 1 !== e.nodeType) return !1;
      }

      var i = Array.isArray(e) ? e : [e];
      return 0 < Ta(t, i[0].ownerDocument || i[0], null, i).length;
    },
        E = function E(e, t, n, r) {
      var o,
          i = [],
          a = g(e);

      for (r = r === undefined, n = n || ("BODY" !== C().nodeName ? C().parentNode : null), kt.is(t, "string") && (t = "*" === (o = t) ? function (e) {
        return 1 === e.nodeType;
      } : function (e) {
        return N(e, o);
      }); a && !(a === n || $(a.nodeType) || Fn(a) || Un(a));) {
        if (!t || "function" == typeof t && t(a)) {
          if (!r) return [a];
          i.push(a);
        }

        a = a.parentNode;
      }

      return r ? i : null;
    },
        k = function k(e, t, n) {
      var r = t;
      if (e) for ("string" == typeof t && (r = function r(e) {
        return N(e, t);
      }), e = e[n]; e; e = e[n]) {
        if ("function" == typeof r && r(e)) return e;
      }
      return null;
    },
        _ = function _(e, n, r) {
      var o,
          t = "string" == typeof e ? g(e) : e;
      if (!t) return !1;
      if (kt.isArray(t) && (t.length || 0 === t.length)) return o = [], vu(t, function (e, t) {
        e && o.push(n.call(r, "string" == typeof e ? g(e) : e, t));
      }), o;
      var i = r || s;
      return n.call(i, t);
    },
        A = function A(e, t) {
      h(e).each(function (e, n) {
        vu(t, function (e, t) {
          b(n, t, e);
        });
      });
    },
        R = function R(e, r) {
      var t = h(e);
      bu ? t.each(function (e, t) {
        if (!1 !== t.canHaveHTML) {
          for (; t.firstChild;) {
            t.removeChild(t.firstChild);
          }

          try {
            t.innerHTML = "<br>" + r, t.removeChild(t.firstChild);
          } catch (n) {
            hu("<div></div>").html("<br>" + r).contents().slice(1).appendTo(t);
          }

          return r;
        }
      }) : t.html(r);
    },
        T = function T(e, n, r, o, i) {
      return _(e, function (e) {
        var t = "string" == typeof n ? a.createElement(n) : n;
        return A(t, r), o && ("string" != typeof o && o.nodeType ? t.appendChild(o) : "string" == typeof o && R(t, o)), i ? t : e.appendChild(t);
      });
    },
        D = function D(e, t, n) {
      return T(a.createElement(e), e, t, n, !0);
    },
        e = ci.decode,
        O = ci.encodeAllRaw,
        B = function B(e, t) {
      var n = h(e);
      return t ? n.each(function () {
        for (var e; e = this.firstChild;) {
          3 === e.nodeType && 0 === e.data.length ? this.removeChild(e) : this.parentNode.insertBefore(e, this);
        }
      }).remove() : n.remove(), 1 < n.length ? n.toArray() : n[0];
    },
        P = function P(e, t, n) {
      h(e).toggleClass(t, n).each(function () {
        "" === this.className && hu(this).attr("class", null);
      });
    },
        L = function L(t, e, n) {
      return _(e, function (e) {
        return kt.is(e, "array") && (t = t.cloneNode(!0)), n && vu(yu(e.childNodes), function (e) {
          t.appendChild(e);
        }), e.parentNode.replaceChild(t, e);
      });
    },
        I = function I(e) {
      if (An(e)) {
        var t = "a" === e.nodeName.toLowerCase() && !v(e, "href") && v(e, "id");
        if (v(e, "name") || v(e, "data-mce-bookmark") || t) return !0;
      }

      return !1;
    },
        M = function M() {
      return a.createRange();
    },
        F = function F(e, t, n, r) {
      if (kt.isArray(e)) {
        for (var o = e.length, i = []; o--;) {
          i[o] = F(e[o], t, n, r);
        }

        return i;
      }

      return !u.collect || e !== a && e !== c || l.push([e, t, n, r]), d.bind(e, t, n, r || j);
    },
        U = function U(e, t, n) {
      if (kt.isArray(e)) {
        for (var r = e.length, o = []; r--;) {
          o[r] = U(e[r], t, n);
        }

        return o;
      }

      if (0 < l.length && (e === a || e === c)) for (r = l.length; r--;) {
        var i = l[r];
        e !== i[0] || t && t !== i[1] || n && n !== i[2] || d.unbind(i[0], i[1], i[2]);
      }
      return d.unbind(e, t, n);
    },
        z = function z(e) {
      if (e && An(e)) {
        var t = e.getAttribute("data-mce-contenteditable");
        return t && "inherit" !== t ? t : "inherit" !== e.contentEditable ? e.contentEditable : null;
      }

      return null;
    },
        j = {
      doc: a,
      settings: u,
      win: c,
      files: n,
      stdMode: !0,
      boxModel: !0,
      styleSheetLoader: o,
      boundEvents: l,
      styles: i,
      schema: f,
      events: d,
      isBlock: function isBlock(e) {
        if ("string" == typeof e) return !!m[e];

        if (e) {
          var t = e.nodeType;
          if (t) return !(1 !== t || !m[e.nodeName]);
        }

        return !1;
      },
      $: p,
      $$: h,
      root: null,
      clone: function clone(t, e) {
        if (!bu || 1 !== t.nodeType || e) return t.cloneNode(e);
        var n = a.createElement(t.nodeName);
        return vu(y(t), function (e) {
          b(n, e.nodeName, v(t, e.nodeName));
        }), n;
      },
      getRoot: C,
      getViewPort: function getViewPort(e) {
        var t = En(e);
        return {
          x: t.x,
          y: t.y,
          w: t.width,
          h: t.height
        };
      },
      getRect: function getRect(e) {
        e = g(e);
        var t = w(e),
            n = S(e);
        return {
          x: t.x,
          y: t.y,
          w: n.w,
          h: n.h
        };
      },
      getSize: S,
      getParent: function getParent(e, t, n) {
        var r = E(e, t, n, !1);
        return r && 0 < r.length ? r[0] : null;
      },
      getParents: E,
      get: g,
      getNext: function getNext(e, t) {
        return k(e, t, "nextSibling");
      },
      getPrev: function getPrev(e, t) {
        return k(e, t, "previousSibling");
      },
      select: function select(e, t) {
        return Ta(e, g(t) || u.root_element || a, []);
      },
      is: N,
      add: T,
      create: D,
      createHTML: function createHTML(e, t, n) {
        var r,
            o = "";

        for (r in o += "<" + e, t) {
          t.hasOwnProperty(r) && null !== t[r] && "undefined" != typeof t[r] && (o += " " + r + '="' + O(t[r]) + '"');
        }

        return void 0 !== n ? o + ">" + n + "</" + e + ">" : o + " />";
      },
      createFragment: function createFragment(e) {
        var t,
            n = a.createElement("div"),
            r = a.createDocumentFragment();

        for (r.appendChild(n), e && (n.innerHTML = e); t = n.firstChild;) {
          r.appendChild(t);
        }

        return r.removeChild(n), r;
      },
      remove: B,
      setStyle: function setStyle(e, t, n) {
        var r = q(t) ? h(e).css(t, n) : h(e).css(t);
        u.update_styles && xu(i, r);
      },
      getStyle: x,
      setStyles: function setStyles(e, t) {
        var n = h(e).css(t);
        u.update_styles && xu(i, n);
      },
      removeAllAttribs: function removeAllAttribs(e) {
        return _(e, function (e) {
          for (var t = e.attributes, n = t.length - 1; 0 <= n; n--) {
            e.removeAttributeNode(t.item(n));
          }
        });
      },
      setAttrib: b,
      setAttribs: A,
      getAttrib: v,
      getPos: w,
      parseStyle: function parseStyle(e) {
        return i.parse(e);
      },
      serializeStyle: function serializeStyle(e, t) {
        return i.serialize(e, t);
      },
      addStyle: function addStyle(e) {
        var t, n;

        if (j !== Nu.DOM && a === document) {
          if (r[e]) return;
          r[e] = !0;
        }

        (n = a.getElementById("mceDefaultStyles")) || ((n = a.createElement("style")).id = "mceDefaultStyles", n.type = "text/css", (t = a.getElementsByTagName("head")[0]).firstChild ? t.insertBefore(n, t.firstChild) : t.appendChild(n)), n.styleSheet ? n.styleSheet.cssText += e : n.appendChild(a.createTextNode(e));
      },
      loadCSS: function loadCSS(e) {
        W((e = e || "").split(","), function (e) {
          n[e] = !0, o.load(e, V);
        });
      },
      addClass: function addClass(e, t) {
        h(e).addClass(t);
      },
      removeClass: function removeClass(e, t) {
        P(e, t, !1);
      },
      hasClass: function hasClass(e, t) {
        return h(e).hasClass(t);
      },
      toggleClass: P,
      show: function show(e) {
        h(e).show();
      },
      hide: function hide(e) {
        h(e).hide();
      },
      isHidden: function isHidden(e) {
        return "none" === h(e).css("display");
      },
      uniqueId: function uniqueId(e) {
        return (e || "mce_") + t++;
      },
      setHTML: R,
      getOuterHTML: function getOuterHTML(e) {
        var t = "string" == typeof e ? g(e) : e;
        return An(t) ? t.outerHTML : hu("<div></div>").append(hu(t).clone()).html();
      },
      setOuterHTML: function setOuterHTML(e, t) {
        h(e).each(function () {
          try {
            if ("outerHTML" in this) return void (this.outerHTML = t);
          } catch (e) {}

          B(hu(this).html(t), !0);
        });
      },
      decode: e,
      encode: O,
      insertAfter: function insertAfter(e, t) {
        var r = g(t);
        return _(e, function (e) {
          var t = r.parentNode,
              n = r.nextSibling;
          return n ? t.insertBefore(e, n) : t.appendChild(e), e;
        });
      },
      replace: L,
      rename: function rename(t, e) {
        var n;
        return t.nodeName !== e.toUpperCase() && (n = D(e), vu(y(t), function (e) {
          b(n, e.nodeName, v(t, e.nodeName));
        }), L(n, t, !0)), n || t;
      },
      findCommonAncestor: function findCommonAncestor(e, t) {
        for (var n, r = e; r;) {
          for (n = t; n && r !== n;) {
            n = n.parentNode;
          }

          if (r === n) break;
          r = r.parentNode;
        }

        return !r && e.ownerDocument ? e.ownerDocument.documentElement : r;
      },
      toHex: function toHex(e) {
        return i.toHex(kt.trim(e));
      },
      run: _,
      getAttribs: y,
      isEmpty: function isEmpty(e, t) {
        var n,
            r,
            o = 0;
        if (I(e)) return !1;

        if (e = e.firstChild) {
          var i = new Xr(e, e.parentNode),
              a = f ? f.getWhiteSpaceElements() : {};
          t = t || (f ? f.getNonEmptyElements() : null);

          do {
            if (n = e.nodeType, An(e)) {
              var u = e.getAttribute("data-mce-bogus");

              if (u) {
                e = i.next("all" === u);
                continue;
              }

              if (r = e.nodeName.toLowerCase(), t && t[r]) {
                if ("br" !== r) return !1;
                o++, e = i.next();
                continue;
              }

              if (I(e)) return !1;
            }

            if (8 === n) return !1;
            if (3 === n && !Uo(e.nodeValue)) return !1;
            if (3 === n && e.parentNode && a[e.parentNode.nodeName] && Uo(e.nodeValue)) return !1;
            e = i.next();
          } while (e);
        }

        return o <= 1;
      },
      createRng: M,
      nodeIndex: Su,
      split: function split(e, t, n) {
        var r,
            o,
            i,
            a = M();
        if (e && t) return a.setStart(e.parentNode, Su(e)), a.setEnd(t.parentNode, Su(t)), r = a.extractContents(), (a = M()).setStart(t.parentNode, Su(t) + 1), a.setEnd(e.parentNode, Su(e) + 1), o = a.extractContents(), (i = e.parentNode).insertBefore(Yo(j, r), e), n ? i.insertBefore(n, e) : i.insertBefore(t, e), i.insertBefore(Yo(j, o), e), B(e), n || t;
      },
      bind: F,
      unbind: U,
      fire: function fire(e, t, n) {
        return d.fire(e, t, n);
      },
      getContentEditable: z,
      getContentEditableParent: function getContentEditableParent(e) {
        for (var t = C(), n = null; e && e !== t && null === (n = z(e)); e = e.parentNode) {
          ;
        }

        return n;
      },
      destroy: function destroy() {
        if (0 < l.length) for (var e = l.length; e--;) {
          var t = l[e];
          d.unbind(t[0], t[1], t[2]);
        }
        ue(n, function (e, t) {
          o.unload(t), delete n[t];
        }), Ta.setDocument && Ta.setDocument();
      },
      isChildOf: function isChildOf(e, t) {
        for (; e;) {
          if (t === e) return !0;
          e = e.parentNode;
        }

        return !1;
      },
      dumpRng: function dumpRng(e) {
        return "startContainer: " + e.startContainer.nodeName + ", startOffset: " + e.startOffset + ", endContainer: " + e.endContainer.nodeName + ", endOffset: " + e.endOffset;
      }
    },
        H = wu(i, u, function () {
      return j;
    });

    return j;
  }

  (gu = Nu = Nu || {}).DOM = gu(document), gu.nodeIndex = Su;
  var Eu = Nu,
      ku = Eu.DOM,
      _u = kt.each,
      Au = kt.grep,
      Ru = (Tu.prototype._setReferrerPolicy = function (e) {
    this.settings.referrerPolicy = e;
  }, Tu.prototype.loadScript = function (e, t, n) {
    var r = ku,
        o = function o() {
      r.remove(i), a && (a.onerror = a.onload = a = null);
    },
        i = r.uniqueId(),
        a = document.createElement("script");

    a.id = i, a.type = "text/javascript", a.src = kt._addCacheSuffix(e), this.settings.referrerPolicy && r.setAttrib(a, "referrerpolicy", this.settings.referrerPolicy), a.onload = function () {
      o(), t();
    }, a.onerror = function () {
      o(), T(n) ? n() : "undefined" != typeof console && console.log && console.log("Failed to load script: " + e);
    }, (document.getElementsByTagName("head")[0] || document.body).appendChild(a);
  }, Tu.prototype.isDone = function (e) {
    return 2 === this.states[e];
  }, Tu.prototype.markDone = function (e) {
    this.states[e] = 2;
  }, Tu.prototype.add = function (e, t, n, r) {
    var o = this.states[e];
    this.queue.push(e), o === undefined && (this.states[e] = 0), t && (this.scriptLoadedCallbacks[e] || (this.scriptLoadedCallbacks[e] = []), this.scriptLoadedCallbacks[e].push({
      success: t,
      failure: r,
      scope: n || this
    }));
  }, Tu.prototype.load = function (e, t, n, r) {
    return this.add(e, t, n, r);
  }, Tu.prototype.remove = function (e) {
    delete this.states[e], delete this.scriptLoadedCallbacks[e];
  }, Tu.prototype.loadQueue = function (e, t, n) {
    this.loadScripts(this.queue, e, t, n);
  }, Tu.prototype.loadScripts = function (n, e, t, r) {
    var o = this,
        i = [],
        a = function a(t, e) {
      _u(o.scriptLoadedCallbacks[e], function (e) {
        T(e[t]) && e[t].call(e.scope);
      }), o.scriptLoadedCallbacks[e] = undefined;
    };

    o.queueLoadedCallbacks.push({
      success: e,
      failure: r,
      scope: t || this
    });

    var u = function u() {
      var e,
          t = Au(n);
      n.length = 0, _u(t, function (e) {
        2 !== o.states[e] ? 3 !== o.states[e] ? 1 !== o.states[e] && (o.states[e] = 1, o.loading++, o.loadScript(e, function () {
          o.states[e] = 2, o.loading--, a("success", e), u();
        }, function () {
          o.states[e] = 3, o.loading--, i.push(e), a("failure", e), u();
        })) : a("failure", e) : a("success", e);
      }), o.loading || (e = o.queueLoadedCallbacks.slice(0), o.queueLoadedCallbacks.length = 0, _u(e, function (e) {
        0 === i.length ? T(e.success) && e.success.call(e.scope) : T(e.failure) && e.failure.call(e.scope, i);
      }));
    };

    u();
  }, Tu.ScriptLoader = new Tu(), Tu);

  function Tu(e) {
    void 0 === e && (e = {}), this.states = {}, this.queue = [], this.scriptLoadedCallbacks = {}, this.queueLoadedCallbacks = [], this.loading = 0, this.settings = e;
  }

  var Du,
      Ou = function Ou(e) {
    var t = e;
    return {
      get: function get() {
        return t;
      },
      set: function set(e) {
        t = e;
      }
    };
  },
      Bu = {},
      Pu = Ou("en"),
      Lu = function Lu() {
    return ge(Bu, Pu.get());
  },
      Iu = {
    getData: function getData() {
      return se(Bu, function (e) {
        return _ke({}, e);
      });
    },
    setCode: function setCode(e) {
      e && Pu.set(e);
    },
    getCode: function getCode() {
      return Pu.get();
    },
    add: function add(e, t) {
      var n = Bu[e];
      n || (Bu[e] = n = {}), ue(t, function (e, t) {
        n[t.toLowerCase()] = e;
      });
    },
    translate: function translate(e) {
      var t,
          n,
          r = Lu().getOr({}),
          o = function o(e) {
        return T(e) ? Object.prototype.toString.call(e) : i(e) ? "" : "" + e;
      },
          i = function i(e) {
        return "" === e || null === e || e === undefined;
      },
          a = function a(e) {
        var t = o(e);
        return ge(r, t.toLowerCase()).map(o).getOr(t);
      },
          u = function u(e) {
        return e.replace(/{context:\w+}$/, "");
      };

      if (i(e)) return "";
      if (_(t = e) && he(t, "raw")) return o(e.raw);

      if (S(n = e) && 1 < n.length) {
        var s = e.slice(1);
        return u(a(e[0]).replace(/\{([0-9]+)\}/g, function (e, t) {
          return he(s, t) ? o(s[t]) : e;
        }));
      }

      return u(a(e));
    },
    isRtl: function isRtl() {
      return Lu().bind(function (e) {
        return ge(e, "_dir");
      }).exists(function (e) {
        return "rtl" === e;
      });
    },
    hasCode: function hasCode(e) {
      return he(Bu, e);
    }
  };

  function Mu() {
    var r = this,
        o = [],
        s = {},
        c = {},
        i = [],
        l = function l(t, n) {
      var e = H(i, function (e) {
        return e.name === t && e.state === n;
      });
      W(e, function (e) {
        return e.callback();
      });
    },
        f = function f(e) {
      var t;
      return c[e] && (t = c[e].dependencies), t || [];
    },
        d = function d(e, t) {
      return "object" == _typeof(t) ? t : "string" == typeof e ? {
        prefix: "",
        resource: t,
        suffix: ""
      } : {
        prefix: e.prefix,
        resource: t,
        suffix: e.suffix
      };
    },
        m = function m(o, i, a, u, e) {
      var t, n;
      s[o] || (0 !== (t = "string" == typeof i ? i : i.prefix + i.resource + i.suffix).indexOf("/") && -1 === t.indexOf("://") && (t = Mu.baseURL + "/" + t), s[o] = t.substring(0, t.lastIndexOf("/")), n = function n() {
        var n, e, t, r;
        l(o, "loaded"), n = i, e = a, t = u, r = f(o), W(r, function (e) {
          var t = d(n, e);
          m(t.resource, t, undefined, undefined);
        }), e && (t ? e.call(t) : e.call(Ru));
      }, c[o] ? n() : Ru.ScriptLoader.add(t, n, u, e));
    },
        e = function e(_e6, t, n) {
      void 0 === n && (n = "added"), he(c, _e6) && "added" === n || he(s, _e6) && "loaded" === n ? t() : i.push({
        name: _e6,
        state: n,
        callback: t
      });
    };

    return {
      items: o,
      urls: s,
      lookup: c,
      _listeners: i,
      get: function get(e) {
        return c[e] ? c[e].instance : undefined;
      },
      dependencies: f,
      requireLangPack: function requireLangPack(t, n) {
        !1 !== Mu.languageLoad && e(t, function () {
          var e = Iu.getCode();
          !e || n && -1 === ("," + (n || "") + ",").indexOf("," + e + ",") || Ru.ScriptLoader.add(s[t] + "/langs/" + e + ".js");
        }, "loaded");
      },
      add: function add(e, t, n) {
        var r = t;
        return o.push(r), c[e] = {
          instance: r,
          dependencies: n
        }, l(e, "added"), r;
      },
      remove: function remove(e) {
        delete s[e], delete c[e];
      },
      createUrl: d,
      addComponents: function addComponents(e, t) {
        var n = r.urls[e];
        W(t, function (e) {
          Ru.ScriptLoader.add(n + "/" + e);
        });
      },
      load: m,
      waitFor: e
    };
  }

  (Du = Mu = Mu || {}).PluginManager = Du(), Du.ThemeManager = Du();

  var Fu,
      Uu = Mu,
      zu = function zu(n, r) {
    var o = null;
    return {
      cancel: function cancel() {
        null !== o && (clearTimeout(o), o = null);
      },
      throttle: function throttle() {
        for (var e = [], t = 0; t < arguments.length; t++) {
          e[t] = arguments[t];
        }

        null === o && (o = setTimeout(function () {
          n.apply(null, e), o = null;
        }, r));
      }
    };
  },
      ju = function ju(n, r) {
    var o = null;
    return {
      cancel: function cancel() {
        null !== o && (clearTimeout(o), o = null);
      },
      throttle: function throttle() {
        for (var e = [], t = 0; t < arguments.length; t++) {
          e[t] = arguments[t];
        }

        null !== o && clearTimeout(o), o = setTimeout(function () {
          n.apply(null, e), o = null;
        }, r);
      }
    };
  },
      Hu = function Hu(e, t) {
    var n = Gn(e, t);
    return n === undefined || "" === n ? [] : n.split(" ");
  },
      Vu = function Vu(e) {
    return e.dom.classList !== undefined;
  },
      qu = function qu(e, t) {
    return o = t, i = Hu(n = e, r = "class").concat([o]), Xn(n, r, i.join(" ")), !0;
    var n, r, o, i;
  },
      $u = function $u(e, t) {
    return o = t, 0 < (i = H(Hu(n = e, r = "class"), function (e) {
      return e !== o;
    })).length ? Xn(n, r, i.join(" ")) : Qn(n, r), !1;
    var n, r, o, i;
  },
      Wu = function Wu(e, t) {
    Vu(e) ? e.dom.classList.add(t) : qu(e, t);
  },
      Ku = function Ku(e) {
    0 === (Vu(e) ? e.dom.classList : Hu(e, "class")).length && Qn(e, "class");
  },
      Xu = function Xu(e, t) {
    return Vu(e) && e.dom.classList.contains(t);
  },
      Yu = function Yu(e, t) {
    var n = [];
    return W(Gt(e), function (e) {
      t(e) && (n = n.concat([e])), n = n.concat(Yu(e, t));
    }), n;
  },
      Gu = function Gu(e, t) {
    return n = t, o = (r = e) === undefined ? document : r.dom, Dt(o) ? [] : z(o.querySelectorAll(n), At.fromDom);
    var n, r, o;
  },
      Ju = E("mce-annotation"),
      Qu = E("data-mce-annotation"),
      Zu = E("data-mce-annotation-uid"),
      es = function es(r, e) {
    var t = r.selection.getRng(),
        n = At.fromDom(t.startContainer),
        o = At.fromDom(r.getBody()),
        i = e.fold(function () {
      return "." + Ju();
    }, function (e) {
      return "[" + Qu() + '="' + e + '"]';
    }),
        a = Jt(n, t.startOffset).getOr(n),
        u = Or(a, i, function (e) {
      return Ot(e, o);
    }),
        s = function s(e, t) {
      return n = t, (r = e.dom) && r.hasAttribute && r.hasAttribute(n) ? U.some(Gn(e, t)) : U.none();
      var n, r;
    };

    return u.bind(function (e) {
      return s(e, "" + Zu()).bind(function (n) {
        return s(e, "" + Qu()).map(function (e) {
          var t = ts(r, n);
          return {
            uid: n,
            name: e,
            elements: t
          };
        });
      });
    });
  },
      ts = function ts(e, t) {
    var n = At.fromDom(e.getBody());
    return Gu(n, "[" + Zu() + '="' + t + '"]');
  },
      ns = function ns(i, e) {
    var a = Ou({}),
        c = function c(e, t) {
      u(e, function (e) {
        return t(e), e;
      });
    },
        u = function u(e, t) {
      var n = a.get(),
          r = t(n.hasOwnProperty(e) ? n[e] : {
        listeners: [],
        previous: Ou(U.none())
      });
      n[e] = r, a.set(n);
    },
        t = ju(function () {
      var e,
          t,
          n,
          r = a.get(),
          o = (e = ie(r), (n = B.call(e, 0)).sort(t), n);
      W(o, function (e) {
        u(e, function (u) {
          var s = u.previous.get();
          return es(i, U.some(e)).fold(function () {
            var t;
            s.isSome() && (c(t = e, function (e) {
              W(e.listeners, function (e) {
                return e(!1, t);
              });
            }), u.previous.set(U.none()));
          }, function (e) {
            var t,
                n,
                r,
                o = e.uid,
                i = e.name,
                a = e.elements;
            s.is(o) || (n = o, r = a, c(t = i, function (e) {
              W(e.listeners, function (e) {
                return e(!0, t, {
                  uid: n,
                  nodes: z(r, function (e) {
                    return e.dom;
                  })
                });
              });
            }), u.previous.set(U.some(o)));
          }), {
            previous: u.previous,
            listeners: u.listeners
          };
        });
      });
    }, 30);

    i.on("remove", function () {
      t.cancel();
    }), i.on("NodeChange", function () {
      t.throttle();
    });
    return {
      addListener: function addListener(e, t) {
        u(e, function (e) {
          return {
            previous: e.previous,
            listeners: e.listeners.concat([t])
          };
        });
      }
    };
  },
      rs = function rs(e, n) {
    e.on("init", function () {
      e.serializer.addNodeFilter("span", function (e) {
        W(e, function (t) {
          var e;
          e = t, U.from(e.attr(Qu())).bind(n.lookup).each(function (e) {
            !1 === e.persistent && t.unwrap();
          });
        });
      });
    });
  },
      os = 0,
      is = function is(e) {
    var t = new Date().getTime();
    return e + "_" + Math.floor(1e9 * Math.random()) + ++os + String(t);
  },
      as = function as(e, t) {
    var n,
        r,
        o = Ht(e).dom,
        i = At.fromDom(o.createDocumentFragment()),
        a = (n = t, (r = (o || document).createElement("div")).innerHTML = n, Gt(At.fromDom(r)));
    dn(i, a), mn(e), fn(e, i);
  },
      us = function us(e, t) {
    return At.fromDom(e.dom.cloneNode(t));
  },
      ss = function ss(e) {
    return us(e, !1);
  },
      cs = function cs(e) {
    return us(e, !0);
  },
      ls = function ls(e, t, n) {
    void 0 === n && (n = C);

    var r = new Xr(e, t),
        o = function o(e) {
      for (var t; (t = r[e]()) && !In(t) && !n(t);) {
        ;
      }

      return U.from(t).filter(In);
    };

    return {
      current: function current() {
        return U.from(r.current()).filter(In);
      },
      next: function next() {
        return o("next");
      },
      prev: function prev() {
        return o("prev");
      },
      prev2: function prev2() {
        return o("prev2");
      }
    };
  },
      fs = function fs(t, e) {
    var i = e || function (e) {
      return t.isBlock(e) || zn(e) || Vn(e);
    },
        a = function a(e, t, n, r) {
      if (In(e)) {
        var o = r(e, t, e.data);
        if (-1 !== o) return U.some({
          container: e,
          offset: o
        });
      }

      return n().bind(function (e) {
        return a(e.container, e.offset, n, r);
      });
    };

    return {
      backwards: function backwards(e, t, n, r) {
        var o = ls(e, r, i);
        return a(e, t, function () {
          return o.prev().map(function (e) {
            return {
              container: e,
              offset: e.length
            };
          });
        }, n).getOrNull();
      },
      forwards: function forwards(e, t, n, r) {
        var o = ls(e, r, i);
        return a(e, t, function () {
          return o.next().map(function (e) {
            return {
              container: e,
              offset: 0
            };
          });
        }, n).getOrNull();
      }
    };
  },
      ds = function ds(e, t, n) {
    return e.isSome() && t.isSome() ? U.some(n(e.getOrDie(), t.getOrDie())) : U.none();
  },
      ms = Math.round,
      ps = function ps(e) {
    return e ? {
      left: ms(e.left),
      top: ms(e.top),
      bottom: ms(e.bottom),
      right: ms(e.right),
      width: ms(e.width),
      height: ms(e.height)
    } : {
      left: 0,
      top: 0,
      bottom: 0,
      right: 0,
      width: 0,
      height: 0
    };
  },
      gs = function gs(e, t) {
    return e = ps(e), t || (e.left = e.left + e.width), e.right = e.left, e.width = 0, e;
  },
      hs = function hs(e, t, n) {
    return 0 <= e && e <= Math.min(t.height, n.height) / 2;
  },
      vs = function vs(e, t) {
    var n = Math.min(t.height / 2, e.height / 2);
    return e.bottom - n < t.top || !(e.top > t.bottom) && hs(t.top - e.bottom, e, t);
  },
      ys = function ys(e, t) {
    return e.top > t.bottom || !(e.bottom < t.top) && hs(t.bottom - e.top, e, t);
  },
      bs = function bs(e, t, n) {
    return t >= e.left && t <= e.right && n >= e.top && n <= e.bottom;
  },
      Cs = function Cs(e) {
    var t = e.startContainer,
        n = e.startOffset;
    return t.hasChildNodes() && e.endOffset === n + 1 ? t.childNodes[n] : null;
  },
      ws = function ws(e, t) {
    return 1 === e.nodeType && e.hasChildNodes() && (t >= e.childNodes.length && (t = e.childNodes.length - 1), e = e.childNodes[t]), e;
  },
      xs = new RegExp("[\u0300-\u036F\u0483-\u0487\u0488-\u0489\u0591-\u05BD\u05BF\u05C1-\u05C2\u05C4-\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7-\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08E3-\u0902\u093A\u093C\u0941-\u0948\u094D\u0951-\u0957\u0962-\u0963\u0981\u09BC\u09BE\u09C1-\u09C4\u09CD\u09D7\u09E2-\u09E3\u0A01-\u0A02\u0A3C\u0A41-\u0A42\u0A47-\u0A48\u0A4B-\u0A4D\u0A51\u0A70-\u0A71\u0A75\u0A81-\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7-\u0AC8\u0ACD\u0AE2-\u0AE3\u0B01\u0B3C\u0B3E\u0B3F\u0B41-\u0B44\u0B4D\u0B56\u0B57\u0B62-\u0B63\u0B82\u0BBE\u0BC0\u0BCD\u0BD7\u0C00\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55-\u0C56\u0C62-\u0C63\u0C81\u0CBC\u0CBF\u0CC2\u0CC6\u0CCC-\u0CCD\u0CD5-\u0CD6\u0CE2-\u0CE3\u0D01\u0D3E\u0D41-\u0D44\u0D4D\u0D57\u0D62-\u0D63\u0DCA\u0DCF\u0DD2-\u0DD4\u0DD6\u0DDF\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB-\u0EBC\u0EC8-\u0ECD\u0F18-\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86-\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039-\u103A\u103D-\u103E\u1058-\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085-\u1086\u108D\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752-\u1753\u1772-\u1773\u17B4-\u17B5\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u18A9\u1920-\u1922\u1927-\u1928\u1932\u1939-\u193B\u1A17-\u1A18\u1A1B\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1AB0-\u1ABD\u1ABE\u1B00-\u1B03\u1B34\u1B36-\u1B3A\u1B3C\u1B42\u1B6B-\u1B73\u1B80-\u1B81\u1BA2-\u1BA5\u1BA8-\u1BA9\u1BAB-\u1BAD\u1BE6\u1BE8-\u1BE9\u1BED\u1BEF-\u1BF1\u1C2C-\u1C33\u1C36-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8-\u1CF9\u1DC0-\u1DF5\u1DFC-\u1DFF\u200C-\u200D\u20D0-\u20DC\u20DD-\u20E0\u20E1\u20E2-\u20E4\u20E5-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302D\u302E-\u302F\u3099-\u309A\uA66F\uA670-\uA672\uA674-\uA67D\uA69E-\uA69F\uA6F0-\uA6F1\uA802\uA806\uA80B\uA825-\uA826\uA8C4\uA8E0-\uA8F1\uA926-\uA92D\uA947-\uA951\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uA9E5\uAA29-\uAA2E\uAA31-\uAA32\uAA35-\uAA36\uAA43\uAA4C\uAA7C\uAAB0\uAAB2-\uAAB4\uAAB7-\uAAB8\uAABE-\uAABF\uAAC1\uAAEC-\uAAED\uAAF6\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFF9E-\uFF9F]"),
      Ss = function Ss(e) {
    return "string" == typeof e && 768 <= e.charCodeAt(0) && xs.test(e);
  },
      Ns = An,
      Es = Lo,
      ks = Tn("display", "block table"),
      _s = Tn("float", "left right"),
      As = function () {
    for (var n = [], e = 0; e < arguments.length; e++) {
      n[e] = arguments[e];
    }

    return function (e) {
      for (var t = 0; t < n.length; t++) {
        if (!n[t](e)) return !1;
      }

      return !0;
    };
  }(Ns, Es, d(_s)),
      Rs = d(Tn("white-space", "pre pre-line pre-wrap")),
      Ts = In,
      Ds = zn,
      Os = Eu.nodeIndex,
      Bs = ws,
      Ps = function Ps(e) {
    return "createRange" in e ? e.createRange() : Eu.DOM.createRng();
  },
      Ls = function Ls(e) {
    return e && /[\r\n\t ]/.test(e);
  },
      Is = function Is(e) {
    return !!e.setStart && !!e.setEnd;
  },
      Ms = function Ms(e) {
    var t,
        n = e.startContainer,
        r = e.startOffset;
    return !!(Ls(e.toString()) && Rs(n.parentNode) && In(n) && (t = n.data, Ls(t[r - 1]) || Ls(t[r + 1])));
  },
      Fs = function Fs(e) {
    return 0 === e.left && 0 === e.right && 0 === e.top && 0 === e.bottom;
  },
      Us = function Us(e) {
    var t = e.getClientRects(),
        n = 0 < t.length ? ps(t[0]) : ps(e.getBoundingClientRect());
    return !Is(e) && Ds(e) && Fs(n) ? function (e) {
      var t = e.ownerDocument,
          n = Ps(t),
          r = t.createTextNode(lo),
          o = e.parentNode;
      o.insertBefore(r, e), n.setStart(r, 0), n.setEnd(r, 1);
      var i = ps(n.getBoundingClientRect());
      return o.removeChild(r), i;
    }(e) : Fs(n) && Is(e) ? function (e) {
      var t = e.startContainer,
          n = e.endContainer,
          r = e.startOffset,
          o = e.endOffset;

      if (t === n && In(n) && 0 === r && 1 === o) {
        var i = e.cloneRange();
        return i.setEndAfter(n), Us(i);
      }

      return null;
    }(e) : n;
  },
      zs = function zs(e, t) {
    var n = gs(e, t);
    return n.width = 1, n.right = n.left + 1, n;
  },
      js = function js(e) {
    var t,
        n,
        r = [],
        o = function o(e) {
      var t, n;
      0 !== e.height && (0 < r.length && (t = e, n = r[r.length - 1], t.left === n.left && t.top === n.top && t.bottom === n.bottom && t.right === n.right) || r.push(e));
    },
        i = function i(e, t) {
      var n = Ps(e.ownerDocument);

      if (t < e.data.length) {
        if (Ss(e.data[t])) return r;
        if (Ss(e.data[t - 1]) && (n.setStart(e, t), n.setEnd(e, t + 1), !Ms(n))) return o(zs(Us(n), !1)), r;
      }

      0 < t && (n.setStart(e, t - 1), n.setEnd(e, t), Ms(n) || o(zs(Us(n), !1))), t < e.data.length && (n.setStart(e, t), n.setEnd(e, t + 1), Ms(n) || o(zs(Us(n), !0)));
    };

    if (Ts(e.container())) return i(e.container(), e.offset()), r;
    if (Ns(e.container())) if (e.isAtEnd()) n = Bs(e.container(), e.offset()), Ts(n) && i(n, n.data.length), As(n) && !Ds(n) && o(zs(Us(n), !1));else {
      if (n = Bs(e.container(), e.offset()), Ts(n) && i(n, 0), As(n) && e.isAtEnd()) return o(zs(Us(n), !1)), r;
      t = Bs(e.container(), e.offset() - 1), As(t) && !Ds(t) && (!ks(t) && !ks(n) && As(n) || o(zs(Us(t), !1))), As(n) && o(zs(Us(n), !0));
    }
    return r;
  };

  function Hs(t, n, e) {
    var r = function r() {
      return e = e || js(Hs(t, n));
    };

    return {
      container: E(t),
      offset: E(n),
      toRange: function toRange() {
        var e = Ps(t.ownerDocument);
        return e.setStart(t, n), e.setEnd(t, n), e;
      },
      getClientRects: r,
      isVisible: function isVisible() {
        return 0 < r().length;
      },
      isAtStart: function isAtStart() {
        return Ts(t), 0 === n;
      },
      isAtEnd: function isAtEnd() {
        return Ts(t) ? n >= t.data.length : n >= t.childNodes.length;
      },
      isEqual: function isEqual(e) {
        return e && t === e.container() && n === e.offset();
      },
      getNode: function getNode(e) {
        return Bs(t, e ? n - 1 : n);
      }
    };
  }

  (Fu = Hs = Hs || {}).fromRangeStart = function (e) {
    return Fu(e.startContainer, e.startOffset);
  }, Fu.fromRangeEnd = function (e) {
    return Fu(e.endContainer, e.endOffset);
  }, Fu.after = function (e) {
    return Fu(e.parentNode, Os(e) + 1);
  }, Fu.before = function (e) {
    return Fu(e.parentNode, Os(e));
  }, Fu.isAbove = function (e, t) {
    return ds(ne(t.getClientRects()), re(e.getClientRects()), vs).getOr(!1);
  }, Fu.isBelow = function (e, t) {
    return ds(re(t.getClientRects()), ne(e.getClientRects()), ys).getOr(!1);
  }, Fu.isAtStart = function (e) {
    return !!e && e.isAtStart();
  }, Fu.isAtEnd = function (e) {
    return !!e && e.isAtEnd();
  }, Fu.isTextPosition = function (e) {
    return !!e && In(e.container());
  }, Fu.isElementPosition = function (e) {
    return !1 === Fu.isTextPosition(e);
  };

  var Vs,
      qs,
      $s = Hs,
      Ws = function Ws(e, t) {
    In(t) && 0 === t.data.length && e.remove(t);
  },
      Ks = function Ks(e, t, n) {
    var r, o, i, a, u, s, c;
    Un(n) ? (i = e, a = t, u = n, s = U.from(u.firstChild), c = U.from(u.lastChild), a.insertNode(u), s.each(function (e) {
      return Ws(i, e.previousSibling);
    }), c.each(function (e) {
      return Ws(i, e.nextSibling);
    })) : (r = e, o = n, t.insertNode(o), Ws(r, o.previousSibling), Ws(r, o.nextSibling));
  },
      Xs = In,
      Ys = On,
      Gs = Eu.nodeIndex,
      Js = function Js(e) {
    var t = e.parentNode;
    return Ys(t) ? Js(t) : t;
  },
      Qs = function Qs(e) {
    return e ? Se(e.childNodes, function (e, t) {
      return Ys(t) && "BR" !== t.nodeName ? e = e.concat(Qs(t)) : e.push(t), e;
    }, []) : [];
  },
      Zs = function Zs(t) {
    return function (e) {
      return t === e;
    };
  },
      ec = function ec(e) {
    var t = Xs(e) ? "text()" : e.nodeName.toLowerCase();
    return t + "[" + function (e) {
      var r = Qs(Js(e)),
          t = Ne(r, Zs(e), e);
      r = r.slice(0, t + 1);
      var n = Se(r, function (e, t, n) {
        return Xs(t) && Xs(r[n - 1]) && e++, e;
      }, 0);
      return r = we(r, Rn([e.nodeName])), (t = Ne(r, Zs(e), e)) - n;
    }(e) + "]";
  },
      tc = function tc(e, t) {
    var n,
        r,
        o,
        i = [],
        a = t.container(),
        u = t.offset();
    return Xs(a) ? n = function (e, t) {
      for (; (e = e.previousSibling) && Xs(e);) {
        t += e.data.length;
      }

      return t;
    }(a, u) : (u >= (r = a.childNodes).length ? (n = "after", u = r.length - 1) : n = "before", a = r[u]), i.push(ec(a)), o = function (e, t, n) {
      var r = [];

      for (t = t.parentNode; t !== e && (!n || !n(t)); t = t.parentNode) {
        r.push(t);
      }

      return r;
    }(e, a), o = we(o, d(On)), (i = i.concat(Ce(o, ec))).reverse().join("/") + "," + n;
  },
      nc = function nc(e, t) {
    if (!t) return null;
    var n = t.split(","),
        r = n[0].split("/"),
        o = 1 < n.length ? n[1] : "before",
        i = Se(r, function (e, t) {
      var n,
          r,
          o,
          i,
          a = /([\w\-\(\)]+)\[([0-9]+)\]/.exec(t);
      return a ? ("text()" === a[1] && (a[1] = "#text"), n = e, r = a[1], o = parseInt(a[2], 10), i = Qs(n), i = we(i, function (e, t) {
        return !Xs(e) || !Xs(i[t - 1]);
      }), (i = we(i, Rn([r])))[o]) : null;
    }, e);
    return i ? Xs(i) ? function (e, t) {
      for (var n, r = e, o = 0; Xs(r);) {
        if (n = r.data.length, o <= t && t <= o + n) {
          e = r, t -= o;
          break;
        }

        if (!Xs(r.nextSibling)) {
          e = r, t = n;
          break;
        }

        o += n, r = r.nextSibling;
      }

      return Xs(e) && t > e.data.length && (t = e.data.length), $s(e, t);
    }(i, parseInt(o, 10)) : (o = "after" === o ? Gs(i) + 1 : Gs(i), $s(i.parentNode, o)) : null;
  },
      rc = Vn,
      oc = function oc(e, t, n, r, o) {
    var i,
        a = r[o ? "startContainer" : "endContainer"],
        u = r[o ? "startOffset" : "endOffset"],
        s = [],
        c = 0,
        l = e.getRoot();

    for (In(a) ? s.push(n ? function (e, t, n) {
      for (var r = e(t.data.slice(0, n)).length, o = t.previousSibling; o && In(o); o = o.previousSibling) {
        r += e(o.data).length;
      }

      return r;
    }(t, a, u) : u) : (u >= (i = a.childNodes).length && i.length && (c = 1, u = Math.max(0, i.length - 1)), s.push(e.nodeIndex(i[u], n) + c)); a && a !== l; a = a.parentNode) {
      s.push(e.nodeIndex(a, n));
    }

    return s;
  },
      ic = function ic(e, t, n) {
    var r = 0;
    return kt.each(e.select(t), function (e) {
      if ("all" !== e.getAttribute("data-mce-bogus")) return e !== n && void r++;
    }), r;
  },
      ac = function ac(e, t) {
    var n,
        r = t ? "start" : "end",
        o = e[r + "Container"],
        i = e[r + "Offset"];
    An(o) && "TR" === o.nodeName && (o = (n = o.childNodes)[Math.min(t ? i : i - 1, n.length - 1)]) && (i = t ? 0 : o.childNodes.length, e["set" + (t ? "Start" : "End")](o, i));
  },
      uc = function uc(e) {
    return ac(e, !0), ac(e, !1), e;
  },
      sc = function sc(e, t) {
    var n;
    if (An(e) && (e = ws(e, t), rc(e))) return e;

    if (bo(e)) {
      if (In(e) && vo(e) && (e = e.parentNode), n = e.previousSibling, rc(n)) return n;
      if (n = e.nextSibling, rc(n)) return n;
    }
  },
      cc = function cc(e, t, n) {
    var r = n.getNode(),
        o = r ? r.nodeName : null,
        i = n.getRng();
    if (rc(r) || "IMG" === o) return {
      name: o,
      index: ic(n.dom, o, r)
    };
    var a,
        u,
        s,
        c,
        l,
        f,
        d,
        m = sc((a = i).startContainer, a.startOffset) || sc(a.endContainer, a.endOffset);
    return m ? {
      name: o = m.tagName,
      index: ic(n.dom, o, m)
    } : (u = e, c = t, l = i, f = (s = n).dom, (d = {}).start = oc(f, u, c, l, !0), s.isCollapsed() || (d.end = oc(f, u, c, l, !1)), d);
  },
      lc = function lc(e, t, n) {
    var r = {
      "data-mce-type": "bookmark",
      id: t,
      style: "overflow:hidden;line-height:0px"
    };
    return n ? e.create("span", r, "&#xFEFF;") : e.create("span", r);
  },
      fc = function fc(e, t) {
    var n = e.dom,
        r = e.getRng(),
        o = n.uniqueId(),
        i = e.isCollapsed(),
        a = e.getNode(),
        u = a.nodeName;
    if ("IMG" === u) return {
      name: u,
      index: ic(n, u, a)
    };
    var s,
        c = uc(r.cloneRange());
    i || (c.collapse(!1), s = lc(n, o + "_end", t), Ks(n, c, s)), (r = uc(r)).collapse(!0);
    var l = lc(n, o + "_start", t);
    return Ks(n, r, l), e.moveToBookmark({
      id: o,
      keep: !0
    }), {
      id: o
    };
  },
      dc = function dc(e, t, n) {
    return 2 === t ? cc(po, n, e) : 3 === t ? (o = (r = e).getRng(), {
      start: tc(r.dom.getRoot(), $s.fromRangeStart(o)),
      end: tc(r.dom.getRoot(), $s.fromRangeEnd(o))
    }) : t ? {
      rng: e.getRng()
    } : fc(e, !1);
    var r, o;
  },
      mc = N(cc, o, !0),
      pc = Eu.DOM,
      gc = function gc(e, t, n) {
    var r = e.getParam(t, n);
    if (-1 === r.indexOf("=")) return r;
    var o = e.getParam(t, "", "hash");
    return o.hasOwnProperty(e.id) ? o[e.id] : n;
  },
      hc = function hc(e) {
    return e.getParam("content_security_policy", "");
  },
      vc = function vc(e) {
    if (e.getParam("force_p_newlines", !1)) return "p";
    var t = e.getParam("forced_root_block", "p");
    return !1 === t ? "" : !0 === t ? "p" : t;
  },
      yc = function yc(e) {
    return e.getParam("forced_root_block_attrs", {});
  },
      bc = function bc(e) {
    return e.getParam("automatic_uploads", !0, "boolean");
  },
      Cc = function Cc(e) {
    return e.getParam("icons", "", "string");
  },
      wc = function wc(e) {
    return e.getParam("referrer_policy", "", "string");
  },
      xc = function xc(e) {
    return e.getParam("language", "en", "string");
  },
      Sc = function Sc(e) {
    return e.getParam("indent_use_margin", !1);
  },
      Nc = function Nc(e) {
    var t = e.getParam("object_resizing");
    return !1 !== t && !wt.iOS && (q(t) ? t : "table,img,figure.image,div");
  },
      Ec = function Ec(e) {
    return e.getParam("event_root");
  },
      kc = function kc(e) {
    return e.getParam("theme");
  },
      _c = function _c(e) {
    return !1 !== e.getParam("inline_boundaries");
  },
      Ac = function Ac(e) {
    return e.getParam("plugins", "", "string");
  },
      Rc = An,
      Tc = In,
      Dc = function Dc(e) {
    var t = e.parentNode;
    t && t.removeChild(e);
  },
      Oc = function Oc(e) {
    var t = po(e);
    return {
      count: e.length - t.length,
      text: t
    };
  },
      Bc = function Bc(e) {
    for (var t; -1 !== (t = e.data.lastIndexOf(fo));) {
      e.deleteData(t, 1);
    }
  },
      Pc = function Pc(e, t) {
    return Fc(e), t;
  },
      Lc = function Lc(e, t) {
    var n,
        r,
        o = t.container(),
        i = (n = oe(o.childNodes), (-1 === (r = I(n, e)) ? U.none() : U.some(r)).map(function (e) {
      return e < t.offset() ? $s(o, t.offset() - 1) : t;
    }).getOr(t));
    return Fc(e), i;
  },
      Ic = function Ic(e, t) {
    return Tc(e) && t.container() === e ? (r = t, o = Oc((n = e).data.substr(0, r.offset())), i = Oc(n.data.substr(r.offset())), 0 < (o.text + i.text).length ? (Bc(n), $s(n, r.offset() - o.count)) : r) : Pc(e, t);
    var n, r, o, i;
  },
      Mc = function Mc(e, t) {
    return $s.isTextPosition(t) ? Ic(e, t) : (n = e, ((r = t).container() === n.parentNode ? Lc : Pc)(n, r));
    var n, r;
  },
      Fc = function Fc(e) {
    Rc(e) && bo(e) && (Co(e) ? e.removeAttribute("data-mce-caret") : Dc(e)), Tc(e) && (Bc(e), 0 === e.data.length && Dc(e));
  },
      Uc = dt().browser,
      zc = Vn,
      jc = $n,
      Hc = qn,
      Vc = function Vc(e, t, n) {
    var r,
        o,
        i,
        a,
        u = gs(t.getBoundingClientRect(), n),
        s = "BODY" === e.tagName ? (r = e.ownerDocument.documentElement, o = e.scrollLeft || r.scrollLeft, e.scrollTop || r.scrollTop) : (a = e.getBoundingClientRect(), o = e.scrollLeft - a.left, e.scrollTop - a.top);
    return u.left += o, u.right += o, u.top += s, u.bottom += s, u.width = 1, 0 < (i = t.offsetWidth - t.clientWidth) && (n && (i *= -1), u.left += i, u.right += i), u;
  },
      qc = function qc(e, i, a, t) {
    var n,
        u,
        s = Ou(U.none()),
        r = vc(e),
        c = 0 < r.length ? r : "p",
        l = function l() {
      !function (e) {
        for (var t = Gu(At.fromDom(e), "*[contentEditable=false],video,audio,embed,object"), n = 0; n < t.length; n++) {
          var r,
              o = t[n].dom,
              i = o.previousSibling;
          Eo(i) && (1 === (r = i.data).length ? i.parentNode.removeChild(i) : i.deleteData(r.length - 1, 1)), i = o.nextSibling, No(i) && (1 === (r = i.data).length ? i.parentNode.removeChild(i) : i.deleteData(0, 1));
        }
      }(i), u && (Fc(u), u = null), s.get().each(function (e) {
        hu(e.caret).remove(), s.set(U.none());
      }), n && (qr.clearInterval(n), n = null);
    },
        f = function f() {
      n = qr.setInterval(function () {
        t() ? hu("div.mce-visual-caret", i).toggleClass("mce-visual-caret-hidden") : hu("div.mce-visual-caret", i).addClass("mce-visual-caret-hidden");
      }, 500);
    };

    return {
      show: function show(t, e) {
        var n, r;
        if (l(), Hc(e)) return null;
        if (!a(e)) return u = function (e, t) {
          var n,
              r = e.ownerDocument.createTextNode(fo),
              o = e.parentNode;

          if (t) {
            if (n = e.previousSibling, ho(n)) {
              if (bo(n)) return n;
              if (Eo(n)) return n.splitText(n.data.length - 1);
            }

            o.insertBefore(r, e);
          } else {
            if (n = e.nextSibling, ho(n)) {
              if (bo(n)) return n;
              if (No(n)) return n.splitText(1), n;
            }

            e.nextSibling ? o.insertBefore(r, e.nextSibling) : o.appendChild(r);
          }

          return r;
        }(e, t), r = e.ownerDocument.createRange(), Wc(u.nextSibling) ? (r.setStart(u, 0), r.setEnd(u, 0)) : (r.setStart(u, 1), r.setEnd(u, 1)), r;
        u = So(c, e, t), n = Vc(i, e, t), hu(u).css("top", n.top);
        var o = hu('<div class="mce-visual-caret" data-mce-bogus="all"></div>').css(n).appendTo(i)[0];
        return s.set(U.some({
          caret: o,
          element: e,
          before: t
        })), s.get().each(function (e) {
          t && hu(e.caret).addClass("mce-visual-caret-before");
        }), f(), (r = e.ownerDocument.createRange()).setStart(u, 0), r.setEnd(u, 0), r;
      },
      hide: l,
      getCss: function getCss() {
        return ".mce-visual-caret {position: absolute;background-color: black;background-color: currentcolor;}.mce-visual-caret-hidden {display: none;}*[data-mce-caret] {position: absolute;left: -1000px;right: auto;top: 0;margin: 0;padding: 0;}";
      },
      reposition: function reposition() {
        s.get().each(function (e) {
          var t = Vc(i, e.element, e.before);
          hu(e.caret).css(_ke({}, t));
        });
      },
      destroy: function destroy() {
        return qr.clearInterval(n);
      }
    };
  },
      $c = function $c() {
    return Uc.isIE() || Uc.isEdge() || Uc.isFirefox();
  },
      Wc = function Wc(e) {
    return zc(e) || jc(e);
  },
      Kc = function Kc(e) {
    return Wc(e) || Bn(e) && $c();
  },
      Xc = Vn,
      Yc = $n,
      Gc = Tn("display", "block table table-cell table-caption list-item"),
      Jc = bo,
      Qc = vo,
      Zc = An,
      el = Lo,
      tl = function tl(e, t) {
    for (var n; n = e(t);) {
      if (!Qc(n)) return n;
    }

    return null;
  },
      nl = function nl(e, t, n, r, o) {
    var i = new Xr(e, r),
        a = Xc(e) || Qc(e);

    if (t < 0) {
      if (a && n(e = tl(i.prev, !0))) return e;

      for (; e = tl(i.prev, o);) {
        if (n(e)) return e;
      }
    }

    if (0 < t) {
      if (a && n(e = tl(i.next, !0))) return e;

      for (; e = tl(i.next, o);) {
        if (n(e)) return e;
      }
    }

    return null;
  },
      rl = function rl(e, t) {
    for (; e && e !== t;) {
      if (Gc(e)) return e;
      e = e.parentNode;
    }

    return null;
  },
      ol = function ol(e, t, n) {
    return rl(e.container(), n) === rl(t.container(), n);
  },
      il = function il(e, t) {
    if (!t) return null;
    var n = t.container(),
        r = t.offset();
    return Zc(n) ? n.childNodes[r + e] : null;
  },
      al = function al(e, t) {
    var n = t.ownerDocument.createRange();
    return e ? (n.setStartBefore(t), n.setEndBefore(t)) : (n.setStartAfter(t), n.setEndAfter(t)), n;
  },
      ul = function ul(e, t, n) {
    for (var r, o, i, a = e ? "previousSibling" : "nextSibling"; n && n !== t;) {
      if (r = n[a], Jc(r) && (r = r[a]), Xc(r) || Yc(r)) {
        if (i = n, rl(r, o = t) === rl(i, o)) return r;
        break;
      }

      if (el(r)) break;
      n = n.parentNode;
    }

    return null;
  },
      sl = N(al, !0),
      cl = N(al, !1),
      ll = function ll(e, t, n) {
    var r,
        o,
        i = N(ul, !0, t),
        a = N(ul, !1, t),
        u = n.startContainer,
        s = n.startOffset;

    if (vo(u)) {
      if (Zc(u) || (u = u.parentNode), "before" === (o = u.getAttribute("data-mce-caret")) && (r = u.nextSibling, Kc(r))) return sl(r);
      if ("after" === o && (r = u.previousSibling, Kc(r))) return cl(r);
    }

    if (!n.collapsed) return n;

    if (In(u)) {
      if (Jc(u)) {
        if (1 === e) {
          if (r = a(u)) return sl(r);
          if (r = i(u)) return cl(r);
        }

        if (-1 === e) {
          if (r = i(u)) return cl(r);
          if (r = a(u)) return sl(r);
        }

        return n;
      }

      if (Eo(u) && s >= u.data.length - 1) return 1 === e && (r = a(u)) ? sl(r) : n;
      if (No(u) && s <= 1) return -1 === e && (r = i(u)) ? cl(r) : n;
      if (s === u.data.length) return (r = a(u)) ? sl(r) : n;
      if (0 === s) return (r = i(u)) ? cl(r) : n;
    }

    return n;
  },
      fl = function fl(e, t) {
    return U.from(il(e ? 0 : -1, t)).filter(Xc);
  },
      dl = function dl(e, t, n) {
    var r = ll(e, t, n);
    return -1 === e ? Hs.fromRangeStart(r) : Hs.fromRangeEnd(r);
  },
      ml = function ml(e) {
    return U.from(e.getNode()).map(At.fromDom);
  },
      pl = function pl(e, t) {
    for (; t = e(t);) {
      if (t.isVisible()) return t;
    }

    return t;
  },
      gl = function gl(e, t) {
    var n = ol(e, t);
    return !(n || !zn(e.getNode())) || n;
  };

  (qs = Vs = Vs || {})[qs.Backwards = -1] = "Backwards", qs[qs.Forwards = 1] = "Forwards";

  var hl,
      vl = Vn,
      yl = In,
      bl = An,
      Cl = zn,
      wl = Lo,
      xl = function xl(e) {
    return Oo(e) || !!Io(t = e) && !0 !== X(oe(t.getElementsByTagName("*")), function (e, t) {
      return e || _o(t);
    }, !1);
    var t;
  },
      Sl = Mo,
      Nl = function Nl(e, t) {
    return e.hasChildNodes() && t < e.childNodes.length ? e.childNodes[t] : null;
  },
      El = function El(e, t) {
    if (0 < e) {
      if (wl(t.previousSibling) && !yl(t.previousSibling)) return $s.before(t);
      if (yl(t)) return $s(t, 0);
    }

    if (e < 0) {
      if (wl(t.nextSibling) && !yl(t.nextSibling)) return $s.after(t);
      if (yl(t)) return $s(t, t.data.length);
    }

    return !(e < 0) || Cl(t) ? $s.before(t) : $s.after(t);
  },
      kl = function kl(e, t, n) {
    var r, o, i, a;
    if (!bl(n) || !t) return null;

    if (t.isEqual($s.after(n)) && n.lastChild) {
      if (a = $s.after(n.lastChild), e < 0 && wl(n.lastChild) && bl(n.lastChild)) return Cl(n.lastChild) ? $s.before(n.lastChild) : a;
    } else a = t;

    var u,
        s,
        c,
        l = a.container(),
        f = a.offset();

    if (yl(l)) {
      if (e < 0 && 0 < f) return $s(l, --f);
      if (0 < e && f < l.length) return $s(l, ++f);
      r = l;
    } else {
      if (e < 0 && 0 < f && (o = Nl(l, f - 1), wl(o))) return !xl(o) && (i = nl(o, e, Sl, o)) ? yl(i) ? $s(i, i.data.length) : $s.after(i) : yl(o) ? $s(o, o.data.length) : $s.before(o);
      if (0 < e && f < l.childNodes.length && (o = Nl(l, f), wl(o))) return Cl(o) ? (u = n, (c = (s = o).nextSibling) && wl(c) ? yl(c) ? $s(c, 0) : $s.before(c) : kl(Vs.Forwards, $s.after(s), u)) : !xl(o) && (i = nl(o, e, Sl, o)) ? yl(i) ? $s(i, 0) : $s.before(i) : yl(o) ? $s(o, 0) : $s.after(o);
      r = o || a.getNode();
    }

    if ((0 < e && a.isAtEnd() || e < 0 && a.isAtStart()) && (r = nl(r, e, k, n, !0), Sl(r, n))) return El(e, r);
    o = nl(r, e, Sl, n);
    var d = Ee(H(function (e, t) {
      for (var n = []; e && e !== t;) {
        n.push(e), e = e.parentNode;
      }

      return n;
    }(l, n), vl));
    return !d || o && d.contains(o) ? o ? El(e, o) : null : a = 0 < e ? $s.after(d) : $s.before(d);
  },
      _l = function _l(t) {
    return {
      next: function next(e) {
        return kl(Vs.Forwards, e, t);
      },
      prev: function prev(e) {
        return kl(Vs.Backwards, e, t);
      }
    };
  },
      Al = function Al(e) {
    return $s.isTextPosition(e) ? 0 === e.offset() : Lo(e.getNode());
  },
      Rl = function Rl(e) {
    if ($s.isTextPosition(e)) {
      var t = e.container();
      return e.offset() === t.data.length;
    }

    return Lo(e.getNode(!0));
  },
      Tl = function Tl(e, t) {
    return !$s.isTextPosition(e) && !$s.isTextPosition(t) && e.getNode() === t.getNode(!0);
  },
      Dl = function Dl(e, t, n) {
    return e ? !Tl(t, n) && (r = t, !(!$s.isTextPosition(r) && zn(r.getNode()))) && Rl(t) && Al(n) : !Tl(n, t) && Al(t) && Rl(n);
    var r;
  },
      Ol = function Ol(e, t, n) {
    var r = _l(t);

    return U.from(e ? r.next(n) : r.prev(n));
  },
      Bl = function Bl(t, n, r) {
    return Ol(t, n, r).bind(function (e) {
      return ol(r, e, n) && Dl(t, r, e) ? Ol(t, n, e) : U.some(e);
    });
  },
      Pl = function Pl(t, n, e, r) {
    return Bl(t, n, e).bind(function (e) {
      return r(e) ? Pl(t, n, e, r) : U.some(e);
    });
  },
      Ll = function Ll(e, t) {
    var n,
        r,
        o,
        i,
        a,
        u = e ? t.firstChild : t.lastChild;
    return In(u) ? U.some($s(u, e ? 0 : u.data.length)) : u ? Lo(u) ? U.some(e ? $s.before(u) : zn(a = u) ? $s.before(a) : $s.after(a)) : (r = t, o = u, i = (n = e) ? $s.before(o) : $s.after(o), Ol(n, r, i)) : U.none();
  },
      Il = N(Ol, !0),
      Ml = N(Ol, !1),
      Fl = N(Ll, !0),
      Ul = N(Ll, !1),
      zl = "_mce_caret",
      jl = function jl(e) {
    return An(e) && e.id === zl;
  },
      Hl = function Hl(e, t) {
    for (; t && t !== e;) {
      if (t.id === zl) return t;
      t = t.parentNode;
    }

    return null;
  },
      Vl = function Vl(e, t) {
    return An(t) && e.isBlock(t) && !t.innerHTML && !wt.ie && (t.innerHTML = '<br data-mce-bogus="1" />'), t;
  },
      ql = function ql(e, t, n) {
    return !(!1 !== t.hasChildNodes() || !Hl(e, t)) && (o = n, i = (r = t).ownerDocument.createTextNode(fo), r.appendChild(i), o.setStart(i, 0), o.setEnd(i, 0), !0);
    var r, o, i;
  },
      $l = function $l(e, t, n, r) {
    var o,
        i,
        a,
        u,
        s = n[t ? "start" : "end"],
        c = e.getRoot();

    if (s) {
      for (a = s[0], i = c, o = s.length - 1; 1 <= o; o--) {
        if (u = i.childNodes, ql(c, i, r)) return !0;
        if (s[o] > u.length - 1) return !!ql(c, i, r) || function (e, t) {
          return Ul(e).fold(function () {
            return !1;
          }, function (e) {
            return t.setStart(e.container(), e.offset()), t.setEnd(e.container(), e.offset()), !0;
          });
        }(i, r);
        i = u[s[o]];
      }

      3 === i.nodeType && (a = Math.min(s[0], i.nodeValue.length)), 1 === i.nodeType && (a = Math.min(s[0], i.childNodes.length)), t ? r.setStart(i, a) : r.setEnd(i, a);
    }

    return !0;
  },
      Wl = function Wl(e) {
    return In(e) && 0 < e.data.length;
  },
      Kl = function Kl(e, t, n) {
    var r,
        o,
        i,
        a,
        u,
        s,
        c = e.get(n.id + "_" + t),
        l = n.keep;

    if (c) {
      if (r = c.parentNode, s = (u = (o = "start" === t ? l ? c.hasChildNodes() ? (r = c.firstChild, 1) : Wl(c.nextSibling) ? (r = c.nextSibling, 0) : Wl(c.previousSibling) ? (r = c.previousSibling, c.previousSibling.data.length) : (r = c.parentNode, e.nodeIndex(c) + 1) : e.nodeIndex(c) : l ? c.hasChildNodes() ? (r = c.firstChild, 1) : Wl(c.previousSibling) ? (r = c.previousSibling, c.previousSibling.data.length) : (r = c.parentNode, e.nodeIndex(c)) : e.nodeIndex(c), r), o), !l) {
        for (a = c.previousSibling, i = c.nextSibling, kt.each(kt.grep(c.childNodes), function (e) {
          In(e) && (e.nodeValue = e.nodeValue.replace(/\uFEFF/g, ""));
        }); c = e.get(n.id + "_" + t);) {
          e.remove(c, !0);
        }

        a && i && a.nodeType === i.nodeType && In(a) && !wt.opera && (o = a.nodeValue.length, a.appendData(i.nodeValue), e.remove(i), u = a, s = o);
      }

      return U.some($s(u, s));
    }

    return U.none();
  },
      Xl = function Xl(e, t) {
    var n,
        r,
        o,
        i,
        a,
        u,
        s,
        c,
        l,
        f,
        d,
        m,
        p,
        g,
        h = e.dom;

    if (t) {
      if (g = t, kt.isArray(g.start)) return m = t, p = (d = h).createRng(), $l(d, !0, m, p) && $l(d, !1, m, p) ? U.some(p) : U.none();
      if ("string" == typeof t.start) return U.some((c = t, l = (s = h).createRng(), f = nc(s.getRoot(), c.start), l.setStart(f.container(), f.offset()), f = nc(s.getRoot(), c.end), l.setEnd(f.container(), f.offset()), l));
      if (t.hasOwnProperty("id")) return a = Kl(o = h, "start", i = t), u = Kl(o, "end", i), ds(a, u.or(a), function (e, t) {
        var n = o.createRng();
        return n.setStart(Vl(o, e.container()), e.offset()), n.setEnd(Vl(o, t.container()), t.offset()), n;
      });
      if (t.hasOwnProperty("name")) return n = h, r = t, U.from(n.select(r.name)[r.index]).map(function (e) {
        var t = n.createRng();
        return t.selectNode(e), t;
      });
      if (t.hasOwnProperty("rng")) return U.some(t.rng);
    }

    return U.none();
  },
      Yl = dc,
      Gl = function Gl(t, e) {
    Xl(t, e).each(function (e) {
      t.setRng(e);
    });
  },
      Jl = function Jl(e) {
    return An(e) && "SPAN" === e.tagName && "bookmark" === e.getAttribute("data-mce-type");
  },
      Ql = (hl = lo, function (e) {
    return hl === e;
  }),
      Zl = function Zl(e) {
    return "" !== e && -1 !== " \f\n\r\t\x0B".indexOf(e);
  },
      ef = function ef(e) {
    return !Zl(e) && !Ql(e);
  },
      tf = function tf(e) {
    return !!e.nodeType;
  },
      nf = function nf(e, t, n) {
    var r,
        o,
        i,
        a,
        u = n.startOffset,
        s = n.startContainer;
    if ((n.startContainer !== n.endContainer || !(a = n.startContainer.childNodes[n.startOffset]) || !/^(IMG)$/.test(a.nodeName)) && 1 === s.nodeType) for (u < (i = s.childNodes).length ? (s = i[u], r = new Xr(s, e.getParent(s, e.isBlock))) : (s = i[i.length - 1], (r = new Xr(s, e.getParent(s, e.isBlock))).next(!0)), o = r.current(); o; o = r.next()) {
      if (3 === o.nodeType && !uf(o)) return n.setStart(o, 0), void t.setRng(n);
    }
  },
      rf = function rf(e, t, n) {
    if (e) {
      var r = t ? "nextSibling" : "previousSibling";

      for (e = n ? e : e[r]; e; e = e[r]) {
        if (1 === e.nodeType || !uf(e)) return e;
      }
    }
  },
      of = function of(e, t) {
    return tf(t) && (t = t.nodeName), !!e.schema.getTextBlockElements()[t.toLowerCase()];
  },
      af = function af(e, t, n) {
    return e.schema.isValidChild(t, n);
  },
      uf = function uf(e, t) {
    if (void 0 === t && (t = !1), D(e) && In(e)) {
      var n = t ? e.data.replace(/ /g, "\xa0") : e.data;
      return Uo(n);
    }

    return !1;
  },
      sf = function sf(e, n) {
    return "string" != typeof e ? e = e(n) : n && (e = e.replace(/%(\w+)/g, function (e, t) {
      return n[t] || e;
    })), e;
  },
      cf = function cf(e, t) {
    return e = "" + ((e = e || "").nodeName || e), t = "" + ((t = t || "").nodeName || t), e.toLowerCase() === t.toLowerCase();
  },
      lf = function lf(e, t, n) {
    return "color" !== n && "backgroundColor" !== n || (t = e.toHex(t)), "fontWeight" === n && 700 === t && (t = "bold"), "fontFamily" === n && (t = t.replace(/[\'\"]/g, "").replace(/,\s+/g, ",")), "" + t;
  },
      ff = function ff(e, t, n) {
    return lf(e, e.getStyle(t, n), n);
  },
      df = function df(t, e) {
    var n;
    return t.getParent(e, function (e) {
      return (n = t.getStyle(e, "text-decoration")) && "none" !== n;
    }), n;
  },
      mf = function mf(e, t, n) {
    return e.getParents(t, n, e.getRoot());
  },
      pf = function pf(t, e, n) {
    var r = ["inline", "block", "selector", "attributes", "styles", "classes"],
        a = function a(e) {
      return me(e, function (e, t) {
        return F(r, function (e) {
          return e === t;
        });
      });
    };

    return F(t.formatter.get(e), function (e) {
      var i = a(e);
      return F(t.formatter.get(n), function (e) {
        var t,
            n,
            r,
            o = a(e);
        return t = i, n = o, void 0 === r && (r = l), u(r).eq(t, n);
      });
    });
  },
      gf = function gf(e) {
    return ve(e, "block");
  },
      hf = function hf(e) {
    return ve(e, "selector");
  },
      vf = function vf(e) {
    return ve(e, "inline");
  },
      yf = Jl,
      bf = mf,
      Cf = uf,
      wf = of,
      xf = function xf(e, t) {
    for (var n = t; n;) {
      if (An(n) && e.getContentEditable(n)) return "false" === e.getContentEditable(n) ? n : t;
      n = n.parentNode;
    }

    return t;
  },
      Sf = function Sf(e, t, n, r) {
    for (var o = t.data, i = n; e ? 0 <= i : i < o.length; e ? i-- : i++) {
      if (r(o.charAt(i))) return e ? i + 1 : i;
    }

    return -1;
  },
      Nf = function Nf(e, t, n) {
    return Sf(e, t, n, function (e) {
      return Ql(e) || Zl(e);
    });
  },
      Ef = function Ef(e, t, n) {
    return Sf(e, t, n, ef);
  },
      kf = function kf(i, e, t, n, a, r) {
    var u,
        s = i.getParent(t, i.isBlock) || e,
        o = function o(e, t, n) {
      var r = fs(i),
          o = a ? r.backwards : r.forwards;
      return U.from(o(e, t, function (e, t) {
        return yf(e.parentNode) ? -1 : n(a, u = e, t);
      }, s));
    };

    return o(t, n, Nf).bind(function (e) {
      return r ? o(e.container, e.offset + (a ? -1 : 0), Ef) : U.some(e);
    }).orThunk(function () {
      return u ? U.some({
        container: u,
        offset: a ? 0 : u.length
      }) : U.none();
    });
  },
      _f = function _f(e, t, n, r, o) {
    In(r) && 0 === r.nodeValue.length && r[o] && (r = r[o]);

    for (var i = bf(e, r), a = 0; a < i.length; a++) {
      for (var u = 0; u < t.length; u++) {
        var s = t[u];
        if (!("collapsed" in s && s.collapsed !== n.collapsed) && e.is(i[a], s.selector)) return i[a];
      }
    }

    return r;
  },
      Af = function Af(t, e, n, r) {
    var o,
        i,
        a = t.dom,
        u = a.getRoot();
    if (e[0].wrapper || (i = a.getParent(n, e[0].block, u)), i || (o = a.getParent(n, "LI,TD,TH"), i = a.getParent(In(n) ? n.parentNode : n, function (e) {
      return e !== u && wf(t, e);
    }, o)), i && e[0].wrapper && (i = bf(a, i, "ul,ol").reverse()[0] || i), !i) for (i = n; i[r] && !a.isBlock(i[r]) && (i = i[r], !cf(i, "br"));) {
      ;
    }
    return i || n;
  },
      Rf = function Rf(e, t, n, r) {
    var o = n.parentNode;
    return !D(n[r]) && (!(o !== t && !$(o) && !e.isBlock(o)) || Rf(e, t, o, r));
  },
      Tf = function Tf(e, t, n, r, o) {
    var i,
        a,
        u = n,
        s = o ? "previousSibling" : "nextSibling",
        c = e.getRoot();
    if (In(n) && !Cf(n) && (o ? 0 < r : r < n.data.length)) return n;

    for (;;) {
      if (!t[0].block_expand && e.isBlock(u)) return u;

      for (i = u[s]; i; i = i[s]) {
        var l = In(i) && !Rf(e, c, i, s);
        if (!yf(i) && (!zn(a = i) || !a.getAttribute("data-mce-bogus") || a.nextSibling) && !Cf(i, l)) return u;
      }

      if (u === c || u.parentNode === c) {
        n = u;
        break;
      }

      u = u.parentNode;
    }

    return n;
  },
      Df = function Df(e) {
    return yf(e.parentNode) || yf(e);
  },
      Of = function Of(e, t, n, r) {
    void 0 === r && (r = !1);
    var o = t.startContainer,
        i = t.startOffset,
        a = t.endContainer,
        u = t.endOffset,
        s = e.dom;
    return An(o) && o.hasChildNodes() && (o = ws(o, i), In(o) && (i = 0)), An(a) && a.hasChildNodes() && (a = ws(a, t.collapsed ? u : u - 1), In(a) && (u = a.nodeValue.length)), o = xf(s, o), a = xf(s, a), Df(o) && (o = yf(o) ? o : o.parentNode, o = t.collapsed ? o.previousSibling || o : o.nextSibling || o, In(o) && (i = t.collapsed ? o.length : 0)), Df(a) && (a = yf(a) ? a : a.parentNode, a = t.collapsed ? a.nextSibling || a : a.previousSibling || a, In(a) && (u = t.collapsed ? 0 : a.length)), t.collapsed && (kf(s, e.getBody(), o, i, !0, r).each(function (e) {
      var t = e.container,
          n = e.offset;
      o = t, i = n;
    }), kf(s, e.getBody(), a, u, !1, r).each(function (e) {
      var t = e.container,
          n = e.offset;
      a = t, u = n;
    })), (n[0].inline || n[0].block_expand) && (n[0].inline && In(o) && 0 !== i || (o = Tf(s, n, o, i, !0)), n[0].inline && In(a) && u !== a.nodeValue.length || (a = Tf(s, n, a, u, !1))), n[0].selector && !1 !== n[0].expand && !n[0].inline && (o = _f(s, n, t, o, "previousSibling"), a = _f(s, n, t, a, "nextSibling")), (n[0].block || n[0].selector) && (o = Af(e, n, o, "previousSibling"), a = Af(e, n, a, "nextSibling"), n[0].block && (s.isBlock(o) || (o = Tf(s, n, o, i, !0)), s.isBlock(a) || (a = Tf(s, n, a, u, !1)))), An(o) && (i = s.nodeIndex(o), o = o.parentNode), An(a) && (u = s.nodeIndex(a) + 1, a = a.parentNode), {
      startContainer: o,
      startOffset: i,
      endContainer: a,
      endOffset: u
    };
  },
      Bf = function Bf(e, t) {
    var n = e.childNodes;
    return t >= n.length ? t = n.length - 1 : t < 0 && (t = 0), n[t] || e;
  },
      Pf = function Pf(e, t, u) {
    var n = t.startContainer,
        r = t.startOffset,
        o = t.endContainer,
        i = t.endOffset,
        s = function s(e) {
      var t = e[0];
      return 3 === t.nodeType && t === n && r >= t.nodeValue.length && e.splice(0, 1), t = e[e.length - 1], 0 === i && 0 < e.length && t === o && 3 === t.nodeType && e.splice(e.length - 1, 1), e;
    },
        c = function c(e, t, n) {
      for (var r = []; e && e !== n; e = e[t]) {
        r.push(e);
      }

      return r;
    },
        a = function a(e, t) {
      do {
        if (e.parentNode === t) return e;
        e = e.parentNode;
      } while (e);
    },
        l = function l(e, t, n) {
      for (var r = n ? "nextSibling" : "previousSibling", o = e, i = o.parentNode; o && o !== t; o = i) {
        i = o.parentNode;
        var a = c(o === e ? o : o[r], r);
        a.length && (n || a.reverse(), u(s(a)));
      }
    };

    if (1 === n.nodeType && n.hasChildNodes() && (n = Bf(n, r)), 1 === o.nodeType && o.hasChildNodes() && (o = Bf(o, i - 1)), n === o) return u(s([n]));

    for (var f = e.findCommonAncestor(n, o), d = n; d; d = d.parentNode) {
      if (d === o) return l(n, f, !0);
      if (d === f) break;
    }

    for (d = o; d; d = d.parentNode) {
      if (d === n) return l(o, f);
      if (d === f) break;
    }

    var m = a(n, f) || n,
        p = a(o, f) || o;
    l(n, m, !0);
    var g = c(m === n ? m : m.nextSibling, "nextSibling", p === o ? p.nextSibling : p);
    g.length && u(s(g)), l(o, p);
  },
      Lf = function Lf(e) {
    var t = [];
    if (e) for (var n = 0; n < e.rangeCount; n++) {
      t.push(e.getRangeAt(n));
    }
    return t;
  },
      If = function If(e) {
    return H(J(e, function (e) {
      var t = Cs(e);
      return t ? [At.fromDom(t)] : [];
    }), uo);
  },
      Mf = function Mf(e, t) {
    var n = Gu(t, "td[data-mce-selected],th[data-mce-selected]");
    return 0 < n.length ? n : If(e);
  },
      Ff = function Ff(e) {
    return Mf(Lf(e.selection.getSel()), At.fromDom(e.getBody()));
  },
      Uf = function Uf(t) {
    return Qt(t).fold(E([t]), function (e) {
      return [t].concat(Uf(e));
    });
  },
      zf = function zf(t) {
    return Zt(t).fold(E([t]), function (e) {
      return "br" === Lt(e) ? Wt(e).map(function (e) {
        return [t].concat(zf(e));
      }).getOr([]) : [t].concat(zf(e));
    });
  },
      jf = function jf(o, e) {
    return ds((a = (i = e).startContainer, u = i.startOffset, In(a) ? 0 === u ? U.some(At.fromDom(a)) : U.none() : U.from(a.childNodes[u]).map(At.fromDom)), (n = (t = e).endContainer, r = t.endOffset, In(n) ? r === n.data.length ? U.some(At.fromDom(n)) : U.none() : U.from(n.childNodes[r - 1]).map(At.fromDom)), function (e, t) {
      var n = Y(Uf(o), N(Ot, e)),
          r = Y(zf(o), N(Ot, t));
      return n.isSome() && r.isSome();
    }).getOr(!1);
    var t, n, r, i, a, u;
  },
      Hf = function Hf(e, t, n, r) {
    var o = n,
        i = new Xr(n, o),
        a = me(e.schema.getMoveCaretBeforeOnEnterElements(), function (e, t) {
      return !M(["td", "th", "table"], t.toLowerCase());
    });

    do {
      if (In(n) && 0 !== kt.trim(n.nodeValue).length) return void (r ? t.setStart(n, 0) : t.setEnd(n, n.nodeValue.length));
      if (a[n.nodeName]) return void (r ? t.setStartBefore(n) : "BR" === n.nodeName ? t.setEndBefore(n) : t.setEndAfter(n));
    } while (n = r ? i.next() : i.prev());

    "BODY" === o.nodeName && (r ? t.setStart(o, 0) : t.setEnd(o, o.childNodes.length));
  },
      Vf = function Vf(e) {
    var t = e.selection.getSel();
    return t && 0 < t.rangeCount;
  },
      qf = function qf(r, o) {
    var e = Ff(r);
    0 < e.length ? W(e, function (e) {
      var t = e.dom,
          n = r.dom.createRng();
      n.setStartBefore(t), n.setEndAfter(t), o(n, !0);
    }) : o(r.selection.getRng(), !1);
  },
      $f = function $f(e, t, n) {
    var r = fc(e, t);
    n(r), e.moveToBookmark(r);
  };

  var Wf,
      Kf,
      Xf,
      Yf = (Wf = Ut, Kf = "text", {
    get: function get(e) {
      if (!Wf(e)) throw new Error("Can only get " + Kf + " value of a " + Kf + " node");
      return Xf(e).getOr("");
    },
    getOption: Xf = function Xf(e) {
      return Wf(e) ? U.from(e.dom.nodeValue) : U.none();
    },
    set: function set(e, t) {
      if (!Wf(e)) throw new Error("Can only set raw " + Kf + " value of a " + Kf + " node");
      e.dom.nodeValue = t;
    }
  }),
      Gf = function Gf(e) {
    return Yf.get(e);
  },
      Jf = function Jf(r, o, i, a) {
    return $t(o).fold(function () {
      return "skipping";
    }, function (e) {
      return "br" === a || Ut(n = o) && Gf(n) === fo ? "valid" : Ft(t = o) && Xu(t, Ju()) ? "existing" : jl(o.dom) ? "caret" : af(r, i, a) && af(r, Lt(e), i) ? "valid" : "invalid-child";
      var t, n;
    });
  },
      Qf = function Qf(e, t, n, r) {
    var o = t.uid,
        i = void 0 === o ? is("mce-annotation") : o,
        a = function (e, t) {
      var n = {};

      for (var r in e) {
        Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
      }

      if (null != e && "function" == typeof Object.getOwnPropertySymbols) for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++) {
        t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
      }
      return n;
    }(t, ["uid"]),
        u = At.fromTag("span", e);

    Wu(u, Ju()), Xn(u, "" + Zu(), i), Xn(u, "" + Qu(), n);
    var s,
        c = r(i, a),
        l = c.attributes,
        f = void 0 === l ? {} : l,
        d = c.classes,
        m = void 0 === d ? [] : d;
    return Yn(u, f), s = u, W(m, function (e) {
      Wu(s, e);
    }), u;
  },
      Zf = function Zf(i, e, t, n, r) {
    var a = [],
        u = Qf(i.getDoc(), r, t, n),
        s = Ou(U.none()),
        c = function c() {
      s.set(U.none());
    },
        l = function l(e) {
      W(e, o);
    },
        o = function o(e) {
      var t, n;

      switch (Jf(i, e, "span", Lt(e))) {
        case "invalid-child":
          c();
          var r = Gt(e);
          l(r), c();
          break;

        case "valid":
          var o = s.get().getOrThunk(function () {
            var e = ss(u);
            return a.push(e), s.set(U.some(e)), e;
          });
          sn(t = e, n = o), fn(n, t);
      }
    };

    return Pf(i.dom, e, function (e) {
      var t;
      c(), t = z(e, At.fromDom), l(t);
    }), a;
  },
      ed = function ed(u, s, c, l) {
    u.undoManager.transact(function () {
      var e,
          t,
          n,
          r,
          o = u.selection,
          i = o.getRng(),
          a = 0 < Ff(u).length;
      i.collapsed && !a && (n = Of(e = u, t = i, [{
        inline: !0
      }]), t.setStart(n.startContainer, n.startOffset), t.setEnd(n.endContainer, n.endOffset), e.selection.setRng(t)), o.getRng().collapsed && !a ? (r = Qf(u.getDoc(), l, s, c.decorate), as(r, lo), o.getRng().insertNode(r.dom), o.select(r.dom)) : $f(o, !1, function () {
        qf(u, function (e) {
          Zf(u, e, s, c.decorate, l);
        });
      });
    });
  },
      td = function td(u) {
    var n,
        r = (n = {}, {
      register: function register(e, t) {
        n[e] = {
          name: e,
          settings: t
        };
      },
      lookup: function lookup(e) {
        return n.hasOwnProperty(e) ? U.from(n[e]).map(function (e) {
          return e.settings;
        }) : U.none();
      }
    });
    rs(u, r);
    var o = ns(u);
    return {
      register: function register(e, t) {
        r.register(e, t);
      },
      annotate: function annotate(t, n) {
        r.lookup(t).each(function (e) {
          ed(u, t, e, n);
        });
      },
      annotationChanged: function annotationChanged(e, t) {
        o.addListener(e, t);
      },
      remove: function remove(e) {
        es(u, U.some(e)).each(function (e) {
          var t = e.elements;
          W(t, gn);
        });
      },
      getAll: function getAll(e) {
        var t,
            n,
            r,
            o,
            i,
            a = (t = u, n = e, r = At.fromDom(t.getBody()), o = Gu(r, "[" + Qu() + '="' + n + '"]'), i = {}, W(o, function (e) {
          var t = Gn(e, Zu()),
              n = i.hasOwnProperty(t) ? i[t] : [];
          i[t] = n.concat([e]);
        }), i);
        return se(a, function (e) {
          return z(e, function (e) {
            return e.dom;
          });
        });
      }
    };
  };

  function nd(e) {
    return {
      getBookmark: N(Yl, e),
      moveToBookmark: N(Gl, e)
    };
  }

  (nd = nd || {}).isBookmarkNode = Jl;

  var rd,
      od = nd,
      id = function id(e, t) {
    for (; t && t !== e;) {
      if (Hn(t) || Vn(t)) return t;
      t = t.parentNode;
    }

    return null;
  },
      ad = function ad(t, n, e) {
    if (e.collapsed) return !1;

    if (wt.browser.isIE() && e.startOffset === e.endOffset - 1 && e.startContainer === e.endContainer) {
      var r = e.startContainer.childNodes[e.startOffset];
      if (An(r)) return F(r.getClientRects(), function (e) {
        return bs(e, t, n);
      });
    }

    return F(e.getClientRects(), function (e) {
      return bs(e, t, n);
    });
  },
      ud = {
    BACKSPACE: 8,
    DELETE: 46,
    DOWN: 40,
    ENTER: 13,
    LEFT: 37,
    RIGHT: 39,
    SPACEBAR: 32,
    TAB: 9,
    UP: 38,
    END: 35,
    HOME: 36,
    modifierPressed: function modifierPressed(e) {
      return e.shiftKey || e.ctrlKey || e.altKey || this.metaKeyPressed(e);
    },
    metaKeyPressed: function metaKeyPressed(e) {
      return wt.mac ? e.metaKey : e.ctrlKey && !e.altKey;
    }
  },
      sd = Vn,
      cd = function cd(r, l) {
    var f,
        d,
        m,
        p,
        g,
        h,
        v,
        y,
        b,
        C,
        w,
        x,
        S,
        N,
        E = l.dom,
        s = kt.each,
        c = l.getDoc(),
        k = document,
        _ = Math.abs,
        A = Math.round,
        R = l.getBody(),
        T = {
      nw: [0, 0, -1, -1],
      ne: [1, 0, 1, -1],
      se: [1, 1, 1, 1],
      sw: [0, 1, -1, 1]
    },
        D = function D(e) {
      return e && ("IMG" === e.nodeName || l.dom.is(e, "figure.image"));
    },
        n = function n(e) {
      var t = e.target;
      !function (e, t) {
        if ("longpress" !== e.type && 0 !== e.type.indexOf("touch")) return D(e.target) && !ad(e.clientX, e.clientY, t);
        var n = e.touches[0];
        return D(e.target) && !ad(n.clientX, n.clientY, t);
      }(e, l.selection.getRng()) || e.isDefaultPrevented() || l.selection.select(t);
    },
        O = function O(e) {
      return l.dom.is(e, "figure.image") ? e.querySelector("img") : e;
    },
        B = function B(e) {
      var t = Nc(l);
      return !!t && "false" !== e.getAttribute("data-mce-resize") && e !== l.getBody() && Tt(At.fromDom(e), t);
    },
        P = function P(e, t, n) {
      E.setStyles(O(e), {
        width: t,
        height: n
      });
    },
        L = function L(e) {
      var t,
          n,
          r,
          o,
          i,
          a,
          u,
          s = e.screenX - g,
          c = e.screenY - h;
      w = s * p[2] + v, x = c * p[3] + y, w = w < 5 ? 5 : w, x = x < 5 ? 5 : x, (D(f) && !1 !== l.getParam("resize_img_proportional", !0, "boolean") ? !ud.modifierPressed(e) : ud.modifierPressed(e)) && (_(s) > _(c) ? (x = A(w * b), w = A(x / b)) : (w = A(x / b), x = A(w * b))), P(d, w, x), t = 0 < (t = p.startPos.x + s) ? t : 0, n = 0 < (n = p.startPos.y + c) ? n : 0, E.setStyles(m, {
        left: t,
        top: n,
        display: "block"
      }), m.innerHTML = w + " &times; " + x, p[2] < 0 && d.clientWidth <= w && E.setStyle(d, "left", void 0 + (v - w)), p[3] < 0 && d.clientHeight <= x && E.setStyle(d, "top", void 0 + (y - x)), (s = R.scrollWidth - S) + (c = R.scrollHeight - N) !== 0 && E.setStyles(m, {
        left: t - s,
        top: n - c
      }), C || (r = l, o = f, i = v, a = y, u = "corner-" + p.name, r.fire("ObjectResizeStart", {
        target: o,
        width: i,
        height: a,
        origin: u
      }), C = !0);
    },
        I = function I() {
      var e = C;
      C = !1;

      var t,
          n,
          r,
          o,
          i,
          a = function a(e, t) {
        t && (f.style[e] || !l.schema.isValid(f.nodeName.toLowerCase(), e) ? E.setStyle(O(f), e, t) : E.setAttrib(O(f), e, "" + t));
      };

      e && (a("width", w), a("height", x)), E.unbind(c, "mousemove", L), E.unbind(c, "mouseup", I), k !== c && (E.unbind(k, "mousemove", L), E.unbind(k, "mouseup", I)), E.remove(d), E.remove(m), u(f), e && (t = l, n = f, r = w, o = x, i = "corner-" + p.name, t.fire("ObjectResized", {
        target: n,
        width: r,
        height: o,
        origin: i
      }), E.setAttrib(f, "style", E.getAttrib(f, "style"))), l.nodeChanged();
    },
        u = function u(e) {
      M(), F();
      var t = E.getPos(e, R),
          o = t.x,
          i = t.y,
          n = e.getBoundingClientRect(),
          a = n.width || n.right - n.left,
          u = n.height || n.bottom - n.top;
      f !== e && (f = e, w = x = 0);
      var r = l.fire("ObjectSelected", {
        target: e
      });
      B(e) && !r.isDefaultPrevented() ? s(T, function (n, r) {
        var e = E.get("mceResizeHandle" + r);
        e && E.remove(e), e = E.add(R, "div", {
          id: "mceResizeHandle" + r,
          "data-mce-bogus": "all",
          "class": "mce-resizehandle",
          unselectable: !0,
          style: "cursor:" + r + "-resize; margin:0; padding:0"
        }), 11 === wt.ie && (e.contentEditable = !1), E.bind(e, "mousedown", function (e) {
          var t;
          e.stopImmediatePropagation(), e.preventDefault(), g = (t = e).screenX, h = t.screenY, v = O(f).clientWidth, y = O(f).clientHeight, b = y / v, (p = n).name = r, p.startPos = {
            x: a * n[0] + o,
            y: u * n[1] + i
          }, S = R.scrollWidth, N = R.scrollHeight, d = f.cloneNode(!0), E.addClass(d, "mce-clonedresizable"), E.setAttrib(d, "data-mce-bogus", "all"), d.contentEditable = !1, d.unSelectabe = !0, E.setStyles(d, {
            left: o,
            top: i,
            margin: 0
          }), P(d, a, u), d.removeAttribute("data-mce-selected"), R.appendChild(d), E.bind(c, "mousemove", L), E.bind(c, "mouseup", I), k !== c && (E.bind(k, "mousemove", L), E.bind(k, "mouseup", I)), m = E.add(R, "div", {
            "class": "mce-resize-helper",
            "data-mce-bogus": "all"
          }, v + " &times; " + y);
        }), n.elm = e, E.setStyles(e, {
          left: a * n[0] + o - e.offsetWidth / 2,
          top: u * n[1] + i - e.offsetHeight / 2
        });
      }) : M(), f.setAttribute("data-mce-selected", "1");
    },
        M = function M() {
      F(), f && f.removeAttribute("data-mce-selected"), ue(T, function (e, t) {
        var n = E.get("mceResizeHandle" + t);
        n && (E.unbind(n), E.remove(n));
      });
    },
        o = function o(e) {
      var t,
          n = function n(e, t) {
        if (e) do {
          if (e === t) return !0;
        } while (e = e.parentNode);
      };

      C || l.removed || (s(E.select("img[data-mce-selected],hr[data-mce-selected]"), function (e) {
        e.removeAttribute("data-mce-selected");
      }), t = "mousedown" === e.type ? e.target : r.getNode(), n(t = E.$(t).closest("table,img,figure.image,hr")[0], R) && (a(), n(r.getStart(!0), t) && n(r.getEnd(!0), t)) ? u(t) : M());
    },
        i = function i(e) {
      return sd(id(l.getBody(), e));
    },
        F = function F() {
      ue(T, function (e) {
        e.elm && (E.unbind(e.elm), delete e.elm);
      });
    },
        a = function a() {
      try {
        l.getDoc().execCommand("enableObjectResizing", !1, "false");
      } catch (e) {}
    };

    l.on("init", function () {
      var e;
      a(), (wt.browser.isIE() || wt.browser.isEdge()) && (l.on("mousedown click", function (e) {
        var t = e.target,
            n = t.nodeName;
        C || !/^(TABLE|IMG|HR)$/.test(n) || i(t) || (2 !== e.button && l.selection.select(t, "TABLE" === n), "mousedown" === e.type && l.nodeChanged());
      }), e = function e(_e7) {
        var t = function t(e) {
          qr.setEditorTimeout(l, function () {
            return l.selection.select(e);
          });
        };

        if (i(_e7.target) || $n(_e7.target)) return _e7.preventDefault(), void t(_e7.target);
        /^(TABLE|IMG|HR)$/.test(_e7.target.nodeName) && (_e7.preventDefault(), "IMG" === _e7.target.tagName && t(_e7.target));
      }, E.bind(R, "mscontrolselect", e), l.on("remove", function () {
        return E.unbind(R, "mscontrolselect", e);
      }));
      var t = qr.throttle(function (e) {
        l.composing || o(e);
      });
      l.on("nodechange ResizeEditor ResizeWindow ResizeContent drop FullscreenStateChanged", t), l.on("keyup compositionend", function (e) {
        f && "TABLE" === f.nodeName && t(e);
      }), l.on("hide blur", M), l.on("contextmenu longpress", n, !0);
    }), l.on("remove", F);
    return {
      isResizable: B,
      showResizeRect: u,
      hideResizeRect: M,
      updateResizeRect: o,
      destroy: function destroy() {
        f = d = null;
      }
    };
  },
      ld = function ld(e) {
    return Hn(e) || Vn(e);
  },
      fd = function fd(e, t, n) {
    var r,
        o,
        i,
        a,
        u,
        s = n;
    if (s.caretPositionFromPoint) (o = s.caretPositionFromPoint(e, t)) && ((r = n.createRange()).setStart(o.offsetNode, o.offset), r.collapse(!0));else if (n.caretRangeFromPoint) r = n.caretRangeFromPoint(e, t);else if (s.body.createTextRange) {
      r = s.body.createTextRange();

      try {
        r.moveToPoint(e, t), r.collapse(!0);
      } catch (c) {
        r = function (e, n, t) {
          var r,
              o = t.elementFromPoint(e, n),
              i = t.body.createTextRange();

          if (o && "HTML" !== o.tagName || (o = t.body), i.moveToElementText(o), 0 < (r = (r = kt.toArray(i.getClientRects())).sort(function (e, t) {
            return (e = Math.abs(Math.max(e.top - n, e.bottom - n))) - (t = Math.abs(Math.max(t.top - n, t.bottom - n)));
          })).length) {
            n = (r[0].bottom + r[0].top) / 2;

            try {
              return i.moveToPoint(e, n), i.collapse(!0), i;
            } catch (a) {}
          }

          return null;
        }(e, t, n);
      }

      return i = r, a = n.body, u = i && i.parentElement ? i.parentElement() : null, Vn(function (e, t, n) {
        for (; e && e !== t;) {
          if (n(e)) return e;
          e = e.parentNode;
        }

        return null;
      }(u, a, ld)) ? null : i;
    }
    return r;
  },
      dd = function dd(e, t) {
    return e && t && e.startContainer === t.startContainer && e.startOffset === t.startOffset && e.endContainer === t.endContainer && e.endOffset === t.endOffset;
  },
      md = function md(e, t, n) {
    return null !== function (e, t, n) {
      for (; e && e !== t;) {
        if (n(e)) return e;
        e = e.parentNode;
      }

      return null;
    }(e, t, n);
  },
      pd = function pd(e) {
    return e && "TABLE" === e.nodeName;
  },
      gd = function gd(e, t, n) {
    for (var r = new Xr(t, e.getParent(t.parentNode, e.isBlock) || e.getRoot()); t = r[n ? "prev" : "next"]();) {
      if (zn(t)) return !0;
    }
  },
      hd = function hd(e, t, n, r, o) {
    var i,
        a,
        u = e.getRoot(),
        s = e.schema.getNonEmptyElements(),
        c = e.getParent(o.parentNode, e.isBlock) || u;
    if (r && zn(o) && t && e.isEmpty(c)) return U.some(Hs(o.parentNode, e.nodeIndex(o)));

    for (var l, f, d = new Xr(o, c); a = d[r ? "prev" : "next"]();) {
      if ("false" === e.getContentEditableParent(a) || (f = u, bo(l = a) && !1 === md(l, f, jl))) return U.none();
      if (In(a) && 0 < a.nodeValue.length) return !1 === function (e, t, n) {
        return md(e, t, function (e) {
          return e.nodeName === n;
        });
      }(a, u, "A") ? U.some(Hs(a, r ? a.nodeValue.length : 0)) : U.none();
      if (e.isBlock(a) || s[a.nodeName.toLowerCase()]) return U.none();
      i = a;
    }

    return n && i ? U.some(Hs(i, 0)) : U.none();
  },
      vd = function vd(e, t, n, r) {
    var o,
        i,
        a,
        u,
        s = e.getRoot(),
        c = !1,
        l = r[(n ? "start" : "end") + "Container"],
        f = r[(n ? "start" : "end") + "Offset"],
        d = An(l) && f === l.childNodes.length,
        m = e.schema.getNonEmptyElements(),
        p = n;
    if (bo(l)) return U.none();

    if (An(l) && f > l.childNodes.length - 1 && (p = !1), Fn(l) && (l = s, f = 0), l === s) {
      if (p && (o = l.childNodes[0 < f ? f - 1 : 0])) {
        if (bo(o)) return U.none();
        if (m[o.nodeName] || pd(o)) return U.none();
      }

      if (l.hasChildNodes()) {
        if (f = Math.min(!p && 0 < f ? f - 1 : f, l.childNodes.length - 1), l = l.childNodes[f], f = In(l) && d ? l.data.length : 0, !t && l === s.lastChild && pd(l)) return U.none();
        if (function (e, t) {
          for (; t && t !== e;) {
            if (Vn(t)) return !0;
            t = t.parentNode;
          }

          return !1;
        }(s, l) || bo(l)) return U.none();

        if (l.hasChildNodes() && !1 === pd(l)) {
          var g = new Xr(o = l, s);

          do {
            if (Vn(o) || bo(o)) {
              c = !1;
              break;
            }

            if (In(o) && 0 < o.nodeValue.length) {
              f = p ? 0 : o.nodeValue.length, l = o, c = !0;
              break;
            }

            if (m[o.nodeName.toLowerCase()] && (!(i = o) || !/^(TD|TH|CAPTION)$/.test(i.nodeName))) {
              f = e.nodeIndex(o), l = o.parentNode, p || f++, c = !0;
              break;
            }
          } while (o = p ? g.next() : g.prev());
        }
      }
    }

    return t && (In(l) && 0 === f && hd(e, d, t, !0, l).each(function (e) {
      l = e.container(), f = e.offset(), c = !0;
    }), An(l) && (!(o = (o = l.childNodes[f]) || l.childNodes[f - 1]) || !zn(o) || (u = "A", (a = o).previousSibling && a.previousSibling.nodeName === u) || gd(e, o, !1) || gd(e, o, !0) || hd(e, d, t, !0, o).each(function (e) {
      l = e.container(), f = e.offset(), c = !0;
    }))), p && !t && In(l) && f === l.nodeValue.length && hd(e, d, t, !1, l).each(function (e) {
      l = e.container(), f = e.offset(), c = !0;
    }), c ? U.some(Hs(l, f)) : U.none();
  },
      yd = function yd(e, t) {
    var n = t.collapsed,
        r = t.cloneRange(),
        o = Hs.fromRangeStart(t);
    return vd(e, n, !0, r).each(function (e) {
      n && Hs.isAbove(o, e) || r.setStart(e.container(), e.offset());
    }), n || vd(e, n, !1, r).each(function (e) {
      r.setEnd(e.container(), e.offset());
    }), n && r.collapse(!0), dd(t, r) ? U.none() : U.some(r);
  },
      bd = function bd(e, t) {
    return e.splitText(t);
  },
      Cd = function Cd(e) {
    var t = e.startContainer,
        n = e.startOffset,
        r = e.endContainer,
        o = e.endOffset;
    return t === r && In(t) ? 0 < n && n < t.nodeValue.length && (t = (r = bd(t, n)).previousSibling, n < o ? (t = r = bd(r, o -= n).previousSibling, o = r.nodeValue.length, n = 0) : o = 0) : (In(t) && 0 < n && n < t.nodeValue.length && (t = bd(t, n), n = 0), In(r) && 0 < o && o < r.nodeValue.length && (o = (r = bd(r, o).previousSibling).nodeValue.length)), {
      startContainer: t,
      startOffset: n,
      endContainer: r,
      endOffset: o
    };
  };

  function wd(n) {
    return {
      walk: function walk(e, t) {
        return Pf(n, e, t);
      },
      split: Cd,
      normalize: function normalize(t) {
        return yd(n, t).fold(C, function (e) {
          return t.setStart(e.startContainer, e.startOffset), t.setEnd(e.endContainer, e.endOffset), !0;
        });
      }
    };
  }

  (rd = wd = wd || {}).compareRanges = dd, rd.getCaretRangeFromPoint = fd, rd.getSelectedNode = Cs, rd.getNode = ws;
  var xd = wd;

  var Sd,
      Nd,
      Ed,
      kd,
      _d,
      Ad = (Sd = "height", Nd = function Nd(e) {
    var t = e.dom;
    return hn(e) ? t.getBoundingClientRect().height : t.offsetHeight;
  }, {
    set: function set(e, t) {
      if (!O(t) && !t.match(/^[0-9]+$/)) throw new Error(Sd + ".set accepts only positive integer values. Value was " + t);
      var n = e.dom;
      Wn(n) && (n.style[Sd] = t + "px");
    },
    get: Ed = function Ed(e) {
      var t = Nd(e);

      if (t <= 0 || null === t) {
        var n = er(e, Sd);
        return parseFloat(n) || 0;
      }

      return t;
    },
    getOuter: Ed,
    aggregate: kd = function kd(o, e) {
      return X(e, function (e, t) {
        var n = er(o, t),
            r = n === undefined ? 0 : parseInt(n, 10);
        return isNaN(r) ? e : e + r;
      }, 0);
    },
    max: function max(e, t, n) {
      var r = kd(e, n);
      return r < t ? t - r : 0;
    }
  }),
      Rd = function Rd(r, e) {
    return r.view(e).fold(E([]), function (e) {
      var t = r.owner(e),
          n = Rd(r, t);
      return [e].concat(n);
    });
  },
      Td =
  /* */
  Object.freeze({
    __proto__: null,
    view: function view(e) {
      var t;
      return (e.dom === document ? U.none() : U.from(null === (t = e.dom.defaultView) || void 0 === t ? void 0 : t.frameElement)).map(At.fromDom);
    },
    owner: Vt
  }),
      Dd = function Dd(e) {
    var t,
        n,
        r,
        o = At.fromDom(document),
        i = wn(o),
        a = (t = e, r = (n = Td).owner(t), Rd(n, r)),
        u = Cn(e),
        s = K(a, function (e, t) {
      var n = Cn(t);
      return {
        left: e.left + n.left,
        top: e.top + n.top
      };
    }, {
      left: 0,
      top: 0
    });
    return yn(s.left + u.left + i.left, s.top + u.top + i.top);
  },
      Od = function Od(e) {
    return "textarea" === Lt(e);
  },
      Bd = function Bd(e, t) {
    var n,
        r = function (e) {
      var t = e.dom.ownerDocument,
          n = t.body,
          r = t.defaultView,
          o = t.documentElement;
      if (n === e.dom) return yn(n.offsetLeft, n.offsetTop);
      var i = bn(null == r ? void 0 : r.pageYOffset, o.scrollTop),
          a = bn(null == r ? void 0 : r.pageXOffset, o.scrollLeft),
          u = bn(o.clientTop, n.clientTop),
          s = bn(o.clientLeft, n.clientLeft);
      return Cn(e).translate(a - s, i - u);
    }(e),
        o = (n = e, Ad.get(n));

    return {
      element: e,
      bottom: r.top + o,
      height: o,
      pos: r,
      cleanup: t
    };
  },
      Pd = function Pd(e, t) {
    var n = function (e, t) {
      var n = Gt(e);
      if (0 === n.length || Od(e)) return {
        element: e,
        offset: t
      };
      if (t < n.length && !Od(n[t])) return {
        element: n[t],
        offset: 0
      };
      var r = n[n.length - 1];
      return Od(r) ? {
        element: e,
        offset: t
      } : "img" === Lt(r) ? {
        element: r,
        offset: 1
      } : Ut(r) ? {
        element: r,
        offset: Gf(r).length
      } : {
        element: r,
        offset: Gt(r).length
      };
    }(e, t),
        r = At.fromHtml("<span data-mce-bogus=\"all\">\uFEFF</span>");

    return sn(n.element, r), Bd(r, function () {
      return pn(r);
    });
  },
      Ld = function Ld(n, r, o, i) {
    Ud(n, function (e, t) {
      return Md(n, r, o, i);
    }, o);
  },
      Id = function Id(e, t, n, r, o) {
    var i,
        a,
        u = {
      elm: r.element.dom,
      alignToTop: o
    };
    i = u, e.fire("ScrollIntoView", i).isDefaultPrevented() || (n(t, wn(t).top, r, o), a = u, e.fire("AfterScrollIntoView", a));
  },
      Md = function Md(e, t, n, r) {
    var o = At.fromDom(e.getBody()),
        i = At.fromDom(e.getDoc());
    o.dom.offsetWidth;
    var a = Pd(At.fromDom(n.startContainer), n.startOffset);
    Id(e, i, t, a, r), a.cleanup();
  },
      Fd = function Fd(e, t, n, r) {
    var o,
        i = At.fromDom(e.getDoc());
    Id(e, i, n, (o = t, Bd(At.fromDom(o), V)), r);
  },
      Ud = function Ud(e, t, n) {
    var r = n.startContainer,
        o = n.startOffset,
        i = n.endContainer,
        a = n.endOffset;
    t(At.fromDom(r), At.fromDom(i));
    var u = e.dom.createRng();
    u.setStart(r, o), u.setEnd(i, a), e.selection.setRng(n);
  },
      zd = function zd(e, t, n, r) {
    var o,
        i = e.pos;
    n ? xn(i.left, i.top, r) : (o = i.top - t + e.height, xn(i.left, o, r));
  },
      jd = function jd(e, t, n, r, o) {
    var i = n + t,
        a = r.pos.top,
        u = r.bottom,
        s = n <= u - a;
    a < t ? zd(r, n, !1 !== o, e) : i < a ? zd(r, n, s ? !1 !== o : !0 === o, e) : i < u && !s && zd(r, n, !0 === o, e);
  },
      Hd = function Hd(e, t, n, r) {
    var o = e.dom.defaultView.innerHeight;
    jd(e, t, o, n, r);
  },
      Vd = function Vd(e, t, n, r) {
    var o = e.dom.defaultView.innerHeight;
    jd(e, t, o, n, r);
    var i = Dd(n.element),
        a = En(window);
    i.top < a.y ? Sn(n.element, !1 !== r) : i.top > a.bottom && Sn(n.element, !0 === r);
  },
      qd = function qd(e, t, n) {
    return Ld(e, Hd, t, n);
  },
      $d = function $d(e, t, n) {
    return Fd(e, t, Hd, n);
  },
      Wd = function Wd(e, t, n) {
    return Ld(e, Vd, t, n);
  },
      Kd = function Kd(e, t, n) {
    return Fd(e, t, Vd, n);
  },
      Xd = function Xd(e, t, n) {
    (e.inline ? qd : Wd)(e, t, n);
  },
      Yd = function Yd(e) {
    var t = rn(e).dom;
    return e.dom === t.activeElement;
  },
      Gd = function Gd(e) {
    return void 0 === e && (e = At.fromDom(document)), U.from(e.dom.activeElement).map(At.fromDom);
  },
      Jd = function Jd(e, t, n, r) {
    return {
      start: e,
      soffset: t,
      finish: n,
      foffset: r
    };
  },
      Qd = Cr([{
    before: ["element"]
  }, {
    on: ["element", "offset"]
  }, {
    after: ["element"]
  }]),
      Zd = (Qd.before, Qd.on, Qd.after, function (e) {
    return e.fold(o, o, o);
  }),
      em = Cr([{
    domRange: ["rng"]
  }, {
    relative: ["startSitu", "finishSitu"]
  }, {
    exact: ["start", "soffset", "finish", "foffset"]
  }]),
      tm = {
    domRange: em.domRange,
    relative: em.relative,
    exact: em.exact,
    exactFromRange: function exactFromRange(e) {
      return em.exact(e.start, e.soffset, e.finish, e.foffset);
    },
    getWin: function getWin(e) {
      var t = e.match({
        domRange: function domRange(e) {
          return At.fromDom(e.startContainer);
        },
        relative: function relative(e, t) {
          return Zd(e);
        },
        exact: function exact(e, t, n, r) {
          return e;
        }
      });
      return qt(t);
    },
    range: Jd
  },
      nm = dt().browser,
      rm = function rm(e, t) {
    var n = Ut(t) ? Gf(t).length : Gt(t).length + 1;
    return n < e ? n : e < 0 ? 0 : e;
  },
      om = function om(e) {
    return tm.range(e.start, rm(e.soffset, e.start), e.finish, rm(e.foffset, e.finish));
  },
      im = function im(e, t) {
    return !_n(t.dom) && (Pt(e, t) || Ot(e, t));
  },
      am = function am(t) {
    return function (e) {
      return im(t, e.start) && im(t, e.finish);
    };
  },
      um = function um(e) {
    return !0 === e.inline || nm.isIE();
  },
      sm = function sm(e) {
    return tm.range(At.fromDom(e.startContainer), e.startOffset, At.fromDom(e.endContainer), e.endOffset);
  },
      cm = function cm(e) {
    var t,
        n,
        r = qt(e);
    return t = r.dom, ((n = t.getSelection()) && 0 !== n.rangeCount ? U.from(n.getRangeAt(0)) : U.none()).map(sm).filter(am(e));
  },
      lm = function lm(e) {
    var t = document.createRange();

    try {
      return t.setStart(e.start.dom, e.soffset), t.setEnd(e.finish.dom, e.foffset), U.some(t);
    } catch (n) {
      return U.none();
    }
  },
      fm = function fm(e) {
    var t = um(e) ? cm(At.fromDom(e.getBody())) : U.none();
    e.bookmark = t.isSome() ? t : e.bookmark;
  },
      dm = function dm(r) {
    return (r.bookmark ? r.bookmark : U.none()).bind(function (e) {
      return t = At.fromDom(r.getBody()), n = e, U.from(n).filter(am(t)).map(om);
      var t, n;
    }).bind(lm);
  },
      mm = {
    isEditorUIElement: function isEditorUIElement(e) {
      var t = e.className.toString();
      return -1 !== t.indexOf("tox-") || -1 !== t.indexOf("mce-");
    }
  },
      pm = function pm(n, e) {
    var t, r;
    dt().browser.isIE() ? (r = n).on("focusout", function () {
      fm(r);
    }) : (t = e, n.on("mouseup touchend", function (e) {
      t.throttle();
    })), n.on("keyup NodeChange", function (e) {
      var t;
      "nodechange" === (t = e).type && t.selectionChange || fm(n);
    });
  },
      gm = function gm(r) {
    var o = zu(function () {
      fm(r);
    }, 0);
    r.on("init", function () {
      var e, t, n;
      r.inline && (e = r, t = o, n = function n() {
        t.throttle();
      }, Eu.DOM.bind(document, "mouseup", n), e.on("remove", function () {
        Eu.DOM.unbind(document, "mouseup", n);
      })), pm(r, o);
    }), r.on("remove", function () {
      o.cancel();
    });
  },
      hm = Eu.DOM,
      vm = function vm(t, e) {
    var n = t.getParam("custom_ui_selector", "", "string");
    return null !== hm.getParent(e, function (e) {
      return mm.isEditorUIElement(e) || !!n && t.dom.is(e, n);
    });
  },
      ym = function ym(n, e) {
    var t = e.editor;
    gm(t), t.on("focusin", function () {
      var e = n.focusedEditor;
      e !== this && (e && e.fire("blur", {
        focusedEditor: this
      }), n.setActive(this), (n.focusedEditor = this).fire("focus", {
        blurredEditor: e
      }), this.focus(!0));
    }), t.on("focusout", function () {
      var t = this;
      qr.setEditorTimeout(t, function () {
        var e = n.focusedEditor;
        vm(t, function (e) {
          try {
            var t = rn(At.fromDom(e.getElement()));
            return Gd(t).fold(function () {
              return document.body;
            }, function (e) {
              return e.dom;
            });
          } catch (n) {
            return document.body;
          }
        }(t)) || e !== t || (t.fire("blur", {
          focusedEditor: null
        }), n.focusedEditor = null);
      });
    }), _d || (_d = function _d(e) {
      var t = n.activeEditor;
      t && function (e) {
        if (nn() && D(e.target)) {
          var t = At.fromDom(e.target);

          if (Ft(t) && un(t) && e.composed && e.composedPath) {
            var n = e.composedPath();
            if (n) return ne(n);
          }
        }

        return U.from(e.target);
      }(e).each(function (e) {
        e.ownerDocument === document && (e === document.body || vm(t, e) || n.focusedEditor !== t || (t.fire("blur", {
          focusedEditor: null
        }), n.focusedEditor = null));
      });
    }, hm.bind(document, "focusin", _d));
  },
      bm = function bm(e, t) {
    e.focusedEditor === t.editor && (e.focusedEditor = null), e.activeEditor || (hm.unbind(document, "focusin", _d), _d = null);
  },
      Cm = function Cm(t, e) {
    return ((n = e).collapsed ? U.from(ws(n.startContainer, n.startOffset)).map(At.fromDom) : U.none()).bind(function (e) {
      return ao(e) ? U.some(e) : !1 === Pt(t, e) ? U.some(t) : U.none();
    });
    var n;
  },
      wm = function wm(t, e) {
    Cm(At.fromDom(t.getBody()), e).bind(function (e) {
      return Fl(e.dom);
    }).fold(function () {
      t.selection.normalize();
    }, function (e) {
      return t.selection.setRng(e.toRange());
    });
  },
      xm = function xm(e) {
    if (e.setActive) try {
      e.setActive();
    } catch (t) {
      e.focus();
    } else e.focus();
  },
      Sm = function Sm(e) {
    return Yd(e) || Gd(rn(t = e)).filter(function (e) {
      return t.dom.contains(e.dom);
    }).isSome();
    var t;
  },
      Nm = function Nm(r) {
    return Gd().filter(function (e) {
      return t = e.dom, !((n = t.classList) !== undefined && (n.contains("tox-edit-area") || n.contains("tox-edit-area__iframe") || n.contains("mce-content-body"))) && vm(r, e.dom);
      var t, n;
    }).isSome();
  },
      Em = function Em(e) {
    return e.inline ? (n = e.getBody()) && Sm(At.fromDom(n)) : (t = e).iframeElement && Yd(At.fromDom(t.iframeElement));
    var t, n;
  },
      km = function km(t) {
    var e = t.selection,
        n = t.getBody(),
        r = e.getRng();
    t.quirks.refreshContentEditable(), t.bookmark !== undefined && !1 === Em(t) && dm(t).each(function (e) {
      t.selection.setRng(e), r = e;
    });
    var o,
        i,
        a = (o = t, i = e.getNode(), o.dom.getParent(i, function (e) {
      return "true" === o.dom.getContentEditable(e);
    }));
    if (t.$.contains(n, a)) return xm(a), wm(t, r), void _m(t);
    t.inline || (wt.opera || xm(n), t.getWin().focus()), (wt.gecko || t.inline) && (xm(n), wm(t, r)), _m(t);
  },
      _m = function _m(e) {
    return e.editorManager.setActive(e);
  },
      Am = function Am(e, t, n, r, o) {
    var i = n ? t.startContainer : t.endContainer,
        a = n ? t.startOffset : t.endOffset;
    return U.from(i).map(At.fromDom).map(function (e) {
      return r && t.collapsed ? e : Jt(e, o(e, a)).getOr(e);
    }).bind(function (e) {
      return Ft(e) ? U.some(e) : $t(e).filter(Ft);
    }).map(function (e) {
      return e.dom;
    }).getOr(e);
  },
      Rm = function Rm(e, t, n) {
    return Am(e, t, !0, n, function (e, t) {
      return Math.min(e.dom.childNodes.length, t);
    });
  },
      Tm = function Tm(e, t, n) {
    return Am(e, t, !1, n, function (e, t) {
      return 0 < t ? t - 1 : t;
    });
  },
      Dm = function Dm(e, t) {
    for (var n = e; e && In(e) && 0 === e.length;) {
      e = t ? e.nextSibling : e.previousSibling;
    }

    return e || n;
  },
      Om = function Om(n, e) {
    return z(e, function (e) {
      var t = n.fire("GetSelectionRange", {
        range: e
      });
      return t.range !== e ? t.range : e;
    });
  },
      Bm = function Bm(e) {
    return T(e) ? e : C;
  },
      Pm = function Pm(e, t, n) {
    var r = t(e),
        o = Bm(n);
    return r.orThunk(function () {
      return o(e) ? U.none() : function (e, t, n) {
        for (var r = e.dom, o = Bm(n); r.parentNode;) {
          r = r.parentNode;
          var i = At.fromDom(r),
              a = t(i);
          if (a.isSome()) return a;
          if (o(i)) break;
        }

        return U.none();
      }(e, t, o);
    });
  },
      Lm = cf,
      Im = function Im(e, t, n) {
    var r = e.formatter.get(n);
    if (r) for (var o = 0; o < r.length; o++) {
      if (!1 === r[o].inherit && e.dom.is(t, r[o].selector)) return !0;
    }
    return !1;
  },
      Mm = function Mm(t, e, n, r) {
    var o = t.dom.getRoot();
    return e !== o && (e = t.dom.getParent(e, function (e) {
      return !!Im(t, e, n) || e.parentNode === o || !!zm(t, e, n, r, !0);
    }), zm(t, e, n, r));
  },
      Fm = function Fm(e, t, n) {
    return !!Lm(t, n.inline) || !!Lm(t, n.block) || (n.selector ? 1 === t.nodeType && e.is(t, n.selector) : void 0);
  },
      Um = function Um(e, t, n, r, o, i) {
    var a,
        u,
        s,
        c = n[r];
    if (n.onmatch) return n.onmatch(t, n, r);
    if (c) if ("undefined" == typeof c.length) {
      for (a in c) {
        if (c.hasOwnProperty(a)) {
          if (u = "attributes" === r ? e.getAttrib(t, a) : ff(e, t, a), o && !u && !n.exact) return;
          if ((!o || n.exact) && !Lm(u, lf(e, sf(c[a], i), a))) return;
        }
      }
    } else for (s = 0; s < c.length; s++) {
      if ("attributes" === r ? e.getAttrib(t, c[s]) : ff(e, t, c[s])) return n;
    }
    return n;
  },
      zm = function zm(e, t, n, r, o) {
    var i,
        a,
        u,
        s,
        c = e.formatter.get(n),
        l = e.dom;
    if (c && t) for (a = 0; a < c.length; a++) {
      if (i = c[a], Fm(e.dom, t, i) && Um(l, t, i, "attributes", o, r) && Um(l, t, i, "styles", o, r)) {
        if (s = i.classes) for (u = 0; u < s.length; u++) {
          if (!e.dom.hasClass(t, s[u])) return;
        }
        return i;
      }
    }
  },
      jm = function jm(e, t, n, r) {
    if (r) return Mm(e, r, t, n);
    if (r = e.selection.getNode(), Mm(e, r, t, n)) return !0;
    var o = e.selection.getStart();
    return !(o === r || !Mm(e, o, t, n));
  },
      Hm = function Hm(r, t) {
    var n = function n(e) {
      return Ot(e, At.fromDom(r.getBody()));
    };

    return U.from(r.selection.getStart(!0)).bind(function (e) {
      return Pm(At.fromDom(e), function (n) {
        return function (e, t) {
          for (var n = 0; n < e.length; n++) {
            var r = t(e[n], n);
            if (r.isSome()) return r;
          }

          return U.none();
        }(t, function (e) {
          return t = e, zm(r, n.dom, t) ? U.some(t) : U.none();
          var t;
        });
      }, n);
    }).getOrNull();
  },
      Vm = function Vm(o, i, e) {
    return X(e, function (e, t) {
      var n,
          r = (n = t, F(o.formatter.get(n), function (t) {
        var n = function n(e) {
          return 1 < e.length && "%" === e.charAt(0);
        };

        return F(["styles", "attributes"], function (e) {
          return ge(t, e).exists(function (e) {
            var t = S(e) ? e : pe(e);
            return F(t, n);
          });
        });
      }));
      return o.formatter.matchNode(i, t, {}, r) ? e.concat([t]) : e;
    }, []);
  },
      qm = {
    "#text": 3,
    "#comment": 8,
    "#cdata": 4,
    "#pi": 7,
    "#doctype": 10,
    "#document-fragment": 11
  },
      $m = function $m(e, t, n) {
    var r = n ? "lastChild" : "firstChild",
        o = n ? "prev" : "next";
    if (e[r]) return e[r];

    if (e !== t) {
      var i = e[o];
      if (i) return i;

      for (var a = e.parent; a && a !== t; a = a.parent) {
        if (i = a[o]) return i;
      }
    }
  },
      Wm = function Wm(e) {
    var t = "a" === e.name && !e.attr("href") && e.attr("id");
    return e.attr("name") || e.attr("id") && !e.firstChild || e.attr("data-mce-bookmark") || t;
  },
      Km = (Xm.create = function (e, t) {
    var n = new Xm(e, qm[e] || 1);
    return t && ue(t, function (e, t) {
      n.attr(t, e);
    }), n;
  }, Xm.prototype.replace = function (e) {
    return e.parent && e.remove(), this.insert(e, this), this.remove(), this;
  }, Xm.prototype.attr = function (e, t) {
    var n,
        r = this;
    if ("string" != typeof e) return e !== undefined && null !== e && ue(e, function (e, t) {
      r.attr(t, e);
    }), r;

    if (n = r.attributes) {
      if (t === undefined) return n.map[e];

      if (null === t) {
        if (e in n.map) {
          delete n.map[e];

          for (var o = n.length; o--;) {
            if (n[o].name === e) return n.splice(o, 1), r;
          }
        }

        return r;
      }

      if (e in n.map) {
        for (o = n.length; o--;) {
          if (n[o].name === e) {
            n[o].value = t;
            break;
          }
        }
      } else n.push({
        name: e,
        value: t
      });

      return n.map[e] = t, r;
    }
  }, Xm.prototype.clone = function () {
    var e,
        t = new Xm(this.name, this.type);

    if (e = this.attributes) {
      var n = [];
      n.map = {};

      for (var r = 0, o = e.length; r < o; r++) {
        var i = e[r];
        "id" !== i.name && (n[n.length] = {
          name: i.name,
          value: i.value
        }, n.map[i.name] = i.value);
      }

      t.attributes = n;
    }

    return t.value = this.value, t.shortEnded = this.shortEnded, t;
  }, Xm.prototype.wrap = function (e) {
    return this.parent.insert(e, this), e.append(this), this;
  }, Xm.prototype.unwrap = function () {
    for (var e = this.firstChild; e;) {
      var t = e.next;
      this.insert(e, this, !0), e = t;
    }

    this.remove();
  }, Xm.prototype.remove = function () {
    var e = this.parent,
        t = this.next,
        n = this.prev;
    return e && (e.firstChild === this ? (e.firstChild = t) && (t.prev = null) : n.next = t, e.lastChild === this ? (e.lastChild = n) && (n.next = null) : t.prev = n, this.parent = this.next = this.prev = null), this;
  }, Xm.prototype.append = function (e) {
    e.parent && e.remove();
    var t = this.lastChild;
    return t ? ((t.next = e).prev = t, this.lastChild = e) : this.lastChild = this.firstChild = e, e.parent = this, e;
  }, Xm.prototype.insert = function (e, t, n) {
    e.parent && e.remove();
    var r = t.parent || this;
    return n ? (t === r.firstChild ? r.firstChild = e : t.prev.next = e, e.prev = t.prev, (e.next = t).prev = e) : (t === r.lastChild ? r.lastChild = e : t.next.prev = e, e.next = t.next, (e.prev = t).next = e), e.parent = r, e;
  }, Xm.prototype.getAll = function (e) {
    for (var t = [], n = this.firstChild; n; n = $m(n, this)) {
      n.name === e && t.push(n);
    }

    return t;
  }, Xm.prototype.empty = function () {
    if (this.firstChild) {
      for (var e = [], t = this.firstChild; t; t = $m(t, this)) {
        e.push(t);
      }

      for (var n = e.length; n--;) {
        (t = e[n]).parent = t.firstChild = t.lastChild = t.next = t.prev = null;
      }
    }

    return this.firstChild = this.lastChild = null, this;
  }, Xm.prototype.isEmpty = function (e, t, n) {
    void 0 === t && (t = {});
    var r = this.firstChild;
    if (Wm(this)) return !1;
    if (r) do {
      if (1 === r.type) {
        if (r.attr("data-mce-bogus")) continue;
        if (e[r.name]) return !1;
        if (Wm(r)) return !1;
      }

      if (8 === r.type) return !1;
      if (3 === r.type && !function (e) {
        if (Uo(e.value)) {
          var t = e.parent;
          return !t || "span" === t.name && !t.attr("style") || !/^[ ]+$/.test(e.value);
        }
      }(r)) return !1;
      if (3 === r.type && r.parent && t[r.parent.name] && Uo(r.value)) return !1;
      if (n && n(r)) return !1;
    } while (r = $m(r, this));
    return !0;
  }, Xm.prototype.walk = function (e) {
    return $m(this, null, e);
  }, Xm);

  function Xm(e, t) {
    this.name = e, 1 === (this.type = t) && (this.attributes = [], this.attributes.map = {});
  }

  var Ym = kt.makeMap,
      Gm = function Gm(e) {
    var u = [],
        s = (e = e || {}).indent,
        c = Ym(e.indent_before || ""),
        l = Ym(e.indent_after || ""),
        f = ci.getEncodeFunc(e.entity_encoding || "raw", e.entities),
        d = "html" === e.element_format;
    return {
      start: function start(e, t, n) {
        var r, o, i, a;
        if (s && c[e] && 0 < u.length && 0 < (a = u[u.length - 1]).length && "\n" !== a && u.push("\n"), u.push("<", e), t) for (r = 0, o = t.length; r < o; r++) {
          i = t[r], u.push(" ", i.name, '="', f(i.value, !0), '"');
        }
        u[u.length] = !n || d ? ">" : " />", n && s && l[e] && 0 < u.length && 0 < (a = u[u.length - 1]).length && "\n" !== a && u.push("\n");
      },
      end: function end(e) {
        var t;
        u.push("</", e, ">"), s && l[e] && 0 < u.length && 0 < (t = u[u.length - 1]).length && "\n" !== t && u.push("\n");
      },
      text: function text(e, t) {
        0 < e.length && (u[u.length] = t ? e : f(e));
      },
      cdata: function cdata(e) {
        u.push("<![CDATA[", e, "]]>");
      },
      comment: function comment(e) {
        u.push("\x3c!--", e, "--\x3e");
      },
      pi: function pi(e, t) {
        t ? u.push("<?", e, " ", f(t), "?>") : u.push("<?", e, "?>"), s && u.push("\n");
      },
      doctype: function doctype(e) {
        u.push("<!DOCTYPE", e, ">", s ? "\n" : "");
      },
      reset: function reset() {
        u.length = 0;
      },
      getContent: function getContent() {
        return u.join("").replace(/\n$/, "");
      }
    };
  },
      Jm = function Jm(t, p) {
    void 0 === p && (p = Ci());
    var g = Gm(t);
    (t = t || {}).validate = !("validate" in t) || t.validate;
    return {
      serialize: function serialize(e) {
        var f = t.validate,
            d = {
          3: function _(e) {
            g.text(e.value, e.raw);
          },
          8: function _(e) {
            g.comment(e.value);
          },
          7: function _(e) {
            g.pi(e.name, e.value);
          },
          10: function _(e) {
            g.doctype(e.value);
          },
          4: function _(e) {
            g.cdata(e.value);
          },
          11: function _(e) {
            if (e = e.firstChild) for (; m(e), e = e.next;) {
              ;
            }
          }
        };
        g.reset();

        var m = function m(e) {
          var t,
              n,
              r,
              o,
              i,
              a,
              u,
              s,
              c,
              l = d[e.type];
          if (l) l(e);else {
            if (t = e.name, n = e.shortEnded, r = e.attributes, f && r && 1 < r.length && ((a = []).map = {}, c = p.getElementRule(e.name))) {
              for (u = 0, s = c.attributesOrder.length; u < s; u++) {
                (o = c.attributesOrder[u]) in r.map && (i = r.map[o], a.map[o] = i, a.push({
                  name: o,
                  value: i
                }));
              }

              for (u = 0, s = r.length; u < s; u++) {
                (o = r[u].name) in a.map || (i = r.map[o], a.map[o] = i, a.push({
                  name: o,
                  value: i
                }));
              }

              r = a;
            }

            if (g.start(e.name, r, n), !n) {
              if (e = e.firstChild) for (; m(e), e = e.next;) {
                ;
              }
              g.end(t);
            }
          }
        };

        return 1 !== e.type || t.inner ? d[11](e) : m(e), g.getContent();
      }
    };
  },
      Qm = function Qm(e, t) {
    return e.replace(new RegExp(t.prefix + "_[0-9]+", "g"), function (e) {
      return ge(t.uris, e).getOr(e);
    });
  },
      Zm = ["img", "video"],
      ep = function ep(e, t, n) {
    return !e.allow_html_data_urls && (/^data:image\//i.test(t) ? (r = e.allow_svg_data_urls, o = n, !($(r) ? M(Zm, o) : r) && /^data:image\/svg\+xml/i.test(t)) : /^data:/i.test(t));
    var r, o;
  },
      tp = function tp(e, t, n) {
    var r,
        o,
        i = 1,
        a = e.getShortEndedElements(),
        u = /<([!?\/])?([A-Za-z0-9\-_\:\.]+)((?:\s+[^"\'>]+(?:(?:"[^"]*")|(?:\'[^\']*\')|[^>]*))*|\/|\s+)>/g;

    for (u.lastIndex = r = n; o = u.exec(t);) {
      if (r = u.lastIndex, "/" === o[1]) i--;else if (!o[1]) {
        if (o[2] in a) continue;
        i++;
      }
      if (0 === i) break;
    }

    return r;
  };

  function np(W, K) {
    void 0 === K && (K = Ci());

    var e = function e() {};

    !1 !== (W = W || {}).fix_self_closing && (W.fix_self_closing = !0);

    var X = W.comment ? W.comment : e,
        Y = W.cdata ? W.cdata : e,
        G = W.text ? W.text : e,
        J = W.start ? W.start : e,
        Q = W.end ? W.end : e,
        Z = W.pi ? W.pi : e,
        ee = W.doctype ? W.doctype : e,
        n = function n(f, e) {
      void 0 === e && (e = "html");

      for (var t, i, n, d, r, o, a, m, u, s, c, l, p, g, h, v, y, b, C, w = f.html, x = 0, S = [], N = 0, E = ci.decode, k = kt.makeMap("src,href,data,background,formaction,poster,xlink:href"), _ = /((java|vb)script|mhtml):/i, A = "html" === e ? 0 : 1, R = function R(e) {
        for (var t, n = S.length; n-- && S[n].name !== e;) {
          ;
        }

        if (0 <= n) {
          for (t = S.length - 1; n <= t; t--) {
            (e = S[t]).valid && Q(e.name);
          }

          S.length = n;
        }
      }, T = function T(e, t) {
        return G(Qm(e, f), t);
      }, D = function D(e) {
        "" !== e && (">" === e.charAt(0) && (e = " " + e), W.allow_conditional_comments || "[if" !== e.substr(0, 3).toLowerCase() || (e = " " + e), X(Qm(e, f)));
      }, O = function O(e, t) {
        var n = e || "",
            r = !Ve(n, "--"),
            o = function (e, t, n) {
          void 0 === n && (n = 0);
          var r = e.toLowerCase();

          if (-1 !== r.indexOf("[if ", n) && (u = n, /^\s*\[if [\w\W]+\]>.*<!\[endif\](--!?)?>/.test(r.substr(u)))) {
            var o = r.indexOf("[endif]", n);
            return r.indexOf(">", o);
          }

          if (t) {
            var i = r.indexOf(">", n);
            return -1 !== i ? i : r.length;
          }

          var a = /--!?>/;
          a.lastIndex = n;
          var u,
              s = a.exec(e);
          return s ? s.index + s[0].length : r.length;
        }(w, r, t);

        return e = w.substr(t, o - t), D(r ? n + e : e), o + 1;
      }, B = function B(e, t, n, r, o) {
        var i, a, u, s;

        if (t = t.toLowerCase(), u = (t in F) ? t : E(n || r || o || ""), n = ge(f.uris, u).getOr(u), U && !m && !1 == (0 === (s = t).indexOf("data-") || 0 === s.indexOf("aria-"))) {
          if (!(i = g[t]) && h) {
            for (a = h.length; a-- && !(i = h[a]).pattern.test(t);) {
              ;
            }

            -1 === a && (i = null);
          }

          if (!i) return;
          if (i.validValues && !(n in i.validValues)) return;
        }

        if (k[t] && !W.allow_script_urls) {
          var c = n.replace(/[\s\u0000-\u001F]+/g, "");

          try {
            c = decodeURIComponent(c);
          } catch (l) {
            c = unescape(c);
          }

          if (_.test(c)) return;
          if (ep(W, c, e)) return;
        }

        m && ((t in k) || 0 === t.indexOf("on")) || (d.map[t] = n, d.push({
          name: t,
          value: n
        }));
      }, P = new RegExp("<(?:(?:!--([\\w\\W]*?)--!?>)|(?:!\\[CDATA\\[([\\w\\W]*?)\\]\\]>)|(?:![Dd][Oo][Cc][Tt][Yy][Pp][Ee]([\\w\\W]*?)>)|(?:!(--)?)|(?:\\?([^\\s\\/<>]+) ?([\\w\\W]*?)[?/]>)|(?:\\/([A-Za-z][A-Za-z0-9\\-_\\:\\.]*)>)|(?:([A-Za-z][A-Za-z0-9\\-_\\:\\.]*)((?:\\s+[^\"'>]+(?:(?:\"[^\"]*\")|(?:'[^']*')|[^>]*))*|\\/|\\s+)>))", "g"), L = /([\w:\-]+)(?:\s*=\s*(?:(?:\"((?:[^\"])*)\")|(?:\'((?:[^\'])*)\')|([^>\s]+)))?/g, I = K.getShortEndedElements(), M = W.self_closing_elements || K.getSelfClosingElements(), F = K.getBoolAttrs(), U = W.validate, z = W.remove_internals, j = W.fix_self_closing, H = K.getSpecialElements(), V = w + ">"; t = P.exec(V);) {
        var q = t[0];
        if (x < t.index && T(E(w.substr(x, t.index - x))), i = t[7]) ":" === (i = i.toLowerCase()).charAt(0) && (i = i.substr(1)), R(i);else if (i = t[8]) {
          if (t.index + q.length > w.length) {
            T(E(w.substr(t.index))), x = t.index + q.length;
            continue;
          }

          ":" === (i = i.toLowerCase()).charAt(0) && (i = i.substr(1)), u = i in I, j && M[i] && 0 < S.length && S[S.length - 1].name === i && R(i);

          var $ = function (e, t) {
            var n = e.exec(t);

            if (n) {
              var r = n[1],
                  o = n[2];
              return "string" == typeof r && "data-mce-bogus" === r.toLowerCase() ? o : null;
            }

            return null;
          }(L, t[9]);

          if (null !== $) {
            if ("all" === $) {
              x = tp(K, w, P.lastIndex), P.lastIndex = x;
              continue;
            }

            c = !1;
          }

          if (!U || (s = K.getElementRule(i))) {
            if (c = !0, U && (g = s.attributes, h = s.attributePatterns), (p = t[9]) ? ((m = -1 !== p.indexOf("data-mce-type")) && z && (c = !1), (d = []).map = {}, p.replace(L, function (e, t, n, r, o) {
              return B(i, t, n, r, o), "";
            })) : (d = []).map = {}, U && !m) {
              if (v = s.attributesRequired, y = s.attributesDefault, b = s.attributesForced, s.removeEmptyAttrs && !d.length && (c = !1), b) for (r = b.length; r--;) {
                a = (l = b[r]).name, "{$uid}" === (C = l.value) && (C = "mce_" + N++), d.map[a] = C, d.push({
                  name: a,
                  value: C
                });
              }
              if (y) for (r = y.length; r--;) {
                (a = (l = y[r]).name) in d.map || ("{$uid}" === (C = l.value) && (C = "mce_" + N++), d.map[a] = C, d.push({
                  name: a,
                  value: C
                }));
              }

              if (v) {
                for (r = v.length; r-- && !(v[r] in d.map);) {
                  ;
                }

                -1 === r && (c = !1);
              }

              if (l = d.map["data-mce-bogus"]) {
                if ("all" === l) {
                  x = tp(K, w, P.lastIndex), P.lastIndex = x;
                  continue;
                }

                c = !1;
              }
            }

            c && J(i, d, u);
          } else c = !1;

          if (n = H[i]) {
            n.lastIndex = x = t.index + q.length, x = (t = n.exec(w)) ? (c && (o = w.substr(x, t.index - x)), t.index + t[0].length) : (o = w.substr(x), w.length), c && (0 < o.length && T(o, !0), Q(i)), P.lastIndex = x;
            continue;
          }

          u || (p && p.indexOf("/") === p.length - 1 ? c && Q(i) : S.push({
            name: i,
            valid: c
          }));
        } else if (i = t[1]) D(i);else if (i = t[2]) {
          if (!(1 == A || W.preserve_cdata || 0 < S.length && K.isValidChild(S[S.length - 1].name, "#cdata"))) {
            x = O("", t.index + 2), P.lastIndex = x;
            continue;
          }

          Y(i);
        } else if (i = t[3]) ee(i);else {
          if ((i = t[4]) || "<!" === q) {
            x = O(i, t.index + q.length), P.lastIndex = x;
            continue;
          }

          if (i = t[5]) {
            if (1 != A) {
              x = O("?", t.index + 2), P.lastIndex = x;
              continue;
            }

            Z(i, t[6]);
          }
        }
        x = t.index + q.length;
      }

      for (x < w.length && T(E(w.substr(x))), r = S.length - 1; 0 <= r; r--) {
        (i = S[r]).valid && Q(i.name);
      }
    };

    return {
      parse: function parse(e, t) {
        void 0 === t && (t = "html"), n(function (e) {
          for (var t, n = /data:[^;]+;base64,([a-z0-9\+\/=]+)/gi, r = [], o = {}, i = is("img"), a = 0, u = 0; t = n.exec(e);) {
            var s = t[0],
                c = i + "_" + u++;
            o[c] = s, a < t.index && r.push(e.substr(a, t.index - a)), r.push(c), a = t.index + s.length;
          }

          return 0 === a ? {
            prefix: i,
            uris: o,
            html: e
          } : (a < e.length && r.push(e.substr(a)), {
            prefix: i,
            uris: o,
            html: r.join("")
          });
        }(e), t);
      }
    };
  }

  (np = np || {}).findEndTag = tp;

  var rp,
      op,
      ip = np,
      ap = function ap(e, t) {
    var n,
        r,
        o,
        i,
        a,
        u,
        s,
        c = t,
        l = /<(\w+) [^>]*data-mce-bogus="all"[^>]*>/g,
        f = e.schema;
    a = e.getTempAttrs(), u = c, s = new RegExp(["\\s?(" + a.join("|") + ')="[^"]+"'].join("|"), "gi"), c = u.replace(s, "");

    for (var d = f.getShortEndedElements(); i = l.exec(c);) {
      r = l.lastIndex, o = i[0].length, n = d[i[1]] ? r : ip.findEndTag(f, c, r), c = c.substring(0, r - o) + c.substring(n), l.lastIndex = r - o;
    }

    return po(c);
  },
      up = ap,
      sp = function sp(e, t, n, r) {
    var o, i, a, u, s;
    return t.format = n, t.get = !0, t.getInner = !0, t.no_events || e.fire("BeforeGetContent", t), o = "raw" === t.format ? kt.trim(up(e.serializer, r.innerHTML)) : "text" === t.format ? e.dom.isEmpty(r) ? "" : po(r.innerText || r.textContent) : "tree" === t.format ? e.serializer.serialize(r, t) : (a = (i = e).serializer.serialize(r, t), u = vc(i), s = new RegExp("^(<" + u + "[^>]*>(&nbsp;|&#160;|\\s|\xa0|<br \\/>|)<\\/" + u + ">[\r\n]*|<br \\/>[\r\n]*)$"), a.replace(s, "")), M(["text", "tree"], t.format) || so(At.fromDom(r)) ? t.content = o : t.content = kt.trim(o), t.no_events || e.fire("GetContent", t), t.content;
  },
      cp = kt.each,
      lp = function lp(o) {
    this.compare = function (e, t) {
      if (e.nodeName !== t.nodeName) return !1;

      var n = function n(_n3) {
        var r = {};
        return cp(o.getAttribs(_n3), function (e) {
          var t = e.nodeName.toLowerCase();
          0 !== t.indexOf("_") && "style" !== t && 0 !== t.indexOf("data-") && (r[t] = o.getAttrib(_n3, t));
        }), r;
      },
          r = function r(e, t) {
        var n, r;

        for (r in e) {
          if (e.hasOwnProperty(r)) {
            if (void 0 === (n = t[r])) return !1;
            if (e[r] !== n) return !1;
            delete t[r];
          }
        }

        for (r in t) {
          if (t.hasOwnProperty(r)) return !1;
        }

        return !0;
      };

      return !!r(n(e), n(t)) && !!r(o.parseStyle(o.getAttrib(e, "style")), o.parseStyle(o.getAttrib(t, "style"))) && !Jl(e) && !Jl(t);
    };
  },
      fp = function fp(n, r, o) {
    return U.from(o.container()).filter(In).exists(function (e) {
      var t = n ? 0 : -1;
      return r(e.data.charAt(o.offset() + t));
    });
  },
      dp = N(fp, !0, Zl),
      mp = N(fp, !1, Zl),
      pp = function pp(e) {
    var t = e.container();
    return In(t) && (0 === t.data.length || mo(t.data) && od.isBookmarkNode(t.parentNode));
  },
      gp = function gp(t, n) {
    return function (e) {
      return U.from(il(t ? 0 : -1, e)).filter(n).isSome();
    };
  },
      hp = function hp(e) {
    return jn(e) && "block" === er(At.fromDom(e), "display");
  },
      vp = function vp(e) {
    return Vn(e) && !(An(t = e) && "all" === t.getAttribute("data-mce-bogus"));
    var t;
  },
      yp = gp(!0, hp),
      bp = gp(!1, hp),
      Cp = gp(!0, $n),
      wp = gp(!1, $n),
      xp = gp(!0, Bn),
      Sp = gp(!1, Bn),
      Np = gp(!0, vp),
      Ep = gp(!1, vp),
      kp = function kp(e) {
    var t = Gu(e, "br"),
        n = H(function (e) {
      for (var t = [], n = e.dom; n;) {
        t.push(At.fromDom(n)), n = n.lastChild;
      }

      return t;
    }(e).slice(-1), no);
    t.length === n.length && W(n, pn);
  },
      _p = function _p(e) {
    mn(e), fn(e, At.fromHtml('<br data-mce-bogus="1">'));
  },
      Ap = function Ap(n) {
    Zt(n).each(function (t) {
      Wt(t).each(function (e) {
        eo(n) && no(t) && eo(e) && pn(t);
      });
    });
  },
      Rp = function Rp(e, t, n) {
    return Pt(t, e) ? function (e, t) {
      for (var n = T(t) ? t : C, r = e.dom, o = []; null !== r.parentNode && r.parentNode !== undefined;) {
        var i = r.parentNode,
            a = At.fromDom(i);
        if (o.push(a), !0 === n(a)) break;
        r = i;
      }

      return o;
    }(e, function (e) {
      return n(e) || Ot(e, t);
    }).slice(0, -1) : [];
  },
      Tp = function Tp(e, t) {
    return Rp(e, t, C);
  },
      Dp = function Dp(e, t) {
    return [e].concat(Tp(e, t));
  },
      Op = function Op(e, t, n) {
    return Pl(e, t, n, pp);
  },
      Bp = function Bp(e, t) {
    return Y(Dp(At.fromDom(t.container()), e), eo);
  },
      Pp = function Pp(e, n, r) {
    return Op(e, n.dom, r).forall(function (t) {
      return Bp(n, r).fold(function () {
        return !1 === ol(t, r, n.dom);
      }, function (e) {
        return !1 === ol(t, r, n.dom) && Pt(e, At.fromDom(t.container()));
      });
    });
  },
      Lp = function Lp(t, n, r) {
    return Bp(n, r).fold(function () {
      return Op(t, n.dom, r).forall(function (e) {
        return !1 === ol(e, r, n.dom);
      });
    }, function (e) {
      return Op(t, e.dom, r).isNone();
    });
  },
      Ip = N(Lp, !1),
      Mp = N(Lp, !0),
      Fp = N(Pp, !1),
      Up = N(Pp, !0),
      zp = function zp(e) {
    return ml(e).exists(no);
  },
      jp = function jp(e, t, n) {
    var r = H(Dp(At.fromDom(n.container()), t), eo),
        o = ne(r).getOr(t);
    return Ol(e, o.dom, n).filter(zp);
  },
      Hp = function Hp(e, t) {
    return ml(t).exists(no) || jp(!0, e, t).isSome();
  },
      Vp = function Vp(e, t) {
    return n = t, U.from(n.getNode(!0)).map(At.fromDom).exists(no) || jp(!1, e, t).isSome();
    var n;
  },
      qp = N(jp, !1),
      $p = N(jp, !0),
      Wp = function Wp(e) {
    return Hs.isTextPosition(e) && !e.isAtStart() && !e.isAtEnd();
  },
      Kp = function Kp(e, t) {
    var n = H(Dp(At.fromDom(t.container()), e), eo);
    return ne(n).getOr(e);
  },
      Xp = function Xp(e, t) {
    return Wp(t) ? mp(t) : mp(t) || Ml(Kp(e, t).dom, t).exists(mp);
  },
      Yp = function Yp(e, t) {
    return Wp(t) ? dp(t) : dp(t) || Il(Kp(e, t).dom, t).exists(dp);
  },
      Gp = function Gp(e) {
    return ml(e).bind(function (e) {
      return Ar(e, Ft);
    }).exists(function (e) {
      return t = er(e, "white-space"), M(["pre", "pre-wrap"], t);
      var t;
    });
  },
      Jp = function Jp(e, t) {
    return r = t, Ml(e.dom, r).isNone() || (n = t, Il(e.dom, n).isNone()) || Ip(e, t) || Mp(e, t) || Vp(e, t) || Hp(e, t);
    var n, r;
  },
      Qp = function Qp(e, t) {
    return !Gp(t) && (Ip(e, t) || Fp(e, t) || Vp(e, t) || Xp(e, t));
  },
      Zp = function Zp(e, t) {
    return !Gp(t) && (Mp(e, t) || Up(e, t) || Hp(e, t) || Yp(e, t));
  },
      eg = function eg(e, t) {
    return Qp(e, t) || Zp(e, (r = (n = t).container(), o = n.offset(), In(r) && o < r.data.length ? Hs(r, o + 1) : n));
    var n, r, o;
  },
      tg = function tg(e, t) {
    return Ql(e.charAt(t));
  },
      ng = function ng(e) {
    var t = e.container();
    return In(t) && He(t.data, lo);
  },
      rg = function rg(e) {
    var n,
        t = e.data,
        r = (n = t.split(""), z(n, function (e, t) {
      return Ql(e) && 0 < t && t < n.length - 1 && ef(n[t - 1]) && ef(n[t + 1]) ? " " : e;
    }).join(""));
    return r !== t && (e.data = r, !0);
  },
      og = function og(l, e) {
    return U.some(e).filter(ng).bind(function (e) {
      var t,
          n,
          r,
          o,
          i,
          a,
          u,
          s,
          c = e.container();
      return (i = l, u = (a = c).data, s = Hs(a, 0), !(!tg(u, 0) || eg(i, s) || (a.data = " " + u.slice(1), 0)) || rg(c) || (t = l, r = (n = c).data, o = Hs(n, r.length - 1), !(!tg(r, r.length - 1) || eg(t, o) || (n.data = r.slice(0, -1) + " ", 0)))) ? U.some(e) : U.none();
    });
  },
      ig = function ig(t) {
    var e = At.fromDom(t.getBody());
    t.selection.isCollapsed() && og(e, Hs.fromRangeStart(t.selection.getRng())).each(function (e) {
      t.selection.setRng(e.toRange());
    });
  },
      ag = function ag(e, t, n) {
    var r, o, i, a, u, s, c, l;
    0 !== n && (r = At.fromDom(e), o = _r(r, eo).getOr(r), i = e.data.slice(t, t + n), a = t + n >= e.data.length && Zp(o, $s(e, e.data.length)), u = 0 === t && Qp(o, $s(e, 0)), e.replaceData(t, n, (c = u, l = a, X(s = i, function (e, t) {
      return Zl(t) || Ql(t) ? e.previousCharIsSpace || "" === e.str && c || e.str.length === s.length - 1 && l ? {
        previousCharIsSpace: !1,
        str: e.str + lo
      } : {
        previousCharIsSpace: !0,
        str: e.str + " "
      } : {
        previousCharIsSpace: !1,
        str: e.str + t
      };
    }, {
      previousCharIsSpace: !1,
      str: ""
    }).str)));
  },
      ug = function ug(e, t) {
    var n = e.data.slice(t),
        r = n.length - We(n).length;
    return ag(e, t, r);
  },
      sg = function sg(e, t) {
    var n = e.data.slice(0, t),
        r = n.length - Ke(n).length;
    return ag(e, t - r, r);
  },
      cg = function cg(e, t, n, r) {
    void 0 === r && (r = !0);
    var o = Ke(e.data).length,
        i = r ? e : t,
        a = r ? t : e;
    return r ? i.appendData(a.data) : i.insertData(0, a.data), pn(At.fromDom(a)), n && ug(i, o), i;
  },
      lg = function lg(e, t) {
    return r = e, o = (n = t).container(), i = n.offset(), !1 === $s.isTextPosition(n) && o === r.parentNode && i > $s.before(r).offset() ? $s(t.container(), t.offset() - 1) : t;
    var n, r, o, i;
  },
      fg = function fg(e) {
    return Lo(e.previousSibling) ? U.some((t = e.previousSibling, In(t) ? $s(t, t.data.length) : $s.after(t))) : e.previousSibling ? Ul(e.previousSibling) : U.none();
    var t;
  },
      dg = function dg(e) {
    return Lo(e.nextSibling) ? U.some((t = e.nextSibling, In(t) ? $s(t, 0) : $s.before(t))) : e.nextSibling ? Fl(e.nextSibling) : U.none();
    var t;
  },
      mg = function mg(r, o) {
    return fg(o).orThunk(function () {
      return dg(o);
    }).orThunk(function () {
      return e = r, t = o, n = $s.before(t.previousSibling ? t.previousSibling : t.parentNode), Ml(e, n).fold(function () {
        return Il(e, $s.after(t));
      }, U.some);
      var e, t, n;
    });
  },
      pg = function pg(n, r) {
    return dg(r).orThunk(function () {
      return fg(r);
    }).orThunk(function () {
      return t = r, Il(e = n, $s.after(t)).fold(function () {
        return Ml(e, $s.before(t));
      }, U.some);
      var e, t;
    });
  },
      gg = function gg(e, t, n) {
    return (e ? pg : mg)(t, n).map(N(lg, n));
  },
      hg = function hg(t, n, e) {
    e.fold(function () {
      t.focus();
    }, function (e) {
      t.selection.setRng(e.toRange(), n);
    });
  },
      vg = function vg(e, t) {
    return t && he(e.schema.getBlockElements(), Lt(t));
  },
      yg = function yg(e) {
    if ($o(e)) {
      var t = At.fromHtml('<br data-mce-bogus="1">');
      return mn(e), fn(e, t), U.some($s.before(t.dom));
    }

    return U.none();
  },
      bg = function bg(e, t, a) {
    var n,
        r,
        o,
        i,
        u = Wt(e).filter(Ut),
        s = Kt(e).filter(Ut);
    return pn(e), r = s, o = t, i = function i(e, t, n) {
      var r = e.dom,
          o = t.dom,
          i = r.data.length;
      return cg(r, o, a), n.container() === o ? $s(r, i) : n;
    }, ((n = u).isSome() && r.isSome() && o.isSome() ? U.some(i(n.getOrDie(), r.getOrDie(), o.getOrDie())) : U.none()).orThunk(function () {
      return a && (u.each(function (e) {
        return sg(e.dom, e.dom.length);
      }), s.each(function (e) {
        return ug(e.dom, 0);
      })), t;
    });
  },
      Cg = function Cg(t, n, e, r) {
    void 0 === r && (r = !0);

    var o,
        i,
        a = gg(n, t.getBody(), e.dom),
        u = _r(e, N(vg, t), (o = t.getBody(), function (e) {
      return e.dom === o;
    })),
        s = bg(e, a, (i = e, he(t.schema.getTextInlineElements(), Lt(i))));

    t.dom.isEmpty(t.getBody()) ? (t.setContent(""), t.selection.setCursorLocation()) : u.bind(yg).fold(function () {
      r && hg(t, n, s);
    }, function (e) {
      r && hg(t, n, U.some(e));
    });
  },
      wg = function wg(e, t) {
    return {
      start: e,
      end: t
    };
  },
      xg = Cr([{
    removeTable: ["element"]
  }, {
    emptyCells: ["cells"]
  }, {
    deleteCellSelection: ["rng", "cell"]
  }]),
      Sg = function Sg(e, t) {
    return Or(At.fromDom(e), "td,th", t);
  },
      Ng = function Ng(e, t) {
    return Tr(e, "table", t);
  },
      Eg = function Eg(e) {
    return !Ot(e.start, e.end);
  },
      kg = function kg(e, t) {
    return Ng(e.start, t).bind(function (r) {
      return Ng(e.end, t).bind(function (e) {
        return t = Ot(r, e), n = r, t ? U.some(n) : U.none();
        var t, n;
      });
    });
  },
      _g = function _g(e) {
    return Gu(e, "td,th");
  },
      Ag = function Ag(r, e) {
    var t = Sg(e.startContainer, r),
        n = Sg(e.endContainer, r);
    return e.collapsed ? U.none() : ds(t, n, wg).fold(function () {
      return t.fold(function () {
        return n.bind(function (t) {
          return Ng(t, r).bind(function (e) {
            return ne(_g(e)).map(function (e) {
              return wg(e, t);
            });
          });
        });
      }, function (t) {
        return Ng(t, r).bind(function (e) {
          return re(_g(e)).map(function (e) {
            return wg(t, e);
          });
        });
      });
    }, function (e) {
      return Rg(r, e) ? U.none() : (n = r, Ng((t = e).start, n).bind(function (e) {
        return re(_g(e)).map(function (e) {
          return wg(t.start, e);
        });
      }));
      var t, n;
    });
  },
      Rg = function Rg(e, t) {
    return kg(t, e).isSome();
  },
      Tg = function Tg(e, t, n) {
    return e.filter(function (e) {
      return Eg(e) && Rg(n, e);
    }).orThunk(function () {
      return Ag(n, t);
    }).bind(function (e) {
      return kg(t = e, n).map(function (e) {
        return {
          rng: t,
          table: e,
          cells: _g(e)
        };
      });
      var t;
    });
  },
      Dg = function Dg(e, t) {
    return G(e, function (e) {
      return Ot(e, t);
    });
  },
      Og = function Og(e, r, o) {
    return e.filter(function (e) {
      return n = o, !Eg(t = e) && kg(t, n).exists(function (e) {
        var t = e.dom.rows;
        return 1 === t.length && 1 === t[0].cells.length;
      }) && jf(e.start, r);
      var t, n;
    }).map(function (e) {
      return e.start;
    });
  },
      Bg = function Bg(n) {
    return ds(Dg((r = n).cells, r.rng.start), Dg(r.cells, r.rng.end), function (e, t) {
      return r.cells.slice(e, t + 1);
    }).map(function (e) {
      var t = n.cells;
      return e.length === t.length ? xg.removeTable(n.table) : xg.emptyCells(e);
    });
    var r;
  },
      Pg = function Pg(e, t) {
    var n,
        r,
        o,
        i,
        a,
        u = (n = e, function (e) {
      return Ot(n, e);
    }),
        s = (o = u, i = Sg((r = t).startContainer, o), a = Sg(r.endContainer, o), ds(i, a, wg));
    return Og(s, t, u).map(function (e) {
      return xg.deleteCellSelection(t, e);
    }).orThunk(function () {
      return Tg(s, t, u).bind(Bg);
    });
  },
      Lg = function Lg(e) {
    var t;
    return (8 === It(t = e) || "#comment" === Lt(t) ? Wt : Zt)(e).bind(Lg).orThunk(function () {
      return U.some(e);
    });
  },
      Ig = function Ig(e, t) {
    return W(t, _p), e.selection.setCursorLocation(t[0].dom, 0), !0;
  },
      Mg = function Mg(e, t, n) {
    t.deleteContents();
    var r,
        o,
        i = Lg(n).getOr(n),
        a = At.fromDom(e.dom.getParent(i.dom, e.dom.isBlock));
    return $o(a) && (_p(a), e.selection.setCursorLocation(a.dom, 0)), Ot(n, a) || (r = $t(a).is(n) ? [] : $t(o = a).map(Gt).map(function (e) {
      return H(e, function (e) {
        return !Ot(o, e);
      });
    }).getOr([]), W(r.concat(Gt(n)), function (e) {
      Ot(e, a) || Pt(e, a) || pn(e);
    })), !0;
  },
      Fg = function Fg(e, t) {
    return Cg(e, !1, t), !0;
  },
      Ug = function Ug(n, e, r, t) {
    return jg(e, t).fold(function () {
      return t = n, Pg(e, r).map(function (e) {
        return e.fold(N(Fg, t), N(Ig, t), N(Mg, t));
      });
      var t;
    }, function (e) {
      return Hg(n, e);
    }).getOr(!1);
  },
      zg = function zg(e, t) {
    return Y(Dp(t, e), uo);
  },
      jg = function jg(e, t) {
    return Y(Dp(t, e), function (e) {
      return "caption" === Lt(e);
    });
  },
      Hg = function Hg(e, t) {
    return _p(t), e.selection.setCursorLocation(t.dom, 0), U.some(!0);
  },
      Vg = function Vg(u, s, c, l, f) {
    return Bl(c, u.getBody(), f).bind(function (e) {
      return o = c, i = f, a = e, Fl((r = l).dom).bind(function (t) {
        return Ul(r.dom).map(function (e) {
          return o ? i.isEqual(t) && a.isEqual(e) : i.isEqual(e) && a.isEqual(t);
        });
      }).getOr(!0) ? Hg(u, l) : (t = l, n = e, jg(s, At.fromDom(n.getNode())).map(function (e) {
        return !1 === Ot(e, t);
      }));
      var t, n, r, o, i, a;
    }).or(U.some(!0));
  },
      qg = function qg(o, i, a, e) {
    var u = $s.fromRangeStart(o.selection.getRng());
    return zg(a, e).bind(function (e) {
      return $o(e) ? Hg(o, e) : (t = a, n = e, r = u, Bl(i, o.getBody(), r).bind(function (e) {
        return zg(t, At.fromDom(e.getNode())).map(function (e) {
          return !1 === Ot(e, n);
        });
      }));
      var t, n, r;
    }).getOr(!1);
  },
      $g = function $g(e, t) {
    return (e ? xp : Sp)(t);
  },
      Wg = function Wg(a, u, r) {
    var s = At.fromDom(a.getBody());
    return jg(s, r).fold(function () {
      return qg(a, u, s, r) || (e = a, t = u, n = $s.fromRangeStart(e.selection.getRng()), $g(t, n) || Ol(t, e.getBody(), n).exists(function (e) {
        return $g(t, e);
      }));
      var e, t, n;
    }, function (e) {
      return t = a, n = u, r = s, o = e, i = $s.fromRangeStart(t.selection.getRng()), ($o(o) ? Hg(t, o) : Vg(t, r, n, o, i)).getOr(!1);
      var t, n, r, o, i;
    });
  },
      Kg = function Kg(e, t) {
    var n,
        r,
        o,
        i,
        a,
        u = At.fromDom(e.selection.getStart(!0)),
        s = Ff(e);
    return e.selection.isCollapsed() && 0 === s.length ? Wg(e, t, u) : (n = e, r = u, o = At.fromDom(n.getBody()), i = n.selection.getRng(), 0 !== (a = Ff(n)).length ? Ig(n, a) : Ug(n, o, i, r));
  },
      Xg = function Xg(a) {
    var u = $s.fromRangeStart(a),
        s = $s.fromRangeEnd(a),
        c = a.commonAncestorContainer;
    return Ol(!1, c, s).map(function (e) {
      return !ol(u, s, c) && ol(u, e, c) ? (t = u.container(), n = u.offset(), r = e.container(), o = e.offset(), (i = document.createRange()).setStart(t, n), i.setEnd(r, o), i) : a;
      var t, n, r, o, i;
    }).getOr(a);
  },
      Yg = function Yg(e) {
    return e.collapsed ? e : Xg(e);
  },
      Gg = function Gg(e, t) {
    var n, r;
    return e.getBlockElements()[t.name] && (r = t).firstChild && r.firstChild === r.lastChild && ("br" === (n = t.firstChild).name || n.value === lo);
  },
      Jg = function Jg(e, t) {
    var n,
        r,
        o,
        i = t.firstChild,
        a = t.lastChild;
    return i && "meta" === i.name && (i = i.next), a && "mce_marker" === a.attr("id") && (a = a.prev), r = a, o = (n = e).getNonEmptyElements(), r && (r.isEmpty(o) || Gg(n, r)) && (a = a.prev), !(!i || i !== a) && ("ul" === i.name || "ol" === i.name);
  },
      Qg = function Qg(e) {
    return e && e.firstChild && e.firstChild === e.lastChild && ((t = e.firstChild).data === lo || zn(t));
    var t;
  },
      Zg = function Zg(e) {
    return 0 < e.length && (!(t = e[e.length - 1]).firstChild || Qg(t)) ? e.slice(0, -1) : e;
    var t;
  },
      eh = function eh(e, t) {
    var n = e.getParent(t, e.isBlock);
    return n && "LI" === n.nodeName ? n : null;
  },
      th = function th(e, t) {
    var n = $s.after(e),
        r = _l(t).prev(n);

    return r ? r.toRange() : null;
  },
      nh = function nh(t, e, n) {
    var r,
        o,
        i,
        a,
        u = t.parentNode;
    return kt.each(e, function (e) {
      u.insertBefore(e, t);
    }), r = t, o = n, i = $s.before(r), (a = _l(o).next(i)) ? a.toRange() : null;
  },
      rh = function rh(e, o, i, t) {
    var n,
        r,
        a,
        u,
        s,
        c,
        l,
        f,
        d,
        m,
        p,
        g,
        h,
        v,
        y,
        b,
        C,
        w,
        x,
        S,
        N = (n = o, r = t, c = e.serialize(r), l = n.createFragment(c), u = (a = l).firstChild, s = a.lastChild, u && "META" === u.nodeName && u.parentNode.removeChild(u), s && "mce_marker" === s.id && s.parentNode.removeChild(s), a),
        E = eh(o, i.startContainer),
        k = Zg((f = N.firstChild, kt.grep(f.childNodes, function (e) {
      return "LI" === e.nodeName;
    }))),
        _ = o.getRoot(),
        A = function A(e) {
      var t = $s.fromRangeStart(i),
          n = _l(o.getRoot()),
          r = 1 === e ? n.prev(t) : n.next(t);

      return !r || eh(o, r.getNode()) !== E;
    };

    return A(1) ? nh(E, k, _) : A(2) ? (d = E, m = k, p = _, o.insertAfter(m.reverse(), d), th(m[0], p)) : (h = k, v = _, y = g = E, C = (b = i).cloneRange(), w = b.cloneRange(), C.setStartBefore(y), w.setEndAfter(y), x = [C.cloneContents(), w.cloneContents()], (S = g.parentNode).insertBefore(x[0], g), kt.each(h, function (e) {
      S.insertBefore(e, g);
    }), S.insertBefore(x[1], g), S.removeChild(g), th(h[h.length - 1], v));
  },
      oh = qn,
      ih = function ih(e) {
    var t = e.dom,
        n = Yg(e.selection.getRng());
    e.selection.setRng(n);
    var r,
        o,
        i,
        a = t.getParent(n.startContainer, oh);
    r = t, o = n, null !== (i = a) && i === r.getParent(o.endContainer, oh) && jf(At.fromDom(i), o) ? Mg(e, n, At.fromDom(a)) : e.getDoc().execCommand("Delete", !1, null);
  },
      ah = function ah(e, t, n) {
    var r,
        o,
        i,
        a,
        u,
        s,
        c,
        l,
        f,
        d = e.selection,
        m = e.dom;
    /^ | $/.test(t) && (s = m, c = d.getRng(), l = t, f = At.fromDom(s.getRoot()), l = Qp(f, $s.fromRangeStart(c)) ? l.replace(/^ /, "&nbsp;") : l.replace(/^&nbsp;/, " "), t = l = Zp(f, $s.fromRangeEnd(c)) ? l.replace(/(&nbsp;| )(<br( \/)>)?$/, "&nbsp;") : l.replace(/&nbsp;(<br( \/)?>)?$/, " "));
    var p = e.parser,
        g = n.merge,
        h = Jm({
      validate: e.getParam("validate")
    }, e.schema),
        v = '<span id="mce_marker" data-mce-type="bookmark">&#xFEFF;</span>',
        y = {
      content: t,
      format: "html",
      selection: !0,
      paste: n.paste
    };
    if ((y = e.fire("BeforeSetContent", y)).isDefaultPrevented()) e.fire("SetContent", {
      content: y.content,
      format: "html",
      selection: !0,
      paste: n.paste
    });else {
      -1 === (t = y.content).indexOf("{$caret}") && (t += "{$caret}"), t = t.replace(/\{\$caret\}/, v);
      var b,
          C,
          w = (a = d.getRng()).startContainer || (a.parentElement ? a.parentElement() : null),
          x = e.getBody();
      w === x && d.isCollapsed() && m.isBlock(x.firstChild) && (b = e, (C = x.firstChild) && !b.schema.getShortEndedElements()[C.nodeName]) && m.isEmpty(x.firstChild) && ((a = m.createRng()).setStart(x.firstChild, 0), a.setEnd(x.firstChild, 0), d.setRng(a)), d.isCollapsed() || ih(e);

      var S,
          N,
          E,
          k,
          _,
          A,
          R,
          T,
          D,
          O,
          B,
          P,
          L,
          I,
          M = {
        context: (r = d.getNode()).nodeName.toLowerCase(),
        data: n.data,
        insert: !0
      },
          F = p.parse(t, M);

      if (!0 === n.paste && Jg(e.schema, F) && eh(m, r)) return a = rh(h, m, d.getRng(), F), d.setRng(a), void e.fire("SetContent", y);
      if (!function (e) {
        for (var t = e; t = t.walk();) {
          1 === t.type && t.attr("data-mce-fragment", "1");
        }
      }(F), "mce_marker" === (u = F.lastChild).attr("id")) for (u = (i = u).prev; u; u = u.walk(!0)) {
        if (3 === u.type || !m.isBlock(u.name)) {
          e.schema.isValidChild(u.parent.name, "span") && u.parent.insert(i, u, "br" === u.name);
          break;
        }
      }

      if (e._selectionOverrides.showBlockCaretContainer(r), M.invalid) {
        for (e.selection.setContent(v), r = d.getNode(), o = e.getBody(), 9 === r.nodeType ? r = u = o : u = r; u !== o;) {
          u = (r = u).parentNode;
        }

        t = r === o ? o.innerHTML : m.getOuterHTML(r), t = h.serialize(p.parse(t.replace(/<span (id="mce_marker"|id=mce_marker).+?<\/span>/i, function () {
          return h.serialize(F);
        }))), r === o ? m.setHTML(o, t) : m.setOuterHTML(r, t);
      } else t = h.serialize(F), S = e, N = t, "all" === (E = r).getAttribute("data-mce-bogus") ? E.parentNode.insertBefore(S.dom.createFragment(N), E) : (k = E.firstChild, _ = E.lastChild, !k || k === _ && "BR" === k.nodeName ? S.dom.setHTML(E, N) : S.selection.setContent(N));

      R = g, O = (A = e).schema.getTextInlineElements(), B = A.dom, R && (T = A.getBody(), D = new lp(B), kt.each(B.select("*[data-mce-fragment]"), function (e) {
        for (var t = e.parentNode; t && t !== T; t = t.parentNode) {
          O[e.nodeName.toLowerCase()] && D.compare(t, e) && B.remove(e, !0);
        }
      })), function (n, e) {
        var t,
            r,
            o = n.dom,
            i = n.selection;

        if (e) {
          i.scrollIntoView(e);

          var a = function (e) {
            for (var t = n.getBody(); e && e !== t; e = e.parentNode) {
              if ("false" === o.getContentEditable(e)) return e;
            }

            return null;
          }(e);

          if (a) return o.remove(e), i.select(a);
          var u = o.createRng(),
              s = e.previousSibling;
          s && 3 === s.nodeType ? (u.setStart(s, s.nodeValue.length), wt.ie || (r = e.nextSibling) && 3 === r.nodeType && (s.appendData(r.data), r.parentNode.removeChild(r))) : (u.setStartBefore(e), u.setEndBefore(e));
          var c = o.getParent(e, o.isBlock);
          o.remove(e), c && o.isEmpty(c) && (n.$(c).empty(), u.setStart(c, 0), u.setEnd(c, 0), oh(c) || c.getAttribute("data-mce-fragment") || !(t = function (e) {
            var t = $s.fromRangeStart(e);
            if (t = _l(n.getBody()).next(t)) return t.toRange();
          }(u)) ? o.add(c, o.create("br", {
            "data-mce-bogus": "1"
          })) : (u = t, o.remove(c))), i.setRng(u);
        }
      }(e, m.get("mce_marker")), P = e.getBody(), kt.each(P.getElementsByTagName("*"), function (e) {
        e.removeAttribute("data-mce-fragment");
      }), L = m, I = d.getStart(), U.from(L.getParent(I, "td,th")).map(At.fromDom).each(Ap), e.fire("SetContent", y), e.addVisual();
    }
  },
      uh = function uh(e, t) {
    t(e), e.firstChild && uh(e.firstChild, t), e.next && uh(e.next, t);
  },
      sh = function sh(e, t, n) {
    var r = function (e, n, t) {
      var r = {},
          o = {},
          i = [];

      for (var a in t.firstChild && uh(t.firstChild, function (t) {
        W(e, function (e) {
          e.name === t.name && (r[e.name] ? r[e.name].nodes.push(t) : r[e.name] = {
            filter: e,
            nodes: [t]
          });
        }), W(n, function (e) {
          "string" == typeof t.attr(e.name) && (o[e.name] ? o[e.name].nodes.push(t) : o[e.name] = {
            filter: e,
            nodes: [t]
          });
        });
      }), r) {
        r.hasOwnProperty(a) && i.push(r[a]);
      }

      for (var u in o) {
        o.hasOwnProperty(u) && i.push(o[u]);
      }

      return i;
    }(e, t, n);

    W(r, function (t) {
      W(t.filter.callbacks, function (e) {
        e(t.nodes, t.filter.name, {});
      });
    });
  },
      ch = function ch(e) {
    return e instanceof Km;
  },
      lh = function lh(e, t) {
    var r;
    e.dom.setHTML(e.getBody(), t), Em(r = e) && Fl(r.getBody()).each(function (e) {
      var t = e.getNode(),
          n = Bn(t) ? Fl(t).getOr(e) : e;
      r.selection.setRng(n.toRange());
    });
  },
      fh = function fh(u, s, c) {
    return c.format = c.format ? c.format : "html", c.set = !0, c.content = ch(s) ? "" : s, c.no_events || u.fire("BeforeSetContent", c), ch(s) || (s = c.content), U.from(u.getBody()).fold(E(s), function (e) {
      return ch(s) ? function (e, t, n, r) {
        sh(e.parser.getNodeFilters(), e.parser.getAttributeFilters(), n);
        var o = Jm({
          validate: e.validate
        }, e.schema).serialize(n);
        return r.content = so(At.fromDom(t)) ? o : kt.trim(o), lh(e, r.content), r.no_events || e.fire("SetContent", r), n;
      }(u, e, s, c) : (t = u, n = e, o = c, 0 === (r = s).length || /^\s+$/.test(r) ? (a = '<br data-mce-bogus="1">', "TABLE" === n.nodeName ? r = "<tr><td>" + a + "</td></tr>" : /^(UL|OL)$/.test(n.nodeName) && (r = "<li>" + a + "</li>"), r = (i = vc(t)) && t.schema.isValidChild(n.nodeName.toLowerCase(), i.toLowerCase()) ? (r = a, t.dom.createHTML(i, yc(t), r)) : r || '<br data-mce-bogus="1">', lh(t, r), t.fire("SetContent", o)) : ("raw" !== o.format && (r = Jm({
        validate: t.validate
      }, t.schema).serialize(t.parser.parse(r, {
        isRootContent: !0,
        insert: !0
      }))), o.content = so(At.fromDom(n)) ? r : kt.trim(r), lh(t, o.content), o.no_events || t.fire("SetContent", o)), o.content);
      var t, n, r, o, i, a;
    });
  },
      dh = function dh(e, t) {
    return r = t, ((o = (n = e).dom).parentNode ? Rr(At.fromDom(o.parentNode), function (e) {
      return !Ot(n, e) && r(e);
    }) : U.none()).isSome();
    var n, r, o;
  },
      mh = fo,
      ph = "_mce_caret",
      gh = function gh(e) {
    return 0 < function (e) {
      for (var t = []; e;) {
        if (3 === e.nodeType && e.nodeValue !== mh || 1 < e.childNodes.length) return [];
        1 === e.nodeType && t.push(e), e = e.firstChild;
      }

      return t;
    }(e).length;
  },
      hh = function hh(e) {
    if (e) {
      var t = new Xr(e, e);

      for (e = t.current(); e; e = t.next()) {
        if (In(e)) return e;
      }
    }

    return null;
  },
      vh = function vh(e) {
    var t = At.fromTag("span");
    return Yn(t, {
      id: ph,
      "data-mce-bogus": "1",
      "data-mce-type": "format-caret"
    }), e && fn(t, At.fromText(mh)), t;
  },
      yh = function yh(e, t, n) {
    void 0 === n && (n = !0);
    var r,
        o,
        i,
        a,
        u,
        s,
        c,
        l,
        f = e.dom,
        d = e.selection;
    gh(t) ? Cg(e, !1, At.fromDom(t), n) : (r = d.getRng(), o = f.getParent(t, f.isBlock), i = r.startContainer, a = r.startOffset, u = r.endContainer, s = r.endOffset, (l = hh(t)) && l.nodeValue.charAt(0) === mh && l.deleteData(0, 1), c = l, f.remove(t, !0), i === c && 0 < a && r.setStart(c, a - 1), u === c && 0 < s && r.setEnd(c, s - 1), o && f.isEmpty(o) && _p(At.fromDom(o)), d.setRng(r));
  },
      bh = function bh(e, t, n) {
    void 0 === n && (n = !0);
    var r = e.dom,
        o = e.selection;
    if (t) yh(e, t, n);else if (!(t = Hl(e.getBody(), o.getStart()))) for (; t = r.get(ph);) {
      yh(e, t, !1);
    }
  },
      Ch = function Ch(e, t) {
    return e.appendChild(t), t;
  },
      wh = function wh(e, t) {
    var n = K(e, function (e, t) {
      return Ch(e, t.cloneNode(!1));
    }, t);
    return Ch(n, n.ownerDocument.createTextNode(mh));
  },
      xh = function xh(e, t, n, r) {
    var o,
        i,
        a,
        u,
        s,
        c,
        l,
        f,
        d,
        m,
        p,
        g,
        h,
        v = e.dom,
        y = e.selection,
        b = [],
        C = y.getRng(),
        w = C.startContainer,
        x = C.startOffset,
        S = w;

    for (3 === w.nodeType && (x !== w.nodeValue.length && (o = !0), S = S.parentNode); S;) {
      if (zm(e, S, t, n, r)) {
        i = S;
        break;
      }

      S.nextSibling && (o = !0), b.push(S), S = S.parentNode;
    }

    i && (o ? (a = y.getBookmark(), C.collapse(!0), u = Of(e, C, e.formatter.get(t), !0), u = Cd(u), e.formatter.remove(t, n, u, r), y.moveToBookmark(a)) : (s = Hl(e.getBody(), i), c = vh(!1).dom, m = c, p = null !== s ? s : i, g = (d = e).dom, (h = g.getParent(p, N(of, d))) && g.isEmpty(h) ? p.parentNode.replaceChild(m, p) : (kp(At.fromDom(p)), g.isEmpty(p) ? p.parentNode.replaceChild(m, p) : g.insertAfter(m, p)), l = function (t, e, n, r, o, i) {
      var a = t.formatter,
          u = t.dom,
          s = H(ie(a.get()), function (e) {
        return e !== r && !He(e, "removeformat");
      }),
          c = Vm(t, n, s);

      if (0 < H(c, function (e) {
        return !pf(t, e, r);
      }).length) {
        var l = n.cloneNode(!1);
        return u.add(e, l), a.remove(r, o, l, i), u.remove(l), U.some(l);
      }

      return U.none();
    }(e, c, i, t, n, r), f = wh(b.concat(l.toArray()), c), yh(e, s, !1), y.setCursorLocation(f, 1), v.isEmpty(i) && v.remove(i)));
  },
      Sh = function Sh(i) {
    i.on("mouseup keydown", function (e) {
      var t, n, r, o;
      t = i, n = e.keyCode, r = t.selection, o = t.getBody(), bh(t, null, !1), 8 !== n && 46 !== n || !r.isCollapsed() || r.getStart().innerHTML !== mh || bh(t, Hl(o, r.getStart())), 37 !== n && 39 !== n || bh(t, Hl(o, r.getStart()));
    });
  },
      Nh = function Nh(e, t) {
    return e.schema.getTextInlineElements().hasOwnProperty(Lt(t)) && !jl(t.dom) && !On(t.dom);
  },
      Eh = {},
      kh = we,
      _h = be;

  op = function op(e) {
    var t,
        n = e.selection.getRng(),
        r = Rn(["pre"]);
    n.collapsed || (t = e.selection.getSelectedBlocks(), _h(kh(kh(t, r), function (e) {
      return r(e.previousSibling) && -1 !== xe(t, e.previousSibling);
    }), function (e) {
      var t, n;
      t = e.previousSibling, hu(n = e).remove(), hu(t).append("<br><br>").append(n.childNodes);
    }));
  }, Eh[rp = "pre"] || (Eh[rp] = []), Eh[rp].push(op);

  var Ah = kt.each,
      Rh = function Rh(e) {
    return An(e) && !Jl(e) && !jl(e) && !On(e);
  },
      Th = function Th(e, t) {
    for (var n = e; n; n = n[t]) {
      if (In(n) && 0 !== n.nodeValue.length) return e;
      if (An(n) && !Jl(n)) return n;
    }

    return e;
  },
      Dh = function Dh(e, t, n) {
    var r,
        o,
        i = new lp(e);

    if (t && n && (t = Th(t, "previousSibling"), n = Th(n, "nextSibling"), i.compare(t, n))) {
      for (r = t.nextSibling; r && r !== n;) {
        r = (o = r).nextSibling, t.appendChild(o);
      }

      return e.remove(n), kt.each(kt.grep(n.childNodes), function (e) {
        t.appendChild(e);
      }), t;
    }

    return n;
  },
      Oh = function Oh(e, t, n, r) {
    var o;
    r && !1 !== t.merge_siblings && (o = Dh(e, rf(r), r), Dh(e, o, rf(o, !0)));
  },
      Bh = function Bh(e, t, n) {
    Ah(e.childNodes, function (e) {
      Rh(e) && (t(e) && n(e), e.hasChildNodes() && Bh(e, t, n));
    });
  },
      Ph = function Ph(t, n) {
    return function (e) {
      return !(!e || !ff(t, e, n));
    };
  },
      Lh = function Lh(r, o, i) {
    return function (e) {
      var t, n;
      r.setStyle(e, o, i), "" === e.getAttribute("style") && e.removeAttribute("style"), t = r, "SPAN" === (n = e).nodeName && 0 === t.getAttribs(n).length && t.remove(n, !0);
    };
  },
      Ih = Cr([{
    keep: []
  }, {
    rename: ["name"]
  }, {
    removed: []
  }]),
      Mh = /^(src|href|style)$/,
      Fh = kt.each,
      Uh = cf,
      zh = function zh(e, t, n) {
    return e.isChildOf(t, n) && t !== n && !e.isBlock(n);
  },
      jh = function jh(e, t, n) {
    var r,
        o = t[n ? "startContainer" : "endContainer"],
        i = t[n ? "startOffset" : "endOffset"];
    return An(o) && (r = o.childNodes.length - 1, !n && i && i--, o = o.childNodes[r < i ? r : i]), In(o) && n && i >= o.nodeValue.length && (o = new Xr(o, e.getBody()).next() || o), In(o) && !n && 0 === i && (o = new Xr(o, e.getBody()).prev() || o), o;
  },
      Hh = function Hh(e, t) {
    var n = t ? "firstChild" : "lastChild";

    if (/^(TR|TH|TD)$/.test(e.nodeName) && e[n]) {
      var r = e[n];
      return "TR" === e.nodeName && r[n] || r;
    }

    return e;
  },
      Vh = function Vh(e, t, n, r) {
    var o = e.create(n, r);
    return t.parentNode.insertBefore(o, t), o.appendChild(t), o;
  },
      qh = function qh(e, t, n, r, o) {
    var i = At.fromDom(t),
        a = At.fromDom(e.create(r, o)),
        u = (n ? Yt : Xt)(i);
    return dn(a, u), n ? (sn(i, a), ln(a, i)) : (cn(i, a), fn(a, i)), a.dom;
  },
      $h = function $h(e, t, n, r) {
    return !(t = rf(t, n, r)) || "BR" === t.nodeName || e.isBlock(t);
  },
      Wh = function Wh(e, r, o, t, i) {
    var n,
        a,
        u,
        s,
        c,
        l = e.dom;
    if (u = l, !(Uh(s = t, (c = r).inline) || Uh(s, c.block) || c.selector && An(s) && u.is(s, c.selector) || (a = t, r.links && "A" === a.nodeName))) return Ih.keep();
    var f,
        d,
        m,
        p,
        g,
        h,
        v,
        y = t;

    if (r.inline && "all" === r.remove && S(r.preserve_attributes)) {
      var b = H(l.getAttribs(y), function (e) {
        return M(r.preserve_attributes, e.name.toLowerCase());
      });
      if (l.removeAllAttribs(y), W(b, function (e) {
        return l.setAttrib(y, e.name, e.value);
      }), 0 < b.length) return Ih.rename("span");
    }

    if ("all" !== r.remove) {
      Fh(r.styles, function (e, t) {
        e = lf(l, sf(e, o), t + ""), O(t) && (t = e, i = null), !r.remove_similar && i && !Uh(ff(l, i, t), e) || l.setStyle(y, t, ""), n = !0;
      }), n && "" === l.getAttrib(y, "style") && (y.removeAttribute("style"), y.removeAttribute("data-mce-style")), Fh(r.attributes, function (e, t) {
        var n;

        if (e = sf(e, o), O(t) && (t = e, i = null), r.remove_similar || !i || Uh(l.getAttrib(i, t), e)) {
          if ("class" === t && (e = l.getAttrib(y, t)) && (n = "", W(e.split(/\s+/), function (e) {
            /mce\-\w+/.test(e) && (n += (n ? " " : "") + e);
          }), n)) return void l.setAttrib(y, t, n);
          "class" === t && y.removeAttribute("className"), Mh.test(t) && y.removeAttribute("data-mce-" + t), y.removeAttribute(t);
        }
      }), Fh(r.classes, function (e) {
        e = sf(e, o), i && !l.hasClass(i, e) || l.removeClass(y, e);
      });

      for (var C = l.getAttribs(y), w = 0; w < C.length; w++) {
        var x = C[w].nodeName;
        if (0 !== x.indexOf("_") && 0 !== x.indexOf("data-")) return Ih.keep();
      }
    }

    return "none" !== r.remove ? (f = e, m = r, g = (d = y).parentNode, h = f.dom, v = vc(f), m.block && (v ? g === h.getRoot() && (m.list_block && Uh(d, m.list_block) || W(oe(d.childNodes), function (e) {
      af(f, v, e.nodeName.toLowerCase()) ? p ? p.appendChild(e) : (p = Vh(h, e, v), h.setAttribs(p, f.settings.forced_root_block_attrs)) : p = 0;
    })) : h.isBlock(d) && !h.isBlock(g) && ($h(h, d, !1) || $h(h, d.firstChild, !0, !0) || d.insertBefore(h.create("br"), d.firstChild), $h(h, d, !0) || $h(h, d.lastChild, !1, !0) || d.appendChild(h.create("br")))), m.selector && m.inline && !Uh(m.inline, d) || h.remove(d, !0), Ih.removed()) : Ih.keep();
  },
      Kh = function Kh(t, e, n, r, o) {
    return Wh(t, e, n, r, o).fold(C, function (e) {
      return t.dom.rename(r, e), !0;
    }, k);
  },
      Xh = function Xh(e, t, n, r, o, i, a, u) {
    var s,
        c,
        l,
        f = e.dom;

    if (n) {
      for (var d = n.parentNode, m = r.parentNode; m && m !== d; m = m.parentNode) {
        s = f.clone(m, !1);

        for (var p = 0; p < t.length && null !== (s = function (t, e, n, r) {
          return Wh(t, e, n, r, r).fold(E(r), function (e) {
            return t.dom.createFragment().appendChild(r), t.dom.rename(r, e);
          }, E(null));
        }(e, t[p], u, s)); p++) {
          ;
        }

        s && (c && s.appendChild(c), l = l || s, c = s);
      }

      !i || a.mixed && f.isBlock(n) || (r = f.split(n, r)), c && (o.parentNode.insertBefore(c, o), l.appendChild(o), a.inline && Oh(f, a, 0, c));
    }

    return r;
  },
      Yh = function Yh(s, c, l, e, f) {
    var t,
        d = s.formatter.get(c),
        m = d[0],
        i = !0,
        a = s.dom,
        n = s.selection,
        u = function u(e) {
      var n,
          t,
          r,
          o,
          i,
          a,
          u = (t = e, r = c, o = l, i = f, W(mf((n = s).dom, t.parentNode).reverse(), function (e) {
        var t;
        a || "_start" === e.id || "_end" === e.id || (t = zm(n, e, r, o, i)) && !1 !== t.split && (a = e);
      }), a);
      return Xh(s, d, u, e, e, !0, m, l);
    },
        p = function p(e) {
      var t, n;
      An(e) && a.getContentEditable(e) && (t = i, i = "true" === a.getContentEditable(e), n = !0);
      var r = oe(e.childNodes);
      if (i && !n) for (var o = 0; o < d.length && !Kh(s, d[o], l, e, e); o++) {
        ;
      }

      if (m.deep && r.length) {
        for (o = 0; o < r.length; o++) {
          p(r[o]);
        }

        n && (i = t);
      }
    },
        g = function g(e) {
      var t,
          n = a.get(e ? "_start" : "_end"),
          r = n[e ? "firstChild" : "lastChild"];
      return Jl(t = r) && An(t) && ("_start" === t.id || "_end" === t.id) && (r = r[e ? "firstChild" : "lastChild"]), In(r) && 0 === r.data.length && (r = e ? n.previousSibling || n.nextSibling : n.nextSibling || n.previousSibling), a.remove(n, !0), r;
    },
        r = function r(e) {
      var t,
          n,
          r = Of(s, e, d, e.collapsed);

      if (m.split) {
        if (r = Cd(r), (t = jh(s, r, !0)) !== (n = jh(s, r))) {
          if (t = Hh(t, !0), n = Hh(n, !1), zh(a, t, n)) {
            var o = U.from(t.firstChild).getOr(t);
            return u(qh(a, o, !0, "span", {
              id: "_start",
              "data-mce-type": "bookmark"
            })), void g(!0);
          }

          if (zh(a, n, t)) {
            o = U.from(n.lastChild).getOr(n);
            return u(qh(a, o, !1, "span", {
              id: "_end",
              "data-mce-type": "bookmark"
            })), void g(!1);
          }

          t = Vh(a, t, "span", {
            id: "_start",
            "data-mce-type": "bookmark"
          }), n = Vh(a, n, "span", {
            id: "_end",
            "data-mce-type": "bookmark"
          });
          var i = a.createRng();
          i.setStartAfter(t), i.setEndBefore(n), Pf(a, i, function (e) {
            W(e, function (e) {
              Jl(e) || Jl(e.parentNode) || u(e);
            });
          }), u(t), u(n), t = g(!0), n = g();
        } else t = n = u(t);

        r.startContainer = t.parentNode ? t.parentNode : t, r.startOffset = a.nodeIndex(t), r.endContainer = n.parentNode ? n.parentNode : n, r.endOffset = a.nodeIndex(n) + 1;
      }

      Pf(a, r, function (e) {
        W(e, function (t) {
          p(t);
          W(["underline", "line-through", "overline"], function (e) {
            An(t) && s.dom.getStyle(t, "text-decoration") === e && t.parentNode && df(a, t.parentNode) === e && Kh(s, {
              deep: !1,
              exact: !0,
              inline: "span",
              styles: {
                textDecoration: e
              }
            }, null, t);
          });
        });
      });
    };

    if (e) tf(e) ? ((t = a.createRng()).setStartBefore(e), t.setEndAfter(e), r(t)) : r(e);else if ("false" !== a.getContentEditable(n.getNode())) n.isCollapsed() && m.inline && !Ff(s).length ? xh(s, c, l, f) : ($f(n, !0, function () {
      qf(s, r);
    }), m.inline && jm(s, c, l, n.getStart()) && nf(a, n, n.getRng()), s.nodeChanged());else {
      e = n.getNode();

      for (var o = 0; o < d.length && (!d[o].ceFalseOverride || !Kh(s, d[o], l, e, e)); o++) {
        ;
      }
    }
  },
      Gh = kt.each,
      Jh = function Jh(i, e, a, u) {
    Gh(e, function (t) {
      var r, e, n, o;
      Gh(i.dom.select(t.inline, u), function (e) {
        Rh(e) && Kh(i, t, a, e, t.exact ? e : null);
      }), r = i.dom, n = u, (e = t).clear_child_styles && (o = e.links ? "*:not(a)" : "*", Ah(r.select(o, n), function (n) {
        Rh(n) && Ah(e.styles, function (e, t) {
          r.setStyle(n, t, "");
        });
      }));
    });
  },
      Qh = kt.each,
      Zh = ve,
      ev = function ev(E, k, _, r) {
    var e,
        t,
        n,
        o,
        A = E.formatter.get(k),
        R = A[0],
        i = !r && E.selection.isCollapsed(),
        a = E.dom,
        u = E.selection,
        T = function T(n, e) {
      var t;
      e = e || R, n && (e.onformat && e.onformat(n, e, _, r), Qh(e.styles, function (e, t) {
        a.setStyle(n, t, sf(e, _));
      }), !e.styles || (t = a.getAttrib(n, "style")) && a.setAttrib(n, "data-mce-style", t), Qh(e.attributes, function (e, t) {
        a.setAttrib(n, t, sf(e, _));
      }), Qh(e.classes, function (e) {
        e = sf(e, _), a.hasClass(n, e) || a.addClass(n, e);
      }));
    },
        m = function m(e, t) {
      var n = !1;
      return !!hf(R) && (Qh(e, function (e) {
        if (!("collapsed" in e && e.collapsed !== i)) return a.is(t, e.selector) && !jl(t) ? (T(t, e), !(n = !0)) : void 0;
      }), n);
    },
        s = function s(S, e, t, c) {
      var N = [],
          l = !0,
          f = R.inline || R.block,
          d = S.create(f);
      T(d), Pf(S, e, function (e) {
        var u,
            s = function s(e) {
          var t = !1,
              n = l,
              r = e.nodeName.toLowerCase(),
              o = e.parentNode.nodeName.toLowerCase();
          if (An(e) && S.getContentEditable(e) && (n = l, l = "true" === S.getContentEditable(e), t = !0), zn(e) && !function (e, t, n, r) {
            if (e.getParam("format_empty_lines", !1, "boolean") && vf(t)) {
              var o = _ke(_ke({}, e.schema.getTextBlockElements()), {
                td: {},
                th: {},
                li: {},
                dt: {},
                dd: {},
                figcaption: {},
                caption: {},
                details: {},
                summary: {}
              }),
                  i = dh(At.fromDom(n), function (e) {
                return jl(e.dom);
              });

              return ve(o, r) && $o(At.fromDom(n.parentNode), !1) && !i;
            }

            return !1;
          }(E, R, e, o)) return u = null, void (gf(R) && S.remove(e));
          if (R.wrapper && zm(E, e, k, _)) u = null;else {
            if (l && !t && gf(R) && !R.wrapper && of(E, r) && af(E, o, f)) {
              var i = S.rename(e, f);
              return T(i), N.push(i), void (u = null);
            }

            if (hf(R)) {
              var a = m(A, e);
              if (!Zh(R, "inline") || a) return void (u = null);
            }

            !l || t || !af(E, f, r) || !af(E, o, f) || !c && 3 === e.nodeType && 1 === e.nodeValue.length && 65279 === e.nodeValue.charCodeAt(0) || jl(e) || Zh(R, "inline") && S.isBlock(e) ? (u = null, Qh(kt.grep(e.childNodes), s), t && (l = n), u = null) : (u || (u = S.clone(d, !1), e.parentNode.insertBefore(u, e), N.push(u)), u.appendChild(e));
          }
        };

        Qh(e, s);
      }), !0 === R.links && Qh(N, function (e) {
        var t = function t(e) {
          "A" === e.nodeName && T(e, R), Qh(kt.grep(e.childNodes), t);
        };

        t(e);
      }), Qh(N, function (e) {
        var n,
            t,
            r,
            o,
            i,
            a,
            u,
            s,
            c,
            l,
            f,
            d,
            m,
            p,
            g,
            h,
            v,
            y,
            b,
            C,
            w = function w(e) {
          var n = !1;
          return Qh(e.childNodes, function (e) {
            if ((t = e) && 1 === t.nodeType && !Jl(t) && !jl(t) && !On(t)) return n = e, !1;
            var t;
          }), n;
        },
            x = (n = 0, Qh(e.childNodes, function (e) {
          var t;
          D(t = e) && In(t) && 0 === t.length || Jl(e) || n++;
        }), n);

        !(1 < N.length) && S.isBlock(e) || 0 !== x ? (vf(R) || R.wrapper) && (R.exact || 1 !== x || ((C = w(y = e)) && !Jl(C) && Fm(S, C, R) && (b = S.clone(C, !1), T(b), S.replace(b, y, !0), S.remove(C, !0)), e = b || y), Jh(E, A, _, e), p = R, g = k, h = _, zm(m = E, (v = e).parentNode, g, h) && Kh(m, p, h, v) || p.merge_with_parents && m.dom.getParent(v.parentNode, function (e) {
          if (zm(m, e, g, h)) return Kh(m, p, h, v), !0;
        }), c = S, f = _, d = e, (l = R).styles && l.styles.backgroundColor && Bh(d, Ph(c, "fontSize"), Lh(c, "backgroundColor", sf(l.styles.backgroundColor, f))), i = S, u = e, s = function s(e) {
          var t;
          1 === e.nodeType && e.parentNode && 1 === e.parentNode.nodeType && (t = df(i, e.parentNode), i.getStyle(e, "color") && t ? i.setStyle(e, "text-decoration", t) : i.getStyle(e, "text-decoration") === t && i.setStyle(e, "text-decoration", null));
        }, (a = R).styles && (a.styles.color || a.styles.textDecoration) && (kt.walk(u, s, "childNodes"), s(u)), t = S, o = e, "sub" !== (r = R).inline && "sup" !== r.inline || (Bh(o, Ph(t, "fontSize"), Lh(t, "fontSize", "")), t.remove(t.select("sup" === r.inline ? "sub" : "sup", o), !0)), Oh(S, R, 0, e)) : S.remove(e, !0);
      });
    };

    if ("false" !== a.getContentEditable(u.getNode())) {
      R && (r ? tf(r) ? m(A, r) || ((e = a.createRng()).setStartBefore(r), e.setEndAfter(r), s(a, Of(E, e, A), 0, !0)) : s(a, r, 0, !0) : i && vf(R) && !Ff(E).length ? function (e, t, n) {
        var r,
            o = e.selection,
            i = o.getRng(),
            a = i.startOffset,
            u = i.startContainer.nodeValue,
            s = Hl(e.getBody(), o.getStart());
        s && (r = hh(s));
        var c,
            l,
            f,
            d,
            m = /[^\s\u00a0\u00ad\u200b\ufeff]/;
        u && 0 < a && a < u.length && m.test(u.charAt(a)) && m.test(u.charAt(a - 1)) ? (c = o.getBookmark(), i.collapse(!0), l = Of(e, i, e.formatter.get(t)), l = Cd(l), e.formatter.apply(t, n, l), o.moveToBookmark(c)) : (s && r.nodeValue === mh || (f = e.getDoc(), d = vh(!0).dom, r = (s = f.importNode(d, !0)).firstChild, i.insertNode(s), a = 1), e.formatter.apply(t, n, s), o.setCursorLocation(r, a));
      }(E, k, _) : (t = u.getNode(), n = A[0], E.settings.forced_root_block || !n.defaultBlock || a.getParent(t, a.isBlock) || ev(E, n.defaultBlock), u.setRng(Yg(u.getRng())), $f(u, !0, function (e) {
        qf(E, function (e, t) {
          var n = t ? e : Of(E, e, A);
          s(a, n);
        });
      }), nf(a, u, u.getRng()), E.nodeChanged()), o = E, _h(Eh[k], function (e) {
        e(o);
      }));
    } else {
      r = u.getNode();

      for (var c = 0, l = A.length; c < l; c++) {
        var f = A[c];
        if (f.ceFalseOverride && hf(f) && a.is(r, f.selector)) return void T(r, f);
      }
    }
  },
      tv = function tv(r, e, t, n) {
    var o = ie(t.get()),
        i = {},
        a = {},
        u = H(mf(r.dom, e), function (e) {
      return 1 === e.nodeType && !e.getAttribute("data-mce-bogus");
    });
    ue(n, function (e, n) {
      kt.each(u, function (t) {
        return r.formatter.matchNode(t, n, {}, e.similar) ? (-1 === o.indexOf(n) && (W(e.callbacks, function (e) {
          e(!0, {
            node: t,
            format: n,
            parents: u
          });
        }), i[n] = e.callbacks), a[n] = e.callbacks, !1) : !Im(r, t, n) && void 0;
      });
    });
    var s = nv(t.get(), a, e, u);
    t.set(_ke(_ke({}, i), s));
  },
      nv = function nv(e, n, r, o) {
    return de(e, function (e, t) {
      return !!he(n, t) || (W(e, function (e) {
        e(!1, {
          node: r,
          format: t,
          parents: o
        });
      }), !1);
    }).t;
  },
      rv = function rv(e, o, i, a, t) {
    var n, r, u, s, c, l, f, d;
    return null === o.get() && (r = e, u = Ou({}), (n = o).set({}), r.on("NodeChange", function (e) {
      tv(r, e.element, u, n.get());
    })), c = i, l = a, f = t, d = (s = o).get(), W(c.split(","), function (e) {
      d[e] || (d[e] = {
        similar: f,
        callbacks: []
      }), d[e].callbacks.push(l);
    }), s.set(d), {
      unbind: function unbind() {
        return t = i, n = a, r = (e = o).get(), W(t.split(","), function (e) {
          r[e].callbacks = H(r[e].callbacks, function (e) {
            return e !== n;
          }), 0 === r[e].callbacks.length && delete r[e];
        }), void e.set(r);
        var e, t, n, r;
      }
    };
  },
      ov = function ov(e, t) {
    var n = (t || document).createDocumentFragment();
    return W(e, function (e) {
      n.appendChild(e.dom);
    }), At.fromDom(n);
  },
      iv = function iv(e, t, n) {
    return {
      element: e,
      width: t,
      rows: n
    };
  },
      av = function av(e, t) {
    return {
      element: e,
      cells: t
    };
  },
      uv = function uv(e, t) {
    var n = parseInt(Gn(e, t), 10);
    return isNaN(n) ? 1 : n;
  },
      sv = function sv(e) {
    return X(e, function (e, t) {
      return t.cells.length > e ? t.cells.length : e;
    }, 0);
  },
      cv = function cv(e, t) {
    for (var n = e.rows, r = 0; r < n.length; r++) {
      for (var o = n[r].cells, i = 0; i < o.length; i++) {
        if (Ot(o[i], t)) return U.some({
          x: i,
          y: r
        });
      }
    }

    return U.none();
  },
      lv = function lv(e, t, n, r, o) {
    for (var i = [], a = e.rows, u = n; u <= o; u++) {
      var s = a[u].cells,
          c = t < r ? s.slice(t, r + 1) : s.slice(r, t + 1);
      i.push(av(a[u].element, c));
    }

    return i;
  },
      fv = function fv(e) {
    var o = iv(ss(e), 0, []);
    return W(Gu(e, "tr"), function (n, r) {
      W(Gu(n, "td,th"), function (e, t) {
        !function (e, t, n, r, o) {
          for (var i = uv(o, "rowspan"), a = uv(o, "colspan"), u = e.rows, s = n; s < n + i; s++) {
            u[s] || (u[s] = av(cs(r), []));

            for (var c = t; c < t + a; c++) {
              u[s].cells[c] = s === n && c === t ? o : ss(o);
            }
          }
        }(o, function (e, t, n) {
          for (; r = t, o = n, ((i = e.rows)[o] ? i[o].cells : [])[r];) {
            t++;
          }

          var r, o, i;
          return t;
        }(o, t, r), r, n, e);
      });
    }), iv(o.element, sv(o.rows), o.rows);
  },
      dv = function dv(e) {
    return n = z((t = e).rows, function (e) {
      var t = z(e.cells, function (e) {
        var t = cs(e);
        return Qn(t, "colspan"), Qn(t, "rowspan"), t;
      }),
          n = ss(e.element);
      return dn(n, t), n;
    }), r = ss(t.element), o = At.fromTag("tbody"), dn(o, n), fn(r, o), r;
    var t, n, r, o;
  },
      mv = function mv(l, e, t) {
    return cv(l, e).bind(function (c) {
      return cv(l, t).map(function (e) {
        return t = l, r = e, o = (n = c).x, i = n.y, a = r.x, u = r.y, s = i < u ? lv(t, o, i, a, u) : lv(t, o, u, a, i), iv(t.element, sv(s), s);
        var t, n, r, o, i, a, u, s;
      });
    });
  },
      pv = function pv(t, n) {
    return Y(t, function (e) {
      return "li" === Lt(e) && jf(e, n);
    }).fold(E([]), function (e) {
      return Y(t, function (e) {
        return "ul" === Lt(e) || "ol" === Lt(e);
      }).map(function (e) {
        var t = At.fromTag(Lt(e)),
            n = me(rr(e), function (e, t) {
          return Ve(t, "list-style");
        });
        return Zn(t, n), [At.fromTag("li"), t];
      }).getOr([]);
    });
  },
      gv = function gv(e, t) {
    var n,
        r = At.fromDom(t.commonAncestorContainer),
        o = Dp(r, e),
        i = H(o, function (e) {
      return to(e) || Zr(e);
    }),
        a = pv(o, t),
        u = i.concat(a.length ? a : io(n = r) ? $t(n).filter(oo).fold(E([]), function (e) {
      return [n, e];
    }) : oo(n) ? [n] : []);
    return z(u, ss);
  },
      hv = function hv() {
    return ov([]);
  },
      vv = function vv(e, t) {
    return n = At.fromDom(t.cloneContents()), r = gv(e, t), o = X(r, function (e, t) {
      return fn(t, e), t;
    }, n), 0 < r.length ? ov([o]) : o;
    var n, r, o;
  },
      yv = function yv(e, o) {
    return t = e, n = o[0], Tr(n, "table", N(Ot, t)).bind(function (e) {
      var t = o[0],
          n = o[o.length - 1],
          r = fv(e);
      return mv(r, t, n).map(function (e) {
        return ov([dv(e)]);
      });
    }).getOrThunk(hv);
    var t, n;
  },
      bv = function bv(e, t) {
    var n,
        r,
        o = Mf(t, e);
    return 0 < o.length ? yv(e, o) : (n = e, 0 < (r = t).length && r[0].collapsed ? hv() : vv(n, r[0]));
  },
      Cv = function Cv(e, t) {
    return 0 <= t && t < e.length && Zl(e.charAt(t));
  },
      wv = function wv(e, t) {
    var n = po(e.innerText);
    return t ? n.replace(/^[ \f\n\r\t\v]+/, "") : n;
  },
      xv = function xv(f) {
    return U.from(f.selection.getRng()).map(function (e) {
      var t = U.from(f.dom.getParent(e.commonAncestorContainer, f.dom.isBlock)),
          n = f.getBody(),
          r = t.map(function (e) {
        return e.nodeName;
      }).getOr("div").toLowerCase(),
          o = wt.browser.isIE() && "pre" !== r,
          i = f.dom.add(n, r, {
        "data-mce-bogus": "all",
        style: "overflow: hidden; opacity: 0;"
      }, e.cloneContents()),
          a = wv(i, o),
          u = po(i.textContent);

      if (f.dom.remove(i), Cv(u, 0) || Cv(u, u.length - 1)) {
        var s = t.getOr(n),
            c = wv(s, o),
            l = c.indexOf(a);
        return -1 === l ? a : (Cv(c, l - 1) ? " " : "") + a + (Cv(c, l + a.length) ? " " : "");
      }

      return a;
    }).getOr("");
  },
      Sv = function Sv(e, t, n) {
    if (void 0 === n && (n = {}), n.get = !0, n.format = t, n.selection = !0, (n = e.fire("BeforeGetContent", n)).isDefaultPrevented()) return e.fire("GetContent", n), n.content;
    if ("text" === n.format) return xv(e);
    n.getInner = !0;
    var r,
        o,
        i,
        a,
        u,
        s,
        c,
        l = (o = n, i = (r = e).selection.getRng(), a = r.dom.create("body"), u = r.selection.getSel(), s = Om(r, Lf(u)), (c = o.contextual ? bv(At.fromDom(r.getBody()), s).dom : i.cloneContents()) && a.appendChild(c), r.selection.serializer.serialize(a, o));
    return "tree" === n.format ? l : (n.content = e.selection.isCollapsed() ? "" : l, e.fire("GetContent", n), n.content);
  },
      Nv = function Nv(e) {
    return An(e) ? e.outerHTML : In(e) ? ci.encodeRaw(e.data, !1) : Mn(e) ? "\x3c!--" + e.data + "--\x3e" : "";
  },
      Ev = function Ev(e, t, n) {
    var r,
        o = function (e) {
      var t,
          n = document.createElement("div"),
          r = document.createDocumentFragment();

      for (e && (n.innerHTML = e); t = n.firstChild;) {
        r.appendChild(t);
      }

      return r;
    }(t);

    e.hasChildNodes() && n < e.childNodes.length ? (r = e.childNodes[n]).parentNode.insertBefore(o, r) : e.appendChild(o);
  },
      kv = function kv(e, o) {
    var i = 0;
    W(e, function (e) {
      var t, n, r;
      0 === e[0] ? i++ : 1 === e[0] ? (Ev(o, e[1], i), i++) : 2 === e[0] && (n = i, (t = o).hasChildNodes() && n < t.childNodes.length && (r = t.childNodes[n]).parentNode.removeChild(r));
    });
  },
      _v = function _v(e, t) {
    var p,
        g,
        n,
        h,
        v,
        _c2,
        y,
        l,
        r,
        o = z(oe(t.childNodes), Nv);

    return kv((g = e, n = (p = o).length + g.length + 2, h = new Array(n), v = new Array(n), _c2 = function c(e, t, n, r, o) {
      var i = l(e, t, n, r);
      if (null === i || i.start === t && i.diag === t - r || i.end === e && i.diag === e - n) for (var a = e, u = n; a < t || u < r;) {
        a < t && u < r && p[a] === g[u] ? (o.push([0, p[a]]), ++a, ++u) : r - n < t - e ? (o.push([2, p[a]]), ++a) : (o.push([1, g[u]]), ++u);
      } else {
        _c2(e, i.start, n, i.start - i.diag, o);

        for (var s = i.start; s < i.end; ++s) {
          o.push([0, p[s]]);
        }

        _c2(i.end, t, i.end - i.diag, r, o);
      }
    }, y = function y(e, t, n, r) {
      for (var o = e; o - t < r && o < n && p[o] === g[o - t];) {
        ++o;
      }

      return {
        start: e,
        end: o,
        diag: t
      };
    }, l = function l(e, t, n, r) {
      var o = t - e,
          i = r - n;
      if (0 == o || 0 == i) return null;
      var a,
          u,
          s,
          c,
          l,
          f = o - i,
          d = i + o,
          m = (d % 2 == 0 ? d : 1 + d) / 2;

      for (h[1 + m] = e, v[1 + m] = t + 1, a = 0; a <= m; ++a) {
        for (u = -a; u <= a; u += 2) {
          for (s = u + m, u === -a || u !== a && h[s - 1] < h[s + 1] ? h[s] = h[s + 1] : h[s] = h[s - 1] + 1, l = (c = h[s]) - e + n - u; c < t && l < r && p[c] === g[l];) {
            h[s] = ++c, ++l;
          }

          if (f % 2 != 0 && f - a <= u && u <= f + a && v[s - f] <= h[s]) return y(v[s - f], u + e - n, t, r);
        }

        for (u = f - a; u <= f + a; u += 2) {
          for (s = u + m - f, u === f - a || u !== f + a && v[s + 1] <= v[s - 1] ? v[s] = v[s + 1] - 1 : v[s] = v[s - 1], l = (c = v[s] - 1) - e + n - u; e <= c && n <= l && p[c] === g[l];) {
            v[s] = c--, l--;
          }

          if (f % 2 == 0 && -a <= u && u <= a && v[s] <= h[s + f]) return y(v[s], u + e - n, t, r);
        }
      }
    }, r = [], _c2(0, p.length, 0, g.length, r), r), t), t;
  },
      Av = Ou(U.none()),
      Rv = function Rv(n) {
    var e,
        t = (e = n.getBody(), H(z(oe(e.childNodes), Nv), function (e) {
      return 0 < e.length;
    })),
        r = J(t, function (e) {
      var t = ap(n.serializer, e);
      return 0 < t.length ? [t] : [];
    }),
        o = r.join("");
    return -1 !== o.indexOf("</iframe>") ? {
      type: "fragmented",
      fragments: r,
      content: "",
      bookmark: null,
      beforeBookmark: null
    } : {
      type: "complete",
      fragments: null,
      content: o,
      bookmark: null,
      beforeBookmark: null
    };
  },
      Tv = function Tv(e, t, n) {
    "fragmented" === t.type ? _v(t.fragments, e.getBody()) : e.setContent(t.content, {
      format: "raw"
    }), e.selection.moveToBookmark(n ? t.beforeBookmark : t.bookmark);
  },
      Dv = function Dv(e) {
    return "fragmented" === e.type ? e.fragments.join("") : e.content;
  },
      Ov = function Ov(e) {
    var t = At.fromTag("body", Av.get().getOrThunk(function () {
      var e = document.implementation.createHTMLDocument("undo");
      return Av.set(U.some(e)), e;
    }));
    return as(t, Dv(e)), W(Gu(t, "*[data-mce-bogus]"), gn), t.dom.innerHTML;
  },
      Bv = function Bv(e, t) {
    return !(!e || !t) && (r = t, Dv(e) === Dv(r) || (n = t, Ov(e) === Ov(n)));
    var n, r;
  },
      Pv = function Pv(e) {
    return 0 === e.get();
  },
      Lv = function Lv(e, t, n) {
    Pv(n) && (e.typing = t);
  },
      Iv = function Iv(e, t) {
    e.typing && (Lv(e, !1, t), e.add());
  },
      Mv = function Mv(e) {
    return e instanceof Km;
  },
      Fv = function Fv(e, t) {
    sh(e.serializer.getNodeFilters(), e.serializer.getAttributeFilters(), t);
  },
      Uv = function Uv() {
    return {
      type: "complete",
      fragments: [],
      content: "",
      bookmark: null,
      beforeBookmark: null
    };
  },
      zv = function zv(f) {
    return {
      undoManager: {
        beforeChange: function beforeChange(e, t) {
          return n = f, r = t, void (Pv(e) && r.set(U.some(mc(n.selection))));
          var n, r;
        },
        addUndoLevel: function addUndoLevel(e, t, n, r, o, i) {
          return function (e, t, n, r, o, i, a) {
            var u = Rv(e);
            if (i = i || {}, i = kt.extend(i, u), !1 === Pv(r) || e.removed) return null;
            var s = t.data[n.get()];
            if (e.fire("BeforeAddUndo", {
              level: i,
              lastLevel: s,
              originalEvent: a
            }).isDefaultPrevented()) return null;
            if (s && Bv(s, i)) return null;
            t.data[n.get()] && o.get().each(function (e) {
              t.data[n.get()].beforeBookmark = e;
            });
            var c = e.getParam("custom_undo_redo_levels", 0, "number");

            if (c && t.data.length > c) {
              for (var l = 0; l < t.data.length - 1; l++) {
                t.data[l] = t.data[l + 1];
              }

              t.data.length--, n.set(t.data.length);
            }

            i.bookmark = mc(e.selection), n.get() < t.data.length - 1 && (t.data.length = n.get() + 1), t.data.push(i), n.set(t.data.length - 1);
            var f = {
              level: i,
              lastLevel: s,
              originalEvent: a
            };
            return 0 < n.get() ? (e.setDirty(!0), e.fire("AddUndo", f), e.fire("change", f)) : e.fire("AddUndo", f), i;
          }(f, e, t, n, r, o, i);
        },
        undo: function undo(e, t, n) {
          return r = f, i = t, a = n, (o = e).typing && (o.add(), o.typing = !1, Lv(o, !1, i)), 0 < a.get() && (a.set(a.get() - 1), u = o.data[a.get()], Tv(r, u, !0), r.setDirty(!0), r.fire("Undo", {
            level: u
          })), u;
          var r, o, i, a, u;
        },
        redo: function redo(e, t) {
          return n = f, o = t, (r = e).get() < o.length - 1 && (r.set(r.get() + 1), i = o[r.get()], Tv(n, i, !1), n.setDirty(!0), n.fire("Redo", {
            level: i
          })), i;
          var n, r, o, i;
        },
        clear: function clear(e, t) {
          return n = f, o = t, (r = e).data = [], o.set(0), r.typing = !1, void n.fire("ClearUndos");
          var n, r, o;
        },
        reset: function reset(e) {
          return (t = e).clear(), void t.add();
          var t;
        },
        hasUndo: function hasUndo(e, t) {
          return n = f, r = e, 0 < t.get() || r.typing && r.data[0] && !Bv(Rv(n), r.data[0]);
          var n, r;
        },
        hasRedo: function hasRedo(e, t) {
          return n = e, t.get() < n.data.length - 1 && !n.typing;
          var n;
        },
        transact: function transact(e, t, n) {
          return o = n, Iv(r = e, t), r.beforeChange(), r.ignore(o), r.add();
          var r, o;
        },
        ignore: function ignore(e, t) {
          try {
            e.set(e.get() + 1), t();
          } finally {
            e.set(e.get() - 1);
          }
        },
        extra: function extra(e, t, n, r) {
          return o = f, a = t, u = n, s = r, void ((i = e).transact(u) && (c = i.data[a.get()].bookmark, l = i.data[a.get() - 1], Tv(o, l, !0), i.transact(s) && (i.data[a.get() - 1].beforeBookmark = c)));
          var o, i, a, u, s, c, l;
        }
      },
      formatter: {
        match: function match(e, t, n) {
          return jm(f, e, t, n);
        },
        matchAll: function matchAll(e, t) {
          return o = e, i = t, a = [], u = {}, n = (r = f).selection.getStart(), r.dom.getParent(n, function (e) {
            for (var t = 0; t < o.length; t++) {
              var n = o[t];
              !u[n] && zm(r, e, n, i) && (u[n] = !0, a.push(n));
            }
          }, r.dom.getRoot()), a;
          var r, o, i, a, u, n;
        },
        matchNode: function matchNode(e, t, n, r) {
          return zm(f, e, t, n, r);
        },
        canApply: function canApply(e) {
          return function (e, t) {
            var n,
                r,
                o,
                i,
                a,
                u = e.formatter.get(t),
                s = e.dom;
            if (u) for (n = e.selection.getStart(), r = mf(s, n), i = u.length - 1; 0 <= i; i--) {
              if (!(a = u[i].selector) || u[i].defaultBlock) return !0;

              for (o = r.length - 1; 0 <= o; o--) {
                if (s.is(r[o], a)) return !0;
              }
            }
            return !1;
          }(f, e);
        },
        closest: function closest(e) {
          return Hm(f, e);
        },
        apply: function apply(e, t, n) {
          return ev(f, e, t, n);
        },
        remove: function remove(e, t, n, r) {
          return Yh(f, e, t, n, r);
        },
        toggle: function toggle(e, t, n) {
          return o = e, i = t, a = n, u = (r = f).formatter.get(o), void (!jm(r, o, i, a) || "toggle" in u[0] && !u[0].toggle ? ev : Yh)(r, o, i, a);
          var r, o, i, a, u;
        },
        formatChanged: function formatChanged(e, t, n, r) {
          return rv(f, e, t, n, r);
        }
      },
      editor: {
        getContent: function getContent(e, t) {
          return n = f, r = e, o = t, U.from(n.getBody()).fold(E("tree" === r.format ? new Km("body", 11) : ""), function (e) {
            return sp(n, r, o, e);
          });
          var n, r, o;
        },
        setContent: function setContent(e, t) {
          return fh(f, e, t);
        },
        insertContent: function insertContent(e, t) {
          return ah(f, e, t);
        },
        addVisual: function addVisual(e) {
          return t = e, a = (i = f).dom, n = D(t) ? t : i.getBody(), R(i.hasVisual) && (i.hasVisual = i.getParam("visual", !0, "boolean")), W(a.select("table,a", n), function (e) {
            switch (e.nodeName) {
              case "TABLE":
                var t = i.getParam("visual_table_class", "mce-item-table", "string"),
                    n = a.getAttrib(e, "border");
                n && "0" !== n || !i.hasVisual ? a.removeClass(e, t) : a.addClass(e, t);
                break;

              case "A":
                var r, o;
                a.getAttrib(e, "href") || (r = a.getAttrib(e, "name") || e.id, o = i.getParam("visual_anchor_class", "mce-item-anchor", "string"), r && i.hasVisual ? a.addClass(e, o) : a.removeClass(e, o));
            }
          }), void i.fire("VisualAid", {
            element: t,
            hasVisual: i.hasVisual
          });
          var i, t, a, n;
        }
      },
      selection: {
        getContent: function getContent(e, t) {
          return Sv(f, e, t);
        }
      },
      raw: {
        getModel: function getModel() {
          return U.none();
        }
      }
    };
  },
      jv = function jv(i, a) {
    var o = function o(e) {
      return _(e) ? e : {};
    },
        e = m("Unimplemented feature for rtc");

    return {
      undoManager: {
        beforeChange: V,
        addUndoLevel: e,
        undo: function undo() {
          return a.undo(), Uv();
        },
        redo: function redo() {
          return a.redo(), Uv();
        },
        clear: e,
        reset: e,
        hasUndo: function hasUndo() {
          return a.hasUndo();
        },
        hasRedo: function hasRedo() {
          return a.hasRedo();
        },
        transact: function transact(e, t, n) {
          return a.transact(n), Uv();
        },
        ignore: e,
        extra: e
      },
      formatter: {
        match: function match(e, t, n) {
          return a.matchFormat(e, o(t));
        },
        matchAll: e,
        matchNode: e,
        canApply: function canApply(e) {
          return a.canApplyFormat(e);
        },
        closest: function closest(e) {
          return a.closestFormat(e);
        },
        apply: function apply(e, t, n) {
          return a.applyFormat(e, o(t));
        },
        remove: function remove(e, t, n, r) {
          return a.removeFormat(e, o(t));
        },
        toggle: function toggle(e, t, n) {
          return a.toggleFormat(e, o(t));
        },
        formatChanged: function formatChanged(e, t, n, r) {
          return a.formatChanged(t, n, r);
        }
      },
      editor: {
        getContent: function getContent(e, t) {
          if ("html" !== t && "tree" !== t) return zv(i).editor.getContent(e, t);
          var n = a.getContent(),
              r = Jm({
            inner: !0
          });
          return Fv(i, n), "tree" === t ? n : r.serialize(n);
        },
        setContent: function setContent(e, t) {
          var n = Mv(e) ? e : i.parser.parse(e, {
            isRootContent: !0,
            insert: !0
          });
          return a.setContent(n), e;
        },
        insertContent: function insertContent(e, t) {
          var n,
              r = (n = i, U.from(n.selection.getStart(!0)).map(function (e) {
            return e.nodeName.toLowerCase();
          }).fold(function () {
            return {};
          }, function (e) {
            return {
              context: e
            };
          })),
              o = Mv(e) ? e : i.parser.parse(e, _ke(_ke({}, r), {
            insert: !0
          }));
          a.insertContent(o);
        },
        addVisual: function addVisual(e) {}
      },
      selection: {
        getContent: function getContent(e, t) {
          if ("html" !== e && "tree" !== e) return zv(i).selection.getContent(e, t);
          var n = a.getSelectedContent(),
              r = Jm({});
          return Fv(i, n), "tree" === e ? n : r.serialize(n);
        }
      },
      raw: {
        getModel: function getModel() {
          return U.some(a.getRawModel());
        }
      }
    };
  },
      Hv = function Hv(e) {
    return he(e.plugins, "rtc");
  },
      Vv = function Vv(e) {
    return e.rtcInstance ? e.rtcInstance : zv(e);
  },
      qv = function qv(e) {
    var t = e.rtcInstance;
    if (t) return t;
    throw new Error("Failed to get RTC instance not yet initialized.");
  },
      $v = function $v(e, t) {
    void 0 === t && (t = {});
    var n,
        r,
        o = t.format ? t.format : "html";
    return n = o, r = t, qv(e).selection.getContent(n, r);
  },
      Wv = function Wv(e) {
    return 0 === e.dom.length ? (pn(e), U.none()) : U.some(e);
  },
      Kv = function Kv(e, t, s, c) {
    e.bind(function (u) {
      return (c ? sg : ug)(u.dom, c ? u.dom.length : 0), t.filter(Ut).map(function (e) {
        return t = e, n = s, r = c, o = u.dom, i = t.dom, a = r ? o.length : i.length, void (r ? (cg(o, i, !1, !r), n.setStart(i, a)) : (cg(i, o, !1, !r), n.setEnd(i, a)));
        var t, n, r, o, i, a;
      });
    }).orThunk(function () {
      var e;
      return (e = c, t.filter(function (e) {
        return od.isBookmarkNode(e.dom);
      }).bind(e ? Kt : Wt).or(t).filter(Ut)).map(function (e) {
        return r = c, void $t(n = e).each(function (e) {
          var t = n.dom;
          r && Qp(e, $s(t, 0)) ? ug(t, 0) : !r && Zp(e, $s(t, t.length)) && sg(t, t.length);
        });
        var n, r;
      });
    });
  },
      Xv = function Xv(e, t, n) {
    void 0 === n && (n = {});
    var r,
        o,
        i = (r = t, _ke(_ke({
      format: "html"
    }, n), {
      set: !0,
      selection: !0,
      content: r
    }));
    i.no_events || !(i = e.fire("BeforeSetContent", i)).isDefaultPrevented() ? (n.content = function (e, t) {
      if ("raw" === t.format) return t.content;
      var n = e.selection.getRng(),
          r = e.dom.getParent(n.commonAncestorContainer, e.dom.isBlock),
          o = r ? {
        context: r.nodeName.toLowerCase()
      } : {},
          i = e.parser.parse(t.content, _ke(_ke({
        isRootContent: !0,
        forced_root_block: !1
      }, o), t));
      return Jm({
        validate: e.validate
      }, e.schema).serialize(i);
    }(e, i), function (e, t) {
      var n = U.from(t.firstChild).map(At.fromDom),
          r = U.from(t.lastChild).map(At.fromDom);
      e.deleteContents(), e.insertNode(t);
      var o = n.bind(Wt).filter(Ut).bind(Wv),
          i = r.bind(Kt).filter(Ut).bind(Wv);
      Kv(o, n, e, !0), Kv(i, r, e, !1), e.collapse(!1);
    }(o = e.selection.getRng(), o.createContextualFragment(n.content)), e.selection.setRng(o), Xd(e, o), i.no_events || e.fire("SetContent", i)) : e.fire("SetContent", i);
  },
      Yv = function Yv(e, t, n) {
    var r;
    e && e.hasOwnProperty(t) && (0 === (r = H(e[t], function (e) {
      return e !== n;
    })).length ? delete e[t] : e[t] = r);
  };

  var Gv = function Gv(e) {
    return !!e.select;
  },
      Jv = function Jv(e) {
    return !(!e || !e.ownerDocument) && Pt(At.fromDom(e.ownerDocument), At.fromDom(e));
  },
      Qv = function Qv(u, s, e, c) {
    var l,
        f,
        i,
        n,
        a,
        d,
        r = function r(e, t) {
      return a || (a = {}, d = {}, n.on("NodeChange", function (e) {
        var n = e.element,
            r = i.getParents(n, null, i.getRoot()),
            o = {};
        kt.each(a, function (e, n) {
          kt.each(r, function (t) {
            if (i.is(t, n)) return d[n] || (kt.each(e, function (e) {
              e(!0, {
                node: t,
                selector: n,
                parents: r
              });
            }), d[n] = e), o[n] = e, !1;
          });
        }), kt.each(d, function (e, t) {
          o[t] || (delete d[t], kt.each(e, function (e) {
            e(!1, {
              node: n,
              selector: t,
              parents: r
            });
          }));
        });
      })), a[e] || (a[e] = []), a[e].push(t), {
        unbind: function unbind() {
          Yv(a, e, t), Yv(d, e, t);
        }
      };
    },
        t = function t(e, _t2) {
      return Xv(c, e, _t2);
    },
        o = function o(e) {
      var t = p();
      t.collapse(!!e), g(t);
    },
        m = function m() {
      return s.getSelection ? s.getSelection() : s.document.selection;
    },
        p = function p() {
      var e,
          t,
          n,
          r = function r(e, t, n) {
        try {
          return t.compareBoundaryPoints(e, n);
        } catch (r) {
          return -1;
        }
      };

      if (!s) return null;
      var o = s.document;
      if (null == o) return null;

      if (c.bookmark !== undefined && !1 === Em(c)) {
        var i = dm(c);
        if (i.isSome()) return i.map(function (e) {
          return Om(c, [e])[0];
        }).getOr(o.createRange());
      }

      try {
        (e = m()) && !_n(e.anchorNode) && (t = 0 < e.rangeCount ? e.getRangeAt(0) : e.createRange ? e.createRange() : o.createRange(), t = Om(c, [t])[0]);
      } catch (a) {}

      return (t = t || (o.createRange ? o.createRange() : o.body.createTextRange())).setStart && 9 === t.startContainer.nodeType && t.collapsed && (n = u.getRoot(), t.setStart(n, 0), t.setEnd(n, 0)), l && f && (0 === r(t.START_TO_START, t, l) && 0 === r(t.END_TO_END, t, l) ? t = f : f = l = null), t;
    },
        g = function g(e, t) {
      var n;

      if ((r = e) && (Gv(r) || Jv(r.startContainer) && Jv(r.endContainer))) {
        var r,
            o = Gv(e) ? e : null;

        if (o) {
          f = null;

          try {
            o.select();
          } catch (a) {}
        } else {
          var i = m();

          if (e = c.fire("SetSelectionRange", {
            range: e,
            forward: t
          }).range, i) {
            f = e;

            try {
              i.removeAllRanges(), i.addRange(e);
            } catch (a) {}

            !1 === t && i.extend && (i.collapse(e.endContainer, e.endOffset), i.extend(e.startContainer, e.startOffset)), l = 0 < i.rangeCount ? i.getRangeAt(0) : null;
          }

          e.collapsed || e.startContainer !== e.endContainer || !i.setBaseAndExtent || wt.ie || e.endOffset - e.startOffset < 2 && e.startContainer.hasChildNodes() && (n = e.startContainer.childNodes[e.startOffset]) && "IMG" === n.tagName && (i.setBaseAndExtent(e.startContainer, e.startOffset, e.endContainer, e.endOffset), i.anchorNode === e.startContainer && i.focusNode === e.endContainer || i.setBaseAndExtent(n, 0, n, 1)), c.fire("AfterSetSelectionRange", {
            range: e,
            forward: t
          });
        }
      }
    },
        h = function h() {
      var e = m(),
          t = null == e ? void 0 : e.anchorNode,
          n = null == e ? void 0 : e.focusNode;
      if (!e || !t || !n || _n(t) || _n(n)) return !0;
      var r = u.createRng();
      r.setStart(t, e.anchorOffset), r.collapse(!0);
      var o = u.createRng();
      return o.setStart(n, e.focusOffset), o.collapse(!0), r.compareBoundaryPoints(r.START_TO_START, o) <= 0;
    },
        v = {
      bookmarkManager: null,
      controlSelection: null,
      dom: i = u,
      win: s,
      serializer: e,
      editor: n = c,
      collapse: o,
      setCursorLocation: function setCursorLocation(e, t) {
        var n = u.createRng();
        e ? (n.setStart(e, t), n.setEnd(e, t), g(n), o(!1)) : (Hf(u, n, c.getBody(), !0), g(n));
      },
      getContent: function getContent(e) {
        return $v(c, e);
      },
      setContent: t,
      getBookmark: function getBookmark(e, t) {
        return y.getBookmark(e, t);
      },
      moveToBookmark: function moveToBookmark(e) {
        return y.moveToBookmark(e);
      },
      select: function select(e, t) {
        var r, n, o;
        return r = u, n = e, o = t, U.from(n).map(function (e) {
          var t = r.nodeIndex(e),
              n = r.createRng();
          return n.setStart(e.parentNode, t), n.setEnd(e.parentNode, t + 1), o && (Hf(r, n, e, !0), Hf(r, n, e, !1)), n;
        }).each(g), e;
      },
      isCollapsed: function isCollapsed() {
        var e = p(),
            t = m();
        return !(!e || e.item) && (e.compareEndPoints ? 0 === e.compareEndPoints("StartToEnd", e) : !t || e.collapsed);
      },
      isForward: h,
      setNode: function setNode(e) {
        return t(u.getOuterHTML(e)), e;
      },
      getNode: function getNode() {
        return function (e, t) {
          var n, r;
          if (!t) return e;
          n = t.startContainer, r = t.endContainer;
          var o = t.startOffset,
              i = t.endOffset,
              a = t.commonAncestorContainer;
          return !t.collapsed && (n === r && i - o < 2 && n.hasChildNodes() && (a = n.childNodes[o]), 3 === n.nodeType && 3 === r.nodeType && (n = n.length === o ? Dm(n.nextSibling, !0) : n.parentNode, r = 0 === i ? Dm(r.previousSibling, !1) : r.parentNode, n && n === r)) ? n : a && 3 === a.nodeType ? a.parentNode : a;
        }(c.getBody(), p());
      },
      getSel: m,
      setRng: g,
      getRng: p,
      getStart: function getStart(e) {
        return Rm(c.getBody(), p(), e);
      },
      getEnd: function getEnd(e) {
        return Tm(c.getBody(), p(), e);
      },
      getSelectedBlocks: function getSelectedBlocks(e, t) {
        return function (e, t, n, r) {
          var o,
              i = [],
              a = e.getRoot();
          if (n = e.getParent(n || Rm(a, t, t.collapsed), e.isBlock), r = e.getParent(r || Tm(a, t, t.collapsed), e.isBlock), n && n !== a && i.push(n), n && r && n !== r) for (var u = new Xr(o = n, a); (o = u.next()) && o !== r;) {
            e.isBlock(o) && i.push(o);
          }
          return r && n !== r && r !== a && i.push(r), i;
        }(u, p(), e, t);
      },
      normalize: function normalize() {
        var e = p(),
            t = m();
        if (1 < Lf(t).length || !Vf(c)) return e;
        var n = yd(u, e);
        return n.each(function (e) {
          g(e, h());
        }), n.getOr(e);
      },
      selectorChanged: function selectorChanged(e, t) {
        return r(e, t), v;
      },
      selectorChangedWithUnbind: r,
      getScrollContainer: function getScrollContainer() {
        for (var e, t = u.getRoot(); t && "BODY" !== t.nodeName;) {
          if (t.scrollHeight > t.clientHeight) {
            e = t;
            break;
          }

          t = t.parentNode;
        }

        return e;
      },
      scrollIntoView: function scrollIntoView(e, t) {
        return r = e, o = t, void ((n = c).inline ? $d : Kd)(n, r, o);
        var n, r, o;
      },
      placeCaretAt: function placeCaretAt(e, t) {
        return g(fd(e, t, c.getDoc()));
      },
      getBoundingClientRect: function getBoundingClientRect() {
        var e = p();
        return e.collapsed ? $s.fromRangeStart(e).getClientRects()[0] : e.getBoundingClientRect();
      },
      destroy: function destroy() {
        s = l = f = null, b.destroy();
      }
    },
        y = od(v),
        b = cd(v, c);

    return v.bookmarkManager = y, v.controlSelection = b, v;
  },
      Zv = function Zv(e, a, u) {
    e.addNodeFilter("font", function (e) {
      W(e, function (e) {
        var t,
            n = a.parse(e.attr("style")),
            r = e.attr("color"),
            o = e.attr("face"),
            i = e.attr("size");
        r && (n.color = r), o && (n["font-family"] = o), i && (n["font-size"] = u[parseInt(e.attr("size"), 10) - 1]), e.name = "span", e.attr("style", a.serialize(n)), t = e, W(["color", "face", "size"], function (e) {
          t.attr(e, null);
        });
      });
    });
  },
      ey = function ey(e, t) {
    var n,
        r = xi();
    t.convert_fonts_to_spans && Zv(e, r, kt.explode(t.font_size_legacy_values)), n = r, e.addNodeFilter("strike", function (e) {
      W(e, function (e) {
        var t = n.parse(e.attr("style"));
        t["text-decoration"] = "line-through", e.name = "span", e.attr("style", n.serialize(t));
      });
    });
  },
      ty = function ty(e) {
    var t,
        n = decodeURIComponent(e).split(","),
        r = /data:([^;]+)/.exec(n[0]);
    return r && (t = r[1]), {
      type: t,
      data: n[1]
    };
  },
      ny = function ny(e, t) {
    var n;

    try {
      n = atob(t);
    } catch (Ok) {
      return U.none();
    }

    for (var r = new Uint8Array(n.length), o = 0; o < r.length; o++) {
      r[o] = n.charCodeAt(o);
    }

    return U.some(new Blob([r], {
      type: e
    }));
  },
      ry = function ry(e) {
    return 0 === e.indexOf("blob:") ? (i = e, new Br(function (e, t) {
      var n = function n() {
        t("Cannot convert " + i + " to Blob. Resource might not exist or is inaccessible.");
      };

      try {
        var r = new XMLHttpRequest();
        r.open("GET", i, !0), r.responseType = "blob", r.onload = function () {
          200 === this.status ? e(this.response) : n();
        }, r.onerror = n, r.send();
      } catch (o) {
        n();
      }
    })) : 0 === e.indexOf("data:") ? (o = e, new Br(function (e) {
      var t = ty(o),
          n = t.type,
          r = t.data;
      ny(n, r).fold(function () {
        return e(new Blob([]));
      }, e);
    })) : null;
    var i, o;
  },
      oy = 0,
      iy = function iy(e) {
    return (e || "blobid") + oy++;
  },
      ay = function ay(r, o, i, t) {
    var e, n, a, u, s;
    0 !== o.src.indexOf("blob:") ? (n = (e = ty(o.src)).data, a = e.type, u = n, (s = r.getByData(u, a)) ? i({
      image: o,
      blobInfo: s
    }) : ry(o.src).then(function (e) {
      s = r.create(iy(), e, u), r.add(s), i({
        image: o,
        blobInfo: s
      });
    }, function (e) {
      t(e);
    })) : (s = r.getByUri(o.src)) ? i({
      image: o,
      blobInfo: s
    }) : ry(o.src).then(function (t) {
      var n;
      n = t, new Br(function (e) {
        var t = new FileReader();
        t.onloadend = function () {
          e(t.result);
        }, t.readAsDataURL(n);
      }).then(function (e) {
        u = ty(e).data, s = r.create(iy(), t, u), r.add(s), i({
          image: o,
          blobInfo: s
        });
      });
    }, function (e) {
      t(e);
    });
  };

  function uy(i, a) {
    var u = {};
    return {
      findAll: function findAll(e, n) {
        n = n || k;
        var t,
            r = H((t = e) ? oe(t.getElementsByTagName("img")) : [], function (e) {
          var t = e.src;
          return !!wt.fileApi && !e.hasAttribute("data-mce-bogus") && !e.hasAttribute("data-mce-placeholder") && !(!t || t === wt.transparentSrc) && (0 === t.indexOf("blob:") ? !i.isUploaded(t) && n(e) : 0 === t.indexOf("data:") && n(e));
        }),
            o = z(r, function (n) {
          if (u[n.src] !== undefined) return new Br(function (t) {
            u[n.src].then(function (e) {
              return "string" == typeof e ? e : void t({
                image: n,
                blobInfo: e.blobInfo
              });
            });
          });
          var e = new Br(function (e, t) {
            ay(a, n, e, t);
          }).then(function (e) {
            return delete u[e.image.src], e;
          })["catch"](function (e) {
            return delete u[n.src], e;
          });
          return u[n.src] = e;
        });
        return Br.all(o);
      }
    };
  }

  var sy,
      cy,
      ly = function ly(e, t, n, r) {
    (e.padd_empty_with_br || t.insert) && n[r.name] ? r.empty().append(new Km("br", 1)).shortEnded = !0 : r.empty().append(new Km("#text", 3)).value = lo;
  },
      fy = function fy(e, t) {
    return e && e.firstChild && e.firstChild === e.lastChild && e.firstChild.name === t;
  },
      dy = function dy(r, e, t, n) {
    return n.isEmpty(e, t, function (e) {
      return t = e, (n = r.getElementRule(t.name)) && n.paddEmpty;
      var t, n;
    });
  },
      my = function my(e, o) {
    var i = o.blob_cache,
        t = function t(_t3) {
      var e,
          n,
          r = _t3.attr("src");

      (e = _t3).attr("src") === wt.transparentSrc || e.attr("data-mce-placeholder") || _t3.attr("data-mce-bogus") || ((n = /data:([^;]+);base64,([a-z0-9\+\/=]+)/i.exec(r)) ? U.some({
        type: n[1],
        data: decodeURIComponent(n[2])
      }) : U.none()).filter(function () {
        return function (e, t) {
          if (t.images_dataimg_filter) {
            var n = new Image();
            return n.src = e.attr("src"), ue(e.attributes.map, function (e, t) {
              n.setAttribute(t, e);
            }), t.images_dataimg_filter(n);
          }

          return !0;
        }(_t3, o);
      }).bind(function (e) {
        var t = e.type,
            n = e.data;
        return U.from(i.getByData(n, t)).orThunk(function () {
          return ny(t, n).map(function (e) {
            var t = i.create(iy(), e, n);
            return i.add(t), t;
          });
        });
      }).each(function (e) {
        _t3.attr("src", e.blobUri());
      });
    };

    i && e.addAttributeFilter("src", function (e) {
      return W(e, t);
    });
  },
      py = function py(e, g) {
    var h = e.schema;
    g.remove_trailing_brs && e.addNodeFilter("br", function (e, t, n) {
      var r,
          o,
          i,
          a,
          u,
          s,
          c,
          l,
          f = e.length,
          d = kt.extend({}, h.getBlockElements()),
          m = h.getNonEmptyElements(),
          p = h.getWhiteSpaceElements();

      for (d.body = 1, r = 0; r < f; r++) {
        if (i = (o = e[r]).parent, d[o.parent.name] && o === i.lastChild) {
          for (u = o.prev; u;) {
            if ("span" !== (s = u.name) || "bookmark" !== u.attr("data-mce-type")) {
              "br" === s && (o = null);
              break;
            }

            u = u.prev;
          }

          o && (o.remove(), dy(h, m, p, i) && (c = h.getElementRule(i.name)) && (c.removeEmpty ? i.remove() : c.paddEmpty && ly(g, n, d, i)));
        } else {
          for (a = o; i && i.firstChild === a && i.lastChild === a && !d[(a = i).name];) {
            i = i.parent;
          }

          a === i && !0 !== g.padd_empty_with_br && ((l = new Km("#text", 3)).value = lo, o.replace(l));
        }
      }
    }), e.addAttributeFilter("href", function (e) {
      var t,
          n,
          r = e.length;
      if (!g.allow_unsafe_link_target) for (; r--;) {
        var o = e[r];
        "a" === o.name && "_blank" === o.attr("target") && o.attr("rel", (t = o.attr("rel"), n = t ? kt.trim(t) : "", /\b(noopener)\b/g.test(n) ? n : n.split(" ").filter(function (e) {
          return 0 < e.length;
        }).concat(["noopener"]).sort().join(" ")));
      }
    }), g.allow_html_in_named_anchor || e.addAttributeFilter("id,name", function (e) {
      for (var t, n, r, o, i = e.length; i--;) {
        if ("a" === (o = e[i]).name && o.firstChild && !o.attr("href")) for (r = o.parent, t = o.lastChild; n = t.prev, r.insert(t, o), t = n;) {
          ;
        }
      }
    }), g.fix_list_elements && e.addNodeFilter("ul,ol", function (e) {
      for (var t, n, r, o = e.length; o--;) {
        "ul" !== (r = (n = e[o]).parent).name && "ol" !== r.name || (n.prev && "li" === n.prev.name ? n.prev.append(n) : ((t = new Km("li", 1)).attr("style", "list-style-type: none"), n.wrap(t)));
      }
    }), g.validate && h.getValidClasses() && e.addAttributeFilter("class", function (e) {
      for (var t, n, r, o, i, a, u, s = e.length, c = h.getValidClasses(); s--;) {
        for (n = (t = e[s]).attr("class").split(" "), i = "", r = 0; r < n.length; r++) {
          o = n[r], u = !1, (a = c["*"]) && a[o] && (u = !0), a = c[t.name], !u && a && a[o] && (u = !0), u && (i && (i += " "), i += o);
        }

        i.length || (i = null), t.attr("class", i);
      }
    }), my(e, g);
  },
      gy = kt.makeMap,
      hy = kt.each,
      vy = kt.explode,
      yy = kt.extend,
      by = function by(A, R) {
    void 0 === R && (R = Ci());
    var T = {},
        D = [],
        O = {},
        B = {};
    (A = A || {}).validate = !("validate" in A) || A.validate, A.root_name = A.root_name || "body";

    var e,
        t,
        P = function P(e) {
      var t,
          n,
          r = e.name;
      r in T && ((n = O[r]) ? n.push(e) : O[r] = [e]), t = D.length;

      for (; t--;) {
        (r = D[t].name) in e.attributes.map && ((n = B[r]) ? n.push(e) : B[r] = [e]);
      }

      return e;
    },
        n = {
      schema: R,
      addAttributeFilter: function addAttributeFilter(e, n) {
        hy(vy(e), function (e) {
          for (var t = 0; t < D.length; t++) {
            if (D[t].name === e) return void D[t].callbacks.push(n);
          }

          D.push({
            name: e,
            callbacks: [n]
          });
        });
      },
      getAttributeFilters: function getAttributeFilters() {
        return [].concat(D);
      },
      addNodeFilter: function addNodeFilter(e, n) {
        hy(vy(e), function (e) {
          var t = T[e];
          t || (T[e] = t = []), t.push(n);
        });
      },
      getNodeFilters: function getNodeFilters() {
        var e = [];

        for (var t in T) {
          T.hasOwnProperty(t) && e.push({
            name: t,
            callbacks: T[t]
          });
        }

        return e;
      },
      filterNode: P,
      parse: function parse(e, u) {
        var t,
            n,
            r,
            o,
            i,
            s,
            a,
            c,
            l = [];
        u = u || {}, O = {}, B = {};

        var f,
            d = yy(gy("script,style,head,html,body,title,meta,param"), R.getBlockElements()),
            m = R.getNonEmptyElements(),
            p = R.children,
            g = A.validate,
            h = "forced_root_block" in u ? u.forced_root_block : A.forced_root_block,
            v = !1 === (f = h) ? "" : !0 === f ? "p" : f,
            y = R.getWhiteSpaceElements(),
            b = /^[ \t\r\n]+/,
            C = /[ \t\r\n]+$/,
            w = /[ \t\r\n]+/g,
            x = /^[ \t\r\n]+$/,
            S = y.hasOwnProperty(u.context) || y.hasOwnProperty(A.root_name),
            N = function N(e, t) {
          var n,
              r = new Km(e, t);
          return e in T && ((n = O[e]) ? n.push(r) : O[e] = [r]), r;
        },
            E = function E(e) {
          for (var t, n, r, o = R.getBlockElements(), i = e.prev; i && 3 === i.type;) {
            if (0 < (n = i.value.replace(C, "")).length) return void (i.value = n);

            if (t = i.next) {
              if (3 === t.type && t.value.length) {
                i = i.prev;
                continue;
              }

              if (!o[t.name] && "script" !== t.name && "style" !== t.name) {
                i = i.prev;
                continue;
              }
            }

            r = i.prev, i.remove(), i = r;
          }
        },
            k = ip({
          validate: g,
          allow_html_data_urls: A.allow_html_data_urls,
          allow_svg_data_urls: A.allow_svg_data_urls,
          allow_script_urls: A.allow_script_urls,
          allow_conditional_comments: A.allow_conditional_comments,
          preserve_cdata: A.preserve_cdata,
          self_closing_elements: function (e) {
            var t,
                n = {};

            for (t in e) {
              "li" !== t && "p" !== t && (n[t] = e[t]);
            }

            return n;
          }(R.getSelfClosingElements()),
          cdata: function cdata(e) {
            c.append(N("#cdata", 4)).value = e;
          },
          text: function text(e, t) {
            var n, r, o;
            S || (e = e.replace(w, " "), r = c.lastChild, o = d, r && (o[r.name] || "br" === r.name) && (e = e.replace(b, ""))), 0 !== e.length && ((n = N("#text", 3)).raw = !!t, c.append(n).value = e);
          },
          comment: function comment(e) {
            c.append(N("#comment", 8)).value = e;
          },
          pi: function pi(e, t) {
            c.append(N(e, 7)).value = t, E(c);
          },
          doctype: function doctype(e) {
            c.append(N("#doctype", 10)).value = e, E(c);
          },
          start: function start(e, t, n) {
            var r,
                o,
                i,
                a,
                u = g ? R.getElementRule(e) : {};

            if (u) {
              for ((r = N(u.outputName || e, 1)).attributes = t, r.shortEnded = n, c.append(r), (a = p[c.name]) && p[r.name] && !a[r.name] && l.push(r), o = D.length; o--;) {
                (i = D[o].name) in t.map && ((s = B[i]) ? s.push(r) : B[i] = [r]);
              }

              d[e] && E(r), n || (c = r), !S && y[e] && (S = !0);
            }
          },
          end: function end(e) {
            var t,
                n,
                r,
                o,
                i,
                a = g ? R.getElementRule(e) : {};

            if (a) {
              if (d[e] && !S) {
                if ((t = c.firstChild) && 3 === t.type) if (0 < (n = t.value.replace(b, "")).length) t.value = n, t = t.next;else for (r = t.next, t.remove(), t = r; t && 3 === t.type;) {
                  n = t.value, r = t.next, 0 !== n.length && !x.test(n) || (t.remove(), t = r), t = r;
                }
                if ((t = c.lastChild) && 3 === t.type) if (0 < (n = t.value.replace(C, "")).length) t.value = n, t = t.prev;else for (r = t.prev, t.remove(), t = r; t && 3 === t.type;) {
                  n = t.value, r = t.prev, 0 !== n.length && !x.test(n) || (t.remove(), t = r), t = r;
                }
              }

              if (S && y[e] && (S = !1), a.removeEmpty && dy(R, m, y, c)) return o = c.parent, d[c.name] ? c.empty().remove() : c.unwrap(), void (c = o);
              a.paddEmpty && (fy(i = c, "#text") && i.firstChild.value === lo || dy(R, m, y, c)) && ly(A, u, d, c), c = c.parent;
            }
          }
        }, R),
            _ = c = new Km(u.context || A.root_name, 11);

        if (k.parse(e, u.format), g && l.length && (u.context ? u.invalid = !0 : function (e) {
          for (var t, n, r, o, i, a, u, s, c, l, f = gy("tr,td,th,tbody,thead,tfoot,table"), d = R.getNonEmptyElements(), m = R.getWhiteSpaceElements(), p = R.getTextBlockElements(), g = R.getSpecialElements(), h = 0; h < e.length; h++) {
            if ((t = e[h]).parent && !t.fixed) if (p[t.name] && "li" === t.parent.name) {
              for (c = t.next; c && p[c.name];) {
                c.name = "li", c.fixed = !0, t.parent.insert(c, t.parent), c = c.next;
              }

              t.unwrap(t);
            } else {
              for (r = [t], n = t.parent; n && !R.isValidChild(n.name, t.name) && !f[n.name]; n = n.parent) {
                r.push(n);
              }

              if (n && 1 < r.length) {
                for (r.reverse(), o = i = P(r[0].clone()), s = 0; s < r.length - 1; s++) {
                  for (R.isValidChild(i.name, r[s].name) ? (a = P(r[s].clone()), i.append(a)) : a = i, u = r[s].firstChild; u && u !== r[s + 1];) {
                    l = u.next, a.append(u), u = l;
                  }

                  i = a;
                }

                dy(R, d, m, o) ? n.insert(t, r[0], !0) : (n.insert(o, r[0], !0), n.insert(t, o)), n = r[0], (dy(R, d, m, n) || fy(n, "br")) && n.empty().remove();
              } else if (t.parent) {
                if ("li" === t.name) {
                  if ((c = t.prev) && ("ul" === c.name || "ol" === c.name)) {
                    c.append(t);
                    continue;
                  }

                  if ((c = t.next) && ("ul" === c.name || "ol" === c.name)) {
                    c.insert(t, c.firstChild, !0);
                    continue;
                  }

                  t.wrap(P(new Km("ul", 1)));
                  continue;
                }

                R.isValidChild(t.parent.name, "div") && R.isValidChild("div", t.name) ? t.wrap(P(new Km("div", 1))) : g[t.name] ? t.empty().remove() : t.unwrap();
              }
            }
          }
        }(l)), v && ("body" === _.name || u.isRootContent) && function () {
          var e,
              t,
              n = _.firstChild,
              r = function r(e) {
            e && ((n = e.firstChild) && 3 === n.type && (n.value = n.value.replace(b, "")), (n = e.lastChild) && 3 === n.type && (n.value = n.value.replace(C, "")));
          };

          if (R.isValidChild(_.name, v.toLowerCase())) {
            for (; n;) {
              e = n.next, 3 === n.type || 1 === n.type && "p" !== n.name && !d[n.name] && !n.attr("data-mce-type") ? (t || ((t = N(v, 1)).attr(A.forced_root_block_attrs), _.insert(t, n)), t.append(n)) : (r(t), t = null), n = e;
            }

            r(t);
          }
        }(), !u.invalid) {
          for (a in O) {
            if (O.hasOwnProperty(a)) {
              for (s = T[a], o = (t = O[a]).length; o--;) {
                t[o].parent || t.splice(o, 1);
              }

              for (n = 0, r = s.length; n < r; n++) {
                s[n](t, a, u);
              }
            }
          }

          for (n = 0, r = D.length; n < r; n++) {
            if ((s = D[n]).name in B) {
              for (o = (t = B[s.name]).length; o--;) {
                t[o].parent || t.splice(o, 1);
              }

              for (o = 0, i = s.callbacks.length; o < i; o++) {
                s.callbacks[o](t, s.name, u);
              }
            }
          }
        }

        return _;
      }
    };

    return py(n, A), e = n, (t = A).inline_styles && ey(e, t), n;
  },
      Cy = function Cy(e, t, n) {
    return o = n, (r = e) && r.hasEventListeners("PreProcess") && !o.no_events ? function (e, t, n) {
      var r,
          o,
          i = e.dom;
      t = t.cloneNode(!0);
      var a,
          u,
          s = document.implementation;
      return s.createHTMLDocument && (r = s.createHTMLDocument(""), kt.each("BODY" === t.nodeName ? t.childNodes : [t], function (e) {
        r.body.appendChild(r.importNode(e, !0));
      }), t = "BODY" !== t.nodeName ? r.body.firstChild : r.body, o = i.doc, i.doc = r), a = e, u = _ke(_ke({}, n), {
        node: t
      }), a.fire("PreProcess", u), o && (i.doc = o), t;
    }(e, t, n) : t;
    var r, o;
  },
      wy = function wy(e, t, n) {
    -1 === kt.inArray(t, n) && (e.addAttributeFilter(n, function (e, t) {
      for (var n = e.length; n--;) {
        e[n].attr(t, null);
      }
    }), t.push(n));
  },
      xy = function xy(e, t, n, r, o) {
    var i,
        a,
        u,
        s,
        c,
        l,
        f = (i = r, Jm(t, n).serialize(i));
    return a = e, s = f, (u = o).no_events || !a ? s : (c = a, l = _ke(_ke({}, u), {
      content: s
    }), c.fire("PostProcess", l).content);
  },
      Sy = function Sy(y, b) {
    var e = ["data-mce-selected"],
        C = b && b.dom ? b.dom : Eu.DOM,
        w = b && b.schema ? b.schema : Ci(y);
    y.entity_encoding = y.entity_encoding || "named", y.remove_trailing_brs = !("remove_trailing_brs" in y) || y.remove_trailing_brs;
    var t,
        s,
        c,
        x = by(y, w);
    s = y, c = C, (t = x).addAttributeFilter("data-mce-tabindex", function (e, t) {
      for (var n, r = e.length; r--;) {
        (n = e[r]).attr("tabindex", n.attr("data-mce-tabindex")), n.attr(t, null);
      }
    }), t.addAttributeFilter("src,href,style", function (e, t) {
      for (var n, r, o = e.length, i = "data-mce-" + t, a = s.url_converter, u = s.url_converter_scope; o--;) {
        (r = (n = e[o]).attr(i)) !== undefined ? (n.attr(t, 0 < r.length ? r : null), n.attr(i, null)) : (r = n.attr(t), "style" === t ? r = c.serializeStyle(c.parseStyle(r), n.name) : a && (r = a.call(u, r, t, n.name)), n.attr(t, 0 < r.length ? r : null));
      }
    }), t.addAttributeFilter("class", function (e) {
      for (var t, n, r = e.length; r--;) {
        (n = (t = e[r]).attr("class")) && (n = t.attr("class").replace(/(?:^|\s)mce-item-\w+(?!\S)/g, ""), t.attr("class", 0 < n.length ? n : null));
      }
    }), t.addAttributeFilter("data-mce-type", function (e, t, n) {
      for (var r, o = e.length; o--;) {
        "bookmark" !== (r = e[o]).attr("data-mce-type") || n.cleanup || (U.from(r.firstChild).exists(function (e) {
          return !mo(e.value);
        }) ? r.unwrap() : r.remove());
      }
    }), t.addNodeFilter("noscript", function (e) {
      for (var t, n = e.length; n--;) {
        (t = e[n].firstChild) && (t.value = ci.decode(t.value));
      }
    }), t.addNodeFilter("script,style", function (e, t) {
      for (var n, r, o, i = e.length, a = function a(e) {
        return e.replace(/(<!--\[CDATA\[|\]\]-->)/g, "\n").replace(/^[\r\n]*|[\r\n]*$/g, "").replace(/^\s*((<!--)?(\s*\/\/)?\s*<!\[CDATA\[|(<!--\s*)?\/\*\s*<!\[CDATA\[\s*\*\/|(\/\/)?\s*<!--|\/\*\s*<!--\s*\*\/)\s*[\r\n]*/gi, "").replace(/\s*(\/\*\s*\]\]>\s*\*\/(-->)?|\s*\/\/\s*\]\]>(-->)?|\/\/\s*(-->)?|\]\]>|\/\*\s*-->\s*\*\/|\s*-->\s*)\s*$/g, "");
      }; i--;) {
        r = (n = e[i]).firstChild ? n.firstChild.value : "", "script" === t ? ((o = n.attr("type")) && n.attr("type", "mce-no/type" === o ? null : o.replace(/^mce\-/, "")), "xhtml" === s.element_format && 0 < r.length && (n.firstChild.value = "// <![CDATA[\n" + a(r) + "\n// ]]>")) : "xhtml" === s.element_format && 0 < r.length && (n.firstChild.value = "\x3c!--\n" + a(r) + "\n--\x3e");
      }
    }), t.addNodeFilter("#comment", function (e) {
      for (var t, n = e.length; n--;) {
        t = e[n], s.preserve_cdata && 0 === t.value.indexOf("[CDATA[") ? (t.name = "#cdata", t.type = 4, t.value = c.decode(t.value.replace(/^\[CDATA\[|\]\]$/g, ""))) : 0 === t.value.indexOf("mce:protected ") && (t.name = "#text", t.type = 3, t.raw = !0, t.value = unescape(t.value).substr(14));
      }
    }), t.addNodeFilter("xml:namespace,input", function (e, t) {
      for (var n, r = e.length; r--;) {
        7 === (n = e[r]).type ? n.remove() : 1 === n.type && ("input" !== t || n.attr("type") || n.attr("type", "text"));
      }
    }), t.addAttributeFilter("data-mce-type", function (e) {
      W(e, function (e) {
        "format-caret" === e.attr("data-mce-type") && (e.isEmpty(t.schema.getNonEmptyElements()) ? e.remove() : e.unwrap());
      });
    }), t.addAttributeFilter("data-mce-src,data-mce-href,data-mce-style,data-mce-selected,data-mce-expando,data-mce-type,data-mce-resize,data-mce-placeholder", function (e, t) {
      for (var n = e.length; n--;) {
        e[n].attr(t, null);
      }
    });
    return {
      schema: w,
      addNodeFilter: x.addNodeFilter,
      addAttributeFilter: x.addAttributeFilter,
      serialize: function serialize(e, t) {
        void 0 === t && (t = {});

        var n,
            r,
            o,
            i,
            a,
            u,
            s,
            c,
            l,
            f,
            d,
            m,
            p = _ke({
          format: "html"
        }, t),
            g = Cy(b, e, p),
            h = (n = C, r = g, i = po((o = p).getInner ? r.innerHTML : n.getOuterHTML(r)), o.selection || so(At.fromDom(r)) ? i : kt.trim(i)),
            v = (a = x, u = h, d = (s = p).selection ? _ke({
          forced_root_block: !1
        }, s) : s, m = a.parse(u, d), l = function l(e) {
          return e && "br" === e.name;
        }, f = m.lastChild, !l(f) || l(c = f.prev) && (f.remove(), c.remove()), m);

        return "tree" === p.format ? v : xy(b, y, w, v, p);
      },
      addRules: function addRules(e) {
        w.addValidElements(e);
      },
      setRules: function setRules(e) {
        w.setValidElements(e);
      },
      addTempAttr: N(wy, x, e),
      getTempAttrs: function getTempAttrs() {
        return e;
      },
      getNodeFilters: x.getNodeFilters,
      getAttributeFilters: x.getAttributeFilters
    };
  },
      Ny = function Ny(e, t) {
    var n = Sy(e, t);
    return {
      schema: n.schema,
      addNodeFilter: n.addNodeFilter,
      addAttributeFilter: n.addAttributeFilter,
      serialize: n.serialize,
      addRules: n.addRules,
      setRules: n.setRules,
      addTempAttr: n.addTempAttr,
      getTempAttrs: n.getTempAttrs,
      getNodeFilters: n.getNodeFilters,
      getAttributeFilters: n.getAttributeFilters
    };
  },
      Ey = function Ey(e, t) {
    void 0 === t && (t = {});
    var n,
        r,
        o = t.format ? t.format : "html";
    return n = t, r = o, Vv(e).editor.getContent(n, r);
  },
      ky = function ky(e, t, n) {
    return void 0 === n && (n = {}), r = t, o = n, Vv(e).editor.setContent(r, o);
    var r, o;
  },
      _y = Eu.DOM,
      Ay = function Ay(e) {
    return U.from(e).each(function (e) {
      return e.destroy();
    });
  },
      Ry = function Ry(e) {
    var t, n, r, o, i;
    e.removed || (t = e._selectionOverrides, n = e.editorUpload, r = e.getBody(), o = e.getElement(), r && e.save({
      is_removing: !0
    }), e.removed = !0, e.unbindAllNativeEvents(), e.hasHiddenInput && o && _y.remove(o.nextSibling), e.fire("remove"), e.editorManager.remove(e), !e.inline && r && (i = e, _y.setStyle(i.id, "display", i.orgDisplay)), e.fire("detach"), _y.remove(e.getContainer()), Ay(t), Ay(n), e.destroy());
  },
      Ty = function Ty(e, t) {
    var n,
        r,
        o,
        i = e.selection,
        a = e.dom;
    e.destroyed || (t || e.removed ? (t || (e.editorManager.off("beforeunload", e._beforeUnload), e.theme && e.theme.destroy && e.theme.destroy(), Ay(i), Ay(a)), (r = (n = e).formElement) && (r._mceOldSubmit && (r.submit = r._mceOldSubmit, r._mceOldSubmit = null), _y.unbind(r, "submit reset", n.formEventDelegate)), (o = e).contentAreaContainer = o.formElement = o.container = o.editorContainer = null, o.bodyElement = o.contentDocument = o.contentWindow = null, o.iframeElement = o.targetElm = null, o.selection && (o.selection = o.selection.win = o.selection.dom = o.selection.dom.doc = null), e.destroyed = !0) : e.remove());
  },
      Dy = Object.prototype.hasOwnProperty,
      Oy = (sy = function sy(e, t) {
    return _(e) && _(t) ? Oy(e, t) : t;
  }, function () {
    for (var e = new Array(arguments.length), t = 0; t < e.length; t++) {
      e[t] = arguments[t];
    }

    if (0 === e.length) throw new Error("Can't merge zero objects");

    for (var n = {}, r = 0; r < e.length; r++) {
      var o = e[r];

      for (var i in o) {
        Dy.call(o, i) && (n[i] = sy(n[i], o[i]));
      }
    }

    return n;
  }),
      By = dt().deviceType,
      Py = By.isTouch(),
      Ly = By.isPhone(),
      Iy = By.isTablet(),
      My = ["lists", "autolink", "autosave"],
      Fy = {
    table_grid: !1,
    object_resizing: !1,
    resize: !1
  },
      Uy = function Uy(e) {
    var t = S(e) ? e.join(" ") : e,
        n = z(q(t) ? t.split(" ") : [], $e);
    return H(n, function (e) {
      return 0 < e.length;
    });
  },
      zy = function zy(n, e) {
    var t,
        r,
        o = de(e, function (e, t) {
      return M(n, t);
    });
    return t = o.t, r = o.f, {
      sections: E(t),
      settings: E(r)
    };
  },
      jy = function jy(e, t) {
    return e.sections().hasOwnProperty(t);
  },
      Hy = function Hy(e, t) {
    return ge(e, "toolbar_mode").orThunk(function () {
      return ge(e, "toolbar_drawer").map(function (e) {
        return !1 === e ? "wrap" : e;
      });
    }).getOr(t);
  },
      Vy = function Vy(e, t, n, r) {
    return e && (a = i = "mobile", u = (o = t).sections(), jy(o, i) && u[i].theme === a) ? H(r, N(M, My)) : e && jy(t, "mobile") ? r : n;
    var o, i, a, u;
  },
      qy = function qy(e, t, n, r) {
    var o,
        i,
        a,
        u = Uy(n.forced_plugins),
        s = Uy(r.plugins),
        c = jy(o = t, i = "mobile") ? o.sections()[i] : {},
        l = c.plugins ? Uy(c.plugins) : s,
        f = Vy(e, t, s, l),
        d = (a = f, [].concat(Uy(u)).concat(Uy(a)));
    if (wt.browser.isIE() && M(d, "rtc")) throw new Error("RTC plugin is not supported on IE 11.");
    return kt.extend(r, {
      plugins: d.join(" ")
    });
  },
      $y = function $y(e, t, n, r, o) {
    var i,
        a,
        u,
        s,
        c,
        l,
        f,
        d = e ? {
      mobile: (i = o.mobile || {}, a = t, u = {
        resize: !1,
        toolbar_mode: Hy(i, "scrolling"),
        toolbar_sticky: !1
      }, _ke(_ke(_ke({}, Fy), u), a ? {
        menubar: !1
      } : {}))
    } : {},
        m = zy(["mobile"], Oy(d, o)),
        p = kt.extend(n, r, m.settings(), (f = m, e && jy(f, "mobile") ? function (e, t, n) {
      void 0 === n && (n = {});
      var r = e.sections(),
          o = r.hasOwnProperty(t) ? r[t] : {};
      return kt.extend({}, n, o);
    }(m, "mobile") : {}), {
      validate: !0,
      external_plugins: (s = r, c = m.settings(), l = c.external_plugins ? c.external_plugins : {}, s && s.external_plugins ? kt.extend({}, s.external_plugins, l) : l)
    });
    return qy(e, m, r, p);
  },
      Wy = function Wy(e, t, n, r, o) {
    var i,
        a,
        u,
        s,
        c = (i = n, a = Py, u = e, s = {
      id: t,
      theme: "silver",
      toolbar_mode: Hy(o, "floating"),
      plugins: "",
      document_base_url: i,
      add_form_submit_trigger: !0,
      submit_patch: !0,
      add_unload_trigger: !0,
      convert_urls: !0,
      relative_urls: !0,
      remove_script_host: !0,
      object_resizing: !0,
      doctype: "<!DOCTYPE html>",
      visual: !0,
      font_size_legacy_values: "xx-small,small,medium,large,x-large,xx-large,300%",
      forced_root_block: "p",
      hidden_input: !0,
      inline_styles: !0,
      convert_fonts_to_spans: !0,
      indent: !0,
      indent_before: "p,h1,h2,h3,h4,h5,h6,blockquote,div,title,style,pre,script,td,th,ul,ol,li,dl,dt,dd,area,table,thead,tfoot,tbody,tr,section,summary,article,hgroup,aside,figure,figcaption,option,optgroup,datalist",
      indent_after: "p,h1,h2,h3,h4,h5,h6,blockquote,div,title,style,pre,script,td,th,ul,ol,li,dl,dt,dd,area,table,thead,tfoot,tbody,tr,section,summary,article,hgroup,aside,figure,figcaption,option,optgroup,datalist",
      entity_encoding: "named",
      url_converter: u.convertURL,
      url_converter_scope: u
    }, _ke(_ke({}, s), a ? Fy : {}));
    return $y(Ly || Iy, Ly, c, r, o);
  },
      Ky = function Ky(e, t, n) {
    return U.from(t.settings[n]).filter(e);
  },
      Xy = function Xy(e, t, n, r) {
    var o,
        i,
        a,
        u = t in e.settings ? e.settings[t] : n;
    return "hash" === r ? (a = {}, "string" == typeof (i = u) ? W(0 < i.indexOf("=") ? i.split(/[;,](?![^=;,]*(?:[;,]|$))/) : i.split(","), function (e) {
      var t = e.split("=");
      1 < t.length ? a[kt.trim(t[0])] = kt.trim(t[1]) : a[kt.trim(t[0])] = kt.trim(t[0]);
    }) : a = i, a) : "string" === r ? Ky(q, e, t).getOr(n) : "number" === r ? Ky(O, e, t).getOr(n) : "boolean" === r ? Ky(A, e, t).getOr(n) : "object" === r ? Ky(_, e, t).getOr(n) : "array" === r ? Ky(S, e, t).getOr(n) : "string[]" === r ? Ky((o = q, function (e) {
      return S(e) && Q(e, o);
    }), e, t).getOr(n) : "function" === r ? Ky(T, e, t).getOr(n) : u;
  },
      Yy = (cy = {}, {
    add: function add(e, t) {
      cy[e] = t;
    },
    get: function get(e) {
      return cy[e] ? cy[e] : {
        icons: {}
      };
    },
    has: function has(e) {
      return he(cy, e);
    }
  }),
      Gy = function Gy(e, t) {
    return t.dom[e];
  },
      Jy = function Jy(e, t) {
    return parseInt(er(t, e), 10);
  },
      Qy = N(Gy, "clientWidth"),
      Zy = N(Gy, "clientHeight"),
      eb = N(Jy, "margin-top"),
      tb = N(Jy, "margin-left"),
      nb = function nb(e, t, n) {
    var r,
        o,
        i,
        a,
        u,
        s,
        c,
        l,
        f,
        d,
        m,
        p = At.fromDom(e.getBody()),
        g = e.inline ? p : (r = p, At.fromDom(Vt(r).dom.documentElement)),
        h = (o = e.inline, a = t, u = n, s = (i = g).dom.getBoundingClientRect(), {
      x: a - (o ? s.left + i.dom.clientLeft + tb(i) : 0),
      y: u - (o ? s.top + i.dom.clientTop + eb(i) : 0)
    });
    return l = h.x, f = h.y, d = Qy(c = g), m = Zy(c), 0 <= l && 0 <= f && l <= d && f <= m;
  },
      rb = function rb(e) {
    var t,
        n = e.inline ? e.getBody() : e.getContentAreaContainer();
    return t = n, U.from(t).map(At.fromDom).map(hn).getOr(!1);
  };

  function ob(n) {
    var t,
        o = [],
        i = function i() {
      var e,
          t = n.theme;
      return t && t.getNotificationManagerImpl ? t.getNotificationManagerImpl() : {
        open: e = function e() {
          throw new Error("Theme did not provide a NotificationManager implementation.");
        },
        close: e,
        reposition: e,
        getArgs: e
      };
    },
        a = function a() {
      return U.from(o[0]);
    },
        u = function u() {
      0 < o.length && i().reposition(o);
    },
        s = function s(t) {
      G(o, function (e) {
        return e === t;
      }).each(function (e) {
        o.splice(e, 1);
      });
    },
        r = function r(_r4, e) {
      if (void 0 === e && (e = !0), !n.removed && rb(n)) return e && n.fire("BeforeOpenNotification", {
        notification: _r4
      }), Y(o, function (e) {
        return t = i().getArgs(e), n = _r4, !(t.type !== n.type || t.text !== n.text || t.progressBar || t.timeout || n.progressBar || n.timeout);
        var t, n;
      }).getOrThunk(function () {
        n.editorManager.setActive(n);
        var e,
            t = i().open(_r4, function () {
          s(t), u(), a().fold(function () {
            return n.focus();
          }, function (e) {
            return At.fromDom(e.getEl()).dom.focus();
          });
        });
        return e = t, o.push(e), u(), n.fire("OpenNotification", _ke({}, t)), t;
      });
    };

    return (t = n).on("SkinLoaded", function () {
      var e = t.getParam("service_message");
      e && r({
        text: e,
        type: "warning",
        timeout: 0
      }, !1);
    }), t.on("ResizeEditor ResizeWindow NodeChange", function () {
      qr.requestAnimationFrame(u);
    }), t.on("remove", function () {
      W(o.slice(), function (e) {
        i().close(e);
      });
    }), {
      open: r,
      close: function close() {
        a().each(function (e) {
          i().close(e), s(e), u();
        });
      },
      getNotifications: function getNotifications() {
        return o;
      }
    };
  }

  var ib = Uu.PluginManager,
      ab = Uu.ThemeManager;

  var ub = function ub(n) {
    var r = [],
        o = function o() {
      var e,
          t = n.theme;
      return t && t.getWindowManagerImpl ? t.getWindowManagerImpl() : {
        open: e = function e() {
          throw new Error("Theme did not provide a WindowManager implementation.");
        },
        openUrl: e,
        alert: e,
        confirm: e,
        close: e,
        getParams: e,
        setParams: e
      };
    },
        i = function i(e, t) {
      return function () {
        return t ? t.apply(e, arguments) : undefined;
      };
    },
        a = function a(e) {
      var t;
      r.push(e), t = e, n.fire("OpenWindow", {
        dialog: t
      });
    },
        u = function u(t) {
      var e;
      e = t, n.fire("CloseWindow", {
        dialog: e
      }), 0 === (r = H(r, function (e) {
        return e !== t;
      })).length && n.focus();
    },
        s = function s(e) {
      n.editorManager.setActive(n), fm(n);
      var t = e();
      return a(t), t;
    };

    return n.on("remove", function () {
      W(r, function (e) {
        o().close(e);
      });
    }), {
      open: function open(e, t) {
        return s(function () {
          return o().open(e, t, u);
        });
      },
      openUrl: function openUrl(e) {
        return s(function () {
          return o().openUrl(e, u);
        });
      },
      alert: function alert(e, t, n) {
        o().alert(e, i(n || this, t));
      },
      confirm: function confirm(e, t, n) {
        o().confirm(e, i(n || this, t));
      },
      close: function close() {
        U.from(r[r.length - 1]).each(function (e) {
          o().close(e), u(e);
        });
      }
    };
  },
      sb = function sb(e, t) {
    e.notificationManager.open({
      type: "error",
      text: t
    });
  },
      cb = function cb(e, t) {
    e._skinLoaded ? sb(e, t) : e.on("SkinLoaded", function () {
      sb(e, t);
    });
  },
      lb = function lb(e, t, n) {
    var r, o;
    r = t, o = {
      message: n
    }, e.fire(r, o), console.error(n);
  },
      fb = function fb(e, t, n) {
    return n ? "Failed to load " + e + ": " + n + " from url " + t : "Failed to load " + e + " url: " + t;
  },
      db = function db(e, t, n) {
    lb(e, "PluginLoadError", fb("plugin", t, n));
  },
      mb = function mb(e) {
    for (var t = [], n = 1; n < arguments.length; n++) {
      t[n - 1] = arguments[n];
    }

    var r = window.console;
    r && (r.error ? r.error.apply(r, _e([e], t)) : r.log.apply(r, _e([e], t)));
  },
      pb = function pb(t) {
    var e,
        n,
        r = (n = (e = t).getParam("content_css"), q(n) ? z(n.split(","), $e) : S(n) ? n : !1 === n || e.inline ? [] : ["default"]),
        o = t.editorManager.baseURL + "/skins/content",
        i = "content" + t.editorManager.suffix + ".css",
        a = !0 === t.inline;
    return z(r, function (e) {
      return /^[a-z0-9\-]+$/i.test(e) && !a ? o + "/" + e + "/" + i : t.documentBaseURI.toAbsolute(e);
    });
  };

  function gb(u, s) {
    var o = {},
        n = function n(e, r, o, t) {
      var i = new XMLHttpRequest();
      i.open("POST", s.url), i.withCredentials = s.credentials, i.upload.onprogress = function (e) {
        t(e.loaded / e.total * 100);
      }, i.onerror = function () {
        o("Image upload failed due to a XHR Transport error. Code: " + i.status);
      }, i.onload = function () {
        var e, t, n;
        i.status < 200 || 300 <= i.status ? o("HTTP Error: " + i.status) : (e = JSON.parse(i.responseText)) && "string" == typeof e.location ? r((t = s.basePath, n = e.location, t ? t.replace(/\/$/, "") + "/" + n.replace(/^\//, "") : n)) : o("Invalid JSON: " + i.responseText);
      };
      var n = new FormData();
      n.append("file", e.blob(), e.filename()), i.send(n);
    },
        c = function c(e, t) {
      return {
        url: t,
        blobInfo: e,
        status: !0
      };
    },
        l = function l(e, t, n) {
      return {
        url: "",
        blobInfo: e,
        status: !1,
        error: {
          message: t,
          options: n
        }
      };
    },
        f = function f(e, t) {
      kt.each(o[e], function (e) {
        e(t);
      }), delete o[e];
    },
        r = function r(e, _r5) {
      return e = kt.grep(e, function (e) {
        return !u.isUploaded(e.blobUri());
      }), Br.all(kt.map(e, function (e) {
        return u.isPending(e.blobUri()) ? (t = e.blobUri(), new Br(function (e) {
          o[t] = o[t] || [], o[t].push(e);
        })) : (i = e, n = s.handler, a = _r5, u.markPending(i.blobUri()), new Br(function (r) {
          var t;

          try {
            var o = function o() {
              t && t.close();
            };

            n(i, function (e) {
              o(), u.markUploaded(i.blobUri(), e), f(i.blobUri(), c(i, e)), r(c(i, e));
            }, function (e, t) {
              var n = t || {};
              o(), u.removeFailed(i.blobUri()), f(i.blobUri(), l(i, e, n)), r(l(i, e, n));
            }, function (e) {
              e < 0 || 100 < e || (t = t || a()).progressBar.value(e);
            });
          } catch (e) {
            r(l(i, e.message, {}));
          }
        }));
        var i, n, a, t;
      }));
    };

    return !1 === T(s.handler) && (s.handler = n), {
      upload: function upload(e, t) {
        return s.url || s.handler !== n ? r(e, t) : new Br(function (e) {
          e([]);
        });
      }
    };
  }

  var hb = 0,
      vb = function vb(e) {
    return e + hb++ + (t = function t() {
      return Math.round(4294967295 * Math.random()).toString(36);
    }, "s" + new Date().getTime().toString(36) + t() + t() + t());
    var t;
  },
      yb = function yb(s) {
    var n,
        i,
        e,
        t,
        r,
        o,
        a,
        u,
        c,
        l = (n = [], i = function i(e) {
      if (!e.blob || !e.base64) throw new Error("blob and base64 representations of the image are required for BlobInfo to be created");
      var t = e.id || vb("blobid"),
          n = e.name || t,
          r = e.blob;
      return {
        id: E(t),
        name: E(n),
        filename: E(e.filename || n + "." + ({
          "image/jpeg": "jpg",
          "image/jpg": "jpg",
          "image/gif": "gif",
          "image/png": "png",
          "image/apng": "apng",
          "image/avif": "avif",
          "image/svg+xml": "svg",
          "image/webp": "webp",
          "image/bmp": "bmp",
          "image/tiff": "tiff"
        }[r.type.toLowerCase()] || "dat")),
        blob: E(r),
        base64: E(e.base64),
        blobUri: E(e.blobUri || URL.createObjectURL(r)),
        uri: E(e.uri)
      };
    }, {
      create: function create(e, t, n, r, o) {
        if (q(e)) return i({
          id: e,
          name: r,
          filename: o,
          blob: t,
          base64: n
        });
        if (_(e)) return i(e);
        throw new Error("Unknown input type");
      },
      add: function add(e) {
        t(e.id()) || n.push(e);
      },
      get: t = function t(_t4) {
        return e(function (e) {
          return e.id() === _t4;
        });
      },
      getByUri: function getByUri(t) {
        return e(function (e) {
          return e.blobUri() === t;
        });
      },
      getByData: function getByData(t, n) {
        return e(function (e) {
          return e.base64() === t && e.blob().type === n;
        });
      },
      findFirst: e = function e(_e8) {
        return Y(n, _e8).getOrUndefined();
      },
      removeByUri: function removeByUri(t) {
        n = H(n, function (e) {
          return e.blobUri() !== t || (URL.revokeObjectURL(e.blobUri()), !1);
        });
      },
      destroy: function destroy() {
        W(n, function (e) {
          URL.revokeObjectURL(e.blobUri());
        }), n = [];
      }
    }),
        f = (a = {}, u = function u(e, t) {
      return {
        status: e,
        resultUri: t
      };
    }, {
      hasBlobUri: c = function c(e) {
        return e in a;
      },
      getResultUri: function getResultUri(e) {
        var t = a[e];
        return t ? t.resultUri : null;
      },
      isPending: function isPending(e) {
        return !!c(e) && 1 === a[e].status;
      },
      isUploaded: function isUploaded(e) {
        return !!c(e) && 2 === a[e].status;
      },
      markPending: function markPending(e) {
        a[e] = u(1, null);
      },
      markUploaded: function markUploaded(e, t) {
        a[e] = u(2, t);
      },
      removeFailed: function removeFailed(e) {
        delete a[e];
      },
      destroy: function destroy() {
        a = {};
      }
    }),
        d = [],
        m = function (n) {
      var r = Ou(null);
      n.on("change AddUndo", function (e) {
        r.set(_ke({}, e.level));
      });
      return {
        fireIfChanged: function fireIfChanged() {
          var t = n.undoManager.data;
          re(t).filter(function (e) {
            return !Bv(r.get(), e);
          }).each(function (e) {
            n.setDirty(!0), n.fire("change", {
              level: e,
              lastLevel: te(t, t.length - 2).getOrNull()
            });
          });
        }
      };
    }(s),
        p = function p(t) {
      return function (e) {
        return s.selection ? t(e) : [];
      };
    },
        g = function g(e, t, n) {
      for (var r = 0; -1 !== (r = e.indexOf(t, r)) && (e = e.substring(0, r) + n + e.substr(r + t.length), r += n.length - t.length + 1), -1 !== r;) {
        ;
      }

      return e;
    },
        h = function h(e, t, n) {
      var r = 'src="' + n + '"' + (n === wt.transparentSrc ? ' data-mce-placeholder="1"' : "");
      return e = g(e, 'src="' + t + '"', r), e = g(e, 'data-mce-src="' + t + '"', 'data-mce-src="' + n + '"');
    },
        v = function v(t, n) {
      W(s.undoManager.data, function (e) {
        "fragmented" === e.type ? e.fragments = z(e.fragments, function (e) {
          return h(e, t, n);
        }) : e.content = h(e.content, t, n);
      });
    },
        y = function y() {
      return s.notificationManager.open({
        text: s.translate("Image uploading..."),
        type: "info",
        timeout: -1,
        progressBar: !0
      });
    },
        b = function b(e, t) {
      var n,
          r = s.convertURL(t, "src");
      v(e.src, t), s.$(e).attr({
        src: s.getParam("images_reuse_filename", !1, "boolean") ? (n = t) + (-1 === n.indexOf("?") ? "?" : "&") + new Date().getTime() : t,
        "data-mce-src": r
      });
    },
        C = function C(n) {
      return r = r || gb(f, {
        url: s.getParam("images_upload_url", "", "string"),
        basePath: s.getParam("images_upload_base_path", "", "string"),
        credentials: s.getParam("images_upload_credentials", !1, "boolean"),
        handler: s.getParam("images_upload_handler", null, "function")
      }), S().then(p(function (u) {
        var e = z(u, function (e) {
          return e.blobInfo;
        });
        return r.upload(e, y).then(p(function (e) {
          var a = [],
              t = z(e, function (e, t) {
            var n,
                r,
                o = u[t].blobInfo,
                i = u[t].image;
            return e.status && s.getParam("images_replace_blob_uris", !0, "boolean") ? (l.removeByUri(i.src), b(i, e.url)) : e.error && (e.error.options.remove && (v(i.getAttribute("src"), wt.transparentSrc), a.push(i)), n = s, r = e.error.message, cb(n, Iu.translate(["Failed to upload image: {0}", r]))), {
              element: i,
              status: e.status,
              uploadUri: e.url,
              blobInfo: o
            };
          });
          return 0 < t.length && m.fireIfChanged(), 0 < a.length && (Hv(s) ? console.error("Removing images on failed uploads is currently unsupported for RTC") : s.undoManager.transact(function () {
            W(a, function (e) {
              s.dom.remove(e), l.removeByUri(e.src);
            });
          })), n && n(t), t;
        }));
      }));
    },
        w = function w(e) {
      if (bc(s)) return C(e);
    },
        x = function x(t) {
      return !1 !== Q(d, function (e) {
        return e(t);
      }) && (0 !== t.getAttribute("src").indexOf("data:") || s.getParam("images_dataimg_filter", k, "function")(t));
    },
        S = function S() {
      return (o = o || uy(f, l)).findAll(s.getBody(), x).then(p(function (e) {
        return e = H(e, function (e) {
          return "string" != typeof e || (cb(s, e), !1);
        }), W(e, function (e) {
          v(e.image.src, e.blobInfo.blobUri()), e.image.src = e.blobInfo.blobUri(), e.image.removeAttribute("data-mce-src");
        }), e;
      }));
    },
        N = function N(e) {
      return e.replace(/src="(blob:[^"]+)"/g, function (e, n) {
        var t = f.getResultUri(n);
        if (t) return 'src="' + t + '"';
        var r = l.getByUri(n);
        return (r = r || X(s.editorManager.get(), function (e, t) {
          return e || t.editorUpload && t.editorUpload.blobCache.getByUri(n);
        }, null)) ? 'src="data:' + r.blob().type + ";base64," + r.base64() + '"' : e;
      });
    };

    return s.on("SetContent", function () {
      (bc(s) ? w : S)();
    }), s.on("RawSaveContent", function (e) {
      e.content = N(e.content);
    }), s.on("GetContent", function (e) {
      e.source_view || "raw" === e.format || "tree" === e.format || (e.content = N(e.content));
    }), s.on("PostRender", function () {
      s.parser.addNodeFilter("img", function (e) {
        W(e, function (e) {
          var t,
              n = e.attr("src");
          l.getByUri(n) || (t = f.getResultUri(n)) && e.attr("src", t);
        });
      });
    }), {
      blobCache: l,
      addFilter: function addFilter(e) {
        d.push(e);
      },
      uploadImages: C,
      uploadImagesAuto: w,
      scanForImages: S,
      destroy: function destroy() {
        l.destroy(), f.destroy(), o = r = null;
      }
    };
  };

  function bb(e) {
    var r,
        t,
        n = {},
        o = function o(e, t) {
      e && ("string" != typeof e ? kt.each(e, function (e, t) {
        o(t, e);
      }) : (S(t) || (t = [t]), kt.each(t, function (e) {
        "undefined" == typeof e.deep && (e.deep = !e.selector), "undefined" == typeof e.split && (e.split = !e.selector || e.inline), "undefined" == typeof e.remove && e.selector && !e.inline && (e.remove = "none"), e.selector && e.inline && (e.mixed = !0, e.block_expand = !0), "string" == typeof e.classes && (e.classes = e.classes.split(/\s+/));
      }), n[e] = t));
    };

    return o((r = e.dom, t = {
      valigntop: [{
        selector: "td,th",
        styles: {
          verticalAlign: "top"
        }
      }],
      valignmiddle: [{
        selector: "td,th",
        styles: {
          verticalAlign: "middle"
        }
      }],
      valignbottom: [{
        selector: "td,th",
        styles: {
          verticalAlign: "bottom"
        }
      }],
      alignleft: [{
        selector: "figure.image",
        collapsed: !1,
        classes: "align-left",
        ceFalseOverride: !0,
        preview: "font-family font-size"
      }, {
        selector: "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",
        styles: {
          textAlign: "left"
        },
        inherit: !1,
        preview: !1,
        defaultBlock: "div"
      }, {
        selector: "img,table",
        collapsed: !1,
        styles: {
          "float": "left"
        },
        preview: "font-family font-size"
      }],
      aligncenter: [{
        selector: "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",
        styles: {
          textAlign: "center"
        },
        inherit: !1,
        preview: "font-family font-size",
        defaultBlock: "div"
      }, {
        selector: "figure.image",
        collapsed: !1,
        classes: "align-center",
        ceFalseOverride: !0,
        preview: "font-family font-size"
      }, {
        selector: "img",
        collapsed: !1,
        styles: {
          display: "block",
          marginLeft: "auto",
          marginRight: "auto"
        },
        preview: !1
      }, {
        selector: "table",
        collapsed: !1,
        styles: {
          marginLeft: "auto",
          marginRight: "auto"
        },
        preview: "font-family font-size"
      }],
      alignright: [{
        selector: "figure.image",
        collapsed: !1,
        classes: "align-right",
        ceFalseOverride: !0,
        preview: "font-family font-size"
      }, {
        selector: "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",
        styles: {
          textAlign: "right"
        },
        inherit: !1,
        preview: "font-family font-size",
        defaultBlock: "div"
      }, {
        selector: "img,table",
        collapsed: !1,
        styles: {
          "float": "right"
        },
        preview: "font-family font-size"
      }],
      alignjustify: [{
        selector: "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",
        styles: {
          textAlign: "justify"
        },
        inherit: !1,
        defaultBlock: "div",
        preview: "font-family font-size"
      }],
      bold: [{
        inline: "strong",
        remove: "all",
        preserve_attributes: ["class", "style"]
      }, {
        inline: "span",
        styles: {
          fontWeight: "bold"
        }
      }, {
        inline: "b",
        remove: "all",
        preserve_attributes: ["class", "style"]
      }],
      italic: [{
        inline: "em",
        remove: "all",
        preserve_attributes: ["class", "style"]
      }, {
        inline: "span",
        styles: {
          fontStyle: "italic"
        }
      }, {
        inline: "i",
        remove: "all",
        preserve_attributes: ["class", "style"]
      }],
      underline: [{
        inline: "span",
        styles: {
          textDecoration: "underline"
        },
        exact: !0
      }, {
        inline: "u",
        remove: "all",
        preserve_attributes: ["class", "style"]
      }],
      strikethrough: [{
        inline: "span",
        styles: {
          textDecoration: "line-through"
        },
        exact: !0
      }, {
        inline: "strike",
        remove: "all",
        preserve_attributes: ["class", "style"]
      }, {
        inline: "s",
        remove: "all",
        preserve_attributes: ["class", "style"]
      }],
      forecolor: {
        inline: "span",
        styles: {
          color: "%value"
        },
        links: !0,
        remove_similar: !0,
        clear_child_styles: !0
      },
      hilitecolor: {
        inline: "span",
        styles: {
          backgroundColor: "%value"
        },
        links: !0,
        remove_similar: !0,
        clear_child_styles: !0
      },
      fontname: {
        inline: "span",
        toggle: !1,
        styles: {
          fontFamily: "%value"
        },
        clear_child_styles: !0
      },
      fontsize: {
        inline: "span",
        toggle: !1,
        styles: {
          fontSize: "%value"
        },
        clear_child_styles: !0
      },
      lineheight: {
        selector: "h1,h2,h3,h4,h5,h6,p,li,td,th,div",
        defaultBlock: "p",
        styles: {
          lineHeight: "%value"
        }
      },
      fontsize_class: {
        inline: "span",
        attributes: {
          "class": "%value"
        }
      },
      blockquote: {
        block: "blockquote",
        wrapper: !0,
        remove: "all"
      },
      subscript: {
        inline: "sub"
      },
      superscript: {
        inline: "sup"
      },
      code: {
        inline: "code"
      },
      link: {
        inline: "a",
        selector: "a",
        remove: "all",
        split: !0,
        deep: !0,
        onmatch: function onmatch(e, t, n) {
          return An(e) && e.hasAttribute("href");
        },
        onformat: function onformat(n, e, t) {
          kt.each(t, function (e, t) {
            r.setAttrib(n, t, e);
          });
        }
      },
      removeformat: [{
        selector: "b,strong,em,i,font,u,strike,s,sub,sup,dfn,code,samp,kbd,var,cite,mark,q,del,ins",
        remove: "all",
        split: !0,
        expand: !1,
        block_expand: !0,
        deep: !0
      }, {
        selector: "span",
        attributes: ["style", "class"],
        remove: "empty",
        split: !0,
        expand: !1,
        deep: !0
      }, {
        selector: "*",
        attributes: ["style", "class"],
        split: !1,
        expand: !1,
        deep: !0
      }]
    }, kt.each("p h1 h2 h3 h4 h5 h6 div address pre div dt dd samp".split(/\s/), function (e) {
      t[e] = {
        block: e,
        remove: "all"
      };
    }), t)), o(e.getParam("formats")), {
      get: function get(e) {
        return e ? n[e] : n;
      },
      has: function has(e) {
        return he(n, e);
      },
      register: o,
      unregister: function unregister(e) {
        return e && n[e] && delete n[e], n;
      }
    };
  }

  var Cb,
      wb,
      xb = kt.each,
      Sb = Eu.DOM,
      Nb = function Nb(e, t) {
    var n,
        o,
        r,
        m = t && t.schema || Ci({}),
        p = function p(e) {
      o = "string" == typeof e ? {
        name: e,
        classes: [],
        attrs: {}
      } : e;
      var t,
          n,
          r = Sb.create(o.name);
      return t = r, (n = o).classes.length && Sb.addClass(t, n.classes.join(" ")), Sb.setAttribs(t, n.attrs), r;
    },
        g = function g(n, e, t) {
      var r,
          o,
          i,
          a,
          u,
          s,
          c,
          l = 0 < e.length && e[0],
          f = l && l.name,
          d = (a = f, u = "string" != typeof (i = n) ? i.nodeName.toLowerCase() : i, s = m.getElementRule(u), !(!(c = s && s.parentsRequired) || !c.length) && (a && -1 !== kt.inArray(c, a) ? a : c[0]));
      if (d) f === d ? (o = e[0], e = e.slice(1)) : o = d;else if (l) o = e[0], e = e.slice(1);else if (!t) return n;
      return o && (r = p(o)).appendChild(n), t && (r || (r = Sb.create("div")).appendChild(n), kt.each(t, function (e) {
        var t = p(e);
        r.insertBefore(t, n);
      })), g(r, e, o && o.siblings);
    };

    return e && e.length ? (o = e[0], n = p(o), (r = Sb.create("div")).appendChild(g(n, e.slice(1), o.siblings)), r) : "";
  },
      Eb = function Eb(e) {
    var t,
        a = {
      classes: [],
      attrs: {}
    };
    return "*" !== (e = a.selector = kt.trim(e)) && (t = e.replace(/(?:([#\.]|::?)([\w\-]+)|(\[)([^\]]+)\]?)/g, function (e, t, n, r, o) {
      switch (t) {
        case "#":
          a.attrs.id = n;
          break;

        case ".":
          a.classes.push(n);
          break;

        case ":":
          -1 !== kt.inArray("checked disabled enabled read-only required".split(" "), n) && (a.attrs[n] = n);
      }

      var i;
      return "[" !== r || (i = o.match(/([\w\-]+)(?:\=\"([^\"]+))?/)) && (a.attrs[i[1]] = i[2]), "";
    })), a.name = t || "div", a;
  },
      kb = function kb(n, e) {
    var t,
        r,
        o,
        i = "",
        a = (o = n.getParam("preview_styles", "font-family font-size font-weight font-style text-decoration text-transform color background-color border border-radius outline text-shadow"), q(o) ? o : "");
    if ("" === a) return "";

    var u = function u(e) {
      return e.replace(/%(\w+)/g, "");
    };

    if ("string" == typeof e) {
      if (!(e = n.formatter.get(e))) return;
      e = e[0];
    }

    if ("preview" in e) {
      var s = ge(e, "preview");
      if (s.is(!1)) return "";
      a = s.getOr(a);
    }

    t = e.block || e.inline || "span";
    var c,
        l = (c = e.selector) && "string" == typeof c ? (c = (c = c.split(/\s*,\s*/)[0]).replace(/\s*(~\+|~|\+|>)\s*/g, "$1"), kt.map(c.split(/(?:>|\s+(?![^\[\]]+\]))/), function (e) {
      var t = kt.map(e.split(/(?:~\+|~|\+)/), Eb),
          n = t.pop();
      return t.length && (n.siblings = t), n;
    }).reverse()) : [],
        f = l.length ? (l[0].name || (l[0].name = t), t = e.selector, Nb(l, n)) : Nb([t], n),
        d = Sb.select(t, f)[0] || f.firstChild;
    return xb(e.styles, function (e, t) {
      var n = u(e);
      n && Sb.setStyle(d, t, n);
    }), xb(e.attributes, function (e, t) {
      var n = u(e);
      n && Sb.setAttrib(d, t, n);
    }), xb(e.classes, function (e) {
      var t = u(e);
      Sb.hasClass(d, t) || Sb.addClass(d, t);
    }), n.fire("PreviewFormats"), Sb.setStyles(f, {
      position: "absolute",
      left: -65535
    }), n.getBody().appendChild(f), r = Sb.getStyle(n.getBody(), "fontSize", !0), r = /px$/.test(r) ? parseInt(r, 10) : 0, xb(a.split(" "), function (e) {
      var t = Sb.getStyle(d, e, !0);

      if (!("background-color" === e && /transparent|rgba\s*\([^)]+,\s*0\)/.test(t) && (t = Sb.getStyle(n.getBody(), e, !0), "#ffffff" === Sb.toHex(t).toLowerCase()) || "color" === e && "#000000" === Sb.toHex(t).toLowerCase())) {
        if ("font-size" === e && /em|%$/.test(t)) {
          if (0 === r) return;
          t = parseFloat(t) / (/%$/.test(t) ? 100 : 1) * r + "px";
        }

        "border" === e && t && (i += "padding:0 2px;"), i += e + ":" + t + ";";
      }
    }), n.fire("AfterPreviewFormats"), Sb.remove(f), i;
  },
      _b = function _b(s) {
    var e = bb(s),
        u = Ou(null);
    return function (e) {
      e.addShortcut("meta+b", "", "Bold"), e.addShortcut("meta+i", "", "Italic"), e.addShortcut("meta+u", "", "Underline");

      for (var t = 1; t <= 6; t++) {
        e.addShortcut("access+" + t, "", ["FormatBlock", !1, "h" + t]);
      }

      e.addShortcut("access+7", "", ["FormatBlock", !1, "p"]), e.addShortcut("access+8", "", ["FormatBlock", !1, "div"]), e.addShortcut("access+9", "", ["FormatBlock", !1, "address"]);
    }(s), Sh(s), {
      get: e.get,
      has: e.has,
      register: e.register,
      unregister: e.unregister,
      apply: function apply(e, t, n) {
        var r, o, i;
        r = e, o = t, i = n, qv(s).formatter.apply(r, o, i);
      },
      remove: function remove(e, t, n, r) {
        var o, i, a, u;
        o = e, i = t, a = n, u = r, qv(s).formatter.remove(o, i, a, u);
      },
      toggle: function toggle(e, t, n) {
        var r, o, i;
        r = e, o = t, i = n, qv(s).formatter.toggle(r, o, i);
      },
      match: function match(e, t, n) {
        return r = e, o = t, i = n, qv(s).formatter.match(r, o, i);
        var r, o, i;
      },
      closest: function closest(e) {
        return t = e, qv(s).formatter.closest(t);
        var t;
      },
      matchAll: function matchAll(e, t) {
        return n = e, r = t, qv(s).formatter.matchAll(n, r);
        var n, r;
      },
      matchNode: function matchNode(e, t, n, r) {
        return o = e, i = t, a = n, u = r, qv(s).formatter.matchNode(o, i, a, u);
        var o, i, a, u;
      },
      canApply: function canApply(e) {
        return t = e, qv(s).formatter.canApply(t);
        var t;
      },
      formatChanged: function formatChanged(e, t, n) {
        return r = u, o = e, i = t, void 0 === (a = n) && (a = !1), qv(s).formatter.formatChanged(r, o, i, a);
        var r, o, i, a;
      },
      getCssText: N(kb, s)
    };
  },
      Ab = function Ab(n, r, o) {
    var i = Ou(!1),
        a = function a(e) {
      Lv(r, !1, o), r.add({}, e);
    };

    n.on("init", function () {
      r.add();
    }), n.on("BeforeExecCommand", function (e) {
      var t = e.command.toLowerCase();
      "undo" !== t && "redo" !== t && "mcerepaint" !== t && (Iv(r, o), r.beforeChange());
    }), n.on("ExecCommand", function (e) {
      var t = e.command.toLowerCase();
      "undo" !== t && "redo" !== t && "mcerepaint" !== t && a(e);
    }), n.on("ObjectResizeStart cut", function () {
      r.beforeChange();
    }), n.on("SaveContent ObjectResized blur", a), n.on("dragend", a), n.on("keyup", function (e) {
      var t = e.keyCode;
      e.isDefaultPrevented() || ((33 <= t && t <= 36 || 37 <= t && t <= 40 || 45 === t || e.ctrlKey) && (a(), n.nodeChanged()), 46 !== t && 8 !== t || n.nodeChanged(), i.get() && r.typing && !1 === Bv(Rv(n), r.data[0]) && (!1 === n.isDirty() && (n.setDirty(!0), n.fire("change", {
        level: r.data[0],
        lastLevel: null
      })), n.fire("TypingUndo"), i.set(!1), n.nodeChanged()));
    }), n.on("keydown", function (e) {
      var t,
          n = e.keyCode;
      e.isDefaultPrevented() || (33 <= n && n <= 36 || 37 <= n && n <= 40 || 45 === n ? r.typing && a(e) : (t = e.ctrlKey && !e.altKey || e.metaKey, !(n < 16 || 20 < n) || 224 === n || 91 === n || r.typing || t || (r.beforeChange(), Lv(r, !0, o), r.add({}, e), i.set(!0))));
    }), n.on("mousedown", function (e) {
      r.typing && a(e);
    });
    n.on("input", function (e) {
      var t, n;
      e.inputType && ("insertReplacementText" === e.inputType || "insertText" === (n = e).inputType && null === n.data || "insertFromPaste" === (t = e).inputType || "insertFromDrop" === t.inputType) && a(e);
    }), n.on("AddUndo Undo Redo ClearUndos", function (e) {
      e.isDefaultPrevented() || n.nodeChanged();
    });
  },
      Rb = function Rb(s) {
    var e,
        c = Ou(U.none()),
        l = Ou(0),
        f = Ou(0),
        d = {
      data: [],
      typing: !1,
      beforeChange: function beforeChange() {
        var e, t;
        e = l, t = c, qv(s).undoManager.beforeChange(e, t);
      },
      add: function add(e, t) {
        return n = d, r = f, o = l, i = c, a = e, u = t, qv(s).undoManager.addUndoLevel(n, r, o, i, a, u);
        var n, r, o, i, a, u;
      },
      undo: function undo() {
        return e = d, t = l, n = f, qv(s).undoManager.undo(e, t, n);
        var e, t, n;
      },
      redo: function redo() {
        return e = s, t = f, n = d.data, qv(e).undoManager.redo(t, n);
        var e, t, n;
      },
      clear: function clear() {
        var e, t;
        e = d, t = f, qv(s).undoManager.clear(e, t);
      },
      reset: function reset() {
        var e;
        e = d, qv(s).undoManager.reset(e);
      },
      hasUndo: function hasUndo() {
        return e = d, t = f, qv(s).undoManager.hasUndo(e, t);
        var e, t;
      },
      hasRedo: function hasRedo() {
        return e = d, t = f, qv(s).undoManager.hasRedo(e, t);
        var e, t;
      },
      transact: function transact(e) {
        return t = d, n = l, r = e, qv(s).undoManager.transact(t, n, r);
        var t, n, r;
      },
      ignore: function ignore(e) {
        var t, n;
        t = l, n = e, qv(s).undoManager.ignore(t, n);
      },
      extra: function extra(e, t) {
        var n, r, o, i;
        n = d, r = f, o = e, i = t, qv(s).undoManager.extra(n, r, o, i);
      }
    };
    return Hv(s) || Ab(s, d, l), (e = s).addShortcut("meta+z", "", "Undo"), e.addShortcut("meta+y,meta+shift+z", "", "Redo"), d;
  },
      Tb = [9, 27, ud.HOME, ud.END, 19, 20, 44, 144, 145, 33, 34, 45, 16, 17, 18, 91, 92, 93, ud.DOWN, ud.UP, ud.LEFT, ud.RIGHT].concat(wt.browser.isFirefox() ? [224] : []),
      Db = "data-mce-placeholder",
      Ob = function Ob(e) {
    return "keydown" === e.type || "keyup" === e.type;
  },
      Bb = function Bb(e) {
    var t = e.keyCode;
    return t === ud.BACKSPACE || t === ud.DELETE;
  },
      Pb = function Pb(a) {
    var e,
        u = a.dom,
        s = vc(a),
        c = (e = a).getParam("placeholder", pc.getAttrib(e.getElement(), "placeholder"), "string"),
        l = function l(e, t) {
      var n, r, o, i;
      !function (e) {
        if (Ob(e)) {
          var t = e.keyCode;
          return !Bb(e) && (ud.metaKeyPressed(e) || e.altKey || 112 <= t && t <= 123 || M(Tb, t));
        }

        return !1;
      }(e) && (n = a.getBody(), r = !(Ob(o = e) && !(Bb(o) || "keyup" === o.type && 229 === o.keyCode)) && function (e, t, n) {
        if ($o(At.fromDom(t), !1)) {
          var r = "" === n,
              o = t.firstElementChild;
          return !o || !e.getStyle(t.firstElementChild, "padding-left") && !e.getStyle(t.firstElementChild, "padding-right") && (r ? !e.isBlock(o) : n === o.nodeName.toLowerCase());
        }

        return !1;
      }(u, n, s), "" !== u.getAttrib(n, Db) === r && !t || (u.setAttrib(n, Db, r ? c : null), u.setAttrib(n, "aria-placeholder", r ? c : null), i = r, a.fire("PlaceholderToggle", {
        state: i
      }), a.on(r ? "keydown" : "keyup", l), a.off(r ? "keyup" : "keydown", l)));
    };

    c && a.on("init", function (e) {
      l(e, !0), a.on("change SetContent ExecCommand", l), a.on("paste", function (e) {
        return qr.setEditorTimeout(a, function () {
          return l(e);
        });
      });
    });
  },
      Lb = /[\u0591-\u07FF\uFB1D-\uFDFF\uFE70-\uFEFC]/,
      Ib = function Ib(e, t) {
    return Tt(At.fromDom(t), e.getParam("inline_boundaries_selector", "a[href],code,.mce-annotation", "string"));
  },
      Mb = function Mb(e) {
    return "rtl" === Eu.DOM.getStyle(e, "direction", !0) || (t = e.textContent, Lb.test(t));
    var t;
  },
      Fb = function Fb(e, t, n) {
    var r,
        o,
        i,
        a = (r = e, o = t, i = n, H(Eu.DOM.getParents(i.container(), "*", o), r));
    return U.from(a[a.length - 1]);
  },
      Ub = function Ub(e, t) {
    if (!t) return t;
    var n = t.container(),
        r = t.offset();
    return e ? yo(n) ? In(n.nextSibling) ? $s(n.nextSibling, 0) : $s.after(n) : wo(t) ? $s(n, r + 1) : t : yo(n) ? In(n.previousSibling) ? $s(n.previousSibling, n.previousSibling.data.length) : $s.before(n) : xo(t) ? $s(n, r - 1) : t;
  },
      zb = N(Ub, !0),
      jb = N(Ub, !1),
      Hb = function Hb(e, t) {
    return Pt(e, t) ? Ar(t, function (e) {
      return ro(e) || io(e);
    }, (n = e, function (e) {
      return Ot(n, At.fromDom(e.dom.parentNode));
    })) : U.none();
    var n;
  },
      Vb = function Vb(e) {
    var t, n, r;
    e.dom.isEmpty(e.getBody()) && (e.setContent(""), n = (t = e).getBody(), r = n.firstChild && t.dom.isBlock(n.firstChild) ? n.firstChild : n, t.selection.setCursorLocation(r, 0));
  },
      qb = function qb(e, t) {
    return {
      from: e,
      to: t
    };
  },
      $b = function $b(e, t) {
    var n = At.fromDom(e),
        r = At.fromDom(t.container());
    return Hb(n, r).map(function (e) {
      return {
        block: e,
        position: t
      };
    });
  },
      Wb = function Wb(o, i, e) {
    var t = $b(o, $s.fromRangeStart(e)),
        n = t.bind(function (e) {
      return Ol(i, o, e.position).bind(function (e) {
        return $b(o, e).map(function (e) {
          return t = o, n = i, zn((r = e).position.getNode()) && !1 === $o(r.block) ? Ll(!1, r.block.dom).bind(function (e) {
            return e.isEqual(r.position) ? Ol(n, t, e).bind(function (e) {
              return $b(t, e);
            }) : U.some(r);
          }).getOr(r) : r;
          var t, n, r;
        });
      });
    });
    return ds(t, n, qb).filter(function (e) {
      return !1 === Ot((r = e).from.block, r.to.block) && $t((n = e).from.block).bind(function (t) {
        return $t(n.to.block).filter(function (e) {
          return Ot(t, e);
        });
      }).isSome() && !1 === Vn((t = e).from.block.dom) && !1 === Vn(t.to.block.dom);
      var t, n, r;
    });
  },
      Kb = function Kb(e) {
    var t,
        n = (t = Gt(e), G(t, eo).fold(function () {
      return t;
    }, function (e) {
      return t.slice(0, e);
    }));
    return W(n, pn), n;
  },
      Xb = function Xb(e, t) {
    var n = Dp(t, e);
    return Y(n.reverse(), function (e) {
      return $o(e);
    }).each(pn);
  },
      Yb = function Yb(e, t, n, r) {
    if ($o(n)) return _p(n), Fl(n.dom);
    0 === H(Xt(r), function (e) {
      return !$o(e);
    }).length && $o(t) && sn(r, At.fromTag("br"));
    var o = Ml(n.dom, $s.before(r.dom));
    return W(Kb(t), function (e) {
      sn(r, e);
    }), Xb(e, t), o;
  },
      Gb = function Gb(e, t, n) {
    if ($o(n)) return pn(n), $o(t) && _p(t), Fl(t.dom);
    var r = Ul(n.dom);
    return W(Kb(t), function (e) {
      fn(n, e);
    }), Xb(e, t), r;
  },
      Jb = function Jb(e, t) {
    return Pt(t, e) ? (n = Dp(e, t), U.from(n[n.length - 1])) : U.none();
    var n;
  },
      Qb = function Qb(e, t) {
    Ll(e, t.dom).map(function (e) {
      return e.getNode();
    }).map(At.fromDom).filter(no).each(pn);
  },
      Zb = function Zb(e, t, n) {
    return Qb(!0, t), Qb(!1, n), Jb(t, n).fold(N(Gb, e, t, n), N(Yb, e, t, n));
  },
      eC = function eC(e, t, n, r) {
    return t ? Zb(e, r, n) : Zb(e, n, r);
  },
      tC = function tC(t, n) {
    var e,
        r,
        o,
        i = At.fromDom(t.getBody()),
        a = (e = i.dom, r = n, ((o = t.selection.getRng()).collapsed ? Wb(e, r, o) : U.none()).bind(function (e) {
      return eC(i, n, e.from.block, e.to.block);
    }));
    return a.each(function (e) {
      t.selection.setRng(e.toRange());
    }), a.isSome();
  },
      nC = function nC(e, t) {
    var n = At.fromDom(t),
        r = N(Ot, e);
    return _r(n, uo, r).isSome();
  },
      rC = function rC(e, t) {
    var n,
        r,
        o = Ml(e.dom, $s.fromRangeStart(t)).isNone(),
        i = Il(e.dom, $s.fromRangeEnd(t)).isNone();
    return !(nC(n = e, (r = t).startContainer) || nC(n, r.endContainer)) && o && i;
  },
      oC = function oC(e) {
    var n,
        r,
        o,
        t,
        i = At.fromDom(e.getBody()),
        a = e.selection.getRng();
    return rC(i, a) ? ((t = e).setContent(""), t.selection.setCursorLocation(), !0) : (n = i, r = e.selection, o = r.getRng(), ds(Hb(n, At.fromDom(o.startContainer)), Hb(n, At.fromDom(o.endContainer)), function (e, t) {
      return !1 === Ot(e, t) && (o.deleteContents(), eC(n, !0, e, t).each(function (e) {
        r.setRng(e.toRange());
      }), !0);
    }).getOr(!1));
  },
      iC = function iC(e, t) {
    return !e.selection.isCollapsed() && oC(e);
  },
      aC = Hn,
      uC = Vn,
      sC = function sC(e, t, n, r, o) {
    return U.from(t._selectionOverrides.showCaret(e, n, r, o));
  },
      cC = function cC(e, t) {
    var n, r;
    return e.fire("BeforeObjectSelected", {
      target: t
    }).isDefaultPrevented() ? U.none() : U.some(((r = (n = t).ownerDocument.createRange()).selectNode(n), r));
  },
      lC = function lC(e, t, n) {
    var r = ll(1, e.getBody(), t),
        o = $s.fromRangeStart(r),
        i = o.getNode();
    if (Wc(i)) return sC(1, e, i, !o.isAtEnd(), !1);
    var a = o.getNode(!0);
    if (Wc(a)) return sC(1, e, a, !1, !1);
    var u = e.dom.getParent(o.getNode(), function (e) {
      return uC(e) || aC(e);
    });
    return Wc(u) ? sC(1, e, u, !1, n) : U.none();
  },
      fC = function fC(e, t, n) {
    return t.collapsed ? lC(e, t, n).getOr(t) : t;
  },
      dC = function dC(e) {
    return Np(e) || Cp(e);
  },
      mC = function mC(e) {
    return Ep(e) || wp(e);
  },
      pC = function pC(n, r, e, t, o, i) {
    var a, u;
    return sC(t, n, i.getNode(!o), o, !0).each(function (e) {
      var t;
      r.collapsed ? (t = r.cloneRange(), o ? t.setEnd(e.startContainer, e.startOffset) : t.setStart(e.endContainer, e.endOffset), t.deleteContents()) : r.deleteContents(), n.selection.setRng(e);
    }), a = n.dom, In(u = e) && 0 === u.data.length && a.remove(u), !0;
  },
      gC = function gC(e, t) {
    var n = e.selection.getRng();
    if (!In(n.commonAncestorContainer)) return !1;

    var r = t ? Vs.Forwards : Vs.Backwards,
        o = _l(e.getBody()),
        i = N(pl, t ? o.next : o.prev),
        a = t ? dC : mC,
        u = dl(r, e.getBody(), n),
        s = Ub(t, i(u));

    if (!s || !gl(u, s)) return !1;
    if (a(s)) return pC(e, n, u.getNode(), r, t, s);
    var c = i(s);
    return !!(c && a(c) && gl(s, c)) && pC(e, n, u.getNode(), r, t, c);
  },
      hC = Cr([{
    remove: ["element"]
  }, {
    moveToElement: ["element"]
  }, {
    moveToPosition: ["position"]
  }]),
      vC = function vC(e, t, n, r) {
    var o = r.getNode(!1 === t);
    return Hb(At.fromDom(e), At.fromDom(n.getNode())).map(function (e) {
      return $o(e) ? hC.remove(e.dom) : hC.moveToElement(o);
    }).orThunk(function () {
      return U.some(hC.moveToElement(o));
    });
  },
      yC = function yC(u, s, c) {
    return Ol(s, u, c).bind(function (e) {
      return a = e.getNode(), uo(At.fromDom(a)) || io(At.fromDom(a)) ? U.none() : (t = u, o = e, i = function i(e) {
        return to(At.fromDom(e)) && !ol(r, o, t);
      }, fl(!(n = s), r = c).fold(function () {
        return fl(n, o).fold(C, i);
      }, i) ? U.none() : s && Vn(e.getNode()) || !1 === s && Vn(e.getNode(!0)) ? vC(u, s, c, e) : s && Ep(c) || !1 === s && Np(c) ? U.some(hC.moveToPosition(e)) : U.none());
      var t, n, r, o, i, a;
    });
  },
      bC = function bC(r, e, o) {
    return i = e, a = o.getNode(!1 === i), u = i ? "after" : "before", An(a) && a.getAttribute("data-mce-caret") === u ? (t = e, n = o.getNode(!1 === e), (t && Vn(n.nextSibling) ? U.some(hC.moveToElement(n.nextSibling)) : !1 === t && Vn(n.previousSibling) ? U.some(hC.moveToElement(n.previousSibling)) : U.none()).fold(function () {
      return yC(r, e, o);
    }, U.some)) : yC(r, e, o).bind(function (e) {
      return t = r, n = o, e.fold(function (e) {
        return U.some(hC.remove(e));
      }, function (e) {
        return U.some(hC.moveToElement(e));
      }, function (e) {
        return ol(n, e, t) ? U.none() : U.some(hC.moveToPosition(e));
      });
      var t, n;
    });
    var t, n, i, a, u;
  },
      CC = function CC(e, t) {
    return U.from(id(e.getBody(), t));
  },
      wC = function wC(a, u) {
    var e = a.selection.getNode();
    return CC(a, e).filter(Vn).fold(function () {
      return e = a.getBody(), t = u, n = a.selection.getRng(), r = ll(t ? 1 : -1, e, n), o = $s.fromRangeStart(r), i = At.fromDom(e), (!1 === t && Ep(o) ? U.some(hC.remove(o.getNode(!0))) : t && Np(o) ? U.some(hC.remove(o.getNode())) : !1 === t && Np(o) && Vp(i, o) ? qp(i, o).map(function (e) {
        return hC.remove(e.getNode());
      }) : t && Ep(o) && Hp(i, o) ? $p(i, o).map(function (e) {
        return hC.remove(e.getNode());
      }) : bC(e, t, o)).exists(function (e) {
        return e.fold(function (e) {
          return o._selectionOverrides.hideFakeCaret(), Cg(o, i, At.fromDom(e)), !0;
        }, (r = i = u, function (e) {
          var t = r ? $s.before(e) : $s.after(e);
          return n.selection.setRng(t.toRange()), !0;
        }), (t = n = o = a, function (e) {
          return t.selection.setRng(e.toRange()), !0;
        }));
        var t, n, r, o, i;
      });
      var e, t, n, r, o, i;
    }, k);
  },
      xC = function xC(t, n) {
    var e = t.selection.getNode();
    return !!Vn(e) && CC(t, e.parentNode).filter(Vn).fold(function () {
      var e;
      return e = At.fromDom(t.getBody()), W(Gu(e, ".mce-offscreen-selection"), pn), Cg(t, n, At.fromDom(t.selection.getNode())), Vb(t), !0;
    }, function () {
      return !0;
    });
  },
      SC = function SC(e) {
    var t,
        n = e.dom,
        r = e.selection,
        o = id(e.getBody(), r.getNode());
    return Hn(o) && n.isBlock(o) && n.isEmpty(o) && (t = n.create("br", {
      "data-mce-bogus": "1"
    }), n.setHTML(o, ""), o.appendChild(t), r.setRng($s.before(t).toRange())), !0;
  },
      NC = function NC(e, t) {
    return (e.selection.isCollapsed() ? wC : xC)(e, t);
  },
      EC = function EC(e, t) {
    return !!e.selection.isCollapsed() && (n = e, r = t, o = $s.fromRangeStart(n.selection.getRng()), Ol(r, n.getBody(), o).filter(function (e) {
      return (r ? yp : bp)(e);
    }).bind(function (e) {
      return U.from(il(r ? 0 : -1, e));
    }).exists(function (e) {
      return n.selection.select(e), !0;
    }));
    var n, r, o;
  },
      kC = In,
      _C = function _C(e) {
    return kC(e) && e.data[0] === fo;
  },
      AC = function AC(e) {
    return kC(e) && e.data[e.data.length - 1] === fo;
  },
      RC = function RC(e) {
    return e.ownerDocument.createTextNode(fo);
  },
      TC = function TC(e, t) {
    return (e ? function (e) {
      if (kC(e.previousSibling)) return AC(e.previousSibling) || e.previousSibling.appendData(fo), e.previousSibling;
      if (kC(e)) return _C(e) || e.insertData(0, fo), e;
      var t = RC(e);
      return e.parentNode.insertBefore(t, e), t;
    } : function (e) {
      if (kC(e.nextSibling)) return _C(e.nextSibling) || e.nextSibling.insertData(0, fo), e.nextSibling;
      if (kC(e)) return AC(e) || e.appendData(fo), e;
      var t = RC(e);
      return e.nextSibling ? e.parentNode.insertBefore(t, e.nextSibling) : e.parentNode.appendChild(t), t;
    })(t);
  },
      DC = N(TC, !0),
      OC = N(TC, !1),
      BC = function BC(e, t) {
    return In(e.container()) ? TC(t, e.container()) : TC(t, e.getNode());
  },
      PC = function PC(e, t) {
    var n = t.get();
    return n && e.container() === n && yo(n);
  },
      LC = function LC(n, e) {
    return e.fold(function (e) {
      Fc(n.get());
      var t = DC(e);
      return n.set(t), U.some($s(t, t.length - 1));
    }, function (e) {
      return Fl(e).map(function (e) {
        if (PC(e, n)) return $s(n.get(), 1);
        Fc(n.get());
        var t = BC(e, !0);
        return n.set(t), $s(t, 1);
      });
    }, function (e) {
      return Ul(e).map(function (e) {
        if (PC(e, n)) return $s(n.get(), n.get().length - 1);
        Fc(n.get());
        var t = BC(e, !1);
        return n.set(t), $s(t, t.length - 1);
      });
    }, function (e) {
      Fc(n.get());
      var t = OC(e);
      return n.set(t), U.some($s(t, 1));
    });
  },
      IC = function IC(e, t) {
    for (var n = 0; n < e.length; n++) {
      var r = e[n].apply(null, t);
      if (r.isSome()) return r;
    }

    return U.none();
  },
      MC = Cr([{
    before: ["element"]
  }, {
    start: ["element"]
  }, {
    end: ["element"]
  }, {
    after: ["element"]
  }]),
      FC = function FC(e, t) {
    var n = rl(t, e);
    return n || e;
  },
      UC = function UC(e, t, n) {
    var r = zb(n),
        o = FC(t, r.container());
    return Fb(e, o, r).fold(function () {
      return Il(o, r).bind(N(Fb, e, o)).map(function (e) {
        return MC.before(e);
      });
    }, U.none);
  },
      zC = function zC(e, t) {
    return null === Hl(e, t);
  },
      jC = function jC(e, t, n) {
    return Fb(e, t, n).filter(N(zC, t));
  },
      HC = function HC(e, t, n) {
    var r = jb(n);
    return jC(e, t, r).bind(function (e) {
      return Ml(e, r).isNone() ? U.some(MC.start(e)) : U.none();
    });
  },
      VC = function VC(e, t, n) {
    var r = zb(n);
    return jC(e, t, r).bind(function (e) {
      return Il(e, r).isNone() ? U.some(MC.end(e)) : U.none();
    });
  },
      qC = function qC(e, t, n) {
    var r = jb(n),
        o = FC(t, r.container());
    return Fb(e, o, r).fold(function () {
      return Ml(o, r).bind(N(Fb, e, o)).map(function (e) {
        return MC.after(e);
      });
    }, U.none);
  },
      $C = function $C(e) {
    return !1 === Mb(KC(e));
  },
      WC = function WC(e, t, n) {
    return IC([UC, HC, VC, qC], [e, t, n]).filter($C);
  },
      KC = function KC(e) {
    return e.fold(o, o, o, o);
  },
      XC = function XC(e) {
    return e.fold(E("before"), E("start"), E("end"), E("after"));
  },
      YC = function YC(e) {
    return e.fold(MC.before, MC.before, MC.after, MC.after);
  },
      GC = function GC(e) {
    return e.fold(MC.start, MC.start, MC.end, MC.end);
  },
      JC = function JC(a, e, u, t, n, s) {
    return ds(Fb(e, u, t), Fb(e, u, n), function (e, t) {
      return e !== t && (r = t, o = rl(e, n = u), i = rl(r, n), o && o === i) ? MC.after(a ? e : t) : s;
      var n, r, o, i;
    }).getOr(s);
  },
      QC = function QC(e, r) {
    return e.fold(k, function (e) {
      return n = r, !(XC(t = e) === XC(n) && KC(t) === KC(n));
      var t, n;
    });
  },
      ZC = function ZC(e, t) {
    return e ? t.fold(a(U.some, MC.start), U.none, a(U.some, MC.after), U.none) : t.fold(U.none, a(U.some, MC.before), U.none, a(U.some, MC.end));
  },
      ew = function ew(e, a, u, s) {
    var t = Ub(e, s),
        c = WC(a, u, t);
    return WC(a, u, t).bind(N(ZC, e)).orThunk(function () {
      return n = a, r = u, o = c, i = Ub(t = e, s), Ol(t, r, i).map(N(Ub, t)).fold(function () {
        return o.map(YC);
      }, function (e) {
        return WC(n, r, e).map(N(JC, t, n, r, i, e)).filter(N(QC, o));
      }).filter($C);
      var t, n, r, o, i;
    });
  },
      tw = (N(ew, !1), N(ew, !0), function (e, t, n) {
    var r = e ? 1 : -1;
    return t.setRng($s(n.container(), n.offset() + r).toRange()), t.getSel().modify("move", e ? "forward" : "backward", "word"), !0;
  }),
      nw = function nw(e, t) {
    var n = t.selection.getRng(),
        r = e ? $s.fromRangeEnd(n) : $s.fromRangeStart(n);
    return !!T(t.selection.getSel().modify) && (e && wo(r) ? tw(!0, t.selection, r) : !(e || !xo(r)) && tw(!1, t.selection, r));
  },
      rw = function rw(e, t) {
    var n = e.dom.createRng();
    n.setStart(t.container(), t.offset()), n.setEnd(t.container(), t.offset()), e.selection.setRng(n);
  },
      ow = function ow(e, t) {
    e ? t.setAttribute("data-mce-selected", "inline-boundary") : t.removeAttribute("data-mce-selected");
  },
      iw = function iw(t, e, n) {
    return LC(e, n).map(function (e) {
      return rw(t, e), n;
    });
  },
      aw = function aw(e, t) {
    var n, r;
    e.selection.isCollapsed() && !0 !== e.composing && t.get() && (n = $s.fromRangeStart(e.selection.getRng()), $s.isTextPosition(n) && !1 === (wo(r = n) || xo(r)) && (rw(e, Mc(t.get(), n)), t.set(null)));
  },
      uw = function uw(e, t, n) {
    return !!_c(e) && (o = t, i = n, a = (r = e).getBody(), u = $s.fromRangeStart(r.selection.getRng()), s = N(Ib, r), ew(i, s, a, u).bind(function (e) {
      return iw(r, o, e);
    }).isSome());
    var r, o, i, a, u, s;
  },
      sw = function sw(e, t, n) {
    return !!_c(t) && nw(e, t);
  },
      cw = function cw(d) {
    var m = Ou(null),
        p = N(Ib, d);
    return d.on("NodeChange", function (e) {
      var n, r, o, t, i, a, u, s, c, l, f;
      !_c(d) || wt.browser.isIE() && e.initial || (a = p, u = d.dom, s = e.parents, c = z(Gu(At.fromDom(u.getRoot()), '*[data-mce-selected="inline-boundary"]'), function (e) {
        return e.dom;
      }), l = H(c, a), f = H(s, a), W(ee(l, f), N(ow, !1)), W(ee(f, l), N(ow, !0)), aw(d, m), n = p, r = d, o = m, t = e.parents, r.selection.isCollapsed() && (i = H(t, n), W(i, function (e) {
        var t = $s.fromRangeStart(r.selection.getRng());
        WC(n, r.getBody(), t).bind(function (e) {
          return iw(r, o, e);
        });
      })));
    }), m;
  },
      lw = N(sw, !0),
      fw = N(sw, !1),
      dw = function dw(t, n) {
    return function (e) {
      return LC(n, e).exists(function (e) {
        return rw(t, e), !0;
      });
    };
  },
      mw = function mw(r, o, i, a) {
    var u = r.getBody(),
        s = N(Ib, r);
    r.undoManager.ignore(function () {
      var e, t, n;
      r.selection.setRng((e = i, t = a, (n = document.createRange()).setStart(e.container(), e.offset()), n.setEnd(t.container(), t.offset()), n)), r.execCommand("Delete"), WC(s, u, $s.fromRangeStart(r.selection.getRng())).map(GC).map(dw(r, o));
    }), r.nodeChanged();
  },
      pw = function pw(n, r, i, o) {
    var e,
        t,
        a = (e = n.getBody(), t = o.container(), rl(t, e) || e),
        u = N(Ib, n),
        s = WC(u, a, o);
    return s.bind(function (e) {
      return i ? e.fold(E(U.some(GC(e))), U.none, E(U.some(YC(e))), U.none) : e.fold(U.none, E(U.some(YC(e))), U.none, E(U.some(GC(e))));
    }).map(dw(n, r)).getOrThunk(function () {
      var t = Bl(i, a, o),
          e = t.bind(function (e) {
        return WC(u, a, e);
      });
      return ds(s, e, function () {
        return Fb(u, a, o).exists(function (e) {
          return !!ds(Fl(o = e), Ul(o), function (e, t) {
            var n = Ub(!0, e),
                r = Ub(!1, t);
            return Il(o, n).forall(function (e) {
              return e.isEqual(r);
            });
          }).getOr(!0) && (Cg(n, i, At.fromDom(e)), !0);
          var o;
        });
      }).orThunk(function () {
        return e.bind(function (e) {
          return t.map(function (e) {
            return i ? mw(n, r, o, e) : mw(n, r, e, o), !0;
          });
        });
      }).getOr(!1);
    });
  },
      gw = function gw(e, t, n) {
    if (e.selection.isCollapsed() && _c(e)) {
      var r = $s.fromRangeStart(e.selection.getRng());
      return pw(e, t, n, r);
    }

    return !1;
  },
      hw = function hw(e) {
    return 1 === Gt(e).length;
  },
      vw = function vw(e, t, n, r) {
    var o,
        i,
        a,
        u,
        s,
        c = N(Nh, t),
        l = z(H(r, c), function (e) {
      return e.dom;
    });
    0 === l.length ? Cg(t, e, n) : (i = n.dom, a = l, u = vh(!1), s = wh(a, u.dom), sn(At.fromDom(i), u), pn(At.fromDom(i)), o = $s(s, 0), t.selection.setRng(o.toRange()));
  },
      yw = function yw(r, o) {
    var t,
        e = At.fromDom(r.getBody()),
        n = At.fromDom(r.selection.getStart()),
        s = H((t = Dp(n, e), G(t, eo).fold(E(t), function (e) {
      return t.slice(0, e);
    })), hw);
    return re(s).exists(function (e) {
      var t,
          i,
          a,
          u,
          n = $s.fromRangeStart(r.selection.getRng());
      return i = o, a = n, u = e.dom, !(!ds(Fl(u), Ul(u), function (e, t) {
        var n = Ub(!0, e),
            r = Ub(!1, t),
            o = Ub(!1, a);
        return i ? Il(u, o).exists(function (e) {
          return e.isEqual(r) && a.isEqual(n);
        }) : Ml(u, o).exists(function (e) {
          return e.isEqual(n) && a.isEqual(r);
        });
      }).getOr(!0) || jl((t = e).dom) && gh(t.dom)) && (vw(o, r, e, s), !0);
    });
  },
      bw = function bw(e, t) {
    return !!e.selection.isCollapsed() && yw(e, t);
  },
      Cw = function Cw(e, t, n) {
    return e._selectionOverrides.hideFakeCaret(), Cg(e, t, At.fromDom(n)), !0;
  },
      ww = function ww(e, t) {
    return e.selection.isCollapsed() ? (i = e, u = (a = t) ? Cp : wp, s = a ? Vs.Forwards : Vs.Backwards, c = dl(s, i.getBody(), i.selection.getRng()), u(c) ? Cw(i, a, c.getNode(!a)) : U.from(Ub(a, c)).filter(function (e) {
      return u(e) && gl(c, e);
    }).exists(function (e) {
      return Cw(i, a, e.getNode(!a));
    })) : (r = t, o = (n = e).selection.getNode(), !!$n(o) && Cw(n, r, o));
    var n, r, o, i, a, u, s, c;
  },
      xw = function xw(e) {
    var t = parseInt(e, 10);
    return isNaN(t) ? 0 : t;
  },
      Sw = function Sw(e, t) {
    return (e || "table" === Lt(t) ? "margin" : "padding") + ("rtl" === er(t, "direction") ? "-right" : "-left");
  },
      Nw = function Nw(e) {
    var r,
        t = kw(e);
    return !e.mode.isReadOnly() && (1 < t.length || (r = e, Q(t, function (e) {
      var t = Sw(Sc(r), e),
          n = nr(e, t).map(xw).getOr(0);
      return "false" !== r.dom.getContentEditable(e.dom) && 0 < n;
    })));
  },
      Ew = function Ew(e) {
    return oo(e) || io(e);
  },
      kw = function kw(e) {
    return H(z(e.selection.getSelectedBlocks(), At.fromDom), function (e) {
      return !Ew(e) && !$t(e).map(Ew).getOr(!1) && Ar(e, function (e) {
        return Hn(e.dom) || Vn(e.dom);
      }).exists(function (e) {
        return Hn(e.dom);
      });
    });
  },
      _w = function _w(e, c) {
    var l = e.dom,
        t = e.selection,
        n = e.formatter,
        r = e.getParam("indentation", "40px", "string"),
        f = /[a-z%]+$/i.exec(r)[0],
        d = parseInt(r, 10),
        m = Sc(e),
        o = vc(e);
    e.queryCommandState("InsertUnorderedList") || e.queryCommandState("InsertOrderedList") || "" !== o || l.getParent(t.getNode(), l.isBlock) || n.apply("div"), W(kw(e), function (e) {
      var t, n, r, o, i, a, u, s;
      t = l, n = c, r = m, o = d, i = f, a = e.dom, s = Sw(r, At.fromDom(a)), "outdent" === n ? (u = Math.max(0, xw(a.style[s]) - o), t.setStyle(a, s, u ? u + i : "")) : (u = xw(a.style[s]) + o + i, t.setStyle(a, s, u));
    });
  },
      Aw = function Aw(e, t) {
    if (e.selection.isCollapsed() && Nw(e)) {
      var n = e.dom,
          r = e.selection.getRng(),
          o = $s.fromRangeStart(r),
          i = n.getParent(r.startContainer, n.isBlock);
      if (null !== i && Ip(At.fromDom(i), o)) return _w(e, "outdent"), !0;
    }

    return !1;
  },
      Rw = function Rw(e, t) {
    e.getDoc().execCommand(t, !1, null);
  },
      Tw = function Tw(n, r) {
    n.addCommand("delete", function () {
      var e, t;
      t = r, Aw(e = n) || NC(e, !1) || gC(e, !1) || gw(e, t, !1) || tC(e, !1) || Kg(e) || EC(e, !1) || ww(e, !1) || iC(e) || bw(e, !1) || (Rw(e, "Delete"), Vb(e));
    }), n.addCommand("forwardDelete", function () {
      var e, t;
      t = r, NC(e = n, !0) || gC(e, !0) || gw(e, t, !0) || tC(e, !0) || Kg(e) || EC(e, !0) || ww(e, !0) || iC(e) || bw(e, !0) || Rw(e, "ForwardDelete");
    });
  },
      Dw = function Dw(e) {
    return e.touches === undefined || 1 !== e.touches.length ? U.none() : U.some(e.touches[0]);
  },
      Ow = function Ow(a) {
    var u = Ou(U.none()),
        s = Ou(!1),
        r = ju(function (e) {
      a.fire("longpress", _ke(_ke({}, e), {
        type: "longpress"
      })), s.set(!0);
    }, 400);
    a.on("touchstart", function (n) {
      Dw(n).each(function (e) {
        r.cancel();
        var t = {
          x: e.clientX,
          y: e.clientY,
          target: n.target
        };
        r.throttle(n), s.set(!1), u.set(U.some(t));
      });
    }, !0), a.on("touchmove", function (e) {
      r.cancel(), Dw(e).each(function (i) {
        u.get().each(function (e) {
          var t, n, r, o;
          t = i, n = e, r = Math.abs(t.clientX - n.x), o = Math.abs(t.clientY - n.y), (5 < r || 5 < o) && (u.set(U.none()), s.set(!1), a.fire("longpresscancel"));
        });
      });
    }, !0), a.on("touchend touchcancel", function (t) {
      r.cancel(), "touchcancel" !== t.type && u.get().filter(function (e) {
        return e.target.isEqualNode(t.target);
      }).each(function () {
        s.get() ? t.preventDefault() : a.fire("tap", _ke(_ke({}, t), {
          type: "tap"
        }));
      });
    }, !0);
  },
      Bw = function Bw(e, t) {
    return e.hasOwnProperty(t.nodeName);
  },
      Pw = function Pw(e) {
    var t,
        n,
        r,
        o = e.dom,
        i = e.selection,
        a = e.schema,
        u = a.getBlockElements(),
        s = i.getStart(),
        c = e.getBody(),
        l = vc(e);

    if (s && An(s) && l) {
      var f = c.nodeName.toLowerCase();

      if (a.isValidChild(f, l.toLowerCase()) && (d = u, m = c, p = s, !F(Tp(At.fromDom(p), At.fromDom(m)), function (e) {
        return Bw(d, e.dom);
      }))) {
        for (var d, m, p, g, h, v = i.getRng(), y = v.startContainer, b = v.startOffset, C = v.endContainer, w = v.endOffset, x = Em(e), s = c.firstChild; s;) {
          if (g = u, In(h = s) || An(h) && !Bw(g, h) && !Jl(h)) {
            if (function (e, t) {
              if (In(t)) {
                if (0 === t.nodeValue.length) return !0;
                if (/^\s+$/.test(t.nodeValue) && (!t.nextSibling || Bw(e, t.nextSibling))) return !0;
              }

              return !1;
            }(u, s)) {
              s = (n = s).nextSibling, o.remove(n);
              continue;
            }

            t || (t = o.create(l, yc(e)), s.parentNode.insertBefore(t, s), r = !0), s = (n = s).nextSibling, t.appendChild(n);
          } else t = null, s = s.nextSibling;
        }

        r && x && (v.setStart(y, b), v.setEnd(C, w), i.setRng(v), e.nodeChanged());
      }
    }
  },
      Lw = function Lw(e, t) {
    var n;
    t.hasAttribute("data-mce-caret") && (ko(t), (n = e).selection.setRng(n.selection.getRng()), e.selection.scrollIntoView(t));
  },
      Iw = function Iw(e, t) {
    var n,
        r = (n = e, Dr(At.fromDom(n.getBody()), "*[data-mce-caret]").fold(E(null), function (e) {
      return e.dom;
    }));
    if (r) return "compositionstart" === t.type ? (t.preventDefault(), t.stopPropagation(), void Lw(e, r)) : void (Co(r) && (Lw(e, r), e.undoManager.add()));
  };

  (wb = Cb = Cb || {})[wb.Br = 0] = "Br", wb[wb.Block = 1] = "Block", wb[wb.Wrap = 2] = "Wrap", wb[wb.Eol = 3] = "Eol";

  var Mw,
      Fw,
      Uw = function Uw(e, t) {
    return e === Vs.Backwards ? Z(t) : t;
  },
      zw = function zw(e, t, n, r) {
    for (var o, i, a, u, s, c, l = _l(n), f = r, d = []; f && (s = l, c = f, o = t === Vs.Forwards ? s.next(c) : s.prev(c));) {
      if (zn(o.getNode(!1))) return t === Vs.Forwards ? {
        positions: Uw(t, d).concat([o]),
        breakType: Cb.Br,
        breakAt: U.some(o)
      } : {
        positions: Uw(t, d),
        breakType: Cb.Br,
        breakAt: U.some(o)
      };

      if (o.isVisible()) {
        if (e(f, o)) {
          var m = (i = t, a = f, zn((u = o).getNode(i === Vs.Forwards)) ? Cb.Br : !1 === ol(a, u) ? Cb.Block : Cb.Wrap);
          return {
            positions: Uw(t, d),
            breakType: m,
            breakAt: U.some(o)
          };
        }

        d.push(o), f = o;
      } else f = o;
    }

    return {
      positions: Uw(t, d),
      breakType: Cb.Eol,
      breakAt: U.none()
    };
  },
      jw = function jw(n, r, o, e) {
    return r(o, e).breakAt.map(function (e) {
      var t = r(o, e).positions;
      return n === Vs.Backwards ? t.concat(e) : [e].concat(t);
    }).getOr([]);
  },
      Hw = function Hw(e, i) {
    return X(e, function (e, o) {
      return e.fold(function () {
        return U.some(o);
      }, function (r) {
        return ds(ne(r.getClientRects()), ne(o.getClientRects()), function (e, t) {
          var n = Math.abs(i - e.left);
          return Math.abs(i - t.left) <= n ? o : r;
        }).or(e);
      });
    }, U.none());
  },
      Vw = function Vw(t, e) {
    return ne(e.getClientRects()).bind(function (e) {
      return Hw(t, e.left);
    });
  },
      qw = N(zw, Hs.isAbove, -1),
      $w = N(zw, Hs.isBelow, 1),
      Ww = N(jw, -1, qw),
      Kw = N(jw, 1, $w),
      Xw = function Xw(t) {
    var e = function e(_e9) {
      return z(_e9, function (e) {
        return (e = ps(e)).node = t, e;
      });
    };

    if (An(t)) return e(t.getClientRects());

    if (In(t)) {
      var n = t.ownerDocument.createRange();
      return n.setStart(t, 0), n.setEnd(t, t.data.length), e(n.getClientRects());
    }
  },
      Yw = function Yw(e) {
    return J(e, Xw);
  };

  (Fw = Mw = Mw || {})[Fw.Up = -1] = "Up", Fw[Fw.Down = 1] = "Down";

  var Gw = function Gw(o, i, a, e, u, t) {
    var s = 0,
        c = [],
        n = function n(e) {
      var t,
          n,
          r = Yw([e]);

      for (-1 === o && (r = r.reverse()), t = 0; t < r.length; t++) {
        if (n = r[t], !a(n, l)) {
          if (0 < c.length && i(n, Ee(c)) && s++, n.line = s, u(n)) return !0;
          c.push(n);
        }
      }
    },
        l = Ee(t.getClientRects());

    if (!l) return c;
    var r = t.getNode();
    return n(r), function (e, t, n, r) {
      for (; r = nl(r, e, Mo, t);) {
        if (n(r)) return;
      }
    }(o, e, n, r), c;
  },
      Jw = N(Gw, Mw.Up, vs, ys),
      Qw = N(Gw, Mw.Down, ys, vs),
      Zw = function Zw(n) {
    return function (e) {
      return t = n, e.line > t;
      var t;
    };
  },
      ex = function ex(n) {
    return function (e) {
      return t = n, e.line === t;
      var t;
    };
  },
      tx = Vn,
      nx = nl,
      rx = function rx(e, t) {
    return Math.abs(e.left - t);
  },
      ox = function ox(e, t) {
    return Math.abs(e.right - t);
  },
      ix = function ix(e, t) {
    return e >= t.left && e <= t.right;
  },
      ax = function ax(e, t) {
    return e >= t.top && e <= t.bottom;
  },
      ux = function ux(e, o) {
    return Se(e, function (e, t) {
      var n = Math.min(rx(e, o), ox(e, o)),
          r = Math.min(rx(t, o), ox(t, o));
      return ix(o, t) || !ix(o, e) && (r === n && tx(t.node) || r < n) ? t : e;
    });
  },
      sx = function sx(e, t, n, r, o) {
    var i = nx(r, e, Mo, t, !o);

    do {
      if (!i || n(i)) return;
    } while (i = nx(i, e, Mo, t));
  },
      cx = function cx(e, t, n) {
    var r,
        o,
        i = Yw(H(oe(e.getElementsByTagName("*")), Kc)),
        a = H(i, N(ax, n));

    if (u = ux(a, t)) {
      var u,
          s = !Bn(u.node) && !$n(u.node);
      if ((u = ux(function (e, r, t) {
        void 0 === t && (t = !0);

        var o = [],
            n = function n(t, e) {
          var n = H(Yw([e]), function (e) {
            return !t(e, r);
          });
          return o = o.concat(n), 0 === n.length;
        };

        return o.push(r), sx(Mw.Up, e, N(n, vs), r.node, t), sx(Mw.Down, e, N(n, ys), r.node, t), o;
      }(e, u, s), t)) && Kc(u.node)) return o = t, {
        node: (r = u).node,
        before: rx(r, o) < ox(r, o)
      };
    }

    return null;
  },
      lx = function lx(e, t) {
    e.selection.setRng(t), Xd(e, e.selection.getRng());
  },
      fx = function fx(e, t, n) {
    return U.some(fC(e, t, n));
  },
      dx = function dx(e, t, n, r, o, i) {
    var a = t === Vs.Forwards,
        u = _l(e.getBody()),
        s = N(pl, a ? u.next : u.prev),
        c = a ? r : o;

    if (!n.collapsed) {
      var l = Cs(n);
      if (i(l)) return sC(t, e, l, t === Vs.Backwards, !1);
    }

    var f = dl(t, e.getBody(), n);
    if (c(f)) return cC(e, f.getNode(!a));
    var d = Ub(a, s(f)),
        m = vo(n.startContainer);
    if (!d) return m ? U.some(n) : U.none();
    if (c(d)) return sC(t, e, d.getNode(!a), a, !1);
    var p = s(d);
    return p && c(p) && gl(d, p) ? sC(t, e, p.getNode(!a), a, !1) : m ? fx(e, d.toRange(), !1) : U.none();
  },
      mx = function mx(t, e, n, r, o, i) {
    var a = dl(e, t.getBody(), n),
        u = Ee(a.getClientRects()),
        s = e === Mw.Down;
    if (!u) return U.none();
    var c,
        l = (s ? Qw : Jw)(t.getBody(), Zw(1), a),
        f = H(l, ex(1)),
        d = u.left,
        m = ux(f, d);

    if (m && i(m.node)) {
      var p = Math.abs(d - m.left),
          g = Math.abs(d - m.right);
      return sC(e, t, m.node, p < g, !1);
    }

    if (c = r(a) ? a.getNode() : o(a) ? a.getNode(!0) : Cs(n)) {
      var h = function (e, t, n, r) {
        var o,
            i,
            a,
            u,
            s = _l(t),
            c = [],
            l = 0,
            f = function f(e) {
          return Ee(e.getClientRects());
        },
            d = 1 === e ? (o = s.next, i = ys, a = vs, $s.after(r)) : (o = s.prev, i = vs, a = ys, $s.before(r)),
            m = f(d);

        do {
          if (d.isVisible() && !a(u = f(d), m)) {
            if (0 < c.length && i(u, Ee(c)) && l++, (u = ps(u)).position = d, u.line = l, n(u)) return c;
            c.push(u);
          }
        } while (d = o(d));

        return c;
      }(e, t.getBody(), Zw(1), c),
          v = ux(H(h, ex(1)), d);

      if (v) return fx(t, v.position.toRange(), !1);
      if (v = Ee(H(h, ex(0)))) return fx(t, v.position.toRange(), !1);
    }

    return 0 === f.length ? px(t, s).filter(s ? o : r).map(function (e) {
      return fC(t, e.toRange(), !1);
    }) : U.none();
  },
      px = function px(e, t) {
    var n = e.selection.getRng(),
        r = e.getBody();

    if (t) {
      var o = $s.fromRangeEnd(n),
          i = $w(r, o);
      return re(i.positions);
    }

    o = $s.fromRangeStart(n), i = qw(r, o);
    return ne(i.positions);
  },
      gx = function gx(t, e, n) {
    return px(t, e).filter(n).exists(function (e) {
      return t.selection.setRng(e.toRange()), !0;
    });
  },
      hx = Vn,
      vx = function vx(e, t, n) {
    var r,
        o,
        i = _l(e.getBody()),
        a = N(pl, 1 === t ? i.next : i.prev);

    if (n.collapsed && "" !== vc(e)) {
      var u,
          s = e.dom.getParent(n.startContainer, "PRE");
      if (!s) return;
      a($s.fromRangeStart(n)) || (o = (r = e).dom.create(vc(r)), (!wt.ie || 11 <= wt.ie) && (o.innerHTML = '<br data-mce-bogus="1">'), u = o, 1 === t ? e.$(s).after(u) : e.$(s).before(u), e.selection.select(u, !0), e.selection.collapse());
    }
  },
      yx = function yx(e, t) {
    var n = t ? Vs.Forwards : Vs.Backwards,
        r = e.selection.getRng();
    return dx(e, n, r, Np, Ep, hx).orThunk(function () {
      return vx(e, n, r), U.none();
    });
  },
      bx = function bx(e, t) {
    var n = t ? 1 : -1,
        r = e.selection.getRng();
    return mx(e, n, r, function (e) {
      return Np(e) || xp(e);
    }, function (e) {
      return Ep(e) || Sp(e);
    }, hx).orThunk(function () {
      return vx(e, n, r), U.none();
    });
  },
      Cx = function Cx(t, e) {
    return yx(t, e).exists(function (e) {
      return lx(t, e), !0;
    });
  },
      wx = function wx(t, e) {
    return bx(t, e).exists(function (e) {
      return lx(t, e), !0;
    });
  },
      xx = function xx(e, t) {
    return gx(e, t, t ? Ep : Np);
  },
      Sx = function Sx(e) {
    return M(["figcaption"], Lt(e));
  },
      Nx = function Nx(e) {
    var t = document.createRange();
    return t.setStartBefore(e.dom), t.setEndBefore(e.dom), t;
  },
      Ex = function Ex(e, t, n) {
    (n ? fn : ln)(e, t);
  },
      kx = function kx(e, t, n, r) {
    return "" === t ? (l = e, f = r, d = At.fromTag("br"), Ex(l, d, f), Nx(d)) : (o = e, i = r, a = t, u = n, s = At.fromTag(a), c = At.fromTag("br"), Yn(s, u), fn(s, c), Ex(o, s, i), Nx(c));
    var o, i, a, u, s, c, l, f, d;
  },
      _x = function _x(e, t, n) {
    return t ? (o = e.dom, $w(o, n).breakAt.isNone()) : (r = e.dom, qw(r, n).breakAt.isNone());
    var r, o;
  },
      Ax = function Ax(t, n) {
    var e,
        r,
        o = At.fromDom(t.getBody()),
        i = $s.fromRangeStart(t.selection.getRng()),
        a = vc(t),
        u = yc(t);
    return e = i, r = N(Ot, o), Ar(At.fromDom(e.container()), eo, r).filter(Sx).exists(function () {
      if (_x(o, n, i)) {
        var e = kx(o, a, u, n);
        return t.selection.setRng(e), !0;
      }

      return !1;
    });
  },
      Rx = function Rx(e, t) {
    return !!e.selection.isCollapsed() && Ax(e, t);
  },
      Tx = function Tx(e, r) {
    return J(z(e, function (e) {
      return _ke({
        shiftKey: !1,
        altKey: !1,
        ctrlKey: !1,
        metaKey: !1,
        keyCode: 0,
        action: V
      }, e);
    }), function (e) {
      return t = e, (n = r).keyCode === t.keyCode && n.shiftKey === t.shiftKey && n.altKey === t.altKey && n.ctrlKey === t.ctrlKey && n.metaKey === t.metaKey ? [e] : [];
      var t, n;
    });
  },
      Dx = function Dx(e) {
    for (var t = [], n = 1; n < arguments.length; n++) {
      t[n - 1] = arguments[n];
    }

    return function () {
      return e.apply(null, t);
    };
  },
      Ox = function Ox(e, t) {
    return Y(Tx(e, t), function (e) {
      return e.action();
    });
  },
      Bx = function Bx(t, e) {
    var n = e ? Vs.Forwards : Vs.Backwards,
        r = t.selection.getRng();
    return dx(t, n, r, Cp, wp, $n).exists(function (e) {
      return lx(t, e), !0;
    });
  },
      Px = function Px(t, e) {
    var n = e ? 1 : -1,
        r = t.selection.getRng();
    return mx(t, n, r, Cp, wp, $n).exists(function (e) {
      return lx(t, e), !0;
    });
  },
      Lx = function Lx(e, t) {
    return gx(e, t, t ? wp : Cp);
  },
      Ix = function Ix(o, e) {
    return J(e, function (e) {
      var t,
          n,
          r = (t = ps(e.getBoundingClientRect()), n = -1, {
        left: t.left - n,
        top: t.top - n,
        right: t.right + 2 * n,
        bottom: t.bottom + 2 * n,
        width: t.width + n,
        height: t.height + n
      });
      return [{
        x: r.left,
        y: o(r),
        cell: e
      }, {
        x: r.right,
        y: o(r),
        cell: e
      }];
    });
  },
      Mx = function Mx(e, t, n, r, o) {
    var i,
        a,
        u = Gu(At.fromDom(n), "td,th,caption").map(function (e) {
      return e.dom;
    }),
        s = H(Ix(e, u), function (e) {
      return t(e, o);
    });
    return i = r, a = o, X(s, function (e, r) {
      return e.fold(function () {
        return U.some(r);
      }, function (e) {
        var t = Math.sqrt(Math.abs(e.x - i) + Math.abs(e.y - a)),
            n = Math.sqrt(Math.abs(r.x - i) + Math.abs(r.y - a));
        return U.some(n < t ? r : e);
      });
    }, U.none()).map(function (e) {
      return e.cell;
    });
  },
      Fx = N(Mx, function (e) {
    return e.bottom;
  }, function (e, t) {
    return e.y < t;
  }),
      Ux = N(Mx, function (e) {
    return e.top;
  }, function (e, t) {
    return e.y > t;
  }),
      zx = function zx(t, n) {
    return ne(n.getClientRects()).bind(function (e) {
      return Fx(t, e.left, e.top);
    }).bind(function (e) {
      return Vw(Ul(t = e).map(function (e) {
        return qw(t, e).positions.concat(e);
      }).getOr([]), n);
      var t;
    });
  },
      jx = function jx(t, n) {
    return re(n.getClientRects()).bind(function (e) {
      return Ux(t, e.left, e.top);
    }).bind(function (e) {
      return Vw(Fl(t = e).map(function (e) {
        return [e].concat($w(t, e).positions);
      }).getOr([]), n);
      var t;
    });
  },
      Hx = function Hx(e, t, n) {
    var r,
        o,
        i,
        a,
        u = e(t, n);
    return (a = u).breakType === Cb.Wrap && 0 === a.positions.length || !zn(n.getNode()) && (i = u).breakType === Cb.Br && 1 === i.positions.length ? (r = e, o = t, !u.breakAt.exists(function (e) {
      return r(o, e).breakAt.isSome();
    })) : u.breakAt.isNone();
  },
      Vx = N(Hx, qw),
      qx = N(Hx, $w),
      $x = function $x(t, e, n, r) {
    var o,
        i,
        a,
        u,
        s = t.selection.getRng(),
        c = e ? 1 : -1;
    return !(!$c() || (o = e, i = s, a = n, u = $s.fromRangeStart(i), !Ll(!o, a).exists(function (e) {
      return e.isEqual(u);
    }))) && (sC(c, t, n, !e, !1).each(function (e) {
      lx(t, e);
    }), !0);
  },
      Wx = function Wx(e, t) {
    var n = t.getNode(e);
    return An(n) && "TABLE" === n.nodeName ? U.some(n) : U.none();
  },
      Kx = function Kx(u, s, c) {
    var e = Wx(!!s, c),
        t = !1 === s;
    e.fold(function () {
      return lx(u, c.toRange());
    }, function (a) {
      return Ll(t, u.getBody()).filter(function (e) {
        return e.isEqual(c);
      }).fold(function () {
        return lx(u, c.toRange());
      }, function (e) {
        return n = s, o = a, t = c, void ((i = vc(r = u)) ? r.undoManager.transact(function () {
          var e = At.fromTag(i);
          Yn(e, yc(r)), fn(e, At.fromTag("br")), (n ? cn : sn)(At.fromDom(o), e);
          var t = r.dom.createRng();
          t.setStart(e.dom, 0), t.setEnd(e.dom, 0), lx(r, t);
        }) : lx(r, t.toRange()));
        var n, r, o, t, i;
      });
    });
  },
      Xx = function Xx(e, t, n, r) {
    var o,
        i,
        a,
        u,
        s,
        c,
        l = e.selection.getRng(),
        f = $s.fromRangeStart(l),
        d = e.getBody();

    if (!t && Vx(r, f)) {
      var m = (u = d, zx(s = n, c = f).orThunk(function () {
        return ne(c.getClientRects()).bind(function (e) {
          return Hw(Ww(u, $s.before(s)), e.left);
        });
      }).getOr($s.before(s)));
      return Kx(e, t, m), !0;
    }

    if (t && qx(r, f)) {
      m = (o = d, jx(i = n, a = f).orThunk(function () {
        return ne(a.getClientRects()).bind(function (e) {
          return Hw(Kw(o, $s.after(i)), e.left);
        });
      }).getOr($s.after(i)));
      return Kx(e, t, m), !0;
    }

    return !1;
  },
      Yx = function Yx(n, r, o) {
    return U.from(n.dom.getParent(n.selection.getNode(), "td,th")).bind(function (t) {
      return U.from(n.dom.getParent(t, "table")).map(function (e) {
        return o(n, r, e, t);
      });
    }).getOr(!1);
  },
      Gx = function Gx(e, t) {
    return Yx(e, t, $x);
  },
      Jx = function Jx(e, t) {
    return Yx(e, t, Xx);
  },
      Qx = function Qx(i, a) {
    i.on("keydown", function (e) {
      var t, n, r, o;
      !1 === e.isDefaultPrevented() && (t = i, n = a, r = e, o = dt().os, Ox([{
        keyCode: ud.RIGHT,
        action: Dx(Cx, t, !0)
      }, {
        keyCode: ud.LEFT,
        action: Dx(Cx, t, !1)
      }, {
        keyCode: ud.UP,
        action: Dx(wx, t, !1)
      }, {
        keyCode: ud.DOWN,
        action: Dx(wx, t, !0)
      }, {
        keyCode: ud.RIGHT,
        action: Dx(Gx, t, !0)
      }, {
        keyCode: ud.LEFT,
        action: Dx(Gx, t, !1)
      }, {
        keyCode: ud.UP,
        action: Dx(Jx, t, !1)
      }, {
        keyCode: ud.DOWN,
        action: Dx(Jx, t, !0)
      }, {
        keyCode: ud.RIGHT,
        action: Dx(Bx, t, !0)
      }, {
        keyCode: ud.LEFT,
        action: Dx(Bx, t, !1)
      }, {
        keyCode: ud.UP,
        action: Dx(Px, t, !1)
      }, {
        keyCode: ud.DOWN,
        action: Dx(Px, t, !0)
      }, {
        keyCode: ud.RIGHT,
        action: Dx(uw, t, n, !0)
      }, {
        keyCode: ud.LEFT,
        action: Dx(uw, t, n, !1)
      }, {
        keyCode: ud.RIGHT,
        ctrlKey: !o.isOSX(),
        altKey: o.isOSX(),
        action: Dx(lw, t, n)
      }, {
        keyCode: ud.LEFT,
        ctrlKey: !o.isOSX(),
        altKey: o.isOSX(),
        action: Dx(fw, t, n)
      }, {
        keyCode: ud.UP,
        action: Dx(Rx, t, !1)
      }, {
        keyCode: ud.DOWN,
        action: Dx(Rx, t, !0)
      }], r).each(function (e) {
        r.preventDefault();
      }));
    });
  },
      Zx = function Zx(o, i) {
    o.on("keydown", function (e) {
      var t, n, r;
      !1 === e.isDefaultPrevented() && (t = o, n = i, r = e, Ox([{
        keyCode: ud.BACKSPACE,
        action: Dx(Aw, t, !1)
      }, {
        keyCode: ud.BACKSPACE,
        action: Dx(NC, t, !1)
      }, {
        keyCode: ud.DELETE,
        action: Dx(NC, t, !0)
      }, {
        keyCode: ud.BACKSPACE,
        action: Dx(gC, t, !1)
      }, {
        keyCode: ud.DELETE,
        action: Dx(gC, t, !0)
      }, {
        keyCode: ud.BACKSPACE,
        action: Dx(gw, t, n, !1)
      }, {
        keyCode: ud.DELETE,
        action: Dx(gw, t, n, !0)
      }, {
        keyCode: ud.BACKSPACE,
        action: Dx(Kg, t, !1)
      }, {
        keyCode: ud.DELETE,
        action: Dx(Kg, t, !0)
      }, {
        keyCode: ud.BACKSPACE,
        action: Dx(EC, t, !1)
      }, {
        keyCode: ud.DELETE,
        action: Dx(EC, t, !0)
      }, {
        keyCode: ud.BACKSPACE,
        action: Dx(ww, t, !1)
      }, {
        keyCode: ud.DELETE,
        action: Dx(ww, t, !0)
      }, {
        keyCode: ud.BACKSPACE,
        action: Dx(iC, t, !1)
      }, {
        keyCode: ud.DELETE,
        action: Dx(iC, t, !0)
      }, {
        keyCode: ud.BACKSPACE,
        action: Dx(tC, t, !1)
      }, {
        keyCode: ud.DELETE,
        action: Dx(tC, t, !0)
      }, {
        keyCode: ud.BACKSPACE,
        action: Dx(bw, t, !1)
      }, {
        keyCode: ud.DELETE,
        action: Dx(bw, t, !0)
      }], r).each(function (e) {
        r.preventDefault();
      }));
    }), o.on("keyup", function (e) {
      var t, n;
      !1 === e.isDefaultPrevented() && (t = o, n = e, Ox([{
        keyCode: ud.BACKSPACE,
        action: Dx(SC, t)
      }, {
        keyCode: ud.DELETE,
        action: Dx(SC, t)
      }], n));
    });
  },
      eS = function eS(e, t) {
    var n,
        r,
        o = t,
        i = e.dom,
        a = e.schema.getMoveCaretBeforeOnEnterElements();

    if (t) {
      !/^(LI|DT|DD)$/.test(t.nodeName) || (r = function (e) {
        for (; e;) {
          if (1 === e.nodeType || 3 === e.nodeType && e.data && /[\r\n\s]/.test(e.data)) return e;
          e = e.nextSibling;
        }
      }(t.firstChild)) && /^(UL|OL|DL)$/.test(r.nodeName) && t.insertBefore(i.doc.createTextNode(lo), t.firstChild);
      var u = i.createRng();

      if (t.normalize(), t.hasChildNodes()) {
        for (var s = new Xr(t, t); n = s.current();) {
          if (In(n)) {
            u.setStart(n, 0), u.setEnd(n, 0);
            break;
          }

          if (a[n.nodeName.toLowerCase()]) {
            u.setStartBefore(n), u.setEndBefore(n);
            break;
          }

          o = n, n = s.next();
        }

        n || (u.setStart(o, 0), u.setEnd(o, 0));
      } else zn(t) ? t.nextSibling && i.isBlock(t.nextSibling) ? (u.setStartBefore(t), u.setEndBefore(t)) : (u.setStartAfter(t), u.setEndAfter(t)) : (u.setStart(t, 0), u.setEnd(t, 0));

      e.selection.setRng(u), Xd(e, u);
    }
  },
      tS = function tS(e) {
    return U.from(e.dom.getParent(e.selection.getStart(!0), e.dom.isBlock));
  },
      nS = function nS(e, t) {
    return e && e.parentNode && e.parentNode.nodeName === t;
  },
      rS = function rS(e) {
    return e && /^(OL|UL|LI)$/.test(e.nodeName);
  },
      oS = function oS(e) {
    var t = e.parentNode;
    return /^(LI|DT|DD)$/.test(t.nodeName) ? t : e;
  },
      iS = function iS(e, t, n) {
    for (var r = e[n ? "firstChild" : "lastChild"]; r && !An(r);) {
      r = r[n ? "nextSibling" : "previousSibling"];
    }

    return r === t;
  },
      aS = function aS(e, t, n, r, o) {
    var i,
        a,
        u,
        s,
        c,
        l,
        f = e.dom,
        d = e.selection.getRng();
    n !== e.getBody() && (rS(i = n) && rS(i.parentNode) && (o = "LI"), a = o ? t(o) : f.create("BR"), iS(n, r, !0) && iS(n, r, !1) ? nS(n, "LI") ? f.insertAfter(a, oS(n)) : f.replace(a, n) : iS(n, r, !0) ? nS(n, "LI") ? (f.insertAfter(a, oS(n)), a.appendChild(f.doc.createTextNode(" ")), a.appendChild(n)) : n.parentNode.insertBefore(a, n) : iS(n, r, !1) ? f.insertAfter(a, oS(n)) : (n = oS(n), (u = d.cloneRange()).setStartAfter(r), u.setEndAfter(n), s = u.extractContents(), "LI" === o && (l = "LI", (c = s).firstChild && c.firstChild.nodeName === l) ? (a = s.firstChild, f.insertAfter(s, n)) : (f.insertAfter(s, n), f.insertAfter(a, n))), f.remove(r), eS(e, a));
  },
      uS = function uS(e) {
    e.innerHTML = '<br data-mce-bogus="1">';
  },
      sS = function sS(e, t) {
    return e.nodeName === t || e.previousSibling && e.previousSibling.nodeName === t;
  },
      cS = function cS(e, t) {
    return t && e.isBlock(t) && !/^(TD|TH|CAPTION|FORM)$/.test(t.nodeName) && !/^(fixed|absolute)/i.test(t.style.position) && "true" !== e.getContentEditable(t);
  },
      lS = function lS(e, t, n) {
    return !1 === In(t) ? n : e ? 1 === n && t.data.charAt(n - 1) === fo ? 0 : n : n === t.data.length - 1 && t.data.charAt(n) === fo ? t.data.length : n;
  },
      fS = function fS(e, t) {
    for (var n, r = e.getRoot(), o = t; o !== r && "false" !== e.getContentEditable(o);) {
      "true" === e.getContentEditable(o) && (n = o), o = o.parentNode;
    }

    return o !== r ? n : r;
  },
      dS = function dS(e, t) {
    var n = vc(e);
    n && n.toLowerCase() === t.tagName.toLowerCase() && function (e, o, t) {
      var i = e.dom;
      U.from(t.style).map(i.parseStyle).each(function (e) {
        var t = rr(At.fromDom(o)),
            n = _ke(_ke({}, t), e);

        i.setStyles(o, n);
      });
      var n = U.from(t["class"]).map(function (e) {
        return e.split(/\s+/);
      }),
          r = U.from(o.className).map(function (e) {
        return H(e.split(/\s+/), function (e) {
          return "" !== e;
        });
      });
      ds(n, r, function (t, e) {
        var n = H(e, function (e) {
          return !M(t, e);
        }),
            r = _e(t, n);

        i.setAttrib(o, "class", r.join(" "));
      });
      var a = ["style", "class"],
          u = me(t, function (e, t) {
        return !M(a, t);
      });
      i.setAttribs(o, u);
    }(e, t, yc(e));
  },
      mS = function mS(a, e) {
    var t,
        u,
        i,
        s,
        n,
        r,
        o,
        c,
        l,
        f = a.dom,
        d = a.schema,
        m = d.getNonEmptyElements(),
        p = a.selection.getRng(),
        g = function g(e) {
      var t,
          n = u,
          r = d.getTextInlineElements(),
          o = e || "TABLE" === c || "HR" === c ? f.create(e || N) : s.cloneNode(!1),
          i = o;
      if (!1 === a.getParam("keep_styles", !0)) f.setAttrib(o, "style", null), f.setAttrib(o, "class", null);else do {
        if (r[n.nodeName]) {
          if (jl(n) || Jl(n)) continue;
          t = n.cloneNode(!1), f.setAttrib(t, "id", ""), o.hasChildNodes() ? t.appendChild(o.firstChild) : i = t, o.appendChild(t);
        }
      } while ((n = n.parentNode) && n !== E);
      return dS(a, o), uS(i), o;
    },
        h = function h(e) {
      var t,
          n,
          r = lS(e, u, i);
      if (In(u) && (e ? 0 < r : r < u.nodeValue.length)) return !1;
      if (u.parentNode === s && l && !e) return !0;
      if (e && An(u) && u === s.firstChild) return !0;
      if (sS(u, "TABLE") || sS(u, "HR")) return l && !e || !l && e;
      var o = new Xr(u, s);

      for (In(u) && (e && 0 === r ? o.prev() : e || r !== u.nodeValue.length || o.next()); t = o.current();) {
        if (An(t)) {
          if (!t.getAttribute("data-mce-bogus") && (n = t.nodeName.toLowerCase(), m[n] && "br" !== n)) return !1;
        } else if (In(t) && !Uo(t.nodeValue)) return !1;

        e ? o.prev() : o.next();
      }

      return !0;
    },
        v = function v() {
      n = /^(H[1-6]|PRE|FIGURE)$/.test(c) && "HGROUP" !== C ? g(N) : g(), a.getParam("end_container_on_empty_block", !1) && cS(f, o) && f.isEmpty(s) ? n = f.split(o, s) : f.insertAfter(n, s), eS(a, n);
    };

    yd(f, p).each(function (e) {
      p.setStart(e.startContainer, e.startOffset), p.setEnd(e.endContainer, e.endOffset);
    }), u = p.startContainer, i = p.startOffset, N = vc(a);
    var y = !(!e || !e.shiftKey),
        b = !(!e || !e.ctrlKey);
    An(u) && u.hasChildNodes() && (l = i > u.childNodes.length - 1, u = u.childNodes[Math.min(i, u.childNodes.length - 1)] || u, i = l && In(u) ? u.nodeValue.length : 0);
    var C,
        w,
        x,
        S,
        N,
        E = fS(f, u);
    E && ((N && !y || !N && y) && (u = function (e, t, n, r, o) {
      var i,
          a,
          u,
          s,
          c,
          l,
          f = t || "P",
          d = e.dom,
          m = fS(d, r),
          p = d.getParent(r, d.isBlock);

      if (!p || !cS(d, p)) {
        if (c = (p = p || m) === e.getBody() || (l = p) && /^(TD|TH|CAPTION)$/.test(l.nodeName) ? p.nodeName.toLowerCase() : p.parentNode.nodeName.toLowerCase(), !p.hasChildNodes()) return i = d.create(f), dS(e, i), p.appendChild(i), n.setStart(i, 0), n.setEnd(i, 0), i;

        for (u = r; u.parentNode !== p;) {
          u = u.parentNode;
        }

        for (; u && !d.isBlock(u);) {
          u = (a = u).previousSibling;
        }

        if (a && e.schema.isValidChild(c, f.toLowerCase())) {
          for (i = d.create(f), dS(e, i), a.parentNode.insertBefore(i, a), u = a; u && !d.isBlock(u);) {
            s = u.nextSibling, i.appendChild(u), u = s;
          }

          n.setStart(r, o), n.setEnd(r, o);
        }
      }

      return r;
    }(a, N, p, u, i)), s = f.getParent(u, f.isBlock), o = s ? f.getParent(s.parentNode, f.isBlock) : null, c = s ? s.nodeName.toUpperCase() : "", "LI" !== (C = o ? o.nodeName.toUpperCase() : "") || b || (o = (s = o).parentNode, c = C), /^(LI|DT|DD)$/.test(c) && f.isEmpty(s) ? aS(a, g, o, s, N) : N && s === a.getBody() || (N = N || "P", vo(s) ? (n = ko(s), f.isEmpty(s) && uS(s), dS(a, n), eS(a, n)) : h() ? v() : h(!0) ? (n = s.parentNode.insertBefore(g(), s), eS(a, sS(s, "HR") ? n : s)) : ((S = (x = p).cloneRange()).setStart(x.startContainer, lS(!0, x.startContainer, x.startOffset)), S.setEnd(x.endContainer, lS(!1, x.endContainer, x.endOffset)), (t = S.cloneRange()).setEndAfter(s), r = t.extractContents(), w = r, W(Yu(At.fromDom(w), Ut), function (e) {
      var t = e.dom;
      t.nodeValue = po(t.nodeValue);
    }), function (e) {
      for (; In(e) && (e.nodeValue = e.nodeValue.replace(/^[\r\n]+/, "")), e = e.firstChild;) {
        ;
      }
    }(r), n = r.firstChild, f.insertAfter(r, s), function (e, t, n) {
      var r,
          o,
          i,
          a = n,
          u = [];

      if (a) {
        for (; a = a.firstChild;) {
          if (e.isBlock(a)) return;
          An(a) && !t[a.nodeName.toLowerCase()] && u.push(a);
        }

        for (r = u.length; r--;) {
          !(a = u[r]).hasChildNodes() || a.firstChild === a.lastChild && "" === a.firstChild.nodeValue ? e.remove(a) : (o = e, (i = a) && "A" === i.nodeName && o.isEmpty(i) && e.remove(a));
        }
      }
    }(f, m, n), function (e, t) {
      t.normalize();
      var n = t.lastChild;
      n && !/^(left|right)$/gi.test(e.getStyle(n, "float", !0)) || e.add(t, "br");
    }(f, s), f.isEmpty(s) && uS(s), n.normalize(), f.isEmpty(n) ? (f.remove(n), v()) : (dS(a, n), eS(a, n))), f.setAttrib(n, "id", ""), a.fire("NewBlock", {
      newBlock: n
    })));
  },
      pS = function pS(e, t, n) {
    var r = e.create("span", {}, "&nbsp;");
    n.parentNode.insertBefore(r, n), t.scrollIntoView(r), e.remove(r);
  },
      gS = function gS(e, t, n, r) {
    var o = e.createRng();
    r ? (o.setStartBefore(n), o.setEndBefore(n)) : (o.setStartAfter(n), o.setEndAfter(n)), t.setRng(o);
  },
      hS = function hS(e, t) {
    var n,
        r,
        o = e.selection,
        i = e.dom,
        a = o.getRng();
    yd(i, a).each(function (e) {
      a.setStart(e.startContainer, e.startOffset), a.setEnd(e.endContainer, e.endOffset);
    });
    var u,
        s = a.startOffset,
        c = a.startContainer;
    1 === c.nodeType && c.hasChildNodes() && (u = s > c.childNodes.length - 1, c = c.childNodes[Math.min(s, c.childNodes.length - 1)] || c, s = u && 3 === c.nodeType ? c.nodeValue.length : 0);
    var l = i.getParent(c, i.isBlock),
        f = l ? i.getParent(l.parentNode, i.isBlock) : null,
        d = f ? f.nodeName.toUpperCase() : "",
        m = !(!t || !t.ctrlKey);
    "LI" !== d || m || (l = f), c && 3 === c.nodeType && s >= c.nodeValue.length && !function (e, t, n) {
      for (var r, o = new Xr(t, n), i = e.getNonEmptyElements(); r = o.next();) {
        if (i[r.nodeName.toLowerCase()] || 0 < r.length) return !0;
      }
    }(e.schema, c, l) && (n = i.create("br"), a.insertNode(n), a.setStartAfter(n), a.setEndAfter(n), r = !0), n = i.create("br"), Ks(i, a, n), pS(i, o, n), gS(i, o, n, r), e.undoManager.add();
  },
      vS = function vS(e, t) {
    var n = At.fromTag("br");
    sn(At.fromDom(t), n), e.undoManager.add();
  },
      yS = function yS(e, t) {
    bS(e.getBody(), t) || cn(At.fromDom(t), At.fromTag("br"));
    var n = At.fromTag("br");
    cn(At.fromDom(t), n), pS(e.dom, e.selection, n.dom), gS(e.dom, e.selection, n.dom, !1), e.undoManager.add();
  },
      bS = function bS(e, t) {
    return n = $s.after(t), !!zn(n.getNode()) || Il(e, $s.after(t)).map(function (e) {
      return zn(e.getNode());
    }).getOr(!1);
    var n;
  },
      CS = function CS(e) {
    return e && "A" === e.nodeName && "href" in e;
  },
      wS = function wS(e) {
    return e.fold(C, CS, CS, C);
  },
      xS = function xS(e, t) {
    t.fold(V, N(vS, e), N(yS, e), V);
  },
      SS = function SS(e, t) {
    var n,
        r,
        o,
        i = (r = N(Ib, n = e), o = $s.fromRangeStart(n.selection.getRng()), WC(r, n.getBody(), o).filter(wS));
    i.isSome() ? i.each(N(xS, e)) : hS(e, t);
  },
      NS = function NS(e, t) {
    return tS(e).filter(function (e) {
      return 0 < t.length && Tt(At.fromDom(e), t);
    }).isSome();
  },
      ES = Cr([{
    br: []
  }, {
    block: []
  }, {
    none: []
  }]),
      kS = function kS(e, t) {
    return NS(n = e, n.getParam("no_newline_selector", ""));
    var n;
  },
      _S = function _S(n) {
    return function (e, t) {
      return "" === vc(e) === n;
    };
  },
      AS = function AS(n) {
    return function (e, t) {
      return tS(e).filter(function (e) {
        return io(At.fromDom(e));
      }).isSome() === n;
    };
  },
      RS = function RS(n, r) {
    return function (e, t) {
      return tS(e).fold(E(""), function (e) {
        return e.nodeName.toUpperCase();
      }) === n.toUpperCase() === r;
    };
  },
      TS = function TS(e) {
    return RS("pre", e);
  },
      DS = function DS(n) {
    return function (e, t) {
      return e.getParam("br_in_pre", !0) === n;
    };
  },
      OS = function OS(e, t) {
    return NS(n = e, n.getParam("br_newline_selector", ".mce-toc h2,figcaption,caption"));
    var n;
  },
      BS = function BS(e, t) {
    return t;
  },
      PS = function PS(e) {
    var t = vc(e),
        n = function (e, t) {
      for (var n, r = e.getRoot(), o = t; o !== r && "false" !== e.getContentEditable(o);) {
        "true" === e.getContentEditable(o) && (n = o), o = o.parentNode;
      }

      return o !== r ? n : r;
    }(e.dom, e.selection.getStart());

    return n && e.schema.isValidChild(n.nodeName, t || "P");
  },
      LS = function LS(e, t) {
    return function (n, r) {
      return X(e, function (e, t) {
        return e && t(n, r);
      }, !0) ? U.some(t) : U.none();
    };
  },
      IS = function IS(e, t) {
    return IC([LS([kS], ES.none()), LS([RS("summary", !0)], ES.br()), LS([TS(!0), DS(!1), BS], ES.br()), LS([TS(!0), DS(!1)], ES.block()), LS([TS(!0), DS(!0), BS], ES.block()), LS([TS(!0), DS(!0)], ES.br()), LS([AS(!0), BS], ES.br()), LS([AS(!0)], ES.block()), LS([_S(!0), BS, PS], ES.block()), LS([_S(!0)], ES.br()), LS([OS], ES.br()), LS([_S(!1), BS], ES.br()), LS([PS], ES.block())], [e, !(!t || !t.shiftKey)]).getOr(ES.none());
  },
      MS = function MS(e, t) {
    IS(e, t).fold(function () {
      SS(e, t);
    }, function () {
      mS(e, t);
    }, V);
  },
      FS = function FS(o) {
    o.on("keydown", function (e) {
      var t, n, r;
      e.keyCode === ud.ENTER && (t = o, (n = e).isDefaultPrevented() || (n.preventDefault(), (r = t.undoManager).typing && (r.typing = !1, r.add()), t.undoManager.transact(function () {
        !1 === t.selection.isCollapsed() && t.execCommand("Delete"), MS(t, n);
      })));
    });
  },
      US = function US(r) {
    r.on("keydown", function (e) {
      var t, n;
      !1 === e.isDefaultPrevented() && (t = r, n = e, Ox([{
        keyCode: ud.END,
        action: Dx(xx, t, !0)
      }, {
        keyCode: ud.HOME,
        action: Dx(xx, t, !1)
      }, {
        keyCode: ud.END,
        action: Dx(Lx, t, !0)
      }, {
        keyCode: ud.HOME,
        action: Dx(Lx, t, !1)
      }], n).each(function (e) {
        n.preventDefault();
      }));
    });
  },
      zS = dt().browser,
      jS = function jS(t) {
    var e, n;
    e = t, n = zu(function () {
      e.composing || ig(e);
    }, 0), zS.isIE() && (e.on("keypress", function (e) {
      n.throttle();
    }), e.on("remove", function (e) {
      n.cancel();
    })), t.on("input", function (e) {
      !1 === e.isComposing && ig(t);
    });
  },
      HS = function HS(n, r) {
    var e = r.container(),
        t = r.offset();
    return In(e) ? (e.insertData(t, n), U.some(Hs(e, t + n.length))) : ml(r).map(function (e) {
      var t = At.fromText(n);
      return (r.isAtEnd() ? cn : sn)(e, t), Hs(t.dom, n.length);
    });
  },
      VS = N(HS, lo),
      qS = N(HS, " "),
      $S = function $S(r, o) {
    return function (e) {
      return t = r, (!Gp(n = e) && (Jp(t, n) || Xp(t, n) || Yp(t, n)) ? VS : qS)(o);
      var t, n;
    };
  },
      WS = function WS(e) {
    var t,
        n,
        r = $s.fromRangeStart(e.selection.getRng()),
        o = At.fromDom(e.getBody());

    if (e.selection.isCollapsed()) {
      var i = N(Ib, e),
          a = $s.fromRangeStart(e.selection.getRng());
      return WC(i, e.getBody(), a).bind((n = o, function (e) {
        return e.fold(function (e) {
          return Ml(n.dom, $s.before(e));
        }, function (e) {
          return Fl(e);
        }, function (e) {
          return Ul(e);
        }, function (e) {
          return Il(n.dom, $s.after(e));
        });
      })).bind($S(o, r)).exists((t = e, function (e) {
        return t.selection.setRng(e.toRange()), t.nodeChanged(), !0;
      }));
    }

    return !1;
  },
      KS = function KS(r) {
    r.on("keydown", function (e) {
      var t, n;
      !1 === e.isDefaultPrevented() && (t = r, n = e, Ox([{
        keyCode: ud.SPACEBAR,
        action: Dx(WS, t)
      }], n).each(function (e) {
        n.preventDefault();
      }));
    });
  },
      XS = function XS(e) {
    var t,
        n = cw(e);
    return (t = e).on("keyup compositionstart", N(Iw, t)), Qx(e, n), Zx(e, n), FS(e), KS(e), jS(e), US(e), n;
  },
      YS = (GS.prototype.nodeChanged = function (e) {
    var t,
        n,
        r,
        o = this.editor.selection;
    this.editor.initialized && o && !this.editor.getParam("disable_nodechange") && !this.editor.mode.isReadOnly() && (r = this.editor.getBody(), (t = o.getStart(!0) || r).ownerDocument === this.editor.getDoc() && this.editor.dom.isChildOf(t, r) || (t = r), n = [], this.editor.dom.getParent(t, function (e) {
      return e === r || void n.push(e);
    }), (e = e || {}).element = t, e.parents = n, this.editor.fire("NodeChange", e));
  }, GS.prototype.isSameElementPath = function (e) {
    var t,
        n = this.editor.$(e).parentsUntil(this.editor.getBody()).add(e);

    if (n.length === this.lastPath.length) {
      for (t = n.length; 0 <= t && n[t] === this.lastPath[t]; t--) {
        ;
      }

      if (-1 === t) return this.lastPath = n, !0;
    }

    return this.lastPath = n, !1;
  }, GS);

  function GS(r) {
    var o;
    this.lastPath = [], this.editor = r;
    var t = this;
    "onselectionchange" in r.getDoc() || r.on("NodeChange click mouseup keyup focus", function (e) {
      var t = r.selection.getRng(),
          n = {
        startContainer: t.startContainer,
        startOffset: t.startOffset,
        endContainer: t.endContainer,
        endOffset: t.endOffset
      };
      "nodechange" !== e.type && dd(n, o) || r.fire("SelectionChange"), o = n;
    }), r.on("contextmenu", function () {
      r.fire("SelectionChange");
    }), r.on("SelectionChange", function () {
      var e = r.selection.getStart(!0);
      !e || !wt.range && r.selection.isCollapsed() || Vf(r) && !t.isSameElementPath(e) && r.dom.isChildOf(e, r.getBody()) && r.nodeChanged({
        selectionChange: !0
      });
    }), r.on("mouseup", function (e) {
      !e.isDefaultPrevented() && Vf(r) && ("IMG" === r.selection.getNode().nodeName ? qr.setEditorTimeout(r, function () {
        r.nodeChanged();
      }) : r.nodeChanged());
    });
  }

  var JS = function JS(e) {
    var t, n;
    (t = e).on("click", function (e) {
      t.dom.getParent(e.target, "details") && e.preventDefault();
    }), (n = e).parser.addNodeFilter("details", function (e) {
      W(e, function (e) {
        e.attr("data-mce-open", e.attr("open")), e.attr("open", "open");
      });
    }), n.serializer.addNodeFilter("details", function (e) {
      W(e, function (e) {
        var t = e.attr("data-mce-open");
        e.attr("open", q(t) ? t : null), e.attr("data-mce-open", null);
      });
    });
  },
      QS = function QS(e) {
    return An(e) && ro(At.fromDom(e));
  },
      ZS = function ZS(a) {
    a.on("click", function (e) {
      var t, n, r, o, i;
      3 <= e.detail && (r = (t = a).selection.getRng(), o = Hs.fromRangeStart(r), i = Hs.fromRangeEnd(r), Hs.isElementPosition(o) && (n = o.container(), QS(n) && Fl(n).each(function (e) {
        return r.setStart(e.container(), e.offset());
      })), Hs.isElementPosition(i) && (n = o.container(), QS(n) && Ul(n).each(function (e) {
        return r.setEnd(e.container(), e.offset());
      })), t.selection.setRng(Yg(r)));
    });
  },
      eN = function eN(e) {
    var t = e.getBoundingClientRect(),
        n = e.ownerDocument,
        r = n.documentElement,
        o = n.defaultView;
    return {
      top: t.top + o.pageYOffset - r.clientTop,
      left: t.left + o.pageXOffset - r.clientLeft
    };
  },
      tN = function tN(e, t) {
    return n = (u = e).inline ? eN(u.getBody()) : {
      left: 0,
      top: 0
    }, a = (i = e).getBody(), r = i.inline ? {
      left: a.scrollLeft,
      top: a.scrollTop
    } : {
      left: 0,
      top: 0
    }, {
      pageX: (o = function (e, t) {
        if (t.target.ownerDocument === e.getDoc()) return {
          left: t.pageX,
          top: t.pageY
        };
        var n,
            r,
            o,
            i,
            a,
            u = eN(e.getContentAreaContainer()),
            s = (r = (n = e).getBody(), o = n.getDoc().documentElement, i = {
          left: r.scrollLeft,
          top: r.scrollTop
        }, a = {
          left: r.scrollLeft || o.scrollLeft,
          top: r.scrollTop || o.scrollTop
        }, n.inline ? i : a);
        return {
          left: t.pageX - u.left + s.left,
          top: t.pageY - u.top + s.top
        };
      }(e, t)).left - n.left + r.left,
      pageY: o.top - n.top + r.top
    };
    var n, r, o, i, a, u;
  },
      nN = Vn,
      rN = Hn,
      oN = function oN(e) {
    e && e.parentNode && e.parentNode.removeChild(e);
  },
      iN = function iN(u, s) {
    return function (e) {
      var t, n, r, o, i, a;
      0 === e.button && (t = Y(s.dom.getParents(e.target), function () {
        for (var n = [], e = 0; e < arguments.length; e++) {
          n[e] = arguments[e];
        }

        return function (e) {
          for (var t = 0; t < n.length; t++) {
            if (n[t](e)) return !0;
          }

          return !1;
        };
      }(nN, rN)).getOr(null), i = s.getBody(), nN(a = t) && a !== i && (n = s.dom.getPos(t), r = s.getBody(), o = s.getDoc().documentElement, u.set({
        element: t,
        dragging: !1,
        screenX: e.screenX,
        screenY: e.screenY,
        maxX: (s.inline ? r.scrollWidth : o.offsetWidth) - 2,
        maxY: (s.inline ? r.scrollHeight : o.offsetHeight) - 2,
        relX: e.pageX - n.x,
        relY: e.pageY - n.y,
        width: t.offsetWidth,
        height: t.offsetHeight,
        ghost: function (e, t, n, r) {
          var o = e.dom,
              i = t.cloneNode(!0);
          o.setStyles(i, {
            width: n,
            height: r
          }), o.setAttrib(i, "data-mce-selected", null);
          var a = o.create("div", {
            "class": "mce-drag-container",
            "data-mce-bogus": "all",
            unselectable: "on",
            contenteditable: "false"
          });
          return o.setStyles(a, {
            position: "absolute",
            opacity: .5,
            overflow: "hidden",
            border: 0,
            padding: 0,
            margin: 0,
            width: n,
            height: r
          }), o.setStyles(i, {
            margin: 0,
            boxSizing: "border-box"
          }), a.appendChild(i), a;
        }(s, t, t.offsetWidth, t.offsetHeight)
      })));
    };
  },
      aN = function aN(e, h) {
    var v = qr.throttle(function (e, t) {
      h._selectionOverrides.hideFakeCaret(), h.selection.placeCaretAt(e, t);
    }, 0);
    return h.on("remove", v.stop), function (g) {
      return e.on(function (e) {
        var t,
            n,
            r,
            o,
            i,
            a,
            u,
            s,
            c,
            l,
            f,
            d,
            m,
            p = Math.max(Math.abs(g.screenX - e.screenX), Math.abs(g.screenY - e.screenY));

        if (!e.dragging && 10 < p) {
          if (h.fire("dragstart", {
            target: e.element
          }).isDefaultPrevented()) return;
          e.dragging = !0, h.focus();
        }

        e.dragging && (d = e, t = {
          pageX: (m = tN(h, g)).pageX - d.relX,
          pageY: m.pageY + 5
        }, l = e.ghost, f = h.getBody(), l.parentNode !== f && f.appendChild(l), n = e.ghost, r = t, o = e.width, i = e.height, a = e.maxX, u = e.maxY, c = s = 0, n.style.left = r.pageX + "px", n.style.top = r.pageY + "px", r.pageX + o > a && (s = r.pageX + o - a), r.pageY + i > u && (c = r.pageY + i - u), n.style.width = o - s + "px", n.style.height = i - c + "px", v(g.clientX, g.clientY));
      });
    };
  },
      uN = function uN(e, l) {
    return function (c) {
      e.on(function (e) {
        var t, n, r, o, i, a, u, s;
        e.dragging && (u = (o = l).selection, s = u.getSel().getRangeAt(0).startContainer, i = 3 === s.nodeType ? s.parentNode : s, a = e.element, i === a || o.dom.isChildOf(i, a) || nN(i) || (n = e.element, (r = n.cloneNode(!0)).removeAttribute("data-mce-selected"), t = r, l.fire("drop", {
          clientX: c.clientX,
          clientY: c.clientY
        }).isDefaultPrevented() || l.undoManager.transact(function () {
          oN(e.element), l.insertContent(l.dom.getOuterHTML(t)), l._selectionOverrides.hideFakeCaret();
        })));
      }), sN(e);
    };
  },
      sN = function sN(e) {
    e.on(function (e) {
      oN(e.ghost);
    }), e.clear();
  },
      cN = function cN(e) {
    var t,
        n,
        r,
        o = (t = Ou(U.none()), {
      clear: function clear() {
        return t.set(U.none());
      },
      set: function set(e) {
        return t.set(U.some(e));
      },
      isSet: function isSet() {
        return t.get().isSome();
      },
      on: function on(e) {
        return t.get().each(e);
      }
    }),
        i = Eu.DOM,
        a = document,
        u = iN(o, e),
        s = aN(o, e),
        c = uN(o, e),
        l = (n = o, function () {
      n.on(function (e) {
        e.dragging && r.fire("dragend");
      }), sN(n);
    });
    (r = e).on("mousedown", u), e.on("mousemove", s), e.on("mouseup", c), i.bind(a, "mousemove", s), i.bind(a, "mouseup", l), e.on("remove", function () {
      i.unbind(a, "mousemove", s), i.unbind(a, "mouseup", l);
    });
  },
      lN = function lN(e) {
    var n, i, a, u, t;
    cN(e), (n = e).on("drop", function (e) {
      var t = "undefined" != typeof e.clientX ? n.getDoc().elementFromPoint(e.clientX, e.clientY) : null;
      !nN(t) && "false" !== n.dom.getContentEditableParent(t) || e.preventDefault();
    }), e.getParam("block_unsupported_drop", !0, "boolean") && (a = function a(e) {
      var t;
      e.defaultPrevented || (t = e.dataTransfer) && (M(t.types, "Files") || 0 < t.files.length) && (e.preventDefault(), "drop" === e.type && cb(i, "Dropped file type is not supported"));
    }, u = function u(e) {
      vm(i, e.target) && a(e);
    }, t = function t() {
      var t = Eu.DOM,
          n = i.dom,
          r = document,
          o = i.inline ? i.getBody() : i.getDoc(),
          e = ["drop", "dragover"];
      W(e, function (e) {
        t.bind(r, e, u), n.bind(o, e, a);
      }), i.on("remove", function () {
        W(e, function (e) {
          t.unbind(r, e, u), n.unbind(o, e, a);
        });
      });
    }, (i = e).on("init", function () {
      qr.setEditorTimeout(i, t, 0);
    }));
  },
      fN = Hn,
      dN = Vn,
      mN = function mN(e, t) {
    return id(e.getBody(), t);
  },
      pN = function pN(u) {
    var s,
        c = u.selection,
        l = u.dom,
        f = l.isBlock,
        d = u.getBody(),
        m = qc(u, d, f, function () {
      return Em(u);
    }),
        p = "sel-" + l.uniqueId(),
        i = "data-mce-selected",
        g = function g(e) {
      return e !== d && (dN(e) || $n(e)) && l.isChildOf(e, d);
    },
        h = function h(e) {
      e && c.setRng(e);
    },
        r = c.getRng,
        v = function v(e, t, n, r) {
      return void 0 === r && (r = !0), u.fire("ShowCaret", {
        target: t,
        direction: e,
        before: n
      }).isDefaultPrevented() ? null : (r && c.scrollIntoView(t, -1 === e), m.show(n, t));
    },
        t = function t(e) {
      return bo(e) || No(e) || Eo(e);
    },
        y = function y(e) {
      return t(e.startContainer) || t(e.endContainer);
    },
        b = function b(e) {
      var t = u.schema.getShortEndedElements(),
          n = l.createRng(),
          r = e.startContainer,
          o = e.startOffset,
          i = e.endContainer,
          a = e.endOffset;
      return he(t, r.nodeName.toLowerCase()) ? 0 === o ? n.setStartBefore(r) : n.setStartAfter(r) : n.setStart(r, o), he(t, i.nodeName.toLowerCase()) ? 0 === a ? n.setEndBefore(i) : n.setEndAfter(i) : n.setEnd(i, a), n;
    },
        C = function C(e) {
      var t = e.cloneNode(!0),
          n = u.fire("ObjectSelected", {
        target: e,
        targetClone: t
      });
      if (n.isDefaultPrevented()) return null;

      var r = function (e, t, n) {
        var r = u.$,
            o = Dr(At.fromDom(u.getBody()), "#" + p).fold(function () {
          return r([]);
        }, function (e) {
          return r([e.dom]);
        });
        0 === o.length && (o = r('<div data-mce-bogus="all" class="mce-offscreen-selection"></div>').attr("id", p)).appendTo(u.getBody());
        var i = l.createRng();
        t === n && wt.ie ? (o.empty().append('<p style="font-size: 0" data-mce-bogus="all">\xa0</p>').append(t), i.setStartAfter(o[0].firstChild.firstChild), i.setEndAfter(t)) : (o.empty().append(lo).append(t).append(lo), i.setStart(o[0].firstChild, 1), i.setEnd(o[0].lastChild, 0)), o.css({
          top: l.getPos(e, u.getBody()).y
        }), o[0].focus();
        var a = c.getSel();
        return a.removeAllRanges(), a.addRange(i), i;
      }(e, n.targetClone, t),
          o = At.fromDom(e);

      return W(Gu(At.fromDom(u.getBody()), "*[data-mce-selected]"), function (e) {
        Ot(o, e) || Qn(e, i);
      }), l.getAttrib(e, i) || e.setAttribute(i, "1"), s = e, S(), r;
    },
        w = function w(e, t) {
      if (!e) return null;

      if (e.collapsed) {
        if (!y(e)) {
          var n = t ? 1 : -1,
              r = dl(n, d, e),
              o = r.getNode(!t);
          if (Kc(o)) return v(n, o, !!t && !r.isAtEnd(), !1);
          var i = r.getNode(t);
          if (Kc(i)) return v(n, i, !t && !r.isAtEnd(), !1);
        }

        return null;
      }

      var a = e.startContainer,
          u = e.startOffset,
          s = e.endOffset;
      if (3 === a.nodeType && 0 === u && dN(a.parentNode) && (a = a.parentNode, u = l.nodeIndex(a), a = a.parentNode), 1 !== a.nodeType) return null;

      if (s === u + 1 && a === e.endContainer) {
        var c = a.childNodes[u];
        if (g(c)) return C(c);
      }

      return null;
    },
        x = function x() {
      s && s.removeAttribute(i), Dr(At.fromDom(u.getBody()), "#" + p).each(pn), s = null;
    },
        S = function S() {
      m.hide();
    };

    return wt.ceFalse && function () {
      u.on("mouseup", function (e) {
        var t = r();
        t.collapsed && nb(u, e.clientX, e.clientY) && lC(u, t, !1).each(h);
      }), u.on("click", function (e) {
        var t = mN(u, e.target);
        t && (dN(t) && (e.preventDefault(), u.focus()), fN(t) && l.isChildOf(t, c.getNode()) && x());
      }), u.on("blur NewBlock", x), u.on("ResizeWindow FullscreenStateChanged", m.reposition);

      var a = function a(e) {
        var t = _l(e);

        if (!e.firstChild) return !1;
        var n,
            r = $s.before(e.firstChild),
            o = t.next(r);
        return o && !(Np(n = o) || Ep(n) || Cp(n) || wp(n));
      },
          i = function i(e, t) {
        var n,
            r,
            o = l.getParent(e, f),
            i = l.getParent(t, f);
        return !(!o || e === i || !l.isChildOf(o, i) || !1 !== dN(mN(u, o))) || o && (n = o, r = i, !(l.getParent(n, f) === l.getParent(r, f))) && a(o);
      };

      u.on("tap", function (e) {
        var t = e.target,
            n = mN(u, t);
        dN(n) ? (e.preventDefault(), cC(u, n).each(w)) : g(t) && cC(u, t).each(w);
      }, !0), u.on("mousedown", function (e) {
        var t,
            n,
            r,
            o = e.target;
        o !== d && "HTML" !== o.nodeName && !l.isChildOf(o, d) || !1 === nb(u, e.clientX, e.clientY) || ((t = mN(u, o)) ? dN(t) ? (e.preventDefault(), cC(u, t).each(w)) : (x(), fN(t) && e.shiftKey || ad(e.clientX, e.clientY, c.getRng()) || (S(), c.placeCaretAt(e.clientX, e.clientY))) : g(o) ? cC(u, o).each(w) : !1 === Kc(o) && (x(), S(), (n = cx(d, e.clientX, e.clientY)) && (i(o, n.node) || (e.preventDefault(), r = v(1, n.node, n.before, !1), u.getBody().focus(), h(r)))));
      }), u.on("keypress", function (e) {
        ud.modifierPressed(e) || dN(c.getNode()) && e.preventDefault();
      }), u.on("GetSelectionRange", function (e) {
        var t = e.range;

        if (s) {
          if (!s.parentNode) return void (s = null);
          (t = t.cloneRange()).selectNode(s), e.range = t;
        }
      }), u.on("SetSelectionRange", function (e) {
        e.range = b(e.range);
        var t = w(e.range, e.forward);
        t && (e.range = t);
      });
      var n, e, o;
      u.on("AfterSetSelectionRange", function (e) {
        var t,
            n = e.range,
            r = n.startContainer.parentNode;
        y(n) || "mcepastebin" === r.id || S(), t = r, l.hasClass(t, "mce-offscreen-selection") || x();
      }), u.on("copy", function (e) {
        var t,
            n,
            r = e.clipboardData;
        e.isDefaultPrevented() || !e.clipboardData || wt.ie || (t = (n = l.get(p)) ? n.getElementsByTagName("*")[0] : n) && (e.preventDefault(), r.clearData(), r.setData("text/html", t.outerHTML), r.setData("text/plain", t.outerText || t.innerText));
      }), lN(u), e = zu(function () {
        var e, t;
        n.removed || !n.getBody().contains(document.activeElement) || (e = n.selection.getRng()).collapsed && (t = fC(n, e, !1), n.selection.setRng(t));
      }, 0), (n = u).on("focus", function () {
        e.throttle();
      }), n.on("blur", function () {
        e.cancel();
      }), (o = u).on("init", function () {
        o.on("focusin", function (e) {
          var t,
              n,
              r = e.target;
          $n(r) && (t = id(o.getBody(), r), n = Vn(t) ? t : r, o.selection.getNode() !== n && cC(o, n).each(function (e) {
            return o.selection.setRng(e);
          }));
        });
      });
    }(), {
      showCaret: v,
      showBlockCaretContainer: function showBlockCaretContainer(e) {
        e.hasAttribute("data-mce-caret") && (ko(e), h(r()), c.scrollIntoView(e));
      },
      hideFakeCaret: S,
      destroy: function destroy() {
        m.destroy(), s = null;
      }
    };
  },
      gN = function gN(u) {
    var s,
        n,
        r,
        o = kt.each,
        c = ud.BACKSPACE,
        l = ud.DELETE,
        f = u.dom,
        d = u.selection,
        e = u.parser,
        t = wt.gecko,
        i = wt.ie,
        a = wt.webkit,
        m = "data:text/mce-internal,",
        p = i ? "Text" : "URL",
        g = function g(e, t) {
      try {
        u.getDoc().execCommand(e, !1, t);
      } catch (n) {}
    },
        h = function h(e) {
      return e.isDefaultPrevented();
    },
        v = function v() {
      u.shortcuts.add("meta+a", null, "SelectAll");
    },
        y = function y() {
      u.on("keydown", function (e) {
        if (!h(e) && e.keyCode === c && d.isCollapsed() && 0 === d.getRng().startOffset) {
          var t = d.getNode().previousSibling;
          if (t && t.nodeName && "table" === t.nodeName.toLowerCase()) return e.preventDefault(), !1;
        }
      });
    },
        b = function b() {
      u.inline || (u.contentStyles.push("body {min-height: 150px}"), u.on("click", function (e) {
        var t;

        if ("HTML" === e.target.nodeName) {
          if (11 < wt.ie) return void u.getBody().focus();
          t = u.selection.getRng(), u.getBody().focus(), u.selection.setRng(t), u.selection.normalize(), u.nodeChanged();
        }
      }));
    };

    return u.on("keydown", function (e) {
      var t;

      if (!h(e) && e.keyCode === ud.BACKSPACE) {
        var n = (t = d.getRng()).startContainer,
            r = t.startOffset,
            o = f.getRoot(),
            i = n;

        if (t.collapsed && 0 === r) {
          for (; i && i.parentNode && i.parentNode.firstChild === i && i.parentNode !== o;) {
            i = i.parentNode;
          }

          "BLOCKQUOTE" === i.tagName && (u.formatter.toggle("blockquote", null, i), (t = f.createRng()).setStart(n, 0), t.setEnd(n, 0), d.setRng(t));
        }
      }
    }), s = function s(e) {
      var t = f.create("body"),
          n = e.cloneContents();
      return t.appendChild(n), d.serializer.serialize(t, {
        format: "html"
      });
    }, u.on("keydown", function (e) {
      var t,
          n,
          r,
          o,
          i,
          a = e.keyCode;

      if (!h(e) && (a === l || a === c)) {
        if (t = u.selection.isCollapsed(), n = u.getBody(), t && !f.isEmpty(n)) return;
        if (!t && (r = u.selection.getRng(), o = s(r), (i = f.createRng()).selectNode(u.getBody()), o !== s(i))) return;
        e.preventDefault(), u.setContent(""), n.firstChild && f.isBlock(n.firstChild) ? u.selection.setCursorLocation(n.firstChild, 0) : u.selection.setCursorLocation(n, 0), u.nodeChanged();
      }
    }), wt.windowsPhone || u.on("keyup focusin mouseup", function (e) {
      ud.modifierPressed(e) || d.normalize();
    }, !0), a && (u.inline || f.bind(u.getDoc(), "mousedown mouseup", function (e) {
      var t;
      if (e.target === u.getDoc().documentElement) if (t = d.getRng(), u.getBody().focus(), "mousedown" === e.type) {
        if (bo(t.startContainer)) return;
        d.placeCaretAt(e.clientX, e.clientY);
      } else d.setRng(t);
    }), u.on("click", function (e) {
      var t = e.target;
      /^(IMG|HR)$/.test(t.nodeName) && "false" !== f.getContentEditableParent(t) && (e.preventDefault(), u.selection.select(t), u.nodeChanged()), "A" === t.nodeName && f.hasClass(t, "mce-item-anchor") && (e.preventDefault(), d.select(t));
    }), vc(u) && u.on("init", function () {
      g("DefaultParagraphSeparator", vc(u));
    }), u.on("init", function () {
      u.dom.bind(u.getBody(), "submit", function (e) {
        e.preventDefault();
      });
    }), y(), e.addNodeFilter("br", function (e) {
      for (var t = e.length; t--;) {
        "Apple-interchange-newline" === e[t].attr("class") && e[t].remove();
      }
    }), wt.iOS ? (u.inline || u.on("keydown", function () {
      document.activeElement === document.body && u.getWin().focus();
    }), b(), u.on("click", function (e) {
      var t = e.target;

      do {
        if ("A" === t.tagName) return void e.preventDefault();
      } while (t = t.parentNode);
    }), u.contentStyles.push(".mce-content-body {-webkit-touch-callout: none}")) : v()), 11 <= wt.ie && (b(), y()), wt.ie && (v(), g("AutoUrlDetect", !1), u.on("dragstart", function (e) {
      var t, n, r;
      (t = e).dataTransfer && (u.selection.isCollapsed() && "IMG" === t.target.tagName && d.select(t.target), 0 < (n = u.selection.getContent()).length && (r = m + escape(u.id) + "," + escape(n), t.dataTransfer.setData(p, r)));
    }), u.on("drop", function (e) {
      var t, n, r, o, i, a;
      h(e) || (t = (i = e).dataTransfer && (a = i.dataTransfer.getData(p)) && 0 <= a.indexOf(m) ? (a = a.substr(m.length).split(","), {
        id: unescape(a[0]),
        html: unescape(a[1])
      }) : null) && t.id !== u.id && (e.preventDefault(), n = fd(e.x, e.y, u.getDoc()), d.setRng(n), r = t.html, o = !0, u.queryCommandSupported("mceInsertClipboardContent") ? u.execCommand("mceInsertClipboardContent", !1, {
        content: r,
        internal: o
      }) : u.execCommand("mceInsertContent", !1, r));
    })), t && (u.on("keydown", function (e) {
      if (!h(e) && e.keyCode === c) {
        if (!u.getBody().getElementsByTagName("hr").length) return;

        if (d.isCollapsed() && 0 === d.getRng().startOffset) {
          var t = d.getNode(),
              n = t.previousSibling;
          if ("HR" === t.nodeName) return f.remove(t), void e.preventDefault();
          n && n.nodeName && "hr" === n.nodeName.toLowerCase() && (f.remove(n), e.preventDefault());
        }
      }
    }), Range.prototype.getClientRects || u.on("mousedown", function (e) {
      var t;
      h(e) || "HTML" !== e.target.nodeName || ((t = u.getBody()).blur(), qr.setEditorTimeout(u, function () {
        t.focus();
      }));
    }), n = function n() {
      var e = f.getAttribs(d.getStart().cloneNode(!1));
      return function () {
        var t = d.getStart();
        t !== u.getBody() && (f.setAttrib(t, "style", null), o(e, function (e) {
          t.setAttributeNode(e.cloneNode(!0));
        }));
      };
    }, r = function r() {
      return !d.isCollapsed() && f.getParent(d.getStart(), f.isBlock) !== f.getParent(d.getEnd(), f.isBlock);
    }, u.on("keypress", function (e) {
      var t;
      if (!h(e) && (8 === e.keyCode || 46 === e.keyCode) && r()) return t = n(), u.getDoc().execCommand("delete", !1, null), t(), e.preventDefault(), !1;
    }), f.bind(u.getDoc(), "cut", function (e) {
      var t;
      !h(e) && r() && (t = n(), qr.setEditorTimeout(u, function () {
        t();
      }));
    }), u.getParam("readonly") || u.on("BeforeExecCommand mousedown", function () {
      g("StyleWithCSS", !1), g("enableInlineTableEditing", !1), Nc(u) || g("enableObjectResizing", !1);
    }), u.on("SetContent ExecCommand", function (e) {
      "setcontent" !== e.type && "mceInsertLink" !== e.command || o(f.select("a"), function (e) {
        var t = e.parentNode,
            n = f.getRoot();

        if (t.lastChild === e) {
          for (; t && !f.isBlock(t);) {
            if (t.parentNode.lastChild !== t || t === n) return;
            t = t.parentNode;
          }

          f.add(t, "br", {
            "data-mce-bogus": 1
          });
        }
      });
    }), u.contentStyles.push("img:-moz-broken {-moz-force-broken-image-icon:1;min-width:24px;min-height:24px}"), wt.mac && u.on("keydown", function (e) {
      !ud.metaKeyPressed(e) || e.shiftKey || 37 !== e.keyCode && 39 !== e.keyCode || (e.preventDefault(), u.selection.getSel().modify("move", 37 === e.keyCode ? "backward" : "forward", "lineboundary"));
    }), y()), {
      refreshContentEditable: function refreshContentEditable() {},
      isHidden: function isHidden() {
        if (!t || u.removed) return !1;
        var e = u.selection.getSel();
        return !e || !e.rangeCount || 0 === e.rangeCount;
      }
    };
  },
      hN = Eu.DOM,
      vN = function vN(e) {
    return me(e, function (e) {
      return !1 === R(e);
    });
  },
      yN = function yN(e) {
    var t,
        n = e.settings,
        r = e.editorUpload.blobCache;
    return vN({
      allow_conditional_comments: n.allow_conditional_comments,
      allow_html_data_urls: n.allow_html_data_urls,
      allow_svg_data_urls: n.allow_svg_data_urls,
      allow_html_in_named_anchor: n.allow_html_in_named_anchor,
      allow_script_urls: n.allow_script_urls,
      allow_unsafe_link_target: n.allow_unsafe_link_target,
      convert_fonts_to_spans: n.convert_fonts_to_spans,
      fix_list_elements: n.fix_list_elements,
      font_size_legacy_values: n.font_size_legacy_values,
      forced_root_block: n.forced_root_block,
      forced_root_block_attrs: n.forced_root_block_attrs,
      padd_empty_with_br: n.padd_empty_with_br,
      preserve_cdata: n.preserve_cdata,
      remove_trailing_brs: n.remove_trailing_brs,
      inline_styles: n.inline_styles,
      root_name: (t = e).inline ? t.getElement().nodeName.toLowerCase() : undefined,
      validate: !0,
      blob_cache: r,
      images_dataimg_filter: n.images_dataimg_filter
    });
  },
      bN = function bN(u) {
    var e = u.dom.getRoot();
    u.inline || Vf(u) && u.selection.getStart(!0) !== e || Fl(e).each(function (e) {
      var t,
          n,
          r,
          o,
          i = e.getNode(),
          a = Bn(i) ? Fl(i).getOr(e) : e;
      wt.browser.isIE() ? (t = u, n = a.toRange(), r = At.fromDom(t.getBody()), o = (um(t) ? U.from(n) : U.none()).map(sm).filter(am(r)), t.bookmark = o.isSome() ? o : t.bookmark) : u.selection.setRng(a.toRange());
    });
  },
      CN = function CN(e) {
    var t;
    e.bindPendingEventDelegates(), e.initialized = !0, e.fire("Init"), e.focus(!0), bN(e), e.nodeChanged({
      initial: !0
    }), e.execCallback("init_instance_callback", e), (t = e).settings.auto_focus && qr.setEditorTimeout(t, function () {
      var e = !0 === t.settings.auto_focus ? t : t.editorManager.get(t.settings.auto_focus);
      e.destroyed || e.focus();
    }, 100);
  },
      wN = function wN(t, e) {
    var n = t.settings,
        r = t.getDoc(),
        o = t.getBody();
    n.browser_spellcheck || n.gecko_spellcheck || (r.body.spellcheck = !1, hN.setAttrib(o, "spellcheck", "false")), t.quirks = gN(t), t.fire("PostRender");
    var i,
        a,
        u,
        s,
        c,
        l,
        f,
        d,
        m,
        p,
        g,
        h = t.getParam("directionality", Iu.isRtl() ? "rtl" : undefined);
    h !== undefined && (o.dir = h), n.protect && t.on("BeforeSetContent", function (t) {
      kt.each(n.protect, function (e) {
        t.content = t.content.replace(e, function (e) {
          return "\x3c!--mce:protected " + escape(e) + "--\x3e";
        });
      });
    }), t.on("SetContent", function () {
      t.addVisual(t.getBody());
    }), !1 === e && t.load({
      initial: !0,
      format: "html"
    }), t.startContent = t.getContent({
      format: "raw"
    }), t.on("compositionstart compositionend", function (e) {
      t.composing = "compositionstart" === e.type;
    }), 0 < t.contentStyles.length && (i = "", kt.each(t.contentStyles, function (e) {
      i += e + "\r\n";
    }), t.dom.addStyle(i)), u = (a = t).contentCSS, c = (s = a).inline ? s.ui.styleSheetLoader : s.dom.styleSheetLoader, l = function l() {
      a.on("remove", function () {
        return c.unloadAll(u);
      }), CN(a);
    }, c.loadAll(u, l, l), n.content_style && (f = t, d = n.content_style, m = At.fromDom(f.getBody()), p = on(rn(m)), g = At.fromTag("style"), Xn(g, "type", "text/css"), fn(g, At.fromText(d)), fn(p, g), f.on("remove", function () {
      pn(g);
    }));
  },
      xN = function xN(t, e) {
    var n = t.settings,
        r = t.getElement(),
        o = t.getDoc();
    n.inline || (t.getElement().style.visibility = t.orgVisibility), e || t.inline || (o.open(), o.write(t.iframeHTML), o.close()), t.inline && (hN.addClass(r, "mce-content-body"), t.contentDocument = o = document, t.contentWindow = window, t.bodyElement = r, t.contentAreaContainer = r);
    var u,
        i,
        a,
        s,
        c = t.getBody();
    c.disabled = !0, t.readonly = !!n.readonly, t.readonly || (t.inline && "static" === hN.getStyle(c, "position", !0) && (c.style.position = "relative"), c.contentEditable = t.getParam("content_editable_state", !0)), c.disabled = !1, t.editorUpload = yb(t), t.schema = Ci(n), t.dom = Eu(o, {
      keep_values: !0,
      url_converter: t.convertURL,
      url_converter_scope: t,
      hex_colors: n.force_hex_style_colors,
      update_styles: !0,
      root_element: t.inline ? t.getBody() : null,
      collect: function collect() {
        return t.inline;
      },
      schema: t.schema,
      contentCssCors: t.getParam("content_css_cors", !1, "boolean"),
      referrerPolicy: wc(t),
      onSetAttrib: function onSetAttrib(e) {
        t.fire("SetAttrib", e);
      }
    }), t.parser = ((i = by(yN(u = t), u.schema)).addAttributeFilter("src,href,style,tabindex", function (e, t) {
      for (var n, r, o = e.length, i = u.dom, a = "data-mce-" + t; o--;) {
        if ((r = (n = e[o]).attr(t)) && !n.attr(a)) {
          if (0 === r.indexOf("data:") || 0 === r.indexOf("blob:")) continue;
          "style" === t ? ((r = i.serializeStyle(i.parseStyle(r), n.name)).length || (r = null), n.attr(a, r), n.attr(t, r)) : "tabindex" === t ? (n.attr(a, r), n.attr(t, null)) : n.attr(a, u.convertURL(r, t, n.name));
        }
      }
    }), i.addNodeFilter("script", function (e) {
      for (var t = e.length; t--;) {
        var n = e[t],
            r = n.attr("type") || "no/type";
        0 !== r.indexOf("mce-") && n.attr("type", "mce-" + r);
      }
    }), u.settings.preserve_cdata && i.addNodeFilter("#cdata", function (e) {
      for (var t = e.length; t--;) {
        var n = e[t];
        n.type = 8, n.name = "#comment", n.value = "[CDATA[" + u.dom.encode(n.value) + "]]";
      }
    }), i.addNodeFilter("p,h1,h2,h3,h4,h5,h6,div", function (e) {
      for (var t = e.length, n = u.schema.getNonEmptyElements(); t--;) {
        var r = e[t];
        r.isEmpty(n) && 0 === r.getAll("br").length && (r.append(new Km("br", 1)).shortEnded = !0);
      }
    }), i), t.serializer = Ny((s = (a = t).settings, _ke(_ke({}, yN(a)), vN({
      url_converter: s.url_converter,
      url_converter_scope: s.url_converter_scope,
      element_format: s.element_format,
      entities: s.entities,
      entity_encoding: s.entity_encoding,
      indent: s.indent,
      indent_after: s.indent_after,
      indent_before: s.indent_before,
      block_elements: s.block_elements,
      boolean_attributes: s.boolean_attributes,
      custom_elements: s.custom_elements,
      extended_valid_elements: s.extended_valid_elements,
      invalid_elements: s.invalid_elements,
      invalid_styles: s.invalid_styles,
      move_caret_before_on_enter_elements: s.move_caret_before_on_enter_elements,
      non_empty_elements: s.non_empty_elements,
      schema: s.schema,
      self_closing_elements: s.self_closing_elements,
      short_ended_elements: s.short_ended_elements,
      special: s.special,
      text_block_elements: s.text_block_elements,
      text_inline_elements: s.text_inline_elements,
      valid_children: s.valid_children,
      valid_classes: s.valid_classes,
      valid_elements: s.valid_elements,
      valid_styles: s.valid_styles,
      verify_html: s.verify_html,
      whitespace_elements: s.whitespace_elements
    }))), t), t.selection = Qv(t.dom, t.getWin(), t.serializer, t), t.annotator = td(t), t.formatter = _b(t), t.undoManager = Rb(t), t._nodeChangeDispatcher = new YS(t), t._selectionOverrides = pN(t), Ow(t), JS(t), Hv(t) || ZS(t);
    var l,
        f,
        d,
        m,
        p = Hv(l = t) ? Ou(null) : XS(l);
    Tw(t, p), vc(f = t) && f.on("NodeChange", N(Pw, f)), Pb(t), t.fire("PreInit"), ge((m = d = t).plugins, "rtc").fold(function () {
      return m.rtcInstance = zv(d), U.none();
    }, function (e) {
      return U.some(e.setup().then(function (e) {
        return m.rtcInstance = jv(d, e), e.isRemote;
      }));
    }).fold(function () {
      wN(t, !1);
    }, function (e) {
      t.setProgressState(!0), e.then(function (e) {
        t.setProgressState(!1), wN(t, e);
      });
    });
  },
      SN = Eu.DOM,
      NN = function NN(e) {
    var t = e.getParam("doctype", "<!DOCTYPE html>") + "<html><head>";
    e.getParam("document_base_url", "") !== e.documentBaseUrl && (t += '<base href="' + e.documentBaseURI.getURI() + '" />'), t += '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />';
    var n = gc(e, "body_id", "tinymce"),
        r = gc(e, "body_class", "");
    return hc(e) && (t += '<meta http-equiv="Content-Security-Policy" content="' + hc(e) + '" />'), t += '</head><body id="' + n + '" class="mce-content-body ' + r + '" data-id="' + e.id + '"><br></body></html>';
  },
      EN = function EN(e, t) {
    var n,
        r,
        o,
        i,
        a = e.editorManager.translate("Rich Text Area. Press ALT-0 for help."),
        u = (n = e.id, r = a, t.height, o = e.getParam("iframe_attrs", {}), i = At.fromTag("iframe"), Yn(i, o), Yn(i, {
      id: n + "_ifr",
      frameBorder: "0",
      allowTransparency: "true",
      title: r
    }), Wu(i, "tox-edit-area__iframe"), i.dom);

    u.onload = function () {
      u.onload = null, e.fire("load");
    };

    var s = function (e, t) {
      if (document.domain !== window.location.hostname && wt.browser.isIE()) {
        var n = vb("mce");

        e[n] = function () {
          xN(e);
        };

        var r = 'javascript:(function(){document.open();document.domain="' + document.domain + '";var ed = window.parent.tinymce.get("' + e.id + '");document.write(ed.iframeHTML);document.close();ed.' + n + "(true);})()";
        return SN.setAttrib(t, "src", r), !0;
      }

      return !1;
    }(e, u);

    return e.contentAreaContainer = t.iframeContainer, e.iframeElement = u, e.iframeHTML = NN(e), SN.add(t.iframeContainer, u), s;
  },
      kN = Eu.DOM,
      _N = function _N(t, n, e) {
    var r = ib.get(e),
        o = ib.urls[e] || t.documentBaseUrl.replace(/\/$/, "");

    if (e = kt.trim(e), r && -1 === kt.inArray(n, e)) {
      if (kt.each(ib.dependencies(e), function (e) {
        _N(t, n, e);
      }), t.plugins[e]) return;

      try {
        var i = new r(t, o, t.$);
        (t.plugins[e] = i).init && (i.init(t, o), n.push(e));
      } catch (Ok) {
        !function (e, t, n) {
          var r = Iu.translate(["Failed to initialize plugin: {0}", t]);
          mb(r, n), cb(e, r);
        }(t, e, Ok);
      }
    }
  },
      AN = function AN(e) {
    return e.replace(/^\-/, "");
  },
      RN = function RN(e) {
    return {
      editorContainer: e,
      iframeContainer: e,
      api: {}
    };
  },
      TN = function TN(e) {
    var t,
        n,
        r = e.getElement();
    return e.inline ? RN(null) : (t = r, n = kN.create("div"), kN.insertAfter(n, t), RN(n));
  },
      DN = function DN(e) {
    var t,
        n,
        r,
        o = e.getElement();
    return e.orgDisplay = o.style.display, q(kc(e)) ? e.theme.renderUI() : T(kc(e)) ? (n = (t = e).getElement(), (r = kc(t)(t, n)).editorContainer.nodeType && (r.editorContainer.id = r.editorContainer.id || t.id + "_parent"), r.iframeContainer && r.iframeContainer.nodeType && (r.iframeContainer.id = r.iframeContainer.id || t.id + "_iframecontainer"), r.height = r.iframeHeight ? r.iframeHeight : n.offsetHeight, r) : TN(e);
  },
      ON = function ON(e) {
    var n, t, r, o, i, a, u, s, c;
    e.fire("ScriptsLoaded"), n = e, t = kt.trim(Cc(n)), r = n.ui.registry.getAll().icons, o = _ke(_ke({}, Yy.get("default").icons), Yy.get(t).icons), ue(o, function (e, t) {
      he(r, t) || n.ui.registry.addIcon(t, e);
    }), u = kc(i = e), q(u) ? (i.settings.theme = AN(u), a = ab.get(u), i.theme = new a(i, ab.urls[u]), i.theme.init && i.theme.init(i, ab.urls[u] || i.documentBaseUrl.replace(/\/$/, ""), i.$)) : i.theme = {}, s = e, c = [], kt.each(Ac(s).split(/[ ,]/), function (e) {
      _N(s, c, AN(e));
    });
    var l,
        f,
        d,
        m = DN(e);
    l = e, f = U.from(m.api).getOr({}), d = {
      show: U.from(f.show).getOr(V),
      hide: U.from(f.hide).getOr(V),
      disable: U.from(f.disable).getOr(V),
      isDisabled: U.from(f.isDisabled).getOr(C),
      enable: function enable() {
        l.mode.isReadOnly() || U.from(f.enable).map(b);
      }
    }, l.ui = _ke(_ke({}, l.ui), d);
    var p,
        g,
        h,
        v,
        y = {
      editorContainer: m.editorContainer,
      iframeContainer: m.iframeContainer
    };
    return e.editorContainer = y.editorContainer ? y.editorContainer : null, (p = e).contentCSS = p.contentCSS.concat(pb(p)), e.inline ? xN(e) : (v = EN(g = e, h = y), h.editorContainer && (SN.get(h.editorContainer).style.display = g.orgDisplay, g.hidden = SN.isHidden(h.editorContainer)), g.getElement().style.display = "none", SN.setAttrib(g.id, "aria-hidden", "true"), void (v || xN(g)));
  },
      BN = Eu.DOM,
      PN = function PN(e) {
    return "-" === e.charAt(0);
  },
      LN = function LN(e, t) {
    var n,
        r = xc(t),
        o = t.getParam("language_url", "", "string");
    !1 === Iu.hasCode(r) && "en" !== r && (n = "" !== o ? o : t.editorManager.baseURL + "/langs/" + r + ".js", e.add(n, V, undefined, function () {
      lb(t, "LanguageLoadError", fb("language", n, r));
    }));
  },
      IN = function IN(t, e, n) {
    return U.from(e).filter(function (e) {
      return 0 < e.length && !Yy.has(e);
    }).map(function (e) {
      return {
        url: t.editorManager.baseURL + "/icons/" + e + "/icons" + n + ".js",
        name: U.some(e)
      };
    });
  },
      MN = function MN(e, o, t) {
    var n,
        r = IN(o, "default", t),
        i = (n = o, U.from(n.getParam("icons_url", "", "string")).filter(function (e) {
      return 0 < e.length;
    }).map(function (e) {
      return {
        url: e,
        name: U.none()
      };
    }).orThunk(function () {
      return IN(o, Cc(o), "");
    }));
    W(function (e) {
      for (var t = [], n = function n(e) {
        t.push(e);
      }, r = 0; r < e.length; r++) {
        e[r].each(n);
      }

      return t;
    }([r, i]), function (r) {
      e.add(r.url, V, undefined, function () {
        var e, t, n;
        e = o, t = r.url, n = r.name.getOrUndefined(), lb(e, "IconsLoadError", fb("icons", t, n));
      });
    });
  },
      FN = function FN(e, t) {
    var n,
        r,
        o,
        i,
        a,
        u,
        s = Ru.ScriptLoader;
    n = s, o = t, i = function i() {
      var r, o;
      LN(s, e), MN(s, e, t), r = e, o = t, kt.each(r.getParam("external_plugins"), function (e, t) {
        ib.load(t, e, V, undefined, function () {
          db(r, e, t);
        }), r.settings.plugins += " " + t;
      }), kt.each(Ac(r).split(/[ ,]/), function (e) {
        var t, n;
        (e = kt.trim(e)) && !ib.urls[e] && (PN(e) ? (e = e.substr(1, e.length), t = ib.dependencies(e), kt.each(t, function (e) {
          var t = {
            prefix: "plugins/",
            resource: e,
            suffix: "/plugin" + o + ".js"
          },
              n = ib.createUrl(t, e);
          ib.load(n.resource, n, V, undefined, function () {
            db(r, n.prefix + n.resource + n.suffix, n.resource);
          });
        })) : (n = {
          prefix: "plugins/",
          resource: e,
          suffix: "/plugin" + o + ".js"
        }, ib.load(e, n, V, undefined, function () {
          db(r, n.prefix + n.resource + n.suffix, e);
        })));
      }), s.loadQueue(function () {
        e.removed || ON(e);
      }, e, function () {
        e.removed || ON(e);
      });
    }, u = kc(r = e), q(u) ? (PN(u) || ab.urls.hasOwnProperty(u) || ((a = r.getParam("theme_url")) ? ab.load(u, r.documentBaseURI.toAbsolute(a)) : ab.load(u, "themes/" + u + "/theme" + o + ".js")), n.loadQueue(function () {
      ab.waitFor(u, i);
    })) : i();
  },
      UN = function UN(t) {
    var e = t.id;
    Iu.setCode(xc(t));

    var n,
        r,
        o,
        i,
        a,
        u = function u() {
      BN.unbind(window, "ready", u), t.render();
    };

    Ti.Event.domLoaded ? t.getElement() && wt.contentEditable && (n = At.fromDom(t.getElement()), r = X(n.dom.attributes, function (e, t) {
      return e[t.name] = t.value, e;
    }, {}), t.on("remove", function () {
      j(n.dom.attributes, function (e) {
        return Qn(n, e.name), 0;
      }), Yn(n, r);
    }), t.ui.styleSheetLoader = (o = n, i = t, Kr.forElement(o, {
      contentCssCors: i.getParam("content_css_cors"),
      referrerPolicy: wc(i)
    })), t.getParam("inline") ? t.inline = !0 : (t.orgVisibility = t.getElement().style.visibility, t.getElement().style.visibility = "hidden"), (a = t.getElement().form || BN.getParent(e, "form")) && (t.formElement = a, t.getParam("hidden_input") && !Ln(t.getElement()) && (BN.insertAfter(BN.create("input", {
      type: "hidden",
      name: e
    }), e), t.hasHiddenInput = !0), t.formEventDelegate = function (e) {
      t.fire(e.type, e);
    }, BN.bind(a, "submit reset", t.formEventDelegate), t.on("reset", function () {
      t.resetContent();
    }), !t.getParam("submit_patch") || a.submit.nodeType || a.submit.length || a._mceOldSubmit || (a._mceOldSubmit = a.submit, a.submit = function () {
      return t.editorManager.triggerSave(), t.setDirty(!1), a._mceOldSubmit(a);
    })), t.windowManager = ub(t), t.notificationManager = ob(t), "xml" === t.getParam("encoding") && t.on("GetContent", function (e) {
      e.save && (e.content = BN.encode(e.content));
    }), t.getParam("add_form_submit_trigger") && t.on("submit", function () {
      t.initialized && t.save();
    }), t.getParam("add_unload_trigger") && (t._beforeUnload = function () {
      !t.initialized || t.destroyed || t.isHidden() || t.save({
        format: "raw",
        no_events: !0,
        set_dirty: !1
      });
    }, t.editorManager.on("BeforeUnload", t._beforeUnload)), t.editorManager.add(t), FN(t, t.suffix)) : BN.bind(window, "ready", u);
  },
      zN = function zN(e, t) {
    return n = t, qv(e).editor.addVisual(n);
    var n;
  },
      jN = {
    "font-size": "size",
    "font-family": "face"
  },
      HN = function HN(n, t, e) {
    return Pm(At.fromDom(e), function (e) {
      return nr(t = e, n).orThunk(function () {
        return "font" === Lt(t) ? ge(jN, n).bind(function (e) {
          return Jn(t, e);
        }) : U.none();
      });
      var t;
    }, function (e) {
      return Ot(At.fromDom(t), e);
    });
  },
      VN = function VN(o) {
    return function (r, e) {
      return U.from(e).map(At.fromDom).filter(Ft).bind(function (e) {
        return HN(o, r, e.dom).or((t = o, n = e.dom, U.from(Eu.DOM.getStyle(n, t, !0))));
        var t, n;
      }).getOr("");
    };
  },
      qN = VN("font-size"),
      $N = a(function (e) {
    return e.replace(/[\'\"\\]/g, "").replace(/,\s+/g, ",");
  }, VN("font-family")),
      WN = function WN(e) {
    return Fl(e.getBody()).map(function (e) {
      var t = e.container();
      return In(t) ? t.parentNode : t;
    });
  },
      KN = function KN(e, t) {
    return n = e, U.from(n.selection.getRng()).bind(function (e) {
      var t = n.getBody();
      return e.startContainer === t && 0 === e.startOffset ? U.none() : U.from(n.selection.getStart(!0));
    }).orThunk(N(WN, e)).map(At.fromDom).filter(Ft).map(t);
    var n;
  },
      XN = function XN(e, t) {
    if (/^[0-9.]+$/.test(t)) {
      var n = parseInt(t, 10);

      if (1 <= n && n <= 7) {
        var r = (a = e, kt.explode(a.getParam("font_size_style_values", "xx-small,x-small,small,medium,large,x-large,xx-large"))),
            o = (i = e, kt.explode(i.getParam("font_size_classes", "")));
        return o ? o[n - 1] || t : r[n - 1] || t;
      }

      return t;
    }

    return t;
    var i, a;
  },
      YN = function YN(e, t) {
    var n,
        r = XN(e, t);
    e.formatter.toggle("fontname", {
      value: (n = r.split(/\s*,\s*/), z(n, function (e) {
        return -1 === e.indexOf(" ") || Ve(e, '"') || Ve(e, "'") ? e : "'" + e + "'";
      }).join(","))
    }), e.nodeChanged();
  },
      GN = function GN(e, t) {
    var n,
        r,
        o,
        i,
        a = "string" != typeof (n = t) ? (r = kt.extend({
      paste: n.paste,
      data: {
        paste: n.paste
      }
    }, n), {
      content: n.content,
      details: r
    }) : {
      content: n,
      details: {}
    };
    o = a.content, i = a.details, Vv(e).editor.insertContent(o, i);
  },
      JN = kt.each,
      QN = kt.map,
      ZN = kt.inArray,
      eE = (tE.prototype.execCommand = function (t, n, r, e) {
    var o,
        i,
        a = !1,
        u = this;

    if (!u.editor.removed) {
      if (/^(mceAddUndoLevel|mceEndUndoLevel|mceBeginUndoLevel|mceRepaint)$/.test(t) || e && e.skip_focus ? (i = u.editor, dm(i).each(function (e) {
        return i.selection.setRng(e);
      })) : u.editor.focus(), (e = u.editor.fire("BeforeExecCommand", {
        command: t,
        ui: n,
        value: r
      })).isDefaultPrevented()) return !1;
      var s = t.toLowerCase();
      if (o = u.commands.exec[s]) return o(s, n, r), u.editor.fire("ExecCommand", {
        command: t,
        ui: n,
        value: r
      }), !0;
      if (JN(this.editor.plugins, function (e) {
        if (e.execCommand && e.execCommand(t, n, r)) return u.editor.fire("ExecCommand", {
          command: t,
          ui: n,
          value: r
        }), !(a = !0);
      }), a) return a;
      if (u.editor.theme && u.editor.theme.execCommand && u.editor.theme.execCommand(t, n, r)) return u.editor.fire("ExecCommand", {
        command: t,
        ui: n,
        value: r
      }), !0;

      try {
        a = u.editor.getDoc().execCommand(t, n, r);
      } catch (c) {}

      return !!a && (u.editor.fire("ExecCommand", {
        command: t,
        ui: n,
        value: r
      }), !0);
    }
  }, tE.prototype.queryCommandState = function (e) {
    var t;

    if (!this.editor.quirks.isHidden() && !this.editor.removed) {
      if (e = e.toLowerCase(), t = this.commands.state[e]) return t(e);

      try {
        return this.editor.getDoc().queryCommandState(e);
      } catch (n) {}

      return !1;
    }
  }, tE.prototype.queryCommandValue = function (e) {
    var t;

    if (!this.editor.quirks.isHidden() && !this.editor.removed) {
      if (e = e.toLowerCase(), t = this.commands.value[e]) return t(e);

      try {
        return this.editor.getDoc().queryCommandValue(e);
      } catch (n) {}
    }
  }, tE.prototype.addCommands = function (e, n) {
    void 0 === n && (n = "exec");
    var r = this;
    JN(e, function (t, e) {
      JN(e.toLowerCase().split(","), function (e) {
        r.commands[n][e] = t;
      });
    });
  }, tE.prototype.addCommand = function (e, o, i) {
    var a = this;
    e = e.toLowerCase(), this.commands.exec[e] = function (e, t, n, r) {
      return o.call(i || a.editor, t, n, r);
    };
  }, tE.prototype.queryCommandSupported = function (e) {
    if (e = e.toLowerCase(), this.commands.exec[e]) return !0;

    try {
      return this.editor.getDoc().queryCommandSupported(e);
    } catch (t) {}

    return !1;
  }, tE.prototype.addQueryStateHandler = function (e, t, n) {
    var r = this;
    e = e.toLowerCase(), this.commands.state[e] = function () {
      return t.call(n || r.editor);
    };
  }, tE.prototype.addQueryValueHandler = function (e, t, n) {
    var r = this;
    e = e.toLowerCase(), this.commands.value[e] = function () {
      return t.call(n || r.editor);
    };
  }, tE.prototype.hasCustomCommand = function (e) {
    return e = e.toLowerCase(), !!this.commands.exec[e];
  }, tE.prototype.execNativeCommand = function (e, t, n) {
    return t === undefined && (t = !1), n === undefined && (n = null), this.editor.getDoc().execCommand(e, t, n);
  }, tE.prototype.isFormatMatch = function (e) {
    return this.editor.formatter.match(e);
  }, tE.prototype.toggleFormat = function (e, t) {
    this.editor.formatter.toggle(e, t ? {
      value: t
    } : undefined), this.editor.nodeChanged();
  }, tE.prototype.storeSelection = function (e) {
    this.selectionBookmark = this.editor.selection.getBookmark(e);
  }, tE.prototype.restoreSelection = function () {
    this.editor.selection.moveToBookmark(this.selectionBookmark);
  }, tE.prototype.setupCommands = function (i) {
    var a = this;
    this.addCommands({
      "mceResetDesignMode,mceBeginUndoLevel": function mceResetDesignModeMceBeginUndoLevel() {},
      "mceEndUndoLevel,mceAddUndoLevel": function mceEndUndoLevelMceAddUndoLevel() {
        i.undoManager.add();
      },
      "Cut,Copy,Paste": function CutCopyPaste(e) {
        var t,
            n,
            r = i.getDoc();

        try {
          a.execNativeCommand(e);
        } catch (o) {
          t = !0;
        }

        "paste" !== e || r.queryCommandEnabled(e) || (t = !0), !t && r.queryCommandSupported(e) || (n = i.translate("Your browser doesn't support direct access to the clipboard. Please use the Ctrl+X/C/V keyboard shortcuts instead."), wt.mac && (n = n.replace(/Ctrl\+/g, "\u2318+")), i.notificationManager.open({
          text: n,
          type: "error"
        }));
      },
      unlink: function unlink() {
        var e;
        i.selection.isCollapsed() ? (e = i.dom.getParent(i.selection.getStart(), "a")) && i.dom.remove(e, !0) : i.formatter.remove("link");
      },
      "JustifyLeft,JustifyCenter,JustifyRight,JustifyFull,JustifyNone": function JustifyLeftJustifyCenterJustifyRightJustifyFullJustifyNone(e) {
        var t = e.substring(7);
        "full" === t && (t = "justify"), JN("left,center,right,justify".split(","), function (e) {
          t !== e && i.formatter.remove("align" + e);
        }), "none" !== t && a.toggleFormat("align" + t);
      },
      "InsertUnorderedList,InsertOrderedList": function InsertUnorderedListInsertOrderedList(e) {
        var t;
        a.execNativeCommand(e);
        var n = i.dom.getParent(i.selection.getNode(), "ol,ul");
        n && (t = n.parentNode, /^(H[1-6]|P|ADDRESS|PRE)$/.test(t.nodeName) && (a.storeSelection(), i.dom.split(t, n), a.restoreSelection()));
      },
      "Bold,Italic,Underline,Strikethrough,Superscript,Subscript": function BoldItalicUnderlineStrikethroughSuperscriptSubscript(e) {
        a.toggleFormat(e);
      },
      "ForeColor,HiliteColor": function ForeColorHiliteColor(e, t, n) {
        a.toggleFormat(e, n);
      },
      FontName: function FontName(e, t, n) {
        YN(i, n);
      },
      FontSize: function FontSize(e, t, n) {
        var r, o;
        o = n, (r = i).formatter.toggle("fontsize", {
          value: XN(r, o)
        }), r.nodeChanged();
      },
      LineHeight: function LineHeight(e, t, n) {
        var r, o;
        o = n, (r = i).undoManager.transact(function () {
          r.formatter.toggle("lineheight", {
            value: String(o)
          }), r.nodeChanged();
        });
      },
      RemoveFormat: function RemoveFormat(e) {
        i.formatter.remove(e);
      },
      mceBlockQuote: function mceBlockQuote() {
        a.toggleFormat("blockquote");
      },
      FormatBlock: function FormatBlock(e, t, n) {
        return a.toggleFormat(n || "p");
      },
      mceCleanup: function mceCleanup() {
        var e = i.selection.getBookmark();
        i.setContent(i.getContent()), i.selection.moveToBookmark(e);
      },
      mceRemoveNode: function mceRemoveNode(e, t, n) {
        var r = n || i.selection.getNode();
        r !== i.getBody() && (a.storeSelection(), i.dom.remove(r, !0), a.restoreSelection());
      },
      mceSelectNodeDepth: function mceSelectNodeDepth(e, t, n) {
        var r = 0;
        i.dom.getParent(i.selection.getNode(), function (e) {
          if (1 === e.nodeType && r++ === n) return i.selection.select(e), !1;
        }, i.getBody());
      },
      mceSelectNode: function mceSelectNode(e, t, n) {
        i.selection.select(n);
      },
      mceInsertContent: function mceInsertContent(e, t, n) {
        GN(i, n);
      },
      mceInsertRawHTML: function mceInsertRawHTML(e, t, n) {
        i.selection.setContent("tiny_mce_marker");
        var r = i.getContent();
        i.setContent(r.replace(/tiny_mce_marker/g, function () {
          return n;
        }));
      },
      mceInsertNewLine: function mceInsertNewLine(e, t, n) {
        MS(i, n);
      },
      mceToggleFormat: function mceToggleFormat(e, t, n) {
        a.toggleFormat(n);
      },
      mceSetContent: function mceSetContent(e, t, n) {
        i.setContent(n);
      },
      "Indent,Outdent": function IndentOutdent(e) {
        _w(i, e);
      },
      mceRepaint: function mceRepaint() {},
      InsertHorizontalRule: function InsertHorizontalRule() {
        i.execCommand("mceInsertContent", !1, "<hr />");
      },
      mceToggleVisualAid: function mceToggleVisualAid() {
        i.hasVisual = !i.hasVisual, i.addVisual();
      },
      mceReplaceContent: function mceReplaceContent(e, t, n) {
        i.execCommand("mceInsertContent", !1, n.replace(/\{\$selection\}/g, i.selection.getContent({
          format: "text"
        })));
      },
      mceInsertLink: function mceInsertLink(e, t, n) {
        "string" == typeof n && (n = {
          href: n
        });
        var r = i.dom.getParent(i.selection.getNode(), "a");
        n.href = n.href.replace(/ /g, "%20"), r && n.href || i.formatter.remove("link"), n.href && i.formatter.apply("link", n, r);
      },
      selectAll: function selectAll() {
        var e,
            t = i.dom.getParent(i.selection.getStart(), Hn);
        t && ((e = i.dom.createRng()).selectNodeContents(t), i.selection.setRng(e));
      },
      mceNewDocument: function mceNewDocument() {
        i.setContent("");
      },
      InsertLineBreak: function InsertLineBreak(e, t, n) {
        return SS(i, n), !0;
      }
    });

    var e = function e(r) {
      return function () {
        var e = i.selection,
            t = e.isCollapsed() ? [i.dom.getParent(e.getNode(), i.dom.isBlock)] : e.getSelectedBlocks(),
            n = QN(t, function (e) {
          return !!i.formatter.matchNode(e, r);
        });
        return -1 !== ZN(n, !0);
      };
    };

    a.addCommands({
      JustifyLeft: e("alignleft"),
      JustifyCenter: e("aligncenter"),
      JustifyRight: e("alignright"),
      JustifyFull: e("alignjustify"),
      "Bold,Italic,Underline,Strikethrough,Superscript,Subscript": function BoldItalicUnderlineStrikethroughSuperscriptSubscript(e) {
        return a.isFormatMatch(e);
      },
      mceBlockQuote: function mceBlockQuote() {
        return a.isFormatMatch("blockquote");
      },
      Outdent: function Outdent() {
        return Nw(i);
      },
      "InsertUnorderedList,InsertOrderedList": function InsertUnorderedListInsertOrderedList(e) {
        var t = i.dom.getParent(i.selection.getNode(), "ul,ol");
        return t && ("insertunorderedlist" === e && "UL" === t.tagName || "insertorderedlist" === e && "OL" === t.tagName);
      }
    }, "state"), a.addCommands({
      Undo: function Undo() {
        i.undoManager.undo();
      },
      Redo: function Redo() {
        i.undoManager.redo();
      }
    }), a.addQueryValueHandler("FontName", function () {
      return KN(t = i, function (e) {
        return $N(t.getBody(), e.dom);
      }).getOr("");
      var t;
    }, this), a.addQueryValueHandler("FontSize", function () {
      return KN(t = i, function (e) {
        return qN(t.getBody(), e.dom);
      }).getOr("");
      var t;
    }, this), a.addQueryValueHandler("LineHeight", function () {
      return KN(t = i, function (n) {
        var e = At.fromDom(t.getBody());
        return Pm(n, function (e) {
          return nr(e, "line-height");
        }, N(Ot, e)).getOrThunk(function () {
          var e = parseFloat(er(n, "line-height")),
              t = parseFloat(er(n, "font-size"));
          return String(e / t);
        });
      }).getOr("");
      var t;
    }, this);
  }, tE);

  function tE(e) {
    this.commands = {
      state: {},
      exec: {},
      value: {}
    }, this.editor = e, this.setupCommands(e);
  }

  var nE = "data-mce-contenteditable",
      rE = function rE(e, t, n) {
    var r, o;
    Xu(e, t) && !1 === n ? (o = t, Vu(r = e) ? r.dom.classList.remove(o) : $u(r, o), Ku(r)) : n && Wu(e, t);
  },
      oE = function oE(e, t, n) {
    try {
      e.getDoc().execCommand(t, !1, String(n));
    } catch (r) {}
  },
      iE = function iE(e, t) {
    e.dom.contentEditable = t ? "true" : "false";
  },
      aE = function aE(e, t) {
    var n,
        r,
        o,
        i = At.fromDom(e.getBody());
    rE(i, "mce-content-readonly", t), t ? (e.selection.controlSelection.hideResizeRect(), e._selectionOverrides.hideFakeCaret(), o = e, U.from(o.selection.getNode()).each(function (e) {
      e.removeAttribute("data-mce-selected");
    }), e.readonly = !0, iE(i, !1), W(Gu(i, '*[contenteditable="true"]'), function (e) {
      Xn(e, nE, "true"), iE(e, !1);
    })) : (e.readonly = !1, iE(i, !0), W(Gu(i, "*[" + nE + '="true"]'), function (e) {
      Qn(e, nE), iE(e, !0);
    }), oE(e, "StyleWithCSS", !1), oE(e, "enableInlineTableEditing", !1), oE(e, "enableObjectResizing", !1), (Em(r = e) || Nm(r)) && e.focus(), (n = e).selection.setRng(n.selection.getRng()), e.nodeChanged());
  },
      uE = function uE(e) {
    return e.readonly;
  },
      sE = function sE(t) {
    t.parser.addAttributeFilter("contenteditable", function (e) {
      uE(t) && W(e, function (e) {
        e.attr(nE, e.attr("contenteditable")), e.attr("contenteditable", "false");
      });
    }), t.serializer.addAttributeFilter(nE, function (e) {
      uE(t) && W(e, function (e) {
        e.attr("contenteditable", e.attr(nE));
      });
    }), t.serializer.addTempAttr(nE);
  },
      cE = function cE(a, u) {
    var e, t;
    "click" !== u.type || ud.metaKeyPressed(u) || (e = At.fromDom(u.target), t = a, Or(e, "a", function (e) {
      return Ot(e, At.fromDom(t.getBody()));
    }).bind(function (e) {
      return Jn(e, "href");
    }).each(function (e) {
      var t, n, r, o, i;
      u.preventDefault(), /^#/.test(e) ? (t = a.dom.select(e + ',[name="' + (Ve(n = e, r = "#") ? (o = n, i = r.length, o.substring(i)) : n) + '"]')).length && a.selection.scrollIntoView(t[0], !0) : window.open(e, "_blank", "rel=noopener noreferrer,menubar=yes,toolbar=yes,location=yes,status=yes,resizable=yes,scrollbars=yes");
    }));
  },
      lE = kt.makeMap("focus blur focusin focusout click dblclick mousedown mouseup mousemove mouseover beforepaste paste cut copy selectionchange mouseout mouseenter mouseleave wheel keydown keypress keyup input beforeinput contextmenu dragstart dragend dragover draggesture dragdrop drop drag submit compositionstart compositionend compositionupdate touchstart touchmove touchend touchcancel", " "),
      fE = (dE.isNative = function (e) {
    return !!lE[e.toLowerCase()];
  }, dE.prototype.fire = function (e, t) {
    var n = e.toLowerCase(),
        r = t || {};
    r.type = n, r.target || (r.target = this.scope), r.preventDefault || (r.preventDefault = function () {
      r.isDefaultPrevented = k;
    }, r.stopPropagation = function () {
      r.isPropagationStopped = k;
    }, r.stopImmediatePropagation = function () {
      r.isImmediatePropagationStopped = k;
    }, r.isDefaultPrevented = C, r.isPropagationStopped = C, r.isImmediatePropagationStopped = C), this.settings.beforeFire && this.settings.beforeFire(r);
    var o = this.bindings[n];
    if (o) for (var i = 0, a = o.length; i < a; i++) {
      var u = o[i];
      if (u.once && this.off(n, u.func), r.isImmediatePropagationStopped()) return r.stopPropagation(), r;
      if (!1 === u.func.call(this.scope, r)) return r.preventDefault(), r;
    }
    return r;
  }, dE.prototype.on = function (e, t, n, r) {
    if (!1 === t && (t = C), t) {
      var o = {
        func: t
      };
      r && kt.extend(o, r);

      for (var i = e.toLowerCase().split(" "), a = i.length; a--;) {
        var u = i[a],
            s = this.bindings[u];
        s || (s = this.bindings[u] = [], this.toggleEvent(u, !0)), n ? s.unshift(o) : s.push(o);
      }
    }

    return this;
  }, dE.prototype.off = function (e, t) {
    var n = this;
    if (e) for (var r = e.toLowerCase().split(" "), o = r.length; o--;) {
      var i = r[o],
          a = this.bindings[i];
      if (!i) return ue(this.bindings, function (e, t) {
        n.toggleEvent(t, !1), delete n.bindings[t];
      }), this;

      if (a) {
        if (t) for (var u = a.length; u--;) {
          a[u].func === t && (a = a.slice(0, u).concat(a.slice(u + 1)), this.bindings[i] = a);
        } else a.length = 0;
        a.length || (this.toggleEvent(e, !1), delete this.bindings[i]);
      }
    } else ue(this.bindings, function (e, t) {
      n.toggleEvent(t, !1);
    }), this.bindings = {};
    return this;
  }, dE.prototype.once = function (e, t, n) {
    return this.on(e, t, n, {
      once: !0
    });
  }, dE.prototype.has = function (e) {
    return e = e.toLowerCase(), !(!this.bindings[e] || 0 === this.bindings[e].length);
  }, dE);

  function dE(e) {
    this.bindings = {}, this.settings = e || {}, this.scope = this.settings.scope || this, this.toggleEvent = this.settings.toggleEvent || C;
  }

  var mE,
      pE = function pE(n) {
    return n._eventDispatcher || (n._eventDispatcher = new fE({
      scope: n,
      toggleEvent: function toggleEvent(e, t) {
        fE.isNative(e) && n.toggleNativeEvent && n.toggleNativeEvent(e, t);
      }
    })), n._eventDispatcher;
  },
      gE = {
    fire: function fire(e, t, n) {
      if (this.removed && "remove" !== e && "detach" !== e) return t;
      var r = pE(this).fire(e, t);
      if (!1 !== n && this.parent) for (var o = this.parent(); o && !r.isPropagationStopped();) {
        o.fire(e, r, !1), o = o.parent();
      }
      return r;
    },
    on: function on(e, t, n) {
      return pE(this).on(e, t, n);
    },
    off: function off(e, t) {
      return pE(this).off(e, t);
    },
    once: function once(e, t) {
      return pE(this).once(e, t);
    },
    hasEventListeners: function hasEventListeners(e) {
      return pE(this).has(e);
    }
  },
      hE = Eu.DOM,
      vE = function vE(e, t) {
    if ("selectionchange" === t) return e.getDoc();
    if (!e.inline && /^mouse|touch|click|contextmenu|drop|dragover|dragend/.test(t)) return e.getDoc().documentElement;
    var n = Ec(e);
    return n ? (e.eventRoot || (e.eventRoot = hE.select(n)[0]), e.eventRoot) : e.getBody();
  },
      yE = function yE(e, t, n) {
    var r;
    (r = e).hidden || uE(r) ? uE(e) && cE(e, n) : e.fire(t, n);
  },
      bE = function bE(i, a) {
    var e;

    if (i.delegates || (i.delegates = {}), !i.delegates[a] && !i.removed) {
      var t = vE(i, a);

      if (Ec(i)) {
        if (mE || (mE = {}, i.editorManager.on("removeEditor", function () {
          i.editorManager.activeEditor || mE && (ue(mE, function (e, t) {
            i.dom.unbind(vE(i, t));
          }), mE = null);
        })), mE[a]) return;
        e = function e(_e10) {
          for (var t = _e10.target, n = i.editorManager.get(), r = n.length; r--;) {
            var o = n[r].getBody();
            o !== t && !hE.isChildOf(t, o) || yE(n[r], a, _e10);
          }
        }, mE[a] = e, hE.bind(t, a, e);
      } else e = function e(_e11) {
        yE(i, a, _e11);
      }, hE.bind(t, a, e), i.delegates[a] = e;
    }
  },
      CE = _ke(_ke({}, gE), {
    bindPendingEventDelegates: function bindPendingEventDelegates() {
      var t = this;
      kt.each(t._pendingNativeEvents, function (e) {
        bE(t, e);
      });
    },
    toggleNativeEvent: function toggleNativeEvent(e, t) {
      var n = this;
      "focus" !== e && "blur" !== e && (t ? n.initialized ? bE(n, e) : n._pendingNativeEvents ? n._pendingNativeEvents.push(e) : n._pendingNativeEvents = [e] : n.initialized && (n.dom.unbind(vE(n, e), e, n.delegates[e]), delete n.delegates[e]));
    },
    unbindAllNativeEvents: function unbindAllNativeEvents() {
      var n = this,
          e = n.getBody(),
          t = n.dom;
      n.delegates && (ue(n.delegates, function (e, t) {
        n.dom.unbind(vE(n, t), t, e);
      }), delete n.delegates), !n.inline && e && t && (e.onload = null, t.unbind(n.getWin()), t.unbind(n.getDoc())), t && (t.unbind(e), t.unbind(n.getContainer()));
    }
  }),
      wE = ["design", "readonly"],
      xE = function xE(e, t, n, r) {
    var o,
        i = n[t.get()],
        a = n[r];

    try {
      a.activate();
    } catch (Ok) {
      return void console.error("problem while activating editor mode " + r + ":", Ok);
    }

    i.deactivate(), i.editorReadOnly !== a.editorReadOnly && aE(e, a.editorReadOnly), t.set(r), o = r, e.fire("SwitchMode", {
      mode: o
    });
  },
      SE = function SE(t) {
    var e,
        n,
        r = Ou("design"),
        o = Ou({
      design: {
        activate: V,
        deactivate: V,
        editorReadOnly: !1
      },
      readonly: {
        activate: V,
        deactivate: V,
        editorReadOnly: !0
      }
    });
    return (e = t).serializer ? sE(e) : e.on("PreInit", function () {
      sE(e);
    }), (n = t).on("ShowCaret", function (e) {
      uE(n) && e.preventDefault();
    }), n.on("ObjectSelected", function (e) {
      uE(n) && e.preventDefault();
    }), {
      isReadOnly: function isReadOnly() {
        return uE(t);
      },
      set: function set(e) {
        return function (e, t, n, r) {
          if (r !== n.get()) {
            if (!he(t, r)) throw new Error("Editor mode '" + r + "' is invalid");
            e.initialized ? xE(e, n, t, r) : e.on("init", function () {
              return xE(e, n, t, r);
            });
          }
        }(t, o.get(), r, e);
      },
      get: function get() {
        return r.get();
      },
      register: function register(e, t) {
        o.set(function (e, t, n) {
          var r;
          if (M(wE, t)) throw new Error("Cannot override default mode " + t);
          return _ke(_ke({}, e), ((r = {})[t] = _ke(_ke({}, n), {
            deactivate: function deactivate() {
              try {
                n.deactivate();
              } catch (Ok) {
                console.error("problem while deactivating editor mode " + t + ":", Ok);
              }
            }
          }), r));
        }(o.get(), e, t));
      }
    };
  },
      NE = kt.each,
      EE = kt.explode,
      kE = {
    f1: 112,
    f2: 113,
    f3: 114,
    f4: 115,
    f5: 116,
    f6: 117,
    f7: 118,
    f8: 119,
    f9: 120,
    f10: 121,
    f11: 122,
    f12: 123
  },
      _E = kt.makeMap("alt,ctrl,shift,meta,access"),
      AE = (RE.prototype.add = function (e, n, t, r) {
    var o = this,
        i = o.normalizeCommandFunc(t);
    return NE(EE(kt.trim(e)), function (e) {
      var t = o.createShortcut(e, n, i, r);
      o.shortcuts[t.id] = t;
    }), !0;
  }, RE.prototype.remove = function (e) {
    var t = this.createShortcut(e);
    return !!this.shortcuts[t.id] && (delete this.shortcuts[t.id], !0);
  }, RE.prototype.normalizeCommandFunc = function (e) {
    var t = this,
        n = e;
    return "string" == typeof n ? function () {
      t.editor.execCommand(n, !1, null);
    } : kt.isArray(n) ? function () {
      t.editor.execCommand(n[0], n[1], n[2]);
    } : n;
  }, RE.prototype.parseShortcut = function (e) {
    var t,
        n = {};
    NE(EE(e.toLowerCase(), "+"), function (e) {
      e in _E ? n[e] = !0 : /^[0-9]{2,}$/.test(e) ? n.keyCode = parseInt(e, 10) : (n.charCode = e.charCodeAt(0), n.keyCode = kE[e] || e.toUpperCase().charCodeAt(0));
    });
    var r = [n.keyCode];

    for (t in _E) {
      n[t] ? r.push(t) : n[t] = !1;
    }

    return n.id = r.join(","), n.access && (n.alt = !0, wt.mac ? n.ctrl = !0 : n.shift = !0), n.meta && (wt.mac ? n.meta = !0 : (n.ctrl = !0, n.meta = !1)), n;
  }, RE.prototype.createShortcut = function (e, t, n, r) {
    var o = kt.map(EE(e, ">"), this.parseShortcut);
    return o[o.length - 1] = kt.extend(o[o.length - 1], {
      func: n,
      scope: r || this.editor
    }), kt.extend(o[0], {
      desc: this.editor.translate(t),
      subpatterns: o.slice(1)
    });
  }, RE.prototype.hasModifier = function (e) {
    return e.altKey || e.ctrlKey || e.metaKey;
  }, RE.prototype.isFunctionKey = function (e) {
    return "keydown" === e.type && 112 <= e.keyCode && e.keyCode <= 123;
  }, RE.prototype.matchShortcut = function (e, t) {
    return !!t && t.ctrl === e.ctrlKey && t.meta === e.metaKey && t.alt === e.altKey && t.shift === e.shiftKey && !!(e.keyCode === t.keyCode || e.charCode && e.charCode === t.charCode) && (e.preventDefault(), !0);
  }, RE.prototype.executeShortcutAction = function (e) {
    return e.func ? e.func.call(e.scope) : null;
  }, RE);

  function RE(e) {
    this.shortcuts = {}, this.pendingPatterns = [], this.editor = e;
    var n = this;
    e.on("keyup keypress keydown", function (t) {
      !n.hasModifier(t) && !n.isFunctionKey(t) || t.isDefaultPrevented() || (NE(n.shortcuts, function (e) {
        if (n.matchShortcut(t, e)) return n.pendingPatterns = e.subpatterns.slice(0), "keydown" === t.type && n.executeShortcutAction(e), !0;
      }), n.matchShortcut(t, n.pendingPatterns[0]) && (1 === n.pendingPatterns.length && "keydown" === t.type && n.executeShortcutAction(n.pendingPatterns[0]), n.pendingPatterns.shift()));
    });
  }

  var TE = function TE() {
    var e,
        t,
        n,
        r,
        o,
        i,
        a,
        u,
        s = (t = {}, n = {}, r = {}, o = {}, i = {}, a = {}, {
      addButton: (u = function u(n, r) {
        return function (e, t) {
          return n[e.toLowerCase()] = _ke(_ke({}, t), {
            type: r
          });
        };
      })(e = {}, "button"),
      addGroupToolbarButton: u(e, "grouptoolbarbutton"),
      addToggleButton: u(e, "togglebutton"),
      addMenuButton: u(e, "menubutton"),
      addSplitButton: u(e, "splitbutton"),
      addMenuItem: u(t, "menuitem"),
      addNestedMenuItem: u(t, "nestedmenuitem"),
      addToggleMenuItem: u(t, "togglemenuitem"),
      addAutocompleter: u(n, "autocompleter"),
      addContextMenu: u(o, "contextmenu"),
      addContextToolbar: u(i, "contexttoolbar"),
      addContextForm: u(i, "contextform"),
      addSidebar: u(a, "sidebar"),
      addIcon: function addIcon(e, t) {
        return r[e.toLowerCase()] = t;
      },
      getAll: function getAll() {
        return {
          buttons: e,
          menuItems: t,
          icons: r,
          popups: n,
          contextMenus: o,
          contextToolbars: i,
          sidebars: a
        };
      }
    });
    return {
      addAutocompleter: s.addAutocompleter,
      addButton: s.addButton,
      addContextForm: s.addContextForm,
      addContextMenu: s.addContextMenu,
      addContextToolbar: s.addContextToolbar,
      addIcon: s.addIcon,
      addMenuButton: s.addMenuButton,
      addMenuItem: s.addMenuItem,
      addNestedMenuItem: s.addNestedMenuItem,
      addSidebar: s.addSidebar,
      addSplitButton: s.addSplitButton,
      addToggleButton: s.addToggleButton,
      addGroupToolbarButton: s.addGroupToolbarButton,
      addToggleMenuItem: s.addToggleMenuItem,
      getAll: s.getAll
    };
  },
      DE = kt.each,
      OE = kt.trim,
      BE = "source protocol authority userInfo user password host port relative path directory file query anchor".split(" "),
      PE = {
    ftp: 21,
    http: 80,
    https: 443,
    mailto: 25
  },
      LE = (IE.parseDataUri = function (e) {
    var t,
        n = decodeURIComponent(e).split(","),
        r = /data:([^;]+)/.exec(n[0]);
    return r && (t = r[1]), {
      type: t,
      data: n[1]
    };
  }, IE.getDocumentBaseUrl = function (e) {
    var t = 0 !== e.protocol.indexOf("http") && "file:" !== e.protocol ? e.href : e.protocol + "//" + e.host + e.pathname;
    return /^[^:]+:\/\/\/?[^\/]+\//.test(t) && (t = t.replace(/[\?#].*$/, "").replace(/[\/\\][^\/]+$/, ""), /[\/\\]$/.test(t) || (t += "/")), t;
  }, IE.prototype.setPath = function (e) {
    var t = /^(.*?)\/?(\w+)?$/.exec(e);
    this.path = t[0], this.directory = t[1], this.file = t[2], this.source = "", this.getURI();
  }, IE.prototype.toRelative = function (e) {
    var t;
    if ("./" === e) return e;
    var n = new IE(e, {
      base_uri: this
    });
    if ("mce_host" !== n.host && this.host !== n.host && n.host || this.port !== n.port || this.protocol !== n.protocol && "" !== n.protocol) return n.getURI();
    var r = this.getURI(),
        o = n.getURI();
    return r === o || "/" === r.charAt(r.length - 1) && r.substr(0, r.length - 1) === o ? r : (t = this.toRelPath(this.path, n.path), n.query && (t += "?" + n.query), n.anchor && (t += "#" + n.anchor), t);
  }, IE.prototype.toAbsolute = function (e, t) {
    var n = new IE(e, {
      base_uri: this
    });
    return n.getURI(t && this.isSameOrigin(n));
  }, IE.prototype.isSameOrigin = function (e) {
    if (this.host == e.host && this.protocol == e.protocol) {
      if (this.port == e.port) return !0;
      var t = PE[this.protocol];
      if (t && (this.port || t) == (e.port || t)) return !0;
    }

    return !1;
  }, IE.prototype.toRelPath = function (e, t) {
    var n,
        r,
        o = 0,
        i = "",
        a = e.substring(0, e.lastIndexOf("/")).split("/"),
        u = t.split("/");
    if (a.length >= u.length) for (n = 0, r = a.length; n < r; n++) {
      if (n >= u.length || a[n] !== u[n]) {
        o = n + 1;
        break;
      }
    }
    if (a.length < u.length) for (n = 0, r = u.length; n < r; n++) {
      if (n >= a.length || a[n] !== u[n]) {
        o = n + 1;
        break;
      }
    }
    if (1 === o) return t;

    for (n = 0, r = a.length - (o - 1); n < r; n++) {
      i += "../";
    }

    for (n = o - 1, r = u.length; n < r; n++) {
      i += n !== o - 1 ? "/" + u[n] : u[n];
    }

    return i;
  }, IE.prototype.toAbsPath = function (e, t) {
    var n,
        r,
        o = 0,
        i = [],
        a = /\/$/.test(t) ? "/" : "",
        u = e.split("/"),
        s = t.split("/");

    for (DE(u, function (e) {
      e && i.push(e);
    }), u = i, n = s.length - 1, i = []; 0 <= n; n--) {
      0 !== s[n].length && "." !== s[n] && (".." !== s[n] ? 0 < o ? o-- : i.push(s[n]) : o++);
    }

    return 0 !== (r = (n = u.length - o) <= 0 ? Z(i).join("/") : u.slice(0, n).join("/") + "/" + Z(i).join("/")).indexOf("/") && (r = "/" + r), a && r.lastIndexOf("/") !== r.length - 1 && (r += a), r;
  }, IE.prototype.getURI = function (e) {
    var t;
    return void 0 === e && (e = !1), this.source && !e || (t = "", e || (this.protocol ? t += this.protocol + "://" : t += "//", this.userInfo && (t += this.userInfo + "@"), this.host && (t += this.host), this.port && (t += ":" + this.port)), this.path && (t += this.path), this.query && (t += "?" + this.query), this.anchor && (t += "#" + this.anchor), this.source = t), this.source;
  }, IE);

  function IE(e, t) {
    e = OE(e), this.settings = t || {};
    var n,
        r,
        o,
        i,
        a = this.settings.base_uri,
        u = this;
    /^([\w\-]+):([^\/]{2})/i.test(e) || /^\s*#/.test(e) ? u.source = e : (n = 0 === e.indexOf("//"), 0 !== e.indexOf("/") || n || (e = (a && a.protocol || "http") + "://mce_host" + e), /^[\w\-]*:?\/\//.test(e) || (r = this.settings.base_uri ? this.settings.base_uri.path : new IE(document.location.href).directory, e = this.settings.base_uri && "" == this.settings.base_uri.protocol ? "//mce_host" + u.toAbsPath(r, e) : (o = /([^#?]*)([#?]?.*)/.exec(e), (a && a.protocol || "http") + "://mce_host" + u.toAbsPath(r, o[1]) + o[2])), e = e.replace(/@@/g, "(mce_at)"), i = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@\/]*):?([^:@\/]*))?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/.exec(e), DE(BE, function (e, t) {
      var n = (n = i[t]) && n.replace(/\(mce_at\)/g, "@@");
      u[e] = n;
    }), a && (u.protocol || (u.protocol = a.protocol), u.userInfo || (u.userInfo = a.userInfo), u.port || "mce_host" !== u.host || (u.port = a.port), u.host && "mce_host" !== u.host || (u.host = a.host), u.source = ""), n && (u.protocol = ""));
  }

  var ME = Eu.DOM,
      FE = kt.extend,
      UE = kt.each,
      zE = kt.resolve,
      jE = wt.ie,
      HE = (VE.prototype.render = function () {
    UN(this);
  }, VE.prototype.focus = function (e) {
    var t, n;
    n = e, (t = this).removed || (n ? _m : km)(t);
  }, VE.prototype.hasFocus = function () {
    return Em(this);
  }, VE.prototype.execCallback = function (e) {
    for (var t = [], n = 1; n < arguments.length; n++) {
      t[n - 1] = arguments[n];
    }

    var r,
        o = this.settings[e];
    if (o) return this.callbackLookup && (r = this.callbackLookup[e]) && (o = r.func, r = r.scope), "string" == typeof o && (r = (r = o.replace(/\.\w+$/, "")) ? zE(r) : 0, o = zE(o), this.callbackLookup = this.callbackLookup || {}, this.callbackLookup[e] = {
      func: o,
      scope: r
    }), o.apply(r || this, t);
  }, VE.prototype.translate = function (e) {
    return Iu.translate(e);
  }, VE.prototype.getParam = function (e, t, n) {
    return Xy(this, e, t, n);
  }, VE.prototype.hasPlugin = function (e, t) {
    return !(!M(Ac(this).split(/[ ,]/), e) || t && ib.get(e) === undefined);
  }, VE.prototype.nodeChanged = function (e) {
    this._nodeChangeDispatcher.nodeChanged(e);
  }, VE.prototype.addCommand = function (e, t, n) {
    this.editorCommands.addCommand(e, t, n);
  }, VE.prototype.addQueryStateHandler = function (e, t, n) {
    this.editorCommands.addQueryStateHandler(e, t, n);
  }, VE.prototype.addQueryValueHandler = function (e, t, n) {
    this.editorCommands.addQueryValueHandler(e, t, n);
  }, VE.prototype.addShortcut = function (e, t, n, r) {
    this.shortcuts.add(e, t, n, r);
  }, VE.prototype.execCommand = function (e, t, n, r) {
    return this.editorCommands.execCommand(e, t, n, r);
  }, VE.prototype.queryCommandState = function (e) {
    return this.editorCommands.queryCommandState(e);
  }, VE.prototype.queryCommandValue = function (e) {
    return this.editorCommands.queryCommandValue(e);
  }, VE.prototype.queryCommandSupported = function (e) {
    return this.editorCommands.queryCommandSupported(e);
  }, VE.prototype.show = function () {
    this.hidden && (this.hidden = !1, this.inline ? this.getBody().contentEditable = "true" : (ME.show(this.getContainer()), ME.hide(this.id)), this.load(), this.fire("show"));
  }, VE.prototype.hide = function () {
    var e = this,
        t = e.getDoc();
    e.hidden || (jE && t && !e.inline && t.execCommand("SelectAll"), e.save(), e.inline ? (e.getBody().contentEditable = "false", e === e.editorManager.focusedEditor && (e.editorManager.focusedEditor = null)) : (ME.hide(e.getContainer()), ME.setStyle(e.id, "display", e.orgDisplay)), e.hidden = !0, e.fire("hide"));
  }, VE.prototype.isHidden = function () {
    return !!this.hidden;
  }, VE.prototype.setProgressState = function (e, t) {
    this.fire("ProgressState", {
      state: e,
      time: t
    });
  }, VE.prototype.load = function (e) {
    var t = this.getElement();
    if (this.removed) return "";

    if (t) {
      (e = e || {}).load = !0;
      var n = Ln(t) ? t.value : t.innerHTML,
          r = this.setContent(n, e);
      return e.element = t, e.no_events || this.fire("LoadContent", e), e.element = t = null, r;
    }
  }, VE.prototype.save = function (e) {
    var t,
        n,
        r = this,
        o = r.getElement();
    if (o && r.initialized && !r.removed) return (e = e || {}).save = !0, e.element = o, e.content = r.getContent(e), e.no_events || r.fire("SaveContent", e), "raw" === e.format && r.fire("RawSaveContent", e), t = e.content, Ln(o) ? o.value = t : (!e.is_removing && r.inline || (o.innerHTML = t), (n = ME.getParent(r.id, "form")) && UE(n.elements, function (e) {
      if (e.name === r.id) return e.value = t, !1;
    })), e.element = o = null, !1 !== e.set_dirty && r.setDirty(!1), t;
  }, VE.prototype.setContent = function (e, t) {
    return ky(this, e, t);
  }, VE.prototype.getContent = function (e) {
    return Ey(this, e);
  }, VE.prototype.insertContent = function (e, t) {
    t && (e = FE({
      content: e
    }, t)), this.execCommand("mceInsertContent", !1, e);
  }, VE.prototype.resetContent = function (e) {
    e === undefined ? ky(this, this.startContent, {
      format: "raw"
    }) : ky(this, e), this.undoManager.reset(), this.setDirty(!1), this.nodeChanged();
  }, VE.prototype.isDirty = function () {
    return !this.isNotDirty;
  }, VE.prototype.setDirty = function (e) {
    var t = !this.isNotDirty;
    this.isNotDirty = !e, e && e !== t && this.fire("dirty");
  }, VE.prototype.getContainer = function () {
    return this.container || (this.container = ME.get(this.editorContainer || this.id + "_parent")), this.container;
  }, VE.prototype.getContentAreaContainer = function () {
    return this.contentAreaContainer;
  }, VE.prototype.getElement = function () {
    return this.targetElm || (this.targetElm = ME.get(this.id)), this.targetElm;
  }, VE.prototype.getWin = function () {
    var e;
    return this.contentWindow || (e = this.iframeElement) && (this.contentWindow = e.contentWindow), this.contentWindow;
  }, VE.prototype.getDoc = function () {
    var e;
    return this.contentDocument || (e = this.getWin()) && (this.contentDocument = e.document), this.contentDocument;
  }, VE.prototype.getBody = function () {
    var e = this.getDoc();
    return this.bodyElement || (e ? e.body : null);
  }, VE.prototype.convertURL = function (e, t, n) {
    var r = this.settings;
    return r.urlconverter_callback ? this.execCallback("urlconverter_callback", e, n, !0, t) : !r.convert_urls || n && "LINK" === n.nodeName || 0 === e.indexOf("file:") || 0 === e.length ? e : r.relative_urls ? this.documentBaseURI.toRelative(e) : e = this.documentBaseURI.toAbsolute(e, r.remove_script_host);
  }, VE.prototype.addVisual = function (e) {
    zN(this, e);
  }, VE.prototype.remove = function () {
    Ry(this);
  }, VE.prototype.destroy = function (e) {
    Ty(this, e);
  }, VE.prototype.uploadImages = function (e) {
    return this.editorUpload.uploadImages(e);
  }, VE.prototype._scanForImages = function () {
    return this.editorUpload.scanForImages();
  }, VE.prototype.addButton = function () {
    throw new Error("editor.addButton has been removed in tinymce 5x, use editor.ui.registry.addButton or editor.ui.registry.addToggleButton or editor.ui.registry.addSplitButton instead");
  }, VE.prototype.addSidebar = function () {
    throw new Error("editor.addSidebar has been removed in tinymce 5x, use editor.ui.registry.addSidebar instead");
  }, VE.prototype.addMenuItem = function () {
    throw new Error("editor.addMenuItem has been removed in tinymce 5x, use editor.ui.registry.addMenuItem instead");
  }, VE.prototype.addContextToolbar = function () {
    throw new Error("editor.addContextToolbar has been removed in tinymce 5x, use editor.ui.registry.addContextToolbar instead");
  }, VE);

  function VE(e, t, n) {
    var r = this;
    this.plugins = {}, this.contentCSS = [], this.contentStyles = [], this.loadedCSS = {}, this.isNotDirty = !1, this.editorManager = n, this.documentBaseUrl = n.documentBaseURL, FE(this, CE), this.settings = Wy(this, e, this.documentBaseUrl, n.defaultSettings, t), this.settings.suffix && (n.suffix = this.settings.suffix), this.suffix = n.suffix, this.settings.base_url && n._setBaseUrl(this.settings.base_url), this.baseUri = n.baseURI, this.settings.referrer_policy && (Ru.ScriptLoader._setReferrerPolicy(this.settings.referrer_policy), Eu.DOM.styleSheetLoader._setReferrerPolicy(this.settings.referrer_policy)), Uu.languageLoad = this.settings.language_load, Uu.baseURL = n.baseURL, this.id = e, this.setDirty(!1), this.documentBaseURI = new LE(this.settings.document_base_url, {
      base_uri: this.baseUri
    }), this.baseURI = this.baseUri, this.inline = !!this.settings.inline, this.shortcuts = new AE(this), this.editorCommands = new eE(this), this.settings.cache_suffix && (wt.cacheSuffix = this.settings.cache_suffix.replace(/^[\?\&]+/, "")), this.ui = {
      registry: TE(),
      styleSheetLoader: undefined,
      show: V,
      hide: V,
      enable: V,
      disable: V,
      isDisabled: C
    };
    var o = SE(this);
    this.mode = o, this.setMode = o.set, n.fire("SetupEditor", {
      editor: this
    }), this.execCallback("setup", this), this.$ = hu.overrideDefaults(function () {
      return {
        context: r.inline ? r.getBody() : r.getDoc(),
        element: r.getBody()
      };
    });
  }

  var qE,
      $E = Eu.DOM,
      WE = kt.explode,
      KE = kt.each,
      XE = kt.extend,
      YE = 0,
      GE = !1,
      JE = [],
      QE = [],
      ZE = function ZE(t) {
    var n = t.type;
    KE(rk.get(), function (e) {
      switch (n) {
        case "scroll":
          e.fire("ScrollWindow", t);
          break;

        case "resize":
          e.fire("ResizeWindow", t);
      }
    });
  },
      ek = function ek(e) {
    e !== GE && (e ? hu(window).on("resize scroll", ZE) : hu(window).off("resize scroll", ZE), GE = e);
  },
      tk = function tk(t) {
    var e = QE;
    delete JE[t.id];

    for (var n = 0; n < JE.length; n++) {
      if (JE[n] === t) {
        JE.splice(n, 1);
        break;
      }
    }

    return QE = H(QE, function (e) {
      return t !== e;
    }), rk.activeEditor === t && (rk.activeEditor = 0 < QE.length ? QE[0] : null), rk.focusedEditor === t && (rk.focusedEditor = null), e.length !== QE.length;
  },
      nk = "CSS1Compat" !== document.compatMode,
      rk = _ke(_ke({}, gE), {
    baseURI: null,
    baseURL: null,
    defaultSettings: {},
    documentBaseURL: null,
    suffix: null,
    $: hu,
    majorVersion: "5",
    minorVersion: "6.2",
    releaseDate: "2020-12-08",
    editors: JE,
    i18n: Iu,
    activeEditor: null,
    focusedEditor: null,
    settings: {},
    setup: function setup() {
      var e,
          t = "",
          n = LE.getDocumentBaseUrl(document.location);
      /^[^:]+:\/\/\/?[^\/]+\//.test(n) && (n = n.replace(/[\?#].*$/, "").replace(/[\/\\][^\/]+$/, ""), /[\/\\]$/.test(n) || (n += "/"));
      var r,
          o = window.tinymce || window.tinyMCEPreInit;
      if (o) e = o.base || o.baseURL, t = o.suffix;else {
        for (var i, a = document.getElementsByTagName("script"), u = 0; u < a.length; u++) {
          if ("" !== (i = a[u].src || "")) {
            var s = i.substring(i.lastIndexOf("/"));

            if (/tinymce(\.full|\.jquery|)(\.min|\.dev|)\.js/.test(i)) {
              -1 !== s.indexOf(".min") && (t = ".min"), e = i.substring(0, i.lastIndexOf("/"));
              break;
            }
          }
        }

        !e && document.currentScript && (-1 !== (i = document.currentScript.src).indexOf(".min") && (t = ".min"), e = i.substring(0, i.lastIndexOf("/")));
      }
      this.baseURL = new LE(n).toAbsolute(e), this.documentBaseURL = n, this.baseURI = new LE(this.baseURL), this.suffix = t, (r = this).on("AddEditor", N(ym, r)), r.on("RemoveEditor", N(bm, r));
    },
    overrideDefaults: function overrideDefaults(e) {
      var t = e.base_url;
      t && this._setBaseUrl(t);
      var n = e.suffix;
      e.suffix && (this.suffix = n);
      var r = (this.defaultSettings = e).plugin_base_urls;
      r !== undefined && ue(r, function (e, t) {
        Uu.PluginManager.urls[t] = e;
      });
    },
    init: function init(r) {
      var n,
          u = this,
          s = kt.makeMap("area base basefont br col frame hr img input isindex link meta param embed source wbr track colgroup option table tbody tfoot thead tr th td script noscript style textarea video audio iframe object menu", " "),
          c = function c(e) {
        var t = e.id;
        return t || (t = ge(e, "name").filter(function (e) {
          return !$E.get(e);
        }).getOrThunk($E.uniqueId), e.setAttribute("id", t)), t;
      },
          l = function l(e, t) {
        return t.constructor === RegExp ? t.test(e.className) : $E.hasClass(e, t);
      },
          f = function f(e) {
        n = e;
      },
          e = function e() {
        var o,
            i = 0,
            a = [],
            n = function n(e, t, _n4) {
          var r = new HE(e, t, u);
          a.push(r), r.on("init", function () {
            ++i === o.length && f(a);
          }), r.targetElm = r.targetElm || _n4, r.render();
        };

        $E.unbind(window, "ready", e), function (e) {
          var t = r[e];
          if (t) t.apply(u, Array.prototype.slice.call(arguments, 2));
        }("onpageload"), o = hu.unique(function (t) {
          var n = [];
          if (wt.browser.isIE() && wt.browser.version.major < 11) return mb("TinyMCE does not support the browser you are using. For a list of supported browsers please see: https://www.tinymce.com/docs/get-started/system-requirements/"), [];
          if (nk) return mb("Failed to initialize the editor as the document is not in standards mode. TinyMCE requires standards mode."), [];
          if (t.types) return KE(t.types, function (e) {
            n = n.concat($E.select(e.selector));
          }), n;
          if (t.selector) return $E.select(t.selector);
          if (t.target) return [t.target];

          switch (t.mode) {
            case "exact":
              var e = t.elements || "";
              0 < e.length && KE(WE(e), function (t) {
                var e = $E.get(t);
                e ? n.push(e) : KE(document.forms, function (e) {
                  KE(e.elements, function (e) {
                    e.name === t && (t = "mce_editor_" + YE++, $E.setAttrib(e, "id", t), n.push(e));
                  });
                });
              });
              break;

            case "textareas":
            case "specific_textareas":
              KE($E.select("textarea"), function (e) {
                t.editor_deselector && l(e, t.editor_deselector) || t.editor_selector && !l(e, t.editor_selector) || n.push(e);
              });
          }

          return n;
        }(r)), r.types ? KE(r.types, function (t) {
          kt.each(o, function (e) {
            return !$E.is(e, t.selector) || (n(c(e), XE({}, r, t), e), !1);
          });
        }) : (kt.each(o, function (e) {
          var t;
          (t = u.get(e.id)) && t.initialized && !(t.getContainer() || t.getBody()).parentNode && (tk(t), t.unbindAllNativeEvents(), t.destroy(!0), t.removed = !0, t = null);
        }), 0 === (o = kt.grep(o, function (e) {
          return !u.get(e.id);
        })).length ? f([]) : KE(o, function (e) {
          var t;
          t = e, r.inline && t.tagName.toLowerCase() in s ? mb("Could not initialize inline editor on invalid inline target element", e) : n(c(e), r, e);
        }));
      };

      return u.settings = r, $E.bind(window, "ready", e), new Br(function (t) {
        n ? t(n) : f = function f(e) {
          t(e);
        };
      });
    },
    get: function get(t) {
      return 0 === arguments.length ? QE.slice(0) : q(t) ? Y(QE, function (e) {
        return e.id === t;
      }).getOr(null) : O(t) && QE[t] ? QE[t] : null;
    },
    add: function add(e) {
      var n = this;
      return JE[e.id] === e || (null === n.get(e.id) && ("length" !== e.id && (JE[e.id] = e), JE.push(e), QE.push(e)), ek(!0), n.activeEditor = e, n.fire("AddEditor", {
        editor: e
      }), qE || (qE = function qE(e) {
        var t = n.fire("BeforeUnload");
        if (t.returnValue) return e.preventDefault(), e.returnValue = t.returnValue, t.returnValue;
      }, window.addEventListener("beforeunload", qE))), e;
    },
    createEditor: function createEditor(e, t) {
      return this.add(new HE(e, t, this));
    },
    remove: function remove(e) {
      var t,
          n,
          r = this;

      if (e) {
        if (!q(e)) return n = e, x(r.get(n.id)) ? null : (tk(n) && r.fire("RemoveEditor", {
          editor: n
        }), 0 === QE.length && window.removeEventListener("beforeunload", qE), n.remove(), ek(0 < QE.length), n);
        KE($E.select(e), function (e) {
          (n = r.get(e.id)) && r.remove(n);
        });
      } else for (t = QE.length - 1; 0 <= t; t--) {
        r.remove(QE[t]);
      }
    },
    execCommand: function execCommand(e, t, n) {
      var r = this.get(n);

      switch (e) {
        case "mceAddEditor":
          return this.get(n) || new HE(n, this.settings, this).render(), !0;

        case "mceRemoveEditor":
          return r && r.remove(), !0;

        case "mceToggleEditor":
          return r ? (r.isHidden() ? r.show() : r.hide(), !0) : (this.execCommand("mceAddEditor", 0, n), !0);
      }

      return !!this.activeEditor && this.activeEditor.execCommand(e, t, n);
    },
    triggerSave: function triggerSave() {
      KE(QE, function (e) {
        e.save();
      });
    },
    addI18n: function addI18n(e, t) {
      Iu.add(e, t);
    },
    translate: function translate(e) {
      return Iu.translate(e);
    },
    setActive: function setActive(e) {
      var t = this.activeEditor;
      this.activeEditor !== e && (t && t.fire("deactivate", {
        relatedTarget: e
      }), e.fire("activate", {
        relatedTarget: t
      })), this.activeEditor = e;
    },
    _setBaseUrl: function _setBaseUrl(e) {
      this.baseURL = new LE(this.documentBaseURL).toAbsolute(e.replace(/\/+$/, "")), this.baseURI = new LE(this.baseURL);
    }
  });

  rk.setup();

  var ok,
      ik,
      _ak,
      uk,
      sk = Math.min,
      ck = Math.max,
      lk = Math.round,
      fk = function fk(e, t, n) {
    var r = t.x,
        o = t.y,
        i = e.w,
        a = e.h,
        u = t.w,
        s = t.h,
        c = (n || "").split("");
    return "b" === c[0] && (o += s), "r" === c[1] && (r += u), "c" === c[0] && (o += lk(s / 2)), "c" === c[1] && (r += lk(u / 2)), "b" === c[3] && (o -= a), "r" === c[4] && (r -= i), "c" === c[3] && (o -= lk(a / 2)), "c" === c[4] && (r -= lk(i / 2)), dk(r, o, i, a);
  },
      dk = function dk(e, t, n, r) {
    return {
      x: e,
      y: t,
      w: n,
      h: r
    };
  },
      mk = {
    inflate: function inflate(e, t, n) {
      return dk(e.x - t, e.y - n, e.w + 2 * t, e.h + 2 * n);
    },
    relativePosition: fk,
    findBestRelativePosition: function findBestRelativePosition(e, t, n, r) {
      for (var o, i = 0; i < r.length; i++) {
        if ((o = fk(e, t, r[i])).x >= n.x && o.x + o.w <= n.w + n.x && o.y >= n.y && o.y + o.h <= n.h + n.y) return r[i];
      }

      return null;
    },
    intersect: function intersect(e, t) {
      var n = ck(e.x, t.x),
          r = ck(e.y, t.y),
          o = sk(e.x + e.w, t.x + t.w),
          i = sk(e.y + e.h, t.y + t.h);
      return o - n < 0 || i - r < 0 ? null : dk(n, r, o - n, i - r);
    },
    clamp: function clamp(e, t, n) {
      var r = e.x,
          o = e.y,
          i = e.x + e.w,
          a = e.y + e.h,
          u = t.x + t.w,
          s = t.y + t.h,
          c = ck(0, t.x - r),
          l = ck(0, t.y - o),
          f = ck(0, i - u),
          d = ck(0, a - s);
      return r += c, o += l, n && (i += c, a += l, r -= f, o -= d), dk(r, o, (i -= f) - r, (a -= d) - o);
    },
    create: dk,
    fromClientRect: function fromClientRect(e) {
      return dk(e.left, e.top, e.width, e.height);
    }
  },
      pk = (ok = {}, ik = {}, {
    load: function load(r, o) {
      var i = 'Script at URL "' + o + '" failed to load',
          a = 'Script at URL "' + o + "\" did not call `tinymce.Resource.add('" + r + "', data)` within 1 second";
      if (ok[r] !== undefined) return ok[r];
      var e = new Br(function (e, t) {
        var n = function (e, t, n) {
          void 0 === n && (n = 1e3);

          var r = !1,
              o = null,
              i = function i(n) {
            return function () {
              for (var e = [], t = 0; t < arguments.length; t++) {
                e[t] = arguments[t];
              }

              r || (r = !0, null !== o && (clearTimeout(o), o = null), n.apply(null, e));
            };
          },
              a = i(e),
              u = i(t);

          return {
            start: function start() {
              for (var e = [], t = 0; t < arguments.length; t++) {
                e[t] = arguments[t];
              }

              r || null !== o || (o = setTimeout(function () {
                return u.apply(null, e);
              }, n));
            },
            resolve: a,
            reject: u
          };
        }(e, t);

        ik[r] = n.resolve, Ru.ScriptLoader.loadScript(o, function () {
          return n.start(a);
        }, function () {
          return n.reject(i);
        });
      });
      return ok[r] = e;
    },
    add: function add(e, t) {
      ik[e] !== undefined && (ik[e](t), delete ik[e]), ok[e] = Br.resolve(t);
    }
  }),
      gk = kt.each,
      hk = kt.extend,
      vk = function vk() {};

  vk.extend = _ak = function ak(n) {
    var o = this.prototype,
        r = function r() {
      var e, t, n;
      if (!uk && (this.init && this.init.apply(this, arguments), t = this.Mixins)) for (e = t.length; e--;) {
        (n = t[e]).init && n.init.apply(this, arguments);
      }
    },
        t = function t() {
      return this;
    };

    uk = !0;
    var i = new this();
    return uk = !1, n.Mixins && (gk(n.Mixins, function (e) {
      for (var t in e) {
        "init" !== t && (n[t] = e[t]);
      }
    }), o.Mixins && (n.Mixins = o.Mixins.concat(n.Mixins))), n.Methods && gk(n.Methods.split(","), function (e) {
      n[e] = t;
    }), n.Properties && gk(n.Properties.split(","), function (e) {
      var t = "_" + e;

      n[e] = function (e) {
        return e !== undefined ? (this[t] = e, this) : this[t];
      };
    }), n.Statics && gk(n.Statics, function (e, t) {
      r[t] = e;
    }), n.Defaults && o.Defaults && (n.Defaults = hk({}, o.Defaults, n.Defaults)), ue(n, function (e, t) {
      var n, r;
      "function" == typeof e && o[t] ? i[t] = (n = t, r = e, function () {
        var e = this._super;
        this._super = o[n];
        var t = r.apply(this, arguments);
        return this._super = e, t;
      }) : i[t] = e;
    }), r.prototype = i, (r.constructor = r).extend = _ak, r;
  };

  var yk = Math.min,
      bk = Math.max,
      Ck = Math.round,
      wk = {
    serialize: function serialize(e) {
      var t = JSON.stringify(e);
      return q(t) ? t.replace(/[\u0080-\uFFFF]/g, function (e) {
        var t = e.charCodeAt(0).toString(16);
        return "\\u" + "0000".substring(t.length) + t;
      }) : t;
    },
    parse: function parse(e) {
      try {
        return JSON.parse(e);
      } catch (t) {}
    }
  },
      xk = {
    callbacks: {},
    count: 0,
    send: function send(t) {
      var n = this,
          r = Eu.DOM,
          o = t.count !== undefined ? t.count : n.count,
          i = "tinymce_jsonp_" + o;
      n.callbacks[o] = function (e) {
        r.remove(i), delete n.callbacks[o], t.callback(e);
      }, r.add(r.doc.body, "script", {
        id: i,
        src: t.url,
        type: "text/javascript"
      }), n.count++;
    }
  },
      Sk = _ke(_ke({}, gE), {
    send: function send(e) {
      var t,
          n = 0,
          r = function r() {
        !e.async || 4 === t.readyState || 1e4 < n++ ? (e.success && n < 1e4 && 200 === t.status ? e.success.call(e.success_scope, "" + t.responseText, t, e) : e.error && e.error.call(e.error_scope, 1e4 < n ? "TIMED_OUT" : "GENERAL", t, e), t = null) : qr.setTimeout(r, 10);
      };

      if (e.scope = e.scope || this, e.success_scope = e.success_scope || e.scope, e.error_scope = e.error_scope || e.scope, e.async = !1 !== e.async, e.data = e.data || "", Sk.fire("beforeInitialize", {
        settings: e
      }), (t = new XMLHttpRequest()).overrideMimeType && t.overrideMimeType(e.content_type), t.open(e.type || (e.data ? "POST" : "GET"), e.url, e.async), e.crossDomain && (t.withCredentials = !0), e.content_type && t.setRequestHeader("Content-Type", e.content_type), e.requestheaders && kt.each(e.requestheaders, function (e) {
        t.setRequestHeader(e.key, e.value);
      }), t.setRequestHeader("X-Requested-With", "XMLHttpRequest"), (t = Sk.fire("beforeSend", {
        xhr: t,
        settings: e
      }).xhr).send(e.data), !e.async) return r();
      qr.setTimeout(r, 10);
    }
  }),
      Nk = kt.extend,
      Ek = (kk.sendRPC = function (e) {
    return new kk().send(e);
  }, kk.prototype.send = function (e) {
    var n = e.error,
        r = e.success,
        o = Nk(this.settings, e);
    o.success = function (e, t) {
      void 0 === (e = wk.parse(e)) && (e = {
        error: "JSON Parse error."
      }), e.error ? n.call(o.error_scope || o.scope, e.error, t) : r.call(o.success_scope || o.scope, e.result);
    }, o.error = function (e, t) {
      n && n.call(o.error_scope || o.scope, e, t);
    }, o.data = wk.serialize({
      id: e.id || "c" + this.count++,
      method: e.method,
      params: e.params
    }), o.content_type = "application/json", Sk.send(o);
  }, kk);

  function kk(e) {
    this.settings = Nk({}, e), this.count = 0;
  }

  try {
    var _k,
        Ak = "__storage_test__";

    (_k = window.localStorage).setItem(Ak, Ak), _k.removeItem(Ak);
  } catch (Ok) {
    _k = function () {
      return n = {}, r = [], e = {
        getItem: function getItem(e) {
          var t = n[e];
          return t || null;
        },
        setItem: function setItem(e, t) {
          r.push(e), n[e] = String(t);
        },
        key: function key(e) {
          return r[e];
        },
        removeItem: function removeItem(t) {
          r = r.filter(function (e) {
            return e === t;
          }), delete n[t];
        },
        clear: function clear() {
          r = [], n = {};
        },
        length: 0
      }, Object.defineProperty(e, "length", {
        get: function get() {
          return r.length;
        },
        configurable: !1,
        enumerable: !1
      }), e;
      var n, r, e;
    }();
  }

  var Rk,
      Tk = {
    geom: {
      Rect: mk
    },
    util: {
      Promise: Br,
      Delay: qr,
      Tools: kt,
      VK: ud,
      URI: LE,
      Class: vk,
      EventDispatcher: fE,
      Observable: gE,
      I18n: Iu,
      XHR: Sk,
      JSON: wk,
      JSONRequest: Ek,
      JSONP: xk,
      LocalStorage: _k,
      Color: function Color(e) {
        var n = {},
            u = 0,
            s = 0,
            c = 0,
            t = function t(e) {
          var t;
          return "object" == _typeof(e) ? "r" in e ? (u = e.r, s = e.g, c = e.b) : "v" in e && function (e, t, n) {
            if (e = (parseInt(e, 10) || 0) % 360, t = parseInt(t, 10) / 100, n = parseInt(n, 10) / 100, t = bk(0, yk(t, 1)), n = bk(0, yk(n, 1)), 0 !== t) {
              var r = e / 60,
                  o = n * t,
                  i = o * (1 - Math.abs(r % 2 - 1)),
                  a = n - o;

              switch (Math.floor(r)) {
                case 0:
                  u = o, s = i, c = 0;
                  break;

                case 1:
                  u = i, s = o, c = 0;
                  break;

                case 2:
                  u = 0, s = o, c = i;
                  break;

                case 3:
                  u = 0, s = i, c = o;
                  break;

                case 4:
                  u = i, s = 0, c = o;
                  break;

                case 5:
                  u = o, s = 0, c = i;
                  break;

                default:
                  u = s = c = 0;
              }

              u = Ck(255 * (u + a)), s = Ck(255 * (s + a)), c = Ck(255 * (c + a));
            } else u = s = c = Ck(255 * n);
          }(e.h, e.s, e.v) : (t = /rgb\s*\(\s*([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)[^\)]*\)/gi.exec(e)) ? (u = parseInt(t[1], 10), s = parseInt(t[2], 10), c = parseInt(t[3], 10)) : (t = /#([0-F]{2})([0-F]{2})([0-F]{2})/gi.exec(e)) ? (u = parseInt(t[1], 16), s = parseInt(t[2], 16), c = parseInt(t[3], 16)) : (t = /#([0-F])([0-F])([0-F])/gi.exec(e)) && (u = parseInt(t[1] + t[1], 16), s = parseInt(t[2] + t[2], 16), c = parseInt(t[3] + t[3], 16)), u = u < 0 ? 0 : 255 < u ? 255 : u, s = s < 0 ? 0 : 255 < s ? 255 : s, c = c < 0 ? 0 : 255 < c ? 255 : c, n;
        };

        return e && t(e), n.toRgb = function () {
          return {
            r: u,
            g: s,
            b: c
          };
        }, n.toHsv = function () {
          return e = u, t = s, n = c, o = 0, i = yk(e /= 255, yk(t /= 255, n /= 255)), a = bk(e, bk(t, n)), i === a ? {
            h: 0,
            s: 0,
            v: 100 * (o = i)
          } : (r = (a - i) / a, {
            h: Ck(60 * ((e === i ? 3 : n === i ? 1 : 5) - (e === i ? t - n : n === i ? e - t : n - e) / ((o = a) - i))),
            s: Ck(100 * r),
            v: Ck(100 * o)
          });
          var e, t, n, r, o, i, a;
        }, n.toHex = function () {
          var e = function e(_e12) {
            return 1 < (_e12 = parseInt(_e12, 10).toString(16)).length ? _e12 : "0" + _e12;
          };

          return "#" + e(u) + e(s) + e(c);
        }, n.parse = t, n;
      }
    },
    dom: {
      EventUtils: Ti,
      Sizzle: Ta,
      DomQuery: hu,
      TreeWalker: Xr,
      TextSeeker: fs,
      DOMUtils: Eu,
      ScriptLoader: Ru,
      RangeUtils: xd,
      Serializer: Ny,
      StyleSheetLoader: $r,
      ControlSelection: cd,
      BookmarkManager: od,
      Selection: Qv,
      Event: Ti.Event
    },
    html: {
      Styles: xi,
      Entities: ci,
      Node: Km,
      Schema: Ci,
      SaxParser: ip,
      DomParser: by,
      Writer: Gm,
      Serializer: Jm
    },
    Env: wt,
    AddOnManager: Uu,
    Annotator: td,
    Formatter: _b,
    UndoManager: Rb,
    EditorCommands: eE,
    WindowManager: ub,
    NotificationManager: ob,
    EditorObservable: CE,
    Shortcuts: AE,
    Editor: HE,
    FocusManager: mm,
    EditorManager: rk,
    DOM: Eu.DOM,
    ScriptLoader: Ru.ScriptLoader,
    PluginManager: ib,
    ThemeManager: ab,
    IconManager: Yy,
    Resource: pk,
    trim: kt.trim,
    isArray: kt.isArray,
    is: kt.is,
    toArray: kt.toArray,
    makeMap: kt.makeMap,
    each: kt.each,
    map: kt.map,
    grep: kt.grep,
    inArray: kt.inArray,
    extend: kt.extend,
    create: kt.create,
    walk: kt.walk,
    createNS: kt.createNS,
    resolve: kt.resolve,
    explode: kt.explode,
    _addCacheSuffix: kt._addCacheSuffix,
    isOpera: wt.opera,
    isWebKit: wt.webkit,
    isIE: wt.ie,
    isGecko: wt.gecko,
    isMac: wt.mac
  },
      Dk = kt.extend(rk, Tk);
  Rk = Dk, window.tinymce = Rk, window.tinyMCE = Rk, function (e) {
    if ("object" == ( false ? 0 : _typeof(module))) try {
      module.exports = e;
    } catch (t) {}
  }(Dk);
}();
/* Ephox Fluffy plugin
 *
 * Copyright 2010-2016 Ephox Corporation.  All rights reserved.
 *
 * Version: 2.4.0-12
 */

!function (a) {
  "use strict";

  var n,
      t,
      r,
      e,
      u = void 0 !== a.window ? a.window : Function("return this;")(),
      i = function i(n, t) {
    return {
      isRequired: n,
      applyPatch: t
    };
  },
      c = function c(i, o) {
    return function () {
      for (var n = [], t = 0; t < arguments.length; t++) {
        n[t] = arguments[t];
      }

      var r = o.apply(this, n),
          e = void 0 === r ? n : r;
      return i.apply(this, e);
    };
  },
      o = function o(n, t) {
    if (n) for (var r = 0; r < t.length; r++) {
      t[r].isRequired(n) && t[r].applyPatch(n);
    }
    return n;
  },
      f = function f() {},
      l = function l(n) {
    return function () {
      return n;
    };
  },
      s = l(!1),
      g = l(!0),
      p = function p() {
    return d;
  },
      d = (n = function n(_n5) {
    return _n5.isNone();
  }, e = {
    fold: function fold(n, t) {
      return n();
    },
    is: s,
    isSome: s,
    isNone: g,
    getOr: r = function r(n) {
      return n;
    },
    getOrThunk: t = function t(n) {
      return n();
    },
    getOrDie: function getOrDie(n) {
      throw new Error(n || "error: getOrDie called on none.");
    },
    getOrNull: l(null),
    getOrUndefined: l(void 0),
    or: r,
    orThunk: t,
    map: p,
    each: f,
    bind: p,
    exists: s,
    forall: g,
    filter: p,
    equals: n,
    equals_: n,
    toArray: function toArray() {
      return [];
    },
    toString: l("none()")
  }, Object.freeze && Object.freeze(e), e),
      h = function h(r) {
    var n = l(r),
        t = function t() {
      return i;
    },
        e = function e(n) {
      return n(r);
    },
        i = {
      fold: function fold(n, t) {
        return t(r);
      },
      is: function is(n) {
        return r === n;
      },
      isSome: g,
      isNone: s,
      getOr: n,
      getOrThunk: n,
      getOrDie: n,
      getOrNull: n,
      getOrUndefined: n,
      or: t,
      orThunk: t,
      map: function map(n) {
        return h(n(r));
      },
      each: function each(n) {
        n(r);
      },
      bind: e,
      exists: e,
      forall: e,
      filter: function filter(n) {
        return n(r) ? i : d;
      },
      toArray: function toArray() {
        return [r];
      },
      toString: function toString() {
        return "some(" + r + ")";
      },
      equals: function equals(n) {
        return n.is(r);
      },
      equals_: function equals_(n, t) {
        return n.fold(s, function (n) {
          return t(r, n);
        });
      }
    };

    return i;
  },
      v = p,
      y = function y(n) {
    return null == n ? d : h(n);
  },
      m = function m(t) {
    return function (n) {
      return function (n) {
        if (null === n) return "null";

        var t = _typeof(n);

        return "object" === t && (Array.prototype.isPrototypeOf(n) || n.constructor && "Array" === n.constructor.name) ? "array" : "object" === t && (String.prototype.isPrototypeOf(n) || n.constructor && "String" === n.constructor.name) ? "string" : t;
      }(n) === t;
    };
  },
      w = m("object"),
      O = m("array"),
      b = m("undefined"),
      j = m("function"),
      A = (Array.prototype.slice, Array.prototype.indexOf),
      x = Array.prototype.push,
      E = function E(n, t) {
    return r = n, e = t, -1 < A.call(r, e);
    var r, e;
  },
      S = function S(n, t) {
    return function (n) {
      for (var t = [], r = 0, e = n.length; r < e; ++r) {
        if (!O(n[r])) throw new Error("Arr.flatten item " + r + " was not an array, input: " + n);
        x.apply(t, n[r]);
      }

      return t;
    }(function (n, t) {
      for (var r = n.length, e = new Array(r), i = 0; i < r; i++) {
        var o = n[i];
        e[i] = t(o, i);
      }

      return e;
    }(n, t));
  },
      M = (j(Array.from) && Array.from, Object.prototype.hasOwnProperty),
      _ = function _(u) {
    return function () {
      for (var n = new Array(arguments.length), t = 0; t < n.length; t++) {
        n[t] = arguments[t];
      }

      if (0 === n.length) throw new Error("Can't merge zero objects");

      for (var r = {}, e = 0; e < n.length; e++) {
        var i = n[e];

        for (var o in i) {
          M.call(i, o) && (r[o] = u(r[o], i[o]));
        }
      }

      return r;
    };
  },
      D = _(function (n, t) {
    return w(n) && w(t) ? D(n, t) : t;
  }),
      P = _(function (n, t) {
    return t;
  }),
      U = Object.keys,
      N = Object.hasOwnProperty,
      R = function R(n, t) {
    for (var r = U(n), e = 0, i = r.length; e < i; e++) {
      var o = r[e];
      t(n[o], o);
    }
  },
      T = function T(n, t) {
    return q(n, t) ? y(n[t]) : v();
  },
      q = function q(n, t) {
    return N.call(n, t);
  },
      C = function C(n) {
    if (b(n) || "" === n) return [];
    var t = O(n) ? S(n, function (n) {
      return n.split(/[\s+,]/);
    }) : n.split(/[\s+,]/);
    return S(t, function (n) {
      return 0 < n.length ? [n.trim()] : [];
    });
  },
      I = function I(n, t) {
    var r,
        e,
        i,
        o = D(n, t),
        u = C(t.plugins),
        a = T(o, "custom_plugin_urls").getOr({}),
        c = (r = function r(n, t) {
      return E(u, t);
    }, e = {}, i = {}, R(a, function (n, t) {
      (r(n, t) ? e : i)[t] = n;
    }), {
      t: e,
      f: i
    }),
        f = T(o, "external_plugins").getOr({}),
        l = {};
    R(c.t, function (n, t) {
      l[t] = n;
    });
    var s = P(l, f);
    return P(t, 0 === U(s).length ? {} : {
      external_plugins: s
    });
  },
      k = {
    getCustomPluginUrls: I,
    patch: i(function () {
      return !0;
    }, function (t) {
      t.EditorManager.init = c(t.EditorManager.init, function (n) {
        return [I(t.defaultSettings, n)];
      });
    })
  },
      L = function L(n, t) {
    return function (n, t) {
      for (var r = null != t ? t : u, e = 0; e < n.length && null != r; ++e) {
        r = r[n[e]];
      }

      return r;
    }(n.split("."), t);
  },
      z = function z(n) {
    return parseInt(n, 10);
  },
      V = function V(n, t) {
    var r = n - t;
    return 0 === r ? 0 : 0 < r ? 1 : -1;
  },
      B = function B(n, t, r) {
    return {
      major: n,
      minor: t,
      patch: r
    };
  },
      F = function F(n) {
    var t = /([0-9]+)\.([0-9]+)\.([0-9]+)(?:(\-.+)?)/.exec(n);
    return t ? B(z(t[1]), z(t[2]), z(t[3])) : B(0, 0, 0);
  },
      $ = function $(n, t) {
    return !!n && -1 === function (n, t) {
      var r = V(n.major, t.major);
      if (0 !== r) return r;
      var e = V(n.minor, t.minor);
      if (0 !== e) return e;
      var i = V(n.patch, t.patch);
      return 0 !== i ? i : 0;
    }(F([(r = n).majorVersion, r.minorVersion].join(".").split(".").slice(0, 3).join(".")), F(t));
    var r;
  },
      G = {
    patch: i(function (n) {
      return $(n, "4.7.0");
    }, function (n) {
      var o;
      n.EditorManager.init = c(n.EditorManager.init, (o = n.EditorManager, function (n) {
        var t = L("tinymce.util.Tools", u),
            r = C(n.plugins),
            e = o.defaultSettings.forced_plugins || [],
            i = 0 < e.length ? r.concat(e) : r;
        return [t.extend({}, n, {
          plugins: i
        })];
      }));
    })
  },
      H = function H() {
    return new Date().getTime();
  },
      J = function J(n, t, r, e, i) {
    var o,
        u = H();
    o = a.setInterval(function () {
      n() && (a.clearInterval(o), t()), H() - u > i && (a.clearInterval(o), r());
    }, e);
  },
      K = function K(i) {
    return function () {
      var n,
          t,
          r,
          e = (n = i, t = "position", r = n.currentStyle ? n.currentStyle[t] : a.window.getComputedStyle(n, null)[t], r || "").toLowerCase();
      return "absolute" === e || "fixed" === e;
    };
  },
      Q = function Q(n) {
    n.parentNode.removeChild(n);
  },
      W = function W(n, t) {
    var r,
        e = ((r = a.document.createElement("div")).style.display = "none", r.className = "mce-floatpanel", r);
    a.document.body.appendChild(e), J(K(e), function () {
      Q(e), n();
    }, function () {
      Q(e), t();
    }, 10, 5e3);
  },
      X = function X(n, t) {
    n.notificationManager ? n.notificationManager.open({
      text: t,
      type: "warning",
      timeout: 0,
      icon: ""
    }) : n.windowManager.alert(t);
  },
      Y = function Y(n) {
    n.EditorManager.on("AddEditor", function (n) {
      var t = n.editor,
          r = t.settings.service_message;
      r && W(function () {
        X(t, t.settings.service_message);
      }, function () {
        a.alert(r);
      });
    });
  },
      Z = function Z(n) {
    var t,
        r,
        e = L("tinymce.util.URI", u);
    (t = n.base_url) && (this.baseURL = new e(this.documentBaseURL).toAbsolute(t.replace(/\/+$/, "")), this.baseURI = new e(this.baseURL)), r = n.suffix, n.suffix && (this.suffix = r), this.defaultSettings = n;
  },
      nn = function nn(n) {
    return [L("tinymce.util.Tools", u).extend({}, this.defaultSettings, n)];
  },
      tn = {
    patch: i(function (n) {
      return "function" != typeof n.overrideDefaults;
    }, function (n) {
      Y(n), n.overrideDefaults = Z, n.EditorManager.init = c(n.EditorManager.init, nn);
    })
  },
      rn = {
    patch: i(function (n) {
      return $(n, "4.5.0");
    }, function (n) {
      var e;
      n.overrideDefaults = c(n.overrideDefaults, (e = n, function (n) {
        var t = n.plugin_base_urls;

        for (var r in t) {
          e.PluginManager.urls[r] = t[r];
        }
      }));
    })
  },
      en = function en(n) {
    o(n, [tn.patch, rn.patch, G.patch, k.patch]);
  };

  en(u.tinymce);
}(window);

(function (cloudSettings) {
  tinymce.overrideDefaults(cloudSettings);
})({
  "rtc_tenant_id": "no-api-key",
  "imagetools_proxy": "https://imageproxy.tiny.cloud/2/image",
  "suffix": ".min",
  "linkchecker_service_url": "https://hyperlinking.tiny.cloud",
  "spellchecker_rpc_url": "https://spelling.tiny.cloud",
  "spellchecker_api_key": "no-api-key",
  "tinydrive_service_url": "https://catalog.tiny.cloud",
  "api_key": "no-api-key",
  "imagetools_api_key": "no-api-key",
  "tinydrive_api_key": "no-api-key",
  "forced_plugins": ["chiffer"],
  "referrer_policy": "origin",
  "content_css_cors": true,
  "custom_plugin_urls": {},
  "chiffer_snowplow_service_url": "https://sp.tinymce.com/i",
  "mediaembed_api_key": "no-api-key",
  "rtc_service_url": "https://rtc.tiny.cloud",
  "linkchecker_api_key": "no-api-key",
  "mediaembed_service_url": "https://hyperlinking.tiny.cloud",
  "service_message": "This domain is not registered with Tiny Cloud.  Please see the <a target=\"_blank\" href=\"https://www.tiny.cloud/docs/quick-start/\">quick start guide</a> or <a target=\"_blank\" href=\"https://www.tiny.cloud/auth/signup/\">create an account</a>."
});

tinymce.baseURL = "https://cdn.tiny.cloud/1/no-api-key/tinymce/5.6.2-104";
/* Ephox chiffer plugin
*
* Copyright 2010-2019 Tiny Technologies Inc. All rights reserved.
*
* Version: 1.6.0-13
*/

!function () {
  "use strict";

  function o() {}

  function i() {
    return new Date().getTime();
  }

  function t(t, n) {
    var r,
        c,
        e,
        n = (r = t, c = n, {
      send: function send(t, n, e) {
        var t = "?aid=" + c + "&tna=tinymce_cloud&p=web&dtm=" + n + "&stm=" + i() + "&tz=" + ("undefined" != typeof Intl ? encodeURIComponent(Intl.DateTimeFormat().resolvedOptions().timeZone) : "N%2FA") + "&e=se&se_ca=" + t,
            o = document.createElement("img");
        o.src = r.chiffer_snowplow_service_url + t;

        t = function t(_t5) {
          return function () {
            o.onload = null, o.onerror = null, e(_t5);
          };
        };

        o.onload = t(!0), o.onerror = t(!1);
      }
    });
    return e = n, {
      sendStat: function sendStat(t) {
        return function () {
          e.send(t, i(), o);
        };
      }
    };
  }

  var e,
      n,
      r,
      c,
      u,
      a = (e = "string", function (t) {
    return t = _typeof(n = t), (null === n ? "null" : "object" == t && (Array.prototype.isPrototypeOf(n) || n.constructor && "Array" === n.constructor.name) ? "array" : "object" == t && (String.prototype.isPrototypeOf(n) || n.constructor && "String" === n.constructor.name) ? "string" : t) === e;
    var n;
  });
  r = tinymce.defaultSettings, c = {
    load: o
  }, u = function (t) {
    t = t.api_key;
    return a(t) ? t : void 0;
  }(r), c = void 0 === u ? c : ((n = t(r, u)).sendStat("script_load")(), {
    load: function load(t) {
      t.once("init", n.sendStat("init")), t.once("focus", n.sendStat("focus")), t.on("ExportPdf", n.sendStat("export_pdf")), t.on("PastePreProcess", function (t) {
        null == t.source || n.sendStat("powerpaste_" + t.source)();
      });
    }
  }), tinymce.PluginManager.add("chiffer", c.load);
}();

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./resources/assets/js/tinymce.js");
/******/ })()
;